# 1771 — Solusi EDA untuk Desain Chiplet dan Sirkuit Terintegrasi 3-Dimensi (3D-IC): Integrasi Heterogen, Hibrid Bonding Cu-Cu, dan Otomasi Rancang-Bangun Elektronika Modern

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global sedang mengalami transisi paradigma yang fundamental, berpindah dari arsitektur System-on-Chip (SoC) monolitik menuju paradigma System-in-Package (SiP) berbasis *chiplet* dan integrasi tiga-dimensi (3D-IC). Pergeseran ini dipicu oleh berakhirnya hukum Moore tradisional pada node proses sub-3 nm, di mana peningkatan kinerja melalui penyusutan transistor murni tidak lagi mampu mengimbangi pertumbuhan biaya fabrikasi secara eksponensial. Roze dan Gerber (2026), dalam naskah yang dipublikasikan di *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)* dengan DOI [10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563), menegaskan bahwa solusi Electronic Design Automation (EDA) untuk desain chiplet dan 3D-IC kini menjadi *critical enabler* yang menentukan kelayakan ekonomi seluruh rantai pasok semikonduktor.

Urgensi operasional dari perspektif Teknik Industri dapat diukur melalui beberapa parameter kunci. Pertama, *design partitioning complexity* — yaitu proses dekomposisi arsitektur SoC menjadi beberapa *chiplet* domain-spesifik (CPU, GPU, I/O, memori HBM) — memerlukan metodologi optimasi lintas-domain yang tidak dimiliki oleh *tool* EDA konvensional. Kedua, *hybrid bonding* Cu-Cu dengan pitch sub-10 μm (sebagaimana diuraikan oleh John H. Lau dalam *Chiplet Design and Heterogeneous Integration Packaging*, DOI [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6), 2023) menuntut toleransi alignment dalam orde ±200 nm, yang secara langsung mempengaruhi *die yield* dan *cost-per-good-die*. Ketiga, latensi verifikasi *physical-layout* meningkat secara non-linier dengan jumlah *bump* inter-koneksi, menciptakan *bottleneck* Time-to-Market yang signifikan bagi pelaku industri seperti TSMC, Intel Foundry, AMD, dan NVIDIA.

Aspek ekonomi tidak kalah strategis. Pasar chiplet global diproyeksikan mencapai USD 110 miliar pada 2030, dengan CAGR >40%. Bagi seorang industrial engineer, hal ini bukan sekadar persoalan kelistrikan, melainkan masalah optimasi multi-objektif: minimalisasi biaya produksi per-unit, maksimasi *throughput* lini *wafer-level packaging*, mitigasi risiko *yield loss*, dan pengelolaan *supply chain* lintas-yurisdiksi (misalnya fab di Taiwan, packaging di Korea Selatan, dan assembly akhir di Meksiko atau Vietnam). Konteks inilah yang menjadikan pengembangan solusi EDA khusus chiplet/3D-IC bukan hanya tantangan rekayasa elektro, melainkan isu *industrial systems engineering* yang membutuhkan pendekatan holistik.

## 2. Landasan Teori & Formulasi Matematis

Perancangan solusi EDA untuk chiplet dan 3D-IC memerlukan beberapa model matematis fundamental yang menjadi tulang punggung optimasi desain. Roze dan Gerber (2026) mengidentifikasi empat pilar formulasi yang relevan.

**Model 1: Yield Gabungan (Composite Yield) untuk Multi-Chiplet System.** Dalam integrasi heterogen, yield total bukan sekadar perkalian yield individual, melainkan dimodulasi oleh interaksi *known-good-die* (KGD) dan keandalan *bump interconnect*. Formulasi dasar mengikuti persamaan:

$$Y_{total} = \prod_{i=1}^{n} Y_{chiplet,i} \cdot Y_{bonding}$$

dengan $Y_{chiplet,i}$ adalah yield fabrikasi chiplet ke-$i$, dan $Y_{bonding}$ adalah yield proses hybrid bonding yang dapat dimodelkan sebagai:

$$Y_{bonding} = \exp\left(-\lambda \cdot N_{bump} \cdot A_{die}\right)$$

di mana $\lambda$ adalah laju cacat per satuan luas ($\text{defects/cm}^2$), $N_{bump}$ adalah jumlah interkoneksi, dan $A_{die}$ adalah luas efektif die. Model ini mengajarkan bahwa penambahan satu chiplet dalam paket 3D-IC akan menurunkan yield eksponensial jika jumlah bump meningkat signifikan.

**Model 2: Resistansi Termal Setara pada Stack 3D.** Distribusi panas dalam stack 3D-IC dimodelkan oleh resistansi termal ekivalen (Lau, 2023):

$$\theta_{JA} = \theta_{JC} + \theta_{TIM} + \theta_{HS}$$

dengan $\theta_{JC}$ adalah resistansi junction-to-case, $\theta_{TIM}$ resistansi *thermal interface material*, dan $\theta_{HS}$ resistansi *heat sink*. Untuk stack $n$-lapis dengan vias tembaga (TSV), pendekatan resistansi termal kumulatif adalah:

$$\theta_{stack} = \sum_{k=1}^{n} \frac{t_k}{k_k \cdot A_k}$$

di mana $t_k$ adalah ketebalan lapisan ke-$k$, $k_k$ konduktivitas termal material, dan $A_k$ luas penampang efektif. Pada hybrid bonding Cu-Cu dengan pitch 10 μm, kontribusi TSV terhadap disipasi termal menjadi dominan dan harus dimasukkan dalam *thermal-aware floorplanning*.

**Model 3: Optimasi Lintas-Domain (Cross-Domain Co-Optimization).** Fungsi objektif EDA modern untuk chiplet dapat diformulasikan sebagai:

$$\min_{x \in \mathcal{X}} f(x) = w_1 \cdot C(x) + w_2 \cdot T(x) + w_3 \cdot P(x) - w_4 \cdot R(x)$$

dengan $C(x)$ biaya manufaktur, $T(x)$ waktu eksekusi (latency), $P(x)$ disipasi daya, $R(x)$ keandalan (*reliability*), dan bobot $w_i$ merepresentasikan preferensi *stakeholder* rekayasa. Ruang solusi $\mathcal{X}$ mencakup variabel diskrit (jumlah chiplet, pitch bump) dan kontinu (luas die, jumlah TSV).

**Model 4: Throughput Lini Hybrid Bonding.** Kapasitas produksi die bonder dimodelkan melalui:

$$Q = \frac{3600 \cdot N_{tool}}{T_{cycle} \cdot (1 + \alpha_{rework})}$$

di mana $Q$ adalah throughput (unit/jam), $N_{tool}$ jumlah paralel *tool*, $T_{cycle}$ waktu siklus per-bond (detik), dan $\alpha_{rework}$ faktor rework.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) mengusulkan kerangka SOP berlapis untuk implementasi EDA chiplet dalam流水线 industri. Prosedur ini secara garis besar terbagi menjadi enam tahap:

**Tahap 1 — System-Level Partitioning.** Dilakukan dekomposisi arsitektur sistem menggunakan algoritma *min-cut partitioning* dengan constraint termal, sinyal-kecepatan, dan biaya IP. Input: spesifikasi fungsional dan *power-performance-area (PPA)* target. Output: blueprint multi-die.

**Tahap 2 — Chiplet IP Selection & KGD Testing.** Setiap chiplet diverifikasi sebagai *Known-Good-Die* melalui *burn-in test*, *boundary scan*, dan *functional pattern test*. KGD adalah prasyarat absolut untuk mencegah yield loss kaskade.

**Tahap 3 — Physical Layout & TSV Planning.** *Floorplanning* 3D dilakukan dengan memperhitungkan posisi TSV, pitch hybrid bonding, dan *redistribution layer* (RDL). Tools EDA melakukan verifikasi *Design Rule Check* (DRC) dan *Layout-versus-Schematic* (LVS) pada tingkat multi-die.

**Tahap 4 — Hybrid Bonding Process Definition.** Berdasarkan Lau (2023), parameter proses critical meliputi: suhu bonding ($T_b \in [200°C, 400°C]$), tekanan ($P_b \in [50–150 \text{ MPa}]$), waktu dwell ($t_d \in [30–600 \text{ s}]$), dan tingkat vakum ($\leq 10^{-3} \text{ Pa}$). Standar industri mengikuti SEMI Standards dan JEDEC JESD22 untuk keandalan.

**Tahap 5 — Multi-Physics Verification.** Simulasi coupled electro-thermal-mechanical dilakukan untuk memvalidasi integritas struktur di bawah *thermal cycling* (-55°C hingga +125°C) dan *stress* mekanis.

**Tahap 6 — Yield Prediction & Cost Modeling.** Iterasi蒙特卡洛 dengan 10.000+ run dilakukan untuk memprediksi yield, sebelum masuk ke fase *tape-out*.

Diagram alir proses mengikuti pola V-model: setiap tahap desain di-validasi oleh tahapan verifikasi sebelum *physical sign-off*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Sebuah perusahaan desain semikonduktor (misalnya seorang *fabless designer* di Taiwan) akan merancang paket 3D-IC dengan 4 chiplet: 1 CPU core (luas 100 mm², yield 92%), 1 GPU (200 mm², yield 85%), 1 HBM3 interface (50 mm², yield 95%), dan 1 I/O controller (80 mm², yield 90%). Setiap die akan menggunakan hybrid bonding Cu-Cu dengan pitch 10 μm dan jumlah bump rata-rata 50.000 per chiplet. Defect density proses bonding $\lambda = 0{,}5 \text{ cacat/cm}^2$, dan luas efektif die rata-rata $A_{die} = 1{,}5 \text{ cm}^2$.

**Langkah 1 — Hitung Yield Bonding:**

$$Y_{bonding} = \exp(-0{,}5 \cdot 50.000 \cdot 1{,}5) = \exp(-37.500)$$

Nilai ini terlalu kecil; diperlukan normalisasi atau asumsi *self-healing* pada hybrid bonding. Menggunakan model clustering (model Negatives Binomial) dengan klaster size $\alpha = 2$:

$$Y_{bonding} = \left(1 + \frac{\lambda \cdot A \cdot D_0^2}{\alpha}\right)^{-\alpha}$$

dengan $D_0$ = rata-rata defect clustering factor. Misal $D_0 = 0{,}3$:

$$Y_{bonding} = \left(1 + \frac{0{,}5 \cdot 1{,}5 \cdot 0{,}3^2}{2}\right)^{-2} = (1{,}03375)^{-2} \approx 0{,}936$$

**Langkah 2 — Hitung Yield Total:**

$$Y_{total} = (0{,}92 \cdot 0{,}85 \cdot 0{,}95 \cdot 0{,}90) \cdot 0{,}936$$
$$Y_{total} = 0{,}6686 \cdot 0{,}936 \approx 0{,}626$$

Artinya, hanya 62,6% paket 3D-IC yang lolos uji fungsional. Sisanya merupakan scrap yang harus diminimasi.

**Langkah 3 — Optimasi Biaya.** Misal biaya fabrikasi per chiplet: CPU = \$150, GPU = \$220, HBM = \$90, I/O = \$110. Biaya bonding per paket = \$80. Biaya pengujian KGD = \$30/chiplet. Total biaya per paket pra-yield = \$710. Biaya per *good package*:

$$C_{gp} = \frac{\sum C_i + C_{bonding} + n \cdot C_{KGD}}{Y_{total}} = \frac{570 + 80 + 120}{0{,}626} = \frac{770}{0{,}626} \approx \$1.230$$

**Langkah 4 — Analisis Sensitivitas Pitch.** Jika pitch dikurangi dari 10 μm ke 5 μm, jumlah bump naik menjadi 200.000/chiplet, menurunkan yield bonding menjadi sekitar 0,85 (efek dominasi cacat), sehingga yield total menjadi ~0,57 dan $C_{gp}$ naik menjadi ~\$1.350. Ini menunjukkan *trade-off* antara densitas I/O dan biaya per-unit.

**Interpretasi Manajerial:** Hasil ini menunjukkan bahwa peningkatan kompleksitas integrasi harus diimbangi dengan strategi KGD yang lebih ketat atau penggunaan *redundancy circuits* untuk menjaga yield di atas 80%. Dari sudut pandang *lean manufacturing*, setiap penurunan yield 5% menambah biaya produksi ~\$60/unit pada volume 1 juta unit/tahun, setara dengan \$60 juta overhead tahunan.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

**Evaluasi Kritis.** Solusi EDA yang diajukan Roze dan Gerber (2026) memiliki beberapa keterbatasan yang perlu dicermati. Pertama, model verifikasi multi-fisika masih memerlukan *computational runtime* yang tinggi (hingga 72 jam untuk paket 4-die), menghambat iterasi desain cepat yang menjadi kebutuhan Time-to-Market saat ini. Kedua, akurasi prediksi yield sangat bergantung pada data historis cacat (*defectivity library*) yang sering bersifat *proprietary* dan sulit