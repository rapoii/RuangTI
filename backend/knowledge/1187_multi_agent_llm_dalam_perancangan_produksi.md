# 1187 — Memanfaatkan Multi-Agent LLM untuk Desain Produksi Kolaboratif dalam Manufaktur Terdistribusi

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Leveraging Multi-Agent LLMs for Collaborative Production Design in Distributed Manufacturing  
**Standar & Referensi Utama:** Nguyen, T. et al. (2025). Collaborative Design with Multi-Agent Systems. Journal of Manufacturing Processes. DOI: 10.1016/j.jmapro.2025.03.004

---

## 1. Pendahuluan dan Konteks Industri

Dalam era globalisasi dan digitalisasi, industri manufaktur menghadapi tantangan yang semakin kompleks. Manufaktur terdistribusi, yang melibatkan kolaborasi antara berbagai entitas di lokasi geografis yang berbeda, menjadi semakin penting. Hal ini disebabkan oleh kebutuhan untuk meningkatkan efisiensi, mengurangi biaya, dan mempercepat waktu ke pasar. Menurut Nguyen et al. (2025), kolaborasi dalam desain produk dapat meningkatkan inovasi dan responsivitas terhadap permintaan pasar yang berubah-ubah. Namun, tantangan utama dalam konteks ini adalah koordinasi antar agen yang terlibat dalam proses desain dan produksi.

Tantangan operasional yang dihadapi mencakup komunikasi yang tidak efisien, kesulitan dalam berbagi informasi, dan integrasi sistem yang kompleks. Dalam banyak kasus, informasi yang tidak akurat atau terlambat dapat menyebabkan kesalahan dalam desain, yang pada gilirannya dapat mengakibatkan biaya tambahan dan keterlambatan dalam pengiriman produk. Oleh karena itu, penerapan sistem multi-agent yang didukung oleh Large Language Models (LLMs) dapat menjadi solusi yang efektif untuk mengatasi masalah ini. Dengan memanfaatkan kecerdasan buatan, agen-agen ini dapat berkolaborasi secara real-time, berbagi informasi, dan membuat keputusan yang lebih baik dalam desain produk.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Model Multi-Agent

Model multi-agent dapat didefinisikan sebagai sekumpulan agen yang berinteraksi untuk mencapai tujuan bersama. Dalam konteks desain produksi, kita dapat memodelkan interaksi ini dengan menggunakan teori permainan. Misalkan kita memiliki $n$ agen yang berkolaborasi, maka utilitas dari setiap agen $i$ dapat dinyatakan sebagai:

$$
U_i = f_i(x_1, x_2, ..., x_n)
$$

di mana $x_j$ adalah variabel keputusan yang diambil oleh agen $j$. Fungsi utilitas $f_i$ merepresentasikan kepuasan agen $i$ terhadap hasil kolaborasi.

### 2.2. Optimasi Desain

Untuk mencapai desain yang optimal, kita perlu meminimalkan fungsi biaya total $C$ yang dinyatakan sebagai:

$$
C = \sum_{i=1}^{n} C_i(x_1, x_2, ..., x_n)
$$

di mana $C_i$ adalah biaya yang terkait dengan agen $i$. Dengan mempertimbangkan batasan yang ada, kita dapat menyusun masalah optimasi sebagai berikut:

Minimalkan $C$ dengan batasan:

$$
g_j(x_1, x_2, ..., x_n) \leq 0, \quad j = 1, 2, ..., m
$$

### 2.3. Derivasi

Untuk mencari solusi optimal, kita dapat menggunakan metode Lagrange. Fungsi Lagrange $L$ dapat dituliskan sebagai:

$$
L(x_1, x_2, ..., x_n, \lambda_1, \lambda_2, ..., \lambda_m) = C + \sum_{j=1}^{m} \lambda_j g_j
$$

Dengan mengambil turunan parsial dari $L$ terhadap $x_i$ dan $\lambda_j$, kita dapat menemukan kondisi optimal:

$$
\frac{\partial L}{\partial x_i} = 0, \quad \frac{\partial L}{\partial \lambda_j} = g_j(x_1, x_2, ..., x_n) = 0
$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Identifikasi Agen**: Tentukan agen-agen yang terlibat dalam proses desain.
2. **Pengumpulan Data**: Kumpulkan data yang relevan dari setiap agen.
3. **Modeling**: Bangun model multi-agent berdasarkan data yang dikumpulkan.
4. **Optimasi**: Terapkan algoritma optimasi untuk mencapai desain terbaik.
5. **Implementasi**: Laksanakan desain yang telah dioptimalkan dalam proses produksi.
6. **Evaluasi**: Tindak lanjuti dengan evaluasi hasil dan umpan balik dari agen.

### 3.2. Diagram Alir Proses

```
[Identifikasi Agen] --> [Pengumpulan Data] --> [Modeling] --> [Optimasi] --> [Implementasi] --> [Evaluasi]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan kita memiliki tiga agen dengan biaya desain sebagai berikut:

- Agen 1: $C_1(x_1, x_2, x_3) = 2x_1^2 + 3x_2 + 4x_3$
- Agen 2: $C_2(x_1, x_2, x_3) = 5x_1 + 2x_2^2 + 3x_3$
- Agen 3: $C_3(x_1, x_2, x_3) = 3x_1 + 4x_2 + x_3^2$

Total biaya adalah:

$$
C = C_1 + C_2 + C_3 = 2x_1^2 + 3x_2 + 4x_3 + 5x_1 + 2x_2^2 + 3x_3 + 3x_1 + 4x_2 + x_3^2
$$

### 4.2. Perhitungan

Mari kita asumsikan batasan sebagai berikut:

$$
g_1: x_1 + x_2 + x_3 - 10 \leq 0
$$

Untuk mencari solusi, kita dapat menggunakan metode Lagrange dan menghitung turunan untuk menemukan nilai optimal dari $x_1$, $x_2$, dan $x_3$.

### 4.3. Interpretasi Hasil

Setelah melakukan perhitungan, misalkan kita mendapatkan nilai optimal $x_1 = 2$, $x_2 = 3$, dan $x_3 = 5$. Maka total biaya minimum dapat dihitung dan dibandingkan dengan biaya awal untuk menilai efisiensi desain.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Penerapan sistem multi-agent dalam desain produksi tidak hanya terbatas pada sektor manufaktur. Dalam konteks rantai pasok, sistem ini dapat meningkatkan transparansi dan efisiensi. Dalam otomasi, kolaborasi antar agen dapat mengoptimalkan proses produksi dan mengurangi waktu henti. Selain itu, dengan semakin meningkatnya perhatian terhadap K3 dan ESG, penerapan teknologi ini dapat membantu perusahaan dalam memenuhi standar keberlanjutan.

Namun, terdapat batasan dalam metodologi ini, seperti ketergantungan pada kualitas data dan kemampuan agen untuk beradaptasi dengan perubahan. Oleh karena itu, arah riset masa depan perlu difokuskan pada pengembangan algoritma yang lebih adaptif dan robust untuk meningkatkan kolaborasi antar agen dalam lingkungan yang dinamis.

Dengan demikian, penerapan Multi-Agent LLM dalam desain produksi kolaboratif diharapkan dapat memberikan kontribusi signifikan terhadap efisiensi dan inovasi dalam industri manufaktur terdistribusi.