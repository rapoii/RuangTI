# 2764 — Wireless Sensor Networks untuk Monitoring Proses Liofilisasi Farmasi: Integrasi PAT, Rekayasa Termal, dan Optimasi Sistem Sensor Nirkabel

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze-Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze-Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (freeze-drying) merupakan unit operasi kritis dalam manufaktur farmasi parenteral, bioteknologi, dan produk biologis bernilai tinggi seperti vaksin mRNA, antibodi monoklonal (mAb), dan terapi seluler. Proses ini menghilangkan air melalui sublimasi di bawah tekanan vakum untuk mempertahankan stabilitas termolabil produk dengan degradasi minimal (Meza‐Galvan, Strongrich, & Darwish, 2026). Secara industri, satu siklus liofilisasi untuk batch 10.000 vial dapat berlangsung 24–96 jam dengan konsumsi energi 50–150 kWh per batch dan nilai produk yang dipertaruhkan mencapai jutaan dolar AS; oleh karena itu, pengendalian variabel proses secara *real-time* menjadi isu strategis yang menentukan *batch release*, *yield*, dan kepatuhan terhadap regulasi FDA Process Analytical Technology (PAT) serta EU GMP Annex 1.

Menurut Meza‐Galvan *et al.* (2026) dalam Chapter 4 buku *Process Analytical Technology for Pharmaceutical Freeze-Drying*, penerapan **Wireless Sensor Networks (WSN)** menjawab keterbatasan instrumentasi kabel tradisional yang memiliki latensi propagasi sinyal, risiko kontaminasi melalui *feedthrough*, dan biaya retrofit tinggi untuk instalasi *cleanroom* ISO 5. Buku yang sama, pada Chapter 11 karya Artusio, Barresi, & Pisano (2026), menguraikan bahwa teknologi emerging seperti *soft sensors*, model *digital twin*, dan jaringan nirkabel berbasis protokol IEEE 802.15.4 (misalnya ZigBee, Thread, WirelessHART) memungkinkan densifikasi pengukuran suhu vial, tekanan ruang, dan konduktivitas uap air secara terdistribusi tanpa menembus dinding vakum.

Konteks industri semakin relevan dengan maraknya manufaktur *personalized medicine* dan *point-of-care*, di mana *small-batch lyophilizer* dengan 50–500 vial memerlukan arsitektur monitoring yang fleksibel, *scalable*, dan hemat biaya CAPEX. Studi kasus dari Pfizer, Sanofi, dan Lonza menunjukkan bahwa retrofit WSN menurunkan *cycle development time* sebesar 18–30% melalui eliminasi *trial-and-error* berbasis *gage R&R* yang buruk. Urgensi ekonominya tecermin dari fakta bahwa satu *batch failure* akibat *temperature excursion* dapat menimbulkan kerugian langsung USD 200.000–2.000.000 tergantung nilai produk, belum termasuk kerugian reputasi dan *regulatory observation* (Meza‐Galvan *et al.*, 2026).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Sublimasi dan Transfer Panas Liofilisasi

Laju sublimasi pada antarmuka es–vakum diformulasikan oleh pendekatan resistansi seri (Pikal, 1985; disitasi oleh Meza‐Galvan *et al.*, 2026):

$$\frac{dm}{dt} = \frac{P_i - P_c}{R_p} = \frac{A_s \cdot (P_i - P_c)}{R_p}$$

di mana $dm/dt$ adalah laju sublimasi (kg/s), $P_i$ adalah tekanan uap air pada antarmuka sublimasi (Pa), $P_c$ adalah tekanan ruang (chamber, Pa), $A_s$ adalah luas sublimasi (m²), dan $R_p$ adalah resistansi transfer massa produk (Pa·s·m²/kg). Nilai $P_i$ bergantung pada suhu sublimasi menurut persamaan Clausius–Clapeyron:

$$\ln(P_i) = -\frac{A}{T_i} + B$$

dengan $A \approx 6140$ K dan $B \approx 24.72$ untuk es, menghasilkan $P_i$ dalam mmHg ketika $T_i$ dalam Kelvin.

### 2.2 Neraca Energi pada Rak (Shelf)

Transfer panas dari rak ke vial dimodelkan sebagai kombinasi konduksi, konveksi gas (pada tekanan rendah), dan radiasi:

$$Q_{total} = \frac{T_{shelf} - T_b}{R_{tot}} = A_v \left[ k_{cake}(T) + h_{gas}(P_c) + h_{rad}(\epsilon, T) \right] \cdot (T_{shelf} - T_b)$$

di mana $T_b$ adalah suhu dasar vial (°C), $R_{tot}$ resistansi termal total (K/W), $k_{cake}$ konduktivitas *cake* beku (W/m·K), $h_{gas}$ koefisien konveksi gas residual yang bergantung tekanan (orde 5–25 W/m²·K pada 10–100 Pa), dan $h_{rad}$ kontribusi radiasi dengan emisivitas $\epsilon$ (Meza‐Galvan *et al.*, 2026).

### 2.3 Kinetika Degradasi Termal Produk

Degradasi stabilitas produk biologis selama *primary drying* mengikuti kinetika Arrhenius dengan akumulasi kerusakan seiring waktu proses:

$$k_d = A_d \cdot \exp\left(-\frac{E_a}{R \cdot T_b(t)}\right)$$

$$\text{Loss}\% = 100 \cdot \left[1 - \exp\left(-\int_0^{t_{cycle}} k_d(T_b(t))\, dt\right)\right]$$

di mana $k_d$ adalah konstanta laju degradasi, $A_d$ faktor pre-eksponensial (s⁻¹), $E_a$ energi aktivasi (J/mol, tipikal 60–120 kJ/mol untuk protein), dan $R = 8.314$ J/mol·K. Mempertahankan $T_b < T_{glass\,transition} - 3°C$ adalah syarat wajib yang menjadi justifikasi utama densifikasi sensor suhu vial via WSN.

### 2.4 Arsitektur WSN dan Model Konsumsi Energi

Model energi node sensor mengikuti kerangka kerja *First Order Radio* (Heinzelman, 2000; diaplikasikan oleh Meza‐Galvan *et al.*, 2026):

$$E_{Tx}(k, d) = E_{elec} \cdot k + \epsilon_{amp} \cdot k \cdot d^n$$

$$E_{Rx}(k) = E_{elec} \cdot k$$

$$E_{node} = E_{sense} + E_{proc} + E_{Tx} + E_{sleep}$$

untuk transmisi $k$ bit pada jarak $d$ meter, dengan $n$ *path loss exponent* (2–4 untuk lingkungan *cleanroom*), $E_{elec} = 50$ nJ/bit, dan $\epsilon_{amp} = 10$ pJ/bit/m². Total *lifetime* baterai node:

$$L_{node} = \frac{C_{bat}}{E_{node} \cdot f_{sample}}$$

dengan $C_{bat}$ kapasitas baterai (Joule) dan $f_{sample}$ frekuensi sampling (Hz).

### 2.5 Estimasi State dengan Kalman Filter untuk State Estimation Vial

Untuk mengestimasi $T_b(t)$ dari pengukuran permukaan vial $T_v$ yang noisy, *Extended Kalman Filter* (EKF) digunakan:

$$\hat{x}_{k|k} = \hat{x}_{k|k-1} + K_k (z_k - H \hat{x}_{k|k-1})$$

$$K_k = P_{k|k-1} H^T (H P_{k|k-1} H^T + R_k)^{-1}$$

dengan state vector $\hat{x} = [T_b, dq/dt]^T$, observasi $z_k = T_v$, dan kovariansi noise proses $Q_k$ serta observasi $R_k$. Akurasi estimasi ini krusial untuk *Model Predictive Control* (MPC) agar setpoint suhu sublimasi optimal tercapai (Artusio *et al.*, 2026).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur WSN Tiga Lapis (Tier Architecture)

Meza‐Galvan *et al.* (2026) mengusulkan arsitektur berlapis:

1. **Lapisan Sensor (Tier 1):** Node MEMS termo-kopel Tipe T (±0.1°C akurasi), *capacitive humidity sensor* untuk uap air, dan *PIR* pressure transducer nirkabel tertanam di dalam vial vial tray dummy. Setiap node dilengkapi MCU STM32L0 (ARM Cortex-M0+, 32 kB RAM), radio CC2538 (IEEE 802.15.4), dan baterai LiSOCl₂ 3.6 V / 2.4 Ah.
2. **Lapisan Gateway (Tier 2):** Coordinator node berbasis Raspberry Pi 4 dengan *edge computing* yang menjalankan EKF dan *anomaly detection* (Isolation Forest, threshold 3σ).
3. **Lapisan Cloud/SCADA (Tier 3):** Server historisasi (PI System atau Aveva) dan dashboard real-time via OPC UA.

### 3.2 Diagram Alir SOP Implementasi WSN

```
[1] Site Survey RF → Pemetaan RSSI, identifikasi multipath cleanroom
        ↓
[2] Risk Assessment ICH Q9 → FMEA node failure, battery depletion
        ↓
[3] IQ (Installation Qualification) → Kalibrasi sensor NIST-traceable
        ↓
[4] OQ (Operational Qualification) → Verifikasi latency < 2 s, packet loss < 0.1%
        ↓
[5] PQ (Performance Qualification) → 3 consecutive batches masuk spec
        ↓
[6] Routine Monitoring → Predictive maintenance sensor, battery replacement
```

### 3.3 Protokol Komunikasi dan Topologi

Menggunakan topologi **mesh** dengan protokol ZigBee PRO 2017 atau WirelessHART (Artusio *et al.*, 2026 merekomendasikan WirelessHART untuk lingkungan industri farmasi karena *time-slotted channel hopping* dan keamanan IEC 62443). TDMA scheduling menjamin deterministic latency dengan *time synchronization* via IEEE 1588.

### 3.4 Kalibrasi dan Validasi

Sesuai USP <1116> dan FDA PAT Guidance, setiap node dikalibrasi terhadap *traceable reference* (Hart Scientific 5611 atau setara) dengan *uncertainty budget*:

$$u_c^2 = u_{cal}^2 + u_{drift}^2 + u_{env}^2 + u_{res}^2$$

Target combined uncertainty $u_c < 0.3°C$ untuk aplikasi kontrol kritis. Frekuensi rekalibrasi 6–12 bulan tergantung drift yang terpantau.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario Kasus

Sebuah *contract development and manufacturing organization* (CDMO) menjalankan liofilisasi batch 5.000 vial protein monoklonal (konsentrasi 25 mg/mL, fill volume 5 mL) dalam *lyophilizer* skala pilot dengan kapasitas 6 m² luas rak total. Tujuan: memantau gradien suhu vial via 50 node WSN terdistribusi untuk mencegah *cake collapse* dan memvalidasi siklus primer 30 jam.

### 4.2 Parameter Input Industri

| Parameter | Nilai | Satuan |
|---|---|---|
| $T_{shelf}$ | 25 | °C |
| $P_c$ | 10 | Pa |
| $T_{target,b}$ | −28 | °C |
| $A_v$ (vial basis) | $5.73 \times 10^{-4}$ | m² |
| $k_{cake}$ | 0.18 | W/m·K |
| $E_a$ protein | 85 | kJ/mol |
| $A_d$ | $2.5 \times 10^{12}$ | s⁻¹ |
| $f_{sample}$ | 0.1 | Hz |
| $E_{elec}$ | 50 | nJ/bit |
| $\epsilon_{amp}$ | 10 | pJ/bit/m² |
| $C_{bat}$ | 8.640 | kJ (= 2.4 Ah × 3.6 V) |

### 4.3 Perhitungan Step-by-Step

**Langkah 1 — Hitung tekanan uap pada antarmuka sublimasi** ($T_i = -28°C = 245.15$ K):

$$P_i = \exp\left(-\frac{6140}{245.15} + 24.72\right) = \exp(-25.04 + 24.72) = \exp(-0.32) = 0.726 \text{ mmHg} \approx 96.8 \text{ Pa}$$

**Langkah 2 — Driving force sublimasi:**

$$\Delta P = P_i - P_c = 96.8 - 10 = 86.8 \text{ Pa}$$

**Langkah 3 — Resistansi produk tipikal** $R_p = 1.2 \times 10^{4}$ Pa·s·m²/kg:

$$\frac{dm}{dt} = \frac{86.8}{1.2 \times 10^{4}} = 7.