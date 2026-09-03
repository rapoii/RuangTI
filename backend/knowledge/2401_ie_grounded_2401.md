# 2401 — Optimasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*, Vol. 54, No. 2, hlm. 2007–2018. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel & Martin Grunow (2023). *Dynamic stochastic lot sizing with forecast evolution in rolling-horizon planning*. *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan *lot sizing and scheduling* (LS&S) merupakan salah satu tantangan klasik dalam riset operasi dan rekayasa produksi yang hingga kini tetap relevan di tengah volatilitas rantai pasok global. Lead Researchers (2025) dalam artikelnya yang diterbitkan di *Cuestiones de fisioterapia* ([DOI: 10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)) mengusulkan sebuah *hybrid stochastic optimization model* yang menggombinasikan dua elemen krusial: penentuan ukuran lot (*lot sizing*) dan penjadwalan urutan produksi (*sequencing*) dalam satu kerangka keputusan terpadu di bawah ketidakpastian permintaan. Pendekatan ini muncul karena model deterministik tradisional seperti *Economic Lot Scheduling Problem* (ELSP) dan *Discrete Lot-sizing and Scheduling Problem* (DLSP) terbukti gagal menangkap dinamika permintaan riil di lantai pabrik, terutama ketika permintaan bersifat *non-stationary* dan mengikuti tren pasar yang sulit diprediksi.

Dalam konteks industri manufaktur modern — mulai dari industri makanan dan minuman, otomotif, farmasi, hingga elektronik konsumen — permintaan pelanggan tidak pernah bersifat deterministik. Variabilitas permintaan ini, apabila diabaikan, menyebabkan dua masalah utama: (1) *stockout* yang menurunkan *service level* dan merugikan pelanggan, serta (2) *overproduction* yang meningkatkan *holding cost* dan *obsolescence cost*. Forel & Grunow (2023) di jurnal *Production and Operations Management* ([DOI: 10.1111/poms.13881](https://doi.org/10.1111/poms.13881)) secara eksplisit menyoroti *gap* antara riset akademis dan praktik industri: *"Academic approaches considering demand uncertainty in lot sizing are seldom used in practice. Industry typically implements deterministic models and accounts for uncertainties by using a rolling-horizon planning framework with frequent forecast updates."*

Urgensi pengembangan model hibrida ini diperkuat oleh tiga tren industri contemporary: (a) adopsi *Industry 4.0* yang menghasilkan data permintaan beresolusi tinggi, (b) keinginan untuk melakukan *demand-driven MRP* (DDMRP), dan (c) meningkatnya kompleksitas *mixed-model production lines* dengan数百 SKU dalam satu jalur produksi. Model optimasi stokastik hibrida memungkinkan pengambil keputusan untuk secara eksplisit menyeimbangkan tiga dimensi biaya secara simultan — *setup cost*, *inventory holding cost*, dan *backorder cost* — sembari mempertahankan *sequencing feasibility* pada tingkat lini produksi.

---

## 2. Landasan Teori & Formulasi Matematis

Model hibrida yang dirumuskan menggombinasikan kerangka *multi-stage stochastic programming* dengan *mixed-integer programming* (MIP) untuk menangkap interaksi antara keputusan ukuran lot (kuantitas) dan urutan produksi (sequencing). Formulasi lengkap mengikuti notasi berikut:

**Himpunan & Parameter:**
- $i \in \mathcal{I}$: indeks produk ($|\mathcal{I}| = N$)
- $t \in \mathcal{T}$: indeks periode waktu ($|\mathcal{T}| = T$)
- $j \in \mathcal{I}$: indeks produk penerus dalam urutan produksi
- $\xi \in \Xi$: skenario permintaan stokastik
- $d_{i,t}(\xi)$: permintaan acak produk $i$ pada periode $t$
- $s_i$: biaya *setup* produk $i$
- $h_i$: biaya *holding* per unit per periode
- $b_i$: biaya *backorder* per unit per periode
- $a_i$: waktu proses per unit produk $i$
- $\tau_{ij}$: waktu *setup* transisi dari produk $i$ ke produk $j$
- $C_t$: kapasitas waktu tersedia pada periode $t$

**Variabel Keputusan:**
- $x_{i,t}(\xi) \geq 0$: kuantitas produksi produk $i$ pada periode $t$ di skenario $\xi$
- $y_{i,t}(\xi) \in \{0,1\}$: keputusan *setup* produk $i$ pada periode $t$
- $z_{ij,t}(\xi) \in \{0,1\}$: 1 jika produk $j$ diproduksi tepat setelah $i$ pada periode $t$ di skenario $\xi$
- $I_{i,t}(\xi)$: inventori akhir periode produk $i$ (bisa bernilai positif untuk *stock* atau negatif untuk *backorder*)
- $\Delta^+_{i,t}, \Delta^-_{i,t} \geq 0$: variabel recourse produksi (penambahan/pengurangan dari rencana awal)

**Model Martingale of Forecast Evolution (MMFE):** Mengikuti Forel & Grunow (2023), evolusi permintaan dimodelkan sebagai:

$$\hat{d}_{i,t+\tau} = d_{i,t} + \sum_{k=1}^{\tau} \epsilon_{i,t+k}, \quad \epsilon_{i,t+k} \sim \mathcal{N}(0, \sigma_{i,k}^2)$$

dengan varians kumulatif:

$$\text{Var}\!\left(\hat{d}_{i,t+\tau}\,\big|\,\mathcal{F}_t\right) = \sum_{k=1}^{\tau} \sigma_{i,k}^2$$

dimana $\mathcal{F}_t$ adalah filtrasi informasi hingga periode $t$. Properti martingale $\mathbb{E}[\epsilon_{i,t+k}|\mathcal{F}_t] = 0$ menjamin bahwa *forecast update* bersifat *unbiased*, mencerminkan praktik *rolling-horizon planning* sesungguhnya.

**Fungsi Objektif (Expected Total Cost Minimization):**

$$\min \; \mathbb{E}_{\xi}\!\left[\,\sum_{t=1}^{T}\sum_{i=1}^{N}\!\Big(\,s_i\,y_{i,t}(\xi) + h_i\big[I_{i,t}(\xi)\big]^{+} + b_i\big[I_{i,t}(\xi)\big]^{-} + c_i\,x_{i,t}(\xi)\,\Big)\right]$$

dimana $[\cdot]^{+}$ dan $[\cdot]^{-}$ masing-masing menyatakan bagian positif dan negatif (linearisasi biaya *holding* dan *backorder*).

**Konstrain Inti:**

*Inventory balance:*
$$I_{i,t}(\xi) = I_{i,t-1}(\xi) + x_{i,t}(\xi) - d_{i,t}(\xi)$$

*Capacity constraint (menggabungkan lot sizing & scheduling):*
$$\sum_{i=1}^{N}\left(a_i x_{i,t}(\xi) + \sum_{j=1}^{N} \tau_{ij}\, z_{ij,t}(\xi)\right) \leq C_t$$

*Setup-production linking:*
$$x_{i,t}(\xi) \leq M_i\, y_{i,t}(\xi)$$

*Sequencing integrity (setiap produk yang di-setup harus muncul persis satu kali dalam urutan):*
$$\sum_{j \in \mathcal{I},\, j \neq i} z_{ij,t}(\xi) = y_{i,t}(\xi), \quad \sum_{j \in \mathcal{I},\, j \neq i} z_{ji,t}(\xi) = y_{i,t}(\xi)$$

*Production recourse (Fleksibilitas replanning):*
$$x_{i,t}(\xi) = x^0_{i,t} + \Delta^+_{i,t}(\xi) - \Delta^-_{i,t}(\xi)$$

*Non-anticipativity constraint* (keputusan hanya bergantung pada informasi yang telah terungkap):
$$x_{i,t}(\xi
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
