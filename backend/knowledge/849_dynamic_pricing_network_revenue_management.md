# 849 — Manajemen Pendapatan Jaringan dan Penetapan Harga Dinamis dengan Overbooking: Kontrol Harga Tawaran, Program Linier Deterministik Berbasis Pilihan (CDLP), dan Estimasi WTP Pelanggan

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Network Revenue Management and Dynamic Pricing with Overbooking: Bid-Price Control, Choice-Based Deterministic Linear Program (CDLP), and Customer WTP Estimation  
**Standar & Referensi Utama:** Talluri & van Ryzin (The Theory and Practice of Revenue Management, Springer); Phillips (Pricing and Revenue Optimization)

---

## 1. Pendahuluan dan Konteks Industri

Dalam konteks industri modern, manajemen pendapatan menjadi aspek krusial dalam meningkatkan profitabilitas perusahaan, terutama dalam sektor yang memiliki kapasitas terbatas seperti penerbangan, perhotelan, dan penyewaan kendaraan. Dengan meningkatnya persaingan dan perubahan perilaku konsumen, perusahaan dituntut untuk mengoptimalkan strategi penetapan harga dan manajemen kapasitas. Salah satu tantangan utama adalah bagaimana mengelola permintaan yang fluktuatif sambil meminimalkan risiko overbooking, yang dapat mengakibatkan hilangnya pendapatan dan kepuasan pelanggan.

Overbooking adalah praktik umum dalam industri yang memungkinkan perusahaan untuk menjual lebih banyak unit dari kapasitas yang tersedia, dengan asumsi bahwa sebagian pelanggan tidak akan hadir. Namun, strategi ini memerlukan pendekatan yang cermat untuk menghindari dampak negatif terhadap pengalaman pelanggan. Dalam hal ini, pendekatan berbasis harga tawaran (bid-price control) dan program linier deterministik berbasis pilihan (CDLP) menjadi alat yang efektif untuk mengelola pendapatan dan permintaan secara dinamis.

Menurut Talluri & van Ryzin (2004), manajemen pendapatan melibatkan pengambilan keputusan yang kompleks terkait penetapan harga dan alokasi kapasitas, yang memerlukan pemahaman mendalam tentang perilaku pelanggan dan elastisitas permintaan. Phillips (2005) menekankan pentingnya estimasi willingness to pay (WTP) pelanggan dalam merumuskan strategi harga yang efektif. Dengan demikian, pemahaman yang kuat tentang teori dan praktik manajemen pendapatan sangat penting untuk mencapai keunggulan kompetitif di pasar yang semakin kompetitif.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Notasi dan Definisi Variabel

- $N$: jumlah total unit kapasitas yang tersedia.
- $D$: jumlah permintaan yang diharapkan.
- $p$: harga jual per unit.
- $c$: biaya variabel per unit.
- $WTP_i$: willingness to pay dari pelanggan $i$.
- $x_i$: keputusan untuk melayani pelanggan $i$ (1 jika dilayani, 0 jika tidak).
- $B$: jumlah unit yang di-overbook.

### 2.2. Model Bid-Price Control

Model kontrol harga tawaran dapat dinyatakan sebagai berikut:

$$
\text{Maximize } R = \sum_{i=1}^{D} p \cdot x_i - c \cdot \sum_{i=1}^{D} x_i
$$

dengan kendala:

$$
\sum_{i=1}^{D} x_i \leq N + B
$$

### 2.3. Program Linier Deterministik Berbasis Pilihan (CDLP)

Model CDLP dapat dirumuskan sebagai:

$$
\text{Maximize } Z = \sum_{j=1}^{J} \sum_{i=1}^{N} p_j \cdot x_{ij}
$$

dengan kendala:

$$
\sum_{j=1}^{J} x_{ij} \leq 1, \quad \forall i
$$

$$
\sum_{i=1}^{N} x_{ij} \leq C_j, \quad \forall j
$$

di mana $C_j$ adalah kapasitas untuk produk $j$.

### 2.4. Estimasi WTP Pelanggan

Estimasi WTP dapat dilakukan melalui model regresi, yang dinyatakan sebagai:

$$
WTP_i = \beta_0 + \beta_1 \cdot X_i + \epsilon_i
$$

di mana $X_i$ adalah variabel independen yang mempengaruhi WTP dan $\epsilon_i$ adalah error term.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Pengumpulan Data**: Kumpulkan data historis tentang permintaan, harga, dan WTP pelanggan.
2. **Analisis Data**: Gunakan analisis statistik untuk mengestimasi model permintaan dan WTP.
3. **Pengembangan Model**: Kembangkan model Bid-Price Control dan CDLP berdasarkan data yang dianalisis.
4. **Simulasi**: Lakukan simulasi untuk menguji model dalam berbagai skenario permintaan dan harga.
5. **Implementasi**: Terapkan model dalam sistem manajemen pendapatan perusahaan.
6. **Monitoring dan Penyesuaian**: Pantau kinerja model dan lakukan penyesuaian berdasarkan feedback pasar.

### 3.2. Diagram Alir Proses

```plaintext
[Pengumpulan Data] --> [Analisis Data] --> [Pengembangan Model] --> [Simulasi] --> [Implementasi] --> [Monitoring]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan sebuah hotel memiliki kapasitas 100 kamar dan memperkirakan permintaan sebesar 120 kamar pada akhir pekan. Harga per kamar adalah Rp1.000.000 dan biaya variabel per kamar adalah Rp600.000. Hotel tersebut memutuskan untuk melakukan overbooking sebanyak 20 kamar.

### 4.2. Perhitungan

1. **Pendapatan Maksimal**:

$$
R = p \cdot D - c \cdot (N + B) = 1.000.000 \cdot 120 - 600.000 \cdot (100 + 20) = 120.000.000 - 72.000.000 = 48.000.000
$$

2. **Estimasi WTP**:

Misalkan estimasi WTP pelanggan berdasarkan model regresi adalah:

$$
WTP_i = 800.000 + 0.2 \cdot X_i
$$

Jika $X_i$ adalah tingkat kepuasan pelanggan yang diukur dari 1 hingga 5, maka untuk $X_i = 4$:

$$
WTP_i = 800.000 + 0.2 \cdot 4 = 800.800
$$

### 4.3. Interpretasi Hasil

Dari perhitungan di atas, hotel dapat memaksimalkan pendapatan sebesar Rp48.000.000 dengan strategi overbooking. Estimasi WTP menunjukkan bahwa pelanggan bersedia membayar lebih dari harga jual, yang dapat digunakan untuk merumuskan strategi penetapan harga yang lebih agresif.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

### 5.1. Hubungan dengan Disiplin Lain

Manajemen pendapatan dan penetapan harga dinamis memiliki aplikasi luas di berbagai sektor, termasuk rantai pasok, otomasi, dan manajemen biaya. Dalam konteks rantai pasok, strategi ini dapat digunakan untuk mengoptimalkan alokasi sumber daya dan meminimalkan biaya penyimpanan. Di sektor otomasi, teknologi dapat digunakan untuk mengumpulkan dan menganalisis data secara real-time, memungkinkan penyesuaian harga yang lebih responsif.

### 5.2. Batasan Metodologi

Meskipun model ini menawarkan pendekatan yang kuat untuk manajemen pendapatan, terdapat beberapa batasan, termasuk asumsi bahwa permintaan bersifat deterministik dan tidak mempertimbangkan faktor eksternal yang dapat mempengaruhi perilaku pelanggan.

### 5.3. Arah Riset Masa Depan

Ke depan, penelitian dapat difokuskan pada pengembangan model yang lebih adaptif dan responsif terhadap perubahan pasar, termasuk penggunaan algoritma pembelajaran mesin untuk meningkatkan akurasi estimasi WTP dan permintaan. Selain itu, integrasi dengan teknologi blockchain dapat meningkatkan transparansi dan kepercayaan dalam transaksi, terutama dalam konteks overbooking.

Dengan demikian, manajemen pendapatan jaringan dan penetapan harga dinamis merupakan area yang menjanjikan untuk penelitian dan aplikasi praktis di masa depan, dengan potensi untuk meningkatkan efisiensi dan profitabilitas di berbagai sektor industri.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
