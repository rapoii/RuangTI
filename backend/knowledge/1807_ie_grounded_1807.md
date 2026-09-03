# 1807 — Redesain Produk Manufaktur dengan Pendekatan Design for Manufacture and Assembly (DfMA): Optimasi Geometri, Pengurangan Komponen, dan Integrasi Lintas Sektor

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Design for Manufacture and Assembly (DfMA) merupakan salah satu metodologi rekayasa paling strategis dalam disiplin Teknik Industri modern, karena menjembatani kesenjangan fundamental antara fungsi desain produk (engineering design) dengan realita operasional lantai pabrik (manufacturing reality). Amirullah dan Jakaria (2024) dalam studi terindeks DOI [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309) mendemonstrasikan penerapan DfMA pada kasus redesain *coffee enema basket* — sebuah perangkat medis rumah tangga yang memiliki kompleksitas geometri cukup tinggi (terdiri dari badan saringan, pegangan, kait suspensi, dan elemen penjepit) namun dirancang dengan pendekatan konvensional tanpa memperhatikan prinsip *design efficiency*. Temuan mereka menunjukkan bahwa desain awal produk mengandung komponen berlebih (*redundant parts*) yang dapat dieliminasi tanpa mengorbankan fungsi utama, sehingga menurunkan waktu perakitan, biaya produksi, dan tingkat kecacatan (*defect rate*). Pendekatan DfMA yang mereka adopsi berangkat dari dua pilar analitis utama: (i) Design for Manufacture (DFM), yang mengoptimalkan proses fabrikasi individual零件, dan (ii) Design for Assembly (DFA), yang meminimalkan jumlah komponen serta operasi penyambungan.

Dalam konteks makro-industri, urgensi DfMA diperkuat oleh data empiris dari literatur sekunder yang dikaji oleh Islam (2024) [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21), yang mengevaluasi integrasi DfMA ke dalam kerangka evaluasi multi-kriteria berbasis Building Information Modelling (BIM) untuk konstruksi jembatan pracetak. Islam menemukan bahwa keputusan desain jembatan secara konvensional hanya didasarkan pada dua variabel — biaya material dan kecukupan struktural — padahal variabel manufaktur, transportasi, pengangkatan (*lifting*), dan ereksi belum dimasukkan ke dalam proses keputusan. Akibatnya, *buildability problems* baru terdeteksi pada tahap produksi *shop drawing* atau bahkan di lapangan, ketika desain sudah *frozen*, cetakan sudah dipotong, dan koreksi hanya dimungkinkan dengan biaya *rework* yang sangat tinggi. Kedua studi ini, meskipun berasal dari domain yang sangat berbeda (alat medis vs. infrastruktur jembatan), menyepakati tesis inti yang sama: integrasi constraints manufaktur dan perakitan ke dalam fase konseptual desain menghasilkan keputusan yang secara signifikan lebih robust, efisien, dan adaptif terhadap kendala operasional.

Konteks ekonomi global juga memperkuat urgensi DfMA. Dalam industri manufaktur kontemporer, komponen *bill of materials* (BOM) yang tidak efisien akan meningkatkan *inventory carrying cost*, kompleksitas rantai pasok, dan waktu siklus produksi. Sebagai contoh, pada industri peralatan medis ringan di mana *coffee enema basket* berada, margin produk sangat tipis sehingga setiap pengurangan satu komponen dapat memberikan dampak profitabilitas yang terukur. Studi Amirullah dan Jakaria (2024) mengonfirmasi bahwa redesain berbasis DfMA mampu mereduksi jumlah komponen hingga lebih dari 30%, dengan konsekuensi langsung pada penurunan biaya produksi dan peningkatan *time-to-market*. Dengan demikian, DfMA bukan sekadar metodologi optimasi, melainkan kerangka keputusan strategis yang menjangkau seluruh siklus hidup produk (*product life cycle*) — dari konsep hingga daur ulang.

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoretis DfMA yang digunakan dalam kedua literatur rujukan dibangun di atas empat pilar fundamental: (i) pengurangan jumlah komponen, (ii) standarisasi, (iii) modularisasi, dan (iv) simplifikasi operasi perakitan. Boothroyd dan Dewhurst (1983, yang menjadi referensi klasik dalam kedua paper) memperkenalkan dua metrik kuantitatif utama yang akan kita formulasikan secara eksplisit.

**Indeks Efisiensi DFA (Design for Assembly Efficiency).**

Metrik pertama dan paling sederhana adalah rasio antara jumlah minimum komponen teoretis yang dibutuhkan untuk memenuhi fungsi desain terhadap jumlah komponen aktual pada desain:

$$E_{DFA} = \frac{N_{min}}{N_a} \times 100\%$$

dengan $N_{min}$ = jumlah minimum komponen yang diperlukan (ditentukan dari analisis fungsi-fungsi esensial), dan $N_a$ = jumlah komponen aktual pada desain. Semakin mendekati 100%, semakin efisien desain tersebut. Amirullah dan Jakaria (2024) menerapkan rumus ini secara langsung pada desain *coffee enema basket*, di mana $N_{min}$ ditentukan berdasarkan analisis fungsi (penampung, penyaringan, suspensi, pegangan), dan $N_a$ dihitung dari BOM desain awal.

**Waktu Perakitan Total (Total Assembly Time).**

Waktu perakitan total didefinisikan sebagai:

$$T_a = \sum_{i=1}^{N_a} t_{ai} = \sum_{i=1}^{N_a} \left( t_{insert,i} + t_{align,i} + t_{fasten,i} + t_{release,i} \right)$$

dengan $t_{ai}$ = waktu operasi perakitan untuk komponen ke-$i$, yang didekomposisi menjadi empat sub-waktu sesuai klasifikasi manual handling Boothroyd: insertion, alignment, fastening (jika ada sekrup/paku keling), dan release. Untuk desain yang menggunakan pengelasan atau operasi non-baut, parameter $t_{fasten,i}$ dapat diganti dengan $t_{weld,i}$ yang mengestimasi waktu pengelasan berdasarkan panjang las dan posisi.

**Estimasi Biaya Perakitan.**

$$C_a = T_a \cdot W_{lab} + \sum_{i=1}^{N_a} C_{fastener,i}$$

dengan $W_{lab}$ = tarif tenaga kerja per satuan waktu (misalnya Rp 25.000/jam untuk operator produksi di Indonesia), dan $C_{fastener,i}$ = biaya pengikat (sekrup, baut, paku keling) per komponen ke-$i$. Total biaya fabrikasi dan perakitan menjadi:

$$C_{total} = C_m + C_a$$

dengan $C_m$ = biaya material + biaya proses fabrikasi (yang pada gilirannya dipengaruhi oleh Design for Manufacture).

**Boothroyd-Dewhurst DFA Index.**

Untuk sistem yang lebih kompleks, indeks DFA dapat dihitung menggunakan formula tertimbang:

$$D_{index} = \frac{1}{N_a \cdot T_{max}} \sum_{i=1}^{N_a} t_{ai} \cdot \alpha_i$$

dengan $\alpha_i \in \{0.8, 1.0, 1.2\}$ adalah faktor koreksi berdasarkan tingkat kesulitan handling komponen (ringan, sedang, berat), dan $T_{max}$ = waktu perakitan target yang ditetapkan oleh manajemen. Desain dianggap memenuhi target jika $D_{index} \leq 1.0$.

**Kerangka AHP-MCDA (untuk aplikasi BIM-DfMA Islam, 2024).**

Untuk konteks multi-kriteria seperti jembatan pracetak, Islam (2024) mengintegrasikan DfMA ke dalam Analytical Hierarchy Process dengan bobot:

$$S_j = \sum_{k=1}^{K} w_k \cdot s_{jk}$$

dengan $S_j$ = skor total alternatif desain ke-$j$, $w_k$ = bobot kriteria ke-$k$ (misalnya biaya, waktu ereksi, jumlah sambungan, kemampuan transportasi), dan $s_{jk}$ = skor ternormalisasi alternatif $j$ pada kriteria $k$. Kriteria DfMA yang dimasukkan termasuk: jumlah segmen pracetak, jumlah sambungan現場, dimensi maksimum untuk transportasi, dan titik angkat (*lifting points*).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan sintesis dari Amirullah & Jakaria (2024) dan Islam (2024), prosedur implementasi DfMA dapat distandardisasi menjadi delapan langkah operasional berikut:

**Langkah 1 — Analisis Fungsi Produk.** Setiap komponen dianalisis atas dasar tiga pertanyaan kritis: (a) Apakah komponen ini bergerak relatif terhadap komponen lain selama pengoperasian? (b) Apakah komponen ini memerlukan material berbeda? (c) Apakah komponen ini harus dipisahkan untuk memungkinkan proses perakitan atau pemeliharaan? Jika semua jawaban "tidak", maka komponen tersebut adalah kandidat eliminasi.

**Langkah 2 — Pembuatan Diagram Alir Proses Perakitan.** Diagram ini memvisualisasikan urutan operasi, identifikasi operasi paralel, dan pinpoint bottleneck. Amirullah & Jakaria (2024) menggunakan diagram sekuensial dengan notasi ASME standar.

**Langkah 3 — Perhitungan Baseline Metrics.** Hitung $N_a$, $T_a$, $C_a$, dan $E_{DFA}$ pada desain awal (*as-is*). Nilai-nilai ini menjadi baseline untuk mengukur perbaikan.

**Langkah 4 — Generasi Konsep Redesain.** Dengan menggunakan *morphological matrix* dan *concept screening matrix*, hasilkan minimal 3-5 alternatif desain yang menggabungkan prinsip-prinsip DfMA: integrasi fungsi (*part integration*), snap-fit代替 pengikat, dan modularisasi.

**Langkah 5 — Evaluasi dengan Kriteria DfMA.** Setiap alternatif dievaluasi terhadap (i) jumlah komponen, (ii) kompleksitas fabrikasi, (iii) kemudahan perakitan, (iv) ketersediaan material, dan (v) kepatuhan terhadap regulasi (misalnya ISO 13485 untuk alat medis).

**Langkah 6 — Prototyping dan Validasi.** Untuk produk seperti *coffee enema basket*, prototipe fisik dicetak menggunakan 3D printer dan diuji fungsional (uji beban, uji korosi, uji usability).

**Langkah 7 — Analisis Sensitivitas Biaya-Manfaat.** Bandingkan biaya investasi redesain (termasuk biaya tooling baru) dengan penghematan biaya produksi kumulatif. Payback period:

$$PBP = \frac{I_{redesign}}{\Delta C_{annual}}$$

**Langkah 8 — Implementasi dan Continuous Improvement.** Desain baru masuk ke lini produksi dengan *control plan* dan *PFMEA* (Process Failure Mode and Effects Analysis). Feedback loop ke langkah 1 untuk iterasi perbaikan.

Dalam konteks BIM-DfMA Islam (2024), prosedur ini diperluas dengan langkah tambahan: **ekstraksi informasi manufaktur otomatis dari model BIM** (dimensi, berat, jumlah baut, lokasi titik angkat) menggunakan *parametric design* dan *shared parameters*, yang kemudian menjadi input bagi algoritma MCDA. Ini memastikan bahwa constraints manufaktur dievaluasi secara bersamaan dengan constraints struktural dan biaya, bukan secara sekuensial.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk mengilustrasikan aplikasi kuantitatif, kita rekonstruksi skenario studi kasus berdasarkan data tipikal yang dilaporkan Amirullah & Jakaria (2024) untuk redesain *coffee enema basket*, dengan penyesuaian parameter agar mencerminkan realita industri manufaktur alat medis di Indonesia.

**Tabel 1. Baseline As-Is Design — Komponen Coffee Enema Basket**

| No | Komponen | Material | Proses Fabrikasi | Waktu Rakitan (detik) | Biaya Material (Rp) |
|----|----------|----------|-----------------|-----------------------|---------------------|
| 1 | Badan saringan utama | Stainless 304 | Stamping + bending | 45 | 12.500 |
| 2 | Lantai saringan (mesh) | Stainless 304 | Stamping | 30 | 8.000 |
| 3 | Cincin pengunci mesh | Stainless 304 | Machining | 25 | 6.500 |
| 4 | Pegangan vertikal (2 buah) | Stainless 304 | Tube bending | 20 | 5.000 |
| 5 | Bracket pegangan | Stainless 304 | Stamping | 18 | 4.500 |
| 6 | Baut M4 (4 buah) | Baja galvanis | Pembelian part | 12 | 1.200 |
| 7 | Kait suspensi | Stainless 304 | Wire forming | 15 | 3.000 |
| 8 | Ring pengunci kait | Stainless 304 | Machining | 10 | 2.500 |

$$N_a = 8 \text{ jenis komponen}, \quad