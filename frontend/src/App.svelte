<script lang="ts">
  import Header from './components/Header.svelte';
  import Chat from './routes/Chat.svelte';
  import Docs from './routes/Docs.svelte';

  let activeRoute = $state('chat');

  function handleNavigate(route: string) {
    activeRoute = route;
    window.location.hash = route;
  }

  // Baca hash awal jika ada
  if (typeof window !== 'undefined') {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'docs') {
      activeRoute = 'docs';
    }
  }
</script>

<div class="h-[100dvh] max-h-[100dvh] flex flex-col overflow-hidden bg-white text-black selection:bg-black selection:text-white">
  <Header {activeRoute} onNavigate={handleNavigate} />

  <main class="flex-1 flex flex-col overflow-hidden min-h-0 relative">
    {#if activeRoute === 'chat'}
      <Chat />
    {:else}
      <Docs />
    {/if}
  </main>
</div>
