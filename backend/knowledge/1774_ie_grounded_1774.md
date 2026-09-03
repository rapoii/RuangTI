# 1774 — Optimasi Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada pada Sektor Maintenance, Repair, and Overhaul (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan global merupakan salah satu ekosistem *asset-heavy* (padat modal) dengan karakteristik sistem yang sangat kompleks, di mana keputusan pemeliharaan satu komponen kritis—misalnya turbin pesawat—dapat menentukan keselamatan ratusan penumpang, profitabilitas operator, serta kredibilitas regulator internasional seperti EASA, FAA, dan CAAC. Dalam lanskap kompetisi *low-cost carrier* dan meningkatnya tekanan dekarbonisasi, *fleet availability* (ketersediaan armada) menjadi *Key Performance Indicator* (KPI) paling strategis bagi maskapai dan *Maintenance, Repair, and Overhaul* (MRO) provider. Berdasarkan kerangka *Reliability-Centered Maintenance* (RCM) yang dikemukakan oleh Hang Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)), industri aviasi mengelola degradasi *life-cycle performance* komponen secara non-linear melalui kebijakan pemeliharaan bertingkat A/B/C/D.

Kebijakan A/B/C/D checks merupakan standar de facto yang diatur dalam dokumen *Maintenance Programme* (MSG-3, EASA AMC M.A.302, ATA Spec 104) dan wajib dipenuhi untuk mempertahankan *Airworthiness Certificate*. Tipe A dan B adalah *light maintenance* yang dilakukan secara rutin pada *line maintenance* hangar (biasanya setiap 400–600 flight hours untuk A-check dan 6–8 bulan untuk B-check); C-check adalah *heavy maintenance* berkala yang mencakup inspeksi struktural, sistem avionik, dan *power-plant* secara mendalam (interval 20–24 bulan atau 6.000–10.000 flight cycles); sementara D-check adalah *full refurbishment* atau *structural inspection* yang memerlukan pembongkaran pesawat secara menyeluruh, pengecatan ulang, dan sertifikasi ulang (*zero-time* status). Zhou (2024) menekankan bahwa kombinasi antara D-check penuh dan *partial refurbishment* pada fase *mature-run* operasi pesawat menciptakan tantangan optimasi yang unik: di satu sisi, D-check mengembalikan reliabilitas mendekati kondisi出厂 (*as-good-as-new*), namun memerlukan *grounding time* 1–2 bulan yang menurunkan ketersediaan; di sisi lain, *partial refurbishment* memiliki downtime lebih pendek tetapi hanya memperbaiki sebagian degradasi (*as-good-as-old*).

Konteks ekonomi memperkuat urgensi studi ini. Setiap jam *ground time* pesawat narrow-body komersial seperti Airbus A320 atau Boeing 737 mewakili kerugian pendapatan operasional antara USD 8.000–15.000 per jam (berdasarkan *Operating Lease* rates dan *block hour revenue*). Oleh karena itu, memaksimumkan *available operation time* melalui penjadwalan interval A/B/C/D check yang optimal bukan sekadar persoalan teknis, melainkan keputusan rekayasa finansial bernilai miliaran dolar per tahun bagi industri. Zhou (2024, DOI: [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)) selanjutnya membuktikan secara matematis bahwa fungsi ketersediaan memiliki nilai optimum eksistensial pada interval maintenance tertentu, sehingga pendekatan optimasi kalkulus varian atau *metaheuristic* (Genetic Algorithm, Particle Swarm) menjadi relevan untuk diimplementasikan dalam *Maintenance Planning Tool* (MPT) berskala industri.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Degradasi dan Reliabilitas Non-Linier

RCM mengasumsikan bahwa reliabilitas sistem menurun secara non-linear terhadap waktu operasi kumulatif. Zhou (2024) memodelkan fungsi reliabilitas sebagai:

$$R(t) = e^{-\lambda(t) \cdot t}$$

di mana $\lambda(t)$ adalah laju kegagalan (*hazard rate*) yang bergantung waktu (*time-dependent*), umumnya mengikuti distribusi Weibull dengan parameter bentuk $\beta_w$ dan skala $\eta$:

$$\lambda(t) = \frac{\beta_w}{\eta}\left(\frac{t}{\eta}\right)^{\beta_w - 1}$$

Untuk $\beta_w > 1$ lazim merepresentasikan keausan komponen (*wear-out*), $\beta_w = 1$ adalah *random failure*, dan $\beta_w < 1$ adalah *infant mortality*. Pada tahap *mature-run* pesawat (usia > 8 tahun), $\beta_w > 1$ mendominasi, sehingga degradasi bersifat akseleratif.

### 2.2 Hierarki Kebijakan Pemeliharaan A/B/C/D

Kebijakan pemeliharaan hirarkis didefinisikan dengan vektor interval:

$$\mathbf{T} = (T_A, T_B, T_C, T_D)$$

di mana:
- $T_A$: interval A-check (flight hours, FH), tipikal $T_A \in [400, 600]$ FH
- $T_B$: interval B-check (waktu kalender, hari), tipikal $T_B \in [180, 270]$ hari
- $T_C$: interval C-check (flight cycles, FC), tipikal $T_C \in [6{,}000, 10{,}000]$ FC
- $T_D$: interval D-check (flight cycles, FC), tipikal $T_D \in [30{,}000, 45{,}000]$ FC

Setelah setiap C-check atau D-check, sistem dianggap mengalami *imperfect maintenance* dengan faktor efektivitas $q \in [0, 1]$:

$$R_{post}(t) = q \cdot R(t) + (1-q)$$

di mana $q = 1$ berarti *as-good-as-new* (perfect repair, hanya dicapai pada D-check penuh), $q = 0$ berarti *as-bad-as-old* (minimal repair), dan $0 < q < 1$ merepresentasikan *partial refurbishment* pada C-check.

### 2.3 Formulasi Fungsi Ketersediaan

Ketersediaan *steady-state* didefinisikan sebagai rasio *Mean Up Time* (MUT) terhadap total siklus:

$$A = \frac{\text{MUT}}{\text{MUT} + \text{MDT}} = \frac{\int_0^T R(u)\, du}{T}$$

di mana $T$ adalah periode renewal dan MDT (*Mean Down Time*) adalah *downtime* rata-rata akibat check:

$$\text{MDT} = \sum_{i \in \{A,B,C,D\}} \frac{n_i \cdot d_i}{T}$$

dengan $n_i$ jumlah check tipe $i$ per periode dan $d_i$ durasi downtime-nya (misalnya $d_A = 8$ jam, $d_B = 24$ jam, $d_C = 360$ jam, $d_D = 1{,}440$ jam).

### 2.4 Masalah Optimasi

Zhou (2024) merumuskan masalah optimasi sebagai berikut:

$$\max_{\mathbf{T}} \quad A(\mathbf{T}) = \frac{\sum_{i} n_i(\mathbf{T}) \cdot t_{op,i}}{\sum_{i} n_i(\mathbf{T}) \cdot t_{op,i} + \sum_{i} n_i(\mathbf{T}) \cdot d_i}$$

**Subject to:**
1. $T_A \leq T_A^{max}$, $T_B \leq T_B^{max}$, $T_C \leq T_C^{max}$ (batas regulasi MSG-3)
2. $0 < q_C < 1$ untuk C-check, $q_D = 1$ untuk D-check
3. $R(T_D) \geq R_{min}$ (ambang batas keselamatan, biasanya 0.85)

Eksistensi nilai optimum $\mathbf{T}^*$ dibuktikan melalui teorema titik tetap (*fixed-point theorem*) pada ruang Banach $L^2$, dengan kondisi cukup berupa kekontinuan $A(\mathbf{T})$ dan kekompakan domain $\mathcal{T}$.

### 2.5 Algoritma Solusi: Dynamic Programming Hirarkis

Karena masalah bersifat *mixed-integer non-linear programming* (MINLP), Zhou mengusulkan pendekatan *Dynamic Programming* (DP) hierarkis yang mendekomposisi masalah menjadi sub-masalah A/B dan C/D:

$$V(\mathbf{T}, t) = \max_{\mathbf{T}' \in \mathcal{T}} \left[ A(\mathbf{T}') + V(\mathbf{T}', t + \Delta t) \right]$$

dengan kompleksitas $O(N^4)$ untuk diskretisasi $N$ titik per dimensi, sehingga solvable pada komputer industri modern.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan pemeliharaan hirarkis RCM mengikuti kerangka SOP berlapis sebagai berikut:

**Fase 1 — Pengumpulan Data dan Profiling Aset**
1. Ekstraksi data telemetri dari *Aircraft Condition Monitoring System* (ACMS) dan *Flight Data Recorder* (FDR) selama minimum 24 bulan operasi.
2. Penentuan distribusi kegagalan komponen kritis menggunakan *Weibull Analysis* dengan metode *Maximum Likelihood Estimation* (MLE) dan validasi *Kolmogorov-Smirnov Test*.
3. Estimasi parameter $q$ (faktor efektivitas perbaikan) melalui *historical maintenance yield analysis*—misalnya dengan membandingkan *post-C-check dispatch reliability* terhadap baseline.

**Fase 2 — Pemodelan dan Simulasi**
1. Bangun model degradasi menggunakan *BlockSim* (ReliaSoft) atau *RENO* (Reliability Engineering Software) yang memuat reliabilitas semua *Line Replaceable Units* (LRU).
2. Kalibrasi model dengan data *unscheduled removal rate* dan *mean time between unscheduled removal* (MTBUR).
3. Simulasi Monte Carlo dengan 10.000 replikasi untuk memvalidasi fungsi ketersediaan $A(\mathbf{T})$.

**Fase 3 — Optimasi Interval**
1. Formulasikan masalah MINLP sesuai Persamaan (2.4).
2. Selesaikan menggunakan *Genetic Algorithm* (populasi 200, generasi 500) atau *Particle Swarm Optimization* dengan *inertia weight* adaptif.
3. Verifikasi solusi dengan simulasi *discrete-event* di *Arena Simulation* atau *FlexSim*.

**Fase 4 — Implementasi dan Audit**
1. Integrasikan $\mathbf{T}^*$ ke dalam *Maintenance Planning Document* (MPD) sesuai EASA Part-M dan FAA Part 121.
2. Lakukan *audit internal* terhadap *Engineering Order* (EO) dan *Service Bulletin* (SB) terkini.
3. *Continuous monitoring* melalui KPI: *Aircraft Availability* (target ≥ 92%), *Schedule Reliability* (target ≥ 95%), dan *Dispatch Reliability* (target ≥ 99%).

**Diagram Alir Logika Keputusan A/B/C/D Check:**

```
┌──────────────────┐
│ Flight Hours FH  │
│ atau siklus FC   │
└────────┬─────────┘
         ▼
   ┌──────────┐    Ya    ┌──────────┐
   │ FH mod   ├─────────►│ A-Check  │ (8 jam downtime)
   │ 400 =0?  │          └─────┬────┘
   └────┬─────┘                ▼
        │ Tidak          ┌──────────┐
        ▼                │ B-Check? │
   ┌──────────┐ 6 bln     └─────┬────┘
   │ Kalender ├───────────────►│ 24 jam downtime
   │ 180 hari?│                ▼
   └──────────┘            ┌──────────┐
                           │ C-Check? │ ──► 360 jam (partial)
                           └─────┬────┘
                                 ▼
                           ┌──────────┐
                           │ D-Check? │ ──► 1440 jam (full)
                           └──────────┘
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah operator *narrow-body* (A320-200) berusia 10 tahun dengan parameter berikut:

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Rata-rata utilisasi harian | 8 | jam/hari |
| Rata-rata flight cycles harian | 2.5 | FC/hari |
| Distribusi degradasi | Weibull ($\beta_w = 2.5$, $\eta = 18{,}000$ FH) | — |
| $T_A$ awal | 500 | FH |
| $T_B$ awal | 200 | hari |
| $T_C$ awal | 8{,}000 | FC |
| $T_D$ awal | 36{,}000 | FC |
| Durasi $d_A$ | 8 | jam |
| Durasi $d_B$ | 24 | jam |
| Durasi $d_C$ | 360 | jam |
| Durasi $d_D$ | 1{,}440 | jam |
| Efektivitas $q_C$ | 0.65 | — |
| Efektivitas $q_D$ | 1.00 | — |
| Periode analisis $T$ | 36{,}000 | FC |

**Langkah 1 — Hitung jumlah check per periode:**

$$n_A = \frac{8 \text{ jam/hari} \cdot 365 \cdot 12 \text{ tahun}}{500 \text{ FH}} \approx 70 \text{ checks}$$

$$n_C = \frac{36{,}000}{8{,}000} = 4.5 \Rightarrow 4 \text{ checks (dibulatkan