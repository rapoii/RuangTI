<script lang="ts">
  import Header from './components/Header.svelte';
  import Chat from './routes/Chat.svelte';

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
      <!-- Docs Route Placeholder (Implemented in Task 8) -->
      <div class="max-w-4xl mx-auto p-8 text-center">
        <h2 class="text-xl font-bold text-text-primary mb-2">Modul Dokumentasi Teknik Industri</h2>
        <p class="text-xs text-text-secondary">Memuat indeks 4.595 modul materi...</p>
      </div>
    {/if}
  </main>
</div>
