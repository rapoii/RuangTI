# 2940 — Jaringan Sensor Nirkabel untuk Proses Liofilisasi dalam Industri Farmasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Wireless Sensor Networks for Lyophilization  
**Jurnal & Sitasi Utama:** Jesus Meza‐Galvan, Andrew Strongrich, Ahmad Darwish (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch4](https://doi.org/10.1002/9783527850303.ch4)  
**Sitasi Pendukung:** Fiora Artusio, Antonello A. Barresi, Roberto Pisano (2026). *Process Analytical Technology for Pharmaceutical Freeze‐Drying*. DOI: [https://doi.org/10.1002/9783527850303.ch11](https://doi.org/10.1002/9783527850303.ch11)

---

## 1. Pendahuluan dan Konteks Industri

Liofilisasi merupakan proses penting dalam industri farmasi yang digunakan untuk mengawetkan produk biopharmaceutical dengan menghilangkan air dari produk melalui sublimasi. Proses ini memerlukan pengendalian yang ketat terhadap kondisi lingkungan, termasuk suhu dan tekanan, untuk memastikan kualitas produk akhir. Dalam konteks ini, penggunaan Jaringan Sensor Nirkabel (WSN) menjadi sangat relevan. Menurut Meza-Galvan et al. (2026), WSN dapat memberikan pemantauan real-time terhadap parameter kritis selama proses liofilisasi, yang memungkinkan deteksi dini terhadap potensi masalah yang dapat mempengaruhi kualitas produk. Hal ini sangat penting mengingat bahwa kesalahan dalam proses liofilisasi dapat menyebabkan kerusakan pada produk, yang pada gilirannya dapat mengakibatkan kerugian ekonomi yang signifikan bagi perusahaan farmasi.

Penggunaan teknologi sensor nirkabel dalam liofilisasi tidak hanya meningkatkan efisiensi operasional tetapi juga memberikan data yang diperlukan untuk analisis lebih lanjut dan pengambilan keputusan yang lebih baik. Artusio et al. (2026) menekankan bahwa teknologi baru ini dapat membantu dalam pengembangan metode analisis proses yang lebih baik, yang pada akhirnya dapat meningkatkan kualitas dan konsistensi produk. Dengan demikian, penerapan WSN dalam liofilisasi tidak hanya relevan dari segi teknis, tetapi juga dari segi ekonomi, karena dapat mengurangi biaya produksi dan meningkatkan daya saing di pasar global.

## 2. Landasan Teori & Formulasi Matematis

Dalam penelitian ini, Meza-Galvan et al. (2026) mengusulkan model matematis untuk memantau dan mengendalikan proses liofilisasi menggunakan WSN. Model ini melibatkan beberapa parameter kritis, termasuk suhu ($T$), tekanan ($P$), dan kelembapan relatif ($RH$). Persamaan dasar yang digunakan untuk menggambarkan proses sublimasi dalam liofilisasi dapat dinyatakan sebagai berikut:

$$
\frac{dM}{dt} = -k \cdot A \cdot (P_{v} - P)
$$

Di mana:
- $M$ adalah massa air yang hilang (kg),
- $t$ adalah waktu (s),
- $k$ adalah konstanta laju sublimasi (kg/m²·s·Pa),
- $A$ adalah luas permukaan produk (m²),
- $P_{v}$ adalah tekanan uap air pada suhu tertentu (Pa),
- $P$ adalah tekanan lingkungan (Pa).

Model ini menunjukkan bahwa laju penghilangan air dari produk tergantung pada perbedaan tekanan uap dan tekanan lingkungan, serta luas permukaan produk. Dengan memanfaatkan WSN, parameter-parameter ini dapat dipantau secara real-time, memungkinkan penyesuaian yang cepat untuk menjaga kondisi optimal selama proses.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi WSN dalam proses liofilisasi melibatkan beberapa langkah sistematis. Berikut adalah langkah-langkah yang diusulkan:

1. **Pemilihan Sensor**: Memilih sensor yang tepat untuk memantau suhu, tekanan, dan kelembapan. Sensor harus memiliki akurasi tinggi dan kemampuan nirkabel untuk mengirimkan data secara real-time.

2. **Instalasi Jaringan Sensor**: Menginstal sensor di lokasi strategis dalam ruang liofilisasi untuk memastikan pemantauan yang efektif. Jaringan harus dirancang untuk menghindari interferensi dan memastikan transmisi data yang stabil.

3. **Pengumpulan Data**: Menggunakan perangkat lunak untuk mengumpulkan data dari sensor secara real-time. Data ini harus dianalisis untuk mendeteksi penyimpangan dari parameter yang diinginkan.

4. **Pengendalian Proses**: Mengembangkan algoritma pengendalian yang dapat menyesuaikan kondisi proses berdasarkan data yang diterima. Misalnya, jika suhu terlalu tinggi, sistem dapat menyesuaikan pengaturan pendinginan.

5. **Analisis dan Pelaporan**: Melakukan analisis data untuk mengevaluasi kinerja proses liofilisasi dan menghasilkan laporan yang dapat digunakan untuk perbaikan berkelanjutan.

Diagram alir proses dapat digambarkan sebagai berikut:

```
[Sensor] --> [Pengumpulan Data] --> [Analisis Data] --> [Pengendalian Proses] --> [Pelaporan]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk memberikan gambaran yang lebih jelas, mari kita pertimbangkan studi kasus di mana sebuah perusahaan farmasi menggunakan WSN untuk liofilisasi produk vaksin. Misalkan, luas permukaan produk ($A$) adalah 0.5 m², konstanta laju sublimasi ($k$) adalah 0.02 kg/m²·s·Pa, tekanan uap air pada suhu tertentu ($P_{v}$) adalah 2000 Pa, dan tekanan lingkungan ($P$) adalah 1000 Pa.

Dengan menggunakan rumus yang telah disebutkan, kita dapat menghitung laju penghilangan air ($\frac{dM}{dt}$):

$$
\frac{dM}{dt} = -0.02 \cdot 0.5 \cdot (2000 - 1000) = -0.02 \cdot 0.5 \cdot 1000 = -10 \text{ kg/s}
$$

Hasil ini menunjukkan bahwa pada kondisi tersebut, laju penghilangan air adalah 10 kg/s. Ini adalah nilai yang sangat signifikan dan menunjukkan pentingnya pemantauan yang tepat untuk menghindari kerugian produk.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Meskipun penggunaan WSN dalam liofilisasi menawarkan banyak keuntungan, ada beberapa batasan yang perlu dipertimbangkan. Salah satunya adalah ketergantungan pada teknologi nirkabel yang dapat terpengaruh oleh interferensi sinyal. Selain itu, biaya awal untuk instalasi dan pemeliharaan sistem WSN dapat menjadi penghalang bagi beberapa perusahaan kecil.

Dibandingkan dengan metode konvensional, WSN menawarkan keunggulan dalam hal efisiensi dan akurasi. Namun, penting untuk melakukan evaluasi menyeluruh terhadap biaya dan manfaat sebelum implementasi. Aplikasi lintas sektor, seperti dalam industri makanan atau bioteknologi, juga menunjukkan potensi besar untuk teknologi ini.

Ke depan, agenda riset lanjutan harus fokus pada pengembangan sensor yang lebih canggih dan algoritma pengendalian yang lebih efektif. Selain itu, integrasi dengan teknologi IoT dan big data dapat membuka peluang baru untuk optimasi proses dan pengambilan keputusan berbasis data.

Dengan demikian, penerapan WSN dalam liofilisasi tidak hanya relevan untuk industri farmasi, tetapi juga dapat memberikan manfaat signifikan di berbagai sektor lainnya.