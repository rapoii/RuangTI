# 2593 — Model Optimisasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadualan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Dynamic stochastic lot sizing with forecast evolution in rolling‐horizon planning*. *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan penentuan ukuran lot (*lot sizing*) dan penjadualan produksi (*scheduling*) merupakan salah satu topik paling klasik namun terus berevolusi dalam riset operasi dan rekayasa sistem industri. Sejak formulasi seminal Wagner–Whitin (1958), komunitas akademis telah mengembangkan множество varian model — mulai dari *Economic Lot Scheduling Problem* (ELSP), *Discrete Lot-sizing and Scheduling Problem* (DLSP), *Proportional Lot-sizing Problem* (PLSP), hingga *Multi-Level Lot Sizing* (MLLSP). Lead Researchers (2025) dalam *Cuestiones de fisioterapia* (DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)) mengusulkan sebuah **model optimisasi stokastik hibrida** yang secara eksplisit mengintegrasikan dimensi stokastik (ketidakpastian permintaan) dengan dimensi kombinatorial (penjadualan pada paralel mesin dengan *sequence-dependent setup*).

Konteks industri yang melatarbelakangi riset ini sangat relevan dengan era *Industry 4.0* dan *post-pandemic supply chain resilience*. Dalam praktik nyata, terutama di sektor FMCG, farmasi, dan *consumer electronics*, perencana produksi menghadapi tiga tantangan simultan: (1) permintaan yang sangat fluktuatif dengan koefisien variasi (*CV*) yang dapat melebihi 0,5; (2) keterbatasan kapasitas multi-mesin dengan waktu set-up yang bergantung pada urutan produksi (*sequence-dependent setup times*); dan (3) kebutuhan untuk melakukan *re-planning* secara *rolling horizon* ketika informasi permintaan baru tersedia. Forel & Grunow (2023) dalam *Production and Operations Management* (DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)) menekankan bahwa **"academic approaches considering demand uncertainty in lot sizing are seldom used in practice. Industry typically implements deterministic models and accounts for uncertainties by using a rolling‐horizon planning framework with frequent forecast updates."** Pernyataan ini menggarisbawahi jurang (*gap*) antara literatur akademis dan praktik industri yang coba ditutup oleh Lead Researchers (2025) melalui pendekatan hibrida.

Urgensi ekonomis dari masalah ini dapat diukur dari biaya total kepemilikan persediaan (*total inventory cost*), yang dalam banyak perusahaan manufaktur mencapai 20–30% dari nilai inventaris tahunan. Sebagai contoh, studi kasus pada industri minuman menunjukkan bahwa optimalisasi lot sizing dan scheduling dapat menurunkan *total cost* sebesar 7–15% tanpa menambah kapasitas produksi. Dalam konteks rantai pasok global yang semakin tidak pasti (gaya *VUCA* — *Volatility, Uncertainty, Complexity, Ambiguity*), kemampuan untuk mengintegrasikan keputusan lot-sizing dan scheduling secara simultan menjadi pembeda kompetitif yang signifikan. Model hibrida yang menggabungkan *stochastic programming* dengan *metaheuristic scheduling* memungkinkan perusahaan untuk secara eksplisit menghitung *expected cost of unmet demand*, *safety stock optimal*, dan *sequence-dependent setup cost* dalam satu kerangka keputusan terpadu.

Lebih lanjut, Lead Researchers (2025) berargumen bahwa pendekatan deterministik tradisional — yang meminimasi biaya berdasarkan satu skenario permintaan (umumnya *forecast* terbaik) — menghasilkan solusi yang *optimal di kondisi rata-rata* namun *fragile* terhadap deviasi permintaan. Ketika permintaan aktual melebihi skenario yang di-*forecast*, perusahaan menghadapi *stockout cost* yang sering kali jauh lebih besar daripada *holding cost*. Sebaliknya, ketika permintaan aktual lebih rendah, terjadi *overstock* yang menurunkan *inventory turnover ratio*. Model optimisasi stokastik hibrida yang mereka usulkan secara eksplisit *memodelkan* kedua risiko ini melalui *expected value function* dengan *risk-aversion parameters*, sehingga solusi yang dihasilkan bersifat *robust terhadap ketidakpastian* sekaligus *efisien secara ekonomis*.

## 2. Landasan Teori & Formulasi Matematis

Model Lead Researchers (2025) dibangun di atas fondasi tiga pilar teoritis: (i) **programasi stokastik dua-tahap** (*two-stage stochastic programming*) untuk keputusan lot sizing, (ii) **pemrograman integer campuran** (*Mixed Integer Linear Programming* — MILP) untuk penjadualan, dan (iii) **prosedur hibrida dekomposisi** yang menjembatani keduanya. Formulasi lengkap model dapat ditulis sebagai berikut.

### 2.1 Formulasi Dasar Lot Sizing Stokastik

Misalkan $T = \{1, 2, \ldots, T\}$ adalah himpunan periode perencanaan, dan $\Omega = \{\omega_1, \omega_2, \ldots, \omega_S\}$ adalah himpunan skenario permintaan dengan probabilitas $p_\omega$. Fungsi tujuan model lot sizing stokastik dua-tahap adalah:

$$\min_{x,y} \sum_{t=1}^{T} \left[ c_t y_t + k_t x_t \right] + \mathbb{E}_\omega \left[ Q(x, \omega) \right]$$

dengan $Q(x, \omega)$ adalah fungsi recourse (tahap kedua):

$$Q(x, \omega) = \min_{I^+, I^-, s} \sum_{t=1}^{T} \left[ h_t I_{t\omega}^+ + p_t I_{t\omega}^- + r_t s_{t\omega} \right]$$

Terdapat kendala-kendala utama sebagai berikut:

1. **Kendala keseimbangan persediaan (inventory balance):**
$$I_{t\omega}^+ - I_{t\omega}^- = I_{t-1,\omega}^+ - I_{t-1,\omega}^- + x_t - d_{t\omega}, \quad \forall t \in T, \omega \in \Omega$$

2. **Kendala kapasitas:**
$$x_t \leq C_t y_t, \quad \forall t \in T$$

3. **Kendala non-negativitas dan integrality:**
$$x_t \geq 0, \quad y_t \in \{0,1\}, \quad I_{t\omega}^+, I_{t\omega}^- \geq 0$$

di mana $c_t$ adalah biaya *fixed setup*, $k_t$ adalah biaya variabel produksi per unit, $h_t$ adalah biaya *holding* per unit per periode, $p_t$ adalah *penalty cost* untuk *backorder*, dan $r_t$ adalah biaya *lost sales*. Decision variable $y_t \in \{0,1\}$ mengindikasikan apakah setup dilakukan di periode $t$ (first-stage decision), sedangkan $x_t$ adalah kuantitas produksi (second-stage recourse).

### 2.2 Formulasi Penjadualan (Scheduling)

Komponen scheduling memodelkan masalah penjadualan pada $M$ mesin paralel dengan *sequence-dependent setup times*. Misalkan $J$ adalah himpunan job (item) yang harus diproduksi, dan $\sigma$ adalah *sequence* yang ditetapkan. Model penjadualan MILP-nya adalah:

$$\min \sum_{j \in J} \sum_{k \in K} \sum_{m \in M} \tau_{j,k,m} z_{j,k,m}$$

terhadap kendala:

$$\sum_{k \in K} z_{j,k,m} = 1, \quad \forall j \in J, m \in M$$

$$\sum_{j \in J} z_{j,k,m} = 1, \quad \forall k \in K, m \in M$$

$$\sum_{m \in M} z_{j,k,m} - \sum_{m \in M} z_{k,j,m} = z_{j,k,m} - z_{k,j,m}, \quad \forall j, k \in J$$

di mana $\tau_{j,k,m}$ adalah *sequence-dependent setup time* dari job $j$ ke job $k$ pada mesin $m$, dan $z_{j,k,m}$ adalah variabel biner yang bernilai 1 jika job $j$ mendahului job $k$ pada mesin $m$.

### 2.3 Prosedur Hibrida: Benders-Like Decomposition

Lead Researchers (2025) mengusulkan prosedur dekomposisi yang mereka sebut *Hybrid Stochastic-Lot-Scheduling (HSLS)*, yang menggabungkan *L-shaped method* (Benders decomposition) untuk lot sizing dengan *rolling-horizon heuristic* untuk scheduling. Master problem (MP) menyelesaikan keputusan lot sizing dengan recourse approximation:

$$z_{MP} = \min \sum_t c_t y_t + \theta$$

subject to $\theta \geq \mathbb{E}_\omega[\pi_\omega^T (b_\omega - F x)]$, di mana $\pi_\omega$ adalah dual variable dari subproblem pada skenario $\omega$.

### 2.4 Integrasi dengan MMFE

Berdasarkan Forel & Grunow (2023), model Lead Researchers (2025) mengadopsi **Martingale Model of Forecast Evolution (MMFE)** untuk membangkitkan skenario permintaan yang *konsisten* dengan proses *forecast update* dalam *rolling-horizon planning*. Formulasi MMFE adalah:

$$F_t = F_{t-1} + \varepsilon_t + \sum_{i=1}^{t-1} \varepsilon_{t,i}$$

dengan $F_t$ adalah forecast pada periode $t$ dan $\varepsilon_{t,i}$ adalah *forecast error* independen. Pendekatan ini menghasilkan *scenario tree* yang lebih realistis dibanding pembangkitan skenario independen (*i.i.d.*) yang lazim dalam literatur.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model HSLS dalam lingkungan industri nyata mengikuti *Standard Operating Procedure* (SOP) delapan tahap berikut:

**Tahap 1 — Karakterisasi Data Historis.** Kumpulkan data permintaan minimal 24–36 periode, identifikasi pola tren, *seasonality*, dan kalkulasi parameter distribusi (mean $\mu_d$, standar deviasi $\sigma_d$, *autocorrelation* $\rho_1$). Validasi distribusi menggunakan *Kolmogorov–Smirnov test* dengan $\alpha = 0.05$.

**Tahap 2 — Estimasi Parameter MMFE.** Bangun model *forecast evolution* dengan *maximum likelihood estimation* (MLE). Bangkitkan *scenario tree* dengan $S = 100$–$1000$ skenario menggunakan teknik *Monte Carlo simulation* atau *moment matching*.

**Tahap 3 — Formulasi Master Problem.** Masukkan parameter biaya ($c_t$, $k_t$, $h_t$, $p_t$) dan kendala kapasitas ($C_t$) ke dalam model MILP. Solve menggunakan *solver* komersial seperti Gurobi atau CPLEX dengan *tolerance* optimalitas $10