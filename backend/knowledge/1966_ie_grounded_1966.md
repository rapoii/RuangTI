# 1966 — Kebijakan Pemeliharaan Hirarkis Berpusat pada Reliabilitas untuk Memaksimalkan Ketersediaan Armada: Studi di Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — Studi di Sektor Aviation Maintenance, Repair, and Overhaul (MRO)
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan komersial global merupakan salah satu sistem sosioteknik paling kompleks dan padat modal di dunia. Sebuah pesawat窄-body modern seperti Airbus A320 atau Boeing 737 memiliki nilai kapital sekitar USD 50–110 juta per unit, sehingga keputusan terkait jadwal perawatan tidak hanya menentukan keselamatan penumpang tetapi juga profitabilitas operator, kapasitas utilisasi armada, dan struktur biaya operasional (Direct Operating Cost / DOC) yang menyumbang 60–70% dari total biaya maskapai (Zhou, 2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)). Dalam kerangka *Maintenance, Repair, and Overhaul* (MRO), regulator internasional — termasuk FAA, EASA, dan otoritas DGCA — menetapkan program *checks* periodik yang diklasifikasikan secara hirarkis menjadi **A-check, B-check, C-check, dan D-check**. Checks ini berturut-tutor dirancang untuk mengakomodasi tingkat degradasi komponen yang berbeda: mulai dari inspeksi ringan harian/mingguan (A-check, ~400–600 flight hours), inspeksi medium (B-check, ~6–8 bulan), inspeksi struktural mayor (C-check, ~20–24 bulan), hingga *heavy maintenance visit* berupa refurbishment total pesawat (D-check, ~6–10 tahun) (Zhou, 2024).

Urgensi ekonomis dari optimalisasi kebijakan ini semakin nyata di tengah tekanan industri pasca-pandemi COVID-19. Menurut IATA *Annual Review 2023*, maskapai global kehilangan pendapatan lebih dari USD 324 miliar selama periode 2020–2022, dan setiap jam *ground time* yang tidak perlu akibat kebijakan MRO yang suboptimal diterjemahkan menjadi kerugian langsung sebesar USD 8.000–25.000 per jam per pesawat窄-body, serta hingga USD 60.000 per jam per pesawat wide-body (Boeing *Commercial Market Outlook 2023*). Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) menekankan bahwa meskipun *Reliability-Centred Maintenance* (RCM) telah diakui sebagai pendekatan superior untuk mengkuantifikasi degradasi non-linear performa siklus-hidup aset dan mengoptimasi operasi melalui peningkatan keselamatan serta ketersediaan, implementasi RCM pada sistem kompleks seperti kebijakan MRO hirarkis A/B/C/D masih menghadapi tantangan teknis dan analitis yang signifikan.

Kontribusi utama paper Zhou (2024) adalah memperkenalkan *framework* kebijakan MRO yang mengintegrasikan dua elemen kritis: (i) siklus *fully refurbished D-check* penuh, dan (ii) *partial refurbishment* (perbaikan sebagian) yang dilakukan selama fase *mature-run* operasi penerbangan. Pendekatan ini secara eksplisit mengakui bahwa degradasi komponen avionik, struktural, dan propulsi tidak mengikuti laju linier, melainkan memiliki profil *wear-out* dan *infant-mortality* yang berbeda-beda. Lebih lanjut, paper ini membuktikan secara matematis bahwa *availability function* memiliki **nilai optimum global** — suatu properti penting yang tidak trivial dalam teori pemeliharaan stokastik dan Renewal Theory. Bukti eksistensi optimum ini menjadi landasan bagi manajer armada untuk menentukan interval *check* yang memaksimalkan ketersediaan tanpa mengorbankan margin keselamatan struktural (Zhou, 2024, DOI: [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)).

Dalam konteks rantai pasok penerbangan, optimalisasi ketersediaan armada (*fleet availability*) memiliki implikasi langsung terhadap: (1) kapasitas *slot* bandara yang terbatas, (2) jadwal rotasi awak pesawat dan awak kabin, (3) *revenue ton-kilometer* (RTK), dan (4) *total cost of ownership* (TCO) armada. Dengan demikian, kemampuan untuk menurunkan *maintenance-induced unavailability* sebesar 1–3% saja pada armada 100 pesawat setipe sudah setara dengan penghematan opportunity cost puluhan juta USD per tahun, tanpa menambah aset fisik baru.

---

## 2. Landasan Teori & Formulasi Matematis

Model analitis yang dikembangkan Zhou (2024) dibangun di atas empat pilar teori: (i) **Reliability-Centred Maintenance (RCM)** menurut standar SAE JA1011/SAE JA1012 dan MSG-3, (ii) **Renewal Reward Theory**, (iii) **Availability Function** dalam kerangka *steady-state*, dan (iv) **non-linear degradation modeling** dengan *Bathtub Curve* dan *limit state function*.

### 2.1. Kerangka Ketersediaan Steady-State

Untuk sebuah armada yang beroperasi dengan jadwal perawatan periodik, ketersediaan jangka panjang (*long-run availability*) didefinisikan sebagai:

$$A_{\infty} = \lim_{t \to \infty} \frac{T_{up}(t)}{T_{up}(t) + T_{down}(t)} = \frac{\text{MTBF}}{\text{MTBF} + \text{MTTR}}$$

dengan $T_{up}(t)$ adalah akumulasi waktu operasional (*uptime*), $T_{down}(t)$ adalah akumulasi waktu *ground* karena maintenance (*downtime*), **MTBF** adalah *Mean Time Between Failure*, dan **MTTR** adalah *Mean Time To Repair* (Zhou, 2024). Dalam konteks *scheduled maintenance* (seperti A/B/C/D-check), persamaan ini perlu dimodifikasi untuk memasukkan *preventive maintenance downtime* yang tidak terkait langsung dengan kegagalan.

### 2.2. Model Hirarkis dengan Renewal Cycles

Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) memformulasikan ketersediaan untuk satu siklus renewal panjang yang mengandung beberapa sub-siklus maintenance:

$$A = \frac{\sum_{i=1}^{n} U_i}{\sum_{i=1}^{n} U_i + \sum_{j=1}^{m} D_j}$$

di mana:
- $U_i$ = durasi *operational time* pada interval ke-$i$ (jam terbang atau hari kalender)
- $D_j$ = durasi *maintenance downtime* pada check ke-$j$
- $n$ = jumlah interval operasional dalam satu *renewal cycle* (misalnya, antara dua D-check)
- $m$ = jumlah *check event* dalam satu *renewal cycle*

Untuk kebijakan A/B/C/D standar, jumlah check dalam satu siklus renewal dapat diekspresikan sebagai:

$$m = n_A + n_B + n_C + 1$$

di mana $n_A$, $n_B$, $n_C$ berturut-tutor adalah jumlah A-check, B-check, dan C-check yang terjadi antara dua D-check berturutan (Zhou, 2024).

### 2.3. Model Degradasi Non-Linear

Karena degradasi komponen mengikuti profil *bathtub curve* dan *limit-state function*, Zhou (2024) memperkenalkan fungsi degradasi reliabilitas $R(t)$ yang non-linear:

$$R(t) = e^{-\int_0^t \lambda(\tau)\,d\tau}$$

dengan *hazard rate* $\lambda(t)$ berbentuk:

$$\lambda(t) = \begin{cases} \lambda_0 + \alpha t, & 0 \leq t \leq t_1 \quad \text{(infant mortality)} \\ \lambda_1, & t_1 < t \leq t_2 \quad \text{(useful life)} \\ \lambda_2 + \beta (t - t_2)^2, & t > t_2 \quad \text{(wear-out)} \end{cases}$$

di mana $\lambda_0, \lambda_1, \lambda_2$ adalah parameter *hazard rate* konstan per zona, sedangkan $\alpha, \beta$ adalah koefisien degradasi *infant mortality* dan *wear-out* (Zhou, 2024). Untuk komponen struktural pesawat, $\beta$ secara empiris bernilai antara $10^{-7}$ hingga $10^{-5}$ per flight-hour².

### 2.4. Formulasi Optimal Availability dengan Partial Refurbishment

Inovasi utama Zhou (2024) adalah memasukkan keputusan *partial refurbishment* $\delta \in [0,1]$ yang mewakili frasi reliabilitas yang dipulihkan selama C-check. Jika $R^-(T_C^-)$ adalah reliabilitas sesaat sebelum C-check, maka setelah *partial refurbishment*:

$$R^+(T_C^+) = R^-(T_C^-) + \delta \cdot \left[1 - R^-(T_C^-)\right]$$

Untuk $\delta = 1$, diperoleh *full refurbishment* (ekuivalen dengan D-check), sedangkan $\delta = 0$ menyiratkan C-check bersifat *minimal inspection only* (Zhou, 2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)). Availability kemudian menjadi fungsi dari variabel keputusan $T_A, T_B, T_C, T_D, \delta$:

$$A(T_A, T_B, T_C, T_D, \delta) = \frac{f_1(T_A, T_B, T_C, T_D)}{f_2(T_A, T_B, T_C, T_D, \delta)}$$

### 2.5. Theorem Eksistensi Optimum

Zhou (2024) membuktikan secara matematis (menggunakan *first-order dan second-order conditions* pada Lagrangian) bahwa terdapat nilai optimal **global** untuk $A$ pada domain kompak:

$$\frac{\partial A}{\partial T_j} = 0, \quad j \in \{A, B, C, D\}$$

dan Hessian definit negatif menjamin titik kritis merupakan *maximum*. Theorem ini menjadi landasan analitis bahwa **tidak ada *trade-off* fundamental** antara interval pemeliharaan panjang (mengurangi frekuensi downtime) dan pendeknya interval (meningkatkan reliabilitas) — selalu terdapat *sweet spot* yang dapat dikomputasi secara deterministik (Zhou, 2024, DOI: [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi *Reliability-Centered Hierarchical Maintenance Policy* mengikuti alur SOP yang distandardisasi oleh regulator penerbangan internasional. Berikut adalah arsitektur implementasi berdasarkan temuan Zhou (2024):

### 3.1. Diagram Alir Implementasi Kebijakan MRO Hirarkis

```
┌─────────────────────────────────────────────────────────┐
│ FASE 1: ANALISIS FUNGSI & FAILURE MODE (MSG-3)         │
│   → Identifikasi sistem signifikan pesawat              │
│   → Klasifikasi failure mode (evident/hidden/critical)  │
└────────────────────┬────────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────────────────┐
│ FASE 2: DATA ACQUISITION                                │
│   → Flight hours, cycles, hard landings                 │
│   → Pilot Reports (PIREPs), Maintenance Discrepancies   │
│   → ASR/SB/AD compliance log                            │
└────────────────────┬────────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────────────────┐
│ FASE 3: DEGRADATION MODELING                            │
│   → Estimasi λ(t) per komponen signifikan               │
│   → Parameter fitting (MLE / Bayesian)                  │
└────────────────────┬────────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────────────────┐
│ FASE 4: OPTIMIZATION PHASE                              │
│   → Penentuan T_A*, T_B*, T_C*, T_D*, δ*               │
│   → Validasi kendala regulasi (MSG-3, FAR Part 121)    │
└────────────────────┬────────────────────────────────────┘
                     ↓
┌─────────────────────────────────────────────────────────┐
│ FASE 5: DEPLOYMENT & CONTINUOUS MONITORING              │
│   → A-check: Visual + Functional Test (R-A)             │
│   → B-check: System Calibration (R-B)                   │
│   → C-check: Partial Refurbishment δ* (R-C)             │
│   → D-check: Full Refurbishment (R-D)                   │
└─────────────────────────────────────────────────────────┘
```

### 3.2. Prosedur Pelaksanaan per Tier

**A-Check (R-A) — Interval optimal $T_A^* \in [400, 600]$ FH:**
Dilakukan di *line maintenance hangar* dengan durasi 50–80 jam. Prosedur: inspeksi *walk-around*, *check hydraulic fluid*, *oil servicing*, *operational check* sistem avionik dasar, *tire inspection*. Personel: 4–6 teknisi bersertifikat FAA/EASA Part-66 (Zhou, 2024).

**B-Check (R-B) — Interval optimal $T_B^* \in [6, 8]$ bulan:**
Mulai melibatkan *base maintenance*. Inspeksi sistem lebih dalam termasuk *avionics operational check*, *engine performance trend monitoring*, *NDT (Non-Destructive Test)* awal pada area fatigue-critical. Durasi: 200–400 jam kerja.

**C-Check (R-C) — Interval optimal $T_C^* \in [18, 24]$ bulan:**
Terjadi *partial refurbishment* dengan fraksi $\delta^* \in [0.3