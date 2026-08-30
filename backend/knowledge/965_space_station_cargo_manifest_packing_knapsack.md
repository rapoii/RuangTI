# 965 — Manifes Kargo Resuplai Stasiun Luar Angkasa Orbital dan Pengemasan Bin Center-of-Gravity (CoG) 3D: Knapsack Multi-Dimensional dengan Batasan Kedaluwarsa Termal

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Orbital Space Station Resupply Cargo Manifesting and 3D Center-of-Gravity (CoG) Bin Packing: Multi-Dimensional Knapsack with Thermal-Degradation Expiry Constraints  
**Standar & Referensi Utama:** NASA SP-2016-6105 (NASA Systems Engineering Handbook); Larson & Wertz (Space Mission Analysis and Design, Springer); IEEE Aerospace Conference

---

## 1. Pendahuluan dan Konteks Industri

Dalam konteks eksplorasi luar angkasa yang semakin berkembang, pengelolaan kargo untuk Stasiun Luar Angkasa (ISS) menjadi sangat krusial. Resuplai kargo tidak hanya melibatkan pengiriman barang, tetapi juga memerlukan perencanaan yang cermat untuk memastikan bahwa semua barang yang dikirim dapat digunakan secara efisien dan aman. Tantangan utama dalam proses ini adalah pengemasan yang tepat dengan mempertimbangkan Center-of-Gravity (CoG) untuk menjaga stabilitas stasiun selama peluncuran dan operasi. 

Kargo yang dikirim ke ISS sering kali memiliki batasan kedaluwarsa termal, yang berarti bahwa beberapa barang harus digunakan dalam jangka waktu tertentu setelah pengiriman. Hal ini menambah kompleksitas dalam proses pengemasan, karena perlu dipastikan bahwa barang-barang yang memiliki kedaluwarsa lebih awal ditempatkan dengan prioritas yang lebih tinggi. 

Dalam konteks ini, penerapan metode optimasi seperti Knapsack Multi-Dimensional menjadi sangat relevan. Metode ini memungkinkan pengelompokan barang berdasarkan berbagai parameter, termasuk berat, volume, dan waktu kedaluwarsa. Dengan demikian, pengelolaan kargo dapat dilakukan secara lebih efisien, mengurangi risiko pemborosan sumber daya, dan meningkatkan efektivitas misi luar angkasa. 

Literatur menunjukkan bahwa penerapan teknik optimasi dalam pengelolaan kargo luar angkasa dapat meningkatkan efisiensi operasional hingga 30% (Larson & Wertz, 2016). Oleh karena itu, penting untuk mengembangkan metodologi yang tidak hanya mempertimbangkan aspek teknis tetapi juga aspek ekonomi dan operasional dalam pengelolaan kargo resuplai.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Definisi Variabel dan Parameter

- $N$: Jumlah item kargo yang akan dikemas.
- $W_i$: Berat item ke-$i$.
- $V_i$: Volume item ke-$i$.
- $T_i$: Waktu kedaluwarsa item ke-$i$.
- $C$: Kapasitas maksimum berat dari wadah.
- $D$: Kapasitas maksimum volume dari wadah.
- $x_i$: Variabel biner yang menunjukkan apakah item ke-$i$ dimasukkan ke dalam wadah ($x_i = 1$) atau tidak ($x_i = 0$).

### 2.2. Formulasi Masalah

Masalah pengemasan kargo dapat dinyatakan sebagai berikut:

\[
\text{Maximize } Z = \sum_{i=1}^{N} p_i x_i
\]

dengan batasan:

\[
\sum_{i=1}^{N} W_i x_i \leq C
\]

\[
\sum_{i=1}^{N} V_i x_i \leq D
\]

\[
T_i \geq T_{threshold} \text{ untuk } x_i = 1
\]

Di mana $p_i$ adalah nilai atau utilitas dari item ke-$i$. 

### 2.3. Pembuktian dan Derivasi

Masalah ini merupakan variasi dari Knapsack Problem yang dikenal dalam teori optimasi. Dengan menggunakan metode pemrograman dinamis, kita dapat menyelesaikan masalah ini dengan membangun tabel yang menyimpan solusi optimal untuk sub-masalah yang lebih kecil. 

Misalkan $K(i, w, v)$ adalah nilai maksimum yang dapat dicapai dengan mempertimbangkan item pertama hingga ke-$i$ dengan batasan berat $w$ dan volume $v$. Maka, kita dapat mendefinisikan fungsi rekursif sebagai berikut:

\[
K(i, w, v) = 
\begin{cases} 
K(i-1, w, v) & \text{jika } W_i > w \text{ atau } V_i > v \\
\max(K(i-1, w, v), p_i + K(i-1, w - W_i, v - V_i)) & \text{jika } W_i \leq w \text{ dan } V_i \leq v
\end{cases}
\]

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Identifikasi Kargo**: Mengumpulkan data tentang semua item yang akan dikirim, termasuk berat, volume, dan waktu kedaluwarsa.
2. **Analisis Kriteria**: Menentukan kriteria pemilihan kargo berdasarkan prioritas misi dan batasan teknis.
3. **Model Optimasi**: Mengembangkan model matematis berdasarkan formulasi di atas.
4. **Penerapan Algoritma**: Menggunakan algoritma pemrograman dinamis untuk menemukan solusi optimal.
5. **Verifikasi dan Validasi**: Memastikan bahwa solusi yang ditemukan memenuhi semua batasan yang ada.
6. **Implementasi**: Melaksanakan rencana pengemasan dan pengiriman kargo.

### 3.2. Diagram Alir Proses

```
[Identifikasi Kargo] → [Analisis Kriteria] → [Model Optimasi] → [Penerapan Algoritma] → [Verifikasi dan Validasi] → [Implementasi]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan kita memiliki 5 item kargo dengan parameter sebagai berikut:

| Item | Berat ($W_i$) | Volume ($V_i$) | Nilai ($p_i$) | Waktu Kedaluwarsa ($T_i$) |
|------|---------------|----------------|----------------|----------------------------|
| 1    | 10 kg        | 5 m³           | 60             | 10 hari                    |
| 2    | 20 kg        | 10 m³          | 100            | 5 hari                     |
| 3    | 15 kg        | 8 m³           | 80             | 15 hari                    |
| 4    | 25 kg        | 12 m³          | 120            | 3 hari                     |
| 5    | 30 kg        | 15 m³          | 150            | 20 hari                    |

Dengan kapasitas maksimum berat $C = 50$ kg dan volume $D = 25$ m³, kita perlu menentukan kombinasi item yang optimal.

### 4.2. Langkah Kalkulasi

1. **Identifikasi Item yang Layak**: 
   - Item 2 dan 4 tidak dapat dipilih karena kedaluwarsa lebih awal dari item lainnya.
   
2. **Modelkan Masalah**: 
   - Hanya item 1, 3, dan 5 yang akan dipertimbangkan.

3. **Hitung Nilai Maksimum**: 
   - Menggunakan algoritma pemrograman dinamis, kita akan menghitung nilai maksimum yang dapat dicapai.

4. **Solusi Optimal**: 
   - Setelah melakukan perhitungan, kita menemukan bahwa kombinasi item 1 dan 3 memberikan nilai maksimum dengan total berat 25 kg dan total volume 13 m³.

### 4.3. Interpretasi Hasil

Hasil ini menunjukkan bahwa dengan memilih item 1 dan 3, kita dapat memaksimalkan nilai kargo yang dikirim sambil tetap memenuhi batasan berat dan volume. Ini juga menunjukkan pentingnya mempertimbangkan waktu kedaluwarsa saat merencanakan pengiriman kargo.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

### 5.1. Hubungan dengan Disiplin Lain

Metodologi ini tidak hanya berlaku untuk pengelolaan kargo luar angkasa, tetapi juga dapat diterapkan dalam manajemen rantai pasok di industri lain, seperti logistik dan distribusi barang. Penerapan teknik optimasi dalam konteks ini dapat meningkatkan efisiensi dan mengurangi biaya operasional.

### 5.2. Batasan Metodologi

Meskipun metode ini efektif, terdapat batasan dalam hal kompleksitas komputasi, terutama ketika jumlah item meningkat. Oleh karena itu, penelitian lebih lanjut diperlukan untuk mengembangkan algoritma yang lebih efisien.

### 5.3. Arah Riset Masa Depan

Ke depan, penelitian dapat difokuskan pada pengembangan algoritma berbasis kecerdasan buatan untuk meningkatkan proses pengambilan keputusan dalam pengemasan kargo. Selain itu, integrasi dengan teknologi IoT untuk pemantauan kondisi kargo selama perjalanan juga dapat menjadi area penelitian yang menarik.

Dengan demikian, pengelolaan kargo untuk Stasiun Luar Angkasa tidak hanya merupakan tantangan teknis, tetapi juga peluang untuk inovasi dalam teknik industri dan rekayasa sistem.