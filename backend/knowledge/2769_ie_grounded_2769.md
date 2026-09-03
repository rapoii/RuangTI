# 2769 — Optimasi Stokastik Hybrid untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Perencanaan produksi dalam industri manufaktur modern menghadapi tantangan fundamental berupa ketidakpastian permintaan yang fluktuatif, kompleksitas rantai pasok global, dan meningkatnya biaya operasional. Permasalahan penentuan ukuran lot (*lot sizing problem*) telah menjadi salah satu topik paling klasik dan menantang dalam riset operasi sejak formulasi Wagner-Whitin (1958) diperkenalkan. Dalam konteks industri nyata—mulai dari pabrik semikonduktor, manufaktur otomotif, hingga produksi bahan kimia dan makanan—pengambil keputusan tidak hanya harus menentukan kuantitas produksi optimal pada setiap periode horizon perencanaan, tetapi juga harus menjadwalkan operasi pada mesin-mesin yang kapasitasnya terbatas (*capacitated lot sizing and scheduling problem*, CLSP).

Perkembangan terbaru menunjukkan adanya jurang yang signifikan antara pendekatan akademis dan praktik industri. Sebagaimana disoroti oleh Forel & Grunow (2023) dalam jurnal *Production and Operations Management* (DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)), pendekatan akademik yang mempertimbangkan ketidakpastian permintaan secara eksplisit jarang diadopsi di industri. Praktisi umumnya mengimplementasikan model deterministik dan mengakomodasi ketidakpastian melalui kerangka perencanaan *rolling-horizon* dengan pembaruan peramalan (*forecast updates*) yang频繁 dilakukan. Kondisi ini menciptakan kebutuhan mendesak akan model hibrida yang menggabungkan kekuatan optimasi stokastik dengan fleksibilitas operasional *rolling-horizon planning*.

Paper Lead Researchers (2025) yang dipublikasikan dalam *Cuestiones de fisioterapia* (DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)) mengusulkan sebuah model optimasi stokastik hybrid untuk menyelesaikan permasalahan lot sizing dan penjadwalan secara simultan. Urgensi ekonomis dari topik ini sangat tinggi—estimasi menunjukkan bahwa perbaikan sebesar 1-3% pada keputusan ukuran lot dapat menghemat jutaan dolar per tahun pada perusahaan manufaktur skala menengah hingga besar. Lebih jauh, integrasi keputusan lot sizing dengan penjadwalan (*scheduling*) memungkinkan perusahaan untuk mengurangi waktu *setup*, menurunkan *work-in-process inventory* (WIP), dan meningkatkan *on-time delivery performance*. Dengan demikian, pengembangan model hybrid yang robust, komputasional efisien, dan mampu merepresentasikan dinamika permintaan riil menjadi agenda riset yang sangat relevan untuk mendukung transformasi digital di sektor manufaktur.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Deterministik Dasar (Model Wagner-Whitin)

Formulasi dasar masalah lot sizing deterministik pada horizon diskrit $T$ periode meminimalkan total biaya produksi, *setup*, serta biaya kekurangan, yang diformulasikan sebagai:

$$\min_{q_t, y_t} \; Z = \sum_{t=1}^{T} \left( c_t \, q_t + s_t \, y_t + h_t \, I_t + p_t \, B_t \right)$$

dengan kendala keseimbangan inventaris:

$$I_{t} = I_{t-1} + q_t - d_t + B_t, \quad \forall t \in \{1, \ldots, T\}$$

dan kendala linking setup-produksi:

$$q_t \le M \cdot y_t, \quad y_t \in \{0,1\}, \quad \forall t$$

di mana $q_t$ adalah kuantitas produksi, $y_t$ keputusan *binary setup*, $d_t$ permintaan deterministik, $h_t$ biaya *holding* per unit, $s_t$ biaya *setup*, $p_t$ biaya *backorder*, dan $M$ bilangan besar (*big-M*). Formulasi ini menjadi fondasi bagi ekstensi stokastik yang dikembangkan dalam paper Lead Researchers (2025).

### 2.2 Model Hybrid Stokastik dengan Skenario

Untuk mengakomodasi ketidakpastian permintaan, paper Lead Researchers (2025) mengembangkan formulasi dua-tahap (*two-stage stochastic programming*) dengan skenario $\omega \in \Omega$ yang masing-masing memiliki probabilitas $\pi_\omega$:

$$\min \; \sum_{t=1}^{T} \left( c_t \, q_t + s_t \, y_t \right) + \mathbb{E}_{\omega} \left[ \sum_{t=1}^{T} \left( h_t^{+} I_t^{+} (\omega) + h_t^{-} I_t^{-} (\omega) \right) \right]$$

dengan kendala recourse:

$$I_t^{+}(\omega) - I_t^{-}(\omega) = I_{t-1}(\omega) + q_t(\omega) - \tilde{d}_t(\omega)$$

di mana $\tilde{d}_t(\omega)$ adalah realisasi permintaan pada skenario $\omega$, dan $I_t^{+}, I_t^{-}$ masing-masing merepresentasikan inventaris positif dan *backorder*.

### 2.3 Integrasi dengan Martingale Model of Forecast Evolution (MMFE)

Membangun pendekatan Forel & Grunow (2023), permintaan direpresentasikan sebagai proses stokastik dengan evolusi peramalan menurut MMFE:

$$\tilde{d}_t(\omega) = \mathbb{E}[D_t | \mathcal{F}_{\tau(\omega)}]$$

di mana $\mathcal{F}_{\tau(\omega)}$ adalah filtrasi informasi yang tersedia pada waktu keputusan $\tau(\omega)$. Pembaruan peramalan mengikuti aturan martingale:

$$\mathbb{E}[\tilde{d}_t | \mathcal{F}_{s}] = \tilde{d}_s, \quad \forall s < t$$

yang menjamin bahwa peramalan baru merupakan projeksi takbias dari permintaan aktual.

### 2.4 Formulasi Hybrid dengan Recourse Produksi

Untuk menjembatani pendekatan deterministik-rolling-horizon dengan optimasi stokastik, keputusan recourse produksi $q_t^{rec}(\omega)$ ditambahkan sebagai variabel korektif:

$$\min \; \sum_{t=1}^{T} \left( c_t \, q_t^{base} + s_t \, y_t^{base} \right) + \mathbb{E}_{\omega} \left[ \sum_{t=1}^{T} \left( c_t^{rec} \, q_t^{rec}(\omega) + s_t^{rec} \, y_t^{rec}(\omega) + h_t \, I_t(\omega) \right) \right]$$

tunduk pada kendala kapasitas gabungan:

$$\sum_{i \in \mathcal{J}} a_i \, q_{i,t}^{base} + \sum_{i \in \mathcal{J}} a_i \, q_{i,t}^{rec}(\omega) \le CAP_t, \quad \forall t, \omega$$

di mana $a_i$ adalah waktu proses per unit produk $i$, dan $CAP_t$ adalah kapasitas periode $t$. Indeks $\mathcal{J}$ menunjukkan himpunan item yang diproduksi, sehingga formulasi secara eksplisit menjadwalkan item pada sumber daya terbatas.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model hybrid Lead Researchers (2025) di lingkungan industri mengikuti kerangka SOP berlapis yang mengintegrasikan prosedur akademis dengan praktik operasional:

**Tahap 1 — Akuisisi & Pembersihan Data Historis.** Data penjualan historis minimal 36 bulan, lead time produksi, kapasitas mesin, serta struktur biaya (setup, produksi, holding, backorder) diekstrak dari sistem ERP (SAP, Oracle, atau Microsoft Dynamics). Prosedur mengikuti standar ISO 9001:2015 untuk jaminan kualitas data.

**Tahap 2 — Konstruksi Skenario Permintaan.** Menggunakan MMFE sebagaimana diformalisasi Forel & Grunow (2023), himpunan skenario $\Omega$ dibangkitkan dengan metode *moment matching* atau *Monte Carlo simulation* (10.000 hingga 50.000 sampel), lalu direduksi menggunakan teknik *scenario reduction* (misalnya algoritma Kantorovich) menjadi 50-200 skenario representatif.

**Tahap 3 — Formulasi & Solusi Model.** Model Mixed-Integer Stochastic Programming (SMIP) diimplementasikan pada platform optimasi modern (Gurobi 11.0+, CPLEX 22.1+, atau solver sumber terbuka HiGHS). *Warm-start* digunakan untuk mengurangi waktu komputasi, dan *Benders decomposition* diterapkan untuk kasus dengan $>1.000$ variabel skenario.

**Tahap 4 — Validasi Out-of-Sample.** Solusi dievaluasi pada himpunan validasi terpisah (rolling-window cross-validation) dengan metrik MAPE pada *expected total cost*, *expected inventory level*, dan *service level*.

**Tahap 5 — Eksekusi Rolling-Horizon.** Setiap periode $\tau$, model dijalankan ulang dengan informasi terbaru $\mathcal{F}_{\tau}$, menghasilkan *production plan* baru. SOP ini menjamin konsistensi antara keputusan taktis (lot sizing) dan operasional (scheduling).

Arsitektur teknologi yang direkomendasikan: lapisan presentasi (Power BI/Tableau), lapisan optimasi (Python/Gurobi), lapisan data (PostgreSQL + data lake), dan lapisan integrasi (REST API ke sistem ERP/MES). Seluruh pipeline mengikuti kerangka MLOps untuk traceability model dan reproducibility hasil.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Pabrik komponen elektronik dengan 3 lini produk (A, B, C) pada horizon 6 periode.

**Parameter Input Industri:**

| Parameter | Item A | Item B | Item C |
|-----------|--------|--------|--------|
| Permintaan deterministik awal $d_t$ | 120, 135, 150, 140, 160, 170 | 80, 90, 85, 95, 100, 110 | 50, 60, 55, 65, 70, 75 |
| Biaya produksi $c_t$ (ribu Rp/unit) | 50 | 70 | 90 |
| Biaya setup $s_t$ (juta Rp) | 5 | 6 | 7 |
| Biaya holding $h_t$ (juta Rp/unit) | 0,5 | 0,7 | 0,9 |
| Kapasitas per periode $CAP_t$ (jam) | 240 | 240 | 240 |
| Waktu proses $a_i$ (jam/unit) | 0,1 | 0,15 | 0,2 |

**Langkah 1 — Kapasitas Kebutuhan Deterministik untuk Item A:**
$$Q_A^{det} = \sum_{t=1}^{6} d_t^A = 120+135+150+140+160+170 = 875 \text{ unit}$$
$$Waktu_A = 875 \times 0{,}1 = 87{,}5 \text{ jam}$$

**Langkah 2 — Kapasitas Total Deterministik untuk Semua Item:**
$$W_A = 87{,}5; \; W_B = 475 \times 0{,}15 = 71{,}25; \; W_C = 375 \times 0{,}2 = 75$$
$$W_{total} = 87{,}5 + 71{,}25 + 75 = 233{,}75 \text{ jam dari total } 1.440 \text{ jam tersedia} \; (6 \times 240)$$

**Langkah 3 — Konstruksi.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
