# 2767 — Redesain Produk Manufaktur dengan Pendekatan Design for Manufacture and Assembly (DfMA): Integrasi Rekayasa Produk, Optimasi Perakitan, dan Efisiensi Biaya Produksi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Dalam lanskap manufaktur modern yang ditandai oleh persaingan global, tuntutan kustomisasi, serta tekanan pada efisiensi biaya dan waktu, kemampuan perusahaan untuk merancang produk yang secara simultan memenuhi kriteria fungsional, manufacturability, dan assemblability menjadi penentu strategis daya saing. Amirullah dan Jakaria (2024) dalam artikel ilmiahnya yang berjudul *Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method* menyoroti permasalahan desain produk medis sederhana—yaitu *coffee enema basket*—yang meskipun tampak sepele, ternyata menyimpan inefisiensi struktural ketika dievaluasi dengan kerangka DfMA. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309).

Konteks industri yang melatarbelakangi studi ini sangat relevan dengan dinamika produksi *consumer health products* di Indonesia, di mana banyak produk masih diproduksi dengan desain warisan (*legacy design*) tanpa melalui proses rekayasa ulang berbasis data. Produk-produk seperti *coffee enema basket* umumnya dirancang dengan mengutamakan fungsionalitas (kapasitas filtrasi, kekuatan tarik, dan resistansi terhadap korosi), namun jarang memperhatikan jumlah komponen, kesulitan perakitan, maupun biaya manufaktur kumulatif sepanjang siklus hidupnya. Akibatnya, ditemukan kondisi-kondisi inefisiensi berupa penggunaan komponen berlebih (*redundant parts*), proses pengelasan (*welding*) yang sulit distandarisasi, serta kebutuhan akan beberapa jenis fastener yang menambah kompleksitas lini perakitan.

Urgensi operasional dari penerapan DfMA semakin kuat ketika produk-produk semacam ini akan di-*scale up* produksinya untuk memenuhi permintaan pasar domestik maupun ekspor. Tanpa redesain berbasis DfMA, setiap kelemahan desain awal akan tereskalasi menjadi kerugian produksi massal. Sebagai pembanding kontekstual, Mubashir Islam (2024) dalam studinya tentang integrasi DfMA dengan Building Information Modelling (BIM) untuk evaluasi desain jembatan pracetak menunjukkan bahwa keputusan desain yang diambil tanpa mempertimbangkan aspek manufaktur, transportasi, lifting, dan ereksi akan selalu menghasilkan *buildability problems* yang baru terdeteksi pada tahap shop-drawing atau di lapangan, ketika koreksi sudah sangat mahal secara finansial dan jadwal. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21). Temuan ini, meskipun berasal dari industri konstruksi jembatan, mengandung lessons learned yang sangat transferabel ke industri produk manufaktur ringan seperti yang dikaji oleh Amirullah dan Jakaria (2024): keterlambatan keputusan desain yang *manufacture-aware* selalu berakibat pada eskalasi biaya korektif.

Dengan demikian, redesain berbasis DfMA terhadap produk sederhana seperti *coffee enema basket* memiliki signifikansi ganda: pertama, sebagai studi kasus demonstratif bahwa kerangka DfMA mampu diterapkan pada hampir semua kategori produk, dan kedua, sebagai cetak biru (*blueprint*) metodologis bagi UMKM manufaktur yang ingin meningkatkan kompetitif tanpa investasi modal besar. Modul 2767 ini membahas secara mendalam landasan matematis, prosedur operasional, serta aplikasi kuantitatif dari DfMA berdasarkan kedua literatur tersebut.

---

## 2. Landasan Teori & Formulasi Matematis

Design for Manufacture and Assembly (DfMA) merupakan kerangka rekayasa integratif yang menggabungkan dua subdomain kritis: *Design for Manufacture (DFM)* yang berfokus pada optimasi proses fabrikasi individu komponen, dan *Design for Assembly (DFA)* yang berfokus pada minimasi kompleksitas perakitan produk jadi. Amirullah dan Jakaria (2024) menggunakan metodologi Boothroyd-Dewhurst sebagai backbone analitis karena dianggap paling representatif untuk produk dengan jumlah komponen rendah hingga menengah, sebagaimana lazim pada produk konsumen dan alat kesehatan sederhana.

### 2.1 Indeks DFA Boothroyd-Dewhurst

Indeks DFA pada metode Boothroyd-Dewhurst didefinisikan sebagai rasio antara jumlah minimum part teoritis yang diperlukan untuk memenuhi fungsi produk terhadap jumlah aktual part yang digunakan:

$$\text{DFA Index} = \frac{N_m}{N_t} \times 100\%$$

di mana:
- $N_m$ = jumlah minimum part yang diperlukan secara teoritis (idealnya hanya part-part yang melakukan fungsi gerakan relatif, memberikan akses, atau memisahkan material berbeda)
- $N_t$ = jumlah total aktual part dalam desain

Efisiensi perakitan juga dapat diformulasikan sebagai rasio waktu perakitan teoritis minimum terhadap waktu aktual:

$$\eta_A = \frac{t_{m}}{t_{a}} \times 100\%$$

di mana:
- $t_m$ = waktu perakitan minimum teoritis
- $t_a$ = waktu perakitan aktual (diukur dari time study)

### 2.2 Perhitungan Biaya Manufaktur

Total biaya produksi produk, menurut pendekatan DfMA, terdiri dari biaya material, biaya fabrikasi, dan biaya perakitan:

$$C_{total} = \sum_{i=1}^{N_t} \left( C_{m,i} + C_{f,i} + C_{a,i} \right)$$

di mana:
- $C_{m,i}$ = biaya material untuk part ke-$i$
- $C_{f,i}$ = biaya fabrikasi (machining, forming, stamping) untuk part ke-$i$
- $C_{a,i}$ = biaya perakitan (waktu × rate operator + biaya tooling/ fastener) untuk part ke-$i$

Untuk komponen yang memerlukan operasi joining, biaya fabrikasi mempertimbangkan parameter proses seperti welding time, jig cost, dan inspection cost:

$$C_{weld} = T_{weld} \cdot R_{welder} + C_{consumable} + C_{inspection}$$

### 2.3 Fungsi Reduksi Komponen

Parameter yang biasa digunakan untuk mengukur dampak DfMA adalah:

$$\Delta C = \frac{C_{before} - C_{after}}{C_{before}} \times 100\%$$

$$\Delta T = \frac{T_{before} - T_{after}}{T_{before}} \times 100\%$$

$$\Delta N = \frac{N_{before} - N_{after}}{N_{before}} \times 100\%$$

Amirullah dan Jakaria (2024) secara eksplisit menunjukkan bahwa ketiga parameter ini ($\Delta C$, $\Delta T$, $\Delta N$) merupakan Key Performance Indicators (KPI) utama yang harus dilaporkan dalam setiap proyek redesain DfMA, karena ketiga parameter tersebut merepresentasikan dampak triple bottom line dari sisi engineering economics.

### 2.4 Aspek DFM: *Manufacturing Efficiency*

Untuk proses fabrikasi plat logam (*sheet metal*), efisiensi manufaktur didefinisikan sebagai:

$$\eta_M = \frac{A_{utilized}}{A_{sheet}} \times 100\%$$

di mana $A_{utilized}$ adalah luas material yang terpakai untuk satu batch part dan $A_{sheet}$ adalah luas material awal. Parameter ini sangat menentukan waste rate dan biaya material dalam produksi massal.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan kedua literatur rujukan (Amirullah & Jakaria, 2024; Islam, 2024), implementasi DfMA mengikuti prosedur sistematis yang dapat distandarkan sebagai berikut:

**Tahap 1: Analisis Produk Eksisting.** Lakukan *reverse engineering* terhadap produk lama, identifikasi seluruh komponen, gambar skematik perakitan, dan inventarisasi seluruh fitur fungsional. Buat Bill of Materials (BOM) lengkap dengan spesifikasi dimensi, material, dan proses fabrikasi.

**Tahap 2: Time Study dan Cost Analysis Baseline.** Lakukan pengukuran waktu perakitan aktual ($t_a$) menggunakan metode *stopwatch time study* dengan rating factor sesuai standar ILO. Hitung biaya produksi baseline menggunakan persamaan $C_{total}$.

**Tahap 3: Aplikasi Kriteria Minimasi Part Boothroyd-Dewhurst.** Evaluasi setiap komponen terhadap tiga pertanyaan kritis Boothroyd: (a) Apakah part tersebut melakukan gerakan relatif terhadap part lain selama operasi produk? (b) Apakah part tersebut diperlukan untuk akses (assembly/disassembly/maintenance)? (c) Apakah part tersebut terbuat dari material yang berbeda atau memerlukan pemisahan karena proses manufacturing? Jika seluruh jawaban adalah "tidak", maka part tersebut kandidat eliminasi.

**Tahap 4: Generasi Konsep Redesain.** Buat minimal 3 alternatif desain dengan tingkat integrasi yang berbeda (misalnya: monolithic single-piece, two-piece dengan snap-fit, three-piece dengan modular disassembly). Gunakan morphological matrix untuk evaluasi sistematis.

**Tahap 5: Evaluasi dan Seleksi.** Hitung ulang $\text{DFA Index}$, $\eta_A$, dan $C_{total}$ untuk setiap konsep. Pilih desain dengan trade-off terbaik antara manufacturability, assemblability, dan fungsionalitas.

**Tahap 6: Prototyping dan Validasi.** Buat prototipe, lakukan uji fungsi, dan verifikasi bahwa seluruh spesifikasi teknis (kapasitas beban, resistansi korosi, food-grade compliance) tetap terpenuhi.

**Tahap 7: Dokumentasi dan Diseminasi.** Buat laporan DfMA lengkap dengan justifikasi keputusan desain, baseline perbandingan, dan rekomendasi produksi massal.

Prosedur ini selaras dengan kerangka BIM-DfMA yang diajukan Islam (2024), di mana evaluasi multi-kriteria harus memasukkan data manufacturability sejak tahap konseptual, bukan menunggu desain beku untuk kemudian dievaluasi secara post-hoc. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk memberikan gambaran empiris, berikut simulasi perhitungan yang merepresentasikan tipikal hasil redesain DfMA pada produk dengan karakteristik seperti *coffee enema basket* (produk stainless steel sheet metal dengan proses welding dan beberapa fastener).

### 4.1 Data Input Desain Eksisting (Sebelum DfMA)

Misalkan sebuah produk baseline memiliki:
- Jumlah total part: $N_{t,\text{old}} = 12$ komponen
- Jumlah minimum part teoritis: $N_m = 4$ (1 main body basket, 1 base ring, 1 handle, 1 filter mesh)
- Waktu perakitan aktual: $t_{a,\text{old}} = 480$ detik/unit
- Biaya material per unit: Rp 28.500
- Biaya fabrikasi per unit: Rp 18.200
- Biaya perakitan per unit: Rp 22.400 (termasuk 3 jenis fastener dan 1 operasi welding)
- Total biaya produksi: $C_{total,\text{old}} = 28.500 + 18.200 + 22.400 = \text{Rp }69.100$

### 4.2 Perhitungan Baseline

$$\text{DFA Index}_{\text{old}} = \frac{4}{12} \times 100\% = 33{,}33\%$$

Efisiensi perakitan (asumsi $t_m = 180$ detik untuk desain minimum):

$$\eta_{A,\text{old}} = \frac{180}{480} \times 100\% = 37{,}5\%$$

### 4.3 Desain Setelah DfMA

Melalui proses Boothroyd-Dewhurst, beberapa part dieliminasi dengan mengintegrasikan fungsinya: handle dilas langsung ke main body (menghilangkan 2 braket fastener), base ring dijadikan fitur *drawn* dari body utama (menghilangkan 1 part), dan beberapa penguat struktural dihilangkan karena redistribusi tegangan melalui analisis FEA.

Hasil desain baru:
- $N_{t,\text{new}} = 6$ komponen
- $t_{a,\text{new}} = 295$ detik/unit (berdasarkan time study baru)
- Biaya material: Rp 24.200 (pengurangan melalui better nesting)
- Biaya fabrikasi: Rp 16.800 (pengurangan operasi welding dari 4 menjadi 1)
- Biaya perakitan: Rp 12.600 (pengurangan fastener dari 3 jenis menjadi 1 jenis)
- Total: $C_{total,\text{new}} = 24.200 + 16.800 + 12.600 = \text{Rp }53.600$

### 4.4 Perhitungan Dampak DfMA

$$\Delta N = \frac{12 - 6}{12} \times 100\% = 50\%$$

$$\Delta T = \frac{480 - 295}{480} \times 100\% = 38{,}54\%$$

$$\Delta C = \frac{69.100 - 53.600}{69.100} \times 100\% = 22{,}43\%$$

Indeks DFA baru:

$$\text{DFA Index}_{\text{new}} = \frac{4}{6} \times 100\% = 66{,}67\%$$

Peningkatan efisiensi perakitan:

$$\eta_{A,\text{new}} = \frac{180}{295} \times 100\% = 61{,}02\%$$

### 4.5 Interpretasi Manajerial

Hasil kuantitatif ini menunjukkan bahwa redesain DfMA pada produk sederhana mampu memberikan penghematan biaya produksi lebih dari 22% dengan reduksi waktu perakitan hampir 39%, peningkatan DFA Index dari 33,33% menjadi 66,67%, dan peningkatan efisiensi perakitan dari 37,5% menjadi 61,02%. Pada volume produksi 10.000 unit/tahun, penghematan biaya total mencapai Rp