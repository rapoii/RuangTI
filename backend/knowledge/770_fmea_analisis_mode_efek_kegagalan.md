# Modul 770: Analisis Mode dan Efek Kegagalan (FMEA) — Panduan Praktis Bahasa Indonesia

## Overview

Analisis Mode dan Efek Kegagalan (Failure Mode and Effects Analysis / FMEA) adalah metodologi sistematis untuk mengidentifikasi potensi kegagalan pada desain produk atau proses manufaktur, mengevaluasi dampaknya, dan menetapkan tindakan pencegahan sebelum kegagalan terjadi. FMEA bersifat proaktif (before-the-event), bukan reaktif. Standar referensi industri otomotif adalah AIAG-VDA FMEA Handbook yang memperkenalkan tabel Action Priority (AP) sebagai pengganti murni angka RPN.

## Langkah-Langkah Menyusun FMEA

1. **Bentuk tim lintas fungsi** — anggota dari produksi, kualitas, teknik, maintenance. FMEA tidak boleh dikerjakan satu orang.
2. **Tentukan lingkup dan jenis FMEA** — Design FMEA (DFMEA) untuk desain produk, Process FMEA (PFMEA) untuk proses manufaktur.
3. **Petakan fungsi** — setiap komponen/langkah proses ditulis fungsinya (fungsi = apa yang seharusnya dilakukan).
4. **Identifikasi mode kegagalan** — cara spesifik fungsi bisa gagal (contoh: baut kurang kencang, dimensi luar toleransi).
5. **Identifikasi efek kegagalan** — akibat bagi pelanggan berikutnya (operator berikutnya, end user, regulasi).
6. **Identifikasi penyebab kegagalan** — akar penyebab (metode 5-Why atau fishbone membantu).
7. **Catat kontrol saat ini** — prevention control (mencegah terjadinya) dan detection control (mendeteksi sebelum sampai pelanggan).
8. **Beri skor Severity (S), Occurrence (O), Detection (D)** — skala 1–10 sesuai tabel standar AIAG.
9. **Hitung Risk Priority Number** — RPN = S × O × D (rentang 1–1000).
10. **Prioritaskan tindakan** — fokus pada item dengan RPN tertinggi atau AP tinggi (High/Medium/Low).
11. **Rencanakan dan eksekusi tindakan perbaikan**, lalu **nilai ulang** S, O, D setelah tindakan diimplementasikan.
12. **Dokumentasikan dan review berkala** — FMEA adalah dokumen hidup (living document), diperbarui saat ada perubahan desain/proses.

## Skala Penilaian Ringkas

- **Severity (Keparahan)**: 1 = tidak ada dampak; 5–6 = fungsi terdegradasi, pelanggan kecewa; 9–10 = kegagalan aman (safety) atau tidak patuh regulasi.
- **Occurrence (Frekuensi)**: 1 = praktis tidak pernah; 5 = sesekali; 9–10 = hampir pasti terjadi.
- **Detection (Deteksi)**: 1 = hampir pasti terdeteksi oleh kontrol; 5 = deteksi sedang; 10 = tidak ada kontrol deteksi sama sekali.

## Contoh Perhitungan RPN

Mode kegagalan pengelasan bracket: efek = rangka melemah saat tabrakan; penyebab = arus las tidak stabil.
- Severity = 8 (terkait keselamatan struktural)
- Occurrence = 4 (terjadi beberapa kali per tahun)
- Detection = 6 (inspeksi visual saja, sulit mendeteksi penetrasi kurang)
- **RPN = 8 × 4 × 6 = 192** → masuk daftar prioritas; tindakan: tambah uji destruktif sampling (turunkan D menjadi 3) dan kalibrasi mesin las mingguan (turunkan O menjadi 2) → RPN baru = 8 × 2 × 3 = 48.

## Aplikasi dalam Teknik Industri

- PFMEA wajib dalam PPAP (Production Part Approval Process) pabrik tier-1 otomotif.
- Basis untuk menentukan titik pengendalian pada Control Plan dan rencana inspeksi SPC.
- Terintegrasi dengan FTA (Fault Tree Analysis) untuk analisis top-down vs bottom-up.
- Dalam lean six sigma DMAIC, FMEA dipakai pada fase Analyze/Improve untuk memprioritaskan mode kegagalan yang ditangani kaizen burst.
