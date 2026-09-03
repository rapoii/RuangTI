# 1504 — Rancang Bangun Jaringan Rantai Pasok Produk Susu Multi-Objektif dengan Dekomposisi Benders untuk Optimasi Biaya, Kualitas, dan Emisi Karbon

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu global menghadapi tantangan struktural yang unik karena sifat perishability (ketahanan simpan) yang pendek, kerentanan terhadap rantai dingin (*cold chain*), dan karakteristik permintaan yang musiman. Produk susu segar seperti *pasteurized milk*, yogurt, dan keju memiliki umur simpan rata-rata 7–21 hari pada suhu 2–4°C, sehingga keputusan lokasi fasilitas, kapasitas produksi, dan rute distribusi harus diselesaikan secara simultan dalam horizon perencanaan mingguan—bukan tahunan seperti pada rantai pasok barang tahan lama. Menurut Lead Researchers (2023) dalam kerangka multi-objektif yang dipublikasikan di *Industrial Engineering and Innovation Management* (DOI: [10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)), kompleksitas ini diperburuk oleh tiga konflik tujuan yang melekat: minimisasi total biaya logistik, maksimisasi tingkat kesegaran produk (*freshness level*) yang dikirim ke retailer, dan minimisasi emisi karbon dari armada refrigerated transport. Studi tersebut secara eksplisit menyatakan bahwa formulasi Mixed-Integer Linear Programming (MILP) tunggal untuk jaringan dairy berskala nasional dengan ratusan node pelanggan menjadi *computationally intractable* bagi solver branch-and-cut komersial, dengan gap optimalitas yang melebihi 5% setelah 3 jam komputasi.

Urgensi operasional semakin meningkat ketika dimasukkan keputusan *quality degradation* yang bergantung pada waktu dan suhu, sebagaimana diperkuat oleh Zhang, Li, & Ren (2024, DOI: [10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)) dalam studi reverse supply chain mereka. Mereka menunjukkan bahwa parameter laju degradasi kualitas $q_k(t)$ mengikuti hukum Arrhenius-like, di mana setiap penambahan 2°C pada suhu reefer truck mempercepat penurunan kualitas hingga 15–20%. Oleh karena itu, framework optimasi tidak cukup hanya meminimalkan jarak atau biaya, melainkan harus mengkuantifikasi *trade-off* antara biaya operasional cold chain dan tingkat penolakan produk di titik konsumsi. Secara ekonomis, FAO (2022) melaporkan bahwa kerugian pasca-panen (*post-harvest losses*) di sektor dairy Asia Tenggara mencapai 8–12% dari total produksi, setara dengan USD 4.2 milyar per tahun—angka yang menegaskan perlunya pendekatan optimasi matematis yang rigor. Dokumen modul ini akan membedah formulasi matematis Lead Researchers (2023), menyandingkan dengan ekstensi kualitas dari Zhang et al. (2024), dan menyajikan studi kasus kuantitatif dengan parameter industri realistis.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Arsitektur Jaringan dan Notasi Himpunan

Model jaringan dairy Lead Researchers (2023) menggunakan notasi empat lapis (*four-echelon network*):

- **Himpunan $I$**: Peternakan sapi perah (*farms*), $|I| = N_f$
- **Himpunan $J$**: Pabrik pengolahan (*processing plants*), $|J| = N_p$
- **Himpunan $K$**: Pusat distribusi berpendingin (*cold distribution centers*), $|K| = N_d$
- **Himpunan $L$**: Zona permintaan retailer, $|L| = N_r$

Parameter kunci:

$$\lambda_k = \frac{Q_k^{0} - Q_k^{T_{\text{trans}}}}{T_{\text{trans}}}$$

adalah *degradation rate* produk $k$ (unit: utilitas/hari), di mana $Q_k^{0}$ adalah kualitas awal dan $Q_k^{T_{\text{trans}}}$ adalah kualitas saat tiba di retailer.

### 2.2 Formulasi MILP Multi-Objektif

Tujuan pertama—minimisasi total biaya:

$$\min Z_1 = \sum_{i \in I}\sum_{j \in J}c_{ij}^{f}X_{ij} + \sum_{j \in J}\sum_{k \in K}c_{jk}^{p}Y_{jk} + \sum_{k \in K}\sum_{l \in L}c_{kl}^{d}Z_{kl} + \sum_{j \in J}f_j Y_j + \sum_{k \in K}g_k W_k$$

dengan variabel keputusan biner:

$$X_{ij}, Y_{jk}, Z_{kl} \in \{0,1\}$$

dan variabel kontinyu untuk kapasitas:

$$Y_j \in \{0,1\}, \quad W_k \in \{0,1\}$$

Tujuan kedua—maksimisasi kesegaran rata-rata:

$$\max Z_2 = \frac{1}{\sum_{l \in L}D_l}\sum_{k \in K}\sum_{l \in L}(1 - \lambda_k \tau_{kl}) Z_{kl}$$

Tujuan ketiga—minimisasi emisi karbon:

$$\min Z_3 = \sum_{m \in M} e_m \left(\sum_{i \in I}\sum_{j \in J}d_{ij}X_{ij} + \sum_{j \in J}\sum_{k \in K}d_{jk}Y_{jk} + \sum_{k \in K}\sum_{l \in L}d_{kl}Z_{kl}\right)$$

di mana $e_m$ adalah faktor emisi moda transportasi $m$ (kg CO₂e/ton-km), dengan $e_{\text{reefer truck}} = 0.62$ dan $e_{\text{rail}} = 0.022$.

### 2.3 Kendala (*Constraints*)

**Kendala keseimbangan aliran di processing plant:**

$$\sum_{i \in I} X_{ij} \geq \sum_{k \in K} Y_{jk} \quad \forall j \in J$$

**Kendala kapasitas fasilitas:**

$$\sum_{i \in I} X_{ij} \leq \text{Cap}_j \cdot Y_j \quad \forall j \in J$$

$$\sum_{j \in J} Y_{jk} \leq \text{Cap}_k \cdot W_k \quad \forall k \in K$$

**Kendala kualitas minimum di retailer (menggabungkan formulasi Zhang et al., 2024):**

$$\sum_{k \in K} Z_{kl} \cdot (1 - \lambda_k \tau_{kl}) \geq Q_{\min} \sum_{l \in L} D_l \quad \forall l \in L$$

dengan $Q_{\min} = 0.85$ (minimum 85% utilitas kesegaran).

### 2.4 Teknik Dekomposisi Benders

Karena variabel biner fasilitas $Y_j$ dan $W_k$ membuat ruang pencarian kombinatorial meledak (*combinatorial explosion*), Lead Researchers (2023) menerapkan **Benders Decomposition (BD)** dengan pemisah berikut:

**Master Problem (MP):** hanya memuat variabel investasi fasilitas

$$\min_{Y,W} f_j Y_j + g_k W_k + \theta$$

subject to:

$$\theta \geq \alpha_j Y_j + \beta_k W_k \quad \forall \text{cut } (\alpha, \beta) \text{ valid}$$

**Subproblem (SP):** diberikan $\hat{Y}, \hat{W}$ tetap, selesaikan masalah aliran biaya minimum:

$$\min \sum c_{ij}^f X_{ij} + c_{jk}^p Y_{jk} + c_{kl}^d Z_{kl}$$

subject to kendala aliran dan kualitas. Dual SP menghasilkan *Benders cut*:

$$\theta \geq \pi^T (h - T\hat{Y} - S\hat{W})$$

di mana $\pi$ adalah harga dual (*dual prices*) yang merepresentasikan *marginal value* kapasitas tambahan pada setiap fasilitas. Iterasi BD berhenti ketika $\text{gap}_{\text{Benders}} = \frac{Z^{UB} - Z^{LB}}{Z^{UB}} \leq 10^{-3}$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi framework Lead Researchers (2023) dalam lingkungan industri nyata mengikuti SOP 8 tahap berikut:

### 3.1 Tahapan Prosedural

1. **Pengumpulan Data Geospasial:** menggunakan GIS (Geographic Information System) untuk menentukan koordinat node $I, J, K, L$ beserta jarak tempuh aktual $d_{ij}, d_{jk}, d_{kl}$.

2. **Estimasi Parameter Degradasi:** dilakukan *time-temperature tolerance (TTT)* experiment di laboratorium Quality Control untuk menetapkan $\lambda_k$ per SKU produk.

3. **Formulasi MP & SP:** menggunakan bahasa pemodelan Python+Gurobi atau AMPL+CPLEX.

4. **Warm-Starting:** solusi heuristic *Capacitated Plant Location* digunakan sebagai titik awal untuk mempercepat konvergensi BD.

5. **Iterasi Benders:** maksimal 50 iterasi dengan *multi-cut strategy* (Lead Researchers, 2023 melaporkan konvergensi rata-rata pada iterasi ke-18).

6. **Validasi Lagrangian Bound:** membandingkan $Z^{LB}$ dengan bound Lagrangian suboptimalitas $\leq 0.5\%$.

7. **Analisis Sensitivitas:** variabel $D_l$ (permintaan) diuji fluktuasi $\pm 15\%$ untuk stress-test robustness.

8. **Decision Dashboard:** output diintegrasikan ke Power BI untuk eksekutif dengan KPI: total cost, average freshness, carbon footprint, % kapasitas terpakai.

### 3.2 Arsitektur Teknologi

```
[ERP Sumber] → [Data Lake Azure] → [Pre-processing Python] 
       ↓
[Gurobi Solver Cluster] → [Benders Engine] 
       ↓
[API REST] → [Dashboard Tableau/Power BI]
```

### 3.3 Standar Referensi

- **ISO 22000:2018** — Food Safety Management System untuk penjaminan mutu.
- **ISO 14064-1** — perhitungan carbon footprint.
- **HACCP** — titik kritis pada transportation chain.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Kasus Hipotetis-Realistis

Mengambil skenario "DairyCo Indonesia" dengan parameter:

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| $\|I\|$ (farm) | 5 | unit |
| $\|J\|$ (pabrik) | 3 | unit |
| $\|K\|$ (DC) | 4 | unit |
| $\|L\|$ (retailer) | 20 | zona |
| $Q_{\min}$ | 0.85 | utilitas |
| $f_j$ (biaya tetap buka pabrik) | 850,000 | USD/tahun |
| $g_k$ (biaya tetap buka DC) | 420,000 | USD/tahun |
| $c_{ij}^f$ | 0.045 | USD/liter/km |
| $\text{Cap}_j$ | 180,000 | liter/hari |
| $\text{Cap}_k$ | 95,000 | liter/hari |
| Total demand $\sum D_l$ | 250,000 | liter/hari |
| $\lambda_k$ (degradation) | 0.025 | utilitas/hari |
| $\tau_{kl}$ (waktu transit DC→retailer) | 0.6–1.8 | hari |

### 4.2 Langkah Kalkulasi

**Langkah 1 — Formulasi Subproblem untuk konfigurasi $\hat{Y} = (1,1,0)$, $\hat{W} = (1,0,1,1)$:**

Minimalkan:

$$Z_{SP} = \sum_{i,j,k,l} c \cdot X_{ij} + c \cdot Y_{jk} + c \cdot Z_{kl}$$

dengan kendala:

$$\sum_{i=1}^{5} X_{ij} \leq 180{,}000 \quad j=1,2$$

$$\sum_{j=1}^{2} Y_{jk} \leq 95{,}000 \quad k=1,3,4$$

$$\sum_{k \in \{1,3,4\}} Z_{kl} \cdot (1 - 0.025 \cdot \tau_{kl}) \geq 0.85 \cdot D_l \quad \forall l$$

**Langkah 2 — Penyelesaian SP dan Perolehan Dual Prices:**

Misalkan solver mengembalikan variabel dual berikut (contoh ilustratif):

$$\pi_1^{\text{cap}} = 0.038 \text{ USD/liter (pabrik 1)}$$

$$\pi_2^{\text{cap}} = 0.052 \text{ USD/liter (pabrik 2)}$$

$$\pi_1^{d,\text{cap}} = 0.041 \text{ USD/liter (DC 1)}$$

$$\pi_3^{d,\text{cap}} = 0.029 \text{ USD/liter (DC 3)}$$

$$\pi_4^{d,\text{cap}} = 0.034 \text{ USD/liter (DC 4)}$$

**Langkah 3 — Bentuk Benders Optimality Cut:**

$$\theta \geq \sum_{j \in J}\pi_j^{\text{cap}} \cdot \text{Cap}_j \cdot Y_j + \sum_{k \in K}\pi_k^{d,\text{cap}} \cdot \text{Cap}_k \cdot W_k - \text{constant}$$

Substitusi numerik:

$$\theta \geq (0.038)(180{,}000)Y_1 + (0.052)(180{,}000)Y_2 + (0.041)(95{,}000)W_1 + (0.029)(95{,}000)W_3 + (0.034)(95{,}000)W_4$$

$$\theta \geq 6{,}840 Y
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
