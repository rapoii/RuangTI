# 2876 — Jaringan Sensor Nirkabel untuk Proses Liofilisasi Farmasi: Rekayasa Pemantauan Real-Time, PAT, dan Optimalisasi Siklus Freeze-Drying

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesifik:** Wireless Sensor Networks (WSN) untuk Liofilisasi (Freeze-Drying) Farmasi  
**Jurnal & Sitasi Utama:** Jesus Meza-Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Wireless Sensor Networks for Lyophilization*, dalam *Process Analytical Technology for Pharmaceutical Freeze-Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)  
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Emerging Technologies in Pharmaceutical Freeze-Drying*, dalam *Process Analytical Technology for Pharmaceutical Freeze-Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi atau *freeze-drying* merupakan proses unit operasi kritikal dalam industri biofarmasi yang digunakan untuk menstabilkan produk termolabil seperti protein monoklonal, vaksin mRNA, antibodi terapeutik, dan formulasi parenteral bernilai tinggi. Menurut Meza-Galvan *et al.* (2026, DOI: [10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)), lebih dari 50 % obat biologis baru yang disetujui FDA membutuhkan setidaknya satu tahap liofilisasi dalam rantai produksinya, dan nilai pasar global layanan Contract Development and Manufacturing Organization (CDMO) untuk liofilisasi melebihi USD 8 miliar pada tahun 2025. Sebuah batch produksi tipikal melibatkan 10.000–50.000 vial dengan nilai jual mencapai USD 3–5 juta per batch; oleh karena itu, setiap vial yang gagal konservasi (*batch failure*) mewakili kerugian langsung yang signifikan.

Permasalahan fundamental yang diidentifikasi oleh Meza-Galvan, Strongrich, dan Darwish adalah bahwa arsitektur instrumentasi liofilizer konvensional bersifat *hard-wired*, dengan termokopel (T-type) dan sensor tekanan (Pirani, kapasitif) yang dipasang secara tetap melalui port *chamber* ber-seal. Pendekatan ini memiliki keterbatasan spasial: hanya 1–4 vial termonitor dari total ribuan vial, sehingga variabilitas intra-batch tidak terukur secara langsung. Sebagai konsekuensinya, parameter konservatif (*over-processing*) sering diterapkan untuk menjamin *quality by design* (QbD), yang meningkatkan konsumsi energi hingga 30 % dan memperpanjang durasi siklus primer 6–10 jam per batch (Meza-Galvan et al., 2026).

Jaringan Sensor Nirkabel (*Wireless Sensor Networks* — WSN) muncul sebagai solusi transformatif. Sebagaimana dirangkum oleh Artusio, Barresi, dan Pisano (2026, DOI: [10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)), integrasi WSN ke dalam kerangka *Process Analytical Technology* (PAT) memungkinkan pemantauan *in-process* terhadap ratusan titik pengukuran secara simultan, mendukung umpan balik (*closed-loop control*), serta implementasi konsep *Design Space* yang didefinisikan oleh ICH Q8(R2). Kedua paper ini secara komplementer membahas arsitektur hardware, protokol komunikasi, dan aplikasi industri WSN dalam konteks freeze-drying farmasi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Perpindahan Panas pada Pengeringan Primer

Liofilisasi primer berlangsung dengan sublimasi es pada antarmuka produk. Perpindahan panas dari rak (*shelf*) ke vial mengikuti persamaan (Meza-Galvan et al., 2026):

$$Q_v = K_v \cdot A_v \cdot (T_s - T_b)$$

di mana $Q_v$ adalah laju aliran kalor ke vial (W), $K_v$ adalah koefisien perpindahan panas vial (W·m⁻²·K⁻¹, tipikal 8–15 untuk vial 10 mL), $A_v$ adalah luas penampang vial (m²), $T_s$ suhu rak (K), dan $T_b$ suhu produk pada antarmuka sublimasi (K).

### 2.2 Model Perpindahan Massa

Laju sublimasi mengikuti hukum beda tekanan antara tekanan uap es di antarmuka dan tekanan ruang:

$$\frac{dm}{dt} = \frac{(P_{ice}(T_b) - P_c)}{R_p + R_b}$$

dengan $P_{ice}(T_b)$ tekanan uap es di antarmuka sublimasi (Pa) yang dapat dihitung dari persamaan Clausius-Clapeyron, $P_c$ tekanan ruang (*chamber pressure*, Pa), $R_p$ resistansi produk (m·s·kg⁻¹), dan $R_b$ resistansi stopper vial (Meza-Galvan et al., 2026).

### 2.3 Model Termodinamika Sensor Nirkabel di Lingkungan Kriogenik

Konsumsi daya node sensor pada lingkungan suhu rendah dimodelkan dengan persamaan Arrhenius untuk kebocoran baterai:

$$\tau_{batt}(T) = \tau_0 \cdot \exp\left(\frac{E_a}{k_B}\left(\frac{1}{T_{ref}} - \frac{1}{T_{op}}\right)\right)$$

dengan $\tau_{batt}$ adalah umur baterai efektif pada suhu operasi $T_{op}$, $E_a$ energi aktivasi degradasi elektrolit (~0.6 eV untuk Li-SOCl₂), dan $k_B$ konstanta Boltzmann (Artusio et al., 2026).

### 2.4 Throughput dan Latency Jaringan

Untuk topologi star pada liofilizer dengan $N$ node sensor, *throughput* efektif dievaluasi dengan:

$$S_{eff} = \frac{N \cdot f_s \cdot b}{T_{slot} \cdot N_{slot}}$$

dengan $f_s$ frekuensi sampling (Hz), $b$ ukuran payload (byte), $T_{slot}$ durasi time-slot (s), dan $N_{slot}$ jumlah slot kanal.

---

## 3. Metodologi Rekayasa & SOP Implementasi WSN dalam Liofilisasi

Meza-Galvan, Strongrich, dan Darwish (2026) mengusulkan arsitektur lima lapis untuk integrasi WSN-PAT dalam liofilizer industri:

### SOP-01: Penempatan Node Sensor
1. Pilih vial sentinel pada posisi *edge*, *center*, dan *corner* setiap rak.
2. Masukkan node sensor (RTD presisi ±0.1 °C, pressure MEMS ±0.05 mbar) ke dalam vial terpilih tanpa mengganggu tutup parsial.
3. Validasi *range* radio pada kondisi *chamber* bertekanan rendah (sinyal RF atenuasi ~3–8 dB pada 2.4 GHz karena shielding logam).

### SOP-02: Konfigurasi Protokol Komunikasi
Gunakan protokol **IEEE 802.15.4/ZigBee** pada pita 2.4 GHz atau **LoRaWAN** pada 868/915 MHz dengan parameter: duty-cycle ≤1 %, *adaptive data rate*, dan time-synchronized channel hopping (TSCH). Gateway eksternal diletakkan di luar *chamber* melalui *feedthrough* hermetik.

### SOP-03: Akuisisi Data dan Sinkronisasi
Data dikirim dengan payload 16–32 byte per vial setiap 5–30 detik, di-aggregate di gateway, lalu diteruskan ke Historian (PI System) untuk analisis PAT.

### SOP-04: Validasi Kualifikasi (IQ/OQ/PQ)
Lakukan kualifikasi instalasi (IQ), operasional (OQ), dan performa (PQ) sesuai **ICH Q9** dan **21 CFR Part 11**, termasuk *traceability* melalui timestamp NTP/PTP dengan presisi ≤10 ms.

### SOP-05: Integrasi dengan Model-Based Control
Data suhu produk diumpankan ke model *Moving Boundary* (Mb-model) untuk prediksi akhir sublimasi dan *closed-loop* adjustment parameter $T_s$ dan $P_c$ (Artusio et al., 2026).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Batch liofilisasi 20.000 vial berisi 5 mL larutan protein (5 % w/v sukrosa + 1 mg/mL mAb) pada liofilizer industri skala produksi. Kita akan menghitung perbandingan siklus konservatif (tanpa WSN) versus siklus optimal berbasis WSN.

### Input Parameter

| Parameter | Nilai | Simbol |
|-----------|-------|--------|
| Jumlah vial | 20.000 | $N$ |
| Volume fill | 5 mL | $V_f$ |
| Konsentrasi solid | 5 % w/v | $c_s$ |
| $K_v$ vial | 12 W·m⁻²·K⁻¹ | $K_v$ |
| Luas penampang vial | 4.15×10⁻⁴ m² | $A_v$ |
| Tekanan ruang | 10 Pa | $P_c$ |
| Suhu rak | -10 °C (263 K) | $T_s$ |
| Suhu target produk | -25 °C (248 K) | $T_b$ |
| Energi listrik liofilizer | 25 kW | $P_{el}$ |

### Langkah 1: Laju Sublimasi per Vial

Tekanan uap es pada $T_b = 248$ K dihitung dengan persamaan Goff-Gratch:

$$P_{ice}(248\text{ K}) \approx 76.4 \text{ Pa}$$

Massa air yang harus disublimasikan per vial:

$$m_{ice} = V_f \cdot \rho_{water} \cdot (1 - c_s) = 5 \times 10^{-6} \times 1000 \times 0.95 = 4.75 \times 10^{-3} \text{ kg}$$

Laju sublimasi tunak dengan $R_p + R_b \approx 5{,}000$ m·s·kg⁻¹:

$$\frac{dm}{dt} = \frac{76.4 - 10}{5{,}000} = 1.328 \times 10^{-2} \text{ g/s per vial}$$

### Langkah 2: Durasi Pengeringan Primer Tanpa WSN (Konservatif)

Karena tanpa telemetry intra-batch, siklus dirancang dengan margin 25 %:

$$t_{primer,kons} = \frac{4.75 \text{ g}}{0.01328 \text{ g/s}} \times 1.25 = 446.8 \text{ s} \approx 7.45 \text{ jam}$$

### Langkah 3: Durasi Pengeringan Primer dengan WSN

WSN mendeteksi 95 % vial sudah kering pada $t_{WSN}$:

$$t_{primer,WSN} = \frac{4.75}{0.01328} = 357.6 \text{ s} \approx 5.96 \text{ jam}$$

### Langkah 4: Penghematan Energi dan Nilai Ekonomi

$$\Delta t = 7.45 - 5.96 = 1.49 \text{ jam}$$

$$\Delta E = P_{el} \cdot \Delta t = 25 \text{ kW} \times 1.49 \text{ h} = 37.25 \text{ kWh per batch}$$

Dengan tarif energi industri USD 0.12/kWh dan 240 batch/tahun:

$$\text{Penghematan} = 37.25 \times 240 \times 0.12 = \text{USD } 1.072 \text{ /tahun}$$

Ditambah reduksi *batch failure* dari 3 % menjadi 1.5 % (Meza-Galvan et al., 2026), penghematan total mencapai USD 8–12 juta/tahun pada fasilitas CDMO skala besar.

### Interpretasi Manajerial
Penerapan WSN-PAT tidak hanya meningkatkan efisiensi energi, tetapi juga mengubah *risk profile* produksi dari *reactive* menjadi *predictive*, memungkinkan *just-in-time* switching antara fase pengeringan dan operasi hulu (*fill-finish*).

---

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

### 5.1 Batasan Metodologis
Meza-Galvan et al. (2026) mengakui beberapa keterbatasan: (i.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
