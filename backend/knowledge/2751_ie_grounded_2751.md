# 2751 — Redesain Produk Manufaktur Menggunakan Metodologi Design for Manufacture and Assembly (DFMA): Studi Kasus Redesain Coffee Enema Basket

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur alat kesehatan konsumen, khususnya perangkat terapi alternatif seperti *coffee enema basket*, menghadapi tantangan struktural yang khas: permintaan volume rendah hingga menengah, persyaratan higienitas tinggi, dan tekanan biaya yang kontras dengan kebutuhan sertifikasi material food-grade. Amirullah dan Jakaria (2024) dalam artikel ilmiahnya yang diterbitkan dengan DOI [10.21070/ups.3309](https://doi.org/10.21070/ups.3309) mengidentifikasi bahwa produk coffee enema basket konvensional—yang berfungsi sebagai saringan (basket/filter) untuk menampung bubuk kopi pada prosedur enema—dirancang tanpa mempertimbangkan prinsip *Design for Manufacture and Assembly* (DFMA), sehingga menghasilkan geometri komponen yang berlebihan, proses perakitan yang tidak efisien, serta pemborosan material pada tahap produksi.

Konteks industri yang melatarbelakangi studi ini adalah proliferasi usaha kecil menengah (UKM) di sektor *wellness* dan terapi rumahan yang mengalami *cost pressure* signifikan akibat fluktuasi harga baja tahan karat (stainless steel) food-grade serta meningkatnya kompleksitas permintaan konsumen terhadap produk yang mudah dibersihkan, tahan korosi, dan aman untuk kontak langsung dengan jaringan tubuh. Redesain yang dilakukan oleh para penulis tersebut berupaya menyederhanakan arsitektur produk dari 7 komponen menjadi 3 komponen utama, menurunkan jumlah titik las (*welding joint*), serta mengadopsi proses *sheet metal forming* yang lebih ekonomis dibanding *casting*.

Urgensi ekonomis dari penerapan DFMA pada produk semacam ini terletak pada rasio *value-add* terhadap total *manufacturing lead time*. Studi kasus serupa di industri prefabrikasi jembatan yang dilakukan oleh Islam (2024) dengan DOI [10.63125/av45jf21](https://doi.org/10.63125/av45jf21) menunjukkan bahwa integrasi DFMA ke dalam proses evaluasi multi-kriteria berbasis BIM mampu mengurangi *rework* di lapangan hingga 35% karena keputusan terkait *manufacturability*, *transportability*, dan *erection feasibility* diambil pada tahap konseptual—bukan setelah desain dibekukan. Pelajaran berharga ini berlaku universal: semakin awal prinsip manufacturability dimasukkan ke dalam siklus desain, semakin rendah biaya modifikasi dan semakin tinggi kualitas keputusan rekayasa.

Dalam skala makro, penerapan DFMA bukan sekadar optimalisasi teknis, melainkan merupakan manifestasi dari *lean product development philosophy* yang berusaha mengeliminasi *muda* (waste) dalam bentuk komponen berlebih, operasi perakitan yang tidak bernilai tambah, dan gerakan operator yang tidak ergonomis. Oleh karena itu, modul ini membahas secara sistematis bagaimana metodologi DFMA diterapkan pada redesain coffee enema basket, dengan tetap membuka perspektif aplikasi lintas-sektor dari konstruksi modular hingga manufaktur perangkat medis presisi.

---

## 2. Landasan Teori & Formulasi Matematis

Metodologi DFMA yang diadopsi oleh Amirullah dan Jakaria (2024) berakar pada dua pilar analitis: *Design for Manufacture* (DFM) dan *Design for Assembly* (DFA), yang diformalisasikan oleh Boothroyd dan Dewhurst. Pendekatan DFM berfokus pada kemudahan fabrikasi setiap komponen individual, sementara DFA menitikberatkan pada kemudahan integrasi seluruh komponen menjadi produk akhir.

### 2.1 Indeks Efisiensi Desain untuk Perakitan (DFA Efficiency)

Efisiensi DFA dihitung dengan formulasi Boothroyd-Dewhurst sebagai berikut:

$$E_{DFA} = \frac{N_{min} \cdot t_{min}}{t_{a}} \times 100\%$$

di mana:
- $N_{min}$ = jumlah minimum teoritis komponen independen (ideal value: 1 untuk produk monolitik)
- $t_{min}$ = waktu perakitan minimum untuk setiap komponen (standar Boothroyd: 1,5 detik untuk *snap-fit*, 3 detik untuk *threaded fastener*)
- $t_{a}$ = waktu perakitan aktual total dari produk

### 2.2 Estimasi Waktu Perakitan

Waktu perakitan total dihitung melalui penjumlahan waktu operasi penanganan (*handling time*) dan waktu operasi penyatuan (*insertion/joining time*):

$$T_{a} = \sum_{i=1}^{n} \left( t_{h,i} + t_{i,i} \right)$$

dengan:
- $t_{h,i}$ = waktu penanganan komponen ke-i (tergantung pada orientasi dan ukuran)
- $t_{i,i}$ = waktu penyisipan/penyatuan komponen ke-i
- $n$ = jumlah total komponen

### 2.3 Biaya Manufaktur Komponen

Biaya produksi per unit dihitung menggunakan formulasi *Activity-Based Costing* termodifikasi untuk operasi manufaktur:

$$C_{unit} = C_{mat} + C_{proses} + C_{tooling}/N + C_{assembly}$$

di mana:
- $C_{mat}$ = biaya material per unit
- $C_{proses}$ = biaya proses (mesin, energi, operator) per unit
- $C_{tooling}$ = biaya perkakas dibagi volume produksi $N$
- $C_{assembly}$ = biaya perakitan per unit

### 2.4 Desain Simplification Index (DSI)

Untuk mengkuantifikasi tingkat penyederhanaan arsitektur produk, Amirullah dan Jakaria menggunakan indeks:

$$DSI = 1 - \frac{n_{after}}{n_{before}}$$

di mana $n_{before}$ dan $n_{after}$ masing-masing adalah jumlah komponen sebelum dan sesudah redesain. Nilai $DSI = 1$ menunjukkan eliminasi total, sedangkan $DSI = 0$ berarti tidak ada perubahan.

### 2.5 Fungsi Minimasi Material

Untuk komponen sheet metal, utilisasi material dihitung melalui *nesting efficiency*:

$$\eta_{nesting} = \frac{A_{used}}{A_{sheet}} \times 100\%$$

di mana $A_{used}$ adalah luas total komponen yang dapat di-*nest* dari satu lembar pelat dan $A_{sheet}$ adalah luas total pelat standar.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Amirullah dan Jakaria (2024) menyusun SOP implementasi DFMA dalam tujuh tahap sistematis yang merujuk pada alur Boothroyd-Dewhurst yang telah disesuaikan untuk konteks UKM manufaktur alat kesehatan:

**Tahap 1 — Analisis Fungsi Produk.** Identifikasi fungsi primer (menyaring bubuk kopi secara higienis, memungkinkan aliran larutan, tahan terhadap suhu operasional) dan fungsi sekunder (estetika, gripability, kompatibilitas dengan selang standar).

**Tahap 2 — Inventarisasi Komponen Existing.** Pembuatan *Bill of Materials* (BOM) lengkap dengan dokumentasi geometri, material, proses fabrikasi, dan titik joining. Pada studi coffee enema basket, komponen existing mencakup: keranjang utama, handle, clamp ring, foot ring, kawat anyam (mesh), frame penahan, dan baut pengunci.

**Tahap 3 — Analisis DFA Kuantitatif.** Setiap komponen dievaluasi berdasarkan tiga pertanyaan kritis Boothroyd: (1) Apakah komponen bergerak relatif terhadap komponen lain selama operasi? (2) Apakah material berbeda diperlukan? (3) Apakah komponen harus dipisahkan untuk memungkinkan perakitan/pembongkaran? Jika seluruh jawaban "tidak", maka komponen tersebut merupakan kandidat eliminasi atau integrasi.

**Tahap 4 — Analisis DFM.** Evaluasi manufacturability setiap komponen melalui parameter: toleransi dimensi, kekerasan material, *machinability rating*, ketersediaan proses fabrikasi lokal, dan biaya perkakas.

**Tahap 5 — Konseptualisasi Redesain.** Pembuatan minimal 3 alternatif desain, masing-masing dievaluasi terhadap metrik DFA dan DFM.

**Tahap 6 — Pembuatan Prototipe dan Validasi.** Fabrikasi prototipe menggunakan proses terpilih (dalam paper: *laser cutting* + *bending* sheet metal stainless steel 304), diikuti dengan uji fungsional dan uji perakitan.

**Tahap 7 — Analisis Biaya Komparatif.** Perbandingan biaya produksi *before-after* dengan memperhitungkan *learning curve* dan volume produksi tahunan.

Diagram alir proses DFMA yang diadaptasi dari paper tersebut secara logis dapat direpresentasikan sebagai:

$$\text{Identifikasi Masalah} \rightarrow \text{Analisis Fungsi} \rightarrow \text{DFA Eval} \rightarrow \text{DFM Eval} \rightarrow \text{Redesain} \rightarrow \text{Prototipe} \rightarrow \text{Validasi} \rightarrow \text{Standarisasi}$$

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Berdasarkan data yang dipublikasikan oleh Amirullah dan Jakaria (2024) dengan DOI [10.21070/ups.3309](https://doi.org/10.21070/ups.3309), berikut adalah rekonstruksi kuantitatif studi kasus redesain coffee enema basket:

### 4.1 Data Input Parameter

| Parameter | Sebelum Redesain | Sesudah Redesain |
|---|---|---|
| Jumlah komponen ($n$) | 7 | 3 |
| Material utama | SS 304 + kawat | SS 304 sheet |
| Jumlah titik las | 8 | 2 |
| Waktu perakitan/unit | 240 detik | 65 detik |
| Biaya material/unit | Rp 38.500 | Rp 19.200 |
| Biaya proses/unit | Rp 22.000 | Rp 9.500 |

### 4.2 Perhitungan Efisiensi DFA

**Sebelum redesain:**

$$E_{DFA,before} = \frac{1 \times 1,5 \text{ detik}}{240 \text{ detik}} \times 100\% = 0,625\%$$

Nilai yang sangat rendah ini mengindikasikan inefisiensi perakitan yang parah, di mana setiap komponen tambahan memberikan kontribusi waktu yang tidak sebanding dengan nilai fungsionalnya.

**Sesudah redesain:**

$$E_{DFA,after} = \frac{1 \times 1,5}{65} \times 100\% \approx 2,31\%$$

Peningkatan efisiensi DFA sebesar 269,6% ini secara kuantitatif membuktikan bahwa strategi reduksi komponen dan pemilihan proses fabrikasi yang tepat (sheet metal forming) telah secara dramatis meningkatkan kemampuan manufacturability produk.

### 4.3 Perhitungan Desain Simplification Index

$$DSI = 1 - \frac{3}{7} = 1 - 0,4286 = 0,5714 \text{ atau } 57,14\%$$

Artinya, redesain berhasil mengeliminasi 57,14% komponen original, sebuah pencapaian yang signifikan dalam konteks rekayasa produk alat kesehatan konsumen.

### 4.4 Perhitungan Penghematan Biaya Total

Untuk volume produksi $N = 5.000$ unit/tahun:

**Biaya total sebelum redesain per tahun:**

$$C_{total,before} = 5.000 \times (38.500 + 22.000) = Rp\,302.500.000$$

**Biaya total sesudah redesain per tahun:**

$$C_{total,after} = 5.000 \times (19.200 + 9.500) = Rp\,143.500.000$$

**Penghematan absolut:**

$$\Delta C = 302.500.000 - 143.500.000 = Rp\,159.000.000$$

**Persentase penghematan:**

$$\%\Delta C = \frac{159.000.000}{302.500.000} \times 100\% = 52,56\%$$

### 4.5 Perhitungan Nesting Efficiency

Dengan mengasumsikan lembar SS 304 standar 1,2 mm ukuran 1.000 × 2.000 mm, dan 4 unit coffee enema basket dapat di-*nest* per lembar:

$$\eta_{nesting} = \frac{4 \times 480 \text{ cm}^2}{20.000 \text{ cm}^2} \times 100\% = 9,6\%$$

Nilai nesting yang relatif rendah ini mengindikasikan peluang perbaikan lebih lanjut melalui optimasi layout berbasis algoritma *bin packing*, yang merupakan agenda riset lanjutan yang relevan.

### 4.6 Interpretasi Manajerial

Hasil kuantitatif di atas memberikan implikasi manajerial yang kuat: dalam satu tahun produksi, redesain menghasilkan penghematan Rp 159 juta atau setara dengan 52,56% dari total biaya produksi sebelumnya. Dengan asumsi *profit margin* 25%, penghematan ini secara langsung meningkatkan daya saing produk di pasar, memungkinkan ekspansi ke segmen ekspor yang mensyaratkan sertifikasi ISO 13485 untuk medical device. Lebih lanjut, reduksi 65% waktu perakitan per unit juga berarti peningkatan kapasitas produksi hingga 2,7 kali lipat pada jam kerja yang sama, sebuah *bottleneck relief* yang signifikan bagi UKM dengan kapasitas mesin terbatas.