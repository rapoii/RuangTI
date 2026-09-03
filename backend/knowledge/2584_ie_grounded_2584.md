# 2584 — Analisis Beban Kerja Mental Operator Logistik E-Commerce Menggunakan Metode NASA-TLX dan Integrasi Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Sektor logistik e-commerce di Asia Tenggara mengalami ekspansi eksponensial dalam satu dekade terakhir, dipicu oleh adopsi masif platform marketplace seperti Shopee, Tokopedia, dan Lazada. Shopee Express sebagai salah satu ujung tombak last-mile delivery di bawah naungan Sea Group menghadapi tantangan operasional yang unik: volume paket harian yang bersifat *stochastic* dengan lonjakan musiman (Harbolnas, Ramadan, 11.11, 12.12), *Service Level Agreement* (SLA) pengiriman 24–48 jam, serta ketergantungan pada model *partner* (mitra) yang tidak selalu berada di bawah kontrol langsung perusahaan. Dalam konteks ini, *Shopee Express Partner Employees* (karyawan mitra Shopee Express) menjadi titik kritis yang menentukan *last-mile performance*, kepuasan pelanggan, dan *brand reputation*.

Paper Muhammad Rafi dan Boy Isma Putra (2024) yang dipublikasikan dengan DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385) menyoroti satu aspek yang sering terabaikan dalam *supply chain literature*, yaitu **beban kerja mental (mental workload)** dari operator sortir, kurir, dan admin mitra. Berbeda dengan *physical workload* yang relatif mudah diukur melalui *heart rate monitoring*, *energy expenditure*, atau *postural analysis* (OWAS, RULA), beban kerja mental bersifat *latent* dan multidimensional — ia mencakup kognitif (pengambilan keputusan), perseptual (pemindaian barcode), temporal (tekanan waktu), dan afektif (frustrasi akibat paket rusak atau pelanggan tidak kooperatif). Jika beban kerja mental melebihi kapasitas kognitif operator, konsekuensinya bersifat *non-linear*: peningkatan *error rate* sortir, *mis-route*, *delay* pengantaran, kelelahan kronis, hingga *turnover* yang merugikan secara finansial bagi perusahaan mitra maupun Shopee sebagai principal.

Urgensi ekonomis dari studi ini dapat dikuantifikasi. Dengan asumsi rata-rata mitra Shopee Express mempekerjakan 8–15 operator dan memproses 500–2.000 paket per hari, setiap 1% peningkatan *error rate* sortir mewakili kerugian Rp 50–150 juta per bulan per hub (berdasarkan nilai klaim, *reverse logistics cost*, dan kompensasi pelanggan). Lebih jauh, *turnover* operator sortir di Indonesia tercatat mencapai 40–60% per tahun pada sektor *gig-economy logistics*, sehingga investasi pada *workload engineering* bukan sekadar *operational excellence* melainkan *business continuity imperative*.

Studi komplementer dari M. Andre Aditya.R dan Boy Isma Putra (2024) dengan DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) memperkuat justifikasi dengan menunjukkan bahwa *workload analysis* pada operator warehouse (yang secara kontekstual mirip dengan operator hub Shopee Express) tidak cukup hanya mengandalkan *work sampling* (analisis proporsi waktu kerja) — melainkan harus diintegrasikan dengan pengukuran *mental workload* menggunakan NASA-TLX. Paper ini menunjukkan bahwa operator dengan proporsi waktu aktif fisik tinggi belum tentu memiliki beban kerja mental yang proporsional; justru ditemukan *mismatch* antara *physical utilization* (≈78%) dan *mental demand rating* (skor 78 dari 100) yang mengindikasikan *cognitive overload* terselubung. Kedua paper ini secara sinergis membangun kerangka metodologis untuk mengukur, menganalisis, dan merekayasa ulang sistem kerja operator logistik modern agar berada pada *optimal cognitive load zone*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. NASA-Task Load Index (NASA-TLX)

NASA-TLX adalah instrumen multidimensi pengembangan subjektif beban kerja yang dirancang oleh Sandra G. Hart dan Lowell E. Staveland (1988) di NASA Ames Research Center, dan telah divalidasi secara ekstensif di lebih dari 500 studi lintas-domain (aviasi, medis, manufaktur, logistik). Instrumen ini mengukur beban kerja melalui enam subskala yang saling ortogonal:

| Simbol | Subskala | Deskripsi |
|:------:|:---------|:----------|
| $MD$ | Mental Demand | Jumlah aktivitas berpikir, decision-making, kalkulasi |
| $PD$ | Physical Demand | Jumlah aktivitas fisik yang diperlukan |
| $TD$ | Temporal Demand | Tingkat tekanan waktu |
| $P$ | Performance | Tingkat keberhasilan pencapaian tujuan tugas |
| $E$ | Effort | Seberapa keras (mental + fisik) yang harus dikerahkan |
| $F$ | Frustration | Tingkat iritasi, stress, demotivasi saat bekerja |

Setiap subskala dinilai responden menggunakan *Likert bipolar scale* 0–100, dengan *paired comparison* (15 pasangan) untuk menentukan *weight* masing-masing subskala.

#### 2.1.1. Rumus Weighted Raw TLX (RTL)

Skor total NASA-TLX dihitung sebagai rata-rata terboboti dari keenam subskala:

$$\text{RTLX}_{weighted} = \frac{\sum_{i=1}^{6} w_i \cdot r_i}{15}$$

di mana $w_i \in \{0, 1, 2, 3, 4, 5\}$ adalah bobot hasil *paired comparison* untuk subskala ke-$i$, dan $r_i \in [0, 100]$ adalah *raw rating* subskala ke-$i$. Pembagi 15 bersumber dari jumlah total perbandingan pasangan $\binom{6}{2} = 15$, sehingga bobot ternormalisasi berada pada rentang 0–1 secara implisit.

#### 2.1.2. Rumus Unweighted Raw TLX

Versi ringkas (unweighted) yang umum digunakan untuk *screening* cepat:

$$\text{RTLX}_{unweighted} = \frac{1}{6} \sum_{i=1}^{6} r_i = \frac{MD + PD + TD + P + E + F}{6}$$

#### 2.1.3. Interpretasi Skor TLX

Berdasarkan *benchmark* yang digunakan Rafi & Putra (2024) dan Aditya.R & Putra (2024):

| Skor TLX | Kategori | Implikasi Ergonomis |
|:--------:|:---------|:--------------------|
| 0–20 | *Very Low* | Underload, potensi *boredom* & inefisiensi |
| 21–40 | *Low* | Beban kerja terkelola dengan baik |
| 41–60 | *Moderate* | Beban mulai memerlukan perhatian manajerial |
| 61–80 | *High* | Risiko *cognitive fatigue* dan *error rate* naik |
| 81–100 | *Very High* | *Cognitive overload*, intervensi restrukturisasi urgent |

### 2.2. Work Sampling (Sampling Pekerjaan)

Work sampling adalah teknik statistik untuk menentukan proporsi waktu yang dihabiskan operator pada berbagai kategori aktivitas. Metode ini dikembangkan dari teori *acceptance sampling* dan hukum probabilitas binomial.

#### 2.2.1. Estimasi Proporsi Aktivitas

$$\hat{p} = \frac{x}{n}$$

di mana $\hat{p}$ = estimasi proporsi aktivitas kategori tertentu, $x$ = frekuensi observasi kategori tersebut, $n$ = total observasi.

#### 2.2.2. Standar Error dan Confidence Interval

Karena $\hat{p}$ adalah estimator binomial, *standard error*-nya:

$$SE_{\hat{p}} = \sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$$

Confidence interval 95% (menggunakan $Z_{0.025} = 1.96$):

$$CI_{95\%} = \hat{p} \pm Z_{\alpha/2} \cdot \sqrt{\frac{\hat{p}(1-\hat{p})}{n}}$$

#### 2.2.3. Penentuan Jumlah Sampel Minimum

Untuk memastikan presisi tertentu, jumlah observasi minimum yang dibutuhkan:

$$n_{min} = \frac{Z_{\alpha/2}^{2} \cdot \hat{p}(1-\hat{p})}{E^{2}}$$

di mana $E$ = *margin of error* yang diinginkan (misal 0.05 untuk akurasi ±5%).

### 2.3. Integrasi NASA-TLX dengan Work Sampling

Rafi & Putra (2024) serta Aditya.R & Putra (2024) mengusulkan kerangka integratif di mana skor NASA-TLX dikorelasikan dengan proporsi *productive time*, *idle time*, dan *delay* dari work sampling menggunakan *Pearson Product-Moment Correlation*:

$$r_{XY} = \frac{n\sum_{i=1}^{n} X_i Y_i - \sum X_i \sum Y_i}{\sqrt{[n\sum X_i^2 - (\sum X_i)^2][n\sum Y_i^2 - (\sum Y_i)^2]}}$$

Serta *Mental Workload Index* (MWLI) komposit:

$$\text{MWLI} = \alpha \cdot \text{RTLX} + \beta \cdot (1 - P_{prod})$$

di mana $P_{prod}$ = proporsi waktu produktif, dan $\alpha, \beta$ adalah koefisien bobot yang diset berdasarkan prioritas organisasi (umumnya $\alpha = 0.6$, $\beta = 0.4$).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Tahapan Implementasi NASA-TLX di Shopee Express Hub

Berdasarkan protokol Rafi & Putra (2024), berikut adalah SOP 7 tahap untuk analisis beban kerja mental operator mitra Shopee Express:

**Tahap 1 — Identifikasi Stakeholder & Unit Analysis**
Tentukan *scope* analisis: apakah mencakup operator sortir, kurir, admin, atau *cross-functional*. Lakukan *preliminary interview* dengan *hub manager* untuk memahami keluhan utama.

**Tahap 2 — Penentuan Responden & Sampling**
Gunakan stratified random sampling dengan strata: shift pagi (06.00–14.00), shift siang (14.00–22.00), shift malam (22.00–06.00). Minimum responden per strata mengikuti rumus Slovin:

$$n = \frac{N}{1 + N \cdot e^2}$$

di mana $N$ = populasi operator, $e$ = *margin of error* (umumnya 0.05 atau 0.10).

**Tahap 3 — Briefing & Informed Consent**
Sesi pengarahan 30 menit untuk memastikan responden memahami keenam subskala NASA-TLX tanpa bias.

**Tahap 4 — Pengisian Kuesioner**
Responden mengisi *rating* keenam subskala (0–100) dan *paired comparison* (15 pasangan) pasca-shift atau pada saat *stabilized workload* (middle of shift).

**Tahap 5 — Perhitungan Skor TLX**
Aplikasikan rumus RTLX weighted (Persamaan 2.1.1) untuk setiap responden, lalu agregasi menggunakan rata-rata:

$$\overline{\text{RTLX}} = \frac{1}{m} \sum_{j=1}^{m} \text{RTLX}_j$$

**Tahap 6 — Work Sampling Cross-Validation**
Lakukan observasi *random instant* setiap 2 menit selama 8 jam shift menggunakan aplikasi digital (misal *WorkStudy+*). Total minimal $n_{min} = 769$ observasi (dari Persamaan 2.2.3 dengan $\hat{p}=0.5$, $E=0.035$).

**Tahap 7 — Analisis & Rekomendasi Engineering**
Integrasikan skor TLX dengan proporsi aktivitas, identifikasi *mismatch*, dan susun rekomendasi restrukturisasi (penjadwalan shift, *task rotation*, otomatisasi parsial).

### 3.2. Diagram Alir Proses Analisis

```
┌────────────────────────┐
│  Identifikasi Masalah  │
│  (Hub Manager Brief)   │
└──────────┬─────────────┘
           ▼
┌────────────────────────┐
│  Stratified Sampling   │
│  (Pagi/Siang/Malam)    │
└──────────┬─────────────┘
           ▼
┌────────────────────────┐
│  Briefing Responden    │
│  (NASA-TXL Manual)     │
└──────────┬─────────────┘
           ▼
┌────────────────────────┐
│  Rating 6 Subskala +   │
│  Paired Comparison     │
└──────────┬─────────────┘
           ▼
┌────────────────────────┐
│  Hitung Weighted RTLX  │
└──────────┬─────────────┘
           ▼
┌────────────────────────┐
│  Work Sampling Paralel  │
│  (n ≥ 769 obs)         │
└──────────┬─────────────┘
           ▼
┌────────────────────────┐
│  Korelasi TLX