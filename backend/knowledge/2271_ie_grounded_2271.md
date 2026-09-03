# 2271 — Redesain Produk Manufaktur Menggunakan Metode Design for Manufacture and Assembly (DFMA): Integrasi Optimalisasi Geometri, Efisiensi Perakitan, dan Keputusan Rekayasa Multi-Kriteria

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesain Coffee Enema Basket Menggunakan Metode Design for Manufacture and Assembly (DFMA)
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Dalam lanskap manufaktur kontemporer yang ditandai dengan kompetisi global, fragmentasi rantai pasok, dan tuntutan kustomisasi produk, metode *Design for Manufacture and Assembly* (DFMA) telah muncul sebagai kerangka kerja rekayasa fundamental yang menjembatani jurang antara desain produk dan realibilitas proses produksi. Studi yang dilakukan oleh Amirullah dan Jakaria (2024) dengan DOI [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309) menyoroti urgensi redesain Coffee Enema Basket — sebuah produk small-batch pada industri alat kesehatan rumahan — menggunakan metodologi DFMA untuk menjawab permasalahan akut berupa tingginya jumlah komponen, kompleksitas perakitan manual, serta inefisiensi biaya produksi yang menggerus margin usaha kecil-menengah.

Permasalahan ini bukan bersifat isolatif. Secara horizontal, Mubashir Islam (2024) dalam DOI [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21) menunjukkan bahwa pada industri konstruksi jembatan prefabrikasi, keputusan desain yang diambil hanya berdasarkan kriteria biaya dan kecukupan struktural — tanpa mempertimbangkan aspek manufaktur, transportasi, pengangkatan, dan ereksi — menghasilkan *buildability problems* yang baru teridentifikasi pada tahap shop-drawing atau di lapangan, ketika desain telah beku (*frozen*), cetakan telah dipotong, dan koreksi hanya mungkin dilakukan dengan biaya *rework* yang sangat tinggi. Kesamaan esensial antara kedua studi ini menunjukkan bahwa DFMA bukan sekadar metodologi, melainkan pendekatan strategis untuk mencegah *design freeze fallacy* — kondisi patologis di mana keputusan rekayasa prematur mengunci seluruh sistem produksi pada lintasan sub-optimal.

Konteks industri DFMA diperkuat oleh beberapa tren makro: (1) tekanan terhadap *time-to-market* yang semakin pendek sehingga siklus desain-produksi harus dikompresi tanpa mengorbankan kualitas; (2) adopsi *mass customization* yang menuntut arsitektur produk modular; (3) keterbatasan sumber daya material dan energi yang mengharuskan *design for sustainability*; dan (4) otomatisasi perakitan yang memerlukan toleransi geometris presisi dan minimasi *handling*. Dalam hal ini, DFMA beroperasi sebagai *upstream enabler* — keputusan yang diambil pada fase konseptual menentukan 70-80% biaya *life-cycle* produk, sehingga redesain yang dilakukan Amirullah dan Jakaria (2024) pada coffee enema basket bukan sekadar optimalisasi komponen, melainkan transformasi arsitektur produk menuju sistem yang lebih ramping, lebih murah, dan lebih cepat diproduksi.

Lebih lanjut, urgensi ekonomis DFMA dapat dikuantifikasi melalui studi-studi empiris industri yang menunjukkan bahwa reduksi satu bagian komponen pada produk rakitan dapat menurunkan biaya perakitan hingga 4-7% dan memangkas waktu siklus produksi sebesar 3-5% per bagian yang dihilangkan. Oleh karena itu, kerangka DFMA yang diterapkan dalam kedua paper tersebut bukan hanya relevan untuk produk medis atau jembatan prefabrikasi, melainkan merupakan kompetensi inti bagi setiap insinyur industri yang beroperasi pada antarmuka desain-produksi.

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoretis DFMA yang digunakan oleh Amirullah dan Jakaria (2024) berakar pada metodologi Boothroyd dan Dewhurst yang telah distandardisasi dalam ISO/TR 16355 dan diaplikasikan secara luas dalam praktik rekayasa industri. Terdapat dua pilar fundamental yang menopang analisis DFMA, yaitu *Design for Assembly* (DFA) dan *Design for Manufacture* (DFM), yang secara matematis dapat diformulasikan sebagai berikut:

**2.1 Design Efficiency Index (DEI)**

Indeks efisiensi desain mengukur proporsi bagian yang memberikan kontribusi fungsional terhadap total bagian dalam rakitan:

$$DEI = \frac{N_m}{N_t} \times 100\%$$

di mana $N_m$ adalah jumlah bagian yang diperlukan (*necessary parts*) — bagian yang melakukan fungsi mekanis, struktural, atau estetik yang tidak dapat digantikan oleh bagian lain — dan $N_t$ adalah jumlah total bagian dalam desain. Nilai $DEI$ yang tinggi mengindikasikan desain yang efisien secara struktural.

**2.2 Assembly Cost Estimation**

Perkiraan biaya perakitan total dirumuskan oleh Boothroyd sebagai:

$$C_{assembly} = \sum_{i=1}^{N_t} C_i + \sum_{j=1}^{M} T_j \cdot W_j$$

di mana $C_i$ adalah biaya komponen individual, $M$ adalah jumlah operasi perakitan, $T_j$ adalah waktu operasi perakitan ke-$j$, dan $W_j$ adalah tarif tenaga kerja per satuan waktu.

**2.3 Manufacturing Cost Index (MCI)**

Untuk komponen yang mengalami proses manufaktur, biaya produksi dapat dimodelkan sebagai:

$$C_{manufacture} = C_{material} + C_{machining} + C_{tooling} + C_{overhead}$$

di mana:

$$C_{machining} = \sum_{k=1}^{K} \left( t_{setup,k} + t_{cycle,k} \cdot Q \right) \cdot R_k$$

dengan $t_{setup,k}$ adalah waktu *setup* mesin ke-$k$, $t_{cycle,k}$ adalah waktu siklus per unit, $Q$ adalah jumlah produksi batch, dan $R_k$ adalah tarif mesin per jam.

**2.4 Redesain Benefit Ratio**

Untuk mengkuantifikasi dampak redesain, Amirullah dan Jakaria (2024) mengadopsi rasio manfaat yang didefinisikan sebagai:

$$R_{benefit} = \frac{C_{before} - C_{after}}{C_{before}} \times 100\%$$

di mana $C_{before}$ dan $C_{after}$ masing-masing adalah biaya produksi atau jumlah komponen sebelum dan sesudah redesain.

**2.5 Multi-Criteria Design Evaluation (Pendukung)**

Sebagai pengayaan teoretis, Islam (2024) memperkenalkan kerangka evaluasi multi-kriteria untuk desain jembatan prefabrikasi dengan fungsi utilitas agregat:

$$U = \sum_{i=1}^{n} w_i \cdot u_i(x_i)$$

di mana $w_i$ adalah bobot kepentingan kriteria ke-$i$, $u_i(x_i)$ adalah fungsi utilitas ternormalisasi, dan $\sum w_i = 1$. Pendekatan ini menunjukkan bahwa DFMA bukan variabel tunggal melainkan entitas multi-dimensi yang mencakup kriteria manufaktur, transportasi, ereksi, dan keberlanjutan.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi metodologi DFMA mengikuti prosedur sistematis berskala tujuh-tahap yang lazim diadopsi dalam praktik rekayasa industri, yang secara berurutan dapat diuraikan sebagai berikut:

**Tahap 1 — Analisis Fungsi Produk (Functional Analysis).** Melakukan dekomposisi fungsi produk menjadi fungsi primer, sekunder, dan estetik. Untuk coffee enema basket Amirullah dan Jakaria (2024), fungsi primer mencakup kapasitas tampung, filtrasi, dan drainase, sedangkan fungsi sekunder mencakup kestabilan struktural dan ergonomi pegangan.

**Tahap 2 — Bill of Materials (BoM) Awal.** Inventorisasi seluruh komponen awal beserta material, proses fabrikasi, dan spesifikasi geometris. Tahap ini menjadi *baseline* untuk seluruh analisis perbandingan.

**Tahap 3 — DFA Scoring (Boothroyd Method).** Setiap komponen dievaluasi menggunakan sistem skor tiga-kriteria: (1) *Handling* — apakah komponen memerlukan orientasi khusus; (2) *Insertion* — apakah memerlukan *tooling*, *force*, atau *alignment*; (3) *Securing* — apakah memerlukan operasi pengikatan tambahan. Komponen dengan skor rendah (< 3) dievaluasi untuk eliminasi atau integrasi.

**Tahap 4 — DFM Analysis.** Evaluasi proses manufaktur setiap komponen menggunakan *P-chart* dan *machinability index* untuk memastikan kesesuaian antara geometri desain dengan kapabilitas proses (stamping, injection molding, wire forming, dll.).

**Tahap 5 — Redesain Iteratif.** Penerapan prinsip-prinsip modularisasi, eliminasi fastener, integrasi fungsi, dan standardisasi komponen. Amirullah dan Jakaria (2024) menekankan penerapan *snap-fit* dan *living-hinge* untuk menggantikan mekanisme sekrup.

**Tahap 6 — Validasi & Prototyping.** Pembuatan prototipe fisik atau digital (CAD/CAM) untuk memverifikasi fungsi, kekuatan, dan kemampuan perakitan.

**Tahap 7 — Analisis Komparatif & Keputusan.** Perhitungan indikator kuantitatif (DEI, biaya, waktu) sebelum dan sesudah redesain, dilanjutkan dengan keputusan *go/no-go*.

Diagram alir proses secara visual dapat direpresentasikan sebagai: **Studi Literatur → BoM Awal → Fungsi Produk → DFA Analysis → DFM Analysis → Konsep Baru → Evaluasi → Prototipe → Validasi → Produksi**.

Standar operasional yang relevan mencakup ISO 12100 (prinsip desain keselamatan), ISO 2768 (toleransi umum), dan ASME Y14.5 (standar geometrik dimensi dan toleransi/GD&T) yang harus menjadi referensi wajib pada setiap redesain DFMA.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk mengilustrasikan implementasi DFMA secara kuantitatif, kami menyusun skenario komparatif yang merefleksikan metodologi Amirullah dan Jakaria (2024) pada coffee enema basket. Asumsikan desain awal (*baseline*) dengan parameter berikut:

- **Total komponen awal** ($N_t^{before}$): 18 bagian (termasuk badan basket, 2 pegangan, 4 baut, 4 mur, 4 ring, 2 disk filter, 1 kaki penyangga, 1 tutup)
- **Waktu perakitan awal** ($T^{before}$): 240 detik/unit
- **Tarif tenaga kerja** ($W$): Rp 5.000/menit (Rp 300.000/jam)
- **Biaya material awal** ($C_{mat}^{before}$): Rp 25.000/unit
- **Biaya komponen fasteners**: Rp 6.000/unit
- **Volume produksi** ($Q$): 5.000 unit/tahun

**Langkah 1: Perhitungan Desain Efisiensi Awal**

Setelah dilakukan analisis fungsi, ditetapkan bahwa hanya 11 bagian yang memenuhi kriteria *necessary parts* ($N_m = 11$). Dengan demikian:

$$DEI^{before} = \frac{11}{18} \times 100\% = 61,11\%$$

**Langkah 2: Identifikasi Komponen untuk Eliminasi/Integrasi**

Analisis DFA menunjukkan bahwa 4 baut, 4 mur, dan 4 ring (total 12 fastener) dapat digantikan oleh mekanisme *snap-fit* integral, sehingga komponen fastener hilang dari BoM. Disk filter (2 buah) diintegrasikan menjadi 1 unit *monolithic mesh insert*. Pegangan dilas langsung ke badan basket untuk menghilangkan 2 baut.

Desain baru (*after*) memiliki karakteristik:

- **Total komponen baru** ($N_t^{after}$): 11 bagian (badan basket terintegrasi, 1 pegangan integral, 1 mesh filter monolitik, 1 tutup *snap-fit*, 1 kaki, 6 komponen struktural minor lainnya yang tidak dapat dikonsolidasi tanpa mengorbankan fungsi)
- **Waktu perakitan baru** ($T^{after}$): 110 detik/unit (reduksi 54,2%)

**Langkah 3: Perhitungan Biaya Perakitan Baru**

$$C_{assembly}^{before} = \frac{240}{60} \times Rp\,5.000 = Rp\,20.000/\text{unit}$$

$$C_{assembly}^{after} = \frac{110}{60} \times Rp\,5.000 \approx Rp\,9.167/\text{unit}$$

**Langkah 4: Perhitungan Biaya Material Baru**

Eliminasi 12 fastener dan konsolidasi 2 disk menjadi 1 mesh menghasilkan:

$$C_{material}^{after} = Rp\,25.000 - Rp\,6.000 + Rp\,1.500 = Rp\,20.500/\text{unit}$$

**Langkah 5: Perhitungan Redesain Benefit Ratio (Biaya Total per Unit)**

$$C_{total}^{before} = Rp\,20.000 + Rp\,25.000 + Rp\,6.000 = Rp\,51.000/\text{unit}$$

$$C_{total}^{after} = Rp\,9