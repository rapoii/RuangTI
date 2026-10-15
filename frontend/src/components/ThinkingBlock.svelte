<script lang="ts">
  interface Props {
    thinking: string;
    isStreaming?: boolean;
  }

  let { thinking, isStreaming = false }: Props = $props();

  let isOpen = $state(true);

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

<div class="my-2 neo-card bg-white overflow-hidden shadow-[2px_2px_0px_#000] transition-all">
  <!-- Header Bar -->
  <button
    type="button"
    onclick={toggle}
    class="w-full px-3 py-1.5 flex items-center justify-between text-left bg-neutral-100 hover:bg-neutral-200 transition-colors cursor-pointer select-none border-b-2 border-black"
  >
    <div class="flex items-center gap-2">
      <div class="w-4 h-4 rounded-full flex items-center justify-center bg-black text-white text-[9px] font-bold">
        {#if isStreaming}
          <svg class="w-2.5 h-2.5 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
            <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
            <path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"></path>
          </svg>
        {:else}
          ✓
        {/if}
      </div>
      <span class="text-[11px] font-mono font-bold text-black uppercase tracking-tight">
        {isStreaming ? 'Sedang menalar proses solusi...' : 'Logika Penalaran (Thinking)'}
      </span>
      <span class="text-[10px] mono text-neutral-500">
        ({thinking.length} karakter)
      </span>
    </div>

    <div class="flex items-center gap-1 text-black text-xs font-mono font-bold">
      <span class="text-[10px]">{isOpen ? 'TUTUP' : 'LIHAT'}</span>
      <svg class="w-3 h-3 transition-transform duration-200 {isOpen ? 'rotate-180' : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </div>
  </button>

  <!-- Collapsible Content -->
  {#if isOpen}
    <div class="p-3 text-[11px] text-neutral-700 leading-relaxed font-mono whitespace-pre-wrap bg-white max-h-72 overflow-y-auto">
      {thinking}
    </div>
  {/if}
</div>
