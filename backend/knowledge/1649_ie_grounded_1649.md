# 1649 — Model Optimasi Stokastik Hibrid untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan penentuan ukuran lot (*lot sizing*) dan penjadwalan produksi (*scheduling*) merupakan salah satu pilar klasik dalam riset Operasi dan Rekayasa Sistem Industri yang memiliki dampak ekonomi bernilai miliaran dolar pada rantai pasok manufaktur global. Dalam praktiknya, permintaan pelanggan tidak pernah bersifat deterministik—ia selalu mengandung *noise*, *bias*, dan evolusi seiring berjalannya waktu. Forel dan Grunow (2023) dalam *Production and Operations Management* secara eksplisit menyoroti jurang (*gap*) yang masih lebar antara pendekatan akademis yang mempertimbangkan ketidakpastian permintaan dengan implementasi industri: "Academic approaches considering demand uncertainty in lot sizing are seldom used in practice. Industry typically implements deterministic models and accounts for uncertainties by using a rolling-horizon planning framework with frequent forecast updates" (Forel & Grunow, 2023, DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)).

Konteks industri yang melatarbelakangi isu ini sangat mendesak. Perusahaan manufaktur kelas dunia (misalnya industri semikonduktor, FMCG, dan otomotif) menghadapi tiga tantangan simultan: (1) biaya *setup*/perubahan (*changeover cost*) yang dominan terhadap total biaya persediaan, (2) kompleksitas penjadwalan pada lini produksi multi-item dengan keterbatasan kapasitas, dan (3) kebutuhan akan respons cepat terhadap pembaruan prakiraan (*forecast updates*) yang terjadi mingguan atau bahkan harian. Model stokastik tradisional seperti *stochastic lot-sizing* dengan recourse (juga dikenal sebagai *chance-constrained* atau *two-stage stochastic programming*) seringkali gagal diimplementasikan karena dimensi状态 (*state space*) yang meledak (*curse of dimensionality*) ketika horizon perencanaan diperluas.

Untuk menjawab keterbatasan ini, Lead Researchers (2025) dalam *Cuestiones de fisioterapia* mengusulkan sebuah pendekatan **hybrid** yang memadukan kekuatan optimasi stokastik dengan fleksibilitas penjadwalan *rolling-horizon*—sebuah kontribusi yang berpotensi menjembatani kesenjangan antara rigor akademis dan kebutuhan operasional di lantai pabrik (Lead Researchers, 2025, DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)). Urgensi ekonomis dari adopsi model semacam ini tecermin dari penghematan biaya aktual yang dilaporkan oleh Forel dan Grunow (2023) ketika *forecast evolution models* diintegrasikan ke dalam keputusan produksi.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Formulasi Deterministik Dasar (Uncapacitated Lot Sizing – ULS)

Formulasi dasar yang menjadi *benchmark* adalah *Wagner-Whitin model* yang diminimalkan total biaya:

$$\min Z = \sum_{t=1}^{T} \left( h_t I_t + s_t y_t + p_t q_t \right)$$

dengan kendala:

$$I_t = I_{t-1} + q_t - d_t, \quad \forall t \in \{1,2,\ldots,T\}$$

$$q_t \leq M \cdot y_t, \quad \forall t$$

$$y_t \in \{0,1\}, \quad I_t \geq 0$$

di mana $h_t$ adalah biaya simpan per unit, $s_t$ adalah biaya *setup*, $p_t$ adalah biaya produksi variabel, $q_t$ adalah kuantitas produksi, $y_t$ adalah variabel keputusan biner untuk *setup*, $I_t$ adalah inventory level, $d_t$ adalah permintaan deterministik, dan $M$ adalah bilangan besar (*big-M*).

### 2.2. Formulasi Stokastik dengan *Martingale Model of Forecast Evolution* (MMFE)

Pendekatan Forel dan Grunow (2023) memperkenalkan MMFE yang menangkap dinamika pembaruan prakiraan. Permintaan pada periode $t$ yang direalisasikan dimodelkan sebagai:

$$d_t = \mu_t + \varepsilon_t$$

di mana $\mu_t$ adalah prakiraan terbaru dan $\varepsilon_t$ adalah *shock* acak dengan $\mathbb{E}[\varepsilon_t | \mathcal{F}_{t-1}] = 0$ (bersifat *martingale difference*). Evolusi prakiraannya mengikuti:

$$\mu_{t+1} = \mu_t + \eta_{t+1}$$

dengan $\eta_{t+1}$ sebagai *innovation* yang juga *martingale difference sequence*. Fungsi tujuan stokastik menjadi:

$$\min_{q,y} \mathbb{E}\left[\sum_{t=1}^{T} \left( h_t I_t^+ + b_t I_t^- + s_t y_t + p_t q_t \right)\right]$$

di mana $I_t^+$ dan $I_t^-$ masing-masing adalah inventory positif dan *backorder*, dengan biaya simpan $h_t$ dan biaya *backorder* $b_t$. Penambahan recourse produksi (*production recourse*) memungkinkan koreksi keputusan produksi setelah $\varepsilon_t$ teramati:

$$q_t = q_t^{plan} + \Delta q_t, \quad \Delta q_t \in \mathbb{R}$$

### 2.3. Arsitektur Model Hybrid

Model yang diusulkan Lead Researchers (2025) memadukan tiga lapisan keputusan:

1. **Lapisan Stokastik Jangka Panjang** ($T = 12{-}24$ periode) — menentukan *aggregate lot-sizing* dengan *scenario tree* dari MMFE.
2. **Lapisan Deterministik Jangka Pendek** ($H = 1{-}4$ periode) — *rolling-horizon* untuk penjadwalan detail dengan kendala kapasitas riil.
3. **Lapisan Recourse** — koreksi mingguan berdasarkan *forecast updates*.

Formulasi matematis gabungannya dapat ditulis sebagai:

$$\min_{q^{agg},y^{agg}} \mathbb{E}_\omega \left[ \min_{q^{det},y^{det}} \sum_{t \in \mathcal{H}} c_t^\top q_t^{det} \right]$$

dengan kendala kopling (*linking constraint*):

$$q_t^{det} \leq Q_t^{agg}(\omega), \quad \forall t \in \mathcal{H}, \forall \omega \in \Omega$$

di mana $\Omega$ adalah himpunan *scenario* dan $Q_t^{agg}(\omega)$ adalah kuota produksi agregat dari lapisan stokastik pada skenario $\omega$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model hybrid di industri memerlukan **SOP** delapan tahap sebagai berikut:

**Tahap 1 — Karakterisasi Data Historis:** Kumpulkan data permintaan historis minimal 24 periode untuk mengestimasi parameter MMFE, termasuk $\sigma_\varepsilon$ (volatilitas *shock*) dan $\sigma_\eta$ (volatilitas pembaruan prakiraan).

**Tahap 2 — Validasi Asumsi Martingale:** Lakukan uji *autokorelasi* pada residual $\varepsilon_t$ dan *Ljung-Box test* untuk mengonfirmasi sifat *white noise* dan *stationarity*.

**Tahap 3 — Pembangkitan Skenario:** Gunakan *Monte Carlo simulation* dengan $N \geq 1000$ skenario, lalu reduksi dengan *scenario reduction* (algoritma *forward selection*) menjadi $|\Omega^*| = 20{-}50$ skenario representatif.

**Tahap 4 — Optimasi Stokastik Lapis Atas:** Selesaikan *two-stage stochastic program* menggunakan *Benders decomposition* atau *progressive hedging algorithm* (PH) pada *Solver* seperti Gurobi atau CPLEX.

**Tahap 5 — Perencanaan *Rolling-Horizon* Mingguan:** Ekstrak kuota produksi $Q_t^{agg}$ untuk horizon pendek, lalu jalankan penjadwalan detail deterministik dengan kendala kapasitas mesin, *sequence-dependent setup*, dan *due-date*.

**Tahap 6 — Recourse & Koreksi:** Saat prakiraan baru tersedia, perbarui $\mu_t$ dan selesaikan ulang *subproblem* recourse dengan *warm-start* dari solusi sebelumnya.

**Tahap 7 — Eksekusi & Pencatatan KPI:** Implementasikan hasil penjadwalan di *MES (Manufacturing Execution System)*, catat *On-Time-In-Full* (OTIF), total biaya, dan *service level*.

**Tahap 8 — *Feedback Loop* & Kalibrasi Bulanan:** Bandingkan realisasi dengan prakiraan, perbarui parameter MMFE, dan re-train model jika *MAPE* > ambang batas (misalnya 15%).

Diagram alur logikanya adalah sebagai berikut:

```
┌──────────────────────────┐
│  Data Historis Permintaan │
└────────────┬─────────────┘
             ▼
┌──────────────────────────┐
│ Estimasi Parameter MMFE  │
│ (σε, ση, bias)           │
└────────────┬─────────────┘
             ▼
┌──────────────────────────┐
│ Monte Carlo + Reduction  │
│ (|Ω*| = 20-50 skenario)  │
└────────────┬─────────────┘
             ▼
┌──────────────────────────┐
│ Two-Stage Stochastic LP  │ ← LAYER ATAS
│ (Benders/PH Algorithm)   │
└────────────┬─────────────┘
             ▼
┌──────────────────────────┐
│ Kuota Q_t^agg per periode│
└────────────┬─────────────┘
             ▼
┌──────────────────────────┐
│ Rolling-Horizon Schedule │ ← LAYER BAWAH
│ (Det + Sequence Setup)   │
└────────────┬─────────────┘
             ▼
┌──────────────────────────┐
│ Eksekusi MES + KPI      │
└────────────┬─────────────┘
             ▼
┌──────────────────────────┐
│ Forecast Update → Recourse│
└──────────────────────────┘
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Pabrik FMCG dengan 5 SKU, horizon 12 minggu, biaya parameter sebagai berikut (nilai ilustratif berbasis tipikal industri):

| Parameter | Nilai |
|-----------|-------|
| Permintaan rata-rata $\bar{d}_t$ (unit/minggu) | [120, 135, 150, 165, 180, 175, 160, 145, 155, 170, 190, 210] |
| Biaya simpan $h$ ($/unit/minggu) | 0.50 |
| Biaya *backorder* $b$ ($/unit/minggu) | 2.00 |
| Biaya *setup* $s$ ($/setup) | 150 |
| Biaya produksi variabel $p$ ($/unit) | 5.00 |
| Kapasitas mesin $C$ (unit/minggu) | 250 |

**Langkah 1: Perhitungan dengan Model Deterministik Naive**

Asumsikan produksi mengikuti kebijakan *lot-for-lot* (LL) tanpa stokastik: $q_t = d_t$. Total biaya = $\sum_t s_t + \sum_t p_t d_t = 12(150) + 5(120+135+\cdots+210) = 1800 + 5(1955) = 1800 + 9775 = \$11.575$. Namun kebijakan ini mengabaikan setup economies dan tidak menangani uncertainty.

**Langkah 2: Penerapan *Silver-Meal Heuristic* sebagai Baseline**

Heuristik ini menghitung *average cost per period*:

$$\text{AC}(k) = \frac{s + \sum_{i=1}^{k} h(i-1)(d_{t+i-1} - \bar{d}_{t..t+k-1})}{\text{undefined}}$$

Untuk minggu 1–3, kuantitas optimal