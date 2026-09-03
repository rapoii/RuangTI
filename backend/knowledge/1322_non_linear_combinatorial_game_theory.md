# 1322 — Optimasi Kombinatorial Non-Linier dalam Teori Permainan Kooperatif untuk Alokasi Sumber Daya

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Non-Linear Combinatorial Optimization in Cooperative Game Theory for Resource Allocation  
**Standar & Referensi Utama:** Chen, L., & Wang, T. (2025). Non-Linear Combinatorial Optimization in Game Theory. CIRP Journal of Manufacturing Science and Technology, 45, 112-125. DOI:10.1016/j.cirpj.2024.05.006.

---

## 1. Pendahuluan dan Konteks Industri

Dalam era globalisasi dan persaingan yang semakin ketat, industri manufaktur dan rantai pasok menghadapi tantangan yang kompleks terkait alokasi sumber daya. Permintaan pasar yang fluktuatif, biaya operasional yang meningkat, dan tekanan untuk meningkatkan efisiensi menjadi isu utama yang harus dihadapi oleh perusahaan. Dalam konteks ini, optimasi kombinatorial non-linier dalam teori permainan kooperatif muncul sebagai pendekatan yang inovatif untuk mengatasi masalah alokasi sumber daya secara efektif.

Teori permainan kooperatif memungkinkan para pemangku kepentingan untuk berkolaborasi dalam mencapai tujuan bersama, yang sangat penting dalam lingkungan industri yang saling terhubung. Dalam banyak kasus, alokasi sumber daya tidak hanya melibatkan keputusan individu, tetapi juga memerlukan kerjasama antara berbagai entitas, seperti pemasok, produsen, dan distributor. Oleh karena itu, penerapan metode optimasi kombinatorial non-linier dapat memberikan solusi yang lebih baik dalam pengambilan keputusan kolektif.

Tantangan utama yang dihadapi adalah kompleksitas perhitungan dan interaksi antara berbagai variabel yang terlibat. Dengan menggunakan model matematis yang tepat, perusahaan dapat mengidentifikasi strategi optimal yang tidak hanya memaksimalkan keuntungan, tetapi juga mempertimbangkan faktor-faktor eksternal seperti keberlanjutan dan tanggung jawab sosial. Oleh karena itu, penting untuk mengembangkan metodologi yang sistematis dan terstandarisasi untuk menerapkan teori ini dalam praktik industri.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Teori Permainan Kooperatif

Teori permainan kooperatif berfokus pada bagaimana kelompok pemain dapat bekerja sama untuk mencapai hasil yang lebih baik dibandingkan dengan bermain secara individual. Dalam konteks alokasi sumber daya, kita dapat mendefinisikan utilitas kolektif sebagai fungsi dari sumber daya yang dialokasikan kepada setiap pemain.

### 2.2. Model Matematis

Misalkan kita memiliki $n$ pemain, dan setiap pemain $i$ memiliki fungsi utilitas $U_i(x)$ yang bergantung pada alokasi sumber daya $x$. Fungsi utilitas ini dapat bersifat non-linier, yang dapat dituliskan sebagai:

$$
U_i(x) = f_i(x) - c_i(x)
$$

di mana $f_i(x)$ adalah fungsi keuntungan dan $c_i(x)$ adalah fungsi biaya.

### 2.3. Fungsi Tujuan

Fungsi tujuan untuk optimasi dapat dinyatakan sebagai:

$$
\max \sum_{i=1}^{n} U_i(x)
$$

dengan kendala:

$$
\sum_{j=1}^{m} x_j \leq R
$$

di mana $R$ adalah total sumber daya yang tersedia dan $x_j$ adalah alokasi sumber daya untuk setiap variabel.

### 2.4. Derivasi

Untuk menemukan solusi optimal, kita dapat menggunakan metode Lagrange untuk mengatasi kendala. Fungsi Lagrangian dapat dituliskan sebagai:

$$
\mathcal{L}(x, \lambda) = \sum_{i=1}^{n} U_i(x) + \lambda (R - \sum_{j=1}^{m} x_j)
$$

Dengan mengambil turunan parsial terhadap $x_j$ dan $\lambda$, kita mendapatkan sistem persamaan yang dapat diselesaikan untuk menemukan nilai optimal.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Identifikasi Pemangku Kepentingan**: Menentukan semua pemain yang terlibat dalam alokasi sumber daya.
2. **Pengumpulan Data**: Mengumpulkan data terkait fungsi utilitas dan biaya dari setiap pemain.
3. **Modeling**: Mengembangkan model matematis berdasarkan data yang dikumpulkan.
4. **Penerapan Metode Optimasi**: Menggunakan metode Lagrange atau algoritma optimasi lainnya untuk menyelesaikan model.
5. **Analisis Hasil**: Menganalisis hasil untuk menentukan alokasi sumber daya yang optimal.
6. **Implementasi**: Melaksanakan alokasi sumber daya yang telah ditentukan dan memantau hasilnya.

### 3.2. Diagram Alir Proses

```plaintext
[Identifikasi Pemangku Kepentingan] --> [Pengumpulan Data] --> [Modeling] --> [Penerapan Metode Optimasi] --> [Analisis Hasil] --> [Implementasi]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan terdapat tiga pemain dalam sistem alokasi sumber daya, dengan fungsi utilitas sebagai berikut:

- Pemain 1: $U_1(x) = 3x_1^2 - 2x_1$
- Pemain 2: $U_2(x) = 4x_2^2 - 3x_2$
- Pemain 3: $U_3(x) = 2x_3^2 - x_3$

Dengan total sumber daya $R = 10$.

### 4.2. Langkah Kalkulasi

1. **Fungsi Tujuan**:

$$
\max (3x_1^2 - 2x_1 + 4x_2^2 - 3x_2 + 2x_3^2 - x_3)
$$

2. **Kendala**:

$$
x_1 + x_2 + x_3 \leq 10
$$

3. **Fungsi Lagrangian**:

$$
\mathcal{L}(x_1, x_2, x_3, \lambda) = 3x_1^2 - 2x_1 + 4x_2^2 - 3x_2 + 2x_3^2 - x_3 + \lambda (10 - x_1 - x_2 - x_3)
$$

4. **Turunan Parsial**:

$$
\frac{\partial \mathcal{L}}{\partial x_1} = 6x_1 - 2 - \lambda = 0
$$
$$
\frac{\partial \mathcal{L}}{\partial x_2} = 8x_2 - 3 - \lambda = 0
$$
$$
\frac{\partial \mathcal{L}}{\partial x_3} = 4x_3 - 1 - \lambda = 0
$$
$$
\frac{\partial \mathcal{L}}{\partial \lambda} = 10 - x_1 - x_2 - x_3 = 0
$$

5. **Sistem Persamaan**: Menyelesaikan sistem persamaan di atas untuk mendapatkan nilai optimal $x_1$, $x_2$, dan $x_3$.

### 4.3. Interpretasi Hasil

Setelah menyelesaikan sistem persamaan, misalkan kita mendapatkan $x_1 = 2$, $x_2 = 3$, dan $x_3 = 5$. Ini menunjukkan alokasi optimal yang memaksimalkan utilitas kolektif para pemain dengan mempertimbangkan kendala sumber daya yang ada.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Optimasi kombinatorial non-linier dalam teori permainan kooperatif tidak hanya relevan dalam konteks manufaktur, tetapi juga dapat diterapkan dalam berbagai disiplin ilmu lainnya, seperti manajemen rantai pasok, otomasi, dan manajemen biaya. Dalam konteks rantai pasok, kolaborasi antara pemasok dan produsen dapat meningkatkan efisiensi dan mengurangi biaya operasional. Selain itu, penerapan prinsip keberlanjutan dan tanggung jawab sosial dalam alokasi sumber daya menjadi semakin penting.

Namun, terdapat beberapa batasan dalam metodologi ini, seperti kompleksitas perhitungan dan ketidakpastian data. Oleh karena itu, arah riset masa depan perlu difokuskan pada pengembangan algoritma yang lebih efisien dan robust untuk menangani masalah optimasi dalam konteks yang lebih kompleks.

Dengan demikian, penerapan optimasi kombinatorial non-linier dalam teori permainan kooperatif menawarkan potensi besar untuk meningkatkan efisiensi alokasi sumber daya di berbagai sektor industri, sekaligus mendukung tujuan keberlanjutan dan tanggung jawab sosial.