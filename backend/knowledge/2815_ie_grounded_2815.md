# 2815 — Redesain Keranjang Enema Kopi Menggunakan Metode Design for Manufacture and Assembly (DFMA) untuk Optimasi Manufaktur Alat Kesehatan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan (*medical device industry*) merupakan sektor dengan tingkat regulasi yang sangat ketat, di mana desain produk tidak hanya dituntut memenuhi fungsionalitas klinis tetapi juga harus efisien secara manufaktur, aman secara ergonomi, serta layak secara ekonomis untuk produksi massal. Salah satu produk yang menjadi fokus dalam literatur teknik industri mutakhir adalah **keranjang enema kopi (*coffee enema basket*)**, sebuah komponen kritis pada perangkat terapi kolon yang berfungsi sebagai wadah filtrasi bubuk kopi selama prosedur irigasi. Komponen ini pada umumnya memiliki geometri berlubang (*perforated basket*), dinding saring, serta pegangan (*handle*) yang harus mampu menahan suhu tinggi, paparan asam organik kopi, dan tekanan hidrolik selama operasi.

Amirullah dan Jakaria (2024) dalam artikel yang dipublikasikan pada *Peer-Reviewed Journal* (DOI: [10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) menyoroti bahwa desain keranjang enema kopi generasi awal masih memiliki **cacat buildability** berupa jumlah bagian yang berlebihan, sambungan yang sulit di-assembly, serta pemilihan material yang tidak optimal untuk proses *deep drawing* dan *laser cutting*. Permasalahan ini menimbulkan tiga dampak operasional utama: (1) peningkatan *lead time* perakitan manual di lantai produksi; (2) pembengkakan biaya *Bill of Materials* (BoM) karena komponen fastener dan seal yang terlalu banyak; serta (3) potensi *defect rate* yang tinggi akibat misalignment saat perakitan. Pendekatan **Design for Manufacture and Assembly (DFMA)** muncul sebagai kerangka rekayasa yang relevan karena memadukan dua disiplin secara simultan, yaitu *Design for Manufacture* (DFM) untuk meminimalkan kompleksitas proses fabrikasi dan *Design for Assembly* (DFA) untuk menyederhanakan proses perakitan, sehingga dihasilkan produk yang lebih ramping, murah, dan andal.

Urgensi ekonomi dari penerapan DFMA pada konteks alat kesehatan di Indonesia cukup signifikan. Pasar alat kesehatan nasional tumbuh rata-rata 8–12% per tahun, dengan sebagian besar produk masih diimpor. Redesain komponen lokal seperti keranjang enema kopi melalui pendekatan DFMA berpotensi menurunkan **unit cost** hingga 15–30% sekaligus meningkatkan *design manufacturability score*, sehingga mendukung program substitusi impor dan kemandirian alat kesehatan nasional. Lebih lanjut, Mubashir Islam (2024) pada *Journal of Sustainable Development and Policy* (DOI: [10.63125/av45jf21](https://doi.org/10.63125/av45jf21)) memperkuat argumentasi bahwa integrasi prinsip DfMA pada tahap *conceptual design*—melalui kerangka evaluasi multi-kriteria berbasis BIM—secara empiris mampu mencegah *buildability problems* yang biasanya baru terdeteksi saat produksi *shop-drawing* atau di lapangan konstruksi. Walaupun konteks studinya adalah jembatan prefabrikasi, prinsip metodologisnya—yaitu *front-loading* keputusan manufaktur ke hulu siklus desain—sepenuhnya relevan untuk industri alat kesehatan.

---

## 2. Landasan Teori & Formulasi Matematis

Pendekatan DFMA yang digunakan dalam penelitian Amirullah & Jakaria (2024) didasarkan pada tiga pilar teoretis: (i) **metode Boothroyd-Dewhurst** untuk DFA, (ii) **panduan DFM** untuk pemilihan proses dan material, serta (iii) **efisiensi perakitan** sebagai metrik outcome. Beberapa formulasi matematis yang menjadi tulang punggung analisis adalah sebagai berikut.

### 2.1 Indeks DFA (Boothroyd-Dewhurst)

Indeks DFA mengukur seberapa efisien suatu desain dari sisi perakitan relatif terhadap konfigurasi teoretis minimum:

$$
\eta_{DFA} = \frac{N_{min} \cdot t_a^*}{N_a \cdot t_{total}} \times 100\%
$$

di mana $N_{min}$ adalah jumlah bagian minimum teoretis yang diperlukan untuk memenuhi fungsi produk, $N_a$ adalah jumlah bagian aktual pada desain, $t_a^*$ adalah waktu perakitan teoritis untuk satu bagian (umumnya diasumsikan $t_a^* = 3$ detik untuk operasi penempatan dan penguncian sederhana, sesuai referensi Boothroyd), dan $t_{total}$ adalah total waktu siklus perakitan aktual yang diukur melalui *time study*.

### 2.2 Rasio Pengurangan Komponen (*Part Reduction Ratio*)

$$
PRR = \frac{N_{a,before} - N_{a,after}}{N_{a,before}} \times 100\%
$$

Semakin tinggi nilai $PRR$, semakin besar simplifikasi struktural yang berhasil dicapai melalui redesign.

### 2.3 Estimasi Biaya Manufaktur Komponen

Untuk analisis kelayakan ekonomi, biaya produksi satu unit keranjang dapat dimodelkan sebagai:

$$
C_{unit} = \sum_{i=1}^{N} \left( C_{mat,i} + C_{proc,i} + C_{tool,i} + C_{qa,i} \right) + C_{assembly}
$$

dengan $C_{mat,i}$ adalah biaya material komponen ke-$i$, $C_{proc,i}$ adalah biaya proses (pemotongan, pembentukan, pengelasan), $C_{tool,i}$ adalah alokasi biaya *tooling* per unit, dan $C_{qa,i}$ adalah biaya *quality assurance*. Komponen biaya perakitan total:

$$
C_{assembly} = t_{total} \cdot R_l \cdot (1 + O_b)
$$

di mana $R_l$ adalah tarif tenaga kerja langsung (misal Rp 25.000/jam) dan $O_b$ adalah *overhead burden rate* (umumnya 1,5–2,5 dari biaya langsung).

### 2.4 Fungsi Utilitas Multi-Kriteria (Pendekatan Pendukung)

Merujuk pada kerangka evaluasi multi-kriteria Islam (2024) untuk menilai alternatif desain, fungsi utilitas agregat dapat dituliskan:

$$
U_j = \sum_{k=1}^{K} w_k \cdot \tilde{u}_{jk}, \quad \text{dengan } \sum_{k=1}^{K} w_k = 1
$$

di mana $\tilde{u}_{jk}$ adalah skor ternormalisasi kriteria ke-$k$ untuk alternatif desain ke-$j$, dan $w_k$ adalah bobot kepentingan kriteria (misalnya manufacturability, cost, safety, ergonomic). Alternatif dengan $U_j$ tertinggi dipilih sebagai desain final.

### 2.5 Kriteria Eliminasi Boothroyd

Untuk setiap bagian kandidat, tiga pertanyaan eliminasi digunakan: (1) Apakah bagian bergerak relatif terhadap bagian lain selama operasi? (2) Apakah bagian harus terbuat dari material berbeda karena alasan fungsional? (3) Apakah bagian harus dapat dibongkar-pasang untuk keperluan servis? Jika semua jawaban "tidak", maka bagian tersebut layak dikonsolidasikan (*combine*).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Amirullah dan Jakaria (2024) menyusun SOP implementasi DFMA dalam tujuh tahapan sistematis yang dapat diadaptasi menjadi *Standard Operating Procedure* (SOP) rekayasa produk alat kesehatan secara umum.

**Tahap 1 — Definisi Fungsi & Spesifikasi Kebutuhan.**
Tetapkan *design brief* yang mencakup kapasitas filtrasi (gram), dimensi geometris (diameter, tinggi), material kontak (food/medical grade stainless steel 304 atau 316), suhu operasi maksimum, serta standar regulasi yang harus dipenuhi (misalnya SNI ISO 13485 untuk sistem manajemen mutu alat kesehatan).

**Tahap 2 — Pembuatan Desain Awal (*Baseline*) dan BoM.**
Lakukan *reverse engineering* terhadap produk existing, dokumentasikan seluruh bagian dengan gambar teknik 2D/3D, dan susun *Bill of Materials* lengkap beserta waktu perakitan aktual hasil pengukuran di lini produksi.

**Tahap 3 — Penerapan Prinsip DFM.**
Evaluasi setiap komponen terhadap empat parameter DFM: jenis proses fabrikasi (casting, sheet metal forming, machining), kualitas permukaan yang dibutuhkan, toleransi dimensi, dan material yang digunakan. Pilih proses dengan *set-up cost* terendah namun memenuhi spesifikasi.

**Tahap 4 — Penerapan Prinsip DFA.**
Aplikasikan tiga pertanyaan Boothroyd untuk mengidentifikasi kandidat konsolidasi bagian, kemudian hitung $\eta_{DFA}$ untuk baseline dan setiap iterasi desain.

**Tahap 5 — Sintesis Desain Redesain.**
Integrasikan hasil DFM dan DFA ke dalam geometri baru. Konsolidasi bagian yang memenuhi kriteria eliminasi, gunakan *snap-fit* atau *press-fit* untuk menggantikan fastener, dan pilih fitur geometris yang kompatibel dengan proses *single-setup manufacturing*.

**Tahap 6 — Validasi Prototipe & Uji Fungsi.**
Bangun prototipe, lakukan *fit-check*, uji kebocoran, dan validasi ergonomis pegangan. Catat waktu perakitan aktual untuk desain baru.

**Tahap 7 — Analisis Kelayakan Ekonomi & Dokumentasi.**
Hitung $C_{unit}$ baseline vs. redesign, hitung *payback period* investasi *tooling*, dan susun *Design History File* (DHF) sesuai ISO 13485.

Diagram alir proses mengikuti logika rekursif **Define → Analyze → Synthesize → Evaluate → Iterate (DASEI)**, di mana setiap iterasi desain harus meningkatkan $\eta_{DFA}$ dan menurunkan $C_{unit}$ secara simultan.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Berikut adalah studi kasus kuantitatif yang merekonstruksi pendekatan numerik Amirullah & Jakaria (2024) dengan parameter industri yang realistis untuk lini produksi alat kesehatan skala kecil-menengah di Indonesia.

### 4.1 Data Baseline Desain Awal

| Parameter | Nilai |
|---|---|
| Jumlah bagian aktual ($N_{a,before}$) | 9 bagian |
| Jumlah bagian minimum teoritis ($N_{min}$) | 4 bagian |
| Waktu perakitan aktual ($t_{total,before}$) | 180 detik/unit |
| Tarif tenaga kerja ($R_l$) | Rp 30.000/jam |
| *Overhead burden rate* ($O_b$) | 1,8 |
| Biaya material baseline per unit | Rp 18.500 |

### 4.2 Perhitungan Indeks DFA Baseline

Menggunakan $t_a^* = 3$ detik:

$$
\eta_{DFA,before} = \frac{4 \cdot 3}{9 \cdot 180} \times 100\% = \frac{12}{1620} \times 100\% \approx 0{,}74\%
$$

Nilai yang sangat rendah ini mengindikasikan inefisiensi struktural yang masif—terutama karena rasio $N_a / N_{min} = 9/4 = 2{,}25$ menandakan lebih dari separuh bagian adalah kandidat konsolidasi.

### 4.3 Biaya Perakitan Baseline

$$
C_{assembly,before} = \frac{180}{3600} \cdot 30.000 \cdot (1 + 1{,}8) = 0{,}05 \cdot 30.000 \cdot 2{,}8 = \text{Rp } 4.200
$$

Total biaya unit baseline (material + perakitan, tanpa proses forming):

$$
C_{unit,before} = 18.500 + 4.200 = \text{Rp } 22.700
$$

### 4.4 Hasil Redesain (Amirullah & Jakaria, 2024)

Melalui konsolidasi dinding basket + handle menjadi satu komponen *deep-drawn* (SS 304, tebal 0,8 mm), eliminasi dua *cincin pengunci*, dan penggunaan *press-fit* untuk tutup saring:

- $N_{a,after} = 5$ bagian (turun dari