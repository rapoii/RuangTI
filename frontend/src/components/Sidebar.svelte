<script lang="ts">
  interface Props {
    isOpen: boolean;
    onClose: () => void;
    onNavigate: (route: string) => void;
    onNewChat: () => void;
    activeRoute: string;
  }

  let { isOpen, onClose, onNavigate, onNewChat, activeRoute }: Props = $props();

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
  class="fixed top-0 bottom-0 left-0 w-[290px] sm:w-[320px] bg-white border-r-2 border-black z-50 flex flex-col transition-all duration-200 ease-out {isOpen ? 'translate-x-0 shadow-[6px_0px_0px_#000] visible' : '-translate-x-full invisible'}"
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
      <span>Percakapan Baru</span>
    </button>

    <!-- Section Riwayat / Topik Cepat Riset Industri -->
    <div class="space-y-1.5 pt-1">
      <div class="text-[10px] mono font-bold text-neutral-400 uppercase tracking-wider px-1">
        Topik Populer Riset
      </div>
      {#each RECENT_TOPICS as item}
        <button
          type="button"
          onclick={() => {
            onNavigate('chat');
          }}
          class="neo-btn w-full p-2.5 text-left bg-white hover:bg-neutral-50 flex items-center justify-between text-xs transition-colors"
        >
          <span class="truncate font-semibold text-neutral-900">{item.title}</span>
          <span class="neo-badge px-1.5 py-0.2 bg-neutral-100 text-[8px] mono font-bold text-neutral-600 shrink-0">
            {item.tag}
          </span>
        </button>
      {/each}
    </div>
  </div>
</aside>
