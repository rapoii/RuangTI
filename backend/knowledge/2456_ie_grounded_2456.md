# 2456 — Analisis Beban Kerja Mental Operator Logistik & Pergudangan Menggunakan Metode NASA-TLX dan Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan ekonomi digital di Asia Tenggara, khususnya Indonesia, telah mendorong ekspansi masif pada sektor *e-commerce logistics* atau yang umum disebut industri *last-mile delivery*. Shopee sebagai salah satu platform *marketplace* terbesar di kawasan ini mengandalkan ribuan mitra kurir—secara internal disebut Shopee Express Partner (SPX Partner)—yang beroperasi sebagai *gig worker* dengan target pengiriman harian yang ketat, variabilitas permintaan musiman, serta paparan langsung terhadap tekanan pelanggan. Dalam konteks inilah, Rafi dan Putra (2024, DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)) melakukan studi pionir mengenai **beban kerja mental (mental workload)** operator pengiriman sebagai variabel kritis yang menentukan keselamatan kerja, kualitas layanan, dan *turnover* tenaga kerja di sektor *crowdsourced logistics*.

Permasalahan fundamental yang diangkat adalah tingginya angka kelelahan kognitif (*cognitive fatigue*) yang dialami kurir mitra Shopee Express, terutama pada periode puncak seperti *flash sale* (12.12, Harbolnas) dan musim liburan. Beban kerja mental tidak hanya berdampak pada kelelahan subjektif, melainkan juga meningkatkan risiko kecelakaan kerja, kesalahan *sorting*, keterlambatan *delivery*, serta menurunkan *service level agreement* (SLA) yang menjadi indikator operasional utama (Rafi & Putra, 2024). Studi ini menjadi semakin relevan ketika pandemi COVID-19 mengubah perilaku konsumen secara permanen—volume paket harian nasional melonjak lebih dari 30% secara *year-on-year*, sementara jumlah armada kurir tidak bertambah secara proporsional.

Kompleksitas beban kerja kurir tidak hanya bersifat fisik (mengangkat paket, mengendarai kendaraan dalam waktu lama), tetapi sangat dipengaruhi oleh dimensi mental seperti: (1) kepadatan rute, (2) tekanan *deadline* pengiriman, (3) kompleksitas *address-finding* di kawasan urban tanpa alamat geolokasi yang jelas, dan (4) interaksi dengan pelanggan yang memiliki ekspektasi waktu singkat. Rafi dan Putra (2024) menyatakan bahwa "pengukuran beban kerja secara holistik memerlukan instrumen multidimensi yang mampu menangkap variabel kognitif dan emosional secara simultan". Untuk itulah NASA-TLX (*NASA Task Load Index*) dipilih sebagai instrumen utama, karena mampu mengkuantifikasi beban kerja dalam enam dimensi terstruktur yang akan dibahas pada bagian landasan teori.

Studi kedua oleh Aditya dan Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) melengkapi kerangka analisis dengan mengintegrasikan metode **Work Sampling** ke dalam NASA-TLX untuk mengukur beban kerja operator gudang (*warehouse operators*). Pendekatan hybrid ini penting karena beban kerja di gudang memiliki karakteristik berbeda—berbasis *station-based* dengan siklus repetitif (picking, packing, stowing)—sehingga membutuhkan observasi aktivitas secara probabilistik. Kedua paper ini secara kolektif membentuk landasan metodologis bagi praktisi teknik industri untuk melakukan *workload engineering* secara komprehensif, mulai dari lini hulu (*warehouse*) hingga lini hilir (*last-mile delivery*).

Urgensi penerapan *ergonomic workload analysis* di industri ini juga didorong oleh regulasi Kementerian Ketenagakerjaan RI melalui Permenaker No. 5 Tahun 2018 tentang Keselamatan dan Kesehatan Kerja, yang mewajibkan perusahaan untuk melakukan identifikasi dan pengendalian kelelahan kerja. Tanpa pengukuran yang valid, intervensi seperti rotasi shift, redistribusi rute, atau penambahan *buffer time* hanya akan bersifat *trial-and-error* tanpa dasar empiris yang terukur.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Dimensi NASA-TLX (Hart & Staveland, 1988; diaplikasikan oleh Rafi & Putra, 2024)

NASA-TLX adalah instrumen multidimensi yang dikembangkan oleh *Human Performance Group* NASA Ames Research Center untuk mengukur *subjective workload* operator. Instrumen ini mengukur beban kerja pada **enam subskala** yang masing-masing dievaluasi menggunakan *Likert scale* 0–100 (0 = sangat rendah, 100 = sangat tinggi, kecuali subskala *Performance* yang bersifat terbalik: 0 = sukses sempurna, 100 = kegagalan total):

| Simbol | Dimensi | Deskripsi Operasional |
|---|---|---|
| $\text{MD}$ | *Mental Demand* | Jumlah aktivitas perseptual dan kognitif yang dibutuhkan |
| $\text{PD}$ | *Physical Demand* | Jumlah aktivitas fisik yang dibutuhkan |
| $\text{TD}$ | *Temporal Demand* | Tingkat tekanan waktu |
| $\text{OP}$ | *Own Performance* | Pencapaian tujuan task (skor terbalik) |
| $\text{EF}$ | *Effort* | Usaha mental dan fisik untuk mencapai level performance |
| $\text{FR}$ | *Frustration* | Tingkat frustasi, stres, dan ketidaknyamanan |

### 2.2 Prosedur *Weighted TLX* (Raw-Ranking Method)

Berbeda dengan *Raw TLX* (RTL) yang hanya menjumlahkan keenam skor secara langsung, prosedur **Weighted TLX** melibatkan langkah tambahan berupa *pairwise comparison* antara keenam dimensi (total $\binom{6}{2} = 15$ pasangan). Setiap pasangan yang dianggap lebih dominan oleh responden diberi skor 1, sehingga diperoleh *weight vector* $\mathbf{w} = [w_{\text{MD}}, w_{\text{PD}}, w_{\text{TD}}, w_{\text{OP}}, w_{\text{EF}}, w_{\text{FR}}]$ dengan sifat:

$$\sum_{i=1}^{6} w_i = 15, \quad w_i \in \{0, 1, 2, \ldots, 5\}$$

**Skor Total NASA-TLX (Weighted)** dihitung dengan:

$$\text{WTLX} = \frac{\sum_{i=1}^{6} w_i \cdot s_i}{15}$$

di mana $s_i$ adalah skor mentah dimensi ke-$i$. Nilai WTLX berada pada rentang **0–100**, dengan interpretasi:

$$0 \leq \text{WTLX} < 25 \Rightarrow \text{Rendah}, \quad 25 \leq \text{WTLX} < 50 \Rightarrow \text{Sedang}, \quad 50 \leq \text{WTLX} < 75 \Rightarrow \text{Tinggi}, \quad 75 \leq \text{WTLX} \leq 100 \Rightarrow \text{Sangat Tinggi}$$

Rafi dan Putra (2024) menekankan pentingnya menggunakan **Weighted TLX** karena setiap subskala memiliki kontribusi yang berbeda terhadap total beban kerja tergantung konteks tugas—misalnya pada kurir *last-mile*, dimensi *Temporal Demand* biasanya mendominasi, sementara pada operator gudang *Physical Demand* lebih dominan.

### 2.3 Work Sampling (adopsi dari Aditya & Putra, 2024)

Work sampling digunakan untuk menentukan proporsi waktu yang dihabiskan operator pada kategori aktivitas tertentu melalui observasi acak sesaat (*instantaneous observation*). Jumlah observasi minimum $N$ ditentukan oleh:

$$N = \frac{Z^2 \cdot p \cdot (1-p)}{e^2}$$

di mana:
- $Z$ = nilai kritis distribusi normal standar (untuk *confidence level* 95%, $Z = 1{,}96$)
- $p$ = proporsi aktivitas yang diperkirakan (umumnya $p = 0{,}5$ untuk estimasi konservatif)
- $e$ = *margin of error* yang dapat diterima (umumnya $e = 0{,}05$ atau 5%)

Dengan parameter tersebut, jumlah observasi minimum teoritis:

$$N = \frac{(1{,}96)^2 \cdot 0{,}5 \cdot 0{,}5}{(0{,}05)^2} = \frac{3{,}8416 \cdot 0{,}25}{0{,}0025} = 384{,}16 \approx 385 \text{ observasi}$$

Interval proporsi aktivitas dihitung menggunakan rumus:

$$\text{CI}_{95\%} = \hat{p} \pm Z\sqrt{\frac{\hat{p}(1-\hat{p})}{N}}$$

### 2.4 Reliabilitas Instrumen

Uji reliabilitas konsistensi internal dilakukan menggunakan **Cronbach's Alpha**:

$$\alpha = \frac{k}{k-1}\left(1 - \frac{\sum_{i=1}^{k} \sigma^2_{s_i}}{\sigma^2_t}\right)$$

di mana $k$ = jumlah item (6 dimensi), $\sigma^2_{s_i}$ = varians skor item ke-$i$, dan $\sigma^2_t$ = varians skor total. Instrumen dianggap reliabel jika $\alpha \geq 0{,}70$ (Nunnally, 1978).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Rafi dan Putra (2024) serta Aditya dan Putra (2024) menyusun prosedur sistematis sebagai berikut:

### 3.1 Diagram Alir Metodologi

```
┌─────────────────────────────┐
│  IDENTIFIKASI PERMASALAHAN  │
│  (Studi Pendahuluan & Wawancara Awal) │
└──────────────┬──────────────┘
               ▼
┌─────────────────────────────┐
│  PENENTUAN POPULASI &       │
│  SAMPEL (Purposive Sampling)│
└──────────────┬──────────────┘
               ▼
┌─────────────────────────────┐
│  VALIDASI INSTRUMEN         │
│  (Uji Coba & Cronbach α)    │
└──────────────┬──────────────┘
               ▼
┌─────────────────────────────┐
│  PENGUMPULAN DATA           │
│  ┌──────────┬──────────┐    │
│  │ NASA-TLX │Work Samp.│    │
│  └──────────┴──────────┘    │
└──────────────┬──────────────┘
               ▼
┌─────────────────────────────┐
│  PENGOLAHAN DATA            │
│  (Perhitungan WTLX &       │
│   Proporsi Aktivitas)       │
└──────────────┬──────────────┘
               ▼
┌─────────────────────────────┐
│  ANALISIS & INTERPRETASI    │
│  (Identifikasi Dimensi     │
│   Dominan & Usulan Perbai.) │
└──────────────┬──────────────┘
               ▼
┌─────────────────────────────┐
│  REKOMENDASI & IMPLEMENTASI │
└─────────────────────────────┘
```

### 3.2 Langkah Operasional Terperinci

**Tahap 1 — Identifikasi Permasalahan:** Wawancara mendalam (*in-depth interview*) dengan 5–10 operator dan 2 supervisor untuk memetakan aktivitas dominan dan keluhan subjektif.

**Tahap 2 — Penentuan Sampel:** Menggunakan *purposive sampling* dengan kriteria inklusi: (i) masa kerja minimal 3 bulan, (ii) aktif menjalankan rute reguler, (iii) bersedia menjadi responden. Jumlah sampel minimal 30 responden mengikuti *central limit theorem*.

**Tahap 3 — Validasi Instrumen:** Pilot test pada 10–15 responden di luar sampel utama. Hitung Cronbach α; jika belum memenuhi threshold, lakukan revisi redaksional item pertanyaan.

**Tahap 4 — Pengumpulan Data NASA-TLX:**
1. Responden mengisi *rating* keenam dimensi (skala 0–100 *slider*) berdasarkan pengalaman kerja shift terakhir.
2. Responden melakukan *pairwise comparison* antar 15 pasangan dimensi dengan menempelkan kartu sesuai instruksi lembar kerja (*Card Sorting* procedure).

**Tahap 5 — Pengumpulan Data Work Sampling** (Aditya & Putra, 2024):
1. Observer berjalan di area kerja dengan rute acak (*random walk*) setiap 1–2 menit.
2. Setiap kali bel pengamatan berbunyi, aktivitas operator di-*snapshot* dan dikodekan ke dalam kategori: *idle*, *productive*, *supportive*, *non-productive*.
3. Minimal 385 observasi per periode analisis untuk memenuhi *confidence level* 95%.

**Tahap 6 — Pengolahan & Analisis:**
- Hitung WTLX per individu, lalu rata-ratakan per kelompok (shift/rute).
- Identifikasi subskala dengan bobot rata-rata tertinggi sebagai *critical load factor*.
- Korelasikan proporsi waktu *productive* dari work sampling dengan skor WTLX untuk validasi silang.

**Tahap 7 — Rekomendasi:** Berdasarkan kombinasi hasil NASA-TLX dan work sampling, susun rekomendasi seperti: redistribusi rute, penambahan *rest break* (sesuai Permenaker No. 51/1999: 30 menit setelah 4 jam kerja), atau *training* peningkatan kompetensi *route planning*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Skenario

Mengacu pada studi Rafi dan Putra (2024) pada Shopee Express Partner di Kota X, sebuah *hub* sortir melayani rata-rata 2.500 paket/hari dengan 12 armada kurir aktif per shift pagi (07.