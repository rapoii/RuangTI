# 1647 — Redesain Coffee Enema Basket dengan Metode Design for Manufacture and Assembly (DFMA) serta Integrasinya dalam Evaluasi Desain Multi-Kriteria Berbasis BIM

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesain Produk Alat Kesehatan Menggunakan Prinsip DFMA (Design for Manufacture and Assembly) dan Ekstensi ke Platform BIM untuk Konstruksi Prefabrikasi
**Jurnal & Sitasi Utama:** Amirullah, A. R., & Jakaria, R. B. (2024). *Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method*. Peer-Reviewed Journal. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Islam, M. (2024). *A BIM-Based Multi-Criteria Bridge Design Evaluation Framework Integrating Design for Manufacture and Assembly (DfMA) for Prefabricated Bridge Construction*. Journal of Sustainable Development and Policy. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Rekayasa desain produk pada abad ke-21 menuntut konvergensi antara fungsionalitas produk, biaya produksi, dan kecepatan perakitan yang saling kompatibel. Amirullah dan Jakaria (2024) dalam artikelnya yang terbit pada jurnal ber-DOI [10.21070/ups.3309](https://doi.org/10.21070/ups.3309) menyoroti isu krusial pada produk *coffee enema basket*—sebuah komponen fungsional pada terapi kesehatan alternatif yang berfungsi sebagai wadah saringan kopi organik untuk prosedur kolon hidroterapi. Produk ini memiliki karakteristik unik karena selain harus memenuhi standar higienitas alat kesehatan (*medical device grade*), juga harus mudah dirakit, dicuci ulang, dan diproduksi secara massal dengan biaya terjangkau sehingga dapat diakses oleh segmen pengguna *wellness* yang terus berkembang.

Urgensi operasional paper ini terletak pada tiga permasalahan klasik yang diidentifikasi oleh Amirullah dan Jakaria (2024). Pertama, desain awal (*existing design*) memiliki terlalu banyak komponen (*over-parted design*) yang meningkatkan waktu perakitan dan potensi kesalahan manusiawi (*human assembly error*). Kedua, pemilihan material dan proses manufaktur belum optimal, yang berdampak pada *bill of materials* (BOM) yang membengkak dan biaya produksi yang tidak kompetitif. Ketiga, tidak ada analisis kuantitatif berbasis DFMA yang menjadi dasar keputusan redesain, sehingga perbaikan desain bersifat intuitif, bukan *evidence-based*. Konteks ini selaras dengan laporan Islam (2024) pada DOI [10.63125/av45jf21](https://doi.org/10.63125/av45jf21) yang menemukan bahwa pada industri konstruksi jembatan prefabrikasi, keputusan desain konvensional hanya didasarkan pada biaya dan kecukupan struktural, sehingga masalah *buildability* baru teridentifikasi pada tahap *shop-drawing* atau di lapangan—yaitu ketika koreksi sudah sangat mahal.

Dalam konteks ekonomi, pasar global alat kesehatan rumahan (*home medical devices*) diproyeksikan tumbuh signifikan pasca-pandemi, sehingga kemampuan menghasilkan produk dengan desain yang ramping (*lean design*) menjadi keunggulan kompetitif. Pendekatan Design for Manufacture and Assembly (DFMA) yang diperkenalkan Boothroyd dan Dewhurst pada tahun 1983—dan terus berkembang hingga kini—menjadi kerangka kerja standar industri untuk menjawab tantangan tersebut. DFMA menggabungkan dua sub-filosofi: *Design for Manufacture* (DFM) yang mengoptimalkan proses fabrikasi, dan *Design for Assembly* (DFA) yang menyederhanakan proses perakitan. Penggunaannya pada produk skala kecil-menengah seperti *coffee enema basket* dapat menghasilkan penghematan 30–60% pada jumlah komponen dan 40–70% pada waktu perakitan berdasarkan studi-studi empiris terdahulu.

## 2. Landasan Teori & Formulasi Matematis

Kerangka DFMA yang digunakan oleh Amirullah dan Jakaria (2024) berakar pada metodologi Boothroyd-Dewhurst yang telah menjadi standar ISO/TR 16310 untuk rekayasa desain simultan. Terdapat tiga metrik fundamental yang dipakai untuk mengkuantifikasi kualitas desain, yaitu **DFA Index** (*Design Efficiency*).

$$DFA_{Index} = \frac{N_{min}}{N_a} \times 100\%$$

dengan $N_{min}$ adalah jumlah minimum teoritis komponen yang dibutuhkan untuk memenuhi fungsi produk, dan $N_a$ adalah jumlah aktual komponen pada desain awal. Nilai $DFA_{Index}$ yang mendekati 100% menunjukkan desain sudah mendekati ideal (tidak ada *redundant part*).

Metrik kedua adalah **Assembly Efficiency** yang mengukur proporsi waktu assembly teoritis minimum terhadap waktu aktual:

$$\eta_a = \frac{t_{min}}{t_a} \times 100\%$$

dengan $t_{min} = \sum_{i=1}^{N_{min}} t_{i}^{*}$ adalah jumlah dari waktu handling dan insertion minimum tiap komponen $i$, dan $t_a$ adalah waktu assembly aktual yang diukur di lantai produksi.

Untuk analisis biaya manufaktur, model biaya total yang digunakan mengikuti formulasi Boothroyd:

$$C_{total} = C_{material} + C_{manufacturing} + C_{assembly} + C_{overhead}$$

di mana $C_{material}$ dihitung dari volume material dikalikan densitas dan harga satuan, $C_{manufacturing}$ mencakup biaya mesin, *tooling*, dan *cycle time*, sementara $C_{assembly}$ adalah fungsi linear dari waktu assembly:

$$C_{assembly} = t_a \times R_{labor}$$

dengan $R_{labor}$ adalah tarif tenaga kerja per satuan waktu (misalnya Rp 25.000/jam untuk industri kecil-menengah di Indonesia).

Efisiensi biaya sebelum-sesudah redesain dihitung dengan:

$$\Delta C = \frac{C_{before} - C_{after}}{C_{before}} \times 100\%$$

Pada paper Amirullah dan Jakaria (2024), ketiga metrik ini digunakan secara simultan untuk mengevaluasi dua skenario desain—*existing design* dan *proposed design*—sehingga keputusan redesain bersifat kuantitatif, bukan spekulatif. Islam (2024) memperluas kerangka DFMA ke domain konstruksi jembatan prefabrikasi dengan mengintegrasikannya ke dalam platform Building Information Modelling (BIM), sehingga kriteria evaluasi tidak lagi terbatas pada biaya dan struktur, tetapi juga manufacturability, transportability, liftability, dan erectability—kelima aspek ini kemudian diagregasikan dalam *Multi-Criteria Decision Analysis* (MCDA) berbobot AHP (Analytic Hierarchy Process):

$$S_i = \sum_{j=1}^{n} w_j \times s_{ij}$$

dengan $S_i$ adalah skor total alternatif desain $i$, $w_j$ adalah bobot kriteria $j$, dan $s_{ij}$ adalah skor ternormalisasi alternatif $i$ pada kriteria $j$, dengan $\sum w_j = 1$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi DFMA pada redesain *coffee enema basket* mengikuti **SOP 7 Tahap DFMA** yang distandarkan untuk produk manufaktur skala kecil-menengah:

**Tahap 1 — Pengumpulan Informasi Fungsional.** Tahap ini mencakup identifikasi kebutuhan pengguna (*user requirement*), spesifikasi kinerja (kapasitas tampung saringan, tingkat filtrasi, kompatibilitas dengan selang enema standar, dan kemampuan sterilisasi autoklaf pada suhu $\geq 121^{\circ}C$), serta regulasi yang berlaku (misalnya standar SNI IEC 60601 untuk alat kesehatan).

**Tahap 2 — Function Analysis.** Setiap fungsi produk diuraikan menggunakan diagram FAST (*Function Analysis System Technique*). Fungsi primer *coffee enema basket* adalah menyaring partikel kopi padat sambil mempertahankan aliran larutan; fungsi sekunder meliputi menahan kopi pada posisinya selama prosedur dan memudahkan pembuangan ampas.

**Tahap 3 — Concept Generation.** Beberapa alternatif konsep dihasilkan, antara lain: (a) desain *one-piece molded* (satu komponen cetak injeksi polypropylene), (b) desain dua komponen (*snap-fit assembly*), dan (c) desain multi-komponen dengan sekrup.

**Tahap 4 — DFA Analysis.** Setiap alternatif dievaluasi menggunakan *Boothroyd-Dewhurst DFA Worksheet* untuk menentukan $N_{min}$ dan $t_{min}$. Pada tahap ini, pertanyaan kritis yang diajukan adalah: "Apakah komponen ini bergerak relatif terhadap komponen lain selama operasi?" (*motion criterion*), dan "Apakah komponen ini harus berupa material berbeda dari komponen lain yang sudah ada?" (*different material criterion*). Jika kedua pertanyaan jawabannya "tidak", komponen tersebut kandidat untuk dieliminasi.

**Tahap 5 — DFM Analysis.** Pemilihan proses manufaktur (cetak injeksi, cetak kompresi, atau *3D printing*) dievaluasi berdasarkan geometri, volume produksi, dan toleransi. Untuk *coffee enema basket*, proses cetak injeksi polipropilena food-grade menjadi pilihan utama karena menghasilkan produk higienis, konsisten, dan biaya per unit rendah pada volume $\geq 5.000$ unit.

**Tahap 6 — Prototyping dan Validasi.** Prototipe dicetak dan diuji pada tiga aspek: (i) *fit and function test* (apakah saringan berfungsi sesuai spesifikasi), (ii) *assembly time study* (pengukuran $t_a$ dengan stopwatch dan *time study* standar), dan (iii) *user acceptance test*.

**Tahap 7 — Finalisasi Desain dan Dokumentasi.** Desain akhir, gambar teknik, BOM, dan *assembly instruction* didokumentasikan untuk proses produksi.

Pada paper Islam (2024), alur ini diperluas dengan langkah **Integrasi BIM-DfMA**: model 3D produk jembatan dibuat dalam perangkat lunak BIM (Revit/Tekla), kemudian setiap komponen diekstrak parametriknya (*length*, *width*, *height*, *weight*, *material grade*) dan dimasukkan ke matriks MCDA. Diagram alir proses untuk kedua paper mengikuti pola:

```
[User Requirement] → [Function Analysis] → [Concept Generation]
            ↓
[DFA Analysis] ←→ [DFM Analysis] → [Prototyping]
            ↓                           ↓
       [MCDA/BIM Eval]          [Validation Test]
            ↓                           ↓
       [Final Design] ←─────[Iteration Loop]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk memberikan gambaran numerik yang realistis mengikuti pendekatan Amirullah dan Jakaria (2024), misalkan sebuah produk *coffee enema basket* dengan desain awal (*existing*) memiliki karakteristik sebagai berikut:

**Tabel 1. Parameter Desain Awal vs Desain Usulan (Ilustrasi Kuantitatif)**

| Parameter | Desain Awal | Desain Usulan (DFMA) |
|---|---|---|
| Jumlah komponen ($N$) | 8 komponen | 3 komponen |
| Material | Stainless steel 304 + plastik PP | Polipropilena food-grade (1 material) |
| Waktu assembly aktual ($t_a$) | 180 detik/unit | 45 detik/unit |
| Massa per unit | 145 gram | 62 gram |
| Biaya material | Rp 18.500/unit | Rp 6.200/unit |
| Biaya assembly ($R_{labor}$ = Rp 25.000/jam) | Rp 1.250/unit | Rp 312/unit |

**Perhitungan 1 — DFA Index.**
Teori minimum komponen untuk