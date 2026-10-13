<script lang="ts">
  import { auth, logout, initialsOf } from '../lib/auth.svelte';

  interface Props {
    onNavigate?: (route: string) => void;
  }

  let { onNavigate }: Props = $props();
  let busy = $state(false);

  async function handleLogout() {
    busy = true;
    await logout();
    busy = false;
    onNavigate?.('landing');
  }
</script>

<section class="flex-1 overflow-y-auto min-h-0 bg-white px-5 py-10">
  <div class="max-w-sm mx-auto flex flex-col items-center text-center gap-3">
    {#if auth.user?.picture}
      <img
        src={auth.user.picture}
        alt=""
        referrerpolicy="no-referrer"
        class="w-20 h-20 rounded-full border-2 border-black object-cover"
      />
    {:else}
      <div class="w-20 h-20 rounded-full border-2 border-black bg-black text-white flex items-center justify-center font-black text-xl">
        {initialsOf(auth.user?.name ?? 'TI')}
      </div>
    {/if}

    <h1 class="text-lg font-black text-black tracking-tight leading-tight">
      {auth.user?.name ?? 'Pengguna'}
    </h1>
    <p class="text-xs font-mono text-text-secondary break-all">
      {auth.user?.email ?? '-'}
    </p>

    <div class="w-full border-t-2 border-black my-4"></div>

    <button
      type="button"
      onclick={() => onNavigate?.('chat')}
      class="neo-btn w-full bg-white hover:bg-neutral-100 text-black font-black text-sm px-6 py-3"
    >
      Kembali ke Chat
    </button>

    <button
      type="button"
      onclick={handleLogout}
      disabled={busy}
      class="neo-btn w-full bg-black hover:bg-neutral-800 text-white font-black text-sm px-6 py-3 disabled:opacity-60"
    >
      {busy ? 'Keluar...' : 'Keluar'}
    </button>
  </div>
</section>
