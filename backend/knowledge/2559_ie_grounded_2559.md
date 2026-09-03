# 2559 — Redesain Produk Manufaktur menggunakan Metode Design for Manufacture and Assembly (DFMA): Studi Kasus Bakteri Kopi dan Integrasi Lintas-Sektor dengan BIM

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur kontemporer menghadapi tantangan struktural yang semakin kompleks: bagaimana mempertahankan kualitas fungsional produk sambil menurunkan biaya produksi, mempercepat *time-to-market*, dan memenuhi regulasi keselamatan pengguna. Amirullah & Jakaria (2024, DOI: [10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) mengangkat kasus nyata berupa *coffee enema basket* — sebuah alat terapi komplementer yang berfungsi menampung bubuk kopi untuk prosedur enema dengan tetap menjamin tidak adanya kontaminasi partikel padat terhadap cairan irigasi. Produk ini pada awalnya memiliki desain konvensional yang terdiri dari banyak komponen terpisah, sekrup pengikat, serta mekanisme *snap-fit* yang sulit dirakit oleh pengguna akhir di rumah.

Permasalahan industri yang diidentifikasi oleh Amirullah & Jakaria (2024) bersifat multi-dimensi. Pertama, dari perspektif manufacturability, desain lama menggunakan material stainless steel grade 304 dengan proses *las TIG* untuk sambungan permanen dan komponen mur-baut yang meningkatkan jumlah part (*part count*). Kedua, dari perspektif usability, pasien yang melakukan prosedur enema di lingkungan domestik (bukan klinis) membutuhkan alat yang dapat dibongkar-pasang (*disassemblable*) untuk清洗 sterilisasi. Ketiga, dari perspektif ekonomi, biaya perakitan manual dan tingkat *reject rate* di lini produksi menjadi beban *Bill of Materials* (BoM) yang signifikan.

Urgensi ekonominya tecermin pada data empiris yang disajikan penulis: pada desain lama, jumlah komponen mencapai 11 part dengan total waktu perakitan ± 7 menit per unit. Setelah redesain DFMA, jumlah part turun menjadi 6 part dengan waktu perakitan kurang dari 2 menit — sebuah reduksi dramatis yang langsung menurunkan biaya tenaga kerja langsung dan meningkatkan throughput lini. Dalam konteks industri alat kesehatan rumahan (*home medical device*), margin keuntungan sangat sensitif terhadap efisiensi perakitan karena volume produksi berada pada kelas *medium-batch* (5.000–20.000 unit/tahun) dengan harga jual ritel yang relatif rendah.

Lebih jauh, Mubashir Islam (2024, DOI: [10.63125/av45jf21](https://doi.org/10.63125/av45jf21)) memperkuat relevansi metodologis DFMA dengan menunjukkan bahwa pada proyek infrastruktur jembatan prengetasi (*prefabricated bridge construction*), keputusan desain yang diambil sebelum pertimbangan manufacturability, transportasi, dan ereksi menghasilkan *buildability problems* yang baru terdeteksi pada tahap *shop-drawing* atau bahkan erection di lapangan. Islam (2024) menegaskan: "*when the design is frozen, the moulds are cut, and correction is possible only at prohibitive cost*". Paralelisme antara industri alat kesehatan (Amirullah & Jakaria) dan industri konstruksi jembatan prefabrikasi (Islam) menunjukkan bahwa DFMA adalah kebutuhan lintas-sektor yang bersifat universal — bukan sekadar tools reduksi part, melainkan kerangka keputusan desain yang mengintegrasikan constraint manufaktur sejak fase konseptual.

Dengan demikian, modul ini membahas redesain coffee enema basket sebagai *vehicle* pembelajaran utama, sementara framework BIM-DfMA dari Islam (2024) digunakan sebagai benchmark aplikasi lanjutan pada domain infrastruktur.

---

## 2. Landasan Teori & Formulasi Matematis

Metodologi DFMA yang digunakan oleh Amirullah & Jakaria (2024) mengikuti dua pilar analitis utama yang dikembangkan oleh Boothroyd, Dewhurst, dan Knight: **Design for Assembly (DFA)** dan **Design for Manufacture (DFM)**. Berikut formulasi kuantitatif yang relevan.

### 2.1 Design Efficiency (Boothroyd-Dewhurst)

Efisiensi desain dihitung sebagai rasio antara jumlah part minimum teoretis terhadap jumlah part aktual, dikalikan 100%:

$$DE = \frac{N_m}{N_t} \times 100\%$$

di mana:
- $DE$ = Design Efficiency (%)
- $N_m$ = jumlah part minimum teoretis yang diperlukan untuk memenuhi fungsi esensial produk
- $N_t$ = jumlah part aktual pada desain eksisting

Nilai $DE$ mendekati 100% menunjukkan desain yang mendekati ideal (setiap part menjalankan fungsi unik dan tak terpisahkan). Amirullah & Jakaria (2024) melaporkan bahwa desain lama memiliki $N_t = 11$ dengan $N_m = 5$ (fungsi-fungsi esensial: penampung kopi, filter, tutup, pegangan, dudukan), menghasilkan:

$$DE_{lama} = \frac{5}{11} \times 100\% \approx 45.45\%$$

Setelah redesain, $N_t = 6$ dengan $N_m = 5$ (satu part integrasi fungsi tutup-dan-filter), sehingga:

$$DE_{baru} = \frac{5}{6} \times 100\% \approx 83.33\%$$

Peningkatan efisiensi desain sebesar $\Delta DE = 37.88$ poin persentase ini merupakan indikator kuat bahwa redesain berhasil mengeliminasi *redundant parts* dan menggabungkan beberapa fungsi ke dalam satu komponen monolitik.

### 2.2 Assembly Time Estimation (Metode Boothroyd)

Waktu perakitan teoritis dihitung menggunakan persamaan:

$$T_{assy} = \sum_{i=1}^{n} \left(t_{a,i} + t_{b,i}\right) \cdot N_i$$

di mana:
- $T_{assy}$ = total waktu perakitan (detik atau menit)
- $t_{a,i}$ = waktu penanganan part (handling time) untuk kode part $i$
- $t_{b,i}$ = waktu penyisipan dan pengencangan (insertion time) untuk kode part $i$
- $N_i$ = jumlah occurrence untuk kode part tersebut
- $n$ = jumlah kode part unik

Amirullah & Jakaria (2024) melaporkan bahwa dengan mengeliminasi 5 part pengikat (mur, baut, ring, snap-clip, dan gasket silikon terpisah), terjadi reduksi kumulatif waktu assembly.

### 2.3 Design for Manufacture Cost Function

Biaya manufaktur total dipengaruhi oleh material cost, machining cost, dan assembly cost:

$$C_m = C_{mat} + C_{mach} + C_{assy} + C_{tooling}$$

di mana:
$$C_{mat} = \sum_{j=1}^{m} \rho_j \cdot V_j \cdot p_j$$

dengan $\rho_j$ = densitas material, $V_j$ = volume part, $p_j$ = harga per satuan massa material, dan $m$ = jumlah part.

Waktu permesinan (*machining time*) dihitung sebagai:

$$t_{mach} = \frac{L}{f \cdot N}$$

dengan $L$ = panjang lintasan potong (mm), $f$ = *feed rate* (mm/rev), $N$ = kecepatan spindel (rpm).

### 2.4 Multi-Criteria Decision Framework (Pendukung: Islam 2024)

Untuk aplikasi lanjutan pada domain infrastruktur, Islam (2024) menggunakan *weighted scoring model* berbasis BIM:

$$S_j = \sum_{k=1}^{K} w_k \cdot r_{jk}$$

di mana:
- $S_j$ = skor total alternatif desain $j$
- $w_k$ = bobot kriteria $k$ (misal: manufacturability, transportability, structural adequacy, cost, sustainability)
- $r_{jk}$ = rating normalized alternatif $j$ pada kriteria $k$
- $\sum w_k = 1$

Constraint optimasi:

$$\max_{j \in J} S_j \quad \text{subject to} \quad C_j \leq C_{budget}$$

Integrasi BIM-DFMA dalam Islam (2024) memungkinkan ekstraksi otomatis parameter geometris dari model 3D ke matriks keputusan, sehingga keputusan desain tidak lagi eksklusif bergantung pada *structural adequacy* dan *cost* saja, melainkan telah memasukkan parameter manufacturability, lifting feasibility, dan erection safety sejak fase konseptual.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Amirullah & Jakaria (2024) mengimplementasikan DFMA melalui *eight-stage systematic procedure* yang dapat diadaptasi menjadi SOP industri sebagai berikut:

**Tahap 1 — Function Analysis (Analisis Fungsi)**
Setiap part existing di-decompose menjadi fungsi primer (Fungsi penampung, filtrasi, sealing, gripping, base support). Fungsi yang dapat diintegrasikan diidentifikasi menggunakan Function Analysis System Technique (FAST) diagram.

**Tahap 2 — Part Count Reduction**
Mengaplikasikan aturan Boothroyd: (a)删除 part yang tidak menjalankan fungsi esensial, (b) menggabungkan part yang bergerak relatif terhadap satu sama lain, (c) standardize komponen-komponen yang dibeli (*bought-out parts*).

**Tahap 3 — Material Selection**
Pemilihan stainless steel 304 food-grade dengan pertimbangan:
- Ketahanan korosi (diperlukan karena kontak dengan larutan kopi asam)
- Bio-compatibility untuk aplikasi medis
- Kemudahan fabrikasi (forming, welding, polishing)
- Biaya material dalam BoM

**Tahap 4 — Manufacturing Process Selection**
Desain baru mengadopsi proses *sheet metal forming* + *laser welding* untuk menggantikan kombinasi *machining + mechanical fasteners*. Welding menggantikan mur-baut, sehingga terjadi reduksi signifikan pada $N_t$.

**Tahap 5 — Assembly Process Design**
Menggunakan prinsip *mistake-proofing* (poka-yoke): tutup didesain *self-aligning* menggunakan fitur conical boss, sehingga orientasi pemasangan menjadi unambiguous.

**Tahap 6 — DFA Calculation**
Hitung DE dan assembly time menggunakan formula di Bagian 2. Bandingkan dengan baseline.

**Tahap 7 — DFM Verification**
Verifikasi bahwa setiap komponen dapat difabrikasi dengan toleransi yang realistis tanpa memerlukan jig/fixture khusus yang mahal.

**Tahap 8 — Prototype Testing & Iteration**
Prototip diuji untuk: (a) leak-test pada tekanan hidrostatik, (b) disassembly-cleanability test, (c) durability test pada 500 siklus penggunaan.

### Diagram Alir SOP DFMA (Adaptasi Amirullah & Jakaria 2024 + Islam 2024):

```
[START] 
   ↓
Identifikasi Masalah & Konstrain Desain
   ↓
Function Analysis (FAST Diagram)
   ↓
Generate Alternatif Konfigurasi
   ↓
DFA Analysis → Hitung N_m, N_t, DE, T_assy
   ↓
DFM Analysis → Pilih Material & Proses
   ↓
[ITERASI JIKA DE < 70% ATAU T_assy > TARGET]
   ↓
Evaluasi Multi-Kriteria (BIM-Integrated untuk proyek skala besar)
   ↓
Scoring: S_j = Σ w_k · r_jk
   ↓
Seleksi Desain Optimum (max S_j subject to C_j ≤ C_budget)
   ↓
Detail Engineering & Shop Drawing
   ↓
Prototype & Validasi
   ↓
[PRODUCTION RELEASE]
```

Integrasi dengan framework BIM-DFMA Islam (2024) direkomendasikan untuk produk dengan skala dan kompleksitas lebih tinggi (misalnya: skid-mounted medical device, modular furniture, atau komponen jembatan prefabrikasi), di mana parameter seperti *transportability*, *lifting weight*, dan *site assembly sequence* menjadi constraint tambahan yang harus di-parameterisasi sejak awal.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus: Redesain Coffee Enema Basket (Amirullah & Jakaria 2024)**

### 4.1 Baseline Data (Desain Lama)

| Part # | Nama Part | Material | Proses | T_assy_kontrib (detik) |
|--------|-----------|----------|--------|------------------------|
| 1 | Cangkir utama | SS 304 | Deep drawing | 18 |
| 2 | Lubang filter (mesh) | SS 304 | Stamping + welding | 25 |
| 3 | Ring penjepit mesh | SS 304 | Machining | 22 |
| 4 | Baut M3 × 4 | SS 304 | Beli jadi | 32 |
| 5 | Mur M3 × 4 | SS 304 | Beli jadi | 28 |
| 6 | Ring plat × 4 | SS 304 | Beli jadi | 15 |
| 7 | Snap-clip × 2 | SS 304 | Beli jadi | 20 |
| 8 | Gasket silikon | Silikon food grade | Beli jadi | 18 |
| 9 | Pegangan | SS 304 | Tube bending | 30 |
| 10 | Dudukan bawah | SS 304 | Stamping | 15 |
| 11 | Baut dudukan × 3 | SS 304 | Beli jadi | 35 |

**Total part: $N_t = 11$**  
**Total assembly time: $T_{assy,lama} = 18+25+22+32+28+15+20+18+30+15+35 = 258$ detik ≈ 4.30 menit**

*(Catatan: Angka time contribution di sini adalah representasi ilustratif yang konsisten dengan skala laoran penulis ±7 menit dengan memperhitungkan waktu handling operator, repositioning, dan tool change. Angka tepat dapat dilihat pada Amirullah & Jakaria 2024.)*

### 4.2 Redesain (Desain Baru)

| Part # | Nama Part | Material | Proses | T_assy_kontrib (detik) |
|--------|--------