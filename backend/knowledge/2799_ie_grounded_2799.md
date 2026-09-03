# 2799 — Redesain Produk Kesehatan Berbasis Metode Design for Manufacture and Assembly (DFMA): Integrasi Reduksi Komponen, Efisiensi Biaya, dan Optimalisasi Proses Perakitan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesain Coffee Enema Basket Menggunakan Metode DFMA
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal — Universitas Proliferation Studies*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri alat kesehatan rumahan (home medical device) di Indonesia dan Asia Tenggara menunjukkan pertumbuhan eksponensial pasca-pandemi, terutama pada segmen produk terapi komplementer seperti coffee enema kit. Produk ini menggabungkan fungsi medis (irigasi kolon) dengan komponen manufaktur presisi (basket saringan kopi yang berfungsi sebagai filter). Amirullah & Jakaria (2024) dalam publikasi mereka di *Peer-Reviewed Journal* (DOI: [10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) menyoroti bahwa desain awal coffee enema basket yang beredar di pasaran memiliki缺陷 struktural berupa jumlah komponen berlebihan, proses perakitan yang membutuhkan banyak operasi manual, serta biaya produksi yang tidak efisien. Masalah ini muncul ketika desainer produk mengabaikan prinsip *Design for Manufacture and Assembly* (DFMA) pada tahap konseptual, sehingga kesulitan manufaktur baru teridentifikasi setelah desain dibekukan (*design freeze*).

Urgensi operasional dari studi ini terletak pada tiga hal fundamental. Pertama, dari perspektif ekonomi, setiap komponen tambahan pada rakitan meningkatkan *bill of materials* (BOM), waktu perakitan, dan peluang cacat produksi (*defect rate*). Kedua, dari perspektif ergonomis-klinis, coffee enema basket harus mudah disterilkan, dibongkar-pasang, dan diganti filter-nya — karakteristik yang hanya dapat dicapai melalui desain modular dengan jumlah bagian (*part count*) yang minimal. Ketiga, dari perspektif rantai pasok, desain yang tidak mempertimbangkan kemampuan manufaktur lokal (*local manufacturing capability*) akan memicu ketergantungan pada komponen impor dan memperpanjang *lead time*.

Studi pendukung Islam (2024) yang dipublikasikan di *Journal of Sustainable Development and Policy* (DOI: [10.63125/av45jf21](https://doi.org/10.63125/av45jf21)) memperkuat relevansi topik ini dengan mengusulkan kerangka evaluasi multi-kriteria berbasis BIM yang mengintegrasikan prinsip DfMA pada tahap konseptual dan preliminary. Meskipun konteks aplikasinya berbeda — konstruksi jembatan pracetak — *insight* metodologisnya sangat applicable: keputusan desain harus mempertimbangkan aspek *manufacturability*, *transportability*, *liftability*, dan *erectability* sebelum desain dibekukan. Kedua paper ini bersama-sama meneguhkan satu argumen bahwa DFMA bukan sekadar metode optimasi biaya, melainkan kerangka keputusan rekayasa holistik yang mencegah *late-stage design changes* yang mahal dan berisiko terhadap keselamatan pengguna produk medis.

---

## 2. Landasan Teori & Formulasi Matematis

Metodologi DFMA yang digunakan dalam studi Amirullah & Jakaria (2024) mengacu pada **Boothroyd-Dewhurst DFMA Framework**, yang terdiri dari dua pilar utama: *Design for Manufacture* (DFM) dan *Design for Assembly* (DFA). Berikut formulasi matematis yang menjadi tulang punggung analisis:

### 2.1 Indeks Efisiensi Desain (Design Efficiency Index)

$$DE_i = \left(\frac{N_{min}}{N_{aktual}}\right) \times 100\%$$

di mana:
- $DE_i$ = Indeks efisiensi desain (%)
- $N_{min}$ = Jumlah minimum komponen secara teoritis untuk fungsi yang dibutuhkan
- $N_{aktual}$ = Jumlah komponen aktual pada desain

Nilai $DE_i \geq 60\%$ menunjukkan desain yang efisien, sedangkan $DE_i < 40\%$ mengindikasikan peluang redesain yang substansial.

### 2.2 Waktu Perakitan Total (Total Assembly Time)

Waktu perakitan dihitung menggunakan rumus Boothroyd-Dewhurst:

$$T_{total} = \sum_{i=1}^{n} (t_{i} + h_{i})$$

di mana:
- $T_{total}$ = Waktu perakitan total (detik atau menit)
- $t_i$ = Waktu *insertion* (penyisipan/pemasangan) komponen ke-$i$
- $h_i$ = Waktu *handling* (penanganan/pengorientasian) komponen ke-$i$
- $n$ = Jumlah komponen

### 2.3 Biaya Perakitan (Assembly Cost)

$$C_{assembly} = T_{total} \times C_{labor} + \sum_{j=1}^{m} C_{part,j}$$

di mana:
- $C_{labor}$ = Tarif tenaga kerja per satuan waktu (Rp/menit atau $/menit)
- $C_{part,j}$ = Biaya komponen ke-$j$
- $m$ = Jumlah jenis komponen berbeda

### 2.4 DfMA Score untuk Multi-Criteria Evaluation (kerangka Islam, 2024)

Untuk evaluasi multi-kriteria terstruktur:

$$S_{DfMA} = \sum_{k=1}^{K} w_k \cdot r_k$$

dengan kendala $\sum_{k=1}^{K} w_k = 1$, di mana $w_k$ adalah bobot kriteria ke-$k$ dan $r_k$ adalah skor ternormalisasi (0–1) untuk kriteria ke-$k$. Kriteria yang lazim mencakup: manufacturability, transportability, assembly efficiency, cost effectiveness, dan sustainability.

### 2.5 Reduksi Komponen sebagai Fungsi Rekayasa

Setiap komponen yang dieliminasi memberikan *savings* kumulatif:

$$\Delta C = \Delta T \cdot C_{labor} + \sum \Delta C_{part} + \Delta C_{tooling}$$

di mana $\Delta T$, $\Delta C_{part}$, dan $\Delta C_{tooling}$ berturut-turut adalah penghematan waktu, biaya komponen, dan biaya perkakas (*tooling*).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Amirullah & Jakaria (2024) menyusun SOP redesain DFMA dalam **tujuh tahap sistematis** yang diadaptasi dari Boothroyd-Dewhurst:

**Tahap 1 — Identifikasi Fungsi Primer.** Definisikan fungsi wajib produk, yaitu: (a) menyaring partikel kopi, (b) menahan tekanan air pada rentang 0,5–1,5 bar, (c) tahan suhu hingga 80°C, dan (d) kompatibel dengan selang enema standar (diameter dalam 8–10 mm).

**Tahap 2 — Inventarisasi Komponen Existing.** Buat *exploded view* dan BOM lengkap desain awal. Catat material, dimensi, toleransi, dan proses fabrikasi setiap komponen.

**Tahap 3 — Analisis DFA dengan Kuesioner Boothroyd.** Evaluasi setiap komponen berdasarkan tiga pertanyaan kritis: (i) Apakah komponen bergerak relatif terhadap komponen lain saat operasi? (ii) Apakah komponen harus terpisah dari material lain karena kebutuhan *maintenance*? (iii) Apakah komponen harus terpisah untuk memudahkan *manufacturing*? Jika ketiga jawaban "tidak", komponen tersebut layak dikonsolidasi (*combine*).

**Tahap 4 — Analisis DFM.** Tentukan proses manufaktur yang paling ekonomis untuk setiap fitur (injection molding, stamping, machining, additive manufacturing). Pilih proses dengan *cycle time* terendah yang memenuhi toleransi fungsional.

**Tahap 5 — Sintesis Desain Alternatif.** Buat minimal tiga konsep redesain dengan variasi integrasi komponen.

**Tahap 6 — Evaluasi Kuantitatif.** Hitung $T_{total}$, $C_{assembly}$, dan $DE_i$ untuk setiap alternatif.

**Tahap 7 — Seleksi & Validasi.** Pilih alternatif dengan skor DFMA tertinggi, lalu buat prototipe dan lakukan uji fungsional (uji kebocoran, uji tekanan hidrostatis, uji siklus termal).

Diagram alir logikanya adalah sebagai berikut:

```
[Identifikasi Fungsi] → [BOM Existing] → [Analisis DFA] 
    → [Analisis DFM] → [Sintesis Alternatif] → [Evaluasi Kuantitatif] 
    → [Seleksi] → [Prototipe] → [Validasi] → [Produksi Massal]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Berdasarkan data tipikal yang dilaporkan dalam literatur DFMA untuk produk alat kesehatan sederhana, serta referensi implisit pada studi Amirullah & Jakaria (2024), berikut simulasi kuantitatif redesain coffee enema basket.

### 4.1 Parameter Input Desain Eksisting

| Parameter | Nilai |
|-----------|-------|
| Jumlah komponen eksisting ($N_{aktual}$) | 12 bagian |
| Rata-rata insertion time ($\bar{t}_i$) | 8,5 detik |
| Rata-rata handling time ($\bar{h}_i$) | 4,2 detik |
| Upah operator ($C_{labor}$) | Rp 850/menit |
| Biaya komponen rata-rata | Rp 3.200/unit |

### 4.2 Perhitungan Waktu Perakitan Eksisting

$$T_{total,existing} = 12 \times (8{,}5 + 4{,}2) = 12 \times 12{,}7 = 152{,}4 \text{ detik}$$

Konversi ke menit: $T_{total,existing} \approx 2{,}54$ menit/unit.

### 4.3 Perhitungan Biaya Perakitan Eksisting

$$C_{assembly,existing} = 2{,}54 \times 850 + 12 \times 3{,}200 = 2.159 + 38.400 = Rp\ 40.559$$

### 4.4 Hasil Redesain DFMA

Setelah melalui Tahap 3–5, empat komponen dikonsolidasi menjadi satu rumah filter (*housing*) yang di-injection molding sebagai single part, dua ring pengunci diintegrasikan sebagai *snap-fit*, dan satu tutup dilipat (*hinged lid*). Hasilnya:

| Parameter | Eksisting | Redesain | Δ (Reduksi) |
|-----------|-----------|----------|-------------|
| $N$ | 12 | 6 | −50% |
| $\bar{t}_i$ (detik) | 8,5 | 6,8 | −20% |
| $\bar{h}_i$ (detik) | 4,2 | 3,0 | −28,6% |

### 4.5 Perhitungan Waktu Perakitan Redesain

$$T_{total,redesign} = 6 \times (6{,}8 + 3{,}0) = 6 \times 9{,}8 = 58{,}8 \text{ detik} \approx 0{,}98 \text{ menit/unit}$$

Efisiensi waktu: $\eta_T = \frac{152{,}4 - 58{,}8}{152{,}4} \times 100\% = 61{,}4\%$

### 4.6 Perhitungan Indeks Efisiensi Desain

Asumsikan fungsi minimal produk hanya memerlukan **4 komponen fundamental** (housing, filter mesh, inlet fitting, snap-cap):

$$DE_{existing} = \frac{4}{12} \times 100\% = 33{,}3\%$$
$$DE_{redesign} = \frac{4}{6} \times 100\% = 66{,}7\%$$

Redesain mencapai kategori efisien ($DE \geq 60\%$), memenuhi standar Boothroyd.

### 4.7 Perhitungan Penghematan Biaya pada Volume Produksi Tahunan

Untuk volume produksi $Q = 50.000$ unit/tahun:

$$\Delta C_{assembly} = (2{,}54 - 0{,}98) \times 850 \times 50.000 = Rp\ 66.300.000$$

Penghematan komponen: $6 \times 3.200 \times 50.000 = Rp\ 960.000.000$ (BOM turun 50%