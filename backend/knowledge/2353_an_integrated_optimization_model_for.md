# 2353 — Model Optimasi Terpadu untuk Penentuan Ukuran Lot Procurement, Produksi, dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** An integrated optimization model for procurement and production lot sizing and scheduling problems
**Jurnal & Sitasi Utama:** Cucuk Nur Rosyidi, Hani Aninda Intan Permatasari, Pringyo Widyo Laksono (2024). *Production Engineering Archives*. DOI: [https://doi.org/10.30657/pea.2024.30.15](https://doi.org/10.30657/pea.2024.30.15)
**Sitasi Pendukung:** Lead Researchers (2025). *A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem*. *Cuestiones de Fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan *lot sizing* merupakan salah satu keputusan operasional paling kritikal dalam perusahaan manufaktur karena secara langsung memengaruhi profitabilitas, tingkat persediaan, dan kelancaran rantai pasok. Rosyidi, Permatasari, dan Laksono (2024) dalam paper yang diterbitkan di *Production Engineering Archives* menegaskan bahwa penentuan ukuran lot pembelian (*procurement lot sizing*) dan ukuran lot produksi (*production lot sizing*) yang tidak optimal akan menurunkan margin keuntungan secara signifikan, terlebih ketika perusahaan menghadapi pasar dengan volatilitas permintaan yang tinggi dan jaringan supplier yang heterogen. Dalam konteks industri modern — seperti manufaktur komponen otomotif, elektronik konsumen, dan makanan-minuman — seorang planner harus memutuskan tidak hanya berapa banyak yang harus diproduksi, tetapi juga kapan produksi dilakukan, supplier mana yang dipilih, pada *price-break* mana transaksi terjadi, dan operator logistik (*carrier*) mana yang digunakan untuk mengirim bahan baku ke gudang.

Kompleksitas permasalahan meningkat secara eksponensial ketika beberapa supplier menawarkan bahan baku identik dengan skema harga dan diskon kuantitas (*quantity discount schemes*) yang berbeda-beda. Sebagai contoh, satu supplier dapat menawarkan harga Rp 9.500/unit untuk pembelian di bawah 1.000 unit, Rp 9.000/unit untuk pembelian 1.000–4.999 unit, dan Rp 8.500/unit untuk pembelian ≥ 5.000 unit. Struktur diskon *all-units* maupun *incremental* ini mengharuskan perusahaan untuk melakukan *trade-off* antara节约 biaya material dan peningkatan biaya simpan serta risiko kerusakan persediaan. Lebih lanjut, pemilihan *carrier* untuk pengiriman dari supplier ke gudang perusahaan menambah dimensi keputusan yang selama ini sering diabaikan dalam model lot sizing konvensional.

Permasalahan ketiga yang tidak kalah penting adalah penjadwalan produksi (*production scheduling*). Setelah bahan baku tersedia, perusahaan harus memutuskan pada periode mana lini produksi di-setup dan berapa unit yang akan diproduksi pada periode tersebut. Keputusan ini dipengaruhi oleh kapasitas produksi, biaya *setup*, biaya simpan gudang, dan permintaan musiman. Literatur riset operasi tradisional, seperti model Wagner-Whitin (1958) dan Silver-Meal, umumnya menangani masalah *lot sizing* dan *scheduling* secara terpisah, padahal keduanya saling tergantung. Rosyidi et al. (2024) menutup *gap* ini dengan mengusulkan model optimasi terpadu yang menyelesaikan ketiga sub-masalah secara simultan. Pendekatan ini juga diperkuat oleh tren riset terkini menuju *hybrid stochastic optimization* untuk *lot sizing and scheduling* seperti yang dipublikasikan pada 2025, yang mengintegrasikan unsur ketidakpastian permintaan ke dalam kerangka keputusan (DOI: 10.48047/cu/54/02/2007-2018).

Urgensi penelitian ini semakin kuat dalam era *Industry 4.0*, di mana data permintaan, harga, dan kapasitas tersedia secara *real-time* melalui sistem ERP. Perusahaan yang mampu memanfaatkan optimasi terpadu akan memiliki keunggulan kompetitif berupa *cost-to-serve* yang lebih rendah dan respons pasar yang lebih cepat. Modul 2353 ini menyajikan landasan teori, formulasi matematis, metodologi implementasi, serta studi kasus kuantitatif berdasarkan paper Rosyidi et al. (2024) untuk membekali engineer dan analis dengan kemampuan merancang model optimasi terpadu di lantai pabrik.

---

## 2. Landasan Teori & Formulasi Matematis

Model optimasi terpadu yang dirujuk dari Rosyidi et al. (2024) dan diperkaya dengan kerangka *hybrid stochastic* (DOI: 10.48047/cu/54/02/2007-2018) dapat diformulasikan sebagai program campuran bilangan bulat (*mixed-integer programming*, MIP). Berikut adalah struktur modelnya.

### 2.1 Definisi Himpunan (*Sets*)

- $I = \{1, 2, \ldots, |I|\}$: himpunan supplier, $i \in I$
- $J = \{1, 2, \ldots, |J|\}$: himpunan produk jadi, $j \in J$
- $T = \{1, 2, \ldots, |T|\}$: himpunan periode perencanaan, $t \in T$
- $K = \{1, 2, \ldots, |K|\}$: himpunan *carrier*, $k \in K$
- $L = \{1, 2, \ldots, |L|\}$: himpunan tingkat diskon harga dari supplier $i$ untuk produk $j$, $l \in L$

### 2.2 Parameter

- $d_{jt}$: permintaan produk $j$ pada periode $t$ (unit)
- $p_j$: harga jual produk $j$ (Rp/unit)
- $c_{ijl}$: harga beli produk $j$ dari supplier $i$ pada tingkat diskon $l$ (Rp/unit)
- $Q^{min}_{ijl}, Q^{max}_{ijl}$: batas kuantitas minimum dan maksimum untuk tingkat diskon $l$
- $u_j$: biaya produksi per unit produk $j$ (Rp/unit, mencakup biaya konversi)
- $s_j$: biaya *setup* untuk produk $j$ (Rp/setup)
- $h_j$: biaya simpan per unit produk $j$ per periode (Rp/unit)
- $cap_t$: kapasitas produksi pada periode $t$ (jam mesin atau unit)
- $a_j$: waktu proses per unit produk $j$ (jam/unit)
- $r_{itk}$: tarif transportasi dari supplier $i$ melalui carrier $k$ pada periode $t$ (Rp/pengiriman)
- $M$: bilangan *big-M* untuk linearisasi

### 2.3 Variabel Keputusan

- $x_{ijlt} \geq 0$: kuantitas produk $j$ yang dibeli dari supplier $i$ pada tingkat diskon $l$ di periode $t$
- $z_{jt} \geq 0$: kuantitas produksi produk $j$ pada periode $t$
- $I_{jt} \geq 0$: tingkat persediaan produk $j$ di akhir periode $t$
- $y_{jt} \in \{0,1\}$: 1 jika produk $j$ diproduksi pada periode $t$ (setup terjadi)
- $v_{ijlt} \in \{0,1\}$: 1 jika tingkat diskon $l$ digunakan untuk pembelian produk $j$ dari supplier $i$ di periode $t$
- $w_{it} \in \{0,1\}$: 1 jika terjadi pengiriman dari supplier $i$ di periode $t$ (untuk aktivasi biaya carrier)

### 2.4 Fungsi Tujuan: Maksimisasi Profit

$$\max \; Z = \sum_{j \in J}\sum_{t \in T} p_j \, d_{jt} \;-\; \sum_{i \in I}\sum_{j \in J}\sum_{l \in L}\sum_{t \in T} c_{ijl} \, x_{ijlt} \;-\; \sum_{j \in J}\sum_{t \in T} s_j \, y_{jt} \;-\; \sum_{j \in J}\sum_{t \in T} u_j \, z_{jt} \;-\; \sum_{j \in J}\sum_{t \in T} h_j \, I_{jt} \;-\; \sum_{i \in I}\sum_{t \in T} r_{it}^{\text{carrier}} \, w_{it} \tag{1}$$

Komponen fungsi tujuan secara berurutan merepresentasikan: (i) pendapatan penjualan, (ii) biaya pembelian bahan baku, (iii) biaya *setup* produksi, (iv) biaya konversi produksi, (v) biaya simpan gudang, dan (vi) biaya transportasi.

### 2.5 Kendala (*Constraints*)

**Kendala Pemenuhan Permintaan & Keseimbangan Persediaan:**

$$I_{j,t-1} + z_{jt} \;=\; d_{jt} + I_{jt} \quad \forall j \in J, \, t \in T \tag{2}$$

dengan $I_{j,0} = 0$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
