# 2264 — Analisis Beban Kerja Mental Operator Logistik Last-Mile dan Warehouse dengan Metode NASA-TLX dan Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Industri logistik digital Indonesia mengalami transformasi masif sejak 2018, dengan platform *e-commerce* seperti Shopee, Tokopedia, dan Lazada mendorong pesatnya permintaan akan layanan *last-mile delivery*. Shopee Express, sebagai unit logistik resmi ekosistem Shopee (sea group), mengandalkan ribuan *partner* (mitra) kurir yang tersebar di seluruh Indonesia, mulai dari *sortation hub*, *drop point*, hingga armada *rider* lapangan. Dalam konteks operasional ini, *partner* karyawan Shopee Express menghadapi beban kerja multidimensional yang mencakup dimensi fisik (mengangkat paket, mengendarai kendaraan dalam durasi panjang) dan dimensi mental (mengelola ratusan *order* harian, menyelesaikan *sorting* di bawah tekanan *cut-off time*, menghadapi pelanggan dengan ekspektasi tinggi, serta navigasi rute padat kota).

Penelitian Rafi & Putra (2024, DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)) menyoroti urgensi analisis beban kerja mental karena gangguan pada kognisi operator—seperti *decision fatigue*, *time pressure*, dan frustrasi pelanggan—berkorelasi langsung terhadap *missort rate*, *delivery failure rate*, serta *customer satisfaction score* (CSAT). Studi ini mengadopsi metodologi NASA-TLX (*Task Load Index*), instrumen subjektif yang dikembangkan oleh Sandra Hart dan Lowell Staveland (1988) di NASA Ames Research Center, karena sifatnya yang ringkas, valid, dan telah diuji secara psikometrik pada lebih dari 500 studi lintas industri. Hasil penelitian Rafi & Putra menunjukkan bahwa sub-dimensi *Mental Demand* dan *Temporal Demand* mendominasi skor beban kerja mitra Shopee Express, mengindikasikan bahwa efisiensi rute dan penjadwalan *pick-up* merupakan *bottleneck* kognitif utama.

Studi komplementer yang dilakukan Aditya & Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) memperluas perspektif ke konteks gudang (*warehouse operator*), di mana metode *Work Sampling* digunakan bersamaan dengan NASA-TLX untuk mengkuantifikasi proporsi waktu kerja efektif versus idle/inaktiv. Konteks gudang relevan karena *warehouse operator* Shopee Express，负责 *receiving*, *putaway*, *picking*, *packing*, dan *shipping*—merupakan mata rantai pertama yang menentukan kelancaran distribusi *last-mile*. Kombinasi NASA-TLX (beban kerja subjektif) dengan *Work Sampling* (pembebanan objektif berdasarkan proporsi aktivitas) memberikan gambaran 360° tentang efisiensi dan kesejahteraan operator.

Secara ekonomis, biaya *last-mile* menyumbang 41–53% dari total biaya pengiriman (capgemini 2019), sehingga optimalisasi 1 unit *rider* berpotensi menurunkan *cost-per-parcel* secara signifikan. Secara teknis, standar operasional seperti SNI 7330:2009 tentang *ergonomi* dan ISO 10075 tentang *mental workload* menjadi acuan wajib yang harus dipenuhi oleh operator logistik berskala besar.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 NASA-TLX: Arsitektur Pengukuran Beban Kerja

NASA-TLX mengukur beban kerja melalui enam sub-dimensi yang masing-masing dievaluasi pada *Likert scale* 0–100 (dengan interval 5 poin):

1. **Mental Demand (MD)** — Aktivitas kognitif (berpikir, memutuskan, menghitung)
2. **Physical Demand (PD)** — Aktivitas fisik (mendorong, mengangkat, berjalan)
3. **Temporal Demand (TD)** — Tekanan waktu (*time pressure*)
4. **Performance (P)** — Persepsi sukses/tidaknya完成任务
5. **Effort (E)** — Tingkat usaha untuk mencapai performance
6. **Frustration (F)** — Tingkat frustrasi, irritasi, stress

Terdapat dua varian skor NASA-TLX:

**Rumus 1 — Raw TLX (RTLX):**

$$TLX_{raw} = \frac{1}{6} \sum_{i=1}^{6} R_i = \frac{MD + PD + TD + P + E + F}{6}$$

**Rumus 2 — Weighted TLX (metodologi original Hart & Staveland 1988):**

Sebelum mengisi rating, responden diminta melakukan 15 *pairwise comparison* antar dimensi untuk menentukan bobot ($w_i$) masing-masing sub-dimensi. Bobot ini merepresentasikan *contribution* relatif setiap dimensi terhadap beban kerja keseluruhan:

$$TLX_{weighted} = \sum_{i=1}^{6} w_i \cdot R_i, \quad \sum_{i=1}^{6} w_i = 1$$

Karena setiap *pairwise comparison* menghasilkan nilai biner (1 atau 0), bobot $w_i$ untuk setiap responden dihitung sebagai:

$$w_i = \frac{\text{jumlah "menang" dimensi } i}{15}$$

### 2.2 Work Sampling: Teori Sampling Acak

*Work Sampling* (metodologi Tippett 1935) mengukur proporsi waktu yang dihabiskan operator untuk suatu aktivitas melalui observasi acak instan (*instantaneous observation*). Asumsi fundamental: peluang operator diamati pada kategori aktivitas tertentu = proporsi waktu aktual yang dihabiskan untuk aktivitas tersebut.

**Rumus 3 — Penentuan Jumlah Sampel Minimum:**

Untuk proporsi populasi $p$ yang tidak diketahui (kondisi worst-case menggunakan $p=0{,}5$):

$$n_0 = \frac{Z^2 \cdot p(1-p)}{e^2} = \frac{Z^2 \cdot 0{,}25}{e^2}$$

dengan:
- $Z$ = nilai kritik distribusi normal standar (untuk $\alpha=0{,}05$, $Z=1{,}96$; untuk $\alpha=0{,}10$, $Z=1{,}645$)
- $e$ = *margin of error* yang diinginkan (presisi absolut)

Jika ukuran populasi $N$ diketahui dan $n_0/N > 0{,}05$, gunakan koreksi populasi hingga (*finite population correction*):

$$n = \frac{n_0}{1 + \frac{n_0 - 1}{N}}$$

**Rumus 4 — Confidence Interval Proporsi:**

$$CI_{95\%} = p \pm Z_{0{,}025} \cdot SE = p \pm 1{,}96\sqrt{\frac{p(1-p)}{n}}$$

**Rumus 5 — Total Error Absolut:**

$$E_{total} = e \cdot N_{observasi} = Z\sqrt{N_{observasi} \cdot p(1-p)}$$

### 2.3 Klasifikasi Beban Kerja

Berdasarkan penelitian Rafi & Putra (2024) dan standar industri, skor NASA-TLX diklasifikasikan sebagai berikut:

| Kategori | Skor TLX | Implikasi |
|----------|----------|-----------|
| Rendah | 0–20 | Beban kerja under-utilized |
| Sedang | 21–40 | Optimal |
| Tinggi | 41–60 | Risiko kelelahan kognitif |
| Sangat Tinggi | 61–80 | Burnout risk; perlu intervensi |
| Kritis | >80 | Stop operasi; redesign sistem |

### 2.4 Uji Validitas & Reliabilitas

Instrumen NASA-TLX dilaporkan memiliki Cronbach's $\alpha \geq 0{,}72$ untuk seluruh dimensi (Hart 2006). Uji validitas konvergen dengan *heart rate variability* dan *pupillometry* menghasilkan korelasi Pearson $r \geq 0{,}65$ pada konteks kontrol industri.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi metodologi pada operator Shopee Express mengikuti kerangka SOP sebagai berikut:

### 3.1 Diagram Alir (Flowchart) Pelaksanaan

```
┌──────────────────────────────────────────────────────────────┐
│ TAHAP 1: Identifikasi Ulang Kerja (Job Element Analysis)      │
│ - Wawancara mendalam dengan kurir & supervisor                │
│ - Pemetaan aktivitas berdasarkan Work Breakdown Structure     │
└──────────────────────────┬───────────────────────────────────┘
                           ↓
┌──────────────────────────────────────────────────────────────┐
│ TAHAP 2: Pengukuran Work Sampling                             │
│ - Penetuan n_0 dan n terkoreksi (Rumus 3)                    │
│ - Penyiapan jadwal observasi random (k = round(T/k))         │
│ - Pengamatan 1-2 minggu pada shift pagi/siang/malam           │
└──────────────────────────┬───────────────────────────────────┘
                           ↓
┌──────────────────────────────────────────────────────────────┐
│ TAHAP 3: Administrasi NASA-TLX                                │
│ - Sesi pelatihan rater (≥2 jam) untuk konsistensi            │
│ - Distribusi kuesioner digital (Google Form) ke responden     │
│ - Pengisian Pairwise Comparison (15 pasangan)                 │
│ - Pengisian rating 0-100 tiap dimensi                         │
└──────────────────────────┬───────────────────────────────────┘
                           ↓
┌──────────────────────────────────────────────────────────────┐
│ TAHAP 4: Analisis Data                                         │
│ - Perhitungan TLX_raw dan TLX_weighted (Rumus 1 & 2)         │
│ - Uji normalitas (Shapiro-Wilk) & homogenitas (Levene)        │
│ - Independent t-test atau Mann-Whitney U antar grup           │
│ - Korelasi Spearman antara proporsi aktivitas & skor TLX      │
└──────────────────────────┬───────────────────────────────────┘
                           ↓
┌──────────────────────────────────────────────────────────────┐
│ TAHAP 5: Rekomendasi & Intervensi                             │
│ - Redesign rute (algoritma VRP) jika Temporal Demand >70      │
│ - Penambahan manpower jika Proporsi Aktivitas Inti <50%      │
│ - Micro-break 5 menit tiap 90 menit jika Frustration >60     │
└──────────────────────────────────────────────────────────────┘
```

### 3.2 Arsitektur Teknologi Pendukung

Rafi & Putra (2024) merekomendasikan integrasi NASA-TLX dengan *real-time dashboard* berbasis *power BI* atau *looker studio* yang terhubung ke API *order management system* (OMS) Shopee. Operator mengisi kuesioner mikro (*single-item NASA-TLX*) setiap akhir shift, dan hasilnya di-*stream* ke basis data pusat untuk deteksi dini kelelahan (*early warning system*). Pendekatan ini selaras dengan arsitektur *Human Factors Engineering* ISO 9241-210.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Industri (Studi Rafi & Putra 2024)

Misalkan dilakukan pengukuran pada 40 mitra Shopee Express di kota metropolitan (populasi kurir aktif ~250), dengan target presisi $e = 0{,}10$ dan tingkat kepercayaan 95%.

**Langkah 1 — Perhitungan Jumlah Sampel NASA-TLX:**

Karena total