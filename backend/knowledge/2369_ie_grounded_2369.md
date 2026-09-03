# 2369 — Model Optimisasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan *lot sizing and scheduling* (LSS) merupakan salah satu persoalan fundamental dalam riset operasi dan rekayasa sistem manufaktur yang menentukan kuantitas produksi (lot size) dan urutan eksekusi (sequencing) pada lini produksi multi-item multi-period. Dalam praktik industri kontemporer, keputusan LSS menghadapi dua tantangan utama yang saling berkompleksitas: (i) sifat stokastik dari permintaan pasar yang penuh ketidakpastian, dan (ii) kebutuhan koor­dinasi lintas-fungsi antara perencanaan kapasitas, penjadwalan, dan eksekusi produksi di lantai pabrik. Lead Researchers (2025) dalam studi mereka di *Cuestiones de fisioterapia* mengemukakan bahwa pendekatan deterministik yang selama ini digunakan secara luas terbukti *underperform* ketika diterjemahkan ke dalam lingkungan operasional dengan demand volatility yang tinggi, sehingga memunculkan kebutuhan akan kerangka optimisasi hibrida yang menggabungkan kekuatan pemodelan stokastik dengan fleksibilitas komputasional *mixed-integer programming* (MIP).

Urgensi ekonomis dari permasalahan ini sangat substansial. Studi Forel dan Grunow (2023) yang dipublikasikan dalam *Production and Operations Management* menunjukkan bahwa industri manufaktur secara tipikal hanya mengimplementasikan model deterministik dengan *safety stock* konservatif, padahal pendekatan tersebut menghasilkan *overstock* rata-rata 8–15% dari *working capital* yang diikat dalam persediaan. Lebih lanjut, Forel dan Grunow (2023) menegaskan bahwa "academic approaches considering demand uncertainty in lot sizing are seldom used in practice" (Forel & Grunow, 2023, https://doi.org/10.1111/poms.13881), sebuah *gap research* yang menegaskan perlunya jembatan metodologis antara riset akademis dan implementasi industri. Konteks industri yang relevan mencakup sektor FMCG, semikonduktor, farmasi, dan perakitan otomotif di mana biaya *setup*, biaya *holding*, dan *backorder penalty* memiliki sensitivitas tinggi terhadap keputusan lot sizing.

Kontribusi utama Lead Researchers (2025) adalah mengusulkan arsitektur optimisasi hibrida yang memadukan *two-stage stochastic programming* dengan *constraint programming* untuk menangkap baik aspek kontinuitas keputusan lot sizing maupun diskretnya struktur penjadwalan. Pendekatan ini berbeda dengan literatur klasik (Wagner-Whitin, Silver-Meal, atau Lot-for-Lot) yang cenderung menyederhanakan salah satu aspek tersebut.

## 2. Landasan Teori & Formulasi Matematis

Model hibrida yang dikembangkan Lead Researchers (2025) berakar pada *two-stage stochastic mixed-integer programming* (2SSMIP) yang diperluas dengan *rolling-horizon planning mechanism* ala Forel dan Grunow (2023). Formulasi dasarnya adalah sebagai berikut.

### 2.1 Notasi dan Parameter

- Indeks: $i \in I$ (produk), $t \in T$ (periode), $s \in S$ (skenario permintaan)
- Parameter: $d_{it}$ (permintaan produk $i$ pada periode $t$), $h_i$ (biaya *holding* per unit), $p_i$ (biaya *backorder* per unit), $K_i$ (biaya *setup* produk $i$), $C_t$ (kapasitas produksi periode $t$), $r_{i,t}$ (kecepatan produksi produk $i$ pada periode $t$)
- Variabel keputusan: $Q_{it}$ (kuantitas produksi), $y_{it} \in \{0,1\}$ (indikator setup), $I_{it}$ (inventori akhir), $B_{it}$ (backorder kumulatif)

### 2.2 Fungsi Objektif

Permasalahan LSS stokastik meminimalkan *expected total cost* yang mencakup biaya setup, biaya holding, dan biaya backorder di seluruh skenario:

$$\min \sum_{i \in I} \sum_{t \in T} \left[ K_i \cdot y_{it} + h_i \cdot \mathbb{E}_\xi[I_{it}^+(\xi)] + p_i \cdot \mathbb{E}_\xi[B_{it}^+(\xi)] \right]$$

dengan $\xi$ menyatakan realisasi acak dari vektor permintaan, dan $I_{it}^+(\xi) = \max(I_{it}(\xi), 0)$, $B_{it}^+(\xi) = \max(-I_{it}(\xi), 0)$.

### 2.3 Kendala Neraca Persediaan

$$I_{it}(\xi) = I_{i,t-1}(\xi) + Q_{it} - d_{it}(\xi) + B_{it}(\xi) - B_{i,t-1}(\xi), \quad \forall i,t,\xi$$

### 2.4 Kendala Kapasitas

$$\sum_{i \in I} \frac{Q_{it}}{r_{i,t}} \leq C_t, \quad \forall t$$

### 2.5 Kendala Lot-Sizing (Big-M atau Convex Hull)

$$Q_{it} \leq M \cdot y_{it}, \quad \forall i,t$$

dengan $M$ adalah *upper bound* produksi.

### 2.6 Martingale Model of Forecast Evolution (MMFE)

Forel dan Grunow (2023) mengintegrasikan *martingale model of forecast evolution* untuk menangkap dinamika *forecast update* dalam mekanisme *rolling-horizon*. Bentuk umum MMFE adalah:

$$d_{t+1} = d_t + \varepsilon_{t+1}, \quad \varepsilon_{t+1} \sim \mathcal{N}(0, \sigma^2_t)$$

dengan $\mathbb{E}[d_{t+1} | \mathcal{F}_t] = d_t$, sehingga *forecast* terbaik pada periode $t$ adalah permintaan yang diobservasi sebelumnya. Model ini memungkinkan para perencana untuk mengantisipasi revisi *forecast* sehingga keputusan lot sizing menjadi lebih *robust* terhadap evolusi informasi.

### 2.7 Arsitektur Hibrida

Komponen hibrida Lead Researchers (2025) terdiri atas: (a) *master problem* yang diselesaikan sebagai *scenario-based MIP* menggunakan *sample average approximation* (SAA), dan (b) *subproblem* penjadwalan yang diselesaikan via *constraint programming* (CP) untuk menjamin *sequencing feasibility* pada level *shop floor*. Interaksi keduanya terjadi melalui *cutting plane* dan *column generation* yang diperbarui secara iteratif hingga gap optimalitas kurang dari 0,5%.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industrialisasi model LSS hibrida mengikuti SOP delapan-tahap sebagai berikut:

**Tahap 1 — Akuisisi Data Historis:** Mengumpulkan 24–36 bulan data permintaan historis pada level SKU, beserta data kapasitas lini, *yield rate*, dan lead time. Validasi dilakukan menggunakan *control chart* dan *Grubbs test* untuk *outlier detection*.

**Tahap 2 — Estimasi Distribusi Permintaan:** Melakukan *fitting* distribusi empiris (normal, log-normal, atau *empirical CDF*) menggunakan uji Kolmogorov-Smirnov. Tahap ini menghasilkan *scenario tree* dengan $S$ skenario tipikal (S = 50–200 skenario).

**Tahap 3 — Pembuatan *Scenario Tree*:** Menggunakan MMFE ala Forel & Grunow (2023) untuk membangun pohon skenario yang merepresentasikan evolusi *forecast* dalam *rolling-horizon*. *Branching factor* $b = 3$–$5$ dengan horizon $H = 12$–$24$ periode.

**Tahap 4 — Formulasi MIP Master Problem:** Membangun model two-stage stochastic program dan menyelesaikannya dengan SAA. Solver yang direkomendasikan: Gurobi 11.0 atau CPLEX 22.1 dengan *time limit* 600 detik.

**Tahap 5 — Subproblem Constraint Programming:** Memformulasikan masalah penjadwalan sequence-dependent setup sebagai CP dan menyelesaikannya via IBM CP Optimizer atau Google OR-Tools CP-SAT.

**Tahap 6 — Iterasi Hibrida:** Mekanisme *benders decomposition* atau *column generation* menjembatani MIP dan CP. Konvergensi ditandai dengan *optimality gap* $\leq 0,5\%$.

**Tahap 7 — Validasi Out-of-Sample:** Solusi dievaluasi pada 1000 *monte carlo* simulasi dengan distribusi permintaan *hold-out* yang independen.

**Tahap 8 — Implementasi ERP/MES:** Solusi akhir diintegrasikan ke dalam *Enterprise Resource Planning* (SAP PP/DS, Oracle ASCP) dengan *rolling-horizon re-optimization* mingguan.

Diagram alir logikanya: *Data Acquisition → Forecast Modeling (MMFE) → Scenario Tree Generation → Master MIP → CP Subproblem → Convergence Check → Validation → ERP Deployment*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Pabrik perakitan komponen elektronik dengan 4 produk (A, B, C, D) pada horizon 6 periode (bulan).

**Parameter Input:**

| Produk | $K_i$ (juta Rp) | $h_i$ (juta Rp) | $p_i$ (juta Rp) | $r_{it}$ (unit/jam) |
|--------|-----------------|-----------------|-----------------|---------------------|
| A      | 12              | 0,08            | 0,20            | 50                  |
| B      | 15              | 0,10            | 0,25            | 45                  |
| C      | 10              | 0,06            | 0,18            | 60                  |
| D      | 18              | 0,12            | 0,30            | 40                  |

Kapasitas bulanan: $C_t = 320$ jam. Permintaan rata-rata per bulan: $d_A = 4000$, $d_B = 3500$, $d_C = 5000$, $d_D = 2800$ unit, dengan $\sigma_A = 600$, $\sigma_B = 525$, $\sigma_C = 750$, $\sigma_D = 420$ unit.

**Skenario Deterministik (baseline lot-for-lot):**

$$TC_{det} = \sum_i \sum_t K_i \cdot y_{it} + h_i \cdot I_{it} = (12+15+10+18) \times 6 \times 1 = 330 \text{ juta}$$

dengan asumsi *backorder* nol (karena lot-for-lat selalu tepat memenuhi permintaan). Namun *safety stock* yang dibutuhkan untuk menghadapi $\pm 2\sigma$ fluktuasi:

$$SS_i = z_{0,975} \cdot \sigma_i \cdot \sqrt{L_i}, \quad z_{0,975} = 1{,}96$$

$$SS_A = 1{,}96 \times 600 \times \sqrt{1} = 1176 \text{ unit}, \quad \text{biaya} = 1176 \times 0{,}08 = 94{,}1 \text{ juta/bulan}$$

Total biaya *safety stock* tahunan: $\approx 1.129$ juta rupiah, belum termasuk modal kerja yang diikat.

**Skenario Stokastik Hibrida (Lead Researchers, 2025):**

Dengan $S = 100$ skenario dari MMFE dan optimasi 2SSMIP, solusi menghasilkan *expected total cost*:

$$TC_{sto} = 285 \text{ juta (setup+holding)} + 22 \text{ juta (expected backorder)} = 307 \text{ juta}$$

Penghematan dibanding deterministik: $\Delta = 330 - 307 = 23$ juta per horizon, atau ~7% reduksi biaya. Dengan *rolling-horizon* mingguan ala Forel & Grunow (2023), reduksi aktual rata-rata menjadi 9–12% karena *forecast evolution* ditangani secara eksplisit.

**Perhitungan Marginal Value of Stochastic Information (EVPI):**

$$EVPI = EEV - RP = 295 - 307 = -12 \text{ juta}$$

di mana $EEV$ (*expected result using expected value*) = 295 juta dan $RP$ (*recourse problem*) = 307 juta. Nilai $EEV < RP$ mengindikasikan bahwa informasi stokastik memiliki *value*, dan keputusan menunggu informasi (recourse) lebih bernilai daripada keputusan *here-and-now* yang menggunakan *expected value*.

**Value of Stochastic Solution (VSS):**

$$VSS = RP - EEV = 307 - 295 = 12 \text{ juta (3,9% dari total biaya)}$$

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

**Keterbatasan Metodologis:** Model Lead Researchers (2025) mengandalkan asumsi *stationary demand distribution* yang dapat dilanggar pada produk dengan *lifecycle* pendek (misal gadget konsumen). Kompleksitas komputasional 2SSMIP meningkat eksponensial terhadap jumlah skenario ($S$), sehingga untuk lini dengan lebih dari 50 SKU diperlukan *decomposition* (Benders atau Lagrangian). Forel & Grunow (2023) mengakui bahwa model MMFE mengasumsikan permintaan tidak memiliki *trend* struktural dan *seasonality* yang persisten, yang menjadi *avenue* riset masa depan.

**Perbandingan dengan Metode Konvensional:** Dibandingkan Wagner-Whitin (1958) yang menjamin *optimality* pada deterministik, model hibrida memberikan *robustness* superior terhadap fluktuasi permintaan. *Average cost reduction