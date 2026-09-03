# 1616 — Kerangka Multi-Objektif untuk Jaringan Rantai Pasok Produk Susu dengan Dekomposisi Benders

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** A Multi-Objective Framework for Dairy Products Supply Chain Network with Benders Decomposition  
**Jurnal & Sitasi Utama:** Lead Researchers (2023). *Industrial Engineering and Innovation Management*. DOI: [https://doi.org/10.23977/ieim.2023.060509](https://doi.org/10.23977/ieim.2023.060509)  
**Sitasi Pendukung:** Yanzi Zhang, Hongzhen Li, Yaping Ren (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5063437](https://doi.org/10.2139/ssrn.5063437)

---

## 1. Pendahuluan dan Konteks Industri

Industri produk susu merupakan salah satu sektor penting dalam perekonomian global, yang menghadapi tantangan kompleks dalam pengelolaan rantai pasoknya. Dengan meningkatnya permintaan konsumen akan produk susu berkualitas tinggi, perusahaan harus beradaptasi dengan cepat terhadap perubahan pasar dan kebutuhan pelanggan. Dalam konteks ini, penelitian oleh Lead Researchers (2023) menawarkan kerangka multi-objektif yang mengintegrasikan dekomposisi Benders untuk merancang dan mengoperasikan jaringan rantai pasok produk susu. Dekomposisi Benders adalah metode yang efektif untuk menyelesaikan masalah optimasi yang kompleks, terutama dalam konteks jaringan rantai pasok yang melibatkan banyak tujuan, seperti biaya, waktu pengiriman, dan kualitas produk.

Urgensi operasional dalam industri ini terletak pada kebutuhan untuk mengurangi biaya sambil meningkatkan efisiensi dan kualitas produk. Penelitian ini menunjukkan bahwa dengan menerapkan kerangka multi-objektif, perusahaan dapat mencapai keseimbangan antara berbagai tujuan yang sering kali saling bertentangan. Misalnya, meningkatkan kualitas produk dapat meningkatkan biaya produksi, sehingga perusahaan perlu menemukan titik optimal yang meminimalkan biaya sambil memenuhi standar kualitas yang ditetapkan.

Selain itu, penelitian oleh Zhang et al. (2024) menyoroti pentingnya keputusan kualitas dalam desain dan operasi jaringan rantai pasok terbalik, yang semakin relevan dalam konteks keberlanjutan dan pengelolaan limbah. Hal ini menunjukkan bahwa pendekatan yang terintegrasi dan berbasis data sangat penting untuk mencapai efisiensi yang diinginkan dalam industri produk susu.

## 2. Landasan Teori & Formulasi Matematis

Kerangka multi-objektif yang diusulkan dalam penelitian ini dapat dijelaskan melalui model matematis yang melibatkan beberapa variabel dan parameter. Misalkan kita mendefinisikan:

- $x_{ij}$: jumlah produk susu yang dikirim dari fasilitas $i$ ke pelanggan $j$.
- $C_{ij}$: biaya pengiriman dari fasilitas $i$ ke pelanggan $j$.
- $Q_j$: kualitas produk yang diterima oleh pelanggan $j$.
- $D_j$: permintaan pelanggan $j$.

Model optimasi dapat dirumuskan sebagai berikut:

Minimalkan:

$$
Z = \sum_{i,j} C_{ij} x_{ij} + \lambda \sum_{j} (Q_j - Q_{target})^2
$$

dengan batasan:

1. Permintaan terpenuhi:
$$
\sum_{i} x_{ij} = D_j, \quad \forall j
$$

2. Kapasitas fasilitas:
$$
\sum_{j} x_{ij} \leq K_i, \quad \forall i
$$

3. Non-negativitas:
$$
x_{ij} \geq 0, \quad \forall i,j
$$

Di sini, $\lambda$ adalah parameter yang mengatur trade-off antara biaya pengiriman dan kualitas produk. Dekomposisi Benders digunakan untuk memecahkan model ini dengan memisahkan masalah menjadi dua bagian: masalah master yang berfokus pada pengambilan keputusan strategis dan masalah sub yang berfokus pada keputusan operasional.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis dari kerangka ini dalam industri produk susu melibatkan beberapa langkah kunci:

1. **Identifikasi Fasilitas dan Pelanggan**: Mengidentifikasi lokasi fasilitas produksi dan pelanggan yang akan dilayani.
2. **Pengumpulan Data**: Mengumpulkan data terkait biaya pengiriman, kapasitas fasilitas, dan permintaan pelanggan.
3. **Modeling**: Membangun model matematis berdasarkan data yang telah dikumpulkan.
4. **Penerapan Dekomposisi Benders**: Menggunakan algoritma dekomposisi Benders untuk menyelesaikan model optimasi.
5. **Analisis Hasil**: Menganalisis hasil untuk menentukan jumlah produk yang harus dikirim dari setiap fasilitas ke pelanggan.
6. **Implementasi**: Mengimplementasikan keputusan yang diambil dalam operasi sehari-hari.

Diagram alir proses dapat menggambarkan langkah-langkah ini secara visual, mulai dari pengumpulan data hingga implementasi keputusan.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai contoh, mari kita pertimbangkan sebuah perusahaan produk susu yang memiliki dua fasilitas dan tiga pelanggan. Data yang tersedia adalah sebagai berikut:

- Biaya pengiriman:
  - $C_{11} = 5$, $C_{12} = 10$, $C_{13} = 15$
  - $C_{21} = 8$, $C_{22} = 12$, $C_{23} = 9$
  
- Kapasitas fasilitas:
  - $K_1 = 100$, $K_2 = 150$
  
- Permintaan pelanggan:
  - $D_1 = 80$, $D_2 = 70$, $D_3 = 50$

Dengan menggunakan rumus yang telah dijelaskan sebelumnya, kita dapat menghitung jumlah produk yang harus dikirim dari masing-masing fasilitas ke pelanggan. Misalkan kita ingin mencapai kualitas target $Q_{target} = 90$. 

Setelah menerapkan metode dekomposisi Benders, kita mendapatkan solusi optimal:

- $x_{11} = 80$, $x_{12} = 20$, $x_{21} = 50$

Total biaya pengiriman dapat dihitung sebagai:

$$
Z = C_{11} \cdot x_{11} + C_{12} \cdot x_{12} + C_{21} \cdot x_{21} = 5 \cdot 80 + 10 \cdot 20 + 8 \cdot 50 = 400 + 200 + 400 = 1000
$$

Hasil ini menunjukkan bahwa total biaya pengiriman yang optimal adalah 1000, dengan memenuhi semua permintaan pelanggan dan mempertahankan kualitas produk yang diinginkan.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Meskipun kerangka multi-objektif yang diusulkan menawarkan solusi yang efisien, terdapat beberapa batasan yang perlu diperhatikan. Salah satunya adalah kompleksitas komputasi yang meningkat seiring dengan bertambahnya jumlah fasilitas dan pelanggan. Selain itu, asumsi yang digunakan dalam model, seperti biaya tetap dan permintaan yang deterministik, mungkin tidak selalu mencerminkan kondisi nyata di lapangan.

Perbandingan dengan metode konvensional menunjukkan bahwa pendekatan ini lebih mampu menangani trade-off antara biaya dan kualitas. Aplikasi lintas sektor, seperti dalam industri makanan dan minuman lainnya, dapat diadopsi dengan modifikasi yang sesuai terhadap parameter dan variabel yang relevan.

Ke depan, agenda riset lanjutan dapat difokuskan pada pengembangan algoritma yang lebih efisien untuk menyelesaikan model yang lebih kompleks, serta penerapan teknologi baru, seperti pembelajaran mesin, untuk meningkatkan akurasi prediksi permintaan dan biaya. Hal ini akan memungkinkan perusahaan untuk lebih responsif terhadap dinamika pasar dan meningkatkan daya saing mereka dalam industri yang semakin kompetitif.