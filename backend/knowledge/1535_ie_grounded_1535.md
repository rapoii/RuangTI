# 1535 — Redesain Produk Manufaktur dengan Pendekatan Design for Manufacture and Assembly (DFMA): Studi Kasus Coffee Enema Basket dan Integrasi Lintas-Sektor pada Konstruksi Jembatan Pracetak

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur modern — baik itu perangkat medis, komponen otomotif, maupun elemen struktural infrastruktur — menghadapi tantangan struktural yang serupa: bagaimana menerjemahkan kebutuhan fungsional pelanggan menjadi geometri produk yang dapat diproduksi secara massal dengan biaya minimum, waktu perakitan yang pendek, dan tingkat cacat yang rendah. Amirullah dan Jakaria (2024) dalam artikel "Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method" mengangkat permasalahan ini pada kasus nyata sebuah produk alat kesehatan, yaitu coffee enema basket — sebuah keranjang saringan stainless steel yang digunakan dalam prosedur hidroterapi kolon untuk memisahkan ampas kopi dari cairan infus sebelum dimasukkan ke pasien. DOI resmi artikel tersebut adalah [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309). Produk ini sebelumnya memiliki desain yang fungsional secara klinis, namun dari sisi manufacturability mengandung komponen berlebih, sambungan permanen (welded joints) yang sulit di-inspeksi, serta proses perakitan multi-langkah yang meningkatkan lead time produksi.

Urgensi ekonomis dari studi ini tidak dapat dipandang sebelah mata. Pasar perangkat medis rumah tangga di Indonesia diproyeksikan tumbuh pada CAGR 8,2% periode 2023–2028 (laporan internal yang dirujuk oleh Amirullah & Jakaria, 2024). Dalam konteks ini, kemampuan menekan biaya produksi tanpa mengorbankan sterilitas dan keamanan pasien menjadi diferensiator kompetitif. DFMA — yang awalnya dipopulerkan oleh Geoffrey Boothroyd dan Peter Dewhurst pada dekade 1980-an melalui Boothroyd-Dewhurst Method — muncul sebagai metodologi terstruktur untuk mencapai tujuan tersebut dengan pendekatan *concurrent engineering*: keputusan tentang manufacturability dan assemblyability diambil sejak fase konseptual, bukan diperbaiki setelah desain dibekukan. Hal ini paralel dengan temuan Islam (2024) dalam "A BIM-Based Multi-Criteria Bridge Design Evaluation Framework Integrating Design for Manufacture and Assembly (DfMA) for Prefabricated Bridge Construction" (DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)), yang menunjukkan bahwa dalam industri konstruksi jembatan pracetak, permasalahan klasik muncul ketika pengetahuan tentang manufaktur, transportasi, pengangkatan (*lifting*), dan ereksi baru dimasukkan setelah desain struktural dibekukan, mould dipotong, dan koreksi hanya mungkin dilakukan dengan biaya tambahan yang sangat tinggi. Kedua paper ini, meskipun beroperasi di domain yang tampak jauh berbeda — perangkat medis versus infrastruktur jembatan — ternyata menghadapi *root cause* yang identik: fragmentasi proses desain di mana trade-off manufacturability tidak dipertimbangkan secara eksplisit hingga terlambat.

## 2. Landasan Teori & Formulasi Matematis

Metodologi DFMA yang digunakan oleh Amirullah dan Jakaria (2024) mengikuti kerangka dua tahap yang telah menjadi standar industri: **Design for Manufacture (DFM)** untuk analisis manufacturability, dan **Design for Assembly (DFA)** untuk optimasi proses perakitan. Kerangka teoretis ini dibangun di atas tiga pilar kuantitatif.

**Pilar 1: Minimum Part Count (DFA Boothroyd-Dewhurst).** Setiap komponen dievaluasi dengan tiga pertanyaan krusial: (i) apakah part tersebut bergerak relatif terhadap part lain selama operasi?, (ii) apakah part tersebut harus terbuat dari material yang berbeda?, (iii) apakah part tersebut harus dipisahkan untuk memungkinkan akses perakitan/pemeliharaan? Jika ketiga jawaban negatif, maka part tersebut kandidat eliminasi. Formulasi efisiensi perakitan adalah:

$$\eta_{a} = \frac{N_{min}}{N_{actual}} \times 100\%$$

di mana $N_{min}$ adalah jumlah part minimum menurut fungsi, dan $N_{actual}$ adalah jumlah part aktual dalam desain. Semakin mendekati 100%, semakin sederhana desain.

**Pilar 2: Estimated Assembly Time (EAO).** Setiap part yang lolos penyaringan dihitung waktu handling, insertion, dan fastening-nya. Total waktu perakitan dinyatakan sebagai:

$$T_{assembly} = \sum_{i=1}^{n} \left( t_{h,i} + t_{i,i} + t_{f,i} \right)$$

dengan $t_{h,i}$ = waktu *handling* part ke-$i$ (insertion, snap-fit, dll.), $t_{i,i}$ = waktu *insertion* (mengarahkan, memposisikan), dan $t_{f,i}$ = waktu *fastening* (sekrup, klip, pengelasan). Untuk analisis biaya, total biaya perakitan:

$$C_{assembly} = T_{assembly} \times R_{labor} \times (1 + O_{h})$$

di mana $R_{labor}$ adalah tarif tenaga kerja per detik (Rp/detik) dan $O_h$ adalah *overhead* rate (persentase).

**Pilar 3: Manufacturing Cost Function.** Biaya manufaktur setiap part dimodelkan sebagai:

$$C_{m,i} = C_{mat,i} + C_{proc,i} + C_{tool,i} + C_{overhead,i}$$

di mana $C_{mat,i}$ adalah biaya material, $C_{proc,i}$ adalah biaya proses (machining, stamping, injection molding), $C_{tool,i}$ adalah amortisasi biaya tooling, dan $C_{overhead,i}$ adalah biaya tidak langsung. Total biaya produk adalah:

$$C_{total} = \sum_{i=1}^{n} C_{m,i} + C_{assembly} + C_{QC}$$

Untuk evaluasi multi-kriteria seperti yang digunakan Islam (2024) dalam framework BIM-DfMA jembatan, pendekatan Analytical Hierarchy Process (AHP) digunakan untuk pembobotan kriteria. Bobot prioritas kriteria $w_j$ dihitung dari perbandingan berpasangan, dan skor akhir desain alternatiif:

$$S_{k} = \sum_{j=1}^{m} w_{j} \cdot s_{j,k}$$

dengan $s_{j,k}$ adalah skor ternormalisasi kriteria $j$ untuk alternatif desain $k$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Amirullah dan Jakaria (2024) menyusun SOP DFMA dalam enam tahap sistematis yang dapat direplikasi pada produk manufaktur apapun:

**Tahap 1 — Product Specification & Functional Decomposition.** Mengidentifikasi fungsi utama coffee enema basket: (a) menahan ampas kopi dengan pori tertentu, (b) memungkinkan aliran infus merata, (c) tahan suhu tinggi (sterilisasi autoklaf 121°C), dan (d) food-grade stainless steel 304/316. Fungsi ini kemudian diterjemahkan ke dalam QFD (*Quality Function Deployment*) house of quality.

**Tahap 2 — Concept Generation.** Mengembangkan 3–5 konsep alternatiif: konsep monolitik (single-piece stamping), konsep modular (snap-fit assembly), konsep welded frame (referensi desain lama), dan konsep wire-formed (alternatif rendah tooling).

**Tahap 3 — DFA Analysis.** Menerapkan kuesioner Boothroyd-Dewhurst pada setiap konsep. Part yang tidak lolos eliminasi ditandai dengan simbol "★" pada Bill of Materials