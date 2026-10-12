<script lang="ts">
  import katex from 'katex';

  interface Props {
    onStartChat: (message?: string) => void;
  }

  let { onStartChat }: Props = $props();

  const TOPICS: { label: string; question: string }[] = [
    { label: 'EOQ', question: 'Jelaskan konsep Economic Order Quantity (EOQ) beserta rumus dan arti tiap variabelnya.' },
    { label: 'OPC', question: 'Jelaskan fungsi Operation Process Chart (OPC) dan simbol ASME yang dipakai untuk perakitan.' },
    { label: 'CPM', question: 'Bagaimana langkah menentukan lintasan kritis (Critical Path Method) dalam manajemen proyek?' },
    { label: 'Lean', question: 'Jelaskan 7 jenis pemborosan (waste) dalam Lean Manufacturing dan cara eliminasinya.' },
    { label: 'Ergonomi', question: 'Jelaskan prinsip dasar ergonomi dan penerapannya di tempat kerja.' },
    { label: 'Simulasi', question: 'Bagaimana cara memulai simulasi sistem diskrit untuk lini produksi?' },
    { label: 'Pengendalian Mutu', question: 'Jelaskan konsep dasar Statistical Process Control (SPC) dan control chart.' },
    { label: 'Tata Letak', question: 'Jelaskan metode Systematic Layout Planning (SLP) untuk perancangan tata letak pabrik.' },
  ];

  const EOQ_MATH = katex.renderToString('Q^* = \\sqrt{\\frac{2DS}{H}}', {
    displayMode: true,
    throwOnError: false,
  });
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

  <!-- CONTOH PERCAKAPAN -->
  <section class="px-5 py-8 border-t-2 border-black">
    <p class="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wider mb-3">
      Contoh Percakapan
    </p>
    <div class="neo-card bg-white p-3 flex flex-col gap-2.5">
      <div class="neo-card bg-neutral-100 text-black px-3 py-2 max-w-[85%] self-end text-xs font-semibold">
        Turunkan rumus EOQ dan arti tiap variabelnya
      </div>
      <div class="neo-card bg-white text-black px-3 py-2.5 max-w-[95%] self-start text-xs leading-relaxed">
        Economic Order Quantity meminimalkan total biaya pesan + simpan:
        <div class="neo-input bg-neutral-50 my-2.5 py-2.5 overflow-x-auto text-center text-black">
          {@html EOQ_MATH}
        </div>
        D = permintaan tahunan, S = biaya pesan, H = biaya simpan per unit.
      </div>
    </div>
  </section>

  <!-- BASIS PENGETAHUAN -->
  <section class="px-5 py-8 border-t-2 border-black">
    <p class="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wider mb-3">
      Basis Pengetahuan
    </p>
    <div class="grid grid-cols-3 gap-2.5">
      <div class="border-2 border-black rounded-xl bg-white py-3 text-center">
        <b class="block text-lg font-black leading-none">4.595</b>
        <span class="text-[8px] font-mono font-bold text-neutral-500 uppercase tracking-wider">Modul</span>
      </div>
      <div class="border-2 border-black rounded-xl bg-white py-3 text-center">
        <b class="block text-lg font-black leading-none">32.413</b>
        <span class="text-[8px] font-mono font-bold text-neutral-500 uppercase tracking-wider">Seksi</span>
      </div>
      <div class="border-2 border-black rounded-xl bg-white py-3 text-center">
        <b class="block text-lg font-black leading-none">~13 MB</b>
        <span class="text-[8px] font-mono font-bold text-neutral-500 uppercase tracking-wider">Ukuran</span>
      </div>
    </div>
  </section>

  <!-- TOPIK POPULER -->
  <section class="px-5 py-8 border-t-2 border-black">
    <p class="text-[10px] font-mono font-bold text-neutral-400 uppercase tracking-wider mb-3">
      Topik Populer
    </p>
    <div class="flex flex-wrap gap-2">
      {#each TOPICS as t}
        <button
          type="button"
          onclick={() => onStartChat(t.question)}
          class="neo-badge px-3 py-1.5 text-[11px] font-bold bg-white hover:bg-neutral-100 text-black cursor-pointer"
        >
          {t.label}
        </button>
      {/each}
    </div>
  </section>

  <!-- FOOTER -->
  <footer class="px-5 py-7 border-t-2 border-black text-center">
    <p class="text-[9px] font-mono font-bold text-neutral-400 tracking-wider">
      RUANGTI · GO + SVELTE · TEKNIK INDUSTRI
    </p>
  </footer>
</div>
