# DESIGN.md — Sistem Desain RuangTI (Versi 4.0 - Pure Light Universal Industrial Engineering)

Dokumen ini adalah **satu-satunya sumber kebenaran (single source of truth)** untuk seluruh keputusan visual, antarmuka, token warna, tipografi, dan interaksi web app **RuangTI** (Platform AI Chat & Workspace Rekayasa Teknik Industri).

---

## 1. Filosofi & Esensi Desain
RuangTI dirancang sebagai **"Ruang Kerja AI & Berpikir Rekayasa Sistem yang Tenang"** (*Industrial Engineering Workspace & Knowledge Hub*).
- **Pendekatan Visual**: Pure Light Mode, Clean, Minimalist, Precision-Engineered, Human-Centric, Anti-AI Slop, dan **High-Performance 60fps Low-End Device Ready**.
- **Karakter Antarmuka**: Tenang seperti ruang studio laboratorium teknik, tajam dan terstruktur, fokus pada konten matematis, formula optimasi, grafik alir, dan logika sistem tanpa distraksi visual.

---

## 2. Palet Token Warna (Pure Light Mode Semantic Tokens)

RuangTI mengadopsi tema terang murni (*Pure Light Theme*) dengan kontras tinggi sesuai standar WCAG AA:

- **Canvas (Background Utama)**: `#F8F9FA` (Soft neutral off-white)
- **Canvas Subtle (Sidebar / Panel)**: `#F1F3F5` (Elevasi pemisah yang tenang)
- **Surface (Card / Bubble / Dialog)**: `#FFFFFF` (Solid white)
- **Surface Hover**: `#F8F9FA`
- **Surface Active**: `#E9ECEF`
- **Border**: `#E2E4E9` (Subtle boundary)
- **Border Strong**: `#D0D3D9` (Active/focused border)
- **Text Primary**: `#16181D` (Deep charcoal, bukan pure black agar tidak melelahkan mata)
- **Text Secondary**: `#5F6570` (Muted caption, sub-label, secondary copy)
- **Text Tertiary**: `#8F95A0` (Disabled, hotkeys, placeholders)
- **Accent Primary (Industrial Amber Gold)**: `#E09F3E` (*Industrial Amber Gold* — Aksen hangat utama)
  - ⚠️ **Aturan Wajib Kontras**: Seluruh tombol, badge, dan pill dengan latar belakang `bg-accent` / `#E09F3E` **WAJIB** menggunakan teks putih tebal (`text-white font-bold`).
- **Accent Subtle**: `rgba(224, 159, 62, 0.12)`
- **Accent Hover**: `#C98B32`
- **Emerald Primary (Share / Action)**: `#16A34A` (*Emerald Green* — Tombol aksi publik & status aman)

---

## 3. Tipografi & Skala Hirarki
RuangTI menggunakan 3 font Google via `next/font/google`:
1. **Space Grotesk** (`font-display`): Digunakan untuk identitas merek RuangTI, badge hero, heading level 1, dan judul modal.
2. **Manrope** (`font-sans`): Digunakan untuk seluruh UI body text, input form, nama menu, chat bubble, dan naskah dokumentasi.
3. **IBM Plex Mono** (`font-mono`): Digunakan untuk blok kode Python/C++, formula matematis, kbd shortcut, dan metadata model.

---

## 4. Tipografi Formula Ilmiah & KaTeX (Scientific Typography)
- **Baseline Alignment**: KaTeX dibiarkan bekerja alami (`font-size: 1.02em - 1.05em`) tanpa forced `vertical-align` global agar rumus di dalam tanda kurung sejajar presisi.
- **Spacious Fractions**: Pecahan bertingkat (`\dfrac`) memiliki garis bagi tegas (`0.08em`) dengan breathing room atas-bawah `0.22em`.
- **Display Math Container**: Formula display terbungkus kartu putih dengan `margin: 1rem 0`, `padding: 0.85rem 1.25rem`, border halus, dan **posisi wajib di tengah secara simetris (`block w-full text-center flex justify-center`)** untuk mengeliminasi deadspace asimetris pada layar lebar maupun mobile.

---

## 5. Rute Dokumentasi Resmi (`/docs`) — 3-Kolom Modern
Dokumentasi RuangTI dirancang setara dengan standar dokumentasi modern kelas dunia (Claude Docs & Stripe Docs):
1. **Kolom Kiri (Sidebar Navigasi)**: Kategori accordion dengan Zero-Reflow CSS Grid Transition, indikator aktif bernuansa emas, dan mobile drawer responsif dengan tombol close 'X' yang tegas.
2. **Kolom Tengah (Area Konten Utama)**: Artikel teknis komprehensif (14 panduan resmi + 656 modul RAG), rendering semantik tebal/code untuk token UI, dan transisi pergantian halaman yang gesit.
3. **Kolom Kanan (Table of Contents)**: Scrollspy dinamis dengan pelacakan judul aktif dan layout lock-scroll.
4. **Spotlight Search Modal (`Ctrl+K` / `⌘K`)**: Dialog pencarian instan minimalis tanpa footer hint yang mengganggu.

---

## 6. Sistem Animasi Ultra-Smooth & Low-End Device Friendly (60fps)
Untuk memastikan antarmuka berjalan sangat lancar di segala jenis perangkat (termasuk laptop lama dan smartphone low-end):
1. **GPU Hardware Composited Properties**:
   - Hanya menggerakkan properti **`transform`** (`translateX`, `translateY`, `scale`, `rotate`) dan **`opacity`**.
   - Menghindari animasi CSS/JS pada properti layout seperti `top`, `left`, `width`, `height`, `margin`, `padding` yang memicu *Layout Calculation (Reflow)*.
2. **Zero-Lag Native CSS Grid Accordion**:
   - Menggunakan `grid-template-rows: 1fr` vs `0fr` + `transition: grid-template-rows 0.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.18s ease` untuk buka-tutup kategori sidebar dan kotak penalaran *ThinkingBlock*.
3. **Hardware Acceleration Flag (`willChange`)**:
   - Menyertakan `style={{ willChange: "transform, opacity" }}` pada seluruh komponen bergerak dinamis.
4. **Lightweight Backdrop Blur**:
   - Menggunakan filter ringan `backdrop-blur-[2px] bg-black/45` untuk mencegah beban berat pada chip grafis ponsel saat membuka modal atau drawer.

---

## 7. Skala Radius Bertingkat (Harmonic Radii)
- **6px / 8px (`rounded-lg`)**: Kbd tags, badge model, icon buttons kecil.
- **10px / 12px (`rounded-xl`)**: Action buttons, input form, sidebar history items, preview chip dokumen.
- **16px (`rounded-2xl`)**: Suggestion prompt cards, header floating containers, popover menus, dialog modal.
- **20px / 24px (`rounded-2xl` & `rounded-3xl`)**: Composer input dock, user chat bubble.

---

## 8. Multi-Tier Thinking Effort Selector
Tersedia 5 level reasoning model RuangTI Neural Engine:
1. **Non-Thinking (Default)**: Respon cepat & instan tanpa penalaran bertahap (`gcli/grok-4.6`).
2. **Low Effort**: Penalaran ringan untuk kueri & kalkulasi ringkas (`gcli/grok-4.6-low`).
3. **Medium Effort**: Penalaran berimbang untuk analisis & metode terstruktur (`gcli/grok-4.6-medium`).
4. **High Effort**: Penalaran mendalam untuk optimasi sistem & simulasi kompleks (`gcli/grok-4.6-high`).
5. **Extra High Effort**: Eksplorasi komputasi mendalam, riset operasi & pembuktian matematis (`gcli/grok-4.6-xhigh`).

---

## 9. Standar Footer & Penamaan Navigasi
- Tombol aksi navigasi utama konsisten menggunakan label **"Buka Workspace"** (Desktop) dan **"Workspace"** (Mobile).
- Footer aplikasi di seluruh halaman publik disederhanakan menjadi baris hak cipta tunggal yang ultra-bersih:
```
© {new Date().getFullYear()} RuangTI. All rights reserved. Dikembangkan oleh rapoi.
```
*(Atribusi murni kepada pengembang "rapoi", tanpa tanda @ dan tanpa huruf i ganda).*

---

## 10. Arsitektur Media & Dokumen Ringan (Zero-DB-Bloat Storage)
- **Kompresi Gambar**: Canvas WebP client-side (maksimal 1280px, kualitas 0.82 $\to \sim 85\text{KB}$).
- **Dokumen Multi-Format**: `.docx`, `.xlsx`, `.csv`, `.pdf`, file kodingan (`.py`, `.ts`, `.json`, `.sql`), dan arsip `.zip`.
- **Storage Terpisah**: File fisik disimpan di folder disk `uploads/` backend; SQLite hanya menyimpan metadata JSON ~60 byte per file.
- **Auto-Pruning 14 Hari**: Background worker otomatis menghapus berkas yang telah melewati 14 hari.
