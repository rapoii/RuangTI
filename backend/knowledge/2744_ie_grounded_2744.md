# 2744 — Analisis Beban Kerja Mental Operator Logistik E-Commerce Menggunakan Metode NASA-TLX dan Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri (Ergonomi Kognitif, Perancangan Sistem Kerja)
**Topik Spesifik:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Industri *e-commerce* di Indonesia mengalami ekspansi eksponensial pascapandemi COVID-19, dengan total nilai transaksi *Gross Merchandise Value* (GMV) yang menembus lebih dari USD 53 miliar pada 2023 (Bain & Company, 2024). Pertumbuhan ini secara langsung meningkatkan tekanan pada ekosistem *last-mile delivery*, termasuk operator kurir, *picker-packer* gudang, dan mitra logistik seperti Shopee Express (SPX). Dalam konteks operasional harian, pekerja kurir tidak hanya menghadapi tuntutan fisik berupa pengangkatan paket, navigasi rute, dan target Sortir-Center-to-Customer (SCTC) yang ketat, tetapi juga tuntutan kognitif yang semakin kompleks: verifikasi kode OTP, pembacaan *barcode*, penyelesaian dispute alamat, penggunaan aplikasi *mobile* secara simultan, serta interaksi dengan pelanggan yang memiliki ekspektasi waktu pengiriman *real-time*. 

Rafi & Putra (2024) dalam risetnya yang dipublikasikan pada DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385) menyoroti urgensi pengukuran **beban kerja mental (mental workload)** mitra Shopee Express. Berbeda dengan ergonomi klasik yang berfokus pada *physical strain* (postur, kekuatan, frekuensi gerakan), beban kerja mental adalah konstruksi multidimensi yang merepresentasikan *cost* kognitif yang dikeluarkan pekerja untuk mencapai tingkat *performance* tertentu. Ketika *mental demand* melampaui kapasitas kognitif (working memory bottleneck), risiko *human error* meningkat tajam—menurunkan *first-attempt delivery rate* (FADR) dan *Service Level Agreement* (SLA) yang krusial bagi reputasi platform. Studi Rafi & Putra (2024) memposisikan NASA-TLX (NASA Task Load Index) sebagai instrumen diagnostik yang telah tervalidasi secara psikometrik untuk mengkuantifikasi fenomena tersebut. Hasil utama mereka menunjukkan rata-rata skor Weighted Workload (WWL) mitra SPX berada pada rentang tinggi (skor >65 dari skala 100), mengindikasikan kebutuhan restrukturisasi SOP, redistribusi rute, atau implementasi *decision-support system* (DSS) di aplikasi operasional.

Konteks ini juga diperkuat oleh Aditya.R & Putra (2024) pada DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795), yang melakukan *workload analysis* terhadap operator gudang menggunakan kombinasi **NASA-TLX dan Work Sampling**. Mereka menemukan bahwa variabel *Temporal Demand* dan *Effort* merupakan kontributor dominan terhadap skor TLX pada tugas *inbound-putaway* dan *order-picking*. Temuan ini memberikan bukti empiris bahwa baik *frontliner* (kurir) maupun *back-office* (operator gudang) pada rantai pasok Shopee menghadapi profil beban kerja mental yang serupa, sehingga pendekatan intervensi harus bersifat holistik. Urgensi ekonomis dari riset ini tidak dapat diremehkan: biaya *re-training* operator, *turnover* tinggi, dan kompensasi akibat kecelakaan kerja akibat kelelahan kognitif mencapai miliaran rupiah per tahun bagi perusahaan logistik berskala nasional.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Konstruksi Teori NASA-TLX

NASA-TLX (Hart & Staveland, 1988) mengoperasionalkan *workload* sebagai konstruk enam dimensi yang masing-masing dievaluasi menggunakan *Likert-type bipolar scale* (0–100):

| Subskala | Notasi | Deskripsi |
|---|---|---|
| Mental Demand (MD) | $D_M$ | Aktivitas berpikir, memutuskan, menghitung |
| Physical Demand (PD) | $D_P$ | Aktivitas fisik (mengangkat, berjalan, mengetik) |
| Temporal Demand (TD) | $D_T$ | Tekanan waktu, kecepatan完成任务 |
| Performance (P) | $P_r$ | Persepsi pencapaian target任务 |
| Effort (E) | $E_f$ | Tingkat usaha mental/fisik yang dikeluarkan |
| Frustration (F) | $F_r$ | Tingkat frustrasi, iritasi, stres |

### 2.2 Formulasi Raw TLX (Unweighted)

Tanpa *pairwise comparison*, skor total dihitung sebagai rata-rata aritmatika:

$$TLX_{raw} = \frac{1}{6} \sum_{i=1}^{6} D_i = \frac{D_M + D_P + D_T + P_r + E_f + F_r}{6} \tag{1}$$

### 2.3 Formulasi Weighted TLX (WWL)

Rafi & Putra (2024) menerapkan prosedur **pairwise comparison** untuk mendapatkan bobot relatif $w_i \in \{0,1,2,3,4,5\}$ bagi masing-masing subskala berdasarkan 15 perbandingan berpasangan. Skor **Weighted Workload** kemudian dihitung dengan formula Weighted Average (WA):

$$WWL = \frac{\sum_{i=1}^{6} (w_i \cdot r_i)}{\sum_{i=1}^{6} w_i} = \frac{1}{15} \sum_{i=1}^{6} (w_i \cdot r_i) \tag{2}$$

di mana $r_i$ adalah *raw rating* (0–100) untuk subskala ke-$i$. Karena setiap $w_i$ bernilai 0 sampai 5, maka total bobot (*sum of weights*) selalu = 15, sehingga denominator konstan.

### 2.4 Klasifikasi Beban Kerja

Berdasarkan interpretasi Rafi & Putra (2024), skor WWL diklasifikasikan menjadi:

$$WWL_{kelas} = \begin{cases} \text{Rendah} & \text{jika } 0 \leq WWL < 25 \\ \text{Sedang} & \text{jika } 25 \leq WWL < 50 \\ \text{Tinggi} & \text{jika } 50 \leq WWL < 75 \\ \text{Sangat Tinggi} & \text{jika } 75 \leq WWL \leq 100 \end{cases} \tag{3}$$

### 2.5 Work Sampling (Pendukung dari Aditya.R & Putra, 2024)

Work Sampling mengukur proporsi waktu yang dihabiskan pekerja pada kategori aktivitas tertentu melalui pengamatan acak:

$$P_a = \frac{n_a}{N} \cdot 100\% \tag{4}$$

dengan $n_a$ = jumlah pengamatan pada aktivitas $a$, dan $N$ = total pengamatan. Ukuran sampel minimum ditentukan dengan rumus:

$$N \geq \frac{Z^2 \cdot p \cdot (1-p)}{E^2} \tag{5}$$

dengan $Z$ = nilai z pada tingkat kepercayaan $(1-\alpha)$, $p$ = proporsi estimasi, $E$ = *margin of error*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi NASA-TLX dan Work Sampling mengikuti alur sistematis berikut:

**Tahap 1 — Perumusan Masalah & Sampling**
1. Identifikasi populasi pekerja (mitra kurir SPX, operator gudang).
2. Hitung ukuran sampel minimum menggunakan Cochran's Formula: $n_0 = (Z^2 \cdot \sigma^2) / e^2$. Rafi & Putra (2024) menggunakan 30 responden sebagai *convenience sample*.
3. Pastikan informed consent dan anonimisasi data (compliance UU PDP No. 27/2022).

**Tahap 2 — Pengumpulan Data Work Sampling**
1. Siapkan lembar observasi kategori aktivitas (misal: *scanning*, *loading*, *driving*, *resting*, *communication*).
2. Lakukan *random-time observation* dengan interval 5–10 menit selama 8 jam kerja.
3. Rekam $n_a$ untuk setiap kategori.

**Tahap 3 — Pemberian Kuesioner NASA-TLX**
1. Sesi 1: Responden menilai keenam subskala pada skala 0–100 (raw ratings).
2. Sesi 2: Responden melakukan 15 *pairwise comparisons* dengan kartu-kartu khusus.
3. Hitung bobot $w_i$ untuk masing-masing subskala.

**Tahap 4 — Kalkulasi & Analisis Statistik**
1. Hitung $WWL_i$ untuk tiap responden menggunakan Persamaan (2).
2. Uji normalitas (Shapiro-Wilk) untuk menentukan uji parametrik/non-parametrik.
3. Uji beda mean antar shift menggunakan Independent Samples t-test atau Mann-Whitney U.
4. Korelasikan skor WWL dengan variabel dependen (FADR, kelelahan, turnover).

**Tahap 5 — Interpretasi & Rekomendasi Engineering**
1. Identifikasi subskala dominan (weighted) yang memerlukan intervensi.
2. Desain SOP baru (misal: *route clustering*, istirahat mikro 5 menit tiap 90 menit sesuai NIOSH疲劳guidelines).
3. Implementasi *pilot project* dan lakukan *pre-post measurement*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Data Hipotetis Mitra Kurir Shopee Express (diadaptasi dari Rafi & Putra, 2024)

Misalkan dilakukan pengukuran terhadap **5 mitra kurir SPX (R1–R5)** pada shift pagi. Hasil *pairwise comparison* dan *raw rating* adalah sebagai berikut:

**Tabel 1. Bobot Pairwise Comparison (jumlah = 15 untuk tiap responden)**

| Responden | $w_{MD}$ | $w_{PD}$ | $w_{TD}$ | $w_{Pr}$ | $w_{Ef}$ | $w_{Fr}$ |
|---|---|---|---|---|---|---|
| R1 | 4 | 1 | 3 | 2 | 3 | 2 |
| R2 | 5 | 1 | 2 | 1 | 4 | 2 |
| R3 | 4 | 2 | 2 | 2 | 3 | 2 |
| R4 | 3 | 1 | 4 | 2 | 3 | 2 |
| R5 | 4 | 1 | 3 | 1 | 4 | 2 |

**Tabel 2. Raw Rating (skala 0–100)**

| Responden | $r_{MD}$ | $r_{PD}$ | $r_{TD}$ | $r_{Pr}$ | $r_{Ef}$ | $r_{Fr}$ |
|---|---|---|---|---|---|---|
| R1 | 75 | 60 | 80 | 40 | 70 | 65 |
| R2 | 80 | 55 | 85 | 35 | 75 | 60 |
| R3 | 70 | 65 | 75 | 45 | 65 | 70 |
| R4 | 85 | 50 | 90 | 30 | 80 | 55 |
| R5 | 78 | 58 | 82 | 38 | 72 | 63 |

### 4.2 Perhitungan WWL untuk Responden R1

$$WWL_{R1} = \frac{(4 \cdot 75) + (1 \cdot 60) + (3 \cdot 80) + (2 \cdot 40) + (3 \cdot 70) + (2 \cdot 65)}{15}$$

$$= \frac{300 + 60 + 240 + 80 + 210 + 130}{15} = \frac{1020}{15} = 68{,}00$$

### 4.3 Perhitungan Seluruh Responden

| Responden | $\sum (w_i \cdot r_i)$ | $WWL_i$ | Kelas |
|---|---|---|---|
| R1 | 1020 | 68,00 | Tinggi |
| R2 | 1050 | 70,00 | Tinggi |
| R3 | 1010 | 67,33 | Tinggi |
| R4 | 1080 | 72,00 | Tinggi |
| R5 | 1043 | 69,53 | Tinggi |

### 4.4 Statistik Agregat

$$\bar{WWL} = \frac{68{,}00 + 70{,}00 + 67{,}33 + 72{,}00 + 69{,}53}{5} = \frac{346{,}86}{5} = 69{,}37$$

$$s = \sqrt{\frac{\sum_{i=1}^{5}(WWL_i - 69{,}37)^2}{4}} = \sqrt{\frac{(1{,}37)^2 + (0{,}63)^2 + (2{,}04)^2 + (2{,}63)^2 + (0{,}16)^2}{4}} \approx 1{,}95$$

### 4.5 Subskala Dominan

Untuk mengidentifikasi subskala yang paling membebani, dihitung rata-rata kontribusi tertimbang:

$$\bar{C}_i = \frac{\sum (w_i \