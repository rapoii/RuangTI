# 2699 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hybrid Bonding Cu-Cu, dan Optimisasi Multi-Fisika

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global sedang menghadapi transisi paradigma fundamental dari desain *System-on-Chip* (SoC) monolitik menuju arsitektur *chiplet* dan *Three-Dimensional Integrated Circuit* (3D-IC). Pergeseran ini dipicu oleh berakhirnya keekonomian penskalaan *Moore's Law* pada node proses sub-3 nm, di mana biaya litografi EUV dan variabilitas proses meningkat secara eksponensial. Roze dan Gerber (2026) dalam makalahnya yang dipublikasikan pada *International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)* menegaskan bahwa desain chiplet tidak lagi menjadi opsi eksperimental melainkan kebutuhan strategis untuk mempertahankan *performance scaling* dan *cost scaling* secara simultan. Menurut kedua penulis, kompleksitas verifikasi *Electronic Design Automation* (EDA) meningkat hingga 5–8 kali lipat ketika sebuah SoC di-dekomposisi menjadi 4–12 chiplet yang saling berkomunikasi melalui *interconnect* berdensitas ultra-tinggi.

Konteks ekonomi industri menunjukkan bahwa pasar chiplet global diproyeksikan mencapai USD 105,8 miliar pada 2030 dengan CAGR 41,4% (2024–2030), didorong oleh adopsi di pusat data AI/HPC, otomotif otonom, dan komputasi tepi. Dari perspektif *Operations Management*, masalah krusial yang diangkat oleh Lau (2023) adalah bagaimana rantai pasok semikonduktor—yang selama ini berpusat pada *fab* monolitik—harus direkayasa ulang untuk mengakomodasi model *multi-vendor chiplet integration* dengan protokol interoperabilitas seperti UCIe (Universal Chiplet Interconnect Express) dan BoW (Bunch of Wires).

Urgensi operasional terletak pada tiga tantangan manufaktur utama: (i) kontrol toleransi alignment pada proses *Cu-Cu hybrid bonding* yang harus dijaga di bawah ±200 nm untuk *pitch* 3 µm; (ii) disipasi termal pada *stack* 3D yang mencapai densitas daya >100 W/cm²; serta (iii) verifikasi *signal integrity* dan *power integrity* lintas-domain yang melampaui kemampuan tools EDA konvensional. Roze dan Gerber (2026) menekankan bahwa tanpa kerangka EDA terpadu yang menggabungkan *floorplanning*, *thermal analysis*, *TSV placement*, dan *package co-design*, time-to-market produk chiplet akan melambat 18–24 bulan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Yield untuk Multi-Die Assembly

Yield perakitan chiplet mengikuti model *negative binomial* Murphy yang diperluas untuk mengakomodasi korelasi cacat antar-die pada wafer berbeda:

$$Y_{assembly} = \prod_{i=1}^{n} Y_i \cdot \left(1 + \frac{D_i A_i}{c_i}\right)^{-c_i}$$

di mana $Y_i$ adalah yield individual die ke-$i$, $D_i$ adalah densitas cacat (defect/cm²), $A_i$ adalah luas area kritis (cm²), dan $c_i$ adalah parameter klastering cacat. Roze & Gerber (2026) menunjukkan bahwa untuk stack 8-die, yield total turun menjadi:

$$Y_{stack,8} = \prod_{i=1}^{8} \left(1 + \frac{D_i A_i}{c_i}\right)^{-c_i} \approx 0{,}78$$

dengan asumsi $D = 0{,}15$ cm⁻², $A = 1{,}0$ cm², dan $c = 2{,}0$.

### 2.2 Thermal Resistance 3D-Stack

Resistansi termal total pada stack 3D-IC dengan *thermal interface material* (TIM) dan *heat spreader* mengikuti model resistansi seri:

$$R_{th,total} = \sum_{j=1}^{m} \frac{t_j}{k_j \cdot A_{eff,j}} + R_{conv}$$

dengan $t_j$ adalah ketebalan layer ke-$j$ (m), $k_j$ konduktivitas termal material (W/m·K), $A_{eff,j}$ luas efektif jalur termal, dan $R_{conv}$ resistansi konveksi ke ambient. Lau (2023) menurunkan formula *effective thermal conductivity* untuk *through-silicon via* (TSV) array:

$$k_{eff} = k_{Si} \cdot \left(1 - \phi\right) + k_{Cu} \cdot \phi + \frac{k_{Cu} \cdot k_{Si} \cdot \phi \cdot (1-\phi)}{\frac{1}{4}\left[k_{Si} + k_{Cu}\right]}$$

di mana $\phi$ adalah fraksi area TSV terhadap unit cell. Dengan $\phi = 0{,}04$, $k_{Si} = 150$ W/m·K, $k_{Cu} = 400$ W/m·K, diperoleh $k_{eff} \approx 161{,}2$ W/m·K.

### 2.3 Toleransi Alignment Hybrid Bonding Cu-Cu

Akurasi alignment total mengikuti rumus kuadratik penjumlahan galat independen:

$$\sigma_{total}^2 = \sigma_{tool}^2 + \sigma_{overlay}^2 + \sigma_{bonding}^2 + \sigma_{metrology}^2$$

Untuk *pitch* 3 µm, Roze & Gerber (2026) menetapkan toleransi $\sigma_{total} \leq 150$ nm dengan alokasi: $\sigma_{tool} = 80$ nm, $\sigma_{overlay} = 90$ nm, $\sigma_{bonding} = 70$ nm, $\sigma_{metrology} = 50$ nm.

### 2.4 Optimisasi Biaya Total Kepemilikan (TCO)

Model TCO untuk arsitektur chiplet versus monolitik:

$$TCO = C_{wafer} \cdot N_{mask} + C_{pkg} + C_{test} + C_{yield\_loss}$$

$$C_{yield\_loss} = \frac{C_{wafer}}{Y_{assembly} \cdot n_{good}}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) mengusulkan kerangka EDA 5-tahap (*design flow*) untuk chiplet 3D-IC:

**Tahap 1 — System Partitioning & Architecture Exploration:** Decomposisi fungsional SoC menjadi kumpulan *chiplets* menggunakan algoritma *min-cut multi-objective optimization* yang meminimalkan $f(x) = \alpha \cdot P_{comm} + \beta \cdot A_{total} + \gamma \cdot T_{critical}$.

**Tahap 2 — Chiplet-Level Implementation:** Setiap chiplet didesain dengan *die-specific PDK* (Process Design Kit) yang mencakup *floorplan*, *place-and-route*, dan *timing closure* independen.

**Tahap 3 — Heterogeneous Integration Planning:** Penentuan *interconnect fabric* (UCIe, BoW, atau *hybrid bonding*) beserta *bump pitch*, *redundancy scheme*, dan *die-to-die protocol*.

**Tahap 4 — Multi-Physics Co-Simulation:** Integrasi simulasi *thermal-mechanical-electrical* dengan *finite element analysis* (FEA) untuk memvalidasi warpage, *stress-induced TSV shift*, dan *IR drop* lintas-die.

**Tahap 5 — Package Co-Design & Sign-off:** Verifikasi akhir termasuk *signal integrity* (crosstalk $< -30$ dB), *power integrity* (ripple $< 3\%$ VDD), dan *thermal envelope* ($T_j < 105°C$).

Diagram alir proses secara skematik:

```
[System Spec] → [Partitioning] → [Chiplet Design] → [Integration Plan]
       ↓                                                    ↓
[Verification] ← [Multi-Physics Sim] ← [Package Co-Design]
```

Lau (2023) melengkapi SOP *Cu-Cu hybrid bonding* dengan parameter proses kritis: suhu annealing $200–400°C$ selama 30–60 menit, tekanan kontak 50–150 N/cm², dan *surface roughness* Cu $< 0{,}5$ nm Ra.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Desain AI accelerator 8-chiplet pada *foundry* 3 nm dengan *hybrid bonding* pitch 3 µm.

### Input Parameter:
- Dimensi setiap chiplet: $A = 100$ mm² ($1{,}0$ cm²)
- Densitas cacat wafer: $D = 0{,}18$ cm⁻²
- Parameter klaster: $c = 2{,}5$
- Biaya