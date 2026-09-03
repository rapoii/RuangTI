# 2890 — Pemodelan Aliran Aksisimetrik dan Transfer Panas pada Ekstraksi Minyak Kanabis dengan Fluida Superkritis CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri  
**Topik Spesifik:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process  
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)  
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri kanabis legal—terutama untuk aplikasi farmasi, nutraseutika, dan kosmetik—telah mengalami transformasi struktural sejak dekade terakhir. Menurut proyeksi pasar global, nilai ekonomis derivatif kanabis (utamanya *cannabidiol*/CBD dan *tetrahydrocannabinol*/THC) melampaui USD 30 miliar pada 2024, dengan CAGR > 17% (Obchoei & Limtrakarn, 2024). Dalam konteks ini, pemilihan teknologi ekstraksi bukan sekadar keputusan teknik, melainkan keputusan rantai pasok strategis karena menentukan kemurnian, jejak karbon, biaya modal (CAPEX), dan kelayakan regulatoris. Metode konvensional seperti ekstraksi Soxhlet dengan pelarut organik (etanol, heksana) menghadapi masalah residu pelarut, termolabilitas cannabinoid, serta throughput rendah untuk skala industri.

Fluidisasi superkritis dengan CO₂ (sc-CO₂) muncul sebagai *green technology* dominan karena CO₂ memiliki kondisi kritis yang mudah dicapai ($T_c = 304{,}13$ K; $P_c = 7{,}38$ MPa), tidak toksik, tidak mudah terbakar, dan dapat di-recycle sehingga biaya operasional jangka panjang turun (Toledo & del Valle, 2023). Namun, investasi modal pada vessel tekanan tinggi (10–30 MPa) dan kebutuhan energi untuk kompresi, pemanasan awal, dan *depressurization* menciptakan *trade-off* yang harus dioptimasi melalui pemodelan matematis yang akurat. Tanpa model yang valid, operator industri menghadapi *trial-and-error* mahal dalam menentukan laju alir, tekanan optimum, dan waktu siklus.

Paper Obchoei & Limtrakarn (2024) menjawab kebutuhan ini dengan membangun model aliran aksisimetrik dua dimensi yang memodelkan dinamika fluida di dalam ekstraktor berbentuk silinder, memperhitungkan fenomena konveksi-paksa, difusi, dan gradien konsentrasi cannabinoid sepanjang sumbu dan radial. Sementara itu, Toledo & del Valle (2023) melengkapi celah pengetahuan tentang perpindahan panas transien di ketiga tahap siklus (pressurization, extraction, depressurization)—sebuah aspek yang secara historis sering diabaikan padahal sangat menentukan selektivitas dan yield karena kelarutan (*solubility*) cannabinoid dalam sc-CO₂ sangat sensitif terhadap temperatur. Integrasi kedua perspektif ini menghasilkan kerangka keputusan teknik industri yang utuh: dari desain vessel, sizing kompresor, hingga scheduling batch.

Signifikansi ekonominya langsung: variasi 1 MPa pada tekanan operasi dapat mengubah yield 5–15% karena kurva kelarutan *cannabinoid* non-linear (Obchoei & Limtrakarn, 2024). Oleh karena itu, modul ini akan membangun kemampuan kuantitatif bagi praktisi teknik industri untuk (a) memodelkan profil aliran dan konsentrasi dalam ekstraktor sc-CO₂, (b) mengkuantifikasi energi yang dibutuhkan untuk mempertahankan profil temperatur isothermal, dan (c) menentukan *set-point* operasi optimal untuk aplikasi spesifik.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Geometri Aksisimetrik dan Asumsi Dasar

Vessel ekstraksi sc-CO₂ berbentuk silinder dengan panjang $L$ dan radius internal $R$. Model aksisimetrik memanfaatkan simetri rotasional sehingga masalah 3D direduksi menjadi domain 2D $(r, z)$. Kecepatan tangensial $\vec{u}_\theta = 0$, dan seluruh gradien terhadap $\theta$ nol. Domain komputasional direpresentasikan sebagai elemen porous yang mengandung partikel biomassa kanabis.

### 2.2 Persamaan Kontinuitas

Untuk fluida nyata dengan densitas variabel, bentuk konservatif:

$$\frac{\partial \rho}{\partial t} + \frac{1}{r}\frac{\partial (r \rho u_r)}{\partial r} + \frac{\partial (\rho u_z)}{\partial z} = 0$$

dengan $\rho$ densitas sc-CO₂ (kg/m³), $u_r$ dan $u_z$ komponen kecepatan dalam arah radial dan aksial.

### 2.3 Persamaan Momentum (Navier-Stokes untuk Media Porous)

Karena ekstraktor berisi packed bed biomassa, digunakan model Brinkman–Forchheimer–Darcy yang dikoreksi:

$$\rho\left(\frac{\partial \vec{u}}{\partial t} + \vec{u}\cdot\nabla\vec{u}\right) = -\nabla p + \mu_{\text{eff}}\nabla^2\vec{u} + \rho\vec{g} - \frac{\mu}{K}\vec{u} - \frac{\rho C_F}{\sqrt{K}}|\vec{u}|\vec{u}$$

dengan $K$ permeabilitas intrinsik (m²), $C_F$ koefisien inersia Forchheimer, dan $\mu_{\text{eff}}$ viskositas efektif. Permeabilitas packed bed diprediksi oleh persamaan Kozeny–Carman:

$$K = \frac{\phi^3 d_p^2}{180(1-\phi)^2}$$

dengan $\phi$ porositas bed dan $d_p$ diameter ekuivalen partikel (m).

### 2.4 Persamaan Energi (Heat Transfer Transien)

Mengacu pada kerangka Toledo & del Valle (2023), persamaan energi untuk dinding vessel dan isinya:

$$\rho c_p \frac{\partial T}{\partial t} = k_{\text{eff}}\nabla^2 T + \Phi_{\text{visc}} + \dot{q}_{\text{source}}$$

di mana $\Phi_{\text{visc}}$ adalah disipasi viskos dan $k_{\text{eff}}$ konduktivitas efektif termal yang menggabungkan konduksi solid–fluid:

$$k_{\text{eff}} = \phi k_f + (1-\phi) k_s$$

Sumber panas selama *pressurization* utamanya adalah kerja kompresi adiabatik:

$$W_{\text{comp}} = \frac{\gamma}{\gamma - 1} R_g T_1 \left[\left(\frac{P_2}{P_1}\right)^{(\gamma-1)/\gamma} - 1\right]$$

dengan $\gamma = c_p/c_v$ untuk CO₂, $R_g$ konstanta gas spesifik, dan $T_1$, $P_1$ kondisi sebelum kompresi.

### 2.5 Persamaan Spesies (Transport Cannabinoid)

Untuk solute (campuran CBD, THC, dan terpenoid), persamaan konveksi–difusi dalam packed bed:

$$\varepsilon \frac{\partial C}{\partial t} + \vec{u}\cdot\nabla C = \nabla\cdot(D_{\text{eff}}\nabla C) - (1-\varepsilon)\rho_s k_s(C_s^* - C)$$

dengan $C$ konsentrasi bulk cannabinoid dalam fasa superkritis (kg/m³), $C_s^*$ konsentrasi kesetimbangan (kelarutan), $D_{\text{eff}}$ koefisien difusi efektif, $\rho_s$ densitas padatan biomassa, dan $k_s$ koefisien transfer massa eksternal–internal.

### 2.6 Persamaan Keadaan CO₂ Superkritis

Hubungan PVT dideskripsikan oleh persamaan keadaan Peng–Robinson:

$$P = \frac{R_g T}{v - b} - \frac{a(T)}{v(v+b) + b(v-b)}$$

dengan parameter $a(T) = 0{,}45724 R_g^2 T_c^2 / P_c \cdot \alpha(T)$, $b = 0{,}07780 R_g T_c / P_c$, dan $\alpha(T) = [1 + \kappa(1-\sqrt{T/T_c})]^2$.

### 2.7 Bilangan Tak Berdimensen Karakteristik

- **Reynolds partikel:** $Re_p = \dfrac{\rho u d_p}{\mu (1-\phi)}$
- **Schmidt:** $Sc = \dfrac{\mu}{\rho D_m}$
- **Peclet:** $Pe = Re_p \cdot Sc$
- **Sherwood** (korelasi untuk packed bed): $Sh = 1{,}17 Re_p^{0{,}585} Sc^{1/3}$

Korelasi Sherwood menentukan koefisien transfer massa $k_c = Sh\, D_m / d_p$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Proses dan Tahapan Siklus

Siklus ekstraksi sc-CO₂ industri mengikuti tiga tahap utama yang harus dimodelkan secara terpisah namun terkoordinasi (Toledo & del Valle, 2023):

**Tahap I – Pressurization (5–10 menit):** CO₂ dari tangki storage di-press hingga tekanan operasi target. Adiabatic compression menghasilkan kenaikan temperatur $T_2 = T_1 (P_2/P_1)^{(\gamma-1)/\gamma}$. Vessel harus di-ekuilibrasi hingga tercapai profil isotermal $T_{\text{set}}$.

**Tahap II – Extraction (60–180 menit):** sc-CO₂ dialirkan secara continuous dalam mode *dynamic extraction*. Larutan solute-loaded CO₂ keluar melalui separator bertekanan rendah untuk recover minyak.

**Tahap III – Depressurization (5–15 menit):**

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
