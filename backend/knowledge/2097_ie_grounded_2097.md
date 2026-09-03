# 2097 — Model Optimisasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Dynamic stochastic lot sizing with forecast evolution in rolling‐horizon planning*. *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan penentuan ukuran lot (*lot sizing*) dan penjadwalan produksi (*scheduling*) merupakan tulang punggung sistem perencanaan produksi di industri manufaktur modern, khususnya pada sektor dengan karakteristik *make-to-stock*, permintaan musiman, serta portofolio produk multi-item. Dalam konteks industri nyata—misalnya industri makanan & minuman, FMCG, komponen otomotif, dan farmasi—pengambil keputusan tidak hanya dituntut menentukan kuantitas produksi optimal per periode, tetapi juga menentukan *sequencing* pada lini produksi yang memiliki keterbatan kapasitas, waktu setup, dan *sequence-dependent setup times*. Lead Researchers (2025) dalam artikelnya yang terbit di *Cuestiones de fisioterapia* dengan DOI [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018) mengajukan sebuah model **hybrid stochastic optimization** yang menjembatani celah antara formulasi deterministik yang lazim dipakai di lantai produksi dan formulasi stokastik yang lebih kaya informasi namun jarang diimplementasikan. Pendekatan ini menggabungkan program linier integer campuran (*mixed-integer linear programming* – MILP) deterministik dengan komponen optimisasi stokastik berbasis skenario, sehingga keputusan lot sizing dan penjadwalan dapat mengantisipasi realisasi permintaan yang tidak pasti.

Secara empiris, industri cenderung menggunakan model deterministik dengan *safety stock* tinggi dan pendekatan *rolling-horizon* untuk menyerap ketidakpastian (Forel & Grunow, 2023, [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)). Namun, praktik ini menimbulkan inefisiensi: biaya persediaan membengkak, tingkat layanan pelanggan turun pada periode revisi forecast, dan utilisasi kapasitas tidak optimal. Forel dan Grunow (2023) menunjukkan bahwa penggunaan *Martingale Model of Forecast Evolution* (MMFE) yang dikombinasikan dengan *rolling-horizon planning* mampu menurunkan biaya aktual secara signifikan karena model secara eksplisit mengantisipasi evolusi ramalan permintaan. Integrasi hibrida ini—gabungan MILP penjadwalan, stokastik *two-stage recourse*, dan mekanisme *rolling-horizon* dengan MMFE—menjadi pilar utama Modul 2097 ini. Urgensi ekonominya jelas: pada industri dengan ratusan SKU dan horizon perencanaan 12–24 minggu, selisih 1–3% pada total biaya produksi-lah yang menentukan margin operasional.

## 2. Landasan Teori & Formulasi Matematis

Model hibrida yang dirumuskan Lead Researchers (2025) dibangun di atas struktur **CLSP (Capacitated Lot Sizing Problem)** dengan ekstensi stokastik dua-tahap dan komponen penjadwalan urutan. Berikut formulasi intinya.

### 2.1 Indeks, Parameter, dan Variabel Keputusan

Indeks:
- $i \in \mathcal{I}$: produk (item)
- $j \in \mathcal{J}$: work-center / mesin
- $t \in \mathcal{T}$: periode perencanaan
- $s \in \mathcal{S}$: skenario permintaan
- $k \in \mathcal{K}$: sequence position pada work-center $j$

Parameter:
- $d_{i,t}^{s}$: permintaan produk $i$ pada periode $t$ di skenario $s$
- $c_i$: biaya produksi per unit
- $h_i$: biaya *holding* per unit per periode
- $s_i$: biaya *setup* produk $i$
- $p_{ij}$: waktu proses produk $i$ di work-center $j$
- $C_j$: kapasitas waktu tersedia di work-center $j$
- $M$: bilangan besar (*big-M*)

Variabel keputusan:
- $x_{i,t}^{s} \geq 0$: jumlah produksi produk $i$ di periode $t$ pada skenario $s$
- $y_{i,t}^{s} \in \{0,1\}$: indikator setup (1 jika ada setup produk $i$ di $t$)
- $I_{i,t}^{s} \geq 0$: tingkat persediaan akhir periode $t$
- $z_{i,k,t}^{s} \in \{0,1\}$: indikator penugasan produk $i$ pada posisi urutan $k$ di work-center pada periode $t$
- $w_{i,i',k,t}^{s} \in \{0,1\}$: indikator urutan (1 jika $i$ ditempatkan sebelum $i'$ pada posisi berdekatan)

### 2.2 Fungsi Tujuan

Model meminimalkan ekspektasi total biaya yang mencakup biaya produksi, biaya setup, biaya persediaan, dan *backorder* (jika ada), dirumuskan sebagai:

$$\min \; \mathbb{E}\left[\sum_{t \in \mathcal{T}} \sum_{i \in \mathcal{I}} \left( c_i \, x_{i,t}^{s} + s_i \, y_{i,t}^{s} + h_i \, I_{i,t}^{s} + b_i \, B_{i,t}^{s} \right) \right]$$

Karena $\mathbb{E}[\cdot]$ didiskretisasi melalui himpunan skenario $\mathcal{S}$ dengan probabilitas $p_s$, bentuk operasionalnya:

$$\min \; \sum_{s \in \mathcal{S}} p_s \sum_{t \in \mathcal{T}} \sum_{i \in \mathcal{I}} \left( c_i \, x_{i,t}^{s} + s_i \, y_{i,t}^{s} + h_i \, I_{i,t}^{s} + b_i \, B_{i,t}^{s} \right)$$

### 2.3 Kendala Inti

**Kendala neraca persediaan (inventory balance):**

$$I_{i,t-1}^{s} + x_{i,t}^{s} + B_{i,t}^{s} - d_{i,t}^{s} = I_{i,t}^{s} \quad \forall i,t,s$$

**Kendala *lot-sizing* (linking setup–produksi):**

$$x_{i,t}^{s} \leq M \cdot y_{i,t}^{s} \quad \forall i,t,s$$

**Kendala kapasitas work-center dengan penjadwalan urutan:**

$$\sum_{i \in \mathcal{I}} p_{ij} \, z_{i,k,t}^{s} \leq C_j \quad \forall j,t,s$$

$$\sum_{k \in \mathcal{K}} z_{i,k,t}^{s} = y_{i,t}^{s} \quad \forall i,t,s$$

**Kendala urutan (*sequence-dependent setup*):**

$$z_{i,k,t}^{s} + z_{i',k+1,t}^{s} \leq 1 + w_{i,i',k,t}^{s} \quad \forall i,i',k,t,s$$

### 2.4 Mekanisme *Rolling-Horizon* dengan MMFE (Forel & Grunow, 2023)

Forel dan Grunow (2023) melengkapi struktur di atas dengan **Martingale Model of Forecast Evolution**. Bila permintaan aktual periode $t$ dinotasikan $\tilde{D}_t$ dan ramalan di-update tiap periode, MMFE memformalkan:

$$\tilde{D}_t = d_{t|t-1} + \sum_{\tau=t}^{T} (\varepsilon_\tau - \varepsilon_{\tau-1})$$

dengan $\varepsilon_\tau$ adalah *martingale difference sequence*. Implikasinya, *expected value of perfect information* dapat dihitung dan dimasukkan ke dalam skenario $s$. Tambahan **production recourse** memungkinkan revisi $x_{i,t}^{s}$ setelah realisasi permintaan periode awal, mencerminkan fleksibilitas *replanning* industri.

### 2.5 Dekomposisi Hibrida

Untuk tractabilitas, Lead Researchers (2025) mengusulkan dekomposisi dua tingkat:
- **Master problem (tingkat korporat):** penentuan lot sizing agregat multi-item
- **Subproblem (tingkat shop-floor):** penjadwalan detail per work-center dengan *Benders' cut* atau *Lagrangian relaxation*

Dengan $N$ skenario dan $T$ periode, kompleksitas efektif turun dari $O(2^{|\mathcal{I}| T |\mathcal{S}|})$ menjadi $O(|\mathcal{S}| \cdot f(T))$ dengan $f(T)$ polinomial terhadap horizon.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model hibrida ini di industri mengikuti SOP enam tahap berikut:

**Tahap 1 – Akuisisi Data Historis & Pemodelan Permintaan.** Kumpulkan data permintaan minimal 24