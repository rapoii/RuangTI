# 1704 — Analisis Beban Kerja Mental Mitra Kerja Shopee Express Menggunakan Metode NASA-TLX

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Pertumbuhan ekonomi digital Asia Tenggara yang diproyeksikan menembus *Gross Merchandise Value* (GMV) lebih dari USD 200 miliar pada 2025 menempatkan sektor *e-commerce logistics* sebagai tulang punggung rantai pasok modern. Di Indonesia, Shopee Express (SPX) beroperasi sebagai jaringan logistik milik *platform* Shopee yang menangani jutaan paket harian melalui skema kemitraan (*partner*) dengan pekerja kurir independen. Skema ini memberikan fleksibilitas penyerapan tenaga kerja di puncak musim seperti Harbolnas, namun sekaligus menciptakan tantangan ergonomi kognitif yang signifikan karena rendahnya standardisasi prosedur operasional dan lemahnya kontrol manajemen terhadap variabel psikososial pekerja.

Rafi & Putra (2024) dalam artikel mereka yang dipublikasikan dengan DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385) mengidentifikasi bahwa mitra kerja Shopee Express menghadapi kombinasi unik antara tuntutan fisik (mengangkat paket 5–25 kg, berjalan puluhan kilometer per hari), tuntutan temporal (target *same-day delivery*, *SLA* 24 jam), dan tuntutan kognitif (routing dinamis, verifikasi kode OTP pelanggan, penyelesaian konflik alamat). Studi tersebut secara eksplisit menerapkan *NASA Task Load Index* (NASA-TLX) — instrumen subjektifmultidimensi yang awalnya dikembangkan oleh Hart dan Staveland (1988) untuk menilai beban kerja pilot pesawat terbang — ke konteks *last-mile delivery* di Indonesia.

Temuan kritis Rafi & Putra (2024) menunjukkan bahwa skor *Weighted Workload* (WWL) mitra Shopee Express rata-rata berada pada kisaran **68–82 dari skala 100**, mengindikasikan beban kerja mental kategori tinggi hingga sangat tinggi. Lebih jauh, dimensi *Temporal Demand* dan *Effort* memiliki bobot dominan (rata-rata 4–5 dari 5) yang mengonfirmasi adanya *time pressure* berlebihan. Studi komplementer Aditya.R & Putra (2024) dengan DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) memperkuat temuan ini dengan mengintegrasikan *work sampling* terhadap operator gudang, membuktikan bahwa beban kerja kumulatif pekerja logistik bukan semata-mata masalah kuantitas tugas, melainkan resultante dari interaksi kompleks antara *task demand*, *task structure*, dan *human capability*.

Urgensi rekayasa dari permasalahan ini bersifat ekonomi dan sosial. Dari sisi ekonomi, *burnout* pekerja kurir meningkatkan *attrition rate* yang ditaksir mencapai 30–40% per tahun di industri *gig economy*, sehingga menimbulkan biaya rekrutmen dan pelatihan berulang. Dari sisi sosial, kelelahan kognitif merupakan *root cause* dominan kecelakaan kerja (terutama kecelakaan lalu lintas) yang dialami mitra kurir. Oleh karena itu, analisis beban kerja mental bukan sekadar kajian akademis, melainkan kebutuhan strategis bagi keberlanjutan operasional industri logistik.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kerangka Konseptual NASA-TLX

NASA-TLX mengukur beban kerja mental melalui enam subskala multidimensional yang merepresentasikan pengalaman subjektif operator:

| No. | Subskala | Simbol | Deskripsi Operasional |
|-----|----------|--------|----------------------|
| 1 | *Mental Demand* | $M$ | Aktivitas berpikir, memutuskan, menghitung, mengamati |
| 2 | *Physical Demand* | $P$ | Aktivitas fisik, mengangkat, mendorong, berjalan |
| 3 | *Temporal Demand* | $T$ | Tekanan waktu, kecepatan tugas yang dibutuhkan |
| 4 | *Performance* | $Perf$ | Persepsi keberhasilan pencapaian tujuan kerja |
| 5 | *Effort* | $E$ | Tingkat usaha mental/fisik yang dikeluarkan |
| 6 | *Frustration* | $F$ | Tingkat ketidaknyamanan, stres, depresi |

Setiap subskala dinilai dengan *raw score* pada skala *Likert* kontinu $R_i \in [0, 100]$ yang dibagi ke dalam 21 *tick mark* dengan interval 5 poin.

### 2.2 Prosedur Pembobotan (Pairwise Comparison)

Instrumen NASA-TLX menggunakan prosedur pembobotan *Card Sorting* melalui 15 pasangan perbandingan (mengikuti kombinasi $\binom{6}{2} = 15$). Setiap pasangan menyajikan dua subskala, dan partisipan memilih yang lebih berkontribusi terhadap *workload* total dalam tugas spesifik. Hasilnya adalah vektor bobot:

$$W = \{w_M, w_P, w_T, w_{Perf}, w_E, w_F\}$$

dengan konstrain:

$$\sum_{i=1}^{6} w_i = 15, \quad w_i \in \{0, 1, 2, 3, 4, 5\}$$

### 2.3 Formula Skor Beban Kerja Tertimbang (Weighted Workload)

Setelah *raw score* dan bobot tersedia, skor *Weighted Workload* (WWL) dihitung melalui persamaan:

$$\boxed{WWL = \frac{1}{15} \sum_{i=1}^{6} R_i \cdot w_i}$$

dengan interpretasi kuantitatif menurut Hart & Staveland (1988):

| Rentang WWL | Kategori Beban Kerja |
|-------------|---------------------|
| $WWL < 20$ | Sangat Rendah |
| $20 \leq WWL < 40$ | Rendah |
| $40 \leq WWL < 60$ | Sedang |
| $60 \leq WWL < 80$ | Tinggi |
| $WWL \geq 80$ | Sangat Tinggi |

### 2.4 Statistik Deskriptif dan Uji Beda

Rafi & Putra (2024) melaporkan analisis menggunakan *mean*, *standard deviation*, serta klasifikasi kuartil. Untuk menguji signifikansi perbedaan beban kerja antar-shift atau antar-zona, formulasi yang lazim diaplikasikan adalah *Independent Samples t-Test*:

$$t = \frac{\bar{X}_1 - \bar{X}_2}{s_p \sqrt{\frac{1}{n_1} + \frac{1}{n_2}}}$$

dengan varians gabungan:

$$s_p^2 = \frac{(n_1-1)s_1^2 + (n_2-1)s_2^2}{n_1 + n_2 - 2}$$

### 2.5 Model Integrasi Work Sampling dan NASA-TLX

Aditya.R & Putra (2024) dengan DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) mengusulkan integrasi NASA-TLX dengan *work sampling* untuk menghitung *Allowable Proportion of Time*:

$$P_{allow} = 1 - P_{delay} - P_{personal} - P_{fatigue}$$

yang kemudian dikalikan dengan *effective working time* untuk memperoleh *standard time* elemen kerja, sehingga menghasilkan kerangka analisis beban kerja yang lebih holistik.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi NASA-TLX di lingkungan operasional *logistics* mengikuti SOP lima tahapan yang distandarkan berdasarkan referensi Rafi & Putra (2024) dan Aditya.R & Putra (2024):

**Tahap 1 — Penyiapan Instrumen dan Protokol Etika**
Menyusun kuesioner NASA-TLX dalam Bahasa Indonesia, memvalidasi pemahaman terminologi melalui *pilot study* pada 5–10 responden, serta memperoleh persetujuan partisipan (*informed consent*). Standar yang relevan: ISO 10075-1:2017 (*Ergonomic principles related to mental workload*) dan ISO 9241-210:2019 (*Human-centred design*).

**Tahap 2 — Penentuan Sampel dan Stratifikasi**
Menentukan ukuran sampel menggunakan *slovin's formula*:

$$n = \frac{N}{1 + N \cdot e^2}$$

dengan $N$ = populasi mitra Shopee Express pada hub tertentu, $e$ = *margin of error* (umumnya 5–10%). Rafi & Putra (2024) menyampling 30–50 mitra dengan stratifikasi berdasarkan shift (pagi/siang/malam) dan zona operasi (urban/suburban).

**Tahap 3 — Pengumpulan Data Primer**
Responden diminta memberikan *raw score* keenam subskala secara independen, kemudian melakukan 15 perbandingan berpasangan. Instrumen dapat diimplementasikan melalui aplikasi *mobile* (Google Form, KoboToolbox) untuk mempercepat agregasi data. Total waktu pengisian ±15 menit per responden.

**Tahap 4 — Pengolahan dan Klasifikasi**
Mengalikan setiap *raw score* dengan bobotnya, menjumlahkan, lalu membagi dengan 15. Mengklasifikasikan hasil ke dalam lima kategori. Membuat *boxplot* dan *bar chart* untuk visualisasi kontribusi relatif setiap subskala.

**Tahap 5 — Rekomendasi Rekayasa dan Tindak Lanjut**
Berdasarkan hasil klasifikasi, tim rekayasa menyusun rekomendasi yang dapat berupa: redistribusi rute, redesign *last-mile sorting system*, penambahan *micro-break* terjadwal, *training* untuk *mental resilience*, atau *job rotation* antar-zona. SOP diakhiri dengan *management review* periodik setiap 3–6 bulan untuk memantau *tren* perubahan.

**Diagram Alir Proses:**

```
[Identifikasi Masalah] → [Studi Pendahuluan] → [Desain Kuesioner NASA-TLX]
        ↓
[Validasi & Pilot Study] → [Sampling & Stratifikasi] → [Pengumpulan Data]
        ↓
[Perhitungan Bobot] → [Perhitungan WWL] → [Klasifikasi & Analisis]
        ↓
[Rekomendasi Ergonomi] → [Implementasi] → [Evaluasi & Review Periodik]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Konteks Kasus:** Sebuah *sortation hub* Shopee Express di wilayah urban Jabodetabek memiliki 45 mitra kurir aktif. Tim rekayasa ingin mengevaluasi beban kerja mental mitra pada shift siang (12.00–18.00) yang diketahui memiliki volume paket puncak.

### Langkah 1: Pengumpulan Raw Score

Hasil wawancara dan kuesioner terhadap 8 mitra pada shift siang menghasilkan *raw score* rata-rata sebagai berikut:

| Subskala | Simbol | *Raw Score* Rata-rata $R_i$ |
|----------|--------|------------------------------|
| Mental Demand | $M$ | 75 |
| Physical Demand | $P$ | 80 |
| Temporal Demand | $T$ | 85 |
| Performance | $Perf$ | 60 |
| Effort | $E$ | 80 |
| Frustration | $F$ | 70 |

### Langkah 2: Prosedur Pairwise Comparison (15 Pasangan)

Hasil agregasi 8 responden terhadap 15 pasangan perbandingan menunjukkan subskala berikut paling sering dipilih sebagai kontributor dominan:

| Pasangan | Pilihan Dominan | Frekuensi |
|----------|-----------------|-----------|
| $T$ vs $M$ | $T$ | 7/8 |
| $T$ vs $P$ | $T$ | 6/8 |
| $T$ vs $E$ | $T$ | 5/8 |
| $P$ vs $E$ | $P$ | 5/8 |
| $E$ vs $M$ | $E$ | 5/8 |
| ... | ... | ... |
| $Perf$ vs $F$ | $F$ | 6/8 |

Setelah tabulasi lengkap, diperoleh vektor bobot:

$$W = (w_M, w_P, w_T, w_{Perf}, w_E, w_F) = (3, 4, 5, 2, 4, 3)$$

**Verifikasi konstrain:** $3 + 4 +