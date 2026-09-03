# 967 — Penjadwalan Alokasi Dermaga Berkelanjutan dan Penjadwalan Loader Kapal di Terminal Ekspor Massal: Pembatasan Jendela Pasang, Koordinasi Reclaimer Stok, dan Minimasi Penalti Demurrage

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Bulk Export Terminal Continuous Berth Allocation and Ship Loader Scheduling: Tidal Window Restrictions, Stockpile Reclaimer Coordination, and Demurrage Penalty Minimization  
**Standar & Referensi Utama:** Bierwirth & Meisel (2022, Eur. J. Oper. Res.); Ligteringen (Ports and Terminals, VSSD); UNCTAD Port Management Handbook

---

## 1. Pendahuluan dan Konteks Industri

Terminal ekspor massal memainkan peran penting dalam rantai pasok global, terutama dalam industri pertambangan dan agrikultur. Dengan meningkatnya permintaan untuk efisiensi operasional, alokasi dermaga yang tepat dan penjadwalan loader kapal menjadi sangat krusial. Tidal window restrictions, yaitu batasan waktu yang ditentukan oleh kondisi pasang surut, menambah kompleksitas dalam penjadwalan ini. Selain itu, koordinasi antara reclaimer stok dan loader kapal harus dioptimalkan untuk meminimalkan waktu tunggu dan penalti demurrage, yang dapat berdampak signifikan pada biaya operasional.

Tantangan yang dihadapi dalam industri ini meliputi fluktuasi permintaan, variabilitas dalam waktu kedatangan kapal, dan keterbatasan infrastruktur. Dalam konteks ini, penerapan metodologi yang sistematis dan berbasis data untuk alokasi dermaga dan penjadwalan loader kapal menjadi sangat penting. Penelitian oleh Bierwirth & Meisel (2022) menunjukkan bahwa pendekatan berbasis algoritma dapat meningkatkan efisiensi operasional dan mengurangi biaya demurrage. Oleh karena itu, pemahaman mendalam tentang teori dan praktik dalam alokasi dermaga dan penjadwalan loader kapal sangat diperlukan untuk mencapai keunggulan kompetitif di pasar global.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Notasi dan Definisi Variabel

- $N$: Jumlah kapal yang dijadwalkan
- $M$: Jumlah dermaga yang tersedia
- $T$: Jendela waktu yang tersedia untuk penjadwalan
- $D_i$: Durasi waktu yang dibutuhkan kapal $i$ untuk berlabuh
- $S_j$: Durasi waktu yang dibutuhkan dermaga $j$ untuk memuat atau membongkar
- $C_{ij}$: Biaya demurrage untuk kapal $i$ di dermaga $j$
- $R$: Koordinasi reclaimer stok

### 2.2. Model Matematis

Model matematis untuk alokasi dermaga dan penjadwalan loader kapal dapat dinyatakan sebagai berikut:

Minimalkan:

$$
Z = \sum_{i=1}^{N} \sum_{j=1}^{M} C_{ij} x_{ij}
$$

Dengan kendala:

1. Alokasi dermaga:
$$
\sum_{j=1}^{M} x_{ij} \leq 1, \quad \forall i \in N
$$

2. Jendela waktu:
$$
D_i + S_j \leq T, \quad \forall i \in N, j \in M
$$

3. Koordinasi reclaimer:
$$
R_{ij} \leq R_{\text{max}}, \quad \forall i \in N, j \in M
$$

Di mana $x_{ij}$ adalah variabel biner yang menunjukkan apakah kapal $i$ dialokasikan ke dermaga $j$ (1 jika ya, 0 jika tidak).

### 2.3. Pembuktian dan Derivasi

Model di atas dapat diselesaikan menggunakan metode pemrograman linier atau algoritma heuristik. Pembuktian bahwa solusi optimal dapat dicapai dengan menggunakan pendekatan ini dapat ditemukan dalam literatur yang relevan, termasuk penelitian oleh Bierwirth & Meisel (2022).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Pengumpulan Data**: Mengumpulkan data historis tentang waktu kedatangan kapal, durasi pemuatan, dan kondisi pasang surut.
2. **Analisis Data**: Menggunakan analisis statistik untuk memahami pola kedatangan dan waktu pemuatan.
3. **Modeling**: Membangun model matematis berdasarkan data yang dikumpulkan.
4. **Optimasi**: Menggunakan algoritma optimasi untuk menentukan alokasi dermaga dan jadwal loader kapal.
5. **Implementasi**: Menerapkan solusi yang dihasilkan dalam sistem manajemen terminal.
6. **Monitoring dan Evaluasi**: Memantau kinerja sistem dan melakukan evaluasi berkala untuk perbaikan berkelanjutan.

### 3.2. Diagram Alir Proses

```plaintext
+------------------+
| Pengumpulan Data  |
+------------------+
          |
          v
+------------------+
| Analisis Data    |
+------------------+
          |
          v
+------------------+
| Modeling          |
+------------------+
          |
          v
+------------------+
| Optimasi         |
+------------------+
          |
          v
+------------------+
| Implementasi     |
+------------------+
          |
          v
+------------------+
| Monitoring       |
+------------------+
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan terdapat 3 kapal dan 2 dermaga dengan parameter sebagai berikut:

- Kapal 1: $D_1 = 4$ jam, $C_{11} = 1000$, $C_{12} = 1200$
- Kapal 2: $D_2 = 3$ jam, $C_{21} = 800$, $C_{22} = 900$
- Kapal 3: $D_3 = 5$ jam, $C_{31} = 1500$, $C_{32} = 1300$
- Jendela waktu $T = 10$ jam

### 4.2. Langkah Kalkulasi

1. **Modelkan Fungsi Tujuan**:
   $$ Z = 1000x_{11} + 1200x_{12} + 800x_{21} + 900x_{22} + 1500x_{31} + 1300x_{32} $$

2. **Kendala Alokasi Dermaga**:
   - Untuk Kapal 1: $x_{11} + x_{12} \leq 1$
   - Untuk Kapal 2: $x_{21} + x_{22} \leq 1$
   - Untuk Kapal 3: $x_{31} + x_{32} \leq 1$

3. **Kendala Jendela Waktu**:
   - Kapal 1 di Dermaga 1: $4 + S_1 \leq 10 \Rightarrow S_1 \leq 6$
   - Kapal 1 di Dermaga 2: $4 + S_2 \leq 10 \Rightarrow S_2 \leq 6$
   - Kapal 2 di Dermaga 1: $3 + S_1 \leq 10 \Rightarrow S_1 \leq 7$
   - Kapal 2 di Dermaga 2: $3 + S_2 \leq 10 \Rightarrow S_2 \leq 7$
   - Kapal 3 di Dermaga 1: $5 + S_1 \leq 10 \Rightarrow S_1 \leq 5$
   - Kapal 3 di Dermaga 2: $5 + S_2 \leq 10 \Rightarrow S_2 \leq 5$

4. **Solusi Optimal**: Menggunakan metode pemrograman linier, dapat ditemukan kombinasi optimal dari $x_{ij}$ yang meminimalkan $Z$.

### 4.3. Interpretasi Hasil

Hasil dari perhitungan ini akan memberikan informasi tentang dermaga mana yang harus digunakan untuk setiap kapal dan berapa lama waktu yang dibutuhkan untuk memuat. Dengan meminimalkan penalti demurrage, perusahaan dapat menghemat biaya dan meningkatkan efisiensi operasional.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

### 5.1. Hubungan dengan Disiplin Lain

Alokasi dermaga dan penjadwalan loader kapal tidak hanya relevan dalam konteks terminal ekspor, tetapi juga memiliki aplikasi luas dalam manajemen rantai pasok, otomasi, dan manajemen biaya. Misalnya, penerapan teknologi IoT dan analitik data besar dapat meningkatkan akurasi dalam prediksi waktu kedatangan kapal dan optimasi proses.

### 5.2. Batasan Metodologi

Meskipun model matematis memberikan kerangka kerja yang kuat, terdapat batasan dalam hal asumsi yang digunakan, seperti kestabilan permintaan dan waktu kedatangan kapal. Variabilitas yang tinggi dalam kondisi operasional dapat mempengaruhi akurasi model.

### 5.3. Arah Riset Masa Depan

Penelitian lebih lanjut diperlukan untuk mengintegrasikan teknologi baru, seperti kecerdasan buatan dan machine learning, dalam pengembangan model yang lebih adaptif dan responsif terhadap perubahan kondisi operasional. Selain itu, eksplorasi lebih lanjut tentang dampak lingkungan dan keberlanjutan dalam operasi terminal juga menjadi fokus penting di masa depan.

--- 

Dokumen ini memberikan panduan komprehensif mengenai alokasi dermaga dan penjadwalan loader kapal di terminal ekspor massal, dengan penekanan pada aspek matematis dan operasional yang relevan dalam konteks industri saat ini.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
