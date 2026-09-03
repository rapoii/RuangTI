# 2897 — Model Optimisasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Penentuan ukuran lot (*lot sizing*) dan penjadwalan produksi merupakan dua fungsi operasional yang saling terkait erat dalam sistem manufaktur modern, terutama pada industri dengan permintaan *make-to-stock* seperti FMCG, farmasi, baja, dan semikonduktor. Lead Researchers (2025) dalam *Cuestiones de fisioterapia* menyoroti bahwa hingga saat ini, banyak perusahaan masih mengandalkan model deterministik yang diperbarui secara berkala melalui mekanisme *rolling horizon*, padahal lingkungan permintaan dunia nyata memiliki sifat stokastik yang kuat. Forel dan Grunow (2023, DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)) mengkonfirmasi temuan ini melalui survei empiris: *"Academic approaches considering demand uncertainty in lot sizing are seldom used in practice. Industry typically implements deterministic models and accounts for uncertainties by using a rolling-horizon planning framework with frequent forecast updates."*

Kesenjangan antara literatur akademis dan praktik industri ini memiliki konsekuensi ekonomi yang signifikan. Pada industri baja Eropa yang menjadi kasus studi Forel dan Grunow (2023), penggunaan model deterministik dengan horizon tetap terbukti menyebabkan *bullwhip effect* pada inventaris, peningkatan *safety stock* hingga 15–25%, dan pemborosan kapasitas produksi ketika permintaan aktual menyimpang dari ramalan. Dalam konteks ini, Lead Researchers (2025) mengusulkan pendekatan *hybrid stochastic optimization* yang memadukan pemrograman stokastik dua tahap (*two-stage stochastic programming*) dengan heuristik penjadwalan, sehingga mampu menangkap fluktuasi permintaan sekaligus kompleksitas *sequence-dependent setup* pada mesin paralel.

Urgensi ekonomis dari masalah ini dapat diukur dari tiga dimensi. Pertama, biaya persediaan (*holding cost*) yang membengkak akibat stok pengaman berlebih. Kedua, biaya *setup* yang tidak efisien ketika produksi dilakukan dalam lot kecil berulang. Ketiga, *service level* yang menurun ketika *stockout* terjadi akibat salah alokasi kapasitas. Lead Researchers (2025) menekankan bahwa integrasi keputusan *lot sizing* dan *scheduling* dalam satu kerangka optimasi menghasilkan reduksi total biaya 8–12% dibandingkan praktik terpisah, yang pada perusahaan dengan revenue Rp 500 miliar per tahun berpotensi menghasilkan penghematan Rp 40–60 miliar annually.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Dasar Lot Sizing Deterministik (Wagner-Whitin)

Model acuan adalah formulasi Wagner-Whitin yang diminimalkan pada perencanaan horizon diskret $T$ periode:

$$\min \sum_{t=1}^{T} \left( s_t \cdot y_t + h_t \cdot I_t + p_t \cdot x_t + b_t \cdot B_t \right)$$

dengan kendala keseimbangan inventaris:

$$I_{t-1} + x_t - B_t = d_t + I_t, \quad \forall t \in \{1,\ldots,T\}$$

$$x_t \leq M \cdot y_t, \quad y_t \in \{0,1\}, \quad I_t, B_t, x_t \geq 0$$

di mana $x_t$ adalah kuantitas produksi, $y_t$ variabel biner setup, $I_t$ inventaris akhir, $B_t$ *backorder*, $d_t$ permintaan deterministik, $s_t$ biaya setup, $h_t$ biaya simpan, $p_t$ biaya produksi variabel, $b_t$ biaya *backorder*, dan $M$ konstanta big-M.

### 2.2 Ekstensi Stokastik dengan Martingale Model of Forecast Evolution (MMFE)

Forel dan Grunow (2023) memperkenalkan formulasi stokastik berbasis MMFE di mana permintaan actual direalisasikan bertahap sesuai evolusi ramalan:

$$\tilde{D}_{\tau} = D_{t,t} + \sum_{k=t+1}^{\tau} \varepsilon_k, \quad \varepsilon_k \sim \mathcal{N}(0, \sigma_k^2)$$

di mana $\tilde{D}_{\tau}$ adalah permintaan pada periode $\tau$ yang diramalkan pada periode $t$. Struktur martingale menjamin $E[\tilde{D}_{\tau} | \mathcal{F}_t] = D_{t,\tau}$, dengan $\mathcal{F}_t$ sebagai informasi hingga periode $t$.

### 2.3 Formulasi Two-Stage Stochastic Lot Sizing dengan Recourse

Lead Researchers (2025) mengusulkan formulasi *two-stage* dengan recourse produksi:

$$\min_{x,y} \; c^T y + E_{\omega}\left[Q(x, \omega)\right]$$

di mana fungsi recourse:

$$Q(x, \omega) = \min_{x^+, x^-, I^+, B^+} \sum_{t=1}^{T} \left( h_t I_t^+ + b_t B_t^+ + p_t^+ x_t^+ + p_t^- x_t^- \right)$$

$$\text{s.t.} \quad I_{t-1}^+ + x_t + x_t^+ - x_t^- - B_t^+ = d_t(\omega) + I_t^+$$

dengan $x_t^+$ adalah produksi tambahan (*recourse up*) dan $x_t^-$ adalah disposal atau transfer ke periode lain (*recourse down*). Biaya recourse biasanya lebih tinggi: $p_t^+ > p_t > p_t^-$.

### 2.4 Formulasi Hybrid Lot Sizing-Scheduling

Kontribusi utama Lead Researchers (2025) adalah integrasi keputusan penjadwalan melalui variabel tambahan $z_{ij}$ yang menunjukkan apakah job $i$ mendahului job $j$ pada mesin yang sama:

$$\sum_{i \in \mathcal{J}_k} z_{ij} = 1, \quad \forall j \in \mathcal{J}_k, \; k \in \mathcal{K}$$

$$z_{ij} + z_{ji} = 1, \quad \forall i,j \in \mathcal{J}_k$$

$$C_j \geq C_i + p_{ij} - M(1 - z_{ij})$$

dengan $C_j$ adalah *completion time* job $j$, $p_{ij}$ waktu proses, dan $\mathcal{K}$ himpunan mesin. Biaya *sequence-dependent setup* dimodelkan sebagai:

$$S_{ij} \cdot z_{ij} \quad \text{dengan } S_{ij} = s_0 + s_1 \cdot \mathbb{1}_{\{type(i) \neq type(j)\}}$$

### 2.5 Algoritma Hybrid: Progressive Hedging + Dispatching Rule

Karena ukuran masalah eksponensial, Lead Researchers (2025) mengusulkan dekomposisi *Progressive Hedding* (PH) yang diperkuat dengan *insertion heuristic* untuk subproblem penjadwalan. Algoritma iteratif:

$$x^{k+1} = (1-\rho) \bar{x}^k + \rho \cdot x^*(\omega^k)$$

di mana $\bar{x}^k$ adalah rata-rata non-anticipatif dan $\rho \in (0,1)$ parameter langkah.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model hybrid stochastic lot-sizing & scheduling di industri mengikuti SOP lima tahap berikut:

**Tahap 1 — Pengumpulan Data Historis dan Pemodelan MMFE.** Minimal 36 bulan data permintaan historis diperlukan untuk mengestimasi parameter MMFE. Varians error $\sigma_k^2$ diestimasi menggunakan *exponential smoothing* pada residual:

$$\hat{\sigma}_k^2 = \alpha |d_k - D_{k-1,k-1}|^2 + (1-\alpha)\hat{\sigma}_{k-1}^2$$

dengan $\alpha = 0{,}2$ mengikuti rekomendasi Forel dan Grunow (2023).

**Tahap 2 — Generasi Skenario.** Mengikuti *sample average approximation* (SAA), dibangkitkan $N = 200$ skenario permintaan menggunakan simulasi Monte Carlo dengan korelasi temporal. Pohon skenario direduksi menggunakan *moment matching* menjadi $N' = 20$ skenario representatif.

**Tahap 3 — Optimasi Hybrid.** Subproblem master diselesaikan dengan *progressive hedging* (CPLEX/Gurobi), sementara subproblem penjadwalan diselesaikan dengan *greedy insertion* + *local search* (2-opt swap). Konvergensi dihentikan saat gap relatif < 1%.

**Tahap 4 — Implementasi Rolling Horizon dengan Reschedule Trigger.** Lead Researchers (2025) merekomendasikan *freeze horizon* $f = 2$ periode, *planning horizon* $T = 12$ periode, dan *reschedule trigger* ketika $|d_t^{aktual} - d_t^{ramalan}| > 1{,}5 \cdot \sigma_t$.

**Tahap 5 — Monitoring KPI.** Metrik yang dipantau: (i) total biaya per unit, (ii) *service level* Type-1 ($\alpha_1$), (iii) varians inventaris, dan (iv) utilisasi kapasitas. *Dashboard* diperbarui harian dengan *control chart* Shewhart untuk deteksi anomali.

Diagram alir proses: **Data Historis → Estimasi MMFE → Sampling Skenario → Optimasi Two-Stage → Keputusan Lot Size + Sequence → Eksekusi Produksi → Monitoring Realisasi → Trigger Reschedule (Ya/Tidak) → Kembali ke Sampling Skenario**.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Data Parameter Pabrik Baja Ringan

Sebuah pabrik baja ringan di Indonesia dengan kapasitas 1.200 ton/bulan menggunakan data berikut untuk horizon $T = 6$ bulan:

| Parameter | Nilai | Unit |
|-----------|-------|------|
| Permintaan aktual $d_t$ | 800, 950, 1100, 900, 1050, 1200 | ton |
| Biaya setup $s_t$ | 15.000.000 | Rp/setup |
| Biaya simpan $h_t$ | 50.000 | Rp/ton/bulan |
| Biaya produksi $p_t$ | 8.000.000 | Rp/ton |
| Biaya recourse up $p_t^+$ | 9.500.000 | Rp/ton |
| Biaya recourse down $p_t^-$ | 7.200.000 | Rp/ton |
| Kapasitas $C_t$ | 1.200 | ton/bulan |
| Biaya backorder $b_t$ | 200.000 | Rp/ton |

### 4.2 Skenario Permintaan dengan MMFE

Asumsikan ramalan awal $D_{0,t}$ dan error berdistribusi normal:

| $t$ | 1 | 2 | 3 | 4 | 5 | 6 |
|-----|---|---|---|---|---|---|
| $D_{0,t}$ | 850 | 980 | 1050 | 920 | 1020 | 1150 |
| $\sigma_t$ | 80 | 110 | 130 | 100 | 120 | 140 |

Setelah observasi bulan 1 (aktual = 800), MMFE memperbarui:

$$D_{1,t} = D_{0,t} + (d_1 - D_{0,1}) = D_{0,t} - 50 \quad \text{untuk } t > 1$$

Varians update: $\sigma_{1,t}^2 = \sigma_{0,t}^2 - \sigma_{0,1}^2 + \sigma_\varepsilon^2$ dengan $\sigma_\varepsilon = 30$.

### 4.3 Perhitungan Solusi Deterministik (Baseline)