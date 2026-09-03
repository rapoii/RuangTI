# 1916 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Integrasi Process Analytical Technology (PAT) dalam Pemantauan & Pengendalian Proses Freeze-Drying

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza-Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze-Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze-Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (*freeze-drying*) merupakan unit operasi kritis pada industri biofarmasi yang digunakan untuk menstabilkan produk biologis termolabil seperti vaksin mRNA, antibodi monoklonal, dan protein terapeutik. Proses ini menghilangkan air melalui sublimasi pada kondisi vakum, mempertahankan integritas struktur molekuler produk sekaligus memperpanjang *shelf-life*. Namun, kompleksitas termodinamika proses—yang melibatkan tiga fase perubahan (beku, sublimasi, desorpsi)—menjadikan liofilisasi sebagai salah satu tahapan manufaktur dengan risiko kegagalan tertinggi dan *cost-of-goods* (COGS) terbesar, mencapai 30–50% dari total biaya produksi vial biologis (Meza-Galvan et al., 2026, DOI: [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)).

Urgensi penerapan Wireless Sensor Networks (WSN) dalam liofilisasi muncul dari keterbatasan arsitektur instrumentasi konvensional yang menggunakan *thermocouple* berkabel (*wired thermocouple*) T-type atau K-type. Sensor berkabel memiliki tiga kelemahan fundamental: (1) menambah *heat load* konduktif pada vial yang mengganggu keseimbangan panas sublimasi sehingga mengintroduksi bias pengukuran hingga 1,5–2,0 °C; (2) membatasi jumlah titik monitoring per *batch* (tipikal ≤ 16 vial dari total ratusan vial dalam *batch* komersial); dan (3) menghambat validasi *scale-up* dari *laboratory freeze-dryer* (1–2 m² luas rak) ke unit produksi (20–40 m²) karena densitas kabel yang tidak praktis. Meza-Galvan, Strongrich, dan Darwish (2026) dalam Chapter 4 buku *Process Analytical Technology for Pharmaceutical Freeze-Drying* mengusulkan arsitektur WSN berbasis node MEMS (*Micro-Electro-Mechanical Systems*) dengan protokol transmisi IEEE 802.15.4 untuk mengatasi ketiga limitasi tersebut secara simultan.

Dari perspektif ekonomi, investasi CAPEX untuk retrofit sistem WSN di *freeze-dryer* skala produksi berkisar USD 180.000–250.000 per unit, namun *payback period* terjadi dalam 14–22 bulan melalui peningkatan *batch success rate* dari 92% menjadi 98,5% dan pengurangan *cycle time* primer drying sebesar 8–12%. Kerangka teknologi ini selaras dengan inisiatif FDA PAT (2004) dan ICH Q8/Q9/Q10 yang mendorong *real-time release* (RTR) berbasis Quality-by-Design (QbD). Artikel pendukung karya Artusio, Barresi, dan Pisano (2026, DOI: [10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)) mengonfirmasi bahwa integrasi WSN merupakan salah satu dari empat pilar *emerging technologies* utama dalam liofilisasi farmasi modern, bersama *spectroscopic PAT* (NIR/Raman), *soft-sensor* berbasis *multivariate statistical process control* (MSPC), dan *digital twin* berbasis mechanistic modeling.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Perpindahan Panas dan Massa pada Sublimasi

Laju sublimasi es pada antarmuka produk dikendalikan oleh gradien tekanan uap air antara permukaan es ($P_{ice}$) dan ruang vakum ($P_c$), serta resistansi *dried product layer* ($R_p$). Persamaan dasar fluks sublimasi menurut Pikal (1985) yang diadopsi oleh Meza-Galvan et al. (2026):

$$J_q = \frac{P_{ice}(T_p) - P_c}{R_p}$$

dengan $J_q$ [kg·m⁻²·s⁻¹] adalah fluks sublimasi, $T_p$ [K] suhu antarmuka produk, dan $R_p$ [m²·Pa·s·kg⁻¹] resistansi lapisan kering. Fluks panas dari rak ke vial dimodelkan melalui:

$$q = K_v (T_s - T_b)$$

di mana $K_v$ [W·m⁻²·K⁻¹] adalah koefisien transfer panas vial total, $T_s$ [K] suhu rak, dan $T_b$ [K] suhu dasar vial. Untuk vial bundar standar, $K_v$ mengikuti korelasi nonlinier Pikal yang dikoreksi oleh tekanan:

$$K_v = \frac{K_v' + \alpha P_c}{1 + \alpha P_c}$$

dengan $K_v'$ [W·m⁻²·K⁻¹] komponen konduksi–radiasi pada tekanan nol dan $\alpha$ [Pa⁻¹] koefisien koreksi bergantung gas (tipikal $\alpha = 1{,}3 \times 10^{-3}$ Pa⁻¹ untuk N₂ pada 100 mTorr).

### 2.2 Arsitektur Jaringan Sensor Nirkabel

WSN dalam liofilisasi menggunakan topologi *star-mesh hybrid* dengan tiga lapisan: (i) *sensor node* (MEMS temperatur/kelembaban), (ii) *router/repeater* (gateway antar-rak), dan (iii) *base station* (akuisisi data SCADA). Konsumsi energi per transmisi paket data mengikuti model:

$$E_{tx}(k, d) = \begin{cases} k \cdot E_{elec} + k \cdot \varepsilon_{fs} \cdot d^2, & d < d_0 \\ k \cdot E_{elec} + k \cdot \varepsilon_{mp} \cdot d^4, & d \geq d_0 \end{cases}$$

dengan $k$ [bit] ukuran paket, $E_{elec}$ [J·bit⁻¹] energi sirkuit elektronik, $\varepsilon_{fs}$ dan $\varepsilon_{mp}$ konstanta amplifier untuk *free-space* dan *multipath fading*, dan $d_0 = \sqrt{\varepsilon_{fs}/\varepsilon_{mp}}$. Untuk protokol IEEE 802.15.4 pada frekuensi 2,4 GHz, threshold tipikal $d_0 = 87$ m (Meza-Galvan et al., 2026).

### 2.3 Model Signal-to-Noise Ratio (SNR) dan Akurasi Sensor MEMS

Akurasi sensor temperatur MEMS (mis. Texas Instruments TMP117 atau Sensirion STS35) pada lingkungan liofilisasi dikuantifikasi melalui:

$$\text{SNR}_{dB} = 10 \log_{10}\left(\frac{P_{signal}}{P_{noise}}\right) = 10 \log_{10}\left(\frac{\sigma_{signal}^2}{\sigma_{thermal}^2 + \sigma_{quant}^2 + \sigma_{RF}^2}\right)$$

di mana $\sigma_{thermal}^2 = 4 k_B T R$ (Johnson–Nyquist), $\sigma_{quant}^2 = \frac{\Delta^2}{12}$ (kuantisasi ADC 16-bit), dan $\sigma_{RF}^2$ berasal dari interferensi elektromagnetik kompresor vakum. Spesifikasi tipikal: akurasi $\pm 0{,}1$ °C pada rentang $-50$ °C sampai $+50$ °C dengan laju sampling 1 Hz.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Diagram Alir Implementasi WSN pada Siklus Liofilisasi

```
┌──────────────────────────────────────────────────────────────┐
│ FASE 1: PRE-CYCLE PREPARATION                                │
│  • Validasi kalibrasi sensor MEMS (NIST traceable)           │
│  • Pemetaan topologi WSN (RSSI survey, link budget)          │
│  • Pemuatan vial & placement node sensor (1 node/3 vial)     │
└──────────────────────────────────────────────────────────────┘
                          ↓
┌──────────────────────────────────────────────────────────────┐
│ FASE 2: FREEZING (–40°C sampai –50°C, ramp 1°C/min)         │
│  • Real-time monitoring nucleation via T-temp profile        │
│  • Datalog setiap 5 detik → edge computing (ARM Cortex-M4)   │
│  • Deteksi supercooling deviation > 2°C → alarm PAT          │
└──────────────────────────────────────────────────────────────┘
                          ↓
┌──────────────────────────────────────────────────────────────┐
│ FASE 3: PRIMARY DRYING (P=50–100 mTorr, T_shelf=–10 to +25°C)│
│  • Adaptive control via soft-sensor (MSPC) batch-wise        │
│  • Perhitungan T_p dari pressure rise test (PRT) periodik    │
│  • Endpoint detection via $\frac{dT_p}{dt} \approx 0$        │
└──────────────────────────────────────────────────────────────┘
                          ↓
┌──────────────────────────────────────────────────────────────┐
│ FASE 4: SECONDARY DRYING (P<30 mTorr, T_shelf=+30 to +40°C) │
│  • Monitoring desorption moisture via NIR wireless probe     │
│  • Endpoint via $a_w < 0{,}1$ Karl Fischer cross-check       │
└──────────────────────────────────────────────────────────────┘
```

### 3.2 SOP Pemasangan Sensor & Validasi

1. **Pra-pemasangan (Lead Time 48 jam):** Sensor MEMS dikalibrasi pada titik es triple ($0{,}01$ °C) dan titik beku etanol ($-114{,}1$ °C); sertifikat kalibrasi ISO/IEC 17025 disimpan dalam sistem LIMS.
2. **Pemasangan di Vial:** Sensor nirkabel seberat 0,8–1,2 g ditempatkan di *center-bottom* vial melalui holder polimer food-grade (USP Class VI); tidak ada kontak langsung dengan produk.
3. **Commissioning Test (24 jam):** Burn-in pada suhu ruang, vakum 1×10⁻³ mbar, dan *thermal shock* –40°C ↔ +40°C untuk validasi hermeticitas封装 (IP68 rating).
4. **In-process Validation:** Bandingkan pembacaan WSN vs. *wired thermocouple* pada 9 vial referensi dengan kriteria akurasi Bland-Altman: bias < 0,3 °C dan limit of agreement ±0,8 °C pada 95% confidence interval.
5. **Data Governance:** Semua data timestamp harus mengikuti protokol FDA 21 CFR Part 11 dengan tanda tangan elektronik dan *audit trail* immutable.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Optimasi Primary Drying Cycle pada Produksi Antibodi Monoklonal

**Parameter Input (Skala Pilot 2 m² rak, 200 vial @ 5 mL fill):**
- Formulasi: 50 mg/mL mAb dalam buffer histidin 10 mM pH 6,0 + sukrosa 8% (w/v)
- Suhu rak ($T_s$): $5$ °C $= 278{,}15$ K
- Suhu dasar vial ($T_b$): $-15$ °C $= 258{,}15$ K (diperoleh dari WSN)
- Tekanan ruang ($P_c$): $13$ Pa (100 mTorr)
- $K_v'$ = $3{,}6 \times 10^{-2}$ W·m⁻²·K⁻¹, $\alpha = 1{,}3 \times 10^{-3}$ Pa