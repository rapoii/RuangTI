# 816 — Additive Manufacturing of Complex Concentrated and High-Entropy Alloys (HEAs): Phase Prediction via CALPHAD, Solidification Segregation, and High-Temperature Oxidation Resistance

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Additive Manufacturing of Complex Concentrated and High-Entropy Alloys (HEAs): Phase Prediction via CALPHAD, Solidification Segregation, and High-Temperature Oxidation Resistance  
**Standar & Referensi Utama:** Miracle & Senkov (2023, Acta Materialia); ASTM B962; Cantor et al. (High-Entropy Alloys, CRC Press)

---

## 1. Pendahuluan dan Konteks Industri

Additive manufacturing (AM) telah muncul sebagai teknologi revolusioner dalam industri manufaktur, terutama dalam konteks pengembangan material canggih seperti High-Entropy Alloys (HEAs). HEAs, yang terdiri dari lima atau lebih elemen dalam proporsi hampir setara, menawarkan sifat mekanik dan termal yang superior dibandingkan dengan paduan tradisional. Namun, tantangan utama dalam penerapan HEAs dalam AM adalah prediksi fase, segregasi solidifikasi, dan ketahanan oksidasi pada suhu tinggi. Dalam konteks industri, kebutuhan untuk material yang lebih kuat, lebih ringan, dan tahan lama semakin mendesak, terutama di sektor otomotif, dirgantara, dan energi.

Konteks ini menjadi lebih kritis ketika mempertimbangkan tantangan operasional dan ekonomi yang dihadapi oleh produsen. Misalnya, biaya produksi yang tinggi dan waktu siklus yang lama dalam proses manufaktur konvensional dapat diatasi dengan AM, yang memungkinkan desain yang lebih kompleks dan pengurangan limbah material. Namun, untuk memanfaatkan potensi penuh dari AM dalam produksi HEAs, pemahaman mendalam tentang perilaku fase dan segregasi material selama proses solidifikasi sangat penting. Hal ini tidak hanya mempengaruhi kualitas produk akhir tetapi juga efisiensi proses produksi secara keseluruhan.

Literatur menunjukkan bahwa penggunaan metode CALPHAD (Calculation of Phase Diagrams) dapat memberikan wawasan yang berharga dalam memprediksi fase HEAs selama proses AM. Dengan demikian, integrasi teknik ini dalam desain dan produksi HEAs dapat meningkatkan daya saing industri dan memenuhi permintaan pasar yang terus berkembang (Miracle & Senkov, 2023; Cantor et al., 2023).

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Teori Dasar HEAs

High-Entropy Alloys (HEAs) memiliki karakteristik unik yang berasal dari kombinasi elemen yang beragam. Sifat-sifat ini dapat diprediksi menggunakan diagram fase, yang dapat dihitung menggunakan metode CALPHAD. Metode ini mengandalkan data termodinamika untuk memodelkan hubungan antara komposisi, suhu, dan fase material.

### 2.2. Model Termodinamika

Model termodinamika yang digunakan dalam CALPHAD dapat dinyatakan dengan persamaan Gibbs free energy ($G$):

$$
G(T, P, n) = G_{mix}(T, n) + G_{ph}(T, P)
$$

di mana:
- $G_{mix}$ adalah energi bebas campuran,
- $G_{ph}$ adalah energi bebas fase,
- $T$ adalah suhu,
- $P$ adalah tekanan,
- $n$ adalah jumlah mol dari komponen.

### 2.3. Prediksi Fase

Prediksi fase dapat dilakukan dengan menghitung energi bebas dari setiap fase yang mungkin. Fase yang stabil pada kondisi tertentu adalah fase dengan energi bebas terendah. Persamaan untuk energi bebas campuran dapat dinyatakan sebagai:

$$
G_{mix} = \sum_{i=1}^{k} x_i G_i
$$

di mana:
- $x_i$ adalah fraksi mol dari komponen $i$,
- $G_i$ adalah energi bebas dari komponen $i$.

### 2.4. Segregasi Solidifikasi

Segregasi solidifikasi dapat dianalisis menggunakan model segregasi, yang dinyatakan dengan persamaan Fick:

$$
\frac{\partial C}{\partial t} = D \frac{\partial^2 C}{\partial x^2}$$

di mana:
- $C$ adalah konsentrasi elemen,
- $D$ adalah koefisien difusi,
- $x$ adalah posisi dalam material.

### 2.5. Ketahanan Oksidasi

Ketahanan oksidasi pada suhu tinggi dapat dievaluasi dengan menggunakan model kinetika oksidasi, yang dinyatakan dengan persamaan Arrhenius:

$$
k = A e^{-\frac{Q}{RT}}$$

di mana:
- $k$ adalah laju reaksi,
- $A$ adalah faktor pre-exponential,
- $Q$ adalah energi aktivasi,
- $R$ adalah konstanta gas ideal,
- $T$ adalah suhu.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Pemilihan Bahan**: Identifikasi elemen yang akan digunakan dalam HEAs berdasarkan sifat yang diinginkan.
2. **Analisis Termodinamika**: Gunakan metode CALPHAD untuk memprediksi fase dan stabilitas termal dari kombinasi elemen.
3. **Proses Additive Manufacturing**: Terapkan teknik AM yang sesuai (misalnya, SLM, EBM) untuk memproduksi HEAs.
4. **Pengujian Material**: Lakukan pengujian untuk mengevaluasi sifat mekanik, ketahanan oksidasi, dan segregasi solidifikasi.
5. **Analisis Data**: Gunakan perangkat lunak analisis untuk mengevaluasi hasil pengujian dan membandingkannya dengan prediksi.

### 3.2. Diagram Alir Proses

Diagram alir berikut menggambarkan langkah-langkah dalam proses rekayasa HEAs menggunakan AM:

```
[ Pemilihan Bahan ] --> [ Analisis Termodinamika ] --> [ Proses AM ] --> [ Pengujian Material ] --> [ Analisis Data ]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan kita ingin memproduksi HEA berbasis FeCoNiCrMn dengan proporsi molar 20% masing-masing. Kita akan menghitung energi bebas campuran dan memprediksi fase.

#### 4.2. Input Parameter

- $G_{Fe} = -1000 \, \text{kJ/mol}$
- $G_{Co} = -950 \, \text{kJ/mol}$
- $G_{Ni} = -900 \, \text{kJ/mol}$
- $G_{Cr} = -1100 \, \text{kJ/mol}$
- $G_{Mn} = -800 \, \text{kJ/mol}$

#### 4.3. Langkah Kalkulasi

1. Hitung energi bebas campuran:

$$
G_{mix} = 0.2(-1000) + 0.2(-950) + 0.2(-900) + 0.2(-1100) + 0.2(-800)
$$

$$
G_{mix} = -1000 \, \text{kJ/mol}
$$

2. Bandingkan dengan energi bebas dari fase lain yang mungkin untuk menentukan fase stabil.

#### 4.4. Interpretasi Hasil

Hasil menunjukkan bahwa HEA yang diproduksi memiliki energi bebas campuran yang kompetitif, menunjukkan potensi untuk stabilitas fase yang baik. Ini memberikan dasar untuk pengujian lebih lanjut terhadap sifat mekanik dan ketahanan oksidasi.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

### 5.1. Hubungan dengan Disiplin Lain

Penerapan HEAs dalam AM tidak hanya terbatas pada teknik material, tetapi juga berhubungan erat dengan disiplin lain seperti manajemen rantai pasok, otomasi, dan teknik biaya. Integrasi teknologi AM dapat mengurangi waktu siklus produksi dan biaya material, serta meningkatkan efisiensi dalam rantai pasok.

### 5.2. Batasan Metodologi

Meskipun CALPHAD dan metode lainnya memberikan wawasan yang berharga, terdapat batasan dalam prediksi fase yang mungkin tidak mempertimbangkan semua variabel lingkungan dan proses. Penelitian lebih lanjut diperlukan untuk mengatasi tantangan ini.

### 5.3. Arah Riset Masa Depan

Ke depan, penelitian harus fokus pada pengembangan model yang lebih akurat untuk memprediksi perilaku HEAs dalam kondisi ekstrem, serta penerapan teknologi AI dan machine learning untuk meningkatkan efisiensi desain dan produksi. Penelitian ini akan sangat penting dalam memenuhi tuntutan industri yang terus berkembang dan beradaptasi dengan perubahan teknologi.

---

Dokumen ini memberikan gambaran menyeluruh tentang penerapan Additive Manufacturing dalam pengembangan High-Entropy Alloys, mencakup aspek teoritis, metodologi, dan aplikasi praktis yang relevan dengan konteks industri saat ini.