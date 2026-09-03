# 1600 — Optimasi Multi-Objektif Jaringan Rantai Pasok Produk Susu Menggunakan Dekomposisi Benders

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tekanan multidimensional yang belum pernah terjadi sebelumnya. Berdasarkan kerangka kerja yang dikembangkan oleh Lead Researchers (2023) dalam *Industrial Engineering and Innovation Management* (DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)), jaringan rantai pasok susu dicirikan oleh sifat perishability yang ekstrem—di mana produk susu memiliki umur simpan rata-rata hanya 7–21 hari untuk produk segar dan memerlukan cold chain logistics dengan suhu terkontrol 2–4°C sepanjang distribusi. Studi tersebut menegaskan bahwa keputusan desain jaringan rantai pasok susu tidak dapat dipisahkan dari dimensi operasional harian, sehingga diperlukan kerangka optimasi yang secara simultan mempertimbangkan keputusan *facility location*, *capacity allocation*, *production planning*, dan *distribution routing* dalam satu formulasi terpadu.

Urgensi ekonomis dari permasalahan ini sangat signifikan. Berdasarkan data FAO yang dirujuk dalam paper, industri susu menyumbang sekitar 14% dari konsumsi protein hewani global, dengan pangsa pasar rantai pasok dingin (cold chain) yang tumbuh pada CAGR 8,7%. Namun, tingkat waste rate produk susu secara global mencapai 20–30% akibat inefisiensi jaringan distribusi dan keputusan produksi yang suboptimal. Studi Lead Researchers (2023) menunjukkan bahwa integrasi keputusan taktis dan operasional dalam satu model optimasi mampu menurunkan total biaya logistik hingga 12–18% sambil mempertahankan tingkat servis yang diinginkan.

Kompleksitas struktural permasalahan ini terletak pada tiga dimensi utama. Pertama, *bi-criteria nature*—yaitu kebutuhan untuk meminimalkan biaya total rantai pasok sekaligus meminimalkan emisi karbon atau waktu transportasi (mengingat karakteristik perishability susu). Kedua, *mixed-integer nature*—di mana keputusan biner (lokasi fasilitas, aktivasi jalur distribusi) berinteraksi dengan keputusan kontinyu (alokasi kapasitas, kuantitas aliran). Ketiga, *large-scale combinatorial nature*—yang membuat computational tractability menjadi bottleneck utama ketika jaringan mencakup ratusan node dan ratusan periode waktu.

Kontribusi ilmiah Lead Researchers (2023) adalah mengusulkan kerangka kerja multi-objektif yang diselesaikan melalui Benders Decomposition (BD)—sebuah teknik yang mempartisi masalah Mixed-Integer Linear Programming (MILP) menjadi master problem (MP) dan subproblem (SP) yang dapat diselesaikan secara iteratif hingga konvergensi optimal. Pendekatan ini secara dramatis meningkatkan skalabilitas solusi untuk instances berdimensi industri nyata, seperti yang divalidasi oleh Zhang, Li, dan Ren (2024) dalam studi reverse supply chain dengan keputusan kualitas (DOI: [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)), yang menunjukkan efektivitas BD pada permasalahan jaringan berskala besar dengan kualitas item yang heterogen.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Formulasi MILP Multi-Objektif Original

Model original dari Lead Researchers (2023) diformulasikan sebagai berikut. Definisikan himpunan indeks:

- $I = \{1, 2, \ldots, m\}$: himpunan peternakan/supplier susu mentah
- $J = \{1, 2, \ldots, n\}$: himpunan pabrik pengolahan (*processing plants*)
- $K = \{1, 2, \ldots, p\}$: himpunan pusat distribusi (*distribution centers*)
- $L = \{1, 2, \ldots, q\}$: himpunan zona pelanggan (*customer zones*)
- $T = \{1, 2, \ldots, \tau\}$: himpunan periode perencanaan

Parameter-parameter model:
- $c_{ij}^{r}$: biaya transportasi susu mentah dari peternakan $i$ ke pabrik $j$ per unit per periode
- $c_{jkl}^{p}$: biaya transportasi produk jadi dari pabrik $j$ ke DC $k$ ke pelanggan $l$
- $f_{j}$: biaya tetap pengoperasian pabrik $j$
- $h_{j}$: biaya inventory holding di pabrik $j$ per unit per periode
- $\alpha$: koefisien emisi CO₂ per ton-km transportasi
- $\beta_{j}$: koefisien emisi CO₂ per unit produksi di pabrik $j$
- $d_{lt}$: demand pelanggan $l$ pada periode $t$
- $cap_{j}$: kapasitas produksi pabrik $j$

Variabel keputusan:
- $x_{ijt} \geq 0$: kuantitas susu mentah yang dikirim dari $i$ ke $j$ pada periode $t$
- $y_{jkl t} \geq 0$: kuantitas produk jadi yang dikirim dari $j$ ke $l$ melalui DC $k$ pada periode $t$
- $z_{j} \in \{0, 1\}$: 1 jika pabrik $j$ dioperasikan, 0 sebaliknya
- $s_{jt} \geq 0$: level inventory di pabrik $j$ pada akhir periode $t$

**Fungsi Objektif 1 (Biaya Total):**
$$\min Z_1 = \sum_{t \in T} \sum_{i \in I} \sum_{j \in J} c_{ij}^{r} x_{ijt} + \sum_{t \in T} \sum_{j \in J} \sum_{k \in K} \sum_{l \in L} c_{jkl}^{p} y_{jkl t} + \sum_{j \in J} f_{j} z_{j} + \sum_{t \in T} \sum_{j \in J} h_{j} s_{jt}$$

**Fungsi Objektif 2 (Total Emisi CO₂):**
$$\min Z_2 = \sum_{t \in T} \sum_{i \in I} \sum_{j \in J} \alpha \cdot d(i,j) \cdot x_{ijt} + \sum_{j \in J} \beta_{j} \sum_{t \in T} \sum_{i \in I} x_{ijt}$$

di mana $d(i,j)$ merepresentasikan jarak Euclidean antara node $i$ dan $j$.

**Kendala-kendala utama:**

*Kendala kapasitas pabrik:*
$$\sum_{i \in I} x_{ijt} \leq cap_{j} \cdot z_{j}, \quad \forall j \in J, \forall t \in T$$

*Kendala keseimbangan inventory (flow balance) di pabrik:*
$$\sum_{i \in I} x_{ijt} + s_{j,t-1} = s_{jt} + \sum_{k \in K} \sum_{l \in L} y_{jkl t}, \quad \forall j \in J, \forall t \in T$$

*Kendala pemenuhan demand:*
$$\sum_{j \in J} \sum_{k \in K} y_{jkl t} \geq d_{lt}, \quad \forall l \in L, \forall t \in T$$

*Kendala non-negativitas dan binary:*
$$x_{ijt}, y_{jkl t}, s_{jt} \geq 0; \quad z_{j} \in \{0,1\}$$

### 2.2. Penyelesaian Multi-Objektif melalui $\varepsilon$-Constraint Method

Untuk menangani konflik antara $Z_1$ dan $Z_2$, paper Lead Researchers (2023) menggunakan $\varepsilon$-constraint method dengan memformulasikan:

$$\min Z_1 \quad \text{subject to: } Z_2 \leq \varepsilon_k$$

dengan $\varepsilon_k = Z_2^{min} + \frac{k}{K_{max}}(Z_2^{max} - Z_2^{min})$ untuk $k = 0, 1, \ldots, K_{max}$. Solusi pareto-optimal frontier kemudian dikonstruksi dari himpunan solusi non-dominated.

### 2.3. Benders Decomposition (BD)

Strategi dekomposisi yang digunakan mempartisi variabel menjadi dua set: **variabel komplikasi (complicating variables)** yang meliputi $z_j$ (biner lokasi) dan **variabel kontinyu** yang meliputi $x_{ijt}, y_{jkl t}, s_{jt}$.

**Master Problem (MP) iterasi ke-ν:**
$$\min_{z, \eta} \eta + \sum_{j \in J} f_j z_j$$
$$\text{s.t.: } \eta \geq Q(z^{(1)}), \ldots, \eta \geq Q(z^{(\nu-1)})$$
$$z_j \in \{0,1\}$$

di mana $Q(z^{(\nu)})$ adalah nilai optimal subproblem pada titik $z^{(\nu)}$.

**Subproblem (SP) untuk fixed $z_j$:**
$$Q(z) = \min \sum c \cdot (x,y,s)$$
$$\text{s.t.:} Ax + By + Cs = b, \quad Gz \leq g - H(x,y,s)$$
$$x,y,s \geq 0$$

SP diselesaikan sebagai LP relaxation (dual feasible). Benders cut yang dibangkitkan:
$$\eta \geq Q(z) + \pi^T (z - z^{(\nu)})$$

di mana $\pi$ adalah dual variables dari SP optimal.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi metodologi BD untuk optimasi jaringan rantai pasok susu mengikuti SOP tujuh tahap yang distandardisasi:

**Tahap 1 — Karakterisasi Jaringan & Pengumpulan Data.**
Insinyur industri melakukan pemetaan topologi jaringan menggunakan Geographic Information System (GIS), mengidentifikasi node-node peternakan, pabrik, DC, dan pelanggan. Parameter biaya, kapasitas, dan demand dikumpulkan dari ERP sistem (SAP S/4HANA atau Oracle SCM) dengan horizon perencanaan 12 periode bulanan.

**Tahap 2 — Estimasi Parameter Emisi.**
Koefisien emisi $\alpha$ dan $\beta_j$ dihitung menggunakan database Ecoinvent v3.9 dan DEFRA conversion factors. Untuk cold chain, digunakan faktor koreksi refrigerant leakage GWP (Global Warming Potential).

**Tahap 3 — Formulasi Model.**
Model MILP multi-objektif dikodekan dalam algebraic modeling language (AMPL, GAMS, atau Pyomo). Validasi model dilakukan melalui sanity check pada constraints dan extreme cases.

**Tahap 4 — Generasi Pareto Frontier.**
$\varepsilon$-constraint method diterapkan dengan $K_{max} = 10$–$20$ titik, diselesaikan secara sekuensial. Setiap iterasi menghasilkan satu titik pareto-optimal.

**Tahap 5 — Aplikasi Benders Decomposition.**
MP dan SP diselesaikan menggunakan solver CPLEX 22.1 atau Gurobi 11.0. Parameter convergence tolerance: gap optimalitas $10^{-4}$, maximum iterations 500.

**Tahap 6 — Analisis Sensitivitas.**
Variasi parameter demand (±15%), biaya transportasi (±20%), dan kapasitas (±10%) diuji untuk mengukur robustness solusi.

**Tahap 7 — Implementasi Decision Support System (DSS).**
Solusi optimal diintegrasikan ke dalam dashboard Power BI atau Tableau untuk visualisasi trade-off antara biaya dan emisi, dengan kemampuan what-if analysis real-time.

**Diagram Alir Logika BD:**

```
┌─────────────────────────┐
│   Initialize MP bounds  │
│   UB = +∞, LB = -∞      │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│  Solve Master Problem   │ ◄──── Add Benders Cuts
│  (MILP with z_j binary) │       from previous iterations
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│  Get solution z^(ν)     │
│  Calculate LB           │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│  Solve Subproblem       │
│  (LP with fixed z_j)    │
└────────────┬────────────┘
             │
             ▼
┌─────────────────────────┐
│  Get dual variables π   │
│  Calculate UB           │
│  Generate Benders cut   │
└────────────┬────────────┘
             │
             ▼
      ┌──────────────┐
      │ UB - LB ≤ ε?│──Yes──► CONVERGED
      └──────┬───────┘
             │ No
             └────► Back to Master Problem
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Setup Kasus

Pertimbangkan jaringan rantai pasok susu di regional Indonesia Timur dengan parameter berikut (mengacu pada data Lead Researchers (2023) yang disesuaikan untuk konteks Asia Tenggara):

| Parameter | Nilai |
|-----------|-------|
| Jumlah peternakan ($|I|$) | 8 |
| Jumlah pabrik ($|J|$) | 4 |
| Jumlah DC ($|K|$) | 3 |
| Jumlah zona pelanggan ($|L|$) | 12 |
| Periode perencanaan ($|T|$) | 12 bulan |
| Total demand tahunan | 240.000 ton susu pasteurisasi |

**Tabel biaya tetap pabrik ($f_j$):**
- Pabrik 1: $f_1$ = USD 1.200.000/tahun
- Pabrik 2: $f_2$ = USD 1.500.000/t