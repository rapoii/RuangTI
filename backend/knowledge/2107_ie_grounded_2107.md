# 2107 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hibrid Bonding Cu-Cu, dan Optimasi Manufaktur Lintas Rantai Pasok Semikonduktor

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global berada di persimpangan kritis antara batas fisika penskalaan node planar dan ledakan permintaan akan komputasi heterogen berbasis AI, HPC, serta edge inference. Setelah hampir lima dekade hukum Moore menjadi kompas strategis, biaya rekayasa untuk fabrikasi monolitik sub-3 nm melonjak secara eksponensial—estimasi biaya masker (mask set) tunggal melonjak dari sekitar USD 4–5 juta pada node 28 nm menjadi lebih dari USD 30–50 juta pada sub-3 nm menurut berbagai laporan industri (IRDS, IEEE EDS). Dalam konteks inilah paradigma chiplet dan *3D-IC* muncul bukan sebagai pilihan teknologi, melainkan sebagai keniscayaan strategis. Roze dan Gerber (2026) dalam papernya di *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*, dengan DOI [10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563), secara eksplisit menegaskan bahwa solusi EDA (*Electronic Design Automation*) yang dirancang khusus untuk arsitektur chiplet dan 3D-IC menjadi tulang punggung transisi tersebut.

Urgensi operasional perspektif *industrial engineering* pada topik ini bersifat multi-dimensi. Pertama, dimensi *throughput* desain: siklus *tape-out* tradisional 24–36 bulan tidak lagi kompatibel dengan siklus hidup produk AI yang kini mendekati 12–18 bulan. Kedua, dimensi *yield* manufaktur: pendekatan *known-good-die* (KGD) pada level chiplet menuntut metodologi verifikasi yang berbeda dari SoC monolitik, karena defect sebuah chiplet dapat mengkontaminasi paket 3D-IC utuh. Ketiga, dimensi *cost-of-ownership* rantai pasok: model bisnis disagregasi (fabless, foundry, OSAT, chiplet vendor) menuntut orkestrasi EDA lintas domain IP yang sebelumnya tidak diperlukan. Lau (2023) dalam *Chiplet Design and Heterogeneous Integration Packaging*, DOI [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6), menekankan bahwa *Cu-Cu hybrid bonding*—dengan pitch koneksi turun ke 3 µm bahkan sub-1 µm—menjadi enabler utama densitas I/O per mm² yang melampaui batas solder-bump konvensional (sekitar 100–200 I/O per mm² pada microbump).

Dari perspektif sistem industri, integrasi heterogen menggeser *bottleneck* dari fabrikasi wafer ke orkestrasi *package* dan ko-verifikasi multi-die. Kenaikan thermal design power (TDP) per paket hingga 700 W–1000 W pada akselerator AI generasi terbaru memaksa perancang EDA untuk memasukkan *thermal-aware floorplanning*, *signal integrity* lintas-stacking, dan *power delivery network* simultan dalam satu *closed-loop optimization*. Tanpa kerangka EDA yang koheren, biaya NRE (*non-recurring engineering*) untuk satu tape-out 3D-IC dapat melampaui USD 100 juta, menghambat partisipasi pelaku industri menengah dan menciptakan *market concentration risk* pada hanya 3–5 vendor global. Konteks inilah yang menjadikan kontribusi Roze & Gerber (2026) sangat relevan bagi komunitas teknik industri yang berkepentingan pada optimasi proses, kapasitas fab, dan tata kelola rantai pasok semikonduktor.

## 2. Landasan Teori & Formulasi Matematis

Kerangka EDA untuk desain chiplet dan 3D-IC memerlukan formulasi yang menggabungkan tiga ranah optimasi simultan: keandalan termal, integritas sinyal, dan *manufacturing yield*. Pendekatan formal dimulai dari model *negative binomial* untuk yield majemuk (*stacked-die yield*). Jika yield masing-masing die dalam tumpukan adalah $Y_i$ dan probabilitas clustering defect mengikuti parameter $\alpha$, maka yield total paket 3D-IC dengan $n$ die dapat dinyatakan:

$$Y_{3D} = \prod_{i=1}^{n} Y_i = \prod_{i=1}^{n} \left(1 + \frac{D_i A_i}{\alpha}\right)^{-\alpha}$$

dengan $D_i$ adalah densitas cacat per cm² die ke-$i$, dan $A_i$ adalah luas aktif die tersebut. Roze & Gerber (2026) menggarisbawahi bahwa EDA modern harus memasukkan *stochastic yield estimation* ini sejak fase *RTL synthesis*, bukan sebagai post-processing setelah tape-out.

Untuk analisis termal, persamaan *thermal resistance* lapisan Cu-Cu hybrid bonding dapat dimodelkan sebagai resistansi konduksi satu dimensi pada antarmuka:

$$R_{th} = \frac{t_{b}}{k_{Cu} \cdot A_{eff}} + R_{interface}$$

dengan $t_b$ adalah tebal efektif *bond layer* (orde 0,5–2 µm pada Cu-Cu hybrid bonding menurut Lau, 2023), $k_{Cu} \approx 401$ W/m·K adalah konduktivitas termal tembaga, $A_{eff}$ adalah area *overlap* efektif antar die, dan $R_{interface}$ adalah resistansi kontak termal yang sangat rendah (< 0,5 mm²·K/W) pada hybrid bonding dibanding solder joint (≈ 1–3 mm²·K/W). Formulasi ini menentukan apakah strategi pendinginan *passive heatsink* cukup atau diperlukan *active liquid cooling*—sebuah keputusan desain yang berdampak langsung pada *bill of materials* dan *assembly cost*.

Integritas sinyal pada interkoneksi hybrid bonding dimodelkan melalui *insertion loss* dan *crosstalk*:

$$S_{21}(f) = e^{-\gamma(f) \cdot \ell}, \quad \gamma(f) = \sqrt{(R + j\omega L)(G + j\omega C)}$$

dengan $\gamma$ adalah konstanta propagasi, $\ell$ panjang jejak, dan parameter R, L, G, C merupakan resistansi, induktansi, konduktansi, dan kapasitansi per satuan panjang yang bergantung pada geometri RDL (*redistribution layer*). Roze & Gerber (2026) menekankan bahwa pada pitch Cu-Cu di bawah 3 µm, efek *skin effect* dan *proximity loss* mendominasi di atas 28 GHz, sehingga simulator EDA harus menyelesaikan *full-wave EM extraction* pada setiap *bump*—sebuah beban komputasional yang memerlukan kompromi antara akurasi dan runtime.

Formulasi optimasi lintas-domain yang relevan bagi *industrial engineer* dapat dinyatakan sebagai masalah *multi-objective function*:

$$\min_{x \in \mathcal{X}} \left[ f_1(x), f_2(x), f_3(x) \right] = \left[ -Y_{3D}(x),\ R_{th}(x),\ C_{pkg}(x) \right]$$

dengan $x$ merepresentasikan variabel keputusan (pitch bonding, jumlah die, topologi stacking), dan $\mathcal{X}$ adalah *feasible design space* yang dibatasi aturan DRC (*design rule check*). Solusi Pareto-frontier dari formulasi ini menjadi dasar rekomendasi arsitektur yang disampaikan EDA toolchain modern.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis EDA chiplet mengikuti alur yang dapat distandarkan sebagai SOP tujuh tahap. Tahap pertama adalah *system-level partitioning*, di mana arsitek produk menentukan disagregasi fungsional—misalnya memisahkan chiplet CPU, GPU, IO, dan HBM—berdasarkan *throughput requirement*, *thermal envelope*, dan *yield projection* per blok. Tahap kedua, *chiplet interface protocol selection*, mengacu pada standar terbuka seperti UCIe (*Universal Chiplet Interconnect Express*) yang mendefinisikan parameter PHY, protokol, dan kompatibilitas paket pada pitch 25–55 µm (standar UCIe 1.1, 2024), atau BoW (*Bunch of Wires*) untuk aplikasi tertentu. Lau (2023) mendokumentasikan bahwa *bump pitch* menjadi variabel desain yang menentukan *trade-off* antara densitas I/O dan kompleksitas fabrikasi.

Tahap ketiga adalah *co-design and floorplanning* yang simultan menangani *signal integrity*, *power integrity*, dan *thermal* dalam satu *iterative loop*. Roze & Gerber (2026) menjelaskan bahwa platform EDA mutakhir mengintegrasikan *multi-physics solver* dengan optimasi heuristik (genetic algorithm, simulated annealing) untuk mengeksplorasi ribuan konfigurasi stacking per jam komputasi. Tahap keempat, *physical implementation* per chiplet, dilakukan dengan placer-router konvensional namun dengan *library* yang sudah *chiplet-aware*—yakni *cell library* yang telah di-*characterize* untuk interoperabilitas dengan *chiplet* lain. Tahap kelima, *3D-stacking DRC/LVS*, melakukan verifikasi *design rule* khusus hybrid bonding (coplanarity < 50 nm, dishing < 10 nm).

Tahap keenam adalah *manufacturing handoff*, termasuk *GDSII* atau *OASIS* per chiplet, file *bonding diagram*, dan *stacking recipe* untuk OSAT. Tahap ketujuh, *post-silicon validation*, mencakup *known-good-die test* pra-stacking, *interconnect continuity test* (dengan boundary scan dan BIST), dan *burn-in* yang telah di-redesign untuk paket 3D-IC. Diagram alirnya secara ringkas:

```
[Partisi Sistem] → [Pilihan Protokol] → [Co-Design SI/PI/Thermal]
        ↓                                       ↓
[Impl. Fisik per Chiplet] ← [Library Chiplet-Aware]
        ↓
[3D DRC/LVS] → [Handoff Manufaktur] → [Validasi Post-Silicon]
```

Dalam konteks SOP industri, setiap tahap memiliki *gate review* dengan metrik kuantitatif: misalnya pada tahap co-design, target *insertion loss* < 3 dB pada frekuensi Nyquist dan *junction temperature* < 85°C pada *worst-case workload*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Pertimbangkan desain paket 3D-IC hipotetis untuk akselerator AI yang terdiri dari empat chiplet: dua compute die (luas $A_1 = A_2 = 100$ mm²) dan dua HBM base die ($A_3 = A_4 = 80$ mm²), dengan densitas cacat masing-masing $D_1 = D_2 = 0{,}08$ cacat/cm² (node 5 nm) dan $D_3 = D_4 = 0{,}03$ cacat/cm² (node 12 nm), serta parameter clustering $\alpha = 3$ yang khas untuk fab mature.

**Langkah 1: Hitung yield per chiplet menggunakan model negative binomial.**

$$Y_1 = \left(1 + \frac{0{,}08 \times 1{,}00}{3}\right)^{-3} = \left(1 + 0{,}0267\right)^{-3} = (1{,}0267)^{-3} \approx 0{,}9234$$

Dengan cara yang sama:
- $Y_2 \approx 0{,}9234$
- $Y_3 = \left(1 + \frac{0{,}03 \times 0{,}80}{3}\right)^{-3} = (1{,}0080)^{-3} \approx 0{,}9762$
- $Y_4 \approx 0{,}9762$

**Langkah 2: Hitung yield paket 3D-IC majemuk.**

$$Y_{3D} = 0{,}9234^2 \times 0{,}9762^2 \approx 0{,}8525 \times 0{,}9530 \approx 0{,}8124$$

Artinya hanya sekitar **81,24%** paket yang lolos seluruh proses—skenario ini menggarisbawahi pentingnya strategi *redund