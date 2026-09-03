# 2188 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Integrasi Process Analytical Technology (PAT) dalam Optimasi Siklus Freeze-Drying

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi atau *freeze-drying* merupakan salah satu unit operasi paling kritis dalam industri biofarmasi modern, terutama untuk produk biologi bernilai tinggi seperti antibodi monoklonal, vaksin mRNA, dan terapi gen berbasis vektor virus. Menurut Meza-Galvan, Strongrich, dan Darwish (2026, DOI: 10.1002/9783527850303.ch4), proses ini melibatkan tiga tahap berurutan: pembekuan (*freezing*), pengeringan primer (*primary drying*) yang didominasi oleh sublimasi, serta pengeringan sekunder (*secondary drying*) melalui desorpsi. Investasi untuk satu lini liofilisasi skala industri mencapai USD 5–15 juta, dan downtime akibat *batch failure* dapat merugikan hingga USD 1–3 juta per siklus karena rendemen produk yang rendah dan waktu tunggu (*lead time*) rilis Quality Control yang panjang (Artusio, Barresi, & Pisano, 2026, DOI: 10.1002/9783527850303.ch11).

Urgensi penerapan *Wireless Sensor Networks* (WSN) dalam liofilisasi muncul dari dua tantangan fundamental. Pertama, lingkungan vakum ekstrem (tekanan 10–100 Pa) dan suhu rendah (–50 °C hingga +40 °C) mempersulit instalasi kabel termokopel tradisional yang harus menembus dinding ruang (*chamber wall*) melalui *feedthrough* khusus, di mana setiap kabel merupakan titik kegagalan (*single point of failure*) potensial dan menambah *thermal load* ke rak (*shelf*). Kedua, framework **Process Analytical Technology (PAT)** yang dikeluarkan FDA sejak 2004 (Guidance for Industry, ICH Q8/Q9/Q10) menuntut pemantauan *real-time* parameter kritis proses untuk mendukung strategi **Quality by Design (QbD)**. Meza-Galvan et al. (2026) menekankan bahwa tanpa sensor yang mampu membaca suhu vial secara individual dengan *update rate* memadai, *design space* yang dibangun untuk primary drying akan bersifat konservatif, menurunkan produktivitas industri hingga 30–40%.

Konteks ekonomi penguatan: pasar global liofilisasi farmasi mencapai USD 7,3 miliar pada 2024 dengan proyeksi CAGR 8,5% (2024–2030), didorong oleh pipeline produk biologi yang melonjak pasca-pandemi. Oleh karena itu, integrasi WSN bukan sekadar pilihan teknologi, melainkan imperatif strategis untuk *continuous manufacturing*, rilis *real-time*, dan kepatuhan terhadap Annex 1 EU GMP 2022 yang mensyaratkan *process control* berbasis data kontinu.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Sublimasi dan Perpindahan Panas Vial

Model *Pikal* yang dimodifikasi (Meza-Galvan et al., 2026) memformulasikan laju sublimasi vial $i$ sebagai:

$$\dot{m}_i = \frac{A_v \cdot (P_{sat}(T_p,i) - P_c)}{R_s}$$

dengan $A_v$ adalah luas area sublimasi vial (m²), $P_{sat}(T_p,i)$ tekanan uap jenuh pada suhu produk (Pa), $P_c$ tekanan ruang (Pa), dan $R_s$ resistansi perpindahan massa (Pa·m²·s/kg). Tekanan uap jenuh mengikuti persamaan Goff-Gratch atau pendekatan Antoine:

$$P_{sat}(T) = 611.21 \cdot \exp\!\left(\frac{18.678 - T/234.5}{257.14 + T}\right) \quad \text{[Pa]}$$

Total kalor yang dibutuhkan untuk sublimasi ditentukan oleh neraca energi *shelf-to-vial*:

$$Q_{total} = K_c A_v (T_{shelf} - T_b) + K_s A_v (T_{shelf} - T_p)$$

dengan $K_c$ koefisien konduksi gas terkonduksi, $K_s$ koefisien radiasi dan konduksi kontak padat, $T_b$ suhu dasar vial, dan $T_p$ suhu produk di *sublimation front*.

### 2.2 Kinetika Degradasi Produk

Untuk menjamin *potency* tetap di atas ambang batas (≥90%), suhu produk harus dijaga di bawah $T_{max}$. Laju degradasi mengikuti kinetika Arrhenius orde satu:

$$k_d(T) = A_d \cdot \exp\!\left(-\frac{E_a}{R \cdot T}\right)$$

Fraksi aktif setelah waktu $t$ pada profil suhu $T(t)$:

$$A(t) = \exp\!\left(-\int_0^t k_d(T(\tau))\, d\tau\right) \approx \exp(-k_{avg} \cdot t)$$

### 2.3 Model Propagasi Sinyal Nirkabel dalam Ruang Liofilizer

Lingkungan vakum dengan geometri silinder dan dinding stainless steel 316L menyebabkan redaman sinyal RF. Meza-Galvan et al. (2026) menggunakan model *log-distance path loss*:

$$PL(d) = PL(d_0) + 10 n \log_{10}\!\left(\frac{d}{d_0}\right) + X_\sigma$$

dengan $PL(d_0)$ rugi lintasan pada referensi $d_0 = 1$ m, $n$ eksponen redaman (2,0–3,5 dalam ruang vakum dengan refleksi), dan $X_\sigma \sim \mathcal{N}(0, \sigma^2)$ shadowing Gaussian. Untuk protokol IEEE 802.15.4 (ZigBee) pada 2,4 GHz, $PL(d_0) \approx 40$ dB, sedangkan pada 868 MHz (LoRa) rugi turun menjadi ~32 dB dengan penetrasi lebih baik.

### 2.4 Konsumsi Energi Node Sensor dan Lifetime Baterai

Lifetime baterai node WSN:

$$L_{bat} = \frac{C_{bat} \cdot V_{bat}}{I_{sleep} \cdot V_{bat} \cdot t_{sleep} + I_{active} \cdot V_{bat} \cdot t_{active}}$$

dengan asumsi siklus duty $DC = t_{active}/(t_{sleep}+t_{active})$ dan kapasitas baterai $C_{bat}$ (mAh). Untuk sensor suhu MAX31865 dengan transceiver CC2652R, $I_{sleep} = 1\,\mu A$, $I_{active} = 7\,mA$, menghasilkan lifetime >2 tahun pada duty cycle 1%.

### 2.5 Sensor Fusion dengan Kalman Filter

Untuk mengurangi noise termal pada pembacaan nirkabel, digunakan *Extended Kalman Filter* (EKF):

$$\hat{x}_{k|k} = \hat{x}_{k|k-1} + K_k (z_k - H\hat{x}_{k|k-1})$$

$$K_k = P_{k|k-1} H^T (H P_{k|k-1} H^T + R)^{-1}$$

dengan $\hat{x}$ estimasi suhu, $z$ pembacaan sensor, $H$ matriks observasi, $P$ kovariansi state, dan $R$ kovariansi derau pengukuran.

## 3. Metodologi Rekayasa & SOP Implementasi WSN dalam Liofilizer

### 3.1 Arsitektur Sistem (Mengacu pada Meza-Galvan et al., 2026)

Sistem WSN tipikal terdiri atas empat lapisan:

1. **Lapisan Sensor**: Termokopel Tipe T miniatur (diameter <1,5 mm) atau RTD PT100 yang diintegrasikan dengan ASIC MAX31865. Setiap node memiliki ID unik dan *time-stamping* via *real-time clock* (RTC) tersinkronisasi melalui gateway.
2. **Lapisan Komunikasi**: Topologi *star* (1 gateway + N node) atau *mesh* (ZigBee PRO 2017) dengan *self-healing* routing. Gateway berfungsi sebagai *bridge* ke sistem SCADA/MES.
3. **Lapisan Edge Computing**: *Industrial Edge Gateway* (mis. Siemens IOT2050) menjalankan algoritma EKF dan menyimpulkan data ke dalam basis data historis.
4. **Lapisan Analitik PAT**: Modul PVStudio, LyophilizerGo, atau LyoLogic yang menghitung $\dot{m}_i$, $R_{p,i}$, dan *endpoint* primary drying via *pressure rise test* otomatis.

### 3.2 Diagram Alir SOP Kalibrasi dan Deployment

```
┌──────────────────────────────────────────┐
│ 1. Pre-Qualifikasi Sensor (IQ/OQ)        │
│    - Kalibrasi 3 titik (-50°C, 0°C, 25°C)│
│    - Verifikasi akurasi ±0,3°C           │
├──────────────────────────────────────────┤
│ 2. Sterilisasi & Instalasi Vial Probe     │
│    - Autoklaf 121°C / 20 menit           │
│    - Penempatan vial sentinel (5%)       │
├──────────────────────────────────────────┤
│ 3. Commissioning Jaringan                │
│    - Site survey RF (RSSI mapping)       │
│    - Pairing node ke gateway             │
│    - Pengujian latency < 500 ms          │
├──────────────────────────────────────────┤
│ 4. Validasi Proses (PQ)                  │
│    - Run placebo vs produk aktif         │
│    - Verifikasi $\hat{T}_p$ vs metode    │
│      Manometric Temperature Measurement  │
├──────────────────────────────────────────┤
│ 5. Release PAT Loop                      │
│    - Closed-loop control via $T_{shelf}$ │
└──────────────────────────────────────────┘
```

### 3.3 Standar Acuan

Penerapan mengikuti ASTM E2503-13 (*Standard Practice for Qualification of Basket Type Lyophilizers*), ISPE Baseline Guide Vol 6 (*Biopharmaceutical Manufacturing Facilities*), serta rekomendasi PDA Technical Report No. 72 (2024) tentang *Wireless Sensors in Pharma*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Pabrik biofarmasi mengoperasikan *freeze-dryer* Telstar Lyobeta II/4 dengan 4 rak masing-masing berisi 250 vial 20 mL (luas sublimasi per vial $A_v = 6{,}16 \times 10^{-4}$ m²). Total 1.000 vial produk antibodi monoklonal pada konsentrasi 50 mg/mL. Sensor WSN dipasang di 100 vial sentinel (10%). Parameter target: $T_p \leq -28\,°C$ untuk mencegah kolaps, $P_c = 10$ Pa.

### 4.1 Step 1: Penentuan Resistansi Sublimasi

Dari data tipikal sukrosa 5% sebagai *cryoprotectant*:

$$R_s = \frac{R_c \cdot R_p}{R_c + R_p}$$

dengan $R_c \approx 1{,}0 \times 10^5$ Pa·m²·s/kg (resistansi vial kosong) dan $R_p \approx 3{,}5 \times 10^5$ Pa·m²·s/kg untuk *dried layer* setebal 1 cm.

$$R_s = \frac{1{,}0 \times 10^5 \times 3{,}5 \times 10^5}{1{,}0 \times 10^5 + 3{,}5 \times