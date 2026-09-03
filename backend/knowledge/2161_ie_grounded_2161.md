# 2161 — Model Optimasi Stokastik Hybrid untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Forel, A., & Grunow, M. (2023). *Dynamic stochastic lot sizing with forecast evolution in rolling‐horizon planning. Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Masalah penentuan ukuran lot (*lot sizing*) dan penjadwalan produksi (*scheduling*) merupakan salah satu permasalahan optimasi kombinatorial paling krusial dalam sistem manufaktur modern. Lead Researchers (2025) dalam publikasinya di *Cuestiones de fisioterapia* menyoroti bahwa pada lingkungan produksi riil—di mana permintaan bersifat stokastik, kapasitas mesin terbatas, dan biaya setup signifikan—model deterministik klasik seperti *Wagner-Whitin* atau *Silver-Meal* tidak mampu merepresentasikan dinamika ketidakpastian secara memadai. Hal ini menimbulkan *planning fallacy* struktural: manajer produksi cenderung过度 produksi (*overproduction*) atau kekurangan stok (*stockout*) ketika input deterministik tidak mencerminkan variansi permintaan aktual.

Dalam konteks industri manufaktur kontemporer (misalnya industri FMCG, otomotif, semikonduktor, dan farmasi), urgensi permasalahan ini makin tinggi seiring dengan fenomena *demand volatility* yang dipercepat oleh disrupsi rantai pasok pasca-pandemi, fragmentasi pasar (*market segmentation*), dan personalisasi produk. Lead Researchers (2025) berargumen bahwa pendekatan *hybrid*—yang menggabungkan formulasi program stokastik dua-tahap (*two-stage stochastic programming*) dengan metode heuristik atau metaheuristik seperti *Simulated Annealing*, *Genetic Algorithm*, atau *Variable Neighborhood Search*—menawarkan kompromi terbaik antara *tractability* komputasional dan kualitas solusi. Pendekatan ini secara eksplisit memodelkan skenario permintaan masa depan, sambil mempertahankan kemampuan penjadwalan detail pada level mesin.

Forel dan Grunow (2023) dalam *Production and Operations Management* memberikan justifikasi empiris yang kuat melalui studi pada data industri nyata: mereka menemukan bahwa model deterministik dengan *rolling-horizon*—meskipun populer di praktik—memiliki gap biaya aktual hingga 8–15% dibanding model stokastik yang mengintegrasikan *forecast evolution*. Model Martingale (*Martingale Model of Forecast Evolution*/MMFE) yang mereka usulkan memungkinkan prediksi evolusi permintaan secara probabilistik, yang kemudian menjadi input natural untuk model hybrid Lead Researchers (2025). Dengan demikian, terdapat konvergensi metodologis antara kedua paper: yang pertama memberikan kerangka optimasi stokastik komputasional, sedangkan yang kedua menyediakan mekanisme peramalan permintaan yang konsisten dengan praktik *rolling-horizon planning*. Sinergi keduanya sangat relevan untuk industri yang beroperasi dengan siklus perencanaan mingguan/bulanan namun menghadapi permintaan harian yang berfluktuasi tajam.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Dasar Lot Sizing Deterministik

Model dasar *capacitated lot sizing problem* (CLSP) dapat diformulasikan sebagai berikut. Misalkan $T$ adalah jumlah periode perencanaan, $I$ adalah jumlah produk, dan $K$ adalah jumlah mesin. Parameter-parameter model meliputi:

- $d_{it}$: permintaan deterministik produk $i$ pada periode $t$
- $c_i$: biaya produksi per unit produk $i$
- $h_i$: biaya penyimpanan per unit produk $i$ per periode
- $s_i$: biaya setup produk $i$
- $p_i$: waktu produksi per unit produk $i$
- $C_t$: kapasitas tersedia mesin pada periode $t$

Variabel keputusan:
- $x_{it} \geq 0$: jumlah produksi produk $i$ pada periode $t$
- $y_{it} \in \{0,1\}$: 1 jika setup produk $i$ dilakukan pada periode $t$, 0 sebaliknya
- $I_{it} \geq 0$: inventaris akhir produk $i$ pada periode $t$

Fungsi tujuan deterministik:

$$\min Z = \sum_{t=1}^{T} \sum_{i=1}^{I} \left( c_i x_{it} + h_i I_{it} + s_i y_{it} \right)$$

Tunduk pada kendala:

$$\sum_{i=1}^{I} p_i x_{it} \leq C_t, \quad \forall t$$

$$I_{i,t-1} + x_{it} - I_{it} = d_{it}, \quad \forall i, t$$

$$x_{it} \leq M \cdot y_{it}, \quad \forall i, t$$

$$x_{it}, I_{it} \geq 0; \quad y_{it} \in \{0,1\}$$

dengan $M$ adalah bilangan besar (*big-M*).

### 2.2 Ekstensi Stokastik Dua-Tahap (Two-Stage Stochastic Programming)

Lead Researchers (2025) memperluas model deterministik menjadi program stokastik dua-tahap. Permintaan $D_{it}$ menjadi variabel acak dengan realisasi $\xi$ di setiap skenario $\omega \in \Omega$. Keputusan *first-stage* (produksi dan setup) diambil sebelum realisasi permintaan, sedangkan keputusan *recourse* (penjadwalan ulang, overtime, subcontracting) diambil setelahnya.

$$Z^* = \min_{x,y} \mathbb{E}_{\omega} \left[ \sum_{t=1}^{T} \sum_{i=1}^{I} \left( c_i x_{it} + s_i y_{it} \right) + Q(x,y,\xi_\omega) \right]$$

di mana fungsi recourse:

$$Q(x,y,\xi) = \min_{x^+, I^+, y^+} \sum_{t=1}^{T} \sum_{i=1}^{I} \left( h_i^+ I_{it}^+ + p_i^+ x_{it}^+ + s_i^+ y_{it}^+ + b_i B_{it} \right)$$

dengan $b_i$ adalah biaya *backorder* per unit, $B_{it}$ adalah jumlah backorder, dan superskrip $+$ menandakan variabel recourse.

### 2.3 Model Martingale untuk Evolusi Forecast (MMFE)

Forel dan Grunow (2023) mengembangkan model MMFE untuk menangkap dinamika pembaruan ramalan dalam kerangka *rolling-horizon*:

$$D_{t+1} = D_t + \varepsilon_t, \quad \varepsilon_t \sim \mathcal{N}(0, \sigma_t^2)$$

dengan kovarians antar-periode:

$$\text{Cov}(\varepsilon_t, \varepsilon_s) = \begin{cases} \sigma_t^2 & \text{jika } t = s \\ \rho_{ts} \sigma_t \sigma_s & \text{jika } t \neq s \end{cases}$$

Implementasi diskretisasi menghasilkan himpunan skenario $\{\omega_1, \omega_2, ..., \omega_S\}$ dengan probabilitas $\pi_\omega$ yang merepresentasikan lintasan permintaan masa depan.

### 2.4 Arsitektur Hybrid: Dekomposisi & Metaheuristik

Lead Researchers (2025) mengusulkan arsitektur hybrid melalui *Benders Decomposition* yang dipercepat (*accelerated Benders*) dengan *cutting plane* dari subproblem dual, dikombinasikan dengan *Genetic Algorithm* untuk memperbaiki solusi feasibel awal. Master problem (MP) memutuskan variabel lot sizing, sementara subproblem (SP) mengevaluasi kelayakan penjadwalan melalui *constraint generation*:

$$\text{MP:} \quad \min_{x,y} c^T x + s^T y + \theta$$

$$\text{s.t.} \quad \theta \geq \pi_\omega (\alpha^T u_\omega + \beta^T v_\omega), \quad \forall \omega \in \Omega_{\text{feasible}}$$

di mana $(\alpha, \beta)$ adalah dual dari SP penjadwalan. Cut Benders ditambahkan secara iteratif hingga konvergensi dengan toleransi $\epsilon = 10^{-4}$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model hybrid Lead Researchers (2025) dan MMFE Forel-Grunow (2023) di lingkungan industri mengikuti SOP delapan-tahap berikut:

**Tahap 1 – Akuisisi Data Historis.** Kumpulkan data permintaan 24–36 periode terakhir, data kapasitas mesin, dan data biaya (setup, holding, produksi, backorder). Validasi kualitas data dengan *control chart* dan deteksi outlier menggunakan *z-score* $|z| > 3$.

**Tahap 2 – Identifikasi Struktur Korelasi.** Hitung matriks korelasi permintaan antar-produk dan antar-periode. Uji stasioneritas dengan *Augmented Dickey-Fuller test*. Jika non-stasioner, lakukan differencing orde pertama.

**Tahap 3 – Estimasi Parameter MMFE.** Estimasi $\sigma_t$ dan $\rho_{ts}$ menggunakan Maximum Likelihood Estimation (MLE). Validasi model dengan *backtesting* pada 10% data terakhir.

**Tahap 4 – Pembangkitan Skenario.** Gunakan *Monte Carlo Simulation* dengan $S = 200$ skenario. Terapkan *scenario reduction* (algoritma *forward selection* dari Heitsch & Römisch) untuk menurunkan menjadi $S' = 20-30$ skenario representatif dengan probabilitas revisi $\pi_\omega'$.

**Tahap 5 – Formulasi Model Hybrid.** Bangun formulasi MIP stokastik dua-tahap menggunakan perangkat lunak optimasi (Gurobi, CPLEX, atau open-source HiGHS). Integrasikan subproblem penjadwalan melalui callback Benders.

**Tahap 6 – Kalibrasi & Validasi.** Bandingkan solusi deterministik (Wagner-Whitin), solusi stokastik tanpa MMFE, dan solusi hybrid Lead Researchers (2025) pada *hold-out sample*. Metrik evaluasi: *Expected Total Cost*, *Service Level* (Type-1 ≥ 95%), dan *Solution Time*.

**Tahap 7 – Implementasi Rolling-Horizon.** Terapkan *frozen horizon* $H_f = 1$ periode dan *planning horizon* $H_p = T$ periode. Setiap awal periode, perbarui data aktual, re-run model, dan publikasikan rencana baru.

**Tahap 8 – Monitoring & Continuous Improvement.** Pantau *Key Performance Indicators* (KPI): inventaris rata-rata, frekuensi stockout, utilitas kapasitas, dan biaya total riil vs prediksi. Lakukan *re-calibration* parameter setiap kuartal.

Diagram alir logikanya dapat direpresentasikan sebagai siklus tertutup: **Data Akuisisi → Estimasi Parameter → Pembangkitan Skenario → Optimasi Hybrid → Eksekusi Plan → Monitoring → Feedback ke Tahap 1**.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Kasus

Pertimbangkan lini produksi dengan $I = 2$ produk (A dan B) pada $T = 5$ periode di fasilitas manufaktur FMCG. Parameter biaya: $s_A = 500$, $s_B = 600$ (rupiah/setup), $h_A = 2$, $h_B = 3$ (rup