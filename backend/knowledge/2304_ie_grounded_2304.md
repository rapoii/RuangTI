# 2304 — Optimasi Rantai Pasok Multi-Objektif dengan Benders Decomposition: Framework Produk Susu dan Reverse Supply Chain

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Multi-Objective Framework untuk Jaringan Rantai Pasok Produk Susu Menggunakan Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*, 6(5). DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *SSRN Electronic Journal — Operations Research & Reverse Logistics*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu merupakan salah satu sektor agro-manufaktur dengan karakteristik operasional paling menantang dalam hal rekayasa rantai pasok. Produk susu memiliki sifat *perishable* (mudah rusak) dengan *shelf-life* yang pendek, umumnya berkisar 5–21 hari untuk varian *fresh dairy*, sehingga memerlukan keputusan lokasi fasilitas, kapasitas produksi, dan alokasi distribusi yang sangat presisi. Menurut Lead Researchers (2023) dalam *Industrial Engineering and Innovation Management* dengan DOI [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509), jaringan rantai pasok susu memiliki struktur berlapis yang kompleks: peternakan sapi perah (*farms*) → titik pengumpulan (*collection centers*) → pabrik pengolahan (*processing plants*) → pusat distribusi (*distribution centers*) → pelanggan ritel (*retail customers*). Setiap lapisan memerlukan keputusan desain jaringan yang saling berinteraksi melalui variabel keputusan biner dan kontinyu secara simultan.

Urgensi ekonomis dari optimalisasi rantai pasok susu dapat diukur melalui beberapa indikator. Biaya logistik produk susu di negara berkembang rata-rata mencapai 18–25% dari total biaya produk, jauh lebih tinggi dibanding produk non-perishable (5–8%). Tingkat kerusakan (*spoilage rate*) produk susu akibat keputusan alokasi yang suboptimal berkisar 8–15% per siklus distribusi. Lead Researchers (2023) menekankan bahwa keputusan fasilitas dan keputusan operasional (aliran produk) tidak dapat dipisahkan secara *sequential* karena memiliki sifat *interdependent* yang tinggi. Pendekatan monolithic dengan Mixed Integer Linear Programming (MILP) standar akan menghasilkan model dengan ribuan variabel biner yang sulit diselesaikan secara eksak dalam waktu komputasi yang acceptable.

Konteks kedua yang melengkapi pemahaman tentang urgensi metodologis ini datang dari Zhang, Li, & Ren (2024) dengan DOI [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437), yang menyoroti bahwa dalam konteks *reverse supply chain* dengan keputusan kualitas, kompleksitas bertambah secara eksponensial karena adanya variabel keputusan pemulihan (*recovery*), inspeksi kualitas, dan disposition produk rejected. Kedua paper ini menegaskan bahwa Benders Decomposition (BD) yang diperkenalkan oleh Jacques Benders (1962) merupakan metodologi *state-of-the-art* untuk menangani skala dan struktur masalah tersebut secara komputasional efisien. Framework multi-objektif diperlukan karena perusahaan tidak hanya mengejar minimalisasi biaya, tetapi juga minimalisasi emisi karbon, maksimalisasi tingkat layanan, dan maksimalisasi utilisasi kapasitas.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Model Multi-Objektif

Model yang dikembangkan Lead Researchers (2023) merumuskan tiga fungsi tujuan utama yang diintegrasikan melalui pendekatan *weighted sum scalarization*:

$$\min Z_1 = \sum_{i \in I} \sum_{j \in J} c_{ij}^{tr} \cdot q_{ij} + \sum_{j \in J} f_j \cdot y_j + \sum_{j \in J} \sum_{k \in K} h_{jk}^{pr} \cdot x_{jk}$$

$$\min Z_2 = \sum_{k \in K} \sum_{l \in L} d_{kl}^{em} \cdot t_{kl}$$

$$\max Z_3 = \sum_{l \in L} u_l \cdot s_l$$

di mana $c_{ij}^{tr}$ adalah biaya transportasi per unit dari *farm* $i$ ke *collection center* $j$; $f_j$ adalah fixed cost pembukaan fasilitas; $h_{jk}^{pr}$ adalah biaya pemrosesan; $x_{jk}$, $y_j$, $t_{kl}$ adalah variabel keputusan aliran dan fasilitas; $d_{kl}^{em}$ adalah emisi karbon per unit; $u_l$ adalah bobot utilitas pelayanan pelanggan; dan $s_l$ adalah tingkat layanan.

### 2.2 Benders Decomposition: Reformulasi Master-Subproblem

Benders Decomposition mempartisi model menjadi **Master Problem (MP)** yang hanya berisi variabel desain jaringan dan **Subproblem (SP)** yang berisi variabel operasional aliran:

**Master Problem (MP):**

$$\min_{y} \sum_{j \in J} f_j \cdot y_j + \theta$$

subject to:

$$\sum_{j \in J} y_j \geq 1, \quad y_j \in \{0,1\}$$

$$\theta \geq \pi^T (b - By)$$

dengan $\theta$ adalah variabel yang merepresentasikan lower bound fungsi subproblem; $\pi$ adalah dual multiplier dari *optimality/feasibility cuts*.

**Subproblem (SP) — Operational Layer:**

$$\min_{x,t} \sum_{i,j} c_{ij}^{tr} q_{ij} + \sum_{j,k} h_{jk}^{pr} x_{jk} + \sum_{k,l} d_{kl}^{em} t_{kl}$$

subject to:

$$\sum_{j} q_{ij} \leq Q_i^F, \quad \forall i \in I$$

$$\sum_{i} q_{ij} = \sum_{k} x_{jk}, \quad \forall j \in J$$

$$\sum_{k} t_{kl} \geq D_l - M(1-s_l), \quad \forall l \in L$$

$$x_{jk}, t_{kl}, q_{ij} \geq 0$$

### 2.3 Generasi Cuts dan Konvergensi Algoritma

Menurut Lead Researchers (2023), setiap iterasi BD menghasilkan satu *optimality cut* berbentuk:

$$\theta \geq \left[\sum_{i,j} \hat{c}_{ij}^{tr} \bar{q}_{ij} + \pi^T (b - B\bar{y})\right]$$

di mana $\bar{q}_{ij}$, $\bar{y}_j$ adalah nilai incumbent. Algoritma konvergen ketika **gap relatif** $(UB - LB)/UB \leq \epsilon$ dengan $\epsilon = 10^{-3}$. Zhang, Li, & Ren (2024) memperluas metodologi ini dengan memasukkan *chance-constraints* untuk kualitas produk recovered dengan confidence level $\alpha = 0.95$:

$$\Pr\left[\sum_{r} \zeta_r x_r \leq \Gamma\right] \geq 1 - \alpha$$

yang ditangani melalui teknik Big-M linearization dan scenario-based decomposition pada subproblem reverse-logistik.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi rekayasa dari framework Benders Multi-Objektif mengikuti Standard Operating Procedure (SOP) berlapis yang selaras dengan metodologi paper.

### 3.1 Diagram Alir Prosedural

```
[Tahap 1] Karakterisasi Jaringan & Akuisisi Data
   ↓ (Demand forecasting, kapasitas fasilitas, biaya, emisi)
[Tahap 2] Formulasi MILP Monolithic
   ↓ (Validasi dimensi matriks kendala)
[Tahap 3] Partisi Variabel: Desain vs. Operasional
   ↓ (Identifikasi complicating variables y_j)
[Tahap 4] Inisialisasi Master Problem
   ↓ (Set y^0 = 0, θ = -∞)
[Tahap 5] Iterasi Benders Loop:
   ├─ Solve MP → peroleh (y*, θ*)
   ├─ Solve SP dengan fixed y* → peroleh (x*, dual π*)
   ├─ Cek konvergensi: |UB - LB| ≤ ε
   └─ Jika belum konvergen → tambah optimality/feasibility cut
[Tahap 6] Pareto Front Generation
   ↓ (Variasi bobot ω₁, ω₂, ω₃ ∈ [0,1], Σω = 1)
[Tahap 7] Decision Support: TOPSIS atau Compromise Programming
   ↓
[Tahap 8] Implementasi & Validasi Lapangan
```

### 3.2 Parameter Tuning Industri

Sesuai temuan Lead Researchers (2023), tuning parameter kritis meliputi:

- **Maximum iteration limit:** $K_{max} = 250$ iterasi
- **Cut pool management:** mempertahankan 50 cuts aktif untuk mencegah *memory overflow*
- **Warm-start strategy:** inisialisasi $y_j^{(0)}$ menggunakan solusi heuristic Clarke-Saving untuk transportation layer
- **Parallel subproblem solving:** multiple SP diselesaikan concurrently dengan *branch-and-cut* parallelization

Zhang, Li, & Ren (2024) menambahkan protokol untuk reverse chain: **quality inspection decision node** dengan disposition routing ke {remanufacturing, recycling, disposal} berdasarkan threshold kualitas $q \geq q^*$ yang diselesaikan melalui **integer cut**:

$$\sum_{k} z_{k}^{insp} \geq 1 \quad \forall \text{batch } b$$

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Konfigurasi Studi Kasus — Dairy Network

Mengacu pada studi kasus di Lead Researchers (2023), misalkan sebuah perusahaan susu regional memiliki parameter berikut:

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Jumlah peternakan (*farms*) $I$ | 8 | lokasi |
| Jumlah collection centers $J$ | 4 | kandidat |
| Jumlah processing plants $K$ | 3 | kandidat |
| Jumlah distribution centers $L$ | 5 | tetap |
| Total demand $D_l$ | 12.000 | liter/hari |
| Fixed cost $f_j$ | [80, 120, 150, 95] | ribu USD/tahun |
| Processing cost $h_{jk}^{pr}$ | 0.18 | USD/liter |
| Transport cost $c_{ij}^{tr}$ | 0.05–0.12 | USD/liter.km |
| Carbon emission $d_{kl}^{em}$ | 0.025 | kgCO₂e/liter |
| Spoilage rate target | ≤ 5% | — |

### 4.2 Perhitungan Numerik Step-by-Step

**Langkah 1 — Inisialisasi & Heuristik Lower Bound (LB)**

Dari solusi awal LP-relaxation MP: $LB^{(0)} = \sum f_j y_j + \theta^{(0)}$. Dengan $y_j^{(0)} = 1$ untuk semua $j$ dan $\theta^{(0)} = -\infty$, kita求解 subproblem.

**Langkah 2 — Subproblem Solve**

Misalkan fixed $y = (1,1,1,1)$, biaya operasional minimum subproblem:

$$Z_{SP}^{(0)} = \sum_{i,j} c_{ij}^{tr} q_{ij} + \sum_{j,k} h_{jk}^{pr} x_{jk} = 432{,}500 + 216{,}000 = 648{,}500 \text{ USD/tahun}$$

dengan dual multipliers $\pi^* = [\pi_1, \pi_2, \pi_3, \pi_4] = [12.5, 15.2, 14.8, 13.6]$.

**Langkah 3 — Optimality Cut Generation**

$$\theta \geq 648{,}500 + \sum_{j=1}^{4} \pi_j^*(1 - y_j) = 648{,}500 + 12.5(1-y_1) + 15.2(1-y_2) + 14.8(1-y_3) + 13.6(1-y_4)$$

**Langkah 4 — Iterasi Kedua MP**

Sekarang MP menjadi:

$$\min \sum_{j=1}^{4} f_j y_j + \theta$$

subject to original binary constraint + optimality cut. Solusi kandidat baru $y^{(1)} = (0,1,1,0)$ (hanya CC2 dan CC3 dibuka), memberikan:

$$LB^{(1)} = 120{,}000 + 150{,}000 + \theta^{(1)} = 270{,}000 + 692{,}000 = 962{,}000$$

**Langkah 5 — Upper Bound (UB)**

Solusi feasible $(y^{(1)}, x^{(1)})$ menghasilkan $UB^{(1)} = 1{,}038{,}000$ USD.

**Langkah 6 — Gap & Konvergensi**

$$\text{Gap}^{(1)} = \frac{1{,}038{,}000 - 962{,}000}{1{,}038{,}000} = 7.32\% > 1\%$$

Iterasi dilanjutkan. Setelah iterasi ke-7:

$$LB^{(7)} = 1{,}012{,}500, \quad UB^{(7)} = 1{,}022{,}600, \quad \text{Gap} = 0.99\% \leq \epsilon$$

**Konvergen** dengan desain optimal: buka CC2 dan CC3 saja.

### 4.3 Interpretasi Manajerial

Hasil menunjukkan bahwa membuka keempat collection center adalah sub-optimal. Fixed cost saving dari menutup CC1 dan CC4 adalah $80{,}000 + 95{,}000 = 175{,}000$ USD/tahun, dengan kenaikan biaya operasional hanya $30{,}000$ USD/tahun karena utilisasi kapasitas CC2 dan CC3 naik menjadi 78% dan 82%. Total biaya berkurang 1.6%, emisi karbon turun 4.2%, dan tingkat layanan tetap di atas target 95%. Keputusan ini memenuhi ketiga objektif secara simultan — bukti efektivitas framework multi-objektif BD.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

### 5.1 Batasan Metodologis

Lead Researchers (2023) secara eksplisit mengakui beberapa limitasi: (a) **deterministic assumption** untuk parameter demand dan biaya, padahal pada kenyataannya stokastik; (b) **single-period planning horizon**, belum menangkap efek musiman (*seasonality*) produksi susu yang mencapai puncaknya di musim hujan; (c) asumsi **single product type**, padahal portofolio produk susu (UHT, pasteurized, yogurt, keju) memerlukan multi-product formulations. Zhang, Li, & Ren (2024) mengatasi sebagian limitasi ini melalui *quality-aware stochastic* subproblem, namun computational burden meningkat ~3.5x.

### 5.2