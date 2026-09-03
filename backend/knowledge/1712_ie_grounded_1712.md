# 1712 — Multi-Objective Optimization untuk Jaringan Rantai Pasok Produk Susu dengan Benders Decomposition

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Benders Decomposition for Network Design and Operations in a Reverse Supply Chain Considering Quality Decisions*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang unik dibandingkan rantai pasok manufaktur konvensional. Produk susu merupakan *highly perishable commodity* dengan umur simpan yang sangat pendek (3–21 hari tergantung jenis produk dan suhu), kandungan air tinggi (>87% pada susu segar), serta sensitivitas terhadap rantai dingin (*cold chain*). Menurut Lead Researchers (2023) yang dipublikasikan di *Industrial Engineering and Innovation Management* dengan DOI [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509), desain jaringan rantai pasok susu harus secara simultan mengoptimalkan beberapa objective yang saling bertentangan: minimisasi total biaya logistik, maksimisasi kesegaran produk (*freshness*), dan minimisasi emisi CO₂ dari aktivitas refrigerasi.

Urgensi penelitian ini diperkuat oleh tiga fenomena empiris. Pertama, *Food and Agriculture Organization* (FAO) melaporkan bahwa sekitar 14% produk pangan global hilang antara panen dan ritel, dengan proporsi lebih tinggi (20–25%) pada produk susu karena degradasi kualitas. Kedua, biaya energi untuk cold chain mencapai 30–40% dari total biaya operasional distributor susu. Ketiga, kebijakan *carbon pricing* di Uni Eropa dan beberapa negara Asia mengharuskan perusahaan susu melaporkan Scope 1 dan Scope 2 emissions, menciptakan tekanan finansial baru. Studi Lead Researchers (2023) menjawab kebutuhan ini dengan mengusulkan kerangka multi-objective yang diselesaikan secara efisien menggunakan Benders Decomposition.

Kontribusi paralel dari Zhang, Li, dan Ren (2024) dengan DOI [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437) memperluas paradigma Benders ke rantai pasok balik (*reverse supply chain*) dengan keputusan kualitas, di mana harga beli material daur ulang bergantung pada tingkat kontaminasi dan degradasi. Sinergi kedua paper menunjukkan bahwa arsitektur Benders mampu menangani masalah MINLP berskala besar dengan variabel diskrit (lokasi fasilitas) dan kontinu (aliran, kualitas) secara tractable, sebuah capaian yang sulit dicapai dengan solver commercial langsung (CPLEX, Gurobi) untuk jaringan >100 node.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Definisi Set, Parameter, dan Variabel

Misalkan jaringan rantai pasok susu terdiri dari himpunan $I$ Peternakan (farm), $J$ Pusat Pengumpulan (collection center), $K$ Pabrik Pengolahan (processing plant), $L$ Pusat Distribusi (DC), dan $M$ Pelanggan Ritel (retailer).

**Parameter:**
- $c_{ij}^{tc}$: biaya运输 susu mentah dari farm $i$ ke collection center $j$ (Rp/liter)
- $c_{jk}^{tp}$: biaya运输 susu dari CC $j$ ke plant $k$
- $f_k$: *fixed cost* membuka plant $k$
- $\alpha_i$: kapasitas produksi harian farm $i$ (liter/hari)
- $\beta_k$: kapasitas pengolahan plant $k$ (liter/hari)
- $q_i$: tingkat kualitas awal susu di farm $i$ (misal Total Plate Count, TPC, cfu/ml)
- $d_m$: permintaan ritel $m$ (liter/hari)
- $T^{max}$: batas waktu maksimum susu boleh berada dalam sistem (jam)
- $e^{co2}$: faktor emisi CO₂ per liter-km运输 refrigerasi (kg CO₂e/liter·km)
- $\theta$: faktor diskonto kesegaran (0–1)

**Variabel keputusan:**
- $x_{ij} \geq 0$: aliran susu mentah (liter/hari)
- $y_{jk} \geq 0$: aliran dari CC ke plant
- $z_k \in \{0,1\}$: 1 jika plant $k$ dibuka
- $w_{km} \geq 0$: aliran produk jadi ke ritel
- $\phi_i \in [0,1]$: indeks kesegaran rata-rata yang tiba di plant

### 2.2 Formulasi Multi-Objective

$$\min \; F_1 = \sum_{i,j} c_{ij}^{tc} x_{ij} + \sum_{j,k} c_{jk}^{tp} y_{jk} + \sum_k f_k z_k + \sum_{k,m} c_{km}^{td} w_{km}$$

$$\max \; F_2 = \sum_i \phi_i \alpha_i \quad \text{(kesegaran rata-rata tertimbang)}$$

$$\min \; F_3 = \sum_{i,j,k} e^{co2} \cdot d_{ij} \cdot x_{ij} + \sum_{j,k} e^{co2} \cdot d_{jk} \cdot y_{jk}$$

dengan kendala:

$$\sum_{j} x_{ij} \leq \alpha_i, \quad \forall i \tag{kapasitas farm}$$

$$\sum_i x_{ij} = \sum_k y_{jk}, \quad \forall j \tag{konservasi aliran CC}$$

$$\sum_j y_{jk} \leq \beta_k z_k, \quad \forall k \tag{kapasitas plant dengan fixed cost}$$

$$\sum_m w_{km} \leq \sum_j y_{jk}, \quad \forall k \tag{output processing}$$

$$\sum_k w_{km} \geq d_m, \quad \forall m \tag{pemenuhan permintaan}$$

$$\phi_i = \exp\left(-\theta \sum_{(i,j,k) \in \mathcal{P}} t_{ijk}\right) \tag{fungsi degradasi kesegaran Arrhenius-diskret}$$

dengan $t_{ijk}$ adalah waktu tempuh kumulatif dan $\mathcal{P}$ himpunan path dari $i \to j \to k$.

### 2.3 Teknik Augmented $\epsilon$-Constraint untuk Multi-Objective

Lead Researchers (2023) mengubah masalah multi-objective menjadi scalar single-objective menggunakan metode *augmented $\epsilon$-constraint*:

$$\min F_1 \quad \text{s.t.} \quad F_2 \geq \epsilon_2, \; F_3 \leq \epsilon_3, \; \text{dan kendala (1)–(7)}$$

dengan iterasi pembentukan *Pareto front* melalui variasi parameter $\epsilon_2$ dan $\epsilon_3$.

### 2.4 Benders Decomposition untuk Tractability

Karena $z_k$ adalah variabel biner yang mengkomplikasi ruang solusi, masalah dipartisi:

**Master Problem (MP):** hanya variabel biner $z_k$
$$\min \sum_k f_k z_k + \eta$$
s.t. $\eta \geq \text{cuts dari SP}$

**Subproblem (SP):** untuk fixed $\bar{z}_k$, optimasi aliran kontinu (transportasi)
$$\min \sum_{i,j} c_{ij}^{tc} x_{ij} + \sum_{j,k} c_{jk}^{tp} y_{jk} + \sum_{k,m} c_{km}^{td} w_{km}$$
s.t. kendala (1)–(7) dengan $z_k = \bar{z}_k$

Dual SP menghasilkan *optimality cut*:
$$\eta \geq \pi^T (b - A\bar{z}) \quad \forall \text{extreme point dual feasible}$$

Jika SP infeasible, *feasibility cut* ditambahkan. Algoritma berhenti ketika $\eta_{MP} - \eta_{SP} \leq \epsilon$ (gap relatif < 0.1%).

Zhang, Li, & Ren (2024) dengan DOI [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437) memperluas struktur ini dengan menambahkan subproblem kedua untuk keputusan kualitas reverse flow, di mana harga beli $p_q$ bergantung pada tingkat kontaminasi $\kappa$:
$$p_q = p_0 - \gamma \cdot \kappa, \quad \gamma > 0$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis di industri mengikuti alur rekayasa berikut (Lead Researchers, 2023):

**Fase 1 — Akuisisi Data (Minggu 1–3)**
1. Pemetaan geospasial farm, CC, plant existing menggunakan GIS (QGIS/ArcGIS).
2. Pengumpulan data time-series produksi harian, TPC/kualitas, demand ritel dari ERP (SAP, Oracle).
3. Kalibrasi parameter degradasi kesegaran menggunakan data historis pada suhu 4°C (standar SNI 01-3951-1995 untuk susu pasteurisasi).

**Fase 2 — Formulasi & Validasi Model (Minggu 4–5)**
4. Translasi masalah ke formulasi MILP (Mixed-Integer Linear Programming) dengan bantuan piranti seperti *AMPL*, *GAMS*, atau *Pyomo*.
5. Validasi model dengan *historical data backtesting* — membandingkan output model dengan keputusan aktual 6–12 bulan sebelumnya (target MAPE < 8%).

**Fase 3 — Solusi Benders (Minggu 6–7)**
6. Implementasi algoritma Benders dalam Python (Pyomo + Gurobi) atau Julia (JuMP).
7. Set toleransi konvergensi $\epsilon = 10^{-4}$, batas iterasi maksimum = 200.
8. Generate *Pareto front* dengan 20–30 titik non-dominated.

**Fase 4 — Sensitivity & Robustness (Minggu 8)**
9. Analisis sensitivitas terhadap parameter $\alpha_i$, $d_m$, $c^{tc}$ (variasi ±20%).
10. Uji skenario disruption (kebijakan lockdown, kenaikan harga BBM).

**Fase 5 — Implementasi & Monitoring (Minggu 9–12)**
11. *Pilot run* di 1 region selama 30 hari.
12. Dashboard monitoring real-time (Power BI/Tableau) dengan KPI: biaya/liter, kesegaran, emisi CO₂eq/liter.
13. SOP disesuaikan dengan ISO 22000:2018 (Food Safety Management) dan ISO 14064-1:2018 (GHG quantification).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Input Parameter (Studi Kasus: Distributor Susu Regional Jawa Barat)

Misalkan jaringan dengan $|I|=8$ farm, $|J|=3$ collection center, $|K|=2$ plant kandidat, $|M|=5$ retailer.

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| $\alpha_i$ (kapasitas farm) | 5.000, 7.000, 6.500, 4.500, 8.000, 5.500, 6.000, 7.500 | liter/hari |
| $f_k$ (fixed cost plant) | 2,5 dan 3,2 | milyar Rp/tahun |
| $c_{ij}^{tc}$ | 250–450 | Rp/liter |
| $c_{jk}^{tp}$ | 180–320 | Rp/liter |
| $\beta_k$ | 25.000 dan 30.000 | liter/hari |
| $d_m$ (permintaan ritel) | 6.000, 8.000, 7.500, 9.000, 5.000 | liter/hari |
| $\theta$ (faktor degradasi) | 0,015 | per jam |
| $t_{ijk}$ rata-rata | 4–8 | jam