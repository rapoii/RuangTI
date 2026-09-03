# 1928 — Analisis Beban Kerja Mental Operator Logistik & Pergudangan Menggunakan Metode NASA-TLX dan Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Industri *e-commerce* di Asia Tenggara, khususnya Indonesia, telah mengalami pertumbuhan eksponensial sepanjang dekade terakhir, didorong oleh penetrasi internet yang masif dan pergeseran perilaku konsumen ke arah transaksi digital. Shopee, sebagai salah satu platform *marketplace* terbesar di kawasan ini, mengandalkan ekosistem logistik internal dan mitra (Shopee Express Partner) untuk menjamin *last-mile delivery* yang cepat dan akurat. Rafi & Putra (2024) dalam tulisannya di *Peer-Reviewed Journal* dengan DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385) menyoroti bahwa di balik pertumbuhan volume pengiriman tersebut, terdapat tantangan ergonomis kognitif yang signifikan bagi karyawan operator Sortation Center (SC) dan *Last Mile* (LM).

Beban kerja mental (*mental workload*) adalah representasi kuantitatif dari tuntutan tugas (*task demands*) yang diterima oleh operator terhadap kapasitas kognitifnya, mencakup persepsi, memori kerja, pengambilan keputusan, dan respons motorik. Rafi & Putra (2024) mengidentifikasi bahwa fluktuasi *Service Level Agreement* (SLA) harian, kompleksitas rute pengiriman, serta tekanan untuk memenuhi target *on-time delivery* menciptakan lingkungan kerja dengan intensitas kognitif tinggi. Karyawan kurir dan operator gudang tidak hanya dituntut secara fisik (mengangkat, memindahkan paket), tetapi juga secara mental karena harus memproses informasi pelanggan, membaca alamat, mengoperasikan aplikasi *handheld device*, dan memecahkan masalah (problem solving) dalam situasi operasional yang dinamis.

Urgensi studi ini diperkuat oleh data operasional industri logistik Indonesia yang menunjukkan rata-rata *pickup rate* harian dapat melampaui 150 paket per kurir pada periode *peak season* (Harbolnas, Ramadan, dan 12.12), sementara tingkat kesalahan *mis-route* dan *miss-pick* secara langsung memengaruhi *customer satisfaction index* (CSI) dan *Shopee PayLater* rating. Lebih lanjut, kelelahan mental berkorelasi positif dengan kecelakaan kerja, *absenteeism*, dan *turnover* karyawan yang pada akhirnya meningkatkan *cost-to-serve* perusahaan. Studi oleh Aditya.R & Putra (2024) dengan DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) menunjukkan bahwa pada konteks operator gudang, kombinasi metode *work sampling* dan NASA-TLX mampu mengungkap *hidden idle time* dan *cognitive overload* yang tidak terdeteksi oleh analisis produktivitas konvensional. Kedua paper ini menjadi landasan empiris bagi pengembangan sistem kerja yang *human-centric* dan berkelanjutan di industri logistik digital.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. NASA-TLX (*Task Load Index*)

NASA-TLX adalah instrumen multidimensi yang dikembangkan oleh Hart & Staveland (1988) untuk mengukur *subjective workload*. Rafi & Putra (2024) mengadopsi instrumen ini karena sensitivitasnya terhadap enam dimensi beban kerja, yaitu:

1. **Mental Demand (MD)** — aktivitas kognitif (berpikir, memutuskan, menghitung).
2. **Physical Demand (PD)** — aktivitas fisik (mengangkat, berjalan, mendorong).
3. **Temporal Demand (TD)** — tekanan waktu.
4. **Performance (P)** — persepsi sukses/kegagalan pencapaian target.
5. **Effort (E)** — usaha total yang dikeluarkan.
6. **Frustration (F)** — tingkat frustrasi, stress, dan ketidaknyamanan.

Setiap dimensi dinilai dengan skala *Likert* 0–100 (0 = sangat rendah, 100 = sangat tinggi), kecuali dimensi Performance yang menggunakan skala *reverse* (0 = sukses sempurna, 100 = kegagalan total). Responden selanjutnya melakukan *pairwise comparison* antar keenam dimensi untuk menentukan bobot relatifnya.

#### Formulasi Bobot Relatif (*Weighting Procedure*)

Pairwise comparison menghasilkan matriks triangular $\mathbf{W} \in \mathbb{R}^{6 \times 6}$:

$$W_{ij} = \begin{cases} 1, & \text{jika dimensi } i \text{ lebih dominan dari } j \\ 0, & \text{jika dimensi } j \text{ lebih dominan dari } i \end{cases}$$

Total perbandingan yang dilakukan sebanyak $C(6,2) = 15$ pasang. Bobot setiap dimensi $k$ dihitung dengan:

$$w_k = \frac{\sum_{j \neq k} W_{kj}}{\sum_{i=1}^{6} \sum_{j \neq i} W_{ij}} = \frac{\sum_{j \neq k} W_{kj}}{15}, \quad \forall k \in \{MD, PD, TD, P, E, F\}$$

dengan $\sum_{k=1}^{6} w_k = 1$.

#### Skor Beban Kerja Mental (Weighted Workload Score)

Setelah bobot ditentukan, skor NASA-TLX dihitung sebagai rata-rata terbobotkan:

$$\text{NASA-TLX} = \sum_{k=1}^{6} w_k \cdot R_k = w_{MD} \cdot R_{MD} + w_{PD} \cdot R_{PD} + w_{TD} \cdot R_{TD} + w_{P} \cdot R_{P} + w_{E} \cdot R_{E} + w_{F} \cdot R_{F}$$

di mana $R_k$ adalah *raw rating* (skor 0–100) untuk dimensi $k$. Skor total ini selanjutnya dikategorikan oleh Rafi & Putra (2024) sesuai *cut-off* yang lazim digunakan dalam studi ergonomik:

- **0–20** : Beban kerja rendah
- **21–40** : Beban kerja sedang-rendah
- **41–60** : Beban kerja sedang-tinggi
- **61–80** : Beban kerja tinggi
- **81–100** : Beban kerja sangat tinggi

### 2.2. Work Sampling (Sampling Kerja)

Aditya.R & Putra (2024) menggunakan *work sampling* untuk memetakan proporsi waktu kerja operator gudang. Prinsipnya berdasarkan distribusi binomial:

$$P(X = x) = \binom{n}{x} p^x (1-p)^{n-x}$$

di mana $n$ adalah jumlah observasi, $x$ adalah jumlah observasi yang termasuk dalam kategori aktivitas tertentu, dan $p$ adalah proporsi waktu *true* yang dihabiskan untuk aktivitas tersebut. Jumlah observasi minimum ditentukan dengan rumus berikut:

$$N = \frac{Z^2 \cdot p \cdot (1-p)}{E^2}$$

dengan:
- $Z$ = nilai *Z-score* untuk tingkat kepercayaan tertentu (umumnya $Z = 1.96$ untuk 95% CI),
- $p$ = proporsi estimasi aktivitas (umumnya 0.5 untuk konservatif),
- $E$ = *margin of error* (umumnya $\pm 5\%$).

Untuk $Z = 1.96$, $p = 0.5$, dan $E = 0.05$:

$$N = \frac{(1.96)^2 \cdot 0.5 \cdot 0.5}{(0.05)^2} = \frac{0.9604}{0.0025} \approx 384 \text{ observasi}$$

Aditya.R & Putra (2024) umumnya menggunakan lebih dari 384 observasi untuk memastikan validitas statistik.

### 2.3. Korelasi Beban Kerja Mental dan Produktivitas

Rafi & Putra (2024) mengusulkan model regresi linier sederhana untuk menguji hubungan NASA-TLX dengan produktivitas:

$$\text{Productivity} = \beta_0 + \beta_1 \cdot \text{NASA-TLX} + \epsilon$$

Koefisien determinasi $R^2$ digunakan untuk mengukur kekuatan hubungan antara beban kerja mental dan produktivitas operator.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Rafi & Putra (2024) serta Aditya.R & Putra (2024) menyusun prosedur sistematis sebagai berikut:

### Diagram Alir Implementasi NASA-TLX + Work Sampling

```
┌─────────────────────────────────────────────┐
│  FASE 1: STUDI PENDAHULUAN                  │
│  - Identifikasi populasi & sampel           │
│  - Penetapan kriteria inklusi/eksklusi      │
└─────────────────┬───────────────────────────┘
                  ↓
┌─────────────────────────────────────────────┐
│  FASE 2: PENGUMPULAN DATA PRIMER            │
│  a) Work Sampling (observasi acak)          │
│     - Siapkan tally sheet + kategori kerja  │
│     - Random time sampling tiap 1-2 menit   │
│  b) Kuesioner NASA-TLX                     │
│     - Penjelasan informed consent           │
│     - Input raw rating (0-100)              │
│     - Pairwise comparison (15 pasangan)     │
└─────────────────┬───────────────────────────┘
                  ↓
┌─────────────────────────────────────────────┐
│  FASE 3: ANALISIS DATA                      │
│  - Hitung w_k dari pairwise comparison      │
│  - Hitung NASA-TLX = Σ w_k·R_k             │
│  - Hitung proporsi aktivitas dari sampling  │
│  - Uji validitas (cronbach alpha > 0.7)     │
└─────────────────┬───────────────────────────┘
                  ↓
┌─────────────────────────────────────────────┐
│  FASE 4: INTERPRETASI & REKOMENDASI         │
│  - Kategorisasi skor (rendah → sangat tinggi)│
│  - Identifikasi dimensi kritis              │
│  - Formulasi SOP & ergonomi perbaikan       │
│  - Re-sampling 3-6 bulan kemudian           │
└─────────────────────────────────────────────┘
```

### SOP Pengukuran Beban Kerja Mental

1. **Persiapan alat:** Kuesioner NASA-TLX versi bilingual, lembar *work sampling*, *handheld device* untuk *time-stamp*, dan informed consent.
2. **Pelatihan observer:** Minimal dua observer independen untuk menguji *inter-rater reliability* dengan Cohen's Kappa $\kappa \geq 0.75$.
3. **Random sampling:** Gunakan *random number generator* (mis. aplikasi Excel `=RAND()`) untuk menentukan momen observasi.
4. **Periode pengukuran:** Minimal 3 hari kerja reguler + 1 hari *peak* untuk menangkap variabilitas.
5. **Pengisian kuesioner:** Dilakukan setelah shift berakhir (post-shift) untuk menghindari bias *Hawthorne effect*.

### SOP Perbaikan Ergonomi Kognitif

Rafi & Putra (2024) merekomendasikan:

- **Job rotation** antar task Sortation, Loading, dan Delivery untuk mencegah *cognitive fatigue*.
- **Micro-break** 5 menit tiap 90 menit sesuai pola *ultradian rhythm*.
- **Decision support system** pada aplikasi kurir (visualisasi rute, *barcode scan* otomatis) untuk menurunkan Mental Demand.
- **Buffer time** minimum 10% dari target waktu pengiriman untuk menurunkan Temporal Demand.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Perhitungan Bobot Pairwise Comparison NASA-TLX

Misalkan operator Sortation Center Shopee Express di Jakarta memberikan hasil *pairwise comparison* berikut (Rafi & Putra, 2024):

| Pasangan | Pemenang |
|----------|----------|
| MD vs PD | MD |
| MD vs TD | MD |
| MD vs P | MD |
| MD vs E | MD |
| MD vs F | MD |
| PD vs TD | TD |
| PD vs P | MD |
| PD vs E | E |
| PD vs F | PD |
| TD vs P | TD |
| TD vs E | TD |
| TD vs F | TD |
| P vs E | E |
| P vs F | F |
| E vs F | E |

**Rekapitulasi Kemenangan per Dimensi:**
- MD = 5
- PD = 1
- TD = 4
- P = 0
- E = 3
- F = 2
- **Total = 15** ✓

**Bobot Relatif:**

$$w_{MD} = 5/15 = 0{,}333; \quad w_{PD} = 1/15 = 0{,}067; \quad w_{TD} = 4/15 = 0{,}267$$
$$w_{P} = 0/15 = 0{,}000; \quad w_{E} = 3/15 = 0{,}200; \quad w_{F} = 2/15 = 0{,}133$$

**Validasi:** $\sum w_k = 0{,}333 + 0{,}067 + 0{,}267 + 0{,}000 + 0{,}200 + 0{,}133 = 1{,}000$ ✓

### 4.2. Perhitungan Skor Total NASA-TLX

Misalkan *raw rating* yang diberikan operator:

| Dimensi | $R_k$ |
|---------|-------|
| Mental Demand (MD) | 75 |
| Physical Demand (PD) | 60 |
| Temporal Demand (TD) | 80 |
| Performance (P) | 40 |
| Effort (E) | 70 |
| Frustration (F) | 55 |

**Skor Tertimbang:**

$$\text{NASA-TLX} = (0{,}333 \times 75)
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
