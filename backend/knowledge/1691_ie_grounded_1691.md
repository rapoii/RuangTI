# 1691 — Solusi EDA untuk Desain Chiplet dan Sirkuit Terintegrasi Tiga Dimensi (3D-IC): Landasan Manufaktur, Rekayasa Hybrid Bonding, dan Optimisasi Lintas Disiplin

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global tengah mengalami transisi paradigma dari desain monolithic System-on-Chip (SoC) menuju arsitektur heterogen berbasis chiplet dan integrasi tiga dimensi (3D-IC). Pergeseran ini dipicu oleh tiga tekanan simultan yang tidak lagi mampu diatasi oleh hukum Moore tradisional: (1) melonjaknya biaya litografi di node-node sub-3 nm yang mendekati US$30 juta per masker, (2) menurunnya *yield* wafer pada area die yang semakin besar (defect density menjadi limit dominan), dan (3) ketidakserasian (*mismatch*) antara proses fabrikasi logika, memori, dan analog/RF yang menghambat integrasi monolitik. Roze dan Gerber (2026) dalam papernya di *ICEP-HBS 2026* (DOI: 10.23919/icep-hbs69241.2026.11550563) mengidentifikasi bahwa solusi *Electronic Design Automation* (EDA) merupakan *backbone* yang menentukan kelayakan ekonomi-teknis transisi ini, karena tanpa tool otomasi yang matang, biaya rekayasa *partitioning*, verifikasi, dan *sign-off* multi-die akan melonjak secara eksponensial.

Urgensi operasional tampak pada data disagregasi manufacturability: sebuah SoC 5 nm monolithic dengan area ~800 mm² memiliki *yield* khas di bawah 25% pada produksi volume, sementara disagregasi menjadi 8 chiplet masing-masing 100 mm² dapat mengangkat *compound yield* menjadi di atas 90% dengan asumsi *known-good-die* (KGD) terseleksi. Secara ekonomi, biaya total kepemilikan (*total cost of ownership*/TCO) untuk paket chiplet 2.5D dengan interposer silikon dapat turun 30–45% dibanding monolithic setara, terutama bila dikombinasikan dengan teknologi *Cu-Cu Hybrid Bonding* yang dipaparkan Lau (2023, DOI: 10.1007/978-981-19-9917-8_6). Lau menekankan bahwa hybrid bonding memungkinkan pitch interkoneksi turun hingga 1–3 µm (vs. 25–40 µm pada solder micro-bump konvensional), sehingga bandwidth per footprint area meningkat lebih dari satu order magnitude.

Konteks industri modern juga didorong oleh aplikasi *high-performance computing* (HPC), AI accelerator, dan jaringan *data center* yang membutuhkan memori bandwidth >5 TB/s dan latensi paket <2 ns—spesifikasi yang tidak realistis dipenuhi oleh arsitektur 2D. Oleh sebab itu, modul ini disusun untuk membekali insinyur industri dengan kerangka kuantitatif dan SOP rekayasa yang berakar pada dua literatur primer tersebut, sehingga keputusan *make-or-buy*, *partitioning strategy*, dan pilihan proses bonding dapat diambil berbasis bukti (*evidence-based decision making*).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Yield Komposit Multi-Die

Yield total paket chiplet dimodelkan sebagai produk yield masing-masing die yang sudah teruji (KGD) dikalikan yield proses integrasi:

$$Y_{total} = \left(\prod_{i=1}^{N} Y_{die,i}\right) \cdot Y_{bonding} \cdot Y_{assembly}$$

dengan $N$ adalah jumlah chiplet aktif, $Y_{die,i}$ mengikuti model Murphy atau Negative Binomial:

$$Y_{die} = \left[\frac{1 - e^{-D_0 A}}{D_0 A}\right]^2$$

di mana $D_0$ adalah *defect density* (defect/cm²) dan $A$ adalah luas area die (cm²). Roze dan Gerber (2026) menekankan bahwa EDA modern harus menghitung $Y_{total}$ secara probabilistik dengan memperhitungkan korelasi defect antar-die pada wafer yang sama.

### 2.2 Resistansi dan Kapasitansi Interkoneksi Hybrid Bonding

Untuk pad Cu-Cu dengan pitch $p$ dan dimensi $w \times w$, resistansi sambungan mengikuti:

$$R_{contact} = \frac{\rho_{Cu}}{w^2} \cdot t_{bond} + R_{interface}$$

dengan $\rho_{Cu} = 1.68 \times 10^{-8}$ Ω·m, $t_{bond}$ adalah tebal lapisan bonded Cu (umumnya 3–5 µm), dan $R_{interface}$ adalah resistansi kontak yang sangat bergantung pada *roughness* permukaan dan suhu annealing. Lau (2023) melaporkan nilai $R_{interface} < 50$ mΩ per sambungan bila proses annealing pada 250–300°C dilakukan dalam atmosfer N₂/H₂ forming gas.

Kapasitansi parasitik per sambungan:

$$C_{pad} = \varepsilon_0 \varepsilon_r \frac{w^2}{d_{dielectric}}$$

dengan $d_{dielectric}$ adalah ketebalan dielektrik antar-pad (umumnya SiCN atau SiO₂ setebal 100–300 nm pada hybrid bonding pitch 3 µm).

### 2.3 RC Delay dan Bandwidth

Delay propagasi sinyal melalui TSV (Through-Silicon Via) dan microbump/hybrid bond secara dominan ditentukan oleh:

$$\tau_{RC} = 0.693 \cdot R_{TSV} \cdot (C_{TSV} + C_{pad} + C_{landing})$$

Roze dan Gerber (2026) menurunkan bahwa untuk mempertahankan bandwidth $>5$ TB/s pada stack 8-Hi dengan 16 channel, total delay per link haruslah:

$$\tau_{RC} < \frac{1}{2 f_{Nyquist}} = \frac{1}{2 \cdot 6.4\,\text{GHz}} \approx 78\,\text{ps}$$

yang mensyaratkan $R_{TSV} \cdot C_{total} < 113$ ps per hop.

### 2.4 Model Termal 3D-Stack

Resistansi termal suatu stack dengan $N$ die dan antarmuka TIM (Thermal Interface Material) dihitung sebagai:

$$R_{th,total} = \sum_{j=1}^{N} \frac{t_j}{k_j A_j} + R_{TIM,top} + R_{TIM,inter} \cdot (N-1)$$

dengan $t_j$, $k_j$, $A_j$ berturut-turut adalah ketebalan, konduktivitas termal, dan area die ke-$j$. Nilai $k_{Si} \approx 148$ W/m·K pada suhu ruang, sementara $k_{TIM} \approx 1$–5 W/m·K. Power density efektif:

$$P_d = \frac{P_{total}}{A_{die}}$$

harus dijaga di bawah $\sim 100$ W/cm² agar junction temperature $T_j < 85$°C dengan heat sink performa tinggi.

### 2.5 Fungsi Objektif Optimisasi EDA

Tool EDA modern untuk chiplet/3D-IC menyelesaikan optimisasi multi-tujuan:

$$\min_{x \in \mathcal{X}} \left[ \alpha \cdot C_{total}(x) + \beta \cdot P_{total}(x) + \gamma \cdot (T_j(x) - T_{target})_+ + \delta \cdot \sum_{i} \text{Stress}_i(x) \right]$$

dengan $x$ merepresentasikan vektor keputusan (placement, routing pitch, pilihan proses bonding), dan koefisien $\alpha, \beta, \gamma, \delta$ adalah bobot yang diset oleh perancang sesuai prioritas aplikasi.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Alur EDA Multi-Die (Roze & Gerber, 2026)

Roze dan Gerber (2026) mengusulkan kerangka *unified EDA flow* dengan lima tahapan utama:

1. **Architectural Co-Design**: simulasi *workload partitioning* pada level sistem (CPU, GPU, HBM, I/O) dengan target latency dan bandwidth.
2. **Physical Partitioning**: algoritma *min-cut* multi-konstrain yang mempertimbangkan thermal, PDN (Power Delivery Network), dan routing escape.
3. **Multi-Die Place & Route**: floorplanning tiga dimensi dengan *stacking-aware timing closure*.
4. **Verification & Sign-off**: DRC/LVS pada tiap die + *system-level* EM/IR drop + thermal-aware ECO.
5. **Handoff to Foundry/Assembly**: GDSII per chiplet + *bonding diagram* + *test pattern* untuk KGD.

### 3.2 SOP Proses Cu-Cu Hybrid Bonding (Lau, 2023)

Lau (2023) menetapkan SOP tujuh langkah kritis:

| Langkah | Parameter Kritis | Toleransi |
|---|---|---|
| 1. Deposisi Cu damascene | Ketebalan 3–5 µm, roughness <0.5 nm Ra | Ra ±0.1 nm |
| 2. Deposisi dielektrik (SiCN/SiO₂) | CMP planaritas <2 nm | ±1 nm |
| 3. Surface activation (N₂ plasma/H₂) | Surface energy >70 mJ/m² | — |
| 4. Pre-bonding pada suhu ruang | Alignment accuracy ±200 nm | <±0.5 µm |
| 5. Annealing (250–300°C, N₂/H₂) | Tekanan bonding >50 MPa, 30–60 min | ±5 MPa |
| 6. Edge trimming & inspection | SAM/IR microscopy 100% | — |
| 7. KGD test & final assembly | Burn-in + ATPG | — |

### 3.3 Diagram Alir Keputusan Make-or-Buy Chiplet

Berikut adalah *decision logic* yang direkomendasikan:

```
[START] → Apakah volume produksi > 10^7 unit/tahun?
          ├─ Ya → Pertimbangkan in-house SoC, evaluasi NPI cost
          └─ Tidak → Lanjut
Apakah node proses tersedia di foundry partners?
          ├─ Tidak → Gunakan chiplet mix-and-match
          └─ Ya → Lanjut
Apakah bandwidth target > 3 TB/s?
          ├─ Ya → WAJIB hybrid bonding (bukan micro-bump)
          └─ Tidak → Boleh solder bumping 25–40 µm
[END - Pilih arsitektur]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Paket AI Accelerator 2.5D + 3D HBM

**Spesifikasi Desain (Input):**
- 1 buah *logic die* (chiplet) pada proses N5, luas $A_L = 200$ mm², $D_0 = 0.15$ cm⁻².
- 8 buah *HBM3e stack*, masing-masing 12-Hi, area $A_H = 75$ mm², $D_0 = 0.10$ cm⁻².
- Pitch hybrid bonding $p = 3$ µm, dimensi pad $w = 1.5$ µm.
- Ketebalan dielektrik $d_{dielectric} = 200$ nm, $\varepsilon_r = 5.0$.
- $R_{TIM} = 0.05$ K/W, $t_{Si} = 750$ µm per die.
- Power budget $P_{logic} = 120$ W, $P_{HBM} = 8$ W per stack.

### 4.2 Perhitungan Step-by-Step

**Langkah 1 — Yield die tunggal (Murphy):**

$$Y_{logic} = \left[\frac{1 - e^{-0.15 \cdot 2.0}}{0.15 \cdot 2.0}\right]^2 = \left[\frac{1 - e^{-0.3}}{0.3}\right]^2$$

$e^{-0.3} = 0.7408$, maka:

$$Y_{logic} = \left[\frac{0.2592}{0.3}\right]^2 = (0.864)^2 = 0.7466 \approx 74.7\%$$

Untuk HBM:

$$Y_{HBM,die} = \left[\frac{1 - e^{-0.10 \cdot 0.75}}{0.075}\right]^2 = \left[\frac{1 - 0.9277}{0.075}\right]^2 = (0.963)^2 = 0.927 \approx 92.7\%$$

**Langkah 2 — Yield bonding & assembly:**

Asumsikan $Y_{bonding} = 0.98$ dan $Y_{assembly} = 0.99$:

$$Y_{total} = 0.7466 \times (0.927)^{8} \times 0.98 \times 0.99$$
$$(0.927)^8 = 0.547 \Rightarrow Y_{total} = 0.7466 \times 0.547 \times 0.98