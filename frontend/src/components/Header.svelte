<script lang="ts">
  interface Props {
    activeRoute?: string;
    hasMessages?: boolean;
    onNavigate?: (route: string) => void;
    onToggleSidebar?: () => void;
    onNewChat?: () => void;
  }

  let {
    activeRoute = 'chat',
    hasMessages = false,
    onNavigate,
    onToggleSidebar,
    onNewChat,
  }: Props = $props();

  function navigate(route: string) {
    if (onNavigate) {
      onNavigate(route);
    }
  }
</script>

<header class="h-14 shrink-0 border-b-2 border-black px-3.5 sm:px-6 flex items-center justify-between bg-white/95 backdrop-blur z-30">
  <!-- Brand & Sidebar Toggle -->
  <div class="flex items-center gap-2.5 sm:gap-3">
    <!-- Hamburger Button (.neo-btn) -->
    <button
      type="button"
      onclick={onToggleSidebar}
      class="neo-btn w-8 h-8 bg-white hover:bg-neutral-50 text-black flex items-center justify-center text-xs shrink-0"
      title="Buka Navigasi Samping"
    >
      <svg class="w-4 h-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    </button>

    <div
      class="flex items-center gap-2 cursor-pointer select-none"
      onclick={() => navigate('chat')}
      role="button"
      tabindex="0"
      onkeydown={(e) => { if (e.key === 'Enter') navigate('chat'); }}
    >
      <div class="w-7 h-7 bg-black text-white font-black flex items-center justify-center text-xs neo-badge shadow-none">
        TI
      </div>
      <div class="flex items-baseline gap-1.5">
        <span class="font-black text-sm tracking-tight text-black">RUANGTI</span>
        <span class="text-[9px] font-mono font-bold text-neutral-400 hidden sm:inline">STUDIO TEKNIK INDUSTRI</span>
      </div>
    </div>
  </div>

  <!-- Header Right: Bersih di layar awal, hanya tampil tombol '+' saat sudah ada percakapan aktif -->
  <div class="flex items-center gap-2">
    {#if hasMessages}
      <button
        type="button"
        onclick={onNewChat}
        class="neo-btn w-8 h-8 bg-black hover:bg-neutral-800 text-white flex items-center justify-center text-xs shrink-0 shadow-[2px_2px_0px_#000]"
        title="Mulai Percakapan Baru"
      >
        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <line x1="5" y1="12" x2="19" y2="12"></line>
        </svg>
      </button>
    {/if}
  </div>
</header>
