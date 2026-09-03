# 2652 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Integrasi Process Analytical Technology dalam Rekayasa Sistem Pengeringan Beku

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (freeze-drying) merupakan salah satu unit operasi paling kritis dalam rantai pasok biofarmasi modern, khususnya untuk produk-produk biologis termolabil seperti protein monoklonal, vaksin mRNA, dan formulasi antibiotik steril. Proses ini menghilangkan air melalui sublimasi di bawah kondisi vakum untuk mempertahankan stabilitas molekul aktif yang umumnya tidak tahan terhadap degradasi termal konvensional. Industri farmasi global menggelontorkan lebih dari USD 4,1 miliar per tahun untuk operasi liofilisasi, dengan kapasitas produksi yang terus meningkat pasca-pandemi untuk memenuhi kebutuhan formulasi steril berskala besar (Meza-Galvan, Strongrich & Darwish, 2026).

Dalam konteks Industri 4.0 dan kerangka Process Analytical Technology (PAT) yang digagas FDA, visibilitas proses secara *real-time* menjadi prasyarat utama untuk rilis produk berbasis *Real-Time Release Testing* (RTRT). Namun, sistem instrumentasi liofilisasi konvensional masih didominasi oleh thermocouple kawat (TCC—Thermocouple in Chamber) yang bersifat invasif, rentan terhadap efek radiasi, serta memerlukan penetrasi fisik melalui dinding ruang vakum. Keterbatasan ini menjadi bottleneck signifikan dalam upaya modernisasi kontrol proses. Meza-Galvan, Strongrich, dan Darwish (2026) dalam chapter mereka di buku *Process Analytical Technology for Pharmaceutical Freeze-Drying* mengusulkan paradigma transformatif: integrasi Wireless Sensor Networks (WSN) sebagai backbone akuisisi data terdistribusi dalam chamber liofilisasi.

Urgensi adopsi WSN dalam liofilisasi didorong oleh empat faktor simultan. Pertama, kebutuhan akan *spatial resolution* tinggi untuk memetakan gradien termal antar-vial dalam batch yang heterogen. Kedua, eliminasi point-of-failure pada harness thermocouple yang menurunkan *mean time between failures* (MTBF) sistem. Ketiga, peluang menurunkan biaya validasi melalui digitalisasi jejak data (*data lineage*) yang memenuhi 21 CFR Part 11. Keempat, kemampuan deployment ulang yang fleksibel untuk pengembangan formulasi baru tanpa modifikasi infrastruktur chamber. Artusio, Barresi, dan Pisano (2026) dalam chapter komplementer memperkuat argumen ini dengan menunjukkan bahwa emerging technologies seperti WSN, soft-sensor, dan machine learning-driven PAT dapat meningkatkan *product yield* hingga 15-25% melalui optimasi endpoint detection yang lebih presisi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Sublimasi dan Transfer Massa

Laju sublimasi pada primary drying liofilisasi dimodelkan melalui persamaan transfer massa resisted:

$$\frac{dm}{dt} = \frac{A_p \cdot (P_i - P_c)}{R_p}$$

di mana $\frac{dm}{dt}$ adalah laju sublimasi (kg/s), $A_p$ adalah luas penampang vial (m²), $P_i$ adalah tekanan uap air pada interface es (Pa), $P_c$ adalah tekanan chamber (Pa), dan $R_p$ adalah resistansi terhadap transfer massa pada dried layer (Pa·m²·s/kg). Resistansi $R_p$ sendiri bersifat dependen terhadap komposisi formulasi dan didekati dengan:

$$R_p = R_{p,0} + \frac{A_1 \cdot R_{p,1}}{1 + A_2 \cdot m_{dried}}$$

dengan $R_{p,0}$ sebagai resistansi awal dry layer, $A_1$ dan $A_2$ sebagai koefisien empiris, serta $m_{dried}$ sebagai massa air tersublimasi kumulatif.

### 2.2 Persamaan Transfer Panas

Mekanisme transfer panas dari shelf ke vial mengikuti:

$$Q = K_v \cdot A_v \cdot (T_s - T_b) = K_s \cdot A_v \cdot (T_s - T_i)$$

di mana $K_v$ adalah koefisien transfer panas vial-gas (W/m²·K), $K_s$ koefisien dried layer-sublimation interface, $A_v$ luas vial, $T_s$ suhu shelf, $T_b$ suhu produk bagian bawah, dan $T_i$ suhu interface sublimasi.

### 2.3 Model Energi Jaringan Sensor Nirkabel

Untuk setiap node sensor nirkabel dengan protokol IEEE 802.15.4 (ZigBee), konsumsi energi transmisi mengikuti model first-order radio:

$$E_{tx}(k, d) = E_{elec} \cdot k + \epsilon_{amp} \cdot k \cdot d^n$$

di mana $k$ adalah ukuran paket (bit), $d$ jarak transmisi (m), $E_{elec}$ energi elektronik (50 nJ/bit), $\epsilon_{amp}$ energi amplifier (100 pJ/bit/m² untuk path loss eksponen $n=2$ pada line-of-sight dalam chamber logam). Konsumsi penerima:

$$E_{rx}(k) = E_{elec} \cdot k$$

Total energi operasional per siklus duty-cycled sampling interval $\tau$ (s):

$$E_{cycle} = E_{sense} + E_{tx}(k,d) + P_{sleep} \cdot \tau$$

Lifetime baterai node:

$$T_{lifetime} = \frac{C_{battery}}{E_{cycle} / \tau}$$

### 2.4 Model Probabilitas Packet Delivery

Kualitas link RF dalam chamber vakum stainless steel mengikuti modified log-normal shadowing:

$$P_r(d) = P_t - P_{L0} - 10n \log_{10}(d/d_0) - X_\sigma$$

di mana $X_\sigma$ adalah zero-mean Gaussian random variable dengan standar deviasi $\sigma$ (dB), merepresentasikan multipath fading akibat geometri internal chamber.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem WSN-Lyo

Arsitektur tiga-lapis yang dirancang mengikuti framework Meza-Galvan et al. (2026):

**Layer 1 — Sensor Field (Cold Chamber):**
- Node sensor miniatur (± 8 mm × 4 mm) berbasis SoC ARM Cortex-M0+ dengan transceiver sub-GHz (433 MHz atau 868 MHz) untuk penetrasi lebih baik dibanding 2.4 GHz pada lingkungan logam.
- Termistor NTC kelas FDA-compliant dengan akurasi ±0,1°C dalam rentang -40°C hingga +60°C.
- Pressure sensor MEMS piezoresistive untuk monitoring lokal $P_c$.
- Catu daya: baterai lithium solid-state 3,6 V 240 mAh dengan low-duty-cycle (1 transmisi/30 s).

**Layer 2 — Edge Gateway:**
- Aggregator node di luar chamber dengan antena dipole eksternal menembus feedthrough vakum.
- Real-Time Operating System (FreeRTOS) untuk buffering dan time-stamping data dengan presisi ±10 ms.
- Implementasi time-synchronized mesh networking (TSCH) untuk deterministic latency.

**Layer 3 — SCADA/Cloud PAT Platform:**
- Database historis sesuai ALCOA+ principles.
- Dashboard real-time dengan visualisasi 3-D thermal map.
- Algoritma Machine Learning untuk *endpoint detection* dan *batch release*.

### 3.2 Diagram Alir Implementasi SOP

```
[Fase 1: Design Qualification]
  → Risk Assessment (FMEA) → Sensor Placement Optimization
  → RF Propagation Study dalam chamber kosong

[Fase 2: Installation Qualification]
  → Mounting node pada dummy vial (tipis, non-interferensi)
  → Leak testing & vacuum compatibility (outgassing rate < 1×10⁻⁸ Torr·L/s)

[Fase 3: Operational Qualification]
  → Kalibrasi multi-titik (-40°C, -20°C, 0°C, +25°C, +40°C)
  → Cross-validation dengan TCC reference (ΔT ≤ 0,3°C per ISO 13485)

[Fase 4: Performance Qualification]
  → 3-batch consistency run dengan placebo + active product
  → Validation of PAT-based release criteria

[Fase 5: Routine Production]
  → Continuous monitoring & trend analysis
  → Predictive maintenance trigger pada battery < 20%
```

### 3.3 Pertimbangan Rekayasa Kritis

Beberapa aspek kritis dalam deployment WSN-Lyo: (i) material biocompatibility—housing sensor harus food/pharmaceutical grade (USP Class VI), (ii) thermal mass—node < 0,5 g untuk menghindari distorsi lokal heat transfer, (iii) sterilisasi—kompatibilitas dengan EtO atau gamma irradiation untuk aplikasi aseptic processing, dan (iv) electromagnetic compatibility terhadap sistem PLC chamber yang sensitif.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Spesifikasi Skenario

Sebuah perusahaan manufaktur kontrak (CMO) mengoperasikan lyophilizer skala produksi dengan parameter berikut:

| Parameter | Nilai |
|---|---|
| Jumlah vial per batch | 1.000 vial |
| Volume fill per vial | 10 mL |
| Konsentrasi solids | 5% (w/v) sukrosa |
| Diameter vial dalam | 22 mm |
| Tekanan chamber operasi | 100 mTorr = 13,33 Pa |
| Suhu shelf | -25°C = 248,15 K |
| Durasi primary drying | ~36 jam |

### 4.2 Perhitungan Laju Sublimasi Steady-State

Menggunakan parameter tipikal: $A_p = 3,80 \times 10^{-4}$ m², $P_i$ pada -25°C dari persamaan Goff-Gratch $\approx$ 476 Pa, $P_c = 13,33$ Pa, dan $R_p$ rata-rata = $2,5 \times 10^4$ Pa·m²·s/kg.

$$\frac{dm}{dt}_{vial} = \frac{3,80 \times 10^{-4} \cdot (476 - 13,33)}{2,5 \times 10^4}$$

$$\frac{dm}{dt}_{vial} = \frac{3,80 \times 10^{-4} \cdot 462,67}{2,5 \times 10^4} = 7,03 \times 10^{-6} \text{ kg/s per vial}$$

Untuk 1.000 vial:

$$\dot{M}_{total} = 7,03 \times 10^{-3} \text{ kg/s} = 25,3 \text{ kg/jam sublimat air}$$

Total massa air yang harus disublimasi per batch:

$$M_{water} = 1.000 \cdot 10 \times 10^{-6} \text{ m}^3 \cdot 1.000 \text{ kg/m}^3 \cdot 0,95 = 9,5 \text{ kg}$$

Durasi teoritis:

$$t = \frac{9,5}{25,3} = 0,375 \text{ jam} = 22,5 \text{ menit}$$

Namun, dengan mempertimbangkan peningkatan $R_p$ seiring dried layer thickening dan inhomogeneity batch, estimasi realistis primary drying adalah 30-40 jam, konsisten dengan praktik industri.

### 4.3 Desain Jumlah Node Sensor dan Lifetime Baterai

Asumsikan sampling interval $\tau = 30$ s, ukuran paket $k = 128$ bit, jarak rata-rata node ke gateway $d = 2,5$ m.

**Energi per transmisi:**
$$E_{tx} = 50 \times 10^{-9} \cdot 128 + 100 \times 10^{-12} \cdot 128 \cdot (2,5)^2$$
$$E_{tx} = 6,4 \times 10^{-6} +