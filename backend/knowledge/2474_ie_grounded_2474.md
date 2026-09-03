# 2474 — Pemodelan Aliran Aksisimetrik pada Ekstraksi Minyak Kanabis dengan Superkritikal CO₂: Integrasi Persamaan Transpor, Perpindahan Panas, dan Rekayasa Proses

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri fitofarmasi global tengah mengalami transformasi signifikan sejak deregulasi produk kanabis medis di yurisdiksi seperti Kanada, Jerman, dan Thailand. Pasar ekstrak kanabinoid—khususnya *cannabidiol* (CBD) dan *tetrahydrocannabidiol* (THC)—diproyeksi mencapai valuasi lebih dari USD 47 miliar pada tahun 2027, dengan permintaan terhadap ekstrak berkualitas farmasi (pharmaceutical-grade) yang mensyaratkan kontrol proses jauh lebih ketat dibanding metode konvensional. Dalam konteks inilah Obchoei & Limtrakarn (2024) memperkenalkan model aliran aksisimetrik sebagai alat rekayasa untuk memprediksi perilaku fluida di dalam reaktor *supercritical fluid extraction* (SFE) CO₂, sementara Toledo & del Valle (2023) melengkapinya dengan analisis termal pada tahap *pressurization*, *extraction*, dan *depressurization* yang secara langsung menentukan yield dan kualitas produk.

Permasalahan operasional utama yang melatarbelakangi riset ini adalah tiga hal. Pertama, *yield* ekstraksi sangat sensitif terhadap gradien tekanan dan suhu lokal yang sulit diukur secara in-situ pada bejana tekan 10–30 MPa. Kedua, geometri reaktor yang berupa silinder vertikal dengan lapisan biomassa menyebabkan profil aliran radial dan aksial yang asimetris secara inheren, sehingga model 1-D atau isotropic tidak memadai. Ketiga, perpindahan panas kompresif saat pressurization mampu menaikkan suhu lokal beberapa derajat Celsius yang merusak termolabil cannabinoid (decarboxylation berlebih, degradasi THC→CBN). Tanpa model matematis terverifikasi, perusahaan farmasi menghadapi *batch-to-batch variability* yang merugikan secara ekonomis dan compliance.

Urgensi industrial engineering tampak jelas: model Obchoei & Limtrakarn (2024) memungkinkan para engineer menghitung distribusi densitas CO₂ superkritik, profil kecepatan aksisimetrik, dan lintasan termodinamika proses sehingga desain reaktor, *mass flow controller*, dan jadwal siklus produksi dapat dioptimasi sebelum fabrikasi fisik. Pendekatan ini merupakan pergeseran paradigma dari trial-and-error empiris menuju *digital twin* proses SFE.

## 2. Landasan Teori & Formulasi Matematis

Model Obchoei & Limtrakarn (2024) dibangun di atas formulasi Navier-Stokes dalam koordinat silindris dengan asumsi **aksisimetrik** (tidak ada variasi sudut θ, $\partial/\partial\theta = 0$), serta kondisi tunak/transien tergantung rezim simulasi.

### 2.1 Persamaan Kontinuitas

Untuk aliran 2-D aksisimetrik transien:

$$\frac{\partial \rho}{\partial t} + \frac{1}{r}\frac{\partial (r\rho v_r)}{\partial r} + \frac{\partial (\rho v_z)}{\partial z} = 0$$

di mana $v_r$ dan $v_z$ adalah komponen kecepatan radial dan aksial (m/s), $\rho$ adalah densitas fluida (kg/m³), serta $r, z$ adalah koordinat radial dan aksial (m).

### 2.2 Persamaan Momentum Aksisimetrik

Komponen radial:

$$\rho\left(\frac{\partial v_r}{\partial t} + v_r\frac{\partial v_r}{\partial r} + v_z\frac{\partial v_r}{\partial z}\right) = -\frac{\partial p}{\partial r} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial v_r}{\partial r}\right) - \frac{v_r}{r^2} + \frac{\partial^2 v_r}{\partial z^2}\right] + \rho g_r$$

Komponen aksial:

$$\rho\left(\frac{\partial v_z}{\partial t} + v_r\frac{\partial v_z}{\partial r} + v_z\frac{\partial v_z}{\partial z}\right) = -\frac{\partial p}{\partial z} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial v_z}{\partial r}\right) + \frac{\partial^2 v_z}{\partial z^2}\right] + \rho g_z$$

dengan $\mu$ viskositas dinamis (Pa·s), $p$ tekanan (Pa), dan $g_r$, $g_z$ komponen gravitasi.

### 2.3 Persamaan Energi (Coupled dengan Paper 2)

Toledo & del Valle (2023) menekankan pentingnya perpindahan panas selama pressurization. Bentuk konservatifnya:

$$\rho c_p\left(\frac{\partial T}{\partial t} + v_r\frac{\partial T}{\partial r} + v_z\frac{\partial T}{\partial z}\right) = \frac{1}{r}\frac{\partial}{\partial r}\left(rk\frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k\frac{\partial T}{\partial z}\right) + \dot{q}_{comp}$$

dengan $c_p$ kapasitas panas (J/kg·K), $k$ konduktivitas termal (W/m·K), dan $\dot{q}_{comp}$ adalah sumber panas kompresif (W/m³) yang muncul selama pressurization:

$$\dot{q}_{comp} = \beta T \frac{\partial p}{\partial t}$$

di mana $\beta$ adalah koefisien ekspansi termal isobarik.

### 2.4 Persamaan keadaan Peng–Robinson

Untuk menggambarkan sifat termodinamika CO₂ superkritik:

$$P = \frac{RT}{V_m - b} - \frac{a\,\alpha(T)}{V_m(V_m+b) + b(V_m-b)}$$

dengan parameter atraktif:

$$a = 0.45724 \frac{R^2 T_c^2}{P_c}, \quad b = 0.07780 \frac{R T_c}{P_c}$$

dan fungsi temperatur:

$$\alpha(T) = \left[1 + \kappa\left(1 - \sqrt{T/T_c}\right)\right]^2, \quad \kappa = 0.37464 + 1.54226\omega - 0.26992\omega^2$$

Untuk CO₂: $T_c = 304.13$ K, $P_c = 7.377$ MPa, $\omega = 0.225$.

### 2.5 Perpindahan Massa Lokal untuk Yield Kanabinoid

Model perpindahan massa ke dalam fase superkritik mengikuti persumsi *local equilibrium* termodifikasi:

$$\frac{\partial C}{\partial t} + v_z \frac{\partial C}{\partial z} = D_{eff}\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial C}{\partial r}\right) + \frac{\partial^2 C}{\partial z^2}\right] - k_L a (C^* - C)$$

dengan $C$ konsentrasi kanabinoid terlarut (kg/m³), $C^*$ konsentrasi kesetimbangan (fungsi $P, T$ melalui korelasi Chrastil), $D_{eff}$ difusivitas efektif, dan $k_L a$ koefisien transfer massa volumetrik.

Yield total:

$$Y = \frac{m_{extract}}{m_{biomass}} \times 100\%$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model aksisimetrik Obchoei & Limtrakarn (2024) ke dalam lini produksi farmasi mengikuti alur rekayasa berikut:

**Tahap 1 — Akuisisi Data Termodinamika.** Karakterisasi biomassa kanabis: kadar air (≤10%), ukuran partikel (0.5–2 mm), densitas packing ($\rho_{bed} \approx 350$ kg/m³), dan komposisi cannabinoid target. Lakukan pengukuran *supercritical fluid chromatography* untuk baseline profil cannabinoid.

**Tahap 2 — Diskretisasi Domain CFD.** Domain aksisimetrik 2-D (setengah bagian reaktor karena simetri) dibagi menggunakan *structured mesh* quadrilateral dengan refinment di dekat dinding dan inlet. Diskretisasi persamaan governing menggunakan *finite volume method* (FVM). Skema tekanan–kecepatan: SIMPLE atau PIMPLE untuk transien.

**Tahap 3 — Penentuan Kondisi Batas.**
- **Inlet** ($z=0$): kecepatan inlet $v_{in}$ dari *coriolis mass flow meter*, $T_{in} = T_{set}$, $C = 0$.
- **Outlet** ($z = L$): tekanan outlet $P_{out}$, outflow condition.
- **Sumbu** ($r=0$): $\partial v_r/\partial r = 0$, $v_r = 0$, $\partial \phi/\partial r = 0$ (untuk skalar).
- **Dinding**: *no-slip* ($v_r = v_z = 0$), perpindahan panas konvektif $q'' = h(T_w - T_\infty)$.

**Tahap 4 — Tahap Pressurization (Paper 2).** Hitung laju kompresi yang memenuhi $\partial p/\partial t$ tertentu (umumnya 0.5–2 MPa/min). Pantau $\dot{q}_{comp}$ dan pertahankan $T < T_{max}$ dengan aktivasi *jacket cooling* sesuai korelasi:

$$Nu = \frac{h D_h}{k} = f(Re, Pr)$$

**Tahap 5 — Tahap Ekstraksi Tunak (Paper 1).** Jalankan solver hingga kondisi tunak (residuals < 10⁻⁶). Validasi profil densitas $\rho(r,z)$ terhadap data eksperimen melalui sensor tekanan pada tiga elevasi.

**Tahap 6 — Depressurization & Recovery.** Lepaskan tekanan secara terkontrol; koordinasikan dengan separator untuk回收 CO₂ dan pemisahan ekstrak. Pantau rasio refluks untuk mencegah entrainment.

**SOP Ringkas:**

| Langkah | Aktivitas | Parameter Kritis |
|---------|-----------|------------------|
| 1 | Pre-conditioning biomass | Moisture ≤10%, ukuran 1 mm |
| 2 | Charge vessel | $\rho_{bed}$ terukur |
| 3 | Pressurize ke P_target | dP/dt terkontrol |
|.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
