# 1183 — Model Bahasa Besar Multi-Agent untuk Pemeliharaan Prediktif di Lingkungan IoT Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Multi-Agent Large Language Models for Predictive Maintenance in Industrial IoT Environments  
**Standar & Referensi Utama:** Chen, Y. et al. (2025). Predictive Maintenance with Multi-Agent Systems. CIRP Annals - Manufacturing Technology. DOI: 10.1016/j.cirp.2025.01.002

---

## 1. Pendahuluan dan Konteks Industri

Dalam era industri 4.0, pemeliharaan prediktif telah menjadi salah satu pilar utama dalam meningkatkan efisiensi operasional dan mengurangi biaya di sektor manufaktur. Dengan meningkatnya kompleksitas sistem produksi dan ketergantungan pada teknologi Internet of Things (IoT), tantangan dalam pemeliharaan peralatan menjadi semakin signifikan. Menurut Chen et al. (2025), pemeliharaan prediktif yang didukung oleh sistem multi-agent dapat memberikan solusi yang inovatif dalam mengatasi masalah ini.

Urgensi operasional dari pemeliharaan prediktif terletak pada kemampuannya untuk memprediksi kegagalan mesin sebelum terjadi, sehingga mengurangi waktu henti yang tidak terencana dan meningkatkan produktivitas. Secara ekonomi, hal ini dapat menghemat biaya yang signifikan, karena perbaikan yang dilakukan secara reaktif sering kali lebih mahal dibandingkan dengan pemeliharaan yang direncanakan. Selain itu, tantangan teknis yang dihadapi dalam integrasi data dari berbagai sumber, termasuk sensor IoT, memerlukan pendekatan yang lebih canggih untuk analisis dan pengambilan keputusan.

Dalam konteks rantai pasok modern, pemeliharaan prediktif tidak hanya berfokus pada mesin, tetapi juga pada keseluruhan sistem yang terintegrasi, termasuk manajemen persediaan dan logistik. Oleh karena itu, penerapan model bahasa besar multi-agent dalam pemeliharaan prediktif menawarkan potensi untuk meningkatkan kolaborasi antar-agent dalam menganalisis data dan memberikan rekomendasi yang lebih akurat.

## 2. Landasan Teori & Formulasi Matematis

Pemeliharaan prediktif berbasis multi-agent mengandalkan beberapa komponen kunci, termasuk pengumpulan data, analisis, dan pengambilan keputusan. Model matematis yang digunakan dalam pemeliharaan prediktif dapat dirumuskan sebagai berikut:

1. **Model Kegagalan**: Misalkan $T$ adalah waktu hingga kegagalan, yang mengikuti distribusi probabilitas tertentu. Kita dapat menggunakan distribusi Weibull untuk memodelkan waktu hingga kegagalan:

   $$ f(t; \lambda, k) = \frac{k}{\lambda} \left( \frac{t}{\lambda} \right)^{k-1} e^{-(t/\lambda)^k} $$

   di mana $\lambda$ adalah parameter skala dan $k$ adalah parameter bentuk.

2. **Model Prediksi**: Untuk memprediksi kapan pemeliharaan diperlukan, kita dapat menggunakan model regresi linier sederhana:

   $$ Y = \beta_0 + \beta_1 X + \epsilon $$

   di mana $Y$ adalah waktu hingga kegagalan yang diprediksi, $X$ adalah variabel independen (misalnya, jam operasi mesin), $\beta_0$ dan $\beta_1$ adalah koefisien regresi, dan $\epsilon$ adalah kesalahan acak.

3. **Kriteria Keputusan**: Dalam sistem multi-agent, keputusan pemeliharaan dapat diambil berdasarkan fungsi utilitas yang meminimalkan biaya total, yang dapat dinyatakan sebagai:

   $$ U = C_{pm} + C_{pf} + C_{d} $$

   di mana $C_{pm}$ adalah biaya pemeliharaan, $C_{pf}$ adalah biaya kegagalan, dan $C_{d}$ adalah biaya downtime.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem pemeliharaan prediktif berbasis multi-agent dapat dilakukan melalui langkah-langkah berikut:

1. **Pengumpulan Data**: Mengintegrasikan sensor IoT untuk mengumpulkan data operasional mesin secara real-time.
2. **Analisis Data**: Menggunakan algoritma pembelajaran mesin untuk menganalisis data dan memprediksi waktu hingga kegagalan.
3. **Model Multi-Agent**: Mengembangkan agent yang dapat berkomunikasi dan berkolaborasi untuk mengambil keputusan pemeliharaan.
4. **Implementasi Keputusan**: Menggunakan hasil analisis untuk merencanakan dan melaksanakan pemeliharaan.

Diagram alir proses dapat digambarkan sebagai berikut:

```
[Pengumpulan Data] --> [Analisis Data] --> [Model Multi-Agent] --> [Implementasi Keputusan]
```

Standar prosedur operasional (SOP) harus mengikuti pedoman ISO 55000 untuk manajemen aset, serta standar IEEE untuk sistem berbasis agen.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai contoh, mari kita pertimbangkan sebuah pabrik yang memiliki mesin dengan waktu hingga kegagalan yang mengikuti distribusi Weibull dengan parameter $\lambda = 1000$ jam dan $k = 1.5$. Kita ingin memprediksi waktu hingga kegagalan setelah 500 jam operasi.

1. **Menghitung Probabilitas Kegagalan**:

   $$ P(T \leq 500) = 1 - e^{-(500/1000)^{1.5}} $$

   $$ P(T \leq 500) = 1 - e^{-0.35355} \approx 0.293 $$

   Artinya, ada sekitar 29.3% kemungkinan mesin akan gagal dalam 500 jam.

2. **Menghitung Biaya Pemeliharaan**:

   Misalkan biaya pemeliharaan $C_{pm} = 2000$, biaya kegagalan $C_{pf} = 5000$, dan biaya downtime $C_{d} = 3000$. Maka total biaya dapat dihitung sebagai:

   $$ U = 2000 + 5000 \times 0.293 + 3000 $$

   $$ U \approx 2000 + 1465 + 3000 = 6465 $$

   Interpretasi hasil ini menunjukkan bahwa total biaya pemeliharaan dan downtime setelah 500 jam operasi adalah sekitar $6465.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Model pemeliharaan prediktif berbasis multi-agent tidak hanya relevan dalam konteks industri manufaktur, tetapi juga dapat diterapkan dalam sektor lain seperti transportasi, energi, dan kesehatan. Dalam konteks rantai pasok, pemeliharaan prediktif dapat membantu mengoptimalkan manajemen persediaan dan mengurangi risiko kegagalan pada titik kritis.

Namun, terdapat beberapa batasan dalam metodologi ini, termasuk ketergantungan pada kualitas data yang dikumpulkan dan kompleksitas dalam pengembangan model multi-agent yang efisien. Oleh karena itu, arah riset masa depan harus fokus pada pengembangan algoritma yang lebih canggih dan integrasi dengan teknologi baru seperti kecerdasan buatan dan analitik data besar.

Dengan demikian, pemeliharaan prediktif berbasis multi-agent menawarkan potensi yang signifikan untuk meningkatkan efisiensi operasional dan mengurangi biaya dalam berbagai sektor industri, sejalan dengan perkembangan teknologi dan kebutuhan pasar yang terus berubah.