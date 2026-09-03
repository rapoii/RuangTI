# 2090 — Pemodelan Aliran Aksisimetrik dan Perpindahan Panas pada Ekstraksi Minyak Cannabis dengan CO₂ Superkritikal: Integrasi CFD Termofluida dan Analisis Tahapan Proses

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO2 process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botanol dan fitofarmaka global mengalami transformasi besar sejak legalisasi terbatas produk cannabis untuk keperluan medis dan rekreasional di berbagai yurisdiksi (Kanada 2018, beberapa negara bagian AS, Thailand 2022, Jerman 2024). Permintaan minyak cannabis berkualitas farmasi (*cannabis oil*) dengan kemurnian tinggi dan profil cannabinoid yang konsisten—khususnya tetrahydrocannabinol (THC), cannabidiol (CBD), serta terpena minor—telah mendorong adopsi luas teknologi **Supercritical Fluid Extraction with CO₂ (SCFE-CO₂)**. Metode ini menggantikan ekstraksi pelarut organik konvensional (etanol, butana, heksana) yang meninggalkan residu toksik, tidak ramah lingkungan, dan tidak memenuhi standar *Good Manufacturing Practice* (GMP) untuk produk farmasi.

Dalam konteks ini, Obchoei dan Limtrakarn (2024) melalui publikasi di *International Journal of Thermofluids* (DOI: [10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)) memperkenalkan **model aliran aksisimetrik (axisymmetric flow model)** untuk memprediksi profil hidrodinamika dan perpindahan massa dalam *extractor vessel* SCFE-CO₂. Pendekatan ini menjadi relevan karena sebagian besar reaktor ekstraksi industri berbentuk tabung silinder vertikal, di mana simetri geometris terhadap sumbu aksial memungkinkan reduksi *Computational Fluid Dynamics* (CFD) 3D penuh menjadi domain 2D, sehingga menurunkan biaya komputasi secara signifikan sambil mempertahankan fidelitas fisika.

Secara paralel, Toledo dan del Valle (2023) di *The Journal of Supercritical Fluids* (DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)) menekankan bahwa **perpindahan panas** adalah faktor pengendali kualitas proses karena CO₂ superkritikal memiliki sifat termodinamika yang sangat sensitif terhadap fluktuasi suhu di dekat titik kritisnya ($T_c = 304{,}13\,\text{K}$, $P_c = 7{,}377\,\text{MPa}$). Tahapan **pressurization** (kompresi isothermal hingga tekanan operasi), **extraction** (penahanan pada P-T target), dan **depressurization** (ekspansi untuk回收溶质) semuanya memerlukan analisis termal transien yang ketat untuk mencegah degradasi termal cannabinoid dan kehilangan yield.

Urgensi industrial-ekonomis dari integrasi kedua kerangka kerja ini terletak pada tiga hal: (i) optimalisasi *yield* cannabinoid per kilogram biomassa umpan (saat ini rerata industri 8–14%), (ii) pengurangan konsumsi energi spesifik yang dapat mencapai 1,2–2,5 kWh per batch pada skala pilot, dan (iii) kepatuhan terhadap standar residu pelarut (*residual solvent limit*) yang ditetapkan oleh USP <467> dan European Pharmacopoeia. Bagi insinyur industri, menguasai kedua perspektif—mekanika fluida termal dan dinamika perpindahan panas—menjadi kompetensi wajib untuk merancang, mengoperasikan, dan mengendalikan fasilitas SCFE-CO₂ yang *scalable* dan *cost-efficient*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Pengatur Aliran Aksisimetrik

Untuk geometri silinder dengan sumbu $z$ sebagai aksis simetri dan jari-jari dalam $r$, formulasi Reynolds-Averaged Navier-Stokes (RANS) dalam koordinat silindris untuk fluida SC-CO₂ mengikuti konservasi massa, momentum, dan energi sebagai berikut (Obchoei & Limtrakarn, 2024):

$$\frac{\partial \rho}{\partial t} + \frac{1}{r}\frac{\partial (r \rho u_r)}{\partial r} + \frac{\partial (\rho u_z)}{\partial z} = 0 \quad \text{(Kontinuitas)}$$

Momentum radial dan aksial:

$$\rho\left(\frac{\partial u_r}{\partial t} + u_r\frac{\partial u_r}{\partial r} + u_z\frac{\partial u_r}{\partial z}\right) = -\frac{\partial p}{\partial r} + \mu_{\text{eff}}\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_r}{\partial r}\right) - \frac{u_r}{r^2} + \frac{\partial^2 u_r}{\partial z^2}\right] - \frac{2}{3}\frac{\partial}{\partial r}(\mu_{\text{eff}}\nabla\cdot\vec{u})$$

$$\rho\left(\frac{\partial u_z}{\partial t} + u_r\frac{\partial u_z}{\partial r} + u_z\frac{\partial u_z}{\partial z}\right) = -\frac{\partial p}{\partial z} + \mu_{\text{eff}}\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_z}{\partial r}\right) + \frac{\partial^2 u_z}{\partial z^2}\right] + \rho g_z + S_z$$

dengan $\mu_{\text{eff}} = \mu + \mu_t$ merupakan viskositas efektif yang menggabungkan kontribusi molekuler dan turbulen, dan $S_z$ adalah *source term* tekanan gradien dari padatan biomassa (resistance to flow).

### 2.2 Model Turbulensi $k$-$\varepsilon$ Standar

Untuk menangkap dinamika pusaran (*vortex shedding*) di sekitar partikel biomassa, persamaan transport untuk energi kinetik turbulen $k$ dan laju disipasinya $\varepsilon$ ditulis:

$$\frac{\partial (\rho k)}{\partial t} + \nabla \cdot (\rho k \vec{u}) = \nabla \cdot \left[\left(\mu + \frac{\mu_t}{\sigma_k}\right)\nabla k\right] + G_k - \rho \varepsilon$$

$$\frac{\partial (\rho \varepsilon)}{\partial t} + \nabla \cdot (\rho \varepsilon \vec{u}) = \nabla \cdot \left[\left(\mu + \frac{\mu_t}{\sigma_\varepsilon}\right)\nabla \varepsilon\right] + C_{1\varepsilon}\frac{\varepsilon}{k}G_k - C_{2\varepsilon}\rho\frac{\varepsilon^2}{k}$$

dengan tetapan empiris $C_{1\varepsilon}=1{,}44$, $C_{2\varepsilon}=1{,}92$, $\sigma_k=1{,}0$, $\sigma_\varepsilon=1{,}3$. Viscositas turbulen dihitung melalui $\mu_t = \rho C_\mu k^2/\varepsilon$ dengan $C_\mu = 0{,}09$.

### 2.3 Persamaan Energi dan Perpindahan Panas Lintas Tahap

Toledo dan del Valle (2023) mengembangkan model perpindahan panas transien untuk dinding extractor dengan ketebalan $w$, mengasumsikan konduksi 1D radial pada dinding dan konveksi paksa di dalam:

$$\rho_w c_{p,w} \frac{\partial T_w}{\partial t} = \frac{1}{r}\frac{\partial}{\partial r}\left(r k_w \frac{\partial T_w}{\partial r}\right)$$

Di sisi fluida, koefisien perpindahan panas konveksi $h$ mengikuti korelasi Dittus-Boelter untuk aliran turbulen dalam pipa:

$$\text{Nu} = \frac{hD_h}{k_f} = 0{,}023\,\text{Re}^{0{,}8}\,\text{Pr}^{0{,}4}$$

Sifat termofisika SC-CO₂ sangat *non-linear* terhadap suhu dan tekanan sehingga harus dievaluasi melalui persamaan keadaan Span-Wagner:

$$\rho_{CO_2} = \rho(T, P) \quad;\quad \mu_{CO_2} = \mu(T, P) \quad;\quad k_f = k_f(T, P)$$

### 2.4 Perpindahan Massa ke Fase Superkritikal

Laju perpindahan massa cannabinoid dari matriks padat ke fluida mengikuti model *shrinking core* (Levenspiel) yang dimodifikasi:

$$\frac{dC_b}{dt} = k_f a_s (C^* - C_b)$$

dengan $C^*$ adalah konsentrasi jenuh (fungsi kelarutan), $C_b$ konsentrasi bulk, $a_s$ luas interfacial spesifik per volume ($\text{m}^2/\text{m}^3$), dan $k_f$ koefisien transfer massa yang bergantung pada *Schmidt number* $\text{Sc} = \nu/D_{AB}$ dan *Sherwood number* $\text{Sh} = k_f d_p/D_{AB}$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri model Obchoei & Limtrakarn (2024) dan Toledo & del Valle (2023) mengikuti kerangka SOP 7-tahap berikut:

**Tahap 1 – Karakterisasi Umpan (Feedstock Characterization)**
Tentukan kadar air biomassa ($<10\%$), ukuran partikel (mesh 20–40 ideal), dan kadar cannabinoid awal melalui HPLC. Catat sebagai parameter input CFD.

**Tahap 2 – Pra-Pemrosesan dan Pengisian Extractor**
Isi vessel dengan kepadatan packing $\rho_b = 350\text{–}500\,\text{kg/m}^3$ secara seragam untuk menghindari *channeling*. Catat massa umpan $m_f$.

**Tahap 3 – Pressurization (Isothermal Compression)**
Naikkan tekanan dari ambien menjadi $P_{\text{op}} = 25\text{–}35\,\text{MPa}$ dengan rate $\dot{P} = 0{,}5\text{–}1{,}0\,\text{MPa/menit}$. Jaga suhu dalam rentang $T_{\text{op}} = 308\text{–}333\,\text{K}$. Validasi dengan termokopel T1 (fluida masuk) dan T2 (dinding luar).

**Tahap 4 – Penyeimbangan Termal (Thermal Equilibration)**
Tunggu hingga $\Delta T < 0{,}5\,\text{K}$ antara sensor T1–T4. Waktu tunak tipikal: 15–25 menit untuk vessel 5 L, lebih lama untuk skala pilot.

**Tahap 5 – Dynamic Extraction (Mode Semi-Batch)**
Alirkan SC-CO₂ dengan laju $Q_{CO_2} = 1\text{–}5\,\text{kg/jam per liter vessel}$ selama $t_{\text{ext}} = 60\text{–}240$ menit. Rasio S/F (solvent-to-feed) dijaga 20–50.

**Tahap 6 – Depressurization dan Pemisihan (Separator Cascade)**
Ekspansi bertahap melalui dua separator pada $P_1 = 8\text{–}10\,\text{MPa}$ dan $P_2 = 4\text{–}5\,\text{MPa}$. Panaskan jalur *let-down valve* untuk mencegah *jamming* karena dry-ice formation.

**Tahap 7 – Venting dan Cleaning**
Depresurisasi ke tekanan atmosfer, lakukan *CO₂ venting*, bongkar *spent biomass*, dan bersihkan vessel dengan protokol CIP (*Clean-in-Place*).

Standar acuan: ASME BPVC Section VIII (desain vessel), ISO 22000 (food/pharma safety), dan ASTM D8375 untuk pengujian minyak cannabis. Diagram alir proses adalah sebagai berikut:

```
[BOMASS FEED] → [GRINDING/MESHING] → [EXTRACTOR VESSEL] 
        ↓                                      ↓
   [DRYING <10%]                      [CO₂ SUPPLY + HEATER]
                                              ↓