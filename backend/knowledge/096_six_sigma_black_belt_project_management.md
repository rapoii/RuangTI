# Modul 96: Six Sigma Black Belt Project Management

## Deskripsi Modul
Modul ini membahas peran strategis **Black Belt (BB)** dalam memimpin proyek perbaikan Six Sigma yang kompleks: manajemen portofolio proyek, seleksi karakteristik kualitas kritis (*Critical To Quality*, CTQ), analisis statistik lanjutan, validasi finansial, dan kepemimpinan perubahan organisasi. Berbeda dengan Green Belt, BB menangani masalah multivariat lintas-fungsi (*cross-functional*) dengan dampak finansial signifikan, memimpin tim penuh waktu 4-6 bulan per proyek, dan menjadi mentor GB.

## Konsep Inti

### 1. Project Selection & Financial Validation
Proyek BB wajib memiliki *Cost of Poor Quality* (COPQ) yang terukur. Validasi finansial memisahkan *hard savings* (penghematan kas nyata) dari *soft savings* (avoidance cost). Kriteria investasi:

$$
ROI = \frac{\text{Annualized Benefits} - \text{Project Cost}}{\text{Project Cost}}\times 100\%
$$

Seleksi portofolio menimbang alignment strategi, kelayakan teknis (data tersedia), risiko implementasi, dan dampak pelanggan — diranking dengan matriks prioritas tertimbang:
$$S_p = \sum_k w_k\, s_{pk}, \qquad \sum_k w_k = 1$$

CTQ flow-down menerjemahkan Voice of Customer menjadi spesifikasi $Y=f(x)$ terukur (USL/LSL).

### 2. Metrik Sigma & Kapabilitas Proses
Defects per million opportunities dan konversi sigma level:

$$
DPMO = \frac{D}{U\times O}\times 10^6
$$

Kapabilitas jangka-pendek vs jangka-panjang (shift ±1,5σ): $C_p$ mengukur lebar proses terhadap toleransi; $C_{pk}$ memasukkan offset mean:

$$
C_{pk} = \min\left(\frac{USL-\mu}{3\sigma},\;\frac{\mu-LSL}{3\sigma}\right)
$$

Target industri umum: $C_{pk} \geq 1{,}33$ (≈ 4 sigma jangka pendek).

### 3. Advanced Statistical Methods for BB
Di luar kurikulum dasar, BB menguasai:
- **General Linear Models:** ANOVA multifaktor + interaksi; nested & split-plot designs.
- **Logistic Regression** untuk respon biner (pass/fail) dan ordinal.
- **Non-parametrik:** Kruskal-Wallis, Mood's Median saat normalitas gagal.
- **Multivariate:** PCA/Factor Analysis untuk reduksi dimensi variabel proses; MSA Gage R&R ANOVA sebelum pengambilan data.
- **DOE lanjutan:** RSM (CCD/Box-Behnken), mixture design — keterkaitan Modul 026.

### 4. Design for Six Sigma (DFSS)
Untuk produk/proses baru diterapkan DMADV/IDDOV. Toleransi perakitan divalidasi statistik dengan metode RSS (*Root Sum Square*):

$$
T_{assy} = \sqrt{\sum_{i=1}^{n} T_i^2}
$$

RSS lebih realistis daripada penjumlahan worst-case aritmetik, memberi ruang toleransi komponen lebih longgar tanpa mengorbankan kualitas — biaya manufaktur turun.

### 5. Change Management & Stakeholder Analysis
Keberhasilan bergantung adopsi solusi: model ADKAR atau Kotter 8-Step berjalan paralel DMAIC. Analisis stakeholder memetakan *Power/Interest Grid* untuk strategi komunikasi tiap pemangku kepentingan; resistance management didokumentasikan dalam rencana komunikasi.

## Metode Solusi / Tata Kelola Proyek

1. **DMAIC gate review:** setiap fase (Define-Measure-Analyze-Improve-Control) punya deliverable wajib dan sign-off sponsor/champion.
2. **Portofolio & scheduling:** BB mengelola 3-5 proyek paralel; tracking benefit realization pasca-closing (audit 6 bulan).
3. **Struktur organisasi:** Champion (sponsor bisnis), MBB (mentor metodologi), BB (pemimpin proyek), GB (tim part-time).
4. **Kontrol berkelanjutan:** control plan, SPC chart, dan standar kerja baru untuk mencegah regresi.

## Aplikasi di Industrial Engineering

- **Reduksi reject rate produksi massal** dengan DOE multivariat dan kontrol SPC berkelanjutan.
- **Perbaikan cycle time layanan/logistik** melalui analisis variansi lead time dan redesign proses.
- **DFSS pada NPD:** desain produk baru langsung di level 4,5-5 sigma.
- **Program transformasi operasional:** deployment Six Sigma skala korporat dengan benefit tracking finansial auditable.

## Referensi Terverifikasi

1. Pyzdek, T., & Keller, P. (2018). *The Six Sigma Handbook* (5th ed.). McGraw-Hill Education.
2. Montgomery, D. C. (2019). *Introduction to Statistical Quality Control* (8th ed.). Wiley.
3. Snee, R. D., & Hoerl, R. W. (2003). *Leading Six Sigma*. FT Prentice Hall.
4. Antony, J., et al. (2023). Critical success factors for Six Sigma Black Belt projects: A global empirical study. *International Journal of Quality & Reliability Management*, 40(5), 1123-1145.
5. Laureani, A., & Antony, J. (2023). Standards for Lean Six Sigma certification and training: An update. *Total Quality Management & Business Excellence*, 34(1-2), 1-18.
6. Sharma, V., & Garg, D. (2025). Impact of Six Sigma Black Belt leadership on operational performance in automotive sector. *Journal of Manufacturing Technology Management*, 36(2), 245-268.
7. Harry, M., & Schroeder, R. (2000). *Six Sigma: The Breakthrough Management Strategy*. Currency/Doubleday.
