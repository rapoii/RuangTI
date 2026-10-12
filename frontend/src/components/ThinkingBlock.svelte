<script lang="ts">
  interface Props {
    thinking: string;
    isStreaming?: boolean;
  }

  let { thinking, isStreaming = false }: Props = $props();

  // Terbuka otomatis saat sedang aktif berpikir, atau toggleable manual
  let isOpen = $state(true);

  // Jika selesai streaming dan user belum toggle, biarkan user menutupnya atau default tertutup
  $effect(() => {
    if (!isStreaming) {
      isOpen = false;
    } else {
      isOpen = true;
    }
  });

  function toggle() {
    isOpen = !isOpen;
  }
</script>

<div class="my-2.5 rounded-xl border border-border bg-canvas-subtle/80 overflow-hidden shadow-2xs transition-all">
  <!-- Header Bar -->
  <button
    type="button"
    onclick={toggle}
    class="w-full px-3.5 py-2 flex items-center justify-between text-left hover:bg-surface-active/50 transition-colors cursor-pointer select-none"
  >
    <div class="flex items-center gap-2">
      <div class="w-4 h-4 rounded-full flex items-center justify-center bg-accent/15 text-accent">
        {#if isStreaming}
          <!-- Spinning indicator -->
          <svg class="w-2.5 h-2.5 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
            <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
            <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
          </svg>
        {:else}
          <svg class="w-2.5 h-2.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        {/if}
      </div>
      <span class="text-xs font-semibold text-text-primary tracking-tight">
        {isStreaming ? 'Sedang menalar proses solusi...' : 'Proses Penalaran Model (Thinking)'}
      </span>
      <span class="text-[10px] text-text-tertiary">
        ({thinking.length} karakter)
      </span>
    </div>

    <div class="flex items-center gap-1 text-text-tertiary text-xs">
      <span class="text-[11px]">{isOpen ? 'Tutup' : 'Lihat'}</span>
      <svg class="w-3.5 h-3.5 transition-transform duration-200 {isOpen ? 'rotate-180' : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </div>
  </button>

  <!-- Collapsible Content with CSS Grid transition -->
  <div
    class="grid transition-[grid-template-rows] duration-250 ease-out {isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}"
  >
    <div class="overflow-hidden">
      <div class="p-3.5 pt-1 text-xs text-text-secondary leading-relaxed font-mono whitespace-pre-wrap border-t border-border/60 bg-surface/40 max-h-80 overflow-y-auto">
        {thinking}
      </div>
    </div>
  </div>
</div>
