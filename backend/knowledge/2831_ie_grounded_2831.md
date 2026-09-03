# 2831 — Redesain Produk Kesehatan Menggunakan Pendekatan Design for Manufacture and Assembly (DFMA): Studi Kasus Redesain Coffee Enema Basket dengan Validasi Multi-Sektor Berbasis BIM

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Sektor perangkat medis dan wellness terapi rumahan mengalami transformasi desain yang signifikan sejak pandemi COVID-19, di mana permintaan terhadap alat terapi alternatif seperti *coffee enema basket* melonjak di pasar domestik maupun ekspor. Amirullah dan Jakaria (2024) dalam paper dengan DOI [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309) menyoroti bahwa produk coffee enema basket konvensional—yang berfungsi sebagai saringan cairan terapi berbasis kopi untuk prosedur hidroterapi kolon—memiliki permasalahan desain struktural yang menghambat skalabilitas produksi, antara lain: jumlah komponen yang berlebihan, material stainless steel yang sulit difabrikasi pada industri kecil menengah (IKM), serta prosedur perakitan yang membutuhkan lebih dari 12 langkah manual. Permasalahan ini menimbulkan *defect rate* perakitan yang tinggi (>8%) dan biaya produksi yang tidak kompetitif bila dibandingkan dengan produk impor dari pasar Asia Tenggara.

Urgensi redesain semakin nyata ketika ditinjau dari perspektif Total Cost of Ownership (TCO) dan kepatuhan regulasi. Standar alat kesehatan yang berlaku (misalnya SNI ISO 13485 dan regulasi BPOM untuk alat wellness) mensyaratkan traceability komponen, sterilisasi, dan kemampuan disassembling untuk pencucian. Produk lama tidak memenuhi sebagian kriteria tersebut karena konstruksi permanent-join (las titik) antara basket dan handle. Pendekatan Design for Manufacture and Assembly (DFMA) yang dipilih oleh Amirullah dan Jakaria (2024) menjawab tantangan ini melalui dua pilar: (i) DFM untuk menyederhanakan proses fabrikasi dengan mengurangi operasi machining dan memilih material yang lebih formable, serta (ii) DFA untuk meminimalkan jumlah part dan menyederhanakan urutan assembly.

Konteks industri yang lebih luas juga dikuatkan oleh temuan Islam (2024) dengan DOI [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21) yang menunjukkan bahwa integrasi prinsip DfMA dalam Building Information Modeling (BIM) pada konstruksi jembatan pracetak menghasilkan peningkatan signifikan dalam *buildability index* karena keputusan manufaktur-asesori sudah masuk pada tahap konseptual, bukan pada saat shop-drawing. Paralel dengan produk consumer health seperti coffee enema basket, prinsip yang sama berlaku: keputusan *manufacturability* dan *assemblability* harus dimasukkan sejak fase concept design untuk mencegah *rework* yang mahal. Kedua paper ini menunjukkan bahwa DFMA bukan sekadar metodologi reduksi biaya, melainkan kerangka kerja integratif yang menjembatani desain fungsional dengan realita shop floor dan site erection.

## 2. Landasan Teori & Formulasi Matematis

Pendekatan DFMA yang digunakan oleh Amirullah dan Jakaria (2024) bersandar pada dua kerangka analitis utama, yaitu **Boothroyd-Dewhurst DFA Method** dan **DFM Complexity Index**. Secara matematis, desain efisiensi perakitan didefinisikan sebagai:

$$\eta_{DFA} = \frac{N_{min} \cdot t_{min}}{N_{aktual} \cdot t_{aktual}} \times 100\%$$

di mana $N_{min}$ adalah jumlah minimum teoritis part yang dibutuhkan untuk memenuhi fungsi produk, $t_{min}$ adalah waktu assembly minimum teoritis (detik), $N_{aktual}$ adalah jumlah aktual part pada desain, dan $t_{aktual}$ adalah waktu assembly aktual yang diukur di lini produksi. Semakin tinggi nilai $\eta_{DFA}$ (mendekati 100%), semakin efisien desain dari sisi perakitan. Pada kondisi ideal tanpa ada redundan part, $\eta_{DFA} = 100\%$.

Selanjutnya, untuk mengkuantifikasi reduksi biaya manufaktur, digunakan persamaan **DFM Cost Reduction Ratio**:

$$\Delta C_{DFM} = \frac{C_{lama} - C_{baru}}{C_{lama}} \times 100\%$$

di mana $C_{lama}$ adalah biaya produksi per unit pada desain awal, dan $C_{baru}$ adalah biaya produksi per unit setelah redesain. Komponen biaya yang dihitung mencakup material, fabrikasi, assembly, quality control, dan packaging.

Indeks kompleksitas fabrikasi (Fabrication Complexity Index) yang diperkenalkan oleh Boothroyd dan Radovanovic digunakan untuk menilai tingkat kesulitan produksi setiap komponen:

$$FCI_i = \alpha \cdot \ln(M_i) + \beta \cdot \ln(T_i) + \gamma \cdot \ln(S_i)$$

di mana $M_i$ adalah jumlah operasi machining/fabrikasi, $T_i$ adalah total waktu setup (menit), $S_i$ adalah jumlah special tooling yang dibutuhkan, dan $\alpha, \beta, \gamma$ adalah bobot relatif (umumnya $\alpha = 0.45$, $\beta = 0.30$, $\gamma = 0.25$). Semakin rendah $FCI_i$, semakin sederhana proses fabrikasinya.

Untuk analisis fungsi produk, digunakan **Function Analysis System Technique (FAST)** dengan persamaan cost-to-function ratio:

$$R_{f} = \frac{C_{komponen}}{\sum_{j=1}^{k} F_{j}}$$

di mana $F_j$ adalah nilai fungsi ke-$j$ yang dihasilkan komponen, dan $k$ adalah jumlah fungsi. Komponen dengan $R_f$ tinggi (cost besar, fungsi sedikit) menjadi kandidat eliminasi atau penggabungan.

Terakhir, untuk mengukur total reduction in assembly time, Amirullah dan Jakaria (2024) menggunakan:

$$\Delta T_{assembly} = \sum_{i=1}^{N} (t_{i,lama} - t_{i,baru})$$

di mana $t_{i,lama}$ dan $t_{i,baru}$ adalah waktu operasi assembly ke-$i$ pada desain lama dan baru. Total waktu assembly sebelum redesain direduksi secara sistematis melalui eliminasi operasi yang tidak memberikan nilai tambah (*non value-adding operations*).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Amirullah dan Jakaria (2024) menyusun SOP implementasi DFMA dalam 7 tahap sistematis yang dapat diadopsi oleh IKM perangkat wellness:

**Tahap 1 – Functional Analysis & Benchmarking.** Tim desain memetakan seluruh fungsi produk coffee enema basket menggunakan diagram FAST (*Function Analysis System Technique*). Fungsi primer diidentifikasi: (a) menyaring partikel kopi, (b) menahan sedimen di dalam tabung, (c) memungkinkan aliran infus yang stabil, dan (d) memudahkan pelepasan ampas. Benchmarking dilakukan terhadap 3 produk kompetitor di pasar.

**Tahap 2 – Disassembly Analysis.** Produk eksisting dibongkar untuk mencatat jumlah part, material, metode joining, dan waktu disassembly. Hasil paper menunjukkan desain lama memiliki 9 komponen dengan total waktu perakitan 480 detik/unit.

**Tahap 3 – DFA Evaluation (Boothroyd-Dewhurst).** Setiap part dievaluasi menggunakan tabel keputusan DFA berdasarkan tiga pertanyaan: (i) Apakah part bergerak relatif terhadap part lain saat operasi?, (ii) Apakah part harus berbeda material dari part yang sudah ada?, (iii) Apakah part harus dipisahkan untuk memenuhi kebutuhan assembly/disassembly? Part yang menjawab "tidak" untuk ketiganya menjadi kandidat eliminasi.

**Tahap 4 – DFM Material & Process Selection.** Material stainless steel 304 diganti menjadi food-grade polypropylene (PP) untuk body basket karena sifat kimianya inert, tahan suhu hingga 120°C, dan memiliki formability tinggi pada proses injection molding. Mesh filter diganti stainless steel 316L wire mesh yang sudah tersedia di pasar lokal.

**Tahap 5 – Concept Generation & Scoring.** Konsep baru diskoring menggunakan Pugh Matrix dengan 5 kriteria: manufacturability, assemblability, biaya, durability, dan kepatuhan regulasi. Konsep terpilih kemudian di-prototype.

**Tahap 6 – Prototype & Testing.** Prototipe diuji untuk functional test (laju aliran, retensi partikel), durability test (500 siklus pencucian), dan assembly time measurement.

**Tahap 7 – Cost Analysis & Validation.** Total biaya produksi dihitung dan dibandingkan dengan desain lama untuk validasi $\Delta C_{DFM}$.

Alur proses ini paralel dengan kerangka BIM-DfMA yang dikemukakan Islam (2024) untuk jembatan pracetak, di mana keputusan manufacturability-assemblability dimasukkan dalam model informasi terpusat (BIM) sehingga seluruh stakeholder—produsen, transporter, erector—memiliki visibilitas yang sama terhadap desain.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Berdasarkan data operasional dari paper Amirullah dan Jakaria (2024), dilakukan simulasi perhitungan numerik sebagai berikut:

**Input Parameter Desain Lama:**
- Jumlah komponen: $N_{aktual} = 9$ part
- Total waktu assembly: $t_{aktual} = 480$ detik/unit
- Biaya material per unit: Rp 45.000
- Biaya fabrikasi per unit: Rp 32.000
- Biaya assembly per unit: Rp 18.000
- Biaya QC & packaging: Rp 8.500
- Total biaya produksi: $C_{lama} = 103.500$/unit
- Defect rate: 8,5%

**Input Parameter Desain Baru (Hasil Redesain DFMA):**
- Jumlah komponen: $N_{baru} = 5$ part (reduksi 4 part)
- Total waktu assembly: $t_{baru} = 185$ detik/unit
- Biaya material: Rp 28.000 (efisiensi PP injection molding)
- Biaya fabrikasi: Rp 15.000
- Biaya assembly: Rp 7.000
- Biaya QC & packaging: Rp 6.000
- Total biaya produksi: $C_{baru} = 56.000$/unit
- Defect rate: 2,1%

**Perhitungan 1 – Design Efficiency (DFA):**

Dengan asumsi minimum teoretis $N_{min} = 5$ (jumlah part yang benar-benar dibutuhkan secara fungsional) dan $t_{min} = 150$ detik, maka:

$$\eta_{DFA,lama} = \frac{5 \times 150}{9 \times 480} \times 100\% = \frac{750}{4320} \times 100\% \approx 17,36\%$$

$$\eta_{DFA,baru} = \frac{5 \times 150}{5 \times 185} \times 100\% = \frac{750}{925} \times 100\% \approx 81,08\%$$

Peningkatan efisiensi desain: $\Delta\eta = 81,08\% - 17,36\% = 63,72$ poin persentase. Ini menunjukkan bahwa redesain berhasil menghilangkan *redundant parts* dan menyederhanakan operasi assembly secara signifikan.

**Perhitungan 2 – DFM Cost Reduction Ratio:**

$$\Delta C_{DFM} = \frac{103.500 - 56.000}{103.500} \times 100\% = \frac{47.500}{103.500} \times 100\% \approx 45,89\%$$

Reduksi biaya hampir 46% per unit—angka yang sangat signifikan untuk profitabilitas IKM.

**Perhitungan 3 – Assembly Time Reduction:**

$$\Delta T_{assembly} = (480 - 185) = 295 \text{ detik/unit}$$

Pada lini produksi dengan output 100 unit/hari dan 1 operator, penghematan waktu = $295 \times 100 = 29.500$ detik = 8,19 jam kerja/hari, yang berarti kapasitas produksi naik dari 100 unit menjadi ~257 unit/hari dengan jumlah operator yang sama, atau turun menjadi 1 operator untuk output 100 unit.

**Perhitungan 4 – Fabricaiton Complexity Index (Contoh Part Tertentu):**

Untuk part basket mesh (lama: 4 proses stamping + 2 spot welding; baru: 1 proses injection molding):

$$FCI_{lama} = 0{,}45 \ln(6) + 0{,}30 \ln(15) + 0{,}25 \ln(2) = 0{,}45(1{,}79) + 0{,}30(2{,}71) + 0{,}25(0{,}69) \approx 1{,}81$$

$$FCI_{baru} = 0{,}45 \ln(1) + 0{,}30 \ln(5) + 0{,}25 \ln(1) = 0 + 0{,}30(1{,}61) +