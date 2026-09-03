# 2798 — Optimasi Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada Pesawat di Sektor MRO Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri *Maintenance, Repair, and Overhaul* (MRO) penerbangan global merupakan salah satu ekosistem *asset-heavy* dengan karakteristik degradasi non-linear yang sangat kompleks. Menurut Zhou (2024) dalam tulisannya di SSRN dengan DOI [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479), penerapan *Reliability-Centered Maintenance* (RCM) menjadi semakin krusial karena kemampuan metodologi ini dalam mengkuantifikasi penurunan kinerja siklus hidup (*life-cycle performance degradation*) yang bersifat non-linear. Tanpa pendekatan berbasis keandalan, keputusan pemeliharaan cenderung mengandalkan pengalaman subjektif teknisi, sehingga menghasilkan jadwal yang tidak efisien dan meningkatkan risiko *unscheduled downtime*.

Konteks operasional penerbangan sipil internasional, sebagaimana diatur dalam dokumen ICAO Annex 6 dan regulasi FAA/EASA Part 121, mewajibkan operator pesawat komersial untuk mematuhi empat tingkatan inspeksi terstruktur: **A-check, B-check, C-check, dan D-check**. Pemeriksaan A dan B umumnya bersifat *light maintenance* yang dilakukan pada interval ratusan hingga ribuan *flight hours* (A-check setiap 400–600 FH; B-check setiap 6–8 bulan). C-check merupakan inspeksi mayor yang membutuhkan *hangar docking* selama 1–2 minggu, sedangkan D-check adalah *full refurbishment* yang membutuhkan *heavy maintenance* selama 1–2 bulan dan dilakukan setiap 6–12 tahun (Zhou, 2024, DOI [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)).

Urgensi ekonomis dari optimalisasi kebijakan pemeliharaan ini sangat nyata. Satu pesawat narrow-body seperti Airbus A320 yang bernilai sekitar USD 50 juta dapat membangkitkan pendapatan harian USD 80.000–120.000 ketika beroperasi. Sebaliknya, biaya *grounding* akibat pemeliharaan yang tidak optimal dapat menyebabkan kerugian operasional signifikan bagi maskapai. Lebih lanjut, Zhou (2024, [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) menekankan bahwa meskipun RCM secara teoretis sangat bermanfaat, implementasi RCM pada sistem kompleks seperti hierarki A/B/C/D pada penerbangan menghadapi kesulitan dalam pemodelan dan eksekusi di lapangan.

Oleh karena itu, paper Zhou (2024) mengajukan *framework* kebijakan MRO yang mengintegrasikan siklus D-check penuh dengan *partial refurbishment* yang dilakukan pada fase *mature-run* operasi pesawat. Pendekatan ini mengusulkan penjadwalan pemeriksaan pemeliharaan siklus hidup (*life-cycle maintenance checks*) yang dioptimasi berdasarkan **maksimum available operation time** dan membuktikan secara matematis keberadaan nilai optimal untuk model ketersediaan (*availability*). Dokumen modul ini akan menguraikan landasan teori, formulasi matematis, metodologi implementasi, hingga studi kasus kuantitatif berdasarkan kerangka yang dikembangkan Zhou (2024).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Availability Steady-State (Ketersediaan Tunak)

Ketersediaan armada (*fleet availability*) didefinisikan sebagai rasio antara waktu operasi (*uptime*) terhadap total waktu dalam satu siklus pemeliharaan, yang mencakup *uptime* dan *downtime*. Dalam konteks hirarkis MRO, Zhou (2024, [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) menggunakan *renewal reward theorem* untuk menetapkan ketersediaan jangka panjang (*long-run steady-state availability*):

$$A_\infty = \lim_{t \to \infty} \frac{\mathbb{E}[U(t)]}{t} = \frac{\sum_{i=1}^{n} \mu_i \cdot T_{up,i}}{\sum_{i=1}^{n} \mu_i \cdot T_{up,i} + \sum_{j=1}^{m} \nu_j \cdot T_{down,j}}$$

di mana:
- $T_{up,i}$ = durasi rata-rata operasi antara pemeriksaan tingkat ke-$i$ (misalnya antara A-check, B-check, C-check)
- $T_{down,j}$ = durasi rata-rata *grounding* untuk检修 tingkat ke-$j$
- $\mu_i$ = jumlah kejadian pemeriksaan tingkat $i$ dalam satu siklus D-check
- $\nu_j$ = jumlah kejadian检修 tingkat $j$

### 2.2 Model Degradasi Non-Linear

Zhou (2024) mengasumsikan laju degradasi komponen mengikuti fungsi *power-law* terhadap usia pakai (*age*), yang merepresentasikan keausan akibat *thermal cycling*, *vibration fatigue*, dan *corrosion creep*:

$$R(t) = e^{-\left(\lambda t\right)^\beta}$$

di mana:
- $R(t)$ = *reliability function* pada waktu $t$
- $\lambda > 0$ = parameter laju kegagalan (*failure rate*)
- $\beta > 1$ = parameter bentuk yang menghasilkan perilaku *non-linear* (untuk $\beta = 1$ diperoleh distribusi eksponensial standar)

### 2.3 Fungsi Tujuan Optimasi Ketersediaan

Sesuai kerangka Zhou (2024, [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)), masalah optimasi diformulasikan sebagai maksimisasi *availability* dengan variabel keputusan berupa interval检修 $x = (x_A, x_B, x_C, x_D) \in \mathbb{R}^4_{+}$:

$$\max_{x_A, x_B, x_C, x_D} \quad A(x) = \frac{\sum_{i} T_{up,i}(x_i)}{\sum_{i} T_{up,i}(x_i) + \sum_{j} T_{down,j}}$$

$$\text{subject to: } \quad x_A < x_B < x_C < x_D, \quad x_D \leq T_{life}$$

dengan $T_{life}$ adalah total *design life* pesawat. Karena fungsi $A(x)$ bersifat *quasi-concave* terhadap $x_i$ (berdasarkan eksistensi nilai optimal yang dibuktikan Zhou, 2024), maka metode *Lagrangian relaxation* atau *successive substitution* dapat digunakan untuk mencari solusi optimal.

### 2.4 Model Partial Refurbishment Effect

Inovasi utama paper ini adalah pengenalan efek *partial refurbishment* yang mengurangi laju degradasi efektif selama fase *mature-run* (yaitu antara dua D-check). Bentuk efektifitas *partial refurbishment* dimodelkan sebagai:

$$\lambda_{eff}(t) = \lambda_0 \cdot \prod_{k=1}^{K} \left(1 - \gamma_k \cdot \mathbb{1}_{\{t \in I_k\}}\right)$$

di mana $\gamma_k \in [0,1]$ adalah koefisien pemulihan akibat检修 parsial ke-$k$, dan $\mathbb{1}_{\{t \in I_k\}}$ adalah *indicator function* bahwa waktu检修 jatuh pada interval$I_k$.

### 2.5 Constraint Keselamatan Regulasi

Karena konteks penerbangan sipil, formulasi optimasi juga harus memenuhi batas regulasi:

$$T_{down,total} \leq T_{down,max}^{reg} \quad \text{(dari FAA/EASA)}$$

$$R(t_{inspection}) \geq R_{min}^{safety}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Framework Hierarkis MRO

Berdasarkan Zhou (2024, [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)), implementasi kerangka kebijakan pemeliharaan hirarkis mengikuti arsitektur berlapis:

```
┌─────────────────────────────────────────────────────────┐
│ LEVEL 4: D-CHECK (Full Refurbishment)                   │
│ Interval: 6-12 tahun | Downtime: 30-60 hari            │
│ Tasks: Complete teardown, paint, system overhaul       │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│ LEVEL 3: C-CHECK (Major Inspection)                    │
│ Interval: 20-24 bulan | Downtime: 7-14 hari            │
│ Tasks: Structural inspection, system testing           │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│ LEVEL 2: B-CHECK (Intermediate Maintenance)            │
│ Interval: 6-8 bulan | Downtime: 2-5 hari               │
│ Tasks: Detailed inspection of specific systems         │
└─────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────┐
│ LEVEL 1: A-CHECK (Light Maintenance)                    │
│ Interval: 400-600 FH | Downtime: 12-24 jam             │
│ Tasks: Visual inspection, lubrication, fluid check     │
└─────────────────────────────────────────────────────────┘
```

### 3.2 Prosedur Implementasi SOP

**Tahap 1 — Pengumpulan Data Historis:** Kumpulkan data historis 5–10 tahun berupa *mean time between failures* (MTBF), *mean time to repair* (MTTR), dan *flight hours* aktual untuk setiap subsistem pesawat (engine, avionics, hydraulics, landing gear, APU).

**Tahap 2 — Estimasi Parameter Degradasi:** Gunakan metode *maximum likelihood estimation* (MLE) untuk mengestimasi parameter $\lambda$ dan $\beta$ dari model degradasi:

$$\hat{\lambda}, \hat{\beta} = \arg\max_{\lambda, \beta} \prod_{i=1}^{n} f(t_i; \lambda, \beta)$$

**Tahap 3 — Penjadwalan Optimasi:** Jalankan algoritma optimasi (misalnya *interior-point method* atau *genetic algorithm* untuk kasus non-convex) untuk menentukan interval检修 optimal $x^*$.

**Tahap 4 — Validasi Monte Carlo:** Lakukan simulasi Monte Carlo sebanyak $N = 10{,}000$ iterasi untuk memvalidasi bahwa kebijakan optimal menghasilkan *expected availability* $\geq 95\%$ dengan *confidence interval* 95%.

**Tahap 5 — Implementasi Bertahap (*Pilot Project*):** Terapkan pada 2–3 pesawat dalam armada sebagai *pilot*, kemudian lakukan *rolling deployment* ke seluruh armada dalam horizon 24 bulan.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input untuk Airbus A320 Fleet

Misalkan sebuah maskapai penerbangan mengelola armada 10 unit Airbus A320 dengan karakteristik berikut (berdasarkan tipikal industri dan referensi Zhou, 2024):

| Parameter | Nilai | Satuan |
|---|---|---|
| Rata-rata *flight hours* harian | 8 | jam/hari |
| Rata-rata hari operasi/tahun | 320 | hari |
| Interval A-check ($x_A$) | 500 | FH |
| Interval B-check ($x_B$) | 8 | bulan |
| Interval C-check ($x_C$) | 22 | bulan |
| Interval D-check ($x_D$) | 8 | tahun |
| Downtime A-check | 0.5 | hari |
| Downtime B-check | 3 | hari |
| Downtime C-check | 10 | hari |
| Downtime D-check | 45 | hari |
| $\lambda$ (laju kegagalan dasar) | 0.0015 | per jam |
| $\beta$ (parameter bentuk) | 1.8 | — |

### 4.2 Perhitungan Availability Baseline

**Langkah 1:** Hitung jumlah检修 per siklus D-check (8 tahun = 64,000 FH atau sekitar 23,360 hari operasi):

- Jumlah A-check: $23{,}360 / 500 \approx 47$ kali (per pesawat)
- Jumlah B-check: $8 \times 12 / 8 = 12$ kali
- Jumlah C-check: $8 \times 12 / 22 \approx 4.36 \approx 4$ kali
- Jumlah D-check: 1 kali

Total检修 per siklus per pesawat:
-