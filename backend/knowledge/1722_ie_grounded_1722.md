# 1722 — Pemodelan Aliran Aksisimetrik dan Perpindahan Panas pada Ekstraksi Minyak Cannabis dengan Fluida Superkritis CO₂: Integrasi Model CFD Termofluida dengan Rekayasa Proses Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botani global, khususnya segmen *cannabis* dan *hemp*, telah mengalami transformasi signifikan sejak legalisasi medis dan rekreasional di berbagai yurisdiksi pada periode 2018–2024. Menurut laporan pasar Grand View Research dan Fortune Business Insights, nilai pasar ekstrak cannabis global melampaui USD 8,5 miliar pada 2023 dengan proyeksi Compound Annual Growth Rate (CAGR) >15% hingga 2030. Dalam konteks ini, pemilihan teknologi ekstraksi menjadi keputusan rekayasa kritis yang menentukan margin operasional, kualitas produk, dan kepatuhan regulasi farmasi (Good Manufacturing Practice/GMP).

Di antara metode ekstraksi yang tersedia—hidrokarbon (butana/propana), etanol, esensial uap-air, dan *supercritical fluid extraction* (SFE)—SFE-CO₂ mendominasi pasar premium karena tiga keunggulan struktural: (1) tidak meninggalkan residu pelarut toksik, (2) selektivitas tinggi terhadap cannabinoid tertentu (CBD, CBG, THC) melalui tuning parameter tekanan dan suhu, serta (3) kemampuannya diintegrasikan dengan siklus recoveri CO₂ tertutup sehingga *cost-of-goods-sold* (COGS) jangka panjang lebih rendah. Namun, karakteristik operasional SFE-CO₂ menyimpan kompleksitas termofluida yang tidak dimiliki metode lain: perilaku fluida *supercritical* yang sangat sensitif terhadap perubahan densitas akibat gradien tekanan dan suhu, efek pendinginan *Joule-Thomson* selama depresurisasi, serta dinamika perpindahan massa yang dikontrol oleh solubilitas *cannabinoid* dalam CO₂ padat-tekan.

Obchoei & Limtrakarn (2024) dalam *International Journal of Thermofluids* menyoroti bahwa kondisi operasi SFE-CO₂ untuk cannabis secara inheren bersifat **non-isotermal, non-stasioner, dan geometri aksisimetrik** karena extractor vessel didesain sebagai bejana silinder vertikal dengan inlet CO₂ di bagian bawah dan outlet di bagian atas. DOI [10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682) melaporkan formulasi model Computational Fluid Dynamics (CFD) dua-dimensi-aksisimetrik yang menyelesaikan persamaan kontinuitas, momentum, dan energi coupled dengan persamaan konstitutif untuk campuran CO₂–minyak cannabis. Studi ini mengisi kesenjangan kritis dalam literatur karena mayoritas model SFE sebelumnya memperlakukan kolom sebagai *plug flow reactor* (PFR) ideal yang mengabaikan profil radial dan aksial suhu, padahal gradien tersebut nyata ada dan menentukan yield.

Di sisi komplementer, Toledo & del Valle (2023) dalam DOI [10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046) mengembangkan dan memvalidasi model perpindahan panas transien yang secara eksplisit mengkuantifikasi tiga fase operasional SFE: (i) *pressurization* dengan ekspansi kompresor isentropik, (ii) *extraction* tunak pseudo-stasioner, dan (iii) *depressurization* dengan efek pendinginan Joule-Thomson. Integrasi kedua kerangka model ini—fluidodinamika aksisimetrik Obchoei-Limtrakarn dengan neraca energi transien Toledo-del Valle—memberikan landasan *first-principles* bagi insinyur proses industri untuk optimasi kapasitas produksi tanpa trial-and-error empiris yang mahal.

Urgensi ekonominya jelas: dengan asumsi investasi CAPEX satu lini SFE-CO₂ industri 200 L sekitar USD 1,2–1,8 juta, peningkatan yield sebesar 1% melalui optimasi model-driven valued pada USD 100–250 ribu/tahun lini. Oleh karena itu, kemampuan memprediksi perilaku fluida di dalam vessel secara akurat menjadi *core competency* rekayasa proses untuk bersaing di pasar dengan *price compression* yang tinggi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Asumsi Model Aksisimetrik

Vessel ekstraksi dimodelkan sebagai geometri 2D-aksisimetrik dengan sumbu simetri di sepanjang garis tengah vertikal. Koordinat silinder $(x, r)$ digunakan di mana $x$ adalah aksial (sumbu vessel) dan $r$ adalah radial. Komponen kecepatan $u$ (aksial) dan $v_r$ (radial) menjadi variabel dependen utama. Campuran CO₂–minyak diasumsikan mengikuti perilaku fluida termokompresibel dengan properti termodinamika dievaluasi melalui persamaan keadaan.

### 2.2 Persamaan Kontinuitas (Konservasi Massa)

Untuk aliran termokompresibel 2D-aksisimetrik:

$$\frac{\partial \rho}{\partial t} + \frac{\partial (\rho u)}{\partial x} + \frac{1}{r}\frac{\partial (r \rho v_r)}{\partial r} = 0$$

di mana $\rho$ adalah densitas campuran [kg/m³]. Bentuk tunak (*steady-state*) yang digunakan Obchoei & Limtrakarn (2024) menjadi:

$$\frac{\partial (\rho u)}{\partial x} + \frac{1}{r}\frac{\partial (r \rho v_r)}{\partial r} = 0$$

### 2.3 Persamaan Momentum Navier-Stokes Aksisimetrik

Komponen aksial:

$$\rho\left(u\frac{\partial u}{\partial x} + v_r\frac{\partial u}{\partial r}\right) = -\frac{\partial p}{\partial x} + \mu\left[\frac{\partial^2 u}{\partial x^2} + \frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u}{\partial r}\right)\right] + \rho g_x$$

Komponen radial:

$$\rho\left(u\frac{\partial v_r}{\partial x} + v_r\frac{\partial v_r}{\partial r}\right) = -\frac{\partial p}{\partial r} + \mu\left[\frac{\partial^2 v_r}{\partial x^2} + \frac{\partial}{\partial r}\left(\frac{1}{r}\frac{\partial (r v_r)}{\partial r}\right) - \frac{v_r}{r^2}\right]$$

dengan $p$ adalah tekanan [Pa], $\mu$ viskositas dinamik [Pa·s], dan $g_x$ komponen aksial gravitasi. Istilah $\frac{\mu}{3}\frac{\partial}{\partial x}\left(\nabla \cdot \vec{V}\right)$ umumnya diabaikan untuk fluida termokompresibel dengan asumsi Stokes.

### 2.4 Persamaan Energi dengan Sumber Kalor Internal

Toledo & del Valle (2023) menekankan bahwa selama fasa *pressurization*, kompresi non-isentropik CO₂ menimbulkan sumber kalor volumetrik $Q_{comp}$:

$$\rho c_p\left(\frac{\partial T}{\partial t} + u\frac{\partial T}{\partial x} + v_r\frac{\partial T}{\partial r}\right) = k\left[\frac{\partial^2 T}{\partial x^2} + \frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial T}{\partial r}\right)\right] + Q_{comp} + Q_{J-T}$$

dengan:

$$Q_{comp} = \beta T \frac{\partial p}{\partial t}, \quad Q_{J-T} = -\rho c_p \mu_{JT} \frac{\partial p}{\partial t}$$

di mana $\beta$ adalah koefisien ekspansi termal, $\mu_{JT}$ adalah koefisien Joule-Thomson (untuk CO₂, $\mu_{JT} \approx 1,1 \times 10^{-5}$ K/Pa pada kondisi superkritis). Integrasi ketiga suku sumber panas ini menjadi pembeda model Toledo-del Valle terhadap model CFD isothermal konvensional.

### 2.5 Persamaan Keadaan Peng-Robinson untuk CO₂ Superkritis

Untuk akurasi densitas CO₂ pada kondisi operasi 200–350 bar dan 308–343 K, digunakan persamaan keadaan Peng-Robinson:

$$P = \frac{RT}{V_m - b} - \frac{a(T)}{V_m(V_m + b) + b(V_m - b)}$$

dengan parameter:

$$a(T) = 0{,}45724 \frac{R^2 T_c^2}{P_c}\left[1 + \kappa\left(1 - \sqrt{T/T_c}\right)\right]^2, \quad \kappa = 0{,}37464 + 1{,}54226\omega - 0{,}26992\omega^2$$

$$b = 0{,}077