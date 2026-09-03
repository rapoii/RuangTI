# 2380 — Jaringan Sensor Nirkabel (WSN) untuk Proses Liofilisasi Farmasi: Arsitektur Pemantauan Real-Time, Pemodelan Termodinamika, dan Kendali Mutu Berbasis PAT

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization (Jaringan Sensor Nirkabel untuk Liofilisasi)
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*, Chapter 4. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*, Chapter 11. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (freeze-drying) merupakan proses unit operasi kritis dalam manufaktur farmasi modern yang digunakan untuk menstabilkan produk biologis termolabil seperti antibodi monoklonal (mAb), vaksin mRNA, dan protein terapeutik. Proses ini terdiri atas tiga tahap berurutan: pembekuan (freezing), pengeringan primer (primary drying/sublimasi), dan pengeringan sekunder (secondary drying/desorpsi). Lebih dari 50% biofarmasi yang baru disetujui oleh FDA antara tahun 2018–2024 memerlukan formulasi liofilisasi karena sifat intrinsiknya yang tidak stabil dalam bentuk larutan cair (Meza‐Galvan, Strongrich & Darwish, 2026, DOI: 10.1002/9783527850303.ch4). Secara ekonomi, satu siklus liofilisasi batch dapat berlangsung 48–96 jam dengan konsumsi energi antara 1,2–2,5 MWh per batch, menjadikan proses ini sebagai *bottleneck* biaya produksi (capex + opex) pada fasilitas Contract Development & Manufacturing Organization (CDMO) global.

Urgensi utama yang diangkat oleh Meza-Galvan dkk. (2026) adalah keterbatasan instrumentasi thermocouple tradisional (sepasang kawat tembaga-konstantan tipe T) yang bersifat *hard-wired*, memiliki kapasitas hanya 8–16 channel per siklus, dan tidak dapat menyediakan profil termal 3D pada seluruh permukaan vial secara simultan. Padahal, gradien suhu vial-to-vial pada rak (*shelf*) chamber komersial dapat bervariasi hingga 4–6 °C antar posisi tepi dan pusat, yang secara langsung memengaruhi heterogenitas ukuran kristal es, kecepatan sublimasi ($dm/dt$), dan kadar air residu (*residual moisture*, $RM$). Heterogenitas ini adalah sumber utama *batch failure* yang merugikan hingga USD 500.000 per kejadian di industri biofarmasi.

Di sinilah Wireless Sensor Networks (WSN) muncul sebagai enabler teknologi Process Analytical Technology (PAT) sesuai panduan FDA PAT Guidance (2004) dan ICH Q8(R2). Bab 4 buku tersebut secara khusus membahas implementasi WSN berbasis transceiver sub-GHz (433/868/915 MHz) dengan sensor suhu RTD kelas platinum (akurasi ±0,1 °C), sensor tekanan kapasitif (akurasi ±0,1% FS), dan sensor kelembapan relatif polymer-based. Artikel pendukung dari Artusio, Barresi & Pisano (2026, DOI: 10.1002/9783527850303.ch11) melengkapi dengan mengintegrasikan WSN ke dalam arsitektur Industry 4.0 untuk *continuous pharmaceutical manufacturing* (PCM), termasuk *digital twin*, MQTT/OPC-UA gateway, dan machine learning-based soft sensor.

Konteks industri global menunjukkan bahwa pasar liofilisasi farmasi bernilai USD 7,3 miliar (2024) dengan CAGR 8,4%, sementara implementasi PAT-WSN masih kurang dari 12% fasilitas karena顾虑 akan validasi (IQ/OQ/PQ) dan 21 CFR Part 11. Modul 2380 ini membedah arsitektur WSN, model matematis sublimasi, dan SOP implementasi sesuai literatur primer di atas.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Energi Lyo dan Laju Sublimasi

Meza-Galvan dkk. (2026, DOI: 10.1002/9783527850303.ch4) menurunkan model sublimasi vial berdasarkan Hukum Fourier 1D dan kesetimbangan massa pada *moving sublimation front*:

$$\frac{dm}{dt} = \frac{A_p \cdot (P_{ice}(T_i) - P_c)}{\mathcal{R}_p}$$

dengan:
- $dm/dt$ = laju sublimasi (g/s)
- $A_p$ = luas penampang internal vial (m²)
- $P_{ice}(T_i)$ = tekanan uap air jenuh pada suhu interface es (Pa)
- $P_c$ = tekanan ruang chamber (Pa)
- $\mathcal{R}_p$ = resistansi transfer massa produk kering (*dried product resistance*, m/Pa·s)

Tekanan uap es mengikuti persamaan Goff-Gratch atau penyederhanaan Clausius-Clapeyron:

$$P_{ice}(T_i) = \exp\left(9.550426 - \frac{5723.265}{T_i} + 3.53068 \ln(T_i) - 0.00728332 T_i\right)$$

dengan $T_i$ dalam Kelvin.

### 2.2 Resistansi Produk dan Model Kvick

Resistansi $\mathcal{R}_p$ berkembang secara kuadratik terhadap *dried layer thickness* $l$:

$$\mathcal{R}_p(l) = \mathcal{R}_{p,0} + \frac{A_1 \cdot l + A_2 \cdot l^2}{A_p}$$

dengan $\mathcal{R}_{p,0}$ adalah resistansi awal (perangkap sublimasi) dan $A_1, A_2$ koefisien empiris Kvick. Data khas untuk 5% sukrosa: $\mathcal{R}_{p,0} \approx 0.8$ m/Pa·s, $A_1 \approx 2.1 \times 10^{3}$ m²·s/Pa, $A_2 \approx 4.6 \times 10^{5}$ m⁴·s/Pa.

### 2.3 Neraca Energi pada Shelf dan Vial

Persamaan neraca energi vial diselesaikan secara kopling dengan shelf:

$$m_v c_{p,v} \frac{dT_v}{dt} = \dot{Q}_{shelf} - \dot{Q}_{subl} - \dot{Q}_{rad}$$

dengan:
$$\dot{Q}_{shelf} = K_v A_v (T_{shelf} - T_v)$$
$$\dot{Q}_{subl} = \Delta H_s \cdot \frac{dm}{dt}$$
$$\dot{Q}_{rad} = \sigma \epsilon A_{top} (T_{shelf}^4 - T_v^4)$$

Enthalpi sublimasi es $\Delta H_s \approx 2800$ kJ/kg pada 0 °C.

### 2.4 Arsitektur Jaringan Sensor Nirkabel (WSN)

WSN yang diusulkan Meza-Galvan dkk. menggunakan topologi *star-mesh hybrid* dengan parameter berikut:

$$E_{node} = V_{bat} \cdot I_{tx} \cdot t_{tx} + P_{sense} \cdot t_{sense}$$

dengan *duty cycle* transmisi $\delta = t_{tx}/T_{sample}$. Untuk baterai Li-SOCl₂ 3,6 V @ 2,4 Ah dengan $I_{tx} = 30$ mA, $t_{tx} = 0,05$ s per paket, dan $T_{sample} = 30$ s, konsumsi harian hanya 7,2 mAh — cukup untuk operasi >300 hari per batch liofilisasi multi-siklus. RSSI (Received Signal Strength Indicator) digunakan sebagai metrik kualitas tautan nirkabel:

$$RSSI = P_{tx} - PL_0 - 10 n \log_{10}(d) - X_\sigma$$

dengan $n$ = path-loss exponent (2,1–3,0 dalam ruang chamber baja stainless) dan $X_\sigma$ = shadow fading berdistribusi normal $\mathcal{N}(0, \sigma^2)$, $\sigma = 4$ dB.

### 2.5 Soft Sensor berbasis Machine Learning (dari Artusio dkk., 2026)

Untuk memprediksi $T_i$ (suhu sublimasi yang tidak terukur langsung), digunakan Gaussian Process Regression:

$$T_i(\mathbf{x}) \sim \mathcal{GP}(\mu(\mathbf{x}), k(\mathbf{x}, \mathbf{x}'))$$

dengan kernel RBF:

$$k(\mathbf{x}, \mathbf{x}') = \sigma_f^2 \exp\left(-\frac{\|\mathbf{x} - \mathbf{x}'\|^2}{2\ell^2}\right)$$

Input $\mathbf{x} = [T_{shelf}, P_c, t, \text{posisi}]^{\top}$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem 4 Lapis (PAT-WSN)

```
┌──────────────────────────────────────────────┐
│ LAPIS 4: Cloud/MES (OPC-UA, MQTT, Historian)│
├──────────────────────────────────────────────┤
│ LAPIS 3: Edge Computing (Soft Sensor ML,     │
│          Process Control Loop)               │
├──────────────────────────────────────────────┤
│ LAPIS 2: Gateway Nirkabel (Sub-GHz 433 MHz,  │
│          Sink Node + Time-Sync IEEE 1588)    │
├──────────────────────────────────────────────┤
│ LAPIS 1: Node Sensor (RTD Pt100, kapasitif,  │
│          MCU MSP430, antena chip)            │
└──────────────────────────────────────────────┘
```

### 3.2 SOP Implementasi WSN-Lyo (12 Langkah)

1. **Pra-Kualifikasi Risiko (QbD)**: Lakukan FMEA pada parameter $T_{shelf}$, $P_c$, dan $T_v$ dengan Severity × Occurrence × Detection.
2. **Pemetaan RSSI Chamber**: Tempatkan 12 *dummy node* pada posisi vial tipikal, ukur RSSI ≥ -85 dBm untuk margin 15 dB.
3. **Kalibrasi Sensor RTD**: Gunakan *ice-point bath* (0,000 °C) dan *triple point of water* cell (0,01 °C). Toleransi ±0,1 °C.
4. **Validasi Battery Life**: Uji *accelerated discharge* pada 60 °C selama 30 hari, proyeksikan kapasitas 5 tahun.
5. **Instalasi Gateway**: Posisikan di dinding chamber dengan feedthrough hermetik, aktifkan enkripsi AES-128 (21 CFR Part 11).
6. **Time Synchronization**: Implementasikan IEEE 1588 PTP dengan jitter <100 μs antar node.
7. **Cycle 1 — Baseline**: Jalankan siklus kosong (*empty chamber test*) untuk verifikasi noise floor termal <0,05 °C.
8. **Cycle 2 — Placebo**: Uji dengan vial berisi air untuk gradien (WFI) dan 5% sukrosa.
9. **Cycle 3 — Aktual Produk**: Gunakan lot GMP pertama. Set *sample rate* 30 s untuk $T_v$, 60 s untuk $P_c$.
10. **Data Integration**: Stream ke PI Server atau Aspen IP21 via OPC-UA.
11. **Model Soft-Sensor Training**: Latih GP model dengan minimal 3 batch historis.
12. **Continuous Verification**: Monitor drift sensor mingguan; trigger alarm jika $T_v > T_{collapse} - 2 °C$ (margin 2 °C).

### 3.3 Diagram Alir Logika Pengendalian Adaptif

```
[Mulai Siklus]
      ↓
[Inisialisasi Node WSN]
      ↓
[Baca T_shelf, P_c, T_v dari semua node]
      ↓
[Soft-Sensor GP: prediksi T_i]
      ↓
[T_i ≤ T_collapse - 2°C?] --Tidak→ [Alarm + Reduce T_shelf 1°C/jam]
      ↓ Ya
[Update dq/dt < target?]
      ↓
[Log ke Historian + Lanjut Siklus]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input (Studi Kasus: 5% Sukrosa, 2 mL Vial)

Ambil kasus liofilisasi standar CDMO skala pilot:
- $V_{fill} = 2,0$ mL, $A_p = 2,85 \times 10^{-4}$ m² (vial 10R)
- $T_{shelf} = -15$ °C = 258,15 K
- $P_c = 10$ Pa (sublimasi agresif)
- $\mathcal{R}_{p,0} = 0,8$ m/Pa·s; $A_1 = 2,1 \times 10^{3}$; $A_2 = 4,6 \times 10^{5}$
- $m_{initial} = 0,250$ g; $l_0 = 0$ m
- $\Delta H_s = 2.800$ kJ/kg; $c_{p,v} = 1,5$ kJ/kg·K

### 4.2 Langkah 1: Hitung $P_{ice}(T_v)$ Asumsi Awal $T_v = -25$ °C = 248,15 K

$$P_{ice}(248,15) = \exp(9{,}550426 - \frac{5723{,}265}{248{,}15} + 3{,}53068 \ln(248{,}15) - 0{,}00728332 \cdot 248{,}15)$$

$$= \exp(9{,}550426 - 23{,}064 + 21{,}323 - 1{,}808) = \exp(6{,}001) \approx 405 \text{ Pa}$$

### 4.3 Langkah 2: Driving Force Sublimasi

$$\Delta P = P_{ice} - P_c = 405 - 10 = 395 \text{ Pa}$$

### 4.4 Langkah 3: Resistansi Produk Saat $l = 0{,}5 \times 10^{-3}$ m

$$\mathcal{R}_p = 0{,}8 + \frac{2{,}1 \times 10^3 \cdot 0{,}5 \times 10^{-3} + 4{,}6 \times 10^5 \cdot (0{,}5 \times 10^{-3})^2}{2{,}85 \times 10^{-4}}$$

$$= 0{,}8 + \frac{1{,}05 + 0{,}115}{2{,}85 \times 10^{-4}} = 0{,}8 + 4088 = 4089 \text{ m/Pa·s}$$

### 4.5 Langkah 4: Laju Sublimasi

$$\frac{dm}{dt} = \frac{2{,