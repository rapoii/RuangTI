# 1934 — Kebijakan Pemeliharaan Hirarkis Berpusat pada Reliabilitas untuk Memaksimumkan Ketersediaan Armada: Studi pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan global menghadapi tantangan operasional yang semakin kompleks, terutama dalam pengelolaan armada pesawat komersial yang memiliki siklus hidup teknis hingga 25–30 tahun. Biaya pemeliharaan, perbaikan, dan *overhaul* (MRO) menyerap proporsi signifikan dari total biaya operasional maskapai, berkisar antara 10% hingga 15% dari *operating expense* (OPEX), dan menjadi determinan utama ketersediaan armada (*fleet availability*) yang secara langsung berimplikasi pada pendapatan. Dalam konteks ini, Hang Zhou (2024) dalam studinya yang dipublikasikan melalui DOI [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479) mengajukan kerangka kebijakan pemeliharaan hirarkis A/B/C/D yang berpusat pada reliabilitas (*Reliability-Centered Maintenance*/RCM), dengan penekanan khusus pada optimalisasi penjadwalan antara *heavy maintenance visits* (D-check penuh) dan *partial refurbishment* yang dilakukan selama fase *mature-run* operasional pesawat.

Urgensi riset ini muncul dari dua fenomena simultan. Pertama, degradasi performa siklus hidup komponen dan struktur pesawat bersifat non-linear, sehingga pendekatan interval tetap (*calendar-based* atau *hour-based* deterministik) sering menghasilkan *over-maintenance* pada tahap awal dan *under-maintenance* pada tahap degradasi lanjut. Kedua, struktur biaya dan kompleksitas sistem pesawat modern — yang terdiri dari ribuan komponen dengan tingkat kritisitas yang heterogen — menuntut pendekatan *risk-based* yang mampu memetakan konsekuensi kegagalan (*consequence of failure*) terhadap keamanan, operasional, dan ekonomi. Zhou (2024) menunjukkan bahwa model ketersediaan (*availability model*) yang dikembangkannya memiliki nilai optimal eksistensial, yang berarti terdapat titik keseimbangan antara frekuensi inspeksi dan durasi downtime yang menghasilkan ketersediaan armada maksimum. Pendekatan ini sangat relevan bagi *Original Equipment Manufacturers* (OEM), operator *lessor*, maskapai penerbangan, dan penyedia MRO pihak ketiga yang beroperasi dalam ekosistem *power-by-the-hour* (PBH) dan *total operational support* (TOS).

Sektor MRO penerbangan global, yang menurut perkiraan *International Air Transport Association* (IATA) bernilai lebih dari USD 100 miliar per tahun, menjadi latar belakang strategis yang melatarbelakangi kebutuhan akan kebijakan pemeliharaan yang tidak hanya *safety-compliant* terhadap regulasi FAA Part 121, EASA Part-CAMO, dan ICAO Annex 6, tetapi juga optimal secara ekonomi. Penerapan RCM hirarkis yang dikaji Zhou (2024) berusaha menjembatani kesenjangan antara preskripsi regulasi dan optimalisasi matematis, sehingga keputusan pemeliharaan dapat ditranslasikan ke dalam keputusan investasi modal dan perencanaan kapasitas hangar secara lebih terukur. Studi lanjutan pada DOI [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672) memperluas kerangka analisis ini dengan menambahkan dimensi ketidakpastian operasional dan sensitivitas terhadap variabel eksternal seperti *load factor* dan utilisasi harian.

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoretis yang dibangun Zhou (2024) bertumpu pada tiga pilar: (i) teori renewal reward untuk siklus pemeliharaan, (ii) fungsi degradasi non-linear, dan (iii) optimasi ketersediaan sebagai fungsi dari interval inspeksi. Formulasi matematis inti dapat diuraikan sebagai berikut.

### 2.1 Model Degradasi Non-Linear

Degradasi performa komponen kritis pesawat dimodelkan menggunakan fungsi pangkat atau eksponensial dependen-waktu:

$$R(t) = R_0 \cdot e^{-\lambda(t) t}$$

di mana $R_0$ adalah reliabilitas awal saat commissioning (umumnya $R_0 = 1,0$), $\lambda(t)$ adalah *failure rate* yang bergantung waktu, dan $t$ adalah usia operasi (dalam *flight hours* atau *flight cycles*). Bentuk parametrik yang lazim digunakan dalam literatur RCM adalah model *Weibull* dengan parameter bentuk $\beta > 1$ yang menandakan *wear-out phase*:

$$\lambda(t) = \frac{\beta}{\eta} \left(\frac{t}{\eta}\right)^{\beta-1}$$

dengan $\eta$ sebagai *characteristic life* dan $\beta$ sebagai *shape parameter*. Untuk komponen struktural seperti *fuselage* dan *wing*, $\beta$ umumnya berada pada rentang 2,5–4,0.

### 2.2 Hirarki Pemeliharaan A/B/C/D

Sesuai standar industri penerbangan, hirarki check didefinisikan sebagai berikut:

| Level Check | Nama | Interval Tipikal | Durasi Downtime | Cakupan Aktivitas |
|---|---|---|---|---|
| A | *Line Maintenance Check* | 50–100 FH | 1–4 jam | Inspeksi harian/mingguan, *servicing* |
| B | *Light Maintenance Check* | 300–600 FH | 8–24 jam | Inspeksi mingguan/bulanan, penggantian komponen *consumable* |
| C | *Base Maintenance Check* | 12–24 bulan | 1–2 minggu | Inspeksi ekstensif, *non-destructive test* (NDT), overhaul sistem |
| D | *Heavy Maintenance Check* | 6–12 tahun | 1–3 bulan | *Complete strip-and-assess*, *cabin refurbishment*, modifikasi besar |

Zhou (2024) memformalkan total downtime sebagai fungsi dari jumlah check pada setiap level:

$$T_D(n_A, n_B, n_C, n_D) = n_A \cdot \tau_A + n_B \cdot \tau_B + n_C \cdot \tau_C + n_D \cdot \tau_D$$

di mana $n_i$ adalah jumlah check level $i$ dalam horizon perencanaan $T$, dan $\tau_i$ adalah durasi rata-rata downtime per check level $i$.

### 2.3 Model Ketersediaan Armada

Ketersediaan jangka panjang (*long-run availability*) dalam kerangka *renewal reward theorem* diformulasikan sebagai:

$$A(T) = \frac{T - T_D}{T} = 1 - \frac{T_D(T)}{T} = 1 - \frac{n_A \tau_A + n_B \tau_B + n_C \tau_C + n_D \tau_D}{T}$$

Zhou (2024) membuktikan bahwa untuk fungsi degradasi yang kontinu dan biaya downtime yang konveks, terdapat nilai $T^* \in [T_{\min}, T_{\max}]$ yang memaksimumkan $A(T)$, dengan kondisi optimum first-order:

$$\frac{\partial A(T)}{\partial T} = 0 \implies \frac{\partial T_D}{\partial T} = \frac{T_D}{T}$$

yang secara intuitif bermakna bahwa elastisitas downtime terhadap horizon perencanaan harus sama dengan rasio downtime terhadap horizon pada titik optimum.

### 2.4 Formulasi Optimasi

Masalah optimasi dinyatakan sebagai:

$$\max_{n_A, n_B, n_C, n_D} \quad A(n_A, n_B, n_C, n_D)$$
$$\text{subject to:} \quad \sum_{i \in \{A,B,C,D\}} n_i \tau_i \leq T_{\max}^{down}$$
$$n_i \geq 0, \; n_i \in \mathbb{Z}^+$$
$$R(t) \geq R_{\min} \; \forall t \in [0, T]$$

di mana $R_{\min}$ adalah reliabilitas minimum yang dapat diterima (umumnya 0,90 untuk komponen kritis Class A dan 0,80 untuk komponen Class B berdasarkan standar MSG-3).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan pemeliharaan hirarkis RCM mengikuti prosedur operasional standar yang disusun Zhou (2024) dalam tujuh tahap sistematis:

**Tahap 1 — Inventarisasi Sistem dan Pengumpulan Data Historis.** Tahap ini menghimpun *failure history*, *flight hours*, *flight cycles*, dan *incident reports* dari sistem *Continuing Airworthiness Management Organisation* (CAMO). Data minimal yang diperlukan adalah lima tahun data historis untuk menjamin signifikansi statistik.

**Tahap 2 — Functional Failure Analysis (FFA).** Setiap sistem utama pesawat diuraikan menjadi fungsi operasional, dan *failure modes* diidentifikasi menggunakan *Failure Mode and Effects Analysis* (FMEA) sesuai standar IEC 60812 dan SAE J1739.

**Tahap 3 — Decision Logic Tree (MSG-3).** Penerapan pohon keputusan MSG-3 untuk menentukan tipe tugas pemeliharaan: *hard time* (HT), *on-condition* (OC), *condition monitoring* (CM), atau *no scheduled maintenance*.

**Tahap 4 — Estimasi Parameter Degradasi.** Parameter Weibull $(\beta, \eta)$ diestimasi menggunakan *Maximum Likelihood Estimation* (MLE) atau *Bayesian inference* dengan prior distribusi dari data fleet global OEM.

**Tahap 5 — Penjadwalan Optimal.** Solusi optimum $(n_A^*, n_B^*, n_C^*, n_D^*)$ ditentukan menggunakan algoritma *dynamic programming* atau *genetic algorithm* untuk masalah optimasi integer non-linear.

**Tahap 6 — Validasi dan Simulasi Monte Carlo.** Hasil optimasi divalidasi menggunakan simulasi dengan 10.000 iterasi untuk menguji robustness terhadap variabilitas parameter.

**Tahap 7 — Implementasi dan Continuous Monitoring.** Hasil kebijakan dipantau melalui KPI seperti *dispatch reliability*, *schedule maintenance*, dan *technical dispatch delay rate*.

Arsitektur teknologi pendukung umumnya menggunakan *Computerized Maintenance Management System* (CMMS) terintegrasi dengan sistem *Aircraft Health Monitoring* (AHM) berbasis sensor IoT dan platform *digital twin* untuk prediksi *remaining useful life* (RUL).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai ilustrasi, pertimbangkan satu unit pesawat narrow-body (misal Airbus A320neo) dengan parameter operasional berikut:

| Parameter | Nilai | Simbol |
|---|---|---|
| Utilisasi harian | 10 jam | $u$ |
| Siklus operasi | 3,000 FH/tahun | $F$ |
| Karakteristik life struktur | 25,000 FH | $\eta$ |
| Shape parameter Weibull | 3,2 | $\beta$ |
| Downtime A-check ($\tau_A$) | 4 jam | $\tau_A$ |
| Downtime B-check ($\tau_B$) | 16 jam | $\tau_B$ |
| Downtime C-check ($\tau_C$) | 120 jam | $\tau_C$ |
| Downtime D-check ($\tau_D$) | 1,800 jam | $\tau_D$ |
| Reliabilitas minimum | 0,90 | $R_{\min}$ |

**Langkah 1 — Tentukan jumlah check per tahun.** Dengan interval standar industri:
- $n_A = 12$ (tiap bulan)
- $n_B = 4$ (tiap 3 bulan)
- $n_C = 1$ (tahunan)
- $n_D = 0,125$ (tiap 8 tahun)

**Langkah 2 — Hitung total downtime tahunan.**

$$T_D = (12)(4) + (4)(16) + (1)(120) + (0,125)(1800)$$
$$T_D = 48 + 64 + 120 + 225 = 457 \text{ jam/tahun}$$

**Langkah 3 — Hitung ketersediaan baseline.**

$$A = 1 - \frac{457}{3{,}000 \times 10 + 457} \approx 1 - \frac{457}{30{,}457} \approx 0,985 \text{ atau } 98,5\%$$

**Langkah 4 — Uji sensitivitas dengan penjadwalan modifikasi Zhou (2024).** Jika dilakukan *partial refurbishment* di tahun ke-4 dan ke-6 untuk menggantikan satu C-check penuh, maka downtime di tahun-tahun tersebut menjadi:

$$T_D^{\text{modif}} = 48 + 64 + 225 + 0,125 \times 1800 = 537 \text{ jam/tahun}$$

Namun, reliabilitas sistem meningkat signifikan:

$$R(8 \text{ tahun})_{\text{baseline}} = e^{-\left(\frac{8 \times 3000}{25000}\right)^{3,2}} \approx e^{-0,486} \approx 0,615$$
$$R(8 \text{ tahun})_{\text{modif}} = e^{-\left(\frac{4 \times 3000}{25000}\right)^{3,2}} \approx e^{-0,030} \approx 0,970$$

**Langkah 5 — Interpretasi manajerial.** Dengan kebijakan modifikasi yang menerapkan *partial refurbishment* sesuai rekomendasi Zhou (2024), reliabilitas struktural pada tahun ke-8 naik dari 61,5% menjadi 97,0%, jauh melampaui $R_{\min} = 0,90$. Tambahan downtime 80 jam per siklus partial-refurbishment (537 − 457) merupakan investasi yang sangat rasional mengingat kenaikan reliabilitas 35,5 poin persentase dan terhindarkannya *unscheduled removal* yang biayanya mencapai USD 50.000–150.000 per *event*.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Meskipun kontribusi Zhou (2024) signifikan dalam