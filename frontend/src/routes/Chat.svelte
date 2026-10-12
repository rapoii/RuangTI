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
      title: 'Economic Order Quantity (EOQ)',
      desc: 'Penurunan matematis rumus EOQ via kalkulus & arti variabel',
      query: 'Jelaskan konsep Economic Order Quantity (EOQ), turunkan rumusnya secara matematis, dan berikan arti tiap variabelnya.',
    },
    {
      title: '7 Pemborosan (Waste) Lean',
      desc: 'Konsep DOWNTIME dalam sistem manufaktur Toyota',
      query: 'Jelaskan 7 jenis pemborosan (waste) dalam Lean Manufacturing dan berikan contoh konkret di lantai pabrik.',
    },
    {
      title: 'Critical Path Method (CPM)',
      desc: 'Perhitungan Forward & Backward Pass jadwal proyek',
      query: 'Bagaimana langkah-langkah menentukan jalur kritis (Critical Path Method) dalam manajemen proyek industri?',
    },
    {
      title: 'Peta Kontrol Mutu (SPC)',
      desc: 'Batas kendali UCL & LCL pada diagram X-bar dan R',
      query: 'Jelaskan rumus dan cara pembuatan peta kendali X-bar dan R-chart dalam Statistical Process Control (SPC).',
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

<div class="flex flex-col h-[calc(100vh-61px)] bg-canvas">
  <!-- Message Container -->
  <div bind:this={chatContainerRef} class="flex-1 overflow-y-auto">
    {#if messages.length === 0}
      <!-- Empty State / Welcome Screen -->
      <div class="max-w-3xl mx-auto px-4 py-10 sm:py-16 flex flex-col items-center text-center">
        <div class="w-14 h-14 rounded-2xl bg-accent/15 border border-accent/30 flex items-center justify-center font-bold text-accent text-2xl shadow-sm mb-4">
          TI
        </div>
        <h1 class="text-xl sm:text-2xl font-bold text-text-primary tracking-tight mb-2">
          Asisten Riset & Keilmuan Teknik Industri
        </h1>
        <p class="text-xs sm:text-sm text-text-secondary max-w-lg mb-8 leading-relaxed">
          Terintegrasi langsung dengan 4.595 modul materi Teknik Industri, mesin penalaran Mimoly MiMo Studio, dan pembacaan rumus KaTeX ilmiah.
        </p>

        <!-- Suggestion Grid -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full text-left">
          {#each SUGGESTIONS as s}
            <button
              type="button"
              onclick={() => handleSend(s.query)}
              class="p-3.5 rounded-xl bg-surface border border-border hover:border-accent/40 hover:bg-surface-hover transition-all text-left group shadow-2xs"
            >
              <div class="flex items-center justify-between mb-1">
                <span class="text-xs font-semibold text-text-primary group-hover:text-accent transition-colors">
                  {s.title}
                </span>
                <svg class="w-3.5 h-3.5 text-text-tertiary group-hover:text-accent transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
              <p class="text-[11px] text-text-secondary leading-normal">{s.desc}</p>
            </button>
          {/each}
        </div>
      </div>
    {:else}
      <!-- Messages List -->
      <div class="divide-y divide-border/30 pb-4">
        {#each messages as msg, i (msg.id)}
          <MessageRow
            message={msg}
            isStreaming={isStreaming && i === messages.length - 1}
          />
        {/each}
      </div>
    {/if}
  </div>

  <!-- Bottom Floating Composer -->
  <div class="sticky bottom-0 bg-canvas/90 backdrop-blur-md pt-2 pb-3 border-t border-border/40">
    <Composer
      {selectedModelId}
      {isStreaming}
      onSelectModel={handleSelectModel}
      onSend={handleSend}
      onStop={handleStop}
    />
  </div>
</div>
