# 2783 — Redesign Keranjang Enema Kopi Menggunakan Metode Design for Manufacture and Assembly (DFMA)

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method  
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)  
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Dalam industri kesehatan dan wellness, penggunaan enema kopi telah mendapatkan perhatian sebagai metode detoksifikasi yang populer. Namun, desain dan manufaktur keranjang enema kopi sering kali menghadapi tantangan dalam hal efisiensi produksi dan kualitas produk. Penelitian oleh Amirullah dan Jakaria (2024) menyoroti pentingnya penerapan metode Design for Manufacture and Assembly (DFMA) dalam meredesain keranjang enema kopi untuk meningkatkan efisiensi dan efektivitas produksi. DFMA adalah pendekatan yang mengintegrasikan desain produk dengan proses manufaktur dan perakitan, sehingga dapat mengurangi biaya dan waktu produksi serta meningkatkan kualitas produk akhir.

Dalam konteks ini, urgensi operasional dan ekonomi sangat jelas. Dengan meningkatnya permintaan akan produk kesehatan yang berkualitas tinggi, produsen dituntut untuk tidak hanya memenuhi standar kualitas tetapi juga untuk melakukannya dengan cara yang lebih efisien. Penelitian ini menunjukkan bahwa dengan menerapkan prinsip-prinsip DFMA, keranjang enema kopi dapat dirancang ulang untuk mengurangi jumlah komponen, mempermudah proses perakitan, dan mengoptimalkan penggunaan material. Hal ini sejalan dengan temuan Islam (2024), yang mengemukakan bahwa integrasi DFMA dalam proses desain dapat meningkatkan keputusan desain dan mengurangi masalah buildability yang sering muncul dalam proyek konstruksi.

Dengan demikian, penerapan DFMA dalam desain keranjang enema kopi tidak hanya berkontribusi pada efisiensi produksi, tetapi juga pada peningkatan kualitas produk yang pada akhirnya dapat meningkatkan kepuasan pelanggan dan daya saing di pasar.

## 2. Landasan Teori & Formulasi Matematis

Metode DFMA berfokus pada dua aspek utama: desain untuk manufaktur dan desain untuk perakitan. Dalam konteks keranjang enema kopi, kita dapat merumuskan beberapa parameter kunci yang mempengaruhi efisiensi desain dan produksi. 

### 2.1. Desain untuk Manufaktur (DfM)

Desain untuk manufaktur bertujuan untuk meminimalkan biaya produksi dengan mempertimbangkan proses manufaktur yang akan digunakan. Beberapa variabel yang perlu diperhatikan dalam DfM adalah:

- **Biaya Material ($C_m$)**: Biaya yang dikeluarkan untuk material yang digunakan dalam pembuatan keranjang.
- **Biaya Proses ($C_p$)**: Biaya yang terkait dengan proses produksi, termasuk tenaga kerja dan mesin.
- **Jumlah Komponen ($N_c$)**: Jumlah komponen yang diperlukan dalam desain keranjang.

Rumus biaya total ($C_t$) dapat dinyatakan sebagai:

$$
C_t = C_m + C_p \cdot N_c
$$

### 2.2. Desain untuk Perakitan (DfA)

Desain untuk perakitan berfokus pada kemudahan perakitan produk. Beberapa parameter yang perlu diperhatikan dalam DfA adalah:

- **Waktu Perakitan ($T_a$)**: Waktu yang diperlukan untuk merakit keranjang.
- **Jumlah Langkah Perakitan ($N_s$)**: Jumlah langkah yang diperlukan untuk menyelesaikan perakitan.

Waktu total perakitan ($T_t$) dapat dinyatakan sebagai:

$$
T_t = T_a \cdot N_s
$$

### 2.3. Model Kuantitatif

Dengan menggabungkan kedua aspek di atas, kita dapat mengembangkan model kuantitatif untuk mengevaluasi desain keranjang enema kopi. Misalkan kita ingin meminimalkan biaya total dan waktu perakitan, kita dapat menggunakan fungsi tujuan sebagai berikut:

$$
\text{Minimize } Z = w_1 \cdot C_t + w_2 \cdot T_t
$$

di mana $w_1$ dan $w_2$ adalah bobot yang mencerminkan pentingnya biaya dan waktu dalam keputusan desain.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi DFMA dalam desain keranjang enema kopi melibatkan beberapa langkah sistematis yang dapat diuraikan sebagai berikut:

1. **Analisis Kebutuhan**: Mengidentifikasi kebutuhan pengguna dan spesifikasi produk.
2. **Desain Konseptual**: Mengembangkan beberapa alternatif desain keranjang enema kopi.
3. **Evaluasi Desain**: Menggunakan model kuantitatif untuk mengevaluasi alternatif desain berdasarkan biaya dan waktu.
4. **Prototyping**: Membuat prototipe dari desain terpilih untuk pengujian.
5. **Uji Coba dan Validasi**: Menguji prototipe untuk memastikan bahwa desain memenuhi spesifikasi dan kebutuhan pengguna.
6. **Produksi**: Mengimplementasikan desain akhir dalam proses produksi.

Diagram alir proses dapat digambarkan sebagai berikut:

```
Analisis Kebutuhan → Desain Konseptual → Evaluasi Desain → Prototyping → Uji Coba → Produksi
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai contoh, mari kita pertimbangkan desain keranjang enema kopi dengan parameter berikut:

- Biaya material ($C_m$): Rp 50.000
- Biaya proses ($C_p$): Rp 10.000 per komponen
- Jumlah komponen ($N_c$): 5
- Waktu perakitan ($T_a$): 15 menit
- Jumlah langkah perakitan ($N_s$): 4

### 4.1. Perhitungan Biaya Total

Menggunakan rumus biaya total:

$$
C_t = C_m + C_p \cdot N_c = 50.000 + 10.000 \cdot 5 = 100.000
$$

### 4.2. Perhitungan Waktu Total Perakitan

Menggunakan rumus waktu total perakitan:

$$
T_t = T_a \cdot N_s = 15 \cdot 4 = 60 \text{ menit}
$$

### 4.3. Evaluasi Desain

Dengan bobot $w_1 = 0.6$ dan $w_2 = 0.4$, kita dapat menghitung fungsi tujuan:

$$
Z = 0.6 \cdot 100.000 + 0.4 \cdot 60 = 60.000 + 24 = 60.024
$$

Hasil ini menunjukkan bahwa desain keranjang enema kopi yang diusulkan memiliki biaya dan waktu yang terintegrasi dengan baik, memberikan nilai tambah dalam proses produksi.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Meskipun penerapan DFMA dalam desain keranjang enema kopi menunjukkan hasil yang positif, terdapat beberapa batasan yang perlu diperhatikan. Salah satunya adalah ketergantungan pada data yang akurat untuk biaya dan waktu, yang dapat bervariasi tergantung pada kondisi nyata di lapangan. Selain itu, pendekatan ini mungkin tidak sepenuhnya mengatasi masalah buildability yang lebih kompleks dalam proyek konstruksi besar seperti yang diungkapkan oleh Islam (2024).

Namun, aplikasi DFMA tidak terbatas pada industri kesehatan. Metode ini dapat diterapkan di berbagai sektor, termasuk otomotif, elektronik, dan konstruksi, untuk meningkatkan efisiensi dan kualitas produk. Dengan semakin berkembangnya teknologi dan metode produksi, DFMA dapat terus beradaptasi dan menjadi standar dalam desain produk masa depan.

Agenda riset lanjutan dapat mencakup pengembangan alat bantu perangkat lunak untuk mendukung penerapan DFMA secara lebih luas, serta penelitian lebih lanjut tentang integrasi DFMA dengan teknologi baru seperti kecerdasan buatan dan analitik data besar untuk pengambilan keputusan yang lebih baik dalam desain dan manufaktur.

Dengan demikian, penerapan DFMA dalam desain keranjang enema kopi tidak hanya memberikan manfaat langsung bagi industri kesehatan, tetapi juga membuka peluang untuk inovasi dan efisiensi di berbagai sektor industri lainnya.