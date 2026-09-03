# 857 — Teknik Resonansi Frekuensi Tinggi (HFRT) dan Kurtosis Spektral untuk Diagnosis Kerusakan Bearing Elemen Bergulir: Ekstraksi Frekuensi Lulus Bola Race Dalam/Luar (BPFI/BPFO) dan Penyaringan Envelope

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** High-Frequency Resonance Technique (HFRT) & Spectral Kurtosis for Rolling Element Bearing Fault Diagnosis: Inner/Outer Race Ball Pass Frequency (BPFI/BPFO) Extraction and Envelope Filtering  
**Standar & Referensi Utama:** Randall & Antoni (2022, Mech. Syst. Signal Process.); ISO 10816; Taylor (The Vibration Analysis Handbook)

---

## 1. Pendahuluan dan Konteks Industri

Dalam konteks industri modern, pemeliharaan prediktif menjadi semakin penting untuk memastikan keandalan dan efisiensi operasional mesin. Kerusakan pada bearing elemen bergulir, yang sering kali menjadi penyebab utama kegagalan mesin, dapat menyebabkan downtime yang signifikan dan biaya yang tinggi. Menurut Randall & Antoni (2022), diagnosis dini terhadap kerusakan bearing dapat mengurangi biaya pemeliharaan hingga 30% dan meningkatkan umur mesin. Tantangan utama dalam diagnosis kerusakan bearing adalah kemampuan untuk mendeteksi dan mengidentifikasi jenis kerusakan yang berbeda, terutama dalam lingkungan yang bising dan bergetar.

Metode High-Frequency Resonance Technique (HFRT) dan analisis Kurtosis Spektral menawarkan pendekatan yang efektif untuk mendeteksi kerusakan pada bearing dengan memanfaatkan karakteristik frekuensi tinggi dari sinyal getaran. Metode ini memungkinkan untuk ekstraksi frekuensi lulus bola race dalam (BPFI) dan luar (BPFO), yang merupakan parameter kunci dalam diagnosis kerusakan. Dengan menggunakan teknik penyaringan envelope, informasi yang relevan dapat dipisahkan dari noise, sehingga meningkatkan akurasi diagnosis.

Dalam konteks manufaktur dan rantai pasok, penerapan teknik ini tidak hanya meningkatkan keandalan mesin tetapi juga mengoptimalkan proses produksi, mengurangi limbah, dan meningkatkan efisiensi energi. Oleh karena itu, pemahaman yang mendalam tentang HFRT dan Kurtosis Spektral sangat penting bagi para insinyur dan manajer dalam industri.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Definisi Variabel dan Parameter

- $f$: Frekuensi (Hz)
- $n$: Jumlah bola dalam bearing
- $d$: Diameter bola (m)
- $D$: Diameter luar bearing (m)
- $BPFI$: Frekuensi lulus bola race dalam (Hz)
- $BPFO$: Frekuensi lulus bola race luar (Hz)

### 2.2. Ekstraksi BPFI dan BPFO

Frekuensi lulus bola untuk race dalam ($BPFI$) dan luar ($BPFO$) dapat dihitung dengan rumus berikut:

$$
BPFI = \frac{n \cdot f_r}{2} \cdot \left(1 + \frac{d}{D}\right)
$$

$$
BPFO = \frac{n \cdot f_r}{2} \cdot \left(1 - \frac{d}{D}\right)
$$

di mana $f_r$ adalah kecepatan putar bearing dalam rpm.

### 2.3. Kurtosis Spektral

Kurtosis adalah ukuran statistik yang menggambarkan bentuk distribusi probabilitas. Dalam konteks analisis getaran, kurtosis spektral dapat dihitung dengan rumus:

$$
Kurtosis = \frac{E[X^4]}{(E[X^2])^2} - 3
$$

di mana $E[X^n]$ adalah ekspektasi dari variabel acak $X$ pangkat $n$.

### 2.4. Penyaringan Envelope

Penyaringan envelope dilakukan dengan menggunakan transformasi Hilbert untuk mendapatkan amplitudo envelope dari sinyal getaran. Jika $x(t)$ adalah sinyal getaran, maka envelope $e(t)$ dapat dihitung sebagai:

$$
e(t) = |H[x(t)]|
$$

di mana $H$ adalah operator transformasi Hilbert.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Pengumpulan Data**: Menggunakan sensor accelerometer untuk merekam sinyal getaran dari bearing.
2. **Pra-pemrosesan Data**: Menghilangkan noise dengan filter band-pass untuk frekuensi yang relevan.
3. **Ekstraksi BPFI dan BPFO**: Menghitung $BPFI$ dan $BPFO$ menggunakan rumus yang telah ditentukan.
4. **Analisis Kurtosis**: Menghitung kurtosis dari sinyal untuk mendeteksi anomali.
5. **Penyaringan Envelope**: Menggunakan transformasi Hilbert untuk mendapatkan envelope dari sinyal.
6. **Interpretasi Hasil**: Menganalisis hasil untuk menentukan kondisi bearing.

### 3.2. Diagram Alir Proses

Diagram alir berikut menggambarkan langkah-langkah di atas:

```
[Pengumpulan Data] --> [Pra-pemrosesan Data] --> [Ekstraksi BPFI/BPFO] --> [Analisis Kurtosis] --> [Penyaringan Envelope] --> [Interpretasi Hasil]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan sebuah bearing dengan parameter berikut:
- Jumlah bola ($n$): 7
- Diameter bola ($d$): 0.025 m
- Diameter luar bearing ($D$): 0.1 m
- Kecepatan putar ($f_r$): 1200 rpm

### 4.2. Perhitungan BPFI dan BPFO

1. **Menghitung BPFI**:

$$
BPFI = \frac{7 \cdot 1200}{2} \cdot \left(1 + \frac{0.025}{0.1}\right) = 4200 \cdot \left(1 + 0.25\right) = 5250 \text{ Hz}
$$

2. **Menghitung BPFO**:

$$
BPFO = \frac{7 \cdot 1200}{2} \cdot \left(1 - \frac{0.025}{0.1}\right) = 4200 \cdot \left(1 - 0.25\right) = 3150 \text{ Hz}
$$

### 4.3. Interpretasi Hasil

Hasil perhitungan menunjukkan bahwa frekuensi lulus bola untuk race dalam adalah 5250 Hz dan untuk race luar adalah 3150 Hz. Dengan menggunakan analisis kurtosis dan penyaringan envelope, insinyur dapat mendeteksi adanya kerusakan pada bearing jika sinyal getaran menunjukkan nilai kurtosis yang tinggi, yang mengindikasikan adanya anomali.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Teknik HFRT dan analisis kurtosis spektral memiliki aplikasi yang luas tidak hanya dalam diagnosis kerusakan bearing tetapi juga dalam berbagai disiplin ilmu lainnya, seperti manajemen rantai pasok, otomasi, dan teknik keselamatan kerja (K3). Dengan meningkatnya fokus pada keberlanjutan dan efisiensi energi, teknik ini dapat membantu perusahaan dalam mengurangi biaya operasional dan meningkatkan produktivitas.

Namun, terdapat beberapa batasan dalam metodologi ini, termasuk sensitivitas terhadap noise dan kompleksitas dalam pengolahan data. Oleh karena itu, penelitian lebih lanjut diperlukan untuk mengembangkan algoritma yang lebih robust dan efisien.

Arah riset masa depan dapat mencakup integrasi teknik ini dengan teknologi kecerdasan buatan untuk analisis prediktif yang lebih akurat dan otomatisasi dalam pemeliharaan prediktif, serta penerapan dalam sistem IoT untuk monitoring real-time.

---

Dokumen ini memberikan gambaran mendalam mengenai teknik HFRT dan analisis kurtosis spektral dalam diagnosis kerusakan bearing, serta relevansinya dalam konteks industri modern. Diharapkan modul ini dapat menjadi referensi yang berguna bagi para profesional di bidang teknik industri dan rekayasa sistem industri.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
