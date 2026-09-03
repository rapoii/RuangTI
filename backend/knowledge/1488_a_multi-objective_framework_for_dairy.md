# 1488 — Optimasi Multi-Objektif Rantai Pasok Produk Susu & Desain Jaringan Logistik Terbalik dengan Benders Decomposition

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang semakin kompleks pada dekade terakhir. Berdasarkan kerangka analitis yang diajukan oleh Lead Researchers (2023) dalam *Industrial Engineering and Innovation Management* dengan DOI [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509), rantai pasok susu tidak lagi dapat dimodelkan sebagai sistem linier satu tujuan, melainkan harus mengakomodasi dimensi multi-objektif yang mencakup minimalisasi biaya logistik, maksimalisasi kesegaran produk (*freshness*), pengurangan emisi karbon, dan kepatuhan terhadap standar kualitas pangan. Produk susu merupakan kategori barang dengan karakteristik *perishable high-value* di mana degradasi mutu terjadi secara eksponensial terhadap waktu dan suhu penyimpanan; menurut USDA Economic Research Service, lebih dari 17% produk susu di negara maju terbuang sebelum mencapai konsumen akhir, yang merepresentasikan inefisiensi bernilai miliaran dolar per tahun.

Urgensi operasional semakin diperkuat oleh tiga fenomena simultan. Pertama, fluktuasi harga bahan baku susu mentah (*raw milk*) yang dipengaruhi oleh dinamika cuaca, biaya pakan ternak, dan kebijakan perdagangan internasional. Kedua, regulasi ketat terkait rantai dingin (*cold chain*) dan traceability yang diterapkan oleh otoritas keamanan pangan seperti FDA, BPOM, dan EFSA, yang mensyaratkan dokumentasi suhu dan waktu transit secara *real-time*. Ketiga, tekanan dekarbonisasi sesuai dengan *Paris Agreement* dan *EU Green Deal* yang meminta emiten industri untuk melaporkan *Scope 1*, *Scope 2*, dan *Scope 3* emissions.

Konteks ini diperluas oleh Zhang, Li, dan Ren (2024) dengan DOI [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437), yang menunjukkan bahwa keputusan kualitas (*quality decisions*) dalam rantai pasok terbalik (*reverse supply chain*) menjadi variabel keputusan yang tidak terpisahkan dari jaringan maju (*forward chain*). Integrasi keputusan inspeksi, sortasi, remanufaktur, dan disposal ke dalam satu kerangka optimasi memungkinkan perusahaan mencapai *closed-loop supply chain* yang ekonomis dan berkelanjutan. Kedua paper ini secara komplementer membangun paradigma bahwa desain jaringan rantai pasok modern harus diselesaikan dengan teknik dekomposisi matematis yang mampu menangani masalah mixed-integer programming berskala besar dengan struktur *two-stage stochastic* atau *multi-objective*.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Two-Stage Stochastic Programming

Model referensi mengikuti formulasi *two-stage stochastic mixed-integer programming* (2SMIP) sebagai berikut:

$$\min_{x \in X} c^T x + \mathbb{E}_{\xi}[Q(x, \xi)]$$

di mana $x$ merepresentasikan variabel keputusan tingkat pertama (*here-and-now*, biasanya fasilitas buka/tutup), dan $Q(x,\xi)$ adalah fungsi nilai optimal subproblem tingkat kedua (*wait-and-see*, alokasi aliran) untuk setiap skenario $\xi \in \Omega$.

Formulasi deterministik ekuivalennya adalah:

$$\min_{x,y_\omega} \sum_{i \in I} \sum_{j \in J} f_{ij} x_{ij} + \sum_{\omega \in \Omega} p_\omega \sum_{(k,l) \in A} c_{kl}^\omega y_{kl}^\omega$$

dengan batasan konservasi aliran (*flow conservation*) di setiap node $k$:

$$\sum_{(k,l) \in A^+} y_{kl}^\omega - \sum_{(l,k) \in A^-} y_{lk}^\omega = b_k^\omega \quad \forall k \in N, \forall \omega \in \Omega$$

dan batasan kapasitas yang dependen pada keputusan fasilitas:

$$\sum_{(k,l) \in A^+} y_{kl}^\omega \leq u_k \cdot z_k \quad \forall k \in N, \forall \omega \in \Omega$$

### 2.2 Formulasi Multi-Objektif Dairy Supply Chain

Mengikuti Lead Researchers (2023), kerangka multi-objektif untuk jaringan susu dinyatakan dalam bentuk *weighted sum scalarization* atau *$\epsilon$-constraint method*. Tiga fungsi tujuan yang digunakan:

**Objektif 1 — Biaya total rantai pasok:**

$$\min Z_1 = \sum_{i \in I} \sum_{j \in J} (f_i x_i + c_{ij}^{rp} q_{ij}) + \sum_{j \in J} \sum_{k \in K} c_{jk}^{pd} q_{jk} + \sum_{k \in K} \sum_{l \in L} c_{kl}^{dr} q_{kl} + \sum_{i \in I} \sum_{j \in J} h_j^{inv} I_{ij}$$

di mana $f_i$ adalah biaya tetap aktivasi fasilitas, $c_{ij}^{rp}$ biaya transportasi dari peternakan ke pabrik pengolahan, dan $h_j^{inv}$ biaya inventory susu segar di plant $j$.

**Objektif 2 — Indeks kesegaran produk:**

$$\min Z_2 = \sum_{l \in L} \sum_{p \in P} \beta_p (T_l^p - T_l^{p,exp})$$

di mana $T_l^p$ adalah waktu tempuh aktual produk $p$ ke lokasi ritel $l$, dan $T_l^{p,exp}$ adalah waktu expired; $\beta_p$ adalah bobot penalti per satuan produk.

**Objektif 3 — Emisi karbon agregat:**

$$\min Z_3 = \sum_{a \in A} \gamma_a \cdot dist_a \cdot vol_a$$

dengan $\gamma_a$ faktor emisi per ton-km untuk moda transportasi $a$.

### 2.3 Benders Decomposition

Algoritma Benders mempartisi masalah menjadi *Master Problem* (MP) yang hanya memuat variabel $x$ dan subproblem (SP) yang memberikan *Benders cuts*. Dual subproblem menghasilkan vektor $\pi$ yang digunakan membentuk cut:

$$\theta \geq \phi(\bar{x}) = \min_{y} \{q^T y : Ty = h - V\bar{x}, Wy \leq r\}$$

Iterasi Benders hingga konvergensi mengikuti skema:

$$\theta^{(k)} \geq \pi^T (h - V x) \quad \text{(optimality cut)}$$

atau

$$\theta^{(k)} \geq M \quad \text{(feasibility cut, jika SP infeasible)}$$

Untuk masalah multi-objektif, Lead Researchers (2023) memodifikasi arsitektur dengan memperkenalkan *Pareto-optimal cuts* yang menghasilkan *non-dominated frontier* antara ketiga objektif.

### 2.4 Ekstensi Reverse Chain dengan Quality Decisions

Zhang dkk. (2024) memperluas struktur dengan memasukkan variabel kualitas $q \in \{q_1, q_2, q_3\}$ untuk setiap produk kembali:

$$q = \begin{cases} q_1 & \text{remanufacture (kualitas tinggi)} \\ q_2 & \text{refurbish (kualitas menengah)} \\ q_3 & \text{recycle/dispose (kualitas rendah)} \end{cases}$$

Fungsi tujuan terintegrasi menjadi:

$$\min \sum_{m \in M} \left[ C_m^{op} + C_m^{q_1}(1-\alpha_{q_1}) + C_m^{q_2}(1-\alpha_{q_2}) \right]$$

di mana $\alpha_{q_r}$ adalah probabilitas inspeksi menghasilkan kategori kualitas $q_r$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri mengikuti protokol lima tahap sebagaimana distandardisasi dalam kedua paper:

**Tahap 1 — Akuisisi & Pembersihan Data.** Pengumpulan data historis 12-36 bulan dari ERP (SAP S/4HANA, Oracle SCM) mencakup volume produksi, demand musiman, biaya transportasi, kapasitas fasilitas. Data dibersihkan menggunakan *interquartile range filtering* untuk menghilangkan outlier.

**Tahap 2 — Pemodelan Skenario.** Skenario demand dan biaya dibangun menggunakan Monte Carlo simulation dengan 500-1000 replications. Distribusi parameter diestimasi melalui *maximum likelihood estimation* (MLE).

**Tahap 3 — Formulasi & Kalibrasi Model.** Model diimplementasikan dalam GAMS 25.1 / Python Pyomo dengan solver CPLEX 22.1 atau Gurobi 10.0. Validasi model dilakukan dengan *backtesting* pada data out-of-sample 6 bulan terakhir dengan target MAPE < 8%.

**Tahap 4 — Eksekusi Benders Decomposition.** Algoritma mengikuti *diagram alir* sebagai berikut:

```
START
  ↓
Inisialisasi: UB = +∞, LB = -∞, x⁰ = feasible heuristic
  ↓
LOOP until |UB - LB|/UB < ε (ε = 0.001)
  ↓
  Solve Master Problem → (x^(k+1), θ^(k+1))
  ↓
  Update LB = c^T x^(k+1) + θ^(k+1)
  ↓
  Solve Subproblem untuk setiap ω ∈ Ω
  ↓
  Aggregate dual vectors π_ω
  ↓
  Generate Benders cut dan tambahkan ke MP
  ↓
  Update UB
  ↓
END LOOP
  ↓
Output: solusi optimal x*, y*_ω
```

**Tahap 5 — Validasi & Implementasi.** Solusi di-*stress-test* terhadap skenario black swan (pandemic, geopolitik) dan di-roll out ke operasional melalui *phased deployment* selama 8-12 minggu dengan *parallel run* terhadap sistem legacy.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Set Data Hipotetis-Konsisten Literatur

Pertimbangkan jaringan susu regional dengan parameter berikut (konsisten dengan studi kasus pada Lead Researchers (2023)):

| Parameter | Nilai | Unit |
|-----------|-------|------|
| Peternakan ($i$) | 6 | lokasi |
| Pabrik pengolahan ($j$) | 3 | kandidat |
| Distribution center ($k$) | 4 | kandidat |
| Zona ritel ($l$) | 8 | zona |
| Demand rata-rata harian | 45.000 | liter/hari |
| Kapasitas plant | 18.000-25.000 | liter/hari |
| Biaya tetap aktivasi plant | 850.000.000 | IDR |
| Biaya transport/ton-km | 350-650 | IDR |

### 4.2 Perhitungan Iterasi Benders

**Iterasi 0 (Inisialisasi Heuristik):**
Ambil solusi awal berdasarkan aturan *gravity location*: $x^{(0)} =