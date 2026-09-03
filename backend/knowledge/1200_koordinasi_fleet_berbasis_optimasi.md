# 1200 — Koordinasi Fleet AMR Berbasis Optimasi untuk Peningkatan Produktivitas di Pabrik Cerdas

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Koordinasi Fleet AMR Berbasis Optimasi untuk Peningkatan Produktivitas di Pabrik Cerdas  
**Standar & Referensi Utama:** Qureshi, F., & Ali, S. (2024). Optimization-Based Coordination of AMR Fleets for Enhanced Productivity in Smart Factories. IEEE Transactions on Automation Science and Engineering, 21(3), 456-467. ISO 50001:2022.

---

## 1. Pendahuluan dan Konteks Industri

Dalam era industri 4.0, otomatisasi dan digitalisasi menjadi pilar utama dalam meningkatkan produktivitas dan efisiensi operasional pabrik. Salah satu teknologi yang berkembang pesat adalah Autonomous Mobile Robots (AMR), yang berfungsi untuk mengoptimalkan proses logistik dan transportasi internal di pabrik. AMR dapat beroperasi secara mandiri untuk mengangkut material, komponen, dan produk jadi, sehingga mengurangi ketergantungan pada tenaga kerja manusia dan meminimalkan kesalahan operasional.

Urgensi penerapan AMR dalam konteks industri modern sangat tinggi, mengingat tantangan yang dihadapi oleh manufaktur dan rantai pasok. Di tengah persaingan global yang ketat, perusahaan dituntut untuk meningkatkan produktivitas sambil menekan biaya operasional. Menurut Qureshi dan Ali (2024), koordinasi yang efektif antara armada AMR dapat meningkatkan throughput pabrik secara signifikan, yang pada gilirannya berdampak positif terhadap profitabilitas perusahaan. Namun, tantangan dalam pengelolaan armada AMR meliputi pengaturan rute yang efisien, penjadwalan tugas, dan penghindaran tabrakan antar robot, yang memerlukan pendekatan optimasi yang cermat.

Konteks ini menuntut adanya solusi yang tidak hanya efisien tetapi juga berkelanjutan, sejalan dengan standar ISO 50001:2022 yang menekankan pentingnya pengelolaan energi yang efisien dalam organisasi. Oleh karena itu, koordinasi fleet AMR berbasis optimasi menjadi krusial untuk mencapai tujuan produktivitas dan keberlanjutan di pabrik cerdas.

## 2. Landasan Teori & Formulasi Matematis

Koordinasi fleet AMR dapat dimodelkan dengan menggunakan pendekatan optimasi matematis. Misalkan kita memiliki $N$ unit AMR yang harus menyelesaikan $M$ tugas pengangkutan. Setiap AMR $i$ memiliki kapasitas maksimum $C_i$ dan waktu perjalanan $T_{ij}$ dari lokasi $j$ ke lokasi $k$. Tujuan kita adalah meminimalkan total waktu penyelesaian tugas, yang dapat dinyatakan dalam rumus berikut:

$$
\text{Minimize } Z = \sum_{i=1}^{N} \sum_{j=1}^{M} T_{ij} x_{ij}
$$

di mana $x_{ij}$ adalah variabel biner yang menunjukkan apakah AMR $i$ menyelesaikan tugas $j$ (1 jika ya, 0 jika tidak).

Definisi variabel:
- $N$: jumlah AMR
- $M$: jumlah tugas
- $C_i$: kapasitas AMR $i$
- $T_{ij}$: waktu perjalanan AMR $i$ untuk menyelesaikan tugas $j$
- $Z$: total waktu penyelesaian

Kendala yang perlu diperhatikan dalam model ini meliputi:
1. Kapasitas AMR:
   $$
   \sum_{j=1}^{M} x_{ij} \leq C_i, \quad \forall i
   $$
2. Setiap tugas harus diselesaikan oleh tepat satu AMR:
   $$
   \sum_{i=1}^{N} x_{ij} = 1, \quad \forall j
   $$

Model ini dapat diselesaikan menggunakan algoritma optimasi seperti Linear Programming (LP) atau Mixed Integer Programming (MIP).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistem koordinasi fleet AMR berbasis optimasi dapat dilakukan melalui langkah-langkah berikut:

1. **Analisis Kebutuhan**: Identifikasi kebutuhan operasional dan parameter sistem, termasuk jumlah AMR, jenis tugas, dan layout pabrik.
2. **Pengumpulan Data**: Kumpulkan data terkait waktu perjalanan, kapasitas AMR, dan karakteristik tugas.
3. **Modeling**: Bangun model matematis berdasarkan rumus yang telah dijelaskan.
4. **Optimasi**: Gunakan perangkat lunak optimasi (seperti CPLEX atau Gurobi) untuk menyelesaikan model dan mendapatkan solusi optimal.
5. **Implementasi**: Terapkan solusi yang diperoleh ke dalam sistem kontrol AMR.
6. **Monitoring dan Evaluasi**: Lakukan pemantauan kinerja sistem dan evaluasi hasil untuk perbaikan berkelanjutan.

Diagram alir proses implementasi dapat digambarkan sebagai berikut:

```
[Analisis Kebutuhan] → [Pengumpulan Data] → [Modeling] → [Optimasi] → [Implementasi] → [Monitoring]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai contoh, pertimbangkan pabrik yang memiliki 3 AMR dan 5 tugas pengangkutan. Data yang tersedia adalah sebagai berikut:

- Kapasitas AMR: $C_1 = 10$, $C_2 = 15$, $C_3 = 20$
- Waktu perjalanan (dalam menit):
  - $T_{11} = 5$, $T_{12} = 10$, $T_{13} = 15$, $T_{14} = 20$, $T_{15} = 25$
  - $T_{21} = 6$, $T_{22} = 11$, $T_{23} = 16$, $T_{24} = 21$, $T_{25} = 26$
  - $T_{31} = 7$, $T_{32} = 12$, $T_{33} = 17$, $T_{34} = 22$, $T_{35} = 27$

Model optimasi yang dibangun akan meminimalkan total waktu penyelesaian. Misalkan hasil optimasi menunjukkan bahwa:
- AMR 1 menyelesaikan tugas 1, 2, dan 3
- AMR 2 menyelesaikan tugas 4
- AMR 3 menyelesaikan tugas 5

Total waktu penyelesaian dapat dihitung sebagai berikut:

$$
Z = T_{11} + T_{12} + T_{13} + T_{24} + T_{35} = 5 + 10 + 15 + 21 + 27 = 78 \text{ menit}
$$

Hasil ini menunjukkan bahwa dengan koordinasi yang tepat, total waktu penyelesaian dapat diminimalkan, sehingga meningkatkan produktivitas pabrik.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Koordinasi fleet AMR berbasis optimasi tidak hanya relevan dalam konteks manufaktur, tetapi juga dapat diterapkan dalam sektor lain seperti logistik, distribusi, dan layanan kesehatan. Dalam konteks rantai pasok, penerapan AMR dapat mengurangi waktu tunggu dan meningkatkan efisiensi pengiriman barang. Selain itu, integrasi dengan teknologi IoT dan big data dapat memberikan wawasan yang lebih dalam mengenai pola operasional dan membantu dalam pengambilan keputusan yang lebih baik.

Namun, terdapat beberapa batasan dalam metodologi ini, termasuk ketergantungan pada data yang akurat dan kebutuhan untuk pembaruan model secara berkala. Di masa depan, penelitian dapat diarahkan untuk mengembangkan algoritma yang lebih adaptif dan responsif terhadap perubahan kondisi operasional, serta integrasi dengan teknologi AI untuk meningkatkan kemampuan prediktif dalam pengelolaan armada AMR.

Dengan demikian, koordinasi fleet AMR berbasis optimasi tidak hanya berkontribusi pada peningkatan produktivitas, tetapi juga mendukung keberlanjutan dan efisiensi energi sesuai dengan standar ISO 50001:2022.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
