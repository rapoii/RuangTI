# 2113 — Optimasi Stokastik Hybrid untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan penentuan ukuran lot (*lot sizing*) dan penjadwalan produksi (*scheduling*) merupakan salah satu keputusan taktis-operasional paling krusial dalam rantai pasok manufaktur modern. Dalam lingkungan *make-to-stock* dan *make-to-order*, perusahaan menghadapi kebutuhan untuk memutuskan kuantitas produksi pada setiap periode horizon perencanaan guna meminimalkan total biaya sistem yang terdiri atas biaya setup (S), biaya inventory holding (h), biaya backorder (b), serta biaya produksi variabel (c). Wagner dan Whitin (1958) telah meletakkan fondasi deterministik melalui model *dynamic lot sizing* dengan kompleksitas pseudo-polinomial, namun pada praktiknya perencana industri hampir selalu menghadapi ketidakpastian permintaan (*demand uncertainty*) yang invalidates asumsi deterministik.

Penelitian terbaru oleh Lead Researchers (2025) yang dipublikasikan di *Cuestiones de fisioterapia* dengan DOI [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018) mengajukan model hybrid yang mengintegrasikan optimasi stokastik dua tahap (*two-stage stochastic programming*) dengan teknik dekomposisi heuristik dan metaheuristik (mixed-integer programming dengan *fix-and-relax* atau *Benders decomposition*) untuk menyelesaikan permasalahan lot sizing dan penjadwalan secara simultan pada lingkungan multi-item, multi-periodic, dengan kendala kapasitas dan *sequence-dependent setup*. Pendekatan ini muncul karena dalam industri nyata — seperti industri FMCG, semikonduktor, dan farmasi — keputusan lot sizing tidak dapat dipisahkan dari penjadwalan karena keterbatasan kapasitas mesin, *changeover time*, dan kebijakan *minimum batch size*.

Forel dan Grunow (2023) dalam *Production and Operations Management* (DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)) menyoroti kesenjangan riset yang krusial: meskipun pendekatan akademik yang mempertimbangkan ketidakpastian permintaan dalam lot sizing telah berkembang selama beberapa dekade, adopsi di industri masih sangat rendah. Forel dan Grunow menyatakan bahwa "industry typically implements deterministic models and accounts for uncertainties by using a rolling-horizon planning framework with frequent forecast updates." Untuk menjembatani kesenjangan ini, mereka mengusulkan metodologi lot sizing stokastik yang disesuaikan dengan proses rolling-horizon, menggunakan Martingale Model of Forecast Evolution (MMFE) yang memungkinkan antisipasi terhadap pembaruan forecast dari proses rolling-horizon planning.

Urgensi ekonomi dari topik ini sangat signifikan. Studi empiris menunjukkan bahwa keputusan lot sizing yang suboptimal dapat meningkatkan total biaya rantai pasok hingga 15–30%, terutama pada industri dengan biaya setup tinggi dan permintaan yang sangat volatil. Sebagai konteks, pada industri baja (*steel manufacturing*) dengan permintaan CoV (coefficient of variation) di atas 0.4, penerapan model stokastik rolling-horizon yang diusung Forel dan Grunow (2023) mampu menurunkan *actual costs* secara substansial dibandingkan dengan pendekatan deterministik murni. Modul 2113 ini bertujuan untuk membangun kapasitas analitis profesional Teknik Industri dalam memodelkan, menganalisis, dan mengimplementasikan solusi hybrid stochastic optimization untuk permasalahan lot sizing dan penjadwalan.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Wagner-Whitin Deterministik (Baseline)

Model deterministik klasik yang menjadi titik acuan diformulasikan sebagai berikut. Misalkan $T$ adalah jumlah periode perencanaan, $d_t$ adalah permintaan deterministik pada periode $t$, $x_t$ adalah kuantitas produksi, $I_t$ adalah level inventori akhir periode $t$, $y_t \in \{0,1\}$ adalah variabel biner setup, dengan parameter biaya $K_t$ (setup cost), $h_t$ (holding cost per unit), $p_t$ (production cost per unit), dan $c_t$ (backorder cost per unit). Formulasi Mixed Integer Programming (MIP) adalah:

$$\min \sum_{t=1}^{T} \left( K_t y_t + h_t I_t^+ + c_t I_t^- + p_t x_t \right)$$

$$\text{subject to:}$$

$$x_t + I_{t-1}^+ - I_{t-1}^- - I_t^+ + I_t^- = d_t, \quad \forall t \in \{1,\dots,T\}$$

$$x_t \leq M y_t, \quad \forall t$$

$$I_t^+, I_t^-, x_t \geq 0, \quad y_t \in \{0,1\}$$

dengan $M$ adalah *big-M* (upper bound kapasitas). Solusi optimal Wagner-Whitin memiliki sifat *zero-inventory* (*ZIO*), yaitu $I_{t-1}^+ \cdot I_t^+ = 0$ untuk setiap $t$ yang aktif berproduksi.

### 2.2 Martingale Model of Forecast Evolution (MMFE)

Forel dan Grunow (2023) membangun landasan stokastik melalui MMFE. Misalkan $D_t$ adalah permintaan aktual yang baru diketahui di akhir periode $t$, dan $f_t^\tau$ adalah forecast permintaan untuk periode $\tau$ yang dibuat pada periode $\tau = t$ (saat ini). MMFE mendefinisikan proses forecast evolution sebagai:

$$D_\tau = f_t^\tau + \varepsilon_\tau, \quad \varepsilon_\tau \sim \mathcal{N}(0, \sigma_\tau^2)$$

dengan syarat *martingale property* $E[D_\tau | \mathcal{F}_t] = f_t^\tau$. Ini berarti *best forecast* terkini adalah *unbiased estimator* dari permintaan aktual. Kovarians antara error pada periode berbeda memenuhi:

$$\text{Cov}(\varepsilon_{\tau_1}, \varepsilon_{\tau_2}) = 0, \quad \tau_1 \neq \tau_2$$

### 2.3 Model Hybrid Stochastic Two-Stage Lot Sizing-Scheduling

Lead Researchers (2025) mengusulkan formulasi hybrid yang menggabungkan lot sizing (kapasitas agregat) dengan penjadwalan (alokasi mesin diskrit). Formulasi dua tahap (*two-stage recourse*) ditulis sebagai:

$$\min \; c^T x + E_\xi \left[ Q(x, \xi) \right]$$

di mana tahap pertama adalah *here-and-now decision* (lot sizing sebelum realisasi permintaan), dan tahap kedua adalah *wait-and-see recourse* (penjadwalan setelah permintaan diketahui). Fungsi recourse adalah:

$$Q(x, \xi) = \min_{y \in \mathcal{Y}(x,\xi)} \sum_{t=1}^{T} \sum_{j=1}^{J} q_j y_{jt}$$

dengan $q_j$ adalah biaya penjadwalan (changeover, overtime, subcontracting) untuk mesin $j$. Vektor $\xi = (d_1, d_2, \dots, d_T)$ merepresentasikan realisasi permintaan, dengan distribusi peluang $P(\xi)$. Node keputusan disusun dalam bentuk scenario tree dengan $N$ scenario, sehingga masalah diskrit dapat ditulis:

$$\min \; c^T x + \sum_{s=1}^{N} p_s q^T y_s$$

dengan kendala kopling antar-skenario pada tahap pertama (variabel $x$) dan *non-anticipativity constraint*:

$$x_{ts} = x_t, \quad \forall t, s \in \mathcal{S}_t$$

dimana $\mathcal{S}_t$ adalah himpunan skenario yang memiliki history identik hingga periode $t$.

### 2.4 Hybrid Solver: Fix-and-Relax + Rolling Horizon

Untuk skalabilitas, Lead Researchers (2025) mengusulkan pendekatan hybrid yang mengombinasikan *fix-and-relax heuristic* dengan validasi melalui *mixed-integer programming solver* (CPLEX/Gurobi). Pada setiap iterasi $i$, subset variabel biner $y_t$ di-*fix* ke nilai dari solusi sebelumnya, menghasilkan *LP relaxation* yang diselesaikan dengan dekomposisi Benders:

$$\min \; c^T x + \theta$$

$$\text{s.t.:} \; c^T x + Q(x, \xi^s) \leq \theta, \quad \forall s$$

dengan *cut generation* iteratif sampai konvergensi gap optimalitas $< \varepsilon$ (umumnya 0.5–1%).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi metodologi Lead Researchers (2025) dan Forel & Grunow (2023) di industri mengikuti kerangka SOP berikut yang dapat diadopsi pada sistem ERP (SAP PP/DS, Oracle SCM) atau *Advanced Planning System* (APS) seperti o9 Solutions atau Kinaxis:

**Fase 1 — Karakterisasi Permintaan (Data Acquisition & Forecasting)**
1. Ekstrak data historis permintaan 24–36 periode (bulanan/mingguan/harian) dari modul *Sales & Operations Planning* (S&OP).
2. Lakukan *outlier detection* menggunakan IQR atau *seasonal-trend decomposition using LOESS* (STL).
3. Bangun *baseline forecast* menggunakan metode eksponensial (Holt-Winters), ARIMA, atau *machine learning* (Prophet, XGBoost) dengan MAPE target $< 12\%$.
4. Kalibrasi MMFE: estimasi $\sigma_\tau$ sebagai fungsi *forecast lead time* menggunakan residual forecast historis, dan validasi *martingale property* melalui uji statistik.

**Fase 2 — Formulasi Model & Solusi Optimasi**
1. Definisikan parameter biaya: setup cost $K_t$, holding cost $h_t = i \cdot v$ (dengan $i$ = carrying cost rate, $v$ = nilai barang), backorder cost $b_t = g_t \cdot L_t$ (goodwill loss $\times$ durasi keterlambatan).
2. Bangun *scenario tree* dengan teknik *moment matching* atau *scenario reduction* (algoritma *fast forward selection*, Heitsch & Römisch, 2003) hingga $N = 50$–$200$ skenario representatif.
3. Solve *master problem* (MIP tahap-1) dengan time limit 300–900 detik pada solver CPLEX 22.1 atau Gurobi 11.0 dengan parameter *MIP emphasis = 1* (cari *feasible solution* cepat).
4. Jalankan *Benders subproblem* untuk validasi recourse, tambahkan *optimality cut* sampai gap $< 1\%$.

**Fase 3 — Integrasi Rolling-Horizon (Tactical-Operational Linkage)**
Sesuai Forel dan Grunow (2023), integrate MMFE dengan *rolling horizon planning* sebagai berikut:

1. Pada periode $t = 0$, generate forecast evolution $f_0^\tau$ untuk $\tau = 1, \dots, T$ dengan horizon $T = 12$ periode.
2. Solve *stochastic lot sizing* menghasilkan *production plan* $x_t^*$.
3. Pada periode $t+1$, update forecast aktual $D_1$ yang teramati, regenerasi $f_1^\tau$, dan re-optimasi.
4. Mekanisme *production recourse* memungkinkan revisi lot size pada periode aktif tanpa melanggar *capacity reservation* periode mendatang.

**Fase 4 — Penjadwalan Diskrit (Scheduling Layer)**
1. Terjemahkan *lot size* menjadi *production orders* pada work center.
2. Jalankan *short-term scheduler* (constraint programming, disjunctive scheduling) dengan sequence-dependent setup $s_{ij}$ untuk minimasi makespan.
3. Validasi dengan *dispatching rules* (FCFS, EDD, SPT) sebagai *fallback* bila solver gagal menemukan feasible solution.

**Diagram Alir Proses Keputusan:**

$$\boxed{\text{Forecast MMFE}} \rightarrow \boxed{\text{Scenario Generation}} \rightarrow \boxed{\text{Two-Stage SP}} \rightarrow \boxed{\text{Benders Cut}} \rightarrow \boxed{\text{Rolling Update}}$$

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Industri: Pabrik FMCG (Minuman Botol)

Studi kasus pada pabrik minuman ringan dengan lini produksi PET bottle ukuran 600 mL, 5 varian SKU (A, B, C, D, E). Data historis 12 periode menunjukkan permintaan dengan tren musiman dan koefisien variasi (CoV) rata-rata 0.32.

**Tabel 1. Parameter Biaya dan Kapasitas**

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Setup cost $K_t$ | 1.200.000 | IDR/order |
| Holding cost $h_t$ | 450 | IDR/unit/bulan |
| Backorder cost $b_t$ | 2.500 | IDR/unit/bulan |
| Production cost $c_t$ | 3.500 | IDR/unit |
| Kapasitas mesin | 50.000 | unit/bulan |
| Demand lead time | 1 | bulan |

**Tabel 2. Forecast Evolution MMFE untuk Varian A (Demand mean, std-dev)**

| Periode $t$ | $\mu_t$ (unit)

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
