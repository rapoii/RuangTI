# 2238 — Optimasi Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Aviasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability – A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.5291672)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri aviasi global merupakan salah satu sektor *capital-intensive* yang paling sensitif terhadap kebijakan pemeliharaan, di mana satu unit pesawat narrow-body seperti Airbus A320 atau Boeing 737 memiliki nilai aset antara USD 50–110 juta per unit (Boeing Commercial Market Outlook, 2024). Dalam konteks ini, biaya operasional *Maintenance, Repair, and Overhaul* (MRO) menyumbang sekitar 10–15% dari total biaya operasional maskapai, menjadikannya pos biaya terbesar kedua setelah bahan bakar. Zhou (2024) menyoroti bahwa meskipun *Reliability-Centered Maintenance* (RCM) telah diakui secara luas sebagai pendekatan unggul untuk mengelola degradasi non-linier terhadap kinerja siklus hidup aset fisik, penerapannya pada sistem sekompleks hierarki kebijakan A/B/C/D *check* di sektor MRO aviasi masih menghadapi tantangan substansial.

Hierarki A/B/C/D *check* merupakan tulang punggung pemeliharaan terprogram pesawat udara: **A-check** dilakukan setiap 400–600 jam terbang (atau 2–3 bulan) berupa inspeksi ringan; **B-check** bersifat lebih komprehensif dengan interval 6–8 bulan; **C-check** merupakan inspeksi struktural mayor setiap 20–24 bulan dengan durasi *ground time* 1–2 minggu; serta **D-check** atau *Heavy Maintenance Visit* (HMV) yang berupa pembongkaran total (*teardown*) dan refurbishment penuh setiap 6–12 tahun dengan *downtime* mencapai 1–2 bulan. Kompleksitas bertambah ketika regulator (FAA, EASA) mensyaratkan kombinasi *task* inspeksi visual, *non-destructive testing* (NDT), dan *refurbishment* parsial selama fase operasional matang (*mature-run*) pesawat.

Urgensi ekonomis dari optimalisasi hierarki ini dapat diukur melalui metrik *fleet availability* (A). Studi Zhou (2024, DOI: 10.2139/ssrn.6387479) menunjukkan bahwa peningkatan availability sebesar 1% pada armada 100 unit pesawat narrow-body dapat menghasilkan pendapatan tambahan sekitar USD 18–25 juta per tahun melalui peningkatan *revenue flight hours*. Lebih signifikan lagi, optimalisasi interval A/B/C-check dapat mencegah *unscheduled removal* yang memiliki biaya insidensial 5–10 kali lipat dari *scheduled check*. Konteks inilah yang mendasari urgensi pengembangan kerangka kebijakan MRO berbasis RCM yang mampu mengkuantifikasi degradasi non-linier dan membuktikan eksistensi nilai optimal untuk model availability, sebagaimana kontribusi orisinal Zhou.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Degradasi Keandalan Komponen

Zhou (2024) membangun fondasi analisis dengan memodelkan degradasi komponen kritis menggunakan distribusi Weibull non-linier, yang merupakan standar de facto dalam RCM untuk sistem mekanis. Fungsi laju kegagalan (*hazard rate*) diberikan oleh:

$$\lambda(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}$$

di mana $\beta$ adalah parameter bentuk (*shape*), $\eta$ adalah parameter skala (*characteristic life*), dan $t$ adalah umur operasi. Untuk komponen struktural pesawat (misalnya *fatigue-critical* parts pada *wing spar*), $\beta > 1$ mengindikasikan regime *wear-out*, sedangkan untuk komponen avionik digital, $\beta \approx 1$ mendekati eksponensial.

### 2.2 Formulasi Ketersediaan Hirarkis (*Hierarchical Availability*)

Ketersediaan sesaat (*instantaneous availability*) untuk sistem dengan hierarki pemeliharaan A/B/C/D didefinisikan sebagai:

$$A(t) = \frac{T_{\text{up}}(t)}{T_{\text{up}}(t) + T_{\text{down}}(t)} = \frac{\mu}{\lambda + \mu}$$

dengan $\mu = 1/T_{\text{MTTR}}$ adalah laju perbaikan (*repair rate*) dan $\lambda = 1/T_{\text{MTBF}}$ adalah laju kegagalan. Namun, untuk kebijakan hierarkis, Zhou (2024) memperkenalkan *effective availability* yang memperhitungkan kontribusi downtime terjadwal dari masing-masing tingkatan check:

$$A_{\text{eff}} = \frac{\sum_{i \in \{A,B,C,D\}} f_i \cdot T_{\text{flight},i}}{\sum_{i} f_i \cdot T_{\text{flight},i} + \sum_{i} f_i \cdot T_{\text{down},i}}$$

dengan $f_i$ adalah frekuensi tahunan dari *check* tingkat $i$, $T_{\text{flight},i}$ adalah durasi terbang rata-rata antar *check*, dan $T_{\text{down},i}$ adalah waktu *ground time* untuk masing-masing check.

### 2.3 Optimasi Interval Pemeliharaan

Objektif utama Zhou adalah menentukan interval optimal $T_i^*$ untuk masing-masing tingkatan yang memaksimalkan ketersediaan tanpa mengorbankan margin keselamatan struktural. Fungsi tujuan (*objective function*) dinyatakan sebagai:

$$\max_{T_A, T_B, T_C, T_D} \quad A_{\text{fleet}}(T_A, T_B, T_C, T_D)$$

$$\text{subject to:} \quad C_{\text{total}}(T_A, T_B, T_C, T_D) \leq C_{\text{budget}}$$
$$P_{\text{failure}}(T_D) \leq P_{\text{critical}}$$

di mana $C_{\text{total}}$ adalah biaya pemeliharaan total, $C_{\text{budget}}$ adalah pagu anggaran maskapai, dan $P_{\text{critical}}$ adalah probabilitas kegagalan struktural yang dapat diterima (< 10⁻⁹ per jam terbang sesuai standar FAR 25.571).

### 2.4 Model Biaya Siklus Hidup (LCC)

Biaya siklus hidup per pesawat per tahun dimodelkan sebagai:

$$\text{LCC} = \sum_{i} \frac{C_i \cdot N_i}{L} + C_{\text{op}} + C_{\text{pen}} \cdot P_f$$

dengan $C_i$ adalah biaya per *check* tingkat $i$, $N_i$ jumlah *check* per siklus hidup, $L$ umur ekonomis pesawat (biasanya tahun), $C_{\text{op}}$ biaya operasional harian, $C_{\text{pen}}$ adalah biaya penalty dari kegagalan tak terjadwal, dan $P_f$ probabilitas kegagalan.

### 2.5 Bukti Eksistensi Nilai Optimal

Zhou (2024, DOI: 10.2139/ssrn.6387479) membuktikan secara matematis bahwa karena $A_{\text{fleet}}$ merupakan fungsi *quasi-concave* pada domain $(T_A, T_B, T_C, T_D)$ dan *constraint set* merupakan polytop cembung, maka terdapat nilai optimal unik yang dapat diselesaikan menggunakan Kuhn-Tucker conditions:

$$\nabla A_{\text{fleet}} = \sum_j \mu_j \nabla g_j(T^*) \quad \text{(KKT stationarity)}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kerangka kebijakan MRO hirarkis berbasis RCM mengikuti metodologi berbasis MSG-3 (Maintenance Steering Group – 3rd Edition) yang diadopsi oleh FAA dan EASA, dengan adaptasi dari formulasi Zhou (2024):

**Tahap 1: *System Definition & Functional Analysis***
- Dekomposisi pesawat menjadi *zone* ATA (Air Transport Association) 100-level
- Identifikasi fungsi sistem dan *failure modes* per *Significant Item*
- Penyiapan *Reliability Block Diagram* (RBD) untuk subsistem kritis

**Tahap 2: *Failure Mode and Effects Analysis* (FMEA)**
- Penentuan *severity* (katastrofal, hazardous, mayor, minor), *occurrence*, dan *detectability*
- Perhitungan *Risk Priority Number* (RPN) = S × O × D
- Klasifikasi komponen sebagai *safety-significant* atau *economic-significant*

**Tahap 3: *Maintenance Task Selection* (Decision Logic Tree)**
```
[Apakah kegagalan bersifat safety-significant?]
        │
        ├── Ya → Apakah dapat diprediksi? 
        │           ├── Ya → On-condition task (A/B-check)
        │           └── Tidak → Hard-time task (C/D-check)
        └── Tidak → Apakah memiliki consequence ekonomi?
                   ├── Ya → Combined task (predetermined refurbishment)
                   └── Tidak → Run-to-failure / No scheduled task
```

**Tahap 4: *Hierarchical Interval Optimization***
- Penentuan $T_A, T_B, T_C, T_D$ awal berdasarkan *manufacturer's maintenance planning document* (MPD)
- Iterasi menggunakan algoritma *sequential quadratic programming* (SQP) atau *genetic algorithm* untuk meminimalkan LCC sambil memenuhi constraint availability
- Validasi melalui simulasi Monte Carlo dengan 10.000 run

**Tahap 5: *Partial Refurbishment Scheduling* Selama *Mature-Run***
Zhou (2024) memperkenalkan inovasi berupa integrasi *partial refurbishment* (misalnya penggantian *leading edge* sayap, *cabin refurbishment*, *avionics upgrade*) pada interval antara D-check penuh, guna mempertahankan availability tanpa memperpendek interval inspeksi struktural mayor.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Maskapai regional mengoperasikan 20 unit Boeing 737-800 dengan rata-rata 3.200 jam terbang per pesawat per tahun. Parameter input industri (berdasarkan Zhou, 2024, dengan adaptasi):

| Parameter | Nilai | Simbol |
|---|---|---|
| Biaya A-check | USD 25.000 | $C_A$ |
| Biaya B-check | USD 250.000 | $C_B$ |
| Biaya C-check | USD 1.500.000 | $C_C$ |
| Biaya D-check | USD 5.000.000 | $C_D$ |
| Downtime A-check | 24 jam | $T_{\text{down},A}$ |
| Downtime B-check | 72 jam | $T_{\text{down},B}$ |
| Downtime C-check | 360 jam | $T_{\text{down},C}$ |
| Downtime D-check | 2.400 jam | $T_{\text{down},D}$ |
| Frekuensi terbang harian | 10 jam | $T_{\text{flight}}$ |
| Pendapatan per jam terbang | USD 8.500 | $R_h$ |

**Langkah 1: Perhitungan Frekuensi Check per Tahun**

Dengan interval standar: $T_A = 500$ jam, $T_B = 3.000$ jam, $T_C = 18.000$ jam, $T_D = 30.000$ jam:

$$f_A = \frac{3.200}{500} = 6{,}4 \text{ check/tahun}$$
$$f_B = \frac{3.200}{3.000} = 1{,}07 \text{ check/tahun}$$
$$f_C = \frac{3.200}{18.000} = 0{,}178 \text{ check/tahun}$$
$$f_D = \frac{3.200}{30.000} = 0{,}107 \text{ check/tahun}$$

**Langkah 2: Perhitungan Downtime Total Tahunan per Pesawat**

$$T_{\text{down,total}}