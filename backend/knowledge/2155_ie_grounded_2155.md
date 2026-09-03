# 2155 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Rekayasa Integrasi Heterogen dan Hybrid Bonding dalam Ekosistem Manufaktur Semikonduktor Lanjutan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *EDA Solution for Chiplet and 3D-IC Design*. 2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS). DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Cu-Cu Hybrid Bonding*. Dalam: Chiplet Design and Heterogeneous Integration Packaging. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global tengah mengalami pergeseran paradigma fundamental dari pendekatan monolithic System-on-Chip (SoC) menuju arsitektur chiplet-based heterogeneous integration (HI) dan three-dimensional integrated circuits (3D-IC). Pergeseran ini dipicu oleh berakhirnya efektivitas hukum Moore pada node proses sub-3 nm, di mana biaya litografi EUV (Extreme Ultraviolet) meningkat secara eksponensial sementara yield menurun seiring dengan bertambahnya luas die. Roze dan Gerber (2026) dalam paparannya di *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)* menekankan bahwa solusi Electronic Design Automation (EDA) menjadi tulang punggung yang memungkinkan desainer mempartisi arsitektur kompleks menjadi blok-blok chiplet yang dapat di-manufacture, dikemas, dan diintegrasikan secara heterogen (Roze & Gerber, 2026).

Konteks ekonominya sangat mendesak: biaya desain masker set (mask set) untuk node 2 nm telah menembus angka USD 50–80 juta per tape-out, sementara pasar chiplet diproyeksikan mencapai USD 124 miliar pada 2030 dengan CAGR lebih dari 38% (Yole Group, 2024). Bagi perspektif industri, desain chiplet memungkinkan *yield enhancement* melalui disagregasi die menjadi blok-blok kecil, reduksi biaya NRE (Non-Recurring Engineering), dan peningkatan fleksibilitas reuse IP. Namun demikian, tanpa kerangka EDA yang mature dan terstandarisasi, kompleksitas integrasi sinyal, termal, dan mekanis pada 3D-IC akan menjadi bottleneck utama.

Lau (2023) dalam monograph "Chiplet Design and Heterogeneous Integration Packaging" menyoroti bahwa teknologi Cu-Cu hybrid bonding merupakan enabler fisik paling kritikal bagi pitch interconnect sub-10 μm, dengan kepadatan I/O mencapai 10⁶/mm² (Lau, 2023). Interdisiplin antara desain EDA, packaging, dan material science menjadi semakin konvergen. Permasalahan operasional yang harus dijawab oleh insinyur industri dalam konteks ini mencakup: optimalisasi trade-off antara *partition granularity* dan *interconnect overhead*, penjadwalan produksi multi-die pada lini packaging hybrid, verifikasi Design Rule Check (DRC) lintas proses fabrikasi, dan manajemen termal 3D stack yang beroperasi pada daya total >300 W per package. Urgensi teknis ini mendorong kebutuhan akan metodologi desain terpadu yang dibahas secara sistematis pada Bagian 2 dan 3 modul ini.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Yield Chiplet dan Yield Stacked 3D-IC

Yield sebuah chiplet individual pada umumnya dimodelkan dengan distribusi Poisson atau Negative Binomial. Untuk wafer dengan luas aktif $A$ (cm²) dan defect density $D_0$ (defect/cm²), yield sederhana diberikan oleh:

$$Y_{\text{chiplet}} = e^{-D_0 \cdot A_{\text{chiplet}}}$$

Untuk stack 3D-IC dengan $n$ chiplet yang dirangkai secara vertikal menggunakan hybrid bonding, yield keseluruhan dihitung sebagai perkalian yield tiap layer (asumsi independensi statistik):

$$Y_{\text{stack}} = \prod_{i=1}^{n} Y_{\text{chiplet},i} = \prod_{i=1}^{n} e^{-D_0 \cdot A_i} = e^{-D_0 \sum_{i=1}^{n} A_i}$$

Roze dan Gerber (2026) menekankan bahwa model ini mengasumsikan bonding yield 100%, sehingga dalam realitas harus dikalikan dengan faktor yield proses hybrid bonding $\eta_{\text{bond}}$:

$$Y_{\text{final}} = \eta_{\text{bond}} \cdot e^{-D_0 \sum_{i=1}^{n} A_i}$$

Untuk Cu-Cu hybrid bonding pada pitch 3 μm yang dilaporkan Lau (2023), bonding yield khas industri berada pada rentang $\eta_{\text{bond}} \approx 0{,}995 - 0{,}999$ tergantung surface preparation dan annealing profile.

### 2.2 Model RC Interconnect dan Latensi Chiplet-to-Chiplet

Interkoneksi antarchiplet menggunakan *interposer*, *redistribution layer* (RDL), atau *direct hybrid bond* memiliki parameter resistansi $R$ dan kapasitansi $C$ yang menentukan delay propagasi sinyal. Untuk saluran mikrostrip pada RDL dengan panjang $l$, lebar $w$, dan jarak ke ground plane $h$, resistansi dan kapasitansi per satuan panjang diberikan oleh:

$$R = \frac{\rho}{w \cdot t}, \quad C = \varepsilon_0 \varepsilon_r \frac{w}{h}$$

di mana $\rho$ adalah resistivitas material (untuk tembaga $\rho = 1{,}68 \times 10^{-8} \Omega \cdot$m), $t$ adalah ketebalan konduktor, dan $\varepsilon_r$ permitivitas relatif dielektrik. Delay propagasi $t_d$ untuk interkoneksi terdistribusi RC mengikuti pendekatan Elmore:

$$t_d = 0{,}35 \cdot R_{\text{total}} \cdot C_{\text{total}}$$

Untuk hybrid bonding dengan pitch $p$ dan $N_{\text{IO}}$ pin, total kapasitansi sambungan diaproksimasi oleh:

$$C_{\text{bond}} = N_{\text{IO}} \cdot \varepsilon_0 \varepsilon_r \cdot A_{\text{pad}} / d_{\text{bond}}$$

dengan $A_{\text{pad}} = p^2$ dan $d_{\text{bond}}$ adalah jarak intermolekuler efektif (~1 nm pada Cu-Cu direct bond pasca-anneal).

### 2.3 Model Termal 3D-IC (Thermal Resistance Network)

Resistansi termal stack 3D-IC dengan $n$ layer dapat dimodelkan sebagai jaringan resistansi seri-paralel. Untuk konfigurasi vertikal dengan thermal interface material (TIM) antarlayer:

$$R_{\theta,\text{total}} = \sum_{i=1}^{n} \left( \frac{t_i}{k_i \cdot A_i} \right) + R_{\theta,\text{TIM}}$$

dengan $t_i$, $k_i$, $A_i$ masing-masing adalah ketebalan, konduktivitas termal, dan luas efektif layer ke-$i$. Temperatur junction maksimum:

$$T_j = T_a + P_{\text{total}} \cdot R_{\theta,\text{total}}$$

Untuk High Bandwidth Memory (HBM) stack 8-Hi pada konfigurasi 3D-IC dengan $k_{\text{Si}} = 148$ W/m·K dan ketebalan die 50 μm, resistansi termal per layer adalah:

$$R_{\theta,\text{layer}} = \frac{50 \times 10^{-6}}{148 \times A} = \frac{3{,}38 \times 10^{-7}}{A} \text{ K/W}$$

### 2.4 Model Throughput dan Bottleneck EDA Flow

Roze dan Gerber (2026) membahas kompleksitas EDA flow untuk chiplet yang melibatkan multi-physics verification. Total waktu eksekusi $T_{\text{EDA}}$ dapat dimodelkan sebagai:

$$T_{\text{EDA}} = \sum_{j=1}^{m} \left( t_{\text{CPU},j} + t_{\text{I/O},j} \right) + t_{\text{iteration}}$$

di mana $t_{\text{iteration}}$ merepresentasikan loop redesign akibat DRC violation. Metrik kritis adalah *time-to-convergence* $\tau_c$ yang harus diminimalkan melalui metodologi partitioning yang optimal.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur EDA Flow untuk Chiplet dan 3D-IC

Roze dan Gerber (2026) mengusulkan kerangka EDA berlapis yang mengintegrasikan front-end (logical design), mid-end (physical implementation chiplet-aware), dan back-end (package-aware signoff). Prosedur operasional standar industri dapat diuraikan sebagai berikut:

1. **System-Level Partitioning**: Spesifikasi arsitektur didekomposisi menjadi chiplet function blocks menggunakan algoritma multi-objective optimization dengan objective function:

$$\min_{\mathbf{x}} \left\{ \alpha \cdot C(\mathbf{x}) + \beta \cdot P(\mathbf{x}) + \gamma \cdot T(\mathbf{x}) \right\}$$

dengan constraint $\mathbf{x} \in \mathcal{X}_{\text{feasible}}$, di mana $C, P, T$ berturut-turut adalah metrik biaya, performa, dan termal.

2. **Chiplet-Level Physical Design**: Implementasi layout per chiplet menggunakan Place-and-Route (PnR) tools dengan library yang telah di-karakterisasi untuk proses target. *Floorplanning* harus mengakomodasi *bump pad array* untuk hybrid bonding.

3. **Interconnect Planning**: Desain RDL, interposer, atau direct bond interface menggunakan standar UCIe (Universal Chiplet Interconnect Express) untuk pitch 25–45 μm atau BoW (Bunch of Wires) untuk cost-sensitive application.

4. **Multi-Physics Signoff**: Verifikasi simultan terhadap electrical (signal integrity, power integrity), thermal, thermo-mechanical stress, dan manufacturability.

5. **Heterogeneous Integration Assembly**: Proses packaging di mana Lau (2023) mendokumentasikan SOP Cu-Cu hybrid bonding: surface cleaning dengan plasma/chemical treatment → alignment dengan akurasi ±0,5 μm → thermocompression bonding pada 200–300°C dengan tekanan 50–100 MPa → annealing pada 300–400°C untuk Cu diffusion bonding.

### 3.2 Diagram Alir Proses

```
┌──────────────────┐
│ System Spec &   │
│ Architecture    │
└────────┬─────────┘
         ↓
┌──────────────────┐
│ Chiplet          │
│ Partitioning     │
└────────┬─────────┘
         ↓
┌──────────────────┐
│ Per-Chiplet PnR  │ ←─┐
└────────┬─────────┘   │ Iterasi
         ↓             │
┌──────────────────┐   │
│ Interconnect &   │   │
│ Package Co-Design│   │
└────────┬─────────┘   │
         ↓             │
┌──────────────────┐   │
│ Multi-Physics    │───┘
│ Signoff (DRC/LVS│
│ /SI/PI/Thermal) │
└────────┬─────────┘
         ↓
┌──────────────────┐
│ Tape-out &       │
│ Heterogeneous    │
│ Integration      │
└──────────────────┘
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Studi Kasus: Desain AI Accelerator 3D-IC

Sebuah perusahaan semikonduktor akan mengintegrasikan compute die (5 × 5 mm², proses 3 nm) dengan HBM3 stack (8-Hi, 8 × 8 mm², proses 1β-DRAM) dan I/O die pada paket 3D-IC menggunakan Cu-Cu hybrid bonding pitch 6 μm (sesuai capability yang dilaporkan Lau, 2023 untuk advanced packaging).

**Step 1: Perhitungan Yield**
- Luas compute die: $A_1 = 0{,}25$ cm²
- Luas HBM stack: $A_2 = 0{,}64$ cm²  
- Luas I/O die: $A_3 = 0{,}16$ cm²
- Defect density assumed: $D_0 = 0{,}3$ defect/cm² (typical untuk mature node)
- Hybrid bonding yield: $\eta_{\text{bond}} = 0{,}998$

$$Y_{\text{chiplet,1}} = e^{-0{,}3 \times 0{,}25} = 0{,}928$$
$$Y_{\text{chiplet,2}} = e^{-0{,}3 \times 0{,}64} = 0{,}825$$
$$Y_{\text{chiplet,3}} = e^{-0{,}3 \times 0{,}16} = 0{,}953$$

$$Y_{\text{stack}} = 0{,}998 \times 0{,}928 \times 0{,}825 \times 0{,}953 = 0{,}723$$

Interpretasi manajerial: Yield 72,3% menunjukkan bahwa strategi disaggregasi menjadi chiplet memberikan yield improvement signifikan dibanding monolithic die 12,25 × 12,25 mm² yang akan memiliki yield $e^{-0{,}3 \times 1{,}5} = 0{,}638$ (asumsi tanpa 3D stacking). Trade-off benefit: +8,5 poin persentase yield.

**Step 2: Perhitungan Resistansi Termal Stack**
Asumsi: thermal conductivity Si $k = 148$ W/m·K, TIM antardie $k_{\text{TIM}} = 4$ W/m·K dengan tebal 5 μm, luas efektif die 0,25 cm² = $25 \times 10^{-6}$ m², daya operasi total 50 W terdistribusi pada compute die dan HBM (total power density stack):

$$R_{\theta,\text{Si}} = \frac{50 \times 10^{-6}}{148 \times 25 \times