# 2488 — Analisis Beban Kerja Mental Operator Logistik dan Pergudangan Menggunakan Metode NASA-TLX dalam Rantai Pasok E-Commerce

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Sektor *e-commerce* Indonesia mengalami pertumbuhan eksponensial sepanjang dekade terakhir, dengan nilai transaksi bruto (*Gross Merchandise Value*/GMV) yang diproyeksikan menembus lebih dari USD 90 miliar pada tahun 2024. Pertumbuhan ini secara langsung meningkatkan tekanan pada segmen *last-mile delivery*—yang merupakan titik kritis dalam rantai pasok digital. Shopee Express, sebagai salah satu pilar logistik utama grup SEA, mengandalkan model kemitraan (*partner*) di mana pekerja kurir lepas (sering disebut *mitra*) mengelola proses sortir, *packing*, pengangkutan, dan pengiriman akhir. Rafi & Putra (2024) dalam artikelnya yang dipublikasikan pada DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385) menyoroti bahwa beban kerja mental (*mental workload*) mitra Shopee Express menjadi variabel yang selama ini kurang terukur padahal memiliki implikasi langsung terhadap *Service Level Agreement* (SLA), *first attempt delivery rate*, dan tingkat *churn* pekerja.

Urgensi penelitian ini semakin nyata ketika kita memperhatikan tiga fenomena simultan: (1) peningkatan volume paket harian yang diikuti dengan ekspektasi pengiriman *same-day* atau *next-day*; (2) karakteristik pekerjaan yang bersifat *time-pressured*, multitasking, dan memiliki tingkat ketidakpastian alamat yang tinggi di wilayah urban Indonesia; serta (3) belum adanya *standard operating procedure* (SOP) pengukuran beban kerja mental yang spesifik untuk konteks kurir *gig-economy* di Indonesia. Sebagian besar operator logistik berskala besar masih mengandalkan *Key Performance Indicator* (KPI) berbasis volume (jumlah paket per hari) tanpa memperhitungkan dimensi kognitif seperti frustrasi, kelelahan mental, dan tuntutan temporer.

Aditya & Putra (2024) pada DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) memperkuat kerangka ini dengan menunjukkan bahwa di lingkungan pergudangan (*warehouse*) yang lebih terkontrol, metode NASA-TLX yang dikombinasikan dengan *Work Sampling* mampu mengungkap korelasi antara proporsi waktu kerja produktif versus non-produktif dengan tingkat beban kerja mental operator. Studi tersebut secara implisit menunjukkan bahwa pada pekerja lapangan seperti kurir *Shopee Express*, di mana *Work Sampling* sulit dilakukan karena mobilitas tinggi, NASA-TLX berdiri sebagai instrumen utama untuk diagnosis ergonomis kognitif.

Dengan kata lain, kombinasi dua literatur tersebut membangun satu continuum penelitian: dari lingkungan *warehouse* semi-terkontrol (Aditya & Putra, 2024) menuju lingkungan *on-the-road* yang sepenuhnya dinamis (Rafi & Putra, 2024). Keduanya memperkuat argumen bahwa *mental workload* bukanlah konstruk teoretis melainkan variabel operasional yang dapat dan harus diukur secara kuantitatif untuk mencegah *burnout*, menurunkan *error rate* (missort, misdeliver), serta meningkatkan keselamatan kerja pengemudi. Tanpa pengukuran ini, optimalisasi SLA menjadi bias terhadap produktivitas fisik dan mengabaikan kapasitas kognitif manusia sebagai *bottleneck* sistem.

## 2. Landasan Teori & Formulasi Matematis

NASA Task Load Index (NASA-TLX) adalah instrumen multidimensi yang dikembangkan oleh Hart & Staveland (1988) untuk mengukur beban kerja subjetif berdasarkan enam dimensi utama. Rafi & Putra (2024) mengadopsi instrumen ini secara utuh dan mengadaptasikannya ke konteks kurir mitra Shopee Express, dengan penyesuaian pada contoh aktivitas (*task*) di setiap dimensi agar sesuai dengan realitas operasional sortir, *pick-up*, dan *delivery*.

### 2.1 Enam Dimensi NASA-TLX

NASA-TLX mengukur beban kerja melalui enam subskala yang masing-masing dinilai menggunakan *Likert-type scale* 0–100 (dengan interval 5 poin, dari *Very Low* hingga *Very High*):

$$\mathbf{X} = [MD,\ PD,\ TD,\ OP,\ EF,\ FR]$$

di mana:
- $MD$ = *Mental Demand* (Tuntutan Mental) — aktivitas berpikir, memutuskan, menghitung.
- $PD$ = *Physical Demand* (Tuntutan Fisik) — aktivitas fisik seperti mengangkat, berjalan, mengendarai.
- $TD$ = *Temporal Demand* (Tuntutan Temporer) — tekanan waktu untuk menyelesaikan tugas.
- $OP$ = *Own Performance* (Kinerja Sendiri) — persepsi pekerja terhadap keberancana kerjanya.
- $EF$ = *Effort* (Usaha) — tingkat usaha mental/fisik yang dikeluarkan untuk mencapai kinerja.
- $FR$ = *Frustration* (Frustasi) — tingkat frustasi, stres, atau ketidaknyamanan selama bekerja.

### 2.2 Prosedur Pembobotan (*Weighting Procedure*)

NASA-TLX menggunakan prosedur *paired comparison* untuk menentukan bobot relatif setiap dimensi. Terdapat $N_d = 6$ dimensi sehingga jumlah pasangan adalah:

$$C = \binom{N_d}{2} = \frac{N_d(N_d-1)}{2} = \frac{6 \times 5}{2} = 15 \text{ pasangan}$$

Setiap responden diminta memilih dimensi yang lebih dominan dari setiap pasangan. Hasil pemilihan ini membentuk *weight vector* $w_i$ yang merepresentasikan kontribusi relatif setiap dimensi terhadap total beban kerja, dengan kendala:

$$\sum_{i=1}^{6} w_i = 15 \quad \text{(total pasangan)}$$

Normalisasi bobot terhadap rentang 0–1 dapat dilakukan dengan:

$$\hat{w}_i = \frac{w_i}{\sum_{i=1}^{6} w_i}$$

### 2.3 Perhitungan *Raw TLX* dan *Weighted TLX*

*Raw TLX* (jumlah sederhana dari keenam rating):

$$TLX_{raw} = \sum_{i=1}^{6} x_i$$

*Weighted TLX* (skor akhir NASA-TLX):

$$TLX_{weighted} = \sum_{i=1}^{6} \hat{w}_i \cdot x_i$$

dimana $x_i$ adalah rating subskala ke-$i$ dan $\hat{w}_i$ adalah bobot ternormalisasi dari subskala yang sama.

### 2.4 Interpretasi Skor Beban Kerja

Mengikuti klasifikasi Rafi & Putra (2024) yang mengacu pada pedoman Hart (2006):

| Rentang $TLX_{weighted}$ | Kategori Beban Kerja |
|:---:|:---:|
| 0 – 20 | Sangat Rendah |
| 21 – 40 | Rendah |
| 41 – 60 | Sedang |
| 61 – 80 | Tinggi |
| 81 – 100 | Sangat Tinggi |

### 2.5 Integrasi dengan Work Sampling (Aditya & Putra, 2024)

Pada studi pergudangan, Aditya & Putra (2024) memadukan NASA-TLX dengan *Work Sampling* menggunakan formula proporsi aktivitas:

$$P_k = \frac{n_k}{N_{total}} \times 100\%$$

dimana $n_k$ adalah jumlah observasi aktivitas $k$ dan $N_{total}$ adalah total pengamatan. Kombinasi ini memungkinkan korelasi antara proporsi waktu kerja efektif dengan skor $TLX_{weighted}$ melalui koefisien korelasi Pearson:

$$r = \frac{\sum_{j=1}^{m}(P_j - \bar{P})(TLX_j - \bar{TLX})}{\sqrt{\sum_{j=1}^{m}(P_j - \bar{P})^2 \cdot \sum_{j=1}^{m}(TLX_j - \bar{TLX})^2}}$$

dimana $m$ adalah jumlah operator yang dijadikan sampel.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Rafi & Putra (2024) menyusun SOP pengukuran beban kerja mental mitra Shopee Express dalam lima tahap sistematis yang dapat direplikasi secara industri:

**Tahap 1 – Identifikasi Populasi dan Stratifikasi**
Tahap awal ini mengelompokkan mitra kurir berdasarkan *hub* operasional, shift kerja (pagi/siang/malam), dan pengalaman kerja. Stratifikasi diperlukan untuk mengendalikan variabel perancu (*confounding variable*). Jumlah sampel minimal dihitung menggunakan rumus Slovin:

$$n = \frac{N}{1 + N \cdot e^2}$$

dimana $N$ adalah ukuran populasi dan $e$ adalah *margin of error* (umumnya $e = 0{,}05$ atau $e = 0{,}1$).

**Tahap 2 – Pelatihan Responden dan Briefing Instrumen**
Seluruh responden mendapat penjelasan terstruktur mengenai keenam dimensi NASA-TLX dengan contoh spesifik aktivitas kurir (misalnya $MD$: "Menentukan rute optimal saat ini", $TD$: "Menyelesaikan 15 pengantaran sebelum jam 14:00 WIB").

**Tahap 3 – Pengisian Kartu Pembobotan (*Weight Card*)**
Responden diminta memilih dimensi yang lebih relevan dari 15 pasangan (mengikuti $C = \binom{6}{2}$). Output dari tahap ini adalah *weight vector* unik per responden.

**Tahap 4 – Pemberian Rating pada Keenam Dimensi**
Responden menilai keenam dimensi pada skala 0–100 menggunakan *visual analog scale*. Pengisian dilakukan segera setelah shift kerja untuk menangkap paparan beban aktual.

**Tahap 5 – Komputasi Skor dan Analisis Komparatif**
Skor $TLX_{raw}$ dan $TLX_{weighted}$ dihitung, kemudian dibandingkan antar strata (shift, pengalaman, *hub*) menggunakan uji ANOVA satu jalur atau *Kruskal-Wallis* jika asumsi normalitas tidak terpenuhi.

```
┌──────────────────────────────────────────────┐
│  Tahap 1: Stratifikasi Populasi Mitra        │
│           ↓                                  │
│  Tahap 2: Briefing Instrumen NASA-TLX        │
│           ↓                                  │
│  Tahap 3: Pengisian Weight Card (15 pair)    │
│           ↓                                  │
│  Tahap 4: Pemberian Rating 0–100             │
│           ↓                                  │
│  Tahap 5: Hitung TLX_raw & TLX_weighted      │
│           ↓                                  │
│  Analisis Statistik & Rekomendasi Ergonomi   │
└──────────────────────────────────────────────┘
```

Pada konteks pergudangan, Aditya & Putra (2024) menambahkan **Tahap 3.5 — Work Sampling Observation** yang dilakukan secara *random* dengan interval tertentu (misalnya setiap 30 detik selama 4 jam) untuk memetakan proporsi waktu pada kategori aktivitas: produktif, non-produktif,等待 (*waiting*), dan *delay*. Sinergi kedua metode ini memberikan gambaran holistik: *Work Sampling* menjawab "berapa banyak waktu yang terpakai untuk tugas X", sementara NASA-TLX menjawab "seberapa berat beban kognitif yang dirasakan saat melakukannya".

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Kita rekonstruksi skenario ilustratif berbasis protokol Rafi & Putra (2024) untuk seorang mitra kurir Shopee Express "Budi" yang beroperasi di *hub* Jakarta Selatan dengan shift siang (10.00–18.00 WIB) dan pengalaman kerja 14 bulan.

**Langkah 1: Penghitungan Bobot dari 15 Pasangan**

Misalkan dari hasil *paired comparison*, Budi memilih dimensi dominan sebagai berikut:
- $MD$ = 4 kemenangan (vs $PD$, $TD$, $OP$, $FR$)
- $PD$ = 3 kemenangan (vs $TD$, $OP$, $FR$)
- $TD$ = 3 kemenangan (vs $OP$, $EF$, salah satu $FR$)
- $OP$ = 1 kemenangan
- $EF$ = 2 kemenangan
- $FR$ = 2 kemenangan

Verifikasi: $\sum w_i = 4+3+3+1+2+2 = 15$ ✓

Bobot ternormalisasi:

$$\hat{w}_{MD} = \frac{4}{15} = 0{,}267, \quad \hat{w}_{PD} = \frac{3}{15} = 0{,}200, \quad \hat{w}_{TD} = \frac{3}{15} = 0{,}200$$
$$\hat{w}_{OP} = \frac{1}{15} = 0{,}067, \quad \hat{w}_{EF} = \frac{2}{15} = 0{,}133, \quad \hat{w}_{FR} = \frac{2}{15} = 0{,}133$$

**Langkah 2: Pemberian Rating Subskala**

| Dimensi | Rating $x_i$ (0–100) |
|:---:|:---:|
| $MD$ (Tuntutan Mental) | 75 |
| $PD$ (Tuntutan Fisik) | 65 |
| $TD$ (Tuntutan Temporer) | 85 |
| $OP$ (Kinerja Sendiri) | 30 |
| $EF$ (Usaha) | 70 |
| $FR$ (Frustasi) | 60 |

**Langkah 3: Perhitungan Raw TLX**

$$TLX_{raw} = 75 + 65 + 85 + 30 + 70 + 60 = 385$$

**Langkah 4: Perhitungan Weighted TLX**

$$TLX_{weighted} = (0{,}267)(75) + (0{,}200)(65) + (0{,}200)(85) + (0{,}067)(30) + (0{,}133)(70) + (0{,}133)(60)$$

$$TLX_{weighted} = 20{,}025 + 13{,}000 + 17{,}000 + 2{,}010 + 9{,}310 + 7{,}980 = 69{,}325$$

**Langkah 5: Interpretasi Manajerial**

Dengan $TLX_{weighted} = 69{,}