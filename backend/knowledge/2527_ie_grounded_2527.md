# 2527 — Redesain Produk Manufaktur Menggunakan Metode Design for Manufacture and Assembly (DFMA): Integrasi Prinsip Rekayasa pada Komponen Fungsional dan Konstruksi Modular

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Industri manufaktur kontemporer menghadapi tekanan simultan dari tiga vektor strategis: peningkatan kompleksitas produk, permintaan konsumen akan kualitas fungsional yang lebih tinggi, serta kebutuhan untuk menekan *time-to-market* dan biaya produksi. Amirullah dan Jakaria (2024) dalam studi terindeks DOI [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309) menyoroti bagaimana sebuah produk dengan fungsi kesehatan spesifik—yakni *coffee enema basket*—memiliki desain awal yang belum dioptimasi dari sudut pandang kemampuan manufaktur dan perakitan, sehingga terjadi inefisiensi pada tahap fabrikasi, peningkatan jumlah komponen (*parts count*), serta kesulitan perakitan yang menaikkan *cycle time* produksi. Produk ini sendiri merupakan perangkat medis rumahan yang membutuhkan presisi geometris, ketahanan terhadap korosi, dan kemampuan sterilisasi, sehingga keputusan desain harus menyeimbangkan aspek fungsional-klinis dengan aspek manufaktur-ekonomis.

Dalam konteks yang lebih luas, Islam (2024) dengan DOI [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21) menunjukkan bahwa masalah identik juga muncul pada industri konstruksi jembatan prefabrikasi: desain alternatif pada tahap konsep dan preliminary hanya dievaluasi berdasarkan biaya dan kecukupan struktural, padahal pengetahuan manufaktur, transportasi, pengangkatan, dan ereksi baru dimasukkan ketika desain sudah *frozen*—cetakan sudah dipotong dan gambar kerja sudah final. Situasi ini menyebabkan *buildability problems* yang hanya bisa dikoreksi dengan biaya besar. Kedua paper tersebut menunjukkan bahwa akar permasalahan industri modern adalah **keterlambatan integrasi pengetahuan manufaktur dalam siklus desain**, sehingga metode Design for Manufacture and Assembly (DFMA) menjadi pendekatan yang relevan.

DFMA sendiri merupakan metodologi integratif yang menggabungkan *Design for Manufacture* (DFM)—yaitu optimasi proses fabrikasi individual—dengan *Design for Assembly* (DFA)—yaitu optimasi proses perakitan produk secara keseluruhan. Pendekatan ini dipopulerkan oleh Boothroyd, Dewhurst, dan Knight pada 1980-an dan telah berevolusi menjadi salah satu pilar utama *concurrent engineering*. Urgensi penerapan DFMA pada produk seperti *coffee enema basket* terletak pada empat hal: (1) pengurangan jumlah komponen tanpa mengorbankan fungsi; (2) pemilihan proses manufaktur yang sesuai dengan material dan toleransi; (3) standardisasi fitur geometris agar compatível dengan proses otomatis; dan (4) penurunan *total cost of ownership* sepanjang siklus hidup produk. Tanpa kerangka DFMA, desainer produk medis kecil cenderung menambah fitur yang menaikkan kompleksitas perakitan, yang pada akhirnya merugikan konsumen dan produsen.

## 2. Landasan Teori & Formulasi Matematis

Kerangka teoretis DFMA yang digunakan dalam studi Amirullah dan Jakaria (2024) berakar pada dua perspektif kuantitatif utama: **DfM (Design for Manufacture)** dan **DFA (Design for Assembly)**. Dari perspektif DfM, fabrikasi setiap komponen dievaluasi berdasarkan kemampuan proses yang tersedia—misalnya *sheet metal forming*, *injection molding*, *machining*, atau *casting*—dengan parameter input seperti jenis material, volume produksi tahunan, toleransi geometris, dan kompleksitas fitur. Salah satu indeks fundamental yang digunakan adalah **DfM Efficiency Index (η_fab)** yang menunjukkan sejauh mana desain memaksimalkan manufacturability:

$$\eta_{\text{fab}} = \frac{\sum_{i=1}^{n} C_{\text{optimum},i}}{\sum_{i=1}^{n} C_{\text{aktual},i}}$$

di mana $C_{\text{optimum},i}$ adalah biaya fabrikasi minimum teoretis untuk komponen $i$ pada proses terpilih, dan $C_{\text{aktual},i}$ adalah biaya fabrikasi aktual berdasarkan desain awal. Nilai $\eta_{\text{fab}}$ yang mendekati 1 menunjukkan bahwa desain sudah optimal secara fabrikasi.

Dari perspektif DFA, parameter utama yang dihitung adalah **Design Efficiency (DE)** dan **Assembly Efficiency Index (AEI)**. Design Efficiency didefinisikan Boothroyd dan Dewhurst sebagai:

$$DE = \frac{N_{\text{min}}}{N_{\text{aktual}}} \times 100\%$$

di mana $N_{\text{min}}$ adalah jumlah minimum komponen yang secara teoritis diperlukan untuk memenuhi fungsi produk, dan $N_{\text{aktual}}$ adalah jumlah komponen aktual dalam desain. Indeks ini mengkuantifikasi tingkat over-engineering atau under-integration pada desain. Semakin mendekati 100%, semakin efisien desain tersebut.

**Assembly Efficiency Index (AEI)** lebih lanjut mengukur kontribusi biaya perakitan terhadap total biaya produk:

$$AEI = \frac{T_{\text{aktual}} - T_{\text{min}}}{T_{\text{aktual}}} \times 100\%$$

dengan $T_{\text{aktual}}$ adalah waktu perakitan aktual (detik atau menit) dan $T_{\text{min}}$ adalah waktu perakitan minimum teoretis yang hanya mencakup operasi *insertion* ideal tanpa hambatan.

Untuk analisis multi-kriteria yang juga disinggung Islam (2024), pendekatan *weighted scoring* digunakan dengan formula:

$$S_{j} = \sum_{k=1}^{m} w_{k} \cdot s_{jk}, \quad \sum_{k=1}^{m} w_{k} = 1$$

di mana $S_j$ adalah skor total alternatif desain $j$, $w_k$ adalah bobot kriteria $k$ (misalnya manufacturability, transportability, liftability, structural adequacy), dan $s_{jk}$ adalah skor ternormalisasi alternatif $j$ pada kriteria $k$. Islam (2024) menekankan bahwa tanpa integrasi kriteria manufaktur dan ereksi sejak tahap awal, skor $S_j$ akan bias terhadap kriteria struktural-ekonomis saja.

Formulasi tambahan yang relevan untuk komponen fungsional seperti *coffee enema basket* adalah **Reduction Ratio** yang menghitung propelling penghematan:

$$R_r = \frac{N_{\text{before}} - N_{\text{after}}}{N_{\text{before}}} \times 100\%$$

dan **Cost Reduction Ratio** yang menghitung propelling penghematan biaya produksi:

$$C_r = \frac{C_{\text{before}} - C_{\text{after}}}{C_{\text{before}}} \times 100\%$$

Kedua rasio ini menjadi bukti kuantitatif efektivitas redesain DFMA.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi DFMA mengikuti alur prosedural yang dapat distandardisasikan sebagai berikut, sebagaimana dipraktikkan dalam paper Amirullah dan Jakaria (2024) dan diadaptasi ke konteks yang lebih luas oleh Islam (2024):

**Tahap 1 — Analisis Fungsi Produk.** Desainer memetakan fungsi-fungsi primer dan sekunder produk. Untuk *coffee enema basket*, fungsi primer mencakup (a) menahan dan memfilter ampas kopi, (b) memungkinkan aliran larutan melalui perforasi, dan (c) tahan terhadap suhu dan korosi kimia. Setiap fungsi kemudian dialokasikan ke komponen atau fitur.

**Tahap 2 — Pembuatan Konsep Desain Awal (*Concept Generation*).* Menghasilkan beberapa alternatif desain konseptual yang memenuhi spesifikasi fungsi. Pada paper Amirullah dan Jakaria, desain awal (*existing design*) berfungsi sebagai baseline untuk perbandingan.

**Tahap 3 — Penerapan Prinsip DFA (Boothroyd-Dewhurst).* Setiap komponen dievaluasi terhadap tiga pertanyaan kritis: (1) Apakah komponen bergerak relatif terhadap komponen lain selama operasi? (2) Apakah komponen harus terpisah karena memerlukan material berbeda? (3) Apakah komponen harus terpisah karena diperlukan akses untuk装配 atau servis? Jika semua jawaban "tidak", maka komponen tersebut merupakan kandidat eliminasi atau integrasi.

**Tahap 4 — Penerapan Prinsip DFM.* Pemilihan proses manufaktur didasarkan pada material, toleransi, dan volume produksi. Untuk komponen logam tipis seperti keranjang (*basket*), proses *stamping*, *wire forming*, atau *deep drawing* menjadi kandidat utama.

**Tahap 5 — Penilaian Ulang dan Iterasi.* Desain yang sudah direduksi dievaluasi ulang dari sudut pandang kekuatan, estetika, dan kepatuhan regulasi. Jika gagal, iterasi dilakukan.

**Tahap 6 — Validasi Manufaktur dan Perakitan.* Prototipe dibuat dan diuji pada lini produksi aktual untuk memverifikasi bahwa metrik DE, AEI, dan $C_r$ tercapai.

Islam (2024) menambahkan satu tahap kritis yang sering terlewat: **integrasi kriteria DfMA dalam kerangka BIM sejak tahap konseptual**. Dengan BIM, setiap elemen desain jembatan (balok, segmen, sambungan) membawa metadata tentang berat, dimensi, metode ereksi, dan tingkat prefabrikasi—sehingga evaluasi multi-kriteria dapat dilakukan otomatis sebelum desain *frozen*. Pendekatan ini dapat diadaptasi ke produk manufaktur melalui integrasi CAD-CAM dengan *manufacturing feature recognition* dan *cost estimation engine*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Untuk mengilustrasikan kekuatan analitis DFMA, disajikan perhitungan berbasis skenario industri yang konsisten dengan metodologi paper Amirullah dan Jakaria (2024). Misalkan sebuah *coffee enema basket* generasi awal memiliki karakteristik berikut:

**Desain Awal (Baseline):**
- Jumlah komponen: $N_{\text{before}} = 12$ bagian (badan keranjang, tutup, 3 ring pengunci, 4 kait jepit, 2 pegangan, 1 filter terpisah)
- Waktu perakitan aktual: $T_{\text{aktual}} = 240$ detik per unit
- Biaya material: Rp 28.500 per unit
- Biaya tenaga kerja langsung perakitan: Rp 12.000 per unit
- Biaya fabrikasi total: $C_{\text{before}} = 40.500$ per unit

**Langkah Redesain DFMA:**
1. Eliminasi ring pengunci dan kait jepit dengan mengintegrasikannya sebagai fitur *snap-fit* pada tutup.
2. Penggabungan pegangan dan badan keranjang sebagai satu hasil *stamping-forming*.
3. Filter terintegrasi dengan perforasi pada badan utama (menghilangkan komponen filter terpisah).

Hasil redesain:
- Jumlah komponen: $N_{\text{after}} = 5$ bagian (badan terintegrasi, tutup *snap-fit*, 1 ring adaptor, 1 seal silikon, 1 label)
- Waktu perakitan aktual: $T_{\text{aktual,new}} = 95$ detik per unit
- Biaya material: Rp 22.000 per unit
- Biaya tenaga kerja langsung perakitan: Rp 4.750 per unit
- Biaya fabrikasi total: $C_{\text{after}} = 26.750$ per unit

**Perhitungan Indikator DFMA:**

*Design Efficiency (DE):*

$$DE = \frac{N_{\text{min}}}{N_{\text{aktual}}} \times 100\%$$

Asumsikan jumlah minimum teoritis untuk fungsi yang diminta adalah $N_{\text{min}} = 4$. Maka:

- Baseline: $DE_{\text{before}} = \frac{4}{12} \times 100\% = 33{,}33\%$
- Redesain: $DE_{\text{after}} = \frac{4}{5} \times 100\% = 80{,}00\%$

*Reduction Ratio ($R_r$):*

$$R_r = \frac{12 - 5}{12} \times 100\% = 58{,}33\%$$

Artinya, redesain mengeliminasi 58,33% komponen tanpa kehilangan fungsi.

*Cost Reduction Ratio ($C_r$):*

$$C_r = \frac{40.500 - 26.750}{40.500} \times 100\% = 33{,}95\%$$

*Assembly Efficiency Improvement:*

$$\Delta AEI = \frac{(T_{\text{aktual,before}} - T_{\text{min}}) - (T_{\text{aktual,after}} - T_{\text{min}})}{T_{\text{aktual,before}} - T_{\text{min}}} \times 100\%$$

Dengan $T_{\text{min}} = 60$ detik (operasi *insertion* ideal):

$$\Delta AEI = \frac{(240-60)-(95-60)}{240-60} \times 100\% = \frac{180-35}{180} \times 100\% = 80{,}56\%$$

Interpretasi manajerial: redesain DF