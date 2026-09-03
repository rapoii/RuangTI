# 1041 — Analisis Jejak Karbon Rantai Pemasokan Berbasis AI untuk Pengurangan Emisi Scope 1-3

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Analisis Jejak Karbon Rantai Pemasokan Berbasis AI untuk Pengurangan Emisi Scope 1-3  
**Standar & Referensi Utama:** Smith, J. (2023). 'AI in Carbon Footprint Analysis'. IEEE Transactions on Industrial Informatics; ISO 14064-1:2018.

---

## 1. Pendahuluan dan Konteks Industri

Dalam era globalisasi dan peningkatan kesadaran akan perubahan iklim, analisis jejak karbon menjadi sangat penting bagi perusahaan di seluruh dunia. Jejak karbon merujuk pada total emisi gas rumah kaca (GRK) yang dihasilkan langsung maupun tidak langsung oleh aktivitas manusia, yang diukur dalam ekivalen karbon dioksida (CO2e). Dalam konteks rantai pasokan, emisi dapat dibagi menjadi tiga kategori atau "scope": 

- **Scope 1**: Emisi langsung dari sumber yang dimiliki atau dikendalikan oleh perusahaan.
- **Scope 2**: Emisi tidak langsung dari pembangkitan energi yang dibeli oleh perusahaan.
- **Scope 3**: Emisi tidak langsung yang terjadi dalam rantai nilai perusahaan, termasuk emisi dari pemasok dan penggunaan produk oleh konsumen.

Urgensi untuk mengurangi emisi ini tidak hanya terkait dengan kepatuhan terhadap regulasi lingkungan, tetapi juga dengan keuntungan kompetitif dan reputasi perusahaan. Menurut Smith (2023), perusahaan yang menerapkan teknologi kecerdasan buatan (AI) dalam analisis jejak karbon dapat mengidentifikasi sumber emisi secara lebih akurat dan efisien. Namun, tantangan yang dihadapi dalam implementasi ini meliputi kompleksitas data, integrasi sistem yang ada, dan kebutuhan untuk kolaborasi lintas departemen.

Dalam konteks manufaktur, tantangan ini semakin kompleks karena adanya kebutuhan untuk mengoptimalkan proses produksi sambil meminimalkan dampak lingkungan. Oleh karena itu, pendekatan berbasis AI dalam analisis jejak karbon menjadi sangat relevan untuk meningkatkan efisiensi operasional dan mencapai target keberlanjutan.

## 2. Landasan Teori & Formulasi Matematis

Analisis jejak karbon berbasis AI melibatkan beberapa model matematis yang digunakan untuk menghitung emisi GRK. Salah satu model yang umum digunakan adalah model input-output, yang dapat dinyatakan dengan persamaan berikut:

$$
E = \sum_{i=1}^{n} (x_i \cdot e_i)
$$

Di mana:
- \( E \) = total emisi GRK (CO2e)
- \( n \) = jumlah produk atau layanan
- \( x_i \) = jumlah unit produk \( i \) yang diproduksi
- \( e_i \) = emisi GRK per unit produk \( i \)

Untuk menghitung emisi Scope 3, kita perlu mempertimbangkan emisi dari seluruh rantai pasokan, yang dapat dirumuskan sebagai:

$$
E_{Scope 3} = \sum_{j=1}^{m} (S_j \cdot e_j)
$$

Di mana:
- \( E_{Scope 3} \) = total emisi Scope 3
- \( m \) = jumlah pemasok
- \( S_j \) = jumlah produk yang dibeli dari pemasok \( j \)
- \( e_j \) = emisi GRK per unit dari pemasok \( j \)

Model ini memungkinkan perusahaan untuk mengidentifikasi dan memprioritaskan area yang memerlukan perhatian dalam upaya pengurangan emisi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi analisis jejak karbon berbasis AI memerlukan pendekatan sistematis yang mencakup beberapa langkah berikut:

1. **Pengumpulan Data**: Mengumpulkan data terkait emisi dari berbagai sumber, termasuk data produksi, energi, dan transportasi.
2. **Analisis Data**: Menggunakan algoritma AI untuk menganalisis data yang dikumpulkan dan mengidentifikasi pola serta sumber emisi.
3. **Modeling**: Membangun model matematis untuk menghitung emisi berdasarkan data yang telah dianalisis.
4. **Optimasi**: Menggunakan hasil analisis untuk mengoptimalkan proses produksi dan rantai pasokan guna mengurangi emisi.
5. **Pelaporan**: Menyusun laporan emisi yang sesuai dengan standar ISO 14064-1:2018 untuk transparansi dan akuntabilitas.

Diagram alir proses dapat digambarkan sebagai berikut:

```
[Pengumpulan Data] --> [Analisis Data] --> [Modeling] --> [Optimasi] --> [Pelaporan]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai contoh, kita akan menghitung total emisi GRK dari sebuah perusahaan manufaktur yang memproduksi dua jenis produk, A dan B. Misalkan data berikut tersedia:

- Produk A: 
  - Jumlah unit diproduksi \( x_A = 1000 \)
  - Emisi per unit \( e_A = 2 \, \text{kg CO2e} \)

- Produk B:
  - Jumlah unit diproduksi \( x_B = 500 \)
  - Emisi per unit \( e_B = 3 \, \text{kg CO2e} \)

Menggunakan rumus yang telah disebutkan sebelumnya, kita dapat menghitung total emisi:

$$
E = (1000 \cdot 2) + (500 \cdot 3) = 2000 + 1500 = 3500 \, \text{kg CO2e}
$$

Selanjutnya, jika perusahaan memiliki dua pemasok dengan data sebagai berikut:

- Pemasok 1:
  - Jumlah produk yang dibeli \( S_1 = 200 \)
  - Emisi per unit \( e_1 = 5 \, \text{kg CO2e} \)

- Pemasok 2:
  - Jumlah produk yang dibeli \( S_2 = 300 \)
  - Emisi per unit \( e_2 = 4 \, \text{kg CO2e} \)

Total emisi Scope 3 dapat dihitung sebagai berikut:

$$
E_{Scope 3} = (200 \cdot 5) + (300 \cdot 4) = 1000 + 1200 = 2200 \, \text{kg CO2e}
$$

Dengan demikian, total emisi GRK perusahaan adalah:

$$
E_{total} = E + E_{Scope 3} = 3500 + 2200 = 5700 \, \text{kg CO2e}
$$

Interpretasi hasil ini menunjukkan bahwa perusahaan perlu fokus pada pengurangan emisi dari kedua produk dan pemasok untuk mencapai target keberlanjutan.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Analisis jejak karbon berbasis AI memiliki aplikasi yang luas di berbagai sektor, termasuk supply chain, otomasi, dan manajemen biaya. Dalam konteks supply chain, pendekatan ini dapat membantu perusahaan dalam mengidentifikasi pemasok yang memiliki jejak karbon tinggi dan mendorong mereka untuk mengadopsi praktik yang lebih berkelanjutan. Selain itu, integrasi teknologi otomasi dapat meningkatkan efisiensi operasional, yang pada gilirannya dapat mengurangi emisi.

Namun, terdapat beberapa batasan dalam metodologi ini, seperti ketergantungan pada kualitas data dan kompleksitas dalam integrasi sistem yang ada. Oleh karena itu, penelitian lebih lanjut diperlukan untuk mengembangkan algoritma AI yang lebih canggih dan sistem yang lebih terintegrasi.

Arah riset masa depan dapat mencakup pengembangan model prediktif yang lebih akurat dan penggunaan teknologi blockchain untuk meningkatkan transparansi dalam rantai pasokan. Dengan demikian, perusahaan dapat lebih efektif dalam mencapai target pengurangan emisi dan berkontribusi pada keberlanjutan lingkungan secara keseluruhan.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
