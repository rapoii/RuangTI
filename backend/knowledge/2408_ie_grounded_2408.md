# 2408 — Analisis Beban Kerja Mental Operator Logistik Last-Mile dan Pergudangan Menggunakan Metode NASA-TLX dan Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Analisis Beban Kerja Mental Karyawan Operator Logistik E-Commerce (Shopee Express) dan Pergudangan dengan Pendekatan NASA-TLX dan Work Sampling
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method*. Peer-Reviewed Journal (UMS Proceedings). DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Workload Analysis Using Work Sampling and NASA-TLX for Warehouse Operators*. Peer-Reviewed Journal (UMS Proceedings). DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Industri *e-commerce* Indonesia mengalami pertumbuhan eksponensial pasca-pandemi COVID-19, dengan proyeksi nilai transaksi menembus lebih dari US$ 104 miliar pada tahun 2025 (Bain & Company, 2023). Shopee, sebagai salah satu *marketplace* dominan di Asia Tenggara, mengandalkan ekosistem logistik *last-mile* melalui kemitraan **Shopee Express** (SPX) untuk memastikan pengiriman *same-day* dan *next-day* ke lebih dari 6.000 kecamatan di Indonesia. Dalam konteks ini, *Shopee Express Partner* (spx-partner) adalah kurir independen yang bertanggung jawab atas sortirasi, *pickup*, dan pengiriman paket di titik terakhir. Intensitas volume paket yang sangat tinggi, *deadline* pengiriman yang ketat, serta tekanan KPI (Key Performance Indicator) seperti *on-time delivery rate* menciptakan lingkungan kerja dengan **beban kerja mental (mental workload)** yang signifikan.

Rafi & Putra (2024) dalam DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385) menyoroti bahwa pengukuran beban kerja mental pekerja SPX selama ini bersifat kualitatif (*perceived effort*), padahal dampak kuantitatifnya terhadap *human error*, kelelahan, dan *burnout* dapat diukur secara objektif menggunakan instrumen tervalidasi secara psikometrik seperti **NASA Task Load Index (NASA-TLX)**. Paper ini menjadi salah satu kajian empirik pertama yang mengaplikasikan NASA-TLX pada pekerja gig-economy di sektor logistik Indonesia, melengkapi gap literatur yang sebelumnya didominasi studi manufaktur dan operator call-center.

Di sisi lain, Aditya & Putra (2024) dalam DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) memperluas pendekatan dengan mengombinasikan NASA-TLX dan **Work Sampling** untuk operator pergudangan, guna memetakan *activity profile* aktual berdasarkan proporsi waktu kerja (*working time ratio*) sehingga diperoleh korelasi antara alokasi aktivitas fisik-kognitif dengan skor beban kerja mental. Kedua paper ini menjadi fondasi bagi Modul 2408 dalam membangun kerangka integratif **Workload Engineering** untuk sub-sektor *logistics & warehousing*, dengan penekanan pada:

1. Identifikasi dimensi beban kerja mental yang dominan (Mental Demand, Physical Demand, Temporal Demand, Performance, Effort, Frustration) pada konteks nyata operasional.
2. Penentuan skor TLX tertimbang (*Weighted TLX*) untuk mengkuantifikasi prioritas beban.
3. Perhitungan *work sampling* dengan presisi statistik untuk validasi utilisasi waktu kerja.
4. Rekomendasi rekayasa ergonomi dan *capacity planning* yang terukur.

Urgensi ekonomis dari studi ini tidak terbantahkan: menurut data ILO (2023), biaya yang hilang akibat kelelahan pekerja (*fatigue-related productivity loss*) di sektor logistik Asia mencapai 3–4% PDB. Dengan pendekatan NASA-TLX yang adaptif dan hemat biaya, perusahaan dapat merancang intervensi tepat sasaran tanpa investasi *eye-tracking* atau *EEG* yang mahal.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. NASA Task Load Index (NASA-TLX)

NASA-TLX adalah instrumen *subjective workload assessment* yang dikembangkan oleh Sandra Hart & Lowell Staveland (1988) di NASA Ames Research Center. Instrumen ini mengukur beban kerja melalui **enam sub-skala**:

| No | Sub-skala | Dimensi yang Diukur |
|----|-----------|---------------------|
| 1 | Mental Demand (MD) | Beban aktivitas kognitif |
| 2 | Physical Demand (PD) | Beban aktivitas fisik |
| 3 | Temporal Demand (TD) | Tekanan waktu |
| 4 | Performance (PE) | Pencapaian target tugas |
| 5 | Effort (EF) | Tingkat usaha yang dikeluarkan |
| 6 | Frustration (FR) | Tingkat frustrasi/iritasi |

Setiap sub-skala dinilai menggunakan *Likert scale* 0–100 dengan tick mark setiap 5 poin. Terdapat dua varian: **Raw TLX (RTLX)** dan **Weighted TLX**. Rafi & Putra (2024) menggunakan **Weighted TLX** yang memerlukan proses *pairwise comparison* (15 pasangan) untuk menentukan bobot tiap sub-skala.

#### 2.1.1. Perhitungan Bobot (Pairwise Comparison)

Bobot tiap sub-skala $w_i$ ditentukan dengan rumus:

$$w_i = \frac{n_i}{15}, \quad i \in \{MD, PD, TD, PE, EF, FR\}$$

dengan $n_i$ = jumlah kemenangan sub-skala $i$ dalam 15 perbandingan berpasangan. Sifat matematisanya:

$$\sum_{i=1}^{6} w_i = 1$$

#### 2.1.2. Skor TLX Tertimbang (Overall Workload Score)

Skor akhir NASA-TLX dihitung sebagai rata-rata terbobot:

$$\text{TLX}_{\text{weighted}} = \sum_{i=1}^{6} w_i \cdot r_i$$

dengan $r_i$ = skor mentah sub-skala ke-$i$ (0–100). Skor ini merepresentasikan *Overall Workload* dengan rentang 0–100.

#### 2.1.3. Interpretasi Beban Kerja (Hart, 2006)

| Skor TLX | Kategori |
|----------|----------|
| 0–9 | Rendah |
| 10–29 | Sedang |
| 30–49 | Agak Tinggi |
| 50–79 | Tinggi |
| 80–100 | Sangat Tinggi |

### 2.2. Work Sampling (Analisis Sampling Kerja)

Work Sampling adalah teknik observasi instaneous untuk menentukan proporsi waktu yang dihabiskan pekerja pada berbagai kategori aktivitas. Metode ini dikembangkan dari teori probabilitas dan telah distandarisasi dalam literature *methods engineering* (Niebel & Freivalds, 2014).

#### 2.2.1. Penentuan Jumlah Observasi Minimum

Untuk tingkat kepercayaan tertentu, jumlah observasi minimum $N$ dihitung dengan:

$$N = \frac{Z^2 \cdot p(1-p)}{e^2}$$

dengan:
- $Z$ = nilai Z pada tingkat kepercayaan $(1-\alpha)$
- $p$ = proporsi aktivitas yang diharapkan (umumnya 0,5 untuk konservatif)
- $e$ = margin of error absolut

Untuk tingkat kepercayaan 95% dan toleransi kesalahan $\pm 5\%$:

$$N = \frac{(1,96)^2 \cdot (0,5)(0,5)}{(0,05)^2} = \frac{3,8416 \cdot 0,25}{0,0025} = 384,16 \approx 385 \text{ observasi}$$

#### 2.2.2. Koreksi Iteratif (Recommended Approach)

Karena $p$ aktual umumnya tidak diketahui sebelum pengamatan, digunakan pendekatan iteratif (Niebel):

$$N_0 = \frac{4 \cdot p_0(1-p_0)}{E^2}$$

dengan $E = e/p_0$ (tingkat kesalahan relatif, umumnya 0,10). Setelah pilot study dengan $n_1$ observasi diperoleh proporsi aktual $\hat{p}$:

$$N_1 = \frac{4 \cdot \hat{p}(1-\hat{p})}{E^2}$$

#### 2.2.3. Working Time Ratio (WTR)

Proporsi waktu produktif dihitung:

$$\text{WTR} = \frac{\sum_{j=1}^{J} f_{\text{productive},j}}{\sum_{j=1}^{J} f_{\text{total},j}}$$

dengan $f_j$ = frekuensi observasi pada kategori $j$.

### 2.3. Coupling Model: Work Sampling–NASA-TLX

Aditya & Putra (2024) mengusulkan integrasi:

$$\text{Adjusted Workload} = \text{TLX}_{\text{weighted}} \cdot \left(1 + \alpha \cdot \frac{1 - \text{WTR}}{\text{WTR}}\right)$$

dengan $\alpha$ = koefisien *fatigue amplification* (umumnya 0,2–0,4). Model ini menjustifikasi bahwa beban mental aktual lebih tinggi ketika WTR rendah karena pekerja menanggung overhead kognitif dari *task switching*, *waiting*, dan *non-value-added activity*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Tahapan Implementasi NASA-TLX (Berdasarkan Rafi & Putra, 2024)

```
┌──────────────────────────────────────────┐
│ 1. Identifikasi Populasi & Sampling       │
│    (SPX partner, minimal 30 responden)  │
└──────────────────┬───────────────────────┘
                   ▼
┌──────────────────────────────────────────┐
│ 2. Pembuatan Instrumen                   │
│    (Kuesioner NASA-TLX + kartu bobot)    │
└──────────────────┬───────────────────────┘
                   ▼
┌──────────────────────────────────────────┐
│ 3. Pairwise Comparison (15 pasangan)     │
│    → menentukan bobot w_i               │
└──────────────────┬───────────────────────┘
                   ▼
┌──────────────────────────────────────────┐
│ 4. Pemberian Skor Sub-skala (0–100)      │
│    setelah shift kerja                   │
└──────────────────┬───────────────────────┘
                   ▼
┌──────────────────────────────────────────┐
│ 5. Perhitungan TLX_Weighted              │
│    & klasifikasi beban                   │
└──────────────────┬───────────────────────┘
                   ▼
┌──────────────────────────────────────────┐
│ 6. Validitas & Reliabilitas              │
│    (Cronbach's α > 0,70)                │
└──────────────────┬───────────────────────┘
                   ▼
┌──────────────────────────────────────────┐
│ 7. Rekomendasi Ergonomi & SDM            │
└──────────────────────────────────────────┘
```

### 3.2. Tahapan Work Sampling (Berdasarkan Aditya & Putra, 2024)

1. **Definisikan kategori aktivitas** secara *mutually exclusive* dan *collectively exhaustive* (MECE). Contoh: *Receiving*, *Sorting*, *Picking*, *Packing*, *Idle/Personal*, *Delay*.
2. **Tentukan desain observasi** (*random instantaneous observation*): gunakan *random number generator* atau jadwal kunjungan tidak teratur untuk menghindari *Hawthorne effect*.
3. **Hitung $N$ minimum** menggunakan rumus pada Bagian 2.2.
4. **Lakukan pilot study** (50–100 observasi) untuk memperkirakan $\hat{p}$.
5. **Eksekusi observasi penuh** dengan total $N$ observasi, terdistribusi merata selama jam kerja (misalnya 8 jam × 5 hari).
6. **Rekapitulasi frekuensi** per kategori.
7. **Uji signifikansi** menggunakan *chi-square goodness-of-fit* untuk memastikan tidak ada bias observasi.
8. **Hitung WTR** dan lakukan *action plan*.

### 3.3. SOP Pengukuran Terintegrasi

| No | Aktivitas | Penanggung Jawab | Output |
|----|-----------|------------------|--------|
| 1 | Briefing pekerja | Supervisor | Informed consent |
| 2 | Distribusi kuesioner TLX | Researcher | Kuesioner terisi |
| 3 | Pairwise comparison | Researcher | Bobot $w_i$ |
| 4 | Pengamatan work sampling | Observer terlatih | Log sheet |
| 5 | Rekapitulasi & analisis | Engineer | Laporan TLX & WTR |
| 6 | Rekomendasi | Manajer | Action plan |

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus: SPX Partner di Sortation Hub Jakarta Selatan

Berdasarkan data Rafi & Putra (2024), asumsikan hasil pengukuran terhadap 30 operator sortir di sebuah hub SPX Jakarta adalah sebagai berikut:

**Langkah 1 — Data Mentah Sub-skala (rata-rata 30 responden):**

| Sub-skala | Skor Mentah $r_i$ |
|-----------|-------------------|
| Mental Demand (MD) | 75 |
| Physical Demand (PD) | 60 |
| Temporal Demand (TD) | 85 |
| Performance (PE) | 40 |
| Effort (EF) | 70 |
| Frustration (FR) | 55 |

**Langkah 2 — Hasil Pairwise Comparison (15 pasangan):**

Misalkan hasil perbandingan menghasilkan:
- MD menang 4 kali
- PD menang 2 kali
- TD menang 5 kali
- PE menang 0 kali
- EF menang 3 kali
- FR menang 1 kali
- Total = 15 ✓

**Langkah 3 — Hitung Bobot $w_i$:**

$$w_{MD} = 4/15 = 0,267$$
$$w_{PD} = 2/15 = 0,133$$
$$w_{TD} = 5/15 = 0,333$$
$$w_{PE} = 0/15 = 0,000$$
$$w_{EF} = 3/15 = 0,200$$
$$w_{FR} = 1/15 = 0,067$$

Cek: $0,267 + 0,133 + 0,333 + 0 + 0,200 + 0,067 = 1,000$ ✓

**Langkah 4 — Hitung TLX Tertimbang:**

$$\text{TLX}_w = \sum
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
$
