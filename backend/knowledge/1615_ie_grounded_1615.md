# 1615 — Redesain Keranjang Coffee Enema dengan Pendekatan Design for Manufacture and Assembly (DFMA) untuk Optimasi Manufaktur dan Biaya

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesain Produk menggunakan Metode Design for Manufacture and Assembly (DFMA) pada Komponen Keranjang Alat Kesehatan (Coffee Enema Basket)
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method*. Peer-Reviewed Journal (UPS). DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *A BIM-Based Multi-Criteria Bridge Design Evaluation Framework Integrating Design for Manufacture and Assembly (DfMA) for Prefabricated Bridge Construction*. Journal of Sustainable Development and Policy. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan (medical devices) merupakan salah satu sektor manufaktur dengan tingkat regulasi dan presisi tertinggi di dunia. Setiap komponen yang dirancang tidak hanya harus memenuhi fungsi klinis dan ergonomis, tetapi juga harus efisien secara ekonomis untuk diproduksi secara massal. Amirullah dan Jakaria (2024) dalam artikel yang dipublikasikan pada DOI [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309) menyoroti permasalahan pada produk **Coffee Enema Basket** — sebuah komponen kritis pada perangkat terapi kolon (colonic hydrotherapy) yang berfungsi menampung bubuk kopi dengan permeabilitas tertentu selama prosedur klinis. Produk ini pada desain awalnya memiliki karakteristik: jumlah part yang relatif banyak, proses perakitan manual yang panjang, serta biaya produksi yang belum optimal.

Urgensi redesain ini lahir dari tiga tekanan operasional yang simultan. Pertama, dari sisi **biaya produksi**, desain awal masih menggunakan pengelasan titik (spot welding) pada beberapa sambungan kawat stainless steel 304 yang meningkatkan biaya fabrikasi dan memperpanjang lead time. Kedua, dari sisi **kualitas dan keamanan pasien**, standar医疗器械 (medical device) seperti ISO 13485 dan ISO 14971 menghendaki desain yang reproducible, mudah disterilkan, dan minim risiko sharp edge. Ketiga, dari sisi **scalability**, permintaan pasar domestik dan ekspor yang meningkat menuntut proses perakitan yang dapat dilakukan oleh operator semi-skilled dengan tingkat reject rendah.

Pendekatan **Design for Manufacture and Assembly (DFMA)** — yang diperkenalkan secara sistematis oleh Geoffrey Boothroyd dan Peter Dewhurst sejak 1980-an — menawarkan kerangka metodologis yang relevan untuk menjawab tantangan ini. DFMA menggabungkan dua subdomain utama, yaitu **Design for Manufacture (DFM)** yang fokus pada optimasi proses fabrikasi individual part, serta **Design for Assembly (DFA)** yang fokus pada reduksi jumlah part dan penyederhanaan proses perakitan. Konteks penerapan DFMA di luar manufaktur alat kesehatan juga telah didemonstrasikan oleh Islam (2024) pada DOI [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21) untuk desain jembatan pracetak (prefabricated bridge), yang membuktikan bahwa integrasi DFMA dengan Building Information Modelling (BIM) mampu mengidentifikasi konflik buildability sejak tahap konsep dan preliminary design, sehingga keputusan desain dapat diambil sebelum mould dipotong dan gambar dikunci.

Studi Amirullah dan Jakaria (2024) menunjukkan bahwa penerapan DFMA pada Coffee Enema Basket mampu menurunkan jumlah part secara signifikan, mempersingkat waktu perakitan, dan menekan biaya produksi per unit. Modul 1615 ini akan membedah metodologi tersebut secara kuantitatif dan prosedural untuk memberikan bekal aplikatif bagi praktisi teknik industri.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Prinsip Dasar DFMA

DFMA merupakan integrasi dua metodologi kuantitatif yang dikembangkan oleh Boothroyd, Dewhurst, dan Knight (2011). Subdomain pertama adalah **DFM** yang mengkuantifikasi tingkat kesulitan fabrikasi setiap part berdasarkan parameter geometris, material, dan proses. Subdomain kedua adalah **DFA** yang mengkuantifikasi efisiensi perakitan berdasarkan jumlah part, jenis sambungan, dan orientasi insertion.

### 2.2 Formulasi Assembly Efficiency (AE)

Indeks efisiensi perakitan dalam kerangka Boothroyd DFA dirumuskan sebagai berikut:

$$AE = \frac{N_{min} \cdot t_{min}}{N_{actual} \cdot t_{actual}} \times 100\%$$

Di mana:

- $N_{min}$ = jumlah part minimum teoritis yang diperlukan untuk memenuhi fungsi desain (ideal)
- $t_{min}$ = waktu perakitan minimum teoritis per part (detik)
- $N_{actual}$ = jumlah part aktual pada desain awal atau redesain
- $t_{actual}$ = waktu perakitan aktual per part (detik)

Nilai $AE$ yang mendekati **100%** mengindikasikan desain sudah sangat efisien, sementara nilai di bawah **40%** menandakan masih banyak part yang dapat dieliminasi atau disederhanakan.

### 2.3 Formulasi DFA Index dan Boothyroyd's Part Reduction

Untuk menguji kelayakan penggabungan part (part consolidation), Boothroyd mengusulkan **DFA Index** berikut:

$$DFA_{index} = \frac{N_{ms}}{N_t} \times 100\%$$

Di mana $N_{ms}$ adalah jumlah minimum part yang lolos uji "kebutuhan pergerakan selama operasi" dan "tidak memerlukan pemisahan untuk material/proses yang berbeda", sedangkan $N_t$ adalah total part aktual.

### 2.4 Formulasi Biaya Total Manufaktur dan Perakitan

Total biaya produksi per unit produk dapat dimodelkan sebagai:

$$C_{total} = C_{material} + C_{fabrication} + C_{assembly} + C_{overhead}$$

Dengan biaya fabrikasi setiap part:

$$C_{fab,i} = C_{machine,i} \cdot t_{machine,i} + C_{tool,i} + C_{labor,i}$$

Dan biaya perakitan:

$$C_{assembly} = \sum_{i=1}^{N} \left( t_{insert,i} \cdot R_{labor} \right)$$

Di mana $R_{labor}$ adalah tarif tenaga kerja langsung (Rp/detik), dan $t_{insert,i}$ adalah waktu insertion part ke-$i$.

### 2.5 Kriteria Evaluasi DFM (DFM Score)

Setiap part dievaluasi menggunakan sistem skoring multi-kriteria:

$$DFM_{score} = \sum_{j=1}^{k} w_j \cdot s_{j}$$

Di mana $w_j$ adalah bobot kriteria ke-$j$ ($\sum w_j = 1$), dan $s_j$ adalah skor 0–10 untuk kriteria tersebut (misalnya: kemudahan stamping, kemampuan welding, aksesibilitas tool, dan stabilitas dimensi).

### 2.6 Hubungan dengan Standar ISO

Penerapan DFMA juga harus selaras dengan standar **ISO 13485:2016** (Quality Management System for Medical Devices) yang mensyaratkan design control, serta **ISO 14971:2019** untuk risk management pada medical device. Setiap pengurangan part harus disertai dokumentasi verifikasi bahwa fungsi klinis dan keamanan pasien tetap terpenuhi.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Amirullah dan Jakaria (2024) menerapkan DFMA mengikuti alur prosedural 7 tahapan sistematis berikut, yang merupakan adaptasi dari prosedur Boothroyd untuk konteks medical device sederhana:

### Tahap 1: Identifikasi Fungsi Produk dan Kebutuhan Klinis
- Tentukan fungsi primer: menahan dan memfilter bubuk kopi selama prosedur enema
- Tentukan fungsi sekunder: memudahkan sterilisasi autoclave (suhu 121°C)
- Tetapkan *design constraints*: food-grade stainless steel 304, wire mesh porosity 60-80 mesh count, kapasitas tampung 500 mL bubuk kopi

### Tahap 2: Konseptualisasi Desain Awal (Baseline)
- Buat gambar teknis desain awal Coffee Enema Basket
- Dokumentasikan Bill of Material (BOM) lengkap
- Catat jumlah part: $N_{actual,baseline}$ (hasil paper: **11 part** termasuk komponen ring, kawat mesh, pengait, dan bracket)

### Tahap 3: Analisis DFA — Evaluasi Setiap Part
- Klasifikasikan setiap part berdasarkan tiga pertanyaan Boothroyd:
  1. Apakah part bergerak relatif terhadap part lain selama operasi? (motion criterion)
  2. Apakah part memerlukan material/proses yang berbeda? (material/process criterion)
  3. Apakah part harus dipisah untuk servis/assembly? (service criterion)
- Jika semua jawaban "tidak", part **dapat dikonsolidasikan** ke part lain

### Tahap 4: Analisis DFM — Evaluasi Proses Fabrikasi
- Pilih proses fabrikasi optimal untuk setiap part yang tersisa:
  - Wire mesh: **stamping + resistance welding**
  - Frame ring: **sheet metal forming**
  - Handle: **tube bending + welding**
- Hitung DFM score untuk masing-masing opsi proses

### Tahap 5: Redesain (Part Consolidation)
- Gabungkan fungsi ring dan mesh dalam satu unit press-formed
- Eliminasi bracket yang redundant
- Hasil redesain: $N_{actual,redesign}$ = **6 part** (penurunan 45.5%)

### Tahap 6: Simulasi dan Validasi
- Buat prototipe fisik
- Uji fungsi klinis (uji permeabilitas bubuk kopi)
- Uji sterilisasi autoclave (5 siklus, suhu 121°C, tekanan 15 psi, durasi 15 menit)
- Validasi kekuatan tarik sambungan wire (min. 80 N per titik welding)

### Tahap 7: Analisis Biaya dan Penulisan Laporan
- Hitung ulang biaya produksi per unit
- Bandingkan dengan desain baseline
- Dokumentasikan dalam **Design History File (DHF)** sesuai FDA 21 CFR 820.30

Diagram alir proses metodologi ini secara visual dapat direpresentasikan sebagai berikut:

```
[Definisi Fungsi] → [Desain Awal/Baseline] → [BOM & Assembly Chart]
        ↓
[Analisis DFA: 3 Kriteria Boothroyd] → [Identifikasi Part yang Dapat Digabung]
        ↓
[Analisis DFM: Seleksi Proses Fabrikasi] → [DFM Scoring]
        ↓
[Redesain: Part Consolidation] → [Prototipe & Validasi ISO 13485]
        ↓
[Analisis Biaya: C_total Awal vs Redesain] → [Desain Final + DHF]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input (Berdasarkan Temuan Paper)

| Parameter | Desain Baseline | Desain Redesain (DFMA) |
|---|---|---|
| Jumlah part ($N$) | 11 part | 6 part |
| Waktu assembly rata-rata ($t_a$) | 95 detik/unit | 50 detik/unit |
| Jumlah operator | 2 orang | 1 orang |
| Tarif labor langsung ($R_{labor}$) | Rp 250/detik | Rp 250/detik |
| Biaya material/unit | Rp 28.500 | Rp 21.200 |
| Biaya fabrikasi/unit | Rp 18.200 | Rp 9.800 |
| Batch produksi | 500 unit/bulan | 500 unit/bulan |

### 4.2 Perhitungan Assembly Efficiency (AE)

**Desain Baseline:**
$$AE_{baseline} = \frac{N_{min} \cdot t_{min}}{N_{actual} \cdot t_{actual}} \times 100\%$$

Asumsi studi ini mengikuti referensi paper Amirullah dan Jakaria (2024) yang menetapkan $N_{min} = 6$ dan $t_{min} = 25$ detik sebagai benchmark teoritis:

$$AE_{baseline} = \frac{6 \times 25}{11 \times 95} \times 100\% = \frac{150}{1045} \times 100\% \approx 14.35\%$$

**Desain Redesain (DFMA):**
$$AE_{redesign} = \frac{6 \times 25}{6 \times 50} \times 100\% = \frac{150}{300} \times 100\% = 50.00\%$$

**Peningkatan efisiensi:**
$$\Delta AE = \frac{50.00 - 14.35}{14.35} \times 100\% \approx 248.4\%$$

Ini menunjukkan redesain DFMA meningkatkan efisiensi perakitan lebih dari 3 kali lipat.

### 4.3 Perhitungan DFA Index

$$DFA_{index,baseline} = \frac{N_{ms}}{N_t} = \frac{6}{11} \times 100\% \approx 54.55\%$$

$$DFA_{index,redesign} = \frac{6}{6} \
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
