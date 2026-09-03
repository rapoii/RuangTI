# 1327 — Masalah Pemotongan Stok Stokastik dengan Fungsi Permintaan Non-Linier

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Stochastic Cutting Stock Problem with Non-Linear Demand Functions  
**Standar & Referensi Utama:** Baker, R., & Chen, Y. (2025). Cutting Stock Optimization Techniques. International Journal of Production Research, 63(7), 1950-1965. DOI:10.1080/00207543.2024.2034568.

---

## 1. Pendahuluan dan Konteks Industri

Dalam konteks industri modern, masalah pemotongan stok (cutting stock problem) menjadi semakin relevan, terutama dalam industri yang memproduksi barang dari bahan baku yang terbatas. Contoh nyata dapat ditemukan dalam industri kertas, tekstil, dan logam, di mana perusahaan harus memaksimalkan penggunaan bahan baku untuk memenuhi permintaan yang beragam. Permintaan yang tidak pasti dan sering kali bersifat stokastik menambah kompleksitas dalam perencanaan produksi. Oleh karena itu, pendekatan yang mempertimbangkan fungsi permintaan non-linier menjadi penting untuk meningkatkan efisiensi operasional dan mengurangi biaya.

Tantangan utama dalam pemotongan stok adalah bagaimana mengalokasikan bahan baku secara optimal untuk memenuhi permintaan yang bervariasi, sambil meminimalkan limbah. Dalam lingkungan manufaktur yang dinamis, perusahaan seringkali menghadapi fluktuasi permintaan yang tidak terduga, yang dapat mempengaruhi keputusan pemotongan dan pengadaan. Dengan mempertimbangkan fungsi permintaan non-linier, perusahaan dapat lebih baik memahami hubungan antara harga, permintaan, dan biaya, serta mengoptimalkan strategi pemotongan mereka.

Literatur menunjukkan bahwa pendekatan tradisional yang mengasumsikan permintaan linier sering kali tidak mencerminkan realitas pasar. Baker dan Chen (2025) menyoroti pentingnya teknik optimasi pemotongan yang lebih kompleks untuk menangani ketidakpastian permintaan dan memaksimalkan keuntungan. Dengan demikian, penelitian ini bertujuan untuk menyusun kerangka kerja yang sistematis untuk menyelesaikan masalah pemotongan stok stokastik dengan fungsi permintaan non-linier, yang dapat diterapkan dalam berbagai sektor industri.

## 2. Landasan Teori & Formulasi Matematis

Masalah pemotongan stok dapat dirumuskan sebagai berikut:

### Notasi
- $N$: jumlah jenis produk yang harus diproduksi.
- $L$: panjang bahan baku yang tersedia.
- $d_i$: permintaan untuk produk $i$.
- $c_i$: biaya pemotongan untuk produk $i$.
- $p_i$: harga jual untuk produk $i$.
- $x_i$: jumlah produk $i$ yang diproduksi.

### Fungsi Permintaan Non-Linier
Fungsi permintaan non-linier dapat dinyatakan sebagai:

$$
d_i = f(p_i) = a_i - b_i p_i^2
$$

di mana $a_i$ dan $b_i$ adalah parameter yang ditentukan berdasarkan analisis pasar.

### Fungsi Tujuan
Fungsi tujuan untuk memaksimalkan keuntungan total dapat ditulis sebagai:

$$
\max Z = \sum_{i=1}^{N} (p_i x_i - c_i x_i)
$$

### Kendala
Kendala utama dalam masalah ini adalah panjang bahan baku yang digunakan:

$$
\sum_{i=1}^{N} x_i \cdot l_i \leq L
$$

di mana $l_i$ adalah panjang produk $i$.

### Pembuktian
Untuk menyelesaikan masalah ini, kita dapat menggunakan metode pemrograman linier atau algoritma heuristik. Dengan mempertimbangkan fungsi permintaan non-linier, kita perlu melakukan analisis sensitivitas untuk menentukan bagaimana perubahan dalam harga akan mempengaruhi permintaan dan, pada gilirannya, keuntungan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### Langkah-Langkah Implementasi
1. **Identifikasi Permintaan**: Kumpulkan data permintaan historis dan analisis pasar untuk menentukan parameter $a_i$ dan $b_i$.
2. **Modelkan Fungsi Permintaan**: Gunakan regresi non-linier untuk memodelkan fungsi permintaan berdasarkan data yang dikumpulkan.
3. **Formulasi Model Matematika**: Susun model matematis berdasarkan rumus di atas.
4. **Pilih Metode Penyelesaian**: Tentukan metode yang akan digunakan, seperti pemrograman linier, pemrograman dinamis, atau algoritma genetika.
5. **Implementasi Model**: Gunakan perangkat lunak optimasi untuk menyelesaikan model dan mendapatkan solusi optimal.
6. **Analisis Hasil**: Evaluasi hasil dan lakukan analisis sensitivitas untuk memahami dampak perubahan parameter.

### Diagram Alir Proses
Diagram alir proses dapat menggambarkan langkah-langkah di atas, mulai dari pengumpulan data hingga evaluasi hasil, yang akan membantu dalam memahami alur kerja secara keseluruhan.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Contoh Kasus
Misalkan sebuah perusahaan kertas memiliki panjang bahan baku $L = 1000$ meter, dan memproduksi dua jenis produk dengan parameter sebagai berikut:

| Produk | Panjang ($l_i$) | Biaya Pemotongan ($c_i$) | Harga Jual ($p_i$) | Parameter $a_i$ | Parameter $b_i$ |
|--------|----------------|--------------------------|--------------------|------------------|------------------|
| 1      | 2              | 1                        | 5                  | 20               | 0.1              |
| 2      | 3              | 1.5                      | 6                  | 15               | 0.05             |

### Langkah Kalkulasi
1. **Hitung Permintaan**:
   - Untuk produk 1: 
   $$ d_1 = 20 - 0.1 p_1^2 $$
   - Untuk produk 2: 
   $$ d_2 = 15 - 0.05 p_2^2 $$

2. **Fungsi Tujuan**:
   $$ Z = (5 x_1 - 1 x_1) + (6 x_2 - 1.5 x_2) = 4 x_1 + 4.5 x_2 $$

3. **Kendala**:
   $$ 2 x_1 + 3 x_2 \leq 1000 $$

4. **Penyelesaian**: Menggunakan perangkat lunak optimasi, kita dapat menemukan nilai optimal untuk $x_1$ dan $x_2$.

### Interpretasi Hasil
Setelah mendapatkan nilai optimal, perusahaan dapat menentukan jumlah produk yang harus diproduksi untuk memaksimalkan keuntungan sambil mempertimbangkan batasan panjang bahan baku. Hasil ini juga dapat digunakan untuk merencanakan pengadaan bahan baku dan strategi pemasaran.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Masalah pemotongan stok dengan fungsi permintaan non-linier memiliki aplikasi yang luas tidak hanya dalam industri manufaktur, tetapi juga dalam rantai pasok, manajemen biaya, dan otomasi. Dalam konteks rantai pasok, pendekatan ini dapat membantu perusahaan dalam merencanakan pengadaan dan distribusi produk secara lebih efisien.

Namun, metodologi ini juga memiliki batasan, seperti asumsi bahwa parameter permintaan tetap konstan dalam jangka pendek, yang mungkin tidak selalu berlaku dalam kondisi pasar yang dinamis. Oleh karena itu, arah riset masa depan dapat difokuskan pada pengembangan model yang lebih adaptif dan responsif terhadap perubahan pasar, serta integrasi teknologi seperti kecerdasan buatan untuk memprediksi permintaan dengan lebih akurat.

Dengan demikian, penelitian lebih lanjut dalam bidang ini dapat memberikan kontribusi signifikan terhadap efisiensi operasional dan keberlanjutan dalam industri modern, sejalan dengan standar dan praktik terbaik yang ditetapkan oleh organisasi internasional.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
