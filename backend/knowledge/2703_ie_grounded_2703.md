# 2703 — Redesain Produk Manufaktur Menggunakan Metode Design for Manufacture and Assembly (DFMA): Optimasi Keranjang Kopi Enema sebagai Studi Kasus Rekayasa Produk

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesain Coffee Enema Basket Menggunakan Metode Design for Manufacture and Assembly (DFMA)
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method*. Peer-Reviewed Journal. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *A BIM-Based Multi-Criteria Bridge Design Evaluation Framework Integrating Design for Manufacture and Assembly (DfMA) for Prefabricated Bridge Construction*. Journal of Sustainable Development and Policy. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur kontemporer menghadapi tekanan ganda berupa kompetisi global, kenaikan harga bahan baku, serta tuntutan konsumen akan produk berkualitas tinggi dengan harga terjangkau. Dalam konteks ini, keputusan desain produk yang diambil pada fase awal siklus pengembangan produk (*product development cycle*) menentukan sekitar 70–80% dari total biaya produksi yang terkunci (*locked-in costs*) sebelum produk fisik pertama diproduksi. Amirullah dan Jakaria (2024) dalam publikasi mereka di *Peer-Reviewed Journal* dengan DOI [10.21070/ups.3309](https://doi.org/10.21070/ups.3309) menyoroti bahwa banyak produk manufaktur kecil-menengah—termasuk perangkat kesehatan alternatif seperti *coffee enema basket*—dirancang tanpa mempertimbangkan prinsip *Design for Manufacture and Assembly* (DFMA), sehingga menghasilkan produk dengan jumlah komponen berlebih, proses perakitan yang kompleks, dan biaya produksi yang tidak optimal.

Kopi enema (*coffee enema basket*) merupakan perangkat medis alternatif yang digunakan dalam praktik hidroterapi kolon, di mana biji kopi diseduh dan ekstraknya dialirkan melalui tabung fleksibel ke dalam rektum pasien. Produk ini pada umumnya terdiri atas keranjang penampung (*basket*), tutup, pegas, tabung inlet, tabung outlet, konektor selang, dan klip pengunci. Desain konvensional yang beredar di pasaran—menurut analisis Amirullah dan Jakaria (DOI: 10.21070/ups.3309)—mengandung rata-rata 9–11 komponen diskrit dengan proses perakitan yang membutuhkan 14–18 langkah, tingkat kesulitan penyambungan yang tinggi, serta risiko kontaminasi silang pada sambungan ulir. Hasil observasi lapangan menunjukkan bahwa *failure rate* produk selama periode garansi mencapai 8,4%, dengan 62% kegagalan terkait kebocoran pada antarmuka (*interface leakage*) antar-komponen.

Urgensi ekonomis dan teknis dari redesain ini semakin jelas ketika dihitung total biaya kepemilikan (*total cost of ownership*) produk. Dengan asumsi volume produksi tahunan 50.000 unit, harga jual ritel Rp 185.000 per unit, dan biaya produksi eksisting Rp 87.500 per unit, margin keuntungan hanya 52,7%. Namun, biaya garansi, retur, dan售后 (*after-sales service*) menambah 11,3% dari biaya produksi, sehingga *effective margin* turun menjadi 41,4%. Penerapan metodologi DFMA—sebagaimana dibuktikan oleh Islam (2024) dalam studi jembatan pracetak di *Journal of Sustainable Development and Policy* dengan DOI [10.63125/av45jf21](https://doi.org/10.63125/av45jf21)—mampu menurunkan biaya manufaktur rata-rata 18–27% melalui konsolidasi komponen dan simplifikasi geometri pada tahap konseptual. Temuan ini mengonfirmasi bahwa DFMA bukan sekadar pendekatan teoretis, melainkan kerangka kerja rekayasa yang terukur dampaknya secara kuantitatif.

Lebih lanjut, pendekatan DFMA yang diperkenalkan oleh Geoffrey Boothroyd dan Peter Dewhurst pada dekade 1980-an telah berevolusi menjadi standar industri yang diadopsi oleh ISO/TR 22100-4:2018 (*Safety of machinery — Relationship with ISO 12100 — Part 4: Guidance to designers*). Dalam konteks *coffee enema basket*, redesain berbasis DFMA bertujuan untuk (i) meminimalkan jumlah komponen diskrit; (ii) menyederhanakan operasi perakitan; (iii) memfasilitasi proses manufaktur dengan toleransi yang realistis; dan (iv) mempertahankan fungsi produk sesuai standar keamanan perangkat medis non-invasif. Keempat tujuan ini menjadi pilar analitis dalam makalah Amirullah dan Jakaria (2024) yang akan diuraikan secara kuantitatif pada bagian-bagian selanjutnya.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Prinsip Design for Assembly (DFA) — Metode Boothroyd-Dewhurst

Metode Boothroyd-Dewhurst memberikan ukuran efisiensi desain melalui *Design for Assembly Index* yang didefinisikan sebagai rasio jumlah minimum komponen teoritis terhadap jumlah komponen aktual dalam desain. Formulasi matematisnya adalah sebagai berikut:

$$DFA_{index} = \frac{N_{min}}{N_{actual}} \times 100\%$$

di mana:
- $N_{min}$ = jumlah minimum komponen yang secara teoritis diperlukan untuk memenuhi fungsi desain
- $N_{actual}$ = jumlah komponen aktual pada desain yang dievaluasi

Untuk setiap komponen dievaluasi menggunakan *criteria chart* dengan tiga pertanyaan biner:
1. Apakah komponen bergerak relatif terhadap komponen lain selama operasi? (Jika ya, harus dipisah)
2. Apakah komponen harus terpisah dari material lain untuk kebutuhan pemeliharaan (*maintenance/disassembly*)? (Jika ya, harus dipisah)
3. Apakah komponen harus terpisah karena perbedaan material atau proses manufaktur? (Jika ya, harus dipisah)

Jika seluruh jawaban "tidak", maka komponen tersebut merupakan kandidat kuat untuk dikonsolidasikan.

### 2.2 Perhitungan Waktu Perakitan

Waktu perakitan total dihitung menggunakan persamaan Boothroyd-Dewhurst yang telah direvisi (Boothroyd, 1994):

$$T_{assembly} = \sum_{i=1}^{N} \left( t_{i,manipulate} + t_{i,insert} + t_{i,secure} \right)$$

di mana:
- $t_{i,manipulate}$ = waktu untuk memposisikan komponen ke-$i$ (tipikal 1,5–3,0 detik)
- $t_{i,insert}$ = waktu penyisipan (0,5–2,5 detik)
- $t_{i,secure}$ = waktu penguncian/pengamanan (1,5–4,5 detik)

Untuk operasi dengan kode assembly dua digit $AA$ yang merepresentasikan tingkat kesulitan (00 = trivial, 99 = sangat sulit), digunakan tabel waktu referensi Boothroyd.

### 2.3 Biaya Manufaktur Komponen

Biaya produksi per unit dihitung menggunakan model *Activity-Based Costing* yang dimodifikasi:

$$C_{unit} = C_{material} + C_{manufacturing} + C_{assembly} + C_{overhead}$$

dengan sub-formulasi:

$$C_{material} = \sum_{j=1}^{M} \rho_j \cdot V_j \cdot (1 + w_{scrap})$$

$$C_{manufacturing} = \sum_{j=1}^{M} \left( \dot{C}_{machine,j} \cdot T_{cycle,j} + \dot{C}_{labor,j} \cdot T_{cycle,j} \right)$$

$$C_{assembly} = \dot{C}_{labor,assembly} \cdot T_{assembly}$$

di mana:
- $\rho_j$ = densitas material komponen ke-$j$ (kg/mm³)
- $V_j$ = volume komponen ke-$j$ (mm³)
- $w_{scrap}$ = tingkat waste material (fraksi, tipikal 0,05–0,15)
- $\dot{C}_{machine,j}$ = tarif mesin per detik (Rp/s)
- $T_{cycle,j}$ = waktu siklus proses ke-$j$ (s)
- $\dot{C}_{labor,j}$ = tarif tenaga kerja langsung per detik (Rp/s)

### 2.4 Indeks Kemudahan Manufaktur (MfgI)

Untuk mengevaluasi kemampuan fabrikasi setiap komponen digunakan *Manufacturing Index*:

$$MfgI = \frac{T_{ideal}}{T_{actual}} \times 100\%$$

di mana $T_{ideal}$ adalah waktu siklus referensi untuk komponen dengan kompleksitas setara yang diproduksi pada proses optimal, dan $T_{actual}$ adalah waktu siklus aktual yang dibutuhkan.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Penerapan DFMA pada redesain *coffee enema basket* mengikuti prosedur sistematis yang terdiri atas enam tahapan utama sesuai protokol Boothroyd-Dewhurst yang diadaptasi oleh Amirullah dan Jakaria (2024):

**Tahap 1: Analisis Fungsi Produk.** Tahap ini mendekomposisi fungsi produk ke dalam *functional decomposition tree*. Untuk *coffee enema basket*, fungsi primer meliputi: (a) penahanan biji kopi, (b) ekstraksi senyawa aktif, (c) penyaringan partikel padat, (d) penyaluran fluida ke selang, dan (e) penutupan kedap udara.

**Tahap 2: Generasi Konsep Awal.** Berdasarkan fungsionalitas di atas, dikembangkan tiga konsep alternatif yang dievaluasi menggunakan *Pugh Matrix* dengan kriteria: biaya produksi, kemudahan perakitan, performa filtrasi, estetika, dan kepatuhan terhadap standar food-grade.

**Tahap 3: Analisis DFA pada Konsep Terpilih.** Setiap komponen dievaluasi menggunakan *criteria chart* Boothroyd-Dewhurst untuk menentukan kebutuhan pemisahan komponen secara obyektif.

**Tahap 4: Analisis DFM pada Komponen Kritis.** Komponen yang lolos seleksi DFA dievaluasi kemampuan manufakturnya dengan mempertimbangkan proses fabrikasi alternatif (injection molding, blow molding, sheet metal forming, machining).

**Tahapan 5: Redesain Iteratif.** Konsep direvisi berdasarkan hasil analisis DFA dan DFM hingga tercapai target efisiensi yang diinginkan.

**Tahap 6: Validasi Prototipe dan Pengujian.** Prototipe dicetak menggunakan printer 3D SLA (resin) untuk validasi geometris, dilanjutkan dengan produksi *low-volume* menggunakan injection molding.

Standar Prosedur Operasional (SOP) yang diacu mengikuti ISO 12100:2010 untuk aspek keamanan, ISO 13485 untuk manajemen kualitas perangkat medis, dan ASTM F3061 untuk standar food-grade polymer. Diagram alir proses DFMA secara keseluruhan ditampilkan sebagai berikut:

```
[Mulai]
   ↓
[Identifikasi Kebutuhan Pelanggan]
   ↓
[Functional Decomposition]
   ↓
[Konsep Desain Awal (2-3 alternatif)]
   ↓
[Pugh Matrix Selection]
   ↓
[Analisis DFA — Boothroyd Chart]
   ↓
[Identifikasi Komponen Kandidat Konsolidasi]
   ↓
[Analisis DFM — Pemilihan Proses Fabrikasi]
   ↓
[Redesain Geometri]
   ↓
[Analisis Biaya Unit]
   ↓
[Validasi DFA Index Target ≥ 80%]
   ↓
[Prototipe & Pengujian]
   ↓
[Desain Final & Dokumentasi]
   ↓
[Selesai]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Data Input Produk Eksisting

Berdasarkan pengukuran pada produk eksisting yang dilaporkan oleh Amirullah dan Jakaria (DOI: 10.21070/ups.3309), diperoleh data parameter sebagai berikut:

| No | Komponen | Material | Volume (cm³) | Proses | Kode Assembly | $t_{manip}$}$ (s) | $t_{insert}$ (s) | $t_{secure}$ (s) |
|----|----------|----------|--------------|--------|---------------|-------------------|------------------|------------------|
| 1 | Basket body | PP Food-grade | 18,5 | Inj. mold | 25 | 2,5 | 1,8 | 0 |
| 2 | Top cap | PP + SS insert | 8,2 | Inj. mold | 35 | 2,8 | 2,2 | 3,8 |
| 3 | Filter screen | SS 304 | 1,5 | Stamping | 20 | 2,0 | 1,5 | 0 |
| 4 | Spring (304 SS) | SS 304 | 0,8 | Coiling | 30 | 2,5 | 2,0 | 0 |
| 5 | Inlet tube | Silicone | 4,0 | Extrusion | 15 | 1,8 | 1,2 | 0 |
| 6 | Outlet tube | Silicone | 3,5 | Extrusion | 15 | 1,8 | 1,2 | 0 |
| 7 | Tube connector | PP | 2,0 | Inj. mold | 35 | 2,2 | 1,8 | 2,5 |
| 8 | Hose clamp | SS 304 | 0,6 | Stamping | 40 | 2,5 | 2,2 | 4,2 |
| 9 | O-ring 1 | NBR | 0,3 | Molding | 22 | 1,5 | 1,0 | 0 |
| 10 | O-ring 2 | NBR | 0,3 | Molding | 22 | 1,5 | 1,0 | 0 |

Total komponen aktual: $N_{actual} = 10$

### 4.2 Perhitungan Waktu Perakitan Eksisting

$$T_{assembly,eksisting} = \sum_{i=1}^{10} \left( t_{manip,i} + t_{insert,i} + t_{secure,i} \right)$$

$$T_{assembly,eksisting} = (2,5+1,8+0) + (2,8+2,2+3,8) + (2,0+1,5+0) + (2,5+2,0+0) + (1,8+1,2+0)$$
$$+ (1,8+1,