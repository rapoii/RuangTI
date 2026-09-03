# 2987 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen dengan Optimasi Hybrid Bonding Tembaga-Tembaga

**Domain:** Teknik Industri & Rekayasa Sistem Industri (Manufaktur Semikonduktor Lanjutan)
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Transisi arsitektur mikroelektronika dari *System-on-Chip* (SoC) monolitik menuju paradigma *chiplet* dan *Three-Dimensional Integrated Circuit* (3D-IC) merupakan respons industri terhadap tiga tekanan struktural simultan: (1) batas fisik *reticle limit* litografi EUV (~26 mm × 33 mm untuk bidang eksposur), (2) kemerosotan *yield* pada die monolitik besar yang mengikuti hukum *Stapper* $Y_{die} = e^{-D_0 \cdot A}$, dan (3) peningkatan drastis biaya masker fotosel untuk node N3 dan N2 yang melampaui US$ 25 juta per set (Roze & Gerber, 2026). Dalam konteks ini, *Electronic Design Automation* (EDA) berperan bukan sekadar sebagai piranti lunak bantu, melainkan sebagai *decision support system* untuk mempartisi arsitektur menjadi unit-unit chiplet yang dapat di-*yield*-kan secara independen, lalu mengintegrasikannya kembali melalui *heterogeneous integration* (HI).

Roze dan Gerber (2026) menyoroti bahwa rantai nilai EDA modern harus mengakomodasi empat fase kritis — *system-level partitioning, floorplanning, sign-off, dan package-board co-design* — dalam satu *unified database* yang dapat diakses oleh seluruh pemangku kepentingan (arsitek SoC, desainer paket, dan perakit). Sementara itu, Lau (2023) mengidentifikasi bahwa keberhasilan integrasi heterogen sangat ditentukan oleh kemampuan proses *Cu-Cu hybrid bonding*, yang menawarkan pitch sambungan $\leq 10\ \mu m$ dan menghilangkan kebutuhan *underfill* melalui difusi termal langsung. Kombinasi keduanya menuntut *tool flow* EDA yang mampu mengoptimasi simultan tiga variabel keputusan: geometri partisi chiplet, distribusi *Thermal Via Silicon* (TSV), dan parameter proses *bonding* (suhu, tekanan, durasi *anneal*).

Urgensi ekonomi tampak dari laporan industri bahwa biaya total kepemilikan (*total cost of ownership*) untuk integrasi 3D-IC pada volume produksi $>100.000$ unit dapat ditekan hingga 35% dibanding SoC monolitik, asalkan *yield* komposit paket $>90\%$ tercapai. Pencapaian ambang batas ini mensyaratkan EDA yang tidak hanya menghasilkan *layout* yang valid secara DRC (*Design Rule Check*), tetapi juga mampu melakukan prediksi *thermal-mechanical-electrical* dengan akurasi memadai pada fase pra-fabrikasi. Inilah celah yang coba dijawab oleh pendekatan modern yang dipublikasikan dalam kedua literatur acuan.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Yield Komposit untuk Stack Chiplet

Untuk paket 3D-IC berisi $n$ chiplet dengan luas masing-masing $A_i$ dan *defect density* efektif $D_0$, *yield* komposit mengikuti:

$$Y_{3D} = \prod_{i=1}^{n} Y_i \cdot \prod_{j=1}^{m} Y_{bond,j} \approx \prod_{i=1}^{n} e^{-D_0 A_i} \cdot \prod_{j=1}^{m} (1 - q_j)^{N_j}$$

dengan $N_j$ adalah jumlah sambungan pada bidang bonding ke-$j$ dan $q_j$ adalah probabilitas kegagalan satu sambungan (*joint failure probability*). Model *negative binomial* memberikan generalisasi yang lebih akurat ketika *cluster defects* dominan:

$$Y_{NB} = (1 + D_0 A / c)^{-c}$$

dengan parameter klastering $c$. Nilai $c \to \infty$ menghasilkan kembali model Poisson murni.

### 2.2 Resistansi Termal Stack 3D

Resistansi termal total stack $n$-die dengan *thermal interface material* (TIM) antardie:

$$R_{th,total} = \sum_{i=1}^{n} \frac{t_i}{k_i A_{eff,i}} + \sum_{i=1}^{n-1} \frac{BLT_i}{k_{TIM,i} A_{eff,i}}$$

dengan $t_i$ adalah ketebalan die, $k_i$ konduktivitas termal, $BLT$ (*bond line thickness*) lapisan *bonding*, dan $A_{eff,i}$ luas efektif. Untuk Cu-Cu *hybrid bonding*, $BLT \approx 0$ sehingga kontribusi antardie turun signifikan.

### 2.3 Model Biaya Total Kepemilikan

$$C_{TCO} = \sum_{i=1}^{n} (C_{wafer,i} + C_{dicing,i} + C_{KGD,i}) + \sum_{j=1}^{m} C_{bonding,j} + C_{package} + C_{test}$$

dengan $C_{KGD,i}$ adalah biaya *Known-Good-Die* yang melibatkan *burn-in* dan *probe test* ekstensif. Tujuan optimasi EDA:

$$\min_{P,T,B} C_{TCO} \quad \text{subject to} \quad Y_{3D} \geq Y_{min},\ T_{junc} \leq T_{max}$$

### 2.4 Model Keandalan Sambungan (Weibull)

Daya tahan sambungan Cu-Cu terhadap siklus termal mengikuti:

$$R(t) = \exp\left[-\left(\frac{t}{\eta}\right)^{\beta}\right]$$

dengan $\eta$ *characteristic life* dan $\beta$ parameter bentuk. Untuk *bonding* yang dioptimasi, $\beta > 8$ mengindikasikan distribusi kegagalan sempit (*narrow failure band*), yang diinginkan untuk prediksi *field reliability*.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur *Tool Flow* EDA untuk Chiplet

Roze dan Gerber (2026) mengusulkan *tool flow* berlapis dengan *unified data backbone* (UMF — *Universal Multi-die Format*) yang menjembatani domain *front-end design* dan *back-end package*. Diagram alirnya dapat diringkas sebagai berikut:

```
┌─────────────────────────────────────────────────────────────┐
│  FASE 1: System Specification (UCie / BoW / OIF Standards) │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  FASE 2: Partitioning & Floorplanning (multi-objective GA) │
│     • Optimasi: area, Panjang interkoneksi, thermal, yield  │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  FASE 3: 3D Place & Route (TSV-aware, Bump-aware)          │
│     • TSV insertion, Bump assignment, Signal integrity      │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  FASE 4: Multi-physics Verification                         │
│     • Thermal • EM • SI/PI • Thermo-mechanical • Latch-up  │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  FASE 5: Sign-off & Hand-off to Foundry/Packaging House     │
└─────────────────────────────────────────────────────────────┘
```

### 3.2 SOP Implementasi Proses Cu-Cu Hybrid Bonding

Berdasarkan kerangka yang dirujuk Lau (2023) untuk fabrikasi paket chiplet, tahapan operasionalnya:

1. **Preparasi Wafer**: CMP (*Chemical Mechanical Polishing*) untuk mencapai *surface roughness* $R_a < 0{,}5\ nm$; deposisi seed Cu dan *electroplating* Cu pada *bonding pad* (target $BLT \leq 1\ \mu m$).
2. **Pre-bonding**: Peletakan wafer berpasangan pada suhu ruang atau 100–150°C dengan