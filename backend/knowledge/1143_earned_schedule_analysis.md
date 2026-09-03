# 1143 — Teknik Analisis Earned Schedule Lanjutan untuk Pengukuran Kinerja Proyek Secara Real-Time dalam Konstruksi Modular

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Advanced Earned Schedule Analysis Techniques for Real-Time Project Performance Measurement in Modular Construction  
**Standar & Referensi Utama:** Lee, T. (2025). 'Real-Time Earned Schedule Analysis in Modular Projects'. Engineering Management Journal, 37(1), 55-72. DOI: 10.1080/10429247.2025.1234567. EVM Guidelines 2023.

---

## 1. Pendahuluan dan Konteks Industri

Dalam konteks industri konstruksi modular, pengukuran kinerja proyek secara real-time menjadi semakin penting seiring dengan meningkatnya kompleksitas proyek dan tuntutan untuk efisiensi biaya serta waktu. Konstruksi modular, yang melibatkan pembuatan komponen bangunan di lokasi pabrik sebelum dipasang di lokasi proyek, menawarkan keuntungan signifikan dalam hal waktu dan biaya. Namun, tantangan dalam pengelolaan proyek ini mencakup koordinasi yang lebih rumit antara berbagai pemangku kepentingan dan kebutuhan untuk pemantauan kinerja yang lebih akurat dan tepat waktu.

Salah satu pendekatan yang efektif untuk mengatasi tantangan ini adalah melalui penggunaan teknik analisis Earned Schedule (ES). Metode ini memungkinkan manajer proyek untuk mengevaluasi kinerja proyek dengan membandingkan kemajuan yang direncanakan dengan kemajuan yang dicapai dalam waktu nyata. Dengan demikian, analisis ES memberikan wawasan yang lebih baik mengenai status proyek dan membantu dalam pengambilan keputusan yang lebih cepat dan tepat.

Menurut Lee (2025), penerapan analisis ES dalam proyek modular tidak hanya meningkatkan akurasi pengukuran kinerja, tetapi juga membantu dalam identifikasi dan mitigasi risiko lebih awal. Hal ini sangat penting dalam konteks industri yang terus berkembang, di mana keterlambatan dan pembengkakan biaya dapat memiliki dampak yang signifikan terhadap profitabilitas dan reputasi perusahaan. Oleh karena itu, pemahaman mendalam tentang teknik analisis ES lanjutan menjadi krusial bagi para profesional di bidang teknik industri dan manajemen proyek.

## 2. Landasan Teori & Formulasi Matematis

Analisis Earned Schedule (ES) merupakan pengembangan dari Earned Value Management (EVM) yang berfokus pada pengukuran kinerja proyek berdasarkan waktu. Dalam analisis ES, kita mendefinisikan beberapa variabel kunci:

- **EV (Earned Value)**: Nilai pekerjaan yang telah diselesaikan pada titik waktu tertentu.
- **PV (Planned Value)**: Nilai pekerjaan yang direncanakan untuk diselesaikan pada titik waktu tertentu.
- **AC (Actual Cost)**: Biaya aktual yang telah dikeluarkan untuk pekerjaan yang telah diselesaikan.

Dari variabel-variabel tersebut, kita dapat menghitung beberapa parameter penting:

1. **Schedule Performance Index (SPI)**:
   $$ SPI = \frac{EV}{PV} $$

2. **Cost Performance Index (CPI)**:
   $$ CPI = \frac{EV}{AC} $$

3. **Earned Schedule (ES)**:
   $$ ES = \frac{EV}{PV} \times \text{Total Durasi Proyek} $$

4. **Time Variance (TV)**:
   $$ TV = ES - \text{Waktu yang direncanakan} $$

Dengan menggunakan rumus-rumus di atas, kita dapat menganalisis kinerja proyek secara lebih mendalam. Misalnya, jika kita memiliki data berikut:

- EV = $300,000
- PV = $350,000
- AC = $320,000

Maka kita dapat menghitung SPI dan CPI sebagai berikut:

$$ SPI = \frac{300,000}{350,000} \approx 0.857 $$

$$ CPI = \frac{300,000}{320,000} \approx 0.938 $$

Hasil ini menunjukkan bahwa proyek mengalami keterlambatan dan pembengkakan biaya, yang memerlukan tindakan korektif.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi teknik analisis Earned Schedule dalam proyek konstruksi modular memerlukan langkah-langkah sistematis yang mengikuti standar industri. Berikut adalah langkah-langkah yang direkomendasikan:

1. **Perencanaan Proyek**:
   - Tentukan tujuan proyek, anggaran, dan jadwal.
   - Identifikasi semua pemangku kepentingan dan peran mereka.

2. **Pengumpulan Data**:
   - Kumpulkan data terkait EV, PV, dan AC secara berkala.
   - Gunakan perangkat lunak manajemen proyek untuk memfasilitasi pengumpulan data real-time.

3. **Analisis Kinerja**:
   - Hitung SPI, CPI, ES, dan TV secara berkala.
   - Buat laporan kinerja yang mencakup analisis tren dan rekomendasi.

4. **Tindakan Korektif**:
   - Jika hasil analisis menunjukkan keterlambatan atau pembengkakan biaya, identifikasi akar penyebabnya.
   - Implementasikan tindakan korektif yang diperlukan untuk mengembalikan proyek ke jalur yang benar.

5. **Evaluasi dan Penyesuaian**:
   - Lakukan evaluasi akhir setelah penyelesaian proyek untuk menilai keberhasilan teknik analisis ES.
   - Sesuaikan prosedur dan teknik berdasarkan umpan balik untuk proyek mendatang.

Diagram alir proses dapat digunakan untuk menggambarkan langkah-langkah ini secara visual, memudahkan pemangku kepentingan untuk memahami alur kerja.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai contoh, mari kita analisis proyek konstruksi modular dengan parameter berikut:

- Total Durasi Proyek: 12 bulan
- Anggaran Proyek: $1,200,000
- Waktu yang telah berlalu: 6 bulan
- EV pada bulan ke-6: $600,000
- PV pada bulan ke-6: $700,000
- AC pada bulan ke-6: $650,000

Langkah pertama adalah menghitung SPI dan CPI:

$$ SPI = \frac{EV}{PV} = \frac{600,000}{700,000} \approx 0.857 $$

$$ CPI = \frac{EV}{AC} = \frac{600,000}{650,000} \approx 0.923 $$

Selanjutnya, kita menghitung Earned Schedule (ES):

$$ ES = \frac{EV}{PV} \times \text{Total Durasi Proyek} = \frac{600,000}{700,000} \times 12 \approx 10.29 \text{ bulan} $$

Dengan demikian, kita dapat menghitung Time Variance (TV):

$$ TV = ES - \text{Waktu yang direncanakan} = 10.29 - 6 \approx 4.29 \text{ bulan} $$

Hasil ini menunjukkan bahwa proyek mengalami keterlambatan sekitar 4.29 bulan, yang memerlukan perhatian segera dari manajemen proyek untuk mengidentifikasi penyebab dan merencanakan tindakan korektif.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Teknik analisis Earned Schedule tidak hanya relevan dalam konteks konstruksi modular, tetapi juga dapat diterapkan dalam berbagai disiplin lain seperti manajemen rantai pasok, otomasi, dan manajemen biaya. Misalnya, dalam manajemen rantai pasok, analisis ES dapat membantu dalam memantau kinerja pemasok dan mengidentifikasi potensi keterlambatan dalam pengiriman bahan.

Namun, terdapat batasan dalam metodologi ini, termasuk ketergantungan pada data yang akurat dan tepat waktu. Untuk itu, penelitian masa depan harus fokus pada pengembangan alat dan teknik yang lebih canggih untuk pengumpulan data otomatis dan analisis real-time, serta integrasi dengan teknologi seperti Internet of Things (IoT) dan Big Data.

Dengan demikian, pemahaman dan penerapan teknik analisis Earned Schedule lanjutan akan terus menjadi bagian penting dari praktik terbaik dalam manajemen proyek, terutama dalam konteks industri yang terus berkembang dan berubah.