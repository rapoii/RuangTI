# 2416 — Optimisasi Multi-Objektif untuk Jaringan Rantai Pasok Produk Susu Menggunakan Benders Decomposition

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*, Vol. 6, Issue 5. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Benders Decomposition for Network Design and Operations in a Reverse Supply Chain Considering Quality Decisions*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang unik karena karakteristik bio-kimiawi produk yang cepat rusak (*perishable*) dan memiliki *shelf-life* pendek, umumnya 7–21 hari untuk susu pasteurisasi pada suhu 2–4°C. Kerusakan kualitas sepanjang rantai pasok — yang sering disebut sebagai *quality degradation function* — menyebabkan kerugian ekonomi masif. Menurut FAO (2023), sekitar 14% produk susu global terbuang sebelum dikonsumsi, dengan nilai ekonomi melampaui USD 100 miliar per tahun. Dalam konteks ini, Lead Researchers (2023) dalam *Industrial Engineering and Innovation Management* mempublikasikan kerangka kerja multi-objektif yang secara eksplisit memodelkan jaringan rantai pasok produk susu dengan mempertimbangkan tiga aspek simultan: biaya total jaringan, emisi karbon dari operasional rantai dingin, dan tingkat kesegaran produk yang diterima konsumen (*product freshness level*).

Urgensi riset ini diperkuat oleh fakta bahwa jaringan rantai pasok susu memiliki struktur multi-echelon yang kompleks: dari peternakan (*farms*), tangki penyimpanan berpendingin (*bulk cooling tanks*), fasilitas pengolahan (*processing plants*), pusat distribusi (*distribution centers*), hingga titik ritel. Setiap echelon memerlukan keputusan lokasi, kapasitas, dan alokasi aliran (*flow allocation*) yang saling bergantung. Kapasitas produksi susu juga bersifat musiman (*seasonal supply variability*) dengan puncak produksi 8–15% di atas rata-rata pada musim hujan, sehingga memerlukan model yang robust terhadap ketidakpastian permintaan.

Yanzi Zhang, Hongzhen Li, dan Yaping Ren (2024) melalui DOI [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437) memberikan kontribusi paralel untuk rantai pasok balik (*reverse supply chain*), di mana keputusan kualitas (*quality decisions*) menentukan apakah produk jadi dapat di-remanufaktur, diperbaiki, didaur ulang, atau dibuang. Sinergi antara kedua paper menunjukkan bahwa dekomposisi Benders bukan sekadar teknik optimisasi, melainkan paradigma arsitektural yang dapat menangani masalah berskala industri dengan jutaan variabel keputusan secara komputasional efisien.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Model Multi-Objektif

Model Lead Researchers (2023) memformulasikan masalah sebagai Mixed-Integer Linear Programming (MILP) multi-objektif dengan tiga fungsi tujuan yang dioptimisasi secara simultan menggunakan metode $\epsilon$-constraint atau *weighted sum* ternormalisasi. Formulasi umumnya adalah:

$$\min \; Z = w_1 Z_1 + w_2 Z_2 - w_3 Z_3$$

dengan bobot $w_1 + w_2 + w_3 = 1$, di mana:
- $Z_1$ = total biaya jaringan (CAPEX + OPEX)
- $Z_2$ = emisi CO₂ ekuivalen (kg CO₂eq)
- $Z_3$ = indeks kesegaran rata-rata produk sampai konsumen

### 2.2 Himpunan, Parameter, dan Variabel Keputusan

**Himpunan:**
- $i \in I$ : indeks peternakan (*farms*)
- $j \in J$ : indeks fasilitas pengolahan (*plants*)
- $k \in K$ : indeks pusat distribusi (*DCs*)
- $l \in L$ : indeks zona permintaan (*demand zones*)

**Parameter kunci:**
- $c^{open}_j$ : biaya investasi membuka fasilitas $j$
- $c^{proc}_{ij}$ : biaya transportasi susu mentah dari $i$ ke $j$ (Rp/liter/km)
- $c^{dist}_{kl}$ : biaya distribusi dari $k$ ke $l$
- $Q_i$ : kapasitas produksi musiman peternakan $i$ (liter/hari)
- $Cap_j$ : kapasitas pengolahan harian fasilitas $j$
- $D_l$ : permintaan harian zona $l$
- $\alpha$ : koefisien degradasi kualitas (L/(hari·km))
- $\theta_{kl}$ : suhu rata-rata rantai distribusi
- $EF$ : faktor emisi refrigerant & listrik (kg CO₂eq/kWh)

**Variabel keputusan:**
- $y_j \in \{0,1\}$ : 1 jika fasilitas $j$ dibuka
- $x_{ij} \geq 0$ : aliran susu mentah dari $i$ ke $j$ (liter/hari)
- $z_{kl} \geq 0$ : aliran produk jadi dari $k$ ke $l$
- $f_{kl} \in [0,1]$ : indeks kesegaran produk saat sampai konsumen

### 2.3 Fungsi Tujuan Detail

**Objektif 1 — Biaya Total:**
$$Z_1 = \sum_{j \in J} c^{open}_j \, y_j + \sum_{i \in I}\sum_{j \in J} c^{proc}_{ij} x_{ij} + \sum_{k \in K}\sum_{l \in L} c^{dist}_{kl} z_{kl}$$

**Objektif 2 — Emisi Karbon:**
$$Z_2 = \sum_{k \in K}\sum_{l \in L} EF \cdot d_{kl} \cdot z_{kl} \cdot \beta_{cold}$$

di mana $\beta_{cold}$ adalah faktor emisi spesifik冷藏 (cold chain) ≈ 0.85 kg CO₂eq/(liter·100 km).

**Objektif 3 — Indeks Kesegaran:**
$$Z_3 = \frac{1}{\sum_l D_l}\sum_{k \in K}\sum_{l \in L} f_{kl} \cdot D_l$$

dengan $f_{kl} = \exp(-\alpha \cdot t_{kl})$ dan $t_{kl}$ = waktu transit dari $k$ ke $l$.

### 2.4 Kendala Utama

$$\sum_{j \in J} x_{ij} \leq Q_i \quad \forall i \in I \quad \text{(kapasitas supply)}$$

$$\sum_{i \in I} x_{ij} \leq Cap_j \cdot y_j \quad \forall j \in J \quad \text{(kapasitas processing)}$$

$$\sum_{k \in K} z_{kl} = D_l \quad \forall l \in L \quad \text{(kepuasan demand)}$$

$$\sum_{l \in L} z_{kl} \leq \sum_{i \in I} x_{ik'} \cdot \eta \quad \forall k \in K$$

di mana $\eta$ adalah *yield rate* pengolahan (susu mentah → produk jadi), tipikal 0.85–0.92 untuk susu pasteurisasi.

### 2.5 Benders Decomposition — Arsitektur Dual

Benders Decomposition memisahkan MILP menjadi:

**Master Problem (MP)** — keputusan investasi strategis:
$$\min \; \sum_j c^{open}_j y_j + \theta$$
$$s.t. \quad \theta \geq \pi^T (b - By) \quad \forall \pi \in \Pi^{cuts}$$

**Subproblem (SP)** — keputusan operasional alur aliran:
$$\min \; \sum_{i,j} c^{proc}_{ij}x_{ij} + \sum_{k,l} c^{dist}_{kl}z_{kl}$$
$$s.t. \quad Ax + By = b, \quad x \geq 0$$

Dual SP menghasilkan *optimality cut* $\theta \geq \pi^T(b - By)$ yang ditambahkan ke MP secara iteratif hingga gap konvergensi $\leq \epsilon = 10^{-4}$.

Zhang, Li, dan Ren (2024) memperluas metodologi ini dengan menambahkan *quality-based cuts* yang mempertimbangkan grading kualitas produk balik ($q \in \{1,2,3,4\}$) sehingga setiap variabel kualitas menghasilkan sub-subproblem terpisah yang diselesaikan secara paralel.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alur Implementasi

Implementasi di industri mengikuti alur SOP berlapis sebagai berikut:

```
[Layer 1: Data Acquisition]
   ↓ Input historis 12 bulan produksi, demand, GPS armada
[Layer 2: Preprocessing & Kalibrasi]
   ↓ Validasi data, estimasi parameter α, η, β_cold
[Layer 3: Formulasi Model]
   ↓ Konstruksi MILP multi-objektif dalam Python/Pyomo atau GAMS
[Layer 4: Benders Loop]
   ↓ ┌─ Solve MP (CPLEX/Gurobi) ────┐
   ↓ │  └─ Get y* ──────────────────┤
   ↓ │  ┌─ Solve SP (dual) ────────┐│
   ↓ │  └─ Generate cuts → append MP││
   ↓ │  └─ Cek gap ≤ ε ?            ││
   ↓ └─ Iterasi hingga konvergen ───┘
[Layer 5: Post-Processing]
   ↓ Pareto front extraction, sensitivity analysis
[Layer 6: Implementasi & Monitoring KPI]
```

### 3.2 Prosedur Langkah demi Langkah

**Langkah 1 — Pengumpulan Data Primer:** Auditor lapangan mengambil data kapasitas tangki pendingin, jarak antar-echelon, konsumsi listrik kompresor refrigeration, dan waktu transit aktual. Standar yang digunakan: ISO 22000 untuk食品安全 dan HACCP untuk titik kritis kendali suhu.

**Langkah 2 — Estimasi Parameter Degradasi Kualitas:** Menggunakan regresi non-linear terhadap data historis:
$$\alpha = \frac{-\ln(f_{obs}/f_0)}{t_{transit}}$$

**Langkah 3 — Konfigurasi Solver:** Tuning time limit (default 3600 detik), MIP gap tolerance (0.01%), dan thread parallelism (16–32 core untuk komputasi enterprise).

**Langkah 4 — Validasi dengan Hold-Out Testing:** Pisahkan 20% data sebagai *validation set*; jika MAPE (Mean Absolute Percentage Error) ≤ 5%, model diterima untuk produksi.

**Langkah 5 — Continuous Improvement Loop:** Setiap 30 hari, parameter di-recalibrate menggunakan data operasional terbaru (*rolling horizon approach*).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Data Input Industri

Studi kasus menggunakan jaringan rantai pasok susu di Pulau Jawa dengan parameter berikut (sesuai skala yang umum diadopsi Lead Researchers, 2023):

| Parameter | Nilai |
|-----------|-------|
| Peternakan ($i$) | 5 lokasi |
| Fasilitas pengolahan ($j$) | 3 kandidat |
| Pusat distribusi ($k$) | 4 kandidat |
| Zona demand ($l$) | 6 zona metropolitan |
| Kapasitas $Q_i$ | [8000, 12000, 6500, 9500, 11000] liter/hari |
| Demand $D_l$ | [15000, 18000, 22000, 12000, 9000, 14000] liter/hari |
| Biaya investasi $c^{open}_j$ | [4.5, 5.2, 3.8] miliar Rp |
| Yield $\eta$ | 0.88 |

### 4.2 Perhitungan Step-by-Step

**Iterasi 1 — Solve MP Awal:**
Asumsikan semua $y_j = 0$, sehingga $\theta =$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
