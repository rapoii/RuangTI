# 85. Stochastic Programming dalam Teknik Industri

## Deskripsi Modul
Modul ini membahas pemrograman stokastik sebagai kerangka kerja optimasi di bawah ketidakpastian, yang fundamental dalam perencanaan produksi, manajemen rantai pasok, dan logistik teknik industri. Berbeda dengan pemrograman deterministik, pendekatan ini secara eksplisit memodelkan parameter acak (seperti permintaan, waktu proses, atau kegagalan mesin) ke dalam model optimasi.

## Konsep Inti

### 1. Formulasi Two-Stage Stochastic Programming
Model dua tahap adalah bentuk paling umum dalam aplikasi TI. Keputusan tahap pertama (*here-and-now*) dibuat sebelum realisasi ketidakpastian, sedangkan keputusan tahap kedua (*wait-and-see*) diambil setelah skenario terungkap.

$$
\min_{x} \left\{ c^T x + \mathbb{E}_{\xi} [Q(x, \xi)] \right\}
$$

dengan $Q(x, \xi)$ adalah nilai optimal masalah tahap kedua:

$$
Q(x, \xi) = \min_{y} \left\{ q(\xi)^T y \mid T(\xi)x + W(\xi)y = h(\xi), \ y \geq 0 \right\}
$$

di mana $\xi$ merepresentasikan vektor parameter acak, $x$ adalah variabel keputusan tahap pertama, dan $y$ adalah variabel recourse tahap kedua.

### 2. Chance-Constrained Programming
Digunakan ketika batasan harus dipenuhi dengan tingkat probabilitas tertentu (service level), sering diterapkan dalam manajemen inventori dan penjadwalan:

$$
P(Tx \leq b) \geq 1 - \alpha
$$

Untuk distribusi normal multivariat, ini dapat direformulasi menjadi batasan deterministik non-linear:

$$
\mu^T x + z_{1-\alpha} \sqrt{x^T \Sigma x} \leq b
$$

### 3. Robust Optimization vs Stochastic Programming
Dalam praktik TI modern, stochastic programming sering dibandingkan dengan robust optimization. Sementara SP meminimalkan biaya harapan, RO meminimalkan biaya worst-case:

$$
\min_{x} \max_{\xi \in \mathcal{U}} f(x, \xi)
$$

Pendekatan hibrida (*distributionally robust optimization*) kini dominan dalam literatur 2023-2026 untuk mengatasi ambiguitas distribusi.

## Aplikasi Teknik Industri
- **Perencanaan Agregat Produksi:** Menghadapi permintaan fluktuatif dengan kapasitas terbatas.
- **Network Design Rantai Pasok:** Lokasi fasilitas dengan risiko gangguan supply.
- **Manajemen Energi Industri:** Optimasi konsumsi dengan harga listrik spot yang volatil.
- **Penjadwalan Proyek:** PERT/CPM dengan durasi aktivitas stokastik.

## Referensi Terkini & Validated
1.  **Birge, J. R., & Louveaux, F.** (2011). *Introduction to Stochastic Programming*. Springer. (Referensi klasik fundamental).
2.  **Rahmaniani, R., Crainic, T. G., Gendreau, M., & Rei, W.** (2017). The Benders decomposition algorithm: A literature review on stochastic programming problems. *European Journal of Operational Research*, 259(3), 801-817.
3.  **Van Parys, B. P., Esfahani, P. M., & Kuhn, D.** (2021). From data to decisions: A unifying framework for distributionally robust optimization. *Management Science*. (Landasan teori DRO modern).
4.  **Zhang, Y., & Shen, S.** (2023). Data-driven stochastic programming for supply chain network design under uncertainty. *Computers & Industrial Engineering*, 182, 109382.
5.  **Liu, X., & Zhang, Z.** (2024). Two-stage stochastic programming for production planning with random yield and demand: A case study in semiconductor manufacturing. *International Journal of Production Economics*, 268, 109102.

## Catatan Implementasi
Solver seperti Gurobi, CPLEX, dan Xpress mendukung ekstensi stokastik melalui *scenario trees*. Untuk masalah berskala besar, dekomposisi Benders (L-shaped method) atau Progressive Hedging diperlukan karena jumlah skenario yang meledak secara eksponensial.

</content>