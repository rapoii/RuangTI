# 1727 — Redesain Coffee Enema Basket dengan Metode Design for Manufacture and Assembly (DFMA): Formulasi Kuantitatif, Prosedur Rekayasa, dan Aplikasi Lintas Sektor pada Konstruksi Modular Prefabrikasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesain Coffee Enema Basket Menggunakan Metode Design for Manufacture and Assembly (DFMA)
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method*. Peer-Reviewed Journal (Universitas Muhammadiyah Surakarta). DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *A BIM-Based Multi-Criteria Bridge Design Evaluation Framework Integrating Design for Manufacture and Assembly (DfMA) for Prefabricated Bridge Construction*. Journal of Sustainable Development and Policy. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan dan wellness therapy mengalami transformasi signifikan menuju standardisasi desain yang memenuhi tuntutan keamanan klinis, efisiensi produksi, dan keterjangkauan harga. Amirullah dan Jakaria (2024) dalam publikasi di jurnal peer-review Universitas Muhammadiyah Surakarta dengan DOI [10.21070/ups.3309](https://doi.org/10.21070/ups.3309) menyoroti salah satu produk spesifik—*coffee enema basket*—sebuah komponen fungsional pada perangkat terapi kolon yang berfungsi menampung bubuk kopi selama prosedur irrigasi. Produk ini memiliki karakteristik desain yang kompleks pada versi awalnya: banyak komponen kecil, proses perakitan yang membutuhkan beberapa tahapan pengelasan dan pemasangan sekrup, serta tingkat kesulitan *handling* yang tinggi karena dimensi geometris yang tidak ergonomis.

Urgensi ekonomis dari redesain ini cukup substansial. Pada lini produksi alat kesehatan *small-to-medium enterprise* (SME) di Indonesia, *bill of materials* (BOM) yang terdiri dari 9–12 part dengan tingkat *insertion difficulty* yang tinggi menyebabkan *assembly time* membengkak 3–4 kali lipat dibandingkan produk medis standar. Kajian Amirullah & Jakaria (2024) membuktikan bahwa penerapan metodologi Design for Manufacture and Assembly (DFMA) pada coffee enema basket mampu menurunkan jumlah part secara signifikan, mempercepat *cycle time* perakitan, sekaligus mempertahankan fungsi klinis dan keamanan food-grade material. Pendekatan ini selaras dengan tren global *Design for X* (DFX) yang diadopsi oleh industri医疗器械 di bawah kerangka ISO 13485 dan FDA 21 CFR Part 820.

Konteks manufaktur alat kesehatan di Indonesia, yang didominasi oleh UMKM dengan kapasitas produksi 500–5.000 unit per bulan, memerlukan metodologi yang tidak hanya teoritis tetapi juga implementable dengan investasi tooling rendah. Inilah kekuatan DFMA—ia menjembatani kesenjangan antara desain konseptual dan realita shop-floor. Sebagaimana dikonfirmasi oleh Islam (2024, DOI [10.63125/av45jf21](https://doi.org/10.63125/av45jf21)) dalam konteks konstruksi jembatan prefabrikasi, integrasi DfMA dengan platform Building Information Modelling (BIM) menunjukkan bahwa keputusan desain yang mempertimbangkan parameter manufaktur, transportasi, pengangkatan, dan ereksi sejak fase konseptual menghasilkan *buildability* yang jauh lebih baik dan menghindari *rework* mahal di tahap shop-drawing. Paradigma yang sama persis berlaku pada skala mikro produk consumer-medical seperti coffee enema basket: keputusan desain di fase konseptual menentukan 70–80% biaya total siklus hidup produk.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Prinsip Dasar DFMA

DFMA merupakan integrasi dua pendekatan simultan: *Design for Manufacture* (DFM) yang mengoptimalkan proses fabrikasi, dan *Design for Assembly* (DFA) yang meminimalkan kompleksitas perakitan. Metodologi yang digunakan oleh Amirullah & Jakaria (2024) berakar pada kerangka Boothroyd-Dewhurst yang telah terstandardisasi secara industri sejak 1980-an.

### 2.2 Indeks Efisiensi Perakitan (Design for Assembly)

Indeks DFA dihitung menggunakan formula Boothroyd-Dewhurst sebagai berikut:

$$E_{assembly} = \frac{N_{min} \cdot t_{min}}{T_{actual}}$$

di mana:

- $N_{min}$ = jumlah part minimum teoritis yang diperlukan untuk memenuhi fungsi desain
- $t_{min}$ = waktu装配 minimum teoritis per part (detik), umumnya diasumsikan 1,5 detik untuk operasi sederhana sesuai tabel Boothroyd
- $T_{actual}$ = total waktu perakitan aktual pada desain awal (detik)

Untuk setiap part individual, *handling code* dan *insertion code* dievaluasi menggunakan matriks klasifikasi:

$$A_i = 3 \left(\frac{1}{N_{min}}\right) + \sum_{j} h_{ij} + \sum_{k} i_{ik}$$

di mana:
- $A_i$ = waktu装配 untuk part ke-$i$ (detik)
- $h_{ij}$ = *handling difficulty* untuk operasi ke-$j$
- $i_{ik}$ = *insertion difficulty* untuk operasi ke-$k$

### 2.3 Indeks Manufaktur (Design for Manufacture)

Untuk DFM, biaya produksi setiap part dihitung dengan formula:

$$C_{part} = C_{material} + C_{machining} + C_{tooling} + C_{overhead}$$

$$C_{material} = \rho \cdot V \cdot P_{material}$$

di mana $\rho$ adalah densitas material (kg/m³), $V$ adalah volume part (m³), dan $P_{material}$ adalah harga material per kg.

Total biaya produksi desain adalah:

$$C_{total} = \sum_{i=1}^{N} C_{part,i} + C_{assembly}$$

dengan $C_{assembly}$ adalah biaya装配 yang proporsional terhadap $T_{actual}$:

$$C_{assembly} = T_{actual} \cdot W \cdot R_{labor}$$

di mana $W$ adalah jumlah stasiun kerja dan $R_{labor}$ adalah tarif tenaga kerja per detik (Rp/detik).

### 2.4 Reduksi Kompleksitas dan Aturan Desain

Tiga aturan desain Boothroyd-Dewhurst yang diterapkan:

1. **Minimum part count:** $N_{actual} \geq N_{min}$, dengan idealnya $N_{actual} = N_{min}$
2. **Ease of handling:** setiap part harus mudah di-*pick*, *orient*, dan *insert*
3. **Ease of insertion:** trajectory装配 satu arah tanpa obstructed fastening

Efisiensi desain gabungan:

$$\eta_{DFMA} = \frac{C_{baseline} - C_{redesign}}{C_{baseline}} \times 100\%$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Amirullah & Jakaria (2024) menyusun SOP penerapan DFMA dalam tujuh tahap sistematis. Berikut adalah diagram alir prosedur operasional standar yang dapat diadopsi oleh industri:

**Tahap 1 — Teardown Analysis (Reverse Engineering):**
Lakukan pembongkaran produk eksisting, identifikasi setiap part, dokumentasikan fungsi, material, dan proses fabrikasi. Hasilkan *exploded view diagram* dan BOM detail.

**Tahap 2 — Function Analysis:**
Klasifikasikan setiap part ke dalam tiga kategori Boothroyd: (a) part yang melakukan fungsi utama, (b) part yang melakukan fungsi pendukung, (c) part yang hanya berfungsi sebagai fastener atau fastener-feature. Part kategori (c) menjadi kandidat eliminasi prioritas.

**Tahap 3 — Part Count Reduction:**
Gunakan formulir worksheet Boothroyd-Dewhurst untuk menghitung $A_i$ setiap part. Part dengan $A_i > 3$ detik atau yang mengalami *secondary operation* menandai inefisiensi.

**Tahap 4 — Manufacturing Process Selection:**
Untuk setiap part yang tersisa, pilih proses fabrikasi optimal. Untuk coffee enema basket, material food-grade stainless steel 304 (SS304) dengan proses *stamping*, *deep drawing*, dan *laser welding* direkomendasikan menggantikan kombinasi *casting* + *machining* + *manual welding*.

**Tahap 5 — Assembly Sequence Optimization:**
Rekonstruksi diagram alir装配 menggunakan prinsip *assembly tree minimization*:

$$T_{cycle} = \sum_{i=1}^{N} \max(t_{i}, t_{predecessor})$$

**Tahap 6 — Cost Calculation & Comparison:**
Hitung $C_{total}$ baseline dan $C_{total}$ redesain menggunakan formula pada Bagian 2.

**Tahap 7 — Validation & Iteration:**
Prototyping cepat (3D printing SLA atau SLS), pengujian fungsional (kebocoran, kapasitas tampung bubuk kopi ±100–150 gram), dan sertifikasi food-grade sesuai SNI 7334:2009 dan FDA food contact regulation.

Arsitektur teknologi pendukung mencakup CAD parametric (SolidWorks/Solid Edge), modul DFMA analyzer (SolidWorks DFMA module atau Boothroyd-Dewhurst DFMA software), dan modul simulasi装配 (DELMIA atau Tecnomatix). Untuk aplikasi lanjutan lintas sektor—seperti yang dilakukan Islam (2024) pada jembatan prefabrikasi—platform BIM (Autodesk Revit, Bentley OpenBuildings) dengan plug-in DfMA evaluation digunakan untuk mengintegrasikan parameter manufaktur dan ereksi sejak fase desain skematik.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Data Input Desain Eksisting Coffee Enema Basket

Berdasarkan tipikal produk yang dianalisis Amirullah & Jakaria (2024), parameter baseline dapat direkonstruksi sebagai berikut:

| Parameter | Nilai Baseline |
|-----------|----------------|
| Jumlah part total | $N_{actual} = 11$ part |
| Jumlah part minimum teoritis | $N_{min} = 5$ part |
| Total waktu装配 aktual | $T_{actual} = 187$ detik |
| Material utama | SS304 sheet + polypropylene |
| Kapasitas tampung bubuk | 120 gram |
| Tarif tenaga kerja | Rp 25.000/jam ≈ Rp 6,94/detik |

### 4.2 Perhitungan DFA Baseline

Menggunakan rumus Boothroyd-Dewhurst:

$$t_{min} = N_{min} \times 1,5 = 5 \times 1,5 = 7,5 \text{ detik}$$

$$E_{assembly,baseline} = \frac{N_{min} \cdot t_{min}}{T_{actual}} = \frac{5 \times 1,5}{187} = 0,0401 \text{ atau } 4,01\%$$

Efisiensi装配 baseline yang sangat rendah (4,01%) mengindikasikan peluang redesain yang sangat besar. Idealnya $E_{assembly} \geq 60\%$ untuk desain yang well-DFA-ed.

### 4.3 Perhitungan DFM Baseline

Untuk komponen body basket (part utama):
- Volume part: $V = 8,5 \times 10^{-5}$ m³
- Densitas SS304: $\rho = 8000$ kg/m³
- Massa: $m = \rho \cdot V = 8000 \times 8,5 \times 10^{-5} = 0,68$ kg
- Harga SS304: $P_{material} \approx$ Rp 45.000/kg

$$C_{material,body} = 0,68 \times 45.000 = \text{Rp } 30.600$$

Dengan machining cost Rp 12.000, tooling cost (amortisasi) Rp 3.500, dan overhead 20%:

$$C_{body} = 30.600 + 12.000 + 3.500 + 0,2 \times (30.600 + 12.000) = \text{Rp } 53.120$$

### 4.4 Biaya Assembly Baseline

$$C_{assembly,baseline} = 187 \times 1 \times 6,94 = \text{Rp } 1.298$$

### 4.5 Skenario Redesain DFMA

Setelah eliminasi 4 part fastener dan integrasi 2 part menjadi single-piece stamped component:

| Parameter | Nilai Redesain |
|-----------|----------------|
| Jumlah part total | $N_{actual,redesign} = 7$ part |
| $N_{min}$ tetap | 5 part |
| Total waktu装配 | $T_{actual,redesign} = 96$ detik |

$$E_{assembly,redesign} = \frac{5 \times 1,5}{96} = 0,0781 \text{ atau } 7,81\%$$

Peningkatan efisiensi装配 sebesar $7,81\% - 4,01\% =