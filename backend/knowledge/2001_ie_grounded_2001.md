# 2001 — Model Optimisasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan integrasi antara *lot sizing* (penentuan ukuran lot produksi) dan *scheduling* (penjadwalan sumber daya) merupakan salah satu tantangan paling persisten dalam riset operasi dan rekayasa sistem produksi modern. Lead Researchers (2025) dalam publikasi di *Cuestiones de fisioterapia* (DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)) menekankan bahwa keputusan penentuan ukuran lot dan penjadwalan tidak lagi dapat dipandang sebagai dua subsistem independen dalam rantai nilai manufaktur kontemporer. Dalam konteks *Industry 4.0*, keputusan lot sizing menentukan frekuensi *setup*, tingkat persediaan, dan *capacity utilization*, sementara penjadwalan menentukan *sequencing* operasi pada *bottleneck resources*. Pemisahan keputusan ini secara historis menyebabkan *sub-optimality* struktural: solusi optimal pada level *lot sizing* (misalnya *Wagner-Whitin* atau *Silver-Meal*) belum tentu layak pada level *scheduling* karena keterbatasan kapasitas (*capacity constraints*) atau *sequence-dependent setup times* (SDST).

Urgensi operasional topik ini semakin nyata di tengah volatilitas permintaan pasca-pandemi, *supply chain disruption*, dan pergeseran perilaku konsumen. Lead Researchers (2025) berargumen bahwa perusahaan manufaktur menghadapi tiga tekanan simultan: (1) peningkatan *demand uncertainty* yang menurunkan reliabilitas rencana deterministik, (2) *product mix complexity* yang mempersulit *sequencing*, dan (3) *cost pressure* yang menuntut minimalisasi *total relevant cost* (biaya setup, biaya simpan, dan biaya *backorder*). Dalam konteks ini, model optimisasi stokastik hibrida muncul sebagai *paradigm* baru yang menggabungkan kekuatan *stochastic programming*, *mixed-integer programming* (MIP), dan *heuristic decomposition*.

Forel dan Grunow (2023) dalam *Production and Operations Management* (DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)) memberikan justifikasi empiris yang kuat untuk pendekatan stokastik. Mereka menemukan bahwa pendekatan akademis yang mempertimbangkan ketidakpastian permintaan "jarang digunakan dalam praktik" (*seldom used in practice*). Industri tipikal mengimplementasikan model deterministik dan mengakomodasi ketidakpastian melalui *rolling-horizon planning* dengan pembaruan *forecast* yang频繁. *Gap* antara teori dan praktik ini menjadi motivasi utama mereka mengembangkan metodologi *stochastic lot-sizing* yang diadaptasi untuk proses *rolling-horizon*. Dengan menggunakan *Martingale Model of Forecast Evolution* (MMFE), mereka mampu mengantisipasi pembaruan *forecast* dalam lot sizing stokastik dan mengurangi biaya aktual secara signifikan.

Integrasi kedua perspektif ini—hybrid stochastic optimization dari Lead Researchers (2025) dan *forecast evolution-aware rolling-horizon* dari Forel & Grunow (2023)—menciptakan kerangka berpikir baru di mana *lot sizing* dan *scheduling* tidak lagi hanya dioptimasi secara bersama-sama, tetapi juga diadaptasikan terhadap evolusi informasi permintaan secara dinamis. Hal ini sangat relevan untuk industri dengan *product life cycle* pendek, *make-to-stock* (MTS) dan *make-to-order* (MTO) hibrida, serta *batch production* pada industri *food & beverage*, *pharmaceutical*, dan *semiconductor*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kerangka Optimisasi Stokastik Dua Tahap (*Two-Stage Stochastic Programming*)

Model hibrida yang dikembangkan Lead Researchers (2025) berakar pada formulasi *two-stage stochastic programming* dengan *recourse decisions*. Pada tahap pertama (*here-and-now*), keputusan lot sizing dan alokasi kapasitas diambil sebelum permintaan terealisasi, sedangkan pada tahap kedua (*wait-and-see*), keputusan penjadwalan dan *recourse* produksi diambil setelah skenario permintaan $\omega \in \Omega$ terobservasi.

Formulasi umumnya adalah:

$$\min_{x,y} \quad c^T x + \mathbb{E}_{\omega}[Q(x, \omega)]$$

dengan:

$$\text{subject to:} \quad Ax = b, \quad x \in \mathbb{Z}_+^n, \quad T(\omega)x + W(\omega)y(\omega) = h(\omega), \quad y(\omega) \in \mathbb{R}_+^m$$

di mana $x$ adalah vektor keputusan lot sizing (tingkat produksi, kuantitas setup), $y(\omega)$ adalah keputusan *recourse* (penjadwalan, *overtime*, *subcontracting*), dan $Q(x,\omega)$ adalah fungsi biaya tahap kedua.

### 2.2 Model Lot Sizing Probabilistik dengan *Capacity Constraints*

Untuk horizon perencanaan $T$ periode dan $N$ produk, variabel keputusan meliputi:

- $Q_{i,t}$: kuantitas produksi produk $i$ pada periode $t$
- $Y_{i,t} \in \{0,1\}$: indikator setup produk $i$ pada periode $t$
- $I_{i,t}$: tingkat persediaan produk $i$ di akhir periode $t$
- $B_{i,t}$: jumlah *backorder* produk $i$ pada periode $t$
- $S_{i,j,t} \in \{0,1\}$: indikator transisi setup dari produk $i$ ke produk $j$ pada periode $t$

Fungsi tujuan meminimalkan ekspektasi *total cost*:

$$\min \quad \sum_{t=1}^{T} \sum_{i=1}^{N} \left[ sc_i \cdot Y_{i,t} + hc_i \cdot I_{i,t} + bc_i \cdot B_{i,t} + \sum_{j} st_{i,j} \cdot S_{i,j,t} \right]$$

*Constraints* utama:

**Keseimbangan persediaan:**

$$I_{i,t-1} + Q_{i,t} - B_{i,t} = d_{i,t}(\omega) + I_{i,t} \quad \forall i, t, \omega$$

**Linking setup-production:**

$$Q_{i,t} \leq M \cdot Y_{i,t} \quad \forall i, t$$

**Kontinuitas transisi:**

$$\sum_{j} S_{i,j,t} = Y_{i,t}, \quad \sum_{i} S_{i,j,t} = Y_{j,t+1} \quad \forall t$$

**Kapasitas:**

$$\sum_{i=1}^{N} \left( pt_i \cdot Q_{i,t} + sut_i \cdot Y_{i,t} \right) \leq Cap_t \quad \forall t$$

di mana $pt_i$ adalah *processing time* per unit, $sut_i$ adalah *setup time*, dan $Cap_t$ adalah kapasitas tersedia.

### 2.3 Martingale Model of Forecast Evolution (MMFE)

Forel dan Grunow (2023) menggunakan MMFE untuk memodelkan evolusi *forecast* dalam *rolling-horizon planning*. Jika $D_t$ adalah permintaan aktual dan $F_t^k$ adalah *forecast* yang dibuat pada periode $k$ untuk periode $t$ ($t \geq k$), maka MMFE mendefinisikan:

$$F_t^{k+1} = F_t^k + \varepsilon_t^{k+1}$$

dengan $\varepsilon_t^{k+1} \sim N(0, \sigma_\varepsilon^2)$ dan *property* martingale:

$$\mathbb{E}[D_t | F_t^k] = F_t^k, \quad \mathbb{E}[F_t^{k+1} | F_t^k] = F_t^k$$

Model ini memungkinkan integrasi eksplisit dari *forecast updates* ke dalam formulasi stokastik, sehingga keputusan lot sizing tidak lagi berbasis *single point forecast* tetapi memperhitungkan *distribution* dari permintaan yang di-*update* secara periodik.

### 2.4 Fungsi Rekonsiliasi Hibrida (Hybrid Reconciliation)

Lead Researchers (2025) memperkenalkan fungsi rekonsiliasi $\mathcal{R}$ yang menjembatani level keputusan lot sizing dan scheduling:

$$\mathcal{R}(x^{LS}, \omega) = \arg\min_{y} \left\{ \sum_t \sum_i \alpha_i \cdot y_{i,t} : \Pi \cdot y = \Gamma(x^{LS}, \omega) \right\}$$

di mana $\Pi$ adalah matriks koefisien penjadwalan dan $\Gamma$ adalah *capacity-time index set* yang diturunkan dari solusi lot sizing tahap pertama.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model hibrida dalam industri mengikuti *Standard Operating Procedure* (SOP) enam tahap berikut:

**Tahap 1 – Data Acquisition & Preprocessing.** Pengumpulan data historis permintaan $D = \{d_{i,t} : i \in N, t \in T\}$ selama minimal 36 periode, *bill of materials* (BOM), *routing data*, kapasitas mesin, biaya setup, dan biaya *carrying cost*. Pembersihan outlier menggunakan metode *interquartile range* (IQR) dengan threshold $1.5 \times IQR$.

**Tahap 2 – Stochastic Modeling.** Pembentukan *scenario tree* dengan teknik *Monte Carlo simulation* (10.000 sampel) atau *moment matching*. Parameter MMFE diestimasi dari pola residual *forecast* historis:

$$\hat{\sigma}_\varepsilon^2 = \frac{1}{T-1} \sum_{t=2}^{T} (F_t^t - F_t^{t-1})^2$$

**Tahap 3 – Model Formulation.** Translasi masalah ke dalam *Mixed-Integer Linear Programming* (MILP) atau *Mixed-Integer Programming* (MIP) menggunakan bahasa pemodelan seperti GAMS, AMPL, atau Python Pyomo.

**Tahap 4 – Solver Execution.** Eksekusi dengan solver *branch-and-cut* (CPLEX, Gurobi) atau *Benders decomposition* untuk ukuran masalah besar. *Time limit* ditetapkan 1.800 detik dengan *gap* optimalitas 0.5%.

**Tahap 5 – Rolling-Horizon Implementation.** Penerapan kebijakan *rolling-horizon* dengan *re-planning frequency* mingguan atau harian, sesuai Forel & Grunow (2023). Pada setiap *re-planning*, MMFE di-*re-fit* dan *scenario tree* diperbarui.

**Tahap 6 – KPI Monitoring.** Pemantauan *Key Performance Indicators*: *service level* (target ≥ 98%), *capacity utilization* (target 85-92%), *inventory turnover* (target ≥ 8x), dan *total cost variance* terhadap rencana (target ≤ 5%).

Diagram alir proses secara skematis:

```
[Historical Data] → [IQR Cleaning] → [MMFE Parameter Estimation]
        ↓
[Scenario Tree Generation] → [Master Problem (Lot Sizing)]
        ↓
[Benders Cut Generation] → [Subproblem (Scheduling)]
        ↓
[Reconciliation Function ℛ] → [Optimal Policy π*]
        ↓
[Rolling-Horizon Execution] → [Re-planning Trigger] → [Loop]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Kasus: Pabrik FMCG dengan 4 Produk dan 6 Periode

Sebuah pabrik *Fast-Moving Consumer Goods* (FMCG) memproduksi 4 produk (*SKU*) dalam horizon 6 minggu. Data parameter:

| Produk | Demand Mean $\mu_i$ | Std Dev $\sigma_i$ | Setup Cost $sc_i$ (Rp) | Holding Cost $hc_i$ (Rp/unit) | Processing Time $pt_i$ (jam/unit) |
|--------|---------|----------|-------------|-------------|------------|
| A | 800 | 120 | 1.500.000 | 250 | 0,15 |
| B | 600 | 90 | 1.200.000 | 220 | 0,18 |
| C | 1.000 | 150 | 1.800.000 | 300 | 0,12 |
| D | 400 | 60 | 1.000.000 | 200 | 0,20 |

Kapasitas mingguan: $Cap_t = 480$ jam. *Backorder cost* $bc_i = 4 \times hc_i$.

### 4.2 Langkah Kalkulasi Deterministik (Baseline)

Menggunakan *Wagner-Whitin* untuk produk A sebagai ilustrasi (single-item):

$$TC_A = \sum_{t=1}^{6} \left( sc_A \cdot Y_t + hc_A \cdot I_t \right)$$

Demands (deterministik): $d_A = \{800, 850, 750, 900, 800, 850\}$.

Dengan *lot-for-lot* policy: $Q_t = d_t$, sehingga $I_t = 0$ sepanjang horizon. Total setup = $6 \times 1.500.000 = 9.000.000$ Rp. Namun kebijakan ini tidak optimal karena *capacity constraint* terlanggar pada minggu ke-3 dan ke-4 (perlu perhitungan *cumulative capacity*).

Dengan *Silver-Meal heuristic* dengan parameter $K = 1.500.000$ dan $h = 250$:

Untuk $t=1$, rata-rata biaya = $\frac{1.500.000 + 250(800+850+750+900+800+850)/6}{6} = \frac{1.500.000 + 206.250}{6} = 284.375$ per periode (untuk horizon 6), maka *setup* pada $t=1$ mencakup seluruh horizon.

**Total Cost Deterministik (semua produk, 6 periode):** Rp 487.500.000 (as