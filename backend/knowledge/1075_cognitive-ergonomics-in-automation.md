# 1075 — Peran Ergonomi Kognitif dalam Desain Antarmuka Otomatis untuk Meningkatkan Keamanan Proses

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Peran Ergonomi Kognitif dalam Desain Antarmuka Otomatis untuk Meningkatkan Keamanan Proses  
**Standar & Referensi Utama:** Nguyen, H. & Patel, S. (2023). Cognitive Ergonomics in Automated Interface Design for Process Safety. IEEE Transactions on Human-Machine Systems, 53(2), 234-245. DOI:10.1109/THMS.2023.1234569.

---

## 1. Pendahuluan dan Konteks Industri

Dalam era industri 4.0, integrasi teknologi otomatisasi dalam proses manufaktur dan rantai pasok telah menjadi hal yang tidak terhindarkan. Penggunaan sistem otomatis tidak hanya meningkatkan efisiensi operasional, tetapi juga menimbulkan tantangan baru dalam hal interaksi manusia dengan mesin. Salah satu aspek yang sangat penting dalam desain antarmuka otomatis adalah ergonomi kognitif. Ergonomi kognitif berfokus pada bagaimana sistem dapat dirancang untuk mendukung kemampuan kognitif manusia, sehingga meningkatkan keamanan dan efektivitas operasional.

Konteks industri saat ini menunjukkan bahwa kecelakaan kerja dan kesalahan manusia masih menjadi penyebab utama dalam insiden yang merugikan. Menurut laporan dari Occupational Safety and Health Administration (OSHA), lebih dari 4.800 pekerja meninggal setiap tahun di tempat kerja di Amerika Serikat, dengan banyak dari insiden tersebut disebabkan oleh kesalahan dalam pengoperasian mesin otomatis. Oleh karena itu, penting untuk menerapkan prinsip-prinsip ergonomi kognitif dalam desain antarmuka otomatis untuk meminimalisir risiko dan meningkatkan keselamatan proses.

Tantangan yang dihadapi dalam desain antarmuka otomatis mencakup kompleksitas informasi yang harus diproses oleh operator, kecepatan pengambilan keputusan yang diperlukan, dan potensi untuk overload informasi. Penelitian oleh Nguyen dan Patel (2023) menunjukkan bahwa desain antarmuka yang memperhatikan aspek kognitif dapat mengurangi beban mental operator dan meningkatkan respons terhadap situasi kritis. Dengan demikian, penerapan ergonomi kognitif dalam desain antarmuka otomatis tidak hanya meningkatkan keamanan tetapi juga produktivitas dan kepuasan kerja operator.

## 2. Landasan Teori & Formulasi Matematis

Ergonomi kognitif berhubungan erat dengan teori pemrosesan informasi. Dalam konteks ini, kita dapat memodelkan interaksi antara manusia dan mesin menggunakan pendekatan matematis. Misalkan kita memiliki variabel berikut:

- $C$: Kapasitas kognitif operator (dalam bit)
- $I$: Jumlah informasi yang diterima dari antarmuka (dalam bit)
- $B$: Beban mental yang dialami operator (dalam unit beban)

Kita dapat menggunakan rumus berikut untuk menghitung beban mental:

$$ B = \frac{I}{C} $$

Di mana jika $B > 1$, maka operator mengalami overload informasi. Untuk mengurangi beban mental, kita perlu mendesain antarmuka yang menyajikan informasi dengan cara yang lebih efisien. Salah satu pendekatan adalah dengan menggunakan prinsip Chunking, di mana informasi dibagi menjadi unit-unit yang lebih kecil dan lebih mudah diproses.

Misalkan kita memiliki $n$ unit informasi yang perlu disampaikan, dan setiap unit memiliki ukuran $s$ bit. Maka total informasi yang perlu diproses adalah:

$$ I = n \cdot s $$

Jika kita ingin menjaga beban mental di bawah 1, kita harus memastikan bahwa kapasitas kognitif operator ($C$) lebih besar dari total informasi yang diterima:

$$ C > n \cdot s $$

Dengan demikian, desain antarmuka harus mempertimbangkan jumlah unit informasi dan ukuran setiap unit untuk memastikan bahwa operator dapat memproses informasi dengan efektif.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Metodologi untuk menerapkan ergonomi kognitif dalam desain antarmuka otomatis melibatkan beberapa langkah sistematis:

1. **Analisis Tugas**: Identifikasi tugas yang dilakukan oleh operator dan informasi yang diperlukan untuk menyelesaikan tugas tersebut.
2. **Desain Antarmuka**: Menggunakan prinsip ergonomi kognitif untuk merancang antarmuka yang menyajikan informasi dengan cara yang mudah dipahami. Ini termasuk penggunaan warna, ukuran font, dan pengelompokan informasi.
3. **Pengujian Usability**: Melakukan pengujian dengan pengguna untuk mengevaluasi efektivitas antarmuka. Ini dapat melibatkan pengukuran beban mental, waktu penyelesaian tugas, dan tingkat kesalahan.
4. **Iterasi Desain**: Berdasarkan umpan balik dari pengujian, lakukan perbaikan pada desain antarmuka.
5. **Implementasi**: Terapkan antarmuka yang telah diperbaiki dalam sistem otomatis dan lakukan pelatihan bagi operator.

Diagram alir proses dapat digambarkan sebagai berikut:

```
[Analisis Tugas] --> [Desain Antarmuka] --> [Pengujian Usability] --> [Iterasi Desain] --> [Implementasi]
```

Standar prosedur operasional (SOP) harus mengikuti pedoman yang ditetapkan oleh ISO 9241 mengenai ergonomi interaksi manusia dengan sistem, serta standar ANSI/HFES 100 untuk desain antarmuka.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai contoh, kita akan menganalisis sistem antarmuka otomatis di pabrik kimia. Misalkan antarmuka menyajikan 10 indikator penting, masing-masing dengan ukuran informasi 8 bit. Maka total informasi yang perlu diproses oleh operator adalah:

$$ I = n \cdot s = 10 \cdot 8 = 80 \text{ bit} $$

Jika kapasitas kognitif operator adalah 64 bit, maka:

$$ B = \frac{I}{C} = \frac{80}{64} = 1.25 $$

Ini menunjukkan bahwa operator mengalami overload informasi. Untuk mengurangi beban mental, kita dapat mengurangi jumlah indikator menjadi 8 atau mengurangi ukuran informasi setiap indikator menjadi 6 bit. Mari kita coba dengan mengurangi ukuran indikator:

$$ I_{baru} = 10 \cdot 6 = 60 \text{ bit} $$

Sekarang kita hitung kembali beban mental:

$$ B_{baru} = \frac{I_{baru}}{C} = \frac{60}{64} = 0.9375 $$

Dengan desain baru, beban mental operator kini berada di bawah 1, yang menunjukkan bahwa sistem antarmuka lebih efektif dan aman.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Penerapan ergonomi kognitif dalam desain antarmuka otomatis tidak hanya relevan untuk industri manufaktur, tetapi juga dapat diterapkan dalam berbagai sektor seperti kesehatan, transportasi, dan teknologi informasi. Dalam sektor kesehatan, misalnya, desain antarmuka yang baik dapat mengurangi kesalahan dalam pengobatan dan meningkatkan keselamatan pasien. Dalam transportasi, antarmuka yang dirancang dengan baik dapat mengurangi kecelakaan yang disebabkan oleh kesalahan pengemudi.

Namun, ada batasan dalam metodologi ini, termasuk variabilitas individu dalam kapasitas kognitif dan pengalaman. Oleh karena itu, penting untuk melakukan penelitian lebih lanjut untuk memahami bagaimana faktor-faktor ini mempengaruhi interaksi manusia dengan sistem otomatis.

Ke depan, riset dalam ergonomi kognitif harus fokus pada pengembangan teknologi adaptif yang dapat menyesuaikan antarmuka berdasarkan kebutuhan dan kemampuan pengguna secara real-time. Ini termasuk penggunaan kecerdasan buatan untuk menganalisis perilaku pengguna dan menyesuaikan penyajian informasi sesuai dengan konteks dan situasi yang dihadapi.

Dengan demikian, penerapan ergonomi kognitif dalam desain antarmuka otomatis akan terus menjadi area penting dalam meningkatkan keamanan dan efisiensi proses di berbagai sektor industri.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
