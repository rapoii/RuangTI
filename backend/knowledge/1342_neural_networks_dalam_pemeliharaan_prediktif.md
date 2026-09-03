# 1342 — Predictive Maintenance in Manufacturing Systems Using Physics-Informed Neural Networks and Data-Driven Approaches

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Predictive Maintenance in Manufacturing Systems Using Physics-Informed Neural Networks and Data-Driven Approaches  
**Standar & Referensi Utama:** Garcia, M. (2025). 'Predictive Maintenance: A Data-Driven Approach'. CIRP Annals - Manufacturing Technology. DOI: 10.1016/j.cirp.2025.01.012; IEEE 1680.1 - Standard for Environmental Assessment of Electronic Products.

---

## 1. Pendahuluan dan Konteks Industri

Dalam era industri 4.0, pemeliharaan prediktif (Predictive Maintenance) telah menjadi salah satu fokus utama dalam meningkatkan efisiensi dan produktivitas sistem manufaktur. Dengan meningkatnya kompleksitas mesin dan peralatan, serta tuntutan untuk mengurangi waktu henti (downtime), pemeliharaan prediktif menawarkan solusi yang lebih cerdas dibandingkan dengan pendekatan pemeliharaan tradisional. Pendekatan ini memanfaatkan data historis dan algoritma canggih untuk memprediksi kegagalan sebelum terjadi, sehingga memungkinkan intervensi yang tepat waktu.

Tantangan yang dihadapi dalam implementasi pemeliharaan prediktif meliputi pengumpulan dan analisis data yang akurat, integrasi sistem yang kompleks, serta kebutuhan untuk memahami perilaku fisik dari mesin yang digunakan. Misalnya, dalam industri otomotif, kegagalan mesin dapat menyebabkan kerugian finansial yang signifikan dan dampak negatif pada rantai pasok. Oleh karena itu, penerapan metode pemeliharaan prediktif yang berbasis pada Neural Networks yang diinformasikan fisika (Physics-Informed Neural Networks) dan pendekatan berbasis data (Data-Driven Approaches) menjadi sangat penting.

Literatur menunjukkan bahwa penerapan teknik ini tidak hanya meningkatkan keandalan mesin tetapi juga mengurangi biaya operasional. Garcia (2025) menekankan pentingnya pemeliharaan prediktif dalam konteks manufaktur modern, di mana efisiensi dan keberlanjutan menjadi prioritas utama. Dengan memanfaatkan data yang tersedia dan algoritma canggih, perusahaan dapat mengoptimalkan proses produksi dan memperpanjang umur peralatan, yang pada gilirannya meningkatkan daya saing di pasar global.

## 2. Landasan Teori & Formulasi Matematis

Pemeliharaan prediktif menggunakan model matematis untuk memprediksi kegagalan peralatan. Salah satu pendekatan yang menjanjikan adalah penggunaan Neural Networks yang diinformasikan fisika. Model ini menggabungkan data historis dengan pengetahuan fisika tentang sistem yang sedang dianalisis.

Misalkan kita memiliki fungsi biaya $C$ yang dinyatakan sebagai:

$$
C(\theta) = \frac{1}{N} \sum_{i=1}^{N} (y_i - f(x_i; \theta))^2 + \lambda R(\theta)
$$

di mana:
- $y_i$ adalah output yang diharapkan,
- $f(x_i; \theta)$ adalah output model neural network,
- $\theta$ adalah parameter model,
- $N$ adalah jumlah data,
- $\lambda$ adalah koefisien regularisasi,
- $R(\theta)$ adalah fungsi regularisasi.

Model ini dioptimalkan dengan menggunakan algoritma pembelajaran mesin seperti Stochastic Gradient Descent (SGD):

$$
\theta^{(t+1)} = \theta^{(t)} - \eta \nabla C(\theta^{(t)})
$$

di mana $\eta$ adalah laju pembelajaran. Dengan menggabungkan data historis dan model fisik, kita dapat meningkatkan akurasi prediksi kegagalan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi pemeliharaan prediktif menggunakan Neural Networks yang diinformasikan fisika melibatkan beberapa langkah sistematis:

1. **Pengumpulan Data**: Mengumpulkan data operasional dari sensor dan sistem monitoring.
2. **Preprocessing Data**: Membersihkan dan menyiapkan data untuk analisis, termasuk normalisasi dan pengisian nilai yang hilang.
3. **Pengembangan Model**: Membangun model Neural Network yang diinformasikan fisika berdasarkan data yang telah diproses.
4. **Pelatihan Model**: Melatih model menggunakan data historis dan memvalidasi kinerjanya.
5. **Implementasi**: Mengintegrasikan model ke dalam sistem pemeliharaan untuk memprediksi kegagalan.
6. **Monitoring dan Penyesuaian**: Terus memantau kinerja model dan melakukan penyesuaian jika diperlukan.

Diagram alir proses dapat digambarkan sebagai berikut:

```
[Pengumpulan Data] --> [Preprocessing Data] --> [Pengembangan Model] --> [Pelatihan Model] --> [Implementasi] --> [Monitoring]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai contoh, mari kita pertimbangkan sebuah pabrik otomotif yang menggunakan mesin CNC. Misalkan data historis menunjukkan bahwa mesin mengalami kegagalan setiap 500 jam operasi dengan biaya perbaikan rata-rata sebesar $10,000. Dengan menggunakan model pemeliharaan prediktif, kita dapat menghitung probabilitas kegagalan dalam periode tertentu.

Misalkan kita memiliki data sebagai berikut:
- Rata-rata waktu antar kegagalan (MTBF): 500 jam
- Rata-rata waktu perbaikan (MTTR): 50 jam
- Total jam operasi per tahun: 8,000 jam

Probabilitas kegagalan dalam satu tahun dapat dihitung menggunakan rumus distribusi Poisson:

$$
P(k; \lambda) = \frac{\lambda^k e^{-\lambda}}{k!}
$$

di mana $\lambda = \frac{8000}{500} = 16$ (rata-rata kegagalan per tahun). Untuk $k=1$ (satu kegagalan):

$$
P(1; 16) = \frac{16^1 e^{-16}}{1!} = 16 e^{-16} \approx 0.000112
$$

Dengan demikian, probabilitas terjadinya satu kegagalan dalam satu tahun adalah sekitar 0.0112%. Jika kita menerapkan pemeliharaan prediktif, kita dapat mengurangi biaya perbaikan dan meningkatkan ketersediaan mesin, yang pada akhirnya berdampak positif pada profitabilitas perusahaan.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Pemeliharaan prediktif tidak hanya relevan dalam sektor manufaktur, tetapi juga dapat diterapkan dalam berbagai disiplin lain seperti rantai pasok, otomasi, dan manajemen biaya. Dalam konteks rantai pasok, pemeliharaan prediktif dapat membantu dalam mengurangi risiko kegagalan peralatan yang dapat mengganggu aliran barang. Dalam otomasi, sistem pemeliharaan prediktif dapat diintegrasikan dengan sistem kontrol untuk meningkatkan efisiensi operasional.

Namun, terdapat beberapa batasan dalam metodologi ini, termasuk kebutuhan akan data yang berkualitas tinggi dan tantangan dalam mengintegrasikan sistem yang berbeda. Ke depan, penelitian dapat difokuskan pada pengembangan algoritma yang lebih canggih dan penerapan teknologi baru seperti Internet of Things (IoT) untuk meningkatkan akurasi prediksi.

Dengan mengadopsi standar yang ditetapkan oleh IEEE 1680.1, perusahaan dapat memastikan bahwa produk dan proses yang digunakan dalam pemeliharaan prediktif memenuhi kriteria lingkungan yang ketat, yang semakin penting dalam konteks keberlanjutan industri. 

Melalui pemahaman yang mendalam tentang teknik pemeliharaan prediktif dan penerapan teknologi terkini, perusahaan dapat mencapai efisiensi yang lebih tinggi dan mengurangi biaya operasional, serta meningkatkan daya saing di pasar global.$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
