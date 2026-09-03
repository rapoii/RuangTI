# 3009 — Optimasi Stokastik Hybrid untuk Masalah Penentuan Ukuran Lot dan Penjadwalan Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Model Optimasi Stokastik Hybrid untuk Permasalahan Lot Sizing dan Scheduling
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*, Vol. 54(02), hal. 2007–2018. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)
**Sitasi Pendukung:** Alexandre Forel & Martin Grunow (2023). *Dynamic stochastic lot sizing with forecast evolution in rolling-horizon planning.* Production and Operations Management. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Permasalahan *lot sizing and scheduling* (LSS) merupakan salah satu tantangan paling mendasar namun paling kompleks dalam manajemen operasional industri manufaktur modern. Lead Researchers (2025) dalam publikasinya di *Cuestiones de fisioterapia* menyoroti bahwa pada lingkungan produksi multi-item dan multi-mesin, keputusan mengenai kuantitas produksi (*lot size*) tidak dapat dipisahkan dari keputusan urutan eksekusi (*sequence*) karena keduanya saling memengaruhi kapasitas, biaya, dan *due-date performance* (DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)). Dalam konteks industri nyata, masalah ini muncul di berbagai sektor: industri *food and beverage* dengan karakteristik *shelf-life* pendek, industri semikonduktor dengan *setup time* panjang dan biaya tinggi, industri tekstil dengan *sequence-dependent setup*, hingga industri kimia dengan proses *campaign production*.

Urgensi operasional dari permasalahan ini terletak pada kenyataan bahwa model deterministik yang selama ini digunakan oleh praktisi industri gagal menangkap tiga realitas lapangan yang krusial, yaitu (i) ketidakpastian permintaan (*demand uncertainty*) yang semakin tinggi karena volatilitas pasar pascapandemi, (ii) kebutuhan untuk melakukan revisi rencana secara periodik (*rolling-horizon replanning*), dan (iii) interdependensi antara keputusan lot sizing dengan urutan produksi pada lini terbatas. Lead Researchers (2025) menegaskan bahwa pada lingkungan *make-to-stock* dengan ratusan SKU dan puluhan mesin, mengabaikan dimensi stokastik dapat menyebabkan penumpukan *safety stock* yang tidak efisien, meningkatkan *total cost* hingga 12–18% dibandingkan solusi optimal secara stokastik (DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)).

Penelitian Forel dan Grunow (2023) yang diterbitkan di *Production and Operations Management* memberikan konteks pelengkap yang sangat relevan: meskipun pendekatan akademik yang mempertimbangkan ketidakpastian permintaan dalam lot sizing sudah tersedia sejak lama, pendekatan tersebut "jarang digunakan dalam praktik" (*seldom used in practice*). Industri secara umum mengimplementasikan model deterministik dan mengelola ketidakpastian melalui kerangka *rolling-horizon planning* dengan pembaruan prakiraan (*forecast updates*) yang sering. Forel dan Grunow (2023) menjembatani kesenjangan ini dengan mengusulkan metodologi lot sizing stokastik yang diadaptasi untuk proses *rolling-horizon* menggunakan *Martingale Model of Forecast Evolution* (MMFE) (DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)). Temuan utama mereka menunjukkan bahwa model evolusi prakiraan mampu mengurangi biaya aktual secara signifikan karena mampu mengantisipasi pembaruan prakiraan yang melekat pada perencanaan *rolling-horizon*.

Integrasi kedua literatur tersebut membentuk *research gap* yang menjadi fokus modul ini: belum tersedianya kerangka terpadu yang menggabungkan (a) formulasi lot sizing–scheduling hybrid, (b) permintaan stokastik dengan evolusi prakiraan, dan (c) fleksibilitas *recourse* dari mekanisme *rolling-horizon*. Modul 3009 membahas bagaimana model hybrid ini dirancang, diformulasikan secara matematis, dan diimplementasikan dalam praktik.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Deterministik Dasar (CLSP – *Capacitated Lot Sizing Problem*)

Formulasi dasar untuk lot sizing pada lini tunggal dengan kendala kapasitas mengikuti formulasi *mixed-integer programming* (MIP) klasik:

$$\min \; Z = \sum_{t=1}^{T} \left( s_t \, y_t + h_t \, I_t + p_t \, x_t \right) \tag{1}$$

dengan kendala:

$$I_t = I_{t-1} + x_t - d_t, \quad \forall t = 1, \ldots, T \tag{2}$$

$$x_t \leq M_t \, y_t, \quad \forall t \tag{3}$$

$$\sum_{t=1}^{T} b_t \, x_t \leq C, \quad \forall t \tag{4}$$

$$y_t \in \{0,1\}, \; x_t, I_t \geq 0 \tag{5}$$

di mana $y_t$ adalah variabel keputusan biner setup (1 jika setup dilakukan di periode $t$, 0 jika tidak), $x_t$ adalah kuantitas produksi, $I_t$ adalah *inventory level*, $d_t$ adalah permintaan, $s_t$ adalah biaya setup, $h_t$ adalah biaya simpan per unit per periode, $p_t$ adalah biaya produksi variabel per unit, $b_t$ adalah waktu produksi per unit, dan $C$ adalah kapasitas total (Lead Researchers, 2025; DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)).

### 2.2 Formulasi Hybrid Lot Sizing–Scheduling

Lead Researchers (2025) memperluas model deterministik dengan menambahkan dimensi *sequence-dependent setup* dan variabel urutan produksi $z_{ij,t}$ (bernilai 1 jika produk $i$ diikuti produk $j$ pada periode $t$). Fungsi tujuan menjadi:

$$\min \; Z = \sum_{t=1}^{T} \sum_{i=1}^{N} \left( s_i \, y_{i,t} + h_i \, I_{i,t} + p_i \, x_{i,t} \right) + \sum_{t=1}^{T} \sum_{i=1}^{N} \sum_{j=1, j \neq i}^{N} c_{ij} \, z_{ij,t} \tag{6}$$

dengan kendala tambahan:

$$\sum_{j \neq i} z_{ij,t} = y_{i,t}, \quad \forall i, t \tag{7}$$

$$\sum_{i \neq j} z_{ij,t} = y_{j,t}, \quad \forall j, t \tag{8}$$

$$\sum_{i=1}^{N} \sum_{j=1}^{N} \tau_{ij} \, z_{ij,t} \leq T_t, \quad \forall t \tag{9}$$

di mana $c_{ij}$ adalah *sequence-dependent setup cost* antara produk $i$ dan $j$, dan $\tau_{ij}$ adalah waktu transisi. Persamaan (7)–(8) menjamin konsistensi urutan (tiap setup harus memiliki prekursor dan successor), sementara (9) menjamin total waktu setup dan produksi tidak melebihi kapasitas waktu periode $t$ ($T_t$).

### 2.3 Ekstensi Stokastik dengan MMFE

Forel dan Grunow (2023) memperkenalkan model permintaan dengan struktur *forecast evolution*:

$$d_{t,\tau} = d_{t,\tau}^{f} + \varepsilon_{t,\tau}, \quad \varepsilon_{t,\tau} \sim \mathcal{N}(0, \sigma_{t,\tau}^2) \tag{10}$$

$$d_{t,\tau+1}^{f} = d_{t,\tau}^{f} + Z_{t,\tau+1} \tag{11}$$

di mana $d_{t,\tau}$ adalah permintaan aktual pada periode $t$ yang direncanakan pada horizon $\tau$, $d_{t,\tau}^{f}$ adalah prakiraan pada horizon $\tau$, dan $Z_{t,\tau+1}$ adalah *forecast revision* yang merupakan *martingale increment* dengan $\mathbb{E}[Z_{t,\tau+1} \mid \mathcal{F}_{\tau}] = 0$. Dengan demikian, prakiraan baru pada horizon $\tau+1$ adalah prakiraan lama ditambah revisi yang tidak bias (DOI: [10.1111/poms.13881](https://doi.org/10.1111/poms.13881)).

### 2.4 Fungsi Tujuan Stokastik dengan Recourse

Lead Researchers (2025) mengintegrasikan MMFE ke dalam model hybrid dengan fungsi tujuan *expected cost* berikut:

$$\min \; \mathbb{E}_{\xi} \left[ \sum_{t=1}^{T} \sum_{i=1}^{N} \left( s_i \, y_{i,t} + h_i \, I_{i,t}^{+} + p_i \, x_{i,t} \right) + \sum_{t=1}^{T} Q(I_{i,t}^{-}) \right] \tag{12}$$

di mana $I_{i,t}^{+} = \max(I_{i,t}, 0)$ adalah *inventory carry-over*, $I_{i,t}^{-} = \max(-I_{i,t}, 0)$ adalah *backorder*, dan $Q(\cdot)$ adalah fungsi penalti *backorder*. Solusi kemudian direpresentasikan sebagai *first-stage decision* $(y_{i,t}, x_{i,t})$ yang bersifat *here-and-now*, dan *second-stage recourse* $(\Delta x_{i,t}, \Delta I_{i,t})$ yang bersifat *wait-and-see* setelah realisasi permintaan $\xi$ (DOI: [10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)).

### 2.5 Dekomposisi Benders digunakan untuk komputasi:

$$Z^{*} = \min_{y,x \in \mathcal{Y}} \; c^{T} y + \mathbb{E}_{\xi} \left[ \min_{r \in \mathcal{R}(y,x,\xi)} q^{T} r \right] \tag{13}$$

dengan *cut* iteratif:

$$\theta \geq \mathbb{E}_{\xi} \left[ q^{T} r^{(k)} + \pi^{(k)T}(b - A y - B x) \right] \tag{14}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis model hybrid mengikuti prosedur operasional berikut:

**Tahap 1 — Pengumpulan Data Historis (Durasi: 2–4 minggu)**
1. Kumpulkan data permintaan 24–36 bulan terakhir untuk semua SKU pada lini produksi target.
2. Estimasi parameter MMFE: varians residual $\sigma_{t}^{2}$ dan koefisien revisi prakiraan $\phi$ menggunakan *Kalman filter* atau *exponential smoothing* state-space.
3. Identifikasi biaya setup, biaya simpan, dan *sequence-dependent setup time* $\tau_{ij}$ dari catatan produksi aktual.
4. Validasi data dengan *goodness-of-fit test* (Anderson-Darling) untuk memastikan distribusi normalitas residual (Forel & Grunow, 2023).

**Tahap 2 — Konstruksi Model Matemat.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
