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

<div class="min-h-screen flex flex-col bg-canvas text-text-primary">
  <Header {activeRoute} onNavigate={handleNavigate} />

  <main class="flex-1 flex flex-col">
    {#if activeRoute === 'chat'}
      <Chat />
    {:else}
      <Docs />
    {/if}
  </main>
</div>
