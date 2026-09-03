# 1720 — Analisis Beban Kerja Mental Operator Logistik E-Commerce Menggunakan Metode NASA-TLX dan Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Sektor logistik e-commerce di Indonesia mengalami ekspansi eksponensial pascapandemi COVID-19, dengan Shopee Express sebagai salah satu mitra pengiriman last-mile dengan volume parcel harian mencapai ratusan ribu unit per hub operasional. Rafi dan Putra (2024) dalam *Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method* (DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)) menyoroti bahwa intensitas operasional kurir dan staf sortir Shopee Express Partner (SEP) menghadapi tekanan multidimensional yang belum diukur secara kuantitatif di banyak lokasi operasional di Sumatera dan Jawa. Studi ini muncul karena tingkat *human error*, kelelahan kognitif, dan *burnout* pada karyawan sortir-sortasi menjadi salah satu *root cause* utama dari *miss-route*, *mis-sort*, dan retur paket yang menurunkan *Service Level Agreement* (SLA) pengiriman last-mile. Aditya.R dan Putra (2024) pada DOI [10.21070/ups.11795](https://doi.org/10.21070/ups.11795) memperkuat argumen tersebut dengan menyatakan bahwa operator gudang (*warehouse operator*) menghadapi paparan beban kerja yang bersifat hibrida: gabungan antara aktivitas fisik (lifting, *conveyor handling*) dan kognitif (scanning barcode, validasi kode pos, *decision-making* rute). Urgensi ekonomis dari riset ini terletak pada korelasi langsung antara *mental workload* karyawan dengan *operational cost* perusahaan: setiap 1% peningkatan *error* sortir menghasilkan eskalasi biaya kompensasi pelanggan dan reverse logistics sebesar rata-rata 0,3-0,7% dari nilai transaksi.

Dari perspektif ergonomi kognitif (Cognitive Ergonomics) dalam kerangka ISO 10075 (Ergonomic Principles Related to Mental Workload), fenomena *cognitive overload* pada karyawan kurir dan operator gudang merupakan *systemic risk* yang harus dimitigasi melalui Human Factors Engineering. Rafi dan Putra (2024) melakukan studi pada karyawan Shopee Express Partner yang bekerja dalam shift 8 jam dengan rotasi tugas sortir, *packing*, dan *delivery dispatching*. Aditya.R dan Putra (2024) mengaplikasikan *Work Sampling* untuk memetakan proporsi waktu operator di lima kategori aktivitas, lalu mengintegrasikannya dengan NASA-TLX untuk menilai persepsi subjektif beban mental. Kedua paper ini menjadi pionir dalam mengintegrasikan metode Subjective Workload Assessment (NASA-TLX) dengan metode Objective Time Study (Work Sampling) untuk konteks e-commerce warehouse Indonesia yang sebelumnya masih didominasi oleh studi manufaktur konvensional.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 NASA Task Load Index (NASA-TLX)

NASA-TLX, yang dikembangkan oleh Hart dan Staveland (1988) serta telah divalidasi secara internasional sebagai *gold standard* pengukuran *subjective workload*, mengukur beban kerja mental melalui enam dimensi. Rafi dan Putra (2024) menggunakan formulasi *Raw TLX* (unweighted) dan *Weighted TLX*:

$$TLX_{raw} = \frac{1}{6}\sum_{i=1}^{6} R_i$$

di mana $R_i$ adalah skor mentah untuk setiap subskala pada rentang 0–100. Keenam subskala tersebut adalah:

| Simbol | Dimensi | Deskripsi Operasional |
|---|---|---|
| $R_{MD}$ | Mental Demand | Seberapa banyak aktivitas berpikir,决策, dan kalkulasi yang dibutuhkan |
| $R_{PD}$ | Physical Demand | Seberapa banyak aktivitas fisik yang dibutuhkan |
| $R_{TD}$ | Temporal Demand | Seberapa banyak tekanan waktu yang dirasakan |
| $R_{OP}$ | Own Performance | Seberapa sukses pekerja dalam完成任务 (skala terbalik) |
| $R_{EF}$ | Effort | Seberapa keras pekerja harus bekerja |
| $R_{FR}$ | Frustration | Seberapa tidak puas, tertekan, atau frustasi pekerja |

Untuk *Weighted TLX*, dilakukan *card-sorting* pairwise comparison yang menghasilkan bobot $w_i$ dengan $\sum w_i = 15$:

$$TLX_{weighted} = \frac{\sum_{i=1}^{6} w_i \cdot R_i}{15}$$

Rafi dan Putra (2024) menyatakan bahwa skor $TLX > 80$ mengindikasikan *overload*, $TLX \in [60, 80]$ masuk kategori *high workload*, $TLX \in [40, 60]$ *moderate*, dan $TLX < 40$ dikategorikan *low workload*. Ambang batas ini sesuai dengan rekomendasi *Human Performance* dari NIOSH dan IAEA Human Reliability Analysis.

### 2.2 Work Sampling — Penentuan Jumlah Pengamatan

Aditya.R dan Putra (2024) menggunakan formulasi statistik klasik dari *Work Sampling Theory* (Niebel & Freivalds, 2014) untuk menentukan jumlah observasi minimum:

$$N = \frac{Z^2 \cdot p \cdot (1-p)}{E^2}$$

di mana:
- $Z$ = nilai Z tabel pada tingkat kepercayaan $(1-\alpha)$
- $p$ = proporsi aktivitas yang dicari (estimasi awal, default $p=0,5$ untuk *worst-case variance*)
- $E$ = batas kesalahan absolut (margin of error)

Untuk tingkat kepercayaan 95% dengan $Z_{0.025}=1{,}96$, $p=0{,}5$, dan $E=0{,}05$:

$$N = \frac{(1{,}96)^2 \cdot 0{,}5 \cdot 0{,}5}{(0{,}05)^2} = \frac{3{,}8416 \cdot 0{,}25}{0{,}0025} = \frac{0{,}9604}{0{,}0025} = 384{,}16 \approx 385 \text{ observasi}$$

Jika aktivitas target hanya 30% dari total waktu (proporsi aktivitas sortir), dengan $p=0{,}30$:

$$N = \frac{(1{,}96)^2 \cdot 0{,}30 \cdot 0{,}70}{(0{,}05)^2} = \frac{3{,}8416 \cdot 0{,}21}{0{,}0025} = 322{,}69 \approx 323 \text{ observasi}$$

### 2.3 Confidence Interval Proporsi Aktivitas

Setelah pengumpulan data, *confidence interval* proporsi aktivitas dihitung dengan:

$$CI_{95\%} = \hat{p} \pm Z_{\alpha/2} \cdot \sqrt{\frac{\hat{p}(1-\hat{p})}{N}}$$

Aditya.R dan Putra (2024) menekankan bahwa validitas Work Sampling mensyaratkan: (1) observasi bersifat *random* dan independen, (2) aktivitas operator bersifat *steady-state* (tidak ada pola musiman dalam shift), dan (3) jumlah observer cukup untuk menghilangkan *observer bias* (Cohen's $\kappa > 0{,}75$).

### 2.4 Normalized Workload Score (Integrasi)

Untuk integrasi kedua metode, diusulkan *Normalized Workload Score* (NWS):

$$NWS = \alpha \cdot TLX_{weighted} + \beta \cdot \left(\frac{\sum P_{intensive}}{P_{total}}\right)$$

di mana $\alpha + \beta = 1$ adalah bobot relatif dan $\sum P_{intensive}$ adalah proporsi waktu pada kategori aktivitas *high-cognitive load* (misal: sortir manual, validasi barcode) hasil Work Sampling.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Rafi dan Putra (2024) menyusun SOP pengukuran NASA-TLX dengan tahapan sebagai berikut:

```
┌──────────────────────────────────────────────────────────┐
│  FASE 1: PREPARASI (3-5 hari)                            │
│  • Briefing responden (karyawan Shopee Express Partner)   │
│  • Informed consent & penjelasan 6 subskala               │
│  • Validasi kuesioner Bahasa Indonesia (Cronbach α ≥ 0,7)│
└──────────────────────────────────────────────────────────┘
                        ↓
┌──────────────────────────────────────────────────────────┐
│  FASE 2: PENGUMPULAN DATA (10-14 hari)                   │
│  • Pengisian TLX setelah shift berakhir                  │
│  • Pairwise comparison (card-sorting)                     │
│  • Sampling acak 30-50 responden per lokasi              │
└──────────────────────────────────────────────────────────┘
                        ↓
┌──────────────────────────────────────────────────────────┐
│  FASE 3: PEMERINGKATAN                                   │
│  • Hitung TLX_raw dan TLX_weighted per individu          │
│  • Uji normalitas (Shapiro-Wilk, p > 0,05)               │
│  • Uji beda antar shift (ANOVA / Kruskal-Wallis)         │
└──────────────────────────────────────────────────────────┘
                        ↓
┌──────────────────────────────────────────────────────────┐
│  FASE 4: REKOMENDASI                                     │
│  • Identifikasi dimensi dominan (highest R_i × w_i)      │
│  • Desain ulang alokasi shift & istirahat                 │
│  • Implementasi tool bantu (auto-sorter, scanner ergonomic)│
└──────────────────────────────────────────────────────────┘
```

Sementara itu, Aditya.R dan Putra (2024) menyusun SOP Work Sampling dengan struktur identik tetapi dengan penyesuaian untuk operator gudang:

1. **Definisi Kategori Aktivitas**: Aktivitas gudang diklasifikasikan menjadi 5-7 kategori (misal: *idle*, *waiting*, *transport*, *sorting*, *packing*, *loading*, *administrative*).
2. **Penentuan Stratum Waktu**: Observasi dilakukan dalam interval tetap (misalnya setiap 60 detik) selama 8 jam per shift.
3. **Pelatihan Observer**: Minimal 2 observer dengan uji *inter-rater reliability* menggunakan Cohen's Kappa $\kappa \geq 0{,}75$.
4. **Random Sampling**: Waktu observasi ditentukan oleh bilangan random uniform $U(0, T_{shift})$ untuk menghindari bias periodik.
5. **Rekapitulasi & Validasi**: Hitung proporsi setiap kategori dan validasi dengan *chi-square goodness-of-fit* terhadap hipotesis steady-state.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Data Hipotetis Berdasarkan Temuan Rafi & Putra (2024)

Misalkan seorang operator sortir Shopee Express Partner bernama "Operator A" menyelesaikan kuesioner NASA-TLX dengan skor mentah sebagai berikut:

| Dimensi | Skor Mentah $R_i$ | Bobot $w_i$ |
|---|---|---|
| Mental Demand ($R_{MD}$) | 85 | 4 |
| Physical Demand ($R_{PD}$) | 60 | 2 |
| Temporal Demand ($R_{TD}$) | 90 | 3 |
| Own Performance ($R_{OP}$) | 70 | 2 |
| Effort ($R_{EF}$) | 80 | 3 |
| Frustration ($R_{FR}$) | 75 | 1 |
| **Total Bobot** | | **15** |

**Langkah 1: Hitung Raw TLX**

$$TLX_{raw} = \frac{85 + 60 + 90 + 70 + 80 + 75}{6} = \frac{460}{6} = 76{,}67$$

**Langkah 2: Hitung Weighted TLX**

$$TLX_{weighted} = \frac{(4)(85) + (2)(60) + (3)(90) + (2)(70) + (3)(80) + (1)(75)}{15}$$

$$TLX_{weighted} = \frac{340 + 120 + 270 + 140 + 240 + 75}{15} = \frac{1185}{15} = 79{,}00$$

**Interpretasi Manajerial:** Operator A masuk kategori *high workload* dengan skor 79,00. Dimensi paling dominan adalah *Mental Demand* (weighted score $=340$) dan *Temporal Demand* (weighted score $=270$). Tindakan rekayasa yang direkomendasikan: (1) penambahan satu operator tambahan per *sorting line* untuk menurunkan temporal pressure, (2) implementasi *voice-directed picking* untuk mengurangi mental load decoding alamat.

### 4.2 Data Hipotetis Berdasarkan Aditya.R & Putra (2024) — Work Sampling

Pada studi warehouse operator dengan $N = 450$ observasi random, diperoleh distribusi aktivitas:

| Kategori Aktivitas | Frekuensi Observasi | Proporsi $\hat{p}$ |
|---|---|---|
| Sorting (manual) | 153 | 0,340 |
| Packing | 90 | 0,200 |
| Loading/Unloading | 81 | 0,180 |
| Transport (antar zona) | 54 | 0,120 |
| Idle/Waiting | 45 | 0,100 |
| Administrative | 27 | 0,060 |
| **Total** | **450** | **1,000** |

**Langkah 1: Confidence Interval untuk Aktivitas Sorting**

$$CI_{95\%}(\hat{p}_{sorting}) = 0{,}340 \