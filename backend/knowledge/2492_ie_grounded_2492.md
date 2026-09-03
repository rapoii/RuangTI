# 2492 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Integrasi Process Analytical Technology dalam Rekayasa Pengering Beku

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (freeze-drying) merupakan operasi unit kritis dalam industri biofarmasi yang digunakan untuk menstabilkan produk termolabil seperti protein monoklonal, antibodi terapeutik, vaksin mRNA, dan formulasi biologis kompleks. Proses ini menghilangkan air melalui sublimasi (pengeringan primer) dan desorpsi (pengeringan sekunder), mempertahankan integritas struktur molekuler sekaligus memperpanjang umur simpan produk hingga 24–36 bulan pada suhu penyimpanan 2–8 °C. Menurut Meza-Galvan, Strongrich, dan Darwish (2026, DOI: [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)), siklus liofilisasi tipikal berlangsung 48–96 jam dengan konsumsi energi spesifik 1,2–2,5 kWh per vial, menjadikan proses ini sebagai bottleneck ekonomi yang signifikan—terhitung 30–45% dari total biaya produksi produk parenteral steril.

Dalam kerangka **Process Analytical Technology (PAT)** yang diinisiasi FDA melalui Guidance for Industry (2004) dan diperkuat oleh ICH Q8(R2)/Q12, visibilitas proses secara *real-time* menjadi prasyarat fundamental untuk implementasi **Quality by Design (QbD)**. Namun, instrumentasi konvensional liofilizer依旧 menghadapi keterbatasan struktural: thermocouple berkabel (T-type atau K-type) memiliki densitas pengukuran terbatas (umumnya 4–8 titik per chamber), rentan terhadap interferensi elektromagnetik dari sistem vakum, serta memerlukan port馈通 yang mengurangi sterilitas ruang proses. Persoalan ini menjadi eskalasi kritis pada era manufaktur fleksibel (*flexible manufacturing*) di mana satu lini produksi melayani 6–12 produk berbeda dengan profil siklus yang variatif.

Jaringan Sensor Nirkabel (**Wireless Sensor Networks/WSN**) muncul sebagai paradigma disruptif yang menawarkan densitas pengukuran 10–50× lebih tinggi per unit volume, fleksibilitas redeploy, dan kemampuan *closed-loop control* yang sebelumnya tidak attainable. Artusio, Barresi, dan Pisano (2026, DOI: [10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)) menekankan bahwa integrasi WSN dengan algoritma machine learning dan digital twin memungkinkan transisi dari paradigma *batch release based on end-product testing* menuju *real-time release* (RTR), yang dapat memangkas waktu tunggu rilis hingga 60–80% dan mengurangi inventaris work-in-process sebesar 25–40%. Urgensi industrial ini diperkuat oleh proyeksi pasar PAT farmasi yang mencapai USD 4,8 miliar pada 2028 dengan CAGR 8,7%, di mana segmen WSN menyumbang ~18% pangsa.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Perpindahan Panas dan Massa pada Liofilisasi

Mekanisme sublimasi pada pengeringan primer dimodelkan melalui persamaan **Stefan–Plank** yang coupled dengan konduksi panas melalui lapisan produk beku:

$$\dot{m} = \frac{P_{i} - P_{c}}{\hat{R}_{p}} = \frac{\kappa_{s}}{\ell_{d}}(T_{b} - T_{i})$$

di mana $\dot{m}$ adalah fluks sublimasi (kg/m²·s), $P_{i}$ tekanan uap air pada antarmuka sublimasi (Pa), $P_{c}$ tekanan chamber (Pa), $\hat{R}_{p}$ resistansi perpindahan massa dried layer (m/Pa·s), $\kappa_{s}$ konduktivitas termal produk beku (W/m·K), $\ell_{d}$ ketebalan dried layer (m), $T_{b}$ suhu rak (shelf temperature), dan $T_{i}$ suhu pada antarmuka sublimasi.

Tekanan uap pada antarmuka sublimasi mengikuti persamaan **Clausius–Clapeyron** atau persamaan Goff–Gratch untuk rentang suhu operasi farmasi (−40 °C hingga −25 °C):

$$\ln(P_{i}) = -\frac{6134}{T_{i}} + 24.72 \quad \text{[Pa, T dalam K]}$$

### 2.2 Kinetika Degradasi Produk (Arrhenius)

Stabilitas hayati produk biologis selama siklus dimodelkan menggunakan persaran degradasi orde pertama dengan dependence suhu Arrhenius:

$$k_{d}(T) = A \cdot \exp\left(-\frac{E_{a}}{R_{g} T}\right)$$

$$C(t) = C_{0} \cdot \exp\left(-\int_{0}^{t} k_{d}(T(\tau)) \, d\tau\right)$$

dengan $A$ faktor pre-eksponensial, $E_{a}$ energi aktivasi (umumnya 80–150 kJ/mol untuk protein), dan $R_{g} = 8{,}314$ J/mol·K.

### 2.3 Arsitektur Jaringan Sensor Nirkabel

Konsumsi energi sensor node dimodelkan sebagai:

$$E_{tx}(k, d) = E_{elec} \cdot k + \epsilon_{amp} \cdot k \cdot d^{\alpha}$$

$$E_{rx}(k) = E_{elec} \cdot k$$

di mana $k$ adalah ukuran paket (bit), $d$ jarak transmisi (m), $E_{elec}$ energi sirkuit elektronik (≈ 50 nJ/bit), $\epsilon_{amp}$ energi amplifier (≈ 100 pJ/bit/m²), dan $\alpha$ path-loss exponent (2–4 untuk propagasi dalam ruang vakum).

**Link Quality Indicator (LQI)** dan **Received Signal Strength Indicator (RSSI)** mengikuti:

$$\text{RSSI}(d) = P_{0} - 10 \cdot n \cdot \log_{10}\left(\frac{d}{d_{0}}\right) + X_{\sigma}$$

dengan $P_{0}$ daya referensi pada jarak $d_{0}$, $n$ path loss exponent, dan $X_{\sigma} \sim \mathcal{N}(0, \sigma^2)$ komponen fading.

### 2.4 Estimasi State dengan Kalman Filter

Untuk rekonstruksi profil suhu pada titik tak terukur (virtual sensing), diterapkan **Extended Kalman Filter (EKF)**:

$$\hat{x}_{k|k-1} = F_{k}\hat{x}_{k-1|k-1} + B_{k}u_{k}$$

$$P_{k|k-1} = F_{k}P_{k-1|k-1}F_{k}^{T} + Q_{k}$$

$$K_{k} = P_{k|k-1}H_{k}^{T}(H_{k}P_{k|k-1}H_{k}^{T} + R_{k})^{-1}$$

dengan $F_k$ matriks transisi state, $Q_k$ kovariansi noise proses, $R_k$ kovariansi noise pengukuran, dan $K_k$ Kalman gain optimal.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem WSN-Freeze Dryer

Sistem integrasi mengikuti arsitektur tiga lapis sesuai rekomendasi Meza-Galvan et al. (2026):

**Lapisan 1 — Sensing Tier:** Node sensor berbasis platform STM32WL atau CC2652 dengan transceiver LoRa/Sub-GHz, mengakuisisi:
- Suhu presisi ±0,1 °C (RTD Pt1000 atau termistor NTC 10kΩ)
- Tekanan vakum 0,1–1000 mTorr (pirani gauge MEMS)
- Kelembaban residu (LyoRx atau NIR micro-sensors)
- Akselerometer untuk deteksi vial breakage

**Lapisan 2 — Network Tier:** Topologi mesh dengan gateway redundan (dual-radio), duty cycling 0,1–1% selama fase steady-state, dan synchronized time-stamping via IEEE 1588.

**Lapisan 3 — Application Tier:** SCADA/MES integration dengan historian (PI System atau OSIsoft), real-time dashboard, dan model-based predictive controller.

### 3.2 SOP Deployment dan Kalibrasi

```
┌──────────────────────────────────────────────┐
│ FASE 1: PRE-DEPLOYMENT QUALIFICATION         │
├──────────────────────────────────────────────┤
│ • Factory Acceptance Test (FAT)              │
│ • Sensor kalibrasi 3-titik (IQ/OQ/PQ)        │
│ • Wireless coverage mapping (RSSI heat map)  │
│ • EMC validation per IEC 61000-4             │
├──────────────────────────────────────────────┤
│ FASE 2: INSTALASI DI CHAMBER                │
├──────────────────────────────────────────────┤
│ • Sterilisasi sensor (VHP atau gamma 25 kGy)│
│ • Penempatan vial dengan sensor embedded     │
│ • Validasi sterility barrier (USP <1207>)    │
├──────────────────────────────────────────────┤
│ FASE 3: OPERASIONAL                         │
├──────────────────────────────────────────────┤
│ • Baseline noise characterization            │
│ • Real-time monitoring (1 Hz sampling)       │
│ • Drift detection (CUSUM/EWMA)               │
│ • Automated batch release documentation     │
└──────────────────────────────────────────────┘
```

### 3.3 Protokol Komunikasi dan Keamanan Data

Mengikuti **ISA-95** dan **21 CFR Part 11**, transmisi data dienkripsi dengan AES-256, dilengkapi electronic signature, dan audit trail yang immutable. Sampling rate disesuaikan: 1–10 Hz untuk fase freezing/primary drying, 0,1–1 Hz untuk secondary drying.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input

Studi kasus: liofilisasi **vaksin mRNA** dalam vial 10R, volume fill 2,0 mL, konsentrasi lipid nanoparticle 0,5 mg/mL. Spesifikasi:

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Shelf temperature $T_b$ | −5 | °C |
| Chamber pressure $P_c$ | 100 | mTorr (13,3 Pa) |
| Initial product temp | −45 | °C |
| Vial diameter $d_v$ | 24 | mm |
| Fill volume $V_f$ | 2,0 | mL |
| Solids content | 10 | % w/w |
| $E_a$ degradasi | 110 | kJ/mol |

### 4.2 Perhitungan Fluks Sublimasi

Menggunakan persamaan Goff–Gratch pada $T_i = -25$ °C (248,15 K):

$$P_{i} = \exp\left(-\frac{6134}{248{,}15} + 24{,}72\right) = \exp(-0{,}0148) \approx 0{,}9853 \text{ (fraksi tekanan uap)}$$

$$P_{i} = 0{,}9853 \times 611{,}73 \text{ Pa} = 602{,}84 \text{ Pa} = 4523 \text{ mTorr}$$

Driving force: $P_i - P_c = 602{,}84 - 13{,}33 = 589{,}5$ Pa

Dengan $\hat{R}_p = 1{,}2 \times 10^{5}$ m/Pa·s (tipikal dried layer 2 mm):

$$\dot{m} = \frac{589{,}5}{1{,}2 \times 10^{5}} = 4{,}91 \times 10^{-3} \text{ kg/m}^2\text