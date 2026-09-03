# 2204 — Jaringan Sensor Nirkabel untuk Liofilisasi: Arsitektur Pemantauan Proses PAT pada Pengeringan Beku Farmasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (freeze-drying) merupakan unit operasi kritis dalam manufaktur farmasi modern, khususnya untuk produk biologi, vaksin mRNA, antibodi monoklonal, dan API (Active Pharmaceutical Ingredient) yang bersifat termolabil. Proses ini menghilangkan air melalui sublimasi pada kondisi vakum dan suhu rendah, mempertahankan stabilitas molekuler produk yang tidak dapat dicapai oleh teknik pengeringan konvensional. Secara global, pasar freeze-drying farmasi bernilai lebih dari USD 2,5 miliar per tahun dan diproyeksikan tumbuh pada CAGR 7,8% (2024–2030), didorong oleh ekspansi pipeline biofarmasi dan terapi berbasis protein. Namun, menurut Meza-Galvan, Strongrich, dan Darwish (2026), industri menghadapi tantangan fundamental terkait **visibilitas proses**: sensor kabel tradisional (thermocouple T-type, RTD PT-100) memiliki keterbatasan geometris yang signifikan, terutama pada vial berdiameter kecil (< 13 mm) atau container format baru seperti nested syringes dan microtiter plates. Kabel thermocouple hanya dapat memantau 1–2 vial per batch dari total ribuan vial yang diproses, menciptakan **blind spot** statistik yang memicu heterogenitas batch dan yield loss hingga 15–25%.

Konteks ekonomi dan regulasi memperkuat urgensi adopsi Wireless Sensor Networks (WSN). FDA melalui inisiatif **Process Analytical Technology (PAT)** sejak 2004 mendorong penerapan pemantauan real-time, multivariate, dan berbasis pemahaman ilmiah (*QbD – Quality by Design*). ICH Q8(R2), Q9, dan Q10 menetapkan bahwa kontrol proses harus dibangun di atas data kuantitatif yang robust, bukan inspeksi akhir produk. Artusio, Barresi, dan Pisano (2026) menguraikan bahwa kombinasi WSN dengan soft-sensor, Machine Learning, dan digital twin merupakan pilar arsitektur PAT generasi berikutnya. Kegagalan satu batch freeze-drying bernilai USD 500 ribu – 2 juta (tergantung skala), sehingga investasi WSN dengan payback period 6–18 bulan menjadi sangat rasional secara rekayasa ekonomi. Lebih jauh, pandemi COVID-19 menunjukkan kerentanan rantai pasok vaksin yang memerlukan visibilitas proses ujung-ke-ujung (*end-to-end*), menjadikan WSN bukan sekadar opsi teknologi melainkan prasyarat ketahanan farmasi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Perpindahan Panas pada Sublimasi

Mekanisme inti freeze-drying adalah perpindahan panas dari rak (shelf) melewati dasar vial, melalui lapisan produk kering (dried layer), hingga antarmuka sublimasi (sublimation front). Model kuasi-steady state yang digunakan oleh Meza-Galvan et al. (2026) mengikuti formulasi Pikal (1985) yang telah menjadi standar industri:

$$q = \frac{T_{shelf} - T_{ice}}{R_{total}} = \frac{T_{shelf} - T_{ice}}{\frac{1}{h_c} + \frac{L}{\lambda_d} + \frac{L}{k_s}}$$

di mana:
- $q$ = fluks panas (W/m²)
- $T_{shelf}$, $T_{ice}$ = suhu rak dan suhu antarmuka sublimasi (K)
- $R_{total}$ = resistansi termal total (m²·K/W)
- $h_c$ = koefisien konveksi-radiasi antara rak dan vial (≈ 15–25 W/m²·K)
- $L$ = ketebalan lapisan produk kering (m), fungsi waktu
- $\lambda_d$ = konduktivitas termal dried layer (≈ 0,02–0,05 W/m·K)
- $k_s$ = konduktivitas termal stopper/kaca vial

Laju sublimasi $\dot{m}$ (kg/s·m²) mengikuti:

$$\dot{m} = \frac{q}{\Delta H_s}$$

dengan $\Delta H_s$ ≈ 2.840 kJ/kg (entalpi sublimasi es pada 0 °C). Substitusi menghasilkan:

$$\dot{m} = \frac{T_{shelf} - T_{ice}}{\Delta H_s \cdot R_{total}}$$

### 2.2 Neraca Massa Vial dan Persamaan Residu Air

Untuk vial tunggal volume $V$ (mL), kadar air residual $R_w$ setelah waktu $t$ dihitung dengan:

$$R_w(t) = R_w(0) - \frac{1}{M_s} \int_0^t \dot{m}(t) \cdot A_v \, dt$$

di mana $M_s$ = massa solut (kg) dan $A_v$ = luas penampang vial (m²). Model degradasi kualitas produk selama drying mengikuti kinetika Arrhenius:

$$\frac{dC}{dt} = -k_0 \exp\left(-\frac{E_a}{RT_{product}}\right) \cdot C^n$$

dengan $E_a$ = energi aktivasi (kJ/mol), $k_0$ = faktor pre-eksponensial, dan $n$ = orde reaksi.

### 2.3 Arsitektur Jaringan Sensor Nirkabel

WSN dalam liofilisasi mengikuti topologi **star-mesh hybrid**. Sensor node (mote) ditempatkan pada vial mewakili, mengirimkan data melalui protokol IEEE 802.15.4/ZigBee atau BLE 5.x ke gateway. Model konsumsi energi node mengikuti:

$$E_{node} = \int_0^{t_{batch}} \left( P_{sense} + P_{proc} + \frac{N_{tx} \cdot P_{tx}}{T_{sample}} + P_{sleep} \right) dt$$

Lifetime baterai lithium primer (3,6 V, 2,4 Ah) tipikal:

$$t_{life} = \frac{C_{bat}}{I_{avg}} = \frac{C_{bat}}{P_{avg}/V_{bat}}$$

Meza-Galvan et al. (2026) melaporkan bahwa dengan duty cycle 1% (tx setiap 60 detik, payload 32 byte), lifetime mencapai > 600 jam, mencakup batch primer dan sekunder.

### 2.4 Ketidakpastian Pengukuran dan Propagasi Variansi

Sensor nirkabel memiliki ketidakpastian sistematik yang harus digabung menggunakan **root-sum-square (RSS)**:

$$u_c = \sqrt{\sum_{i=1}^{N} \left(\frac{\partial f}{\partial x_i}\right)^2 u_i^2}$$

Untuk suhu $T$ dengan tiga sumber error (kalibrasi $u_1$, drift $u_2$, noise $u_3$): $u_c = \sqrt{u_1^2 + u_2^2 + u_3^2}$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Implementasi WSN pada Lyophilizer

```
┌─────────────────────────────────────────────┐
│   LAYER 1: SENSOR FIELD (VIAL-LEVEL)        │
│   - 16–64 wireless motes per shelf          │
│   - MEMS T/RH sensor (±0,2 °C, ±1,5 %RH)  │
│   - Pressure transducer (Pirani/capacitive) │
└────────────────┬────────────────────────────┘
                 │ IEEE 802.15.4 / BLE
┌────────────────▼────────────────────────────┐
│   LAYER 2: GATEWAY & EDGE COMPUTING         │
│   - Raspberry Pi/industrial PC              │
│   - Time-sync NTP/PTP (μs resolution)      │
│   - Local buffer & anomaly detection       │
└────────────────┬────────────────────────────┘
                 │ OPC-UA / MQTT / MQTT-SN
┌────────────────▼────────────────────────────┐
│   LAYER 3: SCADA / PAT DATA HISTORIAN       │
│   - OSIsoft PI, Siemens Sipat, Emerson      │
│   - Multivariate analysis (PCA, PLS)        │
└────────────────┬────────────────────────────┘
                 │ REST API / SQL
┌────────────────▼────────────────────────────┐
│   LAYER 4: DIGITAL TWIN & CONTROL ROOM       │
│   - Real-time dashboard, batch release       │
└─────────────────────────────────────────────┘
```

### 3.2 SOP Deployment Sensor Nirkabel

Berdasarkan Meza-Galvan et al. (2026) dan praktik industri GMP-compliant:

1. **Pra-deployment (T-7 hari):**
   - Kalibrasi 3-titik sensor pada 25 °C, 0 °C, dan -40 °C di bath silikon oil dengan reference RTD bersertifikat NIST.
   - Validasi wireless range test dalam chamber kosong dengan shielding logam (vakum mempengaruhi propagasi RF).
   - Pembuatan **Design of Experiment (DoE)** penempatan vial sensor mengikuti rekomendasi FDA PAT: stratified random sampling, edge-center-corner.

2. **Loading & Inisialisasi (T-1 jam):**
   - Pre-conditioning sensor pada suhu ruang chamber selama 30 menit untuk menghilangkan kondensasi.
   - Aktivasi mote, pairing dengan gateway, verifikasi checksum CRC.
   - Dokumentasi **batch record** elektronik sesuai 21 CFR Part 11.

3. **Operasi Real-time:**
   - Sampling interval adaptif: 30 detik (freezing), 60 detik (primary drying), 120 detik (secondary drying).
   - Auto-flagging ketika $T_{product} > T_{collapse} + 2\,°C$ atau pressure divergence > 0,1 mbar.

4. **Post-batch:**
   - Unload sensor, data wiping (jika disposable), atau sterilisasi ulang (jika reusable).
   - Statistical Process Control (SPC) chart generation: $\bar{x}$, $R$, $C_{pk}$.

### 3.3 Integrasi dengan Soft-Sensor dan Machine Learning

Artusio et al. (2026) menyoroti bahwa data WSN harus diolah melalui **Moving Window PCA** untuk de-noising, kemudian **Partial Least Squares (PLS)** untuk memprediksi parameter yang sulit diukur langsung seperti $\dot{m}$, sublimation front position, dan $R_w$. Formulasi PLS:

$$\mathbf{X} = \mathbf{T}\mathbf{P}^T + \mathbf{E}, \quad \mathbf{Y} = \mathbf{T}\mathbf{Q}^T + \mathbf{F}$$

di mana $\mathbf{T}$ = score matrix, $\mathbf{P},\mathbf{Q}$ = loading matrices, dan $\mathbf{E},\mathbf{F}$ = residual matrices.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Primary Drying pada 2 mL Vial (Sucrose 5% formulation)

**Parameter Input (representatif untuk industri):**
- $T_{shelf}$ = -25 °C = 248,15 K
- $T_{ice}$ target = -32 °C = 241,15 K
- Vial: 2R (ø luar 16 mm, dalam 13 mm), tinggi produk 10 mm
- $L$ (dried layer akhir) ≈ 0,005 m
- $\lambda_d$ = 0,025 W/m·K
- $k_s$ = 0,001 m²·K/W (kaca + stopper)
- $h_c$ = 20 W/m²·K
- $\Delta H_s$ = 2.840 kJ/kg
- Kandungan air awal $R_w(0)$ = 80% (basis basah), massa solut per vial = 0,05 g, massa air = 0,2 g

**Langkah 1: Hitung Resistansi Total**

$$R_{total} = \frac{1}{h_c} + \frac{L}{\lambda_d} + L \cdot k_s$$
$$R_{total} = \frac{1}{20} + \frac{0{,}005}{0{,}025} + 0{,}005 \cdot 0{,}001$$
$$R_{total} = 0{,}050 + 0{,}200 + 0{,}000005$$
$$R_{total} = 0{,}250 \text{ m}^2\cdot\text{K/W}$$

**Langkah 2: Hitung Fluks Panas**

$$q = \frac{T_{shelf} - T_{ice}}{R_{total}} = \frac{(248{,}15 - 241{,}15)\text{ K}}{0{,}250 \text{ m}^2\cdot\text{K/W}}$$
$$q = \frac{7 \text{ K}}{0{,}250 \text{ m}^2\cdot\text{K/W}} = 28 \text{ W/m}^2$$

**Langkah 3: Hitung Laju Sublimasi**

$$\dot{m} = \frac{q}{\Delta H_s} = \frac{28 \text{ W/m}^2}{2{,}840 \times 10^3 \text{ J/kg}} = 9{,}86 \times 10^{-6} \text{ kg/(m}^2\cdot\text{s)}$$

**Langkah 4: Estimasi Durasi Primary Drying**

Luas penampang vial dalam: $A_v = \pi \cdot (0{,}0065)^2 = 1{,}327 \times 10^{-4}$ m²
Massa air per vial: $m_w = 0{,}2 \times 10^{-3}$ kg
Waktu total (tanpa koreksi $L$ growth):

$$t = \frac{m_w}{\dot{m} \cdot A_v} = \frac{0{,}2 \times 10^{-3}}{9{,}86 \times 10^{-6} \cdot 1{,}327 \times 10^{-4
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
