# 2575 — Redesain Produk dengan Metode Design for Manufacture and Assembly (DFMA): Studi Kasus Redesain Coffee Enema Basket serta Generalisasi Lintas-Sektor Manufaktur

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur modern menghadapi tekanan simultan dari empat vektor kompetitif: (1) permintaan konsumen untuk personalisasi produk dengan waktu tunggu yang makin pendek, (2) ketidakpastian rantai pasok global pascapandemi yang menghendaki lokalisasi dan resiliensi, (3) desakan keberlanjutan lingkungan yang menuntut minimasi scrap dan embodied carbon, serta (4) eskalasi biaya energi dan tenaga kerja terampil. Dalam kerangka ini, *Design for Manufacture and Assembly* (DFMA) muncul sebagai disiplin rekayasa yang menyuntikkan pengetahuan manufaktur ke dalam fase konseptual desain — jauh sebelum mould dipotong, jig difabrikasi, atau lini perakitan dikonfigurasi (Amirullah & Jakaria, 2024, DOI: [10.21070/ups.3309](https://doi.org/10.21070/ups.3309)).

Studi Amirullah dan Jakaria (2024) memfokuskan perhatian pada sebuah produk sederhana namun penuh kompleksitas manufaktur tersembunyi: **coffee enema basket** — komponen instrumen terapi yang berfungsi sebagai wadah filtrasi bubuk kopi dalam prosedur enema. Meskipun tampak trivial, produk ini pada desain awalnya memiliki Bill of Materials (BoM) yang berlebih, toleransi geometris yang menuntut operasi sekunder, serta alur perakitan yang tidak ergonomis bagi operator rumahan. Urgensi redesain muncul karena tiga akar masalah: (i) **cost-of-poor-quality** akibat reject rate tinggi pada proses stamping dan welding; (ii) **waktu perakitan** yang melebihi benchmark 60 detik untuk produk konsumen kelas D; serta (iii) **keamanan pengguna** yang mensyaratkan food-grade stainless steel dengan sambungan bebas celah tajam.

Dalam skala makro, Mubashir Islam (2024, DOI: [10.63125/av45jf21](https://doi.org/10.63125/av45jf21)) memperkuat argumen bahwa pemilihan desain konvensional — yang hanya mendasarkan keputusan pada biaya material dan kecukupan struktural — secara sistematis mengabaikan variabel kritis seperti manufaktur, transportasi, pengangkatan (*lifting*), dan ereksi (*erection*). Dalam konteks jembatan pracetak, kelalaian ini baru terdiagnosis saat shop-drawing diproduksi atau di lapangan, ketika koreksi menjadi mahal karena mould sudah dipotong dan desain sudah *frozen*. Paralel ini menunjukkan bahwa DFMA bukan metodologi vertikal untuk satu industri, melainkan pendekatan *cross-sector* yang relevan mulai dari instrumen medis rumah tangga hingga infrastruktur jembatan berbobot ribuan ton.

Konteks ekonomi mikro produk ini juga tak kalah penting. Margin industri alat kesehatan rumahan (*home medical device*) di Indonesia berkisar 18–24%, namun reject rate 7–11% pada tahap produksi dapat menggerus margin menjadi negatif. Dengan redesain DFMA yang menurunkan jumlah komponen dari 11 menjadi 6 part, menghilangkan dua operasi welding, dan menyederhanakan satu operasi machining, manufacturer berpotensi menghemat *manufacturing cost* hingga 23–28% per unit (estimasi berbasis benchmark industri yang dikutip Amirullah & Jakaria, 2024).

---

## 2. Landasan Teori & Formulasi Matematis

Metodologi DFMA berdiri di atas dua pilar yang saling komplementer: **Design for Manufacture (DFM)** dan **Design for Assembly (DFA)**. Pilar DFM mengevaluasi seberapa efisien suatu desain dapat difabrikasi, sementara pilar DFA mengukur kemudahan perakitan. Amirullah dan Jakaria (2024) mengadopsi kerangka analisis Boothroyd-Dewhurst yang sudah terstandarisasi secara global.

### 2.1 Design for Assembly (DFA) — Boothroyd-Dewhurst Method

Indeks DFA didefinisikan sebagai:

$$DFA_{index} = \frac{N_{min}}{t_e \cdot N_{parts}}$$

di mana $N_{min}$ adalah jumlah minimum teoritis komponen yang diperlukan untuk memenuhi fungsi desain (dengan asumsi tiap part menjalankan satu fungsi dasar), $N_{parts}$ adalah jumlah aktual komponen pada desain, dan $t_e$ adalah waktu perakitan teoritis per komponen (detik). Semakin tinggi $DFA_{index}$, semakin efisien desain tersebut. Benchmark industri menunjukkan:

- $DFA_{index} < 0{,}20$: desain buruk, perlu redesain radikal
- $0{,}20 \leq DFA_{index} < 0{,}40$: desain dapat diterima dengan perbaikan minor
- $DFA_{index} \geq 0{,}40$: desain efisien

### 2.2 Efisiensi Perakitan

Efisiensi perakitan dapat pula diformulasikan sebagai:

$$\eta_{assembly} = \frac{N_{theoretical}}{N_{actual}} \times 100\%$$

dengan $N_{theoretical}$ adalah jumlah part minimum absolut dan $N_{actual}$ adalah jumlah part aktual. Untuk coffee enema basket, Amirullah dan Jakaria (2024) menetapkan bahwa fungsi minimal yang harus ada adalah: (i) wadah filtrasi, (ii) media filtrasi perforasi, (iii) pegangan, dan (iv) tutup/penahan. Maka $N_{theoretical} = 4$.

### 2.3 Biaya Manufaktur Total

Total biaya per unit dimodelkan sebagai:

$$C_{total} = \sum_{i=1}^{n} (C_{material,i} + C_{process,i} + C_{tooling,i} + C_{assembly,i}) + C_{overhead}$$

di mana setiap term merepresentasikan biaya material, biaya proses (stamping, welding, machining, polishing), biaya tooling (depresiasi dies dan jig), dan biaya perakitan. Pada redesain DFMA, variabel keputusan adalah eliminasi part dan penggantian proses welding dengan teknik mekanis lain.

### 2.4 Time Reduction Quantification

Pengurangan waktu perakitan diprediksi oleh:

$$\Delta t = t_{before} - t_{after} = \sum_{j=1}^{N_{parts,before}} t_{j,before} - \sum_{k=1}^{N_{parts,after}} t_{k,after}$$

dengan $t_j$ adalah waktu standar assembly per part termasuk handling, insertion, dan fastening.

### 2.5 Multi-Criteria Decision Framework (Pendukung)

Berangkat dari kerangka Islam (2024), ketika DFMA diintegrasikan dengan Building Information Modelling (BIM) atau sistem evaluasi multi-kriteria, fungsi utilitas tiap alternatif desain dimodelkan sebagai:

$$U_i = \sum_{m=1}^{M} w_m \cdot s_{i,m}$$

dengan $w_m$ adalah bobot kriteria ke-$m$ (manufacturability, transportability, liftability, erectability, cost), dan $s_{i,m}$ adalah skor ternormalisasi desain ke-$i$ pada kriteria ke-$m$, dengan kendala $\sum w_m = 1$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Penerapan DFMA mengikuti alur sistematis yang secara eksplisit dipetakan oleh Amirullah dan Jakaria (2024). Prosedur ini dibagi ke dalam tujuh tahap rekayasa yang saling dependen:

### 3.1 Tahap 1 — Analisis Fungsi dan Konstrain Produk
Langkah awal adalah dekomposisi fungsi produk menggunakan diagram FAST (*Function Analysis System Technique*). Untuk coffee enema basket, fungsi primer adalah filtrasi dan retensi kopi; fungsi sekunder adalah pegangan ergonomis dan penahan. Konstrain yang diinventarisasi meliputi: food-grade compliance (ASTM A240 untuk stainless steel 304), kapasitas filtrasi 50–80 gram bubuk, dan dimensi kompatibel dengan selang enema standar.

### 3.2 Tahap 2 — Pembuatan Bill of Materials (BoM) Awal
BoM awal diinventarisasi secara eksplisit. Berdasarkan redesain yang dilaporkan, BoM awal mencakup 11 komponen: 1 bodi utama, 1 plat dasar, 1 ring pengunci, 1 pegangan datar, 2 rivet, 1 plat perforasi, 1 tutup, 2 ring pengikat, 1 kawat pengait, 1 gagang kayu.

### 3.3 Tahap 3 — Aplikasi DFA Worksheet (Boothroyd-Dewhurst)
Setiap komponen dievaluasi menggunakan worksheet DFA yang mencatat: (a) apakah part melakukan fungsi tersendiri, (b) apakah part harus terpisah karena gerakan relatif, (c) apakah part terpisah karena kebutuhan material berbeda, (d) apakah part terpisah karena proses assembling/pembongkaran. Part yang gagal ketiga uji umumnya kandidat eliminasi.

### 3.4 Tahap 4 — Aplikasi DFM Analysis
Setelah DFA, dilakukan DFM dengan mempertimbangkan: (a) proses fabrikasi alternatif (sheet metal stamping vs. wire forming vs. injection molding untuk komponen non-logam), (b) standardisasi ketebalan plat, (c) pengurangan operasi sekunder seperti deburring, dan (d) minimalisasi variasi tool setup.

### 3.5 Tahap 5 — Redesain Konseptual
Berdasarkan output Tahap 3 dan 4, draf redesain diajukan. Pada coffee enema basket, Amirullah dan Jakaria (2024) melakukan konsolidasi pegangan dan gagang menjadi satu komponen integral hasil stamping; eliminasi dua ring pengikat dengan memperkenalkan *snap-fit* geometris; serta konversi proses welding menjadi *mechanical interference fit*.

### 3.6 Tahap 6 — Validasi dan Estimasi Biaya
Redesain divalidasi melalui: (a) perhitungan ulang $DFA_{index}$, (b) pembuatan prototipe cepat (*rapid prototyping* dengan 3D printing SLS untuk validasi fit), dan (c) analisis biaya produksi dengan Activity-Based Costing.

### 3.7 Tahap 7 — Dokumentasi dan Diseminasi
Hasil didokumentasikan dalam laporan DFMA lengkap yang mencakup before-after comparison, BoM baru, drawing set, dan Work Instruction. Pada konteks yang lebih luas, Islam (2024) menyarankan agar output DFMA disimpan dalam *Common Data Environment* (CDE) berbasis BIM untuk interoperabilitas lintas disiplin (struktur, arsitektur, MEP, konstruksi).

**Diagram Alir SOP DFMA:**

```
[Mulai] → [Analisis FAST] → [BoM Awal]
                              ↓
                    [DFA Worksheet Boothroyd-Dewhurst]
                              ↓
                       [DFM Analysis]
                              ↓
                    [Redesain Konseptual]
                              ↓
                  [Hitung DFA_index Baru]
                              ↓
            ┌───── DFA_index ≥ 0,40 ? ─────┐
            ↓ Ya                           ↓ Tidak
   [Prototipe & Validasi]            [Iterasi Redesain]
            ↓
[Analisis Biaya ABC]
            ↓
        [Selesai]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk mengilustrasikan kekuatan analitis DFMA, disajikan kembali perhitungan berbasis parameter yang dilaporkan Amirullah dan Jakaria (2024), dengan generalisasi lintas-sektor dari Islam (2024).

### 4.1 Data Input Redesain Coffee Enema Basket

| Parameter | Desain Awal | Desain Redesain |
|---|---|---|
| Jumlah part ($N_{parts}$) | 11 | 6 |
| Jumlah fungsi minimal ($N_{min}$) | 4 | 4 |
| Waktu per part rata-rata (detik) | 9,2 | 8,5 |
| Operasi welding | 2 | 0 |
| Operasi machining sekunder | 3 | 1 |
| Material | SS304 + kayu | SS304 murni |

### 4.2 Perhitungan DFA Index

**Desain Awal:**

$$DFA_{index,before} = \frac{N_{min}}{t_e \cdot N_{parts}} = \frac{4}{9{,}2 \times 11} = \frac{4}{101{,}2} \approx 0{,}0395$$

Nilai ini berada jauh di bawah ambang 0,20 → desain memerlukan redesain radikal.

**Desain Redesain:**

$$DFA_{index,after} = \frac{N_{min}}{t_e \cdot N_{parts}} = \frac{4}{8{,}5 \times 6} = \frac{4}{51} \approx 0{,}0784$$

Peningkatan indeks dua kali lipat (dari 0,0395 menjadi 0,0784) menunjukkan lompatan efisiensi yang signifikan. Efisiensi perakitan juga naik:

$$\eta_{before} = \frac{4}{11} \times 100\% = 36{,}36\%$$

$$\eta_{after} = \frac{4}{6} \times 100\% = 66{,}67\%$$

### 4.3 Perhitungan Pengurangan Waktu Perakitan

$$\Delta t = (11 \times 9{,}2) - (6 \times 8{,}5) = 101{,}2 - 51{,}0 = 50{,}2 \text{ detik}$$

Pada volume produksi