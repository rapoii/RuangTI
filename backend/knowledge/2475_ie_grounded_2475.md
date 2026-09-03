# 2475 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hybrid Bonding Cu-Cu, dan Optimasi Manufaktur Semikonduktor Lanjutan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global berada di titik infleksi strategis yang ditandai dengan berakhirnya efisiensi ekonomi dari hukum Moore tradisional dalam desain monolithic System-on-Chip (SoC). Pada node proses 3 nm ke bawah, biaya desain masker (mask set) melonjak melampaui USD 500 juta per desain (Roze & Gerber, 2026), sementara *yield* wafer turun secara eksponensial karena meningkatnya densitas cacat per sentimeter persegi. Sebagai respons terhadap tantangan ini, paradigma *heterogeneous integration* (HI) melalui arsitektur chiplet muncul sebagai strategi dominan yang diadopsi oleh seluruh rantai pasok semikonduktor — dari hyperscaler seperti AMD, Intel, NVIDIA, hingga pemain foundry TSMC dan Samsung.

Roze dan Gerber (2026) dalam makalahnya yang diterbitkan di *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)* mengidentifikasi bahwa kelemahan utama dalam adopsi chiplet bukan lagi terletak pada teknologi fabrikasi, melainkan pada kesiapan *Electronic Design Automation* (EDA). Platform EDA konvensional yang dibangun untuk SoC monolitik tidak memiliki *native support* untuk abstraksi fundamental chiplet, yaitu *partitioning*, *inter-chiplet interconnect planning*, *thermal co-design*, dan *3D stack verification*. Kesenjangan ini menciptakan *bottleneck* yang memanjang dari arsitektur produk hingga eksekusi manufaktur, dan berpotensi menimbulkan iterasi desain yang membuang USD 50–100 juta per tape-out gagal.

Secara bersamaan, Lau (2023) dalam buku *Chiplet Design and Heterogeneous Integration Packaging* menekankan bahwa Cu-Cu hybrid bonding telah menjadi *enabling technology* yang memungkinkan pitch interconnect sub-10 µm — bahkan hingga 3 µm — dengan resistansi kontak di bawah 5 mΩ per sambungan. Kombinasi antara kematangan hybrid bonding dan kematangan EDA chiplet menjadi pilar bagi ekonomi paket semikonduktor masa depan, di mana *bill of materials* (BoM) sebuah paket dapat terdiri dari 8–12 chiplet berbeda dari beberapa proses fabrikasi yang di-*stack* secara 3D.

Urgensi operasional dari perspektif Teknik Industri bersifat tiga dimensi: (1) **ekonomi biaya total kepemilikan (TCO)** yang memerlukan optimasi multi-fungsi objektif antara *yield*, throughput, dan waktu siklus desain; (2) **resiliensi rantai pasok** pasca-geopolitik yang menuntut orkestrator desain mampu mensubstitusi chiplet dari vendor berbeda tanpa redesign masif; (3) **kapasitas termal dan integritas sinyal** yang harus dimodelkan secara simultan untuk mencegah *thermal runaway* dan degradasi *eye diagram* pada frekuensi operasi di atas 100 GHz. Modul 2475 ini memposisikan diri sebagai kerangka integratif yang menjembatani literatur EDA mutakhir (Roze & Gerber, 2026) dengan landasan teknologi paket Lau (2023) untuk memberikan perspektif Teknik Industri yang presisi, terukur, dan *actionable* bagi ekosistem manufaktur semikonduktor.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Biaya Total Chiplet vs Monolitik

Untuk membenarkan keputusan arsitektur, biaya total per sistem die harus dimodelkan secara eksplisit. Roze dan Gerber (2026) merumuskan fungsi biaya total desain chiplet sebagai:

$$C_{total} = \sum_{i=1}^{N} \left( \frac{C_{mask,i} + C_{design,i}}{Y_i} \right) + C_{interconnect} + C_{assembly} + C_{test}$$

di mana $N$ adalah jumlah chiplet, $C_{mask,i}$ adalah biaya masker untuk chiplet ke-$i$, $C_{design,i}$ adalah biaya desain (engineering hours × loaded cost), $Y_i$ adalah *functional yield* chiplet ke-$i$, $C_{interconnect}$ adalah biaya fabrikasi *interposer* atau *bridge*, $C_{assembly}$ adalah biaya hybrid bonding/pick-and-place, dan $C_{test}$ adalah biaya Known-Good-Die (KGD).

Yield chiplet sendiri mengikuti model Poisson yang dimodifikasi:

$$Y_i = e^{-D_0 \cdot A_i}$$

dengan $D_0$ adalah densitas cacat (defect/cm²) dan $A_i$ adalah luas aktif chiplet ke-$i$ (cm²). Karena arsitektur chiplet memecah die monolitik besar menjadi sub-die kecil, luas turun secara kuadratik terhadap faktor partisi $k$, sehingga yield meningkat drastis.

### 2.2 Model Pitch dan Resistansi Hybrid Bonding

Lau (2023) menurunkan hubungan antara pitch hybrid bonding Cu-Cu ($p$ dalam µm) dan resistansi kontak ($R_c$) sebagai:

$$R_c = \frac{\rho_{Cu}}{2 \pi r_b} \cdot \ln\left(\frac{r_a}{r_b}\right) + \frac{\rho_{Cu} \cdot t_{bond}}{A_{bond}}$$

dengan $\rho_{Cu} = 1.68 \times 10^{-8}\ \Omega\cdot m$, $r_a$ radius efektif *current spreading*, $r_b$ radius *bond pad*, $t_{bond}$ tebal lapisan Cu bonded, dan $A_{bond} = \pi r_b^2$ luas kontak. Untuk pitch 3 µm dengan diameter pad 1,5 µm, $R_c$ tipikal turun ke ~3 mΩ — sebuah lompatan 50× dibandingkan microbump solder tradisional pada pitch 40–50 µm.

### 2.3 Model Termal 3D-IC

Resistansi termal paket 3D stack diberikan oleh jaringan RC termal:

$$\theta_{JA} = \theta_{jc,top} + \theta_{TIM} + \theta_{hs} + \theta_{sa}$$

Untuk stack $N$-lapis dengan rugi disipasi $P_i$ per chiplet, suhu junction chiplet ke-$k$ adalah:

$$T_{j,k} = T_{ambient} + \sum_{i=1}^{N} P_i \cdot \theta_{k \leftarrow i}$$

di mana $\theta_{k \leftarrow i}$ adalah resistansi termal dari sumber $i$ ke junction $k$. Matriks $\theta$ ini harus di-*co-extract* bersama dengan matriks impedansi listrik $Z(f)$ karena efek termo-mekanis CTE mismatch mengubah kopling panas-listrik.

### 2.4 Formulasi Optimasi Floorplan Chiplet

Roze dan Gerber (2026) memformalkan masalah partisi sebagai Integer Linear Program (ILP):

$$\min_{x_{ij}, y_i} \alpha \sum_{i} w_i h_i + \beta \sum_{e \in E} c_e \cdot d_e + \gamma \cdot \Delta T_{max}$$

$$\text{s.t.} \quad \sum_{j \in C_i} x_{ij} = 1, \quad \forall i \in V$$
$$x_{ij} \in \{0,1\}, \quad d_e = |x_e - y_e|$$

dengan $w_i, h_i$ dimensi chiplet, $c_e$ biaya interkoneksi per edge, $d_e$ panjang routing, dan $\Delta T_{max}$ gradien termal maksimum yang diizinkan. Bobot $\alpha, \beta, \gamma$ merepresentasikan trade-off antara area, latency, dan termal yang harus diset secara iteratif melalui Pareto analysis.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi desain chiplet 3D-IC di lingkungan industri mengikuti SOP 7-tahap yang distandardisasi oleh konsorsium EDA (Cadence, Synopsys, Siemens EDA) dan disitir oleh Roze & Gerber (2026):

**Tahap 1 — System-Level Partitioning.** Arsitek sistem mendefinisikan *use case*, throughput target, dan budget termal. Algoritma multi-objective partitioning (NSGA-II atau simulated annealing) digunakan untuk membagi RTL netlist menjadi cluster chiplet dengan target *aspect ratio* mendekati 1:1 untuk memaksimalkan yield wafer.

**Tahap 2 — Chiplet-Level RTL-to-GDSII.** Setiap sub-modul di-*synthesize*, *place-and-route* secara independen menggunakan library PDK spesifik (misal N5 untuk core, N28 untuk I/O). Pada tahap ini, *boundary scan chain* dan BIST di-insert untuk mendukung KGD testing.

**Tahap 3 — Inter-Chiplet Interface (ICI) Definition.** Standar terbuka seperti Universal Chiplet Interconnect Express (UCIe) atau BoW die-to-die dideklarasikan. Parameter kritis: lane rate (32 Gbps/lane), bump pitch, dan protokol PHY.

**Tahap 4 — Package Co-Design.** Integrasi substrate/interposer dirancang simultan dengan chiplet: routing pada interposer Si, RDL fan-out, dan letak micro-bump/hybrid bond pad. Roze & Gerber (2026) menekankan pentingnya *unified database* agar iterasi antara domain listrik, termal, dan mekanis terjadi dalam *single sign-off loop*.

**Tahap 5 — Thermal & Power Integrity Co-Simulation.** Simulasi termal transien (ANSYS Icepak, Cadence Celsius) digabung dengan simulasi daya untuk memastikan $T_j < 105°C$ pada workload puncak.

**Tahap 6 — Multi-Die Verification.** DRC, LVS, dan ERC dijalankan secara global untuk memastikan tidak ada crossing signal integrity violation lintas chiplet, termasuk verifikasi *signal bump* pitch rule pada hybrid bonding.

**Tahap 7 — Tape-out, Assembly & KGD Test.** Chiplet di-tape-out ke masing-masing fab, dirakit via TCB atau hybrid bonding, dan diuji di level paket sebelum integration final.

Diagram alir keseluruhan mengikuti pendekatan *shift-left*:

$$\text{System Spec} \rightarrow \text{Partition} \rightarrow \text{Chiplet PnR} \rightarrow \text{Pkg Co-Design} \rightarrow \text{Verify} \rightarrow \text{Tape-out} \rightarrow \text{Assembly}$$

Roze dan Gerber (2026) menunjukkan bahwa SOP ini, bila dipatuhi, memotong rata-rata 30% siklus verifikasi dibandingkan metode konvensional sequential.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario Kasus: Prosesor AI Hiperskala 3D

Sebuah perusahaan rancang-bangun ingin mengembangkan *AI accelerator* yang setara dengan monolithic 600 mm² pada node N3, namun dibagi menjadi 4 chiplet identik (GPU compute) ditambah 1 chiplet I/O, dikoneksi via *active interposer* 5 nm.

**Parameter input:**

| Parameter | Nilai |
|---|---|
| Luas monolitik $A_{mono}$ | 600 mm² |
| Jumlah chiplet $N$ | 5 |
| Luas per chiplet $A_i$ | 120 mm² (termasuk scribe) |
| Node proses | N3 (D0 = 0,08/cm²) |
| Biaya masker $C_{mask}$ | USD 540 juta |
| Biaya desain $C_{design}$ | USD 80 juta |
| Pitch hybrid bonding $p$ | 3 µm |
| Diameter Cu pad | 1,5 µm |
| Resistivitas Cu | 1,68 × 10⁻⁸ Ω·m |

### 4.2 Perhitungan Yield

**Yield monolitik:**
$$Y_{mono} = e^{-0{,}08 \times 6{,}0} = e^{-0{,}48} = 0{,}6188$$

**Yield per chiplet (120 mm² = 1,2 cm²):**
$$Y_i = e^{-0{,}08 \times 1{,}2} = e^{-0{,}096} = 0{,}9084$$

**Yield sistem chiplet** (asumsi assembly yield 99% per joint, 4 GPU):
$$Y_{sys} = Y_{chiplet}^5 \cdot Y_{assembly}^{4} = 0{,}9084^5 \cdot 0{,}99^4$$
$$= 0{,}6195 \cdot 0{,}9606 = 0{,}5951$$

**Efektif yield improvement** karena partisi: walau yield sistem sedikit lebih rendah, *effective area utilized* naik karena yield per chiplet meningkat signifikan — ini merupakan *yield leverage*.

### 4.3 Perhitungan Biaya Total

**Biaya per die monolitik (asumsi hanya 1 fab):**
$$C_{mono} = \frac{540 + 80}{0{,}6188} = \text{USD 1.001,6 juta per working die}$$

**Biaya per sistem chiplet (diperlukan 5 chiplet kerja, biaya interconnect+assembly = USD 25 juta, test = USD 10 juta):**
$$C_{chiplet,sys} = 5 \cdot \frac{540/5 + 80/5}{0{,}9084} + 25 + 10$$
$$= 5 \cdot \frac{108 + 16}{0