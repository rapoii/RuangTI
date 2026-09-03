# 1871 — Redesain Produk Manufaktur Menggunakan Prinsip Design for Manufacture and Assembly (DFMA): Studi Kasus Redesain Coffee Enema Basket dan Integrasi Lintas Sektor pada Konstruksi Prefabrikasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Dalam lanskap manufaktur modern yang ditandai oleh persaingan global, permintaan akan efisiensi biaya, waktu, dan kualitas produk menjadi semakin esensial, konsep *Design for Manufacture and Assembly* (DFMA) telah muncul sebagai kerangka kerja strategis yang menjembatani kesenjangan antara desain produk dengan kemampuan proses manufaktur dan perakitan. DFMA bukan sekadar pendekatan teknis, melainkan sebuah paradigma rekayasa terintegrasi yang menekankan bahwa keputusan desain harus dibuat sejak fase konseptual dengan mempertimbangkan seluruh siklus hidup produk, mulai dari pemilihan material, proses fabrikasi, logistik perakitan, hingga kemampuan inspeksi dan pemeliharaan.

Konteks industri yang diangkat oleh Amirullah dan Jakaria (2024) dalam artikelnya di *Peer-Reviewed Journal* dengan DOI [10.21070/ups.3309](https://doi.org/10.21070/ups.3309) menyoroti permasalahan riil pada produk *coffee enema basket*—sebuah perangkat medis-terapeutik yang digunakan dalam prosedur hidroterapi kolon. Produk ini sebelumnya memiliki desain dengan tingkat kompleksitas perakitan yang tinggi, jumlah komponen berlebih, dan tahapan manufaktur yang tidak optimal. Redesain dilakukan bukan semata untuk menurunkan biaya, melainkan juga untuk meningkatkan keselamatan pasien, konsistensi higienitas, dan kepatuhan terhadap standar perangkat medis. Temuan utama penulis menunjukkan bahwa penerapan DFMA menghasilkan simplifikasi komponen secara signifikan, peningkatan efisiensi perakitan, serta reduksi biaya produksi tanpa mengorbankan fungsi terapeutik produk.

Urgensi ekonomis dari penerapan DFMA diperkuat oleh literatur pendukung karya Islam (2024) yang dipublikasikan di *Journal of Sustainable Development and Policy* dengan DOI [10.63125/av45jf21](https://doi.org/10.63125/av45jf21). Studi tersebut menyoroti bahwa dalam industri konstruksi jembatan prefabrikasi, keputusan desain yang hanya didasarkan pada biaya dan kecukupan struktural cenderung mengabaikan pengetahuan manufaktur, transportasi, pengangkatan, dan ereksi pada tahap konseptual. Akibatnya, masalah *buildability* baru teridentifikasi pada tahap produksi gambar kerja atau di lapangan, ketika desain sudah "beku", cetakan sudah dipotong, dan koreksi hanya mungkin dilakukan dengan biaya dan waktu yang sangat besar. Perspektif ini menegaskan bahwa DFMA bukan pendekatan yang eksklusif untuk produk konsumen skala kecil, melainkan relevan secara universal di seluruh rantai pasok manufaktur—mulai dari perangkat medis hingga infrastruktur sipil berskala besar.

Secara strategis, DFMA menawarkan tiga manfaat utama: (1) pengurangan jumlah komponen melalui eliminasi bagian yang tidak menambah nilai fungsional; (2) standarisasi dan modularisasi untuk mempercepat perakitan; serta (3) optimasi material dan proses untuk menurunkan biaya produksi total. Dalam konteks Manajemen Operasi, DFMA merupakan turunan langsung dari metodologi *Value Engineering* yang dipopulerkan oleh Lawrence Miles, dengan perluasan pada dimensi kemampuan manufaktur dan perakitan. Pendekatan sistematis ini juga selaras dengan filosofi *Lean Manufacturing* yang mengeliminasi *muda* (waste) pada seluruh rantai nilai.

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoretis DFMA yang digunakan dalam penelitian Amirullah dan Jakaria (2024) bersandar pada metodologi *Boothroyd-Dewhurst*, yang membagi proses evaluasi menjadi dua fase utama: *Design for Assembly* (DFA) dan *Design for Manufacture* (DFM). Pendekatan ini menggunakan dua indikator efisiensi utama yang diformulasikan sebagai berikut.

**Efisiensi Desain** (*Design Efficiency*, DE) didefinisikan sebagai rasio antara jumlah minimum komponen yang secara teoretis diperlukan untuk memenuhi fungsi produk terhadap jumlah total komponen aktual:

$$DE = \frac{N_{mva}}{N_t} \times 100\%$$

di mana $N_{mva}$ adalah jumlah minimum komponen untuk assembly ideal (*minimum theoretical number of components*) dan $N_t$ adalah jumlah total komponen aktual dalam desain.

**Efisiensi Perakitan** (*Assembly Efficiency*, AE) mengukur rasio waktu perakitan teoritis minimum terhadap waktu perakitan aktual:

$$AE = \frac{t_{ma}}{t_a} \times 100\%$$

di mana $t_{ma}$ adalah waktu perakitan minimum dan $t_a$ adalah waktu perakitan aktual. Kedua metrik ini bersama-sama membentuk **Indeks DFMA** yang dikompositkan melalui pembobotan:

$$I_{DfMA} = w_1 \cdot DE + w_2 \cdot AE + w_3 \cdot CM$$

di mana $w_1 + w_2 + w_3 = 1$ dan $CM$ adalah indeks kemampuan manufaktur (*manufacturability index*).

Pada dimensi biaya, total biaya produksi produk diformulasikan sebagai:

$$C_{total} = C_m + C_a + C_q + C_s$$

dengan $C_m$ adalah biaya material, $C_a$ adalah biaya perakitan, $C_q$ adalah biaya kualitas (inspeksi, rework, scrap), dan $C_s$ adalah biaya overhead serta logistik. Reduksi biaya melalui DFMA terjadi ketika penurunan jumlah bagian menghasilkan efek multiplikatif pada seluruh komponen biaya, karena setiap komponen yang dieliminasi menghilangkan biaya material, biaya penanganan, biaya pengelasan/penyambungan, biaya pengujian, dan biaya garansi.

Untuk analisis multi-kriteria yang relevan dengan perluasan DFMA pada konteks konstruksi prefabrikasi (Islam, 2024), formula keputusan berbobot (*weighted scoring model*) digunakan:

$$V_i = \sum_{j=1}^{n} w_j \cdot x_{ij}$$

di mana $V_i$ adalah skor total alternatif desain ke-$i$, $w_j$ adalah bobot kriteria ke-$j$, dan $x_{ij}$ adalah skor ternormalisasi alternatif ke-$i$ pada kriteria ke-$j$. Normalisasi skor dilakukan menggunakan:

$$\hat{x}_{ij} = \frac{x_{ij} - x_{j}^{min}}{x_{j}^{max} - x_{j}^{min}}$$

di mana $x_j^{min}$ dan $x_j^{max}$ berturut-turut adalah nilai minimum dan maksimum kriteria ke-$j$ di seluruh alternatif.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Prosedur operasional DFMA mengikuti alur sistematis yang terdiri atas delapan tahapan utama, sebagaimana diadaptasi dari penelitian Amirullah dan Jakaria (2024) dengan penyempurnaan lintas-sektor merujuk pada kerangka Islam (2024):

**Tahap 1 — Analisis Fungsi Produk.** Setiap komponen diidentifikasi kontribusinya terhadap fungsi primer produk menggunakan diagram FAST (*Function Analysis System Technique*). Komponen yang tidak menambah nilai terhadap fungsi gerak, energi, material, atau sinyal dicatat sebagai kandidat eliminasi.

**Tahap 2 — Pembuatan Diagram Pemboman.** Struktur produk divisualisasikan dalam diagram eksplosi (*exploded view*) yang menunjukkan hubungan kinematik antar komponen, titik-titik pengelasan, dan mekanisme penjepit. Diagram ini menjadi basis perhitungan $N_t$ dan identifikasi *handling code*.

**Tahap 3 — Perhitungan Indeks DFA Awal.** Menggunakan formulasi pada Bagian 2, dihitung $DE$ dan $AE$ baseline. Komponen-komponen dievaluasi menggunakan matriks keputusan Boothroyd yang mempertimbangkan tiga kriteria utama: jumlah fitur, kemudahan penanganan, dan jumlah operasi assembly.

**Tahap 4 — Aplikasi Aturan Desain.** Aturan praktis yang diterapkan antara lain: (a) minimalisasi arah inserti komponen; (b) eliminasi komponen yang hanya berfungsi sebagai *fastener* dengan mengintegrasikannya ke komponen utama melalui fitur *snap-fit* atau *integral attachment*; (c) penggunaan material standar yang tersedia di pasar; serta (d) penerapan toleransi yang realistis sesuai kapabilitas proses.

**Tahap 5 — Generasi Alternatif Desain.** Berdasarkan hasil analisis, dirancang minimal dua alternatif desain yang memenuhi fungsi dengan jumlah komponen lebih sedikit.

**Tahap 6 — Validasi Manufaktur (DFM).** Setiap alternatif dievaluasi kelayakannya terhadap proses fabrikasi yang tersedia: stamping, injection molding, sheet metal forming, atau CNC machining. Indeks kemampuan manufaktur dihitung menggunakan *Design for Manufacture Handbook* dengan formula:

$$CM = \prod_{k=1}^{K} c_k \cdot f_k(v_k)$$

di mana $c_k$ adalah koefisien kesulitan proses ke-$k$ dan $f_k(v_k)$ adalah fungsi volume-produksi untuk proses tersebut.

**Tahap 7 — Penilaian Multi-Kriteria** (diperluas dari Islam, 2024). Untuk proyek skala besar, integrasi dengan platform Building Information Modelling (BIM) digunakan untuk mensimulasikan transportasi, pengangkatan, dan ereksi komponen prefabrikasi. Setiap alternatif dievaluasi terhadap kriteria: biaya, berat, waktu erection, *buildability*, dan keberlanjutan lingkungan.

**Tahap 8 — Seleksi Akhir dan Prototyping.** Alternatif dengan skor $V_i$ tertinggi dipilih untuk dibuat prototipe dan diuji fungsi.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai ilustrasi kuantitatif, kami mereplikasi skenario riset Amirullah dan Jakaria (2024) untuk produk *coffee enema basket* dengan parameter industri sebagai berikut. Desain awal memiliki $N_t = 14$ komponen dengan waktu perakitan aktual $t_a = 18,5$ menit per unit. Biaya material per unit $C_m = \text{Rp } 45.000$, biaya perakitan $C_a = \text{Rp } 28.000$, biaya kualitas $C_q = \text{Rp } 8.500$, dan overhead $C_s = \text{Rp } 12.000$.

**Langkah 1 — Perhitungan baseline total biaya:**

$$C_{total}^{awal} = 45.000 + 28.000 + 8.500 + 12.000 = \text{Rp } 93.500 \text{ per unit}$$

**Langkah 2 — Analisis fungsi menggunakan diagram FAST.** Dari 14 komponen, hasil analisis menunjukkan 4 komponen dapat dieliminasi karena redundan: dua klip pengunci yang digantikan fitur *snap-fit* pada badan utama, satu ring adaptor yang difusikan ke sambungan integral, dan satu sekrup pengaman yang diganti dengan mekanisme *bayonet*.

**Langkah 3 — Desain usulan dengan $N_t = 10$ komponen.** Waktu perakitan turun menjadi $t_{a}^{baru} = 12,3$ menit (reduksi 33,5%), biaya material turun karena penggunaan satu jenis stainless steel 304 dengan ketebalan optimal $C_m^{baru} = \text{Rp } 31.500$ (reduksi 30%), biaya perakitan turun karena lebih sedikit operasi $C_a^{baru} = \text{Rp } 17.800$, biaya kualitas turun karena *rework* berkurang $C_q^{baru} = \text{Rp } 4.200$, dan overhead turun karena penyederhanaan logistik $C_s^{baru} = \text{Rp } 8.700$.

**Langkah 4 — Total biaya baru:**

$$C_{total}^{baru} = 31.500 + 17.800 + 4.200 + 8.700 = \text{Rp } 62.200 \text{ per unit}$$

**Langkah 5 — Efisiensi desain baru.** Dengan jumlah minimum teoritis $N_{mva} = 8$ (fungsi ideal