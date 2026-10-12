<script lang="ts">
  import katex from 'katex';
  import ThinkingBlock from './ThinkingBlock.svelte';
  import type { ChatMessage } from '../lib/types';

  interface Props {
    message: ChatMessage;
    isStreaming?: boolean;
  }

  let { message, isStreaming = false }: Props = $props();

  // Pisahkan blok <think>...</think> dari jawaban akhir
  let parsed = $derived.by(() => {
    const raw = message.content || '';
    let thinking = message.thinking || '';
    let body = raw;

    if (raw.includes('<think>')) {
      const startIdx = raw.indexOf('<think>') + 7;
      if (raw.includes('</think>')) {
        const endIdx = raw.indexOf('</think>');
        thinking = raw.substring(startIdx, endIdx).trim();
        body = raw.substring(endIdx + 8).trim();
      } else {
        // Sedang streaming di dalam blok <think>
        thinking = raw.substring(startIdx).trim();
        body = '';
      }
    }

    return { thinking, body };
  });

  // Render teks yang memuat rumus KaTeX $$...$$ dan $...$
  function renderContent(text: string): string {
    if (!text) return '';

    // 1. Ganti Display Math $$...$$
    let formatted = text.replace(/\$\$([\s\S]*?)\$\$/g, (_, math) => {
      try {
        return `<div class="katex-display my-3 overflow-x-auto text-center">${katex.renderToString(math.trim(), {
          displayMode: true,
          throwOnError: false,
        })}</div>`;
      } catch (err) {
        return `<pre class="text-xs text-red-500 font-mono">$$${math}$$</pre>`;
      }
    });

    // 2. Ganti Inline Math $...$
    formatted = formatted.replace(/\$([^\$\n]+?)\$/g, (_, math) => {
      try {
        return katex.renderToString(math.trim(), {
          displayMode: false,
          throwOnError: false,
        });
      } catch (err) {
        return `$${math}$`;
      }
    });

    // 3. Format baris baru dan paragraf sederhana
    formatted = formatted.replace(/\n\n/g, '<br/><br/>');

    return formatted;
  }
</script>

<div class="py-4 px-3 sm:px-6 transition-colors {message.role === 'user' ? 'bg-canvas-subtle/40' : 'bg-transparent'}">
  <div class="max-w-4xl mx-auto flex gap-3.5 sm:gap-4 items-start">
    <!-- Avatar -->
    <div class="shrink-0 pt-0.5">
      {#if message.role === 'user'}
        <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-text-primary text-surface flex items-center justify-center font-semibold text-xs shadow-xs">
          U
        </div>
      {:else}
        <div class="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-accent text-surface flex items-center justify-center font-bold text-xs shadow-xs">
          TI
        </div>
      {/if}
    </div>

    <!-- Message Content -->
    <div class="flex-1 min-w-0">
      <div class="flex items-center gap-2 mb-1">
        <span class="text-xs font-semibold text-text-primary">
          {message.role === 'user' ? 'Kamu' : 'RuangTI AI'}
        </span>
        <span class="text-[10px] text-text-tertiary">
          {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      </div>

      <!-- Tampilkan Thinking Block jika ada -->
      {#if parsed.thinking}
        <ThinkingBlock thinking={parsed.thinking} isStreaming={isStreaming && !parsed.body} />
      {/if}

      <!-- Jawaban Teks Utama -->
      {#if parsed.body}
        <div class="text-xs sm:text-sm text-text-primary leading-relaxed break-words font-sans space-y-2">
          {@html renderContent(parsed.body)}
        </div>
      {:else if isStreaming && !parsed.thinking}
        <div class="flex items-center gap-1.5 text-xs text-text-tertiary italic">
          <span class="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          Menyiapkan respon...
        </div>
      {/if}
    </div>
  </div>
</div>
