<script lang="ts">
  import { loginWithGoogle } from '../lib/auth.svelte';

  interface Props {
    onBack?: () => void;
  }

  let { onBack }: Props = $props();
</script>

<section class="min-h-full flex flex-col items-center justify-center text-center px-6 py-12 gap-4">
  <div class="w-14 h-14 bg-black text-white neo-card flex items-center justify-center font-black text-xl shadow-[3px_3px_0px_#000]">
    TI
  </div>
  <h1 class="text-xl font-black text-black tracking-tight leading-tight">
    Masuk untuk Mulai Bertanya
  </h1>
  <p class="text-sm text-text-secondary max-w-xs leading-relaxed">
    Percakapanmu tersimpan di akunmu. Masuk dengan Google untuk melanjutkan.
  </p>

  <button
    type="button"
    onclick={loginWithGoogle}
    class="neo-btn bg-black hover:bg-neutral-800 text-white font-black text-sm px-6 py-3 shadow-[2px_2px_0px_#000] flex items-center gap-2.5 mt-1"
  >
    <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 11v2.4h5.7c-.23 1.5-1.74 4.4-5.7 4.4-3.43 0-6.23-2.84-6.23-6.34S8.57 5.12 12 5.12c1.95 0 3.26.83 4.01 1.55l2.73-2.63C17.06 2.5 14.74 1.6 12 1.6 6.98 1.6 2.9 5.68 2.9 10.7S6.98 19.8 12 19.8c5.25 0 8.73-3.69 8.73-8.88 0-.6-.06-1.05-.15-1.5H12z"/>
    </svg>
    Masuk dengan Google
  </button>

  {#if onBack}
    <button
      type="button"
      onclick={onBack}
      class="text-[11px] font-mono font-bold text-text-secondary underline mt-1"
    >
      Kembali
    </button>
  {/if}
</section>
