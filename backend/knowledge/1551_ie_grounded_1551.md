# 1551 — Redesain Produk Alat Kesehatan dengan Pendekatan Design for Manufacture and Assembly (DFMA): Studi Kasus Redesain Coffee Enema Basket

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan (*medical devices*) merupakan salah satu sektor manufaktur dengan tingkat regulasi paling ketat di dunia, namun sekaligus menjadi ladang subur bagi aplikasi metodologi *Design for Manufacture and Assembly* (DFMA). Produk-produk alat kesehatan—mulai dari instrumen bedah sederhana hingga perangkat diagnostik kompleks—memerlukan keseimbangan presisi antara fungsionalitas klinis, sterilitas, ergonomis pengguna, dan efisiensi biaya produksi massal. Amirullah dan Jakaria (2024) dalam tulisannya di jurnal *Peer-Reviewed Journal* dengan DOI [10.21070/ups.3309](https://doi.org/10.21070/ups.3309) menyoroti kasus spesifik pada **coffee enema basket**, yaitu sebuah komponen alat kesehatan yang berfungsi sebagai wadah penampung bubuk kopi dalam prosedur enema terapeutik. Produk ini pada dasarnya merupakan *wire mesh basket* yang harus memenuhi empat kriteria sekaligus: (1) permeabilitas fluida yang konsisten untuk proses difusi kafein dan senyawa aktif, (2) inertness kimiawi terhadap lingkungan asam-basa saluran cerna, (3) kemampuan sterilisasi autoklaf pada suhu 121°C, dan (4) kemampuan manufaktur massal dengan tingkat rejeksi minimal.

Urgensi redesain muncul karena desain orisinal produk tersebut memiliki beberapa *pain points* yang secara langsung mempengaruhi *cost of goods sold* (COGS) dan *time-to-market*. Pertama, desain awal menggunakan 8 komponen *bracket*, 12 pengencang (*fasteners*), dan 4 *supporting ribs* yang tersebar, sehingga total *part count* mencapai 24 item. Kedua, proses perakitan memerlukan 18 tahapan手工 (*manual handling steps*) yang meningkatkan risiko kontaminasi dan *human error* pada lini produksi alat kesehatan berstandar ISO 13485. Ketiga, material stainless steel 304 yang digunakan memiliki *buy-to-fly ratio* yang tidak efisien karena banyak material terbuang dalam proses *stamping* dan *bending*. Amirullah dan Jakaria (2024) mencatat bahwa tanpa redesain DFMA, *labor cost* per unit dapat melonjak hingga 35% dari total biaya produksi, menurunkan margin keuntungan UMKM manufaktur alat kesehatan lokal.

Konteks industri yang lebih luas diperkuat oleh temuan Islam (2024) dengan DOI [10.63125/av45jf21](https://doi.org/10.63125/av45jf21) yang menekankan bahwa paradigma DFMA modern tidak lagi berdiri sendiri, melainkan harus diintegrasikan dengan platform digital seperti *Building Information Modelling* (BIM) untuk evaluasi multi-kriteria. Islam (2024) menunjukkan bahwa pada industri jembatan prefabrikasi, keputusan desain yang hanya didasarkan pada *cost and structural adequacy* saja terbukti menghasilkan *buildability problems* ketika desain sudah "beku" di tahap *shop-drawing production*. Pelajaran ini sangat relevan untuk redesain coffee enema basket: keputusan material, geometri, dan konfigurasi *part* haruslah memperhitungkan kemampuan manufaktur (seperti ketersediaan *sheet metal bending*, toleransi *laser cutting*, dan kapasitas *spot welding*), kemampuan perakitan (seperti aksesibilitas obeng, orientasi *snap-fit*), kemampuan logistik (seperti dimensi *packaging* dan efisiensi palletisasi), serta kemampuan ereksi/pemasangan di sisi pengguna (seperti *ease of cleaning* dan kompatibilitas dengan protokol sterilisasi rumah sakit).

Dengan kompleksitas tersebut, modul ini disusun untuk memberikan kerangka berpikir teknik industri yang sistematis—mulai dari formulasi matematis indeks DFMA, prosedur SOP redesain, hingga aplikasi lintas sektor manufaktur.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Prinsip Inti DFMA (Boothroyd-Dewhurst Framework)

DFMA merupakan gabungan dua metodologi desain produk yang dikembangkan oleh Geoffrey Boothroyd dan Peter Dewhurst pada tahun 1980-an: **Design for Manufacture (DFM)** dan **Design for Assembly (DFA)**. Amirullah dan Jakaria (2024) mengadopsi kerangka Boothroyd-Dewhurst yang telah terstandarisasi secara internasional, dengan beberapa formula kunci berikut.

**Indeks Efisiensi Perakitan (Design for Assembly Index)**

Indeks DFA mengukur seberapa efisien suatu desain produk dapat dirakit, dengan formulasi:

$$\eta_{DFA} = \frac{N_{min} \cdot t_{min}}{N_{aktual} \cdot t_{aktual}} \times 100\%$$

Di mana:
- $\eta_{DFA}$ = indeks efisiensi desain untuk perakitan (dalam persen)
- $N_{min}$ = jumlah minimum teoritis komponen yang diperlukan untuk memenuhi fungsi desain
- $t_{min}$ = waktu minimum teoritis untuk merakit satu unit (detik)
- $N_{aktual}$ = jumlah komponen aktual dalam desain
- $t_{aktual}$ = waktu aktual perakitan satu unit (detik)

Nilai $\eta_{DFA}$ yang mendekati 100% menunjukkan desain yang sangat efisien, sedangkan nilai di bawah 30% mengindikasikan kebutuhan redesain substansial.

**Waktu Perakitan Minimum Teoritis**

Untuk menghitung $t_{min}$, digunakan persamaan waktu penanganan (*handling time*) berdasarkan klasifikasi komponen menurut Boothroyd:

$$t_{min} = \sum_{i=1}^{N_{min}} \left( t_{h,i} + t_{i,i} + t_{f,i} \right)$$

Di mana untuk setiap komponen ke-$i$:
- $t_{h,i}$ = waktu *handling* (menjepit, memutar, memposisikan) ≈ 1.5–2.0 detik
- $t_{i,i}$ = waktu *insertion* (pemasukan) ≈ 1.5–3.0 detik  
- $t_{f,i}$ = waktu *fastening* (pengencangan) tergantung metode (snap-fit ≈ 0 detik, sekrup ≈ 5 detik)

### 2.2 Formulasi DFM: Biaya Manufaktur dan Material Utilization

Untuk komponen *coffee enema basket* yang mayoritasnya berupa proses *sheet metal forming*, biaya manufaktur per unit dapat dimodelkan sebagai:

$$C_{manufaktur} = C_{material} + C_{proses} + C_{overhead} + C_{rejection}$$

Dengan sub-komponen:

$$C_{material} = \rho \cdot V \cdot p_{material} = \rho \cdot (A_{blank} \cdot t_{plate}) \cdot p_{material}$$

Di mana:
- $\rho$ = densitas material (stainless steel 304 = 7.93 g/cm³)
- $A_{blank}$ = luas *blank* material yang dibutuhkan (cm²)
- $t_{plate}$ = tebal pelat (cm)
- $p_{material}$ = harga material per satuan massa (Rp/g)

**Material Utilization Index (MUI)** menjadi metrik kritis untuk proses *stamping* dan *laser cutting*:

$$MUI = \frac{A_{final}}{A_{blank}} \times 100\%$$

Nilai MUI yang rendah mengindikasikan *nesting* yang buruk pada lembaran material, sehingga biaya material terbuang.

### 2.3 Fungsi Multi-Kriteria dalam Evaluasi Desain

Merujuk pada kerangka Islam (2024) untuk evaluasi multi-kriteria berbasis DfMA, kita dapat mengkonstruksi fungsi utilitas desain total:

$$U_{total} = w_1 \cdot U_{cost} + w_2 \cdot U_{manufaktur} + w_3 \cdot U_{assembly} + w_4 \cdot U_{sterilisasi} + w_5 \cdot U_{ergonomi}$$

Di mana $\sum_{j=1}^{5} w_j = 1$ dan $w_j \geq 0$ adalah bobot preferensi yang ditetapkan melalui *Analytic Hierarchy Process* (AHP) atau *Delphi method*. Amirullah dan Jakaria (2024) mengusulkan bobot tipikal $w_1 = 0.30$, $w_2 = 0.25$, $w_3 = 0.20$, $w_4 = 0.15$, $w_5 = 0.10$ untuk konteks alat kesehatan sekali pakai.

### 2.4 Rumus Rejection Rate dan Pengaruh Redesain

Tingkat penolakan produk (*rejection rate*) dapat diturunkan melalui hubungan:

$$R_{after} = R_{before} \cdot (1 - \Delta_{DFMA})$$

Di mana $\Delta_{DFMA}$ adalah fraksi reduksi rejeksi akibat redesain (umumnya berkisar 0.30–0.60 pada aplikasi DFMA yang sukses).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Tahapan Sistematis DFMA menurut Amirullah dan Jakaria (2024)

Implementasi DFMA pada redesain *coffee enema basket* mengikuti *workflow* tujuh tahap yang divisualisasikan pada Diagram Alir berikut:

```
[START] → Tahap 1: Analisis Desain Awal
            ↓
        Tahap 2: Dekomposisi Fungsi (Functional Decomposition)
            ↓
        Tahap 3: Perhitungan DFA Index (η_DFA) Baseline
            ↓
        Tahap 4: Generasi Konsep Redesain (Brainstorming + TRIZ)
            ↓
        Tahap 5: Evaluasi Multi-Kriteria (AHP + Cost Analysis)
            ↓
        Tahap 6: Pembuatan Prototipe & Validasi
            ↓
        Tahap 7: Perhitungan DFA Index Redesain & Verifikasi
            ↓
        [END: Dokumentasi DFMA Report]
```

### 3.2 SOP Tahap 1–3: Analisis Baseline

**Tahap 1** — *Disassembly Analysis*: Tim engineering membongkar produk existing dan mendokumentasikan setiap *part* dengan bill of materials (BOM), material specification, dan dimensi kritis.

**Tahap 2** — *Functional Decomposition*: Setiap fungsi produk diuraikan menggunakan diagram FAST (*Function Analysis System Technique*). Untuk coffee enema basket: fungsi utama = menahan bubuk kopi, fungsi pendukung = mempertahankan bentuk saat sterilisasi, fungsi pembatas = mencegah kontak langsung antara kopi dan membran mukosa.

**Tahap 3** — *Baseline DFA Calculation*: Hitung $\eta_{DFA,before}$ menggunakan rumus pada Bagian 2.

### 3.3 SOP Tahap 4–5: Generasi dan Evaluasi Konsep

**Tahap 4** menggunakan pendekatan kreatif berupa:
- *Part consolidation*: Menggabungkan multi-part menjadi single-part melalui teknik *integral molding* atau *welding assembly*.
- *Symmetry optimization*: Mendesain ulang geometri agar memiliki simetri rotasional untuk memudahkan *feeding* pada lini otomatis.
- *Snap-fit replacement*: Mengganti *fasteners* mekanis dengan *snap-fit* atau *press-fit* yang tidak memerlukan alat.

**Tahap 5** melakukan scoring dengan AHP, dengan matriks perbandingan berpasangan untuk menentukan bobot kriteria dan menghitung skor total $U_{total}$ pada setiap alternatif desain.

### 3.4 SOP Tahap 6–7: Validasi dan Verifikasi

Prototipe dibuat menggunakan *rapid prototyping* (3D printing SLA) untuk verifikasi geometris, dilanjutkan dengan *pilot production* sebanyak 50 unit untuk validasi proses manufaktur aktual. Tahap 7 menutup loop dengan menghitung ulang $\eta_{DFA,after}$ dan *savings* yang terverifikasi secara empiris.

### 3.5 Standar dan Regulasi Terkait

Implementasi DFMA pada alat kesehatan harus tetap memenuhi:
- **ISO 13485:2016** — *Medical devices — Quality management systems*
- **ISO 14971:2019** — *Application of risk management to medical devices*
- **ASTM F1980** — *Standard Guide for Accelerated Aging of Sterile Barrier Systems*
- **SNI ISO 9001:2015** — Sistem manajemen mutu untuk proses manufaktur

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Data Input Desain Baseline (Sebelum Redesain)

Berdasarkan paper Amirullah dan Jakaria (2024), data desain awal coffee enema basket adalah sebagai berikut:

| Parameter | Nilai |
|---|---|
| Jumlah komponen ($N_{aktual}$) | 24 part |
| Jumlah minimal teoritis ($N_{min}$) | 6 part |
| Waktu aktual perakitan ($t_{aktual}$) | 180 detik/unit |
| Waktu minimal teoritis ($t_{min}$) | 36 detik/unit (6 part × 6 detik) |
| Material | Stainless steel 304, tebal 0.8 mm |
| Dimensi blank rata-rata | 18 cm × 12 cm |
| Harga material | Rp 0.045/g |
| Volume produksi | 10.000 unit/bulan |
| Rejection rate baseline | 8% |

### 4.2 Perhitungan DFA Index Baseline

$$\eta_{DFA,before} = \frac{6 \times 36}{24 \times 180} \times 100\%$$

$$\eta_{DFA,before} = \frac{216}{4320} \times 100\% = 5.0\%$$

**Interpretasi:** Nilai $\eta_{DFA,before} = 5.0\%$ sangat rendah dan masuk kategori *poor design* (Amirullah & Jakaria, 2024). Desain ini membuang 95%