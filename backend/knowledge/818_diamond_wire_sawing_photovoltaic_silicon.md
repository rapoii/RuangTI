# 818 — High-Speed Electroplated Diamond Wire Sawing for Ultra-Thin Photovoltaic Silicon Wafers: Subsurface Microcrack Damage Modeling, Kerf Loss Minimization, and Wire Sawn Surface Topography

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** High-Speed Electroplated Diamond Wire Sawing for Ultra-Thin Photovoltaic Silicon Wafers: Subsurface Microcrack Damage Modeling, Kerf Loss Minimization, and Wire Sawn Surface Topography  
**Standar & Referensi Utama:** Wu et al. (2024, Solar Energy Mater. Solar Cells); SEMI M1; Möller (Silicon Material Science, Springer)

---

## 1. Pendahuluan dan Konteks Industri

Industri fotovoltaik mengalami pertumbuhan pesat dalam beberapa tahun terakhir, didorong oleh meningkatnya permintaan akan energi terbarukan dan pengurangan biaya produksi. Salah satu tantangan utama dalam proses manufaktur sel surya adalah pemotongan wafer silikon yang sangat tipis, yang diperlukan untuk meningkatkan efisiensi konversi energi. Pemotongan ini sering kali dilakukan menggunakan teknik electroplated diamond wire sawing, yang menawarkan kecepatan dan presisi tinggi. Namun, proses ini juga menghadapi tantangan signifikan, termasuk kerusakan mikroretak pada subsurface wafer dan kehilangan kerf yang dapat mempengaruhi hasil akhir dan biaya produksi.

Kerusakan mikroretak dapat terjadi akibat tekanan mekanis dan panas yang dihasilkan selama pemotongan, yang dapat mengurangi integritas struktural wafer dan mempengaruhi kinerja sel surya. Oleh karena itu, penting untuk mengembangkan model yang dapat memprediksi dan meminimalkan kerusakan ini. Selain itu, kerugian kerf, yaitu material yang hilang selama proses pemotongan, juga menjadi perhatian utama karena dapat berkontribusi pada biaya produksi yang lebih tinggi. Dengan demikian, pemahaman yang mendalam tentang topografi permukaan yang dihasilkan dan pengaruhnya terhadap kinerja sel surya sangat penting.

Dalam konteks ini, penelitian yang dilakukan oleh Wu et al. (2024) dan referensi dari SEMI M1 serta Möller memberikan dasar yang kuat untuk memahami dan mengatasi tantangan ini. Penelitian ini bertujuan untuk memberikan solusi yang inovatif dan efisien dalam pemotongan wafer silikon ultra-tipis, dengan fokus pada pemodelan kerusakan mikroretak, minimisasi kehilangan kerf, dan analisis topografi permukaan yang dihasilkan.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Pemodelan Kerusakan Mikroretak

Kerusakan mikroretak pada wafer silikon dapat dimodelkan dengan menggunakan teori elastisitas. Misalkan $ \sigma $ adalah tegangan yang diterima oleh material, dan $ \epsilon $ adalah regangan yang dihasilkan. Hubungan antara tegangan dan regangan dapat dinyatakan dengan hukum Hooke:

$$
\sigma = E \cdot \epsilon
$$

di mana $ E $ adalah modulus elastisitas material. Untuk memodelkan kerusakan mikroretak, kita dapat menggunakan pendekatan energi, di mana energi yang dibutuhkan untuk menghasilkan kerusakan mikroretak ($ G_c $) dapat dinyatakan sebagai:

$$
G_c = \frac{1}{2} \sigma^2 \cdot V
$$

di mana $ V $ adalah volume material yang mengalami kerusakan. Dengan memanfaatkan teori fraktur, kita dapat menghubungkan energi ini dengan panjang retakan ($ a $) dan modulus elastisitas ($ E $):

$$
G_c = \frac{E}{2} \cdot \left( \frac{a}{L} \right)^2
$$

di mana $ L $ adalah panjang spesimen.

### 2.2. Minimasi Kerf Loss

Kerf loss dapat didefinisikan sebagai rasio antara material yang hilang selama pemotongan dan total material yang dipotong. Misalkan $ W $ adalah lebar kerf, dan $ T $ adalah ketebalan wafer, maka kerf loss ($ KL $) dapat dinyatakan sebagai:

$$
KL = \frac{W}{T} \times 100\%
$$

Untuk meminimalkan kerf loss, kita perlu mengoptimalkan parameter pemotongan, seperti kecepatan pemotongan ($ v $) dan tekanan ($ P $). Hubungan antara kecepatan pemotongan dan kerf loss dapat dinyatakan dengan persamaan:

$$
W = k \cdot v^{-n}
$$

di mana $ k $ adalah konstanta dan $ n $ adalah eksponen yang tergantung pada material dan kondisi pemotongan.

### 2.3. Topografi Permukaan

Topografi permukaan yang dihasilkan dari pemotongan dapat dianalisis menggunakan metode profilometri. Misalkan $ Z(x,y) $ adalah fungsi topografi permukaan, maka kita dapat menghitung rata-rata permukaan ($ Z_{avg} $) sebagai:

$$
Z_{avg} = \frac{1}{A} \int_A Z(x,y) \, dA
$$

di mana $ A $ adalah area permukaan yang dianalisis.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Persiapan Material**: Siapkan wafer silikon dengan ketebalan yang ditentukan.
2. **Pengaturan Parameter Pemotongan**: Tentukan parameter pemotongan seperti kecepatan, tekanan, dan jenis kawat berlian.
3. **Proses Pemotongan**: Lakukan pemotongan menggunakan mesin electroplated diamond wire saw dengan parameter yang telah ditentukan.
4. **Pengukuran Kerusakan**: Lakukan analisis kerusakan mikroretak menggunakan teknik mikroskopi.
5. **Analisis Kerf Loss**: Hitung kerf loss berdasarkan pengukuran lebar kerf dan ketebalan wafer.
6. **Evaluasi Topografi Permukaan**: Gunakan profilometer untuk menganalisis topografi permukaan yang dihasilkan.

### 3.2. Diagram Alir Proses

```plaintext
+---------------------+
| Persiapan Material  |
+---------------------+
          |
          v
+---------------------+
| Pengaturan Parameter |
| Pemotongan          |
+---------------------+
          |
          v
+---------------------+
| Proses Pemotongan   |
+---------------------+
          |
          v
+---------------------+
| Pengukuran Kerusakan|
+---------------------+
          |
          v
+---------------------+
| Analisis Kerf Loss  |
+---------------------+
          |
          v
+---------------------+
| Evaluasi Topografi  |
| Permukaan           |
+---------------------+
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Parameter Input

- Ketebalan wafer ($ T $): 150 µm
- Lebar kerf ($ W $): 0.2 mm
- Kecepatan pemotongan ($ v $): 5 m/s
- Tekanan ($ P $): 1.5 MPa

### 4.2. Perhitungan Kerf Loss

Menggunakan rumus kerf loss:

$$
KL = \frac{W}{T} \times 100\%
$$

Substitusi nilai:

$$
KL = \frac{0.2 \, \text{mm}}{150 \, \mu m} \times 100\% = \frac{0.2 \times 1000 \, \mu m}{150 \, \mu m} \times 100\% = \frac{200}{150} \times 100\% \approx 133.33\%
$$

### 4.3. Interpretasi Hasil

Hasil perhitungan menunjukkan bahwa kerf loss yang tinggi dapat terjadi jika lebar kerf tidak diminimalkan. Oleh karena itu, penting untuk mengoptimalkan parameter pemotongan untuk mencapai efisiensi yang lebih baik.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Pemotongan wafer silikon ultra-tipis tidak hanya relevan dalam industri fotovoltaik, tetapi juga memiliki aplikasi dalam industri elektronik dan material komposit. Dalam konteks rantai pasok, efisiensi pemotongan dapat mengurangi biaya produksi dan meningkatkan daya saing. Selain itu, penerapan otomatisasi dalam proses pemotongan dapat meningkatkan konsistensi dan mengurangi variabilitas produk.

Dari perspektif K3 dan ESG, penting untuk mempertimbangkan dampak lingkungan dari proses pemotongan, termasuk pengelolaan limbah dan penggunaan energi yang efisien. Penelitian masa depan dapat difokuskan pada pengembangan teknik pemotongan yang lebih ramah lingkungan dan penggunaan material yang lebih berkelanjutan.

Dengan demikian, pemodelan kerusakan mikroretak, minimisasi kerf loss, dan analisis topografi permukaan merupakan aspek penting dalam meningkatkan efisiensi dan efektivitas proses pemotongan wafer silikon ultra-tipis, yang pada gilirannya dapat mendukung transisi menuju energi terbarukan yang lebih berkelanjutan.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
