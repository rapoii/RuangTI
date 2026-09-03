# 2936 — Analisis Beban Kerja Mental Operator Logistik dan Pergudangan dengan Metode NASA-TLX: Studi Kasus Last-Mile Delivery dan Warehouse Operations

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesifik:** Pengukuran Beban Kerja Mental pada Operator Last-Mile Delivery (Shopee Express) dan Operator Gudang dengan Pendekatan NASA-TLX dan Work Sampling  
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal (Undergraduate Prosiding Series)*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)  
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal (Undergraduate Prosiding Series)*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Industri *e-commerce* di Asia Tenggara, termasuk Indonesia, mengalami pertumbuhan eksponensial pascapandemi COVID-19. Shopee sebagai salah satu platform *marketplace* terbesar di kawasan ini mengandalkan jaringan logistik *last-mile delivery* melalui kemitraan dengan *Shopee Express Partner* (sebelumnya dikenal dengan istilah *Sociolla Express/SE*). Dalam operasional harian, *courier* Shopee Express Partner menghadapi tekanan multidimensional: target pengiriman harian, variasi alamat penerima, tingkat kemacetan lalu lintas urban, serta tuntutan pelayanan pelanggan yang responsif. Kondisi ini menciptakan **beban kerja mental (mental workload)** yang signifikan, yang jika tidak dikelola dengan baik akan menurunkan kinerja, meningkatkan *human error*, serta memicu kelelahan kronis dan *turnover*.

Penelitian Rafi & Putra (2024, DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)) secara eksplisit mengangkat isu ini dengan judul *"Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method"*. Studi tersebut memposisikan NASA-TLX (*NASA Task Load Index*) — yang dikembangkan oleh Sandra G. Hart dan Lowell E. Staveland (1988) — sebagai instrumen subjektif terstandarisasi yang mengukur beban kerja melalui enam *subscale*: *Mental Demand, Physical Demand, Temporal Demand, Performance, Effort*, dan *Frustration*. Pada lingkungan *last-mile delivery*, pentingnya studi ini semakin nyata mengingat IMO (*International Maritime Organization*), FAA (*Federal Aviation Administration*), dan NASA sendiri telah mengadopsi NASA-TLX sebagai *benchmark* ergonomi kognitif lintas industri.

Sementara itu, paper kedua oleh Aditya.R & Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) dengan judul *"Workload Analysis Using Work Sampling and NASA-TLX for Warehouse Operators"* memperluas kerangka analisis dengan menggabungkan dua metode secara simultan: (1) **Work Sampling** untuk memetakan distribusi waktu aktivitas operator gudang (pengangkatan barang, *picking*, dokumentasi, istirahat, dsb.), dan (2) **NASA-TLX** untuk mengukur beban kerja subjektif pada tugas dominan. Integrasi ini penting karena worker warehouse di industri modern menghadapi otomatisasi parsial, *SKU proliferation*, dan target *order fulfillment rate* yang semakin ketat — semua faktor yang berpotensi meningkatkan *mental demand* tanpa disertai *physical demand* yang proporsional.

Kedua paper tersebut secara kumulatif menyumbangkan bukti empiris bahwa **pengukuran beban kerja mental bukan hanya isu ergonomi individual, melainkan variabel strategis rantai pasok** yang memengaruhi produktivitas, keselamatan kerja (K3), dan total biaya operasional. Urgensi ekonominya nyata: di Indonesia, biaya logistik menyumbang sekitar 23–24% dari PDB (Bappenas, 2023), jauh di atas negara ASEAN lain yang rata-rata 13–15%. Setiap persen peningkatan produktivitas operator logistik melalui manajemen beban kerja yang tepat berpotensi menurunkan *logistics cost-to-GDP ratio* secara signifikan. Oleh karena itu, modul ini disusun untuk memberikan kerangka analitis yang *replicable* bagi praktisi Teknik Industri yang akan mengimplementasikan program *human factors engineering* di fasilitas logistik dan gudang.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. NASA-Task Load Index (NASA-TLX)

NASA-TLX adalah instrumen multidimensi yang menangkap enam sumber beban kerja secara simultan. Keenam dimensi didefinisikan sebagai berikut (Hart & Staveland, 1988; Rafi & Putra, 2024):

1. **Mental Demand (MD)** — Jumlah aktivitas berpikir, memutuskan, menghitung, dan mengawasi yang diperlukan.
2. **Physical Demand (PD)** — Jumlah aktivitas fisik yang diperlukan (menarik, mengangkat, berjalan).
3. **Temporal Demand (TD)** — Tingkat tekanan waktu yang dirasakan.
4. **Performance (P)** — Tingkat keberhasilan pekerja dalam menyelesaikan tugas (skala *terbalik*: rendah berarti sukses).
5. **Effort (E)** — Tingkat usaha yang dikeluarkan untuk mencapai tingkat kinerja.
6. **Frustration (F)** — Tingkat ketidaknyamanan, stres, dan demotivasi yang dirasakan.

### 2.2. Prosedur Perhitungan *Raw NASA-TLX Score*

Setiap dimensi dinilai menggunakan *Likert scale* 0–100 (interval 5). Total *raw TLX* (tanpa pembobotan) dihitung sebagai:

$$
\text{Raw TLX} = \frac{MD + PD + TD + P + E + F}{6}
$$

dengan rentang teoritis $[0, 100]$. Nilai di bawah 20 dianggap beban kerja rendah, 20–40 sedang, 40–60 cukup tinggi, 60–80 tinggi, dan >80 sangat tinggi (Hart, 2006).

### 2.3. Prosedur Pembobotan (*Weighted TLX*)

Rafi & Putra (2024) serta Aditya.R & Putra (2024) menggunakan prosedur **paired comparison** untuk menentukan bobot relatif setiap dimensi. Terdapat $\binom{6}{2} = 15$ pasangan perbandingan; pada setiap pasangan, responden memilih dimensi yang *lebih dominan* berkontribusi pada beban kerja tugas. Bobot $w_i$ untuk dimensi ke-$i$ didefinisikan sebagai:

$$
w_i = \frac{k_i}{15}, \quad \sum_{i=1}^{6} w_i = 1
$$

dengan $k_i$ = jumlah pilihan dimensi $i$ sebagai lebih dominan.

*Weighted TLX* kemudian dihitung melalui:

$$
\text{TLX}_{\text{weighted}} = \sum_{i=1}^{6} w_i \cdot s_i = \sum_{i=1}^{6} \left(\frac{k_i}{15}\right) \cdot s_i
$$

dengan $s_i$ = skor (0–100) dimensi ke-$i$. Total rentang tetap $[0, 100]$, namun skor terbobot lebih sensitif terhadap dimensi yang memang dominan secara kognitif (Aditya.R & Putra, 2024).

### 2.4. Work Sampling & Confidence Level

Work sampling adalah teknik statistik untuk menentukan proporsi waktu yang dihabiskan pekerja pada berbagai kategori aktivitas melalui pengamatan *instantaneous* acak (snap-back). Jumlah pengamatan minimum yang diperlukan untuk tingkat keyakinan tertentu dihitung dengan rumus:

$$
N = \frac{Z^2 \cdot p \cdot (1-p)}{E^2}
$$

dengan:
- $Z$ = nilai standar normal untuk confidence level yang diinginkan (mis. $Z = 1{,}96$ untuk 95% CI),
- $p$ = proporsi aktivitas yang diestimasi (umumnya digunakan $p = 0{,}5$ untuk konservatif),
- $E$ = margin of error absolut (umumnya 0,05 atau 0,10).

Untuk $p = 0{,}5$, $Z = 1{,}96$, $E = 0{,}05$:

$$
N = \frac{(1{,}96)^2 \cdot 0{,}5 \cdot 0{,}5}{(0{,}05)^2} = \frac{3{,}8416 \cdot 0{,}25}{0{,}0025} = 384{,}16 \approx 385 \text{ pengamatan}
$$

Aditya.R & Putra (2024) menggunakan jumlah observasi melampaui ambang minimum ini untuk menjamin validitas statistik pengamatan work sampling operator gudang.

### 2.5. Uji Statistik Pendukung

Kedua paper umumnya melaporkan analisis dengan menggunakan *software* SPSS, mencakup:

- **Uji validitas konstruk** (Pearson Product-Moment) antar-item NASA-TLX.
- **Uji reliabilitas** (Cronbach's Alpha):

$$
\alpha = \frac{k}{k-1}\left(1 - \frac{\sum_{i=1}^{k} \sigma^2_{y_i}}{\sigma^2_y}\right)
$$

dengan $k$ = jumlah item, $\sigma^2_{y_i}$ = varians skor setiap item, $\sigma^2_y$ = varians total skor. Nilai $\alpha \geq 0{,}70$ dianggap reliabel (Nunnally, 1978).

- **Uji normalitas** (Shapiro-Wilk atau Kolmogorov-Smirnov) sebagai prasyarat uji parametrik.
- **Uji beda rata-rata** (Independent Samples *t*-test, One-Way ANOVA, atau Kruskal-Wallis non-parametrik) untuk membedakan beban kerja antar-shift atau antar-divisi.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. SOP Implementasi NASA-TLX di Fasilitas Logistik

Berdasarkan Rafi & Putra (2024, DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)), berikut adalah tahapan sistematis yang dapat direplikasi di fasilitas Shopee Express atau perusahaan *last-mile delivery* lainnya:

1. **Tahap Perencanaan**
   - Identifikasi岗位 (job position) yang akan dianalisis: *courier*, *picker*, *packer*, *admin gudang*.
   - Penetuan populasi dan sampel menggunakan rumus Slovin atau *purposive sampling* untuk sub-populasi dengan karakteristik homogen.
   - Penyusunan kuesioner NASA-TLX versi Bahasa Indonesia yang telah di-*translate-back-translate*.

2. **Tahap Pengumpulan Data**
   - Briefing responden tentang enam subskala NASA-TLX menggunakan *card sort* definitions.
   - Pengisian skor *Raw TLX* (skala 0–100) pasca-shift atau pada saat istirahat.
   - Pelaksanaan *paired comparison*: responden memilih dimensi yang lebih relevan dari 15 pasangan kartu.

3. **Tahap Pengolahan Data**
   - Input skor ke Microsoft Excel/SPSS.
   - Hitung Raw TLX dan Weighted TLX per individu.
   - Uji reliabilitas instrumen (Cronbach's Alpha).
   - Uji normalitas dan uji beda antar-kelompok.

4. **Tahap Analisis dan Rekomendasi**
   - Identifikasi dimensi dominan (berat bobot tertinggi).
   - Benchmarking dengan standar industri (skor >60 mengindikasikan *overload*).
   - Penyusunan rekomendasi ergonomi: rotasi kerja, *job enlargement*, penambahan SDM, redesign rute, dsb.

### 3.2. SOP Work Sampling + NASA-TLX untuk Warehouse

Aditya.R & Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) mengusulkan integrasi berikut:

```
┌───────────────────────────────────────┐
│  Mulai: Penentuan Unit Analisis       │
└──────────────────┬────────────────────┘
                   ▼
┌───────────────────────────────────────┐
│  Identifikasi Aktivitas Operator     │
│  (picking, packing, scanning, dll.)  │
└──────────────────┬────────────────────┘
                   ▼
┌───────────────────────────────────────┐
│  Hitung N min via rumus Work Sampling│
│  (Z²·p·(1-p)/E²) → minimal 385 obs. │
└──────────────────┬────────────────────┘
                   ▼
┌───────────────────────────────────────┐
│  Pengamatan Acak Instantaneous       │
│  (random walk, interval 30-60 detik) │
└──────────────────┬────────────────────┘
                   ▼
┌───────────────────────────────────────┐
│  Hitung Proporsi Aktivitas (%)       │
└──────────────────┬────────────────────┘
                   ▼
┌───────────────────────────────────────┐
│  Identifikasi Aktivitas Dominan     │
│  (proporsi >40% dari total waktu)    │
└──────────────────┬────────────────────┘
                   ▼
┌───────────────────────────────────────┐
│  Aplikasikan NASA-TLX pada Aktivitas │
│  Dominan Tersebut                    │
└──────────────────┬────────────────────┘
                   ▼
┌───────────────────────────────────────┐
│  Rekomendasi: Redesign Workflow,     │
│  Ergonomi, atau Penambahan Tools     │
└───────────────────────────────────────┘
```

### 3.3. Standar Industri Referensi

- **ISO 9241-210:2019** — *Ergonomics of human-system interaction*.
- **ISO 10075-1:2017** — *Ergonomic principles related to mental workload*.
- **SNI 7267:2009** — *Tata cara pengukuran beban kerja*.
- **Permenaker No. 13/MEN/2011** — *Batas waktu kerja dan istirahat*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Replikasi Kasus: 30 Operator Gudang E-Commerce

Misalkan sebuah operator gudang e-commerce di Jakarta dengan **30 operator** (populasi). Kita ambil sampel 25 operator menggunakan *purposive sampling*. Pengukuran dilakukan terhadap aktivitas dominan: *order picking* dengan target 200 SKU/jam.

#### Step 1: Pengumpulan Skor Mentah (Skala 0–100)

Tabel 1. Contoh skor NASA-TLX 10 operator pertama.

| Operator | MD | PD | TD | P | E | F |
|----------|----|----|----|---|---|---|
| OP01 | 75 | 55 | 80 | 30 | 70 | 50 |
| OP02 | 80 | 60 | 85 | 25 | 75 | 55 |
| OP03 | 70 | 50 | 75 | 35 | 65 | 45 |
| OP04 | 85 | 65 | 90 | 20 | 80 | 60 |
| OP05 | 65 | 45 | 70 | 40 | 60 | 40 |
| OP06 | 78 | 58 | 82 | 28 | 72 | 52 |
| OP07 |