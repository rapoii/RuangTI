# 2287 — Redesain Keranjang Coffee Enema Menggunakan Metode Design for Manufacture and Assembly (DFMA)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesain Coffee Enema Basket Menggunakan Metode Design for Manufacture and Assembly (DFMA)
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Coffee enema therapy, sebuah prosedur hidroterapi kolon menggunakan larutan kopi organik, telah mengalami peningkatan adopsi signifikan dalam praktik wellness dan kedokteran komplementer global. Seiring meningkatnya permintaan pasar terhadap alat coffee enema berkualitas, isu desain produk menjadi faktor kritikal yang menentukan kelayakan produksi massal, keamanan pengguna, serta efisiensi biaya manufaktur. Amirullah dan Jakaria (2024) dalam tulisannya di *Peer-Reviewed Journal* dengan DOI [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309) menyoroti bahwa keranjang (*basket*) penampung bubuk kopi pada perangkat coffee enema konvensional didesain dengan jumlah komponen berlebih, sambungan yang tidak standar, serta proses perakitan yang mengandalkan operasi manual berbiaya tinggi. Kondisi ini menciptakan inefisiensi struktural yang menurunkan margin keuntungan produsen UMKM alat kesehatan di Indonesia, sekaligus meningkatkan *time-to-market* produk baru.

Urgensi redesain muncul dari tiga fenomena empiris. Pertama, hasil observasi lapangan menunjukkan bahwa desain orisinil memiliki tingkat rejeksi perakitan (*assembly rejection rate*) berkisar 12–18% akibat misalignment antara elemen saringan, ring penjepit, dan badan keranjang. Kedua, biaya produksi per unit mencapai Rp 87.500 dengan kontribusi material stainless steel 304 mencapai 42% dari total biaya, menunjukkan bahwa optimalisasi desain memiliki potensi *cost saving* substansial. Ketiga, keterlambatan penyerahan pesanan (*delivery delay*) kepada distributor internasional terjadi rata-rata 14 hari akibat proses *welding*, *bending*, dan *finishing* yang belum terstandarisasi. Ketiga fenomena ini menjadi justifikasi empiris bagi penerapan metodologi Design for Manufacture and Assembly (DFMA).

Kerangka DFMA, yang diperkenalkan oleh Boothroyd, Dewhurst, dan Knight, mengintegrasikan dua dimensi rekayasa simultan: *Design for Manufacture* (DFM) yang mengoptimalkan proses fabrikasi, dan *Design for Assembly* (DFA) yang meminimalkan kompleksitas perakitan. Pendekatan ini semakin relevan dalam konteks Industri 4.0, di mana *Building Information Modelling* (BIM) dan *digital twin* dimanfaatkan untuk melakukan simulasi *manufacturability* dan *assemblability* sebelum fabrikasi aktual dilakukan, sebagaimana diuraikan oleh Islam (2024) dalam *Journal of Sustainable Development and Policy* (DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)) untuk konteks desain jembatan prefabrikasi. Sinergi kedua pendekatan tersebut menjadi landasan strategis bagi redesain keranjang coffee enema agar memenuhi kriteria fungsional, ergonomis, ekonomis, dan regulatif (standar alat kesehatan Kelas I menurut CDAKB Kemenkes RI).

---

## 2. Landasan Teori & Formulasi Matematis

Penerapan DFMA dalam redesain keranjang coffee enema memerlukan formulasi kuantitatif yang presisi untuk mengukur tingkat perbaikan desain. Landasan teoritis utama yang digunakan oleh Amirullah dan Jakaria (2024) adalah metode Boothroyd-Dewhurst, yang dilengkapi dengan analisis multi-kriteria berdasarkan Weighting-Rating Method.

### 2.1 Efisiensi Desain Perakitan (Design Efficiency)

Tingkat efisiensi desain dihitung melalui rasio antara jumlah komponen minimum teoritis dengan jumlah komponen aktual pada desain:

$$E_d = \frac{N_{min}}{N_a} \times 100\% \tag{1}$$

di mana $E_d$ adalah efisiensi desain (%), $N_{min}$ adalah jumlah komponen minimum yang diperlukan untuk memenuhi fungsi produk, dan $N_a$ adalah jumlah komponen aktual pada desain. Nilai $E_d \geq 60\%$ mengindikasikan desain telah efisien secara struktural.

### 2.2 Indeks Pengurangan Komponen

Pengurangan jumlah komponen kuantifikasinya menggunakan indeks reduksi sebagai berikut:

$$\Delta N = N_a^{old} - N_a^{new} \tag{2}$$

$$\eta_N = \frac{\Delta N}{N_a^{old}} \times 100\% \tag{3}$$

di mana $\Delta N$ adalah selisih jumlah komponen, dan $\eta_N$ adalah persentase reduksi komponen.

### 2.3 Waktu Perakitan (Assembly Time)

Menurut Boothroyd (1994), waktu perakitan total dipengaruhi oleh waktu penanganan dan waktu penyisipan/pengencangan:

$$T_a = \sum_{i=1}^{n} \left( t_{h,i} + t_{i,i} \right) \tag{4}$$

dengan $T_a$ adalah total waktu perakitan (detik), $t_{h,i}$ adalah waktu *handling* komponen ke-$i$, dan $t_{i,i}$ adalah waktu *insertion/fastening* komponen ke-$i$.

### 2.4 Biaya Manufaktur Total

Biaya produksi per unit dihitung menggunakan formulasi:

$$C_{total} = C_{mat} + C_{fab} + C_{ass} + C_{ovh} \tag{5}$$

di mana $C_{mat}$ adalah biaya material, $C_{fab}$ adalah biaya fabrikasi, $C_{ass}$ adalah biaya perakitan, dan $C_{ovh}$ adalah biaya overhead. Reduksi biaya per unit divalidasi dengan:

$$\Delta C = \frac{C_{total}^{old} - C_{total}^{new}}{C_{total}^{old}} \times 100\% \tag{6}$$

### 2.5 Analisis Multi-Kriteria (Metode Weighted Scoring)

Mengikuti kerangka Islam (2024), evaluasi alternatif desain dilakukan dengan:

$$V_i = \sum_{j=1}^{m} w_j \cdot s_{ij} \tag{7}$$

dengan $V_i$ adalah skor total alternatif ke-$i$, $w_j$ adalah bobot kriteria ke-$j$ ($\sum w_j = 1$), dan $s_{ij}$ adalah rating alternatif ke-$i$ pada kriteria ke-$j$ (skala 1–5).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Metodologi DFMA yang diterapkan mengikuti alur rekayasa sistematis delapan tahap berikut, dengan mempertimbangkan rekomendasi kerangka multi-kriteria berbasis BIM dari Islam (2024) untuk integrasi informasi digital:

**Tahap 1 — Analisis Fungsi Produk.** Mendefinisikan *functional decomposition* keranjang coffee enema: (a) menahan bubuk kopi, (b) menyaring partikel halus, (c) memudahkan pelepasan ampas, (d) tahan korosi terhadap asam kopi.

**Tahap 2 — Inventarisasi Komponen Eksisting.** Mendokumentasikan seluruh *Bill of Material* (BoM) desain awal, termasuk dimensi, toleransi, material, dan proses fabrikasi setiap bagian. Setiap komponen di-*tag* dengan kode unik (misalnya B-01, R-02, C-03).

**Tahap 3 — Penerapan Prinsip DFA.** Menggunakan tabel keputusan Boothroyd-Dewhurst untuk menentukan apakah setiap komponen merupakan *essential part* atau *combine candidate*. Komponen dievaluasi berdasarkan: (i) pergerakan relatif selama operasi, (ii) kebutuhan material berbeda, (iii) kebutuhan pemisahan untuk perakitan/pemeliharaan.

**Tahap 4 — Penerapan Prinsip DFM.** Mengevaluasi kesesuaian proses fabrikasi: apakah komponen lebih efisien dibuat dari *sheet metal forming*, *tube bending*, atau *injection molding*? Pemilihan proses mempertimbangkan *batch size*, toleransi geometris ISO 2768, dan *tooling cost*.

**Tahap 5 — Pembuatan Konsep Desain Alternatif.** Menghasilkan minimal 3 alternatif desain dengan konfigurasi berbeda, lalu dievaluasi menggunakan Persamaan (7).

**Tahap 6 — Validasi CAD/CAE.** Alternatif terpilih dimodelkan dalam CAD 3D dan disimulasikan dengan *Finite Element Analysis* (FEA) untuk verifikasi kekuatan struktural dan *mesh quality*.

**Tahap 7 — Prototyping dan Pengujian Fungsional.** Prototip fabrikasi diuji kapasitas filtrasi, *burst strength* (target ≥ 2,5 bar), serta kompatibilitas ergonomis dengan selang enema standar (diameter 12 mm).

**Tahap 8 — Analisis Biaya dan Keputusan Final.** Perhitungan $C_{total}$ menggunakan Persamaan (5) untuk setiap alternatif, lalu dibandingkan dengan desain lama. Alternatif dengan $E_d$ tertinggi dan $\Delta C$ terbesar ditetapkan sebagai desain final.

Diagram alir (flowchart) proses ini mengikuti pola *spiral iterative*, di mana hasil evaluasi tahap 6–7 dapat menjadi umpan balik untuk revisi tahap 3–5 hingga tercapai konvergensi desain.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebagai ilustrasi kuantitatif berdasarkan parameter industri riil yang digunakan oleh Amirullah dan Jakaria (2024), berikut adalah contoh perhitungan untuk redesain keranjang coffee enema kapasitas 250 mL.

### 4.1 Data Input Desain Lama (Eksisting)

| Parameter | Nilai |
|---|---|
| Jumlah komponen aktual ($N_a^{old}$) | 12 komponen |
| Material utama | Stainless steel 304 |
| Diameter keranjang | 65 mm |
| Tinggi keranjang | 70 mm |
| Proses fabrikasi | Las TIG + pembengkokan manual |
| Waktu perakitan rata-rata | 184,5 detik/unit |
| Biaya material | Rp 36.750/unit |
| Biaya fabrikasi | Rp 24.500/unit |
| Biaya perakitan | Rp 14.000/unit |
| Overhead (15%) | Rp 11.288/unit |
| Total biaya ($C_{total}^{old}$) | Rp 86.538/unit |

### 4.2 Hasil Redesain dengan DFMA

Setelah penerapan delapan tahap metodologi pada Bagian 3, desain baru dihasilkan dengan karakteristik:

| Parameter | Nilai |
|---|---|
| Jumlah komponen aktual ($N_a^{new}$) | 7 komponen |
| Material utama | Stainless steel 316L mesh + body PP medical grade |
| Diameter keranjang | 65 mm |
| Tinggi keranjang | 68 mm |
| Proses fabrikasi | Injeksi molding + mesh forming otomatis |
| Waktu perakitan rata-rata | 91,2 detik/unit |
| Biaya material | Rp 22.400/unit |
| Biaya fabrikasi | Rp 13.750/unit |
| Biaya perakitan | Rp 7.200/unit |
| Overhead (15%) | Rp 6.503/unit |
| Total biaya ($C_{total}^{new}$) | Rp 49.853/unit |

### 4.3 Perhitungan Indikator Kinerja

**a) Efisiensi Desain (Persamaan 1):**

$$E_d^{old} = \frac{4}{12} \times 100\% = 33{,}33\%$$
$$E_d^{new} = \frac{4}{7} \times 100\% = 57{,}14\%$$

Peningkatan efisiensi desain sebesar $\Delta E_d = 57{,}14 - 33{,}33 = 23{,}81$ poin persentase.

**b) Indeks Pengurangan Kom