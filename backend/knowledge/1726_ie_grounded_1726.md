# 1726 — Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*. Peer-Reviewed Journal (SSRN). DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*. Peer-Reviewed Journal (SSRN). DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan merupakan salah satu sektor *asset-heavy* dengan karakteristik unik berupa tingkat kapitalisasi yang sangat tinggi, regulasi keselamatan yang ketat, serta paparan langsung terhadap degradasi kinerja siklus-hidup (*life-cycle performance degradation*) yang bersifat non-linear. Menurut Hang Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)), dalam konteks Maintenance, Repair, and Overhaul (MRO) penerbangan, kebijakan pemeliharaan konvensional cenderung mengadopsi struktur pemeriksaan bertingkat A/B/C/D yang sudah menjadi standar industri global. Struktur ini mencakup *A-check* (rutin berkala pendek, interval mingguan hingga bulanan), *B-check* (pemeliharaan ringan, interval 3–6 bulan), *C-check* (inspeksi besar parsial, interval 20–24 bulan), dan *D-check* (overhaul penuh atau *heavy maintenance visit*, interval 6–12 tahun) yang memerlukan pesawat untuk dibongkar hampir sepenuhnya (*full refurbishment*). Kompleksitas hierarki ini ditambah dengan kenyataan bahwa degradasi komponen struktural, mesin, avionik, dan sistem hidrolik tidak mengikuti pola linear, melainkan kurva *bathtub* yang memerlukan model degradasi non-linear.

Urgensi pengembangan *Reliability-Centered Maintenance* (RCM) dalam konteks MRO penerbangan didorong oleh tiga faktor ekonomi-teknis utama. Pertama, biaya satu jam *Aircraft on Ground* (AOG) bagi operator komersial dapat mencapai USD 100.000–150.000 per jam karena hilangnya pendapatan tiket, kompensasi penumpang, dan posisi slot bandara. Kedua, menurut Zhou (2024, DOI: [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)), penentuan interval D-check yang suboptimal akan menyebabkan *shop visit* yang terlalu dini (memboroskan kapasitas hanggar MRO) atau terlalu lambat (meningkatkan risiko kegagalan in-service yang berdampak pada keselamatan). Ketiga, pengintegrasian *partial refurbishment* ke dalam fase *mature-run* (masa operasional成熟期, yaitu periode setelah beberapa siklus overhaul penuh ketika tingkat degradasi mulai terakumulasi) menjadi strategi yang belum sepenuhnya dieksplorasi dalam literatur RCM klasik. Paper Zhou (2024) memperkenalkan kerangka kerja MRO yang menggabungkan siklus D-check penuh dengan partial refurbishment, dengan tujuan memaksimalkan ketersediaan armada (*fleet availability*) yang didefinisikan sebagai rasio waktu operasional terhadap total waktu kalender termasuk waktu maintenance.

Konteks global menunjukkan bahwa pasar MRO penerbangan dunia bernilai lebih dari USD 100 miliar per tahun (pasca-pandemi), dan operator berupaya keras menekan *maintenance cost per flight hour* (MCPFH) sambil mempertahankan tingkat *dispatch reliability* di atas 99%. Oleh karena itu, formulasi model ketersediaan yang optimal, dengan pembuktian eksistensi *optimum value* pada fungsi objektif, menjadi kontribusi ilmiah yang bernilai tinggi bagi komunitas Teknik Industri dan rekayasa sistem.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Ketersediaan Siklik dengan Hierarki A/B/C/D

Ketersediaan sesaat (*instantaneous availability*) didefinisikan sebagai probabilitas sistem berfungsi pada waktu $t$, yang dalam konteks MRO penerbangan dapat diformulasikan sebagai:

$$A(t) = \frac{\mu}{\lambda(t) + \mu}$$

di mana $\lambda(t)$ adalah laju kegagalan (failure rate) yang bergantung waktu sesuai kurva degradasi komponen, dan $\mu$ adalah laju perbaikan (*repair rate*, dengan $\mu = 1/MTTR$).

Ketersediaan rata-rata jangka panjang (*steady-state availability*) untuk sistem dengan siklus pemeliharaan periodik $T$ diberikan oleh:

$$\bar{A}(T) = \frac{1}{T} \int_0^T A(t)\, dt$$

### 2.2 Model Degradasi Non-Linear Berbasis Distribusi Weibull

Untuk menangkap karakteristik degradasi non-linear pada komponen pesawat, Zhou (2024) menggunakan distribusi Weibull dengan fungsi bahaya (*hazard function*):

$$\lambda(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}$$

di mana $\beta$ adalah *shape parameter* ($\beta > 1$ menandakan *wear-out* dominan), $\eta$ adalah *scale parameter* (characteristic life), dan $t$ adalah usia komponen. Distribusi kumulatif kegagalan menjadi:

$$F(t) = 1 - e^{-(t/\eta)^{\beta}}$$

dengan fungsi reliabilitas $R(t) = e^{-(t/\eta)^{\beta}}$.

### 2.3 Formulasi Ketersediaan dengan Hierarki Pemeliharaan

Untuk kebijakan A/B/C/D dengan interval $T_A, T_B, T_C, T_D$ dan *partial refurbishment* pada fase mature-run, model ketersediaan armada total menjadi:

$$A_{fleet}(T) = \prod_{i \in \{A,B,C,D\}} \left[ \frac{T_i - \tau_i^{prev}}{T_i} \right] \cdot \left[ 1 - \frac{\tau_{partial}}{T_{D}} \right]$$

di mana $\tau_i^{prev}$ adalah *preventive maintenance downtime* untuk check tingkat-$i$, dan $\tau_{partial}$ adalah waktu partial refurbishment yang dilakukan di antara dua D-check.

### 2.4 Fungsi Objektif Optimasi: Maksimasi Ketersediaan

Zhou (2024) membuktikan eksistensi nilai optimal $T^*$ untuk masalah:

$$\max_{T \in \mathbb{R}^+} \quad A_{fleet}(T) = \max_{T \in \mathbb{R}^+} \left[ \frac{T_{operasional}(T)}{T_{operasional}(T) + T_{maintenance}(T)} \right]$$

dengan *first-order condition* (syarat perlu optimum):

$$\frac{dA_{fleet}}{dT} = 0 \implies T_{maintenance}(T^*) \cdot \frac{dT_{operasional}}{dT}\bigg|_{T^*} = T_{operasional}(T^*) \cdot \frac{dT_{maintenance}}{dT}\bigg|_{T^*}$$

dan *second-order condition* (kecukupan):

$$\frac{d^2 A_{fleet}}{dT^2}\bigg|_{T^*} < 0$$

### 2.5 Model Biaya Siklus-Hidup Terintegrasi

Ketersediaan optimal juga harus diseimbangkan dengan *Life Cycle Cost* (LCC):

$$LCC(T) = C_0 + \sum_{n=1}^{N(T)} \left[ C_{prev}(n) + C_{corr}(n) \cdot P_f(n) \right]$$

di mana $C_0$ adalah biaya akuisisi aset, $C_{prev}(n)$ adalah biaya pemeliharaan preventif siklus ke-$n$, $C_{corr}(n)$ adalah biaya korektif, dan $P_f(n)$ adalah probabilitas kegagalan pada siklus tersebut.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Implementasi RCM Hirarkis

Implementasi kebijakan pemeliharaan berbasis RCM mengikuti kerangka sistematis sebagai berikut:

**Tahap 1 — Identifikasi Fungsi Kritis Sistem (FMEA-Based)**
1. Dekomposisi arsitektur pesawat ke dalam *ATA Chapters* (Air Transport Association).
2. Penentuan *criticality index* untuk setiap komponen: $CI = \text{severity} \times \text{probability} \times \text{detectability}$.
3. Klasifikasi komponen ke dalam kategori *safety-critical*, *mission-critical*, dan *economic-critical*.

**Tahap 2 — Pemodelan Degradasi (Reliability Modeling)**
1. Pengumpulan data historis *in-service* dari *Aircraft Health Monitoring* (AHM) dan *Continuous Airworthiness Maintenance Program* (CAMP).
2. Estimasi parameter Weibull $(\hat{\beta}, \hat{\eta})$ menggunakan *Maximum Likelihood Estimation* (MLE):

$$\hat{\eta}, \hat{\beta} = \arg\max_{\eta, \beta} \sum_{i=1}^{n} \left[ \log\beta - \beta\log\eta + (\beta-1)\log t_i - \left(\frac{t_i}{\eta}\right)^{\beta} \right]$$

3. Validasi model dengan *Kolmogorov-Smirnov test* pada level signifikansi $\alpha = 0.05$.

**Tahap 3 — Optimasi Interval Pemeliharaan**
1. Formulasi *objective function* ketersediaan seperti pada Persamaan di Bagian 2.4.
2. Penerapan *algoritma optimasi*: untuk kasus 1D dapat digunakan *golden-section search* atau *Newton-Raphson*; untuk kasus multi-variabel digunakan *Sequential Quadratic Programming* (SQP) atau *Genetic Algorithm*.
3. Pembuktian eksistensi global optimum melalui analisis *convexity* dan *Kuhn-Tucker conditions*.

**Tahap 4 — Integrasi Partial Refurbishment**
1. Identifikasi subsistem yang dapat di-refurbish secara parsial (misalnya, kabin, avionik lini-tengah, komponen struktural sayap).
2. Penjadwalan *partial refurbishment* pada interval $k \cdot T_C$ di mana $k \in \{1, 2, ..., N_C-1\}$ dan $N_C$ adalah jumlah C-check antar dua D-check.
3. Validasi trade-off: waktu hangar yang dihemat vs. risiko *rework* tambahan.

**Tahap 5 — Monitoring Berkelanjutan (Closed-Loop Control)**
1. Implementasi *feedback loop* berbasis sensor IoT dan *predictive maintenance analytics*.
2. Pembaruan parameter model secara *bayesian* ketika data baru tersedia:

$$p(\theta | \mathcal{D}_{new}) \propto p(\mathcal{D}_{new} | \theta) \cdot p(\theta | \mathcal{D}_{old})$$

### 3.2 Diagram Alir SOP Pemeliharaan Hirarkis

```
[Data AHM & CAMP] 
       ↓
[Estimasi Parameter Weibull] → (β̂, η̂)
       ↓
[Hitung CI per Komponen]
       ↓
[Klasifikasi Kritisitas] → (Safety/Mission/Economic)
       ↓
[Formulasi A_fleet(T) & LCC(T)]
       ↓
[Optimasi Multi-Objektif] → (T*_A, T*_B, T*_C, T*_D)
       ↓
[Penjadwalan Partial Refurbishment]
       ↓
[Implementasi & Monitoring] → [Bayesian Update Loop]
```

### 3.3 Standar Acuan

Implementasi harus sesuai dengan standar internasional: **SAE JA1011/1012** (RCM evaluation criteria), **MSG-3** (Maintenance Steering Group - 3 untuk pesawat komersial), **EASA Part-M/Part-145** untuk regulator Eropa, dan **FAR Part 121.367** untuk regulator FAA Amerika Serikat.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input Kasus Hipotetis (Fascia Narrow-Body Fleet)

Misalkan sebuah operator narrow-body mengelola armada Airbus A320 dengan parameter sebagai berikut:

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Usia armada rata-rata | 8 | tahun |
| Interval A-check ($T_A$) | 600 | flight hours (FH) |
| Interval B-check ($T_B$) | 3.000 | FH |
| Interval C-check ($T_C$) | 18.000 | FH |
| Interval D-check ($T_D$) | 36.000 | FH |
| Downtime A-check ($\tau_A$) | 24 | jam |
| Downtime B-check ($\tau_B$) | 96 | jam |
| Downtime C-check ($\tau_C$) | 720 | jam (30 hari) |
| Downtime D-check ($\tau_D$) | 4.320 | jam (180 hari) |
| Downtime partial refurbishment ($\tau_p$) | 360 | jam |
| Parameter Weibull (mesin) |