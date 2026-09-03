# 2479 — Redesain Produk Industri dengan Pendekatan Design for Manufacture and Assembly (DFMA): Studi Kasus Redesain Coffee Enema Basket dan Aplikasi Lintas Sektor pada Konstruksi Jembatan Pracetak

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur kontemporer menghadapi tekanan simultan dari tiga vektor strategis: peningkatan kualitas fungsional produk, pengurangan biaya produksi secara sistematis, dan percepatan *time-to-market*. Dalam konteks ini, Design for Manufacture and Assembly (DFMA) muncul sebagai kerangka metodologis yang mengintegrasikan dua disiplin utama—Design for Manufacture (DFM) dan Design for Assembly (DFA)—ke dalam satu alur keputusan rekayasa yang koheren. Amirullah dan Jakaria (2024) dalam studinya yang dipublikasikan dengan DOI [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309) mendemonstrasikan aplikasi DFMA pada kasus nyata redesain *coffee enema basket*, sebuah produk alat kesehatan rumah tangga yang sebelumnya memiliki geometri kompleks dengan jumlah komponen berlebih, prosedur perakitan non-standar, serta biaya produksi yang tidak kompetitif. Studi ini mengisi celah literatur yang selama ini didominasi oleh aplikasi DFMA pada produk *high-volume* seperti otomotif dan elektronik konsumen, sedangkan aplikasi pada produk *low-volume specialty* masih relatif terbatas (Amirullah & Jakaria, 2024).

Urgensi operasional redesain tersebut tidak terlepas dari fakta bahwa desain asli *coffee enema basket* mengandung sejumlah缺陷 struktural: (i) penggunaan material stainless steel yang terlalu tebal sehingga menaikkan massa dan biaya material; (ii) geometri anyaman (*mesh basket*) yang memerlukan proses brazing multi-tahap; dan (iii) jumlah total part yang melebihi kebutuhan fungsional minimum. Ketiga缺陷 ini secara langsung berkontribusi pada pembengkakan biaya produksi, peningkatan defect rate pada lini perakitan, serta keluhan pengguna terkait ergonomi. Pendekatan DFMA yang diadopsi oleh Amirullah dan Jakaria (2024) menjawab tantangan tersebut dengan melakukan dekonstruksi sistematis terhadap setiap part menggunakan metodologi Boehrighn-DFA dan Boothroyd-Dewhurst DFM, sehingga diperoleh desain usulan yang memiliki karakteristik *design efficiency* lebih tinggi, *assembly time* lebih rendah, dan *total production cost* yang turun signifikan.

Pada tataran makro, urgensi DFMA juga dikonfirmasi oleh Islam (2024) dengan DOI [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21) yang melaporkan bahwa pada industri konstruksi jembatan pracetak, keputusan desain yang diambil hanya berdasarkan pertimbangan biaya dan kecukupan struktural—tanpa memasukkan pengetahuan manufaktur, transportasi, pengangkatan, dan ereksi—mengakibatkan masalah *buildability* yang baru teridentifikasi saat *shop-drawing* telah dibekukan dan cetakan telah dipotong. Persoalan ini identik dengan缺陷 yang diidentifikasi Amirullah dan Jakaria (2024): keputusan desain yang diambil pada fase *concept* tanpa umpan balik dari fase *manufacture* dan *assembly* selalu berujung pada inefisiensi struktural produk. Kedua studi ini saling meneguhkan bahwa DFMA bukan sekadar metodologi reduksi biaya, melainkan sebuah paradigma *concurrent engineering* yang menggeser titik pengambilan keputusan kritis ke hulu, sebelum geometri dan toleransi produk dibekukan (Amirullah & Jakaria, 2024; Islam, 2024).

Konteks ekonomi yang melatari penerapan DFMA juga perlu diperhatikan. Dalam studi Amirullah dan Jakaria (2024), perhitungan biaya per unit pada desain asli menunjukkan angka yang tidak kompetitif untuk pasar alat kesehatan rumah tangga di Indonesia, di mana margin produk *medical-grade home appliance* sangat sensitif terhadap efisiensi produksi. Dengan metodologi DFMA, redesain tidak hanya menyederhanakan struktur produk tetapi juga membuka peluang standardisasi komponen, substitusi material dengan grade yang lebih sesuai, dan penggunaan proses fabrikasi *sheet metal forming* menggantikan brazing—semuanya berkontribusi pada peningkatan margin produk secara terukur. Lebih jauh, Islam (2024) menekankan bahwa integrasi DFMA ke dalam kerangka Building Information Modelling (BIM) memungkinkan evaluasi multi-kriteria yang mempertimbangkan tidak hanya biaya tetapi juga manufacturability, transportability, liftability, dan erectability secara simultan, sehingga menghasilkan keputusan desain yang lebih robust terhadap variabilitas rantai pasok konstruksi.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoritis DFMA yang digunakan oleh Amirullah dan Jakaria (2024) berakar pada dua pilar utama: Boothroyd-Dewhurst Design for Manufacture and Assembly Methodology serta Boehringer Design for Assembly Index. Kedua pilar ini menyediakan formulasi kuantitatif yang memungkinkan evaluasi objektif terhadap alternatif desain.

### 2.1 Design for Manufacture (DFM) — Prinsip Minimisasi Biaya Material dan Proses

Prinsip pertama DFM adalah meminimalkan biaya produksi per unit, yang dapat diformulasikan sebagai berikut:

$$C_{unit} = C_{material} + C_{process} + C_{assembly} + C_{overhead}$$

di mana $C_{unit}$ adalah biaya total per unit, $C_{material}$ adalah biaya material, $C_{process}$ adalah biaya proses manufaktur (machining, forming, joining), $C_{assembly}$ adalah biaya perakitan, dan $C_{overhead}$ adalah biaya overhead pabrik. Amirullah dan Jakaria (2024) menunjukkan bahwa redesain *coffee enema basket* berhasil menurunkan $C_{unit}$ secara signifikan melalui tiga intervensi utama: (i) reduksi ketebalan stainless steel dari 1.2 mm menjadi 0.8 mm yang memenuhi syarat food-grade sekaligus mengurangi massa dan biaya material; (ii) penggantian proses brazing multi-tahap dengan *laser welding single-pass*; dan (iii) eliminasi dua part non-struktural yang sebelumnya berfungsi sebagai bracket penguat.

Untuk proses fabrikasi lembaran logam (*sheet metal*), biaya proses dapat dimodelkan sebagai:

$$C_{process} = (t_{setup} \cdot R_{labor} + t_{cycle} \cdot R_{labor}) + C_{tooling} \cdot N_{parts}^{-1}$$

di mana $t_{setup}$ adalah waktu setup mesin, $R_{labor}$ adalah tarif tenaga kerja per jam, $t_{cycle}$ adalah waktu siklus per unit, $C_{tooling}$ adalah biaya tooling, dan $N_{parts}$ adalah jumlah unit yang diproduksi dalam satu batch. Formula ini menjelaskan mengapa standardisasi proses dan peningkatan volume batch melalui desain yang kompatibel dengan lini produksi akan menurunkan $C_{unit}$ secara non-linear.

### 2.2 Design for Assembly (DFA) — Boothroyd-Dewhurst Methodology

Metrik utama DFA menurut Boothroyd dan Dewhurst adalah **Design Efficiency** ($\eta_{DAFA}$), yang didefinisikan sebagai:

$$\eta_{DAFA} = \frac{N_{min}}{N_{a}} \times 100\%$$

di mana $N_{min}$ adalah jumlah minimum teoritis part yang diperlukan untuk memenuhi fungsi produk (idealnya 1 untuk produk monolitik), dan $N_{a}$ adalah jumlah aktual part dalam desain. Amirullah dan Jakaria (2024) melaporkan bahwa desain asli *coffee enema basket* memiliki $N_a = 14$ part dengan $N_{min} = 7$, menghasilkan $\eta_{DAFA} = 50\%$. Setelah redesain dengan pendekatan DFMA, dicapai $N_a = 9$ part dengan $N_{min} = 7$, sehingga $\eta_{DAFA}$ naik menjadi $77.8\%$.

Selain itu, DFA menggunakan **DFA Index** yang menggabungkan jumlah part dan waktu perakitan:

$$\text{DFA Index} = N_a \cdot \bar{t}_a \quad \text{(dalam detik-part)}$$

di mana $\bar{t}_a$ adalah waktu rata-rata penanganan per part (handling + insertion + fastening). Pada desain asli Amirullah & Jakaria (2024), dengan $N_a = 14$ dan $\bar{t}_a \approx 18$ detik, diperoleh DFA Index = 252 detik-part. Setelah redesain, dengan $N_a = 9$ dan $\bar{t}_a \approx 14$ detik (karena eliminasi proses brazing dan penyederhanaan alignment), DFA Index turun menjadi 126 detik-part, atau turun 50%.

### 2.3 Cost-Benefit Analysis Redesain

Amirullah dan Jakaria (2024) juga melakukan analisis biaya-manfaat terhadap investasi redesain dengan menggunakan rumus *payback period*:

$$T_{payback} = \frac{C_{redesign}}{(C_{unit}^{old} - C_{unit}^{new}) \cdot V_{annual}}$$

di mana $C_{redesign}$ adalah biaya investasi redesain (termasuk CAD, prototyping, tooling baru), $C_{unit}^{old}$ dan $C_{unit}^{new}$ adalah biaya produksi per unit sebelum dan sesudah redesain, dan $V_{annual}$ adalah volume produksi tahunan.

### 2.4 Multi-Criteria Evaluation Framework (Pendukung Islam, 2024)

Untuk konteks aplikasi lintas sektor pada jembatan pracetak, Islam (2024) mengusulkan kerangka Multi-Criteria Evaluation (MCE) yang mengintegrasikan DFMA ke dalam BIM. Kerangka ini menggunakan **weighted scoring**:

$$S_{i} = \sum_{j=1}^{n} w_j \cdot s_{ij}$$

di mana $S_i$ adalah skor total untuk alternatif desain $i$, $w_j$ adalah bobot kriteria $j$ (dengan $\sum w_j = 1$), dan $s_{ij}$ adalah skor ternormalisasi alternatif $i$ pada kriteria $j$. Kriteria yang digunakan antara lain: manufacturability (DfMA score), transportability, liftability, erectability, structural adequacy, dan life-cycle cost. Islam (2024) menekankan bahwa integrasi BIM-DFMA ini memungkinkan deteksi dini terhadap *clash* geometris yang sebelumnya baru ditemukan saat fabrikasi, sehingga mencegah *rework cost* yang mahal.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Metodologi DFMA yang diterapkan oleh Amirullah dan Jakaria (2024) mengikuti prosedur operasional standar yang terdiri dari tujuh tahap sistematis. Prosedur ini juga bersifat *cross-industry transferable* sebagaimana dikonfirmasi oleh Islam (2024) untuk domain konstruksi jembatan pracetak.

**Tahap 1 — Disassembly Analysis.** Produk asli *coffee enema basket* dibongkar secara hati-hati untuk menginventarisasi seluruh part: handle frame, mesh wire (anyaman), base disc, bracket penguat (×2), klem, ring pengunci, dan beberapa part kecil non-struktural. Setiap part dikategorikan berdasarkan tiga pertanyaan kore DFA Boothroyd: (i) Apakah part bergerak relatif terhadap part lain selama operasi? (ii) Apakah part harus berupa material berbeda? (iii) Apakah part harus dipisahkan untuk keperluan assembly, maintenance, atau replacement? Part yang menjawab "tidak" untuk semua pertanyaan menjadi kandidat eliminasi atau integrasi.

**Tahap 2 — Function Analysis & Minimum Part Determination.** Fungsi inti produk diidentifikasi: (a) menampung bubuk kopi dengan permeabilitas tertentu; (b) memfasilitasi aliran air panas secara terkontrol; (c) memungkinkan ekstraksi kopi melalui perendaman (*enema process*). Dari sini, $N_{min}$ ditetapkan sebanyak 7 part yang esensial.

**Tahap 3 — Redesain dengan Constraint Geometris.** Menggunakan software CAD 3D (SolidWorks/Autodesk Inventor), part-part di-redesain dengan tiga constraint: (i) kompatibilitas material food-grade stainless steel 304; (ii) kemampuan fabrikasi dengan proses sheet metal forming (stamping, bending, laser cutting); (iii) kompatibilitas dengan fixture perakitan existing. Pada tahap ini, dua bracket penguat diintegrasikan ke dalam handle frame sebagai fitur integral (*integral feature*), sehingga eliminasi 2 part langsung terjadi.

**Tahap 4 — Process Selection.** Setiap part di-match-kan dengan proses manufaktur paling efisien: (i) mesh wire diganti dari wire weaving manual menjadi expanded metal sheet (proses stamping satu tahap); (ii) base disc menggunakan *deep drawing*; (iii) handle frame menggunakan *tube bending*; (iv) assembly menggunakan *laser welding* menggantikan brazing. Pemilihan proses ini didasarkan pada analisis *cost-of-process* dan *throughput*.

**Tahap 5 — Prototype & Testing.** Prototipe redesain dicetak (3D printing untuk verifikasi geometris, kemudian fabrikasi aktual stainless steel) dan diuji: uji kebocoran, uji tekanan hidrostatis, uji korosi, dan uji ergonomis. Hasil uji dibandingkan dengan baseline desain asli.

**Tahap 6 — Cost Recalculation.** Seluruh biaya produksi dihitung ulang menggunakan *activity-based costing* (ABC) untuk verifikasi bahwa target cost reduction tercapai.

**Tahap 7 — Implementation & Continuous Improvement.** Desain baru di-*ramp up* ke lini produksi, dengan KPI (Key Performance Indicator) yang dimonitor: defect rate, assembly time per unit, throughput, dan customer satisfaction score.

Dalam konteks aplikasi konstruksi jembatan (Islam, 2024), alur metodologis serupa diterapkan dengan modifikasi: Tahap 1 dilakukan sebagai *BIM-based component decomposition*, Tahap 3 menggunakan parametric modeling di Revit/Tekla, dan Tahap 5 berupa erection simulation di software BIM. Tahap 6 dan 7 menggunakan *digital twin* untuk monitoring real-time selama ereksi di lapangan.

---

## 4