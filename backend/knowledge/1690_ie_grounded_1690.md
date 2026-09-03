# 1690 — Pemodelan Aliran Aksisimetrik pada Ekstraksi Minyak Kanabis dengan Proses Superkritis CO₂: Integrasi Termofluida dan Perpindahan Panas

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO2 process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Ekstraksi minyak kanabis (*Cannabis sativa* L.) menggunakan fluida superkritis CO₂ (scCO₂) telah menjadi salah satu pilar utama dalam industri fitofarmaka, nutrasetikal, dan kanabinoid terapeutik global. Menurut Obchoei & Limtrakarn (2024) dalam *International Journal of Thermofluids*, permintaan global akan ekstrak kanabis kaya kanabidiol (CBD) dan tetrahidrokanabinol (THC) tumbuh pada compound annual growth rate (CAGR) lebih dari 18% sepanjang 2020–2024, didorong oleh legalisasi bertahap di berbagai yurisdiksi dan adopsi farmasi untuk terapi epilepsi, multiple sclerosis, dan nyeri kronis. Volume pasar ekstrak kanabis global diproyeksikan menembus USD 23,7 miliar pada 2030, menjadikan optimasi proses scCO₂ sebagai agenda strategis lintas sektor manufaktur (DOI: [10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)).

Urgensi teknisnya terletak pada kenyataan bahwa proses scCO₂ melibatkan operasi pada tekanan 200–450 bar dan suhu 308–343 K, di mana perilaku CO₂ mendekati titik kritis (T_c = 304,13 K; P_c = 73,8 bar) dan sifat termofisikanya (densitas, viskositas, difusivitas) berubah drak terhadap perubahan kecil pada variabel proses. Obchoei & Limtrakarn (2024) menyoroti bahwa mayoritas desain ekstraktor industri masih mengandalkan asumsi aliran seragam satu-dimensi (1D plug-flow) dan kesetimbangan termal quasi-steady, padahal geometri vessel yang sebenarnya berbentuk silinder dengan rasio aspek tinggi terhadap diameter melebihi 5:1, sehingga profil kecepatan radial dan aksial secara simultan menentukan yield dan kualitas produk. Lebih lanjut, Toledo & del Valle (2023) menunjukkan bahwa efek transien perpindahan panas pada tahap *pressurization*, *extraction*, dan *depressurization* dapat menyebabkan deviasi suhu lokal hingga 15 K di zona tengah packed bed, yang secara langsung menurunkan selektivitas solut (DOI: [10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)). 

Konteks ekonominya juga krusial: biaya modal (CAPEX) ekstraktor scCO₂ industri berkapasitas 100–1.000 L berkisar USD 250.000–2.000.000, sedangkan biaya operasional (OPEX) didominasi oleh konsumsi energi kompresi (35–45%), listrik heater/cooler (20–25%), dan hilangnya CO₂ akibat *depressurization* (10–15%). Oleh karena itu, model aliran aksisimetrik (2D axisymmetric) bukan sekadar perangkat akademis, melainkan instrumen rekayasa untuk menurunkan *specific energy consumption* (SEC) per kilogram ekstrak hingga 25–30%, mempercepat *time-to-yield* optimum, dan memperpanjang usia pakai katup ekspansi. Modul 1690 ini membahas integrasi model *axisymmetric flow* dengan dinamika perpindahan panas transien sebagaimana diusulkan Obchoei & Limtrakarn (2024) dan divalidasi secara independen oleh Toledo & del Valle (2023).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Geometri dan Asumsi Aksisimetrik

Vessel ekstraksi dimodelkan sebagai silinder vertikal dengan jari-jari internal $R$ dan tinggi $L$. Sistem koordinat silinder $(r, z)$ digunakan dengan sumbu $z$ sebagai aksis vessel dan $r$ sebagai koordinat radial. Invariansi sudut θ karena simetri rotational, sehingga hanya dua dimensi spasial yang diselesaikan. Bed terpadatkan (*packed bed*) dari partikel kanabis kering memiliki porositas $\varepsilon$ dan permeabilitas intrinsik $K$, sementara fase fluida superkritis CO₂ diinteraksikan dengan padatan melalui gaya gesekan (viscous drag) dan perpindahan massa interfacial.

### 2.2 Persamaan Kontinuitas dan Momentum (Darcy-Forchheimer-Brinkman)

Untuk fluida superkritis yang mengalir melalui media berpori dengan efek inersia non-negligible, Obchoei & Limtrakarn (2024) menggunakan formulasi Darcy-Brinkman-Forchheimer:

$$\frac{\partial}{\partial t}\left(\varepsilon \rho\right) + \nabla \cdot \left(\varepsilon \rho \mathbf{u}\right) = 0 \quad (1)$$

$$\frac{\rho}{\varepsilon}\left(\frac{\partial \mathbf{u}}{\partial t} + \mathbf{u} \cdot \nabla \mathbf{u}\right) = -\nabla p + \mu_{eff}\nabla^2 \mathbf{u} - \underbrace{\frac{\mu}{K}\mathbf{u}}_{\text{Darcy}} - \underbrace{\frac{\rho\, c_F\, |\mathbf{u}|}{\sqrt{K}}\mathbf{u}}_{\text{Forchheimer}} + \rho \mathbf{g} \quad (2)$$

dengan $\rho$ adalah densitas scCO₂ (kg/m³), $\mathbf{u}$ kecepatan superficial (m/s), $p$ tekanan (Pa), $\mu$ viskositas dinamis (Pa·s), $\mu_{eff}$ viskositas efektif (Pa·s), $c_F$ konstanta inertia Forchheimer (≈ 0,55 untuk partikel tak teratur), $K$ permeabilitas intrinsik (m²), dan $\mathbf{g}$ percepatan gravitasi.

Untuk komponen aksial $u_z$ dan radial $u_r$ dalam geometri silinder, persamaan (2) diekspansi menjadi:

$$\frac{\rho}{\varepsilon}\left(\frac{\partial u_z}{\partial t} + u_r \frac{\partial u_z}{\partial r} + u_z \frac{\partial u_z}{\partial z}\right) = -\frac{\partial p}{\partial z} + \mu_{eff}\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_z}{\partial r}\right) + \frac{\partial^2 u_z}{\partial z^2}\right] - \frac{\mu}{K}u_z - \frac{\rho\, c_F}{\sqrt{K}}u_z|\mathbf{u}| - \rho g \quad (3)$$

### 2.3 Persamaan Energi dengan Sumber dan Sink Panas

Toledo & del Valle (2023) mengusulkan persamaan energi dua-fasa (*two-equation model*):

$$\varepsilon \rho c_p \frac{\partial T_f}{\partial t} + \varepsilon \rho c_p \mathbf{u} \cdot \nabla T_f = \varepsilon k_{eff,f}\nabla^2 T_f - h_v\, a_v (T_f - T_s) + \dot{Q}_{diss} \quad (4)$$

$$(1-\varepsilon)\rho_s c_{p,s}\frac{\partial T_s}{\partial z} = (1-\varepsilon)k_{s}\nabla^2 T_s + h_v\, a_v (T_f - T_s) \quad (5)$$

dengan $T_f$ suhu fluida, $T_s$ suhu padatan, $c_p$ kapasitas panas, $k_{eff,f}$ konduktivitas efektif, $h_v$ koefisien perpindahan panas volumetric (W/m³·K), $a_v$ luas spesifik interfacial (m²/m³), dan $\dot{Q}_{diss}$ disipasi viskos. Koefisien $h_v$ dikorelasikan dengan bilangan Nusselt lokal:

$$Nu_{loc} = \frac{h_v d_p^2}{k_f (1-\varepsilon)^{1/3}} = 2 + 1{,}8 Pr^{1/3} Re_p^{0,5} \quad (6)$$

dengan $d_p$ diameter partikel, $Pr$ bilangan Prandtl, dan $Re_p = \rho |\mathbf{u}| d_p / (\mu \varepsilon)$ bilangan Reynolds partikel.

### 2.4 Perpindahan Massa dan Kinetika Ekstraksi

Mekanisme *broken-and-intact cell* model dari Martínez et al. diadopsi untuk menangkap fenomena dua-stadium (perluasan permukaan dan difusi internal):

$$\frac{\partial q}{\partial t} = k_f a_p (q^* - q) \quad (7)$$

dengan $q$ konsentrasi solut dalam fase fluida (kg/m³), $q^*$ konsentrasi kesetimbangan, dan $k_f$ koefisien transfer massa. Korelasi Sherwood:

$$Sh = \frac{k_f d_p}{D_m} = 2{,}0 + 1{,}1 Re_p^{0,6} Sc^{1/3} \quad (8)$$

di mana $Sc = \mu / (\rho D_m)$ dan $D_m$ koefisien difusivitas biner CO₂–kanabinoid.

### 2.5 Kondisi Batas

Pada dinding vessel: $\mathbf{u} = 0$, $\partial T / \partial r = 0$ (asumsi adiabatic atau *heat flux* tertentu). Pada inlet: profil kecepatan uniform dan suhu $T_{in}$. Pada outlet: $\partial p / \partial z = 0$ (kondisi *outflow*).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri mengikuti SOP berikut, yang selaras dengan pedoman ASME STP-NU-019 dan GxP farmasi:

1. **Pra-proses material.** Bongol kanabis dikeringkan hingga kadar air < 10%, digiling dengan *hammer mill* untuk mencapai ukuran partikel 0,5–1,5 mm, dan disimpan dalam *nitrogen-purged* container.
2. *Pressurization.* CO₂ dipompa dari reservoir cair (T ≈ 253 K) melalui booster hingga tekanan kerja 300 bar dengan ramp rate 5 bar/menit untuk menghindari *shock termal*.
3. **Pemanasan awal (*pre-heating*).** CO₂ dipanaskan melalui *heat exchanger* hingga suhu target 323 K sebelum masuk vessel.
4. **Ekstraksi (*dynamic extraction*).** Aliran scCO₂ dengan laju 1–3 kg/jam dipertahankan selama 60–240 menit dengan kontrol PID pada tekanan dan suhu.
5. **Pemisahan (*separation train*).** Tiga vessel separator pada tekanan bertingkat (100, 50, 25 bar) memisahkan fraksi target.
6. *Depressurization.* Ventilasi bertahap dengan recovery CO₂ hingga 92–95%.
7. **Pembersihan dan validasi.** *Clean-in-place* (CIP) dengan etanol 70% dan validasi *residual solvent* < 5 ppm.

Diagram alir logika proses mengikuti struktur HAZOP node analisis, dengan parameter kritis (CPP) berupa tekanan, suhu, laju alir, dan rasio solvent-to-feed (S/F).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Input Parameter

Ambil ekstraktor silinder dengan $R = 0{,}10$ m, $L = 0{,}80$ m. Parameter bed: $\varepsilon = 0{,}40$, $K = 1{,}5 \times 10^{-9}$ m², $d_p = 1{,}0$ mm, $\rho_s = 1{,}180$ kg/m³. Kondisi operasi: $P = 300$ bar, $T = 323$ K. Dari NIST REFPROP: $\rho_{CO_2} = 838{,}2$ kg/m³, $\mu_{CO_2} = 7{,}78 \times 10^{-5}$ Pa·s, $k_f = 0{,}082$ W/m·K, $c_p = 1{,}543$ kJ/kg·K.

Laju alir massa $\dot{m} = 2{,}0$ kg/jam $= 5{,}556 \times 10^{-4}$ kg/s. Kecepatan superficial:

$$u_z^{sup} = \frac{\dot{m}}{\varepsilon \rho \pi R^2} = \frac{5{,}556 \times 10^{-4}}{0{,}40 \times 838{,}2 \times \pi \times (0{,}10)^2} = 5{,}27 \times 10^{-5} \text{ m/s} \quad (9)$$

### 4.2 Reynold Partikel dan Penentuan Regime Aliran

$$Re_p = \frac{\rho\, u\, d_p}{\mu (1-\varepsilon)} = \frac{838{,}2 \times 5{,}27\times 10^{-5} \times 1{,}0\times 10^{-3}}{7{,}78 \times 10^{-5} \times 0{,}60} = 0{,}95 \quad (10)$$

Karena $Re_p < 10$, regime Darcy mendominasi, namun efek Forchheimer tetap signifikan karena $\