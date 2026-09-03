# 2753 — Model Optimisasi Stokastik Hibrida untuk Masalah Lot Sizing dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan *lot sizing and scheduling* (LSS) merupakan salah satu tantangan klasik dalam riset operasional dan rekayasa sistem produksi yang telah menjadi pilar utama dalam pengambilan keputusan di lantai pabrik modern. Sejak formulasi *Wagner-Whitin* tahun 1958, komunitas riset Teknik Industri telah mengembangkan berbagai varian deterministik—seperti *Silver-Meal*, *Least Unit Cost*, dan *Part Period Balancing*—untuk menjawab pertanyaan fundamental: *berapa banyak yang harus diproduksi* dan *kapan* untuk memenuhi permintaan diskret dengan biaya total minimum. Namun, praktis industri menunjukkan kesenjangan yang substansial antara model akademik dan implementasi nyata.

Penelitian yang dipublikasikan oleh **Lead Researchers (2025)** dalam *Cuestiones de fisioterapia* dengan DOI [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018) menyoroti urgensi pengembangan model hibrida yang mampu mengintegrasikan ketidakpastian permintaan dengan kekangan kapasitas produksi. Mereka mengemukakan bahwa sekitar 73% perusahaan manufaktur di sektor barang konsumsi dan elektronik menghadapi variabilitas permintaan musiman dengan koefisien variasi (*coefficient of variation*, CV) melebihi 0,35, sementara hanya 18% yang secara aktif menggunakan pendekatan optimisasi stokastik dalam Sistem Perencanaan Sumber Daya (ERP). Kajian empiris multi-industri yang mereka rujuk menunjukkan bahwa penerapan pendekatan deterministik dengan *safety stock* arbitrer menghasilkan *over-stock* rata-rata 12-19% dari kebutuhan aktual.

Untuk menjembatani jurang tersebut, **Forel dan Grunow (2023)** dalam *Production and Operations Management* (DOI [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)) mengkritik pendekatan stokastik murni dan mengusulkan paradigma *rolling-horizon* yang dipadukan dengan *Martingale Model of Forecast Evolution* (MMFE). Argumen utama mereka sangat relevan bagi praktisi: meskipun optimisasi stokastik dua-tahap (*two-stage stochastic programming*) secara teoritis menghasilkan solusi optimal, kompleksitas komputasionalnya sering kali tidak sebanding dengan *value of the stochastic solution* (VSS) yang marginal—terutama ketika *forecast updates* mingguan sudah menjadi praktik standar di industri.

Konteks industri yang paling terdampak adalah perusahaan dengan karakteristik berikut: (i) permintaan *lumpy* atau tidak stasioner, (ii) *setup cost* dominan terhadap *holding cost* (rasio $>4:1$), (iii) rantai pasok multi-echelon, dan (iv) *lead time* produksi 3-14 hari. Studi kasus pada pabrik komponen otomotif di São Bernardo do Campo, Brasil, dan lini perakitan *white goods* di Cikarang, Indonesia, menunjukkan bahwa integrasi model hibrida mampu menurunkan total biaya perencanaan sebesar 8,3-14,6% dengan tetap mempertahankan *fill rate* ≥ 95,5%.

Urgensi ekonomis diperkuat oleh fenomena makroekonomi pasca-2020: disrupsi rantai pasok global, fragmentasi *near-shoring*, dan pergeseran preferensi konsumen pasca-pandemi menciptakan distribusi permintaan dengan *tail risk* yang lebih berat. Hal ini menjadikan asumsi distribusi normal dalam model Wagner-Whitin semakin tidak realistis dan menuntut kerangka stokastik yang lebih robust.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Dasar Lot Sizing Deterministik (Wagner-Whitin)

Model acuan yang menjadi titik berangkat seluruh diskusi adalah formulasi *Wagner-Whitin* (WW) untuk masalah *single-item capacitated lot sizing*. Untuk horizon perencanaan $T$ periode dengan permintaan deterministik $d_t$, variabel keputusan biner $y_t \in \{0,1\}$ mengindikasikan apakah *setup* dilakukan di periode $t$, dan variabel kontinu $x_t \geq 0$ menyatakan kuantitas produksi. Formulasi MILP adalah:

$$
\min \; Z = \sum_{t=1}^{T} \left( s_t \, y_t + h_t \, I_t + v_t \, x_t \right) \tag{1}
$$

dengan kendala persediaan *network flow*:

$$
I_t = I_{t-1} + x_t - d_t, \quad \forall t \in \{1,\ldots,T\} \tag{2}
$$

$$
x_t \leq M \, y_t, \quad \forall t \tag{3}
$$

$$
I_t \geq 0, \; x_t \geq 0, \; y_t \in \{0,1\} \tag{4}
$$

di mana $s_t$ adalah biaya *setup*, $h_t$ biaya *holding*, $v_t$ biaya variabel produksi per unit, $I_t$ tingkat persediaan akhir periode, dan $M$ konstanta big-M. Kompleksitas komputasi WW adalah $O(2^T)$, namun Solusi *forward* dan *backward* Dowling-Muckstadt menurunkan kompleksitasnya menjadi $O(T^2)$.

### 2.2 Formulasi Hibrida Stokastik Dua-Tahap (*Two-Stage Stochastic Lot Sizing*)

Paper **Lead Researchers (2025)** mengusulkan ekstensi stokastik dua-tahap dengan himpunan skenario $\Omega$ dan probabilitas $\pi_\omega$. Tahap pertama (*here-and-now*) memutuskan variabel $y_t$ dan $x_t^1$ sebelum realisasi permintaan; tahap kedua (*wait-and-see*, recourse) menyesuaikan produksi melalui variabel korektif $x_{t,\omega}^2$. Fungsi objektif menjadi:

$$
\min \; Z = \sum_{t=1}^{T} \left( s_t \, y_t + v_t \, x_t^1 \right) + \mathbb{E}_\mathbb{Q}\!\left[\sum_{t=1}^{T} \left( \hat{v}_{t,\omega} \, x_{t,\omega}^2 + h_t \, I_{t,\omega} \right)\right] \tag{5}
$$

$$
\text{s.t.} \quad I_{t,\omega} = I_{t-1,\omega} + x_t^1 + x_{t,\omega}^2 - d_\omega(t), \quad \forall t, \omega \tag{6}
$$

$$
x_{t,\omega}^2 \leq M \, y_{t,\omega}^{\text{rec}}, \quad x_{t,\omega}^2 \geq 0 \tag{7}
$$

di mana $\hat{v}_{t,\omega}$ adalah biaya produksi *recourse* (umumnya lebih tinggi dari $v_t$ karena *overtime* atau *expediting*). Persamaan (6) menjamin keseimbangan stok untuk setiap skenario $\omega$, sementara (7) mengizinkan *setup* tambahan pada tahap recourse.

### 2.3 Model Martingale untuk Evolusi Ramalan (MMFE)

Untuk mengkuantifikasi evolusi ramalan permintaan antar siklus *rolling-horizon*, **Forel dan Grunow (2023)** mengadopsi *Martingale Model of Forecast Evolution*:

$$
\tilde{d}_{t+k} = \tilde{d}_{t+k \mid t} + \sum_{j=1}^{k} \varepsilon_{t+j}, \quad \varepsilon_{t+j} \sim \mathcal{N}(0, \sigma_{t+j}^2) \tag{8}
$$

di mana $\tilde{d}_{t+k \mid t}$ adalah ramalan yang tersedia pada periode $t$ untuk periode $t+k$, dan $\varepsilon_{t+j}$ adalah *forecast error* yang inkremental dan independen. Kovarians antar periode diberikan oleh:

$$
\text{Cov}(\tilde{d}_{t+i}, \tilde{d}_{t+j}) = \sigma_i^2, \quad \text{untuk } i < j \tag{9}
$$

yang mencerminkan *common shock* terhadap ramalan. Ekspektasi matematis dari *realized demand* terhadap horizon bergulir adalah:

$$
\mathbb{E}[d_\omega(t)] = \mu_t, \quad \text{Var}[d_\omega(t)] = \sigma_t^2 \tag{10}
$$

dengan distribusi acuan yang lazim adalah *log-normal*, *negative binomial*, atau *compound Poisson* untuk pola permintaan intermiten.

### 2.4 Nilai Informasi Stokastik dan VSS

Untuk mengukur manfaat pendekatan stokastik, dua metrik standar digunakan:

$$
\text{EV} = \mathbb{E}_\mathbb{Q}\!\left[Z(\hat{x}^*(\omega))\right] - Z(\bar{x}^*) \tag{11}
$$

$$
\text{VSS} = \mathbb{E}_\mathbb{Q}\!\left[Z(\bar{x}^*)\right] - \mathbb{E}_\mathbb{Q}\!\left[Z(x^*(\omega))\right] = Z^* - \text{EEV} \tag{12}
$$

di mana $Z^*$ adalah solusi optimal *stochastic program*, EEV adalah nilai ekspektasi dari solusi deterministik yang dievaluasi secara stokastik (*expected result of using the expected value*), dan EV adalah *expected value of perfect information*. Rasio EVPI/(EVPI+VSS) sering digunakan sebagai *bound* kualitas solusi heuristik.

### 2.5 Algoritma *Sample Average Approximation* (SAA)

Untuk masalah berskala besar, **Lead Researchers (2025)** mengusulkan pendekatan SAA dengan sampel Monte Carlo $|\Omega|=N$:

$$
\min_{x \in X} \; \frac{1}{N} \sum_{\omega=1}^{N} f(x, \xi_\omega) \tag{13}
$$

dengan *gap statistic* estimator:

$$
\text{Gap}_{1-\alpha} = \hat{z}_N^* - z_{L,N}^* + \beta(\alpha) \sqrt{\hat{\sigma}^2/N} \tag{14}
$$

di mana $\beta(\alpha)$ adalah kuantil distribusi Normal baku pada tingkat kepercayaan $1-\alpha$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model hibrida di industri mengikuti kerangka SOP lima-tahap yang diadopsi dari praktik terbaik konsultan *supply chain* global dan distandardisasi dalam protokol APICS/ASCM SCOR level 3:

**Tahap 1 – Karakterisasi Permintaan (4-6 minggu):** Lakukan *demand sensing* menggunakan metode *Croston* untuk permintaan intermiten dan *Holt-Winters triple exponential smoothing* untuk permintaan dengan tren-musiman. Estimasi parameter distribusi menggunakan *Kolmogorov-Smirnov* dan *Anderson-Darling* goodness-of-fit. Identifikasi korelasi silang antar-SKU menggunakan *Granger causality*.

**Tahap 2 – Pembuatan Skenario (2-3 minggu):** Bangun himpunan skenario $\Omega$ melalui *moment-matching* atau *scenario reduction* (algoritma *forward/backward Heitsch-Wiesemann*). Target reduksi: 1000-5000 skenario awal menjadi 50-150 skenario representatif dengan toleransi stabilitas Kantorovich-Wasserstein $\epsilon \leq 0{,}05$.

**Tahap 3 – Formulasi dan Optimasi (3-5 minggu):** Implementasikan formulasi (5)-(7) dalam *solver* (Gurobi, CPLEX, atau HiGHS) dengan *warm-start* dari solusi deterministik. Batas waktu komputasi ditetapkan pada 600-1800 detik untuk horizon $T=52$ minggu.

**Tahap 4 – Validasi dengan Backtesting (2 minggu):** Uji solusi menggunakan *rolling-horizon backtest* dengan panjang jendela 4-8 periode. Bandingkan metrik: total biaya, *fill rate*, *inventory turns*, dan *backorder level*.

**Tahap 5 – Integrasi ERP dan Continuous Improvement:** Hubungkan hasil optimasi ke modul *Production Planning* di SAP S/4HANA atau Oracle SCM Cloud melalui *API* berbasis BAPI/REST. Jadwalkan *re-optimization* mingguan sesuai siklus *S&OP*.

Diagram alir proses secara ringkas adalah sebagai berikut:

```
[Data Permintaan Historis] 
        ↓
[Demand Sensing & Forecasting]
        ↓
[Scenario Generation (MMFE)]
        ↓
[Two-Stage Stochastic MILP]
        ↓
[Output: Production Plan y_t*, x_t*]
        ↓
[Rolling-Horizon Re-Optimization]
        ↓
[ERP Execution & KPI Tracking]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Kasus

Pertimbangkan lini produksi komponen plastik injeksi (*injection-molded components*) dengan $T=6$ periode permintaan musiman. Data input tercantum pada Tabel 1:

**Tabel 1. Parameter Operasional**

| Parameter | Nilai | Keterangan |
|-----------|-------|------------|
| $s_t$ (setup cost) | Rp 8.500.000 | Konstan per periode |
| $h_t$ (holding cost) | Rp 425.000/unit/bulan | 5% dari