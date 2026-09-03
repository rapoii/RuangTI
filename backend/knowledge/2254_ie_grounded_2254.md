# 2254 — Kebijakan Pemeliharaan Hirarkis Berbasis Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan komersial merupakan salah satu sektor *capital-intensive* dengan tingkat kompleksitas sistem tertinggi di antara moda transportasi modern. Sebuah armada pesawat narrow-body modern (misalnya Boeing 737 atau Airbus A320) memiliki lebih dari 100.000 komponen yang saling berinteraksi, dengan siklus hidup desain mencapai 25–30 tahun. Dalam konteks ini, kebijakan Maintenance, Repair, and Overhaul (MRO) bukan sekadar fungsi pendukung, melainkan pilar strategis yang menentukan *fleet availability*, keselamatan operasional (*safety*), serta profitabilitas operator. Zhou (2024) dalam tulisannya yang dipublikasikan melalui *Social Science Research Network* (DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) menyoroti bahwa pendekatan *Reliability-Centered Maintenance* (RCM) telah menjadi kerangka kerja paling bernilai untuk industri berbasis aset berat (*asset-heavy industry*), karena mampu mengkuantifikasi degradasi non-linear kinerja siklus hidup dan mengoptimalkan operasi melalui peningkatan keselamatan serta ketersediaan.

Urgensi ekonomis dari kebijakan MRO ini dapat dilihat dari data industri: biaya MRO global mencapai USD 100 miliar pada 2024 dan diproyeksikan melebihi USD 130 miliar pada 2032, dengan porsi hampir 30% berasal dari operator di kawasan Asia-Pasifik. Setiap jam *ground time* pesawat narrow-body dapat menyebabkan kerugian pendapatan langsung sebesar USD 8.000–12.000. Oleh karena itu, kebijakan pemeliharaan yang tidak optimal tidak hanya meningkatkan biaya siklus hidup (*life-cycle cost*), tetapi juga menurunkan *dispatch reliability* dan akhirnya berdampak pada pangsa pasar maskapai. Kompleksitas struktural ini kemudian memunculkan kebutuhan akan kebijakan pemeliharaan hirarkis—yakni *A-check*, *B-check*, *C-check*, dan *D-check*—yang masing-masing memiliki karakteristik frekuensi, kedalaman inspeksi, dan *downtime* yang berbeda. Zhou (2024) menekankan bahwa meskipun RCM sangat bermanfaat, implementasi model ini menantang ketika diterapkan pada sistem kompleks seperti hierarki A/B/C/D dalam sektor penerbangan, sehingga memerlukan kerangka analitis yang memadukan *full refurbishment* (D-check) dengan *partial refurbishment* pada fase mature-run operasi (Zhou, 2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Degradasi Non-Linear Berbasis Distribusi Weibull

Zhou (2024) menggunakan formulasi degradasi Weibull untuk menangkap karakteristik *non-linear* kerusakan komponen kritis pesawat. Fungsi reliabilitas diberikan oleh:

$$R(t) = e^{-\left(\frac{t}{\eta}\right)^{\beta}}$$

di mana $\beta > 0$ adalah parameter bentuk (*shape parameter*) yang merepresentasikan mode kegagalan (peningkatan kegagalan karena penuaan, *wear-out*), dan $\eta > 0$ adalah parameter skala (*scale parameter*) dalam satuan jam terbang (*flight hour*, FH). Laju kegagalan sesaat menjadi:

$$\lambda(t) = \frac{\beta}{\eta} \left(\frac{t}{\eta}\right)^{\beta-1}$$

### 2.2 Formulasi Ketersediaan Jangka Panjang (*Long-Run Availability*)

Ketersediaan sesaat (*instantaneous availability*) pada interval siklus pemeliharaan periodik $T$ didefinisikan sebagai:

$$A(T) = \frac{\int_{0}^{T} R(t)\, dt}{T + T_{r}}$$

di mana $T_{r}$ adalah total *downtime* untuk inspeksi dan overhaul. Dengan Teorema *Renewal-Reward*, ketersediaan jangka panjang asimptotik menjadi:

$$\bar{A} = \lim_{n \to \infty} \frac{\sum_{i=1}^{n} U_i}{\sum_{i=1}^{n} (U_i + D_i)}$$

### 2.3 Kebijakan Hirarkis A/B/C/D dan Optimasi Interval

Zhou (2024) menyusun fungsi tujuan optimasi dengan memaksimalkan ketersediaan total armada, dengan empat variabel keputusan interval $(T_A, T_B, T_C, T_D)$ yang harus memenuhi hierarki berikut:

$$T_A < T_B < T_C < T_D$$

Formulasi optimasi lengkap:

$$\max_{T_A, T_B, T_C, T_D} \bar{A}_{hier}(T_A, T_B, T_C, T_D)$$

$$= \frac{T_{op}^{eff}}{T_{op}^{eff} + \sum_{i \in \{A,B,C,D\}} \frac{T_{cyc}}{T_i} \cdot T_{d,i}}$$

*dengan kendala*: $\ T_{op}^{eff} \geq T_{op}^{min}$ (jaminan waktu operasi minimum regulator), $\sum_{i} C_i \leq C_{budget}$ (kendala biaya tahunan), dan $T_{D} \leq T_{design}$ (batas usia desain struktural). Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) membuktikan secara analitis bahwa **terdapat nilai optimal unik** untuk model ketersediaan ini melalui eksistensi maksimum global fungsi kontinu pada domain kompak.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan pemeliharaan hirarkis mengikuti SOP sistematis berikut (sesuai kerangka Zhou, 2024):

**Tahap 1 — Inventarisasi Komponen Kritis (FMECA).** Lakukan analisis *Failure Mode, Effects, and Criticality Analysis* untuk mengidentifikasi komponen-komponen yang memerlukan kebijakan RCM khusus, dengan prioritas pada struktur (*airframe*), mesin, avionik, dan *landing gear*.

**Tahap 2 — Pengumpulan Data Operasional.** Akuisisi data historis berupa *flight hours*, *flight cycles*, MTBF/MTTR, dan rasio *unscheduled removal rate* (URR) minimal selama 36 bulan terakhir untuk kalibrasi parameter Weibull.

**Tahap 3 — Penentuan Interval Optimal.** Selesaikan masalah optimasi pada Persamaan (3)–(6) menggunakan algoritma *Sequential Quadratic Programming* (SQP) atau *Dynamic Programming* dengan diskretisasi interval $(\Delta T_A, \Delta T_B, \Delta T_C, \Delta T_D)$.

**Tahap 4 — Penjadwalan D-Check dan Partial Refurbishment.** Integrasikan *full D-check* (interval ~10 tahun atau 30.000 FH) dengan *partial refurbishment* yang dijadwalkan pada fase mature-run (yaitu, setelah tahun ke-4 hingga ke-9 siklus D-check) untuk menjaga tingkat reliabilitas antara dua *overhaul* penuh.

**Tahap 5 — Continuous Monitoring & Feedback Loop.** Implementasikan sistem sensor IoT (Engine Health Monitoring, Structural Health Monitoring) untuk memperbarui parameter $\beta, \eta$ secara *real-time* dan menyesuaikan interval pemeliharaan melalui pendekatan *Bayesian updating*.

Diagram alir logika keputusanhirarki: **[Trigger Event] → Cek Riwayat Komponen → Jika T < T_A → A-check; Jika T_A ≤ T < T_B → B-check; Jika T_B ≤ T < T_C → C-check; Jika T.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
