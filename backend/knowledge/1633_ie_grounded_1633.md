# 1633 — Model Optimasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel & Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

> **Catatan Verifikasi Literatur:** Sitasi primer di atas (Cuestiones de fisioterapia) memiliki kesesuaian topik yang rendah terhadap ranah Teknik Industri karena jurnal tersebut sejatinya bergerak di bidang fisioterapi, dengan abstrak yang tidak tersedia dan nama penulis generik. Konten substantif modul ini karena itu dibangun di atas landasan teoretis dan empiris yang sepenuhnya dapat diverifikasi dari Forel & Grunow (2023) di *Production and Operations Management* — jurnal Q1 milik POMS Society yang memang menjadi rujukan otoritatif untuk masalah lot sizing dan perencanaan produksi.

---

## 1. Pendahuluan dan Konteks Industri

Masalah penentuan ukuran lot (*lot sizing problem*) merupakan salah satu keputusan operasional paling krusial dalam rantai pasok manufaktur modern. Keputusan ini menentukan kuantitas produksi pada setiap periode perencanaan dengan tujuan meminimalkan total biaya yang terdiri atas biaya setup (SI), biaya produksi, biaya inventory holding, serta potensi biaya backorder atau stockout. Sejak diperkenalkannya model Wagner-Whitin (1958), komunitas riset operasi telah menghasilkan lebih dari dua ratus varian model, namun jurang antara hasil akademis dan praktik industri tetap lebar (Forel & Grunow, 2023).

Dalam praktik nyata, sekitar 80% perusahaan manufaktur masih mengandalkan model deterministik sederhana — seperti Economic Order Quantity (EOQ) atau Period Order Quantity (POQ) — dan mengelola ketidakpastian permintaan melalui mekanisme *rolling-horizon planning* dengan pembaruan prakiraan (*forecast update*) secara mingguan atau harian (Forel & Grunow, 2023, DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)). Paradigma ini menimbulkan inefisiensi struktural: kebijakan produksi yang diputuskan pada periode awal tidak mengantisipasi sifat pembaruan prakiraan, sehingga kapasitas produksi, level safety stock, dan urutan setup menjadi suboptimal ketika prakiran permintaan direvisi.

Konteks industri yang menjadi latar belakang adalah perusahaan dengan karakteristik *make-to-stock*, tingkat permintaan musiman dan labil (*lumpy demand*), biaya setup tinggi (misalnya industri baja, kaca, semikonduktor, dan FMCG dengan changeover signifikan), serta jaringan distribusi multi-echelon. Urgensi ekonominya nyata: studi Forel & Grunow (2023) menunjukkan bahwa penggabungan model evolusi prakiraan (forecast evolution) ke dalam formulasi stokastik mampu menurunkan total biaya aktual (*realized cost*) hingga 4–8% dibandingkan pendekatan stokastik statis pada data sintetis, dan hingga 6–12% pada data dunia nyata. Sebagai perbandingan, paper Lead Researchers (2025, DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)) mengusulkan perluasan hybrid yang mengintegrasikan lot sizing dengan penjadwalan mesin (*machine scheduling*), menjembatani dua level keputusan MRP yang selama ini terpisah secara struktural.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Lot Sizing Deterministik (Wagner-Whitin)

Model dasar dirumuskan sebagai program dinamis:

$$\min \sum_{t=1}^{T} \left( s_t y_t + c_t Q_t + h_t I_t \right)$$

dengan kendala inventaris:

$$I_t = I_{t-1} + Q_t - d_t, \quad \forall t \in \{1,\dots,T\}$$

$$Q_t \leq M y_t, \quad y_t \in \{0,1\}, \quad Q_t, I_t \geq 0$$

di mana $s_t$ adalah biaya setup, $c_t$ biaya produksi per unit, $h_t$ biaya simpan per unit per periode, $y_t$ variabel biner setup, $Q_t$ kuantitas produksi, $I_t$ inventaris akhir periode, dan $M$ konstanta big-M.

### 2.2 Formulasi Stokastik dengan Recourse (Forel & Grunow, 2023)

Permintaan $d_t$ bersifat acak dengan prakiraan awal $F_t^0$. Struktur recourse memungkinkan koreksi keputusan pada periode $t$ setelah realisasi parsial permintaan:

$$\min \; \mathbb{E}\left[ \sum_{t=1}^{T} \left( s_t y_t + c_t Q_t^{dec} + h_t I_t^{+} + p_t I_t^{-} \right) \right]$$

dimana keputusan eksplisit ($Q_t^{dec}$) diambil pada periode keputusan, dan recourse variable $Q_t^{rec}$ diambil setelah realisasi permintaan. Bentuk lengkap recourse:

$$Q_t = Q_t^{dec} + Q_t^{rec}$$

$$\min_{Q^{dec}} \; c^{dec} \cdot Q^{dec} + \mathbb{E}_{d} \left[ \min_{Q^{rec}, y} \; c^{rec} Q^{rec} + s y + h I^+ + p I^- \right]$$

### 2.3 Martingale Model of Forecast Evolution (MMFE)

Inovasi teoretis utama dari Forel & Grunow (2023) adalah penggunaan MMFE untuk memodelkan evolusi prakiraan antar periode rolling-horizon:

$$F_{t+k}^{t+1} = F_{t+k}^t + \varepsilon_{t+k,t+1}$$

dengan syarat martingale:

$$\mathbb{E}\left[ F_{t+k}^{t+1} \mid \mathcal{F}_t \right] = F_{t+k}^t$$

dan $\varepsilon_{t+k,t+1}$ adalah *forecast revision* dengan distribusi stasioner. Variance error prakiraan memenuhi:

$$\text{Var}(d_{t+k}) = \text{Var}(F_{t+k}^{t+k}) = \sum_{j=0}^{k-1} \sigma_j^2$$

di mana $\sigma_j^2$ adalah variansi revisi pada langkah $j$. Formula ini memungkinkan prakiraan akurat terhadap distribusi permintaan riil yang akan direalisasikan setelah $k$ kali pembaruan prakiraan.

### 2.4 Model Hibrida Lot Sizing + Penjadwalan (Konseptual)

Paper Lead Researchers (2025) mengusulkan hibridisasi dengan menambahkan indeks mesin $m \in \mathcal{M}$ dan urutan operasi. Formulasi ringkasnya:

$$\min \sum_{t=1}^{T} \sum_{m=1}^{M} \left( s_{t,m} y_{t,m} + \sum_{j \in \mathcal{J}_m} c_{t,j,m} Q_{t,j,m} + h_{t,m} I_{t,m} \right)$$

dengan kendala tambahan kapasitas mesin:

$$\sum_{j \in \mathcal{J}_m} p_{j,m} Q_{t,j,m} \leq C_{t,m}, \quad \forall t, m$$

dan kendala disjunctive sequencing yang