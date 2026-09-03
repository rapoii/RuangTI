# 2347 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen dengan Hybrid Bonding Cu-Cu

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global sedang mengalami transisi arsitektural paling signifikan sejak diperkenalkannya *system-on-chip* (SoC) monolitik. Kenaikan biaya masker *wafer* untuk node 3 nm yang melampaui USD 500 juta per desain (satu desain tunggal), ditambah dengan *yield* (*results*) produksi *reticle* besar yang terus menurun secara eksponensial sesuai hukum *Murphy* (defect-density driven),迫使 para arsitek chip dan insinyur *Electronic Design Automation* (EDA) untuk mengadopsi paradigma desain berbasis **chiplet** dan **3D-IC heterogen**. Roze dan Gerber (2026) dalam makalahnya yang berjudul *"EDA Solution for Chiplet and 3D-IC Design"* yang diterbitkan di *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*, secara eksplisit menekankan bahwa arsitektur multi-die bukan lagi sekadar opsi teknis melainkan keniscayaan ekonomi (DOI: [10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)).

Menurut data pasar yang dirujuk dalam literatur tersebut, pasar *heterogeneous integration* diproyeksikan mencapai USD 96 miliar pada tahun 2028 dengan CAGR (Compound Annual Growth Rate) di atas 16%, didorong oleh aplikasi *high-performance computing* (HPC), AI accelerator, dan *automotive* ADAS (*Advanced Driver Assistance Systems*). Urgensi operasional dari solusi EDA untuk chiplet terletak pada empat pilar masalah yang belum sepenuhnya terpecahkan oleh *tool* konvensional: (1) verifikasi lintas-die (*die-to-die*) yang melibatkan *co-design* elektrikal, termal, dan mekanis secara simultan; (2) manajemen *interconnect* pitch ultra-halus di bawah 3 µm yang hanya dapat direalisasikan melalui **Cu-Cu hybrid bonding**; (3) optimasi *power delivery network* (PDN) pada stack 3D dengan impedansi target pada orde mili-ohm; serta (4) orkestrasi *assembly* & *test* (A&T) yang mensyaratkan *known-good-die* (KGD) sebelum stacking.

Lau (2023) dalam *book chapter* "Cu-Cu Hybrid Bonding" (DOI: [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)) memberikan landasan bahwa *hybrid bonding* Cu-Cu dengan *pitch* 3 µm mampu mencapai densitas interkoneksi 10⁸/cm², jauh melampaui thermocompression bonding konvensional (Cu-pillar + solder) yang terbatas pada pitch 20–40 µm. Pergeseran ini membawa implikasi besar terhadap desain EDA, karena setiap *bump* virtual harus dimodelkan sebagai *transmission line* dengan kontrol impedansi pada frekuensi multi-GHz. Tanpa infrastruktur EDA yang mampu melakukan *closed-loop co-optimization* antara logika, paket, dan proses fabrikasi, integrasi heterogen akan terjebak pada prototipe laboratorium dan gagal masuk ke produksi *high-volume manufacturing* (HVM).

Konteks ekonomi Indonesia juga relevan: roadmap *semiconductor back-end* nasional 2025–2030 melalui program *Indonesia Semiconductor Back-end Manufacturing* menjadikan penguasaan metodologi EDA chiplet sebagai kompetensi strategis. Insinyur teknik industri yang beroperasi di lini *assembly*, *test*, dan *supply chain* perlu memahami bahwa keputusan partisi die (chiplet partitioning) bukan hanya keputusan *foundry*, melainkan keputusan sistem yang mempengaruhi *cycle time*, *throughput*, dan *cost-of-goods-sold* (COGS) secara langsung.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Termal Resistansi Stack 3D

Resistansi termal konduksi pada setiap die dalam *stack* 3D-IC dimodelkan dengan persamaan Fourier satu dimensi:

$$R_{th,i} = \frac{t_i}{k_i \cdot A_i}$$

di mana $t_i$ adalah ketebalan die ke-$i$ (m), $k_i$ adalah konduktivitas termal efektif die tersebut (W/m·K), dan $A_i$ adalah luas area die (m²). Untuk *stack* dengan $n$ die yang disusun secara seri melalui *bond layer* Cu-Cu hybrid, resistansi termal total adalah:

$$R_{th,total} = \sum_{i=1}^{n} \frac{t_i}{k_i \cdot A_i} + R_{th,bond}$$

di mana $R_{th,bond}$ adalah resistansi antarmuka *hybrid bonding* yang secara empiris bernilai $0.05 \text{–} 0.15 \text{ K·cm}^2/\text{W}$ untuk pitch 3 µm (Lau, 2023).

### 2.2 Model Kelistrikan Interkoneksi *Die-to-Die*

Setiap sambungan hybrid bonding Cu-Cu berperilaku sebagai *distributed RLC element*. Untuk satu link *channel* dengan panjang $l$ dan pitch $p$:

$$Z_0 = \sqrt{\frac{R + j\omega L}{G + j\omega C}} \approx \sqrt{\frac{L}{C}}$$

di mana parameter *per-unit-length* (p.u.l.) diturunkan dari geometri mikro-bump. *Insertion loss* total untuk satu *channel* dengan $N$ sambungan kaskade mengikuti:

$$IL(f) = 20 \log_{10}\left[\cosh(\gamma l)\right] + 10 \log_{10}(N), \quad \gamma = \sqrt{(R + j\omega L)(G + j\omega C)}$$

Untuk standar **UCIe** (*Universal Chiplet Interconnect Express*) *advanced package*, target *insertion loss* adalah $-3 \text{ dB}$ pada frekuensi Nyquist $f_{Nyq} = 16 \text{ GHz}$ untuk *data rate* 32 Gbps.

### 2.3 Model Yield *Known-Good-Die* dalam Multi-Die Assembly

*Yield* kumulatif sistem multi-die mengikuti formula probabilitas serial:

$$Y_{system} = \prod_{i=1}^{N_d} Y_{i}^{n_i}$$

di mana $Y_i$ adalah *yield* individu untuk *chiplet* tipe ke-$i$, dan $n_i$ adalah jumlah *chiplet* tipe tersebut dalam satu paket. Untuk satu wafer dengan defect density $D$ (defect/cm²) dan luas area kritis die $A$ (cm²), model *negative binomial* memberikan:

$$Y_i = \left(1 + \frac{D \cdot A_i}{c}\right)^{-c}$$

dengan *cluster parameter* $c$ (umumnya $c = 1$ untuk *Poisson*, $c > 1$ untuk *clustered defect*).

### 2.4 Optimasi Biaya *Cost-of-Ownership* per Transistor

Efektivitas biaya integrasi heterogen dievaluasi dengan metrik biaya per transistor aktif:

$$C_{transistor} = \frac{C_{wafer} + C_{assembly} + C_{test}}{N_{dies} \cdot D_i \cdot Y_{system}}$$

di mana $C_{wafer}$ adalah biaya *wafer* per *die*, $C_{assembly}$ mencakup *hybrid bonding*, *underfill*, dan *substrate*, $C_{test}$ adalah biaya A&T, $N_{dies}$ adalah jumlah *die* per wafer, dan $D_i$ adalah jumlah transistor per die.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Alur kerja EDA untuk desain chiplet dan 3D-IC sebagaimana dipetakan dalam makalah Roze & Gerber (2026) mengikuti **7 tahap prosedur operasional standar** (SOP) yang harus dijalankan secara iteratif (lihat Diagram Alir):

```
[1] System Specification & PPA Target
            │
            ▼
[2] Chiplet Partitioning & Architecture Mapping
            │
            ▼
[3] Die-Level Floorplanning + Inter-Die Routing (UCIe/BoW)
            │
            ▼
[4] TSV / Hybrid Bonding Physical Design
            │
            ▼
[5] Multi-Physics Verification (Thermal × EM × SI × PI)
            │
            ▼
[6] DRC/LVS Sign-off + DFM Compliance
            │
            ▼
[7] Assembly Process Sign-off (KGD + Stacking Yield)
```

**Tahap 1 — System Specification & PPA Target:** Mendefinisikan target *Performance*, *Power*, dan *Area* (PPA) keseluruhan sistem, termasuk bandwidth *die-to-die* (Gbps/mm), target *thermal envelope* ($T_j \leq 85°C$), dan jumlah *chiplet* per paket.

**Tahap 2 — Chiplet Partitioning:** Proses partisi menggunakan algoritma *min-cut* atau *hypergraph partitioning* (misalnya *hMETIS*) untuk membagi *netlist* logika ke dalam $N$ sub-die. Fungsi objektif:

$$\min_{P} \sum_{i} w_i \cdot C_{cost,i} + \alpha \sum_{e \in \text{cut}(P)} w_e$$

di mana $w_i$ adalah bobot biaya area/timing per blok, dan $\alpha$ adalah penalti untuk setiap *cut edge* (sambungan lintas die).

**Tahap 3 — Inter-Die Floorplanning:** EDA harus mampu melakukan *co-floorplanning