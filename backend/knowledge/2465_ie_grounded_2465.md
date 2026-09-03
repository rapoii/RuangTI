# 2465 — Optimasi Stokastik Hibrida untuk Integrasi Penentuan Ukuran Lot dan Penjadwalan Produksi dalam Sistem Manufaktur Modern

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Lot Sizing and Scheduling Problem (LSSP) merupakan salah satu keputusan taktis-operasional paling kritikal dalam hierarki perencanaan produksi manufaktur modern, yang secara langsung menentukan tingkat persediaan work-in-process (WIP), utilisasi kapasitas mesin, lead time订单 pelanggan, dan total biaya operasional sistem produksi. Lead Researchers (2025) dalam publikasinya di *Cuestiones de fisioterapia* dengan DOI [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018) mengusulkan sebuah model optimasi stokastik hibrida yang secara eksplisit menggabungkan keputusan penentuan ukuran lot (lot sizing) dengan keputusan penjadwalan_sequence-dependent setup_ pada lantai pabrik. Pendekatan ini muncul sebagai jawaban atas kelemahan fundamental model deterministik konvensional seperti Wagner-Within dan Economic Lot Scheduling Problem (ELSP) yang selama ini digunakan secara luas dalam praktik industri melalui perangkat lunak Material Requirements Planning (MRP) dan Advanced Planning Systems (APS) seperti SAP PP/DS, Oracle APS, dan AIMMS SC Navigator.

Urgensi ekonomis permasalahan ini dapat diukur dari berbagai studi empiris. Forel & Grunow (2023) dalam *Production and Operations Management* (DOI [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)) menunjukkan bahwa pada lingkungan permintaan yang sangat volatil seperti industri FMCG, semikonduktor, dan farmasi, penggunaan model lot sizing deterministik dalam kerangka rolling-horizon menghasilkan *safety stock* yang besarnya 18–34% lebih tinggi dibandingkan pendekatan stokastik yang eksplisit memodelkan evolusi forecast melalui Martingale Model of Forecast Evolution (MMFE). Fenomena ini diperparah oleh tren制造业 menuju mass customization, batch size yang semakin kecil, dan proliferation SKU yang menyebabkan frekuensi setup semakin tinggi sehingga biaya setup mendominasi 25–40% dari total biaya produksi di industri-industri tersebut.

Konteks industri nyata yang melatarbelakangi penelitian ini dapat diilustrasikan pada kasus perusahaan minuman multinasional dengan 12 lini peng bottolan, di mana keputusan lot sizing yang tidak terkoordinasi dengan penjadwalan sequence-dependent setup (misalnya perpindahan dari produk berkarbonasi ke produk non-karbonasi memerlukan CIP/_Cleaning In Place_ selama 45–90 menit) menimbulkan idle capacity hingga 12% dan total kerugian 기회 비용 mencapai €4,2 juta per tahun per lini. Model hibrida yang diusulkan Lead Researchers (2025) menyediakan kerangka formal untuk mengkuantifikasi trade-off ini secara simultan dalam satu model keputusan terpadu. Lebih lanjut, integrasi LSSP dengan stochastic demand modeling memungkinkan perusahaan untuk mengembangkan strategi *resilient production planning* yang mampu beradaptasi terhadap demand shock tanpa memerlukan recourse ke expensive overtime atau expedite shipping yang pada konteks industri aerospace dapat meningkatkan biaya sebesar 300–600% dari base production cost.

## 2. Landasan Teori & Formulasi Matematis

Model hibrida yang dikembangkan Lead Researchers (2025) memperluas formulasi Mixed-Integer Linear Programming (MILP) klasik dari LSSP dengan memperkenalkan dua elemen stokastik utama: (1) permintaan probabilistik $d_{it}^\xi$ yang direalisasikan dari skenario $\xi \in \Xi$, dan (2) parameter kapasitas yang memuat uncertainty melalui pendekatan robust optimization atau chance-constrained programming. Formulasi lengkap model two-stage stochastic programming untuk LSSP dapat dinyatakan sebagai berikut:

### 2.1 Himpunan dan Parameter

- $I = \{1, 2, \ldots, N\}$: himpunan produk (item)
- $T = \{1, 2, \ldots, |T|\}$: himpunan periode diskrit dalam horizon perencanaan
- $K = \{1, 2, \ldots, M\}$: himpunan mesin paralel
- $\Xi$: ruang skenario permintaan dengan probabilitas $\pi_\xi$, $\sum_{\xi \in \Xi} \pi_\xi = 1$
- $d_{it}^\xi$: permintaan produk $i$ pada periode $t$ di skenario $\xi$
- $c_i$: biaya produksi variabel per unit produk $i$
- $h_i$: biaya holding per unit produk $i$ per periode
- $b_i$: biaya backorder per unit produk $i$ per periode
- $s_{i}$: biaya setup produk $i$ (fixed cost)
- $st_{ij}$: waktu setup_sequence-dependent_ dari produk $i$ ke produk $j$
- $p_{ikt}$: kapasitas produksi maksimum produk $i$ pada mesin $k$ di periode $t$
- $Cap_t$: kapasitas waktu tersedia pada periode $t$

### 2.2 Variabel Keputusan

- $x_{ikt}^\xi \in \mathbb{R}_{\geq 0}$: jumlah produksi produk $i$ pada mesin $k$ di periode $t$ pada skenario $\xi$
- $y_{ikt}^\xi \in \{0,1\}$: variabel biner, bernilai 1 jika setup produk $i$ dilakukan pada mesin $k$ di periode $t$ pada skenario $\xi$
- $I_{it}^\xi \in \mathbb{R}_{\geq 0}$: tingkat persediaan akhir periode untuk produk $i$ di periode $t$ pada skenario $\xi$
- $B_{it}^\xi \in \mathbb{R}_{\geq 0}$: tingkat backorder untuk produk $i$ di periode $t$ pada skenario $\xi$
- $z_{ijkt}^\xi \in \{0,1\}$: variabel biner_sequence_, bernilai 1 jika produk $j$ segera menyusul produk $i$ pada mesin $k$ di periode $t$

### 2.3 Fungsi Tujuan

$$\min \sum_{\xi \in \Xi} \pi_\xi \left[ \sum_{t \in T} \sum_{i \in I} \left( c_i \sum_{k \in K} x_{ikt}^\xi + s_i \sum_{k \in K} y_{ikt}^\xi \right) + \sum_{t \in T} \sum_{i \in I} \left( h_i I_{it}^\xi + b_i B_{it}^\xi