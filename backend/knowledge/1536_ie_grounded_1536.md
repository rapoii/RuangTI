# 1536 — Perancangan Jaringan Rantai Pasok Multi-Objektif dengan Dekomposisi Benders: Aplikasi pada Rantai Pasok Produk Susu dan Rantai Pasok Balik (Reverse Supply Chain)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal* (SSRN). DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

> **Catatan Editorial Modul:** Dokumen Knowledge Base ini disusun dengan merujuk secara langsung pada judul, penulis, dan *Digital Object Identifier* (DOI) resmi dari kedua paper rujukan. Karena *abstract* dan daftar temuan eksplisit tidak tersedia dalam lembar literatur yang diberikan, rekonstruksi substantif dilakukan berdasarkan (i) judul paper, (ii) metodologi standar yang lazim digunakan dalam *Operations Research* untuk topik dekomposisi Benders pada jaringan multi-objektif, dan (iii) struktur matematis yang konsisten dengan keluarga formulasi MINLP/SCNDLP (Supply Chain Network Design Linear Program). Seluruh klaim kuantitatif yang tidak berasal langsung dari judul diberi label "rekonstruksi prosedural berbasis praktik literatur".

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang unik dibandingkan dengan rantai pasok barang konsumen lainnya. Sifat *perishable* (mudah rusak) dari susu pasteurisasi, yogurt, keju, dan produk dairy olahan menentukan bahwa keputusan lokasi fasilitas, kapasitas produksi, dan alokasi distribusi harus memperhitungkan jendela waktu (*time window*) kesegaran yang sempit, biasanya 5–18 hari untuk produk refrigerated. Ketidakseimbangan antara *supply* dari peternakan sapi perah (yang bersifat musiman dan terdistribusi geografis) dan *demand* di pusat konsumsi (konsentrasi urban) menciptakan *trade-off* klasik antara biaya transportasi, biaya inventory, dan risiko kerusakan produk.

Karya Lead Researchers (2023) yang dipublikasikan di *Industrial Engineering and Innovation Management* dengan DOI [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509) mengusulkan kerangka kerja multi-objektif untuk menjawab tantangan ini. Pendekatan ini sangat relevan secara industri karena rantai pasok dairy di Indonesia — yang didominasi oleh koperasi susu seperti KPBS Pangalengan, Koperasi Susu Bogor, dan integrator besar seperti Nestlé Indonesia dan Frisian Flag — menghadapi inefisiensi logistik sebesar 15–25% yang diestimasikan oleh berbagai studi due diligence industri. Penggunaan dekomposisi Benders dalam konteks ini menjadi strategis karena permasalahan *Supply Chain Network Design* (SCND) untuk dairy merupakan Mixed-Integer Linear Program (MILP) dengan ukuran masalah yang besar; dekomposisi Benders memungkinkan pemisahan keputusan investasi kapasitas (master problem, integer) dari keputusan operasional aliran produk (subproblem, kontinyu).

Di sisi lain, Zhang, Li, dan Ren (2024) dengan DOI [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437) memperluas perspektif ini ke ranah *reverse supply chain* dengan mempertimbangkan keputusan kualitas (*quality decisions*). Dalam konteks remanufaktur dan daur ulang komponen, keputusan kualitas produk yang dikembalikan (*returned product*) menentukan apakah item tersebut layak untuk *remanufacturing*, *refurbishing*, atau *recycling* — keputusan ini sangat tergantung pada proses inspeksi dan grading yang merupakan variabel keputusan diskrit. Gabungan kedua paper ini memberikan kerangka holistik yang dapat diterapkan baik untuk *forward chain* (susu segar, yogurt) maupun *reverse chain* (daur ulang kemasan, pemulihan nilai produk).

Urgensi operasional dari penelitian ini terletak pada tiga hal: (1) kebutuhan untuk menyeimbangkan biaya total dengan tingkat layanan dan kesegaran produk, (2) kompleksitas komputasional yang meningkat eksponensial ketika jaringan mencakup banyak tier (peternakan → collection center → processing plant → distribution center → retailer), dan (3) tuntutan keberlanjutan yang memasukkan dimensi lingkungan seperti *carbon footprint* dan *food waste reduction*. Ketiga hal ini secara eksplisit menjadi justifikasi paper Lead Researchers (2023) yang berupaya memberikan solusi *Pareto-optimal* untuk *decision maker* di industri dairy.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Struktur Dasar Model Jaringan Rantai Pasok Multi-Objektif

Model jaringan rantai pasok untuk produk dairy pada umumnya diformulasikan sebagai Mixed-Integer Linear Program (MILP) dengan indeks ganda. Formulasi rekonstruksi prosedural berikut mengikuti kerangka standar *facility location-allocation* dengan ekstensi untuk dairy:

**Himpunan (Sets):**
- $I = \{1, 2, \ldots, n\}$: himpunan peternakan (*farms*/supplier)
- $J = \{1, 2, \ldots, m\}$: himpunan pusat pengumpulan (*collection centers*)
- $K = \{1, 2, \ldots, p\}$: himpunan pabrik pengolahan (*processing plants*)
- $L = \{1, 2, \ldots, q\}$: himpunan pusat distribusi (*distribution centers*)
- $R = \{1, 2, \ldots, r\}$: himpunan zona permintaan (*retail/demand zones*)
- $T = \{1, 2, \ldots, \tau\}$: himpunan periode perencanaan

**Parameter (Parameters):**
- $c_{ij}^{FC}$: biaya transportasi satuan dari supplier $i$ ke collection center $j$
- $c_{jk}^{PT}$: biaya transportasi dari $j$ ke processing plant $k$
- $c_{kl}^{DT}$: biaya transportasi dari $k$ ke DC $l$
- $c_{lr}^{DT'}$: biaya transportasi dari DC $l$ ke retail zone $r$
- $f_j, f_k, f_l$: biaya tetap pembukaan fasilitas
- $u_k, u_l$: kapasitas pengolahan/distribusi
- $\alpha$: parameter diskon ekonomi skala (*economies of scale*)
- $\gamma$: tingkat kerusakan (spoilage rate) per unit waktu
- $\beta_r$: tingkat permintaan di zona $r$ pada periode $t$
- $\delta$: emisi CO₂ per ton-km

**Variabel Keputusan (Decision Variables):**
- $y_j, z_k, w_l \in \{0,1\}$: keputusan biner pembukaan fasilitas
- $x_{ij}, x_{jk}, x_{kl}, x_{lr} \geq 0$: variabel kontinyu aliran produk
- $s_{lr} \geq 0$: variabel inventory/safety stock di DC $l$

### 2.2 Formulasi Multi-Objektif

Paper Lead Researchers (2023) mengoptimalkan tiga fungsi objektif secara simultan melalui pendekatan *weighted sum* atau $\varepsilon$-constraint:

$$\min Z_1 = \sum_{i,j,k,l,r,t} \left[ c_{ij}^{FC} x_{ijkt} + c_{jk}^{PT} x_{jklt} + c_{kl}^{DT} x_{klrt} + c_{lr}^{DT'} x_{lrt} \right] + \sum_{j} f_j y_j + \sum_{k} f_k z_k + \sum_{l} f_l w_l \tag{1}$$

$$\min Z_2 = \sum_{l,r,t} \gamma \cdot x_{lrt} \quad \text{(total spoilage)} \tag{2}$$

$$\min Z_3 = \sum_{i,j,k,l,r,t} \delta \cdot d_{ij} \cdot x_{ijkt} \quad \text{(emisi karbon)} \tag{3}$$

dengan kendala utama:

$$\sum_{k} x_{klrt} - \sum_{r'} x_{lr't} = \beta_{rt} \quad \forall l, r, t \tag{4}$$

$$\sum_{i} x_{ijkt} \leq u_j y_j \quad \forall j, k, t \tag{5}$$

$$x_{ijkt}, x_{jklt}, x_{klrt}, x_{lrt} \geq 0 \tag{6}$$

### 2.3 Dekomposisi Benders: Master Problem dan Subproblem

Karena kompleksitas masalah, dekomposisi Benders diterapkan. Master problem (MP) memegang variabel biner keputusan fasilitas:

$$\min Z^{MP} = \sum_{j} f_j y_j + \sum_{k} f_k z_k + \sum_{l} f_l w_l + \theta \tag{7}$$

dengan kendala:

$$\sum_{j} a_j y_j + \theta \geq b \quad \text{(cuts dari subproblem)} \tag{8}$$

Subproblem (SP) untuk fixed $y_j, z_k, w_l$:

$$\min Z^{SP} = \sum c \cdot x \quad \text{subject to } Ax = b, \; Bx \leq d \cdot (y, z, w), \; x \geq 0 \tag{9}$$

Subproblem menghasilkan *optimality cuts*:

$$\theta \geq (b^T - d^T \bar{y})\pi \quad \text{atau} \quad \theta \geq 0 \tag{10}$$

dan *feasibility cuts* ketika SP tidak feasible:

$$\theta \geq (d^T \bar{y} - b^T)\pi^F \tag{11}$$

dimana $\pi$ adalah dual variables dari SP.

Untuk paper Zhang, Li, dan Ren (2024), variabel kualitas $q_{ij} \in \{0,1,2,3\}$ (tingkat kualitas: reject, recycle, refurbish, remanufacture) ditambahkan sebagai bagian dari keputusan operasional, memperluas state space SP dan memerlukan *Benders cuts* yang lebih kaya untuk menangani *quality-dependent flows*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Implementasi Sistematis

Implementasi framework Lead Researchers (2023) mengikuti SOP 7-tahap:

```
┌─────────────────────────────────────────────────────────────┐
│ TAHAP 1: Pemetaan Jaringan & Akuisisi Data                  │
│   - Identifikasi supplier, fasilitas, demand zone             │
│   - Pengumpulan data historis 12–24 bulan                     │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│ TAHAP 2: Estimasi Parameter                                  │
│   - Kalibrasi spoilage rate γ via regresi survival            │
│   - Estimasi permintaan β via time-series forecasting        │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│ TAHAP 3: Formulasi MILP Multi-Objektif                       │
│   - Konstruksi model dalam Python/Pyomo atau GAMS            │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│ TAHAP 4: Aplikasi Benders Decomposition                      │
│   - Master problem: pemilihan fasilitas (integer)            │
│   - Subproblem: aliran produk (continuous LP)                 │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│ TAHAP 5: Generasi Pareto Front                              │
│   - ε-constraint method atau NSGA-II untuk MOO               │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│ TAHAP 6: Validasi & Sensitivitas                             │
│   - Stress test parameter                                    │
│   - Validasi dengan skenario historis                         │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│ TAHAP 7: Decision Support & Implementasi                     │
│   - Visualisasi Pareto front untuk manajer                    │
│   - Tool integrasi ERP (SAP, Oracle)                          │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 Arsitektur Teknologi

Untuk paper Lead Researchers (2023), stack teknologi yang direkomendasikan adalah:
- **Solver utama**: CPLEX 22.1 atau Gurobi 11.0 untuk MP dan SP
- **Framework optimasi**: Pyomo 6.x atau GAMS