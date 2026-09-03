# 2572 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Integrasi PAT, Pemodelan Transfer Panas–Massa, dan Optimasi Siklus Beku-Kering

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (freeze-drying) merupakan unit operasi kritis dalam manufaktur biofarmasi modern yang memungkinkan stabilisasi produk biologis sensitif seperti protein monoklonal, antibodi terapeutik, vaksin mRNA, dan formulasi parenteral steril. Proses ini menghilangkan air melalui sublimasi di bawah tekanan vakum, sehingga mempertahankan struktur molekuler aktif yang rentan terhadap degradasi termal. Menurut Meza‐Galvan, Strongrich, dan Darwish (2026) dalam Chapter 4 buku *Process Analytical Technology for Pharmaceutical Freeze‐Drying* (DOI: 10.1002/9783527850303.ch4), kebutuhan akan visibilitas *real-time* terhadap variabel proses di dalam ruang liofilizer telah menjadi pilar utama inisiatif Quality-by-Design (QbD) dan Process Analytical Technology (PAT) yang digagas FDA sejak panduan 2004. Tanpa instrumentasi yang andal, *batch failure rate* pada lini produksi fill-finish farmasi berkisar antara 5–15%, terutama disebabkan oleh *out-of-specification* (OOS) pada kadar air akhir, kerataan cake, atau vial breakage.

Dalam konteks rantai pasok farmasi global yang nilainya mencapai USD 1,6 triliun (2025), satu lot produksi liofilisasi yang gagal dapat menimbulkan kerugian ekonomis langsung USD 2–5 juta ditambah risiko *drug shortage* yang berdampak pada pasien. Liofilizer modern (freeze dryer) industri memiliki kapasitas 10.000–50.000 vial per batch dengan siklus primer drying yang berlangsung 24–72 jam. Setiap vial memiliki dinamika termal sendiri yang dipengaruhi oleh posisinya relatif terhadap dinding chamber, baffle, dan stoppering mechanism. Oleh karena itu, Meza‐Galvan *et al.* (2026) berargumen bahwa jaringan sensor nirkabel (Wireless Sensor Networks, WSN) bukan lagi pelengkap, melainkan kebutuhan operasional untuk mendukung release-by-parameter pada skala komersial.

Sementara itu, Artusio, Barresi, dan Pisano (2026) dalam Chapter 11 buku yang sama (DOI: 10.1002/9783527850303.ch11) menekankan bahwa teknologi baru seperti *soft sensor* berbasis model, *tunable diode laser absorption spectroscopy* (TDLAS), dan WSN generasi berikutnya berperan penting dalam menggeser paradigma dari *end-product testing* menuju *in-process control* adaptif. Integrasi WSN dengan Platform LIMS dan sistem SCADA memungkinkan implementasi continuous verification sesuai kerangka ICH Q8–Q14. Urgensi strategis modul ini di Teknik Industri adalah menjembatani kesenjangan antara instrumentasi lab (thermocouple wired) yang mengganggu sterilitas dan kebutuhan akan data spasial multi-titik yang tahan autoclave dan lingkungan vakum rendah. Operator lantai produksi memerlukan *decision support system* yang memprediksi *endpoint* sublimasi, memvalidasi homogenitas vial-to-vial, dan mengkuantifikasi *heat flux* aktual — semuanya memerlukan akuisisi data yang simultan, presisi, dan steril.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Kesetimbangan Panas pada Vial

Model vial liofilisasi mengikuti kesetimbangan panas satu-dimensi radial yang dirumuskan oleh Pikal (1985) dan disempurnakan oleh Pisano *et al.*:

$$q_{vial} = A_v K_v \left( T_s - T_b \right) \tag{1}$$

di mana $q_{vial}$ adalah laju panas (W) yang masuk ke vial, $A_v$ luas penampang vial (m²), $K_v$ koefisien transfer panas vial (W/m²·K), $T_s$ suhu shelves (K), dan $T_b$ suhu *bottom* vial (K). Untuk vial standar Schott 10 mL, $A_v \approx 5{,}31 \times 10^{-4}$ m². Nilai $K_v$ bergantung pada tekanan chamber $P_c$ mengikuti korelasi Arrhenius-like (Pikal, 1985; revisi Rambhatla & Pikal, 2006):

$$K_v = K_0 + \frac{A_K \cdot P_c}{1 + B_K \cdot P_c} \tag{2}$$

dengan parameter tipikal $K_0 \approx 5{,}6 \times 10^{-3}$ W/m²·K, $A_K \approx 7{,}93 \times 10^{-3}$, dan $B_K \approx 1{,}36 \times 10^{-1}$ Pa⁻¹ untuk vial tubung.

### 2.2 Kesetimbangan Massa dan Resistansi Produk

Laju sublimasi $\dot{m}$ (kg/s) di permukaan sublimasi front:

$$\dot{m} = \frac{A_p (p_{w,i} - p_{w,c})}{R_p + R_s} \tag{3}$$

dengan $A_p$ luas sublimasi internal (m²), $p_{w,i}$ tekanan uap air pada *interface* sublimasi (Pa), $p_{w,c}$ tekanan parsial uap air di chamber (Pa), $R_p$ resistansi produk kering (Pa·s/kg), dan $R_s$ resistansi stopper/chamber (Pa·s/kg). Tekanan $p_{w,i}$ dievaluasi dengan persamaan Clausius–Clapeyron atau korelasi Goff–Gratch:

$$p_{w,i} = \exp\!\left(-\frac{6134{,}3}{T_i} + 24{,}7219\right) \tag{4}$$

untuk $T_i$ dalam Kelvin (rentang 230–273 K). Resistansi produk kering biasanya mengikuti model Pikal:

$$R_p(T_b) = R_{p,0} + \frac{A_R}{1 + \exp\!\left[ B_R (T_b - T_R) \right]} \tag{5}$$

dengan parameter empiris $R_{p,0}$ (resistansi sisa), $A_R$, $B_R$, dan suhu referensi $T_R$. Untuk larutan sukrosa 5%, resistansi tipikal berkisar 50–250 Pa·s/kg dengan deviasi ±20% antar-vial.

### 2.3 Model Pseudo-Steady State untuk Primary Drying

Asumsi pseudo-steady state menghasilkan *moving boundary problem* dengan posisi front sublimasi $l(t)$:

$$\frac{dl}{dt} = \frac{\dot{m}}{\rho_f A_p} \tag{6}$$

di mana $\rho_f$ densitas lapisan beku (≈ 920 kg/m³ untuk ice). Coupling dengan heat balance memberikan:

$$A_v K_v (T_s - T_b) = \dot{m} \Delta H_s \tag{7}$$

dengan $\Delta H_s \approx 2{,}84 \times 10^6$ J/kg (entalpi sublimasi pada 273 K). Sistem persamaan (3)–(7) diselesaikan simultan dengan *system of ODEs* untuk mendapatkan $T_b(t)$, $T_i(t)$, $l(t)$, dan $\dot{m}(t)$.

### 2.4 Arsitektur WSN dan Akuisisi Data

WSN dalam konteks Meza‐Galvan *et al.* (2026) menggunakan topologi *mesh* dengan node sensor steril yang ditempatkan di dalam vial dummy (mock vial). Protokol komunikasi yang lazim adalah IEEE 802.15.4 (ZigBee) atau Bluetooth Low Energy 5.0 untuk aplikasi non-metallic chamber dengan **jitter < 50 ms**. Model konsumsi energi node mengikuti:

$$E_{node}(t) = P_{tx} \cdot \tau_{tx} + P_{rx} \cdot \tau_{rx} + P_{idle} \cdot \tau_{idle} + P_{sense} \cdot \tau_{sense} \tag{8}$$

Battery life $L$ (jam) untuk kapasitas baterai $C_{bat}$ (mAh):

$$L = \frac{C_{bat} \cdot V_{bat}}{1000 \cdot \overline{P}} \tag{9}$$

dengan $\overline{P}$ daya rata-rata (W). Untuk sensor thermocouple tipe T dengan akuisisi 1 Hz, $\overline{P} \approx 30$ mW, menghasilkan $L \approx 110$ jam dengan baterai lithium 1200 mAh @ 3,0 V — cukup untuk satu siklus primer drying standar 48 jam.

### 2.5 Noise dan Ketidakpastian Pengukuran

Ketidakpastian pengukuran suhu $u_{T_b}$ mengikuti pendekatan GUM (Guide to the Expression of Uncertainty in Measurement):

$$u_{T_b} = \sqrt{u_{cal}^2 + u_{drift}^2 + u_{noise}^2 + u_{self-heat}^2} \tag{10}$$

Untuk sensor WSN kelas PAT farmasi, target ketidakpastian total ≤ 0,3 K pada rentang 220–310 K.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem WSN-Freeze Dryer

```
┌─────────────────────────────────────────────────────────────┐
│  STAGE 1: Pre-Cycle Preparation                             │
│  • Sterilisasi wireless node (autoclave 121°C, 30 min)    │
│  • Kalibrasi sensor pada ice-bath 0°C & dry-block 25°C    │
│  • Validasi komunikasi RF di dalam chamber kosong          │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  STAGE 2: Loading & Network Synchronization                │
│  • Insertion mock vials berisi node pada posisi grid 6×4  │
│  • Pairing gateway via RSA-256 encrypted handshake         │
│  • Inisialisasi timestamp NTP untuk sinkronisasi < 10 ms  │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  STAGE 3: Real-Time Monitoring & PAT Loop                  │
│  • Akuisisi T_b, T_i, P_c @ 1 Hz                          │
│  • Edge computing: estimasi l(t), m_dot(t), R_p(t)         │
│  • Cloud telemetry → LIMS/SCADA via OPC-UA                 │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│  STAGE 4: Endpoint Detection & Adaptive Control            │
│  • Deteksi primary drying end via d²T/dt² inflection      │
│  • Switching otomatis ke secondary drying profile          │
│  • Audit trail otomatis sesuai 21 CFR Part 11               │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 SOP Kalibrasi dan Validasi (ISO 17025-aligned)

Sesuai standar USP <1118> dan PDA Technical Report No. 72, prosedur operasional mencakup: (i) verifikasi akurasi sensor dalam tiga titik (0°C, 25°C, 50°C); (ii) uji *thermal stress* terhadap guncangan suhu –80°C → +60°C selama 5 siklus; (iii) validasi sterilisasi dengan bioburden ≤ 1 CFU/unit; (iv) uji *RF immunity* terhadap EMI dari motor vakum dan PLC pada 30 V/m sesuai IEC 61000-4-3. Setiap node harus memenuhi *Mean Time Between Failure* (MTBF) ≥ 5000 jam.

### 3.3 Penempatan Node (Spatial Sampling)

Penempatan node mengikuti desain faktorial fraksional $2^{6-2}$ untuk mengkuantifikasi gradien radial-aksial. Strategi yang direkomendasikan Artusio *et al.* (2026) menggunakan **16 mock vials** yang terdistribusi secara strategis: 4 pojok, 4 tepi, 4 tengah, 4 antara — mewakili efek posisi *edge* dan *center*. Data dari node ini digunakan untuk menghitung *Coe