# 1695 — Redesain Produk Alat Kesehatan dengan Metodologi Design for Manufacture and Assembly (DFMA): Studi Kasus Redesain Coffee Enema Basket dan Ekstensi ke Konstruksi Jembatan Pracetak

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan rumahan (home healthcare devices) mengalami pertumbuhan eksponensial, didorong oleh tren *self-care*, prevalensi gaya hidup detoksifikasi, serta permintaan terhadap terapi komplementer berbasis bukti empiris seperti *coffee enema*. Salah satu komponen kritis pada perangkat *coffee enema kit* adalah **basket (keranjang saring)** yang berfungsi menampung bubuk kopi sekaligus menahan filtrat agar tidak masuk ke lumen selang irigasi. Amirullah dan Jakaria (2024) dalam publikasi *Peer-Reviewed Journal* (DOI: [10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) menyoroti bahwa desain awal basket kopi enema konvensional memiliki inefisiensi struktural yang signifikan: jumlah komponen berlebih, sambungan ulir yang mempersulit *assembly*, serta pemilihan material stainless steel 304 yang menaikkan biaya produksi tanpa memberikan增值 proporsional terhadap fungsinya. Hasil investigasi mereka menunjukkan bahwa *bill of materials* (BOM) prototipe awal memiliki 8 komponen berbeda dengan total durasi perakitan 142 detik per unit, sedangkan setelah redesain DFMA berhasil ditekan menjadi 4 komponen dengan durasi 47 detik per unit—penurunan 67% waktu perakitan.

Urgensi redesain ini tidak hanya berhenti pada aspek efisiensi biaya produksi, melainkan juga menyentuh dimensi *regulatory compliance* dan keselamatan pasien. Standar SNI ISO 13485:2016 tentang *Quality Management Systems for Medical Devices* mensyaratkan bahwa setiap komponen yang kontak dengan cairan biologis harus dapat di-*disassemble*, dibersihkan, dan di-*reassemble* tanpa *residual contamination*. Desain basket kopi enema versi awal memiliki *threaded joint* dan *crimp ring* yang menciptakan *dead zones*—sudut mati yang sulit disterilisasi—sehingga melanggar prinsip hygienic design. Pendekatan DFMA yang diterapkan oleh Amirullah dan Jakaria (2024) berhasil mentransformasi desain menjadi *monolithic snap-fit* dengan dinding halus (Ra ≤ 0,8 µm) sehingga memudahkan proses *autoclave sterilization* pada suhu 121°C selama 15 menit.

Secara strategis, metodologi DFMA (Design for Manufacture and Assembly) yang diperkenalkan oleh Geoffrey Boothroyd dan Winston Knight pada 1970-an dan disempurnakan oleh Boothroyd-Dewhurst pada 1980-an, menawarkan kerangka rekayasa konkuren yang menyatukan约束 *manufacturability*, *assemblability*, dan *cost* sejak tahap *conceptual design*. Penerapan DFMA terbukti menurunkan *time-to-market* sebesar 30–60% serta mengurangi biaya produksi 20–40% (Boothroyd et al., 2010). Ekstensi DFMA ke domain konstruksi jembatan pracetak—sebagaimana dikaji oleh Islam (2024) dalam *Journal of Sustainable Development and Policy* (DOI: [10.63125/av45jf21](https://doi.org/10.63125/av45jf21))—menunjukkan bahwa integrasi DFMA dengan Building Information Modelling (BIM) pada tahap konseptual mampu mencegah 78% masalah *buildability* yang biasanya terdeteksi saat shop-drawing atau di lokasi konstruksi. Kedua paper ini, meski membahas skala produk yang berbeda (medical device vs. infrastruktur jembatan), sama-sama menggarisbawahi satu tesis utama: keputusan desain yang diambil sebelum *design freeze* memiliki dampak leverage 70–80% terhadap total biaya *life-cycle*, sedangkan koreksi pasca-produksi hanya memiliki leverage 5–10%.

Dalam konteks Indonesia sebagai negara dengan industri alat kesehatan yang masih didominasi impor (90% kebutuhan nasional, menurut Kementerian Kesehatan RI 2023), kemampuan redesain berbasis DFMA merupakan kapasitas strategis untuk mendukung kemandirian industri nasional. Studi Amirullah dan Jakaria (2024) menjadi *proof-of-concept* yang sangat relevan karena mengangkat produk lokal dengan potensi ekspor, sekaligus mendemonstrasikan metodologi yang dapat direplikasi pada 23 jenis alat kesehatan lainnya dalam *toolkit* manufaktur nasional.

## 2. Landasan Teori & Formulasi Matematis

Metodologi DFMA yang diadopsi dalam penelitian Amirullah dan Jakaria (2024) mengikuti protokol **Boothroyd-Dewhurst** dengan dua cabang utama: **Design for Manufacture (DFM)** dan **Design for Assembly (DFA)**. Kedua cabang ini menggunakan *systematic design efficiency metrics* yang memungkinkan kuantifikasi objektif terhadap peningkatan desain.

### 2.1 Design for Manufacture (DFM)

Prinsip DFM bertujuan meminimalkan kompleksitas proses produksi dengan menyederhanakan geometri, mengurangi operasi machining, dan memilih material yang compatible dengan proses fabrikasi yang tersedia. Indeks DFM dirumuskan sebagai:

$$\eta_{DFM} = \frac{N_{optimum}}{N_{aktual}} \times 100\%$$

di mana $\eta_{DFM}$ adalah indeks efisiensi manufaktur, $N_{optimum}$ adalah jumlah part minimum yang memenuhi fungsi desain (ditetapkan melalui *value analysis*), dan $N_{aktual}$ adalah jumlah part aktual pada desain awal. Untuk material selection, digunakan pendekatan **Ashby method** dengan *performance index*:

$$P = \frac{\sigma_y^{2/3}}{\rho \cdot C_m}$$

dengan $\sigma_y$ adalah yield strength, $\rho$ adalah densitas material, dan $C_m$ adalah cost per unit mass. Material dengan $P$ lebih besar menunjukkan efisiensi struktural-biaya yang lebih unggul untuk aplikasi kekuatan spesifik.

### 2.2 Design for Assembly (DFA)

DFA berfokus pada reduksi jumlah komponen, penyederhanaan operasi penyambungan, dan standarisasi fitur fastening. Dua metrik fundamental yang digunakan oleh Boothroyd-Dewhurst adalah:

**Design Efficiency (η_DFA):**

$$\eta_{DFA} = \frac{N_{min}}{N_a} \times 100\%$$

di mana $N_{min}$ adalah jumlah minimum teoritis komponen (dihitung menggunakan tabel 3-detail guideline Boothroyd-Dewhurst: haruskah part ini terpisah atau joined dengan part lain?), dan $N_a$ adalah jumlah aktual komponen pada desain.

**Estimated Assembly Time (t_assembly):**

$$t_{assembly} = \sum_{i=1}^{N_a} t_i + \sum_{j=1}^{N_{op}} T_j$$

di mana $t_i$ adalah waktu handling individual untuk part ke-$i$, dan $T_j$ adalah waktu operasi assembly (insertion, fastening, etc.) pada tahap ke-$j$. Untuk standar industri Indonesia, digunakan tabel Boothroyd-Dewhurst yang disesuaikan dengan *anthropometric data* pekerja Asia Tenggara:

$$t_i = 1.95 \cdot s^{0.166} \cdot e^{(X_1 \cdot k_1)}$$

dengan $s$ adalah ketebalan part (mm), $X_1$ adalah faktor kesulitan (symmetry, gripping, obstruction), dan $k_1$ adalah koefisien koreksi (±0,083 s/d 0,5).

### 2.3 Total Cost Function

Fungsi biaya total DFMA yang digunakan Amirullah dan Jakaria (2024) adalah:

$$C_{total} = C_{material} + C_{manufacturing} + C_{assembly} + C_{tooling} \cdot \frac{1}{N_{batch}}$$

dengan:

$$C_{manufacturing} = \sum_{k=1}^{N_p} (t_{machining,k} \cdot L_k) \cdot (1 + \alpha_{overhead})$$

di mana $L_k$ adalah labor rate per menit, $\alpha_{overhead}$ adalah overhead rate (umumnya 1,8–2,5 untuk industri manufaktur Indonesia), dan $N_p$ adalah jumlah proses machining. Biaya tooling diamortisasi melalui jumlah unit produksi $N_{batch}$ sesuai prinsip *learning curve*.

### 2.4 Integrated DfMA Efficiency Index

Mengikuti kerangka Islam (2024) untuk integrasi multi-kriteria, kita dapat menyusun indeks gabungan:

$$\eta_{DfMA} = w_1 \cdot \eta_{DFM} + w_2 \cdot \eta_{DFA} + w_3 \cdot (1 - \frac{C_{total,new}}{C_{total,old}})$$

dengan bobot $w_1 = 0{,}30$, $w_2 = 0{,}35$, $w_3 = 0{,}35$ yang merepresentasikan prioritas desain alat kesehatan (assembly & cost lebih dominan dibanding manufacturability murni).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Prosedur implementasi DFMA mengikuti alur 7-tahap yang distandardisasi oleh Boothroyd-Dewhurst, dan diadopsi secara utuh oleh Amirullah dan Jakaria (2024):

**Tahap 1 – Information Gathering.** Inventarisasi seluruh requirement fungsional (kapasitas tampung 250 ml bubuk kopi, filtrasi partikel ≤ 100 μm, sterilisasi autoklaf 121°C/15 min, food-grade compatibility) dan constraint (biaya target ≤ Rp 35.000/unit, MOQ 5.000 unit/bulan, *lead time* 14 hari).

**Tahap 2 – Concept Generation.** Brainstorming alternatif arsitektur basket: (a) *two-piece threaded* (desain lama), (b) *snap-fit monolithic*, (c) *injection-molded single part*, (d) *wire-formed with mesh insert*).

**Tahap 3 – Concept Evaluation.** Seleksi menggunakan *Pugh matrix* dengan kriteria: manufacturability, assembly ease, sterilizability, cost, durability. Skor tertimbang menentukan konsep (b) sebagai pemenang.

**Tahap 4 – Embodiment Design.** Penentuan material (food-grade polypropylene PP BJ-100 vs. *stainless steel 316L*), proses fabrikasi (*injection molding* dengan *single-cavity mold*), dan toleransi geometris (ISO 2768-mK).

**Tahap 5 – Detailed DFM Analysis.** Aplikasi *process capability chart* untuk memastikan Cpk ≥ 1,33 pada dimensi kritis (diameter pori filter 0,8 ± 0,05 mm).

**Tahap 6 – Detailed DFA Analysis.** Iterasi menggunakan *3-detail guideline* untuk setiap part: Apakah part harus terpisah? Apakah part dapat digabung tanpa牺牲 fungsi? Apakah fastening method sudah optimal?

**Tahap 7 – Final Verification.** Prototyping, *first-article inspection*, dan *user acceptance test* dengan 30 responden.

Standar SOP ini selaras dengan **ISO 9001:2015** (klausul 8.3 tentang desain dan pengembangan) dan memberikan kerangka audit-ready untuk proses *certification* alat kesehatan. Integrasi dengan BIM seperti disarankan Islam (2024) untuk domain konstruksi, juga relevan pada skala produk: penggunaan CAD parametric (SolidWorks/Autodesk Fusion 360) dengan *design table* memungkinkan simulasi perubahan desain secara real-time terhadap indeks DFMA.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Ambil skenario redesain basket kopi enema dengan data terukur sebagai berikut (mengikuti parameter laporan Amirullah dan Jakaria, 2024):

**Desain Awal (Baseline):**
- $N_a = 8$ part (body, top cap, threaded ring, gasket silikon, filter mesh, crimp ring, handle, base)
- Material utama: stainless steel 304 + silikon food-grade
- Waktu assembly: 142 detik/unit
- Biaya material: Rp 18.500/unit
- Biaya assembly: Rp 11.200/unit (labor rate Rp 4.733/menit)
- Biaya tooling amortisasi: Rp 2.000/unit
- $C_{total,old}$ = Rp 31.700/unit

**Desain Baru (DFMA Redesign):**
- $N_a = 4$ part (main body monolitik, snap-fit cap, integrated mesh, integrated handle-base)
- Material: polypropylene PP BJ-100 (*injection molding*)
- Waktu assembly: 47 detik/unit
- Biaya material: Rp 7.800/unit
- Biaya assembly: Rp 3.708/unit
- Biaya tooling amortisasi: Rp 1.500/unit
- $C_{total,new}$ = Rp 13.008/unit

**Langkah Perhitungan:**

*Step 1 – DFM Efficiency:*

$$\eta_{DFM} = \frac{N_{optimum}}{N_{aktual}} \times 100\% = \frac{4}{8} \times 100\% = 50\% \text{ (baseline)}$$

$$\eta_{DFM,new} = \frac{4}{4} \times 100\% = 100\%$$

*Step 2 – DFA Efficiency:*

$$\eta_{DFA,old} = \frac{N_{min}}{N_a} = \frac{4}{8} = 0{,}50 \text{ atau } 50\%$$

$$\eta_{DFA,new} = \frac{4}{4} = 1{,}00 \text{ atau } 100\%$$

*Step 3 – Cost Reduction Ratio:*

$$\Delta C = \frac{C_{total,old} - C_{total,new}}{C_{total,old}} = \frac{31.700 - 13.008}{31.700} = 58{,}96\%$$

*Step 4 – Assembly Time Improvement:*

$$\Delta t_{assembly} = \frac{142 - 47}{142} = 66{,}90\%$$

*Step 5 – Integrated DfMA Index:*

$$\eta_{DfMA,old} = 0{,}30(0{,}50) + 0{,}35(0{,}50) + 0{,