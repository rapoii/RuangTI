# 1937 — Perencanaan Lot Sizing Stokastik Dinamis dengan Evolusi Forecast pada Kerangka Rolling-Horizon untuk Industri Manufaktur

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Dynamic stochastic lot sizing with forecast evolution in rolling‐horizon planning
**Jurnal & Sitasi Utama:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)
**Sitasi Pendukung:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan lot sizing—penentuan kuantitas produksi optimal pada setiap periode dalam horizon perencanaan—merupakan salah satu keputusan operasional paling kritikal dalam rantai pasok manufaktur. Survei empiris yang dirangkum oleh Forel & Grunow (2023, DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)) menunjukkan kesenjangan mencolok antara literatur akademik dan praktik industri: sementara riset operasi telah mengembangkan model stokastik sophisticated dengan *expected cost minimization*, lebih dari 80% perusahaan manufaktur依旧 menggunakan model deterministik berbasis MRP (*Material Requirements Planning*) yang diperkuat dengan *safety stock* dan *rolling-horizon planning* (RHP). Fenomena ini menciptakan inefisiensi terstruktur: perencanaan-deterministik yang dijalankan secara berulang (rolling) sesungguhnya menghasilkan *replanning flexibility* yang tidak ditangkap oleh formulasi akademik klasik, sehingga potensi penghematan biaya nyata (*actual cost*) tidak pernah terealisasi.

Konteks industri yang melatarbelakangi penelitian ini sangat relevan bagi sektor consumer goods, farmasi, dan komponen otomotif dengan *demand uncertainty* tinggi. Sebagai contoh, pada lini produksi *fast-moving consumer goods* (FMCG) dengan *product life cycle* 12–24 bulan, *forecast* permintaan yang tersedia di awal perencanaan horizon (T=0) memiliki akurasi rendah (MAPE >30%), namun secara evolutif informasi permintaan tersebut menjadi lebih akurat mendekati *due date*. Forel & Grunow (2023) memperkenalkan kerangka *Martingale Model of Forecast Evolution* (MMFE) yang secara eksplisit memodelkan dinamika peningkatan akurasi forecast ini, sehingga keputusan lot sizing dapat mengantisipasi *forecast update* di periode mendatang.

Urgensi ekonomis dari topik ini dapat diukur dari proporsi biaya persediaan dan setup dalam *total landed cost* produk manufaktur, yang rata-rata mencapai 20–35%. Dengan asumsi *holding cost* 25% dari nilai persediaan per tahun (berdasarkan standar logistik APICS/ASCM), setiap kesalahan 1% dalam kuantitas lot sizing pada industri dengan *revenue* USD 500 juta berdampak pada biaya tambahan USD 0.5–1.75 juta per tahun. Oleh karena itu, integrasi model stokastik dengan RHP bukan sekadar perbaikan teoritis, melainkan lever efisiensi operasional dengan dampak P&L yang terukur. Pendekatan hybrid yang diusulkan oleh Lead Researchers (2025, DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)) selanjutnya memperluas domain ini dengan menggabungkan lot sizing dan scheduling dalam satu formulasi optimasi stokastik, menandai konvergensi dua sub-disiplin yang historis terpisah.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Lot Sizing Deterministik (Wagner-Whitin sebagai Baseline)

Formulasi dasar yang menjadi *benchmark* adalah model *single-item* capacitated lot sizing problem (CLSP) dengan notasi himpunan dan parameter sebagai berikut:

**Himpunan & Indeks:**
- $T = \{1, 2, \ldots, |T|\}$ : himpunan periode perencanaan
- $t \in T$ : indeks periode
- $\tau \in T$ : indeks periode forecast evolution
- $\omega \in \Omega$ : skenario permintaan (*sample path*)

**Parameter:**
- $d_t$ : permintaan deterministik pada periode $t$
- $c_t$ : biaya produksi variabel per unit pada periode $t$
- $h_t$ : biaya *holding* per unit per periode
- $s_t$ : biaya *setup* (fixed cost) untuk memproduksi pada periode $t$
- $K_t$ : kapasitas produksi maksimum periode $t$
- $I_0$ : persediaan awal

**Variabel Keputusan:**
- $Q_t \geq 0$ : kuantitas produksi pada periode $t$
- $Y_t \in \{0,1\}$ : variabel biner setup ($Y_t = 1$ jika memproduksi)
- $I_t \geq 0$ : inventaris akhir periode $t$

Formulasi MILP Wagner-Whitin:

$$\min \sum_{t=1}^{|T|} \left( c_t Q_t + h_t I_t + s_t Y_t \right)$$

$$\text{s.t.} \quad I_t = I_{t-1} + Q_t - d_t, \quad \forall t \in T$$

$$Q_t \leq K_t Y_t, \quad \forall t \in T$$

$$I_t \geq 0, \quad Y_t \in \{0,1\}$$

### 2.2 Martingale Model of Forecast Evolution (MMFE)

Forel & Grunow (2023, DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)) mengadopsi MMFE yang awalnya diperkenalkan oleh Heath & Jackson (1994). Pada model ini, permintaan riil $D_t$ dievolusi melalui *martingale difference* dengan *forecast* $\hat{d}_{t}^{\tau}$ yang diobservasi pada periode $\tau \leq t$:

$$D_t = \hat{d}_{t}^{\tau} + \epsilon_{t,\tau}, \quad \text{dengan} \quad \epsilon_{t,\tau} \sim \mathcal{N}(0, \sigma_{t,\tau}^2)$$

dimana varians kesalahan forecast menurun secara monoton seiring $\tau \to t$:

$$\sigma_{t,\tau}^2 = \sigma_t^2 \cdot \alpha^{t-\tau}, \quad 0 < \alpha < 1$$

Parameter $\alpha$ disebut *learning coefficient* yang mengukur seberapa cepat informasi permintaan terkonvergensi. Pada $\tau = t$, $\sigma_{t,t}^2 \to 0$ sehingga permintaan menjadi deterministik (*perfect information*). Untuk RHP dengan review period $R$, keputusan lot sizing diambil ulang setiap $R$ periode, dengan forecast update baru $\hat{d}_{t}^{\tau+R}$.

### 2.3 Formulasi Stokastik dengan Production Recourse

Model Forel-Grunow yang diperluas dengan *production recourse* (kemampuan memproduksi lebih pada periode $t$ setelah melihat realisasi permintaan sebelumnya) dirumuskan sebagai *multi-stage stochastic program*:

$$\min_{Q_t, \delta_t^+, \delta_t^-} \sum_{t=1}^{|T|} \left( c_t Q_t + s_t Y_t + \mathbb{E}_{\omega} \left[ \sum_{t=1}^{|T|} \left( h_t I_t^{\omega} + p_t \delta_t^{+\omega} + b_t \delta_t^{-\omega} \right) \right] \right)$$

dimana:
- $p_t$ : biaya *recourse* untuk memproduksi tambahan (penalty produksi darurat/ overtime)
- $b_t$ : biaya *recourse* untuk under-production (backorder/ lost sales)
- $\delta_t^{+\omega}, \delta_t^{-\omega}$ : variabel recourse non-negatif pada skenario $\omega$

Kendala recourse mengikuti *non-anticipativity*:

$$Q_t = Q_t^{\tau} + \delta_t^{+\omega} - \delta_t^{-\omega}$$

dimana $Q_t^{\tau}$ adalah keputusan *here-and-now* (diambil pada $\tau$) dan $\delta$ adalah recourse *wait-and-see* (diambil setelah realisasi $\epsilon$). Struktur *multi-stage* ini membedakan model Forel-Grunow dari formulasi *two-stage* klasik (Lead Researchers, 2025, DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)).

### 2.4 Stochastic Decomposition & Sampling

Karena distribusi forecast evolution tidak diskrit melainkan kontinu (Normal), Forel & Grunow menggunakan *Sample Average Approximation* (SAA) dengan Monte Carlo:

$$\min \frac{1}{|\Omega|} \sum_{\omega \in \Omega} \left( \sum_{t \in T} c_t Q_t^{\omega} + h_t I_t^{\omega} + s_t Y_t^{\omega} + p_t \delta_t^{+\omega} + b_t \delta_t^{-\omega} \right)$$

Algoritma solusi menggunakan *Progressive Hedging Algorithm* (PHA) dari Rockafellar & Wets untuk dekomposisi skenario dengan convergence tolerance $\epsilon_{PHA} = 10^{-4}$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model Forel-Grunow di lingkungan industri mengikuti SOP 7-tahap berikut:

**Tahap 1 — Akuisisi Data Historis & Kalibrasi MMFE**
Kumpulkan time-series permintaan 36–60 periode, estimasi $\sigma_t^2$ per periode, dan kalibrasi *learning coefficient* $\alpha$ menggunakan *maximum likelihood estimation* (MLE). Validasi goodness-of-fit dengan Ljung-Box test pada residual.

**Tahap 2 — Penentuan Rolling Horizon Parameter**
Tetapkan $(R, H)$ dimana $R$ = *review period* (frekuensi replanning) dan $H$ = *planning horizon length*. Untuk Forel-Grunow (2023), studi kasus menggunakan $R = 4$ minggu dan $H = 26$ minggu. Trade-off: $R$ kecil → fleksibilitas tinggi, biaya transaksi ERP naik; $R$ besar → biaya ekspektasi turun tapi respon terhadap sinyal pasar melambat.

**Tahap 3 — Konstruksi Scenario Tree**
Bangun scenario tree dengan *branching factor* $b = 3$ (low/medium/high demand) dan kedalaman $H$ periode. Total node skenario $= b^H$ dikurangi secara dramatis melalui *forward selection* dan *scenario reduction* (Heitsch & Römisch, 2003) menjadi $|\Omega| \approx 200$.

**Tahap 4 — Penyelesaian Optimasi Stokastik**
Eksekusi PHA pada *solver* (Gurobi/CPLEX) dengan time-limit 30 menit per replanning cycle. Output: kebijakan produksi $(Q_t^{*}, Y_t^{*})$ untuk horizon $H$ ke depan, namun hanya $Q_1^{*}, Y_2^{*}$ yang dieksekusi (*receding horizon principle*).

**Tahap 5 — Eksekusi & Monitoring**
Implementasi keputusan ke MES/ERP (SAP PP/DS atau Oracle ASCP). Catat *actual demand realization* $D_t^{obs}$ untuk update MLE parameter MMFE periode berikutnya.

**Tahap 6 — Backtesting & Drift Detection**
Setiap quarter, lakukan backtest 12 periode menggunakan *walk-forward validation*. Monitor *forecast bias* dan jalankan *CUSUM test* untuk mendeteksi structural break yang memerlukan re-kalibrasi.

**Tahap 7 — Continuous Improvement & Hybridization**
Integrasikan dengan lot-sizing scheduling hybrid (Lead Researchers, 2025, DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)) ketika *product mix complexity* melebihi 50 SKU dengan shared resources, sehingga keputusan lot dan sequence dapat dioptimasi simultan.

Diagram alir proses:

```
┌────────────────────┐
│ Data historis 36bln│
└──────────┬─────────┘
           ▼
┌────────────────────┐    ┌─────────────────────┐
│ MLE → α, σ²_t      │───▶│ Validasi Ljung-Box  │
└──────────┬─────────┘    └──────────┬──────────┘
           ▼                         ▼
┌────────────────────┐    ┌─────────────────────┐
│ Set (R,H) policy   │    │ Scenario tree b=3   │
└──────────┬─────────┘    └──────────┬──────────┘
           ▼                         ▼
┌──────────────────────────────────────────┐
│ PHA Stochastic Optimization (Gurobi)     │
│  → Q*_1,...,Q*_H ; Y*_1,...,Y*_H         │
└──────────┬───────────────────────────────┘
           ▼
┌────────────────────┐
│ Execute Q*_1, Y*_2 │ ◀── Receding horizon
└──────────┬─────────┘
           ▼
┌────────────────────┐
│ Observe D^obs_t    │
└──────────┬─────────┘
           ▼
      [Loop ke Tahap 1]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus: Industri Sparepart Otomotif Tier-2 di Indonesia**

Sebuah *manufacturing facility* komponen *brake pad* dengan karakteristik operasional sebagai berikut:

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Horizon $T$