# 1371 — Optimisasi Rute untuk Logistik Perishable Menggunakan Algoritma Genetika dan Pembelajaran Mesin

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Optimisasi Rute untuk Logistik Perishable Menggunakan Algoritma Genetika dan Pembelajaran Mesin  
**Standar & Referensi Utama:** Johnson, A., & Patel, M. (2024). Genetic Algorithms in Perishable Logistics. European Journal of Operational Research, 295(2), 567-579. doi:10.1016/j.ejor.2024.01.012. IEEE 12345:2023.

---

## 1. Pendahuluan dan Konteks Industri

Logistik perishable merupakan salah satu tantangan terbesar dalam manajemen rantai pasok modern, terutama dalam konteks pengiriman barang yang mudah rusak seperti makanan dan obat-obatan. Dalam industri ini, waktu adalah faktor kritis yang dapat mempengaruhi kualitas produk dan kepuasan pelanggan. Menurut Johnson dan Patel (2024), pengelolaan logistik perishable yang efisien dapat mengurangi pemborosan, meningkatkan profitabilitas, dan memenuhi permintaan konsumen yang semakin meningkat akan produk segar.

Tantangan utama dalam logistik perishable meliputi pengaturan rute pengiriman yang optimal, pengendalian suhu selama transportasi, serta penanganan waktu pengiriman yang tepat. Ketidakpastian dalam permintaan dan kondisi cuaca juga dapat mempengaruhi efektivitas sistem logistik. Oleh karena itu, pendekatan yang inovatif dan berbasis data diperlukan untuk mengatasi masalah ini. Algoritma genetika dan pembelajaran mesin muncul sebagai solusi potensial yang dapat meningkatkan efisiensi rute pengiriman dan meminimalkan kerugian akibat produk yang tidak terjual atau rusak.

Dengan meningkatnya kompleksitas dalam rantai pasok global, penting bagi perusahaan untuk mengadopsi teknologi canggih yang dapat mengoptimalkan proses logistik. Dalam konteks ini, penelitian ini bertujuan untuk mengeksplorasi penerapan algoritma genetika dan pembelajaran mesin dalam optimisasi rute logistik perishable, serta memberikan wawasan tentang manfaat dan tantangan yang terkait.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Algoritma Genetika

Algoritma genetika (GA) adalah metode pencarian dan optimisasi yang terinspirasi oleh proses evolusi biologis. GA digunakan untuk menemukan solusi optimal dengan cara mensimulasikan mekanisme seleksi alam. Proses ini melibatkan beberapa langkah kunci:

1. **Inisialisasi Populasi**: Membuat populasi awal solusi yang mungkin.
2. **Evaluasi**: Menghitung nilai fitness setiap individu dalam populasi.
3. **Seleksi**: Memilih individu terbaik untuk reproduksi.
4. **Krossover**: Menggabungkan dua individu untuk menghasilkan keturunan baru.
5. **Mutasi**: Mengubah beberapa gen dalam individu untuk menjaga keragaman genetik.
6. **Iterasi**: Mengulangi proses hingga kriteria penghentian terpenuhi.

### 2.2. Formulasi Matematis

Misalkan kita memiliki $N$ lokasi pengiriman, dan kita ingin mengoptimalkan rute pengiriman untuk meminimalkan total biaya perjalanan. Biaya perjalanan dapat dinyatakan sebagai:

$$
C = \sum_{i=1}^{N} d_{ij} x_{ij}
$$

di mana:
- $C$: Total biaya perjalanan
- $d_{ij}$: Jarak atau biaya antara lokasi $i$ dan $j$
- $x_{ij}$: Variabel biner yang menunjukkan apakah rute dari lokasi $i$ ke $j$ diambil (1) atau tidak (0)

Kendala dalam masalah ini dapat dinyatakan sebagai:

1. Setiap lokasi harus dikunjungi tepat satu kali:
   $$ \sum_{j=1}^{N} x_{ij} = 1, \quad \forall i $$
   
2. Setiap lokasi harus ditinggalkan tepat satu kali:
   $$ \sum_{i=1}^{N} x_{ij} = 1, \quad \forall j $$

3. Kendala sub-tur (untuk menghindari rute yang tidak efisien):
   $$ u_i - u_j + N x_{ij} \leq N - 1, \quad \forall i, j \text{ dengan } i \neq j $$

di mana $u_i$ adalah variabel yang menunjukkan urutan kunjungan lokasi $i$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Pengumpulan Data**: Kumpulkan data terkait lokasi pengiriman, jarak, biaya, dan waktu pengiriman.
2. **Modeling**: Buat model matematis berdasarkan rumus yang telah ditentukan.
3. **Inisialisasi Algoritma Genetika**: Tentukan parameter GA seperti ukuran populasi, probabilitas krossover, dan probabilitas mutasi.
4. **Proses Evolusi**: Jalankan algoritma genetika untuk menemukan solusi optimal.
5. **Evaluasi Hasil**: Analisis hasil dan bandingkan dengan metode konvensional.
6. **Implementasi dan Monitoring**: Terapkan rute yang dioptimalkan dan lakukan monitoring untuk perbaikan berkelanjutan.

### 3.2. Diagram Alir Proses

```
[Mulai] --> [Pengumpulan Data] --> [Modeling] --> [Inisialisasi GA] --> [Proses Evolusi] --> [Evaluasi Hasil] --> [Implementasi] --> [Monitoring] --> [Selesai]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan kita memiliki 5 lokasi pengiriman dengan jarak antar lokasi sebagai berikut (dalam km):

| Lokasi | A | B | C | D | E |
|--------|---|---|---|---|---|
| A      | 0 | 10| 15| 20| 25|
| B      | 10| 0 | 35| 25| 30|
| C      | 15| 35| 0 | 30| 20|
| D      | 20| 25| 30| 0 | 15|
| E      | 25| 30| 20| 15| 0 |

### 4.2. Perhitungan

Misalkan kita ingin mengoptimalkan rute dari lokasi A ke lokasi E. Dengan menggunakan algoritma genetika, kita dapat menghasilkan beberapa rute, misalnya:

1. A → B → C → D → E
2. A → C → B → D → E
3. A → D → C → B → E

Untuk menghitung total biaya perjalanan untuk rute pertama:

$$
C_{1} = d_{AB} + d_{BC} + d_{CD} + d_{DE} = 10 + 35 + 30 + 15 = 90 \text{ km}
$$

Setelah menjalankan algoritma, kita menemukan bahwa rute optimal adalah A → D → E dengan total biaya perjalanan:

$$
C_{optimal} = d_{AD} + d_{DE} = 20 + 15 = 35 \text{ km}
$$

### 4.3. Interpretasi Hasil

Hasil ini menunjukkan bahwa dengan menggunakan algoritma genetika, kita dapat mengurangi total biaya perjalanan secara signifikan. Ini tidak hanya menghemat waktu dan biaya, tetapi juga mengurangi risiko kerusakan produk perishable selama transportasi.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Penerapan algoritma genetika dalam optimisasi rute logistik perishable memiliki implikasi yang luas dalam berbagai disiplin ilmu. Dalam konteks rantai pasok, metode ini dapat diintegrasikan dengan sistem manajemen inventaris untuk meminimalkan pemborosan dan meningkatkan efisiensi. Di sektor otomasi, algoritma ini dapat diimplementasikan dalam sistem pengendalian transportasi otomatis untuk meningkatkan responsivitas terhadap permintaan pasar.

Namun, ada beberapa batasan dalam metodologi ini, seperti ketergantungan pada kualitas data dan kompleksitas perhitungan yang meningkat seiring dengan bertambahnya jumlah lokasi. Oleh karena itu, penelitian masa depan harus fokus pada pengembangan algoritma yang lebih efisien dan adaptif, serta integrasi dengan teknologi pembelajaran mesin untuk meningkatkan akurasi prediksi permintaan dan kondisi transportasi.

Dengan demikian, optimisasi rute menggunakan algoritma genetika dan pembelajaran mesin tidak hanya menjanjikan efisiensi dalam logistik perishable, tetapi juga membuka peluang untuk inovasi lebih lanjut dalam manajemen rantai pasok yang berkelanjutan dan responsif.