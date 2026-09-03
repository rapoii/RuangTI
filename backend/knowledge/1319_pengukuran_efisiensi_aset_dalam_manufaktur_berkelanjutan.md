# 1319 — Pengukuran Efisiensi Aset dalam Manufaktur Berkelanjutan Menggunakan Time-Driven ABC Costing

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Pengukuran Efisiensi Aset dalam Manufaktur Berkelanjutan Menggunakan Time-Driven ABC Costing  
**Standar & Referensi Utama:** Miller, J. (2025). Measuring Asset Efficiency in Sustainable Manufacturing. Journal of Cleaner Production, 2025.

---

## 1. Pendahuluan dan Konteks Industri

Dalam era industri 4.0, perusahaan manufaktur dihadapkan pada tantangan untuk meningkatkan efisiensi operasional sambil menjaga keberlanjutan. Pengukuran efisiensi aset menjadi sangat penting, karena aset yang tidak efisien dapat menyebabkan pemborosan sumber daya dan dampak lingkungan yang negatif. Di tengah meningkatnya tekanan untuk beroperasi secara berkelanjutan, perusahaan harus mengadopsi pendekatan yang lebih canggih dalam pengukuran dan pengelolaan biaya.

Salah satu tantangan utama dalam industri manufaktur modern adalah kompleksitas rantai pasok dan kebutuhan untuk mengoptimalkan penggunaan aset. Menurut Miller (2025), banyak perusahaan masih menggunakan metode tradisional dalam pengukuran biaya, yang sering kali tidak mencerminkan realitas operasional. Hal ini mengakibatkan keputusan yang kurang tepat dalam pengelolaan aset dan pengalokasian sumber daya. 

Penerapan Time-Driven Activity-Based Costing (TDABC) menawarkan solusi yang lebih akurat dengan memperhitungkan waktu yang dihabiskan untuk setiap aktivitas dalam proses produksi. Dengan pendekatan ini, perusahaan dapat mengidentifikasi aktivitas yang tidak efisien dan mengoptimalkan penggunaan aset, sehingga mendukung tujuan keberlanjutan. Oleh karena itu, pemahaman yang mendalam tentang pengukuran efisiensi aset menggunakan TDABC sangat penting bagi para profesional di bidang teknik industri.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Time-Driven Activity-Based Costing (TDABC)

TDABC adalah metode pengukuran biaya yang berfokus pada waktu yang dihabiskan untuk melakukan aktivitas tertentu. Dalam TDABC, biaya total dihitung berdasarkan dua parameter utama:

1. **Biaya per unit waktu ($C_u$)**: Biaya yang dikeluarkan untuk setiap unit waktu yang digunakan dalam aktivitas.
2. **Waktu yang dibutuhkan ($T_a$)**: Waktu yang dibutuhkan untuk menyelesaikan aktivitas tertentu.

Rumus dasar untuk menghitung biaya total ($C_t$) dari suatu aktivitas adalah:

$$
C_t = C_u \times T_a
$$

### 2.2. Definisi Variabel

- $C_t$: Biaya total untuk aktivitas tertentu.
- $C_u$: Biaya per unit waktu (misalnya, per jam).
- $T_a$: Waktu yang dibutuhkan untuk menyelesaikan aktivitas (misalnya, dalam jam).

### 2.3. Pembuktian Matematis

Misalkan sebuah perusahaan memiliki dua aktivitas: produksi dan pengemasan. Jika biaya per unit waktu untuk produksi adalah $C_{u,p}$ dan waktu yang dibutuhkan untuk produksi adalah $T_{a,p}$, maka biaya total untuk produksi dapat dihitung sebagai:

$$
C_{t,p} = C_{u,p} \times T_{a,p}
$$

Demikian pula, untuk aktivitas pengemasan:

$$
C_{t,e} = C_{u,e} \times T_{a,e}
$$

Biaya total untuk kedua aktivitas dapat dijumlahkan:

$$
C_{t,total} = C_{t,p} + C_{t,e} = C_{u,p} \times T_{a,p} + C_{u,e} \times T_{a,e}
$$

Dengan menggunakan rumus ini, perusahaan dapat menganalisis efisiensi aset dengan membandingkan biaya total dengan output yang dihasilkan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Identifikasi Aktivitas**: Tentukan semua aktivitas yang terlibat dalam proses produksi.
2. **Pengukuran Waktu**: Ukur waktu yang dibutuhkan untuk setiap aktivitas menggunakan metode observasi atau pengukuran langsung.
3. **Penentuan Biaya**: Hitung biaya per unit waktu untuk setiap aktivitas berdasarkan biaya tetap dan variabel.
4. **Perhitungan Biaya Total**: Gunakan rumus TDABC untuk menghitung biaya total untuk setiap aktivitas.
5. **Analisis Efisiensi**: Bandingkan biaya total dengan output yang dihasilkan untuk menilai efisiensi aset.
6. **Implementasi Perbaikan**: Identifikasi area untuk perbaikan dan implementasikan perubahan yang diperlukan.

### 3.2. Diagram Alir Proses

```
[Identifikasi Aktivitas] --> [Pengukuran Waktu] --> [Penentuan Biaya] --> [Perhitungan Biaya Total] --> [Analisis Efisiensi] --> [Implementasi Perbaikan]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Sebuah perusahaan manufaktur memproduksi komponen elektronik. Berikut adalah data yang diperlukan untuk analisis:

- Aktivitas Produksi:
  - Biaya per unit waktu ($C_{u,p}$): Rp 100.000/jam
  - Waktu yang dibutuhkan ($T_{a,p}$): 5 jam

- Aktivitas Pengemasan:
  - Biaya per unit waktu ($C_{u,e}$): Rp 50.000/jam
  - Waktu yang dibutuhkan ($T_{a,e}$): 2 jam

### 4.2. Perhitungan

1. **Biaya Total Produksi**:
   $$
   C_{t,p} = C_{u,p} \times T_{a,p} = 100.000 \times 5 = Rp 500.000
   $$

2. **Biaya Total Pengemasan**:
   $$
   C_{t,e} = C_{u,e} \times T_{a,e} = 50.000 \times 2 = Rp 100.000
   $$

3. **Biaya Total Keseluruhan**:
   $$
   C_{t,total} = C_{t,p} + C_{t,e} = 500.000 + 100.000 = Rp 600.000
   $$

### 4.3. Interpretasi Hasil

Dari perhitungan di atas, total biaya untuk memproduksi dan mengemas komponen elektronik adalah Rp 600.000. Dengan mengetahui biaya ini, manajemen dapat mengevaluasi harga jual dan margin keuntungan, serta mengidentifikasi potensi penghematan biaya di masa depan.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

### 5.1. Hubungan dengan Disiplin Lain

Pengukuran efisiensi aset tidak hanya relevan dalam konteks manufaktur, tetapi juga memiliki aplikasi luas dalam manajemen rantai pasok, otomasi, dan teknik biaya. Dalam manajemen rantai pasok, efisiensi aset dapat mempengaruhi waktu pengiriman dan kepuasan pelanggan. Dalam otomasi, penggunaan teknologi dapat mengurangi waktu yang dibutuhkan untuk aktivitas tertentu, sehingga meningkatkan efisiensi.

### 5.2. Batasan Metodologi

Meskipun TDABC menawarkan banyak keuntungan, terdapat beberapa batasan. Misalnya, ketidakakuratan dalam pengukuran waktu dapat mengarah pada kesalahan dalam perhitungan biaya. Selain itu, TDABC mungkin tidak cocok untuk semua jenis industri, terutama yang memiliki proses produksi yang sangat variatif.

### 5.3. Arah Riset Masa Depan

Riset masa depan dapat difokuskan pada pengembangan model TDABC yang lebih adaptif dan integratif dengan teknologi digital, seperti Internet of Things (IoT) dan big data. Integrasi ini dapat meningkatkan akurasi pengukuran waktu dan biaya, serta memberikan wawasan yang lebih mendalam tentang efisiensi aset dalam konteks keberlanjutan.

Dengan demikian, pengukuran efisiensi aset menggunakan Time-Driven ABC Costing merupakan alat yang sangat berharga bagi perusahaan manufaktur dalam mencapai tujuan keberlanjutan dan efisiensi operasional.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
