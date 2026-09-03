# 1985 — Model Optimisasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan penentuan ukuran lot (*lot sizing*) dan penjadwalan produksi (*scheduling*) merupakan tulang punggung perencanaan operasional pada industri manufaktur, perakitan, dan rantai pasok multi-eselon. Dalam praktik industri nyata, keputusan *lot sizing* menentukan kuantitas produksi optimal pada setiap periode untuk meminimumkan total biaya yang terdiri atas biaya setup, biaya produksi, dan biaya inventory holding, sementara keputusan *scheduling* menentukan urutan serta waktu eksekusi pada lini produksi atau sumber daya mesin yang memiliki *sequence-dependent setup times*. Pada industri proses seperti kimia, farmasi, dan baja, kombinasi kedua keputusan ini menentukan tingkat *service level*, *work-in-process* (WIP), dan akhirnya profitabilitas perusahaan. Lead Researchers (2025) menekankan bahwa pada lingkungan produksi modern dengan permintaan yang semakin fluktuatif, model deterministik murni seperti Wagner-Whitin sudah tidak lagi memadai karena mengasumsikan permintaan diketahui secara pasti (*perfect foresight*), yang bertentangan dengan realitas permintaan pasar.

Urgensi ekonomi dari topik ini sangat tinggi. Forel dan Grunow (2023) menyatakan secara eksplisit bahwa "*academic approaches considering demand uncertainty in lot sizing are seldom used in practice*" — sebuah kesenjangan (*practice-theory gap*) yang merugikan karena pelaku industri umumnya mengimplementasikan model deterministik yang kemudian dimitigasi secara heuristik melalui kerangka *rolling-horizon planning* dengan pembaruan ramalan (*forecast updates*) yang sering. Hasil riset mereka menunjukkan bahwa integrasi model evolusi ramalan stokastik ke dalam perencanaan lot sizing mampu mengurangi biaya aktual secara signifikan karena fleksibilitas *replanning* dapat ditangkap secara eksplisit. Dalam konteks ini, model hibrida yang memadukan pendekatan optimisasi stokastik (misalnya two-stage stochastic programming) dengan mekanisme *rolling-horizon* dan sub-problem penjadwalan menjadi sangat relevan secara operasional.

Permasalahan lot-sizing dan scheduling problem (LSSP) secara komputasional termasuk kategori NP-hard, sehingga pendekatan eksak murni sulit diterapkan pada instances berskala industri dengan horizon perencanaan panjang. Oleh karena itu, hibridisasi antara formulasi Mixed-Integer Linear Programming (MILP) dengan algoritma metaheuristik seperti Genetic Algorithm (GA), Simulated Annealing (SA), atau Adaptive Large Neighborhood Search (ALNS) menjadi strategi yang banyak dieksplorasi. Lead Researchers (2025) memposisikan model mereka sebagai jembatan antara rigor matematis stokastik dan komputabilitas praktis, sehingga mampu diadopsi oleh *decision support system* di lantai produksi. Perhatian utama industri modern seperti Toyota Production System, Procter & Gamble, dan Nestlé terhadap integrasi *advanced planning systems* (APS) menunjukkan bahwa pendekatan hibrida semacam ini memiliki nilai strategis jangka panjang.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Deterministik (Wagner-Whitin)

Formulasi dasar yang menjadi titik berangkat adalah model Wagner-Whitin untuk $T$ periode perencanaan:

$$\min_{Q_t, y_t} \sum_{t=1}^{T} \left( s_t y_t + p_t Q_t + h_t I_t \right)$$

dengan kendala:

$$I_t = I_{t-1} + Q_t - d_t, \quad \forall t \in \{1,\ldots,T\}$$

$$Q_t \leq M \cdot y_t, \quad \forall t$$

$$y_t \in \{0,1\}, \quad Q_t, I_t \geq 0$$

di mana $s_t$ adalah biaya setup, $p_t$ biaya produksi variabel per unit, $h_t$ biaya holding per unit per periode, $d_t$ permintaan deterministik, $M$ adalah bilangan besar (*big-M*), $y_t$ variabel biner keputusan setup, dan $I_t$ level inventory akhir periode.

### 2.2 Formulasi Stokastik Dua-Tahap dengan *Production Recourse*

Memperluas model deterministik ke ranah stokastik dengan permintaan $\tilde{d}_t$ yang acak, formulasi two-stage stochastic programming adalah:

$$\min_{y_t} \; c^T y + \mathbb{E}_{\xi}\left[ Q(y, \xi) \right]$$

di mana $Q(y, \xi)$ adalah fungsi recourse yang meminimumkan biaya operasional aktual setelah realisasi permintaan $\xi$ diobservasi. Fungsi recourse dirumuskan sebagai:

$$Q(y, \xi) = \min_{Q_t, I_t^+, I_t^-} \sum_{t=1}^{T} \left( p_t Q_t + h_t I_t^+ + b_t I_t^- + \rho_t R_t \right)$$

dengan kendala:

$$I_t = I_{t-1} + Q_t - \tilde{d}_t(\xi), \quad \forall t$$

$$I_t = I_t^+ - I_t^-, \quad \forall t$$

$$0 \leq Q_t \leq M \cdot y_t, \quad \forall t$$

di mana $b_t$ adalah biaya *backorder* per unit, $\rho_t$ biaya *production recourse* (penalti karena perubahan produksi mendadak), dan $R_t$ adalah variabel recourse kuantitas produksi tambahan.

### 2.3 Model Martingale untuk Evolusi Ramalan (MMFE)

Forel dan Grunow (2023) menggunakan *Martingale Model of Forecast Evolution* untuk menangkap dinamika pembaruan ramalan dalam *rolling-horizon planning*:

$$\tilde{d}_{t+1|t} = \tilde{d}_{t|t} + \varepsilon_{t+1}$$

dengan $\varepsilon_{t+1} \sim \mathcal{N}(0, \sigma_\varepsilon^2)$ bersifat independen dan *zero-mean*. Proses ini menjamin bahwa ramalan terbaik di periode depan bersifat *unbiased* terhadap ramalan saat ini — sebuah properti martingale. *Forecast update* terjadi setiap periode $t$ ketika informasi baru tiba, sehingga horizon perencanaan efektif bergeser dari $[t, t+H]$ ke $[t+1, t+H+1]$.

### 2.4 Komponen Penjadwalan dengan *Sequence-Dependent Setup*

Untuk integrasi penjadwalan, digunakan formulasi *time-indexed*:

$$\min \sum_{i=1}^{N} \sum_{j=1}^{N} \sum_{k=1}^{K} s_{ij} x_{ijk}$$

dengan kendala alur satu arah (*disjunctive sequencing*):

$$\sum_{j=1}^{N} x_{ijk} = 1, \quad \sum_{i=1}^{N} x_{ijk} = 1$$

$$x_{ijk} \in \{0,1\}$$

di mana $x_{ijk} = 1$ jika job $i$ ditempatkan sebelum job $j$ pada mesin $k$, dan $s_{ij}$ adalah *sequence-dependent setup time* antara job $i$ dan $j$.

### 2.5 Arsitektur Hibrida

Model hibrida yang diusulkan Lead Researchers (2025) menggabungkan tiga lapisan keputusan:

1. **Tactical layer** — MILP stokastik untuk keputusan lot sizing;
2. **Operational layer** — metaheuristik untuk penjadwalan detail;
3. **Feedback layer** — pembaruan ramalan setiap rolling horizon dengan produksi recourse.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model hibrida di lingkungan industri mengikuti SOP terstruktur sebagai berikut:

**Tahap 1 — Inisialisasi Data Historis.** Kumpulkan data permintaan historis minimal 36 periode, hitung parameter MMFE $\sigma_\varepsilon^2$ melalui *exponential smoothing* atau regresi terhadap *forecast errors*. Parameter ini menjadi input utama pada tahap generasi skenario.

**Tahap 2 — Generasi Skenario.** Gunakan *Monte Carlo sampling* untuk menghasilkan $N = 200$ skenario permintaan berdasarkan proses martingale:

$$\tilde{d}_{t}^{(n)} = d_{t|t}^{(0)} + \sum_{\tau=1}^{t} \varepsilon_{\tau}^{(n)}, \quad n = 1,\ldots,N$$

Implementasikan *Scenario Reduction* (misalnya algoritma *forward selection* oleh Heitsch & Römisch) untuk mengurangi $N$ menjadi $N' = 20$ skenario representatif dengan probabilitas $\pi_n$.

**Tahap 3 — Optimasi Lot Sizing Stokastik.** Selesaikan formulasi two-stage stochastic program menggunakan *Sample Average Approximation* (SAA) dengan solver CPLEX atau Gurobi. Validasi gap optim menggunakan *lower bound* yang diperoleh dari *integer L-shaped method*.

**Tahap 4 — Penjadwalan Detail.** Untuk rencana lot sizing yang dihasilkan, jalankan algoritma ALNS dengan operator *destroy* (random removal, worst removal) dan *repair* (