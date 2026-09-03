# 2607 — Redesain Produk Manufaktur dengan Pendekatan Design for Manufacture and Assembly (DFMA): Studi Kasus Redesain Coffee Enema Basket dan Ekstensi ke Konstruksi Jembatan Pracetak

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesain Produk Manufaktur Berbasis Prinsip DFMA untuk Peningkatan Efisiensi Produksi dan Perakitan
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method*. Peer-Reviewed Journal. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *A BIM-Based Multi-Criteria Bridge Design Evaluation Framework Integrating Design for Manufacture and Assembly (DfMA) for Prefabricated Bridge Construction*. Journal of Sustainable Development and Policy. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur modern menghadapi tantangan ganda berupa tuntutan efisiensi biaya produksi, peningkatan kualitas produk, dan percepatan time-to-market. Dalam lanskap kompetitif ini, metode Design for Manufacture and Assembly (DFMA) muncul sebagai kerangka rekayasa terpadu yang menyelaraskan keputusan desain sejak tahap konseptual dengan kemampuan proses manufaktur dan perakitan hilir. Amirullah dan Jakaria (2024) dalam tulisannya yang berjudul *Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method* (DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) menyoroti urgensi aplikasi DFMA pada produk healthcare-grade sederhana yang selama ini dirancang tanpa memperhatikan kriteria manufacturability.

Coffee Enema Basket merupakan instrumen terapi alternatif yang digunakan dalam prosedur klinis tertentu, di mana desain konvensionalnya sering kali mengandalkan komponen fabrikasi logam dengan jumlah parts berlebih, proses pengelasan manual yang tidak presisi, serta prosedur perakitan yang memerlukan waktu panjang. Permasalahan manufacturability semacam ini menimbulkan defect rate tinggi, biaya produksi yang tidak kompetitif, dan inkonsistensi kualitas yang menjadi concern serius di sektor alat kesehatan. Pendekatan DFMA memungkinkan dilakukannya redesain sistematis yang menurunkan jumlah komponen, menyederhanakan operasi perakitan, serta memilih proses manufaktur yang lebih efisien secara ekonomi dan teknis.

Konteks serupa juga disoroti oleh Islam (2024) dalam studinya tentang integrasi DFMA dengan Building Information Modelling (BIM) untuk konstruksi jembatan pracetak (DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)). Islam (2024) menekankan bahwa keputusan desain konvensional cenderung hanya mempertimbangkan biaya dan kecukupan struktural, padahal permasalahan buildability—seperti kendala manufaktur, transportasi, pengangkatan, dan ereksi—baru teridentifikasi saat shop-drawing sudah dibekukan dan cetakan sudah dipotong. Kedua paper ini, meskipun berada di domain yang berbeda (peralatan kesehatan vs. infrastruktur sipil), menunjukkan pola kegagalan desain yang sama: terlambatnya input pengetahuan manufaktur dan perakitan ke dalam siklus desain.

Secara ekonomi, penerapan DFMA pada tahap konseptual dapat menurunkan total biaya siklus hidup produk hingga 30–70% menurut estimasi literatur klasik Boothroyd, Dewhurst, dan Knight. Investasi pada redesain di awal siklus memberikan return yang jauh lebih tinggi dibanding perbaikan setelah produksi massal. Selain itu, dari perspektif keberlanjutan, pengurangan jumlah komponen dan simplifikasi proses perakitan berkontribusi langsung pada penurunan konsumsi material, waste generation, dan carbon footprint. Dengan demikian, DFMA bukan sekadar metodologi teknis, melainkan strategi bisnis yang krusial bagi perusahaan manufaktur yang ingin mempertahankan daya saing di pasar global.

## 2. Landasan Teori & Formulasi Matematis

DFMA merupakan gabungan dua subdomain rekayasa, yaitu Design for Manufacture (DFM) dan Design for Assembly (DFA). DFM berfokus pada optimalisasi desain agar komponen mudah, murah, dan presisi diproduksi, sementara DFA menekankan penyederhanaan perakitan melalui minimisasi parts, penggunaan fitur self-locating, dan eliminasi operasi yang tidak menambah nilai.

### 2.1. Indeks Efisiensi Desain untuk Perakitan (DFA Efficiency)

Metrik klasik yang diperkenalkan oleh Boothroyd dan Dewhurst untuk mengukur efisiensi desain perakitan adalah:

$$\eta_{DFA} = \frac{N_{min} \cdot t_{min}}{N_a \cdot t_a} \times 100\%$$

di mana:
- $N_{min}$ = jumlah minimum teoritis komponen yang diperlukan untuk fungsi produk
- $t_{min}$ = waktu perakitan teoritis minimum untuk satu unit (detik atau menit)
- $N_a$ = jumlah aktual komponen dalam desain
- $t_a$ = waktu perakitan aktual hasil observasi

Nilai $\eta_{DFA}$ yang tinggi mengindikasikan desain mendekati ideal secara struktural dan prosedural. Amirullah dan Jakaria (2024) menggunakan indeks ini sebagai salah satu KPI utama dalam proses redesain Coffee Enema Basket untuk mengkuantifikasi improvement sebelum dan sesudah penerapan DFMA.

### 2.2. Design Efficiency Ratio

Alternatif metrik yang lazim digunakan adalah rasio efisiensi desain:

$$E_d = \frac{N_{min}}{N_{actual}} \times 100\%$$

Semakin kecil $N_{actual}$ relatif terhadap $N_{min}$, semakin tinggi efisiensi desain. Setiap komponen tambahan yang tidak esensial harus dievaluasi menggunakan *three-question screening*: (1) Apakah komponen bergerak relatif terhadap yang lain saat operasi? (2) Apakah komponen harus terpisah karena kebutuhan material berbeda? (3) Apakah komponen harus terpisah untuk memudahkan perakitan atau servis? Jika ketiga jawaban negatif, komponen tersebut kandidat eliminasi.

### 2.3. Biaya Manufaktur dan Perakitan Total

Total biaya produksi satu unit produk dapat diformulasikan sebagai:

$$C_{total} = \sum_{i=1}^{n} (C_{m,i} + C_{a,i}) + C_{overhead}$$

di mana:
- $C_{m,i}$ = biaya manufaktur komponen ke-$i$ (material + proses fabrikasi)
- $C_{a,i}$ = biaya perakitan komponen ke-$i$
- $C_{overhead}$ = biaya tidak langsung (overhead, tooling, quality control)

Untuk proses fabrikasi logam seperti sheet metal forming, biaya manufaktur komponen dapat diestimasi dengan:

$$C_{m,i} = C_{material,i} + (t_{mach,i} \cdot R_{labor}) + (t_{setup,i} \cdot R_{labor}) \cdot \frac{1}{batch\_size}$$

di mana $R_{labor}$ adalah tarif tenaga kerja per satuan waktu dan $t_{mach}$ adalah waktu pemrosesan mesin.

### 2.4. Pugh Matrix untuk Evaluasi Konsep

Pemilihan alternatif desain dalam DFMA lazim dilakukan menggunakan *Pugh Matrix* dengan formulasi skor:

$$S_k = \sum_{j=1}^{m} w_j \cdot r_{kj}$$

di mana:
- $S_k$ = skor total konsep ke-$k$
- $w_j$ = bobot kriteria ke-$j$ (dengan $\sum w_j = 1$)
- $r_{kj}$ = rating konsep $k$ terhadap kriteria $j$ (skala -2 sampai +2 relatif terhadap baseline)

Kriteria yang umum digunakan mencakup manufacturability, assemblability, biaya, kekuatan struktural, dan kepatuhan terhadap standar.

### 2.5. Formulasi Bobot AHP (Analytic Hierarchy Process)

Untuk menentukan bobot kriteria secara lebih rigor, digunakan AHP dengan consistency check:

$$CR = \frac{CI}{RI} < 0.10$$

dengan $CI = (\lambda_{max} - n)/(n-1)$, di mana $CR$ adalah Consistency Ratio dan $RI$ adalah Random Index tergantung ordo matriks.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi DFMA mengikuti prosedur sistematis yang diadopsi oleh Amirullah dan Jakaria (2024) untuk kasus Coffee Enema Basket. Prosedur ini juga paralel dengan framework BIM-DfMA yang dikembangkan Islam (2024) untuk jembatan pracetak.

### 3.1. Diagram Alir SOP Redesain DFMA

```
[Tahap 1: Analisis Produk Eksisting]
            ↓
[Identifikasi fungsi produk & spesifikasi]
            ↓
[Pembuatan BOM (Bill of Materials) aktual]
            ↓
[Pengukuran waktu & biaya manufaktur + perakitan]
            ↓
[Tahap 2: DFA Analysis]
            ↓
[Three-question screening tiap komponen]
            ↓
[Perhitungan η_DFA eksisting]
            ↓
[Tahap 3: Concept Generation]
            ↓
[Brainstorming alternatif desain]
            ↓
[Evaluasi Pugh Matrix / AHP]
            ↓
[Tahap 4: DFM Analysis]
            ↓
[Pemilihan proses manufaktur optimal]
            ↓
[Standardisasi komponen & material]
            ↓
[Tahap 5: Redesain & Validasi]
            ↓
[Prototyping & uji fungsional]
            ↓
[Perhitungan η_DFA baru]
            ↓
[Tahap 6: Dokumentasi & Standarisasi]
```

### 3.2. Langkah Operasional Detail

**Langkah 1 — Decomposisi Fungsi:** Produk didekomposisi menjadi fungsi primer (misalnya, menahan filter kopi, memungkinkan aliran larutan, tahan korosi) dan fungsi sekunder. Setiap fungsi dipetakan ke komponen aktual.

**Langkah 2 — Analisis DFA:** Terapkan three-question screening pada setiap komponen. Komponen lulus hanya jika minimal satu jawaban positif. Hitung $\eta_{DFA}$ baseline.

**Langkah 3 — Concept Generation:** Bangun minimal 3–5 alternatif desain yang menyederhanakan struktur. Misalnya, menggantikan beberapa komponen terpisah dengan satu komponen integral hasil stamping atau injection molding.

**Langkah 4 — DFM Optimization:** Pilih proses manufaktur yang sesuai—sheet metal stamping untuk produksi massal biaya rendah, CNC machining untuk presisi tinggi volume rendah, atau injection molding untuk geometri kompleks dengan repeatability tinggi.

**Langkah 5 — Redesain & Validasi:** Buat prototype dan ukur ulang $\eta_{DFA}$. Bandingkan dengan baseline dan lakukan iterasi jika target belum tercapai.

### 3.3. Integrasi dengan BIM (untuk konteks infrastruktur)

Dalam ekstensi Islam (2024), framework BIM-DfMA menambahkan layer visualisasi 3D dan data atribut yang memungkinkan simulasi clash detection, analisis lifting sequence, dan verifikasi modul transportasi sebelum fabrikasi. Pendekatan ini selaras dengan filosofi DFMA untuk menggeser deteksi masalah ke hulu siklus desain.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Berdasarkan parameter yang lazim dilaporkan dalam studi redesain DFMA produk fabrikasi logam dengan karakteristik serupa Coffee Enema Basket, berikut simulasi kuantitatif:

### 4.1. Parameter Baseline (Desain Eksisting)

Misalkan desain awal Coffee Enema Basket memiliki parameter berikut:

| Parameter | Nilai |
|---|---|
| Jumlah komponen ($N_a$) | 12 part |
| Jumlah minimum teoritis ($N_{min}$) | 5 part |
| Waktu perakitan aktual ($t_a$) | 480 detik |
| Waktu perakitan teoritis ($t_{min}$) | 180 detik |
| Biaya material per unit | Rp 75.000 |
| Biaya fabrikasi per unit | Rp 55.000 |
| Biaya perakitan per unit (Rp 2.500/menit × 8 menit) | Rp 20.000 |
| Biaya total per unit | Rp 150.000 |
| Produksi tahunan | 5.000 unit |

### 4.2. Perhitungan Baseline DFA Efficiency

$$\eta_{DFA,baseline} = \frac{N_{min} \cdot t_{min}}{N_a \cdot t_a} \times 100\% = \frac{5 \times 180}{12 \times 480} \times 100\%$$

$$\eta_{DFA,baseline} = \frac{900}{5760} \times 100\% = 15.625\%$$

### 4.3. Skenario Redesain dengan DFMA

Setelah redesain (menggabungkan dua bracket menjadi satu stamping integral, menghilangkan ring pengunci terpisah dengan mengadopsi snap-fit, dan menggunakan stainless steel mesh sebagai filter terintegrasi):

| Parameter | Nilai Baru |
|---|---|
| Jumlah komponen ($N_a'$) | 7 part |
| Jumlah minimum teoritis ($N_{min}'$) | 5 part |
| Waktu perakitan aktual ($t_a'$) | 270 detik |
| Waktu perakitan teoritis ($t_{min}'$) | 180 detik |
| Biaya material per unit | Rp 60.000 |
| Biaya fabrikasi per unit | Rp 42.000 |
| Biaya perakitan per unit (Rp 2.500/menit × 4,5 menit) | Rp 11.250 |
| Biaya total per unit | Rp 113.250 |

### 4.4. Perhitungan DFA Efficiency Pasca-Redesain

$$\eta_{DFA,baru} = \frac{5 \times 180}{7 \times 270} \times 100\% = \frac{900}{1890} \times 100\% = 47.619\%
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
