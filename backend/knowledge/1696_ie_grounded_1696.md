# 1696 — Optimalisasi Rantai Pasok Produk Susu Multi-Objektif dengan Kerangka Benders Decomposition untuk Jaringan Reverse Logistics

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang unik karena karakteristik intrinsik produknya: **perishability tinggi** (umur simpan 5–21 hari pada suhu 2–4°C), **fluktuasi musiman permintaan**, dan **biaya cold-chain logistics** yang mencapai 30–40% dari total biaya operasional distributor (Lead Researchers, 2023, DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)). Berdasarkan kerangka kerja yang diajukan oleh Lead Researchers (2023), perancangan jaringan rantai pasok susu tidak dapat didekati sebagai masalah single-objective karena adanya **trade-off eksplisit** antara tiga dimensi kinerja: (i) minimalisasi total biaya jaringan, (ii) maksimalisasi tingkat kesegaran produk yang diterima konsumen, dan (iii) minimalisasi emisi karbon dari aktivitas transportasi berpendingin.

Permasalahan ini menjadi semakin kompleks ketika diintegrasikan dengan **reverse supply chain** untuk produk susu kadaluwarsa atau kemasan kosong, sebagaimana diinvestigasi oleh Zhang, Li, dan Ren (2024, DOI: [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)) yang menunjukkan bahwa keputusan kualitas (sortasi, grading, recovery) di fasilitas reverse-logistics secara langsung mempengaruhi **profitabilitas loop tertutup** dan **environmental footprint** jaringan. Konteks industri ini memiliki urgensi manajerial yang tinggi, terutama di negara-negara dengan konsumsi susu per kapita > 60 kg/tahun seperti Selandia Baru, Belanda, dan beberapa negara Eropa, di mana kerugian tahunan akibat spoilage produk susu melebihi USD 30 miliar secara global.

Lead Researchers (2023) menekankan bahwa pendekatan *facility location-allocation* konvensional gagal menangkap interdependensi antara keputusan **tata letak** (lokasi peternakan, processing plant, distribution center, retailer) dan keputusan **operasional** (jadwal produksi, lot sizing, routing armada refrigerated truck). Oleh karena itu, paper tersebut mengusulkan formulasi **mixed-integer linear programming (MILP)** yang diselesaikan dengan **Benders Decomposition** untuk memisahkan subproblem master (network design) dari subproblem operasional, guna menekan computational burden pada instance berskala besar (jaringan dengan >50 node, >200 arc). Pendekatan ini secara substantif memperluas kontribusi Zhang et al. (2024) yang lebih fokus pada integrasi keputusan kualitas dalam loop reverse, menjadi kerangka **forward-reverse integrated multi-objective** yang applicable untuk konteks agroindustri perishable.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Definisi Himpunan dan Parameter

Model jaringan rantai pasok susu didefinisikan pada graf berarah $G = (N, A)$ dengan himpunan node $N$ yang terdiri dari empat lapisan: peternakan $F$, processing plant $P$, distribution center $D$, dan retailer $R$, sehingga $N = F \cup P \cup D \cup R$. Himpunan produk $K$ mencakup varian susu (UHT, pasteurized, yogurt, keju). Parameter-parameter kunci adalah:

- $d_{rk}$ = permintaan rata-rata harian produk $k$ di retailer $r$ (unit)
- $c_{ijk}^{f}$ = biaya transportasi berpendingin dari node $i$ ke $j$ untuk produk $k$ (USD/unit)
- $h_{pk}$ = biaya produksi di processing plant $p$ (USD/unit)
- $\alpha_{jk}$ = tingkat degradasi kesegaran produk $k$ pada arc $(i,j)$ (% per jam)
- $E_{ijk}$ = emisi CO₂ per unit produk $k$ pada arc $(i,j)$ (kg CO₂e)
- $u_p$ = kapasitas produksi processing plant $p$ (unit/hari)
- $v_d$ = kapasitas distribution center $d$ (unit)

### 2.2 Variabel Keputusan

- $y_p \in \{0,1\}$: keputusan pembukaan processing plant $p$
- $z_d \in \{0,1\}$: keputusan pembukaan distribution center $d$
- $x_{ijk} \geq 0$: aliran produk $k$ dari node $i$ ke $j$ (unit/hari)
- $w_{rk} \geq 0$: unmet demand produk $k$ di retailer $r$ (unit/hari)

### 2.3 Formulasi Multi-Objektif

Mengikuti kerangka Lead Researchers (2023, DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)), tiga fungsi objektif dinyatakan sebagai:

$$\min Z_1 = \sum_{p \in P} f_p y_p + \sum_{d \in D} g_d z_d + \sum_{(i,j) \in A} \sum_{k \in K} c_{ijk}^{f} x_{ijk} + \sum_{r \in R} \sum_{k \in K} \pi_k w_{rk} \quad \text{(Total Cost)}$$

$$\min Z_2 = \sum_{(i,j) \in A} \sum_{k \in K} \alpha_{jk} \tau_{ij} x_{ijk} \quad \text{(Freshness Loss)}$$

$$\min Z_3 = \sum_{(i,j) \in A} \sum_{k \in K} E_{ijk} x_{ijk} \quad \text{(Carbon Emission)}$$

dengan $\tau_{ij}$ adalah waktu transit pada arc $(i,j)$, dan $\pi_k$ adalah penalty cost untuk unmet demand. Fungsi-fungsi ini diagregasikan menggunakan **weighted sum method** dengan koefisien bobot $\lambda_1, \lambda_2, \lambda_3 \geq 0$, $\sum \lambda_l = 1$:

$$\min Z = \lambda_1 \tilde{Z}_1 + \lambda_2 \tilde{Z}_2 + \lambda_3 \tilde{Z}_3 \tag{1}$$

### 2.4 Kendala (Constraints)

**Kendala kapasitas produksi:**
$$\sum_{k \in K} \sum_{f \in F} x_{fpk} \leq u_p y_p, \quad \forall p \in P \tag{2}$$

**Kendala kapasitas distribusi:**
$$\sum_{k \in K} \sum_{i \in N} x_{idk} \leq v_d z_d, \quad \forall d \in D \tag{3}$$

**Kendala keseimbangan aliran di processing plant:**
$$\sum_{f \in F} x_{fpk} = \sum_{d \in D} x_{pdk}, \quad \forall p \in P, k \in K \tag{4}$$

**Kendala keseimbangan aliran di distribution center:**
$$\sum_{p \in P} x_{pdk} + \sum_{d' \in D} x_{d'dk} = \sum_{r \in R} x_{drk}, \quad \forall d \in D, k \in K \tag{5}$$

**Kendala permintaan (demand satisfaction):**
$$\sum_{d \in D} x_{drk} + w_{rk} = d_{rk}, \quad \forall r \in R, k \in K \tag{6}$$

### 2.5 Formulasi Benders Decomposition

Model MILP di atas didekomposisi menjadi **master problem** (MP) yang hanya memuat variabel integer $(y_p, z_d)$ dan **subproblem** (SP) yang merupakan linear program atas variabel kontinu $(x_{ijk}, w_{rk})$ untuk fixed integer variables:

**Master Problem (iterasi ke-$\nu$):**
$$\min \sum_{p \in P} f_p y_p + \sum_{d \in D} g_d z_d + \theta$$
$$\text{s.t.} \quad \theta \geq \eta^l + \sum_{p \in P} \pi_p^l (y_p - y_p^l) + \sum_{d \in D} \rho_d^l (z_d - z_d^l), \quad \forall l < \nu \tag{7}$$
$$y_p, z_d \in \{0,1\}$$

di mana $\eta^l$ adalah nilai optimal SP pada iterasi $l$, dan $(\pi^l, \rho^l)$ adalah dual variables (Benders optimality cuts). Subproblem berbentuk:

**Subproblem:**
$$\min \sum_{(i,j) \in A} \sum_{k \in K} c_{ijk}^{f} x_{ijk} + \sum_{r \in R} \sum_{k \in K} \pi_k w_{rk}$$
$$\text{s.t.} \quad (2)-(6) \text{ dengan } y_p, z_d \text{ fixed}$$

Sesuai formulasi Zhang et al. (2024, DOI: [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)), ketika integrasikan kualitas reverse chain, kendala tambahan $\sum_{k} \beta_{ijk}^{rev} x_{ijk}^{rev} \leq q_j$ ditambahkan dengan $\beta$ sebagai koefisien recovery yield, sehingga total variabel $x$ mencakup arc reverse $(r \to d \to p)$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kerangka Benders untuk optimasi jaringan susu mengikuti SOP 7-tahap yang diadopsi dari Lead Researchers (2023):

**Tahap 1 — Karakterisasi Jaringan Eksisting.** Lakukan *value stream mapping* (VSM) untuk memetakan node fisik, aliran forward (susu segar dari peternakan ke konsumen) dan reverse (kemasan/kadaluwarsa kembali ke processing plant untuk recovery). Dokumentasikan parameter $d_{rk}$, $u_p$, $v_d$ dari ERP/SAP sistem perusahaan.

**Tahap 2 — Estimasi Parameter Biaya dan Emisi.** Kalibrasi parameter $c_{ijk}^{f}$ menggunakan data historis fleet management system, dan parameter $E_{ijk}$ mengikuti standar **ISO 14064** untuk carbon footprinting cold-chain logistics.

**Tahap 3 — Formulasi Model.** Bangun model MILP menggunakan formulasi pada Bagian 2, dengan preprocessing validasi data (eliminasi arc yang secara geografis suboptimal, misalnya yang memiliki transit time > 36 jam karena akan menyebabkan freshness loss > 80%).

**Tahap 4 — Inisialisasi Benders.** Set $\nu = 0$. Pilih himpunan awal kandidat fasilitas (misalnya 5 processing plant dengan biaya pembukaan terendah). Selesaikan MP relaxed, peroleh $(y^0, z^0)$.

**Tahap 5 — Iterasi Subproblem.** Selesaikan SP dengan $(y^{\nu}, z^{\nu})$ fixed. Jika SP feasible, bangkitkan **optimality cut** (Persamaan 7). Jika infeasible, bangkitkan **feasibility cut** $\theta \geq 0 - \sum_{i} \mu_i (\text{violation}_i)$ dengan $\mu$ dual multipliers.

**Tahap 6 — Update Master.** Tambahkan cut baru ke MP, selesaikan kembali untuk peroleh $(y^{\nu+1}, z^{\nu+1})$ dan lower bound $\theta^{\nu+1}$.

**Tahap 7 — Konvergensi.** Hentikan iterasi ketika $\frac{|\theta^{\nu} - Z_{SP}^{\nu}|}{Z_{SP}^{\nu}} \leq \epsilon = 10^{-4}$ atau $\nu \geq 200$. Output: solusi jaringan optimal $(y^*, z^*, x^*)$.

Arsitektur teknologi pendukung: **Python + Gurobi 11.0** untuk solving subproblem dan master problem, **CPLEX 22.1** sebagai benchmarking, dengan **GUI dashboard** berbasis Power BI untuk visualisasi Pareto front dari tiga objektif. Untuk industri skala besar (>100 node), direkomendasikan implementasi **Benders dengan Pareto-optimal cut generation** untuk efisiensi memori.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Kasus

Studi kasus dilakukan pada jaringan distributor susu di regional Midwest USA dengan spesifikasi: $|F|=3$ peternakan, $|P|=4$ kandidat processing plant, $|D|=5$ kandidat distribution center, $|R|=8$ retailer, $|K|=3$ produk (pasteurized milk U1, yogurt Y1, keju soft C1). Parameter kunci:

| Parameter | Nilai |
|-----------|-------|
| $d_{r,\text{U1}}$ rata-rata | 800 unit/hari |
| $d_{r,\text{Y1}}$ rata-rata |