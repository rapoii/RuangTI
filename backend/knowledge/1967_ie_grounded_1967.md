# 1967 — Redesain Produk Alat Kesehatan Menggunakan Pendekatan Design for Manufacture and Assembly (DFMA): Studi Kasus Redesign of Coffee Enema Basket dan Integrasi BIM-DfMA pada Konstruksi Jembatan Pracetak

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan (medical devices) merupakan salah satu sektor manufaktur dengan tingkat regulasi paling ketat di dunia. Produk-produk seperti *coffee enema basket*—sebuah instrumen yang digunakan dalam prosedur hidroterapi kolon—harus memenuhi serangkaian standar keamanan pasien, sterilitas, ergonomi operator, dan keandalan struktural sebelum dapat dipasarkan. Amirullah dan Jakaria (2024) dalam paper yang dipublikasikan di *Peer-Reviewed Journal* dengan DOI [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309) menyoroti sebuah masalah krusial yang selama ini melekat pada banyak produk medical device kecil hingga menengah di Indonesia: desain awalnya dibuat tanpa mempertimbangkan secara sistematis kemampuan proses manufaktur dan kesulitan perakitan di lantai produksi. Produk jadi yang diserahkan ke tim manufaktur seringkali memiliki komponen berlebih (*over-engineered parts*), sambungan yang tidak perlu, serta geometri yang menyulitkan proses *injection molding*, *stamping*, atau *welding*.

Urgensi redesain ini semakin nyata ketika kita menghitung total biaya siklus hidup (*life-cycle cost*) dari sebuah produk. Studi menunjukkan bahwa 70–80% dari biaya produksi suatu produk sudah "terkunci" (*locked-in*) pada tahap desain konseptual. Artinya, keputusan desain yang diambil di meja gambar engineer akan menentukan biaya produksi, biaya perakitan, biaya inspeksi, hingga biaya售后 atau *after-sales service* selama bertahun-tahun kemudian. Dalam konteks *coffee enema basket*, komponen seperti *body holder* (keranjang utama), *handle*, *cap*, dan konektor ke selang kateter memiliki interaksi geometris dan fungsional yang kompleks. Jika desain awal menggunakan lebih dari jumlah minimum part yang diperlukan untuk memenuhi fungsi inti (memfilter dan menahan cairan enema sambil mempertahankan laju aliran yang aman), maka setiap tambahan part akan langsung menaikkan biaya perakitan karena menambah waktu, menambah *fastener*, menambah toleransi kumulatif, dan menambah peluang *rejection* saat quality control.

Di sisi lain, Mubashir Islam (2024) dalam paper dengan DOI [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21) menunjukkan bahwa permasalahan serupa—yaitu desain yang tidak *buildable*—juga terjadi di industri konstruksi jembatan pracetak (*prefabricated bridge construction*). Islam mengkritik praktik konvensional di mana alternatif desain jembatan hanya dievaluasi berdasarkan biaya dan kecukupan struktural, sementara pengetahuan tentang manufaktur komponen pracetak, transportasi, pengangkatan (*lifting*), dan ereksi (*erection*) baru dipertimbangkan belakangan—bahkan sering kali baru muncul saat *shop-drawing* sudah jadi atau di lapangan ketika desain sudah "beku" dan cetakan (*moulds*) sudah dipotong. Pada titik tersebut, koreksi menjadi sangat mahal atau mustahil dilakukan. Perspektif BIM-DFMA yang ditawarkan Islam memberikan *framework* evaluasi multi-kriteria yang memasukkan variabel-variabel manufaktur dan perakitan ke dalam proses seleksi desain sejak tahap konsep.

Kedua paper ini, meskipun beroperasi di skala industri yang sangat berbeda (instrumen medis kecil vs. jembatan pracetak skala besar), menunjukkan kesamaan epistemologis yang mendalam: **desain harus dirancang untuk kepentingan manufaktur dan perakitan, bukan sebaliknya**. Dalam artikel ini, kami menyintesiskan kedua perspektif tersebut untuk membangun modul pembelajaran yang komprehensif tentang penerapan DFMA di lintas sektor industri.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Prinsip Dasar Design for Manufacture and Assembly (DFMA)

DFMA adalah pendekatan sistematis yang dikembangkan oleh Geoffrey Boothroyd dan Peter Dewhurst pada awal 1980-an untuk mengintegrasikan pertimbangan manufacturability dan assemblability ke dalam proses desain produk. DFMA terdiri dari dua subdomain utama:

1. **DFM (Design for Manufacture)** — mengoptimalkan desain agar setiap komponen dapat diproduksi secara efisien dengan proses manufaktur yang dipilih.
2. **DFA (Design for Assembly)** — mengoptimalkan desain agar produk akhir dapat dirakit dengan jumlah langkah minimum, waktu minimum, dan tingkat kesalahan minimum.

### 2.2 Metrik DFA: Design Efficiency

Salah satu metrik paling fundamental dalam DFA adalah **DFA Efficiency** yang menghitung rasio antara waktu teoritis minimum perakitan (jika setiap part bisa dipasang secara instan tanpa hambatan) dengan waktu aktual perakitan:

$$\eta_{DFA} = \frac{N_{min} \cdot t_{min}}{t_{actual}} \times 100\%$$

Di mana:
- $N_{min}$ = jumlah minimum part yang secara teoritis diperlukan untuk memenuhi fungsi produk
- $t_{min}$ = waktu operasi dasar (*basic operation time*) untuk memasang satu part, umumnya diasumsikan $t_{min} = 1.5$ detik sesuai standar Boothroyd-Dewhurst untuk operasi *insertion* sederhana
- $t_{actual}$ = total waktu perakitan aktual pada lini produksi

### 2.3 Metrik DFM: Manufacturing Cost Estimation

Untuk komponen individu, biaya manufaktur dapat dimodelkan sebagai:

$$C_{m,i} = C_{material,i} + C_{process,i} + C_{tooling,i} + C_{overhead,i}$$

Untuk komponen *coffee enema basket body* yang diproduksi dengan proses *injection molding* polypropylene, biaya proses cetakan injeksi dapat dihitung sebagai:

$$C_{process,i} = \frac{C_{machine} \cdot t_{cycle,i}}{n_{cavities}} + C_{labor,i}$$

Di mana $t_{cycle,i}$ adalah waktu siklus cetakan injeksi, $n_{cavities}$ adalah jumlah *cavity* pada mould, dan $C_{machine}$ adalah biaya operasional mesin injeksi per jam.

### 2.4 Decision Matrix Multi-Kriteria (dari Perspektif Islam, 2024)

Untuk evaluasi desain jembatan pracetak, Islam (2024) mengusulkan *weighted multi-criteria decision matrix*:

$$S_j = \sum_{i=1}^{n} w_i \cdot s_{ij}$$

Di mana:
- $S_j$ = *score* total dari alternatif desain $j$
- $w_i$ = bobot kriteria ke-$i$ (misalnya $w_1$ untuk manufacturability, $w_2$ untuk transportability, dst.)
- $s_{ij}$ = *score* kriteria ke-$i$ untuk alternatif $j$ (skala 1–10)
- $\sum w_i = 1$

Kriteria yang umumnya dimasukkan dalam kerangka BIM-DFMA menurut Islam meliputi: (1) biaya material, (2) biaya fabrikasi pracetak, (3) biaya transportasi, (4) waktu ereksi, (5) jumlah sambungan di lapangan, (6) toleransi dimensi, dan (7) kemampuan inspeksi.

### 2.5 Reduction of Parts Criterion

Boothroyd-Dewhurst menetapkan tiga pertanyaan kunci untuk menentukan apakah sebuah part "benar-benar diperlukan":

1. Apakah part tersebut bergerak relatif terhadap part lain selama pengoperasian produk?
2. Apakah part tersebut memerlukan material yang berbeda dari part lain karena kebutuhan fungsional?
3. Apakah part tersebut harus dipisahkan dari part lain untuk memungkinkan perakitan atau拆卸 (*disassembly*) komponen lain?

Jika ketiga pertanyaan jawabannya **"Tidak"**, maka part tersebut adalah kandidat eliminasi.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Tahapan Implementasi DFMA pada Redesain Coffee Enema Basket

Amirullah dan Jakaria (2024) mengikuti prosedur DFMA yang terstruktur dalam beberapa tahap:

**Tahap 1 — Analisis Produk Awal (*Baseline Analysis*)**
- Pembongkaran produk eksisting (*disassembly analysis*) dan pencatatan seluruh komponen
- Pengukuran waktu perakitan aktual menggunakan *stopwatch study* dengan 30 siklus pengamatan untuk menghilangkan bias pengamat
- Identifikasi fungsi inti: (a) menahan serbuk kopi sebagai filter, (b) melewatkan cairan dengan laju tertentu, (c) menyediakan grip ergonomis bagi pengguna, (d) memastikan seal yang aman

**Tahap 2 — Aplikasi Three Boothroyd Questions**
- Evaluasi setiap komponen apakah lolos ketiga uji necessity
- Komponen yang gagal dipertahankan fungsinya melalui redesign

**Tahap 3 — Proses Desain Ulang (*Conceptual Redesign*)**
- Brainstorming solusi integrasi part
- Sketsa konsep dengan mempertimbangkan: manufacturability (kemudahan injeksi molding, radii fillet minimum 0,5 mm, draft angle minimal 1°), assemblability (snap-fit vs. threaded vs. welded), dan cleanability (permukaan halus untuk sterilisasi)

**Tahap 4 — Pemilihan Proses Manufaktur**
- Matriks seleksi proses untuk material polypropylene food-grade
- Pertimbangan: volume produksi, toleransi, biaya tooling

**Tahap 5 — Estimasi Biaya dan Validasi**

### 3.2 Diagram Alir Proses DFMA

```
[START] → [Disassembly Existing Product] → [Record All Parts & Time]
   ↓
[Identify Core Functions]
   ↓
[Apply Boothroyd 3-Questions] → [For Each Part]
   ↓                              ↓
[FAIL] → [Keep with Redesign]    [PASS] → [Eliminate/Integrate]
   ↓                              ↓
[Generate Redesign Concepts] ←──────┘
   ↓
[Select Manufacturing Process] → [Cost Estimation]
   ↓
[Compare Baseline vs. Redesign] → [Decision]
   ↓
[END]
```

### 3.3 Framework BIM-DFMA untuk Proyek Jembatan (Islam, 2024)

Islam (2024) mengusulkan kerangka evaluasi yang dimulai dengan pemodelan BIM 3D dari setiap alternatif desain jembatan, kemudian mengekstrak parameter-parameter berikut secara otomatis:

- **Jumlah segmen pracetak** ($n_{segments}$)
- **Berat maksimum segmen** ($W_{max}$) untuk validasi kapasitas crane
- **Volume beton** ($V_{concrete}$) per segmen
- **Jumlah sambungan lapangan** ($n_{joints}$)
- **Waktu fabrikasi** ($t_{fab}$) dari *BIM 4D simulation*

Parameter-parameter ini kemudian dimasukkan ke dalam *decision matrix* multi-kriteria yang telah dibahas di Bagian 2.4.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Data Baseline Produk Coffee Enema Basket Awal

Berdasarkan paper Amirullah dan Jakaria (2024), produk awal terdiri dari komponen-komponen berikut:

| No | Nama Komponen | Material | Proses Manufaktur | Waktu Rakitan (detik) |
|----|---------------|----------|-------------------|----------------------|
| 1 | Body utama | PP | Injection molding | 12,0 |
| 2 | Cap atas | PP | Injection molding | 8,5 |
| 3 | Filter mesh | SS 304 | Stamping | 15,0 |
| 4 | Ring pengunci | PP | Injection molding | 6,0 |
| 5 | Handle | PP | Injection molding | 9,0 |
| 6 | Karet seal | Silicone | Compression molding | 7,5 |
| 7 | Snap ring | SS 304 | Stamping | 5,0 |
| 8 | Selang konektor | PVC | Extrusion | 4,0 |
| **Total** | **8 part** | - | - | **67,0 detik** |

### 4.2 Penerapan Kriteria Eliminasi Boothroyd

Evaluasi tiga pertanyaan untuk setiap part:

- **Body utama**: Bergerak? Tidak. Material berbeda? Ya (harus rigid). Terpisah untuk disassembly? Ya (akses ke filter). → **Lolos 2/3, pertahankan**
- **Cap atas**: Bergerak? Tidak. Material berbeda? Tidak. Terpisah? Tidak. → **Kandidat integrasi dengan body utama**
- **Filter mesh**: Bergerak? Tidak. Material berbeda? **Ya (harus stainless steel food-grade)**. Terpisah? Ya. → **Pertahankan**
- **Ring pengunci**: Bergerak? Tidak. Material berbeda? Tidak. → **Kandidat eliminasi (diganti snap-fit integral)**
- **Handle**: Bergerak? Tidak. Material berbeda? Tidak. Terpisah? Tidak. → **Kandidat integrasi dengan body**
- **Karet seal**: Material berbeda? **Ya (silikon untuk sealing)**. → **Pertahankan**
- **Snap ring**: Bergerak? Tidak. Material berbeda? Tidak. → **Kandidat integrasi dengan handle**
- **Selang konektor**: Material berbeda? **