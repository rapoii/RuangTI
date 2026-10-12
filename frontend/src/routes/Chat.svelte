<script lang="ts">
  import { onMount, tick } from 'svelte';
  import MessageRow from '../components/MessageRow.svelte';
  import Composer from '../components/Composer.svelte';
  import { streamChat } from '../lib/sse';
  import type { ChatMessage, ThinkingOption } from '../lib/types';

  interface Props {
    onMessagesChange?: (hasMessages: boolean) => void;
  }

  let { onMessagesChange }: Props = $props();

  let messages = $state<ChatMessage[]>([]);
  let selectedModelId = $state('mimo-v2.6-pro@default');
  let isStreaming = $state(false);
  let abortController = $state<AbortController | null>(null);
  let chatContainerRef = $state<HTMLDivElement | null>(null);

  // Kata singkat acak khas Teknik Industri — diganti tiap percakapan baru
  const RANDOM_WORDS = [
    'Efisiensi',
    'Optimasi',
    'Sinergi',
    'Presisi',
    'Produktivitas',
    'Sistem',
    'Standarisasi',
    'Analisis',
    'Integrasi',
    'Inovasi',
    'Kualitas',
    'Kapasitas',
    'Perbaikan',
    'Perancangan',
    'Simulasi',
  ];

  let randomWord = $state('');

  function pickRandomWord() {
    randomWord = RANDOM_WORDS[Math.floor(Math.random() * RANDOM_WORDS.length)];
  }

  function greetingByHour(): string {
    const h = new Date().getHours();
    if (h < 11) return 'Selamat pagi';
    if (h < 15) return 'Selamat siang';
    if (h < 19) return 'Selamat sore';
    return 'Selamat malam';
  }

  pickRandomWord();

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
</script>

<div class="flex-1 flex flex-col overflow-hidden min-h-0 relative ti-grid-bw">

  <!-- Message Container (Hanya area ini yang scroll) -->
  <div bind:this={chatContainerRef} class="flex-1 overflow-y-auto min-h-0 relative z-10">
    {#if messages.length === 0}
      <!-- Empty State: sapaan acak terpusat (konsep Claude) di atas latar grid kotak-kotak -->
      <div class="h-full flex items-center justify-center px-6">
        <h1 class="text-xl sm:text-3xl font-black text-black tracking-tight text-center leading-snug">
          {greetingByHour()}, <span class="underline decoration-2 underline-offset-4">{randomWord}</span>
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
  <div class="shrink-0 bg-white/95 backdrop-blur-md pt-2 pb-3 border-t-2 border-black z-20 pb-[max(12px,env(safe-area-inset-bottom))]">
    <Composer
      {selectedModelId}
      {isStreaming}
      onSelectModel={handleSelectModel}
      onSend={handleSend}
      onStop={handleStop}
    />
  </div>
</div>
