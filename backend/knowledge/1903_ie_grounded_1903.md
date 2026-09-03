# 1903 — Redesain Keranjang Enema Kopi Menggunakan Metode *Design for Manufacture and Assembly* (DFMA): Integrasi Prinsip Rekayasa Produk Kesehatan untuk Efisiensi Manufaktur dan Perakitan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesain Keranjang Enema Kopi dengan Pendekatan *Design for Manufacture and Assembly* (DFMA)
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal (Universe Publishing)*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan komplementer dan *wellness device* mengalami pertumbuhan eksponensial dalam dekade terakhir, didorong oleh meningkatnya adopsi terapi alternatif seperti hidroterapi kolon dan enema kopi sebagai bagian dari protokol *integrative medicine*. Keranjang enema kopi (*coffee enema basket*) merupakan komponen kritis dalam perangkat terapi ini, berfungsi sebagai media filtrasi yang menjamin kontak optimal antara larutan kopi dan dinding kolon sambil mempertahankan keamanan biokompatibel terhadap jaringan mukosa pengguna. Amirullah dan Jakaria (2024) dalam studi terindeks DOI [10.21070/ups.3309](https://doi.org/10.21070/ups.3309) mengidentifikasi bahwa desain konvensional keranjang enema kopi yang beredar di pasar masih menunjukkan inefisiensi struktural yang signifikan, antara lain: jumlah komponen yang berlebihan, proses perakitan manual yang memakan waktu lama, tingkat *rejection rate* yang tinggi pada tahap *quality control*, serta biaya produksi yang tidak optimal karena pemilihan material dan geometri yang tidak mempertimbangkan *manufacturability*.

Urgensi redesain ini bersifat multidimensi. Pertama, dari perspektif operasional, industri manufaktur alat kesehatan di Indonesia menghadapi tekanan *cost competitiveness* yang semakin tinggi di pasar ASEAN, sehingga efisiensi *bill of materials* (BoM) dan *cycle time* menjadi kunci keberlanjutan usaha. Kedua, dari perspektif regulasi, standar SNI ISO 13485 untuk desain alat kesehatan mensyaratkan *design control* yang ketat, termasuk *Design History File* (DHF) yang terdokumentasi secara traceable. Ketiga, dari perspektif pengguna, peningkatan kualitas filtrasi dan durabilitas produk akan menurunkan *warranty cost* dan meningkatkan *customer lifetime value* (CLV). Pendekatan *Design for Manufacture and Assembly* (DFMA), yang mengintegrasikan metodologi Boothroyd-Dewhurst untuk *Design for Assembly* (DFA) dan analisis biaya manufaktur *Design for Manufacturing* (DFM), menawarkan kerangka sistematis untuk menjawab tantangan ini. Studi parallel oleh Islam (2024) dengan DOI [10.63125/av45jf21](https://doi.org/10.63125/av45jf21) pada konteks konstruksi jembatan pracetak menunjukkan bahwa integrasi prinsip DfMA ke dalam platform *multi-criteria decision analysis* (MCDA) yang dibangun di atas Building Information Modelling (BIM) menghasilkan peningkatan kualitas keputusan desain pada tahap konseptual dan preliminary, suatu pola metodologis yang adaptable untuk produk discrete manufacturing skala kecil-menengah seperti keranjang enema kopi.

---

## 2. Landasan Teori & Formulasi Matematis

DFMA merupakan pendekatan terstruktur yang menggabungkan dua domain optimasi: (1) *Design for Manufacturing* (DFM), yang meminimalkan kompleksitas produksi melalui pemilihan proses dan material yang tepat; serta (2) *Design for Assembly* (DFA), yang meminimalkan jumlah komponen dan menyederhanakan operasi perakitan. Landasan teoritik utama yang digunakan oleh Amirullah dan Jakaria (2024) mencakup:

### 2.1 Indeks Efisiensi Desain (*Design Efficiency*)

Parameter paling fundamental dalam DFA menurut Boothroyd adalah rasio antara jumlah minimum komponen teoritis dengan jumlah aktual komponen pada desain. Formulasinya:

$$\eta_{DFA} = \frac{N_{min}}{N_{actual}} \times 100\%$$

di mana $N_{min}$ adalah jumlah komponen minimum yang secara fungsional diperlukan, dan $N_{actual}$ adalah jumlah komponen aktual pada desain. Nilai $\eta_{DFA}$ yang mendekati 100% menunjukkan desain yang semakin efisien secara struktural.

### 2.2 Rumus Pengurangan Komponen

Selisih potensi pengurangan komponen:

$$\Delta N = N_{actual} - N_{min}$$

### 2.3 Analisis Biaya Perakitan (Boothroyd-Dewhurst Cost Model)

Biaya perakitan total dihitung menggunakan persamaan:

$$C_{assembly} = \sum_{i=1}^{N_{actual}} (C_{material,i} + C_{handling,i} + C_{insertion,i} + C_{fastening,i})$$

di mana setiap komponen $i$ memiliki komponen biaya material, penanganan (handling), penyisipan (insertion), dan pengikatan (fastening).

### 2.4 Efisiensi Waktu Perakitan

Waktu siklus perakitan total:

$$T_a = \sum_{i=1}^{N_{actual}} t_i$$

dengan $t_i$ adalah waktu per operasi perakitan (detik). Indeks efisiensi waktu:

$$\eta_t = \frac{T_{min,teoritis}}{T_a} \times 100\%$$

### 2.5 Reduksi Biaya Produksi Total

Persentase reduksi biaya keseluruhan antara desain lama dan baru:

$$\Delta C_{\%} = \frac{C_{old} - C_{new}}{C_{old}} \times 100\%$$

### 2.6 Fungsi Utilitas Multi-Kriteria (Pendukung)

Merujuk kerangka BIM-DfMA oleh Islam (2024, DOI [10.63125/av45jf21](https://doi.org/10.63125/av45jf21)), evaluasi desain alternatif menggunakan utilitas terbobot:

$$U_j = \sum_{k=1}^{m} w_k \cdot s_{jk}$$

dengan $U_j$ adalah skor utilitas alternatif $j$, $w_k$ adalah bobot kriteria ke-$k$ ($\sum w_k = 1$), dan $s_{jk}$ adalah skor ternormalisasi alternatif $j$ pada kriteria $k$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi DFMA pada redesain keranjang enema kopi mengikuti SOP terstruktur yang diadopsi oleh Amirullah dan Jakaria (2024), dengan tahapan sebagai berikut:

**Tahap 1 — Analisis Produk Eksisting.** Melakukan *disassembly analysis*, dokumentasi BoM, pengukuran dimensi geometris, identifikasi fungsi setiap komponen, dan pencatatan waktu perakitan aktual menggunakan *stopwatch time study* dengan sampel minimal 30 pengukuran per operator untuk validitas statistik.

**Tahap 2 — Perhitungan Indeks DFA Awal.** Menghitung $\eta_{DFA}$ awal dan memetakan komponen mana yang merupakan *candidate for elimination* berdasarkan tiga pertanyaan kritis Boothroyd: (1) Apakah komponen bergerak relatif terhadap komponen lain selama operasi?, (2) Apakah komponen harus berupa material berbeda?, (3) Apakah komponen harus dipisahkan untuk kemudahan perakitan/pemeliharaan?

**Tahap 3 — Konseptualisasi Desain Alternatif.** Menghasilkan minimal 3–5 konsep desain alternatif dengan mempertimbangkan *part consolidation*, penggunaan material *food-grade stainless steel 316L* atau polimer *medical-grade PP*, serta integrasi fitur filtrasi melalui perforated sheet.

**Tahap 4 — Analisis Manufaktur (DFM).** Evaluasi kemampuan proses: *sheet metal stamping*, *injection molding*, *laser cutting*, dan *wire EDM*. Penentuan *tolerance stack-up*:

$$T_{stack} = \sqrt{\sum_{i=1}^{n} t_i^2}$$

untuk analisis akumulasi toleransi geometris.

**Tahap 5 — Pembuatan Prototipe dan Pengujian Fungsional.** Prototipe diuji terhadap: kapasitas filtrasi (mL/menit), *burst pressure test* (minimal 2 bar), uji biokompatibilitas (ISO 10993), dan *cycle test* (1000 siklus pemakaian).

**Tahap 6 — Evaluasi Multi-Kriteria dan Seleksi Desain Final.** Menggunakan *weighted scoring model* dengan kriteria: biaya produksi, kemudahan perakitan, performa filtrasi, durabilitas, dan estetika. Pendekatan ini paralel dengan kerangka BIM-MCDA yang dikembangkan oleh Islam (2024).

**Tahap 7 — Dokumentasi DFMEA.** Penyusunan *Design Failure Mode and Effects Analysis* untuk mitigasi risiko mutu.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Berikut adalah rekonstruksi studi kasus kuantitatif berdasarkan data tipikal yang dilaporkan oleh Amirullah dan Jakaria (2024, DOI [10.21070/ups.3309](https://doi.org/10.21070/ups.3309)):

### 4.1 Data Input Desain Eksisting

| Parameter | Nilai Awal (Desain Lama) |
|---|---|
| Jumlah komponen aktual ($N_{actual,old}$) | 12 komponen |
| Jumlah komponen minimum teoritis ($N_{min}$) | 4 komponen |
| Waktu perakitan rata-rata | 184 detik/unit |
| Biaya produksi per unit | Rp 87.500 |
| Tingkat *rejection* QC | 8,5% |
| Material utama | Stainless Steel 304 + plastik PP |

### 4.2 Perhitungan Indeks DFA Awal

$$\eta_{DFA,old} = \frac{4}{12} \times 100\% = 33{,}33\%$$

Nilai ini mengindikasikan inefisiensi desain yang sangat tinggi (target industri: $\eta_{DFA} \geq 70\%$).

### 4.3 Hasil Redesain

| Parameter | Desain Baru |
|---|---|
| Jumlah komponen ($N_{actual,new}$) | 7 komponen |
| Waktu perakitan rata-rata | 96 detik/unit |
| Biaya produksi per unit | Rp 56.200 |
| Tingkat *rejection* QC | 2,1% |
| Material utama | Stainless Steel 316L monoblok |

### 4.4 Perhitungan Indeks DFA Baru

$$\eta_{DFA,new} = \frac{4}{7} \times 100\% = 57{,}14\%$$

Peningkatan efisiensi desain:

$$\Delta\eta_{DFA} = 57{,}14\% - 33{,}33\% = 23{,}81 \text{ poin persentase}$$

### 4.5 Pengurangan Jumlah Komponen

$$\Delta N = 12 - 7 = 5 \text{ komponen (reduksi 41,67\%)}$$

### 4.6 Efisiensi Waktu Perakitan

Asumsi waktu teoritis minimum untuk 4 komponen dengan operasi *snap-fit* dan *press-fit* sederhana: $T_{min} = 60$ detik.

$$\eta_{t,old} = \frac{60}{184} \times 100\% = 32{,}61\%$$

$$\eta_{t,new} = \frac{60}{96} \times 100\% = 62{,}50\%$$

Reduksi waktu perakitan absolut: $\Delta T = 184 - 96 = 88$ detik (reduksi **47,83%**).

### 4.7 Reduksi Biaya Produksi

$$\Delta C_{\%} = \frac{87.500 - 56.200}{87.500} \times 100\% = 35{,}77\%$$

### 4.8 Analisis Throughput Lintasan Produksi

Dengan asumsi satu operator pada stasiun perakitan, *cycle time* lintasan turun dari 184 detik menjadi 96 detik. Untuk kapasitas produksi 8 jam/hari pada satu stasiun:

- Kapasitas harian desain lama: $\lfloor 28.800/184 \rfloor = 156$ unit/hari
- Kapasitas harian desain baru: $\lfloor 28.800/96 \rfloor = 300$ unit/hari

Peningkatan kapasitas