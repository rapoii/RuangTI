# 1756 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Rekayasa PAT, Formulasi Matematis, dan Optimasi Siklus Freeze-Drying

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza-Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze-Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze-Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liodefilisasi (*freeze-drying*) merupakan unit operasi kritikal dalam manufaktur farmasi modern, khususnya untuk produk biologis, vaksin mRNA, antibodi monoklonal, dan API yang rentan terhadap degradasi termal. Proses ini menghilangkan air melalui sublimasi langsung dari fase beku, mempertahankan integritas molekuler produk yang tidak dapat dicapai oleh pengeringan konvensional. Menurut Meza-Galvan, Strongrich, dan Darwish (2026, DOI: [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)), kebutuhan akan monitoring *real-time* yang terdistribusi di seluruh vial dalam *batch* menjadi tantangan operasional yang signifikan, karena sensor thermocouple tradisional bersifat invasif, hanya mampu memantau beberapa vial sampel, dan memerlukan penetration port khusus yang menambah risiko kontaminasi serta kebocoran pada ruang hampa (Meza-Galvan *et al.*, 2026).

Urgensi penerapan *Wireless Sensor Networks* (WSN) dalam konteks ini bersifat multi-dimensi: (1) **ekonomi** — kerugian satu *batch* produk biologis bernilai USD 2–10 juta yang gagal karena *cycle* yang tidak optimal; (2) **regulasi** — inisiatif FDA *Process Analytical Technology* (PAT) dan ICH Q8/Q9/Q10 yang menuntut *Quality by Design* (QbD) dengan monitoring proses yang robust; (3) **teknis** — kebutuhan memahami *batch heterogeneity* yang hanya dapat diungkap melalui sensor non-invasif massal. Artusio, Barresi, dan Pisano (2026, DOI: [10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)) menekankan bahwa teknologi monitoring emerging — termasuk spektroskopi NIR, Raman, *tunable diode laser absorption spectroscopy* (TDLAS), dan WSN — menjadi tulang punggung transformasi digital industri farmasi, memungkinkan *closed-loop control* dan *real-time release* (RTR).

Perspektif *Industrial Engineering* terhadap masalah ini mencakup optimasi sistem produksi, perancangan *network topology* sensor, analisis keandalan (*reliability engineering*), dan integrasi data *streaming* ke dalam *Manufacturing Execution System* (MES). Investasi pada infrastruktur WSN tidak sekadar biaya modal, melainkan enabler strategis untuk *Pharma 4.0*, pengurangan *scrap rate*, dan akselerasi *time-to-market* untuk terapi baru.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Sublimasi dan Laju Pengeringan Primer

Laju sublimasi $\dot{m}_{sub}$ dalam *primary drying* mengikuti hukum Fourier-Hertz-Knudsen untuk aliran uap air melalui *dried cake*:

$$\dot{m}_{sub} = \frac{A_p \cdot (P_{ice}(T_p) - P_c)}{R_p}$$

di mana $A_p$ adalah luas penampang vial ($\text{cm}^2$), $P_{ice}(T_p)$ tekanan uap es pada suhu produk $T_p$ (Pa), $P_c$ tekanan ruang (Pa), dan $R_p$ resistansi terhadap aliran uap melalui *dried layer* ($\text{cm}^2 \cdot \text{Pa} \cdot \text{s} / \text{g}$). Persamaan Antoine untuk $P_{ice}$:

$$P_{ice}(T) = \exp\left(9.550426 - \frac{5723.265}{T + 273.15} + 3.53068 \ln(T + 273.15) - 0.00728332 (T + 273.15)\right)$$

### 2.2 Model Resistansi Termal dan Transfer Panas

Resistansi termal total antara rak dan vial diberikan oleh:

$$R_{total} = R_{shelf-vial} + R_{gas} + R_{cake}$$

dengan $R_{gas}$ = $\frac{\ell}{\kappa_{gas} A_c}$ untuk konduksi gas pada jarak $\ell$, dan fluks panas:

$$q = \frac{T_{shelf} - T_p}{R_{total}}$$

Untuk sistem WSN dengan $N$ sensor terdistribusi, suhu produk rata-rata *batch*:

$$\bar{T}_p(t) = \frac{1}{N} \sum_{i=1}^{N} T_{p,i}(t)$$

dan varians antar-vial sebagai ukuran heterogenitas:

$$\sigma^2_{T_p}(t) = \frac{1}{N-1} \sum_{i=1}^{N} \left(T_{p,i}(t) - \bar{T}_p(t)\right)^2$$

### 2.3 Arsitektur WSN dan Protokol Komunikasi

*Network lifetime* WSN yang ditenagai baterai dimodelkan sebagai:

$$E_{consumed}(t) = \sum_{i=1}^{N} \left(E_{tx,i} + E_{rx,i} + E_{sense,i} + E_{idle,i}\right) \cdot t_i$$

dengan model energi First-Order Radio (Heinzelman):

$$E_{tx}(k, d) = k \cdot E_{elec} + k \cdot \varepsilon_{amp} \cdot d^2$$

$$E_{rx}(k) = k \cdot E_{elec}$$

Parameter tipikal: $E_{elec} = 50$ nJ/bit, $\varepsilon_{amp} = 100$ pJ/bit/m².

### 2.4 Model Pengukuran Suhu Non-Invasif

Sensor nirkabel memanfaatkan parameter *dielectric* atau *infrared* untuk inferensi suhu. Model regresi:

$$T_p = \beta_0 + \sum_{j=1}^{M} \beta_j x_j + \varepsilon$$

dengan $x_j$ fitur sensor dan galat prediksi $\varepsilon \sim \mathcal{N}(0, \sigma^2)$. Akurasi tipikal: $\pm 1.5$ °C untuk sensor IR, $\pm 0.3$ °C untuk thermocouple miniaturisasi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem WSN-Freeze-Dryer

Sistem terintegrasi terdiri dari empat lapisan:

1. **Lapisan Sensor (*Sensing Layer*)**: Node nirkabel miniatur ($\varnothing$ < 14 mm untuk vial standar) ditempatkan di posisi strategis pada rak, mencakup sensor suhu (RTD/thermistor), tekanan parsial uap (kapasitif), dan kelembapan relatif ruang. Sampling rate: 1 Hz untuk suhu, 0.1 Hz untuk tekanan.

2. **Lapisan Komunikasi (*Network Layer*)**: Topologi mesh berbasis IEEE 802.15.4 (Zigbee) atau LoRaWAN untuk transmisi data ke gateway. Redundansi jalur (*multi-hop routing*) memastikan kehilangan paket < 1% bahkan pada lingkungan vakum dengan hambatan propagasi tinggi.

3. **Lapisan Edge (*Edge Computing Layer*)**: Gateway industri menjalankan *data buffering*, *time-stamping* (IEEE 1588 PTP untuk sinkronisasi), dan *preprocessing* sebelum transmisi ke cloud.

4. **Lapisan Cloud & Analytics (*Application Layer*)**: Platform PAT menyimpan *time-series data* historis, menjalankan algoritma *Machine Learning* (PCA, PLS, LSTM) untuk *fault detection*, dan menghasilkan feedback control loop ke PLC freeze-dryer.

### 3.2 SOP Deployment dan Validasi

Tahapan implementasi mengikuti kerangka V-Model GAMP 5 dan FDA PAT Guidance:

```
┌─────────────────────────────────────────────────────────────┐
│  FASE 1: URS (User Requirement Specification)              │
│    • Identifikasi critical quality attributes (CQA):        │
│      moisture content, cake appearance, reconstitution time │
├─────────────────────────────────────────────────────────────┤
│  FASE 2: Design & Risk Assessment (FMEA)                   │
│    • Mode failure: packet loss, battery depletion, drift     │
│    • RPN scoring dan mitigasi                               │
├─────────────────────────────────────────────────────────────┤
│  FASE 3: Installation Qualification (IQ)                    │
│    • Verifikasi hardware: range, akurasi, kalibrasi         │
│    • Wireless range test, EMI/EMC compliance                │
├─────────────────────────────────────────────────────────────┤
│  FASE 4: Operational Qualification (OQ)                     │
│    • Uji komunikasi dalam chamber vakum (P < 0.1 mbar)      │
│    • Stress test suhu -80 °C hingga +40 °C                 │
├─────────────────────────────────────────────────────────────┤
│  FASE 5: Performance Qualification (PQ)                     │
│    • Placebo run dengan 3 batch konsistensi                 │
│    • Perbandingan vs. thermocouple standar (correlation>0.95)│
├─────────────────────────────────────────────────────────────┤
│  FASE 6: Continuous Verification & Lifecycle Management     │
│    • Periodic calibration (6 bulanan)                       │
│    • Firmware update via OTA (Over-The-Air)                 │
└─────────────────────────────────────────────────────────────┘
```

### 3.3 Integrasi dengan Control System

Sinyal sensor WSN dimasukkan ke dalam arsitektur SCADA/DCS melalui OPC UA (*Open Platform Communications Unified Architecture*), kemudian diteruskan ke sistem Recipe Execution berbasis S88 ISA. Kontrol otomatis primary drying menggunakan algoritma *Pirani-Baratron* differential untuk endpoint detection, sekarang diperkuat dengan *model-based control* yang memanfaatkan data WSN.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Optimasi Primary Drying untuk Produk Biologik 500 vial (Volume Isi 3 mL)

**Parameter Input:**
- Luas penampang vial: $A_p = 3.14$ cm² (vial 10R)
- Resistansi dried cake: $R_p = 0.65$ cm²·Pa·s/g (formulasi 5% sucrose)
- Tekanan ruang target: $P_c = 10$ Pa
- Suhu rak: $T_{shelf} = -10$ °C
- Suhu produk awal: $T_p = -30$ °C

**Langkah 1: Perhitungan Tekanan Uap Es**

Menggunakan persamaan Antoine dengan $T_p = -30$ °C = 243.15 K:

$$P_{ice}(243.15) = \exp\left(9.550 - \frac{5723.265}{243.15} + 3.531 \ln(243.15) - 0.00728 \cdot 243.15\right)$$

$$= \exp(-23.53 + 19.55 - 1.770) = \exp(-5.75) \approx 3.18 \text{ Pa}$$

**Langkah 2: Driving Force Sublimasi**

$$\Delta P = P_{ice} - P_c = 3.18 - 10 = -6.82 \text{ Pa (negatif! cycle failure)}$$

**Interpretasi:** Suhu produk terlalu dingin untuk tekanan target. Sistem perlu menaikkan $T_{shelf}$.

**Langkah 3: Iterasi Optimasi**

Untuk $\Delta P = 5$ Pa, dibutuhkan $P_{ice} = 15$ Pa. Dari tabel saturasi uap es, ini tercapai pada $T_p \approx -25$ °C (268.15 K). Dengan $R_{total} \approx 0.04$ K·cm²/W, suhu rak diperlukan:

$$T_{shelf} = T_p + q \cdot R_{total}$$

dengan $q = \dot{m}_{sub} \cdot \Delta H_{sub} / A_p$, $\Delta H_{sub} = 2800$ J/g.

Asumsi $\dot{m}_{sub} = 0.0003$ g/s·cm²: $q = 0.84$ W/cm², sehingga $T_{shelf} \approx -25 + 33.6 \cdot 0.04 = -23.65$ °C.

**Langkah 4: Laju Sublimasi per vial**

$$\dot{m}_{sub} = \frac{3.14 \cdot (15 - 10)}{0.65} = 24.15 \text{ g/Pa·cm²·s}$$

Waktu primary drying: $t = \frac{m_0}{\dot{m}_{sub}} = \frac{0.6 \text{ g}}{24.15} = 0.025$ jam/vial × faktor batch.

**Langkah 5: Analisis Heterogenitas via WSN**

Misalkan 30 sensor node terpasang pada posisi corner, edge, dan center. Data simulasi menunjukkan:

$$\bar{T}_p = -24.8 \text{ °C}, \quad \sigma_{T_p} = 1.2 \text{ °C}$$

Ini mengindikasikan vial edge lebih cepat kering (12% lebih awal) dibanding center — informasi krusial yang tidak akan terdeteksi oleh thermocouple tunggal tradisional (Meza-Galvan *et al.*, 2026).

**Langkah 6: Perhitungan Penghematan Energi**

Siklus konvensional (tanpa WSN) menggunakan safety margin +15% durasi. Dengan WSN, optimasi adaptif memungkinkan reduksi:

$$\Delta E = 0.15 \cdot P_{chiller} \cdot t_{