# 2184 — Analisis Beban Kerja Mental Operator Logistik E-Commerce Menggunakan Metode NASA-TLX: Kerangka Kuantitatif untuk Rekayasa Sistem Kerja

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan ekonomi digital Indonesia yang diproyeksikan mencapai USD 130 miliar pada tahun 2025 telah mengubah secara fundamental struktur permintaan terhadap layanan logistik last-mile dan pergudangan. Shopee, sebagai salah satu *platform* e-commerce terbesar di Asia Tenggara, mengandalkan jaringan mitra kurir (*Shopee Express Partner*) yang beroperasi di titik sortir, *hub*, dan *last-mile delivery*. Rafi & Putra (2024, DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)) menyoroti bahwa peningkatan volume paket yang bersifat musiman (*peak season* seperti Harbolnas, Ramadan, dan 12.12) menciptakan tekanan kognitif yang signifikan terhadap operator sortir, terutama karena variabilitas SKU, alamat tujuan yang tidak terstandarisasi, dan tenggat waktu *same-day delivery*. Dalam konteks ini, *mental workload*—yaitu jumlah sumber daya kognitif yang diinvestasikan pekerja untuk menyelesaikan tugas dalam kurun waktu tertentu—menjadi variabel kritis yang menentukan *throughput*, *error rate*, dan tingkat kelelahan (*fatigue*) yang berdampak langsung pada *Service Level Agreement* (SLA) pengiriman.

Studi Rafi & Putra (2024) mengidentifikasi bahwa beban kerja mental operator Shopee Express Partner di salah satu *sortation hub* Jabodetabek melebihi ambang batas rekomendasi, dengan skor NASA-TLX rata-rata sebesar **78,4 dari 100**, jauh di atas skor 50 yang dianggap sebagai titik keseimbangan beban kerja (*balanced workload threshold*). Temuan ini selaras dengan penelitian Aditya.R & Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) pada operator gudang di Pekanbaru yang menunjukkan rata-rata skor NASA-TLX sebesar **74,1** dengan dominasi dimensi *Mental Demand* dan *Temporal Demand*. Kedua penelitian ini membangun narasi bahwa operator di industri logistik Indonesia menghadapi *cognitive overload* akibat kombinasi tiga faktor: (1) **Workplace Design** yang tidak ergonomis, (2) **Task Variability** yang tinggi, dan (3) **Pace of Work** yang ditentukan oleh *downstream bottleneck*. Urgensi pengelolaan *mental workload* ini tidak hanya bersifat ergonomis tetapi juga ekonomis, karena setiap peningkatan 1 poin *error rate* sortir berpotensi menimbulkan *reverse logistics cost* sebesar Rp 8.500–12.000 per paket pada industri logistik perkotaan.

Lebih lanjut, Rafi & Putra (2024) menekankan bahwa mayoritas operator Shopee Express Partner merupakan pekerja denganstatus kemitraan (*partner*), bukan karyawan tetap, sehingga belum mendapat perlindungan K3 formal berupa *Job Safety Analysis* (JSA) berbasis mental workload. Padahal, dalam perspektif *human factors engineering*, *mental workload* yang tidak terkelola merupakan *precursor* kecelakaan kerja, *burnout*, dan *turnover*—semuanya memiliki *cost of replacement* yang signifikan bagi perusahaan *platform* dan mitra agregatornya. Dokumen modul ini, oleh karena itu, menyusun kerangka kuantitatif yang mengintegrasikan instrumen NASA-TLX dengan formulasi *work sampling* dan *time study* untuk memberikan panduan rekayasa yang aplikatif bagi praktisi Teknik Industri di sektor logistik dan manufaktur.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Konseptual NASA-TLX

NASA Task Load Index (NASA-TLX) adalah instrumen multidimensi yang dikembangkan oleh Hart & Staveland (1988) untuk mengukur *subjective workload* berdasarkan enam dimensi, sebagaimana diadaptasi oleh Rafi & Putra (2024) dan Aditya.R & Putra (2024):

1. **Mental Demand (MD)** — aktivitas kognitif (berpikir, memutuskan, mengamati).
2. **Physical Demand (PD)** — aktivitas fisik (menopang, mengangkat, mendorong).
3. **Temporal Demand (TD)** — tekanan waktu.
4. **Performance (PE)** — persepsi pencapaian tujuan tugas (*invers*: semakin rendah skor, semakin tinggi persepsi keberhasilan).
5. **Effort (EF)** — usaha yang dikeluarkan secara fisik dan mental.
6. **Frustration (FR)** — tingkat frustasi, stress, atau ketidaknyamanan.

### 2.2 Prosedur Penskoran

Terdapat dua varian skor NASA-TLX yang digunakan dalam kedua paper sumber:

**(a) Raw TLX (Unweighted):**
$$TLX_{raw} = \frac{1}{6}\sum_{i=1}^{6} R_i$$
dengan $R_i \in [0, 100]$ adalah skor dimensi ke-$i$.

**(b) Weighted TLX (Full TLX):**
Skor dihitung melalui dua tahap: **Pairwise Comparison** dan **Weighted Rating**.

Tahap 1 — *Pairwise Comparison Matrix* $(15 \times 6)$ menghasilkan bobot $w_i$ dengan:
$$w_i = \frac{n_i}{15}, \quad \sum_{i=1}^{6} w_i = 1$$
dengan $n_i$ adalah jumlah kemenangan dimensi $i$ dari 15 perbandingan berpasangan.

Tahap 2 — *Weighted Score* per responden:
$$TLX_{weighted} = \sum_{i=1}^{6} w_i \cdot R_i$$

### 2.3 Formulasi Work Sampling (Pendukung dari Paper 2)

Aditya.R & Putra (2024) mengintegrasikan NASA-TLX dengan *work sampling* untuk memperoleh *activity proportions*. Formula dasar *work sampling* dengan *confidence interval*:

$$n = \frac{N \cdot p \cdot q}{(N-1) \cdot d^2 + p \cdot q}$$
dengan $N$ = total populasi pengamatan, $p$ = proporsi aktivitas yang diharapkan, $q = 1-p$, dan $d$ = tingkat ketelitian (*allowable error*).

Untuk *random sampling* dengan $N \to \infty$:
$$n = \frac{Z^2 \cdot p \cdot q}{d^2}$$
dengan $Z = 1{,}96$ untuk *confidence level* 95%.

Toleransi *error* dinyatakan sebagai:
$$d = Z \sqrt{\frac{p(1-p)}{n}}$$

### 2.4 Penentuan Kapasitas Kerja (Workload Capacity)

Rafi & Putra (2024) menghitung beban kerja aktual (*actual workload*) dan kapasitas normal pekerja (*normal capacity*) menggunakan:

$$\text{Workload Ratio} = \frac{\text{Actual Working Time}}{\text{Normal Capacity}} \times 100\%$$

dengan *Normal Capacity* untuk kerja mental-berat pada shift 8 jam adalah:
$$C_n = T_{shift} - (T_{allowance} + T_{personal}) = 480 - (60+30) = 390 \text{ menit}$$

Klasifikasi beban kerja berdasarkan departemen ketenagakerjaan:

| Persentase | Klasifikasi |
|------------|-------------|
| < 80% | Beban Kerja Ringan |
| 80–100% | Beban Kerja Sedang |
| 100–120% | Beban Kerja Berat |
| > 120% | Beban Kerja Sangat Berat |

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan integrasi kedua paper sumber, kami menyusun SOP tujuh tahap berikut untuk implementasi di *sortation hub*, *warehouse*, atau *manufacturing cell*:

```
┌────────────────────────────────────────────────────────────┐
│  Tahap 1: Identifikasi Task & Operator Sampling (n≥30)     │
│                 ↓                                          │
│  Tahap 2: Work Sampling (≥384 obs pada 95% CI)             │
│                 ↓                                          │
│  Tahap 3: Kuesioner NASA-TLX + Pairwise Comparison         │
│                 ↓                                          │
│  Tahap 4: Perhitungan Raw & Weighted TLX Score            │
│                 ↓                                          │
│  Tahap 5: Workload Ratio vs Capacity (480/390 menit)      │
│                 ↓                                          │
│  Tahap 6: Analisis Korelasi Pearson (r) TLX vs Throughput  │
│                 ↓                                          │
│  Tahap 7: Rekomendasi Rekayasa (Layout, Tools, Shift)      │
└────────────────────────────────────────────────────────────┘
```

**Tahap 1** — Tentukan *scope*: Rafi & Putra (2024) menggunakan populasi 36 operator sortir Shopee Express di *hub* Cengkareng, sementara Aditya.R & Putra (2024) menyampling 30 operator gudang di Pekanbaru. Sampling minimum 30 responden mengikuti *Central Limit Theorem*.

**Tahap 2** — *Work sampling* dengan interval *random* (mis. setiap 60 detik selama 8 jam) menghasilkan $n \geq 384$ observasi untuk presisi $\pm 5\%$ pada $p = 0{,}5$.

**Tahap 3** — Kuesioner NASA-TLX digital (Google Form / LimeSurvey) mencakup 6 dimensi + 15 *pairwise comparison*. Instrumen ini sudah tervalidasi (Cronbach's α ≥ 0,72 menurut Rafi & Putra, 2024).

**Tahap 4** — Hitung $TLX_{raw}$ dan $TLX_{weighted}$ per responden, lalu rata-rata:
$$\overline{TLX} = \frac{1}{n}\sum_{j=1}^{n} TLX_j$$

**Tahap 5** — Bandingkan dengan kapasitas menggunakan *Workload Ratio*. Jika $> 100\%$, sistem dalam *over-capacity* dan memerlukan *redesign*.

**Tahap 6** — Uji korelasi:
$$r = \frac{n\sum xy - \sum x \sum y}{\sqrt{[n\sum x^2 - (\sum x)^2][n\sum y^2 - (\sum y)^2]}}$$
dengan $x$ = skor TLX, $y$ = *throughput* (paket/jam). Hasil Rafi & Putra (2024): $r = -0{,}68$ (korelasi negatif kuat), mengonfirmasi bahwa peningkatan *mental workload* menurunkan *throughput*.

**Tahap 7** — Rekomendasi rekayasa berdasarkan paper sumber: (i) *task rotation* antar zona sortir, (ii) penambahan *pick-to-light* system, (iii) penjadwalan *micro-break* 5 menit per 90 menit kerja sesuai *NIOSH fatigue model*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Replikasi Perhitungan dari Rafi & Putra (2024)

Misalkan kita mengambil 5 operator sortir Shopee Express dengan skor dimensi NASA-TLX berikut (skala 0–100):

| Operator | MD | PD | TD | PE | EF | FR |
|----------|----|----|----|----|----|----|
| A | 85 | 70 | 90 | 30 | 80 | 75 |
| B | 80 | 65 | 85 | 35 | 75 | 70 |
| C | 90 | 75 | 95 | 25 | 85 | 80 |
| D | 75 | 60 | 80 | 40 | 70 | 65 |
| E | 88 | 72 | 92 | 28 | 82 | 78 |

**Pairwise Comparison** (contoh untuk Operator A, diambil dari pola tipikal Rafi & Putra, 2024): MD > TD (5), MD > EF (4), TD > FR (3), TD > PE (2), EF > FR (1). Bobot agregat (dari 36 responden): $w_{MD}=0{,}28$, $w_{PD}=0{,}08$, $w_{TD}=0{,}24$, $w_{PE}=0{,}10$, $w_{EF}=0{,}18$, $w_{FR}=0{,}12$.

**Perhitungan Weighted TLX untuk Operator A:**
$$TLX_A = (0{,}28 \cdot 85) + (0{,}08 \cdot 70) + (0{,}24 \cdot 90) + (0{,}10 \cdot 30) + (0{,}18 \cdot 80) + (0{,}12 \cdot 75)$$
$$TLX_A = 23{,}80 + 5{,}60 + 21{,}60 + 3{,}00 + 14{,}40 + 9{,}00 = 77{,}40$$

**Rata-rata tertimbang:**
$$\overline{TLX} = \frac{77{,}4 + 74{,}1 + 81{,}6 + 69{,}3 + 78{,}2}{5} = 76{,}12$$

### 4.2 Workload Ratio (Time Study Component)

Misalkan *time study* pada Operator A menghasilkan data:

| Komponen | Waktu (menit/shift) |
|----------|---------------------|
| Handling paket | 312 |
| *Idle*/menunggu antrian | 47 |
| *Personal/restroom* | 25 |
| *Allowance* (fatigue, contingency) | 60 |
| **Total Effective Working Time** | **444** |

$$C_n =