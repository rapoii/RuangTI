<script lang="ts">
  import { onMount, tick } from 'svelte';
  import MessageRow from '../components/MessageRow.svelte';
  import Composer from '../components/Composer.svelte';
  import { streamChat } from '../lib/sse';
  import type { ChatMessage, ThinkingOption } from '../lib/types';

  let messages = $state<ChatMessage[]>([]);
  let selectedModelId = $state('mimo-v2.6-pro@default');
  let isStreaming = $state(false);
  let abortController = $state<AbortController | null>(null);
  let chatContainerRef = $state<HTMLDivElement | null>(null);

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
  <!-- Watermark Bagan Alir Simbol ASME di Latar Belakang -->
  <svg class="asme-watermark-bw w-full h-full" xmlns="http://www.w3.org/2000/svg">
    <g stroke="#000" stroke-width="2" fill="none">
      <circle cx="60" cy="110" r="22" />
      <line x1="60" y1="132" x2="60" y2="175" />
      <rect x="38" y="175" width="44" height="44" rx="2" />
      <line x1="60" y1="219" x2="60" y2="260" />
      <path d="M42 260 L78 260 L60 288 Z" />

      <circle cx="340" cy="330" r="20" />
      <line x1="340" y1="350" x2="340" y2="385" />
      <rect x="320" y="385" width="40" height="40" rx="2" />
      <line x1="340" y1="425" x2="340" y2="460" />
      <path d="M322 460 L358 460 L340 485 Z" />
    </g>
  </svg>

  <!-- Message Container (Hanya area ini yang scroll) -->
  <div bind:this={chatContainerRef} class="flex-1 overflow-y-auto min-h-0 relative z-10">
    {#if messages.length === 0}
      <!-- Empty State / Welcome Screen Monokrom -->
      <div class="max-w-3xl mx-auto px-4 py-8 sm:py-14 flex flex-col items-center text-center">
        <!-- Badge Identitas ASME -->
        <div class="neo-badge inline-flex items-center gap-1.5 px-2.5 py-1 bg-neutral-100 text-black text-[10px] mono font-bold mb-3">
          <span>ASME Y15.3M WORK STUDY</span>
          <span>•</span>
          <span>4.595 MODUL</span>
        </div>

        <div class="w-12 h-12 bg-black text-white neo-card flex items-center justify-center font-black text-xl mb-3 shadow-[3px_3px_0px_#000]">
          TI
        </div>
        <h1 class="text-lg sm:text-2xl font-black text-black tracking-tight mb-1.5">
          Asisten Riset & Keilmuan Teknik Industri
        </h1>
        <p class="text-xs sm:text-sm text-neutral-600 max-w-md mb-6 leading-relaxed">
          Konsultasi metodologi kerja, perakitan produk, tata letak pabrik, dan kalkulasi matematis.
        </p>

        <!-- Suggestion Grid (.neo-btn seragam) -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full text-left">
          {#each SUGGESTIONS as s}
            <button
              type="button"
              onclick={() => handleSend(s.query)}
              class="neo-btn p-3 bg-white hover:bg-neutral-50 text-left transition-all group shadow-[2px_2px_0px_#000]"
            >
              <div class="flex items-center justify-between mb-1">
                <span class="text-xs font-black text-black group-hover:underline">
                  {s.title}
                </span>
                <span class="text-[10px] mono font-bold text-black group-hover:translate-x-0.5 transition-transform">→</span>
              </div>
              <p class="text-[11px] text-neutral-500 leading-normal font-medium">{s.desc}</p>
            </button>
          {/each}
        </div>
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
