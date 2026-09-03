# 1601 — Optimasi Stokastik Hibrid untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur modern menghadapi tantangan struktural yang semakin kompleks dalam perencanaan produksi, terutama ketika permintaan pasar bersifat *volatile*, permintaan pelanggan pendek, dan jaringan rantai pasok tersebar lintas yurisdiksi. Dalam konteks *Enterprise Resource Planning* (ERP) dan *Manufacturing Execution Systems* (MES), keputusan penentuan ukuran lot (*lot sizing*) dan penjadwalan (*scheduling*) merupakan dua subsistem yang secara historis diperlakukan secara terpisah, meskipun dalam praktiknya keduanya saling menentukan efisiensi biaya operasional, *service level*, dan *working capital*. Lead Researchers (2025) dalam artikelnya yang dipublikasikan di *Cuestiones de fisioterapia* dengan DOI [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018) mengajukan model hibrid yang menjembatani pemisahan tersebut dengan mengintegrasikan optimasi stokastik ke dalam kerangka keputusan lot-sizing-scheduling terpadu.

Urgensi penelitian ini didorong oleh kenyataan empiris yang dipetakan oleh Forel & Grunow (2023, DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)): meskipun pendekatan akademis yang mempertimbangkan ketidakpastian permintaan dalam lot sizing sudah mapan secara teoretis, praktik industri nyaris secara universal masih menggunakan model deterministik dengan kompensasi melalui *rolling-horizon planning* dan pembaruan prakiraan (*forecast updates*) yang sering. Kesenjangan antara riset operasi dan implementasi industri inilah yang menjadi titik masuk kontribusi paper Lead Researchers (2025), yang mengusulkan formulasi stokastik yang *native-compatible* dengan proses rolling-horizon.

Secara ekonomis, implikasi dari keputusan lot-sizing yang suboptimal sangat material. Biaya *setup* (changeover) pada lini manufaktur modern berkisar USD 500–5.000 per *changeover*, biaya *carrying inventory* dapat mencapai 20–30% dari nilai inventaris per tahun, dan *stockout* pada industri *fast-moving consumer goods* (FMCG) dapat menurunkan *service level* di bawah 95%, yang secara langsung berimplikasi pada *lost sales* dan degradasi loyalitas pelanggan. Lebih jauh, integrasi keputusan lot-sizing dengan penjadwalan *short-term* pada level *shop-floor* memungkinkan *postponement* strategi yang menurunkan *safety stock* sekaligus mempertahankan *fill rate*. Riset Lead Researchers (2025) memposisikan model hibrid stokastik sebagai enabler strategis untuk Industry 4.0, di mana data *real-time* dari sensor IoT dan platform *advanced planning* (APS) dapat di-*ingest* ke dalam model keputusan tanpa menunggu *re-optimization* penuh.

## 2. Landasan Teori & Formulasi Matematis

Model hibrid yang dirumuskan menggabungkan tiga pilar teoretis: (i) formulasi Mixed-Integer Linear Programming (MILP) untuk lot sizing, (ii) perluasan stokastik *multi-stage* untuk ketidakpastian permintaan, dan (iii) modul penjadwalan *time-indexed* untuk alokasi kapasitas *short-term*. Parameter dan variabel keputusan utama adalah sebagai berikut.

**Set dan indeks:**
- $I$: himpunan item (produk); $i \in I$
- $T$: himpunan periode perencanaan; $t \in T$
- $S$: himpunan skenario permintaan; $\omega \in S$ dengan probabilitas $\pi_\omega$
- $K$: himpunan periode *scheduling* (shift/hari); $k \in K$

**Parameter:**
- $c_i^t$: biaya produksi per unit item $i$ pada periode $t$
- $h_i^t$: biaya *holding* per unit per periode untuk item $i$
- $s_i$: biaya *setup* (changeover) untuk item $i$
- $M_i$: kapasitas produksi maksimum item $i$ per periode
- $d_{i,t}(\omega)$: permintaan item $i$ pada periode $t$ di skenario $\omega$
- $I_{i,0}$: inventaris awal item $i$
- $C_k$: kapasitas waktu pada slot penjadwalan $k$
- $p_i$: waktu proses per unit item $i$

**Variabel keputusan:**
- $x_{i,t} \in \{0,1\}$: 1 jika item $i$ di-*setup* pada periode $t$
- $q_{i,t} \geq 0$: kuantitas produksi item $i$ pada periode $t$
- $I_{i,t} \geq 0$: inventaris akhir item $i$ pada periode $t$
- $y_{i,t,k} \geq 0$: jumlah unit item $i$ yang diproduksi pada slot penjadwalan $k$ di periode $t$
- $z_{i,t,k} \in \{0,1\}$: 1 jika item $i$ diproses pada slot $k$ periode $t$

**Fungsi tujuan (minimum expected total cost):**

$$\min \; \mathbb{E}_\omega \left[ \sum_{t=1}^{T} \sum_{i=1}^{|I|} \left( s_i \, x_{i,t} + c_i^t \, q_{i,t} + h_i^t \, I_{i,t}(\omega) \right) \right]$$

**Kendala keseimbangan inventaris (per skenario):**

$$I_{i,t-1}(\omega) + q_{i,t}(\omega) - I_{i,t}(\omega) = d_{i,t}(\omega), \quad \forall i, t, \omega$$

**Kendala linking setup-produksi (big-M):**

$$q_{i,t}(\omega) \leq M_i \, x_{i,t}, \quad \forall i, t, \omega$$

**Kendala kapasitas penjadwalan (hybrid integration):**

$$\sum_{i=1}^{|I|} \sum_{k=1}^{|K|} p_i \, y_{i,t,k} \leq C_k, \quad \forall t, k$$

$$\sum_{k=1}^{|K|} y_{i,t,k} = q_{i,t}(\omega), \quad \forall i, t, \omega$$

**Recourse production (per Forel & Grunow, 2023):**
Untuk menangkap fleksibilitas *replanning*, model menambahkan variabel recourse $r_{i,t}(\omega)$ sebagai kuantitas produksi tambahan yang dapat di-*trigger* setelah realisasi permintaan $\omega$ teramati:

$$\min \; c^{\text{plan}} \cdot \mathbf{q}^{\text{plan}} + \mathbb{E}_\omega \left[ Q(\mathbf{q}^{\text{plan}}, \omega) \right]$$

dengan $Q(\mathbf{q}^{\text{plan}}, \omega) = \min \{ c^{\text{rec}} \cdot \mathbf{r}(\omega) : \mathbf{r}(\omega) \in \mathcal{R}(\mathbf{q}^{\text{plan}}, \omega) \}$.

Forel & Grunow (2023) menunjukkan bahwa formulasi recourse semacam ini merepresentasikan secara akurat dinamika *rolling-horizon* di mana keputusan awal dibuat sebelum permintaan realized, dan koreksi dilakukan setelahnya. Lebih jauh, mereka mengusulkan **Martingale Model of Forecast Evolution (MMFE)** untuk meng-*generate* skenario permintaan yang koheren dengan proses pembaruan