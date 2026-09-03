# 2190 — Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Aviasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.5291672)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri aviasi komersial global menghadapi tantangan operasional yang unik karena karakteristik *capital-intensive*, regulasi ketat, dan tuntutan keselamatan absolut. Menurut Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)), armada pesawat modern dirancang untuk beroperasi selama 25–30 tahun, dengan siklus pemeliharaan yang terstruktur secara hirarkis (A-check, B-check, C-check, dan D-check) guna mempertahankan *airworthiness* dan mengoptimalkan ketersediaan operasional. Ketersediaan armada (*fleet availability*) merupakan metrik kunci bagi maskapai karena secara langsung menentukan kapasitas pendapatan, kepuasan pelanggan, dan kemampuan memenuhi *slot* bandara yang telah dialokasikan—di mana setiap jam *ground time* yang tidak terpakai berarti kerugian biaya oportunidad yang signifikan.

Zhou (2024) menyoroti bahwa meskipun *Reliability-Centered Maintenance* (RCM) telah diakui sebagai kerangka unggulan untuk mengkuantifikasi degradasi non-linier performa siklus hidup aset, implementasinya pada sistem kompleks seperti kebijakan MRO hirarkis A/B/C/D masih menghadapi keterbatasan literatur yang substansial. Kebijakan D-check yang merupakan *heavy maintenance* penuh (umumnya memakan waktu 1–2 bulan dan biaya jutaan USD per pesawat) menjadi bottleneck ketersediaan armada apabila tidak dijadwalkan secara optimal. Lebih lanjut, *partial refurbishment* yang dilakukan pada fase *mature-run* operasi pesawat menjadi strategi operasional yang semakin penting untuk memperpanjang interval D-check, namun membutuhkan model kuantitatif yang rigor untuk membuktikan optimalitasnya.

Urgensi ekonomi dari topik ini dapat dilihat dari data empiris industri: sebuah maskapai *full-service* dengan 100 armada pesawat narrow-body dapat kehilangan pendapatan hingga USD 50.000–150.000 per pesawat per hari ketika armada tidak tersedia akibat pemeliharaan yang tidak optimal. Dengan total *maintenance cost* menyumbang 10–15% dari *operating cost* maskapai, optimisasi kebijakan MRO bukan sekadar persoalan teknis melainkan keputusan strategis tingkat korporat. Zhou (2024) dalam studinya memperkenalkan kerangka kerja (*framework*) MRO yang mengintegrasikan siklus D-check penuh dan *partial refurbishment* selama fase mature-run, dengan optimisasi jadwal berdasarkan waktu operasi tersedia maksimum (*maximum available operation time*).

Tujuan utama dari modul ini** adalah memaparkan secara mendalam model matematis yang dikembangkan Zhou (2024), menerjemahkannya ke dalam prosedur rekayasa yang dapat diimplementasikan, serta menguji validitasnya melalui studi kasus kuantitatif. Pendekatan ini relevan tidak hanya untuk aviasi tetapi juga untuk industri lain dengan paradigma pemeliharaan hirarkis serupa, antara lain armada kereta api, armada truk kelas berat, instalasi turbin gas pembangkitan listrik, dan sistem konveyor pertambangan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Degradasi Non-Linier dan Distribusi Weibull

Zhou (2024) memodelkan degradasi komponen kritis pesawat menggunakan distribusi Weibull dengan parameter bentuk $\beta$ dan skala $\eta$, yang secara luas digunakan dalam *reliability engineering* untuk menangkap *infant mortality*, *useful life*, dan *wear-out* phases. Fungsi *reliability* diberikan oleh:

$$R(t) = e^{-(t/\eta)^{\beta}}, \quad \beta > 0, \eta > 0$$

di mana $\beta < 1$ menunjukkan *decreasing failure rate* (DFR) pada fase awal operasi komponen, $\beta = 1$ menandakan laju kegagalan konstan (distribusi eksponensial), dan $\beta > 1$ menunjukkan *increasing failure rate* (IFR) yang khas untuk *wear-out* komponen. Untuk komponen *airframe* dan *landing gear* pada fase mature-run, Zhou mengasumsikan $\beta \approx 2{,}5$ hingga $3{,}5$, mencirikan degradasi non-linier yang memerlukan kebijakan pemeliharaan preventif terstruktur.

### 2.2 Pemodelan Siklus Hidup Hirarkis A/B/C/D

Kebijakan MRO aviasi mengikuti siklus reguler dengan interval yang meningkat secara eksponensial. Zhou (2024) merumuskan hubungan antar-check sebagai berikut:

$$T_A < T_B < T_C \ll T_D, \quad \text{dengan} \quad T_{k+1} \approx k \cdot T_k$$

dengan nilai tipikal: $T_A = 400\text{–}600$ flight hours, $T_B = 6\text{–}8$ bulan, $T_C = 18\text{–}24$ bulan, dan $T_D = 6\text{–}12$ tahun. Setiap tingkatan *check* memiliki *scope* pekerjaan yang berbeda dan biaya yang meningkat secara non-proporsional. Biaya检修 kumulatif pada siklus ke-$k$ dapat dimodelkan sebagai:

$$C_k = C_0 + \alpha \cdot k^{\gamma}, \quad \gamma > 1$$

di mana $C_0$ adalah biaya检修 A-check dasar, $\alpha$ adalah koefisien skala, dan $\gamma > 1$ mencerminkan peningkatan biaya检修 yang lebih dari proporsional seiring bertambahnya kedalaman检修.

### 2.3 Availability Function (Fungsi Ketersediaan)

Metrik utama yang dioptimalkan Zhou (2024) adalah *long-run steady-state availability*, yang didefinisikan sebagai:

$$A_{\infty} = \frac{\text{MTBF (Mean Time Between Failures)}}{\text{MTBF + MTTR (Mean Time To Repair)}}$$

Untuk sistem dengan检修 preventif periodik dan inspeksi acak, *availability* dalam satu siklus检修 $T_k$ dapat dinyatakan sebagai:

$$A_k = \frac{T_{up,k}}{T_{up,k} + T_{down,k}}$$

di mana $T_{up,k}$ adalah waktu operasi terbang tersedia dalam siklus ke-$k$, dan $T_{down,k}$ adalah total *downtime* (检修 terjadwal +检修 korektif tidak terjadwal). Untuk seluruh siklus hidup pesawat dengan $N$检修 D-check, ketersediaan rata-rata adalah:

$$\bar{A} = \frac{\sum_{i=1}^{N} T_{up,i}}{\sum_{i=1}^{N} (T_{up,i} + T_{down,i})}$$

### 2.4 Formulasi Optimasi

Masalah optimasi Zhou (2024) dapat diformulasikan secara matematis sebagai:

$$\max_{T_D, \tau_p} \bar{A}(T_D, \tau_p)$$

$$\text{subject to: } C_{total}(T_D, \tau_p) \leq B_{cap}, \quad \text{safety} \geq S_{min}, \quad T_D \leq T_{life,max}$$

di mana $T_D$ adalah interval检修 D-check, $\tau_p$ adalah interval *partial refurbishment* selama fase mature-run, $B_{cap}$ adalah *budget constraint*, dan $S_{min}$ adalah batas keselamatan regulatori. Zhou membuktikan eksistensi nilai optimal untuk model ketersediaan ini melalui teorema titik tetap dan kondisi *first-order optimality*:

$$\frac{\partial \bar{A}}{\partial T_D} = 0 \quad \text{dan} \quad \frac{\partial^2 \bar{A}}{\partial T_D^2} < 0$$

### 2.5 Renewal Reward Theorem

Untuk menghitung biaya检修 siklus hidup ekspektasian, Zhou menerapkan *Renewal Reward Theorem*:

$$\lim_{t \to \infty} \frac{C(t)}{t} = \frac{E[C_{cycle}]}{E[T_{cycle}]}$$

di mana $E[C_{cycle}]$ adalah biaya检修 ekspektasian per siklus dan $E[T_{cycle}]$ adalah panjang siklus ekspektasian. Pendekatan ini menyederhanakan analisis siklus hidup panjang dengan mereduksinya menjadi karakteristik satu siklus representatif.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Implementasi Lima-Fase

Berdasarkan kerangka Zhou (2024), implementasi kebijakan MRO hirarkis berbasis RCM mengikuti prosedur lima fase terstruktur:

**Fase 1 — Akuisisi Data & Karakterisasi Degradasi:**
Pengumpulan data historis检修 (logbook, *work orders*, *shop findings*) minimal 5 tahun ke belakang untuk seluruh komponen kritis. Estimasi parameter Weibull menggunakan *Maximum Likelihood Estimation* (MLE) atau *Kaplan-Meier* untuk data tersensor. Uji kebaikan suai (*goodness-of-fit*) menggunakan *Anderson-Darling* atau *Kolmogorov-Smirnov*.

**Fase 2 — Segmentasi Hirarki检修:**
Pemetaan setiap komponen ke dalam salah satu tingkatan检修 (A/B/C/D) berdasarkan tingkat kritikalitas keselamatan (mengikuti standar SAE JA1011/SAE JA1012), dampak operasional, dan visibilitas degradasi. Hasilnya berupa *decision logic diagram* yang menentukan apakah检修 preventif perlu dilakukan.

**Fase 3 — Penjadwalan检修 & Partial Refurbishment:**
Optimisasi $T_D$ dan $\tau_p$ menggunakan algoritma optimasi seperti *Dynamic Programming* atau *Genetic Algorithm*. Zhou merekomendasikan solver MILP (Mixed-Integer Linear Programming) ketika kendala检修 bersifat integer (jumlah检修, *threshold* parameter).

**Fase 4 — Simulasi & Validasi:**
Simulasi Monte Carlo terhadap skenario operasional (variasi utilisasi harian, *delay* tidak terjadwal, *unscheduled maintenance*) untuk mengestimasi distribusi $\bar{A}$. Validasi silang dengan *historical baseline* dan *benchmark* industri (IATA, ICAO).

**Fase 5 — Implementasi & Continuous Improvement:**
Roll-out kebijakan检修 baru dengan *pilot project* pada 5–10% armada, diikuti *full deployment* setelah validasi 6–12 bulan. Pemantauan KPI (Key Performance Indicators) secara real-time menggunakan *dashboards* digital.

### 3.2 Diagram Alir Logika Pengambilan keputusan检修

```
[Mulai] → [Identifikasi Komponen] → [Klasifikasi Kritikalitas]
                                           ↓
                            ┌──────────────┴──────────────┐
                            ↓                              ↓
                    [Komponen Kritis]              [Komponen Non-Kritis]
                            ↓                              ↓
                [Apakah Ada Degradasi           [Rutin Sesuai Jadwal]
                 yang Dapat Diprediksi?]
                    ↓              ↓
                [Ya]            [Tidak]
                    ↓              ↓
        [Rancang检修 Preventif]   [Rancang Fail-Find Inspection]
                    ↓
        [Tentukan Interval Optimal via Optimisasi]
                    ↓
        [Default Action (Reaktiv) atau Redesign]
                    ↓
                    [Selesai]
```

Diagram ini diadaptasi langsung dari kerangka analisis RCM Moubray (1997) yang diperluas oleh Zhou (2024) untuk konteks检修 hirarkis aviasi.

### 3.3 Standar Regulasi & Kepatuhan

Implementasi harus mematuhi standar internasional berikut:
- **EASA Part-M / Part-CAMO** (Uni Eropa) atau **FAA Part 121.367** (Amerika Serikat) untuk program检修航空公司.
- **MSG-3** (Maintenance Steering Group) untuk analisis检修任务 berbasis可靠性.
- **ATA MSG-3 Revision 2018.1** sebagai metodologi standar industri.
- **ISO 55000** untuk *Asset Management System*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input Industri

Pertimbangkan sebuah maskapai dengan armada 50 pesawat narrow-body (misal Boeing 737-800) yang beroperasi rata-rata 2.800 *flight hours* per tahun per pesawat. Berdasarkan data historis Zhou (2024) dan benchmark IATA, parameter berikut digunakan:

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Interval A-check ($T_A$) | 500 | flight hours |
| Interval B-check ($T_B$) | 6 | bulan |
| Interval C-check ($T_C$) | 20 | bulan |
| Interval D-check awal ($T_D^{(0)}$) | 8 | tahun |
| Durasi A-check | 24 | jam |
| Durasi B-check | 120 | jam |
| Durasi C-check | 720 | jam (30 hari) |
| Durasi D-check | 1.440 | jam (60 hari) |
| Biaya A-check ($C_A$) | 15.000 | USD |
| Biaya B-check ($C_B$) | 80.000 | USD |
| Biaya C-check ($C_C$) | 450.000 | USD |
| Biaya D-check ($C_D$) | 3.500.000 | USD |
| *Partial refurbishment* biaya ($C_P$) | 350.000 | USD |
| *Partial refurbishment* durasi ($\tau_p$) | 240 | jam (10 hari) |
| MTBF komponen kritis | 3.200 | flight hours |
| MTTR检修 korektif | 36 | jam |
| Parameter Weibull $\beta$ (airframe) | 2,8 | — |
| Parameter Weibull $\eta$ | 22.000 | flight hours |
| Utilisasi harian per pesawat | 9,5 | flight hours |
| Tingkat diskonto tahunan ($r$) | 8% | — |

### 4.2 Perhitungan Ketersediaan Baseline

**Langkah 1:** Hitung total *downtime*检修 terjadwal per sik