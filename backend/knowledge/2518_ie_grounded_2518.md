# 2518 — Model Resiliensi untuk Logistik Rantai Dingin Produk Mudah Rusak (Perishable Products): Integrasi Pemantauan IoT untuk Ketahanan Sistem Distribusi Farmasi-Vaksin

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Rantai dingin (*cold chain*) merupakan subsistem kritis dalam rantai pasok global yang menjamin integritas termal produk mudah rusak—mulai dari vaksin, produk biologi, makanan beku, hingga bahan farmasi—dari titik produksi hingga konsumsi akhir. Menurut Khurshid dan Siddiqui (2024) dalam *A Resilience Model for Cold Chain Logistics of Perishable Products*, kegagalan mempertahankan rentang suhu 2–8°C untuk vaksin atau −18°C untuk produk beku bukan sekadar masalah teknis, melainkan multi-dampak ekonomi yang menimbulkan kerugian hingga 35 miliar USD per tahun secara global akibat pembusukan (*spoilage*) dan rework distribusi. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599).

Di Indonesia, realitas operasional rantai dingin farmasi masih menghadapi tantangan struktural yang signifikan. Putra, Defit, dan Nurcahyo (2024) mendokumentasikan bahwa Unit Pelaksana Teknis Dinas (UPTD) Farmasi Dinas Kesehatan Kabupaten Siak—sebagai representasi tipikal fasilitas distribusi vaksin daerah—mengidentifikasi tiga缺陷 operasional utama: (1) cold chain box tidak dilengkapi alat pemantauan suhu *real-time* dengan kemampuan peringatan dini (*early warning alert*); (2) proses pencatatan suhu masih dilakukan secara manual setiap 2 jam sekali pada *log sheet* oleh apoteker—prosedur yang rentan terhadap human error, keterlambatan respons, dan kehilangan jejak audit; (3) tidak ada mekanisme peringatan otomatis ketika suhu cold chain box naik akibat kerusakan internal (kompresor, refrigerant leak) maupun eksternal (paparan matahari, pembukaan pintu berulang). DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589).

Konteks industri yang lebih luas menunjukkan bahwa kompleksitas rantai dingin modern ditandai oleh: (a) jaringan multi-echelon dengan *cold storage*, refrigerated truck, dan last-mile delivery; (b) meningkatnya volume distribusi pasca-pandemi COVID-19 yang memicu kelangkaan kapasitas; (c) tuntutan regulatori seperti WHO PQS (Performance, Quality and Safety) dan EMA GDP (Good Distribution Practice) yang mewajibkan dokumentasi traceability suhu; serta (d) meningkatnya serangan *disruption* berupa pemadaman listrik, bencana alam, dan fluktuasi suhu lingkungan tropis. Oleh karena itu, transisi paradigma dari sekadar *reactive cold chain monitoring* menuju *proactive cold chain resilience engineering* menjadi kebutuhan strategis. Resiliensi dalam konteks ini didefinisikan sebagai kemampuan sistem untuk mempertahankan fungsi inti (integritas termal) di bawah tekanan gangguan, melakukan *recovery* dengan degradasi kinerja minimal, dan beradaptasi untuk mencegah terulangnya kegagalan. Dokumen ini menyintesiskan model resiliensi kuantitatif dari Khurshid & Siddiqui (2024) dengan arsitektur pemantauan IoT dari Putra et al. (2024) untuk membangun kerangka rekayasa sistem rantai dingin yang *resilient-by-design*.

## 2. Landasan Teori & Formulasi Matematis

Model resiliensi rantai dingin yang diajukan Khurshid & Siddiqui (2024) berakar pada kerangka Bruneau et al. yang mengukur resiliensi melalui empat atribut inti: *Robustness (R), Redundancy (Rd), Resourcefulness (Rs), dan Rapidity (Rp)*. Untuk rantai dingin, atribut ini dioperasionalisasikan sebagai berikut.

### 2.1 Indeks Resiliensi Sistem (System Resilience Index)

Indeks resiliensi total sistem rantai dingin $\Psi$ didefinisikan sebagai kombinasi tertimbang dari empat atribut resiliensi:

$$\Psi = w_1 R + w_2 R_d + w_3 R_s + w_4 R_p$$

dengan $\sum_{i=1}^{4} w_i = 1$ dan $w_i \geq 0$ merupakan bobot prioritas strategis yang ditentukan melalui *Analytic Hierarchy Process* (AHP). Robustness $R$ diukur sebagai kemampuan mempertahankan rentang suhu operasional $T_{op}$ di bawah gangguan:

$$R = 1 - \frac{\int_{t_0}^{t_1} |T(t) - T_{op}| \, dt}{(t_1 - t_0) \cdot \Delta T_{max}}$$

di mana $T(t)$ adalah profil suhu aktual, $T_{op}$ adalah set-point suhu operasional, $\Delta T_{max}$ adalah deviasi maksimum yang dapat ditoleransi, dan $[t_0, t_1]$ adalah window observasi.

### 2.2 Model Dinamika Termal Cold Chain Box

Berdasarkan persamaan konservasi energi untuk enclosure berinsulasi dengan refrigerasi aktif, dinamika suhu internal cold chain box dimodelkan sebagai:

$$m \cdot c_p \cdot \frac{dT_{int}}{dt} = -k \cdot A \cdot (T_{int} - T_{ext}) - \dot{Q}_{cool}(t) + \dot{Q}_{door}(t)$$

di mana:
- $m$ = massa termal efektif beban (kg)
- $c_p$ = kapasitas panas spesifik produk (J/kg·K)
- $k \cdot A$ = konduktansi termal total dinding enclosure (W/K)
- $T_{ext}$ = suhu lingkungan eksternal (°C)
- $\dot{Q}_{cool}(t)$ = laju pendinginan kompresor (W), fungsi duty cycle
- $\dot{Q}_{door}(t)$ = beban termal akibat pembukaan pintu (W), term yang aktif hanya saat akses

### 2.3 Fungsi Kerugian Kualitas (Quality Loss Function)

Kerugian mutu farmasi akibat eksposur suhu di luar rentang $T_{min} \leq T \leq T_{max}$ dimodelkan menggunakan *Arrhenius degradation kinetics*:

$$k_{deg}(T) = A \cdot \exp\left(-\frac{E_a}{R_g \cdot T_{abs}}\right)$$

dengan $A$ adalah *pre-exponential factor*, $E_a$ energi aktivasi (J/mol), $R_g = 8.314$ J/(mol·K), dan $T_{abs}$ suhu absolut (K). Konsentrasi produk aktif $C(t)$ yang tersisa:

$$C(t) = C_0 \cdot \exp\left(-\int_0^t k_{deg}(T(\tau)) \, d\tau\right)$$

### 2.4 Model Probabilitas Kegagalan dan Recovery

Waktu antar kegagalan (*Mean Time Between Failures*) sistem pendingin mengikuti distribusi Weibull:

$$f(t) = \frac{\beta}{\eta}\left(\frac{t}{\eta}\right)^{\beta-1} \exp\left(-\left(\frac{t}{\eta}\right)^{\beta}\right)$$

dengan $\beta$ = shape parameter dan $\eta$ = scale parameter (jam). Kecepatan pemulihan (*Rapidity*) didefinisikan sebagai:

$$R_p = \frac{1}{MTTR} = \frac{1}{\mathbb{E}[T_{recovery}]}$$

di mana MTTR (*Mean Time To Repair*) menjadi metrik utama kemampuan respons.

### 2.5 Arsitektur IoT dan Sensor DS18B20

Putra et al. (2024) menggunakan sensor *Dallas DS18B20* dengan akurasi $\pm 0.5°C$ pada resolusi 9–12 bit, interface *1-Wire* yang memungkinkan multi-drop hingga 100 sensor pada satu pin mikrokontroler, dan rentang pengukuran −55°C hingga +125°C. Akuisisi data IoT menghasilkan *time series* suhu $\mathcal{T} = \{T_1, T_2, ..., T_n\}$ yang menjadi input bagi *anomaly detection algorithm* dan *predictive maintenance module*.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model resiliensi rantai dingin mengikuti SOP enam-tahap sistematis yang disintesiskan dari kedua literatur:

**Tahap 1 — Pemetaan Sistem dan Identifikasi Failure Mode.** Lakukan *Value Stream Mapping* (VSM) untuk seluruh mata rantai dingin: manufacturing → primary distribution → cold storage → secondary distribution → last-mile delivery → end user. Setiap node dianalisis menggunakan *Failure Mode and Effects Analysis* (FMEA) untuk menentukan *Severity (S)*, *Occurrence (O)*, dan *Detectability (D)*. Hitung *Risk Priority Number*: $\text{RPN} = S \times O \times D$.

**Tahap 2 — Instrumentasi IoT.** Pasang sensor DS18B20 pada titik kritis: intake evaporator, outlet evaporator, ruang penyimpanan utama (3 zona: atas, tengah, bawah), dan zona *return air*. Konfigurasi *1-Wire bus* dengan topologi *star-with-daisy-chain* untuk redundansi. Sampling rate: 1 Hz dengan agregasi 5-menit untuk transmisi. Threshold alarm: $T > 8°C$ (high) atau $T < 2°C$ (low) selama $>15$ menit berturut-turut.

**Tahap 3 — Dashboard Pemantauan dan Data Pipeline.** Data sensor dikirim via ESP32/NodeMCU ke server MQTT (*Message Queuing Telemetry Transport*) dengan protokol publish-subscribe ringan. Backend menggunakan *time-series database* (InfluxDB) dan visualisasi *real-time* (Grafana) yang menampilkan: (a) tren suhu aktual vs set-point; (b) *heatmap* spasial cold storage; (c) *alert panel*; (d) *predictive maintenance countdown* berbasis hours-of-operation kompresor.

**Tahap 4 — Perhitungan Indeks Resiliensi Periodik.** Hitung $\Psi$ mingguan menggunakan data historis. Kalibrasi bobot $w_i$ melalui AHP dengan pairwise comparison dari pemangku kepentingan (apoteker, manajer logistik, regulator).

**Tahap 5 — Prosedur Tanggap Darurat (Emergency Response Procedure/ERP).** Jika alarm suhu terpicu, ERP diaktifkan:
- $T \in [8°C, 10°C]$ selama 15–60 menit → *yellow alert*, pindahkan produk ke unit cadangan, investigasi akar penyebab.
- $T > 10°C$ selama $>60$ menit → *red alert*, isolasi lot, *quarantine*, jalankan protokol *recall* sesuai WHO TRS 962 Annex 9.

**Tahap 6 — Continuous Improvement Loop.** Lakukan *Plan-Do-Check-Act* (PDCA) triwulanan dengan audit internal mengacu pada ISO 23412:2020 (*Controlled temperature chain logistics for vaccines*) dan WHO PQS E006 (insulated containers).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** UPTD Farmasi Dinas Kesehatan menerima kiriman 5.000 vial vaksin COVID-19 (volume 2 mL/vial, $c_p = 3.500$ J/kg·K, densitas $\rho = 1.05$ g/mL) yang disimpan dalam cold chain box kapasitas 200 L dengan refrigerasi aktif. Terjadi pemadaman listrik selama $\Delta t = 90$ menit. Hitung indeks resiliensi dan risiko kerugian mutu.

**Langkah 1 — Profil Termal Saat Pemadaman.**

Asumsikan parameter cold chain box: $m_{eff} = 50$ kg (massa termal ekuivalen), $k \cdot A = 1.8$ W/K, $T_{ext} = 32°C$ (tropis Siak), $T_{int}(0) = 5°C$, $\dot{Q}_{cool} = 0$ saat padam. Persamaan diferensial menyederhanakan menjadi:

$$50 \cdot 3500 \cdot \frac{dT_{int}}{dt} = -1.8 \cdot (T_{int} - 32)$$

$$\frac{dT_{int}}{dt} = -\frac{1.8}{175000}(T_{int} - 32) = -1.029 \times 10^{-5}(T_{int} - 32)$$

Solusi analitik: $T_{int}(t) = 32 - (32 - 5) \cdot e^{-1.029 \times 10^{-5} \cdot t}$

Evaluasi pada $t = 90$ menit = 5.400 detik:

$$T_{int}(5400) = 32 - 27 \cdot e^{-0.0556} = 32 - 27 \cdot 0.9460 = 32 - 25.54 = 6.46°C$$

**Interpretasi:** Suhu naik 1.46°C dalam 90 menit—masih dalam rentang operasional 2–8°C, namun mendekati *upper limit*.

**Langkah 2 — Perhitungan Robustness.**

Ambil window $[0, 5400]$ detik, $\Delta T_{max} = 6°C$ (deviasi dari 2°C batas bawah):

$$\int_0^{5400} |T(t) - 5| \, dt = \int_0^{5400} 27 \cdot e^{-1.029 \times 10^{-5} \cdot t} \, dt = \frac{27}{1.029 \times 10^{-5}} \left[1 - e^{-0.0556}\right]$$

$$= 2.624 \times 10^6 \cdot 0.0540 = 141.696 \text{ K·s}$$

$$R = 1 - \frac{141.696}{5400 \cdot 6} = 1 - 0.00437 = 0.9956$$

**Langkah 3 — Perhitungan Arrhenius Degradation.**

Untuk protein subunit vaccine, $E_a = 80.000$ J/mol, $A =