# 2960 — Optimasi Multi-Objektif Rantai Pasok Produk Susu dengan Kerangka Benders Decomposition: Formulasi, Implementasi, dan Aplikasi Lintas Sektor

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Multi-Objective Optimization of Perishable Goods Supply Chain Network using Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Benders Decomposition for Network Design and Operations in a Reverse Supply Chain Considering Quality Decisions*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang semakin kompleks pada dekade kedua abad ke-21, terutama terkait dengan karakteristik intrinsik barang yang sangat mudah rusak (*perishable*), fluktuasi permintaan musiman, serta tekanan regulasi lingkungan yang makin ketat. Menurut Lead Researchers (2023) dalam kerangka multi-objektif yang dipublikasikan di *Industrial Engineering and Innovation Management* dengan DOI [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509), jaringan rantai pasok susu harus secara simultan menyeimbangkan tiga dimensi keputusan yang saling bertentangan: minimalisasi biaya logistik total, minimalisasi emisi karbon, dan maksimalisasi kesegaran produk (*freshness*) yang diukur dari sisa umur simpan saat produk menyentuh konsumen akhir. Kompleksitas ini muncul karena susu pasteurisasi memiliki *shelf life* 7–14 hari, sedangkan susu UHT (Ultra High Temperature) sekalipun menghadapi degradasi kualitas bertahap yang dipengaruhi oleh waktu dan suhu distribusi.

Dalam konteks empiris, perusahaan susu berskala besar seperti FrieslandCampina, Nestlé, dan Fonterra mengelola jaringan yang mencakup ratusan titik produksi dengan throughput harian melebihi 10 juta liter. Lead Researchers (2023) menekankan bahwa ketika seorang pengambil keputusan harus menentukan lokasi fasilitas produksi baru, kapasitas cold storage, dan rute distribusi secara simultan dengan mempertimbangkan horizon perencanaan 12–24 bulan, formulasi mixed-integer linear programming (MILP) tunggal menjadi *computationally intractable* karena jumlah variabel keputusan melebihi 10⁶ dan kendala aktif mendekati 5×10⁵ untuk kasus industri realistis. Oleh karena itu, paper tersebut mengusulkan dekomposisi Benders sebagai mekanisme pemecahan (*solution mechanism*) yang memungkinkan pemisahan keputusan menjadi dua tingkat hierarkis: master problem yang menentukan variabel strategis (lokasi dan kapasitas), serta subproblem yang mengoptimalkan keputusan operasional (aliran produksi, persediaan, dan distribusi).

Komplementer terhadap hal tersebut, Zhang, Li, dan Ren (2024) dalam paper dengan DOI [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437) memperluas paradigma Benders Decomposition ke ranah reverse supply chain dengan memasukkan keputusan berbasis kualitas (*quality decisions*). Sinergi kedua paper ini menunjukkan bahwa arsitektur Benders tidak hanya relevan untuk forward logistics barang segar, tetapi juga untuk jaringan pemulihan, remanufaktur, dan daur ulang yang keputusan kualitasnya menentukan apakah suatu unit produk dapat di-*recover* pada tier fasilitas tertentu. Urgensi operasional dari integrasi kedua perspektif ini sangat tinggi di industri susu karena hampir 8–12% produk susu global terbuang setiap tahun akibat kadaluwarsa sebelum dikonsumsi, yang menimbulkan kerugian ekonomi lebih dari USD 100 miliar per tahun (FAO, 2023) sekaligus menyumbang 3,5% emisi gas rumah kaca sektor pangan.

Dalam tataran strategis, keputusan jaringan ini memiliki *lock-in effect* selama 15–25 tahun sehingga kesalahan formulasi pada tahap desain akan menghasilkan inefisiensi kumulatif yang sulit dikoreksi. Oleh karena itu, penggunaan dekomposisi matematis yang terbukti secara teoritis konvergen seperti Benders, yang diperkenalkan oleh Jacques F. Benders pada 1962, menjadi tidak hanya relevan tetapi juga esensial untuk pengambilan keputusan yang robust. Dokumen modul ini akan menguraikan formulasi matematis, prosedur operasional, dan aplikasi lintas sektor berdasarkan kedua paper rujukan di atas.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Umum Benders Decomposition

Benders Decomposition adalah teknik dekomposisi untuk masalah optimasi yang memiliki struktur *complicating variables* — variabel yang bila difiksasi akan membuat subproblem menjadi lebih mudah diselesaikan. Untuk konteks rantai pasok susu, Lead Researchers (2023) memformulasikan masalah sebagai berikut.

**Sets (Himpunan Indeks):**
- $i \in I$: himpunan kandidat fasilitas produksi (*plants*)
- $j \in J$: himpunan kandidat distribution centers (DCs)
- $k \in K$: himpunan zona pelanggan (*customer zones*)
- $t \in T$: himpunan periode waktu diskret (misal mingguan atau bulanan)
- $r \in R$: himpunan skenario permintaan (untuk optimasi robust)

**Parameter:**
- $d_{kt}^r$: permintaan pelanggan $k$ pada periode $t$ di skenario $r$ (liter)
- $c_i^{prod}$: biaya produksi di fasilitas $i$ (Rp/liter)
- $c_{ij}^{tr}$: biaya transportasi dari $i$ ke $j$ (Rp/liter)
- $c_{jk}^{dl}$: biaya last-mile delivery dari $j$ ke $k$ (Rp/liter)
- $h_j$: biaya holding di DC $j$ (Rp/liter·periode)
- $cap_i$: kapasitas produksi $i$ (liter/periode)
- $cap_j$: kapasitas cold storage $j$ (liter)
- $\alpha_i$: emisi karbon per liter diproduksi di $i$ (kg CO₂eq/liter)
- $\beta_{ij}$: emisi karbon per liter diangkut $i \to j$ (kg CO₂eq/liter)
- $\gamma_k$: tingkat kesegaran minimum yang disyaratkan pelanggan $k$ (hari sisa umur simpan)
- $\delta_i$: fixed cost investasi fasilitas $i$
- $\theta$: parameter diskon Benders untuk konvergensi

**Variabel Keputusan:**
- $y_i \in \{0,1\}$: 1 jika fasilitas $i$ dibuka, 0 sebaliknya
- $z_j \in \{0,1\}$: 1 jika DC $j$ dibuka, 0 sebaliknya
- $x_{ij}^t$: volume susu dikirim dari $i$ ke $j$ di periode $t$ (liter)
- $w_{jk}^t$: volume dikirim dari $j$ ke $k$ di periode $t$
- $s_j^t$: stok persediaan di DC $j$ akhir periode $t$
- $\pi, \mu$: dual variables untuk subproblem Benders

### 2.2 Formulasi Master Problem (MP)

Master problem menentukan keputusan investasi fasilitas dengan menggunakan *cutting plane* yang dihasilkan dari subproblem iteratif:

$$\min \sum_{i \in I} \delta_i y_i + \sum_{j \in J} \delta_j z_j + \theta$$

Subject to:
$$\theta \geq \sum_{i,j,k,t} (c_{ij}^{tr} + c_{jk}^{dl}) x_{ij}^t + \sum_{j,t} h_j s_j^t \quad \text{(optimality cut)}$$

$$0 \geq \text{dual feasibility cut (jika subproblem infeasible)}$$

$$\sum_{i} y_i \geq 1, \quad \sum_{j} z_j \geq 1$$

$$y_i, z_j \in \{0,1\}$$

### 2.3 Formulasi Subproblem (SP)

Setelah $\bar{y}_i$ dan $\bar{z}_j$ diperoleh, subproblem meminimalkan biaya operasional:

$$\min \sum_{i,j,t} c_{ij}^{tr} x_{ij}^t + \sum_{j,k,t} c_{jk}^{dl} w_{jk}^t + \sum_{j,t} h_j s_j^t$$

Subject to:
$$x_{ij}^t \leq M \cdot \bar{y}_i, \quad \forall i,j,t$$

$$w_{jk}^t \leq M \cdot \bar{z}_j, \quad \forall j,k,t$$

$$\sum_{i} x_{ij}^t - \sum_{k} w_{jk}^t + s_j^{t-1} - s_j^t = 0, \quad \forall j,t$$

$$\sum_{j} w_{jk}^t \geq d_{kt}, \quad \forall k,t$$

$$\sum_{j} x_{ij}^t \leq cap_i \cdot \bar{y}_i, \quad \forall i,t$$

$$\sum_{i} x_{ij}^t \leq cap_j \cdot \bar{z}_j, \quad \forall j,t$$

$$x, w, s \geq 0$$

### 2.4 Formulasi Multi-Objektif

Lead Researchers (2023) menggunakan pendekatan $\varepsilon$-constraint untuk mengonversi masalah multi-objektif menjadi seri masalah single-objective. Objektif ketiga (kesegaran) diminimalkan sebagai kontradiksi—yaitu memaksimalkan sisa umur simpan—melalui parameter slack $\eta_{kt}$:

**Objektif 1 — Biaya Total:**
$$Z_1 = \sum_{i} \delta_i y_i + \sum_{j} \delta_j z_j + \sum_{i,j,t} c_{ij}^{tr} x_{ij}^t + \sum_{j,t} h_j s_j^t$$

**Objektif 2 — Emisi Karbon:**
$$Z_2 = \sum_{i,t} \alpha_i \sum_{j} x_{ij}^t + \sum_{i,j,t} \beta_{ij} x_{ij}^t$$

**Objektif 3 — Kekuatan Kesegaran:**
$$Z_3 = -\sum_{k,t} \eta_{kt}, \quad \eta_{kt} \leq \text{umur simpan tersisa}_k^t - \gamma_k$$

dengan $\eta_{kt} \leq 0$ jika constraint dilanggar.

### 2.5 Generalisasi ke Reverse Supply Chain (Zhang et al., 2024)

Zhang, Li, dan Ren (2024) memperluas arsitektur ini dengan memasukkan variabel keputusan kualitas $q_u \in \{0,1,2,3\}$ yang mengkategorikan unit produk yang dikembalikan (*returned products*) ke dalam grade A, B, C, atau reject. Variabel $v_{u}^{rcl}$ (volume yang di-*recover* di fasilitas $r$, dengan proses $c$, untuk grade $l$) ditambahkan ke subproblem dengan batasan kualitas $\sum_c v_u^{rcl} \leq Q_{u}^{rcl}$ dan dual variables baru $\rho_{u}^{rcl}$ yang menghasilkan Benders cut tambahan.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kerangka Benders untuk optimasi jaringan rantai pasok susu mengikuti SOP 8-tahap yang diturunkan dari Lead Researchers (2023) dan diadaptasi dengan kontribusi Zhang et al. (2024) untuk dimensi reverse logistics:

**Tahap 1 — Pengumpulan Data Industri (Minggu 1-2):** 
Ekstraksi data historis permintaan minimal 24 bulan, pemetaan geolokasi fasilitas existing dan kandidat menggunakan GIS, audit biaya operasional (produksi, distribusi, holding), serta inventarisasi profil emisi dari *Life Cycle Assessment* (LCA) berbasis ISO 14040/14044.

**Tahap 2 — Preprocessing & Validasi Data (Minggu 3):** 
Normalisasi unit, deteksi outlier dengan metode IQR (Interquartile Range), interpolasi data hilang, serta segmentasi pelanggan berdasarkan SLA kesegaran.

**Tahap 3 — Konstruksi Set dan Parameter (Minggu 4):** 
Mendefinisikan $|I|$, $|J|$, $|K|$, $|T|$, dan semua parameter sesuai Section 2.1.

**Tahap 4 — Formulasi MILP Lengkap (Minggu 5):** 
Membangun model monolitik terlebih dahulu sebagai *benchmark* menggunakan bahasa pemodelan seperti AMPL, GAMS, atau Pyomo dalam Python.

**Tahap 5 — Dekomposisi dan Implementasi Solver (Minggu 6-7):** 
Memisahkan variabel strategis (biner) ke master problem, variabel kontinu ke subproblem. Implementasikan di