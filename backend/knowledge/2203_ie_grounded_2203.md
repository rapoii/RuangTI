# 2203 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen dalam Rekayasa Sistem Elektronik Modern

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *EDA Solution for Chiplet and 3D-IC Design*. 2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS). DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Cu-Cu Hybrid Bonding*. Dalam: *Chiplet Design and Heterogeneous Integration Packaging*. Springer. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Era paska-Moore's Law telah menggeser paradigma rekayasa semikonduktor dari pendekatan *monolithic scaling* menuju *heterogeneous integration* (HI) dan *chiplet-based design*. Roze dan Gerber (2026) dalam karyanya yang dipublikasikan di *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)* menegaskan bahwa Electronic Design Automation (EDA) modern harus berevolusi dari paradigma 2.5D tradisional menjadi kerangka kerja yang natively mendukung *3D-IC stack*, *chiplet partitioning*, dan *hybrid bonding* pada skala纳米ometer. Permintaan industri terhadap *compute throughput* tinggi untuk aplikasi AI/HPC, *bandwidth memory* masif, dan *power efficiency* ultra-rendah telah mendorong adopsi arsitektur chiplet di mana beberapa *die* dengan *process node* berbeda diintegrasikan dalam satu paket unified [Roze & Gerber, 2026](https://doi.org/10.23919/icep-hbs69241.2026.11550563).

Menurut Lau (2023) dalam buku *Chiplet Design and Heterogeneous Integration Packaging*, transisi ini bukan sekadar evolusi teknologi tetapi juga revolusi ekonomi: biaya desain dan mask set untuk node 3 nm dan 2 nm telah melonjak hingga lebih dari USD 500 juta per desain, menjadikan strategi *chiplet* sebagai satu-satunya jalur yang layak secara finansial untuk melanjutkan laju inovasi [Lau, 2023](https://doi.org/10.1007/978-981-19-9917-8_6). Lebih lanjut, integrasi vertikal melalui *Cu-Cu hybrid bonding* dengan pitch interkoneksi sub-10 μm memungkinkan densitas I/O per mm² yang melampaui kemampuan *flip-chip* solder bump tradisional sebesar 100× hingga 1000×.

Konteks industri ini memiliki implikasi langsung terhadap *engineering economy*, *manufacturing yield*, dan *supply chain orchestration*. Sebagai spesialis teknik industri, memahami trade-off antara *partitioning granularity*, *thermal budget*, *signal integrity*, dan *cost-of-goods-sold (COGS)* menjadi kompetensi kritis. Kenaikan kompleksitas desain dari satu monolithic SoC menjadi sistem multi-die dengan interkoneksi 3D memerlukan metodologi EDA baru yang mengakomodasi *co-design* electrical-thermal-mechanical-reliability secara simultan, sehingga dokumen modul ini akan membedah aspek-aspek tersebut secara kuantitatif.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Termal Jaringan Resistansi untuk Stack 3D-IC

Untuk stack 3D-IC dengan $n$ chiplet, *thermal resistance network* dapat diformulasikan menggunakan analogi resistansi seri-paralel. Roze dan Gerber (2026) mengadopsi model *Foster* dan *Cauer* untuk menyederhanakan analisis termal:

$$R_{th,total} = \sum_{i=1}^{n} \frac{t_i}{k_i \cdot A_i}$$

di mana $t_i$ adalah ketebalan layer ke-$i$ (m), $k_i$ adalah konduktivitas termal material (W/m·K), dan $A_i$ adalah luas penampang efektif (m²). Untuk stack hybrid bonding Cu-Cu dengan *thermal interface material* (TIM) tipis, kontribusi resistansi didominasi oleh *micro-bump* dan *underfill*.

### 2.2 Densitas Interkoneksi dan Pitch Bonding

Lau (2023) merumuskan hubungan antara pitch bonding $p$ (μm) dan densitas I/O per area:

$$D_{IO} = \frac{1}{p^2} \quad [\text{I/O per mm}^2]$$

Untuk pitch 10 μm: $D_{IO} = 10{,}000$ I/O/mm², sedangkan untuk pitch 3 μm (state-of-the-art): $D_{IO} \approx 111{,}111$ I/O/mm². Bandwidth per stack dapat dihitung sebagai:

$$BW_{stack} = D_{IO} \cdot A_{die} \cdot f_{clk} \cdot N_{bits/cycle}$$

dengan $A_{die}$ luas die aktif, $f_{clk}$ frekuensi clock, dan $N_{bits/cycle}$ jumlah bit per siklus.

### 2.3 Yield Komposit dan Model Partisi Chiplet

Yield sistem multi-die mengikuti model probabilistik:

$$Y_{system} = \prod_{i=1}^{n} Y_i^{A_i/A_{ref}}$$

di mana $Y_i$ adalah yield individual chiplet ke-$i$, dan $A_{ref}$ adalah area referensi untuk normalisasi. Roze dan Gerber (2026) menekankan bahwa strategi partisi yang optimal meminimalkan $\sum A_i$ sambil mempertahankan *functional coherence*.

### 2.4 Model Ekonomi Partisi Chiplet

Fungsi biaya total dapat diformulasikan:

$$C_{total} = \sum_{i=1}^{n}\left(C_{mask,i} + C_{wafer,i}\right) + C_{assembly} + C_{test}$$

dengan asumsi *known-good-die* (KGD) yield $Y_{KGD,i}$, biaya efektif per sistem:

$$C_{effective} = \frac{C_{total}}{\prod Y_{KGD,i}}$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) mengusulkan kerangka EDA berlapis untuk desain chiplet dan 3D-IC yang terdiri atas lima tahap SOP:

**Tahap 1 — System-Level Partitioning:** Definisikan *functional blocks*, lakukan trade-off antara jumlah chiplet vs. yield menggunakan formulasi Section 2.3. Tools: Synopsys 3DIC Compiler, Cadence Integrity 3D-IC.

**Tahap 2 — Physical Implementation per Chiplet:** Layout individual die dengan *place-and-route* yang menghormati *bump assignment grid* untuk hybrid bonding.

**Tahap 3 — Inter-Die Routing & TSV Planning:** Tentukan *through-silicon via* (TSV) dan *redistribution layer* (RDL) menggunakan:

$$N_{TSV} = \frac{I_{total}}{J_{max} \cdot A_{TSV}}$$

dengan $I_{total}$ total arus, $J_{max}$ densitas arus maksimum (~1 mA/μm² untuk Cu TSV), dan $A_{TSV}$ luas penampang TSV.

**Tahap 4 — Thermal-Aware Floorplanning:** Gunakan hasil Section 2.1 untuk validasi *thermal budget* ($T_j < 105°C$ untuk most cases).

**Tahap 5 — Verification & Sign-off:** LVS, DRC, EM/IR drop, dan *multi-physics co-simulation*.

Diagram alir proses mengikuti *closed-loop optimization* antara electrical, thermal, dan manufacturability constraints, berbeda dengan flow EDA 2D tradisional yang bersifat linier.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### Studi Kasus: Desain 3D-IC untuk AI Accelerator

**Spesifikasi Sistem:**
- Target: AI accelerator dengan HBM4 + compute chiplet
- Compute chiplet: 2× pada node 3 nm, luas masing-masing $A_1 = 100 \text{ mm}^2$
- Base chiplet (I/O + controller): node 5 nm, $A_2 = 150 \text{ mm}^2$
- HBM4 base die: 4 stack, $A_3 = 80 \text{ mm}^2$ per stack
- Hybrid bonding pitch: $p = 5$ μm (Cu-Cu direct bonding)

**Perhitungan 1: Densitas I/O dan Bandwidth**

$$D_{IO} = \frac{1}{(5 \times 10^{-3})^2} = 40{,}000 \text{ I/O/mm}^2$$

Untuk area interkoneksi 4 mm × 4 mm antara compute dan base chiplet:

$$N_{IO} = 40{,}000 \times 16 = 640{,}000 \text{ I/O}$$

Pada $f_{clk} = 2$ GHz dengan 2 bit/cycle (PAM-3 equivalent), bandwidth per link:

$$BW = 640{,}000 \times 2 \times 10^9 \times 2 = 2.56 \text{ TB/s}$$

**Perhitungan 2: Analisis Termal Stack**

Asumsikan stack dengan: TIM1 (k=4 W/m·K, t=20 μm), Si compute die (k=150 W/m·K, t=750 μm), Cu bonding (k=400 W/m·K, t=5 μm), Si interposer (k=150 W/m·K, t=100 μm).

Untuk area efektif $A_{eff} = 100 \text{ mm}^2 = 10^{-4} \text{ m}^2$:

$$R_{TIM1} = \frac{20 \times 10^{-6}}{4 \times 10^{-4}} = 0.05 \text{ K/W}$$

$$R_{Si,compute} = \frac{750 \times 10^{-6}}{150 \times 10^{-4}} = 0.5 \text{ K/W}$$

$$R_{bonding} = \frac{5 \times 10^{-6}}{400 \times 10^{-4}} \approx 0.00125 \text{ K/W}$$

$$R_{Si,interposer} = \frac{100 \times 10^{-6}}{150 \times 10^{-4}} \approx 0.00667 \text{ K/W}$$

Total: $R_{th,total} \approx 0.558 \text{ K/W}$

Dengan *power dissipation* compute chiplet $P = 50$ W:

$$\Delta T = 50 \times 0.558 = 27.9°C$$

Temperatur junction menjadi $T_j = T_{ambient} + 27.9 ≈ 77.9°C$ (dengan $T_{ambient} = 50°C$), masih dalam *thermal budget* operasi.

**Perhitungan 3: Yield dan Biaya Komposit**

Asumsi yield individual: $Y_1 = 0.85$ (3 nm), $Y_2 = 0.92$ (5 nm), $Y_3 = 0.95$ (HBM4 mature):

$$Y_{system} = 0.85 \times 0.92 \times 0.95 \approx 0.743 \text{ atau } 74.3\%$$

**Perhitungan 4: Trade-off Biaya vs. Node**

Biaya mask set + wafer per die (estimasi industri 2025-2026):
- 3 nm wafer (300 mm): ~USD 18,000, gross die ~150 per wafer
- 5 nm wafer: ~USD 14,000, gross die ~200 per wafer

Biaya per die (sebelum KGD):
- Compute chiplet: $18{,}000/150 = $ USD 120
- Base chiplet: $14{,}000/200 = $ USD 70

Setelah KGD yield adjustment:
- $C_{compute} = 120/0.85 = $ USD 141.18
- $C_{base} = 70/0.92 = $ USD 76.09
- $C_{HBM} = 50/0.95 = $ USD 52.63

Total per stack (2× compute): $C_{total} \approx 141.18 \times 2 + 76.09 + 52.63 \times 4 + C_{assembly}$

**Interpretasi Manajerial:** Hasil menunjukkan bahwa strategi chiplet menghasilkan *manufacturing cost* yang lebih rendah (USD 580–650 per paket lengkap) dibanding monolithic equivalent yang mendekati USD 800+ dengan yield jauh lebih rendah (<50%). Ditambah bandwidth 2.56 TB/s yang melampaui HBM4 native bandwidth per stack.

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

### 5.1 Evaluasi Batasan Metodologi

Meskipun Roze dan Gerber (2026) memberikan kontribusi signifikan dalam formalisasi EDA flow untuk 3D-IC, beberapa limitasi teridentifikasi:

1. **Thermal Model Simplification**: Model $R_{th}$ pada Section 2.1忽略了 lateral heat spreading dan hot-spot localization yang dapat diatasi dengan FEA 3D penuh.
2. **Yield Model Asumsi Independen**: Persamaan pada Section 2.3 mengasumsikan korelasi yield antar chiplet = 0, padahal *systematic defects* (misalnya wafer fab contamination) dapat引入 korelasi positif.
3. **KGD Testing Overhead**: Akuisisi *known-good-die* menambah 15–25% biaya per die yang tidak selalu diperhitungkan dalam model cost awal.

### 5.2 Perbandingan dengan Metode Konvensional

| Aspek | Monolithic SoC | Chiplet 2.5D (Si Interposer) | Chiplet 3D + Hybrid Bonding |
|---|---|---|---|
| Densitas I/O | 1× | 10–50× | 100–1000× |
| Bandwidth Memory | Standar | ~2× | 5–10× |
| Thermal Resistance | Rendah | Sedang | Perlu aktif cooling |
| Yield Ekonomi | Rendah | Sedang | Tinggi |
| Biaya Mask | Sangat tinggi |