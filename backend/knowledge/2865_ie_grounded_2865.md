# 2865 — Model Optimasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de Fisioterapia*, Vol. 54(02), hlm. 2007–2018. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Forel, A., & Grunow, M. (2023). Dynamic stochastic lot sizing with forecast evolution in rolling-horizon planning. *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Masalah penentuan ukuran lot (*lot sizing*) dan penjadwalan produksi merupakan salah satu keputusan taktis-operasional paling krusial dalam rantai pasok manufaktur modern. Keputusan ini menentukan besarnya biaya persiapan (*setup cost*), biaya persediaan (*holding cost*), biaya kekurangan persediaan (*backorder cost*), dan tingkat layanan pelanggan (*service level*). Pada lingkungan permintaan yang volatil — seperti industri komponen otomotif, farmasi, FMCG, dan semikonduktor — penggunaan model deterministik seperti *Wagner-Whitin* atau *Silver-Meal* terbukti menghasilkan rencana produksi yang kaku (*rigid*) dan sering kali suboptimal ketika realisasi permintaan aktual menyimpang dari ramalan awal.

Lead Researchers (2025) menyoroti urgensi pengembangan model **hybrid stochastic optimization** yang mampu mengintegrasikan tiga elemen secara simultan: (1) ketidakpastian permintaan melalui skenario stokastik, (2) keputusan recourse ketika informasi permintaan terungkap, dan (3) mekanisme penjadwalan *rolling* yang mencerminkan praktik ERP/MRP modern. Studi tersebut memposisikan riset pada kesenjangan (*research gap*) yang sebelumnya diidentifikasi oleh Forel & Grunow (2023) dalam *Production and Operations Management*, yang menemukan secara empiris bahwa "pendekatan akademis yang mempertimbangkan ketidakpastian permintaan dalam lot sizing jarang digunakan di praktik industri; industri umumnya mengimplementasikan model deterministik dan mengelola ketidakpastian melalui kerangka rolling-horizon dengan pembaruan ramalan频繁". Forel & Grunow (2023) menunjukkan bahwa model *Martingale Model of Forecast Evolution* (MMFE) dapat mereduksi biaya aktual secara signifikan melalui antisipasi terhadap pembaruan ramalan dalam lot sizing stokastik.

Konteks industri yang melatarbelakangi topik ini dapat diamati pada lini produksi manufaktur di mana *make-to-stock* dan *make-to-order* bertemu (*hybrid MTS/MTO*). Fluktuasi permintaan musiman, ketidakpastian *lead time* pemasok, serta fragmentasi pesanan pelanggan menuntut pendekatan yang tidak hanya mengoptimalkan satu periode keputusan melainkan mampu mengadaptasi rencana seiring terungkapnya informasi baru. Oleh karena itu, integrasi antara optimasi stokastik dua-tahap (*two-stage stochastic programming*), *rolling horizon*, dan penjadwalan urutan produksi (*sequencing*) menjadi pilar utama dalam modul ini.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Deterministik Dasar (Wagner-Whitin)

Untuk produk tunggal pada horizon $T$ periode, model dasar lot sizing deterministik diformulasikan sebagai:

$$\min_{q_t, y_t} Z = \sum_{t=1}^{T} \left( s \cdot y_t + h \cdot I_t \right)$$

dengan batasan:

$$I_t = I_{t-1} + q_t - d_t, \quad \forall t = 1,\dots,T$$
$$q_t \leq M \cdot y_t, \quad y_t \in \{0,1\}, \quad q_t, I_t \geq 0$$

di mana $s$ adalah biaya setup, $h$ biaya *holding*, $q_t$ kuantitas produksi, $y_t$ keputusan biner setup, $I_t$ inventaris akhir periode, $d_t$ permintaan deterministik, dan $M$ kapasitas produksi maksimum.

### 2.2 Ekstensi Multi-Produk dan Penjadwalan (CLSP)

Untuk $I$ produk pada $T$ periode dengan kendala kapasitas $C_t$ per periode, masalah *Capacitated Lot Sizing Problem* (CLSP) menjadi:

$$\min \sum_{i=1}^{I} \sum_{t=1}^{T} \left( s_i \cdot y_{it} + h_i \cdot I_{it} \right)$$

$$\text{s.t.} \quad I_{it} = I_{i,t-1} + q_{it} - d_{it}, \quad \forall i,t$$

$$\sum_{i=1}^{I} \tau_i \cdot q_{it} \leq C_t, \quad \forall t$$

$$q_{it} \leq M_i \cdot y_{it}, \quad y_{it} \in \{0,1\}, \quad q_{it}, I_{it} \geq 0$$

di mana $\tau_i$ adalah waktu proses per unit produk $i$.

### 2.3 Programasi Stokastik Dua-Tahap

Lead Researchers (2025) mengusulkan formulasi dua-tahap yang menangani permintaan sebagai variabel acak $\xi = (d_{1}, d_{2}, \dots, d_{T})$ dengan distribusi probabilitas diskret pada himpunan skenario $S$:

$$\min_{y, q} \; \mathbf{c}^T \mathbf{y} + \mathbb{E}_{\xi}\left[ Q(\mathbf{y}, \xi) \right]$$

$$Q(\mathbf{y}, \xi) = \min_{q^{s}, I^{s}} \sum_{s \in S} p^{s} \sum_{i,t} \left( h_i I_{it}^{s} + b_i B_{it}^{s} \right)$$

$$\text{s.t.} \quad I_{it}^{s} - B_{it}^{s} = I_{i,t-1}^{s} + q_{it}^{s} - d_{it}^{s}, \quad \forall i,t,s$$

$$q_{it}^{s} \leq M_i y_{it}, \quad y_{it} \in \{0,1\}$$

$$\sum_{i} \tau_i q_{it}^{s} \leq C_t, \quad \forall t, s$$

di mana $b_i$ adalah biaya *backorder*, $p^s$ probabilitas skenario $s$, dan $q_{it}^{s}$ adalah keputusan recourse setelah skenario terungkap. Batasan *non-anticipativity* memastikan keputusan tingkat pertama ($y_{it}$) tidak bergantung pada realisasi skenario masa depan.

### 2.4 Martingale Model of Forecast Evolution (MMFE)

Forel & Grunow (2023) mengembangkan model MMFE untuk menangkap dinamika pembaruan ramalan dalam horizon bergulir:

$$D_{t+1} = D_t + \varepsilon_{t+1}$$

di mana $\varepsilon_{t+1}$ adalah *martingale difference sequence* dengan $\mathbb{E}[\varepsilon_{t+1} | \mathcal{F}_t] = 0$. Varian inovasi ramalan memenuhi:

$$\text{Var}(\varepsilon_{t+1} | \mathcal{F}_t) = \sigma^2 \cdot \mathbb{E}[D_t]^\gamma$$

dengan $\gamma \in [0, 2]$ menangkap efek heteroskedastik (biasanya $\gamma \approx 1{,}5$ untuk permintaan industri). Struktur ini memungkinkan konstruksi skenario yang *konsisten* dengan praktik rolling planning.

### 2.5 Arsitektur Hibrida (Lead Researchers, 2025)

Lead researchers (2025) menggabungkan ketiga pendekatan di atas menjadi model hibrida:

$$\min \; \underbrace{\sum_{i,t} s_i y_{it}}_{\text{setup deterministik}} + \underbrace{\mathbb{E}_\xi\left[ \min \sum_{i,t} (h_i I_{it}^{\xi} + b_i B_{it}^{\xi}) \right]}_{\text{recourse stokastik}}$$

dengan *rolling horizon* $H$ yang diperbarui setiap periode melalui mekanisme:

$$\Pi_{t+1} = \arg\min \{ f(\mathbf{y}, \mathbf{q}) \mid \text{info s.d. periode } t \}$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri mengikuti SOP 7-tahap berikut, yang selaras dengan kerangka SCOR dan ISO 9001:2015:

**Tahap 1 — Karakterisasi Permintaan.** Kumpulkan data historis 24–36 bulan, uji stasioneritas (ADF test), identifikasi distribusi marginal dan dependensi temporal. Estimasi parameter MMFE $\sigma^2$ dan $\gamma$ melalui *Maximum Likelihood*.

**Tahap 2 — Generasi Skenario.** Gunakan Monte Carlo atau *moment matching* (Rubinstein-Shapiro) untuk membangun $N$ skenario (umumnya $N = 50$–$200$). Reduksi skenario melalui *K-means clustering* pada matriks jarak Wasserstein.

**Tahap 3 — Formulasi Model.** Bangun MILP dua-tahap menggunakan alat seperti Gurobi/CPLEX atau formulasi Dantzig-Wolfe decomposition untuk efisiensi komputasi.

**Tahap 4 — Kalibrasi & Validasi.** *Backtesting* dengan *rolling window* historis; bandingkan MAPE, *tracking signal*, dan biaya realised.

**Tahap 5 — Integrasi ERP/MES.** Sambungkan dengan modul MRP/ERP (SAP PP/DS, Oracle ASCP) melalui API; implementasikan *event-driven rescheduling*.

**Tahap 6 — Pelaksanaan Rolling.** Setiap periode $t$, selesaikan ulang optimasi dengan horizon $H = 6$–$12$ periode, dengan *frozen period* = 1 (implementasi keputusan periode $t$).

**Tahap