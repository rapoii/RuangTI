# 2241 — Optimasi Stokastik Hibrida untuk Lot Sizing dan Penjadwalan Produksi dalam Kerangka Rolling-Horizon

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*, 54(02), 2007–2018. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*, 32(8), 2523–2544. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan *lot sizing and scheduling* (LSL) merupakan salah satu keputusan operasional paling fundamental dalam sistem manufaktur dan rantai pasok. Keputusan ini menentukan kapan, berapa banyak, dan dalam urutan apa produk harus diproduksi untuk memenuhi permintaan yang fluktuatif dengan tetap memperhatikan kapasitas, biaya *setup*, biaya simpan, serta kendala teknis produksi. Pada lantai pabrik di industri manufaktur diskrit — mulai dari *food and beverage*, otomotif, *consumer goods*, hingga *semiconductor* — keputusan lot sizing dilakukan secara harian melalui modul *Material Requirements Planning* (MRP) atau *Advanced Planning System* (APS) dalam Enterprise Resource Planning (ERP) modern seperti SAP PP/DS, Oracle ASCP, atau Kinaxis Maestro.

Sayangnya, kesenjangan kronis antara literatur akademis dan praktik industri masih sangat nyata. Forel & Grunow (2023) dalam *Production and Operations Management* (DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)) menekankan bahwa "pendekatan akademis yang mempertimbangkan ketidakpastian permintaan dalam lot sizing jarang digunakan di praktik industri. Industri pada umumnya mengimplementasikan model deterministik dan mengelola ketidakpastian melalui kerangka *rolling-horizon planning* dengan pembaruan *forecast* yang sering." Fenomena ini menciptakan *research-practice gap* yang merugikan: model stokastik canggih seperti *stochastic programming*, *chance-constrained programming*, dan *robust optimization* tetap tinggal di jurnal, sementara praktisi mengandalkan aturan *Silver-Meal*, *Wagner-Whitin*, atau *Part Period Balancing* yang bersifat deterministik.

Urgensi ekonomi dari gap ini tidak kecil. Studi empiris Forel & Grunow (2023) menunjukkan bahwa *forecast evolution models* mampu "mengurangi biaya aktual secara signifikan" melalui simulasi ekstensif pada data sintetis dan data nyata. Dengan kata lain, industri yang terus bertahan pada pendekatan deterministik membayar *hidden cost* berupa overproduction, *stockout*, dan pemborosan kapasitas yang tidak terdeteksi dalam laporan keuangan konvensional. Kerangka kerja hybrid yang menggabungkan stochastic optimization dengan mekanisme rolling-horizon recourse menjadi krusial untuk menjembatani gap tersebut.

Konteks ini diperkuat oleh penelitian Lead Researchers (2025) yang dipublikasikan dengan DOI [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018), yang mengusulkan model hybrid untuk mengintegrasikan optimasi stokastik ke dalam keputusan lot sizing dan penjadwalan simultan. Pendekatan hybrid yang mereka kembangkan mencoba mempertahankan tractability komputasional model deterministik sambil menangkap esensi dinamika permintaan stokastik melalui layered decision structure. Modul 2241 ini akan membedah landasan matematis, metodologi implementasi, dan aplikasi praktis dari kerangka hybrid tersebut dengan referensi kuat pada kedua literatur.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Notasi Dasar dan Parameter Sistem

Misalkan horizon perencanaan diskret terdiri atas $T$ periode (umumnya mingguan atau harian). Definisikan himpunan produk $I = \{1, 2, \dots, N\}$ dengan himpunan periode $T = \{1, 2, \dots, T\}$. Parameter-parameter kunci:

- $D_{i,t}$: permintaan aktual produk $i$ pada periode $t$ (variabel acak)
- $\hat{D}_{i,t}^{(s)}$: forecast permintaan produk $i$ pada periode $t$ yang dibuat di periode $s$ (di mana $s \leq t$)
- $c_{i,t}$: biaya produksi variabel per unit produk $i$ di periode $t$
- $h_{i,t}$: biaya simpan per unit produk $i$ per periode
- $s_{i,t}$: biaya setup untuk produk $i$ di periode $t$
- $C_{i,t}^{prod}$: kapasitas produksi maksimum produk $i$ di periode $t$
- $C_t^{total}$: kapasitas total lintas produk di periode $t$

Variabel keputusan:
- $x_{i,t} \geq 0$: jumlah produksi produk $i$ di periode $t$
- $y_{i,t} \in \{0,1\}$: indikator setup produk $i$ di periode $t$ (1 jika produksi, 0 jika tidak)
- $I_{i,t} \geq 0$: inventaris akhir produk $i$ di periode $t$

### 2.2 Martingale Model of Forecast Evolution (MMFE)

Forel & Grunow (2023) mengadopsi MMFE yang menjamin konsistensi temporal dari permintaan. Ide intinya: forecast masa depan tidak statis, melainkan *berevolusi* mengikuti proses martingale. Secara matematis:

$$\hat{D}_{i,t}^{(s+1)} = \hat{D}_{i,t}^{(s)} + \epsilon_{i,t}^{(s+1)}$$

di mana $\epsilon_{i,t}^{(s+1)}$ adalah *martingale difference sequence* dengan properti:

$$\mathbb{E}\left[\epsilon_{i,t}^{(s+1)} \mid \mathcal{F}_s\right] = 0$$

dengan $\mathcal{F}_s$ adalah filtration informasi yang tersedia hingga periode $s$. Ini menjamin bahwa:

$$\mathbb{E}\left[\hat{D}_{i,t}^{(s+1)} \mid \mathcal{F}_s\right] = \hat{D}_{i,t}^{(s)}$$

Permintaan aktual baru terealisasi ketika $s = t$, sehingga:

$$D_{i,t} = \hat{D}_{i,t}^{(t)} = \hat{D}_{i,t}^{(1)} + \sum_{s=1}^{t-1} \epsilon_{i,t}^{(s+1)}$$

Implikasi manajerial yang penting: keputusan produksi di periode $s$ dibuat berdasarkan *forecast* $\hat{D}_{i,t}^{(s)}$, tetapi forecast ini akan terus berubah hingga permintaan terealisasi. Dengan demikian, struktur keputusan optimal bersifat *recourse*.

### 2.3 Formulasi Stochastic Lot Sizing dengan Production Recourse

Fungsi tujuan meminimalkan ekspektasi biaya total:

$$\min \; \mathbb{E}\left[\sum_{t=1}^{T}\sum_{i=1}^{N}\left(c_{i,t}\,x_{i,t} + s_{i,t}\,y_{i,t} + h_{i,t}\,I_{i,t}\right)\right]$$

Tunduk pada kendala-kendala berikut:

**Kendala keseimbangan inventaris (per produk, per periode):**
$$I_{i,t} = I_{i,t-1} + x_{i,t} - D_{i,t}, \quad \forall i \in I,