<script lang="ts">
  import { onMount } from 'svelte';
  import katex from 'katex';
  import {
    DOCS_CATEGORIES,
    ALL_ARTICLES,
    findArticle,
    articleNeighbors,
    type DocArticle,
  } from '../lib/docs-data';

  interface Props {
    onNavigateHome?: () => void;
  }

  let { onNavigateHome }: Props = $props();

  type TabMode = 'docs' | 'kb';
  let activeTab = $state<TabMode>('docs');

  // Status artikel aktif
  let currentArticleId = $state<string>('overview');
  let currentArticle: DocArticle = $derived(findArticle(currentArticleId));
  let neighbors = $derived(articleNeighbors(currentArticleId));

  // Pencarian artikel docs (filter instan)
  let filterQuery = $state<string>('');
  let isMobileNavOpen = $state<boolean>(false);

  // Elemen scroll konten artikel (untuk reset posisi baca)
  let scrollerEl = $state<HTMLDivElement | null>(null);

  // Status copy code snippet
  let copiedSnippetId = $state<string | null>(null);

  // --- TAB EKSPLORASI BASIS PENGETAHUAN (MODUL RAG EKSAT) ---
  interface ChunkResult {
    module_id: string;
    section_title: string;
    content: string;
    rank: number;
  }
  let kbQuery = $state('');
  let kbResults = $state<ChunkResult[]>([]);
  let kbLoading = $state(false);
  let kbLoaded = $state(false);
  let kbSelectedChunk = $state<ChunkResult | null>(null);
  let kbSearchTimeout: any = null;

  async function fetchKb(q = '') {
    kbLoading = true;
    try {
      const url = q
        ? `/api/docs/search?q=${encodeURIComponent(q)}&limit=24`
        : '/api/docs/search?limit=24';
      const res = await fetch(url);
      if (res.ok) {
        kbResults = await res.json();
      }
    } catch (err) {
      console.error('Fetch KB error:', err);
    } finally {
      kbLoading = false;
      kbLoaded = true;
    }
  }

  function handleKbInput(e: Event) {
    const val = (e.target as HTMLInputElement).value;
    kbQuery = val;
    clearTimeout(kbSearchTimeout);
    kbSearchTimeout = setTimeout(() => {
      fetchKb(val);
    }, 280);
  }

  // Buang prefix metadata modul yang diulang di awal konten RAG
  function stripKbPreamble(content: string, title: string): string {
    let text = (content || '').trim();
    // Buang baris "Modul NNN: ... — <judul>" yang menduplikasi section_title
    text = text.replace(/^Modul\s+\d+\s*:[^\n]*\n+/i, '');
    text = text.replace(/^[^\n]*—\s*[^\n]*\n+/i, (m) => (m.length < 400 ? '' : m));
    // Buang baris heading markdown yang sama dengan judul
    const esc = title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    text = text.replace(new RegExp(`^#{1,6}\\s*${esc}\\s*\\n+`, 'i'), '');
    return text.trim();
  }

  // Bersihkan sisa sintaks markdown agar konten terbaca sebagai teks biasa.
  // Rumus ($...$ / $$...$$) DIBIARKAN agar bisa dirender KaTeX di modal detail.
  function stripMarkdown(text: string): string {
    let s = (text || '').trim();
    s = s.replace(/```[a-zA-Z]*\n?([\s\S]*?)```/g, (_, code) => code.trim()); // blok kode → isi saja
    s = s.replace(/^\s*#{1,6}\s*/gm, '');       // heading
    s = s.replace(/\*\*(.+?)\*\*/g, '$1');       // bold
    s = s.replace(/(^|[^*])\*([^*\n]+)\*/g, '$1$2'); // italic
    s = s.replace(/`([^`]+)`/g, '$1');           // inline code
    s = s.replace(/^\s*[-*+]\s+/gm, '• ');       // bullet
    s = s.replace(/^\s*\|.*\|\s*$/gm, '');       // baris tabel
    s = s.replace(/^\s*[-:| ]{3,}\s*$/gm, '');   // garis pemisah tabel
    s = s.replace(/^\s*>\s?/gm, '');             // blockquote
    s = s.replace(/\[([^\]]+)\]\((?:[^)]+)\)/g, '$1'); // link
    s = s.replace(/[ \t]{2,}/g, ' ');
    s = s.replace(/\n{3,}/g, '\n\n');
    return s.trim();
  }

  // Cuplikan kartu: teks satu paragraf, rumus & sisa sintaks dibuang total.
  function kbExcerpt(content: string, title: string, limit = 200): string {
    let s = stripMarkdown(stripKbPreamble(content, title));
    s = s.replace(/\$\$[\s\S]*?\$\$/g, ' ');        // rumus display
    s = s.replace(/\$[^$\n]+?\$/g, ' ');            // rumus inline
    s = s.replace(/\\[a-zA-Z]+\{([^{}]*)\}/g, '$1'); // \text{...} → isi
    s = s.replace(/\\[a-zA-Z]+/g, ' ');             // perintah LaTeX lain
    s = s.replace(/[ \t]{2,}/g, ' ').replace(/\s*\n\s*/g, ' ').trim();
    return s.length > limit ? s.slice(0, limit).trimEnd() + '…' : s;
  }

  function renderMath(text: string): string {
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

  function renderInlineFormatting(text: string): string {
    if (!text) return '';
    // Format bold **text**
    let s = text.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
    // Format italic *text*
    s = s.replace(/\*(.+?)\*/g, '<em>$1</em>');
    // Format inline code `code`
    s = s.replace(/`([^`]+)`/g, '<code class="bg-neutral-100 border border-neutral-300 rounded px-1 py-0.5 font-mono text-[11px] text-black">$1</code>');
    // Format link [text](url)
    s = s.replace(/\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer" class="underline font-semibold hover:text-neutral-600">$1</a>');
    return s;
  }

  function selectArticle(id: string) {
    currentArticleId = id;
    isMobileNavOpen = false;
    resetArticleScroll();
    if (typeof window !== 'undefined') {
      window.location.hash = `docs/${id}`;
    }
  }

  // Kembalikan posisi baca ke atas saat artikel berganti
  function resetArticleScroll() {
    if (typeof requestAnimationFrame === 'undefined') return;
    requestAnimationFrame(() => {
      scrollerEl?.scrollTo({ top: 0, behavior: 'auto' });
    });
  }

  function scrollToSection(id: string) {
    if (typeof document === 'undefined') return;
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function closeKbModal() {
    kbSelectedChunk = null;
  }

  function handleGlobalKeydown(e: KeyboardEvent) {
    if (e.key !== 'Escape') return;
    if (kbSelectedChunk) {
      closeKbModal();
      return;
    }
    if (isMobileNavOpen) {
      isMobileNavOpen = false;
    }
  }

  async function copyCode(code: string, id: string) {
    try {
      await navigator.clipboard.writeText(code);
      copiedSnippetId = id;
      setTimeout(() => {
        if (copiedSnippetId === id) copiedSnippetId = null;
      }, 2000);
    } catch {
      // abaikan bila clipboard tidak tersedia
    }
  }

  // Filter daftar artikel berdasarkan query pencarian di sidebar
  let filteredCategories = $derived(
    DOCS_CATEGORIES.map((cat) => {
      if (!filterQuery.trim()) return cat;
      const q = filterQuery.toLowerCase();
      const matched = cat.articles.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q) ||
          a.subsections.some((s) => s.title.toLowerCase().includes(q))
      );
      return { ...cat, articles: matched };
    }).filter((cat) => cat.articles.length > 0)
  );

  onMount(() => {
    // Baca sub-path dari hash: misal #docs/single-binary atau #docs
    const syncFromHash = () => {
      const h = window.location.hash.replace('#', '');
      if (h.startsWith('docs/')) {
        const id = h.replace('docs/', '').trim();
        if (ALL_ARTICLES.some((a) => a.id === id) && id !== currentArticleId) {
          currentArticleId = id;
          resetArticleScroll();
        }
      } else if (h === 'docs' && currentArticleId !== 'overview') {
        currentArticleId = 'overview';
        resetArticleScroll();
      }
    };

    syncFromHash();
    window.addEventListener('hashchange', syncFromHash);

    return () => {
      window.removeEventListener('hashchange', syncFromHash);
    };
  });

  // Muat KB saat pertama kali tab KB dibuka
  $effect(() => {
    if (activeTab === 'kb' && !kbLoaded && !kbLoading) {
      void fetchKb();
    }
  });
</script>

<svelte:window onkeydown={handleGlobalKeydown} />

<div class="flex-1 flex flex-col min-h-0 bg-white overflow-hidden text-black font-sans">
  <!-- TOP NAVBAR DOKUMENTASI -->
  <header class="shrink-0 border-b-2 border-black bg-white z-20">
    <div class="h-14 px-3 sm:px-6 flex items-center justify-between gap-2">
      <div class="flex items-center gap-2 sm:gap-3 min-w-0">
        <!-- Tombol Kembali ke Beranda -->
        <button
          type="button"
          onclick={() => {
            if (onNavigateHome) onNavigateHome();
            else window.location.hash = '';
          }}
          class="neo-btn rounded-xl bg-white hover:bg-neutral-100 text-black font-black text-xs px-2.5 py-1.5 flex items-center gap-1.5 shadow-[2px_2px_0px_#000] shrink-0"
          title="Kembali ke Beranda"
          aria-label="Kembali ke Beranda"
        >
          <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <line x1="19" y1="12" x2="5" y2="12"></line>
            <polyline points="12 19 5 12 12 5"></polyline>
          </svg>
          <span class="hidden sm:inline text-xs font-bold">Beranda</span>
        </button>

        <div class="h-5 w-0.5 bg-neutral-300 hidden sm:block shrink-0"></div>

        <!-- Judul Dokumen & Badge -->
        <div class="flex items-center gap-2 min-w-0">
          <span class="w-6 h-6 bg-black text-white rounded-md flex items-center justify-center font-black text-[10px] shrink-0">
            TI
          </span>
          <span class="font-black text-xs sm:text-sm tracking-tight text-black truncate hidden sm:inline">
            Dokumentasi
          </span>
        </div>
      </div>

      <!-- Kanan: Tombol Menu Mobile -->
      <div class="flex items-center gap-2 shrink-0">
        {#if activeTab === 'docs'}
          <!-- Tombol Menu Mobile untuk Sidebar Artikel -->
          <button
            type="button"
            onclick={() => (isMobileNavOpen = !isMobileNavOpen)}
            class="md:hidden neo-btn rounded-xl bg-white hover:bg-neutral-100 text-black font-black text-xs px-2.5 py-1.5 flex items-center justify-center shadow-[2px_2px_0px_#000]"
            title="Buka Daftar Artikel"
            aria-label="Daftar Artikel"
          >
            <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        {/if}
      </div>
    </div>

    <!-- Tab Mode: Panduan vs Modul RAG (baris kedua, full width) -->
    <div class="px-3 sm:px-6 pb-2.5 sm:pb-3">
      <div class="flex items-center gap-1 bg-neutral-100 p-1 rounded-xl border border-black/20 text-xs w-full sm:w-auto sm:inline-flex">
        <button
          type="button"
          onclick={() => (activeTab = 'docs')}
          class="flex-1 sm:flex-none px-3 py-1.5 rounded-lg font-bold transition-all {activeTab === 'docs' ? 'bg-black text-white shadow-[1px_1px_0px_#000]' : 'text-neutral-600 hover:text-black'}"
        >
          Panduan
        </button>
        <button
          type="button"
          onclick={() => (activeTab = 'kb')}
          class="flex-1 sm:flex-none px-3 py-1.5 rounded-lg font-bold transition-all {activeTab === 'kb' ? 'bg-black text-white shadow-[1px_1px_0px_#000]' : 'text-neutral-600 hover:text-black'}"
        >
          Daftar Modul
        </button>
      </div>
    </div>
  </header>

  <!-- KONTEN TAB: PANDUAN DOKUMENTASI -->
  {#if activeTab === 'docs'}
    <div class="flex-1 flex min-h-0 overflow-hidden relative">
      <!-- MOBILE DRAWER BACKDROP -->
      {#if isMobileNavOpen}
        <button
          type="button"
          class="md:hidden fixed inset-0 bg-black/40 z-30 cursor-default"
          onclick={() => (isMobileNavOpen = false)}
          aria-label="Tutup Menu Artikel"
        ></button>
      {/if}

      <!-- SIDEBAR KIRI: KATEGORI & ARTIKEL -->
      <aside
        class="absolute md:static inset-y-0 left-0 w-72 sm:w-80 bg-white border-r-2 border-black z-40 md:z-10 flex flex-col transition-transform duration-200 ease-out {isMobileNavOpen ? 'translate-x-0 shadow-[6px_0px_0px_#000] md:shadow-none' : '-translate-x-full md:translate-x-0'}"
      >
        <!-- Search filter input -->
        <div class="p-3 border-b-2 border-black bg-neutral-50 shrink-0">
          <div class="relative">
            <input
              type="text"
              bind:value={filterQuery}
              placeholder="Cari artikel..."
              class="neo-input w-full bg-white text-xs pl-8 pr-3 py-1.5 text-black placeholder:text-neutral-400 focus:outline-hidden"
            />
            <svg class="w-3.5 h-3.5 text-neutral-400 absolute left-2.5 top-2.5 pointer-events-none" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
        </div>

        <!-- Daftar kategori & artikel -->
        <nav class="flex-1 overflow-y-auto p-3 space-y-5 text-xs">
          {#each filteredCategories as cat}
            <div>
              <div class="px-2 mb-1.5 text-[10px] font-mono font-black text-text-secondary uppercase tracking-wider">
                {cat.title}
              </div>
              <div class="space-y-1">
                {#each cat.articles as art}
                  <button
                    type="button"
                    onclick={() => selectArticle(art.id)}
                    class="w-full text-left px-2.5 py-2 rounded-xl border text-xs font-bold flex items-center justify-between transition-colors {currentArticleId === art.id ? 'bg-black text-white border-black shadow-[2px_2px_0px_#000]' : 'bg-white text-black border-transparent hover:bg-neutral-100 hover:border-black/20'}"
                  >
                    <span class="truncate">{art.title}</span>
                    {#if art.badge}
                      <span class="text-[9px] font-mono px-1.5 py-0.5 rounded font-black shrink-0 ml-1.5 {currentArticleId === art.id ? 'bg-white text-black' : 'bg-neutral-100 text-neutral-600 border border-neutral-300'}">
                        {art.badge}
                      </span>
                    {/if}
                  </button>
                {/each}
              </div>
            </div>
          {/each}

          {#if filteredCategories.length === 0}
            <div class="p-4 text-center text-xs text-text-secondary">
              Tidak ada artikel yang cocok dengan "{filterQuery}".
            </div>
          {/if}
        </nav>
      </aside>

      <!-- KONTEN ARTIKEL UTAMA + TOC KANAN -->
      <div bind:this={scrollerEl} class="flex-1 flex min-h-0 overflow-y-auto bg-white">
        <!-- Body Artikel -->
        <article class="flex-1 max-w-3xl mx-auto px-5 sm:px-10 py-8 sm:py-12 space-y-8">
          <!-- Header Artikel -->
          <div class="border-b-2 border-black pb-6 space-y-2.5">
            <div class="flex items-center gap-2">
              {#if currentArticle.badge}
                <span class="neo-badge bg-black text-white px-2 py-0.5 text-[10px] font-mono font-black">
                  {currentArticle.badge}
                </span>
              {/if}
              <span class="text-[11px] font-mono text-text-secondary font-bold">
                Estimasi baca: {currentArticle.readTime}
              </span>
            </div>

            <h1 class="text-2xl sm:text-3xl font-black text-black tracking-tight leading-tight">
              {currentArticle.title}
            </h1>

            <p class="text-sm text-text-secondary leading-relaxed">
              {currentArticle.description}
            </p>
          </div>

          <!-- Lead text -->
          <div class="text-sm font-semibold text-black leading-relaxed p-4 bg-neutral-50 rounded-xl border border-black/15">
            {currentArticle.content.lead}
          </div>

          <!-- Seksi-seksi artikel -->
          <div class="space-y-8">
            {#each currentArticle.content.sections as sec}
              <section id={sec.id} class="space-y-3 pt-2">
                <h2 class="text-lg sm:text-xl font-black text-black tracking-tight flex items-center gap-2">
                  <span class="w-1.5 h-5 bg-black rounded-full inline-block"></span>
                  <span>{sec.title}</span>
                </h2>

                {#each sec.paragraphs as p}
                  <p class="text-xs sm:text-sm text-black leading-relaxed">
                    {@html renderInlineFormatting(p)}
                  </p>
                {/each}

                <!-- List bila ada -->
                {#if sec.list && sec.list.length > 0}
                  <ul class="space-y-1.5 pl-4 list-disc text-xs sm:text-sm text-black">
                    {#each sec.list as item}
                      <li class="leading-relaxed">
                        {@html renderInlineFormatting(item)}
                      </li>
                    {/each}
                  </ul>
                {/if}

                <!-- Callout bila ada -->
                {#if sec.callout}
                  <div class="p-3.5 rounded-xl border-2 border-black bg-white shadow-[2px_2px_0px_#000] space-y-1 text-xs sm:text-sm">
                    <div class="font-mono font-black text-[11px] uppercase tracking-wider text-black flex items-center gap-1.5">
                      <span class="w-2 h-2 rounded-full {sec.callout.type === 'tip' ? 'bg-black' : sec.callout.type === 'warning' ? 'bg-neutral-800' : 'bg-neutral-600'}"></span>
                      <span>{sec.callout.title}</span>
                    </div>
                    <div class="text-xs text-text-secondary leading-relaxed">
                      {@html renderInlineFormatting(sec.callout.message)}
                    </div>
                  </div>
                {/if}

                <!-- Table bila ada -->
                {#if sec.table}
                  <div class="overflow-x-auto my-3 border-2 border-black rounded-xl shadow-[2px_2px_0px_#000]">
                    <table class="w-full text-left text-xs">
                      <thead class="bg-black text-white font-mono font-bold">
                        <tr>
                          {#each sec.table.headers as h}
                            <th class="p-2.5 border-r border-neutral-700 last:border-r-0">{h}</th>
                          {/each}
                        </tr>
                      </thead>
                      <tbody class="divide-y divide-black/20 bg-white">
                        {#each sec.table.rows as row}
                          <tr class="hover:bg-neutral-50 transition-colors">
                            {#each row as cell, ci}
                              <td class="p-2.5 align-top border-r border-black/10 last:border-r-0 {ci === 0 ? 'font-bold' : ''}">
                                {@html renderInlineFormatting(cell)}
                              </td>
                            {/each}
                          </tr>
                        {/each}
                      </tbody>
                    </table>
                  </div>
                {/if}

                <!-- Code Snippet bila ada -->
                {#if sec.codeSnippet}
                  <div class="my-3 rounded-xl border-2 border-black bg-neutral-900 text-white overflow-hidden shadow-[2px_2px_0px_#000]">
                    <div class="px-3 py-1.5 bg-black border-b border-neutral-700 flex items-center justify-between text-[11px] font-mono">
                      <span class="text-neutral-400">{sec.codeSnippet.caption ?? sec.codeSnippet.language}</span>
                      <button
                        type="button"
                        onclick={() => copyCode(sec.codeSnippet!.code, sec.id)}
                        class="text-neutral-300 hover:text-white transition-colors"
                        title="Salin kode"
                      >
                        {copiedSnippetId === sec.id ? '✓ Tersalin' : 'Salin'}
                      </button>
                    </div>
                    <pre class="p-3 text-xs font-mono overflow-x-auto leading-relaxed">{sec.codeSnippet.code}</pre>
                  </div>
                {/if}

                <!-- Formula KaTeX bila ada -->
                {#if sec.formula}
                  <div class="my-3 p-4 rounded-xl border-2 border-black bg-neutral-50 text-center shadow-[2px_2px_0px_#000] space-y-2">
                    <div class="overflow-x-auto">
                      {@html renderMath(`$$${sec.formula.math}$$`)}
                    </div>
                    {#if sec.formula.explanation}
                      <p class="text-xs text-text-secondary leading-relaxed">
                        {sec.formula.explanation}
                      </p>
                    {/if}
                  </div>
                {/if}
              </section>
            {/each}
          </div>

          <!-- Navigasi Bawah: Artikel Sebelumnya & Selanjutnya -->
          <div class="pt-8 border-t-2 border-black flex flex-col sm:flex-row items-center justify-between gap-3">
            {#if neighbors.prev}
              <button
                type="button"
                onclick={() => selectArticle(neighbors.prev!.id)}
                class="neo-btn rounded-xl bg-white hover:bg-neutral-100 text-black p-3 text-left w-full sm:w-1/2 flex flex-col gap-1 shadow-[2px_2px_0px_#000]"
              >
                <span class="text-[10px] font-mono font-bold text-text-secondary uppercase tracking-wider">
                  ← Sebelumnya
                </span>
                <span class="text-xs font-black truncate">{neighbors.prev.title}</span>
              </button>
            {:else}
              <div class="w-full sm:w-1/2"></div>
            {/if}

            {#if neighbors.next}
              <button
                type="button"
                onclick={() => selectArticle(neighbors.next!.id)}
                class="neo-btn rounded-xl bg-white hover:bg-neutral-100 text-black p-3 text-right w-full sm:w-1/2 flex flex-col gap-1 shadow-[2px_2px_0px_#000] items-end"
              >
                <span class="text-[10px] font-mono font-bold text-text-secondary uppercase tracking-wider">
                  Selanjutnya →
                </span>
                <span class="text-xs font-black truncate">{neighbors.next.title}</span>
              </button>
            {:else}
              <div class="w-full sm:w-1/2"></div>
            {/if}
          </div>
        </article>

        <!-- TOC KANAN (DESKTOP) -->
        <aside class="hidden lg:block w-60 shrink-0 border-l border-neutral-200 p-6 text-xs sticky top-0 self-start">
          <div class="font-mono font-black text-[10px] uppercase tracking-wider text-text-secondary mb-3">
            Daftar Isi
          </div>
          <nav class="space-y-2 border-l-2 border-neutral-200 pl-3">
            {#each currentArticle.subsections as sub}
              <button
                type="button"
                onclick={() => scrollToSection(sub.id)}
                class="block text-left text-xs text-text-secondary hover:text-black hover:font-bold transition-all leading-snug truncate w-full"
              >
                {sub.title}
              </button>
            {/each}
          </nav>

          <div class="mt-8 pt-4 border-t border-neutral-200 space-y-2">
            <span class="block text-[10px] font-mono text-neutral-400">
              Butuh rujukan spesifik?
            </span>
            <button
              type="button"
              onclick={() => (activeTab = 'kb')}
              class="neo-btn rounded-lg bg-white hover:bg-neutral-100 text-black text-[11px] font-bold px-2.5 py-1.5 w-full flex items-center justify-center gap-1.5 shadow-[1.5px_1.5px_0px_#000]"
            >
              <span>Eksplorasi 4.595 Modul</span>
              <span>→</span>
            </button>
          </div>
        </aside>
      </div>
    </div>
  {:else}
    <!-- KONTEN TAB: EKSPLORASI BASIS PENGETAHUAN (4.595 MODUL) -->
    <div class="flex-1 overflow-y-auto p-4 sm:p-8 bg-neutral-50">
      <div class="max-w-5xl mx-auto space-y-6">
        <!-- Header KB -->
        <div class="neo-card bg-white p-5 sm:p-6 space-y-3">
          <div class="flex flex-wrap items-center gap-2">
            <span class="neo-badge bg-black text-white px-2 py-0.5 text-xs font-mono font-black">
              SQLite FTS5
            </span>
            <span class="text-xs font-mono font-bold text-text-secondary">
              4.595 MODUL · 32.413 SEKSI KEILMUAN
            </span>
          </div>

          <h2 class="text-xl sm:text-2xl font-black text-black tracking-tight">
            Penjelajah Modul RAG
          </h2>

          <p class="text-xs sm:text-sm text-text-secondary leading-relaxed max-w-2xl">
            Cari langsung potongan pengetahuan yang digunakan RuangTI saat menjawab. Setiap modul bersumber dari pustaka keilmuan Teknik Industri yang terindeks FTS5.
          </p>

          <!-- Search Input -->
          <div class="relative w-full max-w-xl pt-1">
            <input
              type="text"
              value={kbQuery}
              oninput={handleKbInput}
              placeholder="Cari kata kunci (contoh: EOQ, Kaizen, Simplex, CRAFT, Ergonomi)..."
              class="neo-input w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm bg-white text-black placeholder:text-neutral-400 focus:outline-hidden"
            />
            <div class="absolute left-3 top-4 pointer-events-none text-neutral-400">
              {#if kbLoading}
                <svg class="w-4 h-4 animate-spin text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <circle cx="12" cy="12" r="10" stroke-opacity="0.25"></circle>
                  <path d="M12 2a10 10 0 0 1 10 10"></path>
                </svg>
              {:else}
                <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              {/if}
            </div>
          </div>
        </div>

        <!-- Grid Hasil KB -->
        {#if kbResults.length === 0 && !kbLoading}
          <div class="neo-card bg-white p-8 text-center space-y-1">
            <p class="text-sm font-bold text-black">Tidak ada modul yang cocok</p>
            <p class="text-xs text-text-secondary">Coba kata kunci keilmuan yang lebih umum.</p>
          </div>
        {:else}
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {#each kbResults as chunk}
              <button
                type="button"
                onclick={() => (kbSelectedChunk = chunk)}
                class="neo-card bg-white p-4 text-left flex flex-col justify-between hover:-translate-y-0.5 transition-transform cursor-pointer group"
              >
                <div class="space-y-2">
                  <span class="inline-block text-[10px] font-mono font-black px-1.5 py-0.5 bg-black text-white rounded">
                    Modul {chunk.module_id}
                  </span>
                  <h3 class="text-xs sm:text-sm font-black text-black group-hover:underline leading-snug line-clamp-3">
                    {chunk.section_title}
                  </h3>
                  <p class="text-xs text-text-secondary line-clamp-3 leading-relaxed">
                    {kbExcerpt(chunk.content, chunk.section_title)}
                  </p>
                </div>

                <div class="pt-3 mt-3 border-t border-black/15 flex items-center justify-between text-[11px] font-bold text-black">
                  <span>Baca Selengkapnya</span>
                  <span>→</span>
                </div>
              </button>
            {/each}
          </div>
        {/if}
      </div>
    </div>
  {/if}
</div>

<!-- MODAL DETAIL MODUL RAG -->
{#if kbSelectedChunk}
  <div class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40">
    <!-- Backdrop klik untuk menutup -->
    <button
      type="button"
      class="absolute inset-0 cursor-default"
      onclick={closeKbModal}
      aria-label="Tutup detail modul"
      tabindex="-1"
    ></button>

    <div
      role="dialog"
      aria-modal="true"
      class="relative bg-white rounded-2xl border-2 border-black shadow-[4px_4px_0px_#000] max-w-2xl w-full max-h-[85vh] flex flex-col overflow-hidden animate-in zoom-in-95 duration-150"
    >
      <div class="px-5 py-3.5 border-b-2 border-black flex items-center justify-between bg-neutral-50 shrink-0">
        <div class="flex items-center gap-2 truncate pr-2">
          <span class="text-xs font-mono font-black px-2 py-0.5 rounded bg-black text-white shrink-0">
            Modul {kbSelectedChunk.module_id}
          </span>
          <span class="text-xs font-bold text-black truncate">
            {kbSelectedChunk.section_title}
          </span>
        </div>
        <button
          type="button"
          onclick={() => (kbSelectedChunk = null)}
          class="w-7 h-7 rounded-full border-2 border-black flex items-center justify-center text-xs font-mono font-bold hover:bg-neutral-200 shrink-0"
          title="Tutup"
          aria-label="Tutup"
        >
          ✕
        </button>
      </div>

      <div class="p-5 sm:p-6 overflow-y-auto space-y-3 text-xs sm:text-sm text-black leading-relaxed">
        <div class="space-y-2 whitespace-pre-wrap">
          {@html renderMath(stripMarkdown(stripKbPreamble(kbSelectedChunk.content, kbSelectedChunk.section_title)))}
        </div>
      </div>
    </div>
  </div>
{/if}
