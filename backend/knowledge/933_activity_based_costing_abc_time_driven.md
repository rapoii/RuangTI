# 933 — Time-Driven Activity-Based Costing (TDABC) in High-Mix Low-Volume Industrial Job Shops: Practical Capacity Unit Cost, Time Equations per Operation, and Customer Profitability Profiling

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Time-Driven Activity-Based Costing (TDABC) in High-Mix Low-Volume Industrial Job Shops: Practical Capacity Unit Cost, Time Equations per Operation, and Customer Profitability Profiling  
**Standar & Referensi Utama:** Kaplan & Anderson (Time-Driven Activity-Based Costing, Harvard Business School Press); Cooper & Kaplan (The Design of Cost Management Systems)

---

## 1. Pendahuluan dan Konteks Industri

Dalam era globalisasi dan persaingan yang semakin ketat, industri manufaktur menghadapi tantangan yang signifikan, terutama dalam konteks high-mix low-volume job shops. Lingkungan ini ditandai dengan variasi produk yang tinggi dan volume produksi yang rendah, yang sering kali mengakibatkan kompleksitas dalam pengelolaan biaya dan efisiensi operasional. Menurut Kaplan & Anderson (2007), pendekatan tradisional dalam penganggaran biaya sering kali tidak memadai untuk menangani kompleksitas ini, sehingga diperlukan metode yang lebih adaptif dan akurat.

Time-Driven Activity-Based Costing (TDABC) muncul sebagai solusi yang relevan untuk mengatasi tantangan ini. Metode ini memungkinkan perusahaan untuk menghitung biaya berdasarkan waktu yang diperlukan untuk menyelesaikan setiap aktivitas, yang sangat penting dalam job shops yang beroperasi dengan variasi produk yang tinggi. Dengan TDABC, perusahaan dapat mengidentifikasi kapasitas praktis dan menghitung biaya per unit secara lebih akurat, yang pada gilirannya membantu dalam pengambilan keputusan strategis terkait penetapan harga dan profitabilitas pelanggan.

Tantangan utama dalam implementasi TDABC adalah kebutuhan untuk mengumpulkan data yang akurat dan relevan mengenai waktu dan kapasitas. Hal ini memerlukan sistem informasi yang baik dan kolaborasi antar departemen untuk memastikan bahwa semua data yang diperlukan tersedia dan dapat diakses. Selain itu, perusahaan juga harus mempertimbangkan aspek-aspek lain seperti manajemen rantai pasok dan dampak lingkungan dari proses produksi mereka, yang semakin menjadi perhatian di era keberlanjutan saat ini.

## 2. Landasan Teori & Formulasi Matematis

TDABC berfokus pada dua elemen utama: waktu yang diperlukan untuk menyelesaikan aktivitas dan kapasitas praktis dari sumber daya yang digunakan. Dalam konteks ini, kita dapat mendefinisikan beberapa variabel penting:

- $C_{p}$: Biaya praktis per unit produk
- $T_{i}$: Waktu yang dibutuhkan untuk menyelesaikan aktivitas $i$
- $N_{i}$: Jumlah unit yang diproduksi dari produk $i$
- $C_{r}$: Biaya sumber daya per jam
- $P_{i}$: Profitabilitas pelanggan untuk produk $i$

Rumus dasar untuk menghitung biaya praktis per unit ($C_{p}$) dapat dinyatakan sebagai berikut:

$$
C_{p} = \frac{C_{r} \cdot T_{i}}{N_{i}}
$$

Di mana $T_{i}$ dapat dihitung berdasarkan waktu rata-rata yang dibutuhkan untuk setiap aktivitas yang terlibat dalam proses produksi. Untuk menghitung waktu rata-rata per aktivitas, kita dapat menggunakan rumus:

$$
T_{i} = \sum_{j=1}^{m} t_{ij}
$$

Di mana $t_{ij}$ adalah waktu yang dibutuhkan untuk menyelesaikan aktivitas $j$ dari produk $i$, dan $m$ adalah jumlah aktivitas yang terlibat.

Profitabilitas pelanggan ($P_{i}$) dapat dihitung dengan mengurangkan biaya dari pendapatan yang dihasilkan dari produk tersebut:

$$
P_{i} = R_{i} - C_{p}
$$

Di mana $R_{i}$ adalah pendapatan yang dihasilkan dari penjualan produk $i$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi TDABC memerlukan langkah-langkah sistematis yang mencakup:

1. **Identifikasi Aktivitas**: Mengidentifikasi semua aktivitas yang terlibat dalam proses produksi.
2. **Pengukuran Waktu**: Mengumpulkan data waktu untuk setiap aktivitas menggunakan teknik pengukuran yang tepat.
3. **Penentuan Kapasitas**: Menghitung kapasitas praktis dari setiap sumber daya yang digunakan dalam proses.
4. **Perhitungan Biaya**: Menghitung biaya per unit menggunakan rumus yang telah dijelaskan sebelumnya.
5. **Analisis Profitabilitas**: Menghitung profitabilitas untuk setiap produk dan pelanggan.
6. **Penerapan dan Penyesuaian**: Mengimplementasikan hasil analisis dalam pengambilan keputusan dan melakukan penyesuaian jika diperlukan.

Diagram alir proses implementasi TDABC dapat digambarkan sebagai berikut:

```
[Identifikasi Aktivitas] --> [Pengukuran Waktu] --> [Penentuan Kapasitas] --> [Perhitungan Biaya] --> [Analisis Profitabilitas] --> [Penerapan dan Penyesuaian]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai contoh, kita akan mempertimbangkan sebuah perusahaan manufaktur yang memproduksi tiga jenis produk: A, B, dan C. Berikut adalah data yang relevan:

- Biaya sumber daya per jam ($C_{r}$): Rp100.000
- Waktu yang dibutuhkan untuk setiap produk:
  - Produk A: $T_{A} = 2$ jam
  - Produk B: $T_{B} = 3$ jam
  - Produk C: $T_{C} = 1.5$ jam
- Jumlah unit yang diproduksi:
  - Produk A: $N_{A} = 100$ unit
  - Produk B: $N_{B} = 50$ unit
  - Produk C: $N_{C} = 200$ unit
- Pendapatan dari setiap produk:
  - Produk A: $R_{A} = Rp1.500.000$
  - Produk B: $R_{B} = Rp1.000.000$
  - Produk C: $R_{C} = Rp600.000$

Mari kita hitung biaya praktis per unit untuk setiap produk:

1. **Produk A**:
   $$
   C_{pA} = \frac{C_{r} \cdot T_{A}}{N_{A}} = \frac{100.000 \cdot 2}{100} = Rp2.000
   $$

2. **Produk B**:
   $$
   C_{pB} = \frac{C_{r} \cdot T_{B}}{N_{B}} = \frac{100.000 \cdot 3}{50} = Rp6.000
   $$

3. **Produk C**:
   $$
   C_{pC} = \frac{C_{r} \cdot T_{C}}{N_{C}} = \frac{100.000 \cdot 1.5}{200} = Rp750
   $$

Selanjutnya, kita hitung profitabilitas untuk setiap produk:

1. **Produk A**:
   $$
   P_{A} = R_{A} - C_{pA} = 1.500.000 - (2.000 \cdot 100) = Rp1.300.000
   $$

2. **Produk B**:
   $$
   P_{B} = R_{B} - C_{pB} = 1.000.000 - (6.000 \cdot 50) = Rp700.000
   $$

3. **Produk C**:
   $$
   P_{C} = R_{C} - C_{pC} = 600.000 - (750 \cdot 200) = Rp0
   $$

Dari hasil perhitungan di atas, kita dapat menyimpulkan bahwa produk A memberikan profitabilitas tertinggi, diikuti oleh produk B, sementara produk C tidak memberikan profitabilitas. Hal ini menunjukkan pentingnya analisis biaya dan profitabilitas dalam pengambilan keputusan strategis.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

TDABC tidak hanya terbatas pada industri manufaktur, tetapi juga dapat diterapkan dalam berbagai sektor seperti layanan kesehatan, pendidikan, dan sektor jasa lainnya. Dalam konteks rantai pasok, TDABC dapat membantu perusahaan dalam mengidentifikasi biaya tersembunyi dan meningkatkan efisiensi operasional. Selain itu, dengan meningkatnya otomatisasi dan digitalisasi, penggunaan sistem informasi yang terintegrasi akan semakin penting untuk mendukung implementasi TDABC.

Namun, ada beberapa batasan dalam metodologi ini, termasuk kebutuhan untuk data yang akurat dan tantangan dalam pengukuran waktu yang tepat. Oleh karena itu, penelitian lebih lanjut diperlukan untuk mengembangkan alat dan teknik baru yang dapat memfasilitasi pengumpulan data dan analisis yang lebih baik.

Ke depan, TDABC dapat beradaptasi dengan perkembangan teknologi seperti Internet of Things (IoT) dan analitik data besar, yang dapat memberikan wawasan lebih dalam tentang proses produksi dan perilaku pelanggan. Dengan demikian, TDABC dapat terus menjadi alat yang relevan dan efektif dalam manajemen biaya dan profitabilitas di era industri 4.0.