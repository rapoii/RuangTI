# 1537 — Model Optimisasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** *A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem*
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan penentuan ukuran lot (*lot sizing*) dan penjadwalan produksi (*scheduling*) merupakan salah satu persoalan klasik dalam riset operasi dan teknik industri yang berdampak langsung pada kinerja rantai pasok manufaktur modern. Lead Researchers (2025) dalam *Cuestiones de fisioterapia* (DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)) menyoroti bahwa mayoritas sistem produksi di industri masih mengandalkan model deterministik yang gagal menangkap fluktuasi permintaan riil, sehingga menimbulkan *bullwhip effect*, penumpukan *safety stock* berlebih, serta utilisasi kapasitas yang suboptimal. Dalam konteks industri 4.0, ketidakpastian permintaan, waktu proses (*processing time*) yang stokastik, dan risiko disrupsi supplier menjadikan model hybrid yang menggabungkan optimisasi stokastik dengan logika penjadwalan kaku semakin relevan.

Forel & Grunow (2023) dalam *Production and Operations Management* (DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)) mengonfirmasi bahwa meskipun komunitas akademik telah lama menawarkan formulasi stokastik untuk *lot sizing*, adopsi di industri masih rendah karena kesenjangan antara kompleksitas model dan realitas implementasi. Praktisi lebih memilih *rolling-horizon planning* dengan pembaruan ramalan (*forecast updates*) yang sering, karena fleksibilitas *replanning* yang ditawarkannya. Forel & Grunow (2023) menjembatani kesenjangan ini dengan menggunakan *Martingale Model of Forecast Evolution* (MMFE) untuk mengintegrasikan pembaruan ramalan ke dalam formulasi stokastik, serta menambahkan *production recourse* untuk merefleksikan fleksibilitas *replanning*. Hasil simulasi mereka pada data sintetis dan data nyata menunjukkan bahwa *forecast evolution models* mampu menurunkan biaya aktual secara signifikan dibandingkan pendekatan deterministik konvensional.

Konteks industri yang melatarbelakangi pengembangan model ini mencakup: (i) industri *process manufacturing* (kimia, farmasi, makanan & minuman) dengan *changeover cost* tinggi; (ii) industri *discrete manufacturing* dengan *mixed-model assembly lines*; (iii) sektor FMCG dengan siklus hidup produk pendek; serta (iv) industri *job-shop* dengan kontaineritas sumber daya. Urgensi ekonominya jelas: setiap kebijakan ukuran lot dan penjadwalan yang tidak memperhitungkan ketidakpastian dapat meningkatkan *total relevant cost* hingga 8–15% berdasarkan studi empiris lintas-sektor yang dirujuk Lead Researchers (2025).

## 2. Landasan Teori & Formulasi Matematis

Model hibrida yang dimaksud merupakan gabungan antara **Multi-Stage Stochastic Integer Programming (MSIP)** dan **Constraint Programming (CP)** untuk menangkap keputusan diskrit (*setup*) dan keputusan kontinyu (*production quantity*) secara simultan. Formulasi dasar mengikuti notasi Wagner-Whitin yang diperluas dengan himpunan skenario stokastik.

### 2.1 Notasi Himpunan, Parameter, dan Variabel Keputusan

**Himpunan:**
- $T = \{1, 2, \dots, |T|\}$ : himpunan periode diskrit
- $S = \{1, 2, \dots, |S|\}$ : himpunan skenario permintaan
- $P = \{1, 2, \dots, |P|\}$ : himpunan produk (untuk model multi-item)

**Parameter:**
- $d_{t,s}$ : permintaan periode $t$ pada skenario $s$
- $c_{p,t}$ : biaya produksi per unit produk $p$ pada periode $t$
- $h_{p,t}$ : biaya *holding* per unit per periode untuk produk $p$
- $s_{p,t}$ : biaya *fixed setup* produk $p$ pada periode $t$
- $K_t$ : kapasitas produksi pada periode $t$ (jam atau unit)
- $r_{p,t}$ : waktu proses per unit produk $p$ pada periode $t$
- $\pi_s$ : probabilitas skenario $s$ dengan $\sum_s \pi_s = 1$
- $I_{p,0}$ : inventaris awal produk $p$

**Variabel Keputusan:**
- $x_{p,t,s} \geq 0$ : jumlah produksi produk $p$ pada periode $t$ di skenario $s$
- $y_{p,t,s} \in \{0,1\}$ : 1 jika *setup* dilakukan untuk produk $p$ pada periode $t$ di skenario $s$, 0 sebaliknya
- $I_{p,t,s} \in \mathbb{Z}_{\geq 0}$ : tingkat inventaris akhir periode $t$ untuk produk $p$ di skenario $s$
- $z_{p,t,s} \in \{0,1\}$ : 1 jika urutan produk $p$ mendahului produk lain pada periode $t$ (untuk *scheduling*)

### 2.2 Formulasi Objective Function

$$\min \; Z = \sum_{s \in S} \pi_s \sum_{t \in T} \sum_{p \in P} \left( c_{p,t} x_{p,t,s} + h_{p,t} I_{p,t,s} + s_{p,t} y_{p,t,s} \right)$$

Fungsi tujuan meminimalkan ekspektasi biaya total — produksi, *holding*, dan *fixed setup* — terhadap distribusi probabilitas skenario.

### 2.3 Kendala Operasional

**Kendala keseimbangan inventaris (per skenario):**
$$I_{p,t,s} = I_{p,t-1,s} + x_{p,t,s} - d_{p,t,s} \quad \forall p,t,s$$

**Kendala *setup linking* (big-M):**
$$x_{p,t,s} \leq M_p \cdot y_{p,t,s} \quad \forall p,t,s$$
dengan $M_p$ merupakan batas atas produksi produk $p$ (misalnya kapasitas penuh satu periode).

**Kendala kapasitas:**
$$\sum_{p \in P} r_{p,t} \cdot x_{p,t,s} \leq K_t \quad \forall t,s$$

**Kendala non-anticipativity untuk skenario dengan informasi identik di node keputusan $t$:**
$$x_{p,t,s} = x_{p,t,s'} \quad \forall p, t, (s,s') \in \mathcal{N}_t$$
dengan $\mathcal{N}_t$ adalah himpunan pasangan skenario yang berbagi riwayat informasi hingga periode $t$.

### 2.4 Ekstensi MMFE (Forel & Grunow, 2023)

Forel & Grunow (2023) memperkenalkan *Martingale Model of Forecast Evolution* yang memodelkan pembaruan ramalan sebagai:

$$\hat{d}_{t|\tau} = \hat{d}_{t|\tau-1} + \varepsilon_{t,\tau}, \quad \forall \tau < t$$
dengan $\hat{d}_{t|\tau}$ adalah ramalan permintaan untuk periode $t$ yang dibuat pada periode $\tau$, dan $\{\varepsilon_{t,\tau}\}$ adalah *martingale difference sequence*:

$$\mathbb{E}[\varepsilon_{t,\tau} | \mathcal{F}_{\tau-1}] = 0, \quad \mathrm{Var}(\varepsilon_{t,\tau}) = \sigma_{t,\tau}^2$$

Variabel keputusan rekursif (*production recourse*) kemudian didefinisikan sebagai:

$$x_{p,t,s}^\text{rec} = x_{p,t,s}^\text{plan} + \delta_{p,t,s}, \quad \delta_{p,t,s} \in \mathbb{R}$$
yang merepresentasikan koreksi produksi setelah informasi baru diterima, dengan biaya koreksi $c_{p,t}^{\text{rec}} \geq c_{p,t}$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model hibrida di lingkungan industri mengikuti SOP terstruktur berikut, yang mengintegrasikan prosedur Lead Researchers (2025) dengan kerangka *rolling-horizon* Forel & Grunow (2023):

**Tahap 1 — Pengumpulan Data Historis & Estimasi Distribusi Permintaan**
Lakukan *time-series decomposition* terhadap data permintaan 24–36 periode terakhir untuk mendapatkan komponen tren, musiman, dan residual. Estimasi parameter MMFE $(\hat{d}_{t|\tau}, \sigma_{t,\tau}^2)$ menggunakan *exponential smoothing* atau *ARIMA*.

**Tahap 2 — Pembangkitan Skenario**
Gunakan *Monte Carlo simulation* untuk membangkitkan pohon skenario dengan metode *moment matching* atau *scenario reduction* (misalnya algoritma *forward selection* Heitsch & Römisch) untuk menjaga tractabilitas.

**Tahap 3 — Formulasi & Solusi Model**
Bangun model MSIP menggunakan pustaka optimisasi (Gurobi, CPLEX, atau Pyomo) dan selesaikan dengan dekomposisi Benders