# 2448 — Rantai Pasok Produk Susu: Kerangka Multi-Objektif dengan Benders Decomposition untuk Desain Jaringan Dairy

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Benders Decomposition for Network Design and Operations in a Reverse Supply Chain Considering Quality Decisions*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tekanan struktural yang semakin kompleks akibat konvergensi empat fenomena utama: (1) **volatilitas permintaan** yang didorong oleh pergeseran pola konsumsi menuju protein sehat dan functional dairy (yogurt probiotik, keju artisan), (2) **kerentanan rantai dingin** yang menyebabkan kerugian hingga 20–25% dari total produksi di negara berkembang akibat kerusakan produk (perishability), (3) **fluktuasi harga bahan baku** susu segar yang sangat dipengaruhi musim pakan ternak, serta (4) **regulasi emisi karbon** yang makin ketat dalam lingkup *Carbon Border Adjustment Mechanism* (CBAM) Uni Eropa dan standar ISO 14064.

Dalam konteks ini, Lead Researchers (2023) mempublikasikan kerangka kerja multi-objektif yang elegan untuk mendesain jaringan rantai pasok dairy secara simultan dengan mempertimbangkan minimal tiga fungsi tujuan yang saling berkonflik—yaitu minimasi total biaya logistik, maksimasi tingkat layanan (service level), dan minimasi jejak karbon. Pendekatan konvensional yang menggunakan *weighted sum* tunggal terbukti tidak cukup karena trade-off antar objektif bersifat non-konveks; oleh karena itu, paper tersebut mengusulkan formulasi *Mixed-Integer Linear Programming* (MILP) yang diselesaikan dengan teknik **Benders Decomposition** untuk mengeksplorasi frontier Pareto secara efisien pada instances berskala industri.

Urgensi metodologis ini semakin kuat ketika mempertimbangkan bahwa jaringan dairy memiliki karakteristik khas berupa *product decay function* yang time-dependent, kapasitas minimum hasil pasteurisasi harian yang harus dipenuhi, dan kendala *minimum shelf-life on arrival* (misalnya minimal 14 hari untuk UHT milk). Zhang, Li, dan Ren (2024) dalam studi komplementer mereka memperkuat relevansi topik dengan menunjukkan bahwa keputusan kualitas (*quality decisions*) dalam jaringan *reverse supply chain*—di mana susu kadaluwarsa dan kemasan harus dialirkan kembali ke fasilitas reprocessing—juga dapat diselesaikan secara efisien menggunakan Benders Decomposition, yang selanjutnya mempertegas bahwa arsitektur algoritmik ini dapat menjadi *backbone* bagi desain jaringan dairy modern yang mengintegrasikan forward dan reverse flow dalam satu kerangka keputusan terpadu.

Aspek strategis lainnya adalah **transformasi digital** yang memungkinkan pengumpulan data *real-time* dari sensor IoT pada tangki cistern, RFID pada pallet, dan *blockchain traceability* dari peternakan ke ritel. Integrasi data ini—yang sering disebut sebagai *digital twin* rantai pasok—memungkinkan formulasi *stochastic programming* yang lebih realistis, namun konsekuensinya adalah membengkaknya dimensi masalah. Tanpa dekomposisi, model MILP dengan 500 SKU, 50 plant, dan 200 customer zone akan menjadi *computationally intractable* pada solver komersial seperti CPLEX atau Gurobi dalam waktu komputasi yang layak. Inilah celah kontribusi yang dijawab oleh paper Lead Researchers (2023).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Multi-Objektif Asli (Full Space)

Paper Lead Researchers (2023) merumuskan masalah sebagai berikut. Misalkan himpunan supplier (peternakan) dinotasikan $I$, fasilitas produksi/pengolahan sebagai $J$, gudang distribusi sebagai $K$, dan zona pelanggan ritel sebagai $L$. Parameter-parameter kunci meliputi:

- $d_{l}$: permintaan rata-rata harian di zona pelanggan $l$ (liter/hari)
- $c_{ij}^{raw}$: biaya transportasi susu mentah dari supplier $i$ ke plant $j$ (Rp/liter)
- $c_{jk}^{proc}$: biaya operasi plant $j$ ke gudang $k$ (Rp/liter)
- $c_{kl}^{dist}$: biaya distribusi dari gudang $k$ ke pelanggan $l$ (Rp/liter)
- $f_j$: biaya tetap pengaktifan plant $j$ (Rp/hari)
- $\alpha_j$: emisi CO₂ per liter yang diproses di plant $j$ (kgCO₂e/liter)
- $\beta_{ij}$: emisi CO₂ per liter yang diangkut dari $i$ ke $j$ (kgCO₂e/liter·km)
- $s_l$: service level minimum di zona $l$ (fraksi permintaan yang harus terpenuhi, $0 \le s_l \le 1$)

Variabel keputusan:
- $x_j \in \{0,1\}$: 1 jika plant $j$ dibuka, 0 sebaliknya
- $y_{ij} \ge 0$: volume susu mentah dari $i$ ke $j$ (liter/hari)
- $z_{jk} \ge 0$: volume produk olahan dari $j$ ke $k$ (liter/hari)
- $w_{kl} \ge 0$: volume distribusi dari $k$ ke $l$ (liter/hari)
- $u_l \ge 0$: unmet demand di zona $l$ (liter/hari)

Fungsi objektif pertama (biaya total):
$$\min Z_1 = \sum_j f_j x_j + \sum_{i,j} c_{ij}^{raw} y_{ij} + \sum_{j,k} c_{jk}^{proc} z_{jk} + \sum_{k,l} c_{kl}^{dist} w_{kl} + p \sum_l u_l$$

di mana $p$ adalah *penalty cost* per liter unmet demand (umumnya $p = 5 \times$ harga jual eceran).

Fungsi objektif kedua (emisi karbon):
$$\min Z_2 = \sum_j \alpha_j \sum_i y_{ij} + \sum_{i,j,k,l} \beta_{ij} d_{ij}^{dist} (y_{ij} + z_{jk} + w_{kl})$$

Fungsi objektif ketiga (maksimasi service level, diformulasikan sebagai minimasi unmet):
$$\min Z_3 = \sum_l u_l$$

Kendala-kendala utama:
$$\sum_j y_{ij} \le cap_i \quad \forall i \quad \text{(kapasitas supplier)}$$
$$\sum_i y_{ij} = \sum_k z_{jk} \quad \forall j \quad \text{(konservasi massa di plant)}$$
$$\sum_j z_{jk} = \sum_l w_{kl} \quad \forall k \quad \text{(konservasi massa di gudang)}$$
$$\sum_k w_{kl} + u_l \ge d_l \quad \forall l \quad \text{(permintaan terpenuhi atau unmet)}$$
$$u_l \le (1 - s_l) d_l \quad \forall l \quad \text{(service level constraint)}$$
$$y_{ij} \le M \cdot x_j \quad \forall i,j \quad \text{(linking constraint)}$$

### 2.2 Benders Decomposition: Master Problem & Subproblem

Karena variabel biner $x_j$ menyebabkan masalah *NP-hard*, Lead Researchers (2023) memisahkan masalah menjadi:

**Master Problem (MP)**—hanya berisi variabel $x_j$:
$$\min_{x} \sum_j f_j x_j + \theta$$
subject to:
$$x_j \in \{0,1\} \quad \forall j$$
$$\theta \ge \lambda^{(r)} \quad \text{(Benders optimality cuts dari iterasi } r\text{)}$$

**Subproblem (SP)**—untuk给定 $x_j^*$, selesaikan variabel kontinu $(y, z, w, u)$:
$$\min_{y,z,w,u} \sum_{i,j} c_{ij}^{raw} y_{ij} + \sum_{j,k} c_{jk}^{proc} z_{jk} + \sum_{k,l} c_{kl}^{dist} w_{kl} + p \sum_l u_l$$

Dual dari subproblem menghasilkan *optimality cut* berbentuk:
$$\theta \ge \pi_0 + \sum_j \pi_j x_j$$

di mana $\pi$ adalah variabel dual dari kendala linking. Algoritma iteratif menghasilkan **lower bound** dari MP dan **upper bound** dari SP feasible; konvergensi tercapai ketika $|UB - LB| / LB \le \epsilon$ (umumnya $\epsilon = 10^{-3}$).

### 2.3 Integrasi dengan Keputusan Kualitas (Reverse Flow)

Membangun kerangka Zhang, Li, dan Ren (2024), kita dapat memperluas subproblem dengan menambahkan variabel reverse flow $r_{kl}^{q}$ (volume return dengan kualitas grade $q \in \{A, B, C\}$). Keputusan kualitas memodifikasi kendala menjadi:
$$w_{kl}^{fresh} \le D_{kl}^{shelf} \cdot \eta_{kl}^{q} \quad \forall k, l, q$$

di mana $D_{kl}^{shelf}$ adalah *remaining shelf-life* yang dimodelkan sebagai fungsi jarak dan suhu.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kerangka Lead Researchers (2023) di industri mengikuti **SOP 7-tahap** berikut:

**Tahap 1 — Akuisisi Data & Pemodelan Jaringan Fisik.**
Lakukan *site survey* pada fasilitas existing menggunakan GPS survey dan audit kapasitas. Data permintaan dikumpulkan dari histori POS (Point-of-Sale) ritel minimal 24 bulan, lalu dilakukan *time-series decomposition* untuk memisahkan trend, seasonal, dan residual.

**Tahap 2 — Estimasi Parameter Biaya & Emisi.**
Biaya transportasi dihitung menggunakan model *Vehicle Routing Problem* dengan kapasitas tangki cistern 16.000 liter, menghasilkan $c_{ij} = c_{ij}^{fixed} + c_{ij}^{variable} \cdot d_{ij}$. Emisi dihitung mengikuti GHG Protocol Scope 3 dengan faktor emisi $2.68$ kgCO₂e/liter solar.

**Tahap 3 — Formulasi Model & Validasi.**
Bangun model MILP menggunakan bahasa pemodelan *Generalized Algebraic Modeling System* (GAMS) atau *Python PuLP* dengan solver CPLEX 22.1. Validasi melalui *face validation* dengan praktisi industri dan *extreme point testing*.

**Tahap 4 — Implementasi Benders Decomposition.**
Gunakan *callback function* untuk lazy constraint generation. Pseudocode algoritma:

```
Initialize: UB = +∞, LB = -∞, ε = 0.001
While (UB - LB)/LB > ε:
   Solve Master Problem → x_j*
   Solve Subproblem with x_j* → (y*, z*, w*, u*)
   If SP feasible and bounded:
      Compute dual π from SP
      Add optimality cut: θ ≥ π_0 + Σ π_j x_j
      Update LB = max(LB, MP_obj)
      Update UB = min(UB, Σ f_j x_j* + SP_obj)
   Else (SP infeasible):
      Compute ray d_π from dual
      Add feasibility cut: 0 ≥ π_0^f + Σ π_j^f x_j
End While
Return x*, (y*, z*, w*, u*)
```

**Tahap 5 — Pembangkitan Pareto Front.**
Karena paper menggunakan metode $\epsilon$-constraint, variasikan kendala $Z_2 \le \epsilon_k$ untuk $k = 1, ..., K$ guna menghasilkan $K$ titik Pareto. Setiap titik diselesaikan ulang menggunakan Benders Decomposition untuk efisiensi.

**Tahap 6 — Decision Support & Visualisasi.**
Sajikan Pareto front dalam *radar chart* dan *parallel coordinate plot* untuk manajemen. Gunakan teknik MCDA (Multi-Criteria Decision Analysis) seperti TOPSIS untuk membantu eksekutif memilih skenario final.

**Tahap 7 — Implementasi & Monitoring.**
Terapkan keputusan ke sistem ERP (SAP S/4HANA atau Oracle SCM), lalu monitor KPI harian: on-time delivery rate, tingkat kerusakan produk, emisi per liter, dan total biaya per liter.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Setup Kasus: PT Susu Nusantara (Studi Hipotetis Realistis)

Perusahaan menghadapi keputusan *greenfield network design* dengan parameter berikut:

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Supplier (peternakan) | 6 | lokasi |
| Plant (pengolahan) kandidat | 4 | lokasi |
| Gudang distribusi kandidat | 5 | lokasi |
| Zona pelanggan | 12 | zona |
| Total demand harian | 240.000 | liter/hari |
| Biaya tetap plant | Rp 850.000.000 | per hari |
| Biaya transport | Rp 350 | per liter·km |
| Penalty unmet | Rp 12.500 | per liter |
| Service level minimum | 95% | — |

###