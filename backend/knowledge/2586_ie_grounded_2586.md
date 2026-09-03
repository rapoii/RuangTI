# 2586 — Model Aliran Aksisimetrik dan Perpindahan Panas pada Ekstraksi Minyak Kanabis dengan Fluida Superkritis CO₂: Integrasi CFD, Termodinamika Proses, dan Rekayasa Batch Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Pasar global ekstrak kanabis nonpsikoaktif—terutama *cannabidiol* (CBD) dan *tetrahydrocannabinol* (THC)—telah melampaui USD 12 miliar pada 2023 dengan proyeksi CAGR 17–22% hingga 2030 (Grand View Research, 2024). Dalam lanskap ini, ekstraksi dengan fluida superkritis CO₂ (scCO₂) menjadi teknologi pilihan karena tiga alasan fundamental: (i) CO₂ non-toksik, food-grade, dan dapat diregenerasi sehingga memenuhi prinsip *green extraction* yang dipopulerkan oleh Chemat dkk.; (ii) sifat pelarut scCO₂ dapat di-*tuning* melalui kombinasi tekanan (10–35 MPa) dan suhu (308–353 K) sesuai diagram fasa CO₂ di atas titik kritisnya ($T_c = 304{,}13$ K; $P_c = 7{,}38$ MPa); serta (iii) prosesnya menghasilkan produk bebas residu pelarut, aspek yang sangat krusial untuk aplikasi farmasi dan nutrasetikal.

Obchoei & Limtrakarn (2024) dalam *International Journal of Thermofluids* menyoroti bahwa mayoritas desain reaktor ekstraksi scCO₂ saat ini masih memperlakukan *extractor vessel* sebagai *black box*, padahal distribusi aliran internal sangat menentukan *yield* dan selektivitas cannabinoid. Mereka mengembangkan model aliran aksisimetrik dua dimensi untuk memprediksi profil kecepatan, tekanan, dan konsentrasi solute dalam vessel silinder yang berisi matriks kanabis (ground biomass) secara bertahap. Studi ini penting secara industrial karena *dead zone* dan *channeling* yang tidak terdeteksi dapat menurunkan efisiensi ekstraksi hingga 30–40%, secara langsung menggerus margin operasional. Sementara itu, Toledo & del Valle (2023) di *Journal of Supercritical Fluids* melengkapi pemahaman tersebut dengan model perpindahan panas pada tiga tahap utama—*pressurization*, *static extraction*, *dynamic extraction*, dan *depressurization*—yang menunjukkan bahwa efek pendinginan Joule-Thomson saat kompresi CO₂ dapat menurunkan suhu lokal hingga 20–40 K, berpotensi menyebabkan sublimasi CO₂ padat jika tidak dikendalikan, dan merusak selektivitas ekstraksi. Integrasi kedua perspektif—aliran aksisimetrik dan termodinamika tahap proses—menjadi kebutuhan rekayasa nyata dalam desain dan *scale-up* ekstraktor komersial kapasitas 100 L hingga 1.000 L yang banyak digunakan di fasilitas Kanada, Kolombia, dan Thailand.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Persamaan Navier–Stokes Aksisimetrik

Mengikuti formulasi Obchoei & Limtrakarn (2024), *extractor vessel* dimodelkan sebagai tabung silinder dengan panjang $L$ dan radius internal $R$. Dalam koordinat silinder $(r,z)$ dengan asumsi sumetri putar, sistem persamaan konservasi massa, momentum, energi, dan spesies adalah sebagai berikut.

**Kontinuitas:**
$$\frac{\partial \rho}{\partial t} + \frac{1}{r}\frac{\partial (r \rho v_r)}{\partial r} + \frac{\partial (\rho v_z)}{\partial z} = 0 \tag{1}$$

**Momentum radial:**
$$\rho\!\left(\frac{\partial v_r}{\partial t} + v_r\frac{\partial v_r}{\partial r} + v_z\frac{\partial v_r}{\partial z}\right) = -\frac{\partial p}{\partial r} + \mu\!\left[\frac{1}{r}\frac{\partial}{\partial r}\!\left(r\frac{\partial v_r}{\partial r}\right) + \frac{\partial^2 v_r}{\partial z^2} - \frac{v_r}{r^2}\right] \tag{2}$$

**Momentum aksial:**
$$\rho\!\left(\frac{\partial v_z}{\partial t} + v_r\frac{\partial v_z}{\partial r} + v_z\frac{\partial v_z}{\partial z}\right) = -\frac{\partial p}{\partial z} + \mu\!\left[\frac{1}{r}\frac{\partial}{\partial r}\!\left(r\frac{\partial v_z}{\partial r}\right) + \frac{\partial^2 v_z}{\partial z^2}\right] + \rho g_z \tag{3}$$

dengan $v_r$ dan $v_z$ adalah komponen kecepatan radial dan aksial, $\rho$ densitas scCO₂, $\mu$ viskositas dinamis, dan $g_z$ percepatan gravitasi.

### 2.2. Persamaan Energi dan Model Perpindahan Panas

Berdasarkan Toledo & del Valle (2023), neraca energi global pada tahap *pressurization* dan *depressurization* mengikuti:
$$\frac{dU}{dt} = \dot{Q}_{ext} - \dot{W}_{shaft} + \dot{m}_{in}h_{in} - \dot{m}_{out}h_{out} \tag{4}$$

di mana $U$ adalah energi internal total, $\dot{Q}_{ext}$ laju panas dengan lingkungan, $\dot{W}_{shaft}$ kerja poros pompa, dan $h$ entalpi spesifik scCO₂. Efek Joule-Thomson diekspresikan melalui:
$$\Delta T_{JT} = \mu_{JT}(T,P)\,\Delta P, \quad \mu_{JT} = \frac{1}{C_p}\!\left[T\!\left(\frac{\partial V}{\partial T}\right)_P - V\right] \tag{5}$$

Untuk CO₂ pada kondisi operasi khas ($T = 313$ K, $P = 25$ MPa), koefisien Joule-Thomson bernilai $\mu_{JT} \approx 1{,}1$ K/MPa, sehingga kompresi dari 0,1 ke 25 MPa secara isotermal-entalpi akan mendinginkan fluida hingga $\Delta T_{JT} \approx -27{,}5$ K (Toledo & del Valle, 2023).

### 2.3. Persamaan State dan Termodinamika scCO₂

Densitas scCO₂ dihitung dengan persamaan state *Peng–Robinson*:
$$P = \frac{RT}{V_m - b} - \frac{a(T)}{V_m(V_m + b) + b(V_m - b)} \tag{6}$$
$$a(T) = 0{,}45724\,\frac{R^2 T_c^2}{P_c}\,\alpha(T), \quad b = 0{,}07780\,\frac{RT_c}{P_c}$$
$$\alpha(T) = \left[1 + \kappa\!\left(1 - \sqrt{T/T_c}\right)\right]^2, \quad \kappa = 0{,}37464 + 1{,}54226\,\omega - 0{,}26992\,\omega^2$$

dengan $\omega = 0{,}225$ untuk CO₂. Pada $T = 313$ K dan $P = 25$ MPa, nilai $Z = PV_m/RT \approx 0{,}55$ dan $\rho \approx 830$ kg/m³.

### 2.4. Model Perpindahan Massa (Kinetika Ekstraksi)

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
