# 2540 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Integrasi Process Analytical Technology (PAT) dalam Rekayasa Proses Manufaktur Obat Steril

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization (WSN-PAT)
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*, Chapter 4. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*, Chapter 11. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (*freeze-drying*) merupakan salah satu Unit Operasi kritis dalam rantai pasok biofarmasi global, khususnya untuk formulasi protein terapeutik, antibodi monoklonal, vaksin mRNA, dan produk plasma yang tidak stabil dalam kondisi larutan cair. Proses ini menghilangkan air melalui sublimasi di bawah vakum sehingga menghasilkan *cake* berpori yang mempertahankan aktivitas biologis dan memungkinkan umur simpan (*shelf-life*) hingga 24–36 bulan pada suhu 2–8 °C. Seperti ditegaskan oleh Meza-Galvan, Strongrich, dan Darwish (2026, DOI: [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)), sekitar 40 % produk biofarmasi baru yang masuk pipeline FDA memerlukan tahapan liofilisasi, menjadikan proses ini sebagai *bottleneck* kapasitas manufaktur *Contract Development and Manufacturing Organization* (CDMO) dengan nilai pasar yang diproyeksikan melampaui USD 12,4 miliar pada tahun 2027.

Urgensi industrial dari topik ini bersifat tiga-dimensional. Pertama, secara **ekonomi**, satu siklus liofilisasi batch pada skala produksi (lebig industri hingga 100 m² area rak) memerlukan waktu 48–96 jam dengan konsumsi energi spesifik 1,2–1,8 kWh per vial; variasi antar-batch yang tidak terkontrol menyebabkan kerugian rerata USD 250.000 per kegagalan *lot* pada produk bernilai tinggi. Kedua, secara **teknis**, metode konvensional *Thermocouple Placement Device* (TPD) berbasis kabel tembaga mengintroduksi konduksi parasitik yang mendistorsi profil suhu produk (*thermal shadow effect*), menurunkan akurasi kalibrasi *Primary Drying End Point* sebesar 15–20 %. Ketiga, secara **regulasi**, inisiatif FDA PAT (2004) dan ICH Q13 (2023) mendorong adopsi *Real-Time Release* (RTR) yang mengharuskan akuisisi data spasial-temporal resolusi tinggi dari seluruh vial dalam batch.

Pendekatan berbasis *Wireless Sensor Networks* (WSN) menjawab ketiga tantangan ini secara simultan. Dengan menempatkan sensor miniatur *surface-mount* langsung di dasar vial (*bottom-of-vial sensing*), konduksi parasitic hilang sehingga pembacaan suhu merepresentasikan kondisi *true* produk. Sensor berkomunikasi via protokol IEEE 802.15.4 atau Bluetooth Low Energy (BLE) ke *gateway* yang melakukan *edge-computing* untuk menentukan *primary drying endpoint* secara real-time. Disinikan oleh Artusio, Barresi, dan Pisano (2026, DOI: [10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)), integrasi WSN dengan *soft-sensor*, *machine learning*, dan *digital twin* membuka paradigma baru "*Pharmaceutical 4.0*" yang menurunkan variabilitas batch hingga 60 % dan memperpendek siklus hingga 30 % melalui optimasi *chamber pressure* dan *shelf temperature ramp*.

Konteks industri manufaktur obat steril di Indonesia — melalui PT Bio Farma dan rencana pembangunan fasilitas *fill-finish* baru di kawasan industri Subuk — menjadi sangat relevan karena adopsi WSN-PAT memungkinkan efisiensi energi, validasi proses otomatis (sesuai CPOB), serta penguatan daya saing ekspor vaksin regional.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka analitis WSN-PAT untuk liofilisasi dibangun di atas tiga pilar persamaan: (i) model transfer panas-massa proses sublimasi, (ii) model degradasi sinyal nirkabel di lingkungan vakum-kriogenik, dan (iii) model manajemen energi *node* sensor.

### 2.1 Model Sublimasi dan Transfer Panas (Pikal's Coupled Model)

Laju sublimasi massa $\dot{m}$ pada antarmuka (*interface*) es-vapor dikendalikan oleh resistansi transfer massa produk kering ($R_p$) dan gradien tekanan uap air antara interface ($P_{w,i}$) dan ruang kondensor ($P_{w,c}$):

$$\dot{m} = \frac{A_v \left( P_{w,i}(T_i) - P_{w,c} \right)}{R_p}$$

di mana $A_v$ adalah luas sublimasi per vial. Resistansi $R_p$ meningkat secara kuadratik terhadap ketebalan lapisan kering $\ell(t)$ dan menurun dengan temperatur interface:

$$R_p(t) = R_{p,0} + \frac{\ell(t)^2}{K_{\text{eff}}}$$

Nilai $P_{w,i}(T_i)$ mengikuti persamaan Clausius-Clapeyron untuk es:

$$\ln P_{w,i} = -\frac{6144{,}96}{T_i} + 24{,}7219 \quad (\text{dengan } P \text{ dalam Torr}, T \text{ dalam K})$$

Sementara fluks panas dari rak (*shelf*) ke vial dimodelkan sebagai:

$$q = K_v \left( T_s - T_b \right) + K_{\text{rad}} \left( T_s^4 - T_b^4 \right)$$

dengan $K_v = K_c + K_{g,\text{side}} + K_{g,\text{bottom}}$ yang merupakan konduktansi kalibrasi vial.

### 2.2 Atenuasi Sinyal Nirkabel dalam Ruang Liofilisasi

Lingkungan kriogenik (-40 °C) dan vakum (10–100 mTorr) memengaruhi propagasi elektromagnetik. Path loss untuk gelombang dalam ruang tertutup (*Friis-modified*) mengikuti:

$$L_{\text{path}} = L_0 + 10 n \log_{10}\left(\frac{d}{d_0}\right) + X_\sigma + L_{\text{atten,vac}}$$

di mana $n \approx 1{,}6{-}2{,}0$ (eksponen path loss dalam *metallic chamber*), $X_\sigma \sim \mathcal{N}(0, \sigma^2)$ adalah *shadow fading* akibat refleksi rak, dan $L_{\text{atten,vac}}$ adalah redaksi akibat konduktivitas dinding baja rendah karbon:

$$L_{\text{atten,vac}} = 8{,}686 \cdot \sqrt{\pi f \mu_0 \sigma_c} \quad \text{[dB/m]}$$

dengan $f$ frekuensi carrier (2,4 GHz), $\mu_0$ permeabilitas vakum, dan $\sigma_c$ konduktivitas dinding. Untuk baja 316L ($\sigma_c = 1{,}35 \times 10^6$ S/m), diperoleh $L_{\text{atten,vac}} \approx 5{,}3$ dB per *shelf*, yang menjadi dasar desain *repeater* mesh.

### 2.3 Model Konsumsi Energi Node Sensor

Energi transmisi *node* mengikuti *first-order radio model* Heinzelman:

$$E_{tx}(k,d) = E_{\text{elec}} \cdot k + \varepsilon_{\text{amp}} \cdot k \cdot d^{n}$$

Untuk akuisisi 16-bit pada interval 5 detik selama siklus 72 jam, total energi per node adalah:

$$E_{\text{total}} = N_{\text{samples}} \left[ E_{\text{elec}} \cdot k + \varepsilon_{\text{amp}} \cdot k \cdot d^{n} + E_{\text{proc}} + E_{\text{sleep}} \right]$$

Umur jaringan WSN dengan topologi *cluster-tree* dimodelkan sebagai:

$$T_{\text{network}} = \frac{N \cdot E_{\text{initial}} - N \cdot E_{\text{overhead}}}{P_{\text{avg}}}$$

dengan $P_{\text{avg}}$ konsumsi daya rerata node, yang harus $> T_{\text{proses}}$ untuk memastikan cakupan temporal penuh.

### 2.4 Soft-Sensor untuk Primary Drying Endpoint

Estimasi *end-point* sublimasi dilakukan melalui *Pressure Rise Test* (PRT) yang diselesaikan dengan persamaan Manometric Temperature Measurement (MTM):

$$T_b^{\text{MTM}} = T_s - \frac{\Delta P}{\Delta t} \cdot \frac{V_c \cdot L}{A_v \cdot K_v \cdot R_p}$$

Kombinasi MTM dengan data WSN menghasilkan *Kalman Filter* yang menurunkan *uncertainty* $\sigma_{T_b}$ menjadi $\leq 0{,}3$ °C.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi WSN-PAT mengikuti kerangka **IQ-OQ-PQ** (Installation, Operational, Performance Qualification) sesuai FDA Process Validation Guidance (2011) dan ASME BPE-2022 untuk sistem pharma. Tahapan rekayasa secara berurutan adalah:

**Tahap 1 — Desain Uji Coba (DoE) dan Kualifikasi Node.**
Pemilihan sensor: RTD platinum PT100 kelas A (akurasi ±0,15 °C pada -50 °C), transduser tekanan kapasitif 10 Torr (akurasi ±0,5 %), dan mikrokontroler BLE 5.2. Node di-*factory-calibrate* pada tiga titik (-40 °C, 0 °C, 25 °C) dengan sertifikat NIST-traceable.

**Tahap 2 — Pemetaan Jaringan (Network Mapping).**
Dilakukan *site survey* redaksi sinyal dalam *drying chamber* kosong dengan generator RF terkalibrasi untuk mengidentifikasi *blind spots*. Hasil disimpan sebagai *heatmap* path loss dan menjadi dasar penempatan *repeater* (umumnya 1 repeater per 2 rak). Topologi *mesh* dipilih untuk redundansi (Node Density ≥ 3 node per vial kritis sesuai tipikal 300 vial per batch).

**Tahap 3 — Kalibrasi Thermal dalam Kondisi *Process* (In-Situ Calibration).**
Node sensor *bottom-of-vial* dikalibrasi ulang menggunakan vial referensi berisi termokopel TPD sebagai *gold standard*. Fungsi kalibrasi:

$$T_{\text{koreksi}} = a \cdot T_{\text{sensor}} + b$$

dengan koefisien regresi linier $R^2 \geq 0{,}998$.

**Tahap 4 — Integrasi dengan SCADA/DCS.**
Data WSN diteruskan ke *Plant Historian* (OSIsoft PI atau AVEVA) melalui protokol OPC UA dengan *encryption* TLS 1.3. Setiap 1 detik, data *streaming* disimpan untuk analisis retrospektif.

**Tahap 5 — Penerapan Soft-Sensor dan Digital Twin.**
Model *primary drying* diselesaikan secara *real-time* di *edge-gateway* menggunakan MTM dan *Kalman Filter*. Output digital twin memprediksi waktu tersisa $\Delta t_{\text{rem}}$ hingga *sublimation front* mencapai dasar vial.

**Tahap 6 — Release Decision Otomatis.**
Berdasarkan *Rule-based Logic* yang memenuhi ICH Q13:

$$\text{Decision} = 
\begin{cases}
\text{PASS} & \text{jika } T_b > T_{g,\text{crit}} \text{ dan } \dot{m} < \dot{m}_{\text{threshold}} \\
\text{REJECT} & \text{jika } \sigma_{T_b} > 0{,}5\,°\text{C atau waktu siklus melebihi } 1{,}1 \cdot t_{\text{nom}} \\
\text{INVESTIGATE} & \text{otherwise}
\end{cases}$$

Standar dokumentasi mengikuti **ASTM E2503-20** untuk PAT dan **ISO 13485:2016** untuk sistem manajemen mutu alat kesehatan.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Kasus

Sebuah *Contract Manufacturer* melakukan liofilisasi batch produk antibodi monoklonal (mAb) pada *freeze dryer* GEA Lyomega™ dengan kapasitas 8 rak, masing-masing berisi 250 vial 10R (volume isi 5 mL). Parameter operasional:

| Parameter | Nilai | Simbol |
|---|---|---|
| Luas sublimasi per vial | $A_v = 2{,