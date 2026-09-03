# 1978 — Pemodelan Aliran Aksisimetrik dan Perpindahan Panas pada Ekstraksi Minyak Kanabis dengan Fluida Superkritik CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Ekstraksi minyak kanabis (*Cannabis sativa* L.) telah menjadi salah satu proses rekayasa kimia-farmasi dengan pertumbuhan eksponensial dalam satu dekade terakhir, dipicu oleh legalisasi bertahap untuk kebutuhan medis dan rekreasional di berbagai yurisdiksi (Kanada, beberapa negara bagian AS, Uruguay, Thailand, dan Jerman). Menurut Obchoei & Limtrakarn (2024) dalam *International Journal of Thermofluids*, pemilihan teknologi ekstraksi sangat menentukan kualitas profil cannabinoid—terutama konsentrasi tetrahydrocannabinol (THC), cannabidiol (CBD), dan cannabinoid minor—serta kontaminan yang ikut terlarutkan. Ekstraksi dengan pelarut organik hidrokarbon (butana, etanol, heksana) mendominasi pasar karena biaya modal rendah, namun menyisakan masalah serius berupa residu pelarut toksik, risiko kebakaran/ledakan, dan profil cannabinoid yang terdegradasi karena suhu operasi tinggi (Brunner, 2005; del Valle, 2015).

Supercritical fluid extraction (SFE) dengan karbon dioksida (SC-CO₂) muncul sebagai alternatif superior karena CO₂ bersifat tidak-toksik, tidak-flammable, recyclable, dan memiliki kemampuan selektivitas tinggi terhadap cannabinoid ketika beroperasi pada titik kritisnya ($T_c = 304{,}13$ K, $P_c = 7{,}377$ MPa). Obchoei & Limtrakarn (2024, DOI: 10.1016/j.ijft.2024.100682) menekankan bahwa pada kondisi operasi tipikal (300–350 bar, 40–60 °C), densitas CO₂ berkisar 700–900 kg/m³ sehingga mampu melarutkan cannabinoid non-polar hingga 2–5% berat sebelum kejenuhan. Dari perspektif Teknik Industri, masalah kritis yang selama ini menghambat optimalisasi SFE adalah *ketidakseragaman distribusi fluida* di dalam unggun (bed) bahan padat yang berbentuk silinder: fenomenanya adalah terbentuknya *channeling*, *dead zones*, dan gradien tekanan radial yang menurunkan yield aktual 15–30% di bawah yield teoritis termodinamika (Toledo & del Valle, 2023, DOI: 10.1016/j.supflu.2023.106046).

Urgensi ekonominya juga substansial: dengan harga jual minyak cannabinoid Grade Medical antara USD 2.000–8.000/kg di pasar grosir global, setiap kenaikan yield 1% pada ekstraktor 100 L berarti tambahan revenue USD 5.000–20.000 per batch. Itulah mengapa Obchoei & Limtrakarn (2024) membangun *axisymmetric flow model* menggunakan Computational Fluid Dynamics (CFD) untuk memetakan profil kecepatan, tekanan, dan konsentrasi secara dua-dimensi radial-aksial di dalam unggun kanabis. Sementara itu, Toledo & del Valle (2023) melengkapi perspektif tersebut dengan memodelkan dinamika termal pada tahap *pressurization*, *extraction*, dan *depressurization*—tiga fase yang menyerap hingga 40% dari total energi listrik satu siklus. Integrasi kedua perspektif ini menghasilkan kerangka rekayasa utuh yang menjadi fondasi Modul 1978.

## 2. Landasan Teori & Formulasi Matematis

Model yang dikembangkan Obchoei & Limtrakarn (2024) memperlakukan unggun kanabis sebagai *porous medium* dengan struktur *broken-and-intact cells* (Sovová, 1994). Formulasi matematisnya dibangun di atas tiga pilar persamaan: konservasi massa (kontinuitas), konservasi momentum (Darcy-Forchheimer-Brinkman untuk aliran dalam medium berpori), dan konservasi spesies kimia (mass transfer).

### 2.1 Persamaan Kontinuitas untuk Aliran Aksisimetrik

Dengan asumsi incompressible flow di zona unggun berpori:

$$\frac{1}{r}\frac{\partial}{\partial r}(r \cdot \rho \cdot v_r) + \frac{\partial}{\partial z}(\rho \cdot v_z) = S_m$$

di mana $\rho$ adalah densitas SC-CO₂ (kg/m³), $v_r$ dan $v_z$ adalah komponen kecepatan radial dan aksial (m/s), serta $S_m$ adalah sumber massa akibat transfer cannabinoid (kg/(m³·s)). Untuk sistem 2D aksisimetrik dengan koordinat silinder $(r, z)$, geometri hanya diselesaikan pada setengah penampang (sisi positif-$r$), yang menurunkan biaya komputasi CFD secara signifikan dibanding simulasi 3-D penuh.

### 2.2 Persamaan Momentum (Darcy-Forchheimer)

Untuk fluks dalam unggun berpori kanabis yang disederhanakan:

$$\frac{\rho}{\varepsilon^2}(v_r \frac{\partial v_r}{\partial r} + v_z \frac{\partial v_r}{\partial z}) = -\frac{\partial P}{\partial r} + \mu_{eff}\left[\frac{1}{r}\frac{\partial}{\partial r}(r\frac{\partial v_r}{\partial r}) + \frac{\partial^2 v_r}{\partial z^2} - \frac{v_r}{r^2}\right] - \frac{\mu}{K}v_r - \frac{\rho \cdot C_F}{\sqrt{K}}|v|\cdot v_r$$

$$\frac{\rho}{\varepsilon^2}(v_r \frac{\partial v_z}{\partial r} + v_z \frac{\partial v_z}{\partial z}) = -\frac{\partial P}{\partial z} + \mu_{eff}\left[\frac{1}{r}\frac{\partial}{\partial r}(r\frac{\partial v_z}{\partial r}) + \frac{\partial^2 v_z}{\partial z^2}\right] - \frac{\mu}{K}v_z - \frac{\rho \cdot C_F}{\sqrt{K}}|v|\cdot v_z + \rho g$$

di mana $\varepsilon$ adalah porositas unggun (0,35–0,55 untuk cannabis ground), $K$ adalah permeabilitas intrinsik (m²), $C_F$ adalah koefisien inertia Forchheimer, $\mu_{eff}$ adalah viskositas efektif, dan $\mu$ viskositas dinamik CO₂. Suku gravitasi $g$ relevan pada ekstraktor vertikal dengan laju alir rendah.

### 2.3 Model Perpindahan Massa Sovová (Broken + Intact Cells)

Model Sovová membagi minyak kanabis menjadi dua fraksi: $x_k$ (mudah diakses, broken cells) dan $x_i$ (sulit diakses, intact cells):

$$\frac{\partial C}{\partial t} + \frac{v_z}{\varepsilon}\frac{\partial C}{\partial z} = \frac{k_f a_p}{\varepsilon}(C^* - C)$$

untuk fase broken, dan

$$- \frac{\partial x_i}{\partial t} = k_s a_p (x_i - x^*)$$

untuk fase intact. Laju transfer massa fluida ke fase terlarut mengikuti:

$$j = k_f \cdot a_p \cdot (C^* - C) = k_s \cdot a_p \cdot (x - x^*)$$

di mana $C^*$ adalah konsentrasi kesetimbangan dari kurva kelarutan, $k_f$ koefisien transfer fluida (m/s), $k_s$ koefisien transfer solid (m/s), dan $a_p$ luas permukaan spesifik partikel (m²/m³). Kurva kelarutan cannabinoid dalam SC-CO₂ mengikuti pendekatan Chrastil:

$$C^* = \rho^{n} \cdot \exp\left(\frac{A}{T} + B\right)$$

dengan parameter empiris $A, B, n$ yang ditentukan secara eksperimental.

### 2.4 Model Termal (Toledo & del Valle, 2023)

Toledo & del Valle (2023, DOI: 10.1016/j.supflu.2023.106046) mengembangkan persamaan energi coupled dengan persamaan keadaan CO₂:

$$\rho c_p \frac{\partial T}{\partial t} + \rho c_p v_z \frac{\partial T}{\partial z} = k_{eff} \left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial T}{\partial r}\right) + \frac{\partial^2 T}{\partial z^2}\right] - \rho \Delta H_{ext} \frac{\partial C}{\partial t}$$

di mana $k_{eff}$ adalah konduktivitas efektif unggun, $c_p$ kapasitas panas spesifik, dan $\Delta H_{ext}$ entalpi pelarutan cannabinoid (sekitar −20 sampai −50 kJ/kg). Persamaan keadaan yang digunakan adalah *Span-Wagner* atau *Peng-Robinson* untuk menghitung $\rho$ dan $\mu$ yang sangat sensitif terhadap $P$ dan $T$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri mengikuti SOP enam-tahap yang dihasilkan dari sintesis kedua paper:

**Tahap 1 — Preparasi Biomassa.** Bunga kanabis dikeringkan hingga kadar air <10% berat, digiling hingga ukuran partikel 1–3 mm, lalu dikemas dalam *extraction vessel* (EV). Tutup EV dipasang dengan seal O-ring food-grade (PTFE) untuk menahan hingga 700 bar.

**Tahap 2 — Pressurization (Toledo & del Valle, 2023).** CO₂ dipompa dari reservoir cair (60 bar, 5 °C) menggunakan *diaphragm compressor* atau *piston pump* hingga set-point 250–350 bar. Pemanasan dilakukan *simultaneously* oleh *heat exchanger* (HE) electrical 6–18 kW untuk membawa fluida ke 40–60 °C. Laju ramp-up direkomendasikan 2–5 bar/s untuk menghindari thermal shock pada dinding EV.

**Tahap 3 — Static Soaking (Opsional).** Periode diam 10–30 menit memungkinkan kontak awal CO₂ dengan matrik padat dan menstabilkan profil termal aksisimetrik sebelum aliran kontinu dimulai.

**Tahap 4 — Dynamic Extraction.** CO₂ dipompakan dengan laju 1–5 kg/jam (atau setara 0,3–1,5 kg CO₂/kg biomassa/jam). Konsentrasi cannabinoid dalam fluida keluar dimonitor *online* menggunakan UV-Vis flow cell atau near-infrared spectroscopy (NIR). Tahap ini berakhir ketika konsentrasi outflow turun di bawah 1% dari puncak (cut-off criterion).

**Tahap 5 — Separation (Depressurization).** Fluida superkritik dilewatkan ke *separation vessel* (SV) pada 50–80 bar, 25–35 °C, di mana CO₂ kehilangan daya solvating dan cannabinoid mengendap. CO₂ kemudian dikondensasikan dan di-recycle.

**Tahap 6 — Cleaning & Validation.** EV dinitrogen-flushed untuk menghilangkan residu, kemudian dilakukan *clean-in-place* (CIP) menggunakan etanol 70% jika diperlukan. Seluruh proses divalidasi terhadap standar GMP (Good Manufacturing Practice) untuk produk farmasi.

**Diagram Alir:** CO₂ tank → Compressor → HE (heater) → EV (top-down) → Backpressure regulator → SV₁ (high-pressure) → SV₂ (low-pressure) → CO₂ recycle → kondensor → tank.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Ekstraktor silinder EV diameter $D = 150$ mm, tinggi unggun $H = 350$ mm, massa kanabis $m_s = 3{,}5$ kg (kadar minyak awal $x_0 = 0{,}18$ kg/kg atau 18% berat). Set-point operasi $P = 300$ bar, $T = 50$ °C, laju alir CO₂ $\dot{m} = 2{,}0$ kg/jam.

### Langkah 1 — Densitas dan Viskositas SC-CO₂

Menggunakan persamaan Span-Wagner atau interpolasi NIST, pada 300 bar dan 50 °C:

$$\rho_{CO_2} \approx 830 \text{ kg/m}^3, \quad \mu_{CO_2} \approx 8{,}2 \times 10^{-5} \text{ Pa·s}$$

### Langkah 2 — Porositas dan Permeabilitas Unggun

Asumsi partikel diameter efektif $d_p = 2$ mm, porositas:

$$\varepsilon = 1 - \frac{\rho_b}{\rho_p} = 1 - \frac{125}{370} = 0{,}45$$

Permeabilitas intrinsik (korelasi Ergun):

$$K = \frac{d_p^2 \varepsilon^3}{180(1-\varepsilon)^2} = \frac{(2 \times 10^{-3})^2 (0{,}45)^3}{180(0{,}55)^2} = 1{,}42 \times 10^{-8} \text{ m}^2$$

### Langkah 3 — Kecepatan Superfisial

Laju volumetrik CO₂:

$$\dot{V} = \frac{\dot{m}}{\rho} = \frac{2{,}0}{830} = 2{,}41 \times 10^{-3} \text{ m}^3/\text{s}$$

Luas penampang EV:

$$A = \frac{\pi D^2}{4} = \frac{\pi (0{,}15)^2}{4} = 1{,}767 \times 10^{-2} \text{ m}^2$$

Kecepatan superfisial (Darcy):

$$v_s = \frac{\dot{V}}{A} = \frac{2{,}41 \times 10^{-3}}{1{,}767 \times 10^{-2}} = 0{,}136 \