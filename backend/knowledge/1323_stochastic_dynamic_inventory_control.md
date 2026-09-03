# 1323 — Model Pemrograman Dinamis Stokastik untuk Pengendalian Persediaan dalam Rantai Pasok E-Commerce

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Stochastic Dynamic Programming Models for Inventory Control in E-Commerce Supply Chains  
**Standar & Referensi Utama:** Johnson, M., & Patel, S. (2022). Dynamic Inventory Control Models. Journal of Operations Management, 68(2), 234-250. DOI:10.1016/j.jom.2022.01.002.

---

## 1. Pendahuluan dan Konteks Industri

Dalam era digital saat ini, e-commerce telah menjadi pilar utama dalam distribusi barang dan jasa. Pertumbuhan pesat sektor ini menghadirkan tantangan signifikan dalam pengelolaan persediaan, di mana ketepatan dalam pengendalian persediaan menjadi krusial untuk menjaga kepuasan pelanggan dan efisiensi biaya. Menurut laporan dari Statista (2023), nilai pasar e-commerce global diperkirakan mencapai $6 triliun pada tahun 2024, yang menunjukkan pentingnya strategi pengendalian persediaan yang efektif.

Pengendalian persediaan yang tidak tepat dapat mengakibatkan overstocking atau stockout, yang masing-masing berdampak pada biaya penyimpanan yang tinggi dan kehilangan penjualan. Dalam konteks ini, model pemrograman dinamis stokastik (SDP) menawarkan pendekatan yang lebih adaptif dan responsif terhadap ketidakpastian permintaan dan biaya. Model ini memungkinkan perusahaan untuk mengambil keputusan yang lebih baik dalam pengelolaan persediaan dengan mempertimbangkan variabilitas dan ketidakpastian yang inheren dalam permintaan pasar.

Tantangan utama yang dihadapi oleh perusahaan e-commerce adalah fluktuasi permintaan yang tinggi, yang sering kali dipengaruhi oleh faktor eksternal seperti tren musiman, promosi, dan perilaku konsumen. Oleh karena itu, penerapan model SDP dalam pengendalian persediaan dapat membantu perusahaan untuk merespons perubahan permintaan secara lebih efisien dan mengoptimalkan biaya operasional.

## 2. Landasan Teori & Formulasi Matematis

Model pemrograman dinamis stokastik untuk pengendalian persediaan dapat dinyatakan dalam bentuk fungsi nilai yang mengoptimalkan total biaya selama periode tertentu. Misalkan:

- $S_t$: jumlah persediaan pada waktu $t$.
- $D_t$: permintaan yang tidak terduga pada waktu $t$.
- $C(S_t)$: biaya penyimpanan persediaan.
- $P(S_t, D_t)$: biaya kekurangan persediaan.

Fungsi nilai $V_t(S_t)$ didefinisikan sebagai:

$$
V_t(S_t) = \min_{a_t} \left\{ C(S_t) + E[V_{t+1}(S_{t+1}) | S_t, a_t] \right\}
$$

di mana $a_t$ adalah keputusan pengendalian persediaan pada waktu $t$, dan $E[\cdot]$ adalah operator ekspektasi.

Persamaan di atas menunjukkan bahwa nilai optimal pada waktu $t$ tergantung pada biaya penyimpanan saat ini dan ekspektasi nilai optimal di periode berikutnya. Dengan demikian, kita perlu mendefinisikan transisi persediaan sebagai:

$$
S_{t+1} = S_t + a_t - D_t
$$

Model ini dapat diselesaikan dengan menggunakan algoritma pemrograman dinamis, di mana kita menghitung nilai $V_t(S_t)$ untuk setiap kemungkinan level persediaan dan keputusan yang diambil.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model SDP dalam pengendalian persediaan melibatkan langkah-langkah berikut:

1. **Pengumpulan Data**: Kumpulkan data historis permintaan dan biaya terkait.
2. **Modelisasi Permintaan**: Gunakan model statistik untuk memprediksi permintaan di masa depan.
3. **Definisi Parameter**: Tentukan parameter biaya penyimpanan dan biaya kekurangan.
4. **Formulasi Model**: Susun model SDP berdasarkan parameter yang telah ditentukan.
5. **Implementasi Algoritma**: Terapkan algoritma pemrograman dinamis untuk menghitung nilai optimal.
6. **Analisis Sensitivitas**: Lakukan analisis sensitivitas untuk memahami dampak perubahan parameter.
7. **Monitoring dan Evaluasi**: Pantau kinerja model dan lakukan penyesuaian jika diperlukan.

Diagram alir proses dapat digambarkan sebagai berikut:

```
[Pengumpulan Data] --> [Modelisasi Permintaan] --> [Definisi Parameter] --> [Formulasi Model] --> [Implementasi Algoritma] --> [Analisis Sensitivitas] --> [Monitoring dan Evaluasi]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Misalkan sebuah perusahaan e-commerce memiliki data berikut:

- Biaya penyimpanan per unit per periode: $C = 2$
- Biaya kekurangan per unit: $P = 5$
- Permintaan yang diprediksi untuk periode berikutnya: $D_t \sim N(20, 4^2)$ (distribusi normal dengan rata-rata 20 dan deviasi standar 4).

Langkah-langkah perhitungan:

1. **Tentukan Level Persediaan Awal**: Misalkan $S_0 = 30$.
2. **Hitung Ekspektasi Permintaan**: $E[D_t] = 20$.
3. **Hitung Biaya Penyimpanan**: $C(S_0) = C \cdot S_0 = 2 \cdot 30 = 60$.
4. **Hitung Biaya Kekurangan**: Jika $S_0 < D_t$, maka biaya kekurangan dapat dihitung sebagai $P \cdot (D_t - S_0)$.

Dengan menggunakan model SDP, kita dapat menghitung nilai optimal untuk berbagai level persediaan dan keputusan yang diambil. Misalkan kita menghitung untuk $a_t = 10$ (menambah 10 unit):

$$
S_{t+1} = S_0 + a_t - E[D_t] = 30 + 10 - 20 = 20
$$

Dengan demikian, biaya total dapat dihitung sebagai:

$$
\text{Total Biaya} = C(S_0) + E[P(S_{t+1}, D_t)] = 60 + E[P(20, D_t)]
$$

Jika kita asumsikan $D_t = 20$, maka tidak ada biaya kekurangan, sehingga total biaya adalah $60$.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Model pemrograman dinamis stokastik tidak hanya relevan dalam konteks e-commerce, tetapi juga dapat diterapkan dalam berbagai sektor seperti manufaktur, distribusi, dan logistik. Dalam industri manufaktur, model ini dapat membantu dalam pengelolaan persediaan bahan baku dan produk jadi. Di sektor distribusi, penerapan model ini dapat mengoptimalkan rantai pasok dan mengurangi biaya transportasi.

Namun, terdapat beberapa batasan dalam metodologi ini, seperti asumsi distribusi permintaan yang mungkin tidak selalu akurat dan kompleksitas perhitungan yang meningkat seiring dengan bertambahnya variabel. Oleh karena itu, penelitian lebih lanjut diperlukan untuk mengembangkan algoritma yang lebih efisien dan model yang lebih adaptif terhadap perubahan kondisi pasar.

Arah riset masa depan dapat mencakup integrasi teknologi seperti kecerdasan buatan dan pembelajaran mesin untuk meningkatkan akurasi prediksi permintaan dan pengambilan keputusan dalam pengendalian persediaan.

Dengan demikian, penerapan model pemrograman dinamis stokastik dalam pengendalian persediaan di rantai pasok e-commerce merupakan langkah strategis yang dapat meningkatkan efisiensi operasional dan daya saing perusahaan di pasar global.