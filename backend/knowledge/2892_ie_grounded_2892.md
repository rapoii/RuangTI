# 2892 — Jaringan Sensor Nirkabel dalam Proses Liofilisasi Farmasi: Rekayasa Pemantauan Vial, PAT, dan Optimasi Siklus Beku-Kering

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*, Bab 4. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*, Bab 11. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (freeze-drying) merupakan unit operasi kritis dalam industri biofarmasi untuk menstabilkan produk termolabil seperti protein monoklonal, vaksin mRNA, antibodi terapeutik, dan formulasi kompleks parenteral. Lebih dari 50% produk biofarmasi baru yang mendapat persetujuan regulatori antara tahun 2020–2025 memerlukan tahap liofilisasi sebagai bagian dari siklus hidupnya (Meza‐Galvan et al., 2026, DOI: [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)). Dalam konteks ini, kemampuan untuk memantau kondisi fisikokimiawi setiap vial secara *real-time* menjadi penentu langsung kualitas produk, yield, dan kepatuhan terhadap panduan *Process Analytical Technology* (PAT) yang diterbitkan FDA pada tahun 2004 dan telah diperkuat oleh ICH Q8/Q9/Q10.

Permasalahan fundamental yang diangkat oleh Meza‐Galvan, Strongrich, dan Darwish (2026) adalah variabilitas vial-ke-vial (*vial-to-vial variability*) yang inheren dalam batch produksi. Termokopel konvensional berjenis T (tembaga-konstantan) yang dipasang pada 1–3 vial sentinel dari total ribuan vial hanya memberikan cakupan spasial di bawah 0,3%. Kondisi pada vial di tepi rak (*edge vials*) yang menerima radiasi panas dominan dari dinding ruang vakum, dibandingkan vial di pusat rak (*center vials*), menunjukkan gradien suhu yang signifikan. Penelitian oleh Pikal dan rekan-rekannya menunjukkan bahwa suhu produk vial tepi dapat melebihi vial pusat hingga 4–7 °C pada tekanan ruang 100 mTorr — perbedaan kecil yang menentukan apakah terjadi *collapse* (keruntuhan struktur cake) atau mempertahankan morfologi amorf yang diinginkan.

Selain itu, siklus primary drying yang merupakan fase paling lama (umumnya 30–80 jam) dan paling mahal secara energetik memerlukan monitoring endpoint yang presisi. Kesalahan 5–10% dalam estimasi endpoint dapat membuang biaya energi USD 5.000–15.000 per batch untuk lyophilizer skala industri (kapasitas 50.000–100.000 vial). Dalam konteks ini, Jaringan Sensor Nirkabel (Wireless Sensor Networks/WSN) muncul sebagai teknologi disruptif yang memungkinkan penempatan ratusan sensor miniatur pada vial aktual, memberikan visibilitas tanpa preseden terhadap dinamika sublimasi.

Bab 11 oleh Artusio, Barresi, dan Pisano (2026, DOI: [10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)) menyoroti bahwa adopsi WSN dalam liofilisasi merupakan komponen dari tren *Industry 4.0* dan *Pharma 4.0*, di mana keputusan operasional (misalnya, modifikasi suhu shelf secara adaptif) diambil berdasarkan data sensor kontinu yang dikombinasikan dengan model *digital twin*. Urgensi ekonominya tecermin dari tekanan persaingan industri CDMO (*Contract Development and Manufacturing Organization*) untuk mempersingkat *time-to-market* sambil mempertahankan yield >95% dan residual moisture <1% w/w sesuai dengan spesifikasi produk.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Perpindahan Panas dan Massa pada Liofilisasi

Mekanisme primary drying dikuantifikasi secara klasik oleh Pikal melalui dua persamaan kopling untuk laju sublimasi es pada tiap vial:

$$ \frac{dm}{dt} = \frac{A_p \cdot (P_i - P_c)}{R_p} \quad \text{(persamaan perpindahan massa)} \tag{1} $$

$$ Q = A_v \cdot K_v \cdot (T_s - T_b) = \Delta H_s \cdot \frac{dm}{dt} \quad \text{(persamaan keseimbangan panas)} \tag{2} $$

di mana:
- $A_p$ = luas penampang area pori yang tersedia untuk aliran uap air (m²)
- $P_i$ = tekanan uap air pada interface sublimasi (Pa)
- $P_c$ = tekanan ruang/kondensor (Pa)
- $R_p$ = resistansi perpindahan massa dried layer (Pa·m²·s/kg)
- $A_v$ = luas vial bagian luar (m²)
- $K_v$ = koefisien transfer panas vial (W/m²·K)
- $T_s$ = suhu shelf (K)
- $T_b$ = suhu produk pada bagian bawah (K)
- $\Delta H_s$ = entalpi sublimasi es ≈ 2.838 kJ/kg pada 0 °C

Tekanan uap air pada interface sublimasi mengikuti persamaan Goff–Gratch atau pendekatan Clausius–Clapeyron yang disederhanakan:

$$ P_i(T) = \exp\left(28.916 - 6136.6/T\right) \quad \text{[Pa, untuk } T \in (190, 273) \text{ K]} \tag{3} $$

Hubungan ini penting karena pada suhu produk 240 K (–33 °C), $P_i$ hanya sekitar 0,21 mbar — perbedaan tekanan parsial inilah yang menggerakkan sublimasi.

### 2.2 Link Budget dan Propagasi Sinyal Nirkabel dalam Ruang Vakum

Lingkungan ruang lyophilizer menghadirkan tantangan propagasi RF yang unik. Dinding stainless steel 316L berfungsi sebagai *Faraday cage* parsial dengan *shielding effectiveness* 60–90 dB pada 2,4 GHz. Persamaan link budget Friis menentukan apakah sensor pada vial terdeteksi:

$$ P_r = P_t + G_t + G_r - L_{path} - L_{misc} \tag{4} $$

dengan rugi lintasan dalam mode *quasi-free space* di dalam ruang logam tertutup yang dimodifikasi:

$$ L_{path}(dB) = 20\log_{10}\left(\frac{4\pi d}{\lambda}\right) + \alpha \cdot d \quad \text{(free-space)} \tag{5} $$

Karena sinyal RF harus diekstraksi dari dalam ruang vakum, digunakan pendekatan *penetration coupling* melalui jendela kuarsa atau *waveguide-below-cutoff* feedthrough. Redaman tambahan menembus dinding baja setebal 12,7 mm adalah:

$$ L_{steel}(dB) = 20\log_{10}\left(\frac{1}{T_{RF}}\right), \quad T_{RF} \approx \frac{4\eta_1\eta_2}{(\eta_1+\eta_2)^2} \cdot e^{-d\sqrt{\pi f \mu \sigma}} \tag{6} $$

di mana $\eta_1, \eta_2$ adalah impedansi intrinsik medium, $\mu$ permeabilitas, $\sigma$ konduktivitas, $d$ ketebalan dinding, dan $f$ frekuensi RF. Untuk baja pada 2,4 GHz, $\sqrt{\pi f \mu \sigma} \approx 5{,}3 \times 10^4$ Np/m, yang menjadikan jendela kuarsa sebagai opsi paling realistis.

### 2.3 Model Termal dan Arrhenius untuk Degradasi Produk

Stabilitas hayati produk pada suhu tertentu mengikuti kinetika Arrhenius yang digunakan untuk menghitung Mean Kinetic Temperature (MKT) sesuai USP <1079>:

$$ MKT = \frac{\Delta H / R}{-\ln\left(\frac{\sum_{i=1}^{n} e^{-\Delta H/RT_i}}{n}\right)} \tag{7} $$

dengan $\Delta H$ = 83,144 J/mol (default aktivasi) dan $R$ = 8,314 J/mol·K. Persamaan ini sensitif terhadap outliers suhu, sehingga monitoring vial individual oleh WSN sangat penting untuk menjamin MKT aktual tidak melebihi ambang batas produk (umumnya ≤ –30 °C untuk formulasi berbasis sukrosa).

### 2.4 Sampling dan Kriteria Nyquist

Sensor harus memenuhi kriteria Nyquist untuk menangkap dinamika sublimasi. Jika laju sublimasi maksimum terjadi pada transien awal dengan konstanta waktu $\tau_{sub}$ ≈ 3–8 menit, maka frekuensi sampling minimum:

$$ f_s \geq 2 f_{max}, \quad f_{max} = \frac{1}{2\pi \tau_{sub}} \approx 0{,}5 \text{–1,5 mHz} \tag{8} $$

Artinya sampling 0,01–0,05 Hz (satu sampel tiap 20–100 detik) sudah memadai, membuka peluang untuk protokol komunikasi low-power seperti Bluetooth Low Energy (BLE) atau Zigbee dengan duty cycle rendah.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Jaringan Sensor

Penerapan WSN dalam lyophilizer mengikuti arsitektur berlapis:

1. **Lapisan Sensor (Tier 1):** Transduser suhu (termistor NTC 10kΩ, akurasi ±0,1 °C), sensor kapasitif untuk kelembapan relatif ruang, dan micro-pressure sensor MEMS untuk tekanan parsial uap air. Sensor ditanam pada PCB fleksibel 8 × 12 mm dan ditempel di dasar vial.
2. **Lapisan Komunikasi (Tier 2):** Radio transceiver BLE 5.0 (Nordic nRF52840) atau LoRa (Semtech SX1276) tergantung kebutuhan jangkauan. Antenna printed-F meander pada substrat polimida agar kompatibel dengan suhu kriogenik.
3. **Lapisan Gateway (Tier 3):** Antena penerima eksternal dengan feedthrough kuarsa menembus dinding ruang vakum ke modul gateway yang mengumpulkan data secara *time-stamped*.
4. **Lapisan Analitik (Tier 4):** Platform SCADA/OPC-UA yang menjalankan algoritma *Moving Average*, *Kalman Filter*, dan model *digital twin* untuk prediksi endpoint.

### 3.2 Diagram Alir SOP Implementasi

```
┌─────────────────────────────────────────────────────────────┐
│ FASE 1: PRE-QUALIFICATION (8 minggu)                       │
│  • Validasi sensor terhadap termokopel referensi ±0,2 °C   │
│  • Pengujian battery life pada suhu –40 °C / +60 °C        │
│  • Benchmark link budget pada chamber kosong & terisi       │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ FASE 2: CALIBRATION (3 batch pertama)                     │
│  • Kalibrasi 3 titik (–40 °C, 0 °C, +40 °C) NIST-traceable│
│  • Penempatan 30 sensor + 3 termokopel kontrol            │
│  • Cross-validation dengan Tunable Diode Laser Absorption │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ FASE 3: PRODUCTION MONITORING (ongoing)                   │
│  • Real-time vial mapping & heat-flux estimation          │
│  • Adaptive cycle: modifikasi T_shelf berdasarkan edge    │
│  • Endpoint detection via d²m/dt² inflection point       │
└─────────────────────────────────────────────────────────────┘
                           ↓
┌─────────────────────────────────────────────────────────────┐
│ FASE 4: POST-BATCH ANALYTICS                              │
│  • MKT per vial, residual moisture prediction             │
│  • Heterogeneity index H = σ_T/μ_T × 100%               │
│  • Update model digital twin, feed ke QbD design space    │
└─────────────────────────────────────────────────────────────┘
```

### 3.3 Protokol Battery dan Manajemen Daya

Sensor harus beroperasi selama 96–120 jam (4–5 hari) mencakup loading, freezing, primary drying, secondary drying. Dengan baterai Li-thionyl chloride (saat suhu rendah, kapasitas turun 25–40%), arus rata-rata yang diizinkan:

$$ I_{avg} \leq \frac{Q_{bat}}{t_{cycle}} = \frac{2400 \text{ mAh}}{120 \text{ h}} = 20 \text{ mA} \tag{9} $$

Daya dialokasikan: 60% untuk pengukuran & ADC, 30% untuk transmisi radio, 10% untuk processing dan sleep mode. Penggunaan *event-driven wake-up* (misalnya, accelerometer trigger pada perubahan orientasi vial) menurunkan