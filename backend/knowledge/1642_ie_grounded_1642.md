# 1642 — Pemodelan Aliran Aksisimetrik Ekstraksi Minyak Kanabis dengan Fluida Superkritis CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botani bernilai tinggi—khususnya *cannabis sativa* untuk produksi kanabinoidobat seperti cannabidiol (CBD) dan tetrahydrocannabinol (THC) medis—menghadapi tantangan rekayasa yang signifikan dalam hal yield, kemurnian, dan kepatuhan regulasi. Pasar global ekstrak kanabis diproyeksikan menembus lebih dari USD 50 miliar pada akhir dekade ini (Obchoei & Limtrakarn, 2024, DOI: [10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)), sehingga efisiensi unit operasi ekstraksi menjadi variabel strategis yang menentukan daya saing manufaktur.

Metode konvensional berbasis pelarut organik (etanol, heksana, kloroform) menghadapi problematik residual pelarut, risiko kebakaran, footprint lingkungan besar, dan profil toksikologis yang tidak sesuai untuk aplikasi farmasi. Sebagai respon, *supercritical fluid extraction* (SFE) dengan CO₂ (SC-CO₂) muncul sebagai teknologi *green chemistry* yang memenuhi *Good Manufacturing Practice* (GMP) farmasi. Keunggulan intrinsik CO₂ adalah *tunability* properti fisisnya (densitas, viskositas, difusivitas) melalui manipulasi variabel proses P dan T di atas titik kritisnya ($T_c = 304{,}13\,\text{K}$, $P_c = 7{,}38\,\text{MPa}$). Pada kondisi operasi tipikal ($P=10{-}30\,\text{MPa}$, $T=313{-}333\,\text{K}$), CO₂ bersifat non-polar dengan selektivitas tinggi terhadap trigliserida, terpen, dan kanabinoid.

Namun demikian, perancangan dan scale-up ekstraktor SC-CO₂ secara historis bersifat *empiris-tinkering*, menyebabkan inefisiensi termal dan sub-optimal yield. Obchoei & Limtrakarn (2024) menyatakan secara eksplisit bahwa pemahaman hidrodinamika internal *extractor vessel* merupakan *missing link* yang menghambat transisi dari laboratorium ke produksi industri. Paper tersebut mengusulkan **model aliran aksisimetrik 2D** yang merepresentasikan geometri silinder vessel secara parsimoni namun tetap menangkap gradien radial-aksial yang relevan. Studi ini dilengkapi oleh Toledo & del Valle (2023, DOI: [10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)) yang menekankan aspek **perpindahan panas transien** selama tahap *pressurization, extraction,* dan *depressurization*—suatu aspek yang sering diabaikan padahal berdampak langsung pada kualitas fitokimia.

Konteks industri ini krusial bagi insinyur Teknik Industri karena keputusan desain extractor vessel menyentuh trade-off multi-objektif: kapasitas throughput (kg biomassa/jam), konsumsi energi spesifik (kWh/kg ekstrak), konsistensi batch (CpK proses), serta CAPEX/OPEX. Tanpa model matematis yang terkalibrasi, pengambilan keputusan tersebut mengandalkan *rule of thumb* yang menurunkan margin keuntungan hingga 20–30%.

---

## 2. Landasan Teori & Formulasi Matematis

Model aliran aksisimetrik yang dikembangkan Obchoei & Limtrakarn (2024) berbasis pada geometri silinder extractor dengan asumsi fundamental berikut:
- Aliran tunak (steady-state) selama tahap *extraction* inti.
- Simetri silinder ($\partial/\partial\theta = 0$) menyederhanakan formulasi 3D menjadi 2D pada koordinat $(r,z)$.
- Campuran biomassa–CO₂ diperlakukan sebagai *porous medium* isotropik dengan porositas $\varepsilon_b$.
- CO₂ superkritis mengikuti *equation of state* (EOS) Span–Wagner atau pendekatan Redlich–Kwong (RK) yang telah teruji pada domain P–T SC-CO₂.

### 2.1 Persamaan Kontinuitas (Konservasi Massa Total)

$$\frac{\partial \rho_f}{\partial t} + \frac{1}{r}\frac{\partial (r \rho_f v_r)}{\partial r} + \frac{\partial (\rho_f v_z)}{\partial z} = 0 \tag{1}$$

dengan $\rho_f$ densitas fluida SC-CO₂, $v_r$ dan $v_z$ komponen kecepatan radial dan aksial.

### 2.2 Persamaan Momentum (Navier–Stokes dengan Sumber Darcy)

Untuk medium berpori, model **Darcy–Forchheimer–Brinkman** digunakan:

$$\rho_f \left( \frac{\partial \mathbf{v}}{\partial t} + (\mathbf{v}\cdot\nabla)\mathbf{v} \right) = -\nabla P + \mu_f \nabla^2 \mathbf{v} - \frac{\mu_f}{K}\mathbf{v} - \frac{\rho_f F}{\sqrt{K}}|\mathbf{v}|\mathbf{v} + \rho_f \mathbf{g} \tag{2}$$

dengan $K$ permeabilitas intrinsik bed, $F$ *Forchheimer coefficient* (koefisien inersia), $\mu_f$ viskositas dinamik SC-CO₂, dan $\mathbf{g}$ vektor gravitasi.

### 2.3 Persamaan Energi (Entalpi)

Mengikuti kerangka Toledo & del Valle (2023, DOI: 10.1016/j.supflu.2023.106046):

$$\varepsilon_b \rho_f C_{p,f} \left( \frac{\partial T_f}{\partial t} + \mathbf{v}\cdot\nabla T_f \right) = k_{eff}\nabla^2 T_f + h_v (T_s - T_f) - \rho_f C_{p,f} \mathbf{v}\cdot\nabla T_f \cdot \frac{1}{\rho_f} \tag{3}$$

di mana $k_{eff}$ konduktivitas efektif bed (mengakomodasi kontribusi parsial padat dan fluida), $h_v$ koefisien transfer panas volumetrik antar fase, dan indeks $s$ merujuk pada matriks biomassa padat.

### 2.4 Persamaan Transfer Massa (Solute dalam Padatan dan Fluida)

Untuk konsentrasi solute di fase padat $C_s$ (kg solute / kg biomassa) dan di fase fluida $Y$ (kg solute / kg CO₂):

$$\frac{\partial C_s}{\partial t} = D_s \nabla^2 C_s - k_s a_s (C_s^* - C_s) \tag{4}$$

$$\varepsilon_b \frac{\partial Y}{\partial t} + \mathbf{v}\cdot\nabla Y = D_f \nabla^2 Y + k_s a_s (C_s^* - C_s) \tag{5}$$

dengan $D_s$ dan $D_f$ koefisien difusi efektif di fase padat dan fluida, $k_s$ koefisien transfer massa eksternal, $a_s$ luas spesifik partikel (m²/m³), dan $C_s^*$ konsentrasi kesetimbangan yang terkait dengan $Y$ melalui korelasi *solubility* Chrastil:

$$C_s^* = \rho^{n} \exp\left( \frac{a}{T} + b \right) \tag{6}$$

dengan $n$, $a$, $b$ parameter empiris yang bergantung pada solute (CBD, THC, terpen).

### 2.5 Equation of State untuk SC-CO₂

Densitas dihitung dengan EOS Span–Wagner yang memberikan akurasi < 0,5% pada rentang operasi:

$$P = \rho R T \left[ 1 + \sum_{i=1}^{N} n_i \delta^{d_i} \tau^{t_i} + \sum_{i=1}^{N} n_i \delta^{d_i} \tau^{t_i} e^{-\delta^{c_i}} \right]^2 \tag{7}$$

dengan $\delta = \rho/\rho_c$ dan $\tau = T_c/T$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri model ini mengikuti SOP berlapis yang divalidasi oleh Obchoei & Limtrakarn (2024) serta kerangka termal Toledo & del Valle (2023):

### 3.1 Tahap Preparasi dan Pressurization (0–30 menit)
1. **Pre-milling biomassa** hingga ukuran partikel $d_p = 0{,}3{-}0{,}8\,\text{mm}$ (distribusi log-normal).
2. **Packing bed** di dalam vessel dengan rasio tinggi/diameter $\geq 3$ untuk memastikan profil aliran mendekati *plug flow*.
3. **Pressurization** dengan ramp P linier: $dP/dt = 0{,}5\,\text{MPa/min}$ hingga setpoint $P_{set}$, sambil mempertahankan $T_{set} \pm 0{,}5\,\text{K}$ untuk menghindari gradien termal yang merusak fitokimia (Toledo & del Valle, 2023).

### 3.2 Tahap Extraction (60–180 menit)
1. SC-CO₂ dipompakan dengan *flow rate* $\dot{m}_{CO_2} = 1{-}5\,\text{kg/jam}$ secara *co-current* dari bawah ke atas bed.
2. Pengaturan *back-pressure regulator* (BPR) otomatis menjaga $P \pm 0{,}1\,\text{MPa}$.
3. Sampling outlet setiap interval $\Delta t = 10\,\text{min}$ untuk kurva *extraction yield* vs waktu.
4. Monitoring $T_{in}$, $T_{out}$, $\Delta T_{bed}$ untuk verifikasi model termal.

### 3.3 Tahap Depressurization dan Collection (15–45 menit)
1. Depressurisasi gradual: $dP/dt = -1{,}0\,\text{MPa/min}$ untuk mencegah *foaming* pada separator.
2. Pemisahan pada separator primer ($P_1 = 5{-}7\,\text{MPa}$) dan sekunder ($P_2 = 1{,}5{-}2{,}0\,\text{MPa}$).
3. Recovery CO₂ ke *recirculation system* (efisiensi > 95% pada instalasi modern).

### 3.4 Validasi dan Kalibrasi
- **Mesh independence test**: minimal 3 level mesh (50k, 200k, 500k sel) dengan toleransi perubahan field variabel < 1%.
- **Verifikasi eksperimental**: bandingkan prediksi yield vs data lab dengan target $R^2 \geq 0{,}95$ dan *mean absolute percentage error* (MAPE) < 5%.
- **Uncertainty quantification (UQ)** menggunakan metode Monte Carlo pada parameter $\varepsilon_b$, $K$, $d_p$.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Spesifikasi Input (Studi Kasus Pabrik Skala Menengah)

| Parameter | Nilai | Satuan |
|---|---|---|
| Diameter vessel $D$ | 0,10 | m |
| Tinggi bed $H$ | 0,30 | m |
| Massa biomassa kanabis $M_b$ | 0,200 | kg |
| Tekanan operasi $P$ | 25 | MPa |
| Suhu operasi $T$ | 318 (45) | K (°C) |
| Laju alir CO₂ $\dot{m}_{CO_2}$ | 1,5 | kg/jam |
| Porositas bed $\varepsilon_b$ | 0,45 | – |
| Diameter partikel $d_p