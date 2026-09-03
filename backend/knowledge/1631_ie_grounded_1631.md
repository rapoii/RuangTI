# 1631 — Redesain Keranjang Enema Kopi Menggunakan Metode Design for Manufacture and Assembly (DFMA) untuk Optimasi Manufaktur Alat Kesehatan Alternatif

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan alternatif di Indonesia, khususnya perangkat terapi komplementer seperti *coffee enema basket* (keranjang enema kopi), mengalami pertumbuhan permintaan yang signifikan seiring meningkatnya kesadaran masyarakat terhadap wellness holistik. Perangkat ini berfungsi sebagai wadah filtrasi bubuk kopi yang digunakan dalam prosedur enema, sehingga desainnya harus memenuhi tiga criteria simultan: higienitas food-grade, kemudahan perakitan di lini produksi, dan biaya produksi yang kompetitif untuk segmen UMKM manufaktur lokal. Amirullah dan Jakaria (2024) dalam studi peer-reviewed mereka menyoroti permasalahan fundamental bahwa desain konvensional keranjang enema kopi yang beredar di pasar Indonesia umumnya memiliki jumlah komponen berlebih, geometri yang sulit difabrikasi menggunakan proses *sheet metal forming* standar, serta urutan perakitan yang membutuhkan waktu kerja (*manual handling time*) terlalu panjang — sehingga margin keuntungan produsen tertekan dan waktu siklus produksi tidak efisien ([DOI: 10.21070/ups.3309](https://doi.org/10.21070/ups.3309)).

Urgensi ekonomis dari permasalahan ini cukup jelas. Berdasarkan logika metodologi DFMA yang diterapkan dalam naskah Amirullah dan Jakaria (2024), setiap penambahan satu komponen dalam desain akan menambah setidaknya tiga jenis biaya langsung: biaya material, biaya operasi manufaktur (seperti *stamping*, *welding*, dan *bending*), serta biaya tenaga kerja perakitan yang bersifat value-added. Dalam konteks manufaktur alat kesehatan, biaya perakitan dapat mencapai 40–60 % dari total biaya produksi (Boothroyd, Dewhurst & Knight, 2011), sehingga pengurangan jumlah part secara strategis menjadi leverage efisiensi yang sangat besar. Lebih lanjut, Islam (2024) dalam kerangka evaluasi jembatan pracetak berbasis BIM-DfMA menegaskan bahwa keputusan desain yang diambil tanpa mempertimbangkan constraints manufaktur, transportasi, lifting, dan ereksi di tahap konsep akan selalu menghasilkan *design freeze problem* — yaitu masalah buildability baru terungkap saat shop-drawing sudah final dan mould sudah dipotong ([DOI: 10.63125/av45jf21](https://doi.org/10.63125/av45jf21)). Paralel dengan kasus coffee enema basket, masalah serupa muncul saat desain dibekukan sebelum proses *tooling* produksi alat kesehatan, sehingga koreksi menjadi mahal dan terlambat.

Konteks regulasi juga turut memperkuat urgensi penerapan DFMA. Standar SNI ISO 13485 untuk perangkat medis menuntut dokumentasi desain yang *traceable* dan proses manufaktur yang konsisten. Desain dengan jumlah komponen minimal tetapi tetap memenuhi fungsi akan lebih mudah memenuhi audit kualitas dan sertifikasi. Amirullah dan Jakaria (2024) menjawab kebutuhan ini dengan mengajukan redesain sistematis berbasis metodologi Design for Manufacture and Assembly, yang secara eksplisit mempertimbangkan dua perspektif simultan: kemampuan fabrikasi (*manufacturability*) dan kemampuan perakitan (*assemblability*) ([DOI: 10.21070/ups.3309](https://doi.org/10.21070/ups.3309)). Pendekatan ini selaras dengan framework multi-kriteria yang dikembangkan Islam (2024) untuk proyek infrastruktur pracetak, membuktikan bahwa prinsip DfMA bersifat *scalable* lintas domain industri ([DOI: 10.63125/av45jf21](https://doi.org/10.63125/av45jf21)).

---

## 2. Landasan Teori & Formulasi Matematis

Metodologi DFMA yang digunakan Amirullah dan Jakaria (2024) menggabungkan dua kerangka analitik utama: **Design for Manufacture (DFM)** dan **Design for Assembly (DFA)**. DFM bertujuan memilih proses manufaktur yang paling efisien untuk setiap komponen, sementara DFA bertujuan menyederhanakan proses perakitan melalui reduksi jumlah komponen dan optimalisasi operasi penyambungan.

### 2.1 Boothroyd–Dewhurst DFA Efficiency Index

Indeks efisiensi DFA yang paling banyak diadopsi dalam literatur teknik industri adalah **Design Efficiency** versi Boothroyd, yang diformulasikan sebagai:

$$E_{DFA} = \frac{N_{min} \cdot t_{a}^{min}}{t_{a}^{actual}} \times 100\%$$

di mana:
- $E_{DFA}$ = efisiensi desain perakitan (%)
- $N_{min}$ = jumlah minimum teoritis part yang diperlukan untuk memenuhi fungsi desain (besaran integer)
- $t_{a}^{min}$ = waktu minimum teoritis per part (detik/part, default $\approx 3$ detik untuk *ideal manual insertion*)
- $t_{a}^{actual}$ = waktu aktual perakitan total yang diukur (detik)

Amirullah dan Jakaria (2024) menerapkan formula ini pada keranjang enema kopi sebelum dan sesudah redesain, menggunakan data time study lini produksi lokal ([DOI: 10.21070/ups.3309](https://doi.org/10.21070/ups.3309)).

### 2.2 Reduksi Jumlah Part dan Rasio Efisiensi

Formulasi komplementer yang biasa digunakan untuk mengukur *part reduction* adalah:

$$\Delta N = N_{before} - N_{after}$$

$$R_{reduction} = \frac{\Delta N}{N_{before}} \times 100\%$$

dengan $N_{before}$ dan $N_{after}$ masing-masing menyatakan jumlah part sebelum dan sesudah redesain.

### 2.3 Analisis Biaya Total Manufaktur

Total biaya per unit mengikuti model *activity-based costing* untuk industri perakitan:

$$C_{total} = C_{material} + C_{manufacturing} + C_{assembly} + C_{overhead}$$

dengan:
- $C_{material} = \sum_{i=1}^{N} (m_i \cdot p_i)$ — jumlah massa dan harga bahan tiap part
- $C_{manufacturing} = \sum_{i=1}^{N} (t_{m,i} \cdot r_m)$ — waktu fabrikasi dan *machine rate*
- $C_{assembly} = t_{a}^{actual} \cdot r_l$ — waktu perakitan dikalikan *labor rate*
- $C_{overhead}$ = alokasi biaya tetap per unit (utilitas, depresiasi tooling,QC)

### 2.4 Bobot Keputusan Multi-Kriteria (Pendukung)

Merujuk pada framework Islam (2024) untuk evaluasi multi-kriteria jembatan pracetak, integrasi DfMA ke dalam *decision matrix* dapat dimodelkan dengan teknik Analytical Hierarchy Process (AHP) atau *weighted-sum model*:

$$S_j = \sum_{k=1}^{K} w_k \cdot x_{j,k}$$

di mana $S_j$ adalah skor desain alternatif ke-$j$, $w_k$ adalah bobot kriteria ke-$k$ (dengan $\sum w_k = 1$), dan $x_{j,k}$ adalah nilai ternormalisasi alternatif $j$ pada kriteria $k$. Kriteria yang biasa dimasukkan antara lain: biaya produksi, waktu siklus, jumlah part, modularitas, dan kemampuan inspeksi ([DOI: 10.63125/av45jf21](https://doi.org/10.63125/av45jf21)).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Amirullah dan Jakaria (2024) menyusun SOP penerapan DFMA pada redesain coffee enema basket mengikuti lima tahapan sistematis ([DOI: 10.21070/ups.3309](https://doi.org/10.21070/ups.3309)). Prosedur ini bersifat generik dan dapat diadaptasi untuk produk sheet-metal sederhana lainnya:

**Tahap 1 — Analisis Fungsi dan Spesifikasi Produk.** Definisikan fungsi primer (memfilter dan menahan bubuk kopi saat prosedur enema), fungsi sekunder (kemudahan pembersihan, food-grade compliance), serta constraint dimensi (diameter, kapasitas filtrasi). Pada tahap ini juga.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
