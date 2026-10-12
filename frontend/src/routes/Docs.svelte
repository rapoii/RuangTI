<script lang="ts">
  import { onMount } from 'svelte';
  import katex from 'katex';

  interface ChunkResult {
    module_id: string;
    section_title: string;
    content: string;
    rank: number;
  }

  let searchQuery = $state('');
  let results = $state<ChunkResult[]>([]);
  let isLoading = $state(false);
  let selectedChunk = $state<ChunkResult | null>(null);
  let searchTimeout = $state<any>(null);

  onMount(() => {
    fetchDocs();
  });

  async function fetchDocs(q = '') {
    isLoading = true;
    try {
      const url = q ? `/api/docs/search?q=${encodeURIComponent(q)}&limit=24` : '/api/docs/search?limit=24';
      const res = await fetch(url);
      if (res.ok) {
        results = await res.json();
      }
    } catch (err) {
      console.error('Fetch docs error:', err);
    } finally {
      isLoading = false;
    }
  }

  function handleSearchInput(e: Event) {
    const val = (e.target as HTMLInputElement).value;
    searchQuery = val;
    clearTimeout(searchTimeout);
    searchTimeout = setTimeout(() => {
      fetchDocs(val);
    }, 300);
  }

  function renderContent(text: string): string {
    if (!text) return '';
    let formatted = text.replace(/\$\$([\s\S]*?)\$\$/g, (_, math) => {
      try {
        return `<div class="katex-display my-3 overflow-x-auto text-center">${katex.renderToString(math.trim(), {
          displayMode: true,
          throwOnError: false,
        })}</div>`;
      } catch {
        return `<pre class="text-xs text-red-500 font-mono">$$${math}$$</pre>`;
      }
    });

    formatted = formatted.replace(/\$([^\$\n]+?)\$/g, (_, math) => {
      try {
        return katex.renderToString(math.trim(), {
          displayMode: false,
          throwOnError: false,
        });
      } catch {
        return `$${math}$`;
      }
    });

    formatted = formatted.replace(/\n\n/g, '<br/><br/>');
    return formatted;
  }
</script>

<div class="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8 flex-1 w-full">
  <!-- Header & Search Bar -->
  <div class="mb-6 sm:mb-8">
    <div class="flex items-center gap-2 mb-1.5">
      <h1 class="text-xl sm:text-2xl font-bold text-text-primary tracking-tight">
        Knowledge Base Modul Teknik Industri
      </h1>
      <span class="text-xs font-semibold px-2 py-0.5 rounded-full bg-accent/10 text-accent border border-accent/20">
        4.595 Modul
      </span>
    </div>
    <p class="text-xs sm:text-sm text-text-secondary mb-4 leading-relaxed">
      Indeks 32.413 seksi keilmuan Teknik Industri (Optimasi, SCM, Ergonomi, Pengendalian Mutu, dll) dengan pencarian SQLite FTS5 super cepat.
    </p>

    <!-- Search Input -->
    <div class="relative w-full max-w-xl">
      <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-text-tertiary">
        {#if isLoading}
          <svg class="w-4 h-4 animate-spin text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
            <path d="M12 2a10 10 0 0 1 10 10"></path>
          </svg>
        {:else}
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        {/if}
      </div>
      <input
        type="text"
        value={searchQuery}
        oninput={handleSearchInput}
        placeholder="Cari modul (contoh: EOQ, Kaizen, Simplex, CRAFT, Ergonomi)..."
        class="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm rounded-xl bg-surface border border-border focus:border-accent/60 focus:outline-hidden text-text-primary placeholder:text-text-tertiary shadow-2xs transition-all"
      />
    </div>
  </div>

  <!-- Cards Grid -->
  {#if results.length === 0 && !isLoading}
    <div class="text-center py-16 bg-surface rounded-2xl border border-border p-8">
      <p class="text-sm font-medium text-text-primary mb-1">Tidak ada modul yang cocok</p>
      <p class="text-xs text-text-tertiary">Coba gunakan kata kunci keilmuan yang lebih umum.</p>
    </div>
  {:else}
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
      {#each results as chunk}
        <button
          type="button"
          onclick={() => (selectedChunk = chunk)}
          class="p-4 rounded-xl bg-surface border border-border hover:border-accent/40 hover:bg-surface-hover transition-all text-left flex flex-col justify-between shadow-2xs group cursor-pointer"
        >
          <div>
            <div class="flex items-center gap-2 mb-2">
              <span class="text-[10px] font-bold px-1.5 py-0.5 rounded bg-accent/15 text-accent border border-accent/20">
                Modul {chunk.module_id}
              </span>
            </div>
            <h3 class="text-xs sm:text-sm font-semibold text-text-primary group-hover:text-accent transition-colors line-clamp-2 mb-2 leading-snug">
              {chunk.section_title}
            </h3>
            <p class="text-xs text-text-secondary line-clamp-3 leading-relaxed">
              {chunk.content}
            </p>
          </div>
          <div class="pt-3 mt-3 border-t border-border/40 flex items-center justify-between text-[11px] text-accent font-medium">
            <span>Baca Lengkap</span>
            <svg class="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </div>
        </button>
      {/each}
    </div>
  {/if}
</div>

<!-- Modal Detail Modul -->
{#if selectedChunk}
  <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-xs">
    <div class="bg-surface border border-border rounded-2xl max-w-2xl w-full max-h-[85vh] flex flex-col shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-150">
      <!-- Modal Header -->
      <div class="px-5 py-3.5 border-b border-border flex items-center justify-between bg-canvas-subtle/50">
        <div class="flex items-center gap-2">
          <span class="text-xs font-bold px-2 py-0.5 rounded bg-accent/15 text-accent border border-accent/20">
            Modul {selectedChunk.module_id}
          </span>
          <span class="text-xs font-semibold text-text-secondary truncate max-w-sm">
            {selectedChunk.section_title}
          </span>
        </div>
        <button
          type="button"
          onclick={() => (selectedChunk = null)}
          class="p-1 rounded-md text-text-tertiary hover:text-text-primary hover:bg-surface-active transition-colors"
          title="Tutup"
        >
          <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
      </div>

      <!-- Modal Body -->
      <div class="p-5 sm:p-6 overflow-y-auto leading-relaxed text-xs sm:text-sm text-text-primary font-sans space-y-3">
        <h2 class="text-base sm:text-lg font-bold text-text-primary tracking-tight">
          {selectedChunk.section_title}
        </h2>
        <div>
          {@html renderContent(selectedChunk.content)}
        </div>
      </div>

      <!-- Modal Footer -->
      <div class="px-5 py-3 border-t border-border flex justify-end bg-canvas-subtle/30">
        <button
          type="button"
          onclick={() => (selectedChunk = null)}
          class="px-4 py-1.5 rounded-lg bg-surface-active hover:bg-border text-xs font-semibold text-text-primary transition-colors cursor-pointer"
        >
          Tutup
        </button>
      </div>
    </div>
  </div>
{/if}
