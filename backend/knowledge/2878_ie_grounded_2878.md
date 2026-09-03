# 2878 — Kebijakan Pemeliharaan Hirarkis Berpusat pada Reliabilitas untuk Memaksimalkan Ketersediaan Armada: Studi Sektor Perawatan, Perbaikan, dan Peremajaan (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan komersial global beroperasi di bawah rezim regulasi yang sangat ketat, di mana setiap pesawat komersial wajib menjalani siklus *Maintenance, Repair, and Overhaul* (MRO) berkala sesuai pedoman FAA Part 121, EASA Part-M, dan IATA Maintenance Cost Benchmarking. Hang Zhou (2024) dalam karyanya yang dipublikasikan dengan DOI [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479) menyoroti bagaimana kebijakan MRO tradisional—khususnya yang bersifat *fixed-interval*—seringkali gagal mengakomodasi karakteristik degradasi *non-linear* pada komponen kritis pesawat seperti *landing gear*, *auxiliary power unit* (APU), *high-pressure turbine*, dan struktur *airframe* yang mengalami *fatigue*.

Urgensi penelitian ini semakin nyata ketika memperhatikan skala ekonomi industri: menurut Boeing Commercial Market Outlook dan Airbus Global Services Forecast, pasar MRO penerbangan global bernilai lebih dari USD 100 miliar per tahun, dengan biaya *D-check* untuk pesawat narrow-body seperti Boeing 737 atau Airbus A320 dapat mencapai USD 3–5 juta per *event* dengan durasi *downtime* 30–60 hari. Zhou menekankan bahwa keputusan penjadwalan *check* A/B/C/D secara hirarkis akan secara fundamental menentukan *fleet availability ratio*, yang berdampak langsung pada revenue per available seat mile (RASM) maskapai. Lebih jauh, ketersediaan armada menjadi *bottleneck* strategis bagi operator, di mana keterlambatan satu hari *D-check* dapat merugikan maskapai hingga ratusan ribu dolar per pesawat akibat *lost revenue*, *lease penalties*, dan *crew displacement costs*.

Kontribusi orisinal paper ini, sebagaimana ditunjukkan pada versi lanjutan dengan DOI [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672), adalah pengembangan *framework* kebijakan MRO hirarkis yang mengintegrasikan siklus *full refurbishment* (D-check) dan *partial refurbishment* selama fase *mature-run* operasi pesawat, dengan optimasi berbasis *maximum available operation time*. Pendekatan ini menjawab kelemahan mendasar model RCM konvensional (seperti Moubray's RCM II) yang cenderung *static* dan tidak mempertimbangkan dinamika degradasi *power-law* pada fase akhir siklus hidup aset.

## 2. Landasan Teori & Formulasi Matematis

Zhou (2024) membangun model ketersediaan armada (*fleet availability*) dengan asumsi fundamental bahwa tingkat kegagalan komponen mengikuti fungsi intensitas non-stasioner yang merepresentasikan degradasi kumulatif. Formulasi matematis intinya adalah sebagai berikut.

### 2.1 Model Degradasi dan Keandalan Komponen

Intensitas kegagalan $\lambda(t)$ pada waktu operasi $t$ dimodelkan dengan *Power-Law Process* (Crow-AMSAA):

$$\lambda(t) = \alpha \beta t^{\beta-1}, \quad \alpha > 0, \ \beta > 0$$

di mana $\alpha$ adalah parameter skala dan $\beta$ adalah parameter bentuk (*shape*). Untuk $\beta > 1$, sistem menunjukkan karakteristik *wear-out* (penuaan); untuk $\beta = 1$, sistem stasioner; dan $\beta < 1$ mengindikasikan *infant mortality*.

Fungsi reliabilitas kumulatif:

$$R(t) = \exp\!\left(-\alpha t^{\beta}\right)$$

### 2.2 Formulasi Ketersediaan Hirarkis A/B/C/D

Kebijakan MRO yang diusulkan Zhou mendefinisikan empat tingkat intervensi dengan downtime rata-rata berturut-turut $T_A, T_B, T_C, T_D$ dan interval inspeksi $N_A, N_B, N_C, N_D$ (dalam *flight hours* atau *flight cycles*). Untuk sub-sistem yang diperbaiki secara *minimal* pada *check* A dan B, serta *overhaul* besar pada C dan D, *expected steady-state availability* armada diformulasikan sebagai:

$$A_{fleet} = \frac{\displaystyle\sum_{i \in \{A,B,C,D\}} \frac{N_i}{\lambda_i(N_i)}\left[1 - F_i(N_i)\right]}{\displaystyle\sum_{i \in \{A,B,C,D\}} \left[\frac{N_i}{\lambda_i(N_i)}\left[1 - F_i(N_i)\right] + T_i \cdot F_i(N_i)\right]}$$

di mana $F_i(N_i) = 1 - \exp(-\alpha_i N_i^{\beta_i})$ adalah probabilitas kumulatif kegagalan pada interval check ke-$i$.

### 2.3 Fungsi Tujuan Optimasi

Zhou (2024) membuktikan eksistensi *optimal availability value* melalui formulasi:

$$\max_{N_A, N_B, N_C, N_D} \ A_{fleet}(N_A, N_B, N_C, N_D)$$

*Subject to:*

$$N_A < N_B < N_C < N_D, \quad N_D \leq N_{D,max}$$

di mana $N_{D,max}$ adalah batas siklus maksimum sebelum *full refurbishment* wajib dilakukan (umumnya 12 tahun / 36.000 flight cycles untuk narrow-body). Solusi optimal dicari melalui *univariate search* pada setiap variabel keputusan dengan *convexity analysis* dari Hessian matriks.

### 2.4 Rasio Partial Refurbishment

Inovasi utama paper ini adalah parameter $\rho \in [0,1]$ yang merepresentasikan proporsi *partial refurbishment* selama fase *mature-run*:

$$T_D^{eff}(\rho) = \rho \cdot T_C + (1-\rho) \cdot T_D, \quad 0 \leq \rho \leq 1$$

Nilai $\rho$ optimal meminimalkan total *expected downtime* tanpa mengorbankan reliabilitas residual.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan MRO hirarkis berbasis RCM yang dikembangkan Zhou memerlukan SOP berlapis yang terdiri dari tujuh tahapan:

**Tahap 1 — Pemetaan Aset & Kritisitas.** Setiap komponen utama pesawat diklasifikasikan menggunakan *FMECA* (Failure Mode, Effects, and Criticality Analysis) sesuai standar SAE J1739 dan MSG-3 (Maintenance Steering Group-3) untuk penerbangan. Komponen dikategorikan menjadi kelas *safety-critical*, *mission-critical*, dan *economic-critical*.

**Tahap 2 — Akuisisi Data Operasional.** Pengumpulan *flight hours*, *flight cycles*, *unscheduled removal rate*, dan *shop visit data* selama minimal 24 bulan berturut-turut untuk estimasi parameter $\alpha_i$ dan $\beta_i$ melalui *Maximum Likelihood Estimation* (MLE).

**Tahap 3 — Fitting Model Degradasi.** Estimasi parameter model Crow-AMSAA dengan persamaan log-likelihood:

$$\ln L(\alpha,\beta) = n \ln \beta + n \beta \ln \alpha + (\beta-1)\sum_{j=1}^{n} \ln t_j - \alpha \sum_{j=1}^{n} t_j^{\beta}$$

**Tahap 4 — Penentuan Interval Check.** Menggunakan optimasi ketersediaant seperti pada Bagian 2.3.

**Tahap 5 — Penjadwalan Hirarkis.** Implementasi *master schedule* dengan integrasi ke *ERP* seperti SAP MRO atau AMOS (Aviation Maintenance and Engineering Operations System).

**Tahap 6 — Partial Refurbishment Planning.** Eksekusi overhaul parsial berbasis target *components* dengan wear margin mendekati threshold.

**Tahap 7 — Monitoring & Recalibration.** Update parameter $\alpha, \beta$ setiap 6 bulan berdasarkan data aktual menggunakan *Bayesian updating*.

Arsitektur teknologi pendukung mencakup *Computerized Maintenance Management System* (CMMS) tier-1, *digital twin* untuk prediksi degradasi, dan dashboard *Key Performance Indicator* (KPI) yang mencakup *fleet availability*, *on-time check completion*, *unscheduled removal rate* (URT), dan *technical dispatch reliability* (TDR).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai ilustrasi implementasi, perhatikan satu komponen kritis *APU* (model APS-3200) pada pesawat Airbus A320neo yang dioperasikan oleh maskapai regional Asia Tenggara dengan *block hour* harian rata-rata 10 jam dan 2.5 flight cycle per hari.

**Parameter Input Industri:**

| Parameter | Simbol | Nilai |
|---|---|---|
| Flight cycle harian | $f_c$ | 2.5 |
| Block hour per cycle | $t_c$ | 4.0 jam |
| Parameter skala APU | $\alpha$ | 1.2 × 10⁻⁵ |
| Parameter bentuk | $\beta$ | 1.85 |
| Downtime A-check | $T_A$ | 4 jam |
| Downtime B-check | $T_B$ | 18 jam |
| Downtime C-check | $T_C$ | 240 jam (~10 hari) |
| Downtime D-check | $T_D$ | 720 jam (~30 hari) |

**Langkah 1 — Penentuan Interval A-Check Optimal:**

Untuk sub-sistem dengan karakteristik *wear-out* ($\beta = 1.85$), kita hitung *expected availability* untuk beberapa kandidat interval:

$$A(N_A) = \frac{N_A \cdot R(N_A)}{N_A \cdot R(N_A) + T_A \cdot [1 - R(N_A)]}$$

Coba $N_A = 500$ flight cycles:

$$R(500) = \exp(-1.2 \times 10^{-5} \times 500^{1.85}) = \exp(-1.2 \times 10^{-5} \times 142{,}886.7) = \exp(-1.7146) = 0.1800$$

$$A(500) = \frac{500 \times 0.1800}{500 \times 0.1800 + 4 \times (1-0.1800)} = \frac{90.00}{90.00 + 3.28} = 0.9648$$

Coba $N_A = 600$ flight cycles:

$$R(600) = \exp(-1.2 \times 10^{-5} \times 600^{1.85}) = \exp(-2.4668) = 0.0849$$

$$A(600) = \frac{600 \times 0.0849}{600 \times 0.0849 + 4 \times 0.9151} = \frac{50.94}{50.94 + 3.66} = 0.9330$$

Coba $N_A = 400$ flight cycles:

$$R(400) = \exp(-1.2 \times 10^{-5} \times 400^{1.85}) = \exp(-0.9468) = 0.3879$$

$$A(400) = \frac{400 \times 0.3879}{400 \times 0.3879 + 4 \times 0.6121} = \frac{155.16}{155.16 + 2.448} = 0.9844$$

**Langkah 2 — Penentuan C-Check Optimal:**

Untuk C-check, $T_C = 240$ jam, dengan interval kandidat $N_C = 4.500$ dan $6.000$ flight cycles:

$$R(4500) = \exp(-1.2 \times 10^{-5} \times 4500^{1.85}) \approx \exp(-1.0454) = 0.3515$$

$$A(4500) = \frac{4500 \times 0.3515}{4500 \times 0.3515 + 240 \times 0.6485} = \frac{1581.75}{1581.75 + 155.64} = 0.9104$$

$$R(6000) = \exp(-1.2 \times 10^{-5} \times 6000^{1.85}) \approx \exp(-1.8594) = 0.1558$$

$$A(6000) = \frac{6000 \times 0.1558}{6000 \times 0.1558 + 240 \times 0.8442} = \frac{934.80}{934.80 + 202.61} = 0.8218$$

**Langkah 3 — Penentuan D-Check dengan Partial Refurbishment:**

Untuk $N_D = 12.000$ flight cycles dan rasio $\rho = 0.45$ (45% C-check, 55% D-check):

$$T_D^{eff}(0.45) = 0.45 \times 240 + 0.55 \times 720 = 108 + 396 = 504 \text{ jam}$$

$$R(12000) = \exp(-1.2 \times 10^{-5} \times 12000^{1.85}) \approx \exp(-6.5868) = 0.00139