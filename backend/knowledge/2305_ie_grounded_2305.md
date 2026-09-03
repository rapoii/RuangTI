# 2305 — Optimasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi dalam Rantai Pasok Berkelanjutan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem*. Cuestiones de fisioterapia, 54(2), 2007–2018. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Mohammed Machkour, Abdellah El Barkany, Bilal Harras (2024). *Sustainable and Resilient Production–Distribution Planning Under Stochastic Demand: A Carbon-Aware MILP Framework with Lost Sales and Rolling Horizon Replanning*. Logistics, 8(1), 175. DOI: [https://doi.org/10.3390/logistics10080175](https://doi.org/10.3390/logistics10080175)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur modern menghadapi tekanan simultan dari empat dimensi strategis: volatilitas permintaan, fragmentasi lot produksi, kompleksitas penjadwalan multi-item, dan kewajiban dekarbonisasi. Lead Researchers (2025) dalam artikelnya yang diterbitkan di *Cuestiones de fisioterapia* (DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)) menyoroti bahwa Generalized Lot Sizing and Scheduling Problem (GLSP) — yang secara inheren menggabungkan keputusan *how much* (ukuran lot) dan *when* (urutan produksi pada mesin berkapasitas terbatas) — menjadi terlalu kompleks untuk ditangani secara deterministik ketika permintaan pelanggan, waktu proses, dan tingkat cacat produk bersifat stokastik. Dalam konteks operasional, masalah ini muncul di lini perakitan otomotif, industri makanan dan minuman dengan umur simpan terbatas, pabrik elektronik dengan Bill of Materials multi-level, serta fasilitas farmasi yang harus memenuhi batch minimum untuk validasi regulator.

Urgensi ekonominya nyata: menurut Machkour, El Barkany, dan Harras (2024) yang mempublikasikan framework di jurnal *Logistics* (DOI: [https://doi.org/10.3390/logistics10080175](https://doi.org/10.3390/logistics10080175)), rantai pasok otomotif modern harus mengoordinasikan biaya produksi, dampak lingkungan, dan kontinuitas layanan di tengah ketidakpastian permintaan serta kapasitas yang terbatas. Mereka secara eksplisit menyatakan bahwa *manufacturing supply chains must increasingly coordinate cost, environmental impact, and service continuity under demand uncertainty and limited capacity*. Paper tersebut menunjukkan bahwa mengabaikan variabilitas permintaan dapat meningkatkan total biaya hingga 18–24% melalui *safety stock* yang berlebihan dan keputusan lot yang suboptimal. Lebih jauh, monetisasi emisi karbon melalui *internal carbon price* menunjukkan bahwa keputusan lot sizing yang tidak efisien secara tidak langsung meningkatkan *carbon footprint* karena produksi yang tidak terencana memicu restart mesin, perpindahan setup, dan pengiriman darurat.

Konteks teknis Lead Researchers (2025) juga menggarisbawahi bahwa scheduler di lantai produksi sering terjebak pada solusi *short-sighted* yang meminimalkan makespan harian tanpa memperhitungkan carry-over inventory yang akan menjadi beban biaya di periode berikutnya. Di sinilah kebutuhan akan *hybrid stochastic optimization* muncul: sebuah arsitektur yang menggabungkan kekuatan formulasi Mixed-Integer Linear Programming (MILP) untuk menangkap integritas logika keputusan biner (sequence-dependent setups, assignment item-mesin), dengan efisiensi komputasional metaheuristik seperti Simulated Annealing, Genetic Algorithm, atau Adaptive Large Neighborhood Search (ALNS) untuk mengeksplorasi ruang solusi besar dalam waktu komputasi yang layak untuk *replanning* mingguan.

## 2. Landasan Teori & Formulasi Matematis

Model yang diusulkan Lead Researchers (2025) mengadopsi formulasi dua tahap (*two-stage stochastic programming*). Tahap pertama (*here-and-now*) menentukan ukuran lot dan sequence untuk horizon perencanaan awal, sedangkan tahap kedua (*wait-and-see*) mengelola recourse melalui inventory positioning dan opsi produksi tambahan saat skenario permintaan terrealisasi.

### 2.1 Notasi dan Parameter

Indeks dan himpunan:
- $i \in I$: item produk
- $j \in J$: workstation atau mesin
- $t \in T = \{1, 2, \ldots, |T|\}$: periode diskrit
- $s \in S$: skenario permintaan dengan bobot probabilitas $p_s$

Parameter:
- $d_{i,t,s}$: permintaan item $i$ pada periode $t$ di skenario $s$
- $c^{p}_{i}$: biaya produksi per unit item $i$
- $c^{h}_{i}$: biaya inventory holding per unit per periode
- $c^{s}_{i,j}$: biaya setup sequence-dependent dari item $i$ ke item $j$ pada mesin $j$
- $c^{b}_{i}$: biaya backorder per unit
- $Q^{min}_{i}$, $Q^{max}_{i}$: batas minimum dan maksimum ukuran lot
- $Cap_{j,t}$: kapasitas mesin $j$ pada periode $t$
- $p_{i,j}$: waktu proses per unit item $i$ pada mesin $j$

Variabel keputusan:
- $X_{i,j,t,s} \in \mathbb{Z}_{\geq 0}$: jumlah unit item $i$ diproduksi pada mesin $j$ di periode $t$ skenario $s$
- $Y_{i,j,t,s} \in \{0,1\}$: 1 jika setup mesin $j$ untuk item $i$ di periode $t$ skenario $s$
- $Z_{i,j,t,s} \in \{0,1\}$: 1 jika item $i$ di-setup pada mesin $j$ segera setelah item $i'$ di periode $t$ skenario $s$ (sequence indicator)
- $I_{i,t,s} \geq 0$: inventory akhir item $i$ di periode $t$
- $B_{i,t,s} \geq 0$: backorder item $i$ di periode $t$

### 2.2 Fungsi Tujuan

Fungsi tujuan meminimalkan *expected total cost*:

$$\min \quad Z = \sum_{s \in S} p_s \left[ \sum_{i \in I}\sum_{j \in J}\sum_{t \in T} \left( c^{p}_{i}\, X_{i,j,t,s} + c^{h}_{i}\, I_{i,t,s} + c^{b}_{i}\, B_{i,t,s} \right) + \sum_{i \in I}\sum_{j \in J}\sum_{t \in T} c^{s}_{i,j}\, Y_{i,j,t,s} \right]$$

### 2.3 Kendala

**Kendala keseimbangan inventory:**
$$I_{i,t-1,s} + \sum_{j \in J} X_{i,j,t,s} - B_{i,t,s} = d_{i,t,s} + B_{i,t-1,s} + I_{i,t,s} \quad \forall i,t,s$$

**Kendala kapasitas:**
$$\sum_{i \in I} \left( p_{i,j}\, X_{i,j,t,s} + \sigma_{i,j}\, Y_{i,j,t,s} \right) \leq Cap_{j,t} \quad \forall j,t,s$$

dengan $\sigma_{i,j}$ adalah waktu setup item $i$ di mesin $j$.

**Kendala sequence continuity (untuk small-bucket GLSP):**
$$\sum_{i' \in I} Z_{i',i,j,t,s} = Y_{i,j,t,s} \quad \forall i,j,t,s$$

$$Y_{i,j,t,s} = \sum_{i' \in I} Z_{i,i',j,t,s} \quad \forall i,j,t,s$$

**Kendala lot minimum dan maksimum:**
$$Q^{min}_{i}\, Y_{i,j,t,s} \leq X_{i,j,t,s} \leq Q^{max}_{i}\, Y_{i,j,t,s} \quad \forall i,j,t,s$$

### 2.4 Dekomposisi Hibrida

Lead Researchers (2025) mengusulkan arsitektur hibrida di mana MILP digunakan untuk *master problem* yang menangkap keputusan lot sizing level tinggi, sementara modul ALNS melakukan *local search* pada sub-masalah penjadwalan sequence-dependent. Fungsi penalty adaptif $\lambda_k$ untuk iterasi $k$ didefinisikan sebagai:

$$\lambda_k = \lambda_0 \cdot e^{-\alpha \cdot f^*_{k-1}/\bar{f}_{k-1}}$$

dengan $f^*_{k-1}$ adalah nilai obyektif terbaik dan $\bar{f}_{k-1}$ adalah rerata pada iterasi sebelumnya.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri mengikuti prosedur operasional standar berikut:

**Fase 1 — Akuisisi Data (Minggu -2 hingga -1).** Data historis permintaan 24 bulan terakhir dikumpulkan dari ERP (SAP S/4HANA atau Oracle Cloud SCM). Time series kemudian didekomposisi menggunakan STL (Seasonal-Trend decomposition using Loess) dan residual dimodelkan dengan ARIMA atau LSTM sederhana untuk generate $S \geq 50$ skenario dengan bobot equiprobable $p_s = 1/S$.

**Fase 2 — Pembentukan Model.** Data parameter dimasukkan ke solver MILP (Gurobi 11.0 atau CPLEX 22.1) melalui API Python. Validasi model menggunakan *unit test* terhadap instans kecil dengan solusi optimal yang diketahui (benchmarking terhadap lot-sizing klasik Wagner-Whitin).

**Fase 3 — Optimasi Hibrida.** Iterasi dilakukan dengan pola *warm-start*: solusi MILP dijadikan *initial incumbent* untuk ALNS. Operator destroy (random removal, worst-removal, shaw-removal) dan repair (greedy, regret-k) dikombinasikan. Kriteria berhenti: gap relatif $\leq 1\%$ atau *time limit* 30 menit.

**Fase 4 — Validasi dan Sign-off.** Solusi diverifikasi melalui simulasi discrete-event (AnyLogic atau FlexSim) selama 1000 run untuk mengukur *expected service level*, *fill rate*, dan *carbon footprint*.

**Arsitektur teknologi:**
```
[ERP/SAP] → [Data Lake] → [Scenario Generator (Python/R)]
        ↓
   [MILP Master (Gurobi)] ←→ [ALNS Engine (Local Search)]
        ↓
   [Solution Pool] → [Discrete-Event Simulation] → [Dashboard KPI]
```

Pendekatan ini selaras dengan kerangka *rolling-horizon replanning* yang dipromosikan Machkour et al. (2024), di mana model direvisi setiap periode dengan menyisipkan horizon baru dan membuang horizon lampau.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Pertimbangkan lini produksi komponen otomotif dengan 3 item (A, B, C), 2 mesin (M1, M2), dan horizon 4 periode. Data parameter diasumsikan sebagai berikut:

| Item | $c^p_i$ | $c^h_i$ | $p_{i,M1}$ | $p_{i,M2}$ | $Q^{min}_i$ | $Q^{max}_i$ |
|------|--------|--------|-----------|-----------|-----------|-----------|
| A | Rp 50.000 | Rp 2.000 | 0,10 jam | 0,12 jam | 50 | 400 |
| B | Rp 80.000 | Rp 3.500 | 0,15 jam | 0,18 jam | 40 | 350 |
| C | Rp 60.000 | Rp 2.500 | 0,12 jam | 0,14 jam | 30 | 300 |

Kapasitas: $Cap_{M1,t} = Cap_{M2,t} = 40$ jam. Setup cost: $c^s_{i,j} = 500.000$ untuk transisi sequence-dependent. Dua skenario permintaan dengan $p_1 = p_2 = 0{,}5$:

| Item | $d_{i,t,s=1}$ | $d_{i,t,s=2}$ |
|------|-------------|-------------|
| A | [100, 150, 200, 120] | [80, 180, 220, 110] |
| B | [60, 90, 110, 80] | [70, 100, 130, 70] |
| C | [40, 70, 90, 60] | [50, 60, 100, 80] |

**Langkah kalkulasi periode 1, skenario 1, item A di M1:**

Waktu yang dibutuhkan jika $X_{A,M1,1,1} = 150$ unit:
$$\text{Waktu proses} = p_{A,M1} \cdot X_{A,M1,1,1} + \sigma_{A,M1} \cdot Y_{A,M1,1,1}$$
$$= 0{,}10 \cdot 150 + 1{,}0 \cdot 1 = 15 + 1 = 16 \text{ jam}$$

Karena $16 \leq Cap_{M1,1} = 40$ jam, kendala kapasitas terpenuhi.

**Perhitungan biaya untuk skenario 1, periode 1, seluruh item di M1 (jika diproduksi A=150, B=100, C=60):**

$$C_{prod} = (50.000)(150) + (80.000)(100) + (60.000)(60) = 7.500.000 + 8.000.000 + 3.600.000 = 19.100.000$$

$$C_{setup} = (500.000)(3) = 1.500.000$$

Inventory akhir periode 1 (asumsi inventory awal nol): 
$$I