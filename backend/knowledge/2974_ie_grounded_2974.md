# 2974 — Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Aviasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri aviasi komersial merupakan salah satu ekosistem *asset-heavy* dengan karakteristik operasional paling ketat di dunia. Sebuah pesawat narrow-body modern seperti Boeing 737 atau Airbus A320 memiliki nilai aset USD 50–110 juta per unit, sehingga keputusan terkait siklus pemeliharaan (*maintenance, repair, and overhaul*/MRO) berdampak langsung terhadap profitabilitas operator, keselamatan penumpang, dan kepatuhan regulasi (Zhou, 2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)). Struktur kebijakan MRO aviasi secara historis terorganisir secara hirarkis menjadi empat tingkatan utama: **A-check** (rutin ringan, periodisitas ~400–600 flight hours), **B-check** (menengah, ~6–8 bulan), **C-check** (ekstensif, ~20–24 bulan), dan **D-check** atau *heavy maintenance visit* (full refurbishment, ~6–10 tahun). Dalam praktiknya, banyak operator telah mengadopsi paket inspeksi terpadu, namun esensi hirarki A/B/C/D tetap menjadi acuan regulator FAA, EASA, dan IATA.

Urgensi penelitian yang dikemukakan Zhou (2024) muncul dari dua tantangan struktural. Pertama, degradasi performa siklus-hidup (*life-cycle degradation*) bersifat **non-linear**: laju kerusakan komponen kritis seperti mesin turbin, struktur sayap, dan sistem avionik meningkat secara *bathtub-curve* setelah melewati fase *infant mortality* dan *useful life*. Kedua, biaya *downtime* sebuah pesawat komersial selama ground-time mencapai USD 100.000–250.000 per hari, sehingga peningkatan ketersediaan (*availability*) armada sebesar 1–2% saja dapat menyelamatkan maskapai dari kerugian ratusan juta dolar per tahun (Zhou, 2024). Zhou berargumen bahwa meskipun *Reliability-Centered Maintenance* (RCM) diakui luas untuk mengkuantifikasi degradasi non-linear tersebut, penerapan RCM pada kebijakan hirarkis A/B/C/D tetap menghadapi komplikasi karena (1) interdependensi antar-tingkat检修, (2) keberagaman *failure mode* komponen, dan (3) kebutuhan akan *trade-off* antara *fully refurbished D-check* dengan *partial refurbishment* selama fase *mature-run*.

Konteks ekonomi global mempertegas urgensi ini. Menurut literatur pendukung Zhou (2024, DOI: [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)), pasar MRO aviasi global bernilai USD 116,7 miliar pada 2024 dan diproyeksikan mencapai USD 175 miliar pada 2034, didorong oleh meningkatnya usia rata-rata armada pasca-pandemi. Dalam lanskap ini, kemampuan merancang kebijakan MRO yang memaksimalkan ketersediaan tanpa mengorbankan keselamatan menjadi *differentiator* kompetitif utama. Makalah Zhou (2024) oleh karena itu memperkenalkan **kerangka kerja kebijakan MRO** yang mengintegrasikan *fully refurbished D-check cycles* dengan *partial refurbishments* selama fase matang operasional, dengan optimasi penjadwalan berdasarkan *maximum available operation time* dan pembuktian matematis atas keberadaan nilai optimal model ketersediaan.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Model Ketersediaan Hirarkis

Ketersediaan intrinsik (*intrinsic availability*) sistem hirarkis didefinisikan sebagai:

$$A_i = \frac{MTBF_i}{MTBF_i + MTTR_i}$$

Untuk armada dengan kebijakan MRO hirarkis empat tingkat, ketersediaan agregat dapat diformulasikan sebagai:

$$A_{fleet} = \frac{T_{op}^{total}}{T_{op}^{total} + \sum_{k \in \{A,B,C,D\}} n_k \cdot d_k}$$

di mana $T_{op}^{total}$ adalah total waktu operasi tersedia dalam satu siklus hidup, $n_k$ adalah jumlah检修 tingkat $k$, dan $d_k$ adalah rata-rata *ground-time* per检修 tingkat $k$. Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) membuktikan bahwa untuk kebijakan optimal, rasio antar检修 mengikuti:

$$\frac{n_A}{n_B} = \frac{T_A}{T_B}, \quad \frac{n_B}{n_C} = \frac{T_B}{T_C}, \quad \frac{n_C}{n_D} = \frac{T_C}{T_D}$$

dengan $T_k$ merepresentasikan interval periodisitas检修 tingkat $k$.

### 2.2. Model Degradasi Non-Linear

Degradasi komponen kritis mengikuti distribusi Weibull dengan parameter bentuk $\beta > 1$ (wear-out phase):

$$R(t) = e^{-\left(\frac{t}{\eta}\right)^{\beta}}$$

dengan $\eta$ adalah *characteristic life* dan $\beta$ adalah parameter bentuk yang mengendalikan non-linearitas. Untuk komponen avionik $\beta \approx 1,8$, struktur fatik $\beta \approx 2,5$, dan mesin turbin $\beta \approx 3,2$ (Zhou, 2024).

### 2.3. Partial Refurbishment Model

Inovasi utama Zhou (2024) adalah pemodelan *partial refurbishment* sebagai faktor reduksi usia efektif $\alpha_k$:

$$t_{eff}^{(k)} = t \cdot \alpha_k, \quad 0 < \alpha_k < 1$$

Untuk检修 C parsial, $\alpha_C \approx 0,6-0,75$, yang berarti usia efektif komponen berkurang 25–40% setelah检修, memberikan nilai tambah berupa perpanjangan interval sebelum D-check penuh berikutnya. Total usia efektif setelah satu siklus检修 hirarkis adalah:

$$t_{eff}^{total} = \sum_{k} \alpha_k \cdot \Delta t_k$$

di mana $\Delta t_k$ adalah interval waktu antara检修 tingkat $k$ berturut-turut.

### 2.4. Formulasi Optimasi

Masalah optimasi ketersediaan armada Zhou (2024) dirumuskan sebagai:

$$\max_{n_A, n_B, n_C, n_D} A_{fleet} = \frac{T - \sum_{k} n_k d_k}{T}$$

dengan kendala:

$$\sum_{k} n_k \Delta t_k = T, \quad n_k \in \mathbb{Z}^{+}, \quad R(t_{eff}^{total}) \geq R_{threshold}$$

Zhou (2024) membuktikan secara analitis **eksistensi nilai optimal** menggunakan kondisi Karush-Kuhn-Tucker (KKT) yang dimodifikasi untuk kasus integer programming, dengan Lagrangian:

$$\mathcal{L} = \frac{T - \sum_k n_k d_k}{T} - \lambda \left(\sum_k n_k \Delta t_k - T\right) - \sum_k \mu_k n_k$$

Solusi optimal menghasilkan *trade-off curve* antara ketersediaan dan biaya siklus hidup, memungkinkan operator memilih konfigurasi yang sesuai dengan profil risiko dan strategi bisnis mereka.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan MRO hirarkis berbasis RCM mengikuti SOP berlapis yang distandardisasi dalam dokumen Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)):

**Tahap 1 — Pemetaan Sistem & Klasifikasi Komponen.** Menggunakan *Failure Mode, Effects, and Criticality Analysis* (FMECA), seluruh komponen pesawat diklasifikasikan ke dalam tujuh kategori kritis RCM sesuai SAE JA1012. Setiap komponen diidentifikasi *failure mode*, *failure effect*, *failure consequence*, dan strategi检修 yang sesuai (reactive, preventive, predictive, proaktif).

**Tahap 2 — Penentuan Interval Hirarkis.** Berdasarkan data historis *Mean Time Between Failure* (MTBF) dan analisis biaya siklus hidup, interval检修 dihitung menggunakan formula interval RCM klasik:

$$T_{pm,i} = \frac{T_{BD,i}}{2} \cdot f(R_i)$$

di mana $T_{BD,i}$ adalah waktu ke *breakdown* komponen $i$ dan $f(R_i)$ adalah faktor reliabilitas yang disesuaikan dengan mode kerusakan.

**Tahap 3 — Optimasi Kebijakan Hirarkis.** Algoritma optimasi dua tahap diterapkan: (a) *heuristic search* untuk menentukan jumlah检修 setiap tingkat dalam satu siklus hidup; (b) *nonlinear programming* untuk menentukan timing检修 yang memaksimalkan *time on wing* antara检修 mayor.

**Tahap 4 — Implementasi Partial Refurbishment.** Selama fase *mature-run* (usia komponen 50–80% dari characteristic life $\eta$),检修 C diterapkan dengan cakupan parsial yang difokuskan pada komponen dengan $\beta$ tinggi dan *failure consequence* kategori mayor. Cakupan检修 mencakup inspeksi boroskopis, *non-destructive testing* (NDT), dan replacement sub-komponen wear-prone.

**Tahap 5 — Monitoring & Feedback Loop.** Sensor IoT dan sistem *Aircraft Health Monitoring* (AHM) memberikan data *real-time* yang dimasukkan ke dalam *digital twin* pesawat, memungkinkan kalibrasi ulang parameter $\beta$, $\eta$, dan $\alpha_k$ secara berkala melalui Bayesian updating.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus: Optimalisasi MRO Armada Airbus A320ceo (Operator Maskapai Regional Asia Tenggara)**

**Parameter Input Industri:**

| Parameter | Nilai |
|---|---|
| Total siklus hidup target ($T$) | 60.000 flight hours (FH) |
| Interval A-check ($T_A$) | 500 FH |
| Downtime A-check ($d_A$) | 8 jam |
| Interval B-check ($T_B$) | 2.000 FH |
| Downtime B-check ($d_B$) | 48 jam |
| Interval C-check ($T_C$) | 8.000 FH |
| Downtime C-check ($d_C$) | 720 jam (30 hari) |
| Interval D-check ($T_D$) | 24.000 FH |
| Downtime D-check ($d_D$) | 4.800 jam (200 hari) |
| Partial refurbishment factor $\alpha_C$ | 0,65 |
| Total jam operasi per tahun | 3.000 FH |

**Langkah 1: Hitung Jumlah检修 Tiap Tingkat**

$$n_A = \frac{T}{T_A} = \frac{60.000}{500} = 120 \text{ A-checks}$$

$$n_B = \frac{T}{T_B} = \frac{60.000}{2.000} = 30 \text{ B-checks}$$

$$n_C = \frac{T}{T_C} = \frac{60.000}{8.000} = 7,5 \approx 7 \text{ C-checks}$$

$$n_D = \frac{T}{T_D} = \frac{60.000}{24.000} = 2,5 \approx 2-3 \text{ D-checks}$$

**Langkah 2: Total Downtime Konfigurasi Baseline (tanpa partial refurbishment)**

$$\sum n_k d_k = (120 \times 8) + (30 \times 48) + (7 \times 720) + (2 \times 4.800)$$

$$= 960 + 1.440 + 5.040 +