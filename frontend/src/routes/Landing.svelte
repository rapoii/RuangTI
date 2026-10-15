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

  const STEPS: { title: string; desc: string }[] = [
    { title: 'Ajukan Pertanyaan', desc: 'Tulis konsep, rumus, atau studi kasus Teknik Industri apa pun.' },
    { title: 'Jawaban Berujung Rujukan', desc: 'Dijawab dengan langkah yang jelas dan bersumber dari modul keilmuan.' },
    { title: 'Riwayat Tersimpan', desc: 'Percakapan otomatis tersimpan di akunmu dan bisa dibuka kembali kapan saja.' },
  ];

  const FIELDS: { name: string; desc: string }[] = [
    { name: 'Riset Operasi', desc: 'Optimasi & pemodelan matematis' },
    { name: 'Lean Six Sigma', desc: 'Perbaikan proses & kualitas' },
    { name: 'Ergonomi & K3', desc: 'Keselamatan & human factor' },
    { name: 'Tata Letak Fasilitas', desc: 'Perancangan & pemindahan bahan' },
    { name: 'Supply Chain', desc: 'Logistik & rantai pasok' },
    { name: 'PPIC', desc: 'Perencanaan & pengendalian produksi' },
    { name: 'Pemeliharaan', desc: 'Keandalan mesin & TPM' },
    { name: 'Simulasi & Otomasi', desc: 'Sistem industri & smart manufacturing' },
  ];

  const FEATURES: { title: string; desc: string; icon: 'book' | 'formula' | 'clock' }[] = [
    { title: 'Rujukan Nyata', desc: 'Setiap jawaban bersumber dari 4.595 modul keilmuan Teknik Industri.', icon: 'book' },
    { title: 'Rumus Rapi', desc: 'Persamaan matematis dan tabel ditampilkan terformat rapi, siap dibaca.', icon: 'formula' },
    { title: 'Riwayat Aman', desc: 'Percakapan tersimpan di akunmu dan bisa dilanjutkan kapan saja.', icon: 'clock' },
  ];

  const EOQ_MATH = katex.renderToString('Q^* = \\sqrt{\\frac{2DS}{H}}', {
    displayMode: true,
    throwOnError: false,
  });
</script>

<div class="flex-1 overflow-y-auto min-h-0 bg-white">
  <!-- HERO -->
  <section class="min-h-full flex flex-col items-center justify-center text-center px-6 py-14 gap-4 relative">
    <!-- Top-Right Actions (GitHub + Docs) -->
    <div class="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2 z-10">
      <a
        href="#docs"
        class="neo-btn rounded-xl bg-white hover:bg-neutral-100 text-black font-black text-xs px-3 py-2 flex items-center gap-1.5 shadow-[2px_2px_0px_#000]"
        title="Buka Dokumentasi RuangTI"
      >
        <svg class="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
          <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
        </svg>
        <span class="hidden sm:inline">Dokumentasi</span>
      </a>

      <a
        href="https://github.com/rapoii/RuangTI"
        target="_blank"
        rel="noopener noreferrer"
        class="neo-btn rounded-xl bg-white hover:bg-neutral-100 text-black font-black text-xs px-3 py-2 flex items-center gap-1.5 shadow-[2px_2px_0px_#000]"
        title="Lihat Repositori GitHub RuangTI"
        aria-label="Repositori GitHub"
      >
        <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
        </svg>
        <span>GitHub</span>
      </a>
    </div>

    <div class="w-14 h-14 bg-black text-white rounded-2xl border-2 border-black flex items-center justify-center font-black text-xl shadow-[3px_3px_0px_#000]">
      TI
    </div>
    <h1 class="text-2xl sm:text-4xl font-black text-black tracking-tight leading-tight max-w-lg">
      Asisten Riset Teknik Industri
    </h1>
    <p class="text-sm text-text-secondary max-w-md leading-relaxed">
      Tanya konsep, rumus, atau studi kasus. Dijawab dengan rujukan 4.595 modul keilmuan Teknik Industri.
    </p>
    <button
      type="button"
      onclick={() => onStartChat()}
      class="neo-btn rounded-xl bg-black hover:bg-neutral-800 text-white font-black text-sm px-7 py-3.5 shadow-[2px_2px_0px_#000] mt-1"
    >
      Mulai Chat
    </button>
    <span class="text-[10px] font-mono font-bold text-text-secondary tracking-wider">
      GRATIS · MASUK DENGAN GOOGLE · JAWABAN BERUJUKAN
    </span>
  </section>

  <!-- CARA KERJA -->
  <section class="px-5 py-9 border-t-2 border-black">
    <div class="flex items-center gap-2 mb-3.5">
      <span class="text-[10px] font-mono font-bold text-white bg-black px-1.5 py-0.5 rounded">01</span>
      <h2 class="text-[11px] font-mono font-bold text-text-secondary uppercase tracking-wider">Cara Kerja</h2>
    </div>
    <div class="flex flex-col gap-3">
      {#each STEPS as s, i}
        <div class="neo-card bg-white p-4 flex items-center gap-3.5">
          <span class="w-8 h-8 shrink-0 bg-black text-white rounded-lg flex items-center justify-center font-mono font-black text-xs leading-none">
            0{i + 1}
          </span>
          <div class="flex flex-col gap-1">
            <span class="text-sm font-black leading-tight">{s.title}</span>
            <span class="text-xs text-text-secondary leading-relaxed">{s.desc}</span>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- CONTOH PERCAKAPAN -->
  <section class="px-5 py-9 border-t-2 border-black">
    <div class="flex items-center gap-2 mb-3.5">
      <span class="text-[10px] font-mono font-bold text-white bg-black px-1.5 py-0.5 rounded">02</span>
      <h2 class="text-[11px] font-mono font-bold text-text-secondary uppercase tracking-wider">Contoh Percakapan</h2>
    </div>
    <div class="neo-card bg-white p-3 flex flex-col gap-2.5">
      <div class="neo-card bg-canvas-subtle text-black px-3 py-2 max-w-[85%] self-end text-xs font-semibold">
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

  <!-- BIDANG KEILMUAN -->
  <section class="px-5 py-9 border-t-2 border-black">
    <div class="flex items-center gap-2 mb-3.5">
      <span class="text-[10px] font-mono font-bold text-white bg-black px-1.5 py-0.5 rounded">03</span>
      <h2 class="text-[11px] font-mono font-bold text-text-secondary uppercase tracking-wider">Bidang Keilmuan</h2>
    </div>
    <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
      {#each FIELDS as f}
        <div class="neo-badge bg-white p-3 flex flex-col gap-1.5 hover:-translate-y-0.5 transition-transform">
          <span class="text-xs font-black leading-tight">{f.name}</span>
          <span class="text-[10px] text-text-secondary leading-snug">{f.desc}</span>
        </div>
      {/each}
    </div>
  </section>

  <!-- KEUNGGULAN -->
  <section class="px-5 py-9 border-t-2 border-black">
    <div class="flex items-center gap-2 mb-3.5">
      <span class="text-[10px] font-mono font-bold text-white bg-black px-1.5 py-0.5 rounded">04</span>
      <h2 class="text-[11px] font-mono font-bold text-text-secondary uppercase tracking-wider">Keunggulan</h2>
    </div>
    <div class="flex flex-col gap-3">
      {#each FEATURES as f}
        <div class="neo-card bg-white p-4 flex items-center gap-3.5">
          <span class="w-9 h-9 shrink-0 bg-black text-white rounded-lg flex items-center justify-center">
            {#if f.icon === 'book'}
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              </svg>
            {:else if f.icon === 'formula'}
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <path d="M18 4H6l6 8-6 8h12" />
              </svg>
            {:else}
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
            {/if}
          </span>
          <div class="flex flex-col gap-1">
            <span class="text-sm font-black leading-tight">{f.title}</span>
            <span class="text-xs text-text-secondary leading-relaxed">{f.desc}</span>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- BASIS PENGETAHUAN -->
  <section class="px-5 py-9 border-t-2 border-black">
    <div class="flex items-center gap-2 mb-3.5">
      <span class="text-[10px] font-mono font-bold text-white bg-black px-1.5 py-0.5 rounded">05</span>
      <h2 class="text-[11px] font-mono font-bold text-text-secondary uppercase tracking-wider">Basis Pengetahuan</h2>
    </div>
    <div class="grid grid-cols-3 gap-2.5">
      <div class="neo-badge bg-white py-3 text-center">
        <strong class="block text-lg font-black leading-none">4.595</strong>
        <span class="text-[10px] font-mono font-bold text-text-secondary uppercase tracking-wider">Modul</span>
      </div>
      <div class="neo-badge bg-white py-3 text-center">
        <strong class="block text-lg font-black leading-none">32.413</strong>
        <span class="text-[10px] font-mono font-bold text-text-secondary uppercase tracking-wider">Seksi</span>
      </div>
      <div class="neo-badge bg-white py-3 text-center">
        <strong class="block text-lg font-black leading-none">~13 MB</strong>
        <span class="text-[10px] font-mono font-bold text-text-secondary uppercase tracking-wider">Runtime</span>
      </div>
    </div>
  </section>

  <!-- TOPIK POPULER -->
  <section class="px-5 py-9 border-t-2 border-black">
    <div class="flex items-center gap-2 mb-3.5">
      <span class="text-[10px] font-mono font-bold text-white bg-black px-1.5 py-0.5 rounded">06</span>
      <h2 class="text-[11px] font-mono font-bold text-text-secondary uppercase tracking-wider">Topik Populer</h2>
    </div>
    <div class="flex flex-wrap justify-center gap-2">
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

  <!-- CTA PENUTUP -->
  <section class="px-5 py-10 border-t-2 border-black bg-canvas-subtle flex flex-col items-center text-center gap-3">
    <h2 class="text-lg font-black text-black tracking-tight leading-tight max-w-xs">
      Siap mulai riset Teknik Industri?
    </h2>
    <p class="text-xs text-text-secondary max-w-xs leading-relaxed">
      Gratis — cukup masuk dengan Google untuk mulai bertanya.
    </p>
    <button
      type="button"
      onclick={() => onStartChat()}
      class="neo-btn rounded-xl bg-black hover:bg-neutral-800 text-white font-black text-sm px-7 py-3.5 shadow-[2px_2px_0px_#000] mt-1"
    >
      Mulai Chat
    </button>
  </section>

  <!-- FOOTER -->
  <footer class="px-5 py-7 border-t-2 border-black text-center">
    <p class="text-[10px] font-mono font-bold text-text-secondary tracking-wider">
      RUANGTI · GO + SVELTE · TEKNIK INDUSTRI
    </p>
  </footer>
</div>
