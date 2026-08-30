# 995 — Analisis dan Rekayasa Sistem dalam Arsitektur Siklus Hidup Blanchard-Fabrycky

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Systems Engineering and Analysis (Blanchard-Fabrycky Lifecycle Architecture): Functional Baseline Definition, Technical Performance Measures (TPMs), Trade-Off Studies, and V-Model Verification  
**Standar & Referensi Utama:** Blanchard & Fabrycky (Systems Engineering and Analysis, 5th Ed., Pearson); INCOSE Systems Engineering Handbook v5 (2023); ISO/IEC/IEEE 15288  

---

## 1. Pendahuluan dan Konteks Industri

Dalam era globalisasi dan digitalisasi, industri manufaktur dan rantai pasok menghadapi tantangan yang semakin kompleks. Kebutuhan untuk meningkatkan efisiensi operasional, mengurangi biaya, dan memenuhi ekspektasi pelanggan yang terus meningkat menjadi pendorong utama untuk menerapkan pendekatan rekayasa sistem yang terintegrasi. Menurut Blanchard dan Fabrycky (2021), penerapan arsitektur siklus hidup yang efektif sangat penting untuk mencapai tujuan ini, terutama dalam konteks pengembangan produk yang melibatkan banyak disiplin ilmu.

Salah satu tantangan utama adalah integrasi berbagai sistem dan subsistem yang berfungsi secara sinergis. Ketidakpastian dalam spesifikasi fungsional dan performa teknis dapat mengakibatkan biaya tambahan dan keterlambatan dalam pengembangan produk. Oleh karena itu, definisi baseline fungsional dan pengukuran kinerja teknis (Technical Performance Measures, TPMs) menjadi krusial untuk memastikan bahwa semua elemen sistem beroperasi sesuai dengan harapan.

Di sisi lain, studi trade-off yang sistematis memungkinkan pengambilan keputusan yang lebih baik dalam pemilihan desain dan teknologi, yang pada gilirannya dapat mempengaruhi keberhasilan proyek secara keseluruhan. Dengan menggunakan model V untuk verifikasi, tim rekayasa dapat memastikan bahwa semua persyaratan telah dipenuhi sebelum produk diluncurkan ke pasar. Hal ini sangat penting dalam konteks industri yang sangat kompetitif saat ini, di mana kecepatan dan kualitas adalah kunci untuk mempertahankan pangsa pasar.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Definisi Baseline Fungsional

Baseline fungsional adalah dokumen yang merangkum semua fungsi yang harus dipenuhi oleh sistem. Dalam konteks ini, kita mendefinisikan fungsi $F$ sebagai:

$$
F = \{f_1, f_2, \ldots, f_n\}
$$

di mana $f_i$ adalah fungsi individual yang harus dipenuhi. 

### 2.2 Pengukuran Kinerja Teknis (TPMs)

TPMs digunakan untuk mengevaluasi sejauh mana sistem memenuhi spesifikasi yang ditetapkan. Misalkan kita memiliki $k$ parameter kinerja, maka TPM dapat dinyatakan sebagai:

$$
TPM_j = \frac{P_j}{P_{j, target}} \times 100\%
$$

di mana $P_j$ adalah nilai aktual dari parameter kinerja ke-$j$ dan $P_{j, target}$ adalah nilai target yang diinginkan.

### 2.3 Studi Trade-Off

Studi trade-off dilakukan untuk mengevaluasi berbagai alternatif desain berdasarkan kriteria tertentu. Misalkan kita memiliki dua alternatif desain, $D_1$ dan $D_2$, dengan biaya $C_1$ dan $C_2$, serta kinerja $K_1$ dan $K_2$. Trade-off dapat dinyatakan dalam bentuk rasio:

$$
R = \frac{K_1 - K_2}{C_1 - C_2}
$$

Rasio $R$ yang positif menunjukkan bahwa alternatif $D_1$ lebih baik dibandingkan $D_2$ dalam hal kinerja relatif terhadap biaya.

### 2.4 Model V untuk Verifikasi

Model V menggambarkan proses verifikasi dan validasi sistem. Pada sisi kiri V, kita melakukan analisis kebutuhan dan desain, sedangkan pada sisi kanan V, kita melakukan pengujian dan verifikasi. Persamaan untuk verifikasi dapat dinyatakan sebagai:

$$
V = \{V_1, V_2, \ldots, V_m\}
$$

di mana $V_i$ adalah hasil verifikasi untuk setiap tahap dalam siklus hidup sistem.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Langkah-langkah Implementasi

1. **Definisi Baseline Fungsional**: Identifikasi dan dokumentasikan semua fungsi yang harus dipenuhi oleh sistem.
2. **Pengukuran TPMs**: Tentukan parameter kinerja yang relevan dan ukur nilai aktualnya.
3. **Studi Trade-Off**: Lakukan analisis trade-off untuk mengevaluasi alternatif desain.
4. **Verifikasi Model V**: Terapkan model V untuk memastikan semua persyaratan telah dipenuhi.

### 3.2 Diagram Alir Proses

Berikut adalah diagram alir proses untuk implementasi metodologi rekayasa sistem:

```
[Definisi Baseline Fungsional] --> [Pengukuran TPMs] --> [Studi Trade-Off] --> [Verifikasi Model V]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Contoh Kasus

Misalkan kita memiliki sebuah proyek pengembangan sistem otomasi pabrik dengan parameter berikut:

- Biaya desain alternatif $D_1$: $C_1 = 100.000$
- Biaya desain alternatif $D_2$: $C_2 = 120.000$
- Kinerja alternatif $D_1$: $K_1 = 90$
- Kinerja alternatif $D_2$: $K_2 = 85$

### 4.2 Perhitungan Trade-Off

Menggunakan rumus trade-off yang telah didefinisikan:

$$
R = \frac{K_1 - K_2}{C_1 - C_2} = \frac{90 - 85}{100.000 - 120.000} = \frac{5}{-20.000} = -0.00025
$$

Rasio $R$ yang negatif menunjukkan bahwa alternatif $D_2$ lebih mahal tanpa memberikan peningkatan kinerja yang signifikan dibandingkan $D_1$.

### 4.3 Interpretasi Hasil

Hasil ini menunjukkan bahwa alternatif desain $D_1$ lebih efisien dalam hal biaya dan kinerja. Oleh karena itu, tim rekayasa harus mempertimbangkan untuk memilih desain $D_1$ untuk mengoptimalkan sumber daya dan mencapai tujuan proyek.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Penerapan metodologi rekayasa sistem tidak hanya terbatas pada industri manufaktur, tetapi juga dapat diterapkan dalam sektor lain seperti rantai pasok, otomasi, dan manajemen biaya. Dalam konteks rantai pasok, integrasi sistem yang baik dapat meningkatkan efisiensi distribusi dan pengurangan biaya operasional. 

Namun, terdapat batasan dalam metodologi ini, seperti kompleksitas sistem yang semakin meningkat dan kebutuhan untuk adaptasi terhadap perubahan teknologi. Oleh karena itu, arah riset masa depan harus fokus pada pengembangan alat dan teknik baru yang dapat membantu dalam pengambilan keputusan yang lebih baik dan lebih cepat.

Standar masa depan, seperti yang diusulkan dalam ISO/IEC/IEEE 15288, harus terus diperbarui untuk mencerminkan kemajuan teknologi dan kebutuhan industri yang terus berubah. Dengan demikian, penerapan prinsip-prinsip rekayasa sistem yang baik akan terus menjadi kunci untuk mencapai keunggulan kompetitif di pasar global.