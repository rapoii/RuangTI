# 1838 — Kebijakan Pemeliharaan Hierarkis Berpusat pada Keandalan untuk Memaksimalkan Ketersediaan Armada: Studi pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Penerbangan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability — Studi pada Sektor Pemeliharaan, Perbaikan, dan Overhaul (MRO) Penerbangan
**Jurnal & Sitasi Utama:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability - A Study in the Aviation Maintenance, Repair, and Overhaul (MRO) Sector*. Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)
**Sitasi Pendukung:** Hang Zhou (2024). *Reliability-Centered Hierarchical Maintenance Policy for Maximizing Fleet Availability*. Peer-Reviewed Journal. DOI: [https://doi.org/10.2139/ssrn.5291672](https://doi.org/10.2139/ssrn.5291672)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan global merupakan salah satu sektor *asset-heavy* yang paling kompleks dan padat modal, di mana sebuah armada pesawat sipil narrow-body seperti Airbus A320 atau Boeing 737 memiliki harga katalog mencapai USD 100–120 juta per unit pada tahun 2024. Menurut Hang Zhou (2024) dalam tulisannya yang dipublikasikan di *Peer-Reviewed Journal* dengan DOI [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479), keberlanjutan operasional armada tidak lagi dapat dipandang sebagai fungsi tunggal melainkan sebagai sistem persamaan multi-variabel yang dipengaruhi oleh degradasi non-linier dari siklus-hidup (*life-cycle*) komponen kritis, regulasi otoritas penerbangan (seperti EASA Part-M, FAA FAR-121), serta fluktuasi permintaan seat-kilometer (RPK) yang sensitif terhadap siklus ekonomi global.

Urgensi ekonomis dari optimalisasi ketersediaan armada (*fleet availability*) muncul karena setiap satu jam *ground time* pesawat narrow-body menyebabkan hilangnya pendapatan *ticket sales* sebesar USD 8.000–15.000 dan pemberlakuan *compensation* kepada penumpang akibat keterlambatan. Pada skala maskapai besar dengan 200+ armada, kehilangan 1% ketersediaan setara dengan potensi kerugian tahunan USD 50–100 juta. Zhou (2024) menekankan bahwa *Reliability-Centered Maintenance* (RCM) muncul sebagai kerangka analitis yang tidak hanya mampu mengkuantifikasi degradasi non-linier dari kinerja siklus hidup, tetapi juga mengoptimalkan operasi dengan tetap mempertahankan dua tujuan strategis utama: *enhancing safety* dan *enhancing availability*.

Kompleksitas penerapan RCM di sektor penerbangan terletak pada struktur hierarkis dari program *maintenance check* yang telah menjadi standar de facto industri, yaitu pemeriksaan A, B, C, dan D. Setiap level check memiliki interval, cakupan (*scope*), durasi, dan biaya yang sangat berbeda. A-check dilakukan setiap 400–600 flight-hours dengan downtime 24–50 jam, C-check setiap 20–24 bulan dengan downtime 1–2 minggu, sedangkan D-check (*heavy maintenance visit*) merupakan full-refurbishment yang dilakukan setiap 6–12 tahun dengan downtime hingga 2 bulan dan biaya USD 4–8 juta per pesawat. Zhou (2024, DOI: 10.2139/ssrn.6387479) memperkenalkan sebuah *framework* kebijakan MRO yang menggabungkan siklus D-check yang sepenuhnya direfurbish dengan *partial refurbishments* selama fase *mature-run* operasi penerbangan, yang merupakan kontribusi orisinal signifikan terhadap literatur RCM klasik yang umumnya hanya membahas satu tingkat inspeksi. Pendekatan hierarkis ini secara langsung menjawab permasalahan *trade-off* klasik antara frekuensi inspeksi (yang menurunkan probabilitas kegagalan tersembunyi) versus waktu downtime (yang menurunkan ketersediaan), suatu dilema yang menurut Zhou (2024) belum dipecahkan secara analitis oleh framework RCM konvensional seperti SAE JA1011 atau MSG-3.

Konteks industri tahun 2024 juga ditandai oleh tiga disrupsi utama yang membuat optimalisasi ketersediaan menjadi *non-negotiable*: (1) *supply chain disruption* pada komponen CFM LEAP-1B dan PW1100G yang menyebabkan AOG (*Aircraft on Ground*) rate meningkat 18% YoY pada paruh pertama 2024; (2) implementasi *EASA Part-CAMO Regulation (EU) 2019/1383* yang menuntut justifikasi berbasis data untuk setiap interval maintenance; dan (3) tekanan dekarbonisasi yang mendorong maskapai untuk memaksimalkan *utilization rate* pesawat existing sambil menahan pembelian pesawat baru. Ketiga faktor ini secara simultan menciptakan kebutuhan akan model RCM hierarkis yang mampu mengoptimasi *maximum available operation time* sambil mempertahankan tingkat keselamatan seperti yang diuraikan dalam paper Zhou (2024) — model yang dapat mendemonstrasikan *existence of an optimal value* pada fungsi ketersediaan.

---

## 2. Landasan Teori & Formulasi Matematis

Zhou (2024, DOI: [10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)) membangun fondasi teoritis dengan mengadopsi fungsi availabilitas stationer dari teori *renewal reward* yang kemudian dimodifikasi untuk mengakomodasi struktur hierarki A/B/C/D. Berikut adalah formulasi matematis inti yang merekonstruksi dan memperluas model Zhou (2024).

### 2.1 Model Degradasi Non-Linier Siklus Hidup

Komponen pesawat diasumsikan mengalami degradasi mengikuti *power-law process* dengan parameter bentuk $\beta > 1$ (yang menandakan *wear-out phase*) dan *scale parameter* $\eta > 0$. Laju kegagalan sesaat (*instantaneous failure rate*) pada waktu $t$ didefinisikan sebagai:

$$
\lambda(t) = \frac{\beta}{\eta} \left(\frac{t}{\eta}\right)^{\beta-1}
$$

Dimana $\lambda(t)$ menyatakan laju kegagalan kondisional pada usia komponen $t$ setelah inspeksi terakhir. Pemilihan model ini didasarkan pada bukti empiris dalam literatur keandalan penerbangan (misalnya untuk *landing gear*, *APU*, dan *engine hot-section components*) bahwa degradasi mengikuti pola *bathtub-curve* dengan fase *wear-out* dominan.

### 2.2 Fungsi Ketersediaan Stationer (Asymptotic Availability)

Untuk sistem yang beroperasi dalam kondisi *renewal-reward* dengan interval inspeksi deterministik $T$, ketersediaan stationer $A(T)$ didefinisikan sebagai:

$$
A(T) = \frac{E[\text{Operating Time}]}{E[\text{Cycle Length}]} = \frac{\int_{0}^{T} R(t)\, dt}{\int_{0}^{T} R(t)\, dt + \sum_{k=1}^{N} p_k \cdot t_{k}^{\text{down}}}
$$

Dengan $R(t) = \exp\left(-\int_{0}^{t} \lambda(u)\, du\right) = \exp\left[-\left(\frac{t}{\eta}\right)^{\beta}\right]$ adalah fungsi reliabilitas Weibull, $p_k$ adalah probabilitas tindakan maintenance tipe $k$ (corrective vs preventive), dan $t_{k}^{\text{down}}$ adalah durasi downtime terkait. Zhou (2024) memperluas formula ini untuk struktur hierarkis empat tingkat A/B/C/D dengan memberikan bobot downtime spesifik:

$$
A_{\text{hier}}(T_A, T_B, T_C, T_D) = \frac{\mu_{\text{op}}}{\mu_{\text{op}} + \mathbb{E}[T_{\text{down}}]}
$$

dengan ekspektasi downtime total:

$$
\mathbb{E}[T_{\text{down}}] = \frac{n_A \cdot \tau_A + n_B \cdot \tau_B + n_C \cdot \tau_C + n_D \cdot \tau_D}{T_{\text{life}}} + \frac{\sum_{i=1}^{n_f} t_i^{\text{cor}}}{\mu_{\text{op}}}
$$

dimana $n_k$ adalah jumlah inspeksi tipe $k$ dalam satu *life-cycle* $T_{\text{life}}$, $\tau_k$ adalah durasi inspeksi tipe $k$, dan $\sum t_i^{\text{cor}}$ adalah total waktu *corrective repair* yang muncul secara stokastik.

### 2.3 Formulasi Optimasi Ketersediaan Hierarkis

Masalah optimasi sentral yang diselesaikan Zhou (2024, DOI: 10.2139/ssrn.6387479) adalah menentukan vektor interval $(T_A, T_B, T_C, T_D)$ yang memaksimalkan ketersediaan sambil mempertahankan tingkat keselamatan $\gamma_{\min}$:

$$
\max_{T_A, T_B, T_C, T_D \in \mathbb{R}_{+}} \quad A_{\text{hier}}(T_A, T_B, T_C, T_D)
$$

$$
\text{subject to:} \quad \int_{T_A}^{T_A + T_B} \lambda(t)\, dt \leq \gamma_{\min}
$$

$$
T_A : T_B : T_C : T_D \in \mathcal{R} \quad \text{(regulatory ratio)}
$$

$$
T_D \leq T_{\text{fatigue,limit}}
$$

Zhou (2024) membuktikan *existence of an optimal value* untuk masalah ini melalui teorema titik tetap *Brouwer-Schauder* pada ruang kebijakan yang dikompakkan, dengan kondisi regularitas yang menjamin $A_{\text{hier}}$ bersifat *quasi-concave* terhadap $(T_A, T_B, T_C, T_D)$.

### 2.4 Model Refurbishment Parsial dan D-Check Penuh

Inovasi utama paper ini adalah dekomposisi *life-cycle cost* antara D-check penuh (kapital intensif) dengan *partial refurbishment* (capex rendah, frekuensi lebih tinggi). Misalkan $\rho \in [0,1]$ adalah *fractional refurbishment intensity* pada interval antara dua D-check, maka *effective rejuvenation* usia komponen adalah:

$$
t_{\text{eff}}(\rho) = (1-\rho) \cdot t_{\text{post-D}} + \rho \cdot \tau_{\text{part}}
$$

dengan laju kegagalan pasca-refurbishment dimodifikasi sebagai:

$$
\lambda_{\text{post}}(t) = \lambda_0 + \frac{\beta}{\eta} \left(\frac{t_{\text{eff}}}{\eta}\right)^{\beta-1} \cdot (1-\rho)
$$

### 2.5 Kriteria Keputusan RCM (Fungsi SAE JA1011)

Zhou (2024) mengadopsi fungsi keputusan RCM berbasis *Proportional Hazards Model* (Cox, 1972) yang selanjutnya disesuaikan:

$$
h(t \mid \mathbf{x}, z) = h_0(t) \cdot \exp\left[\boldsymbol{\beta}^{\top} \mathbf{x}(t) + \gamma z\right]
$$

dengan $h_0(t)$ adalah *baseline hazard* Weibull, $\mathbf{x}(t)$ vektor *covariates* operasional (cycles, ESN, EGT margin), dan $z \in \{0,1\}$ indikator intervensi maintenance. Pendekatan ini secara langsung memenuhi metodologi MSG-3 yang digunakan dalam aviation.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi kebijakan RCM hierarkis Zhou (2024) mengikuti metodologi rekayasa delapan tahap yang diadaptasi dari *SAE JA1012: A Guide to the Reliability-Centered Maintenance (RCM) Standard* dan disesuaikan dengan struktur A/B/C/D MRO penerbangan. Berikut adalah arsitektur SOP yang akan menjadi artefak operasional bagi RuangTI:

### 3.1 Tahap 1 — Akuisisi Data Historis Fleet

Tahap pertama menghendaki pengumpulan data dari *Continuing Airworthiness Maintenance Organization Exposition* (CAMO-E) dan sistem *Airline Maintenance Operation* (AMOS / Trax). Data minimal yang harus diakuisisi mencakup: (a) *component serial number*, (b) *flight cycles & flight hours* sejak *new* atau *last shop visit*, (c) *unscheduled removal rate* per *ESN* (Engine Serial Number), (d) *MTBUR* (Mean Time Between Unscheduled Removals), dan (e) *MMEL/AMM task compliance records*.

### 3.2 Tahap 2 — Segmentasi Sistem dan Boundary FMEA

Dilakukan segmentasi sistem pesawat berdasarkan ATA Chapter (Air Transport Association) 100, misalnya: ATA 32 (Landing Gear), ATA 49 (APU), ATA 71 (Power Plant). Setiap segmen menjalani *Functional Hazard Assessment* (FHA) sesuai CS/FAR 25.1309 dan Failure Modes, Effects and Criticality Analysis (FMECA) per IEC 60812.

### 3.3 Tahap 3 — Pemodelan Degradasi dan Estimasi Parameter Weibull

Parameter $(\beta, \eta)$ untuk setiap komponen kritis diestimasi melalui *Maximum Likelihood Estimation* (MLE):

$$
\mathcal{L}(\beta, \eta) = \prod_{i=1}^{n} \left[\frac{\beta}{\eta}\left(\frac{t_i}{\eta}\right)^{\beta-1}\right]^{\delta_i} \cdot \exp\left[-\left(\frac{t_i}{\eta}\right)^{\beta}\right]
$$

dengan $\delta_i \in \{0,1\}$ indikator *censoring*. Implementasi dapat menggunakan pustaka Python `lifelines` atau `reliability` di lingkungan engineering RuangTI.

### 3.4 Tahap 4 — Penentuan Interval Inspeksi Optimal

Menggunakan fungsi tujuan dari Bagian 2.3, dilakukan optimasi numerik dengan *interior-point method* atau *sequential quadratic programming* (SQP). Hasil optimasi dibandingkan dengan *task packaging* sesuai MSG-3 *Decision Logic Diagram*.

### 3.5 Tahap 5 — Logika Pemutakhiran.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
