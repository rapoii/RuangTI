# 1531 — Solusi EDA untuk Desain Chiplet dan 3D-IC: Integrasi Heterogen, Hibrid Bonding, dan Optimasi Manufaktur Semikonduktor Lanjutan

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** EDA Solution for Chiplet and 3D-IC Design
**Jurnal & Sitasi Utama:** Ksenia Roze, Mark Gerber (2026). *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)*. DOI: [https://doi.org/10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563)
**Sitasi Pendukung:** John H. Lau (2023). *Chiplet Design and Heterogeneous Integration Packaging*. DOI: [https://doi.org/10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)

---

## 1. Pendahuluan dan Konteks Industri

Industri semikonduktor global tengah memasuki fase transisi arsitektural yang fundamental, ditandai dengan pergeseran paradigma dari desain System-on-Chip (SoC) monolitik menuju paradigma *heterogeneous integration* (HI) berbasis chiplet dan *three-dimensional integrated circuit* (3D-IC). Pergeseran ini dipicu oleh tiga tekanan struktural simultan yang tidak lagi dapat diakomodasi oleh Hukum Moore tradisional: (i) melonjaknya biaya litografi EUV per wafer yang melampaui ambang $200 per wafer untuk node sub-3 nm, (ii) menurunnya *yield* monolitik akibat meningkatnya *die area* dan kompleksitas mask layer, serta (iii) kebutuhan pasar akan komputasi spesifik domain (AI/HPC, edge inference, otomotif ADAS) yang menuntut ko-eksistensi proses logika, memori, dan analog dalam satu paket fungsional. Roze dan Gerber (2026) dalam tulisannya di *2026 International Conference on Electronics Packaging and Hybrid Bonding Symposium (ICEP-HBS)* dengan DOI [10.23919/icep-hbs69241.2026.11550563](https://doi.org/10.23919/icep-hbs69241.2026.11550563) menegaskan bahwa Electronic Design Automation (EDA) modern harus berevolusi dari alat bantu *place-and-route* dua dimensi menjadi orkestrator sistem multi-disiplin yang menjembatani keputusan arsitektural, termal, manufaktur, dan keandalan secara simultan.

Konteks ekonominya sangat mendesak. Pasar chiplet global diproyeksikan tumbuh dengan CAGR >40% periode 2024-2030, sementara investasi kapasitas packaging lanjutan (*advanced packaging*) oleh foundry besar (TSMC, Intel Foundry, Samsung) telah melampaui $80 miliar kumulatif. Tanpa piranti EDA yang mampu melakukan *co-design* antara chiplet yang berbeda proses node, struktur *interposer* atau *bridge*, topologi *through-silicon via (TSV)*, dan parameter proses hybrid bonding—akan terjadi fragmentasi *design intent* yang menaikkan *time-to-market* dan jumlah iterasi *tape-out*. Di sinilah peran sentral solusi EDA yang diajukan Roze & Gerber (2026) menjadi strategis: menyediakan kerangka tunggal yang menyatukan desain logika, verifikasi fisik, sign-off termal-mekanis, dan *Design-for-Manufacturability* (DfM) untuk proses bonding suhu rendah.

Komplementer terhadap hal tersebut, Lau (2023) dalam *Chiplet Design and Heterogeneous Integration Packaging* (DOI [10.1007/978-981-19-9917-8_6](https://doi.org/10.1007/978-981-19-9917-8_6)) memberikan dasar proses manufaktur kritis—khususnya Cu-Cu *hybrid bonding*—yang menjadi *process of record* untuk pitch sambungan sub-10 μm. Lau mendokumentasikan bahwa keberhasilan integrasi hibrid tidak hanya ditentukan oleh akurasi alignment (toleransi <±200 nm pada 3 sigma), tetapi juga oleh kesepadanan koefisien muai panas (CTE), *annealing temperature profile*, dan parameter *planarization* chemical-mechanical polishing (CMP) yang semuanya harus dimasukkan sebagai *constraint* dalam perulangan desain EDA. Perspektif industrial engineering melihatkan ini sebagai masalah optimasi lintas-fungsi di mana variabel keputusan desain (jumlah chiplet, ukuran *interposer*, pitch TSV) dan variabel keputusan proses (suhu bonding, tekanan, waktu *anneal*) berada dalam satu *design space* yang harus dieksplorasi secara koheren.

Dengan demikian, modul ini menyintesiskan kedua literatur tersebut ke dalam kerangka industrial engineering yang memandang desain chiplet/3D-IC bukan sebagai masalah EDA tunggal, melainkan sebagai masalah rekayasa sistem yang memerlukan *decision-support framework*, formulasi matematis biaya-yield-throughput, dan SOP manufaktur yang terverifikasi secara empiris.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Biaya-Yield Arsitektur Chiplet

Untuk membandingkan desain SoC monolitik versus partisi chiplet secara kuantitatif, digunakan model biaya total kepemilikan (TCO) yang menggabungkan biaya wafer, biaya packaging, dan *yield* sistem. Roze dan Gerber (2026) merujuk pada generalisasi rumus *yield*_negative binomial*:

$$Y_{\text{system}} = \prod_{i=1}^{N_c} Y_i \cdot \prod_{j=1}^{N_b} Y_{b,j}$$

di mana $Y_i$ adalah yield fabrikasi chiplet ke-$i$ pada area $A_i$ dengan *defect density* $D_0$:

$$Y_i = \left(1 + \frac{D_0 \cdot A_i}{\alpha}\right)^{-\alpha}$$

dengan $\alpha$ adalah *cluster parameter* yang khas untuk proses fabrikasi mature. Yield sambungan hybrid bonding per interkoneksi ke-$j$ dimodelkan sebagai fungsi probabilitas kontak yang sehat:

$$Y_{b,j} = 1 - e^{-\lambda_j}$$

di mana $\lambda_j$ adalah *bonding yield rate* yang bergantung pada *misalignment* $\sigma_{\text{align}}$, luas kontak efektif $A_{b,j}$, dan parameter difusi Cu-Cu.

### 2.2 Model Termal 3D-IC dengan Resistansi Konduksi dan Konveksi

Lau (2023) mengembangkan persamaan panas tunak (*steady-state*) untuk stack 3D-IC dengan $N$ die dan *thermal interface material* (TIM) di antaranya:

$$T_i = T_{\text{amb}} + \sum_{k=1}^{i} \frac{q \cdot R_{th,k} + \Delta T_{\text{TIM},k}}{}$$

dengan $q$ adalah fluks panas per unit area, $R_{th,k}$ adalah resistansi termal die-$k$:

$$R_{th,k} = \frac{t_k}{k_k \cdot A_k}$$

dan $\Delta T_{\text{TIM},k}$ adalah drop suhu pada *bondline* ke-$k$:

$$\Delta T_{\text{TIM},k} = \frac{q \cdot t_{\text{TIM},k}}{k_{\text{TIM}} \cdot A_k}$$

Untuk operasi transien, kapasitansi termal die ke-$i$ diberikan oleh:

$$C_{th,i} = \rho_i \cdot c_{p,i} \cdot t_i \cdot A_i$$

yang menghasilkan *time constant* termal:

$$\tau_{th} = R_{th,\text{total}} \cdot C_{th,\text{total}} = \left(\sum_{k=1}^{N} R_{th,k}\right) \cdot \left(\sum_{k=1}^{N} C_{th,k}\right)$$

### 2.3 Optimasi Pitch Sambungan dalam EDA

Roze & Gerber (2026) mengusulkan fungsi objektif optimasi yang meminimalkan *weighted sum* antara biaya per sambungan, resistansi listrik, dan degradasi termal:

$$\min_{\mathbf{p}, \mathbf{w}} \; \Phi = w_1 \cdot C_{\text{bond}}(\mathbf{p}) + w_2 \cdot R_{\text{el}}(\mathbf{p}, \mathbf{w}) + w_3 \cdot \Delta T_{\text{max}}(\mathbf{p}, \mathbf{w})$$

dengan kendala *inequality*:

$$\text{CTR}_{\text{min}} \le \text{CTR}(\mathbf{p}) \le \text{CTR}_{\text{max}}$$

$$\sigma_{\text{align}} \le \sigma_{\text{spec}}$$

di mana $\mathbf{p}$ adalah vektor pitch per layer, $\mathbf{w}$ adalah vektor lebar *trace*, dan CTR (*chip-to-package thermal resistance*) adalah batas desain termal.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Alur Kerja EDA Terintegrasi untuk Chiplet/3D-IC

Berdasarkan kerangka Roze & Gerber (2026), alur kerja EDA terintegrasi mengikuti tujuh tahapan berurutan yang disebut *Unified Chiplet Design Flow* (UCDF):

**Tahap 1 — Partitioning & Architectural Planning:** Sistem EDA menerima *RTL* deskripsi fungsional dan mengeksplorasi partisi multi-chiplet dengan metrik *trade-off* antara jumlah die, panjang *interconnect*, dan *throughput* antardie. Algoritma *min-cut* multi-arah digunakan dengan bobot biaya komunikasi:

$$\min \sum_{e \in E_{\text{cut}}} w_e \cdot \text{lat}(e) \cdot \text{BW}(e)$$

**Tahap 2 — Floorplanning Multi-Die:** Penempatan chiplet di atas *interposer* atau *substrate* organik dengan kendala *keep-out zone* dan alignment toleransi. EDA menghitung *thermal hot-spot* awal menggunakan model kompak RC.

**Tahap 3 — Physical Implementation per Chiplet:** Setiap chiplet menjalani implementasi fisik independen pada *process design kit* (PDK) masing-masing. Ini memungkinkan heterogenitas node (mis. logika 3 nm + memori 18 nm + analog 28 nm).

**Tahap 4 — Hybrid Bonding Interface Synthesis:** EDA menghasilkan *GDS-II* untuk permukaan bonding atas/bawah tiap chiplet, dengan verifikasi DRC (Design Rule Check) terhadap aturan pitch, *pad density*, dan profil planarisasi CMP.

**Tahap 5 — Co-Simulation Elektrik-Termal-Mekanis:** Solusi EDA melakukan *sign-off* dengan simulasi Power-Signal-Thermal-Reliability (PSTR) untuk memvalidasi bahwa desain memenuhi batas IR-drop, *electromigration*, dan *thermo-mechanical stress*.

**Tahap 6 — DfM Feedback Loop:** Hasil verifikasi diumpanbalikkan ke tahap 1-4 untuk iterasi; *multi-objective optimization* (MOO) dengan algoritma NSGA-II digunakan untuk eksplorasi Pareto-front.

**Tahap 7 — Tape-Out & Manufacturing Hand-Off:** File GDS-II final di-*merge* dengan data *bonding stack-up* dan dikirim ke foundry/package-assembly house.

### 3.2 SOP Proses Cu-Cu Hybrid Bonding

Lau (2023) menetapkan SOP proses hybrid bonding yang menjadi acuan dalam validasi desain EDA:

1. **Wafer Preparation:** Deposisi Cu di atas lapisan dielektrik SiCN atau SiO₂ menggunakan *electroplating* dengan target ketebalan 1-5 μm dan *roughness* <0.5 nm Ra pas-CMP.
2. **Surface Activation:** Plasma treatment N₂/H₂ selama 30-90 detik untuk membersihkan oksida residu Cu₂O.
3. **Alignment & Pre-Bonding:** *Wafer-to-wafer* alignment dengan target $\sigma_{\text{align}} \le 200$ nm, dilakukan di bawah atmosfer inert (N₂).
4. **Thermo-Compression Bonding (TCB):** Aplikasi tekanan 0,5-1,5 MPa pada suhu 200-300°C selama 30-60 menit. Profil suhu mengikuti persamaan:

$$T(t) = T_{\text{peak}} \left[1 - \left(1 - \frac{T_0}{T_{\text{peak}}}\right) e^{-t/\tau_{\text{heat}}}\right]$$

5. **Post-Bond Anneal:** Tahap annealing pada 250-350°C selama 60-120 menit untuk membentuk界面 Cu-Cu padat melalui difusi volume.
6. **Metrology & Inspection:** Verifikasi menggunakan *scanning acoustic microscopy* (SAM) dan *IR microscopy* untuk deteksi *void* dan *delamination*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario: Desain Modul AI Accelerator 3D-IC

Sebuah tim desain ingin mengevaluasi dua arsitektur alternatif untuk modul akselerator AI inferensi:

**Arsitektur A — SoC monolitik 5 nm:** $A = 600$ mm², *defect density* $D_0 = 0{,}05$ cm⁻², $\alpha = 3$.

**Arsitektur B — 4-chiplet 5 nm pada *interposer* silikon:** Tiap chiplet $A_i = 150$ mm², $D_0 = 0{,}05$ cm⁻², $\alpha = 3$, sambungan hybrid bonding $N_b = 4$ dengan $\lambda = 0{,}02$ per sambungan.

**Perhitungan Yield per Chiplet (Arsitektur B):**

$$Y_i = \left(1 + \frac{0{,}05 \cdot 15}{3}\right)^{-3} = (1,25)^{-3} = 0{,}512$$

**Yield Sambungan:**

$$Y_{b,j} = 1 - e^{-0{,}02} = 1 - 0{,}9802 = 0{,}0198$$

Tertulis dengan benar: $Y_{b,j} = 1 - e^{-0{,}02} \approx 0{,}0198$, artinya probabilitas *failure* per sambungan sangat kecil.

**Yield Sistem Arsitektur B:**

$$Y_{\text{system}} = (0{,}512)^4 \cdot (0{,}9802)^4 = 0{,}0687 \cdot 0{,}9228 = 0{,}0634$$

**Yield SoC Monolitik:**

$$Y_{\text{SoC}} = \left(1 + \frac{0{,}05 \cdot 60}{3}\right)^{-3} = (2,0)^{-3} = 0{,}125$$

Hasil menunjukkan bahwa pada parameter input tersebut, *yield* sistem partisi chiplet lebih rendah per *package* karena faktor perkalian yield sambungan. Namun, dengan jumlah die per wafer yang lebih tinggi (karena area chiplet kecil), *effective cost per good die* bisa lebih rendah.

**Perhitungan *Cost per Good Die*:**

Asumsikan biaya wafer tetap $C_w = \$18.000$ untuk wafer 300 mm. Jumlah die per wafer:

$$N_{\text