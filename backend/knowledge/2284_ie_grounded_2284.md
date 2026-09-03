# 2284 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Arsitektur PAT, Formulasi Termodinamika, dan Rekayasa Pemantauan Proses

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization (Jaringan Sensor Nirkabel untuk Proses Liofilisasi)
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Wireless Sensor Networks for Lyophilization*, dalam *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Emerging Technologies in Pharmaceutical Freeze‐Drying*, dalam *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (freeze-drying) merupakan operasi kritis dalam manufaktur biofarmasi modern, khususnya untuk produk biologis, vaksin, dan antibiotik yang bersifat termolabil. Proses ini terdiri atas tiga tahap berurutan — pembekuan (*freezing*), pengeringan primer (*primary drying* melalui sublimasi), dan pengeringan sekunder (*secondary drying* melalui desorpsi) — yang masing-masing memerlukan kontrol parameter fisikokimiawi dengan presisi sangat tinggi. Meza-Galvan, Strongrich, dan Darwish (2026) dalam bab *Wireless Sensor Networks for Lyophilization* (DOI: 10.1002/9783527850303.ch4) menyoroti urgensi penerapan arsitektur *Process Analytical Technology* (PAT) berbasis jaringan sensor nirkabel (WSN) untuk mengatasi keterbatasan instrumentasi thermocouple konvensional, yang menghambat skalabilitas dan fidelitas spasial pemantauan vial.

Secara operasional, satu batch liofilisasi farmasi skala produksi (misalnya 20.000 vial/vakum) berpotensi kehilangan nilai lebih dari USD 2–5 juta apabila satu parameter menyimpang dari desain *Quality by Design* (QbD) — baik berupa *cake collapse*, retensi pelarut berlebih, maupun degradasi protein. Biaya energi pengeringan primer sendiri dapat mencapai 35–50 % dari total konsumsi energi siklus (Artusio, Barresi, & Pisano, 2026; DOI: 10.1002/9783527850303.ch11), menjadikan optimalisasi berbasis data real-time sebagai kebutuhan strategis, bukan sekadar teknikal. Industri farmasi global menghadapi tekanan *triple bottom line*: (i) memperpendek *time-to-market* untuk biosimilar dan terapi gen, (ii) menjamin konsistensi mutu antar-batch sesuai pedoman FDA PAT Guidance (2004) dan ICH Q8/Q9/Q10, serta (iii) menekan jejak karbon operasional.

Konteks industrialisasi ini diperparah oleh fenomena *batch heterogeneity* — variasi suhu produk antar-vial yang dihasilkan oleh gradien radiasi dinding chamber, efek屏蔽 (*edge-vial effect*), dan dinamika sublimasi non-stasioner. Pemantauan berbasis *thermocouple* tradisional (1–16 channel) bersifat *intrusif*, memerlukan *feedthrough* pada dinding vakum, dan hanya memberikan data pada subset vial yang sangat kecil (≤0,1 % dari total vial). Inilah *value proposition* utama WSN: menyediakan topologi spasial ratusan node sensor MEMS nirkabel yang mampu merekam *product temperature* (T_p), *shelf temperature* (T_s), dan *chamber pressure* (P_c) secara simultan, sambil mempertahankan integritas vakum chamber melalui eliminasi konektor fisik. Menurut Meza-Galvan et al. (2026), integrasi WSN memungkinkan terbentuknya *digital twin* proses liofilisasi yang mampu memvalidasi model *primary drying* secara empiris, sehingga meminimalkan overdesign siklus dan menghemat 10–25 % energi sublimasi.

Dari perspektif rekayasa sistem industri, adopsi WSN pada lini liofilisasi juga merepresentasikan pergeseran paradigma dari *process control* reaktif menuju *predictive process control* yang digerakkan oleh AI/ML, sehingga keputusan adaptif (misalnya *shelf temperature set-point ramping* berbasis prediksi *drying front*) dapat diambil secara otonom melalui algoritma *Model Predictive Control* (MPC). Transformasi ini secara langsung menjawab tantangan skalabilitas produksi ATMP (*Advanced Therapy Medicinal Products*) dan terapi personal yang menjadi agenda utama manufaktur farmasi 2030.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Dinamika Perpindahan Panas dan Massa pada Sublimasi

Model *primary drying* yang diadopsi Meza-Galvan et al. (2026) berangkat dari kesetimbangan energi pada *sublimation front* (interface es-uap), dengan laju sublimasi $dm/dt$ didorong oleh gradien tekanan antara uap pada permukaan sublimasi ($P_i$) dan tekanan ruang ($P_c$):

$$\frac{dm}{dt} = \frac{P_i - P_c}{R_p}$$

dengan $R_p$ adalah tahanan pindah massa dried-layer (cm²·mbar·g⁻¹·jam⁻¹). Panas laten sublimasi $\Delta H_s$ (kJ/kg) disuplai melalui konduksi vial, konveksi gas, dan radiasi:

$$q = \Delta H_s \cdot \frac{dm}{dt} = K_v (P_c - P_s) + K_s (T_s - T_p) + h_{rad}(T_{wall}^4 - T_p^4)$$

di mana $K_v$ adalah koefisien perpindahan panas antar-vial (W·m⁻²·K⁻¹·mbar⁻¹), $K_s$ konduksi vial-ke-shelf, dan $h_{rad}$ koefisien radiasi.

### 2.2 Kinetika Degradasi Produk Farmasi

Untuk memodelkan degradasi protein/labil selama proses, persamaan Arrhenius orde-satu digunakan:

$$\frac{dC_A}{dt} = -k_0 \, e^{-E_a/RT} \, C_A$$

dengan energi aktivasi $E_a$ khas biologics berkisar 50–120 kJ/mol. Integrasi numerik terhadap profil $T_p(t)$ hasil pengukuran WSN menghasilkan akumulasi kerusakan (*cumulative degradation*) yang menjadi target minimalisasi:

$$\ln\left(\frac{C_A}{C_{A,0}}\right) = -\int_0^t k_0 e^{-E_a/RT_p(\tau)} d\tau$$

### 2.3 Model Propagasi Radio WSN dalam Lingkungan Vakum/Kriogenik

Meza-Galvan et al. (2026) menekankan bahwa karakteristik propagasi RF di dalam ruang liofilisasi bersifat unik karena suhu rendah (-40 °C) dan tekanan rendah (≤100 mTorr). Model *log-distance path loss* yang digunakan:

$$PL(d) = PL(d_0) + 10n \log_{10}\left(\frac{d}{d_0}\right) + X_\sigma$$

dengan $PL(d_0)$ path loss referensi pada jarak $d_0 = 1$ m, $n$ *path loss exponent* (umumnya 1,6–2,2 dalam ruang ini), dan $X_\sigma$ variabel acak log-normal *shadow fading*. Estimasi jarak node ke gateway menggunakan RSSI:

$$RSSI = P_{tx} + G_{tx} + G_{rx} - PL(d)$$

### 2.4 Metrik Kualitas Jaringan Sensor

Untuk menjamin keandalan transmisi data pada batch berdurasi 24–72 jam, didefinisikan *Packet Delivery Ratio* (PDR) dan *Network Lifetime*:

$$PDR = \frac{N_{rx}}{N_{tx}}, \qquad T_b = \frac{C_b \cdot V_{cell}}{I_{avg} \cdot V_{ops}}$$

dengan $C_b$ kapasitas baterai (mAh), $I_{avg}$ arus rata-rata node, dan $V_{ops}$ tegangan operasi. Meza-Galvan et al. (2026) menetapkan ambang PDR ≥ 99,5 % untuk menjamin akurasi inferensi parameter proses.

### 2.5 State-Space MPC untuk Optimasi Siklus

Representasi *state-space* proses liofilisasi:

$$\dot{\mathbf{x}}(t) = A\mathbf{x}(t) + B\mathbf{u}(t), \qquad \mathbf{y}(t) = C\mathbf{x}(t)$$

dengan state $\mathbf{x} = [T_p, T_s, P_c, m]^T$ dan input kontrol $\mathbf{u} = [T_{s,set}, P_{c,set}]^T$. Fungsi objektif MPC memperhitungkan trade-off antara durasi siklus ($t_f$) dan degradasi produk:

$$J = \int_0^{t_f} \left[ w_1 (T_{p,ref} - T_p)^2 + w_2 u^2 \right] dt + w_3 t_f$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem WSN untuk Liofilisasi

Implementasi mengikuti kerangka berlapis (*layered architecture*) yang dipetakan oleh Meza-Galvan et al. (2026):

**Lapisan 1 — *Perception Layer* (Node Sensor):**
- MEMS thermocouple nirkabel (akurasi ±0,3 °C, rentang -80 °C hingga +50 °C)
- Sensor tekanan kapasitif (rentang 0–1000 mTorr, akurasi ±0,5 % FS)
- Mikrokontroler ultra-low-power (TI MSP430 / Nordic nRF52840)
- Baterai Li-SOCl₂ 3,6 V (densitas energi 700 Wh/kg)

**Lapisan 2 — *Network Layer* (Komunikasi):**
- Topologi *star-mesh hybrid* (gateway per shelf)
- Protokol: IEEE 802.15.4e TSCH (deterministik, anti-interferensi)
- Penjadwalan time-slot: alokasi 10 ms/hop untuk laju sampling 1 Hz

**Lapisan 3 — *Middleware Layer* (Edge Computing):**
- Filtering Kalman: $\hat{x}_{k|k} = \hat{x}_{k|k-1} + K_k (z_k - H\hat{x}_{k|k-1})$
- Deteksi anomali (collapse onset) berbasis turunan kedua T_p

**Lapisan 4 — *Application Layer* (Cloud/Historian):**
- Data historian OSIsoft PI atau Aveva
- Dashboard PAT real-time untuk QA/QC dan Batch Release

### 3.2 SOP Implementasi WSN

**Tahap 1 — Kualifikasi Instalasi (IQ):**
1. Kalibrasi node sensor terhadap standar NIST (-40 °C, 0 °C, +25 °C)
2. Pemetaan RSSI pada setiap posisi shelf untuk penentuan lokasi optimal gateway
3. Validasi sterilitas: sensor dilapisi Parylene-C atau ditempatkan dalam *protective puck* food-grade 316L stainless steel

**Tahap 2 — Verifikasi Fungsi (OQ):**
- *Chamber mapping* sesuai ISO 13485 dan FDA PAT Guidance
- Pengujian interferensi elektromagnetik (EMC compliance IEC 60601-1-2)
- Stress test termal (-80 °C ↔ +40 °C, 50 siklus)

**Tahap 3 — Validasi Kinerja (PQ):**
- Tiga batch validasi (placebo + produk aktif)
- Perbandingan T_p hasil WSN vs thermocouple referensi (RMSE ≤ 0,5 °C)

**Tahap 4 — Integrasi Kontrol:**
- API OPC-UA ke sistem SCADA (Siemens PCS 7 / Emerson DeltaV)
- Penerapan MPC dengan horizon prediksi 30 menit

### 3.3 SOP Pemeliharaan Preventif

| Frekuensi | Kegiatan |
|-----------|----------|
| Tiap batch | Inspeksi visual node, kalibrasi zero/span |
| Mingguan | Pengujian baterai (voltase ≥ 3,4 V), penggantian node < 3,2 V |
| Bulanan | Update firmware (OTA), audit keamanan siber (IEC 62443) |
| Tahunan | Recalibration bersertifikat ISO 17025 |

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario Kasus: Cycle Optimization pada Produksi Antibodi Monoklonal

**Data Input Industri (diadopsi dari studi tipikal Meza-Galvan et al., 2026):**

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Jumlah vial | 20.000 | vial |
| Volume isi per vial.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
