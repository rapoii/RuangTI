# 2558 — Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimumkan Ketersediaan Armada: Studi Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — Studi pada Sektor MRO Penerbangan
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Case Study on Optimization of Hierarchical MRO Policy*. Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability*. Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan komersial global menghadapi tantangan struktural yang unik dalam pengelolaan siklus hidup aset: di satu sisi, biaya acquisition sebuah pesawat narrow-body generasi baru berkisar USD 50–120 juta, sementara di sisi lain, downtime satu jam akibat *grounding* check dapat menimbulkan kerugian revenue USD 18.000–150.000 tergantung rute dan kelas armada (Zhou, 2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)). Kombinasi antara intensitas modal yang sangat tinggi, standar keselamatan regulatorik yang ketat (FAA Part 121, EASA Part-M, dan ICAO Annex 6), serta degradasi non-linear pada performa *life-cycle* komponen, menjadikan desain kebijakan pemeliharaan sebagai salah satu keputusan rekayasa paling kritikal dalam operasional *Maintenance, Repair, and Overhaul* (MRO).

Dalam ekosistem MRO penerbangan modern, kebijakan pemeliharaan dijalankan secara hirarkis melalui *check* berkode **A, B, C, dan D** — sebuah konvensi yang diwarisi dari era piston dan terus dipertahankan karena pertimbangan logistik, keselamatan, dan interoperabilitas dengan *airworthiness directives*. Pemeriksaan Tipe-A dilakukan setiap 400–600 *flight hours* (FH), Tipe-B setiap 6–8 bulan, Tipe-C setiap 20–24 bulan atau 4.000–6.000 FH, dan Tipe-D (*heavy maintenance visit*) setiap 6–12 tahun dengan downtime 1–2 bulan pada hanggar khusus (Zhou, 2024, DOI: [10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)). Meskipun secara empiris *check* berkala ini terbukti efektif untuk mengendalikan *failure modes*, Zhou (2024) menekankan bahwa *framework* tradisional tersebut memiliki kelemahan fundamental: tidak ada formulasi analitis yang menjamin ketersediaan armada (*fleet availability*) maksimum ketika interval check berubah seiring bertambahnya usia pesawat — khususnya pada fase *mature-run* antara dua D-check.

Urgensi ekonominya dapat dinilaisasi. Untuk sebuah operator menengah dengan 50 armada narrow-body, setiap peningkatan *fleet availability* sebesar satu poin persentase (misal dari 92% menjadi 93%) mewakili tambahan utilisasi tahunan sekitar **4.380 jam-block** per pesawat, atau secara agregat lebih dari 36.000 jam terbang — senilai USD 65–200 juta revenue tambahan per tahun sebelum memperhitungkan penghematan *lease*, *spare pool*, dan biaya *AOG* (*Aircraft on Ground*) yang diminimalisasi (Zhou, 2024). Oleh karena itu, optimisasi kebijakan pemeliharaan hirarkis bukan sekadar persoalan teknis, melainkan *strategic asset management* yang menentukan profitabilitas dan daya saing operator.

Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) mengajukan *framework* baru yang mengintegrasikan **Reliability-Centered Maintenance (RCM)** dengan *partial refurbishment* di fase mature-run, sehingga operator tidak harus menunggu D-check penuh untuk memulihkan *health index* komponen kritis. Inilah kontribusi orisinal paper: membuktikan secara matematis bahwa terdapat **nilai optimum** untuk availability model ketika variabel interval check dan tingkat refurbishment parsial divariasikan secara bersamaan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi *Fleet Availability* dalam Kebijakan A/B/C/D

Zhou (2024) mendefinisikan ketersediaan sesaat armada (*instantaneous availability*) sebagai rasio antara *mean uptime* terhadap total waktu siklus yang mencakup *uptime* dan *downtime* akibat seluruh jenis check. Untuk satu siklus penuh yang mencakup $n_A$ buah check-A, $n_B$ buah check-B, $n_C$ buah check-C, dan 1 buah check-D (sebelum *refurbishment* total), *fleet availability* dapat diformulasikan sebagai:

$$A = \frac{T_{cycle} - D_{total}}{T_{cycle}} = 1 - \frac{n_A \cdot d_A + n_B \cdot d_B + n_C \cdot d_C + d_D}{T_A n_A + T_B n_B + T_C n_C + T_D}$$

di mana:
- $T_A, T_B, T_C, T_D$ = interval check (dalam jam terbang atau bulan) untuk masing-masing tipe
- $d_A, d_B, d_C, d_D$ = *downtime* rata-rata per check (jam atau hari)
- $T_{cycle}$ = total *cycle time* penuh hingga D-check berikutnya
- $D_{total}$ = total downtime kumulatif dalam satu siklus

### 2.2 Model Degradasi *Non-Linear* dan *Partial Refurbishment*

Komponen kritis pesawat (mesin, *avionics*, *landing gear*, struktur) mengalami degradasi non-linear yang tidak dapat diasumsikan stasioner. Zhou (2024) menggunakan fungsi degradasi berbasis *power-law* untuk *health index* $H(t)$:

$$H(t) = H_0 - \beta \cdot t^{\alpha}, \quad 0 < \alpha < 1$$

dengan $\beta$ sebagai *degradation rate* dan $\alpha$ sebagai eksponen non-linearitas. Setelah *partial refurbishment*, *health index* dipulihkan sebesar proporsi $\gamma$ dari degradasi kumulatif:

$$H_{post} = H_{pre} + \gamma \cdot \beta \cdot t^{\alpha}, \quad 0 \leq \gamma \leq 1$$

### 2.3 Masalah Optimisasi

Masalah sentral yang dijawab paper adalah menentukan **vektor interval check optimal** $\mathbf{x}^* = (T_A^*, T_B^*, T_C^*, T_D^*)$ dan tingkat *partial refurbishment* $\gamma^*$ yang memaksimumkan *fleet availability*, dengan kendala bahwa $H(t) \geq H_{threshold}$ (ambang batas *airworthiness*) sepanjang siklus. Formulasi optimisasinya:

$$\max_{\mathbf{x}, \gamma} \; A(\mathbf{x}, \gamma) \quad \text{s.t.} \quad H(t) \geq H_{th}, \; T_A \leq T_B \leq T_C \leq T_D$$

Zhou (2024) membuktikan eksistensi dan ketunggalan optimum dengan menunjukkan bahwa fungsi tujuan *quasi-concave* pada domain fisibel, sehingga *gradient-based optimization* (misalnya *sequential quadratic programming*) konvergen ke global optimum.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi *framework* Zhou (2024) di lingkungan operator penerbangan mengikuti **delapan tahap SOP** berikut:

**Tahap 1 — Akuisisi Data Telemetri & Riwayat Check.** Integrasi data dari *Aircraft Health Monitoring System* (AHMS), *Centralized Maintenance Computer* (CMC), dan logbook *paperless* (kepatuhan FAA AC 91-90 / EASA Part-M Subpart C).

**Tahap 2 — Segmentasi Fase Siklus.** Pembagian siklus hidup pesawat menjadi tiga fase: *infant-run* (0–2 tahun), *mature-run* (2–10 tahun), dan *wear-out* (>10 tahun). Kebijakan MRO *partial refurbishment* hanya diaplikasikan pada fase *mature-run* ketika laju degradasi sudah dapat diprediksi secara deterministik.

**Tahap 3 — Estimasi Parameter Degradasi.** Estimasi $\alpha$ dan $\beta$ melalui regresi non-linear pada data historis kerusakan komponen.

**Tahap 4 — Penentuan $H_{threshold}$.** Penetapan *health index threshold* berbasis *Minimum Equipment List* (MEL) dan *Master Minimum Equipment List* (MMEL), dengan margin keselamatan regulatorik.

**Tahap 5 — Optimisasi Interval Check.** Iterasi numerik untuk mencari $T_A^*, T_B^*, T_C^*$ yang memaksimalkan availabilitas.

**Tahap 6 — Penjadwalan *Partial Refurbishment*.** Modul *refurbishment* parsial (misal *engine borescope inspection* + *landing gear overhaul* tanpa *cabin refurbishment*) dijadwalkan secara *opportunistic* bersamaan dengan C-check.

**Tahap 7 — Validasi Simulasi Monte Carlo.** Simulasi 10.000 skenario dengan variasi *failure rate* untuk mengukur robustness kebijakan.

**Tahap 8 — Audit & *Continuous Improvement*.** Tinjauan berkala setiap 6 bulan menggunakan KPI: *fleet availability*, *on-time performance* (OTP), dan *unscheduled removal rate* (URR).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Data Input Operasional (Armada Narrow-Body, Tipe A320ceo)

Berdasarkan parameter industri tipikal (Zhou, 2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)):

| Parameter | Nilai | Satuan |
|---|---|---|
| $T_A$ (interval A-check) | 500 | jam terbang |
| $T_B$ (interval B-check) | 7 | bulan |
| $T_C$ (interval C-check) | 24 | bulan |
| $T_D$ (interval D-check) | 10 | tahun |
| $d_A$ | 12 | jam |
| $d_B$ | 48 | jam |
| $d_C$ | 720 | jam (30 hari) |
| $d_D$ | 1440 | jam (60 hari) |
| Utilisasi harian | 8 | jam/hari |

### 4.2 Perhitungan Jumlah Check per Siklus

Dalam satu siklus D-check (10 tahun), dengan asumsi utilisasi 8 jam/hari × 350 hari/tahun = 2.800 FH/tahun:

$$n_A = \frac{T_D \times \text{FH/tahun}}{T_A} = \frac{10 \times 2.800}{500} = 56 \text{ check-A}$$

$$n_B = \frac{10 \times 12}{7} \approx 17 \text{ check-B}$$

$$n_C = \frac{10}{2} = 5 \text{ check-C}$$

### 4.3 Perhitungan Downtime Kumulatif

$$D_{total} = (56 \times 12) + (17 \times 48) + (5 \times 720) + (1 \times 1.440)$$
$$D_{total} = 672 + 816 + 3.600 + 1.440 = 6.528 \text{ jam}$$

### 4.4 Availability Baseline (Tanpa Optimisasi)

$$T_{cycle} = 10 \times 365 \times 24 = 87.600 \text{ jam}$$

$$A_{base} = 1 - \frac{6.528}{87.600} = 1 - 0,0745 = 0,9255 = 92,55\%$$

### 4.5 Penerapan *Partial Refurbishment* ($\gamma = 0,35$ pada C-check ke-3)

*Partial refurbishment* memungkinkan perpanjangan $T_C$ dari 24 menjadi 28 bulan karena *health index* pulih sebagian. Dengan *refurbishment*, downtime C-check justru turun menjadi 600 jam (efisiensi 17%):

$$D_{total}^{opt} = (56 \times 12) + (17 \times 48) + (5 \times 600) + (1 \times 1.440) = 5.928 \text{ jam}$$

$$A_{opt} = 1 - \frac{5.928}{87.600} = 0,9323 = 93,23\%$$

### 4.6 Interpretasi Manajerial

Peningkatan availability dari **92,55% menjadi 93,23%** (delta = **+0,68 poin**) untuk satu pesawat setara dengan tambahan utilisasi:

$$\Delta U = 0{,}68\% \times 87.600 = 595{,}7 \text{ jam/tahun}$$

Untuk armada 50 pesawat: **29.785 jam terbang/tahun** tambahan. Pada revenue *block hour* rata-rata USD 22.000, ini setara dengan **USD 655 juta** revenue incremental — angka yang secara langsung mengvalidasi kontribusi teoritis Zhou (2024) tentang *existence of an optimal value*.

---

## 5. Evaluasi Kritis, Aplikasi Lintas Sek