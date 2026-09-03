# 1800 — Analisis Beban Kerja Mental Operator Logistik Last-Mile Menggunakan Metode NASA-TLX dan Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analisis Beban Kerja Mental pada Operator Rantai Pasok Last-Mile (Kurir & Operator Gudang)
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal (Universitas Prahyapati — UPS)*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan e-commerce di Indonesia yang diproyeksikan menembus transaksi lebih dari USD 50 miliar pada 2024 (Bain & Company, 2024) telah menciptakan tekanan struktural baru pada ekosistem *last-mile delivery*. Shopee, sebagai salah satu platform *marketplace* dominan di Asia Tenggara, mengandalkan lebih dari satu juta *delivery partner* (mitra kurir) di Indonesia untuk menjamin janji pengiriman *same-day* dan *next-day*. Dalam sistem kerja berbasis aplikasi (*gig economy*) ini, setiap kurir tidak hanya menghadapi tuntutan fisik berupa pengangkutan paket 5–20 kg secara repetitif, tetapi juga tuntutan kognitif yang intensif: navigasi rute dinamis, *multitasking* antara aplikasi order, komunikasi pelanggan, dan pencapaian *Key Performance Indicator* (KPI) pengiriman harian.

Rafi & Putra (2024) dalam studinya yang dipublikasikan dengan DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385) menyoroti fenomena *mental overload* yang dialami mitra Shopee Express. Studi tersebut mengisi kesenjangan literatur penting, karena mayoritas riset beban kerja (*workload*) di Indonesia masih berfokus pada operator manufaktur statis, sementara karakteristik pekerjaan kurir sangat berbeda: *mobile*, berbasis target waktu, dan memiliki tingkat otonomi rendah karena diatur algoritma *dispatch*. Temuan krusial Rafi & Putra mengindikasikan bahwa lebih dari 60% mitra kurir mengalami beban kerja mental kategori tinggi (>60 pada skor NASA-TLX), dengan sub-dimensi *temporal demand* dan *effort* sebagai kontributor dominan.

Komplementer terhadap hal tersebut, Aditya.R & Putra (2024) dengan DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) memperluas kerangka analisis ke operator gudang (*warehouse operators*), mengintegrasikan NASA-TLX dengan teknik *work sampling* untuk mendapatkan profil beban kerja yang komprehensif—menggabungkan persepsi subjektif dengan observasi aktivitas objektif. Integrasi ini penting karena operator gudang modern menghadapi tekanan serupa akibat otomatisasi parsial (sistem WMS, conveyor, pick-to-light) yang justru meningkatkan tuntutan mental terkait *decision-making* dan *error prevention*.

Urgensi keilmuan dan praktis dari kedua studi ini bersifat multidimensional. Pertama, dari perspektif *Occupational Health and Safety* (OHS), beban mental berkorelasi langsung dengan kelelahan, *burnout*, dan risiko kecelakaan kerja. Kedua, dari perspektif produktivitas, *mental fatigue* meningkatkan *error rate* sortir yang pada akhirnya merusak reputasi platform. Ketiga, dari perspektif regulasi, penerapan UU Cipta Kerja dan Permenaker No. 5/2018 tentang Keselamatan dan Kesehatan Kerja mengamanatkan雇主 untuk mengendalikan beban kerja secara kuantitatif—beban mental adalah salah satu dimensi wajib yang harus diukur. Oleh karena itu, modul ini akan membedah secara mendalam metodologi NASA-TLX dan integrasinya dengan *work sampling* sebagai instrumen rekayasa yang *applicable* untuk berbagai sektor logistik.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. NASA-Task Load Index (NASA-TLX)

NASA-TLX dikembangkan oleh Sandra G. Hart dan Lowell E. Staveland (1988) di NASA Ames Research Center sebagai instrumen multidimensi untuk mengukur *subjective workload*. Instrumen ini terdiri dari enam sub-skala yang masing-masing merepresentasikan dimensi beban kerja:

| Simbol | Dimensi | Deskripsi Operasional |
|---|---|---|
| $M$ | Mental Demand | Kebutuhan aktivitas berpikir, memutuskan, menghitung |
| $P$ | Physical Demand | Kebutuhan aktivitas fisik (mengangkat, berjalan) |
| $T$ | Temporal Demand | Tekanan waktu akibat tingkat aktivitas |
| $E$ | Effort | Tingkat usaha fisik & mental yang dikeluarkan |
| $F$ | Frustration | Tingkat irritasi, stress, discouragement |
| $R$ | Performance | Pencapaian tujuan kerja (rendah=baik, tinggi=buruk) |

### 2.2. Prosedur Pemberian Bobot (Pairwise Comparison)

Berbeda dengan *Raw TLX* (RTLX) yang hanya menjumlahkan keenam rating, *Complete TLX* melakukan pembobotan melalui **15 pasangan perbandingan** dari keenam sub-skala. Setiap pasangan responden memilih "dimensi mana yang lebih berkontribusi terhadap beban kerja". Bobot $w_i$ untuk dimensi ke-$i$ didefinisikan sebagai:

$$w_i = \sum_{j=1, j \neq i}^{6} \mathbb{1}(i \succ j), \quad \text{dengan } \sum_{i=1}^{6} w_i = 15$$

di mana $\mathbb{1}(i \succ j)$ adalah fungsi indikator yang bernilai 1 jika dimensi $i$ dipilih lebih dominan daripada dimensi $j$ pada pasangan tertentu, dan 0 sebaliknya.

### 2.3. Skor TLX Tertimbang (Weighted TLX)

Skor akhir NASA-TLX untuk seorang responden dihitung menggunakan persamaan berikut (Rafi & Putra, 2024):

$$\text{WTLX} = \frac{1}{15} \sum_{i=1}^{6} w_i \cdot R_i, \quad 0 \leq R_i \leq 100$$

di mana $R_i$ adalah rating subjektif pada dimensi ke-$i$. Nilai WTLX berkisar antara 0 hingga 100. Kategorisasi beban kerja yang lazim digunakan dalam literatur ergonomi:

$$0 \leq \text{WTLX} < 20 \Rightarrow \text{Rendah (Low)}$$
$$20 \leq \text{WTLX} < 50 \Rightarrow \text{Sedang (Medium)}$$
$$50 \leq \text{WTLX} < 80 \Rightarrow \text{Tinggi (High)}$$
$$\text{WTLX} \geq 80 \Rightarrow \text{Sangat Tinggi (Very High)}$$

### 2.4. Work Sampling — Penentuan Ukuran Sampel

Aditya.R & Putra (2024) mengintegrasikan NASA-TLX dengan *work sampling*, yaitu teknik observasi acak (*random observation*) untuk menentukan proporsi waktu yang dihabiskan pada berbagai aktivitas. Ukuran sampel minimum ditentukan oleh persamaan statistik:

$$n = \frac{Z_{\alpha/2}^2 \cdot p(1-p)}{E^2}$$

di mana:
- $Z_{\alpha/2}$ = nilai kritis distribusi normal standar (untuk $\alpha = 0.05$, $Z = 1.96$)
- $p$ = proporsi aktivitas yang diestimasi (digunakan $p = 0.5$ untuk sampel konservatif)
- $E$ = *margin of error* yang dapat diterima

Untuk konservatisme maksimum dengan $p = 0.5$ dan $\alpha = 0.05$:

$$n_{\max} = \frac{(1.96)^2 \cdot 0.25}{E^2} = \frac{0.9604}{E^2}$$

### 2.5. Confidence Interval untuk Proporsi

Setelah pengamatan, proporsi sebenarnya diestimasi dalam *confidence interval*:

$$p \pm Z_{\alpha/2} \sqrt{\frac{p(1-p)}{n}}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Diagram Alir Pelaksanaan NASA-TLX

```
┌──────────────────────────────────────────────────────────────┐
│  Tahap 1: Identifikasi Populasi & Sampel                      │
│  - Stratified random sampling terhadap N operator             │
│  - Penentuan n menggunakan rumus Slovin (n = N/(1+Ne²))       │
└────────────────────────┬─────────────────────────────────────┘
                         ↓
┌──────────────────────────────────────────────────────────────┐
│  Tahap 2: Pairwise Comparison Card Sort                       │
│  - 15 kartu pasangan dari 6 dimensi                           │
│  - Responden memilih "lebih dominan"                          │
│  - Bobot w_i = jumlah kemenangan dimensi                      │
└────────────────────────┬─────────────────────────────────────┘
                         ↓
┌──────────────────────────────────────────────────────────────┐
│  Tahap 3: Pemberian Rating (0–100) pada 6 Sub-skala           │
│  - Dilakukan dalam shift actual (bukan simulasi)              │
│  - Dilakukan setiap 30–60 menit untuk validitas               │
└────────────────────────┬─────────────────────────────────────┘
                         ↓
┌──────────────────────────────────────────────────────────────┐
│  Tahap 4: Perhitungan Weighted TLX                           │
│  - WTLX = Σ(wi·Ri)/15                                        │
│  - Validasi reliabilitas via Cronbach's Alpha (α ≥ 0.70)      │
└────────────────────────┬─────────────────────────────────────┘
                         ↓
┌──────────────────────────────────────────────────────────────┐
│  Tahap 5: Work Sampling (Aditya.R & Putra, 2024)              │
│  - Observasi acak setiap 60 detik selama 8 jam kerja          │
│  - Kategorisasi: productive / idle / delay / supporting       │
│  - Hitung proporsi & CI                                       │
└────────────────────────┬─────────────────────────────────────┘
                         ↓
┌──────────────────────────────────────────────────────────────┐
│  Tahap 6: Analisis Korelasi & Rekomendasi Ergonomis           │
│  - Pearson correlation WTLX ↔ produktivitas                   │
│  - Uji beda (Mann-Whitney U atau t-test) antar shift          │
└──────────────────────────────────────────────────────────────┘
```

### 3.2. SOP Integrasi NASA-TLX & Work Sampling

1. **Pra-survei (1 minggu):** Pemetaan alur kerja, identifikasi 6–8 kategori aktivitas utama, briefing responden.
2. **Uji Coba (Pilot Test):** Minimal 5% dari total responden untuk validasi instrumen.
3. **Pelaksanaan Inti:** Periode observasi 5–10 hari kerja untuk menangkap variabilitas harian.
4. **Pengolahan Data:** Microsoft Excel/Python (pandas, scipy.stats), uji validitas & reliabilitas.
5. **Pelaporan:** Rekomendasi desain ulang sistem kerja, rotasi shift, atau otomatisasi parsial.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Parameter Hipotetis (Berdasarkan Karakteristik Shopee Express Warehouse)

Misalkan sebuah *fulfilment center* Shopee Express memiliki operator sortir sebanyak **N = 50 orang**. Studi dilakukan dengan *margin of error* $E = 0.05$ dan tingkat kepercayaan 95%.

**Langkah 1: Penentuan ukuran sampel (Slovin):**

$$n = \frac{N}{1 + N
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
