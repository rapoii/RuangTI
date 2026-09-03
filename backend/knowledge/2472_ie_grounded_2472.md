# 2472 — Analisis Beban Kerja Mental dan Fisik Operator Logistik E-Commerce Menggunakan Metode NASA-TLX dan Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Sektor logistik e-commerce di Indonesia mengalami ekspansi eksponensial pasca-pandemi COVID-19, dengan nilai transaksi menembus lebih dari USD 53 miliar pada 2023 dan proyeksi CAGR (Compound Annual Growth Rate) mendekati 23% dalam periode 2023–2027. Shopee Express, sebagai salah satu anak perusahaan pengiriman milik platform Shopee (Sea Group), mengandalkan ribuan *partner* (mitra kurir) yang tersebar di ribuan *hub* dan *last-mile sorting center* di seluruh Indonesia. Karakteristik pekerjaan mitra kurir bersifat *gig economy* — berbasis target paket harian, rute dinamis, tekanan waktu pengantaran (*same-day delivery*), serta interaksi langsung dengan pelanggan. Kondisi ini menciptakan paparan beban kerja mental yang signifikan, yang apabila tidak dikelola secara ergonomis akan meningkatkan risiko *burnout*, human error dalam *sorting*, dan kecelakaan kerja di lapangan.

Rafi dan Putra (2024) dalam studi peer-review yang dipublikasikan dengan DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385) menyoroti urgensi pengukuran beban kerja mental menggunakan *NASA Task Load Index* (NASA-TLX) sebagai instrumen subjektif terstandar yang dikembangkan oleh Hart dan Staveland (1988). Studi tersebut mengidentifikasi bahwa fluktuasi volume paket musiman (Harbolnas, Ramadan, dan 12.12 sale) menciptakan *peak load* yang tidak terdistribusi secara merata sepanjang tahun, sehingga pengukuran beban kerja menjadi *critical control point* bagi manajemen SDM operasional. Sementara itu, Aditya.R dan Putra (2024) pada DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) melengkapi kerangka analisis dengan mengintegrasikan teknik *work sampling* untuk memetakan proporsi aktivitas operator gudang (*receive*, *put-away*, *picking*, *packing*, *dispatch*), sehingga diperoleh gambaran holistik antara beban kerja fisik dan mental. Sinergi kedua pendekatan ini menjawab kebutuhan industri akan sistem pengukuran Workload yang tidak hanya subyektif (NASA-TLX) tetapi juga berbasis observasi aktivitas aktual, memenuhi prinsip *ergonomics macro-ergonomics* dalam ISO 6385:2016 tentang prinsip-prinsip ergonomi dalam perancangan sistem kerja.

Konteks ekonomi teknis menunjukkan bahwa *cost of poor workload management* — berupa *attrition* karyawan, retraining cost, kompensasi klaim barang rusak, dan penalti SLA (*Service Level Agreement*) — dapat mencapai 8–12% dari total operational expenditure perusahaan last-mile delivery. Oleh karena itu, adopsi metodologi NASA-TLX yang dikuantifikasi secara matematis bukan sekadar kebutuhan akademis, melainkan *business imperative* bagi keberlanjutan operasional logistik modern.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Konstruksi Instrumen NASA-TLX

NASA-TLX mengukur beban kerja melalui enam subskala multidimensi yang masing-masing dinilai responden pada rentang kontinum 0–100 (skala interval), yaitu:

- **MD** = Mental Demand (beban pikir/kognitif)
- **PD** = Physical Demand (beban fisik)
- **TD** = Temporal Demand (beban waktu)
- **PE** = Performance (persepsi kinerja sendiri)
- **EF** = Effort (upaya yang dikeluarkan)
- **FR** = Frustration (frustasi/iritasi)

Tahap pertama pengukuran menghasilkan **Raw TLX (RTLX)**, yaitu rata-rata aritmetika sederhana:

$$RTLX = \frac{MD + PD + TD + PE + EF + FR}{6} \quad (1)$$

Tahap kedua menentukan **bobot kontribusi** ($w_i$) melalui prosedur *pair-wise comparison* terhadap 15 pasangan subskala ($ \binom{6}{2} = 15 $). Setiap responden memilih subskala yang lebih dominan pada setiap pasangan. Bobot total per subskala $w_i \in \{0, 1, 2, 3, 4, 5\}$ dengan $\sum w_i = 15$.

**Weighted TLX Score** kemudian dihitung sebagai:

$$WTLX = \frac{\sum_{i=1}^{6} w_i \cdot R_i}{\sum_{i=1}^{6} w_i} = \frac{1}{15}\sum_{i=1}^{6} w_i \cdot R_i \quad (2)$$

dengan $R_i$ adalah *rating* subskala ke-$i$.

Interpretasi skor mengikuti klasifikasi Hart (2006): $WTLX < 20$ (rendah), $20 \leq WTLX < 40$ (sedang-rendah), $40 \leq WTLX < 60$ (sedang-tinggi), $60 \leq WTLX < 80$ (tinggi), dan $WTLX \geq 80$ (sangat tinggi/overload).

### 2.2 Work Sampling — Penentuan Ukuran Sampel

Pendekatan *work sampling* oleh Aditya.R dan Putra (2024) menggunakan pendekatan probabilitas binomial, di mana setiap observasi sesaat merupakan percobaan Bernoulli dengan peluang $p$ (proporsi aktivitas tertentu). Ukuran sampel minimum untuk tingkat keyakinan $(1-\alpha)$ dan margin of error $E$ adalah:

$$N = \frac{Z_{\alpha/2}^2 \cdot p(1-p)}{E^2} \quad (3)$$

dengan $Z_{\alpha/2}$ adalah nilai kritis distribusi normal standar (misal $Z_{0.025} = 1.96$ untuk $\alpha=0.05$). Untuk estimasi konservatif digunakan $p = 0.5$, sehingga persamaan menjadi:

$$N_{konservatif} = \frac{Z_{\alpha/2}^2}{4E^2} \quad (4)$$

Confidence interval proporsi aktivitas adalah:

$$CI = \hat{p} \pm Z_{\alpha/2} \sqrt{\frac{\hat{p}(1-\hat{p})}{N}} \quad (5)$$

dengan *standard error*:

$$SE = \sqrt{\frac{\hat{p}(1-\hat{p})}{N}} \quad (6)$$

Jumlah *round* observasi acak (*random instantaneous observation*) direkomendasikan sebesar:

$$R = \frac{N}{n_{obs}} \quad (7)$$

dengan $n_{obs}$ = jumlah operator yang diobservasi per round.

### 2.3 Indeks Beban Kerja Komposit

Untuk mengintegrasikan beban kerja mental dan aktivitas fisik, Rafi dan Putra (2024) mengusulkan **Composite Workload Index (CWI)** yang menormalisasi skor NASA-TLX terhadap proporsi waktu aktif:

$$CWI = WTLX \times \left( \frac{T_{active}}{T_{shift}} \right) \quad (8)$$

dengan $T_{active}$ = total waktu aktivitas produktif (dari work sampling) dan $T_{shift}$ = durasi shift kerja. Nilai $CWI > 60$ mengindikasikan *critical workload state* yang memerlukan intervensi manajerial.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Tahapan Implementasi NASA-TLX di Shopee Express Hub

```
┌─────────────────────────────────────────────────────────────┐
│ Tahap 1: Pre-Survey Preparation                              │
│   • Identifikasi populasi (n kurir aktif)                    │
│   • Penentuan teknik sampling (stratified random)            │
│   • Kalibrasi kuesioner & informed consent                   │
├─────────────────────────────────────────────────────────────┤
│ Tahap 2: Data Collection                                     │
│   • Kuesioner demografi + 6 subskala TLX (post-shift)       │
│   • Pair-wise comparison card (15 kartu)                     │
│   • Work sampling round: 2 shift × 40 round × 5 hari        │
├─────────────────────────────────────────────────────────────┤
│ Tahap 3: Scoring & Validasi                                  │
│   • Hitung RTLX dan WTLX per responden                       │
│   • Uji reliabilitas Cronbach's Alpha (≥ 0.70)               │
│   • Uji validitas konstruk (Pearson r antar subskala)        │
├─────────────────────────────────────────────────────────────┤
│ Tahap 4: Analisis & Rekomendasi                              │
│   • Identifikasi subskala dominan                            │
│   • Pemetaan aktivitas kritis (work sampling)                │
│   • Root cause analysis (5-Why atau Fishbone)                │
│   • Rekomendasi: redistribusi rute, rotasi shift, training   │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 SOP Work Sampling untuk Operator Gudang

Berdasarkan Aditya.R dan Putra (2024), SOP pengamatan adalah:

1. **Penentuan waktu observasi** secara acak menggunakan *random number generator* dengan interval 10–15 menit antar round.
2. **Pelatihan observer** selama 2×4 jam untuk memastikan *inter-rater reliability* ($\kappa \geq 0.75$).
3. **Klasifikasi aktivitas** ke dalam kategori terstandar: *Idle*, *Receiving*, *Put-away*, *Picking*, *Packing*, *Quality Check*, *Dispatch*, *Movement*.
4. **Pencatatan** pada *work sampling sheet* dengan kode aktivitas.
5. **Validasi data** — eliminasi round dengan waktu observasi tidak valid.
6. **Perhitungan proporsi** $\hat{p}_j$ per kategori aktivitas.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario Kasus: Shopee Express Hub Jakarta Selatan

**Profil Operator:** 12 mitra kurir Shopee Express, shift pagi (08.00–16.00 WIB, $T_{shift} = 480$ menit), volume paket harian rata-rata 95 paket/kurir.

**Langkah 1 — Perhitungan Ukuran Sampel Work Sampling**

Tetapkan $\alpha = 0.05$, $E = 0.05$, dan $p = 0.5$ (konservatif):

$$N = \frac{(1.96)^2 \cdot 0.5 \cdot 0.5}{(0.05)^2} = \frac{3.8416 \cdot 0.25}{0.0025} = 384.16 \approx 385 \text{ observasi}$$

**Langkah 2 — Penentuan Jumlah Round**

Dengan 12 operator yang diobservasi per round:

$$R = \frac{385}{12} = 32.08 \approx 33 \text{ round}$$

Round didistribusikan ke 5 hari kerja: $33/5 \approx 7$ round/hari, dengan interval acak 50–65 menit.

**Langkah 3 — Hasil Work Sampling (replikasi data tipikal)**

| No | Aktivitas | Jumlah Observasi | Proporsi ($\hat{p}_j$) | 95% CI |
|----|-----------|------------------|------------------------|--------|
| 1 | Receiving | 41 | 0.106 | [0.075, 0.137] |
| 2 | Sorting | 78 | 0.203 | [0.163, 0.243] |
| 3 | Picking | 62 | 0.161 | [0.125, 0.197] |
| 4 | Packing | 55 | 0.143 | [0.108, 0.178] |
| 5 | Dispatch | 48 | 0.125 | [0.092, 0.158] |