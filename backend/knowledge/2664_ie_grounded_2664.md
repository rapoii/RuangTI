# 2664 — Analisis Beban Kerja Mental Operator Logistik E-Commerce dan Pergudangan Menggunakan Metode NASA-TLX dan Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Sektor logistik e-commerce di Indonesia mengalami pertumbuhan eksponensial yang didorong oleh akselerasi digitalisasi pascapandemi, dengan nilai transaksi gross merchandise value (GMV) menembus lebih dari USD 53 miliar pada 2023 (Statista, 2024; Bank Indonesia, 2024). Shopee Express, sebagai salah satu arm-length delivery service provider terbesar di Asia Tenggara, mengandalkan ribuan *partner* (mitra kurir dan operator sortir) yang beroperasi di hub-hub distribusi dengan intensitas operasional harian yang sangat tinggi. Dalam konteks inilah, Rafi & Putra (2024, DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)) melakukan studi krusial mengenai **beban kerja mental** (*mental workload*) karyawan mitra Shopee Express, karena di balik metrik *on-time delivery* dan *shipment throughput* yang selalu digaungkan oleh manajemen, terdapat dimensi ergonomik kognitif yang menentukan keberlanjutan produktivitas, tingkat kelelahan, keselamatan kerja, dan kualitas layanan pelanggan.

Urgensi riset ini semakin nyata mengingat kompleksitas tugas operator e-commerce modern: pemindaian barcode dengan *handheld terminal* (HHT), navigasi aplikasi *sorting dashboard*, pencocokan kode pos secara visual, negosiasi SLA *same-day delivery* dengan pelanggan, hingga manajemen ekspektasi atas volume *peak season* (Harbolnas, Ramadan, 11.11, 12.12). Kelalaian perusahaan dalam mengukur beban mental akan menghasilkan *human error*, *burnout*, tingkat *turnover* yang tinggi, dan pada akhirnya, kerugian ekonomi langsung berupa klaim gagal kirim (*failure delivery rate*).

Studi komplementer yang dilakukan oleh Aditya.R & Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) menunjukkan bahwa pengukuran beban kerja secara holistik untuk operator pergudangan memerlukan kombinasi dua pendekatan: **Work Sampling** untuk memetakan proporsi alokasi waktu pada aktivitas produktif, delay, dan idle, serta **NASA-TLX (Task Load Index)** untuk mengukur beban kognitif subjektif. Kedua paper ini saling melengkapi karena memberikan *toolkit* lengkap bagi industrial engineer dalam melakukan *ergonomic assessment* dan *capacity planning* di lingkungan high-velocity fulfillment center. Konteks ini menjadi pijakan utama bagi dokumen modul 2664 untuk membangun kerangka analitis yang aplikatif, terukur, dan siap diimplementasikan di industri.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. NASA-TLX (Task Load Index)

NASA-TLX, yang dikembangkan oleh Hart & Staveland (1988), mengukur beban kerja multidimensi melalui enam subskala:

1. **Mental Demand (MD)** — aktivitas kognitif (berpikir, memutuskan, menghitung)
2. **Physical Demand (PD)** — aktivitas fisik (mengangkat, mendorong, berjalan)
3. **Temporal Demand (TD)** — tekanan waktu
4. **Performance (PE)** — persepsi pencapaian target
5. **Effort (EF)** — tingkat usaha yang dikeluarkan
6. **Frustration (FR)** — tingkat frustrasi, irritasi, stress

Setiap subskala dinilai responden pada skala bipolar **0–100** (*Line Scale*). Hasil penilaian kemudian dibobot melalui prosedur **pairwise comparison** (15 pasangan) untuk mendapatkan bobot $W_i$ yang merepresentasikan kontribusi relatif setiap subskala terhadap beban total.

**Formulasi Raw TLX (Unweighted):**

$$TLX_{raw} = \frac{1}{6} \sum_{i=1}^{6} R_i$$

di mana $R_i$ adalah skor mentah subskala ke-$i$.

**Formulasi Weighted TLX (Final Score):**

$$TLX_{weighted} = \frac{1}{15} \sum_{i=1}^{6} (W_i \times R_i)$$

dengan:
- $W_i \in \{0, 1, 2, 3, 4, 5\}$ adalah bobot dari pairwise comparison
- $R_i \in [0, 100]$ adalah skor rating subskala
- $\sum_{i=1}^{6} W_i = 15$ (total bobot dari 6 kombinasi C(6,2)=15)

**Interpretasi beban kerja** mengikuti klasifikasi standar:

| Skor TLX | Kategori |
|----------|----------|
| 0–20 | Rendah |
| 21–40 | Cukup Rendah |
| 41–60 | Sedang |
| 61–80 | Tinggi |
| 81–100 | Sangat Tinggi |

### 2.2. Work Sampling

Work Sampling adalah teknik statistik untuk menentukan **proporsi waktu** yang dihabiskan operator pada kategori aktivitas tertentu melalui pengamatan acak (*random instantaneous observation*). Formulasi ukuran sampel mengikuti rumus:

$$n = \frac{Z^2 \cdot p \cdot q}{E^2}$$

untuk populasi tidak terbatas, atau:

$$n = \frac{N \cdot Z^2 \cdot p \cdot q}{(N-1) \cdot E^2 + Z^2 \cdot p \cdot q}$$

untuk populasi terbatas, dengan:
- $Z$ = tingkat kepercayaan (1.96 untuk confidence level 95%)
- $p$ = proporsi aktivitas target (0.5 untuk konservatif)
- $q = 1 - p$
- $E$ = batas kesalahan absolut yang dapat diterima
- $N$ = total jumlah pengamatan potensial dalam periode studi

**Proporsi aktivitas** kemudian dihitung sebagai:

$$P_a = \frac{f_a}{n_{total}}$$

dengan *confidence interval*:

$$CI_{95\%} = P_a \pm Z \cdot \sqrt{\frac{P_a(1-P_a)}{n_{total}}}$$

### 2.3. Coupling Mental Workload–Productive Time

Hubungan integratif antara kedua metode (Aditya.R & Putra, 2024) dapat diformulasikan sebagai **Indeks Efektivitas Ergonomis (IEE)**:

$$IEE = \alpha \cdot \left( \frac{T_{prod}}{T_{avail}} \right) - \beta \cdot \left( \frac{TLX_{weighted}}{100} \right)$$

di mana $\alpha, \beta$ adalah koefisien bobot manajerial (umumnya $\alpha = 0.6, \beta = 0.4$). Nilai IEE > 0.5 mengindikasikan keseimbangan ergonomis yang sehat.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi NASA-TLX dan Work Sampling di lingkungan Shopee Express hub mengikuti SOP berbasis ISO 6385 (Ergonomic Principles in the Design of Work Systems) dan SNI 9011:2021 (Pengukuran Beban Kerja). Diagram alir prosedur adalah sebagai berikut:

```
┌─────────────────────────────────────────────┐
│ FASE 1: PREPARATION                         │
│ - Identifikasi unit kerja target            │
│ - Penentuan populasi (N operator)           │
│ - Penyusunan kuisioner & tally sheet        │
└──────────────────────┬──────────────────────┘
                       ▼
┌─────────────────────────────────────────────┐
│ FASE 2: WORK SAMPLING EXECUTION             │
│ - Penentuan jumlah sampel (n) via rumus     │
│ - Penjadwalan pengamatan acak (random walk) │
│ - Pengumpulan data (n_total observasi)      │
│ - Klasifikasi aktivitas (working, idle,     │
│   delay, personal, supporting)              │
└──────────────────────┬──────────────────────┘
                       ▼
┌─────────────────────────────────────────────┐
│ FASE 3: NASA-TLX ADMINISTRATION             │
│ - Penjelasan prosedur kepada responden      │
│ - Pemberian rating 0-100 untuk 6 subskala   │
│ - Pelaksanaan 15 pairwise comparisons       │
└──────────────────────┬──────────────────────┘
                       ▼
┌─────────────────────────────────────────────┐
│ FASE 4: SCORING & ANALYSIS                  │
│ - Perhitungan W_i dan R_i                   │
│ - Aggregasi TLX_weighted                    │
│ - Uji validitas (Cronbach's α ≥ 0.7)        │
└──────────────────────┬──────────────────────┘
                       ▼
┌─────────────────────────────────────────────┐
│ FASE 5: INTERPRETATION & ACTION PLAN        │
│ - Benchmarking terhadap standar industri    │
│ - Rekomendasi redesign workstation          │
│ - Penjadwalan rotasi kerja                  │
└─────────────────────────────────────────────┘
```

**Pengaturan waktu pengamatan** mengikuti stratified random sampling, dengan kunjungan setiap 5–10 menit selama shift 8 jam, sehingga untuk 1 operator dihasilkan $n = 50$ observasi/hari, dan untuk 20 operator: $n_{total} = 1.000$ observasi.

**Pairwise comparison card** dirancang dengan instruksi: *"Pilih subskala yang memberikan kontribusi lebih besar terhadap beban kerja Anda secara keseluruhan."* Kartu terdiri dari 15 pasangan yang seluruhnya mencakup C(6,2) = 15 kombinasi.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Skenario Kasus: Operator Sortir Shopee Express Hub Jakarta Timur

Misalkan hasil pengumpulan data terhadap 25 operator sortir Shopee Express pada shift pagi (07.00–15.00 WIB) selama 5 hari kerja menghasilkan data berikut:

**Input Work Sampling:**
- Total pengamatan: $n_{total} = 1.250$ observasi
- Frekuensi kategori:
  - *Productive sorting*: $f_1 = 875$ (70.0%)
  - *Delay sistem (aplikasi error)*: $f_2 = 188$ (15.0%)
  - *Idle menunggu paket*: $f_3 = 88$ (7.0%)
  - *Personal/istirahat*: $f_4 = 62$ (5.0%)
  - *Supporting (koordinasi tim)*: $f_5 = 37$ (3.0%)

**Verifikasi ukuran sampel:**
Dengan $p = 0.5, q = 0.5, Z = 1.96, E = 0.03$:
$$n = \frac{(1.96)^2 \cdot 0.5 \cdot 0.5}{(0.03)^2} = \frac{0.9604}{0.0009} \approx 1.067$$

Karena $n_{total} = 1.250 > 1.067$, maka ukuran sampel valid dengan akurasi 95% CI.

**Confidence interval untuk productive sorting:**
$$CI_{95\%} = 0.70 \pm 1.96 \cdot \sqrt{\frac{0.70 \times 0.30}{1.250}} = 0.70 \pm 0.0254$$

Proporsi waktu produktif nyata berada pada interval **67.46% – 72.54%**.

### 4.2. Data NASA-TLX

**Rating rerata 25 operator (skala 0–100):**

| Subskala | Rating $R_i$ |
|----------|--------------|
| Mental Demand (MD) | 78 |
| Physical Demand (PD) | 65 |
| Temporal Demand (TD) | 82 |
| Performance (PE) | 35 |
| Effort (EF) | 75 |
| Frustration (FR) | 70 |

**Bobot pairwise comparison (contoh untuk 1 operator):**

Setelah agregasi seluruh responden, bobot rerata: $W_{MD}=5, W_{PD}=2, W_{TD}=5, W_{PE}=1, W_{EF}=1, W_{FR}=1$, total = 15 ✓

**Perhitungan Weighted TLX:**

$$TLX_{weighted} = \frac{1}{15} [(5)(78) + (2)(65) + (5)(82) + (1)(35) + (1)(75) + (1)(70)]$$

$$TLX_{weighted} = \frac{1}{15} [390 + 130 + 410 + 35 + 75 + 70]$$

$$TLX_{weighted} = \frac{1.110}{15} = 74.0$$

### 4.3. Interpretasi Manajerial

Skor **TLX = 74.0** masuk kategori **Tinggi** (61–80), mengindikasikan operator berada pada ambang batas kelelahan kognitif. Subskala dominan adalah **Temporal Demand (skor 82, bobot 5)** dan **Mental Demand (skor 78, bobot 5)**, menunjukkan bahwa tekanan waktu dan kompleksitas kognitif adalah kontributor utama beban.

### 4.4. Perhitungan IEE (Indeks Efektivitas Ergonomis)

$$IEE = 0.6 \cdot \left(\frac{0.