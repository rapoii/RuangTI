# 870 — Sistem Manajemen Risiko Kelelahan (FRMS) dan Pemodelan Utang Tidur Biomatematika di Pabrik Proses Kimia 24/7: Skala Kelelahan Samn-Perelli, Perubahan Fase Ritme Sirkadian, dan Penentuan Ukuran Jadwal Shift

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Fatigue Risk Management Systems (FRMS) and Biomathematical Sleep Debt Modeling in 24/7 Chemical Process Plants: Samn-Perelli Fatigue Scale, Circadian Rhythm Phase Shift, and Shift Roster Sizing  
**Standar & Referensi Utama:** Folkard & Åkerstedt (Shiftwork Ergonomics); ICAO Doc 9966; Dawson & McCulloch (Sleep Medicine Reviews)

---

## 1. Pendahuluan dan Konteks Industri

Dalam konteks industri modern, terutama di pabrik proses kimia yang beroperasi 24/7, manajemen risiko kelelahan menjadi sangat penting. Kelelahan pekerja dapat menyebabkan penurunan produktivitas, peningkatan kecelakaan kerja, dan kualitas produk yang buruk. Menurut Folkard & Åkerstedt (2004), kelelahan akibat kerja shift dapat mempengaruhi kesehatan fisik dan mental pekerja, yang pada gilirannya berdampak pada keseluruhan kinerja organisasi. Dalam industri kimia, di mana keselamatan dan efisiensi adalah prioritas utama, tantangan ini menjadi semakin mendesak.

Pabrik proses kimia sering kali beroperasi dalam siklus yang panjang, dengan pekerja yang terpapar pada jam kerja yang tidak teratur dan perubahan fase ritme sirkadian. Hal ini dapat menyebabkan akumulasi utang tidur, yang berpotensi mengganggu kinerja dan kesehatan pekerja. Penelitian oleh Dawson & McCulloch (2005) menunjukkan bahwa utang tidur yang tidak dikelola dapat meningkatkan risiko kecelakaan dan kesalahan operasional. Oleh karena itu, penting untuk mengimplementasikan Sistem Manajemen Risiko Kelelahan (FRMS) yang efektif, yang mencakup pemodelan utang tidur biomatematika dan penentuan ukuran jadwal shift yang optimal.

Dengan meningkatnya tekanan untuk meningkatkan efisiensi operasional dan mengurangi biaya, perusahaan harus mengadopsi pendekatan berbasis data untuk mengelola risiko kelelahan. Hal ini mencakup penggunaan alat seperti Skala Kelelahan Samn-Perelli untuk mengevaluasi tingkat kelelahan pekerja dan mengembangkan strategi untuk mengurangi dampaknya. Dengan memahami dan mengelola faktor-faktor yang mempengaruhi kelelahan, perusahaan dapat meningkatkan keselamatan, kesehatan, dan produktivitas pekerja.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Skala Kelelahan Samn-Perelli

Skala Kelelahan Samn-Perelli adalah alat yang digunakan untuk mengukur tingkat kelelahan subjektif pekerja. Skala ini terdiri dari 7 poin, di mana 1 menunjukkan "tidak lelah sama sekali" dan 7 menunjukkan "sangat lelah". Dalam konteks matematis, kita dapat mendefinisikan tingkat kelelahan $L$ sebagai:

$$
L = \frac{1}{n} \sum_{i=1}^{n} l_i
$$

di mana $l_i$ adalah nilai kelelahan yang dilaporkan oleh pekerja ke-$i$ dan $n$ adalah jumlah pekerja yang dinilai.

### 2.2. Pemodelan Utang Tidur

Utang tidur dapat dimodelkan dengan menggunakan persamaan berikut:

$$
SD = T_{req} - T_{act}
$$

di mana:
- $SD$ adalah utang tidur,
- $T_{req}$ adalah waktu tidur yang dibutuhkan (misalnya, 8 jam per hari),
- $T_{act}$ adalah waktu tidur aktual yang diperoleh.

### 2.3. Perubahan Fase Ritme Sirkadian

Perubahan fase ritme sirkadian dapat dimodelkan dengan fungsi sinusoidal yang menggambarkan fluktuasi energi dan kewaspadaan sepanjang hari:

$$
E(t) = A \sin\left(\frac{2\pi}{T}(t - \phi)\right) + C
$$

di mana:
- $E(t)$ adalah tingkat energi pada waktu $t$,
- $A$ adalah amplitudo fluktuasi,
- $T$ adalah periode ritme sirkadian (24 jam),
- $\phi$ adalah fase awal,
- $C$ adalah nilai rata-rata energi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi FRMS

1. **Identifikasi Risiko Kelelahan**: Lakukan survei untuk mengumpulkan data tentang pola tidur dan kelelahan pekerja.
2. **Pengukuran Kelelahan**: Gunakan Skala Kelelahan Samn-Perelli untuk menilai tingkat kelelahan pekerja secara berkala.
3. **Pemodelan Utang Tidur**: Hitung utang tidur menggunakan rumus yang telah dijelaskan.
4. **Analisis Data**: Gunakan analisis statistik untuk mengidentifikasi tren dan pola dalam data kelelahan.
5. **Pengembangan Strategi Mitigasi**: Rancang jadwal shift yang mempertimbangkan ritme sirkadian dan utang tidur.
6. **Implementasi dan Monitoring**: Terapkan strategi yang telah dikembangkan dan lakukan monitoring secara berkala untuk mengevaluasi efektivitasnya.

### 3.2. Diagram Alir Proses

Diagram alir berikut menggambarkan langkah-langkah dalam implementasi FRMS:

```
[Identifikasi Risiko Kelelahan] → [Pengukuran Kelelahan] → [Pemodelan Utang Tidur] → [Analisis Data] → [Pengembangan Strategi Mitigasi] → [Implementasi dan Monitoring]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Perhitungan

Misalkan sebuah pabrik kimia memiliki 10 pekerja yang melaporkan tingkat kelelahan sebagai berikut: 3, 5, 4, 6, 2, 7, 5, 4, 3, 6.

#### 4.1.1. Menghitung Rata-rata Kelelahan

$$
L = \frac{1}{10} (3 + 5 + 4 + 6 + 2 + 7 + 5 + 4 + 3 + 6) = \frac{45}{10} = 4.5
$$

#### 4.2. Menghitung Utang Tidur

Jika setiap pekerja membutuhkan 8 jam tidur tetapi hanya mendapatkan rata-rata 6 jam tidur, maka:

$$
SD = T_{req} - T_{act} = 8 - 6 = 2 \text{ jam}
$$

Dengan 10 pekerja, total utang tidur adalah:

$$
SD_{total} = 10 \times 2 = 20 \text{ jam}
$$

### 4.3. Interpretasi Hasil

Rata-rata tingkat kelelahan sebesar 4.5 menunjukkan bahwa pekerja berada pada tingkat kelelahan yang cukup signifikan. Total utang tidur 20 jam menunjukkan bahwa ada kebutuhan mendesak untuk mengatur ulang jadwal shift agar pekerja mendapatkan waktu tidur yang cukup.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Sistem Manajemen Risiko Kelelahan (FRMS) tidak hanya relevan dalam industri kimia, tetapi juga dapat diterapkan di sektor lain seperti transportasi, kesehatan, dan manufaktur. Dalam konteks rantai pasok, pemahaman tentang kelelahan pekerja dapat membantu dalam merancang sistem yang lebih efisien dan aman. 

Keterkaitan antara kelelahan, keselamatan kerja, dan produktivitas menunjukkan bahwa pendekatan interdisipliner diperlukan untuk mengatasi masalah ini. Penelitian lebih lanjut diperlukan untuk mengembangkan model yang lebih akurat dalam memprediksi dampak kelelahan terhadap kinerja, serta untuk mengeksplorasi teknologi baru yang dapat membantu dalam pemantauan dan manajemen kelelahan.

Dengan demikian, FRMS dan pemodelan utang tidur biomatematika akan terus menjadi area penting dalam penelitian dan praktik teknik industri, seiring dengan meningkatnya kebutuhan untuk menjaga kesehatan dan keselamatan pekerja di lingkungan kerja yang semakin kompleks.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
