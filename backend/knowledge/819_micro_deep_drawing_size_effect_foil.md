# 819 — Micro Deep Drawing of Ultra-Thin Metallic Foils: Grain Size-to-Thickness Ratio Size Effects, Friction Anisotropy, and Limiting Drawing Ratio (LDR) Modeling

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Micro Deep Drawing of Ultra-Thin Metallic Foils: Grain Size-to-Thickness Ratio Size Effects, Friction Anisotropy, and Limiting Drawing Ratio (LDR) Modeling  
**Standar & Referensi Utama:** Vollertsen et al. (2023, CIRP Annals); ISO 12004; Engel & Eckstein (Microforming, Springer)

---

## 1. Pendahuluan dan Konteks Industri

Dalam era industri 4.0, kebutuhan akan komponen yang lebih ringan dan lebih kuat semakin meningkat, terutama dalam sektor otomotif dan elektronik. Micro deep drawing merupakan proses yang sangat penting dalam pembuatan komponen dari foil logam ultra-tipis, yang sering digunakan dalam aplikasi seperti casing elektronik, komponen otomotif, dan alat medis. Proses ini menghadapi tantangan signifikan terkait dengan ukuran butir material, rasio ketebalan, dan anisotropi gesekan yang dapat mempengaruhi hasil akhir produk.

Salah satu tantangan utama dalam micro deep drawing adalah pengaruh ukuran butir terhadap rasio ketebalan. Menurut Vollertsen et al. (2023), ukuran butir yang lebih kecil dapat meningkatkan kekuatan material tetapi juga dapat mengurangi ductility, yang berpotensi menyebabkan kerusakan selama proses pembentukan. Selain itu, anisotropi gesekan antara material dan die dapat mempengaruhi distribusi tegangan dan deformasi, yang pada gilirannya mempengaruhi kualitas produk akhir.

Dengan meningkatnya permintaan akan produk yang lebih kompleks dan presisi tinggi, penting untuk memahami dan memodelkan efek-efek ini untuk mengoptimalkan proses micro deep drawing. Oleh karena itu, penelitian ini bertujuan untuk mengembangkan model yang dapat memprediksi rasio penarikan terbatas (Limiting Drawing Ratio, LDR) dengan mempertimbangkan faktor-faktor tersebut, yang diharapkan dapat memberikan panduan praktis bagi insinyur dalam merancang proses dan material yang lebih efisien.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Definisi Variabel dan Parameter

- $d$: Ketebalan foil logam (mm)
- $D$: Diameter die (mm)
- $LDR$: Limiting Drawing Ratio
- $G$: Ukuran butir (µm)
- $\mu$: Koefisien gesekan
- $\sigma_y$: Tegangan luluh material (MPa)

### 2.2. Model LDR

Rasio penarikan terbatas (LDR) dapat didefinisikan sebagai rasio antara diameter die dan ketebalan material:

$$
LDR = \frac{D}{d}
$$

### 2.3. Pengaruh Ukuran Butir

Menurut Engel & Eckstein, ukuran butir berpengaruh terhadap sifat mekanik material. Hubungan antara ukuran butir dan tegangan luluh dapat dinyatakan dengan rumus Hall-Petch:

$$
\sigma_y = \sigma_0 + k \cdot G^{-1/2}
$$

di mana:
- $\sigma_0$: Tegangan luluh material dengan ukuran butir tak terbatas (MPa)
- $k$: Konstanta material (MPa·µm$^{1/2}$)

### 2.4. Anisotropi Gesekan

Anisotropi gesekan dapat dimodelkan dengan menggunakan koefisien gesekan yang berbeda untuk arah yang berbeda. Misalkan $\mu_x$ dan $\mu_y$ adalah koefisien gesekan dalam arah x dan y, maka gaya gesekan total $F_f$ dapat dinyatakan sebagai:

$$
F_f = \mu_x \cdot F_n + \mu_y \cdot F_t
$$

di mana $F_n$ adalah gaya normal dan $F_t$ adalah gaya tangensial.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Pemilihan Material**: Pilih foil logam dengan ukuran butir yang sesuai dan sifat mekanik yang diinginkan.
2. **Desain Die**: Rancang die dengan mempertimbangkan LDR yang diinginkan.
3. **Pengaturan Parameter Proses**: Tentukan parameter proses seperti kecepatan penarikan, suhu, dan tekanan.
4. **Pengujian Awal**: Lakukan pengujian awal untuk menentukan koefisien gesekan dan sifat mekanik material.
5. **Analisis Hasil**: Evaluasi hasil produk untuk memastikan bahwa spesifikasi terpenuhi.

### 3.2. Diagram Alir Proses

```plaintext
[Pemilihan Material] --> [Desain Die] --> [Pengaturan Parameter Proses] --> [Pengujian Awal] --> [Analisis Hasil]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan kita memiliki foil logam dengan ketebalan $d = 0.1$ mm dan ukuran butir $G = 10$ µm. Tegangan luluh material $\sigma_0 = 200$ MPa dan konstanta $k = 50$ MPa·µm$^{1/2}$.

#### 4.2. Perhitungan LDR

1. Hitung tegangan luluh menggunakan rumus Hall-Petch:

$$
\sigma_y = 200 + 50 \cdot 10^{-1/2} = 200 + 50 \cdot 3.162 = 200 + 158.1 = 358.1 \text{ MPa}
$$

2. Tentukan diameter die untuk LDR = 2:

$$
LDR = \frac{D}{d} \Rightarrow D = LDR \cdot d = 2 \cdot 0.1 = 0.2 \text{ mm}
$$

### 4.3. Interpretasi Hasil

Hasil menunjukkan bahwa dengan ketebalan 0.1 mm dan ukuran butir 10 µm, kita dapat mencapai LDR sebesar 2 dengan diameter die 0.2 mm. Ini menunjukkan bahwa proses micro deep drawing dapat dilakukan dengan baik dalam kondisi ini, asalkan parameter lainnya juga dioptimalkan.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Micro deep drawing tidak hanya relevan dalam industri otomotif dan elektronik, tetapi juga memiliki aplikasi dalam sektor medis dan aerospace. Dengan meningkatnya kompleksitas produk dan kebutuhan akan efisiensi, penting untuk mengintegrasikan teknik-teknik baru seperti otomasi dan analisis data dalam proses ini.

### 5.1. Hubungan dengan Disiplin Lain

- **Supply Chain**: Optimalisasi proses dapat mengurangi waktu siklus dan biaya, meningkatkan efisiensi rantai pasok.
- **Otomasi**: Penggunaan robotika dalam proses micro deep drawing dapat meningkatkan presisi dan mengurangi kesalahan manusia.
- **Manajemen Biaya/Teknik**: Analisis biaya yang lebih baik dapat membantu dalam pengambilan keputusan investasi dalam teknologi baru.
- **K3/ESG**: Proses yang lebih efisien dan ramah lingkungan dapat membantu perusahaan memenuhi standar keberlanjutan.

### 5.2. Batasan Metodologi

Model yang dikembangkan masih memiliki keterbatasan dalam hal asumsi yang digunakan, seperti homogenitas material dan kondisi proses yang ideal. Penelitian lebih lanjut diperlukan untuk mengatasi variabilitas dalam kondisi nyata.

### 5.3. Arah Riset Masa Depan

Penelitian di masa depan dapat difokuskan pada pengembangan material baru dengan ukuran butir yang lebih kecil dan sifat mekanik yang lebih baik, serta penerapan teknologi canggih seperti machine learning untuk memprediksi hasil proses secara lebih akurat.

---

Dokumen ini memberikan gambaran komprehensif mengenai micro deep drawing dari foil logam ultra-tipis, dengan penekanan pada efek ukuran butir, anisotropi gesekan, dan pemodelan LDR. Dengan mengikuti metodologi dan standar yang diuraikan, diharapkan dapat meningkatkan efisiensi dan kualitas dalam proses manufaktur modern.