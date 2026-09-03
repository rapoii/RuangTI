# 2554 — Pemodelan Aliran Aksimetrik dan Perpindahan Kalor pada Ekstraksi Minyak Cannabis Menggunakan CO₂ Superkritis: Integrasi Model CFD dan Termodinamika Proses

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO2 process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Ekstraksi fluida superkritis (Supercritical Fluid Extraction/SFE) dengan karbon dioksida (CO₂) telah确立 sebagai teknologi proses hijau (green process technology) yang dominan dalam industri fitofarmaka, nutraceutical, dan kosmetik premium sejak diterimanya CO₂ sebagai pelarut Generally Recognized as Safe (GRAS) oleh FDA dan BPOM. Dalam konteks spesifik minyak cannabis—yang mengandung cannabinoid aktif seperti cannabidiol (CBD) dan tetrahydrocannabinol (Δ⁹-THC)—SFE-CO₂ menjadi satu-satunya metode yang memenuhi standar farmakope untuk produksi API (Active Pharmaceutical Ingredient) karena kemampuannya melakukan pemisahan selektif tanpa residu pelarut organik toksik seperti heksana, etanol, atau kloroform. Pasar global minyak cannabis diekstraksi CO₂ diproyeksikan mencapai USD 12,8 miliar pada 2030 dengan CAGR 21,4%, didorong oleh legalisasi medicinal cannabis di 38 negara bagian AS, Kanada, Uruguay, dan berbagai yurisdiksi Uni Eropa pasca-UU 2022/2115.

Obchoei dan Limtrakarn (2024) dalam *International Journal of Thermofluids* menyoroti urgensi pengembangan model aliran aksimetrik (axisymmetric flow model) yang mampu memprediksi perilaku hidrodinamika CO₂ superkritis dalam reaktor ekstraksi berbentuk silinder berisi *bed* biomassa cannabis yang mampat. Menurut Obchoei & Limtrakarn (2024), fenomena dominan seperti *channeling* (jalur preferensial), *bypass flow*, dan gradien tekanan aksial yang signifikan pada reaktor industri skala 100–1000 L menjadi penyebab utama inefisiensi ekstraksi (yield aktual hanya 60–75% dari yield kesetimbangan teoritis). Studi ini menjawab kebutuhan praktis teknisi proses untuk melakukan *scale-up* dari reaktor laboratorium 50 mL ke reaktor pilot 10 L tanpa memerlukan eksperimen fisik yang mahal (mencapai USD 50.000–200.000 per kampanye).

Di sisi komplementer, Toledo dan del Valle (2023) dalam *The Journal of Supercritical Fluids* mengembangkan model perpindahan kalor yang mengkuantifikasi efek termal pada tiga tahap kritis siklus SFE: (i) tahap *pressurization* dari kondisi ambient ke tekanan operasi (300–700 bar), (ii) tahap *extraction* isotermal atau adiabatik dengan pelepasan kalor laten, dan (iii) tahap *depressurization* melalui *let-down valve*. Toledo & del Valle (2023) menunjukkan bahwa pada reaktor ekstraktor 5 L dengan diameter dalam 100 mm, defisit perpindahan kalor pada tahap *pressurization* dapat menurunkan suhu lokal hingga 30–40°C di bawah titik kritis CO₂ (T_c = 31,1°C), menyebabkan transisi fasa parsial dari fluida superkritis ke fase campuran dua-fasa yang secara drastis mengurangi koefisien transfer massa. Kedua paper ini secara sinergis membangun kerangka model termo-hidrodinamika yang esensial untuk optimalisasi rancangan reaktor SFE pada industri cannabis.

Permasalahan industri yang diangkat memiliki tiga urgensi manajerial: pertama, biaya CAPEX reaktor SFE tekanan tinggi (mencapai USD 250.000–1.500.000 per unit) menuntut optimasi geometri dan operasional melalui simulasi CFD yang telah divalidasi; kedua, biaya energi operasional untuk menjaga kondisi superkritis (T > 31,1°C, P > 73,8 bar) menyumbang 35–45% dari total biaya produksi per kg minyak cannabis; ketiga, kepatuhan terhadap standar Good Manufacturing Practice (GMP) untuk produk farmasi mensyaratkan *process analytical technology* (PAT) berbasis model yang terdokumentasi dan terverifikasi.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Persamaan Kontinuitas dan Momentum (Navier-Stokes Aksimetrik)

Model aliran aksimetrik yang dikembangkan Obchoei & Limtrakarn (2024) menyederhanakan geometri reaktor silinder 3D menjadi domain 2D dengan mengeksploitasi simetri rotasional terhadap sumbu aksial. Persamaan kontinuitas untuk fluida kompresibel dalam koordinat silinder (r, z) adalah:

$$\frac{\partial \rho}{\partial t} + \frac{1}{r}\frac{\partial (r \rho v_r)}{\partial r} + \frac{\partial (\rho v_z)}{\partial z} = 0 \tag{1}$$

di mana $\rho$ adalah densitas fluida (kg/m³), $v_r$ dan $v_z$ adalah komponen kecepatan radial dan aksial (m/s). Persamaan momentum dalam arah radial dan aksial mengikuti formulasi Navier-Stokes untuk fluida Newtonian kompresibel:

$$\rho\left(\frac{\partial v_r}{\partial t} + v_r\frac{\partial v_r}{\partial r} + v_z\frac{\partial v_r}{\partial z}\right) = -\frac{\partial p}{\partial r} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial v_r}{\partial r}\right) + \frac{\partial^2 v_r}{\partial z^2} - \frac{v_r}{r^2}\right] + \rho g_r \tag{2}$$

$$\rho\left(\frac{\partial v_z}{\partial t} + v_r\frac{\partial v_z}{\partial r} + v_z\frac{\partial v_z}{\partial z}\right) = -\frac{\partial p}{\partial z} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial v_z}{\partial r}\right) + \frac{\partial^2 v_z}{\partial z^2}\right] + \rho g_z \tag{3}$$

dengan $p$ adalah tekanan (Pa), $\mu$ adalah viskositas dinamik (Pa·s), dan $g_r$, $g_z$ adalah komponen vektor gravitasi.

### 2.2. Persamaan Energi dan Model Perpindahan Kalor (Toledo & del Valle, 2023)

Untuk menangkap efek termal yang diuraikan Toledo & del Valle (2023), persamaan energi konservatif dalam regime unsteady-state adalah:

$$\rho c_p \left(\frac{\partial T}{\partial t} + v_r\frac{\partial T}{\partial r} + v_z\frac{\partial T}{\partial z}\right) = \frac{1}{r}\frac{\partial}{\partial r}\left(r k \frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k \frac{\partial T}{\partial z}\right) + \dot{Q}_{chem} + \dot{Q}_{press} \tag{4}$$

di mana $c_p$ adalah kapasitas panas spesifik (J/kg·K), $k$ adalah konduktivitas termal (W/m·K), $\dot{Q}_{chem}$ adalah sumber kalor dari reaksi metabolik biomassa (umumnya diabaikan pada SFE inaktif), dan $\dot{Q}_{press}$ adalah kalor yang dilepas/absorb akibat kerja kompresi/ekspansi:

$$\dot{Q}_{press} = \beta T \left(\frac{\partial p}{\partial t} + v_r\frac{\partial p}{\partial r} + v_z\frac{\partial p}{\partial z}\right) \tag{5}$$

dengan $\beta$ adalah koefisien ekspansi termal isobarik. Toledo & del Valle (2023) melaporkan bahwa $\dot{Q}_{press}$ pada tahap *pressurization* dengan laju 50 bar/menit dapat menyebabkan pendinginan Joule-Thomson inversi sebesar $\Delta T_{JT} = -15,3$°C per 100 bar untuk CO₂ murni.

### 2.3. Persamaan State dan Sifat Termodinamika CO₂

Sifat termofisika CO₂ superkritis dihitung menggunakan persamaan state Peng-Robinson (1976):

$$p = \frac{RT}{V_m - b} - \frac{a \alpha}{V_m(V_m + b) + b(V_m - b)} \tag{6}$$

dengan parameter atraktif $a$, koreksi temperatur $\alpha(T_r, \omega)$, dan parameter volume $b$ yang merupakan fungsi dari temperatur kritis ($T_c = 304,13$ K), tekanan kritis ($p_c = 7,377$ MPa), dan faktor asimetris $\omega = 0,225$. Pada kondisi operasi khas 333,15 K (60°C) dan 25 MPa, diperoleh $\rho_{CO_2} \approx 783,8$ kg/m³ dan $\mu \approx 6,9 \times 10^{-5}$ Pa·s.

### 2.4. Model Transfer Massa dan Solubilitas Cannabinoid

Kelarutan cannabinoid dalam CO₂ superkritis mengikuti model Chrastil (1982) yang dimodifikasi:

$$\ln(S) = k_0 + \frac{k_1}{T} + k_2 \ln(\rho_{CO_2}) \tag{7}$$

di mana $S$ adalah solubilitas (g cannabinoid/kg CO₂), dan $k_0$, $k_1$, $k_2$ adalah konstanta empiris. Untuk CBD pada 333,15 K dan 25 MPa, parameter yang dilaporkan oleh Obchoei & Limtrakarn (2024) menghasilkan $S_{CBD} \approx 2,18$ g/kg dengan laju alir volumetrik $Q = 4,2 \times 10^{-6}$ m³/s.

Laju transfer massa dari *bed* ke fase fluida mengikuti persamaan fickian dalam *packed bed* berpori:

$$N_A = k_c a_p (C^* - C_b) \tag{8}$$

dengan $k_c$ adalah koefisien transfer massa (m/s), $a_p$ adalah luas permukaan spesifik partikel (m²/m³), $C^*$ adalah konsentrasi kesetimbangan, dan $C_b$ adalah konsentrasi bulk.

### 2.5. Permeabilitas dan Model Porositas

Permeabilitas *bed* biomassa yang mampat mengikuti persamaan Kozeny-Carman:

$$K = \frac{\phi^3}{180 (1-\phi)^2} d_p^2 \tag{9}$$

dengan $\phi$ adalah porositas bed dan $d_p$ adalah diameter ekuivalen partikel.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1. Arsitektur Pemodelan dan Diskretisasi Numerik

Implementasi industri dari model Obchoei & Limtrakarn (2024) mengikuti protokol *Computational Fluid Dynamics* (CFD) berikut:

1. **Pre-processing geometri**: Domain aksimetrik 2D dengan panjang $L = 0,5$ m dan jari-jari dalam $R_i = 0,05$ m. Jaringan komputasi menggunakan elemen *structured quadrilateral* dengan *aspect ratio* ≤ 5 dan y+ < 1 untuk lapisan batas dekat dinding.

2. **Konstitutif model**: Coupling simultan antara solver berbasis tekanan (pressure-based) untuk fluida kompresibel dengan modul perpindahan kalor dan spesies transport. Skema diskretisasi menggunakan *second-order upwind* untuk konveksi dan *central differencing* untuk difusi dengan toleransi residual $10^{-6}$.

3. **Kondisi batas**:
   - *Inlet*: laju alir massa CO₂ $\dot{m} = 8,33 \times 10^{-3}$ kg/s dengan temperatur $T_{in} = 333,15$ K dan tekanan $p_{in} = 25$ MPa.
   - *Outlet*: tekanan keluar $p_{out} = 24,5$ MPa (ΔP = 0,5 MPa sepanjang bed).
   - *Wall*: kondisi *no-slip* dan *adiabatic* untuk simulasi baseline, atau *convective heat flux* $q'' = h(T_w - T_\infty)$ untuk simulasi terkopel termal sesuai Toledo & del Valle (2023).
   - *Axis*: kondisi simetri aksimetrik $\partial/\partial r = 0$.

### 3.2. Prosedur Operasional Standar (SOP) Tiga-Tahap SFE

**Tahap 1 — Pressurization (Durasi: 10–15 menit):**
- Inisiaasi CO₂ dari reservoir pada $T_0 = 298,15$ K dan $p_0 = 5$ MPa.
- Pengaktifan pompa diafragma tekanan tinggi (*pressure intensifier*) dengan laju pemompaan $dP/dt = 50$ bar/men