# 3008 — Optimasi Jaringan Rantai Pasok Multi-Objektif Produk Susu dengan Benders Decomposition

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Kerangka Multi-Objektif untuk Desain Jaringan Rantai Pasok Produk Susu menggunakan Metode Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Benders Decomposition for Network Design and Operations in a Reverse Supply Chain Considering Quality Decisions*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri susu global menghadapi tantangan struktural yang semakin kompleks seiring dengan meningkatnya permintaan konsumen terhadap produk bernilai tambah tinggi seperti keju, yogurt, susu UHT, dan susu bubuk formula. Menurut Lead Researchers (2023) dalam *Industrial Engineering and Innovation Management*, jaringan rantai pasok produk susu memiliki karakteristik yang membedakannya secara fundamental dari jaringan manufaktur konvensional, antara lain: (1) **perishability tinggi** dengan umur simpan rata-rata 7–21 hari untuk produk segar, (2) **cold chain dependency** yang membutuhkan investasi infrastruktur refrigerated logistics, (3) **demand seasonality** yang fluktuatif hingga 35% antara peak season (Ramadhan, liburan sekolah) dan low season, serta (4) **multi-product portfolios** dengan karakteristik biaya dan lead time yang heterogen.

DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)

Urgensi ekonomi dari penelitian ini terletak pada fakta bahwa biaya logistik dapat mencapai 18–25% dari total biaya operasional perusahaan susu, sementara waste rate akibat bullwhip effect dan kualitas produk kadaluarsa rata-rata mencapai 8–12% di negara berkembang. Studi Lead Researchers (2023) mengusulkan kerangka multi-objektif yang secara simultan meminimalkan total biaya jaringan, meminimalkan emisi karbon dari transportasi cold chain, dan memaksimalkan tingkat layanan (service level), kemudian menyelesaikannya menggunakan **Benders Decomposition (BD)** guna mengatasi kompleksitas komputasional mixed-integer linear programming (MILP) berskala besar.

Pelengkap konteks ini, Zhang, Li, dan Ren (2024) dalam DOI [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437) menunjukkan bahwa metode Benders Decomposition juga sangat efektif untuk desain jaringan reverse supply chain dengan keputusan berbasis kualitas (quality decisions), yang relevan dengan konteks daur ulang kemasan susu, recovery whey, dan reprocessing produk near-expiry. Kedua literatur ini memberikan landasan metodologis yang kuat untuk membangun kerangka optimasi hulu-hilir di industri persusuan modern yang berorientasi pada *circular economy* dan *sustainable operations*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Notasi Himpunan, Parameter, dan Variabel Keputusan

**Himpunan:**
- $I = \{1, 2, \dots, m\}$ : himpunan fasilitas produksi (processing plants)
- $J = \{1, 2, \dots, n\}$ : himpunan pusat distribusi (distribution centers/DC)
- $K = \{1, 2, \dots, l\}$ : himpunan zona permintaan (customer zones)
- $P = \{1, 2, \dots, q\}$ : himpunan jenis produk susu (UHT, pasteurized, yogurt, keju)
- $T = \{1, 2, \dots, \tau\}$ : himpunan periode perencanaan (misal 12 bulan)

**Parameter:**
- $f_i$ : fixed cost pembukaan fasilitas $i$ (Rp/unit/tahun)
- $g_j$ : fixed cost pembukaan DC $j$ (Rp/unit/tahun)
- $c_{ij}^{P}$ : biaya transportasi produk $p$ dari plant $i$ ke DC $j$ (Rp/unit)
- $h_{jk}^{P}$ : biaya distribusi produk $p$ dari DC $j$ ke customer $k$ (Rp/unit)
- $Cap_i$ : kapasitas produksi plant $i$ (unit/tahun)
- $Cap_j$ : kapasitas penyimpanan DC $j$ (unit)
- $d_{kt}^{P}$ : permintaan produk $p$ di zona $k$ pada periode $t$
- $\theta$ : tingkat kerusakan produk per hari dalam cold chain (decay rate)
- $CO2_{ij}^{tr}$ : emisi CO₂ per unit produk yang diangkut dari $i$ ke $j$
- $SL_{min}$ : tingkat layanan minimum yang disyaratkan (service level constraint)

**Variabel Keputusan:**
- $y_i \in \{0,1\}$ : 1 jika plant $i$ dibuka, 0 sebaliknya
- $z_j \in \{0,1\}$ : 1 jika DC $j$ dibuka, 0 sebaliknya
- $x_{ijkt}^{P} \geq 0$ : jumlah produk $p$ yang dikirim dari plant $i$ ke DC $j$ untuk customer $k$ pada periode $t$
- $w_{jkt}^{P} \geq 0$ : jumlah produk $p$ yang didistribusikan dari DC $j$ ke customer $k$ pada periode $t$

### 2.2 Formulasi MILP Multi-Objektif

Formulasi matematis mengikuti kerangka Lead Researchers (2023) dengan tiga fungsi tujuan:**

**Objektif 1 — Minimasi Total Biaya Jaringan:**

$$\min Z_1 = \sum_{i \in I} f_i y_i + \sum_{j \in J} g_j z_j + \sum_{p \in P} \sum_{i \in I} \sum_{j \in J} \sum_{k \in K} \sum_{t \in T} \left( c_{ij}^{P} + h_{jk}^{P} \right) x_{ijkt}^{P}$$

**Objektif 2 — Minimasi Emisi Karbon Cold Chain:**

$$\min Z_2 = \sum_{p \in P} \sum_{i \in I} \sum_{j \in J} \sum_{k \in K} \sum_{t \in T} CO2_{ij}^{tr} \cdot x_{ijkt}^{P}$$

**Objektif 3 — Maksimasi Service Level (Fulfillment Rate):**

$$\max Z_3 = \frac{\sum_{p \in P} \sum_{j \in J} \sum_{k \in K} \sum_{t \in T} w_{jkt}^{P}}{\sum_{p \in P} \sum_{k \in K} \sum_{t \in T} d_{kt}^{P}}$$

**Konstrain Utama:**

$$\sum_{j \in J} x_{ijkt}^{P} \leq Cap_i \cdot y_i, \quad \forall i,k,p,t \tag{1}$$

$$\sum_{k \in K} x_{ijkt}^{P} \leq Cap_j \cdot z_j, \quad \forall i,j,p,t \tag{2}$$

$$\sum_{j \in J} w_{jkt}^{P} \leq \sum_{i \in I} x_{ijkt}^{P} (1-\theta)^{LT_{ij}}, \quad \forall k,p,t \tag{3}$$

$$w_{jkt}^{P} \leq d_{kt}^{P}, \quad \forall j,k,p,t \tag{4}$$

$$Z_3 \geq SL_{min} \tag{5}$$

Konstrain (1) menjamin kapasitas produksi tidak terlampaui, (2) menjamin kapasitas DC, (3) memperhitungkan **decay function** selama lead time $LT_{ij}$ dengan laju kerusakan $\theta$, (4) menjamin permintaan terpenuhi sesuai demand, dan (5) menjamin service level minimum.

### 2.3 Formulasi Benders Decomposition

Mengikuti Lead Researchers (2023), masalah dipartisi menjadi:

**Master Problem (MP) — keputusan lokasi:**

$$\min_{y,z} \sum_i f_i y_i + \sum_j g_j z_j + \eta$$

subject to: $\eta \geq 0$ dan seluruh konstrain lokasi, dimana $\eta$ adalah variabel yang merepresentasikan lower bound biaya operasional.

**Subproblem (SP) — keputusan operasional (flow) untuk fixed $(y,z)$:**

$$\min_{x,w} \sum_{p,i,j,k,t} \left( c_{ij}^{P} + h_{jk}^{P} \right) x_{ijkt}^{P}$$

subject to: konstrain (1)–(5) dengan $y,z$ fixed. Jika SP infeasible, maka **feasibility cut** ditambahkan ke MP; jika finite optimal, maka **optimality cut** ditambahkan:

$$\eta \geq \alpha^{T} y + \beta^{T} z + \gamma$$

dimana $\alpha, \beta, \gamma$ adalah koefisien dual dari SP yang diperbarui setiap iterasi. Algoritma konvergen ketika gap antara upper bound (feasible solution) dan lower bound (MP relaxation) kurang dari $\epsilon = 10^{-4}$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Implementasi Sistematis

Implementasi kerangka Lead Researchers (2023) di industri persusuan mengikuti SOP 6-tahap berikut:

**Tahap 1 — Pengumpulan Data Demand & Operasional:**
Selama 12 bulan, perusahaan mengumpulkan data historis POS (point-of-sales), kapasitas produksi existing, biaya transportasi per rute, dan profil lead time cold chain. Data dinormalisasi menggunakan moving average 4-minggu.

**Tahap 2 — Kalibrasi Parameter Decay:**
Parameter $\theta$ dikalibrasi menggunakan accelerated shelf-life testing dengan persamaan Arrhenius:

$$\theta = A \cdot e^{-E_a/RT}$$

dimana suhu penyimpanan $C$ dijaga pada $4 \pm 1°C$ untuk susu pasteurized, $-18°C$ untuk frozen products.

**Tahap 3 — Formulasi Model dalam CPLEX/Gurobi:**
Model MILP multi-objektif dikodekan dalam Python menggunakan library PuLP atau Pyomo, kemudian diselesaikan dengan solver CPLEX 22.1 atau Gurobi 10.0.

**Tahap 4 — Eksekusi Benders Decomposition:**
Library Python `PyomoBenders` atau custom callback digunakan. Master dan subproblem dipertukarkan hingga gap $\leq 0.1\%$.

**Tahap 5 — Validasi Solusi:**
Solusi diverifikasi menggunakan simulation-based validation (AnyLogic atau Arena) dengan 1000 replikasi Monte Carlo untuk mengukur robust performance.

**Tahap 6 — Implementasi & Continuous Improvement:**
Solusi jaringan di-roll-out secara bertahap (fase pilot 3 bulan, full deployment 6 bulan), dengan KPI monitoring real-time.

### 3.2 Diagram Alir Proses Benders Decomposition

```
┌─────────────────────────────────────────┐
│   INPUT: Data historis demand & biaya    │
└──────────────────┬──────────────────────┘
                   ▼
┌─────────────────────────────────────────┐
│  MASTER PROBLEM (y,z,η) - Facility       │
│  Location dengan lower bound cost η     │
└──────────────────┬──────────────────────┘
                   ▼
       ┌───────────────────────┐
       │  SP: Operational flow │
       │  Solve x*, w*         │
       └───────┬───────────────┘
               ▼
    ┌────────────────────────────┐
    │ SP Infeasible?             │
    │  YES → Add feasibility cut │
    │  NO → Add optimality cut   │
    └────────┬───────────────────┘
             ▼
    ┌────────────────────────────┐
    │ Gap (UB − LB) < ε?         │
    │  YES → STOP, optimal       │
    │  NO → iterate              │
    └────────────────────────────┘
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Dataset Industri Realistis

Kasus ini mengadaptasi skenario Lead Researchers (2023) untuk jaringan distribusi susu di Pulau Jawa dengan parameter:

| Parameter | Nilai |
|-----------|-------|
| Jumlah plant kandidat ($|I|$) | 3 (Bandung, Malang, Boyolali) |
| Jumlah DC kandidat ($|J|$) | 5 (Jakarta, Surabaya, Semarang, Medan, Makassar) |
| Jumlah zona customer ($|K|$) | 8 kota besar |
| Jumlah produk ($|P|$) | 3 (UHT, Yogurt, Keju) |
| Horizon perencanaan ($|T|$) | 4 periode (1 tahun, quarterly) |

**Parameter biaya (Rp):**
- $f_{Bandung} = 5 \times 10^9$, $f_{Malang} = 4.2 \times 10^9$, $f_{Boyolali} = 3.8 \times 10^9$
- $g_{Jakarta} = 2.5 \times 10^9$, $g_{Surabaya} = 2.0 \times 10^9$, dst.
- $c_{ij}^{UHT}$ rata-rata: Rp 1.200/unit, $c_{ij}^{Yogurt}$: Rp 1.500/unit, $c_{ij}^{Keju}$: Rp 2.100/unit

**Demand agregat quarterly (unit):**
$d_{kt}^{UHT}$ di Jakarta Q1: 850.000 unit; $d_{kt}^{Yogurt}$ di Jakarta Q1: 320.000 unit; $d_{kt}^{Keju}$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
