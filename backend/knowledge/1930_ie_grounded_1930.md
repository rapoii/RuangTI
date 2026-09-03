# 1930 — Model Aliran Aksisimetrik Ekstraksi Minyak Kanabis dengan Proses Supercritical Fluid Extraction CO2: Formulasi CFD, Transfer Panas, dan Optimasi Rekayasa

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO2 process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botani farmasi dan nutraceutical global sedang mengalami transformasi paradigma teknologi yang signifikan, di mana ekstraksi minyak kanabis (*Cannabis sativa* L.) menjadi salah satu aplikasi paling bernilai ekonomi tinggi dan paling ketat regulasinya. Pasar global cannabinoid farmasi diproyeksikan menembus valuasi lebih dari USD 50 miliar pada akhir dekade ini, didorong olehlegalisasi medicinal cannabis di lebih dari 50 negara dan meningkatnya permintaan akan produk berkualitas *pharmaceutical-grade* yang bebas dari residu pelarut organik (Obchoei & Limtrakarn, 2024). Dalam konteks ini, pemilihan teknologi ekstraksi menjadi keputusan rekayasa kritis yang menentukan yield, kemurnian, profil cannabinoid (terutama THC, CBD, CBG, dan minor cannabinoids), serta footprint lingkungan fasilitas produksi.

Ekstraksi dengan **supercritical CO₂ (SC-CO₂)** muncul sebagai teknologi unggulan karena CO₂ pada kondisi superkritis (T > 31,1 °C dan P > 73,8 bar) memiliki difusivitas tinggi类似于 gas dan densitas mirip liquid, sehingga menggabungkan daya solvasi kuat dengan kemampuan penetrasi massa yang superior. Lebih penting lagi, CO₂ bersifat *Generally Recognized as Safe* (GRAS), tidak meninggalkan residu toksik, dan memungkinkan回收 (recycling) loop tertutup sehingga menurunkan biaya operasional jangka panjang. Akan tetapi, optimalisasi proses SC-CO₂ menghadapi tantangan numerik dan fisik yang nontrivial: (i) perilaku termodinamika CO₂ yang sangat non-ideal di dekat titik kritis, (ii) dinamika transfer massa dalam *packed bed* biomassa yang kompleks, (iii) kopling kuat antara transfer panas dan transfer massa selama tahap *pressurization*, *extraction*, dan *depressurization*, serta (iv) kebutuhan akan model komputasional yang mampu memprediksi profil yield spasial dan temporal di dalam vessel ekstraktor (Toledo & del Valle, 2023).

Kebutuhan industri akan model prediktif yang murah dan akurat inilah yang melatarbelakangi riset Obchoei dan Limtrakarn (2024) yang mengembangkan **model aliran aksisimetrik 2D** berbasis Computational Fluid Dynamics (CFD) untuk memprediksi yield ekstraksi minyak kanabis sebagai fungsi parameter operasional seperti tekanan, temperatur, laju alir CO₂, dan ukuran partikel biomassa. Secara paralel, Toledo dan del Valle (2023) melengkapi fondasi termal dengan membangun model transfer panas yang divalidasi terhadap data eksperimental selama tiga tahap operasional, memberikan kerangka energi yang diperlukan untuk coupled simulation. Integrasi kedua pendekatan ini memungkinkan insinyur Teknik Industri melakukan *scale-up* desain ekstraktor dari laboratorium (50 mL) ke skala pilot (10 L) hingga industri (≥100 L) dengan confidence interval yang terukur, sekaligus mendukung validasi Good Manufacturing Practice (GMP) untuk fasilitas produksi cannabinoid.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Sistem Koordinat Aksisimetrik dan Asumsi Dasar

Model Obchoei & Limtrakarn (2024) menggunakan geometri silinder ekstraktor dengan simpan rotasional terhadap sumbu vertikal (z), sehingga persamaan-persamaan konservasi dapat direduksi dari 3D kartesian ke 2D dalam koordinat silinder $(r, z)$:

$$\frac{\partial}{\partial z}(\rho v_z) + \frac{1}{r}\frac{\partial}{\partial r}(r \rho v_r) = 0 \quad \text{(Continuity)}$$

di mana $v_z$ dan $v_r$ masing-masing adalah komponen kecepatan aksial dan radial, serta $\rho$ adalah densitas fluida superkritis yang sangat sensitif terhadap kondisi operasi.

### 2.2 Persamaan Momentum dalam Media Berpori (Brinkman–Forchheimer Extended Darcy)

Untuk packed bed biomassa kanabis, momentum transport dimodelkan dengan persamaan Brinkman yang dimodifikasi dengan term inersia Forchheimer:

$$\frac{1}{\varepsilon}\left[\frac{\partial}{\partial t}(\rho v_i) + \nabla\cdot\left(\rho \mathbf{v}\mathbf{v}\right)\right] = -\nabla p + \mu_{eff}\nabla^2 \mathbf{v} - \underbrace{\frac{\mu}{K}\mathbf{v}}_{\text{Darcy}} - \underbrace{\frac{\rho C_F}{\sqrt{K}}|\mathbf{v}|\mathbf{v}}_{\text{Forchheimer}} + \rho \mathbf{g}$$

dengan $\varepsilon$ porositas bed, $K$ permeabilitas intrinsik, $C_F$ konstanta inersia Forchheimer, dan $\mu_{eff}$ viskositas efektif. Estimasi $K$ mengikuti **persamaan Kozeny–Carman**:

$$K = \frac{d_p^2 \varepsilon^3}{150(1-\varepsilon)^2}$$

dan $C_F = 0.55$ untuk partikel biomassa irregular berdasarkan korelasi Ergun.

### 2.3 Persamaan Energi dan Termodinamika Supercritical CO₂

Berkontribusi dari Toledo & del Valle (2023), persamaan energi selama tahap ekstraksi steady-state adalah:

$$\rho c_p \mathbf{v}\cdot\nabla T = \nabla\cdot(k_{eff}\nabla T) + \dot{q}_{reaction} + \dot{q}_{phase}$$

dengan $k_{eff} = \varepsilon k_f + (1-\varepsilon)k_s$ adalah konduktivitas efektif bed, $\dot{q}_{reaction}$ adalah panas metabolik residual biomassa (umumnya diabaikan), dan $\dot{q}_{phase}$ adalah kontribusi perubahan fasa minor CO₂. Densitas $\rho$ dan viskositas $\mu$ CO₂ superkritis dihitung dengan **persamaan keadaan Peng–Robinson**:

$$P = \frac{RT}{v_m - b} - \frac{a(T)}{v_m(v_m+b) + b(v_m-b)}$$

dengan $a(T) = 0.45724\frac{R^2 T_c^2}{P_c}\left[1 + \kappa\left(1-\sqrt{T/T_c}\right)\right]^2$ dan parameter $\kappa$ spesifik untuk CO₂ ($\omega = 0{,}225$).

### 2.4 Persamaan Transfer Massa Species

Konsentrasi minyak terlarut dalam fasa SC-CO₂ dimodelkan dengan species transport:

$$\frac{\partial}{\partial t}(\varepsilon \rho Y_i) + \nabla\cdot(\rho \mathbf{v} Y_i) = \nabla\cdot(\rho D_{eff,i}\nabla Y_i) + \dot{r}_i$$

di mana laju desorpsi minyak dari matriks biomassa mengikuti model **Linear Driving Force (LDF)**:

$$\dot{r}_i = k_s a_p (Y^* - Y_i), \quad \text{dengan} \quad k_s = \frac{10 D_s}{d_p}$$

sehingga yield kumulatif di outlet vessel pada waktu $t$ adalah:

$$Y_{cum}(t) = \int_0^t \dot{m}_{CO_2} Y_{outlet}(\tau) d\tau$$

### 2.5 Konstanta dan Parameter yang Digunakan

| Parameter | Nilai Tipikal | Sumber |
|-----------|---------------|--------|
| $T_c$ (CO₂) | 304,13 K | NIST |
| $P_c$ (CO₂) | 73,8 bar | NIST |
| $d_p$ partikel kanabis | 0,5–1,5 mm | Eksperimen |
| $\varepsilon$ porositas | 0,35–0,45 | Eksperimen |
| $D_{eff,CBD}$ | $\sim 10^{-8}$ m²/s | Korelasi |
| $P$ operasi | 200–350 bar | Desain |
| $T$ operasi | 313–333 K | Desain |

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industrial model aksisimetrik SC-CO₂ mengikuti prosedur rekayasa 8-tahap:

**Tahap 1 – Karakterisasi Biomassa.** Ukur kadar air (≤10%), ukuran partikel (sieve analysis), dan densitas bulk ($\rho_b \approx 200$ kg/m³). Karakteristik ini menjadi input porositas $\varepsilon$ dan permeabilitas $K$.

**Tahap 2 – Preparasi Ekstraktor.** Muat biomassa ke vessel stainless steel 316L dengan *aspect ratio* L/D ≥ 3 untuk mengembangkan profil aliran fully-developed. Pre-conditioning pada temperatur target minimal 30 menit untuk kestabilan termal.

**Tahap 3 – Pressurization Stage.** Naikkan tekanan secara gradual (rate ≤ 5 bar/s) untuk menghindari *thermal shock* dan gradien termal merusak biomassa. Pantau dengan pressure transducer dan termokopel tipe K di 3 titik radial menurut rekomendasi Toledo & del Valle (2023).

**Tahap 4 – Pencapaian Steady-State Termal.** Tunggu hingga $\Delta T < 0{,}5$ °C antar sensor (umumnya 10–20 menit), kemudian verifikasi menggunakan energy balance integral:

$$Q_{loss} = \int_0^L \int_0^R 2\pi r U_{wall}(T_{wall} - T_\infty) dz\,dr$$

**Tahap 5 – Static Soaking (Opsional).** Untuk yield tinggi cannabinoid, holding 30–60 menit tanpa alir membantu matriks biomassa membengkak dan melepas minyak intraselular.

**Tahap 6 – Dynamic Extraction.** Alirkan SC-CO₂ pada laju $1$–$5$ kg/jam per kg biomassa. Sampling outlet setiap 10 menit untuk analisis HPLC cannabinoid. Validasi profil yield terhadap prediksi CFD: deviasi ≤ 15% menunjukkan model terkalibrasi.

**Tahap 7 – Depressurization & Separation.** Turunkan tekanan secara terkontrol (1–2 bar/s) melewati separator pada 50–60 bar untuk回收 minyak. Tahap ini sensitif terhadap *fogging effect* yang memengaruhi yield akhir (Toledo & del Valle, 2023).

**Tahap 8 – Cleaning & Sanitation (CIP/SIP).** Prosedur *Clean-In-Place* dengan ethanol 70% dan *Steam-In-Place* pada 121 °C selama 30 menit sesuai GMP EU-GMP Annex 1 untuk fasilitas cannabinoid farmasi.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Spesifikasi Desain

Sebuah fasilitas ekstraksi cannabinoid di Colorado, AS memiliki spesifikasi sebagai berikut: vessel ekstraktor volume $V = 10$ L (diameter $D_i = 150$ mm, panjang $L = 566$ mm), biomassa kanabis varietas "Cherry Cannabis" sebanyak $m_{bio} = 2$ kg dengan $\rho_b = 200$ kg/m³ dan $\varepsilon = 0{,}4$. Target operasi: $P = 300$ bar, $T = 333$ K, laju alir CO₂ $\dot{m}_{CO_2} = 4$ kg/jam.

### 4.2 Perhitungan Properti SC-CO₂

Menggunakan persamaan Peng–Robinson pada $T = 333$ K dan $P = 300$ bar:

- $T_r = 333/304{,}13 = 1{,}095$ (superkritis)
- $\kappa = 0{,}37464 + 1{,}54226\omega - 0{,}26992\omega^2 = 0{,}681$
- $a(T) = 0{,}45724 \cdot (R^2 T_c^2/P_c)[1 + \kappa(1-\sqrt{T_r})]^2 = 3{,}875 \times 10^{-3}$ Pa·m⁶/mol²
- $b = 0{,}07780 \cdot RT_c/P_c = 2{,}65 \times 10^{-5}$ m³/mol
- Solusi iteratif menghasilkan $\rho_{CO