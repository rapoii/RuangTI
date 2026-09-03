# 1302 — Teknik Analisis Earned Schedule dalam Manajemen Proyek Konstruksi Modular: Aplikasi dan Implikasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Teknik Analisis Earned Schedule dalam Manajemen Proyek Konstruksi Modular: Aplikasi dan Implikasi  
**Standar & Referensi Utama:** Garcia, M. (2025). Earned Schedule Analysis Techniques in Modular Construction Projects. Journal of Construction Engineering and Management, 151(2), 04023012. IEEE Std 1490-2022.

---

## 1. Pendahuluan dan Konteks Industri

Industri konstruksi modular telah mengalami transformasi signifikan dalam beberapa tahun terakhir, terutama dengan meningkatnya kebutuhan untuk efisiensi waktu dan biaya dalam proyek-proyek besar. Proyek konstruksi modular melibatkan pembuatan komponen bangunan di lokasi pabrik sebelum dipindahkan ke lokasi konstruksi untuk dirakit. Pendekatan ini menawarkan keuntungan dalam hal pengurangan waktu konstruksi dan peningkatan kualitas, namun juga menghadapi tantangan dalam manajemen proyek yang kompleks. Salah satu tantangan utama adalah pengukuran kinerja proyek secara akurat dan tepat waktu.

Dalam konteks ini, teknik analisis Earned Schedule (ES) menjadi sangat relevan. ES adalah metode yang memungkinkan manajer proyek untuk mengevaluasi kinerja proyek dengan membandingkan nilai yang diperoleh dengan jadwal yang direncanakan. Dengan menggunakan ES, manajer dapat mengidentifikasi deviasi dari rencana awal dan mengambil tindakan korektif yang diperlukan. Hal ini sangat penting dalam proyek konstruksi modular di mana penjadwalan dan pengendalian biaya sangat krusial untuk keberhasilan proyek.

Berdasarkan penelitian terbaru, termasuk studi oleh Garcia (2025), penerapan teknik analisis ES dalam proyek konstruksi modular tidak hanya meningkatkan akurasi dalam pengukuran kinerja, tetapi juga memberikan wawasan yang lebih baik tentang pengelolaan sumber daya dan pengendalian biaya. Dengan meningkatnya kompleksitas proyek dan kebutuhan untuk pengelolaan yang lebih baik, penerapan teknik ini menjadi sangat mendesak untuk meningkatkan efisiensi operasional dan ekonomi dalam industri konstruksi.

## 2. Landasan Teori & Formulasi Matematis

Earned Schedule (ES) adalah pengembangan dari teknik manajemen proyek tradisional yang menggunakan Earned Value Management (EVM). Konsep dasar dari ES adalah bahwa nilai yang diperoleh (EV) dapat digunakan untuk menghitung jadwal yang diperoleh (ES) dengan cara yang lebih efektif.

### Definisi Variabel

- \( EV \): Earned Value (nilai yang diperoleh)
- \( PV \): Planned Value (nilai yang direncanakan)
- \( AC \): Actual Cost (biaya aktual)
- \( ES \): Earned Schedule (jadwal yang diperoleh)
- \( SPI \): Schedule Performance Index
- \( CPI \): Cost Performance Index

### Rumus

1. **Earned Value (EV)**:
   $$ EV = \text{Persentase Penyelesaian} \times PV $$

2. **Planned Value (PV)**:
   $$ PV = \text{Total Biaya Proyek} \times \text{Persentase Waktu yang Telah Berlalu} $$

3. **Actual Cost (AC)**:
   $$ AC = \text{Biaya yang Telah Dikeluarkan} $$

4. **Earned Schedule (ES)**:
   $$ ES = \frac{EV}{PV} \times \text{Total Durasi Proyek} $$

5. **Schedule Performance Index (SPI)**:
   $$ SPI = \frac{EV}{PV} $$

6. **Cost Performance Index (CPI)**:
   $$ CPI = \frac{EV}{AC} $$

### Pembuktian

Dari rumus di atas, kita dapat melihat bahwa ES memberikan informasi tentang seberapa jauh proyek telah berjalan dibandingkan dengan rencana. Jika \( ES < PV \), maka proyek tertinggal dari jadwal, sedangkan jika \( ES > PV \), proyek berjalan lebih cepat dari jadwal.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### Langkah-langkah Implementasi

1. **Perencanaan Proyek**: Tentukan tujuan proyek, anggaran, dan jadwal.
2. **Pengumpulan Data**: Kumpulkan data tentang biaya, waktu, dan kemajuan proyek secara berkala.
3. **Penghitungan EV, PV, dan AC**: Hitung nilai yang diperoleh, nilai yang direncanakan, dan biaya aktual secara berkala.
4. **Analisis ES**: Gunakan rumus di atas untuk menghitung ES dan SPI.
5. **Tindakan Korektif**: Jika diperlukan, ambil tindakan untuk mengatasi deviasi dari rencana.
6. **Pelaporan**: Buat laporan berkala untuk pemangku kepentingan tentang kinerja proyek.

### Diagram Alir Proses

```plaintext
[Perencanaan Proyek] --> [Pengumpulan Data] --> [Penghitungan EV, PV, AC] --> [Analisis ES] --> [Tindakan Korektif] --> [Pelaporan]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Contoh Kasus

Misalkan sebuah proyek konstruksi modular memiliki total biaya sebesar $1.000.000 dan dijadwalkan selesai dalam 12 bulan. Setelah 6 bulan, proyek telah menyelesaikan 40% dari pekerjaan.

#### Input Parameter

- Total Biaya Proyek: $1.000.000
- Persentase Penyelesaian: 40%
- Persentase Waktu yang Telah Berlalu: 50%
- Biaya yang Telah Dikeluarkan: $450.000

#### Langkah Kalkulasi

1. **Hitung PV**:
   $$ PV = 1.000.000 \times \frac{6}{12} = 500.000 $$

2. **Hitung EV**:
   $$ EV = 1.000.000 \times 0.40 = 400.000 $$

3. **Hitung AC**:
   $$ AC = 450.000 $$

4. **Hitung ES**:
   $$ ES = \frac{EV}{PV} \times 12 = \frac{400.000}{500.000} \times 12 = 9.6 \text{ bulan} $$

5. **Hitung SPI**:
   $$ SPI = \frac{EV}{PV} = \frac{400.000}{500.000} = 0.8 $$

### Interpretasi Hasil

Dari hasil perhitungan, kita dapat melihat bahwa proyek berada di belakang jadwal, karena \( ES = 9.6 \) bulan menunjukkan bahwa proyek seharusnya sudah mencapai 9.6 bulan dari jadwal, tetapi baru mencapai 6 bulan. SPI yang kurang dari 1 menunjukkan bahwa proyek tertinggal dari rencana.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Teknik analisis Earned Schedule tidak hanya relevan dalam konteks konstruksi modular, tetapi juga dapat diterapkan dalam berbagai disiplin ilmu lain, termasuk manajemen rantai pasok, otomasi, dan manajemen biaya. Dalam manajemen rantai pasok, misalnya, analisis ES dapat digunakan untuk mengukur kinerja pengiriman dan produksi, sedangkan dalam otomasi, teknik ini dapat membantu dalam pengendalian proses produksi.

Batasan dari metodologi ini termasuk ketergantungan pada akurasi data yang dikumpulkan dan kompleksitas dalam proyek yang lebih besar. Oleh karena itu, penelitian lebih lanjut diperlukan untuk mengembangkan teknik yang lebih adaptif dan responsif terhadap dinamika proyek yang cepat berubah.

Ke depan, arah riset dapat berfokus pada integrasi teknik analisis ES dengan teknologi digital seperti big data dan analitik untuk meningkatkan akurasi dan kecepatan pengambilan keputusan dalam manajemen proyek. Dengan demikian, penerapan teknik ini diharapkan dapat memberikan kontribusi signifikan terhadap efisiensi dan efektivitas dalam manajemen proyek konstruksi modular dan sektor lainnya.$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
