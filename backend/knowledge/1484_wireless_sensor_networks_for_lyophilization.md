# 1484 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Integrasi Process Analytical Technology (PAT) dalam Rekayasa Sistem Pemantauan Proses

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization (Jaringan Sensor Nirkabel untuk Liofilisasi)
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Wireless Sensor Networks for Lyophilization*. In: *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. Wiley-VCH. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Emerging Technologies in Pharmaceutical Freeze‐Drying*. In: *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. Wiley-VCH. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (freeze-drying) merupakan salah satu unit operasi kritikal dalam manufaktur biofarmasi modern yang berfungsi menstabilkan produk biologis sensitif seperti vaksin mRNA, antibodi monoklonal, dan protein terapeutik dengan menghilangkan air melalui sublimasi di bawah kondisi vakum (Meza-Galvan et al., 2026). Proses ini melibatkan tiga tahapan utama—*freezing* (pembekuan), *primary drying* (sublimasi), dan *secondary drying* (desorpsi)—yang masing-masing memerlukan kontrol presisi terhadap suhu produk ($T_p$), tekanan ruang ($P_c$), dan laju sublimasi ($\dot{m}_s$). Menurut Meza-Galvan, Strongrich, dan Darwish (2026), kerugian ekonomi akibat *batch failure* pada proses liofilisasi di industri farmasi dapat mencapai USD 500.000–2.000.000 per vial untuk produk biologi high-value, sehingga kebutuhan akan sistem pemantauan *real-time* menjadi imperatif strategis, bukan sekadar opsi teknis.

Dalam kerangka *Process Analytical Technology* (PAT) yang diinisiasi FDA melalui Guidance for Industry (2004) dan diperkuat oleh ICH Q8/Q9/Q10, jaringan sensor nirkabel (*Wireless Sensor Networks*/WSN) muncul sebagai tulang punggung transformasi digital lini liofilisasi. Artusio, Barresi, dan Pisano (2026) menekankan bahwa WSN menggantikan arsitektur kabel tradisional yang memiliki kelemahan fatal: kompleksitas instalasi, biaya *retrofitting* tinggi, keterbatasan titik pengukuran, dan kerentanan terhadap sterilisasi berulang (*SIP/CIP*). Pasar global WSN untuk aplikasi farmasi diproyeksikan tumbuh pada CAGR 18,7% (2024–2030), didorong oleh adopsi *Industry 4.0* dan mandat regulatory untuk *continuous verification*.

Urgensi operasional WSN dalam konteks teknik industri berpijak pada tiga pilar: pertama, optimalisasi *cycle time*—dengan pengukuran sublimasi *real-time* berbasis *mass flow* atau *manometric temperature measurement* (MTM), waktu *primary drying* dapat dikurangi 20–40%; kedua, jaminan kualitas (*quality assurance*)—distribusi suhu heterogen dalam rak (*shelf*) menjadi penyebab utama *heterogeneous ice nucleation* yang menurunkan *batch consistency*; ketiga, kepatuhan regulasi—arsitektur WSN dengan protokol *AES-256 encryption* dan *audit trail* GMP-compliant memenuhi 21 CFR Part 11. Meza-Galvan et al. (2026) mendemonstrasikan bahwa部署 WSN dengan topologi mesh mampu meningkatkan *spatial resolution* pengukuran dari 1 sensor/50 vial (konvensional thermocouple) menjadi 1 sensor/2–5 vial, sehingga menghasilkan profil suhu 3D yang sebelumnya tidak dapat diamati.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Neraca Energi dan Massa pada Sublimasi

Mekanisme sublimasi selama *primary drying* mengikuti model transfer panas dan massa simultan yang diformulasikan Pikal et al. (1983) dan dirujuk oleh Meza-Galvan et al. (2026). Laju sublimasi per satuan luas vial diberikan oleh:

$$\dot{m}_s = \frac{P_{ice}(T_p) - P_c}{R_p}$$

di mana $P_{ice}(T_p)$ adalah tekanan uap jenuh es pada suhu produk $T_p$ (Pa), $P_c$ tekanan ruang (Pa), dan $R_p$ resistansi produk terhadap aliran uap air ($\text{Pa·m}^2\text{·s/kg}$). Persamaan Antoine untuk $P_{ice}$ dalam rentang $-40°C \leq T_p \leq 0°C$:

$$\log_{10} P_{ice}(T_p) = A - \frac{B}{T_p + C}$$

dengan parameter $A = 9.5503$, $B = 2735.32$, $C = 3.5673$ untuk $T_p$ dalam °C dan $P$ dalam Torr.

Fluks panas dari *shelf* ke vial mengikuti persamaan konduksi-resistansi:

$$Q = \frac{T_{shelf} - T_p}{R_{tot}} = UA_s(T_{shelf} - T_p)$$

dengan $R_{tot} = R_{gas} + R_{cake}$ (resistansi total), $U$ koefisien transfer panas keseluruhan ($\text{W/m}^2\text{·K}$), dan $A_s$ luas penampang vial.

### 2.2 Model Sensor Nirkabel dan Akuisisi Data

Sensor suhu *Resistance Temperature Detector* (RTD) Pt100 yang digunakan mengikuti karakteristik Callendar-Van Dusen:

$$R(T) = R_0 \left[1 + At + Bt^2 + Ct^3 (t < 0)\right]$$

dengan $t$ dalam °C, $A = 3.9083 \times 10^{-3}$, $B = -5.775 \times 10^{-7}$, $C = -4.183 \times 10^{-12}$. Akurasi kelas A IEC 60751 menghasilkan $\pm(0.15 + 0.002|t|)$ °C.

Sensor tekanan kapasitif untuk pengukuran $P_c$ mengikuti:

$$P_c = \frac{C - C_0}{k \cdot d/\varepsilon_0 A}$$

dengan sensitivitas tipikal $k = 0.1$ pF/mbar dan ketidaklinearan <0,05% FS.

### 2.3 Topologi Jaringan dan Model Konsumsi Daya

WSN beroperasi pada protokol IEEE 802.15.4 (Zigbee) atau WirelessHART dengan karakteristik model energi First-Order Radio:

$$E_{Tx}(k,d) = E_{elec} \cdot k + \epsilon_{amp} \cdot k \cdot d^2$$
$$E_{Rx}(k) = E_{elec} \cdot k$$

dengan $k$ jumlah bit, $d$ jarak transmisi (m), $E_{elec} = 50$ nJ/bit, dan $\epsilon_{amp} = 100$ pJ/bit/m². Umur baterai node sensor:

$$T_{life} = \frac{E_0}{P_{active} \cdot \tau_{active} + P_{sleep} \cdot (1-\tau_{active})}$$

di mana $\tau_{active}$ adalah *duty cycle* transmisi. Untuk *sampling rate* 1 Hz dengan $\tau_{active} = 0.1\%$, baterai lithium 3.6V/2400 mAh menghasilkan operasi $> 5$ tahun.

### 2.4 Model Arrhenius untuk Degradasi Produk

Kinetika degradasi protein selama proses mengikuti:

$$k_{deg} = A \exp\left(-\frac{E_a}{RT}\right)$$

dengan $A$ faktor pre-eksponensial, $E_a$ energi aktivasi (kJ/mol), $R$ konstanta gas universal. Parameter tipikal untuk antibodi monoklonal: $E_a = 80$–$120$ kJ/mol.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem WSN untuk Liofilisasi

Meza-Galvan et al. (2026) mengusulkan arsitektur berlapis (*layered architecture*):

**Lapisan 1 — Sensor Node:** RTD Pt100, capacitive pressure sensor, dan (opsional) *near-infrared* (NIR) probe untuk monitoring moisture *real-time*. Node dikemas dalam *stainless steel 316L housing* IP68/IP69K untuk kompatibilitas *cleanroom* ISO 5/ISO 7 dan resistansi terhadap H₂O₂ vapor (VHP sterilization).

**Lapisan 2 — Gateway & Edge Computing:** Koordinator jaringan (*coordinator node*) mengumpulkan data via *mesh topology* dengan *self-healing routing* (RPL protocol). Edge controller menjalankan *Model Predictive Control* (MPC) dengan horizon prediksi 30 menit untuk menyesuaikan $T_{shelf}$ dan $P_c$.

**Lapisan 3 — Cloud & Historian:** Data ditransmisikan via MQTT/OPC UA ke *process historian* (PI System atau Aveva) untuk kepatuhan 21 CFR Part 11, dengan *AES-256 encryption* dan *role-based access control*.

### 3.2 SOP Deploymen WSN

```
┌─────────────────────────────────────────────────────────┐
│ FASE 1: SITE ASSESSMENT & VALIDATION (IQ/OQ)            │
│   • Wireless site survey (RSSI mapping, ≥-75 dBm)       │
│   • Electromagnetic compatibility test (EN 60601-1-2)   │
│   • Risk assessment (FMEA, ISO 14971)                   │
├─────────────────────────────────────────────────────────┤
│ FASE 2: INSTALASI SENSOR                                │
│   • Kalibrasi 3-titik RTD (0°C, 25°C, 50°C)            │
│   • Pressure sensor zero-cal pada 10⁻⁴ mbar             │
│   • Pairing node dengan coordinator (AES-128 link key)  │
├─────────────────────────────────────────────────────────┤
│ FASE 3: PERFORMANCE QUALIFICATION (PQ)                  │
│   • Thermal mapping 24-jam (empty chamber + loaded)     │
│   • Latency test <500 ms; packet loss <0.1%             │
│   • Battery endurance test (accelerated, 60°C)          │
├─────────────────────────────────────────────────────────┤
│ FASE 4: OPERASI & CONTINUOUS VERIFICATION               │
│   • Real-time PAT dashboard (Cp/Cpk monitoring)         │
│   • Alarm tree (L1-L4 dengan SMS/email escalation)      │
│   • Periodic recalibration (quarterly)                  │
└─────────────────────────────────────────────────────────┘
```

### 3.3 Strategi Placement Sensor

Berdasarkan rekomendasi Meza-Galvan et al. (2026), untuk *batch* 1000 vial pada *shelf* 1 m², dipasang 32 node sensor dengan distribusi mengikuti *Latin Hypercube Sampling* (LHS) untuk menangkap gradien radial dan edge effect:

$$n_{sensor} = \lceil 0.032 \cdot N_{vial} \rceil$$

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Studi Kasus: Optimalisasi Primary Drying untuk Antibodi Monoklonal (mAb) pada Lyo 200 L

**Parameter Proses Awal (Baseline Konvensional):**
- $T_{shelf} = -25°C$ (konstan)
- $P_c = 100$ mTorr (13,3 Pa)
- $N_{vial} = 2000$ vial (10 mL fill volume)
- Vial: Schott 10R (luas sublimasi $A_s = 4.91 \times 10^{-3}$ m²)
- Resistansi produk $R_p = 8.5 \times 10^5$ Pa·m²·s/kg
- Produk: mAb konsentrasi 50 mg/mL dalam formulasi trehalosa/sucrose

**Step 1: Perhitungan Laju Sublimasi pada $T_p = -30°C$**

Tekanan uap jenuh es pada $-30°C$ menggunakan persamaan Antoine:

$$\log_{10} P_{ice} = 9.5503 - \frac{2735.32}{-30 + 3.5673} = 9.5503 - \frac{2735.32}{-26.433}$$
$$= 9.5503 - (-103.49) = 113.04 \Rightarrow P_{ice} \approx 1.10 \text{ Torr} = 146.7 \text{ Pa}$$

Laju sublimasi:

$$\dot{m}_s = \frac{146.7 - 13.3}{8.5 \times 10^5} = \frac{133.4}{8.5 \times 10^5} = 1.569 \times 10^{-4} \text{ kg/s·m}^2$$

Total sublimasi rate untuk 2000 vial:

$$\dot{M}_{total} = 1.569 \times 10^{-4} \times 4.91 \times 10^{-3} \times 2000 = 1.541 \times 10^{-3} \text{ kg/s}$$

**Step 2: Perhitungan Total Energi dan Durasi Primary Drying