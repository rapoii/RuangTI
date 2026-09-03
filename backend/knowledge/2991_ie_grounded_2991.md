# 2991 — Redesain Alat Kesehatan Menggunakan Metode Design for Manufacture and Assembly (DFMA): Studi Komprehensif Rekayasa Produk Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesain Coffee Enema Basket dengan Metode DFMA — Optimasi Konkurensi Manufaktur, Perakitan, dan Biaya Siklus Hidup Produk
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method*. Peer-Reviewed Journal (Undergraduate Progress Scientific). DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *A BIM-Based Multi-Criteria Bridge Design Evaluation Framework Integrating Design for Manufacture and Assembly (DfMA) for Prefabricated Bridge Construction*. Journal of Sustainable Development and Policy. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan (*medical device industry*) merupakan salah satu sektor manufaktur dengan tingkat regulasi paling ketat di dunia. Produk-produk di sektor ini wajib memenuhi standar keamanan pasien, sterilitas, biokompatibilitas material, dan reliabilitas fungsional yang jauh melampaui mayoritas produk konsumen umum. Coffee Enema Basket (CEB) — sebuah komponen fungsional yang digunakan dalam prosedur hidroterapi kolon dan telah dikaji oleh Amirullah & Jakaria (2024) — merupakan contoh konkret bagaimana perangkat medis dengan tingkat utilisasi klinik yang tinggi seringkali masih didesain menggunakan pendekatan *conventional trial-and-error* yang berorientasi pada fungsionalitas mekanis semata, tanpa memperhitungkan implikasi biaya manufaktur, kompleksitas perakitan, maupun kemudahan pemeliharaan (Amirullah & Jakaria, 2024, DOI: [10.21070/ups.3309](https://doi.org/10.21070/ups.3309)).

Urgensi industrial dari masalah ini bersifat multidimensi. Pertama, secara ekonomis, desain awal yang terlalu banyak komponen (*over-engineered*) secara langsung meningkatkan biaya *bill of materials* (BOM), waktu siklus perakitan, dan beban investasi peralatan (*tooling cost*). Kedua, secara operasional, setiap tambahan komponen yang tidak esensial meningkatkan *defect probability* per unit, sehingga menurunkan *first-pass yield* dan meningkatkan tingkat reject/rework pada lini produksi. Ketiga, secara klinis, kompleksitas geometris yang berlebihan menyulitkan proses sterilisasi — sebuah faktor kritis untuk aplikasi medis yang bersentuhan langsung dengan membran mukosa pasien (Amirullah & Jakaria, 2024).

Pendekatan Design for Manufacture and Assembly (DFMA) yang diperkenalkan oleh Boothroyd, Dewhurst, dan Knight sejak 1980-an menjadi metodologi standar emas untuk menjawab tantangan ini. DFMA memadukan dua subdomain rekayasa: **Design for Manufacture (DFM)** yang mengoptimalkan proses fabrikasi terhadap kemampuan mesin, material, dan toleransi; serta **Design for Assembly (DFA)** yang meminimalkan jumlah komponen, arah penyisipan, dan operasi pengikatan. Dalam studi Amirullah & Jakaria (2024), integrasi DFMA berhasil mengungkap bahwa desain awal CEB mengandung komponen-komponen yang dapat dieliminasi tanpa mengorbankan fungsi, sekaligus mengidentifikasi proses fabrikasi yang lebih efisien secara ekonomi.

Studi komplementer oleh Islam (2024) menunjukkan bahwa paradigma DFMA juga relevan pada skala infrastruktur besar. Dalam konteks jembatan pracetak, integrasi DFMA dengan Building Information Modelling (BIM) memungkinkan evaluasi *buildability* sejak tahap konseptual, mencegah *late-stage design freeze* yang selama ini menjadi sumber utama rework pada proyek infrastruktur berskala besar (Islam, 2024, DOI: [10.63125/av45jf21](https://doi.org/10.63125/av45jf21)). Paralelisme ini membuktikan bahwa prinsip DFMA bersifat *transferable* lintas domain — mulai dari *single-use medical instrument* hingga struktur jembatan berbeban megaton.

Konteks industri Indonesia untuk penerapan DFMA pada alat kesehatan juga memiliki nilai strategis. Dengan rencana implementasi *standardisasi nasional* berbasis SNI IEC 60601 untuk peralatan elektromedik dan dorongan pemerintah terhadap Tingkat Komponen Dalam Negeri (TKDN), kemampuan redesain dengan metodologi DFMA menjadi kompetensi inti yang wajib dimiliki oleh engineer teknik industri Indonesia untuk bersaing di pasar ASEAN dan global.

---

## 2. Landasan Teori & Formulasi Matematis

Metodologi DFMA yang digunakan oleh Amirullah & Jakaria (2024) mengikuti kerangka analitis Boothroyd-Dewhurst yang tersusun atas tiga pilar kuantitatif: **Design Efficiency (DE)**, **Assembly Efficiency (AE)**, dan **Total Cost Reduction (ΔC)**.

### 2.1. Design Efficiency (DE)

Design Efficiency mengukur rasio antara jumlah komponen minimum yang secara teoritis dibutuhkan untuk memenuhi fungsi produk terhadap jumlah komponen aktual pada desain yang dievaluasi. Formulasi matematisnya adalah:

$$DE = \frac{N_{min}}{N_{aktual}} \times 100\%$$

di mana $N_{min}$ adalah jumlah bagian minimum teoritis (biasanya ditetapkan sebagai 1 untuk setiap *primary function* atau *secondary function* yang tidak dapat diintegrasikan) dan $N_{aktual}$ adalah jumlah bagian pada desain existing. Untuk CEB, Amirullah & Jakaria (2024) menetapkan $N_{min}=3$ untuk fungsi primer (keranjang penampung, filter, dan koneksi selang), sedangkan desain awal memiliki $N_{aktual}=12$ bagian, sehingga:

$$DE_{awal} = \frac{3}{12} \times 100\% = 25\%$$

### 2.2. Assembly Efficiency (AE)

Assembly Efficiency menilai efisiensi operasi perakitan aktual terhadap operasi perakitan minimum. Formulasi yang digunakan adalah:

$$AE = \frac{t_{min}}{t_{aktual}} \times 100\%$$

di mana $t_{min}$ adalah waktu perakitan teoritis untuk $N_{min}$ komponen dan $t_{aktual}$ adalah waktu perakitan aktual pada desain existing. Dengan asumsi waktu handling minimum 3 detik per komponen pada metode Boothroyd:

$$t_{min} = N_{min} \times 3 = 3 \times 3 = 9 \text{ detik}$$

Untuk desain eksisting dengan waktu perakitan aktual 240 detik (4 menit):

$$AE_{awal} = \frac{9}{240} \times 100\% = 3{,}75\%$$

### 2.3. DFA Index Gabungan

Untuk mengukur efektivitas keseluruhan proses DFA, digunakan indeks gabungan yang mengalikan DE dan AE, lalu dinormalisasi:

$$\eta_{DFA} = \sqrt{DE \times AE} \times 100\%$$

Pada desain awal: $\eta_{DFA,awal} = \sqrt{25 \times 3{,}75} = \sqrt{93{,}75} = 9{,}68\%$

### 2.4. Biaya Total dan Reduksi Biaya

Total biaya siklus produksi untuk satu unit CEB:

$$C_{total} = C_{material} + C_{manufaktur} + C_{asembling} + C_{quality} + C_{overhead}$$

Reduksi biaya dihitung sebagai:

$$\Delta C = \frac{C_{total,awal} - C_{total,baru}}{C_{total,awal}} \times 100\%$$

### 2.5. Matriks Seleksi Konsep (Pugh Matrix)

Untuk mengevaluasi alternatif desain konseptual, digunakan Pugh Matrix dengan bobot kriteria $w_j$ dan skor $s_{ij}$ untuk setiap konsep:

$$S_i = \sum_{j=1}^{n} w_j \cdot s_{ij}$$

di mana $S_i$ adalah skor total konsep $i$, $w_j$ adalah bobot kriteria $j$ (dengan $\sum w_j = 1$), dan $s_{ij}$ adalah skor (-2, -1, 0, +1, +2) untuk konsep $i$ pada kriteria $j$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Amirullah & Jakaria (2024) menyusun SOP rekayasa DFMA yang terdiri atas delapan tahapan sistematis. Adaptasi terhadap Standar ISO 9001:2015 (klausul 8.3 — *Design and Development*) dan prinsip *concurrent engineering* dilakukan untuk memastikan traceability setiap keputusan desain.

**Tahap 1 — Analisis Fungsional (Functional Analysis).** Menggunakan diagram FAST (*Function Analysis System Technique*), fungsi primer dan sekunder produk didekomposisi. Untuk CEB, fungsi primer: menampung dan menyaring larutan kopi; fungsi sekunder: konektivitas selang, pegangan ergonomis, dan resistensi termal.

**Tahap 2 — Inventarisasi Komponen Eksisting (*Bill of Materials Audit*).** Setiap bagian dievaluasi menggunakan tiga pertanyaan kritis Boothroyd-Dewhurst: (a) Apakah bagian tersebut bergerak relatif terhadap bagian lain selama operasi? (b) Apakah bagian tersebut harus material berbeda? (c) Apakah bagian tersebut harus dipisahkan untuk memungkinkan perakitan/pembongkaran? Jika ketiga jawaban "tidak", maka bagian tersebut kandidat eliminasi.

**Tahap 3 — Perhitungan DFA Awal.** Menghitung $DE$, $