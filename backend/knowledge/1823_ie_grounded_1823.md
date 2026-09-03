# 1823 — Redesain Produk Manufaktur melalui Pendekatan Design for Manufacture and Assembly (DFMA): Integrasi Metodologi Rekayasa untuk Optimalisasi Biaya, Waktu Perakitan, dan Kualitas Fungsional

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Desain produk manufaktur pada era *Industry 4.0* menghadapi tekanan simultan dari tiga sumbu strategis: efisiensi biaya produksi, ketepatan waktu *time-to-market*, dan keandalan fungsional produk di tangan konsumen akhir. Menurut Amirullah dan Jakaria (2024) dalam studi "Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method" yang dipublikasikan dengan DOI [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309), pendekatan Design for Manufacture and Assembly (DFMA) muncul sebagai metodologi sistematis yang menjembatani kesenjangan antara keputusan desain konseptual di meja perancang dengan realitas operasional di lantai produksi. Studi tersebut secara spesifik mendemonstrasikan bagaimana sebuah produk medis rumah tangga—yaitu *coffee enema basket* (keranjang enema kopi) yang awalnya memiliki desain konvensional dengan komponen berlebih, proses perakitan yang panjang, serta biaya produksi yang kurang optimal—dapat di-*redesign* sehingga menghasilkan reduksi jumlah komponen, simplifikasi工序装配, dan peningkatan *usability* tanpa mengorbankan fungsi klinis utamanya.

Urgensi penerapan DFMA dalam konteks industri modern diperkuat oleh temuan Islam (2024) dalam DOI [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21), yang mengevaluasi integrasi prinsip DfMA ke dalam kerangka *Building Information Modelling* (BIM) untuk evaluasi multi-kriteria pada konstruksi jembatan pracetak. Studi tersebut secara eksplisit mengidentifikasi *pain point* fundamental dalam praktik rekayasa konvensional: "alternatif desain jembatan secara konvensional hanya dipilih berdasarkan biaya dan kecukupan struktural saja, pada titik di mana pengetahuan tentang manufaktur, transportasi, pengangkatan, dan ereksi belum dimasukkan ke dalam proses, sehingga masalah *buildability* baru terungkap saat produksi shop-drawing atau di lapangan—yaitu ketika desain sudah *frozen*, cetakan sudah dipotong, dan koreksi hanya mungkin dilakukan dengan biaya yang sangat mahal." Pernyataan ini, meskipun konteksnya konstruksi jembatan, berlaku universal sebagai diagnosis penyakit sistemik dalam ekosistem manufaktur: keputusan desain yang diambil tanpa mempertimbangkan *downstream* constraint akan selalu menghasilkan *rework cost* yang sebanding dengan kelambatan integrasi informasi lintas-fase.

Secara ekonomis, biaya koreksi desain bersifat eksponensial terhadap fase SDLC (*Software/System Development Life Cycle*) di mana defect terdeteksi. Riset klasik Boothroyd dan Dewhurst yang dirujuk oleh kedua paper menunjukkan rasio biaya koreksi 1:10:100:1000 antara fase konseptual, desain detail, produksi, dan penggunaan di lapangan. Dengan demikian, investasi waktu insinyur selama 1 jam di fase konseptual untuk menerapkan DFMA berpotensi menghemat 1.000 jam *rework* di lapangan—sebuah *leverage* produktivitas yang sangat signifikan bagi perusahaan manufaktur dengan *production volume* tinggi.

Dalam konteks spesifik studi Amirullah dan Jakaria (2024), produk *coffee enema basket* yang dirancang ulang merepresentasikan kategori produk *low-volume high-variability* dengan komponen yang sebelumnya terdiri dari elemen-elemen seperti *frame* utama, kawat jaring, pegangan, dan elemen pengunci yang masing-masing memerlukan sub-proses perakitan independen. Kompleksitas perakitan yang tidak perlu ini tidak hanya menaikkan *bill of materials* (BOM) cost, tetapi juga meningkatkan probabilitas *human error* pada tahap *final assembly*, menurunkan *first-pass yield*, dan pada akhirnya merusak reputasi merek melalui komplain pelanggan. Oleh karena itu, redesain berbasis DFMA bukan sekadar optimalisasi teknikal, melainkan sebuah *strategic business imperative* yang menyelaraskan desain produk dengan kapabilitas lini produksi dan ekspektasi pengguna.

---

## 2. Landasan Teori & Formulasi Matematis

Metodologi DFMA sebagaimana diaplikasikan oleh Amirullah dan Jakaria (2024) dan diperkuat secara konseptual oleh Islam (2024) berakar pada kerangka teoritis Boothroyd-Dewhurst, yang terdiri dari dua pilar integral: **Design for Assembly (DFA)** dan **Design for Manufacturing (DFM)**. Kedua pilar ini bekerja secara sinergis, di mana DFA meminimalkan kompleksitas perakitan sedangkan DFM memastikan setiap komponen dapat diproduksi secara ekonomis pada proses manufaktur yang tersedia.

### 2.1 Design for Assembly (DFA) Index

Indeks efisiensi perakitan DFA menurut Boothroyd-Dewhurst diformulasikan sebagai:

$$E_{DFA} = \frac{N_m \cdot t_{minimum}}{N_t \cdot t_a} \times 100\%$$

Di mana:
- $N_m$ = jumlah minimum part teoritis yang diperlukan untuk fungsi produk (diperoleh melalui analisis *function* dan *mating condition*)
- $N_t$ = jumlah total part aktual dalam desain
- $t_{minimum}$ = waktu perakitan minimum teoretis per part (umumnya diasumsikan 1,5 detik per part berdasarkan benchmark Boothroyd)
- $t_a$ = waktu perakitan aktual yang diukur atau diestimasi

Nilai $E_{DFA}$ yang mendekati 100% mengindikasikan desain yang mendekati optimal secara struktural. Amirullah dan Jakaria (2024) menggunakan formula ini sebagai *baseline metric* untuk membandingkan desain awal *coffee enema basket* dengan desain redesain.

### 2.2 Analisis Handling dan Insertion Difficulty

Setiap part dalam analisis DFA dievaluasi melalui dua dimensi kesulitan: **handling** (pengambilan dan orientasi) dan **insertion** (pemasangan). Skor kesulitan diskrit diberikan sebagai berikut:

$$S_{total} = \sum_{i=1}^{N_t} (H_i + I_i)$$

Di mana:
- $H_i \in \{0; 1,0; 1,5; 2,0\}$ adalah indeks *handling difficulty* untuk part ke-$i$ (0 untuk symmetry axis, 1,0 untuk part simetris, 1,5 untuk sedikit asimetri, 2,0 untuk sangat asimetris)
- $I_i \in \{0; 1,0; 1,5; 2,0\}$ adalah indeks *insertion difficulty* (0 untuk *self-locking*, 1,0 untuk *snap-fit*, 1,5 untuk *deformation* atau *press-fit*, 2,0 untuk operasi multi-axis)

### 2.3 Manufacturing Cost Estimation (DFM)

Untuk pilar DFM, biaya produksi per unit dihitung menggunakan *Activity-Based Costing* yang dimodifikasi:

$$C_{unit} = C_{material} + \sum_{j=1}^{J} (T_j \cdot R_j) + C_{overhead}$$

Di mana:
- $C_{material}$ = biaya material langsung
- $T_j$ = waktu proses manufaktur tahap ke-$j$
- $R_j$ = tarif mesin dan operator tahap ke-$j$
- $C_{overhead}$ = alokasi biaya *overhead* pabrik
- $J$ = jumlah total tahap proses

### 2.4 Multi-Criteria Decision Analysis (MCDA) untuk Integrasi DFMA-BIM

Untuk konteks integrasi DFMA dengan platform digital seperti BIM yang dikaji oleh Islam (2024), evaluasi multi-kriteria menggunakan *Analytic Hierarchy Process* (AHP) menghasilkan *weighted score*:

$$S_{alternative} = \sum_{i=1}^{n} w_i \cdot x_i$$

Di mana $w_i$ adalah bobot kriteria ke-$i$ (misalnya manufacturability, transportability, liftability, erectability) yang diperoleh dari matriks perbandingan berpasangan AHP, dan $x_i$ adalah skor ternormalisasi alternatif pada kriteria tersebut. Konsistensi matriks AHP dievaluasi melalui *Consistency Ratio*:

$$CR = \frac{CI}{RI} < 0,10$$

Di mana $CI = \frac{\lambda_{max} - n}{n-1}$ adalah *Consistency Index* dan $RI$ adalah *Random Index* empiris berdasarkan ukuran matriks $n$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi DFMA mengikuti SOP terstruktur yang diadopsi oleh Amirullah dan Jakaria (2024) dengan referensi pada protokol Boothroyd-Dewhurst. Berikut adalah arsitektur metodologis lengkap:

### 3.1 Tahap 1: Analisis Fungsi Produk

Insinyur desain memetakan *functional decomposition* produk menggunakan diagram FAST (*Function Analysis System Technique*). Setiap fungsi dasar dijawab dengan pertanyaan "Bagaimana cara kerja?" dan "Bagaimana cara melaksanakannya?". Untuk *coffee enema basket*, fungsi utamanya adalah: (1) menahan bubuk kopi, (2) memungkinkan filtrasi, (3) memberikan pegangan ergonomis, dan (4) memastikan segel kedap air.

### 3.2 Tahap 2: Identifikasi Part Minimum Teoritis

Berdasarkan *mating condition analysis*, ditentukan $N_m$ — jumlah minimum part yang secara teoretis tidak dapat direduksi lebih lanjut tanpa menghilangkan fungsi esensial. Kriteria eliminasi part meliputi:
- Apakah part bergerak relatif terhadap part lain selama operasi? → Jika tidak, kandidat eliminasi
- Apakah part harus terbuat dari material berbeda? → Jika tidak, kandidat eliminasi
- Apakah part diperlukan untuk perakitan/pemeliharaan? → Pertimbangkan integrasi

### 3.3 Tahap 3: Penilaian Handling dan Insertion Difficulty

Setiap part aktual diskor menggunakan tabel indeks kesulitan Boothroyd-Dewhurst (Tabel 3.1 dalam paper Amirullah & Jakaria 2024). Total $S_{total}$ dihitung, dan part dengan skor gabungan > 3,0 menjadi kandidat redesain melalui *design for symmetry* atau *self-aligning features*.

### 3.4 Tahap 4: Redesain Konseptual dan Manufakturabilitas

Modifikasi desain dilakukan dengan prinsip:
- **Consolidation**: Menggabungkan 2-3 part menjadi 1 part multifungsi
- **Standardization**: Menggunakan komponen *off-the-shelf* jika memungkinkan
- **Simplification**: Menghilangkan fitur dekoratif non-fungsional
- **Material optimization**: Migrasi ke material yang lebih mudah difabrikasi

### 3.5 Tahap 5: Validasi dan Verifikasi

Desain redesain divalidasi melalui:
- Estimasi ulang $E_{DFA}$ dan perbandingan dengan desain awal
- *Prototype manufacturing* untuk verifikasi DFM
- *Assembly trial* untuk verifikasi DFA
- Analisis biaya menggunakan $C_{unit}$ formula

### 3.6 Diagram Alir SOP DFMA

```
[Fungsi Produk] → [Identifikasi N_m] → [Skor DFA] → 
    ↓
[Redesain Konseptual] → [Validasi Manufaktur] → 
    ↓
[Estimasi Biaya C_unit] → [Prototyping] → [Implementasi Produksi]
```

Prosedur ini selaras dengan kerangka integrasi DFMA-BIM yang dikembangkan oleh Islam (2024), di mana evaluasi multi-kriteria terjadi secara iteratif sejak fase konseptual hingga preliminary design—bukan sebagai *post-hoc review* setelah desain dibekukan.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Berdasarkan data operasional yang dapat direkonstruksi dari kerangka metodologis Amirullah dan Jakaria (2024) untuk redesain *coffee enema basket*, berikut adalah perhitungan numerik end-to-end yang merepresentasikan tipikal kasus industri:

### 4.1 Parameter Input Desain Awal

| Parameter | Simbol | Nilai Awal |
|-----------|--------|------------|
| Jumlah total part | $N_t^{awal}$ | 12 part |
| Jumlah minimum part teoritis | $N_m$ | 5 part |
| Waktu perakitan aktual | $t_a^{awal}$ | 180 detik |
| Waktu minimum per part (benchmark) | $t_{minimum}$ | 1,5 detik |

### 4.2 Perhitungan DFA Index Desain Awal

$$E_{DFA}^{awal} = \frac{N_m \cdot t_{minimum}}{N_t^{awal} \cdot t_a^{awal}} \times 100\%$$

$$E_{DFA}^{awal} = \frac{5 \times 1,5}{12 \times 180} \times 100\% = \frac{7,5}{2160} \times 100\% = 0,347\%$$

N