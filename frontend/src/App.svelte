<script lang="ts">
  import { onMount } from 'svelte';
  import Header from './components/Header.svelte';
  import Sidebar from './components/Sidebar.svelte';
  import Chat from './routes/Chat.svelte';
  import Docs from './routes/Docs.svelte';

  let activeRoute = $state('chat');
  let isSidebarOpen = $state(false);
  let chatKey = $state(0);
  let hasMessages = $state(false);

  // Tinggi viewport visual (menyesuaikan saat keyboard virtual terbuka)
  let appHeight = $state('100dvh');

  function handleNavigate(route: string) {
    activeRoute = route;
    window.location.hash = route;
    isSidebarOpen = false;
  }

  function handleNewChat() {
    activeRoute = 'chat';
    window.location.hash = 'chat';
    hasMessages = false;
    chatKey += 1;
    isSidebarOpen = false;
  }

  onMount(() => {
    const vv = window.visualViewport;
    if (!vv) return;

    const applyHeight = () => {
      // Kunci tinggi app persis setinggi area yang terlihat.
      // Saat keyboard terbuka, hanya composer yang naik — bukan seluruh halaman.
      appHeight = `${Math.round(vv.height)}px`;
      window.scrollTo(0, 0);
    };

    applyHeight();
    vv.addEventListener('resize', applyHeight);
    vv.addEventListener('scroll', applyHeight);

    return () => {
      vv.removeEventListener('resize', applyHeight);
      vv.removeEventListener('scroll', applyHeight);
    };
  });

  // Baca hash awal jika ada
  if (typeof window !== 'undefined') {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'docs') {
      activeRoute = 'docs';
    }
  }
</script>

<div
  class="flex flex-col overflow-hidden bg-white text-black selection:bg-black selection:text-white relative"
  style="height: {appHeight}; max-height: {appHeight};"
>
  <Header
    {activeRoute}
    {hasMessages}
    onNavigate={handleNavigate}
    onToggleSidebar={() => (isSidebarOpen = !isSidebarOpen)}
    onNewChat={handleNewChat}
  />

  <Sidebar
    isOpen={isSidebarOpen}
    onClose={() => (isSidebarOpen = false)}
    onNavigate={handleNavigate}
    onNewChat={handleNewChat}
    {activeRoute}
  />

  <main class="flex-1 flex flex-col overflow-hidden min-h-0 relative">
    {#if activeRoute === 'chat'}
      {#key chatKey}
        <Chat onMessagesChange={(val) => (hasMessages = val)} />
      {/key}
    {:else}
      <Docs />
    {/if}
  </main>
</div>
