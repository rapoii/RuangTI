# 3019 — EDA Solution untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hybrid Bonding Cu-Cu, dan Optimasi Lintas-domain

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global memasuki era *post-Moore's Law* di mana penskalaan transistor monolitik sudah tidak lagi menjadi satu-satunya strategi peningkatan kinerja. Pada tahun 2024–2026, biaya fabrikasi node 3 nm dan 2 nm melonjak melampaui USD 20 miliar per fab (Roze & Gerber, 2026), sementara *yield* pada wafer 300 mm dengan area die lebih dari 100 mm² turun signifikan di bawah 70%. Kondisi ini迫使 para desainer dan manajer rantai pasok untuk mengadopsi paradigma **heterogeneous integration (HI)** melalui **chiplet** dan **3D-IC**. Roze dan Gerber (2026) menekankan bahwa EDA (Electronic Design Automation) konvensional tidak mampu menjawab tantangan baru: verifikasi lintas-die, perencanaan termal kooperatif, dan integritas sinyal pada antarmuka hybrid bonding.

Menurut Lau (2023), integrasi heterogen dengan teknologi **Cu-Cu hybrid bonding** memungkinkan pitch interkoneksi turun hingga 1–3 µm, jauh di bawah kemampuan flip-chip solder (≥40 µm). Hal ini membuka peluang integrasi *compute die*, *I/O die*, *HBM stack*, dan *base die* dalam satu paket 2.5D/3D. Namun, peningkatan densitas ini juga menimbulkan masalah baru: koherensi termal antara die, *stress-induced dishing*, serta kebutuhan akan *co-design* elektro-thermal-mekanikal simultan yang menuntut kemampuan EDA multi-fisika.

Konteks ekonomi makro menunjukkan bahwa pasar chiplet global diproyeksikan tumbuh dari USD 6,5 miliar (2024) menjadi lebih dari USD 40 miliar pada 2030 dengan CAGR sekitar 35% (berdasarkan laporan yang dikutip oleh Roze & Gerber, 2026). Urgensi operasional bagi insinyur industri bukan hanya pada sisi teknologi, tetapi juga pada: (1) optimalisasi *design-for-manufacturability* (DFM), (2) reduksi iterasi *tape-out* yang mahal (mencapai USD 1–5 juta per mask set), dan (3) penjaminan kualitas lintas rantai pasok yang melibatkan multiple fab, OSAT, dan substrate supplier. Roze dan Gerber (2026) menyoroti bahwa tanpa solusi EDA terpadu, total *cycle time* dari spesifikasi hingga produksi volume dapat melebihi 24 bulan, sehingga mengancam *time-to-market* yang kritis bagi aplikasi AI/HPC.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Partisi Chiplet dan Fungsi Objektif Optimasi

Formulasi dasar partisi chiplet menurut kerangka yang dirujuk oleh Roze & Gerber (2026) dapat dinyatakan sebagai masalah optimasi diskrit:

$$\min_{x_i \in \{0,1\}} \; Z = \alpha \cdot C_{\text{mono}}(x) + \beta \cdot C_{\text{bond}}(x) + \gamma \cdot C_{\text{thermal}}(x) + \delta \cdot C_{\text{yield}}(x)$$

dengan $x_i$ adalah variabel biner yang menandakan blok fungsional $i$ ditempatkan pada die tertentu, $\alpha,\beta,\gamma,\delta$ adalah bobot normalisasi ($\alpha+\beta+\gamma+\delta = 1$). Komponen biaya:

- $C_{\text{mono}}(x) = \sum_i A_i \cdot c_{\text{Si}}$ adalah biaya area silikon aktif, dengan $c_{\text{Si}}$ biaya per mm² sesuai node fabrikasi.
- $C_{\text{bond}}(x) = N_{\text{bond}} \cdot p_{\text{pitch}} \cdot c_{\text{pad}}$ adalah biaya interkoneksi hybrid bonding, dengan $N_{\text{bond}}$ jumlah pad dan $p_{\text{pitch}}$ pitch rerata.
- $C_{\text{thermal}}(x)$ adalah penalti termal yang dirumuskan melalui relasi Fourier:
$$C_{\text{thermal}} = \sum_k \int_{V_k} \lambda_k |\nabla T(\mathbf{r})|^2 \, dV$$
- $C_{\text{yield}}(x) = 1 - \prod_k Y_k(A_k)$ mengikuti model yield negatif binomial Poisson.

### 2.2 Resistansi Kontak Cu-Cu Hybrid Bonding

Lau (2023) menurunkan model resistansi sambungan Cu-Cu berdasarkan konduksi melalui mikro-kontak:

$$R_c = \frac{\rho_{\text{Cu}}}{2 \pi r_c} \cdot \arctan\left(\frac{d}{2 r_c}\right) + R_{\text{interface}}$$

dengan $\rho_{\text{Cu}} = 1,68 \times 10^{-8}$ Ω·m resistivitas tembaga, $r_c$ jari-jari rata-rata kontak metalik hasil *bonding*, $d$ diameter pad, dan $R_{\text{interface}}$ resistansi lapisan antarmuka oksida/sisa polusi. Untuk pitch 3 µm dengan rasio kontak metalik $\eta \geq 80\%$ (standar industri), resistansi kontak khas berada di rentang $R_c \approx 0,15–0,35$ mΩ per sambungan — sepuluh kali lebih rendah daripada solder bump konvensional.

### 2.3 Model Termal 3D-IC dengan Resistansi Sambungan

Distribusi suhu pada stack 3D dimodelkan dengan persamaan panas *steady-state* multi-lapis:

$$\nabla \cdot \left( k_i \nabla T \right) + q_i'''(\mathbf{r}) = 0$$

Untuk kasus satu-dimensi pada die dengan *through-silicon via* (TSV) sebagai *heat-spreader*, Roze & Gerber (2026) mengusulkan resistansi termal efektif:

$$R_{\text{th,eff}} = \frac{t_{\text{Si}}}{k_{\text{Si}} A_{\text{die}}} + \frac{1}{h_{\text{conv}} A_{\text{die}}} + R_{\text{TSV}}$$

dengan $R_{\text{TSV}} = \dfrac{t_{\text{TSV}}}{N_{\text{TSV}} \pi r_{\text{TSV}}^2 k_{\text{Cu}}}$ adalah kontribusi *thermal via*, $N_{\text{TSV}}$ jumlah TSV, $t_{\text{TSV}}$ panjang via, $r_{\text{TSV}}$ jari-jarinya.

### 2.4 Model Mekanikal dan *Stress-induced Warpage*

Untuk memprediksi *warpage* paket 3D akibat koefisien ekspansi termal (CTE) yang berbeda, digunakan formulasi *Stoney* yang dimodifikasi:

$$\kappa = \frac{6 \Delta\alpha \cdot \Delta T \cdot t_f^2}{M_f t_s^2} \cdot \frac{1}{1 + \frac{E_f t_f}{E_s t_s}}$$

dengan $\kappa$ kelengkungan (*curvature*), $E$ modulus Young, $t$ tebal lapisan, subskrip $f$ untuk film/die dan $s$ untuk substrat, $\Delta\alpha$ beda CTE, $\Delta T$ selisih suhu. Untuk Cu-Cu bonding dengan $\alpha_{\text{Cu}} = 17$ ppm/K versus $\alpha_{\text{Si}} = 2,6$ ppm/K, residual stress menjadi signifikan dan harus diminimasi melalui *annealing profile* $T_a \leq 250°C$ (Lau, 2023).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Roze dan Gerber (2026) menyajikan arsitektur EDA modern untuk chiplet/3D-IC yang mengintegrasikan *front-end* (sintesis logika, place & route), *back-end* (physical verification, DFM), dan *multi-physics* (thermal, mechanical, SI/PI) ke dalam satu *unified database* (UDB). SOP implementasi di lantai produksi mengikuti alur:

1. **Spesifikasi Sistem dan Partisi Arsitektur (Fase A)**
   - Definisikan *workload*, *throughput target*, dan *power budget*.
   - Gunakan algoritma partisi *min-cut hypergraph* dengan kendala *yield*, termal, dan biaya interkoneksi.
   - Output: blok fungsional siap *chipletization*.

2. **Implementasi Desain (Fase B)**
   - Floorplanning masing-masing chiplet dengan *bump map* sesuai pitch Cu-Cu.
   - *Routing* global dengan memperhatikan *escape routing* untuk TSV/bonding pad.
   - Validasi DRC/ERC (Design Rule Check / Electrical Rule Check) menggunakan *foundry PDK*.

3. **Verifikasi Lintas-domain (Fase C)**
   - *Static timing analysis* (STA) lintas-die dengan model *chiplet interface* yang mencakup jitter dan *bond-pad capacitance*.
   - *Signal integrity* (SI) dan *power integrity* (PI) analysis dengan *extracted S-parameter* dari struktur hybrid bonding.
   - *Thermal co-simulation* menggunakan *compact thermal model* (CTM) dua-resistor per blok.

4. **Tape-out dan Validasi Manufaktur (Fase D)**
   - *Design-for-test* (DFBIST) terintegrasi pada masing-masing chiplet.
   - *Known Good Die* (KGD) test sebelum stacking.
   - *Wafer-to-wafer* atau *die-to-wafer* hybrid bonding pada suhu 200–250 °C dengan akurasi alignment $\leq \pm 200$ nm (3 σ) sesuai Lau (2023).

5. **Karakterisasi dan Feedback Loop (Fase E)**
   - *Shelf burn-in*, *HTSL* (High Temperature Storage Life), dan *TMCL* (Temperature Cycling).
   - Data kegagalan dimasukkan ke model *yield* untuk iterasi desain.

Standar industri yang relevan termasuk **JEDEC JEP158** (karakterisasi termal paket), **JESD22-A104** (uji siklus termal), dan **IPC-7093** (desain dan perakitan 3D-IC).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Desain AI Accelerator 3D-IC

Sebuah perusahaan semikonduktor merancang *AI training accelerator* 2.5D yang terdiri dari:
- **Compute die:** 2 buah, masing-masing $A_c = 80$ mm², node 3 nm, $P_c = 75$ W
- **HBM3e stack:** 4 buah, masing-masing kapasitas 24 GB, pitch microbump 40 µm
- **Base die (interposer aktif):** $A_b = 250$ mm², node 5 nm

Hybrid bonding Cu-Cu digunakan antara *compute die* dan *base die* dengan pitch $p = 3$ µm dan densitas $N_{\text{bond}} = 1,2 \times 10^5$ pad per die. Anggaran biaya ditetapkan $\alpha=0,35, \beta=0,25, \gamma=0,25, \delta=0,15$.

### 4.2 Perhitungan Termal

Ambil dimensi die efektif $t_{\text{Si}} = 0,75$ mm, $A_{\text{die}} = 80 \times 10^{-6}$ m², konduktivitas $k_{\text{Si}} = 148$ W/(m·K), $h_{\text{conv}} = 10.000$ W/(m²·K) (pendinginan *cold plate*).

Hitung resistansi termal die tunggal:

$$R_{\text{th,Si}} = \frac{0,75 \times 10^{-3}}{148 \times 80 \times 10^{-6}} = 0,0634 \text{ K/W}$$

Resistansi konveksi:

$$R_{\text{th,conv}} = \frac{1}{10.000 \times 80 \times 10^{-6}} = 1,25 \text{ K/W}$$

Total tanpa TSV: $R_{\text{th,eff}} \approx 1,31$ K/W. Kenaikan suhu pada $P = 75$ W:

$$\Delta T = P \cdot R_{\text{th,eff}} = 75 \times 1,31 = 98,5 \text{ K}$$

Dengan 2.000 TSV per die ($r_{\text{TSV}} = 5$ µm, $t_{\text{TSV}} = 100$ µm, $k_{\text{Cu}} = 400$ W/(m·K)):