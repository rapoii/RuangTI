# 1122 — Optimalisasi Dispatching pada Penjadwalan Produksi Menggunakan Algoritma Genetika di Open-Pit Mining

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Optimalisasi Dispatching pada Penjadwalan Produksi Menggunakan Algoritma Genetika di Open-Pit Mining  
**Standar & Referensi Utama:** Johnson, L. & Wang, R. (2024). Genetic Algorithms for Production Scheduling in Open-Pit Mining. International Journal of Production Research, 62(1), 45-60. DOI:10.1080/00207543.2023.2178456. ASME B30.5-2022.

---

## 1. Pendahuluan dan Konteks Industri

Dalam industri pertambangan terbuka (open-pit mining), penjadwalan produksi merupakan aspek krusial yang mempengaruhi efisiensi operasional dan profitabilitas. Penjadwalan yang tidak optimal dapat menyebabkan pemborosan sumber daya, peningkatan biaya operasional, dan penurunan produktivitas. Mengingat kompleksitas dan dinamika dalam proses penambangan, tantangan utama yang dihadapi adalah bagaimana mengatur urutan dan waktu operasi alat berat serta proses pengangkutan material secara efisien. 

Dalam konteks ini, algoritma genetika (AG) muncul sebagai metode yang menjanjikan untuk mengatasi masalah penjadwalan yang kompleks. AG adalah teknik optimasi yang terinspirasi oleh proses evolusi alami, yang menggunakan mekanisme seleksi, crossover, dan mutasi untuk menemukan solusi optimal dari ruang pencarian yang besar. Penelitian oleh Johnson dan Wang (2024) menunjukkan bahwa penerapan AG dalam penjadwalan produksi di open-pit mining dapat meningkatkan efisiensi operasional hingga 25% dibandingkan dengan metode tradisional.

Tantangan yang dihadapi dalam penjadwalan ini mencakup variasi dalam waktu siklus alat, ketidakpastian dalam kondisi cuaca, serta perubahan dalam permintaan pasar. Oleh karena itu, penting untuk mengembangkan model penjadwalan yang adaptif dan responsif terhadap perubahan kondisi. Dengan mengoptimalkan dispatching menggunakan algoritma genetika, perusahaan dapat meminimalkan waktu tunggu, mengurangi biaya operasional, dan meningkatkan throughput produksi. 

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Definisi Variabel dan Parameter

- \( N \): Jumlah tugas yang harus dijadwalkan.
- \( M \): Jumlah mesin atau alat berat yang tersedia.
- \( T_i \): Waktu yang dibutuhkan untuk menyelesaikan tugas \( i \).
- \( D_i \): Deadline untuk tugas \( i \).
- \( C_i \): Biaya yang terkait dengan penyelesaian tugas \( i \).
- \( S \): Solusi yang dihasilkan oleh algoritma genetika.

### 2.2. Fungsi Tujuan

Fungsi tujuan dalam penjadwalan produksi dapat dinyatakan sebagai minimisasi total biaya dan waktu penyelesaian, yang dirumuskan sebagai berikut:

$$
\text{Minimize } Z = \sum_{i=1}^{N} C_i + \sum_{i=1}^{N} \max(0, C_i - D_i)
$$

### 2.3. Algoritma Genetika

Proses algoritma genetika untuk penjadwalan produksi dapat diuraikan dalam beberapa langkah:

1. **Inisialisasi Populasi**: Membuat populasi awal solusi acak.
2. **Evaluasi**: Menghitung nilai fungsi tujuan untuk setiap solusi.
3. **Seleksi**: Memilih solusi terbaik berdasarkan nilai fungsi tujuan.
4. **Crossover**: Menggabungkan dua solusi untuk menghasilkan solusi baru.
5. **Mutasi**: Mengubah sebagian solusi untuk menjaga keragaman genetik.
6. **Iterasi**: Mengulangi langkah 2-5 hingga mencapai kriteria penghentian.

### 2.4. Pembuktian Matematis

Proses evolusi dalam algoritma genetika dapat dijelaskan dengan model matematis yang menunjukkan konvergensi solusi optimal. Misalkan \( P(t) \) adalah populasi pada generasi ke-\( t \), maka:

$$
P(t+1) = \text{Crossover}(P(t)) + \text{Mutation}(P(t))
$$

Dengan asumsi bahwa setiap generasi menghasilkan populasi yang lebih baik, maka:

$$
\text{Fitness}(P(t+1)) \geq \text{Fitness}(P(t))
$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Identifikasi Tugas dan Sumber Daya**: Mengumpulkan data tentang tugas yang harus dijadwalkan dan sumber daya yang tersedia.
2. **Modeling**: Membuat model matematis berdasarkan data yang dikumpulkan.
3. **Pengembangan Algoritma Genetika**: Mengimplementasikan algoritma genetika sesuai dengan formulasi yang telah ditentukan.
4. **Simulasi**: Melakukan simulasi untuk menguji efektivitas algoritma dalam penjadwalan.
5. **Evaluasi Hasil**: Menganalisis hasil simulasi untuk menentukan efisiensi dan efektivitas penjadwalan.
6. **Implementasi di Lapangan**: Mengaplikasikan hasil penjadwalan ke dalam operasi nyata di lapangan.

### 3.2. Diagram Alir Proses

```plaintext
+---------------------+
| Identifikasi Tugas  |
| dan Sumber Daya     |
+---------------------+
          |
          v
+---------------------+
| Modeling            |
| (Model Matematis)   |
+---------------------+
          |
          v
+---------------------+
| Pengembangan AG     |
+---------------------+
          |
          v
+---------------------+
| Simulasi            |
+---------------------+
          |
          v
+---------------------+
| Evaluasi Hasil      |
+---------------------+
          |
          v
+---------------------+
| Implementasi        |
| di Lapangan         |
+---------------------+
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan terdapat 5 tugas yang harus dijadwalkan dengan waktu penyelesaian dan deadline sebagai berikut:

| Tugas | Waktu Penyelesaian \( T_i \) | Deadline \( D_i \) | Biaya \( C_i \) |
|-------|-------------------------------|---------------------|------------------|
| 1     | 4                             | 10                  | 100              |
| 2     | 3                             | 8                   | 80               |
| 3     | 2                             | 5                   | 50               |
| 4     | 5                             | 12                  | 120              |
| 5     | 1                             | 3                   | 30               |

### 4.2. Perhitungan

1. **Fungsi Tujuan**:

   Menghitung total biaya dan penalti untuk keterlambatan:

   - Total Biaya: 
   $$
   Z = 100 + 80 + 50 + 120 + 30 = 380
   $$

   - Keterlambatan:
   - Tugas 1: selesai pada waktu 4 (tidak terlambat)
   - Tugas 2: selesai pada waktu 7 (tidak terlambat)
   - Tugas 3: selesai pada waktu 9 (terlambat 4)
   - Tugas 4: selesai pada waktu 14 (terlambat 2)
   - Tugas 5: selesai pada waktu 15 (terlambat 12)

   Total penalti:
   $$
   P = 0 + 0 + 4 + 2 + 12 = 18
   $$

   Total biaya akhir:
   $$
   Z = 380 + 18 = 398
   $$

### 4.3. Interpretasi Hasil

Dari perhitungan di atas, total biaya untuk penjadwalan ini adalah 398. Dengan menggunakan algoritma genetika, diharapkan dapat ditemukan urutan tugas yang lebih optimal sehingga total biaya dapat diminimalkan.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Penerapan algoritma genetika dalam penjadwalan produksi tidak hanya terbatas pada industri pertambangan, tetapi juga dapat diterapkan dalam sektor lain seperti manufaktur, logistik, dan rantai pasok. Dalam konteks rantai pasok, algoritma ini dapat membantu dalam pengaturan distribusi barang dan pengelolaan inventaris yang lebih efisien.

### 5.1. Hubungan dengan Disiplin Lain

- **Supply Chain**: Optimalisasi penjadwalan dapat meningkatkan efisiensi distribusi dan pengurangan lead time.
- **Otomasi**: Integrasi sistem otomasi dengan algoritma genetika dapat meningkatkan responsivitas terhadap perubahan permintaan.
- **Manajemen Biaya/Teknik**: Pengurangan biaya operasional melalui penjadwalan yang lebih efisien.
- **K3/ESG**: Penjadwalan yang baik dapat mengurangi risiko kecelakaan kerja dengan mengoptimalkan penggunaan alat berat.

### 5.2. Batasan Metodologi

Meskipun algoritma genetika menawarkan solusi yang efektif, terdapat beberapa batasan, seperti kebutuhan akan waktu komputasi yang tinggi untuk populasi besar dan kompleksitas dalam mendefinisikan fungsi tujuan yang tepat.

### 5.3. Arah Riset Masa Depan

Riset ke depan dapat berfokus pada pengembangan algoritma hybrid yang menggabungkan algoritma genetika dengan metode optimasi lainnya, serta penerapan machine learning untuk meningkatkan akurasi prediksi dalam penjadwalan produksi. Selain itu, eksplorasi penggunaan big data dalam pengambilan keputusan penjadwalan dapat menjadi area yang menjanjikan untuk penelitian lebih lanjut.

Dengan demikian, optimalisasi dispatching menggunakan algoritma genetika di open-pit mining tidak hanya memberikan solusi praktis untuk masalah penjadwalan, tetapi juga membuka peluang untuk inovasi dalam berbagai disiplin ilmu lainnya.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
