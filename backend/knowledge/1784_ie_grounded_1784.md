# 1784 — Analisis Beban Kerja Mental Operator Logistik E-Commerce Menggunakan Metode NASA-TLX: Framework Kuantitatif untuk Optimasi Sumber Daya Manusia pada Operasional Last-Mile Delivery

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Sektor logistik e-commerce di Indonesia mengalami transformasi eksponensial dalam dekade terakhir, dengan proyeksi nilai transaksi digital yang menembus lebih dari USD 90 miliar pada 2027. Dalam ekosistem ini, Shopee Express sebagai salah satu pilar utama last-mile delivery beroperasi dengan mengandalkan lebih dari ratusan ribu mitra kurir (*partner*) yang bekerja di bawah tekanan waktu (*deadline*), volume paket fluktuatif, dan ekspektasi *service level agreement* (SLA) yang ketat. Berdasarkan penelitian Rafi & Putra (2024) yang dipublikasikan dengan DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385), dinamika operasional ini menimbulkan dimensi ergonomis kognitif yang selama ini luput dari perhatian manajemen—yakni **beban kerja mental** (*mental workload*) yang secara langsung memengaruhi keselamatan kerja, kualitas layanan, dan tingkat *turnover* karyawan.

Beban kerja mental didefinisikan sebagai total kebutuhan sumber daya kognitif (perhatian, memori kerja, persepsi, dan pemrosesan informasi) yang dituntut oleh suatu tugas dari kapasitas total operator yang tersedia (Hart & Staveland, 1988). Pada konteks kurir Shopee Express, beban ini tidak homogen sepanjang shift kerja melainkan bersifat dinamis—didominasi oleh puncak permintaan pada *flash sale*, hari raya, dan periode *payday* ketika jumlah parcel melonjak 300–500% dari baseline. Studi Rafi & Putra (2024) melakukan pengukuran sistematis terhadap 30 mitra Shopee Express di wilayah operasional Pekanbaru dengan menyebarkan kuesioner NASA-TLX (Task Load Index) yang telah terstandarisasi secara internasional. Hasil preliminary menunjukkan bahwa dimensi *Mental Demand* dan *Time Pressure* menjadi kontributor dominan terhadap skor beban kerja total.

Urgensi penelitian ini diperkuat oleh fakta bahwa kecelakaan kerja pada sektor kurir—terutama yang berkaitan dengan kelelahan kognitif—menyumbang proporsi signifikan dalam klaim BPJS Ketenagakerjaan. Kurir yang mengalami kelelahan mental terbukti memiliki *reaction time* lebih lambat, tingkat *error* sortir lebih tinggi, serta risiko kecelakaan lalu lintas 1,7 kali lebih besar dibanding operator dengan beban kerja terkelola (Aditya & Putra, 2024, DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)). Lebih jauh, paper Rafi & Putra (2024) juga menyoroti bahwa mental workload yang tidak terukur akan bertransformasi menjadi *chronic stress*, menurunkan *job satisfaction*, dan akhirnya meningkatkan *attrition rate*—yang biaya rekrutmen dan pelatihannya mencapai 1,5–2,0 kali gaji bulanan karyawan.

Aspek ergonomi kognitif ini juga relevan secara regulasi. Kementerian Ketenagakerjaan RI melalui Permenaker No. 5 Tahun 2018 tentang Keselamatan dan Kesehatan Kerja telah mengamanatkan perusahaan untuk mengelola tidak hanya beban fisik tetapi juga beban psikososial pekerja. NASA-TLX sebagai instrumen pengukuran yang valid dan reliabel (Cronbach's alpha > 0,80) menjadi jembatan kuantitatif antara tuntutan regulasi dan kebutuhan manajerial. Dengan demikian, paper Rafi & Putra (2024) bukan sekadar studi akademik, melainkan artefak rekayasa yang menyediakan *decision support system* bagi praktisi operasional untuk melakukan *workload balancing*, *shift redesign*, dan *capacity planning* secara berbasis data.

---

## 2. Landasan Teori & Formulasi Matematis

NASA-TLX (NASA Task Load Index) merupakan instrumen multidimensional yang dikembangkan oleh Sandra Hart dan Lowell Staveland (1988) di NASA Ames Research Center untuk mengukur *perceived workload* subjek terhadap suatu tugas. Instrumen ini terdiri dari enam sub-skala yang merepresentasikan dimensi independen dari beban kerja, sebagaimana dielaborasi Rafi & Putra (2024, DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)):

1. **Mental Demand (MD)** — jumlah aktivitas berpikir dan pemrosesan informasi
2. **Physical Demand (PD)** — jumlah aktivitas fisik yang dibutuhkan
3. **Temporal Demand (TD)** — tingkat tekanan waktu
4. **Performance (OP)** — tingkat keberhasilan subjek dalam mencapai tujuan tugas
5. **Effort (EF)** — jumlah usaha mental dan fisik yang dikeluarkan
6. **Frustration (FR)** — tingkat frustasi, stres, dan ketidaknyamanan

### 2.1 Model Matematis Raw NASA-TLX

Skor total beban kerja dihitung sebagai *weighted average* dari keenam sub-skala. Bobot ditentukan melalui prosedur *card-sorting pairwise comparison*, di mana subjek memilih dimensi mana yang lebih dominan (Hart, 2006). Formula matematisnya adalah:

$$WTLX_{raw} = \frac{\sum_{i=1}^{6} w_i \cdot r_i}{15}$$

di mana:
- $WTLX_{raw}$ = *Weighted Total Workload* (skor 0–100)
- $w_i$ = bobot dimensi ke-$i$ (berdasarkan card-sort, $\sum w_i = 15$)
- $r_i$ = *raw rating* dimensi ke-$i$ pada skala bipolar *Likert* 0–100
- $i = 1,2,3,4,5,6$ merepresentasikan MD, PD, TD, OP, EF, FR secara berturut-turut

### 2.2 Model Simplified RAW (Unweighted) TLX

Karena prosedur card-sort dianggap *cumbersome* dalam operasional harian, Rafi & Putra (2024) merujuk pada pendekatan simplified yang menghitung rata-rata aritmatika sederhana:

$$TLX_{avg} = \frac{1}{6} \sum_{i=1}^{6} r_i$$

### 2.3 Uji Validitas dan Reliabilitas

Uji konsistensi internal menggunakan koefisien Cronbach's alpha:

$$\alpha = \frac{k}{k-1} \left(1 - \frac{\sum_{i=1}^{k} \sigma^2_{Y_i}}{\sigma^2_X}\right)$$

di mana $k = 6$ (jumlah sub-skala), $\sigma^2_{Y_i}$ adalah varians item ke-$i$, dan $\sigma^2_X$ adalah varians total skor. Nilai $\alpha > 0{,}70$ menunjukkan reliabilitas yang dapat diterima (Nunnally, 1978), dan Rafi & Putra (2024) melaporkan $\alpha = 0{,}82$ untuk instrumen mereka.

### 2.4 Analisis Regresi Linier untuk Identifikasi Driver Beban Kerja

Untuk mengidentifikasi faktor sosiodemografi (usia, masa kerja, durasi shift, jumlah parcel per shift) yang paling berpengaruh terhadap beban kerja, paper menggunakan model regresi linier berganda:

$$Y = \beta_0 + \beta_1 X_1 + \beta_2 X_2 + \dots + \beta_p X_p + \varepsilon$$

dengan $Y$ = skor NASA-TLX total, $X_j$ = variabel independen, $\beta_j$ = koefisien regresi, dan $\varepsilon$ = galat acak. Uji signifikansi menggunakan statistik $t$:

$$t_j = \frac{\hat{\beta}_j}{SE(\hat{\beta}_j)}$$

dengan $H_0: \beta_j = 0$ ditolak jika $|t_j| > t_{\alpha/2, n-p-1}$. Koefisien determinasi $R^2$ mengukur proporsi variansi beban kerja yang dapat dijelaskan oleh variabel independen:

$$R^2 = 1 - \frac{SS_{res}}{SS_{tot}} = \frac{\sum_{i=1}^{n}(\hat{Y}_i - \bar{Y})^2}{\sum_{i=1}^{n}(Y_i - \bar{Y})^2}$$

### 2.5 Work Sampling untuk Validasi Beban Fisik-Kognitif

Merujuk pada paper Aditya & Putra (2024, DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)), pengukuran beban kerja dilakukan secara triangulatif menggunakan *work sampling* untuk memvalidasi proporsi waktu yang dihabiskan pada aktivitas-aktivitas kognitif-intensif. Formula dasar work sampling:

$$P(A) = \frac{n_A}{N} \pm z \cdot \sqrt{\frac{P(1-P)}{N}}$$

di mana $P(A)$ = proporsi waktu pada aktivitas $A$, $n_A$ = jumlah observasi pada aktivitas $A$, $N$ = total observasi, dan $z$ = nilai Z untuk tingkat kepercayaan tertentu. Untuk confidence level 95%, $z = 1{,}96$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi NASA-TLX pada operasional kurir mengikuti SOP terstruktur yang dapat direplikasi di berbagai hub sortir Shopee Express. Berikut adalah *workflow* berdasarkan protokol Rafi & Putra (2024, DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)):

### 3.1 Diagram Alir Pelaksanaan

```
┌─────────────────────────────────────┐
│  Tahap 1: Identifikasi Populasi &   │
│  Penetapan Sampel (Purposive         │
│  Sampling, n ≥ 30)                   │
└──────────────┬──────────────────────┘
               ↓
┌─────────────────────────────────────┐
│  Tahap 2: Briefing & Informed       │
│  Consent (Penjelasan 6 Dimensi       │
│  NASA-TLX, Skala 0-100)              │
└──────────────┬──────────────────────┘
               ↓
┌─────────────────────────────────────┐
│  Tahap 3: Pengisian Kuesioner       │
│  Pasca-Shift (max 30 menit          │
│  setelah shift berakhir)             │
└──────────────┬──────────────────────┘
               ↓
┌─────────────────────────────────────┐
│  Tahap 4: Card-Sorting              │
│  (15 Pairwise Comparisons)           │
└──────────────┬──────────────────────┘
               ↓
┌─────────────────────────────────────┐
│  Tahap 5: Perhitungan WTLX &        │
│  Uji Statistik (Cronbach α, Uji     │
│  Validitas Konstruk, Regresi)        │
└──────────────┬──────────────────────┘
               ↓
┌─────────────────────────────────────┐
│  Tahap 6: Analisis Gap & Rekomendasi│
│  Intervensi (Redesign Shift,        │
│  Redistribusi Parcel, Training)     │
└─────────────────────────────────────┘
```

### 3.2 Prosedur Detail per Tahap

**Tahap 1 — Penetapan Sampel:** Mengacu pada tabel Isaac & Michael dengan confidence level 95% dan margin of error 5%, minimum sampel adalah 30 responden. Rafi & Putra (2024) memilih kurir dengan masa kerja minimal 3 bulan untuk memastikan familiaritas dengan sistem.

**Tahap 2 — Standarisasi Instrumen:** Kuesioner NASA-TLX menggunakan versi terjemahan Bahasa Indonesia yang telah melalui proses *back-translation*. Tiap sub-skala menggunakan garis bipolar dengan 21 tick mark (0–100) yang dijelaskan dengan *anchor* verbal.

**Tahap 3 — Timing Pengisian:** Pengisian dilakukan dalam waktu maksimal 30 menit setelah shift berakhir untuk menghindari *recall bias* sekaligus mencegah *carry-over fatigue*.

**Tahap 4 — Card-Sorting:** Subjek memilih dari 15 pasang (C(6,2)=15) dimensi mana yang lebih "relevan" bagi pengalaman beban kerjanya. Bobot $w_i$ dihitung dari jumlah kemenangan tiap dimensi:

$$w_i = \sum_{j \neq i} \mathbb{1}(i \succ j)$$

dimana $\mathbb{1}(i \succ j)$ adalah indikator yang bernilai 1 jika responden memilih dimensi $i$ lebih dominan dibanding dimensi $j$.

**Tahap 5 — Pengolahan Data:** Dilakukan menggunakan perangkat lunak statistik (SPSS/Python). Langkah-langkah: (a) cleaning data; (b) uji normalitas Kolmogorov-Smirnov; (c) Cronbach's alpha; (d) one-sample t-test terhadap nilai referensi (skor 50 = beban kerja moderat); (e) regresi berganda untuk prediktor.

**Tahap 6 — Rekomendasi Intervensi:** Berdasarkan hasil, manajer operasional dapat menetapkan zona beban kerja: rendah (WTLX < 40), sedang (40–60), tinggi (60–80), dan sangat tinggi (> 80). Zona "sangat tinggi" memerlukan *immediate intervention* seperti *mandatory break*, *shift rotation*, atau *workload redistribution*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk memberikan pemahaman konkret, berikut adalah simulasi perhitungan yang mereplikasi temuan Rafi & Putra (2024, DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)) pada konteks 10 responden mitra kurir Shopee Express selama periode *flash sale* (volume parcel 3x baseline).

### 4.1 Data Input Mentah

Misalkan seorang kurir (Responden A) memberikan *raw rating* pada 6 sub-skala sebagai berikut (skala 0–100):

| Dimensi | Raw Rating ($r_i$) |
|---------|-------------------|
| Mental Demand (MD) | 85 |
| Physical Demand (PD) | 70 |
| Temporal Demand (TD) | 90 |
| Performance (OP) | 40 |
| Effort (EF) | 80 |
| Frustration (FR) | 65 |

**Total raw:** $r_{tot} = 85 + 70 + 90 + 40 + 80 + 65 = 430$

### 4.2 Penentuan Bobot melalui Card-Sorting

Misalkan hasil card-sort menghasilkan kemenangan sebagai berikut: MD=4, PD=2, TD=5, OP=1, EF=2, FR=1. Total = 15 ✓.

### 4.3 Perhitungan Weighted TLX

$$WTLX_A = \frac{(4 \cdot 85) + (2 \cdot 70) + (5 \cdot 90) + (1 \cdot 40) + (2 \cdot 80) + (1 \cdot 65)}{15}$$

$$= \frac{340 + 140 +