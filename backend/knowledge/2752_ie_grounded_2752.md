# 2752 — Optimasi Multi-Objektif Jaringan Rantai Pasok Produk Sulu dengan Benders Decomposition

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri persusuan global menghadapi tantangan struktural yang unik dibandingkan rantai pasok produk manufaktur konvensional. Produk susu seperti *pasteurized milk*, yogurt, keju, dan susu bubuk memiliki karakteristik **perishability tinggi** dengan umur simpan rata-rata 7–21 hari pada suhu 2–4°C, sehingga pelanggaran rantai dingin (*cold chain integrity*) langsung bertransformasi menjadi kerugian ekonomi dan risiko kesehatan konsumen. Menurut Lead Researchers (2023) dalam *Industrial Engineering and Innovation Management* (DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)), jaringan rantai pasok susu harus memodelkan secara simultan keputusan *facility location*, alokasi kapasitas produksi, *inventory routing*, dan *cold chain logistics* dalam satu kerangka optimasi terpadu.

Urgensi ekonomis dari masalah ini dapat dilihat dari data FAO yang menunjukkan bahwa **±15–20% produk susu global terbuang setiap tahun** akibat inefisiensi rantai dingin dan keputusan jaringan yang suboptimal. Biaya energi untuk mempertahankan *cold chain* menyumbang 30–40% dari total *logistics cost*, sementara emisi CO₂ dari sektor persusuan mencapai 1,5–2,0 kg CO₂e per liter susu yang didistribusikan. Lead Researchers (2023) menekankan bahwa pendekatan **mono-objective** yang hanya meminimalkan biaya tidak lagi memadai; diperlukan kerangka multi-tujuan yang menyeimbangkan *trade-off* antara **minimisasi biaya total**, **minimisasi emisi karbon**, dan **maksimisasi tingkat kesegaran produk** (*freshness level*) pada saat sampai ke konsumen.

Kompleksitas komputasional dari masalah ini bersifat NP-hard karena melibatkan variabel biner (keputusan buka/tutup fasilitas) dan variabel kontinu (aliran produk) dalam jumlah besar. Untuk Dataset berskala industri persusuan dengan 50 peternakan, 10 pabrik pengolahan, 30 gudang dingin, dan 200 zona distribusi, model Mixed Integer Programming (MIP) murni dapat memiliki lebih dari 50.000 variabel keputusan dan 200.000 kendala. Oleh karena itu, Lead Researchers (2023) mengusulkan **Benders Decomposition** sebagai teknik dekomposisi yang memisahkan masalah menjadi *master problem* (keputusan lokasi) dan *subproblem* (aliran dan operasional), sehingga *tractable* untuk aplikasi praktis.

Studi pelengkap dari Yanzi Zhang, Hongzhen Li, dan Yaping Ren (2024) dengan DOI [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437) memperluas paradigma ini ke ranah *reverse supply chain* dengan keputusan kualitas, menunjukkan bahwa Benders Decomposition fleksibel untuk mengintegrasikan aliran maju (*forward*) dan mundur (*reverse*) dengan kendala kualitas produk daur ulang. Sinergi kedua literatur ini membentuk fondasi metodologis yang kokoh untuk rekayasa jaringan persusuan modern.

---

## 2. Landasan Teori & Formulasi Matematis

Model jaringan rantai pasok susu multi-objektif yang dibangun oleh Lead Researchers (2023) mengikuti formulasi berikut. Misalkan himpunan indeks adalah:

- $I$ = himpunan peternakan/supplier susu mentah ($i \in I$)
- $J$ = himpunan pabrik pengolahan ($j \in J$)
- $K$ = himpunan gudang dingin/warehouse ($k \in K$)
- $L$ = himpunan pusat distribusi/retailer ($l \in L$)
- $P$ = himpunan produk susu turunan ($p \in P$)

**Parameter:**
- $c_{ij}^{rp}$ = biaya transportasi susu mentah dari $i$ ke $j$ per unit
- $c_{jkl}^{p}$ = biaya distribusi produk jadi dari $j \to k \to l$ per unit
- $f_j, f_k$ = biaya tetap buka fasilitas $j$ dan $k$
- $\alpha_p, \beta_p$ = koefisien kerusakan kualitas produk $p$ terhadap waktu
- $\text{CO2}_{ij}^{tr}$ = emisi per unit-jarak moda transportasi
- $Q_i$ = kapasitas suplai susu mentah di peternakan $i$
- $Cap_j, Cap_k$ = kapasitas pabrik $j$ dan gudang $k$
- $D_{lp}$ = permintaan produk $p$ di retailer $l$

**Variabel Keputusan:**

$$y_j, y_k \in \{0,1\}, \quad x_{ij}, x_{jkl}^{p}, z_{kl}^{p} \geq 0$$

Di mana $y_j, y_k$ adalah variabel biner fasilitas, $x_{ij}$ adalah aliran susu mentah, dan $x_{jkl}^{p}, z_{kl}^{p}$ adalah aliran produk jadi.

### 2.1 Fungsi Tujuan Multi-Objektif

Lead Researchers (2023) merumuskan tiga fungsi tujuan yang diminimalkan/dimaksimulasikan secara simultan:

**Objektif 1 — Minimisasi Biaya Total:**

$$\min Z_1 = \sum_{j} f_j y_j + \sum_{k} f_k y_k + \sum_{i,j} c_{ij}^{rp} x_{ij} + \sum_{j,k,l,p} c_{jkl}^{p} x_{jkl}^{p}$$

**Objektif 2 — Minimisasi Emisi Karbon:**

$$\min Z_2 = \sum_{i,j} \text{CO2}_{ij}^{tr} \cdot d_{ij} \cdot x_{ij} + \sum_{j,k,l,p} \text{CO2}_{jkl}^{tr} \cdot d_{jkl} \cdot x_{jkl}^{p}$$

di mana $d_{ij}, d_{jkl}$ adalah jarak antar-node.

**Objektif 3 — Maksimisasi Kesegaran (Freshness):**

$$\max Z_3 = \sum_{j,k,l,p} F_{kl}^{p} \cdot x_{jkl}^{p}$$

dengan fungsi kesegaran $F_{kl}^{p} = e^{-\beta_p (t_{jk} + t_{kl})}$ yang menangkap degradasi eksponensial terhadap waktu tempuh.

Vektor tujuan agregat menggunakan **weighted sum** atau **ε-constraint method**:

$$\min Z = w_1 Z_1 + w_2 Z_2 - w_3 Z_3, \quad \sum w_i = 1, \quad w_i \geq 0$$

### 2.2 Kendala Utama

**Kendala Kapasitas Supplier:**
$$\sum_{j} x_{ij} \leq Q_i, \quad \forall i$$

**Kendala Kapasitas Pabrik (Mass Balance):**
$$\sum_{p} \sum_{k} x_{jkl}^{p} \leq \eta_j \sum_{i} x_{ij}, \quad \forall j$$

di mana $\eta_j$ adalah *yield conversion ratio* susu mentah ke produk jadi.

**Kendala Permintaan:**
$$\sum_{j,k} x_{jkl}^{p} \geq D_{lp}, \quad \forall l, p$$

**Kendala Kapasitas Gudang:**
$$\sum_{l,p} x_{jkl}^{p} \leq Cap_k \cdot y_k, \quad \forall k$$

### 2.3 Formulasi Benders Decomposition

Mengikuti Lead Researchers (2023), masalah MIP di atas didekomposisi menjadi:

**Master Problem (MP)** — hanya keputusan lokasi dan variabel kompensasi:

$$\min \sum_j f_j y_j + \sum_k f_k y_k + \theta$$

$$\text{st. } \theta \geq 0, \quad y_j, y_k \in \{0,1\}$$

**Subproblem (SP)** — diberikan $\bar{y}$ dari MP, minimisasi biaya operasional:

$$\min \sum c_{ij}^{rp} x_{ij} + \sum c_{jkl}^{p} x_{jkl}^{p} \quad \text{st. kendala kontinu}$$

Dual SP menghasilkan *cut*: $\theta \geq \pi^T (h - T\bar{y})$ yang ditambahkan ke MP secara iteratif hingga konvergen pada *optimality gap* $\leq \epsilon$.

Zhang, Li, dan Ren (2024) memperluas struktur ini dengan menambahkan **reverse flow** untuk produk kadaluarsa yang dikembalikan dan keputusan inspeksi kualitas $q \in \{0,1\}$, sehingga MP menjadi:

$$\min \sum f_j y_j + \sum f_k y_k + \sum f_q^{rev} y_q + \theta_{fwd} + \theta_{rev}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi Benders Decomposition untuk jaringan persusuan mengikuti SOP 8-langkah yang diadopsi dari Lead Researchers (2023) dan diperkuat dengan protokol Zhang et al. (2024):

**Langkah 1 — Akuisisi Data Lapangan.** Kumpulkan data: kapasitas peternakan (liter/hari), jarak antar-fasilitas (km), data iklim (suhu ambient rata-rata), harga susu per daerah, dan permintaan historis 12 bulan. Gunakan **ISO 22005:2007** untuk *traceability* dan **HACCP** untuk titik kritis rantai dingin.

**Langkah 2 — Estimasi Parameter Kualitas.** Tentukan $\beta_p$ dari studi laboratorium: untuk *pasteurized milk* $\beta = 0{,}08$/hari, untuk *yogurt* $\beta = 0{,}03$/hari, untuk *cheese* $\beta = 0{,}005$/hari. Fungsi kesegaran: $F = e^{-\beta \cdot t}$.

**Langkah 3 — Formulasi MIP.** Bangun model lengkap menggunakan notasi GAMS/AMPL/Pyomo dengan dimensi $|I|+|J|+|K|+|L| \times |P|$.

**Langkah 4 — Inisialisasi Benders.** Selesaikan **Relaxed Master Problem (RMP)** tanpa *cuts*. Tetapkan lower bound $LB = -\infty$ dan upper bound $UB = +\infty$.

**Langkah 5 — Iterasi Subproblem.** Untuk setiap kandidat solusi $(\bar{y}_j, \bar{y}_k)$ dari MP, selesaikan SP linear. Jika SP infeasible → tambahkan *feasibility cut* $\theta \geq \pi^T (b - F\bar{y})$; jika feasible → tambahkan *optimality cut*.

**Langkah 6 — Konvergensi.** Iterasi berhenti jika $(UB - LB)/|UB| \leq \epsilon$ (umumnya $\epsilon = 0{,}5\%$). Catat jumlah iterasi, *gap*, dan waktu CPU.

**Langkah 7 — Validasi Solusi.** Uji sensitivitas terhadap parameter kunci (kapasitas, permintaan, biaya energi) menggunakan **Monte Carlo simulation** dengan 1.000 *runs*.

**Langkah 8 — Implementasi dan Pemantauan.** Deploy solusi pada Sistem ERP (*SAP S/4HANA*) dengan modul *Transportation Management*. Pantau KPI: *OTIF rate*, *cold chain breach incidents*, dan *product waste ratio* setiap hari.

Arsitektur teknologi yang disarankan mengikuti pola tiga-lapis: (a) **Data Layer** — IoT sensor suhu pada setiap *reefer truck* dan gudang; (b) **Optimization Layer** — solver Benders (CPLEX/Gurobi dengan callback otomatis); (c) **Decision Layer** — dashboard *real-time* untuk *supply chain manager*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Pertimbangkan jaringan persusuan regional di sebuah provinsi dengan parameter berikut (disintesis dari tipikal industri Asia Tenggara):

| Parameter | Nilai |
|---|---|
| Peternakan ($|I|$) | 4 (A, B, C, D) |
| Pabrik pengolahan ($|J|$) | 2 (P1, P2) |
| Gudang dingin ($|K|$) | 2 (G1, G2) |
| Zona distribusi ($|L|$) | 3 (Z1, Z2, Z3) |
| Produk ($|P|$) | 2 (Susu Pasteur, Yogurt) |
| Kapasitas suplai: $Q_A$=800, $Q_B$=600, $Q_C$=500, $Q_D$=400 (liter/hari) |
| Kapasitas pabrik: $Cap_{P1}$=1000, $Cap_{P2}$=800 |
| Kapasitas gudang: $Cap_{G1}$=600, $Cap_{G2}$=700 |
| Permintaan: $D_{Z1,1}$=400, $D_{Z2,1}$=350, $D_{Z3,1}$=250 (liter susu/hari) |
| Permintaan yogurt: $D_{Z1,2}$=200, $D_{Z2,2}$=150, $D_{Z3,2}$=100 |
| Biaya tetap: $f_{P1}$=Rp 50 jt, $f_{P2}$=Rp 40 jt, $f_{G1}$=Rp 30 j