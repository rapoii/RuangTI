# 1760 — Optimasi Jaringan Rantai Pasok Produk Susu Multi-Objektif dengan Dekomposisi Benders untuk Keputusan Kualitas pada Reverse Logistics

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition  
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)  
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu (dairy) merupakan salah satu sektor pangan dengan karakteristik operasional paling kompleks dalam literatur *Operations Research*. Produk susu—mulai dari *fresh pasteurized milk*, yogurt, keju, hingga *cream*—memiliki *shelf-life* pendek (3–21 hari tergantung jenis), memerlukan *cold-chain* terintegrasi pada suhu 2–8°C, dan memiliki volatilitas permintaan musiman yang signifikan (Lead Researchers, 2023; [DOI: 10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)). Menurut data FAO, lebih dari 30% volume susu segar dunia terbuang sia-sia sebelum sampai konsumen, menjadikan masalah *waste reduction* sebagai imperatif strategis dan lingkungan.

Konteks Indonesia relevan: konsumsi susu domestik tumbuh rata-rata 5,8% per tahun (BPS, 2023), namun *cold-chain logistics cost* mencapai 18–25% dari harga jual—angka yang jauh di atas benchmark Eropa (8–12%). Mendesain jaringan *forward* (pabrik → DC → retailer) dan *reverse* (retur produk kadaluwarsa → daur ulang/insinerasi) secara simultan dengan mempertimbangkan keputusan kualitas menjadi sangat sulit karena struktur Mixed-Integer Nonlinear Programming (MINLP) berskala besar.

Lead Researchers (2023) mengusulkan kerangka kerja multi-objektif yang mengintegrasikan **minimasi total biaya logistik**, **maksimasi tingkat kesegaran produk** (freshness index), dan **minimasi emisi karbon**. Solusi eksak (*full-space MILP*) terbukti *intractable* untuk jaringan riil berskala nasional. Oleh karena itu, mereka menerapkan **Benders Decomposition** (Benders, 1962) untuk mempartisi masalah menjadi *master problem* (keputusan fasilitas—variabel biner) dan *subproblem* (aliran operasional—variabel kontinu). Komplementer, Zhang, Li, & Ren (2024) memvalidasi efektivitas Benders pada *reverse supply chain* dengan keputusan kualitas, di mana produk retur diklasifikasikan berdasarkan grade kualitas untuk *remanufacturing*, *recycling*, atau *disposal* ([DOI: 10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)). Integrasi kedua pendekatan ini memungkinkan keputusan *closed-loop* yang lebih akurat dan secara industri dapat menurunkan *total logistics cost* 12–17% berdasarkan benchmark empiris mereka.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Multi-Objektif

Model optimasi jaringan multi-objektif diformulasikan dengan metode **ε-constraint** untuk menghasilkan *Pareto front*. Fungsi objektif primer (biaya) diminimasi, sedangkan objektif sekunder (kesegaran, emisi) dijadikan *constraint* terparameterisasi:

$$\min \; Z_1 = \sum_{p \in P} \sum_{i \in I} \sum_{j \in J} \sum_{k \in K} c_{pijk}^{prod} \cdot X_{pijk} + \sum_{p \in P} \sum_{i \in I} \sum_{j \in J} h_{pj} \cdot I_{pj} + \sum_{p \in P} \sum_{j \in J} \sum_{r \in R} c_{pjr}^{trans,f} \cdot F_{pjr} + \sum_{p \in P} \sum_{r \in R} c_{pr}^{rev} \cdot Q_{pr}$$

*dengan constraint Pareto:*

$$\sum_{p \in P} \sum_{j \in J} f_{pj} \cdot \eta_{pj} \geq \varepsilon_f \quad \text{(tingkat kesegaran)}$$

$$\sum_{p \in P} \sum_{i \in I} \sum_{j \in J} CO_{2,pijk} \cdot X_{pijk} \leq \varepsilon_c \quad \text{(batas emisi)}$$

**Notasi parameter & variabel:**

| Simbol | Deskripsi | Domain |
|--------|-----------|--------|
| $P$ | Himpunan produk susu ($p$) | $\lvert P \rvert = 3$ (susu pasteurisasi, yogurt, keju) |
| $I, J, R$ | Himpunan pabrik, DC, zona permintaan | $\lvert I \rvert = 4, \lvert J \rvert = 8, \lvert R \rvert = 25$ |
| $K$ | Himpunan skenario permintaan (stokastik) | $\lvert K \rvert = 20$ |
| $X_{pijk}$ | Aliran produk $p$ dari pabrik $i$ ke DC $j$ di skenario $k$ | $\geq 0$ |
| $Y_i, Z_j$ | Keputusan biner buka/tutup fasilitas | $\in \{0,1\}$ |
| $\eta_{pj}$ | *Freshness index* di DC $j$ | $\in [0,1]$ |
| $\theta$ | Variabel nilai subproblem di *master* | $\in \mathbb{R}$ |

### 2.2 Formulasi Master Problem (Benders)

*Master problem* memutuskan lokasi fasilitas dan mengekspos peubah $\theta$ sebagai approximasi biaya operasional masa depan:

$$\min \; Z^{MP} = \sum_{i \in I} f_i Y_i + \sum_{j \in J} g_j Z_j + \theta$$

*Subject to:*

$$\sum_{i \in I} Y_i \geq 1 \quad \text{(paling sedikit satu pabrik aktif)}$$

$$\theta \geq L^{(n)} + \sum_{i \in I} \pi_i^{(n)} (Y_i - Y_i^{(n)}) + \sum_{j \in J} \mu_j^{(n)} (Z_j - Z_j^{(n)}) \quad \forall n \in N^{opt} \quad \text{(optimality cut)}$$

$$\text{Feasibility cut: } 0 \geq \sum_{i} \alpha_i^{(m)} (Y_i - Y_i^{(m)}) + \sum_{j} \beta_j^{(m)} (Z_j - Z_j^{(m)}) \quad \forall m \in N^{feas}$$

### 2.3 Subproblem Operasional

Subproblem menguji kelayakan alur dan biaya operasional $\theta$ untuk vektor $(Y^*, Z^*)$ tertentu:

$$\min \; \theta = \sum_{p,i,j,k} c_{pijk}^{prod} X_{pijk} + \sum_{p,j} h_{pj} I_{pj} + \sum_{p,r} (c_{pr}^{trans} F_{pr} + c_{pr}^{pen} S_{pr})$$

*Constraint flow balance* di DC $j$:

$$\sum_{i \in I} X_{pijk} + I_{pj,k-1} = \sum_{r \in R} F_{pjrk} + I_{pjk} \quad \forall p,j,k$$

*Constraint kapasitas:*

$$\sum_{p \in P} X_{pijk} \leq \text{cap}_i \cdot Y_i^* \quad \forall i,k$$

*Constraint permintaan (dengan允许 shortage $S_{prk}$):*

$$\sum_{j \in J} F_{pjrk} + S_{prk} \geq d_{prk} \quad \forall p,r,k$$

*Constraint kualitas (Zhang et al., 2024):*

$$\sum_{p \in P} \sum_{q \in Q_p} q_{p,q}^{grade} \cdot Q_{prq}^{ret} \leq \Gamma_{r}^{max} \quad \forall r$$

dimana grade kualitas $q \in \{A, B, C\}$ menentukan apakah produk retur dapat di-*remanufacture* (grade A), di-*recycle* (grade B), atau *disposal* (grade C) ([DOI: 10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)).

### 2.4 Algoritma Benders dengan Cutting Plane

Iterasi algoritmik:

1. Selesaikan *master problem* → dapat $(Y^{(n)}, Z^{(n)}, \theta^{(n)})$.
2. Selesaikan *subproblem* dengan $(Y^{(n)}, Z^{(n)})$.
   - Jika *subproblem* layak → dapatkan dual $\pi^{(n)}$, bangun *optimality cut*.
   - Jika tak layak → bangun *feasibility cut* dengan dual ray $\alpha^{(n)}$.
3. Tambahkan cut ke *master*, ulangi hingga gap $(UB - LB)/UB < \epsilon = 10^{-3}$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Implementasi Industri

```
┌──────────────────────────────────────────────────────────────┐
│  TAHAP 1: Data Acquisition & Cleansing                       │
│  → ERP (SAP/Oracle), WMS, TMS, IoT cold-chain sensor         │
├──────────────────────────────────────────────────────────────┤
│  TAHAP 2: Stochastic Demand Generation (Monte Carlo)         │
│  → 20 skenario permintaan menggunakan historical data 3 yr   │
├──────────────────────────────────────────────────────────────┤
│  TAHAP 3: Benders Master Iteration (CPLEX/Gurobi)            │
│  → Binary facility decisions + θ approximation               │
├──────────────────────────────────────────────────────────────┤
│  TAHAP 4: Benders Subproblem (LP)                             │
│  → Operational flows + freshness decay + reverse recovery    │
├──────────────────────────────────────────────────────────────┤
│  TAHAP 5: ε-Constraint Sweep → Pareto Front                  │
├──────────────────────────────────────────────────────────────┤
│  TAHAP 6: Decision Support Dashboard (Power BI/Tableau)       │
└──────────────────────────────────────────────────────────────┘
```

### 3.2 SOP Implementasi Lapangan (berdasarkan Lead Researchers, 2023)

1. **Pre-processing data** (hari 1–7): validasi SKU master, kalibrasi sensor suhu GPS, segmentasi customer.
2. **Pembentukan model** (hari 8–14): estimasi parameter biaya ($c^{prod}, c^{trans}, c^{pen}$), validasi kapasitas $\text{cap}_i$, estimasi permintaan musiman $d_{prk}$.
3. **Eksekusi solver** (hari 15–16): CPLEX 22.1 dengan Benders otomatis, batas waktu 7200 detik, *parallel mode* 8 thread.
4. **Validasi & scenario analysis** (hari 17–21): analisis sensitivitas $\pm 20\%$ pada parameter biaya dan permintaan.
5. **Implementasi keputusan** (hari 22–30): kontrak supplier, aktivasi fasilitas, redeployment armada.
6. **Monitoring KPI** (bulanan): *On-Time-In-Full* (OTIF), *freshness decay rate*, *reverse recovery yield*, Scope 1+2+3 carbon footprint.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Studi Kasus

Studi kasus mengambil pola jaringan distributor susu nasional Indonesia dengan parameter berikut (diadaptasi dari Lead Researchers, 2023):

| Parameter | Nilai | Keterangan |
|-----------|-------|------------|
| Pabrik aktif optimum | $Y_1=1, Y_2=1, Y_3=0, Y_4=0$ | 2 dari 4 kandidat |
| DC aktif optimum | $Z_2=1, Z_5=1, Z_7=1$ | 3 dari 8 kandidat |
| Permintaan deterministic | $d_{susu,r}=150+50\sin(2\pi t/12)$ | ritase ritel zona