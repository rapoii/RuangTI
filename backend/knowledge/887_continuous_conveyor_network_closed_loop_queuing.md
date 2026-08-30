# 887 — Analisis Jaringan Konveyor Sirkulasi Tertutup

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Closed-Loop Recirculating Conveyor Network Analysis: Gordon-Newell Closed Queuing Networks, Window-Based Merge Control, and Jam Point Recirculation Probability Sizing  
**Standar & Referensi Utama:** Bozer & Hsieh (IIE Transactions); Buzacott & Shanthikumar (Stochastic Models of Manufacturing Systems, Prentice Hall); ISO 5048

---

## 1. Pendahuluan dan Konteks Industri

Dalam era industri 4.0, efisiensi operasional dan pengurangan biaya menjadi fokus utama dalam desain dan pengelolaan sistem manufaktur. Jaringan konveyor sirkulasi tertutup (closed-loop recirculating conveyor networks) memainkan peran penting dalam meningkatkan efisiensi aliran material di pabrik dan pusat distribusi. Sistem ini memungkinkan pengiriman barang secara berkelanjutan dan mengurangi waktu tunggu, yang sangat penting dalam memenuhi permintaan pasar yang semakin meningkat.

Tantangan utama dalam sistem ini adalah pengelolaan antrian dan pengendalian titik kemacetan (jam point) yang dapat mengganggu aliran material. Penelitian oleh Bozer & Hsieh (IIE Transactions) menunjukkan bahwa penerapan model antrian Gordon-Newell dapat membantu dalam menganalisis performa sistem konveyor ini. Selain itu, pengendalian penggabungan berbasis jendela (window-based merge control) dapat digunakan untuk mengoptimalkan aliran material dan mengurangi kemacetan.

Dengan meningkatnya kompleksitas rantai pasok modern, pemahaman yang mendalam tentang probabilitas sirkulasi di titik kemacetan menjadi sangat penting. Hal ini tidak hanya berdampak pada efisiensi operasional tetapi juga pada pengurangan biaya dan peningkatan kepuasan pelanggan. Oleh karena itu, analisis jaringan konveyor sirkulasi tertutup menjadi sangat relevan dalam konteks industri saat ini.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Model Antrian Gordon-Newell

Model antrian Gordon-Newell digunakan untuk menganalisis sistem antrian yang terdiri dari beberapa stasiun kerja yang terhubung. Dalam konteks jaringan konveyor, kita dapat mendefinisikan beberapa parameter:

- $\lambda$: Tingkat kedatangan barang (unit/waktu)
- $\mu$: Tingkat pelayanan (unit/waktu)
- $C$: Kapasitas sistem (jumlah unit yang dapat ditampung)
- $N$: Jumlah stasiun kerja

Rumus dasar untuk menghitung waktu tunggu dalam sistem antrian adalah:

$$ W_q = \frac{\lambda}{\mu(\mu - \lambda)} $$

Di mana $W_q$ adalah waktu tunggu rata-rata dalam antrian.

### 2.2. Pengendalian Penggabungan Berbasis Jendela

Pengendalian penggabungan berbasis jendela bertujuan untuk mengoptimalkan aliran material dengan mengatur kapan dan bagaimana unit-unit dikombinasikan. Dalam hal ini, kita mendefinisikan:

- $T$: Waktu penggabungan
- $W$: Lebar jendela penggabungan

Rumus untuk menghitung probabilitas bahwa unit akan berhasil digabungkan dalam jendela waktu tertentu adalah:

$$ P = \frac{T}{W} $$

### 2.3. Probabilitas Sirkulasi di Titik Kemacetan

Probabilitas sirkulasi di titik kemacetan dapat dihitung dengan menggunakan rumus:

$$ P_{jam} = 1 - P_{berhasil} $$

Di mana $P_{berhasil}$ adalah probabilitas bahwa unit dapat melewati titik kemacetan tanpa terhambat.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-Langkah Implementasi

1. **Analisis Kebutuhan**: Identifikasi kebutuhan sistem konveyor berdasarkan volume produksi dan jenis produk.
2. **Desain Jaringan**: Rancang jaringan konveyor dengan mempertimbangkan posisi stasiun kerja dan titik kemacetan.
3. **Model Antrian**: Terapkan model Gordon-Newell untuk menganalisis performa sistem.
4. **Pengendalian Penggabungan**: Implementasikan pengendalian berbasis jendela untuk mengoptimalkan aliran material.
5. **Simulasi dan Pengujian**: Lakukan simulasi untuk menguji performa sistem dan lakukan penyesuaian jika diperlukan.

### 3.2. Diagram Alir Proses

Berikut adalah diagram alir proses implementasi jaringan konveyor sirkulasi tertutup:

```
[Analisis Kebutuhan] --> [Desain Jaringan] --> [Model Antrian] --> [Pengendalian Penggabungan] --> [Simulasi dan Pengujian]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan sebuah pabrik memiliki parameter sebagai berikut:

- Tingkat kedatangan barang ($\lambda$): 10 unit/jam
- Tingkat pelayanan ($\mu$): 15 unit/jam
- Kapasitas sistem ($C$): 100 unit
- Waktu penggabungan ($T$): 2 jam
- Lebar jendela penggabungan ($W$): 5 jam

### 4.2. Perhitungan

1. **Waktu Tunggu Rata-rata dalam Antrian**:

$$ W_q = \frac{\lambda}{\mu(\mu - \lambda)} = \frac{10}{15(15 - 10)} = \frac{10}{75} = 0.1333 \text{ jam} $$

2. **Probabilitas Penggabungan**:

$$ P = \frac{T}{W} = \frac{2}{5} = 0.4 $$

3. **Probabilitas Sirkulasi di Titik Kemacetan**:

$$ P_{berhasil} = P = 0.4 $$

$$ P_{jam} = 1 - P_{berhasil} = 1 - 0.4 = 0.6 $$

### 4.3. Interpretasi Hasil

Hasil perhitungan menunjukkan bahwa waktu tunggu rata-rata dalam antrian adalah 0.1333 jam, yang berarti bahwa barang akan menunggu sekitar 8 menit sebelum dilayani. Probabilitas penggabungan yang berhasil adalah 40%, sementara probabilitas terjadinya kemacetan adalah 60%. Ini menunjukkan bahwa ada kebutuhan untuk meningkatkan efisiensi sistem agar dapat mengurangi kemacetan.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Analisis jaringan konveyor sirkulasi tertutup memiliki aplikasi yang luas di berbagai sektor, termasuk manufaktur, logistik, dan distribusi. Dalam konteks rantai pasok, sistem ini dapat digunakan untuk mengoptimalkan aliran barang dan mengurangi biaya penyimpanan. Selain itu, dengan meningkatnya otomatisasi, penerapan teknologi seperti Internet of Things (IoT) dan kecerdasan buatan (AI) dapat meningkatkan efisiensi sistem.

Namun, ada batasan dalam metodologi ini, termasuk asumsi bahwa tingkat kedatangan dan pelayanan adalah konstan. Penelitian masa depan dapat berfokus pada pengembangan model yang lebih adaptif dan responsif terhadap perubahan kondisi pasar.

Standar masa depan dalam analisis jaringan konveyor harus mencakup integrasi teknologi baru dan pendekatan berkelanjutan untuk mengurangi dampak lingkungan dari sistem manufaktur. Dengan demikian, penelitian dan pengembangan dalam bidang ini sangat penting untuk mencapai efisiensi yang lebih tinggi dan keberlanjutan dalam industri.