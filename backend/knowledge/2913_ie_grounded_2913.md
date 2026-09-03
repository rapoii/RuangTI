# 2913 — Model Optimisasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan penentuan ukuran lot (*lot sizing*) dan penjadwalan produksi (*scheduling*) merupakan salah satu keputusan taktis-operasional paling krusial dalam sistem manufaktur dan rantai pasok modern. Lead Researchers (2025) dalam publikasinya di *Cuestiones de fisioterapia* menyoroti bahwa integrasi antara keputusan *lot sizing* dengan *scheduling* secara simultan masih menghadapi gap besar ketika demand bersifat stochastic, sehingga pendekatan deterministik konvensional seperti Wagner-Whitin atau Silver-Meal tidak mampu menangkap nilai riil dari fleksibilitas replan (Lead Researchers, 2025). Dalam konteks industri nyata—misalnya industri FMCG, komponen otomotif, dan baja lembaran dingin—fluktuasi permintaan musiman, *bullwhip effect*, serta ketidakpastian *lead time* supplier menyebabkan biaya persediaan, *setup*, dan *backorder* melonjak signifikan bila hanya mengandalkan rencana deterministik.

Urgensi ekonominya cukup jelas. Studi Forel & Grunow (2023) yang dipublikasikan di *Production and Operations Management* menunjukkan bahwa pendekatan akademik yang mempertimbangkan ketidakpastian permintaan dalam *lot sizing* masih jarang diadopsi di praktik industri; perusahaan lebih memilih model deterministik yang dikombinasikan dengan *rolling-horizon planning* dan pembaruan ramalan berkala (Forel & Grunow, 2023, https://doi.org/10.1111/poms.13881). Paper tersebut membuktikan secara empiris melalui simulasi ekstensif pada data sintetis maupun *real-world* bahwa model *forecast evolution*—khususnya Martingale Model of Forecast Evolution (MMFE)—secara signifikan mampu mereduksi biaya aktual karena menangkap dinamika revisi forecast yang menjadi esensi rolling-horizon (Forel & Grunow, 2023). Lebih jauh, Lead Researchers (2025) mengusulkan kerangka hibrida yang memadukan *stochastic programming* (untuk menangkap ketidakpastian demand) dengan *constraint programming* atau *mixed-integer scheduling* (untuk menangkap sequence-dependent setup time dan kapasitas mesin), sehingga diperoleh kebijakan produksi yang lebih robust terhadap variasi pasar. Adopsi model hibrida ini menjadi semakin penting di era Industry 4.0 di mana visibilitas permintaan melalui IoT dan ERP memungkinkan keputusan perencanaan dilakukan secara near-real-time (Lead Researchers, 2025).

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Deterministik Dasar (Wagner-Whitin)

Model referensi yang diperluas Lead Researchers (2025) berangkat dari formulasi Wagner-Whitin klasik. Indeks $t$ merepresentasikan periode perencanaan, $y_t$ variabel biner yang bernilai 1 jika *setup* dilakukan di periode $t$, $x_{t}$ kuantitas produksi, $I_t$ inventaris akhir periode, dan $d_t$ permintaan. Fungsi tujuan:

$$
Z^{WW} = \min \sum_{t=1}^{T} \left( s_t \, y_t + c_t \, x_t + h_t \, I_t + p_t \, B_t \right)
$$

dengan kendala keseimbangan persediaan:

$$
I_{t-1} + x_t = d_t + I_t, \quad \forall t \in \{1,\ldots,T\}
$$

dan kendali logis:

$$
x_t \leq M \, y_t, \quad y_t \in \{0,1\}, \quad I_t, B_t \geq 0
$$

dengan $M$ adalah big-M (kapasitas maksimum), $s_t$ biaya *setup*, $c_t$ biaya produksi variabel, $h_t$ biaya simpan, dan $p_t$ biaya *backorder* per unit (Lead Researchers, 2025).

### 2.2 Formulasi Stokastik Dua Tahap (*Two-Stage Stochastic Programming*)

Untuk menangani ketidakpastian, Lead Researchers (2025) merumuskan *lot sizing* dalam kerangka *two-stage recourse*. Himpunan skenario $\Omega$ dengan probabilitas $\pi_\omega$, variabel *first-stage* $(y_t, x_t)$ ditetapkan sebelum realisasi demand, sedangkan variabel *recourse* $(\hat{x}_{t\omega}, \hat{I}_{t\omega}, \hat{B}_{t\omega})$ menyesuaikan diri terhadap skenario aktual:

$$
Z^{SP} = \min \sum_{t=1}^{T} \left( s_t y_t + c_t x_t \right) + \sum_{\omega \in \Omega} \pi_\omega \left[ \sum_{t=1}^{T} \left( h_t \hat{I}_{t\omega} + p_t \hat{B}_{t\omega} + c_t^{+} \hat{x}_{t\omega}^{+} - c_t^{-} \hat{x}_{t\omega}^{-} \right) \right]
$$

terhadap kendala:

$$
\hat{I}_{t-1,\omega} + x_t + \hat{x}_{t\omega}^{+} = d_{t\omega} + \hat{B}_{t\omega} + \hat{I}_{t\omega}, \quad \forall t,\omega
$$

$$
0 \leq \hat{x}_{t\omega}^{+} \leq M^{+}, \quad 0 \leq \hat{x}_{t\omega}^{-} \leq M^{-}
$$

dengan $c_t^{+}$ adalah biaya produksi darurat (overtime) dan $c_t^{-}$ adalah biaya diskon/penalti kurangi produksi. Pendekatan ini menangkap konsep *production recourse* yang juga dieksplorasi oleh Forel & Grunow (2023) untuk menjembatani celah antara model akademik dan praktik rolling-horizon industri (Forel & Grunow, 2023).

### 2.3 Martingale Model of Forecast Evolution (MMFE)

Forel & Grunow (2023) merumuskan MMFE sebagai berikut. Misalkan $F_{t|\tau}$ adalah ramalan permintaan pada horizon $\tau$ yang dibuat di periode $\tau$ untuk periode $t$. Evolusi ramalan memenuhi:

$$
F_{t|\tau+1} = F_{t|\tau} + \epsilon_{t,\tau+1}, \quad \mathbb{E}[\epsilon_{t,\tau+1} \mid \mathcal{F}_\tau] = 0
$$

dengan $\mathcal{F}_\tau$ filtrasi informasi hingga periode $\tau$. Ini menjamin *unbiasedness* ramalan. Lebih jauh, *variance* peningkatan forecast:

$$
\mathrm{Var}(F_{t|\tau+1}) = \mathrm{Var}(F_{t|\tau}) + \sigma_{\epsilon}^2
$$

atau dalam bentuk *decomposition* yang digunakan Forel & Grunow (2023):

$$
F_{t|\tau+1} = F_{t|\tau} + (F_{t-1|\tau+1} - F_{t-1|\tau}) \cdot \rho + \eta_{t,\tau+1}
$$

dengan $\rho$ koefisien korelasi serial dan $\eta$ inovasi independen. Model ini secara elegan menggantikan asumsi *perfect information* dengan *forecast evolution path* yang realistis (Forel & Grunow, 2023, https://doi.org/10.1111/poms.13881).

### 2.4 Formulasi Hibrida Lot-Sizing + Scheduling

Lead Researchers (2025) mengusulkan model hibrida GLSP (Generalized Lot Sizing and Scheduling Problem) dengan ekstensi stokastik. Indeks tambahan $k$ merepresentasikan item, $m$ mesin, $r$ urutan pada mesin. Fungsi tujuan:

$$
Z^{H} = \min \sum_{k,m,r} \left( sc_{kr} \, z_{kr} + \sum_{t,\omega} \pi_\omega \left( hc_{kt} \, I_{kt\omega} + pc_{kt} \, B_{kt\omega} + ot_{mt\omega} \right) \right)
$$

dengan $sc_{kr}$ biaya *sequence-dependent setup*, $z_{kr}$ variabel biner penanda urutan, dan kendala *disjunctive scheduling*:

$$
z_{k1} + z_{k2} \leq 1 \quad \text{(satu item per mesin pada slot waktu)}
$$

$$
\sum_{k} z_{kr} \leq 1 \quad \forall r
$$

Kendala kapasitas *time-bucket*:

$$
\sum_{k} \left( \frac{\hat{x}_{kt\omega}^{+}}{R_{mt}} + st_{kmr} z_{kr} \right) \leq 1, \quad \forall t, m, \omega
$$

dengan $R_{mt}$ *routing rate* mesin dan $st_{kmr}$ waktu setup sequence-dependent. Pendekatan ini menggunakan *cutting plane* dan *branch-and-price* untuk tractability (Lead Researchers, 2025).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model hibrida Lead Researchers (2025) di industri mengikuti SOP 7-tahap berikut:

**Tahap 1 — Pengumpulan Data Historis & Validasi Forecast.** Minimal 36 bulan data penjualan, *bill of materials*, kapasitas mesin, dan *lead time* dikumpulkan. Outlier dideteksi dengan metode Tukey-fence atau STL-decomposition, kemudian demand *decomposition* (level + trend + seasonality + residual) menghasilkan baseline forecast menggunakan Holt-Winters atau Prophet (Forel & Grunow, 2023).

**Tahap 2 — Estimasi Parameter MMFE.** Dengan data historis, hitung $\rho$ (autokorelasi residual), $\sigma_\epsilon^2$ (variansi error), dan validasi *martingale property* menggunakan Ljung-Box test. Implementasi dalam Python `statsmodels` atau R `forecast` package (Forel & Grunow, 2023).

**Tahap 3 — Pembangkitan Skenario.** Gunakan Monte Carlo simulation (10.000 run) untuk membangkitkan *scenario tree* dengan reduksi menggunakan *Kantorovich distance* atau *forward selection* hingga tersisa 50–200 skenario representatif. Setiap skenario $\omega$ membawa path evolusi forecast $F_{t|\tau(\omega)}$ (Lead Researchers, 2025).

**Tahap 4 — Formulasi MIP Stokastik.** Definisikan variabel *first-stage* (sebelum demand realized) dan *recourse* (setelahnya). Encode dalam GAMS, AMPL, atau Pyomo dengan solver CPLEX/Gurobi. Gunakan *Benders decomposition* untuk memisahkan keputusan lot sizing (master) dan scheduling (subproblem).

**Tahap 5 — Validasi & Backtesting.** Validasi out-of-sample menggunakan *rolling