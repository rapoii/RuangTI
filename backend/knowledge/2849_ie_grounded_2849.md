# 2849 — Model Optimasi Stokastik Hibrida untuk Masalah Penjadwalan dan Penentuan Ukuran Lot

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem  
**Jurnal & Sitasi Utama:** Lead Researchers (2025). *Cuestiones de fisioterapia*. DOI: [https://doi.org/10.48047/cu/54/02/2007-2018](https://doi.org/10.48047/cu/54/02/2007-2018)  
**Sitasi Pendukung:** Alexandre Forel, Martin Grunow (2023). *Production and Operations Management*. DOI: [https://doi.org/10.1111/poms.13881](https://doi.org/10.1111/poms.13881)

---

## 1. Pendahuluan dan Konteks Industri

Dalam konteks industri modern, pengelolaan rantai pasok dan produksi yang efisien menjadi sangat penting untuk menjaga daya saing perusahaan. Salah satu tantangan utama yang dihadapi adalah ketidakpastian permintaan, yang sering kali menyebabkan kesulitan dalam penentuan ukuran lot produksi dan penjadwalan. Penelitian yang dilakukan oleh Lead Researchers (2025) dalam paper berjudul "A Hybrid Stochastic Optimization Model for Lot Sizing and Scheduling Problem" menawarkan pendekatan inovatif untuk mengatasi masalah ini dengan memanfaatkan model optimasi stokastik hibrida. Model ini dirancang untuk meningkatkan efisiensi operasional dengan mempertimbangkan variabilitas permintaan dan fleksibilitas dalam perencanaan produksi.

Dalam praktiknya, banyak perusahaan masih mengandalkan model deterministik yang tidak mampu menangkap dinamika permintaan yang berubah-ubah. Hal ini menyebabkan biaya yang lebih tinggi akibat kelebihan atau kekurangan stok. Forel dan Grunow (2023) juga menyoroti bahwa pendekatan akademis yang mempertimbangkan ketidakpastian permintaan dalam penentuan ukuran lot jarang diterapkan di industri. Mereka mengusulkan metodologi penentuan ukuran lot stokastik yang diadaptasi untuk proses perencanaan horizon bergulir, yang memungkinkan perusahaan untuk melakukan pembaruan ramalan secara berkala.

Urgensi untuk mengadopsi model stokastik dalam perencanaan produksi semakin meningkat seiring dengan kompleksitas pasar dan kebutuhan untuk respons yang cepat terhadap perubahan permintaan. Dengan mengintegrasikan model stokastik dalam penjadwalan dan penentuan ukuran lot, perusahaan dapat mengurangi biaya aktual dan meningkatkan efisiensi operasional secara keseluruhan. Penelitian ini menjadi sangat relevan dalam konteks industri yang semakin kompetitif dan dinamis.

## 2. Landasan Teori & Formulasi Matematis

Model optimasi stokastik hibrida yang diusulkan dalam penelitian ini dapat dirumuskan sebagai berikut:

1. **Fungsi Tujuan**: Minimalkan total biaya yang terdiri dari biaya produksi, biaya penyimpanan, dan biaya kekurangan. Fungsi tujuan dapat dinyatakan sebagai:

$$
\text{Min} \quad Z = \sum_{t=1}^{T} (C_p \cdot Q_t + C_h \cdot I_t + C_b \cdot B_t)
$$

di mana:
- \(Z\) = total biaya
- \(C_p\) = biaya produksi per unit
- \(C_h\) = biaya penyimpanan per unit per periode
- \(C_b\) = biaya kekurangan per unit
- \(Q_t\) = jumlah unit yang diproduksi pada periode \(t\)
- \(I_t\) = jumlah unit yang disimpan pada periode \(t\)
- \(B_t\) = jumlah unit yang kekurangan pada periode \(t\)

2. **Kendala**: Model ini juga mencakup beberapa kendala yang harus dipenuhi, seperti:
   - Kendala permintaan:
   $$
   I_{t-1} + Q_t - D_t = I_t
   $$
   di mana \(D_t\) adalah permintaan pada periode \(t\).

   - Kendala kapasitas produksi:
   $$
   Q_t \leq C_{max}
   $$
   di mana \(C_{max}\) adalah kapasitas maksimum produksi per periode.

3. **Variabel Stokastik**: Permintaan \(D_t\) dianggap sebagai variabel stokastik yang mengikuti distribusi tertentu, misalnya distribusi normal atau distribusi Poisson. Untuk menangani ketidakpastian ini, model menggunakan pendekatan martingale untuk memperkirakan evolusi ramalan.

4. **Metodologi Analitis**: Penelitian ini mengusulkan penggunaan simulasi untuk mengevaluasi kinerja model dalam berbagai skenario permintaan dan kapasitas produksi. Dengan menggunakan data sintetik dan data dunia nyata, model diuji untuk menilai efektivitasnya dalam mengurangi biaya.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model optimasi stokastik hibrida ini dalam industri memerlukan langkah-langkah sistematis sebagai berikut:

1. **Pengumpulan Data**: Kumpulkan data historis tentang permintaan, biaya produksi, biaya penyimpanan, dan kapasitas produksi.

2. **Analisis Data**: Lakukan analisis statistik untuk menentukan distribusi permintaan dan parameter lainnya.

3. **Modeling**: Bangun model matematis berdasarkan formulasi yang telah dijelaskan sebelumnya.

4. **Simulasi**: Lakukan simulasi untuk mengevaluasi kinerja model dalam berbagai skenario. Gunakan perangkat lunak pemodelan untuk menjalankan simulasi dan menganalisis hasil.

5. **Implementasi**: Terapkan model dalam sistem perencanaan produksi yang ada. Pastikan bahwa semua pemangku kepentingan terlibat dalam proses ini.

6. **Monitoring dan Evaluasi**: Lakukan pemantauan secara berkala terhadap kinerja model dan lakukan penyesuaian jika diperlukan.

Diagram alir proses implementasi dapat digambarkan sebagai berikut:

```
[Pengumpulan Data] --> [Analisis Data] --> [Modeling] --> [Simulasi] --> [Implementasi] --> [Monitoring dan Evaluasi]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk memberikan gambaran yang lebih jelas tentang penerapan model ini, mari kita lihat contoh perhitungan numerik berdasarkan parameter industri berikut:

- Biaya produksi per unit (\(C_p\)) = Rp 100.000
- Biaya penyimpanan per unit per periode (\(C_h\)) = Rp 5.000
- Biaya kekurangan per unit (\(C_b\)) = Rp 20.000
- Permintaan per periode (\(D_t\)) = 500 unit
- Kapasitas maksimum produksi per periode (\(C_{max}\)) = 600 unit

### Langkah 1: Menghitung Total Biaya

Misalkan kita memproduksi 550 unit pada periode pertama. Maka, kita dapat menghitung biaya sebagai berikut:

1. **Biaya Produksi**:
   $$
   \text{Biaya Produksi} = C_p \cdot Q_t = 100.000 \cdot 550 = Rp 55.000.000
   $$

2. **Biaya Penyimpanan**:
   Jika kita menyimpan 50 unit (550 - 500), maka:
   $$
   \text{Biaya Penyimpanan} = C_h \cdot I_t = 5.000 \cdot 50 = Rp 250.000
   $$

3. **Biaya Kekurangan**:
   Jika tidak ada kekurangan, maka:
   $$
   \text{Biaya Kekurangan} = C_b \cdot B_t = 20.000 \cdot 0 = Rp 0
   $$

4. **Total Biaya**:
   $$
   Z = 55.000.000 + 250.000 + 0 = Rp 55.250.000
   $$

### Interpretasi Hasil

Dari perhitungan di atas, total biaya untuk periode pertama adalah Rp 55.250.000. Dengan menggunakan model stokastik, perusahaan dapat melakukan analisis lebih lanjut untuk mengevaluasi skenario yang berbeda dan mengoptimalkan keputusan produksi di masa depan.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Meskipun model optimasi stokastik hibrida menawarkan banyak keuntungan, terdapat beberapa batasan yang perlu diperhatikan. Pertama, kompleksitas model dapat menjadi tantangan dalam implementasi, terutama bagi perusahaan kecil dengan sumber daya terbatas. Selain itu, ketergantungan pada data historis untuk memprediksi permintaan dapat menyebabkan kesalahan jika pola permintaan berubah secara drastis.

Dibandingkan dengan metode konvensional yang sering kali bersifat deterministik, model stokastik memberikan fleksibilitas yang lebih besar dalam perencanaan dan penjadwalan. Aplikasi lintas sektor, seperti dalam industri manufaktur, distribusi, dan layanan, menunjukkan bahwa pendekatan ini dapat meningkatkan efisiensi dan mengurangi biaya.

Ke depan, agenda riset lanjutan dapat difokuskan pada pengembangan algoritma yang lebih efisien untuk menyelesaikan model stokastik, serta eksplorasi integrasi teknologi seperti kecerdasan buatan dan pembelajaran mesin untuk meningkatkan akurasi ramalan permintaan. Dengan demikian, model ini dapat beradaptasi dengan cepat terhadap perubahan pasar dan meningkatkan daya saing perusahaan di era industri 4.0.

--- 

Dokumen ini memberikan gambaran menyeluruh tentang model optimasi stokastik hibrida untuk masalah penjadwalan dan penentuan ukuran lot, dengan dasar teori yang kuat, metodologi yang sistematis, serta studi kasus kuantitatif yang relevan. Penelitian ini diharapkan dapat menjadi referensi penting bagi praktisi dan akademisi di bidang teknik industri.