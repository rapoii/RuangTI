# 2945 — Model Optimasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan penentuan ukuran lot (*lot sizing*) dan penjadwalan produksi (*scheduling*) merupakan dua keputusan operasional yang saling terkait erat dalam sistem produksi modern, namun secara historis ditangani secara terpisah dalam literatur riset operasi. Lead Researchers (2025) dalam tulisannya di *Cuestiones de fisioterapia* (DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)) menyoroti bahwa pada lingkungan manufaktur aktual—mulai dari industri makanan dan minuman, otomotif, hingga semikonduktor—Kedua keputusan tersebut tidak dapat dipisahkan karena adanya *shared constraints* seperti kapasitas mesin, *setup time*, kebijakan persediaan, dan lead time procurement yang menciptakan keputusan *coupled* yang kompleks. Urgensi ekonomis masalah ini semakin meningkat ketika perusahaan beroperasi di tengah ketidakpastian permintaan (*demand uncertainty*) yang fluktuatif, seperti pasca-pandemi, gangguan rantai pasok global, dan pergeseran preferensi konsumen yang cepat.

Secara empiris, Forel dan Grunow (2023) dalam jurnal *Production and Operations Management* (DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)) menemukan bahwa mayoritas praktisi industri masih mengandalkan model deterministik sederhana (economic order quantity atau MRP deterministik) yang kemudian "ditambal" dengan penyesuaian manual berbasis intuisi planner—suatu temuan yang kontras dengan ketersediaan pendekatan stokastik akademis yang matured. Lebih lanjut, Forel dan Grunow mendokumentasikan bahwa pendekatan *rolling-horizon planning* dengan pembaruan prakira (*forecast updates*) yang sering merupakan *de facto* praktik industri, namun integrasi formal antara *rolling horizon* dan lot sizing stokastik masih merupakan kesenjangan riset yang substansial. Kedua paper ini secara komplementer membangun argumen bahwa diperlukan sebuah model optimasi stokastik hibrida yang secara eksplisit mengintegrasikan keputusan lot sizing dan scheduling dalam satu kerangka keputusan terpadu, mampu menangani ketidakpastian permintaan melalui skenario, serta adaptif terhadap pembaruan prakira secara berkala. Konteks industri yang dimaksud mencakup perusahaan multi-item dengan kapasitas produksi bersama, di mana keputusan "berapa banyak" (lot size) dan "kapan" (sequence/timing) harus dibuat secara simultan untuk meminimasi total biaya yang meliputi biaya setup, biaya produksi, biaya inventory holding, dan potensi backorder penalty.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kerangka Stokastik Multiskenario

Model hibrida yang diusulkan Lead Researchers (2025) membangun perluasan dari *capacitated lot sizing problem* (CLSP) klasik dengan引入 variabel keputusan stokastik melalui representasi skenario. Formulasi dasarnya adalah sebagai berikut. Misalkan $\mathcal{T} = \{1, 2, \ldots, T\}$ adalah himan periode diskrit, $\mathcal{I} = \{1, 2, \ldots, N\}$ himan item, dan $\mathcal{S} = \{1, 2, \ldots, S\}$ himan skenario permintaan dengan probabilitas $p_s$ di mana $\sum_{s \in \mathcal{S}} p_s = 1$. Permintaan acak dinotasikan $D_{it}^s$ untuk item $i$ pada periode $t$ di bawah skenario $s$. Formulasi program stokastik dua tahap (*two-stage stochastic program*) untuk lot-sizing-scheduling adalah:

$$\min_{x, y, I, B} \sum_{t \in \mathcal{T}} \sum_{i \in \mathcal{I}} \left[ c_i^{\text{prod}} x_{it} + c_i^{\text{setup}} y_{it} + c_i^{\text{hold}} I_{it} + c_i^{\text{back}} B_{it} \right] + \sum_{s \in \mathcal{S}} p_s \cdot \mathbb{E}[\text{recourse}_s]$$

dengan kendala utama:

$$I_{i,t-1}^{s} + x_{it} - B_{it}^{s} = D_{it}^{s} + I_{it}^{s}, \quad \forall i \in \mathcal{I}, t \in \mathcal{T}, s \in \mathcal{S}$$

$$\sum_{i \in \mathcal{I}} a_{ij} x_{it} \leq C_{jt}, \quad \forall j \in \mathcal{M}, t \in \mathcal{T}$$

$$x_{it} \leq M_i \cdot y_{it}, \quad y_{it} \in \{0,1\}, \quad x_{it}, I_{it}^{s}, B_{it}^{s} \geq 0$$

di mana $x_{it}$ adalah kuantitas produksi item $i$ pada periode $t$, $y_{it}$ adalah variabel biner setup, $I_{it}^{s}$ adalah level inventory akhir periode $t$ skenario $s$, $B_{it}^{s}$ adalah backorder skenario $s$, $a_{ij}$ adalah waktu pemrosesan unit item $i$ pada mesin $j$, $C_{jt}$ adalah kapasitas mesin $j$ periode $t$, dan $M_i$ adalah big-M. Elemen hibrida model ini menurut Lead Researchers (2025) terletak pada penggabungan *mixed-integer programming* (MIP) untuk keputusan lot sizing dengan *constraint programming* (CP) atau *decomposition-based metaheuristic* untuk sub-masalah scheduling sequence.

### 2.2 Integrasi *Martingale Model of Forecast Evolution* (MMFE)

Komponen inovatif yang diadopsi dari Forel dan Grunow (2023) adalah penggunaan MMFE untuk menangkap evolusi prakira dalam kerangka *rolling-horizon*. Model MMFE menyatakan bahwa prakira yang diperbarui pada periode $t$ memenuhi:

$$F_{t}^{t+1} = F_{t-1}^{t+1} + \epsilon_{t}^{t+1}, \quad \epsilon_{t}^{t+1} \sim \mathcal{N}(0, \sigma^2)$$

dengan *mean square forecast error* (MSFE) yang digunakan untuk mengkalibrasi $\sigma^2$. Formulasi recourse yang diusulkan Forel dan Grunow (2023) memungkinkan penyesuaian kuantitas produksi setelah prakira baru tersedia:

$$\text{recourse}_s = \min_{x', y'} \sum_{t=\tau+1}^{T} \sum_{i \in \mathcal{I}} \left[ c_i^{\text{prod}} x'_{it}(\omega) + c_i^{\text{setup}} y'_{it}(\omega) + \text{adjustment cost} \cdot |x'_{it}(\omega) - x_{it}| \right]$$

Fungsi adjustment cost $c^{\text{adj}}_{it}$ merepresentasikan biaya perubahan rencana produksi antara horizon perencanaan $\tau$ dan update prakira pada $\tau+1$.

### 2.3 Komponen Hibrida: Lagrangian Relaxation + Local Search

Lead Researchers (2025) mengusulkan dekomposisi Lagrangian untuk kendala kapasitas dengan multiplier $\lambda_{jt} \geq 0$, sehingga subgradien dual problem menjadi:

$$\mathcal{L}(\lambda) = \min_{x, y, I, B} \sum_{t} \sum_{i} \left[ c_i^{\text{prod}} x_{it} + c_i^{\text{setup}} y_{it} + c_i^{\text{hold}} I_{it} + c_i^{\text{back}} B_{it} \right] + \sum_{j} \sum_{t} \lambda_{jt} \left( \sum_{i} a_{ij} x_{it} - C_{jt} \right)$$

Prosedur subgradien mengupdate $\lambda_{jt}^{(k+1)} = \lambda_{jt}^{(k)} + \theta^{(k)} \cdot g_{jt}^{(k)}$ di mana $g_{jt}$ adalah subgradien dan $\theta^{(k)}$ adalah ukuran langkah. Solusi upper bound diperoleh melalui *heuristic* perbaikan lokal seperti *fix-and-optimize* atau *neighbourhood search* yang memperbaiki jadwal sequence tanpa melanggar integritas lot-size decisions.

## 3. Metodologi Rekayasa & Standar Prosedur Operatif (SOP)

Implementasi model hibrida ini di lingkungan produksi nyata mengikuti SOP delapan tahap berikut:

**Tahap 1 — Akuisisi Data Historis dan Kalibrasi MMFE.** Kumpulkan data permintaan minimal 24 periode historis, bersihkan outlier menggunakan *interquartile range* method, dan kalibrasi parameter $\sigma^2$ MMFE melalui empirical MSE estimator $\hat{\sigma}^2 = \frac{1}{T(T-1)} \sum_{t} \sum_{\tau} (F_{t}^{\tau} - F_{t-1}^{\tau})^2$ sesuai protokol Forel dan Grunow (2023).

**Tahap 2 — Generasi Skenario Permintaan.** Terapkan *Monte Carlo simulation* dengan $S = 50$–$200$ skenario menggunakan distribusi empiris atau ARIMA-GARCH untuk menangkap volatility clustering. Lakukan reduksi skenario via *forward selection* atau *K-medoids clustering* untuk menurunkan computational burden menjadi $S \leq 30$.

**Tahap 3 — Formulasi Model MIP-Stokastik.** Encode model menggunakan library seperti Pyomo, Gurobi, atau CPLEX. Tetapkan horizon perencanaan $T = 12$–$24$ periode mingguan/bulanan sesuai siklus S&OP perusahaan.

**Tahap 4 — Eksekusi Solver dengan Time Limit.** Jalankan solver dengan batas waktu 300–1800 detik; aktifkan *MIP gap* relatif $\leq 1\%$ untuk presisi enterprise-grade.

**Tahap 5 — Validasi Solusi dan Simulasi *What-If*.** Jalankan simulasi *out-of-sample* terhadap 1000 skenario untuk mengukur rata-rata biaya aktual dan *Value of Stochastic Solution* (VSS):

$$\text{VSS} = \mathbb{E}[Z(\text{det. EV})] - \mathbb{E}[Z(\text{stokastik})]$$

**Tahap 6 — Re-planning dalam Rolling Horizon.** Setiap $\Delta = 1$–$4$ periode, perbarui prakira, regenerasi skenario, dan re-optimize dengan *warm-start* dari solusi sebelumnya untuk menjaga continuity produksi.

**Tahap 7 — Eksekusi Sequence Scheduling.** Terjemahkan keputusan lot-size menjadi sequence detail pada *shop floor* dengan algoritma *dispatching rule* (ATC, WSPT) atau *constraint programming*.

**Tahap 8 — Monitoring KPI dan Continuous Improvement.** Pantau KPI: *service level* ($\geq 95\%$), *inventory turnover* ($\geq 8\times$), *schedule stability* ($\geq 80\%$), lalu lakukan *root cause analysis* terhadap deviasi.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Setup Parameter Industri

Pertimbangkan perusahaan manufaktur komponen plastik dengan $N = 3$ SKU, $T = 6$ periode (mingguan), dan kapasitas mingguan $C = 80$ jam mesin. Parameter biaya (dalam satuan ribuan rupiah/unit): $c^{\text{prod}} = 50$, $c^{\text{setup}} = 800$ per setup, $c^{\text{hold}} = 5$ per unit inventory, $c^{\text{back}} = 25$ per unit backorder. Permintaan rata-rata (unit) untuk periode 1–6: Item A = [40, 35, 50, 45, 60, 55]; Item B = [30, 40, 35, 50, 45, 40]; Item C = [20, 25, 30, 25, 35, 30]. Processing time per unit: $a_A = 0.05$ jam, $a_B = 0.07$ jam, $a_C = 0.06$ jam per unit.

### 4.2 Langkah Perhitungan Deterministik (Expected Value Problem)

Pertama, hitung solusi deterministik menggunakan nilai ekspektasi permintaan. Total kapasitas terpakai minggu 3 misalnya: $\sum_i a_i \cdot D_{i3} = 0.05 \cdot 50 + 0.07 \cdot 35 + 0.06 \cdot 30 = 2.5 + 2.45 + 1.8 = 6.75$ jam. Untuk minggu 5: $0.05 \cdot 60 + 0.07 \cdot 45 + 0.06 \cdot 35 = 3.0 + 3.15 + 2.1 = 8.25$ jam. Total utilisasi mingguan relatif rendah (6.75–8.25 jam dari 80 jam) yang menunjukkan *slack capacity*, sehingga lot sizing optimal akan cenderung menggunakan *lot-for-lot* (L4L) atau *Economic Order Quantity* tergantung carrying cost vs setup cost trade-off.

Hitung EOQ untuk Item A dengan $D