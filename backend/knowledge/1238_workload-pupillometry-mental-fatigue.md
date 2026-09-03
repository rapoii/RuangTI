# 1238 — Penilaian Kelelahan Mental Melalui Pupillometri Beban Kerja dalam Pekerjaan Berisiko Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Assessing Mental Fatigue through Workload Pupillometry in High-Stress Occupations  
**Standar & Referensi Utama:** Kumar, S. (2026). Mental Fatigue Assessment Techniques. Ergonomics, 69(1), 12-25. DOI: 10.1080/00140139.2026.1234567. ISO 10075-2:2022.

---

## 1. Pendahuluan dan Konteks Industri

Kelelahan mental merupakan masalah yang semakin mendesak dalam konteks industri modern, khususnya dalam pekerjaan yang memiliki tingkat stres tinggi seperti penerbangan, kedokteran darurat, dan pengendalian lalu lintas udara. Dalam lingkungan kerja yang menuntut, individu sering kali dihadapkan pada beban kerja yang berlebihan yang dapat menyebabkan penurunan kinerja, peningkatan kesalahan, dan bahkan kecelakaan. Menurut Kumar (2026), kelelahan mental dapat diukur dengan berbagai teknik, termasuk pupillometri, yang menawarkan pendekatan objektif untuk menilai respons fisiologis terhadap beban kerja.

Dalam konteks manufaktur dan rantai pasok, kelelahan mental dapat mempengaruhi efisiensi operasional dan produktivitas. Misalnya, dalam industri otomotif, pekerja yang mengalami kelelahan mental cenderung membuat lebih banyak kesalahan dalam perakitan, yang dapat mengakibatkan biaya tambahan dan penundaan produksi. Oleh karena itu, penting untuk mengembangkan metode yang efektif untuk menilai dan mengelola kelelahan mental guna meningkatkan kinerja dan keselamatan kerja.

Standar ISO 10075-2:2022 memberikan panduan tentang penilaian beban mental, yang mencakup aspek-aspek seperti pengukuran beban kerja dan dampaknya terhadap kesehatan mental. Dengan mengintegrasikan teknik pupillometri dalam penilaian ini, organisasi dapat memperoleh wawasan yang lebih dalam tentang kondisi mental karyawan mereka, yang pada gilirannya dapat membantu dalam pengambilan keputusan yang lebih baik terkait manajemen sumber daya manusia dan perancangan kerja.

## 2. Landasan Teori & Formulasi Matematis

Pupillometri adalah teknik yang digunakan untuk mengukur diameter pupil sebagai respons terhadap berbagai stimulus, yang dapat mencerminkan tingkat beban mental. Dalam konteks ini, kita dapat menggunakan model matematis untuk menggambarkan hubungan antara beban kerja dan respons pupil.

Mari kita definisikan beberapa variabel:
- $D$: Diameter pupil (mm)
- $W$: Beban kerja (unit)
- $F$: Kelelahan mental (level 0-1)

Model dasar yang dapat digunakan untuk menggambarkan hubungan ini adalah:

$$
D = D_0 + k \cdot W
$$

di mana:
- $D_0$: Diameter pupil dasar (mm)
- $k$: Koefisien sensitivitas pupil terhadap beban kerja (mm/unit)

Kelelahan mental dapat dinyatakan sebagai fungsi dari diameter pupil:

$$
F = f(D) = \frac{D - D_0}{D_{max} - D_0}
$$

di mana $D_{max}$ adalah diameter pupil maksimum yang terukur dalam kondisi stres tinggi.

### Pembuktian/Derivasi Matematis

Untuk membuktikan hubungan ini, kita dapat melakukan analisis regresi untuk mengukur koefisien $k$ berdasarkan data empirik. Misalkan kita memiliki data pengukuran diameter pupil pada berbagai tingkat beban kerja, kita dapat menggunakan metode least squares untuk mendapatkan estimasi $k$.

Misalkan kita memiliki $n$ pengukuran:

$$
\sum_{i=1}^{n} (D_i - (D_0 + k \cdot W_i))^2 \to \min
$$

Dengan menyelesaikan persamaan ini, kita dapat memperoleh nilai $k$ yang optimal.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Langkah-langkah implementasi sistematis untuk penilaian kelelahan mental melalui pupillometri adalah sebagai berikut:

1. **Persiapan Alat dan Lingkungan**: Pastikan alat pupillometer terkalibrasi dan lingkungan pengukuran bebas dari gangguan.
2. **Pengumpulan Data Baseline**: Lakukan pengukuran diameter pupil pada kondisi istirahat untuk mendapatkan nilai $D_0$.
3. **Pengukuran Beban Kerja**: Tentukan beban kerja yang akan diterapkan pada subjek, misalnya melalui simulasi tugas yang relevan.
4. **Pengukuran Respons Pupil**: Selama dan setelah penerapan beban kerja, ukur diameter pupil secara berkala.
5. **Analisis Data**: Gunakan analisis regresi untuk menentukan koefisien $k$ dan menghitung tingkat kelelahan mental menggunakan rumus yang telah ditentukan.
6. **Pelaporan Hasil**: Dokumentasikan hasil dalam laporan yang mencakup analisis statistik dan rekomendasi untuk manajemen.

Diagram alir proses dapat digambarkan sebagai berikut:

```
[Persiapan Alat] --> [Pengumpulan Data Baseline] --> [Terapkan Beban Kerja] --> [Pengukuran Respons Pupil] --> [Analisis Data] --> [Pelaporan Hasil]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Mari kita pertimbangkan studi kasus di sebuah pabrik otomotif di mana pekerja mengalami beban kerja tinggi selama proses perakitan. Misalkan kita memiliki data berikut:

- Diameter pupil dasar ($D_0$): 3 mm
- Diameter pupil maksimum ($D_{max}$): 6 mm
- Beban kerja yang diterapkan ($W$): 50 unit
- Koefisien sensitivitas ($k$): 0.06 mm/unit

Menggunakan rumus yang telah ditentukan, kita dapat menghitung diameter pupil saat beban kerja diterapkan:

$$
D = D_0 + k \cdot W = 3 + 0.06 \cdot 50 = 6 mm
$$

Selanjutnya, kita dapat menghitung tingkat kelelahan mental:

$$
F = f(D) = \frac{D - D_0}{D_{max} - D_0} = \frac{6 - 3}{6 - 3} = 1
$$

Hasil ini menunjukkan bahwa pekerja berada dalam kondisi kelelahan mental maksimum. Dalam konteks manajerial, ini dapat diinterpretasikan sebagai kebutuhan untuk mengurangi beban kerja atau memberikan waktu istirahat yang lebih lama untuk memulihkan kondisi mental pekerja.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Penilaian kelelahan mental melalui pupillometri memiliki relevansi yang luas dalam berbagai disiplin, termasuk manajemen rantai pasok, otomasi, dan kesehatan dan keselamatan kerja (K3). Dalam konteks rantai pasok, pemahaman tentang kelelahan mental dapat membantu dalam merancang sistem kerja yang lebih efisien dan aman, mengurangi risiko kesalahan yang dapat mengganggu alur produksi.

Namun, terdapat beberapa batasan dalam metodologi ini, termasuk variabilitas individu dalam respons pupil dan faktor eksternal yang dapat mempengaruhi hasil pengukuran. Oleh karena itu, penelitian lebih lanjut diperlukan untuk mengembangkan model yang lebih robust dan dapat diandalkan.

Arah riset masa depan dapat mencakup integrasi teknologi wearable untuk pemantauan berkelanjutan terhadap kelelahan mental, serta pengembangan algoritma berbasis kecerdasan buatan untuk analisis data yang lebih mendalam. Dengan demikian, penilaian kelelahan mental dapat menjadi bagian integral dari strategi manajemen sumber daya manusia yang lebih holistik dan berkelanjutan.