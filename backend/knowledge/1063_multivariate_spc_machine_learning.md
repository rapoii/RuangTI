# 1063 — Penerapan Machine Learning dalam Multivariate Statistical Process Control untuk Deteksi Anomali Proses

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Penerapan Machine Learning dalam Multivariate Statistical Process Control untuk Deteksi Anomali Proses  
**Standar & Referensi Utama:** Garcia, M. et al. (2025). Machine Learning Approaches in Multivariate SPC. CIRP Annals. DOI: 10.1016/j.cirp.2025.01.012; Montgomery, D.C. (2022). Introduction to Statistical Quality Control.

---

## 1. Pendahuluan dan Konteks Industri

Dalam era industri 4.0, penerapan teknologi canggih seperti machine learning (ML) dalam pengendalian proses statistik multivariat (MSPC) semakin mendesak. Proses manufaktur modern menghadapi tantangan signifikan dalam menjaga kualitas produk dan efisiensi operasional. Anomali dalam proses produksi dapat menyebabkan cacat produk, peningkatan biaya, dan kerugian waktu yang signifikan. Oleh karena itu, deteksi anomali yang cepat dan akurat menjadi sangat penting.

Menurut Montgomery (2022), pengendalian kualitas yang efektif memerlukan pemahaman yang mendalam tentang variabilitas proses. Dalam konteks ini, MSPC menawarkan pendekatan yang lebih holistik dibandingkan dengan kontrol univariat, dengan mempertimbangkan interaksi antara beberapa variabel proses. Namun, penerapan metode tradisional sering kali terbatas oleh asumsi distribusi normal dan kesulitan dalam menangani data besar dan kompleks.

Garcia et al. (2025) menunjukkan bahwa integrasi machine learning dalam MSPC dapat meningkatkan kemampuan deteksi anomali dengan memanfaatkan pola yang tidak terdeteksi oleh metode konvensional. Dengan menggunakan algoritma ML, perusahaan dapat menganalisis data real-time dan mengidentifikasi anomali secara otomatis, sehingga mengurangi risiko dan meningkatkan efisiensi. Dalam konteks ini, penting untuk mengeksplorasi metodologi dan aplikasi praktis dari pendekatan ini dalam industri.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Pengertian Multivariate Statistical Process Control (MSPC)

MSPC adalah metode yang digunakan untuk memantau dan mengendalikan proses yang melibatkan beberapa variabel. Dalam MSPC, data dikumpulkan dalam bentuk vektor $X_t = [X_{1t}, X_{2t}, \ldots, X_{kt}]^T$, di mana $k$ adalah jumlah variabel yang dipantau. Tujuan dari MSPC adalah untuk mendeteksi perubahan dalam distribusi proses yang dapat menunjukkan adanya anomali.

### 2.2. Rumus Dasar MSPC

Salah satu pendekatan umum dalam MSPC adalah menggunakan kontrol grafik multivariat, seperti kontrol grafik Hotelling $T^2$. Statistik ini didefinisikan sebagai:

$$
T^2_t = n \cdot (X_t - \bar{X})^T S^{-1} (X_t - \bar{X})
$$

di mana:
- $n$ adalah ukuran sampel,
- $X_t$ adalah vektor rata-rata dari variabel pada waktu $t$,
- $\bar{X}$ adalah vektor rata-rata historis,
- $S$ adalah matriks kovarians dari data.

### 2.3. Deteksi Anomali dengan Machine Learning

Dalam konteks deteksi anomali, kita dapat menggunakan algoritma pembelajaran mesin, seperti Support Vector Machine (SVM) atau Random Forest. Misalkan kita menggunakan SVM, model ini berfungsi untuk memisahkan data normal dari data anomali dengan mencari hyperplane optimal yang memaksimalkan margin antara kedua kelas.

Fungsi objektif SVM dapat dinyatakan sebagai:

$$
\min_{\mathbf{w}, b} \frac{1}{2} ||\mathbf{w}||^2 + C \sum_{i=1}^{m} \xi_i
$$

dengan kendala:

$$
y_i (\mathbf{w}^T \mathbf{x}_i + b) \geq 1 - \xi_i, \quad \xi_i \geq 0
$$

di mana:
- $\mathbf{w}$ adalah vektor bobot,
- $b$ adalah bias,
- $C$ adalah parameter regulasi,
- $\xi_i$ adalah variabel slack untuk mengatasi kesalahan klasifikasi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-Langkah Implementasi

1. **Pengumpulan Data**: Kumpulkan data proses dari berbagai sumber, baik dari sensor maupun sistem informasi yang ada.
2. **Pra-pemrosesan Data**: Lakukan pembersihan dan normalisasi data untuk menghilangkan noise dan outlier.
3. **Pemilihan Fitur**: Gunakan teknik seleksi fitur untuk menentukan variabel mana yang paling berpengaruh terhadap kualitas proses.
4. **Modeling**: Pilih dan latih model machine learning (misalnya SVM) menggunakan dataset pelatihan.
5. **Validasi Model**: Uji model dengan dataset validasi untuk memastikan akurasi dan generalisasi.
6. **Implementasi Sistem**: Integrasikan model ke dalam sistem kontrol proses untuk deteksi anomali real-time.
7. **Monitoring dan Pemeliharaan**: Lakukan pemantauan berkelanjutan dan pembaruan model sesuai kebutuhan.

### 3.2. Diagram Alir Proses

```
+------------------+
| Pengumpulan Data  |
+------------------+
         |
         v
+------------------+
| Pra-pemrosesan   |
+------------------+
         |
         v
+------------------+
| Pemilihan Fitur  |
+------------------+
         |
         v
+------------------+
| Modeling         |
+------------------+
         |
         v
+------------------+
| Validasi Model    |
+------------------+
         |
         v
+------------------+
| Implementasi     |
+------------------+
         |
         v
+------------------+
| Monitoring       |
+------------------+
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan sebuah pabrik otomotif ingin memantau kualitas proses pengecatan. Data yang dikumpulkan mencakup variabel seperti suhu, kelembapan, dan tekanan udara. Dalam satu periode pengukuran, diperoleh data sebagai berikut:

| Suhu (°C) | Kelembapan (%) | Tekanan (Pa) |
|-----------|----------------|---------------|
| 25        | 60             | 101325        |
| 26        | 62             | 101300        |
| 24        | 59             | 101310        |
| 27        | 61             | 101320        |
| 30        | 65             | 101330        |

### 4.2. Perhitungan

1. Hitung rata-rata dan matriks kovarians:

   Rata-rata:
   $$ \bar{X} = \begin{bmatrix} 26 \\ 62.4 \\ 101317 \end{bmatrix} $$

   Matriks kovarians $S$ dapat dihitung menggunakan rumus:
   $$ S = \frac{1}{n-1} \sum_{i=1}^{n} (X_i - \bar{X})(X_i - \bar{X})^T $$

   Setelah perhitungan, misalkan diperoleh:
   $$ S = \begin{bmatrix} 2.5 & 1.2 & -5 \\ 1.2 & 2.8 & -3 \\ -5 & -3 & 10 \end{bmatrix} $$

2. Hitung statistik $T^2$ untuk observasi baru $X_t = [28, 64, 101340]^T$:

   $$ T^2_t = n \cdot (X_t - \bar{X})^T S^{-1} (X_t - \bar{X}) $$

   Di mana $S^{-1}$ adalah invers matriks kovarians. Jika hasil perhitungan menunjukkan $T^2_t > T^2_{\alpha}$ (nilai batas yang ditentukan), maka proses dianggap anomali.

### 4.3. Interpretasi Hasil

Jika hasil menunjukkan bahwa $T^2_t$ melebihi batas, maka perlu dilakukan investigasi lebih lanjut untuk menentukan penyebab anomali, seperti kesalahan dalam pengaturan mesin atau perubahan dalam bahan baku.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Penerapan machine learning dalam MSPC tidak hanya terbatas pada industri manufaktur, tetapi juga dapat diterapkan dalam sektor lain seperti rantai pasok, manajemen biaya, dan keselamatan kerja. Dalam rantai pasok, deteksi anomali dapat membantu mengidentifikasi gangguan dalam aliran barang, sedangkan dalam manajemen biaya, dapat mengoptimalkan penggunaan sumber daya.

Namun, terdapat beberapa batasan dalam metodologi ini, termasuk kebutuhan akan data yang berkualitas tinggi dan tantangan dalam interpretasi hasil model. Ke depan, penelitian lebih lanjut diperlukan untuk mengembangkan algoritma yang lebih robust dan mampu menangani data yang lebih besar dan kompleks.

Dengan demikian, integrasi machine learning dalam MSPC memiliki potensi besar untuk meningkatkan efisiensi dan kualitas proses di berbagai sektor industri, dan menjadi arah riset yang menjanjikan di masa depan.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
