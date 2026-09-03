# 2079 — Redesain Produk Menggunakan Metode Design for Manufacture and Assembly (DFMA): Integrasi Prinsip Rekayasa untuk Efisiensi Manufaktur dan Efektivitas Biaya

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan rumahan (*home medical device*) mengalami pertumbuhan eksponensial seiring meningkatnya kesadaran masyarakat terhadap terapi alternatif yang dapat dilakukan secara mandiri, termasuk di antaranya terapi *coffee enema* yang memerlukan perangkat berupa *basket* (keranjang penampung) sebagai komponen fungsional utama. Amirullah dan Jakaria (2024) dalam studi terindeks DOI [10.21070/ups.3309](https://doi.org/10.21070/ups.3309) menyoroti bahwa desain awal keranjang *coffee enema* yang beredar di pasaran memiliki permasalahan struktural mendasar: jumlah komponen yang terlalu banyak, proses perakitan yang rumit, serta pemilihan material dan proses manufaktur yang tidak optimal sehingga menyebabkan biaya produksi tinggi dan waktu perakitan yang lama. Permasalahan ini bukan semata isu rekayasa produk, melainkan memiliki implikasi ekonomi-manajerial yang signifikan, karena pada pasar alat kesehatan konsumen (*consumer health product*), *time-to-market*, harga pokok penjualan (HPP), dan keandalan produk menjadi pembeda kompetitif utama.

Urgensi pengaplikasian metodologi **Design for Manufacture and Assembly (DFMA)** semakin kuat ketika ditempatkan dalam konteks rantai pasok manufaktur Indonesia yang masih didominasi oleh proses fabrikasi manual, penggunaan mesin CNC tingkat pemula, serta ketergantungan pada tenaga kerja terampil untuk perakitan. Banyak produk medis sekali pakai (*single-use disposable medical device*) yang didesain tanpa mempertimbangkan kemampuan pabrik manufaktur lokal, sehingga ketika volume permintaan naik, biaya produksi tidak menurun secara proporsional terhadap skala ekonomi (*economies of scale*). Amirullah dan Jakaria (2024) berargumen bahwa redesain dengan pendekatan DFMA memungkinkan penurunan jumlah komponen, penyederhanaan proses fabrikasi, pengurangan waktu perakitan, dan pada akhirnya menghasilkan produk yang lebih layak secara ekonomis tanpa mengorbankan fungsi klinis.

Lebih jauh, sebagaimana ditegaskan oleh Islam (2024) dalam risetnya tentang integrasi DFMA pada konstruksi jembatan prefabrikasi dengan DOI [10.63125/av45jf21](https://doi.org/10.63125/av45jf21), keputusan desain konvensional yang hanya mempertimbangkan biaya material dan kecukupan struktural cenderung mengabaikan pengetahuan manufaktur, transportasi, dan perakitan pada tahap awal—di mana masalah *buildability* baru terungkap setelah desain dibekukan, cetakan dipotong, dan koreksi hanya dimungkinkan dengan biaya tambahan yang sangat mahal. Prinsip ini berlaku universal lintas industri, mulai dari jembatan prefabrikasi hingga perangkat medis sederhana. Dengan demikian, adopsi DFMA bukan hanya soal pengurangan biaya, melainkan transformasi filosofi desain dari *design-then-build* menjadi *design-with-manufacturing-in-mind*. Pada modul ini, kami membahas secara mendalam kerangka teoretis DFMA, formulasi kuantitatifnya, serta implementasi praktisnya menggunakan kasus *coffee enema basket* yang diangkat oleh Amirullah dan Jakaria (DOI: [10.21070/ups.3309](https://doi.org/10.21070/ups.3309)).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Prinsip Dasar Design for Manufacture and Assembly (DFMA)

DFMA merupakan gabungan dua pendekatan sistematis: **Design for Manufacture (DFM)** yang mengoptimalkan proses fabrikasi komponen individual, dan **Design for Assembly (DFA)** yang meminimalkan kompleksitas perakitan produk total. Metodologi yang diakui secara internasional dan banyak diadopsi dalam literatur Teknik Industri adalah **Boothroyd-Dewhurst DFA Method**, yang menggunakan dua indikator utama: *Design Efficiency* dan *Estimated Assembly Cost*.

### 2.2 Indeks Efisiensi Desain (Design Efficiency)

Indeks efisiensi desain didefinisikan sebagai rasio antara jumlah minimum teoritis komponen yang dibutuhkan untuk memenuhi fungsi produk ($N_{min}$) terhadap jumlah aktual komponen pada desain ($N_a$):

$$\eta_{desain} = \frac{N_{min}}{N_a} \times 100\%$$

Nilai $\eta_{desain}$ yang mendekati 100% menunjukkan desain yang mendekati optimal. Sebaliknya, nilai rendah mengindikasikan redundansi komponen, bagian yang dapat digabungkan (*part consolidation*), atau fitur yang tidak menambah nilai fungsional.

### 2.3 Estimasi Biaya Perakitan (Assembly Cost Estimation)

Boothroyd-Dewhurst mengembangkan formula biaya perakitan total sebagai berikut:

$$C_{assembly} = \sum_{i=1}^{N_a} \left( t_i \cdot C_{lab,i} + C_{tool,i} \right)$$

di mana:
- $t_i$ = waktu penanganan dan penyisipan komponen ke-$i$ (detik atau menit)
- $C_{lab,i}$ = tarif tenaga kerja per satuan waktu (Rp/menit atau USD/menit)
- $C_{tool,i}$ = biaya penggunaan alat/fixture untuk komponen ke-$i$

Untuk komponen yang memiliki karakteristik *symmetrical*, *self-locking*, dan *easy to insert*, koefisien waktu dapat direduksi melalui tabel referensi Boothroyd (*handling code*).

### 2.4 Biaya Manufaktur Komponen

Untuk komponen individual hasil proses fabrikasi (misalnya *injection molding*, *sheet metal forming*, atau *machining*), biaya manufaktur dihitung menggunakan:

$$C_{mfg,i} = C_{material,i} + C_{process,i} + C_{overhead,i}$$

di mana:
- $C_{material,i} = \rho_i \cdot V_i \cdot P_{material,i}$ (berat jenis × volume × harga satuan material)
- $C_{process,i}$ = biaya operasi mesin (waktu siklus × tarif mesin)
- $C_{overhead,i}$ = alokasi biaya overhead pabrik

### 2.5 Total Biaya Produk dan Cost Reduction Index

Total biaya produk:

$$C_{total} = \sum_{i=1}^{N_a} C_{mfg,i} + C_{assembly} + C_{quality,i} + C_{logistik,i}$$

Indeks pengurangan biaya antara desain lama dan desain baru:

$$\Delta C\% = \frac{C_{total,lama} - C_{total,baru}}{C_{total,lama}} \times 100\%$$

### 2.6 Indikator Kinerja Proses

Selain biaya, dua indikator kinerja krusial dalam DFMA adalah:

**a) Assembly Time Efficiency (ATE):**

$$ATE = \frac{T_{a,baru}}{T_{a,lama}} \times 100\%$$

**b) Part Count Reduction (PCR):**

$$PCR = \frac{N_{a,lama} - N_{a,baru}}{N_{a,lama}} \times 100\%$$

Ketiga formula ini ($\Delta C\%$, $ATE$, dan $PCR$) akan digunakan pada studi kasus kuantitatif di Bagian 4.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Amirullah dan Jakaria (2024) — DOI [10.21070/ups.3309](https://doi.org/10.21070/ups.3309) — mengimplementasikan DFMA melalui tahapan sistematis sebagai Standar Prosedur Operasional (SOP) untuk redesain *coffee enema basket*. Prosedur ini dapat diabstraksikan menjadi diagram alir berikut:

```
┌──────────────────────────────────────────────────────────────┐
│ TAHAP 1: ANALISIS DESAIN EKSISTING                            │
│   • Disassembly produk existing → inventarisasi N_a           │
│   • Identifikasi fungsi tiap komponen                        │
│   • Klasifikasi: keep / combine / eliminate                  │
└──────────────────────────────────────────────────────────────┘
                          ↓
┌──────────────────────────────────────────────────────────────┐
│ TAHAP 2: APLIKASI DFA (Boothroyd-Dewhurst)                    │
│   • Hitung Design Efficiency η_desain                        │
│   • Evaluasi handling code (symmetry, insertion, fastening)   │
│   • Identifikasi kandidat part consolidation                │
└──────────────────────────────────────────────────────────────┘
                          ↓
┌──────────────────────────────────────────────────────────────┐
│ TAHAP 3: APLIKASI DFM                                        │
│   • Seleksi proses manufaktur optimal per komponen            │
│   • Material selection (food-grade stainless / polymer)      │
│   • Standardisasi dimensi, toleransi, dan fastener            │
└──────────────────────────────────────────────────────────────┘
                          ↓
┌──────────────────────────────────────────────────────────────┐
│ TAHAP 4: GENERASI DESAIN USULAN                              │
│   • CAD modeling (SolidWorks / Fusion 360)                    │
│   • Simulasi FEA untuk validasi struktural                    │
│   • Prototyping cepat (3D printing / sheet metal)            │
└──────────────────────────────────────────────────────────────┘
                          ↓
┌──────────────────────────────────────────────────────────────┐
│ TAHAP 5: VALIDASI & PERHITUNGAN DFMA                         │
│   • Hitung N_a baru, T_assembly baru, biaya baru             │
│   • Bandingkan dengan baseline → ΔC%, ATE, PCR              │
│   • Keputusan: Finalize desain / Iterasi                     │
└──────────────────────────────────────────────────────────────┘
```

**Penjelasan Tahapan:**

1. **Analisis Desain Eksisting**: Produk *coffee enema basket* original dibongkar (*reverse engineering*) untuk mendapatkan *bill of materials* (BOM), lalu setiap komponen diberi label fungsi (penahan saringan, penghubung, pegangan, dll.).

2. **Aplikasi DFA**: Menggunakan matriks keputusan Boothroyd, setiap komponen dievaluasi apakah fitur *symmetrical*, apakah memerlukan *fastening* terpisah, apakah dapat digabung dengan komponen tetangga (*part integration*). Untuk *coffee enema basket*, umumnya ditemukan beberapa komponen *clip* dan *ring* yang dapat dikonsolidasikan menjadi satu fitur integral pada badan keranjang (*basket body*).

3. **Aplikasi DFM**: Pertimbangan utama adalah material yang kontak dengan larutan harus food-grade (misalnya **SS 304 stainless steel** atau **polypropylene PP** untuk versi disposable). Proses fabrikasi dipilih berdasarkan geometri: *wire forming* + *spot welding* untuk versi stainless; *injection molding* untuk versi polimer.

4. **Validasi & Perhitungan**: Perhitungan kuantitatif biaya, waktu, dan jumlah komponen dilakukan menggunakan formula pada Bagian 2 untuk membuktikan superioritas desain baru.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Data Input Desain Eksisting (Berdasarkan Domain Paper)

Kami mengadopsi parameter khas yang dilaporkan oleh Amirullah dan Jakaria (2024) — DOI [10.21070/ups.3309](https://doi.org/10.21070/ups.3309) — dengan adaptasi nilai-nilai industri yang lazim:

| Parameter | Desain Lama | Desain Baru (DFMA) |
|-----------|-------------|---------------------|
| Jumlah komponen total ($N_a$) | 14 bagian | 7 bagian |
| Material utama | SS 304 + baut M3 | SS 304 monolitik |
| Proses fabrikasi | Wire forming + 8 titik las + 4 baut | Wire forming + 2 titik las |
| Waktu assembly rata-rata | 8,5 menit/unit | 3,2 menit/unit |
| Upah operator | Rp 8.000/menit | Rp 8.000/menit |
| Tarif mesin las spot | Rp 350/las | Rp 350/las |
| Bahan baku per unit | Rp 18.500 | Rp 14.200 |
| Batch produksi | 1.000 unit/bulan | 1.000 unit/bulan |

### 4.2 Perhitungan Design Efficiency

**Desain Lama:** $N_{min}$ untuk fungsi dasar *coffee enema basket* (keranjang saringan yang dapat dipasang pada selang) secara teoritis memerlukan minimal 3 bagian: badan saringan (*basket body*), tutup/lid (opsional tergantung desain), dan pengait/coupling. Dengan konservatif, kami tetapkan $N_{min} = 4$ (termasuk fitur pegangan terintegrasi).

$$\eta_{lama} = \frac{4}{14} \times 100\% = 28{,}57\%$$

**Desain Baru:**

$$\eta_{baru} = \frac{4}{7} \times 100\% = 57{,}14\%$$

**Peningkatan efisiensi desain:**

$$\Delta\eta = 57{,}14\% - 28{,}57\% = +28{,}57 \text{ poin persentase (atau } 100\% \text{ improvement relatif)}$$

### 4.3 Perhitungan Assembly Cost

**Desain Lama:**
- $T_{assembly} = 8{,}5$ menit/unit
- $C_{assembly,lama} = 8{,}5 \times 8.000 = \text{Rp } 68.000/\text{unit}$
- Tambahan biaya pengelasan (8 titik × Rp 350) = Rp 2.800/unit
- Biaya