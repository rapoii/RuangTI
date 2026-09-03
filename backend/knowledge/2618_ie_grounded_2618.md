# 2618 — Pemodelan Aliran Aksisimetrik dan Transfer Panas pada Ekstraksi Minyak Kanabis dengan CO₂ Superkritis

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Ekstraksi fluida superkritis (Supercritical Fluid Extraction, SFE) dengan CO₂ telah menjadi teknologi unggulan dalam industri fitofarmaka, nutrasetika, dan terutama industri kanabis medis yang berkembang pesat pasca-legalisasi di berbagai yurisdiksi global. Pasar global ekstrak kanabis diproyeksikan mencapai USD 14,8 miliar pada 2028 dengan Compound Annual Growth Rate (CAGR) sebesar 16,2% (Grand View Research, 2023), sehingga optimalisasi proses ekstraksi menjadi isu strategis bagi Teknik Industri. Dalam konteks ini, paper Obchoei dan Limtrakarn (2024) yang dipublikasikan di *International Journal of Thermofluids* menyoroti kebutuhan akan model aliran aksisimetrik yang mampu memprediksi distribusi kecepatan, tekanan, dan konsentrasi dalam bejana ekstraksi silindris dengan akurasi tinggi [DOI: 10.1016/j.ijft.2024.100682].

Urgensi ekonomis utama terletak pada trade-off antara yield ekstraksi (umumnya 10–25% berat kering untuk cannabinoid seperti THC dan CBD) terhadap konsumsi CO₂ (1–5 kg CO₂ per kg biomassa) dan waktu siklus (1–6 jam per batch). Efisiensi thermodinamika secara langsung menentukan Cost of Goods Sold (COGS) yang di industri kanabis berkisar 35–55% dari harga jual eceran. Pendekatan komputasi dinamika fluida (CFD) aksisimetrik 2D, seperti yang dikembangkan oleh Obchoei & Limtrakarn, mengurangi beban komputasi hingga 70–80% dibanding simulasi 3D penuh sembari mempertahankan fidelitas prediksi hidrodinamika dalam vessel.

Sementara itu, Toledo dan del Valle (2023) di *The Journal of Supercritical Fluids* melengkapi kerangka rekayasa ini dengan memodelkan transfer panas transien selama tiga tahap kritis: *pressurization*, *extraction*, dan *depressurization* [DOI: 10.1016/j.supflu.2023.106046]. Efek Joule-Thomson pada saat depresurisasi dapat menyebabkan pendinginan lokal hingga -40°C, berpotensi membentuk dry ice yang menyumbat katup dan menurunkan yield secara drastis. Integrasi kedua model ini — hidrodinamika aksisimetrik dan transfer panas transien — menjadi fondasi esensial untuk *Process Analytical Technology* (PAT) dan *Quality by Design* (QbD) sesuai pedoman FDA Process Validation Guidance (2011) dan ICH Q8-Q12.

Dari perspektif Industrial Engineering, pemahaman kuantitatif terhadap fenomena ini memungkinkan optimalisasi multi-objective: memaksimumkan throughput, meminimumkan konsumsi energi spesifik, dan menjamin konsistensi kualitas produk. Tanpa model matematis yang terverifikasi, scale-up dari laboratorium (100 mL) ke produksi komersial (50–1000 L) menjadi empiris dan berisiko tinggi.

## 2. Landasan Teori & Formulasi Matematis

Model aksisimetrik dibangun dengan asumsi ∂/∂θ = 0 (tanpa variasi azimuthal), sehingga persamaan transpor 3D direduksi menjadi 2D dalam koordinat silinder (r, z). Kerangka ini diterapkan pada packed bed biomassa kanabis yang dianggap sebagai media pori isotropik dengan porositas ε dan permeabilitas K.

### 2.1 Persamaan Kontinuitas (Konservasi Massa)

$$\frac{\partial \rho}{\partial t} + \frac{1}{r}\frac{\partial (r\rho v_r)}{\partial r} + \frac{\partial (\rho v_z)}{\partial z} = 0$$

dengan ρ adalah densitas CO₂ superkritis, v_r dan v_z adalah komponen kecepatan radial dan aksial.

### 2.2 Persamaan Momentum (Navier-Stokes dengan Sumber Darcy)

Untuk arah radial (r):

$$\rho\left(\frac{\partial v_r}{\partial t} + v_r\frac{\partial v_r}{\partial r} + v_z\frac{\partial v_r}{\partial z}\right) = -\frac{\partial p}{\partial r} + \mu\left[\frac{\partial}{\partial r}\left(\frac{1}{r}\frac{\partial (r v_r)}{\partial r}\right) + \frac{\partial^2 v_r}{\partial z^2}\right] - \frac{\mu}{K}\varepsilon v_r + \rho g_r$$

Untuk arah aksial (z):

$$\rho\left(\frac{\partial v_z}{\partial t} + v_r\frac{\partial v_z}{\partial r} + v_z\frac{\partial v_z}{\partial z}\right) = -\frac{\partial p}{\partial z} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial v_z}{\partial r}\right) + \frac{\partial^2 v_z}{\partial z^2}\right] - \frac{\mu}{K}\varepsilon v_z + \rho g_z$$

Term -μv/K merupakan resistansi viscous dari packed bed sesuai hukum Darcy-Forchheimer, dengan permeabilitas K dihitung dari persamaan Kozeny-Carman:

$$K = \frac{d_p^2 \varepsilon^3}{180(1-\varepsilon)^2}$$

### 2.3 Persamaan Energi

$$\rho c_p\left(\frac{\partial T}{\partial t} + v_r\frac{\partial T}{\partial r} + v_z\frac{\partial T}{\partial z}\right) = k_{eff}\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial T}{\partial r}\right) + \frac{\partial^2 T}{\partial z^2}\right] + \mu_{JT}\left(\frac{\partial p}{\partial t} + v_r\frac{\partial p}{\partial r} + v_z\frac{\partial p}{\partial z}\right) + \Phi_v$$

di mana μ_JT adalah koefisien Joule-Thomson yang signifikan pada tahap depresurisasi (untuk CO₂, μ_JT ≈ 1,1–1,5 K/bar pada kondisi operasi), dan Φ_v adalah disipasi viskos.

### 2.4 Persamaan State: Peng-Robinson

$$P = \frac{RT}{V_m - b} - \frac{a(T)}{V_m(V_m + b) + b(V_m - b)}$$

dengan parameter a(T) dan b yang memperhitungkan faktor acentrik CO₂ (ω = 0,225). Model ini krusial karena ρ_CO₂ berubah dari ~880 kg/m³ (cair) menjadi ~280 kg/m³ (superkritis) pada titik kritis (T_c = 304,25 K, P_c = 73,8 bar).

### 2.5 Model Transfer Panas Toledo & del Valle (2023)

Toledo dan del Valle memformulasikan perpindahan panas konvektif di dinding vessel:

$$q'' = h_{ext}(T_{ext} - T_s) = h_{int}(T_s - T_{bulk})$$

dengan koefisien transfer panas internal h_int korelasi Sieder-Tate:

$$Nu = 1.86\,Re^{1/3}Pr^{1/3}\left(\frac{\mu}{\mu_s}\right)^{0.14}\left(\frac{D}{L}\right)^{1/3}$$

untuk aliran laminar (Re < 2300) yang relevan pada startup proses.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri mengikuti alur rekayasa sistematis yang terintegrasi dengan standar GMP (Good Manufacturing Practice) dan ASME Boiler & Pressure Vessel Code (BPVC) Section VIII untuk bejana tekan.

### Tahap 1: Karakteristik Feedstock
- Analisis kadar air biomassa (target <12% wb untuk efisiensi optimal)
- Penentuan distribusi ukuran partikel (target d_p = 0,5–2,0 mm; keseragaman diukur dengan coefficient of variation <15%)
- Pengukuran bulk density dan tap density untuk menentukan porositas bed

### Tahap 2: Geometri Vessel dan Pre-Processing CFD
- Dimensi vessel: diameter internal D_i, tinggi H, rasio H/D_i = 3–5 untuk residence time optimal
- Diskretisasi domain 2D aksisimetrik dengan mesh terstruktur (minimal 50.000 sel untuk konvergensi)
- Pengecekanian independensi mesh dengan Grid Convergence Index (GCI < 5%)

### Tahap 3: Penentuan Kondisi Boundary
- **Inlet (bottom):** velocity inlet dengan profil fully-developed, T_in sesuai set-point heater
- **Outlet (top):** pressure outlet dengan tekanan operasi
- **Wall vessel:** no-slip condition, coupled thermal dengan koefisien h_ext sesuai isolasi
- **Axis (r = 0):** kondisi simetri (∂φ/∂r =