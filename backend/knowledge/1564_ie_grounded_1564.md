# 1564 — Jaringan Sensor Nirkabel untuk Liofilisasi: Integrasi Process Analytical Technology dalam Pemantauan Proses Pengeringan Beku Farmasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (freeze-drying) merupakan salah satu proses unit kritis dalam industri biofarmasi yang digunakan untuk menstabilkan produk termolabil seperti antibodi monoklonal (mAb), vaksin mRNA, dan formulasi protein kompleks. Menurut Meza-Galvan, Strongrich, dan Darwish (2026) dalam bab *Wireless Sensor Networks for Lyophilization* dari buku *Process Analytical Technology for Pharmaceutical Freeze-Drying* (DOI: [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)), proses ini melibatkan tiga tahap utama: pembekuan (*freezing*), pengeringan primer (*primary drying*) melalui sublimasi, dan pengeringan sekunder (*secondary drying*) melalui desorpsi. Tahap pengeringan primer merupakan fase paling kritis karena menentukan lebih dari 70% total durasi siklus dan menyumbang proporsi dominan konsumsi energi fasilitas.

Secara ekonomis, biaya operasional satu batch liofilisasi pada skala produksi komersial dapat mencapai USD 50.000–200.000 tergantung pada konfigurasi vial dan volume produk, menjadikan efisiensi proses sebagai variabel strategis yang sensitif terhadap kualitas keputusan operasional. Artusio, Barresi, dan Pisano (2026) dalam bab pendamping tentang *Emerging Technologies in Pharmaceutical Freeze-Drying* (DOI: [10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)) menekankan bahwa inisiatif FDA Process Validation Guidance (2011) dan kerangka ICH Q8(R2) mendorong penerapan *Quality by Design* (QbD) yang membutuhkan visibilitas proses secara real-time dan terdistribusi.

Dalam konteks ini, Jaringan Sensor Nirkabel (*Wireless Sensor Networks*/WSN) muncul sebagai enabler teknologi yang menjawab keterbatasan instrumentasi kabel tradisional. Meza-Galvan *et al.* (2026) menjelaskan bahwa kabel thermocouple konvensional menghambat konduksi termal vial, rentan terhadap kontaminasi partikulat saat sterilisasi, dan memberikan cakupan spasial terbatas—biasanya hanya 4–8 titik pengukuran dalam liofilizer berisi 10.000–50.000 vial. WSN dengan termokopel nirkabel berbasis MEMS (*Micro-Electro-Mechanical Systems*) mampu menyajikan data suhu produk dengan densitas spasial 100–500 titik per batch, membuka peluang optimasi *Design Space* yang sebelumnya tidak ekonomis. Urgensi penerapan WSN diperkuat oleh tren industri 4.0 farmasi yang menuntut digitalisasi, integrasi *Manufacturing Execution Systems* (MES), dan kemampuan *real-time release* (RTR).

## 2. Landasan Teori & Formulasi Matematis

Mekanisme sublimasi selama pengeringan primer diatur oleh keseimbangan perpindahan panas dan massa pada antarmuka es-uap. Laju sublimasi $\dot{m}$ per vial diberikan oleh:

$$\dot{m} = \frac{A_v (P_{ice} - P_c)}{R_p + R_s}$$

di mana $A_v$ adalah luas penampang dalam vial (m²), $P_{ice}$ adalah tekanan uap es pada suhu antarmuka $T_b$ (Pa), $P_c$ adalah tekanan ruang (Pa), $R_p$ adalah tahanan produk (m²·Pa·s/kg), dan $R_s$ adalah tahanan stopper vial. Tekanan uap es mengikuti persamaan Clausius-Clapeyron atau secara empiris diformulasikan sebagai:

$$\ln P_{ice} = -\frac{6144.96}{T_b} + 24.72149 \quad \text{[Pa]}$$

Perpindahan panas dari rak (*shelf*) ke vial dimodelkan dengan koefisien $K_v$ yang bergantung pada tekanan ruang. Untuk rezim Knudsen (tekanan rendah), $K_v$ bervariasi secara kuadratik terhadap $P_c$:

$$K_v = K_c + \frac{\alpha \cdot P_c}{1 + \beta \cdot P_c}$$

dengan $K_c$ konduktansi pada kontak mekanis (orde $10^{-3}$–$10^{-2}$ W/m²·K), serta $\alpha$ dan $\beta$ parameter fitting tergantung geometri vial. Keseimbangan energi pada vial:

$$Q = K_v A_v (T_{shelf} - T_b) = \Delta H_s \cdot \dot{m}$$

di mana $\Delta H_s \approx 2.838 \times 10^6$ J/kg adalah panas sublimasi es pada 0 °C.

Untuk degradasi produk yang mengikuti kinetika Arrhenius, fraksi aktif yang tersisa setelah waktu $t$ pada suhu $T(t)$:

$$\ln \frac{C}{C_0} = -\int_0^t k_{\text{ref}} \exp\left[\frac{E_a}{R}\left(\frac{1}{T_{\text{ref}}} - \frac{1}{T(t)}\right)\right] dt$$

Dari sisi jaringan sensor, konsumsi energi node WSN mengikuti model *first-order radio*:

$$E_{tx}(k, d) = E_{elec} \cdot k + \epsilon_{amp} \cdot k \cdot d^n$$

dengan $k$ ukuran paket (bit), $d$ jarak transmisi, $n$ eksponen path loss (2–4), $E_{elec}$ energi sirkuit (≈ 50 nJ/bit), dan $\epsilon_{amp}$ energi amplifier (≈ 100 pJ/bit/m²). Interval sampling $\tau$ yang optimal meminimalkan total *distortion* (kesalahan rekonstruksi sinyal) ditambah *energy cost*:

$$J(\tau) = \underbrace{\frac{1}{\tau} \int_0^L f''(t)^2 dt}_{\text{distortion}} \cdot \frac{\tau^3}{12} + \underbrace{N \cdot E_{tx} \cdot \frac{T_{cycle}}{\tau}}_{\text{energi}}$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi WSN dalam liofilisasi mengikuti SOP yang diuraikan oleh Meza-Galvan *et al.* (2026) dan diperkuat dengan perspektif teknologi baru oleh Artusio *et al.* (2026). Arsitektur sistem tersusun dalam lima lapisan:

**Lapisan 1 — Akuisisi Data (Node Sensor):** Termokopel Tipe T nirkabel berbasis MEMS dengan akurasi ±0.1 °C, ukuran < 8 mm diameter, ditempatkan di vial yang representatif (sudut, tepi rak, pusat rak) untuk menangkap gradien termal akibat radiasi dinding dan konduksi asimetris.

**Lapisan 2 — Jaringan Komunikasi:** Protokol IEEE 802.15.4 (Zigbee) atau Bluetooth Low Energy (BLE) 5.0 dengan topologi *mesh* untuk redundansi. *Gateway* ditempatkan di luar liofilizer dengan penetrasi sinyal melalui jendela kuarsa atau feedthrough hermetis.

**Lapisan 3 — Edge Computing:** *Aggregator* melakukan *data validation* (filter Kalman, deteksi outlier) sebelum transmisi ke cloud, mengurangi beban bandwidth hingga 80%.

**Lapisan 4 — Analisis PAT:** Algoritma *Primal Drying Endpoint Detection* berbasis *comparative pressure measurement* (Pirani vs. capacitive gauge) diintegrasikan dengan data suhu node WSN untuk menentukan akhir sublimasi secara otomatis.

**Lapisan 5 — Integrasi MES/LIMS:** Data dipush ke *batch record* elektronik (EBR) sesuai 21 CFR Part 11 dengan timestamp UTC dan tanda tangan elektronik.

Diagram alir SOP implementasi:

```
[1] Kalibrasi node WSN di ruang bersih ISO 7 → sertifikat traceable NIST
        ↓
[2] Sterilisasi vialisasi (autoklaf 121 °C / 20 min) atau sterilisasi in-line
        ↓
[3] Loading vial berisi produk + penempatan node di vial terpilih
        ↓
[4] Sealing chamber, leak test < 5 mTorr/min
        ↓
[5] Inisialisasi jaringan: pairing node-gateway, validasi RSSI > -75 dBm
        ↓
[6] Eksekusi siklus liofilisasi: freezing → primary drying → secondary drying
        ↓
[7] Real-time monitoring: T_product, P_chamber, sublimation rate tiap node
        ↓
[8] Endpoint detection otomatis (slope T_product > threshold)
        ↓
[9] Post-process: un-loading,回收 node, cleaning, re-calibration
        ↓
[10] Archival data ke PAT knowledge base untuk continuous improvement
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Batch liofilisasi antibodi monoklonal pada konsentrasi 50 mg/mL, formulasi 10 mM histidine, 5% sukrosa. Konfigurasi: 20.000 vial 10R, rak 10 m², lyo Acme 3000.

**Input Parameter:**
- $T_{shelf}$ = -25 °C (primary drying)
- $P_c$ = 100 mTorr = 13.33 Pa
- Diameter dalam vial $d_v$ = 22 mm → $A_v = 3.80 \times 10^{-4}$ m²
- Tinggi produk beku $L_{dry} = 1.2$ cm
- $K_v$ pada 100 mTorr = 0.022 W/m²·K (data korelasi Pikal)

**Langkah 1 — Hitung Tekanan Uap Es pada Antarmuka:**
Asumsikan $T_b$ = -30 °C = 243.15 K:

$$\ln P_{ice} = -\frac{6144.96}{243.15} + 24.72149 = -25.273 + 24.721 = -0.552$$

$$P_{ice} = e^{-0.552} = 5.76 \text{ Pa} = 43.2 \text{ mTorr}$$

**Langkah 2 — Laju Sublimasi per Vial:**

$$\dot{m} = \frac{(3.80 \times 10^{-4})(5.76 - 1.33)}{1.2 \times 10^4} = \frac{1.68 \times 10^{-3}}{1.2 \times 10^4} = 1.40 \times 10^{-7} \text{ kg/s}$$

Per vial per jam: $\dot{m} = 0.504$ g/h. Untuk 20.000 vial: $\dot{m}_{batch} = 10.08$ kg/h.

**Langkah 3 — Kebutuhan Panas:**

$$Q_{total} = \dot{m}_{batch} \cdot \Delta H_s = 10.08 \times 2.838 \times 10^6 = 2.86 \times 10^7 \text{ J/h} = 7.94 \text{ kW}$$

**Langkah 4 — Verifikasi Keseimbangan Energi:**
$Q = K_v A_{total} (T_{shelf} - T_b) = 0.022 \times (20.000 \times 3.80 \times 10^{-4}) \times 5 = 0.022 \times 7.6 \times 5 = 0.836$ W. *Penyesuaian*: dengan $A_{total} = 7.6$ m² (termasuk heat transfer dari bawah dan dinding vial), $Q = 0.022 \times 7.6 \times 5 = 0.836$ kW per unit perbedaan suhu. Untuk memenuhi 7.94 kW, diperlukan $T_{shelf} - T_b = 7.94/0.836 = 9.5$ K, atau $T_{shelf}$ sekitar -20.5 °C, mendekati nilai -25 °C input (margin konservatif).

**Langkah 5 — Analisis Konsumsi Energi WSN:**
Misalkan 200 node aktif, sampling setiap 30 s, paket 64 byte:

$$E_{tx} = (50 \times 10^{-9})(64 \times 8) + (100 \times 10^{-12})(64 \times 8)(5^2) = 25.6 + 1