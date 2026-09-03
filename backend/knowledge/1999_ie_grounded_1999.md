# 1999 — Redesain Produk dengan Pendekatan Design for Manufacture and Assembly (DFMA) untuk Efisiensi Manufaktur dan Konstruksi Prefabrikasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesain Coffee Enema Basket Menggunakan Metode Design for Manufacture and Assembly (DFMA) dan Integrasi Multi-Kriteria pada Konstruksi Jembatan Prefabrikasi
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method*. Peer-Reviewed Journal. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *A BIM-Based Multi-Criteria Bridge Design Evaluation Framework Integrating Design for Manufacture and Assembly (DfMA) for Prefabricated Bridge Construction*. Journal of Sustainable Development and Policy. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur kontemporer menghadapi tekanan ganda berupa eskalasi harga bahan baku, fragmentasi rantai pasok global, dan tuntutan konsumen terhadap produk yang semakin kompleks namun tetap ekonomis. Amirullah dan Jakaria (2024) dalam risetnya yang dipublikasikan pada jurnal *Peer-Reviewed Journal* (DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) menekankan bahwa banyak produk konsumsi dan peralatan medis skala kecil—termasuk *coffee enema basket*—ser kali dirancang tanpa pertimbangan sistematis terhadap kemampuan manufaktur dan kemudahan perakitan, sehingga menghasilkan produk dengan jumlah komponen berlebih, waktu perakitan panjang, dan biaya produksi yang tidak kompetitif.

*Coffee enema basket* sendiri merupakan komponen fungsional dalam terapi *colon hydrotherapy* dan produk kesehatan rumahan. Produk ini menuntut karakteristik unik: tahan korosi terhadap cairan, mampu melewatkan uap/air secara terkontrol, aman untuk kontak tidak langsung dengan pengguna, dan mudah dibersihkan. Tanpa rekayasa desain yang matang, pabrikan cenderung menggunakan metode pengelasan manual, jumlah baut berlebihan, dan geometri yang sulit di-*stamping* atau *injection molding*, sehingga biaya produksi melonjak 20–40% di atas angka yang seharusnya.

Urgensi ekonomis menjadi semakin penting ketika produk ini harus bersaing dengan alternatif impor dari pasar daring. Dalam konteks rekayasa, pendekatan **Design for Manufacture and Assembly (DFMA)** muncul sebagai jawaban metodologis. DFMA, yang awalnya dipopulerkan oleh Boothroyd dan Dewhurst pada 1980-an dan terus berkembang hingga era Industry 4.0, mengintegrasikan dua pilar utama: **Design for Manufacture (DFM)**—optimasi proses fabrikasi—dan **Design for Assembly (DFA)**—minimasi kompleksitas perakitan. Sebagaimana dikonfirmasi oleh Islam (2024) dalam DOI [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21), pendekatan DFMA kini bahkan telah diadopsi pada proyek infrastruktur berskala besar seperti konstruksi jembatan prefabrikasi, di mana keputusan desain yang diambil sebelum fase *shop-drawing* menentukan成败 seluruh proyek—*buildability problems* yang baru teridentifikasi di lapangan ketika mould sudah dipotong dan desain sudah *frozen* akan berakibat pada rework cost yang katastrofal.

Integrasi DFMA dengan Building Information Modeling (BIM) yang diajukan Islam (2024) menunjukkan bahwa metodologi ini bersifat *sector-agnostic*: dapat diterapkan mulai dari produk konsumen rumah tangga hingga elemen struktural jembatan *box girder* berbobot ratusan ton. Dengan kata lain, modul ini membahas DFMA tidak hanya sebagai alat redesain *coffee enema basket* (studi primer), tetapi juga sebagai kerangka rekayasa umum yang portabel ke lintas industri.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka DFMA yang digunakan oleh Amirullah dan Jakaria (2024) mengikuti metodologi Boothroyd-Dewhurst yang telah dimodifikasi untuk konteks produk konsumen ringan. Berikut formulasi-formulasi fundamental yang menjadi tulang punggung analisis.

### 2.1 Indeks Efisiensi Desain (Design Efficiency Index)

Indeks efisiensi desain衡量 tingkat optimalisasi jumlah komponen terhadap jumlah minimum teoritis:

$$\eta_{\text{desain}} = \frac{N_{\min}}{N_{\text{aktual}}} \times 100\% \tag{1}$$

dengan $N_{\min}$ = jumlah minimum teoritis komponen (komponen yang tidak dapat dihilangkan karena menjalankan fungsi esensial), dan $N_{\text{aktual}}$ = jumlah komponen aktual pada desain awal. Indeks $\eta_{\text{desain}} \geq 60\%$ mengindikasikan desain sudah cukup efisien menurut ambang tipikal Boothroyd.

### 2.2 Efisiensi Perakitan (Assembly Efficiency)

Mengukur proporsi waktu yang benar-benar bernilai tambah dalam siklus perakitan:

$$\eta_{\text{assembly}} = \frac{N_{\min} \cdot t_{\min}}{N_{\text{aktual}} \cdot t_{\text{aktual}}} \times 100\% \tag{2}$$

dengan $t_{\min}$ = waktu perakitan teoritis minimum per komponen (detik), dan $t_{\text{aktual}}$ = waktu aktual pada lini produksi. Untuk komponen fasteners seperti baut, tabel Boothroyd memberikan $t_{\min} \approx 1{,}95$ detik.

### 2.3 Fungsi Biaya Total Manufaktur

Total biaya produk direpresentasikan sebagai:

$$C_{\text{total}} = C_{\text{bahan}} + C_{\text{fabrikasi}} + C_{\text{asembling}} + C_{\text{overhead}} \tag{3}$$

dengan sub-komponen biaya fabrikasi yang dapat diuraikan lebih lanjut menurut operasi mesin:

$$C_{\text{fabrikasi}} = \sum_{i=1}^{n} \left( t_{m,i} \cdot R_m + \frac{C_{\text{tool},i}}{L_{\text{tool},i}} \right) \tag{4}$$

di mana $t_{m,i}$ = waktu pemesinan operasi ke-$i$ (menit), $R_m$ = tarif mesin (Rp/menit), $C_{\text{tool},i}$ = biaya pahat, dan $L_{\text{tool},i}$ = umur pahat (menit).

### 2.4 Biaya Perakitan Kumulatif

$$C_{\text{assembly}} = \sum_{j=1}^{N_{\text{aktual}}} \left( t_{a,j} \cdot R_l + C_{\text{material},j} \right) \tag{5}$$

dengan $t_{a,j}$ = waktu penanganan komponen ke-$j$, $R_l$ = tarif tenaga kerja langsung, dan $C_{\text{material},j}$ = harga material komponen.

### 2.5 Kerangka Multi-Kriteria AHP-BIM (Pendukung Islam, 2024)

Untuk aplikasi DFMA pada jembatan prefabrikasi, Islam (2024) mengusulkan penggunaan *Analytic Hierarchy Process* (AHP) dalam lingkungan BIM:

$$V_i = \sum_{j=1}^{k} w_j \cdot s_{ij} \tag{6}$$

dengan bobot kriteria $w_j$ diturunkan dari matriks perbandingan berpasangan AHP yang memenuhi *Consistency Ratio*:

$$\text{CR} = \frac{\text{CI}}{\text{RI}} < 0{,}10 \tag{7}$$

di mana $\text{CI} = (\lambda_{\max} - n)/(n-1)$, dan $\text{RI}$ adalah *Random Index* untuk matriks berukuran $n \times n$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Amirullah dan Jakaria (2024) menyusun SOP DFMA dalam delapan tahap sistematis yang dapat diadaptasi ke berbagai kelas produk:

```
┌──────────────────────────────────────────────────────────┐
│ Tahap 1: Analisis Produk Awal                            │
│   → Spesifikasi fungsi, gambar kerja, BOM existing      │
├──────────────────────────────────────────────────────────┤
│ Tahap 2: Function Analysis (FAST Diagram)                │
│   → Identifikasi fungsi dasar vs fungsi berlebih         │
├──────────────────────────────────────────────────────────┤
│ Tahap 3: Perhitungan N_min & η_desain                    │
│   → Tentukan komponen yang wajib dipertahankan           │
├──────────────────────────────────────────────────────────┤
│ Tahap 4: Generasi Konsep Alternatif                      │
│   → Redesain geometri, integrasi komponen, modularisasi  │
├──────────────────────────────────────────────────────────┤
│ Tahap 5: Evaluasi Proses Manufaktur                      │
│   → Pemilihan stamping, injection molding, atau          │
│     sheet metal forming                                  │
├──────────────────────────────────────────────────────────┤
│ Tahap 6: Perhitungan Biaya & Waktu (DfM + DFA)          │
│   → Komparasi desain lama vs baru                       │
├──────────────────────────────────────────────────────────┤
│ Tahap 7: Prototyping & Validasi                          │
│   → Uji fungsi, kekuatan, dan ketahanan korosi          │
├──────────────────────────────────────────────────────────┤
│ Tahap 8: Finalisasi Desain untuk Produksi Massal         │
│   → Lock-down desain + dokumentasi teknis                │
└──────────────────────────────────────────────────────────┘
```

Untuk integrasi DFMA-BIM sesuai Islam (2024), tahap 5 dan 6 diperluas dengan penambahan modul analisis berbasis BIM yang mencakup: simulasi *clash detection*, estimasi bobot angkat (*lifting analysis*), perencanaan logistik modular, dan validasi *erection sequence*. Platform BIM seperti Revit, Tekla Structures, atau Bentley OpenBuildings digunakan sebagai *single source of truth* yang memungkinkan evaluasi multi-disiplin terjadi secara simultan.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Berdasarkan tipikal redesain yang dilakukan Amirullah dan Jakaria (2024), berikut adalah rekonstruksi kuantitatif pada *coffee enema basket* dengan parameter industri yang realistis di konteks manufaktur UMKM Indonesia.

### 4.1 Data Input Desain Awal

| Parameter | Simbol | Nilai Awal |
|---|---|---|
| Jumlah komponen | $N_{\text{aktual}}$ | 8 komponen |
| Material | – | Stainless steel 304 |
| Proses dominan | – | Las manual + baut |
| Waktu rakitan aktual | $t_{\text{aktual}}$ | 180 detik/unit |
| Tarif tenaga kerja | $R_l$ | Rp 5.000/menit |
| Harga bahan per unit | $C_{\text{bahan}}$ | Rp 18.500 |
| Produksi bulanan | $Q$ | 1.000 unit |

Analisis fungsi menghasilkan **3 komponen esensial** ($N_{\min}=3$): (i) keranjang utama, (ii) tutup dengan lubang uap, dan (iii) pegangan/handle.

### 4.2 Perhitungan Indeks Efisiensi Desain Awal

$$\eta_{\text{desain,awal}} = \frac{3}{8} \times 100\% = 37{,}5\%$$

Nilai ini berada di bawah ambang $60\%$, mengonfirmasi perlunya redesain substansial.

### 4.3 Perhitungan Efisiensi Perakitan Awal

Dengan $t_{\min} =$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
