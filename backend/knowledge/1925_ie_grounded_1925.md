# 1925 — Strategi Rantai Pasok Tertutup untuk Pemanfaatan Bertingkat dan Remanufaktur Daur Ulang Baterai Bekas Kendaraan Listrik

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** *Closed-loop Supply Chain* (CLSC) dengan Pemanfaatan Bertingkat (*Echelon Utilization*) dan Remanufaktur Daur Ulang Baterai Bekas Kendaraan Listrik (EV)
**Jurnal & Sitasi Utama:** JIANG Lin, TANG Lidan (2025). *14th International Conference on Logistics and Systems Engineering (ICLSE 2024)*. DOI: [https://doi.org/10.52202/078960-0068](https://doi.org/10.52202/078960-0068)
**Sitasi Pendukung:** Youngchul Shin, Gwang Kim, Yoonjea Jeong (2024). *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy*. DOI: [https://doi.org/10.2139/ssrn.4934197](https://doi.org/10.2139/ssrn.4934197)

---

## 1. Pendahuluan dan Konteks Industri

Transisi global menuju elektrifikasi kendaraan bermotor telah menciptakan dilema struktural baru dalam industri otomotif dan energi: bagaimana mengelola secara efektif *end-of-life* (EoL) baterai litium-ion (LiB) dalam volume masif. Berdasarkan proyeksi yang menjadi latar belakang studi JIANG & TANG (2025) yang dipublikasikan dalam *14th International Conference on Logistics and Systems Engineering*, ledakan populasi kendaraan listrik (EV) pasca-2020 akan menghasilkan gelombang pensiun baterai dalam skala *multi-million unit* per tahun pada dekade 2030–2040. Baterai dengan *State of Health* (SOH) di bawah ambang 70–80% tidak lagi layak untuk aplikasi otomotif, namun kapasitas residualnya (60–70% kapasitas nominal) masih bernilai ekonomis tinggi untuk aplikasi *second-life*, seperti penyimpanan energi stasioner (BESS), telekomunikasi, dan lampu jalan pintar — inilah yang disebut *echelon utilization* (pemanfaatan bertingkat).

Urgensi strategis permasalahan ini bersifat tiga-dimensi: (i) **ekologis**, karena baterai LiB mengandung material kritis dan toksik (Li, Co, Ni, elektrolit organik) yang membutuhkan daur ulang terkendali untuk mencegah pencemaran tanah dan air tanah; (ii) **ekonomis**, karena nilai material回收 (recovery) baterai bekas dapat mencapai 40–60% dari biaya material awal, menciptakan peluang reverse-logistics bernilai tambah; (iii) **regulatif**, karena regulasi Extended Producer Responsibility (EPR) di Uni Eropa (Directive 2006/66/EC) dan Tiongkok (*Interim Measures on the Administration of Recycling and Utilisation of NEV Power Batteries*, 2018) mewajibkan OEM untuk mengelola rantai pasok tertutup baterai.

JIANG & TANG (2025) menekankan bahwa keputusan antara opsi *remanufacturing*, *echelon utilization*, atau *direct recycling* tidak dapat diputuskan secara parsial, melainkan harus dioptimasi dalam kerangka CLSC terpadu dengan keputusan harga, kapasitas, dan lokasi yang simultan. Di sisi paralel, Shin, Kim, & Jeong (2024) dalam *Robust Closed-Loop Supply Chain Model with Return Management System for Circular Economy* (DOI: 10.2139/ssrn.4934197) menunjukkan bahwa ketidakpastian *return rate*, fluktuasi harga material回收, dan permintaan pasar *second-life* menuntut formulasi *robust optimization* agar keputusan jaringan CLSC tetap layak (*feasible*) di seluruh skenario kemungkinan. Kedua literatur ini menjadi fondasi bagi Modul 1925 dalam membangun kerangka analitis yang menggabungkan optimasi deterministik multi-objektif dengan mekanisme perlindungan terhadap risiko parameter.

---

## 2. Landasan Teori & Formulasi Matematis

Model CLSC baterai bekas yang diajukan JIANG & TANG (2025) memformulasikan keputusan jaringan sebagai *Mixed-Integer Linear Programming* (MILP) empat-lapis: **OEM → Pusat Pengumpulan → Pusat Echelon/Remanufacturing → Pusat Daur Ulang Material**, ditambah *reverse flow* dari konsumen kembali ke titik pengumpulan.

### 2.1 Notasi Parameter dan Variabel Keputusan

Misalkan:
- $i \in I$ : indeks pusat pengumpulan,
- $j \in J$ : indeks fasilitas echelon/remanufaktur,
- $k \in K$ : indeks fasilitas daur ulang material,
- $m \in M$ : indeks material kritis ($m \in \{Li, Co, Ni, Mn, Cu, Al\}$),
- $D_r$ : permintaan pasar untuk produk remanufaktur,
- $D_e$ : permintaan pasar *second-life battery*,
- $\lambda$ : *return rate* baterai pensiun (proporsi dari penjualan awal),
- $\eta_m$ : tingkat回收 material $m$ pada fasilitas daur ulang,
- $SOH$ : *State of Health* baterai pensiun, dengan ambang keputusan:
  - jika $SOH \geq 0.80$: tetap di aplikasi otomotif (*re-use*),
  - jika $0.60 \leq SOH < 0.80$: dialokasikan ke *echelon utilization*,
  - jika $SOH < 0.60$: dialokasikan ke *recycling*.

Variabel keputusan biner:
$$y_j = \begin{cases} 1, & \text{jika fasilitas echelon/remanufaktur } j \text{ dibuka} \\ 0, & \text{lainnya} \end{cases}$$

Variabel keputusan kontinu: $x_{ij}$ (aliran baterai pensiun dari $i$ ke $j$), $x_{jk}$ (aliran baterai pasca-echelon ke daur ulang), $z_{jm}$ (jumlah material $m$ yang dihasilkan).

### 2.2 Fungsi Tujuan Multi-Obljektif

JIANG & TANG (2025) mengusulkan optimasi dua tujuan dengan *weighted-sum method*:

$$\min Z_1 = \underbrace{\sum_{i,j} c^{tr}_{ij} x_{ij}}_{\text{biaya transportasi}} + \underbrace{\sum_{j} f_j y_j}_{\text{biaya tetap fasilitas}} + \underbrace{\sum_{i} c^p_i u_i}_{\text{biaya pengumpulan}} + \underbrace{\sum_{j} c^e_j e_j}_{\text{biaya echelon}} + \underbrace{\sum_{k,m} c^r_{km} z_{km}}_{\text{biaya daur ulang}} \tag{1}$$

$$\max Z_2 = \underbrace{\sum_m p_m \sum_{km} z_{km}}_{\text{penerimaan penjualan material}} + \underbrace{\sum_j p^e_j e_j}_{\text{penerimaan second-life}} - Z_1 \tag{2}$$

di mana $c^{tr}_{ij}$, $f_j$, $c^p_i$, $c^e_j$, $c^r_{km}$ adalah parameter biaya, dan $p_m$, $p^e_j$ adalah harga jual material dan baterai *second-life*.

### 2.3 Formulasi Robust Counterpart (Shin, Kim, & Jeong, 2024)

Untuk mengatasi ketidakpastian pada *return rate* $\lambda$ dan harga material回收 $p_m$, Shin et al. (2024) memperkenalkan *box uncertainty set*:

$$\mathcal{U} = \left\{ (\tilde{\lambda}, \tilde{p}_m) : \tilde{\lambda} \in [\lambda^L, \lambda^U],\ \tilde{p}_m \in [p_m^L, p_m^U],\ \forall m \in M \right\}$$

*Robust counterpart* dari (1) kemudian menjadi:

$$\min_{x,y} \max_{(\tilde{\lambda},\tilde{p}_m) \in \mathcal{U}} \left[ \sum_{i,j} c^{tr}_{ij} x_{ij} + \sum_j f_j y_j - \tilde{\lambda} \sum_m \tilde{p}_m \sum_k z_{km} \right] \tag{3}$$

yang diselesaikan melalui dekomposisi primal–dual menghasilkan *worst-case* optimal $\tilde{\lambda} = \lambda^L$ dan $\tilde{p}_m = p_m^L$ (asumsi biaya melindungi terhadap skenario pesimistis konservatif).

### 2.4 Kendala Kapasitas dan Keseimbangan Aliran

$$\sum_i x_{ij} \leq C^e_j y_j, \quad \forall j \in J \tag{4}$$
$$\sum_j x_{jk} \leq C^r_k, \quad \forall k \in K \tag{5}$$
$$\sum_i x_{ij} (1-\eta^{ech}) = \sum_k x_{jk}, \quad \forall j \in J \tag{6}$$
$$x_{ij}, x_{jk}, z_{km} \geq 0;\ y_j \in \{0,1\} \tag{7}$$

di mana $\eta^{ech}$ adalah *loss rate* pada proses echelon (umumnya 5–10%) dan $C^e_j$, $C^r_k$ adalah kapasitas fasilitas.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri Modul 1925 mengikuti kerangka tujuh-tahap yang disintesis dari kedua literatur:

**Tahap 1 — Akuisisi Data Pasar dan Logistik.** Inventarisasi populasi EV berdasarkan tahun produksi, kapasitas baterai ($C_{pack}$, tipikal 40–100 kWh), dan degradasi SOH rata-rata (umumnya 2–3%/tahun untuk siklus moderat). Data ini menjadi input parameter $\lambda$ dan SOH.

**Tahap 2 — Klasifikasi Baterai Pensiun.** Implementasi SOP inspeksi berstandar **IEC 62933-2-1** dan **GB/T 34014-2017** untuk kategorisasi baterai ke dalam tiga bin: *automotive re-use* (SOH ≥ 80%), *echelon-eligible* (60–80%), dan *recycling-only* (<60%).

**Tahap 3 — Desain Jaringan Fasilitas.** Optimasi lokasi fasilitas menggunakan MILP (Persamaan 1–7) dengan metode *branch-and-bound* (CPLEX/Gurobi) atau heuristik *Tabu Search* untuk instances berskala besar.

**Tahap 4 — Kontrak & Insentif Pasar *Second-Life*.** Penetapan harga $p^e_j$ berbasis *levelized cost of storage* (LCOS) yang harus kompetitif dengan baterai BESS baru (kisaran $200–350/kWh pada 2024).

**Tahap 5 — Sistem Manajemen Pengembalian (Return Management System/RMS).** Mengikuti Shin et al. (2024), RMS mengintegrasikan *tracking* baterai via *battery passport* (sesuai EU Battery Regulation 2023/1542), insentif deposit (*buy-back*) kepada konsumen sebesar 8–15% harga baterai baru, dan *reverse logistics network* dengan armada khusus sesuai standar **UN 3480** untuk baterai litium.

**Tahap 6 — Pengujian Kinerja dan Validasi Robustness.** Solusi jaringan diuji terhadap 1.000 skenario Monte Carlo pada parameter $\tilde{\lambda}$ dan $\tilde{p}_m$ untuk memverifikasi bahwa *worst-case cost deviation* tidak melebihi ambang容忍 (misalnya, ≤15% dari sk$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
