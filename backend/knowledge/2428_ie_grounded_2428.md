# 2428 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Arsitektur PAT, Pemantauan Real-Time, dan Formulasi Kuantitatif Siklus Freeze-Drying

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Wireless Sensor Networks for Pharmaceutical Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza-Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze-Drying*, Chapter 4. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze-Drying*, Chapter 11. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (*freeze-drying*) merupakan unit operasi kritis dalam manufaktur farmasi modern, khususnya untuk produk biologi, antibodi monoklonal, vaksin mRNA, dan sediaan steril yang tidak stabil dalam bentuk larutan cair. Menurut Meza-Galvan, Strongrich, dan Darwish (2026, DOI: [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)), lebih dari 50 % produk biofarmasi yang disetujui FDA dalam satu dekade terakhir memerlukan proses liofilisasi untuk mempertahankan aktivitas biologis dan stabilitas jangka panjang. Siklus ini terdiri atas tiga tahap utama — pembekuan (*freezing*), sublimasi (*primary drying*), dan desorpsi (*secondary drying*) — yang masing-masing memerlukan parameter proses yang sangat presisi.

Secara ekonomi, satu batch vial gagal pada tahap *primary drying* dapat menimbulkan kerugian hingga USD 500.000 hingga USD 2 juta pada lini produksi berskala komersial, belum termasuk risiko *batch rejection*, *recall*, dan kerugian reputasi regulatoris. Meza-Galvan *et al.* (2026) menegaskan bahwa penyebab utama kerugian tersebut adalah distribusi heterogen suhu vial yang sulit dideteksi secara dini oleh instrumentasi konvensional. Sistem thermocouple berkabel (*wired thermocouple*) tradisional, meskipun memiliki akurasi tinggi, hanya mampu memantau 5–12 vial dari total 10.000–30.000 vial per *batch*, sehingga gagal merepresentasikan kondisi *cold spot* dan *hot spot* yang menjadi penentu kualitas produk akhir.

Dari perspektif industri 4.0, Arsitektur *Process Analytical Technology* (PAT) yang diamanatkan FDA melalui panduan ICH Q8(R2), Q9, Q10, dan Q11 mendorong adopsi sistem pemantauan real-time, multivariat, dan terdistribusi. Jaringan Sensor Nirkabel (*Wireless Sensor Networks* / WSN) muncul sebagai solusi strategis yang memungkinkan pemasangan puluhan hingga ratusan node sensor di dalam ruang vakum liofilizer tanpa menembus dinding chamber, sehingga meningkatkan *spatial resolution* pemantauan vial secara dramatis. Artusio, Barresi, dan Pisano (2026, DOI: [10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)) memperkuat urgensi ini dengan memposisikan WSN sebagai salah satu pilar utama *emerging PAT tools* yang akan menggantikan arsitektur instrumentasi wired dalam dekade mendatang, seiring dengan menurunnya biaya komponen RF dan meningkatnya kebutuhan akan *continuous verification* sesuai *Pharmaceutical Quality System* (PQS) era modern.

Urgensi WSN juga didorong oleh meningkatnya kompleksitas formulasi (misalnya *high-concentration protein formulations* > 100 mg/mL) yang rentan terhadap *collapse*, *cake cracking*, dan *micro-collapse*, fenomena yang hanya dapat dideteksi melalui pemetaan suhu dan tekanan 2D/3D secara real-time.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Perpindahan Panas dan Massa pada Liofilisasi

Model steady-state yang diadopsi Meza-Galvan *et al.* (2026) untuk *primary drying* mengikuti kerangka Pikal:

$$\dot{Q} = K_v \cdot A_v \cdot (T_{shelf} - T_b) \tag{1}$$

dengan:
- $\dot{Q}$ = laju perpindahan panas ke vial (W),
- $K_v$ = koefisien transfer panas vial ($\text{W·m}^{-2}\text{·K}^{-1}$),
- $A_v$ = luas penampang vial ($\text{m}^2$),
- $T_{shelf}$ = suhu rak,
- $T_b$ = suhu produk pada *sublimation front*.

Laju sublimasi massa $\dot{m}$ diekspresikan sebagai:

$$\dot{m} = \frac{A_v \cdot (P_{ice}(T_b) - P_c)}{R_p} \tag{2}$$

dengan $P_{ice}(T_b)$ adalah tekanan uap jenuh es (Pa) yang mengikuti persamaan Clausius-Clapeyron:

$$P_{ice}(T_b) = P_0 \cdot \exp\!\left(\frac{\Delta H_{sub}}{R_g}\!\left(\frac{1}{T_0} - \frac{1}{T_b}\right)\right) \tag{3}$$

$R_p$ adalah resistansi total *dried cake* yang meningkat sepanjang siklus sesuai:

$$R_p(t) = R_{p,0} + \alpha \cdot \int_0^t \dot{m}(\tau)\, d\tau \tag{4}$$

dengan $\alpha$ adalah koefisien peningkatan resistansi spesifik cake ($\text{m·Pa·s·g}^{-1}$). Persamaan (4) adalah parameter kritis yang harus diestimasi real-time oleh sensor tekanan dan suhu vial WSN.

### 2.2 Arsitektur Jaringan Sensor Nirkabel

WSN di dalam liofilizer mengikuti topologi *mesh* atau *hybrid star-mesh* dengan *sink node* yang ditempatkan di luar ruang vakum melalui *feedthrough* khusus. Kapasitas kanal mengikuti teorema Shannon-Hartley:

$$C = B \cdot \log_2\!\left(1 + \frac{S}{N}\right) \tag{5}$$

dengan $B$ adalah bandwidth kanal (Hz), $S/N$ adalah *signal-to-noise ratio*. Untuk kanal ISM 2,4 GHz dengan $B = 2$ MHz dan $S/N = 20$ dB, kapasitas teoretis $C \approx 13{,}3$ Mbps. Namun, protokol ZigBee/Thread/LoRa pada aplikasi PAT Meza-Galvan *et al.* (2026) bekerja pada laju efektif 250 kbps dengan latensi tipikal 30–100 ms per hop, cukup untuk mengakomodasi sampling suhu 1 Hz per node.

Konsumsi energi sensor node mengikuti:

$$E_{node} = V \cdot I_{sleep} \cdot t_{sleep} + V \cdot I_{tx} \cdot t_{tx} + V \cdot I_{rx} \cdot t_{rx} \tag{6}$$

Untuk sensor yang ditenagai baterai LiSOCl₂ 3,6 V @ 2,4 Ah dengan duty cycle transmisi 1 % per siklus 5 menit, *lifetime* tipikal adalah 18–36 bulan, memadai untuk validasi multi-batch tanpa penggantian.

### 2.3 Model Sensor dan Akurasi

Sensor suhu WSN berbasis RTD platinum PT100 atau termistor NTC dengan akurasi $\pm 0{,}1$ °C pada rentang -50 °C hingga +60 °C. Sensor tekanan kapasitif (0–1000 mbar) digunakan untuk memantau tekanan chamber, sementara sensor kelembapan relatif *drying gas* mengikuti:

$$\phi = \frac{P_{vapor}}{P_{sat}(T)} \times 100\% \tag{7}$$

dengan $P_{sat}(T)$ dievaluasi menggunakan persamaan Goff-Gratch atau Murphy-Koop (Artusio *et al.*, 2026) untuk akurasi < 1 % pada suhu rendah.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Meza-Galvan *et al.* (2026) mengusulkan SOP pemasangan dan validasi WSN dalam liofilizer farmasi sebagai berikut:

**Tahap 1 — Desain Eksperimen (DoE) Penempatan Sensor.** Penempatan node sensor dilakukan dengan strategi *stratified random sampling* pada posisi *edge*, *center*, dan *corner* rak, mengikuti rekomendasi ASTM E2503 dan ICH Q1A. Minimum 16 node direkomendasikan untuk liofilizer skala piloto (1 m² rak) dan 64 node untuk skala produksi (> 10 m² rak).

**Tahap 2 — Kalibrasi dan Kualifikasi Instalasi (IQ/OQ).** Setiap node dikalibrasi terhadap standar referensi ITS-90 dengan traceability ke NIST, menggunakan *triple-point-of-water cell* dan *dry-block calibrator*. Batas akurasi dan presisi harus memenuhi *acceptance criteria* PAT FDA: bias < ±0,3 °C, repeatabilitas < ±0,1 °C (3σ).

**Tahap 3 — Akuisisi Data Real-Time dan Sinkronisasi.** Data dari node dikumpulkan melalui *gateway* yang menjembatani protokol WSN dengan *Manufacturing Execution System* (MES) atau *Distributed Control System* (DCS) melalui OPC-UA. Timestamp disinkronisasi menggunakan protokol IEEE 1588 *Precision Time Protocol* (PTP) dengan akurasi < 1 ms.

**Tahap 4 — Pemantauan *Primary Drying* dengan *Manometric Temperature Measurement* (MTM) dan *Pressure Rise Test* (PRT).** WSN memungkinkan integrasi MTM yang menghitung $T_b$ vial tanpa thermocouple berdasarkan data tekanan chamber, mengurangi kebutuhan *batch-to-batch* thermocouple invasif.

**Tahap 5 — Pengendalian Umpan Balik (*Feedback Control*).** Algoritma *Model Predictive Control* (MPC) menggunakan data WSN sebagai *state variable* untuk menyesuaikan $T_{shelf}$ secara real-time, mempertahankan $T_b$ pada setpoint tanpa melampaui $T_{collapse}$:

$$\min_{T_{shelf}} \int_{t_0}^{t_f} \big[(T_b - T_{set})^2 + \lambda (\Delta T_{shelf})^2\big]\, dt \tag{8}$$

dengan $\lambda$ adalah bobot regularisasi yang mencegah osilasi suhu rak berlebih.

**Tahap 6 — Dokumentasi dan *Data Integrity*.** Sesuai ALCOA+ dan FDA 21 CFR Part 11, seluruh data WSN di-*hash* menggunakan SHA-256 dan disimpan dalam format *electronic batch record* yang tidak dapat dimanipulasi.

Diagram alir proses rekayasa mengikuti pola: DoE → IQ/OQ → Akuisisi → Analisis (MTM/PRT) → MPC → Dokumentasi → *Release*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Vial 10R (luas $A_v = 3{,}80 \times 10^{-4}$ m²) berisi 5 mL larutan protein 50 mg/mL pada rak liofilizer produksi. Parameter awal: $T_{shelf} = -15$ °C, $T_b$ target = -28 °C, $P_c = 10$ Pa. Kita akan menghitung (a) laju sublimasi awal, (b) durasi *primary drying*, dan (c) laju data WSN.

**Langkah 1 — Hitung $P_{ice}(-28\,\text{°C})$ dengan Persamaan (3):**
$\$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
