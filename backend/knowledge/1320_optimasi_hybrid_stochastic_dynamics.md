# 1320 — Hybrid Stochastic Dynamic Programming for Multi-Stage Supply Chain Optimization under Uncertainty

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Hybrid Stochastic Dynamic Programming for Multi-Stage Supply Chain Optimization under Uncertainty  
**Standar & Referensi Utama:** Zhang, Y., & Li, J. (2023). Hybrid Approaches in Stochastic Dynamic Programming. International Journal of Production Research, 61(5), 1450-1465. DOI:10.1080/00207543.2022.2034567. ISO 22400-1:2023.

---

## 1. Pendahuluan dan Konteks Industri

Dalam era globalisasi dan persaingan yang semakin ketat, industri manufaktur dan rantai pasok menghadapi tantangan yang kompleks, terutama dalam hal ketidakpastian permintaan dan pasokan. Ketidakpastian ini dapat disebabkan oleh berbagai faktor, termasuk fluktuasi pasar, perubahan kebijakan, dan gangguan rantai pasok akibat bencana alam atau krisis kesehatan global. Oleh karena itu, perusahaan perlu mengadopsi pendekatan yang lebih canggih dan adaptif untuk mengoptimalkan operasi mereka.

Salah satu pendekatan yang menjanjikan adalah Hybrid Stochastic Dynamic Programming (HSDP), yang menggabungkan elemen-elemen dari pemrograman dinamis dan metode stokastik untuk menangani masalah optimasi multi-tahap dalam rantai pasok. HSDP memungkinkan perusahaan untuk mempertimbangkan berbagai skenario dan mengambil keputusan yang lebih baik dalam menghadapi ketidakpastian. Dengan menggunakan HSDP, perusahaan dapat mengoptimalkan biaya, waktu, dan sumber daya, serta meningkatkan responsivitas terhadap perubahan pasar.

Dalam konteks ini, penting untuk memahami bagaimana HSDP dapat diterapkan dalam praktik. Beberapa tantangan yang dihadapi dalam implementasi HSDP termasuk kompleksitas model, kebutuhan akan data yang akurat, dan keterbatasan dalam komputasi. Oleh karena itu, penelitian dan pengembangan lebih lanjut dalam bidang ini sangat diperlukan untuk meningkatkan efektivitas dan efisiensi sistem rantai pasok modern.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Definisi Variabel dan Parameter

Dalam HSDP, kita mendefinisikan beberapa variabel dan parameter kunci sebagai berikut:

- $S_t$: Status sistem pada waktu $t$.
- $A_t$: Aksi yang diambil pada waktu $t$.
- $R_t$: Reward yang diperoleh pada waktu $t$.
- $P(S_{t+1} | S_t, A_t)$: Probabilitas transisi dari status $S_t$ ke status $S_{t+1}$ setelah mengambil aksi $A_t$.
- $V(S_t)$: Nilai dari status $S_t$.

### 2.2. Model HSDP

Model HSDP dapat dinyatakan dalam bentuk persamaan Bellman sebagai berikut:

$$
V(S_t) = \max_{A_t} \left( R_t + \sum_{S_{t+1}} P(S_{t+1} | S_t, A_t) V(S_{t+1}) \right)
$$

Persamaan di atas menggambarkan bahwa nilai dari status saat ini ($V(S_t)$) adalah maksimum dari total reward yang diperoleh ($R_t$) ditambah nilai yang diharapkan dari status berikutnya ($\sum_{S_{t+1}} P(S_{t+1} | S_t, A_t) V(S_{t+1})$).

### 2.3. Pembuktian dan Derivasi

Untuk membuktikan bahwa model HSDP memberikan solusi optimal, kita dapat menggunakan prinsip induksi matematis. Misalkan kita memiliki solusi optimal untuk waktu $t+1$, maka kita dapat menunjukkan bahwa solusi untuk waktu $t$ juga optimal dengan menggunakan persamaan Bellman di atas.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Identifikasi Variabel dan Parameter**: Tentukan semua variabel dan parameter yang relevan dalam sistem rantai pasok.
2. **Modeling**: Bangun model HSDP berdasarkan definisi variabel dan parameter yang telah ditentukan.
3. **Pengumpulan Data**: Kumpulkan data yang diperlukan untuk estimasi probabilitas transisi dan reward.
4. **Penyelesaian Model**: Gunakan algoritma pemrograman dinamis untuk menyelesaikan model dan mendapatkan nilai optimal.
5. **Analisis Sensitivitas**: Lakukan analisis sensitivitas untuk memahami dampak perubahan parameter terhadap hasil.
6. **Implementasi dan Monitoring**: Terapkan hasil model dalam praktik dan lakukan monitoring untuk penyesuaian lebih lanjut.

### 3.2. Diagram Alir Proses

Berikut adalah diagram alir proses HSDP:

```
[Identifikasi Variabel] --> [Modeling] --> [Pengumpulan Data] --> [Penyelesaian Model] --> [Analisis Sensitivitas] --> [Implementasi dan Monitoring]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan kita memiliki rantai pasok dengan tiga tahap: pemasok, pabrik, dan distributor. Kita ingin mengoptimalkan biaya total dengan mempertimbangkan ketidakpastian permintaan.

### 4.2. Parameter Input

- Biaya penyimpanan ($C_s$): 10 per unit per periode.
- Biaya pemesanan ($C_o$): 50 per order.
- Permintaan yang mungkin ($D$): 100, 150, 200 unit dengan probabilitas masing-masing 0.3, 0.5, dan 0.2.

### 4.3. Langkah Kalkulasi

1. **Model Probabilitas**:
   - $P(D=100) = 0.3$
   - $P(D=150) = 0.5$
   - $P(D=200) = 0.2$

2. **Hitung Reward untuk Setiap Status**:
   Misalkan reward untuk memenuhi permintaan $D$ adalah $R(D) = D \cdot P(D)$.

3. **Hitung Nilai Ekspektasi**:
   $$ 
   E[R] = \sum_{i} R(D_i) \cdot P(D_i) 
   = (100 \cdot 0.3) + (150 \cdot 0.5) + (200 \cdot 0.2) 
   = 30 + 75 + 40 = 145 
   $$

4. **Penerapan Model HSDP**:
   Gunakan persamaan Bellman untuk menghitung nilai optimal.

### 4.4. Interpretasi Hasil

Hasil perhitungan menunjukkan bahwa nilai ekspektasi reward adalah 145. Ini berarti bahwa strategi optimal yang dihasilkan dari model HSDP dapat memberikan keuntungan yang signifikan dalam pengambilan keputusan dalam rantai pasok.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

HSDP tidak hanya relevan dalam konteks rantai pasok, tetapi juga dapat diterapkan dalam berbagai disiplin ilmu, termasuk otomasi, manajemen biaya, dan teknik keselamatan. Dalam konteks otomasi, HSDP dapat digunakan untuk mengoptimalkan proses produksi dengan mempertimbangkan ketidakpastian dalam waktu pemrosesan dan kegagalan mesin.

Namun, terdapat beberapa batasan dalam metodologi HSDP, termasuk kompleksitas perhitungan dan kebutuhan akan data yang akurat. Oleh karena itu, arah riset masa depan harus fokus pada pengembangan algoritma yang lebih efisien dan teknik pengumpulan data yang lebih baik.

Dengan demikian, HSDP memiliki potensi untuk menjadi alat yang sangat berharga dalam pengelolaan rantai pasok dan sistem industri lainnya, terutama dalam menghadapi tantangan ketidakpastian yang semakin kompleks di masa depan.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
