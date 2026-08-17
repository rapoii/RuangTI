# DESIGN.md — Sistem Desain RuangTI (Versi 2.0 - Standar Terverifikasi)

Dokumen ini adalah **satu-satunya sumber kebenaran (single source of truth)** untuk seluruh keputusan visual, antarmuka, token warna, tipografi, dan interaksi web app **RuangTI** (Platform AI Konsultasi & Rekayasa Teknik Industri).

---

## 1. Filosofi & Esensi Desain
RuangTI dirancang sebagai **"Ruang Konsultasi & Berpikir Rekayasa Sistem yang Tenang"** (*Industrial Engineering Workspace & Knowledge Hub*).
- **Pendekatan Visual**: Clean, Minimalist, Precision-Engineered, Human-Centric, Anti-AI Slop.
- **Karakter Antarmuka**: Tenang seperti ruang studio laboratorium teknik, tajam dan terstruktur, fokus pada konten matematis, formula optimasi, grafik alir, dan logika sistem tanpa distraksi visual.

---

## 2. Palet Token Warna (Semantic Color Tokens)

### A. Tema Terang (Light Mode)
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
- **Accent Primary**: `#E09F3E` (*Industrial Amber Gold* — Aksen hangat tunggal)
- **Accent Subtle**: `rgba(224, 159, 62, 0.12)`
- **Accent Hover**: `#C98B32`

### B. Tema Gelap (Dark Mode — Default)
- **Canvas (Background Utama)**: `#0F1115` (Deep slate night, bukan pitch black `#000000`)
- **Canvas Subtle (Sidebar / Panel)**: `#14171D`
- **Surface (Card / Bubble / Dialog)**: `#181B22` (Elevated dark surface)
- **Surface Hover**: `#20242D`
- **Surface Active**: `#272C37`
- **Border**: `#282D37`
- **Border Strong**: `#383F4D`
- **Text Primary**: `#F0F2F5` (Off-white berbobot)
- **Text Secondary**: `#9AA0AD`
- **Text Tertiary**: `#646B79`
- **Accent Primary**: `#F2A93B` (*Warm Industrial Gold*)
- **Accent Subtle**: `rgba(242, 169, 59, 0.15)`
- **Accent Hover**: `#FFAE42`

---

## 3. Tipografi & Skala Hirarki
RuangTI menggunakan 3 font Google via `next/font/google`:
1. **Space Grotesk** (`font-display`): Digunakan untuk identitas merek RuangTI, badge hero, dan heading level 1.
2. **Manrope** (`font-sans`): Digunakan untuk seluruh UI body text, input form, nama menu, chat bubble, dan markdown paragraph.
3. **IBM Plex Mono** (`font-mono`): Digunakan untuk blok kode Python, formula matematis, kbd shortcut, dan tag model.

---

## 4. Skala Radius Bertingkat (Harmonic Radii)
- **6px / 8px (`rounded-lg`)**: Kbd tags, badge model, icon wrappers kecil.
- **10px / 12px (`rounded-xl`)**: Action buttons, input form, sidebar history items, dropdown popover.
- **16px (`rounded-2xl`)**: Suggestion prompt cards, header floating containers, dialog modal.
- **20px / 24px (`rounded-2xl` & `rounded-3xl`)**: Composer input dock, user chat bubble.

---

## 5. Model Kecerdasan Buatan (Spesialisasi TI)
1. **TI-Optima Pro (`ti-optima`)**: Spesialis Riset Operasi, Program Linier, Dynamic Programming, dan Optimasi SCM.
2. **TI-Lean Six Sigma (`ti-lean`)**: Metodologi DMAIC, Diagram Pareto/Fishbone, SPC, Kaizen, 5S, dan Quality Control.
3. **TI-Simulasi & Ergonomi (`ti-sim`)**: Pengukuran Waktu Baku (Stopwatch Time Study), RULA/REBA, Antropometri, dan Simulasi Pabrik.
