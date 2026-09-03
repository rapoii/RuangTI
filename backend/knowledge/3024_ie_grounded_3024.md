# 3024 — Optimasi Rantai Pasok Multi-Objektif Produk Susu dengan Dekomposisi Benders untuk Manajemen Kualitas dan Distribusi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang unik dibanding rantai pasok barang konsumsi non-tersier lainnya. Tiga karakteristik fundamental menentukan arsitektur jaringan ini: (1) **perishability tinggi** dengan umur simpan rata-rata 7–21 hari untuk susu pasteurisasi dan 3–6 bulan untuk Ultra-High Temperature (UHT); (2) **cold chain dependency** yang memerlukan suhu 2–8°C secara kontinu dengan deviasi maksimal ±1°C sesuai Codex Alimentarius CAC/RCP 1-1969; dan (3) **demand volatility** yang dipengaruhi musiman, fluktuasi harga susu mentah, dan preferensi konsumen terhadap produk fungsional (yogurt probiotik, susu A2, fortified milk). Menurut Lead Researchers (2023) dalam *Industrial Engineering and Innovation Management*, integrasi keputusan fasilitas, produksi, distribusi, dan limbah susu (waste milk) merupakan determinan kritis profitabilitas dan keberlanjutan industri persusuan.

Kerangka multi-objektif menjadi pendekatan yang semakin relevan karena konflik inheren antara dimensi ekonomi, kualitas, dan lingkungan. Riset Lead Researchers (2023) menunjukkan bahwa formulasi tunggal berbasis biaya saja akan menghasilkan solusi suboptimal—meminimalkan total biaya tetapi meningkatkan *food waste* hingga 12–18% dari total produksi. Padahal, Food and Agriculture Organization (FAO) melaporkan bahwa sekitar 14% produk pangan hilang antara panen dan ritel, dengan produk susu menempati proporsi tertinggi kedua setelah buah-buahan segar. Oleh karena itu, paper tersebut mengusulkan dekomposisi Benders untuk menyelesaikan model Mixed-Integer Linear Programming (MILP) multi-objektif berskala besar yang secara simultan mengoptimalkan biaya jaringan, tingkat kesegaran (freshness), dan emisi karbon.

Pada tataran praktis, kontribusi Lead Researchers (2023) diperkuat oleh Zhang, Li, dan Ren (2024) yang mengaplikasikan Benders Decomposition pada *reverse supply chain* dengan keputusan kualitas (*quality decisions*). Mereka membuktikan bahwa pemisahan keputusan tingkat strategis (desain jaringan) dari keputusan operasional (sortasi, inspeksi, reprocessing) dapat menurunkan *computational time* hingga 67% untuk instance dengan 150+ node. Sinergi kedua paper ini memberikan landasan bahwa dekomposisi Benders bukan sekadar teknik optimasi, melainkan paradigma arsitektural untuk memecahkan masalah NP-hard dalam rekayasa rantai pasok susu modern, di mana kompleksitas komputasional eksponensial menjadi bottleneck utama bagi pengambil keputusan.

Urgensi penerapan kerangka ini semakin nyata ketika mempertimbangkan bahwa perusahaan persusuan Tier-1 seperti FrieslandCampina, Nestlé, dan Danone mengoperasikan jaringan dengan 200–500 SKU, 30+ fasilitas produksi, dan 1.000+ titik distribusi. Tanpa metodologi optimasi yang efisien, keputusan alokasi kapasitas, *safety stock*, dan *vehicle routing problem with time windows* (VRPTW) akan diselesaikan secara heuristik intuitif yang meninggalkan *efficiency gap* signifikan terhadap optimum global.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Struktur Model Multi-Objektif

Formulasi model mengikuti paradigma **Benders Decomposition** yang mempartisi problem menjadi *master problem* (keputusan lokasi fasilitas & kapasitas) dan *subproblem* (alokasi produksi-distribusi-inventori). Notasi himpunan, parameter, dan variabel keputusan didefinisikan sebagai berikut:

**Himpunan (Sets):**
- $I$ = himpunan pabrik pengolahan (processing plants), $|I| = m$
- $J$ = himpunan pusat distribusi (distribution centers), $|J| = n$
- $K$ = himpunan zona permintaan pelanggan, $|K| = p$
- $T$ = himpunan periode waktu (hari), $|T| = h$

**Parameter:**
- $f_i$ = biaya tetap buka pabrik $i \in I$
- $g_j$ = biaya tetap buka DC $j \in J$
- $c_{ij}$ = biaya transport per unit dari $i$ ke $j$
- $c_{jkt}$ = biaya transport per unit dari DC $j$ ke pelanggan $k$ di periode $t$
- $h_{jt}$ = biaya holding cost di DC $j$ periode $t$
- $d_{kt}$ = permintaan pelanggan $k$ di periode $t$
- $\alpha$ = laju deteriorasi kesegaran (fraction/day)
- $Q_i$ = kapasitas produksi pabrik $i$
- $C_j$ = kapasitas gudang DC $j$
- $w$ = biaya pembuangan waste milk per unit
- $\gamma$ = faktor emisi CO₂ per unit transportasi (kg CO₂e/km)

**Variabel Keputusan:**
- $y_i \in \{0,1\}$ = 1 jika pabrik $i$ dibuka
- $z_j \in \{0,1\}$ = 1 jika DC $j$ dibuka
- $x_{ij}$ = jumlah produk yang dikirim dari $i$ ke $j$
- $v_{jkt}$ = jumlah produk yang dikirim dari $j$ ke $k$ di periode $t$
- $s_{jt}$ = inventori di DC $j$ akhir periode $t$
- $p_{ij}$ = jumlah produk terbuang (waste) dari $i$ ke $j$ yang tidak terjual

### 2.2. Fungsi Objektif Multi-Objektif

Model mengoptimasi tiga tujuan yang diagregasi melalui teknik **weighted sum scalarization** dengan bobot $\lambda_1, \lambda_2, \lambda_3$ dimana $\lambda_1 + \lambda_2 + \lambda_3 = 1$:

**Objektif 1 — Minimasi Total Biaya Jaringan:**

$$\min Z_1 = \sum_{i \in I} f_i y_i + \sum_{j \in J} g_j z_j + \sum_{i \in I} \sum_{j \in J} c_{ij} x_{ij} + \sum_{j \in J} \sum_{k \in K} \sum_{t \in T} c_{jkt} v_{jkt} + \sum_{j \in J} \sum_{t \in T} h_{jt} s_{jt} + \sum_{i \in I} \sum_{j \in J} w \cdot p_{ij}$$

**Objektif 2 — Minimasi Rata-rata Penurunan Kesegaran:**

$$\min Z_2 = \frac{1}{\sum_{k,t} d_{kt}} \sum_{j \in J} \sum_{k \in K} \sum_{t \in T} v_{jkt} \cdot (1 - e^{-\alpha \tau_{jkt}})$$

di mana $\tau_{jkt}$ adalah waktu transit dari DC $j$ ke pelanggan $k$ di periode $t$.

**Objektif 3 — Minimasi Jejak Karbon:**

$$\min Z_3 = \gamma \cdot \left( \sum_{i,j} x_{ij} \cdot d_{ij}^{dist} + \sum_{j,k,t} v_{jkt} \cdot d_{jk}^{dist} \right)$$

### 2.3. Kendala (Constraints)

**Kapasitas Produksi:**
$$\sum_{j \in J} x_{ij} \leq Q_i \cdot y_i, \quad \forall i \in I$$

**Keseimbangan Aliran (Flow Balance) di DC:**
$$s_{j,t-1} + \sum_{i \in I} x_{ij}^{(t)} = \sum_{k \in K} v_{jkt} + s_{jt} + p_{ij}, \quad \forall j \in J, t \in T$$

**Kapasitas Gudang:**
$$s_{jt} \leq C_j \cdot z_j, \quad \forall j \in J, t \in T$$

**Pemenuhan Permintaan:**
$$\sum_{j \in J} v_{jkt} \geq d_{kt}, \quad \forall k \in K, t \in T$$

**Non-negativitas dan Binary:**
$$x_{ij}, v_{jkt}, s_{jt}, p_{ij} \geq 0; \quad y_i, z_j \in \{0,1\}$$

### 2.4. Formulasi Benders Decomposition

**Master Problem (MP):**

$$\min_{y,z} \sum_{i} f_i y_i + \sum_{j} g_j z_j + \theta$$

subject to:
$$\sum_{i} f_i y_i + \sum_{j} g_j z_j + \sum_{b \in B} \eta_b \geq \theta$$

dengan $\theta$ adalah variabel yang merepresentasikan nilai optimal subproblem, dan $B$ adalah himpunan cuts (optimality & feasibility).

**Subproblem (SP) — Operasional:**

Untuk fixed $(y^*, z^*)$, SP menjadi:
$$\min \sum_{i,j} c_{ij} x_{ij} + \sum_{j,k,t} c_{jkt} v_{jkt} + \sum_{j,t} h_{jt} s_{jt} + \sum_{i,j} w p_{ij}$$

Dual SP menghasilkan multipliers $\pi, \mu, \nu$ yang digunakan membentuk **Benders cut**:

$$\theta \geq \sum_{i,j} c_{ij} x_{ij} + \pi^T (Q_i y_i - \sum_j x_{ij}) + \mu^T d_{kt}$$

Iterasi berlanjut sampai gap relatif $\frac{|UB - LB|}{UB} \leq \epsilon = 10^{-3}$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kerangka Benders Multi-Objektif pada industri persusuan mengikuti SOP 7-tahap yang distandardisasi:

**Tahap 1 — Karakterisasi Jaringan & Pengumpulan Data Historis**
- Audit fasilitas: lokasi geospasial, kapasitas produksi, utilisasi historis
- Data time-series permintaan 24–36 bulan dengan resolusi harian
- Pemetaan cold chain: jenis refrigerated vehicle, suhu, dwell time
- Standar acuan: ISO 22000:2018 (food safety management), HACCP, SQF Edition 9

**Tahap 2 — Estimasi Parameter Deteriorasi**
- Laju deteriorasi $\alpha$ diestimasi via Accelerated Shelf-Life Testing (ASLT) mengikuti persamaan Arrhenius:
$$k = A \cdot e^{-E_a/RT}$$
- Pengukuran *total plate count* (TPC), *psychrotrophic count*, dan *titratable acidity* pada interval 24 jam

**Tahap 3 — Formulasi Model & Kalibrasi**
- Pembangunan model dalam Python (Pyomo/Gurobi) atau AMPL/Cplex
- Kalibrasi bobot $\lambda$ menggunakan AHP (Analytic Hierarchy Process) dengan expert judgment dari 5–7 manajer senior

**Tahap 4 — Eksekusi Benders Decomposition**
- Inisialisasi MP dengan *lower bound* trivial
- Iterasi: solve MP → solve SP → generate cut → add to MP → update bounds
- Termination: convergence gap $\leq 0.1\%$ atau max 50 iterasi

**Tahap 5 — Validasi & Sensitivity Analysis**
- Uji robust: 10% perturbation pada parameter permintaan
- Monte Carlo simulation 1.000 skenario untuk memvalidasi stabilitas solusi

**Tahap 6 — Implementasi & Integrasi ERP**
- Deploy hasil optimasi pada SAP IBP, Oracle S&OP, atau o9 Solutions
- Integrasi dengan sistem TMS (Transport Management System) dan WMS (Warehouse Management System)

**Tahap 7 — Monitoring KPI & Continuous Improvement**
- KPI: service level (fill rate), food waste %, cost per liter, CO₂e/ton
- Review bulanan via Plan-Do-Check-Act (PDCA) cycle

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Data Instance: Pabrik Susu "NusaFresh" di Jawa Timur

**Konfigurasi Jaringan:** 3 pabrik ($I = \{1,2,3\}$), 4 DC ($J = \{A,B,C