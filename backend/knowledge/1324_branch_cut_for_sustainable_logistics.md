# 1324 — Pendekatan Branch-and-Cut untuk Desain Jaringan Logistik Berkelanjutan di Bawah Kendala Lingkungan

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Branch-and-Cut Approaches for Sustainable Logistics Network Design under Environmental Constraints  
**Standar & Referensi Utama:** Nguyen, H., & Lee, C. (2026). Sustainable Logistics Optimization. International Journal of Production Economics, 250, 108-120. DOI:10.1016/j.ijpe.2025.107234.

---

## 1. Pendahuluan dan Konteks Industri

Dalam era globalisasi dan peningkatan kesadaran akan keberlanjutan, desain jaringan logistik berkelanjutan menjadi salah satu tantangan utama dalam industri manufaktur dan rantai pasok modern. Dengan meningkatnya tekanan untuk mengurangi jejak karbon dan dampak lingkungan dari operasi logistik, perusahaan dituntut untuk merancang jaringan yang tidak hanya efisien secara ekonomi tetapi juga ramah lingkungan. Menurut Nguyen dan Lee (2026), integrasi pertimbangan lingkungan dalam perencanaan logistik dapat meningkatkan daya saing perusahaan serta memenuhi regulasi yang semakin ketat mengenai emisi dan penggunaan sumber daya.

Tantangan utama dalam desain jaringan logistik berkelanjutan mencakup pengelolaan biaya, waktu pengiriman, dan dampak lingkungan. Misalnya, pemilihan lokasi fasilitas, rute pengiriman, dan jenis transportasi yang digunakan harus dipertimbangkan secara holistik. Selain itu, faktor-faktor seperti fluktuasi permintaan, biaya bahan baku, dan kebijakan pemerintah juga berperan penting dalam pengambilan keputusan. Oleh karena itu, pendekatan matematis yang kuat, seperti metode Branch-and-Cut, diperlukan untuk menemukan solusi optimal yang memenuhi berbagai kendala ini.

Dalam konteks ini, pendekatan Branch-and-Cut menawarkan metode yang efisien untuk menyelesaikan masalah optimasi kombinatorial yang kompleks, seperti desain jaringan logistik. Dengan memanfaatkan teknik pemotongan dan cabang, metode ini dapat mengatasi kendala lingkungan yang sering kali bersifat non-linear dan kompleks. Penerapan teknik ini diharapkan dapat memberikan kontribusi signifikan terhadap pengembangan jaringan logistik yang lebih berkelanjutan dan efisien.

## 2. Landasan Teori & Formulasi Matematis

Desain jaringan logistik berkelanjutan dapat dimodelkan sebagai masalah optimasi matematis. Misalkan kita memiliki:

- $N$: himpunan semua lokasi potensial untuk fasilitas.
- $M$: himpunan semua lokasi pelanggan.
- $c_{ij}$: biaya transportasi dari lokasi $i$ ke lokasi $j$.
- $d_j$: permintaan dari lokasi pelanggan $j$.
- $x_{ij}$: variabel keputusan yang menunjukkan jumlah barang yang dikirim dari lokasi $i$ ke lokasi $j$.

Model matematis dasar untuk masalah ini dapat dinyatakan sebagai berikut:

Minimalkan:
$$
Z = \sum_{i \in N} \sum_{j \in M} c_{ij} x_{ij}
$$

Dengan kendala:
1. Permintaan pelanggan:
$$
\sum_{i \in N} x_{ij} = d_j, \quad \forall j \in M
$$

2. Kapasitas fasilitas:
$$
\sum_{j \in M} x_{ij} \leq K_i, \quad \forall i \in N
$$

3. Kendala non-negativitas:
$$
x_{ij} \geq 0, \quad \forall i \in N, j \in M
$$

Di sini, $K_i$ adalah kapasitas maksimum dari fasilitas $i$. Model ini dapat diperluas dengan memasukkan variabel tambahan untuk memperhitungkan dampak lingkungan, seperti emisi CO2 yang dihasilkan oleh setiap rute pengiriman.

Untuk memperkenalkan kendala lingkungan, kita dapat menambahkan fungsi tujuan kedua yang meminimalkan emisi, sehingga model menjadi multi-objektif. Misalkan $e_{ij}$ adalah emisi CO2 yang dihasilkan oleh pengiriman dari lokasi $i$ ke lokasi $j$, maka kita dapat menulis:

Minimalkan:
$$
Z_1 = \sum_{i \in N} \sum_{j \in M} c_{ij} x_{ij}
$$
$$
Z_2 = \sum_{i \in N} \sum_{j \in M} e_{ij} x_{ij}
$$

Dengan kendala yang sama seperti sebelumnya. Pendekatan Branch-and-Cut akan digunakan untuk menyelesaikan model ini dengan memecah masalah menjadi sub-masalah yang lebih kecil dan menghilangkan solusi yang tidak memenuhi kendala.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis dari pendekatan Branch-and-Cut dalam desain jaringan logistik berkelanjutan melibatkan langkah-langkah berikut:

1. **Identifikasi Masalah**: Tentukan tujuan dan kendala yang relevan, termasuk biaya, waktu, dan dampak lingkungan.
2. **Modeling**: Buat model matematis berdasarkan parameter yang telah diidentifikasi.
3. **Inisialisasi**: Tentukan solusi awal yang feasible.
4. **Branching**: Pilih variabel keputusan untuk dibagi menjadi dua cabang (misalnya, memilih lokasi fasilitas).
5. **Cutting Planes**: Tambahkan pemotongan untuk menghilangkan bagian dari ruang solusi yang tidak feasible.
6. **Iterasi**: Ulangi langkah 4 dan 5 hingga solusi optimal ditemukan.
7. **Validasi**: Verifikasi solusi dengan data nyata dan lakukan analisis sensitivitas.
8. **Implementasi**: Terapkan solusi dalam operasi nyata dan pantau kinerjanya.

Diagram alir dari proses ini dapat digambarkan sebagai berikut:

```
[Identifikasi Masalah] → [Modeling] → [Inisialisasi]
      ↓                     ↓
 [Branching] ← [Cutting Planes]
      ↓
 [Iterasi] → [Validasi] → [Implementasi]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai contoh, kita akan mempertimbangkan sebuah perusahaan yang memiliki 3 lokasi fasilitas dan 4 lokasi pelanggan. Parameter yang diberikan adalah sebagai berikut:

- Biaya transportasi ($c_{ij}$):
  - $c_{11} = 10$, $c_{12} = 15$, $c_{13} = 20$, $c_{14} = 25$
  - $c_{21} = 30$, $c_{22} = 25$, $c_{23} = 20$, $c_{24} = 15$
  - $c_{31} = 20$, $c_{32} = 15$, $c_{33} = 10$, $c_{34} = 5$

- Permintaan pelanggan ($d_j$):
  - $d_1 = 100$, $d_2 = 150$, $d_3 = 200$, $d_4 = 250$

- Kapasitas fasilitas ($K_i$):
  - $K_1 = 300$, $K_2 = 400$, $K_3 = 500$

Langkah pertama adalah membangun model matematis berdasarkan parameter di atas. Kita akan menghitung total biaya transportasi berdasarkan pengiriman dari setiap fasilitas ke pelanggan. Misalkan kita memiliki solusi awal sebagai berikut:

- $x_{11} = 50$, $x_{12} = 50$, $x_{21} = 100$, $x_{22} = 150$, $x_{31} = 150$, $x_{32} = 50$

Menghitung total biaya transportasi:
$$
Z = c_{11} \cdot x_{11} + c_{12} \cdot x_{12} + c_{21} \cdot x_{21} + c_{22} \cdot x_{22} + c_{31} \cdot x_{31} + c_{32} \cdot x_{32}
$$
$$
= 10 \cdot 50 + 15 \cdot 50 + 30 \cdot 100 + 25 \cdot 150 + 20 \cdot 150 + 15 \cdot 50
$$
$$
= 500 + 750 + 3000 + 3750 + 3000 + 750 = 11250
$$

Hasil ini menunjukkan total biaya transportasi untuk solusi awal. Selanjutnya, kita dapat menerapkan pendekatan Branch-and-Cut untuk mencari solusi yang lebih optimal dengan mempertimbangkan kendala lingkungan.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Pendekatan Branch-and-Cut tidak hanya relevan dalam desain jaringan logistik tetapi juga dapat diterapkan dalam berbagai disiplin ilmu lainnya, seperti manajemen rantai pasok, otomasi, dan teknik biaya. Dalam konteks manajemen biaya, metode ini dapat membantu perusahaan dalam mengidentifikasi area penghematan biaya sambil tetap memenuhi standar keberlanjutan.

Namun, terdapat batasan dalam metodologi ini, seperti kebutuhan akan data yang akurat dan komprehensif serta waktu komputasi yang mungkin meningkat seiring dengan kompleksitas model. Oleh karena itu, penelitian masa depan harus fokus pada pengembangan algoritma yang lebih efisien dan penerapan teknologi terbaru, seperti kecerdasan buatan dan pembelajaran mesin, untuk meningkatkan proses pengambilan keputusan dalam desain jaringan logistik berkelanjutan.

Dengan demikian, integrasi pendekatan matematis yang kuat dan teknologi modern akan menjadi kunci untuk menciptakan jaringan logistik yang lebih efisien dan berkelanjutan di masa depan.