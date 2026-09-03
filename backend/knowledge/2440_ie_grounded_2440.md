# 2440 — Analisis Beban Kerja Mental Karyawan Shopee Express Partner Menggunakan Metode NASA-TLX sebagai Instrumen Ergonomi Kognitif pada Rantai Pasok E-Commerce

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan ekonomi digital Indonesia yang diproyeksikan mencapai USD 130 miliar pada tahun 2025 telah menempatkan sektor *e-commerce* sebagai tulang punggung logistik modern, di mana Shopee Express sebagai salah satu layanan *last-mile delivery* terbesar di Asia Tenggara menghadapi tantangan operasional yang sangat kompleks. Studi yang dilakukan oleh Rafi dan Putra (2024) dengan DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385) menyoroti fenomena kritis bahwa karyawan *Shopee Express Partner* (kurir mitra) mengalami beban kerja mental yang signifikan, sebuah kondisi yang berdampak langsung terhadap kualitas layanan, keselamatan kerja, dan tingkat retensi karyawan. Volume pengiriman yang fluktuatif—terutama saat *flash sale*, *harbolnas*, dan musim Ramadan—menghasilkan tekanan kognitif yang terakumulasi, mulai dari keputusan *routing* real-time, verifikasi barcode, interaksi dengan pelanggan, hingga manajemen waktu yang ketat sesuai Service Level Agreement (SLA) 1×24 jam.

Dalam konteks industri 4.0, paradigma bahwa beban kerja hanya bersifat fisik (manual material handling) telah bergeser. Beban kerja mental atau *mental workload* kini menjadi variabel kritis yang harus diukur secara kuantitatif untuk mencegah *human error*, kelelahan kognitif, dan risiko kecelakaan kerja. Fenomena *cognitive fatigue* pada kurir *e-commerce* belum banyak dieksplorasi dalam literatur Teknik Industri Indonesia, padahal secara empiris dampaknya terasa pada penurunan *first-attempt delivery rate* dan peningkatan keluhan pelanggan. Studi komplementer oleh Aditya dan Putra (2024) dengan DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) memperkuat urgensi ini dengan menunjukkan bahwa operator gudang pada ekosistem logistik serupa juga mengalami pola beban kerja mental yang perlu diukur menggunakan instrumen valid seperti NASA-TLX yang dipadukan dengan *work sampling*. Kedua studi tersebut menggarisbawahi kebutuhan industri akan metodologi standar untuk mengukur, memantau, dan mengendalikan beban kognitif pekerja rantai pasok, sehingga perusahaan dapat merancang kebijakan *shift scheduling*, redistribusi rute, dan otomatisasi proses secara *data-driven*. Oleh karena itu, modul ini membahas secara mendalam implementasi NASA-TLX sebagai instrumen ergonomi kognitif yang applicable, reliabel, dan telah teruji secara psikometrik pada berbagai sektor industri berisiko tinggi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Konsep NASA Task Load Index (NASA-TLX)

NASA-TLX adalah instrumen multidimensi yang dikembangkan oleh Hart dan Staveland (1988) untuk mengukur *subjective workload* operator. Instrumen ini terdiri atas enam subskala yang merepresentasikan dimensi beban kerja secara komprehensif, sebagaimana diadopsi oleh Rafi dan Putra (2024):

| No | Dimensi | Simbol | Deskripsi Operasional |
|----|---------|--------|------------------------|
| 1 | Mental Demand ($MD$) | $R_1$ | Aktivitas berpikir, memutuskan, menghitung, memantau |
| 2 | Physical Demand ($PD$) | $R_2$ | Aktivitas fisik: mengangkat, mendorong, berjalan |
| 3 | Temporal Demand ($TD$) | $R_3$ | Tekanan waktu untuk menyelesaikan tugas |
| 4 | Performance ($P$) | $R_4$ | Tingkat keberhasilan pencapaian target tugas |
| 5 | Effort ($E$) | $R_5$ | Tingkat usaha fisik dan mental yang dikeluarkan |
| 6 | Frustration ($F$) | $R_6$ | Tingkat ketidaknyamanan, stres, dan iritasi |

Setiap dimensi dinilai menggunakan *Likert-type bipolar scale* dari 0 hingga 100 dengan interval 5 poin, di mana nilai rendah mengindikasikan beban rendah dan nilai tinggi mengindikasikan beban tinggi, kecuali untuk *Performance* yang menggunakan *reverse scaling* (nilai tinggi berarti performa baik, sehingga kontribusi terhadap beban lebih rendah).

### 2.2 Formulasi Skor Berbobot NASA-TLX

Skor total NASA-TLX dihitung menggunakan metode pembobotan berbasis *paired comparison*. Terdiri atas dua tahap:

**Tahap 1: Penentuan Bobot ($w_i$) melalui 15 Pasangan Perbandingan**

Dari enam dimensi, terdapat $\binom{6}{2} = 15$ pasangan perbandingan. Untuk setiap pasangan, responden memilih dimensi mana yang lebih dominan berkontribusi terhadap beban kerja. Bobot setiap dimensi $w_i$ didefinisikan sebagai jumlah kemenangan dalam 15 perbandingan, sehingga:

$$\sum_{i=1}^{6} w_i = 15, \quad \text{dengan } w_i \in \{0, 1, 2, ..., 5\}$$

**Tahap 2: Perhitungan Skor Total Berbobot**

Skor total NASA-TLX didefinisikan dengan formulasi matematis berikut:

$$\boxed{TLX_{score} = \frac{\sum_{i=1}^{6} w_i \cdot R_i}{15}}$$

di mana $R_i$ adalah skor mentah (*raw rating*) dimensi ke-$i$ pada skala 0–100, dan $w_i$ adalah bobot dari hasil *paired comparison*. Rentang skor total adalah 0–100, dengan kategori interpretatif sebagai berikut:

- $TLX_{score} \in [0, 20]$ : Beban kerja rendah (*Low Workload*)
- $TLX_{score} \in (20, 50]$ : Beban kerja sedang (*Moderate Workload*)
- $TLX_{score} \in (50, 80]$ : Beban kerja tinggi (*High Workload*)
- $TLX_{score} \in (80, 100]$ : Beban kerja sangat tinggi (*Very High/Overload*)

### 2.3 Uji Reliabilitas Instrumen

Reliabilitas internal NASA-TLX diuji menggunakan koefisien Cronbach's Alpha ($\alpha$) yang diformulasikan sebagai:

$$\alpha = \frac{k}{k-1}\left(1 - \frac{\sum_{i=1}^{k}\sigma_i^2}{\sigma_T^2}\right)$$

di mana $k$ adalah jumlah dimensi ($k=6$), $\sigma_i^2$ adalah varians skor dimensi ke-$i$, dan $\sigma_T^2$ adalah varians skor total. Instrumen dianggap reliabel jika $\alpha \geq 0.70$ (Nunnally, 1978).

### 2.4 Validitas Konstruk melalui Analisis Faktor

Validitas konstruk dapat diuji menggunakan *Confirmatory Factor Analysis* (CFA) dengan model pengukuran:

$$X_i = \lambda_i \xi + \delta_i$$

di mana $X_i$ adalah skor dimensi ke-$i$, $\lambda_i$ adalah *loading factor*, $\xi$ adalah *latent construct* (beban kerja mental), dan $\delta_i$ adalah *measurement error*. Indeks kesesuaian model yang digunakan meliputi *Root Mean Square Error of Approximation* (RMSEA) dan *Comparative Fit Index* (CFI), mengikuti standar yang juga diaplikasikan oleh Aditya dan Putra (2024) untuk konteks operator gudang.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan pendekatan Rafi dan Putra (2024), implementasi NASA-TLX pada konteks *Shopee Express Partner* mengikuti *Standard Operating Procedure* (SOP) tujuh tahapan yang disajikan dalam bentuk *flowchart* algoritmik berikut:

```
[Tahap 1: Identifikasi Populasi & Sampling]
              ↓
[Tahap 2: Desain Kuesioner & Uji Coba (Pilot Test, n=10)]
              ↓
[Tahap 3: Pelatihan Enumerator & Validasi Instrumen]
              ↓
[Tahap 4: Pengumpulan Data Primer (Wawancara + Kuesioner)]
              ↓
[Tahap 5: Pengolahan Data — Perhitungan Bobot & Skor TLX]
              ↓
[Tahap 6: Uji Statistik (Cronbach's Alpha, Uji Beda, Korelasi)]
              ↓
[Tahap 7: Rekomendasi Ergonomi & Validasi Manajemen]
```

### 3.1 Prosedur Detail

**Tahap 1 — Identifikasi Populasi:** Populasi target adalah seluruh kurir mitra aktif di wilayah operasional Shopee Express. Teknik *purposive sampling* digunakan dengan kriteria inklusi: masa kerja minimal 6 bulan, volume pengiriman harian ≥ 50 paket, dan bersedia menjadi responden. Ukuran sampel minimum dihitung menggunakan rumus Slovin:

$$n = \frac{N}{1 + N \cdot e^2}$$

dengan $N$ adalah jumlah populasi, $e$ adalah margin of error (umumnya 5% atau 0.05). Rafi dan Putra (2024) merekomendasikan $n \geq 30$ untuk memenuhi asumsi normalitas dalam uji parametrik.

**Tahap 2 — Desain Kuesioner:** Kuesioner terdiri atas dua bagian utama: (a) *paired comparison card* berisi 15 pasangan dimensi yang harus dipilih responden, dan (b) *rating scale* berisi 6 garis horizontal 0–100 untuk setiap dimensi. Instrumen diterjemahkan dan *back-translated* ke Bahasa Indonesia untuk menjamin validitas semantik.

**Tahap 3 — Pelatihan Enumerator:** Enumerator diberikan briefing selama 2 jam tentang cara讲解 kuesioner, etika penelitian, dan teknik *probing* tanpa memengaruhi jawaban responden.

**Tahap 4 — Pengumpulan Data:** Dilakukan pada tiga *shift* (pagi, siang, sore) untuk menangkap variasi beban kerja temporal. Wawancara dilakukan *post-task* (setelah kurir menyelesaikan rute) guna menghindari *carry-over effect*.

**Tahap 5 — Pengolahan Data:** Menggunakan *spreadsheet* atau perangkat lunak statistik (SPSS, R, Python). Setiap kuesioner diverifikasi kelengkapannya sebelum dihitung skornya.

**Tahap 6 — Uji Statistik:** Cronbach's Alpha untuk reliabilitas, *One-Way ANOVA* untuk uji beda antar *shift*, dan *correlation analysis* untuk identifikasi *driver* beban kerja.

**Tahap 7 — Rekomendasi Ergonomi:** Hasil di-*benchmark* terhadap standar industri dan dikomunikasikan kepada manajemen operasi untuk ditindaklanjuti dalam bentuk *redesign rute*, *shift rotation*, atau investasi teknologi (misalnya *GPS routing optimization*, *barcode automation*).

### 3.2 Integrasi dengan Work Sampling

Merujuk pada pendekatan Aditya dan Putra (2024) DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795), NASA-TLX dapat diintegrasikan dengan *work sampling* untuk memperoleh triangulasi data beban kerja, baik secara objektif (proporsi waktu aktivitas) maupun subjektif (persepsi beban). Formula *work sampling* yang digunakan:

$$P = \frac{X_i}{N} \pm Z \cdot \sqrt{\frac{P(1-P)}{N}}$$

di mana $P$ adalah proporsi aktivitas, $X_i$ adalah jumlah observasi aktivitas ke-$i$, $N$ adalah total observasi, $Z$ adalah nilai distribusi normal standar (1.96 untuk tingkat kepercayaan 95%). Lebar interval kepercayaan dihitung untuk menentukan jumlah sampel minimum observasi.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Skenario

Simulasi berikut didasarkan pada skenario realistis yang diangkat Rafi dan Putra (2024):