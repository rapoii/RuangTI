# DESIGN.md — Sistem Desain RuangTI (Versi 3.0 - Pure Light Architecture)

Dokumen ini adalah **satu-satunya sumber kebenaran (single source of truth)** untuk seluruh keputusan visual, antarmuka, token warna, tipografi, dan interaksi web app **RuangTI** (Platform AI Konsultasi & Rekayasa Teknik Industri).

---

## 1. Filosofi & Esensi Desain
RuangTI dirancang sebagai **"Ruang Konsultasi & Berpikir Rekayasa Sistem yang Tenang"** (*Industrial Engineering Workspace & Knowledge Hub*).
- **Pendekatan Visual**: Pure Light Mode, Clean, Minimalist, Precision-Engineered, Human-Centric, Anti-AI Slop.
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
- **Accent Primary (Amber Gold)**: `#E09F3E` (*Industrial Amber Gold* — Aksen hangat utama)
- **Accent Subtle**: `rgba(224, 159, 62, 0.12)`
- **Accent Hover**: `#C98B32`
- **Emerald Primary (Share / Action)**: `#16A34A` (*Untirta Campus Emerald* — Tombol aksi publik & share)

---

## 3. Tipografi & Skala Hirarki
RuangTI menggunakan 3 font Google via `next/font/google`:
1. **Space Grotesk** (`font-display`): Digunakan untuk identitas merek RuangTI, badge hero, dan heading level 1.
2. **Manrope** (`font-sans`): Digunakan untuk seluruh UI body text, input form, nama menu, chat bubble, dan markdown paragraph.
3. **IBM Plex Mono** (`font-mono`): Digunakan untuk blok kode Python, formula matematis, kbd shortcut, dan metadata model.

---

## 4. Tipografi Formula Ilmiah & KaTeX (Scientific Typography)
- **Baseline Alignment**: KaTeX dibiarkan bekerja alami (`font-size: 1.02em - 1.05em`) tanpa forced `vertical-align` global agar rumus di dalam tanda kurung sejajar presisi.
- **Spacious Fractions**: Pecahan bertingkat (`\dfrac`) memiliki garis bagi tegas (`0.08em`) dengan breathing room atas-bawah `0.22em`.
- **Display Math Container**: Formula display terbungkus kartu putih dengan `margin: 1.25rem 0`, `padding: 0.85rem 1.25rem`, border halus, dan `overflow-x: auto` untuk perlindungan scroll horizontal di mobile.

---

## 5. Skala Radius Bertingkat (Harmonic Radii)
- **6px / 8px (`rounded-lg`)**: Kbd tags, badge model, icon buttons kecil.
- **10px / 12px (`rounded-xl`)**: Action buttons, input form, sidebar history items, preview chip dokumen.
- **16px (`rounded-2xl`)**: Suggestion prompt cards, header floating containers, popover menus, dialog modal.
- **20px / 24px (`rounded-2xl` & `rounded-3xl`)**: Composer input dock, user chat bubble.

---

## 6. Model & Thinking Effort Hierarchy
1. **Non-Thinking (Default)**: `gcli/grok-4.6(xhigh)` — Respon cepat & instan.
2. **Low Effort**: `gcli/grok-4.6-low(xhigh)` — Penalaran ringan untuk kueri sederhana.
3. **Medium Effort**: `gcli/grok-4.6-medium(xhigh)` — Penalaran berimbang untuk analisis terstruktur.
4. **High Effort**: `gcli/grok-4.6-high(xhigh)` — Penalaran mendalam untuk optimasi & simulasi kompleks.
5. **Extra High Effort**: `gcli/grok-4.6-xhigh(xhigh)` — Eksplorasi komputasi mendalam, riset operasi & pembuktian matematis.

---

## 7. Arsitektur Media & Dokumen Ringan (Zero-DB-Bloat Storage)
- **Kompresi Gambar**: Canvas WebP client-side (maksimal 1280px, kualitas 0.82 $\to \sim 85\text{KB}$).
- **Dokumen Multi-Format**: `.docx`, `.xlsx`, `.csv`, `.pdf`, file kodingan (`.py`, `.ts`, `.json`, `.sql`), dan arsip `.zip`.
- **Storage Terpisah**: File fisik disimpan di folder disk `uploads/` backend; SQLite hanya menyimpan metadata JSON ~60 byte per file.
- **Auto-Pruning 14 Hari**: Background worker otomatis menghapus berkas yang telah melewati 14 hari.
