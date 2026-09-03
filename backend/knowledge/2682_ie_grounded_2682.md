# 2682 — Pemodelan Aliran Axisymmetric pada Proses Ekstraksi Minyak Kanabis Menggunakan Fluida Superkritis CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO2 process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botanol dan fitofarmaka global menghadapi tantangan rekayasa yang semakin kompleks seiring meningkatnya permintaan akan cannabinoid konsentrat untuk aplikasi farmasi, nutraceutical, dan kosmetik. Pasar legal kanabis global diproyeksikan melampaui USD 60 miliar pada 2028, dengan ekstraksi minyak kaya cannabidiol (CBD) dan tetrahidrokanabinol (THC) sebagai unit operasi *value-added* paling strategis dalam rantai pasok. Dalam konteks ini, **Supercritical Fluid Extraction with CO₂ (SFE-CO₂)** telah menjadi teknologi pilihan karena sifatnya yang *Generally Recognized as Safe* (GRAS), tidak meninggalkan residu pelarut toksik, dan mampu melakukan *selective fractionation* terhadap cannabinoid melalui tuning tekanan dan suhu.

Obchoei dan Limtrakarn (2024, DOI: [10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)) mempublikasikan model aliran **axisymmetric** yang secara eksplisit memetakan dinamika fluida superkritis dalam vessel ekstraksi berbentuk silinder, merepresentasikan geometri nyata packed-bed biomassa kanabis. Pendekatan ini mengatasi keterbatasan model 1-D *plug flow* klasik yang忽略了 gradien radial dalam distribusi massa dan termal. Studi pendahung oleh Toledo dan del Valle (2023, DOI: [10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)) memberikan landasan penting tentang **model perpindahan panas tiga tahap** (pressurization, extraction, depressurization) yang menunjukkan bahwa gradien termal transien dapat menurunkan yield hingga 30% jika tidak dikendalikan.

Urgensi operasional dari pemodelan ini bersifat nyata: pada fasilitas produksi kelas industri dengan kapasitas 100–1000 L extraction vessel, investasi modal mencapai USD 500.000–2.000.000 per unit. Kegagalan dalam prediksi profil tekanan, suhu, dan konsentrasi di dalam vessel dapat menyebabkan *bottleneck* produksi, pemborosan CO₂ (yang harus direcycle pada tekanan tinggi), serta inkonsistensi kualitas cannabinoid extract. Oleh karena itu, integrasi computational fluid dynamics (CFD) axisymmetric dengan persamaan konservasi momentum dan massa menjadi kebutuhan strategis bagi insinyur proses dalam desain, scale-up, dan optimalisasi continuous extraction生产线.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Persamaan Konservasi dalam Koordinat Axisymmetric

Model Obchoei & Limtrakarn (2024) menggunakan koordinat silindris $(r, z, \theta)$ dengan asumsi **symmetry rotasional**, sehingga semua variabel tidak bergantung pada sudut $\theta$ dan domain komputasi direduksi menjadi penampang 2-D $(r, z)$. Persamaan kontinuitas untuk aliran fluida compressible:

$$\frac{\partial \rho}{\partial t} + \frac{1}{r}\frac{\partial(r \rho v_r)}{\partial r} + \frac{\partial(\rho v_z)}{\partial z} = 0 \tag{1}$$

dengan $\rho$ densitas CO₂, $v_r$ dan $v_z$ komponen kecepatan radial dan aksial.

Persamaan momentum dalam arah aksial dan radial diselesaikan menggunakan formulasi **Navier-Stokes** dengan koreksi viskositas untuk fluida superkritis, atau menggunakan **Darcy-Forchheimer** ketika biomassa kanabis dimodelkan sebagai *porous medium*:

$$\frac{\partial(\rho v_z)}{\partial t} + \nabla \cdot (\rho \vec{v} v_z) = -\frac{\partial p}{\partial z} + \mu_{eff} \nabla^2 v_z - \frac{\mu}{\kappa} v_z - \beta \rho |v| v_z + \rho g_z \tag{2}$$

di mana $\kappa$ adalah permeabilitas biomassa, $\beta$ koefisien inersia Forchheimer, dan $\mu_{eff}$ viskositas efektif yang bergantung pada tekanan dan suhu menurut korelasi superkritis.

### 2.2. Persamaan Energi dengan Source Term

Berdasarkan kerangka Toledo & del Valle (2023, DOI: [10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)), persamaan energi untuk fluida + solid matrix:

$$\rho C_p \frac{\partial T}{\partial t} + \rho C_p \vec{v} \cdot \nabla T = \nabla \cdot (k_{eff} \nabla T) + \dot{q}_{gen} \tag{3}$$

dengan $\dot{q}_{gen}$ mencakup panas kompresi CO₂ (penting pada tahap *pressurization*):

$$\dot{q}_{gen} = \beta_T \frac{Dp}{Dt} \tag{4}$$

di mana $\beta_T$ adalah koefisien ekspansi termal CO₂.

### 2.3. Persamaan Perpindahan Massa (Cannabinoid)

Transfer cannabinoid dari matriks padat ke fase superkritis dimodelkan dengan persamaan **Convection-Diffusion** dengan term sumber dari pelarutan:

$$\phi \frac{\partial C_s}{\partial t} + (1-\phi) \rho_s \frac{\partial C_{eq}}{\partial t} = \nabla \cdot (D_{eff} \nabla C) - \vec{v} \cdot \nabla C \tag{5}$$

dengan $\phi$ porositas bed, $C_s$ konsentrasi CO₂, $C_{eq}$ konsentrasi kesetimbangan (ditentukan oleh **solubility model** Chrastil atau del Valle-Aguilera), dan $D_{eff}$ koefisien dispersi aksial-radial.

### 2.4. Equation of State untuk CO₂ Superkritis

Densitas CO₂ dihitung menggunakan persamaan **Span-Wagner** atau **Peng-Robinson**:

$$P = \frac{RT}{V_m - b} - \frac{a(T)}{V_m(V_m + b) + b(V_m - b)} \tag{6}$$

Parameter $a(T)$ mengandung faktor *alpha* yang bergantung pada *acentric factor* CO₂ ($\omega = 0.228$), memastikan akurasi tinggi pada tekanan 80–350 bar dan suhu 308–353 K.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri dari model axisymmetric ini mengikuti SOP terstruktur berbasis simulasi CFD (ANSYS Fluent/COMSOL) yang dikalibrasi dengan data eksperimen.

**Tahap 1 — Karakterisasi Material**: Penentuan porositas bed kanabis ($\phi = 0.40$–$0.55$), permeabilitas ($\kappa = 10^{-9}$ hingga $10^{-7}$ m²), dan kurva solubility cannabinoid dari data eksperimen del Valle et al. yang menunjukkan bahwa kelarutan THC dalam CO₂ superkritis mencapai ~$10$ g/kg pada 300 bar, 333 K.

**Tahap 2 — Diskretisasi Domain**: Geometry 2-D axisymmetric dengan boundary conditions:
- **Inlet (top)**: mass flow rate inlet $\dot{m}_{CO_2} = 5$–$50$ kg/jam, $T_{in} = 313$–$343$ K, $P_{in} = 150$–$350$ bar.
- **Outlet (bottom)**: tekanan outlet dengan koreksi pressure drop Darcy.
- **Wall**: kondisi adiabatik atau *heat flux* terkontrol sesuai jacket pemanas.
- **Axis (r=0)**: symmetry condition $\partial/\partial r = 0$.

**Tahap 3 — Solver Setup**: Skema SIMPLE untuk pressure-velocity coupling, second-order upwind untuk konveksi, dan under-relaxation factors 0.3 untuk tekanan, 0.7 untuk momentum. Time step adaptif 0.01–1.0 detik untuk simulasi transien (pressurization 0–600 s, extraction steady-state 1800–7200 s, depressurization 300–900 s).

**Tahap 4 — Validasi & Scale-up**: Bandingkan hasil simulasi dengan data pilot plant; tuning parameter $D_{eff}$, $\beta$, dan HTC (heat transfer coefficient) hingga error <5%. Gunakan hasil untuk scale-up ke vessel komersial dengan menjaga similitude **Reynolds** ($Re = \rho v d_p / \mu$) dan **Peclet number** ($Pe = v d_p / D_{ax}$).

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1. Input Parameter Vessel Industri

Ambil kasus nyata: extraction vessel silinder dengan $D_{vessel} = 0.30$ m, $L_{vessel} = 1.20$ m, diisi 8 kg biomassa kanabis (densitas bulk $\rho_b = 320$ kg/m³, $\phi = 0.42$).

- Tekanan operasi: $P = 300$ bar
- Suhu operasi: $T = 333$ K
- Laju alir CO₂: $\dot{m} = 25$ kg/jam
- Konsentrasi solubility THC kesetimbangan: $C^* = 8.5$ g/kg CO₂

### 4.2. Perhitungan Profil Konsentrasi Axisymmetric

Kecepatan superfisial CO₂ dalam packed bed:

$$v_s = \frac{\dot{m}}{\rho_{CO_2} A_c} = \frac{25/3600}{871 \times \pi (0.15)^2} = \frac{6.94 \times 10^{-3}}{61.6} = 1.13 \times 10^{-4} \text{ m/s} \tag{7}$$

Densitas CO₂ pada 300 bar, 333 K dari tabel Span-Wagner: $\rho_{CO_2} = 871$ kg/m³. Luas penampang $A_c = 0.0707$ m².

Kecepatan interstitial (di dalam pori):

$$v_i = \frac{v_s}{\phi} = \frac{1.13 \times 10^{-4}}{0.42} = 2.69 \times 10^{-4} \text{ m/s} \tag{8}$$

**Reynolds number partikel** (diameter partikel kanabis rata-rata $d_p = 1.5$ mm):

$$Re_p = \frac{\rho v_i d_p}{\mu_{CO_2}} = \frac{871 \times 2.69 \times 10^{-4} \times 1.5 \times 10^{-3}}{9.0 \times 10^{-5}} = 3.91 \tag{9}$$

Viskositas CO₂ pada kondisi tersebut $\mu = 9.0 \times 10^{-5}$ Pa·s. Aliran berada dalam rezim *laminar creeping* sesuai model Forchheimer.

**Pressure drop aksial** menggunakan persamaan Ergun:

$$\frac{\Delta P}{L} = \frac{150 \mu v_s (1-\phi)^2}{d_p^2 \phi^3} + \frac{1.75 \rho v_s^2 (1-\phi)}{d_p \phi^3} \tag{10}$$

$$\frac{\Delta P}{L} = \frac{150 (9.0 \times 10^{-5})(1.13 \times 10^{-4})(0.336)}{(2.25 \times 10^{-6})(0.0741)} + \frac{1.75 (871)(1.28 \times 10^{-8})(0.58)}{(1.5 \times 10^{-3})(0.0741)}$$

$$\frac{\Delta P}{L} = 0.026 + 0.0002 \approx 0.026 \text{ bar/m} \tag{11}$$

Untuk vessel 1.20 m: $\Delta P_{total} = 0.031$ bar — sangat rendah, mengkonfirmasi bahwa bottleneck bukan pressure drop mekanis melainkan **mass transfer rate**.

### 4.3. Yield Calculation dan CO₂-to-Solvent Ratio (S/F ratio)

Dalam 1 jam operasi dengan $\dot{m}_{CO_2} = 25$ kg, CO₂ total yang bersirkulasi = 25 kg. Dengan asumsi efisiensi kontak 75%:

$$\text{THC terlarut per jam} = \dot{m}_{CO_2} \times C^* \times \eta_{kontak} = 25 \times 8.5 \times 10^{-3} \times 0.75 = 0.159 \text{ kg/jam} \tag{12}$$

Untuk mencapai recovery 90% dari 8 kg biomassa dengan kandungan THC 12% (THC awal = 0.96 kg):

$$\text{Waktu ekstraksi} = \frac{0.96 \times 0.90}{0.159} = 5.43 \text{ jam} \approx 326 \text{ menit} \tag{13}$$

Total konsumsi CO₂ = $25 \times 5.43 = 135.8$ kg, sehingga **rasio S/F** (solvent-to-feed) = $135.8 / 8 = 16.97$ kg CO₂/kg biomassa. Ini berada dalam rentang industri optimal 15–25.

### 4.4. Interpretasi Manajerial

Hasil simulasi axisymmetric menunjukkan bahwa.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
