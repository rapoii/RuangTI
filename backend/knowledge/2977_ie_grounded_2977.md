# 2977 — Model Optimasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Penentuan ukuran lot (lot sizing) dan penjadwalan produksi (scheduling) merupakan dua permasalahan fundamental dalam manajemen operasi yang saling terkait erat dalam rantai pasok manufaktur modern. Lead Researchers (2025) dalam *Cuestiones de fisioterapia* menyoroti bahwa pada industri dengan permintaan yang sangat fluktuatif—seperti industri FMCG, komponen otomotif, dan elektronika konsumen—pengabaian aspek ketidakpastian dapat menimbulkan biaya persediaan yang signifikan, stockout yang merugikan pelanggan, serta utilisasi kapasitas yang suboptimal. Secara historis, pendekatan deterministik seperti model Wagner-Whitin (1958) dan Silver-Meal menjadi tulang punggung perencanaan produksi, namun asumsi permintaan pasti ($d_t$ diketahui penuh pada awal horizon) terbukti tidak realistis di era VUCA (Volatility, Uncertainty, Complexity, Ambiguity) saat ini.

Urgensi operasional dari paper Lead Researchers (2025) terletak pada kebutuhan untuk mengintegrasikan dua fungsi keputusan yang biasanya diperlakukan secara terpisah: penentuan kuantitas produksi (lot size) dan alokasi pada mesin/jalur produksi (scheduling). Dalam praktik lapangan yang dirangkum oleh Forel & Grunow (2023) di *Production and Operations Management*, industri jarang mengadopsi pendekatan akademik yang sepenuhnya stokastik; sebaliknya, mereka menggunakan *rolling-horizon planning* (RHP) dengan pembaruan prakiraan mingguan/bulanan sebagai mekanisme heuristik menghadapi ketidakpastian. Jembatan antara rigor akademis dan pragmatisme industri inilah yang menjadi kontribusi inti dari formulasi hibrida yang diusulkan.

Konteks ekonomi makro juga turut memperkuat urgensi topik ini. Fluktuasi harga bahan baku, gangguan rantai pasok global pascapandemi COVID-19, dan permintaan musiman yang makin sulit diprediksi menuntut perusahaan memiliki kerangka keputusan yang tidak hanya optimal secara ex-ante tetapi juga *robust* terhadap revisi informasi. Integrasi antara Model Martingale of Forecast Evolution (MMFE) yang diperkenalkan oleh Forel & Grunow (2023) dengan formulasi lot-sizing-and-scheduling hibrida (Lead Researchers, 2025) menjanjikan reduksi biaya total 8-15% dibanding pendekatan konvensional, sebagaimana ditunjukkan oleh simulasi pada data sintetis dan data industri nyata pada paper kedua.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Notasi Dasar

Misalkan horizon perencanaan diskrit $T = \{1, 2, \ldots, |T|\}$ dengan parameter:
- $d_t$: permintaan deterministik periode $t$ (baseline)
- $\tilde{d}_t(\tau)$: permintaan acak periode $t$ yang diobservasi pada waktu $\tau \leq t$
- $p_t$: biaya produksi per unit pada periode $t$
- $h_t$: biaya penyimpanan per unit per periode
- $s_t$: biaya setup (fixed cost) pada periode $t$
- $P_t$: kapasitas produksi maksimum periode $t$
- $I_t$: tingkat inventori akhir periode $t$
- $x_t$: kuantitas produksi pada periode $t$
- $y_t \in \{0,1\}$: variabel biner setup
- $z_{jt}$: variabel penjadwalan (assignment) produk $j$ ke slot waktu $t$

### 2.2 Formulasi Deterministik (Baseline Wagner-Whitin)

Model dasar penentuan ukuran lot multi-periode dapat diformulasikan sebagai program linear integer campuran (MILP):

$$\min \sum_{t=1}^{T} \left( p_t x_t + s_t y_t + h_t I_t \right)$$

dengan kendala:

$$I_t = I_{t-1} + x_t - d_t, \quad \forall t \in T$$

$$x_t \leq P_t \, y_t, \quad \forall t \in T$$

$$I_0 = 0, \; I_t \geq 0, \; y_t \in \{0,1\}, \; x_t \geq 0$$

### 2.3 Formulasi Stokastik dengan MMFE (Forel & Grunow, 2023)

Forel & Grunow (2023) mengusulkan model MMFE di mana permintaan acak berevolusi sesuai:

$$\tilde{d}_t(\tau) = \tilde{d}_{t-1}(\tau-1) + \tilde{\varepsilon}_t(\tau), \quad \forall t, \; \tau \leq t$$

dengan $\tilde{\varepsilon}_t(\tau)$ adalah *martingale difference sequence* yang merepresentasikan inovasi informasi pada waktu $\tau$. Pada periode $\tau = 0$ (awal horizon), hanya tersedia prakiraan awal $\tilde{d}_t(0)$. Begitu waktu berjalan hingga $\tau$, permintaan aktual periode-$t$ direvisi menggunakan information set $\mathcal{F}_\tau$.

Fungsi tujuan yang diminimisasi adalah ekspektasi biaya aktual:

$$\min \; \mathbb{E}\left[ \sum_{t=1}^{T} \left( p_t x_t(\tau) + s_t y_t(\tau) + h_t I_t(\tau) + q_t B_t(\tau) \right) \right]$$

dengan kendala recourse produksi:

$$x_t(\tau) = x_t^* + \Delta x_t(\tau)$$

dengan $\Delta x_t(\tau) \geq -x_t^*$ (recourse ke bawah) dan $\Delta x_t(\tau) \leq P_t - x_t^*$ (recourse ke atas). $B_t(\tau)$ adalah variabel backorder dengan biaya $q_t$.

### 2.4 Formulasi Hibrida Lot Sizing–Scheduling (Lead Researchers, 2025)

Lead Researchers (2025) memperluas formulasi stokastik dengan mengintegrasikan keputusan penjadwalan simultan. Formulasi hibridanya menggabungkan indeks produk $j \in J$:

$$\min \; \mathbb{E}\left[ \sum_{t=1}^{T} \sum_{j=1}^{J} \left( p_{jt} x_{jt} + s_{jt} y_{jt} + h_{jt} I_{jt} + c_{jt} \sum_{m \in M} z_{jmt} \right) \right]$$

dengan kendala:

$$\sum_{j \in J} z_{jmt} \leq C_m, \quad \forall m \in M, \; \forall t \in T \quad \text{(kapasitas mesin)}$$

$$\sum_{m \in M} z_{jmt} = x_{jt}, \quad \forall j, t \quad \text{(alokasi produksi)}$$

$$z_{jmt} \leq P_m y_{jt}, \quad \forall j, m, t \quad \text{(setup mesin)}$$

$$I_{jt} = I_{j,t-1} + \sum_{m} z_{jmt} - \tilde{d}_{jt}(\tau)$$

Solusi umumnya diselesaikan menggunakan dekomposisi Benders atau algoritma Progressive Hedging (PH) untuk menangani non-anticipativity constraints dalam skenario stokastik.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model hibrida stokastik di industri mengikuti Standard Operating Procedure (SOP) enam tahapan berikut:

**Tahap 1 — Akuisisi & Pembersihan Data Historis.** Kumpulkan data permintaan minimal 24-36 periode, identifikasi musiman menggunakan dekomposisi STL, dan bersihkan outlier dengan metode Tukey's fences.

**Tahap 2 — Estimasi Parameter MMFE.** Kalibrasi matriks kovarians inovasi $\Sigma_\varepsilon$ menggunakan data historis melalui Maximum Likelihood Estimation (MLE):

$$\hat{\Sigma}_\varepsilon = \frac{1}{N-1} \sum_{i=1}^{N} (\varepsilon^{(i)} - \bar{\varepsilon})(\varepsilon^{(i)} - \bar{\varepsilon