# 948 — Individual Quick Freezing (IQF) Fluidized Bed Freezer: Minimum Fluidization Velocity (Umf), Plank Freezing Time Analytical Equation, Ice Crystal Size Morphology, and Drip Loss Reduction

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Individual Quick Freezing (IQF) Fluidized Bed Freezer: Minimum Fluidization Velocity (Umf), Plank Freezing Time Analytical Equation, Ice Crystal Size Morphology, and Drip Loss Reduction  
**Standar & Referensi Utama:** Plank (Handbuch der Kältetechnik); Singh & Heldman (Introduction to Food Engineering, 5th Ed., Academic Press); ASHRAE Refrigeration Handbook  

---

## 1. Pendahuluan dan Konteks Industri

Proses pembekuan cepat (Quick Freezing) merupakan salah satu teknologi penting dalam industri pengolahan makanan, terutama untuk menjaga kualitas dan kesegaran produk. Individual Quick Freezing (IQF) menggunakan freezer bed fluida untuk membekukan makanan secara individual, sehingga mengurangi kerusakan akibat pembentukan kristal es besar yang dapat merusak struktur sel makanan. Dalam konteks industri, efisiensi proses ini sangat penting untuk mengurangi biaya operasional dan meningkatkan daya saing produk di pasar global.

Tantangan utama dalam penerapan teknologi IQF adalah pengendalian parameter proses seperti kecepatan minimum fluidisasi ($U_{mf}$), waktu pembekuan, dan morfologi ukuran kristal es. Kecepatan minimum fluidisasi adalah kecepatan aliran udara yang diperlukan untuk mempertahankan partikel dalam keadaan melayang, yang berpengaruh langsung terhadap efisiensi transfer panas dan massa selama proses pembekuan. Selain itu, waktu pembekuan yang optimal harus ditentukan untuk meminimalkan kerugian air (drip loss) yang terjadi saat pencairan, yang dapat mempengaruhi kualitas organoleptik produk.

Dalam industri makanan, pengurangan drip loss sangat penting karena dapat mempengaruhi bobot dan kualitas produk akhir. Oleh karena itu, pemahaman mendalam tentang parameter-parameter ini dan penerapannya dalam desain sistem IQF menjadi sangat krusial. Penelitian ini bertujuan untuk memberikan pemahaman yang lebih baik tentang proses IQF dan memberikan panduan praktis untuk implementasi teknologi ini dalam industri pengolahan makanan.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Kecepatan Minimum Fluidisasi ($U_{mf}$)

Kecepatan minimum fluidisasi adalah kecepatan aliran fluida yang diperlukan untuk mengangkat partikel padat dalam sistem fluida. Rumus untuk menghitung $U_{mf}$ dapat dinyatakan sebagai berikut:

$$
U_{mf} = \frac{d_p^2 (\rho_p - \rho_f) g}{18 \mu_f}
$$

Di mana:
- $d_p$ = diameter partikel (m)
- $\rho_p$ = densitas partikel (kg/m³)
- $\rho_f$ = densitas fluida (kg/m³)
- $g$ = percepatan gravitasi (m/s²)
- $\mu_f$ = viskositas dinamis fluida (Pa.s)

### 2.2. Waktu Pembekuan Plank

Waktu pembekuan dapat dihitung menggunakan persamaan Plank, yang dinyatakan sebagai:

$$
t_f = \frac{L^2}{k} \cdot \frac{1}{\Delta T}
$$

Di mana:
- $t_f$ = waktu pembekuan (s)
- $L$ = ketebalan produk (m)
- $k$ = konduktivitas termal produk (W/m·K)
- $\Delta T$ = perbedaan suhu antara produk dan lingkungan (K)

### 2.3. Morfologi Ukuran Kristal Es

Ukuran kristal es yang terbentuk selama proses pembekuan sangat dipengaruhi oleh laju pendinginan. Ukuran kristal es dapat dihitung menggunakan rumus:

$$
D = k \cdot t^{n}
$$

Di mana:
- $D$ = diameter kristal es (m)
- $k$ = konstanta yang bergantung pada material
- $t$ = waktu pembekuan (s)
- $n$ = eksponen yang menunjukkan pengaruh waktu terhadap ukuran kristal

### 2.4. Pengurangan Drip Loss

Drip loss dapat dikurangi dengan mengontrol ukuran kristal es dan waktu pembekuan. Persentase drip loss dapat dihitung dengan rumus:

$$
\text{Drip Loss} = \frac{W_{awal} - W_{akhir}}{W_{awal}} \times 100\%
$$

Di mana:
- $W_{awal}$ = berat awal produk (kg)
- $W_{akhir}$ = berat produk setelah pencairan (kg)

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Persiapan Bahan Baku**: Pilih bahan baku yang sesuai dan lakukan analisis awal untuk menentukan parameter fisik seperti densitas, viskositas, dan konduktivitas termal.
2. **Pengaturan Sistem Freezer**: Atur sistem IQF dengan memperhatikan parameter kecepatan aliran udara dan suhu pendinginan.
3. **Pengukuran Kecepatan Minimum Fluidisasi**: Hitung $U_{mf}$ menggunakan rumus yang telah dijelaskan dan sesuaikan kecepatan aliran udara.
4. **Proses Pembekuan**: Lakukan proses pembekuan dengan memantau waktu dan suhu untuk memastikan waktu pembekuan sesuai dengan perhitungan Plank.
5. **Pengukuran Drip Loss**: Setelah proses pembekuan, lakukan pengukuran drip loss untuk mengevaluasi kualitas produk.
6. **Analisis Hasil**: Lakukan analisis terhadap hasil pembekuan dan drip loss untuk menentukan efektivitas proses.

### 3.2. Diagram Alir Proses

Diagram alir proses IQF dapat digambarkan sebagai berikut:

```
[Persiapan Bahan Baku] --> [Pengaturan Sistem Freezer] --> [Pengukuran U_mf] --> [Proses Pembekuan] --> [Pengukuran Drip Loss] --> [Analisis Hasil]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Perhitungan

Misalkan kita memiliki partikel makanan dengan parameter berikut:
- Diameter partikel ($d_p$) = 0.01 m
- Densitas partikel ($\rho_p$) = 800 kg/m³
- Densitas fluida ($\rho_f$) = 1.2 kg/m³
- Viskositas fluida ($\mu_f$) = 0.001 Pa.s
- Ketebalan produk ($L$) = 0.05 m
- Konduktivitas termal ($k$) = 0.5 W/m·K
- Suhu produk = -18°C, Suhu lingkungan = 0°C

#### 4.1.1. Menghitung $U_{mf}$

$$
U_{mf} = \frac{(0.01)^2 (800 - 1.2) (9.81)}{18 \times 0.001} = \frac{0.0001 \times 798.8 \times 9.81}{0.018} \approx 0.44 \text{ m/s}
$$

#### 4.1.2. Menghitung Waktu Pembekuan ($t_f$)

$$
\Delta T = 0 - (-18) = 18 \text{ K}
$$

$$
t_f = \frac{(0.05)^2}{0.5} \cdot \frac{1}{18} = \frac{0.0025}{0.5} \cdot \frac{1}{18} \approx 0.000277 \text{ s}
$$

#### 4.1.3. Menghitung Drip Loss

Misalkan berat awal produk adalah 1 kg dan setelah pencairan menjadi 0.95 kg.

$$
\text{Drip Loss} = \frac{1 - 0.95}{1} \times 100\% = 5\%
$$

### 4.2. Interpretasi Hasil

Dari perhitungan di atas, kecepatan minimum fluidisasi yang dihitung adalah 0.44 m/s, yang menunjukkan bahwa sistem harus diatur untuk mencapai kecepatan ini agar partikel dapat melayang dengan baik. Waktu pembekuan yang sangat kecil menunjukkan bahwa proses pembekuan dapat dilakukan dengan cepat, namun perlu diperhatikan bahwa ukuran kristal es yang terbentuk juga harus dikontrol untuk mengurangi drip loss yang tercatat sebesar 5%. Hal ini menunjukkan bahwa meskipun proses pembekuan cepat, pengendalian parameter sangat penting untuk menjaga kualitas produk.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Teknologi IQF tidak hanya terbatas pada industri makanan, tetapi juga dapat diterapkan dalam berbagai sektor seperti farmasi dan bioteknologi, di mana pengawetan produk sensitif terhadap suhu sangat penting. Dalam konteks rantai pasok, penerapan teknologi ini dapat meningkatkan efisiensi distribusi dan mengurangi kerugian produk selama transportasi.

Dari perspektif K3 dan ESG, pengurangan drip loss juga berkontribusi pada keberlanjutan dengan mengurangi limbah makanan. Namun, tantangan yang dihadapi termasuk kebutuhan untuk mengoptimalkan proses dan mengurangi biaya operasional. Penelitian masa depan harus fokus pada pengembangan teknologi baru yang dapat meningkatkan efisiensi energi dan mengurangi dampak lingkungan dari proses pembekuan.

Dalam rangka mencapai standar masa depan, kolaborasi antara industri dan akademisi sangat penting untuk mengembangkan solusi inovatif yang dapat memenuhi tuntutan pasar yang terus berkembang. Penelitian lebih lanjut juga diperlukan untuk mengeksplorasi hubungan antara parameter proses dan kualitas produk akhir, serta untuk mengembangkan model prediktif yang dapat digunakan untuk merancang sistem IQF yang lebih efisien.