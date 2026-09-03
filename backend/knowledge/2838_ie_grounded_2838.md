# 2838 — Model Resiliensi untuk Logistik Cold Chain Produk Mudah Rusak: Integrasi Pemantauan IoT dan Kerangka Ketahanan Sistem

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Logistik cold chain merupakan salah satu subsistem rantai pasok paling kritikal dalam industri farmasi, makanan beku, bioteknologi, dan pertanian. Sistem ini mempertahankan rentang suhu presisi (umumnya 2–8 °C untuk vaksin sesuai standar WHO PQS E001, atau -18 °C untuk produk beku) sejak titik produksi hingga titik konsumsi. Menurut Khurshid dan Siddiqui (2024) dalam artikel *A Resilience Model for Cold Chain Logistics of Perishable Products* yang dipublikasikan dengan DOI [10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599), keberhasilan distribusi produk mudah rusak (*perishable products*) sangat ditentukan oleh kemampuan sistem untuk mempertahankan integritas termal meskipun terjadi gangguan (*disruptions*) internal maupun eksternal. Paper tersebut mengajukan model resiliensi yang secara eksplisit memformulasikan kapasitas adaptif dan restoratif rantai dingin, berbeda dengan pendekatan konvensional yang hanya berfokus pada keandalan (*reliability*) statis.

Konteks operasional yang menggambarkan urgensi permasalahan ini dapat ditemukan pada studi empiris Putra, Defit, dan Nurcahyo (2024) dengan DOI [10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589). Penelitian tersebut dilakukan pada **UPTD Farmasi Dinas Kesehatan Kabupaten Siak**, yang bertanggung jawab penuh atas kualitas vaksin hingga titik distribusi. Temuan lapangan mereka menunjukkan tiga masalah struktural yang persisten: (1) cold chain box sebagai media penyimpanan vaksin tidak dilengkapi alat pemantau suhu yang bekerja secara *real-time*; (2) tidak adanya mekanisme peringatan dini (*early warning system*) bagi apoteker ketika suhu cold chain box mengalami kenaikan akibat kerusakan internal (misalnya kebocoran refrigeran, kegagalan termostat) maupun eksternal (paparan panas lingkungan, kegagalan catu daya); serta (3) proses pencatatan suhu masih dilakukan secara manual setiap 2 jam melalui *log sheet*, yang rentan terhadap human error, kelalaian, dan keterlambatan respons. Kombinasi ketiga faktor ini secara langsung menurunkan *Mean Time To Detect* (MTTD) gangguan, yang merupakan komponen kritis dalam model resiliensi cold chain.

Secara ekonomi, Bank Dunia memperkirakan kerugian global akibat kerusakan cold chain makanan mencapai sekitar USD 35 miliar per tahun, sementara Organisasi Kesehatan Dunia (WHO) memperkirakan bahwa sekitar 25–50% vaksin kehilangan potensi akibat paparan suhu di luar rentang aman (*cold chain breach*). Di Indonesia, dengan luas geografis 1,9 juta km² dan lebih dari 17.000 pulau, tantangan distribusi cold chain menjadi bersifat *mission-critical*—terutama untuk program imunisasi nasional yang menjangkau lebih dari 5.000 puskesmas dan posyandu. Oleh sebab itu, integrasi antara kerangka resiliensi teoritis (Khurshid & Siddiqui, 2024) dan implementasi teknis berbasis IoT (Putra et al., 2024) menjadi kebutuhan rekayasa yang tidak dapat ditunda lagi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kerangka Resiliensi Cold Chain

Model resiliensi yang diajukan oleh Khurshid dan Siddiqui (2024) beroperasi pada empat fase utama yang membentuk siklus tertutup (*closed-loop resilience cycle*): **Prepare–Absorb–Recover–Adapt** (sering disingkat PAR-A). Kapasitas resiliensi sistem $R_c$ dapat diformulasikan secara agregat sebagai:

$$R_c = \alpha P + \beta A + \gamma (1 - T_r / T_a) + \delta \cdot \text{Adapt}$$

dengan $P$ adalah kesiapan preventif (preventive preparedness), $A$ adalah kapasitas absorbsi (absorptive capacity), $T_r$ adalah *recovery time* aktual, $T_a$ adalah ambang waktu容忍ansi maksimum, dan $\alpha, \beta, \gamma, \delta$ adalah bobot kepentingan relatif ($\sum = 1$) yang ditentukan melalui *Analytic Hierarchy Process* (AHP).

### 2.2 Model Termal Produk Mudah Rusak

Degradasi kualitas produk farmasi (misalnya vaksin) di luar rentang suhu aman $\Delta T = T(t) - T_{ref}$ bersifat kumulatif dan irreversibel. Kerusakan kumulatif dapat dimodelkan dengan persamaan degradasi Arrhenius–Hudson untuk vaksin:

$$k_d = A \cdot e^{-E_a / (R \cdot T)}$$

$$D(t) = \int_0^t k_d(\tau) \, d\tau$$

dengan $k_d$ adalah laju degradasi, $A$ adalah faktor pre-eksponensial, $E_a$ adalah energi aktivasi (J/mol), $R = 8{,}314$ J/(mol·K) adalah konstanta gas universal, dan $T$ adalah suhu absolut (K). Kerusakan kumulatif $D(t)$ dievaluasi terhadap ambang kritis $D_{max}$ yang menunjukkan hilangnya potensi efektif produk.

### 2.3 Indeks Resiliensi Termal (*Thermal Resilience Index*)

Untuk cold chain box, kita dapat mendefinisikan *Thermal Resilience Index* (TRI) sebagai metrik gabungan antara kemampuan mempertahankan suhu dan kecepatan deteksi:

$$\text{TRI} = \frac{1}{\text{MTTD}} \cdot \int_0^T \mathbb{1}\{|T(t) - T_{ref}| \le \Delta T_{max}\} \, dt$$

dengan $\mathbb{1}\{\cdot\}$ adalah fungsi indikator (bernilai 1 jika kondisi aman, 0 jika terjadi pelanggaran), $\Delta T_{max}$ adalah toleransi deviasi suhu (untuk vaksin 2–8 °C, berarti $\Delta T_{max} \approx 3$ °C), dan MTTD adalah *Mean Time To Detect* (detik/menit).

### 2.4 Distribusi Kegagalan dan Keandalan Sensor

Keandalan sistem sensor DS18B20 (1-Wire digital thermometer) yang digunakan oleh Putra et al. (2024) mengikuti distribusi Weibull dengan parameter shape $\beta_s$ dan scale $\eta_s$:

$$R_s(t) = e^{-(t/\eta_s)^{\beta_s}}$$

Tingkat kesalahan (*bit error rate*) komunikasi nirkabel LoRa/WiFi untuk transmisi data IoT dimodelkan sebagai:

$$P_{e} = 1 - (1 - p_b)^n$$

dengan $p_b$ adalah *bit error probability* per transmisi dan $n$ adalah panjang paket data dalam bit.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem Pemantauan Cold Chain IoT

Berdasarkan implementasi Putra et al. (2024) di UPTD Farmasi Siak, arsitektur teknologi mengikuti pola berlapis (*layered architecture*):

```
┌─────────────────────────────────────────┐
│  Layer 4: Decision Support (Dashboard)  │
│  - Alert jika T > 8 °C atau T < 2 °C    │
│  - Notifikasi via Telegram API/GSM      │
├─────────────────────────────────────────┤
│  Layer 3: Data Communication            │
│  - Protokol: MQTT/HTTP over WiFi/LoRa   │
│  - Database: MySQL/InfluxDB             │
├─────────────────────────────────────────┤
│  Layer 2: Edge Computing (Mikrokontroler)│
│  - Arduino Uno/ESP32 + Sensor DS18B20   │
│  - Sampling rate: 1 Hz, akurasi ±0.5 °C │
├─────────────────────────────────────────┤
│  Layer 1: Physical Sensing              │
│  - Sensor DS18B20 (1-Wire)              │
│  - Cold chain box (fase 2–8 °C)          │
└─────────────────────────────────────────┘
```

### 3.2 SOP Pemantauan Cold Chain yang Disempurnakan

**SOP-CB-001: Pemantauan Suhu Cold Chain Box dengan Sistem IoT**

1. **Pra-operasional (T-15 menit)**
   - Kalibrasi sensor DS18B20 menggunakan referensi es-es mencair (0,0 °C) dan air mendidih (100,0 °C) sesuai rumus:
   $$T_{corrected} = a \cdot T_{raw} + b$$
   dengan $a, b$ adalah koefisien kalibrasi linier hasil regresi.

2. **Operasional (T = 0 hingga T = T_end)**
   - Sensor mengambil sampel suhu dengan *sampling period* $T_s = 1$ detik.
   - Data dikirim ke server setiap interval $\Delta t = 30$ detik.
   - Algoritma deteksi anomali (moving average filter):
   $$\hat{T}(t) = \frac{1}{N}\sum_{i=0}^{N-1} T(t-i)$$
   dengan window size $N = 10$.

3. **Respons Insiden**
   - Jika $|T(t) - T_{ref}| > \Delta T_{max}$ selama lebih dari $\tau = 60$ detik, sistem memicu alarm level-1.
   - Jika pelanggaran berlanjut > 5 menit, alarm level-2 dikirim ke seluruh *stakeholder*.
   - **Cold Chain Breach Response Time (CCBRT)** ditargetkan $\le 15$ menit (WHO PQS E006).

4. **Pasca-operasional**
   - Auto-backup log ke cloud storage dengan retensi minimum 5 tahun (compliance BPOM/CDC).
   - Pembuatan *digital twin* suhu harian untuk analisis prediktif.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Kasus

UPTD Farmasi Dinas Kesehatan Kabupaten Siak mengelola 12 cold chain box yang masing-masing menyimpan rata-rata 800 vial vaksin (campak, polio, BCG, DPT-HB-Hib). Kapasitas penyimpanan total: 9.600 vial/bulan. Setiap vial vaksin memiliki nilai ekonomis rata-rata Rp 75.000 (berdasarkan Harga E-Katalog VAKSIN Kemenkes). Total nilai inventaris aktif pada cold chain box: **Rp 720.000.000** per siklus distribusi.

### 4.2 Perhitungan Parameter Resiliensi

**Langkah 1: Hitung Kerusakan Kumulatif jika Terjadi Cold Chain Breach**

Misalkan selama 4 jam suhu naik menjadi 15 °C akibat kegagalan termostat. Parameter Arrhenius untuk vaksin campak (Stinson et al., 2019 disitasi dalam kerangka Khurshid & Siddiqui, 2024): $E_a = 84$ kJ/mol, $A = 2{,}3 \times 10^{13}$ jam⁻¹.

Pada $T_{ref} = 5\ °C = 278{,}15$ K (aman):
$$k_{d,aman} = 2{,}3 \times 10^{13} \cdot e^{-84000/(8{,}314 \times 278{,}15)} = 2{,}3 \times 10^{13} \cdot e^{-36{,}32}$$
$$k_{d,aman} \approx 3{,}91 \times 10^{-3} \text{ jam}^{-1}$$

Pada $T_{breach} = 15\ °C = 288{,}15$ K:
$$k_{d,breach} = 2{,}3 \times 10^{13} \cdot e^{-84000/(8{,}314 \times 288{,}15)} = 2{,}3 \times 10^{13} \cdot e^{-35{,}06}$$
$$k_{d,breach} \approx 2{,}75 \times 10^{-2} \text{ jam}^{-1}$$

Rasio percepatan degradasi: $k_{d,breach} / k_{d,aman} = 2{,}75 \times 10^{-2} / 3{,}91 \times 10^{-3} \approx 7{,}03 \times$

Artinya, setiap jam pelanggaran suhu pada 15 °C menyebabkan degradasi yang setara dengan **~7 jam** pada suhu referensi. Dalam 4 jam breach, degradasi efektif $= 4 \times 7{,}03 = 28{,}12$ jam equivalen.

**Langkah 2: Hitung Kerugian Finansial jika Cold Chain Breach Tidak Terdeteksi**

Waktu deteksi sistem manual (Putra et al., 2024 mencatat pencat