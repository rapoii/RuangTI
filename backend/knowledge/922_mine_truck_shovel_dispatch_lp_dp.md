# 922 — Optimasi Penjadwalan Truk dan Shovel Pertambangan Terbuka Secara Real-Time: Pemrograman Linier Dua Tahap dan Pemrograman Dinamis untuk Minimasi Kelaparan Shovel dan Antrian Crusher

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Real-Time Open-Pit Mine Truck-Shovel Dispatching Optimization: Two-Stage Linear Programming and Dynamic Programming for Shovel Starvation and Crusher Queue Minimization  
**Standar & Referensi Utama:** Alarie & Lessard (CIM Bulletin); White & Olson (DISPATCH System, Mining Engineering); Hartman & Mutmansky (Introductory Mining Engineering, Wiley)

---

## 1. Pendahuluan dan Konteks Industri

Industri pertambangan terbuka menghadapi tantangan signifikan dalam hal efisiensi operasional dan pengelolaan sumber daya. Penjadwalan truk dan shovel yang optimal sangat penting untuk meminimalkan waktu tunggu dan meningkatkan produktivitas. Dalam konteks ini, kelaparan shovel dan antrian di crusher menjadi dua masalah utama yang mempengaruhi kinerja keseluruhan sistem. Kelaparan shovel terjadi ketika shovel tidak memiliki material untuk diangkut, sedangkan antrian crusher terjadi ketika truk menunggu untuk membongkar material, yang dapat menyebabkan penurunan efisiensi dan peningkatan biaya operasional.

Menurut Alarie & Lessard (CIM Bulletin), optimasi penjadwalan dalam pertambangan terbuka dapat meningkatkan produktivitas hingga 20% dengan mengurangi waktu tunggu dan meningkatkan penggunaan peralatan. White & Olson (DISPATCH System, Mining Engineering) menekankan pentingnya sistem penjadwalan yang responsif dan adaptif terhadap perubahan kondisi lapangan. Dengan meningkatnya kompleksitas operasi dan kebutuhan untuk mematuhi standar lingkungan dan keselamatan, pendekatan yang lebih canggih seperti pemrograman linier dua tahap dan pemrograman dinamis menjadi semakin relevan.

Tantangan dalam industri ini meliputi fluktuasi permintaan, variasi dalam kondisi geologi, dan keterbatasan sumber daya manusia. Oleh karena itu, pengembangan model matematis yang dapat menangani variabilitas ini sangat penting untuk mencapai efisiensi yang lebih tinggi. Melalui pendekatan yang sistematis dan berbasis data, perusahaan pertambangan dapat mengoptimalkan operasi mereka, mengurangi biaya, dan meningkatkan keberlanjutan.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Notasi dan Definisi Variabel

Mari kita definisikan beberapa variabel dan parameter yang digunakan dalam model ini:

- $T$: Jumlah truk yang tersedia
- $S$: Jumlah shovel yang tersedia
- $C$: Kapasitas crusher (ton/jam)
- $D$: Permintaan material (ton)
- $t_i$: Waktu yang dibutuhkan untuk mengangkut material dari shovel ke crusher oleh truk $i$
- $x_{ij}$: Jumlah material yang diangkut oleh truk $i$ ke crusher $j$

### 2.2. Model Pemrograman Linier Dua Tahap

Model pemrograman linier dua tahap dapat dinyatakan sebagai berikut:

#### Tahap 1: Penjadwalan Truk

Minimalkan total waktu tunggu truk:

$$
\text{Minimize } Z_1 = \sum_{i=1}^{T} \sum_{j=1}^{S} t_i \cdot x_{ij}
$$

Dengan kendala:

1. Kapasitas truk:
$$
\sum_{j=1}^{S} x_{ij} \leq Q_i, \quad \forall i
$$

2. Permintaan material:
$$
\sum_{i=1}^{T} x_{ij} \geq D_j, \quad \forall j
$$

#### Tahap 2: Minimasi Antrian di Crusher

Minimalkan total waktu antrian di crusher:

$$
\text{Minimize } Z_2 = \sum_{j=1}^{S} \frac{x_{ij}}{C}
$$

Dengan kendala:

1. Kapasitas crusher:
$$
\sum_{i=1}^{T} x_{ij} \leq C, \quad \forall j
$$

### 2.3. Pembuktian Matematis

Model di atas dapat diselesaikan menggunakan metode Simplex atau algoritma pemrograman linier lainnya. Pembuktian keberadaan solusi optimal dapat dilakukan dengan menggunakan Teorema Dualitas dalam pemrograman linier, yang menyatakan bahwa setiap masalah pemrograman linier memiliki solusi dual yang terkait.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-Langkah Implementasi

1. **Pengumpulan Data**: Kumpulkan data terkait waktu transportasi, kapasitas truk dan shovel, serta permintaan material.
2. **Modeling**: Buat model matematis berdasarkan data yang dikumpulkan.
3. **Pemrograman**: Gunakan perangkat lunak pemrograman linier untuk menyelesaikan model.
4. **Implementasi**: Terapkan solusi yang diperoleh dalam operasi sehari-hari.
5. **Monitoring dan Evaluasi**: Lakukan monitoring secara berkala untuk mengevaluasi kinerja sistem dan melakukan penyesuaian jika diperlukan.

### 3.2. Diagram Alir Proses

```
[Pengumpulan Data] --> [Modeling] --> [Pemrograman] --> [Implementasi] --> [Monitoring dan Evaluasi]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan kita memiliki 5 truk dan 3 shovel dengan data sebagai berikut:

- Kapasitas truk ($Q_i$): 30 ton
- Permintaan material ($D_j$): 100 ton
- Waktu transportasi ($t_i$): [2, 3, 2, 4, 3] jam
- Kapasitas crusher ($C$): 50 ton/jam

### 4.2. Langkah Kalkulasi

1. **Modeling**: Buat model berdasarkan data di atas.
2. **Solusi Pemrograman Linier**: Gunakan perangkat lunak untuk menyelesaikan model.

Misalkan hasil dari pemrograman linier menunjukkan bahwa setiap truk mengangkut 20 ton ke crusher, maka:

- Total waktu tunggu truk:
$$
Z_1 = \sum_{i=1}^{5} t_i \cdot 20 = 2 \cdot 20 + 3 \cdot 20 + 2 \cdot 20 + 4 \cdot 20 + 3 \cdot 20 = 400 \text{ jam}
$$

- Total waktu antrian di crusher:
$$
Z_2 = \sum_{j=1}^{3} \frac{20}{50} = 1.2 \text{ jam}
$$

### 4.3. Interpretasi Hasil

Dari hasil perhitungan, total waktu tunggu truk adalah 400 jam, dan total waktu antrian di crusher adalah 1.2 jam. Ini menunjukkan bahwa dengan penjadwalan yang optimal, perusahaan dapat mengurangi waktu tunggu dan meningkatkan efisiensi operasional.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Optimasi penjadwalan truk dan shovel tidak hanya relevan dalam industri pertambangan tetapi juga dapat diterapkan dalam sektor lain seperti logistik dan manufaktur. Dalam konteks rantai pasok, pendekatan ini dapat membantu dalam pengelolaan inventaris dan pengiriman barang. Selain itu, dengan adanya teknologi otomasi dan analitik data besar, model ini dapat ditingkatkan untuk menangani variabilitas yang lebih kompleks.

Namun, terdapat batasan dalam metodologi ini, seperti ketidakpastian dalam waktu transportasi dan permintaan material. Oleh karena itu, arah riset masa depan dapat difokuskan pada pengembangan model yang lebih adaptif dan responsif terhadap perubahan kondisi lapangan, serta integrasi dengan sistem manajemen berbasis AI untuk meningkatkan efisiensi dan keberlanjutan.

Dengan demikian, optimasi penjadwalan truk dan shovel dalam pertambangan terbuka menjadi aspek kritis dalam mencapai efisiensi operasional dan keberlanjutan, sejalan dengan perkembangan teknologi dan tuntutan industri yang semakin kompleks.