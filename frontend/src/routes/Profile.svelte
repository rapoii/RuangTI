<script lang="ts">
  import { auth, logout, initialsOf } from '../lib/auth.svelte';

  interface Props {
    onClose?: () => void;
    onLogout?: () => void;
  }

  let { onClose, onLogout }: Props = $props();
  let busy = $state(false);

  function handleDismiss() {
    onClose?.();
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      handleDismiss();
    }
  }

  async function handleLogout() {
    busy = true;
    try {
      await logout();
      onLogout?.();
    } finally {
      busy = false;
    }
  }
</script>

<svelte:window onkeydown={handleKeydown} />

<div
  class="fixed inset-0 z-50 flex items-center justify-center p-4 animate-in fade-in duration-150"
>
  <!-- Backdrop klik untuk menutup (tanpa blur) -->
  <div
    class="fixed inset-0 bg-black/40"
    onclick={handleDismiss}
    onkeydown={handleKeydown}
    role="button"
    tabindex="-1"
    aria-label="Tutup profil"
  ></div>

  <!-- Dialog Card Neobrutalism Floating -->
  <div
    role="dialog"
    aria-modal="true"
    aria-labelledby="profile-modal-title"
    tabindex="-1"
    class="relative z-10 bg-white rounded-2xl border-2 border-black shadow-[4px_4px_0px_#000] p-6 sm:p-7 max-w-xs sm:max-w-sm w-full text-center flex flex-col items-center gap-3 animate-in zoom-in-95 duration-150"
  >
    <!-- Tombol Tutup ✕ -->
    <button
      type="button"
      onclick={handleDismiss}
      class="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center border-2 border-black hover:bg-neutral-100 font-mono font-bold text-xs"
      aria-label="Tutup profil"
    >
      ✕
    </button>

    <!-- Avatar Profil -->
    <div class="mt-2">
      {#if auth.user?.picture}
        <img
          src={auth.user.picture}
          alt=""
          referrerpolicy="no-referrer"
          class="w-20 h-20 rounded-full border-2 border-black object-cover shadow-[2px_2px_0px_#000]"
        />
      {:else}
        <div class="w-20 h-20 rounded-full border-2 border-black bg-black text-white flex items-center justify-center font-black text-xl shadow-[2px_2px_0px_#000]">
          {initialsOf(auth.user?.name ?? 'TI')}
        </div>
      {/if}
    </div>

    <!-- Info Akun -->
    <div class="space-y-1 w-full">
      <h2 id="profile-modal-title" class="text-base sm:text-lg font-black text-black tracking-tight leading-tight truncate px-2">
        {auth.user?.name ?? 'Pengguna'}
      </h2>
      <p class="text-xs font-mono text-text-secondary truncate px-2">
        {auth.user?.email ?? '-'}
      </p>
    </div>

    <div class="w-full border-t-2 border-black my-1"></div>

    <!-- Tombol Keluar (Logout) -->
    <button
      type="button"
      onclick={handleLogout}
      disabled={busy}
      class="neo-btn rounded-xl bg-black hover:bg-neutral-800 text-white font-black text-xs sm:text-sm px-5 py-2.5 shadow-[2px_2px_0px_#000] flex items-center gap-2 w-full justify-center disabled:opacity-60"
    >
      <svg class="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
        <polyline points="16 17 21 12 16 7"></polyline>
        <line x1="21" y1="12" x2="9" y2="12"></line>
      </svg>
      <span>{busy ? 'Keluar...' : 'Keluar'}</span>
    </button>
  </div>
</div>
