# 1752 — Analisis Beban Kerja Mental Menggunakan Metode NASA-TLX pada Operator Logistik Last-Mile dan Pergudangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analisis Beban Kerja Mental Karyawan Mitra Shopee Express dan Operator Gudang dengan Pendekatan NASA-TLX
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Universitas Peer-Reviewed Symposia*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Universitas Peer-Reviewed Symposia*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Ekosistem logistik *e-commerce* di Indonesia mengalami ekspansi eksponensial sejak dekade terakhir, didorong oleh penetrasi smartphone, adopsi platform marketplace (Shopee, Tokopedia, Lazada, TikTok Shop), serta pola konsumsi *on-demand* pasca-pandemi. Shopee Express sebagai salah satu mitra pengiriman milik Sea Group mengoperasikan jaringan *last-mile delivery* dengan volume paket harian yang melebihi kapasitas desain awal pada banyak *hub*_sortir. Rafi & Putra (2024) dalam paper ber-DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385) secara eksplisit mendokumentasikan fenomena *cognitive overload* yang dialami karyawan mitra Shopee Express, terutama pada shift pagi (*rush hour*) ketika volume Sortir_Inbound melonjak >300% terhadap beban baseline. Studi ini menegaskan bahwa pada operasi logistik modern, variabel bottleneck bukan lagi sekadar kapasitas fisik (throughput), melainkan kapasitas kognitif operator dalam memproses informasi multi-kanal (barcode scanner, aplikasi *driver-partner*, komunikasi radio, dan *dashboard* monitoring).

Urgensi ekonomis dari studi beban kerja mental ini bersifat strategis. Pertama, kelelahan kognitif (*mental fatigue*) berkorelasi langsung dengan *human error rate* — yang dalam konteks logistik_sortir berarti *mis-sort*, *misship*, dan *damage claim* yang menurunkan *service level agreement* (SLA). Kedua, *cognitive strain* berkorelasi positif dengan *turnover intention* — sebuah metrik kritis mengingat biaya rekrutmen dan pelatihan kurir last-mile di Indonesia berkisar 1,5–2,5 kali gaji bulanan. Ketiga, dari perspektif *occupational health & safety* (OSH), beban kerja mental berlebihan merupakan prediktor kuat terhadap *burnout syndrome* yang telah masuk dalam klasifikasi ICD-11 (QD85) WHO 2022.

Kontribusi intelektual paper Rafi & Putra (2024) terletak pada adaptasi instrumen NASA Task Load Index (NASA-TLX) — yang awalnya dikembangkan oleh Hart & Staveland (1988) untuk domain aviasi dan *air traffic control* — ke dalam konteks operasional *gig economy*物流 Indonesia. Studi pelengkap Aditya.R & Putra (2024) ber-DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) memperluas kerangka ini dengan mengintegrasikan teknik *work sampling* untuk mengkorelasikan proporsi waktu kerja efektif dengan skor beban mental operator gudang, sehingga memberikan validasi *convergent* terhadap reliabilitas NASA-TLX. Kedua paper ini menjadi referensi primer bagi insinyur industri yang hendak merancang sistem kerja ergonomis-total (*total ergonomic system*) di lingkungan high-throughput warehouse dan distribution center.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Konstruk Beban Kerja Mental NASA-TLX

NASA Task Load Index (NASA-TLX) adalah instrumen multidimensi yang mengukur beban kerja subjektif melalui enam subskala yang dikembangkan oleh Human Performance Group NASA Ames Research Center. Keenam dimensi tersebut adalah:

1. **Mental Demand (MD)** — Jumlah aktivitas perseptual dan kognitif yang diperlukan (misalnya, berpikir, memutuskan, menghitung, memantau).
2. **Physical Demand (PD)** — Jumlah aktivitas fisik yang diperlukan (misalnya, mendorong, mengangkat, berjalan, memindai).
3. **Temporal Demand (TD)** — Tingkat tekanan waktu yang dirasakan terkait dengan laju完成任务.
4. **Performance (P)** — Tingkat keberhasilan subjektif dalam mencapai tujuan任务 (skala *invers*: semakin rendah nilai, semakin tinggi persepsi kinerja).
5. **Effort (E)** — Sejauh mana pekerja harus bekerja keras (secara mental dan fisik) untuk mencapai tingkat kinerja.
6. **Frustration (F)** — Sejauh mana pekerja merasa tidak aman, terganggu, frustasi, atau tidak nyaman saat完成任务.

### 2.2. Formulasi Raw TLX (Unweighted)

Pada varian **Raw TLX** (RTLX) oleh Hart (2006), skor total beban kerja dihitung sebagai rata-rata aritmetika sederhana dari keenam rating:

$$TLX_{raw} = \frac{1}{6}\sum_{i=1}^{6} R_i = \frac{R_{MD} + R_{PD} + R_{TD} + R_{P} + R_{E} + R_{F}}{6}$$

di mana $R_i \in [0, 100]$ adalah rating dimensi $i$ pada Visual Analog Scale (VAS).

### 2.3. Formulasi Weighted TLX (Original NASA-TLX)

Pada varian orisinal, setiap dimensi diberi bobot hasil *paired comparison card sort* (15 pasangan biner), menghasilkan bobot $w_i \in \{0, 1, 2, ..., 5\}$ dengan $\sum_{i=1}^{6} w_i = 15$. Skor tertimbang adalah:

$$TLX_{weighted} = \frac{\sum_{i=1}^{6} (w_i \times R_i)}{15}$$

Nilai $TLX_{weighted}$ berada pada rentang $[0, 100]$, di mana:
- $0 \leq TLX < 20$: Beban kerja sangat rendah
- $20 \leq TLX < 40$: Beban kerja rendah-sedang
- $40 \leq TLX < 60$: Beban kerja sedang-tinggi
- $60 \leq TLX < 80$: Beban kerja tinggi
- $80 \leq TLX \leq 100$: Beban kerja sangat tinggi / *overload*

### 2.4. Korelasi dengan Work Sampling (Aditya.R & Putra, 2024)

Paper pendukung DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) mengusulkan integrasi dengan teknik *work sampling* yang dirumuskan sebagai:

$$P_i = \frac{n_i}{N} \times 100\%$$

dengan $n_i$ adalah jumlah observasi kategori aktivitas ke-$i$ dan $N$ adalah total observasi acak. Tingkat kejenuhan (*saturation rate*) didefinisikan:

$$SR = \frac{T_{productive}}{T_{available}} = \frac{\sum_{i \in productive} n_i}{N}$$

Uji korelasi Pearson antara $TLX_{weighted}$ dan $(1 - SR)$ mengukur seberapa erat beban mental berkorelasi dengan utilisasi waktu:

$$r = \frac{\sum_{k=1}^{n}(TLX_k - \overline{TLX})(U_k - \overline{U})}{\sqrt{\sum_{k=1}^{n}(TLX_k - \overline{TLX})^2 \cdot \sum_{k=1}^{n}(U_k - \overline{U})^2}}$$

di mana $U_k = 1 - SR_k$ adalah *idle time proportion* responden ke-$k$.

### 2.5. Uji Reliabilitas dan Validitas

Koefisien Cronbach's Alpha untuk konsistensi internal enam subskala:

$$\alpha = \frac{k}{k-1}\left(1 - \frac{\sum_{i=1}^{k} \sigma_i^2}{\sigma_{total}^2}\right)$$

dengan $k = 6$ subskala. Nilai $\alpha \geq 0,70$ mengindikasikan reliabilitas yang dapat diterima (Nunnally, 1978).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Diagram Alir Implementasi NASA-TLX di Industri Logistik

```
┌─────────────────────────────┐
│ FASE 1: IDENTIFIKASI SHIFT  │
│ & ROLE OPERATOR             │
│ (Sortir/Picker/Packer/      │
│  Kurir Last-Mile)           │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│ FASE 2: PENENTUAN SAMPEL    │
│ n = (Z²·σ²)/E²             │
│ (Z=1,96; σ=15; E=5)        │
│ → minimal n ≈ 35 responden  │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│ FASE 3: WORK SAMPLING       │
│ (Opsional, 200 observasi,   │
│  interval acak 3-5 menit)   │
│ → hitung SR & U             │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│ FASE 4: PEMBAGIAN KUESIONER │
│ NASA-TLX (6 dimensi VAS)    │
│ + 15 kartu paired-compare   │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│ FASE 5: SKORING &           │
│ PERHITUNGAN TLX_weighted    │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│ FASE 6: ANALISIS STATISTIK  │
│ (Cronbach α, Pearson r,     │
│  ANOVA lintas shift)        │
└──────────────┬──────────────┘
               │
               ▼
┌─────────────────────────────┐
│ FASE 7: REKOMENDASI         │
│ ERGONOMI TOTAL              │
│ (Rotasi shift, tooling,     │
│  automasi, micro-break)     │
└─────────────────────────────┘
```

### 3.2. SOP Pengukuran NASA-TLX (Adaptasi Rafi & Putra, 2024)

1. **Pra-survei (T-7 hari):** Wawancara supervisor dan observasi awal untuk memetakan *job description* aktual per role.
2. **Kalibrasi Instrumen:** Latih enumerator untuk menjelaskan VAS tanpa bias *leading question*. Gunakan *anchor* verbal: 0 = "tidak ada sama sekali", 50 = "sedang", 100 = "sangat besar/maksimal".
3. **Random Sampling Acak:** Tentukan responden dengan *stratified random sampling* berdasarkan shift (pagi/siang/malam) dan pengalaman kerja (<1 tahun, 1–3 tahun, >3 tahun).
4. **Pengisian Kuesioner:** Dilakukan *post-task* dalam window 10–15 menit setelah shift berakhir untuk menghindari *recency bias* parsial tetapi masih dalam jangkauan memori kerja.
5. **Paired Comparison Card Sort:** Responden memilih di antara 15 pasangan (C(6,2) = 15) dimensi mana yang "lebih berkontribusi" terhadap beban kerja任务 yang baru saja diselesaikan.
6. **Skoring Manual atau *Digital Form*:** Bobot $w_i$ = jumlah kemenangan dimensi $i$ dalam paired comparison. Rating $R_i$ dibaca dari VAS.
7. **Verifikasi Data:** Uji *Mahalanobis distance* untuk剔除 outlier multivariate, dan uji *normalitas* Shapiro-Wilk untuk validitas uji parametrik.

### 3.3. Standar Referensi Industri

- **ISO 9241-210:2019** — Ergonomics of human-system interaction (Human-centred design).
- **ISO 10075-1:2017** — Ergonomic principles related to mental workload (General issues, concepts).
- **SNI 9011:2021** — *Standar Nasional Indonesia* untuk pengukuran beban kerja (mengacu pada metode Pulmon capacity + NASA-TLX).
- **Kepmenakertrans No. KEP.235/MEN/2003** — Standar beban kerja fisik dan mental di Indonesia.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Profil Kasus (Berdasarkan Rafi & Putra, 2024)

Misalkan dilakukan survei pada 30 operator sortir Shopee Express di *hub* Surabaya selama 7 hari kerja. Hasil rating rata-rata dan paired-comparison adalah sebagai berikut:

| Dimensi | Rating $\bar{R_i}$ | Kemenangan PC | Bobot $w_i$ |
|---|---|---|---|
| Mental Demand (MD) | 78 | 5 | 5 |
| Physical Demand (PD) | 55 | 3 | 3 |
| Temporal Demand (TD) | 82 | 4 | 4 |
| Performance (P) | 35 | 1 | 1 |
| Effort (E) | 75 | 2 | 2 |
| Frustration (F) | 60 | 0 | 0 |
| **Total Bobot** | — | 15 | **15** |

### 4.2. Perhitungan Step-by-Step

**Langkah 1:** Hitung kontribusi tertimbang setiap dimensi:

$$\text{Kontribusi}_i = w_i \times R_i$$

| Dimensi | $w_i$ | $R_i$ | $w_i \times R_i$ |
|---|---|---|---|
| MD | 5 | 78 | 390 |
| PD | 3 | 55 | 165 |
| TD | 4 | 82 | 328 |
| P  |.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
