# 2656 — Kerangka Multi-Objective untuk Desain Jaringan Rantai Pasok Produk Susu dengan Dekomposisi Benders

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Benders Decomposition for Network Design and Operations in a Reverse Supply Chain Considering Quality Decisions*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri pengolahan susu global menghadapi tantangan struktural yang sangat khas dibandingkan dengan rantai pasok produk non-persiable. Produk susu memiliki *shelf-life* yang pendek (rata-rata 7–21 hari untuk susu pasteurisasi dan 6–9 bulan untuk UHT), memerlukan *cold chain* yang ketat dengan suhu penyimpanan 2–4°C, dan memiliki tingkat kerusakan (*spoilage rate*) yang sensitif terhadap waktu serta kondisi transportasi. Lead Researchers (2023) dalam publikasinya di *Industrial Engineering and Innovation Management* (DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)) menyoroti bahwa keputusan desain jaringan rantai pasok susu pada dasarnya bersifat *multi-objective*: perusahaan harus secara simultan meminimalkan total biaya logistik (transportasi, inventori, *facility opening*, dan produksi) sambil memaksimalkan tingkat layanan (*service level*) serta meminimalkan *product deterioration* yang berdampak langsung pada kerugian ekonomi dan reputasi merek.

Konteks industri yang melatari paper ini sangat relevan dengan kondisi empiris. Menurut data FAO dan laporan industri susu internasional, kerugian pascapanen (*post-harvest losses*) pada produk susu mencapai 15–30% di negara berkembang karena inefisiensi rantai dingin. Lead Researchers (2023) berargumen bahwa kerangka optimasi tunggal (*single-objective*) tidak mampu menangkap kompleksitas trade-off antara efisiensi biaya, keberlanjutan lingkungan (emisi karbon dari *refrigerated trucking*), dan kualitas produk. Oleh karena itu, mereka mengusulkan kerangka *mixed-integer linear programming* (MILP) dengan dekomposisi Benders untuk menyelesaikannya secara komputasional efisien.

Studi pendukung dari Yanzi Zhang, Hongzhen Li, dan Yaping Ren (2024) yang diterbitkan dengan DOI [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437) memperkuat relevansi metodologis dekomposisi Benders untuk desain jaringan rantai pasok, dengan menerapkan pada konteks *reverse supply chain* yang mempertimbangkan keputusan kualitas. Sinergi kedua paper menunjukkan bahwa dekomposisi Benders merupakan *state-of-the-art* untuk masalah jaringan berskala besar yang menggabungkan keputusan *strategic* (lokasi fasilitas) dan *operational* (aliran produk, inventori, kualitas). Urgensi industri dari pendekatan ini terletak pada kemampuan untuk menghasilkan solusi *near-optimal* dalam waktu komputasi yang wajar untuk jaringan dengan ratusan node potensial dan ribuan variabel keputusan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Jaringan Rantai Pasok Susu

Jaringan yang dimodelkan mengikuti struktur multi-echelon klasik: **Pemasok (Peternakan/Farms) → Pabrik Pengolahan (Processing Plants) → Pusat Distribusi (Distribution Centers) → Ritel/Pelanggan (Retailers)**. Lead Researchers (2023) memperkenalkan indeks himpunan berikut:

- $I = \{1, 2, \ldots, |I|\}$ : himpunan peternakan pemasok susu mentah
- $J = \{1, 2, \ldots, |J|\}$ : himpunan kandidat pabrik pengolahan
- $K = \{1, 2, \ldots, |K|\}$ : himpunan kandidat pusat distribusi
- $L = \{1, 2, \ldots, |L|\}$ : himpunan zona permintaan ritel
- $P = \{1, 2, \ldots, |P|\}$ : himpunan produk susu turunan (misal: susu pasteurisasi, yogurt, keju, mentega)
- $T = \{1, 2, \ldots, |T|\}$ : himpunan periode waktu diskret (harian/mingguan)

### 2.2 Parameter Model

Parameter-parameter input yang digunakan dalam paper adalah:

- $c_{ij}^r$ : biaya transportasi per unit susu mentah dari peternakan $i$ ke pabrik $j$
- $c_{jkl}^p$ : biaya transportasi per unit produk jadi $p$ dari pabrik $j$ ke DC $k$ ke ritel $l$
- $f_j$ : *fixed cost* pembukaan fasilitas pabrik $j$
- $g_k$ : *fixed cost* pembukaan DC $k$
- $\alpha_p$ : rasio konversi susu mentah menjadi produk $p$
- $\beta_p$ : koefisien kerusakan (*spoilage*) produk $p$ per unit waktu
- $\theta_{ij}$ : jarak transport susu mentah
- $\lambda_l^p$ : permintaan ritel $l$ terhadap produk $p$
- $Q_j$ : kapasitas produksi pabrik $j$
- $V_k$ : kapasitas DC $k$
- $M$ : *big-M* untuk linearisasi

### 2.3 Variabel Keputusan

Variabel keputusan dalam model MILP ini:

- $x_j \in \{0,1\}$ : keputusan biner pembukaan pabrik $j$
- $y_k \in \{0,1\}$ : keputusan biner pembukaan DC $k$
- $q_{ij} \geq 0$ : kuantitas susu mentah yang dikirim dari $i$ ke $j$
- $w_{jkl}^p \geq 0$ : kuantitas produk $p$ yang dikirim dari $j$ melalui $k$ ke $l$
- $s_{kl}^p \geq 0$ : inventori produk $p$ di DC $k$ untuk melayani ritel $l$
- $z_j^p \geq 0$ : jumlah produksi produk $p$ di pabrik $j$

### 2.4 Formulasi Multi-Objective

Lead Researchers (2023) merumuskan tiga fungsi tujuan yang dioptimasi secara simultan menggunakan pendekatan *weighted sum* dan *epsilon-constraint*:

**Objektif 1 — Minimasi Total Biaya:**

$$\min Z_1 = \sum_{j \in J} f_j x_j + \sum_{k \in K} g_k y_k + \sum_{i \in I}\sum_{j \in J} c_{ij}^r q_{ij} + \sum_{j \in J}\sum_{k \in K}\sum_{l \in L}\sum_{p \in P} c_{jkl}^p w_{jkl}^p + \sum_{k \in K}\sum_{l \in L}\sum_{p \in P} h_k^p s_{kl}^p$$

di mana $h_k^p$ adalah biaya *holding* per unit produk $p$ di DC $k$.

**Objektif 2 — Minimasi Total Kerusakan Produk:**

$$\min Z_2 = \sum_{p \in P}\sum_{j \in J}\sum_{k \in K}\sum_{l \in L} \beta_p \tau_{jkl} w_{jkl}^p$$

dengan $\tau_{jkl}$ merepresentasikan waktu transit rata-rata dari $j \to k \to l$.

**Objektif 3 — Maksimasi Service Level:**

$$\max Z_3 = \sum_{l \in L}\sum_{p \in P} \frac{\sum_{j \in J}\sum_{k \in K} w_{jkl}^p}{\lambda_l^p}$$

### 2.5 Kendala Utama

**Kendala keseimbangan material di pabrik:**
$$\sum_{i \in I} \alpha_p q_{ij} + z_j^{p,in} = z_j^{p,out} + z_j^{p,loss}, \quad \forall j \in J, p \in P$$

**Kendala kapasitas:**
$$\sum_{p \in P} z_j^p \leq Q_j x_j, \quad \forall j \in J$$
$$\sum_{p \in P}\sum_{l \in L} s_{kl}^p \leq V_k y_k, \quad \forall k \in K$$

**Kendala permintaan terpenuhi:**
$$\sum_{j \in J}\sum_{k \in K} w_{jkl}^p \geq \lambda_l^p, \quad \forall l \in L, p \in P$$

### 2.6 Struktur Dekomposisi Benders

Lead Researchers (2023) mempartisi problem menjadi:

**Master Problem (MP)** — variabel biner lokasi fasilitas:

$$\min_{x, y} \sum_{j \in J} f_j x_j + \sum_{k \in K} g_k y_k + \eta$$

dengan kendala:
$$x_j \in \{0,1\}, \quad y_k \in \{0,1\}$$

dan kendala *optimality cut* dari subproblem:

$$\eta \geq \sum_{(x^*, y^*) \in \mathcal{F}} \pi (x - x^*) + \rho (y - y^*)$$

**Subproblem (SP)** — operasional untuk $(x^*, y^*)$ fixed:

$$\min Z_{SP} = \sum_{i,j} c_{ij}^r q_{ij} + \sum_{j,k,l,p} c_{jkl}^p w_{jkl}^p + \sum_{k,l,p} h_k^p s_{kl}^p$$

Dual SP menghasilkan *multipliers* $\pi, \rho$ untuk pembentukan cut.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Implementasi

```
┌─────────────────────────────────────────────────────────┐
│  TAHAP 1: Akuisisi & Validasi Data Industri             │
│  - Demand forecasting (SARIMA/Prophet)                   │
│  - Pemetaan geospasial fasilitas kandidat                │
│  - Audit biaya logistik real-time                        │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  TAHAP 2: Formulasi Model Multi-Objective               │
│  - Penentuan bobot ε-constraint (ε₁, ε₂, ε₃)            │
│  - Validasi parameter dengan expert judgment              │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  TAHAP 3: Inisialisasi Master Problem (MP₀)            │
│  - Solve relaxed MP tanpa cut                            │
│  - Dapatkan initial lower bound (LB₀)                    │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  TAHAP 4: Iterasi Benders                               │
│  ┌─────────────────────────────────────────────┐        │
│  │ 4a: Solve MP → (x*, y*, η*)                │        │
│  │ 4b: Solve SP dengan (x*, y*) fixed         │        │
│  │ 4c: Generate optimality/feasibility cut    │        │
│  │ 4d: Update LB = max(LB, η*), UB = min(UB)  │        │
│  │ 4e: Cek konvergensi |UB-LB|/LB ≤ 1e-4     │        │
│  └─────────────────────────────────────────────┘        │
└─────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────┐
│  TAHAP 5: Post-Processing & Sensitivitas                │
│  - Analisis Pareto front                                │
│  - Stress test terhadap parameter kunci                  │
│  - Validasi solusi dengan pilot implementation          │
└─────────────────────────────────────────────────────────┘
```

### 3.2 SOP Pengumpulan Parameter Empiris

1. **Data Permintaan:** Histori 24 bulan dari POS ritel, dilengkap dengan *weather index* karena konsumsi susu musiman.
2. **Data Biaya Transportasi:** Dari tender logistik atau benchmark industri (Rp 250–450/km untuk *refrigerated truck*).
3. **Data Kerusakan Produk:** Studi accelerated shelf-life testing (ASLT) untuk menentukan $\beta_p$ per produk.
4. **Data Kapasitas Fasilitas:** Audit OEE (*Overall Equipment Effectiveness*) lini produksi UHT/pasteurisasi.

### 3.3 Arsitektur Teknologi Pendukung

Implementasi Lead Researchers (2023) menggunakan stack teknologi: **Python + Pyomo/Gurobi** untuk formulasi dan penyelesaian, **PostgreSQL/PostGIS** untuk data geospasial, dan **Tableau/PowerBI** untuk dashboard visualisasi Pareto front. Pendekatan ini paralel dengan framework yang dikembangkan Zhang et al. (2024) untuk reverse supply chain yang menggunakan dekomposisi Benders *generalized* (GBD) dengan tambahan *quality decisions* sebagai variabel kontinu di subproblem.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Data Input Numerik

Diadaptasi dari studi kasus Lead Researchers (2023) untuk jaringan susu di regional Asia:

**Tabel 1. Parameter Biaya & Kapasitas**

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| $f_j$ (fixed cost pabrik) | 8.500.000 | USD/tahun |
| $g_k$ (fixed cost DC) | 3.200.000 | USD/tahun |
| $c_{ij}^r$ | 0.045 | USD/unit-km |
| $c_{jkl}^p$ | 0.062 | USD/unit-km |
| $Q_j$ | 45.000 | unit/hari |
| $V_k$ | 18.