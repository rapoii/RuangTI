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

<header class="h-14 shrink-0 px-3.5 sm:px-6 flex items-center justify-between bg-white z-30">
  <!-- Kiri: Tombol Menu Hamburger -->
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

  <!-- Kanan: hanya tampil tombol '+' saat sudah ada percakapan aktif -->
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
