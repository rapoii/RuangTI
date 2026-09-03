# 2880 — Optimisasi Multi-Objektif Rantai Pasok Produk Susu dan Rantai Pasok Balik Berbasis Benders Decomposition

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang unik karena karakteristik perishability (ketahanan simpan terbatas), volatilitas permintaan musiman, serta persyaratan *cold chain* yang ketat. Berdasarkan kerangka kerja yang diajukan oleh *Lead Researchers* (2023) dengan DOI [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509), desain jaringan rantai pasok susu memerlukan penanganan simultan atas dimensi biaya, kesegaran produk, dan jejak karbon. Permintaan global akan produk susu diproyeksikan tumbuh pada CAGR sebesar 3,2% periode 2023–2030 (OECD-FAO, 2023), sehingga kemampuan optimasi multi-objektif menjadi pembeda kompetitif yang menentukan.

Permasalahan klasik yang diidentifikasi *Lead Researchers* (2023) adalah kontradiksi struktural antara tiga tujuan: minimasi total biaya (transportasi, *setup*, produksi, dan *holding*), minimasi total waktu pengiriman (proksi kesegaran), serta minimasi emisi CO2. Pada jaringan empat-echelon (peternakan → pabrik pengolahan → gudang dingin → pusat distribusi → pengecer), variabel keputusan bersifat *mixed-integer* dengan ribuan biner lokasi ditambah ratusan ribu variabel kontinyu aliran, menjadikan *Mixed Integer Linear Programming* (MILP) monolithic sangat sulit dipecahkan secara eksak pada instans industri nyata. Sebagai komplemen, *Zhang, Li, & Ren* (2024) dengan DOI [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437) menunjukkan bahwa pada rantai pasok balik (reverse supply chain), keputusan berbasis kualitas (inspeksi, sortasi, remanufaktur) memperbesar ruang keputusan secara eksponensial, yang justru menjadi medan aplikasi ideal Benders Decomposition.

Urgensi operasional dari perspektif industri dapat dirangkum dalam tiga pilar. Pertama, *economic urgency*: setiap peningkatan 1% pada biaya logistik susu nasional setara dengan triliunan rupiah karena volume yang masif. Kedua, *technical urgency*: simpul-simpul cold storage harus mempertahankan suhu 2–4°C, sehingga setiap tambahan satu hari pengiriman menurunkan kualitas dan meningkatkan *shrinkage loss* hingga 4–7%. Ketiga, *regulatory urgency*: standar SNI 01-3951-1995 untuk susu pasteurisasi dan ISO 22000:2018 untuk食品安全 mensyaratkan traceability yang hanya dapat dipenuhi oleh jaringan yang dioptimasi secara matematis. Kedua paper di atas menjadi referensi utama karena mengusulkan dekomposisi masalah yang skalabel dan dapat diintegrasikan dengan sistem ERP-MES-SCADA pada lantai produksi.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Notasi Himpunan dan Parameter

Formulasi multi-objektif yang dibangun oleh *Lead Researchers* (2023) menggunakan struktur himpunan berikut:

- $I$: himpunan peternakan (farm), $i \in I$
- $J$: himpunan pabrik pengolahan, $j \in J$
- $K$: himpunan gudang dingin, $k \in K$
- $L$: himpunan pusat distribusi, $l \in L$
- $M$: himpunan pengecer, $m \in M$
- $P$: himpunan produk susu, $p \in P$
- $T$: himpunan periode, $t \in T$

Parameter kunci: $f_j$ (biaya tetap pembukaan pabrik $j$), $g_k$ (biaya tetap gudang $k$), $d_l$ (biaya tetap DC $l$), $c_{ij}^p$ (biaya transport per unit produk $p$ dari $i$ ke $j$), $cap_j$ (kapasitas produksi $j$), $a_i$ (kapasitas suplai $i$), $D_{mpt}$ (permintaan pengecer $m$ untuk produk $p$ di periode $t$), $\alpha$ (faktor emisi CO2 per ton-km), $\tau_{ij}$ (waktu tempuh).

### 2.2 Variabel Keputusan

$$X_j \in \{0,1\}, \; Y_k \in \{0,1\}, \; Z_l \in \{0,1\}$$

$X_j = 1$ jika pabrik $j$ dibuka. Variabel kontinyu operasional:

$$Q_{ij}^p, \; Q_{jk}^p, \; Q_{kl}^p, \; Q_{lm}^p, \; W_{jpt}, \; S_{kpt}, \; I_{lpt}$$

meliputi kuantitas aliran antar-echelon, volume produksi, dan level inventaris.

### 2.3 Fungsi Tujuan Multi-Objektif

Sesuai kerangka *Lead Researchers* (2023), tiga tujuan diminimasi secara simultan menggunakan *weighted augmented $\epsilon$-constraint*:

**Objektif 1 — Biaya Total:**
$$\min Z_1 = \sum_{j \in J} f_j X_j + \sum_{k \in K} g_k Y_k + \sum_{l \in L} d_l Z_l + \sum_{p \in P} \sum_{(i,j) \in A} c_{ij}^p Q_{ij}^p + \cdots + \sum_{p,k,t} h_p S_{kpt}$$

**Objektif 2 — Total Waktu Pengiriman Tertimbang:**
$$\min Z_2 = \sum_{p \in P} \sum_{(i,j,k,l,m) \in E} \left(\tau_{ij} + \tau_{jk} + \tau_{kl} + \tau_{lm}\right) Q_{lm}^p$$

**Objektif 3 — Emisi CO2 Kumulatif:**
$$\min Z_3 = \sum_{(i,j) \in A} \alpha \cdot dist_{ij} \cdot Q_{ij}^p$$

### 2.4 Kendala Utama

Kendala suplai:
$$\sum_{j \in J} Q_{ij}^p \le a_i, \quad \forall i \in I, \; \forall p \in P$$

Kendala kapasitas produksi:
$$\sum_{p \in P} W_{jpt} \le cap_j \cdot X_j, \quad \forall j \in J, \; \forall t \in T$$

Kendala keseimbangan aliran di gudang:
$$S_{kpt} = S_{kp,t-1} + \sum_{j \in J} Q_{jk}^p - \sum_{l \in L} Q_{kl}^p, \quad \forall k, p, t$$

Kendala permintaan:
$$\sum_{l \in L} Q_{lm}^p \ge D_{mpt}, \quad \forall m, p, t$$

### 2.5 Arsitektur Benders Decomposition

*Lead Researchers* (2023) dan *Zhang, Li, & Ren* (2024) menggunakan arsitektur Benders dua tingkat:

**Master Problem (MP)** — memutuskan variabel biner lokasi dan variabel linking $\eta$ (batas bawah biaya operasional):

$$\min \sum_{j} f_j X_j + \sum_{k} g_k Y_k + \sum_{l} d_l Z_l + \eta$$
$$\text{s.t.} \quad \eta \ge \text{optimality cuts}, \quad X, Y, Z \in \{0,1\}$$

**Subproblem (SP)** — diberikan solusi MP $(X^*, Y^*, Z^*)$, optimasi keputusan operasional kontinyu:

$$\min \sum c_{ij}^p Q_{ij}^p + \cdots$$
$$\text{s.t.} \quad \text{kendala aliran, kapasitas, dan permintaan}$$

Dual SP menghasilkan *optimality cut* berbentuk:

$$\eta \ge \pi_0^* + \sum_{j} \pi_j^* (cap_j X_j) + \sum_{k} \pi_k^* (cap_k Y_k)$$

di mana $\pi^*$ adalah variabel dual dari kendala kapasitas. Jika SP infeasible, *feasibility cut* ditambahkan ke MP. Iterasi berlanjut hingga *gap* $|UB - LB| \le \epsilon$ (umumnya $\epsilon = 10^{-3}$).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi SOP enam tahap untuk adopsi Benders Multi-Objektif pada industri susu:

**Tahap 1 — Karakterisasi Jaringan.** Pemetaan fisik fasilitas, kapasitas, jarak, dan data historis permintaan (1–3 tahun). Data diimpor ke data warehouse