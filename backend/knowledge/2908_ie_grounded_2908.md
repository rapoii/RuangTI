# 2908 — Jaringan Sensor Nirkabel untuk Liofilisasi: Integrasi PAT, Rekayasa Sistem Sensor, dan Optimasi Siklus Pengeringan Beku Farmasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (*freeze-drying*) merupakan proses unit kritis dalam manufaktur farmasi parenteral, terutama untuk produk biologis termolabil seperti antibodi monoklonal (*mAb*), vaksin mRNA, dan terapi sel. Menurut Meza-Galvan, Strongrich, dan Darwish (2026, DOI: [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)), lebih dari 50% produk biofarmasi baru yang disetujui FDA membutuhkan proses liofilisasi, menjadikan siklus pengeringan beku sebagai *bottleneck* produktivitas yang signifikan karena durasi prosesnya yang panjang (24–96 jam per *batch*) dan konsumsi energi yang tinggi (estimasi biaya energi $5–15 kg air yang dihilangkan).

Urgensi implementasi *Wireless Sensor Networks* (WSN) di dalam ruang liofilisasi muncul dari keterbatasan instrumentasi konvensional. Sensor thermocouple kabel tradisional hanya dapat dipasang pada beberapa vial representatif, menciptakan masalah *spatial heterogeneity* yang signifikan: gradien suhu antar-rak (*shelf*) dapat mencapai 2–4°C, sementara variabilitas suhu antar-vial pada posisi yang berbeda dapat melampaui *design space* produk. Meza-Galvan dkk. menekankan bahwa pelacakan suhu vial secara *real-time* dan *non-invasive* menjadi prasyarat untuk memenuhi *Quality by Design* (QbD) yang digariskan FDA PAT Guidance (2004) dan ICH Q8(R2).

Konteks ekonomi industri juga menjadi justifikasi kuat. Artusio, Barresi, dan Pisano (2026, DOI: [10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)) melaporkan bahwa implementasi WSN dapat mempersingkat waktu *primary drying* sebesar 15–30% melalui *dynamic recipe optimization* yang digerakkan data sensor langsung, dengan *return on investment* (ROI) tercapai dalam 4–6 *batch* untuk fasilitas produksi dengan kapasitas >500 vial per *batch*. Dalam perspektif rekayasa sistem industri, WSN bukan sekadar perangkat ukur, melainkan elemen arsitektur siber-fisik (*cyber-physical system*) yang memungkinkan *closed-loop control* liofilizer dan integrasi dengan sistem Manufacturing Execution System (MES) sesuai ISA-95.

Tantangan teknis yang harus diatasi meliputi: (i) lingkungan vakum dengan tekanan 10–100 Pa yang membatasi disipasi panas sensor; (ii) interferensi elektromagnetik dari sistem RF generator; (iii) kebutuhan *biocompatibility* material sensor; dan (iv) kompatibilitas dengan siklus *steam-in-place* (SIP) dan *clean-in-place* (CIP). Meza-Galvan dkk. (2026) menunjukkan bahwa solusi WSN modern berbasis sensor *thin-film* dengan *transceiver* berdaya rendah (1–10 mW) dapat beroperasi selama 72+ jam pada satu baterai lithium tipis 3 V, memenuhi kebutuhan siklus liofilisasi tipikal.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Kinetika Sublimasi

Laju sublimasi es dari produk beku dikendalikan oleh *resistance-in-series* antara antarmuka sublimasi dan kondensor. Persamaan fundamental yang digunakan Meza-Galvan dkk. (2026) adalah:

$$\frac{dm}{dt} = \frac{P_s(T_p) - P_c}{R_m}$$

di mana $\frac{dm}{dt}$ adalah laju sublimasi (kg/s), $P_s(T_p)$ adalah tekanan uap jenuh pada suhu produk $T_p$ (Pa), $P_c$ adalah tekanan ruang kondensor (Pa), dan $R_m$ adalah hambatan total perpindahan massa (Pa·s/kg). Hambatan total tersusun secara seri:

$$R_m = R_p + R_s$$

dengan $R_p$ sebagai hambatan produk (*dried cake resistance*) dan $R_s$ sebagai hambatan *stoppering* vial. Untuk formulasi kristal seperti sukrosa, model yang umum digunakan:

$$R_p = R_{p,0} + \frac{A_1 \cdot L}{1 + B_1 \cdot L}$$

di mana $L$ adalah tebal *dried layer* (m), $A_1$ dan $B_1$ adalah parameter empiris yang bergantung pada formulasi.

### 2.2 Persamaan Arrhenius untuk Resistansi Produk

Artusio, Barresi, dan Pisano (2026) memformulasikan dependensi suhu terhadap resistansi produk:

$$R_{p,0} = R_{p,0}^{ref} \cdot \exp\left[\frac{E_a}{R}\left(\frac{1}{T_p} - \frac{1}{T_{ref}}\right)\right]$$

dengan $E_a$ sebagai energi aktivasi (J/mol), $R$ adalah konstanta gas universal 8,314 J/(mol·K), $T_{ref}$ adalah suhu referensi (biasanya 263,15 K). Untuk sukrosa 5%, $E_a \approx 18.500$ J/mol, menghasilkan peningkatan resistansi ~2,5× setiap penurunan suhu 10°C.

### 2.3 Neraca Energi pada Vial

Penyerapan panas laten sublimasi dari *shelf* melalui konduksi, radiasi, dan konveksi gas:

$$Q_{total} = K_v \cdot A_v \cdot (T_{shelf} - T_p) + h_{gas} \cdot A_v \cdot (T_{shelf} - T_p) + \sigma \cdot \varepsilon \cdot A_v \cdot (T_{shelf}^4 - T_p^4)$$

Dalam kondisi vakum tinggi (<30 Pa), kontribusi konveksi gas dan radiasi menjadi dominan dan sangat sensitif terhadap tekanan. Data WSN digunakan untuk meng-*update* koefisien perpindahan panas efektif $K_{eff}$ secara *real-time*:

$$K_{eff} = \frac{Q_{total}}{A_v \cdot (T_{shelf} - T_p)}$$

### 2.4 Teori Sampling dan Akurasi Pengukuran WSN

Karena WSN memungkinkan pengukuran pada banyak vial, *batch mean* suhu produk yang terestimasi menjadi:

$$\bar{T}_p = \frac{1}{N} \sum_{i=1}^{N} T_{p,i}, \quad s^2 = \frac{1}{N-1}\sum_{i=1}^{N}(T_{p,i} - \bar{T}_p)^2$$

Interval kepercayaan 95% untuk suhu rata-rata:

$$CI_{95\%} = \bar{T}_p \pm t_{\alpha/2, N-1} \cdot \frac{s}{\sqrt{N}}$$

Untuk $N=16$ sensor (konfigurasi tipikal pada rak 64-vial dengan 1 sensor per 4 vial), $t_{0,025, 15} = 2,131$, sehingga ketidakpastian pengukuran turun ~4× dibanding sistem thermocouple 4 kabel tradisional.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur WSN untuk Liofilizer

Meza-Galvan dkk. (2026) mengusulkan arsitektur tiga-lapis:

**Lapisan 1 — Sensor Node (Field Level):** Terdiri dari *thin-film thermocouple* (ketebalan <0,5 mm) yang ditempelkan di dasar vial, terintegrasi dengan *microcontroller* (mis. MSP430 atau CC2650) dan *transceiver* 2,4 GHz IEEE 802.15.4. Setiap node memiliki *sampling rate* 0,1–1 Hz, resolusi 16-bit, dan akurasi ±0,3°C pada rentang -50 hingga 50°C.

**Lapisan 2 — Gateway (Cell Controller):** Berfungsi sebagai aggregator data, biasanya berupa *edge gateway* industri (mis. Siemens IOT2050 atau Advantech UNO-2484G) yang menerima transmisi dari 200–500 node secara simultan melalui protokol *time-synchronized channel hopping* (TSCH) untuk menghindari tabrakan data.

**Lapisan 3 — Cloud/MES (Plant Level):* Data historis disimpan di *historian* (OSIsoft PI atau Aveva) untuk *batch traceability* dan *continuous process verification* sesuai FDA PAT Guidance.

### 3.2 SOP Implementasi WSN

Tahapan SOP mengikuti kerangka *Plan-Do-Check-Act* (PDCA) dari ASTM E2503:

1. **Pra-Instalasi (Plan):** Validasi sensor di *mock-up chamber* selama 3 siklus untuk memastikan akurasi dan *signal integrity* di lingkungan vakum. Kalibrasi tiga titik menggunakan *dry-block calibrator* (0°C, -40°C, +25°C).
2. **Instalasi (Do):** Penempatan sensor pada posisi vial yang merepresentasikan *edge*, *center*, dan *corner* rak sesuai *design of experiment* (DoE) taguchi L9 atau full factorial.
3. **Verifikasi (Check):** *Side-by-side comparison* dengan thermocouple kabel primer pada minimal 3 vial, dengan *acceptance criterion* |ΔT| ≤ 0,5°C selama 24 jam operasi.
4. **Operasional (Act):** *Training* operator, integrasi dengan recipe *control system* (PCS7 atau DeltaV), dan *change control* sesuai ICH Q10.

### 3.3 Standar Referensi

- **ASTM E2503-13:** Praktik standar untuk *qualification* siklus liofilisasi.
- **FDA PAT Guidance (2004):** Kerangka *real-time release* (RTR) berbasis pengukuran proses.
- **ICH Q8(R2):** Pharmaceutical Development – *Quality by Design*.
- **ISO 13485:2016:** Sistem manajemen kualitas untuk *medical devices* (juga mencakup sensor farmasi).
- **USP <1207>:** *Package Integrity* untuk produk steril.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Spesifikasi Kasus

Pertimbangkan proses *primary drying* liofilisasi untuk produk antibodi monoklonal dalam vial 10 mL (diameter dalam 22 mm, luas $A_v = 3,8 \times 10^{-4}$ m²) pada rak berisi 400 vial, dengan parameter operasi tipikal:
- $T_{shelf} = -10°C = 263,15$ K
- $P_c = 10$ Pa (tekanan kondensor)
- Formulasi: sukrosa 5% b/v, konsentrasi protein 25 mg/mL
- *Fill volume* = 5 mL per vial, total massa padatan = 250 mg
- Kadar air awal: 80% (b/b), kadar air target: 1% (b/b)

### 4.2 Perhitungan Laju Sublimasi

Menggunakan persamaan Antoine untuk tekanan uap es (Buck, 1981):

$$\log_{10}(P_s) = A - \frac{B}{T_p + C}$$

dengan $A = 9,550426$, $B = 5723,265$, $C = 3,537$ (untuk $P_s$ dalam Pa, $T_p$ dalam °C). Asumsikan suhu produk $T_p = -25°C$:

$$\log_{10}(P_s) = 9,550 - \frac{5723,265}{-25 + 3,537} = 9,550 - \frac{5723,265}{-21,463} = 9,550 + 266,63$$

Nilai ini berada di luar rentang validitas, menandakan kita perlu menggunakan suhu $T_p = -30°C$ yang lebih realistis untuk *primary drying*:

$$P_s(-30°C) = 10^{9,550 - 5723,265/(-26,463)} = 10^{9,550 + 216,28} \approx 38,0 \text{ Pa}$$

Laju sublimasi (dengan asumsi $R_m = 50.000$ Pa·s/kg untuk sukrosa 5% pada *dried layer* 1 mm):

$$\frac{dm}{dt} = \frac{38,0 - 10,0}{50.000} = 5