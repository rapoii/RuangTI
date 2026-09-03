# 2506 — Model Aliran Aksisimetrik Ekstraksi Minyak Cannabis pada Proses Ekstraksi Fluida Superkritis CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesialis:** Axisymmetric Flow Model of Cannabis Oil Extraction of Supercritical Fluid Extraction CO₂ Process  
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)  
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Eksrakpsi minyak dari biomassa *Cannabis sativa* merupakan salah satu aplikasi *supercritical fluid extraction* (SFE) dengan pertumbuhan paling pesat di industri fitofarmaka dan nutraceutical global. Menurut Obchoei & Limtrakarn (2024) yang dipublikasikan di *International Journal of Thermofluids*, proses ini menuntut pemodelan aliran aksisimetrik dalam vessels ekstraktor yang geometrisnya cylindrical dengan rasio aspek tinggi, sehingga simplifikasi 2D *axisymmetric* menjadi pilihan komputasional yang efisien tanpa mengorbankan akurasi prediksi yield cannabinoid (DOI: [10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)). Pasar global ekstrak cannabinoid yang dilegalisasi untuk aplikasi medis dan rekreasional telah melampaui USD 5 miliar pada 2023, dengan yield ekonomis yang menjadi *critical success factor* bagi operator fasilitas SFE berskala pilot hingga komersial.

Urgensi teknis utama terletak pada sifat transien dari tiga tahap operasional SFE—pressurization, extraction steady-state, dan depressurization—yang masing-masing memiliki rezim termodinamika dan perpindahan panas berbeda. Toledo & del Valle (2023) di *The Journal of Supercritical Fluids* menunjukkan bahwa pendekatan isotermal yang umum diasumsikan pada pemodelan SFE konvensional tidak valid selama tahap pressurization dan depressurization, di mana gradien suhu aksial dapat melebihi 15–20 K pada vessel berdiameter besar (DOI: [10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)). Bagi praktisi teknik industri, hal ini berdampak langsung pada *throughput* tahunan, *specific energy consumption* (SEC), dan *process safety* terhadap risiko thermal shock pada komponen *high-pressure vessel* yang biasanya mengikuti standar ASME BPVC Section VIII Division 1.

Konteks operasional: ekstraktor SFE komersial beroperasi pada tekanan 15–35 MPa dan suhu 308–343 K, dengan densitas CO₂ yang bervariasi dari 600 hingga 900 kg/m³ mendekati kondisi kritisnya (T<sub>c</sub> = 304,13 K; P<sub>c</sub> = 7,377 MPa). Ketidakpastian dalam prediksi distribusi konsentrasi cannabinoid (THC, CBD, CBG, terpenoid) di sepanjang sumbu vessel menyebabkan yield aktual dapat menyimpang 8–15% dari prediksi model quasi-steady, yang berujung pada kerugian margin kotor signifikan pada produksi skala ton. Oleh karena itu, integrasi model *axisymmetric* yang dikombinasikan dengan *heat transfer model* dinamis menjadi kebutuhan engineering yang krusial untuk desain, *scale-up*, dan optimalisasi proses.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Governing untuk Aliran Aksisimetrik Transient

Model axisymmetric yang dikembangkan Obchoei & Limtrakarn (2024) menyelesaikan empat persamaan konservasi utama: kontinuitas, momentum (radial dan aksial), energi, dan transport spesies. Dalam koordinat silinder (r, z, t), persamaan kontinuitas dinyatakan sebagai:

$$\frac{\partial \rho}{\partial t} + \frac{1}{r}\frac{\partial (r \rho u_r)}{\partial r} + \frac{\partial (\rho u_z)}{\partial z} = 0$$

dengan ρ adalah densitas fluida (kg/m³), u<sub>r</sub> dan u<sub>z</sub> berturut-turut adalah komponen radial dan aksial dari vektor kecepatan (m/s). Persamaan momentum dalam arah aksial, dengan mengasumsikan *Darcy-Forchheimer* term untuk memperhitungkan porous media biomassa:

$$\rho\left(\frac{\partial u_z}{\partial t} + u_r\frac{\partial u_z}{\partial r} + u_z\frac{\partial u_z}{\partial z}\right) = -\frac{\partial p}{\partial z} + \mu_{eff}\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_z}{\partial r}\right) + \frac{\partial^2 u_z}{\partial z^2}\right] - \frac{\mu}{K}u_z - \beta\rho|u_z|u_z$$

di mana K adalah permeabilitas bed (m²) dan β adalah *inertial coefficient* (1/m). Untuk momentum arah radial, bentuknya analog dengan mengabaikan kontribusi body force dominan:

$$\rho\left(\frac{\partial u_r}{\partial t} + u_r\frac{\partial u_r}{\partial r} + u_z\frac{\partial u_r}{\partial z}\right) = -\frac{\partial p}{\partial r} + \mu_{eff}\left[\frac{\partial}{\partial r}\left(\frac{1}{r}\frac{\partial (r u_r)}{\partial r}\right) + \frac{\partial^2 u_r}{\partial z^2}\right]$$

### 2.2 Persamaan Energi dengan Source Term Perpindahan Panas

Mengikuti kerangka Toledo & del Valle (2023) yang memodelkan ketiga tahap SFE dengan persamaan energi *enthalpy-based*:

$$\rho C_p \left(\frac{\partial T}{\partial t} + u_z\frac{\partial T}{\partial z} + u_r\frac{\partial T}{\partial r}\right) = \frac{1}{r}\frac{\partial}{\partial r}\left(r k_{eff}\frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k_{eff}\frac{\partial T}{\partial z}\right) + \dot{q}_{rxn} + \dot{q}_{comp}$$

dengan k<sub>eff</sub> = k<sub>f</sub> + k<sub>disp</sub> merupakan konduktivitas efektif (*dispersion term* memperhitungkan dispersi aksial dan radial di dalam packed bed). Selama pressurization, enthalpi injeksi CO₂ mendominasi *source term*, menghasilkan pemanasan/dinginan tergantung apakah inlet lebih dingin/panas daripada bed awal.

### 2.3 Transport Spesies untuk Cannabinoid

Untuk fraksi massa Y cannabinoid (Y = Y<sub>THC</sub>, Y<sub>CBD</sub>, dst.):

$$\frac{\partial (\rho Y)}{\partial t} + \frac{1}{r}\frac{\partial (r \rho u_r Y)}{\partial r} + \frac{\partial (\rho u_z Y)}{\partial z} = \frac{1}{r}\frac{\partial}{\partial r}\left(r \rho D_{eff}\frac{\partial Y}{\partial r}\right) + \frac{\partial}{\partial z}\left(\rho D_{eff}\frac{\partial Y}{\partial z}\right) + \dot{m}_{sol}$$

di mana $\dot{m}_{sol}$ adalah laju pelarutan (kg cannabinoid/m³·s) yang dimodelkan dengan pendekatan *shrinking core* atau *Sovová's model*:

$$\dot{m}_{sol} = k_f a_p (C^* - C)$$

dengan k<sub>f</sub> = koefisien transfer massa fluida (m/s), a<sub>p</sub> = luas permukaan partikel per volume (m²/m³), C* = konsentrasi kesetimbangan (fungsi P, T, dan komposisi), dan C = konsentrasi bulk.

### 2.4 Korelasi Perpindahan Panas untuk SC-CO₂

Toledo & del Valle (2023) menggunakan korelasi *Bishop* yang dimodifikasi untuk perpindahan panas konvektif di supercritical CO₂:

$$Nu_b = 0.00659 \cdot Re_b^{0.766} \cdot Pr_b^{0.33} \cdot \overline{\rho}_r^{0.483}$$

dengan subscript *b* menunjukkan kondisi bulk, dan $\overline{\rho}_r = \rho_w/\rho_b$ adalah rasio densitas dinding terhadap bulk yang krusial di dekat titik kritis (*pseudo-critical* region). Konstanta-konstanta ini sesuai dengan geometri packed bed dan rentang Reynolds 10²–10⁵.

### 2.5 Persamaan Keadaan untuk SC-CO₂

Untuk menutup sistem, digunakan persamaan keadaan *Span-Wagner* yang akurat pada rentang wide-range superkritis:

$$p = \rho R T \left[1 + \sum_{i} n_i \delta^{d_i} \tau^{t_i} + \sum_{i} n_i \delta^{d_i} \tau^{t_i} e^{-\delta^{c_i}} + \sum_i n_i \delta^{d_i} \tau^{t_i} e^{-\alpha_i(\delta-\epsilon_i)^2 - \beta_i(\tau-\gamma_i)^2}\right]$$

dengan δ = ρ/ρ<sub>c</sub> dan τ = T<sub>c</sub>/T.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri mengikuti SOP terstruktur yang selaras dengan framework Obchoei & Limtrakarn (2024) dan Toledo & del Valle (2023):

**Tahap 1: Pre-Process Preparation (Standar GACP & GMP Cannabis)**
1. Sortasi dan grinding biomassa kering menjadi ukuran partikel 0,3–1,0 mm (mengikuti rekomendasi *Sovová* untuk rasio luas-per-volume optimal).
2. Moisture conditioning hingga kadar air <10% w.b. menggunakan fluidized bed dryer pada T = 313–318 K.
3. Loading dengan densitas packing 0,35–0,45 g/cm³ untuk menjaga permeabilitas床 (K ≈ 10⁻⁸–10⁻⁹ m²).

**Tahap 2: Pressurization Stage (Durasi: 5–15 menit)**
1. Inisiasi *CO₂ pump* dengan rate ramp-up 2–5 kg/min.
2. Monitoring real-time ΔT sepanjang vessel menggunakan thermocouple array (minimal 5 titik aksial: z = 0, L/4, L/2, 3L/4, L).
3. Aktivasi *heat exchanger* eksternal untuk mengkompensasi *Joule-Thomson cooling* (ΔT hingga −25 K pada ekspansi isenthalpic).
4. Setpoint regulasi PID: jaga T_inlet – T_bed ≤ 10 K untuk menghindari degradasi termal cannabinoid.

**Tahap 3: Extraction Steady-State (Durasi: 60–180 menit)**
1. Pertahankan P = 15–30 MPa dan T = 313–343 K dengan toleransi ±0,5 MPa dan ±1 K.
2. CO₂ flow rate: 2–10 kg/jam per liter volume vessel (S/F ratio optimal = 15–25).
3. Sampling rutin setiap 15 menit untuk analisis HPLC cannabinoid profile.
4. *Dynamic pressure letdown* menggunakan back-pressure regulator dengan choke valve bertahap.

**Tahap 4: Depressurization & Collection (Durasi: 10–30 menit)**
1. Controlled depressurization ramp-down 1–3 MPa/min.
2. Pemulihan *enthalpy* ke separator pada T = 308–318 K, P = 5–6 MPa.
3. Winterisasi (winterization) pada etanol-el