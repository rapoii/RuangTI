# 2433 — Optimasi Stokastik Hibrida untuk Lot Sizing dan Penjadwalan Produksi dalam Kerangka Rolling-Horizon

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan *lot sizing and scheduling* (LSS) merupakan salah satu keputusan operasional paling krusial dalam sistem manufaktur modern, di mana perusahaan harus menentukan secara simultan kuantitas produksi per periode (*lot size*) dan urutan eksekusi pada mesin bersama (*scheduling*) di bawah kondisi permintaan yang tidak pasti. Lead Researchers (2025) dalam *Cuestiones de fisioterapia* (DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)) menekankan bahwa pada lingkungan produksi *make-to-stock* dengan permintaan volatil, perusahaan menghadapi dilema struktural: model deterministik yang digunakan oleh praktisi industri sering kali menghasilkan keputusan *sub-optimal* karena mengabaikan evolusi permintaan masa depan, sementara model stokastik akademis jarang diadopsi karena kompleksitas komputasionalnya.

Kesenjangan antara riset akademis dan praktik industri ini secara eksplisit diinvestigasi oleh Forel & Grunow (2023, *Production and Operations Management*, DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)) yang menemukan bahwa industri umumnya mengimplementasikan model deterministik dan mengelola ketidakpastian melalui kerangka *rolling-horizon planning* (RHP) dengan pembaruan prakira (*forecast updates*) yang频繁. Urgensi ekonomis dari permasalahan ini sangat tinggi: dalam industri FMCG, elektronik konsumen, dan farmasi, biaya persediaan dan *setup* dapat mencapai 15–25% dari total biaya operasional, sementara *service level* yang rendah akibat keputusan lot sizing yang buruk menyebabkan *stockout* yang merugikan pendapatan tahunan hingga 8–12%. Pendekatan hibrida yang menggabungkan optimasi stokastik dua-tahap dengan fleksibilitas RHP muncul sebagai solusi strategis yang menjembatani ketegangan antara rigor akademis dan kelayakan implementasi praktis.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Dasar Lot Sizing Stokastik dengan MMFE

Forel & Grunow (2023) memperkenalkan *Martingale Model of Forecast Evolution* (MMFE) untuk menangkap dinamika pembaruan prakira dalam RHP. Dalam MMFE, permintaan di periode $t$ yang diobservasi pada waktu $\tau \leq t$ memenuhi:

$$\tilde{D}_{t|\tau} = \tilde{D}_{t|\tau-1} + \tilde{\varepsilon}_{t|\tau}, \quad \tau \leq t$$

dengan $\tilde{\varepsilon}_{t|\tau}$ adalah *martingale difference sequence* (E$[\tilde{\varepsilon}_{t|\tau}] = 0$) yang merepresentasikan *shock* informasi baru. Variansi bersyarat mengikuti pola *information decay*:

$$\text{Var}(\tilde{\varepsilon}_{t|\tau}) = \sigma^2_{t,\tau} = v \cdot (t-\tau)^{\alpha}, \quad 0 < \alpha < 2$$

dengan $v$ adalah koefisien variansi dan $\alpha$ adalah parameter *decay* yang mengukur seberapa cepat informasi baru terdisipasi.

### 2.2 Model Hibrida Dua-Tahap (Two-Stage Stochastic Programming)

Formulasi hibrida yang diadaptasi dari Lead Researchers (2025) untuk LSS dengan $I$ produk dan $T$ periode perencanaan adalah:

$$\min_{x,y,s} \; \mathbb{E}_{\xi}\left[\sum_{i=1}^{I}\sum_{t=1}^{T}\left(c^{p}_{i}x_{it} + c^{h}_{i}s_{it} + c^{s}_{iy_{i,t-1},y_{it}}\right)\right]$$

terhadap kendala:

$$\sum_{i=1}^{I} a_{i}x_{it} + \sum_{i=1}^{I}\sum_{j=1}^{I} st_{ij}y_{jt} \leq C_t \quad \text{(kapasitas)}$$

$$s_{i,t-1} + x_{it} - s_{it} = \tilde{D}_{it} \quad \text{(keseimbangan persediaan)}$$

$$y_{it} \leq x_{it} \leq M \cdot y_{it} \quad \text{(link setup-produksi)}$$

$$\sum_{j=1}^{I}y_{jt} = 1 \quad \forall t \quad \text{(sequence constraint)}$$

di mana $x_{it}$ adalah kuantitas produksi, $s_{it}$ adalah level persediaan, $y_{it} \in \{0,1\}$ adalah variabel biner *setup*, $c^{p}_{i}$, $c^{h}_{i}$, $c^{s}_{ij}$ berturut-turut adalah biaya produksi, biaya simpan, dan biaya *sequence-dependent setup*, $\tilde{D}_{it}$ adalah permintaan stokastik, $C_t$ adalah kapasitas tersedia, dan $M$ adalah *big-M*.

### 2.3 Recourse Function untuk Fleksibilitas Rolling-Horizon

Komponen hibrida yang krusial adalah fungsi *recourse* yang memungkinkan keputusan korektif setelah permintaan ter-revealisasi:

$$Q(x, \tilde{D}) = \min_{x',s'} \sum_{t=1}^{T}\sum_{i=1}^{I}\left(c^{+}_{i}\Delta^{+}_{it} + c^{-}_{i}\Delta^{-}_{it} + c^{h}_{i}s'_{it}\right)$$

dengan $\Delta^{+}_{it}$ dan $\Delta^{-}_{it}$ adalah variabel deviasi positif/negatif untuk *overtime* atau *backorder* sebagai respons terhadap evolusi prakira, dan $c^{+}_{i}$, $c^{-}_{i}$ adalah biaya unit untuk setiap mode respons.

### 2.4 Disretisasi Skenario dan Decomposition

Mengingat kompleksitas komputasional, himpunan skenario $\xi = \{\tilde{D}_{1},...,\tilde{D}_{T}\}$ didiskretisasi menjadi $S$ skenario dengan probabilitas $p_s$, diselesaikan melalui *Benders Decomposition*:

$$\min_{x,y} \; c^T x + \sum_{s=1}^{S}p_s \cdot Q(x, \xi_s)$$

di mana *master problem* menentukan keputusan *here-and-now* $(x,y)$ dan *subproblem* menentukan keputusan *wait-and-see* $(x',s')$ untuk setiap skenario.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi pendekatan hibrida ini mengikuti SOP lima-tahap yang selaras dengan praktik RHP industri:

**Tahap 1 — Inisialisasi & Pengumpulan Data Historis.** Kumpulkan time series permintaan minimal 24–36 bulan, identifikasi parameter MMFE melalui estimasi likelihood atau metode *exponential smoothing* dekomposisi. Hitung $v$ dan $\alpha$ dengan validasi *out-of-sample*.

**Tahap 2 — Generasi Skenario.** Gunakan *scenario tree* berdasarkan MMFE: untuk horizon $T$ dengan $K$ pembaruan prakira, bangkitkan $K^{T-1}$ skenario, kemudian reduksi menggunakan *forward selection* atau *k-means clustering* menjadi $S = 50-200$ skenario representatif dengan bobot probabilitas $p_s$.

**Tahap 3 — Optimasi Hibrida.** Selesaikan *master problem* (MILP) menggunakan solver CPLEX/Gurobi dengan *Benders cuts*, batasi waktu komputasi $\leq 15$ menit sesuai SLA industri. Untuk horizon panjang, terapkan *rolling-horizon* dengan *look-ahead* 6–8 periode dan *frozen window* 2 periode pertama.

**Tahap 4 — Implementasi Keputusan Here-and-Now.** Eksekusi keputusan lot size dan *setup sequence* untuk *frozen window*. Tunda keputusan periode selanjutnya menunggu pembaruan prakira aktual.

**Tahap 5 — Pembaruan & Recourse.** Setiap periode, integrasikan permintaan aktual sebagai *realization* baru, regenerasi *scenario tree* dengan informasi terbaru, dan aktifkan mekanisme *recourse* (overtime, subcontracting, expedite shipping) untuk menutup gap antara rencana dan realisasi.

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│ Data Historis & │───▶│ Estimasi MMFE    │───▶│ Generasi        │
│ ERP Integration │    │ (v, α)           │    │ Scenario Tree   │
└─────────────────┘    └──────────────────┘    └─────────────────┘
                                                        │
┌─────────────────┐    ┌──────────────────┐    ┌────────▼────────┐
│ Eksekusi Frozen │◀───│ Benders Decom-   │◀───│ Master Problem  │
│ Window (2 peri- │    │ position Iterasi │    │ (MILP Here-and- │
│ ode)            │    │ ≤15 menit        │    │ Now)            │
└─────────────────┘    └──────────────────┘    └─────────────────┘
        │
        ▼
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│ Permintaan Aktu-│───▶│ Update MMFE &    │───▶│ Recourse Action │
│ al Terealisasi  │    │ Regenerasi Tree  │    │ (Overtime/Sub)  │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus: Pabrik FMCG dengan 3 Produk, Horizon 6 Periode**

Misalkan pabrik memproduksi 3 SKU (Produk A, B, C) pada lini bersama dengan kapasitas $C_t = 100$ unit/period untuk semua $t = 1,...,6$. Data biaya:

| Parameter | Produk A | Produk B | Produk C |
|-----------|----------|----------|----------|
| $c^{p}_{i}$ (Rp/unit) | 50.000 | 70.000 | 60.000 |
| $c^{h}_{i}$ (Rp/unit) | 5.000 | 8.000 | 6.000 |
| Permintaan base | 30 | 25 | 20 |

**Matriks Sequence-Dependent Setup:**

| Dari\Ke | A | B | C |
|---------|---|----|-----|
| A | 0 | 150.000 | 200.000 |
| B | 180.000 | 0 | 160.000 |
| C | 220.000 | 170.000 | 0 |

**Estimasi MMFE:** Dari data historis, diperoleh $v = 4{,}5$ dan $\alpha = 1{,}2$. Variansi evolusi prakira pada periode 6 dengan *forecast made at* $\tau = 1$: $\sigma^2_{6,1} = 4{,}5 \cdot (6-1)^{1{,}2} = 33{,}9$, sehingga $\sigma_{6,1} \approx 5{,}82$ unit.

**Perhitungan Expected Cost — Pendekatan Deterministik (Baseline):**

Dengan prakira rata-rata $\bar{D}_{i,t}$ = permintaan base, solusi deterministik menghasilkan jadwal optimal A→B→C per periode dengan biaya total:

$$Z_{det} = \sum_{t=1}^{6}\left[\sum_{i} c^{p}_{i}\bar{x}_{it} + \sum_{i}c^{h}_{i}\bar{s}_{it} + \sum_{i}c^{s}_{i,\pi(i)}\right]$$

Dengan produksi tepat sesuai rata-rata dan urutan A→B→C berulang, biaya produksi = $6 \cdot (30+25+20)\cdot$ avg cost ≈ Rp 26.100.000, biaya setup = $6 \cdot 3 \cdot$ avg setup ≈ Rp 4.260.000, tanpa inventory holding karena *just-in-time*. **Total deterministik ≈ Rp 30.360.000**.

**Perhitungan Expected Cost — Model Hibrida dengan MMFE:**

Memperhitungkan variansi prakira, model hibrida menghasilkan keputusan *here-and-now* yang lebih konservatif dengan *safety stock*:

$$s^{safe}_{it} = z_{\alpha} \cdot \sigma_{it|\tau} \cdot \sqrt{L}$$

untuk $z_{0{,}95} =