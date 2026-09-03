# 2958 — Penerapan Teknologi Blockchain untuk Pelacakan Komponen Pesawat dalam Sektor MRO (Maintenance, Repair, Overhaul)

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Blockchain for Aircraft Part Traceability in MRO (Maintenance, Repair, Overhaul)  
**Jurnal & Sitasi Utama:** Saketh Kumar Vishwakarma (2024). *Journal of Procurement and Supply Chain Management*. DOI: [https://doi.org/10.58425/jpscm.v4i3.460](https://doi.org/10.58425/jpscm.v4i3.460)  
**Sitasi Pendukung:** Hang Zhou (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.2139/ssrn.6387479](https://doi.org/10.2139/ssrn.6387479)

---

## 1. Pendahuluan dan Konteks Industri

Industri penerbangan, khususnya sektor Maintenance, Repair, and Overhaul (MRO), menghadapi tantangan yang signifikan dalam hal pelacakan dan manajemen siklus hidup komponen pesawat. Dengan meningkatnya kompleksitas sistem dan regulasi yang ketat, kebutuhan untuk solusi yang aman dan dapat diandalkan menjadi semakin mendesak. Menurut Vishwakarma (2024), penerapan teknologi blockchain dapat memberikan solusi yang inovatif untuk masalah ini dengan menawarkan sistem yang tahan terhadap manipulasi dan dapat diakses secara real-time. 

Blockchain menyediakan catatan yang tidak dapat diubah dari setiap transaksi yang terjadi dalam siklus hidup komponen pesawat, mulai dari produksi hingga pemeliharaan. Hal ini tidak hanya meningkatkan transparansi tetapi juga meningkatkan akuntabilitas dalam rantai pasokan MRO. Dalam konteks ini, Zhou (2024) menyoroti pentingnya Reliability-Centered Maintenance (RCM) yang dapat mengoptimalkan ketersediaan armada melalui pemeliharaan yang terencana dan terjadwal dengan baik. Dengan mengintegrasikan pendekatan RCM dan teknologi blockchain, industri MRO dapat mencapai efisiensi operasional yang lebih tinggi dan mengurangi risiko kegagalan komponen.

Konteks ini menunjukkan bahwa penerapan teknologi blockchain dalam MRO bukan hanya sekadar inovasi teknologi, tetapi juga merupakan langkah strategis untuk meningkatkan keselamatan dan efisiensi operasional di industri penerbangan yang sangat kompetitif.

## 2. Landasan Teori & Formulasi Matematis

Dalam penelitian ini, Vishwakarma (2024) mengusulkan arsitektur blockchain yang diizinkan, yang memanfaatkan kontrak pintar untuk verifikasi kepatuhan otomatis dan penjadwalan pemeliharaan. Model matematis yang diusulkan dapat dijelaskan sebagai berikut:

1. **Model Ketersediaan**:
   Ketersediaan sistem dapat dinyatakan dengan rumus:
   $$ A = \frac{U}{U + D} $$
   di mana:
   - \( A \) adalah ketersediaan,
   - \( U \) adalah waktu operasi yang tidak terganggu,
   - \( D \) adalah waktu henti.

2. **Model Pemeliharaan**:
   Penjadwalan pemeliharaan dapat dioptimalkan dengan menggunakan model RCM yang mempertimbangkan waktu siklus pemeliharaan dan tingkat keausan komponen:
   $$ T_{next} = T_{current} + \frac{L}{R} $$
   di mana:
   - \( T_{next} \) adalah waktu pemeliharaan berikutnya,
   - \( T_{current} \) adalah waktu pemeliharaan saat ini,
   - \( L \) adalah umur komponen,
   - \( R \) adalah laju keausan.

3. **Verifikasi Kontrak Pintar**:
   Kontrak pintar dapat diwakili dengan fungsi logika yang memverifikasi kondisi tertentu sebelum melanjutkan ke langkah berikutnya dalam proses pemeliharaan:
   $$ C = f(x_1, x_2, ..., x_n) $$
   di mana \( C \) adalah hasil verifikasi, dan \( x_i \) adalah parameter yang harus dipenuhi.

Metodologi analitis yang diusulkan mencakup pengumpulan data secara real-time menggunakan Apache Kafka dan pemrosesan data dengan Apache Spark untuk memastikan data yang akurat sebelum dicatat di blockchain.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Langkah-langkah implementasi sistem blockchain dalam MRO dapat dirangkum sebagai berikut:

1. **Pengumpulan Data**:
   - Menggunakan sensor dan perangkat IoT untuk mengumpulkan data telemetri pesawat secara real-time.
   - Data dikirim ke Apache Kafka untuk pengolahan lebih lanjut.

2. **Pengolahan Data**:
   - Apache Spark digunakan untuk memproses dan menganalisis data yang diterima.
   - Validasi data dilakukan untuk memastikan keakuratan sebelum dicatat di blockchain.

3. **Pencatatan di Blockchain**:
   - Data yang telah divalidasi dicatat di dalam blockchain menggunakan arsitektur yang diizinkan.
   - Kontrak pintar digunakan untuk otomatisasi proses verifikasi dan penjadwalan pemeliharaan.

4. **Audit dan Pelaporan**:
   - Sistem menyediakan audit trail yang transparan dan dapat diakses untuk semua pihak terkait.
   - Laporan kinerja dan kepatuhan dapat dihasilkan secara otomatis untuk analisis lebih lanjut.

Diagram alir proses dapat digambarkan sebagai berikut:

```
[Pengumpulan Data] --> [Pengolahan Data] --> [Pencatatan di Blockchain] --> [Audit dan Pelaporan]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk memberikan gambaran yang lebih jelas tentang penerapan model ini, mari kita pertimbangkan sebuah studi kasus di mana sebuah maskapai penerbangan memiliki 10 pesawat dengan waktu operasi rata-rata 500 jam per bulan. Misalkan waktu henti rata-rata untuk pemeliharaan adalah 100 jam.

1. **Menghitung Ketersediaan**:
   $$ U = 500 \text{ jam}, \quad D = 100 \text{ jam} $$
   $$ A = \frac{500}{500 + 100} = \frac{500}{600} \approx 0.8333 \text{ atau } 83.33\% $$

2. **Menentukan Waktu Pemeliharaan Berikutnya**:
   Misalkan umur komponen adalah 2000 jam dan laju keausan adalah 20 jam per bulan.
   $$ T_{current} = 500 \text{ jam} $$
   $$ L = 2000 \text{ jam}, \quad R = 20 \text{ jam/bulan} $$
   $$ T_{next} = 500 + \frac{2000}{20} = 500 + 100 = 600 \text{ jam} $$

3. **Interpretasi Hasil**:
   Ketersediaan 83.33% menunjukkan bahwa pesawat dapat beroperasi dengan efisien, dan penjadwalan pemeliharaan yang tepat pada 600 jam akan membantu mencegah kegagalan komponen, meningkatkan keselamatan dan efisiensi operasional.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

Meskipun penerapan teknologi blockchain dalam MRO menawarkan banyak keuntungan, ada beberapa batasan yang perlu diperhatikan. Pertama, integrasi dengan sistem yang sudah ada dapat menjadi tantangan, terutama dalam hal interoperabilitas dan keamanan data. Selain itu, biaya implementasi awal dan pelatihan staf juga dapat menjadi penghalang bagi beberapa perusahaan.

Dibandingkan dengan metode konvensional, penggunaan blockchain dapat meningkatkan transparansi dan akuntabilitas dalam rantai pasokan, tetapi memerlukan investasi yang signifikan dalam infrastruktur teknologi. Aplikasi lintas sektor, seperti dalam industri otomotif atau manufaktur, dapat memanfaatkan prinsip yang sama untuk meningkatkan pelacakan dan manajemen siklus hidup produk.

Ke depan, agenda riset lanjutan harus fokus pada pengembangan standar industri untuk penerapan blockchain, serta eksplorasi lebih lanjut tentang bagaimana teknologi ini dapat diintegrasikan dengan kecerdasan buatan dan analitik data untuk meningkatkan efisiensi operasional di berbagai sektor industri.

Dengan demikian, penerapan teknologi blockchain dalam MRO tidak hanya menjanjikan efisiensi dan keamanan yang lebih baik, tetapi juga membuka jalan bagi inovasi yang lebih besar dalam manajemen rantai pasokan dan pemeliharaan di industri penerbangan.