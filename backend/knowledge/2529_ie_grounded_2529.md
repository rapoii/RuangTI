# 2529 — Model Optimisasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Perencanaan ukuran lot (lot sizing) dan penjadwalan produksi merupakan salah satu keputusan operasional paling krusial dalam sistem manufaktur, distribusi, dan rantai pasok modern. Dalam praktik industri, keputusan ini menentukan trade-off antara biaya inventaris (holding cost), biaya setup (ordering cost), dan biaya kekurangan (shortage/backorder cost) yang secara agregat dapat menyerap 20%–35% dari total biaya operasional perusahaan manufaktur diskrit (Lead Researchers, 2025). Studi terbaru oleh Forel dan Grunow (2023) yang dipublikasikan di *Production and Operations Management* menunjukkan bahwa pendekatan akademis yang mempertimbangkan ketidakpastian permintaan (*demand uncertainty*) masih sangat jarang diadopsi di industri; sebagian besar perusahaan masih menggunakan model deterministik dengan *safety stock* statis sebagai bantalan ketidakpastian.

Kesenjangan antara literatur akademis dan praktik industri inilah yang menjadi titik tolak pengembangan model optimisasi stokastik hibrida. Dalam konteks industri nyata—misalnya pada produsen barang konsumsi, industri FMCG, dan manufaktur komponen otomotif—permintaan pasar bersifat *non-stationary* dan dipengaruhi oleh tren musiman, perilaku konsumen, fluktuasi ekonomi makro, serta guncangan rantai pasok. Ketidakpastian permintaan ini semakin kompleks ketika perusahaan beroperasi dengan *capacity-constrained production* dan harus memutuskan waktu produksi (setup), kuantitas produksi, serta urutan pemrosesan produk pada mesin yang terbatas. Lead Researchers (2025) dalam paper-nya mengusulkan pendekatan hibrida yang menggabungkan *stochastic programming* dua-tahap dengan teknik dekomposisi heuristik untuk menangkap realitas operasional ini secara simultan.

Urgensi ekonomi dari masalah ini tampak pada dua dimensi. Pertama, secara **mikro-ekonomis**, kesalahan estimasi ukuran lot dapat menyebabkan peningkatan 8%–15% pada total biaya logistik menurut studi kasus pada industri makanan dan minuman di Eropa. Kedua, secara **makro-operasional**, keputusan lot sizing memengaruhi *service level*, *fill rate*, dan kepuasan pelanggan—yang pada akhirnya menentukan pangsa pasar dan profitabilitas. Forel dan Grunow (2023) secara eksplisit menyatakan bahwa industri pada umumnya mengimplementasikan model deterministik dan mengelola ketidakpastian melalui kerangka *rolling-horizon planning* dengan pembaruan prakiraan (*forecast updates*) yang sering. Jembatan antara metode akademis dan praktik ini adalah motivasi utama dari kedua paper yang menjadi basis modul ini.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Dasar Lot Sizing Deterministik (Wagner–Whitin)

Model acuan untuk masalah ini adalah program integer campuran (*mixed-integer program*) multi-periode dengan variabel keputusan: $q_t$ (kuantitas produksi), $S_t$ (status setup biner), dan $I_t$ (inventaris akhir periode). Fungsi tujuan klasik adalah minimasi total biaya:

$$\min Z = \sum_{t=1}^{T} \left( c_t \, q_t + f_t \, S_t + h_t \, I_t + p_t \, B_t \right) \tag{1}$$

dengan parameter biaya: $c_t$ (biaya variabel produksi per unit), $f_t$ (biaya setup tetap), $h_t$ (biaya inventaris per unit per periode), dan $p_t$ (biaya backorder per unit per periode). Kendala deterministik utama mencakup keseimbangan inventaris dan kapasitas:

$$I_{t-1} + q_t - B_t = d_t + I_t \qquad \forall t \in \{1, \dots, T\} \tag{2}$$

$$q_t \leq M \cdot S_t, \quad S_t \in \{0,1\}, \quad q_t, I_t, B_t \geq 0 \tag{3}$$

dengan $d_t$ adalah permintaan deterministik dan $M$ konstanta big-$M$.

### 2.2 Model Stokastik Dua-Tahap dengan *Martingale Model of Forecast Evolution* (MMFE)

Untuk menangkap ketidakpastian permintaan, Forel dan Grunow (2023) mengusulkan penggunaan **Martingale Model of Forecast Evolution (MMFE)**. Misalkan $F_t^p$ adalah prakiraan pada periode $t$ untuk periode target $p \geq t$. Mekanisme update MMFE dirumuskan sebagai:

$$F_{t+1}^p = F_t^p + \Delta_t^p, \qquad \Delta_t^p \sim \mathcal{N}(0, \sigma_p^2) \tag{4}$$

dengan $\Delta_t^p$ adalah *forecast innovation* yang independen untuk $p > t+1$, dan deviasi standar $\sigma_p$ meningkat seiring horizon prakiraan. Pemutakhiran ini menghasilkan struktur kovarians antar-prakiraan yang dapat dimanfaatkan untuk membangkitkan *scenario tree*.

Program stokastik dua-tahap (*two-stage stochastic program*) untuk lot sizing dengan recourse produksi adalah:

$$\min \; \mathbb{E}_{\xi} \left[ \sum_{t=1}^{T} c_t q_t(\xi) + f_t S_t + h_t I_t(\xi) + p_t B_t(\xi) \right] \tag{5}$$

$$\text{s.t.} \quad I_{t-1}(\xi) + q_t(\xi) - B_t(\xi) = d_t(\xi) + I_t(\xi) \quad \forall t, \xi \tag{6}$$

$$q_t(\xi) \leq M \cdot S_t, \quad S_t \in \{0,1\} \quad \forall t, \xi \tag{7}$$

di mana $q_t(\xi)$ adalah keputusan recourse (tahap kedua) yang bergantung pada skenario permintaan $\xi$, sedangkan $S_t$ adalah keputusan here-and-now (tahap pertama).

### 2.3 Formulasi Hibrida: Integrasi Lot Sizing dan Scheduling

Lead Researchers (2025) mengusulkan **model hibrida** yang menggabungkan stochastic lot sizing dengan penjadwalan urutan produksi pada mesin terbatas (*capacitated lot sizing and scheduling problem*—CLSP). Variabel tambahan: $x_{ijt} \in \{0,1\}$ yang bernilai 1 jika produk $i$ diproduksi sebelum produk $j$ pada mesin pada periode $t$. Fungsi tujuan diperluas dengan biaya transisi (sequence-dependent setup) $s_{ij}$:

$$\min Z = \sum_{t=1}^{T} \sum_{i=1}^{N} \left( c_{it} q_{it} + f_{it} S_{it} + h_{it} I_{it} + p_{it} B_{it} \right) + \sum_{t=1}^{T} \sum_{i=1}^{N} \sum_{j=1, j\neq i}^{N} s_{ijt} \, x_{ijt} \tag{8}$$

dengan kendala urutan (preventing sub-tours) mengikuti formulasi **Dantzig–Wolfe decomposition**:

$$q_{it} \geq \sum_{j \in \mathcal{J}} x_{ijt} \quad \text{(if } S_{it} = 1\text{)}, \quad \sum_{j} x_{ijt} = S_{it}, \quad \sum_{i} x_{ijt} = S_{jt} \tag{9}$$

Pendekatan hibrida ini diselesaikan melalui dekomposisi Lagrangian-relaksasi dengan subgradient optimization, menghasilkan *lower bound* yang kuat untuk memandu branch-and-bound.

### 2.4 Nilai Ekspektasi dari Forecast Evolution

Forel dan Grunow (2023) membuktikan secara empiris bahwa incorporating MMFE dalam stochastic lot sizing menghasilkan reduksi biaya aktual sebesar 1.5%–4.2% dibanding model deterministik dengan safety stock ekuivalen, khususnya pada horizon pendek dengan pembaruan prakiraan mingguan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model hibrida ini di lingkungan industri mengikuti protokol sistematis tujuh-langkah yang telah divalidasi oleh Lead Researchers (2025):

**Langkah 1 – Akuisisi Data Historis dan Pemodelan Permintaan.** Kumpulkan 24–36 bulan data penjualan historis, bersihkan outlier (outlier detection via IQR/Isolation Forest), lalu identifikasi pola musiman menggunakan dekomposisi STL (*seasonal-trend decomposition using Loess*). Estimasi parameter MMFE: $\sigma_p$ sebagai fungsi dari horizon prakiraan.

**Langkah 2 – Pembangkitan *Scenario Tree*.** Gunakan Monte Carlo sampling untuk membangkitkan $K = 200$–$1000$ skenario permintaan dengan struktur MMFE. Reduksi skenario menggunakan *scenario reduction algorithm* (Heitsch & Römisch, 2003) menjadi $K' = 20$–$50$ skenario representatif dengan probabilitas $p_\xi$.

**Langkah 3 – Formulasi MILP/Stokastik.** Tulis model dalam notasi standar (GAMS, AMPL, atau Pyomo). Validasi dimensi: pastikan $|T| \cdot |N| \cdot K'$ tidak melebihi kapasitas solver (umumnya $< 5 \times 10^5$ variabel untuk CPLEX/Gurobi).

**Langkah 4 – Kalibrasi Parameter Biaya.** Lakukan *activity-based costing* untuk menentukan $c_t, f_t, h_t, p_t$ yang akurat. Parameter $h_t$ biasanya 18%–25% dari nilai inventaris per tahun.

**Langkah 5 – Optimisasi dan Validasi Solusi.** Selesaikan model dengan *rolling-horizon framework* sepanjang horizon $T = 12$–$52$ periode (mingguan). Untuk setiap *rolling window*, hanya keputusan periode pertama yang diimplementasikan.

**Langkah 6 – Integrasi ERP/MES.** Hasil optimisasi diintegrasikan ke sistem ERP (SAP, Oracle) melalui API middleware (REST/SOAP), dengan validasi jadwal melalui MES.

**Langkah 7 – Monitoring dan Re-optimisasi.** Pantau *Key Performance Indicators* (KPI): total cost, fill rate, inventory turn-over, dan service level. Trigger re-optimisasi jika MAPE forecast > 10% atau ada perubahan kapasitas mendadak.

Diagram alur proses mengikuti loop tertutup: *Data Input → Forecast Update (MMFE) → Stochastic Optimization → Execution → Performance Feedback → Forecast Update*, yang merupakan karakteristik *rolling-horizon planning* seperti diuraikan oleh Forel dan Grunow (2023).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Studi Kasus

Ambil kasus pabrik pengemasan minuman ringan dengan dua lini produk (A = sparkling water, B = juice). Horizon perencanaan $T = 4$ minggu. Parameter biaya (dalam Rp juta):

| Parameter | Produk A | Produk B |
|-----------|----------|----------|
| $c_t$ (biaya variabel) | 5.0 | 7.5 |
| $f_t$ (biaya setup) | 20 | 25 |
| $h_t$ (holding) | 1.2 | 1.8 |
| $p_t$ (backorder) | 8.0 | 10.0 |

Kapasitas mingguan: 200 unit (produk A) dan 150 unit (produk B). Permintaan deterministik dasar (unit): $d = [120, 150, 180, 200]$ untuk A dan $d = [80, 100, 110, 130]$ untuk B.

### 4.2 Skenario Stokastik (MMFE)

Dengan MMFE, kita bangkitkan 3 skenario permintaan dengan probabilitas $p_\xi = [0.4, 0.35, 0.25]$:

- **Skenario 1 (baseline):** $[120, 150, 180, 200]$ dan $[80, 100, 110, 130]$
- **Skenario 2 (permintaan tinggi, +15%):** $[138, 173, 207, 230]$ dan $[92, 115, 127, 150]$
- **Skenario 3 (permintaan rendah, −10%):** $[108, 135, 162, 180]$ dan $[72, 90, 99, 117]$

### 4.3 Solusi Deterministik (Baseline)

Untuk skenario 1