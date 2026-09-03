# 1237 — Evaluasi Pengalaman Pengguna pada Exoskeleton Biomekanik dalam Aplikasi Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** User Experience Evaluation of Biomechanical Exoskeletons in Industrial Applications  
**Standar & Referensi Utama:** Nguyen, H. & Thompson, R. (2025). User Experience in Biomechanical Exoskeletons. Journal of Industrial Engineering and Management, 18(2), 89-104. DOI: 10.3926/jiem.1234. ASTM F3000-22.

---

## 1. Pendahuluan dan Konteks Industri

Dalam era industri 4.0, penggunaan teknologi canggih seperti exoskeleton biomekanik semakin umum dalam lingkungan kerja industri. Exoskeleton ini dirancang untuk meningkatkan kekuatan dan daya tahan pekerja, mengurangi risiko cedera, dan meningkatkan produktivitas. Menurut Nguyen & Thompson (2025), pengalaman pengguna (user experience) dari exoskeleton sangat penting untuk memastikan adopsi dan efektivitas teknologi ini dalam aplikasi industri.

Tantangan utama dalam penerapan exoskeleton biomekanik di sektor manufaktur dan rantai pasok modern meliputi penyesuaian ergonomis, interaksi pengguna dengan perangkat, dan dampak psikologis dari penggunaan teknologi baru. Pekerja sering kali merasa tidak nyaman atau tertekan saat menggunakan perangkat ini, yang dapat mengurangi produktivitas dan meningkatkan risiko cedera. Oleh karena itu, evaluasi pengalaman pengguna menjadi krusial untuk mengidentifikasi masalah ini dan meningkatkan desain serta fungsionalitas exoskeleton.

Dari perspektif ekonomi, investasi dalam teknologi exoskeleton harus dibenarkan dengan peningkatan efisiensi dan pengurangan biaya terkait cedera kerja. Menurut laporan dari ASTM F3000-22, penggunaan exoskeleton dapat mengurangi biaya cedera kerja hingga 50% jika diterapkan dengan benar. Namun, tanpa evaluasi pengalaman pengguna yang tepat, potensi manfaat ini mungkin tidak tercapai. Dengan demikian, penting untuk mengembangkan metodologi yang sistematis untuk mengevaluasi pengalaman pengguna dalam konteks aplikasi industri.

## 2. Landasan Teori & Formulasi Matematis

Evaluasi pengalaman pengguna dalam exoskeleton biomekanik dapat didekati melalui beberapa parameter kuantitatif. Beberapa variabel yang perlu diperhatikan antara lain:

- $E_u$: Pengalaman pengguna (user experience)
- $C_u$: Kenyamanan pengguna (user comfort)
- $S_p$: Stabilitas perangkat (device stability)
- $P_e$: Produktivitas (productivity)
- $R_d$: Risiko cedera (injury risk)

Model matematis yang dapat digunakan untuk mengevaluasi pengalaman pengguna dapat dinyatakan dalam bentuk fungsi sebagai berikut:

$$
E_u = f(C_u, S_p, P_e, R_d)
$$

Di mana fungsi $f$ dapat dinyatakan sebagai:

$$
E_u = w_1 C_u + w_2 S_p + w_3 P_e - w_4 R_d
$$

Dengan $w_1$, $w_2$, $w_3$, dan $w_4$ adalah bobot yang mencerminkan pentingnya masing-masing parameter dalam evaluasi pengalaman pengguna. Bobot ini dapat ditentukan melalui analisis regresi atau metode analitik lainnya.

### Pembuktian/Derivasi Matematis

Untuk menentukan bobot, kita dapat menggunakan metode analisis regresi berganda. Misalkan kita memiliki data pengalaman pengguna yang dikumpulkan dari survei, kita dapat membangun model regresi sebagai berikut:

$$
E_u = \beta_0 + \beta_1 C_u + \beta_2 S_p + \beta_3 P_e - \beta_4 R_d + \epsilon
$$

Di mana $\beta_0$ adalah intersep, $\beta_1$, $\beta_2$, $\beta_3$, dan $\beta_4$ adalah koefisien yang menunjukkan pengaruh masing-masing variabel terhadap pengalaman pengguna, dan $\epsilon$ adalah error term. Dengan menggunakan metode least squares, kita dapat memperkirakan nilai koefisien ini dari data yang ada.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Langkah-langkah dalam evaluasi pengalaman pengguna pada exoskeleton biomekanik meliputi:

1. **Identifikasi Tujuan Evaluasi**: Menentukan parameter yang akan dievaluasi berdasarkan kebutuhan industri.
2. **Pengumpulan Data**: Melakukan survei dan pengukuran langsung pada pengguna exoskeleton di lingkungan kerja.
3. **Analisis Data**: Menggunakan metode statistik untuk menganalisis data yang dikumpulkan.
4. **Pengembangan Rekomendasi**: Berdasarkan analisis, mengembangkan rekomendasi untuk perbaikan desain dan fungsionalitas exoskeleton.
5. **Implementasi dan Uji Coba**: Menerapkan rekomendasi dan melakukan uji coba untuk mengevaluasi dampaknya terhadap pengalaman pengguna.

Diagram alir proses evaluasi dapat digambarkan sebagai berikut:

```
[Identifikasi Tujuan] --> [Pengumpulan Data] --> [Analisis Data] --> [Pengembangan Rekomendasi] --> [Implementasi dan Uji Coba]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai contoh, mari kita pertimbangkan sebuah studi kasus di mana sebuah perusahaan manufaktur menggunakan exoskeleton untuk pekerja yang melakukan pengangkatan berat. Parameter yang diukur adalah sebagai berikut:

- Kenyamanan pengguna ($C_u$): 8 (skala 1-10)
- Stabilitas perangkat ($S_p$): 7 (skala 1-10)
- Produktivitas ($P_e$): 9 (skala 1-10)
- Risiko cedera ($R_d$): 3 (skala 1-10)

Misalkan bobot yang ditentukan adalah:

- $w_1 = 0.4$
- $w_2 = 0.3$
- $w_3 = 0.2$
- $w_4 = 0.1$

Maka, kita dapat menghitung pengalaman pengguna sebagai berikut:

$$
E_u = 0.4 \times 8 + 0.3 \times 7 + 0.2 \times 9 - 0.1 \times 3
$$

$$
E_u = 3.2 + 2.1 + 1.8 - 0.3 = 6.8
$$

Hasil ini menunjukkan bahwa pengalaman pengguna berada pada tingkat yang cukup baik, namun masih ada ruang untuk perbaikan, terutama dalam hal stabilitas perangkat.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Evaluasi pengalaman pengguna pada exoskeleton biomekanik memiliki implikasi luas di berbagai disiplin ilmu, termasuk manajemen rantai pasok, otomasi, dan keselamatan kerja. Dalam konteks rantai pasok, penggunaan exoskeleton dapat meningkatkan efisiensi dan mengurangi waktu henti akibat cedera. Di sisi lain, dalam aspek keselamatan kerja (K3), pengurangan risiko cedera dapat berkontribusi pada peningkatan keselamatan dan kesehatan pekerja.

Namun, terdapat beberapa batasan dalam metodologi yang perlu diperhatikan. Misalnya, hasil evaluasi dapat bervariasi tergantung pada konteks industri dan karakteristik pengguna. Oleh karena itu, riset lebih lanjut diperlukan untuk mengembangkan standar evaluasi yang lebih universal dan adaptif.

Arah riset masa depan dapat mencakup pengembangan algoritma cerdas untuk penyesuaian otomatis exoskeleton berdasarkan umpan balik pengguna dan kondisi kerja. Selain itu, integrasi teknologi sensor dan analitik data dapat memberikan wawasan lebih dalam tentang interaksi pengguna dengan perangkat, sehingga meningkatkan pengalaman pengguna secara keseluruhan.

Dengan demikian, evaluasi pengalaman pengguna pada exoskeleton biomekanik tidak hanya penting untuk keberhasilan teknologi ini, tetapi juga untuk meningkatkan keselamatan dan produktivitas di tempat kerja.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
