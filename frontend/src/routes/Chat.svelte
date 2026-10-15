<script lang="ts">
  import { onMount, tick } from 'svelte';
  import MessageRow from '../components/MessageRow.svelte';
  import Composer from '../components/Composer.svelte';
  import { streamChat } from '../lib/sse';
  import { addMessage, createConversation, getConversation } from '../lib/conversations';
  import { auth } from '../lib/auth.svelte';
  import type { ChatMessage, ThinkingOption } from '../lib/types';

  interface Props {
    onMessagesChange?: (hasMessages: boolean) => void;
    initialMessage?: string;
    conversationId?: string;
  }

  let { onMessagesChange, initialMessage = '', conversationId = '' }: Props = $props();

  let messages = $state<ChatMessage[]>([]);
  let selectedModelId = $state('mimo-v2.6-pro@default');
  let isStreaming = $state(false);
  let abortController = $state<AbortController | null>(null);
  let chatContainerRef = $state<HTMLDivElement | null>(null);
  let didAutoSend = $state(false);
  let activeConversationId = $state('');
  let didLoadHistory = $state(false);

  // Sinkronkan ID percakapan dari prop
  $effect(() => {
    activeConversationId = conversationId;
  });

  // Muat riwayat bila dibuka dari sidebar
  $effect(() => {
    if (conversationId && !didLoadHistory) {
      didLoadHistory = true;
      void (async () => {
        try {
          const detail = await getConversation(conversationId);
          messages = detail.messages.map((m) => ({
            id: m.id,
            role: m.role,
            content: m.content,
            timestamp: m.created_at * 1000,
          }));
          activeConversationId = conversationId;
          scrollToBottom();
        } catch {
          // gagal memuat riwayat: biarkan kosong
        }
      })();
    }
  });

  function greetingByHour(): string {
    const h = new Date().getHours();
    if (h < 11) return 'Selamat pagi';
    if (h < 15) return 'Selamat siang';
    if (h < 19) return 'Selamat sore';
    return 'Selamat malam';
  }

  const SUGGESTIONS = [
    {
      title: 'Rumus EOQ & Total Biaya Persediaan',
      desc: 'Penurunan kalkulus ukuran lot pemesanan ekonomis dan reorder point',
      query: 'Jelaskan konsep Economic Order Quantity (EOQ), turunkan rumusnya secara matematis, dan berikan arti tiap variabelnya.',
    },
    {
      title: 'Peta Proses Operasi (OPC) Perakitan',
      desc: 'Standar ASME Y15 untuk pemetaan komponen dan inspeksi perakitan',
      query: 'Jelaskan fungsi Operation Process Chart (OPC), simbol ASME yang dipakai, dan cara menyusunnya untuk perakitan produk manufaktur.',
    },
    {
      title: 'Critical Path Method (CPM)',
      desc: 'Perhitungan Forward & Backward Pass jadwal proyek industri',
      query: 'Bagaimana langkah-langkah menentukan lintasan kritis (Critical Path Method) dalam manajemen proyek industri?',
    },
    {
      title: '7 Pemborosan (Waste) Lean Manufacturing',
      desc: 'Konsep DOWNTIME eliminasi waste di lantai pabrik',
      query: 'Jelaskan 7 jenis pemborosan (waste) dalam Lean Manufacturing dan berikan contoh konkret eliminasinya di lantai pabrik.',
    },
  ];

  $effect(() => {
    if (onMessagesChange) {
      onMessagesChange(messages.length > 0);
    }
  });

  async function scrollToBottom() {
    await tick();
    if (chatContainerRef) {
      chatContainerRef.scrollTop = chatContainerRef.scrollHeight;
    }
  }

  function handleSelectModel(opt: ThinkingOption) {
    selectedModelId = opt.modelId;
  }

  async function handleSend(text: string, docContext?: string) {
    if (isStreaming || !text.trim()) return;

    const userMsg: ChatMessage = {
      id: 'user-' + Date.now(),
      role: 'user',
      content: text,
      timestamp: Date.now(),
    };

    const assistantMsgId = 'assistant-' + (Date.now() + 1);
    const assistantMsg: ChatMessage = {
      id: assistantMsgId,
      role: 'assistant',
      content: '',
      timestamp: Date.now(),
    };

    messages = [...messages, userMsg, assistantMsg];
    isStreaming = true;
    scrollToBottom();

    // Persist ke server: buat percakapan bila ini pesan pertama
    void (async () => {
      try {
        if (!activeConversationId) {
          const title = text.trim().slice(0, 60);
          const conv = await createConversation(title);
          activeConversationId = conv.id;
        }
        await addMessage(activeConversationId, 'user', text);
      } catch {
        // gagal menyimpan riwayat tidak boleh memblokir chat
      }
    })();

    abortController = new AbortController();

    await streamChat({
      message: text,
      modelId: selectedModelId,
      documentContext: docContext,
      history: messages.slice(0, -1),
      signal: abortController.signal,
      onChunk: (chunk: string) => {
        messages = messages.map((m) => {
          if (m.id === assistantMsgId) {
            return { ...m, content: m.content + chunk };
          }
          return m;
        });
        scrollToBottom();
      },
      onDone: () => {
        isStreaming = false;
        abortController = null;
        scrollToBottom();
        // Simpan jawaban asisten ke riwayat
        const final = messages.find((m) => m.id === assistantMsgId);
        if (activeConversationId && final && final.content.trim()) {
          void addMessage(activeConversationId, 'assistant', final.content).catch(() => {});
        }
      },
      onError: (err: Error) => {
        messages = messages.map((m) => {
          if (m.id === assistantMsgId) {
            return {
              ...m,
              content: m.content + `\n\n*(Error koneksi: ${err.message})*`,
            };
          }
          return m;
        });
        isStreaming = false;
        abortController = null;
        scrollToBottom();
      },
    });
  }

  function handleStop() {
    if (abortController) {
      abortController.abort();
      abortController = null;
    }
    isStreaming = false;
  }

  // Kirim pertanyaan awal (dari chip landing) tepat satu kali saat mount
  $effect(() => {
    if (initialMessage && !didAutoSend && messages.length === 0) {
      didAutoSend = true;
      handleSend(initialMessage);
    }
  });
</script>

<div class="flex-1 flex flex-col overflow-hidden min-h-0 relative bg-white">

  <!-- Message Container (Hanya area ini yang scroll) -->
  <div bind:this={chatContainerRef} class="flex-1 overflow-y-auto min-h-0 relative z-10">
    {#if messages.length === 0}
      <!-- Empty State: logo RuangTI + sapaan acak terpusat di atas latar putih polos -->
      <div class="h-full flex flex-col items-center justify-center px-6">
        <div class="w-12 h-12 bg-black text-white neo-card flex items-center justify-center font-black text-lg mb-4 shadow-[3px_3px_0px_#000]">
          TI
        </div>
        <h1 class="text-xl sm:text-3xl font-black text-black tracking-tight text-center leading-snug">
          {greetingByHour()}, <span>{auth.user?.name?.trim() || 'Pengguna'}</span>
        </h1>
      </div>
    {:else}
      <!-- Messages List -->
      <div class="py-3 space-y-3">
        {#each messages as msg, i (msg.id)}
          <MessageRow
            message={msg}
            isStreaming={isStreaming && i === messages.length - 1}
          />
        {/each}
      </div>
    {/if}
  </div>

  <!-- Pinned Bottom Composer Dock (Fixed di dasar viewport dengan safe-area inset) -->
  <div class="shrink-0 bg-white/95 backdrop-blur-md pt-2 pb-3 z-20 pb-[max(12px,env(safe-area-inset-bottom))]">
    <Composer
      {selectedModelId}
      {isStreaming}
      onSelectModel={handleSelectModel}
      onSend={handleSend}
      onStop={handleStop}
    />
  </div>
</div>
