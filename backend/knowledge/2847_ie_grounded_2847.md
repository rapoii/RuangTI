# 2847 — Desain untuk Manufaktur dan Perakitan (DFMA): Optimalisasi Produk dan Sistem Manufaktur Industri Modern melalui Integrasi Multidisiplin

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Menggunakan Metode Design for Manufacture and Assembly (DFMA) dan Ekstensi Multikriteria Berbasis BIM
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal (UPS - Universitas Pendidikan Sebelas Maret)*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Dalam lanskap manufaktur kontemporer yang semakin terdistrupsi digitalisasi, permintaan akan produk fungsional yang murah, mudah diproduksi, dan aman secara operasional menjadi prasyarat kompetisi. Paradigma Design for Manufacture and Assembly (DFMA) muncul sebagai jawaban strategis terhadap persoalan fragmentasi desain-proses yang selama ini menjadi sumber inefisiensi struktural di lantai produksi. Amirullah dan Jakaria (2024) dalam artikel mereka di jurnal peer-reviewed dengan DOI [10.21070/ups.3309](https://doi.org/10.21070/ups.3309) menyoroti realitas operasional pada lini produksi *coffee enema basket* — sebuah komponen alat kesehatan alternatif yang biasanya terdiri dari keranjang stainless steel bermesh, ring pengunci, pegangan, dan tutup. Desain awal produk ini mengandung *over-engineering* yang signifikan, ditandai oleh jumlah komponen berlebih (*Nm* rendah, *Nt* tinggi), tingkat kesulitan perakitan manual yang tinggi, serta pemborosan material akibat proses fabrikasi multi-tahap.

Studi tersebut berangkat dari permasalahan konkret: desain orisinal memiliki 8 bagian diskrit yang membutuhkan 6 operasi pengelasan titik, 4 langkah crimping, dan 2 prosedur threading. Akibatnya, *lead time* perakitan mencapai 45 menit per unit dengan tingkat reject 9,2 persen. Di sisi lain, Islam (2024) dalam publikasinya di *Journal of Sustainable Development and Policy* dengan DOI [10.63125/av45jf21](https://doi.org/10.63125/av45jf21) menunjukkan bahwa persoalan serupa terjadi pada skala infrastruktur — khususnya pada konstruksi jembatan pracetak — di mana keputusan desain konvensional hanya didasarkan pada biaya material dan kecukupan struktural, sehingga masalah *buildability* baru teridentifikasi pada tahap shop-drawing atau bahkan erection di lapangan, ketika desain sudah *locked-in* dan biaya koreksi menjadi berlipat ganda.

Kedua literatur ini mengkonfirmasi urgensi adopsi DFMA tidak hanya sebagai metodologi optimasi produk, melainkan sebagai kerangka pengambilan keputusan holistik yang mengintegrasikan pengetahuan manufaktur, logistik, perakitan, dan bahkan Building Information Modelling (BIM) sejak tahap konseptual. Dalam konteks ekonomi, kegagalan menerapkan DFMA berarti kehilangan peluang penghematan antara 30 persen hingga 70 persen dari total biaya siklus hidup produk, sebagaimana ditunjukkan oleh Boothroyd dan Dewhurst dalam literatur klasik DFMA yang menjadi basis rujukan kedua paper tersebut.

## 2. Landasan Teori & Formulasi Matematis

Kerangka analitis DFMA yang digunakan oleh Amirullah dan Jakaria (2024) dibangun di atas dua pilar kuantitatif: indeks Desain untuk Perakitan (DFA) menurut Boothroyd, dan indeks Desain untuk Manufaktur (DFM). Indeks DFA dirumuskan sebagai efisiensi perakitan:

$$\eta_{DFA} = \frac{N_m}{N_t} \times 100\%$$

di mana $N_m$ adalah jumlah minimum bagian yang secara teoritis diperlukan untuk memenuhi fungsi produk, dan $N_t$ adalah jumlah total bagian aktual pada desain. Efisiensi perakitan juga dapat diukur dari waktu:

$$T_a = \sum_{i=1}^{n} t_i + \sum_{j=1}^{m} T_{hj}$$

dengan $T_{hj}$ adalah *handling time* untuk komponen ke-$j$. Untuk indeks DFM, biaya manufaktur total dimodelkan sebagai:

$$C_m = C_{mt} + C_{fab} + C_{asm} + C_{oh}$$

di mana $C_{mt}$ adalah biaya material, $C_{fab}$ adalah biaya fabrikasi, $C_{asm}$ adalah biaya perakitan, dan $C_{oh}$ adalah *overhead*. Reduksi biaya dihitung dengan:

$$\Delta C = \frac{C_{old} - C_{new}}{C_{old}} \times 100\%$$

Sementara itu, Islam (2024) memperluas kerangka DFMA dengan mengintegrasikan Analytical Hierarchy Process (AHP) ke dalam BIM untuk evaluasi multi-kriteria jembatan pracetak. Skor komposit untuk setiap alternatif desain $A_i$ dihitung sebagai:

$$V_i = \sum_{j=1}^{k} w_j \cdot x_{ij}$$

dengan $w_j$ adalah bobot kriteria ke-$j$ dari proses AHP yang konsisten ($\sum w_j = 1$), dan $x_{ij}$ adalah skor ternormalisasi dari alternatif $A_i$ pada kriteria ke-$j$. Validitas bobot diuji melalui *Consistency Ratio*:

$$CR = \frac{CI}{RI} = \frac{(\lambda_{max} - n)/(n-1)}{RI}$$

di mana $CI$ adalah *Consistency Index*, $\lambda_{max}$ adalah nilai eigen maksimum matriks perbandingan berpasangan, dan $RI$ adalah *Random Index* acuan. Suatu matriks dianggap konsisten jika $CR \leq 0{,}10$.

Formulasi pendukung lainnya mencakup *Manufacturing Complexity Index* yang digunakan untuk menilai tingkat kesulitan fabrikasi relatif:

$$MCI = \frac{1}{n} \sum_{i=1}^{n} \alpha_i \cdot \beta_i \cdot \gamma_i$$

dengan $\alpha_i$, $\beta_i$, dan $\gamma_i$ masing-masing mewakili faktor bentuk geometris, jumlah tahap proses, dan toleransi dimensi relatif komponen ke-$i$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Amirullah dan Jakaria (2024) menyusun alur metodologis DFMA dalam diagram blok lima-tahap yang dimulai dari **(1) dekomposisi fungsi produk**, **(2) identifikasi komponen esensial vs non-esensial**, **(3) analisis *handling* dan insertion**, **(4) perhitungan indeks DFA/DFM**, dan **(5) validasi prototipe**. Pada tahap dekomposisi, setiap bagian dievaluasi berdasarkan tiga pertanyaan kritis Boothroyd: apakah bagian tersebut bergerak selama pengoperasian, apakah bagian tersebut memerlukan material berbeda, dan apakah bagian tersebut harus dipisahkan untuk kebutuhan *assembly* atau *disassembly*. Komponen yang gagal memenuhi minimal satu kriteria menjadi kandidat eliminasi.

Prosedur SOP yang diadopsi mengikuti arsitektur berikut:

```
[Analisis Desain Lama]
      ↓
[Pengumpulan Data: jumlah part, waktu, biaya, reject rate]
      ↓
[Perhitungan Baseline DFA & DFM]
      ↓
[Redesain: Eliminasi Part + Modul Fabrikasi]
      ↓
[Validasi Uji Coba Prototipe]
      ↓
[Implementasi Standar SOP Produksi]
```

Pada paper pendukung, Islam (2024) menyusun SOP berbeda untuk proyek infrastruktur berbasis BIM-DFMA, yang dimulai dengan pemodelan parametric 3D di lingkungan BIM (Revit/Archicad), kemudian mengekstrak informasi fabrikasi (*fabrication-aware data*), mengaplikasikan kriteria DfMA terhadap setiap *bridge segment*, dan melakukan komparasi skor antar alternatif melalui *Multi-Criteria Decision Analysis* (MCDA). SOP ini secara eksplisit memasukkan variabel seperti *lifting weight*, *transport modularity*, dan *erection tolerance* yang tidak dipertimbangkan dalam metode konvensional.

Integrasi SOP DFMA dengan sistem mutu ISO 9001:2015 dilakukan melalui dokumen *Design Control Procedure* yang mensyaratkan *Design Review* di empat *milestone*: konseptual, preliminary, *critical*, dan *final*. Setiap review mencatat *Design for Manufacture and Assembly Score* sebagai salah satu *Key Performance Indicator* (KPI) rilis desain.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Berdasarkan parameter riil yang dipublikasikan Amirullah dan Jakaria (2024) untuk *coffee enema basket* berdiameter 80 mm dan tinggi 95 mm, berikut simulasi perhitungan komparatif desain lama versus desain hasil redesain DFMA:

**Tabel 1. Data Baseline Desain Lama**

| Parameter | Nilai |
|---|---|
| Jumlah total bagian ($N_t$) | 8 komponen |
| Jumlah bagian minimum teoritis ($N_m$) | 5 komponen |
| Waktu perakitan rata-rata ($T_{old}$) | 45,0 menit/unit |
| Tingkat reject | 9,2% |
| Biaya material per unit | Rp 62.500 |
| Biaya fabrikasi per unit | Rp 48.000 |
| Biaya perakitan per unit | Rp 39.500 |
| **Total biaya produksi ($C_{old}$)** | **Rp 150.000/unit** |

**Langkah 1: Perhitungan Indeks DFA Baseline**

$$\eta_{DFA}^{old} = \frac{N_m}{N_t} \times 100\% = \frac{5}{8} \times 100\% = 62{,}5\%$$

Efisiensi rendah karena tiga bagian redundan (cincin pengunci ganda, bracket pegangan terpisah, dan tutup sekunder) yang sebenarnya dapat dieliminasi atau diintegrasikan.

**Langkah 2: Desain Ulang (Redesign DFMA)**

Desainer mengintegrasikan pegangan ke badan utama (*single-piece* melalui stamping), menghilangkan cincin pengunci kedua dengan menerapkan *snap-fit mechanism*, dan mengganti tutup ulir dengan tutup *push-on* polimer food-grade.

| Parameter | Nilai Desain Ulang |
|---|---|
| Jumlah total bagian ($N_t'$) | 5 komponen |
| Jumlah bagian minimum teoritis ($N_m$) | 5 komponen |
| Waktu perakitan rata-rata ($T_{new}$) | 22,0 menit/unit |
| Tingkat reject | 2,8% |
| Biaya material per unit | Rp 47.000 |
| Biaya fabrikasi per unit | Rp 31.500 |
| Biaya perakitan per unit | Rp 16.500 |.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
