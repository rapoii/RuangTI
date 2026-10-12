<script lang="ts">
  import { THINKING_EFFORT_OPTIONS, type ThinkingOption } from '../lib/types';

  interface Props {
    selectedModelId: string;
    onSelect: (option: ThinkingOption) => void;
  }

  let { selectedModelId, onSelect }: Props = $props();

  let isOpen = $state(false);
  let containerRef = $state<HTMLDivElement | null>(null);

  let currentOption = $derived(
    THINKING_EFFORT_OPTIONS.find((o) => o.modelId === selectedModelId) || THINKING_EFFORT_OPTIONS[0]
  );

  function toggleOpen() {
    isOpen = !isOpen;
  }

  function handleSelect(opt: ThinkingOption) {
    onSelect(opt);
    isOpen = false;
  }

  // Tutup dropdown saat mengetuk di luar area selector (klik-away).
  // Memakai listener dokumen agar tidak terpengaruh containing block dari
  // ancestor yang punya `backdrop-filter` (mis. footer composer).
  $effect(() => {
    if (!isOpen) return;

    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node | null;
      if (containerRef && target && !containerRef.contains(target)) {
        isOpen = false;
      }
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') isOpen = false;
    };

    document.addEventListener('pointerdown', onPointerDown, true);
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('pointerdown', onPointerDown, true);
      document.removeEventListener('keydown', onKeyDown);
    };
  });
</script>

<div bind:this={containerRef} class="relative inline-block text-left">
  <!-- Trigger Button (Neobrutalism .neo-btn) -->
  <button
    type="button"
    onclick={toggleOpen}
    class="neo-btn h-8 flex items-center gap-1.5 px-2.5 text-xs font-bold bg-white hover:bg-neutral-50 text-black shrink-0"
    title="Pilih model AI"
  >
    <svg class="w-3.5 h-3.5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
    </svg>
    <span class="max-w-[130px] truncate">{currentOption.shortLabel}</span>
    <svg class="w-3 h-3 text-neutral-500 transition-transform {isOpen ? 'rotate-180' : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  </button>

  <!-- Dropdown Popover (.neo-card B&W) -->
  {#if isOpen}
    <div class="absolute bottom-full mb-2 left-0 z-50 w-72 sm:w-80 neo-card bg-white p-2 flex flex-col gap-1.5 shadow-[4px_4px_0px_#000]">
      <div class="px-2 py-1 border-b-2 border-black text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider flex justify-between">
        <span>Pilih Model</span>
        <span>RUANGTI</span>
      </div>

      {#each THINKING_EFFORT_OPTIONS as opt}
        <button
          type="button"
          onclick={() => handleSelect(opt)}
          class="w-full text-left p-2 rounded-lg transition-all flex items-start gap-2 border-2 {opt.modelId === selectedModelId ? 'bg-black text-white border-black' : 'bg-white hover:bg-neutral-100 text-black border-transparent'}"
        >
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-1.5">
              <span class="text-xs font-black">{opt.label}</span>
              <span class="text-[9px] font-mono px-1.5 py-0.2 rounded border {opt.modelId === selectedModelId ? 'border-neutral-700 bg-neutral-800 text-white' : 'border-black bg-neutral-100 text-black'} font-bold">
                {opt.badge}
              </span>
            </div>
            <p class="text-[10px] {opt.modelId === selectedModelId ? 'text-neutral-300' : 'text-neutral-500'} mt-0.5 leading-snug">
              {opt.description}
            </p>
          </div>
        </button>
      {/each}
    </div>
  {/if}
</div>
