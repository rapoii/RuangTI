# 1688 — Analisis Beban Kerja Mental (Mental Workload) pada Operator Logistik Last-Mile dan Warehouse Menggunakan Metode NASA-TLX

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan ekonomi digital Asia Tenggara yang diproyeksikan menembus USD 1 triliun pada 2030 (Google, Temasek & Bain, 2023) telah mendorong ekspansi masif sektor *e-commerce* dan menuntut kehadiran layanan logistik *last-mile* yang andal. Shopee sebagai salah satu *super-app* terbesar di kawasan ini mengandalkan model kemitraan (*Shopee Express Partner*/SPX) untuk mendistribusikan jutaan paket per hari. Di Indonesia sendiri, volume pengiriman paket melampaui 2,5 miliar dokumen sepanjang 2023, menjadikan pekerja kurir sebagai titik gesek (friction point) paling kritis dalam rantai pasok. Kondisi ini menempatkan pekerja di garis depan terhadap multi-tekanan kognitif: navigasi rute dinamis, antarmuka aplikasi *real-time*, interaksi pelanggan, target *delivery success rate*, serta tenggat waktu (*Service Level Agreement*/SLA) yang makin pendek.

Muhammad Rafi dan Boy Isma Putra (2024, DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)) menyoroti bahwa meskipun produktivitas *last-mile* sudah banyak dikaji dari perspektif *throughput*, studi tentang *mental workload* operator SPX masih terbatas. Sementara itu, Aditya.R dan Putra (DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) melengkapi gambaran dengan menunjukkan bahwa operator warehouse juga menanggung beban kognitif serupa yang kerap luput dari pengukuran *work sampling* konvensional. Keduanya sepakat bahwa *human factor*—bukan sekadar kapasitas fisik atau mesin—menjadi *bottleneck* produktivitas yang belum diinstrumentasikan secara kuantitatif.

Urgensi kajian ini bersifat tiga dimensi. Pertama, dimensi **keselamatan dan kesehatan kerja (K3)**: kelelahan kognitif terbukti meningkatkan risiko kecelakaan kerja 1,6–2,3 kali lipat (Salminen et al., 2017). Kedua, dimensi **operasional**: beban mental berlebih menurunkan *first-attempt delivery success rate* dan menaikkan *cost per failed delivery*. Ketiga, dimensi **regulasi**: implementasi PP No. 35/2021 tentang Perjanjian Kerja Waktu Tertentu (PKWT) dan Alih Daya mensyaratkan perusahaan menilai kelayakan beban kerja sebagai bagian dari *due diligence* ketenagakerjaan. Tanpa kerangka ukur yang terstandar, perusahaan akan kesulitan membuktikan kepatuhan maupun merancang intervensi ergonomi kognitif.

## 2. Landasan Teori & Formulasi Matematis

NASA-TLX (Task Load Index) yang dikembangkan oleh Hart dan Staveland (1988) merupakan instrumen subjektif multidimensi yang mengukur beban kerja melalui enam subskala:

1. **Mental Demand (MD)** — kebutuhan aktivitas berpikir.
2. **Physical Demand (PD)** — kebutuhan aktivitas fisik.
3. **Temporal Demand (TD)** — tekanan waktu.
4. **Performance (PE)** — persepsi keberhasilan完成任务.
5. **Effort (EF)** — usaha yang dikeluarkan.
6. **Frustration (FR)** — tingkat frustrasi/iritasi.

Prosedur NASA-TLX terdiri atas dua tahap.

**Tahap I — Penentuan Bobot (*Pairwise Comparison*):**
Responden memilih subskala yang "lebih memberatkan" dari 15 pasangan kombinasi $\binom{6}{2}=15$. Frekuensi kemenangan subskala ke-$i$ menjadi bobot $w_i$, dengan kendala:

$$\sum_{i=1}^{6} w_i = 15, \quad w_i \in \{0,1,2,\dots,5\}$$

**Tahap II — Penilaian (*Rating*) dan Skor Akhir:**

$$TLX_{raw} = \sum_{i=1}^{6} w_i \cdot r_i$$

Karena $\sum w_i = 15$, skor ternormalisasi menjadi:

$$\boxed{TLX_{score} = \frac{\sum_{i=1}^{6} w_i \cdot r_i}{15}}$$

dengan $r_i$ adalah rating tiap subskala pada skala 0–100 (kelipatan 5). Interval interpretasi mengikuti Rentz (2001):

| Skor TLX | Kategori |
|----------|----------|
| 0 – 20 | Rendah |
| 21 – 40 | Cukup Rendah |
| 41 – 60 | Sedang–Tinggi |
| 61 – 80 | Tinggi |
| 81 – 100 | Sangat Tinggi |

Untuk menguji signifikansi perbedaan antar-kelompok operator (misalnya kurir pagi vs. kurir malam), Rafi dan Putra (2024) menggunakan **Uji Mann-Whitney** sebagai alternatif non-parametrik:

$$U = n_1 n_2 + \frac{n_1(n_1+1)}{2} - R_1$$

dengan $n_1, n_2$ ukuran sampel dan $R_1$ jumlah *rank* kelompok 1.

Sementara Aditya.R dan Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) mengintegrasikan NASA-TLX dengan **Work Sampling** menggunakan formula proporsi aktivitas:

$$P_a = \frac{\sum_{k=1}^{K} x_{ak}}{K \cdot n}$$

dengan $x_{ak}$ jumlah observasi aktivitas $a$ pada hari $k$, $K$ total hari observasi, $n$ jumlah *time slot* per hari, sehingga beban mental dapat dikorelasikan dengan pola aktivitas fisik dominan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi NASA-TLX mengikuti *Standard Operating Procedure* (SOP) berbasis ISO 26800:2011 (*Ergonomics — General approach, principles and concepts*) yang diadopsi Rafi dan Putra (2024):

```
┌─────────────────────────────────────────────────────────────┐
│ Tahap 1: Studi Pendahuluan                                  │
│   • Wawancara operator (n ≥ 30 sesuai ISO 15536)            │
│   • Identifikasi 6 subskala relevan konteks kerja           │
├─────────────────────────────────────────────────────────────┤
│ Tahap 2: Uji Coba Instrumen (Pilot Test)                    │
│   • Cronbach's α ≥ 0,70 → instrumen reliabel                │
│   • Validitas konstruk via expert judgment (n=3 ergonomist)  │
├─────────────────────────────────────────────────────────────┤
│ Tahap 3: Pairwise Comparison                                │
│   • 15 kartu pasangan subskala                              │
│   • Total kemenangan per subskala → bobot w_i                │
├─────────────────────────────────────────────────────────────┤
│ Tahap 4: Rating (0–100, kelipatan 5)                        │
│   • Visual Analog Scale (VAS) garis 100 mm                  │
├─────────────────────────────────────────────────────────────┤
│ Tahap 5: Komputasi & Analisis Statistik                     │
│   • TLX_score per individu → rata-rata kelompok             │
│   • Uji Mann-Whitney / Kruskal-Wallis antar shift           │
├─────────────────────────────────────────────────────────────┤
│ Tahap 6: Rekomendasi Ergonomi Kognitif                      │
│   • Rotasi tugas, micro-break 5 menit tiap 90 menit        │
│   • Redesain UI aplikasi kurir (kurangi TD & MD)            │
└─────────────────────────────────────────────────────────────┘
```

Arsitektur teknologi pendukung integrasi Work Sampling–NASA-TLX (Aditya.R & Putra, 2024) menggunakan **RTSP-camera + RFID gate** untuk *time-stamping* aktivitas pekerja dan *digital NASA-TLX form* berbasis tablet dengan validasi *forced-response* agar data tidak hilang.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** PT Logistik Nusantara memiliki 6 operator SPX shift pagi. Berikut hasil *pairwise comparison* dan *rating* NASA-TLX berdasarkan kuisioner Rafi & Putra (2024):

| Operator | w_MD | w_PD | w_TD | w_PE | w_EF | w_FR |
|----------|------|------|------|------|------|------|
| A1 | 5 | 3 | 4 | 1 | 1 | 1 |
| A2 | 4 | 4 | 3 | 2 | 1 | 1 |
| A3 | 5 | 2 | 4 | 1 | 2 | 1 |
| A4 | 4 | 3 | 3 | 1 | 2 | 2 |
| A5 | 5 | 2 | 5 | 1 | 1 | 1 |
| A6 | 4 | 3 | 4 | 2 | 1 | 1 |
| **Σ Bobot** | **27** | **17** | **23** | **8** | **8** | **7** |
| **Rata-rata** | **4,50** | **2,83** | **3,83** | **1,33** | **1,33** | **1,17** |

Rating operator A1: $r_{MD}=75$, $r_{PD}=65$, $r_{TD}=80$, $r_{PE}=45$, $r_{EF}=60$, $r_{FR}=55$.

**Perhitungan Step-by-Step Operator A1:**

$$TLX_{raw} = (5 \cdot 75) + (3 \cdot 65) + (4 \cdot 80) + (1 \cdot 45) + (1 \cdot 60) + (1 \cdot 55)$$

$$TLX_{raw} = 375 + 195 + 320 + 45 + 60 + 55 = 1.050$$

$$TLX_{score} = \frac{1.050}{15} = 70{,}00$$

**Interpretasi A1:** Skor 70 → kategori **Tinggi** (61–80). Subskala TD paling dominan mengindikasikan tekanan *deadline* pengiriman menjadi sumber beban terbesar.

**Rata-rata Kelompok (6 operator):** Misal skor TLX individu: {70; 68; 72; 65; 74; 69}

$$\bar{TLX} = \frac{70+68+72+65+74+69}{6} = \frac{418}{6} = 69{,}67$$

**Uji Mann-Whitney Shift Pagi (n₁=6) vs Shift Malam (n₂=6):** Misal shift malam {82; 85; 78; 88; 80; 84} dengan rata-rata 82,83. Perbedaan ~13 poin mengisyaratkan shift malam memiliki beban **signifikan lebih tinggi** (p < 0,05 berdasarkan tabel Mann-Whitney).

**Rekomendasi Manajerial:**
1. Redistribusi paket: shift malam hanya memuat 75% *volume* shift pagi.
2. *Micro-break* terjadwal 5 menit setiap 90 menit berdasarkan praktik industri Jepang (Toyota Production System).
3. Redesain *dashboard* kurir: kurangi notifikasi *real-time* untuk menurunkan TD.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

**Keterbatasan Metodologis.** NASA-TLX bersifat subjektif sehingga rentan terhadap *response bias* (misalnya *social desirability bias* saat responden merasa jawaban mereka akan dievaluasi atasan). Rafi & Putra (2024) mengakui keterbatasan ini dan mengusulkan