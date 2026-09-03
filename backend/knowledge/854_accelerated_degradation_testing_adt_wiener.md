# 854 — Pemodelan Statistik Uji Percepatan Degradasi Menggunakan Proses Wiener dengan Efek Acak: Akselerasi Stres Arrhenius Suhu-Kelembapan dan Waktu Pertama-Lulus RUL

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Accelerated Degradation Testing (ADT) Statistical Modeling using Wiener Processes with Random Effects: Temperature-Humidity Arrhenius Stress Acceleration and First-Passage Time RUL  
**Standar & Referensi Utama:** Nelson (Accelerated Testing: Statistical Models, Test Plans, and Data Analysis, Wiley); ASTM E898; IEEE Trans. Reliab.

---

## 1. Pendahuluan dan Konteks Industri

Dalam era industri modern, perusahaan menghadapi tantangan yang semakin kompleks terkait dengan keandalan dan umur produk. Uji percepatan degradasi (ADT) menjadi salah satu metode yang penting untuk mempercepat pengujian keandalan produk dalam waktu yang lebih singkat. ADT memungkinkan perusahaan untuk memprediksi umur pakai produk dengan lebih akurat, sehingga dapat mengurangi biaya dan meningkatkan efisiensi operasional. Dalam konteks ini, pemodelan statistik menggunakan proses Wiener dengan efek acak menjadi sangat relevan, terutama dalam mengkaji pengaruh stres lingkungan seperti suhu dan kelembapan terhadap degradasi produk.

Stres yang disebabkan oleh suhu dan kelembapan dapat mempercepat proses degradasi material, yang pada gilirannya mempengaruhi waktu kegagalan produk. Model Arrhenius sering digunakan untuk menggambarkan hubungan antara suhu dan laju reaksi kimia, yang dapat diterapkan dalam konteks ADT untuk memperkirakan umur pakai produk di bawah kondisi stres tertentu. Namun, tantangan muncul ketika mempertimbangkan variabilitas dalam data yang dihasilkan, yang dapat disebabkan oleh faktor-faktor acak yang tidak terukur. Oleh karena itu, penggunaan proses Wiener dengan efek acak menjadi penting untuk menangkap dinamika ini dan memberikan estimasi yang lebih realistis mengenai waktu kegagalan pertama (First-Passage Time, FPT) dan umur pakai yang tersisa (Remaining Useful Life, RUL).

Literatur menunjukkan bahwa penerapan ADT dengan pendekatan statistik yang tepat dapat memberikan wawasan yang lebih dalam mengenai keandalan produk dan membantu dalam pengambilan keputusan yang lebih baik dalam manajemen rantai pasok dan pengendalian kualitas (Nelson, 2022; ASTM E898).

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Proses Wiener

Proses Wiener, juga dikenal sebagai gerakan Brownian, adalah model matematis yang digunakan untuk menggambarkan fenomena stokastik. Dalam konteks ADT, proses Wiener dapat dinyatakan sebagai:

$$
W(t) = W(0) + \mu t + \sigma B(t)
$$

di mana:
- $W(t)$ adalah posisi pada waktu $t$,
- $W(0)$ adalah posisi awal,
- $\mu$ adalah drift rate (laju penggerak),
- $\sigma$ adalah volatilitas,
- $B(t)$ adalah proses Brownian standar.

### 2.2. Model Degradasi

Model degradasi dapat dinyatakan sebagai:

$$
D(t) = D(0) - \int_0^t \lambda(s) ds
$$

di mana:
- $D(t)$ adalah degradasi pada waktu $t$,
- $D(0)$ adalah degradasi awal,
- $\lambda(s)$ adalah laju degradasi yang dipengaruhi oleh faktor lingkungan.

### 2.3. Akselerasi Stres Arrhenius

Akselerasi stres dapat dimodelkan menggunakan persamaan Arrhenius:

$$
k(T) = A e^{-\frac{E_a}{RT}}
$$

di mana:
- $k(T)$ adalah laju reaksi pada suhu $T$,
- $A$ adalah faktor pre-eksponensial,
- $E_a$ adalah energi aktivasi,
- $R$ adalah konstanta gas ideal.

### 2.4. Waktu Pertama-Lulus (FPT)

Waktu pertama-lulus dapat dihitung dengan menggunakan distribusi probabilitas dari proses Wiener. Untuk menentukan FPT, kita dapat menggunakan rumus:

$$
FPT = \inf \{ t \geq 0 : D(t) \leq D_{threshold} \}
$$

di mana $D_{threshold}$ adalah batas degradasi yang ditentukan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-Langkah Implementasi

1. **Perencanaan Uji**: Tentukan parameter uji, termasuk suhu, kelembapan, dan waktu uji.
2. **Persiapan Sampel**: Siapkan sampel produk yang akan diuji dan pastikan homogenitas.
3. **Pelaksanaan Uji**: Lakukan pengujian di lingkungan yang telah ditentukan dengan pengukuran degradasi secara berkala.
4. **Pengumpulan Data**: Catat data degradasi dan kondisi lingkungan selama pengujian.
5. **Analisis Data**: Gunakan model statistik untuk menganalisis data degradasi dan menghitung FPT serta RUL.
6. **Pelaporan**: Buat laporan yang mencakup hasil analisis dan rekomendasi untuk pengendalian kualitas.

### 3.2. Diagram Alir Proses

```plaintext
+--------------------+
|  Perencanaan Uji   |
+--------------------+
          |
          v
+--------------------+
|  Persiapan Sampel  |
+--------------------+
          |
          v
+--------------------+
|   Pelaksanaan Uji  |
+--------------------+
          |
          v
+--------------------+
|  Pengumpulan Data   |
+--------------------+
          |
          v
+--------------------+
|   Analisis Data    |
+--------------------+
          |
          v
+--------------------+
|     Pelaporan      |
+--------------------+
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan sebuah perusahaan elektronik ingin menguji umur pakai produk mereka di bawah kondisi suhu 60°C dan kelembapan 85%. Parameter yang digunakan adalah:
- $D(0) = 100$ (degradasi awal),
- $A = 1.2 \times 10^{10}$,
- $E_a = 0.7 \times 10^5$ J/mol,
- $R = 8.314$ J/(mol·K).

### 4.2. Perhitungan

1. **Hitung laju reaksi pada suhu 60°C**:

   $$ 
   k(60) = 1.2 \times 10^{10} e^{-\frac{0.7 \times 10^5}{8.314 \times 333}} 
   $$

   Setelah perhitungan, diperoleh $k(60) \approx 2.5 \times 10^{-3}$.

2. **Hitung degradasi setelah waktu $t$**:

   Misalkan $t = 10$ jam:

   $$
   D(10) = 100 - \int_0^{10} k(60) ds = 100 - k(60) \cdot 10 = 100 - 2.5 \times 10^{-3} \cdot 10 \approx 99.75
   $$

3. **Hitung waktu pertama-lulus**:

   Jika $D_{threshold} = 50$, maka:

   $$
   FPT = \frac{D(0) - D_{threshold}}{k(60)} = \frac{100 - 50}{2.5 \times 10^{-3}} = 20000 \text{ jam}
   $$

### 4.3. Interpretasi Hasil

Hasil analisis menunjukkan bahwa produk tersebut memiliki waktu pertama-lulus sekitar 20000 jam, yang menunjukkan keandalan yang tinggi di bawah kondisi stres yang ditentukan. Hal ini memberikan informasi penting bagi manajemen dalam pengambilan keputusan terkait desain produk dan strategi pemeliharaan.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Penerapan ADT dengan pemodelan statistik yang tepat tidak hanya terbatas pada industri elektronik, tetapi juga dapat diterapkan di sektor otomotif, farmasi, dan material komposit. Dalam konteks rantai pasok, pemahaman yang lebih baik mengenai umur pakai produk dapat membantu dalam pengelolaan inventaris dan pengendalian biaya.

Namun, terdapat batasan dalam metodologi ini, seperti asumsi distribusi normal dalam proses Wiener yang mungkin tidak selalu berlaku dalam semua kasus. Oleh karena itu, riset masa depan perlu mengeksplorasi model-model alternatif yang dapat menangkap kompleksitas data yang lebih besar dan variabilitas yang lebih tinggi.

Standar masa depan dalam ADT juga diharapkan akan lebih mengintegrasikan teknologi digital, seperti analitik data besar dan kecerdasan buatan, untuk meningkatkan akurasi prediksi dan efisiensi proses pengujian.

---

Referensi:
- Nelson, W. (2022). Accelerated Testing: Statistical Models, Test Plans, and Data Analysis. Wiley.
- ASTM E898. Standard Guide for Accelerated Testing of Materials.
- IEEE Trans. Reliab. Reliability Engineering and System Safety.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
