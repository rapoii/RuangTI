# 2127 — Redesain Produk Manufaktur dengan Pendekatan *Design for Manufacture and Assembly* (DFMA): Optimasi Efisiensi pada Alat Kesehatan dan Infrastruktur Modular Prefabrikasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Dalam lanskap manufaktur kontemporer, kompetisi global menuntut perusahaan tidak hanya menghasilkan produk yang memenuhi spesifikasi fungsional, tetapi juga memiliki karakteristik manufaktur yang efisien, biaya produksi yang rendah, dan waktu perakitan yang minimal. Permasalahan klasik yang berulang dijumpai pada industri alat kesehatan, khususnya pada peralatan terapi alternatif seperti *coffee enema basket*, adalah desain yang berkembang secara inkremental tanpa mempertimbangkan prinsip *Design for Manufacture and Assembly* (DFMA) sejak fase konseptual. Amirullah dan Jakaria (2024) dalam tulisannya di jurnal peer-review dengan DOI [10.21070/ups.3309](https://doi.org/10.21070/ups.3309) menyoroti bahwa produk-produk functional therapy devices umumnya memiliki geometri komponen yang berlebihan, jumlah parts yang tidak optimal, serta prosedur perakitan yang membutuhkan banyak tahapan manual. Kondisi ini meningkatkan biaya produksi, menurunkan efisiensi lini, dan pada akhirnya menghambat skalabilitas produksi massal.

Di sisi lain, Islam (2024) dengan DOI [10.63125/av45jf21](https://doi.org/10.63125/av45jf21) memperluas perspektif DFMA ke dalam domain infrastruktur modular melalui integrasi dengan Building Information Modelling (BIM) untuk konstruksi jembatan prefabrikasi. Studi tersebut mengkritik praktik konvensional di mana alternatif desain jembatan hanya dievaluasi berdasarkan biaya material dan kapasitas struktural, tanpa memasukkan variabel manufaktur, transportasi, pengangkatan, dan ereksi pada tahap awal desain. Akibatnya, masalah *buildability* baru teridentifikasi ketika desain telah terkunci, cetakan telah dipotong, dan koreksi hanya dapat dilakukan dengan biaya rework yang sangat tinggi.

Urgensi industri dari penerapan DFMA bersifat multi-dimensional. Pertama, dari perspektif ekonomi, pengurangan jumlah komponen menghasilkan penurunan langsung pada biaya material, biaya tooling, dan biaya inventory carrying cost. Kedua, dari perspektif operasional, pengurangan jumlah langkah perakitan secara langsung menurunkan waktu siklus produksi dan memperbaiki throughput lini. Ketiga, dari perspektif kualitas, semakin sederhana sebuah desain semakin sedikit peluang terjadi defect karena setiap interface antar-komponen merupakan潜在 failure point. Keempat, dari perspektif keberlanjutan, desain yang efisien menghasilkan waste material yang lebih sedikit dan konsumsi energi produksi yang lebih rendah, mendukung agenda *green manufacturing* dan *circular economy*.

Kedua literatur di atas saling melengkapi karena keduanya menunjukkan bahwa bottleneck desain tidak terletak pada kemampuan teknis engineer untuk menghasilkan produk yang berfungsi, melainkan pada kurangnya integrasi pengetahuan manufaktur dan perakitan ke dalam proses desain awal. Amirullah dan Jakaria (2024) membuktikan hal ini pada skala produk alat kesehatan individual, sementara Islam (2024) membuktikan pada skala mega-struktur infrastruktur. Perpaduan keduanya memberikan gambaran holistik bahwa DFMA merupakan metodologi lintas-domain yang applicable untuk produk dengan kompleksitas sangat bervariasi, dari komponen medis kecil hingga struktur jembatan dengan bentang ratusan meter.

---

## 2. Landasan Teori & Formulasi Matematis

Metodologi DFMA sebagaimana diterapkan oleh Amirullah dan Jakaria (2024) dibangun di atas dua pilar utama: *Design for Manufacture* (DFM) dan *Design for Assembly* (DFA). Pendekatan DFA yang digunakan mengikuti kerangka Boothroyd-Dewhurst yang menghitung efisiensi desain berdasarkan rasio antara jumlah minimum teoritis komponen terhadap jumlah aktual komponen, serta waktu perakitan yang dibutuhkan untuk setiap komponen.

### 2.1 Indeks Efisiensi Desain untuk Perakitan (DFA)

Indeks DFA didefinisikan melalui persamaan berikut:

$$E_a = \frac{N_{min}}{N_a} \times 100\%$$

di mana $E_a$ adalah efisiensi assembly, $N_{min}$ adalah jumlah minimum teoritis komponen yang diperlukan untuk memenuhi fungsi produk (teridentifikasi melalui analisis fungsi), dan $N_a$ adalah jumlah aktual komponen dalam desain.

Kriteria minimum komponen menurut Boothroyd mengikuti tiga pertanyaan filter:
1. Apakah komponen bergerak relatif terhadap komponen lain selama operasi?
2. Apakah komponen harus terbuat dari material berbeda?
3. Apakah komponen harus dipisahkan untuk memungkinkan proses perakitan atau pemeliharaan?

Jika semua jawaban "tidak", maka komponen tersebut merupakan kandidat eliminasi.

### 2.2 Waktu Perakitan Total

Waktu perakitan total dihitung menggunakan persamaan:

$$T_a = \sum_{i=1}^{N_a} t_{a,i}$$

di mana $T_a$ adalah total assembly time (detik), $N_a$ adalah jumlah komponen aktual, dan $t_{a,i}$ adalah waktu perakitan untuk komponen ke-$i$, yang terdiri atas waktu handling $t_h$ dan waktu insertion/pengikatan $t_i$:

$$t_{a,i} = t_{h,i} + t_{i,i}$$

### 2.3 DFA Index dan Efisiensi Biaya

DFA Index didefinisikan sebagai:

$$I_{DFA} = \frac{T_a}{N_a}$$

Untuk biaya produksi, model DFMA menggunakan:

$$C_{total} = C_{mat} + C_{proc} + C_{tool} + C_{asm}$$

di mana $C_{mat}$ adalah biaya material, $C_{proc}$ adalah biaya proses manufaktur, $C_{tool}$ adalah biaya tooling, dan $C_{asm}$ adalah biaya perakitan:

$$C_{asm} = T_a \times L \times (1 + O_h)$$

dengan $L$ adalah labor rate (Rp/detik) dan $O_h$ adalah overhead factor.

### 2.4 Multi-Criteria Decision Framework (Pendukung)

Untuk konteks infrastruktur modular, Islam (2024) menggunakan kerangka AHP-Entropy untuk pembobotan kriteria DfMA dalam lingkungan BIM:

$$W_j = \frac{1 + \frac{1}{\ln m}\sum_{i=1}^{m} p_{ij} \ln p_{ij}}{\sum_{k=1}^{n}\left(1 + \frac{1}{\ln m}\sum_{i=1}^{m} p_{ik} \ln p_{ik}\right)}$$

Skor total untuk setiap alternatif desain dihitung sebagai:

$$S_k = \sum_{j=1}^{n} W_j \cdot r_{kj}$$

di mana $r_{kj}$ adalah rating ternormalisasi dari alternatif $k$ pada kriteria $j$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi DFMA mengikuti SOP terstruktur sebagai berikut:

**Tahap 1 — Analisis Fungsi Produk.** Engineer memetakan setiap fungsi produk ke komponen yang melaksanakannya. Pada coffee enema basket (Amirullah & Jakaria, 2024), fungsi utama mencakup: (a) filtrasi campuran kopi-air, (b) containment material padat, (c) interface dengan selang enema, (d) resistensi termal terhadap air hangat, dan (e) drainase.

**Tahap 2 — Generasi Desain Konseptual.** Menggunakan morphological chart, engineer menghasilkan alternatif desain. Pada penelitian Amirullah dan Jakaria, desain awal menggunakan tiga komponen terpisah: keranjang wire mesh, ring penahan, dan tutup dengan selang terintegrasi.

**Tahap 3 — Aplikasi Kriteria Boothroyd-Dewhurst.** Setiap komponen dievaluasi menggunakan tiga pertanyaan filter untuk menentukan kelayakan eliminasi atau integrasi.

**Tahap 4 — Analisis DFM.** Evaluasi proses manufaktur: stamping, injection molding, machining, atau assembly-only. Material selection disesuaikan dengan proses manufaktur yang dipilih.

**Tahap 5 — Perhitungan Ulang.** Setelah modifikasi desain, hitung ulang $E_a$, $T_a$, dan $C_{total}$.

**Tahap 6 — Verifikasi dan Validasi.** Prototyping dan uji fungsi.

**Tahap 7 — Standarisasi SOP Lini.** Dokumentasikan work instruction, takt time, dan quality checkpoint.

Diagram alir proses DFMA:

```
[Fungsi Produk] → [Konsep Desain Awal] → [Analisis DFA - Boothroyd]
        ↓                                        ↓
[DFM Evaluation] ← [Filter 3-Q] → [Komponen Kandidat Eliminasi]
        ↓                                
[Desain Modifikasi] → [Hitung Ulang Ea, Ta, Ctot] → [Validasi]
        ↓
[SOP Produksi Standar]
```

Untuk konteks BIM-DfMA (Islam, 2024), SOP diperluas dengan integrasi LOD (Level of Development) 300 ke atas untuk menyertakan informasi manufacturability dalam model 3D.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Berdasarkan kerangka metodologis Amirullah dan Jakaria (2024), dilakukan simulasi numerik untuk redesain coffee enema basket.

### 4.1 Data Input Desain Awal (Before)

| Komponen | Fungsi | Material | Jumlah | $t_h$ (detik) | $t_i$ (detik) |
|----------|--------|----------|--------|---------------|---------------|
| Wire mesh basket | Filtrasi | Stainless 304 | 1 | 3,0 | 8,0 |
| Ring penahan | Containment | Stainless 304 | 1 | 2,0 | 5,0 |
| Tutup dengan selang | Interface | Plastik PP | 1 | 2,5 | 6,0 |
| Klem pengunci | Pengikat | Stainless 304 | 4 | 1,5 | 3,0 |
| Paking karet | Seal | Silicone | 1 | 2,0 | 4,0 |
| Baut M4 | Pengikat | Stainless | 4 | 1,0 | 2,5 |

Total komponen aktual $N_a = 12$. Estimasi biaya material Rp 45.000/unit, biaya proses Rp 18.000/unit, biaya tooling Rp 8.000/unit, biaya perakitan dihitung dari $T_a \times L \times (1 + 0,35)$ dengan $L = 8,33$ Rp/detik (Rp 30.000/jam).

**Perhitungan Desain Awal:**

$$T_a^{before} = (3,0+8,0) + (2,0+5,0) + (2,5+6,0) + 4(1,5+3,0)