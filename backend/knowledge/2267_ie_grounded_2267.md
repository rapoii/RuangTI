# 2267 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hibrid Bonding, dan Optimisasi Lintas Domain

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *EDA Solution for Chiplet and 3D-IC Design*. 2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS). DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Cu-Cu Hybrid Bonding*. In: *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global sedang mengalami transisi paradigmatik dari desain *monolithic System-on-Chip* (SoC) menuju arsitektur *chiplet-based* dan *Three-Dimensional Integrated Circuit* (3D-IC). Pergeseran ini dipicu oleh berakhirnya hukum Moore pada node proses sub-3 nm, melonjaknya biaya *mask set* (mencapai USD 50–80 juta per *tape-out* pada node 2 nm), serta permintaan akan komputasi heterogen yang mengintegrasikan *logic*, *memory*, *analog/RF*, dan *photonics* dalam satu kemasan. Roze dan Gerber (2026), dalam makalah yang dipresentasikan pada *International Conference on Electronics Packaging and Hybrid Bonding Symposium* (ICEP-HBS) 2026, menyoroti bahwa solusi *Electronic Design Automation* (EDA) merupakan *enabler* strategis bagi adopsi chiplet secara masif, karena tanpa piranti otomatis yang mampu menangani partisi, verifikasi lintas *die*, dan simulasi multi-fisika, biaya rekayasa akan melonjak tidak terkendali.

Lau (2023) melengkapi konteks tersebut dengan menunjukkan bahwa teknologi *Cu-Cu hybrid bonding* adalah tulang punggung fisik dari *3D-IC stacking* modern, karena mampu memberikan pitch interkoneksi di bawah 10 μm — jauh lebih halus dibanding *micro-bump* solder tradisional (≥25 μm). Kombinasi antara EDA yang matang dan *hybrid bonding* yang presisi memungkinkan terbentuknya *Known-Good-Die* (KGD) stacking yang yield-nya dapat dimodelkan secara statistik untuk pengambilan keputusan manufaktur. Urgensi ekonominya terlihat pada proyeksi pasar: pasar chiplet global diproyeksikan menembus USD 100 miliar pada 2030 dengan CAGR >40%, sehingga kemampuan *co-design* antara tim *foundry*, *OSAT*, dan *system integrator* menjadi pembeda kompetitif utama. Tanpa kerangka EDA yang mengintegrasikan *floorplanning*, *place-and-route*, *thermal analysis*, dan *signal integrity* dalam satu *flow* tertutup, organisasi akan terjebak dalam *iteration loop* yang menaikkan *time-to-market* hingga 30–50% (Roze & Gerber, 2026).

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Resistansi Termal untuk Stack 3D-IC

Resistansi termal total dari *stack* N-*chiplet* dapat dimodelkan sebagai jaringan seri-paralel:

$$R_{th,\,total} = \sum_{i=1}^{N} \frac{t_i}{k_i \cdot A_{eff,i}} + R_{conv}$$

dengan $t_i$ adalah ketebalan lapisan ke-$i$ (μm), $k_i$ konduktivitas termal material (W/m·K), $A_{eff,i}$ luas efektif aliran panas (m²), dan $R_{conv}$ resistansi konveksi ke lingkungan. Untuk *underfill* dan *TIM* (Thermal Interface Material), $k$ sangat rendah (~0.2–3 W/m·K) sehingga menjadi *bottleneck* termal.

### 2.2 Model Yield Chiplet (Distribusi Negatif Binomial)

Karena cacat pada wafer cenderung mengelompok (*defect clustering*), model *negative binomial* lebih akurat dibanding Poisson:

$$Y_{NB}(A) = \left(1 + \frac{D \cdot A}{\alpha}\right)^{-\alpha}$$

dengan $D$ densitas cacat (cacat/cm²), $A$ luas *die* (cm²), dan $\alpha$ parameter *clustering*. Yield sistem dengan $n$ jenis chiplet yang masing-masing muncul sebanyak $N_i$ unit:

$$Y_{system} = \prod_{i=1}^{n} \left[\left(1 + \frac{D_i \cdot A_i}{\alpha_i}\right)^{-\alpha_i}\right]^{N_i}$$

### 2.3 Model Kerugian Saluran Interkoneksi

Untuk jalur *hybrid bonding* berkecepatan tinggi (mis. *UCIe-Standard*, 32 Gbps), total *insertion loss*:

$$\alpha_{dB}(f) = \alpha_{skin} \sqrt{f} + \alpha_{diel} \cdot f + \alpha_{conn}$$

dengan $\alpha_{skin} = R_{dc} / (2\pi r_{cond}) \cdot \sqrt{\rho/\mu_r}$ adalah kontribusi *skin effect*, $\alpha_{diel}$ kontribusi rugi dielektrik (BDD ~1.5 untuk material *low-k*), dan $\alpha_{conn}$ rugi konektor.

### 2.4 Model Pitch Hybrid Bonding Cu-Cu

Luas pad efektif pada pitch $p$ dan dimensi $w \times t$:

$$A_{pad} = w \cdot t, \qquad p = w + s$$

dengan $s$ adalah spasi. Kapasitas arus DC:

$$I_{max} = J_{max} \cdot A_{pad}$$

Untuk elektromigrasi, lifetime mengikuti *Black's equation*:

$$MTTF = A_{EM} \cdot (J)^{-n} \cdot \exp\left(\frac{E_a}{k_B T}\right)$$

dengan $n \approx 2$ untuk tembaga dan $E_a \approx 0.9$ eV.

### 2.5 Optimisasi Lintas Domain

Fungsi objektif multi-domain:

$$\min_{x} \; w_1 \cdot P(x) + w_2 \cdot T_{junc}(x) + w_3 \cdot \tau_{delay}(x) - w_4 \cdot Y(x)$$

tunduk pada kendala geometris, termal, dan manufaktur (Lau, 2023; Roze & Gerber, 2026).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) mengusulkan *flow* EDA terpadu sebagai berikut:

1. **System-Level Specification** — Penentuan *bandwidth*, *latency*, dan *power budget* per *die interface* menggunakan bahasa standar (SystemC-TLM, UCIe spec).
2. **Chiplet Partitioning** — Optimisasi partisi logika berdasarkan *trade-off* antara *yield*, *thermal*, dan *interconnect cost*. Algoritma *min-cut* dengan bobot termal digunakan.
3. **Hierarchical Floorplanning** — Penempatan *chiplet* dalam interposer (*passive* atau *active silicon interposer*) dengan optimisasi RDL (*Redistribution Layer*).
4. **Co-Design TSV & Hybrid Bonding** — Generasi *Through-Silicon Via* (TSV) dan *micro-pad* Cu-Cu secara simultan, mengikuti pedoman pitch Lau (2023) yaitu 3–10 μm.
5. **Multi-Physics Sign-Off** — Simulasi gabungan *signal integrity* (HSPICE), *power integrity*, *thermal* (3D-IC solver), dan *mechanical stress* (CTE mismatch).
6. **DFT & KGD Verification** — Penyertaan *scan chain* dan *BIST* pada setiap *die* untuk memastikan *Known-Good-Die* sebelum stacking.
7. **Manufacturing Hand-Off** — Ekspor GDSII per chiplet + GDSII interposer ke *foundry/OSAT* dengan dokumentasi proses *bonding*.

Diagram alir *closed-loop* ini memastikan setiap iterasi desain mempertimbangkan *yield*, *thermal*, dan *performance* secara bersamaan — berbeda dengan *flow* SoC monolitik yang sequence-nya linier.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Desain SoC heterogen dengan 4 chiplet pada *silicon interposer* 30 × 30 mm², target operasi *UCIe* 32 Gbps.

**Input Parameter:**
| Parameter | Nilai |
|---|---|
| Luas chiplet logic (A₁) | 1.0 cm² |
| Luas chiplet HBM (A₂) | 1.5 cm² |
| Densitas cacat (D) | 0.05/cm² |
| Clustering (α) | 2.5 |
| Pitch hybrid bonding | 6 μm |
| Pad Cu (w × t) | 4 × 5 μm |
| Spasi (s) | 2 μm |
| Arus per pad (J_max) | 5 × 10⁵ A/cm² |
| Tebal TIM (k) | 3.0 W/m·K |
| Tebal TIM | 50 μm |

**Langkah 1 — Yield per chiplet (logika):**

$$Y_{logic} = \left(1 + \frac{0.05 \times 1.0}{2.5}\right)^{-2.5} = (1.02)^{-2.5} = 0.9512$$

Untuk chiplet HBM (A₂ = 1.5 cm²):

$$Y_{HBM} = (1.03)^{-2.5} =