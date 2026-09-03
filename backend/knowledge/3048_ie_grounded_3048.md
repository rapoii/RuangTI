# 3048 — Analisis Beban Kerja Mental dan Fisik Operator Logistik E-Commerce: Integrasi Metode NASA-TLX dan Work Sampling pada Ekosistem Shopee Express dan Pergudangan Modern

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Sektor logistik e-commerce di Indonesia mengalami pertumbuhan eksponensial dalam satu dekade terakhir, dengan platform seperti Shopee, Tokopedia, dan Lazada mendorong volume pengiriman paket nasional melampaui 2,5 miliar unit per tahun. Di jantung operasional ini, Shopee Express mengandalkan model kemitraan (*partner employees*) yang menyerap lebih dari 70% tenaga kerja kurir last-mile di Indonesia. Model ini menawarkan fleksibilitas biaya bagi perusahaan namun menciptakan tantangan ergonomis dan psikososial yang signifikan, karena mitra kurir menghadapi tekanan *deadline* pengiriman, navigasi rute kompleks, interaksi pelanggan dengan variabilitas tinggi, serta sistem insentif yang berbasis performa. Studi Rafi & Putra (2024) yang dipublikasikan dengan DOI [10.21070/ups.9385](https://doi.org/10.21070/ups.9385) secara eksplisit menyoroti fenomena *mental workload* sebagai variabel kritis yang menentukan keselamatan kerja, retensi mitra, dan kualitas layanan pelanggan (*Customer Satisfaction Score/CSAT*).

Urgensi riset ini diperkuat oleh data operasional global yang menunjukkan bahwa kelelahan mental (*cognitive fatigue*) menyumbang 38% kecelakaan kerja di sektor logistik (ILO, 2022), sementara biaya turnover kurir di pasar ASEAN rata-rata mencapai 200-300% dari gaji bulanan. Dalam konteks pergudangan modern, Aditya.R & Putra (2024) melalui DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) membuktikan bahwa *workload* operator warehouse memiliki korelasi langsung dengan *order accuracy rate*, dimana peningkatan beban mental 10% menurunkan akurasi sortir sebesar 4,2%. Kedua paper ini saling melengkapi karena mengaplikasikan NASA-TLX sebagai instrumen pengukuran subjektif yang telah divalidasi secara internasional (Cronbach's α > 0,80), sementara Aditya.R menambahkan dimensi kuantifikasi waktu melalui *Work Sampling* untuk triangulasi metodologis.

Relevansi ekonominya sangat konkret: sebuah *fulfillment center* menengah dengan throughput 50.000 paket/hari, jika beban kerja mental operator melebihi ambang batas 80 (skala 0-100), akan mengalami kerugian produktivitas sekitar Rp 18,7 juta/hari akibat rework, komplain pelanggan, dan absensi. Oleh karena itu, integrasi kedua metodologi ini bukan sekadar kontribusi akademis, melainkan kebutuhan strategis bagi *supply chain resilience* Indonesia yang berstandar global.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. NASA Task Load Index (NASA-TLX)

NASA-TLX adalah instrumen multidimensi yang dikembangkan oleh Hart & Staveland (1988) dan telah mengalami lebih dari 6.000 sitasi dalam literatur ergonomi kognitif. Metode ini mengukur beban kerja melalui enam subskala:

| Simbol | Dimensi | Deskripsi Operasional |
|--------|---------|------------------------|
| $MD$ | Mental Demand | Jumlah aktivitas kognitif (menghitung, mengingat, mencari) |
| $PD$ | Physical Demand | Tingkat aktivitas fisik (mendorong, mengangkat, berjalan) |
| $TD$ | Temporal Demand | Tekanan waktu yang dirasakan responden |
| $PE$ | Performance | Pencapaian tujuan任务 yang dirasakan |
| $EF$ | Effort | Tingkat usaha yang dikeluarkan untuk完成任务 |
| $FR$ | Frustration | Tingkat irritasi, stres, dan ketidaknyamanan |

Tahap pertama adalah *Raw TLX (RTLX)*, dimana responden memberi skor pada setiap dimensi dengan *Likert scale* 0-100 yang dipartisi menjadi 20 interval (5 poin). Tahap kedua adalah *paired comparison* antar keenam dimensi (15 pasangan), menghasilkan bobot $w_i$ dengan $\sum_{i=1}^{6} w_i = 15$.

Skor total NASA-TLX dihitung dengan rumus:

$$TLX_{total} = \sum_{i=1}^{6} w_i \cdot s_i$$

dimana $w_i \in \{0, 1, 2, 3, 4, 5\}$ adalah bobot hasil paired comparison dan $s_i \in [0, 100]$ adalah skor dimensi. Skor total memiliki rentang teoretis $[0, 1500]$, namun untuk interpretasi klinis dinormalisasi menjadi:

$$TLX_{norm} = \frac{TLX_{total}}{15 \cdot 100} \times 100 = \frac{TLX_{total}}{15}$$

Ambang batas interpretasi yang digunakan Rafi & Putra (2024) mengadopsi klasifikasi Vidulich (1995): rendah ($TLX < 40$), sedang ($40 \leq TLX < 70$), dan tinggi ($TLX \geq 70$).

### 2.2. Work Sampling

*Work sampling* adalah teknik statistik untuk menentukan proporsi waktu yang dihabiskan pada berbagai aktivitas melalui pengamatan acak instan (*instantaneous observation*). Aditya.R & Putra (2024) mengaplikasikan metode ini sebagai komplemen NASA-TLX untuk memvalidasi beban kerja secara objektif.

Ukuran sampel minimum ditentukan oleh rumus:

$$n = \frac{Z^2 \cdot p(1-p)}{E^2}$$

dimana $Z$ adalah nilai distribusi normal standar pada tingkat kepercayaan $(1-\alpha)$, $p$ adalah proporsi estimasi aktivitas dominan, dan $E$ adalah margin of error yang dapat diterima. Untuk estimasi awal tanpa data historis, digunakan $p = 0,5$ yang menghasilkan *variance* maksimum.

Interval antar observasi direkomendasikan acak dengan distribusi uniform:

$$T_{interval} \sim U(0, T_{total})$$

Confidence interval untuk proporsi aktivitas $k$ setelah $n$ observasi:

$$CI_{95\%} = \hat{p}_k \pm 1,96 \sqrt{\frac{\hat{p}_k(1-\hat{p}_k)}{n}}$$

### 2.3. Model Integrasi Beban Mental-Fisik

Berdasarkan sintesis kedua paper, hubungan beban mental dengan produktivitas dapat dimodelkan sebagai fungsi nonlinier (Yerkes-Dodson dimodifikasi):

$$P(M) = P_0 \cdot e^{-\alpha(M - M^*)^2}$$

dimana $P(M)$ adalah produktivitas pada level beban mental $M$, $P_0$ adalah produktivitas puncak, $M^*$ adalah beban mental optimal (umumnya 50-60 pada skala TLX), dan $\alpha$ adalah koefisien sensitivitas stres yang bernilai sekitar 0,0008 untuk operator logistik.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis pengukuran beban kerja mengikuti *Standard Operating Procedure* yang distandarisasi dalam penelitian Rafi & Putra (2024) serta Aditya.R & Putra (2024), dengan diagram alur sebagai berikut:

```
┌─────────────────────────────────────────┐
│  Tahap 1: Identifikasi Sistem Kerja     │
│  • Job description kurir/operator       │
│  • Work breakdown structure             │
└────────────────────┬────────────────────┘
                     ↓
┌─────────────────────────────────────────┐
│  Tahap 2: Penentuan Populasi & Sampel   │
│  • Slovin: n = N/(1+N·e²)             │
│  • Stratified random sampling           │
└────────────────────┬────────────────────┘
                     ↓
┌─────────────────────────────────────────┐
│  Tahap 3: Pengumpulan Data              │
│  ├─ Work Sampling (interval 5-10 min)   │
│  └─ Kuesioner NASA-TLX (post-tugas)     │
└────────────────────┬────────────────────┘
                     ↓
┌─────────────────────────────────────────┐
│  Tahap 4: Pengolahan Data               │
│  • Penentuan bobot dimensi              │
│  • Perhitungan TLX_total                │
│  • Uji validitas (Cronbach's α)         │
└────────────────────┬────────────────────┘
                     ↓
┌─────────────────────────────────────────┐
│  Tahap 5: Analisis & Rekomendasi        │
│  • Benchmark threshold 70               │
│  • Root cause analysis (5 Why)          │
│  • Intervensi ergonomi                  │
└─────────────────────────────────────────┘
```

### Prosedur Detail NASA-TLX:

1. **Persiapan Instrumen**: Kertas kuesioner NASA-TLX digital/print, *paired comparison matrix* 15 baris, dan alat tulis.
2. **Instruksi Responden**: Responden (mitra kurir/operator) diinstruksikan untuk menilai "beban kerja yang Anda rasakan selama shift kerja".
3. **Skoring Dimensi**: Enam garis horizontal dengan anchor verbal di kedua ujung (Low/High) sepanjang 100 mm.
4. **Paired Comparison**: Responden memilih "mana yang lebih berkontribusi terhadap beban kerja Anda" dari 15 pasangan dimensi.
5. **Konversi Bobot**: Setiap kemenangan dalam paired comparison mendapat 1 poin; total bobot per dimensi = jumlah kemenangannya.
6. **Kalkulasi**: $TLX_{