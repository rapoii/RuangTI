<script lang="ts">
  import Header from './components/Header.svelte';
  import Sidebar from './components/Sidebar.svelte';
  import Chat from './routes/Chat.svelte';
  import Docs from './routes/Docs.svelte';

  let activeRoute = $state('chat');
  let isSidebarOpen = $state(false);
  let chatKey = $state(0);
  let hasMessages = $state(false);

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

  // Baca hash awal jika ada
  if (typeof window !== 'undefined') {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'docs') {
      activeRoute = 'docs';
    }
  }
</script>

<div class="h-[100dvh] max-h-[100dvh] flex flex-col overflow-hidden bg-white text-black selection:bg-black selection:text-white relative">
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
