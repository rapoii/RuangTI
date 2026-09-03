# 1912 — Analisis Beban Kerja Mental Operator Logistik E-Commerce dengan Metode NASA-TLX dan Integrasi Work Sampling

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Analysis of Mental Workload of Shopee Express Partner Employees Using the NASA-TLX Method
**Jurnal & Sitasi Utama:** Muhammad Rafi, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.9385](https://doi.org/10.21070/ups.9385)
**Sitasi Pendukung:** M. Andre Aditya.R, Boy Isma Putra (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.11795](https://doi.org/10.21070/ups.11795)

---

## 1. Pendahuluan dan Konteks Industri

Sektor *e-commerce* di Indonesia mengalami ekspansi eksponensial sejak 2020, didorong oleh adopsi digital yang dipercepat pandemi dan penetrasi *smartphone* lebih dari 78% populasi (BPS, 2023). Shopee sebagai salah satu *platform* dengan pangsa pasar dominan mengandalkan model logistik *crowdsourced* melalui program **Shopee Express Partner (SE-Partner)** — di mana pekerja lepas (*gig worker*) menangani *last-mile delivery* dengan Sistem Bagi Hasil (*Sistema Bagi Hasil*/SBH) dan *routing* dinamis berbasis aplikasi. Sebagaimana ditegaskan oleh Rafi & Putra (2024, DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)), relasi kemitraan ini menciptakan **kontrak psikologis parsial** — pekerja menerima target pickup-delivery harian, namun tidak memiliki kepastian *rest period*, *shift scheduling*, atau *human factors engineering support* dari perusahaan *platform*.

Konteks operasional SE-Partner bersifat unik karena memadukan tiga dimensi beban kerja secara simultan:

1. **Beban fisik** — pengangkutan paket dengan bobot 1–15 kg menggunakan moda transportasi pribadi, dengan rute yang ditentukan algoritma *machine learning* yang belum tentu memperhitungkan ergonomi manusiawi.
2. **Beban kognitif** — *real-time decision making* mengenai prioritas rute, mitigasi *traffic congestion*, validasi kode OTP pelanggan, dan komunikasi simultan melalui *headset* serta *mobile application*.
3. **Beban temporal** — *Service Level Agreement* (SLA) pengiriman same-day (H+0) dan next-day (H+1) yang sangat ketat, dengan penalty demotivasi berbasis *rating* pelanggan.

Rafi & Putra (2024) menyoroti bahwa tanpa pengukuran ergonomis kuantitatif, pekerja mitra menghadapi risiko **cognitive overload** yang menurunkan kualitas layanan dan meningkatkan *human error rate* (DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)). Di sisi lain, Aditya.R & Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) membuktikan bahwa pada operator gudang (warehouse operator) konvensional, integrasi **NASA-TLX** dengan **Work Sampling** mampu memetakan korelasi antara alokasi waktu kerja dan persepsi beban mental. Kedua *insight* ini menjadi landasan strategis bagi perancangan *human factors framework* pada ekosistem *gig-economy logistics* Indonesia.

Urgensi penelitian ini bersifat empat lapis: (i) **ekonomi** — kehilangan produktivitas akibat *burnout* mitra; (ii) **keselamatan** — peningkatan risiko kecelakaan kerja pada *rider* yang kelelahan kognitif; (iii) **regulasi** — kepatuhan terhadap Permenaker No. 5/2018 tentang Keselamatan dan Kesehatan Kerja; serta (iv) **keberlanjutan SDM** — retensi pekerja pada sektor dengan *attrition rate* historis >60% per tahun.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Konsep Beban Kerja Mental (Mental Workload)

Beban kerja mental didefinisikan oleh *Human Factors and Ergonomics Society* (HFES, 2022) sebagai **total biaya fisiologis dan psikologis yang dikeluarkan operator untuk mencapai tingkat performa tertentu**. Berbeda dengan beban kerja fisik yang terukur langsung melalui denyut jantung atau konsumsi oksigen (oksigen uptake), beban mental memerlukan instrumentasi subjektif terstandar.

### 2.2 NASA-TLX (Task Load Index)

NASA-TLX adalah instrumen multidimensional yang dikembangkan oleh **Hart & Staveland (1988)** di NASA Ames Research Center. Instrumen ini mengukur beban kerja melalui **enam subskala** yang masing-masing dievaluasi menggunakan *paired comparison* dan *rating* pada skala bipolar 0–100:

| Simbol | Subskala | Domain Pengukuran |
|:---:|:---|:---|
| $MD$ | Mental Demand | Kebutuhan aktivitas berpikir & keputusan |
| $PD$ | Physical Demand | Kebutuhan aktivitas fisik |
| $TD$ | Temporal Demand | Tekanan waktu yang dirasakan |
| $EF$ | Effort | Kesungguhan usaha yang dikeluarkan |
| $FR$ | Performance | Pencapaian tujuan任务 |
| $FR_r$ | Frustration | Tingkat irritasi, stress, dan demoralisasi |

#### 2.2.1 Perhitungan Bobot Relatif (Weight Factor)

Langkah pertama NASA-TLX adalah **Card Sort Task** — responden memilih salah satu dari 15 pasangan subskala yang paling berpengaruh terhadap beban kerjanya. Jumlah pilihan dikonversi menjadi bobot:

$$w_i = \frac{k_i}{\sum_{j=1}^{6} k_j}, \quad \text{dimana } \sum_{i=1}^{6} w_i = 1$$

dengan $k_i$ adalah frekuensi subskala $i$ terpilih dalam 15 perbandingan berpasangan.

#### 2.2.2 Perhitungan Raw TLX (Unweighted)

$$\text{RawTLX} = \sum_{i=1}^{6} R_i$$

dengan $R_i$ adalah *raw rating* subskala $i$ pada skala 0–100 (pembulatan kelipatan 5).

#### 2.2.3 Perhitungan Weighted TLX (Final Score)

$$\boxed{\text{TLX}_{\text{weighted}} = \sum_{i=1}^{6} w_i \cdot R_i}$$

Rafi & Putra (2024, DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)) mengadopsi formula ini untuk mengkuantifikasi beban kerja kognitif mitra Shopee Express, dengan skor berkisar teoretis 0–100 dan klasifikasi sebagai berikut:

$$\text{TLX}_{\text{weighted}} \begin{cases} 0 \le \text{TLX} < 25 & \Rightarrow \text{Rendah} \\ 25 \le \text{TLX} < 50 & \Rightarrow \text{Sedang} \\ 50 \le \text{TLX} < 75 & \Rightarrow \text{Tinggi} \\ 75 \le \text{TLX} \le 100 & \Rightarrow \text{Sangat Tinggi} \end{cases}$$

### 2.3 Work Sampling (Pengukuran Waktu Kerja)

Untuk mengkorelasikan persepsi subjektif dengan alokasi waktu aktual, Aditya.R & Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) mengintegrasikan NASA-TLX dengan **Work Sampling** — teknik observasi sesaat (*instantaneous observation*) yang dikembangkan dari teori probabilitas.

#### 2.3.1 Penentuan Jumlah Pengamatan

Jumlah observasi minimum untuk tingkat keyakinan $(1-\alpha)$ dan *error* allowable $S$:

$$n = \frac{Z_{\alpha/2}^{2} \cdot p \cdot (1-p)}{S^{2}}$$

dengan:
- $Z_{\alpha/2}$ = nilai z pada tingkat signifikansi (umumnya 1,96 untuk $\alpha=0,05$)
- $p$ = proporsi aktivitas yang diamati (diambil $p=0,5$ untuk worst-case)
- $S$ = *allowable error* (umumnya 0,05 atau 5%)

Untuk $Z=1,96$, $p=0,5$, $S=0,05$:

$$n = \frac{(1,96)^{2} \cdot 0,5 \cdot 0,5}{(0,05)^{2}} = \frac{3,8416 \cdot 0,25}{0,0025} = \frac{0,9604}{0,0025} = 384,16 \approx 385 \text{ observasi}$$

#### 2.3.2 Penentuan Waktu Siklus Pengamatan (Random Sampling)

Antar observasi dilakukan secara *random* dengan distribusi uniform menggunakan *random number generator*:

$$T_{\text{cycle}} = \frac{T_{\text{shift}}}{n}$$

dengan $T_{\text{shift}}$ adalah total durasi kerja harian. Untuk *shift* 8 jam (28.800 detik) dan $n=385$:

$$T_{\text{cycle}} = \frac{28.800}{385} \approx 74,8 \text{ detik/observasi} \approx 1 \text{ menit } 15 \text{ detik}$$

#### 2.3.3 Proporsi Aktivitas

$$P_i = \frac{x_i}{n} \times 100\%$$

dengan $x_i$ adalah jumlah observasi pada aktivitas $i$. Confidence interval 95%:

$$CI_{95\%} = P_i \pm Z_{\alpha/2} \sqrt{\frac{P_i(1-P_i)}{n}}$$

### 2.4 Korelasi Beban Mental–Aktivitas

Aditya.R & Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) mengusulkan model regresi linier untuk memetakan hubungan antara proporsi waktu pada aktivitas tertentu (variabel independen) dan skor NASA-TLX (variabel dependen):

$$\text{TLX}_j = \beta_0 + \sum_{i=1}^{k} \beta_i \cdot P_{ij} + \varepsilon_j$$

dengan $\beta_i$ adalah koefisien regresi aktivitas $i$ terhadap beban mental operator $j$, dan $\varepsilon_j$ adalah *error term*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Implementasi NASA-TLX di Lingkungan Mitra E-Commerce

Implementasi prosedural mengikuti protokol **Research Design** Rafi & Putra (2024, DOI: [10.21070/ups.9385](https://doi.org/10.21070/ups.9385)) yang di-*cross-validate* dengan prosedur Aditya.R & Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)):

```
┌─────────────────────────────────────────────────────────────┐
│ FASE 1: PREPARASI & ETIKA PENELITIAN                       │
│   ├─ Penyusunan informed consent mitra (anonimitas data)   │
│   ├─ Penetapan populasi & sampel (purposive sampling)       │
│   └─ Kalibrasi instrumen NASA-TLX ke Bahasa Indonesia       │
├─────────────────────────────────────────────────────────────┤
│ FASE 2: OBSERVASI WORK SAMPLING                            │
│   ├─ Penentuan n observasi (Rumus 2.3.1)                    │
│   ├─ Random time picker (Rumus 2.3.2)                       │
│   ├─ Klasifikasi aktivitas (10–15 kategori kerja)           │
│   └─ Eksekusi observasi oleh 2 observer (Cohen's κ >0.7)   │
├─────────────────────────────────────────────────────────────┤
│ FASE 3: PENGUMPULAN NASA-TLX                               │
│   ├─ Instrumen kuesioner digital (Google Forms/Qualtrics)   │
│   ├─ Card sort task (15 pairwise comparisons)               │
│   ├─ Raw rating 6 subskala (skala 0–100, step 5)           │
│   └─ Perhitungan weighted TLX (Rumus 2.2.3)                │
├─────────────────────────────────────────────────────────────┤
│ FASE 4: ANALISIS STATISTIK                                 │
│   ├─ Uji validitas & reliabilitas (Cronbach's α ≥ 0.7)      │
│   ├─ Uji normalitas (Shapiro-Wilk, p>0.05)                 │
│   ├─ Uji beda (independent t-test / Mann-Whitney U)         │
│   └─ Analisis korelasi Pearson/Spearman (r)                │
├─────────────────────────────────────────────────────────────┤
│ FASE 5: INTERPRETASI & REKOMENDASI                         │
│   ├─ Pemetaan aktivitas → rekomendasi ergonomis            │
│   ├─ Usulan redesign rute / rotasi shift                    │
│   └─ SOP baru untuk *platform* & dispatcher                │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 Diagram Alir Penghitungan Weighted TLX

```
[Start]
   ↓
[Card Sort 15 Pasangan]
   ↓
Hitung $k_i$ untuk masing-masing 6 subskala
   ↓
Hitung $w_i = k_i / \sum k_j$
   ↓
[Rating Skala 0-100]
   ↓
Hitung Raw TLX = $\sum R_i$
   ↓
Hitung Weighted TLX = $\sum w_i \cdot R_i$
   ↓
[Klasifikasi Beban]
   ├─ <25  : Rendah
   ├─ 25-49: Sedang
   ├─ 50-74: Tinggi
   └─ ≥75 : Sangat Tinggi
   ↓
[End]
```

### 3.3 Standar Operasional Pengumpulan Data

Mengacu pada Aditya.R & Putra (2024, DOI: [10.21070/ups.11795](https://doi.org/10.21070/ups.11795)) dan best practice IEA (International Ergonomics Association):

1. **Briefing pra-observasi** — observer tidak boleh mengganggu alur kerja operator; observasi dilakukan dari jarak minimal 5 meter dengan sudut pandang yang tidak menghalangi pergerakan.
2. **Kategorisasi aktivitas** — minimal 10 kategori utama: (a) perjalanan pickup, (b) sortir paket, (c) verifikasi kode, (d) komunikasi dengan pelanggan, (e) perjalanan delivery, (f) *idle time*, (g) *rest/microbreak*, (h) handling komplain, (i) pengisian laporan aplikasi, (j) inspeksi armada.
3. **Inter-observer reliability** — dua observer independen; koefisien Cohen's Kappa:

$$\kappa = \frac{P_o - P_e}{1 - P_e}$$

dengan $P_o$ = proporsi observed agreement, $P_e$ = proporsi expected agreement