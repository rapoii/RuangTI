# 2592 — Kerangka Multi-Objektif untuk Desain Jaringan Rantai Pasok Produk Susu dengan Dekomposisi Benders

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition*
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Benders Decomposition for Network Design and Operations in a Reverse Supply Chain Considering Quality Decisions*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang unik karena karakteristik **perishability** (mudah rusak), **shelf-life pendek** (umur simpan 5–21 hari tergantung jenis olahan), dan **cold-chain dependency** (rantan pada suhu 2–4°C). Berdasarkan Lead Researchers (2023) yang dipublikasikan di *Industrial Engineering and Innovation Management*, desain jaringan rantai pasok susu memerlukan keseimbangan simultan antara **minimisasi biaya logistik**, **maksimisasi kesegaran produk** (*freshness*), dan **pengurangan emisi karbon** dari armada refrigerated trucks. DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509) menunjukkan bahwa pendekatan mono-objektif tradisional (misalnya biaya saja) gagal menangkap trade-off struktural ini.

Urgensi operasional diperkuat oleh tiga fenomena industri riil: (1) **fluktuasi musiman permintaan** susu mencapai 30–45% antara musim hujan dan kemarau di pasar Asia Tenggara, (2) **fragmentasi peternakan sapi perah** yang menghasilkan ribuan titik supplier dengan kapasitas kecil (≤500 liter/hari), dan (3) **regulasi food safety** yang semakin ketat (SNI 01-3951-1995, Codex Alimentarius). Kerangka Lead Researchers et al. (2023) menjawab kebutuhan ini dengan mengintegrasikan model mixed-integer programming (MIP) multi-periode yang diselesaikan melalui **Benders Decomposition** untuk tractabilitas komputasional.

Studi komplementer dari Yanzi Zhang, Hongzhen Li, dan Yaping Ren (2024) yang tersedia di SSRN dengan DOI [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437) memperluas metodologi serupa ke **rantai pasok balik** (*reverse supply chain*) dengan keputusan berbasis kualitas, menunjukkan bahwa kerangka Benders memiliki generalitas tinggi. Modul 2592 akan membedah formulasi matematis, implementasi algoritmik, dan aplikasi kuantitatif dari kedua perspektif ini.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Jaringan Tiga Eselon

Jaringan rantai pasok susu dimodelkan sebagai graf tripartit $G = (I \cup J \cup K, E)$ di mana:
- $I$ = himpunan **pabrik pengolahan** (processing plants), $|I| = p$
- $J$ = himpunan **pusat distribusi** (distribution centers), $|J| = q$
- $K$ = himpunan **pelanggan/ritel**, $|K| = r$
- $E$ = himpunan arc yang memungkinkan alur barang

Indeks waktu $t \in \{1, 2, \ldots, T\}$ merepresentasikan horizon perencanaan diskret (misalnya hari atau minggu).

### 2.2 Parameter dan Variabel Keputusan

**Parameter:**
- $d_{kt}$: permintaan pelanggan $k$ pada periode $t$ (liter)
- $c^f_i$ : biaya tetap pembukaan pabrik $i$ (Rp/fasilitas)
- $c^h_j$ : biaya tetap pembukaan DC $j$ (Rp/fasilitas)
- $c^{tr}_{ijk}$ : biaya transportasi per unit dari $i$ melalui $j$ ke $k$ (Rp/liter)
- $\alpha_i$ : kapasitas produksi pabrik $i$ (liter/hari)
- $\beta_j$ : kapasitas penanganan DC $j$ (liter/hari)
- $\theta$ : laju degradasi kesegaran per periode (fraksi/hari)
- $\gamma$ : faktor emisi CO₂ per liter-km (kg CO₂/liter·km)

**Variabel keputusan:**
- $y_i \in \{0,1\}$: 1 jika pabrik $i$ dibuka
- $z_j \in \{0,1\}$: 1 jika DC $j$ dibuka
- $x_{ijkt} \geq 0$ : volume susu (liter) yang dikirim dari $i \to j \to k$ pada periode $t$
- $f_{kt} \in [0,1]$ : indeks kesegaran produk yang diterima pelanggan $k$ pada periode $t$
- $e_{total}$ : total emisi karbon (kg CO₂)

### 2.3 Formulasi MIP Multi-Objektif

Mengikuti kerangka Lead Researchers et al. (2023), masalah dinyatakan sebagai **vektor objektif** $\min \{Z_1, -Z_2, Z_3\}$:

$$
Z_1 = \sum_{i \in I} c^f_i y_i + \sum_{j \in J} c^h_j z_j + \sum_{i,j,k,t} c^{tr}_{ijk} x_{ijkt} \tag{1}
$$

$$
Z_2 = \sum_{k \in K, t \in T} w_{kt} \cdot f_{kt}, \quad \text{dimana} \quad f_{kt} = 1 - \theta \cdot \tau_{ijkt} \tag{2}
$$

$$
Z_3 = \gamma \sum_{i,j,k,t} \ell_{ijk} \cdot x_{ijkt} \tag{3}
$$

di mana $w_{kt}$ adalah bobot prioritas pelanggan dan $\tau_{ijkt}$ adalah waktu tempuh (hari) dari $i$ ke $k$ melalui $j$.

**Kendala utama:**

$$
\sum_{j,k} x_{ijkt} \leq \alpha_i y_i, \quad \forall i, t \tag{4}
$$

$$
\sum_{i,k} x_{ijkt} \leq \beta_j z_j, \quad \forall j, t \tag{5}
$$

$$
\sum_{i,j} x_{ijkt} \geq d_{kt}, \quad \forall k, t \tag{6}
$$

$$
x_{ijkt} \geq 0, \quad y_i, z_j \in \{0,1\} \tag{7}
$$

### 2.4 Dekomposisi Benders

Benders (1962) mempartisi masalah menjadi:

**(a) Master Problem (MP)** — hanya variabel lokasi:

$$
\min_{y,z,\eta} \sum_i c^f_i y_i + \sum_j c^h_j z_j + \eta \tag{8}
$$

$$
\text{s.t.} \quad \eta \geq \pi^T \cdot (b - By - Dz) \quad \text{(Benders cuts)} \tag{9}
$$

**(b) Subproblem (SP)** — operasional, untuk $y^*, z^*$ tetap:

$$
\min_{x \geq 0} \sum_{i,j,k,t} c^{tr}_{ijk} x_{ijkt} \tag{10}
$$

$$
\text{s.t.} \quad Ax \geq b - By^* - Dz^* \tag{11}
$$

Dual SP menghasilkan *optimality cut* (jika SP feasibel dan bounded) atau *feasibility cut* (jika infeasibel). Iterasi berlanjut sampai $\eta \geq Z^{lower}$ dan gap $\leq \epsilon = 0{,}5\%$.

Untuk multi-objektif, Lead Researchers et al. (2023) menggunakan **$\varepsilon$-constraint method** dengan memasukkan dua objektif sebagai kendala:

$$
Z_2 \geq \varepsilon_2^{(p)}, \quad Z_3 \leq \varepsilon_3^{(p)} \tag{12}
$$

menghasilkan **Pareto front** dengan $p = 1, \ldots, P$ titik non-dominated.

## 3. Metodologi Rekayasa & SOP Implementasi

Prosedur operasional standar untuk mengimplementasikan kerangka Benders pada perusahaan susu mengikuti diagram alur berikut:

```
┌─────────────────────────────────────┐
│ TAHAP 1: Akuisisi Data Historis     │
│ - Permintaan 24 bulan (SKU, wilayah)│
│ - Kapasitas & biaya fasilitas      │
│ - Matriks jarak & waktu tempuh      │
└──────────────┬──────────────────────┘
               ▼
┌─────────────────────────────────────┐
│ TAHAP 2: Kalibrasi Parameter        │
│ - Estimasi θ dari data expiry       │
│ - Validasi α_i, β_j dengan HC      │
│ - Benchmark c^tr dengan shipping    │
└──────────────┬──────────────────────┘
               ▼
┌─────────────────────────────────────┐
│ TAHAP 3: Formulasi MIP dalam        │
│ Python (Pyomo) atau AMPL/GAMS      │
└──────────────┬──────────────────────┘
               ▼
┌─────────────────────────────────────┐
│ TAHAP 4: Generasi Pareto Front     │
│ ε-constraint grid (10–20 titik)     │
└──────────────┬──────────────────────┘
               ▼
┌─────────────────────────────────────┐
│ TAHAP 5: Iterasi Benders           │
│ MP (MILP) ↔ SP (LP)               │
│ - Toleransi: ε=0.5%, max 200 iter  │
└──────────────┬──────────────────────┘
               ▼
┌─────────────────────────────────────┐
│ TAHAP 6: Decision Support           │
│ Visualisasi Pareto & sensitivity    │
└─────────────────────────────────────┘
```

**Langkah teknis kritis:**

1. **Inisialisasi Master**: Solve relaxed MP (tanpa Benders cuts) untuk mendapatkan $y^{(0)}, z^{(0)}$ dan lower bound $LB^{(0)}$.
2. **Solve Subproblem**: Dengan $(y^{(0)}, z^{(0)})$ tetap, solve SP sebagai LP untuk mendapat $x^{(0)}$ dan dual $(\pi^{(0)})$.
3. **Generate Benders Cut**: Tambahkan $\eta \geq \pi^{(0)T}(b - By - Dz)$ ke MP.
4. **Update Bound**: $UB = \sum c^f_i y^{(0)} + \sum c^h_j z^{(0)} + \text{SP obj}$.
5. **Konvergensi**: Stop jika $|UB - LB|/UB \leq 0{,}5\%$.

Zhang, Li, dan Ren (2024) menambahkan **quality-based cuts** untuk reverse supply chain dengan variabel diskret tingkat kualitas $q \in \{A, B, C\}$ (remanufacturable, repairable, recyclable). DOI: [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Kasus: PT Susu Nusantara (Hipotetis)

Studi kasus disusun untuk koperasi susu di Jawa Timur dengan parameter riil bers.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
