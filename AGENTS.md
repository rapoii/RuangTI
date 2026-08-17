# AGENTS.md — Petunjuk & Konvensi Autonomous AI Agent untuk RuangTI

Dokumen ini ditujukan untuk agen AI (seperti Hermes, Claude Code, Cursor, Codex, dll.) yang bekerja di dalam codebase **RuangTI**.

---

## 1. Ikhtisar Proyek
- **Nama Aplikasi**: RuangTI
- **Tujuan**: Platform Web Chat AI & Konsultasi Spesialis Teknik Industri (Industrial Engineering Workspace) bertema *"Ruang Rekayasa & Berpikir Sistem yang Tenang"* (Clean, Minimalist, Precision-Engineered, Multi-Device Responsive).
- **Cakupan Domain Teknik Industri**:
  - Riset Operasi & Optimasi Matematis (Linier/Integer Programming, Antrian, Transportasi)
  - Lean Six Sigma & Manajemen Kualitas (Kaizen, 5S, DMAIC, SPC, FMEA, VSM)
  - Perancangan Tata Letak Fasilitas & Pemindahan Bahan (PTLF, From-To Chart, ARC, CRAFT)
  - Ergonomi & Perancangan Sistem Kerja (Time Study, Waktu Baku, Antropometri, REBA/RULA)
  - Supply Chain Management & Inventory (EOQ, ROP, Safety Stock, MRP)
  - Simulasi Sistem Industri (Arena, FlexSim, AnyLogic)
- **Stack Utama**:
  - Next.js 14+ (App Router, TypeScript)
  - Tailwind CSS + CSS Variables (`globals.css`)
  - Framer Motion (Transisi layout, modal dialog, empty state card staggers)
  - Lucide React (Ikonografi konsisten)
  - `react-markdown` + `remark-gfm` + `react-syntax-highlighter` (Prism vscDarkPlus)
  - LocalStorage Helper (Persistensi multi-thread tanpa backend)

---

## 2. Aturan & Standar Desain
1. **Patuhi `DESIGN.md` Secara Mutlak**:
   - Dilarang menambahkan warna hex / rgb ad-hoc di luar token yang ada di `app/globals.css`.
   - Gunakan selalu class semantic Tailwind seperti `bg-canvas`, `bg-surface`, `border-border`, `text-text-primary`, `text-text-secondary`, dan `text-accent`.
2. **Anti-AI Slop**:
   - Dilarang membuat gradien ungu/biru generik ala template SaaS AI murah.
   - Hindari centering berlebihan tanpa komposisi hierarki yang jelas.
   - Sediakan konten teknis riil dan terstruktur untuk mahasiswa & praktisi Teknik Industri.
3. **Standar Responsif Multi-Device**:
   - Seluruh perubahan UI **wajib** diuji pada resolusi desktop (`1280x800`) dan mobile (`390x844`).
   - Pastikan area scrollable chat/empty-state memiliki padding bawah yang cukup sehingga tidak pernah tertutup oleh composer dock di bagian bawah.
   - Touch targets untuk mobile harus selalu minimal `44x44px`.

---

## 3. Struktur Kode & Modul

```
projects/web/RuangTI/
├── app/
│   ├── layout.tsx         # Root font loaders, metadata RuangTI, theme provider
│   ├── page.tsx           # Main single-page application & state bridging
│   └── globals.css        # Design tokens (:root & .dark), scrollbar, keyframes
├── components/
│   ├── ui/                # Primitives: Button, DropdownMenu, Dialog
│   ├── layout/            # Header, Shell (responsive wrapper)
│   ├── sidebar/           # Sidebar, NewChatButton, ConversationSearch, ConversationList, ConversationItem
│   ├── chat/              # MessageList, MessageRow, MarkdownContent, CodeBlock, ActionBar, TheGlow, EmptyState
│   ├── profile/           # ProfileModal (Kelola profil mahasiswa/praktisi TI)
│   └── composer/          # Composer, SendStopButton
├── hooks/
│   ├── use-chat.ts        # Streaming lifecycle & active message manipulation
│   ├── use-conversations.ts # LocalStorage multi-thread persistence & CRUD (ruangti_*)
│   ├── use-theme.ts       # Light/Dark mode synchronizer (ruangti_theme_preference)
│   ├── use-profile.ts     # UserProfile hook & sync (ruangti_user_profile_v1)
│   └── use-keyboard-shortcuts.ts # Global hotkeys ('/', Esc, Ctrl+Shift+O)
├── lib/
│   ├── mock-ai.ts         # AsyncGenerator token streaming khusus domain Teknik Industri
│   ├── storage.ts         # LocalStorage read/write & schema migration
│   ├── types.ts           # Strict TypeScript interfaces
│   └── utils.ts           # Helper cn, time bucketing, title generator
├── DESIGN.md              # Single source of truth untuk UI/UX RuangTI
├── AGENTS.md              # Petunjuk agen AI (file ini)
└── CLAUDE.md              # Panduan eksekusi & perintah CLI
```

---

## 4. Alur Kerja Sebelum Selesai (Definition of Done)
1. **Type-Check**: Jalankan `npx tsc --noEmit` untuk memastikan tidak ada error TypeScript.
2. **Build Test**: Pastikan aplikasi dapat di-build dengan lancar (`npm run build`).
3. **Verifikasi Visual**: Bila ada perubahan visual, uji menggunakan browser Playwright MCP pada resolusi desktop dan mobile, lalu periksa hasil tangkapan layarnya.
