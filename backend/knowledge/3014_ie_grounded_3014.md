# 3014 — Model Ketahanan untuk Logistik Rantai Dingin Produk Perishable

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** A Resilience Model for Cold Chain Logistics of Perishable Products  
**Jurnal & Sitasi Utama:** Aisha Khurshid, Danish Ahmed Siddiqui (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.4959599](https://doi.org/10.2139/ssrn.4959599)  
**Sitasi Pendukung:** Akmal Darman Putra, Sarjon Defit, Gunadi Widi Nurcahyo (2024). *Jurnal KomtekInfo*. DOI: [https://doi.org/10.35134/komtekinfo.v12i1.589](https://doi.org/10.35134/komtekinfo.v12i1.589)

---

## 1. Pendahuluan dan Konteks Industri

Logistik rantai dingin merupakan aspek penting dalam distribusi produk perishable seperti makanan dan vaksin. Dalam konteks industri kesehatan, menjaga kualitas vaksin selama proses distribusi adalah krusial untuk mencegah kerugian ekonomi dan memastikan keselamatan publik. Menurut Khurshid dan Siddiqui (2024), ketahanan dalam logistik rantai dingin dapat ditingkatkan melalui penerapan model yang mempertimbangkan berbagai faktor risiko yang mempengaruhi kualitas produk. Mereka menekankan bahwa ketidakpastian dalam rantai pasok, seperti fluktuasi suhu dan kerusakan alat, dapat mengakibatkan kerugian signifikan.

Dalam studi yang dilakukan oleh Darman Putra et al. (2024), di Kabupaten Siak, ditemukan bahwa sistem pemantauan suhu yang tidak memadai dapat menyebabkan kerusakan pada vaksin. Proses pencatatan suhu yang dilakukan secara manual setiap dua jam juga berpotensi menimbulkan kesalahan dan keterlambatan dalam respons terhadap perubahan suhu. Oleh karena itu, penerapan teknologi Internet of Things (IoT) untuk pemantauan suhu secara real-time menjadi sangat penting. Dengan adanya sistem pemantauan yang lebih baik, apoteker dapat segera mengambil tindakan jika terjadi peningkatan suhu yang berpotensi merusak vaksin.

Konteks ini menunjukkan bahwa terdapat kebutuhan mendesak untuk mengembangkan model ketahanan yang tidak hanya mempertimbangkan faktor teknis, tetapi juga aspek operasional dan ekonomi dalam logistik rantai dingin. Dengan demikian, penelitian ini bertujuan untuk memberikan solusi yang komprehensif untuk meningkatkan ketahanan logistik rantai dingin, khususnya dalam distribusi produk perishable.

## 2. Landasan Teori & Formulasi Matematis

Model ketahanan dalam logistik rantai dingin yang diusulkan oleh Khurshid dan Siddiqui (2024) mencakup beberapa variabel kunci yang mempengaruhi kinerja sistem. Model ini dapat dinyatakan dalam bentuk matematis sebagai berikut:

1. **Variabel Utama:**
   - $T$: Suhu dalam rantai dingin (°C)
   - $R$: Risiko kerusakan produk
   - $C$: Biaya operasional
   - $Q$: Kualitas produk

2. **Fungsi Ketahanan:**
   Fungsi ketahanan sistem dapat dinyatakan sebagai:
   $$ R_{total} = f(T, R, C, Q) $$

3. **Model Optimasi:**
   Untuk meminimalkan risiko kerusakan dan biaya operasional, kita dapat menggunakan model optimasi berikut:
   $$ \min \left( C + \alpha R \right) $$
   dengan batasan:
   $$ T \leq T_{max} $$

   Di mana $\alpha$ adalah koefisien yang menunjukkan sensitivitas biaya terhadap risiko kerusakan.

4. **Metodologi Analitis:**
   Metode analitis yang diusulkan mencakup analisis sensitivitas untuk memahami dampak perubahan variabel terhadap fungsi ketahanan. Ini dapat dilakukan dengan menghitung turunan parsial dari fungsi ketahanan terhadap setiap variabel.

Model ini memberikan kerangka kerja yang jelas untuk menganalisis dan meningkatkan ketahanan logistik rantai dingin, dengan fokus pada pengurangan risiko dan biaya.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem pemantauan suhu yang efektif dalam rantai dingin memerlukan langkah-langkah sistematis sebagai berikut:

1. **Identifikasi Kebutuhan:**
   - Menentukan jenis produk yang akan didistribusikan dan suhu optimal yang diperlukan.

2. **Pemilihan Teknologi:**
   - Memilih sensor suhu yang tepat, seperti sensor DS18B20 yang digunakan dalam penelitian Darman Putra et al. (2024).

3. **Desain Sistem:**
   - Merancang sistem pemantauan suhu yang terintegrasi dengan IoT untuk memberikan notifikasi real-time kepada apoteker.

4. **Pengujian dan Validasi:**
   - Melakukan pengujian sistem untuk memastikan akurasi dan keandalan pemantauan suhu.

5. **Pelatihan Pengguna:**
   - Memberikan pelatihan kepada apoteker dan staf terkait tentang penggunaan sistem pemantauan.

6. **Monitoring dan Evaluasi:**
   - Melakukan evaluasi berkala terhadap kinerja sistem dan melakukan perbaikan jika diperlukan.

Diagram alir proses implementasi sistem dapat digambarkan sebagai berikut:

```
[Identifikasi Kebutuhan] --> [Pemilihan Teknologi] --> [Desain Sistem] --> [Pengujian dan Validasi] --> [Pelatihan Pengguna] --> [Monitoring dan Evaluasi]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk memberikan gambaran yang lebih jelas mengenai penerapan model ketahanan dalam logistik rantai dingin, berikut adalah contoh perhitungan numerik berdasarkan data hipotetik:

1. **Parameter Input:**
   - Suhu optimal ($T_{optimal}$): 2°C
   - Suhu maksimum ($T_{max}$): 8°C
   - Biaya operasional ($C$): Rp 10.000.000
   - Risiko kerusakan ($R$): 5% dari nilai produk
   - Nilai produk: Rp 100.000.000

2. **Perhitungan Risiko Kerusakan:**
   $$ R = 0.05 \times 100.000.000 = Rp 5.000.000 $$

3. **Total Biaya:**
   $$ C_{total} = C + R = 10.000.000 + 5.000.000 = Rp 15.000.000 $$

4. **Evaluasi Kualitas:**
   Jika suhu tetap di bawah $T_{max}$, kualitas produk ($Q$) dapat dianggap optimal. Namun, jika suhu melebihi $T_{max}$, risiko kerusakan akan meningkat, yang akan berdampak pada biaya.

5. **Interpretasi Hasil:**
   Dengan total biaya Rp 15.000.000, perusahaan harus mempertimbangkan investasi dalam sistem pemantauan suhu untuk mengurangi risiko kerusakan dan biaya tambahan di masa depan.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Meskipun model ketahanan yang diusulkan memberikan pendekatan yang sistematis untuk meningkatkan logistik rantai dingin, terdapat beberapa batasan yang perlu diperhatikan. Salah satunya adalah ketergantungan pada teknologi yang mungkin tidak selalu tersedia di semua lokasi. Selain itu, biaya awal untuk implementasi sistem pemantauan suhu berbasis IoT dapat menjadi penghalang bagi beberapa organisasi.

Dibandingkan dengan metode konvensional yang mengandalkan pencatatan manual, sistem otomatis menawarkan keunggulan dalam hal kecepatan dan akurasi. Namun, penerapan teknologi ini memerlukan pelatihan dan adaptasi dari pengguna.

Aplikasi lintas sektor dari model ini dapat mencakup distribusi makanan, farmasi, dan produk kimia, di mana kontrol suhu yang ketat sangat penting. Ke depan, agenda riset lanjutan dapat difokuskan pada pengembangan algoritma prediktif untuk memprediksi risiko kerusakan berdasarkan data historis dan kondisi lingkungan.

Dengan demikian, pengembangan model ketahanan dalam logistik rantai dingin tidak hanya relevan untuk industri kesehatan, tetapi juga dapat diterapkan secara luas di berbagai sektor, memberikan manfaat signifikan dalam pengelolaan risiko dan biaya.