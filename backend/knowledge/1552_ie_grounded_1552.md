# 1552 — Optimasi Multi-Objektif Jaringan Rantai Pasok Produk Susu dengan Dekomposisi Benders

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*, Vol. 6, No. 5. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Benders Decomposition for Network Design and Operations in a Reverse Supply Chain Considering Quality Decisions*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri persusuan global menghadapi tantangan struktural yang semakin kompleks seiring dengan meningkatnya tekanan terhadap efisiensi operasional, keberlanjutan lingkungan, dan jaminan kualitas produk. Produk susu, khususnya susu segar, merupakan kategori barang dengan karakteristik *highly perishable* yang menuntut jendela waktu distribusi sangat sempit—umumnya kurang dari 72 jam dari pemerahan hingga konsumsi. Kerusakan kualitas akibat pelanggaran *cold chain* tidak hanya menimbulkan kerugian ekonomi melalui *shrinkage*, tetapi juga menurunkan *consumer confidence* dan meningkatkan risiko keamanan pangan. Menurut Lead Researchers (2023) dalam *Industrial Engineering and Innovation Management*, perancangan jaringan rantai pasok susu membutuhkan pendekatan multi-objektif yang secara simultan menyeimbangkan tiga dimensi utama: minimasi biaya total sistem, maksimisasi kesegaran produk yang dikirim ke konsumen, dan minimasi emisi karbon dari aktivitas logistik (DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)).

Urgensi metodologis muncul karena model optimasi Mixed-Integer Linear Programming (MILP) konvensional untuk jaringan rantai pasok susu menghadapi *computational intractability* ketika jumlah node keputusan bertambah dan horizon perencanaan memanjang. Lead Researchers (2023) mengusulkan kerangka multi-objektif berbasis Dekomposisi Benders untuk menyelesaikan masalah *facility location-allocation* berskala besar dengan tetap mempertahankan kelayakan komputasional pada level industri. Pendekatan ini mempartisi variabel keputusan menjadi keputusan *strategic* (lokasi fasilitas, bersifat *binary*) yang diselesaikan pada *master problem*, dan keputusan *operational* (aliran, inventori) yang diselesaikan pada *subproblem*. Studi pendahulu dari Zhang, Li, dan Ren (2024) dalam konteks reverse supply chain juga mengkonfirmasi keunggulan Benders Decomposition ketika keputusan kualitas produk dimasukkan sebagai variabel kontinu (DOI: [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)). Integrasi kedua perspektif ini memungkinkan insinyur industri merancang jaringan yang tidak hanya efisien secara biaya tetapi juga adaptif terhadap degradasi mutu produk dan target dekarbonisasi.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Definisi Himpunan dan Parameter

Model jaringan rantai pasok susu mengikuti notasi himpunan berikut:

- $I = \{1, 2, ..., m\}$: himpunan peternakan susu (*farms*)
- $J = \{1, 2, ..., n\}$: himpunan kandidat lokasi pabrik pengolahan (*processing plants*)
- $K = \{1, 2, ..., p\}$: himpunan pusat distribusi (*distribution centers*)
- $L = \{1, 2, ..., q\}$: himpunan zona konsumen (*customer zones*)
- $T = \{1, 2, ..., T\}$: himpunan periode perencanaan (hari)

Parameter kunci didefinisikan sebagai berikut: $F_j$ adalah biaya tetap pembukaan pabrik $j$; $c_{ij}$ adalah biaya транспортаsi per liter dari peternakan $i$ ke pabrik $j$; $c'_{jkl}$ adalah biaya транспортаsi per liter dari pabrik $j$ melalui DC $k$ ke zona $l$; $p_j$ adalah biaya обработки per liter di pabrik $j$; $h_j$ adalah biaya inventori per liter per hari di pabrik $j$; $u_j$ adalah kapasitas обработки harian pabrik $j$; $s_i$ adalah kapasitas suplai harian peternakan $i$; $d_{lt}$ adalah permintaan zona $l$ pada periode $t$; $\alpha \in (0,1]$ adalah koefisien retensi kualitas; $e_{ij}$ adalah emisi CO₂ per liter dari $i$ ke $j$; dan $M$ adalah konstanta *big-M* untuk relaksasi.

### 2.2 Variabel Keputusan

Variabel keputusan model adalah: $y_j \in \{0,1\}$ sebagai indikator pembukaan pabrik $j$; $x_{ij} \geq 0$ sebagai volume aliran susu dari $i$ ke $j$; $w_{jkl} \geq 0$ sebagai volume aliran dari $j$ ke $k$ ke $l$; $v_{jt} \geq 0$ sebagai level inventori di pabrik $j$ pada periode $t$; dan $q_{lt} \in [0,1]$ sebagai indeks kualitas yang sampai ke zona $l$ pada periode $t$.

### 2.3 Fungsi Tujuan Multi-Objektif

Mengikuti metode $\varepsilon$-*constraint* yang diadopsi Lead Researchers (2023), tiga tujuan direformulasi menjadi satu fungsi utama dengan dua tujuan lainnya sebagai约束 kendali:

**Objektif 1 — Minimasi Biaya Total:**
$$Z_1 = \min \sum_{j \in J} F_j y_j + \sum_{i \in I} \sum_{j \in J} c_{ij} x_{ij} + \sum_{j \in J} \sum_{k \in K} \sum_{l \in L} c'_{jkl} w_{jkl} + \sum_{j \in J} \sum_{t \in T} h_j v_{jt}$$

**Objektif 2 — Maksimisasi Kualitas (Setara Minimasi Kerugian Kesegaran):**
$$Z_2 = \max \sum_{l \in L} \sum_{t \in T} \alpha \cdot q_{lt} \cdot d_{lt}$$

**Objektif 3 — Minimasi Emisi Karbon:**
$$Z_3 = \min \sum_{i \in I} \sum_{j \in J} e_{ij} x_{ij} + \sum_{j \in J} \sum_{k \in K} \sum_{l \in L} e'_{jkl} w_{jkl}$$

### 2.4 Kendala Operasional

Kendala model terdiri dari: (i) **kendala suplai** $\sum_{j \in J} x_{ij} \leq s_i, \forall i$; (ii) **kendala kapasitas** $\sum_{i \in I} x_{ij} + v_{j,t-1} - v_{jt} = \sum_{k \in K} \sum_{l \$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
