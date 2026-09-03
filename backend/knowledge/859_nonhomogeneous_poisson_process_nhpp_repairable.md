# 859 — Model Proses Poisson Non-Homogen dan Hukum Daya (Crow-AMSAA) untuk Pertumbuhan Keandalan Armada Pertambangan yang Dapat Diperbaiki: Asumsi Perbaikan Minimal, Tren MTBF, dan Uji Laplace

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Non-Homogeneous Poisson Process (NHPP) & Power Law Model (Crow-AMSAA) for Repairable Mining Fleet Reliability Growth: Minimal Repair Assumption, MTBF Trend, and Laplace Test  
**Standar & Referensi Utama:** Ascher & Feingold (Repairable Systems Reliability, Marcel Dekker); MIL-HDBK-189C; Crow (Reliability Growth Modeling)

---

## 1. Pendahuluan dan Konteks Industri

Industri pertambangan merupakan salah satu sektor yang sangat penting dalam perekonomian global, di mana keandalan armada alat berat menjadi kunci utama dalam mencapai efisiensi operasional dan profitabilitas. Dalam konteks ini, keandalan sistem perbaikan armada pertambangan sangat dipengaruhi oleh frekuensi dan sifat kerusakan yang terjadi. Proses Poisson Non-Homogen (NHPP) dan model Hukum Daya (Crow-AMSAA) adalah dua pendekatan yang dapat digunakan untuk menganalisis dan memprediksi pertumbuhan keandalan sistem ini.

Keandalan armada pertambangan tidak hanya berdampak pada produktivitas, tetapi juga pada biaya operasional dan keselamatan kerja. Dengan meningkatnya kompleksitas dan ukuran armada, tantangan dalam pengelolaan keandalan menjadi semakin signifikan. Kerusakan yang tidak terduga dapat menyebabkan downtime yang mahal, yang pada gilirannya mempengaruhi rantai pasok dan kinerja keseluruhan perusahaan. Oleh karena itu, penting untuk menerapkan model keandalan yang dapat secara akurat menggambarkan perilaku sistem dalam kondisi nyata.

Dalam konteks ini, NHPP memberikan kerangka kerja yang fleksibel untuk memodelkan waktu antar kerusakan yang tidak konstan, sedangkan model Crow-AMSAA memungkinkan analisis pertumbuhan keandalan berdasarkan data historis. Dengan mengadopsi asumsi perbaikan minimal, di mana setiap kerusakan hanya memerlukan perbaikan kecil untuk mengembalikan sistem ke kondisi operasional, kita dapat lebih memahami dan mengelola tren Mean Time Between Failures (MTBF) serta melakukan uji Laplace untuk mengevaluasi keandalan sistem.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Proses Poisson Non-Homogen (NHPP)

Proses Poisson Non-Homogen adalah model probabilistik yang digunakan untuk menggambarkan kejadian yang terjadi dalam interval waktu tertentu, di mana laju kejadian tidak konstan. Fungsi intensitas $\lambda(t)$ menggambarkan laju kejadian pada waktu $t$. Dalam konteks keandalan, fungsi ini dapat dinyatakan sebagai:

$$
\lambda(t) = \lambda_0 e^{\beta t}
$$

di mana $\lambda_0$ adalah laju awal kerusakan dan $\beta$ adalah parameter yang menunjukkan pertumbuhan laju kerusakan seiring waktu.

### 2.2 Model Hukum Daya (Crow-AMSAA)

Model Crow-AMSAA mengasumsikan bahwa jumlah kerusakan yang terjadi mengikuti distribusi Hukum Daya. Fungsi distribusi kumulatif untuk model ini dapat dinyatakan sebagai:

$$
N(t) = N_0 + \alpha t^b
$$

di mana $N(t)$ adalah jumlah kerusakan kumulatif pada waktu $t$, $N_0$ adalah jumlah kerusakan awal, $\alpha$ adalah parameter skala, dan $b$ adalah parameter bentuk yang menunjukkan kecepatan pertumbuhan kerusakan.

### 2.3 Mean Time Between Failures (MTBF)

MTBF dapat dihitung dari fungsi intensitas sebagai berikut:

$$
MTBF = \int_0^\infty \frac{1}{\lambda(t)} dt
$$

Dengan substitusi $\lambda(t)$ dari persamaan sebelumnya, kita dapat menghitung MTBF untuk sistem yang mengikuti NHPP.

### 2.4 Uji Laplace

Uji Laplace digunakan untuk mengevaluasi keandalan sistem dengan membandingkan data yang diobservasi dengan model yang diprediksi. Jika $X$ adalah jumlah kerusakan yang teramati dan $Y$ adalah jumlah kerusakan yang diprediksi, maka statistik Laplace dapat dinyatakan sebagai:

$$
L = \frac{X - Y}{\sqrt{Y}}
$$

Jika nilai $L$ berada dalam batas tertentu, maka model dianggap valid.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Langkah-langkah Implementasi

1. **Pengumpulan Data**: Kumpulkan data historis mengenai kerusakan armada, termasuk waktu antar kerusakan dan jenis perbaikan yang dilakukan.
2. **Analisis Data**: Gunakan analisis statistik untuk menentukan parameter $\lambda_0$, $\beta$, $\alpha$, dan $b$.
3. **Modeling**: Terapkan model NHPP dan Crow-AMSAA untuk memprediksi keandalan sistem.
4. **Uji Validasi**: Lakukan uji Laplace untuk memastikan model yang digunakan sesuai dengan data yang diobservasi.
5. **Implementasi Perbaikan**: Berdasarkan hasil analisis, lakukan perbaikan pada proses operasional untuk meningkatkan keandalan.

### 3.2 Diagram Alir Proses

```plaintext
[Pengumpulan Data] --> [Analisis Data] --> [Modeling] --> [Uji Validasi] --> [Implementasi Perbaikan]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Contoh Kasus

Misalkan sebuah perusahaan pertambangan memiliki data sebagai berikut:

- Jumlah kerusakan awal ($N_0$): 5
- Parameter skala ($\alpha$): 2
- Parameter bentuk ($b$): 1.5
- Laju awal kerusakan ($\lambda_0$): 0.1
- Parameter pertumbuhan ($\beta$): 0.02

### 4.2 Perhitungan MTBF

Dengan menggunakan rumus MTBF:

$$
MTBF = \int_0^\infty \frac{1}{\lambda_0 e^{\beta t}} dt = \frac{1}{\lambda_0} \int_0^\infty e^{-\beta t} dt
$$

Hasil integral adalah:

$$
\int_0^\infty e^{-\beta t} dt = \frac{1}{\beta}
$$

Sehingga,

$$
MTBF = \frac{1}{0.1} \cdot \frac{1}{0.02} = 500
$$

### 4.3 Interpretasi Hasil

Hasil MTBF sebesar 500 jam menunjukkan bahwa rata-rata waktu antara kerusakan adalah 500 jam. Ini memberikan informasi penting bagi manajemen untuk merencanakan pemeliharaan dan mengoptimalkan operasi.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Model NHPP dan Crow-AMSAA tidak hanya relevan dalam industri pertambangan, tetapi juga dapat diterapkan dalam berbagai sektor seperti manufaktur, otomasi, dan manajemen rantai pasok. Dengan meningkatnya penggunaan teknologi dan otomasi, pemahaman yang lebih baik tentang keandalan sistem menjadi semakin penting.

Namun, terdapat batasan dalam metodologi ini, terutama dalam hal asumsi yang dibuat mengenai distribusi kerusakan dan kondisi operasional yang berubah-ubah. Penelitian lebih lanjut diperlukan untuk mengembangkan model yang lebih adaptif dan dapat menangani variabilitas yang lebih besar dalam data.

Arah riset masa depan dapat mencakup integrasi model keandalan dengan analisis data besar dan kecerdasan buatan untuk meningkatkan akurasi prediksi dan pengambilan keputusan dalam manajemen keandalan. Dengan demikian, industri dapat lebih siap menghadapi tantangan yang muncul di era digital ini.

--- 

Dokumen ini memberikan gambaran menyeluruh tentang penerapan NHPP dan model Crow-AMSAA dalam konteks keandalan armada pertambangan, serta langkah-langkah praktis untuk implementasi dan evaluasi.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
