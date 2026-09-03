# 1900 — Jaringan Sensor Nirkabel (WSN) untuk Monitoring Liofilisasi Farmasi: Arsitektur, Termodinamika Sublimasi, dan Integrasi Process Analytical Technology (PAT)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze-Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze-Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (freeze-drying) merupakan salah satu proses kritis dalam industri biofarmasi yang digunakan untuk menstabilkan produk termosensitif seperti protein monoklonal, antibodi terapeutik, vaksin mRNA, dan sediaan parenteral bernilai tinggi lainnya. Menurut Meza-Galvan, Strongrich, dan Darwish (2026) dalam Chapter 4 buku *Process Analytical Technology for Pharmaceutical Freeze-Drying* (DOI: [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)), proses ini melibatkan tiga tahapan utama: *freezing* (pembekuan), *primary drying* (sublimasi), dan *secondary drying* (desorpsi). Tahap *primary drying* merupakan tahap paling kritis dan paling lama, yang dapat berlangsung antara 24–96 jam tergantung pada formulasi, volume vial, dan parameter proses. Selama periode ini, konsumsi energi sebuah *batch* liofilisasi skala produksi (misalnya 10.000 vial) dapat mencapai 200–500 kWh, menjadikan efisiensi proses sebagai variabel ekonomi yang sangat signifikan.

Urgensi pengembangan Jaringan Sensor Nirkabel (WSN) untuk liofilisasi muncul dari beberapa keterbatasan arsitektur instrumentasi konvensional. Sistem monitoring tradisional masih mengandalkan *thermocouple* (TC) berkabel dengan jumlah probe terbatas (umumnya hanya 4–16 channel per liofilizer) yang dipasang pada vial sampel sentinel, sehingga representasi statistik suhu produk pada ribuan vial produksi menjadi tidak memadai. Meza-Galvan *et al.* (2026) menekankan bahwa variabilitas suhu antar-vial dalam satu *batch* dapat mencapai ΔT = 5–10°C, yang secara langsung mempengaruhi keseragaman kadar air residu (*residual moisture*) dan potensi degradasi protein. Artusio, Barresi, dan Pisano (2026) dalam Chapter 11 (DOI: [10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)) menambahkan bahwa *emerging technologies* seperti TDLAS (*Tunable Diode Laser Absorption Spectroscopy*) dan MTM (*Manometric Temperature Measurement*) hanya efektif jika dikombinasikan dengan jaringan sensor termal yang padat, karena validasi model sublimasi memerlukan data suhu produk dengan resolusi spasial tinggi.

Dari perspektif kepatuhan regulasi, penerapan WSN menjawab tuntutan FDA PAT Guidance (2004) yang mengharuskan pemahaman proses secara *real-time* untuk mendukung strategi *Quality by Design* (QbD). Investasi implementasi WSN untuk satu lini liofilizer industri berskala komersial (kapasitas ≥ 50 m² luas rak) berada pada kisaran USD 80.000–150.000, namun *payback period* dapat kurang dari 18 bulan melalui pengurangan *batch failure rate* sebesar 30–50% dan optimalisasi siklus sublimasi sebesar 8–15%. Konteks ini menjadikan WSN sebagai *enabler technology* yang strategis untuk transformasi digital (*Industry 4.0*) di industri farmasi.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Mekanisme Perpindahan Panas dan Massa pada Liofilisasi

Proses sublimasi es pada *primary drying* dikendalikan oleh dua mekanisme resistif utama: resistansi perpindahan panas dari rak ke vial ($R_p$) dan resistansi aliran uap air melalui *dried cake* ($R_c$). Meza-Galvan *et al.* (2026) merumuskan keseimbangan energi pada vial sebagai:

$$q_d = \frac{T_{shelf} - T_{product}}{R_p} = \frac{T_{product} - T_{ice}}{\hat{R}_c} \cdot \Delta H_s$$

di mana $q_d$ adalah fluks panas sublimasi (W/m²), $T_{shelf}$ suhu rak, $T_{product}$ suhu produk pada *interface* sublimasi, $T_{ice}$ suhu sublimasi (fungsi tekanan ruang $P_c$), $\hat{R}_c$ resistansi cake ternormalisasi (m²·Torr·hr/g atau cm²·mbar·hr/g), dan $\Delta H_s$ entalpi sublimasi es (≈ 2.838 kJ/kg pada 0°C).

Persamaan ini dapat disusun ulang untuk mendapatkan laju sublimasi:

$$\dot{m} = \frac{T_{shelf} - T_{ice}}{R_p + \hat{R}_c \cdot \Delta H_s}$$

Persamaan Clausius-Clapeyron untuk tekanan uap es di atas permukaan sublimasi diberikan oleh:

$$P_{ice}(T) = \exp\left(28.891 - \frac{6134.0}{T + 273.15}\right) \quad \text{[Torr]}$$

dengan $T$ dalam °C. Akurasi prediksi model sangat bergantung pada pengukuran $T_{shelf}$, $T_{ice}$, dan tekanan ruang $P_c$ secara simultan — kebutuhan yang secara inheren dipenuhi oleh WSN.

### 2.2 Arsitektur Jaringan Sensor Nirkabel

Meza-Galvan *et al.* (2026) menjelaskan bahwa topologi WSN untuk liofilisasi mengikuti arsitektur *star-mesh hybrid* dengan tiga lapisan fungsional:

1. **Lapisan Persepsi (Sensor Node):** Terdiri dari mikrokontroler berdaya rendah (misalnya ARM Cortex-M0+, MSP430) yang terhubung ke sensor suhu digital (akurasi ±0.1°C, rentang −50°C hingga +100°C) dan sensor tekanan kapasitif miniatur (rentang 0–1.000 mbar, akurasi ±0.25% FS).
2. **Lapisan Komunikasi:** Protokol IEEE 802.15.4 (ZigBee/Thread) pada pita 2.4 GHz untuk *throughput* rendah-jauh atau LoRaWAN (868/915 MHz) untuk penetrasi sinyal melalui dinding ruang vakum stainless steel.
3. **Lapisan Aplikasi:** *Edge gateway* yang melakukan agregasi data, *buffering*, dan transmisi ke *Manufacturing Execution System* (MES) melalui protokol MQTT atau OPC-UA.

Konsumsi daya sensor node mengikuti model duty-cycling:

$$E_{node} = V \cdot I_{active} \cdot t_{active} + V \cdot I_{sleep} \cdot t_{sleep} + P_{TX} \cdot t_{TX}$$

dengan $V$ tegangan suplai (umumnya 3.0–3.6 V dari baterai LiSOCl₂), $I_{active}$ dan $I_{sleep}$ arus saat aktif dan tidur, dan $P_{TX}$ daya transmisi radio. Untuk interval sampling 30 detik dan transmisi tiap 5 menit, masa pakai baterai dapat mencapai 18–24 bulan.

### 2.3 Redundansi dan Akurasi Pengukuran

Untuk menjamin keandalan data, WSN menggunakan *Kalman filtering* untuk mitigasi derau termal:

$$\hat{x}_{k|k} = \hat{x}_{k|k-1} + K_k (z_k - H \hat{x}_{k|k-1})$$

$$K_k = P_{k|k-1} H^T (H P_{k|k-1} H^T + R)^{-1}$$

dengan $K_k$ gain Kalman, $P$ kovariansi estimasi, $R$ kovariansi derau pengukuran, dan $H$ matriks observasi. Artusio *et al.* (2026) menekankan bahwa implementasi filter ini krusial untuk mendeteksi *endpoint primary drying* secara akurat melalui analisis *derivative* suhu produk.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Tahapan Implementasi WSN di Industri

Berdasarkan metodologi yang dipaparkan Meza-Galvan *et al.* (2026), implementasi WSN mengikuti alur SOP terstruktur:

```
┌─────────────────────────────────────────────────────────────┐
│ FASE 1: Risk Assessment & URS (User Requirement Spec)      │
│  • Identifikasi titik kritis (vial center, edge, corner)    │
│  • Penentuan jumlah node (minimum 1 node / 0.5 m² rak)     │
│  • Penentuan akurasi target (±0.5°C sesuai USP <1207>)      │
└────────────────────────┬────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ FASE 2: Design Qualification (DQ)                          │
│  • Validasi protokol nirkabel (EMC, EMI compliance)        │
│  • Validasi material (food-grade silicone encapsulation)   │
│  • Wireless range test dalam ruang vakum (path loss model) │
└────────────────────────┬────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ FASE 3: Installation Qualification (IQ) & OQ               │
│  • Pemosisian node pada vial (sentinel + production)       │
│  • Kalibrasi multi-titik (0°C, 25°C, 50°C traceable NIST)  │
│  • Stress test termal (−80°C hingga +60°C, 50 siklus)     │
└────────────────────────┬────────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────────┐
│ FASE 4: Performance Qualification (PQ)                     │
│  • Concurrent monitoring vs. sistem TC berkabel legacy     │
│  • Statistical equivalence test (Bland-Altman, paired t)   │
│  • Continuous verification program (selama 3 batch awal)   │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 Logika Pengendalian *Primary Drying*

Algoritma kontrol adaptif berbasis data WSN mengikuti *Model Predictive Control* (MPC) dengan *update horizon* setiap 5 menit:

```
IF T_product_avg > T_critical - 2°C:
    REDUCE T_shelf_setpoint BY 1°C
ELIF dT_product/dt < 0.05°C/min AND dP/dt < 0.01 mbar/min:
    DECLARE ENDPOINT_PRIMARY_DRYING
    INITIATE SECONDARY_DRYING_RAMP
```

Logika ini menggantikan metode konvensional berbasis *pressure rise test* (PRT) yang memiliki waktu tunggu 30–60 detik antar pengukuran.

### 3.3 Standar dan Regulasi

Implementasi WSN harus comply dengan:
- **21 CFR Part 11** untuk integritas data elektronik dan *audit trail*
- **USP <1207>** untuk *container closure integrity*
- **FDA PAT Guidance (2004)** untuk monitoring *real-time*
- **GAMP 5** untuk kategori validasi (WSN masuk Kategori 4 — *configured product*)

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Deskripsi Skenario

Sebuah perusahaan *Contract Development & Manufacturing Organization* (CDMO) memiliki liofilizer industri berkapasitas 8 rak dengan luas rak total $A_{rack} = 8 \times 0.8 = 6.4$ m². Setiap rak berisi 1.200 vial 10R (volume isi 3 mL), sehingga total vial per *batch* = 9.600 vial. Produk berupa formulasi protein monoklonal 50 mg/mL dalam *buffer* histidin sukrosa 50 mM.

**Parameter Proses Target:**
- $T_{shelf}$ (pada *primary drying*): $-5°C$ (setpoint) dengan safety margin
- $T_{ice}$ (target sublimasi): $-30°C$
- $P_c$ (tekanan ruang): 0.1 mbar (0.075 Torr)
- $R_p$ (resistansi vial, tipikal glass 10R): $1.0 \times 10^{-3}$ m²·°C/W
- $\hat{R}_c$ (resistansi cake): $2.5$ cm²·mbar·hr/g

### 4.2 Perhitungan Laju Sublimasi dan Durasi Proses

**Langkah 1:** Hitung tekanan uap es pada $T_{ice} = -30°C = 243.15$ K:

$$P_{ice}(-30°C) = \exp\left(28.891 - \frac{6134.0}{243.15}\right) = \exp(28.891 - 25.226) = \exp(3.665)$$

$$P_{ice} = 38.99 \text{ Pa} = 0.2924 \text{ Torr} = 0.390 \text{ mbar}$$

**Langkah 2:** Hitung fluks sublimasi per vial. Diameter dalam vial 10R ≈ 2.3 cm, sehingga luas sublimasi per vial:

$$A_{vial} = \pi \cdot (0.0115)^2 = 4.154 \times 10^{-4} \text{ m}^2 = 4.154 \text{ cm}^2$$

ΔT efektif antara rak dan *interface* sublimasi: $T_{shelf} - T_{ice} = -5 - (-30) = 25°C$

$$\dot{m}_{vial} = \frac{(T