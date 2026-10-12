<script lang="ts">
  interface Props {
    onStartChat: (message?: string) => void;
  }

  let { onStartChat }: Props = $props();
</script>

<div class="flex-1 overflow-y-auto min-h-0 bg-white">
  <!-- HERO -->
  <section class="min-h-full flex flex-col items-center justify-center text-center px-6 py-12 gap-4">
    <div class="w-14 h-14 bg-black text-white neo-card flex items-center justify-center font-black text-xl shadow-[3px_3px_0px_#000]">
      TI
    </div>
    <h1 class="text-2xl sm:text-3xl font-black text-black tracking-tight leading-tight">
      Asisten Riset Teknik Industri
    </h1>
    <p class="text-sm text-neutral-500 max-w-md leading-relaxed">
      Tanya konsep, rumus, atau studi kasus. Dijawab dengan rujukan 4.595 modul keilmuan Teknik Industri.
    </p>
    <button
      type="button"
      onclick={() => onStartChat()}
      class="neo-btn bg-black hover:bg-neutral-800 text-white font-black text-sm px-6 py-3 shadow-[2px_2px_0px_#000] mt-1"
    >
      Mulai Bertanya
    </button>
    <span class="text-[10px] font-mono font-bold text-neutral-400 tracking-wider">
      GRATIS · TANPA DAFTAR
    </span>
  </section>
</div>
