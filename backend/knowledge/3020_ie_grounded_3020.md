# 3020 — Jaringan Sensor Nirkabel untuk Liofilisasi: Integrasi PAT, IoT, dan Rekayasa Proses Farmasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Wireless Sensor Networks for Lyophilization (WSN-Lyo) dalam kerangka Process Analytical Technology (PAT)
**Sitasi Utama:** Jesus Meza-Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze-Drying*, Chapter 4. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze-Drying*, Chapter 11. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (freeze-drying) merupakan unit operasi kritis dalam manufaktur farmasi modern, khususnya untuk produk biologis, vaksin, antibodi monoklonal, dan API (Active Pharmaceutical Ingredient) yang bersifat termolabil. Menurut Meza-Galvan, Strongrich, dan Darwish (2026) dalam bab *"Wireless Sensor Networks for Lyophilization"* (DOI: 10.1002/9783527850303.ch4), proses ini melibatkan tiga fase berturut-turut — *freezing*, *primary drying* (sublimasi), dan *secondary drying* (desorpsi) — yang harus dipantau secara *real-time* untuk menjamin kualitas produk akhir. Kompleksitas operasional muncul karena ketidakhomogenan suhu dan tekanan di dalam *chamber* liofilizer skala industri (luas rak 20–40 m², kapasitas 50.000–100.000 vial), di mana gradien termal yang kecil sekalipun dapat memicu *cake collapse*, *eutectic melt-back*, atau degradasi protein.

Urgensi penerapan *Wireless Sensor Networks* (WSN) di lini produksi farmasi didorong oleh tiga faktor struktural. **Pertama**, regulasi FDA *PAT Guidance (2004)* dan ICH Q8(R2) mensyaratkan *real-time quality assurance* berbasis data proses, bukan sekadar *end-product testing* (Meza-Galvan et al., 2026). **Kedua**, kerugian ekonomi akibat satu *batch failure* pada produk farmasi bernilai tinggi mencapai USD 500.000–2.000.000, sehingga investasi pada sistem monitoring granular menjadi *rational economic decision*. **Ketiga**, transisi ke *Pharma 4.0* sebagaimana diuraikan oleh Artusio, Barresi, dan Pisano (2026, DOI: 10.1002/9783527850303.ch11) menuntut integrasi sensor cerdas, edge computing, dan digital twin untuk memprediksi *endpoint* siklus secara adaptif.

Dalam konteks Teknik Industri, masalah WSN untuk liofilisasi bukan sekadar persoalan instrumentasi, melainkan persoalan **orkestrasi data** (*data orchestration*), **reliabilitas sistem** (*system reliability engineering*), dan **pengambilan keputusan berbasis data** (*data-driven decision making*). Sebuah liofilizer industri dengan 7 rak dan 4.000 vial memerlukan minimal 80–120 titik sensor suhu/kelembapan untuk memetakan *batch thermal profile*, namun pemasangan *thermocouple* wired menyebabkan *thermal load disturbance* pada produk dan menghambat validasi *clean-in-place* (CIP). Solusi WSN yang dibahas Meza-Galvan et al. (2026) mengatasi keterbatasan ini melalui node sensor miniatur berbasis MEMS, komunikasi *ultra-low-power* (mis. Bluetooth Low Energy, Zigbee, atau LoRa pada pita 868/915 MHz), dan *energy harvesting* dari gradien termal chamber.

Artusio et al. (2026) melengkapi kerangka ini dengan menyoroti bahwa WSN merupakan *enabler* bagi *emerging technologies* seperti *soft sensing* (estimator berbasis model), *machine learning-based primary drying endpoint detection*, dan *continuous monitoring* sepanjang *cold chain*. Kedua paper ini secara konsisten menunjukkan bahwa visibilitas data proses (*process visibility*) merupakan prasyarat bagi *closed-loop control* dan *real-time release* (RTR) produk farmasi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Sublimasi dan Resistansi Transfer Massa

Laju sublimasi selama *primary drying* pada vial farmasi mengikuti model resistansi seri Pikal (Pikal, 1985; dirujuk dalam Meza-Galvan et al., 2026):

$$\frac{dm}{dt} = \frac{A_v \cdot (P_{ice}(T_b) - P_c)}{\hat{R}_p}$$

dengan:
- $\frac{dm}{dt}$ = laju sublimasi massa (kg/s)
- $A_v$ = luas sublimasi internal vial (m²)
- $P_{ice}(T_b)$ = tekanan uap es pada suhu produk $T_b$ (Pa)
- $P_c$ = tekanan chamber (Pa)
- $\hat{R}_p$ = resistansi transfer massa vial termodifikasi (m²·Pa·s/kg)

Resistansi transfer massa berevolusi selama siklus karena pemadatan *dried layer*:

$$\hat{R}_p = R_{p,0} + \frac{A_0 \cdot L_0}{L_0 + B_0 \cdot m_{dried}}$$

dengan $R_{p,0}$ adalah resistansi awal (saat tidak ada *dried layer*), $L_0$ parameter geometri, dan $B_0$ koefisien pemadatan. Persamaan ini menentukan **waktu sublimasi** dan menjadi target estimasi WSN.

### 2.2 Keseimbangan Energi pada Rak dan Vial

Persamaan keseimbangan energi pada rak (*shelf*) liofilizer:

$$q_{shelf} = \frac{\Delta H_s \cdot dm/dt}{A_v} = K_v \cdot (T_{shelf} - T_b)$$

dengan $K_v$ = koefisien transfer panas vial (W/m²·K), $T_{shelf}$ = suhu rak, $T_b$ = suhu produk (bottom), dan $\Delta H_s \approx 2.838 \times 10^6$ J/kg (panas sublimasi es pada 0°C). Hubungan $T_b$ dengan $T_{shelf}$ menentukan apakah produk melewati *collapse temperature* $T_c$ yang khas untuk formulasi sukrosa-protein (sekitar -30°C).

### 2.3 Propagasi Sinyal Nirkabel dalam Ruangan Liofilizer

Untuk menjamin kualitas tautan (*link quality*) node WSN di dalam chamber stainless steel, digunakan model *path loss* Log-distance (Friis termodifikasi):

$$PL(d) = PL(d_0) + 10 \cdot n \cdot \log_{10}\left(\frac{d}{d_0}\right) + X_\sigma$$

dengan $PL(d_0)$ = *path loss* referensi pada jarak $d_0 = 1$ m, $n$ = *path loss exponent* (2.0 di ruang bebas; 2.5–4.0 di dalam chamber logam berisi vial gelas), dan $X_\sigma$ = variabel acak Gaussian dengan standar deviasi $\sigma$ (log-normal shadowing).

Daya terima pada node sensor:

$$P_r(d) = P_t + G_t + G_r - PL(d)$$

dengan syarat konektivitas $P_r \geq P_{sens}$ (sensitivitas receiver, tipikal -95 dBm untuk BLE SoC nRF52832). Margin desain minimum sebesar **20 dB** direkomendasikan untuk reliabilitas 99.9% di lingkungan liofilizer (Meza-Galvan et al., 2026).

### 2.4 Konsumsi Energi Node Sensor

Umur baterai node ditentukan oleh siklus tugas (*duty cycle*):

$$E_{cycle} = I_{active} \cdot t_{tx} + I_{rx} \cdot t_{rx} + I_{sleep} \cdot t_{sleep}$$

Umur baterai dengan kapasitas $C_{batt}$ (mAh):

$$T_{life} = \frac{C_{batt} \cdot V_{batt}}{I_{avg} \cdot V_{batt}} = \frac{C_{batt}}{I_{avg}}$$

dengan $I_{avg} = \alpha \cdot I_{active} + (1-\alpha) \cdot I_{sleep}$ dan $\alpha$ = fraksi waktu aktif node (untuk *duty cycle* 1%, $\alpha = 0.01$). Untuk siklus liofilisasi 72 jam, laju sampling suhu 0.1 Hz, dan baterai lithium CR2477 (1000 mAh), umur tipikal mencapai 3–5 tahun.

### 2.5 Model Arrhenius untuk Degradasi Produk

Akumulasi degradasi termal produk biologis mengikuti:

$$\ln k = \ln A - \frac{E_a}{R \cdot T}$$

dengan $k$ = konstanta laju degradasi, $E_a$ = energi aktivasi (umum 60–120 kJ/mol untuk protein), $R = 8.314$ J/mol·K. **Critical temperature** produk berkaitan dengan allowable degradation:

$$\Delta[\text{degradasi}] = \int_0^{t_{cycle}} A \cdot e^{-E_a/RT(t)} \, dt$$

Formula ini menjadi dasar *control strategy* WSN untuk menjaga $T_b < T_{critical}$ sepanjang *primary drying*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi WSN-Lyo mengikuti kerangka PAT yang diadaptasi oleh Meza-Galvan et al. (2026) dan diperkuat oleh Artusio et al. (2026):

**Tahap 1 — Risk Assessment & Design of Experiments (DoE).**
Identifikasi *Critical Quality Attributes* (CQA): *residual moisture* (<1% w/w), *cake appearance*, *reconstitution time*. Tentukan *Critical Process Parameters* (CPP): $T_{shelf}$, $P_c$, *ramp rate*, *hold time*. Gunakan *Failure Mode and Effects Analysis* (FMEA) untuk memetakan titik sensor.

**Tahap 2 — Deployment Arsitektur WSN.**
Arsitektur tiga lapis (*three-tier architecture*):

```
[Tier 1: Sensor Node] → [Tier 2: Gateway/Router] → [Tier 3: Cloud SCADA/MES]
   (MEMS temp, RH,         (Edge computing,           (LIMS, Historian,
    pressure, strain)         data buffering)             Digital Twin)
```

Setiap node dilengkapi:
- Sensor suhu digital **MAX31865** (akurasi ±0.1°C, rentang -55°C hingga +125°C) untuk *product temperature probe* (TemplRite atau LyoRx).
- Sensor kapasitif kelembapan **HIH8120** untuk memonitor *stoppering vacuum*.
- Sensor tekanan piezoresistif **MS5803-14BA** (resolusi 0.012 mbar) untuk verifikasi independen $P_c$.
- MCU **STM32WL** atau **nRF52840** dengan radio LoRa/BLE.
- *Energy harvesting* termoelektrik (TEG) berbasis efek Seebeck dari gradien $T_{shelf} - T_{ambient}$.

**Tahap 3 — Kalibrasi & Validasi (IQ/OQ/PQ).**
Sesuai *Good Automated Manufacturing Practice* (GAMP 5) dan ASTM E2503. Kalibrasi 3-titik menggunakan *dry-block calibrator* dengan standar traceability ke NIST. Validasi *measurement uncertainty* harus ≤ ±0.5°C untuk suhu produk sesuai USP <659>.

**Tahap 4 — Instalasi dalam Chamber.**
Node dipasang pada *dummy vial* yang didistribusikan secara strategis: **corner** (lokasi gradien termal tertinggi), **center**, **edge**, dan **cooler zones* (dekat dinding chamber). Formulasi penempatan mengikuti *design space* fractional factorial:

$$N_{sensor} = 2^k + \text{replicates}$$

dengan $k$ = jumlah faktor (umumnya $k=3$: posisi X, Y, Z), sehingga minimum 12 sensor per rak direkomendasikan.

**Tahap 5 — Integrasi dengan Process Control.**
Gateway mentransmisikan data via **OPC UA over MQTT** ke SCADA (Siemens PCS 7 atau Emerson DeltaV). Data dimasukkan ke *soft sensor* berbasis **1D moving boundary model** (Pikal-Pande-Manek) untuk estimasi *dried layer thickness* $L(t)$ dan prediksi *endpoint*.

**Tahap 6 — Continuous Monitoring & Release.**
Data historis disimpan di *time-series database* (InfluxDB atau OSIsoft PI), dengan *automatic outlier detection* menggunakan kontrol Shewhart atau algoritma **Isolation Forest** untuk anomali suhu tiba-tiba.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Studi Kasus: Liofilizer Industri Skala Pilot (40 L, 7 Rak, 1.200 Vial)

**Skenario:** Formulasi 5% sukrosa + 0.5% antibodi monoklonal (mAb), volume *fill* 3 mL/vial. Target *primary drying*: $T_b = -30°C$, $P_c = 10$ Pa, $T_{shelf} = -10°C$.

**Parameter input (dari literatur dan pengukuran tipikal):**

| Parameter | Simbol | Nilai | Satuan |
|---|---|---|---|
| Tekanan uap es di $T_b = -30°C$ | $P_{ice}$ | 38.0 | Pa |
| Tekanan chamber | $P_c$ | 10.0 | Pa |
| Resistansi transfer massa awal | $R_{p,0}$ | 0.5 | m²·Pa·s/kg |
| Luas sublimasi internal vial | $A_v$ | $8.5 \times 10$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
