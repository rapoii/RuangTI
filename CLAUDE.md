# CLAUDE.md — Panduan Cepat Perintah & Pengembangan Proyek RuangTI

Dokumen ini menyediakan instruksi singkat mengenai perintah CLI, struktur direktori, dan panduan kode untuk Claude Code / Cursor / CLI Autonomous Agents pada proyek **RuangTI** (Web Chat AI Spesialis Teknik Industri).

---

## 1. Perintah Pengembangan Inti

```bash
# Menjalankan development server (Port 3005, bind ke semua interface 0.0.0.0)
npm run dev

# Memeriksa static type error (TypeScript)
npx tsc --noEmit

# Membuat production build
npm run build

# Menjalankan linter
npm run lint
```

---

## 2. Struktur Modul & Konvensi
- **Komponen Utama**:
  - `components/layout/Header.tsx`: Header kaca atas dengan branding **RuangTI**, Model Selector (TI-Optima, TI-Lean, TI-Simulasi), Dark Mode toggle, dan Avatar Profil.
  - `components/sidebar/Sidebar.tsx`: Multi-thread drawer & desktop panel dengan search, pin/rename/delete conversation.
  - `components/chat/EmptyState.tsx`: 4 kartu prompt spesialisasi TI (PTLF Layout, Lean Six Sigma DMAIC, EOQ Inventory, dan Ergonomi).
  - `components/chat/TheGlow.tsx`: Lampu baca hangat / status analitik proses sistem TI.
  - `components/profile/ProfileModal.tsx`: Modal profil pengguna (identitas praktisi/mahasiswa TI, tier akses modul, dan status verifikasi).
  - `components/composer/Composer.tsx`: Input dock melayang responsif dengan auto-expanding textarea dan send/stop streaming button.

---

## 3. Checklist Sebelum Commit
1. Jalankan `npx tsc --noEmit` -> harus **0 error**.
2. Pastikan tidak ada hardcoded warna di luar token `DESIGN.md`.
3. Verifikasi responsivitas pada viewport Desktop (1280x800) dan Mobile (390x844).
