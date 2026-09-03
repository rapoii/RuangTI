# 2648 — Analisis Beban Kerja Mental Operator Logistik & Pergudangan Menggunakan Metode NASA-TLX dalam Konteks Industri E-Commerce Indonesia

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Universal Proceedings Series*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Universal Proceedings Series*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Industri *e-commerce* di Indonesia mengalami transformasi eksponensial sejak dekade terakhir, dengan Shopee sebagai salah satu platform dengan pangsa pasar dominan di Asia Tenggara. Untuk menjamin *last-mile delivery* yang kompetitif, Shopee Express memberdayakan model kemitraan (partner) dengan pekerja kurir independen yang tersebar di seluruh Indonesia. Rafi & Putra (2024, DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)) menyoroti bahwa beban kerja mental (*mental workload*) yang dialami oleh mitra kurir Shopee Express menjadi isu ergonomis krusial yang berdampak langsung pada keselamatan kerja, kualitas layanan, dan retensi tenaga kerja. Penelitian ini menjadi relevan karena mitra kurir menghadapi multi-tasking simultan: navigasi rute optimal, verifikasi barang, interaksi dengan pelanggan, perhitungan ongkos kirim, serta tekanan tenggat waktu (*Same-Day Delivery*). Dalam studi terkait yang dilakukan oleh Aditya.R & Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)), konteks beban kerja diperluas pada operator gudang (*warehouse operators*) melalui integrasi metode *Work Sampling* dan NASA-TLX, yang menegaskan bahwa permasalahan beban kerja tidak hanya terjadi pada lini distribusi tetapi juga pada lini operasional pergudangan.

Urgensi ekonomis dari riset ini tecermin dari data operasional Shopee Express di Indonesia yang menangani jutaan *parcel* per hari pada periode *peak season* (Harbolnas, Ramadan, dan年终大促). Setiap peningkatan satu poin pada indeks beban kerja mental mitra kurir berkorelasi negatif terhadap produktivitas pengantaran dan tingkat kesalahan verifikasi paket. Secara ergonomis, beban kerja mental yang berlebihan memicu kelelahan kognitif, *decision fatigue*, dan peningkatan risiko kecelakaan kerja di jalan raya. Oleh karena itu, Rafi & Putra (2024) memilih NASA-TLX (*NASA Task Load Index*) sebagai instrumen pengukuran karena validitas psikometriknya yang telah teruji lintas industri dan sensitivitasnya terhadap multidimensional workload. Pendekatan ini melengkapi studi Aditya.R & Putra (2024) yang mengombinasikan pengukuran subjektif (NASA-TLX) dengan metode *Work Sampling* objektif untuk mendapatkan gambaran beban kerja yang komprehensif—mencakup aspek kualitatif-kognitif maupun kuantitatif-aktivitas. Konteks ini menempatkan beban kerja sebagai variabel rekayasa yang dapat diukur, dioptimasi, dan diintervensi melalui kebijakan operasional yang berbasis data.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. NASA-TLX (Task Load Index)

NASA-TLX adalah instrumen multidimensional yang dikembangkan oleh Hart & Staveland (1988) dan diadopsi secara luas dalam literatur ergonomis. Metode ini mengukur beban kerja perseptual berdasarkan enam dimensi utama yang masing-masing dinilai pada rentang skala Likert 0–100 (atau 0–20 pada varian *paper-pencil*). Keenam dimensi tersebut adalah:

1. **Mental Demand (MD):** Aktivitas kognitif dan perseptual yang diperlukan.
2. **Physical Demand (PD):** Aktivitas fisik yang diperlukan.
3. **Temporal Demand (TD):** Tekanan waktu yang dirasakan.
4. **Performance (P):** Persepsi keberhasilan dalam完成任务.
5. **Effort (E):** Tingkat usaha mental/fisik yang dikeluarkan.
6. **Frustration (F):** Tingkat frustrasi, irritasi, dan stres.

### 2.2. Prosedur Pembobotan (Pairwise Comparison)

Rafi & Putra (2024) mengikuti protokol standar NASA-TLX dengan 15 perbandingan berpasangan (*pairwise comparisons*) antar dimensi untuk menentukan bobot relatif (*raw weight*) masing-masing skala. Setiap perbandingan menghasilkan satu poin untuk dimensi yang dianggap lebih dominan kontribusinya terhadap beban kerja total. Bobot akhir suatu dimensi $w_i$ berkisar antara 0 hingga 5.

### 2.3. Formulasi Skor Beban Kerja Tertimbang (Weighted TLX Score)

Skor akhir NASA-TLX dihitung menggunakan persamaan berikut (Hart, 2006):

$$TLX_{weighted} = \frac{\sum_{i=1}^{6} r_i \cdot w_i}{15}$$

di mana:
- $r_i$ = rating dimensi ke-$i$ (skala 0–100)
- $w_i$ = bobot dimensi ke-$i$ (0–5, hasil *pairwise comparison*)
- $\sum w_i = 15$ (akibat dari 15 perbandingan)

Alternatif representasi skor total sederhana (*Raw TLX*) adalah:

$$TLX_{raw} = \frac{\sum_{i=1}^{6} r_i}{6}$$

Klasifikasi beban kerja menurut standar interpretatif yang digunakan Rafi & Putra (2024, DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)):

| Rentang Skor TLX | Kategori Beban Kerja |
|:---:|:---|
| 0–20 | Rendah (*Low*) |
| 21–40 | Sedang (*Moderate*) |
| 41–60 | Cukup Tinggi (*Somewhat High*) |
| 61–80 | Tinggi (*High*) |
| 81–100 | Sangat Tinggi (*Very High*) |

### 2.4. Work Sampling (Pendukung)

Aditya.R & Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) mengintegrasikan *Work Sampling* dengan rumus probabilitas pencuplikan aktivitas:

$$P_i = \frac{n_i}{N}, \quad SE = \sqrt{\frac{P_i (1-P_i)}{N}}$$

di mana $P_i$ adalah proporsi waktu untuk aktivitas kategori $i$, $n_i$ adalah jumlah observasi kategori $i$, $N$ adalah total observasi, dan $SE$ adalah *standard error*. Jumlah observasi minimum untuk tingkat kepercayaan $(1-\alpha)$ dan akurasi $E$ tertentu:

$$N = \frac{Z_{\alpha/2}^2 \cdot p \cdot (1-p)}{E^2}$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi NASA-TLX mengikuti protokol sistematis berikut (disintesis dari Rafi & Putra, 2024, dan Aditya.R & Putra, 2024):

**Tahap 1 — Identifikasi Sistem dan Stakeholder**
- Pemetaan proses bisnis Shopee Express: *first-mile pickup*, *sortation hub*, *line-haul*, *last-mile delivery*.
- Penentuan populasi riset: mitra kurir Shopee Express (Paper 1) dan operator gudang (Paper 2).

**Tahap 2 — Penentuan Sampel dan Instrumen**
- Perhitungan ukuran sampel menggunakan rumus Slovin dengan $e = 5\%$ atau power analysis.
- Instrumen: kuesioner NASA-TLX (bilingual Indonesia–Inggris), lembar observasi *Work Sampling* (untuk Paper 2).

**Tahap 3 — Pengumpulan Data**
- Pra-uji (*pilot test*) pada 10–15 responden untuk validasi instrumen.
- Distribusi kuesioner pada shift pagi, siang, dan malam untuk mengendalikan *circadian effect*.
- *Work Sampling* dilakukan dengan interval random (mis. 1 observasi per 2 menit selama 8 jam = 240 observasi per operator).

**Tahap 4 — Pengolahan dan Pembobotan**
- Perhitungan bobot dimensi dari lembar *pairwise comparison*.
- Komputasi skor tertimbang $TLX_{weighted}$.
- Uji reliabilitas (Cronbach's Alpha $\alpha \geq 0.70$) dan validitas konstruk.

**Tahap 5 — Analisis dan Rekomendasi**
- Analisis deskriptif (mean, standar deviasi) skor TLX.
- Cross-tabulation dengan variabel demografis (usia, masa kerja, shift).
- Benchmarking terhadap standar industri ergonomi.

**Diagram Alir Proses NASA-TLX (SOP):**

```
┌─────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│ Identifikasi    │ →  │ Pilot Test       │ →  │ Pengumpulan Data │
│ Responden       │    │ (Validitas)      │    │ Kuesioner        │
└─────────────────┘    └──────────────────┘    └──────────────────┘
                                                       ↓
┌─────────────────┐    ┌──────────────────┐    ┌──────────────────┐
│ Rekomendasi &   │ ←  │ Analisis Skor    │ ←  │ Pairwise         │
│ Intervensi      │    │ TLX              │    │ Comparison       │
└─────────────────┘    └──────────────────┘    └──────────────────┘
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Skenario Kasus: Mitra Kurir Shopee Express pada Peak Season

Misalkan hasil pengukuran NASA-TLX dari 30 mitra kurir Shopee Express di Jakarta selama periode Harbolnas menghasilkan rata-rata rating sebagai berikut:

| Dimensi (i) | Rating $r_i$ (0–100) |
|:---|:---:|
| Mental Demand (MD) | 78 |
| Physical Demand (PD) | 65 |
| Temporal Demand (TD) | 85 |
| Performance (P) | 42 |
| Effort (E) | 72 |
| Frustration (F) | 68 |

**Langkah 1 — Pairwise Comparison**
Misalkan dari 15 perbandingan berpasangan, dimensi memperoleh poin sebagai berikut:

| Dimensi | Poin $w_i$ |
|:---|:---:|
| Mental Demand (MD) | 4 |
| Physical Demand (PD) | 1 |
| Temporal Demand (TD) | 5 |
| Performance (P) | 0 |
| Effort (E) | 3 |
| Frustration (F) | 2 |
| **Total** | **15** |

**Langkah 2 — Komputasi Skor Tertimbang**

$$TLX_{weighted} = \frac{(78)(4) + (65)(1) + (85)(5) + (42)(0) + (72)(3) + (68)(2)}{15}$$

$$TLX_{weighted} = \frac{312 + 65 + 425 + 0 + 216 + 136}{15} = \frac{1154}{15} \approx 76.93$$

**Interpretasi Manajerial:** Skor 76.93 mengindikasikan beban kerja mental dalam rentang **Tinggi (High)** menurut klasifikasi Hart (2006). Mitra kurir mengalami tekanan temporaldominant (TD=85, $w_{TD}=5$), mengonfirmasi urgensi intervensi pada manajemen waktu dan rute.

### 4.2. Skenario Lintas Paper: Work Sampling Operator Gudang

Data *work sampling* dari operator gudang (Aditya.R & Putra, 2024):

|.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
