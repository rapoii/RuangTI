# 2716 — Jaringan Sensor Nirkabel (WSN) untuk Pemantauan Proses Liofilisasi Farmasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi (freeze-drying) merupakan unit operasi kritis dalam manufaktur farmasi parenteral, khususnya untuk produk biologis, antibodi monoklonal, dan vaksin yang tidak stabil dalam larutan cair. Proses ini menghilangkan air melalui sublimasi di bawah tekanan vakum, mempertahankan integritas struktural molekul aktif. Menurut Meza-Galvan, Strongrich, dan Darwish (2026) dalam bab *Wireless Sensor Networks for Lyophilization* (DOI: [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)), satu batch liofilisasi produk biologis bernilai tinggi dapat mencapai nilai jual USD 5–50 juta, di mana satu lot gagal akibat deviasi suhu lebih dari 2 °C selama primary drying dapat menyebabkan kerugian total. Kerentanan ini diperparah oleh kenyataan bahwa hingga 30% batch biologis komersial pernah menunjukkan variasi antar-vial (vial-to-vial variability) yang tidak terdeteksi oleh thermocouple kabel konvensional yang hanya mengukur 3–5 vial dari total 10.000–50.000 vial dalam satu siklus (Artusio, Barresi, & Pisano, 2026, DOI: [10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)).

Inisiatif Process Analytical Technology (PAT) yang diterbitkan FDA sejak 2004 telah mendorong transisi paradigma dari *quality-by-testing* menjadi *quality-by-design* (QbD), di mana pemahaman real-time terhadap status proses menjadi prasyarat rilis produk secara parametric release. Dalam konteks ini, kemampuan memonitor suhu produk di setiap vial secara nirkabel menjadi keunggulan strategis yang secara langsung menurunkan tingkat rejeksi batch, mempercepat *time-to-release*, dan memenuhi pedoman ICH Q8(R2), Q9, Q10, dan Q12. Kompleksitas lingkungan liofilizer — tekanan 10–100 Pa, suhu -50 °C hingga +50 °C, interferensi elektromagnetik dari motor vakum, serta uap air sebagai media kondensasi — menuntut topologi sensor yang robust, hemat energi, dan mampu beroperasi pada rentang termal lebar. Dengan demikian, integrasi Wireless Sensor Networks (WSN) ke dalam arsitektur PAT bukan sekadar modernisasi instrumentasi, melainkan pilar fundamental bagi transformasi digital farmasi 4.0 dan pharma 5.0.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Sublimasi dan Laju Pengeringan Primer

Model pseudo-steady heat transfer untuk sublimasi pada vial mengasumsikan resistansi termal dominan di lapisan produk kering. Laju sublimasi per vial dapat dinyatakan sebagai:

$$\dot{m} = \frac{A_v \cdot (T_{sh} - T_b)}{\Delta H_s \cdot R_p}$$

dengan:
- $A_v$ = luas penampang dalam vial (m²)
- $T_{sh}$ = suhu shelf (K)
- $T_b$ = suhu interface sublimasi pada bagian bawah produk beku (K)
- $\Delta H_s$ = panas laten sublimasi es ≈ 2.838 MJ/kg
- $R_p$ = resistansi transfer massa produk kering (m²·Pa·s/kg)

Resistansi $R_p$ meningkat secara kuadratik terhadap ketebalan lapisan kering $l$ menurut $R_p = R_{p,0} + \alpha \cdot l^2$, dengan $R_{p,0}$ adalah resistansi awal dan $\alpha$ koefisien yang bergantung formulasi (Meza-Galvan et al., 2026).

### 2.2 Kesetimbangan Energi pada Shelf

Beban termal total chamber $Q_{total}$ terdiri atas sublimasi, radiasi dari dinding, dan konduksi melalui struktur:

$$Q_{total} = N_v \cdot \dot{m} \cdot \Delta H_s + h_{rad} \cdot A_{wall} \cdot (T_{wall} - T_{sh}) + k_{ins} \cdot A_{shelf} \cdot \frac{\Delta T_{ins}}{d_{ins}}$$

dengan $N_v$ adalah jumlah vial, $h_{rad}$ koefisien radiasi (orde 4–6 W/m²·K), dan $k_{ins}$ konduktivitas termal insulasi.

### 2.3 Arsitektur Protokol WSN

Setiap node sensor mengukur suhu vial $T_{vial}(t)$ menggunakan termistor NTC atau RTD Pt1000 dengan akurasi ±0,1 °C dan mengirim data melalui protokol IEEE 802.15.4/ZigBee/Thread pada pita 2,4 GHz. Konsumsi energi per transmisi mengikuti model:

$$E_{tx}(k, d) = E_{elec} \cdot k + \epsilon_{amp} \cdot k \cdot d^{n}$$

dengan $k$ = ukuran paket (bit), $d$ = jarak (m), $n$ = path loss exponent (2–3 dalam free space, 3–4 di dalam chamber stainless), $E_{elec}$ = 50 nJ/bit, dan $\epsilon_{amp}$ = 100 pJ/bit/m². Pada topologi mesh dengan $M$ router aktif, konsumsi total baterai $B$ selama satu siklus liofilisasi (72 jam) harus memenuhi:

$$B \geq \frac{M \cdot (E_{tx} + E_{rx} + E_{sense}) \cdot n_{samp}}{V_{batt}}$$

dengan $V_{batt}$ tegangan baterai (3,0–3,6 V) dan $n_{samp}$ jumlah sampel per siklus.

### 2.4 Metode Deteksi End-of-Primary-Drying (EOPD)

Perbandingan antara suhu produk $T_p$ dan suhu thermocouple adjacent $T_{tc}$ menghasilkan *Pirani vs. Capacitance (Pirani capacitance gauge)*, dengan EOPD terdeteksi ketika $dT_p/dt \to 0$. Secara matematis, titik EOPD didefinisikan ketika:

$$\left|\frac{dT_p}{dt}\right| \leq \epsilon_{crit} \quad \text{untuk} \quad \Delta t \geq 60 \text{ s}$$

dengan $\epsilon_{crit}$ = 0,05 °C/min. Data WSN yang dikumpulkan secara kontinu (1–10 Hz per node) memungkinkan deteksi ini per-vial, bukan hanya representasi rata-rata chamber (Artusio et al., 2026).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Sistem WSN untuk Liofilizer

Sistem mengikuti arsitektur berlapis empat (4-tier) sesuai rekomendasi Meza-Galvan et al. (2026):

1. **Tier 1 – Sensing Layer:** Termistor NTC atau RTD yang terintegrasi pada PCB miniatur (diameter ≤ 9 mm, tinggi ≤ 6 mm) agar muat dalam vial 2R–20R.
2. **Tier 2 – Network Layer:** Topologi *hybrid star-mesh*, dengan gateway nirkabel terpasang di dinding chamber (radio menembus kaca akrilik atau jendela viewport) dan router repeater terdistribusi di antara tray.
3. **Tier 3 – Edge Computing Layer:** Aggregator data melakukan filtering (Kalman/median filter), time-stamping (PTP/NTP), dan kompresi data sebelum diteruskan.
4. **Tier 4 – Cloud/On-Premise Analytics Layer:** Server menerima data melalui MQTT/OPC UA, melakukan perhitungan $R_p$, prediksi EOPD, dan integrasi ke LIMS/EBR (Electronic Batch Record).

### 3.2 SOP Pemasangan dan Kalibrasi

1. **Pra-kualifikasi IQ/OQ/PQ:** Validasi sistem sesuai GAMP 5 dan ASTM E2503 untuk kalibrasi suhu.
2. **Penempatan node:** Distribusi stratified random sampling — minimum 1 node per tray pada posisi corner, edge, dan center untuk menangkap gradien termal shelf.
3. **Kalibrasi dua titik (0 °C dan +40 °C)** menggunakan bath terkalibrasi NIST-traceable sebelum setiap batch; akurasi target ≤ ±0,3 °C.
4. **Sinkronisasi waktu** dengan presisi ≤ 100 ms menggunakan IEEE 1588 PTP.
5. **Pengujian packet loss:** Target < 1% selama siklus 72 jam pada kondisi vakum.
6. **Shutdown dan desorpsi:** Node yang menggunakan baterai LiSOCl₂ harus melalui prosedur hot-desoaking pada +40 °C selama 4 jam untuk mencegah degradasi elektronik.

### 3.3 Diagram Alir Keputusan PAT

```
START → Load Vial (dengan WSN node) → Freezing Ramp → 
  ↓
Primary Drying (Tekanan p, Suhu Shelf T_sh)
  ↓
WSN: Collect T_vial(t) tiap 30 s
  ↓
Real-time compute: R_p(t) dan EOPD
  ↓
[IF] EOPD terpenuhi → Trigger Secondary Drying
[ELSE] → Continue drying + alarm jika dT_p/dt > 0,5 °C/min
  ↓
Secondary Drying → End → Unload → Data Archival ke LIMS
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah fasilitas liofilisasi farmasi di Eropa memproduksi 20.000 vial 10R per batch produk antibodi monoklonal. Lyo memiliki 5 shelf dengan dimensi 1,2 m × 0,8 m. Diimplementasikan WSN dengan 50 node aktif (10 node per shelf).

**Parameter input:**
- $A_v$ untuk vial 10R = 4,15 × 10⁻⁴ m² (diameter dalam 14,75 mm)
- $T_{sh}$ = 293 K (+20 °C)
- $T_b$ rata-rata = 248 K (-25 °C)
- $R_{p,0}$ = 0,8 m²·Pa·s/kg, $\alpha$ = 1,7 × 10⁶ m·Pa·s/kg/m²
- $\Delta H_s$ = 2,838 MJ/kg
- $p_{chamber}$ = 10 Pa
- Durasi primary drying target = 38 jam

**Langkah 1 – Hitung ketebalan lapisan kering saat EOPD:**

Asumsikan $R_p$ final = 8,0 m²·Pa·s/kg, maka:

$$l = \sqrt{\frac{R_p - R_{p,0}}{\alpha}} = \sqrt{\frac{8{,}0 - 0{,}8}{1{,}7 \times 10^6}} = 2{,}12 \times 10^{-3} \text{ m} = 2{,}12 \text{ mm}$$

**Langkah 2 – Laju sublimasi awal (t = 0):**

$$\dot{m}_0 = \frac{4{,}15 \times 10^{-4} \cdot (293 - 248)}{2{,}838 \times 10^6 \cdot 0{,}8} = \frac{0{,}01868}{2{,}27 \times 10^6} = 8{,}23 \times 10^{-9} \text{ kg/s per vial}$$

**Langkah 3 – Total laju sublimasi batch:**

$$\dot{M}_{batch} = 20{,}000 \cdot 8{,}23 \times 10^{-9} = 1{,}646 \times 10^{-4} \text{ kg/s} = 0{,}593 \text{ kg/jam}$$

Untuk menghilangkan 0,1 g air per vial, total air = 2,0 kg. Dengan asumsi $R_p$ tumbuh secara non-linier, waktu rata-rata efektif ~38 jam.

**Langkah 4 – Konsumsi energi node WSN:**

Asumsikan satu paket = 64 byte = 512 bit, duty cycle sampling = 1 Hz, transmisi setiap 30 s, $d$ = 1,5 m dalam chamber, $n$ = 3 (loss inside chamber):

$$E_{tx} = 50 \times 10^{-9} \cdot 512 + 100 \times 10^{-12} \cdot 512 \cdot 1{,}5^3 = 2{,}56 \times 10^{-5} + 1{,}73 \times 10^{-7