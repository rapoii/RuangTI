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
- **Latar Belakang Gambar Teknik (Ambient Motif):** Tekstur kertas milimeter blok monokrom tipis (`opacity ~4%`) dengan watermark samar simbol alur proses ASME (⭕ Operasi, 🔲 Inspeksi, ➡️ Transportasi, ▽ Penyimpanan) di ruang kosong chat.
- **Viewport Terkunci (100dvh):** Layout mobile terkunci pada `100dvh` (`overflow-hidden flex flex-col`). Header dan composer fixed, hanya kontainer gelembung chat yang bisa di-scroll.

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

- **App Shell Viewport:** Wajib `h-[100dvh] max-h-[100dvh] flex flex-col overflow-hidden`.
- **Pinned Header:** Tinggi tepat `56px` (`h-14 shrink-0 border-b-2 border-black`).
- **Scrollable Chat Main:** Mengisi sisa ruang `flex-1 overflow-y-auto px-4 py-3`.
- **Pinned Composer:** Terpasang di dasar layar dengan padding aman `pb-[max(12px,env(safe-area-inset-bottom))]`.

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

---

## 8. Multi-Tier Thinking Effort Selector

Tersedia 5 level reasoning RuangTI Neural Engine (engine utama: Mimoly port 8080; cadangan: 9Router port 20128):
1. **Fast (No Think)**: Respon kilat tanpa penalaran bertahap (`mimo-v2.6-flash@none`).
2. **Low Effort**: Penalaran ringan kueri & kalkulasi ringkas (`mimo-v2.6-flash@default`).
3. **Medium Effort**: Penalaran berimbang analisis terstruktur (`mimo-v2.6-flash@max`).
4. **High Effort**: Penalaran mendalam optimasi & simulasi kompleks (`mimo-v2.6-pro@default`).
5. **Extra High Effort**: Eksplorasi komputasi mendalam riset operasi (`mimo-v2.6-pro@max`).

---

## 9. Do's and Don'ts

### Do's:
- **Lakukan:** Selalu gunakan token radius yang sama persis untuk elemen bertipe serupa.
- **Lakukan:** Posisikan seluruh formula matematika KaTeX persis di tengah (`text-center w-full block`).
- **Lakukan:** Pastikan setiap tombol interaktif memiliki micro-interaction geser saat disentuh.
- **Lakukan:** Kunci layout viewport ke `100dvh` di perangkat seluler.

### Don'ts:
- **Dilarang:** Menambahkan gradien warna-warni ungu/biru atau elemen di luar spektrum Black & White.
- **Dilarang:** Memberi bayangan pada input teks (`textarea`) atau badge status kecil.
- **Dilarang:** Menggunakan ukuran border selain `2px` untuk kotak/tombol (kecuali badge `1.5px`).
- **Dilarang:** Membiarkan halaman mobile bergulir penuh sehingga menenggelamkan kotak input.
