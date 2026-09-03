# 1936 — Perancangan Jaringan Rantai Pasok Multi-Objektif dengan Benders Decomposition: Aplikasi pada Industri Produk Susu dan Rantai Pasok Balik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Rantai pasok produk susu merupakan salah satu sistem logistik paling kompleks di industri pangan global karena menghadapi kendala biologis yang ketat berupa *shelf-life* pendek, persyaratan rantai dingin (*cold chain*) yang tidak dapat ditoleransi terhadap pelanggaran suhu, serta variabilitas permintaan musiman yang tinggi. Lead Researchers (2023) dalam artikelnya yang diterbitkan di *Industrial Engineering and Innovation Management* dengan DOI [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509) menyoroti bahwa desain jaringan rantai pasok susu konvensional yang hanya meminimumkan biaya total cenderung mengabaikan tiga dimensi kritis secara simultan, yaitu degradasi kualitas produk, jejak karbon emisi GRK (Gas Rumah Kaca), dan kesetaraan distribusi pelayanan kepada konsumen. Tanpa optimasi multi-objektif, pelaku industri susu menghadapi kerugian ekonomi rata-rata 8–15% akibat produk rusak, *waste*, dan *stockout* di tingkat ritel (Lead Researchers, 2023).

Urgensi penelitian ini diperkuat oleh dinamika pasar susu global yang diproyeksikan mencapai USD 1,1 triliun pada 2030 dengan CAGR (Compound Annual Growth Rate) sekitar 5,2%, di mana efisiensi jaringan rantai pasok menjadi pembeda kompetitif utama. Kompleksitas masalah meningkat secara eksponensial ketika keputusan lokasi fasilitas, kapasitas produksi, alokasi aliran produk segar vs. produk olahan, dan moda distribusi harus ditentukan secara simultan dalam horizon perencanaan 5–10 tahun. Permasalahan ini secara natural diformulasikan sebagai *Mixed-Integer Linear Programming* (MILP) dengan struktur dua tingkat yang hanya dapat diselesaikan secara efisien menggunakan teknik dekomposisi, khususnya Benders Decomposition (Lead Researchers, 2023).

Di sisi komplementer, Zhang, Li, dan Ren (2024) dengan DOI [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437) memperluas paradigma Benders Decomposition ke ranah *reverse supply chain* dengan keputusan kualitas yang menunjukkan bahwa arsitektur matematis yang serupa dapat diaplikasikan pada konteks pemulihan produk, daur ulang, dan remanufaktur. Sinergi kedua literatur ini memberikan fondasi metodologis yang kuat bagi perekayasa industri untuk membangun kerangka optimasi yang adaptif terhadap karakteristik produk susu—yang memiliki kemiripan struktural dengan rantai pasok balik dalam hal sensitivitas waktu, keputusan kualitas grading, dan valuasi *waste*. Konteks Indonesia sebagai negara dengan konsumsi susu per kapita yang masih rendah (~16,3 kg/kapita/tahun menurut data BPS 2023) namun memiliki potensi pertumbuhan signifikan menjadikan modul ini relevan untuk industri pengolahan susu nasional seperti PT Frisian Flag Indonesia, PT Ultra Jaya, dan PT Nestlé Indonesia.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Struktur Benders Decomposition

Benders Decomposition, yang diperkenalkan oleh Jacques Benders (1962), mempartisi MILP menjadi **Masalah Induk** (*Master Problem*, MP) yang berisi variabel keputusan integer (misalnya keputusan buka/tutup fasilitas) dan **Subproblem** (SP) yang berisi variabel kontinyu (aliran produk) untuk setiap skenario master tetap. Iterasi dilakukan melalui penambahan **Benders Cuts** yang memperketat daerah layak master berdasarkan informasi dual dari subproblem.

Formulasi MINLP (Mixed-Integer Non-Linear Programming) multi-objektif untuk jaringan produk susu mengikuti Lead Researchers (2023):

$$\min_{x,y} \; Z = \left[ C(x,y), \; -F(y), \; E(x,y) \right]^T \tag{1}$$

dengan vektor objektif:
- $C(x,y)$ = total biaya (Rp/tahun)
- $F(y)$ = tingkat kesegaran agregat
- $E(x,y)$ = emisi karbon (kg CO₂eq)

terhadap himpunan layak $\Omega = \{(x,y) \mid Ax + By \leq b,\; x \in \{0,1\}^n,\; y \geq 0\}$.

### 2.2 Formulasi Detail Model

**Himpunan Indeks:**
- $i \in I$ = lokasi produksi susu (farm/koperasi)
- $j \in J$ = lokasi pabrik pengolahan (processing plant)
- $k \in K$ = pusat distribusi (distribution center, DC)
- $l \in L$ = zona permintaan (retail zone)
- $p \in P$ = jenis produk (UHT, pasteurisasi, keju, yogurt, susu bubuk)

**Parameter:**
- $d_{lp}$ = permintaan produk $p$ di zona $l$ (liter/tahun)
- $c_{ij}^{tr}$ = biaya运输 dari $i$ ke $j$ (Rp/liter)
- $f_j$ = fixed cost fasilitas $j$ (Rp/tahun)
- $Cap_j$ = kapasitas pabrik $j$ (liter/tahun)
- $\alpha_p$ = koefisien degradasi kualitas produk $p$ (unit/hari)
- $\tau_{ij}$ = waktu transit (jam)
- $\beta_p$ = jejak karbon per liter produk $p$ (kg CO₂eq/L)

**Variabel Keputusan:**
- $x_j \in \{0,1\}$ = 1 jika pabrik $j$ dibuka
- $y_{ijp}$ = volume aliran produk $p$ dari $i$ ke $j$
- $z_{jklp}$ = volume dari $j$ ke $k$ ke $l$ untuk produk $p$

**Fungsi Objektif (berdasarkan Lead Researchers, 2023):**

$$\min \; C^{total} = \underbrace{\sum_{j \in J} f_j x_j}_{\text{biaya tetap}} + \underbrace{\sum_{i,j,p} c_{ij}^{tr} y_{ijp}}_{\text{transportasi hulu}} + \underbrace{\sum_{j,k,l,p} c_{jkl}^{tr} z_{jklp}}_{\text{transportasi hilir}} + \underbrace{\sum_{j} h_j \sum_{i,p} y_{ijp}}_{\text{holding cost}} \tag{2}$$

$$\max \; F = \sum_{j,l,p} \left( 1 - \alpha_p \tau_{jl} \right) z_{jlp} \tag{3}$$

$$\min \; E = \sum_{p} \beta_p \left( \sum_{i,j} y_{ijp} + \sum_{j,k,l} z_{jklp} \right) \tag{4}$$

**Kendala Utama:**

$$\sum_{l \in L} z_{jklp} \leq Cap_{jk}^{dist} \quad \forall j,k,p \tag{5}$$

$$\sum_{k \in K} z_{jklp} = d_{lp} \quad \forall j,l,p \tag{6}$$

$$\sum_{i \in I, p \in P} y_{ijp} \leq Cap_j x_j \quad \forall j \tag{7}$$

### 2.3 Benders Reformulation

Master Problem (MP) iterasi ke-$r$:

$$\min_{x,\theta} \; \sum_{j} f_j x_j + \theta \tag{8}$$

$$\text{s.t.} \quad x_j \in \{0,1\} \quad \forall j \tag{9}$$

$$\theta \geq \pi^{(s)T} \left( b - B x^{(s)} \right) \quad \forall s = 1, \ldots, r \tag{10}$$

di mana $\pi^{(s)}$ adalah solusi dual subproblem pada iterasi $s$, dan persamaan (10) adalah **optimality cut** yang ditambahkan secara iteratif.

Subproblem (SP) untuk $x^{(r)}$ tetap:

$$\min_{y,z} \; c^T y + c^T z \tag{11}$$

$$\text{s.t.} \quad Ay + Bz \leq b - H x^{(r)} \tag{12}$$

Per Zhang, Li, & Ren (2024), ketika keputusan kualitas dimasukkan, SP menjadi:

$$\min_{y,z,q} \; c^T y + c^T z + \gamma^T q \tag{13}$$

dengan variabel kualitas $q_{jp} \in [0,1]$ merepresentasikan grading hasil recovery.

### 2.4 Penyelesaian Multi-Objektif

Mengikuti Lead Researchers (2023), pendekatan $\epsilon$-*constraint method* digunakan untuk menghasilkan *Pareto front*:

$$\min \; Z_1(x,y) \tag{14}$$

$$\text{s.t.} \quad Z_2(x,y) \leq \epsilon_2, \quad Z_3(x,y) \leq \epsilon_3, \quad (x,y) \in \Omega \tag{15}$$

dengan variasi $\epsilon_2, \epsilon_3$ pada grid terpartisi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi Benders Decomposition untuk jaringan rantai pasok susu mengikuti kerangka SOP 7-tahap berikut, yang diadaptasi dari Lead Researchers (2023) dan Zhang et al. (2024):

**Tahap 1 — Karakterisasi Permintaan & Data Historis**
Kumpulkan data permintaan harian minimal 24 bulan untuk produk $p$ pada zona $l$, lalu identifikasi pola musiman menggunakan dekomposisi STL (*Seasonal-Trend-Loess*). Hitung parameter $\mu_{lp}$ dan $\sigma_{lp}$ sebagai input distribusi normal permintaan.

**Tahap 2 — Penentuan Horizon Perencanaan**
Tetapkan horizon $T = 10$ tahun untuk keputusan fasilitas (jangka panjang) dan sub-horison $T' = 1$ bulan untuk keputusan operasional (aliran), sesuai rekomendasi Lead Researchers (2023).

**Tahap 3 — Formulasi Set Kendala**
Susun kendala kapasitas, keseimbangan aliran (*flow balance*), kendala kualitas (lead time × degradasi), dan kendala emisi sesuai rumus (5)–(7).

**Tahap 4 — Inisialisasi Master Problem**
MP_0 hanya berisi kendala integer $x_j \in \{0,1\}$ dengan *relaxation* linear. Selesaikan menggunakan CPLEX/Gurobi untuk mendapatkan $x^{(0)}$.

**Tahap 5 — Iterasi Subproblem**
Untuk setiap $x^{(r)}$, selesaikan SP. Jika SP infeasible, tambahkan **feasibility cut**; jika finite, ekstrak dual $\pi^{(r)}$ dan tambahkan **optimality cut** ke MP.

**Tahap 6 — Konvergensi**
Iterasi berhenti ketika $\theta^{(r)} \geq LB^{(r)} - \delta$ dengan $\delta = 10^{-4}$ sebagai toleransi, atau ketika gap relatif $|UB - LB|/UB \leq 0{,}5\%$.

**Tahap 7 — Pascaproses & Validasi Pareto**
Bangun kurva Pareto dengan $\epsilon$-constraint, lalu validasi dengan simulasi *Monte Carlo* terhadap parameter permintaan stokastik.

**Diagram Alir Logika (Pseudocode Benders):**

```
INITIALIZE: r = 0, LB = -∞, UB = +∞
WHILE (UB - LB)/UB > tolerance DO
  Solve MP_r → (x^(r), θ^(r))
  Update LB ← f(x^(r)) + θ^(r)
  Solve SP(x^(r)) → (y^(r), z^(r), dual π^(r))
  Compute SP_obj = c^T y^(r) + c^T z^(r)
  Update UB ← min(UB, f(x^(r)) + SP_obj)
  Generate Benders Cut: θ ≥ π^(r)T(b - Hx^(r))
  Add cut to MP, r ← r+1
END WHILE
RETURN (x*, y*, z*)
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Data Input Industri Susu Nasional (Hipotetis-Kalibrasi)

Sebuah perusahaan susu berskala menengah di Indonesia beroperasi dengan parameter berikut (berdasarkan tipikal industri):

**Tabel 1. Parameter Permintaan (liter/hari)**

| Zona $l$ | UHT | Pasteurisasi | Yogurt | Keju |
|----------|------|--------------|--------|------|
| Jakarta (L1) | 45.000 | 18.000 | 6.500 | 1.200 |
| Bandung (L2) | 28.000 | 11.000 | 4.000 | 800 |
| Surabaya (L3) | 52.000 | 21.000 | 7.800 |