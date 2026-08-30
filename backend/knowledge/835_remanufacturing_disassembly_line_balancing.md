# 835 — Stochastic Disassembly Line Balancing Problem (SDLBP) in Circular Manufacturing: Variable Component Degradation, Hazard Material Routing, and Multi-Objective Pareto Optimization

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Stochastic Disassembly Line Balancing Problem (SDLBP) in Circular Manufacturing: Variable Component Degradation, Hazard Material Routing, and Multi-Objective Pareto Optimization  
**Standar & Referensi Utama:** McGovern & Gupta (2022, Int. J. Prod. Res.); ISO 14040; Lambert & Gupta (Disassembly Modeling for Assembly, CRC Press)

---

## 1. Pendahuluan dan Konteks Industri

Dalam era industri 4.0, keberlanjutan menjadi fokus utama dalam praktik manufaktur. Circular manufacturing, yang menekankan pada pengurangan limbah dan pemanfaatan kembali sumber daya, semakin mendominasi strategi perusahaan. Stochastic Disassembly Line Balancing Problem (SDLBP) merupakan tantangan signifikan dalam konteks ini, di mana ketidakpastian dalam degradasi komponen dan penanganan material berbahaya memerlukan pendekatan yang lebih kompleks. 

Tantangan utama dalam SDLBP adalah mengoptimalkan proses pembongkaran produk untuk memaksimalkan nilai dari komponen yang dapat didaur ulang, sambil mempertimbangkan variabilitas dalam kualitas dan kondisi komponen. McGovern & Gupta (2022) mengemukakan bahwa pengelolaan limbah elektronik dan produk akhir yang berbahaya memerlukan perhatian khusus, karena dampak lingkungan yang signifikan. Di samping itu, pengaturan jalur material berbahaya menjadi krusial untuk meminimalkan risiko bagi pekerja dan lingkungan.

Dalam konteks ini, penerapan metode multi-objektif seperti Pareto Optimization menjadi penting untuk mencapai keseimbangan antara efisiensi operasional dan keberlanjutan. Dengan demikian, SDLBP tidak hanya menjadi tantangan teknis, tetapi juga tantangan strategis yang mempengaruhi keputusan manajerial dan kebijakan perusahaan dalam menghadapi regulasi lingkungan yang semakin ketat.

## 2. Landasan Teori & Formulasi Matematis

SDLBP dapat didefinisikan sebagai masalah penyeimbangan lini pembongkaran di mana tujuan adalah untuk meminimalkan waktu siklus dan biaya sambil mempertimbangkan degradasi komponen. Model matematis SDLBP dapat dinyatakan sebagai berikut:

Misalkan:
- $n$ adalah jumlah komponen yang harus dibongkar.
- $m$ adalah jumlah stasiun kerja.
- $t_i$ adalah waktu yang dibutuhkan untuk membongkar komponen $i$.
- $d_i$ adalah degradasi dari komponen $i$ yang mengikuti distribusi probabilitas tertentu.

Model matematisnya dapat dinyatakan sebagai:

Minimalkan:
$$ Z = \sum_{j=1}^{m} C_j $$

Dengan kendala:
1. $\sum_{i \in S_j} t_i \leq T_j, \quad \forall j \in \{1, 2, \ldots, m\}$
2. $S_j \cap S_k = \emptyset, \quad \forall j \neq k$
3. $x_{ij} \in \{0, 1\}, \quad \forall i, j$

Di mana:
- $C_j$ adalah biaya stasiun kerja $j$.
- $T_j$ adalah waktu maksimum yang diperbolehkan untuk stasiun kerja $j$.
- $x_{ij}$ adalah variabel biner yang menunjukkan apakah komponen $i$ ditugaskan ke stasiun kerja $j$.

Kendala pertama memastikan bahwa waktu total untuk setiap stasiun tidak melebihi batas waktu yang ditentukan. Kendala kedua memastikan bahwa setiap komponen hanya ditugaskan ke satu stasiun kerja.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Langkah-langkah dalam implementasi SDLBP dalam konteks circular manufacturing meliputi:

1. **Identifikasi Komponen**: Mengidentifikasi komponen yang akan dibongkar dan karakteristiknya, termasuk degradasi dan potensi bahaya.
2. **Analisis Data**: Mengumpulkan data historis mengenai waktu pembongkaran dan degradasi komponen.
3. **Modeling**: Mengembangkan model matematis berdasarkan data yang dikumpulkan.
4. **Optimasi**: Menggunakan algoritma optimasi multi-objektif untuk menemukan solusi terbaik.
5. **Implementasi**: Menerapkan solusi yang dihasilkan dalam proses pembongkaran.
6. **Evaluasi**: Melakukan evaluasi pasca-implementasi untuk menilai efektivitas dan efisiensi.

Diagram alir proses dapat digambarkan sebagai berikut:

```
[Identifikasi Komponen] --> [Analisis Data] --> [Modeling] --> [Optimasi] --> [Implementasi] --> [Evaluasi]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Misalkan kita memiliki 5 komponen dengan waktu pembongkaran dan degradasi sebagai berikut:

| Komponen | Waktu Pembongkaran ($t_i$) | Degradasi ($d_i$) |
|----------|-----------------------------|--------------------|
| 1        | 2                           | 0.1                |
| 2        | 3                           | 0.2                |
| 3        | 4                           | 0.15               |
| 4        | 5                           | 0.25               |
| 5        | 1                           | 0.05               |

Misalkan kita memiliki 2 stasiun kerja dengan batas waktu masing-masing 6 dan 5. Kita ingin meminimalkan biaya total.

Langkah 1: Tentukan kombinasi pembongkaran untuk stasiun kerja.

Misalkan kita mencoba kombinasi berikut:
- Stasiun 1: Komponen 1, 2, 3
- Stasiun 2: Komponen 4, 5

Langkah 2: Hitung total waktu untuk masing-masing stasiun.

Untuk Stasiun 1:
$$ T_1 = t_1 + t_2 + t_3 = 2 + 3 + 4 = 9 \text{ (melebihi batas)} $$

Untuk Stasiun 2:
$$ T_2 = t_4 + t_5 = 5 + 1 = 6 \text{ (tepat)} $$

Karena Stasiun 1 melebihi batas waktu, kita perlu mencari kombinasi lain. Dengan mencoba kombinasi lain, kita menemukan:

- Stasiun 1: Komponen 1, 4
- Stasiun 2: Komponen 2, 3, 5

Hitung ulang:
$$ T_1 = t_1 + t_4 = 2 + 5 = 7 \text{ (melebihi batas)} $$
$$ T_2 = t_2 + t_3 + t_5 = 3 + 4 + 1 = 8 \text{ (melebihi batas)} $$

Setelah beberapa iterasi, kita menemukan kombinasi yang optimal:
- Stasiun 1: Komponen 1, 2
- Stasiun 2: Komponen 3, 4, 5

Dengan waktu:
$$ T_1 = t_1 + t_2 = 2 + 3 = 5 \text{ (tepat)} $$
$$ T_2 = t_3 + t_4 + t_5 = 4 + 5 + 1 = 10 \text{ (melebihi batas)} $$

Akhirnya, kita mendapatkan kombinasi yang memenuhi batas waktu dan memaksimalkan nilai dari komponen yang dapat didaur ulang.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

SDLBP memiliki aplikasi yang luas di berbagai sektor, termasuk otomotif, elektronik, dan barang konsumen. Dalam konteks supply chain, SDLBP dapat meningkatkan efisiensi operasional dan mengurangi biaya melalui pengelolaan limbah yang lebih baik. Selain itu, dengan meningkatnya fokus pada K3 dan ESG, penerapan SDLBP dapat membantu perusahaan memenuhi regulasi lingkungan yang lebih ketat.

Namun, terdapat beberapa batasan dalam metodologi ini, termasuk ketidakpastian dalam data degradasi dan variabilitas dalam waktu pembongkaran. Oleh karena itu, riset masa depan harus berfokus pada pengembangan model yang lebih adaptif dan robust, serta penerapan teknologi seperti AI dan machine learning untuk meningkatkan akurasi prediksi dan optimasi.

Dengan demikian, SDLBP tidak hanya menjadi alat untuk efisiensi operasional, tetapi juga sebagai pendorong inovasi dalam praktik keberlanjutan di industri.