<script lang="ts">
  import { THINKING_EFFORT_OPTIONS, type ThinkingOption } from '../lib/types';

  interface Props {
    selectedModelId: string;
    onSelect: (option: ThinkingOption) => void;
  }

  let { selectedModelId, onSelect }: Props = $props();

  let isOpen = $state(false);

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
</script>

<div class="relative inline-block text-left">
  <!-- Trigger Button -->
  <button
    type="button"
    onclick={toggleOpen}
    class="flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded-md bg-canvas-subtle hover:bg-surface-active text-text-secondary hover:text-text-primary border border-border transition-colors shadow-2xs"
    title="Pilih tingkat penalaran thinking AI"
  >
    <svg class="w-3.5 h-3.5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path>
    </svg>
    <span class="max-w-[120px] truncate">{currentOption.shortLabel}</span>
    <span class="text-[10px] px-1 py-0.2 rounded bg-accent/15 text-accent font-semibold">
      {currentOption.badge}
    </span>
    <svg class="w-3 h-3 text-text-tertiary transition-transform {isOpen ? 'rotate-180' : ''}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  </button>

  <!-- Dropdown Popover -->
  {#if isOpen}
    <!-- Backdrop to close -->
    <button
      type="button"
      class="fixed inset-0 z-40 bg-transparent cursor-default"
      onclick={() => (isOpen = false)}
      aria-label="Tutup menu"
    ></button>

    <div class="absolute bottom-full mb-1.5 left-0 z-50 w-72 sm:w-80 rounded-xl bg-surface border border-border shadow-lg p-1.5 flex flex-col gap-1">
      <div class="px-2.5 py-1.5 border-b border-border text-[11px] font-semibold text-text-tertiary uppercase tracking-wider">
        Tingkat Penalaran (MiMo Studio)
      </div>

      {#each THINKING_EFFORT_OPTIONS as opt}
        <button
          type="button"
          onclick={() => handleSelect(opt)}
          class="w-full text-left p-2 rounded-lg transition-colors flex items-start gap-2.5 {opt.modelId === selectedModelId ? 'bg-accent/10 border border-accent/25' : 'hover:bg-canvas-subtle border border-transparent'}"
        >
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-1.5">
              <span class="text-xs font-semibold text-text-primary">{opt.label}</span>
              <span class="text-[10px] px-1.5 py-0.2 rounded bg-surface font-medium border border-border text-text-secondary">
                {opt.badge}
              </span>
            </div>
            <p class="text-[11px] text-text-secondary mt-0.5 leading-tight">{opt.description}</p>
          </div>
          {#if opt.modelId === selectedModelId}
            <svg class="w-4 h-4 text-accent shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          {/if}
        </button>
      {/each}
    </div>
  {/if}
</div>
