# 855 — Pemodelan Degradasi Tergantung Multi-Komponen Berbasis Copula dalam Sistem Kompresi Gas Subsea: Copula Archimedean Clayton dan Gumbel, Probabilitas Kegagalan Sistem, dan Penentuan Ukuran Pemeliharaan

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Copula-Based Multi-Component Dependent Degradation Modeling in Subsea Gas Compression Systems: Clayton and Gumbel Archimedean Copulas, System Failure Probability, and Maintenance Sizing  
**Standar & Referensi Utama:** Nelsen (An Introduction to Copulas, Springer); ISO 13628; Trivedi & Bobbio (Reliability and Availability Engineering, Cambridge)

---

## 1. Pendahuluan dan Konteks Industri

Dalam industri subsea, sistem kompresi gas memainkan peran krusial dalam memastikan efisiensi dan keberlanjutan operasi. Dengan meningkatnya permintaan energi global dan penurunan cadangan gas konvensional, perusahaan harus beradaptasi dengan teknologi yang lebih canggih untuk mengoptimalkan produksi gas. Sistem kompresi gas subsea seringkali terdiri dari beberapa komponen yang saling bergantung, di mana kegagalan satu komponen dapat memicu kegagalan sistem secara keseluruhan. Oleh karena itu, pemodelan degradasi yang tepat dan analisis probabilitas kegagalan menjadi sangat penting untuk meminimalkan downtime dan biaya pemeliharaan.

Tantangan utama dalam pemodelan degradasi ini adalah ketidakpastian yang melekat pada interaksi antar komponen. Dalam konteks ini, copula menawarkan pendekatan yang kuat untuk menangkap ketergantungan antara variabel yang berbeda. Dengan menggunakan copula Archimedean, seperti Clayton dan Gumbel, kita dapat membangun model yang lebih akurat untuk memprediksi kegagalan sistem dan merencanakan pemeliharaan yang lebih efektif. Hal ini sejalan dengan standar ISO 13628 yang mengatur desain dan pengoperasian sistem subsea, serta prinsip-prinsip yang diuraikan oleh Trivedi & Bobbio dalam konteks keandalan dan ketersediaan.

Literatur menunjukkan bahwa penerapan model berbasis copula dalam analisis keandalan dapat meningkatkan pemahaman kita tentang risiko dan membantu dalam pengambilan keputusan yang lebih baik dalam manajemen pemeliharaan (Nelsen, 2006; Trivedi & Bobbio, 2017). Oleh karena itu, pemodelan degradasi tergantung multi-komponen ini tidak hanya relevan secara teknis, tetapi juga strategis dalam konteks industri energi yang semakin kompetitif.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Definisi Copula

Copula adalah fungsi yang menghubungkan distribusi marginal dari variabel acak dengan distribusi bersama mereka. Dalam konteks ini, kita akan menggunakan copula Archimedean, khususnya Clayton dan Gumbel, untuk memodelkan ketergantungan antara komponen dalam sistem kompresi gas subsea.

### 2.2. Copula Clayton

Fungsi copula Clayton didefinisikan sebagai:

$$
C_\theta(u_1, u_2) = \left( \max\left(u_1^{-\theta} + u_2^{-\theta} - 1, 0\right) \right)^{-\frac{1}{\theta}}, \quad \theta > 0
$$

di mana $u_1$ dan $u_2$ adalah fungsi distribusi kumulatif dari variabel acak dan $\theta$ adalah parameter ketergantungan.

### 2.3. Copula Gumbel

Fungsi copula Gumbel didefinisikan sebagai:

$$
C_\theta(u_1, u_2) = \exp\left(-\left( (-\ln u_1)^\theta + (-\ln u_2)^\theta \right)^{\frac{1}{\theta}} \right), \quad \theta \geq 1
$$

### 2.4. Probabilitas Kegagalan Sistem

Probabilitas kegagalan sistem $P_F$ dapat dihitung dengan menggunakan copula yang dipilih. Misalkan $X_1$ dan $X_2$ adalah waktu hingga kegagalan dari dua komponen, maka probabilitas kegagalan sistem dapat dinyatakan sebagai:

$$
P_F = P(X_1 \leq t \cap X_2 \leq t) = C(u_1(t), u_2(t))
$$

di mana $u_i(t)$ adalah fungsi distribusi kumulatif dari waktu hingga kegagalan komponen $i$ pada waktu $t$.

### 2.5. Penentuan Ukuran Pemeliharaan

Ukuran pemeliharaan dapat ditentukan berdasarkan probabilitas kegagalan dan biaya pemeliharaan. Misalkan $C_m$ adalah biaya pemeliharaan dan $C_f$ adalah biaya kegagalan, maka ukuran pemeliharaan optimal $M^*$ dapat dinyatakan sebagai:

$$
M^* = \arg\min_{M} \left( C_m(M) + P_F(M) \cdot C_f \right)
$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Identifikasi Komponen**: Tentukan komponen utama dalam sistem kompresi gas subsea yang akan dianalisis.
2. **Pengumpulan Data**: Kumpulkan data historis mengenai waktu hingga kegagalan dan biaya pemeliharaan untuk setiap komponen.
3. **Pemilihan Copula**: Pilih copula yang sesuai (Clayton atau Gumbel) berdasarkan analisis ketergantungan.
4. **Modeling**: Gunakan copula untuk membangun model probabilitas kegagalan sistem.
5. **Analisis Sensitivitas**: Lakukan analisis sensitivitas untuk memahami dampak variasi parameter terhadap probabilitas kegagalan.
6. **Penentuan Ukuran Pemeliharaan**: Hitung ukuran pemeliharaan optimal menggunakan rumus yang telah ditentukan.
7. **Implementasi dan Monitoring**: Terapkan strategi pemeliharaan yang dihasilkan dan lakukan monitoring secara berkala.

### 3.2. Diagram Alir Proses

```plaintext
[Identifikasi Komponen] --> [Pengumpulan Data] --> [Pemilihan Copula] --> [Modeling] --> [Analisis Sensitivitas] --> [Penentuan Ukuran Pemeliharaan] --> [Implementasi dan Monitoring]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan kita memiliki dua komponen dalam sistem kompresi gas subsea dengan waktu hingga kegagalan yang terdistribusi eksponensial:

- Komponen 1: $\lambda_1 = 0.1$ (kegagalan per tahun)
- Komponen 2: $\lambda_2 = 0.15$ (kegagalan per tahun)

### 4.2. Perhitungan Probabilitas Kegagalan

Fungsi distribusi kumulatif untuk masing-masing komponen adalah:

$$
u_1(t) = 1 - e^{-\lambda_1 t}, \quad u_2(t) = 1 - e^{-\lambda_2 t}
$$

Untuk $t = 5$ tahun, kita hitung:

$$
u_1(5) = 1 - e^{-0.1 \cdot 5} = 1 - e^{-0.5} \approx 0.3935
$$

$$
u_2(5) = 1 - e^{-0.15 \cdot 5} = 1 - e^{-0.75} \approx 0.5273
$$

### 4.3. Menggunakan Copula Clayton

Dengan $\theta = 2$ untuk copula Clayton, kita hitung probabilitas kegagalan sistem:

$$
P_F = C_2(0.3935, 0.5273) = \left( \max\left(0.3935^{-2} + 0.5273^{-2} - 1, 0\right) \right)^{-0.5} \approx 0.2734
$$

### 4.4. Penentuan Ukuran Pemeliharaan

Misalkan biaya pemeliharaan $C_m(M) = 1000M$ dan biaya kegagalan $C_f = 50000$. Maka kita dapat menghitung ukuran pemeliharaan optimal:

$$
M^* = \arg\min_{M} \left( 1000M + 0.2734 \cdot 50000 \right)
$$

### 4.5. Interpretasi Hasil

Hasil perhitungan menunjukkan bahwa probabilitas kegagalan sistem dalam 5 tahun adalah sekitar 27.34%. Dengan biaya pemeliharaan yang meningkat seiring dengan ukuran pemeliharaan, perusahaan harus mempertimbangkan trade-off antara biaya pemeliharaan dan risiko kegagalan untuk menentukan ukuran pemeliharaan yang optimal.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Pendekatan berbasis copula dalam pemodelan degradasi dan analisis keandalan dapat diterapkan di berbagai sektor, termasuk rantai pasok, otomasi, dan manajemen biaya. Dalam konteks rantai pasok, pemodelan ketergantungan antar pemasok dapat membantu dalam merencanakan strategi mitigasi risiko yang lebih baik. Dalam otomasi, pemantauan kondisi dan pemeliharaan prediktif dapat dioptimalkan dengan menggunakan model probabilitas yang lebih akurat.

Namun, terdapat batasan dalam metodologi ini, seperti asumsi distribusi yang mungkin tidak selalu valid dalam praktik. Oleh karena itu, penelitian masa depan harus fokus pada pengembangan model yang lebih fleksibel dan adaptif, serta integrasi dengan teknologi IoT untuk pengumpulan data real-time.

Dengan demikian, pemodelan degradasi tergantung multi-komponen berbasis copula tidak hanya meningkatkan pemahaman kita tentang sistem yang kompleks, tetapi juga memberikan dasar yang kuat untuk pengambilan keputusan yang lebih baik dalam manajemen pemeliharaan dan risiko di industri subsea dan sektor lainnya.