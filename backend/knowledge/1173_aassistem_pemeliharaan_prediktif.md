# 1173 — Pengembangan Asset Administration Shell (AAS) untuk Sistem Pemeliharaan Prediktif Berbasis AI di Smart Factories

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Pengembangan Asset Administration Shell (AAS) untuk Sistem Pemeliharaan Prediktif Berbasis AI di Smart Factories  
**Standar & Referensi Utama:** Williams, T. (2025). 'Predictive Maintenance Using AAS and AI'. CIRP Journal of Manufacturing Science and Technology. ISO 55000:2023.

---

## 1. Pendahuluan dan Konteks Industri

Dalam era industri 4.0, transformasi digital menjadi pendorong utama bagi peningkatan efisiensi dan produktivitas di sektor manufaktur. Salah satu aspek penting dari transformasi ini adalah penerapan sistem pemeliharaan prediktif yang memanfaatkan teknologi kecerdasan buatan (AI) dan konsep Asset Administration Shell (AAS). AAS berfungsi sebagai representasi digital dari aset fisik, yang memungkinkan pemantauan dan analisis data secara real-time. Dengan menggunakan AAS, perusahaan dapat mengumpulkan dan menganalisis data dari berbagai sumber untuk memprediksi kegagalan dan merencanakan pemeliharaan yang lebih efisien.

Urgensi penerapan sistem pemeliharaan prediktif berbasis AI ini terletak pada tantangan yang dihadapi oleh industri modern, seperti meningkatnya kompleksitas sistem produksi, kebutuhan akan pengurangan biaya operasional, dan tuntutan untuk meningkatkan keandalan dan ketersediaan mesin. Menurut Williams (2025), penerapan AAS dalam pemeliharaan prediktif dapat mengurangi waktu henti mesin hingga 30% dan meningkatkan efisiensi operasional secara keseluruhan. Namun, tantangan teknis seperti integrasi data dari berbagai sumber, pengolahan data besar, dan pengembangan algoritma AI yang akurat masih menjadi hambatan yang signifikan.

Dalam konteks ini, standar ISO 55000:2023 memberikan kerangka kerja yang jelas untuk manajemen aset, termasuk prinsip-prinsip yang mendasari pengelolaan siklus hidup aset. Dengan memadukan AAS dan AI, perusahaan dapat meningkatkan efektivitas pemeliharaan dan mengoptimalkan pengelolaan aset, sehingga dapat bersaing di pasar global yang semakin ketat.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Definisi Variabel dan Parameter

1. **A**: Aset fisik (misalnya, mesin, peralatan).
2. **D**: Data historis pemeliharaan dan operasi.
3. **M**: Model prediksi kegagalan.
4. **P**: Probabilitas kegagalan dalam periode waktu tertentu.
5. **T**: Waktu hingga kegagalan (Time to Failure, TTF).
6. **λ (lambda)**: Tingkat kegagalan, dinyatakan dalam kegagalan per unit waktu.

### 2.2. Model Prediksi Kegagalan

Model pemeliharaan prediktif dapat dinyatakan dengan menggunakan distribusi Weibull, yang sering digunakan untuk memodelkan waktu hingga kegagalan. Fungsi distribusi kumulatif (CDF) dari distribusi Weibull adalah:

$$ F(t) = 1 - e^{-(t/\eta)^{\beta}} $$

di mana:
- \( \eta \) adalah parameter skala (scale parameter),
- \( \beta \) adalah parameter bentuk (shape parameter).

Tingkat kegagalan \( \lambda \) dapat dinyatakan sebagai:

$$ \lambda(t) = \frac{\beta}{\eta} \left( \frac{t}{\eta} \right)^{\beta - 1} $$

### 2.3. Pembuktian dan Derivasi

Dari fungsi distribusi kumulatif, kita dapat menghitung probabilitas kegagalan dalam interval waktu \( [t_1, t_2] \):

$$ P(t_1 < T < t_2) = F(t_2) - F(t_1) $$

Dengan menggunakan rumus di atas, kita dapat menghitung probabilitas kegagalan dalam rentang waktu tertentu, yang sangat penting untuk merencanakan pemeliharaan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Identifikasi Aset**: Mengidentifikasi semua aset yang akan dimonitor menggunakan AAS.
2. **Pengumpulan Data**: Mengumpulkan data historis dan real-time dari aset menggunakan sensor IoT.
3. **Pengembangan AAS**: Mengembangkan AAS untuk setiap aset, yang mencakup informasi tentang status, pemeliharaan, dan data operasional.
4. **Modeling**: Mengembangkan model prediksi kegagalan menggunakan algoritma AI dan data yang dikumpulkan.
5. **Integrasi**: Mengintegrasikan AAS dengan sistem manajemen pemeliharaan yang ada.
6. **Uji Coba dan Validasi**: Melakukan uji coba sistem dan validasi model prediksi.
7. **Implementasi Pemeliharaan**: Melaksanakan pemeliharaan berdasarkan hasil prediksi.

### 3.2. Diagram Alir Proses

```
[Identifikasi Aset] --> [Pengumpulan Data] --> [Pengembangan AAS] --> [Modeling] --> [Integrasi] --> [Uji Coba] --> [Implementasi Pemeliharaan]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan sebuah pabrik memiliki mesin dengan data historis sebagai berikut:
- Rata-rata waktu hingga kegagalan (TTF) = 1000 jam.
- Parameter skala \( \eta = 1000 \) dan parameter bentuk \( \beta = 1.5 \).

### 4.2. Perhitungan

1. **Menghitung Probabilitas Kegagalan dalam 500 Jam**:

   $$ P(T < 500) = F(500) = 1 - e^{-(500/1000)^{1.5}} $$

   Menghitung:

   $$ P(T < 500) = 1 - e^{-0.3536} \approx 0.292 $$

   Artinya, ada sekitar 29.2% kemungkinan mesin akan mengalami kegagalan dalam 500 jam.

2. **Menghitung Tingkat Kegagalan pada 500 Jam**:

   $$ \lambda(500) = \frac{1.5}{1000} \left( \frac{500}{1000} \right)^{0.5} = 0.0015 \times 0.7071 \approx 0.00106 $$

   Tingkat kegagalan pada 500 jam adalah sekitar 0.00106 kegagalan per jam.

### 4.3. Interpretasi Hasil

Hasil perhitungan menunjukkan bahwa ada risiko signifikan terhadap kegagalan mesin dalam waktu dekat. Dengan informasi ini, tim pemeliharaan dapat merencanakan pemeliharaan preventif untuk mengurangi kemungkinan kegagalan.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Penerapan AAS dan pemeliharaan prediktif berbasis AI tidak hanya terbatas pada sektor manufaktur, tetapi juga dapat diterapkan di sektor lain seperti transportasi, kesehatan, dan energi. Dalam konteks rantai pasok, integrasi AAS dapat meningkatkan visibilitas dan transparansi, memungkinkan pengambilan keputusan yang lebih baik. 

Namun, beberapa batasan metodologi masih perlu diperhatikan, seperti kualitas data yang dikumpulkan dan kompleksitas algoritma AI yang digunakan. Ke depan, penelitian dapat difokuskan pada pengembangan algoritma yang lebih adaptif dan mampu belajar dari data baru secara real-time, serta integrasi dengan teknologi blockchain untuk meningkatkan keamanan dan integritas data.

Dengan demikian, pengembangan AAS untuk sistem pemeliharaan prediktif berbasis AI di smart factories menawarkan potensi besar untuk meningkatkan efisiensi operasional dan pengelolaan aset, sejalan dengan standar ISO 55000:2023 yang menekankan pentingnya manajemen aset yang efektif.