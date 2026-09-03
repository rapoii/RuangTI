# 2650 — Pemodelan Aliran Aksisimetrik Ekstraksi Minyak Kanabis dengan Fluida Superkritis CO₂: Integrasi Model Perpindahan Panas dan Transfer Massa untuk Optimasi Proses Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric Flow Model of Cannabis Oil Extraction of Supercritical Fluid Extraction CO₂ Process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi nabati modern, khususnya untuk material bioaktif dari *Cannabis sativa* L., tengah mengalami transformasi teknologi yang signifikan sejak diterapkannya kerangka regulasi legalisasi di berbagai yurisdiksi (Kanada, Uruguay, beberapa negara bagian AS, Thailand, dan Jerman). Minyak kanabis—mengandung cannabinoid seperti cannabidiol (CBD) dan delta-9-tetrahydrocannabinol (Δ⁹-THC)—menjadi produk bernilai tinggi dengan harga pasar grosir antara USD 5.000–50.000 per kilogram tergantung profil cannabinoid dan kemurniannya (Pharmaceutical Technology, 2023). Dalam konteks ini, **Supercritical Fluid Extraction using CO₂ (SCFE-CO₂)** muncul sebagai teknologi dominan karena kemampuannya meninggalkan residu pelarut, bersifat tunable melalui parameter operasi, dan memenuhi standar farmasi (Good Manufacturing Practice/GMP).

Namun demikian, desain dan penskalaan reaktor SCFE-CO₂ konvensional menghadapi tantangan fundamental: ekstraksi terjadi dalam *packed bed* biomassa yang bersifat *transient*, *non-isothermal*, dan *multi-fasa* (padat-cair-gas). Variabilitas spasial konsentrasi CO₂, gradien tekanan aksial-radial, dan pelepasan kalor ekspansif selama *depressurization* menyebabkan *yield* aktual seringkali lebih rendah 15–30% dari prediksi termodinamika kesetimbangan. Thanachai Obchoei dan Wiroj Limtrakarn (2024) dalam *International Journal of Thermofluids* DOI: [10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682) mengusulkan **model aliran aksisimetrik 2-D** yang menyatukan dinamika fluida kompresibel dalam geometri silinder dengan mekanisme transfer massa internal partikel biomassa. Studi ini menjawab keterbatasan pendekatan *lumped parameter* yang selama ini mengabaikan distribusi radial *velocity field* dan profil konsentrasi.

Di sisi komplementer, Felipe R. Toledo dan José M. del Valle (2023) dalam *The Journal of Supercritical Fluids* DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046) menyoroti bahwa **perpindahan panas selama tiga tahap siklik** (pressurization, extraction, depressurization) memiliki dampak besar terhadap selektivitas dan efisiensi energi. Tanpa model perpindahan panas yang valid, kapasitas pendinginan *heat exchanger* menjadi *bottleneck* pada reaktor skala pilot 50–100 L. Kedua paper ini membentuk basis metodologis bagi rekayasawan industri untuk melakukan simulasi CFD (Computational Fluid Dynamics) yang *physics-based*, bukan sekadar empiris, guna menekan biaya operasional yang didominasi oleh energi kompresi (40–55% dari total *operating cost* menurut data lapangan).

Urgensi ekonominya menjadi jelas: untuk fasilitas SCFE-CO₂ berkapasitas 100 kg biomassa/hari, peningkatan *yield* 1% saja setara dengan penghematan atau penambahan pendapatan USD 50.000–500.000 per bulan. Karena itu, integrasi kedua model menjadi pilar penting dalam *Process Intensification* dan optimalisasi CAPEX/OPEX fasilitas ekstraksi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan PengGovern dalam Geometri Aksisimetrik

Model Obchoei & Limtrakarn (2024) dibangun di atas empat persamaan konservasi dasar yang diselesaikan dalam koordinat silinder $(r, z)$ dengan asumsi **aksisimetrik** (tidak ada variasi pada arah $\theta$):

**Persamaan Kontinuitas (massa fluida kompresibel):**

$$\frac{\partial \rho}{\partial t} + \frac{1}{r}\frac{\partial (r \rho u_r)}{\partial r} + \frac{\partial (\rho u_z)}{\partial z} = 0$$

di mana $\rho$ adalah densitas fluida CO₂, $u_r$ dan $u_z$ adalah komponen kecepatan radial dan aksial.

**Persamaan Momentum (Navier–Stokes untuk fluida kompresibel viskos):**

$$\rho\left(\frac{\partial u_z}{\partial t} + u_r \frac{\partial u_z}{\partial r} + u_z \frac{\partial u_z}{\partial z}\right) = -\frac{\partial p}{\partial z} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_z}{\partial r}\right) + \frac{\partial^2 u_z}{\partial z^2}\right] + \rho g_z$$

$$\rho\left(\frac{\partial u_r}{\partial t} + u_r \frac{\partial u_r}{\partial r} + u_z \frac{\partial u_r}{\partial z}\right) = -\frac{\partial p}{\partial r} + \mu\left[\frac{\partial}{\partial r}\left(\frac{1}{r}\frac{\partial (r u_r)}{\partial r}\right) + \frac{\partial^2 u_r}{\partial z^2}\right]$$

**Persamaan Energi (perpindahan panas dengan sumber kalor pelepasan laten):**

$$\rho C_p \left(\frac{\partial T}{\partial t} + u_r \frac{\partial T}{\partial r} + u_z \frac{\partial T}{\partial z}\right) = k\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial T}{\partial r}\right) + \frac{\partial^2 T}{\partial z^2}\right] + \mu \Phi + \dot{q}_{\text{exp}}$$

dengan $\Phi = 2\left[\left(\frac{\partial u_r}{\partial r}\right)^2 + \left(\frac{u_r}{r}\right)^2 + \left(\frac{\partial u_z}{\partial z}\right)^2\right] + \left(\frac{\partial u_z}{\partial r} + \frac{\partial u_r}{\partial z}\right)^2$ dan $\dot{q}_{\text{exp}}$ adalah laju pelepasan kalor ekspansif—yang sesuai dengan temuan Toledo & del Valle (2023) sebagai komponen dominan pada tahap *depressurization*.

**Persamaan Species Transport (konsentrasi minyak $c$ dalam fase fluida):**

$$\frac{\partial c}{\partial t} + u_r \frac{\partial c}{\partial r} + u_z \frac{\partial c}{\partial z} = D_{\text{eff}} \left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial c}{\partial r}\right) + \frac{\partial^2 c}{\partial z^2}\right] + J_{i \rightarrow f}$$

di mana $J_{i \rightarrow f} = k_f a_p (c^* - c)$ adalah fluks transfer massa dari fase intra-partikel ke fase fluida dengan koefisien transfer massa eksternal $k_f$ dan luas spesifik partikel $a_p$.

### 2.2 Persamaan Keadaan dan Properti CO₂ Superkritis

Untuk menutup sistem persamaan, diperlukan hubungan $\rho(p, T)$ yang akurat. Persamaan **Peng–Robinson** memberikan:

$$P = \frac{RT}{V_m - b} - \frac{a(T)}{V_m(V_m + b) + b(V_m - b)}$$

$$a(T) = 0.45724 \frac{R^2 T_c^2}{P_c} \left[1 + \kappa\left(1 - \sqrt{T/T_c}\right)\right]^2, \quad \kappa = 0.37464 + 1.54226\omega - 0.26992\omega^2$$

dengan parameter kritis CO₂: $T_c = 304.13$ K, $P_c = 7.377$ MPa, $\omega = 0.225$.

### 2.3 Model Kinetika Ekstraksi (Sovová's Broken-and-Intact-Cells)

Model two-stage yang umum diadopsi untuk skenario industri:

$$\text{Tahap I (konstanta, } 0 < t < t_{\text{CER}}): \quad e(t) = q \left[1 - \exp\left(-\frac{F}{q} t\right)\right]$$

$$\text{Tahap II (menurun, } t > t_{\text{CER}}): \quad e(t) = e_{\text{CER}} + \frac{(x_0 - x_{\text{CER}})}{\text{S/F}} \cdot \left[1 - \exp\left(-\frac{k_F F}{\text{SC-CO}_2}\right)\right]$$

dengan $q$ adalah laju ekstraksi konstan dari sel yang pecah, $F$ laju alir CO₂, dan $k_F$ koefisien transfer massa dari sel utuh.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model Obchoei–Limtrakarn ke dalam siklus desain dan operasi mengikuti **SOP 7-tahap** berikut:

### Tahap 1 — Karakterisasi Bahan Baku
- Ukuran partikel biomassa: target $d_p$ = 0.5–2.0 mm (ayakan standar ISO 3310-1)
- Kadar air: ≤ 12% (gravimetri, ASTM E1756)
- Kandungan awal cannabinoid: HPLC (mis. $x_0$ = 12% berat)

### Tahap 2 — Diskretisasi Domain (Pre-processing CFD)
Geometri vessel silinder $(D, L)$ dipotong separuh karena simetri aksial. *Mesh independence test* dilakukan pada $N$ = 50.000, 200.000, dan 800.000 sel dengan target *Grid Convergence Index* (GCI) < 5% sesuai standar ASME V&V 20-2009.

### Tahap 3 — Penentuan Kondisi Batas (*Boundary Conditions*)
- **Inlet (z = 0):** $u_z = u_{\text{in}}$, $T = T_{\text{in}}$, $p = P_{\text{op}}$, $c = 0$
- **Outlet (z = L):** $\partial p/\partial z = 0$, $\partial T/\partial z = 0$ (*outflow*)
- **Dinding (r = R):** kondisi *no-slip* $u_r = u_z = 0$, perpindahan panas konvektif $q'' = h_{\text{wall}}(T_w - T)$ dengan $h_{\text{wall}}$ mengikuti korelasi Sieder–Tate untuk aliran melalui packed bed:

$$Nu = \frac{h_{\text{wall}} D}{k_f} = 1.13 Re^{0.5} Pr^{0.33}$$

### Tahap 4 — Solver dan Skema Diskretisasi
- Software: ANSYS Fluent 2024 / COMSOL Multiphysics 6.2
- Skema: SIMPLE untuk *pressure-velocity coupling*, second-order upwind untuk konveksi, BDF untuk transien
- Toleransi konvergensi residual: