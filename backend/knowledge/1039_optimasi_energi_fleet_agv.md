# 1039 — Optimasi Energi dalam Koordinasi Fleet AGV Menggunakan Algoritma Genetika

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Optimasi Energi dalam Koordinasi Fleet AGV Menggunakan Algoritma Genetika  
**Standar & Referensi Utama:** H. Brown, 'Energy Optimization in AGV Fleet Coordination', International Journal of Advanced Manufacturing Technology, 2026; ASME Y14.5-2018

---

## 1. Pendahuluan dan Konteks Industri

Dalam era industri 4.0, otomatisasi dan efisiensi energi menjadi dua pilar utama dalam meningkatkan produktivitas dan daya saing perusahaan. Sistem Automated Guided Vehicle (AGV) telah menjadi komponen krusial dalam rantai pasok modern, terutama dalam industri manufaktur dan logistik. AGV berfungsi untuk mengangkut material dan produk secara otomatis, mengurangi ketergantungan pada tenaga kerja manusia, serta meningkatkan kecepatan dan akurasi pengiriman barang. Namun, penggunaan AGV yang tidak terkoordinasi dengan baik dapat menyebabkan pemborosan energi yang signifikan, yang berdampak pada biaya operasional dan jejak karbon perusahaan.

Tantangan utama dalam pengelolaan fleet AGV adalah bagaimana mengoptimalkan rute dan jadwal operasional untuk meminimalkan konsumsi energi. Penelitian oleh H. Brown (2026) menunjukkan bahwa optimasi energi dalam koordinasi fleet AGV tidak hanya dapat mengurangi biaya operasional tetapi juga meningkatkan keberlanjutan lingkungan. Dalam konteks ini, algoritma genetika (GA) menawarkan pendekatan yang inovatif untuk menyelesaikan masalah optimasi yang kompleks dengan memanfaatkan prinsip-prinsip seleksi alam.

Dalam modul ini, kita akan membahas secara mendalam mengenai metodologi optimasi energi dalam koordinasi fleet AGV menggunakan algoritma genetika, serta implikasi dan aplikasi praktisnya dalam industri.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Definisi Variabel

- $N$: Jumlah AGV dalam fleet
- $M$: Jumlah titik pengambilan dan pengantaran
- $D_{ij}$: Jarak antara titik $i$ dan titik $j$
- $E_i$: Energi yang dibutuhkan oleh AGV untuk melakukan perjalanan dari titik $i$ ke titik $j$
- $T$: Waktu total yang dibutuhkan untuk menyelesaikan rute

### 2.2. Rumus Energi

Energi yang dibutuhkan untuk perjalanan AGV dapat dinyatakan sebagai:

$$
E_{ij} = k \cdot D_{ij}^2
$$

di mana $k$ adalah koefisien yang menggambarkan efisiensi energi AGV.

### 2.3. Fungsi Tujuan

Fungsi tujuan untuk meminimalkan total energi yang digunakan oleh fleet AGV dapat dinyatakan sebagai:

$$
\text{Minimize } E_{total} = \sum_{i=1}^{N} \sum_{j=1}^{M} E_{ij} \cdot x_{ij}
$$

di mana $x_{ij}$ adalah variabel biner yang menunjukkan apakah AGV $i$ melakukan perjalanan ke titik $j$ (1 jika ya, 0 jika tidak).

### 2.4. Pembuktian Matematis

Untuk membuktikan bahwa fungsi tujuan di atas adalah valid, kita perlu menunjukkan bahwa total energi yang digunakan oleh fleet AGV adalah fungsi dari jarak dan koefisien efisiensi energi. Dengan mengganti $E_{ij}$ ke dalam fungsi tujuan, kita mendapatkan:

$$
E_{total} = k \cdot \sum_{i=1}^{N} \sum_{j=1}^{M} D_{ij}^2 \cdot x_{ij}
$$

Fungsi ini menunjukkan bahwa total energi bergantung pada jarak yang ditempuh oleh setiap AGV, yang harus diminimalkan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-Langkah Implementasi

1. **Pengumpulan Data**: Kumpulkan data mengenai jarak antar titik, efisiensi energi AGV, dan waktu operasional.
2. **Modeling**: Buat model matematis berdasarkan rumus yang telah ditentukan.
3. **Inisialisasi Populasi**: Buat populasi awal solusi (rute AGV) secara acak.
4. **Evaluasi Fitness**: Hitung nilai fitness untuk setiap individu dalam populasi berdasarkan fungsi tujuan.
5. **Seleksi**: Pilih individu dengan nilai fitness terbaik untuk reproduksi.
6. **Crossover dan Mutasi**: Lakukan operasi crossover dan mutasi untuk menghasilkan generasi baru.
7. **Iterasi**: Ulangi langkah 4-6 hingga mencapai kriteria konvergensi.

### 3.2. Diagram Alir Proses

```plaintext
Mulai
  |
Pengumpulan Data
  |
Modeling
  |
Inisialisasi Populasi
  |
Evaluasi Fitness
  |
Seleksi
  |
Crossover & Mutasi
  |
Apakah konvergen?
  |         |
Ya        Tidak
  |         |
Selesai    Ulangi
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan kita memiliki 3 AGV dan 4 titik pengambilan/pengantaran dengan jarak antar titik sebagai berikut (dalam meter):

| Titik | 1   | 2   | 3   | 4   |
|-------|-----|-----|-----|-----|
| 1     | 0   | 10  | 15  | 20  |
| 2     | 10  | 0   | 25  | 30  |
| 3     | 15  | 25  | 0   | 35  |
| 4     | 20  | 30  | 35  | 0   |

### 4.2. Perhitungan Energi

Dengan koefisien efisiensi energi $k = 0.1$, kita akan menghitung energi yang dibutuhkan untuk perjalanan dari titik 1 ke titik 2:

$$
E_{12} = 0.1 \cdot D_{12}^2 = 0.1 \cdot 10^2 = 10 \text{ J}
$$

### 4.3. Total Energi

Jika AGV 1 melakukan perjalanan dari titik 1 ke titik 2, kemudian ke titik 3, dan kembali ke titik 1, total energi yang dibutuhkan adalah:

$$
E_{total} = E_{12} + E_{23} + E_{31} = 10 + 0.1 \cdot 25^2 + 0.1 \cdot 15^2
$$

$$
E_{total} = 10 + 62.5 + 22.5 = 95 \text{ J}
$$

### 4.4. Interpretasi Hasil

Dari perhitungan di atas, kita dapat melihat bahwa optimasi rute AGV dapat mengurangi total energi yang digunakan. Dengan menggunakan algoritma genetika, kita dapat menemukan rute yang lebih efisien yang akan mengurangi konsumsi energi lebih jauh.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Optimasi energi dalam koordinasi fleet AGV memiliki implikasi yang luas tidak hanya dalam industri manufaktur tetapi juga dalam sektor logistik, distribusi, dan bahkan dalam aplikasi transportasi umum. Dengan meningkatnya fokus pada keberlanjutan dan pengurangan emisi karbon, metodologi ini dapat diintegrasikan dengan praktik ramah lingkungan lainnya, seperti penggunaan sumber energi terbarukan.

Namun, ada beberapa batasan dalam metodologi ini, termasuk kompleksitas perhitungan dan kebutuhan untuk data yang akurat. Penelitian masa depan dapat berfokus pada pengembangan algoritma yang lebih efisien dan adaptif, serta integrasi dengan teknologi IoT untuk pemantauan dan pengendalian real-time.

Dengan demikian, optimasi energi dalam koordinasi fleet AGV menggunakan algoritma genetika bukan hanya solusi untuk masalah saat ini, tetapi juga langkah menuju industri yang lebih berkelanjutan dan efisien di masa depan.