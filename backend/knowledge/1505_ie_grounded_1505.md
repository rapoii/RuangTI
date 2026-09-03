# 1505 — Optimisasi Stokastik Hibrida untuk Lot Sizing dan Penjadwalan Produksi dengan Evolusi Forecast pada Kerangka Rolling-Horizon

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan *lot sizing and scheduling* (LSS) merupakan salah satu topik klasik dalam riset Operasi dan Teknik Industri yang memiliki relevansi langsung dengan praktik industri manufaktur modern. Pada dasarnya, LSS adalah keputusan menentukan kuantitas produksi (*lot size*) sekaligus waktu eksekusi (*schedule*) untuk setiap periode, di tengah kendala kapasitas mesin, biaya *setup*, biaya *holding*, serta permintaan pelanggan yang umumnya bersifat stokastik (Lead Researchers, 2025; https://doi.org/10.48047/cu/54/02/2007-2018). Dalam konteks industri nyata — seperti industri makanan dan minuman, otomotif, semikonduktor, dan farmasi — permintaan tidak pernah deterministik; pola musiman, promosi, dan gangguan rantai pasok menyebabkan realisasi permintaan menyimpang signifikan dari rencana awal. Kerugian ekonomi akibat suboptimalisasi lot sizing dapat mencapai 5–15% dari total biaya persediaan dan produksi tahunan pada perusahaan manufaktur skala menengah (Forel & Grunow, 2023; https://doi.org/10.1111/poms.13881).

Meskipun model deterministik Wagner-Whitin (1958) dan Silver-Meal (1973) sudah matang secara matematis, praktik industri hampir secara universal mengadopsi kerangka *rolling-horizon planning* (RHP) untuk menghadapi ketidakpastian. RHP merevisi rencana setiap kali *forecast* baru tersedia, sehingga perusahaan seolah mendapatkan *replanning flexibility* yang nyata. Namun, paradoks muncul: model stokastik yang secara teori superior jarang diadopsi karena kompleksitas komputasionalnya. Forel dan Grunow (2023) secara eksplisit menyatakan "academic approaches considering demand uncertainty in lot sizing are seldom used in practice", sebuah *gap* riset yang kemudian mereka jembatani dengan mengintegrasikan *Martingale Model of Forecast Evolution* (MMFE) ke dalam stochastic lot sizing. Disinilah kontribusi Lead Researchers (2025) melengkapi dengan mengusulkan model hibrida yang menggabungkan *stochastic programming* dengan *rolling-horizon scheduling*, memungkinkan perusahaan menangkap keuntungan teoritis tanpa meninggalkan fleksibilitas operasional RHP.

Urgensi ekonomi dari topik ini menjadi semakin relevan pasca-pandemi COVID-19, di mana volatilitas permintaan melonjak tajam dan *supply chain resilience* menjadi prioritas strategis. Perusahaan yang mampu mengintegrasikan evolusi forecast ke dalam keputusan lot sizing mengalami penurunan *safety stock* rata-rata 12–18% tanpa menurunkan *service level*, sebagaimana dilaporkan dalam studi empiris berbasis data industri Eropa (Forel & Grunow, 2023). Oleh karena itu, Modul 1505 ini membahas bagaimana membangun model hibrida yang memformalkan keputusan lot sizing stokastik dengan mempertimbangkan dinamika update forecast, sehingga engineer dapat merancang SOP perencanaan produksi yang adaptif dan optimal secara biaya.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Stokastik Lot Sizing Dasar

Model lot sizing stokastik dengan recourse (SLSRP) diadaptasi dari kerangka Benders untuk stokastik dua-tahap. Indeks $t = 1, \ldots, T$ merepresentasikan periode diskret. Permintaan $d_t$ bersifat acak dengan realisasi $\tilde{d}_t$ dan *forecast* awal $f_t$. Fungsi objektif meminimumkan total biaya harapan:

$$\min_{x,y,I} \; \mathbb{E}\left[\sum_{t=1}^{T} \left(c_t x_t + s_t y_t + h_t I_t^+ + p_t I_t^-\right)\right]$$

di mana $x_t$ adalah kuantitas produksi, $y_t \in \{0,1\}$ keputusan setup, $I_t^+$ inventory positif, dan $I_t^{-}$ backorder. Constraint utama:

$$I_{t} = I_{t-1} + x_t - \tilde{d}_t \quad \forall t \in \{1,\ldots,T\}$$
$$x_t \leq M_t y_t \quad \forall t$$
$$I_t = I_t^+ - I_t^-, \quad x_t, I_t^+, I_t^- \geq 0$$

dengan $M_t$ merupakan kapasitas produksi maksimum pada periode $t$.

### 2.2 Martingale Model of Forecast Evolution (MMFE)

Forel dan Grunow (2023) mengadopsi MMFE yang menyatakan bahwa *forecast* yang direvisi pada periode $t$ untuk horizon $t+h$ mengikuti dinamika martingale:

$$f_{t+h|t} = f_{t+h|t-1} + \varepsilon_{t+h|t}, \quad \mathbb{E}[\varepsilon_{t+h|t}|\mathcal{F}_{t-1}] = 0$$

dengan $\mathcal{F}_{t-1}$ sebagai informasi hingga periode $t-1$. Varian revisi forecast umumnya mengikuti:

$$\text{Var}(\varepsilon_{t+h|t}) = \sigma^2 \cdot h^{\alpha}, \quad \alpha \in [1,2]$$

Parameter $\alpha$ menangkap fenomena bahwa revisi forecast jangka panjang memiliki varians lebih besar. Ini memungkinkan model stokastik "mengantisipasi" pola update yang akan datang, sehingga keputusan lot sizing menjadi lebih antisipatif.

### 2.3 Formulasi Hibrida (Lead Researchers, 2025)

Model hibrida yang diusulkan Lead Researchers (2025) menggabungkan tiga komponen: (i) *master problem* deterministik untuk penjadwalan jangka panjang, (ii) *subproblem* stokastik untuk lot sizing jangka pendek, dan (iii) *recourse action* pada setiap revisi forecast. Formulasi lengkapnya:

$$\min_{x,y} \; \sum_{t=1}^{T} \left(c_t x_t + s_t y_t\right) + \mathbb{E}\left[Q(x, \tilde{d})\right]$$

di mana $Q(x, \tilde{d})$ adalah fungsi recourse:

$$Q(x, \tilde{d}) = \min_{x',I'} \sum_{t=1}^{T} \left(c_t' x_t' + h_t I_t'^+ + p_t I_t'^-\right)$$

subject to:

$$I_t' = I_{t-1}' + x_t + x_t' - \tilde{d}_t, \quad x_t' \geq 0$$

Variabel $x_t'$ merepresentasikan keputusan recourse (produksi korektif) setelah realisasi permintaan terobservasi. Ini memodelkan kemampuan RHP untuk melakukan *replanning* dengan biaya produksi yang lebih tinggi (expediting cost).

### 2.4 Algoritma Dekomposisi

Karena masalah bersifat NP-hard, Lead Researchers (2025) mengusulkan dekomposisi Benders dengan *cutting plane*:

$$\theta \geq \mathbb{E}[Q(x, \tilde{d})] + \sum_t \lambda_t (x_t - x_t^*)$$

di mana $\lambda_t$ adalah dual variables dari subproblem. Konvergensi dicapai ketika gap optimalitas kurang dari toleransi $\epsilon = 10^{-3}$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model hibrida ini di industri memerlukan SOP terstruktur yang menjembatani kerangka teoritis dengan sistem ERP/MES yang ada. Berikut adalah arsitektur SOP yang kami rekomendasikan berdasarkan sintesis kedua paper:

**Langkah 1: Inisialisasi Data Historis.** Kumpulkan 24–36 bulan data permintaan historis. Estimasi parameter MMFE: $\mu_t$, $\sigma_t$, $\alpha$. Validasi dengan *goodness-of-fit* uji Kolmogorov-Smirnov pada residual forecast.

**Langkah 2: Pembuatan Baseline Deterministik.** Jalankan model Wagner-Whitin atau heuristik Silver-Meal untuk rencana produksi awal sebagai *baseline cost* $C_{base}$.

**Langkah 3: Optimisasi Stokastik dengan MMFE.** Gunakan algoritma dekomposisi Benders untuk menyelesaikan SLSRP dengan T = 12 periode (3 bulan) dan skenario Monte Carlo $N = 1000$. Output: rencana lot sizing $x^*$, $y^*$.

**Langkah 4: Eksekusi Rolling-Horizon.** Setiap awal periode baru, integrasikan realisasi permintaan aktual dan forecast baru. Hitung *recourse action* $x'_t$ menggunakan subproblem recourse.

**Langkah 5: Monitoring KPI.** Pantau empat KPI utama: (i) total biaya aktual vs rencana, (ii) *service level* (fill rate), (iii) rata-rata inventory level, dan (iv) frekuensi setup.

**Diagram Alir Proses:**

```
[Data Historis] → [Estimasi MMFE] → [Generate Skenario] 
       ↓                                     ↓
[Baseline Deterministik]              [Master Problem LP]
       ↓                                     ↓
[Bandinkan C_base] ←─────[Benders Cut]──[Subproblem Recourse]
                                              ↓
                                   [Solusi Optimal x*, y*]
                                              ↓
                              [Eksekusi RHP tiap Periode]
                                              ↓
                            [Update Forecast + Recourse x']
                                              ↓
                                   [Monitoring KPI]
```

**Arsitektur Teknologi** yang direkomendasikan: (a) solver optimasi (Gurobi/CPLEX) untuk LP/MIP, (b) bahasa Python dengan library Pyomo atau PuLP untuk orkestrasi, (c) integrasi API ke sistem ERP (SAP/Oracle) untuk data historis, dan (d) dashboard Power BI untuk monitoring KPI secara *real-time*. Lead Researchers (2025) menekankan pentingnya validasi *backtesting* pada 6 bulan data terakhir sebelum *deployment* penuh.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Studi Kasus

Kami gunakan studi kasus manufaktur komponen elektronik dengan data sebagai berikut:

| Parameter | Nilai | Keterangan |
|-----------|-------|------------|
| Periode $T$ | 5 | Mingguan |
| Biaya produksi $c_t$ | Rp 50.000/unit | Konstan |
| Biaya setup $s_t$ | Rp 2.000.000 | Per setup |
| Biaya holding $h_t$ | Rp 5.000/unit/minggu | |
| Penalty backorder $p_t$ |