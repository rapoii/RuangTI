# 833 — Optimasi Rantai Pasok Biomassa Pertanian Multi-Modal untuk Co-Firing Pembangkit Listrik: Ketidakpastian Panen Musiman, Ukuran Pra-perlakuan Torrefaksi, dan Integrasi GIS-MILP

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Multi-Modal Agricultural Biomass Supply Chain Optimization for Power Plant Co-Firing: Seasonal Harvest Uncertainty, Torrefaction Pre-treatment Sizing, and GIS-MILP Integration  
**Standar & Referensi Utama:** Rentizelas et al. (2022, Biomass Bioenergy); ISO 17225; Gold & Seuring (J. Clean. Prod.)

---

## 1. Pendahuluan dan Konteks Industri

Dalam konteks industri energi terbarukan, biomassa pertanian telah muncul sebagai sumber energi alternatif yang signifikan, terutama dalam upaya mengurangi ketergantungan pada bahan bakar fosil. Pembangkit listrik yang menerapkan co-firing biomassa dengan batubara dapat meningkatkan efisiensi dan mengurangi emisi karbon. Namun, tantangan utama dalam rantai pasok biomassa adalah ketidakpastian panen musiman yang disebabkan oleh faktor iklim, fluktuasi harga, dan variabilitas pasokan. Menurut Rentizelas et al. (2022), ketidakpastian ini dapat menyebabkan kesulitan dalam perencanaan dan pengelolaan rantai pasok, yang pada gilirannya mempengaruhi keberlanjutan operasional pembangkit listrik.

Optimasi rantai pasok biomassa pertanian memerlukan pendekatan yang komprehensif, termasuk ukuran pra-perlakuan torrefaksi yang tepat untuk meningkatkan kualitas biomassa dan memaksimalkan nilai energi. Torrefaksi adalah proses pemanasan biomassa pada suhu tinggi dalam kondisi anaerobik yang mengubah sifat fisik dan kimia biomassa, sehingga meningkatkan densitas energi dan mengurangi kelembapan. Integrasi Geographic Information System (GIS) dengan Mixed Integer Linear Programming (MILP) dapat memberikan solusi yang lebih baik dalam merencanakan dan mengelola rantai pasok biomassa, dengan mempertimbangkan lokasi geografis, infrastruktur, dan biaya transportasi.

Dengan demikian, penting untuk mengembangkan model matematis yang dapat menangani ketidakpastian ini dan memberikan solusi optimal untuk rantai pasok biomassa pertanian. Penelitian ini bertujuan untuk memberikan kerangka kerja yang sistematis dan terintegrasi untuk optimasi rantai pasok biomassa, yang dapat diterapkan di berbagai konteks industri.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Model Rantai Pasok Biomassa

Model rantai pasok biomassa dapat dinyatakan dalam bentuk fungsi tujuan dan kendala. Fungsi tujuan umumnya bertujuan untuk meminimalkan total biaya rantai pasok, yang mencakup biaya produksi, transportasi, dan penyimpanan. Fungsi tujuan dapat dirumuskan sebagai berikut:

$$
\text{Minimize } Z = \sum_{i=1}^{n} C_i + \sum_{j=1}^{m} T_j + \sum_{k=1}^{p} S_k
$$

di mana:
- \(C_i\) = biaya produksi untuk biomassa jenis \(i\)
- \(T_j\) = biaya transportasi dari lokasi \(j\)
- \(S_k\) = biaya penyimpanan untuk biomassa jenis \(k\)

### 2.2. Ketidakpastian Panen Musiman

Ketidakpastian panen dapat dimodelkan menggunakan distribusi probabilitas. Misalkan \(X\) adalah variabel acak yang merepresentasikan jumlah biomassa yang dipanen, maka kita dapat menggunakan distribusi normal:

$$
X \sim N(\mu, \sigma^2)
$$

di mana:
- \(\mu\) = rata-rata panen
- \(\sigma^2\) = varians panen

### 2.3. Ukuran Pra-perlakuan Torrefaksi

Ukuran pra-perlakuan torrefaksi dapat dihitung berdasarkan kebutuhan energi dan karakteristik biomassa. Energi yang diperlukan untuk proses torrefaksi dapat dinyatakan sebagai:

$$
E_t = m \cdot C_p \cdot \Delta T
$$

di mana:
- \(E_t\) = energi yang diperlukan untuk torrefaksi
- \(m\) = massa biomassa
- \(C_p\) = kapasitas panas spesifik biomassa
- \(\Delta T\) = perubahan suhu selama proses torrefaksi

### 2.4. Integrasi GIS dan MILP

Model GIS-MILP dapat digunakan untuk memetakan dan mengoptimalkan rute transportasi biomassa. Fungsi tujuan dalam model MILP dapat dinyatakan sebagai:

$$
\text{Minimize } Z = \sum_{i,j} c_{ij} x_{ij}
$$

dengan kendala:

$$
\sum_{j} x_{ij} \leq b_i \quad \forall i
$$

di mana:
- \(c_{ij}\) = biaya transportasi dari lokasi \(i\) ke lokasi \(j\)
- \(x_{ij}\) = jumlah biomassa yang dikirim dari lokasi \(i\) ke lokasi \(j\)
- \(b_i\) = kapasitas maksimum lokasi \(i\)

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-Langkah Implementasi

1. **Identifikasi Sumber Biomassa**: Melakukan survei untuk mengidentifikasi sumber biomassa pertanian yang tersedia.
2. **Pengumpulan Data**: Mengumpulkan data terkait panen, biaya, dan karakteristik biomassa.
3. **Modeling**: Mengembangkan model matematis menggunakan MILP untuk optimasi rantai pasok.
4. **Simulasi**: Menggunakan GIS untuk memetakan lokasi dan rute transportasi.
5. **Analisis Sensitivitas**: Melakukan analisis sensitivitas untuk memahami dampak ketidakpastian panen.
6. **Implementasi dan Monitoring**: Melaksanakan rencana yang dihasilkan dan memonitor kinerja rantai pasok.

### 3.2. Diagram Alir Proses

```plaintext
[Identifikasi Sumber Biomassa] --> [Pengumpulan Data] --> [Modeling] --> [Simulasi] --> [Analisis Sensitivitas] --> [Implementasi dan Monitoring]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Parameter Input

Misalkan kita memiliki data berikut untuk studi kasus:

- Rata-rata panen biomassa: \(\mu = 1000\) ton
- Varians panen: \(\sigma^2 = 100\) ton
- Biaya produksi per ton: \(C_i = 50\) USD
- Biaya transportasi per ton per kilometer: \(T_j = 0.1\) USD
- Jarak transportasi: 100 km
- Biaya penyimpanan per ton: \(S_k = 5\) USD

### 4.2. Langkah Kalkulasi

1. **Hitung Total Biaya Produksi**:
   $$C_{total} = C_i \cdot \mu = 50 \cdot 1000 = 50000 \text{ USD}$$

2. **Hitung Total Biaya Transportasi**:
   $$T_{total} = T_j \cdot \text{jarak} \cdot \mu = 0.1 \cdot 100 \cdot 1000 = 10000 \text{ USD}$$

3. **Hitung Total Biaya Penyimpanan**:
   $$S_{total} = S_k \cdot \mu = 5 \cdot 1000 = 5000 \text{ USD}$$

4. **Hitung Total Biaya Rantai Pasok**:
   $$Z = C_{total} + T_{total} + S_{total} = 50000 + 10000 + 5000 = 65000 \text{ USD}$$

### 4.3. Interpretasi Hasil

Total biaya rantai pasok biomassa untuk pembangkit listrik adalah 65,000 USD. Dengan menggunakan model ini, manajer dapat mengevaluasi dan merencanakan strategi untuk mengurangi biaya, seperti memilih lokasi penyimpanan yang lebih dekat atau meningkatkan efisiensi transportasi.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Optimasi rantai pasok biomassa tidak hanya relevan untuk sektor energi, tetapi juga dapat diterapkan dalam konteks pertanian berkelanjutan dan pengelolaan limbah. Integrasi teknologi otomasi dan sistem informasi dapat meningkatkan efisiensi operasional dan mengurangi biaya. Namun, tantangan tetap ada dalam hal ketidakpastian pasokan dan variabilitas harga.

Ke depan, penelitian lebih lanjut diperlukan untuk mengembangkan model yang lebih adaptif dan responsif terhadap perubahan kondisi pasar dan lingkungan. Penelitian ini harus mempertimbangkan aspek keberlanjutan dan dampak lingkungan, sesuai dengan standar K3 dan ESG yang semakin penting dalam industri modern.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
