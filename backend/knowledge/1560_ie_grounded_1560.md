# 1560 — Analisis Beban Kerja Mental Operator Logistik E-Commerce Menggunakan Metode NASA-TLX: Framework Kuantitatif untuk Ergonomi Kognitif dan Optimasi Sumber Daya Manusia

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal (Universitas Pgri Semarang)*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Industri *e-commerce* Indonesia mengalami ekspansi eksponensial pasca-pandemi COVID-19, dengan nilai transaksi bruto (GMV) yang diproyeksikan menembus lebih dari US$130 miliar pada 2025. Shopee Express, sebagai salah satu pilar utama layanan *last-mile delivery* di bawah naungan Sea Group, mengandalkan ribuan pekerja kurir (*partner employees*) yang tersebar di berbagai *sortation hub* dan titik distribusi. Dalam ekosistem operasional semacam ini, beban kerja mental (*mental workload*) pekerja menjadi variabel ergonomi kognitif yang menentukan *trade-off* antara throughput, akurasi sortir, keselamatan kerja, dan *burnout* karyawan.

Rafi & Putra (2024) dalam *peer-reviewed journal* ber-DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385) menyoroti bahwa mayoritas penelitian beban kerja di sektor logistik Indonesia berfokus pada dimensi fisik, sedangkan beban mental — yang menjadi determinan utama human error pada aktivitas *sorting*, *scanning*, dan navigasi rute — masih *underrepresented* dalam literatur. Studi ini mengisi *research gap* dengan mengaplikasikan *NASA Task Load Index* (NASA-TLX) untuk mengukur secara multidimensional persepsi beban kerja mitra kurir Shopee Express. Temuan krusial paper ini mengindikasikan bahwa dimensi *Temporal Demand* dan *Effort* memiliki bobot dominan, menandakan tekanan *deadline* dan kompleksitas kognitif yang sangat tinggi akibat fluktuasi volume parcel musiman (misalnya *harbolnas*, *flash sale*, dan *Lebaran*).

Secara strategis, pemahaman terhadap *mental workload* bukan sekadar isu Human Factors Engineering, melainkan menjadi input bagi *workforce planning*, *shift scheduling*, dan *capacity planning* di level sistem logistik. Studi Aditya & Putra (2024) ber-DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) memberikan kontekstualisasi pelengkap dengan menunjukkan bahwa pada operator gudang, *work sampling* yang dikombinasikan dengan NASA-TLX mampu memetakan korelasi antara utilisasi waktu kerja dan beban kognitif yang dialami, sehingga menghasilkan rekomendasi *staffing* yang lebih akurat.

Urgensi ekonomi dan operasional dari riset ini sangat relevan. Pertama, *mis-sort rate* dan *late delivery* — dua KPI utama layanan kurir — memiliki korelasi positif dengan kelelahan mental operator. Kedua, regulasi Ketenagakerjaan Indonesia melalui UU No. 13/2003 dan Permenaker No. 5/2018 mengatur secara eksplisit bahwa beban kerja yang melebihi kapasitas fisiologis-psikologis pekerja menjadi tanggung jawab雇主. Ketiga, dengan margin operasional *last-mile delivery* yang terus menipis (rata-rata <5%), efisiensi berbasis *human capital* menjadi *competitive advantage* utama. Oleh karena itu, adopsi *tool* terstandar internasional seperti NASA-TLX bukan pilihan, melainkan kebutuhan *compliance* sekaligus *operational excellence*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. NASA Task Load Index (NASA-TLX) sebagai Instrumen Ergonomi Kognitif

NASA-TLX, yang dikembangkan oleh Hart & Staveland (1988) di NASA Ames Research Center, adalah instrumen subjektif multidimensional yang dirancang untuk mengukur *perceived workload* operator dalam mengerjakan suatu task. Instrumen ini terdiri dari enam subskala yang merepresentasikan dimensi beban kerja secara holistik:

1. **Mental Demand (MD)** – aktivitas kognitif (thinking, deciding, calculating)
2. **Physical Demand (PD)** – aktivitas fisik (pushing, lifting, walking)
3. **Temporal Demand (TD)** – tekanan waktu (pace, deadline)
4. **Performance (PE)** – persepsi keberhasilan penyelesaian tugas
5. **Effort (EF)** – usaha total yang dikeluarkan untuk完成任务
6. **Frustration (FR)** – tingkat frustrasi, irritasi, dan stress

### 2.2. Formulasi Weighted Workload Score (WWLS)

Skor total NASA-TLX dihitung melalui prosedur dua-tahap: (a) *raw rating* pada masing-masing subskala menggunakan *Likert-type scale* 0–100 (dengan *step* 5), dan (b) *pairwise comparison* antar keenam dimensi untuk menentukan bobot relatif. Terdapat $\binom{6}{2} = 15$ pasangan perbandingan, sehingga total bobot seluruhnya adalah 15. *Weighted Workload Score* diformulasikan sebagai:

$$
WWLS = \frac{\sum_{i=1}^{6} (w_i \times r_i)}{15}
$$

di mana $w_i$ adalah jumlah kemenangan (vote) dimensi $i$ dari 15 perbandingan berpasangan, dan $r_i$ adalah *raw rating* dimensi $i$. Skor akhir dinormalisasi ke skala 0–100 dengan:

$$
WWLS_{norm} = WWLS \times \frac{100}{100} = \frac{\sum_{i=1}^{6} (w_i \times r_i)}{15}
$$

Karena setiap $r_i \in [0,100]$ dan $\sum w_i = 15$, maka secara teoretis $WWLS \in [0, 100]$.

### 2.3. Klasifikasi Beban Kerja Berdasarkan Skor

Rafi & Putra (2024) mengikuti klasifikasi konvensional yang diadopsi dari studi ergonomik kognitif, yaitu:

$$
\text{Kategori Beban} = \begin{cases} \text{Rendah}, & 0 \leq WWLS < 25 \\ \text{Sedang}, & 25 \leq WWLS < 50 \\ \text{Tinggi}, & 50 \leq WWLS < 75 \\ \text{Sangat Tinggi}, & 75 \leq WWLS \leq 100 \end{cases}
$$

### 2.4. Work Sampling sebagai Metodologi Komplementer

Aditya & Putra (2024) mengintegrasikan NASA-TLX dengan *work sampling* — metode observasi *instantaneous* untuk menentukan proporsi waktu kerja yang dihabiskan pada kategori aktivitas tertentu. Formulasi utilitas waktu adalah:

$$
P_i = \frac{n_i}{N} \times 100\%
$$

di mana $P_i$ adalah persentase waktu pada kategori aktivitas $i$, $n_i$ adalah jumlah observasi *random* yang jatuh pada kategori $i$, dan $N$ adalah total observasi. Untuk *reliability* statistik dengan *confidence level* 95% dan *margin of error* $\varepsilon = 5\%$:

$$
N = \frac{Z^2 \cdot p \cdot (1-p)}{\varepsilon^2} = \frac{(1.96)^2 \cdot 0.5 \cdot 0.5}{(0.05)^2} \approx 384 \text{ observasi}
$$

### 2.5. Korelasi Utilisasi dan Mental Workload

Untuk mengkuantifikasi hubungan antara *physical activity utilization* dan *mental workload*, dapat digunakan *Pearson Product-Moment Correlation*:

$$
r = \frac{\sum_{i=1}^{n}(x_i - \bar{x})(y_i - \bar{y})}{\sqrt{\sum_{i=1}^{n}(x_i - \bar{x})^2 \cdot \sum_{i=1}^{n}(y_i - \bar{y})^2}}
$$

di mana $x_i$ adalah utilisasi waktu aktivitas fisik dan $y_i$ adalah skor NASA-TLX responden ke-$i$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Diagram Alir Implementasi NASA-TLX

```
┌─────────────────────────────────┐
│ 1. Identifikasi Populasi & Task │
│    (Shopee Express Kurir)      │
└──────────────┬──────────────────┘
               ▼
┌─────────────────────────────────┐
│ 2. Validasi Instrumen (Pilot   │
│    Test, Cronbach α ≥ 0.70)     │
└──────────────┬──────────────────┘
               ▼
┌─────────────────────────────────┐
│ 3. Penyiapan Form & Instruksi  │
│    TLX (6 subskala + 15 card)  │
└──────────────┬──────────────────┘
               ▼
┌─────────────────────────────────┐
│ 4. Pengisian Raw Rating (0-100)│
│    oleh Responden              │
└──────────────┬──────────────────┘
               ▼
┌─────────────────────────────────┐
│ 5. Pairwise Comparison (15     │
│    kartu perbandingan)         │
└──────────────┬──────────────────┘
               ▼
┌─────────────────────────────────┐
│ 6. Hitung Bobot wᵢ (Σwᵢ = 15)  │
└──────────────┬──────────────────┘
               ▼
┌─────────────────────────────────┐
│ 7. Hitung WWLS = Σ(wᵢ·rᵢ)/15  │
└──────────────┬──────────────────┘
               ▼
┌─────────────────────────────────┐
│ 8. Klasifikasi Beban & Rekom. │
│    (staffing, shift, training) │
└─────────────────────────────────┘
```

### 3.2. SOP Pengukuran Beban Kerja Mental

**Tahap 1 – Persiapan:**
- Tentukan *task* spesifik yang akan dievaluasi (misalnya *sorting* 500 parcel/jam).
- Pilih sampel acak sederhana (n ≥ 30 untuk uji parametrik menurut *Central Limit Theorem*).
- Lakukan *briefing* kepada responden mengenai tujuan, durasi (15–20 menit), dan kerahasiaan data.

**Tahap 2 – Pelaksanaan:**
- Responden menyelesaikan *task* pada kondisi operasional normal.
- Dalam 10 menit pasca-task, responden mengisi *raw rating* pada keenam subskala TLX menggunakan *visual analog scale* 0–100.
- Responden melakukan *pairwise comparison* dengan memilih dari 15 kartu yang membandingkan dua dimensi pada satu waktu. Setiap kemenangan dihitung 1 suara.

**Tahap 3 – Analisis:**
- Hitung bobot $w_i$ dari *pairwise comparison*.
- Hitung $WWLS$ menggunakan persamaan pada §2.2.
- Lakukan *descriptive statistics* (mean, median, SD) dan *one-sample t-test* terhadap *benchmark* industri.

**Tahap 4 – Rekomendasi:**
- Jika $WWLS > 50$: lakukan *job redesign*, *shift rotation*, atau *workload redistribution*.
- Jika $WWLS > 75$: kategorikan sebagai *critical*, lakukan intervensi segera.
- *Cross-validate* dengan *work sampling* untuk memetakan distribusi aktivitas yang berkontribusi terhadap beban tinggi.

### 3.3. Standar Acuan

- **ISO 10075:** Ergonomic principles related to mental workload.
- **ISO 9241-210:** Human-centred design untuk interactive systems.
- **Permenaker No. 5/2018:** Keselamatan dan Kesehatan Kerja Lingkungan Kerja.
- **SNI 8395:2017:** Pengukuran beban kerja menggunakan *denyut nadi* (sebagai triangulasi).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Profil Studi Kasus

Sebuah *sortation hub* Shopee Express di Semarang memiliki 8 operator sortir. Pada periode *harbolnas*, target sortir naik dari 300 parcel/jam menjadi 600 parcel/jam. Pihak manajemen ingin mengevaluasi apakah beban kerja mental operator masih dalam batas aman. Diambil sampel 5 operator (di luar 8 operator penuh) sebagai *pilot study* sesuai prosedur Rafi & Putra (2024).

### 4.2. Data Raw Rating Responden

Tabel 1 – Raw Rating (skala 0–100) dari 5 Responden

| Responden | MD | PD | TD | PE | EF | FR |
|-----------|----|----|----|----|----|----|
| R1        | 70 | 60 | 85 | 40 | 75 | 55 |
| R2        | 65 | 55 | 90 | 35 | 80 | 60 |
| R3        | 75 | 50 | 80 | 45 | 70 | 50 |
| R4        | 60 | 65 | 95 | 30 | 85 | 65 |
| R5        | 70 | 60 | 88 | 40 | 78 | 58 |

### 4.3. Hasil Pairwise Comparison (Bobot)

Berdasarkan *pairwise comparison* oleh R1 (sebagai ilustrasi):

| Dimensi    | Vote (wᵢ) |
|------------|----------:|
| MD         | 3         |
| PD         | 2         |
| TD         | 5         |
| PE         | 1         |
| EF         | 3         |
| FR         | 1         |
| **Total**  | **15**    |

### 4.4. Perhitungan Step-by-Step WWLS untuk Responden 1

$$
WWLS_{R1} = \frac{(3 \times 70) + (2 \times 60) + (5 \times 85) + (1 \times 40) + (3 \times 75) + (1 \times 55)}{15}
$$

$$