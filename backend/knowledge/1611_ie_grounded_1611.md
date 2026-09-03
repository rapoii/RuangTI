# 1611 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hybrid Bonding Cu-Cu, dan Optimasi Lintas Disiplin dalam Rantai Pasok Semikonduktor Modern

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global tengah mengalami transformasi arsitektural paling signifikan sejak diperkenalkannya *system-on-chip* (SoC) monolitik dua dekade lalu. Biaya litografi di node 3 nm dan 2 nm kini melampaui ambang USD 20 miliar per fabrikasi, sementara *yield* die pada area reticle maksimal mendekati batas keekonomisan (Roze & Gerber, 2026, DOI: [10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)). Fenomena ini memicu pergeseran paradigma menuju *heterogeneous integration* (HI) melalui arsitektur chiplet, di mana beberapa die kecil yang diproduksi pada node proses berbeda digabungkan dalam satu paket untuk membentuk *system-in-package* (SiP) atau 3D *integrated circuit* (3D-IC). Konteks industri ini tidak berdiri sendiri—ia merupakan respons langsung terhadap tiga tekanan simultan: (1) keterbatasan fisik penskalaan planar MOSFET (*scaling limit*), (2) fragmentasi pasar yang menuntut *time-to-market* lebih pendek, dan (3) permintaan akan efisiensi energi pada aplikasi AI/HPC yang melonjak eksponensial.

Roze dan Gerber (2026) menekankan bahwa solusi *Electronic Design Automation* (EDA) menjadi tulang punggung keberhasilan adopsi chiplet, karena integrasi lintas-die memerlukan verifikasi koheren yang tidak dapat dijawab oleh alur desain SoC tradisional. Alur EDA konvensional mengasumsikan satu domain fisik dan satu set *design rules* yang homogen; arsitektur chiplet justru memperkenalkan multi-domain (logika, memori, RF, fotonik, daya) yang masing-masing membawa约束工艺 (*process constraints*) berbeda. Sementara itu, Lau (2023, DOI: [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)) menyoroti bahwa implementasi fisik integrasi ini sangat bergantung pada teknologi *Cu-Cu hybrid bonding*—yaitu proses ikatan termal-kompresi antar-die dengan pitch interkoneksi sub-10 µm yang memungkinkan kepadatan I/O per milimeter persegi mencapai orde $10^4$ hingga $10^5$ kontak.

Urgensi ekonomi dari perspektif Teknik Industri dapat diukur dari *total cost of ownership* (TCO) desain. Untuk SoC monolitik 5 nm，面积 die $A \approx 600 \text{ mm}^2$, biaya rekayasa NRE (*non-recurring engineering*) tunggal dapat melebihi USD 500 juta. Sebaliknya, arsitektur chiplet dengan empat die masing-masing $150 \text{ mm}^2$ menurunkan NRE rata-rata 35–45% karena fabrikasi dapat dialokasikan ke *foundry* dengan spesialisasi node optimal (Roze & Gerber, 2026). Dengan demikian, rekayasa sistem industri tidak hanya dituntut memahami *device physics*, tetapi juga optimasi portofolio multi-die, manajemen risiko rantai pasok, dan orkestrasi *time-to-volume* lintas vendor.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Yield Chiplet dan Hukum Skala Ekonomi

Yield per die pada arsitektur chiplet mengikuti model Poisson yang telah dimodifikasi untuk mengkompensasi efek kluster defect (Roze & Gerber, 2026):

$$Y_{die} = \left(1 + \frac{D \cdot A}{\alpha}\right)^{-\alpha}$$

di mana $D$ adalah *defect density* (defect/cm²), $A$ luas area aktif (cm²), dan $\alpha$ parameter klustering (umumnya $\alpha \approx 2$). Untuk arsitektur multi-die, *composite yield* paket dihitung melalui perkalian yield setiap chiplet dengan yield proses integrasi:

$$Y_{package} = \left(\prod_{i=1}^{n} Y_{die,i}\right) \cdot Y_{bonding}$$

dengan $Y_{bonding}$ merepresentasikan probabilitas keberhasilan proses hybrid bonding (Lau, 2023).

### 2.2 Resistansi Listrik Sambungan Cu-Cu

Resistansi kontak sambungan hybrid bonding Cu-Cu dimodelkan sebagai kombinasi resistansi *constriction* dan resistansi *interfacial*:

$$R_{contact} = \frac{\rho_{Cu}}{2 r_c} + \frac{\rho_{interface}}{A_{bond}}$$

dengan $\rho_{Cu} = 1.68 \times 10^{-8} \text{ Ω·m}$ adalah resistivitas tembaga, $r_c$ jari-jari kontak efektif, $\rho_{interface}$ resistivitas antarmuka yang bergantung pada kualitas difusi, dan $A_{bond}$ luas area bonding. Lau (2023) menekankan bahwa untuk pitch $p \leq 10 \text{ µm}$ dan suhu bonding $T_b \leq 400°C$, nilai $R_{contact}$ dapat dijaga di bawah $50 \text{ mΩ}$ per sambungan.

### 2.3 Resistansi Termal Through-Silicon Via (TSV)

Distribusi panas pada stack 3D-IC sangat krusial. Resistansi termal TSV dengan geometri silinder adalah:

$$R_{th,TSV} = \frac{L_{TSV}}{k_{Si} \cdot \pi r_{TSV}^2}$$

dengan $L_{TSV}$ panjang via, $k_{Si} \approx 150 \text{ W/(m·K)}$ konduktivitas termal silikon, dan $r_{TSV}$ jari-jari via. Namun, efek *keep-out zone* (KOZ) di sekitar TSV mengurangi konduktivitas efektif melalui faktor koreksi $\beta \approx 0.7$–$0.9$:

$$R_{th,eff} = \frac{R_{th,TSV}}{\beta}$$

### 2.4 Optimasi Multi-Obyektif Pareto

EDA modern untuk chiplet memerlukan eksplorasi ruang desain multi-objectif, dengan fungsi tujuan gabungan:

$$\min_{x \in \mathcal{X}} \left\{ f_1(x), f_2(x), f_3(x) \right\}$$

di mana $f_1$ = delay kritis (ns), $f_2$ = disipasi daya (W), dan $f_3$ = luas area (mm²). Himpunan pareto-optimal $\mathcal{P}^*$ didefinisikan sebagai:

$$\mathcal{P}^* = \left\{ x^* \in \mathcal{X} \,|\, \nexists x \in \mathcal{X} : f_i(x) \leq f_i(x^*) \, \forall i, \, f_j(x) < f_j(x^*) \, \exists j \right\}$$

### 2.5 Energi Antarmuka Bonding

Energi adhesi spesifik antar permukaan Cu pada hybrid bonding mengikuti persamaan Young–Dupré termodifikasi:

$$W_{adh} = \gamma_{Cu}^{d} + \gamma_{Cu}^{p} - \gamma_{Cu-Cu}^{int}$$

dengan $\gamma^{d}$ komponen dispersif dan $\gamma^{p}$ komponen polar dari energi permukaan; untuk ikatan Cu-Cu yang telah melalui *annealing* pada $300$–$400°C$, $W_{adh}$ mendekati nilai *bulk copper* ($\approx 1.6 \text{ J/m}^2$) yang menandai transisi dari kontak mekanis ke metalurgi penuh (Lau, 2023).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) mengusulkan alur EDA chiplet berlapis (*layered EDA flow*) yang terdiri dari delapan tahapan terintegrasi:

```
┌─────────────────────────────────────────────────────────┐
│  1. System Specification & Chiplet Partitioning        │
│       ↓ (workload profiling, PPA budgeting)             │
│  2. Chiplet Library Characterization                   │
│       ↓ (PDK, IBIS, thermal models per die)             │
│  3. Inter-Chiplet Interface (ICI) Definition           │
│       ↓ (UCIe / BoW / OpenHBI standard compliance)      │
│  4. Physical Implementation (Place & Route 3D-aware)   │
│       ↓ (TSV placement, RDL routing, micro-bump array)  │
│  5. Multi-Physics Co-Simulation                         │
│       ↓ (signal/power integrity, thermal, mechanical)   │
│  6. Verification & Sign-Off                            │
│       ↓ (DRC/LVS across heterogeneous PDKs)            │
│  7. Hybrid Bonding Process Co-Design                   │
│       ↓ (pitch, Cu dishing, anneal profile)             │
│  8. Test, Yield Learning & Reliability                 │
└─────────────────────────────────────────────────────────┘
```

**SOP Proses Cu-Cu Hybrid Bonding** mengikuti Lau (2023) dengan urutan parameter kritis sebagai berikut:

1. **Preparasi permukaan Cu:** chemical-mechanical polishing (CMP) mencapai *roughness* $R_a \leq 0.5 \text{ nm}$, dengan *dishing* $< 20 \text{ nm}$.
2. **Surface activation:** plasma N₂/H₂ atau *wet chemistry* untuk menghilangkan oksida residu $\text{Cu}_2\text{O}$.
3. **Pre-bonding alignment:** akurasi $\leq \pm 0.5 \text{ µm}$ pada level wafer, $\leq \pm 1 \text{ µm}$ pada level die.
4. **Thermocompression bonding:** tekanan $P_b \in [50, 200] \text{ MPa}$, suhu $T_b \in [200, 400]°\text{C}$, durasi $t_b \in [10, 60] \text{ menit}$.
5. **Post-bond anneal:** $300$–$400°C$ selama $30$–$120$ menit untuk homogenisasi batas butir dan difusi interfacial.
6. **Metrologi & inspeksi:** acoustic microscopy (SAM), IR transmission, dan four-point probe untuk verifikasi sambungan listrik.

Standar industri yang menjadi acuan antara lain **UCIe 1.1** (Universal Chiplet Interconnect Express), **JEDEC JESD22-A104** untuk uji termal, dan **IPC-9701** untuk uji *mechanical shock* pada paket.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Paket AI Accelerator 3D-IC

Sebuah *startup* AI merancang akselerator 4-die: 2 chiplet komputasi (5 nm, $A_1 = A_2 = 100 \text{ mm}^2$), 1 chiplet SRAM (7 nm, $A_3 = 80 \text{ mm}^2$), dan 1 chiplet I/O (12 nm, $A_4 = 60 \text{ mm}^2$). Asumsikan $D_{5nm} = 0.10 \text{ defect/cm}^2$, $D_{7nm} = 0.05 \text{ defect/cm}^2$, $D_{12nm} = 0.03 \text{ defect/cm}^2$, dan $\alpha = 2$.

**Langkah 1: Hitung yield per die**

Untuk chiplet komputasi:
$$Y_1 = Y_2 = \left(1 + \frac{0.10 \times 1.00}{2}\right)^{-2} = (1.05)^{-2} \approx 0.9070$$

Untuk chi