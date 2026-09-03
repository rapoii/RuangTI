# 2346 — Pemodelan Aliran Aksisimetrik pada Ekstraksi Minyak Cannabis dengan Proses Supercritical Fluid Extraction (SFE) CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO2 process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botanol telah mengalami transformasi besar sepanjang dekade terakhir, didorong oleh legitimasi medicinal cannabis di lebih dari 40 negara serta lonjakan permintaan global terhadap *cannabidiol* (CBD) dan *tetrahydrocannabinol* (THC) sebagai bahan baku farmasi, nutraceutical, dan kosmetik. Menurut data pasar yang dirujuk oleh Obchoei & Limtrakarn (2024) dalam *International Journal of Thermofluids*, volume pasar ekstrak cannabis global diproyeksikan mencapai USD 47,27 miliar pada tahun 2028 dengan CAGR sekitar 21,7%, menjadikan efisiensi proses ekstraksi sebagai variabel strategis yang sangat menentukan margin operasional. Di tengah lanskap tersebut, **Supercritical Fluid Extraction (SFE) dengan CO₂** muncul sebagai teknologi unggulan karena sifatnya yang non-toksik, tidak meninggalkan residu pelarut, selektivitas tinggi melalui tuning tekanan–temperatur, dan kemampuan daur ulang pelarut (CO₂) secara near-closed-loop.

Secara operasional, proses SFE-CO₂ untuk cannabis berlangsung dalam tiga tahapan makro sebagaimana dibedah secara rigor oleh Toledo & del Valle (2023) di *The Journal of Supercritical Fluids*, yaitu **pressurization, extraction (static-dynamic), dan depressurization**. Masing-masing tahapan memiliki profil perpindahan kalor dan perilaku termodinamika yang berbeda: pada tahap *pressurization*, entalpi spesifik CO₂ turun secara signifikan karena kerja kompresi isentropik; selama *extraction*, perpindahan kalor dari jacket pemanas harus mengompensasi depresi temperatur adiabatik yang disebabkan oleh ekspansi CO₂ melewati katup dan matriks biomassa; pada tahap *depressurization*, sebaliknya, kalor harus dilepas untuk mencegah *overshoot* termal. Obchoei & Limtrakarn (2024) menekankan bahwa tanpa pemodelan aliran aksisimetrik 2-D yang valid, distribusi konsentrasi solute (*cannabinoid*) sepanjang ketinggian bed menjadi tidak homogen, menghasilkan *channeling*, *bypass flow*, dan degradasi termal cannabinoid yang menurunkan yield dari potensi teoritis 20–25% menjadi <12% pada operasi yang tidak optimal.

Urgensi perekayasaan juga bersifat ekonomis: biaya energi untuk mencapai dan mempertahankan kondisi superkritis (P > 7,38 MPa, T > 304,13 K) merupakan 35–50% dari biaya operasional SFE. Optimasi termal dan hidrodinamika menjadi kunci untuk menurunkan *Operating Expenditure* (OPEX) sekaligus meningkatkan *throughput* dan *yield* — variabel-variabel yang membentuk Inti dari fungsi Teknik Industri sebagai integrator proses-proses fisika ke dalam sistem produksi yang profitable. Modul ini disusun untuk membekali praktisi industri dengan kerangka kuantitatif dan SOP berbasis Computational Fluid Dynamics (CFD) yang divalidasi terhadap data eksperimental kedua paper rujukan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Geometri Aksisimetrik dan Asumsi Dasar

Model yang dikembangkan Obchoei & Limtrakarn (2024) menggunakan geometri 2-D aksisimetrik dalam koordinat silindris $(r, z)$, di mana vessel ekstraktor dianggap berbentuk silinder vertikal dengan radius $R$ dan tinggi $H$ yang berisi matriks biomassa cannabis sebagai *porous medium*. Asumsi-asumsi kunci:

1. Aliran *steady-state* setelah transien awal (diinduksi validasi Toledo & del Valle, 2023).
2. CO₂ superkritis diperlakukan sebagai fluida Newtonian dengan sifat termodinamika yang sangat bergantung pada $P$ dan $T$ (densitas, viskositas, panas jenis, konduktivitas termal).
3. Bed biomassa bersifat *homogeneous porous* dengan porositas $\epsilon$, permeabilitas intrinsik $\kappa$, dan koefisien *inertial* $\beta_F$.
4. Perpindahan massa solute (cannabinoid) digambarkan dengan pendekatan *local equilibrium* yang direlaksasi dengan koefisien $k_f$.

### 2.2 Persamaan Kontinuitas (Mass Balance)

Untuk fase fluida superkritis dalam *porous medium*, persamaan kontinuitas adalah:

$$\frac{\partial (\epsilon \rho)}{\partial t} + \frac{1}{r}\frac{\partial}{\partial r}(r \rho u_r) + \frac{\partial}{\partial z}(\rho u_z) = 0$$

dengan $\rho$ adalah densitas CO₂, dan $u_r, u_z$ adalah komponen kecepatan *Darcy* dalam arah radial dan aksial.

### 2.3 Persamaan Momentum (Navier–Stokes untuk Porous Media / Forchheimer-Darcy)

Arah aksial (dominan pada SFE *down-flow*):

$$\rho \left(\frac{\partial u_z}{\partial t} + u_z \frac{\partial u_z}{\partial z}\right) = -\frac{\partial p}{\partial z} + \mu \left[\frac{1}{r}\frac{\partial}{\partial r}\left(r \frac{\partial u_z}{\partial r}\right) + \frac{\partial^2 u_z}{\partial z^2}\right] - \frac{\mu}{\kappa} u_z - \beta_F \rho |u_z| u_z - \rho g$$

Arah radial:

$$\rho \left(\frac{\partial u_r}{\partial t} + u_z \frac{\partial u_r}{\partial z}\right) = -\frac{\partial p}{\partial r} + \mu \left[\frac{\partial}{\partial r}\left(\frac{1}{r}\frac{\partial (r u_r)}{\partial r}\right) + \frac{\partial^2 u_r}{\partial z^2}\right]$$

Persamaan ini merepresentasikan gabungan hukum **Darcy** ($\frac{\mu}{\kappa}u_z$) dan koreksi inersial **Forchheimer** ($\beta_F \rho |u_z| u_z$) yang krusial untuk rezim Reynolds tinggi dalam bed biomassa, seperti disorot oleh Obchoei & Limtrakarn (2024) untuk mencegah *underprediction* pressure drop.

### 2.4 Persamaan Energi (Tahap Pressurization–Extraction–Depressurization)

Berdasarkan Toledo & del Valle (2023), persamaan energi transient yang memvalidasi ketiga tahap:

$$\rho C_p \left(\frac{\partial T}{\partial t} + u_z \frac{\partial T}{\partial z}\right) = k_{eff} \left[\frac{1}{r}\frac{\partial}{\partial r}\left(r \frac{\partial T}{\partial r}\right) + \frac{\partial^2 T}{\partial z^2}\right] + \mu \Phi_v - \rho_f \dot{Q}_{latent} + h A_{vessel}(T_{jacket} - T)$$

di mana $\mu \Phi_v$ adalah disipasi viskos, dan $h A_{vessel}(T_{jacket} - T)$ adalah fluks kalor dari jacket eksternal. Persamaan ini menjadi dasar identifikasi *cooldown* pada tahap *pressurization* yang dapat mencapai 8–12 K jika heat transfer jacket tidak cukup.

### 2.5 Persamaan Perpindahan Massa Solute (Cannabinoid)

$$\epsilon \frac{\partial C_s}{\partial t} + u_z \frac{\partial C_s}{\partial z} = D_{ax} \frac{\partial^2 C_s}{\partial z^2} + k_f a_s (C_{s,biosolid}^* - C_s)$$

dengan $D_{ax}$ koefisien dispersi aksial, $k_f$ koefisien transfer massa fluida–padatan, $a_s$ luas interfacial spesifik, dan $C_{s,biosolid}^*$ konsentrasi kesetimbangan dalam solid phase.

### 2.6 Persamaan Keadaan dan Sifat CO₂

Untuk densitas CO₂ superkritis pada $P = 30$ MPa, $T = 323$ K, persamaan Span–Wagner atau EOS Peng–Robinson digunakan:

$$P = \frac{RT}{V_m - b} - \frac{a(T)}{V_m(V_m + b) + b(V_m - b)}$$

dengan parameter $a(T)$ yang bergantung pada faktor acentric $\omega = 0,225$ untuk CO₂.

### 2.7 Yield Integral

Yield kumulatif didefinisikan sebagai:

$$Y(t) = \frac{\int_0^t \dot{m}_{CO_2}(z=H, \tau) \cdot C_s(z=H, \tau) d\tau}{m_{biomass}} \times 100\%$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### SOP-SFE-001: Ekstraksi Minyak Cannabis dengan CO₂ Superkritis

**Tahap 0 — Pre-Processing & Loading**
1. Sortasi dan *grinding* biomassa cannabis kering hingga ukuran partikel 1–3 mm untuk meningkatkan $a_s$ namun menghindari *fine packing* yang menurunkan $\kappa$.
2. Pengisian bed secara *tamped* dengan target densitas packing $\rho_{bed} = 350$–$450$ kg/m³.
3. Pengukuran massa biomassa $m_{biomass}$ dan pencatatan kadar air (<10%).

**Tahap 1 — Pressurization** (Toledo & del Valle, 2023)
1. Tutup vessel, inisiasi jacket heater pada $T_{jacket} = 343$ K.
2. Akt.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
