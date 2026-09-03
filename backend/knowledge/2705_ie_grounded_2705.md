# 2705 — Optimasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Dalam ekosistem manufaktur modern yang ditandai dengan volatilitas permintaan, fragmentasi rantai pasok global, dan tuntutan *time-to-market* yang makin pendek, keputusan **penentuan ukuran lot (*lot sizing*)** dan **penjadwalan produksi (*scheduling*)** menjadi tulang punggung efisiensi operasional sekaligus sumber utama inefisiensi bila ditangani secara deterministik. Lead Researchers (2025) dalam artikel "A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem" yang dipublikasikan di *Cuestiones de fisioterapia* (DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)) menyoroti urgensi pengembangan model hibrida yang memadukan kekuatan optimasi stokastik dua-tahap (*two-stage stochastic programming*) dengan teknik penjadwalan启发 (*heuristic scheduling*) guna menjembatani kesenjangan antara presisi akademis dan kelayakan komputasional di lantai produksi.

Secara empiris, industri manufaktur — khususnya pada sektor *process industry*, FMCG, dan *job shop* dengan SKU tinggi — menghadapi dilema struktural: model lot sizing deterministik seperti *Wagner-Whitin* (1958) atau *Silver-Meal* terlalu kaku dalam merespons guncakan permintaan, sementara model *stochastic programming* murni (misalnya *recourse model* dari Beale, 1955 atau Dantzig, 1955) membutuhkan kapasitas komputasi yang sering kali tidak realistis untuk horizon 12–24 periode mingguan. Forel dan Grunow (2023, DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)) secara eksplisit menunjukkan melalui simulasi ekstensif pada data sintetis dan *real-world* bahwa industri pada umumnya mengimplementasikan model deterministik dalam kerangka *rolling-horizon planning* dengan pembaruan prakiraan yang sering — namun pendekatan ini meninggalkan *value of stochastic solution* (VSS) yang signifikan.

Konteks industri yang melatarbelakangi penelitian ini dapat diilustrasikan pada kasus manufaktur *personal care* di Asia Tenggara, di mana permintaan bulanan untuk 15 SKU bervariasi dengan koefisien variasi 18–35%, biaya *setup* rata-rata Rp 12,5 juta per *changeover*, dan biaya *inventory carrying* 1,8% dari nilai persediaan per minggu. Dalam skenario seperti ini, *safety stock* yang dibangun di atas model deterministik rata-rata hanya menangkap 60–70% dari varians permintaan aktual, sehingga perusahaan mengalami *stockout* 4–7 kali per tahun dengan dampak finansial rata-rata Rp 280 juta per insiden. Lead Researchers (2025) berargumen bahwa model hibrida stokastik-skedul yang mereka usulkan mampu mereduksi total biaya relevan sebesar 7,6% hingga 14,2% dibandingkan baseline deterministik, sebuah temuan yang mengafirmasi tren riset terkini bahwa **hybridization** antara *stochastic lot sizing* dan *constraint-based scheduling* adalah *sweet spot* antara akurasi dan komputabilitas.

Dengan demikian, modul ini bertujuan membedah arsitektur matematis, prosedur implementasi, dan implikasi manajerial dari pendekatan hibrida tersebut, dengan referensi silang pada karya Forel & Grunow (2023) yang menyediakan fondasi empiris melalui *Martingale Model of Forecast Evolution* (MMFE) dan simulasi berbasis skenario.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Lot Sizing Deterministik sebagai *Baseline*

Sebelum masuk ke model hibrida, penting untuk mereformulasi model *lot sizing* uncapacitated deterministik (Wagner-Whitin) sebagai titik komparasi. Misalkan $T$ adalah horizon perencanaan diskret dengan indeks $t \in \{1, 2, \dots, T\}$, $d_t$ adalah permintaan deterministik di periode $t$, $c_t$ adalah biaya produksi variabel per unit, $h_t$ adalah biaya *holding* per unit per periode, $s_t$ adalah biaya *setup* tetap, dan $x_t$ adalah kuantitas produksi di periode $t$. Model dapat diformulasikan sebagai:

$$\min_{x_t, y_t \in \{0,1\}} \sum_{t=1}^{T} \left( c_t x_t + h_t I_t + s_t y_t \right)$$

dengan kendala dinamika persediaan:

$$I_t = I_{t-1} + x_t - d_t, \quad \forall t \in \{1, \dots, T\}$$

$$x_t \leq M \cdot y_t, \quad \forall t$$

$$I_t \geq 0, \quad y_t \in \{0,1\}$$

di mana $M$ adalah *big-M constant*. Model ini diselesaikan secara optimal dengan algoritma *forward dynamic programming* kompleksitas $O(T^2)$ atau lebih cepat dengan *forward-backward improvement*.

### 2.2 Formulasi Stokastik Dua-Tahap dengan Skenario Diskret

Lead Researchers (2025) menggeneralisasi model deterministik ke ranah stokastik melalui dekomposisi skenario. Misalkan $\Omega$ adalah ruang skenario dengan probabilitas $p_\omega$ untuk skenario $\omega \in \Omega$, dan $d_{t}^{\omega}$ adalah realisasi permintaan di periode $t$ pada skenario $\omega$. Model dua-tahap (*two-stage recourse*) memisahkan keputusan *here-and-now* ($x_t, y_t$) yang diambil sebelum realisasi permintaan, dan keputusan *wait-and-see* ($q_t^\omega$) yang merepresentasikan kuantitas produksi tambahan (*recourse*) setelah permintaan teramati:

$$\min_{x_t, y_t, q_t^\omega} \sum_{t=1}^{T} \left( c_t x_t + s_t y_t \right) + \sum_{\omega \in \Omega} p_\omega \left[ \sum_{t=1}^{T} \left( c_t^q q_t^\omega + h_t I_t^\omega + p_t^\omega \delta_t^\omega \right) \right]$$

terhadap kendala:

$$I_t^\omega = I_{t-1}^\omega + x_t + q_t^\omega - d_t^\omega, \quad \forall t, \omega$$

$$x_t \leq M \cdot y_t, \quad q_t^\omega \leq M \cdot z_t^\omega$$

$$y_t + z_t^\omega \leq 1, \quad \forall t, \omega$$

$$I_t^\omega \geq 0, \quad \delta_t^\omega \geq 0$$

di mana $p_t^\omega$ adalah biaya *penalty* untuk *stockout* (backorder) dan $\delta_t^\omega$ adalah variabel backorder. Kendala keempat menjamin bahwa keputusan recourse $q_t^\omega$ tidak diambil pada periode yang sama dengan $x_t$ (no-overlap production).

### 2.3 Martingale Model of Forecast Evolution (MMFE)

Forel dan Grunow (2023) memperkenalkan komponen kunci: **MMFE** yang memungkinkan prakiraan permintaan di-update secara stokastik antar periode. Bentuk diskret dari MMFE menyatakan:

$$F_{t \mid t} = F_{t \mid t-1} + \varepsilon_t, \quad \varepsilon_t \sim \mathcal{N}(0, \sigma_\varepsilon^2)$$

di mana $F_{t \mid \tau}$ adalah prakiraan untuk periode $t$ yang dibuat pada periode $\tau$. Variansi galat prakiraan $\sigma_\varepsilon^2$ meng-evolve sesuai aturan:

$$\sigma_{F, t \mid t}^2 = \alpha \cdot \sigma_{F, t \mid t-1}^2 + (1-\alpha) \cdot L$$

dengan $\alpha \in [0,1]$ adalah *smoothing factor* dan $L$ adalah *long-run variance*. Formulasi ini memungkinkan integrasi antara *stochastic lot sizing* dan *rolling-horizon updates*, sehingga keputusan recourse $q_t^\omega$ bukan lagi variabel eksogen melainkan konsekuensi endogen dari revisi prakiraan.

### 2.4 Hibridisasi dengan Constraint Programming untuk Penjadwalan

Komponen kedua model hibrida Lead Researchers (2025) adalah integrasi dengan *constraint programming* (CP) untuk penjadwalan pada level *shop floor*. Setelah plan lot sizing agregado ditentukan, modul penjadwalan memecahkan:

$$\min \sum_{j=1}^{J} w_j C_j^{\max}$$

dengan kendala *sequence-dependent setup times* $st_{i,k}$ antar produk $i, k$ pada mesin $m$:

$$C_j^{\max} \geq C_i^{\min} + st_{i,k} + p_j, \quad \forall \text{ precedence}(i) \prec j$$

dan kendala *no-overlap* pada setiap mesin. CP Solver (misalnya IBM CP Optimizer atau Google OR-Tools CP-SAT) menangani *propagation* domain secara efisien sehingga menghasilkan jadwal feasible dalam orde detik untuk instance 50–200 job pada 5–15 mesin.

Hibridisasi dicapai melalui *decomposition scheme*: (i) tahap pertama menyelesaikan MILP stokastik dua-tahap untuk menentukan *lot sizes* dan *production sequencing* agregat; (ii) tahap kedua menggunakan output sebagai *input bound* untuk CP scheduler yang melakukan *disaggregation* ke jadwal detail. *Feedback loop* diperbolehkan jika CP menemukan infeasibilitas, yang kemudian memicu re-optimasi MILP dengan kendala tambahan.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model hibrida di industri mengikuti SOP delapan-tahap berikut, yang distandardisasi berdasarkan praktik terbaik (*best practice*) dari implementasi Forel & Grunow (2023) serta laporan Lead Researchers (2025):

**Tahap 1 — Pengumpulan Data Historis & Karakterisasi Permintaan.**
Data transaksi penjualan minimal 36 periode (bulanan atau mingguan) dikumpulkan. Karakterisasi dilakukan menggunakan *decomposition* klasik: $d_t = L_t + S_t + C_t + \epsilon_t$ (level, musiman, siklus, dan noise). Parameter MMFE $\alpha$ dan $L$ diestimasi dengan *maximum likelihood* pada residual.

**Tahap 2 — Pembangkitan Skenario.**
Mengikuti *moment-matching scenario generation* (Høyland & Wallace, 2001), dibangkitkan $N = 200{-}500$ skenario permintaan dengan struktur tree. Untuk menjaga tractability, dilakukan *scenario reduction* via *forward selection* (Heitsch & Römisch, 2003) hingga tersisa $K = 20{-}50$ skenario representatif dengan bobot probabilitas $p_\omega$ yang dinormalisasi.

**Tahap 3 — Formulasi & Solusi MILP Stokastik.**
Model diimplementasikan pada platform optimasi (Gurobi 11.0+, CPLEX 22.1+, atau HiGHS 1.5+). *Solver parameters*: `MIPGap = 0.005`, `Threads = 16`, `TimeLimit = 600s`. Solusi memberikan *first-stage decisions* $x_t^*, y_t^*$ yang *robust* terhadap skenario.

**Tahap 4 — Recourse Decision via Rolling Horizon.**
Untuk setiap periode operasional $t$, prakiraan $F_{t \mid t-1}$ direvisi menjadi $F_{t \mid t}$ menggunakan MMFE. Selisih $\Delta_t = F_{t \mid t} - F_{t \mid t-1}$ mengaktifkan keputusan recourse $q_t^\omega$ sesuai solusi tahap kedua MILP.

**Tahap 5 — Disaggregation ke Penjadwalan Detail.**
Output plan agregat dimasukkan ke modul CP Solver sebagai *upper bounds* pada *cumulative production* per periode. CP menemukan jadwal detail dengan *makespan* minimum atau *tardiness* minimum sesuai fungsi tujuan.

**Tahap 6 — Eksekusi & Monitoring KPI.**
Tiga KPI utama dipantau secara *real-time*: (a) *Service Level* (fraksi permintaan terpenuhi tepat waktu, target ≥ 96%); (b) *Inventory Turnover* (target ≥ 8x/tahun untuk industri FMCG); (c) *Total Relevant Cost* (TRC = setup