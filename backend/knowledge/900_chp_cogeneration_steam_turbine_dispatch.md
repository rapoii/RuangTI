# 900 — Optimal Dispatch dalam Combined Heat and Power (CHP) Industrial Cogeneration: Perbandingan Turbin Uap Backpressure dan Ekstraksi-Kondensasi, Arbitrase Spark Spread, dan Efisiensi Pemanfaatan Bahan Bakar

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Combined Heat and Power (CHP) Industrial Cogeneration Optimal Dispatch: Backpressure vs Extraction-Condensing Steam Turbines, Spark Spread Arbitrage, and Fuel Utilization Efficiency  
**Standar & Referensi Utama:** Horlock (Cogeneration: Combined Heat and Power, Pergamon); IEEE Trans. Power Syst.; ASHRAE Combined Heat and Power Design Guide

---

## 1. Pendahuluan dan Konteks Industri

Dalam konteks industri modern, efisiensi energi menjadi salah satu fokus utama untuk meningkatkan daya saing dan keberlanjutan operasional. Combined Heat and Power (CHP) atau kogenerasi merupakan teknologi yang mengintegrasikan produksi listrik dan panas dari sumber energi yang sama, sehingga meningkatkan efisiensi pemanfaatan bahan bakar. Dalam sistem CHP, terdapat dua jenis turbin uap yang umum digunakan: turbin uap backpressure dan turbin uap ekstraksi-kondensasi. Pemilihan antara kedua jenis turbin ini sangat berpengaruh terhadap efisiensi operasional dan ekonomi dari sistem CHP.

Tantangan utama dalam implementasi sistem CHP di sektor industri adalah kebutuhan untuk mengoptimalkan dispatch energi, yang mencakup pertimbangan biaya, efisiensi, dan keberlanjutan. Dalam hal ini, arbitrase spark spread menjadi penting, di mana perbedaan antara harga listrik yang dihasilkan dan biaya bahan bakar digunakan untuk menentukan profitabilitas operasi. Selain itu, efisiensi pemanfaatan bahan bakar juga menjadi faktor kunci dalam menilai kinerja sistem CHP. Dengan meningkatnya regulasi terkait emisi dan keberlanjutan, industri dituntut untuk mengadopsi teknologi yang lebih efisien dan ramah lingkungan.

Literatur menunjukkan bahwa penerapan sistem CHP dapat mengurangi emisi CO2 hingga 30% dibandingkan dengan produksi energi terpisah (Horlock, 2022). Namun, tantangan teknis dan ekonomis dalam memilih konfigurasi yang tepat antara turbin backpressure dan ekstraksi-kondensasi masih menjadi perdebatan di kalangan praktisi dan peneliti. Oleh karena itu, pemahaman yang mendalam tentang mekanisme kerja kedua jenis turbin serta analisis kuantitatif dari performa mereka sangat diperlukan untuk pengambilan keputusan yang tepat dalam konteks industri.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Definisi Variabel dan Parameter

- \( P_e \): Daya listrik yang dihasilkan (kW)
- \( P_h \): Daya panas yang dihasilkan (kW)
- \( \eta_e \): Efisiensi konversi energi listrik
- \( \eta_h \): Efisiensi konversi energi panas
- \( Q \): Aliran panas (kW)
- \( F \): Aliran bahan bakar (kg/s)
- \( LHV \): Nilai kalor rendah bahan bakar (kJ/kg)
- \( C_f \): Biaya bahan bakar ($/kWh)
- \( C_e \): Harga jual listrik ($/kWh)

### 2.2. Rumus Dasar

1. **Efisiensi Sistem CHP**:
   $$ \eta_{CHP} = \frac{P_e + P_h}{F \cdot LHV} $$

2. **Arbitrase Spark Spread**:
   $$ SS = C_e - C_f \cdot \frac{LHV}{1000} $$

3. **Daya Listrik dan Panas untuk Turbin Backpressure**:
   $$ P_e = \eta_e \cdot \left( F \cdot LHV \right) $$
   $$ P_h = Q = (1 - \eta_e) \cdot (F \cdot LHV) $$

4. **Daya Listrik dan Panas untuk Turbin Ekstraksi-Kondensasi**:
   $$ P_e = \eta_e \cdot (F \cdot LHV) $$
   $$ P_h = \eta_h \cdot (F \cdot LHV) $$

### 2.3. Pembuktian Matematis

Untuk sistem CHP dengan turbin backpressure, efisiensi dapat dinyatakan sebagai:

$$ \eta_{CHP} = \frac{P_e + P_h}{F \cdot LHV} = \frac{\eta_e \cdot (F \cdot LHV) + (1 - \eta_e) \cdot (F \cdot LHV)}{F \cdot LHV} = 1 $$

Namun, dalam praktik, efisiensi tidak pernah mencapai 100% karena adanya kerugian dalam proses konversi energi. Oleh karena itu, analisis lebih lanjut diperlukan untuk menentukan kondisi optimal antara turbin backpressure dan ekstraksi-kondensasi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-Langkah Implementasi

1. **Analisis Kebutuhan Energi**: Identifikasi kebutuhan daya listrik dan panas dari proses industri.
2. **Pemilihan Teknologi**: Evaluasi antara turbin backpressure dan ekstraksi-kondensasi berdasarkan kebutuhan energi dan biaya.
3. **Perhitungan Ekonomi**: Hitung biaya investasi, biaya operasional, dan potensi penghematan energi.
4. **Simulasi dan Optimasi**: Gunakan perangkat lunak simulasi untuk memodelkan performa sistem CHP.
5. **Implementasi dan Monitoring**: Pasang sistem dan lakukan monitoring untuk evaluasi kinerja.

### 3.2. Diagram Alir Proses

```plaintext
[Analisis Kebutuhan Energi] --> [Pemilihan Teknologi] --> [Perhitungan Ekonomi] --> [Simulasi dan Optimasi] --> [Implementasi dan Monitoring]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Parameter Input

- \( F = 0.5 \, \text{kg/s} \)
- \( LHV = 42,000 \, \text{kJ/kg} \)
- \( C_f = 0.03 \, \text{\$/kWh} \)
- \( C_e = 0.08 \, \text{\$/kWh} \)
- \( \eta_e = 0.35 \)
- \( \eta_h = 0.45 \)

### 4.2. Perhitungan

1. **Efisiensi CHP**:
   $$ \eta_{CHP} = \frac{P_e + P_h}{F \cdot LHV} $$

   Dengan menghitung \( P_e \) dan \( P_h \):
   $$ P_e = 0.35 \cdot (0.5 \cdot 42000) = 7350 \, \text{W} $$
   $$ P_h = (1 - 0.35) \cdot (0.5 \cdot 42000) = 13650 \, \text{W} $$

   Maka,
   $$ \eta_{CHP} = \frac{7350 + 13650}{0.5 \cdot 42000} = \frac{21000}{21000} = 1 $$

2. **Arbitrase Spark Spread**:
   $$ SS = C_e - C_f \cdot \frac{LHV}{1000} = 0.08 - 0.03 \cdot 42 = 0.08 - 1.26 = -1.18 \, \text{\$} $$

### 4.3. Interpretasi Hasil

Dari perhitungan di atas, meskipun efisiensi sistem CHP mencapai 100% secara teoritis, dalam praktiknya, arbitrase spark spread menunjukkan kerugian, yang mengindikasikan bahwa biaya bahan bakar lebih tinggi daripada pendapatan dari penjualan listrik. Hal ini menunjukkan perlunya evaluasi lebih lanjut terhadap pemilihan teknologi dan optimasi operasional.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Sistem CHP tidak hanya relevan dalam sektor energi, tetapi juga memiliki aplikasi luas dalam rantai pasok dan manajemen biaya. Dalam konteks keberlanjutan, penerapan teknologi CHP dapat membantu perusahaan memenuhi standar K3 dan ESG dengan mengurangi emisi dan meningkatkan efisiensi energi. Namun, tantangan dalam hal investasi awal dan kompleksitas sistem tetap menjadi kendala.

Ke depan, penelitian lebih lanjut diperlukan untuk mengembangkan model optimasi yang lebih canggih, termasuk integrasi dengan sumber energi terbarukan dan teknologi penyimpanan energi. Selain itu, pengembangan standar industri yang lebih ketat dan insentif pemerintah dapat mendorong adopsi teknologi CHP di berbagai sektor industri.

Dengan demikian, pemahaman yang mendalam tentang mekanisme kerja dan analisis kuantitatif dari sistem CHP sangat penting untuk pengambilan keputusan yang tepat dalam konteks industri.$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
