# 2256 — Kerangka Multi-Objektif untuk Jaringan Rantai Pasok Produk Susu dengan Dekomposisi Benders

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Optimasi Jaringan Rantai Pasok Produk Susu dengan Dekomposisi Benders Multi-Objektif
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *SSRN Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang unik karena karakteristik perishability yang tinggi, rantai dingin (cold chain) yang wajib terjaga, serta fluktuasi permintaan musiman yang signifikan. Berdasarkan kerangka yang diusulkan oleh Lead Researchers (2023) dalam *Industrial Engineering and Innovation Management* dengan DOI 10.23977/ieim.2023.060509, jaringan rantai pasok susu membutuhkan pendekatan optimasi yang secara simultan mempertimbangkan keputusan strategis (lokasi fasilitas, kapasitas pabrik), taktis (jadwal produksi, alokasi inventaris), dan operasional (rute distribusi, kebijakan pengiriman). Studi tersebut menunjukkan bahwa biaya logistik dapat mencapai 30–40% dari total biaya operasional perusahaan susu, sehingga efisiensi jaringan menjadi determinan profitabilitas yang krusial.

Urgensi operasional semakin kompleks ketika keputusan multi-objektif dipertimbangkan: minimasi total biaya jaringan harus diseimbangkan dengan maksimasi kesegaran produk (*product freshness*), minimasi emisi karbon, dan pemerataan layanan ke seluruh segmen pelanggan. Pendekatan mono-objektif klasik terbukti tidak mampu menangkap trade-off ini secara realistis. Sebagai komplementer, Zhang, Li, dan Ren (2024) dengan DOI 10.2139/ssrn.5063437 memperluas paradigma Dekomposisi Benders ke ranah *reverse supply chain* dengan keputusan kualitas, menunjukkan fleksibilitas metodologis dekomposisi untuk masalah jaringan berskala besar.

Dalam konteks Indonesia sebagai salah satu konsumen susu terbesar di kawasan ASEAN dengan tingkat konsumsi per kapita yang terus meningkat, penerapan kerangka multi-objektif menjadi semakin relevan. Industri susu nasional menghadapi fragmentasi geografis yang tinggi (lebih dari 180 ribu peternak sapi perah dengan skala usaha kecil mendominasi), disparitas infrastruktur cold chain antar-wilayah, serta volatilitas harga bahan baku yang memerlukan keputusan jaringan yang robust. Tanpa kerangka optimasi multi-objektif berbasis dekomposisi, perusahaan susu cenderung membuat keputusan berdasarkan intuisi atau heuristik sederhana yang suboptimal secara global. Oleh karena itu, integrasi metodologi Dekomposisi Benders multi-objektif bukan sekadar kemajuan akademis melainkan kebutuhan rekayasa praktis yang mendesak untuk meningkatkan daya saing industri susu nasional.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Jaringan Rantai Pasok Susu

Jaringan yang dimodelkan mengikuti struktur multi-echelon: *supplier* (peternak/cooling center) → *processing plant* → *warehouse* (distribution center) → *retailer* → *end customer*. Setiap elemen $i$ dalam himpunan $I$ (pabrik), $J$ (gudang), dan $K$ (retailer) memiliki parameter kapasitas, biaya, dan lead time yang berbeda.

### 2.2 Formulasi Mixed-Integer Linear Programming (MILP)

Model lengkap mengikuti formulasi Lead Researchers (2023). Himpunan dan parameter yang digunakan:

- $I$ : himpunan kandidat pabrik, $|I|=p$
- $J$ : himpunan kandidat gudang, $|J|=w$
- $K$ : himpunan零售商 (retailer), $|K|=r$
- $L$ : himpunan produk (susu pasteurisasi, yogurt, keju), $|L|=l$
- $T$ : horizon perencanaan diskret, $|T|=\tau$

Parameter biaya:
- $f_i$ : biaya tetap pembukaan pabrik $i$
- $g_j$ : biaya tetap pembukaan gudang $j$
- $c_{ij}$ : biaya транспортаси per unit dari $i$ ke $j$
- $d_{jkl}$ : biaya distribusi dari gudang $j$ ke零售商 $k$ untuk produk $l$
- $h_{jl}$ : biaya inventaris per unit produk $l$ di gudang $j$
- $p_{ilt}$ : biaya produksi produk $l$ di pabrik $i$ pada periode $t$
- $Cap_i$ : kapasitas produksi pabrik $i$
- $Cap_j$ : kapasitas gudang $j$
- $D_{klt}$ : permintaan produk $l$ di零售商 $k$ pada periode $t$

Variabel keputusan:
- $x_i \in \{0,1\}$ : 1 jika pabrik $i$ dibuka
- $y_j \in \{0,1\}$ : 1 jika gudang $j$ dibuka
- $q_{ijlt} \geq 0$ : jumlah produk $l$ yang dikirim dari $i$ ke $j$ pada periode $t$
- $s_{jklt} \geq 0$ : jumlah produk $l$ yang dikirim dari $j$ ke $k$ pada periode $t$
- $v_{jlt} \geq 0$ : level inventaris produk $l$ di gudang $j$ pada akhir periode $t$

### 2.3 Formulasi Multi-Objektif (Metode $\varepsilon$-Constraint)

Sesuai kerangka Lead Researchers (2023), tujuan utama (primer) adalah minimasi total biaya:

$$Z_1 = \sum_{i \in I} f_i x_i + \sum_{j \in J} g_j y_j + \sum_{i,j,l,t} (c_{ij}+p_{ilt}) q_{ijlt} + \sum_{j,k,l,t} d_{jkl} s_{jklt} + \sum_{j,l,t} h_{jl} v_{jlt} \tag{1}$$

Tujuan sekunder adalah maksimasi kesegaran produk yang diproksikan dengan minimasi *lead time* rata-rata tertimbang, diformulasikan sebagai:

$$Z_2 = \sum_{j,k,l,t} \phi_{jkl} \cdot s_{jklt} \tag{2}$$

di mana $\phi_{jkl}$ adalah koefisien penalti kesegaran (semakin besar, semakin rendah tingkat kesegaran karena waktu tempuh lebih panjang).

Menggunakan metode $\varepsilon$-constraint, masalah multi-objektif ditransformasi menjadi:

$$\min Z_1 \tag{3}$$

$$\text{s.t. } Z_2 \leq \varepsilon_q, \quad q = 1, 2, \ldots, Q \tag{4}$$

dengan $Q$ buah skenario nilai $\varepsilon$ yang membentang dari lower bound hingga upper bound pareto-front.

### 2.4 Kendala (Constraints)

**Kendala kapasitas produksi:**
$$\sum_{j \in J, l \in L} q_{ijlt} \leq Cap_i \cdot x_i, \quad \forall i \in I, t \in T \tag{5}$$

**Kendala kapasitas gudang:**
$$\sum_{l \in L} v_{jlt} \leq Cap_j \cdot y_j, \quad \forall j \in J, t \in T \tag{6}$$

**Kendala keseimbangan aliran (flow balance):**
$$v_{j,l,t-1} + \sum_{i \in I} q_{ijlt} = \sum_{k \in K} s_{jklt} + v_{jlt}, \quad \forall j, l, t \tag{7}$$

**Kendala pemenuhan permintaan:**
$$\sum_{j \in J} s_{jklt} \geq D_{klt}, \quad \forall k \in K, l \in L, t \in T \tag{8}$$

### 2.5 Dekomposisi Benders

Mengikuti arsitektur yang juga diaplikasikan pada reverse supply chain oleh Zhang, Li, dan Ren (2024) dengan DOI 10.2139/ssrn.5063437, masalah didekomposisi menjadi:

**(a) Master Problem (MP) — keputusan fasilitas:**
$$\min_{x, \theta} \sum_{i \in I} f_i x_i + \theta \tag{9}$$
$$\text{s.t. } x_i \in \{0,1\}, \theta \geq 0, \text{ dan cuts Benders} \tag{10}$$

**(b) Subproblem (SP) — keputusan operasional untuk $\hat{x}$ dan $\hat{y}$ tetap:**
$$\min_{q,s,v} \sum_{i,j,l,t} (c_{ij}+p_{ilt}) q_{ijlt} + \sum_{j,k,l,t} d_{jkl} s_{jklt} + \sum_{j,l,t} h_{jl} v_{jlt} \tag{11}$$
dengan kendala (5)–(8) yang parameter $x_i, y_j$ diganti dengan $\hat{x}_i, \hat{y}_j$.

Dual subproblem menghasilkan *Benders cuts* berbentuk:

$$\theta \geq \alpha + \sum_{i \in I} \pi_i (Cap_i \hat{x}_i - \text{kapasitas terpakai}) \tag{12}$$

di mana $\pi_i$ adalah variabel dual kendala kapasitas. Iterasi berlanjut hingga gap optimalitas kurang dari toleransi $\delta$:

$$\frac{UB - LB}{UB} \leq \delta = 10^{-3} \tag{13}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis kerangka Lead Researchers (2023) di industri mengikuti SOP 7-tahap berikut:

**Tahap 1 — Karakterisasi Jaringan Eksisting.** Lakukan *value stream mapping* untuk semua aliran material, identifikasi echelon (supplier–plant–DC–retailer), dan katalogasi parameter (kapasitas, biaya tetap, biaya variabel). Gunakan standar ISO 9001:2015 untuk dokumentasi proses dan SNI ISO 22000 untuk keamanan pangan susu.

**Tahap 2 — Estimasi Parameter Permintaan.** Terapkan *time series forecasting* (ARIMA, Holt-Winters, atau Prophet) pada data historis permintaan per produk per零售商 selama minimal 24 periode. Validasi akurasi dengan MAPE $\leq 15\%$.

**Tahap 3 — Formulasi MILP.** Bangun model (1)–(8) menggunakan parameter tervalidasi. Implementasi kan dalam *solver* CPLEX, Gurobi, atau open-source HiGHS melalui bahasa pemodelan Python (PuLP) atau Julia (JuMP).

**Tahap 4 — Penerapan Dekomposisi Benders.** Pisahkan variabel keputusan strategik (biner) dari operasional (kontinyu). Master problem diselesaikan dengan Branch-and-Bound, sedangkan subproblem diselesaikan sebagai LP. Untuk setiap solusi kandidat $x^{(k)}$, selesaikan SP, ambil dual $\pi^{(k)}$, dan tambahkan optimality cut (12) ke MP. Iterasi berlanjut hingga konvergensi.

**Tahap 5 — Pembangkitan Pareto Front.** Untuk masalah multi-objektif, variasikan $\varepsilon_q$ dalam $Q=20$ skenario (atau gunakan algoritma NSGA-II jika jumlah skenario terlalu besar). Setiap titik pareto merepresentasikan kompromi biaya–kesegaran.

**Tahap 6 — Validasi & Uji Sensitivitas.** Lakukan analisis sensitivitas terhadap parameter kritis (lead time, tingkat permintaan, biaya energi cold chain). Uji skenario *worst-case* dengan *Monte Carlo simulation* ($N=1000$ run).

**Tahap 7 — Implementasi & Monitoring.** Terapkan rekomendasi fasilitas/lokasi ke dalam ERP (SAP, Oracle), dan bangun dashboard KPI yang memantau gap aktual-versus-target mingguan.

**Diagram alir proses rekayasa:**

```
[Tahap 1: Karakterisasi] → [Tahap 2: Forecasting] → [Tahap 3: Formulasi MILP]
        ↓
[Tahap 5: Pareto Front] ← [Tahap 4: Benders Decomposition Loop]
        ↓
[Tahap 6: Validasi] → [Tahap 7: Implementasi & Monitoring]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Data Parameter Industri (Studi Kasus Hipotetis Terinspirasi Lead Researchers 2023)

Pertimbangkan perusahaan susu dengan parameter berikut yang distandarisasi dari literatur:

| Parameter | Nilai | Keterangan |
|---|---|---|
| $\|I\|$ (kandidat pabrik) | 3 | Lokasi: L1, L2, L3 |
| $\|J\|$ (kandidat gudang) | 4 | Lokasi: W1, W2,