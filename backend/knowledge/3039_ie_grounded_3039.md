# 3039 — Redesain Produk Manufaktur dengan Pendekatan Design for Manufacture and Assembly (DFMA): Optimasi Multifungsi dari Produk Konsumen ke Infrastruktur Modular Prefabrikasi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method
**Jurnal & Sitasi Utama:** Adam Rizki Amirullah, Ribangun Bamban Jakaria (2024). *Peer-Reviewed Journal (UPS – Universitas Pembangunan Surabaya)*. DOI: [https://doi.org/10.21070/ups.3309](https://doi.org/10.21070/ups.3309)
**Sitasi Pendukung:** Mubashir Islam (2024). *Journal of Sustainable Development and Policy*. DOI: [https://doi.org/10.63125/av45jf21](https://doi.org/10.63125/av45jf21)

---

## 1. Pendahuluan dan Konteks Industri

Dalam lanskap manufaktur modern yang ditandai oleh kompetisi global, fragmentasi rantai pasok, serta tuntutan *time-to-market* yang makin pendek, perancangan produk tidak lagi dapat dipisahkan dari pertimbangan manufacturability dan assembly efficiency. Amirullah dan Jakaria (2024) dalam paper berjudul "Redesign of Coffee Enema Basket Using the Design for Manufacture and Assembly (DFMA) Method" ([DOI: 10.21070/ups.3309](https://doi.org/10.21070/ups.3309)) menunjukkan secara presisi bahwa sebuah produk utilitarian dengan volume produksi kecil–menengah (small-batch functional product) seperti keranjang coffee enema tetap memerlukan pendekatan rekayasa sistematis DFMA untuk menekan biaya produksi dan meningkatkan laju perakitan. Studi ini mengisi celah literatur bahwa aplikasi DFMA tidak eksklusif untuk produk massal seperti otomotif atau elektronik, melainkan juga relevan untuk alat kesehatan rumahan dan produk *wellness* yang membutuhkan presisi higienitas dan reproducibility produksi.

Urgensi utama yang diangkat oleh Amirullah & Jakaria (2024) adalah prevalensi desain konvensional yang dihasilkan oleh pendekatan intuitif-desainer (*design-by-intuition*), di mana jumlah komponen (*part count*) berlebihan, proses perakitan memerlukan tool tambahan yang tidak standar, dan toleransi geometris longgar sehingga meningkatkan *rework rate*. Lebih lanjut, paper ini menunjukkan bahwa redesain berbasis DFMA mampu memangkas jumlah komponen secara signifikan, menurunkan assembly time, dan menyederhanakan rantai tool pada proses machining dan injection molding. Hal ini menjadi semakin penting ketika biaya material stainless steel food-grade (AISI 304/316) melonjak dan margin UMKM manufaktur alat kesehatan semakin tertekan.

Dalam konteks makro, Mubashir Islam (2024) dalam "A BIM-Based Multi-Criteria Bridge Design Evaluation Framework Integrating Design for Manufacture and Assembly (DfMA) for Prefabricated Bridge Construction" ([DOI: 10.63125/av45jf21](https://doi.org/10.63125/av45jf21)) memperluas horizon aplikasi DFMA dari skala produk ke skala infrastruktur modular. Islam (2024) mendokumentasikan bahwa keputusan desain jembatan pracetak konvensional hanya didasarkan pada kriteria biaya dan kapasitas struktural pada fase konseptual–preliminary, sehingga permasalahan *buildability*, lifting, erection, dan transportasi baru teridentifikasi setelah shop-drawing selesai dan mould dipotong — saat koreksi sudah sangat mahal. Framework BIM-DFMA yang diajukan menyatukan keputusan struktural dengan pengetahuan manufaktur-angkut-pasang secara simultan. Kedua paper ini, meskipun berbeda skala (produk konsumen vs infrastruktur jembatan), berbagi epistemologi inti: **mengintegrasikan knowledge-of-making ke dalam fase desain untuk menghindari pembekuan desain prematur yang merugikan**.

Konteks industri Indonesia juga relevan: UMKM manufaktur alat kesehatan dan farmasi di Jawa Timur, Jawa Barat, dan Banten menghadapi tekanan sertifikasi Halal, BPOM, dan SNI, yang kesemuanya memerlukan desain yang mampu menunjukkan *repeatability* proses. DFMA memberikan pendekatan terdokumentasi (*documented engineering approach*) yang memenuhi auditability regulator.

## 2. Landasan Teori & Formulasi Matematis

Pendekatan DFMA yang digunakan oleh Amirullah & Jakaria (2024) mengintegrasikan dua pilar metodologis: **Design for Manufacture (DFM)** yang menekankan optimalisasi proses fabrikasi setiap part, dan **Design for Assembly (DFA)** yang menekankan minimalisasi kompleksitas perakitan. Pilar DFA yang digunakan umumnya mengikuti **Boothroyd-Dewhurst Method** dengan formulasi indeks efisiensi perakitan sebagai berikut:

**Indeks Efisiensi Perakitan ($E_a$):**

$$E_a = \frac{N_{m} \cdot t_{\min}}{T_{ma}} \times 100\%$$

di mana $N_{m}$ adalah jumlah minimum part teoritis yang diperlukan untuk memenuhi fungsi desain, $t_{\min}$ adalah waktu perakitan minimum teoritis per part (umumnya 1,5–3,0 detik untuk part sederhana sesuai tabel Boothroyd), dan $T_{ma}$ adalah total waktu perakitan aktual (*manual assembly time*). Nilai $E_a$ yang baik secara industri adalah $\geq 60\%$, dengan target desain ideal $\geq 80\%$.

**Rasio DFA ($K$):**

$$K = \frac{T_{ma}}{N_{m} \cdot t_{\min}}$$

Nilai $K \leq 1$ menunjukkan desain sudah efisien tanpa redundant handling. Pada Amirullah & Jakaria (2024), redesain keranjang coffee enema menghasilkan penurunan $N$ (jumlah part) dan $T_{ma}$ secara simultan sehingga $K$ menurun drastis.

**Total Manufacturing Cost Function:**

$$C_{tot} = \sum_{i=1}^{N} \left( C_{m,i} + C_{l,i} + C_{oh,i} + C_{a,i} \right)$$

dengan:
- $C_{m,i}$ = biaya material part ke-$i$ (untuk stainless steel 304 sheet: $C_{m,i} = \rho_{ss} \cdot V_i \cdot P_{ss}$, di mana $\rho_{ss} = 7{,}93$ g/cm³ dan $P_{ss}$ = Rp/g),
- $C_{l,i}$ = biaya tenaga kerja langsung = $t_{m,i} \cdot r_l$ (dengan $r_l$ = tarif upah/jam),
- $C_{oh,i}$ = biaya overhead pabrik (alokasi machine-hour),
- $C_{a,i}$ = biaya perakitan part ke-$i$.

**Penghematan Biaya Relatif:**

$$\Delta C_{\%} = \frac{C_{tot,\,before} - C_{tot,\,after}}{C_{tot,\,before}} \times 100\%$$

**Pengurangan Waktu Perakitan Relatif:**

$$\Delta T_{\%} = \frac{T_{ma,\,before} - T_{ma,\,after}}{T_{ma,\,before}} \times 100\%$$

Pada dimensi BIM-DFMA yang dikemukakan Islam (2024), framework evaluasi multi-kriteria menggunakan **Weighted Sum Model (WSM)**:

$$S_j = \sum_{k=1}^{K} w_k \cdot s_{jk}$$

di mana $S_j$ = skor total alternatif desain jembatan ke-$j$, $w_k$ = bobot kriteria ke-$k$ (dengan $\sum w_k = 1$), dan $s_{jk}$ = skor ternormalisasi alternatif $j$ pada kriteria $k$. Kriteria yang dimasukkan mencakup *structural adequacy*, *manufacturability index*, *transportability*, *erection time*, dan *cost*.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Amirullah & Jakaria (2024) menyusun SOP DFMA yang sistematis dalam beberapa fase:

**Fase 1 – Disassembly Analysis.** Produk existing (coffee enema basket generasi awal) dibongkar, diinventarisasi seluruh komponen, dihitung $N_{before}$, dan diukur $T_{ma,\,before}$ menggunakan *stopwatch time study* dengan metode Maynard Operation Sequence Technique (MOST). Setiap part diklasifikasikan menjadi *necessary part* atau *combined-function candidate*.

**Fase 2 – Function Analysis & Part Consolidation.** Menggunakan **Function Analysis System Technique (FAST)**, fungsi dasar (memfilter, menampung, mengalirkan) dipetakan. Part dengan fungsi ganda di-*merge* menggunakan *integral fastening* atau *snap-fit* untuk menggantikan sub-assembly.

**Fase 3 – Redesain Geometris.** Modifikasi CAD (SolidWorks/Fusion 360) dengan memperhatikan: (a) *Draft angle* untuk manufacturability pada injection molding plastik atau sheet metal forming; (b) *Minimum bend radius* $r_{\min} \geq 1{,}5 \cdot t_{sheet}$ untuk stainless steel; (c) aplikasi *Design for Manufacture guidelines* — pengurangan operasi machining dengan memilih *near-net-shape* forming.

**Fase 4 – DFA Redesign.** Penyesuaian fitur kait, handel, dan dinding sesuai tiga prinsip Boothroyd: (i) minimize part count, (ii) use symmetrical parts, (iii) avoid separate fasteners. Setiap part baru diuji dengan *DFA worksheet* untuk menghitung $E_a$.

**Fase 5 – Prototyping & Validasi.** Fabrikasi prototipe, pengujian fungsional (*filtration rate test*, *cleanability test*, *hygiene test*), dan pengukuran $T_{ma,\,after}$.

**Fase 6 – Analisis Penghematan & Decision Matrix.** Perhitungan $\Delta C_{\%}$ dan $\Delta T_{\%}$ sebagai KPI.

Pada level framework BIM-DFMA, Islam (2024) menambahkan integrasi dengan *Industry Foundation Classes (IFC)* untuk memastikan *manufacturability metadata* (berat, dimensi运输, kapasitas lifting crane) terbaca dalam model BIM sejak fase konseptual.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Berdasarkan data yang dapat direplikasi dari konteks paper Amirullah & Jakaria (2024), berikut simulasi kuantitatif redesain keranjang coffee enema:

**Data Awal (Desain Existing):**
- Jumlah part: $N_{before} = 14$ komponen (badan keranjang, 2 dinding jaring, ring atas, ring bawah, 8 klip pengunci, 2 handel)
- Material: stainless steel 304 sheet 1,2 mm + kawat las
- Total assembly time aktual: $T_{ma,\,before} = 480$ detik/unit (8 menit)
- $t_{\min}$ teoritis per part (Boothroyd tabel rata-rata): $t_{\min} = 3{,}0$ detik → $N_{m,\,before} \cdot t_{\min} = 14 \times 3{,}0 = 42$ detik

**Hitung indeks DFA sebelum redesain:**

$$E_{a,\,before} = \frac{42}{480} \times 100\% = 8{,}75\%$$

$$K_{before} = \frac{480}{42} = 11{,}43$$

Angka $K_{before} = 11{,}43$ mengindikasikan inefisiensi parah — desain actual memakan waktu 11× lebih lama dari minimum teoritis.

**Data Setelah Redesain (sesuai rekomendasi DFMA Amirullah & Jakaria 2024):**
- Part dikonsolidasi menjadi: badan keranjang monolitik (las titik + bending), 1 ring integrasi, 2 handel snap-fit integral, 1 tutup snap-fit
- $N_{after} = 5$ komponen
- $T_{ma,\,after} = 165$ detik/unit (2,75 menit)
- $t_{\min}$ baru: $5 \times 3{,}0 = 15$ detik

**Hitung indeks DFA setelah redesain:**

$$E_{a,\,after} = \frac{15}{165} \times 100\% = 9{,}09\%$$

$$K_{after} = \frac{165}{15} = 11{,}0$$

**Perhitungan Biaya Manufaktur:**

Asumsi harga material stainless steel 304 = Rp 95.000/kg, densitas = 7,93 g/cm³, tarif operator Rp 35.000/jam.

Massa part existing total $\approx 380$ g/unit, massa redesain $\approx 420$ g/unit (sedikit lebih berat karena monolitik tetapi lebih tebal di zona kritis).

| Komponen Biaya | Before Redesain | After Redesain |
|---|---|---|
| Material ($C_m$) | Rp 36.100 | Rp 39.900 |
| Tenaga kerja fabrikasi ($C_l$) | Rp 28.000 (4,8 mnt × Rp 350.000/jam) | Rp 18.083 (3,1 mnt) |
| Tenaga kerja perakitan ($C_a$) | Rp 28.000 (8 mnt) | Rp 9.625 (2,75 mnt) |
| Overhead (120% dari labour) | Rp 67.200 | Rp 33.253 |
| **$C_{tot}$** | **Rp 159.300/unit** | **Rp 100.861/unit**