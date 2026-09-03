# 1672 — Analisis Beban Kerja Mental Operator Logistik Last-Mil menggunakan Metode NASA-TLX dalam Ekosistem E-Commerce

**Domain:** Teknik Industri & Rekayasa Sistem Industri (Ergonomi Kognitif, Manajemen Operasi, dan Logistik Digital)
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Universal Proceedings of Scientific Research*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Universal Proceedings of Scientific Research*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Ekspansi e-commerce di Asia Tenggara, khususnya di Indonesia yang diproyeksikan mencapai Gross Merchandise Value (GMV) lebih dari USD 104 miliar pada 2025 (Bain & Company, 2023; Raffi & Putra, 2024), telah mengubah secara fundamental struktur permintaan tenaga kerja pada segmen *last-mile delivery*. Shopee Express, sebagai salah satu pilar logistik milik PT Shopee International Indonesia, mengandalkan ribuan *partner* (mitra kurir perseorangan) untuk menangani volume paket yang berfluktuasi tajam, terutama pada momentum *peak season* seperti Harbolnas (Hari Belanja Online Nasional), Ramadan, dan Double Date Sale. Berbeda dengan karyawan tetap, *partner* kurir menghadapi sistem pembayaran berbasis *piece-rate*, jam kerja yang elastis, serta paparan terhadap *multitasking* yang sangat tinggi — yaitu kombinasi antara navigasi rute, verifikasi paket, komunikasi dengan pelanggan, dan tekanan target pengiriman harian (Rafi & Putra, 2024, DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)).

Urgensi penelitian beban kerja mental pada konteks ini tidak terlepas dari fakta bahwa kelelahan kognitif (*cognitive fatigue*) merupakan prediktor signifikan terhadap kecelakaan kerja, tingkat *turnover* mitra, dan degradasi kualitas layanan pelanggan (Customer Satisfaction Score/CSAT). Menurut studi Aditya.R dan Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) pada operator gudang, korelasi antara beban kerja mental dengan produktivitas fisik berada pada koefisien Pearson $r = -0{,}62$, mengindikasikan bahwa setiap peningkatan 1 unit skor NASA-TLX berpotensi menurunkan throughput operasional hingga 8–12%. Oleh sebab itu, analisis ergonomis kognitif menjadi *enabler* strategis bagi perusahaan logistik untuk menekan *cost of quality*, mempertahankan *Service Level Agreement* (SLA), dan memenuhi amanat Keselamatan dan Kesehatan Kerja (K3) sesuai Permenaker No. 5 Tahun 2018 tentang Keselamatan dan Kesehatan Kerja di Tempat Kerja.

Lebih lanjut, struktur bisnis *gig economy* pada Shopee Express memperkenalkan variabel psikososial unik: ketidakpastian pendapatan, isolasi sosial saat beroperasi sendiri di lapangan, dan minimnya *supervisory control* langsung. Kondisi ini membedakan beban kerja mental mitra kurir dari operator gudang tetap, karena paparan terhadap *unpredictable external stressors* (kemacetan, perubahan alamat pelanggan, kegagalan sistem *real-time tracking*) jauh lebih dominan dibanding *internal stressors* yang biasanya diukur pada lingkungan manufaktur. Konsekuensinya, kerangka kerja pengukuran beban kerja tidak cukup hanya mengandalkan pengukuran waktu siklus (seperti *Methods-Time Measurement* atau *Work Sampling*), melainkan harus mengintegrasikan dimensi subjektif melalui instrumen tervalidasi seperti NASA-TLX (Hart & Staveland, 1988). Hal inilah yang menjadi justifikasi utama penelitian Rafi & Putra (2024) untuk memilih NASA-TLX sebagai instrumen utama, guna memetakan *sweet spot* antara intensitas kerja dan kapasitas kognitif mitra kurir Shopee Express dalam mempertahankan SLA 24–48 jam untuk pengiriman *same-city*.

## 2. Landasan Teori & Formulasi Matematis

NASA-TLX (NASA Task Load Index) merupakan instrumen multidimensi yang dikembangkan oleh Sandra Hart dan Lowell Staveland (1988) untuk mengukur beban kerja subjektif melalui enam dimensi utama: *Mental Demand* (MD), *Physical Demand* (PD), *Temporal Demand* (TD), *Performance* (Pe), *Effort* (E), dan *Frustration* (Fr). Setiap dimensi dievaluasi menggunakan *bipolar Likert scale* 0–100 dengan interval 5 poin, lalu dibobotkan melalui prosedur perbandingan berpasangan (*paired comparison*) yang menghasilkan *weight vector* $\mathbf{w} = [w_1, w_2, ..., w_6]$, di mana $\sum_{i=1}^{6} w_i = 15$ karena terdapat $\binom{6}{2} = 15$ pasangan perbandingan (Rafi & Putra, 2024).

**Skor Beban Kerja Mental Individual (Raw TLX):**

$$TLX_{raw} = \frac{\sum_{i=1}^{6} (w_i \cdot r_i)}{\sum_{i=1}^{6} w_i} = \frac{\sum_{i=1}^{6} w_i \cdot r_i}{15}$$

di mana $r_i$ adalah *raw score* dimensi ke-$i$ pada rentang $[0, 100]$.

Karena prosedur *paired comparison* dianggap terlalu panjang untuk diterapkan pada ratusan mitra kurir di lapangan, Rafi & Putra (2024) mengadopsi varian **Raw TLX (RTLX)** yang cukup menggunakan rata-rata aritmetika tertimbang sederhana:

$$RTLX = \frac{\sum_{i=1}^{6} r_i}{6}$$

Namun untuk analisis inferensial, paper tersebut tetap mempertahankan *weighted score* penuh. Validitas instrumen ini telah teruji secara psikometrik dengan Cronbach's Alpha $\alpha \geq 0{,}78$ pada berbagai studi lintas industri (Aditya.R & Putra, 2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)).

**Formula Uji Statistik Korelasi Pearson:**

$$r_{xy} = \frac{n\sum_{i=1}^{n} x_i y_i - \sum_{i=1}^{n} x_i \sum_{i=1}^{n} y_i}{\sqrt{\left[n\sum_{i=1}^{n} x_i^2 - \left(\sum_{i=1}^{n} x_i\right)^2\right]\left[n\sum_{i=1}^{n} y_i^2 - \left(\sum_{i=1}^{n} y_i\right)^2\right]}}$$

Formula ini digunakan untuk menguji korelasi antara skor TLX dengan variabel dependen seperti jumlah paket ter-handle, *delivery success rate*, atau *error rate* input data ke aplikasi mitra.

**Kategori Beban Kerja (Rafi & Putra, 2024):**

$$Kategori = \begin{cases} \text{Rendah}, & TLX \in [0, 33) \\ \text{Sedang}, & TLX \in [33, 67) \\ \text{Tinggi}, & TLX \in [67, 100] \end{cases}$$

Untuk verifikasi signifikansi antar-kelompok (misalnya *shift* pagi vs *shift* siang), digunakan uji non-parametrik Mann-Whitney U:

$$U = n_1 n_2 + \frac{n_1(n_1+1)}{2} - R_1$$

di mana $n_1, n_2$ adalah ukuran sampel kedua kelompok dan $R_1$ adalah jumlah *rank* kelompok 1. Penolakan $H_0$ terjadi bila $U \leq U_{\alpha, n_1, n_2}$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi NASA-TLX pada mitra kurir Shopee mengikuti SOP 6-tahap yang distandarisasi oleh Rafi & Putra (2024):

```
┌─────────────────────────────────────────────────────────────────┐
│  FASE 1: IDENTIFIKASI POPULASI & SAMPLING                       │
│  - Populasi: 120 mitra aktif di Hub Jakarta Selatan             │
│  - Teknik: stratified random sampling (strata: shift & zona)    │
│  - Responden valid: n = 80 (response rate 67%)                  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  FASE 2: DESAIN INSTRUMEN & UJI COBA (PILOT TEST)               │
│  - Kuesioner NASA-TLX versi Bahasa Indonesia (tervalidasi)      │
│  - Pilot: 10 responden → Cronbach's α = 0,82                   │
│  - Uji face validity oleh 2 ergonomis senior                    │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  FASE 3: PENGUMPULAN DATA PRIMER                               │
│  - Wawancara terstruktur + self-administered survey             │
│  - Waktu: 1–2 jam sebelum shift berakhir (debriefing window)    │
│  - Dokumentasi digital via Google Form + korektor enumerator    │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  FASE 4: PEMBOBOTAN & PERHITUNGAN                              │
│  - 15 kartu perbandingan berpasangan → weight vector (w)       │
│  - Raw scores (r_i) → weighted TLX score                       │
│  - Cleaning data: filter outlier (>3σ atau <−3σ)                │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  FASE 5: ANALISIS STATISTIK & INTERPRETASI                     │
│  - Uji normalitas (Shapiro-Wilk) → pilih parametric/non        │
│  - Uji beda (Mann-Whitney U / independent t-test)              │
│  - Korelasi (Pearson/Spearman) → TLX vs KPI operasional        │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  FASE 6: REKOMENDASI ERGONOMIS & FEEDBACK LOOP                 │
│  - Redistribusi zona pengiriman                                │
│  - Modulasi target harian (piece-rate)                          │
│  - Micro-break scheduling (5 menit per 90 menit operasi)        │
│  - Training cognitive load management                          │
└─────────────────────────────────────────────────────────────────┘
```

Tahapan ini mengikuti kerangka kerja *ergonomic assessment* yang direkomendasikan oleh International Ergonomics Association (IEA, 2018) serta prosedur pengukuran beban kerja yang diadopsi Aditya.R & Putra (2024) untuk konteks gudang, dengan adaptasi spesifik berupa *in-field deployment* karena mitra kurir tidak kembali ke *base* secara berkala.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus: Mitra Kurir Shopee Express Hub Cilandak — Senin, 12 Agustus 2024**

Hipotesis: 30 mitra kurir (*shift* siang, zona Cilandak-Pondok Labu) mengalami beban kerja mental yang melebihi ambang batas aman (TLX > 67) selama periode *flash sale*.

**Tabel 1. Raw Score NASA-TLX (Sampel n = 5 Mitra Representatif)**

| Responden | MD | PD | TD | Pe | E | Fr |
|-----------|-----|-----|-----|-----|-----|-----|
| R-01 | 85 | 70 | 90 | 40 | 80 | 75 |
| R-02 | 70 | 65 | 75 | 50 | 70 | 60 |
| R-03 | 90 | 80 | 85 | 35 | 85 | 80 |
| R-04 | 60 | 55 | 70 | 60 | 65 | 50 |
| R-05 | 75 | 70 | 80 | 45 | 75 | 70 |

**Langkah 1: Perhitungan Bobot (*Pairwise Comparison*) untuk R-01**

Untuk 6 dimensi, dihasilkan 15 pasangan. Misalkan R-01 memilih kontribusi dominan pada dimensi sebagai berikut (skala 0–4 poin per pasangan, total 15 poin):

- MD (4) > PD (1) > TD (3) > Pe (2) > E (3) > Fr (2)

Total bobot: $w_{MD} + w_{PD} + w_{TD} + w_{Pe} + w_{E} + w_{Fr} = 4 + 1 + 3 + 2 + 3 + 2 = 15$ ✓

**Langkah 2: Perhitungan Weighted TLX untuk R-01**

$$TLX_{R-01} = \frac{(4 \times 85) + (1 \times 70) + (3 \times 90) + (2 \times 40) + (3 \times 80) + (2 \times 75)}{15}$$

$$TLX_{R-01} = \frac{340 + 70 + 270 + 80 + 240 + 150}{15} = \frac{1150}{15} = 76{,}67$$

**Langkah 3: Perhitungan untuk Seluruh Responden**

| Responden | Perhitungan Weighted | TLX Score | Kategori |
|-----------|----------------------|-----------|----------|
| R-01 | $(4·85+1·70+3·90+2·40+3·80+2·75)/15 = 1150/15$ | **76,67** | Tinggi |
| R-02 | $(2·70+2·65+3·75+1·50+4·70+3·60)/15 = 940/15$ | **62,67** | Sedang |
| R-03 | $(5·90+1·80+4·85+1·35+2·85+2·80)/15 = 1245/15$ | **83,00** | Tinggi |
| R-04 | $(1·60+2·55+2·70+4·60+3·65+3·50)/15 = 825/15$ | **55,00** | Sedang |
| R-05 | $(3·75+2·70+3·80+2·45+3·75+2·70)/15 = 1085/15$ | **72,33** | Tinggi |

**Langkah 4: Statistik Deskriptif & Korelasi**

Rata-rata sampel: $\bar{TLX} = \frac{76{,}67+62{,}67+83{,}00+55{,}00+72{,}33}{5} = 69{,}93$

Standar deviasi: $s = \sqrt{\frac{\sum (x_i - \bar{x})^2}{n-1}} = \sqrt{\