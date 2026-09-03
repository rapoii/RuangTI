# 1396 — Pupillometri sebagai Alat untuk Menginformasikan Desain Ergonomi: Studi Kasus dalam Lingkungan Kerja Dinamis

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Pupillometri sebagai Alat untuk Menginformasikan Desain Ergonomi: Studi Kasus dalam Lingkungan Kerja Dinamis  
**Standar & Referensi Utama:** Lopez, A., & Chen, Y. (2023). Pupillometry in Ergonomic Design: A Dynamic Work Environment Case Study. Journal of Ergonomics, 15(2), 99-110. doi:10.1177/0014013923123456

---

## 1. Pendahuluan dan Konteks Industri

Dalam era industri modern, desain ergonomi menjadi semakin penting untuk meningkatkan produktivitas dan kesejahteraan pekerja. Lingkungan kerja yang dinamis, seperti pabrik dan pusat distribusi, menghadapi tantangan besar dalam menciptakan kondisi kerja yang optimal. Salah satu tantangan utama adalah mengelola beban kognitif pekerja dalam situasi yang sering berubah. Menurut Lopez dan Chen (2023), pupillometri dapat digunakan sebagai alat untuk mengukur respons fisiologis terhadap beban kerja kognitif, sehingga memberikan wawasan berharga dalam desain ergonomi.

Pupillometri, yang mengukur perubahan diameter pupil sebagai respons terhadap berbagai stimulus, dapat memberikan data kuantitatif tentang tingkat perhatian dan stres pekerja. Dengan menggunakan data ini, perusahaan dapat merancang lingkungan kerja yang lebih baik, mengurangi risiko kelelahan, dan meningkatkan efisiensi. Dalam konteks ini, penting untuk memahami bagaimana faktor-faktor seperti pencahayaan, kebisingan, dan interaksi sosial mempengaruhi kinerja dan kesejahteraan pekerja.

Tantangan yang dihadapi di sektor manufaktur dan rantai pasok modern mencakup kebutuhan untuk mengadaptasi desain tempat kerja agar sesuai dengan kebutuhan individu, serta meminimalkan risiko cedera akibat desain yang tidak ergonomis. Oleh karena itu, penerapan pupillometri dalam desain ergonomi tidak hanya relevan secara teoritis, tetapi juga praktis dalam meningkatkan produktivitas dan keselamatan kerja.

## 2. Landasan Teori & Formulasi Matematis

Pupillometri berfokus pada pengukuran diameter pupil, yang dapat dipengaruhi oleh berbagai faktor, termasuk pencahayaan dan beban kognitif. Dalam konteks ini, kita dapat menggunakan rumus dasar untuk menghitung respons pupil terhadap stimulus:

$$
D(t) = D_0 + \Delta D \cdot e^{-\frac{t}{\tau}}
$$

Di mana:
- \( D(t) \) = diameter pupil pada waktu \( t \)
- \( D_0 \) = diameter pupil awal
- \( \Delta D \) = perubahan diameter pupil
- \( \tau \) = konstanta waktu respons pupil

Variabel-variabel ini dapat diukur dan dianalisis untuk memahami bagaimana perubahan lingkungan kerja mempengaruhi respons fisiologis pekerja. Dengan mengumpulkan data dari berbagai kondisi kerja, kita dapat mengembangkan model matematis yang lebih kompleks untuk memprediksi respons pupil dalam situasi yang berbeda.

Sebagai contoh, jika kita mengukur diameter pupil pekerja dalam kondisi pencahayaan rendah dan tinggi, kita dapat menggunakan analisis regresi untuk menentukan hubungan antara pencahayaan dan respons pupil:

$$
D = \beta_0 + \beta_1 \cdot L + \epsilon
$$

Di mana:
- \( D \) = diameter pupil
- \( L \) = tingkat pencahayaan
- \( \beta_0 \) dan \( \beta_1 \) = koefisien regresi
- \( \epsilon \) = error term

Model ini memungkinkan kita untuk memprediksi bagaimana perubahan pencahayaan dapat mempengaruhi tingkat perhatian pekerja, yang sangat relevan dalam desain ergonomi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi pupillometri dalam desain ergonomi melibatkan beberapa langkah sistematis:

1. **Identifikasi Tujuan**: Menentukan tujuan penggunaan pupillometri, seperti meningkatkan kenyamanan atau produktivitas.
2. **Pengumpulan Data**: Menggunakan perangkat pupillometer untuk mengukur diameter pupil dalam berbagai kondisi kerja.
3. **Analisis Data**: Menggunakan metode statistik untuk menganalisis data yang dikumpulkan dan mengidentifikasi pola.
4. **Desain Ulang Lingkungan Kerja**: Berdasarkan hasil analisis, merancang ulang elemen-elemen lingkungan kerja untuk meningkatkan ergonomi.
5. **Uji Coba dan Evaluasi**: Melakukan uji coba untuk mengevaluasi dampak perubahan desain terhadap kinerja dan kesejahteraan pekerja.

Diagram alir proses dapat digambarkan sebagai berikut:

```
[Identifikasi Tujuan] --> [Pengumpulan Data] --> [Analisis Data] --> [Desain Ulang] --> [Uji Coba dan Evaluasi]
```

Standar prosedur operasional (SOP) harus mencakup protokol pengukuran, analisis data, dan evaluasi hasil untuk memastikan konsistensi dan akurasi.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai contoh, mari kita pertimbangkan sebuah pabrik yang ingin meningkatkan desain ergonomi dengan menggunakan pupillometri. Dalam studi ini, kita akan mengukur diameter pupil pekerja dalam dua kondisi pencahayaan: rendah (100 lux) dan tinggi (800 lux).

### Input Parameter:
- Diameter pupil awal (\( D_0 \)): 3 mm
- Perubahan diameter pupil (\( \Delta D \)): 1 mm
- Konstanta waktu respons pupil (\( \tau \)): 0.5 detik

### Langkah Kalkulasi:

1. **Menghitung Diameter Pupil pada Pencahayaan Rendah**:
   $$ D(0.5) = 3 + 1 \cdot e^{-\frac{0.5}{0.5}} = 3 + 1 \cdot e^{-1} \approx 3 + 0.368 = 3.368 \text{ mm} $$

2. **Menghitung Diameter Pupil pada Pencahayaan Tinggi**:
   $$ D(0.5) = 3 + 1 \cdot e^{-\frac{0.5}{0.5}} = 3 + 1 \cdot e^{-1} \approx 3 + 0.368 = 3.368 \text{ mm} $$

3. **Analisis Hasil**:
   Dalam kedua kondisi pencahayaan, diameter pupil menunjukkan respons yang sama. Namun, jika kita menambahkan variabel lain seperti beban kognitif, kita dapat melakukan analisis lebih lanjut untuk menentukan bagaimana faktor-faktor ini saling berinteraksi.

### Interpretasi Hasil:
Hasil ini menunjukkan bahwa meskipun ada perubahan dalam pencahayaan, respons pupil tetap konstan. Hal ini dapat mengindikasikan bahwa faktor lain, seperti beban kerja kognitif, mungkin lebih dominan dalam mempengaruhi perhatian pekerja. Oleh karena itu, penting untuk mempertimbangkan berbagai variabel dalam desain ergonomi.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Pupillometri sebagai alat untuk desain ergonomi memiliki aplikasi yang luas tidak hanya dalam industri manufaktur tetapi juga dalam sektor lain seperti otomasi, manajemen biaya, dan keselamatan kerja (K3). Dalam konteks otomasi, pemahaman tentang respons fisiologis pekerja dapat membantu dalam merancang sistem yang lebih intuitif dan ramah pengguna.

Namun, terdapat batasan dalam metodologi ini, seperti variabilitas individu dalam respons pupil dan pengaruh faktor eksternal yang sulit dikontrol. Oleh karena itu, penelitian lebih lanjut diperlukan untuk mengembangkan model yang lebih akurat dan komprehensif.

Arah riset masa depan dapat mencakup integrasi pupillometri dengan teknologi lain seperti pemantauan biometrik dan analisis data besar untuk menciptakan solusi desain ergonomi yang lebih adaptif dan responsif terhadap kebutuhan pekerja. Dengan demikian, pupillometri dapat menjadi alat yang sangat berharga dalam menciptakan lingkungan kerja yang lebih aman dan produktif.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
