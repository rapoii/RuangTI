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

<header class="h-14 shrink-0 border-b-2 border-black px-3.5 sm:px-6 flex items-center justify-between bg-white/95 backdrop-blur z-30">
  <!-- Brand -->
  <div class="flex items-center gap-2.5">
    <div class="w-7 h-7 bg-black text-white font-black flex items-center justify-center text-xs neo-badge shadow-none">
      TI
    </div>
    <div class="flex items-baseline gap-1.5">
      <span class="font-black text-sm tracking-tight text-black">RUANGTI</span>
      <span class="text-[9px] font-mono font-bold text-neutral-400 hidden sm:inline">STUDIO TEKNIK INDUSTRI</span>
    </div>
  </div>

  <!-- Navigation Buttons (Neobrutalism .neo-btn) -->
  <nav class="flex items-center gap-1.5 sm:gap-2">
    <button
      type="button"
      onclick={() => navigate('chat')}
      class="neo-btn px-2.5 py-1 text-xs font-bold transition-all {activeRoute === 'chat' ? 'bg-black text-white' : 'bg-white text-black hover:bg-neutral-50'}"
    >
      Chat AI
    </button>
    <button
      type="button"
      onclick={() => navigate('docs')}
      class="neo-btn px-2.5 py-1 text-xs font-bold transition-all {activeRoute === 'docs' ? 'bg-black text-white' : 'bg-white text-black hover:bg-neutral-50'}"
    >
      <span class="sm:hidden">Modul</span>
      <span class="hidden sm:inline">Modul TI (4.595)</span>
    </button>
    <a
      href="https://github.com/rapoii/RuangTI"
      target="_blank"
      rel="noopener noreferrer"
      class="neo-btn w-7 h-7 bg-white hover:bg-neutral-50 text-black flex items-center justify-center text-xs"
      title="GitHub Repository"
    >
      <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
    </a>
  </nav>
</header>
