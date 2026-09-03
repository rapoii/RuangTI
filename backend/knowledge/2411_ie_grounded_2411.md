# 2411 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hybrid Bonding Cu-Cu, dan Tata Letak Multi-Fisika

**Domain:** Teknik Industri & Rekayasa Sistem Industri — Spesialisasi Manufaktur Mikroelektronika & Sistem Packaging Lanjut
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *EDA Solution for Chiplet and 3D-IC Design*. 2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS). DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Cu-Cu Hybrid Bonding*. Dalam: *Chiplet Design and Heterogeneous Integration Packaging*. Springer. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global sedang mengalami transisi paradigma yang mendasar dari dominasi desain monolithic System-on-Chip (SoC) menuju arsitektur *disaggregated* berbasis chiplet dan *Three-Dimensional Integrated Circuit* (3D-IC). Pergeseran ini dipicu oleh berakhirnya skalabilitas dimensional planar (scaling node 2 nm ke bawah) yang ditandai dengan meningkatnya *cost per transistor*, penurunan *yield*, dan degradasi kinerja *Dynamic Frequency Scaling* akibat *Power-Performance-Area* (PPA) yang memburuk pada node lanjut (Roze & Gerber, 2026). Berdasarkan analisis di ICEP-HBS 2026, kebutuhan akan *Electronic Design Automation* (EDA) generasi baru menjadi krusial karena metodologi *Place-and-Route* (P&R) konvensional yang berorientasi 2D tidak mampu mengakomodasi kompleksitas multi-die, multi-fisika, dan integrasi sinyal termal-mekanis-listrik yang inheren pada 3D-IC.

Dari perspektif rantai pasok manufaktur, Pasar 3D-IC global diproyeksikan tumbuh dengan CAGR > 18% menuju USD 75+ miliar pada 2030, didorong oleh permintaan akselerator AI (NVIDIA H100/H200, AMD MI300), High-Bandwidth Memory (HBM4), dan *edge inference* pada platform 5G/6G (Lau, 2023). Urgensi ekonominya adalah bahwa *chiplet* memungkinkan *yield compounding*—di mana fabrikasi beberapa die kecil matang proses *cost-effective* dapat menggantikan satu die besar yang tidak matang—mengembalikan kembali kurva *die cost* yang sempat mengalami *inflection point* pada node 5 nm. Roze dan Gerber (2026) menekankan bahwa kunci dari pergeseran ini adalah ketersediaan *tool chain* EDA yang mampu melakukan *floorplanning* lintas-die, verifikasi *timing sign-off* dengan *path-based* antardie, dan ekstraksi parasitik *Through-Silicon Via* (TSV) serta *Hybrid Bonding (HB)* interconnect secara koheren. Tanpa EDA yang matang, biaya rekayasa (NRE) dan *time-to-market* produk chiplet akan menjadi *non-economical* dibandingkan SoC monolitik.

Lau (2023) lebih lanjut mengidentifikasi bahwa tantangan operasional terbesar bukan lagi pada fabrikasi wafer, melainkan pada integrasi paket hibrid, terutama *Cu-Cu Hybrid Bonding* yang mensyaratkan kerataan permukaan < 0.5 nm dan *alignment* sub-mikron. Tingkat kesulitan proses ini menghasilkan *bonding yield* yang sangat sensitif terhadap *particle contamination*, *thermal expansion mismatch*, dan *copper dishing* pada Chemical Mechanical Polishing (CMP). Oleh karena itu, paper Roze dan Gerber (2026) mengusulkan kerangka EDA yang mengintegrasikan *process design kit* (PDK) 3D dengan simulasi termo-mekanis dan *signal-integrity*-aware routing, sehingga memungkinkan *co-design* wafer dan paket secara simultan. Pendekatan ini merupakan respons langsung terhadap *Design-Technology Co-Optimization* (DTCO) yang kini menjadi standar di seluruh foundry besar (TSMC, Intel Foundry, Samsung) dan OSAT (Amkor, ASE).

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Termal Jaringan Resistansi pada 3D-IC

Konduksi panas dalam tumpukan 3D-IC dimodelkan dengan jaringan resistansi termal satu-dimensi yang diperluas untuk konveksi *microchannel* dan *micro-bump*:

$$R_{th,tot} = \sum_{i=1}^{n} \frac{t_i}{k_i \cdot A_i} + R_{conv} + R_{TIM}$$

dengan $t_i$ adalah ketebalan layer ke-$i$, $k_i$ konduktivitas termas efektif, $A_i$ luas penampang efektif, $R_{conv}$ resistansi konveksi ke lingkungan (udara atau *cold plate*), dan $R_{TIM}$ resistansi *Thermal Interface Material*. Roze dan Gerber (2026) menunjukkan bahwa untuk arsitektur *stacked chiplet* 4-die dengan *micro-bump pitch* 25 µm, kontribusi resistansi antardie mendominasi *junction-to-case* resistance hingga ~40%.

### 2.2 Model Hasil (Yield) Hybrid Bonding Cu-Cu

Yield proses hybrid bonding mengikuti formulasi *Seigel-style compounding* yang dimodifikasi untuk memperhitungkan tingkat kontaminasi partikel:

$$Y_{HB} = Y_{0} \cdot \exp\left(-\lambda \cdot \frac{A_{die}}{A_{ref}}\right) \cdot \prod_{j=1}^{m}(1 - p_j)^{N_j}$$

di mana $Y_0$ adalah *baseline yield* fabrikasi wafer, $\lambda$ parameter densitas cacat per cm², $A_{die}$ luas permukaan bonding, $A_{ref}$ area referensi, $p_j$ probabilitas cacat lokal pada fitur ke-$j$, dan $N_j$ jumlah fitur kritis (Lau, 2023). Untuk Cu-Cu HB pada *pitch* 10 µm dengan 100.000 sambungan per die, penurunan yield sebesar 0.1% pada kontaminasi partikel sudah cukup menurunkan *compound yield* hingga ~5%.

### 2.3 Model Integritas Sinyal dan Crosstalk

Untuk interkoneksi *hybrid bonding*, impedansi karakteristik dimodelkan sebagai:

$$Z_0 = \sqrt{\frac{L}{C}} = \frac{1}{c \cdot C_d}$$

dengan $L$ induktansi per satuan panjang, $C$ kapasitansi per satuan panjang, $c$ kecepatan cahaya, dan $C_d$ kapasitansi *die-to-die* yang sebanding dengan permitivitas dielektrik. Roze dan Gerber (2026) menyatakan bahwa routing antardie pada arsitektur *face-to-face* harus memperhitungkan *crosstalk* sebagai fungsi dari *pitch*:

$$XT_{dB} = 20 \log_{10}\left(\frac{C_{mutual}}{C_{self} + C_{mutual}}\right)$$

di mana $C_{mutual}$ menurun secara kuadratik terhadap jarak antar-saluran, menetapkan *design rule* bahwa $pitch \geq 2 \cdot w + 2 \cdot s_{min}$ dengan $w$ lebar jalur dan $s_{min}$ spasi minimal yang disyaratkan proses.

### 2.4 Optimasi Multi-Objektif Pareto-Optimal PPA

EDA modern menyelesaikan masalah optimasi desain chiplet sebagai:

$$\min_{x} \left\{ P(x), \tau(x), A(x) \right\} \quad \text{subject to} \quad Y(x) \geq Y_{min}$$

dengan $x$ vektor keputusan (penempatan die, routing, dimensi TSV, jenis *bonding*), $P$ daya total, $\tau$ delay kritis, $A$ area footprint, dan $Y$ *compound yield*. Solusi dikarakterisasi sebagai *Pareto front* untuk dilakukaan *trade-off* eksplisit (Roze & Gerber, 2026).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) mengusulkan alur EDA 3D-IC berlapis yang terstruktur sebagai berikut:

**Tahap 1 — Partisi & Floorplan Multi-Die.** Menggunakan *tool* partisi berbasis *integer linear programming* (ILP) atau heuristik *simulated annealing*, dengan fungsi objektif meminimalkan *cut-cost* antardie dan latensi *die-to-die*. Input: RTL/netlist sintetis; Output: Partisi modul ke *chiplet* individual + spesifikasi *interface protocol* (misal UCIe, BoW).

**Tahap 2 — Co-Design PDK 3D & Penentuan Proses Bonding.** Pemilihan antara *micro-bump*, *Cu-Cu Hybrid Bonding*, atau *solder hybrid* ditentukan oleh *pitch* target, *thermal budget*, dan *cost per interconnect*. Lau (2023) merekomendasikan Cu-Cu HB untuk $pitch \leq 10$ µm dan aplikasi HBM-stack.

**Tahap 3 — Implementasi Fisik & Routing Antardie.** Menggunakan *Place-and-Route* 3D-aware yang melakukan *buffer insertion* kompensasi *delay* lintasan antardie. Verifikasi *Design Rule Check* (DRC) multi-die mengikuti standar foundry *Process Design Kit* (PDK) 3D.

**Tahap 4 — Ekstraksi Parasitik & Simulasi Multi-Fisika.** Ekstraksi RLCK dari TSV, *bump*, *hybrid bond pad*, dan *interposer*. Coupling dengan solver termo-mekanis (ANSYS, COMSOL) untuk memastikan *thermal-induced stress* < *yield strength* tembaga.

**Tahap 5 — Sign-off, DFT, & Validasi.** Termasuk *Static Timing Analysis* (STA) dengan model *jitter* dan *skew* lintas-die, *IR-drop analysis* dengan profil *current crowding* TSV, dan *Design-for-Test* menggunakan *Built-In Self-Test* (BIST) dengan *boundary scan* IEEE 1149.1/1149.6 untuk *Known Good Die* (KGD) per-chiplet.

**Standar Industri Pendukung:** UCIe Specification 2.0, JEDEC JESD238 (HBM4), SEMI 3D4-A, dan IEEE 1838 untuk *test access architecture* 3D-IC. SOP fabrikasi mengikuti dokumen IRDS *More-than-Moore* roadmap 2024.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Studi Kasus: Desain Accelerator AI 4-Chiplet dengan HBM Stack

**Parameter Input:**
- 4 chiplet logika @ 2 nm, dimensi $12 \times 12$ mm², daya aktif 75 W per chiplet
- 4 stack HBM3e @ 12-Hi, di atas *interposer* silikon
- Cu-Cu HB *pitch* 6 µm, 200.000 sambungan per die
- Dielektrik *low-k* SiCOH dengan $k = 3.0$, $t = 1.5$ µm
- *Through-Silicon Via* (TSV) diameter 5 µm, kedalaman 100 µm
- Target *junction temperature* $T_j \leq 85$ °C, ambient $T_a = 45$ °C

**Langkah 1 — Resistansi Termal Die ke Case**

Dengan luas efektif $A = 1.44 \times 10^{-4}$ m², ketebalan die 750 µm, $k_{Si} = 148$ W/m·K:

$$R_{th,die} = \frac{750 \times 10^{-6}}{148 \times 1.44 \times 10^{-4}} = 0.0352 \text{ K/W}$$

Resistansi TSV dan HB ditambahkan: $R_{TSV} \approx 0.012$ K/W; $R_{HB} \approx 0.008$ K/W. Total *junction-to-case*:

$$R_{th,jc} = 0.0352 + 0.012 + 0.008 = 0.0552 \text{ K/W}$$

**Langkah 2 — Kenaikan Suhu Junction**

$$\Delta T = P \cdot R_{th,jc} = 75 \times 0.0552 = 4.14 \text{ K}$$

Untuk 4 chiplet simultan dengan *thermal coupling factor* 0.85:

$$\Delta T_{cou