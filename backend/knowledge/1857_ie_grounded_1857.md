# 1857 — Optimisasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel & Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan penentuan ukuran lot (*lot sizing*) dan penjadwalan produksi telah lama menjadi salah satu pilar fundamental dalam riset operasi manufaktur sejak diperkenalkannya model Wagner-Whitin (1958). Dalam praktik industri kontemporer, kompleksitas permasalahan ini berlipat ganda seiring dengan meningkatnya volatilitas permintaan yang dipicu oleh disrupsi rantai pasok global, pergeseran perilaku konsumen pasca-pandemi COVID-19, dan adopsi konsep *mass customization*. Lead Researchers (2025) menyoroti dalam studi terbitan DOI [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018) bahwa pendekatan deterministik tradisional—seperti Economic Order Quantity (EOQ) dan Silver-Meal heuristic—cenderung menghasilkan keputusan sub-optimal ketika menghadapi permintaan yang sangat stokastik, dengan rata-rata *bullwhip effect* yang mampu meningkatkan variansi permintaan hingga 300% pada tier upstream rantai pasok.

Urgensi operasional permasalahan ini bersifat multidimensional. Pertama, dari perspektif biaya, biaya *setup* (S) pada lini produksi modern berkisar USD 500–10.000 per pergantian, sedangkan biaya *holding* (h) mencapai 15–25% dari nilai inventaris per tahun. Kedua, dari perspektif *service level*, perusahaan manufaktur multinasional menghadapi target *fill rate* 95–98% sebagai prasyarat kontrak dengan *original equipment manufacturer* (OEM) di sektor otomotif dan elektronik. Ketiga, dimensi keberlanjutan (*sustainability*) menuntut pengurangan *waste* energi dan material, yang sangat berkorelasi dengan ukuran lot yang terlalu besar (*overproduction*).

Kesenjangan antara riset akademik dan praktik industri menjadi fokus utama Forel & Grunow (2023) dalam DOI [10.1111/poms.13881](https://doi.org/10.1111/poms.13881). Studi mereka menunjukkan bahwa meskipun pendekatan stokastik secara teoritis mampu menurunkan biaya total 8–15% dibanding model deterministik, kurang dari 12% perusahaan manufaktur global yang mengadopsinya. Alasan utamanya adalah kompleksitas formulasi, kesulitan pemrosesan data, dan kurangnya integrasi dengan sistem *Enterprise Resource Planning* (ERP) berbasis *rolling-horizon*. Kedua paper ini membangun koherensi riset yang menjembatani kesenjangan tersebut: paper pertama mengusulkan kerangka optimisasi hibrida yang mengintegrasikan *stochastic programming* dengan *constraint programming*, sementara paper kedua memberikan fondasi metodologis berupa *Martingale Model of Forecast Evolution* (MMFE) yang adaptif terhadap pembaruan prakira secara periodik.

Konteks industri yang paling relevan mencakup sektor dengan *make-to-stock* (MTS) seperti FMCG (*fast-moving consumer goods*), komponen otomotif, semikonduktor, dan baja—di mana permintaan bersifat musiman (*seasonality*) namun sangat sensitif terhadap guncangan pasar. Dalam konteks Indonesia, PT Krakatau Steel dan PT Astra International menghadapi fluktuasi permintaan baja canai panas serta komponen otomotif yang membutuhkan model lot sizing yang robust terhadap ketidakpastian permintaan global.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Deterministik sebagai *Baseline*

Formulasi Wagner-Whitin klasik meminimalkan total biaya sebagai fungsi keputusan $Q_t$ (kuantitas produksi pada periode $t$) dan variabel biner $y_t \in \{0,1\}$ yang menandai apakah *setup* dilakukan:

$$\min Z = \sum_{t=1}^{T} \left( c \cdot Q_t + s \cdot y_t + h \cdot I_t \right)$$

dengan kendala:

$$I_t = I_{t-1} + Q_t - d_t, \quad \forall t \in \{1, \ldots, T\}$$

$$Q_t \leq M \cdot y_t, \quad y_t \in \{0,1\}, \quad I_t \geq 0$$

di mana $c$ adalah biaya produksi per unit, $s$ adalah biaya *setup*, $h$ adalah biaya *holding* per unit per periode, $I_t$ adalah inventaris akhir periode $t$, $d_t$ adalah permintaan deterministik, dan $M$ adalah konstanta big-M.

### 2.2 Formulasi Stokastik Dua-Tahap dengan MMFE

Forel & Grunow (2023) memperkenalkan *Martingale Model of Forecast Evolution* (MMFE) yang memodelkan evolusi prakira dari waktu ke waktu:

$$\hat{D}_{t|\tau} = \hat{D}_{t|\tau-1} + \epsilon_{t,\tau}, \quad \tau \leq t$$

di mana $\hat{D}_{t|\tau}$ adalah prakira permintaan pada periode $t$ yang dibuat di periode $\tau$, dan $\epsilon_{t,\tau}$ adalah *innovation term* yang berdistribusi normal $\mathcal{N}(0, \sigma_\epsilon^2)$. Model ini memungkinkan prakira di-*update* secara berkala tanpa mengasumsikan struktur ARIMA yang rigid.

Formulasi stokastik dua-tahap (*two-stage stochastic program*) yang diadopsi Lead Researchers (2025) adalah:

$$\min_{Q,y} c^T Q + s^T y + \mathbb{E}_\xi \left[ Q(x, \xi) \right]$$

di mana:

- Tahap pertama (*first stage*): keputusan $Q_t, y_t$ berdasarkan prakira awal $\hat{D}_{t|0}$
- Tahap kedua (*recourse*): koreksi produksi $Q_t^{rec}$ setelah realisasi permintaan $\xi_t$ teramati
- $Q(x, \xi)$ adalah fungsi biaya recourse

### 2.3 Model Hibrida dengan *Service Level Constraint*

Paper utama (Lead Researchers, 2025) mengusulkan integrasi *stochastic programming* dengan *constraint programming* melalui formulasi berikut:

$$\min \sum_{t=1}^{T} \left[ c \cdot Q_t + s \cdot y_t + \mathbb{E}\left(h \cdot I_t^+\right) + \mathbb{E}\left(p \cdot B_t^-\right) \right]$$

dengan kendala:

$$I_t = I_{t-1} + Q_t - d_t, \quad d_t \sim F_t(\mu_t, \sigma_t^2)$$

$$\mathbb{P}(I_t \geq 0) \geq \alpha, \quad \forall t$$

$$\sum_{k \in \mathcal{K}} x_{k,t} = 1, \quad y_t \geq x_{k,t}, \quad x_{k,t} \in \{0,1\}$$

di mana $I_t^+$ dan $B_t^-$ masing-masing adalah inventaris surplus dan *backorder*, $p$ adalah biaya *backorder* per unit, $\alpha$ adalah *service level* (misal 0.95), dan $x_{k,t}$ adalah variabel penjadwalan untuk *sequence* produksi ke-$k$ pada periode $t$.

### 2.4 Pendekatan Penyelesaian

Karena masalah ini NP-hard, Lead Researchers (2025) mengusulkan dekomposisi Benders dengan *cutting plane*:

$$z_{LB} = c^T Q^* + s^T y^* + \theta^*$$
$$z_{UB} = \min \left( z_{LB}, z_{UB}^{prev} \right)$$

di mana $\theta^*$ adalah nilai optimal subproblem recourse yang diselesaikan sebagai linear program:

$$\theta = \min_{Q^{rec}, I, B} \sum_{t} (h \cdot I_t^+ + p \cdot B_t^-)$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model hibrida stokastik pada lingkungan produksi nyata memerlukan SOP terstruktur yang mengikuti arsitektur referensi ANSI/ISA-95 untuk integrasi sistem manufaktur:

### 3.1 Tahapan Implementasi SOP

**Tahap 1: Akuisisi dan Pembersihan Data Historis (Minggu 1-2)**
- Ekstraksi data permintaan 36–60 bulan dari sistem ERP (SAP MM/PP, Oracle SCM)
- Identifikasi pola musiman menggunakan dekomposisi STL (*Seasonal-Trend decomposition using LOESS*)
- Pengujian stasioneritas menggunakan Augmented Dickey-Fuller (ADF) test
- Estimasi parameter MMFE: $\mu_t, \sigma_\epsilon^2$ menggunakan MLE

**Tahap 2: Pembuatan Skenario Stokastik (Minggu 3)**
- Generasi 100–500 skenario permintaan menggunakan Monte Carlo simulation
- Reduksi skenario menggunakan algoritma *forward selection* dengan *probability distance* (Kantorovich-Rubinstein metric)
- Validasi skenario terhadap *backtesting* historis (MAPE ≤ 15%)

**Tahap 3: Formulasi dan Solusi Model (Minggu 4-5)**
- Pembentukan model MIP menggunakan *modeling language* (AMPL, GAMS, atau Pyomo)
- Solusi menggunakan solver komersial (CPLEX, Gurobi) dengan *time limit* 3600 detik
- Validasi solusi terhadap *feasibility check* kapasitas, *changeover time*, dan *sequence-dependent setup*

**Tahap 4: Integrasi dengan Rolling-Horizon Planning (Minggu 6-7)**
- Implementasikan mekanisme *rolling horizon* dengan panjang horizon H = 12 periode
- Tentukan *frozen period* (lock period) sepanjang 2 periode
- Bangun *feedback loop* otomatis antara aktual demand dan prakira berikutnya

**Tahap 5: Validasi dan Continuous Tuning (Minggu 8-12)**
- *Pilot run* pada satu lini produksi
- Bandingkan KPI (biaya total, *fill rate*, *inventory turnover*) dengan metode existing
- Tuning parameter $\alpha$ (service level) dan *scenario fan-out*

### 3.2 Diagram Alir Logika Keputusan

```
[INPUT] Data Permintaan Historis
        ↓
[PROSES] Pra-pemrosesan & Deteksi Outlier (Z-score, IQR)
        ↓
[PROSES] Estimasi Parameter MMFE (μ_t, σ²)
        ↓
[PROSES] Generasi Skenario Monte Carlo (N=200)
        ↓
[PROSES] Reduksi Skenario → S_reduced (N=20)
        ↓
[KEPUTUSAN] Solve MIP Stokastik 2-Tahap (Benders)
        ↓
[OUTPUT] Q*_t, y*_t (Rencana Produksi & Setup)
        ↓
[EKSEKUSI] Terjemahan ke Pesanan Produksi (SAP/ERP)
        ↓
[MONITORING] Realisasi Permintaan → Forecast Update
        ↓
[LOOP] Re-optimize pada horizon berikutnya
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Spesifikasi Parameter Industri

Studi kasus berikut menggunakan data realistis lini produksi komponen elektronik (modul *power supply unit*) di pabrik Cikarang dengan horizon perencanaan $T=6$ periode (bulan). Parameter industri:

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Biaya produksi ($c$) | 50.000 | IDR/unit |
| Biaya setup ($s$) | 7.500.000 | IDR/setup |
| Biaya holding ($h$) | 1.250 | IDR/unit/bulan |
| Biaya backorder ($p$) | 4.500 | IDR/unit/bulan |
| Kapasitas produksi | 6.000 | unit/bulan |
| Inventaris awal ($I_0$) | 500 | unit |
| Service level ($\alpha$) | 0.95 | - |
| Biaya kekurangan kapasitas | 10.000 | IDR/unit |

### 4.2 Permintaan Stokastik

Prakira awal dan standar deviasi mengikuti MMFE:

| Periode $t$ | $\mu_t$ (unit) | $\sigma_t$ (unit) |
|-------------|----------------|-------------------|
| 1 | 3.500 | 350 |
| 2 | 4.200 | 420 |
| 3 | 5.000 | 400 |
| 4 | 4.800 | 480 |
| 5 | 3.800 | 380 |
| 6 | 4.000 | 400 |

### 4.3 Perhitungan Manual Economic Order Quantity (EOQ) Baseline

Sebagai pembanding, EOQ deterministik untuk permintaan total $D = \sum \mu_t = 25.300$ unit menghasilkan:

$$EOQ = \sqrt{\frac{2 \cdot D \cdot s}{h}} = \sqrt{\frac{2 \times