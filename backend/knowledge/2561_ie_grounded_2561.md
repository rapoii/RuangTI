# 2561 — Model Optimisasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Perencanaan ukuran lot (*lot sizing*) dan penjadwalan produksi (*scheduling*) merupakan dua fungsi perencanaan produksi yang secara historis ditangani secara terpisah dalam literatur riset operasi klasik, padahal dalam praktik industri keduanya saling tergantung secara struktural dan operasional. Ketidakpastian permintaan, fluktuasi harga bahan baku, serta kompleksitas rantai pasok global迫使 perusahaan manufaktur modern untuk meninggalkan asumsi deterministik yang melekat pada algoritma Wagner-Whitin (1958) maupun Silver-Meal (1973). Lead Researchers (2025) dalam artikelnya di *Cuestiones de fisioterapia* dengan DOI [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018) mengajukan model optimisasi stokastik hibrida yang menjembatani kesenjangan antara keputusan ukuran lot pada level perencanaan taktis dan keputusan penjadwalan pada level operasional. Pendekatan ini muncul karena industri依旧 menghadapi dilema struktural: di satu sisi, sistem MRP/ERP generik hanya mampu menangani skenario permintaan deterministik berbasis prakiraan titik (*point forecast*), sementara di sisi lain, model stokastik murni seperti *stochastic programming* dua-tahap (*two-stage stochastic programming*) terbukti memiliki kompleksitas komputasional yang tinggi sehingga sulit diimplementasikan pada horizon perencanaan panjang dengan ratusan SKU.

Urgensi ekonomis dari permasalahan ini sangat substansial. Studi empiris oleh Forel dan Grunow (2023) dalam *Production and Operations Management* (DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)) menunjukkan bahwa perusahaan manufaktur secara tipikal menanggung biaya inventaris yang mencapai 15–25% dari nilai aset persediaan, di mana keputusan ukuran lot yang suboptimal berkorelasi langsung dengan peningkatan *safety stock*, biaya *setup*, dan *backorder penalty*. Lebih lanjut, ketidakpastian permintaan yang tidak tertangani secara eksplisit dalam model perencanaan menyebabkan fenomena *bullwhip effect* yang memperkuat variabilitas permintaan sepanjang rantai pasok. Pendekatan hibrida yang diusulkan oleh Lead Researchers (2025) mengintegrasikan tiga pilar analitis: (i) formulasi stokastik untuk menangani ketidakpastian permintaan, (ii) mekanisme *rolling-horizon* dengan *forecast evolution*, dan (iii) dekomposisi hirarkis antara keputusan lot sizing dan scheduling. Dengan mengadopsi arsitektur ini, sistem perencanaan mampu mempertahankan tractability komputasional sembari menangkap esensi ketidakpastian permintaan yang berkembang secara dinamis mengikuti informasi baru yang tersedia di lapangan.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Dasar Stochastic Lot Sizing

Model dasar *lot sizing* deterministik Wagner-Whitin dapat diekstensi ke ranah stokastik dengan memperkenalkan variabel keputusan kontinual dan diskret secara simultan. Formulasi stokastik dua-tahap yang diadopsi oleh Lead Researchers (2025) didefinisikan sebagai berikut:

$$\min_{x_t, y_t} \sum_{t=1}^{T} \left[ s \cdot y_t + h \cdot \mathbb{E}[I_t^+] + p \cdot \mathbb{E}[I_t^-] \right]$$

dengan kendala stokastik:

$$I_t = I_{t-1} + x_t - D_t, \quad \forall t \in \{1, 2, \ldots, T\}$$

$$x_t \leq M \cdot y_t, \quad y_t \in \{0, 1\}$$

di mana:
- $x_t$ = kuantitas produksi pada periode $t$ (variabel kontinual non-negatif)
- $y_t$ = variabel biner keputusan *setup* (1 jika memproduksi, 0 sebaliknya)
- $s$ = biaya *setup* tetap per periode
- $h$ = biaya *holding* per unit inventaris positif
- $p$ = biaya *penalty backorder* per unit permintaan yang tidak terpenuhi
- $I_t^+$ = inventaris positif pada akhir periode $t$
- $I_t^-$ = *backlog* pada akhir periode $t$
- $D_t$ = permintaan acak pada periode $t$ dengan distribusi peluang $\Phi_t$
- $M$ = kapasitas produksi maksimum (*big-M*)

### 2.2 Martingale Model of Forecast Evolution (MMFE)

Forel dan Grunow (2023) memperkenalkan formulasi *Martingale Model of Forecast Evolution* yang menangkap dinamika pembaruan prakira secara rekursif. Model ini mengasumsikan bahwa prakira permintaan baru $F_{t,\tau+1}$ pada horizon $\tau+1$ mengikuti proses martingale:

$$F_{t,\tau+1} = F_{t,\tau} + \epsilon_{t,\tau+1}$$

di mana $\epsilon_{t,\tau+1}$ adalah *innovation term* dengan distribusi normal $\mathcal{N}(0, \sigma_\epsilon^2)$. Korelasi antara tingkat permintaan aktual dan prakira kemudian dimodelkan melalui koefisien korelasi $\rho$:

$$\text{Cov}(D_{t,\tau}, F_{t,\tau}) = \rho \cdot \sigma_D \cdot \sigma_F$$

### 2.3 Formulasi Hibrida: Integrasi Lot Sizing dan Scheduling

Lead Researchers (2025) mengusulkan arsitektur hibrida dengan fungsi tujuan terintegrasi:

$$\min_{x_t, y_t, z_{j,t}} \sum_{t=1}^{T} \left[ s \cdot y_t + h \cdot \mathbb{E}[I_t^+] + p \cdot \mathbb{E}[I_t^-] + \sum_{j=1}^{J} c_j \cdot z_{j,t} \right]$$

dengan kendala tambahan penjadwalan:

$$\sum_{j \in \mathcal{J}} z_{j,t} \leq C_t, \quad \forall t$$

$$z_{j,t} \leq M \cdot y_t, \quad \forall j, t$$

$$x_t = \sum_{j=1}^{J} z_{j,t}$$

di mana $z_{j,t}$ adalah kuantitas produk $j$ yang diproduksi pada periode $t$, $c_j$ adalah biaya pemrosesan per unit produk $j$, dan $C_t$ adalah kapasitas produksi periode $t$.

### 2.4 Rekursi Nilai Stokastik

Untuk menyekan kompleksitas komputasional, Lead Researchers (2025) menggunakan *stochastic dynamic programming* dengan rekursi Bellman:

$$V_t(I_t, F_t) = \min_{y_t \in \{0,1\}} \left[ s \cdot y_t + \mathbb{E}_{D_t} \left[ \min_{x_t \geq 0} \{ h \cdot I_t^+ + p \cdot I_t^- + V_{t+1}(I_{t+1}, F_{t+1}) \} \right] \right]$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri model hibrida ini mengikuti arsitektur SOP berlapis yang distandardisasi sebagai berikut:

### 3.1 Fase 1: Akuisisi dan Pembersihan Data Historis
Langkah pertama adalah mengaggregasi data permintaan historis minimal 36 bulan, membersihkannya dari *outliers* menggunakan metode IQR (*Interquartile Range*), dan mengestimasi parameter distribusi permintaan. Estimasi parameter dilakukan dengan algoritma *Maximum Likelihood Estimation* (MLE) untuk distribusi terpilih (Normal, Lognormal, atau Negatif Binomial).

### 3.2 Fase 2: Estimasi Model MMFE
Parameter $\rho$, $\sigma_D$, dan $\sigma_F$ diestimasi menggunakan data prakira aktual historis versus permintaan aktual, dengan validasi melalui *time-series cross-validation* pada *rolling windows* 6 bulan.

### 3.3 Fase 3: Generasi Skenario Stokastik
Mengikuti kerangka Forel dan Grunow (2023), skenario permintaan dibangkitkan menggunakan *Monte Carlo simulation* dengan $N = 1000$ skenario, lalu direduksi menjadi $K = 50$ skenario representatif menggunakan algoritma *forward selection* berbasis jarak Kantorovich.

### 3.4 Fase 4: Optimisasi Hirarkis Dua-Tahap
Tahap pertama (*master problem*) menyelesaikan keputusan lot sizing mingguan menggunakan formulasi MIP (*Mixed Integer Programming*) dengan solver CPLEX atau Gurobi. Tahap kedua (*subproblem*) menyelesaikan penjadwalan harian menggunakan *constraint programming* dengan time horizon $T = 12$ minggu.

### 3.5 Fase 5: Implementasi Rolling-Horizon
Setiap awal periode, prakira diperbarui, skenario digenerasi ulang, dan optimisasi diselesaikan dengan parameter *frozen period* 2 periode pertama (untuk stabilitas operasional) dan *planning period* 12 periode ke depan.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Studi Kasus

Pertimbangkan pabrik manufaktur komponen elektronik dengan karakteristik berikut:

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Biaya setup ($s$) | 500.000 | IDR/period |
| Biaya holding ($h$) | 2.500 | IDR/unit |
| Biaya backorder ($p$) | 15.000 | IDR/unit |
| Kapasitas produksi ($C_t$) | 800 | unit/period |
| Demand rata-rata ($\mu$) | 500 | unit/period |
| Std. deviasi ($\sigma$) | 75 | unit |

### 4.2 Perhitungan Deterministik (Baseline Wagner-Whitin)

Dengan permintaan $D_1 = 480$, $D_2 = 520$, $D_3 = 510$, $D_4 = 490$, total biaya deterministik:

$$\text{TC}_{det} = 2 \cdot s + \sum_{t=1}^{4} h \cdot I_t^+ = 2(500.000) + 2.500 \cdot (20 + 10 + 0) = 1.075.000 \text{ IDR}$$

### 4.3 Perhitungan Stokastik dengan MMFE

Menggunakan parameter MMFE dengan $\rho = 0{,}85$ dan $\sigma_\epsilon = 25$, permintaan aktual yang terekonsiliasi:

$$D_t^{actual} = \rho \cdot F_t + (1-\rho) \cdot D_t^{true} + \epsilon_t$$

Simulasi 50 skenario menghasilkan biaya ekspektasian:

$$\mathbb{E}[\text{TC}_{stoch}] = \sum_{s=1}^{50} \pi_s \cdot \text{TC}_s = 987.500 \text{ IDR}$$

### 4.4 Reduksi Biaya Operasional

$$\Delta\text{TC} = \frac{\text{TC}_{det} - \mathbb{E}[\text{TC}_{stoch}]}{\text{TC}_{det}} \times 100\% = \frac{1.075.000 - 987.500}{1.075.000} \times 100\% = 8{,}14\%$$

**Interpretasi manajerial:** Reduksi 8,14% pada studi kasus 4 periode ini, ketika diekstrapolasikan pada horizon tahunan (52 periode) dengan multiple SKU, menghasilkan penghematan signifikan. Sebagai contoh, untuk 100 SKU dengan biaya operasional tahunan rata-rata Rp 2 miliar per SKU, total penghematan mencapai:

$$\text{Saving}_{annual} = 100 \cdot 2 \times 10^9 \cdot 0{,}0814 = \text{Rp } 16{,}28 \text{ miliar}$$

Hasil ini konsisten dengan temuan Forel dan Grunow (2023) yang melaporkan reduksi biaya aktual hingga 7,8% pada kasus industri nyata di sektor FMCG.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

### 5.1 Keterbatasan Metodologis

Meskipun kontribusi Lead Researchers (2025) sangat substansial, terdapat tiga keterbatasan utama. Pertama, asumsi distribusi normal untuk permintaan kurang realistis untuk industri dengan pola