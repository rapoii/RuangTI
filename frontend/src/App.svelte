<script lang="ts">
  import { onMount } from 'svelte';
  let title = $state('RuangTI');
</script>

<main class="min-h-screen bg-canvas text-text-primary p-6">
  <h1 class="text-2xl font-bold text-accent">{title}</h1>
  <p class="text-text-secondary">Platform AI & Knowledge Base Teknik Industri</p>
</main>
