# 1136 — Sistem Manajemen Gerbang Penerbangan Berbasis IoT untuk Optimalisasi Waktu Pendaratan dan Keberangkatan

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Sistem Manajemen Gerbang Penerbangan Berbasis IoT untuk Optimalisasi Waktu Pendaratan dan Keberangkatan  
**Standar & Referensi Utama:** Kumar, P., & Singh, A. (2024). 'IoT-Based Gate Management System for Airlines'. Journal of Air Transport Management. DOI: 10.1016/j.jairtraman.2024.100123.

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan merupakan salah satu sektor yang paling dinamis dan kompleks dalam ekonomi global. Dengan meningkatnya permintaan akan perjalanan udara, tantangan dalam pengelolaan waktu pendaratan dan keberangkatan menjadi semakin signifikan. Menurut laporan dari International Air Transport Association (IATA), pada tahun 2023, lebih dari 4,5 miliar penumpang diperkirakan akan menggunakan layanan penerbangan, yang menambah tekanan pada infrastruktur bandara dan sistem manajemen gerbang.

Sistem manajemen gerbang yang efisien sangat penting untuk meminimalkan waktu tunggu dan meningkatkan pengalaman penumpang. Namun, banyak bandara masih menggunakan sistem manual yang rentan terhadap kesalahan dan keterlambatan. Tantangan ini diperparah oleh faktor eksternal seperti cuaca, keamanan, dan kepadatan lalu lintas udara. Dalam konteks ini, penerapan teknologi Internet of Things (IoT) menawarkan solusi inovatif untuk mengoptimalkan waktu pendaratan dan keberangkatan pesawat.

Kumar dan Singh (2024) mengemukakan bahwa sistem manajemen gerbang berbasis IoT dapat meningkatkan efisiensi operasional dengan memanfaatkan data real-time untuk pengambilan keputusan yang lebih baik. Dengan integrasi sensor, perangkat lunak analitik, dan komunikasi nirkabel, bandara dapat mengurangi waktu tunggu dan meningkatkan throughput gerbang. Oleh karena itu, penelitian ini bertujuan untuk mengeksplorasi implementasi sistem manajemen gerbang penerbangan berbasis IoT serta dampaknya terhadap efisiensi operasional.

## 2. Landasan Teori & Formulasi Matematis

Sistem manajemen gerbang penerbangan berbasis IoT dapat dijelaskan melalui beberapa parameter kunci yang mempengaruhi waktu pendaratan dan keberangkatan. Model matematis yang digunakan dalam analisis ini melibatkan beberapa variabel sebagai berikut:

- \( T_{arr} \): Waktu kedatangan pesawat (dalam menit)
- \( T_{dep} \): Waktu keberangkatan pesawat (dalam menit)
- \( T_{wait} \): Waktu tunggu pesawat di gerbang (dalam menit)
- \( T_{total} \): Total waktu yang diperlukan untuk pendaratan dan keberangkatan (dalam menit)

Model dasar yang dapat digunakan untuk menghitung total waktu adalah:

$$
T_{total} = T_{arr} + T_{wait} + T_{dep}
$$

Di mana waktu tunggu dapat dihitung dengan mempertimbangkan faktor-faktor seperti antrian di gerbang dan waktu yang dibutuhkan untuk proses boarding. Misalkan \( N \) adalah jumlah penumpang dan \( R \) adalah laju boarding per menit, maka waktu tunggu dapat dinyatakan sebagai:

$$
T_{wait} = \frac{N}{R}
$$

Sehingga total waktu dapat ditulis ulang sebagai:

$$
T_{total} = T_{arr} + \frac{N}{R} + T_{dep}
$$

Dengan menggunakan data real-time yang diperoleh dari sensor IoT, kita dapat mengoptimalkan \( T_{arr} \) dan \( T_{dep} \) dengan meminimalkan waktu tunggu dan meningkatkan laju boarding.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem manajemen gerbang penerbangan berbasis IoT melibatkan beberapa langkah sistematis sebagai berikut:

1. **Analisis Kebutuhan**: Mengidentifikasi kebutuhan operasional bandara dan penumpang.
2. **Desain Arsitektur Sistem**: Merancang arsitektur sistem yang mencakup sensor, perangkat lunak, dan infrastruktur jaringan.
3. **Pengadaan Perangkat**: Memilih dan mengadakan perangkat IoT yang sesuai, seperti sensor kedatangan, kamera, dan perangkat komunikasi.
4. **Pengembangan Perangkat Lunak**: Mengembangkan aplikasi untuk memproses data dan memberikan informasi real-time kepada pengelola bandara.
5. **Integrasi Sistem**: Mengintegrasikan perangkat keras dan perangkat lunak untuk memastikan komunikasi yang efektif.
6. **Uji Coba dan Validasi**: Melakukan uji coba sistem untuk memastikan kinerja sesuai dengan standar yang ditetapkan.
7. **Pelatihan Pengguna**: Melatih staf bandara dalam penggunaan sistem baru.
8. **Implementasi dan Pemeliharaan**: Meluncurkan sistem dan melakukan pemeliharaan berkala untuk memastikan kinerja optimal.

Diagram alir proses implementasi dapat dilihat pada Gambar 1.

```
Gambar 1: Diagram Alir Proses Implementasi Sistem Manajemen Gerbang
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk memberikan gambaran yang lebih jelas tentang penerapan sistem manajemen gerbang berbasis IoT, mari kita lihat studi kasus di Bandara Internasional XYZ. Misalkan data berikut diperoleh:

- Jumlah penumpang (\( N \)): 200
- Laju boarding (\( R \)): 20 penumpang/menit
- Waktu kedatangan pesawat (\( T_{arr} \)): 10 menit
- Waktu keberangkatan pesawat (\( T_{dep} \)): 15 menit

Dengan menggunakan rumus yang telah ditentukan sebelumnya, kita dapat menghitung waktu tunggu (\( T_{wait} \)):

$$
T_{wait} = \frac{N}{R} = \frac{200}{20} = 10 \text{ menit}
$$

Selanjutnya, kita dapat menghitung total waktu (\( T_{total} \)):

$$
T_{total} = T_{arr} + T_{wait} + T_{dep} = 10 + 10 + 15 = 35 \text{ menit}
$$

Dari hasil ini, manajer bandara dapat mengambil keputusan untuk meningkatkan laju boarding dengan menambah petugas boarding atau menggunakan teknologi boarding otomatis untuk mengurangi waktu tunggu, sehingga total waktu dapat diminimalkan.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Sistem manajemen gerbang berbasis IoT tidak hanya relevan untuk industri penerbangan tetapi juga dapat diterapkan dalam sektor lain seperti logistik dan transportasi. Dalam konteks rantai pasok, teknologi IoT dapat digunakan untuk memantau status pengiriman secara real-time, mengoptimalkan rute, dan mengurangi biaya operasional.

Namun, terdapat beberapa batasan dalam metodologi ini, termasuk ketergantungan pada infrastruktur teknologi yang memadai dan potensi risiko keamanan siber. Oleh karena itu, penting untuk mengembangkan standar dan protokol yang kuat untuk melindungi data dan sistem.

Arah riset masa depan dapat difokuskan pada pengembangan algoritma pembelajaran mesin untuk analisis data yang lebih mendalam, serta integrasi dengan teknologi lain seperti blockchain untuk meningkatkan transparansi dan keamanan dalam sistem manajemen gerbang.

Dengan demikian, penerapan sistem manajemen gerbang penerbangan berbasis IoT menawarkan potensi besar untuk meningkatkan efisiensi operasional, namun memerlukan pendekatan yang hati-hati dalam perencanaan dan implementasi.