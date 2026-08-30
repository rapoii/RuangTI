# 862 — Penilaian Beban Kerja Mental dan Kesadaran Situasional Secara Real-Time di Ruang Kontrol Petrokimia: Entropi Pandangan Eye-Tracking, Indeks Dilatasi Pupil, dan Triangulasi Multi-Modal NASA-TLX

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Real-Time Mental Workload and Situational Awareness Assessment in Petrochemical Control Rooms: Eye-Tracking Gaze Entropy, Pupillary Dilation Indices, and NASA-TLX Multi-Modal Triangulation  
**Standar & Referensi Utama:** Wickens, Hollands, Banbury & Parasuraman (Engineering Psychology and Human Performance, 4th Ed.); ISO 9241-210; Stanton (Human Factors in Control Room Design)

---

## 1. Pendahuluan dan Konteks Industri

Industri petrokimia merupakan salah satu sektor yang paling vital dalam perekonomian global, berkontribusi pada produksi bahan baku untuk berbagai produk, mulai dari plastik hingga bahan bakar. Ruang kontrol dalam industri ini berfungsi sebagai pusat pengambilan keputusan yang kritis, di mana operator harus mengelola dan mengawasi berbagai parameter proses secara bersamaan. Dalam konteks ini, beban kerja mental dan kesadaran situasional menjadi faktor yang sangat penting untuk memastikan keselamatan dan efisiensi operasional. 

Tantangan utama yang dihadapi dalam ruang kontrol petrokimia meliputi kompleksitas sistem yang tinggi, kecepatan perubahan kondisi operasional, dan potensi risiko keselamatan yang signifikan. Operator sering kali dihadapkan pada situasi yang memerlukan perhatian penuh dan respons cepat, yang dapat menyebabkan kelelahan mental dan penurunan kinerja. Penelitian oleh Wickens et al. (2019) menunjukkan bahwa beban kerja mental yang tinggi dapat mengakibatkan kesalahan manusia yang fatal, sehingga penting untuk mengembangkan metode penilaian yang efektif untuk memantau beban kerja mental dan kesadaran situasional secara real-time.

Dalam konteks ini, penggunaan teknologi eye-tracking untuk mengukur entropi pandangan, serta analisis dilatasi pupil dan triangulasi multi-modal menggunakan NASA-TLX, dapat memberikan wawasan yang berharga tentang bagaimana operator berinteraksi dengan sistem kontrol. Hal ini tidak hanya akan meningkatkan pemahaman tentang faktor-faktor yang mempengaruhi kinerja operator, tetapi juga dapat membantu dalam merancang ruang kontrol yang lebih efektif dan aman.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Beban Kerja Mental

Beban kerja mental dapat didefinisikan sebagai jumlah usaha kognitif yang diperlukan untuk menyelesaikan tugas tertentu. Salah satu metode untuk mengukur beban kerja mental adalah menggunakan NASA-TLX (Task Load Index), yang mengukur enam dimensi: Beban Mental, Beban Fisik, Beban Temporal, Kinerja, Kesulitan, dan Ketidakpuasan. Formula untuk menghitung skor total NASA-TLX adalah sebagai berikut:

$$
TLX = \frac{1}{N} \sum_{i=1}^{N} w_i \cdot r_i
$$

di mana:
- \( N \) = jumlah dimensi
- \( w_i \) = bobot untuk dimensi ke-i
- \( r_i \) = rating untuk dimensi ke-i

### 2.2. Entropi Pandangan

Entropi pandangan dapat diukur dengan menggunakan data eye-tracking untuk menentukan distribusi perhatian operator. Rumus entropi Shannon dapat digunakan untuk menghitung entropi pandangan sebagai berikut:

$$
H(X) = -\sum_{i=1}^{n} p(x_i) \log p(x_i)
$$

di mana:
- \( H(X) \) = entropi pandangan
- \( p(x_i) \) = probabilitas pandangan pada area ke-i

### 2.3. Indeks Dilatasi Pupil

Indeks dilatasi pupil dapat digunakan sebagai indikator beban kerja mental. Hubungan antara dilatasi pupil (\( D \)) dan beban kerja dapat dinyatakan dengan model matematis berikut:

$$
D = k \cdot W
$$

di mana:
- \( D \) = dilatasi pupil
- \( k \) = konstanta proporsional
- \( W \) = beban kerja mental

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Pengumpulan Data**: Menggunakan perangkat eye-tracking untuk merekam pola pandangan operator selama operasi.
2. **Pengukuran Dilatasi Pupil**: Menggunakan kamera inframerah untuk mengukur perubahan dilatasi pupil operator.
3. **Penerapan NASA-TLX**: Mengumpulkan data dari operator mengenai persepsi mereka terhadap beban kerja menggunakan kuesioner NASA-TLX.
4. **Analisis Data**: Menggunakan software statistik untuk menganalisis data yang dikumpulkan dan menghitung entropi pandangan, indeks dilatasi pupil, dan skor NASA-TLX.
5. **Triangulasi Data**: Mengintegrasikan hasil dari ketiga metode untuk mendapatkan gambaran komprehensif tentang beban kerja mental dan kesadaran situasional.

### 3.2. Diagram Alir Proses

```plaintext
[Pengumpulan Data] --> [Pengukuran Dilatasi Pupil] --> [Penerapan NASA-TLX] --> [Analisis Data] --> [Triangulasi Data]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan sebuah ruang kontrol petrokimia memiliki 5 operator yang bekerja pada sistem yang kompleks. Data yang dikumpulkan menunjukkan bahwa:

- Bobot dimensi NASA-TLX: \( w_1 = 0.2, w_2 = 0.3, w_3 = 0.1, w_4 = 0.2, w_5 = 0.1, w_6 = 0.1 \)
- Rating untuk dimensi: \( r_1 = 70, r_2 = 80, r_3 = 60, r_4 = 75, r_5 = 50, r_6 = 65 \)

### 4.2. Perhitungan Skor NASA-TLX

Menghitung skor total NASA-TLX:

$$
TLX = \frac{1}{6} \left( 0.2 \cdot 70 + 0.3 \cdot 80 + 0.1 \cdot 60 + 0.2 \cdot 75 + 0.1 \cdot 50 + 0.1 \cdot 65 \right)
$$

$$
TLX = \frac{1}{6} \left( 14 + 24 + 6 + 15 + 5 + 6.5 \right) = \frac{70.5}{6} \approx 11.75
$$

### 4.3. Interpretasi Hasil

Skor TLX yang diperoleh menunjukkan bahwa beban kerja mental operator berada pada tingkat yang cukup tinggi, yang dapat mempengaruhi kinerja dan keselamatan. Oleh karena itu, perlu dilakukan intervensi untuk mengurangi beban kerja mental, seperti pelatihan tambahan atau peningkatan desain ruang kontrol.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Penilaian beban kerja mental dan kesadaran situasional tidak hanya relevan dalam industri petrokimia, tetapi juga dapat diterapkan di sektor lain seperti otomasi, manajemen rantai pasok, dan keselamatan kerja. Dalam konteks otomasi, pemahaman tentang beban kerja mental dapat membantu dalam merancang sistem yang lebih intuitif dan mengurangi risiko kesalahan manusia.

Namun, ada beberapa batasan dalam metodologi yang perlu diperhatikan, seperti variabilitas individu dalam persepsi beban kerja dan kesadaran situasional. Penelitian masa depan dapat berfokus pada pengembangan model prediktif yang lebih akurat dan penerapan teknologi baru, seperti kecerdasan buatan, untuk meningkatkan analisis data dan pengambilan keputusan dalam ruang kontrol.

Dengan demikian, integrasi metode penilaian beban kerja mental dan kesadaran situasional yang lebih baik akan berkontribusi pada peningkatan keselamatan dan efisiensi operasional di berbagai sektor industri.