# 2979 — Deteksi Anomali Berbasis Citra pada Peralatan Industri Menggunakan Jaringan Saraf Konvolusional untuk Pemeliharaan Prediktif

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Image-Based Anomaly Detection in Industrial Equipment Using Convolutional Neural Networks for Predictive Maintenance  
**Jurnal & Sitasi Utama:** James Pearson (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.5266589](https://doi.org/10.2139/ssrn.5266589)  
**Sitasi Pendukung:** Rahul Patel, Sharad Bhartiya, Ravindra Gudi (2024). *IFAC-PapersOnLine*. DOI: [https://doi.org/10.1016/j.ifacol.2024.08.431](https://doi.org/10.1016/j.ifacol.2024.08.431)

---

## 1. Pendahuluan dan Konteks Industri

Dalam era industri 4.0, pemeliharaan prediktif menjadi semakin penting untuk meningkatkan efisiensi operasional dan mengurangi biaya pemeliharaan. Deteksi anomali berbasis citra menggunakan jaringan saraf konvolusional (CNN) merupakan salah satu pendekatan inovatif yang diusulkan oleh Pearson (2024) untuk mendeteksi kerusakan pada peralatan industri sebelum terjadi kegagalan yang lebih serius. Dalam konteks industri, kegagalan peralatan dapat menyebabkan downtime yang signifikan, yang berdampak pada produktivitas dan profitabilitas perusahaan. Oleh karena itu, penerapan teknologi deteksi anomali yang tepat waktu dapat membantu mengurangi risiko ini.

Pearson (2024) menekankan bahwa dengan menggunakan citra dari peralatan industri, CNN dapat dilatih untuk mengenali pola normal dan anomali, sehingga memungkinkan deteksi dini terhadap masalah yang mungkin timbul. Metode ini tidak hanya meningkatkan keandalan peralatan tetapi juga mengoptimalkan jadwal pemeliharaan, yang pada gilirannya dapat menghemat biaya operasional. Dalam konteks ini, penting untuk memahami bagaimana teknologi ini dapat diintegrasikan ke dalam sistem pemeliharaan yang ada dan bagaimana hasilnya dapat diukur secara kuantitatif.

Selain itu, Patel et al. (2024) menambahkan bahwa kontrol prediktif berbasis fisika yang diinformasikan oleh jaringan saraf juga dapat berkontribusi pada pengelolaan proses yang lebih baik, dengan memanfaatkan data historis dan model fisik untuk meningkatkan akurasi prediksi. Dengan menggabungkan kedua pendekatan ini, industri dapat mencapai efisiensi yang lebih tinggi dan mengurangi risiko kegagalan peralatan.

## 2. Landasan Teori & Formulasi Matematis

Deteksi anomali berbasis citra menggunakan CNN melibatkan beberapa langkah matematis yang penting. Pertama, citra input diubah menjadi representasi numerik yang dapat diproses oleh jaringan saraf. Proses ini melibatkan konvolusi, di mana filter (atau kernel) diterapkan pada citra untuk mengekstrak fitur-fitur penting.

Secara matematis, operasi konvolusi dapat dinyatakan sebagai:

$$
Y(i, j) = (X * K)(i, j) = \sum_m \sum_n X(m, n) K(i - m, j - n)
$$

di mana:
- \( Y(i, j) \) adalah hasil konvolusi pada posisi \( (i, j) \),
- \( X \) adalah citra input,
- \( K \) adalah kernel konvolusi.

Setelah fitur diekstraksi, langkah berikutnya adalah menerapkan fungsi aktivasi, seperti ReLU (Rectified Linear Unit), yang didefinisikan sebagai:

$$
f(x) = \max(0, x)
$$

Setelah beberapa lapisan konvolusi dan pooling, hasil akhir akan melalui lapisan fully connected untuk menghasilkan output berupa probabilitas klasifikasi anomali.

Dalam konteks pemeliharaan prediktif, model CNN ini dilatih menggunakan dataset citra yang berisi contoh peralatan dalam kondisi normal dan anomali. Fungsi loss yang umum digunakan adalah binary cross-entropy, yang didefinisikan sebagai:

$$
L(y, \hat{y}) = -\frac{1}{N} \sum_{i=1}^{N} \left[ y_i \log(\hat{y}_i) + (1 - y_i) \log(1 - \hat{y}_i) \right]
$$

di mana \( y \) adalah label sebenarnya dan \( \hat{y} \) adalah prediksi model.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem deteksi anomali berbasis citra di industri memerlukan langkah-langkah sistematis sebagai berikut:

1. **Pengumpulan Data**: Mengumpulkan citra dari peralatan industri dalam kondisi normal dan anomali.
2. **Preprocessing Data**: Melakukan augmentasi citra untuk meningkatkan variasi dataset, termasuk rotasi, flipping, dan normalisasi.
3. **Pelatihan Model**: Menggunakan dataset yang telah diproses untuk melatih model CNN dengan parameter yang dioptimalkan.
4. **Validasi Model**: Menggunakan dataset terpisah untuk menguji akurasi model dan melakukan tuning hyperparameter jika diperlukan.
5. **Implementasi di Lapangan**: Mengintegrasikan model ke dalam sistem pemeliharaan yang ada, dengan antarmuka pengguna untuk memudahkan monitoring.
6. **Monitoring dan Pemeliharaan Model**: Melakukan evaluasi berkala terhadap kinerja model dan memperbarui dataset serta model sesuai kebutuhan.

Diagram alir proses dapat digambarkan sebagai berikut:

```
[Pengumpulan Data] -> [Preprocessing Data] -> [Pelatihan Model] -> [Validasi Model] -> [Implementasi di Lapangan] -> [Monitoring dan Pemeliharaan Model]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai contoh, mari kita pertimbangkan sebuah pabrik yang menggunakan deteksi anomali untuk memonitor mesin pemotong. Misalkan kita memiliki dataset dengan 1000 citra normal dan 200 citra anomali. Setelah pelatihan, model CNN menghasilkan akurasi 95% pada dataset validasi.

### Input Parameter:
- Jumlah citra normal: 1000
- Jumlah citra anomali: 200
- Akurasi model: 95%

### Langkah Kalkulasi:
1. **Menghitung jumlah citra yang terdeteksi benar**:
   - Citra normal yang terdeteksi benar: \( 1000 \times 0.95 = 950 \)
   - Citra anomali yang terdeteksi benar: \( 200 \times 0.95 = 190 \)

2. **Menghitung total deteksi benar**:
   - Total deteksi benar: \( 950 + 190 = 1140 \)

3. **Menghitung total deteksi salah**:
   - Total citra: \( 1000 + 200 = 1200 \)
   - Total deteksi salah: \( 1200 - 1140 = 60 \)

### Interpretasi Hasil:
Dengan akurasi 95%, model dapat diandalkan untuk mendeteksi anomali dengan tingkat kesalahan yang rendah. Hal ini menunjukkan bahwa penerapan teknologi ini dapat mengurangi risiko kegagalan mesin dan meningkatkan efisiensi operasional.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Meskipun metode deteksi anomali berbasis citra menggunakan CNN menunjukkan hasil yang menjanjikan, terdapat beberapa batasan yang perlu diperhatikan. Salah satunya adalah kebutuhan akan dataset yang besar dan beragam untuk pelatihan yang efektif. Selain itu, model ini dapat terpengaruh oleh kualitas citra yang buruk atau kondisi pencahayaan yang tidak konsisten.

Dibandingkan dengan metode konvensional seperti analisis getaran atau suhu, pendekatan berbasis citra menawarkan keunggulan dalam hal visualisasi dan interpretasi data. Namun, integrasi kedua metode ini dapat memberikan hasil yang lebih komprehensif.

Aplikasi lintas sektor, seperti dalam industri otomotif, energi, dan manufaktur, menunjukkan potensi besar untuk meningkatkan efisiensi dan mengurangi biaya pemeliharaan. Ke depan, agenda riset lanjutan dapat difokuskan pada pengembangan algoritma yang lebih efisien dan adaptif, serta integrasi dengan teknologi IoT untuk pengumpulan data real-time.

Dengan demikian, deteksi anomali berbasis citra menggunakan CNN bukan hanya inovasi teknologi, tetapi juga langkah strategis menuju industri yang lebih cerdas dan efisien.