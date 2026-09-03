# 1383 — Prognostics and Health Management Berbasis Pembelajaran Mendalam untuk Prediksi Kinerja Mesin dalam Sistem Manufaktur

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Prognostics and Health Management Berbasis Pembelajaran Mendalam untuk Prediksi Kinerja Mesin dalam Sistem Manufaktur  
**Standar & Referensi Utama:** Chen, T., & Wang, Y. (2026). 'Deep Learning for PHM in Manufacturing'. CIRP Annals. IEEE Transactions on Reliability.

---

## 1. Pendahuluan dan Konteks Industri

Dalam era industri 4.0, perusahaan manufaktur dihadapkan pada tantangan yang semakin kompleks, termasuk kebutuhan untuk meningkatkan efisiensi operasional, mengurangi downtime, dan meminimalkan biaya pemeliharaan. Prognostics and Health Management (PHM) berbasis pembelajaran mendalam (deep learning) menawarkan pendekatan inovatif untuk memprediksi kinerja mesin, yang pada gilirannya dapat meningkatkan produktivitas dan mengurangi biaya operasional. 

Konteks industri saat ini menunjukkan bahwa kegagalan mesin dapat menyebabkan kerugian signifikan, baik dari segi finansial maupun reputasi. Menurut Chen dan Wang (2026), penerapan teknologi PHM dapat mengurangi waktu henti mesin hingga 30%, yang secara langsung berdampak pada profitabilitas perusahaan. Namun, tantangan dalam implementasi PHM adalah pengumpulan dan analisis data yang besar dan kompleks, serta kebutuhan untuk mengembangkan model pembelajaran mendalam yang akurat dan dapat diandalkan. 

Oleh karena itu, penting bagi perusahaan untuk mengadopsi pendekatan berbasis data yang memanfaatkan algoritma pembelajaran mendalam untuk menganalisis data sensor dan memprediksi kondisi mesin. Dengan demikian, PHM tidak hanya menjadi alat untuk pemeliharaan prediktif, tetapi juga sebagai bagian integral dari strategi manajemen risiko dalam rantai pasok modern.

## 2. Landasan Teori & Formulasi Matematis

Prognostics and Health Management (PHM) melibatkan dua komponen utama: prognostik, yang berfokus pada prediksi masa depan dari kondisi sistem, dan manajemen kesehatan, yang berfokus pada pemeliharaan dan pengelolaan aset. Dalam konteks ini, kita akan menggunakan model pembelajaran mendalam untuk menganalisis data dan memprediksi kegagalan mesin.

Model pembelajaran mendalam sering kali menggunakan jaringan saraf tiruan (Artificial Neural Networks, ANN) untuk memproses data. Fungsi aktivasi yang umum digunakan dalam ANN adalah fungsi sigmoid dan ReLU (Rectified Linear Unit). Fungsi aktivasi sigmoid didefinisikan sebagai:

$$
f(x) = \frac{1}{1 + e^{-x}}
$$

Sedangkan fungsi ReLU didefinisikan sebagai:

$$
f(x) = \max(0, x)
$$

Model pembelajaran mendalam dapat dinyatakan dalam bentuk persamaan matematis sebagai berikut:

$$
y = f(W \cdot x + b)
$$

Di mana:
- \( y \) adalah output dari model,
- \( W \) adalah bobot yang dipelajari selama pelatihan,
- \( x \) adalah input data,
- \( b \) adalah bias.

Untuk memprediksi kegagalan mesin, kita perlu menghitung probabilitas kegagalan berdasarkan data historis. Misalkan kita memiliki data sensor \( X = \{x_1, x_2, ..., x_n\} \) dan label kegagalan \( Y = \{y_1, y_2, ..., y_n\} \). Model kita akan dilatih menggunakan fungsi kehilangan (loss function) yang umum digunakan, yaitu fungsi entropi silang (cross-entropy loss):

$$
L(y, \hat{y}) = -\frac{1}{N} \sum_{i=1}^{N} [y_i \log(\hat{y}_i) + (1 - y_i) \log(1 - \hat{y}_i)]
$$

Di mana \( \hat{y} \) adalah prediksi model. Proses pelatihan dilakukan dengan menggunakan algoritma optimasi seperti Adam atau Stochastic Gradient Descent (SGD) untuk meminimalkan fungsi kehilangan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi PHM berbasis pembelajaran mendalam mengikuti langkah-langkah sistematis sebagai berikut:

1. **Pengumpulan Data**: Mengumpulkan data dari sensor mesin, termasuk suhu, getaran, dan tekanan.
2. **Pra-pemrosesan Data**: Membersihkan dan menormalkan data untuk memastikan kualitas dan konsistensi.
3. **Pemilihan Fitur**: Mengidentifikasi fitur penting yang berkontribusi terhadap prediksi kegagalan.
4. **Pengembangan Model**: Membangun model pembelajaran mendalam menggunakan arsitektur ANN atau CNN (Convolutional Neural Network).
5. **Pelatihan Model**: Melatih model menggunakan data historis dengan pembagian data menjadi set pelatihan dan set pengujian.
6. **Validasi Model**: Menggunakan metrik seperti akurasi, presisi, dan recall untuk mengevaluasi performa model.
7. **Implementasi**: Mengintegrasikan model ke dalam sistem pemeliharaan untuk memprediksi kegagalan secara real-time.
8. **Monitoring dan Pemeliharaan Model**: Secara berkala memperbarui model dengan data baru untuk meningkatkan akurasi.

Diagram alir proses implementasi PHM dapat digambarkan sebagai berikut:

```
[Pengumpulan Data] --> [Pra-pemrosesan Data] --> [Pemilihan Fitur] --> [Pengembangan Model] --> [Pelatihan Model] --> [Validasi Model] --> [Implementasi] --> [Monitoring]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai contoh, kita akan mempertimbangkan sebuah pabrik yang menggunakan mesin CNC untuk memproduksi komponen. Data historis menunjukkan bahwa mesin mengalami kegagalan pada 5% dari total waktu operasional. Kita akan menghitung probabilitas kegagalan menggunakan model pembelajaran mendalam.

Misalkan kita memiliki 1000 jam data operasional dengan 50 jam kegagalan. Maka, probabilitas kegagalan dapat dihitung sebagai:

$$
P(G) = \frac{\text{Jumlah Kegagalan}}{\text{Total Jam Operasional}} = \frac{50}{1000} = 0.05
$$

Jika model pembelajaran mendalam kita menghasilkan output probabilitas kegagalan sebesar 0.07 untuk jam operasional tertentu, maka kita dapat menyimpulkan bahwa ada peningkatan risiko kegagalan.

Untuk mengoptimalkan pemeliharaan, kita dapat menggunakan model untuk merencanakan pemeliharaan prediktif. Misalkan biaya pemeliharaan preventif adalah $2000 dan biaya downtime akibat kegagalan adalah $5000. Dengan probabilitas kegagalan yang lebih tinggi, perusahaan harus mempertimbangkan untuk melakukan pemeliharaan preventif lebih awal untuk menghindari biaya downtime yang lebih besar.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

PHM berbasis pembelajaran mendalam memiliki aplikasi yang luas di berbagai sektor, termasuk rantai pasok, otomasi, dan manajemen biaya. Dalam konteks rantai pasok, PHM dapat meningkatkan efisiensi dengan memprediksi kegagalan pada titik-titik kritis, sehingga memungkinkan perusahaan untuk merespons secara proaktif. Dalam otomasi, integrasi PHM dengan sistem kontrol dapat meningkatkan keandalan dan keamanan operasional.

Namun, terdapat beberapa batasan dalam metodologi ini, termasuk ketergantungan pada kualitas data dan kompleksitas model yang dapat mempengaruhi interpretasi hasil. Oleh karena itu, penelitian lebih lanjut diperlukan untuk mengembangkan algoritma yang lebih efisien dan dapat diandalkan.

Ke depan, PHM diharapkan akan semakin terintegrasi dengan teknologi IoT (Internet of Things) dan AI (Artificial Intelligence), memungkinkan pengumpulan data yang lebih real-time dan analisis yang lebih mendalam. Standar masa depan harus mencakup protokol untuk interoperabilitas data dan keamanan siber, mengingat meningkatnya ancaman terhadap sistem digital.

Dengan demikian, PHM berbasis pembelajaran mendalam tidak hanya menjadi alat untuk meningkatkan kinerja mesin, tetapi juga sebagai pendorong inovasi dalam industri manufaktur modern.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
