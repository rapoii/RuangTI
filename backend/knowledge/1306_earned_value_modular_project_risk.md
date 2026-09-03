# 1306 — Manajemen Risiko dalam Proyek Konstruksi Modular Menggunakan Earned Value Management dan Earned Schedule

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Manajemen Risiko dalam Proyek Konstruksi Modular Menggunakan Earned Value Management dan Earned Schedule  
**Standar & Referensi Utama:** Kumar, P. (2025). Risk Management in Modular Construction Projects Using Earned Value and Earned Schedule. International Journal of Production Research, 63(5), 1500-1515. ASME B89.1.1-2023.

---

## 1. Pendahuluan dan Konteks Industri

Industri konstruksi modular telah berkembang pesat dalam beberapa tahun terakhir, menawarkan solusi efisien untuk tantangan yang dihadapi dalam proyek konstruksi tradisional. Modularitas dalam konstruksi memungkinkan pabrikasi komponen di lokasi terpisah, yang kemudian dirakit di lokasi proyek. Hal ini mengurangi waktu konstruksi, biaya, dan risiko yang terkait dengan proyek. Namun, meskipun ada manfaat yang jelas, proyek konstruksi modular tetap menghadapi risiko signifikan yang dapat mempengaruhi hasil akhir, termasuk keterlambatan, biaya yang membengkak, dan masalah kualitas.

Manajemen risiko menjadi krusial dalam konteks ini, terutama ketika mempertimbangkan kompleksitas yang terlibat dalam pengelolaan proyek modular. Pendekatan tradisional sering kali tidak memadai untuk menangani dinamika yang unik dari proyek modular. Oleh karena itu, penerapan teknik manajemen risiko yang lebih canggih seperti Earned Value Management (EVM) dan Earned Schedule (ES) menjadi sangat relevan. EVM memungkinkan manajer proyek untuk mengukur kinerja proyek berdasarkan nilai yang diperoleh, sementara ES memberikan perspektif waktu yang lebih baik dalam pengelolaan proyek.

Dalam konteks ini, penting untuk memahami bahwa risiko dalam proyek konstruksi modular tidak hanya berasal dari faktor internal, tetapi juga dari faktor eksternal seperti perubahan regulasi, fluktuasi harga material, dan ketidakpastian pasar. Oleh karena itu, pendekatan yang sistematis dan berbasis data dalam manajemen risiko sangat diperlukan untuk memastikan keberhasilan proyek.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Earned Value Management (EVM)

EVM adalah teknik yang mengintegrasikan ruang lingkup, waktu, dan biaya untuk memberikan gambaran yang lebih akurat tentang kinerja proyek. Tiga parameter utama dalam EVM adalah:

- **Planned Value (PV)**: Nilai yang direncanakan untuk pekerjaan yang seharusnya telah diselesaikan pada waktu tertentu.
- **Earned Value (EV)**: Nilai dari pekerjaan yang telah diselesaikan pada waktu tertentu.
- **Actual Cost (AC)**: Biaya aktual yang telah dikeluarkan untuk pekerjaan yang telah diselesaikan.

Rumus dasar untuk menghitung variabel ini adalah sebagai berikut:

$$
PV = \text{Total Budget} \times \frac{\text{Waktu yang telah berlalu}}{\text{Total Durasi}}
$$

$$
EV = \text{Total Budget} \times \frac{\text{Pekerjaan yang telah diselesaikan}}{\text{Total Pekerjaan}}
$$

$$
AC = \text{Total Biaya yang dikeluarkan}
$$

Dari ketiga parameter ini, kita dapat menghitung dua indikator kinerja utama:

- **Cost Performance Index (CPI)**:
$$
CPI = \frac{EV}{AC}
$$

- **Schedule Performance Index (SPI)**:
$$
SPI = \frac{EV}{PV}
$$

### 2.2. Earned Schedule (ES)

ES adalah metode yang mengembangkan EVM dengan menambahkan dimensi waktu. Dengan ES, kita dapat menghitung waktu yang seharusnya telah digunakan berdasarkan nilai yang diperoleh. Rumus untuk menghitung Earned Schedule adalah:

$$
ES = \frac{EV}{PV} \times \text{Total Durasi}
$$

### 2.3. Definisi Variabel

- \(PV\): Planned Value
- \(EV\): Earned Value
- \(AC\): Actual Cost
- \(CPI\): Cost Performance Index
- \(SPI\): Schedule Performance Index
- \(ES\): Earned Schedule
- \(T\): Total Durasi Proyek

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Langkah-langkah Implementasi

1. **Identifikasi Risiko**: Mengidentifikasi risiko potensial yang dapat mempengaruhi proyek, baik dari faktor internal maupun eksternal.
2. **Analisis Risiko**: Menggunakan teknik kualitatif dan kuantitatif untuk menganalisis dampak dan kemungkinan terjadinya risiko.
3. **Perencanaan Respon Risiko**: Mengembangkan strategi untuk mengurangi atau menghindari risiko yang teridentifikasi.
4. **Implementasi EVM dan ES**: Menerapkan teknik EVM dan ES untuk memantau kinerja proyek secara real-time.
5. **Monitoring dan Kontrol**: Secara berkala memantau kinerja proyek dan melakukan penyesuaian jika diperlukan berdasarkan hasil EVM dan ES.

### 3.2. Diagram Alir Proses

![Diagram Alir Proses Manajemen Risiko](https://via.placeholder.com/600x400.png?text=Diagram+Alir+Proses+Manajemen+Risiko)

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Contoh Kasus

Misalkan sebuah proyek konstruksi modular memiliki total anggaran sebesar $1,000,000 dan durasi proyek selama 12 bulan. Pada bulan ke-6, pekerjaan yang telah diselesaikan adalah 40% dari total pekerjaan.

### 4.2. Parameter Input

- Total Budget = $1,000,000
- Total Durasi = 12 bulan
- Pekerjaan yang telah diselesaikan = 40%
- Biaya aktual yang dikeluarkan = $450,000

### 4.3. Langkah Perhitungan

1. Hitung PV:
$$
PV = 1,000,000 \times \frac{6}{12} = 500,000
$$

2. Hitung EV:
$$
EV = 1,000,000 \times 0.40 = 400,000
$$

3. Hitung AC:
$$
AC = 450,000
$$

4. Hitung CPI:
$$
CPI = \frac{EV}{AC} = \frac{400,000}{450,000} = 0.89
$$

5. Hitung SPI:
$$
SPI = \frac{EV}{PV} = \frac{400,000}{500,000} = 0.80
$$

6. Hitung ES:
$$
ES = \frac{EV}{PV} \times 12 = \frac{400,000}{500,000} \times 12 = 9.6 \text{ bulan}
$$

### 4.4. Interpretasi Hasil

Dari hasil perhitungan di atas, CPI yang kurang dari 1 menunjukkan bahwa proyek mengalami pembengkakan biaya, sedangkan SPI yang juga kurang dari 1 menunjukkan bahwa proyek tertinggal dari jadwal. Dengan ES yang menunjukkan 9.6 bulan, manajer proyek dapat merencanakan langkah-langkah perbaikan untuk mengembalikan proyek ke jalur yang benar.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Pendekatan manajemen risiko dalam proyek konstruksi modular tidak hanya relevan untuk sektor konstruksi, tetapi juga dapat diterapkan pada sektor lain seperti manufaktur dan layanan. Dalam konteks rantai pasok, EVM dan ES dapat digunakan untuk mengelola risiko yang terkait dengan pengadaan dan distribusi material. Selain itu, dengan meningkatnya otomatisasi dan digitalisasi, integrasi teknologi seperti Internet of Things (IoT) dan analitik data besar dapat meningkatkan akurasi dalam memprediksi dan mengelola risiko.

Namun, terdapat batasan dalam metodologi ini, seperti ketergantungan pada data yang akurat dan terkini. Oleh karena itu, penelitian di masa depan perlu fokus pada pengembangan model yang lebih adaptif dan responsif terhadap perubahan kondisi proyek.

Dengan demikian, penerapan EVM dan ES dalam manajemen risiko proyek konstruksi modular menawarkan pendekatan yang sistematis dan berbasis data untuk meningkatkan kinerja proyek dan mengurangi risiko, yang pada akhirnya berkontribusi pada keberhasilan proyek secara keseluruhan.$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
