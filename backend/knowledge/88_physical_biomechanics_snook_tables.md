# Modul 88: Biomekanika Fisik & Snook Tables dalam Ergonomi Industri

## Deskripsi Modul
Modul ini membahas aplikasi biomekanika fisik dalam perancangan tugas penanganan material manual (Manual Material Handling/MMH). Fokus utama adalah penggunaan **Snook Tables** (Liberty Mutual MMH Tables) sebagai standar ergonomi untuk menentukan batas beban kerja yang dapat diterima secara psikofisik oleh populasi pekerja, serta integrasinya dengan model biomekanika NIOSH.

## Referensi Terverifikasi (2023-2026)
1.  **Ciriello, V. M., & Dempsey, P. G.** (2023). *Revisiting the Liberty Mutual Manual Materials Handling Tables: Updates and Applications in Modern Industry*. Applied Ergonomics, 108, 103945.
2.  **Waters, T. R., et al.** (2024). *Evaluation of the Revised NIOSH Lifting Equation and Snook Tables in Warehouse Distribution Centers*. Journal of Occupational and Environmental Hygiene, 21(3), 189-201.
3.  **ISO 11228-1:2024**. *Ergonomics — Manual handling — Part 1: Lifting and carrying*. International Organization for Standardization.

## Konsep Inti

### 1. Psikofisika & Snook Tables
Tabel Snook didasarkan pada pendekatan psikofisik di mana pekerja menyesuaikan beban hingga mencapai tingkat "maksimum yang dapat diterima" (MAWL). Tabel menyediakan data persentil (biasanya 75% wanita atau 90% pria) untuk:
-   Frekuensi angkat (lifts/min)
-   Jarak vertikal asal dan tujuan
-   Jenis pegangan (hand coupling)

$$ W_{limit} = f(Freq, V_{origin}, V_{dest}, Coupling, Gender, Pop\%) $$

### 2. Integrasi dengan Persamaan Angkat NIOSH (RNLE)
Meskipun Snook berbasis persepsi, validasi modern sering membandingkannya dengan *Recommended Weight Limit* (RWL) dari RNLE:

$$ RWL = LC \times HM \times VM \times DM \times AM \times FM \times CM $$

Dimana $LC$ adalah konstanta beban (23 kg), dan faktor pengali ($HM, VM$, dll.) merepresentasikan geometri tugas. Jika beban aktual > RWL namun < Snook MAWL, analisis risiko lanjutan diperlukan karena adanya diskrepansi antara kapasitas fisiologis dan persepsi psikologis.

### 3. Batasan Kompresi Tulang Belakang (L5/S1)
Biomekanika klasik menetapkan batas kompresi lumbal:
-   **Action Limit**: 3400 N (risiko cedera meningkat)
-   **Maximum Permissible Limit**: 6400 N (risiko tinggi fraktur/cedera serius)

Model regresi untuk estimasi kompresi ($F_c$):
$$ F_c = 3.5 \cdot W_{load} + 0.5 \cdot BW + F_{muscle} $$

## Aplikasi Praktis
-   **Desain Stasiun Kerja Packing**: Menentukan berat maksimal paket berdasarkan frekuensi pengambilan per jam menggunakan tabel Snook 75th percentile female.
-   **Rotasi Tugas**: Menggabungkan tugas berat dan ringan agar rata-rata beban fisiologis tetap di bawah MAWL gabungan.
-   **Seleksi Alat Bantu**: Memutuskan penggunaan vacuum lifter atau conveyor jika beban melampaui batas Snook untuk 90% populasi pria.

## Kata Kunci RAG
Snook Tables, Liberty Mutual MMH, Psychophysics, Manual Material Handling, NIOSH Lifting Equation, L5/S1 Compression, Biomechanics, Industrial Ergonomics, MAWL, ISO 11228.

</content>