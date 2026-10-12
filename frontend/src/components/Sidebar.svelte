<script lang="ts">
  interface Props {
    isOpen: boolean;
    onClose: () => void;
    onNavigate: (route: string) => void;
    onNewChat: () => void;
    activeRoute: string;
  }

  let { isOpen, onClose, onNavigate, onNewChat, activeRoute }: Props = $props();

  let showAsmeModal = $state(false);

  const RECENT_TOPICS = [
    { title: 'Rumus EOQ & Total Biaya', tag: 'Persediaan' },
    { title: 'Peta Proses Operasi (OPC)', tag: 'ASME Y15' },
    { title: 'Metode Jalur Kritis (CPM)', tag: 'Proyek' },
    { title: '7 Pemborosan Lean (DOWNTIME)', tag: 'Lean' },
    { title: 'Peta Tangan Kiri-Kanan (PTKTK)', tag: 'Ergonomi' },
  ];
</script>

<!-- Backdrop Blur Overlay -->
{#if isOpen}
  <button
    type="button"
    class="fixed inset-0 bg-black/50 z-40 backdrop-blur-[1px] transition-opacity cursor-default"
    onclick={onClose}
    aria-label="Tutup Menu Navigasi"
  ></button>
{/if}

<!-- Side Navigation Drawer (.neo-card format) -->
<aside
  class="fixed top-0 bottom-0 left-0 w-[290px] sm:w-[320px] bg-white border-r-2 border-black z-50 flex flex-col justify-between shadow-[6px_0px_0px_#000] transition-transform duration-200 ease-out {isOpen ? 'translate-x-0' : '-translate-x-full'}"
>
  <!-- Drawer Header -->
  <div class="p-4 border-b-2 border-black flex items-center justify-between bg-white shrink-0">
    <div class="flex items-center gap-2">
      <div class="w-7 h-7 bg-black text-white font-black flex items-center justify-center text-xs neo-badge shadow-none">
        TI
      </div>
      <div>
        <div class="font-black text-sm tracking-tight text-black leading-none">RUANGTI</div>
        <div class="text-[9px] mono font-bold text-neutral-400 mt-0.5">NAVIGASI STUDIO</div>
      </div>
    </div>

    <!-- Tombol Tutup ✕ -->
    <button
      type="button"
      onclick={onClose}
      class="neo-btn w-7 h-7 bg-white hover:bg-neutral-100 text-black font-black flex items-center justify-center text-xs"
      title="Tutup Menu"
    >
      ✕
    </button>
  </div>

  <!-- Drawer Body Navigation Links -->
  <div class="flex-1 overflow-y-auto p-3.5 space-y-4">
    <!-- Tombol Aksi Utama: Chat Baru -->
    <button
      type="button"
      onclick={onNewChat}
      class="neo-btn w-full py-2.5 px-3 bg-black hover:bg-neutral-800 text-white font-black text-xs flex items-center justify-center gap-2 shadow-[2px_2px_0px_#000]"
    >
      <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
      <span>+ Percakapan Baru</span>
    </button>

    <!-- Main Navigation Items -->
    <div class="space-y-1.5">
      <div class="text-[10px] mono font-bold text-neutral-400 uppercase tracking-wider px-1">
        Menu Utama
      </div>

      <button
        type="button"
        onclick={() => onNavigate('chat')}
        class="neo-btn w-full p-2.5 text-left text-xs font-black flex items-center justify-between {activeRoute === 'chat' ? 'bg-neutral-100 border-2 border-black text-black' : 'bg-white hover:bg-neutral-50 text-neutral-800'}"
      >
        <div class="flex items-center gap-2.5">
          <svg class="w-4 h-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
          </svg>
          <span>Chat AI Asisten</span>
        </div>
        <span class="neo-badge px-1.5 py-0.2 bg-black text-white text-[9px] mono font-bold">AKTIF</span>
      </button>

      <button
        type="button"
        onclick={() => onNavigate('docs')}
        class="neo-btn w-full p-2.5 text-left text-xs font-black flex items-center justify-between {activeRoute === 'docs' ? 'bg-neutral-100 border-2 border-black text-black' : 'bg-white hover:bg-neutral-50 text-neutral-800'}"
      >
        <div class="flex items-center gap-2.5">
          <svg class="w-4 h-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
          </svg>
          <span>Modul TI (4.595)</span>
        </div>
        <span class="text-[10px] mono text-neutral-400">RAG</span>
      </button>

      <!-- Kamus Simbol ASME Popover Trigger -->
      <button
        type="button"
        onclick={() => (showAsmeModal = !showAsmeModal)}
        class="neo-btn w-full p-2.5 text-left text-xs font-bold bg-white hover:bg-neutral-50 text-neutral-800 flex items-center justify-between"
      >
        <div class="flex items-center gap-2.5">
          <span class="text-sm">⭕</span>
          <span>5 Simbol Peta Kerja ASME</span>
        </div>
        <span class="text-[10px] mono font-bold">{showAsmeModal ? '▲' : '▼'}</span>
      </button>

      {#if showAsmeModal}
        <div class="p-2.5 neo-card bg-neutral-50 text-[11px] space-y-1.5 border-2 border-black shadow-[2px_2px_0px_#000]">
          <div class="font-bold border-b border-black/10 pb-1 flex justify-between">
            <span>STANDAR ASME Y15.3M</span>
            <span class="mono text-[9px]">PETA KERJA</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs">⭕</span> <strong>Operasi:</strong> Mengubah benda kerja
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs">🔲</span> <strong>Pemeriksaan:</strong> Uji dimensi/kualitas
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs">➡️</span> <strong>Transportasi:</strong> Perpindahan tempat
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs">⌛</span> <strong>Menunggu (Delay):</strong> Antrean proses
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs">▽</span> <strong>Penyimpanan:</strong> Gudang resmi
          </div>
        </div>
      {/if}
    </div>

    <!-- Section Riwayat / Topik Cepat -->
    <div class="space-y-1.5 pt-2 border-t-2 border-black/10">
      <div class="text-[10px] mono font-bold text-neutral-400 uppercase tracking-wider px-1">
        Topik Populer Riset
      </div>
      {#each RECENT_TOPICS as item}
        <button
          type="button"
          onclick={() => {
            onNavigate('chat');
          }}
          class="neo-btn w-full p-2 text-left bg-white hover:bg-neutral-50 flex items-center justify-between text-xs"
        >
          <span class="truncate font-medium text-neutral-800">{item.title}</span>
          <span class="neo-badge px-1 py-0.2 bg-neutral-100 text-[8px] mono font-bold text-neutral-600 shrink-0">
            {item.tag}
          </span>
        </button>
      {/each}
    </div>
  </div>

  <!-- Drawer Footer: Metadata Sistem -->
  <div class="p-3 border-t-2 border-black bg-neutral-50 shrink-0 text-[10px] mono space-y-1">
    <div class="flex justify-between font-bold text-black">
      <span>RuangTI Engine</span>
      <span>Go + Svelte 5</span>
    </div>
    <div class="flex justify-between text-neutral-500">
      <span>Memory Runtime</span>
      <span class="text-emerald-700 font-bold">~17 MB RAM</span>
    </div>
  </div>
</aside>
