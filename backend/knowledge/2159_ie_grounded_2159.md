# 2159 — Redesain Produk Manufaktur Menggunakan Design for Manufacture and Assembly (DFMA): Studi Kasus Redesain Coffee Enema Basket dan Integrasi Multi-Kriteria BIM-DfMA

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesain Produk Manufaktur dengan Pendekatan Design for Manufacture and Assembly (DFMA)
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method*. Peer-Reviewed Journal. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *A BIM-Based Multi-Criteria Bridge Design Evaluation Framework Integrating Design for Manufacture and Assembly (DfMA) for Prefabricated Bridge Construction*. Journal of Sustainable Development and Policy. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Dalam lanskap manufaktur modern yang ditandai oleh persaingan global, permintaan kustomisasi massal (*mass customization*), serta peningkatan biaya material dan tenaga kerja terampil, kemampuan untuk merancang produk yang secara simultan efisien secara manufaktur dan mudah dirakit menjadi kompetensi strategis yang tidak dapat dinegosiasikan. Amirullah dan Jakaria (2024, DOI: [10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) menyoroti urgensi ini melalui studi kasus redesain *coffee enema basket* — sebuah produk perangkat kesehatan rumahan yang berfungsi sebagai wadah saringan ampas kopi untuk prosedur enema terapi. Produk ini pada awalnya memiliki desain konvensional dengan banyak komponen (*over-engineered*), biaya perakitan tinggi, serta tingkat cacat (*defect rate*) yang merugikan profitabilitas UMKM manufaktur alat kesehatan di Indonesia. Redesain tidak lagi menjadi pilihan kosmetik, melainkan kebutuhan survival bagi perusahaan yang beroperasi pada margin tipis dengan regulasi BPOM dan ISO 13485 yang ketat untuk perangkat medis.

Konteks industri yang melatarbelakangi penelitian ini adalah fragmentasi rantai pasok alat terapi rumahan, di mana sebagian besar produksi masih mengandalkan perkakas tangan (*manual tooling*), jig sederhana, dan sub-kontrak perakitan dengan pengawasan kualitas yang lemah. Pendekatan Design for Manufacture and Assembly (DFMA) muncul sebagai kerangka integratif yang menggabungkan dua dimensi optimalisasi — *Design for Manufacture* (DFM) yang menekan biaya fabrikasi, dan *Design for Assembly* (DFA) yang meminimalkan kompleksitas perakitan — ke dalam satu siklus keputusan desain. Sebagaimana ditegaskan oleh Amirullah dan Jakaria (2024), penerapan DFMA pada produk dengan geometri repetitif seperti *coffee enema basket* mampu menurunkan jumlah komponen hingga 40–60%, memangkas waktu perakitan hingga separuh, dan menurunkan *tooling cost* secara signifikan.

Pada tataran makro, penelitian Islam (2024, DOI: [10.63125/av45jf21](https://doi.org/10.63125/av45jf21)) memperluas relevansi DFMA ke industri konstruksi pracetak (*prefabricated bridge construction*) melalui integrasi dengan Building Information Modelling (BIM). Temuan sentralnya — bahwa keputusan desain jembatan konvensional hanya didasarkan pada biaya dan kecukupan struktural, padahal masalah *buildability* baru terungkap saat gambar kerja (*shop drawing*) sudah final dan cetakan (*mould*) sudah dipotong — adalah cerminan tepat dari kegagalan DfMA di banyak industri, termasuk医疗器械 dan consumer goods. Kedua paper ini bersama-sama menunjukkan bahwa DFMA bukan metodologi sektoral, melainkan prinsip rekayasa universal yang relevan mulai dari produk 100 gram hingga struktur jembatan 200 ton.

---

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoritis DFMA yang digunakan oleh Amirullah dan Jakaria (2024, [10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) berakar pada tiga pilar analitis: (i) indeks DFA Boothroyd-Dewhurst, (ii) analisis biaya siklus hidup produk, dan (iii) perhitungan efisiensi perakitan.

**Indeks Efisiensi Desain Perakitan (DFA Efficiency).** Indeks ini mengukur rasio antara jumlah komponen minimum teoretis yang diperlukan untuk memenuhi fungsi produk terhadap jumlah komponen aktual yang digunakan dalam desain. Formulasinya:

$$\eta_{DFA} = \frac{N_{min}}{N_{a}} \times 100\%$$

di mana $N_{min}$ adalah jumlah komponen minimum teoritis dan $N_{a}$ adalah jumlah komponen aktual desain. Amirullah dan Jakaria (2024) menerapkan ambang batas $\eta_{DFA} \geq 60\%$ sebagai indikator desain layak secara DFA. Setiap komponen yang tidak memberikan fungsi esensial (penahan, penyambung, atau gerakan relatif terhadap komponen lain) diklasifikasikan sebagai kandidat eliminasi.

**Waktu Perakitan Total.** Waktu siklus perakitan dihitung menggunakan persamaan Boothroyd yang telah dimodifikasi:

$$T_{assembly} = \sum_{i=1}^{n} (t_{i,manipulasi} + t_{i,insertion} + t_{i,fastening}) + T_{rework}$$

di mana $t_{i,manipulasi}$ adalah waktu pemosisian komponen ke-$i$, $t_{i,insertion}$ adalah waktu pemasangan, $t_{i,fastening}$ adalah waktu pengikatan (jika ada), dan $T_{rework}$ adalah waktu perbaikan cacat rata-rata. Standar waktu mengikuti MTMM (Methods-Time Measurement Module) dengan allowance fatigue 15% dan allowance delay 10%.

**Efisiensi Biaya Manufaktur.** Pengurangan biaya total dihitung menggunakan:

$$\Delta C_{total} = \frac{(C_{material} + C_{labor} + C_{tooling})_{old} - (C_{material} + C_{labor} + C_{tooling})_{new}}{(C_{material} + C_{labor} + C_{tooling})_{old}} \times 100\%$$

Untuk analisis DFM, biaya fabrikasi per komponen menggunakan model biaya proses:

$$C_{proc,i} = \frac{C_{machine} \cdot t_{cycle,i} + C_{tool} + C_{setup}}{N_{batch}}$$

di mana $C_{machine}$ adalah tarif mesin per jam, $t_{cycle,i}$ adalah waktu siklus proses ke-$i$, $C_{tool}$ adalah biaya pahat, dan $N_{batch}$ adalah ukuran batch.

Pada paper pendukung, Islam (2024, [10.63125/av45jf21](https://doi.org/10.63125/av45jf21)) mengusulkan kerangka multi-kriteria dengan skor tertimbang (*weighted scoring*) untuk evaluasi desain jembatan:

$$V_{total} = \sum_{j=1}^{m} w_j \cdot s_j, \quad \text{dengan} \sum_{j=1}^{m} w_j = 1$$

di mana $w_j$ adalah bobot kriteria ke-$j$ (struktur, manufaktur, transportasi, lifting, ereksi, biaya siklus hidup) dan $s_j$ adalah skor ternormalisasi 0–100. Kriteria *manufacturability*, *transportability*, dan *ease of erection* adalah proxies langsung untuk implementasi DfMA dalam skala infrastruktur.

**DFMA Score Gabungan.** Indeks komposit yang menggabungkan DFA dan DFM:

$$\text{DFMA Index} = \alpha \cdot \eta_{DFA} + \beta \cdot \eta_{DFM}$$

dengan $\alpha + \beta = 1$, dan $\eta_{DFM}$ didefinisikan sebagai rasio proses fabrikasi terhadap benchmark industri.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Amirullah dan Jakaria (2024, [10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) menerapkan SOP DFMA tujuh tahap yang menjadi *best practice* dalam literatur Boothroyd:

```
[Start] → [1. Definisi Fungsi Produk] → [2. Identifikasi Komponen Esensial]
   ↓
[3. Pembuatan Diagram Fungsi Black-Box] → [4. Analisis DFA Boothroyd]
   ↓
[5. Redundansi Check & Eliminasi Komponen] → [6. Analisis DFM (Material, Proses, Toleransi)]
   ↓
[7. Redesain & Validasi Prototipe] → [8. Evaluasi Biaya & Waktu] → [End]
```

**Tahap 1 – Definisi Fungsi Produk.** Produk coffee enema basket harus memenuhi fungsi: (a) menahan ampas kopi, (b) menyaring cairan, (c) memungkinkan aliran infus terkontrol, (d) tahan korosi terhadap asam dan panas, dan (e) aman untuk kontak dengan jaringan biologis. Fungsi-fungsi ini menjadi *design constraint* yang tidak boleh dikompromikan saat eliminasi komponen.

**Tahap 2 – Identifikasi Komponen Esensial.** Menggunakan matriks fungsi-komponen, setiap bagian diklasifikasikan menjadi *essential* (fungsi kritis), *redundant* (bisa diintegrasikan), atau *decorative* (bisa dihilangkan).

**Tahap 3 – Diagram Black-Box.** Menggambarkan interaksi energi, material, dan sinyal yang melintasi batas produk tanpa mendetailkan geometri internal. Diagram ini membantu insinyur fokus pada *value-added functions*.

**Tahap 4 – Analisis DFA.** Setiap komponen dievaluasi menggunakan tiga kriteria Boothroyd: (i) apakah komponen bergerak relatif terhadap komponen lain selama operasi, (ii) apakah komponen terpisah dari semua gerakan lain selama perakitan, dan (iii) apakah komponen memerlukan pemisahan karena alasan servis atau manufaktur.

**Tahap 5 – Redundansi Check & Eliminasi.** Komponen yang gagal ketiga kriteria DFA menjadi kandidat eliminasi atau integrasi. Proses ini iteratif hingga $\eta_{DFA}$ mencapai ambang yang ditentukan.

**Tahap 6 – Analisis DFM.** Setelah jumlah komponen minimal, analisis fabrikasi mencakup pemilihan material (stainless steel 304 vs 316L untuk aplikasi medis), proses pembentukan (*sheet metal forming* vs *injection molding* untuk komponen polimer), dan spesifikasi toleransi ISO 2768 medium vs fine.

**Tahap 7 – Redesain & Validasi.** Prototipe dicetak 3D untuk verifikasi geometris, diuji *burst pressure*, *tensile strength*, dan *biocompatibility* sesuai ISO 10993.

Untuk integrasi BIM-DfMA sesuai Islam (2024, [10.63125/av45jf21](https://doi.org/10.63125/av45jf21)), ditambahkan tahap tambahan: pembangunan model BIM parametrik, simulasi *clash detection* pada perakitan modular, dan simulasi *4D assembly sequencing* sebelum fabrikasi aktual.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Berdasarkan metodologi Amirullah dan Jakaria (2024, [10.21070/ups.3309](https://doi.org/10.21070/ups.3309)), berikut adalah rekonstruksi kuantitatif khas redesain coffee enema basket dengan parameter industri yang realistis.

**Parameter Desain Awal (Baseline):**

| Parameter | Nilai Awal |
|-----------|-----------|
| Jumlah komponen ($N_a$) | 16