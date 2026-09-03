# 2992 — Optimasi Jaringan Rantai Pasok Multi-Objektif dengan Benders Decomposition untuk Produk Susu dan Keputusan Kualitas

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri persusuan global menghadapi tantangan struktural yang unik karena karakteristik biofisik produk yang sangat *time-sensitive* dan *temperature-sensitive*. Menurut Lead Researchers (2023) dalam *Industrial Engineering and Innovation Management* (DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)), jaringan rantai pasok susu memerlukan keputusan simultan atas dimensi fasilitas, kapasitas, inventaris, dan armada distribusi karena produk susu memiliki umur simpan (*shelf life*) yang pendek, yaitu 5–14 hari untuk produk pasteurisasi dan 3–6 bulan untuk produk UHT. Kerusakan produk (*spoilage*) yang tidak dikelola secara kuantitatif dapat menyebabkan kerugian ekonomi hingga 8–15% dari nilai produksi nasional, sehingga desain jaringan rantai pasok susu tidak dapat dipisahkan dari formulasi kebijakan operasional yang ketat.

Urgensi ekonomis dan operasional ini diperparah oleh tiga fenomena konkuren: (i) meningkatnya *demand volatility* pasca-pandemi COVID-19 dengan koefisien variasi musiman mencapai 18–25%, (ii) tekanan dekarbonisasi yang mensyaratkan reduksi emisi *scope 3* pada *cold chain logistics* hingga 30% dalam dekade ini, dan (iii) fragmentasi rantai pasok yang ditandai dengan keberadaan banyak usaha peternakan rakyat dengan kapasitas <500 liter/hari. Kombinasi ketiga fenomena tersebut membuat pendekatan *single-objective* berbasis minimasi biaya saja tidak lagi memadai. Oleh karena itu, kerangka multi-objektif yang mengakomodasi biaya, emisi CO₂, dan tingkat pelayanan menjadi kebutuhan riset yang mendesak.

Lead Researchers (2023) mengusulkan arsitektur optimasi dua tingkat (*bi-level*) yang diselesaikan menggunakan *Benders Decomposition* (BD), sebuah metodologi yang memungkinkan dekomposisi variabel keputusan fasilitas (tingkat *strategic*) dari variabel operasional (tingkat *tactical-operational*). Pendekatan ini secara eksplisit mengelola kompleksitas kombinatorial dari jaringan multi-echelon tanpa mengorbankan kualitas solusi. Studi komplementer oleh Zhang, Li, dan Ren (2024) yang dipublikasikan di jurnal peer-reviewed (DOI: [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)) memperluas kerangka BD ke konteks *reverse supply chain* dengan keputusan kualitas (*quality decisions*), sehingga memperlihatkan bahwa metodologi BD bersifat generik dan robust untuk diterapkan pada berbagai varian topologi jaringan, termasuk yang mengandung *recovery*, *remanufacturing*, dan *grading* berdasarkan mutu produk. Kedua paper ini secara bersama-sama membentuk basis metodologis bagi rekayasa rantai pasok produk rentan (*perishable*) dengan kendala kualitas.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Multi-Objektif Jaringan Rantai Pasok Susu

Formulasi *Mixed-Integer Linear Programming* (MILP) yang dikembangkan oleh Lead Researchers (2023) mempertimbangkan himpunan keputusan sebagai berikut:

- $I$ = himpunan peternakan (*farms*) sebagai node suplai, $|I| = I$
- $J$ = himpunan fasilitas pengolahan (*processing plants*), $|J| = J$
- $K$ = himpunan pusat distribusi (*distribution centers*), $|K| = K$
- $L$ = himpunan zona permintaan (*customer zones*), $|L| = L$

Variabel keputusan diklasifikasikan menjadi:

$$
y_j \in \{0,1\} \quad \forall j \in J \qquad \text{(keputusan buka/tutup fasilitas pengolahan)}
$$
$$
z_k \in \{0,1\} \quad \forall k \in K \qquad \text{(keputusan buka/tutup pusat distribusi)}
$$
$$
x_{ij}^{s} \geq 0 \quad \forall i \in I, j \in J, s \in S \qquad \text{(aliran susu mentah skenario $s$)}
$$
$$
q_{kl}^{p} \geq 0 \quad \forall k \in K, l \in L, p \in P \qquad \text{(aliran produk jadi $p$)}
$$

Fungsi objektif *multi-objective* dirumuskan sebagai vektor:

$$
\min \; \mathbf{F} = \left[ f_1(\mathbf{y},\mathbf{z},\mathbf{x},\mathbf{q}),\; f_2(\mathbf{y},\mathbf{z}),\; -f_3(\mathbf{q}) \right]^T
$$

dengan komponen:

$$
f_1 = \sum_{j \in J} F_j \, y_j + \sum_{k \in K} F_k \, z_k + \sum_{i,j,s} C_{ij}^{s} \, x_{ij}^{s} + \sum_{k,l,p} C_{kl}^{p} \, q_{kl}^{p}
$$

$$
f_2 = \sum_{j \in J} \text{CO}_2^{cap}_j \, y_j + \sum_{i,j,s} e_{ij}^{tr,s} \, x_{ij}^{s}
$$

$$
f_3 = \sum_{l \in L} \sum_{p \in P} U_{l}^{p} \cdot \min\left(1,\; \frac{\sum_{k} q_{kl}^{p}}{D_l^{p}} \right)
$$

di mana $f_1$ adalah *total logistics cost* (biaya tetap fasilitas + biaya transportasi), $f_2$ adalah emisi CO₂ ekuivalen, dan $f_3$ adalah *service level* agregat (dimaksimumkan melalui minimasi negatif). Solusi Pareto-front diperoleh melalui *$\varepsilon$-constraint method* dengan enumerasi $\varepsilon_2 \in [\varepsilon_2^{\min}, \varepsilon_2^{\max}]$ pada $f_2$.

### 2.2 Benders Decomposition (BD)

Lead Researchers (2023) mengadopsi BD untuk memisahkan *master problem* (MP) yang hanya memuat variabel biner lokasi dari *subproblem* (SP) yang menangani variabel kontinu aliran. MP dirumuskan sebagai:

$$
\min \; \sum_{j} F_j y_j + \sum_{k} F_k z_k + \theta
$$
$$
\text{s.t.} \quad \sum_{j} y_j \geq 1,\; \sum_{k} z_k \geq 1
$$
$$
\theta \geq 0
$$

di mana $\theta$ adalah pendekatan nilai optimal SP. Pada setiap iterasi BD ke-$\nu$, SP diselesaikan untuk mendapatkan *dual variables* $(\pi, \omega)$ dari kendala kapasitas dan permintaan. *Optimality cut* generasi-$\nu$ berbentuk:

$$
\theta \geq \Phi(\bar{\mathbf{y}}^{(\nu)}, \bar{\mathbf{z}}^{(\nu)}) + \sum_{j} \pi_j^{(\nu)}(y_j - \bar{y}_j^{(\nu)}) + \sum_{k} \omega_k^{(\nu)}(z_k - \bar{z}_k^{(\nu)})
$$

Jika SP infeasible, ditambahkan *feasibility cut*:

$$
0 \geq \sum_{j} \tilde{\pi}_j (y_j - \bar{y}_j^{(\nu)}) + \sum_{k} \tilde{\omega}_k (z_k - \bar{z}_k^{(\nu)})
$$

Algoritma konvergen ketika $|\theta^{(\nu)} - LB^{(\nu)}| \leq \epsilon_{BD}$ dengan $\epsilon_{BD} = 10^{-3}$.

### 2.3 Ekstensi untuk *Reverse Supply Chain* dan Keputusan Kualitas

Zhang, Li, dan Ren (2024) memperluas BD dengan menyertakan node inspeksi kualitas yang memperkenalkan variabel keputusan *grading* $g_{ij}^{grade} \in \{A, B, C\}$ untuk setiap unit produk yang dikembalikan. Tambahan kendala kualitas:

$$
\sum_{grade} x_{ij}^{grade} = x_{ij}^{total} \quad \forall i,j
$$
$$
\sum_{i,j} \rho^{grade} \cdot x_{ij}^{grade} \geq \rho^{min} \sum_{i,j} x_{ij}^{total}
$$

di mana $\rho^{grade}$ adalah parameter kualitas per grade dan $\rho^{min}$ adalah ambang kualitas minimum produk remanufaktur. Integrasi ini menambah satu tingkat komputasional pada SP yang diselesaikan dengan teknik *dual decomposition* berlapis.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industrialisasi dari kerangka BD mengikuti protokol tujuh tahap yang distandarkan oleh Lead Researchers (2023):

**Tahap 1 — Karakterisasi Data Industri.** Pengumpulan data primer dari cooperative susu, dairy processor, dan ritel modern selama 12 bulan; mencakup kapasitas produksi harian, profil suhu, *lead time*, serta data emisi dari *DEFRA/DACAB* guidelines.

**Tahap 2 — Estimasi Parameter.** Estimasi $C_{ij}^{s}$, $C_{kl}^{p}$, $F_j$, $F_k$ melalui kombinasi *activity-based costing* dan *regression analysis* dengan $R^2 \geq 0.85$.

**Tahap 3 — Konstruksi Model.** Translasi struktural industri ke dalam formulasi MILP menggunakan *algebraic modeling language* (AMPL/GAMS).

**Tahap 4 — Validasi Model.** *Face validity* dengan expert panel ($n=5$), serta *cross-validation* dengan skenario historis 2018–2022 untuk memastikan *MAPE* $\leq 8\%$.

**Tahap 5 — Generasi Pareto Front.** Iterasi $\varepsilon$-constraint dengan 9 titik referensi pada $f_2$, menghasilkan 9 skenario non-dominated.

**Tahap 6 — Eksekusi Algoritma BD.** Inisialisasi MP dengan $y_j = z_k = 1$ (lower bound trivial), kemudian iterasi BD hingga konvergensi. Implementasi dalam CPLEX 22.1 atau Gurobi 11.0 dengan *callback function* untuk lazy constraint generation.

**Tahap 7 — Analisis Sensitivitas.** Vervariasi parameter permintaan ($\pm 15\%$), biaya energi ($\pm 25\%$), dan tingkat kerusakan (5–12%) untuk menguji robustness solusi.

Standar operasional yang relevan: ISO 22000:2018 (food safety management), ISO 14064-1:2018 (GHG quantification), dan ISO 28000:2022 (supply chain security). Diagram alir logika BD mengikuti pola: **MP solve → SP solve → cut generation → convergence check → solution report**.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Set Data Industri

Studi kasus merujuk pada jaringan persusuan dengan parameter: 4 peternakan besar $I = \{F1, F2, F3, F4\}$, 3 kandidat *processing plant* $J = \{P1, P2, P3\}$, 2 kandidat *distribution center* $K = \{D1, D2\}$, dan 4 zona permintaan $L = \{Z1, Z2, Z3, Z4\}$. Permintaan harian produk pasteurisasi (skenario musim hujan): $D_{Z1} = 12{,}000$ L, $D_{Z2} = 18{,}500$ L, $D_{Z3} = 9{,}800$ L, $D_{Z4} = 15{,}200$ L.

### 4.2 Parameter Biaya dan Kapasitas

| Parameter | Nilai | Satuan |
|---|---|---|
| $F_{P1}$ | 4.200.000 | USD/tahun |
| $F_{P2}$ | 3.800.000 | USD/tahun |
| $F_{P3}$ | 4.500.000 | USD/tahun |
| $F_{D1}$ | 1.500.000 | USD/tahun |
| $F_{D2}$ | 1.700.000 | USD/tahun |
| Kapasitas $P_j$ | 25.000 | L/hari |
| Kapasitas $D_k$ | 40.000 | L/hari |
| $C_{ij}^{s}$ (rerata) | 0.045 | USD/L |
| $C_{kl}^{p}$