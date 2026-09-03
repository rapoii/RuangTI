# 1385 — Pendekatan Kualitas 4.0 dalam Manajemen Rantai Pasok Berbasis Blockchain dan IoT

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Pendekatan Kualitas 4.0 dalam Manajemen Rantai Pasok Berbasis Blockchain dan IoT  
**Standar & Referensi Utama:** Nguyen, H., & Zhao, F. (2024). 'Quality Management in Supply Chains 4.0'. International Journal of Production Economics. ISO 28000.

---

## 1. Pendahuluan dan Konteks Industri

Dalam era industri 4.0, manajemen rantai pasok (supply chain management) menghadapi tantangan yang semakin kompleks. Perkembangan teknologi informasi, khususnya Internet of Things (IoT) dan blockchain, telah mengubah cara perusahaan beroperasi dan berinteraksi dengan pemasok serta pelanggan. Kualitas produk dan layanan menjadi sangat penting dalam mempertahankan daya saing di pasar global. Menurut Nguyen dan Zhao (2024), pendekatan kualitas 4.0 mengintegrasikan teknologi digital untuk meningkatkan transparansi, efisiensi, dan akurasi dalam manajemen rantai pasok.

Tantangan utama yang dihadapi oleh industri saat ini termasuk meningkatnya permintaan konsumen akan produk berkualitas tinggi, kebutuhan untuk meminimalkan biaya operasional, dan tekanan untuk memenuhi standar keberlanjutan. Selain itu, risiko yang terkait dengan gangguan rantai pasok, seperti pandemi atau bencana alam, memerlukan sistem yang lebih responsif dan adaptif. Dalam konteks ini, penerapan teknologi blockchain dan IoT dapat memberikan solusi yang inovatif untuk meningkatkan kualitas dan efisiensi dalam manajemen rantai pasok.

Blockchain menawarkan keunggulan dalam hal transparansi dan keamanan data, memungkinkan semua pihak dalam rantai pasok untuk melacak dan memverifikasi setiap langkah dalam proses produksi dan distribusi. Sementara itu, IoT memungkinkan pengumpulan data real-time yang dapat digunakan untuk analisis dan pengambilan keputusan yang lebih baik. Dengan mengintegrasikan kedua teknologi ini, perusahaan dapat mencapai tingkat kualitas yang lebih tinggi dan mengurangi risiko yang terkait dengan ketidakpastian dalam rantai pasok.

## 2. Landasan Teori & Formulasi Matematis

Pendekatan kualitas 4.0 dalam manajemen rantai pasok dapat dijelaskan melalui beberapa konsep matematis yang mendasari analisis dan pengambilan keputusan. Salah satu rumus penting dalam manajemen kualitas adalah rumus untuk menghitung tingkat kepuasan pelanggan, yang dapat dinyatakan sebagai:

$$
CS = \frac{S}{T} \times 100\%
$$

di mana:
- \( CS \) = Customer Satisfaction (Tingkat Kepuasan Pelanggan)
- \( S \) = Jumlah pelanggan yang puas
- \( T \) = Total jumlah pelanggan

Selain itu, untuk mengevaluasi kualitas produk dalam rantai pasok, kita dapat menggunakan rumus Six Sigma, yang mengukur variasi dalam proses:

$$
\sigma = \sqrt{\frac{1}{N} \sum_{i=1}^{N} (x_i - \mu)^2}
$$

di mana:
- \( \sigma \) = Standar deviasi
- \( N \) = Jumlah sampel
- \( x_i \) = Nilai individu
- \( \mu \) = Rata-rata dari nilai individu

Dengan menggunakan data dari sensor IoT, perusahaan dapat memantau kualitas produk secara real-time. Misalnya, jika kita memiliki data kualitas produk \( Q \) yang terdistribusi normal, kita dapat menghitung probabilitas produk memenuhi spesifikasi kualitas sebagai berikut:

$$
P(X \leq Q) = \Phi\left(\frac{Q - \mu}{\sigma}\right)
$$

di mana \( \Phi \) adalah fungsi distribusi kumulatif dari distribusi normal.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi pendekatan kualitas 4.0 dalam manajemen rantai pasok berbasis blockchain dan IoT memerlukan langkah-langkah sistematis sebagai berikut:

1. **Analisis Kebutuhan**: Identifikasi kebutuhan kualitas produk dan proses dalam rantai pasok.
2. **Integrasi Teknologi**: Implementasikan teknologi IoT untuk pengumpulan data dan blockchain untuk keamanan data.
3. **Pengembangan Sistem**: Rancang sistem yang memungkinkan integrasi data dari berbagai sumber.
4. **Pelatihan Karyawan**: Berikan pelatihan kepada karyawan tentang penggunaan teknologi baru.
5. **Monitoring dan Evaluasi**: Lakukan monitoring secara real-time dan evaluasi hasil untuk perbaikan berkelanjutan.

Diagram alir proses implementasi dapat digambarkan sebagai berikut:

```
[Analisis Kebutuhan] --> [Integrasi Teknologi] --> [Pengembangan Sistem] --> [Pelatihan Karyawan] --> [Monitoring dan Evaluasi]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai contoh, mari kita pertimbangkan sebuah perusahaan manufaktur yang memproduksi komponen elektronik. Perusahaan ini ingin meningkatkan kualitas produk dengan menggunakan teknologi IoT dan blockchain. Data kualitas produk yang dikumpulkan selama satu bulan menunjukkan bahwa dari 1000 unit yang diproduksi, 950 unit memenuhi standar kualitas.

Menggunakan rumus tingkat kepuasan pelanggan:

$$
CS = \frac{950}{1000} \times 100\% = 95\%
$$

Ini menunjukkan bahwa tingkat kepuasan pelanggan adalah 95%. Selanjutnya, jika kita ingin menghitung standar deviasi dari data kualitas produk yang diukur, misalkan nilai individu dari kualitas produk adalah sebagai berikut: \( x = [80, 85, 90, 75, 95] \).

Pertama, kita hitung rata-rata (\( \mu \)):

$$
\mu = \frac{80 + 85 + 90 + 75 + 95}{5} = 85
$$

Kemudian, kita hitung standar deviasi (\( \sigma \)):

$$
\sigma = \sqrt{\frac{1}{5} \left((80-85)^2 + (85-85)^2 + (90-85)^2 + (75-85)^2 + (95-85)^2\right)} = \sqrt{\frac{1}{5} (25 + 0 + 25 + 100 + 100)} = \sqrt{50} \approx 7.07
$$

Dengan demikian, standar deviasi kualitas produk adalah sekitar 7.07. Ini menunjukkan bahwa ada variasi yang signifikan dalam kualitas produk yang dihasilkan.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Pendekatan kualitas 4.0 tidak hanya relevan untuk industri manufaktur, tetapi juga dapat diterapkan di sektor lain seperti logistik, kesehatan, dan pertanian. Dalam konteks logistik, penggunaan IoT dapat meningkatkan efisiensi pengiriman dan pelacakan barang, sedangkan blockchain dapat memastikan keamanan dan keaslian produk.

Namun, terdapat beberapa batasan dalam metodologi ini, seperti biaya implementasi yang tinggi dan kebutuhan untuk pelatihan karyawan. Oleh karena itu, penelitian lebih lanjut diperlukan untuk mengidentifikasi cara-cara untuk mengurangi biaya dan meningkatkan adopsi teknologi ini di berbagai sektor.

Ke depan, arah riset dapat difokuskan pada pengembangan algoritma analitik yang lebih canggih untuk memproses data besar yang dihasilkan oleh IoT dan blockchain, serta penerapan kecerdasan buatan (AI) untuk meningkatkan pengambilan keputusan dalam manajemen rantai pasok.

Dengan demikian, pendekatan kualitas 4.0 menawarkan potensi besar untuk meningkatkan efisiensi dan kualitas dalam manajemen rantai pasok, namun memerlukan perhatian terhadap tantangan yang ada dan pengembangan berkelanjutan untuk mencapai hasil yang optimal.