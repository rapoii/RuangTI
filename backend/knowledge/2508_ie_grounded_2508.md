# 2508 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Integrasi Process Analytical Technology (PAT) dalam Rekayasa Proses Freeze-Drying

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (freeze-drying) merupakan unit operasi kritis dalam industri biofarmasi yang menstabilkan produk biologis, vaksin mRNA, antibodi monoklonal, dan API (Active Pharmaceutical Ingredients) sensitif termal melalui sublimasi air beku pada tekanan rendah. Menurut Meza-Galvan, Strongrich, dan Darwish (2026) dalam Chapter 4 buku *Process Analytical Technology for Pharmaceutical Freeze-Drying* (DOI: [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)), proses ini berlangsung dalam tiga tahap berurutan — pembekuan (*freezing*), pengeringan primer (*primary drying* melalui sublimasi), dan pengeringan sekunder (*secondary drying* melalui desorpsi) — yang masing-masing memerlukan kendali suhu dan tekanan vakum dengan presisi milikelvin untuk menjamin kualitas produk. Sebagai contoh industri, produksi massal vaksin COVID-19 oleh Pfizer-BioNTech dan Moderna pada rentang 2020–2024 memerlukan hingga 14.000 vial per batch dengan total siklus 36–72 jam per lot, menjadikan downtime satu titik kegagalan sensor sebagai kerugian ekonomi yang signifikan (estimasi: USD 50.000–500.000 per batch gagal pada produksi fill-finish AS).

Urgensi integrasi *Wireless Sensor Networks* (WSN) muncul dari keterbatasan termokopel berkabel konvensional yang hanya mampu memantau 3–5 vial representatif dalam liofilizer berisi 10.000–30.000 vial — rasio cakupan <0,05%. Meza-Galvan et al. (2026) menekankan bahwa *batch heterogeneity* yang tidak teramati (misalnya efek *vial position*, *edge effect*, dan *radiative heat transfer* dari dinding ruang) menjadi penyebab utama *lot rejection* oleh regulator. Solusi WSN yang mereka usulkan memungkinkan densitas pengukuran 50–500 titik per batch dengan *form factor* sensor miniatur (tipikal 3,2 mm diameter, <0,5 g) yang dapat dimasukkan langsung ke dalam vial tanpa mengganggu geometri vial standar ISO 8362.

Konteks ekonomi makin relevan setelah implementasi FDA PAT Guidance (2004) dan ICH Q8/Q9/Q10 yang menuntut *Real-Time Release* (RTR). Artusio, Barresi, dan Pisano (2026) dalam Chapter 11 (DOI: [10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)) melaporkan bahwa pasar global PAT untuk freeze-drying diproyeksikan mencapai USD 1,8 miliar pada 2030 dengan CAGR 7,4%, didorong oleh adopsi *smart vials*, *machine learning-based* soft sensor, dan sistem WSN *industrial-grade*. Bagi rekayasawan industri, integrasi WSN bukan sekadar inovasi instrumentasi melainkan *enabler* bagi transformasi digital linyi produksi menuju paradigma *Pharma 4.0* dengan *closed-loop control* dan *predictive maintenance*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Perpindahan Panas dan Massa pada Sublimasi

Meza-Galvan et al. (2026) menurunkan model *quasi-steady state* untuk laju sublimasi per vial $\dot{m}_{sub}$ yang menjadi dasar estimasi kebutuhan sensor:

$$\dot{m}_{sub} = A_v \cdot K_{sub}(P_{ice}) \cdot \left(P_{ice}(T_b) - P_{ch}\right)$$

dengan $A_v$ luas sublimasi internal vial (m²), $K_{sub}(P_{ice})$ konduktansi efektif dry-layer (m/s) yang bergantung pada resistansi cake, $P_{ice}(T_b)$ tekanan uap jenuh es pada suhu interface sublimasi $T_b$ (Pa), dan $P_{ch}$ tekanan ruang (Pa).

Fluks panas dari rak ke vial mengikuti hukum Fourier terdiskretisasi:

$$q = A_v \cdot K_v \cdot (T_{shelf} - T_{bottom}) = \Delta H_s \cdot \dot{m}_{sub}$$

dengan $K_v$ koefisien konduksi gas pada celah vial-rak (tipikal 0,13–0,18 W/m²K untuk nitrogen pada 10 Pa), $T_{shelf}$ suhu rak, $T_{bottom}$ suhu dasar vial, dan $\Delta H_s$ entalpi sublimasi (2.838 kJ/kg pada 0 °C).

### 2.2 Estimasi Kapasitas Jaringan Sensor

Untuk menentukan jumlah node sensor optimal $n^*$ yang memaksimalkan informasi proses tanpa membebani kapasitas baterai, model utilitas informasi berikut digunakan:

$$U(n) = \alpha \cdot \log(1 + n) - \beta \cdot n \cdot P_{node}$$

dengan $\alpha$ koefisien nilai informasi per node (bit/sample), $\beta$ koefisien biaya energi (J/sample), dan $P_{node}$ daya rata-rata per transmisi (W). Optimalisasi $\frac{dU}{dn}=0$ menghasilkan:

$$n^* = \frac{\alpha}{\beta \cdot P_{node} \cdot \ln(2)} - \frac{1}{\ln(2)}$$

Untuk $\alpha = 100$ bit/sample, $\beta = 0{,}05$ J/sample, dan $P_{node} = 0{,}01$ W pada siklus duty 0,1%, diperoleh $n^* \approx 144$ node per kabinet — mendekati rekomendasi 100–150 node per liofilizer yang dilaporkan Meza-Galvan et al. (2026).

### 2.3 Model Konsumsi Energi dan Lifetime Baterai

Sensor nirkabel tipikal beroperasi pada baterai lithium 3 V / 240 mAh. Estimasi lifetime mengikuti:

$$T_{life} = \frac{C_{bat}}{I_{active} \cdot t_{duty} + I_{sleep} \cdot (1 - t_{duty})}$$

dengan $C_{bat}$ kapasitas baterai (Coulomb), $I_{active}$ arus aktif (tipikal 15 mA untuk transmisi ZigBee/802.15.4), $I_{sleep}$ arus tidur (5 µA), dan $t_{duty}$ fraksi waktu aktif. Untuk $t_{duty} = 10^{-3}$ (sampling 1 detik setiap 1000 detik), lifetime teoritis mencapai $\approx 9.000$ jam atau >1 tahun operasi kontinu — cukup untuk 250–500 siklus liofilisasi standar 24 jam.

### 2.4 Dinamika Transmisi Nirkabel dalam Lingkungan Vakum

Artusio et al. (2026) menyoroti tantangan propagasi RF dalam ruang vakum bersuhu rendah (-40 °C). Redaman *free-space path loss* mengikuti persamaan Friis:

$$L_{fs} = 20 \log_{10}(d) + 20 \log_{10}(f) - 147{,}55 \;\; \text{(dB)}$$

dengan $d$ jarak (m) dan $f$ frekuensi (Hz). Pada 2,4 GHz (WiFi/ZigBee) dan $d = 2$ m, redaman $\approx 54$ dB, masih di bawah sensitivitas penerima tipikal -95 dBm untuk chipset CC2652R. Pada tekanan 10 Pa dengan suhu dinding -40 °C, koefisien redaman tambahan karena deposisi uap air pada antena mengikuti:

$$\alpha_{add} = \frac{\rho_{vapor}}{d_{ant}} \cdot \sigma_{abs}$$

yang menjadi pertimbangan desain housing sensor dengan pemanas resistif terintegrasi (tipikal 50 mW) untuk mencegah frost accumulation pada radiator.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi WSN untuk liofilisasi mengikuti kerangka SOP 5-fase yang dikembangkan berdasarkan prosedur baku Meza-Galvan et al. (2026):

**Fase 1 — Site Survey & Risk Assessment (FMEA):**
Lakukan pemetaan 3D ruang liofilizer menggunakan *thermal imaging* dan identifikasi zona-zona dengan gradien termal >2 °C/cm (cold spot, hot spot). Hitung *Risk Priority Number* (RPN) untuk setiap mode kegagalan sensor:

$$RPN = S \times O \times D$$

dengan Severity (1–10), Occurrence (1–10), Detectability (1–10). Mode kegagalan kritis: battery drain (RPN 180), sensor drift >0,5 °C (RPN 240), packet loss >5% (RPN 150).

**Fase 2 — Kalibrasi & Validasi Sensor:**
Sesuai ISO 17025 dan USP <1119>, kalibrasi setiap node pada tiga titik (-40 °C, 0 °C, +40 °C) menggunakan *dry-block calibrator* dengan akurasi ±0,05 °C. Verifikasi linieritas melalui koefisien determinasi $R^2 > 0{,}999$. Dokumentasikan Certificate of Analysis per node.

**Fase 3 — Penempatan Strategis:**
Terapkan algoritma *space-filling design* (Latin Hypercube Sampling) untuk menentukan 100–150 posisi vial sensor yang menjamin cakupan spasial merata. Prioritaskan posisi: perimeter rak (edge effect), tengah rak, pojok bawah-dekat pintu (cold spot terparah).

**Fase 4 — Commissioning & Integration:**
- Konfigurasi topologi jaringan: *star topology* dengan gateway di luar ruang vakum (transmisi melalui *RF feedthrough* hermetik) atau *mesh topology* dengan repeater antar-node.
- Set sampling rate: 1 Hz untuk primary drying, 0,1 Hz untuk secondary drying.
- Integrasi data via OPC UA ke DCS/SCADA (misalnya Siemens PCS 7, Emerson DeltaV).
- Buat *audit trail* sesuai 21 CFR Part 11.

**Fase 5 — Operation & Predictive Maintenance:**
- Monitor *State-of-Health* (SoH) baterai setiap shift: $SoH = \frac{C_{measured}}{C_{nominal}} \times 100\%$.
- Trigger alert jika packet loss >2%, drift suhu >0,3 °C, atau voltage <2,7 V.
- Lakukan *hot-swap* sensor pada Planned Maintenance Interval (tiap 200 siklus).

```
┌────────────────────────────────────────────────────────┐
│  FLOW DIAGRAM WSN-DRIVEN FREEZE-DRYING CONTROL        │
└────────────────────────────────────────────────────────┘
   [Loading] → [Freezing @ -45°C, 2h]
        ↓
   [WSN Node Activation & Sync]
        ↓
   [Primary Drying @ 10 Pa, T_shelf -25°C]
        ↓
   [Real-time data: T_bottom, P_ch, RH]
        ↓
   [ML Soft Sensor: t_sub completion]
        ↓
   [Adaptive Setpoint: T_shelf ramp +2°C]
        ↓
   [Secondary Drying @ 1 Pa, T_shelf +40°C]
        ↓
   [RTR Decision: CQAs within spec?]
        ↓
   [Unloading / Lot Release]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Liofilizer produksi skala komersial dengan kapasitas 20.000 vial (10 rak × 2.000 vial, vial 10R ISO 8362) memproduksi *mAb* (monoclonal antibody) konsentrasi 50 mg/mL, fill volume 5 mL.

**Parameter Input:**
- Diameter dalam vial: $d_v = 24$ mm → $A_v = \pi (0{,}012)^2 = 4{,}52 \times 10^{-4}$ m²
- $T_{shelf} = -25$ °C = 248,15 K (primary drying)
- $T_{bottom}$ target = -30 °C = 243,15 K
- $K_v = 0{,}15$ W/m²K (nitrogen pada 10 Pa)
- $P_{ch} = 10$ Pa; $P_{ice}(-30°C)