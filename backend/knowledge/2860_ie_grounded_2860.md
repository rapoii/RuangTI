# 2860 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Kerangka PAT, Pemantauan Real-Time, dan Optimasi Proses Freeze-Drying

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze-Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze-Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (*freeze-drying*) merupakan unit operasi kritis dalam industri biofarmasi yang mengubah larutan atau suspensi obat menjadi padatan kering melalui sublimasi air fase beku di bawah tekanan vakum. Proses ini terdiri atas tiga tahap berurutan — *freezing*, *primary drying* (sublimasi), dan *secondary drying* (desorpsi) — yang masing-masing memerlukan profil suhu produk dan tekanan ruang yang presisi agar kualitas obat (kemungkinan hayati, stabilitas, dan kemurnian) terjaga. Meza-Galvan, Strongrich, dan Darwish (2026) dalam Chapter 4 buku *Process Analytical Technology for Pharmaceutical Freeze-Drying* menyoroti bahwa variasi ±1–2 °C pada suhu produk sudah cukup untuk memicu *collapse* (keruntuhan struktur) atau *melt-back* pada vial berlapis protein, yang berdampak pada kerugian batch hingga ratusan ribu dolar AS per lot produksi (DOI: [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)).

Secara historis, pemantauan proses liofilisasi sangat bergantung pada *thermocouple* wired (TC) yang dipasang di satu atau dua vial representatif dalam batch berisi ribuan vial. Pendekatan ini memiliki tiga keterbatasan fundamental: (1) invasi fisik terhadap vial mengganggu dinamika sublimasi karena TC bertindak sebagai *heat sink* dan *nucleation site* tambahan; (2) cakupan spasial terbatas — informasi hanya tersedia pada titik diskret, sedangkan proses bersifat *batch-to-batch* dan *vial-to-vial* yang variabel; serta (3) kegagalan kalibrasi tunggal dapat menggagalkan validasi FDA *21 CFR Part 11*. Artusio, Barresi, dan Pisano (2026) menegaskan dalam Chapter 11 bahwa paradigma *Quality by Design* (QbD) yang diwajibkan FDA melalui pedoman PAT (2004) menuntut transformasi dari *off-line QC* menjadi *real-time release* (RTR), dan di sinilah Wireless Sensor Networks (WSN) mengambil peran strategis (DOI: [10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)).

Urgensi工业 penerapan WSN dalam liofilisasi didorong oleh tiga faktor konkuren. Pertama, **biaya kegagalan proses**: menurut estimasi industri, satu batch liofilisasi vaksin典型 bernilai USD 250.000–500.000, sehingga investasi sensor node pada orde USD 50–150 per unit memiliki ROI kurang dari satu tahun. Kedua, **regulasi**: inisiatif FDA PAT dan *Annex 1* EU GMP 2022 mensyaratkan *environmental monitoring* dan *process monitoring* berbasis risiko. Ketiga, **kompleksitas formulasi modern**: terapi biologi, mRNA, dan antibodi monoklonal memiliki *thermal footprint* yang sangat sempit, memerlukan gradien suhu produk kurang dari 3 °C sepanjang primary drying. Jaringan sensor nirkabel dengan densitas 50–200 node per liofilizer memungkinkan *spatial-temporal mapping* yang sebelumnya mustahil dilakukan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Mekanisme Perpindahan Panas dan Massa pada Vial

Model *heat-mass transfer* untuk satu vial selama primary drying mengikuti formulasi Pikal (1985) yang masih menjadi acuan standar industri. Laju sublimasi $\dot{m}$ melalui lapisan kering dapat dihitung dengan persamaan Darcy:

$$\dot{m} = \frac{A_p \cdot D_w'}{R \cdot T_p} \cdot \frac{P_{w,i} - P_{w,c}}{L_{dried}}$$

di mana $A_p$ adalah luas penampang vial, $D_w'$ koefisien difusivitas uap air efektif pada lapisan kering, $R$ konstanta gas universal, $T_p$ suhu produk, $P_{w,i}$ tekanan uap air pada *sublimation front* (interface), $P_{w,c}$ tekanan uap air pada *chamber*, dan $L_{dried}$ ketebalan lapisan kering yang tumbuh seiring waktu.

Fluks panas dari *shelf* ke vial mengikuti konduksi melalui gas pada tekanan rendah (Meza-Galvan et al., 2026):

$$q = A_v \cdot k_{eff} \cdot \frac{T_{shelf} - T_p}{L_{gap}}$$

dengan $k_{eff}$ konduktivitas termal efektif yang merupakan fungsi dari tekanan ruang, konduktivitas gas residual, dan geometri vial. Meza-Galvan et al. (2026) menekankan bahwa pada tekanan 100 mTorr, kontribusi perpindahan panas didominasi oleh *gas conduction* (≈70%) dan *vial wall conduction* (≈30%).

### 2.2. Model Kinetika Degradasi Produk

Stabilitas hayati produk selama proses mengikuti kinetika Arrhenius orde pertama yang dituliskan sebagai:

$$\frac{dC}{dt} = -k \cdot C, \quad \text{dimana} \quad k = A \cdot e^{-E_a/(R \cdot T_p)}$$

Variabel $E_a$ adalah *activation energy* (tipikal 60–100 kJ/mol untuk protein), $A$ faktor pra-eksponensial. Karena $T_p$ bervariasi secara spasial antar vial, integrasi numerik terhadap distribusi suhu menghasilkan estimasi *cumulative degradation*:

$$\text{Loss}\% = \left(1 - \frac{1}{N}\sum_{i=1}^{N} e^{- \int_0^{t_{end}} k[T_p^{(i)}(t)]\,dt}\right) \times 100\%$$

Formulasi ini memungkinkan *control room* menghitung prediksi kualitas vial per lokasi pada *shelf*, dan menjadi dasar keputusan untuk *cycle abortion* jika Loss% melampaui ambang batas QbD.

### 2.3. Model Saluran Nirkabel dan Konsumsi Energi Node

Arsitektur WSN untuk liofilizer mengikuti topologi *star-mesh hybrid* (Meza-Galvan et al., 2026). Path loss antar node dan gateway mengikuti model log-distance:

$$PL(d) = PL(d_0) + 10\,n\,\log_{10}\!\left(\frac{d}{d_0}\right) + X_\sigma$$

di mana $n$ adalah *path loss exponent* (2.0–2.8 dalam lingkungan chamber baja nirkabel-stainless), $d_0$ jarak referensi 1 m, dan $X_\sigma$ variabel Gaussian $\mathcal{N}(0, \sigma^2)$ dengan $\sigma = 3–7$ dJ. Pada frekuensi 2.4 GHz (IEEE 802.15.4/ZigBee), redaman tambahan oleh dinding stainless 3 mm mencapai 12–18 dJ sehingga desain antena dan placement gateway menjadi variabel kritis.

Konsumsi energi node sensor mengikuti model *first-order radio energy*:

$$E_{tx}(k, d) = \begin{cases} k \cdot E_{elec} + k \cdot \varepsilon_{fs} \cdot d^2, & d < d_0 \\ k \cdot E_{elec} + k \cdot \varepsilon_{mp} \cdot d^4, & d \geq d_0 \end{cases}$$

dengan $k$ ukuran paket (bit), $E_{elec}$ energi sirkuit elektronik, $\varepsilon_{fs}$ koefisien free-space, dan $\varepsilon_{mp}$ koefisien *multi-path fading*. Strategi *duty cycling* (sleep 99% waktu, wake 1% untuk transmisi) memungkinkan node beroperasi 7–14 hari pada baterai lithium 3.6 V/2400 mAh — memadai untuk satu siklus batch penuh.

### 2.4. Kalman Filter untuk State Estimation

Karena pengukuran thermocouple nirkabel mengandung derau (±0.3 °C pada ADC 16-bit), estimasi suhu produk menggunakan *Extended Kalman Filter* (EKF) yang menggabungkan model termodinamika dengan pengukuran:

$$\hat{x}_{k|k} = \hat{x}_{k|k-1} + K_k (z_k - H \hat{x}_{k|k-1})$$

dengan $K_k$ gain Kalman, $z_k$ pengukuran, dan $H$ matriks observasi. Artusio et al. (2026) menunjukkan bahwa EKF menurunkan *root-mean-square error* estimasi dari 1.8 °C (raw data) menjadi 0.4 °C pada kondisi chamber tipikal.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Penerapan WSN dalam liofilizer mengikuti SOP berlapis yang dimulai dari **fase desain** hingga **fase operasi rutin**. Tahapan berikut disusun berdasarkan protokol yang dilaporkan Meza-Galvan et al. (2026) dan diperkuat dengan rekomendasi Artusio et al. (2026) untuk integrasi dengan *machine learning*-based *soft sensors*.

### 3.1. Arsitektur Sistem

Arsitektur WSN liofilizer terdiri atas empat lapisan fungsional:

1. **Sensor Layer** — node nirkabel dengan *thermocouple* tipe T (Cu-CuNi, akurasi ±0.5 °C pada rentang -50 hingga 200 °C) atau *Resistance Temperature Detector* (RTD) Pt1000, terpasang di dinding luar vial (non-invasive) atau *stopper* (invasive, validated untuk vial khusus). Densitas tipikal 1 node per 10–20 vial pada studi pilot, atau 1 node per 50–100 vial pada *full-scale batch*.
3. **Communication Layer** — protokol IEEE 802.15.4 (ZigBee) atau Bluetooth Low Energy (BLE) 5.x untuk komunikasi *short-range*; sub-GHz LoRaWAN 868/915 MHz untuk *backhaul* ke SCADA/ Historian. Enkripsi AES-128 sesuai *21 CFR Part 11*.
5. **Edge Computing Layer** — gateway industri (mis. Advantech UNO-2484G) menjalankan EKF dan *batch analytics* secara *real-time*, menyimpan *time-stamped* data pada *buffered database* (InfluxDB/PI).
7. **Cloud/Application Layer** — dashboard web untuk *control room*, API untuk integrasi dengan *Manufacturing Execution System* (MES) dan *Quality Management System* (QMS).

### 3.2. Diagram Alir Implementasi SOP

```
[1] Site Survey & RF Mapping (pre-installation)
       │
       ▼
[2] Sensor Calibration (NIST-traceable, ±0.1 °C)
       │
       ▼
[3] Pilot Validation Run (1 batch, 50 node)
       │
       ▼
[4] Comparative Benchmark vs. Wired TC (paired t-test)
       │
       ▼
[5] IQ/OQ/PQ Documentation (GAMP 5 Category 4)
       │
       ▼
[6] Routine Production Monitoring (duty-cycle 1 Hz)
       │
       ▼
[7] End-of-Batch Analytics → PAT Review → Batch Release
```

### 3.3. Prosedur Kalibrasi dan Validasi

Meza-Galvan et al. (2026) menekankan tiga uji wajib: (a) *accuracy test* dengan *dry-block calibrator* pada tiga titik suhu (-30, 0, 25 °C); (b) *RF coverage test* dengan *spectrum analyzer* untuk memastikan RSSI > -85 dBm di seluruh *shelf*; dan (c) *battery life test* minimal 168 jam (1 minggu) pada *duty-cycle* produksi aktual. Hasil uji didokumentasikan dalam protokol IQ/OQ sesuai pedoman ISPE GAMP 5.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Parameter Kasus

Sebuah liofilizer industri ukuran menengah dengan spesifikasi berikut menjadi objek studi:

- **Luas shelf total:** $A_{total} = 12\,\text{m}^2$ (6 shelves, masing-masing 1 m × 2 m)
- **Jumlah vial:** $N_{vial} = 12{,}000$ vial @ 10 mL (vial kaca硼硅酸盐 24×60 mm)
- **Produk:** larutan protein monoklonal 50 mg/mL dalam formulasi sukrosa 5% w/v
- **Profil proses:** shelf -45 °C (freezing), -15 °C (primary drying), 25 °C (secondary drying); chamber pressure 100 mTorr
-