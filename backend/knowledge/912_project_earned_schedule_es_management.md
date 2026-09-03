# 912 — Manajemen Waktu Berbasis Earned Schedule dan Earned Duration Management dalam Proyek

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Earned Schedule (ES) and Earned Duration Management (EDM) Extension to EVM: Time-Based Schedule Performance Index (SPI(t)), Final Duration Forecasting, and Critical Path Pacing  
**Standar & Referensi Utama:** Lipke (Earned Schedule, Project Management Institute PMI); PMBOK Guide (7th Ed.); Fleming & Koppelman (Earned Value Project Management, 4th Ed.)

---

## 1. Pendahuluan dan Konteks Industri

Dalam era globalisasi dan persaingan yang semakin ketat, manajemen proyek menjadi salah satu aspek krusial dalam industri manufaktur dan rantai pasok. Proyek yang tidak dikelola dengan baik dapat mengakibatkan pemborosan sumber daya, keterlambatan, dan kegagalan dalam memenuhi harapan pelanggan. Menurut laporan PMI, sekitar 70% proyek mengalami keterlambatan, yang berdampak langsung pada biaya dan reputasi perusahaan. Oleh karena itu, penerapan metode manajemen proyek yang efektif, seperti Earned Value Management (EVM), menjadi sangat penting.

Earned Schedule (ES) dan Earned Duration Management (EDM) merupakan pengembangan dari EVM yang berfokus pada pengukuran kinerja waktu. ES memperkenalkan konsep waktu yang terukur dalam konteks nilai yang diperoleh, sedangkan EDM menekankan pada pengelolaan durasi proyek. Dalam konteks industri modern, tantangan yang dihadapi meliputi kompleksitas proyek, ketidakpastian pasar, dan kebutuhan untuk adaptasi yang cepat terhadap perubahan. Dengan mengintegrasikan ES dan EDM ke dalam praktik manajemen proyek, perusahaan dapat meningkatkan akurasi dalam perencanaan waktu, memprediksi penyimpangan, dan melakukan penyesuaian yang diperlukan untuk mencapai tujuan proyek.

Literatur menunjukkan bahwa penerapan ES dan EDM dapat meningkatkan efisiensi proyek secara signifikan. Lipke (2003) mengemukakan bahwa ES memberikan pandangan yang lebih realistis tentang kemajuan proyek dibandingkan dengan metode tradisional EVM. Dengan demikian, pemahaman yang mendalam tentang ES dan EDM sangat penting bagi para profesional di bidang teknik industri dan manajemen proyek.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Earned Schedule (ES)

Earned Schedule adalah metode yang digunakan untuk mengukur kinerja waktu proyek dengan mengaitkan nilai yang diperoleh dengan waktu yang telah berlalu. Konsep utama dari ES adalah untuk menghitung waktu yang seharusnya telah dicapai berdasarkan nilai yang diperoleh.

Definisi variabel:
- \( EV \): Earned Value (nilai yang diperoleh)
- \( PV \): Planned Value (nilai yang direncanakan)
- \( AC \): Actual Cost (biaya aktual)
- \( t \): waktu yang telah berlalu
- \( ES \): Earned Schedule

Rumus untuk menghitung Earned Schedule adalah sebagai berikut:

$$
ES = t_{EV}
$$

di mana \( t_{EV} \) adalah waktu yang diperlukan untuk mencapai nilai yang diperoleh \( EV \).

### 2.2 Earned Duration Management (EDM)

EDM adalah pendekatan yang mengelola durasi proyek dengan memanfaatkan informasi dari ES. Dalam EDM, kita menghitung indeks kinerja waktu (SPI) berdasarkan waktu yang telah berlalu dan waktu yang direncanakan.

Definisi variabel:
- \( SPI(t) \): Schedule Performance Index berdasarkan waktu
- \( t_{actual} \): waktu aktual yang telah berlalu
- \( t_{planned} \): waktu yang direncanakan

Rumus untuk menghitung Schedule Performance Index adalah:

$$
SPI(t) = \frac{ES}{PV}
$$

### 2.3 Final Duration Forecasting

Untuk memprediksi durasi akhir proyek, kita dapat menggunakan rumus berikut:

$$
EFD = \frac{BAC}{CPI} + \frac{BAC - EV}{SPI(t)}
$$

di mana:
- \( EFD \): Estimated Final Duration
- \( BAC \): Budget at Completion
- \( CPI \): Cost Performance Index

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Langkah-langkah Implementasi

1. **Identifikasi Proyek**: Tentukan ruang lingkup dan tujuan proyek.
2. **Perencanaan Proyek**: Buat rencana proyek yang mencakup WBS (Work Breakdown Structure), jadwal, dan anggaran.
3. **Pengukuran Kinerja**: Lakukan pengukuran kinerja secara berkala menggunakan EVM, ES, dan EDM.
4. **Analisis Varians**: Lakukan analisis varians untuk mengidentifikasi penyimpangan dari rencana.
5. **Peramalan Durasi**: Gunakan rumus yang telah dijelaskan untuk memprediksi durasi akhir proyek.
6. **Tindakan Korektif**: Implementasikan tindakan korektif berdasarkan hasil analisis.

### 3.2 Diagram Alir Proses

Diagram alir proses dapat menggambarkan langkah-langkah di atas secara visual, memudahkan pemahaman dan implementasi.

```
[Identifikasi Proyek] --> [Perencanaan Proyek] --> [Pengukuran Kinerja] --> [Analisis Varians] --> [Peramalan Durasi] --> [Tindakan Korektif]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Contoh Kasus

Misalkan sebuah proyek konstruksi memiliki parameter sebagai berikut:
- \( BAC = 1,000,000 \) USD
- \( EV = 600,000 \) USD
- \( PV = 800,000 \) USD
- \( AC = 700,000 \) USD
- \( t_{actual} = 10 \) minggu
- \( t_{planned} = 12 \) minggu

### 4.2 Perhitungan

1. **Hitung SPI(t)**:
   $$ SPI(t) = \frac{ES}{PV} $$

   Pertama, kita perlu menghitung \( ES \):
   - Asumsikan \( t_{EV} = 8 \) minggu (waktu yang seharusnya untuk mencapai \( EV \)).
   - Maka, \( ES = t_{EV} = 8 \) minggu.

   Sekarang kita hitung \( SPI(t) \):
   $$ SPI(t) = \frac{8}{800,000} = 0.01 $$

2. **Hitung CPI**:
   $$ CPI = \frac{EV}{AC} = \frac{600,000}{700,000} = 0.857 $$

3. **Peramalan Durasi Akhir**:
   $$ EFD = \frac{BAC}{CPI} + \frac{BAC - EV}{SPI(t)} $$
   $$ EFD = \frac{1,000,000}{0.857} + \frac{1,000,000 - 600,000}{0.01} $$
   $$ EFD = 1,167,000 + 40,000,000 = 41,167,000 \text{ USD} $$

### 4.3 Interpretasi Hasil

Hasil perhitungan menunjukkan bahwa proyek diperkirakan akan melebihi anggaran secara signifikan jika tidak ada tindakan korektif yang diambil. Ini menandakan perlunya evaluasi lebih lanjut terhadap alokasi sumber daya dan penjadwalan ulang.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Penerapan Earned Schedule dan Earned Duration Management tidak hanya terbatas pada proyek konstruksi, tetapi juga dapat diterapkan dalam berbagai sektor seperti teknologi informasi, manufaktur, dan layanan. Dalam konteks rantai pasok, metode ini dapat membantu dalam mengoptimalkan waktu pengiriman dan mengurangi biaya operasional.

Namun, terdapat beberapa batasan dalam metodologi ini, seperti ketidakpastian dalam estimasi awal dan perubahan yang tidak terduga dalam ruang lingkup proyek. Oleh karena itu, penelitian lebih lanjut diperlukan untuk mengembangkan model yang lebih adaptif dan responsif terhadap dinamika proyek.

Arah riset masa depan dapat mencakup integrasi teknologi seperti analitik data besar dan kecerdasan buatan untuk meningkatkan akurasi peramalan dan pengelolaan risiko dalam proyek. Dengan demikian, penerapan ES dan EDM dapat menjadi alat yang lebih kuat dalam manajemen proyek yang kompleks dan dinamis.

--- 

Dokumen ini memberikan panduan komprehensif tentang penerapan Earned Schedule dan Earned Duration Management dalam konteks manajemen proyek, serta menyoroti pentingnya pendekatan berbasis waktu dalam meningkatkan kinerja proyek secara keseluruhan.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
