# 2444 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Arsitektur PAT, Pemantauan Real-Time, dan Optimalisasi Siklus Freeze-Drying

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (*freeze-drying*) merupakan operasi unit kritis dalam manufaktur farmasi modern, khususnya untuk produk biologis, vaksin, antibiotik, dan API (Active Pharmaceutical Ingredients) yang tidak stabil dalam bentuk larutan cair. Proses ini menghilangkan air melalui sublimasi di bawah tekanan vakum, menghasilkan produk kering dengan stabilitas jangka panjang yang superior. Namun, kompleksitas termodinamika dan heterogenitas batch membuat liofilisasi menjadi salah satu proses dengan *yield loss* tertinggi di industri farmasi — estimasi kerugian akibat kegagalan batch secara global mencapai 20–30% dari total produksi untuk produk biologis bernilai tinggi (Meza‐Galvan, Strongrich, & Darwish, 2026, DOI: 10.1002/9783527850303.ch4).

Inisiatif *Process Analytical Technology* (PAT) yang dicanangkan FDA pada 2004 telah mengubah paradigma pengendalian mutu dari pendekatan *end-product testing* menjadi *real-time quality assurance*. Dalam konteks liofilisasi, hal ini berarti kebutuhan akan instrumentasi canggih yang mampu memonitor parameter kritis seperti suhu produk, tekanan ruang, dan laju sublimasi secara kontinu. Sistem instrumentasi konvensional — yang umumnya menggunakan termokopel berkabel (*wired thermocouples*) — memiliki keterbatasan fundamental: jumlah sensor terbatas (umumnya hanya 1–3 vial per batch yang dimonitor), risiko kontaminasi kabel terhadap vial, serta ketidakmampuan menangkap variabilitas antar-vial yang signifikan. Persis pada titik ini, *Wireless Sensor Networks* (WSN) muncul sebagai enabler teknologi yang diusulkan oleh Meza-Galvan et al. (2026) untuk menjawab keterbatasan tersebut.

Secara ekonomis, sebuah batch produk biologis bernilai USD 50.000–500.000, dan setiap vial yang gagal menurunkan *recovery rate* berdampak langsung pada margin operasional. Dengan implementasi WSN, monitoring dapat diperluas ke puluhan bahkan ratusan vial secara simultan, memungkinkan deteksi dini anomali proses dan intervensi berbasis data. Pendekatan ini juga selaras dengan kerangka *Quality by Design* (QbD) yang menuntut pemahaman mendalam tentang *Design Space* proses (Artusio, Barresi, & Pisano, 2026, DOI: 10.1002/9783527850303.ch11).

Urgensi teknis WSN dalam liofilisasi juga didorong oleh kenyataan bahwa profil suhu produk bervariasi signifikan antar-vial akibat perbedaan posisi dalam rak (*edge effect*), perbedaan resistansi vial, dan gradien termal pada *chamber wall*. Tanpa WSN, operator hanya memperoleh data sparse yang berpotensi memberikan kesimpulan keliru tentang kondisi seluruh batch.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Perpindahan Panas dan Massa pada Liofilisasi Primer

Selama fase *primary drying*, proses sublimasi es dikendalikan secara simultan oleh perpindahan panas dari rak ke vial dan perpindahan massa uap air dari *sublimation front* ke ruang vakum. Laju sublimasi $\dot{m}$ (kg/s) dapat dinyatakan sebagai:

$$\dot{m} = \frac{A \cdot (P_{ice,w}(T_b) - P_c)}{R_p}$$

di mana $A$ adalah luas penampang vial (m²), $P_{ice,w}(T_b)$ adalah tekanan uap air pada suhu *sublimation front* $T_b$ (Pa), $P_c$ adalah tekanan ruang (*chamber pressure*, Pa), dan $R_p$ adalah resistansi produk terhadap aliran uap (Pa·m²·s/kg).

Persamaan perpindahan panas dari rak ke produk diformulasikan sebagai:

$$Q = A_v K_v (T_s - T_b)$$

dengan $A_v$ luas vial, $K_v$ koefisien transfer panas vial (W/m²·K), dan $T_s$ suhu rak. Kombinasi kedua persamaan di atas menghasilkan hubungan *coupled* yang dapat diselesaikan secara iteratif untuk menentukan $T_b$ dan $\dot{m}$.

Resistansi produk tidak konstan selama siklus; umumnya meningkat seiring menipisnya lapisan kering karena jalur difusi uap semakin panjang. Model empiris yang banyak digunakan adalah:

$$R_p(t) = R_{p,0} + \frac{R_{p,1} \cdot m_{ice}(t)}{m_{ice,0}}$$

di mana $R_{p,0}$ dan $R_{p,1}$ adalah parameter empiris, $m_{ice}(t)$ adalah massa es tersisa pada waktu $t$, dan $m_{ice,0}$ adalah massa es awal.

### 2.2 Model Konsumsi Energi Jaringan Sensor Nirkabel

Arsitektur WSN untuk liofilisasi harus memenuhi kendala energi karena sensor beroperasi di lingkungan vakum dengan *battery* terbatas. Model konsumsi energi transmisi mengikuti formulasi *first-order radio energy*:

$$E_{TX}(k, d) = E_{elec} \cdot k + \epsilon_{amp} \cdot k \cdot d^n$$

dengan $k$ ukuran paket data (bit), $d$ jarak transmisi (m), $E_{elec}$ energi elektronik per bit (J/bit), $\epsilon_{amp}$ energi amplifier (J/bit/m² untuk $n=2$ *free-space*, atau J/bit/m⁴ untuk $n=4$ *multipath*), dan $n$ *path loss exponent*.

Konsumsi energi *receive*:

$$E_{RX}(k) = E_{elec} \cdot k$$

Total energi untuk satu siklus transmisi satu hop:

$$E_{node} = E_{TX} + E_{RX} + E_{sense} + E_{sleep}$$

### 2.3 Model Termodinamika Sensor pada Lingkungan Vakum

Sensor nirkabel di dalam ruang vakum liofilisasi harus beroperasi pada tekanan rendah (< 10 Pa untuk *primary drying*). Perpindahan panas antara sensor dan lingkungan berubah drastis karena konveksi gas hilang; hanya konduksi dan radiasi yang berperan:

$$Q_{sensor} = \epsilon \sigma A_{sensor}(T_{sensor}^4 - T_{env}^4) + k_{cond} A_{sensor} \frac{dT}{dx}$$

Implikasi langsungnya adalah respons termal sensor menjadi lebih lambat (*thermal lag*) dan kalibrasi menjadi krusial. Meza-Galvan et al. (2026) membahas secara detail algoritma kompensasi termal untuk menjaga akurasi pengukuran di bawah 0,5 °C.

### 2.4 Model Probabilistik untuk Deteksi Anomali Vial

Karena WSN memungkinkan monitoring banyak vial secara simultan, diperlukan pendekatan statistik untuk mengidentifikasi vial *outlier* yang menyimpang dari distribusi normal batch. Uji *Grubbs* untuk deteksi *outlier* tunggal:

$$G = \frac{\max_i |T_i - \bar{T}|}{s}$$

di mana $T_i$ adalah suhu vial ke-$i$, $\bar{T}$ rata-rata batch, dan $s$ simpangan baku sampel. Vial dengan $G > G_{critical,\alpha,n}$ dianggap anomali pada tingkat signifikansi $\alpha$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur WSN untuk Ruang Liofilisasi

Arsitektur yang diusulkan Meza-Galvan et al. (2026) mengikuti topologi *hybrid star-mesh* dengan tiga lapisan:

1. **Lapisan Sensor (Node Layer):** Puluhan hingga ratusan *mote* sensor miniaturized yang ditempatkan pada vial, masing-masing mengukur suhu produk, suhu vial bagian luar, dan kadang-kadang tekanan lokal. Sensor berkomunikasi melalui protokol *Bluetooth Low Energy* (BLE) atau *Zigbee* pada frekuensi 2,4 GHz.
2. **Lapisan Agregasi (Gateway Layer):** *Gateway* yang ditempatkan di dinding ruang vakum melalui *feedthrough* khusus, menerima transmisi nirkabel dan meneruskannya ke sistem akuisisi data.
3. **Lapisan Analitik (Cloud/Edge Layer):** Server yang melakukan *real-time analytics*, visualisasi, dan *closed-loop control* parameter proses.

### 3.2 SOP Implementasi WSN di Lini Produksi

| Tahap | Aktivitas | Output |
|-------|-----------|--------|
| 1. *Pre-cycle Calibration* | Kalibrasi setiap sensor pada tiga titik suhu (-40 °C, 0 °C, 25 °C) menggunakan *reference RTD* bersertifikat NIST | Sertifikat kalibrasi per sensor |
| 2. *Loading* | Penempatan vial pada rak dengan sensor terpasang sesuai protokol *Design of Experiments* | Peta posisi sensor |
| 3. *Freezing* | Aktivasi WSN, logging data suhu setiap 5 detik | Profil suhu freezing |
| 4. *Primary Drying* | Monitoring real-time $T_b$ vial individu, deteksi anomali otomatis | Dashboard PAT |
| 5. *Secondary Drying* | Monitoring $T_p$ dengan setpoint dinaikkan bertahap | Profil desorpsi |
| 6. *End-of-cycle* | Analisis post-batch, identifikasi vial *edge* vs *center* | Laporan variabilitas batch |

### 3.3 Diagram Alir Logika Pengendalian

```
[Sensor Node] → [BLE Transmit] → [Gateway]
       ↓                              ↓
[Local Buffer]              [Data Aggregator]
       ↓                              ↓
[Timestamp Sync] ← ← ← ← ← ← [Edge Processor]
                                      ↓
                          [Outlier Detection (Grubbs)]
                                      ↓
                          [Decision: Adjust Ts/Pc?]
                              ↓                    ↓
                         [YES]              [NO - Log Only]
                              ↓
                  [Send to PLC Controller]
                              ↓
                  [Closed-loop Update]
```

### 3.4 Integrasi dengan *Emerging Technologies*

Artusio, Barresi, dan Pisano (2026, DOI: 10.1002/9783527850303.ch11) menekankan bahwa WSN harus dipandang sebagai komponen dalam ekosistem PAT yang lebih luas, termasuk:

- **TDLAS (*Tunable Diode Laser Absorption Spectroscopy*):** Untuk pengukuran langsung konsentrasi uap air dalam ruang.
- **MTM (*Manometric Temperature Measurement*):** Menentukan $T_b$ vial tanpa sensor suhu.
- **Soft-sensor berbasis Machine Learning:** Mengestimasi parameter tak terukur dari data sensor yang tersedia.
- **Digital Twin:** Mengintegrasikan data WSN ke dalam model simulasi dinamika proses untuk prediksi *batch endpoint*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input

Studi kasus menggunakan vial 10 mR (Schott) dengan luas penampang dalam $A = 8,04 \times 10^{-4}$ m², diisi 3 mL larutan 5% sukrosa. Parameter proses:

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| $T_s$ (suhu rak) | -10 | °C |
| $P_c$ (tekanan ruang) | 10 | Pa |
| $K_v$ | 13 | W/m²·K |
| $R_{p,0}$ | 10000 | Pa·