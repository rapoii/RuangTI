# 2321 — Model Optimasi Stokastik Hibrida untuk Masalah Penentuan Ukoran Lot dan Penjadwalan Produksi dalam Lingkungan Permintaan Tidak Pasti

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Dynamic stochastic lot sizing with forecast evolution in rolling‐horizon planning*. *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Masalah penentuan ukuran lot (*lot sizing*) dan penjadwalan produksi (*scheduling*) merupakan salah satu permasalahan paling fundamental dalam riset operasi dan rekayasa sistem manufaktur yang telah dieksplorasi sejak Wagner-Whitin (1958) hingga era komputasi modern. Dalam praktiknya, hampir semua perusahaan manufaktur dan rantai pasok di sektor FMCG, farmasi, baja, otomotif, dan elektronik menghadapi satu kenyataan operasional yang sama: permintaan pasar bersifat probabilistik, sedangkan keputusan kapasitas dan setup mesin harus diambil jauh sebelum realisasi permintaan aktual terjadi. Lead Researchers (2025) dalam DOI [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018) menegaskan bahwa disregarding permintaan uncertainty pada model lot sizing deterministik akan menghasilkan rencana produksi yang suboptimal, dengan rata-rata pemborosan *safety stock* 12–18% terhadap biaya total persediaan. Ketidakselarasan antara asumsi deterministik dan realitas stokastik inilah yang mendasari urgensi pengembangan model optimasi stokastik hibrida.

Konteks industri nyata menunjukkan bahwa perusahaan lebih memilih model deterministik karena kesederhanaannya, kemudian mengompensasi ketidakpastian dengan membangun *safety stock* berlebih dan melakukan revisi rencana secara berkala melalui pendekatan *rolling horizon*. Forel & Grunow (2023) dalam DOI [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881) secara eksplisit menyatakan: *"Academic approaches considering demand uncertainty in lot sizing are seldom used in practice. Industry typically implements deterministic models and accounts for uncertainties by using a rolling‐horizon planning framework with frequent forecast updates."* Pernyataan ini menggarisbawahi adanya jurang (*gap*) antara riset akademis dan praktik industri.

Tujuan strategis Modul 2321 adalah menjembatani jurang tersebut melalui arsitektur hybrid yang mengintegrasikan (i) pemodelan stokastik permintaan dengan distribusi probabilitas atau skenario diskrit, (ii) mekanisme recourse untuk menyesuaikan keputusan produksi ketika informasi permintaan baru tersedia, dan (iii) horizon bergulir yang merefleksikan praktik operasional perusahaan. Secara ekonomis, implementasi model ini berpotensi menurunkan total biaya persediaan-produksi 7–15% berdasarkan simulasi Forel & Grunow (2023) pada data nyata perusahaan FMCG Eropa. Secara manajerial, model ini meningkatkan *service level* karena kapasitas recourse (lembur, subkontrak, atau *safety stock adjustment*) dapat diaktivasi secara adaptif.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Martingale of Forecast Evolution (MMFE)

Forel & Grunow (2023) memperkenalkan MMFE untuk menangkap evolusi *forecast* dalam horizon bergulir. Formulasi dasarnya adalah:

$$D_{t+\tau|t} = D_{t+\tau|t-1} + \varepsilon_{t+\tau}$$

di mana $D_{t+\tau|t}$ adalah permintaan pada periode $t+\tau$ yang diprediksi pada periode $t$, dan $\varepsilon_{t+\tau}$ adalah *martingale difference sequence* dengan $\mathbb{E}[\varepsilon_{t+\tau} | \mathcal{F}_t] = 0$ dan varians $\sigma^2(\tau) = \sigma_0^2 \cdot \tau^{\alpha}$ untuk parameter volatilitas $\alpha \in (0, 2]$.

### 2.2 Formulasi Program Stokastik Lot Sizing dengan Recourse

Model hibrida Lead Researchers (2025) memperluas Silver-Meal dan Wagner-Whitin dengan formulasi two-stage stochastic programming sebagai berikut:

$$\min_{x,y} \; \mathbb{E}_{\omega \in \Omega} \left[ \sum_{t=1}^{T} \left( K_t y_t + c_t x_t + h_t I_t^{+} + p_t I_t^{-} \right) + \mathcal{Q}(x, \xi) \right]$$

Subject to:

$$I_t = I_{t-1} + x_t - D_t^{\omega} \quad \forall t, \omega$$

$$x_t \leq M \cdot y_t \quad \forall t$$

$$y_t \in \{0,1\}, \quad x_t, I_t^{+}, I_t^{-} \geq 0 \quad \forall t$$

di mana $K_t$ adalah biaya setup, $c_t$ biaya variabel produksi, $h_t$ biaya *holding*, $p_t$ biaya *backorder*, $I_t^{+}$ inventaris positif, $I_t^{-}$ backlog, $M$ big-M, dan $\mathcal{Q}(x, \xi)$ adalah fungsi recourse.

### 2.3 Fungsi Recourse Produksi

Recourse merepresentasikan fleksibilitas yang tersedia setelah permintaan ter-realisasi. Untuk periode $t+\tau$ setelah horizon keputusan awal pada $t$:

$$\mathcal{Q}_t = \min_{q^r, q^+, q^-} \; \mathbb{E}\left[ \sum_{\tau=1}^{\tau_{\max}} \left( c_o q_{\tau}^+ + c_s q_{\tau}^- + p_{\tau} b_{\tau} \right) \right]$$

Subject to:

$$I_{t+\tau} = I_{t+\tau-1} + x_{t+\tau}^* + q_{\tau}^+ - q_{\tau}^- - D_{t+\tau}^{\omega}$$

di mana $q_{\tau}^{+}$ adalah recourse positif (lembur), $q_{\tau}^{-}$ recourse negatif (subkontrak atau *production cut*), $c_o$ biaya overtime, dan $c_s$ biaya subkontrak.

### 2.4 Hybrid Stochastic-Deterministic Bridge

Model hibrida yang diusulkan Lead Researchers (2025) menggabungkan LP-relaxation deterministik untuk *first-stage* dengan simulasi Monte Carlo untuk *second-stage*, diselesaikan via algoritma *progressive hedging* (PH) atau *Benders decomposition*. Kompleksitas komputasional direduksi dengan *scenario reduction* menggunakan algoritma *forward selection* berbasis jarak Kantorovich.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri dari model hibrida ini mengikuti kerangka SIPHOC (*Sales-Inventory-Production-Operations Coordination*) yang merupakan perluasan S&OP (*Sales & Operations Planning*). Tahapan SOP adalah:

**Langkah 1 — Pengumpulan Data Historis.** Ekstrak data permintaan minimal 36 periode, hitung parameter MMFE $\sigma_0^2$ dan $\alpha$ menggunakan Maximum Likelihood Estimation pada residual ARIMA.

**Langkah 2 — Pembangkitan Skenario.** Generate $N_s$ skenario permintaan menggunakan bootstrap residual atau Gaussian copula untuk korelasi lintas produk. Terapkan *scenario reduction* hingga tersisa $N_s' = 30$ skenario representatif.

**Langkah 3 — Optimasi First-Stage.** Selesaikan model deterministik ekuivalen (Expected Value Problem) untuk mendapatkan kebijakan produksi awal $\{x_t^*, y_t^*\}$.

**Langkah 4 — Evaluasi Rolling Horizon.** Setiap periode $t$, update *forecast* dengan informasi baru, lalu selesaikan ulang model recourse untuk periode $[t, t+H]$ di mana $H$ adalah panjang horizon (umumnya $H = 4$–$8$ periode).

**Langkah 5 — Aktivasi Recourse.** Jika realisasi permintaan di luar *confidence interval* 90%, aktifkan recourse $q^+$ (lembur) atau $q^-$ (subkontrak) dengan biaya premium yang telah dihitung dalam fungsi tujuan.

**Langkah 6 — Monitoring & Continuous Improvement.** Hitung *Mean Absolute Tracking Error* (MATE) dan *Cost Variance Index* (CVI) sebagai KPI model.

Diagram alir logika keputusan:

```
┌────────────────────┐
│ Data Historis Permintaan │
└─────────┬──────────┘
          ▼
┌────────────────────┐
│ Estimasi Parameter MMFE   │
└─────────┬──────────┘
          ▼
┌────────────────────┐
│ Generate + Reduce Skenario │
└─────────┬──────────┘
          ▼
┌────────────────────┐
│ Solve First-Stage EVP     │
└─────────┬──────────┘
          ▼
┌────────────────────┐
│ Implementasi t=1 ke MRP  │
└─────────┬──────────┘
          ▼
┌────────────────────┐
│ Realisasi Permintaan t=1 │
└─────────┬──────────┘
          ▼
      ┌───────────┐
      │ Demand in │
      │ 90% CI?   │
      └──┬─────┬──┘
      Ya │     │ Tidak
         ▼     ▼
    Lanjut  Aktivasi Recourse
         │     │
         └─────┘
            ▼
    ┌────────────────────┐
    │ Update Forecast MMFE   │
    └─────────┬──────────┘
              ▼
    ┌────────────────────┐
    │ Re-solve horizon [t+1, t+H] │
    └─────────┬──────────┘
              ▼
          Iterasi
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Studi Kasus (Pabrik Komponen Otomotif XYZ)

| Parameter | Nilai | Unit |
|-----------|-------|------|
| Horizon $T$ | 6 | periode (minggu) |
| Biaya setup $K_t$ | 500 | USD/period |
| Biaya produksi $c_t$ | 10 | USD/unit |
| Biaya holding $h_t$ | 2 | USD/unit/minggu |
| Biaya backorder $p_t$ | 8 | USD/unit/minggu |
| Biaya overtime $c_o$ | 14 | USD/unit |
| Biaya subkontrak $c_s$ | 13 | USD/unit |
| Kapasitas regular $C$ | 200 | unit/minggu |
| Kapasitas overtime $C_o$ | 80 | unit/minggu |
| Demand ekspektasi $\mu_t$ | {120, 150, 180, 140, 160, 130} | unit