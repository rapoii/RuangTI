# 2712 — Analisis Beban Kerja Mental Operator Logistik Last-Mile menggunakan Metode NASA-TLX dan Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Industri *e-commerce* di Asia Tenggara, termasuk Indonesia, telah mengalami pertumbuhan eksponensial selama dekade terakhir, mendorong permintaan akan layanan logistik *last-mile* yang sangat bergantung pada kinerja sumber daya manusia. Shopee Express sebagai salah satu perusahaan kurir dengan model *partner* (mitra) menghadapi tantangan operasional yang unik, di mana pekerja bukan merupakan karyawan tetap melainkan mitra independen yang terikat kontrak kinerja harian. Model bisnis ini menciptakan dinamika beban kerja (*workload*) yang khas, karena mitra kurir harus memenuhi target pengiriman sambil menavigasi variabel-variabel seperti lalu lintas perkotaan, ekspektasi pelanggan yang tinggi, dan sistem *routing* berbasis aplikasi. Rafi dan Putra (2024) dalam artikel mereka yang diterbitkan di *Peer-Reviewed Journal* dengan DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385) secara eksplisit menyoroti bahwa aktivitas sortir, *packing*, pengangkutan, dan *last-mile delivery* merupakan titik-titik kritis yang memberikan kontribusi signifikan terhadap beban kognitif karyawan.

Urgensi penelitian ini diperkuat oleh fakta bahwa kesalahan manusia dalam operasional *last-mile* — seperti salah sortir, paket tertinggal, atau keterlambatan — tidak hanya menurunkan *service level agreement* (SLA) tetapi juga berdampak langsung pada reputasi platform. Studi terdahulu menunjukkan bahwa beban kerja mental yang berlebihan merupakan *precursor* utama dari kelelahan, *burnout*, peningkatan *error rate*, dan pada akhirnya *turnover* pekerja yang merugikan secara finansial. Rafi dan Putra (2024) menegaskan bahwa pemahaman kuantitatif terhadap dimensi beban mental — seperti *mental demand*, *physical demand*, *temporal demand*, *performance*, *effort*, dan *frustration* — melalui instrumen terstandarisasi menjadi kebutuhan strategis bagi manajemen SDM operasional. Pendekatan NASA-TLX (*NASA Task Load Index*), yang awalnya dikembangkan oleh Hart dan Staveland (1988) dan telah tervalidasi secara luas di berbagai domain ergonomi kognitif, digunakan dalam penelitian ini karena sensitivitasnya terhadap beban multi-dimensi yang dialami pekerja di lingkungan dinamis. Studi komplementer yang dilakukan oleh Aditya.R dan Putra (2024) dengan DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) memperluas kerangka analisis dengan mengintegrasikan NASA-TLX bersama *Work Sampling* untuk memperoleh gambaran holistik tentang proporsi waktu kerja versus beban mental operator gudang. Kedua paper ini secara kolektif membentuk basis bukti yang kuat bagi pengambilan keputusan berbasis data dalam perancangan ulang sistem kerja, penjadwalan, dan alokasi sumber daya pada ekosistem logistik digital.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 NASA-TLX (*NASA Task Load Index*)

NASA-TLX adalah instrumen multidimensional yang mengukur beban kerja subjektif melalui enam subskala, masing-masing dievaluasi pada rentang $0$ hingga $100$ melalui *visual analog scale*. Keenam subskala tersebut dirumuskan sebagai berikut:

$$\text{MD}, \text{PD}, \text{TD}, \text{PE}, \text{EF}, \text{FR} \in [0, 100]$$

di mana MD = *Mental Demand*, PD = *Physical Demand*, TD = *Temporal Demand*, PE = *Performance* (persepsi pencapaian), EF = *Effort*, dan FR = *Frustration*.

Terdapat dua metode agregasi skor dalam NASA-TLX:

**(a) Raw TLX (RTLX)** — rata-rata aritmatika sederhana:

$$\text{RTLX} = \frac{1}{6}\sum_{i=1}^{6} x_i = \frac{\text{MD} + \text{PD} + \text{TD} + \text{PE} + \text{EF} + \text{FR}}{6}$$

**(b) Weighted TLX (TLX)** — rata-rata terbobotkan dengan *card-sorting* yang menghasilkan bobot dari 15 pasangan perbandingan:

$$w_i \in \{0, 1, 2, 3, 4, 5\}, \quad \sum_{i=1}^{6} w_i = 15$$

$$\text{TLX} = \frac{\sum_{i=1}^{6} w_i \cdot x_i}{\sum_{i=1}^{6} w_i} = \frac{\sum_{i=1}^{6} w_i \cdot x_i}{15}$$

Klasifikasi beban kerja mengacu pada Hart (2006):

| Skor TLX | Kategori Beban Kerja |
|----------|---------------------|
| $0 - 20$ | Sangat Rendah |
| $21 - 40$ | Rendah |
| $41 - 60$ | Sedang |
| $61 - 80$ | Tinggi |
| $81 - 100$ | Sangat Tinggi |

### 2.2 Work Sampling

*Work Sampling* adalah teknik observasi instan (*instantaneous observation*) untuk menentukan proporsi waktu yang dihabiskan pekerja pada berbagai kategori aktivitas. Formula fundamentalnya adalah:

$$P_j = \frac{n_j}{N} \times 100\%$$

di mana $P_j$ adalah persentase waktu untuk aktivitas $j$, $n_j$ adalah jumlah observasi pada aktivitas $j$, dan $N$ adalah total observasi.

*Standard Error* proporsi dihitung sebagai:

$$SE_j = \sqrt{\frac{P_j(100 - P_j)}{N}}$$

dan *Confidence Interval* pada tingkat kepercayaan $1-\alpha$ adalah:

$$CI_j = P_j \pm Z_{\alpha/2} \cdot SE_j$$

Jumlah observasi minimum yang dibutuhkan untuk presisi tertentu ditentukan oleh:

$$N = \frac{Z^2 \cdot p \cdot (1-p)}{e^2}$$

dengan $Z$ = nilai kritis distribusi normal standar, $p$ = proporsi aktivitas yang diestimasi (default $0{,}5$ untuk konservatif), dan $e$ = margin of error yang dapat diterima.

### 2.3 Integrasi NASA-TLX dan Work Sampling

Aditya.R dan Putra (2024) mengusulkan integrasi kedua metode melalui *Workload Index* komposit:

$$\text{WLI}_j = \frac{P_j}{100} \times \text{TLX}_j$$

yang merepresentasikan kontribusi efektif aktivitas $j$ terhadap total beban kerja harian operator. Total beban kerja harian teraglomerasi:

$$\text{WLI}_{\text{total}} = \sum_{j=1}^{k} \text{WLI}_j$$

di mana $k$ adalah jumlah kategori aktivitas. Pendekatan ini memungkinkan identifikasi aktivitas mana yang meskipun singkat durasinya, memberikan kontribusi beban mental tertinggi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan kedua paper rujukan, prosedur operasional standar untuk analisis beban kerja mental operator logistik dapat distrukturisasi sebagai berikut:

**Tahap 1 — Perencanaan dan Penentuan Sampel**
Hitung jumlah responden minimum menggunakan *slovin formula* atau *power analysis*. Rafi dan Putra (2024) menggunakan total *sampling* untuk populasi Shopee Express Partner di wilayah studi dengan kriteria inklusi: minimal 6 bulan pengalaman, usia 20–45 tahun, dan tidak dalam kondisi medis khusus.

**Tahap 2 — Pembuatan Instrumen dan *Pilot Test***
Instrumen NASA-TLX versi bilingual (Indonesia-Inggris) disiapkan, diuji validitas konstruknya melalui *expert judgment* (3 ahli ergonomi), dan reliabilitas diuji dengan *Cronbach's Alpha*:

$$\alpha = \frac{k}{k-1}\left(1 - \frac{\sum_{i=1}^{k} \sigma^2_{Y_i}}{\sigma^2_X}\right)$$

dengan target $\alpha \geq 0{,}7$.

**Tahap 3 — Pengumpulan Data Work Sampling**
Lakukan observasi instan dengan interval acak (*random-time observation*). Untuk shift 8 jam dengan target margin of error $e = 5\%$ dan $Z = 1{,}96$:

$$N = \frac{(1{,}96)^2 \cdot 0{,}5 \cdot 0{,}5}{(0{,}05)^2} = 384 \text{ observasi/operator}$$

**Tahap 4 — Pengisian Kuesioner NASA-TLX**
Responden memberikan skor pada keenam subskala, kemudian melakukan *card-sorting* untuk menentukan bobot.

**Tahap 5 — Analisis dan Interpretasi**
Hitung skor TLX individu, agregasi per kelompok aktivitas, bandingkan dengan ambang batas kategori beban, dan buat rekomendasi rekayasa.

**Diagram Alir SOP:**

```
┌─────────────────────────────┐
│ Identifikasi Aktivitas Kerja │
└──────────────┬──────────────┘
               ▼
┌─────────────────────────────┐
│ Penentuan Jumlah Observasi N │
└──────────────┬──────────────┘
               ▼
┌─────────────────────────────┐
│ Observasi Instan (Work Sampling) │
└──────────────┬──────────────┘
               ▼
┌─────────────────────────────┐
│ Pengisian Kuesioner NASA-TLX │
│ (6 subskala + card sorting)  │
└──────────────┬──────────────┘
               ▼
┌─────────────────────────────┐
│ Perhitungan RTLX / TLX      │
└──────────────┬──────────────┘
               ▼
┌─────────────────────────────┐
│ Perhitungan WLI per aktivitas│
└──────────────┬──────────────┘
               ▼
┌─────────────────────────────┐
│ Analisis Korelasi & Rekomendasi│
└─────────────────────────────┘
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah hub Shopee Express di kota metropolitan dengan 25 mitra kurir. Berdasarkan desain penelitian Rafi dan Putra (2024), dilakukan studi kasus pada 5 aktivitas utama operator sortir dengan data hipotetis-realistik sebagai berikut.

**Tabel 1. Data Work Sampling (N = 2000 observasi)**

| No | Aktivitas | $n_j$ | $P_j$ (%) |
|----|-----------|-------|-----------|
| 1 | Sortir paket | 480 | 24,0 |
| 2 | Loading ke armada | 280 | 14,0 |
| 3 | Navigasi & pengiriman | 620 | 31,0 |
| 4 | Komunikasi dengan pelanggan | 220 | 11,0 |
| 5 | Istirahat & administratif | 400 | 20,0 |

**Tabel 2. Skor NASA-TLX per Aktivitas**

| Aktivitas | MD | PD | TD | PE | EF | FR | $\text{RTLX}$ |
|-----------|----|----|----|----|----|----|----|
| Sortir paket | 75 | 60 | 70 | 50 | 75 | 65 | 65,83 |
| Loading armada | 35 | 85 | 50 | 40 | 50 | 30 | 48,33 |
| Navigasi | 80 | 45 | 85 | 60 | 80 | 75 | 70,83 |
| Komunikasi | 60 | 25 | 65 | 70 | 55 | 50 | 54,17 |
| Administratif | 30 | 20 | 40 | 50 | 35 | 25 | 33,33 |

**Perhitungan Workload Index (WLI):**

$$\text{WLI}_{\text{sortir}} = \frac{24{,}0}{100} \times 65{,}83 = 15{,}80$$

$$\text{WLI}_{\text{loading}} = \frac{14{,}0}{100} \times 48{,}33 = 6{,}77$$

$$\text{WLI}_{\text{navigasi}} = \frac{31{,}0}{100} \times 70{,}83 = 21{,}96$$

$$\text{WLI}_{\text{komunikasi}} = \frac{11{,}0}{100} \times 54{,}17 = 5{,}96$$

$$\text{WLI}_{\text{admin}} = \frac{20{,}0}{100} \times 33{,}33 = 6{,}67$$

$$\text{WLI}_{\text{total}} = 15{,}80 + 6{,}77 + 21{,}96 + 5{,}96 + 6{,}67 = 57{,}16$$

**Perhitungan Standard Error dan Confidence Interval (contoh aktivitas sortir, $P = 24{,}0$):**

$$SE = \sqrt{\frac{24{,}0 \times 76{,}0}{2000}} = \sqrt{0{,}912} = 0{,}955\%$$

$$CI_{95\%} = 24{,}0 \pm (1{,}96 \times 0{,}955) = [22{,}13\%;\; 25{,}87\%]$$

**Interpretasi Manajerial:**

1. **Aktivitas kritis:** Navigasi & pengiriman