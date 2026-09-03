# 1834 — Pemodelan Aliran Aksisimetrik dan Transfer Panas pada Ekstraksi Minyak Kanabis dengan Karbondioksida Supercritical (SFE-CO₂)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Axisymmetric Flow Model of Cannabis Oil Extraction of Supercritical Fluid Extraction CO₂ Process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi fitokimia global mengalami transformasi struktural yang signifikan seiring dengan liberalisasi regulasi produk turunan *Cannabis sativa* di berbagai yurisdiksi, termasuk Kanada (2018), beberapa negara bagian Amerika Serikat, Uni Eropa, Thailand, dan Malaysia. Nilai pasar minyak kanabis (cannabis oil) — yang kaya akan cannabinoid aktif seperti *cannabidiol* (CBD), *delta-9-tetrahydrocannabinol* (THC), *cannabigerol* (CBG), dan terpenoid minor — diproyeksikan melampaui USD 60 miliar pada 2030 dengan compound annual growth rate (CAGR) lebih dari 20% (Grand View Research, 2024). Dalam konteks ini, ekstraksi dengan fluida superkritis berbasis karbondioksida (Supercritical Fluid Extraction-CO₂ / SFE-CO₂) muncul sebagai *gold standard* teknologi hijau karena sifat CO₂ yang nontoksik, tidak mudah terbakar, *Generally Recognized as Safe* (GRAS) oleh FDA, dan mudah dipisahkan dari produk melalui depresurisasi.

Namun, desain dan *scale-up* ekstraktor SFE-CO₂ masih menghadapi tantangan rekayasa yang substansial. Obchoei & Limtrakarn (2024) menyoroti bahwa ekstraktor industri pada dasarnya beroperasi sebagai reaktor unggun tetap (*packed-bed extractor*) berbentuk silinder dengan diameter hingga 1.000 mm dan tinggi 6.000 mm, di mana dinamika aliran fluida superkritis bersifat **aksisimetrik** (axisymmetric) karena geometri rotasional dan profil aliran yang non-uniform akibat gradien tekanan radial. Tanpa pemodelan Computational Fluid Dynamics (CFD) yang akurat, prediksi yield dan *bottleneck* proses menjadi spekulatif, menghambat optimasi Capital Expenditure (CAPEX) dan Operational Expenditure (OPEX).

Di sisi lain, Toledo & del Valle (2023) dalam studi terdahulu mereka menunjukkan bahwa **fase transien** SFE-CO₂ — yaitu *pressurization* (CO₂ dipompa hingga 100–350 bar), *extraction* (pelarutan cannabinoid pada 35–70 °C), dan *depressurization* (pelepasan CO₂ ke separator pada 40–60 bar) — sangat dipengaruhi oleh perpindahan panas non-isotermal. Adanya *Joule-Thomson effect* pada CO₂ (ΔT ≈ –1,1 °C/bar pada kondisi dekat titik kritisnya) dapat menurunkan suhu *bed* secara lokal, merusak kelarutan (*solubility*) cannabinoid dan menginduksi gradien termal yang memperlambat kinetika. Kedua makalah ini bersama-sama membangun kerangka *multi-physics modeling* yang esensial bagi teknisi industri dalam merancang sistem SFE-CO₂ yang efisien, aman, dan sesuai regulasi Good Manufacturing Practice (GMP).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Persamaan Pengatur Aliran Aksisimetrik

Karena geometri ekstraktor SFE-CO₂ adalah silinder dengan sumbu rotasi (z), governing equations disusun dalam koordinat silinderik $(r, \theta, z)$ dengan asumsi **axisymmetric** sehingga $\partial / \partial \theta = 0$. Formulasi ini mengikuti Obchoei & Limtrakarn (2024).

**Persamaan Kontinuitas** (incompressible assumption pada kondisi superkritis):

$$\frac{\partial u_r}{\partial r} + \frac{u_r}{r} + \frac{\partial u_z}{\partial z} = 0$$

di mana $u_r$ adalah kecepatan radial dan $u_z$ adalah kecepatan aksial.

**Persamaan Momentum (Navier–Stokes)** untuk komponen radial:

$$\rho \left( u_r \frac{\partial u_r}{\partial r} + u_z \frac{\partial u_r}{\partial z} \right) = -\frac{\partial p}{\partial r} + \mu \left[ \frac{\partial}{\partial r} \left( \frac{1}{r} \frac{\partial (r u_r)}{\partial r} \right) + \frac{\partial^2 u_r}{\partial z^2} \right]$$

dan komponen aksial:

$$\rho \left( u_r \frac{\partial u_z}{\partial r} + u_z \frac{\partial u_z}{\partial z} \right) = -\frac{\partial p}{\partial z} + \mu \left[ \frac{1}{r} \frac{\partial}{\partial r} \left( r \frac{\partial u_z}{\partial r} \right) + \frac{\partial^2 u_z}{\partial z^2} \right] - \rho g$$

dengan $\rho$ sebagai densitas fluida superkritis (kg/m³), $\mu$ sebagai viskositas dinamis (Pa·s), dan $g$ sebagai percepatan gravitasi.

### 2.2. Persamaan Energi (Heat Transfer Model Toledo & del Valle, 2023)

Untuk memodelkan perpindahan panas non-isotermal selama SFE-CO₂, persamaan energi transien yang coupled dengan hidrodinamika adalah:

$$\rho C_p \left( \frac{\partial T}{\partial t} + u_r \frac{\partial T}{\partial r} + u_z \frac{\partial T}{\partial z} \right) = k \left[ \frac{1}{r} \frac{\partial}{\partial r} \left( r \frac{\partial T}{\partial r} \right) + \frac{\partial^2 T}{\partial z^2} \right] + \dot{q}_{\text{JT}}$$

di mana $C_p$ adalah kapasitas panas spesifik (J/(kg·K)), $k$ adalah konduktivitas termal (W/(m·K)), dan $\dot{q}_{\text{JT}}$ adalah *heat generation rate* akibat efek Joule–Thomson:

$$\dot{q}_{\text{JT}} = -\rho C_p \mu_{\text{JT}} \frac{Dp}{Dt}$$

dengan koefisien Joule–Thomson untuk CO₂ superkritis, $\mu_{\text{JT}} \approx 1{,}1 \times 10^{-5}$ K/Pa.

### 2.3. Persamaan Transport Spesies (Mass Transfer)

Distribusi konsentrasi cannabinoid dalam fase fluida superkritis dimodelkan dengan persamaan konveksi-difusi:

$$\frac{\partial C}{\partial t} + u_r \frac{\partial C}{\partial r} + u_z \frac{\partial C}{\partial z} = D_{\text{eff}} \left[ \frac{1}{r} \frac{\partial}{\partial r} \left( r \frac{\partial C}{\partial r} \right) + \frac{\partial^2 C}{\partial z^2} \right]$$

di mana $C$ adalah konsentrasi cannabinoid (kg/m³) dan $D_{\text{eff}}$ adalah koefisien difusi efektif (m²/s), yang untuk CO₂ superkritis bernilai $D_{\text{eff}} \approx 1{,}2 \times 10^{-8}$ m²/s pada 300 bar dan 50 °C (Obchoei & Limtrakarn, 2024).

### 2.4. Persamaan Keadaan (Equation of State)

Densitas CO₂ superkritis dihitung menggunakan **Persamaan Keadaan Peng–Robinson** karena akurasinya di dekat titik kritis ($T_c = 304{,}13$ K, $P_c = 73{,}8$ bar):

$$P = \frac{RT}{V_m - b} - \frac{a\alpha}{V_m^2 + 2bV_m - b^2}$$

dengan parameter: $a = 0{,}45724 \dfrac{R^2 T_c^2}{P_c}$, $b = 0{,}07780 \dfrac{RT_c}{P_c}$, dan $\alpha = \left[ 1 + \kappa \left( 1 - \sqrt{T/T_c} \right) \right]^2$, dengan $\kappa = 0{,}37464 + 1{,}54226\omega - 0{,}26992\omega^2$ (faktor asimetris $\omega_{\text{CO}_2} = 0{,}225$).

### 2.5. Model Kelarutan (Solubility Correlation)

Kelarutan THC dalam CO₂ superkritis mengikuti korelasi empiris (Chandra & Nair, 2023) yang dimodifikasi:

$$y^*_{\text{THC}} = \exp \left( A - \frac{B}{T} + C \ln \rho_{\text{CO}_2} \right)$$

dengan $A, B, C$ adalah konstanta spesifik cannabinoid. Model ini menjadi *boundary condition* pada dinding partikel padat (*solid matrix*) untuk persamaan transport spesies.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industrialisasi sistem SFE-CO₂ mengikuti kerangka rekayasa sistematis yang diturunkan dari temuan Obchoei & Limtrakarn (2024) dan Toledo & del Valle (2023):

### 3.1. Diagram Alir Proses SFE-CO₂

```
[Bahan Baku Kanabis] → [Milling & Sizing (≤ 1,5 mm)] → [Loading ke Ekstraktor]
   ↓
[Pressurization Stage: CO₂ dipompa ke P = 100–350 bar, t = 5–15 menit]
   ↓ [Coupled dengan heat exchanger untuk menjaga T = 35–70 °C]
[Extraction Stage: Aliran aksisimetrik superkritis-CO₂ selama t = 60–240 menit]
   ↓ [Cannabinoid larut dalam fase fluida]
[Depressurization ke Separator 1: P = 40–60 bar → wax & fraksi berat]
   ↓
[Separator 2: P = 10–20 bar → fraksi cannabinoid target]
   ↓
[Separator 3: P = 5 bar → terpena ringan, CO₂回收率 > 95%]
   ↓
[Produk Akhir: Crude Cannabis Oil]
```

### 3.2. Prosedur Operasional Standar (SOP)

1. **Pre-Process Preparation:** Bahan baku *Cannabis sativa* dikeringkan hingga *moisture content* ≤ 10% dan digiling hingga ukuran partikel 1,0–1,5 mm untuk memastikan perpindahan massa internal efektif tanpa *channeling*.
2. **Pressurization (Toledo & del Valle, 2023):** Pemompaan CO₂ dilakukan secara gradual dengan *flow ramp* 5 kg/jam per menit untuk menghindari gradien termal > 5 °C akibat efek Joule–Thomson. Pendinginan eksternal extractor jacket dijaga pada T_coolant = 5 °C.
3. **Extraction (Obchoei & Limtrakarn, 2024):** Operasi steady-state dengan mempertahankan parameter dalam toleransi ±2 bar dan ±1 °C. Pemantauan parameter melalui sensor Pressure Transmitter (Rosemount 3051) dan RTD Pt-100 pada 4 titik aksial (z = 0; 0,33L; 0,66L; L).
4. **Depressurization:** Dilakukan secara terkontrol pada laju 30 bar/menit untuk mencegah *foaming* dan degradasi termal cannabinoid.
5. **Quality Control:** Sampling produk pada separator 2 dianalisis via HPLC (sesuai USP <621>) untuk verifikasi profil cannabinoid dan kontaminan residu pelarut (< 5 ppm untuk CO₂; compliant dengan USP <467>).

### 3.3. Arsitektur Model CFD

Pemodelan CFD dilakukan dengan software *ANSYS Fluent* atau *COMSOL Multiphysics* menggunakan:
- **Mesh:** Structured quadrilateral dengan 80.000–150.000 elemen di plane aksisimetrik (r-z); *mesh independence test* pada GCI < 2%.
- **Solver:** Coupled pressure-velocity dengan SIMPLE algorithm.
- **Turbulence Model:** $k$-$\varepsilon$ Realizable karena Reynolds number $\text{Re} = \rho u D_h / \mu$ pada operasi SFE-CO₂ berada di kisaran 5.000–20.000 (aliran turbulen).
- **Coupling:** Two-way FSI (Fluid-Structure Interaction) antara fase fluida dan packed-bed dengan