# 1953 — Model Optimasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan penentuan ukuran lot (*lot sizing*) dan penjadwalan produksi (*scheduling*) merupakan salah satu keputusan operasional paling krusial dalam rantai pasok manufaktur kontemporer. Lead Researchers (2025) dalam publikasi di *Cuestiones de fisioterapia* menyoroti bahwa pada lingkungan industri modern yang ditandai oleh permintaan (*demand*) dengan volatilitas tinggi, kapasitas produksi yang heterogen, serta time-to-market yang semakin pendek, pendekatan deterministik klasik — seperti model Wagner-Within atau Silver-Meal — menjadi usang karena mengasumsikan permintaan masa depan bersifat pasti (Lead Researchers, 2025). Faktanya, lebih dari 80% perusahaan manufaktur di sektor FMCG, semikonduktor, dan farmasi masih mengandalkan aturan pengalaman (*heuristic rules*) yang tidak mampu menangkap dinamika stokastik permintaan.

Urgensi ekonomi dari masalah ini sangat substansial. Studi Forel & Grunow (2023) yang dipublikasikan di *Production and Operations Management* menunjukkan bahwa perusahaan tipikal menanggung *safety stock* 12–25% di atas permintaan rata-rata hanya untuk mengompensasi ketidakpastian permintaan, yang menyebabkan inefisiensi modal kerja (*working capital*) triliunan rupiah per tahun pada skala industri besar (Forel & Grunow, 2023). Mereka secara eksplisit menyatakan: *"Academic approaches considering demand uncertainty in lot sizing are seldom used in practice. Industry typically implements deterministic models and accounts for uncertainties by using a rolling-horizon planning framework with frequent forecast updates"* (Forel & Grunow, 2023).

Gap riset ini menjadi motivasi utama bagi Lead Researchers (2025) untuk mengusulkan pendekatan hibrida yang mengintegrasikan kekuatan optimasi stokastik dengan fleksibilitas rolling-horizon. Pendekatan hibrida memungkinkan perusahaan memperoleh rencana produksi yang secara eksplisit mengoptimalkan ekspektasi biaya total (biaya setup, produksi, penyimpanan, dan shortage) di bawah berbagai skenario permintaan, sekaligus mempertahankan kemampuan *re-planning* saat informasi baru tersedia. Modul ini akan menguraikan arsitektur model, formulasi matematis, prosedur operasional, dan studi kasus terapan yang merepresentasikan implementasi nyata di lantai pabrik.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Stokastik Dasar

Formulasi lot sizing stokastik hibrida yang diusulkan Lead Researchers (2025) membangun di atas kerangka *stochastic integer programming* dengan *recourse*. Notasi himpunan dan parameter yang digunakan adalah sebagai berikut:

- $T$ = himpunan periode diskrit, $t = 1, 2, \ldots, T$
- $\Omega$ = himpunan skenario permintaan, $|\Omega| = S$
- $d_t^{\omega}$ = permintaan periodik pada skenario $\omega \in \Omega$
- $p_t$ = biaya produksi variabel per unit pada periode $t$
- $h_t$ = biaya *holding* per unit per periode
- $s_t$ = biaya *setup* (fixed cost) pada periode $t$
- $c_t^b$ = biaya *backorder* per unit pada periode $t$
- $K_t$ = kapasitas produksi maksimum pada periode $t$
- $\pi^{\omega}$ = probabilitas skenario $\omega$, dengan $\sum_{\omega} \pi^{\omega} = 1$

Variabel keputusan:
- $x_t \geq 0$ = kuantitas produksi pada periode $t$ (first-stage decision)
- $y_t \in \{0,1\}$ = biner setup (1 jika setup dilakukan)
- $I_t^{\omega} \geq 0$ = inventaris positif di akhir periode $t$ pada skenario $\omega$
- $B_t^{\omega} \geq 0$ = backorder pada periode $t$ pada skenario $\omega$ (recourse variable)

Formulasi lengkap:

$$\min_{x, y} \sum_{t \in T} \left( s_t y_t + p_t x_t \right) + \mathbb{E}_{\omega} \left[ \sum_{t \in T} \left( h_t I_t^{\omega} + c_t^b B_t^{\omega} \right) \right]$$

dengan kendala:

$$I_{t-1}^{\omega} + x_t - B_{t-1}^{\omega} - d_t^{\omega} = I_t^{\omega} - B_t^{\omega}, \quad \forall t, \omega$$

$$x_t \leq K_t \cdot y_t, \quad \forall t$$

$$y_t \in \{0,1\}, \quad x_t, I_t^{\omega}, B_t^{\omega} \geq 0, \quad \forall t, \omega$$

### 2.2 Model Evolusi Forecast (MMFE)

Forel & Grunow (2023) memperkenalkan *Martingale Model of Forecast Evolution* (MMFE) yang memungkinkan antisipasi pembaruan forecast dalam horizon bergulir. Model ini menyatakan bahwa permintaan actual $d_t$ dapat didekomposisi menjadi:

$$d_t = \mu_t + \varepsilon_t + \sum_{j=1}^{t-1} \phi_j \varepsilon_{t-j}$$

di mana $\mu_t$ adalah mean forecast pada periode keputusan, $\varepsilon_t \sim \mathcal{N}(0, \sigma_{\varepsilon}^2)$ adalah inovasi forecast error (white noise), dan $\phi_j$ adalah koefisien autokorelasi yang mengukur persistensi error. Parameter $\phi_j$ mengkuantifikasi derajat evolusi forecast: jika $\phi_j = 0$, tidak ada korelasi dan kita kembali ke model white noise standar; jika $\phi_j \rightarrow 1$, forecast error bersifat sangat persisten (Forel & Grunow, 2023).

### 2.3 Relaksasi Lagrangian dan Dekomposisi

Untuk tractability komputasional pada实例 industri besar, Lead Researchers (2025) mengusulkan dekomposisi Lagrangian melalui penduplikasian variabel inventaris. Fungsi Lagrangian didefinisikan:

$$\mathcal{L}(x, y, I, B; \lambda) = \sum_{t} (s_t y_t + p_t x_t) + \sum_{t,\omega} \pi^{\omega} (h_t I_t^{\omega} + c_t^b B_t^{\omega}) + \sum_{t,\omega} \lambda_t^{\omega} \left( I_{t-1}^{\omega} + x_t - B_{t-1}^{\omega} - d_t^{\omega} - I_t^{\omega} + B_t^{\omega} \right)$$

Dual problem diselesaikan melalui *subgradient method* dengan langkah:

$$\lambda_t^{k+1} = \lambda_t^k + \alpha_k \cdot g_t^k$$

di mana $g_t^k$ adalah subgradient pada iterasi $k$ dan $\alpha_k$ adalah step size yang mengikuti aturan Polyak. Pendekatan ini memungkinkan solusi near-optimal pada instancias dengan $|T| \cdot |\Omega| > 10^5$ dalam waktu CPU kurang dari 600 detik (Lead Researchers, 2025).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis model hibrida ini mengikuti kerangka *rolling-horizon planning* yang dipopulerkan oleh Forel & Grunow (2023) dan diintegrasikan dengan arsitektur optimasi dua-tahap (*two-stage stochastic programming*) dari Lead Researchers (2025). Prosedur operasional standar (*Standard Operating Procedure*) yang dihasilkan adalah sebagai berikut:

**Tahap 1 — Inisialisasi Parameter & Data Historis.** Kumpulkan *time series* permintaan minimal 36 periode, estimasi parameter $(\mu_t, \sigma_{\varepsilon}, \phi_j)$ model MMFE menggunakan *maximum likelihood estimation* (MLE), serta validasi melalui *out-of-sample backtesting* dengan metrik MAPE ≤ 15%.

**Tahap 2 — Generasi Skenario.** Menggunakan metode Monte Carlo atau *moment matching*, bangkitkan $S = 200$ skenario permintaan yang menghormati struktur autokorelasi MMFE. Reduksi skenario melalui *forward selection* hingga $S' = 20$ skenario representatif.

**Tahap 3 — Optimasi Master Plan.** Solve formulasi two-stage stochastic program pada *frozen horizon* $H_f$ (misal $H_f = 3$ periode) menggunakan solver CPLEX/Gurobi dengan target gap optimalitas $\leq 1\%$.

**Tahap 4 — Roll-Forward.** Geser horizon satu periode, perbarui forecast dengan data aktual terbaru, ulangi Tahap 2 dan 3.

**Tahap 5 — Eksekusi & Monitoring.** Implementasikan *plan* periode pertama, monitor realisasi, dan kalkulasi *regret* (deviasi biaya aktual terhadap *expected* biaya).

```
┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│  Data Historis   │───▶│ Estimasi MMFE    │───▶│ Generasi Skenario│
│  Permintaan      │    │ (μ,σ,φ)          │    │ S'=20 skenario   │
└──────────────────┘    └──────────────────┘    └────────┬─────────┘
                                                         │
┌──────────────────┐    ┌──────────────────┐    ┌────────▼─────────┐
│  Eksekusi Plan   │◀───│  Optimasi Solver │◀───│  Bangun Pohon    │
│  + Monitoring    │    │  (Gap ≤ 1%)      │    │  Skenario        │
└────────┬─────────┘    └──────────────────┘    └──────────────────┘
         │
         ▼
┌──────────────────┐
│  Roll-Forward    │ (loop ke Tahap 2)
└──────────────────┘
```

Arsitektur teknologi yang direkomendasikan menggunakan *digital twin* yang mem-*couple* solver optimasi dengan sistem ERP (SAP/Oracle) melalui API middleware, sehingga pembaruan data terjadi secara *real-time*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Pertimbangkan pabrik pengemasan FMCG dengan 6 lini produksi dan data permintaan mingguan selama 8 periode ke depan. Parameter input:

| Parameter | $t=1$ | $t=2$ | $t=3$ | $t=4$ | $t=5$ | $t=6$ | $t=7$ | $t=8$ |
|---|---|---|---|---|---|---|---|---|
| $\mu_t$ (unit) | 420 | 480 | 510 | 530 | 500 | 470 | 450 | 430 |
| $s_t$ (Rp) | 8000 | 8000 | 8000 | 8000 | 8000 | 8000 | 8000 | 8000 |
| $p_t$ (Rp/unit) | 1500 | 1500 | 1500 | 1500 | 1500 | 1500 | 1500 | 1500 |
| $h_t$ (Rp/unit) | 80 | 80 | 80 | 80 | 80 | 80 | 80 | 80 |
| $c_t^b$ (Rp/unit) | 500 | 500 | 500 | 500 | 500 | 500 | 500 | 500 |
| $K_t$ (unit) | 700 | 700 | 700 | 700 | 700 | 700 | 700 | 700 |

Estimasi MMFE: $\sigma_{\varepsilon} = 45$, $\phi_1 = 0.35$, $\phi_2 = 0.15$ (Forel & Grunow, 2023).

**Langkah 1 — Generasi 3 skenario representatif** (untuk penyederhanaan pedagogis):

| Skenario $\omega$ | Probabilitas $\pi^{\omega}$ | $d_1$ | $d_2$ | $d_3$ | $d_4$ |
|---|---|---|---|---|---|
| Rendah (L) | 0.25 | 380 | 425 | 450 | 465 |
| Sedang (M) | 0.50 | 420 | 480 | 510 | 530 |
| Tinggi (H) | 0.25 | 460 | 535 | 570 | 595 |

**Langkah 2 — Penentuan rencana optimal untuk horizon 4 periode.** Misalkan dipilih kebijakan: setup di $t=1$ dan $t=3$. Maka $y_1 = y_3 = 1$, lainnya 0.

Untuk skenario Sedang (M) sebagai baseline, dengan kuantitas produksi $x_1 = 700$, $x_3 = 700$:
- $I_1^M = 700 - 420 = 280$ unit
- $I_2^M = 280 - 480 = -200$ unit → backorder $B_2^M = 200$, sehingga $I_2^M = 0$
- Setelah produksi di $t