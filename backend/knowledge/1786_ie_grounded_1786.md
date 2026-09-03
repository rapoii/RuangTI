# 1786 — Model Aliran Aksisimetrik untuk Ekstraksi Minyak Kanabis dengan Proses Superkritis CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Ekstraksi minyak kanabis (*Cannabis sativa* L.) telah menjadi salah satu operasi proses kritis dalam industri farmasi, nutraceutical, dan kosmetik global, dengan proyeksi nilai pasar yang melampaui USD 30 miliar pada tahun 2027 (Grand View Research, 2023). Di antara berbagai teknologi ekstraksi yang tersedia — pelarut organik konvensial, distilasi uap, dan ekstraksi fluida superkritis — proses **Supercritical Fluid Extraction (SFE) dengan CO₂** muncul sebagai standar emas (*gold standard*) karena toksisitas nol residu pelarut, selektivitas tinggi terhadap cannabinoid target seperti Δ⁹-tetrahydrocannabinol (THC) dan cannabidiol (CBD), serta kemampuan tuning kelarutan melalui manipulasi presisi parameter tekanan dan suhu (Obchoei & Limtrakarn, 2024).

Urgensi industrialisasinya bersifat multidimensional. Pertama, dari perspektif **Good Manufacturing Practice (GMP) farmasi**, proses SFE-CO₂ memenuhi kriteria *residual solvent*-free yang dipersyaratkan oleh United States Pharmacopeia (USP <467>) dan European Pharmacopoeia (10th Edition), sehingga menjadi teknologi yang tidak dapat dinegosiasikan untuk produk obat berbasis cannabinoid. Kedua, dari perspektif **rekayasa proses**, yield dan kemurnian produk sangat sensitif terhadap dinamika fluida dalam reaktor bertekanan tinggi (ekstraktor), yang umumnya berbentuk kolom silinder vertikal berdiameter 10–100 cm dengan panjang 1–6 meter. Ketidakseragaman distribusi tekanan, gradien suhu aksial, dan fenomena *channeling* fluida di sekitar matriks biomassa padat merupakan inefisiensi utama yang menurunkan laju ekstraksi dan selektivitas (Toledo & del Valle, 2023).

Konteks ini menjadi titik masuk Obchoei & Limtrakarn (2024) yang mempublikasikan model **axisymmetric flow** untuk memprediksi profil kecepatan, tekanan, dan konsentrasi CO₂-superkritikal yang mengalir melalui *packed bed* biomassa kanabis. Pendekatan aksisimetrik sangat relevan karena geometri ekstraktor berbentuk silinder, memungkinkan reduksi computational domain 3D penuh menjadi 2D (*r-z plane*), sehingga optimasi desain dan operasi dapat dilakukan secara efisien tanpa kehilangan fidelitas fisika dominan. Sementara itu, Toledo & del Valle (2023) melengkapinya dengan model perpindahan panas untuk tahap **pressurization, extraction, dan depressurization** yang umumnya diabaikan dalam studi SFE klasik, padahal memberikan kontribusi signifikan terhadap perubahan densitas CO₂ dan dinamika kelarutan selama siklus batch.

Dari perspektif **sistem industri**, integrasi kedua pendekatan ini memungkinkan perancangan *digital twin* ekstraktor SFE-CO₂ yang dapat digunakan untuk *process intensification*, *predictive maintenance*, dan validasi *scale-up* dari kapasitas laboratorium (50 mL) ke kapasitas industri (>1000 L) — tantangan yang selama ini menjadi *bottleneck* komersialisasi.

## 2. Landasan Teori & Formulasi Matematis

Pemodelan proses SFE-CO₂ dalam geometri silinder memerlukan formulasi **Navier-Stokes** dalam koordinat silindris dengan asumsi **axisymmetry** (tidak ada variasi dalam arah $\theta$):

$$\frac{\partial \rho}{\partial t} + \frac{1}{r}\frac{\partial (\rho r u_r)}{\partial r} + \frac{\partial (\rho u_z)}{\partial z} = 0 \tag{1}$$

di mana $\rho$ adalah densitas fluida (kg/m³), $u_r$ dan $u_z$ masing-masing adalah komponen kecepatan radial dan aksial (m/s), serta $r$ adalah koordinat radial (m). Persamaan momentum radial dan aksial mengikuti:

$$\rho\left(\frac{\partial u_r}{\partial t} + u_r\frac{\partial u_r}{\partial r} + u_z\frac{\partial u_r}{\partial z}\right) = -\frac{\partial p}{\partial r} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_r}{\partial r}\right) - \frac{u_r}{r^2} + \frac{\partial^2 u_r}{\partial z^2}\right] \tag{2}$$

$$\rho\left(\frac{\partial u_z}{\partial t} + u_r\frac{\partial u_z}{\partial r} + u_z\frac{\partial u_z}{\partial z}\right) = -\frac{\partial p}{\partial z} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_z}{\partial r}\right) + \frac{\partial^2 u_z}{\partial z^2}\right) + \rho g_z \tag{3}$$

dengan $p$ tekanan (Pa), $\mu$ viskositas dinamis (Pa·s), dan $g_z$ percepatan gravitasi (m/s²). Untuk menyederhanakan komputasi, model Obchoei & Limtrakarn (2024) umumnya mengadopsi asumsi **Darcy-Forchheimer** untuk media berpori:

$$-\frac{\partial p}{\partial z} = \frac{\mu}{\kappa} u_z + \beta \rho |u_z| u_z \tag{4}$$

di mana $\kappa$ adalah permeabilitas matriks (m²) dan $\beta$ koefisien inersia Forchheimer (1/m). Untuk biomassa kanabis ground, $\kappa$ tipikal berada pada orde $10^{-9}$ hingga $10^{-7}$ m².

Persamaan konveksi-difusi untuk konsentrasi cannabinoid terlarut $C$ (kg/m³) dalam fase superkritis:

$$\frac{\partial (\varepsilon C)}{\partial t} + \frac{\partial (u_z C)}{\partial z} = \frac{\partial}{\partial z}\left(D_{ax} \frac{\partial C}{\partial z}\right) - (1-\varepsilon) \frac{\partial q}{\partial t} \tag{5}$$

dengan $\varepsilon$ porositas bed (≈ 0,4–0,6 untuk biomassa ground), $D_{ax}$ koefisien dispersi aksial (m²/s), dan $q$ konsentrasi solute pada fase padat (kg/m³). Laju desorpsi dari matriks padat dimodelkan dengan persamaan **Linear Driving Force (LDF)** yang banyak digunakan di industri:

$$\frac{\partial q}{\partial t} = k_s a_p (q^* - q) \tag{6}$$

di mana $k_s$ adalah koefisien transfer massa eksternal/internal (m/s), $a_p$ luas permukaan spesifik partikel (m²/m³), dan $q^*$ konsentrasi kesetimbangan yang ditentukan oleh kelarutan superkritis CO₂. Kelarutan ini dimodelkan dengan **Chrastil equation**:

$$\ln(S) = a + \frac{b}{T} + c \ln(\rho_{CO_2}) \tag{7}$$

dengan $S$ kelarutan (kg solute/kg CO₂), $T$ suhu (K), $\rho_{CO_2}$ densitas CO₂ (kg/m³), dan $a, b, c$ parameter empiris. Untuk THC dalam CO₂ superkritis, parameter tipikal $a \approx -38{,}12$, $b \approx -10200$, $c \approx 4{,}21$ (Kurnik & Reid, 1982 — referensi klasik).

Densitas CO₂ superkritis dihitung dengan **Persamaan State Peng-Robinson**:

$$P = \frac{RT}{V_m - b} - \frac{a\alpha}{V_m(V_m + b) + b(V_m - b)} \tag{8}$$

di mana $V_m$ volume molar, $a$ dan $b$ parameter atraksi dan repulsi, $\alpha$ fungsi temperatur. Persamaan ini krusial karena $\rho_{CO_2}$ menentukan kelarutan melalui Persamaan (7) dan mempengaruhi kecepatan melalui momentum.

Untuk model perpindahan panas Toledo & del Valle (2023), persamaan **energi** dalam fase fluida dan fase padat diselesaikan secara coupled:

$$(\rho c_p)_f \left(\frac{\partial T_f}{\partial t} + u_z \frac{\partial T_f}{\partial z}\right) = k_{ef,f} \frac{\partial^2 T_f}{\partial z^2} + h_v (T_s - T_f) \tag{9}$$

$$(\rho c_p)_s (1-\varepsilon) \frac{\partial T_s}{\partial t} = k_{ef,s} \frac{\partial^2 T_s}{\partial z^2} - h_v (T_s - T_f) \tag{10}$$

dengan $h_v$ koefisien transfer panas volumetrik (W/m³·K), $c_p$ kapasitas panas (J/kg·K), dan $k_{ef}$ konduktivitas efektif (W/m·K).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri SFE-CO₂ dengan model axisymmetric mengikuti **SOP terstruktur** sebagai berikut:

**Tahap 1 — Pra-Proses dan Karakterisasi Bahan Baku.** Biomassa kanabis dikeringkan hingga *moisture content* < 10% (metode gravimetri, AOAC 930.15), digiling hingga ukuran partikel 0,5–2 mm, dan dianalisis kadar cannabinoid total dengan HPLC-UV (Metode AOAC 2018.10). Parameter ini menjadi input model ($a_p$, $\varepsilon$, $\kappa$).

**Tahap 2 — Pembentukan Computational Domain.** Geometri 2D axisymmetric (sumbu vertikal) dibuat dengan mesh terstruktur menggunakan ANSYS Meshing atau ICEM CFD. Untuk ekstraktor diameter 50 mm dan tinggi 500 mm, digunakan sekitar 50.000–100.000 elemen quadrilateral dengan *boundary layer inflation* di dinding.

**Tahap 3 — Discretization dan Solusi Numerik.** Persamaan (1)–(10) didiskretisasi dengan **Finite Volume Method (FVM)** menggunakan skema SIMPLE untuk pressure-velocity coupling, second-order upwind untuk konveksi, dan time step adaptif (1–10 s). Solver: ANSYS Fluent 2023 R2 atau OpenFOAM v2306.

**Tahap 4 — Validasi dengan Data Eksperimen.** Hasil simulasi divalidasi dengan data eksperimen *yield* versus waktu. Target kesesuaian: RMSE < 5% dan R² > 0,95.

**Tahap 5 — Optimasi Parameter Operasi.** Dengan model tervalidasi, dilakukan **Design of Experiments (DoE)** komputasional — misalnya Box-Behnken Design — untuk tekanan (100–350 bar), suhu (35–65°C), laju alir CO₂ (1–10 kg/jam) — guna mengidentifikasi titik optimum yield dan selektivitas.

**Tahap 6 — Scale-up Industri.** Menggunakan prinsip *constant dimensionless groups* (Reynolds, Peclet, Biot) untuk mentranslasikan kondisi optimum ke ekstraktor komersial.

**Diagram Alir Proses (SFE-CO₂ Batch):**
```
[CO₂ Storage] → [Cooler (5°C)] → [Pump 1 (Liquid)] → [Heater]
    → [Pump 2 (Pressurization ke 250 bar)] → [Extraction Vessel dengan biomassa]
    → [Expansion Valve] → [Separator 1 (50 bar, 30°C)] → [Separator 2 (20 bar, 20°C)]
    → [Recycle CO₂] → [Storage]
[Hot Water Jacket di vessel] → [Suhu terjaga 40–60°C]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Ekstraksi 5 kg biomassa kanabis (kadar THC awal 12% berat) dalam ekstraktor silinder diameter 100 mm, tinggi 1000 mm, dengan CO₂ superkritis pada 250 bar dan 50°C.

**Parameter input:**
- $D_{vessel} = 0{,}1$ m, $L = 1$ m
- $P =