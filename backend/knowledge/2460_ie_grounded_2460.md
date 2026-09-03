# 2460 — Jaringan Sensor Nirkabel untuk Liofilisasi: Integrasi Process Analytical Technology dalam Rekayasa Pengeringan Beku Farmasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Wireless Sensor Networks for Lyophilization*. Dalam: *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. Wiley-VCH. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Emerging Technologies in Pharmaceutical Freeze‐Drying*. Dalam: *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. Wiley-VCH. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (*freeze-drying*) merupakan unit operasi kritis dalam industri biofarmasi modern yang digunakan untuk menstabilkan produk biologis termolabil seperti antibodi monoklonal, vaksin mRNA, dan protein terapeutik. Menurut Meza-Galvan, Strongrich, dan Darwish (2026) dalam Chapter 4 buku *Process Analytical Technology for Pharmaceutical Freeze-Drying*, proses ini terdiri atas tiga tahap berurutan yaitu pembekuan (*freezing*), pengeringan primer (*primary drying*) yang dikendalikan oleh sublimasi, serta pengeringan sekunder (*secondary drying*) yang dikendalikan oleh desorpsi. Nilai strategis liofilisasi tampak pada pasar biofarmasi global yang mencapai lebih dari USD 400 miliar, di mana sekitar 50% produk biologis yang memerlukan rantai dingin (*cold chain*) menjalani proses liofilisasi untuk memperpanjang umur simpan dari beberapa bulan menjadi 2–3 tahun (DOI: 10.1002/9783527850303.ch4).

Permasalahan fundamental dalam operasi liofilisasi skala industri adalah *process variability* yang tinggi antar-vial. Seperti ditegaskan oleh Meza-Galvan dkk. (2026), gradien suhu lokal di dalam rak (*shelf*) yang mencapai selisih 2–4 °C antar-posisi vial dapat menyebabkan disparitas signifikan pada durasi pengeringan primer, sehingga vial di tepi (*edge vials*) mengalami *collapse* sedangkan vial di tengah (*center vials*) masih mengandung *bound water* berlebih. Disparitas ini menjadi tidak terdeteksi apabila sistem monitoring hanya mengandalkan termokopel kabel konvensional, karena keterbatasan jumlah kanal akuisisi (umumnya 16–32 kanal) sehingga hanya < 0,1% vial dalam batch yang terinstrumentasi (DOI: 10.1002/9783527850303.ch4). Dokumen FDA *Guidance for Industry: PAT — A Framework for Innovative Pharmaceutical Development, Manufacturing, and Quality Assurance* (2004) mendorong adopsi teknologi monitoring *real-time* yang lebih inklusif, dan WSN (*Wireless Sensor Networks*) muncul sebagai enabler utama paradigma tersebut.

Artusio, Barresi, dan Pisano (2026) dalam Chapter 11 menyoroti bahwa adopsi teknologi emergentes termasuk WSN, *controlled ice nucleation*, dan spektroskopi *process* (NIR, Raman, TDLAS) bukan sekadar peningkatan instrumentation, tetapi merupakan pergeseran paradigma menuju *Quality by Design* (QbD). Investasi pada sistem WSN memungkinkan *batch release* berbasis data *real-time* dan mengurangi *scrap rate* yang secara historis mencapai 5–15% pada lini liofilisasi vial skala besar. Urgensi ekonominya semakin nyata ketika satu bets produksi antibodi monoklonal bernilai USD 5–20 juta, sehingga setiap persen peningkatan *yield* memiliki dampak langsung pada profitabilitas perusahaan (DOI: 10.1002/9783527850303.ch11).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Perpindahan Panas dan Massa dalam Pengeringan Primer

Meza-Galvan dkk. (2026) menyatakan bahwa laju sublimasi $\dot{m}$ pada setiap vial ditentukan oleh dua resistansi berurutan, yaitu resistansi perpindahan panas dari rak menuju *product interface* dan resistansi perpindahan massa uap air dari *interface* menuju ruang kamar. Formulasi *heat transfer* untuk vial di rak adalah:

$$Q_v = K_v \cdot A_v \cdot (T_{sh} - T_p) + Q_{rad}$$

dengan $Q_v$ adalah kalor yang masuk ke vial (W), $K_v$ adalah koefisien perpindahan panas efektif vial (W/m²·K), $A_v$ luas penampang vial, $T_{sh}$ suhu rak, $T_p$ suhu produk pada *interface*, dan $Q_{rad}$ kontribusi radiasi (DOI: 10.1002/9783527850303.ch4). Pada kondisi *steady state*, kalor ini setara dengan laju sublimasi dikalikan panas laten sublimasi $\Delta H_s$:

$$\dot{m} = \frac{Q_v}{\Delta H_s} = \frac{K_v \cdot A_v \cdot (T_{sh} - T_p)}{\Delta H_s}$$

Laju sublimasi juga dapat diekspresikan melalui resistansi perpindahan massa:

$$\dot{m} = \frac{A_p \cdot (p_w(T_p) - p_c)}{R_p}$$

di mana $A_p$ luas penampang sublimasi, $p_w(T_p)$ tekanan uap air jenuh pada suhu produk (Pa), $p_c$ tekanan ruang (*chamber pressure*), dan $R_p$ resistansi *cake* (Pa·m²·s/kg). Tekanan uap air jenuh umumnya mengikuti persamaan Clausius-Clapeyron atau korelasi Goff-Gratch:

$$\ln p_w(T) = -\frac{6134.6}{T} + 24.721 \quad \text{[Pa, T dalam K]}$$

### 2.2 Profil Suhu Produk sebagai *State Variable*

Dengan menggabungkan kedua persamaan di atas, suhu produk pada keadaan tunak adalah:

$$T_p = T_{sh} - \frac{\Delta H_s \cdot A_p \cdot (p_w(T_p) - p_c)}{K_v \cdot A_v \cdot R_p}$$

Persamaan ini bersifat implisit terhadap $T_p$ dan diselesaikan secara iteratif (Newton-Raphson) untuk setiap posisi vial (DOI: 10.1002/9783527850303.ch4). Profil $T_p(t)$ adalah *state variable* kritis karena harus dijaga di bawah suhu *collapse* $T_c$ (umumnya $-30$ hingga $-40$ °C untuk formulasi berbasis sukrosa) untuk mencegah cacat struktural *cake*.

### 2.3 Arrhenius Kinetika Degradasi

Konsentrasi residual moisture $C_m$ dan *potency* produk $P(t)$ selama pengeringan sekunder mengikuti kinetika orde pertama Arrhenius:

$$\frac{dP}{dt} = -k_0 \cdot e^{-E_a/RT} \cdot P(t)$$

dengan $E_a$ energi aktivasi deamidation/agregasi (umumnya 80–120 kJ/mol untuk protein), $R$ konstanta gas universal, dan $T$ suhu vial. Model ini memungkinkan prediksi *shelf life* berdasarkan riwayat suhu *time-temperature-integrated* yang terekam oleh WSN (DOI: 10.1002/9783527850303.ch11).

### 2.4 Model Propagasi Sinyal WSN

Untuk desain topologi jaringan, *path loss* sinyal radio pada frekuensi 433 MHz atau 2,4 GHz di dalam ruang liofilizer mengikuti model log-distance:

$$PL(d) = PL(d_0) + 10n \log_{10}\left(\frac{d}{d_0}\right) + X_\sigma$$

dengan $n$ adalah *path loss exponent* (2–4 di lingkungan industri ber-logam), dan $X_\sigma$ variabel acak log-normal *shadowing* dengan standar deviasi $\sigma$ 4–8 dB. *Received Signal Strength Indicator* (RSSI) pada node sensor adalah:

$$RSSI = P_{tx} - PL(d)$$

dengan $P_{tx}$ daya pemancar (umumnya 0–10 dBm). SNR minimum untuk transmisi handal pada lingkungan chamber vakum harus melebihi 10 dB (DOI: 10.1002/9783527850303.ch4).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Jaringan Sensor Nirkabel

Meza-Galvan dkk. (2026) mengusulkan arsitektur tiga lapis (3-tier) untuk WSN dalam liofilizer:

**Tier 1 — Sensing Nodes:** Mikrosensor tertanam dalam vial (*wireless temperature sensor*, WTS) berbasis ASIC dengan akurasi ±0,3 °C pada rentang -50 hingga +50 °C, transmisi radio 433 MHz, baterai Li primer 3,6 V berkapasitas 1,2 Ah yang mampu beroperasi > 48 jam kontinu di lingkungan vakum 10 Pa.

**Tier 2 — Gateway/Gateway Node:** Repeater radio yang dipasang di dinding ruang liofilizer, terhubung ke *base station* melalui *vacuum feedthrough* RS-485 atau Ethernet industri.

**Tier 3 — Data Acquisition & Analytics Server:** Server SCADA/OPC-UA yang melakukan *time-series acquisition*, *outlier detection*, dan *multivariate statistical process control* (MSPC).

### 3.2 SOP Pemasangan dan Kalibrasi

Tahapan SOP yang dirujuk oleh Meza-Galvan dkk. (2026) untuk implementasi di lantai produksi:

| Langkah | Prosedur | Kriteria Penerimaan |
|---------|----------|---------------------|
| 1 | *Pre-calibration* WTS pada *chamber* bersuhu 25 °C menggunakan *reference RTD* | Deviasi < ±0,2 °C |
| 2 | Penempatan vial pada posisi grid 3×3, 4×4, atau 5×5 sesuai kapasitas chamber | Coverage ≥ 10% vial batch |
| 3 | *Leak check* sistem pada vakum < 5×10⁻³ mbar·L/s | Laju kebocoran < 1% |
| 4 | *Network commissioning* — verifikasi RSSI > -85 dBm untuk seluruh node | Packet loss < 0,5% |
| 5 | Validasi protokol komunikasi (misal: IEEE 802.15.4e TSCH) | Latency < 250 ms |
| 6 | *Run-in* dengan siklus liofilisasi placebo selama 2–3 batch | Drift < 0,5 °C antar-batch |

### 3.3 Diagram Alir Logika Pengendalian

```
[Inisialisasi] → [Freezing Ramp 1°C/min ke -45°C]
        ↓
[Hold 120 min untuk solidifikasi lengkap]
        ↓
[Vacuum to 10 Pa] → [Controlled nucleation opsional: T_sh = -5°C, hold]
        ↓
[Primary Drying: T_sh = +25°C, p_c = 10 Pa]
        ↓
[WSN Streaming T_p vials] → [T_p > T_collapse? → ALARM]
        ↓
[Comparative Pressure Pyrometry: T_p_calc vs T_p_WTS → Deviasi > 2°C? → Investigasi]
        ↓
[Primary Drying Endpoint via PRT/Manometric Temperature Measurement]
        ↓
[Secondary Drying: Ramp +5°C/jam ke +40°C, p_c = 1 Pa]
        ↓
[Stoppering pada p_c partial 800 mbar] → [End]
```

### 3.4 Penempatan Sensor dan Statistik Sampling

Sesuai Artusio dkk. (2026), strategi *spatial sampling* direkomendasikan mengikuti pola *stratified random sampling* dengan minimal satu sensor pada kuadran center, edge, dan corner untuk menangkap gradien radial chamber. Pada chamber berisi 10.000 vial, minimum 50–100 node sensor memberikan *statistical power* 95% untuk mendeteksi efek posisi dengan perbedaan suhu > 1,5 °C (DOI: 10.1002/9783527850303.ch11).

---

## 4.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
