# 2684 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Rekayasa Pemantauan Proses Kritis Berbasis PAT (Process Analytical Technology)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (*freeze-drying*) merupakan proses unit operasi kritis dalam industri biofarmasi yang digunakan untuk menstabilkan produk termolabil seperti protein monoklonal, antibodi terapeutik, formulasi vaksin mRNA, dan produk *cell & gene therapy*. Menurut Meza‐Galvan, Strongrich, dan Darwish (2026, DOI: [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)), lebih dari 50 % produk biologik baru yang masuk fase klinis membutuhkan proses liofilisasi, dan satu siklus produksi pada *freeze-dryer* skala komersial dapat bernilai USD 2–8 juta per *batch*, dengan downtime akibat *failed batch* yang merugikan lebih dari USD 250.000 per kejadian. Oleh karena itu, visibilitas proses yang tinggi (*process visibility*) menjadi kebutuhan strategis.

Kondisi vakum di dalam ruang liofilizer (10–100 Pa) dikombinasikan dengan siklus termal yang lebar (−50 °C hingga +40 °C) membatasi jenis sensor yang dapat digunakan. Pendekatan konvensional menggunakan termokopel berkabel (*wired thermocouples*), sensor tekanan Pirani/Capacitance, dan RTD yang dipasang melalui *feedthrough* port. Metode ini menimbulkan tiga masalah utama: (i) jumlah titik ukur terbatas (umumnya ≤3 vial termonitor), (ii) *feedthrough* logam menurunkan kevakuman dan menghambat penskalaan, dan (iii) invasifitas kabel mempengaruhi profil suhu vial yang diukur.

Jaringan Sensor Nirkabel (*Wireless Sensor Networks*/WSN) muncul sebagai solusi transformatif. Meza‐Galvan *et al.* (2026, DOI: [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)) memaparkan arsitektur WSN khusus untuk lingkungan vakum yang mampu memantau suhu, kelembapan relatif, dan tekanan parsial pada ratusan vial secara simultan. Pendekatan ini selaras dengan inisiatif PAT (*Process Analytical Technology*) FDA (2004) yang kemudian diperkuat oleh ICH Q8(R2), Q9, Q10, dan Q12. Artusio, Barresi, dan Pisano (2026, DOI: [10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)) melengkapi narasi tersebut dengan membahas teknologi pendukung seperti *Tunable Diode Laser Absorption Spectroscopy* (TDLAS) dan algoritma *machine learning* yang bekerja sinergis dengan data WSN untuk kontrol adaptif dan *real-time release* (RTR). Urgensi ekonominya jelas: menurut data internal industri yang dirujuk Meza‐Galvan *et al.*, penerapan WSN mampu meningkatkan *yield* dari 78 % menjadi 94 % pada proses *dual-chamber syringe* karena identifikasi vial *edge-effect* yang jauh lebih cepat.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Sublimasi Es Primer

Laju sublimasi $J$ (kg·m⁻²·s⁻¹) di antarmuka produk dikendalikan oleh perbedaan tekanan uap air antara es dan ruang vakum melalui persamaan Hertz–Knudsen:

$$J = \alpha \cdot \frac{P_{ice}(T_s) - P_c}{\sqrt{2\pi M_w R T_s}}$$

di mana $\alpha$ adalah koefisien adaptasi sublimasi (≈ 0.7–1.0 untuk es amorf), $P_{ice}(T_s)$ adalah tekanan uap jenuh es pada suhu sublimasi $T_s$ (K), $P_c$ tekanan ruang (Pa), $M_w$ massa molar air (0.018 kg/mol), dan $R$ konstanta gas universal (8.314 J·mol⁻¹·K⁻¹). Sublimasi dikopling dengan konduksi panas dari rak (*shelf*) melalui vial:

$$q = K_v (T_{shelf} - T_s)$$

dengan $K_v$ koefisien transfer panas vial total yang merupakan jumlah konduksi kontak, konduksi gas, dan radiasi:

$$K_v = K_c + K_g + K_r$$

dengan $K_r = \sigma \varepsilon (T_{shelf}^3 + T_s^3)(T_{shelf} + T_s)$ pada $\sigma = 5.67 \times 10^{-8}$ W·m⁻²·K⁻⁴.

### 2.2 Model Stabilitas Produk (Kinetika Degradasi)

Degradasi produk biologis mengikuti persamaan Arrhenius:

$$k_d(T) = A \cdot \exp\left(-\frac{E_a}{RT}\right)$$

Konsentrasi produk aktif pada waktu $t$ :

$$C(t) = C_0 \cdot \exp\left(-\int_0^t k_d[T(\tau)]\, d\tau\right)$$

Karena $T(\tau)$ tidak lagi diasumsikan homogen (data WSN menunjukkan gradien ±2.8 °C antar-vial), integrasi menjadi stokastik terhadap posisi vial.

### 2.3 Model Propagasi RF dalam Ruang Vakum Berlogam

Untuk *link budget* WSN dalam *chamber* stainless steel:

$$PL(d) = PL(d_0) + 10\,n\log\!\left(\frac{d}{d_0}\right) + X_\sigma + \sum_i L_i$$

dengan $n$ *path-loss exponent* (≈ 2.0 dalam *free-space*, 1.4–1.8 pada mode propagasi *waveguide* di dalam liofilizer), dan $X_\sigma \sim \mathcal{N}(0,\sigma^2)$ sebagai *shadowing* log-normal. Dinding SS-316L menimbulkan redaman tambahan $L_i$ sebesar 18–35 dB per penetrrasi.

### 2.4 Konsumsi Daya & *Battery Lifetime*

Daya sensor *node* dirumuskan:

$$P_{node} = P_{sleep} \cdot \tau_{sleep} + P_{tx} \cdot \tau_{tx} + P_{sense} \cdot \tau_{sense}$$

Lama operasi baterai:

$$L_{bat} = \frac{C_{bat} \cdot V_{bat}}{P_{node}}$$

dengan $C_{bat}$ kapasitas (Ah) dan $V_{bat}$ tegangan (V).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem WSN-Lyo

Sistem yang diajukan Meza‐Galvan *et al.* (2026) mengikuti topologi tiga lapis:

1. **Lapisan Persepsi (*Sensor Layer*):** *Mote* miniatur (12 × 8 × 4 mm) berisi termistor NTC 10 kΩ (akurasi ±0.1 °C), sensor tekanan MEMS, dan transceiver Sub-1 GHz (868/915 MHz) berenvelope keramik *hermetic*.
2. **Lapisan Transportasi (*Gateway Layer*):** Antena *patch* terpasang di *door* liofilizer dengan *vacuum feedthrough* koaksial khusus.
3. **Lapisan Aplikasi (*Cloud/Edge Layer*):** Server SCADA menjalankan *digital twin* proses dan algoritma *Model Predictive Control* (MPC).

### 3.2 Diagram Alir SOP Kalibrasi & Deployment

```
┌────────────────────────────────────────────┐
│ 1. Validasi IQ/OQ sesuai GAMP 5 & 21 CFR 11│
│    → Kalibrasi termistor (0 °C, -45 °C)   │
│    → Uji *hermeticity* motes (He-leak test)│
└───────────────────┬────────────────────────┘
                    ▼
┌────────────────────────────────────────────┐
│ 2. Pemetaan Jaringan                        │
│    → RSSI survey untuk n mote              │
│    → Penentuan routing tree                │
└───────────────────┬────────────────────────┘
                    ▼
┌────────────────────────────────────────────┐
│ 3. Loading vial + penempatan motes          │
│    → 1 motes per vial target (corner/edge) │
│    → Kontrol vial standar (berkabel)       │
└───────────────────┬────────────────────────┘
                    ▼
┌────────────────────────────────────────────┐
│ 4. Cycle liofilisasi & akuisisi real-time  │
│    → Sampling 1 Hz, logging 24-72 jam      │
│    → Transmisi duty-cycled (<0.5%)         │
└───────────────────┬────────────────────────┘
                    ▼
┌────────────────────────────────────────────┐
│ 5. Post-cycle: reconciliasi data, *batch    │
│    record* otomatis & trending analytics   │
└────────────────────────────────────────────┘
```

### 3.3 Prosedur Pengendalian Mutu

- **USP \<1207\> *Container Closure Integrity***: verifikasi *hermeticity* motes menggunakan *helium mass spectrometry leak rate* ≤ 1×10⁻⁹ Pa·m³/s.
- **ISO 13485 / ICH Q9**: Manajemen Risiko Kualitas melalui *Failure Mode and Effects Analysis* (FMEA) untuk mode kegagalan motes (*battery depletion*, *RF loss*, *sensor drift*).
- **Patuh EU GMP Annex 1**: Validasi *vapor-phase hydrogen peroxide* (VPHP) kompatibilitas motes.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Operasi

Sebuah *freeze-dryer* pilot digunakan untuk formulasi protein 50 mg/mL dalam vial 10 mL. Kapasitas 1.500 vial, dengan 9 *wireless sensor nodes* (WSN) dan 3 termokopel kontrol (TK).

| Parameter | Nilai |
|---|---|
| Suhu rak ($T_{shelf}$) | −30 °C (priming), +25 °C (desorpsi) |
| Tekanan ruang ($P_c$) | 10 Pa |
| Diameter vial dalam | 14.0 mm |
| Area sublimasi per vial | $1.54\times10^{-4}$ m² |
| Energi aktivasi $E_a$ | 90 kJ/mol |
| Kapasitas baterai | 250 mAh @ 3.0 V |
| Sampling rate | 1 Hz (duty-cycle 0.3 %) |

### 4.2 Perhitungan Laju Sublimasi

Pada $T_s$ = −25 °C = 248.15 K, tekanan uap jenuh es (persamaan Murphy & Koop 2005):

$$P_{ice}(248.15) = \exp\!\left(9.550 - \frac{5723.265}{T_s} + 3.530 \ln T_s - 0.007283 T_s\right) \approx 51.6 \text{ Pa}$$

Sublimasi dengan $P_c = 10$ Pa dan $\alpha = 0.85$:

$$J = 0.85 \cdot \frac{51.6 - 10}{\sqrt{2\pi \cdot 0.018 \cdot 8.314 \cdot 248.15}}$$

$$J = 0.85 \cdot