<script lang="ts">
  interface Props {
    activeRoute?: string;
    onNavigate?: (route: string) => void;
  }

  let { activeRoute = 'chat', onNavigate }: Props = $props();

  function navigate(route: string) {
    if (onNavigate) {
      onNavigate(route);
    }
  }
</script>

<header class="glass-header sticky top-0 z-40 w-full px-4 lg:px-8 py-3 flex items-center justify-between">
  <!-- Brand -->
  <div class="flex items-center gap-3">
    <div class="w-8 h-8 rounded-lg bg-accent/15 border border-accent/30 flex items-center justify-center font-bold text-accent text-sm shadow-sm">
      TI
    </div>
    <div class="flex flex-col">
      <div class="flex items-center gap-2">
        <span class="font-semibold text-text-primary text-base tracking-tight">RuangTI</span>
        <span class="text-[10px] font-medium px-1.5 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
          Go+Svelte
        </span>
      </div>
      <span class="text-xs text-text-tertiary hidden sm:inline">Platform AI & Knowledge Base Teknik Industri</span>
    </div>
  </div>

  <!-- Navigation -->
  <nav class="flex items-center gap-1 sm:gap-2">
    <button
      type="button"
      onclick={() => navigate('chat')}
      class="px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors {activeRoute === 'chat' ? 'bg-surface text-accent font-semibold shadow-xs border border-border' : 'text-text-secondary hover:text-text-primary hover:bg-canvas-subtle'}"
    >
      Chat AI
    </button>
    <button
      type="button"
      onclick={() => navigate('docs')}
      class="px-3 py-1.5 text-xs sm:text-sm font-medium rounded-lg transition-colors {activeRoute === 'docs' ? 'bg-surface text-accent font-semibold shadow-xs border border-border' : 'text-text-secondary hover:text-text-primary hover:bg-canvas-subtle'}"
    >
      Modul TI (4.595)
    </button>
    <a
      href="https://github.com/rapoii/RuangTI"
      target="_blank"
      rel="noopener noreferrer"
      class="p-1.5 text-text-secondary hover:text-text-primary hover:bg-canvas-subtle rounded-lg transition-colors ml-1"
      title="GitHub Repository"
    >
      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    </a>
  </nav>
</header>
