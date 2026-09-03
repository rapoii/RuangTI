# 1872 — Optimisasi Multi-Objektif Jaringan Rantai Pasok Produk Susu Menggunakan Dekomposisi Benders

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition*
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*, 6(5). DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Zhang, Y., Li, H., & Ren, Y. (2024). *Benders Decomposition for Network Design and Operations in a Reverse Supply Chain Considering Quality Decisions*. SSRN Working Paper Series. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu (dairy industry) merupakan salah satu sektor agri-food dengan karakteristik operasional paling kompleks dalam literatur rekayasa rantai pasok. Berbeda dengan barang konsumsi manufaktur konvensional, produk susu memiliki **umur simpan (shelf-life)** yang pendek, berkisar antara 5–21 hari tergantung pada tingkat pemrosesan (UHT, pasteurisasi, atau keju segar), sehingga memerlukan jaringan distribusi dengan *time-temperature integrity* yang ketat (Lead Researchers, 2023). Kerusakan kualitas akibat pelanggaran *cold chain* dapat menyebabkan kerugian ekonomi signifikan—diperkirakan mencapai 10–25% dari total volume produksi di negara berkembang—dan oleh karena itu keputusan desain jaringan tidak dapat dipisahkan dari keputusan operasional dan kualitas.

Menurut Lead Researchers (2023) yang dimuat dalam *Industrial Engineering and Innovation Management*, kerangka kerja multi-objektif untuk jaringan rantai pasok susu harus secara simultan mempertimbangkan tiga dimensi strategis: (i) **minimasi biaya total** yang mencakup biaya fasilitas, transportasi berpendingin (*refrigerated trucking*), persediaan, dan kerugian kualitas; (ii) **minimasi emisi karbon** dari aktivitas logistik dan pendinginan; serta (iii) **maksimasi tingkat layanan (service level)** yang direpresentasikan melalui *freshness-on-delivery*. Penulis utama menjelaskan bahwa optimisasi konvensional berbasis *single-objective weighted-sum* gagal menangkap *trade-off* non-konveks antar ketiga tujuan tersebut, sehingga pendekatan augmented epsilon-constraint atau NSGA-II harus diintegrasikan dengan teknik dekomposisi untuk memecahkan struktur masalah yang merupakan *mixed-integer linear programming* (MILP) berskala besar.

Urgensi ekonomis dari studi ini juga didorong oleh fenomena *demand volatility* musiman (lonjakan konsumsi pada Bulan Ramadhan, Hari Raya, dan liburan sekolah), elastisitas harga yang tinggi terhadap produk susu segar, serta kebijakan pemerintah terkait *food sovereignty* yang mensyaratkan tingkat self-supply minimal di tingkat regional. Lebih lanjut, Zhang, Li, & Ren (2024) dalam paper komplementer mereka menunjukkan bahwa keputusan kualitas (*quality grading decisions*) dalam jaringan *reverse supply chain* susu—yaitu pengembalian produk near-expiry untuk diolah kembali menjadi *by-product* (keju, whey powder, atau *casein*)—secara langsung memengaruhi arsitektur jaringan maju (*forward network*), menciptakan耦合 struktural yang hanya dapat diselesaikan secara efisien melalui dekomposisi Benders.

Dari perspektif *Industrial Engineering*, masalah ini tergolong NP-hard karena kombinasi keputusan *facility location* (biner), alokasi kapasitas (integer), dan *flow allocation* (kontinyu) yang harus diselesaikan dalam horizon perencanaan multi-periode. Lead Researchers (2023) menyatakan bahwa untuk jaringan dengan 50 pabrik, 200 distributor, dan 1.000 zona permintaan dengan horizon 12 periode, formulasi MILP monolithic akan menghasilkan lebih dari 100.000 variabel dan 500.000 kendala, sehingga *branch-and-bound* murni tidak konvergen dalam batas waktu komputasional yang layak. Inilah justifikasi utama penggunaan dekomposisi Benders sebagai *solution engine*.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi MILP Monolithic (Master Problem Utuh)

Formulasi standar mengikuti notasi *facility location-network design* (Lead Researchers, 2023) dengan ekstensi multi-periode dan multi-komoditas. Definisikan himpunan:

- $I$ = himpunan kandidat lokasi pabrik (*processing plants*)
- $J$ = himpunan kandidat pusat distribusi (*distribution centers*/DC) berpendingin
- $K$ = himpunan zona permintaan (*customer zones*)
- $T$ = himpunan periode perencanaan, $T = \{1, 2, \ldots, \tau\}$
- $P$ = himpunan produk susu (susu pasteurisasi, yoghurt, keju, mentega)

**Parameter:**

- $f_i$ = biaya tetap pembukaan pabrik $i$ (USD/tahun)
- $g_j$ = biaya tetap pembukaan DC $j$ (USD/tahun)
- $c_{ij}^{t}$ = biaya transportasi unit dari $i$ ke $j$ pada periode $t$ (USD/unit)
- $d_{jk}^{p,t}$ = biaya pengiriman unit produk $p$ dari $j$ ke $k$ pada periode $t$
- $h_{j}^{p,t}$ = biaya inventory holding produk $p$ di DC $j$ (USD/unit-periode)
- $Q_{i}^{cap}$ = kapasitas pemrosesan pabrik $i$ (unit/tahun)
- $Q_{j}^{cap}$ = kapasitas penyimpanan DC $j$ (unit)
- $D_{k}^{p,t}$ = permintaan deterministik produk $p$ di zona $k$ pada periode $t$
- $\alpha$ = *shelf-life* (dalam jumlah periode); $\beta_{t,t'}$ = faktor degradasi kualitas
- $\gamma_{co2}$ = faktor emisi per unit-km transportasi berpendingin
- $\phi_p$ = *carbon footprint* per unit produk $p$ yang diproses

**Variabel keputusan:**

- $y_i \in \{0,1\}$: 1 jika pabrik $i$ dibuka
- $z_j \in \{0,1\}$: 1 jika DC $j$ dibuka
- $x_{ij}^{t} \geq 0$: aliran dari pabrik $i$ ke DC $j$ pada periode $t$
- $w_{jk}^{p,t} \geq 0$: aliran produk $p$ dari DC $j$ ke pelanggan $k$ pada periode $t$
- $s_{j}^{p,t} \geq 0$: tingkat persediaan produk $p$ di DC $j$ akhir periode $t$

**Fungsi tujuan multi-objektif:**

$$Z_1 = \min \sum_{i \in I} f_i y_i + \sum_{j \in J} g_j z_j + \sum_{t \in T} \sum_{i \in I} \sum_{j \in J} c_{ij}^{t} x_{ij}^{t} + \sum_{t \in T} \sum_{j \in J} \sum_{k \in K} \sum_{p \in P} \left(d_{jk}^{p,t} w_{jk}^{p,t} + h_{j}^{p,t} s_{j}^{p,t}\right)$$

$$Z_2 = \min \sum_{t \in T} \sum_{i \in I} \sum_{j \in J} \sum_{p \in P} \gamma_{co2} \cdot dist_{ij} \cdot x_{ij}^{p,t} + \sum_{p \in P} \phi_p \sum_{i \in I} \sum_{t \in T} y_i^{prod,t}$$

$$Z_3 = \max \sum_{t \in T} \sum_{k \in K} \sum_{p \in P} \sum_{j \in J} \left(1 - \frac{\Delta t_{jk}^{p,t}}{\alpha_p}\right) \cdot w_{jk}^{p,t}$$

**Kendala utama:**

$$\sum_{j \in J} w_{jk}^{p,t} \geq D_k^{p,t} \quad \forall k, p, t \tag{kendala permintaan}$$

$$\sum_{i \in I} x_{ij}^{t} = \sum_{p \in P} \sum_{k \in K} w_{jk}^{p,t} + s_{j}^{p,t} \quad \forall j, p, t \tag{keseimbangan aliran}$$

$$\sum_{j \in J} x_{ij}^{t} \leq Q_i^{cap} y_i \quad \forall i, t \tag{kapasitas pabrik}$$

$$s_{j}^{p,t} \leq Q_j^{cap} z_j \quad \forall j, p, t \tag{kapasitas DC}$$

### 2.2 Dekomposisi Benders untuk Struktur Block-Angular

Formulasi di atas memiliki struktur *block-angular* terhadap variabel $y_i, z_j$ (komplikasi) yang耦合 dengan subproblem per periode dan per fasilitas. Menurut Lead Researchers (2023), dekomposisi Benders mempartisi masalah menjadi:

**Master Problem (MP):** hanya berisi variabel biner keputusan lokasi, dengan *Benders cuts* $\eta$ sebagai variabel pengganti biaya operasional minimum:

$$\min_{y,z,\eta} \sum_{i} f_i y_i + \sum_{j} g_j z_j + \eta$$

$$\text{s.t.} \quad \eta \geq \text{cuts dari Subproblem}, \quad y, z \in \{0,1\}$$

**Subproblem (SP):** diberikan $(y^*, z^*)$ dari MP, minimisasi biaya operasional:

$$\min_{x,w,s} \sum_{t,i,j} c_{ij}^t x_{ij}^t + \sum_{t,j,k,p}(d_{jk}^{p,t} w_{jk}^{p,t} + h_j^{p,t} s_j^{p,t})$$

$$\text{s.t.} \quad \text{kendala (4)–(7)}, \quad x, w, s \geq 0$$

Dual SP ($\mathcal{D}$) menghasilkan *dual multipliers* $\pi, \mu, \nu, \rho$, dan **Benders optimality cut** berbentuk:

$$\eta \geq \sum_{i,t} \pi_i^{cap} Q_i^{cap} y_i^* + \sum_{j,p,t} \nu_j^{cap} Q_j^{cap} z_j^* + \text{const}(y^*, z^*)$$

Iterasi dihentikan ketika *upper bound* (feasible integer solution dari MP + SP) dan *lower bound* (MP relaxed) konvergen dengan gap $\leq \epsilon = 0{,}5\%$.

### 2.3 Integrasi Metode Augmented $\epsilon$-Constraint untuk Multi-Objektif

Untuk menghasilkan **Pareto front** dari tiga objektif, Lead Researchers (2023) menggunakan metode *augmented epsilon-constraint* (AEC) dari Mavrotas (2009) yang dimodifikasi:

$$\min Z_1$$
$$\text{s.t.} \quad Z_2 \leq \epsilon_2, \quad Z_3 \geq \epsilon_3, \quad \epsilon_2 \in [Z_2^{\min}, Z_2^{\max}], \quad \epsilon_3 \in [Z_3^{\min}, Z_3^{\max}]$$

dengan augmentasi lexicographic untuk menghindari *weak Pareto points*:

$$\min\left(Z_1 + \delta \cdot \frac{s_2}{Z_2^{\max}-Z_2^{\min}} + \delta \cdot \frac{s_3}{Z_3^{\max}-Z_3^{\min}}\right)$$

di mana $s_2, s_3$ adalah *slack variables* dan $\delta = 10^{-6}$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi prosedur dekomposisi Benders untuk optimisasi jaringan susu mengikuti alur delapan-tahap yang distandarisasi oleh Lead Researchers (2023):

**Tahap 1 — Karakterisasi Jaringan & Pengumpulan Data.** Pemetaan geospasial kandidat fasilitas, biaya investasi aktual (CAPEX), kapasitas utilitas (air, listrik, refrigerant), serta data historis permintaan 36-bulan. Data divalidasi dengan metode triangulasi (sensus manufaktur, data *point-of-sale*, dan studi *vehicle routing*).

**Tahap 2 — Estimasi Parameter Emisi Karbon.** Menggunakan faktor konversi IPCC Tier-2 untuk transportasi berpendingin: $\gamma_{co2}^{reefer} = 0{,}138$ kg CO$_2$e/ton-km (diesel refrigerated truck). Faktor pendinginan DC menggunakan *Coefficient of Performance* (COP) sesuai standar ASHRAE 90.1.

**Tahap 3 — Formulasi Model MILP.** Penyiapan model dalam bahasa pemodelan (GAMS 25.1 / AMPL / Python PuLP) dengan struktur yang dapat di-decompose. Validasi dilakukan melalui *unit testing* pada instans kecil dengan solusi *brute-force*.

**Tahap 4 — Generasi *Pareto Front* via AEC.** Iterasi atas grid $\epsilon_2 \times \epsilon_3$ dengan resolusi $r_2 \times r_3 = 10 \times 10 = 100$ titik. Untuk setiap titik, dekomposisi Benders dijalankan secara independen.

**Tahap 5 — Eksekusi Benders Loop.** Implementasi algoritma *Branch-and-Benders-Cut* (BBC) untuk menghindari restart dari *root node*. Kode pseudo:

```
Initialize UB = +∞, LB = -∞, iteration = 0
Repeat:
   Solve MP relaxation → (y*, z*, η*, LB_new)
   Solve SP for (y*, z*) → (cost_SP, dual π*)
   If SP feasible:
      UB_new = f(y*) + g(z*) + cost_SP
      Add optimality cut to MP
   Else: add feasibility cut
   If (UB_new - LB_new)/UB_new < ε: STOP
   iteration += 1
Until convergence
```

**Tahap 6 — Validasi Solusi.** Uji *post-hoc* dengan simulasi Monte Carlo (10.000 run) untuk memeriksa robust-nya solusi