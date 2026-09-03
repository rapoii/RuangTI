# 1516 — Jaringan Sensor Nirkabel (Wireless Sensor Networks) untuk Liofilisasi Farmasi: Rekayasa Proses, Instrumentasi PAT, dan Pengendalian Kualitas Cerdas

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization  
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze-Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)  
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze-Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (*freeze-drying*) merupakan salah satu operasi unit paling kritis dalam manufaktur farmasi modern, khususnya untuk produk biologi, vaksin mRNA, antibodi monoklonal, dan sediaan steril yang sensitif terhadap termal. Proses ini menghilangkan air dari produk beku melalui sublimasi (pengeringan primer) dan desorpsi (pengeringan sekunder), sehingga mempertahankan integritas molekuler dan stabilitas jangka panjang sediaan. Menurut Meza‐Galvan, Strongrich, dan Darwish (2026), siklus liofilisasi pada industri farmasi memerlukan pengendalian parameter proses yang sangat presisi, termasuk suhu rak (*shelf temperature*), tekanan ruang (*chamber pressure*), dan laju sublimasi, karena deviasi kecil dapat menyebabkan degradasi produk, *collapse* struktur kue, atau kadar air residual yang melebihi spesifikasi (DOI: 10.1002/9783527850303.ch4).

Urgensi ekonomi dan teknis dari implementasi Wireless Sensor Networks (WSN) dalam liofilisasi muncul dari keterbatasan instrumentasi kabel konvensional. Termokopel kawat tradisional (TCT — *thermocouple technology*) memiliki kelemahan fundamental: konduksi panas melalui kabel itu sendiri menginduksi *thermal shadow* yang mengganggu profil suhu vial, serta memerlukan ratusan kabel yang menembus dinding ruang vakum, meningkatkan risiko kebocoran dan kompleksitas instalasi. Pada lini produksi komersial yang memuat 10.000–100.000 vial per batch, ketiadaan pengukuran *in-situ* real-time menyebabkan ketidakpastian yang besar dalam validasi proses dan peluncuran produk (*scale-up*).

Artusio, Barresi, dan Pisano (2026) menekankan bahwa paradigma Process Analytical Technology (PAT) yang digariskan FDA pada pedoman 2004 telah mendorong adopsi sensor canggih untuk pemantauan *batch* secara real-time. Dalam konteks ini, WSN muncul sebagai teknologi disruptif karena memungkinkan penempatan sensor nirkabel miniatur di dalam vial tanpa menembus integritas ruang vakum, sehingga menyajikan data suhu produk yang representatif dan throughput tinggi (DOI: 10.1002/9783527850303.ch11). Investasi industri farmasi global dalam teknologi PAT diproyeksikan mencapai USD 4,2 miliar pada 2028, dengan WSN sebagai salah satu pilar utama transformasi digital liofilisasi.

Konteks industri farmasi Indonesia — yang memproduksi lebih dari 1.500 item obat dengan nilai produksi Rp 51,3 triliun (2023) — juga menuntut standarisasi teknologi ini. BPOM melalui regulasi Cara Pembuatan Obat yang Baik (CPOB) telah mendorong integrasi PAT dan sistem kualitas farmasi (PQS) berbasis data, menjadikan WSN sebagai elemen strategis untuk mencapai *continuous manufacturing* dan *real-time release* (RTR).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Mekanisme Perpindahan Panas dan Massa pada Vial Liofilisasi

Model matematis fundamental untuk liofilisasi mengikuti formulasi Pikal yang telah dimodifikasi oleh berbagai peneliti. Laju sublimasi $\dot{m}$ pada tiap vial diberikan oleh persamaan:

$$\dot{m} = \frac{A_p \cdot (P_w^{ice} - P_c)}{R_p + R_s}$$

di mana:
- $A_p$ = luas penampang internal vial (m²)
- $P_w^{ice}$ = tekanan uap jenuh es pada suhu antarmuka sublimasi (Pa)
- $P_c$ = tekanan ruang (Pa)
- $R_p$ = tahanan pindah massa lapisan produk kering (Pa·m²·s/kg)
- $R_s$ = tahanan pindah massa *stopper* vial (Pa·m²·s/kg)

Tekanan uap jenuh es mengikuti persamaan Clausius–Clapeyron yang sering dihampiri dengan bentuk Murphy–Koop:

$$\ln(P_w^{ice}) = 9.550426 - \frac{5723.265}{T} + 3.53068 \ln(T) - 0.00728332 T$$

dengan $T$ dalam Kelvin dan $P_w^{ice}$ dalam Pa.

### 2.2. Tahanan Pindah Massa Produk Kering

Tahanan $R_p$ menggambarkan difusi uap air melalui kue kering dan bergantung pada suhu antarmuka sublimasi $T_i$:

$$R_p(T_i) = R_{p,0} + \frac{a \cdot (T_i - T_0)}{1 + b \cdot (T_i - T_0)}$$

di mana $R_{p,0}$ adalah tahanan awal pada suhu referensi $T_0$, sedangkan $a$ dan $b$ adalah parameter empiris yang dikarakterisasi untuk tiap formulasi.

### 2.3. Perpindahan Panas dari Rak ke Vial

Aliran panas dari rak (*shelf*) ke vial dimodelkan dengan koefisien pindah panas total $K_v$ yang menggabungkan tiga mekanisme:

$$\frac{1}{K_v} = \frac{1}{K_{c,gas}} + \frac{1}{K_{c,sol}} + \frac{1}{K_{rad}}$$

dengan:
- $K_{c,gas}$ = konduksi melalui gas (tergantung tekanan ruang)
- $K_{c,sol}$ = konduksi melalui kontak padat vial–rak
- $K_{rad}$ = radiasi antara dinding vial dan rak

Kontribusi gas mengikuti model Pikal untuk gas pada tekanan rendah (rezim Knudsen):

$$K_{c,gas} = \alpha \cdot \frac{\kappa_{gas}}{d_{gap}} \cdot \frac{1}{1 + \frac{\lambda_{gas}}{p_c \cdot d_{gap}} \cdot \sqrt{\frac{2\pi M_{gas} R_u T}{N_A}}}$$

di mana $\lambda_{gas}$ adalah *mean free path* molekul gas, $M_{gas}$ massa molar, $R_u$ konstanta gas universal, dan $N_A$ bilangan Avogadro.

### 2.4. Teori Jaringan Sensor Nirkabel (WSN)

Arsitektur WSN untuk liofilisasi dimodelkan sebagai graf $G(V,E)$ di mana $V$ adalah himpunan node sensor dan $E$ adalah himpunan sambungan komunikasi. Kualitas jaringan dievaluasi melalui:

- **Konsumsi energi per transmisi** ($E_{tx}$):
$$E_{tx}(k,d) = E_{elec} \cdot k + \epsilon_{amp} \cdot k \cdot d^n$$

- **Lifetime jaringan** ($L_{net}$):
$$L_{net} = \frac{E_{initial}}{\sum_{i=1}^{N} (E_{tx,i} + E_{rx,i} + E_{sense,i})}$$

di mana $n$ adalah eksponen path-loss (umumnya 2–4 untuk lingkungan ruang vakum logam), $k$ ukuran paket data, dan $d$ jarak transmisi.

### 2.5. Model Keandalan Pengukuran

Karena sensor nirkabel ditempatkan dalam lingkungan vakum dan suhu ekstrem (-40°C hingga +60°C), model *drift* kalibrasi mengikuti:

$$\Delta T_{drift}(t) = \beta_0 + \beta_1 \cdot \exp\left(-\frac{t}{\tau_{thermal}}\right) + \beta_2 \cdot N_{cycle}$$

dengan $\tau_{thermal}$ sebagai konstanta waktu termal, dan $N_{cycle}$ jumlah siklus termal yang dialami sensor.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Arsitektur Sistem WSN untuk Liofilisasi

Sistem WSN farmasi terdiri atas empat lapisan utama (Meza‐Galvan et al., 2026):

1. **Lapisan Sensor (Perception Layer):** Termokopel atau RTD miniatur berbasis teknologi *semiconductor* atau *thin-film* dengan dimensi ≤ 2 mm, terlapis biocompatible parylene-C atau alumina untuk mencegah kontaminasi.
2. **Lapisan Komunikasi:** Protokol IEEE 802.15.4 (ZigBee/Thread) atau Bluetooth Low Energy (BLE) 5.x dengan topologi *mesh* untuk redundansi; frekuensi 2,4 GHz atau sub-GHz (433/868 MHz) untuk penetrasi logam.
3. **Lapisan Edge Gateway:** Mikrokontroler ARM Cortex-M4 dengan agregasi data dan *forwarding* ke *historians* (PI System, OSIsoft).
4. **Lapisan Analitik:** Platform PAT dengan algoritma *machine learning* untuk deteksi anomali dan prediksi *batch endpoint*.

### 3.2. SOP Implementasi WSN pada Lini Liofilisasi

**Fase 1 — Kualifikasi Desain (Design Qualification, DQ):**
- Validasi kompatibilitas material sensor dengan formulasi produk (uji leachables/extractables sesuai USP <1664>).
- Penentuan *critical process parameters* (CPP) dan *critical quality attributes* (CQA) yang akan dipantau.

**Fase 2 — Kualifikasi Instalasi (IQ):**
- Penempatan sensor pada posisi *edge* dan *center* vial di tiap rak (minimal n=3 vial per rak per Artusio et al., 2026).
- Kalibrasi sensor terhadap standar referensi NIST dengan ketidakpastian ≤ ±0,3°C.
- Pemetaan jangkauan RF di dalam ruang liofilisasi logam (pengukuran RSSI di 9 titik grid).

**Fase 3 — Kualifikasi Operasional (OQ):**
- Uji transmisi data pada tekanan 0,1–1000 mbar dan suhu -50°C hingga +50°C.
- Validasi *packet loss* ≤ 0,1% dan latensi ≤ 2 detik.
- Uji siklus termal minimal 20 siklus untuk verifikasi *drift*.

**Fase 4 — Kualifikasi Kinerja (PQ):**
- *Three-batch validation* sesuai protokol FDA PAT.
- Perbandingan data WSN dengan TCT konvensional untuk verifikasi akurasi (bias ≤ 0,5°C).

### 3.3. Diagram Alir Logika Pengendalian

```
[Inisialisasi Sensor Node] → [Pairing dengan Gateway]
        ↓
[Akuisisi Data T_i (suhu produk) tiap Δt = 5 s]
        ↓
[Filtering (Moving Average, window = 12)]
        ↓
[Estimasi Sublimation Rate: dm/dt = f(T_i, P_c)]
        ↓
[Prediksi End Point via PvK-Spectro Model]
        ↓
├── Jika T_i > T_collapse → ALARM + turunkan T_shelf
├── Jika dm/dt < threshold → SECONDARY DRYING
└── Normal → LOG + CONTINUE
```

### 3.4. Integrasi dengan QbD dan RTR

WSN harus terintegrasi dengan *Design Space* yang didefinisikan dalam Quality by Design (QbD). Pendekatan *Real-Time Release Testing* (RTRT) menggunakan data WSN sebagai bukti kontrol proses, menggantikan uji *off-line* akhir proses sesuai kerangka ICH Q8(R2) dan Q13.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Deskripsi Skenario

Sebuah industri farmasi di Indonesia akan melakukan validasi proses liofilisasi untuk sediaan vankomisin HCl 500 mg dalam vial 10 mL. Parameter operasi:

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Jumlah vial per batch | 20.000 | vial |
| Volume isi per vial ($V_f$) | 5,0 | mL |
| Konsentrasi solids | 50 | mg/mL |
| Diameter internal vial ($d_v$) | 18 | mm |
| Tekanan ruang ($P_c$) | 10 | Pa |
| Suhu rak ($T_{shelf}$) | -5 | °C |
| Suhu antarmuka sublimasi awal ($T_i$) | -25 | °C |

### 4.2. Langkah 1 — Tekanan Uap Jenuh Es pada $T_i = -25