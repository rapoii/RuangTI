<script lang="ts">
  import { onMount } from 'svelte';
  import Header from './components/Header.svelte';
  import Sidebar from './components/Sidebar.svelte';
  import Chat from './routes/Chat.svelte';
  import Docs from './routes/Docs.svelte';
  import Landing from './routes/Landing.svelte';
  import Login from './routes/Login.svelte';
  import Profile from './routes/Profile.svelte';
  import { auth, loadSession } from './lib/auth.svelte';

  const ROUTES = ['chat', 'docs', 'login', 'profile'];

  let activeRoute = $state('landing');
  let isSidebarOpen = $state(false);
  let isLoginModalOpen = $state(false);
  let chatKey = $state(0);
  let hasMessages = $state(false);
  let pendingMessage = $state('');
  let activeConversationId = $state('');
  let suppressHashChange = $state(false);

  // Tinggi viewport visual (menyesuaikan saat keyboard virtual terbuka)
  let appHeight = $state('100dvh');

  function routeFromHash(): string {
    const hash = window.location.hash.replace('#', '');
    return ROUTES.includes(hash) ? hash : 'landing';
  }

  // Tulis hash tanpa memicu handler kita sendiri
  function applyHash(route: string) {
    const target = route === 'landing' ? '' : route;
    if (window.location.hash.replace('#', '') !== target) {
      suppressHashChange = true;
      window.location.hash = target;
    }
  }

  // Navigasi internal (Header/Sidebar) — tanpa pertanyaan awal
  function handleNavigate(route: string) {
    pendingMessage = '';
    activeConversationId = '';
    activeRoute = route;
    hasMessages = false;
    if (route === 'chat') chatKey += 1;
    isSidebarOpen = false;
    applyHash(route);
  }

  function handleNewChat() {
    handleNavigate('chat');
  }

  // Buka percakapan lama dari sidebar
  function handleSelectConversation(id: string) {
    pendingMessage = '';
    activeConversationId = id;
    activeRoute = 'chat';
    hasMessages = true;
    chatKey += 1;
    isSidebarOpen = false;
    applyHash('chat');
  }

  function handleCloseLoginModal() {
    isLoginModalOpen = false;
    if (activeRoute === 'login' || activeRoute === 'chat' || activeRoute === 'profile') {
      handleNavigate('landing');
    }
  }

  // Dari landing — pindah ke chat, opsional membawa pertanyaan awal
  function handleStartChat(message?: string) {
    if (!auth.user) {
      pendingMessage = message ?? '';
      isLoginModalOpen = true;
      return;
    }
    pendingMessage = message ?? '';
    activeConversationId = '';
    activeRoute = 'chat';
    hasMessages = false;
    chatKey += 1;
    isSidebarOpen = false;
    applyHash('chat');
  }

  // Back/Forward browser atau hash diedit manual
  function handleHashChange() {
    if (suppressHashChange) {
      suppressHashChange = false;
      return;
    }
    const route = routeFromHash();
    if (route === activeRoute) return;
    pendingMessage = '';
    activeConversationId = '';
    activeRoute = route;
    hasMessages = false;
    if (route === 'chat') chatKey += 1;
    isSidebarOpen = false;
  }

  onMount(() => {
    const vv = window.visualViewport;

    const applyHeight = () => {
      // Kunci tinggi app persis setinggi area yang terlihat.
      // Saat keyboard terbuka, hanya composer yang naik — bukan seluruh halaman.
      appHeight = `${Math.round(vv!.height)}px`;
      window.scrollTo(0, 0);
    };

    if (vv) {
      applyHeight();
      vv.addEventListener('resize', applyHeight);
      vv.addEventListener('scroll', applyHeight);
    }

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    // Muat status sesi sekali saat boot (untuk gerbang login)
    void loadSession();

    return () => {
      if (vv) {
        vv.removeEventListener('resize', applyHeight);
        vv.removeEventListener('scroll', applyHeight);
      }
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  });

  // Baca hash awal secara sinkron agar tidak ada kedipan rute
  if (typeof window !== 'undefined') {
    activeRoute = routeFromHash();
  }
</script>

<div
  class="flex flex-col overflow-hidden bg-white text-black selection:bg-black selection:text-white relative"
  style="height: {appHeight}; max-height: {appHeight};"
>
  {#if activeRoute === 'landing' || (!auth.user && (activeRoute === 'login' || activeRoute === 'chat' || activeRoute === 'profile'))}
    <Landing onStartChat={handleStartChat} />
  {:else}
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
      onSelectConversation={handleSelectConversation}
      {activeRoute}
    />

    <main class="flex-1 flex flex-col overflow-hidden min-h-0 relative">
      {#if activeRoute === 'chat'}
        {#key chatKey}
          <Chat
            onMessagesChange={(val) => (hasMessages = val)}
            initialMessage={pendingMessage}
            conversationId={activeConversationId}
          />
        {/key}
      {:else if activeRoute === 'profile'}
        <Profile onNavigate={handleNavigate} />
      {:else}
        <Docs />
      {/if}
    </main>
  {/if}

  {#if isLoginModalOpen || (!auth.user && (activeRoute === 'login' || activeRoute === 'chat' || activeRoute === 'profile'))}
    <Login onClose={handleCloseLoginModal} />
  {/if}
</div>
