# 863 — Digital Human Modeling (DHM) in Automotive Assembly Line Ergonomics

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Digital Human Modeling (DHM) in Automotive Assembly Line Ergonomics: RAMSIS / Siemens Jack Anthropometric Posture Prediction, RULA/REBA Automation, and Clearance Envelope Sizing  
**Standar & Referensi Utama:** Duffy (Handbook of Digital Human Modeling, CRC Press); ISO 7250; SAE J833; Kroemer (Ergonomics: How to Design for Ease and Efficiency)

---

## 1. Pendahuluan dan Konteks Industri

Dalam era industri 4.0, penerapan teknologi digital dalam desain dan analisis ergonomi di lini perakitan otomotif menjadi semakin penting. Digital Human Modeling (DHM) memungkinkan perancang untuk mensimulasikan interaksi antara manusia dan mesin, sehingga dapat mengidentifikasi potensi masalah ergonomis sebelum implementasi fisik. Dengan meningkatnya kompleksitas produk dan proses, tantangan dalam menciptakan lingkungan kerja yang aman dan efisien semakin mendesak. Menurut Duffy (2022), penggunaan DHM dapat mengurangi risiko cedera kerja dan meningkatkan produktivitas, yang sangat penting dalam konteks persaingan global.

Salah satu tantangan utama dalam manufaktur modern adalah kebutuhan untuk mengoptimalkan desain stasiun kerja agar sesuai dengan berbagai dimensi antropometrik pekerja. ISO 7250 dan SAE J833 memberikan panduan tentang pengukuran antropometri yang diperlukan untuk desain yang ergonomis. Selain itu, metode penilaian postur seperti RULA (Rapid Upper Limb Assessment) dan REBA (Rapid Entire Body Assessment) telah diotomatisasi untuk meningkatkan efisiensi evaluasi ergonomis. Dalam konteks ini, pemodelan digital tidak hanya membantu dalam merancang ruang kerja yang lebih baik, tetapi juga dalam mengurangi biaya yang terkait dengan cedera dan ketidakhadiran pekerja.

Dengan demikian, penerapan DHM dalam ergonomi lini perakitan otomotif tidak hanya berkontribusi pada peningkatan keselamatan dan kesehatan pekerja, tetapi juga pada efisiensi operasional dan keberlanjutan ekonomi perusahaan.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Digital Human Modeling (DHM)

DHM adalah teknik yang menggunakan model manusia digital untuk menganalisis interaksi antara manusia dan lingkungan kerja. Model ini dapat digunakan untuk memprediksi postur, gerakan, dan interaksi dengan alat atau mesin.

### 2.2. Antropometri

Antropometri adalah studi tentang ukuran dan proporsi tubuh manusia. Dalam konteks DHM, data antropometrik digunakan untuk membuat model yang representatif dari populasi pekerja. Rumus dasar untuk menghitung ukuran antropometrik dapat dinyatakan sebagai:

$$
H = \frac{1}{n} \sum_{i=1}^{n} h_i
$$

di mana:
- $H$ = rata-rata tinggi tubuh
- $h_i$ = tinggi individu ke-$i$
- $n$ = jumlah individu

### 2.3. Penilaian Postur

RULA dan REBA adalah metode untuk menilai postur dan risiko cedera. RULA menghitung skor berdasarkan sudut sendi dan posisi tubuh. Skor RULA dapat dihitung dengan rumus berikut:

$$
R = \sum_{j=1}^{m} w_j \cdot p_j
$$

di mana:
- $R$ = skor RULA
- $w_j$ = bobot untuk postur ke-$j$
- $p_j$ = nilai postur ke-$j$
- $m$ = jumlah postur yang dinilai

### 2.4. Clearance Envelope

Clearance envelope adalah ruang yang diperlukan untuk gerakan tubuh dalam lingkungan kerja. Clearance envelope dapat dihitung dengan mempertimbangkan dimensi tubuh dan ruang yang tersedia:

$$
C = L + 2R
$$

di mana:
- $C$ = clearance envelope
- $L$ = panjang anggota tubuh
- $R$ = radius gerakan

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Pengumpulan Data Antropometrik**: Mengumpulkan data antropometrik dari populasi pekerja menggunakan standar ISO 7250 dan SAE J833.
2. **Pembuatan Model Digital**: Menggunakan perangkat lunak DHM seperti RAMSIS atau Siemens Jack untuk membuat model digital berdasarkan data yang dikumpulkan.
3. **Simulasi Postur**: Melakukan simulasi postur menggunakan model digital untuk mengevaluasi interaksi dengan alat dan mesin.
4. **Penilaian Ergonomis**: Menggunakan RULA dan REBA untuk menilai postur yang dihasilkan dari simulasi.
5. **Optimasi Desain**: Menggunakan hasil penilaian untuk mengoptimalkan desain stasiun kerja dan clearance envelope.
6. **Implementasi dan Uji Coba**: Menerapkan desain yang telah dioptimalkan dan melakukan uji coba untuk memastikan efektivitasnya.

### 3.2. Diagram Alir Proses

```plaintext
Pengumpulan Data Antropometrik
          ↓
 Pembuatan Model Digital
          ↓
   Simulasi Postur
          ↓
 Penilaian Ergonomis (RULA/REBA)
          ↓
   Optimasi Desain
          ↓
 Implementasi dan Uji Coba
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan sebuah perusahaan otomotif ingin mendesain stasiun kerja untuk pekerja dengan tinggi rata-rata 170 cm dan panjang lengan 60 cm. Data antropometrik yang relevan adalah sebagai berikut:

- Rata-rata tinggi ($H$): 170 cm
- Panjang lengan ($L$): 60 cm
- Radius gerakan ($R$): 10 cm

### 4.2. Perhitungan Clearance Envelope

Menggunakan rumus clearance envelope:

$$
C = L + 2R = 60 + 2(10) = 80 \text{ cm}
$$

### 4.3. Penilaian Postur

Misalkan hasil simulasi postur menghasilkan skor RULA sebagai berikut:

- Bobot postur ($w_1$, $w_2$): 2, 1
- Nilai postur ($p_1$, $p_2$): 3, 2

Maka, skor RULA dapat dihitung sebagai:

$$
R = w_1 \cdot p_1 + w_2 \cdot p_2 = 2 \cdot 3 + 1 \cdot 2 = 6 + 2 = 8
$$

### 4.4. Interpretasi Hasil

Dari perhitungan di atas, clearance envelope sebesar 80 cm menunjukkan bahwa ruang yang tersedia cukup untuk gerakan pekerja. Namun, skor RULA sebesar 8 menunjukkan bahwa ada risiko tinggi untuk cedera, sehingga perlu dilakukan optimasi lebih lanjut pada desain stasiun kerja.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Penerapan DHM tidak hanya terbatas pada industri otomotif, tetapi juga dapat diterapkan di sektor lain seperti kesehatan, konstruksi, dan manufaktur umum. Dalam konteks rantai pasok, DHM dapat membantu dalam merancang stasiun kerja yang lebih efisien, yang pada gilirannya dapat mengurangi biaya dan meningkatkan produktivitas.

Namun, terdapat batasan dalam metodologi ini, seperti ketergantungan pada data antropometrik yang mungkin tidak representatif untuk semua populasi. Oleh karena itu, penelitian lebih lanjut diperlukan untuk mengembangkan model yang lebih inklusif.

Ke depan, integrasi teknologi seperti kecerdasan buatan dan machine learning dalam DHM dapat membuka peluang baru untuk analisis ergonomis yang lebih mendalam dan akurat. Penelitian di bidang ini diharapkan dapat menghasilkan standar baru yang lebih baik dalam desain ergonomis di berbagai sektor industri.

---

Dokumen ini memberikan panduan komprehensif mengenai penerapan Digital Human Modeling dalam ergonomi lini perakitan otomotif, dengan fokus pada aspek-aspek kuantitatif dan metodologis yang relevan untuk praktik industri saat ini.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
