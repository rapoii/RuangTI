---
version: alpha
name: RuangTI
description: Pure Black & White Neobrutalism Design System for Industrial Engineering AI Workspace.
colors:
  primary: "#000000"
  secondary: "#71717A"
  canvas: "#FFFFFF"
  canvas-subtle: "#F4F4F5"
  surface: "#FFFFFF"
  surface-user: "#F4F4F5"
  border: "#000000"
  shadow: "#000000"
  shadow-muted: "#71717A"
typography:
  h1:
    fontFamily: Plus Jakarta Sans
    fontSize: 1.5rem
    fontWeight: 800
    lineHeight: 1.2
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 0.875rem
  mono:
    fontFamily: JetBrains Mono
    fontSize: 0.75rem
rounded:
  card: 16px
  button: 10px
  input: 12px
  badge: 6px
spacing:
  xs: 4px
  sm: 8px
  md: 12px
  lg: 16px
  xl: 24px
components:
  card-container:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.card}"
    padding: 16px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.button}"
    padding: 8px
  button-secondary:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.button}"
    padding: 8px
  input-field:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.primary}"
    rounded: "{rounded.input}"
    padding: 10px
  status-badge:
    backgroundColor: "{colors.canvas-subtle}"
    textColor: "{colors.primary}"
    rounded: "{rounded.badge}"
    padding: 4px
---

# DESIGN.md — Sistem Desain RuangTI (Versi 5.0: Pure Black & White Neobrutalism)

Dokumen ini adalah **satu-satunya sumber kebenaran (single source of truth)** untuk seluruh keputusan visual, komponen antarmuka, token bentuk, ukuran, bayangan, dan interaksi pada aplikasi **RuangTI** (Industrial Engineering AI Workspace).

---

## 1. Overview (Filosofi & Esensi Desain)

RuangTI mengusung arsitektur visual **Minimalist Pure Black & White Neobrutalism** dengan karakter khas studio Teknik Industri:
- **Monokrom Murni (Zero Slop):** Tanpa gradien warna-warni murah atau efek blur ungu/biru. Hanya hitam pekat, putih bersih, dan abu-abu netral terstruktur.
- **Konsistensi Absolut Bentuk & Ukuran:** Seluruh elemen bertipe sama wajib menggunakan token ukuran radius, tebal border, dan offset bayangan yang seragam tanpa variasi acak.
- **Latar Putih Polos (Zero Distraction):** Kanvas chat memakai `bg-white` polos tanpa grid, motif, atau watermark. Fokus 100% pada percakapan.
- **Viewport Adaptif (VisualViewport):** Tinggi app shell diikat runtime ke `window.visualViewport.height` sehingga saat keyboard virtual muncul, hanya composer yang naik — bukan seluruh halaman terangkat (perilaku setara ChatGPT). Fallback `100dvh` sebelum listener aktif.

---

## 2. Colors (Palet Warna Monokrom)

| Token | Nilai Hex | Peran & Penggunaan |
|---|---|---|
| `primary` | `#000000` | Teks utama, border hitam tegas, bayangan hard shadow, tombol utama |
| `secondary` | `#71717A` | Keterangan sekunder, bayangan elemen gelap (`shadow-muted`) |
| `canvas` | `#FFFFFF` | Latar belakang dasar halaman & kanvas chat |
| `canvas-subtle` | `#F4F4F5` | Area latar subtle, status pill background |
| `surface` | `#FFFFFF` | Kartu jawaban AI, kotak dialog modal, header bar |
| `surface-user` | `#F4F4F5` | Gelembung pesan user (abu-abu muda agar bayangan hitam tetap terlihat) |
| `border` | `#000000` | Garis tepi tebal seragam (2px solid) |
| `shadow` | `#000000` | Bayangan terpotong hard offset tanpa blur (`blurRadius: 0`) |

---

## 3. Typography (Skala Tipografi)

Menggunakan dua font utama:
1. **Plus Jakarta Sans / Inter (`font-sans`):** Digunakan untuk seluruh teks UI, heading, gelembung pesan, dan tombol.
2. **JetBrains Mono (`font-mono`):** Digunakan untuk status badge, tier reasoning AI, kode formula, dan metadata teknis ASME.

---

## 4. Layout & Spacing (Tata Letak & Viewport)

- **App Shell Viewport:** Tinggi diikat runtime ke `window.visualViewport.height` (`style="height: {appHeight}"`) dengan `flex flex-col overflow-hidden`. Fallback `100dvh` sebelum listener aktif. Tujuan: keyboard virtual hanya mengangkat composer, bukan seluruh halaman.
- **Header Bersih (Borderless):** Tinggi `56px` (`h-14 shrink-0`), tanpa garis pembatas bawah — menyatu mulus dengan kanvas. Berisi tombol hamburger (kiri) dan tombol `+` Percakapan Baru (kanan, hanya tampil saat sudah ada pesan). Branding (logo + teks) tidak ditampilkan di header.
- **Scrollable Chat Main:** Mengisi sisa ruang `flex-1 overflow-y-auto min-h-0`; hanya kontainer ini yang bisa di-scroll.
- **Pinned Composer:** Terpasang di dasar layar tanpa garis pemisah atas, dengan padding aman `pb-[max(12px,env(safe-area-inset-bottom))]`.

---

## 5. Elevation & Depth (Aturan Konsistensi Bayangan)

> *"Box/container dan tombol wajib memakai hard shadow. Elemen teks statis, input field, dan badge status wajib FLAT (0px shadow)."*

1. **Card / Container:** Hard shadow `3px 3px 0px #000000`.
2. **Tombol Interaktif:** Hard shadow `2px 2px 0px #000000`.
   - **Tactile Click Feedback:** Saat ditekan (*active/press*), tombol bergeser `translate(1.5px, 1.5px)` dan bayangan menyusut ke `0.5px 0.5px 0px #000000`.
3. **Solusi Bayangan Elemen Hitam:**
   - Gelembung pesan pengguna menggunakan `surface-user` (`#F4F4F5` dengan border hitam 2px) sehingga bayangan hitam `3px 3px 0px #000` tetap kontras dan terangkat jelas.
   - Bila tombol menggunakan latar hitam pekat (`bg-black text-white`), bayangan menggunakan `shadow-[2px_2px_0px_#71717A]` (abu-abu terpotong) atau `shadow-[2px_2px_0px_#000]` di atas kanvas terang.

---

## 6. Shapes & Harmonic Radii (Konsistensi Sudut Lengkung)

Seluruh komponen dikelompokkan ke dalam **4 ukuran radius sudut baku**:
- **Radius 16px (`rounded-2xl` / `1rem`):** Khusus Container Card (Bubble AI, Bubble User, Card Hero).
- **Radius 12px (`rounded-xl` / `0.75rem`):** Khusus Input Field (Textarea composer, Box formula KaTeX).
- **Radius 10px (`rounded-lg` / `0.625rem`):** Khusus Tombol (Kirim, New Chat, Selector Model, Prompt Starter).
- **Radius 6px (`rounded-md` / `0.375rem`):** Khusus Status Badge & Tag Label (Tier model, Modul count).

---

## 7. Components (Matriks 4 Tipe Elemen Baku)

### Tipe 1: Outer Card / Bubble Obrolan
```css
border: 2px solid #000000;
border-radius: 16px;
box-shadow: 3px 3px 0px #000000;
```

### Tipe 2: Tombol Interaktif (Semua yang Dapat Diklik)
```css
border: 2px solid #000000;
border-radius: 10px;
box-shadow: 2px 2px 0px #000000;
transition: transform 0.08s ease, box-shadow 0.08s ease;
```
*Active state:*
```css
transform: translate(1.5px, 1.5px);
box-shadow: 0.5px 0.5px 0px #000000;
```

### Tipe 3: Kotak Input & Layar Statis (FLAT)
```css
border: 2px solid #000000;
border-radius: 12px;
box-shadow: none; /* Wajib Flat agar teks stabil */
```

### Tipe 4: Status Badge & Label Metrik (FLAT KECIL)
```css
border: 1.5px solid #000000;
border-radius: 6px;
box-shadow: none;
font-family: 'JetBrains Mono', monospace;
```

### Tipe 5: Sidebar Drawer (Navigasi Samping)
- Lebar `290px` (mobile) / `320px` (sm+), `bg-white`, `border-r-2 border-black`.
- Saat terbuka: `translate-x-0 shadow-[6px_0px_0px_#000]`.
- Saat tertutup: `-translate-x-full invisible` (wajib `invisible` penuh agar hard shadow 6px tidak bocor di tepi kiri layar).
- Backdrop overlay: `bg-black/50` **tanpa** `backdrop-blur` (hanya digelapkan, konten belakang tetap tajam).

---

## 8. Pola Chat & Navigasi

### Empty State (Layar Awal Sebelum Ada Pesan)
- Terpusat vertikal & horizontal di kanvas putih polos: logo kotak hitam `TI` (`neo-card` 48×48) di atas sapaan.
- Sapaan: `{Selamat pagi/siang/sore/malam}, {kata acak}` — kata acak bernuansa Teknik Industri (Efisiensi, Optimasi, Sinergi, Presisi, dll.), tanpa garis bawah.
- Jam sapaan: `<11` pagi, `<15` siang, `<19` sore, sisanya malam.

### Dropdown / Popover Menu
- Kartu `neo-card` muncul di atas trigger (`bottom-full mb-2`), `shadow-[4px_4px_0px_#000]`.
- Menutup saat tap di luar: `pointerdown` listener di level dokumen + `Escape`. **Jangan** pakai backdrop `position: fixed` (bisa terkurung ancestor ber-`backdrop-filter` sehingga area luar tidak merespons).

### Composer
- Kotak `neo-input` FLAT, textarea 1 baris dengan padding vertikal seimbang (`py-3`) agar placeholder berada di tengah.
- Tombol (selector model, lampiran, kirim) semuanya dikunci `h-8` (32px) + `shrink-0` agar sejajar rapi.

### Landing Page (Sebelum Chat)
- Rute default `landing`; tampil tanpa Header/Sidebar (halaman berdiri sendiri, scroll vertikal penuh).
- Latar Hero memakai pola kertas milimeter blok monokrom (`.ti-grid-bw`).
- Susunan 8 seksi berurutan, tiap seksi diberi nomor badge hitam kecil + label font mono uppercase (01–06):
  1. **Hero** — logo TI (kotak hitam rounded), judul, tagline rujukan 4.595 modul, CTA "Mulai Bertanya", catatan `GRATIS · TANPA DAFTAR · JAWABAN BERUJUKAN`.
  2. **01 Cara Kerja** — 3 kartu langkah bernomor (Ajukan Pertanyaan → Jawaban Berujung Rujukan → Riwayat Tersimpan).
  3. **02 Contoh Percakapan** — cuplikan gelembung tanya/jawab EOQ dengan rumus KaTeX dalam `neo-input`.
  4. **03 Bidang Keilmuan** — grid 2/4 kolom berisi 8 rumpun bidang TI (Riset Operasi, Lean Six Sigma, Ergonomi & K3, Tata Letak Fasilitas, Supply Chain, PPIC, Pemeliharaan, Simulasi & Otomasi).
  5. **04 Keunggulan** — 3 kartu ikon monokrom (Rujukan Nyata, Rumus Rapi, Riwayat Aman).
  6. **05 Basis Pengetahuan** — 3 kartu metrik (4.595 Modul · 32.413 Seksi · ~13 MB Runtime).
  7. **06 Topik Populer** — chip 8 topik yang mengirim pertanyaan langsung ke chat.
  8. **CTA Penutup** — latar `canvas-subtle`, ajakan mulai + tombol "Mulai Bertanya"; lalu **Footer** teks mono.
- Semua seksi dipisah `border-t-2 border-black` agar ritme visual tegas dan konsisten; tanpa warna aksen (murni hitam-putih-abu).
- CTA & chip memanggil `onStartChat(question?)`: berpindah ke rute `chat` dan mengirim pertanyaan awal bila ada (dikirim tepat satu kali via prop `initialMessage` di `Chat.svelte`).

### Alur Auth (Login Google)
- **Rute publik**: `landing`, `docs`. **Rute terproteksi**: `chat`, `profile` — bila belum login, tetap menampilkan latar `Landing.svelte` dengan dialog modal `Login.svelte` melayang (floating modal, overlay gelap transparan **tanpa blur**, tombol tutup ✕ / Batal).
- **Login Modal** (`Login.svelte`): floating dialog rounded (`rounded-2xl`) di tengah latar belakang landing page, logo TI, judul "Masuk untuk Mulai Bertanya", satu tombol `neo-btn` hitam "Masuk dengan Google" dengan ikon G **monokrom** (bukan logo berwarna), plus tombol tutup ✕ dan tautan "Batal". Tutup modal mengembalikan pengguna ke landing page.
- **Profil** (`Profile.svelte`): avatar bulat (`rounded-full border-2 border-black`) berisi foto Google atau inisial nama; nama; email (font mono); garis pemisah; tombol "Kembali ke Chat" (putih) & "Keluar" (hitam).
- **Header**: avatar 32×32 (`neo-btn rounded-full overflow-hidden`) di kanan, hanya tampil bila sudah login; memanggil `onNavigate('profile')`.
- **Sesi**: cookie `rti_session` HttpOnly (SameSite=Lax, Secure otomatis bila `APP_BASE_URL` https). Token disimpan di DB sebagai hash SHA-256, bukan teks asli.
- **Riwayat percakapan**: Sidebar memuat `GET /api/conversations` saat dibuka; tiap item punya tombol hapus (✕). Bila kosong → teks "Belum ada riwayat". Judul diambil dari 60 karakter pertama pesan pertama.
- **Larangan tetap berlaku**: nama provider upstream ("Mimoly"/"MiMo"/"Studio") tidak boleh muncul di UI mana pun, termasuk halaman login & profil.

---

## 9. Selector Model (2 Mode)

RuangTI menyediakan 2 pilihan mode model di composer:

1. **RTI Pro** — Mode penalaran mendalam (thinking) untuk analisis, optimasi sistem, dan pembuktian matematis.
2. **RTI Fast** — Mode respon instan (non-thinking) tanpa proses penalaran bertahap.

> **Catatan internal (jangan tampilkan ke pengguna):** kedua mode dipetakan ke model upstream yang sama dengan pengaturan effort berbeda (`pro` → effort `default`/thinking, `fast` → effort `none`/non-thinking). Nama provider upstream tidak boleh bocor ke antarmuka.

---

## 10. Do's and Don'ts

### Do's:
- **Lakukan:** Selalu gunakan token radius yang sama persis untuk elemen bertipe serupa.
- **Lakukan:** Posisikan seluruh formula matematika KaTeX persis di tengah (`text-center w-full block`).
- **Lakukan:** Pastikan setiap tombol interaktif memiliki micro-interaction geser saat disentuh.
- **Lakukan:** Ikat tinggi app shell ke `window.visualViewport.height` agar keyboard virtual hanya mengangkat composer.
- **Lakukan:** Sembunyikan dropdown/menu popover saat pengguna mengetuk di luar area (`pointerdown` listener di level dokumen) — bukan mengandalkan backdrop `position: fixed` yang bisa terkurung ancestor ber-`backdrop-filter`.

### Don'ts:
- **Dilarang:** Menambahkan gradien warna-warni ungu/biru atau elemen di luar spektrum Black & White.
- **Dilarang:** Memberi bayangan pada input teks (`textarea`) atau badge status kecil.
- **Dilarang:** Menggunakan ukuran border selain `2px` untuk kotak/tombol (kecuali badge `1.5px`).
- **Dilarang:** Membiarkan halaman mobile bergulir penuh sehingga menenggelamkan kotak input.
- **Dilarang:** Menampilkan nama provider/model upstream (mis. "Mimoly", "MiMo", "Studio") pada antarmuka pengguna.
