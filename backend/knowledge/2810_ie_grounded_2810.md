# 2810 — Pemodelan Aliran Aksisimetrik dan Perpindahan Panas pada Ekstraksi Minyak Kanabis dengan Fluida Superkritik CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Ekstraksi fluida superkritik (Supercritical Fluid Extraction/SFE) berbasis karbon dioksida (CO₂) telah menjadi teknologi utama dalam industri fitokimia, nutrasetikal, dan farmasi karena sifatnya yang non-toksik, tidak mudah terbakar, serta kemampuannya untuk dimurnikan melalui depresurisasi tanpa residu pelarut organik (Obchoei & Limtrakarn, 2024). Dalam satu dekade terakhir, pertumbuhan permintaan global terhadap produk kanabis medis (medical cannabis) telah mendorong kebutuhan akan proses ekstraksi yang presisi, reproducible, dan符合 regulasi GAP (Good Agricultural Practice) serta GMP (Good Manufacturing Practice). Menurut Obchoei dan Limtrakarn (2024) dalam makalahnya yang dipublikasikan di *International Journal of Thermofluids*, efisiensi ekstraksi minyak kanabis sangat bergantung pada dinamika aliran internal di dalam bejana ekstraktor, di mana gradien tekanan, suhu, dan konsentrasi yang tidak homogen dapat menurunkan yield cannabinoid hingga 15–25% dibandingkan proses ideal isotermal-isobarik.

Urgensi teknis ini diperkuat oleh Toledo dan del Valle (2023) dalam seri pertama riset mereka di *The Journal of Supercritical Fluids*, yang menunjukkan bahwa tahap *pressurization*, *extraction*, dan *depressurization* memiliki profil perpindahan panas yang sangat berbeda. Tahap *pressurization* bersifat eksotermik akibat kompresi near-isothermal gas, tahap *extraction* mendekati adiabatic di tengah bejana namun memiliki gradien radial signifikan di dekat dinding, sedangkan tahap *depressurization* mengalami pendinginan joule-thomson yang drastis (ΔT hingga 30–50 K) yang berpotensi merusak termolabilitas cannabinoid seperti THCA dan CBDA. Secara ekonomis, pasar kanabis medis global diproyeksikan mencapai USD 65–70 miliar pada 2028, di mana efisiensi proses SFE berdampak langsung pada biaya produksi per kilogram ekstrak. Industri farmasi seperti Canopy Growth, Tilray, dan Aurora telah mengadopsi sistem SFE komersial dengan kapasitas bejana 100–2000 liter, sehingga kemampuan memodelkan perilaku aliran dan perpindahan panas secara aksisimetrik menjadi kebutuhan strategis untuk *scale-up* yang aman, efisien energi, dan patuh regulasi.

Dalam konteks Teknik Industri, fenomena ini tidak sekadar persoalan teknik kimia, melainkan persoalan optimasi sistem manufaktur yang melibatkan kapasitas produksi, kualitas produk (konsistensi profil cannabinoid), konsumsi energi (listrik untuk kompresi dan termal untuk pemanasan awal), serta keandalan alat (*mean time between failure*). Oleh karena itu, integrasi model Computational Fluid Dynamics (CFD) aksisimetrik dengan model perpindahan panas multivariat menjadi pilar penting dalam rekayasa proses SFE modern.

---

## 2. Landasan Teori & Formulasi Matematis

Model yang dikembangkan oleh Obchoei dan Limtrakarn (2024) menggunakan formulasi aksisimetrik 2D dalam koordinat silinder $(r, z)$ dengan asumsi $\partial/\partial\theta = 0$, sehingga domain komputasi direduksi menjadi penampang meridional dari bejana ekstraktor silinder. Persamaan konservasi yang diselesaikan adalah:

**Persamaan Kontinuitas (kontinuitas massa):**

$$\frac{\partial \rho}{\partial t} + \frac{1}{r}\frac{\partial (r \rho u_r)}{\partial r} + \frac{\partial (\rho u_z)}{\partial z} = 0$$

di mana $\rho$ adalah densitas CO₂ superkritik, $u_r$ dan $u_z$ adalah komponen kecepatan radial dan aksial.

**Persamaan Momentum Radial:**

$$\frac{\partial (\rho u_r)}{\partial t} + \frac{1}{r}\frac{\partial (r \rho u_r^2)}{\partial r} + \frac{\partial (\rho u_r u_z)}{\partial z} = -\frac{\partial p}{\partial r} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_r}{\partial r}\right) + \frac{\partial^2 u_r}{\partial z^2} - \frac{u_r}{r^2}\right] - \frac{\mu}{K}u_r - \frac{F_{Br}}{\varepsilon}u_r|\mathbf{u}|$$

**Persamaan Momentum Aksial:**

$$\frac{\partial (\rho u_z)}{\partial t} + \frac{1}{r}\frac{\partial (r \rho u_r u_z)}{\partial r} + \frac{\partial (\rho u_z^2)}{\partial z} = -\frac{\partial p}{\partial z} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_z}{\partial r}\right) + \frac{\partial^2 u_z}{\partial z^2}\right] - \rho g - \frac{\mu}{K}u_z - \frac{F_{Br}}{\varepsilon}u_z|\mathbf{u}|$$

di mana $K$ adalah permeabilitas intrinsik matriks padat (bed cannabis ground), $\varepsilon$ adalah porositas bed (0.3–0.5), $F_{Br}$ adalah koefisien hambatan Brinkman–Forchheimer, dan $\mu$ adalah viskositas dinamis CO₂.

**Persamaan Energi (disertai viscous dissipation dan reaksi sumber):**

$$\frac{\partial (\rho c_p T)}{\partial t} + \frac{1}{r}\frac{\partial (r \rho c_p u_r T)}{\partial r} + \frac{\partial (\rho c_p u_z T)}{\partial z} = \frac{1}{r}\frac{\partial}{\partial r}\left(r k_{eff}\frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k_{eff}\frac{\partial T}{\partial z}\right) + \Phi_v + Q_{source}$$

dengan $k_{eff} = \varepsilon k_{CO_2} + (1-\varepsilon) k_{bed}$ sebagai konduktivitas efektif, dan $\Phi_v$ adalah fungsi disipasi viskos:

$$\Phi_v = 2\mu\left[\left(\frac{\partial u_r}{\partial r}\right)^2 + \left(\frac{\partial u_z}{\partial z}\right)^2 + \frac{1}{2}\left(\frac{\partial u_z}{\partial r} + \frac{\partial u_r}{\partial z}\right)^2 + \frac{u_r^2}{r^2}\right]$$

**Persamaan Transport Spesies (Cannabinoid dalam fase superkritik):**

$$\frac{\partial (\rho Y_i)}{\partial t} + \nabla \cdot (\rho \mathbf{u} Y_i) = \nabla \cdot (\rho D_{eff,i} \nabla Y_i) + \dot{m}_i$$

di mana $Y_i$ adalah fraksi massa cannabinoid $i$ (THC, CBD, CBG, dll.), $D_{eff,i}$ adalah difusivitas efektif, dan $\dot{m}_i$ adalah laju pelepasan spesies dari matriks padat.

**Model Kelarutan Chrastil:**

Kelarutan cannabinoid dalam CO₂ superkritik dimodelkan dengan persamaan Chrastil (1982):

$$\ln(c_i) = k_i \ln(\rho) + \frac{a_i}{T} + b_i$$

dengan $k_i$ adalah parameter asosiasi, $a_i = -\Delta H_{sol}/R$, dan $b_i$ konstanta empiris.

Untuk sifat termodinamika CO₂, digunakan persamaan keadaan Peng–Robinson:

$$P = \frac{RT}{v-b} - \frac{a(T)}{v(v+b) + b(v-b)}$$

dengan aturan pencampuran van der Waals untuk sistem CO₂ + cannabinoid.

Toledo dan del Valle (2023) melengkapi kerangka ini dengan model perpindahan panas transien untuk tiga tahap operasi:

**Tahap Pressurization (model unsteady 1D radial):**

$$\rho c_p \frac{\partial T}{\partial t} = \frac{1}{r}\frac{\partial}{\partial r}\left(r k_{eff}\frac{\partial T}{\partial r}\right) + \rho c_p \frac{1}{\varepsilon}\frac{\partial p}{\partial t}\frac{T}{\rho}\beta_T$$

di mana $\beta_T = -\frac{1}{V}\left(\frac{\partial V}{\partial T}\right)_P$ adalah koefisien ekspansi termal isobarik.

**Koefisien perpindahan panas konvektif di dinding:**

$$Nu = \frac{h D_h}{k_{CO_2}} = 0.023 Re^{0.8} Pr^{0.4}$$

untuk aliran turbulen dalam pipa/bejana.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri dari model aksisimetrik dan heat transfer ini mengikuti prosedur operasional standar yang distandarisasi sebagai berikut:

**Tahap 1: Preparasi Material dan Pre-treatment**

Bahan baku cannabis biomassa (bunga/trim kering dengan kadar air 8–12% w/w) digiling hingga ukuran partikel 0.5–2.0 mm untuk mengoptimalkan luas kontak dan permeabilitas bed. Karakterisasi awal meliputi: kadar air (loss on drying, ASTM E1756), kadar cannabinoid total (HPLC-UV), serta densitas bulk dan porositas bed. Nilai tipikal $\varepsilon = 0.38$ dan $K = 1.2 \times 10^{-9}\ \text{m}^2$ digunakan sebagai input awal.

**Tahap 2: Pressurization (1–3 menit)**

Bejana ekstraktor diisi dengan CO₂ secara gradual dari tekanan atmosfer menuju tekanan operasi (250–350 bar). Laju pressurisasi $\partial p/\partial t = 1.5$–$3.0$ bar/detik harus dikontrol untuk menghindari gradien suhu eksotermik berlebihan (>40°C) yang dapat mendegradasi termolabil cannabinoid. Heater jacket pre-heater diaktifkan terlebih dahulu untuk mengkondisikan suhu dinding 5–10°C di atas setpoint operasi (40–55°C) sebagai kompensasi *heat loss*.

**Tahap 3: Extraction (60–240 menit)**

CO₂ superkritik dialirkan secara *co-current* dari bawah ke atas bejana dengan flow rate 5–20 kg/jam (tergantung skala). Rasio solvent-to-feed (S/F) dijaga pada 20–60 untuk memastikan ekstraksi mendekati kesetimbangan. Tekanan operasi dikontrol dengan *back pressure regulator* (BPR) dengan akurasi ±1 bar. Pemantauan suhu multi-titik (3–5 thermocouple dalam konfigurasi aksisimetrik r-z) dilakukan untuk validasi model.

**Tahap 4: Separation (1–3 stage cascade)**

Campuran CO₂ + cannabinoid masuk ke separator (1–3 stage) pada tekanan lebih rendah (50–90 bar) dan suhu lebih tinggi (40–60°C), di mana cannabinoid mengendap karena kelarutan turun drastis. Sisa CO₂ dicairkan dan didaur ulang.

**Tahap 5: Depressurization (5–10 menit)**

Depresurisasi bertahap dari tekanan operasi ke atmosfer dengan laju 0.5–1.0 bar/detik. Sistem pendingin (*chiller*) diaktifkan untuk menyerap efek *Joule–Thomson cooling* yang dapat menurunkan suhu dinding di bawah 0°C dan menyebabkan kondensasi es atau bahkan kerusakan material bejana.

**Diagram Alir Proses (textual representation):**

$$\text{CO}_2\ \text{tank} \rightarrow \text{Cooler}\ (5°C) \rightarrow \text{Pump} \rightarrow \text{Pre-heater} \rightarrow \text{Extractor (P, T, t)} \rightarrow \