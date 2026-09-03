# 2895 — Redesain Keranjang Kopi Enema Menggunakan Metode Design for Manufacture and Assembly (DFMA)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesain Coffee Enema Basket Menggunakan Metode Design for Manufacture and Assembly (DFMA)
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan berbasis prosedur kolonik dan terapi komplementer mengalami pertumbuhan signifikan dalam dua dekade terakhir, didorong oleh meningkatnya permintaan terhadap perangkat *Gerson therapy*, *hydrotherapy*, dan prosedur detoksifikasi klinik. Salah satu komponen kritis dalam rantai prosedur tersebut adalah **coffee enema basket** — sebuah wadah perforated (berlubang) yang berfungsi menahan bubuk kopi selama proses enema sehingga hanya ekstrak yang terlarut yang melewati membran filtrasi menuju pasien. Amirullah dan Jakaria (2024, DOI: [10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) menyoroti bahwa desain konvensional dari keranjang ini — yang umumnya dihasilkan melalui proses *sheet metal stamping* konvensional dengan banyak komponen terpisah, pengelasan titik, dan pengencang ulir — mengandung inefisiensi struktural yang signifikan, khususnya pada aspek *bill of materials* (BoM), waktu perakitan, dan biaya produksi.

Urgensi redesain ini bersifat multidimensi. Dari perspektif **operasional**, perangkat medis kategori *non-implantable* ini harus memenuhi standar biokompatibilitas (umumnya *food-grade SUS 304*/*SUS 316L*) dengan toleransi geometris yang ketat untuk mencegah akumulasi biofilm. Dari perspektif **ekonomi**, biaya perakitan manual yang tinggi pada desain lama membuat *unit cost* tidak kompetitif di pasar ekspor alat kesehatan Asia Tenggara. Dari perspektif **teknis**, integrasi prinsip *Design for Manufacture and Assembly* (DFMA) memungkinkan rekayasa ulang yang menurunkan jumlah komponen, menyederhanakan proses fabrikasi, dan memudahkan sterilisasi — tiga pilar yang secara simultan menjawab kendala biaya, kualitas, dan kepatuhan regulasi.

Amirullah dan Jakaria (2024) mengaplikasikan metodologi DFMA yang awalnya dipopulerkan oleh Boothroyd, Dewhurst, dan Knight untuk menganalisis desain eksisting coffee enema basket. Pendekatan ini relevan karena perangkat tersebut memiliki karakteristik *medium-volume production* (estimasi 5.000–20.000 unit/tahun untuk pasar domestik) dengan kompleksitas geometris sedang — kondisi ideal di mana DFMA menunjukkan *return on investment* tertinggi. Sebagaimana ditegaskan oleh Islam (2024, DOI: [10.63125/av45jf21](https://doi.org/10.63125/av45jf21)), prinsip DfMA bukan sekadar alat optimasi tetapi juga kerangka integratif yang menyatukan keputusan desain dengan pertimbangan *manufacturability, transportability, dan erection* sejak fase konseptual. Dalam konteks coffee enema basket, integrasi ini berarti keputusan desain harus sudah mengantisipasi kemampuan *sheet metal fabrication*, operasi *spot welding* atau *laser welding*, serta perakitan manual semi-otomatis di fasilitas manufaktur.

Konteks regulasi yang melingkupi produk ini juga tidak bisa diabaikan. Standar **ISO 13485** untuk sistem manajemen mutu alat kesehatan, **ISO 10993** untuk evaluasi biologi, dan **FDA 21 CFR** untuk material kontak makanan-skin menjadi *constraints* yang tidak bisa dinegosiasikan. Redesain DFMA harus menghasilkan produk yang tidak hanya *cheaper* dan *faster* untuk diproduksi, tetapi juga tetap *compliance-by-design*. Oleh karena itu, artikel ini tidak hanya mendokumentasikan langkah teknis redesain tetapi juga memformulasikan kerangka keputusan yang menyeimbangkan empat objective function secara simultan: **minimasi komponen**, **minimasi waktu perakitan**, **minimasi biaya produksi**, dan **pemaksimalan kemampuan sterilisasi**.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Prinsip Inti DFMA: Design Efficiency dan Assembly Efficiency

Kerangka analitis DFMA yang digunakan oleh Amirullah dan Jakaria (2024) berakar pada metodologi **Boothroyd-Dewhurst Product Design for Manufacture and Assembly (DFMA)**. Dua metrik utama yang menjadi tulang punggung analisis adalah *Design Efficiency* ($E_d$) dan *Assembly Efficiency* ($E_a$).

**Design Efficiency** dirumuskan sebagai rasio antara jumlah minimum part yang secara teoritis diperlukan untuk memenuhi fungsi produk ($N_m$) terhadap jumlah part aktual dalam desain ($N_t$):

$$E_d = \frac{N_m}{N_t} \times 100\%$$

Nilai $E_d = 100\%$ menandakan desain telah *fully integrated* — tidak ada komponen yang redundan. Desain konvensional coffee enema basket umumnya memiliki $E_d$ dalam kisaran 30–50% karena penggunaan *bracket*, *cage*, dan *handle* sebagai part terpisah.

**Assembly Efficiency** mengukur rasio antara waktu perakitan minimum teoritis ($t_{min}$, dalam detik) terhadap waktu perakitan aktual ($t_a$):

$$E_a = \frac{t_{min}}{t_a} \times 100\%$$

Di mana $t_{min}$ dihitung menggunakan basis data *manual assembly time* Boothroyd dengan asumsi *best-practice handling* dan *minimum-tool* operations.

### 2.2 BoM Complexity Index

Untuk mengkuantifikasi kompleksitas *Bill of Materials*, Amirullah dan Jakaria (2024) kemungkinan mengadopsi atau menurunkan **BoM Complexity Index (BCI)**:

$$BCI = \sum_{i=1}^{N_t} \left( w_1 \cdot p_i + w_2 \cdot d_i + w_3 \cdot c_i \right)$$

di mana $p_i$ adalah jumlah operasi machining/fabrikasi untuk komponen $i$, $d_i$ adalah jumlah *distinct fasteners* (sekrup, rivet, pin) yang dibutuhkan, $c_i$ adalah jumlah *critical tolerance* (umumnya $< 0{,}1\,\text{mm}$), dan $w_1, w_2, w_3$ adalah bobot kepentingan yang ditentukan melalui *Analytic Hierarchy Process* (AHP). Penurunan BCI secara langsung mengindikasikan penurunan biaya produksi karena:

$$C_{production} = C_{material} + C_{fabrication} + C_{assembly} + C_{overhead}$$

### 2.3 Formulasi Biaya Manufaktur dan Perakitan

Untuk menghitung *unit manufacturing cost* pada redesain, digunakan model biaya berbasis operasi:

$$C_{unit} = \sum_{i=1}^{N_t} \left( C_{mat,i} + t_{fab,i} \cdot r_{fab} + t_{asm,i} \cdot r_{asm} \right) + C_{tooling} / Q$$

di mana:
- $C_{mat,i}$: biaya material komponen $i$ (IDR atau USD per unit)
- $t_{fab,i}$: waktu fabrikasi komponen $i$ (menit atau detik)
- $r_{fab}$: *labor rate* fabrikasi (IDR/menit)
- $t_{asm,i}$: waktu perakitan komponen $i$
- $r_{asm}$: *labor rate* perakitan
- $C_{tooling}$: biaya *tooling* (dies, jigs, fixtures) diamortisasi
- $Q$: volume produksi tahunan

### 2.4 DfMA Score dan Decision Matrix

Berdasarkan kerangka integratif yang dikembangkan oleh Islam (2024, DOI: [10.63125/av45jf21](https://doi.org/10.63125/av45jf21)), keputusan desain dievaluasi menggunakan *weighted multi-criteria decision matrix*:

$$S_{DfMA} = \sum_{j=1}^{n} w_j \cdot s_j$$

di mana $s_j$ adalah skor ternormalisasi (0–1) untuk kriteria $j$ (manufacturability, transportability, assembly ease, sterilization ability, cost), dan $w_j$ adalah bobot dengan $\sum_{j=1}^{n} w_j = 1$.

### 2.5 Time Compression Model

Untuk memvalidasi efisiensi waktu perakitan sebelum dan sesudah redesain:

$$\Delta T_{asm} = T_{before} - T_{after}, \quad \text{dan} \quad \%\Delta T = \frac{\Delta T_{asm}}{T_{before}} \times 100\%$$

Target industri yang umum untuk redesain DFMA perangkat medis sederhana adalah reduksi $\geq 25\%$ pada $T_{asm}$ tanpa mengorbankan fungsionalitas.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Amirullah dan Jakaria (2024) menyusun metodologi rekayasa ulang dalam tujuh tahap prosedural yang mengikuti alur *systematic DFMA workflow*. Prosedur ini dirancang untuk dapat direplikasi pada lini produksi alat kesehatan berukuran menengah dengan sumber daya rekayasa yang terbatas.

**Tahap 1 — Analisis Fungsi Produk (*Functional Analysis*)**
Langkah pertama adalah dekomposisi fungsi coffee enema basket menjadi *function-means* pairs. Fungsi utama: (a) *containment* (menahan bubuk kopi), (b) *filtration* (melewatkan ekstrak terlarut), (c) *ergonomic handling* (memegang saat prosedur), (d) *thermal compatibility* (tahan suhu 40–60°C). Tiap fungsi dipetakan ke *means* (struktur perforated, *handle*, material *food-grade*).

**Tahap 2 — Pembuatan BoM Eksisting**
Inventarisasi seluruh komponen desain lama: body basket, base plate, handle, fastener (umumnya 2–4 sekrup M3), ring pengunci, dan gasket. Estimasi awal Amirullah dan Jakaria (2024) menempatkan BoM pada 6–8 part dengan toleransi kritis pada lubang filtrasi.

**Tahap 3 — Aplikasi Design for Assembly (DFA)**
Setiap part dievaluasi terhadap tiga pertanyaan screening Boothroyd: (i) Apakah part bergerak relatif terhadap part lain selama operasi? (ii) Apakah part harus *dissassemblable* untuk servis/sterilisasi? (iii) Apakah part terpisah diperlukan karena perbedaan material atau proses? Pertanyaan negatif menunjukkan peluang integrasi.

**Tahap 4 — Aplikasi Design for Manufacture (DFM)**
Analisis manufacturability: pemilihan proses (sheet metal stamping, laser cutting + bending, injection molding untuk plastik opsional, atau kombinasi *hybrid metal-polymer*). Optimasi *draft angle*, *fillet radius*, dan *minimum web thickness* untuk kompatibilitas proses.

**Tahap 5 — Redesain dan Prototyping**
Generasi konsep redesain dengan target $E_d \geq 70\%$ dan $E_a \geq 75\%$. Contoh pendekatan: integrasi handle-base plate menjadi *single bent piece*, penggunaan *press-fit* menggantikan sekrup, dan pembentukan perforated pattern secara simultan pada proses stamping (menghilangkan operasi drilling sekunder).

**Tahap 6 — Validasi Manufaktur dan Assembly Trial**
Pembuatan prototipe dan pengukuran aktual $t_a$ dengan *time study* (metode *stopwatch time study* atau *video-based motion analysis*). Validasi fungsional dilakukan sesuai protokol **ISO 13485**.

**Tahap 7 — Analisis Biaya dan Decision Matrix**
Perhitungan $C_{unit}$ untuk desain lama dan baru, serta *payback analysis* terhadap investasi *tooling* redesain