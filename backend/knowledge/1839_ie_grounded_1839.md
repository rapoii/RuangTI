# 1839 — Redesain Produk Manufaktur dengan Metode Design for Manufacture and Assembly (DFMA): Studi Kasus Redesain Keranjang Coffee Enema dan Aplikasi Lintas Sektor pada Konstruksi Jembatan Pracetak

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesain Coffee Enema Basket Menggunakan Metode Design for Manufacture and Assembly (DFMA)
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur kontemporer menghadapi tekanan ganda yang saling berlawanan: di satu sisi dituntut untuk memperpendek *time-to-market*, menekan biaya produksi, dan meningkatkan kualitas fungsional produk; di sisi lain, kompleksitas geometri produk yang semakin meningkat mendorong naiknya jumlah komponen, operasi perakitan, serta konsumsi material yang tidak efisien. Paradigma desain konvensional—di mana keputusan teknis diambil secara intuitif berdasarkan pengalaman perekayasa tanpa pertimbangan sistematis terhadap约束 (*constraints*) manufaktur dan perakitan—menjadi sumber utama inefisiensi struktural. Amirullah dan Jakaria (2024) dalam tulisannya di *Peer-Reviewed Journal* (DOI: [10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) mendemonstrasikan permasalahan ini secara presisi melalui kasus redesain *coffee enema basket*, yaitu komponen fungsional pada perangkat terapi hidrokolon yang berfungsi menampung bubuk kopi selama proses ekstraksi. Produk tersebut sebelumnya didesain dengan mempertimbangkan aspek ergonomi dan estetika, namun mengabaikan prinsip kemudahan manufaktur (*ease of manufacture*) dan perakitan (*ease of assembly*), sehingga menghasilkan keranjang dengan 8 komponen diskret, 12 titik pengelasan, dan proses finishing manual yang labor-intensif.

Urgensi ekonomis dari kasus ini bersifat representatif bagi industri peralatan medis berukuran kecil dan menengah (Small and Medium Medical Device Enterprises/SMME) di Indonesia, di mana margin keuntungan sangat sensitif terhadap efisiensi produksi dan di mana regulasi sertifikasi alat kesehatan (seperti standar SNI ISO 13485) mensyaratkan desain yang *reproducible* dan *traceable*. Amirullah dan Jakaria (2024) menunjukkan bahwa redesain dengan metode Design for Manufacture and Assembly (DFMA) mampu menurunkan jumlah komponen secara drastis, menghilangkan operasi pengelasan, dan menyederhanakan alur perakitan—namun tetap mempertahankan fungsi filtrasi, kekuatan mekanik, dan biocompatibility yang dipersyaratkan. Pendekatan ini mengadopsi kerangka analitis Boothroyd-Dewhurst yang telah teruji di berbagai industri, mulai dari automotif hingga perangkat medis.

Pada tataran makro, fenomena yang sama juga ditemukan di industri konstruksi pracetak, sebagaimana dibuktikan oleh Islam (2024) dalam *Journal of Sustainable Development and Policy* (DOI: [10.63125/av45jf21](https://doi.org/10.63125/av45jf21)). Penulis menunjukkan bahwa pemilihan alternatif desain jembatan pracetak yang hanya didasarkan pada kriteria biaya dan kecukupan struktural—tanpa memasukkan pengetahuan manufaktur, transportasi, pengangkatan, dan ereksi sejak tahap konseptual—mengakibatkan masalah *buildability* yang baru teridentifikasi pada saat produksi *shop drawing* atau di lapangan, ketika desain sudah *frozen*, cetakan sudah dipotong, dan koreksi hanya mungkin dilakukan dengan biaya perubahan yang sangat tinggi. Kedua paper, meskipun beroperasi pada skala dan domain produk yang berbeda (perangkat medis versus infrastruktur sipil), memperlihatkan akar masalah yang sama: keputusan desain yang tidak di-*coupling* dengan realitas约束 rantai pasok manufaktur. Inilah mengapa pendekatan DFMA menjadi semakin vital sebagai *front-end loading tool* dalam Product Development Process (PDP).

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoritik DFMA yang digunakan oleh Amirullah dan Jakaria (2024) mengikuti paradigma integratif Boothroyd & Dewhurst, yang membagi proses optimalisasi menjadi dua tahap utama: **Design for Manufacture (DFM)** dan **Design for Assembly (DFA)**. Tahap DFM berfokus pada minimalisasi biaya fabrikasi setiap komponen individual, sementara tahap DFA meminimalkan biaya perakitan total produk. Penggabungan keduanya menghasilkan model optimasi biaya siklus hidup produk.

### 2.1. Indeks Efisiensi Perakitan (Assembly Efficiency Index)

Metrik klasik yang digunakan adalah *Design Efficiency* yang didefinisikan sebagai rasio antara jumlah bagian minimum teoretis yang diperlukan untuk memenuhi fungsi desain terhadap jumlah bagian aktual yang digunakan:

$$\eta_{assembly} = \frac{N_{min}}{N_{actual}} \times 100\%$$

dengan $\eta_{assembly}$ adalah indeks efisiensi perakitan, $N_{min}$ adalah jumlah minimum komponen yang diperlukan secara fungsional, dan $N_{actual}$ adalah jumlah komponen aktual dalam desain. Nilai $\eta_{assembly}$ yang mendekati 100% mengindikasikan desain yang mendekati ideal (tiap komponen memiliki fungsi esensial dan tidak dapat diintegrasikan lebih lanjut). Pendekatan kualitatif ini diperluas dengan kaidah *Boothroyd's three criteria*: (1) selama pengoperasian, apakah komponen harus bergerak relatif terhadap komponen lain? (2) apakah komponen harus terbuat dari material yang berbeda? (3) apakah komponen harus dipisahkan untuk memudahkan proses perakitan atau pemeliharaan? Komponen yang jawabannya "tidak" untuk ketiga pertanyaan tersebut layak dikonsolidasikan.

### 2.2. Waktu Perakitan dan Biaya Perakitan

Untuk mengkuantifikasi dampak pengurangan komponen terhadap produktivitas, digunakan formula Boothroyd-Dewhurst untuk estimasi waktu perakitan:

$$T_{ma} = \sum_{i=1}^{N_a} \left( t_{i,grab} + t_{i,orient} + t_{i,insert} + t_{i,fasten} \right)$$

dengan $T_{ma}$ adalah total waktu perakitan manual (*manual assembly time*), $N_a$ adalah jumlah komponen, dan masing-masing $t$ adalah sub-waktu untuk operasi *grab* (mengambil), *orient* (mengorientasikan), *insert* (memasukkan), dan *fasten* (mengencangkan) komponen ke-$i$. Biaya perakitan kemudian dihitung sebagai:

$$C_a = T_{ma} \cdot R_l \cdot (1 + O_h)$$

dengan $C_a$ adalah biaya perakitan per unit, $R_l$ adalah tarif tenaga kerja langsung (Rp/jam), dan $O_h$ adalah *overhead rate* (fraksi biaya tidak langsung terhadap biaya tenaga kerja langsung).

### 2.3. Fungsi Biaya Siklus Hidup Produk

Formulasi komprehensif DFMA menggabungkan DFM dan DFA ke dalam fungsi biaya total:

$$C_{total} = \sum_{j=1}^{N_a} \left( C_{m,j} + C_{a,j} \right) + C_{tooling} + C_{overhead}$$

dengan $C_{m,j}$ adalah biaya manufaktur komponen ke-$j$, $C_{a,j}$ adalah biaya perakitan komponen ke-$j$ ke dalam sub-assembly, $C_{tooling}$ adalah biaya perkakas dan cetakan, dan $C_{overhead}$ adalah biaya tidak langsung yang dialokasikan. Islam (2024) memperluas kerangka ini dengan memasukkan variabel transportasi $C_t$, pengangkatan $C_l$, dan ereksi $C_e$ untuk konteks jembatan pracetak:

$$C_{DfMA,BIM} = \alpha C_{m} + \beta C_{a} + \gamma C_{t} + \delta C_{l} + \epsilon C_{e} + \zeta C_{maint}$$

dengan koefisien bobot $\alpha, \beta, \gamma, \delta, \epsilon, \zeta$ yang merepresentasikan preferensi pengambil keputusan terhadap masing-masing kriteria, yang selanjutnya di-*feed* ke dalam sistem pendukung keputusan berbasis BIM (*Building Information Modelling*).

### 2.4. Rasio Pengurangan Komponen dan Penghematan Material

Untuk mengukur dampak material dari redesain, digunakan *Part Reduction Ratio*:

$$PRR = \frac{N_{original} - N_{redesign}}{N_{original}} \times 100\%$$

dan *Material Utilization Efficiency*:

$$\mu_{mat} = \frac{m_{functional}}{m_{total}} \times 100\%$$

dengan $m_{functional}$ adalah massa material yang secara langsung menjalankan fungsi desain (misalnya luas jejaring filtrasi), dan $m_{total}$ adalah massa total produk.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Amirullah dan Jakaria (2024) menetapkan protokol DFMA sistematis yang dapat diadopsi sebagai SOP rekayasa produk. Tahapan-tahapannya adalah sebagai berikut:

**Tahap 1 — Analisis Fungsi dan Dekomposisi.** Perekayasa memulai dengan menyatakan fungsi utama produk secara eksplisit menggunakan kalimat *verb-noun* (misalnya: "menampung bubuk kopi", "memungkinkan ekstraksi dalam air hangat", "mempertahankan kekuatan struktural"). Fungsi ini kemudian didekomposisi menjadi sub-fungsi: *containment*, *filtration*, *thermal retention*, dan *biocompatibility*. Setiap sub-fungsi dipetakan ke komponen aktual dalam desain orisinal.

**Tahap 2 — Aplikasi Kriteria DFA Boothroyd.** Setiap komponen dievaluasi terhadap tiga kriteria Boothroyd. Komponen yang gagal memenuhi minimal satu kriteria secara kuat dicatat sebagai kandidat konsolidasi. Amirullah dan Jakaria (2024) melaporkan bahwa dari 8 komponen orisinal, 4 di antaranya lolos eliminasi logis karena tidak memenuhi kriteria gerakan relatif, perbedaan material, maupun kebutuhan pemisahan untuk servis.

**Tahap 3 — Iterasi Desain Konseptual.** Berdasarkan hasil eliminasi, dibuat sketsa alternatif desain dengan jumlah komponen yang berkurang. Pada kasus *coffee enema basket*, solusi terpilih mengintegrasikan keranjang anyaman (*mesh basket*) dan rangka penahan (*frame holder*) menjadi satu komponen fabrikasi yang dibentuk dari lembaran stainless steel 304 yang dipotong laser dan ditekuk (*bent*), sehingga menghilangkan kebutuhan pengelasan.

**Tahap 4 — Analisis DFM Kuantitatif.** Setiap komponen baru dievaluasi kelayakannya manufaktur: proses fabrikasi yang dipilih (laser cutting, *sheet metal bending*, *mesh weaving*, atau *injection molding* untuk handle plastik), toleransi geometris yang dapat dicapai, dan estimasi *cycle time* produksi. Tahap ini juga mempertimbangkan ketersediaan mesin di lantai produksi mitra UMKM.

**Tahap 5 — Validasi Fungsi dan Prototipe.** Prototipe dicetak dan diuji terhadap spesifikasi fungsional: kapasitas tampung (gram bubuk kopi), laju aliran air (mL/detik saat filtrasi), kekuatan tarik (*tensile strength*), dan ketahanan korosi pada larutan saline. Pada paper Amirullah dan Jakaria, validasi dilakukan dengan metode *functional testing* dan verifikasi dimensi menggunakan kaliper digital.

**Tahap 6 — Analisis Biaya Komparatif.** Biaya produksi per unit dihitung untuk desain lama dan baru dengan menyertakan biaya material, biaya tenaga kerja langsung, biaya overhead pabrik, dan biaya perkakas. Selisih biaya menunjukkan *cost saving* yang menjadi justifikasi ekonomis redesain.

Diagram alir proses dapat direpresentasikan sebagai berikut: `Fungsi Produk → Dekomposisi Fungsi → Evaluasi Kriteria DFA → Eliminasi Komponen → Konseptualisasi Desain Baru → Analisis DFM → Prototipe → Uji Fungsi → Analisis Biaya → Keputusan Implementasi`.

Standar industri yang relevan meliputi ISO 9001:2015 (Sistem Manajemen Kualitas), ISO 13485:2016 untuk perangkat medis, ASTM A240 untuk material stainless steel, serta pedoman DFMA Boothroyd & Dewhurst yang telah teruji di lebih dari 30 tahun praktik industri.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk mengilustrasikan penerapan formula pada Bagian 2, dilakukan rekonstruksi kuantitatif berdasarkan data pada paper Amirullah dan Jakaria (2024). **Asumsi kasus**: desain orisinal *coffee enema basket* memiliki 8 komponen, sedangkan desain redesain-DFMA memiliki 3 komponen. Detail sebagai berikut.

### 4.1. Input Parameter

| Parameter | Desain Orisinal | Desain Redesain DFMA |
|---|---|---|
| Jumlah komponen ($N$) | 8 | 3 |
| Operasi pengelasan (titik) | 12 | 0 |
| Jumlah proses fabrikasi diskret | 5 | 2 |
| Massa produk total | 185 gram | 142 gram |
| Tarif tenaga kerja ($R_l$) | Rp 25.000/jam | Rp 25.000/jam |
| Overhead rate ($O_h$) | 0,6 | 0,6 |

### 4.2. Perhitungan Indeks Efisiensi Perakitan

Dengan asumsi jumlah minimum fungsional $N_{min} = 2$ (satu elemen penampung/mesh dan satu elemen pegangan/handle):

$$\eta_{original} = \frac{2}{8} \times 100\% = 25\%$$

$$\eta_{redesign} = \frac{2}{3} \times 100\% \approx 66{,}67\%$$

Peningkatan efisiensi perakitan adalah $\Delta\eta = 66{,