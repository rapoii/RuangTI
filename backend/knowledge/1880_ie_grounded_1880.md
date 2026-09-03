# 1880 — Analisis Beban Kerja Mental Operator Logistik E-Commerce dan Pergudangan Menggunakan Metode NASA-TLX dan Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Industri *e-commerce* di Indonesia mengalami pertumbuhan eksponensial sepanjang dekade terakhir, dengan penetrasi digital yang semakin masif pasca-pandemi COVID-19. Sebagai tulang punggung rantai pasok digital, perusahaan *last-mile delivery* seperti Shopee Express menghadapi tantangan operasional yang unik: volume pesanan yang fluktuatif musiman, target *Service Level Agreement* (SLA) yang semakin ketat (sering kali di bawah 24 jam untuk pengiriman *same-day*), serta tekanan *customer experience* yang mendorong kompleksitas kognitif operator di setiap titik operasional. Dalam konteks ini, mitra pengiriman (Partner) Shopee Express tidak hanya berfungsi sebagai eksekutor fisik pengantaran, tetapi juga sebagai agen pengambilan keputusan mikro (penentuan rute alternatif, validasi paket, interaksi dengan pelanggan, serta penyelesaian pengecualian operasional seperti *failed delivery*).

Penelitian Rafi dan Putra (2024, DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)) secara eksplisit menyoroti bahwa beban kerja mental operator *last-mile* belum terukur secara kuantitatif di Indonesia, padahal beban mental berkorelasi langsung dengan *human error*, kelelahan, *burnout*, dan akhirnya terhadap *defect rate* logistik yang merusak reputasi platform. Studi mereka填补 dengan mengaplikasikan instrumen *NASA Task Load Index* (NASA-TLX) — instrumen psikometrik subjektif yang telah terstandarisasi sejak Hart & Staveland (1988) — untuk mengukur enam dimensi beban kerja secara simultan.

Secara paralel, Aditya dan Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) memperkuat basis metodologis dengan menggabungkan NASA-TLX dan teknik *Work Sampling* (pengamatan instan) untuk operator gudang, sebuah pendekatan hibrida yang mengatasi keterbatasan masing-masing metode bila digunakan secara terpisah. Kombinasi ini memungkinkan triangulasi antara beban kerja subjektif (persepsi operator) dan beban kerja objektif (proporsi waktu terhadap aktivitas produktif, idle, dan tunggu).

Urgensi penelitian ini tidak hanya akademis tetapi juga ekonomis. Data BPS dan laporan McKinsey menunjukkan bahwa *cost of labor* di sektor logistik menyumbang 35–45% dari total biaya operasional, sehingga *misallocation* beban kerja secara langsung menggerus margin. Tanpa pengukuran beban mental yang valid, keputusan *headcount planning*, *shift scheduling*, dan insentif kinerja akan suboptimal, berpotensi meningkatkan *turnover* yang di industri *gig economy* Indonesia sudah melebihi 40% per tahun.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Instrumen NASA-TLX: Arsitektur Pengukuran

NASA-TLX (Hart & Staveland, 1988) mengukur beban kerja pada enam subskala multidimensi yang masing-masing dievaluasi pada rentang kontinu 0–100 melalui *visual analog scale* (VAS):

1. **Mental Demand (MD):** Aktivitas kognitif dan perseptual yang dibutuhkan (berpikir, memutuskan, mengamati).
2. **Physical Demand (PD):** Aktivitas fisik yang dibutuhkan (mendorong, mengangkat, berjalan).
3. **Temporal Demand (TD):** Tekanan waktu yang dirasakan (tingkat *urgency*).
4. **Performance (PE):** Persepsi sukses terhadap pencapaian tujuan tugas (skala *terbalik*: nilai rendah = kinerja baik).
5. **Effort (EF):** Tingkat usaha yang dikeluarkan untuk mencapai kinerja.
6. **Frustration (FR):** Tingkat frustrasi, stres, dan ketidaknyamanan selama bekerja.

### 2.2 Raw TLX (RTLX)

Formulasi paling sederhana adalah penjumlahan langsung keenam skor:

$$RTLX = MD + PD + TD + PE + EF + FR$$

dengan rentang teoritis $[0, 600]$.

### 2.3 Weighted TLX (WTLX)

Versi berbobot melibatkan dua tahap:

**Tahap 1 — Pairwise Comparison.** Dari 6 subskala, dilakukan $\binom{6}{2} = 15$ perbandingan berpasangan. Setiap pasangan yang dipilih sebagai "lebih membebani" akan menambah 1 pada *weight counter* subskala tersebut. Bobot akhir $w_i \in \{0, 1, 2, 3, 4, 5\}$ dengan konstrain:

$$\sum_{i=1}^{6} w_i = 15$$

**Tahap 2 — Weighted Score Calculation.** Skor terbobot dihitung sebagai:

$$WTLX = \frac{\sum_{i=1}^{6} (w_i \times r_i)}{15}$$

dengan $r_i$ adalah *raw rating* subskala ke-$i$ pada rentang $[0, 100]$, menghasilkan skor akhir WTLX pada rentang $[0, 100]$.

### 2.4 Work Sampling: Formulasi Aktivitas

Untuk komponen pengukuran objektif yang digunakan Aditya dan Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)), Work Sampling mengandalkan pencatatan aktivitas sesaat (*instantaneous observation*) pada interval acak atau sistematis. Proporsi aktivitas ke-$k$ diestimasi sebagai:

$$\hat{p}_k = \frac{n_k}{N}$$

dengan $n_k$ = jumlah pengamatan aktivitas $k$ dan $N$ = total pengamatan. *Confidence interval* 95% untuk proporsi diberikan oleh:

$$CI_{95\%} = \hat{p}_k \pm 1.96 \sqrt{\frac{\hat{p}_k(1-\hat{p}_k)}{N}}$$

Jumlah observasi minimum untuk galat mutlak $E$ pada tingkat kepercayaan tertentu:

$$N_{min} = \frac{Z^2 \cdot p(1-p)}{E^2}$$

Untuk $p = 0.5$ (kondisi paling konservatif), $Z = 1.96$, dan toleransi $E = 0.05$:

$$N_{min} = \frac{(1.96)^2 \cdot 0.25}{0.05^2} = \frac{0.9604}{0.0025} \approx 384 \text{ observasi}$$

### 2.5 Validitas dan Reliabilitas NASA-TLX

Koefisien $\alpha$ Cronbach untuk WTLX secara konsisten dilaporkan pada kisaran 0.72–0.85 (Hart, 2006), sehingga memenuhi ambang reliabilitas psikometrik. Validitas konvergen dengan performansi tugas berkorelasi pada $r = -0.45$ hingga $-0.62$ (negatif karena PE dibalik), menunjukkan bahwa peningkatan beban subjektif beriringan dengan penurunan *task performance* objektif.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Tahapan Pelaksanaan NASA-TLX (Merujuk Rafi & Putra, 2024)

```
┌──────────────────────────────────────────────────────────┐
│ TAHAP 1: Persiapan & Penentuan Responden                 │
│  • Identifikasi populasi operator (n ≥ 30 untuk normalitas)│
│  • Stratified sampling berdasarkan shift, zona, seniority │
├──────────────────────────────────────────────────────────┤
│ TAHAP 2: Briefing & Informed Consent                     │
│  • Penjelasan 6 dimensi skala                            │
│  • Latihan 1-2 trial dengan data dummy                   │
├──────────────────────────────────────────────────────────┤
│ TAHAP 3: Pelaksanaan Misi (In-task)                      │
│  • Responden menjalankan tugas nyata dalam shift normal  │
│  • Tidak ada intervensi proses oleh peneliti             │
├──────────────────────────────────────────────────────────┤
│ TAHAP 4: Post-task Rating                                │
│  • Responden memberikan 6 skor VAS [0-100]              │
│  • Estimasi waktu 5-10 menit per responden               │
├──────────────────────────────────────────────────────────┤
│ TAHAP 5: Pairwise Comparison Cards                       │
│  • 15 kartu berisi sepasang subskala                     │
│  • Responden memilih yang lebih memberatkan              │
│  • Tally menghasilkan weight vector wᵢ                   │
├──────────────────────────────────────────────────────────┤
│ TAHAP 6: Perhitungan WTLX & Analisis Statistik          │
│  • Hitung RTLX dan WTLX tiap responden                   │
│  • Uji beda (ANOVA/Mann-Whitney) antar grup              │
│  • Threshold interpretation: <40 rendah, 40-60 sedang,    │
│    60-80 tinggi, >80 sangat tinggi                       │
└──────────────────────────────────────────────────────────┘
```

### 3.2 Tahapan Work Sampling (Merujuk Aditya & Putra, 2024)

1. **Dekomposisi aktivitas** ke dalam kategori diskret (misal: *picking*, *packing*, *sorting*, *waiting*, *idle*, *administrative*).
2. **Penentuan jumlah observasi** $N_{min}$ menggunakan rumus pada §2.4.
3. **Pembuatan *random observation schedule***: setiap operator diobservasi pada waktu acak (atau interval sistematis *random start*) yang telah dibakukan.
4. **Pelaksanaan observasi** oleh pengamat terlatih dengan *inter-rater reliability* $\kappa \geq 0.80$.
5. **Rekonsiliasi data**: cross-check antara proporsi aktivitas (objektif) dan skor WTLX (subjektif) untuk mendeteksi *discrepancy* yang menjadi sinyal masalah ergonomis atau manajerial.

### 3.3 SOP Pengintegrasian Kedua Metode

```
      ┌─────────────────────┐         ┌──────────────────────┐
      │  WORK SAMPLING      │         │   NASA-TLX           │
      │  (Objective)        │         │   (Subjective)       │
      │  • Aktivitas fisik  │         │  • Persepsi mental   │
      │  • Proporsi waktu   │         │  • 6 dimensi skor    │
      └──────────┬──────────┘         └──────────┬───────────┘
                 │                              │
                 ▼                              ▼
         ┌───────────────────────────────────────────┐
         │    MATRIKS KORELASI BEBAN KERJA           │
         │  • Cell (i,j) = WTLXᵢ vs pⱼ              │
         │  • Pearson r atau Spearman ρ              │
         └─────────────────┬─────────────────────────┘
                           ▼
              ┌────────────────────────────┐
              │  ROOT CAUSE MATRIX         │
              │  WTLX↑ + p(idle)↓         │
              │  → Time pressure           │
              │  WTLX↑ + p(idle)↑         │
              │  → Mental pressure, idle   │
              └────────────────────────────┘
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Operator Sortasi Shopee Express Hub Jakarta Selatan

**Konteks:** Seorang operator sortasi di hub sortir Jakarta Selatan menangani rata-rata 480 paket/jam pada *peak season* (Harbolnas), dengan target SLA sortir ≤ 3 jam dari *drop-off*. Kita simulasi pengukuran NASA-TLX untuk satu operator dengan data fiktif yang realistis.

### 4.2 Langkah 1 — Pengumpulan Raw Ratings

Misalkan operator memberikan skor VAS berikut pasca-shift 8 jam:

| Subskala | Notasi | Rating $r_i$ |
|----------|--------|---------------|
| Mental Demand | MD | 75 |
| Physical Demand | PD | 60 |
| Temporal Demand | TD | 85 |
| Performance | PE | 30 (kinerja baik) |
| Effort | EF | 70 |
| Frustration | FR | 55 |

### 4.3 Langkah 2 — Perhitungan Raw TLX

$$RTLX = 75 + 60 + 85 + 30 + 70 + 55 = 375 \text{ (skala 0-600)}$$

Dinormalisasi: $\frac{375}{600} \times 100\% = 62.5\%$ → masuk kategori **beban kerja tinggi**.

### 4.4 Langkah 3 — Pairwise Comparison (15 Pasangan)

Misalkan hasil tally dari 15 pasangan menghasilkan vektor bobot:

| Subskala | Bobot $w_i$ |
|----------|-------------|
| MD | 3 |
| PD | 1 |
| TD | 5 |
| PE | 2 |
| EF | 3 |
| FR | 1 |
| **Total** | **15