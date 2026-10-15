<script lang="ts">
  import { listConversations, deleteConversation, type ConversationSummary } from '../lib/conversations';
  import { auth, logout, initialsOf } from '../lib/auth.svelte';

  interface Props {
    isOpen: boolean;
    onClose: () => void;
    onNavigate: (route: string) => void;
    onNewChat: () => void;
    onSelectConversation?: (id: string) => void;
    onOpenProfile?: () => void;
    activeRoute: string;
  }

  let { isOpen, onClose, onNavigate, onNewChat, onSelectConversation, onOpenProfile, activeRoute }: Props = $props();

  let conversations = $state<ConversationSummary[]>([]);
  let loading = $state(false);
  let loggingOut = $state(false);

  async function reloadList() {
    if (!auth.user) {
      conversations = [];
      return;
    }
    loading = true;
    try {
      conversations = await listConversations();
    } catch {
      conversations = [];
    } finally {
      loading = false;
    }
  }

  $effect(() => {
    if (isOpen) {
      void reloadList();
    }
  });

  async function handleDelete(e: MouseEvent, id: string) {
    e.stopPropagation();
    try {
      await deleteConversation(id);
      conversations = conversations.filter((c) => c.id !== id);
    } catch {
      // abaikan bila gagal
    }
  }

  function handleOpenConv(id: string) {
    onSelectConversation?.(id);
    onClose();
  }

  async function handleLogout() {
    loggingOut = true;
    try {
      await logout();
      onNavigate('landing');
      onClose();
    } finally {
      loggingOut = false;
    }
  }
</script>

<!-- Backdrop Blur Overlay -->
{#if isOpen}
  <button
    type="button"
    class="fixed inset-0 bg-black/50 z-40 transition-opacity cursor-default"
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

    <!-- Tautan Navigasi Sekunder -->
    <div class="space-y-1.5">
      <button
        type="button"
        onclick={() => {
          onNavigate('docs');
          onClose();
        }}
        class="neo-btn w-full py-2 px-3 bg-white hover:bg-neutral-100 text-black font-bold text-xs flex items-center justify-center gap-2"
      >
        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
        <span>Dokumentasi</span>
      </button>
    </div>

    <!-- Section Riwayat Percakapan -->
    <div class="space-y-1.5 pt-1">
      <div class="text-[10px] font-mono font-bold text-text-secondary uppercase tracking-wider px-1">
        Riwayat Percakapan
      </div>
      {#if loading}
        <div class="text-xs text-text-secondary px-2 py-3 italic">Memuat...</div>
      {:else if conversations.length === 0}
        <div class="text-xs text-text-secondary px-2 py-3">Belum ada riwayat</div>
      {:else}
        {#each conversations as item (item.id)}
          <div class="flex items-center gap-1">
            <button
              type="button"
              onclick={() => handleOpenConv(item.id)}
              class="neo-btn flex-1 p-2.5 text-left bg-white hover:bg-neutral-50 flex items-center text-xs transition-colors overflow-hidden"
            >
              <span class="truncate font-semibold text-black">{item.title}</span>
            </button>
            <button
              type="button"
              onclick={(e) => handleDelete(e, item.id)}
              class="neo-btn w-8 h-8 bg-white hover:bg-neutral-100 text-black font-black flex items-center justify-center text-xs shrink-0"
              title="Hapus percakapan"
            >
              ✕
            </button>
          </div>
        {/each}
      {/if}
    </div>
  </div>

  <!-- Profil Akun Pengguna (Pinned Footer di Bawah Drawer) -->
  {#if auth.user}
    <div class="p-3 border-t-2 border-black bg-white shrink-0 flex items-center justify-between gap-2">
      <button
        type="button"
        onclick={() => {
          if (onOpenProfile) {
            onOpenProfile();
          } else {
            onNavigate('profile');
          }
          onClose();
        }}
        class="flex-1 min-w-0 flex items-center gap-2.5 text-left p-1 rounded-lg hover:bg-neutral-100 transition-colors"
        title="Buka Profil"
      >
        {#if auth.user.picture}
          <img
            src={auth.user.picture}
            alt=""
            referrerpolicy="no-referrer"
            class="w-9 h-9 rounded-full border-2 border-black object-cover shrink-0"
          />
        {:else}
          <div class="w-9 h-9 rounded-full border-2 border-black bg-black text-white flex items-center justify-center font-black text-xs shrink-0">
            {initialsOf(auth.user.name)}
          </div>
        {/if}
        <div class="min-w-0 flex-1">
          <div class="text-xs font-black text-black truncate leading-tight">
            {auth.user.name}
          </div>
          <div class="text-[10px] font-mono text-neutral-500 truncate mt-0.5">
            {auth.user.email}
          </div>
        </div>
      </button>

      <!-- Tombol Keluar (Logout) Cepat -->
      <button
        type="button"
        onclick={handleLogout}
        disabled={loggingOut}
        class="neo-btn w-8 h-8 bg-white hover:bg-neutral-100 text-black flex items-center justify-center text-xs shrink-0 disabled:opacity-50"
        title="Keluar"
        aria-label="Keluar dari akun"
      >
        <svg class="w-4 h-4 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
          <polyline points="16 17 21 12 16 7"></polyline>
          <line x1="21" y1="12" x2="9" y2="12"></line>
        </svg>
      </button>
    </div>
  {/if}
</aside>
