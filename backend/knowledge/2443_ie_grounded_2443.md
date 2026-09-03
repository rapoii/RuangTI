# 2443 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Perspektif Teknik Industri untuk Manufaktur Semikonduktor Heterogen

**Domain:** Teknik Industri & Rekayasa Sistem Industri — Rantai Pasok Semikonduktor Lanjutan
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *EDA Solution for Chiplet and 3D-IC Design*. 2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS). DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Cu-Cu Hybrid Bonding*. Dalam: *Chiplet Design and Heterogeneous Integration Packaging*, Springer. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global sedang mengalami pergeseran paradigma fundamental dari pendekatan *monolithic System-on-Chip* (SoC) menuju arsitektur *disaggregated chiplet* yang diintegrasikan secara heterogen. Menurut Roze dan Gerber (2026) dalam proceedings *IEEE ICEP-HBS 2026*, perlambatan laju *node scaling* pada hukum Moore telah mendorong industri untuk mengadopsi strategi *More-than-Moore* melalui integrasi chiplet, di mana beberapa *die* kecil dengan proses fabrikasi optimal disusun dalam satu paket untuk mencapai keseimbangan performa, biaya, dan *time-to-market*. Pergeseran ini memiliki implikasi langsung terhadap rekayasa sistem industri karena mengubah struktur biaya produksi, kompleksitas rantai pasok, dan metodologi perencanaan kapasitas pabrik *back-end*.

Konteks ekonomi mikro industri ini sangat signifikan. Pasar *heterogeneous integration* diproyeksikan tumbuh pada CAGR >15% hingga 2030, didorong oleh permintaan *High-Performance Computing* (HPC), akselerator AI (GPU H100/B200), dan kemasan memori *High-Bandwidth Memory* (HBM4). Roze dan Gerber (2026) menekankan bahwa keberhasilan desain chiplet sangat bergantung pada *Electronic Design Automation* (EDA) yang mampu mengelola ko-desain multi-fisika secara simultan — termasuk integritas sinyal, integritas daya (*power delivery network*), termal, dan mekanis — yang sebelumnya tidak ditangani dalam alur desain SoC monolitik.

Sementara itu, Lau (2023) dalam bab buku *Chiplet Design and Heterogeneous Integration Packaging* (Springer) menyoroti bahwa *Cu-Cu hybrid bonding* telah muncul sebagai teknologi antarmuka kritis yang memungkinkan pitch interkoneksi sub-mikron (<3 µm), menggantikan microbumps berbasis Sn-Ag yang memiliki batas pitch ~40 µm. Kombinasi antara EDA lanjutan dan proses *hybrid bonding* menjadi *enabler* utama bagi stack 3D-IC dan *logic-on-memory* HBM. Urgensi operasionalnya nyata: kesalahan pada tahap *floorplanning* atau verifikasi lintas-die akan menghasilkan *re-spin* yang merugikan US$ 5–20 juta dan menunda peluncuran produk 6–9 bulan. Dengan demikian, pemahaman teknik industri mengenai solusi EDA bukan sekadar isu desain, melainkan keputusan strategis terkait *capital allocation*, mitigasi risiko rantai pasok, dan *yield management* pada lini *advanced packaging*.

## 2. Landasan Teori & Formulasi Matematis

Desain chiplet memerlukan kerangka kuantitatif yang memodelkan interkoneksi, termal, dan hasil (yield) secara integral. Roze dan Gerber (2026) mengusulkan bahwa EDA modern harus menyelesaikan empat persamaan约束 simultan yang dimodelkan sebagai berikut.

**(a) Aturan Rent untuk Estimasi Interkoneksi Chiplet.** Jumlah terminal I/O yang dibutuhkan *chiplet* dalam paket heterogen mengikuti generalisasi aturan Rent:

$$I = K \cdot N^{p}$$

dengan $N$ adalah jumlah blok logika pada *chiplet*, $K$ adalah konstanta Rent, dan $p$ adalah eksponen Rent (umumnya 0,5–0,7 untuk logika acak). Untuk *assembly* heterogen dengan $M$ chiplet, total pin inter-chiplet yang dibutuhkan menjadi:

$$I_{\text{total}} = \sum_{i=1}^{M} K_i \cdot N_i^{p_i} + I_{\text{inter}}$$

di mana $I_{\text{inter}}$ merepresentasikan link antar-die melalui *interposer* atau *hybrid bonding*.

**(b) Model Resistansi Termal Stack 3D.** Lau (2023) menekankan bahwa resistansi termal konduksi pada tumpukan 3D-IC dimodelkan sebagai:

$$R_{\text{th,cond}} = \sum_{j=1}^{L} \frac{t_j}{k_j \cdot A_j}$$

dengan $t_j$ adalah tebal lapisan ke-ji (Si, underfill, TIM, heatsink), $k_j$ konduktivitas termal, dan $A_j$ luas penampang efektif. Untuk stack dengan *Through-Silicon Via* (TSV), koreksi dilakukan dengan *effective thermal conductivity*:

$$k_{\text{eff}} = k_{\text{Si}} \cdot (1 - \phi) + k_{\text{Cu}} \cdot \phi$$

dengan $\phi$ adalah fraksi volume TSV.

**(c) Model Hasil Kompleks (Compound Yield).** Roze dan Gerber (2026) memformulasi hasil *known-good-die* (KGD) menjadi:

$$Y_{\text{system}} = \prod_{i=1}^{M} Y_i \cdot Y_{\text{bond}}^{M-1}$$

dengan $Y_i$ adalah hasil fabrikasi chiplet ke-$i$ dan $Y_{\text{bond}}$ adalah hasil proses *hybrid bonding* (umumnya 0,95–0,99 untuk Cu-Cu per Lau, 2023). Penurunan eksponensial yield terhadap jumlah die mendorong pencarian arsitektur dengan jumlah die minimal.

**(d) Model Kehilangan Saluran Inter-Chiplet.** Untuk link sinyal melalui *hybrid bonding* dengan pitch $p_b$, resistansi kontak dimodelkan sebagai:

$$R_{\text{bond}} = \frac{\rho_{\text{Cu}} \cdot h_{\text{bond}}}{A_{\text{pad}}} = \frac{\rho_{\text{Cu}} \cdot h_{\text{bond}}}{\pi (p_b/2)^2}$$

sehingga *energy per bit* pada link UCIe menjadi $E_{\text{bit}} \propto C \cdot V^2$ dengan kapasitansi total $C = C_{\text{pad}} + C_{\text{wire}}$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Berdasarkan Roze dan Gerber (2026), alur kerja EDA untuk chiplet dan 3D-IC mengikuti SOP berlapis sebagai berikut:

**Tahap 1 — Spesifikasi Sistem & Partisi.** Mendefinisikan target performa, *power budget*, dan biaya. Partisi dilakukan menggunakan *mixed-integer linear programming* (MILP) dengan fungsi objektif meminimalkan biaya $\sum c_i N_i$ terhadap约束 bandwidth $B_{\text{inter}} \geq B_{\min}$.

**Tahap 2 — Co-Design Multi-Fisika.** Platform EDA (Synopsys 3DIC Compiler, Cadence Integrity 3D-IC, Siemens Calibre 3DThermal) mengeksekusi secara simultan: *floorplanning* antar-die, *TSV/bump planning*, simulasi termal transien, dan analisis integritas sinyal (S-parameter extraction).

**Tahap 3 — Verifikasi Lintas-Die.** Standar IEEE Std 1838-2019 mendefinisikan *die-to-die interconnect* abstraction layer. SOP verifikasi mencakup DRC/LVS multi-die, *power-grid analysis* dengan coupling antar-die, dan *signal integrity* link margin >15 dB pada *eye diagram*.

**Tahap 4 — Assembly & Bonding Validation.** Lau (2023) menetapkan SOP proses *Cu-Cu hybrid bonding* dengan parameter: surface roughness $R_a < 0,5$ nm, annealing 200–300°C selama 30–60 menit, dan dwell pressure 0,1–0,3 MPa. Kriteria kontrol kualitas: bond strength >2 J/m² dan *contact resistance* < 50 mΩ per bond.

**Tahap 5 — Yield Ramp-Up.** Menggunakan *statistical binning* dan *in-line metrology* (acoustic microscopy, X-ray) untuk mengidentifikasi *defect clusters* pada interface *hybrid bond*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Desain akselerator AI dengan 4 chiplet (1 *base die* logika 5nm + 2 *compute chiplets* 3nm + 1 *I/O die* 7nm) di-stack dengan 8 *stacks* HBM4 melalui *Cu-Cu hybrid bonding* (pitch 2 µm).

**Input Parameter (berdasarkan Lau, 2023 & Roze & Gerber, 2026):**

| Parameter | Nilai |
|---|---|
| Dimensi chiplet | 25 × 25 mm |
| Tebal Si | 750 µm |
| $k_{\text{Si}}$ | 150 W/m·K |
| Pitch TSV | 5 µm, diameter 3 µm, $\phi$ = 0,28 |
| Pitch hybrid bond | 2 µm, tinggi bond 2 µm |
| Yield per die ($Y_i$) | 0,92 |
| Yield bonding ($Y_{\text{bond}}$) | 0,98 |
| K Rent, $p$ | 4,0; 0,6 |

**Perhitungan 1: Yield Sistem.**
$$Y_{\text{system}} = (0,92)^{4} \times (0,98)^{4+8-1} = 0,716 \times 0,618 = 0,443$$
Artinya, hanya 44,3% paket lolos uji KGD — menggarisbawahi urgensi *redundancy* dan *repair architecture* dalam desain.

**Perhitungan 2: Resistansi Termal Konduksi.**
Untuk stack 3-die (logika + 2 compute) dengan TIM di antara:
$$R_{\text{th}} = \frac{3 \times 750 \