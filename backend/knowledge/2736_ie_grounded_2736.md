# 2736 — Desain Jaringan Rantai Pasok Multi-Objektif Produk Susu dengan Benders Decomposition untuk Rantai Pasok Maju dan Balik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang semakin kompleks, terutama karena karakteristik **mudah rusak (perishability)**, **umur simpan pendek (short shelf-life)**, serta **fluktuasi permintaan musiman** yang tinggi. Menurut Lead Researchers (2023) dalam *Industrial Engineering and Innovation Management*, jaringan rantai pasok susu sapi segar (raw milk) dan produk turunannya (yogurt, keju, mentega, UHT milk) memerlukan keputusan desain jaringan (*network design*) yang simultan terhadap lokasi fasilitas, kapasitas produksi, aliran distribusi, serta strategi penanganan produk kadaluarsa. DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509).

Urgensi industri ini didorong oleh tiga faktor utama. **Pertama**, produk susu memiliki *degradation rate* yang signifikan—misalnya susu pasteurisasi hanya mempertahankan kualitas sensoris selama 7–14 hari pada suhu 4°C, sehingga *lead time* distribusi menjadi variabel kritis. **Kedua**, regulasi keamanan pangan (HACCP, Codex Alimentarius, SNI 01-3951-1995) mensyaratkan traceability dan *cold chain integrity* yang ketat. **Ketiga**, tekanan keberlanjutan memaksa perusahaan mengintegrasikan dimensi emisi CO₂, *food loss and waste (FLW)*, dan *reverse logistics* ke dalam keputusan operasional.

Paper Lead Researchers (2023) mengusulkan kerangka **multi-objective mixed-integer linear programming (MOMILP)** yang diselesaikan dengan **Benders Decomposition (BD)** untuk memecahkan masalah skala besar (large-scale combinatorial) secara efisien. Pendekatan ini relevan karena model jaringan susu tipikal melibatkan ratusan variabel biner (lokasi fasilitas) dan ribuan variabel kontinu (aliran produk), yang sulit diselesaikan dengan solver MILP konvensional dalam waktu komputasi yang acceptable.

Pelengkap penting datang dari Zhang, Li, & Ren (2024) yang menerapkan Benders Decomposition pada **reverse supply chain** dengan keputusan kualitas (*quality decisions*). DOI: [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437). Integrasi forward dan reverse network ini menghasilkan arsitektur *closed-loop supply chain* (CLSC) yang sangat relevan untuk industri susu, mengingat isu返却 produk (return), daur ulang kemasan, dan pemulihan nilai (*value recovery*) dari produk kadaluarsa menjadi concern strategis.

Konteks ekonomi: pasar produk susu global bernilai lebih dari USD 880 miliar (2022) dengan CAGR 5,2%. Optimalisasi 1% saja pada biaya logistik dapat menghemat miliaran dolar secara agregat. Inilah justifikasi kuat bagi investasi pada model optimasi multi-objektif seperti yang dikembangkan dalam paper.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Notasi Model

**Himpunan (Sets):**
- $I$: himpunan supplier/petanak susu, indeks $i \in I$
- $J$: himpunan plant/pabrik pengolahan, indeks $j \in J$
- $K$: himpunan distribution center (DC), indeks $k \in K$
- $L$: himpunan retailer/zone permintaan, indeks $l \in L$
- $P$: himpunan jenis produk susu, indeks $p \in P$
- $T$: periode perencanaan, indeks $t \in T$

**Parameter:**
- $c_{ij}$: biaya transportasi per unit dari supplier $i$ ke plant $j$
- $f_j$: biaya tetap operasional plant $j$
- $d_{lp}^t$: permintaan produk $p$ di retailer $l$ pada periode $t$
- $\alpha_p$: tingkat degradasi kualitas produk $p$ per satuan waktu
- $\rho_{ij}$: emisi CO₂ per unit yang diangkut dari $i$ ke $j$
- $M$: bilangan big-M (nilai sangat besar)
- $cap_j$: kapasitas plant $j$

**Variabel Keputusan:**
- $x_{ij}$: aliran susu mentah dari $i$ ke $j$ (variabel kontinu non-negatif)
- $y_j \in \{0,1\}$: 1 jika plant $j$ dibuka
- $z_{kl}^p$: aliran produk $p$ dari DC $k$ ke retailer $l$
- $q_{lp}^t$: kualitas produk $p$ yang diterima retailer $l$ pada periode $t$
- $u_{ij}^{bd}$: variabel dual untuk sub-problem

### 2.2 Formulasi Multi-Objektif

Paper Lead Researchers (2023) merumuskan tiga fungsi tujuan yang saling konflik:

**Objektif 1 — Minimalisasi Biaya Total:**

$$Z_1 = \min \sum_{i \in I} \sum_{j \in J} c_{ij} x_{ij} + \sum_{j \in J} f_j y_j + \sum_{p \in P} \sum_{k \in K} \sum_{l \in L} c_{kl}^p z_{kl}^p$$

**Objektif 2 — Maksimalisasi Kesegaran Produk (Freshness):**

$$Z_2 = \max \sum_{l \in L} \sum_{p \in P} \sum_{t \in T} \left(1 - \alpha_p \cdot \tau_{kl}^p\right) z_{kl}^p$$

dengan $\tau_{kl}^p$ adalah waktu tempuh dari DC $k$ ke retailer $l$ untuk produk $p$.

**Objektif 3 — Minimalisasi Jejak Karbon:**

$$Z_3 = \min \sum_{i \in I} \sum_{j \in J} \rho_{ij} x_{ij} + \sum_{j \in J} \sum_{k \in K} \rho_{jk} y_j + \sum_{k \in K} \sum_{l \in L} \rho_{kl} z_{kl}^p$$

### 2.3 Kendala (Constraints)

**Kendala Kapasitas Plant:**

$$\sum_{i \in I} x_{ij} \leq cap_j \cdot y_j, \quad \forall j \in J$$

**Kendala Keseimbangan Aliran (Flow Balance):**

$$\sum_{j \in J} x_{ij} = S_i, \quad \forall i \in I$$

dengan $S_i$ adalah kapasitas supplier $i$.

**Kendala Pemenuhan Permintaan:**

$$\sum_{k \in K} z_{kl}^p \geq d_{lp}^t, \quad \forall l \in L, p \in P, t \in T$$

**Kendala Kualitas Minimum:**

$$q_{lp}^t \geq q_{\min}^p, \quad \forall l \in L, p \in P, t \in T$$

### 2.4 Formulasi Benders Decomposition

Karena kompleksitas komputasional, Lead Researchers (2023) menerapkan Benders Decomposition yang membagi masalah menjadi:

**Master Problem (MP) — keputusan lokasi & investasi:**

$$\min_{y} \sum_{j \in J} f_j y_j + \eta$$

subject to: $\eta \geq 0$ dan kendala biner.

**Sub-Problem (SP) — keputusan aliran untuk fixed $y$:**

Diberikan $\bar{y}$, sub-problem adalah:

$$\min \sum_{i,j} c_{ij} x_{ij} + \sum c_{kl}^p z_{kl}^p$$

subject to kendala kapasitas dan keseimbangan dengan $y_j = \bar{y_j}$. Nilai optimal SP menjadi lower bound, dan dari dual SP diturunkan **Benders cut** untuk MP. Cut optimalitas memiliki bentuk:

$$\eta \geq \pi^T (\mathbf{b} - \mathbf{F}\bar{y}) + \mathbf{c}^T \bar{x}$$

di mana $\pi$ adalah variabel dual SP, $\mathbf{F}$ adalah matriks teknologis.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Implementasi Benders Decomposition

```
┌─────────────────────────────────────────────────────────────┐
│  LANGKAH 1: Inisialisasi                                    │
│  • Set UB = +∞, LB = -∞, ε = 0.01 (toleransi konvergensi)  │
│  • Iterasi = 0                                              │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  LANGKAH 2: Solve Master Problem (MP)                       │
│  • Dapatkan solusi y*, η*                                   │
│  • LB = max(LB, nilai MP)                                   │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  LANGKAH 3: Solve Sub-Problem (SP) dengan y* fixed         │
│  • Dapatkan x*, z*, dan variabel dual π*                    │
│  • UB = min(UB, nilai MP + nilai SP)                        │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  LANGKAH 4: Generate Benders Cut                            │
│  • Jika UB - LB ≤ ε(1+|UB|) → STOP (konvergen)            │
│  • Else: tambah cut η ≥ π*(b - F·y*) ke MP                 │
│  • Iterasi = Iterasi + 1, kembali ke Langkah 2              │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 Prosedur Operasional (SOP) Industri

**Tahap Pra-Implementasi:**
1. **Pengumpulan Data** — Kapasitas supplier, demand historis 12 bulan, biaya transportasi, koefisien emisi (ISO 14064, GHG Protocol Scope 3).
2. **Kalibrasi Parameter** — Estimasi $\alpha_p$ melalui accelerated shelf-life testing (ASLT) pada suhu 4°C, 25°C, dan 35°C.
3. **Discretization** — Periode $t$ dipilih mingguan karena shelf-life susu pasteurisasi hanya 7–14 hari.

**Tahap Eksekusi:**
4. **Pembuatan Model** — Formulasi MOMILP dengan software GAMS/CPLEX atau Python+Pyomo+Gurobi.
5. **Penerapan Augmented $\epsilon$-Constraint Method** — Untuk mengkonversi multi-objective menjadi single-objective, dengan variasi $Z_2$ dan $Z_3$ sebagai constraint tambahan.
6. **Running Benders Loop** — Seperti diagram di atas, dengan perhatian pada strategi *warm-start* dan *cut strengthening*.

**Tahap Pasca-Eksekusi:**
7. **Analisis Pareto Front** — Menghasilkan trade-off curve antar tujuan.
8. **Sensitivity Analysis** — Menguji robustness terhadap parameter $\alpha_p$ dan biaya BBM.
9. **Decision Support** — Manajer memilih kompromi berdasarkan *weight elicitation*.

### 3.3 Integrasi dengan Reverse Supply Chain (Zhang et al., 2024)

DOI: [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437) mengintegrasikan keputusan kualitas dalam reverse supply chain:

- **Collection centers** untuk produk susu kadaluarsa → di-*inspect* → masuk quality tier (high, medium, low)
- **Recovery options**: *recycling* (kompos/biogas), *remanufacturing* (processed dairy), *disposal*
- Variable keputusan: $r_{i,m}$ = jumlah produk di-*recover* di facility $m$ dengan kualitas tier

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Setup Kasus: PT Susu Nusantara (Hipotetis)

Perusahaan memiliki:
- **3 supplier** (peternak): $I = \{S_1, S_2, S_3\}$ dengan kapasitas $S_1=500$, $S_2=400$, $S_3=300$ liter/hari
- **4 kandidat plant**: $J = \{P_1, P_2, P_3, P_4\}$ dengan