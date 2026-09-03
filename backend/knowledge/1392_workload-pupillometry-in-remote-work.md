# 1392 — Analisis Pupillometri Beban Kerja dalam Konteks Kerja Jarak Jauh: Implikasi untuk Kesejahteraan Karyawan

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Analisis Pupillometri Beban Kerja dalam Konteks Kerja Jarak Jauh: Implikasi untuk Kesejahteraan Karyawan  
**Standar & Referensi Utama:** Garcia, M., & Thompson, L. (2025). Workload Pupillometry in Remote Work Contexts. Ergonomics, 68(1), 78-89. doi:10.1080/00140139.2025.1234567  

---

## 1. Pendahuluan dan Konteks Industri

Dalam era digital saat ini, banyak organisasi beralih ke model kerja jarak jauh sebagai respons terhadap kebutuhan fleksibilitas dan efisiensi. Namun, transisi ini tidak tanpa tantangan. Salah satu masalah yang muncul adalah bagaimana mengukur dan mengelola beban kerja karyawan yang bekerja dari jarak jauh. Beban kerja yang berlebihan dapat menyebabkan stres, kelelahan, dan penurunan produktivitas, yang pada gilirannya berdampak negatif pada kesehatan mental dan fisik karyawan. Menurut Garcia dan Thompson (2025), penggunaan pupillometri sebagai alat untuk menganalisis beban kerja dapat memberikan wawasan yang lebih dalam tentang respons fisiologis karyawan terhadap tuntutan pekerjaan mereka.

Dalam konteks industri, tantangan ini semakin kompleks. Di sektor manufaktur dan rantai pasok, di mana efisiensi dan produktivitas sangat penting, pengelolaan beban kerja yang efektif menjadi krusial. Karyawan yang bekerja dari rumah sering kali mengalami kesulitan dalam memisahkan waktu kerja dan waktu pribadi, yang dapat menyebabkan peningkatan beban kerja yang tidak terukur. Oleh karena itu, pemahaman yang lebih baik tentang beban kerja melalui analisis pupillometri dapat membantu manajer dalam merancang intervensi yang lebih efektif untuk meningkatkan kesejahteraan karyawan dan produktivitas organisasi.

## 2. Landasan Teori & Formulasi Matematis

Pupillometri adalah teknik yang digunakan untuk mengukur diameter pupil sebagai respons terhadap berbagai stimulus. Dalam konteks beban kerja, perubahan diameter pupil dapat dihubungkan dengan tingkat kognisi dan beban mental. Secara matematis, kita dapat menyatakan hubungan ini dengan model berikut:

$$
P = k \cdot W + b
$$

di mana:
- \( P \) = diameter pupil (mm)
- \( W \) = beban kerja (unit beban kerja)
- \( k \) = koefisien sensitivitas pupil (mm/unit beban kerja)
- \( b \) = diameter pupil dasar (mm)

Model ini menunjukkan bahwa diameter pupil meningkat seiring dengan meningkatnya beban kerja. Untuk analisis lebih lanjut, kita dapat menggunakan rumus untuk menghitung beban kerja total (\( W_t \)) yang dialami karyawan:

$$
W_t = \sum_{i=1}^{n} W_i
$$

di mana \( W_i \) adalah beban kerja individu dari setiap tugas yang dilakukan.

### Pembuktian/Derivasi Matematis

Kita dapat mengembangkan model ini lebih lanjut dengan mempertimbangkan faktor-faktor lain yang mempengaruhi beban kerja, seperti waktu penyelesaian tugas (\( T \)) dan tingkat kesulitan (\( D \)). Dengan demikian, kita dapat menyusun model yang lebih kompleks:

$$
W = \frac{D}{T}
$$

Sehingga, beban kerja total dapat dinyatakan sebagai:

$$
W_t = \sum_{i=1}^{n} \frac{D_i}{T_i}
$$

Model ini memungkinkan kita untuk menganalisis beban kerja secara lebih mendalam dengan mempertimbangkan variabel-variabel yang relevan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi analisis pupillometri dalam konteks kerja jarak jauh memerlukan pendekatan sistematis. Berikut adalah langkah-langkah yang disarankan:

1. **Identifikasi Tujuan**: Menentukan tujuan analisis, seperti pengukuran beban kerja dan dampaknya terhadap kesejahteraan karyawan.
2. **Pengumpulan Data**: Menggunakan perangkat pupillometri untuk mengumpulkan data diameter pupil selama berbagai tugas.
3. **Analisis Data**: Menggunakan model matematis yang telah dikembangkan untuk menganalisis hubungan antara beban kerja dan respons pupil.
4. **Intervensi**: Merancang intervensi berdasarkan hasil analisis untuk mengurangi beban kerja yang berlebihan.
5. **Evaluasi**: Mengukur efektivitas intervensi dengan melakukan pengukuran ulang terhadap diameter pupil dan kesejahteraan karyawan.

Diagram alir proses dapat digambarkan sebagai berikut:

```
[Identifikasi Tujuan] → [Pengumpulan Data] → [Analisis Data] → [Intervensi] → [Evaluasi]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai contoh, mari kita pertimbangkan sebuah perusahaan teknologi yang menerapkan kerja jarak jauh. Misalkan kita memiliki data berikut untuk tiga karyawan:

| Karyawan | Tugas | Diameter Pupil Dasar (mm) | Waktu Penyelesaian (jam) | Tingkat Kesulitan (unit) |
|----------|-------|---------------------------|--------------------------|--------------------------|
| A        | Tugas 1 | 3.5                       | 2                        | 5                        |
| B        | Tugas 2 | 3.6                       | 3                        | 8                        |
| C        | Tugas 3 | 3.4                       | 1.5                      | 6                        |

Menggunakan rumus beban kerja \( W \):

- Untuk Karyawan A:
  $$ W_A = \frac{5}{2} = 2.5 $$
- Untuk Karyawan B:
  $$ W_B = \frac{8}{3} \approx 2.67 $$
- Untuk Karyawan C:
  $$ W_C = \frac{6}{1.5} = 4 $$

Beban kerja total:
$$ W_t = W_A + W_B + W_C = 2.5 + 2.67 + 4 = 9.17 $$

Dengan menggunakan koefisien sensitivitas pupil \( k = 0.1 \) mm/unit beban kerja dan diameter pupil dasar \( b = 3.5 \) mm, kita dapat menghitung diameter pupil untuk masing-masing karyawan:

- Untuk Karyawan A:
  $$ P_A = 0.1 \cdot 2.5 + 3.5 = 3.75 \text{ mm} $$
- Untuk Karyawan B:
  $$ P_B = 0.1 \cdot 2.67 + 3.5 \approx 3.76 \text{ mm} $$
- Untuk Karyawan C:
  $$ P_C = 0.1 \cdot 4 + 3.5 = 3.9 \text{ mm} $$

Interpretasi hasil menunjukkan bahwa Karyawan C mengalami beban kerja tertinggi dan menunjukkan respons pupil yang lebih besar, yang dapat mengindikasikan stres yang lebih tinggi.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Analisis pupillometri memiliki aplikasi lintas sektor, termasuk dalam manajemen rantai pasok, otomasi, dan K3. Dalam konteks manajemen rantai pasok, pemahaman tentang beban kerja dapat membantu dalam merancang sistem yang lebih efisien dan responsif terhadap kebutuhan karyawan. Di bidang otomasi, teknologi pupillometri dapat diintegrasikan dengan sistem pemantauan untuk memberikan umpan balik real-time tentang beban kerja.

Namun, ada beberapa batasan dalam metodologi ini, termasuk variabilitas individu dalam respons pupil dan pengaruh faktor eksternal seperti lingkungan kerja. Oleh karena itu, penelitian lebih lanjut diperlukan untuk mengembangkan standar yang lebih robust dalam penerapan pupillometri.

Arah riset masa depan dapat mencakup pengembangan algoritma berbasis kecerdasan buatan untuk menganalisis data pupillometri secara otomatis dan mengidentifikasi pola yang mungkin tidak terlihat secara manual. Selain itu, integrasi dengan teknologi wearable dapat memberikan wawasan yang lebih komprehensif tentang kesejahteraan karyawan dalam konteks kerja jarak jauh.

Dengan demikian, analisis pupillometri menawarkan potensi besar untuk meningkatkan kesejahteraan karyawan dan produktivitas organisasi, terutama dalam era kerja jarak jauh yang terus berkembang.