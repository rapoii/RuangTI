# 1648 — Kerangka Multi-Objektif untuk Jaringan Rantai Pasok Produk Susu dengan Dekomposisi Benders

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Perancangan Jaringan Rantai Pasok Produk Susu Multi-Objektif Menggunakan Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition*. *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Benders Decomposition for Network Design and Operations in a Reverse Supply Chain Considering Quality Decisions*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang sangat kompleks pada dekade ini, terutama terkait dengan karakteristik intrinsik produk yang memiliki *shelf-life* pendek, memerlukan rantai dingin (*cold chain*) yang tidak terputus, serta menuntut jaminan keamanan pangan (food safety) yang ketat. Berdasarkan kerangka konseptual yang dibangun oleh Lead Researchers (2023) dalam jurnal *Industrial Engineering and Innovation Management*, jaringan rantai pasok susu harus menyeimbangkan empat pilar keputusan secara simultan: lokasi fasilitas pengolahan, kapasitas produksi, alokasi distribusi, dan perencanaan inventaris dengan mempertimbangkan variabilitas permintaan musiman (DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)). Permintaan susu segar di tingkat ritel menunjukkan volatilitas tinggi karena faktor musiman (peak demand di musim panas, penurunan konsumsi di bulan tertentu), sementara tingkat kerusakan (*spoilage rate*) berkisar 2–8% per hari tergantung pada suhu penyimpanan dan sanitasi armada distribusi.

Urgensi ekonomi dari optimalisasi jaringan ini semakin nyata ketika mempertimbangkan bahwa biaya logistik dapat mencapai 25–35% dari total biaya operasional perusahaan dairy, dan inefisiensi alokasi armada refrigerated truck dapat meningkatkan *food waste* hingga 15%. Secara teknis, permasalahan ini merupakan kombinasi dari *mixed-integer linear programming* (MILP) berskala besar dengan dimensi stokastik, sehingga penyelesaian langsung menggunakan solver komersial seperti CPLEX atau Gurobi menjadi tidak efisien secara komputasional ketika diterapkan pada jaringan dengan lebih dari 50 node dan 200+ variabel keputusan. Inilah celah riset yang diisi oleh Lead Researchers (2023) melalui formulasi *Benders Decomposition* untuk memisahkan keputusan strategis (lokasi fasilitas, kapasitas) dari keputusan operasional (aliran produk), sehingga computational burden berkurang secara eksponensial.

Komplementer dengan hal tersebut, Zhang, Li, dan Ren (2024) dalam paper *Benders Decomposition for Network Design and Operations in a Reverse Supply Chain Considering Quality Decisions* (DOI: [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)) memperluas cakupan dengan memasukkan dimensi *reverse logistics* dan keputusan kualitas (*quality grading*), di mana produk yang dikembalikan (*returned dairy products*) dapat di-*reprocess* berdasarkan grade kualitasnya (Grade A untuk konsumsi manusia, Grade B untuk produk olahan, Grade C untuk disposal). Pendekatan ini mengindikasikan bahwa optimalisasi jaringan dairy modern tidak lagi bersifat *forward-only*, melainkan harus mengintegrasikan loop reverse supply chain yang semakin relevan dengan regulasi ekonomi sirkular dan target *zero waste*.

## 2. Landasan Teori & Formulasi Matematis

Formulasi matematis dari kerangka multi-objektif yang dikembangkan oleh Lead Researchers (2023) mengikuti arsitektur *Benders Decomposition* klasik yang diperkenalkan oleh Jacques F. Benders (1962), dengan modifikasi untuk menangani multi-objective programming. Model lengkap (*full model*) terlebih dahulu dibangun untuk kemudian didekomposisi menjadi dua subproblem: *master problem* (MP) yang menangani variabel biner lokasi-kapasitas, dan *subproblem* (SP) yang menangani variabel kontinu aliran produk.

### 2.1 Notasi Himpunan dan Parameter

- $I$: himpunan fasilitas peternakan (farm supplier), $|I| = m$
- $J$: himpunan pabrik pengolahan (processing plant), $|J| = n$
- $K$: himpunan pusat distribusi (distribution center), $|K| = p$
- $L$: himpunan zona permintaan (demand zone), $|L| = q$
- $T$: himpunan periode perencanaan (planning period), $|T| = \tau$

**Parameter:**
- $d_{lt}$: permintaan produk susu di zona $l$ pada periode $t$ (liter)
- $c_{ij}$: biaya transportasi per liter dari farm $i$ ke plant $j$ (Rp/liter)
- $f_j$: biaya tetap pembukaan plant $j$ (Rp)
- $g_k$: biaya tetap pembukaan DC $k$ (Rp)
- $\alpha_{ij}$: kapasitas maksimum pengolahan plant $j$ (liter/hari)
- $\beta_k$: kapasitas penyimpanan DC $k$ (liter)
- $\rho$: spoilage rate produk selama distribusi (fraksi)

### 2.2 Variabel Keputusan

- $y_j \in \{0,1\}$: variabel biner, 1 jika plant $j$ dibuka
- $z_k \in \{0,1\}$: variabel biner, 1 jika DC $k$ dibuka
- $x_{ij}$: alokasi susu mentah dari farm $i$ ke plant $j$ (liter)
- $w_{jkl}$: alokasi produk olahan dari plant $j$ melalui DC $k$ ke zona $l$ (liter)

### 2.3 Fungsi Tujuan Multi-Objektif

Lead Researchers (2023) merumuskan tiga fungsi tujuan yang diminimalkan secara simultan menggunakan pendekatan *weighted sum scalarization* atau $\epsilon$-constraint method:

$$\min Z_1 = \sum_{j \in J} f_j y_j + \sum_{k \in K} g_k z_k + \sum_{i \in I} \sum_{j \in J} c_{ij} x_{ij} + \sum_{j \in J} \sum_{k \in K} \sum_{l \in L} h_{jkl} w_{jkl}$$

(Tujuan 1: minimasi total biaya tetap dan variabel)

$$\min Z_2 = \sum_{t \in T} \sum_{l \in L} \left[ \sum_{j \in J} \sum_{k \in K} \theta_{jkl} \cdot (1 - \rho)^{\tau_{jkl}} \cdot w_{jkl} \right]$$

(Tujuan 2: minimasi tingkat kerusakan produk di sepanjang cold chain)

$$\min Z_3 = \sum_{i \in I} \sum_{j \in J} \eta_{ij} \cdot CO_2^{ij} \cdot x_{ij}$$

(Tujuan 3: minimasi jejak karbon dari emensi armada运输)

### 2.4 Kendala (Constraints)

**Kendala kapasitas plant:**
$$\sum_{i \in I} x_{ij} \leq \alpha_j y_j, \quad \forall j \in J$$

**Kendala kapasitas DC:**
$$\sum_{j \in J} \sum_{l \in L} w_{jkl} \leq \beta_k z_k, \quad \forall k \in K$$

**Kendala keseimbangan aliran (flow balance):**
$$\sum_{i \in I} x_{ij} = \sigma \sum_{k \in K} \sum_{l \in L} w_{jkl}, \quad \forall j \in J$$

di mana $\sigma$ adalah rasio konversi susu mentah ke produk jadi (misalnya 1 liter susu → 0.95 liter pasteurized milk).

**Kendala pemenuhan permintaan:**
$$\sum_{j \in J} \sum_{k \in K} (1-\rho)^{\tau_{jkl}} w_{jkl} \geq d_{lt}, \quad \forall l \in L, t \in T$$

### 2.5 Arsitektur Benders Decomposition

Master problem (MP) pada iterasi ke-$\nu$ memuat variabel biner $y_j, z_k$ dan kendala cut:

$$\min \sum_{j \in J} f_j y_j + \sum_{k \in K} g_k z_k + \theta$$

subject to:
$$y_j \in \{0,1\}, \quad z_k \in \{0,1\}$$

$$\theta \geq \pi^{T}_{\nu} (d - F \cdot [y, z]^T) \quad \forall \nu \in \{1, 2, ..., iter\}$$

Subproblem (SP) untuk fixed $\bar{y}, \bar{z}$:

$$\min \sum_{i,j} c_{ij} x_{ij} + \sum_{j,k,l} h_{jkl} w_{jkl}$$

subject to seluruh kendala kontinu di atas. Dual dari SP menghasilkan multipliers $\pi$ yang menjadi *Benders optimality cut* bagi MP.

Lead Researchers (2023) melaporkan bahwa pendekatan ini menghasilkan *optimality gap* kurang dari 0.5% dengan reduksi waktu komputasi hingga 78% dibanding monolithic MILP untuk instans dengan 80 farm, 15 plant, 25 DC, dan 60 demand zone.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi metodologi ini di industri dairy mengikuti SOP delapan tahap yang diturunkan dari Lead Researchers (2023) dan diperkuat oleh kerangka reverse supply chain dari Zhang, Li, dan Ren (2024):

**Tahap 1 — Karakterisasi Jaringan & Pengumpulan Data Historis**
Insinyur industri melakukan *data harvesting* atas data historis permintaan 24 bulan, profil spoilage, rute distribusi existing, dan biaya operasional. Data dinormalisasi ke dalam format periodisasi harian/mingguan.

**Tahap 2 — Estimasi Parameter Stokastik**
Permintaan $d_{lt}$ dan spoilage rate $\rho$ dimodelkan sebagai random variable dengan distribusi empiris atau fit-to-distribution (Weibull untuk shelf-life, Normal untuk demand deviation).

**Tahap 3 — Formulasi Model Matematis**
Model MILP multi-objektif dibangun menggunakan bahasa pemodelan (AMPL, GAMS, atau Pyomo) dengan parameter aktual industri.

**Tahap 4 — Konstruksi Master Problem Awal**
MP awal berisi variabel biner lokasi-fasilitas dengan fungsi tujuan *relaxed* (lower bound).

**Tahap 5 — Iterasi Benders**
Solver primal-dual (misal CPLEX 22.1) menyelesaikan SP, menghasilkan *optimality cut* yang ditambahkan ke MP. Iterasi berlanjut hingga gap antara upper bound (feasible solution) dan lower bound (MP objective) kurang dari $\epsilon = 0.5\%$.

**Tahap 6 — Validasi Solusi**
Solusi akhir divalidasi menggunakan simulasi discrete-event (Arena atau AnyLogic) selama horizon 90 hari untuk menguji robustnes terhadap skenario demand shock.

**Tahap 7 — Implementasi & Pilot Run**
Pada industri skala besar, pilot dijalankan di 1 region selama 4 minggu sebelum *full-scale deployment*.

**Tahap 8 — Reverse Loop Integration**
Mengikuti kerangka Zhang et al. (2024), kualitas produk jadi di-grade (A/B/C), produk Grade B/C dari return atau near-expiry dialokasikan ke secondary market atau recycling facility, yang kemudian dimasukkan sebagai node tambahan dalam iterasi Benders berikutnya.

Diagram alir logikanya adalah sebagai berikut:

```
[START] → [Data Collection] → [Stochastic Parameter Fitting]
    ↓
[Formulate MILP Full Model] → [Decompose ke MP & SP]
    ↓
[Initialize MP with trivial cuts] → [Solve MP → get (y*, z*)]
    ↓
[Solve SP with fixed (y*, z*)] → [Get dual π* & obj value]
    ↓
[Generate Benders Cut] → [Add to MP]
    ↓
[Check Gap ≤ ε?] — NO → [Iterate] → YES
    ↓
[Validate via Simulation]
    ↓
[Pilot Implementation] → [Scale-Up] → [END]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk mendemonstrasikan kekuatan metodologis ini, disusun studi kasus hipotetis-realistis berdasarkan jaringan dairy di Indonesia dengan parameter sebagai berikut:

**Tabel 1: Parameter Input Industri**

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Jumlah farm ($m$) | 20 | node |
| Jumlah plant ($n$) | 5 | node |
| Jumlah DC ($p$) | 8 | node |
| Demand zone ($q$) | 15 | zona |
| $f_j$ (biaya tetap plant) | 2.500.000.000 | Rp |
| $g_k$ (biaya tetap DC) | 850.000.000 | Rp |
| $c_{ij}$ (transport farm→plant) | 850 | Rp/liter |
| $d_{lt}$ (demand rata-rata) | 12.000 | liter/hari |
| $\alpha_j$ (kapasitas plant) | 80.000 | liter/hari |
| $\beta_k$ (kapasitas DC) | 35.000 | liter |
| $\rho$ (spoilage rate) | 0.04 | fraksi/hari |
| $\sigma$ (conversion ratio) | 0.95 | – |

### Langkah Perhitungan

**Langkah 1: Penyelesaian Subproblem (SP) iterasi 1**
Asumsikan solver membuka semua 5 plant dan 8 DC (initial feasible guess). SP diselesaikan dengan biaya transportasi sebagai berikut:

Total biaya variabel SP iterasi 1:

$$Z_{SP,1} = \sum_{i,j,k,l} c_{ij} x_{ij}^* + h_{jkl} w_{jkl}^*$$

Dengan asumsi jarak rata-rata farm→plant = 45 km dan plant→DC = 120 km, maka:
- Biaya farm→plant = 850 × 240.000 liter/hari = Rp 204.000.000/hari
- Biaya plant→DC→retail = 1.250 × 228.000 liter = Rp 285.000.000