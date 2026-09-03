# 2640 — Rantai Pasok Produk Susu Multi-Objektif dengan Dekomposisi Benders: Kerangka Optimasi Jaringan, Kualitas, dan Keberlanjutan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*, 6(5). DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *SSRN Electronic Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu merupakan salah satu sektor dengan karakteristik operasional paling menantang dalam disiplin Teknik Industri. Produk susu seperti susu pasteurisasi, yogurt, keju, dan mentega memiliki *shelf life* yang sangat pendek—umumnya berkisar antara 5 hingga 21 hari untuk susu segar pada suhu 4°C—sehingga setiap keputusan dalam jejaring distribusi harus memperhitungkan degradasi kualitas seiring waktu dan jarak. Lead Researchers (2023) dalam jurnal *Industrial Engineering and Innovation Management* (DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)) menyoroti bahwa jaringan rantai pasok susu modern menghadapi tiga tekanan simultan: (1) fluktuasi permintaan musiman yang tinggi, (2) tekanan regulasi ketat terkait keamanan pangan (Codex Alimentarius, SNI 01-3951-1995), dan (3) tuntutan konsumen akan produk yang lebih segar dan ramah lingkungan. Studi ini mengusulkan kerangka *multi-objective mixed-integer linear programming* (MOMILP) yang diselesaikan dengan *Benders Decomposition* untuk menyeimbangkan biaya total, emisi CO₂, dan tingkat pemborosan produk karena kadaluwarsa.

Dalam konteks global, Food and Agriculture Organization (FAO) melaporkan bahwa sekitar 14% produk pangan dunia terbuang antara panen dan ritel; untuk produk susu yang mudah rusak (*perishable*), angka ini bisa melebihi 20%. Kerangka Lead Researchers (2023) menjawab permasalahan ini dengan mengintegrasikan variabel keputusan lokasi fasilitas, alokasi aliran, dan tingkat inspeksi kualitas dalam satu model optimasi terpadu. Pelengkap penting datang dari Zhang, Li, dan Ren (2024) dengan DOI [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437) yang menunjukkan bahwa memasukkan keputusan kualitas ke dalam struktur *Benders* secara signifikan mengurangi subproblem *infeasibility* dan meningkatkan konvergensi dual cut. Kombinasi kedua literatur ini memberikan fondasi metodologis yang kuat bagi perekayasa industri untuk merancang jaringan susu yang resilien dan berkelanjutan.

Urgensi operasional dari penelitian ini terletak pada kenyataan bahwa keputusan lokasi fasilitas susu (pabrik pengolahan, gudang berpendingin, pusat distribusi) bersifat *tactical-strategic* dengan payback period 10–25 tahun, sementara keputusan operasional seperti jumlah produksi, rute pengiriman, dan tingkat inspeksi bersifat *short-term* mingguan. Struktur dua-level seperti ini merupakan domain di mana *Benders Decomposition* menunjukkan keunggulan komputasionalnya, terutama ketika jumlah variabel biner lokasi melebihi ratusan alternatif kandidat.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Notasi Himpunan dan Parameter

Misalkan:
- $I$ = himpunan kandidat pabrik pengolahan (*processing plant*), $|I| = p$
- $J$ = himpunan kandidat gudang berpendingin (*cold storage*), $|J| = q$
- $K$ = himpunan zona permintaan (*demand zone*), $|K| = r$
- $L$ = himpunan periode waktu (misal: mingguan), $|L| = T$

Parameter:
- $f_i$ = biaya tetap buka pabrik $i$ (Rp/unit/tahun)
- $g_j$ = biaya tetap buka gudang $j$ (Rp/unit/tahun)
- $c_{ij}$ = biaya transportasi per unit dari $i$ ke $j$
- $c_{jk}^{\ell}$ = biaya transportasi per unit dari $j$ ke $k$ pada periode $\ell$
- $h_j$ = biaya inventaris per unit di gudang $j$ per periode
- $d_k^{\ell}$ = permintaan deterministik di zona $k$ pada periode $\ell$
- $Cap_i$ = kapasitas produksi pabrik $i$
- $Cap_j$ = kapasitas gudang $j$
- $\alpha$ = emisi CO₂ per unit-km (ton CO₂eq)
- $dist_{ij}, dist_{jk}$ = jarak antara node

Variabel keputusan:
- $x_i \in \{0,1\}$ = 1 jika pabrik $i$ dibuka
- $y_j \in \{0,1\}$ = 1 jika gudang $j$ dibuka
- $q_{ij}^{\ell} \geq 0$ = jumlah unit yang dikirim $i \to j$ pada periode $\ell$
- $w_{jk}^{\ell} \geq 0$ = jumlah unit yang dikirim $j \to k$ pada periode $\ell$
- $v_j^{\ell}$ = level inventaris di gudang $j$ akhir periode $\ell$
- $s^{\ell}$ = jumlah unit terbuang karena kadaluwarsa pada periode $\ell$

### 2.2 Fungsi Objektif Multi-Objektif

Mengikuti kerangka Lead Researchers (2023), tiga tujuan yang diminimalkan adalah:

**Objektif 1: Biaya Total (Z₁)**

$$\min Z_1 = \sum_{i \in I} f_i x_i + \sum_{j \in J} g_j y_j + \sum_{\ell \in L} \left( \sum_{i \in I} \sum_{j \in J} c_{ij} q_{ij}^{\ell} + \sum_{j \in J} \sum_{k \in K} c_{jk}^{\ell} w_{jk}^{\ell} + \sum_{j \in J} h_j v_j^{\ell} + \rho \cdot s^{\ell} \right)$$

di mana $\rho$ adalah biaya kerugian per unit produk kadaluwarsa.

**Objektif 2: Emisi CO₂ (Z₂)**

$$\min Z_2 = \alpha \sum_{\ell \in L} \left( \sum_{i,j} dist_{ij} \cdot q_{ij}^{\ell} + \sum_{j,k} dist_{jk} \cdot w_{jk}^{\ell} \right)$$

**Objektif 3: Tingkat Pemborosan (Z₃)**

$$\min Z_3 = \frac{\sum_{\ell \in L} s^{\ell}}{\sum_{\ell \in L} \sum_{k \in K} d_k^{\ell}}$$

Karena ketiga objektif berkonflik, digunakan pendekatan *augmented ε-constraint* (Mavrotas, 2009) atau *fuzzy compromise programming* untuk mendapatkan himpunan Pareto-optimal.

### 2.3 Kendala

$$\sum_{j \in J} q_{ij}^{\ell} \leq Cap_i \cdot x_i, \quad \forall i, \ell \quad \text{(kapasitas pabrik)}$$

$$\sum_{i \in I} q_{ij}^{\ell} = v_j^{\ell} - v_j^{\ell-1} + \sum_{k \in K} w_{jk}^{\ell}, \quad \forall j, \ell \quad \text{(keseimbangan aliran)}$$

$$\sum_{i \in I} q_{ij}^{\ell} \leq Cap_j \cdot y_j, \quad \forall j, \ell \quad \text{(kapasitas gudang)}$$

$$\sum_{j \in J} w_{jk}^{\ell} = d_k^{\ell} - s_k^{\ell}, \quad \forall k, \ell \quad \text{(pemenuhan permintaan)}$$

$$s_k^{\ell} \leq d_k^{\ell}, \quad \sum_k s_k^{\ell} = s^{\ell} \quad \text{(variabel pemborosan)}$$

$$x_i, y_j \in \{0,1\}, \quad q_{ij}^{\ell}, w_{jk}^{\ell}, v_j^{\ell}, s^{\ell} \geq 0$$

### 2.4 Struktur Benders Decomposition

*Benders Decomposition* (Benders, 1962) mempartisi masalah menjadi:

**Master Problem (MP)** — keputusan lokasi:

$$\min_{x,y} \sum_i f_i x_i + \sum_j g_j y_j + \eta$$

subject to:
$$\eta \geq \theta \quad \text{(variabel epigraf)}$$

dengan tambahan *optimality cut* dan *feasibility cut* yang dibangkitkan iteratif:

$$\eta \geq \sum_{\ell} \pi^{\ell,T} (Cap_i x_i) + \text{const} \quad \text{(optimality cut)}$$

**Subproblem (SP)** — keputusan operasional dengan lokasi tetap:

Diberikan $(\hat{x}, \hat{y})$ dari MP, selesaikan subproblem LP untuk mendapatkan dual $\pi$. Iterasi berlanjut hingga gap optimalitas $|\eta - Z_{SP}| < \epsilon$ dengan toleransi $\epsilon = 10^{-4}$. Zhang et al. (2024, DOI: [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)) mengusulkan penambahan *quality cut* yang memperhitungkan keputusan inspeksi kualitas, menghasilkan konvergensi rata-rata 23% lebih cepat dibanding *Benders* klasik.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri mengikuti tahapan sistematis sebagai berikut:

**Tahap 1 — Akuisisi Data (Minggu 1-3):**
- Kumpulkan data permintaan historis 24 bulan, kapasitas fasilitas existing, biaya tetap dan variabel dari laporan keuangan.
- Lakukan *Geographic Information System* (GIS) mapping untuk jarak aktual.
- Kalibrasi parameter emisi CO₂ menggunakan DEFRA 2023 conversion factors (0,0527 kg CO₂eq per ton-km untuk refrigerated truck).

**Tahap 2 — Formulasi Model (Minggu 4-5):**
- Bangun model MOMILP dalam GAMS/AMPL/Pyomo.
- Validasi struktur dengan *unit test* pada instans kecil.

**Tahap 3 — Kalibrasi Bobot Multi-Objektif (Minggu 6):**
- Wawancara stakeholders (manajer operasional, komite sustainability, regulator).
- Tentukan *trade-off weight* $w_1, w_2, w_3$ sedemikian hingga $w_1 + w_2 + w_3 = 1$ menggunakan metode AHP (Analytic Hierarchy Process).

**Tahap 4 — Penyelesaian dengan Benders (Minggu 7-8):**
- Inisialisasi MP dengan relaxed constraints.
- Iterasi: solve MP → solve SP → generate cuts → update.
- Catat wall-clock time dan iterasi hingga konvergensi.

**Tahap 5 — Validasi dan Implementasi (Minggu 9-12):**
- *Sensitivity analysis* terhadap parameter kunci.
- *Pilot run* pada satu zona permintaan.
- Standar acuan: ISO 22000:2018 (Food Safety Management), ISO 14064-1 (GHG Inventory), serta SNI ISO 2859-1 untuk sampling kualitas.

**Diagram Alir Proses:**
```
┌────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│ Data Historis  │───→│ Formulasi MOMILP │───→│  Benders Master  │
│  Permintaan    │    │  (3 objektif)    │    │  Problem (MP)    │
└────────────────┘    └──────────────────┘    └────────┬─────────┘
                                                       │
                                                       ▼
┌────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│  Pareto Front  │←───│  ε-constraint /  │←───│  Subproblem (SP) │
│   Reporting    │    │  Weighted Sum    │    │  + Quality Cuts  │
└────────────────┘    └──────────────────┘    └──────────────────┘
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Instans