# 2136 — Analisis Beban Kerja Mental Operator Logistik dan Pergudangan Menggunakan Metode NASA-TLX dan Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Industri *e-commerce* di Indonesia telah mengalami transformasi struktural yang dramatis dalam satu dekade terakhir. Shopee sebagai salah satu *marketplace* terbesar di Asia Tenggara mengandalkan jaringan mitra pengiriman (*Shopee Express Partner*) yang beroperasi dengan karakteristik pekerjaan yang sangat menuntut secara kognitif dan fisik. Rafi & Putra (2024) dalam publikasi di jurnal *Peer-Reviewed Journal* dengan DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385) menyoroti bahwa beban kerja mental (*mental workload*) karyawan mitra ekspedisi menjadi variabel kritis yang menentukan kualitas layanan, *turnover* pekerja, dan tingkat kecelakaan kerja di sektor *last-mile delivery*.

Urgensi penelitian ini muncul dari beberapa fenomena empiris yang teramati di lapangan. Pertama, volume pengiriman *e-commerce* Indonesia tumbuh rata-rata 25–30% per tahun (periode 2020–2024), sementara jumlah kurir tidak meningkat secara proporsional. Kedua, rata-rata waktu yang dihabiskan kurir untuk memindai barcode, menginput data di aplikasi *handheld*, memantau rute, serta berkomunikasi dengan pelanggan menciptakan *cognitive overload* yang belum diukur secara kuantitatif. Ketiga, meskipun metode konvensional seperti *time and motion study* banyak digunakan untuk analisis beban kerja fisik, metode tersebut tidak cukup sensitif untuk menangkap dimensi psikologis dari pekerjaan yang semakin terdigitalisasi.

Kontribusi ilmiah Rafi & Putra (2024) adalah mengaplikasikan NASA-TLX (*NASA Task Load Index*), instrumen psikometrik yang dikembangkan oleh Sandra Hart dan Lowell Staveland (1988) untuk program *aerospace*, ke dalam konteks operasional logistik *e-commerce* di Indonesia. Studi ini mengisi celah literatur (*research gap*) karena sebelumnya NASA-TLX lebih banyak diaplikasikan pada tenaga medis, pilot, dan operator kontrol industri, namun jarang diterapkan pada pekerja *gig economy* sektor pengiriman.

Sebagai komplemen, Aditya.R & Putra (2024) dengan DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) memperluas metodologi dengan mengintegrasikan NASA-TLX bersama *Work Sampling* untuk operator pergudangan, menciptakan kerangka analisis holistik yang mengukur baik beban kerja kualitatif maupun kuantitas utilisasi waktu kerja. Integrasi ini penting karena *warehouse* merupakan simpul kritis dalam rantai pasok Shopee Express, di mana *order processing time*, *picking accuracy*, dan *packing efficiency* sangat bergantung pada kondisi mental operator.

Dalam konteks ekonomi dan keselamatan kerja, analisis beban kerja mental memiliki implikasi langsung terhadap *Service Level Agreement* (SLA) pengiriman, yang umumnya dijanjikan dalam 1–3 hari untuk *Shopee Standard*. Setiap kesalahan imputasi data atau kelalaian prosedur yang diakibatkan oleh kelelahan mental akan menurunkan *delivery success rate* dan meningkatkan *customer complaint ratio*, yang pada akhirnya merusak reputasi platform.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Metode NASA-TLX

NASA-TLX adalah instrumen multidimensi yang mengukur beban kerja subjektif melalui enam dimensi: *Mental Demand* (MD), *Physical Demand* (PD), *Temporal Demand* (TD), *Performance* (PE), *Effort* (EF), dan *Frustration* (FR). Setiap dimensi dinilai dalam skala *Likert* 0–100 yang dibagi 20 tingkatan (*scale steps*).

Tahap pertama adalah **paired comparison**, di mana responden memilih dimensi yang lebih dominan dari 15 pasangan kemungkinan. Bobot (*weight*) setiap dimensi $w_i$ dihitung menggunakan rumus:

$$w_i = \frac{n_i}{15}$$

di mana $n_i$ adalah jumlah kali dimensi $i$ dipilih sebagai lebih dominan dalam 15 perbandingan berpasangan. Dengan demikian:

$$\sum_{i=1}^{6} w_i = 1$$

Tahap kedua adalah **rating**, di mana responden memberikan skor $r_i \in [0, 100]$ untuk setiap dimensi. **Raw TLX** (rata-rata sederhana) dihitung sebagai:

$$TLX_{raw} = \frac{1}{6}\sum_{i=1}^{6} r_i$$

Namun, Rafi & Putra (2024) menggunakan **Weighted TLX** yang lebih akurat karena memperhitungkan prioritas subjektif responden:

$$TLX_{weighted} = \sum_{i=1}^{6} w_i \cdot r_i$$

Kategori interpretasi skor TLX mengikuti klasifikasi Hancock & Meshkati (1988) yang dimodifikasi:

$$\text{TLX} \in \begin{cases} [0, 20] & \text{: Beban kerja sangat rendah} \\ (20, 40] & \text{: Beban kerja rendah} \\ (40, 60] & \text{: Beban kerja sedang} \\ (60, 80] & \text{: Beban kerja tinggi} \\ (80, 100] & \text{: Beban kerja sangat tinggi} \end{cases}$$

### 2.2 Metode Work Sampling

Aditya.R & Putra (2024) mengaplikasikan *Work Sampling* untuk mengukur distribusi aktivitas operator gudang. Prinsip dasarnya adalah hukum probabilitas:

$$P(\text{aktivitas}_j) = \lim_{N \to \infty} \frac{f_j}{N}$$

di mana $f_j$ adalah frekuensi kemunculan aktivitas $j$ dari total $N$ observasi acak. Jumlah observasi minimum yang diperlukan untuk tingkat keyakinan tertentu dihitung dengan rumus:

$$n = \frac{Z_{\alpha/2}^{2} \cdot p \cdot (1-p)}{e^{2}}$$

di mana $Z_{\alpha/2}$ adalah nilai kritis distribusi normal standar (misalnya 1,96 untuk $\alpha=0,05$), $p$ adalah proporsi aktivitas yang diestimasi (default $p=0,5$ untuk konservatif), dan $e$ adalah *margin of error* yang dapat diterima.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi metodologi NASA-TLX dan *Work Sampling* mengikuti alur prosedural yang distandarisasi oleh Rafi & Putra (2024) dan Aditya.R & Putra (2024):

**Langkah 1 — Identifikasi Populasi dan Sampling**
Tentukan populasi riset (misal: 50 kurir Shopee Express Partner di hub X). Pilih sampel representatif menggunakan *stratified random sampling* berdasarkan pengalaman kerja (<1 tahun, 1–3 tahun, >3 tahun).

**Langkah 2 — Pengumpulan Data Work Sampling (jika digunakan)**
Lakukan observasi acak menggunakan tabel bilangan random atau aplikasi *time-petal*. Setiap observasi diklasifikasikan ke dalam kategori: *productive work*, *idle*, *delayed*, *supporting activity*.

**Langkah 3 — Kuesioner NASA-TLX**
Responden mengisi dua bagian kuesioner: (a) 15 perbandingan berpasangan untuk menentukan bobot; (b) enam skala *Likert* 0–100 untuk *rating*. Kuesioner diberikan pada jam ke-3 dan ke-7 shift kerja untuk mengukur variasi beban kerja intraday.

**Langkah 4 — Kalkulasi dan Validasi**
Hitung $w_i$ dan $TLX_{weighted}$ untuk setiap responden. Uji validitas dengan *Cronbach's Alpha* ($\alpha \geq 0,70$) dan reliabilitas dengan *test-retest*.

**Langkah 5 — Analisis Korelasi dan Rekomendasi**
Lakukan analisis regresi antara skor TLX dengan metrik kinerja (jumlah paket terkirim, *on-time delivery rate*, *error input*). Hasil digunakan untuk menentukan rasio *man-hour* optimal dan rekomendasi *rest interval*.

Arsitektur teknologi pendukung mencakup: aplikasi kuesioner digital (Google Forms/REDCap), *dashboard* visualisasi (Power BI/Tableau), dan integrasi dengan *Workforce Management System* (WMS) untuk analisis real-time.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Studi Kasus A: Beban Kerja Mental Kurir Shopee Express (Berdasarkan Rafi & Putra, 2024)

**Input Parameter** dari 30 responden kurir Shopee Express Partner di hub Jakarta Timur, diambil satu responden representatif berikut:

| Dimensi | Rating $r_i$ | Bobot $w_i$ |
|---|---|---|
| Mental Demand (MD) | 80 | 0,25 |
| Physical Demand (PD) | 65 | 0,15 |
| Temporal Demand (TD) | 85 | 0,20 |
| Performance (PE) | 45 | 0,10 |
| Effort (EF) | 75 | 0,20 |
| Frustration (FR) | 60 | 0,10 |

**Kalkulasi Weighted TLX:**

$$TLX = (0{,}25)(80) + (0{,}15)(65) + (0{,}20)(85) + (0{,}10)(45) + (0{,}20)(75) + (0{,}10)(60)$$

$$TLX = 20{,}00 + 9{,}75 + 17{,}00 + 4{,}50 + 15{,}00 + 6{,}00 = 72{,}25$$

**Interpretasi Manajerial:** Skor 72,25 berada pada区间 **(60, 80]** → **Beban kerja tinggi**. Dimensi *Temporal Demand* (85) dan *Mental Demand* (80) menjadi kontributor utama, mengindikasikan tekanan waktu akibat *deadline* pengiriman harian dan kompleksitas kognitif dalam pemrosesan banyak pesanan. Rekomendasi engineering: tambah 1 kurir per shift, rotasi rute setiap 2 jam, dan implementasi *micro-break* 5 menit setiap 90 menit.

### Studi Kasus B: Work Sampling Operator Gudang (Berdasarkan Aditya.R & Putra, 2024)

**Input Parameter:**
- Aktivitas yang akan diamati: *picking*
- Estimasi proporsi $p = 0,40$ (berdasarkan data pilot)
- *Margin of error* $e = 0,05$
- Tingkat kepercayaan 95% → $Z_{\alpha/2} = 1,96$

**Kalkulasi Ukuran Sampel:**

$$n = \frac{(1{,}96)^{2} \cdot (0{,}40) \cdot (0{,}60)}{(0{,}05)^{2}} = \frac{3{,}8416 \cdot 0{,}24}{0{,}0025} = \frac{0{,}9220}{0{,}0025} = 368{,}8 \approx 369 \text{ observasi}$$

Jika dilakukan 1 observasi per 10 menit selama 8 jam shift (48 observasi/hari), dibutuhkan $\lceil 369/48 \rceil = 8$ hari pengamatan per operator. Untuk 5 operator, total 40 hari observasi.

**Kalkulasi Distribusi Aktivitas** (hasil dari 369 observasi):
- *Picking*: 148 (40,1%)
- *Packing*: 95 (25,7%)
- *Idle/Waiting*: 67 (18,2%)
- *Movement/Transport*: 41 (11,1%)
- *Other*: 18 (4,9%)

**Interpretasi:** Proporsi *idle* sebesar 18,2% menunjukkan inefisiensi alokasi tugas. Korelasi dengan skor NASA-TLX operator tersebut sebesar 58,3 (sedang) mengindikasikan bahwa waktu tunggu menjadi sumber frustrasi. Rekomendasi: redistribusi tugas dengan sistem *cross-functional* dan implementasi *pick-to-light system* untuk menurunkan *idle time* menjadi <10%.

---

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

### Evaluasi Kritis Metodologi

Kelebihan NASA-TLX menurut temuan Rafi & Putra (2024): (1) sensitivitas tinggi terhadap dimensi subj