# 889 — Optimal Warehouse Space Allocation and Dedicated Storage via Cube-per-Order Index (COI): Multi-Class Turnover Stratification, Fast-Pick Area Sizing, and Travel Distance Minimization

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Optimal Warehouse Space Allocation and Dedicated Storage via Cube-per-Order Index (COI): Multi-Class Turnover Stratification, Fast-Pick Area Sizing, and Travel Distance Minimization  
**Standar & Referensi Utama:** Heskett (Cube-per-Order Index, Harvard Business Review); Francis, McGinnis & White (Facility Layout and Location, Prentice Hall)

---

## 1. Pendahuluan dan Konteks Industri

Dalam konteks industri modern, efisiensi operasional di gudang menjadi salah satu faktor kunci yang menentukan keberhasilan dalam rantai pasok. Dengan meningkatnya permintaan konsumen dan kompleksitas logistik, perusahaan dituntut untuk mengoptimalkan penggunaan ruang gudang dan meminimalkan biaya operasional. Tantangan ini semakin mendesak, terutama di sektor manufaktur dan distribusi, di mana biaya penyimpanan dan pengambilan barang dapat mencapai proporsi signifikan dari total biaya operasional. 

Salah satu pendekatan yang telah terbukti efektif adalah penggunaan Cube-per-Order Index (COI) yang diperkenalkan oleh Heskett. COI memberikan kerangka kerja untuk mengalokasikan ruang penyimpanan berdasarkan frekuensi pemesanan dan volume barang, sehingga memungkinkan perusahaan untuk mengidentifikasi area penyimpanan yang optimal. Dengan stratifikasi turnover multi-kelas, perusahaan dapat mengelompokkan produk berdasarkan tingkat permintaan, yang selanjutnya memfasilitasi penentuan ukuran area pengambilan cepat (fast-pick area) dan meminimalkan jarak tempuh dalam proses pengambilan barang.

Dalam konteks ini, tantangan utama meliputi pengelolaan ruang yang terbatas, pengurangan waktu pengambilan, dan peningkatan akurasi dalam pengelolaan inventaris. Oleh karena itu, penerapan metode COI dalam alokasi ruang gudang tidak hanya meningkatkan efisiensi tetapi juga memberikan dampak positif terhadap kepuasan pelanggan dan profitabilitas perusahaan.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Cube-per-Order Index (COI)

Cube-per-Order Index (COI) didefinisikan sebagai rasio antara volume penyimpanan yang digunakan untuk produk tertentu dan jumlah pesanan yang diterima untuk produk tersebut. Rumus COI dapat dinyatakan sebagai:

$$
COI = \frac{V}{O}
$$

di mana:
- \( V \) = Volume total produk yang disimpan (m³)
- \( O \) = Jumlah total pesanan untuk produk tersebut

### 2.2. Stratifikasi Turnover Multi-Kelas

Stratifikasi turnover multi-kelas dilakukan dengan mengelompokkan produk berdasarkan frekuensi pemesanan dan volume. Misalkan terdapat \( n \) kelas produk, maka setiap kelas \( i \) dapat dinyatakan sebagai:

$$
T_i = \frac{O_i}{V_i}
$$

di mana:
- \( T_i \) = Turnover untuk kelas produk \( i \)
- \( O_i \) = Jumlah pesanan untuk kelas produk \( i \)
- \( V_i \) = Volume penyimpanan untuk kelas produk \( i \)

### 2.3. Penghitungan Ukuran Area Fast-Pick

Ukuran area fast-pick dapat dihitung dengan mempertimbangkan proporsi produk yang paling sering diambil. Misalkan \( P_f \) adalah proporsi produk yang termasuk dalam kategori fast-pick, maka ukuran area fast-pick \( A_f \) dapat dinyatakan sebagai:

$$
A_f = P_f \times A_t
$$

di mana:
- \( A_t \) = Total area gudang (m²)

### 2.4. Minimasi Jarak Tempuh

Minimasi jarak tempuh dalam pengambilan barang dapat dilakukan dengan menggunakan algoritma optimasi, seperti algoritma genetika atau algoritma pemrograman linier. Misalkan \( D \) adalah total jarak tempuh, maka:

$$
D = \sum_{j=1}^{m} d_j
$$

di mana:
- \( d_j \) = Jarak tempuh untuk pengambilan barang \( j \)
- \( m \) = Jumlah total pengambilan barang

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Pengumpulan Data**: Kumpulkan data terkait volume penyimpanan, jumlah pesanan, dan frekuensi pengambilan barang.
2. **Analisis COI**: Hitung COI untuk setiap produk dan identifikasi produk dengan COI tertinggi.
3. **Stratifikasi Produk**: Klasifikasikan produk berdasarkan stratifikasi turnover multi-kelas.
4. **Perencanaan Area Fast-Pick**: Tentukan ukuran area fast-pick berdasarkan proporsi produk yang sering diambil.
5. **Optimasi Layout Gudang**: Rancang layout gudang yang meminimalkan jarak tempuh dengan mempertimbangkan lokasi produk berdasarkan stratifikasi.
6. **Implementasi dan Monitoring**: Implementasikan layout baru dan lakukan monitoring untuk mengevaluasi kinerja.

### 3.2. Diagram Alir Proses

```
[Pengumpulan Data] --> [Analisis COI] --> [Stratifikasi Produk] --> [Perencanaan Area Fast-Pick] --> [Optimasi Layout Gudang] --> [Implementasi dan Monitoring]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan sebuah gudang memiliki total area \( A_t = 1000 \, \text{m}^2 \) dan menyimpan 5 produk dengan data sebagai berikut:

| Produk | Volume (m³) | Jumlah Pesanan |
|--------|-------------|-----------------|
| A      | 10          | 100             |
| B      | 15          | 150             |
| C      | 5           | 200             |
| D      | 20          | 50              |
| E      | 25          | 75              |

### 4.2. Perhitungan COI

1. Hitung COI untuk masing-masing produk:

   - Untuk Produk A:
   $$
   COI_A = \frac{10}{100} = 0.1
   $$
   - Untuk Produk B:
   $$
   COI_B = \frac{15}{150} = 0.1
   $$
   - Untuk Produk C:
   $$
   COI_C = \frac{5}{200} = 0.025
   $$
   - Untuk Produk D:
   $$
   COI_D = \frac{20}{50} = 0.4
   $$
   - Untuk Produk E:
   $$
   COI_E = \frac{25}{75} = 0.333
   $$

### 4.3. Stratifikasi Produk

Stratifikasi berdasarkan COI menunjukkan bahwa Produk D memiliki turnover tertinggi, diikuti oleh E, A, dan B, sedangkan C memiliki turnover terendah.

### 4.4. Ukuran Area Fast-Pick

Misalkan proporsi produk fast-pick \( P_f = 0.6 \):

$$
A_f = 0.6 \times 1000 = 600 \, \text{m}^2
$$

### 4.5. Minimasi Jarak Tempuh

Dengan menggunakan data jarak tempuh yang diperoleh dari layout sebelumnya, misalkan total jarak tempuh \( D \) dihitung sebagai berikut:

$$
D = d_A + d_B + d_C + d_D + d_E = 50 + 30 + 70 + 20 + 40 = 210 \, \text{m}
$$

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Penerapan metode COI dan strategi alokasi ruang gudang memiliki implikasi luas dalam disiplin lain, seperti manajemen rantai pasok dan otomasi. Dalam konteks manajemen biaya, pengurangan jarak tempuh dan waktu pengambilan dapat langsung berkontribusi pada penghematan biaya operasional. Selain itu, penerapan teknologi otomasi dalam pengambilan barang dapat lebih meningkatkan efisiensi.

Namun, terdapat batasan dalam metodologi ini, seperti ketidakpastian permintaan dan variasi dalam pola pengambilan barang. Oleh karena itu, penelitian lebih lanjut diperlukan untuk mengembangkan model yang lebih adaptif dan responsif terhadap perubahan kondisi pasar.

Arah riset masa depan dapat mencakup integrasi teknologi IoT untuk pemantauan real-time, penggunaan algoritma pembelajaran mesin untuk prediksi permintaan, dan pengembangan sistem manajemen gudang yang lebih cerdas dan terintegrasi. Dengan demikian, penerapan COI dan strategi alokasi ruang gudang akan terus menjadi area penting dalam pengembangan sistem logistik yang efisien dan efektif.