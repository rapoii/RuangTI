# 2298 — Pemodelan Aliran Aksisimetrik dan Perpindahan Panas pada Ekstraksi Minyak Kanabis dengan CO₂ Superkritikal

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO2 process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botanol dan fitofarmaka global mengalami transformasi signifikan sejak diterapkannya kerangka regulasi legal untuk kanabis medis di berbagai yurisdiksi (Kanada, Jerman, Australia, Thailand, dan beberapa negara bagian AS). Menurut Obchoei & Limtrakarn (2024) yang dipublikasikan di *International Journal of Thermofluids*, kebutuhan akan proses ekstraksi yang efisien, *scalable*, dan sesuai *Good Manufacturing Practice* (GMP) mendorong adopsi masif teknologi **Supercritical Fluid Extraction with CO₂ (SFE-CO₂)** menggantikan pelarut organik hidrokarbon seperti butana, heksana, dan etanol yang memiliki profil toksikologis dan keamanan kerja kurang menguntungkan (Obchoei & Limtrakarn, 2024; DOI: [10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)).

Urgensi operasional dan ekonomi dari proses ini bersifat multidimensional. Dari perspektif *capex*, satu unit ekstraktor SFE-CO₂ industri berkapasitas 100 L berkisar USD 250.000–800.000, jauh melampaui ekstraktor pelarut organik konvensional; namun *opex*-nya lebih rendah karena CO₂ daur ulang (*closed-loop recovery*) mencapai 95–98% dan tidak ada biaya pembuangan pelarut hazardous. Dari perspektif kualitas produk, SFE-CO₂ menghasilkan ekstrak kanabis dengan profil cannabinoid (THC, CBD, CBG, CBN) dan terpenoid yang lebih *intact*, tanpa residu pelarut, memenuhi standar farmakope USP/EP untuk produk inhalasi (*vape cartridge*) dan edible farmasi (Toledo & del Valle, 2023; DOI: [10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)).

Konteks termodinamis menjelaskan mengapa CO₂ menjadi fluida superkritikal pilihan: titik kritisnya (T_c = 31,1 °C, P_c = 73,8 bar) mudah dicapai dengan peralatan industri standar, sementara densitas fase superkritikalnya (ρ ≈ 600–900 kg/m³ pada 150–300 bar) mendekati fase cair dan daya solvasi fluidanya mendekati gas, menghasilkan koefisien transfer massa yang superior. Namun, perilaku sifat transport ini **sangat non-linear** di dekat titik kritis, sehingga pemodelan berbasis asumsi fluida ideal atau *constant-property* akan menghasilkan deviasi >30% dibanding eksperimen — inilah mengapa Obchoei & Limtrakarn (2024) mengembangkan model aliran aksisimetrik dengan persamaan keadaan *real-fluid* dan Toledo & del Valle (2023) memvalidasi model perpindahan panas transien untuk tahap *pressurization*, *extraction*, dan *depressurization*.

Konteks industri yang lebih luas mencakup integrasi proses hilir: *winterization*, *decarboxylation*, dan *distillasi molekuler*. Setiap subsistem memiliki jendela operasi yang sensitif terhadap profil suhu-tekanan dari hasil ekstraksi, sehingga kontrol proses SFE-CO₂ menjadi titik kendali kritis (*Critical Control Point* — CCP) dalam kerangka HACCP farmasi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Geometri dan Asumsi Aksisimetrik

Bejana ekstraktor SFE-CO₂ berbentuk silinder vertikal berdiameter dalam tipikal 50–300 mm dan tinggi 500–2000 mm. Asumsi $\partial/\partial\theta = 0$ (sistem koordinat silinder $(r, \theta, z)$) menyederhanakan domain 3D menjadi domain 2D $(r, z)$, menurunkan biaya komputasi CFD hingga 80% tanpa kehilangan akurasi fisis yang berarti, sebagaimana dilakukan Obchoei & Limtrakarn (2024).

### 2.2 Persamaan Kontinuitas dan Momentum (Darcy-Forchheimer)

Untuk media berpori (packed bed biomassa kanabis), persamaan momentum yang lazim digunakan adalah **persamaan Darcy-Forchheimer**:

$$\frac{\partial}{\partial t}(\varepsilon \rho) + \nabla \cdot (\rho \mathbf{u}) = 0 \quad \text{(1)}$$

$$\frac{\rho}{\varepsilon}\left(\frac{\partial \mathbf{u}}{\partial t} + \frac{\mathbf{u}\cdot\nabla \mathbf{u}}{\varepsilon}\right) = -\nabla p + \mu \nabla^2 \mathbf{u} - \frac{\mu}{K}\mathbf{u} - \frac{C_F \rho |\mathbf{u}|}{\sqrt{K}}\mathbf{u} + \rho \mathbf{g} \quad \text{(2)}$$

dengan $\varepsilon$ porositas bed (tipikal 0,35–0,45 untuk biomassa kanabis tergiling), $K$ permeabilitas intrinsik (m²), $C_F$ koefisien inersia Forchheimer, $\rho$ densitas CO₂ superkritikal, $\mu$ viskositas dinamis.

### 2.3 Persamaan Energi Transien

Toledo & del Valle (2023) menurunkan persamaan energi transien untuk media berpori dengan sumber kalor kompresi dan ekspansi Joule-Thomson:

$$\varepsilon \rho c_p \frac{\partial T}{\partial t} + \rho c_p \mathbf{u} \cdot \nabla T = \nabla \cdot (k_{eff} \nabla T) + \beta T \frac{\partial p}{\partial t} - \mathbf{u} \cdot \nabla p + \Phi_v \quad \text{(3)}$$

di mana $\beta$ adalah koefisien ekspansi termal CO₂ superkritikal (sangat tinggi di dekat titik kritis, $\beta \sim 10^{-3}$ K⁻¹), $k_{eff} = \varepsilon k_f + (1-\varepsilon)k_s$ konduktivitas efektif bed, dan $\Phi_v$ fungsi disipasi viskos. Istilah $\beta T \partial p/\partial t$ merepresentasikan pemanasan kompresi adiabatik yang dapat meningkatkan suhu bed hingga 8–12 °C pada *pressurization* cepat.

### 2.4 Persamaan Spesies untuk Transfer Massa Cannabinoid

Untuk konsentrasi cannabinoid $c_i$ dalam fase fluida:

$$\varepsilon \frac{\partial c_i}{\partial t} + \mathbf{u} \cdot \nabla c_i = \nabla \cdot (\varepsilon D_{eff,i} \nabla c_i) + (1-\varepsilon) k_s a_s (c_{s,i}^* - c_i) \quad \text{(4)}$$

dengan $D_{eff,i}$ koefisien dispersi efektif, $k_s$ koefisien transfer massa eksternal, $a_s$ luas spesifik partikel (m²/m³), $c_{s,i}^*$ konsentrasi kesetimbangan terlarut yang ditentukan oleh **solubility model Chrastil**:

$$c_{s,i}^* = \rho_f^{n} \exp\left(\frac{a}{T} + b\right) \quad \text{(5)}$$

dengan parameter $n, a, b$ spesifik untuk masing-masing cannabinoid (THC dan CBD memiliki kelarutan berbeda, biasanya CBD lebih polar dan kurang larut dibanding THC pada tekanan rendah).

### 2.5 Persamaan Keadaan untuk Sifat Termodinamika CO₂

Sifat transport CO₂ superkritikal tidak dapat didekati sebagai fluida ideal. Obchoei & Limtrakarn (2024) menggunakan persamaan keadaan **Span-Wagner** dengan akurasi <0,1% untuk rentang operasi SFE:

$$p = \rho R T \left[1 + \delta(\tau, \delta)\right] \quad \text{(6)}$$

dengan $\delta = \rho/\rho_c$ dan $\tau = T_c/T$ variabel reduksi, dan $\phi$ adalah faktor kompresibilitas Helmholtz eksplisit (32 koefisien).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri mengikuti alur proses berikut:

**Tahap A — *Pressurization*:** Bejana diisi biomassa kanabis (rata-rata $m_b = 5–50$ kg per batch), divakum (<50 mbar) untuk menghilangkan udara dan uap air. CO₂ dari tangki storage dipompa oleh *diaphragm pump* atau *piston pump* hingga tekanan kerja $P_{op}$ (150–300 bar). Laju pressurisasi harus dikontrol $\leq 5$ bar/menit untuk mencegah gradien termal merusak biomassa dan material packing. Toledo & del Valle (2023) menunjukkan bahwa ramp rate yang terlalu tinggi menyebabkan *thermal shock* pada dinding bejana dan heterogenitas suhu radial yang menurunkan yield hingga 12%.

**Tahap B — *Extraction* (Static + Dynamic):**
- **Fase statis (soaking):** CO₂ superkritikal dipertahankan kontak dengan biomassa selama 15–60 menit