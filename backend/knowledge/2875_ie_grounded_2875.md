# 2875 — Perancangan Otomasi Desain Elektronik (EDA) untuk Arsitektur Chiplet dan 3D-IC serta Integrasi Hybrid Bonding Cu-Cu

**Domain:** Teknik Industri & Rekayasa Sistem Industri (Fokus: Manufaktur Semikonduktor Lanjut dan Integrasi Heterogen)
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *EDA Solution for Chiplet and 3D-IC Design*. 2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS). DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Cu-Cu Hybrid Bonding*, dalam *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global berada di persimpangan kritis antara batas fisik penskalaan planar CMOS (yang mendekati atomik pada node 2 nm/1,4 nm) dan ledakan permintaan akan komputasi heterogen berbasis kecerdasan buatan (AI), high-performance computing (HPC), serta aplikasi edge dengan konsumsi daya rendah. Menurut Roze dan Gerber (2026) dalam prosiding *ICEP-HBS*, arsitektur *chiplet* dan *three-dimensional integrated circuit* (3D-IC) bukan lagi sekadar opsi alternatif, melainkan telah menjadi *baseline* strategis bagi *fabless*, *foundry*, dan integrator sistem berskala besar. Artikel tersebut menekankan bahwa solusi EDA (*Electronic Design Automation*) yang konvensional —yang dirancang untuk *monolithic system-on-chip* (SoC)— tidak lagi mampu mengakomodasi tiga dimensi keputusan desain secara simultan: partisi fungsional lintas *die*, integritas mekanik tumpukan, dan ko-optimasi lintas-domain (listrik-termal-manufaktur). Roze dan Gerber (2026) menunjukkan bahwa *toolchain* EDA modern harus mencakup modul *floor planning* berbasis *machine learning*, *multi-physics co-simulation*, dan verifikasi *die-to-die* (D2D) interface berstandar UCIe, BoW, atau Bunch of Wires (BOW).

Secara paralel, Lau (2023) dalam monograph *Chiplet Design and Heterogeneous Integration Packaging* menyoroti bahwa keberhasilan integrasi heterogen sangat ditentukan oleh kualitas proses *Cu-Cu hybrid bonding*, yaitu teknik metallurgi solid-state yang menggabungkan dua permukaan tembaga nano-struktur pada suhu relatif rendah (200–400°C) dengan *pitch* interkoneksi yang telah mencapai 3 µm (dengan target sub-1 µm dalam roadmap IRDS 2024). Lau (2023) menekankan bahwa hybrid bonding menggantikan *micro-bump* soldering yang memiliki keterbatasan pada densitas I/O per mm² dan *interconnect pitch* minimum ~40 µm.

Urgensi operasional dan teknis modul ini dalam konteks Teknik Industri adalah multi-dimensional:
1. **Efisiensi biaya dan waktu** — *Time-to-yield* dari proses desain tape-out sampai *high-volume manufacturing* (HVM) berkurang signifikan bila platform EDA mendukung *predictive yield modeling* sejak fase *architecture exploration*.
2. **Manajemen rantai pasok multi-vendor** — desain chiplet memerlukan interoperabilitas antar *intellectual property* (IP) blok dari vendor berbeda, sehingga dibutuhkan *standard interface* dan verifikasi otomatis.
3. **Keberlanjutan lingkungan** — perpindahan dari *monolithic die* besar ke *multi-die integration* menurunkan *carbon footprint* per transistor melalui peningkatan *yield* dan pengurangan *wafer scrap* (Roze & Gerber, 2026).

Tanpa platform EDA yang matang dan proses bonding yang terstandardisasi, biaya rekayasa ulang (re-spin) dapat melebihi USD 10 juta per iterasi pada node先进 (≤3 nm). Modul ini akan membedah aspek rekayasa sistem industri dari kedua pilar tersebut secara kuantitatif.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Model Hasil Produksi (Yield) untuk Multi-Die Assembly

Roze dan Gerber (2026) mengadopsi perluasan model **Murphy** untuk memperkirakan *assembly yield* sistem multi-komponen. Untuk sebuah paket yang terdiri dari $N$ *chiplet* independen dengan *defect density* $D$ dan luas area kritis $A_i$ untuk chiplet ke-$i$, yield paket total diberikan oleh:

$$Y_{\text{assembly}} = \prod_{i=1}^{N} Y_i = \prod_{i=1}^{N} \left[ \frac{1 - \exp(-D \cdot A_i)}{D \cdot A_i} \right]$$

Jika kita menggunakan model **negative binomial** (lebih akurat untuk cacat *clustered* pada wafer besar):

$$Y_i = \left( 1 + \frac{D \cdot A_i}{\alpha} \right)^{-\alpha}$$

dengan $\alpha$ adalah *clustering parameter* (umumnya $\alpha \in [0.5, 4]$ untuk proses CMOS maju).

### 2.2. Resistansi Termal Tumpukan 3D-IC

Lau (2023) membahas model resistansi termal ekuivalen untuk tumpukan 3D-IC yang terdiri dari beberapa *die* dan *thermal interface material* (TIM). Untuk satu *die* ke-$i$ dengan konduktivitas termal efektif $k_i$, tebal $t_i$, dan luas area panas $A$:

$$R_{\text{th},i} = \frac{t_i}{k_i \cdot A}$$

Untuk tumpukan seri dari $N$ *die* dengan TIM di antaranya, resistansi total:

$$R_{\text{th,total}} = \sum_{i=1}^{N} \frac{t_i}{k_i \cdot A} + \sum_{j=1}^{N-1} R_{\text{TIM},j}$$

dengan $R_{\text{TIM},j} = \dfrac{\text{BLT}_j}{k_{\text{TIM},j} \cdot A}$, di mana BLT = *bond line thickness*.

### 2.3. Kapasitansi dan Induktansi Die-to-Die Interface

Untuk *interconnect* hybrid bonding dengan *pitch* $p$, panjang $L$, lebar $w$, dan jarak ke *ground plane* $h$ dengan dielektrik permitivitas relatif $\varepsilon_r$, kapasitansi parasitik per unit panjang:

$$C_{\text{line}} = \varepsilon_0 \varepsilon_r \frac{w}{h} \quad [\text{F/m}]$$

Induktansi loop untuk *signal-ground* configuration:

$$L_{\text{loop}} \approx \frac{\mu_0}{\pi} \ln\left( \frac{2h}{w} \right) \quad [\text{H/m}]$$

Waktu propagasi (delay) untuk *transmission line* panjang $l$:

$$\tau_{\text{prop}} = l \cdot \sqrt{L_{\text{loop}} \cdot C_{\text{line}}}$$

Roze dan Gerber (2026) menekankan bahwa pada *pitch* < 5 µm, parasitic coupling antar saluran dominan, sehingga perlu digunakan model diferensial *coupled microstrip* dengan matriks kapasitansi $[C_{ij}]$ berukuran $(n \times n)$ untuk $n$ saluran.

### 2.4. Model Biaya Total Kepemilikan (TCO) Heterogen

Cost-per-good-die untuk integrasi heterogen, menurut Lau (2023):

$$C_{\text{good-die}} = \frac{C_{\text{wafer}} + N_{\text{die}} \cdot C_{\text{pkg}} + C_{\text{hybrid bonding}}}{Y_{\text{assembly}} \cdot N_{\text{good-die}}}$$

dengan $C_{\text{pkg}}$ mencakup biaya *underfill*, *substrate*, dan *known-good-die* (KGD) testing.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Arsitektur EDA Solution untuk Chiplet (Roze & Gerber, 2026)

Proses desain chiplet mengikuti *framework* 7-tahap berikut:

**Tahap 1 — System Partitioning & Interface Specification:**
Definisikan partisi fungsional (logika, memori, I/O, RF, analog) menjadi blok chiplet. Setiap antarmuka D2D harus memenuhi standar **UCIe** (Universal Chiplet Interconnect Express) dengan parameter: *bandwidth density* ≥ 1 Tb/s/mm, *energy efficiency* < 0.5 pJ/bit, dan latensi < 2 ns.

**Tahap 2 — Multi-Die Floor Planning:**
Tool EDA modern menggunakan algoritma **simulated annealing** atau **reinforcement learning** untuk menentukan posisi optimal chiplet di atas *interposer* atau *organic substrate* dengan tujuan meminimalkan panjang *interconnect*, hotspot termal, dan *signal skew*. Fungsi objektif:

$$\min_{x,y} \left\{ \alpha \sum_{e \in E} w_e \cdot d_e(x,y) + \beta \cdot T_{\max}(x,y) + \gamma \cdot \text{Skew}(x,y) \right\}$$

dengan $w_e$ bobot edge, $d_e$ jarak Manhattan, dan $\alpha,\beta,\gamma$ koefisien bobot.

**Tahap 3 — Physical Implementation per Chiplet:**
Setiap chiplet melewati *RTL-to-GDSII* flow independen menggunakan *technology node* yang mungkin berbeda (misalnya 3 nm untuk logik, 7 nm untuk I/O, 22 nm untuk analog).

**Tahap 4 — TSV/μ-bump/Hybrid Bonding Planning:**
Roze dan Gerber (2026) menunjukkan bahwa pada *pitch* < 10 µm, *through-silicon via* (TSV) harus dirancang paralel dengan *power delivery network* (PDN) untuk menghindari *IR-drop* berlebihan.

**Tahap 5 — Multi-Physics Co-Simulation:**
Integrasi simultan **electrical** (SPICE/EM solver), **thermal** (finite element analysis), **mechanical** (stress warpage), dan **reliability** (electromigration, TDDB).

**Tahap 6 — Verification & Sign-off:**
Verifikasi formal, *static timing analysis* (STA) multi-korner/multi-mode, DRC/LVS per chiplet, dan *assembly-level* sign-off.

**Tahap 7 — Tape-out & Pilot Production:**
Pilot line volume rendah (10–100 unit) untuk validasi manufaktur, dilanjutkan *ramp-up* HVM.

### 3.2. SOP Proses Cu-Cu Hybrid Bonding (Lau, 2023)

1. **Surface Preparation** — *Chemical-mechanical polishing* (CMP) hingga kekasaran $R_a < 0.5$ nm; *plasma activation* dengan gas N₂/H₂ pada suhu ruang.
2. **Alignment & Pre-Bonding** — Akurasi alignment < ±200 nm pada level wafer; pre-bonding pada suhu ruang dengan gaya 1–5 kN untuk seluruh wafer 300 mm.
3. **Annealing** — Pemanasan 200–400°C selama 30–60 menit dalam atmosfer inert N₂ untuk difusi dan rekristalisasi Cu.
4. **Inspection** — *Scanning acoustic microscopy* (SAM), *X-ray*, atau *cross-section FIB-SEM* untuk verifikasi *bonding interface quality*.
5. **Test & Reliability** — *Thermal cycling* (-55°C sampai +125°C, 1000 siklus), *high-temperature storage* (150°C, 1000 jam), *HAST* (Highly Accelerated Stress Test).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Studi Kasus A: Yield Comparison Monolithic vs Chiplet

**Skenario:** Sebuah akselerator AI dirancang sebagai monolithic SoC 400 mm² pada node 3 nm, atau sebagai sistem 4 chiplet masing-masing 100 mm² pada node 3 nm (logik) + 1 chiplet SRAM 100 mm² pada node 5 nm.

**Input parameter:**
- $D$ (defect density) untuk node 3 nm: $D_3 = 0.012 \text{ cacat/cm}^2$ (asumsi hipotetis berdasarkan data industri publik)
- $D$ untuk node 5 nm: