# 2140 — Jaringan Sensor Nirkabel (WSN) untuk Liofilisasi Farmasi: Integrasi PAT, Pemantauan Multi-Titik, dan Rekayasa Sistem Industri 4.0

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza-Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze-Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze-Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (*freeze-drying*) merupakan proses unit operasi kritis dalam manufaktur farmasi yang ditujukan untuk menstabilkan produk biologis sensitif seperti protein monoklonal, vaksin mRNA, dan sediaan parenteral bernilai tinggi (Meza-Galvan et al., 2026). Proses ini beroperasi pada tekanan rendah (< 100 Pa) melalui tiga tahap berurutan: pembekuan (*freezing*), pengeringan primer (*primary drying* melalui sublimasi), dan pengeringan sekunder (*secondary drying* melalui desorpsi). Tingginya nilai tambah produk—yang dapat mencapai USD 5.000–50.000 per gram untuk terapi berbasis antibodi—menjadikan pengendalian proses sebagai variabel strategis yang langsung memengaruhi *yield*, kemurnian, dan stabilitas hayati (*shelf-life*) produk.

Dalam konteks Industri 4.0, paradigma **Process Analytical Technology (PAT)** yang dikeluarkan oleh FDA sejak 2004 mendorong adopsi pemantauan *real-time* terhadap *Critical Quality Attributes* (CQA) dan *Critical Process Parameters* (CPP). Meza-Galvan, Strongrich, dan Darwish (2026) dalam chapter mereka menyoroti bahwa salah satu keterbatasan fundamental dari arsitektur instrumentasi liofilisasi konvensional adalah ketergantungan pada sensor kabel (*wired thermocouples*) yang hanya mampu mengukur suhu pada jumlah titik terbatas—biasanya 4 hingga 8 posisi—di dalam rak (*shelf*) dan vial. Keterbatasan ini menciptakan *observability gap*: operator tidak dapat memetakan gradien suhu dan tekanan secara spasial, padahal heterogenitas vial (*vial-to-vial variability*) merupakan sumber utama degradasi kualitas.

Urgensi penerapan **Wireless Sensor Networks (WSN)** muncul dari kebutuhan akan *spatial-temporal resolution* yang lebih tinggi tanpa menambah beban termal konduktif pada vial (Meza-Galvan et al., 2026). Sensor nirkabel dengan form-factor miniatur, konsumsi daya rendah, dan kemampuan transmisi data melalui media vakum pada ruang pengering (*chamber*) memungkinkan perluasan cakupan pengukuran dari puluhan menjadi ratusan titik secara simultan. Hal ini secara langsung mendukung inisiatif *continuous manufacturing* dan *right-first-time* yang dicanangkan oleh regulator global.

Secara ekonomis, investasi pada sistem WSN untuk satu lini liofilisasi farmasi berkisar USD 80.000–250.000, namun potensi pengembalian (*ROI*) berasal dari pengurangan *batch failure rate* sebesar 15–30% dan optimalisasi siklus pengeringan primer yang rata-rata mengonsumsi 60–70% dari total waktu proses (Artusio, Barresi, & Pisano, 2026). Pengurangan durasi pengeringan sebesar 10% saja pada lini produktif bernilai tinggi dapat menghemat biaya energi dan utilisasi modal hingga USD 1,2 juta per tahun untuk fasilitas skala komersial.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Energi Liofilisasi

Model matematis fundamental yang digunakan untuk menganalisis kinerja WSN dalam liofilisasi adalah **unsteady-state energy balance** pada antarmuka sublimasi, yang dirumuskan oleh Pikal-Millero:

$$q_p = A_v \cdot \Delta H_s \cdot \frac{dm}{dt} = \frac{T_s - T_b}{R_p}$$

di mana $q_p$ adalah fluks kalor ($\text{W/m}^2$), $A_v$ luas penampang vial, $\Delta H_s$ entalpi sublimasi es ($\approx 2.838 \times 10^6 \text{ J/kg}$ pada 0°C), $\frac{dm}{dt}$ laju sublimasi, $T_s$ suhu produk pada antarmuka sublimasi, $T_b$ suhu rak (*shelf*), dan $R_p$ tahanan panas total produk (Meza-Galvan et al., 2026).

Tahanan panas total vial dapat didekomposisi menjadi komponen konduksi dan radiasi:

$$R_p = R_{c,bot} + R_{c,side} + R_{rad} = \frac{l}{k_{ice} \cdot A_{bot}} + \frac{l}{k_{ice} \cdot A_{side}} + \frac{1}{\sigma \cdot \epsilon \cdot (T_s^2 + T_b^2)(T_s + T_b)}$$

dengan $l$ adalah tebal lapisan kering, $k_{ice}$ konduktivitas termal es ($\approx 2,5 \text{ W/m·K}$), $\sigma$ konstanta Stefan-Boltzmann, dan $\epsilon$ emisivitas.

### 2.2 Model Jaringan Sensor Nirkabel (WSN)

Arsitektur WSN untuk liofilisasi mengikuti topologi **hybrid star-mesh**, di mana node sensor pada vial berkomunikasi dengan *gateway* melalui *cluster head*. Konsumsi energi transmisi mengikuti model **first-order radio**:

$$E_{tx}(k, d) = E_{elec} \cdot k + \epsilon_{amp} \cdot k \cdot d^n$$

di mana $k$ adalah jumlah bit data, $d$ jarak transmisi, $E_{elec}$ energi elektronik ($\approx 50 \text{ nJ/bit}$), $\epsilon_{amp}$ energi amplifier ($\approx 100 \text{ pJ/bit/m}^2$), dan $n$ adalah *path-loss exponent* (umumnya $n = 2$ dalam ruang vakum dengan rugi propagasi minimal).

Umur node baterai $T_{node}$ dapat diestimasi dengan:

$$T_{node} = \frac{E_{bat}}{P_{tx} \cdot \tau + P_{sleep} \cdot (1-\tau) + P_{sense}}$$

dengan $\tau$ *duty cycle* transmisi, $P_{tx}$ daya pancar ($\approx 0$–$10 \text{ mW}$ untuk protokol BLE 5.0), dan $P_{sense}$ daya sensor ($\approx 0,5 \text{ mW}$).

### 2.3 Estimasi State dengan Kalman Filter

Karena data WSN mengandung derau pengukuran $\sigma_{noise}^2 \approx 0,1$–$0,5$ K, diperlukan **Extended Kalman Filter (EKF)** untuk rekonstruksi profil suhu sublimasi:

$$\hat{x}_{k|k} = \hat{x}_{k|k-1} + K_k (z_k - H \hat{x}_{k|k-1})$$

dengan *gain* Kalman:

$$K_k = P_{k|k-1} H^T (H P_{k|k-1} H^T + R)^{-1}$$

Persamaan kovariansi state-update adalah $P_{k|k} = (I - K_k H) P_{k|k-1}$, di mana $R$ adalah kovariansi derau sensor dan $H$ adalah matriks observasi (Artusio et al., 2026).

### 2.4 Arrhenius Degradasi Produk

Untuk mengkuantifikasi dampak variasi suhu terhadap kualitas produk, digunakan laju degradasi Arrhenius:

$$k_{deg}(T) = A \cdot e^{-E_a/RT}$$

sehingga akumulasi degradasi total sepanjang proses adalah:

$$D_{total} = \int_0^{t_{total}} k_{deg}(T(t)) \, dt$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem WSN untuk Liofilisasi

Implementasi WSN mengikuti arsitektur berlapis sesuai rekomendasi Meza-Galvan et al. (2026):

**Layer 1 – Sensing Node (Vial-Level):**
- Termistor digital (akurasi $\pm 0,1$ K, rentang $-60$°C hingga $+60$°C)
- Sensor tekanan mini (*MEMS barometer*, resolusi 0,1 Pa)
- Transceiver BLE 5.0 dengan antena *chip-antenna* tersealisasi
- Baterai Li-polymer 3,7 V / 60 mAh (estimasi umur 14–21 hari untuk *duty cycle* 5%)

**Layer 2 – Cluster Head & Gateway:**
- Mikrokontroler ARM Cortex-M4 dengan *edge-computing*
- Akuisisi data via protokol MQTT ke *cloud historian*
- Penyimpanan lokal pada *flash memory* 16 MB (*black-box compliance* sesuai 21 CFR Part 11)

**Layer 3 – Analytics & Control:**
- Dashboard SCADA dengan visualisasi 3D *heat map* vial
- *Machine learning* untuk deteksi anomali proses (*autoencoder threshold*)
- Integrasi dengan sistem LIMS dan ERP

### 3.2 SOP Penempatan dan Kalibrasi Sensor

1. **Pra-penempatan:** Sensor dikalibrasi pada *triple point of water* (273,16 K) dan titik es CO₂ (194,65 K) dengan metode perbandingan NIST.
2. **Desain Eksperimen:** Penempatan mengikuti *central composite design* untuk menangkap variabilitas posisi *edge* (rak tepi) versus *center* (rak tengah), dengan minimum 16 sensor per rak.
3. **Validasi Pra-proses:** Uji kebocoran sinyal pada kondisi vakum 5 Pa selama 24 jam.
4. **Kalibrasi In-Process:** *Recalibration* otomatis menggunakan referensi internal pada setiap awal *batch*.
5. **Disposisi Pasca-proses:** Data diarsipkan selama minimal 7 tahun sesuai pedoman GMP.

### 3.3 Diagram Alir Logika Pengendalian

```
[Mulai Batch] → [Inisialisasi WSN] → [Verifikasi Node]
       ↓                                  ↓
[Loading Vials] ← [Pemetaan Posisi Sensor] ← [Auto-Discovery]
       ↓
[Fase Freezing] → [Monitoring Suhu Real-Time] → [Deteksi Hot/Cold Spot]
       ↓                                            ↓
[Fase Primary Drying] ← [Kontrol Ramp T_shelf] ← [EKF Estimasi T_sublimasi]
       ↓                                            ↓
[Fase Secondary Drying] → [Validasi Kadar Air] → [Audit Trail PAT]
       ↓
[End Batch + Data Archival]
```

### 3.4 Standar Kepatuhan

- **21 CFR Part 11** (FDA): integritas data, tanda tangan elektronik, *audit trail*.
- **EU GMP Annex 11**: validasi sistem terkomputerisasi.
- **ASTM E2503** tentang *Standard Practice for Qualification of Basket and Shelf Freeze Dryers*.
- **ISO 13485** untuk sistem manajemen kualitas perangkat medis terkait.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input

Sebuah fasilitas liofilisasi komersial untuk sediaan protein monoklonal dengan kapasitas 12.000 vial per siklus akan dievaluasi. Spesifikasi dan parameter operasional sebagai berikut:

| Parameter | Simbol | Nilai | Satuan |
|---|---|---|---|
| Jumlah vial per rak | $N_{rack}$ | 2.400 | vial |
| Diameter vial | $d_v$ | 22 | mm |
| Isi vial | $V_{fill}$ | 5 | mL |
| Tekanan chamber | $P_c$ | 10 | Pa |
| Suhu sublimasi target | $T_s$ | -35 | °C (238,15 K) |
| Suhu rak | $T_b$ | -10 | °C (263,15 K) |
| Entalpi sublimasi | $\Delta H_s$ | 2.838.000 | J/kg |
| Konsentrasi protein awal | $C_0$ | 50 | mg/mL |
| Energi aktivasi degradasi | $E_a$ | 85 | kJ/mol |

### 4.2 Perhitungan Laju Sublimasi

Tahanan panas dihitung dengan asumsi tebal lapisan kering $l = 5$ mm:

$$R_{c,bot} = \frac{0,005}{2,5 \cdot