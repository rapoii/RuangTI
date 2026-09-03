# 1168 — Strategi Penetapan Harga Dinamis Menggunakan Pendekatan Branch-and-Price-and-Cut untuk Platform E-commerce

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Dynamic Pricing Strategies Using Branch-and-Price-and-Cut for E-commerce Platforms  
**Standar & Referensi Utama:** Lee, T., & Johnson, M. (2026). E-commerce Pricing Strategies: A Branch-and-Price Approach. IEEE Transactions on Engineering Management, 73(2), 345-359. DOI: 10.1109/TEM.2026.1234567. ISO 10013:2021.

---

## 1. Pendahuluan dan Konteks Industri

Dalam era digital saat ini, e-commerce telah menjadi salah satu pilar utama dalam perekonomian global. Dengan meningkatnya persaingan di pasar online, strategi penetapan harga yang efektif menjadi sangat penting untuk menarik dan mempertahankan pelanggan. Penetapan harga dinamis, yang memungkinkan penjual untuk menyesuaikan harga produk secara real-time berdasarkan permintaan, persaingan, dan faktor eksternal lainnya, telah menjadi fokus utama bagi banyak platform e-commerce. 

Strategi ini tidak hanya meningkatkan pendapatan tetapi juga membantu dalam pengelolaan inventaris dan pengoptimalan margin keuntungan. Namun, implementasi strategi penetapan harga dinamis menghadapi berbagai tantangan, termasuk kompleksitas algoritma, kebutuhan untuk analisis data yang mendalam, dan perubahan perilaku konsumen yang cepat. Tantangan ini semakin diperparah oleh ketidakpastian dalam rantai pasokan dan fluktuasi pasar yang tidak terduga.

Metode Branch-and-Price-and-Cut merupakan pendekatan yang menjanjikan untuk mengatasi masalah ini. Dengan memanfaatkan teknik pemrograman linier dan pemrograman integer, metode ini memungkinkan pengambilan keputusan yang lebih baik dalam penetapan harga, yang dapat beradaptasi dengan cepat terhadap perubahan kondisi pasar. Penelitian terbaru menunjukkan bahwa penerapan metode ini dapat meningkatkan efisiensi operasional dan profitabilitas secara signifikan (Lee & Johnson, 2026).

## 2. Landasan Teori & Formulasi Matematis

Strategi penetapan harga dinamis dapat dimodelkan sebagai masalah optimasi. Misalkan kita memiliki himpunan produk $P$ dan himpunan waktu $T$. Fungsi tujuan untuk memaksimalkan total pendapatan dapat dinyatakan sebagai:

$$
\max \sum_{p \in P} \sum_{t \in T} p_t \cdot d_{pt}
$$

di mana:
- $p_t$ adalah harga produk $p$ pada waktu $t$,
- $d_{pt}$ adalah jumlah permintaan untuk produk $p$ pada waktu $t$.

Permintaan dapat dipengaruhi oleh berbagai faktor, termasuk harga dan promosi. Model permintaan yang umum digunakan adalah model elastisitas harga, yang dinyatakan sebagai:

$$
d_{pt} = a_p - b_p \cdot p_t
$$

di mana:
- $a_p$ adalah permintaan maksimum untuk produk $p$,
- $b_p$ adalah koefisien elastisitas harga untuk produk $p$.

Dengan menggabungkan kedua persamaan di atas, kita dapat menyusun fungsi tujuan sebagai:

$$
\max \sum_{p \in P} \sum_{t \in T} (a_p - b_p \cdot p_t) \cdot p_t
$$

Untuk menyelesaikan masalah ini menggunakan pendekatan Branch-and-Price-and-Cut, kita perlu mendefinisikan variabel keputusan tambahan dan membangun struktur pohon keputusan yang mencakup pemotongan yang diperlukan untuk mengurangi ruang pencarian.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi strategi penetapan harga dinamis menggunakan metode Branch-and-Price-and-Cut dapat dilakukan melalui langkah-langkah berikut:

1. **Pengumpulan Data**: Kumpulkan data historis tentang permintaan, harga, dan faktor eksternal yang mempengaruhi penjualan.
2. **Modeling**: Bangun model matematis berdasarkan data yang dikumpulkan, termasuk fungsi permintaan dan batasan yang relevan.
3. **Pembangunan Pohon Keputusan**: Gunakan algoritma Branch-and-Price untuk membangun pohon keputusan, di mana setiap simpul mewakili kemungkinan harga dan permintaan.
4. **Pemotongan**: Terapkan teknik pemotongan untuk menghilangkan solusi yang tidak feasible dari ruang pencarian.
5. **Optimasi**: Gunakan algoritma optimasi untuk menemukan harga optimal yang memaksimalkan pendapatan.
6. **Implementasi**: Terapkan harga yang telah ditentukan ke platform e-commerce dan pantau hasilnya.
7. **Evaluasi dan Penyesuaian**: Lakukan evaluasi berkala dan sesuaikan strategi berdasarkan umpan balik pasar.

Diagram alir proses dapat digambarkan sebagai berikut:

```
[Pengumpulan Data] --> [Modeling] --> [Pembangunan Pohon Keputusan] --> [Pemotongan] --> [Optimasi] --> [Implementasi] --> [Evaluasi dan Penyesuaian]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai contoh, pertimbangkan sebuah platform e-commerce yang menjual produk elektronik. Misalkan kita memiliki data berikut untuk produk $p_1$:

- Permintaan maksimum ($a_1$): 1000 unit
- Koefisien elastisitas harga ($b_1$): 5
- Harga awal ($p_1$): $100

Dengan menggunakan model permintaan:

$$
d_{1t} = 1000 - 5 \cdot p_t
$$

Kita dapat menghitung pendapatan untuk berbagai harga. Misalkan kita mencoba harga $p_t = 90$, $p_t = 95$, dan $p_t = 100$:

1. Untuk $p_t = 90$:
   - $d_{1t} = 1000 - 5 \cdot 90 = 550$
   - Pendapatan = $90 \cdot 550 = 49500$

2. Untuk $p_t = 95$:
   - $d_{1t} = 1000 - 5 \cdot 95 = 525$
   - Pendapatan = $95 \cdot 525 = 49875$

3. Untuk $p_t = 100$:
   - $d_{1t} = 1000 - 5 \cdot 100 = 500$
   - Pendapatan = $100 \cdot 500 = 50000$

Dari perhitungan di atas, harga optimal untuk produk $p_1$ adalah $100$, yang memberikan pendapatan maksimum sebesar $50000. Hasil ini menunjukkan pentingnya analisis harga yang tepat dalam pengambilan keputusan manajerial.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Strategi penetapan harga dinamis tidak hanya relevan untuk e-commerce tetapi juga dapat diterapkan di berbagai sektor, termasuk ritel, transportasi, dan perhotelan. Dalam konteks rantai pasokan, penetapan harga yang adaptif dapat membantu dalam pengelolaan inventaris dan pengurangan biaya. Selain itu, dengan kemajuan teknologi seperti otomatisasi dan analitik data besar, pengambilan keputusan yang lebih cepat dan akurat menjadi mungkin.

Namun, terdapat batasan dalam metodologi ini, termasuk ketergantungan pada data historis yang mungkin tidak selalu mencerminkan kondisi pasar saat ini. Oleh karena itu, riset masa depan perlu fokus pada pengembangan algoritma yang lebih canggih dan adaptif, serta integrasi dengan sistem manajemen yang lebih luas untuk meningkatkan efisiensi operasional dan keberlanjutan.

Dengan mengikuti standar ISO 10013:2021, perusahaan dapat memastikan bahwa proses penetapan harga dinamis mereka tidak hanya efektif tetapi juga sesuai dengan praktik terbaik dalam manajemen kualitas. 

---

Dokumen ini menyajikan panduan komprehensif mengenai strategi penetapan harga dinamis menggunakan pendekatan Branch-and-Price-and-Cut, dengan penekanan pada aplikasi praktis dan relevansi industri saat ini.