# ⚙️ RuangTI — Industrial Engineering AI Co-Pilot & Workspace

[![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4+-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![KaTeX](https://img.shields.io/badge/KaTeX-Math_Render-green?style=flat-square&logo=latex)](https://katex.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-amber?style=flat-square)](LICENSE)

> **Ruang Rekayasa & Berpikir Sistem yang Tenang.**  
> Platform Web Chat AI & Konsultasi Spesialis Teknik Industri (*Industrial Engineering Workspace*) dengan antarmuka presisi, minimalis, dan responsif lintas perangkat (*Multi-Device Support*).

---

## 🎯 Cakupan Domain Teknik Industri

RuangTI dirancang khusus untuk memecahkan dan menganalisis studi kasus rekayasa industri:

- 📊 **Riset Operasi & Optimasi Matematis**: Linear/Integer Programming, Teori Antrian, Transportasi & Simpleks.
- 🔄 **Lean Six Sigma & Manajemen Kualitas**: Metodologi DMAIC, FMEA, Peta Kendali SPC, Kaizen, 5S, dan Eliminasi 8 Pemborosan (*Muda*).
- 🏭 **Perancangan Tata Letak Fasilitas (PTLF)**: *From-To Chart*, *Activity Relationship Chart* (ARC), Formulasi Biaya Penanganan Material (*MHC*), CRAFT & CORELAP.
- 📐 **Ergonomi & Pengukuran Kerja**: Metode REBA/RULA, *NIOSH Lifting Equation*, Waktu Baku Jam Henti (*Time Study*), dan Antropometri.
- 📦 **Supply Chain Management & Inventory**: Model EOQ, *Safety Stock*, *Reorder Point* (ROP), dan Simulasi Biaya Pergudangan.
- 💻 **Simulasi Sistem Industri**: Pemodelan kejadian diskrit (*Discrete Event Simulation*).

---

## ✨ Fitur Unggulan

1. **Precision Math & Formula Rendering**: Formula matematika industri kompleks dirender tajam menggunakan KaTeX LaTeX ($\sum$, matriks, formula akar EOQ).
2. **Ultra Clean Floating Composer**: Kotak input melayang (*fixed bottom overlay*) dengan backdrop blur mulus, bebas dari border pemisah yang kaku.
3. **Multi-Thread Workspace**: Manajemen percakapan multi-topik dengan penyimpanan lokal (*LocalStorage*) tanpa perlu database eksternal.
4. **Multi-Device Responsive**: Tampilan dioptimalkan secara presisi untuk Desktop (1280x800) maupun Smartphone (390x844).
5. **Specialized Model Profiles**: Pilihan mode AI khusus seperti `TI-Optima Pro`, `TI-Lean Speed`, dan `TI-Simulate Lab`.

---

## 🚀 Memulai (Quick Start)

### 1. Kloning Repositori
```bash
git clone https://github.com/rapoii/RuangTI.git
cd RuangTI
```

### 2. Instal Dependensi
```bash
npm install
```

### 3. Jalankan Development Server
```bash
npm run dev
```

Buka `http://localhost:3000` atau akses via Wi-Fi LAN IP Anda pada port yang ditentukan di browser maupun HP.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14](https://nextjs.org/) (App Router, React 18, TypeScript)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) & Custom Design Tokens (`globals.css`)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Markdown & Math**: `react-markdown`, `remark-math`, `rehype-katex`, `react-syntax-highlighter`

---

## 📄 Lisensi

Didistribusikan di bawah Lisensi MIT. Lihat file [`LICENSE`](LICENSE) untuk informasi lebih lanjut.

---

<p align="center">
  Dibuat dengan dedikasi untuk kemajuan Rekayasa Sistem & Teknik Industri Indonesia 🇮🇩<br>
  <b><a href="https://github.com/rapoii">Rapoi</a></b>
</p>
