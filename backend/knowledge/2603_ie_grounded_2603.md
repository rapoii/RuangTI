# 2603 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen dengan Hybrid Bonding Cu-Cu

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Era *post-Moore's Law* telah mengubah secara fundamental arsitektur fabrikasi semikonduktor, di mana integrasi heterogen (*heterogeneous integration*, HI) melalui pendekatan *chiplet* dan *three-dimensional integrated circuit* (3D-IC) menjadi pilar strategis industri mikroelektronika global. Seperti yang ditegaskan oleh Roze dan Gerber (2026) dalam makalah "EDA Solution for Chiplet and 3D-IC Design" yang dipresentasikan pada *International Conference on Electronics Packaging and Hybrid Bonding Symposium* (ICEP-HBS) 2026, permintaan akan solusi *Electronic Design Automation* (EDA) yang mampu menjembatani kesenjangan antara desain *die* individual, *package*, dan integrasi *system-on-chip* (SoC) multi-*chiplet* telah menjadi imperatif rekayasa. DOI: [10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563) menjadi referensi utama bagi metodologi desain *chiplet* modern.

Urgensi operasional dan ekonomi dari transisi arsitektur ini dapat dipahami melalui tiga dimensi. Pertama, **bottleneck ekonomi litografi EUV**: biaya satu unit *fab* untuk teknologi proses 3 nm dan 2 nm melebihi USD 20 miliar, sehingga *monolithic SoC* menjadi tidak layak untuk banyak aplikasi yang memerlukan kombinasi proses berbeda (misalnya logika CMOS maju dengan *I/O* tegangan tinggi, photodetector, atau *non-volatile memory*). Kedua, **yield physics** — area *reticle* maksimum yang dibatasi oleh proses litografi stepper-scanner modern (sekitar 858 mm² untuk *field* standar) membatasi dimensi *die* maksimal, mendorong dekomposisi *monolithic die* menjadi beberapa *chiplet* kecil yang memiliki *yield* lebih tinggi secara individual. Ketiga, **time-to-market pressure**: pendekatan *chiplet* dengan *known-good-die* (KGD) memungkinkan penggunaan ulang *intellectual property* (IP) blok yang sudah terverifikasi, menekan siklus desain dari 24–36 bulan menjadi 12–18 bulan. Roze dan Gerber (2026) mengidentifikasi bahwa keseluruhan rantai nilai ini membutuhkan platform EDA yang tidak lagi memandang *chip*, *package*, dan *board* sebagai domain terpisah melainkan sebagai satu *co-design* ruang kerja tunggal.

Pelengkap utama dari arsitektur *chiplet* adalah teknologi *bonding* antar-*die*. Lau (2023) dalam bab buku "Cu-Cu Hybrid Bonding" menjelaskan bahwa *hybrid bonding* Cu-Cu — yang menggabungkan koneksi elektrik (*Cu-Cu direct bonding*) dengan koneksi dielektrik (*SiO₂-SiO₂ fusion bonding*) dalam satu langkah proses — telah menjadi *backbone* teknologi integrasi vertikal berdensitas ultra-tinggi, menggantikan *microbump* solder berbasis Sn-Ag yang secara inheren terbatas pada *pitch* minimum ~40 µm. DOI: [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6) menguraikan bahwa pitch koneksi Cu-Cu telah diproyeksikan turun dari 10 µm ke <2 µm dalam roadmap industri, memberikan densitas I/O per mm² yang meningkat dengan orde magnitudo.

Dalam konteks Teknik Industri, topik ini bukan sekadar persoalan teknis fabrikasi, melainkan keputusan rekayasa sistem yang menyentuh *design-for-manufacturability* (DFM), optimasi rantai pasok wafer foundry, manajemen *yield* multi-*die* dalam satu *package*, serta keputusan *make-or-buy* terhadap *chiplet* IP. Dokumen modul ini akan membedah formulasi matematis, prosedur rekayasa, dan aplikasi kuantitatif yang relevan bagi spesialis rekayasa sistem industri.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Yield Multi-Chiplet

Untuk sistem multi-*chiplet*, *yield* total paket tidak lagi mengikuti model *single-die* sederhana. Roze dan Gerber (2026) mengusulkan pendekatan *co-yield analysis* berbasis dekomposisi probabilistik. Jika sebuah paket tersusun atas $n$ *chiplet* dengan *yield* individual $Y_i$, maka *compound yield* sistem diberikan oleh:

$$Y_{sys} = \prod_{i=1}^{n} Y_i \cdot \prod_{j=1}^{m} Y_{bond_j}$$

di mana $Y_{bond_j}$ adalah *yield* proses *bonding* pada antarmuka $j$. Menggunakan model *Bose-Einstein* untuk *defect clustering* pada masing-masing *die*:

$$Y_i = \frac{1}{1 + D_i \cdot A_i}$$

dengan $D_i$ adalah densitas cacat (*defect density*) per cm² dan $A_i$ adalah luas *die* $i$ dalam cm². Untuk proses *hybrid bonding* Cu-Cu, densitas cacat *bonding* tipikal berada pada rentang $D_{bond} \approx 0{,}01 - 0{,}1$ cm⁻² menurut Lau (2023).

### 2.2 Persamaan RC Delay pada Interkoneksi Sub-Mikron

Pada *chiplet-to-chiplet* interface dengan pitch sangat halus, performa sinyal ditentukan oleh *RC delay* dari *through-silicon via* (TSV) dan *interconnect redistribution layer* (RDL). Resistansi TSV silikon tembaga konvensional:

$$R_{TSV} = \frac{\rho_{Cu} \cdot L_{TSV}}{\pi \cdot (r_o^2 - r_i^2)}$$

dengan $\rho_{Cu} \approx 1{,}68 \times 10^{-8}\ \Omega\cdot$m, $L_{TSV}$ adalah kedalaman TSV (50–100 µm), $r_o$ dan $r_i$ adalah jari-jari luar dan dalam TSV. Kapasitansi parasitik ke substrat:

$$C_{TSV} = \frac{2\pi \cdot \varepsilon_0 \cdot \varepsilon_{SiO_2} \cdot L_{TSV}}{\ln(r_o/r_i)}$$

sehingga *delay* total baris:

$$\tau_{RC} = 0{,}693 \cdot R_{TSV} \cdot C_{TSV}$$

Untuk $L_{TSV} = 50\ \mu m$, $r_o = 5\ \mu m$, $r_i = 2{,}5\ \mu m$, diperoleh $R_{TSV} \approx 27\ m\Omega$ dan $C_{TSV} \approx 0{,}61\ pF$, menghasilkan $\tau_{RC} \approx 11{,}5\ ps$ per TSV — memenuhi bandwidth UCIe-Standard ~32 Gbps.

### 2.3 Resistansi Termal Stack 3D

Pada integrasi 3D dengan *hybrid bonding*, manajemen termal menjadi *trade-off* antara densitas I/O dan disipasi panas. Resistansi termal vertikal satu lapis *die* adalah:

$$R_{th} = \frac{t_{die}}{k_{Si} \cdot A_{eff}}$$

dengan $t_{die}$ adalah ketebalan *die* (umumnya 50–775 µm setelah *thinning*), $k_{Si} \approx 148\ W/(m\cdot K)$, dan $A_{eff}$ adalah area efektif *heat-spreading*. Resistansi total *stack* $n$ lapis dengan antarmuka *bonding*:

$$R_{th,total} = \sum_{k=1}^{n} \frac{t_{die,k}}{k_{Si} \cdot A_k} + \sum_{j=1}^{n-1} R_{th,bond,j}$$

di mana $R_{th,bond,j}$ untuk lapisan *Cu-Cu hybrid bonding* tipikal berada pada $0{,}5 - 2\ K/W\cdot mm^2$ menurut data Lau (2023).

### 2.4 Model Densitas I/O dan Pitch Scaling

Densitas I/O per mm² pada *hybrid bonding* meningkat kuadratik terhadap reduksi pitch:

$$\sigma_{I/O} = \frac{1}{p^2}$$

sehingga penurunan pitch dari $10\ \mu m$ ke $2\ \mu m$ meningkatkan densitas dari $10{,}000$ ke $250{,}000$ koneksi per mm² (faktor 25×). Ini menjadi basis justifikasi ekonomi dari investasi *hybrid bonding* dibanding *microbump*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) menyajikan arsitektur EDA modern untuk *chiplet* dan 3D-IC yang mengikuti *framework* Unified Power Format (UPF) dan standar UCIe/BoW sebagai protokol *die-to-die*. Alur rekayasa dapat diabstraksikan dalam diagram alir berikut:

```
┌─────────────────────────────────────────────────────────┐
│  Tahap 1: System Specification & Architecture           │
│  - Definisikan partisi fungsional                        │
│  - Pilih protokol D2D (UCIe-A/S, BoW, XSR)              │
└────────────────────┬────────────────────────────────────┘
                     ▼
┌─────────────────────────────────────────────────────────┐
│  Tahap 2: Chiplet RTL Design & IP Integration           │
│  - Sintesis HDL per chiplet                              │
│  - Validasi IP blok KGD (known-good-die)                 │
└────────────────────┬────────────────────────────────────┘
                     ▼
┌─────────────────────────────────────────────────────────┐
│  Tahap 3: Physical Implementation (Co-Design)           │
│  - Floorplanning 2.5D/3D                                │
│  - TSV placement, RDL routing                            │
│  - Thermal & SI/PI co-simulation                        │
└────────────────────┬────────────────────────────────────┘
                     ▼
┌─────────────────────────────────────────────────────────┐
│  Tahap 4: Verification & Sign-off                       │
│  - DRC/LVS multi-die, LEC, formal verification           │
│  - Multi-physics reliability analysis                    │
└────────────────────┬────────────────────────────────────┘
                     ▼
┌─────────────────────────────────────────────────────────┐
│  Tahap 5: Package Assembly & Hybrid Bonding             │
│  - Wafer thinning (50-100 µm)                           │
│  - Cu-Cu hybrid bonding (300-400°C, 200