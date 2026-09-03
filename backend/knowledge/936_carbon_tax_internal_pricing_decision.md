# 936 — Shadow Carbon Pricing dan Mekanisme Internal Carbon Fee dalam Penganggaran Modal Perusahaan Industri: Konstruksi Kurva Biaya Pengurangan Marjinal (MACC) dan Skoring ROI yang Disesuaikan dengan Karbon

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Shadow Carbon Pricing dan Mekanisme Internal Carbon Fee dalam Penganggaran Modal Perusahaan Industri: Konstruksi Kurva Biaya Pengurangan Marjinal (MACC) dan Skoring ROI yang Disesuaikan dengan Karbon  
**Standar & Referensi Utama:** World Bank (State and Trends of Carbon Pricing 2024); CDP Technical Note on Internal Carbon Pricing; ISO 14008  

---

## 1. Pendahuluan dan Konteks Industri

Dalam era perubahan iklim yang semakin mendesak, perusahaan industri dihadapkan pada tantangan untuk mengintegrasikan pertimbangan lingkungan ke dalam penganggaran modal mereka. Shadow carbon pricing dan mekanisme internal carbon fee menjadi alat strategis yang penting dalam pengambilan keputusan investasi. Shadow carbon pricing adalah pendekatan di mana perusahaan menetapkan harga untuk emisi karbon yang dihasilkan, meskipun tidak ada regulasi formal yang mengharuskan mereka untuk melakukannya. Hal ini memungkinkan perusahaan untuk mengevaluasi proyek berdasarkan dampak lingkungan mereka, serta mengidentifikasi peluang untuk pengurangan emisi yang lebih efisien.

Tantangan utama dalam penerapan mekanisme ini adalah ketidakpastian mengenai harga karbon di masa depan dan dampaknya terhadap biaya operasional. Menurut laporan World Bank (2024), harga karbon global terus meningkat, namun masih ada perbedaan yang signifikan antara negara dan sektor industri. Ini menciptakan kebutuhan untuk membangun Kurva Biaya Pengurangan Marjinal (MACC), yang dapat membantu perusahaan dalam merencanakan investasi yang lebih berkelanjutan.

Dalam konteks ini, penting untuk memahami bagaimana mekanisme internal carbon fee dapat diterapkan dalam penganggaran modal. Dengan menggunakan pendekatan ini, perusahaan dapat menilai proyek berdasarkan ROI yang disesuaikan dengan karbon, yang mencerminkan biaya lingkungan dari investasi mereka. Hal ini tidak hanya mendukung keberlanjutan, tetapi juga dapat meningkatkan daya saing perusahaan di pasar global yang semakin memperhatikan isu-isu lingkungan.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Shadow Carbon Pricing

Shadow carbon pricing dapat didefinisikan sebagai harga yang ditetapkan oleh perusahaan untuk emisi karbon yang dihasilkan dari aktivitas operasional mereka. Harga ini dapat digunakan dalam analisis biaya-manfaat untuk mengevaluasi proyek investasi. Secara matematis, shadow carbon pricing ($P_c$) dapat dinyatakan sebagai:

$$
P_c = \frac{C_e}{E}
$$

di mana:
- $C_e$ = total biaya eksternal dari emisi karbon (dalam unit moneter)
- $E$ = total emisi karbon yang dihasilkan (dalam ton CO2)

### 2.2. Internal Carbon Fee

Mekanisme internal carbon fee adalah biaya yang ditetapkan oleh perusahaan untuk setiap ton emisi karbon yang dihasilkan. Biaya ini dapat digunakan untuk mendanai proyek pengurangan emisi. Rumus untuk menghitung biaya internal ($F_i$) adalah:

$$
F_i = P_c \times E
$$

### 2.3. Marginal Abatement Cost Curve (MACC)

Kurva Biaya Pengurangan Marjinal (MACC) adalah alat yang digunakan untuk mengidentifikasi biaya dan potensi pengurangan emisi dari berbagai proyek. MACC dapat dinyatakan sebagai:

$$
MACC = \frac{C_a}{E_a}
$$

di mana:
- $C_a$ = biaya untuk mengimplementasikan tindakan pengurangan emisi (dalam unit moneter)
- $E_a$ = jumlah emisi yang dapat dikurangi (dalam ton CO2)

### 2.4. ROI Carbon-Adjusted Scoring

Skoring ROI yang disesuaikan dengan karbon dapat dihitung dengan rumus berikut:

$$
ROI_{CA} = \frac{(B - C - F_i)}{I}
$$

di mana:
- $B$ = manfaat ekonomi dari proyek (dalam unit moneter)
- $C$ = biaya proyek (dalam unit moneter)
- $F_i$ = biaya internal karbon (dalam unit moneter)
- $I$ = investasi awal (dalam unit moneter)

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Identifikasi Proyek**: Tentukan proyek yang akan dievaluasi untuk pengurangan emisi.
2. **Pengumpulan Data**: Kumpulkan data terkait emisi karbon, biaya proyek, dan manfaat ekonomi.
3. **Penetapan Shadow Carbon Pricing**: Tentukan harga karbon yang relevan berdasarkan data pasar dan analisis risiko.
4. **Perhitungan Internal Carbon Fee**: Hitung biaya internal berdasarkan emisi yang dihasilkan.
5. **Konstruksi MACC**: Buat kurva MACC untuk mengidentifikasi potensi pengurangan emisi dari berbagai tindakan.
6. **Analisis ROI**: Hitung ROI yang disesuaikan dengan karbon untuk setiap proyek.
7. **Evaluasi dan Pengambilan Keputusan**: Bandingkan proyek berdasarkan ROI yang disesuaikan dengan karbon dan pilih proyek yang paling menguntungkan secara ekonomi dan lingkungan.

### 3.2. Diagram Alir Proses

```plaintext
[Identifikasi Proyek] --> [Pengumpulan Data] --> [Penetapan Shadow Carbon Pricing] --> [Perhitungan Internal Carbon Fee] --> [Konstruksi MACC] --> [Analisis ROI] --> [Evaluasi dan Pengambilan Keputusan]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan sebuah perusahaan manufaktur mempertimbangkan dua proyek untuk pengurangan emisi: Proyek A dan Proyek B.

- **Proyek A**:
  - Biaya proyek ($C_A$): Rp 1.000.000.000
  - Manfaat ekonomi ($B_A$): Rp 1.500.000.000
  - Emisi yang dihasilkan ($E_A$): 10.000 ton CO2
  - Biaya eksternal ($C_e$): Rp 200.000.000

- **Proyek B**:
  - Biaya proyek ($C_B$): Rp 800.000.000
  - Manfaat ekonomi ($B_B$): Rp 1.200.000.000
  - Emisi yang dihasilkan ($E_B$): 8.000 ton CO2
  - Biaya eksternal ($C_e$): Rp 160.000.000

### 4.2. Perhitungan

#### 4.2.1. Shadow Carbon Pricing

Untuk Proyek A:
$$
P_c = \frac{200.000.000}{10.000} = Rp 20.000 \text{ per ton CO2}
$$

Untuk Proyek B:
$$
P_c = \frac{160.000.000}{8.000} = Rp 20.000 \text{ per ton CO2}
$$

#### 4.2.2. Internal Carbon Fee

Untuk Proyek A:
$$
F_{iA} = 20.000 \times 10.000 = Rp 200.000.000
$$

Untuk Proyek B:
$$
F_{iB} = 20.000 \times 8.000 = Rp 160.000.000
$$

#### 4.2.3. ROI Carbon-Adjusted Scoring

Untuk Proyek A:
$$
ROI_{CA} = \frac{(1.500.000.000 - 1.000.000.000 - 200.000.000)}{1.000.000.000} = \frac{300.000.000}{1.000.000.000} = 0,3 \text{ atau } 30\%
$$

Untuk Proyek B:
$$
ROI_{CA} = \frac{(1.200.000.000 - 800.000.000 - 160.000.000)}{800.000.000} = \frac{240.000.000}{800.000.000} = 0,3 \text{ atau } 30\%
$$

### 4.3. Interpretasi Hasil

Kedua proyek memiliki ROI yang disesuaikan dengan karbon sebesar 30%. Namun, Proyek A memiliki emisi yang lebih tinggi dan biaya internal yang lebih besar. Oleh karena itu, meskipun ROI terlihat sama, Proyek B mungkin lebih menarik dari perspektif keberlanjutan.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Penerapan shadow carbon pricing dan mekanisme internal carbon fee tidak hanya relevan dalam sektor industri, tetapi juga dapat diterapkan dalam rantai pasok, otomasi, dan manajemen biaya. Dalam konteks Supply Chain, perusahaan dapat menggunakan harga karbon untuk mengevaluasi pemasok berdasarkan dampak lingkungan mereka, mendorong praktik yang lebih berkelanjutan.

Namun, terdapat beberapa batasan dalam metodologi ini, termasuk ketidakpastian dalam estimasi biaya eksternal dan fluktuasi harga karbon di pasar. Oleh karena itu, penelitian lebih lanjut diperlukan untuk mengembangkan model yang lebih akurat dan adaptif terhadap perubahan regulasi dan kondisi pasar.

Arah riset masa depan dapat mencakup pengembangan alat analisis yang lebih canggih untuk memperkirakan dampak jangka panjang dari investasi yang disesuaikan dengan karbon, serta integrasi teknologi baru seperti blockchain untuk transparansi dalam pelaporan emisi.

Dengan demikian, shadow carbon pricing dan mekanisme internal carbon fee dapat menjadi pendorong utama dalam transisi menuju ekonomi yang lebih berkelanjutan dan efisien, serta mendukung pencapaian tujuan keberlanjutan global.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
