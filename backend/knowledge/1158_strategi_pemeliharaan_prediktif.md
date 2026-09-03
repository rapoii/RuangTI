# 1158 — Strategi Pemeliharaan Prediktif Menggunakan Time-Driven ABC Costing dalam Manufaktur

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Predictive Maintenance Strategies using Time-Driven ABC Costing in Manufacturing  
**Standar & Referensi Utama:** O'Brien, T. & Singh, M. (2024). Predictive Strategies in Manufacturing. CIRP Annals - Manufacturing Technology, 73(1), 145-148. DOI:10.1016/j.cirp.2024.04.003.

---

## 1. Pendahuluan dan Konteks Industri

Dalam era industri 4.0, pemeliharaan prediktif telah menjadi salah satu pilar utama dalam meningkatkan efisiensi operasional di sektor manufaktur. Dengan meningkatnya kompleksitas sistem produksi dan tuntutan untuk meminimalkan downtime, strategi pemeliharaan yang berbasis data menjadi sangat penting. Pemeliharaan prediktif berfokus pada penggunaan data dan analitik untuk memprediksi kapan peralatan akan mengalami kegagalan, sehingga memungkinkan tindakan pemeliharaan dilakukan sebelum masalah terjadi. Hal ini tidak hanya mengurangi biaya operasional, tetapi juga meningkatkan produktivitas dan kualitas produk.

Namun, implementasi pemeliharaan prediktif tidak tanpa tantangan. Salah satu tantangan utama adalah pengelolaan biaya yang terkait dengan pemeliharaan dan pengoperasian mesin. Di sinilah Time-Driven Activity-Based Costing (TDABC) berperan penting. TDABC memungkinkan perusahaan untuk menghitung biaya pemeliharaan secara lebih akurat dengan mempertimbangkan waktu yang dibutuhkan untuk setiap aktivitas pemeliharaan. Dengan menggunakan TDABC, perusahaan dapat mengidentifikasi aktivitas yang paling mahal dan mengoptimalkan proses pemeliharaan mereka.

Literatur menunjukkan bahwa perusahaan yang mengadopsi strategi pemeliharaan prediktif dapat mengurangi biaya pemeliharaan hingga 30% dan meningkatkan umur peralatan hingga 20% (O'Brien & Singh, 2024). Oleh karena itu, pemahaman yang mendalam tentang strategi pemeliharaan prediktif dan penerapan TDABC menjadi sangat penting bagi para profesional di bidang teknik industri.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Pemeliharaan Prediktif

Pemeliharaan prediktif adalah pendekatan yang menggunakan data historis dan analisis untuk memprediksi kapan peralatan akan gagal. Model matematis yang umum digunakan dalam pemeliharaan prediktif adalah model Weibull yang dinyatakan sebagai:

$$
R(t) = e^{-\left(\frac{t}{\eta}\right)^{\beta}}
$$

di mana:
- $R(t)$ = probabilitas bahwa peralatan akan bertahan lebih dari waktu $t$,
- $\eta$ = parameter skala (umur rata-rata),
- $\beta$ = parameter bentuk (menunjukkan sifat distribusi).

### 2.2. Time-Driven Activity-Based Costing (TDABC)

TDABC adalah metode penghitungan biaya yang mengandalkan waktu sebagai dasar untuk menghitung biaya aktivitas. Model dasar TDABC dapat dinyatakan dengan rumus:

$$
\text{Total Cost} = \sum_{i=1}^{n} \left( \text{Cost per Time Unit} \times \text{Time Required for Activity}_i \right)
$$

di mana:
- $\text{Total Cost}$ = total biaya pemeliharaan,
- $\text{Cost per Time Unit}$ = biaya per unit waktu untuk sumber daya yang digunakan,
- $\text{Time Required for Activity}_i$ = waktu yang dibutuhkan untuk menyelesaikan aktivitas $i$.

### 2.3. Pembuktian Matematis

Untuk membuktikan hubungan antara biaya pemeliharaan dan waktu, kita dapat menggunakan rumus di atas. Misalkan kita memiliki dua aktivitas pemeliharaan yang berbeda dengan waktu yang dibutuhkan masing-masing $T_1$ dan $T_2$, serta biaya per unit waktu $C_u$. Maka total biaya pemeliharaan dapat dinyatakan sebagai:

$$
\text{Total Cost} = C_u \times (T_1 + T_2)
$$

Dengan menggunakan TDABC, kita dapat mengidentifikasi aktivitas mana yang paling mempengaruhi total biaya dan melakukan perbaikan yang diperlukan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-Langkah Implementasi

1. **Identifikasi Peralatan Kritis**: Tentukan peralatan yang paling kritis dalam proses produksi.
2. **Pengumpulan Data Historis**: Kumpulkan data historis tentang kegagalan peralatan dan aktivitas pemeliharaan.
3. **Analisis Data**: Gunakan analisis statistik untuk menentukan pola kegagalan dan waktu pemeliharaan.
4. **Modeling**: Buat model pemeliharaan prediktif menggunakan data yang telah dianalisis.
5. **Implementasi TDABC**: Hitung biaya pemeliharaan dengan menggunakan TDABC berdasarkan model yang telah dibuat.
6. **Monitoring dan Evaluasi**: Lakukan monitoring secara berkala dan evaluasi efektivitas strategi pemeliharaan.

### 3.2. Diagram Alir Proses

```plaintext
[Identifikasi Peralatan Kritis]
          |
          v
[Pengumpulan Data Historis]
          |
          v
[Analisis Data]
          |
          v
[Modeling]
          |
          v
[Implementasi TDABC]
          |
          v
[Monitoring dan Evaluasi]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan sebuah pabrik otomotif memiliki dua mesin utama yang memerlukan pemeliharaan. Data historis menunjukkan bahwa:

- Mesin A: Kegagalan terjadi setiap 1000 jam dengan biaya pemeliharaan $500 per kali.
- Mesin B: Kegagalan terjadi setiap 800 jam dengan biaya pemeliharaan $400 per kali.

### 4.2. Perhitungan

1. **Waktu Operasional**: Misalkan pabrik beroperasi 2000 jam per tahun.
2. **Frekuensi Kegagalan**:
   - Mesin A: $F_A = \frac{2000}{1000} = 2$ kali per tahun.
   - Mesin B: $F_B = \frac{2000}{800} = 2.5$ kali per tahun.

3. **Total Biaya Pemeliharaan**:
   - Mesin A: $C_A = F_A \times 500 = 2 \times 500 = 1000$.
   - Mesin B: $C_B = F_B \times 400 = 2.5 \times 400 = 1000$.

4. **Total Biaya Pemeliharaan Tahunan**:
   $$ 
   C_{total} = C_A + C_B = 1000 + 1000 = 2000 
   $$

### 4.3. Interpretasi Hasil

Dari perhitungan di atas, total biaya pemeliharaan tahunan untuk kedua mesin adalah $2000. Dengan menerapkan strategi pemeliharaan prediktif dan TDABC, pabrik dapat mengidentifikasi aktivitas pemeliharaan yang paling mahal dan mengurangi biaya ini dengan mengoptimalkan waktu dan sumber daya.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Pemeliharaan prediktif dan TDABC tidak hanya relevan dalam sektor manufaktur, tetapi juga dapat diterapkan dalam berbagai disiplin lain seperti rantai pasok, otomasi, dan manajemen biaya. Dalam konteks rantai pasok, pemeliharaan prediktif dapat membantu dalam mengurangi waktu tunggu dan meningkatkan efisiensi logistik. Selain itu, dengan meningkatnya perhatian terhadap K3 dan ESG, perusahaan diharapkan untuk mengadopsi praktik yang lebih berkelanjutan dalam pemeliharaan.

Namun, terdapat beberapa batasan dalam metodologi ini, seperti kebutuhan akan data yang akurat dan sistem yang terintegrasi. Penelitian di masa depan dapat berfokus pada pengembangan algoritma yang lebih canggih untuk analisis data dan integrasi sistem yang lebih baik untuk mendukung pemeliharaan prediktif.

Dengan demikian, pemeliharaan prediktif yang didukung oleh TDABC merupakan langkah strategis yang dapat meningkatkan efisiensi dan mengurangi biaya dalam industri manufaktur, serta memberikan kontribusi positif terhadap keberlanjutan dan keselamatan kerja.$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
