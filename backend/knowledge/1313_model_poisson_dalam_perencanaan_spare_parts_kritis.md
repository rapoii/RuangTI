# 1313 — Model Poisson Criticality untuk Perencanaan dan Pengelolaan Spare Parts Kritis dalam Rantai Pasokan

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Model Poisson Criticality untuk Perencanaan dan Pengelolaan Spare Parts Kritis dalam Rantai Pasokan  
**Standar & Referensi Utama:** Johnson, R. (2022). Critical Spare Parts Management Using Poisson Models. International Journal of Production Research. | EOR, 2022.

---

## 1. Pendahuluan dan Konteks Industri

Dalam dunia industri modern, manajemen suku cadang kritis menjadi salah satu aspek vital dalam menjaga kelangsungan operasional dan efisiensi rantai pasokan. Suku cadang kritis adalah komponen yang, jika tidak tersedia, dapat menyebabkan gangguan signifikan dalam proses produksi. Dengan meningkatnya kompleksitas sistem manufaktur dan permintaan yang semakin beragam, tantangan dalam perencanaan dan pengelolaan suku cadang kritis semakin mendesak. Menurut Johnson (2022), kegagalan dalam pengelolaan suku cadang dapat berakibat pada peningkatan biaya operasional, penurunan produktivitas, dan dampak negatif pada kepuasan pelanggan.

Dalam konteks ini, model Poisson menawarkan pendekatan matematis yang kuat untuk memprediksi kebutuhan suku cadang berdasarkan pola permintaan yang acak dan tidak terduga. Model ini sangat relevan dalam situasi di mana permintaan suku cadang bersifat sporadis dan sulit diprediksi. Dengan menggunakan model Poisson, perusahaan dapat mengoptimalkan tingkat persediaan suku cadang kritis, meminimalkan risiko kehabisan stok, serta mengurangi biaya penyimpanan. Namun, tantangan dalam penerapan model ini mencakup akurasi data historis dan pemilihan parameter yang tepat untuk representasi yang akurat.

Oleh karena itu, pemahaman yang mendalam tentang model Poisson dan aplikasinya dalam manajemen suku cadang kritis sangat penting untuk meningkatkan efisiensi dan efektivitas rantai pasokan di industri saat ini.

## 2. Landasan Teori & Formulasi Matematis

Model Poisson digunakan untuk memodelkan jumlah kejadian yang terjadi dalam interval waktu tertentu, dengan asumsi bahwa kejadian tersebut terjadi secara independen. Fungsi distribusi probabilitas Poisson dinyatakan sebagai:

$$
P(X = k) = \frac{\lambda^k e^{-\lambda}}{k!}
$$

di mana:
- $P(X = k)$ adalah probabilitas terjadinya $k$ kejadian dalam interval waktu tertentu,
- $\lambda$ adalah rata-rata jumlah kejadian dalam interval waktu tersebut,
- $e$ adalah bilangan Euler (sekitar 2.71828),
- $k$ adalah jumlah kejadian yang diinginkan (0, 1, 2, ...).

Dalam konteks pengelolaan suku cadang kritis, kita mendefinisikan $\lambda$ sebagai rata-rata permintaan suku cadang dalam periode tertentu. Untuk menentukan tingkat persediaan yang optimal, kita perlu menghitung nilai ekspektasi dan varians dari distribusi Poisson:

1. Ekspektasi:
$$
E(X) = \lambda
$$

2. Varians:
$$
Var(X) = \lambda
$$

Dengan menggunakan ekspektasi dan varians ini, kita dapat menghitung tingkat persediaan yang diperlukan untuk memenuhi permintaan dengan tingkat kepercayaan tertentu. Misalkan kita ingin menentukan tingkat persediaan $S$ yang dapat memenuhi permintaan dengan probabilitas $p$. Maka kita dapat menggunakan pendekatan berikut:

$$
S = \lambda + z \sqrt{\lambda}
$$

di mana $z$ adalah nilai z dari distribusi normal yang sesuai dengan tingkat kepercayaan yang diinginkan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model Poisson dalam manajemen suku cadang kritis memerlukan langkah-langkah sistematis sebagai berikut:

1. **Pengumpulan Data Historis**: Mengumpulkan data permintaan suku cadang kritis selama periode tertentu untuk menentukan nilai $\lambda$.
   
2. **Analisis Data**: Menggunakan analisis statistik untuk mengevaluasi pola permintaan dan menentukan distribusi yang paling sesuai.

3. **Perhitungan Parameter Model**: Menghitung nilai $\lambda$ dan parameter lainnya yang diperlukan untuk model Poisson.

4. **Penentuan Tingkat Persediaan**: Menggunakan rumus yang telah dijelaskan di atas untuk menentukan tingkat persediaan yang optimal berdasarkan ekspektasi dan varians.

5. **Implementasi Sistem Manajemen Persediaan**: Mengintegrasikan hasil perhitungan ke dalam sistem manajemen persediaan yang ada.

6. **Monitoring dan Evaluasi**: Secara berkala memonitor permintaan dan mengevaluasi kinerja model untuk melakukan penyesuaian yang diperlukan.

Diagram alir proses dapat digambarkan sebagai berikut:

```
[Pengumpulan Data] --> [Analisis Data] --> [Perhitungan Parameter] --> [Tentukan Tingkat Persediaan] --> [Implementasi] --> [Monitoring]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Misalkan sebuah perusahaan manufaktur memproduksi komponen otomotif dan memiliki data permintaan suku cadang kritis sebagai berikut (dalam satuan unit per bulan) selama 12 bulan terakhir:

| Bulan | Permintaan |
|-------|------------|
| 1     | 5          |
| 2     | 3          |
| 3     | 4          |
| 4     | 6          |
| 5     | 2          |
| 6     | 5          |
| 7     | 7          |
| 8     | 4          |
| 9     | 3          |
| 10    | 5          |
| 11    | 6          |
| 12    | 4          |

Dari data di atas, kita dapat menghitung rata-rata permintaan ($\lambda$):

$$
\lambda = \frac{5 + 3 + 4 + 6 + 2 + 5 + 7 + 4 + 3 + 5 + 6 + 4}{12} = \frac{60}{12} = 5
$$

Selanjutnya, kita dapat menghitung tingkat persediaan yang diperlukan untuk memenuhi permintaan dengan tingkat kepercayaan 95%. Nilai $z$ untuk tingkat kepercayaan 95% adalah 1.96. Maka, kita dapat menghitung tingkat persediaan ($S$) sebagai berikut:

$$
S = \lambda + z \sqrt{\lambda} = 5 + 1.96 \sqrt{5} \approx 5 + 4.39 \approx 9.39
$$

Dengan demikian, perusahaan harus mempertahankan tingkat persediaan minimal 10 unit untuk memenuhi permintaan dengan tingkat kepercayaan 95%.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Model Poisson Criticality tidak hanya relevan dalam konteks manajemen suku cadang kritis, tetapi juga memiliki aplikasi luas di berbagai disiplin ilmu, termasuk manajemen rantai pasokan, otomasi, dan teknik biaya. Dalam manajemen rantai pasokan, pemahaman yang baik tentang pola permintaan dapat membantu dalam pengambilan keputusan yang lebih baik terkait pengadaan dan distribusi. Selain itu, integrasi teknologi otomasi dalam proses manajemen persediaan dapat meningkatkan efisiensi dan mengurangi kesalahan manusia.

Namun, terdapat batasan dalam metodologi ini, seperti asumsi independensi kejadian dan distribusi yang homogen. Penelitian masa depan dapat mengeksplorasi penggunaan model yang lebih kompleks, seperti model campuran atau model berbasis simulasi, untuk menangani ketidakpastian yang lebih besar dalam permintaan.

Dengan demikian, penerapan model Poisson dalam manajemen suku cadang kritis merupakan langkah strategis yang dapat meningkatkan efisiensi operasional dan memberikan keunggulan kompetitif di pasar yang semakin ketat.