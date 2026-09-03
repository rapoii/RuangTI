# 1654 — Model Ketahanan (Resilience) untuk Logistik Cold Chain Produk Mudah Rusak (Perishable Products)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal (SSRN)*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Cold chain logistics merupakan rantai pasok yang bergantung pada pengendalian suhu secara kontinu sejak titik produksi hingga titik konsumsi akhir. Menurut Khurshid & Siddiqui (2024, DOI: [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)), rantai pasok untuk produk *perishable* seperti vaksin, biofarmaka, produk susu, daging, dan seafood memiliki karakteristik unik berupa **time-temperature sensitivity**, di mana degradasi mutu produk terjadi secara kumulatif dan irreversibel terhadap paparan suhu di luar ambang batas yang diizinkan. Kerusakan satu titik dalam mata rantai dapat menyebabkan kerugian ekonomi masif, seperti yang dilaporkan WHO bahwa sekitar 50% vaksin terbuang sia-sia secara global akibat kegagalan cold chain, dengan estimasi kerugian finansial melebihi USD 35 miliar per tahun untuk sektor farmasi dan pangan mudah rusak.

Kasus spesifik pada konteks Indonesia digambarkan oleh Putra, Defit, & Nurcahyo (2024, DOI: [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)) pada UPTD Farmasi Dinas Kesehatan Kabupaten Siak, yang menunjukkan tiga permasalahan fundamental dalam operasional cold chain box vaksin: (1) ketiadaan sistem pemantauan suhu *real-time*, (2) pencatatan suhu secara manual setiap 2 jam melalui *log sheet* oleh apoteker yang rentan terhadap *human error*, dan (3) tidak adanya peringatan dini (*early warning*) ketika suhu cold chain box naik akibat kerusakan internal (kompresor, refrigeran bocor) maupun eksternal (gangguan daya listrik, paparan matahari). Ketiga kelemahan ini merepresentasikan *single point of failure* dalam sistem logistik yang seharusnya memiliki tingkat resiliensi tinggi.

Urgensi pengembangan model resiliensi cold chain diperkuat oleh fakta bahwa Pharmaceutical Inspection Co-operation Scheme (PIC/S) dan WHO PQS (Performance, Quality and Safety) mensyaratkan suhu penyimpanan vaksin 2–8°C dengan toleransi deviasi maksimum ±0.5°C untuk produk sensitif. Kegagalan mempertahankan *temperature envelope* ini tidak hanya berdampak pada kerugian material, namun juga pada kesehatan publik ketika vaksin yang telah terdegradasi tetap didistribusikan. Oleh karena itu, perspektif Teknik Industri memandang cold chain bukan sekadar sebagai permasalahan teknis *refrigeration engineering*, melainkan sebagai **sistem sosio-teknis** yang membutuhkan integrasi antara desain proses, keandalan peralatan, kualitas SDM, dan arsitektur informasi digital. Khurshid & Siddiqui (2024) menekankan bahwa model resiliensi harus bersifat *holistic*, mencakup kemampuan *absorbing*, *recovering*, dan *adapting* terhadap disrupsi, bukan sekadar mengejar *reliability* statis.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Definisi Resiliensi Cold Chain

Khurshid & Siddiqui (2024) mendefinisikan resiliensi sistem cold chain sebagai kemampuan sistem untuk mempertahankan fungsinya (integritas suhu dan kualitas produk) di bawah kondisi disrupsi, dan kembali ke kondisi operasi normal dalam waktu yang dapat diterima. Formulasi matematis dasarnya adalah:

$$\Psi(t) = \int_{t_0}^{t_0+\tau_r} \left[1 - \frac{|T(t) - T_{set}|}{\Delta T_{max}}\right] \cdot R(t) \, dt$$

di mana $\Psi(t)$ adalah indeks resiliensi kumulatif, $T(t)$ adalah suhu aktual sistem pada waktu $t$, $T_{set}$ adalah suhu set-point (misal 5°C untuk vaksin), $\Delta T_{max}$ adalah deviasi suhu maksimum yang diizinkan, dan $R(t)$ adalah fungsi reliabilitas peralatan pendingin.

### 2.2 Model Reliabilitas Komponen Cold Chain

Untuk cold chain box yang menggunakan kompresor dan sistem refrigerasi, fungsi reliabilitas mengikuti distribusi eksponensial ketika laju kegagalan dianggap konstan:

$$R(t) = e^{-\lambda t}$$

dengan $\lambda$ sebagai *failure rate* (per jam). Untuk komponen kritis seperti kompresor hermetik pada cold chain box portabel, data empiris menunjukkan $\lambda \approx 8.76 \times 10^{-4}$ per jam atau Mean Time To Failure (MTTF):

$$\text{MTTF} = \frac{1}{\lambda} = \frac{1}{8.76 \times 10^{-4}} \approx 1141.55 \text{ jam} \approx 47.6 \text{ hari}$$

### 2.3 Model Ketersediaan (Availability)

Ketersediaan sistem cold chain didefinisikan sebagai:

$$A = \frac{\text{MTBF}}{\text{MTBF} + \text{MTTR}} = \frac{\text{MTTF}}{\text{MTTF} + \text{MTTR}}$$

Untuk cold chain box yang dilengkapi sistem IoT monitoring (Putra dkk., 2024), MTTR (*Mean Time To Repair*) dapat ditekan secara signifikan karena peringatan dini (*alert*) mempercepat diagnosis kerusakan. Studi kasus menunjukkan bahwa tanpa sistem monitoring, MTTR rata-rata adalah 4.5 jam, sedangkan dengan IoT alert real-time MTTR turun menjadi 1.2 jam.

### 2.4 Model Disrupsi dan Pemulihan (Markov Chain)

Khurshid & Siddiqui (2024) mengusulkan model rantai Markov dengan empat state untuk cold chain:

$$S = \{S_0, S_1, S_2, S_3\}$$

di mana:
- $S_0$ = *Normal Operation* (suhu dalam envelope)
- $S_1$ = *Minor Disruption* (suhu deviasi ≤ 1°C, terdeteksi)
- $S_2$ = *Major Disruption* (suhu deviasi > 1°C, belum terkoreksi)
- $S_3$ = *Failure* (produk compromised, perlu disposal)

Matriks transisi probabilitas $P$ berbentuk:

$$P = \begin{bmatrix} p_{00} & p_{01} & p_{02} & p_{03} \\ p_{10} & p_{11} & p_{12} & p_{13} \\ p_{20} & p_{21} & p_{22} & p_{23} \\ p_{30} & p_{31} & p_{32} & p_{33} \end{bmatrix}$$

### 2.5 Heat Load pada Cold Chain Box

Beban kalor total yang harus diimbangi sistem refrigerasi:

$$Q_{total} = Q_{konduksi} + Q_{konveksi} + Q_{radiasi} + Q_{internal} + Q_{infiltrasi}$$

$$Q_{total} = \frac{kA}{\Delta x}(T_{out} - T_{in}) + hA(T_{out} - T_{in}) + \epsilon \sigma A (T_{out}^4 - T_{in}^4) + Q_{produk} + 0.05 \cdot Q_{konduksi}$$

di mana $k$ adalah konduktivitas termal dinding insulasi (polyurethane $\approx 0.024$ W/m·K), $A$ luas permukaan, $h$ koefisien konveksi, $\epsilon$ emisivitas, dan $\sigma$ konstanta Stefan-Boltzmann ($5.67 \times 10^{-8}$ W/m²·K⁴).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model resiliensi cold chain mengikuti kerangka berlapis yang diadaptasi dari Khurshid & Siddiqui (2024) dan divalidasi secara empiris oleh Putra dkk. (2024):

**Tahap 1 — Risk Assessment dan Pemetaan Rantai Pasok.** Lakukan identifikasi titik-titik kritis (lokasi, waktu transit, mode transportasi) menggunakan *Failure Mode and Effects Analysis* (FMEA). Hitung *Risk Priority Number* (RPN) untuk setiap mode kegagalan: $RPN = S \times O \times D$ (Severity × Occurrence × Detection). Untuk UPTD Farmasi Siak, modus kegagalan tertinggi adalah "kegagalan kompresor tanpa peringatan" dengan RPN = 8 × 5 × 7 = 280.

**Tahap 2 — Instrumentasi Sensor dan Akuisisi Data.** Putra dkk. (2024) merancang sistem berbasis mikrokontroler (Arduino/ESP32) dengan sensor DS18B20 yang memiliki akurasi ±0.5°C pada rentang -10°C hingga +85°C, resolusi 0.0625°C, dan protokol komunikasi 1-Wire. Sensor ditempatkan di tiga titik kritis cold chain box: (a) inlet evaporator, (b) tengah ruang penyimpanan, (c) outlet evaporator. Data dikirim via WiFi ke server cloud dengan interval sampling 30 detik.

**Tahap 3 — Logika Alarm dan Eskalasi.** Bangun *threshold-based alerting* dengan tiga level:
- *Warning* (suhu 5.5–7.0°C selama > 5 menit): notifikasi via SMS/email ke apoteker
- *Critical* (suhu > 7.0°C selama > 2 menit): alarm audiovisual + notifikasi ke supervisor
- *Emergency* (suhu > 8.0°C atau < 2.0°C selama > 1 menit): eskalasi ke manajemen + aktivasi *backup cold storage*

**Tahap 4 — Digital Logbook dan Audit Trail.** Gantikan *manual log sheet* dengan *digital logger* yang terekam otomatis dan tidak dapat dimodifikasi (*tamper-proof*), memenuhi prinsip ALCOA+ (Attributable, Legible, Contemporaneous, Original, Accurate) untuk compliance regulasi BPOM dan WHO PQS.

**Tahap 5 — Perencanaan Kontinjensi dan Redundansi.** Sediakan generator set, *dry ice backup*, atau cold storage alternatif dengan *capacity buffer* minimum 25% dari volume operasional, untuk menjamin *recovery time* kurang dari MTTR target (≤ 1.5 jam).

**Tahap 6 — Continuous Improvement.** Lakukan *post-incident review* untuk setiap disrupsi, perbarui parameter Markov (transisi probabilitas), dan kalibrasi ulang sensor setiap 6 bulan.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Data Input Operasional

Studi kasus: Distribusi 1.200 vial vaksin COVID-19 (volume total 12 liter) dari UPTD Farmasi Kabupaten Siak ke 8 puskesmas dengan jarak rata-rata 45 km menggunakan cold chain box portabel berkapasitas 30 liter.

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Set-point suhu $T_{set}$ | 5.0 | °C |
| Deviasi maksimum $\Delta T_{max}$ | ±3.0 | °C |
| Failure rate kompresor $\lambda$ | $8.76 \times 10^{-4}$ | /jam |
| Durasi misi $t$ | 24 | jam |
| Volume cold chain box | 30 | liter |
| Thermal mass vial | 0.5 | kJ/kg·K |
| Jumlah vial | 1.200 | vial |
| MTTR tanpa IoT | 4.5 | jam |
| MTTR dengan IoT | 1.2 | jam |
| Biaya vial (rata-rata) | Rp 75.000 | /vial |
| Biaya sensor IoT (capex) | Rp 4.500.000 | unit |

### 4.2 Perhitungan Reliabilitas dan Ketersediaan

**Langkah 1:** Hitung reliabilitas cold chain box selama 24 jam operasi:

$$R(24) = e^{-(8.76 \times 10^{-4})(24)} = e^{-0.02102} = 0.9792$$

Artinya, probabilitas cold chain box beroperasi tanpa kegagalan selama 24 jam adalah 97.92%.

**Langkah 2:** Hitung MTTF dan Availability tanpa IoT:

$$\text{MTTF} = \frac{1}{8.76 \times 10^{-4}} = 1141.55 \text{ jam}$$

$$A_{\text{manual}} = \frac{1141.55}{1141.55 + 4.5} = 0.99607 = 99.607\%$$

**Langkah 3:** Hitung Availability dengan IoT:

$$A_{\text{IoT}} = \frac{1141.55}{1141.55 + 1.2} = 0.99895 = 99.895\%$$

**Peningkatan ketersediaan absolut:** $\Delta A = 0.99895 - 0.99607 = 0.00288$ atau **0.288 percentage point**.

### 4.3 Analisis Kerugian yang Dihindari (Loss Averted)

Probabilitas kegagalan per siklus distribusi dihitung sebagai:

$$P_{fail} = 1 - R(t) = 1 - 0.9792 = 0.0208 = 2.08\%$$

**Tanpa sistem IoT** (asumsi 50% kegagalan terdeteksi dalam waktu yang memungkinkan recovery, 50% menyebabkan kerugian total):

$$E[\text{kerugian}]_{\text{manual}} = 0.0208 \times (0.5 \times 0 + 0.5 \times 1200 \times 75000) = 0