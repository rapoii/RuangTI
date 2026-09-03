# 2251 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hybrid Bonding Cu-Cu, dan Optimasi Rantai Pasok Semikonduktor

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global berada pada titik infleksi fundamental yang ditandai dengan berakhirnya era klasik *Moore's Law* dalam bentuk *node shrinkage* dua dimensi. Biaya fabrikasi untuk node proses 3 nm dan 2 nm telah melonjak melampaui ambang USD 20 miliar per fab (Roze & Gerber, 2026), sehingga *yield economics* tidak lagi mampu mempertahankan laju peningkatan transistor per dolar yang telah menopang industri selama lima dekade. Respons strategis terhadap keterbatasan ini adalah transisi paradigma dari desain *monolithic System-on-Chip* (SoC) menuju **heterogeneous integration** berbasis chiplet, di mana beberapa *die* khusus (compute, memory, I/O, analog/RF) di-*package* menjadi satu sistem koheren menggunakan teknik 3D-IC (Lau, 2023).

Menurut Ksenia Roze dan Mark Gerber (2026) dalam makalah yang disajikan pada *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium*, kompleksitas desain chiplet dan 3D-IC telah melampaui kemampuan metodologi *Electronic Design Automation* (EDA) konvensional yang awalnya dirancang untuk SoC monolitik. Permasalahan mendasar yang diidentifikasi mencakup: (i) kurangnya *abstraction layer* yang memadai untuk mengelola antarmuka *die-to-die*, (ii) kesulitan dalam melakukan *physical verification* lintas-die, (iii) ketidakmampuan *tools* konvensional untuk mengoptimasi *signal integrity*, *power integrity*, dan *thermal integrity* secara simultan pada tumpukan tiga dimensi, serta (iv) fragmentasi *workflow* antara *foundry*, *chiplet vendor*, dan *system integrator* (Roze & Gerber, 2026).

Urgensi operasional semakin diperkuat oleh proyeksi pasar chiplet global yang mencapai USD 82,6 miliar pada 2030 dengan CAGR 36,4%, didorong oleh aplikasi *high-performance computing* (HPC), *artificial intelligence* (AI) accelerator, dan *edge computing* (Lau, 2023). John H. Lau (2023) menekankan bahwa **Cu-Cu hybrid bonding** telah menjadi teknologi *enabler* utama karena menawarkan pitch interkoneksi sub-mikron (≤ 10 μm) yang tidak dapat dicapai oleh teknik *solder microbump* tradisional. Kepadatan interkoneksi yang tinggi ini menghasilkan *bandwidth density* antar-die yang krusial untuk aplikasi *memory-on-logic* dan *logic-on-logic* pada sistem AI modern.

Dari perspektif teknik industri, permasalahan ini bukan semata-mata persoalan teknologi, melainkan juga masalah **orkestrasi rantai pasok**, **koordinasi lintas-organisasi**, dan **optimalisasi total cost of ownership** (TCO). Sebuah *chiplet* yang dirancang oleh satu *vendor* haruslah dapat diverifikasi, dikarakterisasi, dan diintegrasikan dengan *chiplet* dari *vendor* lain dalam *package* yang dirancang oleh *integrator* ketiga. Tanpa kerangka kerja EDA yang *standard-compliant* dan *tool-agnostic*, fragmentasi ini akan menciptakan *defect propagation*, *yield loss* kumulatif, dan ketidakpastian *time-to-market*. Konteks inilah yang melatarbelakangi kebutuhan kritis akan solusi EDA holistik untuk desain chiplet dan 3D-IC (Roze & Gerber, 2026).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Resistansi Interkoneksi Cu-Cu Hybrid Bonding

Resistansi listrik dari sebuah *bump* Cu-Cu hybrid bonding merupakan fungsi dari geometri pad, resistivitas tembaga, dan kualitas antarmuka *bonding*. Resistansi DC untuk satu sambungan Cu-Cu diberikan oleh:

$$R_{bump} = \frac{\rho_{Cu} \cdot t_{Cu}}{A_{pad}} + R_{interface}$$

di mana $\rho_{Cu} = 1.68 \times 10^{-8} \, \Omega \cdot m$ adalah resistivitas bulk tembaga, $t_{Cu}$ adalah tebal *copper pad*, dan $A_{pad}$ adalah luas area *bonding*. Untuk pitch $p = 10 \, \mu m$ dan *pad* berbentuk bujur sangkar dengan rasio *under-bump metallization* (UBM) $\eta = 0.8$, maka:

$$A_{pad} = \eta \cdot p^2 = 0.8 \times (10 \times 10^{-6})^2 = 8 \times 10^{-11} \, m^2$$

Dengan $t_{Cu} = 5 \, \mu m$, resistansi teoritis minimum adalah $R_{bump} \approx 1.05 \times 10^{-3} \, \Omega$, yang mendekati target desain Lau (2023) untuk *memory interface*.

### 2.2 Kepadatan Bandwidth Antar-Die

*Bandwidth density* ($BD$) merupakan metrik kritis untuk arsitektur 3D-IC dan didefinisikan sebagai:

$$BD = \frac{N_{channels} \cdot f_{clk} \cdot W_{bus}}{A_{die}}$$

Untuk sebuah *stacked DRAM* dengan $N_{channels} = 1024$ *channel*, $f_{clk} = 3.2 \, GHz$, lebar bus $W_{bus} = 16$ bit, dan luas die $A_{die} = 100 \, mm^2$, maka $BD \approx 5.24 \, Tb/s/cm^2$. Nilai ini secara signifikan melampaui *bandwidth density* yang dapat dicapai oleh *through-silicon via* (TSV) konvensional pada rentang $0.5 - 1.0 \, Tb/s/cm^2$ (Roze & Gerber, 2026).

### 2.3 Model Resistansi Termal Tumpukan 3D

Distribusi termal pada tumpukan 3D-IC dimodelkan menggunakan jaringan resistansi termal:

$$R_{th,j-c} = \sum_{i=1}^{n} \frac{t_i}{k_i \cdot A_i}$$

di mana $t_i$ adalah tebal lapisan ke-$i$, $k_i$ adalah konduktivitas termal material, dan $A_i$ adalah luas efektif *heat spreading*. Untuk tumpukan empat-die dengan *interlayer* *thermal interface material* (TIM) setebal $20 \, \mu m$ dan $k_{TIM} = 3 \, W/m \cdot K$, tambahan resistansi termal dari satu lapisan TIM adalah:

$$\Delta R_{th,TIM} = \frac{20 \times 10^{-6}}{3 \times 100 \times 10^{-6}} = 0.067 \, K/W$$

### 2.4 Model Yield Komposit Multi-Die

Yield sistem (*system yield*) untuk integrasi multi-die mengikuti model *multiplicative yield*:

$$Y_{system} = \prod_{i=1}^{n} Y_i \cdot Y_{assembly}$$

Untuk sistem 8-die dengan $Y_i = 0.95$ (yield per-die setelah Known-Good-Die test) dan $Y_{assembly} = 0.98$, maka:

$$Y_{system} = 0.95^8 \times 0.98 = 0.6634 \times 0.98 = 0.6501$$

Nilai ini menunjukkan *yield loss* hampir 35% yang secara langsung berdampak pada *unit cost* (Lau, 2023).

### 2.5 Optimasi Trade-off Pitch vs. Yield

Trade-off antara pitch *bonding* dan yield dijelaskan oleh model *critical area*:

$$Y_{bond} = e^{-\lambda \cdot A_{critical}}$$

di mana $\lambda$ adalah *defect density* per satuan luas dan $A_{critical}$ adalah area sensitif terhadap *defect*. Untuk $A_{critical} \propto p^2$, pitch yang lebih kecil secara eksponensial menurunkan yield *bonding*, sehingga memerlukan *defect inspection* dan *redundancy* dalam desain EDA.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Solusi EDA End-to-End

Roze dan Gerber (2026) mengusulkan arsitektur EDA tiga-lapis untuk desain chiplet dan 3D-IC yang terdiri dari:

1. **Layer 1: Chiplet Abstraction & Virtual Prototyping** — Representasi digital standar dari masing-masing chiplet menggunakan format *interoperable* (misalnya Chiplet Interface Specification).
2. **Layer 2: Multi-Die Physical Implementation** — *Floorplanning*, *place-and-route*, dan *optimasi* lintas-die.
3. **Layer 3: System-Level Verification** — Validasi *signal integrity*, *power integrity*, *thermal*, dan *DFT* (Design-for-Test) pada tingkat sistem.

### 3.2 SOP Desain Chiplet Berbasis EDA

**Langkah 1: Spesifikasi Antarmuka Die-to-Die**

Definisikan protokol komunikasi (*UCIe*, *Bunch of Wires*, *OpenHBI*), target bandwidth, dan *budget* daya. Variabel kunci: *pitch* ($p$), *channel count* ($N$), *frequency* ($f$).

**Langkah 2: Validasi *Known-Good-Die* (KGD)**

Sebelum integrasi, setiap chiplet harus lulus *wafer-level burn-in* dan *final test*. Kriteria kelulusan: $Y_{KGD} \geq 0.95$.

**Langkah 3: Optimasi Floorplan 3D**

Gunakan algoritma *simulated annealing* atau *force-directed* untuk menentukan posisi optimal setiap die pada tumpukan dengan tujuan meminimalkan:

$$\min_{x,y,z} \left[ \alpha \cdot L_{wire} + \beta \cdot R_{th,j-c} + \gamma \cdot A_{total} \right]$$

**Langkah 4: Implementasi Hybrid Bonding**

Sesuai prosedur Lau (2023), tahapan *Cu-Cu hybrid bonding* meliputi:

1. Deposisi *Cu pad* dengan profil *dishing* terkontrol (< 30 nm).
2. Aktivasi permukaan dengan plasma N₂/H₂.
3. *Bonding* pada suhu 300–400°C dengan tekanan 50–100 MPa selama 30 menit.
4. *Post-bond anneal* pada suhu 350°C selama 60 menit untuk memperbaiki *Cu grain boundary diffusion*.

**Langkah 5: System-Level DRC & LVS**

*Design Rule Check* (DRC) dan *Layout-vs-Schematic* (LVS) harus dilakukan pada level agregat seluruh tumpukan, termasuk verifikasi *cross-die ESD*, *latch-up*, dan *IR drop* (Roze & Gerber, 2026).

**Langkah 6: Validasi Termal & Mekanis**

Simulasi *finite element analysis* (FEA) untuk *thermal cycling* (-55°C sampai 125°C) dan *drop test* sesuai standar JEDEC JESD22-B111.

### 3.3 Diagram Alir Integrasi Heterogen

```
[Chiplet Vendor A] → [KGD Test] → ┐
[Chiplet Vendor B] → [KGD Test] → ├→ [3D Floorplan] → [Cu-Cu Bonding] → [Package Test]
[Chiplet Vendor C] → [KGD Test] → ┘            ↓
                                          [System Verification]
                                                  ↓
                                          [Qualification per JEDEC]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Akselerator AI 4-Die dengan Hybrid Bonding

Sebuah *integrator* merancang paket akselerator AI yang mengintegrasikan empat chiplet: 2× compute die (16 nm), 1× HBM3 memory stack, dan 1× I/O die (7 nm). Spesifikasi target:

- Total bandwidth: 4 Tb/s
- Power budget: 300 W
- Area package: ≤ 60 × 60 mm²
- Target yield sistem: ≥ 75%

### 4.2 Perhitungan Pitch