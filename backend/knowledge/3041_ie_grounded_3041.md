# 3041 — Model Optimasi Stokastik Hibrida untuk Masalah Lot Sizing dan Penjadwalan Produksi pada Lingkungan Peramalan Bergulir

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem  
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem*. *Cuestiones de fisioterapia*, 54(02), 2007–2018. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)  
**Sitasi Pendukung:** Forel, A., & Grunow, M. (2023). *Dynamic stochastic lot sizing with forecast evolution in rolling‐horizon planning*. *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan *lot sizing and scheduling* (LSL) merupakan salah satu pilar keputusan taktis-operasional dalam sistem manufaktur modern yang menentukan kuantitas produksi, urutan eksekusi pada lini, serta timing replenishment untuk memenuhi permintaan pasar yang fluktuatif. Dalam praktik industri, kompleksitas keputusan ini berlipat ganda ketika permintaan bersifat *stokastik*—yakni ketika nilai permintaan di masa depan tidak diketahui secara deterministik tetapi memiliki distribusi probabilitas yang berevolusi seiring waktu. Lead Researchers (2025) dalam papernya yang berjudul "A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem" menyoroti urgensi pengembangan model hibrida yang mampu mengintegrasikan kekuatan optimasi stokastik dengan fleksibilitas penjadwalan untuk menangkap dinamika реального rantai pasok [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018).

Kesenjangan fundamental antara riset akademis dan praktik industri menjadi titik pijak kontribusi ilmiah Forel & Grunow (2023) yang dipublikasikan di *Production and Operations Management*. Mereka secara eksplisit mendokumentasikan bahwa "academic approaches considering demand uncertainty in lot sizing are seldom used in practice" [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881). Industri secara dominan mengimplementasikan model deterministik (misalnya MRP klasik, Wagner–Whitin, atau Silver–Meal) dalam kerangka *rolling-horizon planning* (RHP) dengan pembaruan praktyan berkala—biasanya mingguan atau harian. Padahal, mengabaikan evolusi praktyan dalam formulasi stokastik menyebabkan *suboptimality* struktural: keputusan lot sizing periode awal "terkunci" (*frozen*) sebelum informasi permintaan baru tersedia, sehingga peluang recourse (replanning) tidak dimanfaatkan secara optimal.

Urgensi industri ini dapat dikuantifikasi. Dalam lingkungan *make-to-stock* (MTS) pada industri FMCG, *setup cost* (S) dapat mencapai 10–50 kali *holding cost per unit per period* (h), sehingga keputusan lot sizing berdampak langsung pada *total cost of ownership*. Sebagai contoh, pada lini pengemasan dengan S = Rp 8.000.000 per setup, h = Rp 350/unit/minggu, dan permintaan rata-rata 25.000 unit/minggu dengan CV permintaan 25%, kesalahan satu keputusan lot sizing dapat membengkakkan biaya inventaris atau *stockout* hingga 5–12% dari *cost of goods sold*. Karena itulah Forel & Grunow (2023) mengembangkan metodologi lot sizing stokastik yang *adaptif* terhadap evolusi praktyan, dengan menggunakan *Martingale Model of Forecast Evolution* (MMFE) yang diperkenalkan oleh Heath & Jackson (1994) sebagai dasar probabilistik [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881).

Konteks aplikasi lintas industri mencakup: (i) perakitan otomotif di mana *mixed-model production* membutuhkan integrasi LSL dengan *sequence-dependent setup*; (ii) industri proses (kimia, makanan & minuman) dengan *changeover cost* tinggi; (iii) manufaktur *job-shop* dengan pesanan Make-to-Order (MTO); dan (iv) rantai pasok farmasi di mana *shelf-life* menambah dimensi keputusan. Modul 3041 ini disusun untuk menjembatani kesenjangan tersebut melalui formulasi matematis yang rigorous, prosedur operasional yang terstandarisasi, dan studi kasus kuantitatif yang dapat direplikasi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Lot Sizing Deterministik sebagai Baseline

Formulasi dasar *capacitated lot sizing problem* (CLSP) deterministik untuk horizon $T$ periode dinyatakan sebagai berikut. Parameter: $d_t$ = permintaan periode $t$; $s_t$ = biaya setup; $c_t$ = biaya produksi per unit; $h_t$ = biaya holding per unit per periode; $K_t$ = kapasitas maksimum produksi periode $t$. Variabel keputusan: $y_t \in \{0,1\}$ (indikator setup), $Q_t \geq 0$ (kuantitas produksi), $I_t \geq 0$ (inventaris akhir periode).

$$
\min_{y,Q,I} \; \sum_{t=1}^{T}\left(s_t y_t + c_t Q_t + h_t I_t\right)
$$

$$
\text{s.t.} \quad I_t = I_{t-1} + Q_t - d_t, \quad \forall t = 1,\dots,T
$$

$$
Q_t \leq K_t y_t, \quad \forall t
$$

$$
y_t \in \{0,1\}, \; Q_t, I_t \geq 0, \; I_0 = I_0^{\text{init}}
$$

Formulasi ini bersifat NP-hard (Maes & Van Wassenhove, 1988) dan menjadi dasar yang diperluas dalam paper Lead Researchers (2025) untuk konteks hibrida stokastik [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018).

### 2.2 Formulasi Stokastik dengan Martingale Model of Forecast Evolution (MMFE)

Forel & Grunow (2023) mengusulkan formulasi two-stage stochastic programming yang *coupled* dengan mekanisme RHP. Dalam MMFE, praktyan permintaan pada periode $t+1$ yang dibuat pada periode $t$ didefinisikan sebagai:

$$
\tilde{d}_{t+1} = \tilde{d}_t + \tilde{\epsilon}_{t+1}, \quad \mathbb{E}[\tilde{\epsilon}_{t+1} \mid \mathcal{F}_t] = 0, \quad \text{Var}(\tilde{\epsilon}_{t+1}) = \sigma_{t+1}^2
$$

dengan $\mathcal{F}_t$ adalah filtration informasi hingga periode $t$, dan $\tilde{\epsilon}_{t+1}$ adalah *forecast error* yang *martingale difference sequence*. Evolusi praktyan pada horizon panjang $H$ menghasilkan *scenario tree* dengan branching factor yang dapat dikontrol menggunakan *scenario reduction* (Heitsch & Römisch, 2009).

Formulasi *expected cost* lot sizing dengan recourse untuk horizon panjang menjadi:

$$
\min \; \mathbb{E}\left[\sum_{t=1}^{H} s_t y_t + \sum_{t=1}^{H} c_t Q_t(\xi_t) + \sum_{t=1}^{H} h_t I_t(\xi_t) \right]
$$

dengan $\xi_t$ menyatakan skenario permintaan hingga periode $t$, dan recourse $Q_t(\xi_t)$ merepresentasikan keputusan replan setelah realisasi $\xi_t$ diobservasi. Strategi *rolling-horizon* dieksplisitkan melalui parameter: $f$ = *freeze horizon* (periode dengan keputusan locked), $p$ = *planning horizon* (periode perencanaan ke depan), dan $r$ = *replanning interval*.

### 2.3 Model Hibrida: Integrasi Stochastic Programming dengan Constraint Programming & Heuristik

Paper Lead Researchers (2025) [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018) mengusulkan arsitektur hibrida yang menggabungkan tiga paradigma optimasi: (a) *stochastic programming* untuk keputusan lot sizing taktis di bawah ketidakpastian permintaan; (b) *constraint programming* (CP) untuk penjadwalan detail dengan *sequence-dependent setup* pada level shop-floor; dan (c) *metaheuristic* (misalnya simulated annealing atau genetic algorithm) untuk eksplorasi ruang solusi global.

Fungsi objektif hibrida dapat ditulis sebagai:

$$
\min_{y,Q,I,\pi} \; \mathbb{E}_\xi \left[ \sum_{t=1}^{T}\left(s_t y_t + c_t Q_t + h_t I_t\right) + \sum_{j=1}^{M} \sum_{k=1}^{K_j} \rho_{jk}(\pi) \right]
$$

dengan $\pi$ merepresentasikan variabel urutan penjadwalan, $\rho_{jk}(\pi)$ adalah *sequence-dependent changeover cost* antara job $j$ dan $k$, dan $M$ adalah jumlah job. Kopling antara layer taktis dan operasional difasilitasi oleh *capacity profile* yang diturunkan dari keputusan $y_t$ dan $Q_t$.

### 2.4 Sample Average Approximation (SAA) dan L-Shaped Decomposition

Karena ukuran scenario tree meledak secara eksponensial, Forel & Grunow (2023) menggunakan SAA: untuk $N$ sampel i.i.d. $\xi^{(1)}, \dots, \xi^{(N)}$, masalah deterministik ekuivalennya:

$$
\min_{y \in \mathcal{Y}} \; \frac{1}{N}\sum_{n=1}^{N} Q(y, \xi^{(n)})
$$

dengan $\mathcal{Q}(y, \xi^{(n)}}$ adalah *optimal recourse value* untuk keputusan first-stage $y$ di bawah skenario $\xi^{(n)}$. Lower bound didekati dengan *L-shaped method* (Benders decomposition) atau *Progressive Hedging Algorithm* (Rockafellar & Wets, 1991) untuk masalah mixed-integer. "Extensive simulations on both synthetic and real-world data show the value of forecast evolution models" yang dilaporkan oleh Forel & Grunow (2023) menjadi bukti empiris efektivitas pendekatan ini [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (S