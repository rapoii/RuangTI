<script lang="ts">
  import { loginWithGoogle } from '../lib/auth.svelte';

  interface Props {
    onClose?: () => void;
    onBack?: () => void;
  }

  let { onClose, onBack }: Props = $props();

  function handleDismiss() {
    if (onClose) {
      onClose();
    } else if (onBack) {
      onBack();
    }
  }

  function handleBackdrop(e: MouseEvent) {
    if (e.target === e.currentTarget) {
      handleDismiss();
    }
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === 'Escape') {
      handleDismiss();
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
    aria-label="Tutup dialog masuk"
  ></div>

  <!-- Dialog Card -->
  <div
    role="dialog"
    aria-modal="true"
    aria-labelledby="login-modal-title"
    tabindex="-1"
    class="relative z-10 bg-white rounded-2xl border-2 border-black shadow-[4px_4px_0px_#000] p-6 sm:p-8 max-w-sm w-full text-center flex flex-col items-center gap-4 animate-in zoom-in-95 duration-150"
  >
    {#if onClose || onBack}
      <button
        type="button"
        onclick={handleDismiss}
        class="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center border-2 border-black hover:bg-neutral-100 font-mono font-bold text-xs"
        aria-label="Tutup dialog masuk"
      >
        ✕
      </button>
    {/if}

    <div class="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center font-black text-lg border-2 border-black shadow-[2px_2px_0px_#000]">
      TI
    </div>
    <h2 id="login-modal-title" class="text-xl font-black text-black tracking-tight leading-tight">
      Masuk untuk Mulai Chat
    </h2>
    <p class="text-sm text-text-secondary max-w-xs leading-relaxed">
      Percakapanmu tersimpan di akunmu. Masuk dengan Google untuk melanjutkan.
    </p>

    <button
      type="button"
      onclick={loginWithGoogle}
      class="neo-btn rounded-xl bg-black hover:bg-neutral-800 text-white font-black text-sm px-6 py-3 shadow-[2px_2px_0px_#000] flex items-center gap-2.5 mt-1 w-full justify-center"
    >
      <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 11v2.4h5.7c-.23 1.5-1.74 4.4-5.7 4.4-3.43 0-6.23-2.84-6.23-6.34S8.57 5.12 12 5.12c1.95 0 3.26.83 4.01 1.55l2.73-2.63C17.06 2.5 14.74 1.6 12 1.6 6.98 1.6 2.9 5.68 2.9 10.7S6.98 19.8 12 19.8c5.25 0 8.73-3.69 8.73-8.88 0-.6-.06-1.05-.15-1.5H12z"/>
      </svg>
      Masuk dengan Google
    </button>

    {#if onClose || onBack}
      <button
        type="button"
        onclick={handleDismiss}
        class="text-[11px] font-mono font-bold text-text-secondary underline mt-1"
      >
        Batal
      </button>
    {/if}
  </div>
</div>
