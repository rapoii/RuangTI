# 1856 — Perancangan Jaringan Rantai Pasok Produk Susu Multi-Objektif dengan Dekomposisi Benders: Formulasi Multi-Eselon, Optimasi Robust, dan Aplikasi Lintas Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Multi-Objective Framework for Dairy Products Supply Chain Network dengan Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang unik dibandingkan rantai pasok barang konsumsi lainnya. Produk susu—yang meliputi susu pasteurisasi, susu UHT (Ultra High Temperature), keju, yoghurt, dan susu bubuk—memiliki tiga karakteristik pembeda yang secara fundamental memengaruhi desain jaringan: (1) **shelf-life pendek** (3–21 hari untuk produk segar; 6–9 bulan untuk UHT), (2) **cold-chain dependency** dengan suhu penyimpanan 2–8°C yang membutuhkan investasi refrigerated logistics, dan (3) **demand volatility tinggi** karena pola konsumsi musiman, fluktuasi Ramadan/Idul Fitri, dan tren kesehatan (Yanzi Zhang, Hongzhen Li, Yaping Ren, 2024, DOI: 10.2139/ssrn.5063437). Menurut Lead Researchers (2023, DOI: 10.23977/ieim.2023.060509), lebih dari 35% kerugian ekonomi dalam rantai pasok susu global timbul dari keputusan jaringan yang suboptimal—yakni lokasi fasilitas, kapasitas produksi, dan alokasi distribusi yang tidak memperhitungkan trade-off antara biaya, kualitas, dan keberlanjutan.

Urgensi operasional semakin nyata ketika ditinjau dari data Food and Agriculture Organization (FAO) yang dirujuk oleh Lead Researchers (2023): permintaan global produk susu diproyeksikan mencapai 1.050 juta ton pada 2030, naik 22% dari 2022. Di Indonesia sendiri, konsumsi susu per kapita hanya 16,27 kg/ tahun (2022), jauh di bawah rata-rata Asia Tenggara (24 kg/ tahun), menunjukkan potensi pasar yang belum optimal dengan tantangan distribusi yang masif mengingat karakteristik geografis kepulauan. Kerangka kerja tradisional yang hanya mengejar minimisasi biaya total (*single-objective cost minimization*) terbukti tidak memadai karena mengabaikan tiga dimensi kritis: **kesegaran produk di titik konsumsi** (freshness KPI), **emisi karbon dari transportasi dan refrigerasi** (carbon footprint), dan **resiliensi terhadap gangguan rantai dingin** (disruption risk).

Lead Researchers (2023) mengajukan solusi berupa *framework multi-objektif* yang secara simultan mengoptimalkan tiga tujuan tersebut, diselesaikan dengan **Benders Decomposition** untuk menangani kompleksitas komputasional yang melekat pada masalah Mixed-Integer Linear Programming (MILP) berskala industri nyata. Pendekatan ini memiliki relevansi langsung dengan praktik Engineering Industrial karena memungkinkan pemisahan keputusan *taktis-strategis* (lokasi fasilitas, kapasitas) dari keputusan *operasional* (aliran produk, penjadwalan produksi), sehingga manajer dapat melakukan *what-if analysis* terhadap berbagai skenario permintaan dan biaya dengan waktu komputasi yang feasible. Zhang, Li, dan Ren (2024) selanjutnya memperluas arsitektur Benders ke ranah *reverse supply chain* dengan keputusan kualitas, memperlihatkan bahwa metodologi yang sama dapat diadaptasi untuk konteks closed-loop logistics—misalnya pada pengembalian produk susu kadaluarsa untuk diolah menjadi *whey protein concentrate* atau biogas melalui anaerobic digestion. Integrasi kedua literatur ini membentuk basis Engineering Industrial modern untuk desain rantai pasok yang *cost-effective, fresh-sensitive, dan carbon-aware*.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Model Jaringan Multi-Eselon

Model jaringan mengikuti struktur empat eselon yang umum dalam rantai pasok susu: **Supplier (peternakan)** → **Processing Plant** → **Distribution Center (DC)** → **Retailer/Demand Zone**. Formulasi mengikuti notasi yang digunakan Lead Researchers (2023) dengan parameter dan variabel keputusan sebagai berikut:

**Himpunan (Sets):**
- $I = \{1, 2, ..., |I|\}$ : himpunan peternakan (supplier)
- $J = \{1, 2, ..., |J|\}$ : himpunan kandidat processing plant
- $K = \{1, 2, ..., |K|\}$ : himpunan kandidat distribution center
- $L = \{1, 2, ..., |L|\}$ : himpunan demand zone (retailer)
- $T = \{1, 2, ..., |T|\}$ : himpunan periode waktu (misal: mingguan)
- $P = \{1, 2, ..., |P|\}$ : himpunan produk susu (misal: UHT, pasteurisasi, keju)

**Parameter:**
- $f_j$ : biaya tetap buka processing plant $j$ (Rupiah)
- $g_k$ : biaya tetap buka DC $k$
- $c_{ij}^{tr}$ : biaya transportasi per unit dari peternakan $i$ ke plant $j$
- $c_{jkl}^{tr}$ : biaya transportasi dari plant $j$ ke DC $k$ ke demand zone $l$
- $\xi_l^t$ : permintaan produk pada demand zone $l$ di periode $t$ (stokastik)
- $\phi_p$ : emisi CO₂ per unit produk $p$ yang diangkut (kgCO₂e/unit)
- $\alpha_p$ : tingkat degradasi kualitas produk $p$ per jam (%)
- $Cap_j^{proc}, Cap_k^{dc}$ : kapasitas plant dan DC

**Variabel Keputusan:**
- $y_j \in \{0,1\}$ : 1 jika plant $j$ dibuka, 0 sebaliknya
- $z_k \in \{0,1\}$ : 1 jika DC $k$ dibuka
- $x_{ij}^t \geq 0$ : jumlah unit produk dari $i$ ke $j$ di periode $t$
- $w_{jkl}^{pt} \geq 0$ : jumlah unit produk $p$ dari $j$ ke $k$ ke $l$ di periode $t$
- $s_{kl}^{pt} \geq 0$ : inventory level produk $p$ di DC $k$ untuk melayani $l$ di akhir periode $t$

### 2.2 Formulasi Multi-Objektif

Tiga fungsi tujuan yang diusulkan Lead Researchers (2023) adalah:

**Objektif 1: Minimisasi Total Biaya (Z₁)**

$$\min Z_1 = \sum_{j \in J} f_j y_j + \sum_{k \in K} g_k z_k + \sum_{i,j,t} c_{ij}^{tr} x_{ij}^t + \sum_{j,k,l,p,t} c_{jkl}^{tr} w_{jkl}^{pt} + \sum_{j,k,p,t} h_j^{prod} \sum_l w_{jkl}^{pt} + \sum_{k,l,p,t} h_k^{hold} s_{kl}^{pt}$$

di mana $h_j^{prod}$ adalah biaya produksi per unit di plant $j$ dan $h_k^{hold}$ adalah biaya holding inventory di DC $k$.

**Objektif 2: Minimisasi Weighted Freshness Loss (Z₂)**

$$\min Z_2 = \sum_{p \in P} \beta_p \left[ \sum_{j,k,l,t} \alpha_p \cdot \tau_{jkl}^{transit} \cdot w_{jkl}^{pt} + \sum_{k,l,p,t} \alpha_p \cdot \Delta t \cdot s_{kl}^{pt} \right]$$

dengan $\tau_{jkl}^{transit}$ adalah total transit time pada jalur $j \to k \to l$ dan $\beta_p$ adalah bobot pentingnya produk $p$ (misal: $\beta_{pasteurisasi} = 1.0$, $\beta_{UHT} = 0.4$, $\beta_{keju} = 0.6$).

**Objektif 3: Minimisasi Carbon Footprint (Z₃)**

$$\min Z_3 = \sum_{i,j,t} \phi_{truck} \cdot d_{ij} \cdot x_{ij}^t + \sum_{j,k,l,p,t} \phi_{reefer} \cdot d_{jkl} \cdot w_{jkl}^{pt} + \sum_{j,p} \phi_{proc,p} \cdot \sum_{k,l,t} w_{jkl}^{pt}$$

dengan $d_{ij}$ jarak antar node dan $\phi_{reefer} = 0.18$ kgCO₂e/ton-km untuk refrigerated truck.

**Kendala (Constraints):**

$$\sum_{j \in J} w_{jkl}^{pt} + s_{kl}^{p,t-1} - s_{kl}^{pt} = \xi_l^t \quad \forall k, l, p, t \quad (\text{kendala permintaan})$$

$$\sum_{k,l} w_{jkl}^{pt} \leq Cap_j^{proc} \cdot y_j \quad \forall j, p, t \quad (\text{kapasitas plant})$$

$$\sum_{l,p} w_{jkl}^{pt} \leq Cap_k^{dc} \cdot z_k \quad \forall j, k, t \quad (\text{kapasitas DC})$$

$$\sum_{j} x_{ij}^t \leq Q_i^t \quad \forall i, t \quad (\text{kapasitas supply peternakan})$$

$$y_j, z_k \in \{0,1\}; \quad x, w, s \geq 0$$

### 2.3 Benders Decomposition

Benders Decomposition (Benders, 1962; diaplikasikan pada konteks dairy oleh Lead Researchers, 2023) mempartisi model menjadi:

**Master Problem (MP) — Keputusan Investasi:**

$$\min_{y, z, \theta} \quad \sum_j f_j y_j + \sum_k g_k z_k + \theta$$

$$\text{s.t.} \quad \sum_j f_j y_j + \sum_k g_k z_k \leq B \quad (\text{kendala budget})$$

$$\sum_j y_j \geq N^{min}, \quad \sum_k z_k \geq M^{min}$$

$$\theta \geq 0$$

$$\text{dan
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
