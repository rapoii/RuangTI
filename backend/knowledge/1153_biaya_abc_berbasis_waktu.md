# 1153 — Time-Driven Activity-Based Costing for Predictive Maintenance in Industrial Assets

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Time-Driven Activity-Based Costing for Predictive Maintenance in Industrial Assets  
**Standar & Referensi Utama:** Lee, M. & Patel, S. (2025). Predictive Maintenance Costing Models. CIRP Journal of Manufacturing Science and Technology, 38, 89-102. DOI:10.1016/j.cirpj.2025.05.001.

---

## 1. Pendahuluan dan Konteks Industri

Dalam era industri 4.0, perusahaan menghadapi tantangan yang semakin kompleks dalam mengelola aset industri mereka. Salah satu tantangan utama adalah bagaimana mengoptimalkan biaya pemeliharaan sambil memastikan keandalan dan ketersediaan mesin. Pemeliharaan prediktif telah muncul sebagai solusi yang efektif untuk mengatasi masalah ini, memungkinkan perusahaan untuk melakukan pemeliharaan berdasarkan kondisi aktual dari aset, bukan berdasarkan jadwal waktu tetap. Namun, untuk mengimplementasikan pemeliharaan prediktif secara efektif, penting untuk memiliki model biaya yang akurat.

Time-Driven Activity-Based Costing (TDABC) adalah metode yang menjanjikan untuk menghitung biaya pemeliharaan prediktif. Metode ini memungkinkan perusahaan untuk menghitung biaya berdasarkan waktu yang dihabiskan untuk setiap aktivitas pemeliharaan, memberikan gambaran yang lebih jelas tentang biaya yang terlibat. Dengan menggunakan TDABC, perusahaan dapat mengidentifikasi aktivitas yang paling mahal dan mencari cara untuk mengurangi biaya tersebut, sehingga meningkatkan efisiensi operasional.

Tantangan yang dihadapi dalam penerapan TDABC dalam konteks pemeliharaan prediktif mencakup pengumpulan data yang akurat, pemodelan aktivitas yang kompleks, dan integrasi dengan sistem manajemen aset yang ada. Oleh karena itu, pemahaman yang mendalam tentang metodologi ini dan penerapannya dalam konteks industri sangat penting untuk mencapai hasil yang optimal. Menurut Lee dan Patel (2025), model biaya pemeliharaan prediktif dapat membantu perusahaan dalam mengelola aset mereka lebih baik, mengurangi downtime, dan meningkatkan produktivitas secara keseluruhan.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Time-Driven Activity-Based Costing (TDABC)

TDABC adalah metode penghitungan biaya yang mengandalkan waktu sebagai dasar untuk menghitung biaya aktivitas. Dalam TDABC, biaya total dari suatu aktivitas dapat dinyatakan dengan rumus:

$$
\text{Biaya Total} = \text{Waktu Total} \times \text{Biaya per Jam}
$$

### 2.2. Definisi Variabel

- \( \text{Waktu Total} \): Total waktu yang dihabiskan untuk aktivitas pemeliharaan (dalam jam).
- \( \text{Biaya per Jam} \): Biaya yang terkait dengan satu jam aktivitas pemeliharaan (dalam satuan mata uang).

### 2.3. Pembuktian Matematis

Misalkan kita memiliki \( n \) aktivitas pemeliharaan yang berbeda, maka biaya total untuk semua aktivitas dapat dinyatakan sebagai:

$$
\text{Biaya Total} = \sum_{i=1}^{n} (W_{i} \times C_{i})
$$

di mana:
- \( W_{i} \): Waktu yang dihabiskan untuk aktivitas \( i \) (dalam jam).
- \( C_{i} \): Biaya per jam untuk aktivitas \( i \).

Dengan demikian, untuk menghitung biaya pemeliharaan prediktif secara keseluruhan, kita dapat menggunakan rumus di atas untuk menjumlahkan semua aktivitas yang terlibat.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Identifikasi Aktivitas Pemeliharaan**: Mengidentifikasi semua aktivitas yang terlibat dalam pemeliharaan aset.
2. **Pengukuran Waktu**: Mengukur waktu yang dihabiskan untuk setiap aktivitas pemeliharaan.
3. **Penentuan Biaya per Jam**: Menghitung biaya per jam untuk setiap aktivitas berdasarkan data historis atau estimasi.
4. **Penghitungan Biaya Total**: Menggunakan rumus TDABC untuk menghitung biaya total pemeliharaan.
5. **Analisis dan Optimalisasi**: Menganalisis hasil untuk mengidentifikasi area yang dapat dioptimalkan.

### 3.2. Diagram Alir Proses

```plaintext
[Identifikasi Aktivitas] --> [Pengukuran Waktu] --> [Penentuan Biaya per Jam] --> [Penghitungan Biaya Total] --> [Analisis dan Optimalisasi]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan sebuah pabrik memiliki tiga aktivitas pemeliharaan: pemeriksaan, perbaikan, dan penggantian komponen. Data yang dikumpulkan adalah sebagai berikut:

| Aktivitas       | Waktu (jam) | Biaya per Jam (IDR) |
|-----------------|-------------|---------------------|
| Pemeriksaan     | 10          | 150.000             |
| Perbaikan       | 5           | 200.000             |
| Penggantian     | 3           | 250.000             |

### 4.2. Perhitungan Biaya Total

1. **Pemeriksaan**:
   $$ \text{Biaya Pemeriksaan} = 10 \, \text{jam} \times 150.000 \, \text{IDR/jam} = 1.500.000 \, \text{IDR} $$

2. **Perbaikan**:
   $$ \text{Biaya Perbaikan} = 5 \, \text{jam} \times 200.000 \, \text{IDR/jam} = 1.000.000 \, \text{IDR} $$

3. **Penggantian**:
   $$ \text{Biaya Penggantian} = 3 \, \text{jam} \times 250.000 \, \text{IDR/jam} = 750.000 \, \text{IDR} $$

4. **Biaya Total**:
   $$ \text{Biaya Total} = 1.500.000 + 1.000.000 + 750.000 = 3.250.000 \, \text{IDR} $$

### 4.3. Interpretasi Hasil

Dari perhitungan di atas, total biaya pemeliharaan untuk aset tersebut adalah 3.250.000 IDR. Data ini memberikan wawasan kepada manajer untuk mengevaluasi efektivitas biaya pemeliharaan dan mengidentifikasi aktivitas yang paling mahal, sehingga dapat dilakukan langkah-langkah untuk mengurangi biaya tersebut.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Penerapan TDABC dalam konteks pemeliharaan prediktif tidak hanya terbatas pada sektor manufaktur. Metode ini juga dapat diterapkan dalam sektor lain seperti transportasi, energi, dan layanan kesehatan. Dalam konteks rantai pasok, TDABC dapat membantu dalam mengelola biaya pemeliharaan alat transportasi dan infrastruktur.

Namun, terdapat batasan dalam metodologi ini, seperti kebutuhan akan data yang akurat dan real-time, serta tantangan dalam mengintegrasikan sistem TDABC dengan sistem manajemen yang ada. Oleh karena itu, penelitian lebih lanjut diperlukan untuk mengembangkan model yang lebih adaptif dan responsif terhadap perubahan kondisi industri.

Ke depan, penelitian dapat difokuskan pada integrasi TDABC dengan teknologi IoT untuk pengumpulan data otomatis, serta penggunaan analitik data besar untuk meningkatkan akurasi prediksi biaya pemeliharaan. Dengan demikian, TDABC dapat menjadi alat yang lebih kuat dalam pengambilan keputusan strategis terkait pemeliharaan aset industri.