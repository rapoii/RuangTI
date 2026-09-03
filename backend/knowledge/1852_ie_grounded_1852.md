# 1852 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Integrasi PAT, Rekayasa Panas–Massa, dan Otomasi Siklus Freeze-Drying

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Wireless Sensor Networks (WSN) untuk Liofilisasi Farmasi (Pharmaceutical Freeze-Drying)
**Jurnal & Sitasi Utama:** Jesus Meza-Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Wireless Sensor Networks for Lyophilization* dalam *Process Analytical Technology for Pharmaceutical Freeze-Drying*. Wiley-VCH. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Emerging Technologies in Pharmaceutical Freeze-Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (*freeze-drying*) merupakan unit operasi kritis dalam industri biofarmasi yang digunakan untuk menstabilkan produk biologis termosensitif seperti antibodi monoklonal (*mAb*), vaksin mRNA, protein terapeutik, dan antibiotik beta-laktam. Menurut Meza-Galvan, Strongrich, dan Darwish (2026) dalam bab buku *Process Analytical Technology for Pharmaceutical Freeze-Drying* yang diterbitkan oleh Wiley-VCH (DOI: 10.1002/9783527850303.ch4), siklus liofilisasi konvensional masih mengandalkan pengukuran suhu *shelf* dan tekanan ruang (*chamber pressure*) sebagai parameter kontrol tunggal, sementara suhu produk ($T_p$) hanya dipantau secara *batch-end* menggunakan termokopel yang ditempatkan pada vial representatif. Keterbatasan ini menjadi semakin problematik seiring meningkatnya kompleksitas formulasi biologi modern dan meningkatnya permintaan akan *Quality by Design* (QbD) yang digaungkan oleh FDA melalui inisiatif Process Analytical Technology (PAT).

Urgensi operasional dan ekonomi dari adopsi WSN dalam liofilisasi tidak terlepas dari fakta bahwa satu siklus produksi vial pada fasilitas *contract development and manufacturing organization* (CDMO) berskala besar dapat mencakup 20.000–50.000 vial dengan nilai jual produk antara USD 50.000 hingga USD 5 juta per batch (Artusio, Barresi, & Pisano, 2026, DOI: 10.1002/9783527850303.ch11). Kegagalan satu batch akibat *collapse* amorf, *eutectic melt-back*, atau *residual moisture* berlebih di atas ambang batas farmakope (biasanya ≤1,0% w/w untuk vial kering) dapat menimbulkan kerugian langsung ratusan ribu dolar, belum termasuk konsekuensi regulasi berupa *batch rejection* dan *observation letter* FDA. Meza-Galvan et al. (2026) menekankan bahwa visibilitas real-time terhadap gradien suhu intra-batch menjadi prasyarat untuk mencegah inhomogenitas yang selama ini menjadi *root cause* utama dari deviasi Critical Quality Attribute (CQA).

Secara teknis, Meza-Galvan et al. (2026) mengidentifikasi empat hambatan utama dalam instrumentasi liofilisasi tradisional, yaitu: (1) terbatasnya jumlah termokopel karena setiap kabel thermal menjadi jalur kebocoran vakum; (2) interferensi listrik EMI/RFI dari motor kompresor dan *RF generator*; (3) ketidakmampuan membedakan perilaku vial di posisi *edge* (pinggir rak) versus *center* (pusat rak); dan (4) latensi tinggi (>30 detik) yang melanggar batas kendali proses sublimasi. Justifikasi ini diperkuat oleh Artusio et al. (2026) yang melaporkan bahwa >65% *batch failure* liofilisasi disebabkan oleh kesalahan dalam pengendalian suhu produk, menjadikan WSN bukan sekadar opsi kenyamanan melainkan kebutuhan rekayasa kualitas.

Dalam konteks Industri 4.0, implementasi WSN memungkinkan arsitektur *cyber-physical system* (CPS) yang mengintegrasikan data suhu, kelembapan residu, dan tekanan parsial uap air ke dalam *digital twin* liofilizer. Nilai strategisnya bagi manajer operasi meliputi pengurangan total cycle time sebesar 15–30%, peningkatan *first-pass yield* dari rata-rata industri 82% menjadi >95%, serta kemampuan memenuhi *real-time release testing* (RTRT) yang menjadi prasyarat rilis produk pasca-pandemi COVID-19. Oleh karena itu, pemahaman komprehensif terhadap matematika perpindahan panas-massa, topologi jaringan nirkabel, dan integrasi PAT ini menjadi kompetensi wajib bagi spesialis teknik industri yang bergerak di manufaktur farmasi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Mekanisme Perpindahan Panas dan Massa dalam Liofilisasi

Meza-Galvan et al. (2026) menurunkan model matematis berbasis persamaan Pikal yang memformulasikan fluks panas ($q$) dan laju sublimasi ($\dot{m}$) secara simultan. Perpindahan panas dari rak (*shelf*) ke dasar vial terjadi secara konduksi melalui gas pada tekanan rendah, mengikuti hukum Fourier yang dimodifikasi menjadi:

$$q = K_v \left( T_{shelf} - T_{bottom} \right)$$

di mana $K_v$ adalah koefisien transfer panas vial (W/m²·K), $T_{shelf}$ suhu rak, dan $T_{bottom}$ suhu dasar vial. Pada tekanan ruang 10–30 Pa, kontribusi konduksi gas ($k_g$) dominan terhadap radiasi dan konveksi, sehingga:

$$K_v = \frac{k_g A_v}{L}$$

dengan $A_v$ luas penampang vial, $L$ jarak efektif gap, dan $k_g$ konduktivitas termal gas residu (udara + uap air). Untuk gas ideal pada tekanan rendah dengan *mean free path* sebanding dengan dimensi vial, berlaku regime Knudsen:

$$k_g = \alpha \cdot P \cdot \frac{\gamma + 1}{\gamma - 1} \sqrt{\frac{R T}{2\pi M}}$$

di mana $\alpha$ adalah accommodation coefficient, $P$ tekanan total, $\gamma$ rasio kapasitas panas, $R$ konstanta gas universal, dan $M$ massa molar.

Laju sublimasi dikendalikan oleh resistansi massa dry layer ($R_p$) yang tumbuh secara dinamis seiring berkurangnya lapisan es:

$$\dot{m} = \frac{A_p \left( P_{ice}(T_s) - P_c \right)}{R_p}$$

dengan $A_p$ luas sublimasi internal vial, $P_{ice}(T_s)$ tekanan uap es pada suhu sublimasi (dari persamaan Clausius-Clapeyron atau korelasi Murphy & Koop), dan $P_c$ tekanan ruang. Resistansi dry layer dimodelkan dengan persamaan resistansi yang meningkat secara kuadratik:

$$R_p(t) = R_{p,0} + \frac{A_1 \cdot m_{sub}(t)}{m_0}$$

di mana $m_{sub}(t)$ adalah massa yang sudah tersublimasi, $m_0$ massa awal es, dan $A_1$ koefisien empiris yang bergantung pada formulasi (Artusio et al., 2026).

### 2.2 Kinetika Degradasi Produk

Untuk menjamin kualitas hayati protein, Meza-Galvan et al. (2026) mengadopsi model Arrhenius untuk laju agregasi dan deamidation:

$$k_{deg}(T) = A \cdot \exp\left( -\frac{E_a}{R T} \right)$$

dengan $A$ pre-exponential factor, $E_a$ energi aktivasi (umumnya 60–100 kJ/mol untuk degradasi protein), dan $R = 8{,}314$ J/mol·K. Kerusakan kumulatif selama siklus mengikuti integral waktu suhu:

$$\ln \left( \frac{C_f}{C_0} \right) = -\int_0^{t_{cycle}} k_{deg}(T(t)) \, dt$$

Nilai ambang batas yang lazim digunakan: $\ln(C_f/C_0) > -0{,}1$ menandakan degradasi <10% yang memenuhi CQA untuk kebanyakan mAb.

### 2.3 Model Jaringan Sensor Nirkabel (WSN)

WSN dalam liofilizer beroperasi pada kondisi ekstrem: suhu -50°C hingga +50°C, vakum 1–100 Pa, dan paparan *ethylene glycol* / *silicone oil* dari sistem perpindahan panas. Meza-Galvan et al. (2026) memilih protokol IEEE 802.15.4 / ZigBee atau Bluetooth Low Energy (BLE) 5.0 dengan arsitektur *mesh* topologi. Konsumsi energi node sensor mengikuti model *first-order radio*:

$$E_{tx}(k, d) = E_{elec} \cdot k + \epsilon_{amp} \cdot k \cdot d^2$$

$$E_{rx}(k) = E_{elec} \cdot k$$

dengan $k$ ukuran paket (bit), $d$ jarak transmisi, $E_{elec}$ energi sirkuit elektronik (≈50 nJ/bit), dan $\epsilon_{amp}$ penguatan amplifier (≈100 pJ/bit/m²). Umur baterai untuk node dengan duty cycle $\delta$ diestimasi melalui:

$$T_{life} = \frac{C_{bat}}{P_{sleep} + \delta (P_{tx} + P_{rx}) + P_{sense}}$$

Untuk baterai Li-ion 240 mAh @ 3,7 V dengan $P_{sense} = 3$ mW dan duty cycle 1%, umur node tipikal adalah 14–18 bulan, sesuai dengan siklus kalibrasi tahunan standar GMP.

### 2.4 Redundansi dan Keandalan Data

Karena vial terletak dalam ruang vakum tertutup, integritas data wajib dijamin melalui *packet delivery ratio* (PDR) minimum:

$$PDR = \frac{N_{rx}}{N_{tx}} \geq 0{,}999$$

Untuk mencapai ini pada topologi mesh dengan 3 hop, Meza-Galvan et al. (2026) menurunkan batas bawah SNR efektif:

$$SNR_{min} = \frac{P_{tx} G_{tx} G_{rx} \lambda^2}{(4\pi)^2 d^n L_{sys} N_0 B}$$

dengan $n$ path loss exponent (≈1,8 di dalam ruang logam), $L_{sys}$ loss sistem, $N_0$ spectral noise density, dan $B$ bandwidth. Pada 2,4 GHz dengan daya transmit 0 dBm, SNR minimal 8 dB untuk BER <10⁻⁶.

---

## 3. Metodologi Rekayasa & SOP Implementasi WSN dalam Liofilizer

### 3.1 Arsitektur Sistem

Meza-Galvan et al. (2026) mengusulkan arsitektur tiga lapis (*three-tier architecture*):

```
┌──────────────────────────────────────────────────────┐
│  Tier 3: Cloud & Digital Twin (OPC-UA, MQTT, Historian) │
│              ↓ MQTT/HTTPS            ↑ Analytics AI   │
├──────────────────────────────────────────────────────┤
│  Tier 2: Edge Gateway (Raspberry Pi/Industrial PC)    │
│              ↓ ZigBee/BLE 5.0       ↑ ACK, time-sync  │
├──────────────────────────────────────────────────────┤
│  Tier 1: Sensor Nodes (Vial-mounted, batteryless RFID │
│           + thermocouple + humidity capacitive MEMS)  │
└──────────────────────────────────────────────────────┘
```

### 3.2 SOP Deployment Node Sensor

**Langkah 1 – Site Survey & Risk Assessment (Fase 0):**
- Lakukan *electromagnetic site survey* pada liofilizer kosong untuk memetakan *noise floor* (target < -95 dBm pada 2,4 GHz).
- Validasi bahwa tidak ada interferensi dari sistem *microwave plasma* atau sterilisasi *in-situ* yang dapat menutupi pita ISM.
- Tentukan *critical vial positions*: center, edge, corner, dan *hot spot* berdasarkan *Computational Fluid Dynamics* chamber.

**Langkah 2 – Kalibrasi Sensor (Fase I):**
- Kalibrasi termokopel Tipe T terhadap *standard reference* NIST-traceable pada rentang -50°C hingga +50°C dengan akurasi ±0,2°C.
- Kalibrasi *capacitive MEMS humidity sensor* menggunakan *saturated salt solution* (LiCl 11,3% RH; NaCl 75,5% RH) untuk validasi *residual moisture*.
- Tetapkan sertifikat kalibrasi yang memenuhi 21 CFR Part 11 dan EU Annex 11.

**Langkah 3 – Pemasangan Node (Fase II):**
- Pasang node pada vial *dummy* yang terdistribusi secara *stratified random sampling* (target minimal 12 vial per rak pada 5.000 vial, sesuai平方-root sampling N = √N_total).
- Tempatkan gateway di *feedthrough* khusus yang telah dimodifikasi menggunakan *hermetic RF feedthrough* (contoh: SMP Fischer series).
- Konfigurasi topologi mesh dengan auto-discovery dan *time-synchronized channel hopping* (TSCH) untuk mitigasi multipath.

**Langkah 4 – Validasi Kualifikasi (Fase III):**
- Lakukan *Installation Qualification*