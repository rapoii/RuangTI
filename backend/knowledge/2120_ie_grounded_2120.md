# 2120 — Analisis Beban Kerja Mental dan Fisik Operator Logistik E-Commerce Menggunakan Metode NASA-TLX dan Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Industri *e-commerce* di Asia Tenggara, dan khususnya di Indonesia, telah mengalami pertumbuhan eksponensial sejak dekade terakhir. Shopee sebagai salah satu *platform* marketplace terbesar di kawasan ini mengandalkan ekosistem logistik last-mile melalui Shopee Express untuk menjamin *Service Level Agreement* (SLA) pengiriman 24–72 jam kepada konsumen akhir. Dalam kerangka operasional ini, pekerja *partner*—mencakup kurir lapangan, *picker*, *packer*, dan *sorter* di gudang—menjadi titik kritis yang menentukan kualitas layanan. Rafi & Putra (2024) dalam studinya yang dipublikasikan dengan DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385) menekankan bahwa tekanan mental dan fisik pekerja *partner* Shopee Express sangat fluktuatif mengikuti pola *peaky demand*, terutama pada periode *flash sale*, *harbolnas* (Hari Belanja Nasional), dan *payday* yang meningkatkan volume paket harian hingga 200–300% dari baseline.

Urgensi penelitian beban kerja mental tersebut semakin meningkat seiring dengan dua fenomena simultan. Pertama, tuntutan SLA yang makin ketat dari *platform* memaksa operator untuk mengejar target *on-time delivery rate* minimal 95%. Kedua, meningkatnya ekspektasi konsumen terhadap *real-time tracking*, minimasi *complaint*, dan akurasi pengiriman. Menurut Aditya.R & Putra (2024) (DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)), kombinasi beban kognitif (mental) dan fisik pada operator gudang jika tidak dikelola secara kuantitatif akan memicu kelelahan (*fatigue*), peningkatan *human error* (mis-sort, miss-pick), turnover karyawan tinggi, serta risiko kecelakaan kerja. Kedua paper ini menjadi rujukan utama karena mereka menerapkan kerangka pengukuran yang sama—NASA Task Load Index (NASA-TLX)—namun pada domain berbeda (mental vs mental-fisik), sehingga menghasilkan *cross-validation* yang kuat untuk aplikasi lintas rantai pasok.

Konteks industrial kontemporer menuntut pendekatan Ergonomi Makro dan *Human Factors Engineering* yang tidak lagi berbasis intuisi, melainkan pada data kuantitatif berbasis persepsi subjektif yang telah divalidasi secara psikometrik. NASA-TLX, yang dikembangkan oleh Sandra Hart dan Lowell Staveland pada tahun 1988 di NASA Ames Research Center, telah menjadi instrumen baku untuk mengukur *mental workload* operator di berbagai industri: penerbangan, kontrol lalu lintas udara, kesehatan, hingga logistik. Penerapan metode ini pada pekerja Shopee Express yang beroperasi di lingkungan *gig economy* dengan dinamika kerja tinggi menjadi kebaruan yang signifikan. Lebih lanjut, integrasi dengan *Work Sampling* (yang dikemukakan oleh Aditya.R & Putra, 2024) memungkinkan triangulasi antara beban mental subjektif dengan proporsi waktu aktual yang dihabiskan untuk aktivitas produktif, delay, dan idle—sehingga keputusan manajerial tidak hanya berdasarkan persepsi, tetapi juga distribusi utilisasi aktual.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 NASA Task Load Index (NASA-TLX)

NASA-TLX adalah instrumen multidimensional yang mengukur beban kerja berdasarkan enam subskala:

1. **Mental Demand (MD)** — tuntutan aktivitas kognitif (memikirkan, memutuskan, menghitung).
2. **Physical Demand (PD)** — tuntutan aktivitas fisik (menarik, mengangkat, mendorong).
3. **Temporal Demand (TD)** — tekanan waktu terhadap完成任务.
4. **Performance (PE)** — persepsi pencapaian tujuan tugas (skala rendah = tinggi).
5. **Effort (EF)** — usaha kuantitatif yang dikeluarkan untuk完成任务.
6. **Frustration (FR)** — tingkat irritasi, stress, dan ketidaknyamanan.

### 2.2 Prosedur Pembobotan (Card-Sorting & Pairwise Comparison)

Rafi & Putra (2024) mengimplementasikan prosedur pembobotan NASA-TLX standar. Dari 15 perbandingan pasangan (*pairwise comparison*), setiap responden memilih anggota pasangan yang dianggap lebih berkontribusi terhadap *workload*. Bobot tiap dimensi dihitung sebagai:

$$w_i = \frac{\text{jumlah kemenangan dimensi } i}{15}, \quad \sum_{i=1}^{6} w_i = 1$$

Skor akhir NASA-TLX (*Raw TLX* atau *Weighted TLX*) dihitung dengan rumus:

$$\text{TLX}_{\text{Weighted}} = \sum_{i=1}^{6} w_i \times r_i$$

di mana $r_i \in [0, 100]$ adalah rating masing-masing dimensi pada *Visual Analog Scale* (VAS). Skor total berkisar 0–100, dengan kategori interpretasi:

$$\text{TLX} < 30 \Rightarrow \text{Rendah}, \quad 30 \leq \text{TLX} < 50 \Rightarrow \text{Sedang}, \quad 50 \leq \text{TLX} < 70 \Rightarrow \text{Tinggi}, \quad \text{TLX} \geq 70 \Rightarrow \text{Sangat Tinggi}$$

### 2.3 Work Sampling — Penentuan Jumlah Pengamatan

Aditya.R & Putra (2024) mengaplikasikan *Work Sampling* untuk menentukan proporsi waktu kerja. Jumlah observasi minimum yang diperlukan untuk tingkat kepercayaan tertentu ditentukan oleh rumus:

$$N = \frac{Z^2 \cdot p \cdot (1-p)}{e^2}$$

di mana:
- $Z$ = nilai Z pada tingkat kepercayaan $(1-\alpha)$
- $p$ = proporsi aktivitas yang diestimasi (default $p = 0{,}5$ untuk konservatif)
- $e$ = margin of error yang dapat diterima

Interval antar observasi acak untuk jadwal jam kerja $T$ jam dengan total observasi $n$ kali adalah:

$$\Delta t = \frac{T \cdot 3600}{n} \text{ detik (random)}$$

Proporsi waktu suatu aktivitas $k$ dihitung sebagai:

$$P_k = \frac{n_k}{n}, \quad \text{dengan confidence interval } P_k \pm Z \sqrt{\frac{P_k(1-P_k)}{n}}$$

### 2.4 Korelasi Beban Mental dan Produktivitas

Untuk analisis gabungan (Aditya.R & Putra, 2024), hubungan antara beban mental dan utilisasi waktu produktif dapat dimodelkan dengan *Inverted-U Hypothesis* (Yerkes-Dodson Law):

$$P_{\text{produktif}} = \beta_0 + \beta_1 \cdot \text{TLX} - \beta_2 \cdot \text{TLX}^2 + \varepsilon$$

dengan $\beta_1, \beta_2 > 0$, optimum tercapai pada $\text{TLX}^* = \frac{\beta_1}{2\beta_2}$, yang menunjukkan titik keseimbangan beban kerja.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Tahapan Implementasi NASA-TLX di Shopee Express

Mengikuti protokol Rafi & Putra (2024), prosedur implementasi mengikuti alur berikut:

**Tahap 1 — Penentuan Populasi dan Sampel.** Populasi adalah seluruh *partner* Shopee Express di hub operasional tertentu. Sampel dipilih secara *stratified random sampling* berdasarkan shift (pagi/siang/malam) dan zona rute. Ukuran sampel minimum mengikuti rumus Slovin:

$$n_{\min} = \frac{N}{1 + N \cdot e^2}$$

dengan $N$ = jumlah populasi, $e$ = tingkat kesalahan (umumnya 5% atau 10%).

**Tahap 2 — Instrumen dan Validasi.** Kuesioner NASA-TLX versi standar (Bahasa Indonesia yang sudah di-*back-translate*) digunakan. Uji validitas dilakukan dengan *Pearson Product-Moment*:

$$r_{xy} = \frac{n \sum xy - \sum x \sum y}{\sqrt{[n\sum x^2 - (\sum x)^2][n\sum y^2 - (\sum y)^2]}}$$

dengan kriteria $r_{xy} > 0{,}361$ untuk $n=30$ pada $\alpha = 0{,}05$. Uji reliabilitas menggunakan *Cronbach's Alpha*:

$$\alpha = \frac{k}{k-1}\left(1 - \frac{\sum_{i=1}^{k} s_i^2}{s_t^2}\right)$$

dengan $k$ = jumlah item, $s_i^2$ = varians item, $s_t^2$ = varians total. Standar diterima $\alpha \geq 0{,}70$.

**Tahap 3 — Pengumpulan Data.** Setiap responden memberikan (a) rating 0–100 pada enam dimensi, dan (b) melakukan *card sorting* 15 pasangan perbandingan untuk menentukan bobot.

**Tahap 4 — Perhitungan Skor dan Analisis.** Skor *Weighted TLX* dihitung per individu, lalu diagregatkan dengan rata-rata dan standar deviasi. Analisis beda dilakukan dengan uji $t$ atau ANOVA jika diperlukan.

### 3.2 Integrasi Work Sampling (SOP Aditya.R & Putra, 2024)

**Tahap A — Pilot Study (50–100 observasi)** untuk mengidentifikasi kategori aktivitas: *productive* (sorting, scanning, loading), *supportive* (istirahat, konsultasi), dan *unproductive* (idle, menunggu sistem).

**Tahap B — Penjadwalan Random Observation.** Menggunakan *random number generator* untuk menentukan menit observasi selama jam kerja (misal 08.00–17.00).

**Tahap C — Pelaksanaan Observasi** oleh pengamat terlatih (1 pengamat per 3–5 operator) dengan Formulir Klasifikasi Aktivitas.

**Tahap D — Rekapitulasi dan Confidence Interval** dengan rumus pada Bagian 2.3.

### 3.3 Diagram Alir Proses Pengukuran

```
┌─────────────────┐     ┌─────────────────┐     ┌──────────────────┐
│ Identifikasi    │────▶│ Validasi        │────▶│ Pengisian        │
│ Masalah & SOP   │     │ Instrumen       │     │ Kuesioner TLX    │
└─────────────────┘     └─────────────────┘     └──────────────────┘
                                                          │
┌─────────────────┐     ┌─────────────────┐              ▼
│ Rekomendasi &   │◀────│ Analisis &      │     ┌──────────────────┐
│ SOP Baru        │     │ Benchmarking    │◀────│ Perhitungan      │
└─────────────────┘     └─────────────────┘     │ Weighted TLX     │
                                                └──────────────────┘
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Data Hipotetis Operator Gudang Shopee Express

Misalkan kita memiliki data 5 operator *picker-pack* pada gudang Shopee Express di Jakarta. Rating tiap dimensi (skala 0–100) dan bobot hasil *card sorting* disajikan pada Tabel 1.

**Tabel 1. Rating dan Bobot NASA-TLX**

| Operator | MD | PD | TD | PE | EF | FR |
|----------|----|----|----|----|----|----|
| A1       | 75 | 60 | 85 | 30 | 80 | 65 |
| A2       | 60 | 70 | 70 | 40 | 65 | 55 |
| A3       | 80 | 55 | 75 | 25 | 75 | 70 |
| A4       | 65 | 65 | 80 | 35 | 70 | 60 |
| A5       | 70 | 60 | 90 | 30 | 85 | 75 |

Bobot rata-rata dari card sorting (misal hasil pengumpulan dari 20 responden): $w_{MD}=0{,}25$, $w_{PD}=0{,}10$, $w_{TD}=0{,}30$, $w_{PE}=0{,}15$, $w_{EF}=0{,}15$, $w_{FR}=0{,}05$. Total = 1,00 ✓.

### 4.2 Perhitungan Weighted TLX Operator A1

$$\text{TLX}_{A1} = (0{,}25 \times 75) + (0{,}10 \times 60) + (0{,}30 \times 85) + (0{,}15 \times 30) + (0{,}15 \times 80) + (0{,}05 \times 65)$$

$$= 18{,}75 + 6{,}00 + 25{,}50 + 4{,}50 + 12{,}00 + 3{,}25 = \mathbf{70{,}00}$$

### 4.3 Perhitungan Seluruh Operator

- **A1** = $18{,}75 + 6{,}00 + 25{,}50 + 4{,}50 + 12{,}00 + 3{,}25 = \mathbf{70{,}00}$
- **A2** = $15{,}00 + 7{,}00 + 21{,}00 + 6{,}00 + 9{,}75 + 2{,}75