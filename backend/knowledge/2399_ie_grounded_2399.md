# 2399 — Redesain Produk Menggunakan Pendekatan Design for Manufacture and Assembly (DFMA): Studi Kasus Rangka Coffee Enema Basket dan Framework Evaluasi Multi-Kriteria berbasis BIM

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Desain produk yang tidak memperhatikan kemampuan proses manufaktur dan perakitan di fase konseptual merupakan salah satu penyebab utama inefisiensi struktural pada industri manufaktur kontemporer. Studi Amirullah dan Jakaria (2024) yang dipublikasikan di *Peer-Reviewed Journal* (DOI: [10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) mengangkat kasus redesain *coffee enema basket*—sebuah instrumen terapi komplementer yang berbentuk keranjang saringan stainless steel—menggunakan metodologi Design for Manufacture and Assembly (DFMA). Produk ini sebelumnya dirancang tanpa memperhatikan optimasi jumlah komponen, geometri yang ramah proses fabrikasi, maupun urutan perakitan yang ergonomis. Akibatnya, biaya produksi menjadi tinggi, waktu perakitan berlebih, dan yield rate di lantai produksi menurun. Urgensi redesain muncul dari kebutuhan pelaku UMKM manufaktur alat kesehatan rumahan untuk meningkatkan daya saing melalui pengurangan *bill of materials* (BOM) dan peningkatan efisiensi lini perakitan tanpa mengorbankan fungsionalitas produk, estetika, dan aspek higienitas-sterilisasi yang menjadi standar perangkat medis ringan.

Konteks industri yang lebih luas diperkuat oleh temuan Islam (2024) dalam *Journal of Sustainable Development and Policy* (DOI: [10.63125/av45jf21](https://doi.org/10.63125/av45jf21)) yang menunjukkan bahwa permasalahan serupa—yaitu pemilihan desain berdasarkan kriteria tunggal (harga dan kekuatan struktural) tanpa mempertimbangkan *manufacturability, transportability, liftability,* dan *erectability*—mengakibatkan *buildability problems* baru muncul pada tahap shop-drawing atau di lapangan konstruksi, ketika mould sudah dipotong dan koreksi menjadi sangat mahal. Kedua literatur ini menegaskan bahwa DFMA bukan sekadar tool optimasi, melainkan sebuah *design governance framework* yang harus diintegrasikan sejak fase konseptual untuk mencegah *design freeze* prematur. Dalam konteks manufaktur presisi, penerapan DFMA terbukti menurunkan *time-to-market* sebesar 20–60%, mengurangi jumlah parts hingga 30–50%, dan menurunkan biaya perakitan hingga 40% melalui eliminasi operasi yang tidak value-added.

---

## 2. Landasan Teori & Formulasi Matematis

Pendekatan DFMA yang digunakan dalam kedua paper tersebut berakar pada metodologi Boothroyd-Dewhurst, yang membagi proses optimasi menjadi dua dimensi utama: *Design for Manufacture* (DFM) dan *Design for Assembly* (DFA). Pendekatan ini menggunakan indikator kuantitatif berupa **DFA Index (η_assembly)** yang diformulasikan sebagai berikut:

$$\eta_{\text{assembly}} = \frac{N_{\min} \cdot t_{\min}}{N_{\text{actual}} \cdot t_{\text{actual}}} \times 100\%$$

di mana:
- $N_{\min}$ = jumlah minimum teoritis komponen yang diperlukan untuk memenuhi fungsi produk
- $t_{\min}$ = waktu minimum teoritis untuk merakit komponen tersebut (detik)
- $N_{\text{actual}}$ = jumlah aktual komponen dalam desain awal
- $t_{\text{actual}}$ = waktu aktual perakitan desain awal (detik)

Semakin tinggi nilai $\eta_{\text{assembly}}$, semakin efisien desain produk. Boothroyd-Dewhurst menetapkan bahwa desain dianggap layak secara DFA bila $\eta_{\text{assembly}} \geq 60\%$.

Untuk analisis **Design for Manufacture**, digunakan persamaan estimasi biaya manufaktur per komponen:

$$C_{\text{manufaktur}} = C_{\text{bahan}} + C_{\text{mesin}} + C_{\text{tooling}} + C_{\text{overhead}}$$

dengan:

$$C_{\text{mesin}} = t_{\text{cycle}} \cdot R_{\text{mesin}} \cdot \left(1 + \frac{t_{\text{setup}}}{t_{\text{produksi}}}\right)$$

di mana $t_{\text{cycle}}$ adalah waktu siklus mesin (detik), $R_{\text{mesin}}$ adalah tarif mesin (Rp/detik), $t_{\text{setup}}$ adalah waktu setup, dan $t_{\text{produksi}}$ adalah waktu produksi batch.

Untuk kriteria **minimum number of parts**, Boothroyd mendefinisikan bahwa sebuah komponen harus ada hanya jika memenuhi minimal satu dari tiga pertanyaan berikut: (1) Apakah komponen tersebut harus bergerak relatif terhadap komponen lain? (2) Apakah material komponen berbeda dari komponen lain yang diperlukan? (3) Apakah pemisahan komponen diperlukan untuk perakitan/pemeliharaan?

Dalam konteks framework BIM-DfMA milik Islam (2024), evaluasi multi-kriteria menggunakan Analytical Hierarchy Process (AHP) dengan vektor prioritas:

$$\mathbf{w} = \frac{1}{n} \sum_{i=1}^{n} \frac{\mathbf{A}_i}{\sum_{j=1}^{n} a_{ij}}$$

di mana $\mathbf{A}$ adalah matriks perbandingan berpasangan antar kriteria (cost, structural adequacy, manufacturability, transportability, liftability, erectability), dan $\mathbf{w}$ adalah bobot prioritas yang memenuhi $\sum w_i = 1$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi DFMA mengikuti SOP delapan tahap yang distandarisasi oleh Boothroyd & Dewhurst (1983) dan diadopsi oleh kedua paper:

**Tahap 1 — Analisis Desain Awal.** Inventorisasi seluruh komponen *coffee enema basket* awal menggunakan *exploded view drawing*, lalu klasifikasikan setiap komponen berdasarkan fungsi, material, dan operasi perakitan. Pada studi Amirullah & Jakaria (2024), desain awal terdiri atas 12 komponen utama: badan keranjang, 4 bracket handle, 4 rivet, dasar saringan, ring pengunci, dan gagang.

**Tahap 2 — Aplikasi Kriteria Minimum Parts.** Evaluasi setiap komponen dengan tiga pertanyaan Boothroyd. Komponen yang gagal memenuhi semua kriteria ditandai sebagai kandidat eliminasi atau integrasi.

**Tahap 3 — Analisis DFA Kuantitatif.** Hitung $\eta_{\text{assembly}}$ desain awal dengan metode *manual assembly analysis* (MAA), di mana analis memperagakan urutan perakitan dan mengukur $t_{\text{actual}}$ menggunakan *time study* dengan standar MOST (Maynard Operation Sequence Technique).

**Tahap 4 — Desain Ulang (Konseptual).** Buat alternatif desain yang mengurangi jumlah komponen. Strategi yang lazim: (a) integrasi multi-fungsi (misalnya bracket yang sekaligus menjadi pengunci), (b) penggunaan fitur snap-fit取代 fastener, (c) pemilihan proses成形 yang memerlukan minimal parts.

**Tahap 5 — Analisis DFM.** Evaluasi manufacturability setiap komponen baru menggunakan *process capability chart*. Pilih proses fabrikasi: stamping, welding, injection molding, atau sheet metal forming—tergantung volume produksi dan kompleksitas geometri.

**Tahap 6 — Validasi Desain Ulang.** Hitung ulang $\eta_{\text{assembly}}$ desain baru dan bandingkan dengan baseline.

**Tahap 7 — Analisis Biaya.** Hitung *manufacturing cost* dan *assembly cost* sebelum-sesudah redesain menggunakan Activity-Based Costing (ABC).

**Tahap 8 — Implementasi dan Continuous Improvement.** Prototyping, uji fungsional, uji sterilisasi (autoclave pada 121°C), dan feedback loop ke tahap 4.

Untuk framework BIM-DfMA (Islam, 2024), SOP diperluas dengan integrasi **BIM Level 2–3**: model 3D parametrik produk di-*populate* dengan atribut DfMA (massa, dimensi transportasi, centre of gravity, erection sequence), kemudian algoritma *multi-criteria decision analysis* (MCDA) memilih alternatif desain terbaik. Diagram alir integrasi: `Conceptual Design → BIM Model → DfMA Attribute Extraction → AHP Weighting → MCDA Scoring → Design Selection → Shop Drawing → Fabrication`.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus: Redesain Coffee Enema Basket** (parameter realistis berdasarkan standar industri stainless steel cookware medis UMKM Indonesia):

**Input Parameter Desain Awal:**

| Parameter | Simbol | Nilai Awal | Satuan |
|---|---|---|---|
| Jumlah komponen | $N_{\text{actual}}$ | 12 | parts |
| Waktu rata-rata perakitan | $t_{\text{actual}}$ | 240 | detik/unit |
| Jumlah minimum parts (teoritis) | $N_{\min}$ | 5 | parts |
| Waktu minimum assembly | $t_{\min}$ | 60 | detik/unit |
| Biaya material stainless steel 304 | $C_{\text{bahan}}$ | 18.500 | Rp/unit |
| Biaya mesin (las, stamping, poles) | $C_{\text{mesin}}$ | 22.000 | Rp/unit |
| Biaya overhead pabrik | $C_{\text{overhead}}$ | 8.500 | Rp/unit |
| Volume produksi batch | $Q$ | 5.000 | unit/tahun |

**Langkah 1 — Hitung DFA Index Desain Awal:**

$$\eta_{\text{assembly,awal}} = \frac{N_{\min} \cdot t_{\min}}{N_{\text{actual}} \cdot t_{\text{actual}}} \times 100\% = \frac{5 \times 60}{12 \times 240} \times 100\% = \frac{300}{2.880} \times 100\% \approx 10{,}42\%$$

Nilai 10,42% ini jauh di bawah ambang 60% Boothroyd, mengonfirmasi desain awal sangat tidak efisien secara assembly.

**Langkah 2 — Redesain (Eliminasi dan Integrasi):** Komponen yang dieliminasi: 4 rivet (diganti *spot welding*), 4 bracket handle terpisah (diintegrasikan menjadi 1 bracket lipat dari kawat stainless Ø3 mm yang dilas), ring pengunci (diganti fitur *snap-fit* pada badan keranjang). Desain baru: $N_{\text{actual,baru}} = 6$ parts. Waktu perakitan turun menjadi $t_{\text{actual,baru}} = 110$ detik (penghematan operasi fastening dan alignment).

**Langkah 3 — Hitung DFA Index Desain Baru:**

$$\eta_{\text{assembly,baru}} = \frac{5 \times 60}{6 \times 110} \times 100\% = \frac{300}{660} \times 100\% \approx 45{,}45\%$$

Peningkatan efisiensi assembly dari 10,42% menjadi 45,45% (Δ = +35,03 poin persentase), menunjukkan lonjakan signifikan meskipun masih di bawah target 60%. Optimasi lanjutan dengan fitur *one-piece stamped body* dapat mencapai η ≈ 70%.

**Langkah 4 — Analisis Biaya Total:**

$$C_{\text{awal}} = 18.500 + 22.000 + 8.500 = 49.000 \text{ Rp/unit}$$

$$C_{\text{baru}} = 13.200 + 16.500 + 6.800 = 36.500 \text{ Rp/unit}$$

**Penghematan per unit:** $49.000 - 36.500 = 12.500$ Rp/unit atau **25,51%**.

**Penghematan tahunan:** $12.500 \times 5.000 = 62.500.000$ Rp/tahun.

**Langkah 5 — Analisis Biaya Perakitan dengan Tarif Tenaga Kerja:**

Dengan asumsi tarif operator Rp 8.000/jam (= Rp 2,222/detik):

$$\text{Assembly Cost Awal} = 240 \times 2{,}222 = 533{,}33 \text{ Rp/unit}$$

$$\text{Assembly Cost Baru} = 110 \times 2{,}222 = 244{,}44 \text{ Rp/unit}$$

Penghematan biaya TK langsung: 288,89 Rp/unit, atau setara 1,44 juta Rp/tahun. **Total saving (material + TK + overhead):** ≈ 64 juta Rp/tahun untuk batch 5.000 unit.

**Interpretasi Manajerial:** Redesain tidak hanya menekan biaya produksi, tetapi juga mengurangi *cycle time* lini perakitan sehingga kapasitas produksi naik dari 15 unit/jam menjadi 32 unit/jam (atau +113%), memungkinkan responsivitas permintaan musiman tanpa investasi mesin baru.

---

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa depan

**Keterbatasan Metodologis:** Pendekatan DFMA pada paper Amirullah & Jakaria (2024) memiliki beberapa keterbatasan: (1) analisis DFA dilakukan secara manual dengan single-evaluator, menimbulkan *subjectivity bias*—solusinya adalah *cross-functional team