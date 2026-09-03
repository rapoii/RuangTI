# 865 — Analisis Keandalan Manusia (HRA) dalam Operasi Pembangkit Nuklir: Metode SPAR-H, Faktor Pembentuk Kinerja (PSF), dan Probabilitas Kesalahan Manusia (HEP)

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Human Reliability Analysis (HRA) in Nuclear Power Operations: Standardized Plant Analysis Risk-Human (SPAR-H) Method, Performance Shaping Factors (PSF), and Human Error Probability (HEP)  
**Standar & Referensi Utama:** Gertman et al. (NUREG/CR-6883 SPAR-H); Hollnagel (Cognitive Reliability and Error Analysis Method - CREAM, Elsevier); Reason (Human Error)

---

## 1. Pendahuluan dan Konteks Industri

Analisis Keandalan Manusia (HRA) merupakan aspek kritis dalam operasi pembangkit nuklir, di mana kesalahan manusia dapat berakibat fatal. Dalam konteks industri pembangkit nuklir, keandalan sistem dan manusia harus dipastikan untuk mencegah insiden yang dapat membahayakan keselamatan publik dan lingkungan. Pembangkit nuklir beroperasi dalam lingkungan yang kompleks dan berisiko tinggi, di mana interaksi antara manusia dan sistem otomatis sangat penting. Menurut Gertman et al. (2004), kesalahan manusia dapat berkontribusi hingga 80% dari insiden yang terjadi di fasilitas nuklir, sehingga pemahaman yang mendalam tentang faktor-faktor yang mempengaruhi kinerja manusia sangat diperlukan.

Tantangan utama dalam industri ini mencakup kebutuhan untuk meningkatkan efisiensi operasional sambil meminimalkan risiko kesalahan manusia. Faktor-faktor seperti tekanan waktu, kompleksitas tugas, dan kondisi lingkungan dapat mempengaruhi kinerja operator. Oleh karena itu, penerapan metode analisis seperti SPAR-H yang mengintegrasikan Performance Shaping Factors (PSF) dan Human Error Probability (HEP) menjadi sangat relevan. Dengan menggunakan pendekatan sistematis dalam menganalisis dan memprediksi kesalahan manusia, organisasi dapat mengembangkan strategi mitigasi yang lebih efektif, meningkatkan keselamatan dan efisiensi operasional.

Dalam konteks global, industri energi nuklir menghadapi tantangan untuk memenuhi standar keselamatan yang semakin ketat, serta tuntutan untuk beroperasi dengan biaya yang lebih rendah. Oleh karena itu, penting untuk mengadopsi metodologi yang dapat membantu dalam pengelolaan risiko dan meningkatkan keandalan sistem. Penelitian lebih lanjut dalam bidang HRA dan penerapan metode yang tepat akan menjadi kunci untuk mencapai tujuan tersebut.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Definisi dan Notasi

1. **Human Error Probability (HEP)**: Probabilitas terjadinya kesalahan manusia dalam suatu tugas tertentu.
2. **Performance Shaping Factors (PSF)**: Faktor-faktor yang mempengaruhi kinerja manusia, seperti kondisi lingkungan, pelatihan, dan pengalaman.
3. **SPAR-H Method**: Metode analisis risiko yang digunakan untuk mengevaluasi keandalan manusia dalam konteks pembangkit nuklir.

### 2.2. Rumus-Rumus Kuantitatif

Metode SPAR-H mengandalkan beberapa rumus untuk menghitung HEP berdasarkan PSF. HEP dapat dinyatakan sebagai:

$$
HEP = P(T) \times P(PSF)
$$

di mana:
- \( P(T) \) adalah probabilitas dasar dari kesalahan yang terjadi tanpa mempertimbangkan PSF.
- \( P(PSF) \) adalah faktor pengali yang mencerminkan pengaruh PSF terhadap HEP.

### 2.3. Derivasi Matematis

Untuk menghitung \( P(T) \), kita dapat menggunakan model probabilitas dasar yang mencakup analisis tugas dan kesalahan yang mungkin terjadi. Misalkan kita memiliki \( n \) jenis kesalahan yang mungkin terjadi, maka:

$$
P(T) = 1 - \prod_{i=1}^{n} (1 - p_i)
$$

di mana \( p_i \) adalah probabilitas terjadinya kesalahan ke-i.

Selanjutnya, untuk menghitung \( P(PSF) \), kita dapat menggunakan pendekatan berikut:

$$
P(PSF) = \prod_{j=1}^{m} PSF_j
$$

di mana \( m \) adalah jumlah faktor pembentuk kinerja yang relevan.

### 2.4. Contoh Penghitungan HEP

Misalkan kita memiliki dua jenis kesalahan dengan probabilitas masing-masing \( p_1 = 0.1 \) dan \( p_2 = 0.05 \). Maka:

$$
P(T) = 1 - (1 - 0.1)(1 - 0.05) = 1 - (0.9 \times 0.95) = 1 - 0.855 = 0.145
$$

Jika kita memiliki dua PSF dengan nilai \( PSF_1 = 1.2 \) dan \( PSF_2 = 0.8 \), maka:

$$
P(PSF) = 1.2 \times 0.8 = 0.96
$$

Sehingga HEP dapat dihitung sebagai:

$$
HEP = P(T) \times P(PSF) = 0.145 \times 0.96 = 0.1392
$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-Langkah Implementasi

1. **Identifikasi Tugas**: Mengidentifikasi semua tugas yang dilakukan oleh operator di pembangkit nuklir.
2. **Analisis Kesalahan**: Mengidentifikasi potensi kesalahan yang dapat terjadi dalam setiap tugas.
3. **Penilaian PSF**: Mengumpulkan data tentang faktor-faktor yang mempengaruhi kinerja operator.
4. **Penghitungan HEP**: Menggunakan rumus yang telah dijelaskan untuk menghitung HEP untuk setiap tugas.
5. **Pengembangan Strategi Mitigasi**: Mengembangkan strategi untuk mengurangi HEP berdasarkan hasil analisis.

### 3.2. Diagram Alir Proses

Diagram alir berikut menggambarkan langkah-langkah dalam proses HRA menggunakan metode SPAR-H:

```
[Identifikasi Tugas] --> [Analisis Kesalahan] --> [Penilaian PSF] --> [Penghitungan HEP] --> [Strategi Mitigasi]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Studi Kasus

Misalkan sebuah pembangkit nuklir memiliki tiga tugas utama yang dilakukan oleh operator: pengoperasian reaktor, pemantauan sistem pendingin, dan pengelolaan limbah. Setiap tugas memiliki probabilitas kesalahan yang berbeda dan dipengaruhi oleh PSF yang berbeda.

#### 4.2. Input Parameter

- Tugas 1: Pengoperasian reaktor
  - \( p_1 = 0.1 \)
  - PSF: \( PSF_1 = 1.1 \), \( PSF_2 = 0.9 \)

- Tugas 2: Pemantauan sistem pendingin
  - \( p_2 = 0.05 \)
  - PSF: \( PSF_1 = 1.2 \), \( PSF_2 = 0.8 \)

- Tugas 3: Pengelolaan limbah
  - \( p_3 = 0.07 \)
  - PSF: \( PSF_1 = 1.0 \), \( PSF_2 = 1.0 \)

#### 4.3. Langkah Kalkulasi

1. **Tugas 1**:
   - \( P(T_1) = 1 - (1 - 0.1)(1 - 0.05) = 1 - (0.9 \times 0.95) = 0.145 \)
   - \( P(PSF_1) = 1.1 \times 0.9 = 0.99 \)
   - \( HEP_1 = 0.145 \times 0.99 = 0.14355 \)

2. **Tugas 2**:
   - \( P(T_2) = 1 - (1 - 0.05)(1 - 0.07) = 1 - (0.95 \times 0.93) = 0.0865 \)
   - \( P(PSF_2) = 1.2 \times 0.8 = 0.96 \)
   - \( HEP_2 = 0.0865 \times 0.96 = 0.08304 \)

3. **Tugas 3**:
   - \( P(T_3) = 1 - (1 - 0.07)(1 - 0.1) = 1 - (0.93 \times 0.93) = 0.1299 \)
   - \( P(PSF_3) = 1.0 \times 1.0 = 1.0 \)
   - \( HEP_3 = 0.1299 \times 1.0 = 0.1299 \)

### 4.4. Interpretasi Hasil

Dari perhitungan di atas, kita mendapatkan nilai HEP untuk masing-masing tugas. Nilai HEP yang lebih tinggi menunjukkan risiko kesalahan yang lebih besar, sehingga memerlukan perhatian lebih dalam hal pelatihan dan pengembangan prosedur operasional. Misalnya, HEP tertinggi terjadi pada Tugas 1, yang menunjukkan bahwa pengoperasian reaktor adalah area yang paling berisiko dan memerlukan strategi mitigasi yang lebih ketat.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Analisis keandalan manusia tidak hanya relevan dalam industri nuklir, tetapi juga dapat diterapkan dalam berbagai sektor lain seperti rantai pasok, otomasi, dan manajemen biaya. Dalam konteks rantai pasok, kesalahan manusia dapat mempengaruhi efisiensi dan efektivitas operasi, sehingga penerapan HRA dapat membantu dalam mengidentifikasi dan mengurangi risiko.

Dalam bidang otomasi, dengan meningkatnya penggunaan teknologi canggih, penting untuk memahami interaksi antara manusia dan mesin. HRA dapat digunakan untuk merancang sistem yang lebih aman dan efisien, dengan mempertimbangkan faktor-faktor yang mempengaruhi kinerja manusia.

Namun, terdapat batasan dalam metodologi HRA, seperti ketidakpastian dalam estimasi probabilitas dan variabilitas dalam kinerja manusia. Oleh karena itu, penelitian lebih lanjut diperlukan untuk mengembangkan model yang lebih akurat dan dapat diandalkan.

Ke depan, arah riset dalam HRA dapat difokuskan pada integrasi teknologi baru, seperti kecerdasan buatan dan analisis data besar, untuk meningkatkan pemahaman tentang kesalahan manusia dan mengembangkan strategi mitigasi yang lebih efektif. Dengan demikian, HRA akan terus menjadi komponen penting dalam memastikan keselamatan dan efisiensi operasional di berbagai sektor industri.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
