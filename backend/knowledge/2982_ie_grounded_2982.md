# 2982 — Model Ketahanan untuk Logistik Rantai Dingin Produk Perishable

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products  
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)  
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Logistik rantai dingin merupakan aspek kritis dalam distribusi produk perishable, seperti makanan dan vaksin, yang memerlukan pengendalian suhu yang ketat untuk menjaga kualitas dan keamanan produk. Menurut Khurshid dan Siddiqui (2024), ketahanan dalam logistik rantai dingin sangat penting untuk mengurangi kerugian akibat kerusakan produk yang disebabkan oleh fluktuasi suhu dan gangguan dalam rantai pasok. Dalam konteks ini, pengembangan model ketahanan yang efektif dapat membantu perusahaan dalam merespons gangguan dan mempertahankan integritas produk.

Di sisi lain, Putra et al. (2024) menyoroti tantangan yang dihadapi oleh Dinas Kesehatan Kabupaten Siak dalam menjaga kualitas vaksin selama distribusi. Permasalahan utama yang dihadapi adalah kurangnya sistem pemantauan suhu secara real-time yang dapat memberikan peringatan kepada apoteker jika terjadi peningkatan suhu dalam cold chain box. Ini menunjukkan bahwa tanpa teknologi yang tepat, risiko kerusakan produk meningkat, yang dapat berdampak pada kesehatan masyarakat.

Urgensi untuk mengatasi masalah ini tidak hanya berkaitan dengan efisiensi operasional, tetapi juga dengan dampak ekonomi yang lebih luas. Kerugian akibat produk yang tidak layak konsumsi dapat menyebabkan kerugian finansial yang signifikan bagi perusahaan dan dapat mempengaruhi kepercayaan konsumen. Oleh karena itu, penelitian ini bertujuan untuk memberikan solusi yang dapat meningkatkan ketahanan logistik rantai dingin melalui penerapan teknologi dan model yang lebih baik.

## 2. Landasan Teori & Formulasi Matematis

Model ketahanan dalam logistik rantai dingin yang diusulkan oleh Khurshid dan Siddiqui (2024) mencakup beberapa variabel penting yang mempengaruhi kinerja sistem. Model ini dapat dinyatakan dalam bentuk matematis sebagai berikut:

1. **Variabel Utama:**
   - $T$: Suhu dalam cold chain box (°C)
   - $R$: Respon waktu terhadap gangguan (jam)
   - $Q$: Kualitas produk yang terjaga (skala 0-1)
   - $C$: Biaya kerugian akibat kerusakan produk ($)

2. **Fungsi Kualitas Produk:**
   $$ Q = f(T, R) = e^{-\alpha (T - T_{optimal})^2} \cdot e^{-\beta R} $$
   di mana $\alpha$ dan $\beta$ adalah konstanta yang menunjukkan sensitivitas terhadap suhu dan waktu respon.

3. **Biaya Kerugian:**
   $$ C = \gamma \cdot (1 - Q) $$
   di mana $\gamma$ adalah biaya per unit produk yang hilang.

Metodologi analitis yang diusulkan melibatkan simulasi untuk memprediksi dampak dari berbagai skenario gangguan pada suhu dan waktu respon. Dengan menggunakan model ini, perusahaan dapat mengidentifikasi titik kritis dalam rantai dingin dan merencanakan mitigasi yang diperlukan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem pemantauan suhu yang efektif dalam rantai dingin memerlukan langkah-langkah sistematis. Berdasarkan temuan dari Putra et al. (2024), berikut adalah langkah-langkah yang dapat diambil:

1. **Identifikasi Kebutuhan Sistem:**
   - Menentukan jenis produk dan suhu yang diperlukan.
   - Mengidentifikasi lokasi penyimpanan dan distribusi.

2. **Pemilihan Teknologi:**
   - Memilih sensor suhu yang tepat, seperti sensor DS18B20, yang dapat memberikan pembacaan suhu secara real-time.

3. **Pengembangan Sistem Pemantauan:**
   - Mengintegrasikan sensor dengan sistem manajemen data yang dapat memberikan peringatan kepada pengguna jika suhu melebihi batas yang ditentukan.

4. **Pelatihan Pengguna:**
   - Melatih apoteker dan staf terkait untuk menggunakan sistem pemantauan dan memahami prosedur tanggap darurat.

5. **Pengujian dan Validasi:**
   - Melakukan pengujian sistem untuk memastikan bahwa semua komponen berfungsi dengan baik dan dapat diandalkan.

Diagram alir proses implementasi dapat digambarkan sebagai berikut:

```
[Identifikasi Kebutuhan] --> [Pemilihan Teknologi] --> [Pengembangan Sistem] --> [Pelatihan Pengguna] --> [Pengujian dan Validasi]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk memberikan gambaran yang lebih jelas tentang penerapan model ketahanan, mari kita lakukan perhitungan numerik berdasarkan parameter yang relevan.

### Parameter Input:
- Suhu optimal vaksin: $T_{optimal} = 2°C$
- Suhu saat gangguan: $T = 8°C$
- Waktu respon terhadap gangguan: $R = 2$ jam
- Biaya per unit produk yang hilang: $\gamma = 100.000$ IDR

### Langkah Perhitungan:
1. Hitung kualitas produk ($Q$):
   - Misalkan $\alpha = 0.1$ dan $\beta = 0.05$.
   $$ Q = e^{-0.1(8 - 2)^2} \cdot e^{-0.05 \cdot 2} $$
   $$ Q = e^{-0.1 \cdot 36} \cdot e^{-0.1} $$
   $$ Q = e^{-3.6} \cdot e^{-0.1} \approx 0.0273 \cdot 0.9048 \approx 0.0247 $$

2. Hitung biaya kerugian ($C$):
   $$ C = 100.000 \cdot (1 - 0.0247) $$
   $$ C = 100.000 \cdot 0.9753 \approx 97.530 IDR $$

### Interpretasi Hasil:
Dari perhitungan di atas, dapat dilihat bahwa dengan suhu yang tidak optimal, kualitas vaksin menurun secara signifikan, yang mengakibatkan biaya kerugian yang hampir mencapai 97.530 IDR per unit. Ini menunjukkan pentingnya menjaga suhu dalam batas yang ditentukan untuk menghindari kerugian finansial.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Meskipun model ketahanan yang diusulkan oleh Khurshid dan Siddiqui (2024) memberikan kerangka kerja yang kuat untuk meningkatkan logistik rantai dingin, terdapat beberapa batasan yang perlu diperhatikan. Salah satunya adalah ketergantungan pada teknologi yang mungkin tidak selalu tersedia di semua lokasi, terutama di daerah terpencil. Selain itu, model ini lebih fokus pada aspek suhu dan waktu respon, sementara faktor lain seperti kelembapan dan kondisi transportasi juga dapat mempengaruhi kualitas produk.

Perbandingan dengan metode konvensional menunjukkan bahwa penerapan teknologi IoT dalam pemantauan suhu secara real-time dapat meningkatkan efisiensi dan responsivitas dalam rantai dingin. Aplikasi lintas sektor, seperti dalam distribusi makanan dan farmasi, menunjukkan bahwa pendekatan ini dapat diterapkan secara luas untuk meningkatkan ketahanan dan kualitas produk.

Agenda riset lanjutan dapat mencakup pengembangan model yang lebih komprehensif yang mempertimbangkan faktor-faktor lain yang mempengaruhi kualitas produk, serta eksplorasi teknologi baru yang dapat meningkatkan efisiensi operasional dalam rantai dingin. Dengan demikian, penelitian ini tidak hanya relevan untuk industri saat ini tetapi juga untuk masa depan yang lebih berkelanjutan dan efisien.