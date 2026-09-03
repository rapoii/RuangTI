# 1707 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Bonding Hibrida Cu-Cu, dan Optimalisasi Rekayasa Sistem Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Cu-Cu Hybrid Bonding*, dalam buku *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global berada di persimpangan kritis antara batas fisik penskalaan node planar (yang mendekati batas difraksi litografi dan kebocoran kuantum) dengan ledakan permintaan komputasi untuk aplikasi AI generatif, HPC (High-Performance Computing), dan edge computing. Biaya fabrikasi monolitik pada node 3 nm dan 2 nm telah melonjak hingga melampaui US$20 miliar per fab, dengan *yield* yang menurun secara eksponensial seiring bertambahnya ukuran reticle mask. Sebagai respons strategis, paradigma **Chiplet** dan **3D-IC (Three-Dimensional Integrated Circuit)** muncul sebagai pendekatan *More-than-Moore* yang memungkinkan disagregasi fungsi logika, memori, dan analog ke dalam *die* kecil yang kemudian diintegrasikan kembali secara lateral (2.5D melalui interposer) atau vertikal (3D melalui TSV — Through-Silicon Via).

Ksenia Roze dan Mark Gerber (2026, DOI: [10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)) menyoroti dalam papernya di *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)* bahwa desain chiplet dan 3D-IC menimbulkan tantangan EDA (Electronic Design Automation) yang secara fundamental berbeda dari desain SoC (System-on-Chip) monolitik konvensional. Perangkat lunak EDA warisan — yang dirancang untuk *place-and-route* planar dan verifikasi single-die — tidak mampu menangani kompleksitas partisi multi-die, verifikasi *die-to-die* interface, atau simulasi termal-mekanal tiga dimensi secara kohesif. Roze dan Gerber memperkenalkan arsitektur EDA terpadu yang menjembatani kesenjangan antara level *physical design*, *package assembly*, dan *system-level verification*, sebuah kebutuhan yang sebelumnya dipenuhi secara fragmenter oleh toolset proprietary masing-masing vendor (Cadence, Synopsys, Siemens EDA, Ansys).

Dari perspektif Teknik Industri, fenomena ini bukan sekadar isu teknologi, melainkan masalah **rekayasa sistem kompleks** yang menyentuh keputusan desain produk (DFM — Design for Manufacturing), rantai pasok wafer foundry (TSMC, Intel Foundry, Samsung), strategi *make-or-buy* IP block, dan optimalisasi biaya total kepemilikan (TCO — Total Cost of Ownership). John H. Lau (2023, DOI: [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)) dalam bab *Cu-Cu Hybrid Bonding* dari buku *Chiplet Design and Heterogeneous Integration Packaging* menekankan bahwa teknologi **Cu-Cu hybrid bonding** — yang memungkinkan interconnect pitch sub-mikron (≤ 2 μm) pada suhu rendah (200–300°C) — telah menjadi *enabler* utama untuk stack 3D dengan densitas kontak >10⁶ per mm². Kombinasi antara tool EDA generasi baru dan proses bonding hibrida ini merepresentasikan *co-evolution* antara layer desain digital dan layer manufaktur fisik yang belum pernah terjadi sebelumnya dalam sejarah industri semikonduktor.

Urgensi industri semakin diperkuat oleh data pasar: menurut proyeksi yang dikutip oleh Roze dan Gerber (2026), pasar chiplet diproyeksikan tumbuh dari US$13 miliar (2024) menjadi US$156 miliar (2033), dengan CAGR >30%. Bagi insinyur industri, ini berarti perancangan ulang menyeluruh terhadap lini produksi packaging, kapasitas cleanroom, dan alur kerja lintas-disiplin yang menggabungkan electrical engineer, thermal engineer, dan industrial engineer dalam satu *concurrent engineering* loop.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Partisi Chiplet dan Fungsi Biaya

Roze dan Gerber (2026) merumuskan masalah partisi chiplet sebagai optimasi multi-objektif yang meminimalkan *total cost function* $C_{total}$:

$$C_{total} = \sum_{i=1}^{N} \left( C_{fab,i} \cdot A_{die,i} + C_{test,i} \right) + \sum_{i=1}^{N}\sum_{j>i}^{N} C_{interface}(i,j)$$

di mana $N$ adalah jumlah chiplet, $A_{die,i}$ adalah luas *die* ke-$i$ (mm²), $C_{fab,i}$ adalah biaya fabrikasi per mm² pada node teknologi yang dipilih, dan $C_{interface}(i,j)$ adalah biaya interface (I/O pad, *bump*, interposer routing) antara chiplet $i$ dan $j$.

### 2.2 Model Tunda Propagasi Die-to-Die

Untuk link komunikasi inter-chiplet melalui *hybrid bonding*, tunda propagasi total $t_{prop}$ (Roze & Gerber, 2026; Lau, 2023):

$$t_{prop} = t_{driver} + R_{wire} \cdot C_{wire} + t_{bond} + R_{bump} \cdot C_{bump}$$

dengan $t_{bond}$ merepresentasikan tunda kapasitif pada *bonding interface* yang, menurut Lau (2023), untuk pitch 2 μm pada Cu-Cu hybrid bonding memiliki kapasitansi sekitar $C_{bump} \approx 0.15$ fF per *bond*, jauh lebih rendah dibanding micro-bump C4 konvensional ($C_{bump} \approx 50$ fF). Hal ini memungkinkan bandwidth per link mencapai >10 Tbps/mm dalam standar UCIe (Universal Chiplet Interconnect Express).

### 2.3 Persamaan Termal 3D-IC

Distribusi suhu pada stack 3D-IC dimodelkan dengan *thermal resistance network*:

$$T_j = T_{ambient} + \sum_{k=1}^{M} R_{th,k} \cdot P_{k}$$

dengan $M$ adalah jumlah *layer* aktif, $R_{th,k}$ adalah resistansi termal *layer* ke-$k$ (K/W), dan $P_k$ adalah disipasi daya. Roze dan Gerber (2026) menekankan bahwa tool EDA mereka mengintegrasikan solver FEM 3D untuk akurasi tinggi pada geometri non-uniform.

### 2.4 Model Yield Multi-Die

Yield sistem chiplet dihitung sebagai produk *yield* individu dikoreksi dengan *assembly yield*:

$$Y_{system} = \left( \prod_{i=1}^{N} Y_{die,i} \right) \cdot Y_{assembly}$$

Roze dan Gerber (2026) menunjukkan bahwa untuk arsitektur dengan *redundant chiplet* (misal, 4 chiplet memori dengan 1 redundan):

$$Y_{system,redundant} = 1 - \sum_{k=2}^{N+1} \binom{N+1}{k} (1-Y_{die})^k Y_{die}^{N+1-k}$$

yang secara signifikan meningkatkan *yield* sistem (dari ~40% menjadi >95% untuk $N=4$ dan $Y_{die}=0.85$).

### 2.5 Model Stres CTE Mismatch

Lau (2023) merumuskan tegangan geser pada *bonding interface* akibat koefisien ekspansi termal (CTE) yang tidak匹配:

$$\sigma_{shear} = \frac{E_{eff} \cdot \Delta \alpha \cdot \Delta T}{1 + \frac{E_{eff} \cdot A_{interface}}{K_{bonding}}}$$

dengan $E_{eff}$ adalah modulus elastis efektif, $\Delta \alpha$ perbedaan CTE, dan $K_{bonding}$ konstanta kekakuan interface Cu-Cu.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) mengusulkan alur kerja EDA terintegrasi untuk desain chiplet/3D-IC yang terdiri atas **enam tahap utama**:

### SOP-1: System-Level Architecture & Partitioning
- Definisikan *performance spec*, *power budget*, dan *cost target* sistem.
- Gunakan tool EDA arsitektural (misalnya Synopsys 3DIC Compiler atau Siemens Calibre 3DSTACK) untuk partisi otomatis.
- Output: *Partitioned Netlist* dengan daftar chiplet, daftar IP per chiplet, dan *die-to-die interface specification* (UCIe, Bunch of Wires, atau proprietary).

### SOP-2: Individual Die Implementation
- Setiap chiplet dirancang secara independen menggunakan flow EDA standar (sintesis RTL → P&R → DRC/LVS).
- Validasi terhadap PDK masing-masing foundry (TSMC N3, Intel 18A, Samsung 3GAPTH).
- Penandaan *boundary scan* dan *test access port* (TAP) untuk KGD (Known Good Die) testing.

### SOP-3: Die-to-Die Interface Planning & Verification
- Implementasi *physical implementation* dari interface (micro-bump, hybrid bonding, atau interposer routing).
- Verifikasi elektrik: IR drop, simultanous switching noise (SSN), dan *signal integrity* pada bandwidth target.
- Verifikasi termal-mekanal: solver FEM 3D untuk prediksi *thermal hotspot* dan stres CTE.

### SOP-4: 3D Stack Assembly & Bonding Process
- Berdasarkan Lau (2023), proses Cu-Cu hybrid bonding meliputi: (a) persiapan wafer dengan *chemical-mechanical polishing* (CMP) untuk mencapai *roughness* < 0.5 nm Ra; (b) deposisi Cu dan patterning dengan *damascene process*; (c) *plasma activation* permukaan; (d) *room-temperature pre-bonding*; (e) *post-bond annealing* pada 200–300°C selama 1–2 jam untuk difusi dan pembentukan ikatan metalurgi.
- Kontrol proses: alignment accuracy ≤ 200 nm (3 sigma), *bonding strength* > 5 J/m², *contact resistance* < 50 mΩ per bond.

### SOP-5: System-Level Verification & Validation
- Verifikasi fungsional seluruh sistem menggunakan *co-simulation* multi-domain (digital + analog + RF + thermal).
- Validasi terhadap *use case* aktual: throughput AI inference, latency HPC, *power efficiency*.
- *Post-silicon validation* dengan *chiplet-level bring-up* menggunakan JTAG dan *boundary scan*.

### SOP-6: Manufacturing Test & Yield Management
- *Wafer-level test* (CP — Circuit Probe) per chiplet.
- *Known Good Die* (KGD) screening dengan stress termal.
- *Final test* pasca-assembly dengan statistik *yield* dan *binning*.

Standar industri yang relevan: **JEDEC JEP30** (Part Model), **UCIe Specification 1.1/2.0**, **IEEE 1838** (3D test access), dan **IPC-7095** (Design for chiplet).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Studi Kasus: Desain AI Accelerator 3D-IC dengan 4 Chiplet

**Spesifikasi Sistem:**
- 4 chiplet logika (compute die) pada TSMC N5 (5 nm)
- 1 chiplet HBM3e (memory) di-stack di atas
- Total target: 100 TOPS AI inference, 150W TDP, < 5 ms latency

**Parameter Input:**

| Parameter | Nilai |
|---|---|
| Luas per chiplet logika | $A_{die} = 100$ mm² |
| Jumlah chiplet logika | $N = 4$ |
| Node fabrikasi | TSMC N5 |
| $C_{fab,N5}$ | US$ 0.018/mm² (asumsi volume) |
| Hybrid bonding pitch | 2 μm |
| Bond per chiplet | 25.000 |
| $Y_{die}$ | 0.85 |
| $Y_{assembly}$ | 0.97 |

**Langkah 1: Hitung Biaya Fabrikasi Die**

$$C_{fab,total} = N \cdot C_{fab,N5} \cdot A_{die} = 4 \cdot 0{,}018 \cdot 100 = \text{US\$ 7,2 juta per wafer lot (asumsi 25 wafer)}$$

Per *unit* (asumsi 400 die per wafer lot, 80% efektif): $\approx$ US\$ 90 per chiplet.

**Langkah 2: Hitung Biaya Interface**

Biaya *bonding Cu-Cu* per chiplet: ~US$ 25 (termasuk wafer-to-wafer bonding, dicing). Total interface cost:
$$C_{interface,total} = N \cdot 25.000 \cdot 0{,}001 = \text{US\$ 100.000}$$

**Langkah 3: Hitung Yield Sistem (dengan 1 Redundan per Compute Block)**

Untuk konfigurasi 4 compute + 1 redundan ($N=4$):
$$Y_{system} = 1 - \sum_{k=2}^{5} \binom{5}{k}(1-Y_{die})^k Y_{die}^{5-k}$$

$$