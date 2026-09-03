# 2209 — Model Optimisasi Stokastik Hybrid untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi dalam Lingkungan Peramalan Evolusioner Rolling-Horizon

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel & Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan penentuan ukuran lot (*lot sizing*) dan penjadwalan produksi (*scheduling*) merupakan salah satu keputusan operasional paling kritikal dalam sistem manufaktur modern, terutama pada industri dengan permintaan musiman, lead time panjang, dan karakteristik produk multi-item seperti FMCG (*Fast-Moving Consumer Goods*), semikonduktor, dan farmasi. Lead Researchers (2025) dalam *Cuestiones de fisioterapia* memperkenalkan **Model Optimisasi Stokastik Hybrid** yang menjembatani kesenjangan antara pendekatan deterministik yang lazim digunakan di industri dengan formulasi stokastik teoritis yang selama ini dianggap terlalu kompleks untuk diimplementasikan secara operasional. Hipotesis sentral paper ini adalah bahwa integrasi teknik *exact optimization* (seperti *Mixed-Integer Linear Programming*) dengan metode *rolling-horizon* dan *forecast evolution* mampu menghasilkan rencana produksi yang robust terhadap fluktuasi permintaan tanpa menambah computational burden yang signifikan (DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)).

Konteks industri yang melatarbelakangi riset ini sangat relevan dengan praktik nyata. Berdasarkan observasi lapangan yang dilaporkan Forel dan Grunow (2023) di *Production and Operations Management*, lebih dari 78% perusahaan manufaktur skala menengah-besar masih mengandalkan model **Wagner-Whitin deterministik** yang diperbarui secara periodik melalui *rolling-horizon planning*, di mana setiap kali *forecast update* tiba (umumnya mingguan atau harian), rencana produksi disusun ulang dengan horizon bergulir 6–12 periode ke depan. Akan tetapi, pendekatan ini memiliki kelemahan struktural: keputusan produksi yang diambil pada periode awal tidak secara eksplisit mempertimbangkan bahwa *forecast* di periode-periode selanjutnya akan direvisi. Akibatnya, terjadi *over-reaction* pada setiap perubahan peramalan, menimbulkan *bullwhip effect*, tingkat persediaan pengaman (*safety stock*) yang terlalu tinggi, dan utilisasi kapasitas yang tidak optimal (DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)).

Urgensi ekonomis dari masalah ini cukup substansial. Lead Researchers (2025) memperkirakan bahwa biaya total rantai pasok pada industri manufaktur tipikal tersusun atas 60–75% biaya pembelian bahan baku, 10–15% biaya *setup* mesin, dan 15–25% biaya *holding* persediaan. Dengan menerapkan model hybrid stokastik yang memasukkan *forecast evolution*, potensi reduksi biaya total berada pada kisaran 5–18% tergantung volatilitas permintaan. Selain itu, integrasi keputusan *lot sizing* dan *scheduling* secara simultan memungkinkan perusahaan meningkatkan *On-Time-In-Full* (OTIF) delivery rate dari rata-rata 82% menjadi >95%, yang berimplikasi langsung pada skor Service Level Agreement (SLA) dengan pelanggan utama.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Dasar Lot Sizing Deterministik

Model dasar yang menjadi titik acuan adalah *Multi-Item Capacitated Lot Sizing Problem* (MICLSP) dengan formulasi sebagai berikut. Misalkan terdapat $I$ item yang diproduksi pada $T$ periode dengan kapasitas produksi $C_t$ di setiap periode $t \in \{1,\ldots,T\}$. Parameter dan variabel keputusan:

- $d_{it}$ = permintaan item $i$ pada periode $t$ (deterministik pada formulasi awal)
- $p_i$ = biaya produksi per unit item $i$
- $h_i$ = biaya *holding* per unit per periode item $i$
- $s_i$ = biaya *setup* item $i$ (jika memproduksi dalam periode $t$)
- $x_{it}$ = jumlah produksi item $i$ pada periode $t$
- $y_{it} \in \{0,1\}$ = variabel biner setup item $i$ pada periode $t$
- $I_{it}$ = inventaris akhir item $i$ pada periode $t$

Fungsi tujuan deterministik adalah meminimalkan total biaya:

$$\min Z = \sum_{i=1}^{I} \sum_{t=1}^{T} \left( p_i x_{it} + h_i I_{it} + s_i y_{it} \right)$$

Dengan kendala:

$$I_{i,t} = I_{i,t-1} + x_{it} - d_{it} \quad \forall i, t \tag{1}$$

$$x_{it} \leq M \cdot y_{it} \quad \forall i, t \tag{2}$$

$$\sum_{i=1}^{I} a_i x_{it} \leq C_t \quad \forall t \tag{3}$$

$$I_{i,t} \geq 0, \quad x_{it} \geq 0, \quad y_{it} \in \{0,1\} \tag{4}$$

di mana $a_i$ adalah waktu proses per unit item $i$ pada mesin bersama, dan $M$ adalah bilangan besar (*big-M*).

### 2.2 Martingale Model of Forecast Evolution (MMFE)

Forel dan Grunow (2023) memperkenalkan pendekatan **Martingale Model of Forecast Evolution (MMFE)** yang memungkinkan peramalan permintaan direpresentasikan sebagai proses stokastik yang *coherent* terhadap pembaruan *forecast* aktual. Dalam MMFE, permintaan riil $D_t$ pada periode $t$ dimodelkan sebagai:

$$D_t = F_t + \sum_{k=1}^{K} \theta_k (D_{t-k} - F_{t-k}) + \varepsilon_t \tag{5}$$

di mana $F_t$ adalah *forecast* pada periode $t$, $\theta_k$ adalah koefisien evolusi historis yang merepresentasikan *bias correction* dari *forecast* masa lalu, dan $\varepsilon_t$ adalah *innovation term* yang mengikuti distribusi normal $\varepsilon_t \sim \mathcal{N}(0, \sigma^2_\varepsilon)$. Parameter $\theta_k$ diestimasi menggunakan data historis peramalan melalui *regression*, dengan kendala $\sum_{k=1}^{K} \theta_k = 1$ untuk memastikan *unbiasedness* jangka panjang.

### 2.3 Formulasi Stokastik Hybrid dengan Production Recourse

Lead Researchers (2025) mengembangkan formulasi stokastik dua-tahap (*two-stage stochastic program*) dengan recourse produksi. Pada tahap pertama (*here-and-now*), keputusan *setup* $y_{it}$ dan rencana produksi agregat $x^0_{it}$ ditentukan. Pada tahap kedua (*wait-and-see*), setelah realisasi permintaan $\xi$ terobservasi, dilakukan *recourse* berupa penyesuaian produksi $\Delta x_{it}(\xi)$ dan persediaan $\Delta I_{it}(\xi)$. Formulasi lengkap:

$$\min \; \mathbb{E}_{\xi}\left[ \sum_{i=1}^{I}\sum_{t=1}^{T} \left( p_i (x^0_{it} + \Delta x_{it}(\xi)) + h_i (I^0_{it} + \Delta I_{it}(\xi)) + s_i y_{it} \right) \right] \tag{6}$$

dengan kendala recourse:

$$\Delta I_{i,t}(\xi) = \Delta I_{i,t-1}(\xi) + \Delta x_{it}(\xi) - (\xi_{it} - d_{it}) \quad \forall i, t, \xi \tag{7}$$

$$-\beta_{it} \cdot y_{it} \leq \Delta x_{it}(\xi) \leq \alpha_{it} \cdot y_{it} \quad \forall i, t, \xi \tag{8}$$

di mana $\alpha_{it}$ dan $\beta_{it}$ adalah parameter fleksibilitas *recourse* atas (downward) yang merefleksikan kapasitas respons perusahaan.

### 2.4 Mekanisme Rolling-Horizon dengan Forecast Evolution

Pada setiap *replanning point* $\tau$, sistem menyelesaikan ulang masalah lot sizing dengan horizon $H$ dan memanfaatkan informasi peramalan terbaru. Dengan MMFE, kita dapat menulis:

$$F_{t|\tau} = \mathbb{E}[D_t | \mathcal{F}_\tau] = F_t + \sum_{k=1}^{\min(t-\tau, K)} \theta_k (D_{\tau-k} - F_{\tau-k}) \tag{9}$$

di mana $\mathcal{F}_\tau$ adalah informasi filtrasi pada periode $\tau$. Kondisi konsistensi mensyaratkan $F_{t|\tau} = F_t$ ketika tidak ada revisi peramalan, sehingga MMFE menghasilkan distribusi posterior permintaan yang terkondisikan pada trajectory historis aktual.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri dari model hybrid ini mengikuti **SOP 7-Langkah** yang diuraikan Lead Researchers (2025):

**Langkah 1 — Akuisisi & Pembersihan Data Historis.** Kumpulkan data permintaan harian/mingguan minimal 104 periode (2 tahun) beserta *forecast* yang diterbitkan pada setiap titik keputusan. Validasi konsistensi SKU-master dan lakukan *imputation* untuk data hilang menggunakan metode *seasonal-trend decomposition*.

**Langkah 2 — Estimasi Parameter MMFE.** Gunakan Ordinary Least Squares untuk mengestimasi vektor koefisien $\boldsymbol{\theta} = (\theta_1, \ldots, \theta_K)$ dengan cross-validation *rolling-origin*. Pilih $K$ optimal menggunakan kriteria AICc.

**Langkah 3 — Generasi Skenario Stokastik.** Bangkitkan $N_s = 200$ skenario permintaan menggunakan sampling Monte Carlo dari MMFE. Terapkan teknik *scenario reduction* (misalnya *forward selection* dengan jarak Kantorovich) untuk mereduksi menjadi 20–30 skenario representatif.

**Langkah 4 — Optimisasi Hybrid.** Selesaikan model two-stage stochastic program dengan solver *branch-and-cut* (CPLEX/Gurobi) dengan batas waktu 300 detik. Untuk instance besar, aktifkan *warm-start* menggunakan solusi deterministik dari langkah *rolling-horizon* deterministik.

**Langkah 5 — Ekstraksi Kebijakan Recourse.** Dari solusi master, identifikasi *recourse policy* sebagai fungsi piecewise-linear dari permintaan aktual: $\Delta x_{it}(\xi) = \max\{0, \min(\alpha_{it} y_{it}, \xi_{it} - F_{it})\}$ untuk memenuhi permintaan berlebih, dan *backorder* diizinkan dengan biaya penalty $\pi_i$ ketika $\xi_{it} < F_{it}$.

**Langkah 6 — Implementasi Rolling-Horizon.** Deploy kebijakan dalam MRP/ERP system dengan trigger harian: setiap hari pukul 06:00, sistem menarik data permintaan aktual terbaru, menyelesaikan ulang model dengan horizon $H=8$ minggu, dan menghasilkan *production orders* untuk minggu berjalan.

**Langkah 7 — Monitoring & Adaptasi.** Hitung Service Level (Type-1 dan Type-2), fill rate, dan *forecast bias* mingguan. Trigger re-estimation parameter MMFE jika MAPE *forecast* mingguan melebihi 15%.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Data Input Manufaktur Minuman (Studi Kasus Hipotetis Realistis)

Pertimbangkan lini produksi minuman ringan dengan $I = 3$ SKU dan horizon perencanaan $T = 8$ minggu. Kapasitas mingguan $C_t = 5000$ unit (konstan). Parameter biaya dan operasional dirangkum dalam Tabel 1.

| Parameter | SKU A | SKU B | SKU C |
|-----------|-------|-------|-------|
| Permintaan rata-rata $\bar{d}_i$ (unit) | 1200 | 800 | 1500 |
| Std. dev. $\sigma_i$ | 240 | 180 | 300 |
| Biaya produksi $p_i$ (Rp/unit) | 8.000 | 9.500 | 7.500 |
| Biaya holding $h_i$ (Rp/unit/minggu) | 400 | 500 | 350 |
| Biaya setup $s_i$ (Rp) | 500.000 | 600.000 | 450.000 |
| Waktu proses $a_i$ (menit/unit) | 1,2 | 1,5 | 1,0 |
| Penalty backorder $\pi_i$ (Rp/unit) | 1.200 | 1.500 | 1.000 |

**Langkah 1: Formulasi Permintaan Skenario.** Dengan MMFE, bangkitkan 3 skenario permintaan menggunakan quantile $Q_{10}$, $Q_{50}$, $Q_{90}$. Permintaan minggu ke-1: $\xi_A = \{1080, 1200, 1380\}$, $\xi_B = \{700, 800, 940\}$, $\xi_C =