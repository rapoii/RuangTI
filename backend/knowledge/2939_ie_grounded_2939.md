# 2939 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hybrid Bonding Cu-Cu, dan Optimasi Multi-Fisika dalam Rantai Pasok Semikonduktor Lanjutan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *EDA Solution for Chiplet and 3D-IC Design*. 2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS). DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Cu-Cu Hybrid Bonding*. Dalam: *Chiplet Design and Heterogeneous Integration Packaging*. Springer. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global sedang mengalami pergeseran paradigma fundamental dari arsitektur *System-on-Chip* (SoC) monolitik menuju desain berbasis *chiplet* dan integrasi tiga dimensi (3D-IC). Pergeseran ini dipicu oleh beberapa tekanan struktural yang simultan. Pertama, *cost curve* teknologi CMOS sub-3 nm meningkat secara eksponensial — biaya masker (mask set) untuk proses N2 telah melampaui USD 50 juta per desain, sementara *time-to-yield* rata-rata melebihi 12 bulan. Kedua, Hukum Moore mengalami perlambatan dimensional (*More-than-Moore* menjadi strategis), dan ketiga, kompleksitas *routing* pada SoC besar (>100 mm²) mencapai *routing congestion* yang tidak lagi dapat diatasi dengan EDA konvensional 2D planar. Roze dan Gerber (2026) dalam paper *EDA Solution for Chiplet and 3D-IC Design* (DOI: 10.23919/icep-hbs69241.2026.11550563) menekankan bahwa "arsitektur chiplet bukan sekadar pilihan teknologi, melainkan satu-satunya rute yang secara ekonomi layak untuk mempertahankan *scaling* di era post-planar."

Dalam konteks operasional industri, desainer chip korporasi menghadapi tantangan multi-domain: partisi *functional block* antara beberapa *die*, perencanaan *through-silicon via* (TSV) dan *redistribution layer* (RDL), verifikasi termal, integritas sinyal, integritas daya, dan terakhir — yang paling kritis — validasi *assembly* lintas-vendor. Standar antarmuka seperti **Universal Chiplet Interconnect Express (UCIe)** dan **Bunch of Wires (BoW)** telah muncul sebagai protokol interoperabilitas, namun Roze & Gerber menunjukkan bahwa tooling EDA warisan (*legacy tools*) dirancang untuk *flat die* dan belum sepenuhnya menangani kompleksitas *co-design* hirarkis dan verifikasi multi-fisika simultan.

Di sisi manufaktur, teknologi **Cu-Cu Hybrid Bonding** yang diuraikan oleh John H. Lau (2023) dalam *Chiplet Design and Heterogeneous Integration Packaging* (DOI: 10.1007/978-981-19-9917-8_6) menjadi *enabler* fisik yang krusial. Berbeda dengan solder *microbump* yang memiliki pitch minimum ~20–40 µm dan resistansi kontak tinggi, hybrid bonding Cu-Cu memungkinkan pitch koneksi <3 µm dengan resistansi spesifik <1 mΩ/sambungan dan self-inductance yang jauh lebih rendah. Teknologi ini memungkinkan **bandwidth density** >10 Tb/s/mm² pada *die-to-die interconnect*, sebuah metrik yang mustahil dicapai dengan teknologi *bump* konvensional. Sinergi antara kapabilitas EDA generasi baru dan manufaktur hybrid bonding menjadi *backbone* dari seluruh rantai pasok chip modern — dari fabless designer hingga OSAT (Outsourced Semiconductor Assembly and Test).

Urgensi industri semakin nyata dengan masuknya teknologi ini ke produksi *High-Bandwidth Memory* (HBM4/HBM5) pada NVIDIA, AMD, dan TSMC's SoIC (System on Integrated Chips). Penguasaan terhadap metodologi EDA chiplet dan proses hybrid bonding bukan sekadar keunggulan kompetitif, melainkan kebutuhan strategis untuk mempertahankan relevansi dalam industri semikonduktor senilai USD 600 miliar yang terus berevolusi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Yield Multi-Die Chiplet

Yield per *die* individual pada proses fabrikasi wafer dimodelkan dengan distribusi binomial negatif (atau model Seeds):

$$Y_{die} = \left(1 + \frac{D \cdot A}{\alpha}\right)^{-\alpha}$$

di mana $D$ adalah *defect density* (cacat/cm²), $A$ adalah luas *die* (cm²), dan $\alpha$ adalah *clustering parameter* (umumnya $\alpha \approx 2$). Untuk sistem chiplet multi-die, asumsi kritis adalah bahwa cacat bersifat independen antar-die, sehingga:

$$Y_{system} = \prod_{i=1}^{n} Y_{die,i}$$

Untuk sistem monolitik setara dengan luas total $A_{mono} = \sum A_i$:

$$Y_{mono} = \left(1 + \frac{D \cdot \sum A_i}{\alpha}\right)^{-\alpha}$$

Selalu berlaku $Y_{system} > Y_{mono}$ selama $D > 0$ dan $n > 1$, yang merupakan justifikasi matematis utama arsitektur chiplet.

### 2.2 Model Biaya Per-Fungsi (Cost-per-Function)

$$C_{good\_die} = \frac{C_{wafer}}{N_{die} \cdot Y_{die}} + C_{pkg} + C_{test}$$

di mana $N_{die}$ adalah jumlah *die* per wafer:

$$N_{die} = \frac{\pi \cdot (R_{wafer} - \text{edge loss})^2}{A_{die}} - \pi \cdot \frac{R_{wafer} - \text{edge loss}}{\sqrt{A_{die}}}$$

Untuk arsitektur chiplet, biaya total sistem:

$$C_{system} = \sum_{i=1}^{n}\left(\frac{C_{wafer,i}}{N_{die,i} \cdot Y_{die,i}} + C_{test,i}\right) + C_{interposer} + C_{assembly} + C_{pkg}$$

### 2.3 Resistansi Thermal Stack 3D-IC

Model resistansi termal satu dimensi untuk stack multi-die:

$$R_{\theta,total} = \sum_{i=1}^{n} \frac{t_i}{k_i \cdot A_{eff,i}} + R_{\theta,TIM} + R_{\theta,heatsink}$$

di mana $t_i$ adalah tebal *die* ke-$i$, $k_i$ adalah konduktivitas termal efektif (memperhitungkan TSV sebagai *thermal via*), dan $A_{eff,i}$ adalah luas efektif. Untuk stack dengan TSV, konduktivitas efektif *layer* termodifikasi:

$$k_{eff} = k_{Si} \cdot (1 - f_{TSV}) + k_{Cu} \cdot f_{TSV} + \eta \cdot k_{Cu} \cdot f_{TSV} \cdot (k_{Si}/k_{Cu})$$

dengan $\eta \approx 0.4$ sebagai efisiensi kontribusi TSV terhadap jalur termal vertikal.

### 2.4 Parasitik Sambungan Hybrid Bonding Cu-Cu

Untuk satu *bump* hybrid bonding dengan pitch $p$, resistansi DC:

$$R_{bump} = \frac{\rho_{Cu} \cdot L_{via}}{A_{via}} + R_{contact}$$

dengan $\rho_{Cu} = 1.68 \times 10^{-8}$ Ω·m. Kapasitansi parasitik:

$$C_{bump} = \varepsilon_0 \cdot \varepsilon_r \cdot \frac{A_{pad}}{d_{ILD}}$$

Self-inductance pendekatan untuk geometri silinder pendek:

$$L_{bump} \approx \frac{\mu_0}{2\pi} \cdot l \cdot \left[\ln\left(\frac{2l}{r}\right) - 1\right]$$

Delay propagasi untuk sinyal *die-to-die*:

$$\tau_{prop} = 0.35 \cdot \sqrt{L_{bump} \cdot C_{bump}} \quad \text{(untuk matched impedance)}$$

### 2.5 Fungsi Objektif Floorplanning Multi-Obyektif

Optimasi hirarkis EDA chiplet meminimalkan:

$$\mathcal{F} = w_1 \cdot \text{Area}_{active} + w_2 \cdot \sum \text{Wirelength}_{D2D} + w_3 \cdot R_{\theta,max} + w_4 \cdot \text{Mismatch}_{thermal}$$

dengan bobot $w_i$ yang dapat diatur per-*use case* (misalnya HPC vs mobile). Ini merupakan formulasi yang diacu oleh Roze dan Gerber (2026) sebagai basis *optimization engine* dalam EDA generasi baru.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Alur Kerja EDA untuk Chiplet dan 3D-IC

Implementasi sistematis mengikuti *flow* hirarkis berikut sesuai metodologi yang diuraikan Roze & Gerber (2026):

```
┌─────────────────────────────────────────────────────────┐
│  FASE 1: SYSTEM SPECIFICATION & PARTITIONING            │
│  • Definisi fungsi (compute, memory, I/O, analog)        │
│  • Partisi chiplet (decide which block → separate die)   │
│  • Pilih standar interconnect: UCIe vs BoW vs proprietary│
└────────────────────────┬────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────┐
│  FASE 2: INDIVIDUAL DIE DESIGN (PARALLEL)               │
│  • RTL synthesis per chiplet                             │
│  • Physical implementation per die                       │
│  • DFT insertion & ATPG                                  │
└────────────────────────┬────────────────────────────────┘
                         ▼
┌─────────────────────────────────────────────────────────┐
│  FASE 3: 3D/2.5D CO-DESIGN                               │
│  • Floorplanning (chiplet placement on interposer/substrate)