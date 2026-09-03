# 1692 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Integrasi Process Analytical Technology dalam Rekayasa Proses Pengeringan Beku

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi atau *freeze-drying* merupakan unit operasi kritis dalam industri farmasi bioteknologi, khususnya untuk formulasi protein, antibodi monoklonal, vaksin mRNA, dan produk biologis termolabil. Proses ini menghilangkan air melalui sublimasi pada kondisi vakum dan suhu rendah, mempertahankan stabilitas molekuler produk yang tidak dapat dicapai oleh metode pengeringan konvensional. Namun, kompleksitas termodinamika dan heterogenitas ruang prosesnya menjadikan liofilisasi sebagai salah satu proses dengan *batch failure rate* tertinggi di manufaktur farmasi—data historis industri menunjukkan tingkat kegagalan antara 5–15% akibat *collapse*, *meltback*, atau ketidakseragaman kadar air residu.

Meza-Galvan, Strongrich, dan Darwish (2026) dalam Chapter 4 buku *Process Analytical Technology for Pharmaceutical Freeze-Drying* menyoroti urgensi adopsi Wireless Sensor Networks (WSN) sebagai tulang punggung *in-process monitoring* yang sesuai dengan kerangka PAT (Process Analytical Technology) FDA dan inisiatif Quality by Design (QbD) ICH Q8(R2). Secara tradisional, sensor thermocouple dan Pirani gauge ditempatkan secara terbatas pada chamber dan shelves, memberikan resolusi spasial yang rendah. Padahal, gradien suhu antara vial pusat (*edge vial*) dan vial pinggir (*center vial*) pada rak berisi penuh dapat melebihi 8–12°C pada fase *primary drying*, secara langsung menentukan keseragaman batch. WSN dengan node terdistribusi memungkinkan pemetaan spasial (*spatial mapping*) kondisi proses secara real-time, menurunkan variabilitas dan mempercepat *release time*.

Dari perspektif ekonomi, siklus liofilisasi yang panjang (umumnya 48–96 jam per batch) menyumbang 30–45% total biaya produksi untuk produk biologis. Menurut Artusio, Barresi, dan Pisano (2026) dalam Chapter 11 buku yang sama, integrasi *smart sensors* dan algoritma *soft-sensing* berbasis model memungkinkan optimalisasi dinamis parameter proses (*dynamic cycle optimization*), mengurangi waktu *primary drying* hingga 20–40% tanpa mengorbankan kualitas. Dengan asumsi kapasitas satu lyo chamber industri 80 m² mampu memproses 100.000 vial per batch pada satu lini, reduksi 6 jam per batch berarti tambahan throughput tahunan signifikan.

Aspek rekayasa sistem industri dari WSN mencakup empat pilar: (1) arsitektur *hardware* sensor dengan keandalan tinggi di lingkungan vakum dan cryogenic; (2) protokol komunikasi nirkabel dengan latensi rendah dan keamanan data sesuai 21 CFR Part 11; (3) integrasi dengan Manufacturing Execution Systems (MES) dan LIMS; serta (4) analisis big data untuk *predictive maintenance* dan *process control* berbasis *machine learning*. Implementasi WSN juga harus mempertimbangkan Total Cost of Ownership (TCO) yang meliputi biaya sensor ($50–500 per node), gateway, kalibrasi periodik, dan validasi sesuai GMP. Tulisan ini mengupas dimensi-dimensi tersebut secara kuantitatif dengan landasan formula matematis dan studi kasus representatif.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Perpindahan Panas dan Massa pada Liofilisasi

Meza-Galvan et al. (2026) mengembangkan kerangka analitis yang menggabungkan model perpindahan panas vial-shingle dengan pembacaan sensor terdistribusi. Model *unsteady-state heat transfer* untuk satu vial pada rak mengikuti persamaan konduksi satu dimensi:

$$q = \frac{A_v (T_{shelf} - T_v)}{R_p + R_s}$$

di mana $q$ adalah laju aliran kalor (W), $A_v$ adalah luas penampang vial (m²), $T_{shelf}$ adalah suhu rak, $T_v$ adalah suhu produk di dasar vial, $R_p$ adalah resistansi termal produk yang ter-*freeze* (m²·K/W), dan $R_s$ adalah resistansi termal *stopper* dan celah vial. Resistansi produk diekspresikan oleh:

$$R_p = \frac{l_{dried}}{k_d} + \frac{l_{frozen}}{k_f}$$

dengan $l_{dried}$ dan $l_{frozen}$ masing-masing adalah tebal lapisan kering dan beku (m), serta $k_d \approx 0.025$ W/(m·K) dan $k_f \approx 2.2$ W/(m·K) adalah konduktivitas termal efektif.

### 2.2 Laju Sublimasi dan *Primary Drying*

Laju sublimasi dimodelkan melalui persamaan Hertz-Knudsen yang dimodifikasi dengan resistansi difusi *dried layer*:

$$\dot{m} = \frac{A_v (P_{w,i} - P_{w,c})}{R_d}$$

di mana $P_{w,i}$ adalah tekanan uap air pada antarmuka sublimasi (Pa), $P_{w,c}$ adalah tekanan parsial air di chamber (Pa), dan $R_d$ adalah resistansi difusi lapisan kering. Resistansi difusi tersebut berubah seiring waktu mengikuti:

$$R_d(t) = R_{d,0} + \int_0^t \frac{dl_d}{k_{diff}(T,P)}$$

dengan $k_{diff}$ adalah permeabilitas lapisan kering yang bergantung pada suhu dan tekanan total sesuai persamaan Pikal (1985).

### 2.3 Model Komunikasi Jaringan Sensor Nirkabel

Arsitektur WSN yang diusulkan Meza-Galvan et al. (2026) mengikuti topologi *mesh* dengan protokol IEEE 802.15.4e (TSCH) untuk jaminan deterministik. Konsumsi daya per node mengikuti model *first-order radio*:

$$E_{tx}(k,d) = k \cdot E_{elec} + k \cdot \epsilon_{fs} \cdot d^2$$

untuk jarak $d < d_0$, atau $E_{tx} = k(E_{elec} + \epsilon_{mp} \cdot d^4)$ untuk $d \geq d_0$. Kapasitas baterai harus memenuhi:

$$E_{battery} \geq N_{tx} \cdot E_{tx} + N_{rx} \cdot E_{rx} + T_{sleep} \cdot P_{sleep}$$

dengan parameter tipikal $E_{elec} = 50$ nJ/bit, $\epsilon_{fs} = 10$ pJ/bit/m², dan siklus *duty* 1% untuk aplikasi liofilisasi berdurasi multi-hari.

### 2.4 Model *Soft-Sensor* dan *State Estimation*

Untuk memodelkan *batch endpoint* secara prediktif, Artusio et al. (2026) mengusulkan pendekatan *Moving Horizon Estimation* (MHE) dengan persamaan状态更新:

$$\hat{x}_{k|k} = \arg\min_{x} \sum_{i=0}^{H-1} \|y_{k-i} - h(\hat{x}_{k-i})\|_Q^2 + \|w_{k-i}\|_R^2$$

di mana $\hat{x}$ adalah vektor状态 yang mencakup $l_d$, $T_i$, dan kadar air residu; $y$ adalah pembacaan sensor; dan $Q$, $R$ adalah matriks bobot kovariansi yang dikalibrasi dari data historis batch.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem WSN Liofilisasi

Sistem WSN untuk liofilisasi farmasi terdiri dari lima lapisan fungsional sesuai kerangka ISA-95:

1. **Lapisan Sensor Field:** Node nirkabel dengan thermocouple T-type (akurasi ±0.1°C) untuk suhu produk, sensor kapasitif untuk kelembapan residu, dan *pressure transducer* MEMS untuk tekanan vial.
2. **Lapisan Komunikasi:** Gateway nirkabel dengan *time-synchronized channel hopping* untuk menghindari interferensi dengan peralatan proses lain.
3. **Lapisan Edge Computing:** Agregasi data lokal dan *anomaly detection* sebelum transmisi.
4. **Lapisan MES/Cloud:** Penyimpanan historis, visualisasi *spatial heatmap*, dan integrasi dengan batch record elektronik.
5. **Lapisan Analitik:** Model *machine learning* untuk *predictive endpoint* dan *digital twin*.

### 3.2 Diagram Alir Implementasi SOP

```
[Pra-Batch: Kalibrasi Sensor] → [Loading Vial + Placement Node] → 
[Sealing & Leak Test] → [Freezing Ramp] → [Primary Drying] →
[Monitoring Real-time via WSN] → [Secondary Drying] →
[Endpoint Detection (Soft-Sensor)] → [Stoppering & Unloading] →
[Data Archival & Release Decision]
```

### 3.3 SOP Penempatan Sensor dan Validasi

Sesuai panduan Meza-Galvan et al. (2026), minimal 9 node per rak diperlukan untuk memetakan heterogenitas suhu secara representatif pada rak berisi ≥1000 vial. Penempatan mengikuti *central composite design*:

- 1 node di vial pusat (titik paling dingin)
- 4 node di vial pojok (titik paling panas/*edge effect*)
- 4 node di antara pojok dan pusat

Validasi mengikuti protokol IQ/OQ/PQ dengan:
- **IQ (Installation Qualification):** Verifikasi posisi node, kekuatan sinyal RSSI ≥ -75 dBm, dan daya tahan baterai ≥120 jam.
- **OQ (Operational Qualification):** Uji akurasi pembacaan terhadap *reference standard* (RTD platinum 100Ω) pada tiga titik suhu (-40°C, 0°C, +25°C), dengan deviasi maksimum ±0.5°C.
- **PQ (Performance Qualification):** Tiga batch konsistensi dengan *coefficient of variation* antar-vial ≤3%.

### 3.4 Kontrol Kualitas Data dan Cybersecurity

Mengacu pada Artusio et al. (2026), integrasi data WSN dengan *electronic batch record* harus menerapkan:
- Tanda tangan elektronik sesuai 21 CFR Part 11
- Enkripsi AES-256 untuk transmisi
- Audit trail immutable (*blockchain*-based opsional)
- *Role-based access control* untuk personel QC, QA, dan operator

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Proses Hipotetis

Studi kasus diambil dari formulasi antibodi monoklonal (mAb) pada konsentrasi 50 mg/mL dalam vial 20 mR, dengan parameter:

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Volume fill | 5.0 | mL |
| Shelf temperature $T_s$ | -5 | °C |
| Chamber pressure $P_c$ | 100 | mTorr (13.3 Pa) |
| Resistansi produk beku $R_f$ | 0.001 | m²·K/W |
| Resistansi stopper $R_s$ | 0.0005 | m²·K/W |
| Konduktivitas dried layer $k_d$ | 0.025 | W/(m·K) |
| Luas vial $A_v$ | $4.52 \times 10^{-4}$ | m² |
| Target tebal dried layer | 6.0 | mm |

### 4.2 Perhitungan Laju Sublimasi Awal

Menghitung $R_p$ pada awal *primary drying* ($l_{dried} \approx 0$):

$$R_p = \frac{0}{0.025} + \frac{l_{frozen}}{2.2} \approx \frac{0.006}{2.2} = 0.00273 \text{ m}^2\text{·K/W}$$

Total resistansi:
$$R_{tot} = R_p + R_s = 0.00273 + 0.0005 = 0.00323 \text{ m}^2\text{·K/W}$$

Laju aliran kalor:
$$q = \frac{(4.52 \times 10^{-4})((-5) - (-15))}{0.00323} = \frac{(4.52 \times 10^{-4})(10)}{0.00323} = 1.40 \text{ W}$$

Laju sublimasi per vial:
$$\dot{m} = \frac{q}{\Delta H_s} = \frac{1.40}{2800} = 5.0 \times 10^{-4} \text{ g/s} = 1.8 \text{ g/jam per vial}$$

di mana $\Delta H_s \approx 2800$ J/g adalah entalpi sublimasi es.

### 4.3 Estimasi Durasi Primary Drying

Massa air yang harus di-sublimasi per vial:
$$m_{air} = V \cdot \rho_{ice} \cdot c_{solid} = 5 \times 10^{-6} \cdot 0.917 \cdot 0.92 \approx 4.22 \times 10^{-6} \text{ kg} = 4.22 \text{ g}$$

Durasi teoritis dengan asumsi $\dot{m}$ konstan:
$$t_{drying} = \frac{4.22}{1.8} = 2.34 \text{ jam}$$

Namun, karena $R_d$ meningkat seiring pertumbuhan $l_d$, durasi riil dengan pendekatan kuadratik lebih akurat:
$$t_{drying} \approx \frac{l_d^2 \cdot
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
$
