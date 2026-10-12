# Landing Page RuangTI Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Menambahkan halaman perkenalan (landing) yang tampil sebelum chat, memperkenalkan RuangTI sebagai asisten riset Teknik Industri berbasis rujukan modul, lalu mengarahkan pengunjung masuk ke chat.

**Architecture:** Rute baru `landing` di shell Svelte 5 (`App.svelte`) sebagai tampilan default. Halaman berdiri sendiri (`routes/Landing.svelte`) tanpa Header/Sidebar. Tombol CTA dan chip topik memanggil `onStartChat(message?)` yang berpindah ke rute `chat` dan (bila ada) mengirim pertanyaan awal ke `Chat.svelte`.

**Tech Stack:** Svelte 5 (runes), Vite, Tailwind CSS 3, KaTeX. Verifikasi: `npm run build`, `tsc --noEmit`, dan cek fungsional CDP headless Chrome (pola verifikasi UI yang sudah dipakai proyek ini — tidak ada framework test frontend di repo).

**Spec:** `.superpowers/brainstorm/24822-1791830200/content/02-landing-final-opsi-b.html` (mockup disetujui) + `DESIGN.md` (design system v5.0).

## Global Constraints

- Palet monokrom murni: `#000000`, `#FFFFFF`, `#F4F4F5`, `#71717A`/`#A1A1AA`. Tanpa warna/gradien lain.
- Radius: card 16px, tombol 10px, input 12px, badge 6px. Border `2px solid #000` (badge `1.5px`).
- Shadow: card `3px 3px 0 #000`, tombol `2px 2px 0 #000`, input/badge FLAT.
- Font: Plus Jakarta Sans (UI), JetBrains Mono (label teknis).
- Mobile-first; tanpa animasi berat. Wajib tanpa overflow horizontal (`scrollWidth === innerWidth`).
- Seluruh teks Bahasa Indonesia. **Dilarang** menampilkan nama provider upstream ("Mimoly", "MiMo", "Studio").
- Copy angka wajib akurat: **4.595 modul**, **32.413 seksi** (terverifikasi dari `backend/data/ruangti_rag.db`). Ukuran app ditulis **~13 MB** (perkiraan, bukan angka mati).
- **Dilarang** mengklaim sitasi/sumber modul ditampilkan di jawaban chat — fitur itu tidak ada saat ini.

## Review Focus

1. **CTA/chip mati (dead-end):** tombol "Mulai Bertanya" dan setiap chip harus benar-benar berpindah ke chat — bukan sekadar tampil.
2. **Kirim ganda:** chip mengirim tepat SATU pertanyaan; `$effect` auto-send tidak boleh terpicu dua kali.
3. **Deep-link `#chat`:** membuka ulang `/#chat` tidak boleh menampilkan landing atau mengirim ulang pesan lama.
4. **KaTeX gagal render:** rumus harus jadi markup KaTeX, bukan teks mentah `\sqrt{...}`.
5. **Overflow horizontal di HP:** halaman tidak boleh melebar melebihi lebar viewport.

---

### Task 1: Rute Landing + Hero

**Files:**
- Create: `frontend/src/routes/Landing.svelte`
- Modify: `frontend/src/App.svelte`

**Interfaces:**
- Produces: `Landing.svelte` dengan `interface Props { onStartChat: (message?: string) => void }` (Task 2 & 3 memakai prop ini). `App.svelte` mengekspor perilaku: rute default `'landing'`, fungsi `handleStartChat()`.
- Consumes: `app.css` (`.neo-card`, `.neo-btn`) — sudah ada.

- [ ] **Step 1: Buat `frontend/src/routes/Landing.svelte` dengan hero**

```svelte
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
```

- [ ] **Step 2: Ubah `App.svelte` — rute default `landing`, render Landing tanpa Header/Sidebar**

Ubah `let activeRoute = $state('chat');` menjadi `$state('landing')`. Tambah fungsi dan render kondisional (Header/Sidebar hanya di cabang non-landing):

```svelte
  function handleStartChat() {
    activeRoute = 'chat';
    window.location.hash = 'chat';
    hasMessages = false;
    chatKey += 1;
    isSidebarOpen = false;
  }
```

```svelte
  {#if activeRoute === 'landing'}
    <Landing onStartChat={handleStartChat} />
  {:else}
    <Header
      {activeRoute}
      {hasMessages}
      onNavigate={handleNavigate}
      onToggleSidebar={() => (isSidebarOpen = !isSidebarOpen)}
      onNewChat={handleNewChat}
    />

    <Sidebar
      isOpen={isSidebarOpen}
      onClose={() => (isSidebarOpen = false)}
      onNavigate={handleNavigate}
      onNewChat={handleNewChat}
      {activeRoute}
    />

    <main class="flex-1 flex flex-col overflow-hidden min-h-0 relative">
      {#if activeRoute === 'chat'}
        {#key chatKey}
          <Chat onMessagesChange={(val) => (hasMessages = val)} />
        {/key}
      {:else}
        <Docs />
      {/if}
    </main>
  {/if}
```

Perbarui juga pembacaan hash awal agar mengenali `landing`:

```svelte
    const hash = window.location.hash.replace('#', '');
    if (hash === 'landing' || hash === 'chat' || hash === 'docs') {
      activeRoute = hash;
    }
```

- [ ] **Step 3: Build + type check**

Run: `cd frontend && npx --no-install tsc --noEmit -p tsconfig.json && npm run build`
Expected: `tsc` exit 0, `✓ built in ~1s`.

- [ ] **Step 4: Verifikasi fungsional (CDP headless)**

Jalankan `bash build_single_binary.sh`, restart `ruangti.exe`, lalu cek via CDP di `http://127.0.0.1:8000/`:
- `document.body.innerText` memuat `"Asisten Riset Teknik Industri"` dan `"Mulai Bertanya"`.
- `document.documentElement.scrollWidth === window.innerWidth`.
- Klik tombol `"Mulai Bertanya"` → `document.querySelector('textarea')` ada (masuk ke chat).

Expected: ketiga assert lolos.

- [ ] **Step 5: Commit**

```bash
git add frontend/src/routes/Landing.svelte frontend/src/App.svelte
git commit -m "feat(ui): tambah rute landing page + hero sebagai tampilan awal"
```

---

### Task 2: Bagian Konten Landing (Cuplikan Percakapan, Angka, Footer)

**Files:**
- Modify: `frontend/src/routes/Landing.svelte`

**Interfaces:**
- Consumes: `Landing.svelte` dari Task 1 (hero + prop `onStartChat`).
- Produces: tidak ada interface baru.

- [ ] **Step 1: Tambah impor KaTeX dan blok konten di bawah hero**

Impor di `<script>`: `import katex from 'katex';`. Tambah konstanta rumus:

```ts
  const EOQ_MATH = katex.renderToString('Q^* = \\sqrt{\\frac{2DS}{H}}', {
    displayMode: true,
    throwOnError: false,
  });
```

Sisipkan tiga `<section>` berikut **setelah** `</section>` hero, masih di dalam pembungkus `flex-1 overflow-y-auto`:

```svelte
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

  <!-- FOOTER -->
  <footer class="px-5 py-7 border-t-2 border-black text-center">
    <p class="text-[9px] font-mono font-bold text-neutral-400 tracking-wider">
      RUANGTI · GO + SVELTE · TEKNIK INDUSTRI
    </p>
  </footer>
```

- [ ] **Step 2: Build + type check**

Run: `cd frontend && npx --no-install tsc --noEmit -p tsconfig.json && npm run build`
Expected: exit 0.

- [ ] **Step 3: Verifikasi fungsional (CDP headless)**

Di `http://127.0.0.1:8000/`:
- `document.body.innerText` memuat `"Contoh Percakapan"`, `"Basis Pengetahuan"`, `"4.595"`, `"32.413"`.
- `document.querySelectorAll('.katex').length > 0` (KaTeX benar-benar render).
- `document.body.innerText` **tidak** memuat `"\\sqrt"` (tidak ada LaTeX mentah bocor).
- `document.documentElement.scrollWidth === window.innerWidth`.

Expected: keempat assert lolos.

- [ ] **Step 4: Commit**

```bash
git add frontend/src/routes/Landing.svelte
git commit -m "feat(ui): tambah cuplikan percakapan, angka basis pengetahuan, dan footer di landing"
```

---

### Task 3: Chip Topik Populer → Kirim ke Chat

**Files:**
- Modify: `frontend/src/routes/Landing.svelte`
- Modify: `frontend/src/routes/Chat.svelte`
- Modify: `frontend/src/App.svelte`

**Interfaces:**
- Consumes: `onStartChat(message?: string)` dari Task 1.
- Produces: `Chat.svelte` menerima prop baru `initialMessage?: string` (default `''`); mengirim tepat satu kali saat mount bila `initialMessage` tidak kosong.

- [ ] **Step 1: Tambah data chip + bagian "Topik Populer" di `Landing.svelte`**

```ts
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
```

Sisipkan `<section>` ini **sebelum** footer:

```svelte
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
```

- [ ] **Step 2: Tambah prop `initialMessage` + auto-send di `Chat.svelte`**

```ts
  interface Props {
    onMessagesChange?: (hasMessages: boolean) => void;
    initialMessage?: string;
  }

  let { onMessagesChange, initialMessage = '' }: Props = $props();

  let didAutoSend = $state(false);

  // Kirim pertanyaan awal (dari chip landing) tepat satu kali saat mount
  $effect(() => {
    if (initialMessage && !didAutoSend && messages.length === 0) {
      didAutoSend = true;
      handleSend(initialMessage);
    }
  });
```

- [ ] **Step 3: Wire di `App.svelte` — simpan pesan tertunda dan teruskan ke Chat**

```svelte
  let pendingMessage = $state('');

  function handleStartChat(message?: string) {
    pendingMessage = message ?? '';
    activeRoute = 'chat';
    window.location.hash = 'chat';
    hasMessages = false;
    chatKey += 1;
    isSidebarOpen = false;
  }
```

`handleNewChat` juga wajib mengosongkan: tambah `pendingMessage = '';` di dalamnya. Lalu:

```svelte
          <Chat onMessagesChange={(val) => (hasMessages = val)} initialMessage={pendingMessage} />
```

- [ ] **Step 4: Build + type check**

Run: `cd frontend && npx --no-install tsc --noEmit -p tsconfig.json && npm run build`
Expected: exit 0.

- [ ] **Step 5: Verifikasi fungsional (CDP headless)**

- Di landing, `document.querySelectorAll('button')` yang memuat label `EOQ` ada.
- Klik chip `EOQ` → dalam chat, `document.body.innerText` memuat `"Jelaskan konsep Economic Order Quantity"`.
- Hitung gelembung user: `document.querySelectorAll('span').filter(...)` yang berteks `USER` — harus tepat **1** (bukan 2; membuktikan tidak kirim ganda).
- Muat ulang `http://127.0.0.1:8000/#chat` → landing **tidak** muncul (`document.body.innerText` tidak memuat `"Mulai Bertanya"`).

Expected: keempat assert lolos.

- [ ] **Step 6: Commit**

```bash
git add frontend/src/routes/Landing.svelte frontend/src/routes/Chat.svelte frontend/src/App.svelte
git commit -m "feat(ui): chip topik populer mengirim pertanyaan langsung ke chat"
```

---

### Task 4: Sinkronkan Dokumentasi Desain

**Files:**
- Modify: `DESIGN.md`

**Interfaces:**
- Consumes: tidak ada. Murni dokumentasi.
- Produces: tidak ada.

- [ ] **Step 1: Tambah sub-bagian Landing Page di `DESIGN.md`**

Di bagian "Pola Chat & Navigasi" (atau bagian baru setelahnya), tambahkan:

```markdown
### Landing Page (Sebelum Chat)
- Rute default `landing`; tampil tanpa Header/Sidebar (halaman berdiri sendiri).
- Susunan: Hero (logo TI, judul, tagline rujukan modul, CTA "Mulai Bertanya", catatan gratis) → Contoh Percakapan (cuplikan EOQ, rumus KaTeX) → Basis Pengetahuan (3 angka) → Topik Populer (chip) → Footer.
- CTA & chip memanggil `onStartChat(question?)`: berpindah ke rute `chat` dan mengirim pertanyaan awal bila ada.
```

- [ ] **Step 2: Commit**

```bash
git add DESIGN.md
git commit -m "docs(design): catat struktur landing page di DESIGN.md"
```

---

## Self-Review

- **Spec coverage:** Hero ✓ (Task 1), Contoh Percakapan ✓ (Task 2), Basis Pengetahuan ✓ (Task 2), Topik Populer ✓ (Task 3), Footer ✓ (Task 2). Catatan "tanpa badge sitasi" dipatuhi (Task 2 tidak menampilkan sumber modul).
- **Type consistency:** `onStartChat(message?: string)` konsisten di Task 1/2/3. `initialMessage?: string` didefinisikan dan dikonsumsi hanya di Task 3.
- **Review Focus:** #1 diuji Task 1 Step 4 & Task 3 Step 5; #2 & #3 diuji Task 3 Step 5; #4 diuji Task 2 Step 3; #5 diuji Task 1 Step 4 & Task 2 Step 3.
- **Proportion:** 4 task kecil; setiap task punya deliverable yang bisa ditinjau terpisah.
