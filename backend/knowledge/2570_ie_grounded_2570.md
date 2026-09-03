# 2570 — Pemodelan Aliran Aksisimetrik pada Ekstraksi Minyak Kanabis dengan Proses Supercritical Fluid Extraction (SFE) CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO2 process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botanol dan fitofarmaka global sedang mengalami transformasi fundamental akibat meningkatnya permintaan akan cannabinoid murni (utamanya cannabidiol/CBD dan tetrahydrocannabinol/THC) untuk aplikasi farmasi, nutraceutical, dan kosmetik. Pasar global ekstrak kanabis legal diproyeksikan menembus USD 60 miliar pada 2030 dengan Compound Annual Growth Rate (CAGR) lebih dari 22% (Grand View Research, 2024), sehingga kebutuhan akan proses ekstraksi yang konsisten, scalable, dan memenuhi standar *Good Manufacturing Practice* (GMP) menjadi sangat mendesak. Dalam konteks inilah Obchoei dan Limtrakarn (2024) mempublikasikan model aliran aksisimetrik untuk proses *supercritical fluid extraction* (SFE) menggunakan CO₂ pada ekstraksi minyak kanabis, yang menjadi paper utama modul ini (DOI: 10.1016/j.ijft.2024.100682).

SFE-CO₂ dipilih sebagai teknologi unggulan karena sifat CO₂ pada kondisi superkritis (T > 304,13 K dan P > 7,38 MPa) yang menggabungkan daya solvasi tinggi seperti cairan dengan difusivitas tinggi seperti gas, sekaligus bersifat non-toksik, non-flammable, dan meninggalkan residu pelarut nol—kritikal untuk aplikasi farmasi. Namun, optimasi proses SFE pada skala industri menghadapi tantangan multidimensi: dinamika tekanan dan temperatur yang non-isotermal selama tahap *pressurization*, *extraction*, dan *depressurization* sangat memengaruhi yield dan kualitas cannabinoid. Toledo dan del Valle (2023) dalam *The Journal of Supercritical Fluids* (DOI: 10.1016/j.supflu.2023.106046) menunjukkan bahwa efek perpindahan kalor tidak dapat diabaikan dalam pemodelan kinetika SFE, karena gradien termal radial pada vessel extractor menyebabkan distribusi solubilitas yang non-uniform dan menurunkan efisiensi ekstraksi hingga 15–25%.

Dari perspektif Teknik Industri, fenomena ini memiliki implikasi langsung terhadap perancangan *production planning*, *process control*, dan *capacity optimization*. Ekstraktor industri SFE-Cannabis memiliki geometri cylindrical vessel dengan panjang hingga 6 meter dan diameter 1,5 meter, berisi biomassa kanabis ground dengan densitas unggun padat 350–500 kg/m³. Penguasaan model aliran aksisimetrik—yang mengasumsikan simetri rotasional terhadap sumbu vertikal extractor—memungkinkan engineer untuk memprediksi profil konsentrasi CO₂+kanabinoid, profil tekanan, dan gradien temperatur radial sebelum implementasi fisik. Hal ini secara signifikan mengurangi *time-to-market* dan biaya eksperimentasi trial-and-error yang dalam industri SFE kanabis dapat mencapai USD 250.000–500.000 per siklus optimasi. Lebih lanjut, kepatuhan terhadap standar farmasi seperti USP <467>, European Pharmacopoeia 10.0, dan regulasi BPOM/EMEA mensyaratkan kontrol proses yang rigorous, hanya dapat dipenuhi melalui pemodelan matematis yang telah divalidasi seperti yang diajukan Obchoei dan Limtrakarn (2024).

---

## 2. Landasan Teori & Formulasi Matematis

Pemodelan SFE-CO₂ aksisimetrik pada dasarnya mengintegrasikan tiga persamaan konservasi fundamental yang diselesaikan dalam koordinat silinder $(r, \theta, z)$ dengan asumsi $\partial/\partial\theta = 0$ (simetri aksisimetrik).

### 2.1 Persamaan Kontinuitas (Massa)

Untuk campuran biner CO₂ (fase 1) dan minyak kanabis dalam fase superkritis, dengan $\rho$ densitas campuran dan $\vec{v}$ vektor kecepatan Darcy (karena aliran dalam *porous medium* unggun biomassa):

$$\frac{\partial \varepsilon \rho}{\partial t} + \nabla \cdot (\rho \vec{v}) = 0 \quad \text{(1)}$$

di mana $\varepsilon$ adalah porositas unggun padat (umumnya $\varepsilon = 0,35$–$0,45$ untuk biomassa kanabis ground).

### 2.2 Persamaan Momentum (Hukum Darcy-Forchheimer)

Obchoei dan Limtrakarn (2024) memodifikasi hukum Darcy dengan koreksi inersial Forchheimer untuk regimen aliran transisi Reynolds tinggi ($\text{Re}_p = 10$–$100$):

$$\frac{\partial}{\partial t}\left(\frac{\rho}{\varepsilon}\vec{v}\right) + \nabla \cdot \left(\frac{\rho}{\varepsilon^2}\vec{v}\vec{v}\right) = -\nabla P + \mu \nabla^2\vec{v} - \frac{\mu}{K}\vec{v} - \frac{F_c}{\sqrt{K}}|\vec{v}|\vec{v} \quad \text{(2)}$$

dengan $K$ permeabilitas intrinsik (m²), $\mu$ viskositas dinamik CO₂ superkritis, dan $F_c$ koefisien inersial Forchheimer yang tergantung morfologi biomassa (umumnya $F_c = 0,55$ untuk partikel irregular).

### 2.3 Persamaan Energi dengan Sumber Kalor Eksternal

Menggabungkan kontribusi perpindahan kalor konveksi-aliran dan konduksi dalam solid matrix (Toledo & del Valle, 2023):

$$\varepsilon \rho c_p \frac{\partial T}{\partial t} + \rho c_p \vec{v} \cdot \nabla T = k_{eff}\nabla^2 T + Q_{ext} - \Delta H_s \frac{\partial y}{\partial t} \quad \text{(3)}$$

di mana $k_{eff} = \varepsilon k_f + (1-\varepsilon)k_s$ adalah konduktivitas efektif unggun (W/m·K), $\Delta H_s$ entalpi pelarutan kanabinoid dalam CO₂ (eksotermik lemah, ±5–15 kJ/mol), dan $Q_{ext}$ fluks kalor jacket eksternal.

### 2.4 Persamaan Transfer Massa (Solute: Kanabinoid)

Konsentrasi solute $y$ (kg kanabinoid/kg CO₂) mengikuti model *shrinking core* atau *local equilibrium*:

$$\varepsilon \rho \frac{\partial y}{\partial t} + \rho \vec{v} \cdot \nabla y = \nabla \cdot (\varepsilon \rho D_{eff} \nabla y) - (1-\varepsilon)\rho_s \frac{\partial q}{\partial t} \quad \text{(4)}$$

dengan $q$ konsentrasi solute dalam fase padat (kg/kg biomassa), $D_{eff} = D_{12} \cdot \varepsilon^{-1,5}$ koefisien difusi efektif (Brinkman modifikasi), dan $\rho_s$ densitas partikel padat.

### 2.5 Persamaan Keadaan (Equation of State)

Densitas CO₂ superkritis dan campuran dihitung dengan *Peng-Robinson Equation of State* (PR-EOS):

$$P = \frac{RT}{V_m - b} - \frac{a\alpha(T)}{V_m(V_m + b) + b(V_m - b)} \quad \text{(5)}$$

dengan parameter $a, b$ yang melibatkan faktor acentric $\omega$, krusial untuk prediksi solubilitas CBD/THC akurat pada 8–30 MPa, 313–333 K.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model aksisimetrik Obchoei-Limtrakarn ke dalam siklus rekayasa industri mengikuti *Standard Operating Procedure* berikut:

**Fase 1 — Karakterisasi Bahan Baku (Karakterisasi Input)**
1. Tentukan komposisi cannabinoid target (CBD %, THC %, minor cannabinoids) menggunakan HPLC sesuai USP <621>.
2. Ukur distribusi ukuran partikel biomassa (target $d_p = 0,5$–$2,0$ mm) untuk validasi permeabilitas $K$.
3. Tentukan kadar air (target < 12% w/w) untuk mencegah hidrolisis dan ice formation saat depresurisasi.

**Fase 2 — Diskritisasi Numerik (Pre-Processing CFD)**
1. Bangun geometri 2D-axisymmetric vessel menggunakan software CFD (COMSOL Multiphysics®, ANSYS Fluent®, atau OpenFOAM).
2. Generate mesh dengan *boundary layer refinement* pada dinding vessel (y+ < 1) dan jumlah elemen 50.000–200.000.
3. Tentukan *boundary conditions*: inlet (mass flow rate CO₂), outlet (P_out konstan), dinding (no-slip + Q_ext dari jacket).

**Fase 3 — Solver Configuration**
1. Pilih solver segregated untuk coupling tekanan-kecepatan (SIMPLE algorithm).
3. Konvergensi ditetapkan pada residual < 10⁻⁶ untuk kontinuitas dan momentum.

**Fase 4 — Validasi Eksperimental**
1. Lakukan *extraction runs* pada pilot-scale (extractor 5 L) dengan instrumentasi pressure transducer (akurasi ±0,1% FS) dan thermocouple Tipe K pada 5 lokasi radial.
2. Bandingkan prediksi model dengan data yield aktual; target akurasi R² > 0,92.

**Fase 5 — Scale-Up Industri**
1. Gunakan similitude analysis (constant $\text{Re}_p$, $\text{Pe}$ Peclet number).
2. Validasi pada extractor komersial 100–1000 L sesuai Toledo-del Valle heat transfer framework.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus: Optimasi Ekstraksi CBD pada Tekanan 25 MPa**

**Data Input:**
- Vessel: silinder, $D = 0,15$ m, $L = 0,6$ m, $V = 0,0106$ m³
- Biomassa: 4 kg kanabis ground, $\rho_s = 420$ kg/m³, $d_p = 1,0$ mm
- Porositas $\varepsilon = 0,40$
- Tekanan operasi $P = 25$ MPa, Temperatur $T = 328$ K
- Laju alir CO₂: $\dot{m} = 1,2$ kg/jam
- Target yield CBD: 12% w/w biomassa

**Langkah 1: Hitung Densitas CO₂ pada 25 MPa, 328 K (PR-EOS)**

Parameter PR-EOS untuk CO₂ murni:
- $T_c = 304,13$ K, $P_c = 7,38$ MPa, $\omega = 0,225$
- $a = 0,45724 \cdot \frac{R^2 T_c^2}{P_c} = 0,45724 \cdot \frac{(8,314)^2 \cdot (304,13)^2}{7,38 \times 10^6} = 0,3970$ Pa·m⁶/mol²
- $b = 0,07780 \cdot \frac{RT_c}{P_c} = 2,66 \times 10^{-5}$ m³/mol
- $\alpha(T) = \left[1 + \kappa(1 - \sqrt{T_r_t})\right]^2$ dengan $\kappa = 0,37464 + 1,54226\omega - 0,26992\omega^2 = 0,7075$
- $T_r = 328/304,13 = 1,0784$ → $\alpha(328) = [1 + 0,7075(1 - 1,0385)]^2 = [1 - 0,0272]^2 = 0,946$

Iterasi dengan Newton-Raphson menghasilkan $V_m = 7,82 \times 10^{-5}$ m³/mol → $\rho_{CO_2} = M/V_m = 0,044/7,82\times10^{-5} = 562,6$ kg/m³.

**Langkah 2: Hitung Permeabilitas dengan Kozeny-Carman**

$$K = \frac{\varepsilon^3 d_p^2}{180(1-\varepsilon)^2} = \frac{(0,4)^3 \cdot (10^{-3})^2}{180 \cdot (0,6)^2} = \frac{6,4 \times 10^{-8}}{64,8} = 9,87 \times 10^{-10} \text{ m}^2 \quad \text{(6)}$$

**Langkah 3: Hitung Kecepatan Superfisial dan Reynolds Partikel**

Laju volumetric: $\dot{V} = \dot{m}/\rho_{CO_2} = 1,2/562,6 = 2,133 \times 10^{-3}$ m³/jam $= 5,93 \times 10^{-7}$ m³/s
Luas penampang: $A = \pi D^2/4 = 0,01767$ m²
Kecepatan superfisial: $u_s = \dot{V}/A = 3,36 \times 10^{-5}$ m/s
Kecepatan interstitial: $u_i = u_s/\varepsilon = 8,4 \times 10^{-5}$ m/s

Viskositas CO₂ pada 328 K, 25 MPa: $\mu = 7,85 \times 10^{-5}$ Pa·s

$$\text{Re}_p = \frac{\rho u_s d_p}{\mu (1-\varepsilon)} = \frac{562,6 \cdot 3,36\times10^{-5} \cdot 10^{-3}}{7,85\times10^{-5} \cdot 0,6} = 0,401 \quad \text{(7)}$$

Regimen laminar → Hukum Darcy berlaku tanpa koreksi Forchheimer signifikan.

**Langkah 4: Drop Tekanan Aksial (Hukum Darcy)**

$$\frac{\Delta P}{L} = \frac{\mu u_s