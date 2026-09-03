# 2104 — Analisis Beban Kerja Mental Operator Logistik dan Pergudangan Menggunakan Metode NASA-TLX dan Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Pengukuran Beban Kerja Mental Kognitif pada Operator Logistik *Last-Mile* dan Pergudangan Menggunakan Instrumen NASA-TLX serta Teknik Pengamatan *Work Sampling*
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Analisis Beban Kerja Mental Karyawan Shopee Express Partner dengan Metode NASA-TLX*. Peer-Reviewed Journal. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Analisis Beban Kerja Menggunakan Work Sampling dan NASA-TLX pada Operator Pergudangan*. Peer-Reviewed Journal. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Ekonomi digital Indonesia mengalami transformasi struktural yang ditandai dengan eksponensialisasi volume transaksi *e-commerce*. Data internal yang dianalisis Rafi & Putra (2024, DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)) menunjukkan bahwa Shopee Express sebagai salah satu pilar agregat logistik *last-mile* menghadapi tantangan *delivery density* yang melonjak hingga rata-rata 120–180 paket per kurir per hari pada *hub* dengan permintaan puncak. Dalam konteks operasional ini, beban kerja bukan lagi semata-mata variabel fisik melainkan telah bergeser menjadi beban kognitif-mental yang kompleks: navigasi rute, verifikasi *barcode*, komunikasi dengan pelanggan melalui aplikasi, hingga antisipasi klaim *lost package* dan tekanan *SLA* 24 jam.

Permasalahan fundamental yang diangkat oleh Rafi & Putra (2024) adalah lemahnya visibilitas manajemen terhadap *cognitive load* pekerja lapangan, padahal literatur human factors (misalnya Hart & Staveland, 1988) telah lama mengonfirmasi bahwa beban mental berkorelasi langsung dengan *error rate*, kelelahan, dan *turnover intention*. Sementara itu, Aditya.R & Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) melengkapi celah tersebut dengan mengintegrasikan teknik **Work Sampling** sebagai metode pengukuran beban kerja berbasis proporsi waktu, sehingga memberikan gambaran komprehensif: bukan hanya seberapa berat persepsi mental pekerja, tetapi juga seberapa efektif alokasi waktu kerja mereka.

Urgensi ekonomis dari riset ini terletak pada korelasi antara beban kerja berlebih dengan tiga *Key Performance Indicator* (KPI) kritis: (1) produktivitas pengiriman, (2) tingkat *mis-sort*, dan (3) biaya operasional per paket. Studi menunjukkan bahwa setiap peningkatan 10 poin pada skor NASA-TLX di atas ambang batas 70 akan diikuti oleh kenaikan 4,3% *return rate* dan penurunan 6,1% *on-time delivery*. Oleh karena itu, kemampuan mengkuantifikasi beban mental melalui instrumen terstandardisasi seperti NASA-TLX bukan sekadar kebutuhan akademis, melainkan prasyarat *decision support system* dalam rekayasa tenaga kerja industri logistik modern.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Instrumen NASA-TLX (Task Load Index)

NASA-TLX adalah instrumen multidimensional yang dikembangkan oleh Sandra Hart di NASA Ames Research Center pada 1988. Instrumen ini mengukur beban kerja melalui enam subskala:

| Simbol | Dimensi | Deskripsi Operasional |
|:---:|:---|:---|
| $M$ | *Mental Demand* | Upaya kognitif, kalkulasi, penalaran |
| $P$ | *Physical Demand* | Upaya motorik dan aktivitas fisik |
| $T$ | *Temporal Demand* | Tekanan waktu, kecepatan respons |
| $Perf$ | *Performance* | Persepsi pencapaian target kerja |
| $E$ | *Effort* | Tingkat usaha untuk mencapai target |
| $F$ | *Frustration* | Tingkat frustrasi, iritasi, stres |

### 2.2. Formulasi Raw TLX (Unweighted)

Bentuk paling sederhana dari skor NASA-TLX adalah penjumlahan langsung keenam subskala yang telah dinormalisasi pada rentang 0–100:

$$\text{Raw TLX} = M + P + T + Perf + E + F$$

Skor total memiliki rentang teoritis $[0, 600]$ dan semakin tinggi nilai menunjukkan semakin berat beban kerja yang dipersepsikan.

### 2.3. Formulasi Weighted TLX

Versi *weighted* melakukan *pairwise comparison* terhadap keenam dimensi, menghasilkan bobot $w_i \in \{0, 1, 2, 3, 4, 5\}$ dengan total $\sum_{i=1}^{6} w_i = 15$ (karena terdapat $\binom{6}{2}=15$ pasangan). Skor berbobot dihitung melalui:

$$\text{Weighted TLX} = \frac{1}{15}\sum_{i=1}^{6} w_i \cdot r_i$$

di mana $r_i$ adalah rating subskala ke-$i$ pada rentang 0–100. Hasil *Weighted TLX* berada pada rentang $[0, 100]$, memudahkan interpretasi dan benchmarking.

### 2.4. Work Sampling — Penentuan Ukuran Sampel

Untuk mengukur proporsi waktu yang dihabiskan pekerja pada aktivitas tertentu, Aditya.R & Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) menggunakan rumus penentuan jumlah observasi minimum:

$$n = \frac{Z_{\alpha/2}^{2} \cdot p(1-p)}{E^{2}}$$

dengan:
- $Z_{\alpha/2}$ = nilai distribusi normal standar pada tingkat kepercayaan $(1-\alpha)$
- $p$ = proporsi aktivitas yang diestimasi (umumnya diambil $p = 0{,}5$ untuk konservatif)
- $E$ = margin of error yang dapat diterima

Untuk populasi terbatas $N$, koreksi *finite population* diterapkan:

$$n_{adj} = \frac{n \cdot N}{N + n - 1}$$

### 2.5. Confidence Interval Proporsi Aktivitas

Setelah pengumpulan data, proporsi aktivitas $p_i$ dan *confidence interval*-nya:

$$CI_{1-\alpha} = p_i \pm Z_{\alpha/2}\sqrt{\frac{p_i(1-p_i)}{n}}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi metodologi NASA-TLX dan Work Sampling di lingkungan industri logistik mengikuti *Standard Operating Procedure* (SOP) berikut, sebagaimana dijalankan oleh Rafi & Putra (2024) dan Aditya.R & Putra (2024):

**Tahap 1 — Preparasi & Penentuan Strata**
1. Identifikasi populasi pekerja (kurir Shopee Express / operator gudang).
2. Stratifikasi berdasarkan *shift*, zona operasional, dan pengalaman kerja.
3. Penentuan *margin of error* $E = 5\%$ dan *confidence level* 95%.

**Tahap 2 — Penentuan Jumlah Sampel (Work Sampling)**
Hitung $n$ menggunakan rumus pada Bagian 2.4. Sebagai contoh, dengan $Z = 1{,}96$, $p = 0{,}5$, $E = 0{,}05$:
$$n = \frac{(1{,}96)^2 \cdot (0{,}5)(0{,}5)}{(0{,}05)^2} = \frac{0{,}9604}{0{,}0025} = 384{,}16 \approx 385 \text{ observasi}$$

**Tahap 3 — Pelaksanaan Pengamatan**
Observasi dilakukan secara *random time sampling* (misalnya menggunakan aplikasi *Work Study Pro* atau *Gemba Walks* terjadwal). Setiap observasi merekam kategori aktivitas: *picking*, *packing*, *scanning*, *sorting*, *istirahat*, *menunggu*, atau *komunikasi pelanggan*.

**Tahap 4 — Pengukuran NASA-TLX**
Responden mengisi kuesioner NASA-TLX pascakerja shift melalui formulasi digital (Google Forms / Qualtrics). Instrumen mencakup:
- Bagian A: 15 *pairwise comparison* untuk menentukan bobot dimensi
- Bagian B: Pemberian rating 0–100 pada keenam subskala

**Tahap 5 — Kalkulasi, Validasi, dan Pelaporan**
Hitung *Weighted TLX* per individu, lalu agregasi per kelompok (mean, standar deviasi). Validasi silang dengan proporsi aktivitas dari Work Sampling untuk mendeteksi inkonsistensi.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Data Hipotetis: Operator Sortasi Shopee Express Hub Jakarta Selatan

Misalkan hasil pengukuran NASA-TLX terhadap 30 operator sortasi pada shift siang menghasilkan skor subskala sebagai berikut (rata-rata kelompok):

| Dimensi | Rating Rata-rata $r_i$ |
|:---|:---:|
| Mental Demand ($M$) | 78 |
| Physical Demand ($P$) | 65 |
| Temporal Demand ($T$) | 82 |
| Performance ($Perf$) | 35 |
| Effort ($E$) | 71 |
| Frustration ($F$) | 58 |

### 4.2. Hasil Pairwise Comparison (Bobot)

Dari 15 perbandingan berpasangan yang dilakukan, dihasilkan bobot agregat:

$$\vec{w} = (w_M, w_P, w_T, w_{Perf}, w_E, w_F) = (4, 2, 5, 1, 2, 1)$$

Verifikasi: $\sum w_i = 4+2+5+1+2+1 = 15$ ✓

### 4.3. Perhitungan Weighted TLX

$$\text{Weighted TLX} = \frac{1}{15}\left[4(78) + 2(65) + 5(82) + 1(35) + 2(71) + 1(58)\right]$$

$$= \frac{1}{15}\left[312 + 130 + 410 + 35 + 142 + 58\right] = \frac{1087}{15} \approx 72{,}47$$

### 4.4. Interpretasi Hasil

Berdasarkan kriteria interpretasi beban kerja yang lazim digunakan (Rafi & Putra, 2024):
- Skor 0–20: Sangat Rendah
- Skor 21–40: Rendah
- Skor 41–60: Sedang
- Skor 61–80: **Tinggi** ← posisi kasus kita
- Skor 81–100: Sangat Tinggi

Skor **72,47** mengindikasikan operator sortasi berada pada **kategori beban kerja tinggi**, dengan kontributor dominan *Temporal Demand* ($w_T \cdot r_T = 410$) dan *Mental Demand* ($w_M \cdot r_M = 312$). Rekomendasi manajerial: redistribusi jam puncak, penambahan SDM pada *rush hour* 11.00–14.00, serta redesign *workflow scanning* untuk mengurangi tekanan kognitif.

### 4.5. Integrasi dengan Work Sampling

Hasil observasi 385 kali pada populasi operator menunjukkan distribusi proporsi aktivitas:

| Aktivitas | Proporsi $p_i$ | $CI_{95\%}$ |
|:---|:---:|:---:|
| Scanning & verifikasi | 0,32 | 0,32 ± 0,047 |
| Pergerakan & transport | 0,21 | 0,21 ± 0,043 |
| Istirahat / idle | 0,08 | 0,08 ± 0,028 |
| Komunikasi & pelaporan | 0,15 | 0,15 ± 0,037 |
| Sortasi fisik | 0,18 | 0,18 ± 0,041 |
| *Troubleshooting* aplikasi | 0,06 | 0,06 ± 0,025 |

Contoh kalkulasi *confidence interval* untuk aktivitas *sc