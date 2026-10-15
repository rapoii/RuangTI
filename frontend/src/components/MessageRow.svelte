<script lang="ts">
  import katex from 'katex';
  import ThinkingBlock from './ThinkingBlock.svelte';
  import type { ChatMessage } from '../lib/types';

  interface Props {
    message: ChatMessage;
    isStreaming?: boolean;
  }

  let { message, isStreaming = false }: Props = $props();

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
        thinking = raw.substring(startIdx).trim();
        body = '';
      }
    }

    return { thinking, body };
  });

  function renderContent(text: string): string {
    if (!text) return '';

    // 1. Ganti Display Math $$...$$ ke dalam box .neo-input flat di tengah
    let formatted = text.replace(/\$\$([\s\S]*?)\$\$/g, (_, math) => {
      try {
        const rendered = katex.renderToString(math.trim(), {
          displayMode: true,
          throwOnError: false,
        });
        return `<div class="neo-input bg-neutral-50 p-3 my-2.5 text-center overflow-x-auto text-black font-serif">${rendered}</div>`;
      } catch (err) {
        return `<pre class="text-xs text-black font-mono">$$${math}$$</pre>`;
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

    // 3. Format baris baru
    formatted = formatted.replace(/\n\n/g, '<br/><br/>');

    return formatted;
  }
</script>

<div class="py-2 px-3 sm:px-6 w-full">
  <div class="max-w-4xl mx-auto">
    {#if message.role === 'user'}
      <!-- User Bubble (Solusi 3: bg-neutral-100, border-2 black, shadow 3px) -->
      <div class="flex justify-end">
        <div class="neo-card bg-neutral-100 text-black px-4 py-3 max-w-[88%] sm:max-w-[80%] text-xs font-semibold leading-relaxed">
          <div class="flex items-center justify-between gap-3 mb-1 border-b border-black/10 pb-1">
            <span class="neo-badge px-1.5 py-0.2 bg-black text-white text-[9px] mono font-bold">
              USER
            </span>
            <span class="text-[9px] mono text-neutral-500">
              {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>
          <div class="text-xs text-black whitespace-pre-wrap">
            {message.content}
          </div>
        </div>
      </div>
    {:else}
      <!-- Assistant Bubble (Solusi 3: bg-white, border-2 black, shadow 3px) -->
      <div class="flex justify-start">
        <div class="neo-card bg-white text-black p-4 max-w-[95%] sm:max-w-[88%] text-xs leading-relaxed space-y-2.5">
          <div class="flex items-center justify-between border-b-2 border-black pb-1.5">
            <div class="flex items-center gap-1.5">
              <span class="neo-badge w-5 h-5 bg-black text-white flex items-center justify-center text-[10px] font-black">
                TI
              </span>
              <span class="font-black text-xs tracking-tight text-black">RUANGTI AI</span>
            </div>
            <span class="text-[9px] mono text-neutral-500">
              {new Date(message.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </span>
          </div>

          <!-- Thinking Accordion -->
          {#if parsed.thinking}
            <ThinkingBlock thinking={parsed.thinking} isStreaming={isStreaming && !parsed.body} />
          {/if}

          <!-- Answer Body -->
          {#if parsed.body}
            <div class="text-xs sm:text-[13px] text-neutral-900 leading-relaxed font-sans space-y-2">
              {@html renderContent(parsed.body)}
            </div>
          {:else if isStreaming && !parsed.thinking}
            <div class="flex items-center gap-2 text-xs text-neutral-500 font-mono italic">
              <span class="w-2 h-2 rounded-full bg-black animate-ping"></span>
              Mempersiapkan jawaban...
            </div>
          {/if}
        </div>
      </div>
    {/if}
  </div>
</div>
