# 2636 — Jaringan Sensor Nirkabel untuk Liofilisasi dan Teknologi Analitik Proses (PAT) dalam Manufaktur Farmasi Modern

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Wireless Sensor Networks for Lyophilization — Integrasi PAT dan Emerging Technologies untuk Pengendalian Proses Freeze-Drying
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*, Chapter 4. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*, Chapter 11. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (*freeze-drying*) merupakan salah satu proses kritis dalam industri biofarmasi, khususnya untuk formulasi protein, antibodi monoklonal, vaksin mRNA, dan API (Active Pharmaceutical Ingredients) yang bersifat termolabil. Proses ini melibatkan tiga tahap berurutan — *freezing*, *primary drying* (sublimasi), dan *secondary drying* (desorpsi) — yang berlangsung pada tekanan vakum rendah (umumnya 10–100 Pa) dan suhu rak terkontrol. Tingginya biaya satu *batch* yang dapat mencapai USD 250.000–USD 500.000 untuk *vial* biologis bernilai tinggi menjadikan proses ini sangat rentan terhadap *deviasi* yang berdampak langsung pada *yield*, *critical quality attributes* (CQA), dan *time-to-market* (Meza‐Galvan, Strongrich & Darwish, 2026).

Dalam kerangka **Process Analytical Technology (PAT)** yang diprakarsai oleh FDA sejak 2004 (*Guidance for Industry, PAT — A Framework for Innovative Pharmaceutical Development, Manufacturing, and Quality Assurance*), diperlukan *real-time monitoring* terhadap parameter proses untuk menjamin kualitas *by design* (QbD). Namun, instrumentasi konvensional seperti *thermocouples* berkabel (*wire thermocouples*) memiliki keterbatasan signifikan: (1) invasif secara termal karena konduktor logam mengganggu profil suhu produk, (2) keterbatasan jumlah *probe* per *batch* (umumnya ≤ 10 *probe*) karena biaya dan komplikasi *feed-through* pada ruang vakum, (3) tidak mampu menangkap *spatial heterogeneity* yang sering kali menjadi sumber *batch failure* (Meza‐Galvan et al., 2026).

**Jaringan Sensor Nirkabel (Wireless Sensor Networks — WSN)** muncul sebagai paradigma disruptif yang memungkinkan instrumentasi *non-invasive* secara termal dengan densitas *node* hingga 50–100 sensor per *batch*, memberikan visibilitas spasial yang sebelumnya tidak mungkin. Bab 4 dari volume *Process Analytical Technology for Pharmaceutical Freeze‐Drying* (Wiley-VCH, ISBN 9783527850303) menguraikan arsitektur, tantangan RF (*radio frequency*) di lingkungan vakum dan kriogenik, serta integrasi WSN dengan sistem kontrol *Supervisory Control and Data Acquisition* (SCADA). Secara komplementer, Bab 11 oleh Artusio, Barresi & Pisano (2026) membahas *emerging technologies* seperti *controlled ice nucleation*, *spray freeze-drying*, dan *microfluidic formulation* yang semakin memerlukan infrastruktur sensorik nirkabel sebagai enabler teknologi.

Urgensi ekonominya substansial: menurut estimasi internal yang dikutip dalam buku tersebut, reduksi 5% pada *primary drying time* melalui optimasi berbasis sensor WSN dapat menghasilkan penghematan USD 1–3 juta per tahun untuk fasilitas komersial berskala menengah. Lebih jauh, kemampuan mendeteksi *melt-back* atau *collapse* secara *real-time* mampu menyelamatkan produk bernilai jutaan dolar dari potensi *batch rejection*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Perpindahan Panas dan Massa pada Liofilisasi

Persamaan fundamental yang mengatur proses sublimasi pada *primary drying* adalah **Persamaan Planck-van't Hoff-Steele**, yang menyatakan fluks sublimasi $J_q$ sebagai fungsi gradien suhu dan tekanan parsial uap air:

$$J_q = \frac{T_p - T_s}{R_p + R_s} = \alpha \left( P_{w,s}(T_s) - P_{w,c} \right)$$

di mana:
- $T_p$ = suhu produk (K)
- $T_s$ = suhu permukaan sublimasi (K)
- $R_p$ = resistansi termal produk beku (m²·K·W⁻¹)
- $R_s$ = resistansi termal ruang sublimasi ke *condenser* (m²·K·W⁻¹)
- $P_{w,s}(T_s)$ = tekanan uap air jenuh pada suhu sublimasi (Pa)
- $P_{w,c}$ = tekanan uap air di kondensor (Pa)
- $\alpha$ = koefisien perpindahan massa (kg·m⁻²·s⁻¹·Pa⁻¹)

Resistansi produk beku diberikan oleh:

$$R_p = \frac{L}{k_e} + R_{si}$$

dengan $L$ = ketebalan lapisan kering (*dried layer*), $k_e$ = konduktivitas termal efektif, dan $R_{si}$ = resistansi permukaan sublimasi.

### 2.2 Karakteristik Saluran RF dalam WSN Liofilisasi

Untuk komunikasi nirkabel pada lingkungan vakum dan kriogenik, digunakan protokol **IEEE 802.15.4 / ZigBee** pada pita 2.4 GHz. Persamaan **Friis transmission** untuk *link budget*:

$$P_r = P_t + G_t + G_r + 20\log_{10}\left(\frac{\lambda}{4\pi d}\right) - L_{vac} - L_{cryo}$$

di mana $P_r$ = daya terima (dBm), $P_t$ = daya pancar, $G_t, G_r$ = gain antena, $\lambda$ = panjang gelombang, $d$ = jarak, $L_{vac}$ = redaman vakum (kebanyakan konduktor pada 2.4 GHz menunjukkan perilaku *waveguide below cutoff*), dan $L_{cryo}$ = redaman kriogenik pada media nitrogen.

Untuk *vial* kaca berdiameter 14–22 mm dan jarak node 30–80 mm, atenuasi tambahan karena **coupling ke konduktor** menjadi variabel kritis yang harus dikalibrasi secara empiris per desain rak (*shelf*) (Meza‐Galvan et al., 2026).

### 2.3 Pemrosesan Sinyal dan Penentuan *Batch Endpoint*

Estimasi resistansi produk $R_p$ dari data WSN memungkinkan deteksi *endpoint* dengan algoritma **Kalman Filter adaptif**:

$$\hat{x}_{k|k} = \hat{x}_{k|k-1} + K_k (z_k - H \hat{x}_{k|k-1})$$

$$K_k = P_{k|k-1} H^T (H P_{k|k-1} H^T + R)^{-1}$$

dengan state vector $\hat{x} = [T_p, R_p, \dot{m}_{sub}]^T$ mencakup suhu produk, resistansi produk, dan laju sublimasi yang diturunkan dari *pressure rise test* (PRT) miniatur.

### 2.4 Formulasi *Design Space* PAT

Kerangka **Design Space** dalam ICH Q8(R2) direpresentasikan sebagai:

$$\mathcal{D} = \{ \mathbf{u} \in \mathbb{R}^n : g(\mathbf{u}, \theta) \leq 0, \forall \theta \in \Theta \}$$

di mana $\mathbf{u}$ = variabel input proses (suhu rak, tekanan ruang, laju nukleasi), $\theta$ = parameter material (misalnya $T_g'$, $T_{eu}$), dan $g$ = batasan CQA (misalnya kelembapan residu < 1.0%).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem WSN untuk Lyophilizer

Arsitektur tipikal yang diusulkan Meza‐Galvan et al. (2026) terdiri atas empat lapisan:

1. **Sensor Layer**: Node MEMS dengan termistor film-tipis akurasi ±0.1°C, daya tahan cryogenic (−80°C), dan kemasan biokompatibel (USP Class VI).
2. **Communication Layer**: Topologi *star-of-mesh* dengan *gateway* aktif pada dinding ruang vakum yang mem-*bridge* sinyal RF ke lingkungan steril.
4. **Edge Computing Layer**: Mikrokontroler ARM Cortex-M4 dengan *machine learning inference* untuk deteksi anomali (*melt-back*, *collapse*, *choking*).
5. **Integration Layer**: Koneksi OPC-UA ke sistem SCADA/DCS untuk *closed-loop control*.

### 3.2 SOP Implementasi (10 Langkah Kritis)

```
┌─────────────────────────────────────────────────────────┐
│  START                                                   │
│    │                                                     │
│    ▼                                                     │
│  1. Risk Assessment (FMEA, severity × occurrence)        │
│    ▼                                                     │
│  2. Validasi Gateway RF (VSWR, return loss < -15 dB)     │
│    ▼                                                     │
│  3. Kalibrasi Sensor dalam vial referensi (T_ref)        │
│    ▼                                                     │
│  4. Mapping Posisi Node (3D rack coordinates)            │
│    ▼                                                     │
│  5. Pre-conditioning (bake-out chamber < 1 mTorr)        │
│    ▼                                                     │
│  6. Baseline Test (24 jam tanpa produk)                  │
│    ▼                                                     │
│  7. IQ/OQ/PQ sesuai GAMP 5 dan 21 CFR Part 11            │
│    ▼                                                     │
│  8. Trial Batch dengan placebo formulation               │
│    ▼                                                     │
│  9. Statistical Comparison vs wire thermocouples          │
│    ▼                                                     │
│ 10. Release for GMP Production                            │
│    ▼                                                     │
│  END                                                     │
└─────────────────────────────────────────────────────────┘
```

### 3.3 Integrasi dengan *Emerging Technologies*

Bab 11 (Artusio, Barresi & Pisano, 2026) menyoroti bahwa WSN menjadi prasyarat untuk:

- **Controlled Ice Nucleation**: memicu nukleasi pada $T_n \approx -5°C$ menggunakan *ice fog* atau *mechanical shock*, memerlukan sensor suhu *sub-second response* di setiap vial.
- **Spray Freeze-Drying**: nozzle atomisasi memerlukan umpan balik tekanan dan suhu *real-time* pada tingkat *kHz*.
- **Continuous Manufacturing**: modul WSN portabel pada lini *aseptic filling* dengan robot delta.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario

Sebuah fasilitas *contract manufacturing* (CMO) memproduksi 5% *sucrose* *formulation* dalam *vial* 10 mL, dengan target kelembapan residu ≤ 1.0%. *Lyophilizer* memiliki 7 rak, masing-masing mampu memuat 2.000 vial. Sistem WSN dipasang dengan 40 *node* per rak (densitas 2%).

### 4.2 Parameter Input

| Parameter | Nilai | Sumber |
|-----------|-------|--------|
| Luas sublimasi per vial, $A_v$ | 3.8 × 10⁻⁴ m² | geometri vial |
| Resistansi produk awal, $R_{p,0}$ | 0 m²·K·W⁻¹ | sublimasi awal |
| Konduktivitas efektif, $k_e$ | 0.022 W·m⁻¹·K⁻¹ | produk beku |
| Suhu sublimasi rata-rata, $T_s$ | −25°C = 248.15 K | desain |
| Tekanan ruang, $P_c$ | 10 Pa | desain |
| Suhu rak, $T_{shelf}$ | −10°C = 263.15 K | desain |

### 4.3 Perhitungan Langkah-demi-Langkah

**Langkah 1**: Tekanan uap jenuh $P_{w,s}(T_s)$ dihitung dengan persamaan Antoine untuk es:

$$\log_{10} P_{w,s} = A - \frac{B}{T_s + C}$$

dengan $A = 8.9475$, $B = 2453.0$, $C = 0.0$ (untuk es pada rentang −30°C hingga 0°C).

$$P_{w,s}(-25°C) = 10^{8.9475 - 2453.0/248.15} = 10^{8.9475 - 9.8862} = 10^{-0.9387} \approx 0.1154 \text{ Pa}$$

**Langkah 2**: Driving force sublimasi:

$$\Delta P_w = P_{w,s}(T_s) - P_{w,c} = 0.1154 - 10 \approx -9.88 \text{ Pa (termodinamika: sublimasi ke kondensor)}$$

Catatan: pada tekanan ruang rendah, $P_{w,c} \approx P_c$ karena uap air jenuh dominan di kondensor. *Driving force* efektif:

$$\Delta P_w^{eff} = P_{w,s}(T_s) - P_c \cdot \frac{P_{w,s}}{P_{w,s}+P_{inert}} \approx 0.1154 \text{ Pa}$$

**Langkah 3**: Resistansi termal ruang sublimasi ke kondensor (pipa lebar 0.5 m):

$$R_s = \frac{1}{\alpha_v} \approx \frac{d