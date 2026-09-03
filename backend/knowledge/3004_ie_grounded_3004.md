# 3004 — Jaringan Sensor Nirkabel (WSN) untuk Proses Liofilisasi Farmasi: Integrasi PAT, Pemodelan Termodinamika, dan Otomasi Rekayasa Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (*freeze-drying*) merupakan unit operasi kritis dalam industri biofarmasi yang digunakan untuk menstabilkan produk biologis termolabil seperti protein monoklonal, vaksin mRNA, antibodi terapeutik, dan sediaan parenteral bernilai tinggi. Menurut Meza-Galvan, Strongrich, dan Darwish (2026, DOI: [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)), proses ini melibatkan tiga tahap utama—*freezing*, *primary drying* (sublimasi), dan *secondary drying* (desorpsi)—yang masing-masing memerlukan kendali parameter proses secara presisi untuk menjamin kualitas produk akhir. Total siklus liofilisasi pada skala industri berkisar antara 24–96 jam per batch, dengan biaya operasional mencapai USD 50.000–200.000 per batch tergantung pada kapasitas vial dan kompleksitas formulasi (Artusio, Barresi, & Pisano, 2026, DOI: [10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)).

Urgensi penerapan Jaringan Sensor Nirkabel (*Wireless Sensor Networks*—WSN) dalam liofilisasi muncul dari tiga faktor struktural. Pertama, inisiatif **Process Analytical Technology (PAT)** yang diamanatkan oleh FDA melalui panduan *Guidance for Industry—PAT Framework* mendorong pengukuran *real-time* terhadap *Critical Process Parameters* (CPP) seperti suhu rak ($T_s$), suhu produk ($T_p$), dan tekanan ruang ($P_c$). Kedua, keterbatasan arsitektur instrumentasi kabel (*wired thermocouples*) tradisional menghambat skalabilitas, menambah beban pemeliharaan, dan memperkenalkan risiko kontaminasi partikulat melalui数百 kabel yang menembus dinding ruang vakum. Ketiga, meningkatnya kompleksitas formulasi—terutama untuk *Highly Concentrated Formulations* (HCF) dengan viskositas tinggi—memerlukan resolusi spasial pengukuran yang lebih tinggi untuk mendeteksi gradien termal antar vial.

Secara ekonomi, batch *failure rate* akibat deviasi proses liofilisasi mencapai 5–15% pada lini produksi biologis, menimbulkan kerugian signifikan bagi *Contract Development and Manufacturing Organizations* (CDMO). Implementasi WSN memungkinkan pengurangan variabilitas batch melalui umpan balik (*feedback*) yang lebih cepat ke sistem *Programmable Logic Controller* (PLC), sekaligus mendukung kepatuhan terhadap **21 CFR Part 11** melalui logging data terenkripsi. Dari perspektif *Industry 4.0*, WSN berfungsi sebagai tulang punggung (*backbone*) untuk integrasi *cyber-physical system* pada lini *fill-finish* parenteral, memungkinkan digital twin liofilizer dan prediksi *endpoint* berbasis model *machine learning*. Paper Meza-Galvan et al. (2026) secara khusus mengkaji arsitektur WSN multi-hop dengan protokol IEEE 802.15.4, sementara Artusio et al. (2026) memposisikan WSN sebagai komponen kunci dalam ekosistem teknologi emerging yang mencakup *spectroscopic PAT* (NIR, Raman), *tunable diode laser absorption spectroscopy* (TDLAS), dan *soft sensors* berbasis *multivariate data analysis*.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Perpindahan Panas dan Massa pada Liofilisasi

Meza-Galvan et al. (2026) merujuk pada model *heat-and-mass transfer* klasik Pikal untuk liofilisasi. Laju sublimasi es pada tahap *primary drying* direpresentasikan melalui dua persamaan simultan:

$$\dot{m} = \frac{A \cdot (p_i - p_c)}{R_p} \quad \text{(persamaan massa)}$$

$$\dot{Q} = \frac{A \cdot (T_s - T_p)}{R_s} = \dot{m} \cdot \Delta H_s \quad \text{(persamaan energi)}$$

di mana $\dot{m}$ adalah laju sublimasi (kg/s), $A$ luas penampang vial (m²), $p_i$ tekanan uap air pada antarmuka sublimasi (Pa), $p_c$ tekanan ruang (Pa), $R_p$ hambatan pindah massa produk (Pa·s/kg), $\dot{Q}$ laju aliran panas (W), $T_s$ suhu rak, $T_p$ suhu produk, $R_s$ hambatan termal sublimasi (m²·K/W), dan $\Delta H_s$ entalpi sublimasi es (≈ 2.838 kJ/kg pada 0 °C). Keseimbangan antara kedua persamaan ini menentukan *operating space* optimal yang dibatasi oleh batas suhu *collapse* ($T_{col}$) dan suhu *eutectic* ($T_{eu}$) produk.

### 2.2 Pemodelan Saluran Transmisi Nirkabel

Untuk WSN di dalam ruang vakum, redaman propagasi gelombang radio harus dimodelkan dengan persamaan *Friis* yang dimodifikasi untuk lingkungan multi-pantul:

$$P_r(d) = P_t + G_t + G_r - 20\log_{10}\left(\frac{4\pi d}{\lambda}\right) - n_{PL} \cdot 10\log_{10}(d) + X_\sigma$$

di mana $P_r(d)$ daya terima (dBm) pada jarak $d$, $P_t$ daya pancar, $G_t$ dan $G_r$ penguatan antena, $\lambda$ panjang gelombang, $n_{PL}$ eksponen rugi lintasan (*path loss exponent*, tipikal 1.6–2.0 dalam ruang baja nirkarat), dan $X_\sigma$ variabel acak *shadow fading* berdistribusi normal. Meza-Galvan et al. (2026) melaporkan bahwa pada frekuensi 2.4 GHz dalam liofilizer skala pilot, redaman tambahan 12–18 dB terjadi akibat refleksi logam dan kondisi vakum yang mengubah permitivitas dielektrik gas residual.

### 2.3 Konsumsi Daya dan Umur Baterai Sensor Node

Masa pakai sensor node ditentukan oleh konsumsi energi transmisi, akuisisi data, dan mode *sleep*. Total konsumsi rata-rata:

$$\bar{I} = \frac{t_{tx} \cdot I_{tx} + t_{rx} \cdot I_{rx} + t_{sens} \cdot I_{sens} + t_{sleep} \cdot I_{sleep}}{T_{cycle}}$$

Untuk sensor suhu presisi tinggi (resolusi ±0.1 °C), dengan siklus duty-cycle 5%, arus rata-rata tipikal adalah 18–35 μA, memungkinkan operasi >5 tahun pada baterai lithium thionyl chloride (LiSOCl₂) 3.6 V berkapasitas 2.4 Ah.

### 2.4 Teorema Sampling dan Akuisisi PAT

Mengikuti *Nyquist-Shannon sampling theorem*, frekuensi sampling minimum untuk menangkap dinamika sublimasi dengan konstanta waktu $\tau_{dry}$:

$$f_s \geq \frac{5}{\tau_{dry}} \approx 5 \cdot \frac{k_v \cdot A}{m_{ice} \cdot c_p^{ice}}$$

di mana $k_v$ koefisien perpindahan panas vial (W/m²K). Meza-Galvan et al. (2026) menetapkan $f_s$ minimum 0.1 Hz untuk stage sublimasi dan 0.01 Hz untuk desorpsi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Jaringan Tiga Lapis

Penerapan WSN mengikuti arsitektur hierarkis berlapis:

**Lapisan 1 — Sensor Node (End Devices):** Dipasang pada posisi strategis—*bottom-shelf*, *middle-shelf*, dan *top-shelf* liofilizer—serta di dalam vial representatif menggunakan *wireless temperature probe* (contoh: Lakeshore Cernox atau custom RTD Pt100). Tiap node配备 mikrokontroler ARM Cortex-M4, transceiver CC2652 (Texas Instruments), dengan kemampuan pengukuran 4 kanal termoelektrik.

**Lapisan 2 — Router/Coordinator Node:** Berfungsi sebagai *gateway* yang mengumpulkan data via protokol IEEE 802.15.4 atau *Bluetooth Low Energy* (BLE) 5.0, melakukan kompresi data, dan meneruskannya ke *base station*.

**Lapisan 3 — Base Station & Historian:** Komputer industri yang menjalankan OPC-UA server untuk interoperabilitas dengan *Distributed Control System* (DCS) dan *Manufacturing Execution System* (MES).

### 3.2 Diagram Alir SOP Implementasi

```
┌─────────────────────────────────────────────────────────────┐
│ FASE 1: PERENCANAAN & QUALIFIKASI                         │
│ ├─ Risk Assessment (FMEA) untuk lokasi sensor              │
│ ├─ Validasi rentang suhu (-80°C s/d +60°C)                 │
│ ├─ Kalibrasi traceable NIST (ISO 17025)                     │
│ └─ Site Survey RF (path loss measurement)                  │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ FASE 2: INSTALASI                                         │
│ ├─ Mounting sensor pada tray vial (non-kontak vial)        │
│ ├─ Pairing & commissioning node via gateway                │
│ ├─ Stress test vakum (1×10⁻³ mbar, 72 jam)                │
│ └─ Pengujian EMC sesuai IEC 61326-1                        │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ FASE 3: OPERASIONAL & MONITORING                          │
│ ├─ Akuisisi data real-time (sampling 0.1 Hz)               │
│ ├─ Streaming ke historian (PI/AVEVA, Siemens PCS7)         │
│ ├─ Soft sensor inferensi (T_de, R_p, sublimation rate)     │
│ └─ Alarm threshold (T_p > T_col - 2°C)                    │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│ FASE 4: EVALUASI & CONTINUOUS IMPROVEMENT                 │
│ ├─ Statistical Process Control (SPC) chart                 │
│ ├─ Model update via Machine Learning (PLS, LSTM)           │
│ └─ Periodic requalification (annual)                       │
└─────────────────────────────────────────────────────────────┘
```

### 3.3 Standar Regulasi yang Dipatuhi

Implementasi mengikuti kerangka PAT FDA (2004), EU GMP Annex 15 untuk *Process Validation*, dan ASME BPE untuk sanitasi. Artusio et al. (2026) menekankan pentingnya *data integrity* sesuai ALCOA+ principles (*Attributable, Legible, Contemporaneous, Original, Accurate*) dengan implementasi tanda-tangan elektronik 21 CFR Part 11.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario

Sebuah CDMO memproduksi vial 10 mL berisi larutan protein monoklonal 50 mg/mL pada liofilizer pilot berkapasitas 500 vial. Sensor WSN dipasang untuk memantau 12 titik kritis selama *primary drying* dengan parameter operasional berikut:

| Parameter | Nilai |
|---|---|
| Tekanan ruang $P_c$ | 100 mTorr (13.33 Pa) |
| Suhu rak $T_s$ | -15 °C (258.15 K) |
| Hambatan produk $R_p$ | 1.2 × 10⁷ Pa·s/kg |
| Hambatan termal sublimasi $R_s$ | 1.8 × 10⁻³ m²K/W |
| Luas vial $A$ | 3.14 × 10⁻⁴ m² |
| Tekanan sublimasi $p_i$ pada -25°C | 0.317 kPa (Antoine eq.) |

### 4.2 Perhitungan Laju Sublimasi

Menggunakan persamaan pindah massa:

$$\dot{m} = \frac{A \cdot (p_i - p_c)}{R_p} = \frac{(3.14 \times 10^{-4}) \cdot (317 - 13.33)}{1.2 \times 10^7} = \frac{9.52 \times 10^{-2}}{1.2 \times 10^7}$$

$$\dot{m} = 7.93 \times 10^{-9} \text{ kg/s per vial} = 7.93 \text{ ng/s per vial}$$

Untuk 500 vial, total laju sublimasi: $\dot{m}_{total} = 3.97 \times 10^{-6