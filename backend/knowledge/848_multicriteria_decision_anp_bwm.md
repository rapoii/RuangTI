# 848 — Metode Terbaik-Terburuk (BWM) dan Proses Jaringan Analitik (ANP) untuk Seleksi Pemasok Strategis: Verifikasi Rasio Konsistensi Optimasi Non-Linier dan Profil Sensitivitas

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Best-Worst Method (BWM) and Analytic Network Process (ANP) for Strategic Supplier Selection: Non-Linear Optimization Consistency Ratio Verification and Sensitivity Profiling  
**Standar & Referensi Utama:** Rezaei (2022, Omega); Saaty (Decision Making with Dependence and Feedback: The ANP); ISO 20400

---

## 1. Pendahuluan dan Konteks Industri

Dalam era globalisasi dan persaingan yang semakin ketat, pemilihan pemasok strategis menjadi salah satu aspek krusial dalam manajemen rantai pasok (supply chain management). Keputusan ini tidak hanya berdampak pada biaya dan kualitas produk, tetapi juga pada keberlanjutan dan reputasi perusahaan. Menurut Rezaei (2022), banyak perusahaan menghadapi tantangan dalam menilai dan memilih pemasok yang tidak hanya memenuhi kriteria biaya dan kualitas, tetapi juga mampu beradaptasi dengan kebutuhan pasar yang dinamis. 

Tantangan ini diperparah oleh kompleksitas hubungan antar pemasok, di mana ketergantungan dan interaksi antara berbagai kriteria membuat proses pengambilan keputusan semakin rumit. Dalam konteks ini, metode Best-Worst Method (BWM) dan Analytic Network Process (ANP) muncul sebagai solusi yang efektif. BWM memungkinkan pengambil keputusan untuk mengidentifikasi kriteria yang paling dan paling tidak penting, sedangkan ANP memberikan kerangka kerja untuk mempertimbangkan ketergantungan dan umpan balik antar kriteria. 

Dengan mengadopsi pendekatan ini, perusahaan dapat mengoptimalkan pemilihan pemasok, meningkatkan efisiensi operasional, dan mengurangi risiko dalam rantai pasok. Namun, penting untuk memastikan bahwa proses ini dilakukan dengan konsistensi yang tinggi, yang dapat diverifikasi melalui rasio konsistensi. Selain itu, analisis sensitivitas diperlukan untuk memahami dampak perubahan dalam kriteria terhadap hasil akhir pemilihan pemasok.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Best-Worst Method (BWM)

BWM adalah metode pengambilan keputusan multi-kriteria yang dirancang untuk mengidentifikasi prioritas kriteria dengan cara yang lebih efisien. Langkah-langkah dalam BWM meliputi:

1. **Identifikasi kriteria**: Misalkan terdapat $n$ kriteria yang dinyatakan sebagai $C_1, C_2, \ldots, C_n$.
2. **Penilaian kriteria**: Pengambil keputusan memilih kriteria terbaik ($C_{best}$) dan terburuk ($C_{worst}$) serta memberikan penilaian relatif antara kriteria lainnya.

Misalkan $x_i$ adalah nilai penting dari kriteria $C_i$, maka rasio antara kriteria terbaik dan terburuk dapat dinyatakan sebagai:

$$
\frac{x_{best}}{x_i} \text{ untuk } i \neq best
$$

3. **Formulasi model**: Model matematis untuk BWM dapat dinyatakan sebagai:

$$
\text{Minimize } Z = \max \left( \frac{x_{best}}{x_i} \right) \quad \forall i \neq best
$$

dengan batasan:

$$
\sum_{i=1}^{n} x_i = 1
$$

### 2.2 Analytic Network Process (ANP)

ANP adalah metode yang lebih kompleks dibandingkan AHP, yang mempertimbangkan ketergantungan antar kriteria. Dalam ANP, hubungan antar kriteria dinyatakan dalam bentuk matriks perbandingan berpasangan. Misalkan $A$ adalah matriks perbandingan berpasangan untuk kriteria $C_1, C_2, \ldots, C_n$, maka bobot relatif dapat dihitung menggunakan:

$$
w = A \cdot w
$$

dengan $w$ adalah vektor bobot yang diinginkan. Solusi untuk sistem ini dapat diperoleh melalui metode eigenvector.

### 2.3 Verifikasi Rasio Konsistensi

Rasio konsistensi ($CR$) digunakan untuk mengukur konsistensi penilaian dalam BWM dan ANP. Rasio ini dihitung sebagai:

$$
CR = \frac{CI}{RI}
$$

di mana $CI$ adalah indeks konsistensi yang didefinisikan sebagai:

$$
CI = \frac{\lambda_{max} - n}{n - 1}
$$

dan $RI$ adalah indeks acak yang bergantung pada jumlah kriteria $n$. Nilai $CR$ yang lebih kecil dari 0.1 menunjukkan konsistensi yang dapat diterima.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Langkah-Langkah Implementasi

1. **Identifikasi Kriteria**: Tentukan kriteria yang relevan untuk pemilihan pemasok.
2. **Penilaian Kriteria**: Gunakan BWM untuk menilai pentingnya setiap kriteria.
3. **Matriks Perbandingan**: Buat matriks perbandingan berpasangan untuk kriteria menggunakan ANP.
4. **Hitung Bobot**: Gunakan metode eigenvector untuk menghitung bobot kriteria.
5. **Verifikasi Konsistensi**: Hitung rasio konsistensi untuk memastikan validitas penilaian.
6. **Analisis Sensitivitas**: Lakukan analisis sensitivitas untuk mengevaluasi dampak perubahan kriteria.

### 3.2 Diagram Alir Proses

Diagram alir berikut menggambarkan langkah-langkah dalam proses pemilihan pemasok menggunakan BWM dan ANP:

```
[Identifikasi Kriteria] --> [Penilaian Kriteria (BWM)] --> [Matriks Perbandingan (ANP)] --> [Hitung Bobot] --> [Verifikasi Konsistensi] --> [Analisis Sensitivitas]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Contoh Kasus

Misalkan sebuah perusahaan ingin memilih pemasok berdasarkan tiga kriteria: Harga ($C_1$), Kualitas ($C_2$), dan Waktu Pengiriman ($C_3$). Penilaian kriteria dilakukan dengan BWM sebagai berikut:

- Kriteria terbaik: Kualitas ($C_2$)
- Kriteria terburuk: Harga ($C_1$)

Penilaian relatif diberikan sebagai berikut:

- $C_2$ terhadap $C_1$: 3
- $C_2$ terhadap $C_3$: 2
- $C_3$ terhadap $C_1$: 4
- $C_3$ terhadap $C_2$: 0.5

### 4.2 Perhitungan

Dari penilaian di atas, kita dapat membangun matriks perbandingan:

$$
A = \begin{bmatrix}
1 & 3 & 0.25 \\
\frac{1}{3} & 1 & 0.5 \\
4 & 2 & 1
\end{bmatrix}
$$

Menghitung bobot menggunakan metode eigenvector:

1. Hitung $Aw$.
2. Normalisasi hasil untuk mendapatkan bobot.

Setelah perhitungan, misalkan bobot yang diperoleh adalah:

- $w_1 = 0.5$ (Kualitas)
- $w_2 = 0.3$ (Waktu Pengiriman)
- $w_3 = 0.2$ (Harga)

### 4.3 Interpretasi Hasil

Hasil menunjukkan bahwa kualitas adalah kriteria yang paling penting dalam pemilihan pemasok, diikuti oleh waktu pengiriman dan harga. Ini memberikan panduan bagi manajer untuk fokus pada pemasok yang menawarkan kualitas terbaik meskipun dengan harga yang lebih tinggi.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Metode BWM dan ANP tidak hanya relevan dalam pemilihan pemasok, tetapi juga dapat diterapkan dalam berbagai disiplin ilmu lain seperti manajemen proyek, pengembangan produk, dan pengelolaan risiko. Dalam konteks otomasi, metode ini dapat digunakan untuk mengevaluasi teknologi baru yang akan diadopsi dalam proses produksi. 

Namun, terdapat beberapa batasan dalam metodologi ini, seperti ketergantungan pada penilaian subjektif dan kompleksitas dalam membangun matriks perbandingan. Oleh karena itu, penelitian masa depan dapat fokus pada pengembangan algoritma yang lebih efisien dan otomatisasi proses penilaian untuk meningkatkan akurasi dan konsistensi hasil.

Dengan mengikuti standar ISO 20400, perusahaan dapat memastikan bahwa proses pemilihan pemasok tidak hanya efisien tetapi juga berkelanjutan, mempertimbangkan aspek sosial dan lingkungan dalam pengambilan keputusan. 

Dengan demikian, BWM dan ANP menawarkan pendekatan yang kuat dan fleksibel untuk pemilihan pemasok strategis, memberikan dasar yang kuat untuk keputusan yang lebih baik dalam manajemen rantai pasok.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
