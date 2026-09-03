# 2956 — Jaringan Sensor Nirkabel untuk Liofilisasi Farmasi: Integrasi Process Analytical Technology dalam Rekayasa Sistem Manufaktur Biologis

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (*freeze-drying*) merupakan unit operasi kritis dalam manufaktur farmasi modern yang digunakan untuk menstabilkan produk biologis, vaksin, antibodi monoklonal, dan API (Active Pharmaceutical Ingredients) yang sensitif terhadap termal. Proses ini menghilangkan air dari produk beku melalui sublimasi (pengeringan primer) dan desorpsi (pengeringan sekunder), mempertahankan aktivitas hayati senyawa aktif yang tidak mampu bertahan pada metode pengeringan konvensional seperti pengeringan semprot atau evaporator. Menurut Meza‐Galvan, Strongrich, dan Darwish (2026), satu batch produk biologis bernilai komersial antara USD 1–5 juta, sementara total siklus proses mencapai 24–96 jam, sehingga setiap keputusan operasional harus berdasarkan data *real-time* yang memiliki akurasi dan keterulangan tinggi (DOI: [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)).

Secara historis, pemantauan proses liofilisasi bergantung pada termokopel T‐tipe berkabel (*wired thermocouples*) yang ditempatkan pada vial sampel representatif. Metode ini memiliki keterbatasan signifikan: pertama, kabel menciptakan konduksi termal parasitic yang mendistorsi pembacaan suhu produk sebenarnya; kedua, jumlah titik monitor maksimal terbatas pada 8–16 channel karena kompleksitas *feedthrough* ruang vakum; ketiga, *single‐point of failure* pada konektor dapat menyebabkan hilangnya data pada momen kritis. Artusio, Barresi, dan Pisano (2026) menegaskan bahwa paradigma *Quality by Design* (QbD) yang diamanatkan oleh ICH Q8(R2)/Q9/Q10 beserta inisiatif PAT (*Process Analytical Technology*) FDA sejak 2004 mensyaratkan *multivariate monitoring* dengan densitas sensor tinggi untuk mendukung *Design Space*, *Control Strategy*, dan rilis *real-time* (DOI: [10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)).

Urgensi penerapan Wireless Sensor Networks (WSN) menjadi semakin nyata ketika industri biofarmasi global—yang diproyeksikan mencapai USD 850 miliar pada 2028—menghadapi kompleksitas formulasi yang semakin tinggi (misalnya *mRNA therapeutics*, *gene therapy vectors*) yang memerlukan profil suhu produk yang sangat presisi. Pelanggaran terhadap *edge of failure*—di mana suhu produk melewati *collapse temperature* ($T_c$) atau *eutectic temperature*—dapat menyebabkan缺陷 struktural (*cake collapse*) yang menurunkan kemurnian, poten-si, dan stabilitas produk. WSN memberikan solusi *scalable*, *non-invasive*, dan *high‐density monitoring* yang menjawab keterbatasan instrumentasi konvensional. Investasi pada infrastruktur WSN untuk satu liofilizer skala produksi dilaporkan memiliki *payback period* 6–10 batch mengingat pengurangan *batch failure rate* sebesar 8–15% (Meza‐Galvan et al., 2026).

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Sublimasi dan Kinetika Pengeringan Primer

Mekanisme pengeringan primer pada liofilisasi dikendalikan oleh tiga resistansi utama: konduksi dari rak ke vial ($K_v$), resistansi sublimasi pada *interface* ($K_s$), dan konduksi produk beku. Model *quasi-steady state* Pikal yang diadopsi secara luas menyatakan laju sublimasi sebagai berikut:

$$\dot{m} = \frac{A_p \cdot K_v \cdot (T_s - T_p) - A_p \cdot K_s \cdot (T_p - T_c)}{\Delta H_s}$$

di mana $\dot{m}$ adalah laju sublimasi (kg/s), $A_p$ luas penampang vial (m²), $K_v$ koefisien transfer kalor vial (W/m²K), $K_s$ koefisien transfer massa sublimasi (kg/m²s·Pa), $T_s$ suhu rak, $T_p$ suhu produk pada *sublimation front*, $T_c$ suhu kondensor, dan $\Delta H_s$ entalpi sublimasi es (≈ 2.838 MJ/kg pada 0°C).

### 2.2 Resistansi Transfer Kalor Vial

Koefisien $K_v$ terdiri atas kontribusi konduksi gas pada tekanan ruang ($K_{v,gas}$) dan konduksi kontak padat antara vial dan rak ($K_{v,solid}$):

$$\frac{1}{K_v} = \frac{1}{K_{v,gas}} + \frac{1}{K_{v,solid}}$$

Tekanan ruang $P_c$ mengontrol rasio kontribusi tersebut. Pada tekanan rendah ($P_c < 0.1$ mbar), kontribusi kontak padat mendominasi sekitar 80–90%, sedangkan pada tekanan moderat ($P_c > 0.3$ mbar), konduksi gas menjadi dominan. Pemantauan $T_p$ secara akurat memungkinkan estimasi *real-time* nilai $\dot{m}$ dan prediksi waktu berakhirnya pengeringan primer.

### 2.3 Model Saluran Nirkabel (Path Loss)

Untuk jaringan sensor nirkabel dalam ruang vakum/suhu rendah, propagasi sinyal mengikuti model *log-distance path loss*:

$$PL(d) = PL(d_0) + 10n \log_{10}\left(\frac{d}{d_0}\right) + X_\sigma$$

di mana $PL(d_0)$ adalah path loss referensi pada jarak $d_0 = 1$ m (≈ 30–40 dB untuk frekuensi 2.4 GHz dalam lingkungan industri), $n$ adalah *path loss exponent* (2.0 dalam ruang terbuka, 3.0–4.0 dalam ruang dengan obstruksi logam), dan $X_\sigma$ adalah variansi *shadowing* (deviasi standar 4–8 dB).

### 2.4 Model Konsumsi Energi Node Sensor

Daya tahan baterai sensor node mengikuti persamaan:

$$E_{total} = I_{sleep} \cdot V \cdot t_{sleep} + I_{tx} \cdot V \cdot t_{tx} \cdot N_{tx}$$

di mana $I_{sleep}$ adalah arus saat *sleep mode* (µA), $I_{tx}$ arus saat transmisi (mA), $V$ tegangan operasi, dan $N_{tx}$ jumlah transmisi per siklus. Pemilihan protokol MAC (misalnya IEEE 802.15.4 dengan duty cycle < 1%) menjadi determinan kritis masa pakai baterai yang harus mencakup durasi satu batch penuh (24–96 jam).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Jaringan Sensor Nirkabel untuk Liofilisasi

Sistem WSN untuk liofilisasi yang dirancang Meza‐Galvan et al. (2026) mengintegrasikan empat lapisan fungsional:

**Lapisan 1 — Sensor Node (Mote):** Setiap *mote* berisi sensor suhu digital (akurasi ±0.1°C, rentang −80°C hingga +60°C), sensor tekanan mikroelektromekanis (MEMS, rentang 0.001–10 mbar), dan transceiver RF 2.4 GHz. Sensor ditempatkan dalam *capsule* stainless‐steel biocompatibel (diameter 10 mm) yang dimasukkan ke dalam vial sampel.

**Lapisan 2 — Cluster Head/Gateway:** Terletak pada dinding ruang vakum melalui *feedthrough* hermetik. Menerima transmisi *time‐division multiple access* (TDMA) dari seluruh *mote*, melakukan agregasi data.

**Lapisan 3 — Edge Computing:** Gateway lokal menjalankan algoritma *primary drying end-point detection* menggunakan *manometric temperature measurement* (MTM) dan *comparative pressure measurement* secara *real-time*.

**Lapisan 4 — Cloud/Supervisory Control:** Integrasi dengan Distributed Control System (DCS) melalui protokol OPC UA / MQTT untuk dokumentasi PAT sesuai 21 CFR Part 11.

### 3.2 SOP Deployment

```
[Pra-Batch]  → Kalibrasi sensor dalam inkubator referensi (-40°C hingga +40°C)
             → Pemeriksaan battery health (voltage > 3.2 V)
             → Sterilisasi capsule sensor (autoclave 121°C, 20 menit)
[Loading]    → Penempatan 24–48 sensor pada posisi stratified sampling
             → Aktivasi motes dan pairing dengan gateway
[Proses]     → Monitoring setiap 30 detik dengan duty cycle 0.5%
             → Validasi cross-correlation thermocouple referensi (±0.5°C)
[Post-Batch] → Auto-disinfection dengan VPHP (vaporized H2O2)
             → Data archival ke LIMS
```

### 3.3 Optimasi Penempatan Sensor

Strategi *stratified sampling* berdasarkan rekomendasi Artusio et al. (2026) memilih lokasi yang merepresentasikan zona *edge*, *center*, dan *shield* rak. Untuk rak berisi 200 vial, minimal 16 sensor dibutuhkan (4 *edge*, 8 *center*, 4 *shield*) untuk mendeteksi variabilitas termal dengan *power* statistik > 0.95.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input

Sebuah liofilizer industri производства dengan spesifikasi sebagai berikut:
- Kapasitas: 7 rak × 200 vial = 1.400 vial
- Diameter vial: 22 mm, tinggi 50 mm
- Formulasi: 5% (w/v) sukrosa + antibodi monoklonal (50 mg/mL)
- Volume *fill*: 3 mL per vial
- $T_s$ target: +25°C (pengeringan primer), +35°C (pengeringan sekunder)
- $P_c$ target: 0.1 mbar (pengeringan primer)
- $T_c$ kondensor: −80°C
- $\Delta H_s$ = 2.838 MJ/kg

### 4.2 Perhitungan Laju Sublimasi (Step-by-Step)

**Langkah 1 — Estimasi $K_v$:**
Untuk vial standar Schott pada $P_c$ = 0.1 mbar:

$$K_v \approx 8.5 \text{ W/m}^2\text{K}$$

**Langkah 2 — Estimasi $K_s$:**
Dengan suhu produk rata-rata $T_p$ = −25°C:

$$K_s = \frac{P_{ice}(T_p)}{\sqrt{\frac{2\pi RT_p}{M_{water}}}} \approx 1.2 \times 10^{-3} \text{ kg/m}^2\text{s·Pa}$$

**Langkah 3 — Hitung $\dot{m}$ per