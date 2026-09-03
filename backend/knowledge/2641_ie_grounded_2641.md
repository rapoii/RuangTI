# 2641 — Model Optimasi Stokastik Hybrid untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan penentuan ukuran lot (*lot sizing*) dan penjadwalan produksi (*scheduling*) merupakan salah satu tantangan paling fundamental dalam rekayasa sistem manufaktur dan rantai pasok modern. Dalam lanskap industri 4.0, di mana volatilitas permintaan pelanggan semakin meningkat akibat fragmentasi pasar, kustomisasi massal, dan disrupsi rantai pasok global, model deterministik konvensional seperti *Economic Order Quantity* (EOQ) atau *Wagner-Whitin* semakin kehilangan relevansi empirisnya. Lead Researchers (2025) dalam artikelnya yang berjudul *"A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem"* (DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)) menyoroti urgensi pengembangan pendekatan hybrid yang menggabungkan kekuatan optimasi stokastik dengan fleksibilitas penjadwalan adaptif untuk menangkap dualitas struktur biaya tetap (*fixed setup cost*) dan kompleksitas konstrain kapasitas mesin.

Konteks industri yang melatarbelakangi penelitian ini dapat ditelusuri dari tiga fenomena operasional utama. Pertama, pada industri proses (*process industry*) seperti kimia, farmasi, dan makanan-minuman, keputusan lot sizing berdampak langsung pada *inventory carrying cost* yang dalam praktik mencapai 20–35% dari nilai inventaris per tahun. Kedua, pada industri *discrete manufacturing* dengan lini perakitan multi-stage, interaksi antara lot sizing di tingkat *bill of materials* (BOM) dan penjadwalan di tingkat *shop floor* menciptakan *combinatorial complexity* yang tidak dapat diselesaikan secara terpisah. Ketiga, ketidakpastian permintaan (*demand uncertainty*) yang semakin nyata, terutama pasca-pandemi, menuntut model yang secara eksplisit memperhitungkan distribusi probabilistik permintaan, bukan sekadar skenario tunggal.

Forel dan Grunow (2023) dalam *Production and Operations Management* (DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)) memberikan justifikasi empiris yang kuat: *"Academic approaches considering demand uncertainty in lot sizing are seldom used in practice. Industry typically implements deterministic models and accounts for uncertainties by using a rolling-horizon planning framework with frequent forecast updates."* Pernyataan ini menunjukkan adanya *practice-academia gap* yang signifikan, di mana praktisi industri mengandalkan kerangka *rolling-horizon* dengan pembaruan forecast频繁 sebagai mekanisme *risk hedging* informal, sementara akademisi terus mengembangkan formulasi stokastik yang secara konseptual superior namun sulit diimplementasikan.

Gap inilah yang menjadi titik masuk bagi Lead Researchers (2025) untuk mengajukan model hybrid yang menjembatani rigor matematis stokastik optimization dengan kelayakan implementasi rolling-horizon. Urgensi ekonominya sangat nyata: pada perusahaan manufaktur tingkat menengah dengan revenue tahunan USD 50–500 juta, pengurangan 1% pada total *lot sizing and scheduling cost* dapat membebaskan USD 0,5–5 juta working capital per tahun. Lebih jauh, pada konteks rantai pasok global dengan *lead time* 30–90 hari, kesalahan perencanaan lot sebesar 5–10% dapat memicu *bullwhip effect* yang berdampak pada tier-2 dan tier-3 suppliers, dengan eskalasi variabilitas permintaan hingga 300% seperti ditunjukkan dalam studi klasik Chen et al.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Dasar Lot Sizing Deterministik

Model *lot sizing* deterministik klasik multi-period yang menjadi titik acuan adalah formulasi Wagner-Whitin, yang meminimalkan total biaya yang terdiri dari biaya setup $K_t$ dan biaya inventory holding $h_t$ sepanjang horizon perencanaan $T$. Formulasi matematisnya dapat dinyatakan sebagai:

$$\min_{Q_t, Y_t} \sum_{t=1}^{T} \left( K_t \cdot Y_t + h_t \cdot I_t + p_t \cdot Q_t \right)$$

dengan kendala:

$$I_{t-1} + Q_t - d_t = I_t, \quad \forall t = 1, 2, \ldots, T$$

$$Q_t \leq M \cdot Y_t, \quad \forall t$$

$$Y_t \in \{0,1\}, \quad I_t \geq 0$$

di mana $Q_t$ adalah kuantitas produksi pada periode $t$, $Y_t$ adalah variabel biner yang mengindikasikan apakah setup dilakukan, $I_t$ adalah inventory level akhir periode, $d_t$ adalah permintaan deterministik, $M$ adalah big-M, dan $p_t$ adalah biaya produksi variabel per unit. Formulasi ini menjamin *optimality* dalam horizon statis, namun tidak robust terhadap realisasi permintaan aktual yang menyimpang dari $d_t$.

### 2.2 Ekstensi Stokastik dengan Martingale Model of Forecast Evolution (MMFE)

Forel dan Grunow (2023) memperkenalkan pendekatan MMFE untuk mengintegrasikan pembaruan forecast dalam lot sizing stokastik. Berbeda dari model stokastik klasik yang mengasumsikan permintaan $\tilde{d}_t$ mengikuti distribusi eksogen tetap, MMFE memperlakukan forecast $F_{t,\tau}$ (forecast pada periode $\tau$ untuk permintaan di periode $t$) sebagai proses martingale:

$$\mathbb{E}[F_{t,\tau+1} | F_{t,\tau}] = F_{t,\tau}$$

dengan variance evolusi yang dimodelkan sebagai:

$$\text{Var}[F_{t,\tau+1} | F_{t,\tau}] = \sigma^2 \cdot (t - \tau)^{\alpha}$$

di mana parameter $\alpha \in (0, 2]$ mengontrol laju konvergensi forecast. Semakin kecil $\alpha$, semakin cepat forecast stabil (revisi kecil antar pembaruan), sedangkan $\alpha$ mendekati 2 mengindikasikan divergensi yang cepat. Parameter $\sigma^2$ merepresentasikan varians noise fundamental permintaan.

### 2.3 Formulasi Hybrid: Integrasi Stochastic Programming dengan Production Recourse

Lead Researchers (2025) mengajukan formulasi hybrid two-stage stochastic programming yang menggabungkan keputusan *here-and-now* (ukuran lot awal) dengan *recourse actions* (penjadwalan ulang). Struktur umumnya adalah:

$$\min_{Q_t, Y_t} \mathbb{E}_{\xi}\left[\sum_{t=1}^{T} K_t Y_t + \sum_{t=1}^{T} c_t(Q_t, \xi) \right]$$

di mana $\xi$ adalah skenario permintaan yang mengikuti distribusi MMFE, dan $c_t(Q_t, \xi)$ adalah fungsi biaya recourse:

$$c_t(Q_t, \xi) = p_t \cdot Q_t + h_t \cdot [I_t]^+ + b_t \cdot [I_t]^-$$

dengan $[x]^+ = \max(0, x)$ merepresentasikan inventory positif (holding cost) dan $[x]^- = -\min(0, x)$ merepresentasikan *backorder* (penalty cost $b_t$).

### 2.4 Fungsi Objektif dengan Rolling-Horizon Production Recourse

Untuk menangkap fleksibilitas replanning, Forel dan Grunow (2023) menambahkan production recourse yang memungkinkan revisi keputusan produksi dalam horizon pendek. Formulasi lengkapnya:

$$\min_{Q, Y} \sum_{t=1}^{T} K_t Y_t + \mathbb{E}\left[\sum_{t=1}^{T} \left( p_t Q_t^{adj}(\xi) + h_t I_t^+(\xi) + b_t I_t^-(\xi) \right) \right]$$

dengan kendala keseimbangan stok yang stochastic:

$$I_{t-1}(\xi) + Q_t + q_t^{rec}(\xi) - \tilde{d}_t(\xi) = I_t(\xi)$$

di mana $q_t^{rec}(\xi)$ adalah kuantitas recourse (produksi tambahan atau shift adjustment) yang memenuhi $-Q_t^{rec,min} \leq q_t^{rec}(\xi) \leq Q_t^{rec,max}$.

### 2.5 Kompleksitas Komputasional dan Lagrangian Relaxation

Karena masalah mixed-integer stochastic programming memiliki kompleksitas eksponensial, Lead Researchers (2025) mengusulkan pendekatan *Lagrangian relaxation* pada konstrain kapasitas untuk mendapatkan *lower bound* dan *heuristic upper bound*. Relaxasi Lagrangian-nya:

$$L(\lambda) = \sum_{t=1}^{T} (K_t Y_t + p_t Q_t) + \sum_{t=1}^{T} \lambda_t (C_t - \sum_{j \in J} x_{jt})$$

dengan $\lambda_t \geq 0$ sebagai *Lagrange multipliers* yang diperbarui melalui subgradient optimization.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model hybrid stokastik pada lingkungan industri mengikuti kerangka SOP berlapis yang diadaptasi dari praktik terbaik *advanced planning systems* (APS) dan studi Forel-Grunow (2023). Prosedur ini terdiri dari tujuh fase kritis:

**Fase 1 — Akuisisi Data Historis dan Kalibrasi Model.** Data permintaan historis minimal 24–36 periode dikumpulkan dari ERP (SAP, Oracle, atau Microsoft Dynamics). Volatilitas diestimasi menggunakan exponential smoothing dengan parameter $\alpha$ disesuaikan melalui *maximum likelihood estimation*. Kalibrasi parameter MMFE $(\sigma^2, \alpha)$ dilakukan dengan meminimalkan *in-sample squared forecast error*.

**Fase 2 — Generasi Skenario.** Dengan menggunakan metode Monte Carlo atau *moment matching*, dibangkitkan $N = 100-1000$ skenario permintaan yang merepresentasikan struktur evolusi forecast. Scenario reduction (misalnya dengan algoritma *forward selection* dari Dupacova) diterapkan untuk mengurangi computational burden menjadi $N' = 20-50$ skenario representatif.

**Fase 3 — Formulasi dan Solusi Model.** Model two-stage stochastic program diimplementasikan pada solver komersial (Gurobi, CPLEX) atau open-source (HiGHS) dengan *branch-and-cut* untuk variabel biner $Y_t$. Toleransi optimalitas ditetapkan pada *gap* 0,5–1,0% dengan *time limit* 300–1800 detik, disesuaikan dengan horizon perencanaan.

**Fase 4 — Validasi Out-of-Sample.** Sebelum deployment, model divalidasi menggunakan *rolling-horizon backtesting* selama 6–12 bulan. KPI yang dipantau meliputi: total cost deviation, service level (Type-1 dan Type-2), dan inventory turn-over.

**Fase 5 — Integrasi dengan Rolling-Horizon Planning.** Output model dijadikan *input* untuk sistem MRP II/APS dengan *planning horizon* $H = 12-52$ minggu dan *frozen horizon* $F = 4-8$ minggu. Setiap periode rolling (mingguan atau harian), model di-resolve dengan informasi forecast yang diperbarui, dan hanya keputusan dalam *frozen horizon* yang dieksekusi.

**Fase 6 — Monitoring Real-Time dan Exception Handling.** KPI dimonitor secara real-time melalui *dashboard* Power BI atau Tableau. Jika terjadi *demand surge* > 20% atau *supply disruption*, *exception handler* mengaktifkan *recourse action* (overtime, expedite shipment, atau order splitting).

**Fase 7 — Continuous Improvement Loop.** Setiap kuartal, parameter model dikalibrasi ulang dengan data terbaru, dan *scenario set* diregenerasi. *Lessons learned* didokumentasikan dalam *knowledge management system* organisasi.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Setup Kasus: Perusahaan Manufaktur Komponen Otomotif

Sebuah perusahaan Tier-1 automotive supplier memproduksi komponen *brake caliper* untuk dua varian produk (A dan B) dengan karakteristik sebagai berikut:

| Parameter | Produk A | Produk B | Keterangan |
|-----------|----------|----------|------------|
| Permintaan rata-rata per minggu ($\bar{d}_t$) | 1.200 unit | 800 unit | Mean demand |
| Standar deviasi ($\sigma_d$) | 240 unit | 160 unit | 20% CV |
| Biaya setup ($K_t$) | Rp 12.000.000 | Rp 10.000.000 | Per setup |
| Biaya holding ($h_t$) | Rp 800/unit/minggu | Rp 600/unit/minggu | Inventory cost |
| Biaya backorder ($b_t$) | Rp 2.400/unit/minggu | Rp 2.000/unit/minggu | Penalty |
| Biaya produksi variabel ($p_t$) | Rp 35.000/unit | Rp 42.000/unit | Variable cost |
| Lead time produksi | 1 minggu | 1 minggu | L = 1 |

Horizon perencanaan $T = 12$ minggu dengan parameter MMFE $\sigma^2 = 240^2 = 57.600$ dan $\alpha = 1,4$.

### 4.2 Perhitungan EOQ sebagai Baseline Deterministik

Untuk