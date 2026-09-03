# 1952 — Kerangka Multi-Objektif untuk Desain Jaringan Rantai Pasok Produk Susu dengan Benders Decomposition

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang unik dibandingkan dengan rantai pasok produk manufaktur konvensional. Karakteristik utama yang menjadi pembeda adalah **perishability** (daya rusak tinggi), **sensitivitas suhu** (cold chain dependency), **variabilitas permintaan musiman**, serta **biaya energi refrigerasi** yang signifikan. Berdasarkan Lead Researchers (2023) dalam *Industrial Engineering and Innovation Management* (DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)), desain jaringan rantai pasok susu harus secara simultan menyeimbangkan tiga dimensi keputusan: (1) lokasi fasilitas produksi dan pemrosesan (processing plants), (2) kapasitas penanganan produk pada setiap node jaringan, dan (3) kebijakan distribusi dengan kendala cold chain. Ketiga dimensi ini apabila dimodelkan dalam satu kerangka MILP (Mixed-Integer Linear Programming) penuh akan menghasilkan masalah berskala besar dengan ribuan variabel biner dan kontinu, yang tidak lagi solvable secara langsung menggunakan solver komersial standar dalam waktu komputasi yang layak.

Urgensi ekonomis dari permasalahan ini diperkuat oleh fakta bahwa FAO (Food and Agriculture Organization) melaporkan bahwa lebih dari 20% produk susu global terbuang sebelum sampai ke konsumen akhir, terutama karena inefisiensi jaringan distribusi. Kerangka multi-objektif menjadi pendekatan yang relevan karena perusahaan susu tidak hanya追求 minimalisasi biaya total (total cost), tetapi juga harus memperhatikan dampak lingkungan (carbon footprint) dan tingkat kesegaran produk (freshness index) yang berkaitan langsung dengan kepuasan pelanggan dan kepatuhan terhadap standar keamanan pangan. Pendekatan Benders Decomposition, yang awalnya diperkenalkan oleh Jacques F. Benders pada tahun 1962, terbukti sebagai metodologi yang sangat efektif untuk mempartisi masalah optimasi berskala besar menjadi submasalah yang lebih tractable. Dalam konteks reverse supply chain, Zhang, Li, dan Ren (2024) (DOI: [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)) menunjukkan bahwa Benders decomposition juga berhasil menangani masalah keputusan kualitas (quality decisions) yang menambah layer kompleksitas baru pada jaringan logistik terbalik.

Konteks industri nyata yang melatarbelakangi studi ini meliputi perusahaan multinasional seperti Fonterra, Lactalis, dan Arla Foods, yang mengelola jaringan dengan ratusan titik distribusi lintas benua. Adopsi metodologi multi-objektif Benders decomposition memungkinkan perusahaan untuk mencapai trade-off optimal antara tiga KPI (Key Performance Indicator) utama: profit margin, service level, dan sustainability index. Lebih jauh, integrasi dengan sistem ERP (Enterprise Resource Planning) dan platform digital twin memungkinkan implementasi real-time decision support system yang adaptif terhadap fluktuasi permintaan dan gangguan rantai pasok (supply chain disruption).

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Notasi Himpunan, Parameter, dan Variabel Keputusan

Formulasi model mengikuti notasi standar pada paper Lead Researchers (2023). Definisikan himpunan sebagai berikut:

- $I$ = himpunan fasilitas produksi susu (dairy farms/raw milk collection centers), $i \in I$
- $J$ = himpunan fasilitas pemrosesan (processing plants), $j \in J$
- $K$ = himpunan pusat distribusi (distribution centers), $k \in K$
- $L$ = himpunan zona permintaan/retailer, $l \in L$
- $P$ = himpunan jenis produk susu (whole milk, skim milk, yogurt, cheese, butter), $p \in P$

Parameter-parameter model:

- $c_{ij}^{p}$ = biaya transportasi produk $p$ dari node $i$ ke $j$ per unit
- $f_j$ = biaya tetap pembukaan fasilitas pemrosesan $j$
- $d_l^{p}$ = permintaan produk $p$ pada zona $l$
- $\alpha_p$ = tingkat kerusakan (spoilage rate) produk $p$ per unit waktu
- $\theta_{jk}$ = kapasitas handling dingin pada edge $(j,k)$
- $\beta$ = emisi CO₂ per unit transportasi

Variabel keputusan:

- $y_j \in \{0,1\}$ = 1 jika fasilitas pemrosesan $j$ dibuka
- $x_{ij}^{p} \geq 0$ = alur produk $p$ dari $i$ ke $j$
- $z_{jkl}^{p} \geq 0$ = alur produk $p$ dari $j$ ke $k$ ke $l$
- $w_p$ = indeks kesegaran (freshness index) produk $p$

### 2.2 Formulasi Multi-Objektif

Mengikuti kerangka Lead Researchers (2023), tiga fungsi objektif yang diminimalkan/dimaksimumkan secara simultan adalah:

**Objektif 1: Minimalisasi Biaya Total**

$$\min Z_1 = \sum_{j \in J} f_j y_j + \sum_{i \in I} \sum_{j \in J} \sum_{p \in P} c_{ij}^{p} x_{ij}^{p} + \sum_{j \in J} \sum_{k \in K} \sum_{l \in L} \sum_{p \in P} (c_{jkl}^{p} + \beta \cdot \phi_p) z_{jkl}^{p}$$

di mana $\phi_p$ adalah faktor emisi per unit produk $p$.

**Objektif 2: Minimalisasi Jejak Karbon (Carbon Footprint)**

$$\min Z_2 = \sum_{j \in J} \sum_{k \in K} \sum_{l \in L} \sum_{p \in P} \beta \cdot d_{jkl} \cdot z_{jkl}^{p} + \sum_{j \in J} \gamma_j (y_j)$$

dengan $\gamma_j$ adalah emisi operasional tetap fasilitas $j$.

**Objektif 3: Maksimisasi Indeks Kesegaran**

$$\max Z_3 = \sum_{p \in P} \pi_p \cdot w_p$$

dengan $\pi_p$ adalah bobot prioritas produk, dan $w_p$ dibatasi oleh:

$$w_p \leq 1 - \alpha_p \cdot T_{jkl}, \quad \forall j,k,l,p$$

di mana $T_{jkl}$ adalah total waktu transportasi dari $j$ ke $l$ melalui $k$.

### 2.3 Formulasi Benders Decomposition

Mengikuti kerangka Zhang, Li, dan Ren (2024) yang disesuaikan untuk forward supply chain susu, masalah MILP diuraikan menjadi:

**Master Problem (MP):** hanya melibatkan variabel biner $y_j$ dan variabel coupling $\eta$.

$$\min \sum_{j \in J} f_j y_j + \eta$$
$$\text{s.t.} \quad \eta \geq \pi^T y, \quad \forall \pi \in \Pi_{opt}$$
$$\quad\quad y_j \in \{0,1\}, \quad \forall j \in J$$

**Subproblem (SP):** untuk fixed $y_j$, optimasi alur:

$$\min \sum_{i,j,k,l,p} (c_{ij}^{p} + c_{jkl}^{p}) (x_{ij}^{p} + z_{jkl}^{p})$$
$$\text{s.t.} \quad \sum_{j} x_{ij}^{p} \leq S_i^p, \quad \forall i,p \quad \text{(supply)}$$
$$\quad\quad \sum_{l} z_{jkl}^{p} \leq Cap_{jk} y_j, \quad \forall j,k,p \quad \text{(capacity)}$$
$$\quad\quad \sum_{j,k} z_{jkl}^{p} = d_l^{p}, \quad \forall l,p \quad \text{(demand)}$$

**Benders Optimality Cut** yang dihasilkan dari dual subproblem:

$$\eta \geq \sigma_0 + \sum_{j} \sigma_j (1 - y_j)$$

di mana $\sigma_0, \sigma_j$ adalah variabel dual. Iterasi berlanjut hingga gap optimalitas $\leq \epsilon = 10^{-4}$.

### 2.4 Penyelesaian Multi-Objektif: Metode $\varepsilon$-Constraint

Untuk mengatasi trade-off, digunakan metode $\varepsilon$-constraint (Haimes & Lasdon, 1971) yang diadopsi oleh Lead Researchers (2023):

$$\min Z_1$$
$$\text{s.t.} \quad Z_2 \leq \epsilon_2, \quad Z_3 \geq \epsilon_3$$
$$\quad\quad (x,y,z,w) \in \mathcal{F}$$

dengan memvariasikan nilai $\epsilon_2, \epsilon_3$ untuk menghasilkan **Pareto front**.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis kerangka multi-objektif Benders decomposition dalam industri susu mengikuti **SOP 7-tahap** berikut:

**Tahap 1 — Karakterisasi Jaringan & Pengumpulan Data Historis (2-4 minggu)**
- Audit node: GPS coordinates, kapasitas, cold chain equipment
- Pengumpulan data time-series permintaan (3-5 tahun) dari POS system
- Estimasi parameter $\alpha_p$ melalui accelerated shelf-life testing pada lab QC

**Tahap 2 — Formulasi Model Matematis (1-2 minggu)**
- Translasi masalah industri ke dalam set $I, J, K, L, P$ dan parameter terkait
- Validasi dimensi variabel: $\sum_j y_j$ sebagai cardinality constraint

**Tahap 3 — Preprocessing & Reduksi Masalah**
- Agregasi zona permintaan menggunakan clustering K-means
- Eliminasi arc dominated: jika $c_{ij}^{p} + c_{jk}^{p} > c_{ik}^{p}$, eliminasi path melalui $j$

**Tahap 4 — Implementasi Benders Decomposition**
- Pilihan tools: GAMS/CPLEX, Julia/JuMP, Python/Pyomo
- Kode struktur modular: master.gms, subproblem.gms, benders_driver.gms

**Tahap 5 — Validasi & Kalibrasi**
- Backtesting dengan data historis (rolling horizon validation)
- Analisis sensitivitas: parameter $\alpha_p$ divariasikan $\pm 15\%$

**Tahap 6 — Pembangkitan Pareto Front**
- Grid search pada $\epsilon_2 \in [Z_2^{min}, Z_2^{max}]$ sebanyak 20 titik
- Visualisasi 3D Pareto surface

**Tahap 7 — Implementasi Decision Support System (DSS)**
- Integrasi dengan ERP via API (SAP, Oracle)
- Dashboard real-time untuk plant manager

**Diagram Alir Logika (Benders Loop):**

```
[START] → Inisialisasi LB = -∞, UB = +∞, iter = 0
   ↓
[Solve MP] → dapatkan (y*, η*)
   ↓
[Fix y*] → Solve SP → dapatkan (x*, z*, w*)
   ↓
[Dual SP] → ekstrak (σ₀, σ_j)
   ↓
[Generate Cut] → tambahkan ke MP
   ↓
{UB - LB > ε?}
   ├── Ya → iter++, kembali ke Solve MP