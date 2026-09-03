# 3052 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Rekayasa PAT, Pemodelan Termodinamika, dan Arsitektur Monitoring Vial

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza-GGalvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (freeze‐drying) merupakan unit operasi kritis dalam manufaktur biofarmasi modern, khususnya untuk produk biologis termosensitif seperti antibodi monoklonal, vaksin mRNA, dan protein rekombinan. Proses ini menghilangkan air melalui sublimasi (pengeringan primer) dan desorpsi (pengeringan sekunder) untuk mempertahankan stabilitas produk dengan *glass transition temperature* ($T_g'$) yang rendah. Industri farmasi global menghadapi tantangan besar: lebih dari 40% produk biologi dalam pipeline klinis memerlukan liofilisasi, namun kerugian akibat *batch failure* akibat pelanggaran *Critical Process Parameters* (CPP) mencapai USD 1–5 juta per kejadian (Meza‐Galvan et al., 2026).

Secara historis, monitoring vial liofilisasi dilakukan menggunakan **thermocouple probe kawat tembaga‐konstantan** yang dimasukkan ke dalam subset kecil vial representatif. Pendekatan ini memiliki dua kelemahan fundamental menurut Meza‐Galvan, Strongrich, dan Darwish (2026): (1) **bias statistik** karena satu thermocouple hanya mewakili beberapa vial dari ribuan vial dalam satu batch, dan (2) **gangguan sterilitas** karena kabel probe menembus sistem vial tertutup. Padahal, FDA *Guidance for Industry: PAT — A Framework for Innovative Pharmaceutical Development, Manufacturing, and Quality Assurance* (2004) mensyaratkan pemahaman mendalam tentang *multivariate variation* dalam unit produksi.

Di sinilah **Wireless Sensor Networks (WSN)** muncul sebagai paradigma transformatif. Meza‐Galvan et al. (2026) memaparkan implementasi sensor suhu nirkabel miniatur (seperti TST™ Wireless Temperature Sensor, 8,5 mm × 8,5 mm) yang mampu mengukur suhu produk secara *in situ* tanpa menembus vial. Pendekatan ini memungkinkan instrumentasi 100% vial *edge vials* dan *center vials* untuk mendeteksi *spatial heterogeneity* yang sebelumnya tidak terlihat. Pelengkap penting dari arsitektur ini datang dari Artusio, Barresi, dan Pisano (2026) yang membahas teknologi emerging seperti *tunable diode laser absorption spectroscopy* (TDLAS), *Raman spectroscopy*, dan *smart sensors* berbasis IoT yang membentuk ekosistem **Industry 4.0 pharmaceutical manufacturing**.

Implikasi ekonominya substansial: dengan mengetahui suhu vial riil, parameter seperti *shelf temperature* ($T_s$) dan *chamber pressure* ($P_c$) dapat dioptimasi untuk memperpendek siklus primary drying yang selama ini menjadi *bottleneck* (mencakup 60–70% total waktu siklus, atau sekitar 24–48 jam per batch). Pengurangan 10% waktu siklus pada kapasitas 50.000 vial/batch dapat menghemat biaya energi, *opportunity cost*, dan *working capital* secara signifikan (Artusio et al., 2026).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Perpindahan Panas Vial

Model *unsteady heat transfer* untuk satu vial mengikuti persamaan konduksi satu dimensi (Pikal‐model):

$$\frac{dQ}{dt} = A_v \cdot K_v \cdot (T_s - T_b) + A_v \cdot K_c$$

di mana:
- $A_v$ = luas penampang dalam vial ($\text{cm}^2$)
- $K_v$ = koefisien konduksi vial (W/m²·K), tipikal $K_v \approx 2{,}5 \times 10^{-3}$ cal·s⁻¹·cm⁻²·K⁻¹ untuk vial 10R
- $T_s$ = suhu shelf (K)
- $T_b$ = suhu produk pada *bottom* vial (K)
- $K_c$ = kontribusi kalor *radiation/gas conduction*, dominan pada tekanan rendah

### 2.2 Model Laju Sublimasi dan Perpindahan Massa

Laju sublimasi ditentukan oleh hukum Darcy untuk aliran uap air melalui *dried cake*:

$$\frac{dm}{dt} = \frac{A_v \cdot (P_{ice}(T_b) - P_c)}{R_p}$$

dengan $P_{ice}(T_b)$ = tekanan uap es pada suhu $T_b$ (diestimasi dengan persamaan Antoine/Goff‐Gratch), $P_c$ = tekanan ruang, dan $R_p$ = tahanan *dried layer*:

$$R_p = R_{p,0} + \alpha \cdot \frac{L_0 \cdot \dot{m}}{1 - \dot{m}/1}$$

Nilai tipikal $R_p$ adalah 1,5–3,5 cm²·Torr·hr·g⁻¹ untuk formulasi 5% sukrosa.

### 2.3 Kinetika Degradasi Produk

Untuk menjaga kualitas, suhu produk $T_b$ harus dijaga di bawah $T_g'$ dengan *margin* 2–3°C. Kinetika degradasi mengikuti hukum Arrhenius:

$$k = A \cdot e^{-E_a / (R \cdot T_b)}$$

dengan $A$ = faktor pre‐eksponensial, $E_a$ = energi aktivasi (umumnya 80–120 kJ/mol untuk protein), dan $R$ = 8,314 J/mol·K.

### 2.4 Arsitektur Jaringan Sensor Nirkabel

WSN liofilisasi mengikuti protokol komunikasi **IEEE 802.15.4 / ZigBee** atau **Bluetooth Low Energy (BLE)**. Konsumsi energi sensor mengikuti:

$$E_{tx} = E_{elec} \cdot k + \epsilon_{amp} \cdot k \cdot d^n$$

dengan $d$ = jarak transmisi, $n$ = path‐loss exponent (2–3 dalam ruang enclosed chamber), $k$ = ukuran paket data (bits).

**Rumus baterai‐lifespan** dengan duty cycle $\delta$:

$$T_{life} = \frac{C_{bat}}{I_{sleep} \cdot (1-\delta) + I_{tx} \cdot \delta}$$

Tipikal: $C_{bat} = 240$ mAh, $I_{sleep} = 5$ μA, $I_{tx} = 15$ mA, $\delta = 0{,}1\%$, menghasilkan lifetime 6–12 bulan per siklus.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Meza‐Galvan et al. (2026) menyusun SOP implementasi WSN dalam tujuh tahapan rekayasa:

**Tahap 1 — Desain Eksperimental (DoE):** Tentukan *Design Space* menggunakan *Design of Experiments* (Central Composite atau Box‐Behnken) untuk memetakan pengaruh $T_s$, $P_c$, dan *ramp rate* terhadap $T_b$ riil vial.

**Tahap 2 — Kalibrasi dan *Qualification* Sensor:** Lakukan kalibrasi sensor terhadap *standard reference* (NIST‐traceable) pada rentang ‐50°C sampai +60°C dengan akurasi ±0,5°C. Lakukan IQ/OQ/PQ sesuai ASTM E2503.

**Tahap 3 — *Loading* dan Positioning Sensor:** Sensor ditempatkan pada posisi vial *corner*, *edge*, dan *center* mengikuti rekomendasi **PDA Technical Report No. 72**. Jumlah sensor minimum adalah $\sqrt{N_{vials}}$ untuk cakupan statistik.

**Tahap 4 — Konfigurasi Jaringan:** Topologi *star* dengan satu *gateway coordinator* di dalam chamber yang terhubung ke SCADA/MES. Frekuensi sampling direkomendasikan 30–60 detik untuk *primary drying* dan 5 menit untuk *secondary drying* guna menghemat baterai.

**Tahap 5 — Akuisisi Data dan *Edge Computing*:** Data disinkronkan dengan logger eksternal. Algoritma *moving average filter* digunakan untuk mereduksi noise, sedangkan *Kalman filter* diterapkan untuk fusi data multi‐sensor.

**Tahap 6 — Analisis dan *Decision Support*:** Dashboard menampilkan *T_b vs time*, *heat flux*, dan *mass flux* secara real‐time. *Soft sensors* memprediksi *endpoint* primary drying berbasis $dM/dt$ < threshold (umumnya < 0,1 g/cm²·hr).

**Tahap 7 — Validasi dan *Continuous Improvement*:** Bandingkan *T_b* predicted vs *T_b* measured, hitung *Relative Root Mean Square Error* (RRMSE), dan lakukan *model update* melalui *machine learning* (misalnya *Gaussian Process Regression*).

```
┌─────────────────────────────────────────────────────────────┐
│  [Vial + Sensor]  →  [RF Transceiver 2,4 GHz]              │
│        ↓                                       ↓             │
│  [Temperature Data]                  [Gateway/Chamber Wall] │
│        ↓                                       ↓             │
│  [Edge Filter/Kalman]                [SCADA/MES Historian]    │
│        ↓                                       ↓             │
│  [Cloud PAT Dashboard]  ←→  [ML Soft Sensor Predictor]      │
└─────────────────────────────────────────────────────────────┘
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Batch liofilisasi 20.000 vial 10R berisi 3 mL formulasi 5% sukrosa + 1 mg/mL antibodi monoklonal. Tujuan: optimalisasi $T_s$ untuk mempersingkat *primary drying* tanpa melewati $T_g' = -32$°C.

**Input Parameter:**
- $T_s$ awal = ‐30°C, $P_c$ = 100 mTorr
- $K_v = 2{,}5 \times 10^{-3}$ cal·s⁻¹·cm⁻²·K⁻¹, $K_c = 0{,}3 \times 10^{-3}$ cal·s⁻¹·cm⁻²·K⁻¹
- $A_v = 4{,}5$ cm²
- $T_g' = -32$°C → margin aman: $T_b < -34$°C

**Langkah 1 — Hitung fluks kalor steady‐state:**

$$q = A_v \cdot [K_v \cdot (T_s - T_b) + K_c]$$
$$q = 4{,}5 \cdot [2{,}5 \times 10^{-3} \cdot (-30 - (-34)) + 0{,}3 \times 10^{-3}]$$
$$q = 4{,}5 \cdot [2{,}5 \times 10^{-3} \cdot 4 + 0{,}3 \times 10^{-3}]$$
$$q = 4{,}5 \cdot [10{,}0 \times 10^{-3} + 0{,}3 \times 10^{-3}] = 4{,}5 \cdot 10{,}3 \times 10^{-3}$$
$$q = 0{,}0464 \text{ cal/s} = 0{,}194 \text{ W per vial}$$

**Langkah 2 — Laju sublimasi:**

Tekanan uap es pada $T_b = -34$°C = 239 K: $P_{ice}(239 K) \approx 0{,}255$ Torr (Murphy & Koop, 2005)

$$\frac{dm}{dt} = \frac{4