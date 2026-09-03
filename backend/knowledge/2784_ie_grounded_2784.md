# 2784 — Optimasi Multi-Objektif Jaringan Rantai Pasok Produk Susu dengan Benders Decomposition

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang unik karena karakteristik intrinsik produknya: **perishability tinggi**, **sensitivitas suhu**, dan **shelf-life pendek** yang umumnya berkisar 7–21 hari untuk produk pasteurisasi dan 3–6 bulan untuk produk UHT (Ultra High Temperature). Karakteristik ini membedakan rantai pasok susu dari rantai pasok produk FMCG (Fast-Moving Consumer Goods) lainnya, karena degradasi kualitas terjadi secara eksponensial terhadap waktu dan suhu, sesuai dengan persamaan Arrhenius yang umum diaplikasikan dalam literatur rekayasa pangan.

Lead Researchers (2023) dalam artikelnya di *Industrial Engineering and Innovation Management* (DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)) mengusulkan kerangka kerja multi-objektif untuk desain jaringan rantai pasok produk susu yang mengintegrasikan tiga dimensi keputusan simultan: (1) lokasi dan kapasitas fasilitas produksi, (2) alokasi produk antara pabrik, gudang distribusi, dan pasar ritel, serta (3) kebijakan manajemen inventaris berdasarkan degradasi kualitas. Pendekatan ini menjadi relevan karena lebih dari 70% biaya operasional rantai pasok susu berasal dari aktivitas cold-chain logistics, sementara food loss di sektor susu global mencapai 20–25% menurut data FAO.

Urgensi ekonomi semakin meningkat ketika mempertimbangkan fenomena *cold-chain disruption* yang dipercepat oleh perubahan iklim, volatilitas harga energi untuk refrigerasi, dan meningkatnya ekspektasi konsumen terhadap produk *fresh* dan *organic*. Kerangka kerja multi-objektif memungkinkan pengambil keputusan untuk melakukan trade-off eksplisit antara biaya total, emisi karbon, dan tingkat kesegaran produk yang terukur melalui *Quality Degradation Index*. Pendekatan ini sangat berbeda dengan optimasi single-objective tradisional yang cenderung mengabaikan dimensi keberlanjutan lingkungan dan keamanan pangan.

Zhang, Li, dan Ren (2024) dalam publikasi di jurnal peer-review (DOI: [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)) melengkapi landasan ini dengan menunjukkan bahwa keputusan kualitas dalam reverse supply chain—yakni alokasi produk kembalian, inspeksi, dan disposition—juga dapat diformulasikan dalam struktur Benders Decomposition yang sama. Integrasi kedua perspektif ini (forward dan reverse logistics) menjadi semakin penting dengan maraknya regulasi Extended Producer Responsibility (EPR) di Uni Eropa dan negara maju lainnya. Sinergi kedua paper tersebut membentuk basis metodologis yang robust untuk desain jaringan rantai pasok dairy yang holistik.

---

## 2. Landasan Teori & Formulasi Matematis

Formulasi matematis mengikuti struktur Mixed-Integer Linear Programming (MILP) dua-tahap yang amenable terhadap Benders Decomposition. Tahap pertama (*master problem*) memutuskan variabel desain jaringan (lokasi fasilitas dan kapasitas), sedangkan tahap kedua (*subproblem*) mengoptimalkan variabel operasional (aliran produk dan inventaris).

### 2.1 Formulasi Master Problem

Master problem memilih lokasi fasilitas dan kapasitas produksi:

$$\min_{y, z} \sum_{i \in I} f_i y_i + \sum_{j \in J} g_j z_j + \theta$$

terhadap约束:

$$\sum_{j \in J} z_j \geq D_k \quad \forall k \in K \quad \text{(permintaan minimum)}$$

$$z_j \leq C_j y_j \quad \forall j \in J \quad \text{(kapasitas fasilitas)}$$

$$y_i \in \{0,1\}, \quad z_j \geq 0$$

di mana $y_i$ adalah variabel biner untuk pembukaan fasilitas di lokasi $i$, $z_j$ adalah kapasitas terpasang, $f_i$ adalah fixed cost pembukaan, $g_j$ adalah biaya kapasitas per-unit, $D_k$ adalah permintaan di pasar $k$, dan $\theta$ adalah *optimality cut* yang merepresentasikan biaya operasional minimum yang akan didekomposisi.

### 2.2 Subproblem (Operasional)

Setelah desain jaringan tetap, subproblem meminimalkan biaya operasional dan transportasi:

$$\min_{x, q, e} \sum_{(i,j)} c_{ij} x_{ij} + \sum_{(j,k)} c_{jk} x_{jk} + \sum_{(j,k)} p_k e_{jk} + \sum_{(j,k)} \alpha_k \cdot Q(x_{jk})$$

dengan:

$$\sum_{j} x_{jk} + e_{jk} = d_k \quad \forall k$$

$$\sum_{i} x_{ij} = \sum_{k} x_{jk} \quad \forall j \quad \text{(konservasi aliran)}$$

$$x_{ij}, x_{jk}, e_{jk} \geq 0$$

di mana $x_{ij}$ adalah aliran dari fasilitas $i$ ke hub $j$, $x_{jk}$ adalah aliran dari hub $j$ ke pasar $k$, $e_{jk}$ adalah unmet demand (shortage), $c_{ij}$ dan $c_{jk}$ adalah biaya transportasi per-unit, $p_k$ adalah penalty cost untuk unmet demand, dan $\alpha_k \cdot Q(x_{jk})$ adalah fungsi biaya degradasi kualitas sesuai Lead Researchers (2023).

### 2.3 Fungsi Degradasi Kualitas

Model kualitas mengikuti eksponensial degradasi:

$$Q(t) = Q_0 \cdot e^{-\beta(T) \cdot t}$$

di mana $Q_0$ adalah kualitas awal, $\beta(T)$ adalah laju degradasi yang bergantung suhu (umumnya $\beta(T) = \beta_0 \cdot 2^{(T-T_{ref})/10}$ untuk aturan $Q_{10}$ dalam mikrobiologi pangan), dan $t$ adalah waktu transit. Total kualitas yang sampai ke konsumen menjadi:

$$\text{Quality}_{jk} = Q_0 \cdot e^{-\beta(T_{jk}) \cdot \tau_{jk}}$$

### 2.4 Fungsi Multi-Objektif

Kerangka kerja multi-objektif Lead Researchers (2023) menggunakan pendekatan *weighted sum* dengan normalisasi:

$$\min Z = w_1 \tilde{Z}_{\text{cost}} + w_2 \tilde{Z}_{\text{emission}} + w_3 (1 - \tilde{Z}_{\text{freshness}})$$

dengan $\sum w_i = 1$ dan $\tilde{Z}_i$ adalah objective yang dinormalisasi terhadap nilai ideal menggunakan reference point methodology. Ini memungkinkan eksplorasi Pareto front secara eksplisit.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi Benders Decomposition untuk desain jaringan dairy mengikuti SOP terstruktur berikut:

### 3.1 Fase 1: Karakterisasi Data

Langkah pertama adalah pengumpulan parameter industri yang presisi: kapasitas fasilitas (liter/hari), biaya investasi tetap, biaya transportasi per unit-jarak, profil permintaan musiman, dan parameter degradasi kualitas produk spesifik (susu pasteurisasi, UHT, yogurt, keju). Standar industri mengikuti ISO 22000 untuk food safety dan ISO 14001 untuk manajemen lingkungan.

### 3.2 Fase 2: Konstruksi Model Matematis

Model MILP dibangun menggunakan notasi himpunan (sets), parameter (parameters), variabel keputusan (decision variables), dan fungsi tujuan (objective functions). Software yang umum digunakan: Gurobi, CPLEX, atau open-source CBC dengan API Python/Pyomo.

### 3.3 Fase 3: Dekomposisi Benders

```
┌─────────────────────────────────────┐
│  MASTER PROBLEM (Desain Jaringan)   │
│  - Variabel: y_i, z_j              │
│  - Fungsi: min Σf_i·y_i + Σg_j·z_j + θ │
└──────────────┬──────────────────────┘
               │ (subgradien/dual)
               ▼
┌─────────────────────────────────────┐
│  SUBPROBLEM (Operasional)           │
│  - Variabel: x_ij, x_jk, e_jk      │
│  - Dual: π, μ                     │
│  - Return: optimality cut atau     │
│            feasibility cut         │
└──────────────┬──────────────────────┘
               │
               ▼ (iterasi sampai konvergensi)
       UPDATE master problem dengan cut baru
       sampai |θ_upper - θ_lower| < ε
```

### 3.4 Fase 4: Validasi dan Sensitivitas

Validasi dilakukan melalui: (1) perbandingan solusi Benders dengan solver MILP langsung pada instance kecil, (2) analisis sensitivitas terhadap parameter kritis (permintaan, biaya energi refrigerasi, lead time), dan (3) verifikasi menggunakan data historis 12 bulan.

### 3.5 Fase 5: Eksplorasi Pareto Front

Untuk dimensi multi-objektif, digunakan teknik ε-constraint atau weighted sum untuk menghasilkan sekumpulan solusi non-dominated yang merepresentasikan trade-off antara biaya, emisi, dan kesegaran.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Setup Instance

Pertimbangkan jaringan dairy hipotetis dengan parameter berikut:

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Pabrik (i) | 3 lokasi | - |
| Hub distribusi (j) | 4 lokasi | - |
| Pasar (k) | 8 zona | - |
| Permintaan total | 1.200.000 | liter/hari |
| Biaya fixed pabrik | 8.000.000 | USD/tahun |
| Biaya fixed hub | 2.500.000 | USD/tahun |
| Biaya kapasitas pabrik | 12 | USD/liter-hari |
| Biaya transportasi (i,j) | 0,08 | USD/liter-km |
| Biaya transportasi (j,k) | 0,12 | USD/liter-km |
| Jarak rata-rata (i,j) | 150 | km |
| Jarak rata-rata (j,k) | 75 | km |
| Penalty unmet demand | 1,50 | USD/liter |
| β₀ pada T_ref=4°C | 0,015 | /jam |
| Suhu aktual T | 4 | °C |
| Shelf-life target | 14 | hari |

### 4.2 Perhitungan Manual Benders Iteration #1

**Master Problem (Iterasi 1):** Relaxasi subproblem dengan θ = 0:

$$\min 8M \cdot y_1 + 8M \cdot y_2 + 8M \cdot y_3 + 2{,}5M \cdot z_1 + ... + \theta$$

Untuk simplifikasi, asumsikan solusi master awal membuka 1 pabrik (Plant 1) dengan kapasitas 1.200.000 L/hari.

**Subproblem (Plant 1 aktif):** Hitung biaya operasional:

Biaya transportasi rata-rata:
$$C_{trans} = 0{,}08 \times 150 + 0{,}12 \times 75 = 12 + 9 = 21 \text{ USD/liter}$$

Biaya kualitas (rata-rata transit 2 hari):
$$Q_{loss} = 1 - e^{-0{,}015 \times 24 \times 2} = 1 - e^{-0{,}72} = 1 - 0{,}4868 = 0{,}5132$$

Artinya 51,32% kualitas terdegradasi selama transit—sangat tinggi, menandakan perlunya jaringan hub yang lebih pendek atau peningkatan refrigerasi.

**Optimality Cut untuk iterasi berikutnya:**
$$\theta \geq 21 \cdot D - \sum_k \pi_k d_k$$

dengan dual prices $\pi_k$ yang merepresentasikan *shadow price* permintaan di setiap pasar.

### 4.3 Hasil Interpretasi Manajerial

Setelah 8–12 iterasi Benders (standar tipikal untuk instance sedang), solusi optimal yang muncul:

- **Pabrik dibuka:** 2 dari