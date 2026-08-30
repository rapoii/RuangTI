# 975 — Metrologi Partikel Udara Cleanroom Kelas ISO 1 hingga 5 untuk Semikonduktor: Rencana Sampling Statistik Berurutan ISO 14644-1/2, Kalibrasi Optical Particle Counter, dan Investigasi Out-of-Spec

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Semiconductor ISO Class 1 to 5 Cleanroom Airborne Particle Metrology: ISO 14644-1/2 Statistical Sequential Sampling Plan, Optical Particle Counter Calibration, and Out-of-Spec Investigation  
**Standar & Referensi Utama:** ISO 14644-1:2015 / ISO 14644-2:2015; Whyte (Cleanroom Technology: Fundamentals of Design, Testing and Operation, 2nd Ed., Wiley); SEMI E49

---

## 1. Pendahuluan dan Konteks Industri

Dalam industri semikonduktor, lingkungan bersih (cleanroom) merupakan elemen krusial yang mempengaruhi kualitas produk dan efisiensi proses produksi. Cleanroom Kelas ISO 1 hingga 5 dirancang untuk meminimalkan kontaminasi partikel yang dapat merusak komponen elektronik yang sangat sensitif. Dengan meningkatnya permintaan akan perangkat elektronik yang lebih kecil dan lebih kuat, tantangan dalam menjaga kebersihan lingkungan produksi semakin kompleks. 

Berdasarkan laporan dari SEMI, lebih dari 70% cacat dalam produksi semikonduktor disebabkan oleh kontaminasi partikel. Oleh karena itu, pemantauan dan pengendalian partikel udara menjadi sangat penting. ISO 14644-1 dan ISO 14644-2 memberikan kerangka kerja untuk pengukuran dan pengendalian partikel di cleanroom, yang mencakup rencana sampling statistik berurutan untuk memastikan bahwa lingkungan bersih memenuhi spesifikasi yang ditetapkan. 

Tantangan yang dihadapi dalam implementasi standar ini meliputi kebutuhan untuk kalibrasi alat ukur yang tepat, seperti Optical Particle Counter (OPC), serta investigasi ketika hasil pengukuran menunjukkan ketidaksesuaian (out-of-spec). Dalam konteks ini, pemahaman yang mendalam tentang metrologi partikel udara dan penerapan standar internasional sangat penting untuk menjaga integritas proses produksi dan memenuhi ekspektasi pelanggan.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Definisi dan Notasi

- **Cleanroom**: Ruang yang dirancang untuk mengontrol kontaminasi partikel, suhu, dan kelembapan.
- **Partikel Udara**: Partikel yang terdispersi dalam udara, yang dapat mempengaruhi kualitas produk.
- **Rencana Sampling Statistik Berurutan**: Metode untuk menentukan jumlah sampel yang diperlukan berdasarkan hasil pengukuran sebelumnya.

### 2.2. Rumus dan Pembuktian

Rencana sampling statistik berurutan dapat dinyatakan dengan menggunakan rumus berikut:

$$
n = \frac{Z^2 \cdot p \cdot (1-p)}{E^2}
$$

di mana:
- \( n \) = jumlah sampel yang diperlukan
- \( Z \) = nilai Z untuk tingkat kepercayaan yang diinginkan
- \( p \) = proporsi partikel yang diharapkan
- \( E \) = margin kesalahan yang dapat diterima

### 2.3. Kalibrasi Optical Particle Counter

Kalibrasi OPC dilakukan untuk memastikan akurasi pengukuran. Proses kalibrasi dapat dinyatakan dengan:

$$
C = \frac{N}{V}
$$

di mana:
- \( C \) = konsentrasi partikel (partikel/m³)
- \( N \) = jumlah partikel yang terdeteksi
- \( V \) = volume udara yang diuji (m³)

Kalibrasi harus dilakukan secara berkala dan sesuai dengan standar ISO 14644-2 untuk memastikan bahwa alat ukur berfungsi dengan baik.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Perencanaan Sampling**: Tentukan lokasi dan frekuensi pengambilan sampel berdasarkan layout cleanroom dan proses produksi.
2. **Kalibrasi Alat**: Lakukan kalibrasi OPC sesuai dengan standar ISO 14644-2.
3. **Pengambilan Sampel**: Ambil sampel udara menggunakan OPC pada interval yang ditentukan.
4. **Analisis Data**: Evaluasi hasil pengukuran untuk menentukan apakah memenuhi spesifikasi.
5. **Investigasi Out-of-Spec**: Jika hasil tidak memenuhi spesifikasi, lakukan analisis untuk mengidentifikasi sumber kontaminasi.

### 3.2. Diagram Alir Proses

```plaintext
[Perencanaan Sampling] --> [Kalibrasi Alat] --> [Pengambilan Sampel] --> [Analisis Data] --> [Investigasi Out-of-Spec]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan sebuah cleanroom Kelas ISO 5 memiliki volume 100 m³ dan diharapkan memiliki konsentrasi partikel tidak lebih dari 3 partikel/m³ untuk ukuran 0.5 µm.

### 4.2. Parameter Input

- Volume cleanroom, \( V = 100 \, m³ \)
- Konsentrasi maksimum, \( C_{max} = 3 \, partikel/m³ \)
- Tingkat kepercayaan, \( Z = 1.96 \) (95%)
- Proporsi partikel yang diharapkan, \( p = 0.05 \)
- Margin kesalahan, \( E = 0.01 \)

### 4.3. Perhitungan

1. Hitung jumlah sampel yang diperlukan:

$$
n = \frac{(1.96)^2 \cdot 0.05 \cdot (1-0.05)}{(0.01)^2} = \frac{3.8416 \cdot 0.05 \cdot 0.95}{0.0001} = 1820.4 \approx 1821
$$

2. Hitung konsentrasi partikel yang terdeteksi:

Misalkan OPC mendeteksi \( N = 250 \) partikel dalam pengambilan sampel.

$$
C = \frac{N}{V} = \frac{250}{100} = 2.5 \, partikel/m³
$$

### 4.4. Interpretasi Hasil

Hasil pengukuran menunjukkan bahwa konsentrasi partikel berada di bawah batas maksimum yang ditetapkan, sehingga cleanroom memenuhi spesifikasi. Namun, jika hasilnya lebih dari 3 partikel/m³, investigasi lebih lanjut diperlukan untuk mengidentifikasi sumber kontaminasi.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Metrologi partikel udara di cleanroom tidak hanya relevan dalam industri semikonduktor, tetapi juga memiliki aplikasi di sektor farmasi, bioteknologi, dan manufaktur elektronik lainnya. Dalam konteks rantai pasok, pengendalian kualitas yang ketat diperlukan untuk memastikan bahwa produk akhir memenuhi standar yang ditetapkan.

Keterkaitan dengan disiplin lain, seperti manajemen biaya dan teknik keselamatan (K3), juga sangat penting. Pengendalian kontaminasi dapat mengurangi biaya rework dan scrap, serta meningkatkan keselamatan kerja dengan mengurangi risiko paparan bahan berbahaya.

Di masa depan, penelitian dapat difokuskan pada pengembangan teknologi sensor yang lebih canggih dan otomatisasi dalam pengukuran partikel udara. Selain itu, integrasi sistem manajemen kualitas berbasis data dapat meningkatkan efisiensi dan responsivitas dalam pengendalian kualitas cleanroom.

Dengan demikian, pemahaman yang mendalam tentang metrologi partikel udara dan penerapan standar internasional akan terus menjadi kunci untuk keberhasilan industri yang bergantung pada lingkungan bersih.