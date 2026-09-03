# 3003 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hybrid Bonding, dan Optimasi Multi-Fisika

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global tengah mengalami transisi paradigmatik dari arsitektur monolitik System-on-Chip (SoC) menuju paradigma *heterogeneous integration* (HI) berbasis chiplet dan Three-Dimensional Integrated Circuit (3D-IC). Pergeseran ini dipicu oleh tiga tekanan struktural yang simultan: (1) melonjaknya biaya litografi *sub-3 nm* yang mendekati skala ekonomi infleksinya, (2) menurunnya *yield* wafer monolitik seiring meningkatnya area die, dan (3) permintaan akan komputasi heterogen (CPU + GPU + HBM + AI accelerator) dalam *form factor* terbatas. Roze dan Gerber (2026) dalam makalahnya di *International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)* menegaskan bahwa Electronic Design Automation (EDA) konvensional tidak lagi memadai untuk mengorkestrasi puluhan chiplet, *interposer*, *through-silicon via* (TSV), dan *bump* mikro dalam satu *design closure* simultan (DOI: 10.23919/icep-hbs69241.2026.11550563).

Menurut Lau (2023), biaya desain dan mask set untuk node N2 (2 nm) telah melampaui ambang USD 500 juta per produk, sehingga arsitektur chiplet dengan *known-good-die* (KGD) menjadi satu-satunya rute komersial yang layak secara kapital. Lebih lanjut, Roze dan Gerber (2026) menyatakan bahwa tantangan engineering inti bukan lagi pada fabrikasi individual chiplet, melainkan pada koherensi lintas-domain: *signal integrity* (SI), *power integrity* (PI), *thermal*, *mechanical warpage*, dan *Design-for-Test* (DFT) harus dioptimasi secara *co-simulation* sebelum tape-out. Urgensi operasional ini memicu permintaan akan *platform* EDA *unified* yang mampu menjembatani gap antara arsitektur sistem, *physical implementation*, dan verifikasi packaging.

Secara ekonomis, pasar chiplet global diproyeksikan menembus USD 100 miliar pada 2030 (Roze & Gerber, 2026). Untuk konteks Indonesia, momentum ini relevan karena program nasional *Indonesia Semiconductor Roadmap* dan target substitusi impor komponen elektronik (yang saat ini >70%) memerlukan kapabilitas desain EDA *advanced packaging*. Dokumen Knowledge Base ini akan membedah secara kuantitatif solusi EDA yang dimaksudkan oleh Roze dan Gerber, dengan kerangka Cu-Cu Hybrid Bonding dari Lau (2023) sebagai referensi parameter *pitch*, *warpage*, dan *yield* yang digunakan dalam simulasi numerik pada Bagian 4.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Biaya dan Yield Chiplet

Model fundamental dalam desain chiplet adalah dekomposisi biaya total sistem sebagai fungsi *yield* dan jumlah chiplet aktif (Roze & Gerber, 2026). Yield sistem untuk arsitektur chiplet direpresentasikan sebagai:

$$Y_{system} = \prod_{i=1}^{N} Y_{chiplet,i} \cdot Y_{bonding,i}$$

di mana $N$ adalah jumlah chiplet berbeda, $Y_{chiplet,i}$ adalah yield fabrikasi chiplet ke-$i$, dan $ $Y_{bonding,i}$ adalah yield proses hybrid bonding. Berbeda dengan SoC monolitik, kelayakan suatu sistem chiplet memiliki toleransi degradasi hingga titik kritis:

$$Y_{system} = \sum_{k=K}^{N} \binom{N}{k} Y_{chiplet}^k (1 - Y_{chiplet})^{N-k} \cdot Y_{bonding}^k$$

di mana $K$ adalah jumlah minimum chiplet fungsional agar sistem dapat di-*reconfigure* (fault-tolerant routing). Model ini diperkenalkan oleh Lau (2023) untuk sistem 3D-IC dengan *redundant die*.

### 2.2 Formulasi Thermal 3D-IC

Distribusi temperatur die dihitung menggunakan persamaan konduksi panas *steady-state* dengan sumber volumetrik:

$$\nabla \cdot (k(T) \nabla T) + q''' = 0$$

Untuk *stack* 3D-IC dengan $m$ die, total resistansi termal vertikal didekati dengan *thermal resistance network* (Roze & Gerber, 2026):

$$R_{th,total} = \sum_{j=1}^{m} \frac{t_j}{k_j \cdot A_{eff,j}} + R_{TIM} + R_{HS}$$

dengan $t_j$ adalah ketebalan die ke-$j$, $k_j$ konduktivitas termal material, $A_{eff,j}$ luas efektif *heat spreading*, $R_{TIM}$ resistansi *thermal interface material*, dan $R_{HS}$ resistansi *heat spreader*. Temperatur *junction* maksimum:

$$T_{j,max} = P_{diss} \cdot R_{th,total} + T_{amb}$$

### 2.3 Hybrid Bonding Pitch dan Interconnect Density

Lau (2023) mendefinisikan *bonding pitch* $p$ sebagai jarak center-to-center antara interconnect Cu-Cu. Densitas interkoneksi per satuan luas:

$$\sigma_{interconnect} = \frac{1}{p^2} \quad [\text{per } \mu m^2]$$

Untuk pitch $p = 3 \ \mu m$ (state-of-the-art Cu-Cu hybrid bonding), densitas teoritis mencapai:

$$\sigma_{3\mu m} = \frac{1}{(3)^2} = 0{,}1111 \ \text{per } \mu m^2 = 1{,}11 \times 10^5 \ \text{per } mm^2$$

### 2.4 Formulasi Warpage dan Stress

Warpage substrat *fan-out wafer-level packaging* (FOWLP) untuk 3D-IC dimodelkan Roze dan Gerber (2026) melalui *Stoney's equation* yang dimodifikasi:

$$\kappa = \frac{6 \sigma_f t_f}{M_s t_s^2}$$

di mana $\kappa$ adalah kelengkungan (*curvature*), $\sigma_f$ tegangan residu film, $t_f$ tebal film, $M_s$ modulus biaxial substrat, dan $t_s$ tebal substrat. Toleransi warpage maksimum agar hybrid bonding dapat berjalan pada yield di atas 95% adalah $\kappa_{max} \leq 50 \ \mu m$ pada diameter wafer 300 mm (Lau, 2023).

### 2.5 Optimasi Multi-Objektif EDA

Roze dan Gerber (2026) merumuskan optimasi *floorplan* chiplet sebagai masalah *multi-objective optimization* dengan fungsi tujuan:

$$\min_{\mathbf{x}} \ \mathbf{F}(\mathbf{x}) = \left[ f_1(\mathbf{x}), \ f_2(\mathbf{x}), \ \ldots, \ f_k(\mathbf{x}) \right]^T$$

dengan $\mathbf{x} \in \mathbb{R}^n$ adalah vektor *decision variable* (koordinat penempatan chiplet, dimensi interposer, dan *TSV placement*). Fungsi objektif tipikal mencakup *wirelength*:

$$f_1 = \sum_{i=1}^{N} \sum_{j=i+1}^{N} w_{ij} \cdot d(\mathbf{c}_i, \mathbf{c}_j)$$

dan *thermal uniformity index*:

$$f_2 = \frac{T_{max} - T_{min}}{\bar{T}}$$

dengan kendala berupa *area constraint* $\sum A_i \leq A_{interposer}$ dan *routing congestion*.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis solusi EDA chiplet dan 3D-IC mengikuti kerangka SOP yang distandardisasi oleh Roze dan Gerber (2026), dengan enam tahapan utama:

**Tahap 1 — System-Level Architectural Planning.** Tahapan ini melibatkan dekomposisi fungsi sistem menjadi blok IP (*chiplet candidates*), estimasi *bandwidth* antar chiplet, dan penentuan *partitioning* logis vs fisik. Keluaran utama adalah *chiplet specification* (luas die, *power budget*, target *frequency*, dan I/O count).

**Tahap 2 — Multi-Domain Co-Simulation.** Setiap chiplet di-*abstracted* menjadi model perilaku (RED - Reduced Engineering Data, atau *standard cell*-equivalent). Co-simulation menggabungkan solver SI (misalnya dengan teknik *finite-difference time-domain*), solver PI (analisis IR-drop dan *power rail*), solver termal (3D-IC dengan *thermal-aware floorplan*), dan solver *mechanical* (warpage). Roze dan Gerber (2026) menekankan pentingnya *unified database* untuk mencegah inkonsistensi.

**Tahap 3 — Physical Implementation dan Chiplet Placement.** Algoritma *simulated annealing* atau *mixed-integer linear programming* (MILP) digunakan untuk menempatkan chiplet pada interposer dengan optimasi wirelength, thermal, dan routing congestion. Untuk hybrid bonding, *micro-bump pitch* divariasikan antara 3 µm sampai 10 µm tergantung pada TSV density dan *redistribution layer* (RDL).

**Tahap 4 — Verification Lintas-Domain.** Verifikasi post-layout mencakup *timing sign-off*, *SI/PI sign-off*, *DFT coverage*, dan *DFM (Design-for-Manufacturability)* rules checking. Lau (2023) menyoroti perlunya verifikasi tambahan berupa *thermal-mechanical cosimulation* untuk memprediksi *fatigue life* Cu-Cu bond dalam *thermal cycling test* (TCT) sesuai standar JEDEC JESD22-A104.

**Tahap 5 — Manufacturing Hand-off.** File GDSII atau OASIS di-*hand-off* ke foundry masing-masing chiplet dan ke *OSAT (Outsourced Semiconductor Assembly and Test)* untuk proses hybrid bonding. Format *hand-off* standar mencakup *bump map*, *alignment mark*, dan *test pattern*.

**Tahap 6 — Post-Silicon Validation.** Setelah fabrikasi dan packaging, dilakukan Known-Good-Die (KGD) test per chiplet, *system-level test*, dan *burn-in* sesuai prosedur JEDEC. Yield data di-*feed-back* ke model untuk iterasi desain berikutnya.

Diagram alir proses mengikuti pola V-model yang dimodifikasi, dengan loop iterasi antara *co-simulation* dan *physical implementation* hingga konvergensi tercapai. Roze dan Gerber (2026) melaporkan bahwa penerapan SOP ini pada *tape-out* desain referensi 3D-IC komersial mengurangi siklus desain dari 18 bulan menjadi 11 bulan.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario Kasus

Ambil satu desain referensi *AI accelerator* 3D-IC yang terdiri dari:
- 1× compute die (5 mm × 5 mm, 7 nm, target 250 mW, $Y_{chiplet,1} = 0{,}92$)
- 4× HBM3 chiplet (12 mm × 8 mm, 21 nm, target 400 mW per die, $Y_{chiplet,2} = 0{,}94$)
- 1× I/O die (8 mm × 8 mm, 16 nm, target 350 mW, $Y_{chiplet,3} = 0{,}90$)

Pitch hybrid bonding Cu-Cu $p = 3 \ \mu m$, dengan $Y_{bonding} = 0{,}99$ per die (Lau, 2023).

### 4.2 Perhitungan Yield Sistem

Asumsikan arsitektur toleran hingga 1 failure chiplet HBM ($K_{HBM} = 3$ dari 4):

**Yield sistem komputasional:**
$$Y_{compute} = Y_{chiplet,1} \cdot Y_{chiplet,3} \cdot Y_{bonding,1} \cdot Y_{bonding,3}$$
$$Y_{compute} = 0{,}92 \times 0{,}90 \times 0{,}99 \times 0{,}99 = 0{,}8135$$

**Yield memori HBM dengan toleransi fault:**
$$Y_{HBM} = \sum_{k=3}^{4} \binom{4}{k} (0{,}94)^k (0{,}06)^{4-k} \cdot (0{,}99)^k$$
$$= \binom{4}{3}(0{,}94)^3(0{,}06)^1(0{,}99)^3 + \binom{4}{4}(0{,}94)^4(0{,}99)^4$$
$$= 4 \cdot 0{,}8306 \cdot 0{,}06 \cdot 0{,}9703 + 0{,}7807 \cdot 0{,}9606$$
$$= 0{,}1935 + 0
$$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
$
