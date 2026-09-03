# 1483 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hybrid Bonding Cu-Cu, dan Optimasi Multi-Fisika

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Era paska-denardian scaling telah memaksa industri semikonduktor global untuk meninggalkan paradigma monolithic System-on-Chip (SoC) monolithic yang semata-mata mengandalkan pengecilan transistor planar. Sebagaimana ditegaskan oleh Roze & Gerber (2026, DOI: [10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)), industri saat ini bergerak agresif ke arsitektur **chiplet** dan **3D-IC**, di mana beberapa die heterogen (logika, memori, RF, analog, fotonik) diintegrasikan dalam satu paket melalui *interposers* silikon, *bridges* EMIB, atau *direct hybrid bonding* Cu-Cu. Pergeseran paradigma ini bukan sekadar pilihan teknologi, melainkan respons terhadap tiga tekanan fundamental: (1) melonjaknya biaya *mask-set* di node 3 nm/2 nm yang menembus USD 20–30 juta per desain, (2) batas fisik *reticle limit* (~858 mm² untuk EUV stepper), dan (3) meningkatnya *yield loss* pada wafer besar akibat cacat acak yang mengikuti hukum Poisson.

Lau (2023, DOI: [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)) menekankan bahwa *Cu-Cu direct hybrid bonding* dengan pitch sub-10 μm (bahkan sudah ada demonstrasi 1 μm) memungkinkan densitas I/O per mm² yang melampaui kemampuan solder bump flip-chip tradisional (yang stagnan di ~150 μm pitch). Namun, integrasi heterogen ini menciptakan ledakan kompleksitas desain yang tidak dapat ditangani oleh *Electronic Design Automation* (EDA) konvensional. Sebuah paket chiplet pada akhirnya harus mensimultankan memvalidasi: kelistrikan antarmuka (signal integrity, power integrity), termal 3D, mekanis (warpage, CTE mismatch), manufacturability (DFM), dan kelayakan *known-good-die* (KGD). Roze & Gerber (2026) menyebut fenomena ini sebagai **"multi-physics co-design crisis"**, di mana tool EDA legacy yang awalnya dirancang untuk SoC monolitik kewalahan menghadapi interaksi silang domain dalam stack 3D.

Secara ekonomis, pasar chiplet global diproyeksi tumbuh dari USD 6,7 miliar (2023) menjadi lebih dari USD 100 miliar pada 2030 (compound annual growth rate >40%), didorong oleh adopsi masif pada HPC (NVIDIA H100, AMD MI300), AI accelerator (Google TPU v5p), dan kemasan smartphone flagship (Apple M-series). Urgensi operasional bagi insinyur Teknik Industri menjadi sangat jelas: keputusan partisi arsitektur (bagian logika mana yang dibuat sebagai chiplet terpisah, mana yang digabung) bukan hanya persoalan elektris, melainkan keputusan *manufacturing system* yang berdampak pada *throughput* lini *back-end*, *cycle time* packaging, *test cost*, dan *supply chain resilience*. Tanpa kerangka EDA holistik yang menyatukan domain elektrikal, termal, mekanis, dan operasional, keputusan ini akan bersifat sub-optimal dan menurunkan *overall equipment effectiveness* (OEE) fasilitas packaging.

## 2. Landasan Teori & Formulasi Matematis

Kerangka kuantitatif untuk desain chiplet dan 3D-IC memerlukan beberapa model fundamental yang saling terkait. Bagian ini menurunkan formulasi utama yang menjadi tulang punggung analisis EDA sebagaimana dibahas oleh Roze & Gerber (2026) dan Lau (2023).

### 2.1 Model Yield dan Efektivitas Manufaktur

Yield paket chiplet *assembly* didekati dengan formula modular yang menggabungkan yield die individual, yield bonding, dan yield interkoneksi. Untuk sistem dengan $N$ chiplet, asumsi yield die individual seragam $Y_d$, yield bonding hybrid $\eta_b$, dan *redundancy* opsional $r$:

$$Y_{package} = \prod_{i=1}^{N} Y_{d,i} \cdot \left[\eta_b\right]^{N_b} \cdot \left(1 - \prod_{j=1}^{N}\left(1 - p_j\right)\right)$$

di mana $N_b$ adalah jumlah *bond interface* aktif, dan $p_j$ probabilitas *redundancy link* ke-$j$ masih berfungsi. Roze & Gerber (2026) memperkenalkan indeks baru **Heterogeneous Integration Yield Index (HIYI)** yang menormalisasi yield terhadap kompleksitas desain:

$$HIYI = \frac{Y_{package}}{1 + \alpha \cdot N_{chiplet} \cdot \log(P_{IO})}$$

dengan $\alpha$ konstanta kalibrasi ($\approx 0{,}15$), $N_{chiplet}$ jumlah chiplet, dan $P_{IO}$ pitch rata-rata I/O dalam mikrometer. Nilai $HIYI > 0{,}85$ dianggap layak secara industri.

### 2.2 Model Termal Stack 3D

Untuk stack 3D dengan $k$ lapis die, resistansi termal total dari junction ke ambien dapat dimodelkan sebagai jaringan resistansi paralel-seri:

$$R_{th,total} = \left[\sum_{m=1}^{k} \frac{1}{R_{th,m}^{(layer)} + R_{th,bond,m}}\right]^{-1} + R_{th,tim} + R_{th,heatsink}$$

di mana $R_{th,m}^{(layer)} = t_m / (k_{th,m} \cdot A_{eff,m})$ adalah resistansi die ke-$m$ dengan tebal $t_m$ dan konduktivitas termal $k_{th,m}$, dan $R_{th,bond,m}$ resistansi interface hybrid bonding. Lau (2023) menunjukkan bahwa pada Cu-Cu hybrid bonding, $R_{th,bond} \approx 0{,}05$ K/W per mm² karena tidak ada solder TIM, berbeda jauh dengan solder bump tradisional ($\approx 0{,}5$ K/W per mm²). Distribusi suhu junction maksimum $T_{j,max}$ mengikuti:

$$T_{j,max} = T_a + P_{total} \cdot R_{th,total}$$

### 2.3 Model Sinyal dan Kehilangan Integritas

Delay propagasi melalui *Through-Silicon Via* (TSV) dan *inter-die interconnect* dimodelkan dengan pendekatan RC terdistribusi:

$$\tau_{prop} = 0{,}38 \cdot R_{tsv} \cdot C_{tsv} + 0{,}69 \cdot \sum_{l=1}^{L}\left(R_{l}C_{l} + R_{l}C_{l+1}\right)$$

Untuk Cu-Cu hybrid bonding dengan pitch $p$ (μm), kapasitansi pad per I/O diberikan oleh:

$$C_{pad} = \varepsilon_0 \varepsilon_{r,eff} \cdot \frac{A_{pad}}{t_{diel}} \approx 8{,}854 \times 10^{-3} \cdot 3{,}9 \cdot \frac{p^2}{0{,}3} \quad [\text{fF}]$$

Lau (2023) menurunkan *bandwidth density* teoritis:

$$BD = \frac{f_{max}}{p^2} \quad [\text{Gbps/mm}^2]$$

dimana untuk $p = 3$ μm dan $f_{max} = 32$ Gbps, diperoleh $BD \approx 3555$ Gbps/mm² — enam kali lipat solder flip-chip.

### 2.4 Optimasi Multi-Objektif Co-Design

Roze & Gerber (2026) merumuskan desain optimal sebagai masalah Pareto multi-objektif:

$$\min_{x \in \mathcal{X}} \left\{ f_1(x), f_2(x), f_3(x), f_4(x) \right\}$$

dengan $f_1 = -HIYI$ (maksimasi yield), $f_2 = R_{th,total}$ (minimasi resistansi termal), $f_3 = \tau_{prop}$ (minimasi delay), dan $f_4 = C_{total}$ (minimasi biaya). Vektor keputusan $x$ mencakup: partisi arsitektur $\{x_{part}\}$, pitch bonding $\{x_{pitch}\}$, jumlah TSV $\{x_{TSV}\}$, dan material TIM $\{x_{TIM}\}$.

## 3. Metodologi Rekayasa & SOP Industri

Roze & Gerber (2026) mengusulkan kerangka EDA 7-tahap yang kini menjadi SOP de facto untuk program chiplet dan 3D-IC berskala industri. Tahapan ini harus dijalankan secara *iteratif* dengan *feedback loop* antar-domain.

**Tahap 1 — System-Level Architecture Partitioning.** Definisikan *chiplet boundary* berdasarkan optimalisasi Pareto yang menyeimbangkan yield, termal, dan biaya. Gunakan tool seperti Synopsys 3DIC Compiler atau Cadence Integrity 3D-IC. *Output*: netlist antar-chiplet dengan constraint pitch dan jumlah I/O.

**Tahap 2 — Multi-Die Floorplanning & Placement.** Co-place seluruh die pada *substrate* interposer. Algoritma: *simulated annealing* atau *gradient descent* dengan fungsi objektif:
$$\min \sum_{i<j} w_{ij} \cdot d(x_i, x_j) + \lambda \sum_m R_{th,m}$$

**Tahap 3 — Hybrid Bonding DFM Verification.** Validasi aturan desain Cu-Cu: align accuracy $\leq 0{,}5$ μm, coplanarity $\leq 50$ nm, surface roughness Ra $\leq 1$ nm. Lau (2023) menekankan bahwa *Chemical Mechanical Polishing* (CMP) menghasilkan Ra = 0,3–0,8 nm yang memenuhi syarat.

**Tahap 4 — Thermal-Aware Routing.** Routing dilakukan dengan *thermal vias* dan *heat-spreader* terintegrasi. Constraint: $\Delta T_{max} \leq 15$°C antar-die aktif.

**Tahap 5 — Signal & Power Integrity (SI/PI) Co-Simulation.** Simulasi EM 3D-FDFD/3D-FEM pada frekuensi hingga 112 Gbps (PAM4). Validasi *eye diagram* dengan margin $> 30\%$ terhadap threshold.

**Tahap 6 — Mechanical & Warpage Analysis.** Simulasi FEM termo-mekanis siklus termal -55°C sampai +125°C. Kriteria: warpage $\leq 100$ μm, *stress* pada Cu pad $\leq 200$ MPa.

**Tahap 7 — Yield & Cost Optimization.** Iterasi terakhir menggunakan model HIYI dan *total cost of ownership* (TCO):
$$TCO = \sum_{i} \left(N_{wafer,i} \cdot C_{wafer,i} + N_{step} \cdot C_{step} + C_{test} + C_{yield\_loss}\right)$$

Flow ini memerlukan integrasi ketat antara tool EDA (Cadence, Synopsys, Siemens EDA, Ansys) melalui format standar *Interoperable PDK Library (IPL)* dan *OpenAccess*.

## 4. Studi Kasus Kuantitatif & Perhitungan Numerik

**Studi Kasus:** Desain HPC accelerator 3D-IC dengan 4 chiplet logika (compute) + 8 chiplet HBM3 + 1 base die interposer, target pitch Cu-Cu hybrid bonding = 3 μm, total daya 750 W, area paket $60 \times 60$ mm².

### Langkah 1 — Yield Paket

Asumsikan $Y_{d,logic} = 0{,}92$, $Y_{d,HBM} = 0{,}85$, $\eta_b = 0{,}995$ (bonding interface per chiplet). Total interface $N_b = 12$:

$$Y_{package} = (0{,}92)^4 \cdot (0{,}85)^8 \cdot (0{,}995)^{12}$$

Perhitungan intermediate:
- $(0{,}92)^4 = 0{,}7164$
- $(0{,}85)^8 = 0{,}2725$
- $(0{,}995)^{12} = 0{,}9418$

$$Y_{package} = 0{,}7164 \times 0{,}2725 \times 0{,}9418 \approx 0{,}1839 \quad (18{,}39\%)$$

Dengan redundancy link aktif ($p_j = 0{,}97$):
$$Y_{red} = 1 - (1-0{,}97)^{12} = 1 - 0{,}0003 = 0{,}9997$$

$$Y_{final} \approx 0{,}1839 \times 0{,}9997 \approx 0{,}1838$$

**Interpretasi manajerial:** Yield 18,4% tampak rendah, namun setara dengan benchmark NVIDIA H100 historis (~20%). HIYI dengan $\alpha