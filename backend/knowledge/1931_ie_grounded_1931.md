# 1931 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hybrid Bonding Cu-Cu, dan Optimasi Rantai Pasok Semikonduktor Lanjutan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global memasuki era *post-Moore's Law* di mana penskalaan planar transistor mendekati batas fisika, ekonomi, dan litografi EUV (EUVL). Dalam konteks ini, Roze & Gerber (2026) pada *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)* menegaskan bahwa **solusi Electronic Design Automation (EDA)** bukan lagi sekadar alat bantu desain sirkuit, melainkan telah menjadi *strategic enabler* untuk arsitektur *chiplet* dan *three-dimensional integrated circuits (3D-IC)*. Pergeseran paradigma ini didorong oleh tiga kekuatan struktural: (i) ledakan permintaan komputasi *high-performance computing* (HPC) dan akselerator AI yang membutuhkan *bandwidth memori* >1 TB/s, (ii) fragmentasi proses node lanjutan (3 nm/2 nm/A14) yang menanggung biaya *wafer* di atas USD 20.000, dan (iii) kebutuhan integrasi heterogen antara logika CMOS, HBM, fotonik silikon, dan IP analog/RF dalam satu paket sistem. Roze & Gerber (2026) menekankan bahwa tanpa *toolchain* EDA yang mampu melakukan partisi sistem, verifikasi multi-die, dan sintesis *interconnect* 3D secara koheren, adopsi chiplet akan terhambat oleh *design productivity gap* yang saat ini mencapai faktor 3–5× dibanding desain monolithic.

Urgensi operasional dan ekonominya bersifat multidimensional. Secara teknis, *yield* sebuah *die* besar menurun menurut hukum *negative binomial* (model Stapper), sehingga strategi "pecah menjadi beberapa *chiplet* kecil" dapat meningkatkan *yield* manufaktur secara signifikan. Secara ekonomis, *bill-of-materials* (BOM) sistem chiplet memungkinkan *die reuse* lintas produk, menekan *non-recurring engineering* (NRE) hingga 40–60%. Dari perspektif rantai pasok, model *foundry + OSAT + OSAT chiplet integrator* membuka peluang *horizontal disaggregation* yang sebelumnya tidak mungkin di ekosistem *IDM* tradisional. Studi Lau (2023) dalam buku *Chiplet Design and Heterogeneous Integration Packaging* (DOI: [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)) melengkapi narasi ini dengan menunjukkan bahwa **Cu-Cu hybrid bonding** adalah *backbone* teknologi *interconnect* untuk 3D-IC, memungkinkan pitch *bump* <10 µm dengan resistansi kontak mendekati *bulk copper*. Kombinasi EDA + hybrid bonding inilah yang memungkinkan arsitektur *stacked memory-on-logic* (misalnya HBM4) dan *compute express link* (CXL) berbasis chiplet menjadi layak secara komersial.

Dalam kerangka Teknik Industri, fenomena ini layak dipandang sebagai studi kasus klasik tentang *product architecture transition* (Henderson & Clark, 1990) yang mempengaruhi keputusan *make-or-buy*, *capacity planning* di *back-end* packaging, dan *supplier selection* untuk substrat/organik interposer. Perancang industri tidak cukup hanya memahami *physical design* transistor, tetapi juga harus menguasai *co-design* lintas domain: termal, mekanis, *signal integrity* (SI), *power integrity* (PI), dan *design-for-test* (DFT) pada level *package*. Modul 1931 ini menyajikan kerangka analitis dan prosedural untuk menjawab tantangan tersebut.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Yield untuk Chiplet Heterogen

Roze & Gerber (2026) merujuk pada perluasan model yield Stapper untuk arsitektur multi-die. Untuk sebuah sistem 3D-IC yang terdiri dari $N$ chiplet yang di-*stack* secara vertikal, yield sistem $Y_{sys}$ dapat dinyatakan sebagai:

$$Y_{sys} = \prod_{i=1}^{N} Y_i \cdot Y_{bonding} \cdot Y_{interconnect}$$

di mana $Y_i$ adalah yield masing-masing chiplet yang mengikuti distribusi *negative binomial*:

$$Y_i = \left(1 + \frac{D_0 \cdot A_i}{\alpha}\right)^{-\alpha}$$

dengan $D_0$ adalah *defect density* (def/cm²), $A_i$ adalah luas aktif chiplet ke-$i$, dan $\alpha$ adalah *clustering parameter* (umumnya 1–4 untuk proses CMOS matang). Untuk chiplet kecil ($A_i \ll A_{mono}$), yield per-die meningkat secara dramatis, tetapi yield total sistem kini bergantung pada $Y_{bonding}$ dan $Y_{interconnect}$ yang sebelumnya tidak relevan pada monolithic die.

### 2.2 Toleransi Alignment Cu-Cu Hybrid Bonding

Lau (2023) menurunkan hubungan fundamental antara *pitch* $p$ (µm), toleransi alignment $\sigma$ (µm), dan densitas *through-silicon via* (TSV) melalui persamaan:

$$\sigma_{3\sigma} \leq \frac{p}{6}$$

Untuk teknologi hybrid bonding terkini dengan pitch $p = 3~\mu m$, toleransi alignment $3\sigma$ yang dibutuhkan adalah:

$$\sigma_{3\sigma} \leq \frac{3~\mu m}{6} = 0{,}5~\mu m$$

Presisi ini 6–10× lebih ketat dibanding *micro-bump* soldering konvensional ($p \approx 25~\mu m$), yang menjelaskan为什么 investasi pada metrology dan *planarization* (CMP) menjadi *critical path* dalam roadmap 3D-IC.

### 2.3 Optimasi Partisi Sistem (System Partitioning)

Permasalahan partisi chiplet dapat diformulasikan sebagai *integer programming* (Roze & Gerber, 2026):

$$\min_{x_{ij} \in \{0,1\}} \sum_{i=1}^{M}\sum_{j=1}^{N} c_{ij} \cdot x_{ij} + \lambda \sum_{i=1}^{M}\sum_{j=1}^{N} w_{ij} \cdot \ell_{ij} \cdot x_{ij}$$

dengan kendala:

$$\sum_{j=1}^{N} x_{ij} = 1, \quad \forall i \in \{1, \dots, M\}$$
$$\sum_{i=1}^{M} x_{ij} \leq K_j, \quad \forall j \in \{1, \dots, N\}$$

di mana $c_{ij}$ adalah biaya fabrikasi *assigning* blok logika $i$ ke chiplet $j$, $\ell_{ij}$ adalah panjang *interconnect* antara blok, $w_{ij}$ adalah *weight* konektivitas (bandwidth), $\lambda$ adalah parameter regularisasi trade-off area vs. *interconnect*, dan $K_j$ adalah kapasitas maksimum blok pada chiplet $j$.

### 2.4 Resistansi dan Induktansi TSV

Untuk TSV dengan diameter $d$, tinggi $h$, dan resistivitas $\rho$, resistansi DC didekati sebagai:

$$R_{TSV} = \frac{\rho \cdot h}{\pi (d/2)^2}$$

Induktansi parasitiknya pada frekuensi $f$ memberikan impedansi:

$$Z_{TSV}(f) = \sqrt{R_{TSV}^2 + (2\pi f L_{TSV})^2}$$

Pada pitch 3D tinggi, parasitic TSV mendominasi *power delivery network* (PDN) dan memerlukan EDA tool yang mampu melakukan *electrical-thermal-mechanical co-simulation*.

### 2.5 Model Biaya Total Kepemilikan (TCO)

$$TCO = C_{NRE} + \sum_{t=1}^{T} \frac{C_{unit}(t) \cdot V(t) + C_{integration}(t)}{(1+r)^t}$$

dengan $C_{NRE}$ adalah biaya desain masker + IP, $C_{unit}(t)$ biaya per-die, $V(t)$ volume produksi, $C_{integration}(t)$ biaya *packaging + hybrid bonding*, $r$ adalah *discount rate*. Persamaan ini menjadi dasar justifikasi arsitektur chiplet dalam studi kelayakan industri.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze & Gerber (2026) mengusulkan alur EDA 3D-IC *co-design* yang sistematis sebagai berikut:

**Tahap 1 — System-Level Architecture Exploration.**
Analis melakukan *partitioning* blok IP (CPU core, GPU, HBM PHY, PCIe, SERDES) menggunakan *multi-objective optimization* dengan metrik: bandwidth, latency, area, dan *thermal density* (W/cm²). Tools: *Cadence Integrity 3D-IC*, *Synopsys 3DIC Compiler*, atau *Siemens Calibre 3DSTACK*.

**Tahap 2 — Chiplet Physical Implementation.**
Setiap chiplet diimplementasikan menggunakan *place-and-route* (PnR) dan *physical verification* (DRC/LVS) pada *process design kit* (PDK) spesifik (TSMC N3, Samsung SF2, Intel 18A). Standar interoperabilitas mengikuti **UCIe (Universal Chiplet Interconnect Express) 1.1/2.0** untuk *die-to-die* interconnect.

**Tahap 3 — TSV dan Hybrid Bonding Planning.**
EDA tool melakukan *placement* TSV dengan *thermal-aware* *staggered* pattern. Untuk hybrid bonding, Lau (2023) menspesifikasikan SOP proses:
1. Deposisi Cu + dielektrik (SiCN/SiO₂) pada kedua wafer.
2. Chemical-mechanical polishing (CMP) hingga *surface roughness* $R_a < 0{,}5~nm$.
3. Plasma activation (N₂/H₂) untuk membentuk *dangling bonds*.
4. *Room-temperature bonding* dengan pressure 1–5 MPa.
5. *Annealing* pada 200–400°C selama 1–2 jam untuk difusi Cu.

**Tahap 4 — Verification Multi-Fisika.**
Simulasi termal-mekanis dilakukan dengan *finite element analysis* (FEA) untuk memvalidasi *thermal warpage* dan *thermomechanical stress*:

$$\sigma_{thermal} = E \cdot \alpha \cdot \Delta T \cdot f_{geometry}$$

di mana $E$ adalah *Young's modulus*, $\alpha$ koefisien ekspansi termal (CTE), dan $\Delta T$ perubahan suhu dari suhu referensi. Verifikasi *signal integrity* mencakup *insertion loss*, *return loss*, dan *crosstalk* pada *bump* <5 µm.

**Tahap 5 — Testability dan Yield Learning.**
Penerapan *Design-for-Test* (DFT) dengan *built-in self-test* (BIST) untuk TSV dan *boundary scan* (IEEE 1149.1/1687) untuk inter-die interconnect. Roze & Gerber (2026) menyoroti pentingnya *adaptive test scheduling* yang menurunkan biaya test hingga 25%.

**Tahap 6 — Sign-off Package-Co-design.**
Integrasi *package* (substrat organik, interposer Si, *heat spreader*) dilakukan menggunakan *co-design* dengan vendor OSAT, memastikan *IR drop*, *electromigration*, dan *thermal hotspot* memenuhi spesifikasi (umumnya $T_j < 85°C$ untuk operasi server).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Studi Kasus: Partisi GPU + HBM untuk Akselerator AI

Sebuah perusahaan semikonduktor