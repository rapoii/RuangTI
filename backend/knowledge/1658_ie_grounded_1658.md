# 1658 — Pemodelan Aliran Aksisimetrik dan Perpindahan Panas pada Ekstraksi Minyak Kanabis dengan Fluida Superkritis CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO2 process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botanol — khususnya ekstraksi minyak kanabis (*Cannabis sativa* L.) untuk keperluan farmasi, nutraceutical, dan kosmetik — mengalami transformasi signifikan sejak diterapkannya regulasi legalisasi di berbagai yurisdiksi dunia. Metode konvensional seperti ekstraksi pelarut organik (etanol, heksana) dan *butane hash oil* (BHO) meninggalkan residu pelarut toksik, menurunkan kualitas produk, serta memerlukan tahap *post-processing* yang mahal. Sebagai alternatif, ekstraksi fluida superkritis dengan karbon dioksida (SC-CO₂) muncul sebagai teknologi hijau (*green technology*) yang memenuhi standar farmasi seperti *Good Manufacturing Practice* (GMP) danfarmakope Eropa (Ph. Eur.), karena CO₂ meninggalkan nol residu setelah depresurisasi dan bersifat GRAS (*Generally Recognized as Safe*).

Obchoei dan Limtrakarn (2024) dalam jurnal *International Journal of Thermofluids* menyoroti urgensi pengembangan model aliran aksisimetrik untuk memprediksi distribusi kecepatan, konsentrasi, dan hasil ekstraksi dalam *extractor vessel* silinder. Kompleksitas geometri vessel, perilaku non-Newtonian CO₂ di atas titik kritisnya ($T_c = 304.13$ K, $P_c = 7.38$ MPa), serta fenomena transpor dalam media berpori (packed bed biomassa kanabis) menjadikan pendekatan 1-D lumped-parameter tidak memadai untuk desain dan *scale-up* industri. Di sisi lain, Toledo & del Valle (2023) dalam *The Journal of Supercritical Fluids* menekankan bahwa perpindahan panas selama tiga tahap siklus — *pressurization*, *extraction*, dan *depressurization* — memiliki dampak dominan terhadap yield dan selektivitas, sehingga model termal harus diintegrasikan ke dalam model hidrodinamika.

Secara ekonomis, pasar global ekstrak kanabis diproyeksikan mencapai USD 45 miliar pada 2030 (Grand View Research, 2024), dengan yield industri berkisar 10–25% berat biomassa tergantung varietas dan kondisi operasi. Oleh karena itu, kemampuan memprediksi kinerja proses melalui Computational Fluid Dynamics (CFD) bukan sekadar kebutuhan akademis melainkan竞争优势 kompetitif bagi perusahaan yang ingin mengoptimalkan *throughput*, konsumsi pelarut (Specific CO₂ Consumption, SCC), dan konsistensi batch. Modul 1658 ini menyintesiskan kedua paper tersebut untuk memberikan kerangka rekayasa komprehensif.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Governing dalam Koordinat Aksisimetrik

Model 2-D aksisimetrik menggunakan koordinat silindris $(r, z)$ di mana seluruh domain diselesaikan dengan asumsi simetri rotasional terhadap sumbu vertikal vessel. Persamaan kontinuitas untuk fase fluida superkritis:

$$\frac{\partial \rho}{\partial t} + \frac{1}{r}\frac{\partial (r \rho u_r)}{\partial r} + \frac{\partial (\rho u_z)}{\partial z} = 0 \tag{1}$$

Persamaan momentum Navier-Stokes untuk arah radial dan aksial dengan memperhitungkan sumber dari media berpori:

$$\frac{\partial (\rho u_r)}{\partial t} + \frac{1}{r}\frac{\partial (r\rho u_r^2)}{\partial r} + \frac{\partial (\rho u_r u_z)}{\partial z} = -\frac{\partial p}{\partial r} + \mu_{eff}\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_r}{\partial r}\right) + \frac{\partial^2 u_r}{\partial z^2} - \frac{u_r}{r^2}\right] + \rho g_r + S_r \tag{2}$$

$$\frac{\partial (\rho u_z)}{\partial t} + \frac{1}{r}\frac{\partial (r\rho u_r u_z)}{\partial r} + \frac{\partial (\rho u_z^2)}{\partial z} = -\frac{\partial p}{\partial z} + \mu_{eff}\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_z}{\partial r}\right) + \frac{\partial^2 u_z}{\partial z^2}\right] + \rho g_z + S_z \tag{3}$$

dengan $S_r$ dan $S_z$ adalah *momentum sink* yang merepresentasikan hambatan aliran dalam packed bed melalui persamaan *extended Darcy-Forchheimer*:

$$S_z = -\left(\frac{\mu}{K}u_z + \frac{1.75 \rho}{\sqrt{150 K \epsilon^3}}|u_z|u_z\right) \tag{4}$$

di mana $K$ adalah permeabilitas intrinsik biomassa (orde $10^{-9}$–$10^{-11}$ m²) dan $\epsilon$ adalah porositas bed (≈ 0.4–0.55 untuk partikel kanabis tergiling).

### 2.2 Persamaan Transpor Spesies (Mass Transfer)

Konsentrasi solut target (THC, CBD, terpen) di fase superkritis mengikuti:

$$\frac{\partial (\rho Y_i)}{\partial t} + \frac{1}{r}\frac{\partial (r\rho u_r Y_i)}{\partial r} + \frac{\partial (\rho u_z Y_i)}{\partial z} = \frac{1}{r}\frac{\partial}{\partial r}\left(r D_{eff,i}\rho \frac{\partial Y_i}{\partial r}\right) + \frac{\partial}{\partial z}\left(D_{eff,i}\rho \frac{\partial Y_i}{\partial z}\right) + \dot{m}_i \tag{5}$$

dengan $D_{eff,i}$ adalah koefisien difusi efektif yang memperhitungkan difusi molekuler dan dispersi aksial:

$$D_{eff,i} = D_{m,i} + 0.5 d_p u_z \tag{6}$$

Laju pelarutan (*source term*) dari matriks padat ke fluida dimodelkan dengan pendekatan *Linear Driving Force* (LDF) yang dipopulerkan oleh Brunauer (seperti dikutip dalam Obchoei & Limtrakarn, 2024):

$$\dot{m}_i = k_f a_s \rho (Y_i^* - Y_i) \tag{7}$$

di mana $k_f$ adalah koefisien transfer massa eksternal, $a_s$ adalah luas spesifik partikel (m²/m³), dan $Y_i^*$ adalah konsentrasi kesetimbangan yang ditentukan oleh model kelarutan.

### 2.3 Model Kelarutan Chrastil

Untuk memprediksi kelarutan solut kanabinoid dalam SC-CO₂, digunakan persamaan semi-empiris Chrastil (1982):

$$Y^* = \rho^{k} \exp\left(\frac{a}{T} + b\right) \tag{8}$$

dengan $k$ adalah *association constant* (umumnya 4–6 untuk kanabinoid), $a$ dan $b$ adalah parameter tergantung solute. Untuk THC, parameter tipikal (Attard et al., 2018, diacu kembali oleh Obchoei & Limtrakarn, 2024) adalah $k = 4.85$, $a = -5200$ K, $b = 18.1$.

### 2.4 Persamaan State dan Model Termal

Massa jenis CO₂ dihitung dengan persamaan state Span-Wagner atau pendekatan *Peng-Robinson*:

$$P = \frac{RT}{V_m - b_m} - \frac{a_m \alpha}{V_m(V_m + b_m) + b_m(V_m - b_m)} \tag{9}$$

Toledo & del Valle (2023) merumuskan persamaan energi 2-D untuk fase fluida dan padat secara coupled:

$$\frac{\partial}{\partial t}\left[\epsilon \rho_f h_f + (1-\epsilon)\rho_s h_s\right] + \nabla \cdot (\rho_f \vec{v} h_f) = \nabla \cdot (k_{eff}\nabla T) + \dot{q}_{reac} \tag{10}$$

dengan konduktivitas efektif packed bed:

$$k_{eff} = \epsilon k_f + (1-\epsilon)k_s + \frac{0.5 d_p u_z \rho_f c_{p,f}}{\sqrt{2}} \tag{11}$$

Koefisien transfer panas konvektif dinding-vessel mengikuti korelasi Churchill-Bernstein untuk aliran laminar transisi,