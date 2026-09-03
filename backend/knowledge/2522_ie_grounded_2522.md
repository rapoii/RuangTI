# 2522 — Pemodelan Aliran Aksisimetrik pada Ekstraksi Minyak Cannabis Menggunakan Fluida Superkritikal CO₂: Formulasi, Optimasi, dan Rekayasa Proses

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botanol dan fitokimia mengalami transformasi paradigma pada dekade terakhir, di mana ekstraksi dengan fluida superkritikal (Supercritical Fluid Extraction, SFE) menggunakan CO₂ telah menggantikan pelarut organik konvensional seperti heksana, etanol, dan klorofom yang memiliki toksisitas tinggi dan meninggalkan residu berbahaya pada produk akhir (Obchoei & Limtrakarn, 2024). Dalam konteks spesifik industri cannabis farmasi dan nutraceutical, minyak cannabis kaya akan cannabinoid aktif — utamanya tetrahydrocannabinol (THC), cannabidiol (CBD), cannabinol (CBN), dan terpenoid aromatik — yang memiliki nilai tambah ekonomi signifikan, mencapai USD 0,5–3,0 per miligram untuk cannabinoid dengan kemurnian farmasi (medical-grade). Permintaan global akan produk ekstrak cannabis yang konsisten kualitasnya mensyaratkan pemahaman presisi terhadap dinamika perpindahan massa di dalam reaktor ekstraksi bertekanan tinggi (15–35 MPa), yang beroperasi pada kondisi mendekati titik kritis CO₂ (T_c = 304,25 K, P_c = 7,38 MPa).

Obchoei dan Limtrakarn (2024) dalam *International Journal of Thermofluids* menyoroti bahwa pemodelan aliran aksisimetrik (axisymmetric flow) merupakan representasi fisika paling representatif untuk kolom ekstraksi SFE berbentuk tabung silinder, karena distribusi fluida superkritikal yang masuk dari ujung atas (inlet) dan menembus bed biomassa cannabis yang terkemas (packed bed) memiliki simetri rotasional terhadap sumbu aksial. Ketiadaan asumsi aksisimetrik pada model konvensional satu-dimensi (1D) sering kali menghasilkan deviasi prediksi yield hingga 25–40% terhadap data eksperimental aktual, terutama pada rasio aspek (L/D) reaktor yang besar (>5). Studi Toledo dan del Valle (2023) dalam *The Journal of Supercritical Fluids* melengkapi pemahaman ini dengan menunjukkan bahwa perpindahan panas selama tahap *pressurization*, *extraction*, dan *depressurization* memiliki kontribusi signifikan terhadap selektivitas dan recovery cannabinoid, sehingga model termal perlu diintegrasikan secara koupled dengan model hidrodinamika. Urgensi industri pengembangan model ini diperkuat oleh tren *Good Manufacturing Practice* (GMP) untuk produksi cannabinoid kelas farmasi, di mana validasi proses (*process validation*) memerlukan prediksi kuantitatif berbasis Computational Fluid Dynamics (CFD) yang tersertifikasi.

Dalam skala manufaktur industri, kapasitas ekstraktor komersial berkisar antara 100 L hingga 2.000 L (misalnyaExtractor Apeks Supercritical, Vitalis), dengan throughput harian 50–500 kg biomassa cannabis per siklus. Biaya kapital investasi awal (CAPEX) untuk fasilitas SFE skala komersial mencapai USD 1,5–5,0 juta, sehingga efisiensi yield dan cycle time optimization memiliki implikasi langsung pada payback period dan unit cost produksi. Model aksisimetrik yang akurat memungkinkan *techno-economic analysis* (TEA) presisi dan mendukung keputusan rekayasa seperti pemilihan diameter reaktor, distribusi partikel biomassa, dan laju alir CO₂ optimal.

## 2. Landasan Teori & Formulasi Matematis

Pemodelan matematis SFE-CO₂ pada kolom aksisimetrik memerlukan penyelesaian simultan empat persamaan konservasi fundamental, yang diformulasikan dalam koordinat silinder (r, θ, z) dengan asumsi simetri aksial sehingga seluruh variabel dependen independen terhadap θ (Obchoei & Limtrakarn, 2024).

### 2.1 Persamaan Kontinuitas (Konservasi Massa)

Untuk fluida superkritikal CO₂ yang mengalir menembus packed bed biomassa, dengan porositas ε (fraksi volume kosong), persamaan kontinuitas dalam koordinat aksisimetrik adalah:

$$\frac{\partial (\varepsilon \rho_f)}{\partial t} + \frac{1}{r}\frac{\partial (r \varepsilon \rho_f u_r)}{\partial r} + \frac{\partial (\varepsilon \rho_f u_z)}{\partial z} = 0$$

di mana $\rho_f$ adalah densitas fluida superkritikal CO₂ (kg/m³), $u_r$ dan $u_z$ adalah komponen kecepatan radial dan aksial (m/s), $t$ adalah waktu (s), $r$ adalah koordinat radial, dan $z$ adalah koordinat aksial.

### 2.2 Persamaan Momentum (Navier-Stokes Termodifikasi Darcy-Brinkman)

Pada packed bed biomassa, interaksi fluida-partikel memerlukan modifikasi persamaan momentum melalui pendekatan Darcy-Brinkman untuk mengakomodasi efek viskositas efektif $\mu_{eff}$ dan permeabilitas intrinsik bed $K_p$:

$$\varepsilon \rho_f \left( \frac{\partial u_z}{\partial t} + u_r \frac{\partial u_z}{\partial r} + u_z \frac{\partial u_z}{\partial z} \right) = -\varepsilon \frac{\partial P}{\partial z} + \mu_{eff} \left[ \frac{1}{r}\frac{\partial}{\partial r}\left( r \frac{\partial u_z}{\partial r} \right) + \frac{\partial^2 u_z}{\partial z^2} \right] - \frac{\mu_f}{K_p} \varepsilon u_z$$

di mana $P$ adalah tekanan operasional (Pa), $\mu_f$ adalah viskositas dinamik fluida superkritikal CO₂ (Pa·s), dan permeabilitas dievaluasi melalui korelasi Ergun:

$$K_p = \frac{d_p^2 \epsilon^3}{150 (1-\epsilon)^2}$$

dengan $d_p$ sebagai diameter ekuivalen partikel biomassa (m). Korelasi Ergun untuk gradien tekanan total:

$$\frac{\Delta P}{L} = \frac{150 (1-\epsilon)^2}{d_p^2 \epsilon^3} \mu_f v_s + \frac{1.75 (1-\epsilon)}{d_p \epsilon^3} \rho_f v_s^2$$

di mana $v_s$ adalah kecepatan superfisial fluida.

### 2.3 Persamaan Perpindahan Massa (Fick's Law untuk Solute dalam SC-CO₂)

Konsentrasi solute (cannabinoid) dalam fase fluida superkritikal, $C_f$ (kg/m³), dan fase padatan biomassa, $C_s$ (kg/kg biomassa), mengikuti hukum keseimbangan termodinamika dan difusi Fickian:

$$\varepsilon \frac{\partial C_f}{\partial t} + u_z \frac{\partial C_f}{\partial z} = D_{eff,f} \left[ \frac{1}{r}\frac{\partial}{\partial r}\left( r \frac{\partial C_f}{\partial r} \right) + \frac{\partial^2 C_f}{\partial z^2} \right] - J_s$$

$$\frac{\partial C_s}{\partial t} = -J_s \cdot \frac{\rho_b}{\rho_s}$$

di mana $D_{eff,f}$ adalah koefisien difusi efektif solute dalam SC-CO₂ (orde $10^{-8}$–$10^{-9}$ m²/s), $\rho_b$ adalah bulk density bed biomassa, dan $J_s$ adalah fluks perpindahan massa antar-fase yang dimodelkan melalui pendekatan *linear driving force* (LDF):

$$J_s = k_f a_p (C_f^* - C_f)$$

dengan $k_f$ sebagai koefisien transfer massa fluida (m/s), $a_p$ sebagai luas spesifik partikel (m²/m³), dan $C_f^*$ sebagai konsentrasi kesetimbangan yang ditentukan oleh persamaan keadaan dan model kelarutan.

### 2.4 Model Kelarutan (Chrastil Equation)

Kelarutan cannabinoid dalam SC-CO₂ sebagai fungsi tekanan dan temperatur dimodelkan melalui persamaan semi-empiris Chrastil (1982):

$$\ln(C_f^*) = k_0 \ln(\rho_f) + \frac{a_0}{T} + b_0$$

di mana $k_0$ adalah parameter stoikiometri asosiasi (orde 1,5–3,0 untuk sistem cannabinoid-CO₂), $a_0$ merepresentasikan entalpi asosiasi, $b_0$ adalah konstanta empiris, dan $\rho_f$ dievaluasi dari persamaan keadaan.

### 2.5 Persamaan Keadaan (Peng-Robinson EOS)

Densitas fluida superkritikal CO₂ pada berbagai kondisi P-T dihitung menggunakan persamaan keadaan Peng-Robinson:

$$P = \frac{RT}{V_m - b_{PR}} - \frac{a_{PR}(T)}{V_m(V_m + b_{PR}) + b_{PR}(V_m - b_{PR})}$$

dengan parameter:

$$a_{PR}(T) = 0{,}45724 \frac{R^2 T_c^2}{P_c} \left[ 1 + \kappa \left( 1 - \sqrt{T/T_c} \right) \right]^2$$

$$b_{PR} = 0{,}07780 \frac{R T_c}{P_c}, \quad \kappa = 0{,}37464 + 1{,}54226 \omega - 0{,}26992 \omega^2$$

di mana $\omega$ adalah faktor aksentrisitas (untuk CO₂: $\omega$ = 0,225).

### 2.6 Persamaan Energi (Heat Transfer Coupled Model)

Merujuk pada formulasi Toledo dan del Valle (2023), persamaan energi untuk fluida dan padatan diselesaikan secara coupled:

$$\varepsilon \rho_f c_{p,f} \left( \frac{\partial T_f}{\partial t} + u_z \frac{\partial T_f}{\partial z} \right) = k_{eff,f} \nabla^2 T_f + h_v (T_s - T_f)$$

$$(1-\varepsilon) \rho_s c_{p,s} \frac{\partial T_s}{\partial t} = k_{eff,s} \nabla^2 T_s + h_v (T_f - T_s) + \dot{q}_{rxn}$$

di mana $c_{p,f}$ dan $c_{p,s}$ adalah kapasitas panas spesifik fluida dan padatan, $h_v$ adalah koefisien transfer volumetrik (W/m³·K), dan $\dot{q}_{rxn}$ adalah sumber panas dari proses desorpsi solute.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi proses SFE-CO₂ untuk ekstraksi minyak cannabis mengikuti SOP terstruktur berbasis farmakope (misalnya USP <467>, EU GMP Annex 6) yang dapat direpresentasikan sebagai berikut:

### Tahap 1: Preparasi Biomassa
1. **Sortasi & grinding:** Material cannabis kering (*cured*) dengan moisture content <12% di-*mill* hingga ukuran partikel 0,5–1,5 mm menggunakan cryogenic grinder untuk mencegah degradasi termal cannabinoid.
2. **Sieving:** Klasifikasi mesh ASTM standar untuk memastikan distribusi ukuran partikel seragam (target $d_p$ = 1,0 mm dengan deviasi standar <15%).
3. **Packing density verification:** Pengukuran $\rho_b$ aktual (target 350–450 kg/m³ untuk cannabis) untuk input parameter model.

### Tahap 2: Pressurization & System Equilibration
1. **Pre-cooling:** CO₂ dicairkan pada T = -20°C hingga -30°C dan tekanan 5,5–6,0 MPa menggunakan *heat exchanger* primer.
2. **Pressurization:** Pemompaan (diaphragm pump atau piston pump) hingga mencapai set-point operasional P = 20–30 MPa dengan rate ramp 2,0 MPa/menit untuk menghindari kompresi adiabatik berlebih.
3. **Thermal equilibration:** Penstabilan temperatur (T = 40–60°C) melalui jaket termal hingga $\Delta T < 0,5°C$ pada thermocouple inlet-outlet (Toledo & del Valle, 2023).

### Tahap 3: Ekstraksi Dinamis (Dynamic Extraction Phase)
1. **CO₂ flow initiation:** Pembukaan *back pressure regulator* (BPR) untuk memulai aliran dengan debit Q_CO₂ = 1,5–4,0 L/min (residence time bed $\tau$ = 15–45 menit).
2. **Sampling berkala:** Pengambilan sampel ekstrak setiap 15 menit untuk analisis HPLC cannabinoid quantification dan gravimetric yield determination.
3. **Monitoring parameter:** Real-time logging P, T, $\dot{V}_{CO_2}$, dan yield menggunakan SCADA system dengan akuisisi data 1 Hz.

### Tahap 4: Depressurization & Recovery
1. **Controlled depressurization:** Penurunan tekanan secara gradual (rate 1,0–1,5 MPa/menit) untuk mencegah pembentukan aerosol dan mempertahankan integritas cannabinoid.
2. **Separator collection:** Pemisahan padat-cair pada separator (P_sep = 5,0–6,0 MPa, T_sep = 25–40°C) dengan multi-stage separator untuk fraksinasi cannabinoid.
3. **CO₂ recirculation:** Recycle dan liquefaction CO₂ untuk efisiensi ekonomi (recovery rate >95% pada sistem modern).

### Tahap 5: Post-process & Quality Control
1. **Winterisasi:** Removal wax dengan etanol pada T = -20°C selama 24 jam.
2. **Decarboxylation opsional:** Aktivasi