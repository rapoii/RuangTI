# 3036 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Integrasi Process Analytical Technology dalam Rekayasa Pengendalian Proses Freeze-Drying

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Wireless Sensor Networks for Lyophilization & Emerging PAT Technologies
**Jurnal & Sitasi Utama:** Meza-Galvan, J., Strongrich, A., & Darwish, A. (2026). *Wireless Sensor Networks for Lyophilization*. Dalam: *Process Analytical Technology for Pharmaceutical Freeze-Drying*. Wiley-VCH. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Artusio, F., Barresi, A. A., & Pisano, R. (2026). *Emerging Technologies in Pharmaceutical Freeze-Drying*. Dalam: *Process Analytical Technology for Pharmaceutical Freeze-Drying*. Wiley-VCH. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (freeze-drying) merupakan unit operasi kritis dalam manufaktur farmasi modern yang mengubah larutan atau suspensi obat menjadi padatan kering berpori melalui sublimasi air di bawah tekanan vakum. Proses ini mempertahankan stabilitas termolabil senyawa aktif farmasi (API) seperti protein monoklonal, vaksin mRNA, dan antibiotik beta-laktam yang akan terdegradasi pada pengeringan konvensional. Menurut Meza-Galvan *et al.* (2026), industri farmasi global menghadapi tantangan paradoksal: di satu sisi, permintaan terhadap produk biologi bernilai tinggi melonjak dengan CAGR 8,5% (2020–2026), namun di sisi lain, *batch failure rate* pada siklus liofilisasi masih berkisar 5–12%, di mana >70% kegagalan tersebut berasal dari deviasi suhu produk yang tidak terdeteksi secara *real-time* (DOI: [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)).

Urgensi operasional ini diperparah oleh kompleksitas termodinamika proses. Sebuah siklus liofilisasi tipikal untuk vial 10 mL berisi 5 mL larutan membutuhkan 24–72 jam dengan konsumsi energi spesifik 1,2–1,8 kWh per vial pada fase sublimasi primer, menjadikan *throughput* dan *yield* sebagai metrik strategis yang sangat dipengaruhi kualitas instrumentasinya. Artusio, Barresi, dan Pisano (2026) menekankan bahwa transisi paradigma dari *quality by testing* (QbT) menuju *quality by design* (QbD) yang digariskan FDA melalui *Guidance for Industry: Process Analytical Technology* (2004) menuntut akuisisi data *in-situ* yang masif dan *spatially-resolved* — kebutuhan yang tidak dapat dipenuhi oleh sistem thermocouple hardwired konvensional (DOI: [10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)).

Dari perspektif ekonomi teknik, satu lot komersial produk parenteral dengan 50.000 vial bernilai USD 8–25 juta. Pengurangan *batch loss* sebesar 1% melalui monitoring cerdas bernilai pengembalian modal (ROI) tahunan puluhan juta dolar AS. Inilah justifikasi strategis mengapa integrasi Wireless Sensor Networks (WSN) menjadi *enabling technology* yang diperjuangkan oleh Meza-Galvan *et al.* (2026) untuk menggantikan arsitektur instrumentasi kabel tradisional yang menghambat *scalability* dan fleksibilitas konfigurasi rak (*shelf*) liofilizer. Lebih lanjut, perkembangan terbaru yang dikaji Artusio *et al.* (2026) mencakup soft-sensor berbasis *machine learning*, Raman spectroscopy inline, dan *tunable diode laser absorption spectroscopy* (TDLAS) yang seluruhnya memerlukan *backbone* jaringan sensor yang robust, latency rendah, dan deterministik.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Perpindahan Panas dan Massa pada Sublimasi Primer

Mekanisme dominan pada fase *primary drying* adalah sublimasi es yang dikontrol secara simultan oleh resistansi termal rak-ke-produ ($R_s$) dan resistansi difusi produk kering ($R_p$). Laju sublimasi menurut model "heat-transfer–mass-transfer resistance" (Pikal, 1985; dimutakhirkan oleh Pisano *et al.*) dinyatakan:

$$\dot{m} = \frac{A_p \left( P_{ice}(T_p) - P_c \right)}{R_p} = \frac{T_{sh} - T_p}{R_s}$$

di mana:
- $\dot{m}$ = laju sublimasi (kg/s)
- $A_p$ = luas penampang sublimasi internal vial (m²)
- $P_{ice}(T_p)$ = tekanan uap jenuh es pada suhu produk $T_p$ (Pa)
- $P_c$ = tekanan ruang vakum (Pa)
- $T_{sh}$ = suhu rak (*shelf temperature*, K)
- $R_s$ = resistansi termal (K·m²/W)
- $R_p$ = resistansi difusi produk kering (m²·Pa·s/kg)

Tekanan uap es mengikuti persamaan Clausius–Clapeyron yang diaproksimasi oleh formula Murphy dan Koop (2005):

$$P_{ice}(T) = \exp\!\left( 9.550426 + \frac{5723.265}{T} + 3.53068 \ln T - 0.00728332\,T \right) \quad [\text{Pa}]$$

### 2.2 Resistansi Difusi Produk Kering

Resistansi $R_p$ tidak konstan sepanjang siklus melainkan meningkat seiring berkurangnya ketebalan lapisan kering menurut hubungan:

$$R_p(t) = R_{p,0} + \frac{A_1 \, L_d(t)}{A_2 + A_3 \, L_d(t)}$$

dengan $L_d(t) = L_0 - \int_0^t \frac{\dot{m}(\tau)}{\rho_{ice} A_p} d\tau$ sebagai ketebalan lapisan kering sesaat.

### 2.3 Kinetika Degradasi Termal

Untuk memvalidasi bahwa proses tidak merusak API, diterapkan persamaan Arrhenius orde pertama:

$$k(T) = A \, e^{-E_a / RT}$$

$$\text{Residu}(\%) = 100 \cdot \exp\!\left( -\int_0^{t_{cycle}} A \, e^{-E_a / RT_p(t)} dt \right)$$

dengan $A$ (pre-exponential, s⁻¹), $E_a$ (energi aktivasi, J/mol), dan $R = 8{,}314$ J/(mol·K). Parameter khas untuk protein: $E_a = 80\text{–}120$ kJ/mol.

### 2.4 Model Propagasi Gelombang Radio WSN

Kualitas komunikasi nirkabel pada lingkungan vakum dan ruang stainless steel mengikuti log-distance path loss model:

$$PL(d) = PL(d_0) + 10 n \log_{10}\!\left( \frac{d}{d_0} \right) + X_\sigma$$

dengan $n$ = *path loss exponent* (2,0 ruang bebas; 3,0–4,0 lingkungan industri ber-logam), $X_\sigma \sim \mathcal{N}(0, \sigma^2)$ adalah shadowing lognormal. *Link budget*:

$$P_{rx} = P_{tx} + G_{tx} + G_{rx} - PL(d) - L_{misc} \geq P_{rx,\text{sens}}$$

### 2.5 Ketidakpastian Pengukuran Gabungan (GUM, JCGM 100:2008)

$$\sigma_c = \sqrt{\sum_{i=1}^{N} \left( \frac{\partial f}{\partial x_i} \right)^2 \sigma_i^2 + 2 \sum_{i<j} \frac{\partial f}{\partial x_i}\frac{\partial f}{\partial x_j}\sigma_{ij}}$$

Untuk suhu produk yang dikalkulasi dari TCT (thermocouple) dan *pressure rise test*, ketergantungan ini sangat penting dalam batas akurasi ±0,5 °C yang diminta FDA.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Jaringan Sensor Nirkabel

Meza-Galvan *et al.* (2026) mengusulkan arsitektur berlapis (multi-tier) untuk liofilizer farmasi:

| Lapisan | Komponen | Fungsi |
|---------|----------|--------|
| **L0 – Sensing** | Sensor thermocouple tipe-T nirkabel, pressure transducer MEMS, RH sensor, NIR reflectance | Akuisisi variabel proses lokal |
| **L1 – Cluster** | Router ZigBee/LoRa pada setiap rak (*shelf*) | Agregasi data, time-synchronization |
| **L2 – Backhaul** | Gateway Ethernet/OPC-UA | Transmisi ke historian (PI, Ignition) |
| **L3 – Analytics** | Edge computing node (NVIDIA Jetson) | Soft-sensor, ML inference |
| **L4 – Supervisory** | SCADA/DCS + LIMS | Release keputusan batch |

### 3.2 Diagram Alir SOP Implementasi WSN pada Liofilizer

```
┌─────────────────────────────────────────────┐
│ Tahap 1: Risk Assessment & URS (User Req.) │
│   - Identifikasi titik ukur kritis          │
│   - Tentukan akurasi & laju sampling        │
└────────────────────┬────────────────────────┘
                     ▼
┌─────────────────────────────────────────────┐
│ Tahap 2: Validasi Sensor (IQ/OQ/PQ)        │
│   - Kalibrasi NIST-traceable                │
│   - Uji sterilitas & biocompatibility      │
│   - Uji EMI/EMC di lingkungan vakum         │
└────────────────────┬────────────────────────┘
                     ▼
┌─────────────────────────────────────────────┐
│ Tahap 3: Deployment pada Vial & Shelf      │
│   - Posisi thermocouple sentral vial        │
│   - Validasi coverage RF (RSSI > -85 dBm)  │
│   - Pairing secure (AES-128)                │
└────────────────────┬────────────────────────┘
                     ▼
┌─────────────────────────────────────────────┐
│ Tahap 4: Integrasi PAT & Kontrol           │
│   - Model predictive control (MPC)         │
│   - Real-time release testing (RTRT)       │
│   - Continuous process verification        │
└─────────────────────────────────────────────┘
```

### 3.3 Spesifikasi Protokol Komunikasi

Pemilihan protokol mengikuti rekomendasi *good engineering practice*:
- **IEEE 802.15.4 / ZigBee PRO**: 250 kbps, *latency* 30 ms, ideal untuk sampling 1 Hz dengan 50–200 node.
- **LoRaWAN (868/915 MHz)**: untuk *backhaul* antar-chamber (jarak >20 m).
- **Wi-Fi 6 (IEEE 802.11ax)**: gateway dengan keamanan WPA3-Enterprise, memenuhi 21 CFR Part 11 melalui autentikasi two-factor.

### 3.4 Manajemen Daya

Baterai lithium-thionyl chloride (Li-SOCl₂) 3,6 V 2, \dots.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
