# 2666 — Pemodelan Aliran Aksisimetrik dan Transfer Panas pada Ekstraksi Minyak Kanabis dengan CO₂ Superkritis: Integrasi Model CFD dan Termodinamika Proses

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO2 process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botanol—khususnya produksi minyak kanabis (*Cannabis sativa* L.) berkualitas farmasi—telah mengalami transformasi teknologi masif sejak diterimanya *Supercritical Fluid Extraction* (SFE) dengan CO₂ sebagai alternatif pelarut organik berbahaya seperti heksana, etanol, atau kloroform. Menurut Obchoei & Limtrakarn (2024) dalam *International Journal of Thermofluids*, pasar global *cannabidiol* (CBD) diproyeksikan menembus USD 13 miliar pada 2030 dengan CAGR >16%, sehingga efisiensi ekstraktor SC-CO₂ menjadi variabel kompetitif yang menentukan margin operasional perusahaan kanabis medis (Obchoei & Limtrakarn, 2024, DOI: 10.1016/j.ijft.2024.100682).

Namun, desain ekstraktor SC-CO₂ masih menghadapi tantangan rekayasa yang substansial: (1) distribusi fluida yang tidak seragam dalam *packed bed* biomassa menyebabkan *channeling* dan zona mati; (2) perpindahan massa intra-partikel (*intraparticle diffusion*) yang terbatas menentukan yield; serta (3) perilaku termal selama tahap *pressurization*, *extraction*, dan *depressurization* sangat memengaruhi selektivitas cannabinoid dan degradasi termal *terpenoid* (Toledo & del Valle, 2023, DOI: 10.1016/j.supflu.2023.106046). Tanpa pemodelan yang akurat, biaya CapEx per ekstraktor industri (kapasitas 200 L) dapat mencapai USD 250.000–500.000 dengan *downtime* yang merugikan akibat parameter operasi yang tidak optimal.

Urgensi ekonominya adalah: setiap peningkatan 5% yield ekuivalen dengan tambahan pendapatan ~USD 40.000/tahun untuk fasilitas mid-scale. Obchoei & Limtrakarn (2024) menjawab kebutuhan ini dengan mengusulkan model aliran aksisimetrik 2-D yang mengintegrasikan dinamika fluida komputasional (*CFD*) dengan kinetika pelarutan solut, sementara Toledo & del Valle (2023) melengkapi dimensi termal proses melalui validasi model transfer panas transien. Sinergi kedua paper ini membentuk kerangka rekayasa sistem yang memungkinkan *scale-up* yang aman dan optimal untuk kapasitas pilot hingga komersial.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Model Aliran Aksisimetrik (Obchoei & Limtrakarn, 2024)

Obchoei & Limtrakarn (2024) membangun model 2-D aksisimetrik dengan menyederhanakan geometri bejana ekstraksi menjadi silinder vertikal dengan sumbu simetri pada $r = 0$. Governing equations yang digunakan adalah Reynolds-Averaged Navier-Stokes (RANS) dengan pendekatan turbulensi $k$–$\varepsilon$.

**Persamaan Kontinuitas:**
$$\frac{\partial}{\partial z}\left(\rho u_z\right) + \frac{1}{r}\frac{\partial}{\partial r}\left(r \rho u_r\right) = 0$$

dengan $u_z$ dan $u_r$ masing-masing adalah komponen kecepatan aksial dan radial, serta $\rho$ densitas CO₂ superkritis yang bergantung pada tekanan dan temperatur menurut persamaan keadaan Span-Wagner:

$$\rho_{CO_2}(P, T) = \rho_c \left[ 1 + \delta'(\tau, \delta) \right]$$

**Persamaan Momentum (RANS):**
$$\rho \left( u_z \frac{\partial u_z}{\partial z} + u_r \frac{\partial u_z}{\partial r} \right) = -\frac{\partial P}{\partial z} + \frac{\partial}{\partial z}\left[\mu_{eff}\frac{\partial u_z}{\partial z}\right] + \frac{1}{r}\frac{\partial}{\partial r}\left[r \mu_{eff}\frac{\partial u_z}{\partial r}\right] - \frac{\partial \overline{u_z' u_r'}}{\partial r} + \rho g_z$$

$$\rho \left( u_z \frac{\partial u_r}{\partial z} + u_r \frac{\partial u_r}{\partial r} \right) = -\frac{\partial P}{\partial r} + \frac{\partial}{\partial z}\left[\mu_{eff}\frac{\partial u_r}{\partial z}\right] + \frac{1}{r}\frac{\partial}{\partial r}\left[r \mu_{eff}\frac{\partial u_r}{\partial r}\right] - \frac{\partial \overline{u_r' u_r'}}{\partial r}$$

dengan $\mu_{eff} = \mu_{laminar} + \mu_t$ dan viskositas turbulen $\mu_t = \rho C_\mu \frac{k^2}{\varepsilon}$, $C_\mu = 0{,}09$.

**Persamaan Energi & Kinetika Pelarutan (Integral):**

Mass transfer dari matriks padat ke fasa SC-CO₂ dimodelkan dengan pendekatan *shrinking core* yang dikoreksi dengan koefisien transfer massa eksternal $k_f$:

$$N_A = k_f \cdot a_v \cdot (C^* - C_b)$$

dengan $C^*$ adalah konsentrasi jenuh cannabinoid dalam SC-CO₂ (fungsi $P,T$ dan solubilitas), $C_b$ konsentrasi bulk, dan $a_v$ luas spesifik partikel. Yield kumulatif didekresi sebagai:

$$\frac{dM_{extracted}}{dt} = \int_{V_{bed}} k_f \cdot a_v \cdot (C^* - C_b) \, dV$$

### 2.2. Model Transfer Panas Transien (Toledo & del Valle, 2023)

Toledo & del Valle (2023) melengkapi model dengan persamaan energi transien yang diselesaikan untuk tiga tahap proses. Pada tahap *pressurization*, fluida masuk dari kondisi ambien menuju kondisi superkritis dengan laju perubahan densitas tinggi, sehingga termal inersia sistem menjadi dominan.

**Persamaan Energi Lumped (untuk dinding bejana):**
$$\rho_w c_{p,w} V_w \frac{dT_w}{dt} = h_i A_i (T_{CO_2}(t) - T_w) - h_o A_o (T_w - T_{amb})$$

dengan $h_i$ koefisien konveksi internal yang dihitung dari korelasi Sieder-Tate untuk aliran dalam pipa:

$$Nu = \frac{h_i D}{k_f} = 0{,}027 \cdot Re^{0{,}8} \cdot Pr^{1/3} \cdot \left(\frac{\mu_b}{\mu_w}\right)^{0{,}14}$$

**Persamaan Energi untuk Bed Biomass:**

Pada tahap ekstrakasi, energi diserap/dilepaskan oleh desorpsi solut dan perubahan fasa:

$$\varepsilon \rho_f c_{p,f} \frac{\partial T_f}{\partial t} + (1-\varepsilon)\rho_s c_{p,s}\frac{\partial T_s}{\partial t} = -u_z \rho_f c_{p,f}\frac{\partial T_f}{\partial z} + k_{eff}\nabla^2 T + \dot{q}_{desorption}$$

dengan $\varepsilon$ porositas bed, $k_{eff}$ konduktivitas efektif (Wakao-Kaguei: $k_{eff} = \varepsilon k_f + (1-\varepsilon)k_s$), dan $\dot{q}_{desorption}$ fluks panas desorpsi (orde 30–50 kJ/kg untuk cannabinoid).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri mengikuti SOP yang divalidasi oleh kedua paper:

**Tahap A — Preparasi Biomassa (Pre-processing):**
1. Pengeringan bunga kanabis pada $T = 38 \pm 2°C$, RH < 15% selama 48 jam hingga *moisture content* ≤ 10% (basis basah).
2. Penggilingan hingga ukuran partikel $d_p = 0{,}5$–$2{,}0$ mm (Obchoei & Limtrakarn, 2024 merekomendasikan $d_p \approx 1$ mm untuk keseimbangan *intra-particle diffusion* vs *pressure drop*).
3. Pengisian *extractor vessel* dengan porositas target $\varepsilon = 0{,}40 \pm 0{,}02$.

**Tahap B — Pressurization:**
1. Evakuasi udara hingga tekanan absolut $P \leq 0{,}05$ MPa (vakum basah, $T = 40°C$).
2. Injeksi CO₂ dengan laju $0{,}5$ kg/menit sambil memantau gradient termal $< 5°C/menit$ (Toledo & del Valle, 2023).
3. Pencapaian *set-point* operasi: $P = 25$ MPa, $T = 333$ K ($60°C$) sesuai rekomendasi Obchoei & Limtrakarn (2024) untuk yield THC/CBD optimal.

**Tahap C — Ekstraksi Dinamis:**
1. Aliran SC-CO₂ secara *co-current* dari bawah ke atas dengan laju $Q = 2$–$4$ L/menit (superficial velocity $u_s \approx 0{,}001$ m/s).
2. Pencatatan profil $P(z)$, $T(z,t)$, dan $\Delta P$ tiap 60 detik untuk validasi model CFD.
3. Sampling outlet tiap 15 menit untuk analisis HPLC cannabinoid.

**Tahap D — Depressurization & Recovery:**
1. Penurunan tekanan bertahap ($dP/dt = -0{,}5$ MPa/menit) untuk mencegah *thermal shock* dan menjaga integritas terpena volatil.
2. Pemisahan padatan-cair di *separator* ($P_{sep} = 5{,}5$ MPa, $T_{sep} = 313$ K).
3. Pemulihan CO₂ dengan回收 (*recirc*) >95%.

Diagram alir proses mengikuti arsitektur **P&ID standar ASME B31.3** untuk bejana tekan, dengan integrasi sensor IoT untuk umpan balik real-time ke model digital twin.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Ekstraktor SC-CO₂ kapasitas 200 L (PT. Industri Fitobotani Nusantara, hipotetis). Parameter: $P_{op} = 25$ MPa, $T_{op} = 333$ K, $d_p = 1{,}0$ mm, $Q_{CO_2} = 3$ L/menit, biomassa $m_{bed} = 50$ kg.

### Langkah 1: Perhitungan Sifat Fisik SC-CO₂
Berdasarkan Span-Wagner pada $P = 25$ MPa, $T = 333$ K:
- $\rho_{CO_2} = 780{,}5$ kg/m³
- $\mu_{CO_2} = 7{,}05 \times 10^{-5}$ Pa·s
- $k_{CO_2} = 0{,}108$ W/(m·K)
- $c_{p,CO_2} = 1450$ J/(kg·K)

### Langkah 2: Reynolds Number Packed Bed
Diameter partikel $d_p = 1{,}0 \times 10^{-3}$ m, superficial velocity $u_s = Q/A = (3 \times 10^{-3}/60)/(\pi (0{,}1)^{2}) = 1{,}59 \times 10^{-3}$ m/s:

$$Re_p = \frac{\rho_{CO_2