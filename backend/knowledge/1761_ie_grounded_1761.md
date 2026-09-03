# 1761 — Model Optimasi Stokastik Hibrida untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Penentuan ukuran lot (*lot sizing*) dan penjadwalan produksi merupakan salah satu keputusan taktis paling krusial dalam manajemen operasi manufaktur dan rantai pasok modern. Keputusan ini menentukan seberapa banyak produk yang harus diproduksi pada setiap periode horizon perencanaan, dengan mempertimbangkan trade-off antara biaya setup (persiapan mesin), biaya simpan (*holding cost*), biaya pekerja lembur, dan potensi stockout akibat ketidakpastian permintaan pasar. Dalam praktik industri kontemporer, kompleksitas permasalahan ini semakin meningkat karena tiga fenomena simultan: (i) volatilitas permintaan yang dipicu oleh fragmentasi pasar, *short product life cycle*, dan perilaku konsumen pasca-pandemi; (ii) jaringan produksi multi-stage dengan kapasitas yang heterogen; serta (iii) kebutuhan akan respons cepat terhadap disrupsi rantai pasok global.

Sebagaimana ditegaskan oleh Lead Researchers (2025) dalam *Cuestiones de fisioterapia*, permasalahan lot sizing dan scheduling yang dirumuskan secara deterministik sangat rentan terhadap *bullwhip effect* dan underestimation biaya riil ketika diterapkan pada sistem dengan permintaan yang sangat stochastic. Mereka mengusulkan sebuah **model optimasi stokastik hibrida** yang mengintegrasikan formulasi *mixed-integer programming* (MIP) berbasis *sample average approximation* (SAA) dengan algoritma metaheuristik berbasis *fix-and-optimize*, untuk menangkap dua skala keputusan secara simultan: keputusan taktis (lot size per periode) dan keputusan operasional (urutan eksekusi pada lini produksi).

Studi empiris Forel & Grunow (2023) yang diterbitkan di *Production and Operations Management* memberikan justifikasi industrial yang kuat. Mereka mendokumentasikan *gap* struktural antara pendekatan akademik dan praktik industri: hingga 2023, lebih dari 78% perusahaan manufaktur kelas dunia masih menggunakan model deterministik (economic lot sizing, MRP deterministic) yang dikombinasikan dengan *rolling-horizon planning* sebagai mekanisme adaptasi terhadap ketidakpastian. Akan tetapi, pendekatan tersebut menghasilkan rata-rata pemborosan biaya 8–14% dibandingkan dengan formulasi stochastic murni (Forel & Grunow, 2023). Inilah celah yang coba ditutup oleh model hibrida Lead Researchers (2025): mempertahankan computational tractability dan kompatibilitas dengan praktik rolling-horizon, sambil tetap menangkap stochasticity permintaan melalui recourse decisions dan forecast evolution.

Konteks aplikasi yang relevan sangat luas, mencakup industri FMCG (*fast-moving consumer goods*), komponen otomotif, semikonduktor, farmasi, dan makanan-minuman. Urgensi ekonominya dapat diukur: untuk perusahaan dengan revenue tahunan USD 500 juta dan gross margin 25%, selisih 1% pada biaya persediaan dan setup translates menjadi USD 1.25 juta profit impact per tahun. Oleh karena itu, pengembangan model lot sizing yang robust terhadap stochasticity bukan sekadar latihan akademis, melainkan kebutuhan strategis.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Deterministik Baseline (Wagner-Whitin)

Model deterministik yang menjadi *baseline* adalah varian *capacitated lot sizing problem* (CLSP) dengan struktur biaya tetap-per-setup dan biaya simpan per unit. Indeks, parameter, dan variabel keputusan dirumuskan sebagai berikut.

**Indeks:**
- $i \in I$ : item produk
- $t \in T = \{1, 2, \ldots, |T|\}$ : periode diskrit pada horizon perencanaan
- $k \in K$ : skenario permintaan (untuk ekstensi stokastik)

**Parameter:**
- $d_{it}$ : permintaan produk $i$ pada periode $t$
- $c^{p}_{it}$ : biaya produksi per unit produk $i$ di periode $t$
- $c^{h}_{it}$ : biaya simpan per unit produk $i$ dari periode $t$ ke $t+1$
- $c^{s}_{it}$ : biaya setup produk $i$ di periode $t$
- $\text{Cap}_{it}$ : kapasitas produksi tersedia
- $r_i$ : tingkat service level minimum

**Variabel keputusan:**
- $x_{it} \geq 0$ : jumlah produksi produk $i$ di periode $t$
- $s_{it} \geq 0$ : inventori akhir produk $i$ di periode $t$
- $y_{it} \in \{0,1\}$ : 1 jika setup produk $i$ dilakukan di periode $t$

**Formulasi MINLP Deterministik:**

$$
\min_{x,y,s} \sum_{i \in I} \sum_{t \in T} \left( c^{p}_{it} x_{it} + c^{s}_{it} y_{it} + c^{h}_{it} s_{it} \right)
$$

$$
\text{subject to:} \quad s_{i,t-1} + x_{it} - s_{it} = d_{it}, \quad \forall i, t
$$

$$
x_{it} \leq \text{Cap}_{it} \cdot y_{it}, \quad \forall i, t
$$

$$
x_{it}, s_{it} \geq 0, \quad y_{it} \in \{0,1\}
$$

### 2.2 Ekstensi Stokastik dengan Martingale Model of Forecast Evolution (MMFE)

Forel & Grunow (2023) memperkenalkan **MMFE**, di mana permintaan aktual $d_{it}^{\text{act}}$ direpresentasikan sebagai:

$$
d_{it}^{\text{act}} = F_{it}^{\text{fcst}} + \varepsilon_{it}, \quad \varepsilon_{it} \sim \mathcal{N}(0, \sigma_{it}^{2})
$$

dengan $F_{it}^{\text{fcst}}$ adalah ramalan yang *evolve* mengikuti *martingale*:

$$
F_{it}^{\text{fcst}} = F_{i,t-1}^{\text{fcst}} + \eta_{it}, \quad \eta_{it} \sim \mathcal{N}(0, \sigma_{\eta}^{2})
$$

### 2.3 Formulasi Stokastik Hibrida Lead Researchers (2025)

Model Lead Researchers (2025) mengintegrasikan MMFE ke dalam kerangka two-stage stochastic programming dengan recourse. Tahap pertama (*here-and-now*) menentukan setup $y_{it}$ sebelum permintaan aktual terungkap; tahap kedua (*wait-and-see*) menentukan kuantitas produksi $x_{it}(\omega)$ untuk setiap skenario $\omega \in \Omega$.

$$
\min_{y, x(\omega), s(\omega)} \sum_{i,t} c^{s}_{it} y_{it} + \mathbb{E}_{\omega} \left[ Q(y, \omega) \right]
$$

dengan recourse function:

$$
Q(y, \omega) = \min_{x(\omega), s(\omega)} \sum_{i,t} \left( c^{p}_{it} x_{it}(\omega) + c^{h}_{it} s_{it}(\omega) + c^{u}_{it} u_{it}(\omega) \right)
$$

$$
\text{s.t.:} \quad s_{i,t-1}(\omega) + x_{it}(\omega) + u_{it}(\omega) - s_{it}(\omega) = d_{it}^{\text{act}}(\omega)
$$

$$
x_{it}(\omega) \leq \text{Cap}_{it} \cdot y_{it}, \quad u_{it}(\omega) \leq M \cdot z_{it}(\omega)
$$

di mana $u_{it}(\omega)$ adalah variabel *backorder* dengan biaya penalty $c^{u}_{it}$, dan $z_{it}(\omega)$ adalah biner indikator emergency production.

### 2.4 Prosedur Solusi Hibrida

Lead Researchers (2025) mengusulkan dekomposisi dua tahap:

1. **Tahap A (Fix-and-Optimize MIP)**: Selesaikan subproblem pada *rolling window* $W = \{t, t+1, \ldots, t+W-1\}$ dengan teknik *sample average approximation* menggunakan $N$ skenario. Setup $y_{it}$ untuk periode yang "di-freeze" menjadi input tetap.

2. **Tahap B (Simulated Annealing Metaheuristic)**: Lakukan local search pada keputusan yang tidak ter-freeze dengan neighborhood structure berupa *single-item flip*, *multi-item swap*, dan *time-shift*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model hibrida di industri mengikuti SOP enam tahapan berbasis kerangka **SCOR-APICS** dan praktik terbaik *advanced planning system* (APS):

**Tahap 1 — Akuisisi Data Historis & Kalibrasi MMFE.** Kumpulkan 36–60 bulan data permintaan historis. Estimasi parameter $\sigma_{it}$ dan $\sigma_{\eta}$ menggunakan *exponential smoothing* atau GARCH(1,1). Validasi dengan *Diebold-Mariano test*.

**Tahap 2 — Pembangkitan Skenario.** Gunakan teknik Monte Carlo untuk membangkitkan $N \geq 200$ skenario permintaan. Untuk efisiensi, reduksi skenario dengan *Kantorovich distance* hingga $N' = 20$ skenario representatif.

**Tahap 3 — Penyelesaian Model.** Jalankan solver MIP (CPLEX/Gurobi) dengan time limit 300 detik untuk setiap rolling window. Jika gap optimalitas > 2%, aktifkan Tahap B metaheuristik.

**Tahap 4 — Rolling Horizon Execution.** Pada setiap periode $t$, window bergeser satu langkah. Setup yang sudah dieksekusi menjadi *frozen decision* dan tidak dapat direvisi.

**Tahap 5 — Realisasi & Recourse.** Setelah permintaan aktural observed, lakukan recourse decision untuk periode $t+1$ hingga $t+W_{\text{rec}}$ dengan computational budget 60 detik.

**Tahap 6 — Monitoring KPI.** Track parameter: *inventory turn*, *setup frequency*, *service level achieved*, *cost variance vs. forecast*. Alert triggered jika service level < 95% atau backorder > 2%.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Profil Kasus

Pertimbangkan lini produksi FMCG dengan 3 SKU (*A, B, C*) pada horizon $T = 12$ bulan. Data input:

| SKU | Permintaan Bulanan Rata-rata | Std Dev ($\sigma$) | Setup Cost ($c^s$) | Holding Cost/unit ($c^h$) |
|-----|------------------------------|--------------------|---------------------|-----------------------------|
| A   | 1.200                        | 180                | Rp 4.500.000        | Rp 350                      |
| B   | 900                          | 150                | Rp 3.800.000        | Rp 280                      |
| C   | 600                          | 120                | Rp 3.200.000        | Rp 220                      |

Kapasitas per bulan: $\text{Cap} = 2.500$ unit (semua SKU agregat).

### 4.2 Perhitungan Deterministik Baseline

Untuk SKU A dengan permintaan tetap $d_t = 1.200$ selama 12 bulan, menggunakan *Economic Order Quantity* (EOQ):

$$
Q_A^{*} = \sqrt{\frac{2 \cdot D \cdot S}{H}} = \sqrt{\frac{2 \cdot 14.400 \cdot 4.500.000}{350}} \approx 19.249 \text{ unit/tahun}
$$

Konversi ke lot bulanan: $19.249 / 12 \approx 1.604$ unit, sehingga setup dilakukan hampir setiap bulan. Total biaya deterministik SKU A:

$$
TC_A^{\text{det}} = \sqrt{2 \cdot 14.400 \cdot 4.500.000 \cdot 350} \approx \text{Rp } 213.3 \text{ juta}
$$

### 4.3 Perhitungan Stokastik dengan MMFE

Asumsikan $\sigma_{\eta} = 0.08 \cdot F_{it}^{\text{fcst}}$. Untuk SKU A dengan forecast awal 1.200:

$$
\mathbb{E}[d_A^{\text{act}}] = 1.200, \quad \text{Var}[d_A^{\text{act}}] = 180^2 + (0{,}08 \cdot 1.200)^2 = 32.400 + 9.216 = 41.616
$$

Safety stock untuk service level 95% ($z_{0.95} = 1.645$):

$$
SS_A = 1.645 \cdot \sqrt{41.616} \approx 1.645 \cdot 64{,}5 \approx 106 \text{ unit}
$$

Total biaya stokastik dengan safety stock:

$$
TC_A^{\text{stoch}} = \text{TC}_{\text{baseline}}^{\text{det}} + c^h \cdot SS_A \cdot T = 213.300.000 + 350 \cdot 106 \cdot 12 \approx 213.745.200
$$

### 4.4 Perhitungan Model Hibrida dengan Recourse

Misalkan 5 skenario permintaan (probabilitas sama, 1/5) untuk bulan ke-1 SKU A:

| Skenario | $\omega$ | $d^{\text{act