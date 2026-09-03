# 2671 — Redesain Coffee Enema Basket Berbasis Metode Design for Manufacture and Assembly (DFMA) sebagai Paradigma Optimasi Produk Industri Kesehatan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal (Universitas Muhammadiyah Surakarta)*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan (medical devices) merupakan salah satu sektor manufaktur dengan tingkat regulasi, presisi, dan tuntutan kualitas paling stringent di dunia. Setiap produk医疗器械 wajib memenuhi standar desain yang menyeimbangkan antara fungsionalitas klinis, keselamatan pasien (patient safety), kemampuan manufaktur (manufacturability), serta efisiensi biaya produksi massal. Amirullah dan Jakaria (2024) dalam publikasi mereka di *Peer-Reviewed Journal* dengan DOI [10.21070/ups.3309](https://doi.org/10.21070/ups.3309) mengangkat kasus nyata berupa redesain **coffee enema basket** — sebuah komponen filtrasi pada perangkat terapi kolon yang berfungsi menampung bubuk kopi sekaligus memisahkan ampas dari larutan melalui mekanisme perembesan (percolation). Produk ini pada umumnya terbuat dari stainless steel 304 grade medis dengan mesh filter, keranjang penampung (basket body), tutup ulir (threaded cap), dan gagang pegangan (handle grip).

Permasalahan fundamental yang diidentifikasi oleh Amirullah dan Jakaria (2024) adalah desain awal coffee enema basket memiliki **jumlah komponen yang berlebihan** (over-parted design), sambungan permanen yang sulit diproses, serta assembly sequence yang tidak ergonomis bagi operator lini produksi. Hasil audit desain awal menunjukkan bahwa produk tersebut mengandung banyak fitur yang tidak menambah nilai fungsional (non-value-added features) namun meningkatkan kompleksitas bill of materials (BOM), waktu perakitan, dan tingkat rejection rate di quality control. Hal ini bertentangan dengan prinsip *lean manufacturing* dan DFMA yang telah terbukti mampu menurunkan total cost of ownership hingga 30–50% pada berbagai produk manufaktur.

Urgensi redesain semakin nyata ketika mempertimbangkan konteks **Industry 4.0** dan tren personalisasi alat kesehatan rumahan (home-care medical devices) yang dipicu oleh pandemi serta meningkatnya kesadaran wellness holistik. Pasar global alat enema dan hidroterapi kolon diproyeksikan tumbuh dengan CAGR 6,8% periode 2023–2030, sehingga efisiensi desain menjadi competitive advantage. Pendekatan Design for Manufacture and Assembly (DFMA) yang digunakan oleh Amirullah dan Jakaria (2024) mengintegrasikan dua sub-disiplin: **Design for Manufacture (DFM)** yang mengoptimalkan proses fabrikasi individual parts, dan **Design for Assembly (DFA)** yang meminimalkan kompleksitas perakitan.

Studi pendukung oleh Islam (2024) dengan DOI [10.63125/av45jf21](https://doi.org/10.63125/av45jf21) pada konteks jembatan pracetak (prefabricated bridge construction) memperkuat justifikasi lintas-sektor: integrasi DFMA ke dalam kerangka evaluasi multi-kriteria berbasis BIM mampu menggeser titik keputusan desain dari tahap shop drawing ke tahap conceptual design, sehingga kesalahan buildability dapat dideteksi jauh sebelum mould dipotong dan biaya koreksi masih rendah. Lesson learned ini sangat applicable pada redesain coffee enema basket, di mana keputusan modularitas, pemilihan material, dan fitur snap-fit harus diambil sebelum tooling injection molding diinvestasikan.

Dengan demikian, redesain coffee enema basket bukan sekadar aktivitas R&D kosmetik, melainkan **keputusan strategis industri** yang menentukan margin, lead time, dan kepatuhan regulasi (terutama standar ISO 13485 untuk医疗器械). Modul 2671 ini akan membedah metodologi, formulasi matematis, dan aplikasi kuantitatif DFMA berdasarkan temuan kedua paper tersebut.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Prinsip Design for Assembly (DFA) — Indeks Efisiensi Perakitan

DFA berfungsi untuk menentukan jumlah komponen minimum teoritis versus aktual. Amirullah dan Jakaria (2024) mengadopsi kerangka Boothroyd-Dewhurst yang telah teruji di industri aerospace dan医疗器械. Indeks efisiensi perakitan dirumuskan sebagai:

$$\eta_{A} = \frac{N_{min}}{N_{a}} \times 100\%$$

di mana $N_{min}$ adalah jumlah minimum komponen yang secara teoretis diperlukan untuk memenuhi fungsi produk (tergantung pada gerakan relatif yang dibutuhkan, pemisahan material, dan aksesibilitas), sedangkan $N_{a}$ adalah jumlah aktual komponen pada desain awal atau redesain. Nilai $\eta_A$ yang mendekati 100% menandakan desain mendekati ideal; nilai di bawah 50% mengindikasikan over-parted design yang menjadi kandidat redesain.

### 2.2 Analisis Waktu Perakitan — Model Maynard

Waktu standar perakitan dihitung menggunakan rumus fundamental motion-time:

$$T_{std} = \sum_{i=1}^{n} t_i \times (1 + A) \times (1 + B) \times (1 + C)$$

di mana $t_i$ adalah waktu normal untuk gerakan dasar *i* (dalam satuan TMU atau detik), $A$ adalah allowance untuk kelelahan pribadi (biasanya 4–10%), $B$ adalah allowance untuk keterlambatan yang tidak terhindarkan (1–5%), dan $C$ adalah allowance kontingensi untuk kondisi abnormal. Pada redesain coffee enema basket, Amirullah dan Jakaria (2024) menunjukkan bahwa penggabungan beberapa part menjadi single molded part mampu memotong $n$ secara signifikan, sehingga eksponensial pengurangan waktu perakitan tercapai.

### 2.3 Total Biaya Manufaktur — Model Kumulatif

Biaya total produk manufaktur menurut pendekatan DFMA adalah:

$$C_{total} = \sum_{i=1}^{N_a} \left( C_{m,i} + C_{f,i} + C_{a,i} + C_{q,i} \right)$$

di mana:
- $C_{m,i}$ = biaya material komponen ke-$i$ (Rp/part)
- $C_{f,i}$ = biaya fabrikasi (machining, stamping, injection molding)
- $C_{a,i}$ = biaya perakitan (assembly)
- $C_{q,i}$ = biaya kualitas (inspection, rework, scrap)

Untuk desain dengan part count $N_a$ yang lebih rendah, masing-masing komponen menyederhanakan proses tooling, inventory carrying, dan inspection cost. Persentase reduksi biaya dihitung sebagai:

$$\Delta C_{\%} = \frac{C_{before} - C_{after}}{C_{before}} \times 100\%$$

### 2.4 Design for Manufacture (DFM) — Proses Seleksi Material dan Proses

DFM menitikberatkan pada pemilihan proses fabrikasi yang paling cost-effective. Untuk komponen stainless steel 304 pada coffee enema basket, beberapa alternatif proses dievaluasi:

$$C_{process} = \frac{C_{machine}}{t_{cycle}} \times t_{unit} + C_{tooling} + C_{setup}$$

Perbandingan antara proses *stamping sheet metal*, *CNC turning*, dan *metal injection molding* (MIM) menjadi krusial. Amirullah dan Jakaria (2024) dalam analisisnya menunjukkan bahwa pemilihan proses yang tepat mampu memangkas $C_{process}$ hingga 35%.

### 2.5 Kerangka Multi-Kriteria Berbasis BIM (Rujukan Islam 2024)

Untuk aplikasi lintas-sektor, Islam (2024) memperkenalkan weighted scoring function:

$$S_j = \sum_{k=1}^{K} w_k \cdot s_{jk}, \quad \sum_{k=1}^{K} w_k = 1$$

di mana $S_j$ adalah skor total alternatif desain ke-$j$, $w_k$ adalah bobot kriteria ke-$k$ (manufacturability, transportability, liftability, erectability, cost), dan $s_{jk}$ adalah skor ternormalisasi kriteria $k$ untuk alternatif $j$. Pendekatan ini adaptable untuk evaluasi desain coffee enema basket dengan kriteria: weldability, cleanability (CIP compatibility), sterilizability, biocompatibility, dan manufacturability.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Tahapan Sistematis DFMA pada Redesain Coffee Enema Basket

Berdasarkan Amirullah dan Jakaria (2024) dengan elaborasi metodologis mengikuti *Stage-Gate Process*, prosedur operasional standar (SOP) implementasi DFMA adalah sebagai berikut:

**Tahap 1 — Audit Desain Eksisting (Reverse Engineering)**
- Bongkar produk eksisting, identifikasi seluruh komponen, dan petakan fungsi masing-masing.
- Buat *function-means tree* untuk memisahkan fungsi primer (containment, filtration, sealing) dari fungsi sekunder.
- Catat jumlah part aktual $N_{a,before}$ dan waktu perakitan eksisting $T_{before}$.

**Tahap 2 — Analisis Fungsi Menggunakan FAST (Function Analysis System Technique)**
- Tetapkan fungsi dasar: *menampung bubuk kopi*, *memisahkan ampas dari cairan*, *menutup dengan rapat*, *memfasilitasi pegangan ergonomis*.
- Evaluasi setiap komponen existing: apakah mendukung fungsi dasar, ataukah redundan?

**Tahap 3 — Penerapan DFA (Boothroyd-Dewhurst)**
- Untuk setiap pasangan part yang relatif tidak bergerak satu sama lain, evaluasi kelayakan integrasi menjadi satu part.
- Tentukan $N_{min}$ berdasarkan tiga aturan Boothroyd: (1) selama proses perakitan, apakah part perlu gerakan relatif terhadap part lain? (2) apakah material berbeda diperlukan? (3) apakah part perlu dipisahkan untuk akses servis/cleaning?

**Tahap 4 — Penerapan DFM (Proses Seleksi)**
- Evaluasi proses fabrikasi alternatif untuk setiap part (atau part terintegrasi).
- Pilih proses dengan $C_{process}$ terendah sembari mempertahankan toleransi geometris kritis.

**Tahap 5 — Redesain dan Simulasi**
- Bangun model CAD 3D (SolidWorks/Siemens NX) dan jalankan FEA untuk validasi structural integrity, pressure rating, dan flow distribution.
- Simulasi injection molding untuk memastikan *moldability* (keseimbangan wall thickness, draft angle, ejector pin placement).

**Tahap 6 — Prototyping dan Validasi Klinis**
- Cetak prototipe (3D printing SLS atau soft tooling).
- Uji biocompatibility (ISO 10993), pressure test (ASTM F2381 untuk medical fluid devices), dan cleanability (CIP/SIP validation).

**Tahap 7 — Analisis Pengurangan Biaya & Finalisasi**

### 3.2 Diagram Alir Proses DFMA (Flowchart)

```
[Start] → [Audit Desain Eksisting] → [Identifikasi N_a,before]
   ↓
[Function Analysis] → [Tetapkan N_min]
   ↓
[DFA Scoring (Boothroyd)] → [Part Consolidation Opportunity?]
   ↓ Yes                    ↓ No
[Redesain Terintegrasi]    [Keep Existing Part]
   ↓
[DFM Process Selection] → [Cost Estimation per Process]
   ↓
[Optimasi Material] → [Validasi CAD/FEA]
   ↓
[Prototyping] → [Uji Klinis & Regulasi]
   ↓
[Finalisasi Desain] → [Dokumentasi BOM Baru] → [End]
```

### 3.3 Standar Referensi

- **ISO 13485:2016** — Quality Management Systems for Medical Devices
- **ISO 14971:2019** — Application of Risk Management to Medical Devices
- **ASTM F2381** — Standard Test