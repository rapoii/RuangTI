# 1759 — Redesain Produk Manufaktur Menggunakan Pendekatan Design for Manufacture and Assembly (DFMA): Studi Kasus Redesain Coffee Enema Basket dan Integrasi Lintas Sektor pada Konstruksi Jembatan Pracetak

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesain Coffee Enema Basket Menggunakan Metode Design for Manufacture and Assembly (DFMA) serta Ekstensi Konseptual pada Evaluasi Desain Produk Kompleks
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method*. Peer-Reviewed Journal. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *A BIM-Based Multi-Criteria Bridge Design Evaluation Framework Integrating Design for Manufacture and Assembly (DfMA) for Prefabricated Bridge Construction*. Journal of Sustainable Development and Policy. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Dalam lanskap persaingan manufaktur global yang semakin ketat, kemampuan sebuah perusahaan untuk menghasilkan produk dengan biaya rendah, kualitas tinggi, dan waktu penyampaian (lead time) yang singkat menjadi determinan strategis keberlanjutan usaha. Permasalahan klasik yang terus berulang di banyak industri—mulai dari医疗器械 (alat kesehatan), otomotif, hingga konstruksi pracetak—adalah bahwa keputusan desain diambil terlalu dini tanpa mempertimbangkan kemampuan proses manufaktur dan kesulitan perakitan di lantai produksi. Akibatnya,发现 buildability problems baru muncul ketika desain sudah dibekukan (frozen), gambar kerja (shop-drawing) sudah dicetak, dan koreksi hanya mungkin dilakukan dengan biaya perubahan yang sangat mahal. Fenomena inilah yang oleh Amirullah & Jakaria (2024, DOI: [10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) diidentifikasi sebagai masalah fundamental pada produk Coffee Enema Basket, sebuah komponen alat kesehatan yang digunakan dalam prosedur hidroterapi kolon. Produk eksisting memiliki desain yang terdiri dari banyak komponen kecil dengan geometri rumit sehingga menyulitkan perakitan manual, meningkatkan tingkat rejeksi, dan memperpanjang waktu fabrikasi.

Urgensi operasional studi Amirullah & Jakaria (2024) muncul dari kenyataan bahwa industri alat kesehatan memiliki regulasi ketat (misalnya ISO 13485, FDA 21 CFR Part 820), di mana setiap penambahan komponen berarti tambahan biaya validasi proses, biaya inspeksi, dan biaya dokumentasi desain historis (Design History File/DHF). Penambahan satu baut, satu ring pengunci, atau satu sambungan ulir—yang dalam manufaktur konvensional mungkin dianggap "murah"—justru meningkatkan total cost of ownership secara eksponensial karena efek domino terhadap lini produksi. Studi mereka menunjukkan bahwa melalui penerapan Design for Manufacture and Assembly (DFMA), sebuah produk dapat disederhanakan secara radikal tanpa mengorbankan fungsi teknisnya.

Konvergensi urgensi ini juga ditegaskan oleh Islam (2024, DOI: [10.63125/av45jf21](https://doi.org/10.63125/av45jf21)) dalam konteks yang lebih makro: konstruksi jembatan pracetak. Penulis menyoroti bahwa pemilihan desain jembatan secara konvensional hanya didasarkan pada dua kriteria—yaitu cost dan structural adequacy—pada fase ketika pengetahuan tentang manufacturability, transportability, lifting, dan erection belum dimasukkan ke dalam proses keputusan. Hal yang sama persis terjadi pada skala produk: keputusan desain diambil ketika pengetahuan tentang kemampuan workshop dan lini perakitan belum diintegrasikan. Dengan kata lain, kedua paper mengkonfirmasi secara empiris lintas-sektor bahwa *early-stage integration of manufacturing knowledge into design decision-making* adalah kebutuhan universal dalam rekayasa industri modern. Pendekatan DFMA, yang awalnya dipopulerkan oleh Boothroyd & Dewhurst (1980-an), kini telah berevolusi menjadi kerangka kerja analitis yang tidak hanya menghitung efisiensi desain tetapi juga menjadi bahasa komunikasi antara fungsi desain, manufaktur, perakitan, quality assurance, dan procurement dalam satu rantai nilai yang terpadu.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoretis DFMA yang digunakan oleh Amirullah & Jakaria (2024) mengikuti alur analitis dua tahap utama yang lazim dalam literatur Boothroyd-Dewhurst: **(i) Design for Assembly (DFA)** untuk menilai dan menyederhanakan struktur rakitan, serta **(ii) Design for Manufacture (DFM)** untuk memastikan setiap komponen sisa dapat difabrikasi secara ekonomis melalui proses yang tersedia. Pada tahap DFA, langkah pertama yang dilakukan adalah menghitung **Design Efficiency (DE)** yang didefinisikan sebagai rasio antara jumlah komponen minimum teoretis ($N_m$) terhadap jumlah komponen aktual pada desain eksisting ($N_s$), dikalikan 100%:

$$DE = \frac{N_m}{N_s} \times 100\%$$

Nilai $N_m$ diperoleh dengan menerapkan tiga kriteria Boothroyd (1994) pada setiap komponen: **(a)** apakah komponen bergerak relatif terhadap seluruh rakitan selama operasi normal, **(b)** apakah komponen harus berupa material yang berbeda dari komponen lain untuk alasan fungsional (isolasi listrik, pelumasan, dsb.), dan **(c)** apakah komponen harus dapat dipisahkan untuk memungkinkan perakitan/pembongkaran servis. Jika seluruh jawaban "tidak", komponen tersebut merupakan kandidat kuat untuk dieliminasi atau diintegrasikan ke komponen lain. Setelah proses eliminasi, indeks DFA dihitung untuk setiap komponen sisa menggunakan formulasi waktu perakitan teoritis:

$$t_{assembly} = \sum_{i=1}^{N_s} \left[ t_{base,i} + N_{insert,i} \cdot T_{insert} + N_{feature,i} \cdot T_{feature} \right]$$

di mana $t_{base,i}$ adalah waktu penanganan dasar (handling time) komponen ke-$i$, $N_{insert,i}$ adalah jumlah operasi penyisipan (insertion), $T_{insert}$ adalah waktu standar penyisipan (umumnya 1,5–3,0 detik), $N_{feature,i}$ adalah jumlah fitur tambahan (orientasi, pengencangan, snapping), dan $T_{feature}$ adalah waktu per fitur (umumnya 1,0–1,8 detik).

Pada tahap **DFM**, setiap komponen dianalisis melalui **manufacturability score** yang mempertimbangkan proses fabrikasi spesifik (injection molding, stamping, machining, sheet metal forming, dll.). Untuk komponen plastik cetakan injeksi seperti pada coffee enema basket, parameter kunci yang dievaluasi Amirullah & Jakaria (2024) adalah *parting line direction*, *draft angle*, *uniform wall thickness*, *undercut*, dan *gate location*. Fungsi utilitas proses manufaktur dapat dinyatakan sebagai:

$$U_{manufacture} = w_1 \cdot s_{geometry} + w_2 \cdot s_{material} + w_3 \cdot s_{tolerance} + w_4 \cdot s_{volume}$$

dengan $w_j$ adalah bobot kepentingan relatif ($\sum w_j = 1$) dan $s_j$ adalah skor ternormalisasi (0–1) untuk masing-masing kriteria. Selanjutnya, total biaya produk dihitung sebagai:

$$C_{total} = C_{material} + C_{process} + C_{assembly} + C_{overhead} + C_{quality}$$

di mana $C_{material} = \sum_i (m_i \cdot p_i)$ dengan $m_i$ adalah massa komponen dan $p_i$ adalah harga satuan material; $C_{process} = \sum_i (t_{fab,i} \cdot r_{machine,i})$ dengan $t_{fab,i}$ sebagai waktu fabrikasi dan $r_{machine,i}$ sebagai tarif mesin per jam; $C_{assembly} = t_{assembly} \cdot r_{labor}$; sementara $C_{overhead}$ dan $C_{quality}$ masing-masing merupakan alokasi biaya tidak langsung dan biaya inspeksi/penolakan (rejection).

Islam (2024, DOI: [10.63125/av45jf21](https://doi.org/10.63125/av45jf21)) melengkapi kerangka DFMA klasik dengan memperkenalkan **Multi-Criteria Decision Analysis (MCDA)** yang diintegrasikan ke dalam lingkungan Building Information Modelling (BIM). Penulis menyusun sebuah *weighted scoring function* untuk evaluasi desain jembatan pracetak:

$$S_j = \sum_{k=1}^{K} w_k \cdot v_{k,j}$$

dengan $S_j$ adalah skor total desain alternatif ke-$j$, $w_k$ adalah bobot kriteria ke-$k$, dan $v_{k,j}$ adalah nilai ternormalisasi kriteria $k$ pada alternatif $j$. Kriteria yang digunakan mencakup tidak hanya biaya dan kapasitas struktural, tetapi juga manufacturability, transportability (dimensi & berat maksimum), liftability (sesuai kapasitas crane), erection time, dan disassemblability. Pendekatan ini memberikan dimensi tambahan pada DFMA: dari yang awalnya hanya digunakan untuk *component-level decision*, berkembang menjadi *system-level decision support*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Amirullah & Jakaria (2024) menyusun metodologi implementasi DFMA ke dalam **delapan tahap prosedural** yang dapat diadopsi sebagai SOP industri. Tahapan ini merepresentasikan kerangka kerja sistematis yang menghubungkan kebutuhan pelanggan (voice of customer) dengan kemampuan produksi internal.

**Tahap 1 – Decomposition of Functional Requirements.** Produk diuraikan menjadi fungsi-fungsi dasar menggunakan diagram FAST (Function Analysis System Technique). Untuk coffee enema basket, fungsi utamanya mencakup: menahan bubuk kopi saat pencucian, memungkinkan aliran larutan yang terkontrol, tahan terhadap korosi dan suhu, serta aman kontak dengan jaringan tubuh (biocompatibility).

**Tahap 2 – Component Identification and Inventory.** Seluruh komponen desain eksisting diinventarisasi dengan menyertakan informasi teknis: material, dimensi, toleransi, proses fabrikasi saat ini, dan supplier (jika ada). Pada paper Amirullah & Jakaria, desain awal coffee enema basket terdiri dari 14 komponen termasuk baut, ring, mur, jaring-jaring, dan bodi utama.

**Tahap 3 – DFA Screening (Three Boothroyd Criteria).** Setiap komponen diuji terhadap tiga pertanyaan Boothroyd untuk menentukan kelayakan eliminasi. Komponen yang lolos hanya pada satu kriteria (movement, different material, separation required) dipertahankan; sisanya dikategorikan sebagai kandidat integrasi.

**Tahap 4 – Concept Generation for Part Consolidation.** Komponen-komponen yang lolos eliminasi kemudian dirancang ulang agar beberapa di antaranya dapat digabungkan menjadi satu komponen tunggal. Strategi integrasi meliputi: *snap-fit joints*, *living hinges*, *integral fasteners*, dan *welding/bonding during sub-assembly*. Pada redesain Amirullah & Jakaria (2024), bodi utama dan jaring difusikan menjadi satu struktur cetakan injeksi dengan pola perforasi integral.

**Tahap 5 – DFM Analysis for Remaining Parts.** Untuk komponen yang tidak bisa diintegrasikan, dilakukan analisis proses manufaktur: apakah geometri mendukung cetakan injeksi satu-cavity, apakah wall thickness dapat diseragamkan untuk mencegah sink mark, dan apakah orientasi part memungkinkan ejection tanpa undercuts tambahan.

**Tahap 6 – Cost Modeling and Comparison.** Biaya total desain eksisting dan redesain dihitung menggunakan formulasi pada Bagian 2, kemudian dibandingkan dalam bentuk incremental cost breakdown.

**Tahap 7 – Prototype Fabrication and Functional Testing.** Prototipe redesain dicetak (atau difabrikasi) dan diuji terhadap spesifikasi: kekuatan tarik jaring, laju aliran, kapasitas tampung bubuk, dan ketahanan siklus pencucian.

**Tahap 8 – Documentation and Standardization.** Hasil redesain didokumentasikan dalam format yang sesuai standar ISO (misalnya ISO 9001 untuk quality management dan ISO 13485 untuk医疗器械), termasuk updated bill of materials (BOM), process flow chart, dan work instruction.

Islam (2024) menambahkan satu tahap prasyarat pada tahap 1, yaitu **BIM-Integrated Design Capture**: sebelum dekomposisi fungsional dilakukan, model BIM dari desain eksisting dan alternatif harus sudah tersedia, lengkap dengan metadata geometri, material, dan relasi spasial. Tanpa integrasi BIM ini, evaluasi kriteria *transportability* dan *liftability* tidak dapat dilakukan secara akurat. Kedua metodologi ini, ketika digabungkan, membentuk SOP komprehensif yang dapat diimplementasikan di berbagai industri.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk menunjukkan kekuatan analitis DFMA secara kuantitatif, kita akan melakukan replikasi perhitungan berdasarkan data ilustratif yang konsisten dengan temuan Amirullah & Jakaria (2024) untuk coffee enema basket. Asumsikan desain eksisting memiliki parameter seperti tercantum pada Tabel 1.

**Tabel 1. Parameter Desain Eksisting Coffee Enema Basket**

| Parameter | Nilai |
|---|---|
| Jumlah komponen aktual ($N_s$) | 14 komponen |
| Jumlah komponen minimum teoritis ($N_m$) | 5 komponen |
| Waktu perakitan eksisting ($t_{assembly,old}$) | 168 detik |
| Upah operator ($r_{labor}$) | Rp 25.000/jam ≈ Rp 6,94/detik |
| Material utama | PP (Polypropylene) food grade |
| Harga material PP ($p_{PP}$) | Rp 45.000/kg |
| Total massa desain eksisting | 0,180 kg/unit |
| Volume produksi tahunan | 24.000 unit |

**Langkah 1 – Hitung Design Efficiency eksisting:**

$$DE_{old} = \frac{N_m}{N_s} \times 100\% = \frac{5}{14} \times 100\% = 35{,}71\%$$

Nilai DE 35,71% mengindikasikan bahwa desain eksisting memiliki 60,29% komponen yang merupakan kandidat eliminasi/integrasi—angka yang sangat tidak efisien menurut standar Boothroyd (target ideal DE ≥ 70%).

**Langkah 2 – Estimasi biaya perakitan eksisting:**

$$C_{assembly,old} = t_{assembly,old} \times r_{labor} = 168 \text{ detik} \times 6{,}94 \text{ Rp/detik} = Rp\ 1.165{,}92$$

**Langkah 3 – Estimasi biaya material eksisting:**

$$C_{material,old} = m_{old} \times p_{PP} = 0{,}180 \text{ kg} \times 45.000 \text{ Rp/kg} = Rp\ 8.100$$

**Langkah 4 – Setelah redesain (berdasarkan temuan paper):