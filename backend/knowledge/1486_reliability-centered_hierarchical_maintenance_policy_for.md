# 1486 — Kebijakan Pemeliharaan Hirarkis Berpusat pada Reliabilitas untuk Memaksimalkan Ketersediaan Armada: Studi pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Aviasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability – A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri aviasi global merupakan salah satu sektor *asset-heavy* paling kompleks, di mana ketersediaan armada (*fleet availability*) menjadi penentu langsung profitabilitas operator, keselamatan penumpang, dan kelancaran rantai pasok logistik penumpang serta kargo. Menurut Zhou (2024) dalam studinya yang dipublikasikan dengan DOI [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479), degradasi kinerja pesawat sepanjang siklus hidupnya bersifat **non-linear**, sehingga pendekatan pemeliharaan berbasis waktu kalender atau siklus terbang semata terbukti suboptimal. Pengembangbiakan biaya *Maintenance, Repair, and Overhaul* (MRO) telah melampaui 100 miliar USD secara global, di mana biaya siklus D-check (heavy maintenance visit) untuk pesawat窄-body dan wide-body dapat menyentuh angka 3–6 juta USD per kunjungan, dengan downtime 1–2 bulan yang menghilangkan potensi pendapatan harian sebesar ratusan ribu USD per pesawat.

Urgensi ekonomis ini semakin diperparah oleh kenyataan bahwa interval standar A/B/C/D-check (A=light, B=routine, C=detailed, D=complete overhaul) yang diterapkan regulator FAA (FAR Part 121) dan EASA sebenarnya merupakan konservasi keselamatan, bukan optimasi ekonomi. Zhou (2024) dengan tegas menunjukkan bahwa **terdapat celah fundamental** antara interval pemeliharaan berbasis regulator dan interval berbasis *maximum available operation time*. Studi lanjutan dengan DOI [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672) memperkuat posisi bahwa pemodelan RCM (Reliability-Centered Maintenance) konvensional—yang umumnya diterapkan pada sistem sederhana—mengalami kesulitan signifikan ketika di-*scale-up* ke sistem kompleks hierarkis empat-level MRO aviasi.

Dalam konteks rekayasa sistem industri, persoalan ini dapat diformulasikan sebagai masalah optimasi kombinatorik dengan fungsi tujuan ketersediaan (*availability*) dan kendala biaya siklus hidup. Zhou (2024) memperkenalkan kerangka kebijakan MRO yang menggabungkan **D-check penuh** dengan **partial refurbishment** pada fase mature-run operasi pesawat, menjembatani kesenjangan antara pendekatan purely corrective dan purely preventive. Pendekatan ini tidak hanya memaksimalkan *available operation time*, tetapi juga membuktikan secara matematis keberadaan **nilai optimum** pada model ketersediaan yang diusulkan, sebuah kontribusi teoretis signifikan bagi literatur *maintenance scheduling* dan *reliability engineering*.

---

## 2. Landasan Teori & Formulasi Matematis

Zhou (2024) membangun model RCM hirarkis dengan empat tingkatan interval pemeliharaan $T_A, T_B, T_C, T_D$ yang merepresentasikan interval berturut-turut untuk A-check, B-check, C-check, dan D-check. Notasi formalnya:

$$\mathbf{T} = \{T_A, T_B, T_C, T_D\}, \quad \text{dengan } T_A < T_B < T_C < T_D$$

**Fungsi laju kegagalan (failure rate)** komponen kritis pesawat mengikuti distribusi **Weibull non-linear** yang mencerminkan fenomena *wear-out*:

$$\lambda(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1}$$

di mana $\beta$ adalah parameter bentuk (shape), $\eta$ adalah parameter skala (scale), dan $t$ adalah waktu operasi kumulatif. Untuk komponen avionik dan struktur pesawat, $\beta > 1$ mengindikasikan fase *aging*, sedangkan untuk sistem *on-condition* monitored seperti engine health monitoring (EHM), $\beta \approx 1$ (mendekati eksponensial).

**Fungsi reliabilitas** sistem sepanjang satu siklus D-check didefinisikan sebagai:

$$R(t) = \exp\left(-\int_0^t \lambda(u)\,du\right) = \exp\left(-\left(\frac{t}{\eta}\right)^{\beta}\right)$$

Indeks ketersediaan rata-rata (*steady-state availability*) untuk satu siklus penuh diperumum menjadi:

$$\bar{A}(T_A, T_B, T_C, T_D) = \frac{T_{\text{operative}}}{T_{\text{operative}} + T_{\text{maintenance}}}$$

Zhou (2024) menyusun ulang persamaan ini dengan membedakan waktu *partial refurbishment* (selama A/B/C-check) dari *full refurbishment* (D-check). Waktu total maintenance dalam satu horizon $H$ diberikan oleh:

$$T_M = N_A \cdot \tau_A + N_B \cdot \tau_B + N_C \cdot \tau_C + N_D \cdot \tau_D$$

dengan $\tau_i$ adalah durasi rata-rata check level $i$ dan $N_i$ adalah jumlah check level $i$ dalam horizon $H$, sedemikian rupa sehingga:

$$N_A = \left\lfloor\frac{T_D}{T_A}\right\rfloor, \quad N_B = \left\lfloor\frac{T_D}{T_B}\right\rfloor, \quad N_C = \left\lfloor\frac{T_D}{T_C}\right\rfloor$$

**Fungsi tujuan optimasi** yang dinyatakan Zhou (2024) adalah maksimisasi ketersediaan melalui pemilihan interval $T_i^*$:

$$\max_{T_A, T_B, T_C, T_D} \bar{A}(T_A, T_B, T_C, T_D)$$

$$\text{subject to: } C_{\text{total}}(T_A, T_B, T_C, T_D) \leq C_{\text{budget}}$$

dengan fungsi biaya total:

$$C_{\text{total}} = N_A c_A + N_B c_B + N_C c_C + N_D c_D + C_{\text{correction}}$$

Penulis membuktikan bahwa fungsi $\bar{A}(\mathbf{T})$ bersifat **quasi-concave** pada domain yang relevan, sehingga memiliki **global optimum unik**, yang merupakan kontribusi matematis utama makalah tersebut. Prosedur optimasi diselesaikan dengan **mixed-integer nonlinear programming (MINLP)** atau sebagai alternatif, dengan pendekatan *sequential quadratic programming* (SQP) yang diinisialisasi dari interval regulator standar.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan RCM hirarkis Zhou (2024) mengikuti arsitektur **lima-fase** yang harus diterapkan secara disiplin:

**Fase 1 — Akuisisi Data Telemetri & Historis.**
MRO operator mengumpulkan *continuous airworthiness maintenance program* (CAMP) records, *aircraft technical log* (ATL), *non-routine reports*, dan data *on-condition monitoring* (OCM) seperti engine boroscope inspection, APU vibration spectra, dan structural fatigue load spectra (per FAR 25.571 dan EASA CS-25). Periode data historis minimum yang direkomendasikan adalah 5 tahun operasi atau 3 full D-check cycles.

**Fase 2 — Pemodelan Degradasi Per Komponen.**
Setiap *significant item* (SI) diklasifikasikan sesuai *MSG-3 logic* menjadi kategori: (i) *Hard Time* (HT), (ii) *On-Condition* (OC), atau (iii) *Condition Monitoring* (CM). Estimasi parameter Weibull $\beta_i, \eta_i$ dilakukan dengan **Maximum Likelihood Estimation (MLE)** untuk data *time-to-failure* (TTF) atau *failure-censored* dari SI tersebut.

**Fase 3 — Penentuan Interval Hirarkis Optimal.**
Menggunakan model dari Bagian 2, dilakukan optimasi MINLP untuk menentukan $\{T_A^*, T_B^*, T_C^*, T_D^*\}$. Pada fase *mature-run*, *partial refurbishment* diizinkan di antara D-check untuk merestart reliabilitas parsial, yang secara matematis dimodelkan sebagai *virtual reset* parameter $\eta$.

**Fase 4 — Validasi Simulasi Monte Carlo.**
Sebelum implementasi lapangan, kebijakan baru divalidasi dengan simulasi **Monte Carlo** (minimal $10^5$ replikasi) untuk memverifikasi bahwa distribusi ketersediaan, biaya siklus hidup, dan *mean time between unscheduled removals* (MTBUR) memenuhi target Key Performance Indicator (KPI).

**Fase 5 — Implementasi & Audit Berkelanjutan.**
Kebijakan diterapkan dengan melibatkan *Maintenance Organization Exposition* (MOE) dan dilakukan audit *Reliability Programs* setiap 12 bulan sesuai standar ICAO Annex 6 Part I dan IATA Operational Safety Audit (IOSA).

Diagram alur keputusan untuk *triggering* antara A-check vs B-check menggunakan logika threshold berbasis *cumulative damage index*:

$$\text{IF } \sum_{k} \frac{n_k}{N_k} \geq 1 \Rightarrow \text{Trigger } B\text{-check, ELSE continue routine}$$

dengan $n_k$ adalah jumlah siklus aktual dan $N_k$ adalah *certified life limit* komponen $k$.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Pertimbangkan sebuah armada narrow-body Airbus A320neo milik maskapai regional, dengan parameter industri realistis sebagai berikut:

| Parameter | Nilai |
|---|---|
| $\tau_A$ (durasi A-check) | 24 jam (0.1 hari) |
| $\tau_B$ (durasi B-check) | 120 jam (5 hari) |
| $\tau_C$ (durasi C-check) | 720 jam (30 hari) |
| $\tau_D$ (durasi D-check) | 2.400 jam (100 hari) |
| $c_A$ | \$8.000 |
| $c_B$ | \$45.000 |
| $c_C$ | \$850.000 |
| $c_D$ | \$3.500.000 |
| $T_D$ (interval D-check) | 18.000 flight hours (FH) |

**Hitung jumlah masing-masing check dalam satu siklus D-check:**

$$N_A = \left\lfloor\frac{18.000}{600}\right\rfloor = 30, \quad N_B = \left\lfloor\frac{18.000}{3.000}\right\rfloor = 6$$

$$N_C = \left\lfloor\frac{18.000}{6.000}\right\rfloor = 3, \quad N_D = 1$$

**Waktu total maintenance per siklus D-check:**

$$T_M = 30(0.1) + 6(5) + 3(30) + 1(100) = 3 + 30 + 90 + 100 = 223 \text{ hari}$$

**Waktu operatif per siklus (asumsi 12 jam/hari operasional rata-rata):**

$$T_{\text{op}} = \frac{18.000 \text{ FH}}{12 \text{ FH/hari}} = 1.500 \text{ hari}$$

**Ketersediaan (availability) baseline:**

$$\bar{A}_{\text{baseline}} = \frac{1.500}{1.500 + 223} = 0{,}8706 = 87{,}06\%$$

Sekarang kita optimalkan $T_D^*$ dengan menyisipkan **partial refurbishment** setelah C-check ke-2 (yaitu di $T = 12.000$ FH), yang secara efektif merestart *reliability clock* komponen struktural sebesar 50%. Durasi refurbishment parsial diasumsikan $\tau_P = 15$ hari dengan biaya $c_P = \$400.000$.

**Jumlah partial refurbishment dalam satu siklus:**

$$N_P = \left\lfloor\frac{T_D}{T_P}\right\rfloor = \left\lfloor\frac{18.000}{12.000}\right\rfloor = 1$$

**Waktu maintenance baru dengan partial refurbishment:**

$$T_M' = 223 + 1(15) = 238 \text{ hari}$$

Namun, parameter Weibull yang di-*reset* menurunkan laju kegagalan efektif, sehingga waktu operasi bersih menjadi:

$$T_{\text{op}}' = 1.500 + \Delta T_{\text{extension}} = 1.500 + 60 = 1.560 \text{ hari}$$

**Ketersediaan baru:**

$$\bar{A}_{\text{new}} = \frac{1.560}{1.560 + 238} = 0{,}8676$$

Meskipun ketersediaan sedikit menurun secara kasual, total biaya per siklus turun signifikan:

$$C_{\text{new}} = 30(8.000) + 6(45.000) + 3(850.000) + 1(3.500.000) + 1(400.000) = 6.910.000$$

vs $C_{\text{baseline}} = 30(8.000) + 6(45.000) + 3(850.000) + 1(3.500.000) = 6.510.000$

**Biaya per flight hour (cost/FH):**

$$\text{Cost/FH}_{\text{new}} = \frac{6.910.000}{18.000} = \$383{,}9/\text{FH}$$

$$\text{Cost/FH}_{\text{baseline}} = \frac{6.510.000}{18.000} = \$361{,}7/\text{FH}$$

Analisis manajerial: dengan menyertakan *partial refurbishment* dan optimasi interval, operator harus melakukan trade-off antara peningkatan 5,7% biaya per FH dengan pengurangan downtime kumulatif yang menghasilkan tambahan revenue harian. Pada tarif charter harian \$80.000/pesawat, tambahan 60 hari operasi dalam siklus berarti **peningkatan revenue \$4,8 juta per