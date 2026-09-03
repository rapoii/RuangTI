# 1628 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Rekayasa Sistem Pemantauan Proses Kritis Berbasis PAT (Process Analytical Technology)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*, Chapter 4. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*, Chapter 11. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (freeze-drying) merupakan salah satu unit operasi paling kompleks dan bernilai strategis tinggi dalam industri biofarmasi modern. Proses ini digunakan untuk menstabilkan produk biologis termolabil seperti protein monoklonal, antibodi, vaksin mRNA, dan API (Active Pharmaceutical Ingredient) dengan aktivitas air tinggi yang rentan terhadap degradasi termal. Menurut Meza-Galvan, Strongrich, dan Darwish (2026, DOI: 10.1002/9783527850303.ch4), sekitar 50% produk biofarmasi yang sedang dalam pipeline klinis memerlukan proses liofilisasi pada tahap formulasi akhir, menjadikan proses ini sebagai *bottleneck* produksi bernilai miliaran USD per tahun.

Dalam kerangka **Process Analytical Technology (PAT)** yang diamanatkan oleh FDA sejak Guidance for Industry PAT (2004), setiap atribut kualitas kritis (Critical Quality Attribute/CQA) harus dimonitor secara real-time menggunakan sensor multivariate dan umpan balik kontrol otomatis. Liofilisasi tradisional mengandalkan thermocouple tunggal yang dipasang secara sparse pada rak (shelf), sehingga tidak mampu menangkap gradien suhu produk pada level vial individual. Ketidakpastian ini menghasilkan *batch failure rate* yang dilaporkan mencapai 8–15% pada produk biologis kompleks, dengan kerugian ekonomi per batch yang dapat melampaui USD 500.000 untuk produk bernilai tinggi seperti antibodi terapeutik (Artusio, Barresi, & Pisano, 2026, DOI: 10.1002/9783527850303.ch11).

Urgensi ekonomis dan teknis ini mendorong adopsi **Wireless Sensor Networks (WSN)** sebagai backbone pemantauan vial-by-vial. Meza-Galvan et al. (2026) menjelaskan bahwa jaringan sensor nirkabel generasi baru — beroperasi pada pita 2.4 GHz (IEEE 802.15.4/ZigBee) atau sub-GHz (LoRaWAN, WirelessHART) — memungkinkan pemasangan node sensor miniatur di dalam vial itu sendiri tanpa menembus sterilitas barrier. Dengan densitas nodal mencapai 200–500 unit per batch pada freeze dryer skala pilot hingga produksi, volume data telemetri yang dihasilkan dapat melampaui 50 GB per siklus, memerlukan arsitektur edge-computing dan time-series database yang robust.

Dari perspektif teknik industri, integrasi WSN dalam liofilisasi menyentuh empat pilar strategis: (i) peningkatan **Overall Equipment Effectiveness (OEE)** melalui reduksi scrap rate; (ii) implementasi **Quality by Design (QbD)** dengan kontrol umpan balik berdasarkan Primary Drying Endpoint Detection; (iii) efisiensi energi dengan optimalisasi waktu sublimasi; dan (iv) kepatuhan terhadap 21 CFR Part 11 dan Annex 11 EU GMP untuk integritas data elektronik. Studi Meza-Galvan et al. (2026) menunjukkan potensi pengurangan cycle time hingga 18–25% melalui dynamic Recipe Optimization yang dimungkinkan oleh visibilitas data real-time, sebuah lompatan signifikan dibandingkan metode konservatif berbasis thermocouple.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kinetika Sublimasi dan Transfer Panas

Model transfer panas dan massa yang menjadi dasar rekayasa liofilisasi mengikuti persamaan Stefan klasik untuk sublimasi:

$$\frac{dm}{dt} = \frac{A_p \cdot (P_{ice}(T_p) - P_c)}{\hat{R}_p}$$

di mana $dm/dt$ adalah laju sublimasi (kg/s), $A_p$ luas sublimasi interfacial (m²), $P_{ice}(T_p)$ tekanan uap air jenuh pada antarmuka sublimasi (Pa) yang bergantung pada suhu produk $T_p$, $P_c$ tekanan ruang (chamber pressure, Pa), dan $\hat{R}_p$ tahanan transfer massa total (Pa·s·m²/kg) yang menggabungkan resistansi dried-layer dan stopper. Hubungan $P_{ice}(T_p)$ mengikuti persamaan Goff-Gratch atau bentuk eksponensial yang disederhanakan:

$$P_{ice}(T_p) = \exp\left(9.550426 - \frac{5723.265}{T_p} + 3.53068 \cdot \ln(T_p) - 0.00728332 \cdot T_p\right)$$

dengan $T_p$ dalam Kelvin. Laju sublimasi ini harus diseimbangkan dengan fluks kalor dari shelf:

$$q = \frac{dm}{dt} \cdot \Delta H_s = K_v \cdot (T_s - T_p)$$

dengan $\Delta H_s \approx 2840$ kJ/kg sebagai panas sublimasi, $K_v$ koefisien transfer panas vial (W/m²·K), dan $T_s$ suhu rak.

### 2.2 Arsitektur Jaringan Sensor Nirkabel

Keandalan WSN dalam lingkungan liofilisasi yang sangat dingin ($T_s = -40$°C hingga $+40$°C) dan bertekanan rendah (0.05–1.0 mbar) memerlukan model **link reliability** yang mempertimbangkan atenuasi propagasi RF dalam atmosfer residual. Dalam Meza-Galvan et al. (2026), model path-loss log-normal digunakan:

$$PL(d) = PL_0 + 10n \cdot \log_{10}\left(\frac{d}{d_0}\right) + X_\sigma$$

dengan $PL(d)$ path-loss (dB), $d$ jarak node ke gateway (m), $n$ path-loss exponent (2.0–3.5 tergantung densitas gas), serta $X_\sigma$ shadowing random (Gaussian, $\sigma \approx 4$–8 dB). **Packet Delivery Ratio (PDR)** sebagai fungsi SNR mengikuti:

$$PDR = \left[1 - Q\left(\frac{SNR_{min} - \overline{SNR}}{\sigma_{SNR}}\right)\right]^L$$

dengan $L$ panjang paket (byte) dan $Q$ fungsi Q-function. Untuk menjaga **Quality of Service (QoS)** pada threshold $PDR \geq 99.5%$, redundansi transmisi melalui protokol mesh harus diimplementasikan.

### 2.3 State-Space Process Monitoring

Untuk estimasi variabel tidak terukur seperti $T_p$ (sublimation interface temperature) dari data thermocouple rak, digunakan Kalman Filter diskret:

$$\hat{x}_{k|k-1} = A\hat{x}_{k-1|k-1} + Bu_k$$
$$P_{k|k-1} = AP_{k-1|k-1}A^T + Q$$
$$K_k = P_{k|k-1}H^T(HP_{k|k-1}H^T + R)^{-1}$$

dengan $\hat{x}$ estimasi state, $P$ kovariansi estimasi, $K$ Kalman gain, dan matriks $A, B, H$ yang diturunkan dari linierisasi persamaan Stefan. Inovasi residual $\nu_k = y_k - H\hat{x}_{k|k-1}$ digunakan sebagai **Hotelling's $T^2$ statistic** untuk deteksi anomali proses:

$$T^2 = \nu_k^T (HP_{k|k-1}H^T + R)^{-1} \nu_k$$

Pelanggaran batas $T^2 > T^2_{\alpha, m, n-m}$ (dengan $m$ jumlah variabel, $n$ jumlah observasi) menandai **Primary Drying Endpoint** — momen kritis di mana seluruh ice telah ter-sublimasi dan suhu produk naik tajam.

### 2.4 Kinetika Degradasi Produk

Untuk mengkuantifikasi risiko degradasi termal, laju degradasi mengikuti kinetika Arrhenius orde pertama:

$$k_d = A \cdot \exp\left(-\frac{E_a}{RT_p}\right)$$

dengan $E_a$ energi aktivasi (kJ/mol), $R$ konstanta gas, $A$ faktor pre-eksponensial. Fraksi produk aktif setelah total waktu proses $t_{total}$:

$$F_{active} = \exp\left(-\int_0^{t_{total}} k_d(T_p(t)) \, dt\right)$$

Integrasi dilakukan secara numerik terhadap profil suhu produk hasil estimasi Kalman, memungkinkan akumulasi $F_{active}$ sebagai **CQA predictor**.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi WSN pada freeze dryer mengikuti kerangka SOP berlapis yang disintesis dari protokol Meza-Galvan et al. (2026) dan referensi Artusio et al. (2026):

**Fase 1 — Pra-Desain & Validasi Sensor (IQ/OQ):**
1. Karakterisasi sensor batch (calibration certificate, NIST-traceable) untuk rentang -50°C hingga +60°C dengan akurasi ±0.3°C.
2. Stress-testing pada suhu ekstrem dan tekanan rendah untuk validasi lifespan baterai lithium-thionyl (tipikal 5–10 tahun pada duty cycle 1%).
3. Mapping topologi jaringan dalam chamber kosong untuk verifikasi RSSI dan redundansi jalur mesh.

**Fase 2 — Instalasi dalam Batch Produksi:**
1. Vialisasi aseptik node sensor pada konsentrasi 1 node per 6–10 vial untuk sampling representatif.
2. Pairing node dengan vial-ID melalui RFID atau barcode 2D untuk traceability 21 CFR Part 11.
3. Aktivasi gateway pada posisi eksternal chamber dengan feedthrough hermetik (loss RF < 1 dB).

**Fase 3 — Akuisisi Data & Kontrol Real-Time:**
1. Sampling rate 1 Hz untuk thermocouple, 0.1 Hz untuk pressure transducer.
2. Time-stamping dengan protokol IEEE 1588 (Precision Time Protocol, drift < 1 μs).
3. Streaming data ke SCADA/DCS menggunakan OPC UA Pub/Sub.
4. Implementasi batch-end detector otomatis berdasarkan $T^2$ statistic dan rate-of-change $dT_p/dt$.

**Fase 4 — Post-Batch Analysis & Continuous Improvement:**
1. Univariate dan multivariate analysis (PCA, PLS) terhadap profil batch.
2. Update parameter recipe menggunakan **Design Space** yang divalidasi secara statistik (Monte Carlo, $n \geq 1000$ simulasi).
3. Archival ke data lake compliant dengan ALCOA+ principles.

Diagram alir logika kontrol **Closed-Loop Feedback** pada Primary Drying:

```
[Sensor Node] →(RF Transmisi)→ [Gateway] → [Edge Buffer] → [OPC UA Server]
       ↑                                                        ↓
       |                                              [Kalman Filter + T²]
       |                                                        ↓
[Vial Heater/Shelf] ←(PID Controller)← [Recipe Optimizer (QbD)] ←┘
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Freeze dryer produksi dengan kapasitas 2.000 vial 10R (volume fill 5 mL), produk antibodi monoklonal (mAb) dengan konsentrasi 50 mg/mL dalam formulasi histidine buffer. Target: validasi efektivitas WSN dalam memendekkan Primary Drying tanpa melampaui $T_p^{max} = -25°C$.

**Parameter Awal:**
- Suhu rak: $T_s = +10°C$
- Tekanan chamber: $P_c = 100$ mPa (0.1 mbar)
- Koefisien transfer panas vial: $K_v = 12$ W/m²·K
- Panjang vial: $L_v = 0.05$ m (jarak sublimation front)
- Energi aktivasi degradasi: $E_a = 85$ kJ/mol
- Faktor pre-eksponensial: $A = 1.2 \times 10^{12}$ jam⁻¹

**Langkah 1 — Estimasi Laju Sublimasi Awal:**
Asumsikan $T_p$ awal = $-35°C = 238.15$ K. Hitung $P_{ice}(T_p)$:

$$P_{ice}(238.15) = \exp\left(9.550426 - \frac{5723.265}{238.15} + 3.53068 \cdot \ln(238.15) - 0.00728332 \cdot 238.15\right)$$

$$\approx \exp(9.5504 - 24.032 + 21.520 - 1.7347) = \exp(5.304) \approx 200.5 \text{ Pa}$$

Tahanan total $\hat{R}_p \approx 2.5 \times 10^4$ Pa·s·m²/kg untuk dried-layer 1 mm. Dengan $A_p = 3.5 \times 10^{-4}$ m² per vial:

$$\frac{dm}{dt} = \frac{3.5\times10^{-4} \times (200.5 - 0.1)}{2.5\times10^4} = 2.8\times10^{-6} \text{ kg/s per vial}$$

**Langkah 2 — Verifikasi Keseimbangan Energi:**
$$q = 2.8\times10^{-6} \times 2.84\times10^6 = 7.95 \text