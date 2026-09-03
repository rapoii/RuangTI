# 1295 — Analisis Kinerja Misi Spasial dengan Pendekatan Multi-Kriteria Menggunakan Teori Keputusan dan Analisis Sensitivitas

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Analisis Kinerja Misi Spasial dengan Pendekatan Multi-Kriteria Menggunakan Teori Keputusan dan Analisis Sensitivitas  
**Standar & Referensi Utama:** Nguyen, T. (2022). Space Mission Analysis and Design. Springer; Johnson, L. et al. (2025). Journal of Spacecraft and Rockets, 62(4), 789-802. DOI:10.2514/1.A34856.

---

## 1. Pendahuluan dan Konteks Industri

Industri antariksa telah mengalami perkembangan pesat dalam beberapa dekade terakhir, dengan meningkatnya kebutuhan untuk misi spasial yang lebih efisien dan efektif. Dalam konteks ini, analisis kinerja misi spasial menjadi sangat penting, terutama dalam pengambilan keputusan yang melibatkan berbagai kriteria yang saling bertentangan. Misi antariksa modern tidak hanya berfokus pada aspek teknis, tetapi juga mempertimbangkan faktor ekonomi, lingkungan, dan sosial. 

Tantangan utama dalam analisis kinerja misi spasial terletak pada kompleksitas dan ketidakpastian yang melekat pada proses perencanaan dan pelaksanaan misi. Misalnya, dalam misi pengamatan Bumi, keputusan mengenai orbit, jenis sensor, dan waktu pengambilan data harus mempertimbangkan trade-off antara biaya, akurasi, dan waktu respons. Selain itu, dengan semakin ketatnya anggaran dan sumber daya, penting bagi para insinyur untuk mengoptimalkan setiap aspek dari misi tersebut. 

Literatur terkini menunjukkan bahwa pendekatan multi-kriteria, yang mengintegrasikan teori keputusan dan analisis sensitivitas, dapat memberikan kerangka kerja yang komprehensif untuk mengevaluasi dan memilih alternatif terbaik dalam perencanaan misi spasial (Nguyen, 2022; Johnson et al., 2025). Pendekatan ini memungkinkan para pengambil keputusan untuk mempertimbangkan berbagai faktor dan dampak yang mungkin terjadi, sehingga menghasilkan keputusan yang lebih informasional dan berbasis data.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Teori Keputusan

Teori keputusan adalah cabang dari ilmu yang mempelajari bagaimana individu atau kelompok membuat pilihan di antara alternatif yang tersedia. Dalam konteks misi spasial, kita sering menggunakan model multi-kriteria untuk mengevaluasi berbagai alternatif berdasarkan sejumlah kriteria yang relevan. 

### 2.2. Formulasi Matematis

Misalkan kita memiliki $n$ alternatif misi dan $m$ kriteria yang harus dipertimbangkan. Kita dapat mendefinisikan matriks keputusan $X$ sebagai berikut:

$$
X = \begin{bmatrix}
x_{11} & x_{12} & \cdots & x_{1m} \\
x_{21} & x_{22} & \cdots & x_{2m} \\
\vdots & \vdots & \ddots & \vdots \\
x_{n1} & x_{n2} & \cdots & x_{nm}
\end{bmatrix}
$$

di mana $x_{ij}$ adalah nilai kinerja alternatif $i$ pada kriteria $j$. 

### 2.3. Normalisasi

Sebelum melanjutkan, kita perlu menormalkan matriks keputusan untuk memastikan bahwa semua kriteria berada dalam skala yang sama. Normalisasi dapat dilakukan dengan menggunakan rumus berikut:

$$
\tilde{x}_{ij} = \frac{x_{ij}}{\sqrt{\sum_{i=1}^{n} x_{ij}^2}}
$$

di mana $\tilde{x}_{ij}$ adalah nilai normalisasi dari $x_{ij}$.

### 2.4. Pembobotan Kriteria

Setelah normalisasi, kita perlu memberikan bobot pada setiap kriteria, yang mencerminkan pentingnya masing-masing kriteria dalam pengambilan keputusan. Misalkan kita memiliki vektor bobot $W$:

$$
W = \begin{bmatrix}
w_1 \\
w_2 \\
\vdots \\
w_m
\end{bmatrix}
$$

di mana $w_j$ adalah bobot untuk kriteria $j$ dan $\sum_{j=1}^{m} w_j = 1$.

### 2.5. Skor Akhir

Skor akhir untuk setiap alternatif dapat dihitung dengan rumus:

$$
S_i = \sum_{j=1}^{m} w_j \tilde{x}_{ij}
$$

di mana $S_i$ adalah skor akhir untuk alternatif $i$. Alternatif dengan skor tertinggi akan dipilih sebagai solusi terbaik.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Identifikasi Alternatif Misi**: Tentukan berbagai alternatif misi spasial yang akan dievaluasi.
2. **Tentukan Kriteria Evaluasi**: Identifikasi kriteria yang relevan untuk analisis, seperti biaya, waktu, risiko, dan dampak lingkungan.
3. **Kumpulkan Data**: Kumpulkan data yang diperlukan untuk setiap alternatif berdasarkan kriteria yang telah ditentukan.
4. **Normalisasi Data**: Lakukan normalisasi data menggunakan rumus yang telah dijelaskan sebelumnya.
5. **Tentukan Bobot Kriteria**: Berikan bobot pada setiap kriteria berdasarkan pentingnya dalam konteks misi.
6. **Hitung Skor Akhir**: Gunakan rumus skor akhir untuk mengevaluasi setiap alternatif.
7. **Analisis Sensitivitas**: Lakukan analisis sensitivitas untuk memahami bagaimana perubahan pada bobot kriteria mempengaruhi hasil.

### 3.2. Diagram Alir Proses

Diagram alir berikut menggambarkan langkah-langkah dalam metodologi analisis kinerja misi spasial:

```
[Identifikasi Alternatif] --> [Tentukan Kriteria] --> [Kumpulkan Data] 
       |                         |                        |
       v                         v                        v
[Normalisasi Data] --> [Tentukan Bobot] --> [Hitung Skor Akhir] 
       |                                                 |
       v                                                 v
[Analisis Sensitivitas] <------------------------------|
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan kita memiliki tiga alternatif misi spasial (A1, A2, A3) dan dua kriteria (Biaya dan Risiko). Data kinerja yang dikumpulkan adalah sebagai berikut:

| Alternatif | Biaya (juta USD) | Risiko (Skala 1-10) |
|------------|-------------------|---------------------|
| A1         | 100               | 4                   |
| A2         | 150               | 6                   |
| A3         | 120               | 5                   |

### 4.2. Normalisasi Data

Pertama, kita normalisasi data biaya dan risiko. Untuk biaya, kita gunakan:

$$
\tilde{x}_{ij} = \frac{x_{ij}}{\sqrt{\sum_{i=1}^{n} x_{ij}^2}} 
$$

Normalisasi biaya:

$$
\tilde{x}_{11} = \frac{100}{\sqrt{100^2 + 150^2 + 120^2}} = \frac{100}{\sqrt{10000 + 22500 + 14400}} = \frac{100}{\sqrt{46900}} \approx 0.464
$$

$$
\tilde{x}_{21} = \frac{150}{\sqrt{46900}} \approx 0.696
$$

$$
\tilde{x}_{31} = \frac{120}{\sqrt{46900}} \approx 0.553
$$

Normalisasi risiko (semakin rendah semakin baik, sehingga kita gunakan invers):

$$
\tilde{x}_{12} = \frac{10 - 4}{10 - 1} = \frac{6}{9} = 0.667
$$

$$
\tilde{x}_{22} = \frac{10 - 6}{10 - 1} = \frac{4}{9} \approx 0.444
$$

$$
\tilde{x}_{32} = \frac{10 - 5}{10 - 1} = \frac{5}{9} \approx 0.556
$$

### 4.3. Matriks Normalisasi

Matriks normalisasi menjadi:

$$
\tilde{X} = \begin{bmatrix}
0.464 & 0.667 \\
0.696 & 0.444 \\
0.553 & 0.556
\end{bmatrix}
$$

### 4.4. Bobot Kriteria

Misalkan kita memberikan bobot $w_1 = 0.6$ untuk biaya dan $w_2 = 0.4$ untuk risiko. 

### 4.5. Hitung Skor Akhir

Skor akhir untuk setiap alternatif:

$$
S_1 = 0.6 \cdot 0.464 + 0.4 \cdot 0.667 \approx 0.554
$$

$$
S_2 = 0.6 \cdot 0.696 + 0.4 \cdot 0.444 \approx 0.586
$$

$$
S_3 = 0.6 \cdot 0.553 + 0.4 \cdot 0.556 \approx 0.554
$$

### 4.6. Interpretasi Hasil

Berdasarkan perhitungan di atas, alternatif A2 memiliki skor tertinggi (0.586) dan dapat dipilih sebagai alternatif terbaik untuk misi spasial ini.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Analisis kinerja misi spasial dengan pendekatan multi-kriteria tidak hanya relevan dalam konteks antariksa, tetapi juga dapat diterapkan dalam berbagai disiplin ilmu lain, seperti manajemen rantai pasok, otomasi, dan teknik biaya. Dalam manajemen rantai pasok, misalnya, keputusan mengenai pemilihan pemasok atau rute distribusi dapat menggunakan metode serupa untuk mengevaluasi trade-off antara biaya, waktu, dan risiko.

Namun, metodologi ini memiliki batasan, terutama dalam hal ketidakpastian data dan subjektivitas dalam penentuan bobot kriteria. Oleh karena itu, penelitian lebih lanjut diperlukan untuk mengembangkan teknik yang lebih robust, seperti penggunaan metode fuzzy atau analisis probabilistik.

Dengan meningkatnya kompleksitas misi antariksa dan tuntutan untuk efisiensi yang lebih tinggi, pendekatan multi-kriteria akan terus menjadi alat penting dalam pengambilan keputusan di masa depan. Penelitian lebih lanjut diharapkan dapat menghasilkan model yang lebih adaptif dan responsif terhadap dinamika yang berubah dalam industri antariksa.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
