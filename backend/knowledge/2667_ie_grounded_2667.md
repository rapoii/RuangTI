# 2667 — Perancangan Chip Berbasis Chiplet dan Integrasi 3D-IC: Solusi EDA serta Teknologi Hybrid Bonding Cu-Cu untuk Manufaktur Semikonduktor Heterogen

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global tengah mengalami transisi paradigma fundamental dari arsitektur monolitik System-on-Chip (SoC) menuju paradigma *heterogeneous integration* (HI) berbasis chiplet dan *3D Integrated Circuit* (3D-IC). Menurut Roze dan Gerber (2026) dalam makalahnya di *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*, urgensi transisi ini dipicu oleh tiga faktor struktural yang simultan: (1) melonjaknya biaya litografi EUV di node 3 nm dan 2 nm yang telah melampaui ambang USD 200 juta per *mask set*, (2) menurunnya *yield* wafer pada area die besar (*reticle-limited yield*) yang mengikuti hukum *Stapper* dengan eksponen negatif terhadap luas, serta (3) meningkatnya kompleksitas integrasi fungsi heterogen seperti logika, memori HBM, RF, dan fotonik dalam satu kemasan. DOI: [10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563).

Lau (2023) dalam buku *Chiplet Design and Heterogeneous Integration Packaging* menegaskan bahwa arsitektur chiplet — yang memecah satu SoC besar menjadi beberapa *die* kecil yang kemudian disatukan melalui *interposer* atau *direct bonding* — mampu meningkatkan *yield* manufaktur secara dramatis karena hukum probabilitas komposit. Sebagai ilustrasi, sebuah SoC 600 mm² pada node N5 memiliki *yield* kurang dari 30%, sedangkan jika dipecah menjadi 6 chiplet @ 100 mm², *yield* masing-masing mendekati 90%, sehingga *effective yield* sistem dapat melonjak ke kisaran 50–60%. DOI: [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6).

Konteks ekonomi industri menunjukkan bahwa pasar *advanced packaging* global diproyeksikan tumbuh dengan CAGR >12% dan menembus USD 100 miliar pada 2030 (data yang dikutip Lau, 2023). Namun demikian, arsitektur chiplet tidak datang tanpa tantangan: desain multi-die memerlukan *Electronic Design Automation* (EDA) baru yang mampu menangani *co-design* termal, listrik, mekanis, dan sinyal secara simultan. Permasalahan *place-and-route* (PnR) konvensional yang bersifat 2.5D kini harus diperluas menjadi 3D dengan constraint *through-silicon via* (TSV), *hybrid bonding pitch*, dan *thermal coupling* antar-die. Roze dan Gerber (2026) menekankan bahwa tanpa perangkat EDA khusus, biaya rekayasa (*NRE*) untuk satu desain chiplet bisa melebihi USD 50 juta, sehingga menjadi barrier masuk bagi perusahaan di luar vendor IDM besar. Dengan demikian, solusi EDA untuk chiplet dan 3D-IC bukan sekadar perangkat lunak desain, melainkan *strategic enabler* bagi keseluruhan rantai pasok semikonduktor heterogen yang melibatkan *foundry*, *OSAT*, *IP vendor*, dan integrator sistem.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model *Yield* Multi-Chiplet (Yield Compositing)

Dasar teori paling fundamental dalam desain chiplet adalah hukum probabilitas komposit. Untuk sistem yang terdiri dari *n* chiplet identik dengan luas masing-masing $A_c$ (cm²) dan *defect density* $D_0$ (cm⁻²), *yield* satu chiplet mengikuti model *negative binomial* (atau model Stapper):

$$Y_c = \left(1 + \frac{D_0 \cdot A_c}{\alpha}\right)^{-\alpha} \tag{1}$$

dengan $\alpha$ adalah *clustering parameter* (umumnya 1–3 untuk proses CMOS mature). *Yield* sistem *assembly* diasumsikan mengikuti probabilitas serial:

$$Y_{sys} = Y_c^n \cdot Y_{bond} \tag{2}$$

dengan $Y_{bond}$ adalah *bonding yield* dari proses integrasi (umumnya 0,95–0,99 untuk hybrid bonding Cu-Cu menurut Lau, 2023).

### 2.2 Resistansi Termal Setara (Equivalent Thermal Resistance) pada 3D-IC

Roze dan Gerber (2026) menyoroti bahwa salah satu fungsi kritis EDA 3D-IC adalah menyelesaikan *thermal-aware floorplanning*. Resistansi termal ekuivalen untuk *stacked die* dengan *n* layer die, *n-1* layer *bond interface*, dan satu *heat spreader* diekspresikan:

$$R_{th,eq} = \sum_{i=1}^{n} \frac{t_{die,i}}{k_{die,i} \cdot A_i} + \sum_{j=1}^{n-1} \frac{t_{bond,j}}{k_{bond,j} \cdot A_j} + \frac{t_{TIM}}{k_{TIM} \cdot A_{TIM}} \tag{3}$$

dengan $t$ adalah tebal, $k$ konduktivitas termal, dan $A$ luas efektif. Temperatur *junction* maksimum:

$$T_j = T_a + P_{total} \cdot R_{th,eq} \tag{4}$$

Konskuensi langsungnya adalah setiap *decision* penempatan chiplet dalam *stack* memengaruhi $R_{th,eq}$ secara non-linear, sehingga *thermal solver* harus menjadi *first-class citizen* dalam algoritma PnR.

### 2.3 *Hybrid Bonding Pitch* dan Kepadatan Interkoneksi

Lau (2023) menurunkan hubungan densitas I/O terhadap *bond pitch* $p$ (µm):

$$I_{density} = \frac{1}{p^2} \quad [\text{I/O per cm}^2] \tag{5}$$

Untuk pitch 10 µm, $I_{density} = 10^6$ I/O/cm² (1 juta I/O/cm²). Untuk pitch 3 µm (state-of-the-art hybrid bonding Cu-Cu), $I_{density} \approx 1{,}11 \times 10^7$ I/O/cm², atau sekitar 11× lebih padat dibanding pitch 10 µm.

### 2.4 *Warpage* dan Mismatch Koefisien Ekspansi Termal (CTE)

Untuk struktur multi-die dengan substrat Si ($CTE_{Si} \approx 2{,}6$ ppm/K) yang diikat pada *interposer* atau *organic substrate* ($CTE_{sub} \approx 12$–$17$ ppm/K), *warpage* akibat *thermal cycling* mengikuti:

$$\Delta w = \int_{T_0}^{T_{max}} \frac{(\alpha_{sub} - \alpha_{Si}) \cdot \Delta T \cdot L^2}{8 \cdot t_{sub}} \, dT \tag{6}$$

dengan $L$ adalah dimensi *die*, $t_{sub}$ tebal substrat. Solusi EDA modern dari Roze dan Gerber (2026) mengintegrasikan persamaan (6) ke dalam *finite element analysis* (FEA) yang di-*coupled* dengan solver elektrik.

### 2.5 Biaya Total Kepemilikan (TCO) Multi-Die

*Total Cost of Ownership* untuk paket chiplet dibanding SoC monolitik dapat dimodelkan:

$$\text{TCO}_{chiplet} = \sum_{i=1}^{n}\left(NRE_i + C_{wafer,i} \cdot \frac{N_i}{Y_c}\right) + C_{assembly} + C_{test} \tag{7}$$

$$\text{TCO}_{SoC} = NRE_{mono} + C_{wafer,mono} \cdot \frac{N_{total}}{Y_{mono}} \tag{8}$$

Ambang ekonomis di mana chiplet mulai menguntungkan terjadi ketika $\text{TCO}_{chiplet} < \text{TCO}_{SoC}$, yang biasanya tercapai pada volume produksi $> 10^7$ unit dan area die efektif $> 400$ mm².

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) menyusun SOP desain chiplet 3D-IC yang dapat dirangkum dalam diagram alir berikut:

**Fase 1 – Spesifikasi Sistem & Partisi:**
1. Definisikan *use case*, target performa, dan *power budget*.
2. Partisi fungsional berdasarkan *IP availability*, *process node compatibility*, dan *thermal hotspot analysis*.
3. Tentukan *interface protocol* (UCIe, BoW, atau proprietari) antar chiplet.

**Fase 2 – Co-Design EDA:**
1. Jalankan *multi-physics solver* (listrik, termal, mekanis) secara *iterative*.
2. Lakukan *floorplanning* 3D dengan constraint pitch hybrid bonding.
3. Validasi *signal integrity* dan *power integrity* antar-die.

**Fase 3 – Manufaktur & Assembly:**
1. Fabrikasi chiplet pada *foundry* yang sesuai node-nya.
2. *Known-Good-Die* (KGD) *test* pada *wafer-level* (probing).
3. Eksekusi hybrid bonding Cu-Cu dengan target *pitch* ≤ 10 µm dan *alignment accuracy* ≤ ±200 nm.

**Fase 4 – Validasi & Reliability:**
1. *Pre-condition* (JEDEC JESD22-A104: -55°C sampai +125°C).
2. *High Temperature Storage* (HTS) dan *Temperature Humidity Bias* (THB).
3. Analisis *failure mode* menggunakan *dye-and-pry* atau *SAT (Scanning Acoustic Tomography)*.

Lau (2023) menekankan bahwa SOP hybrid bonding Cu-Cu mensyaratkan tiga prasyarat: (a) surface roughness Cu < 0,5 nm Ra; (b) kontaminasi partikel < 0,3 µm pada lingkungan *cleanroom* ISO 3; dan (c) *annealing* pada suhu 250–300°C selama 1–2 jam untuk mencapai *interfacial Cu-Cu grain growth*. Parameter-parameter ini kini dimasukkan ke dalam *process design kit* (PDK) yang didistribusikan oleh foundry ke integrator chiplet.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus: Desain Accelerator Chip AI 600 mm² Ekuivalen**

Misalkan sebuah perusahaan AI merancang *accelerator* dengan target luas silikon efektif 600 mm², node N3, *defect density* $D_0 = 0{,}05$ cm⁻², dan $\alpha = 2$. Menggunakan persamaan (1) untuk SoC monolitik 600 mm²:

$$Y_{mono} = \left(1 + \frac{0{,}05 \times 6}{2}\right)^{-2} = (1{,}15)^{-2} = 0{,}756$$

*Yield* monolitik ≈ 75,6%. Jika dipecah menjadi 4 chiplet @ 150 mm²:

$$Y_c = \left(1 + \frac{0{,}05 \times 1{,}5}{2}\right)^{-2} = (1{,}0375)^{-2} = 0{,}929$$

*Yield* sistem (asumsikan $Y_{bond}=0{,}97$):

$$Y_{sys} = 0{,}929^4 \times 0{,}97 = 0{,}744 \times 0{,}97 = 0{,}722$$

*Wait* — ini menunjukkan *yield* sistem turun! Fenomena ini menunjukkan bahwa partisi buta tanpa strategi *redundancy* tidak selalu optimal. Coba partisi ulang menjadi 6 chiplet @ 100 mm²:

$$Y_c = \left(1 + \frac{0{,}05 \times 1{,}0}{2}\right)^{-2} = (1{,}025)^{-2} = 0{,}952$$

$$Y_{sys} = 0{,}952^6 \times 0{,}97 = 0{,}737 \times 0{,}97 = 0{,}715$$

Terlihat masih di bawah monolitik karena $n$ yang besar. Solusi industri: tambahkan *redundant chiplet* + mekanisme *repair*. Misalnya 6 chiplet fungsional +