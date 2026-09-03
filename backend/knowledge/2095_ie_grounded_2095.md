# 2095 — Redesain Coffee Enema Basket Menggunakan Metode Design for Manufacture and Assembly (DFMA): Integrasi Prinsip Rekayasa Produk di Industri Alat Kesehatan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan (medical device) merupakan salah satu sektor manufaktur dengan tingkat regulasi paling ketat di dunia, yang mensyaratkan keseimbangan presisi antara fungsionalitas klinis, keamanan pasien, efisiensi produksi, dan kepatuhan terhadap standar seperti ISO 13485, FDA 21 CFR Part 820, dan ISO 14971 untuk manajemen risiko. Dalam konteks inilah Amirullah dan Jakaria (2024) melalui paper yang dipublikasikan dengan DOI [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309) menyoroti pentingnya pendekatan **Design for Manufacture and Assembly (DFMA)** sebagai kerangka rekayasa sistem untuk meredain produk medis spesifik berupa *coffee enema basket* — sebuah komponen filtrasi yang berfungsi sebagai saringan bubuk kopi pada prosedur *coffee enema* (terapi yang telah ada sejak era Perang Dunia I dan kini kembali populer dalam praktik wellness alternatif). Produk ini memiliki karakteristik operasional yang menantang karena harus memenuhi tiga kriteria simultan: (1) kompatibilitas food-grade dan medical-grade pada material yang kontak langsung dengan larutan, (2) kemampuan filtrasi yang konsisten dengan ukuran partikel yang presisi, dan (3) kemudahan perakitan, pembersihan, serta disassembly untuk sterilisasi berulang.

Urgensi ekonomis dari penerapan DFMA pada kategori produk ini cukup substansial. Studi empiris menunjukkan bahwa keputusan desain yang diambil pada tahap konsep (*concept stage*) menentukan hingga 70–80% dari total biaya produksi siklus hidup produk, meskipun tahap ini hanya menyerap 5–7% dari total biaya pengembangan. Tanpa pendekatan DFMA, desainer cenderung menambah komponen (*over-engineering*) untuk memenuhi satu requirement spesifik, tanpa memikirkan dampak downstream terhadap biaya perakitan, waktu produksi, dan risiko cacat. Amirullah dan Jakaria (2024) mengidentifikasi bahwa produk *coffee enema basket* konvensional di pasaran umumnya memiliki lebih dari 15 bagian (*parts*) yang tidak efisien, dengan tingkat *assembly efficiency* yang rendah karena fastener yang berlebihan, fitur yang tidak perlu, dan geometri yang mempersulit proses *insertion* dan *fastening*. Konsekuensinya adalah biaya produksi tinggi, *time-to-market* panjang, dan sulitnya memenuhi target produksi massal.

Konteks industri yang lebih luas juga mendukung adopsi DFMA. Seperti yang dikemukakan oleh Islam (2024) dalam studinya tentang integrasi DFMA dengan Building Information Modeling (BIM) untuk konstruksi jembatan prefabrikasi (DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)), pendekatan DFMA memberikan nilai tambah signifikan ketika diintegrasikan sejak tahap konseptual karena masalah *buildability* — yang biasanya baru terdeteksi saat gambar kerja (*shop drawing*) sudah final — dapat diantisipasi lebih awal. Prinsip ini bersifat universal dan berlaku lintas industri: dari alat kesehatan presisi seperti *coffee enema basket*, hingga infrastruktur sipil berskala besar seperti jembatan. Kedua paper ini saling melengkapi karena menunjukkan bahwa esensi DFMA adalah **menggeser keputusan teknis dari titik di mana koreksi menjadi mahal ke titik di mana iterasi masih murah**. Inilah yang menjadi justifikasi utama mengapa modul ini menjadi substansi penting dalam kurikulum Teknik Industri modern.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoritis DFMA yang digunakan dalam paper Amirullah dan Jakaria (2024) menggabungkan dua pilar utama: **Design for Assembly (DFA)** dengan pendekatan Boothroyd-Dewhurst dan **Design for Manufacture (DFM)**. Pendekatan Boothroyd-Dewhurst dipilih karena kesederhanaannya yang aplikatif untuk produk dengan tingkat kompleksitas menengah seperti *coffee enema basket*, di mana setiap bagian dievaluasi berdasarkan dua pertanyaan fundamental: *Apakah bagian ini bergerak relatif terhadap bagian lain selama operasi?* dan *Apakah bagian ini harus terbuat dari material yang berbeda karena kebutuhan fungsionalnya?* Jika jawaban keduanya "tidak", maka bagian tersebut layak dikonsolidasikan.

### 2.1. Indeks Assembly Efficiency (η)

Formula dasar untuk mengukur efisiensi perakitan dalam metode Boothroyd-Dewhurst adalah:

$$\eta_{assembly} = \frac{N_{min}}{N_{actual}} \times 100\%$$

di mana:
- $N_{min}$ = jumlah minimum teoritis bagian yang diperlukan untuk memenuhi fungsi produk
- $N_{actual}$ = jumlah bagian aktual pada desain awal (baseline)

Untuk *coffee enema basket* baseline (konvensional), asumsikan $N_{actual} = 16$ bagian, sedangkan analisis DFMA menunjukkan $N_{min} = 7$ bagian yang esensial (housing, filter mesh, handle, base ring, lid, gasket, dan fastener utama). Dengan demikian:

$$\eta_{baseline} = \frac{7}{16} \times 100\% = 43{,}75\%$$

Setelah redesain dengan DFMA menjadi $N_{redesign} = 8$ bagian:

$$\eta_{redesign} = \frac{7}{8} \times 100\% = 87{,}50\%$$

Peningkatan efisiensi perakitan sebesar $\Delta\eta = 87{,}50\% - 43{,}75\% = 43{,}75$ poin persentase ini merepresentasikan reduksi substansial dalam kompleksitas perakitan.

### 2.2. Efisiensi Waktu Perakitan (Boothroyd Formula)

Metode Boothroyd-Dewhurst menggunakan formula efisiensi berbasis waktu:

$$\eta_{time} = \frac{t_{min}}{t_{actual}} \times 100\%$$

di mana $t_{min}$ dihitung menggunakan tabel waktu penanganan standar (*handling time*) Boothroyd yang bervariasi dari 1,5 detik (untuk bagian snap-fit sederhana) hingga 9,0 detik (untuk bagian dengan insertion multi-axis dan fastener). Untuk produk dengan $N$ bagian:

$$t_{min} = \sum_{i=1}^{N} t_{i,standard}$$

### 2.3. DFM Index dan Manufacturing Cost

Untuk komponen manufaktur, biaya produksi dapat dimodelkan sebagai:

$$C_{manufacturing} = C_{material} + C_{machining} + C_{tooling} + C_{setup} + C_{finishing}$$

di mana setiap komponen biaya memiliki sub-formulasi:

$$C_{material} = \rho \times V \times P_{material}$$

$$C_{machining} = T_{machining} \times R_{machine} + T_{toolchange} \times C_{tool}$$

dengan $\rho$ adalah densitas material, $V$ volume komponen, $P_{material}$ harga per satuan massa, $T_{machining}$ waktu pemesinan, $R_{machine}$ rate mesin, $T_{toolchange}$ waktu penggantian alat, dan $C_{tool}$ biaya alat potong.

### 2.4. DFMA Score Agregat

Untuk evaluasi holistik, Amirullah dan Jakaria (2024) menggunakan skor DFMA agregat:

$$S_{DFMA} = w_1 \cdot \eta_{assembly} + w_2 \cdot \eta_{manufacturing} + w_3 \cdot (1 - R_{defect})$$

dengan $w_1, w_2, w_3$ adalah bobot kepentingan relatif yang biasanya diset $w_1 = 0{,}40$, $w_2 = 0{,}35$, $w_3 = 0{,}25$, dan $R_{defect}$ adalah tingkat cacat per satu juta kesempatan (DPMO).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis DFMA pada redesain *coffee enema basket* mengikuti SOP berlapis yang terdiri dari tujuh tahapan kritis, yang secara substansial sejalan dengan kerangka yang dikembangkan oleh Islam (2024) untuk proyek infrastruktur jembatan prefabrikasi:

**Tahap 1 — Analisis Fungsi Produk dan Dekomposisi.** Tim rekayasa membuat *functional decomposition diagram* yang memetakan fungsi primer (filtrasi partikel kopi), fungsi sekunder (penahanan tekanan, pegangan ergonomis, segel kedap), dan fungsi tersier (estetika, branding). Setiap fungsi diberi bobot kepentingan (*weight*) yang akan digunakan dalam *trade-off analysis*.

**Tahap 2 — Bill of Materials (BoM) Audit Baseline.** Inventorisasi lengkap seluruh komponen existing, identifikasi supplier, dan pencatatan Lead Time, MOQ (Minimum Order Quantity), serta unit cost per komponen. Untuk produk baseline, BoM mencakup housing atas, housing bawah, 4 baut M3, 4 mur M3, 8 ring, mesh filter stainless steel, handle plastik ABS, gasket silikon food-grade, lid, dan label produk.

**Tahap 3 — DFA Scoring (Boothroyd-Dewhurst).** Setiap komponen dievaluasi dengan dua *yes/no* questions. Komponen yang gagal memenuhi setidaknya satu kriteria kandidat untuk eliminasi atau konsolidasi.

**Tahap 4 — DFM Screening.** Untuk komponen yang lolos DFA, dilakukan evaluasi manufacturability berdasarkan material selection (misalnya food-grade stainless steel 304 vs 316L), proses fabrikasi (stamping, injection molding, machining, additive manufacturing), toleransi geometris (GD&T per ASME Y14.5), dan surface finish (Ra ≤ 0,8 μm untuk kontak makanan).

**Tahap 5 — Generasi Konsep Alternatif.** Menggunakan *morphological chart*, tim menyusun minimal 3 konsep redesain yang berbeda dan mengevaluasinya dengan *Pugh Matrix* berbobot.

**Tahap 6 — Prototyping dan Validasi.** Konsep terpilih dibuat prototipe menggunakan rapid prototyping (3D printing SLA untuk visual, CNC machining untuk komponen fungsional), kemudian diuji sesuai standar ISO 13485 dan uji fungsional filtrasi.

**Tahap 7 — Analisis Biaya Siklus Hidup dan Keputusan Final.** Perhitungan total cost of ownership (TCO) meliputi biaya material, fabrikasi, perakitan, inspeksi, packaging, dan warranty.

Alur logika ini secara grafis dapat direpresentasikan sebagai: **Concept → Function Analysis → DFA Audit → DFM Screening → Concept Generation → Prototype → Validation → Production**, sebuah *funnel* yang menjamin hanya opsi terbaik yang lolos ke produksi massal.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk mengilustrasikan dampak kuantitatif DFMA secara empiris, disajikan studi kasus komparatif antara desain baseline *coffee enema basket* dan redesain DFMA. Parameter industri yang digunakan didasarkan pada data tipikal UMKM manufaktur alat kesehatan di Indonesia dengan kapasitas produksi 5.000 unit/bulan.

### 4.1. Input Parameter Baseline (Desain Konvensional)

| Komponen | Material | Jumlah | Unit Cost (Rp) | Waktu Assembly (detik) |
|---|---|---|---|---|
| Housing atas | SS 304 | 1 | 12.500 | 8,5 |
| Housing bawah | SS 304 | 1 | 11.000 | 8,5 |
| Baut M3×10 | SS 304 | 4 | 350 | 3,5 |
| Mur M3 | SS 304 | 4 | 200 | 4,0 |
| Ring | SS 304 | 4 | 150 | 2,0 |
| Mesh filter | SS 316L | 1 | 8.500 | 6,0 |
| Handle | ABS | 1 | 4.500 | 5,5 |
| Gasket | Silikon food-grade | 1 | 3.200 | 3,0 |
| Lid | PP | 1 | 2.800 | 4,5 |
| Label | Vinyl | 1 | 500 | 2,0 |
| **Total Baseline** | | **18** | **Rp 44.300** | **47,5 detik** |

### 4.2. Redes