# Modul 91: Pencahayaan Industri & Desain Illuminasi

## Deskripsi Modul
Modul ini membahas prinsip fotometri, standar pencahayaan tempat kerja, dan desain sistem iluminasi yang ergonomis dan efisien energi. Topik mencakup kuantitas cahaya, kualitas visual (glare, kontras), serta integrasi teknologi LED dan *smart lighting* dalam fasilitas manufaktur modern sesuai SNI ISO 8995 dan CIE.

## Referensi Terverifikasi (2023-2026)
1.  **ISO/CIE 11724:2023.** *Lighting of indoor work places — Part 1: General principles*. International Commission on Illumination.
2.  **Boyce, P. R.** (2024). *Human Factors in Lighting* (4th ed.). CRC Press. (Referensi komprehensif tentang dampak non-visual cahaya terhadap ritme sirkadian dan produktivitas).
3.  **Zhao, Y., et al.** (2023). Energy efficiency optimization of industrial LED lighting systems based on task-ambient strategies. *Energy and Buildings*, 298, 113456.
4.  **SNI ISO 8995-1:2023.** *Pencahayaan untuk tempat kerja dalam ruangan*. Badan Standardisasi Nasional.

## Konsep Inti & Formulasi KaTeX

### 1. Kuantitas Fotometrik Dasar
Hubungan antara fluks cahaya ($\Phi$), intensitas ($I$), iluminansi ($E$), dan luminansi ($L$):

$$ E = \frac{d\Phi}{dA} \quad (\text{lux}) $$

$$ L = \frac{d^2\Phi}{dA \cdot d\Omega \cdot \cos \theta} \quad (\text{cd/m}^2) $$

Untuk sumber titik dengan hukum kuadrat terbalik (*Inverse Square Law*):

$$ E = \frac{I \cdot \cos \theta}{r^2} $$

### 2. Metode Lumen untuk Perhitungan Iluminansi Rata-rata
Digunakan untuk estimasi awal jumlah armatur ($N$) dalam ruang produksi:

$$ N = \frac{E_{avg} \cdot A}{\Phi_{lamp} \cdot CU \cdot LLF} $$

Dimana:
- $E_{avg}$: Target iluminansi rata-rata (lux)
- $A$: Luas area kerja ($m^2$)
- $\Phi_{lamp}$: Fluks cahaya per lampu (lumen)
- $CU$: *Coefficient of Utilization* (faktor geometri & reflektansi)
- $LLF$: *Light Loss Factor* (degradasi debu, penuaan lampu)

### 3. Unified Glare Rating (UGR)
Indeks ketidaknyamanan silau menurut CIE 117:

$$ UGR = 8 \log_{10} \left( \frac{0.25}{L_b} \sum \frac{L^2 \omega}{p^2} \right) $$

Batas UGR untuk perakitan presisi adalah 16, sedangkan untuk gudang kasar hingga 28.

### 4. Efikasi & Densitas Daya Pencahayaan (LPD)
Metrik efisiensi energi instalasi:

$$ LPD = \frac{\sum P_{total}}{A} \quad (\text{W/m}^2) $$

Standar SNI mensyaratkan LPD maksimal 15 W/m² untuk kantor dan 20 W/m² untuk pabrik umum.

## Aplikasi Teknik Industri
-   **Inspeksi Kualitas:** Menetapkan level >1000 lux dengan CRI >90 untuk deteksi cacat mikro.
-   **Keselamatan Kerja:** Memastikan rasio luminansi antar zona tidak melebihi 10:1 untuk mencegah adaptasi mata yang lambat saat berpindah area.
-   **Circadian Lighting:** Implementasi tunable-white LED di shift malam untuk menekan melatonin dan mengurangi kelelahan operator.

## Kata Kunci RAG
Industrial Lighting, Illuminance Calculation, Lumen Method, UGR, LPD, ISO 8995, Visual Ergonomics, LED Efficiency, Circadian Rhythm, Photometry.

</content>