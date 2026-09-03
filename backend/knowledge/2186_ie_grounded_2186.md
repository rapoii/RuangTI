# 2186 — Pemodelan Aliran Aksisimetrik pada Ekstraksi Minyak Kanabis dengan Proses Superkritikal CO2 (SCFE)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO2 process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botanol dan fitokimia global sedang mengalami transformasi paradigma akibat meningkatnya permintaan akan produk kanabis legal untuk aplikasi farmasi, nutraceutical, dan kosmetik. Pasar global ekstrak kanabis diproyeksikan mencapai USD 23,7 miliar pada tahun 2027 dengan CAGR >18%, didorong oleh penerimaan regulasi atas senyawa cannabinoid (THC, CBD, CBG) dan terpena minor untuk terapi medis. Di tengah dinamika pasar tersebut, **Supercritical Fluid Extraction (SCFE) dengan CO2** muncul sebagai teknologi benchmark karena meninggalkan residu pelarut organik, bersifat tunable (selektivitas dikontrol oleh tekanan dan suhu), serta memenuhi standar *Good Manufacturing Practice* (GMP) farmasi (Obchoei & Limtrakarn, 2024, DOI: [10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)).

Namun demikian, desain dan penskalaan ekstraktor SCFE komersial — dari kapasitas laboratorium 1–5 L menuju kapasitas pilot 50–200 L dan kapasitas produksi industri >1.000 L — menghadapi tantangan fundamental berupa **kopling kuat antara hidrodinamika, perpindahan massa, dan perpindahan panas** di dalam unggun partikel nabati. Proses berlangsung pada tekanan tinggi (100–350 bar) sehingga gradien densitas CO2 superkritik, perilaku fasa pseudo-cair, dan ekspansi adiabatik selama *depressurization* sangat memengaruhi yield dan selektivitas. Obchoei dan Limtrakarn (2024) menekankan bahwa pemahaman terhadap *axisymmetric flow* dalam geometri silinder ekstraktor adalah prasyarat untuk memprediksi profil konsentrasi solute secara radial dan aksial — yang tidak dapat ditangkap oleh model *plug flow* satu dimensi klasik.

Secara operasional, proses SCFE-CO2 kanabis terdiri atas tiga tahapan kritis: (i) **pressurization** untuk menaikkan fluida ke kondisi superkritik; (ii) **static extraction** di mana CO2 melarutkan cannabinoid dalam matriks padat selama waktu tinggal tertentu; dan (iii) **dynamic extraction** dengan CO2 mengalir melalui unggun, diikuti (iv) **depressurization** di separator. Toledo dan del Valle (2023, DOI: [10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)) menunjukkan bahwa konversi energi mekanis menjadi termal pada tahap-tahap ini menghasilkan *transient thermal behavior* yang signifikan, dengan variasi suhu lokal mencapai 8–15 K — cukup untuk menggeser kondisi operasi dari *miscibility envelope* optimum dan menurunkan yield hingga 20%. Kedua paper tersebut secara komplementer membangun dasar untuk pemodelan komprehensif yang dibahas dalam modul ini.

Urgensi ekonominya sangat relevan bagi praktisi Teknik Industri: *Capital Expenditure* (CAPEX) ekstraktor SCFE kapasitas 1.000 L berkisar USD 1,5–4 juta, sehingga kesalahan desain 10% dalam prediksi yield berdampak pada kerugian ratusan ribu USD per siklus produksi. Optimalisasi melalui Computational Fluid Dynamics (CFD) dan model matematis terapan menjadi pembeda kompetitif utama antara operator kelas dunia dan pemain tradisional.

---

## 2. Landasan Teori & Formulasi Matematis

Pemodelan proses SCFE-CO2 kanabis memerlukan sistem PDE (Persamaan Diferensial Parsial) kopling yang diselesaikan dalam koordinat silinder $(r, \theta, z)$ dengan asumsi **axisymmetric** ($\partial/\partial\theta = 0$). Berikut adalah kerangka matematis yang dirangkum dari Obchoei & Limtrakarn (2024) serta dilengkapi kontribusi perpindahan panas dari Toledo & del Valle (2023).

### 2.1. Persamaan Kontinuitas (Konservasi Massa)

Untuk fluida superkritik yang mengalir melalui unggun berpori (porous medium), konservasi massa diekspresikan sebagai:

$$\frac{\partial \rho_f}{\partial t} + \frac{1}{r}\frac{\partial (r \rho_f u_r)}{\partial r} + \frac{\partial (\rho_f u_z)}{\partial z} = 0$$

dengan $\rho_f$ densitas CO2 superkritik (kg/m³), $u_r$ dan $u_z$ komponen kecepatan radial dan aksial (m/s). Karena CO2 superkritik bersifat *slightly compressible* pada kondisi operasi tipikal (250 bar, 333 K, $\rho_f \approx 830$ kg/m³), maka dapat diterapkan hipotesis *Boussinesq termal* untuk variasi densitas kecil.

### 2.2. Persamaan Momentum dalam Media Berpori (Darcy-Forchheimer-Brinkman)

Aliran CO2 melalui partikel kanabis giling (*ground cannabis biomass*) memenuhi rezim transisi Darcy-Forchheimer. Persamaan momentum radial dan aksial:

$$\rho_f \left(\frac{\partial u_r}{\partial t} + u_r\frac{\partial u_r}{\partial r} + u_z\frac{\partial u_r}{\partial z}\right) = -\frac{\partial p}{\partial r} + \mu_{eff}\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_r}{\partial r}\right) + \frac{\partial^2 u_r}{\partial z^2} - \frac{u_r}{r^2}\right] - \frac{\mu_f}{K}u_r - \frac{\rho_f C_F}{\sqrt{K}}|u|u_r$$

$$\rho_f \left(\frac{\partial u_z}{\partial t} + u_r\frac{\partial u_z}{\partial r} + u_z\frac{\partial u_z}{\partial z}\right) = -\frac{\partial p}{\partial z} + \mu_{eff}\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_z}{\partial r}\right) + \frac{\partial^2 u_z}{\partial z^2}\right] - \frac{\mu_f}{K}u_z + \rho_f g$$

dengan $\mu_f$ viskositas dinamis CO2 superkritik (≈ 7,1 × 10⁻⁵ Pa·s pada 333 K/250 bar), $K$ permeabilitas intrinsik unggun (m²), $C_F$ koefisien inersia Forchheimer (≈ 0,5 untuk unggun spherical), dan $\mu_{eff}$ viskositas efektif yang menggabungkan kontribusi viskositas fluida dan turbulensi di pori-pori (model Brinkman).

### 2.3. Persamaan Energi (Coupled Heat Transfer)

Berdasarkan Toledo & del Valle (2023), persamaan energi dua域 (two-domain: fluida + padatan) ditulis:

$$\varepsilon \rho_f c_{p,f}\left(\frac{\partial T_f}{\partial t} + u_z\frac{\partial T_f}{\partial z}\right) = \frac{1}{r}\frac{\partial}{\partial r}\left(r k_{f,eff}\frac{\partial T_f}{\partial r}\right) + \frac{\partial}{\partial z}\left(k_{f,eff}\frac{\partial T_f}{\partial z}\right) + h_v(T_s - T_f)$$

$$(1-\varepsilon)\rho_s c_{p,s}\frac{\partial T_s}{\partial t} = \frac{1}{r}\frac{\partial}{\partial r}\left(r k_{s,eff}\frac{\partial T_s}{\partial r}\right) + \frac{\partial}{\partial z}\left(k_{s,eff}\frac{\partial T_s}{\partial z}\right) - h_v(T_s - T_f)$$

dengan $\varepsilon$ porositas unggun (0,35–0,45 untuk biomassa kanabis giling), $c_{p,f}$ dan $c_{p,s}$ kapasitas panas jenis fluida dan padatan (J/kg·K), $k_{f,eff}$ dan $k_{s,eff}$ konduktivitas termal efektif (W/m·K), dan $h_v$ koefisien perpindahan panas volumetrik antardomain (W/m³·K). Toledo & del Valle (2023) memvalidasi model ini dengan eksperimen pada ekstraktor 5 L dan memperoleh korelasi:

$$Nu_v = \frac{h_v d_p^2}{k_f} = 2,0 + 1,1 Re_p^{0,6} Pr^{1/3}$$

dengan $Re_p = \rho_f u_z d_p/\mu_f$, $Pr$ bilangan Prandtl CO2 (≈ 2,0 pada 333 K/250 bar), dan $d_p$ diameter partikel rata-rata (m).

### 2.4. Persamaan Perpindahan Massa Solute (Cannabinoid)

Model perpindahan massa mengadopsi pendekatan *axial dispersion* dengan *surface reaction-like* kinetics untuk pelarutan cannabinoid dalam CO2 superkritik:

$$\varepsilon \frac{\partial C}{\partial t} + u_z\frac{\partial C}{\partial z} = D_{ax}\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial C}{\partial r}\right) + \frac{\partial^2 C}{\partial z^2}\right] - J$$

dengan $C$ konsentrasi cannabinoid terlarut (kg/m³) dan $D_{ax}$ koefisien dispersi aksial (m²/s). Fluks perpindahan massa $J$ diekspresikan sebagai:

$$J = \rho_s (1-\varepsilon) k_s a_p (C^* - C)$$

dengan $k_s$ koefisien transfer massa eksternal (m/s), $a_p$ luas permukaan spesifik partikel (m²/m³), dan $C^*$ konsentrasi kesetimbangan (solubility) yang tergantung pada tekanan dan suhu melalui persamaan keadaan Span-Wagner untuk CO2:

$$C^*(P,T) = \rho_f(P,T) \cdot y^*_{CBD}$$

### 2.5. Yield Kumulatif dan Kerangka Solusi

Yield ekstraksi kumulatif $Y(t)$ diperoleh dari integrasi fluks pada outlet:

$$Y(t) = \frac{1}{M_0}\int_0^t \dot{m}_{CO_2}(\tau) \cdot C(\tau, z=L)\, d\tau$$

Sistem PDE kopling diselesaikan secara numerik dengan metode **Finite Volume Method (FVM)** pada grid terstruktur 2D axisymmetric menggunakan solver ANSYS Fluent atau OpenFOAM dengan modul *porous media*, hingga residu <10⁻⁶.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri dari model di atas mengikuti kerangka **V-Model** rekayasa proses yang menjamin *traceability* antara spesifikasi desain dan validasi lapangan. Diagram alir implementasi berikut disesuaikan dengan rekomendasi Obchoei & Limtrakarn (2024) serta Toledo & del Valle (2023).

**Tahap A — Karakterisasi Bahan Baku**
1. Pengukuran *moisture content* (target <8%wb), ukuran partikel $d_p$ (target 0,5–1,5 mm), dan kadar cannabinoid awal $C_0$ (HPLC-UV, target THC 15–22%w/w).
2. Pengukuran densitas unggun $\rho_b$ dan porositas $\varepsilon$ menggunakan metode *tap density* ASTM D7481.
3. Penentuan permeabilitas intrinsik $K$ dengan korelasi Kozeny-Carman: $K = d_p^2 \varepsilon^3 / [150(1-\varepsilon)^2]$.

**Tahap B — Penentuan Kondisi Operasi**
1. Pilih tekanan operasi $P$ (tipikal 200–280 bar) untuk menjamin kelarutan CBD >5 g/kg CO2.
2. Pilih suhu operasi $T$ (313–343 K) menyeimbangkan viskositas rendah dan stabilitas cannabinoid.
3. Hitung densitas dan viskositas CO2 superkritik dari persamaan Span-Wagner melalui NIST REFPROP.
4. Validasi prediksi $C^*$ menggunakan *Chrastil's equation*: $C^* = \rho_f^k \exp(a/T + b)$ (parameter $k$, $a$, $b$ dikalibrasi untuk sistem CBD-CO2).

**Tahap C — Simulasi CFD dan Validasi**
1. Buat geometri 2D axisymmetric ekstraktor (rasio L/D = 4–6 tipikal).
2. Terapkan boundary conditions: inlet *mass-flow-inlet*, outlet *pressure-outlet*, dinding *no-slip* dengan *thermal insulation* atau *constant heat flux* (untuk ekstraktor berselimut).
3. Diskretisasi grid 200 × 800 elemen (radial × aksial), lakukan *grid independence test*.
4. Jalankan solver coupled pressure-velocity (SIMPLE atau PISO), timestep adaptif 10⁻⁴ s selama 7.200 s.
5. Bandingkan prediksi yield dengan data eksperimen; target R² > 0,95 dan *Mean Absolute Relative Deviation* (MARD) < 8%.

**Tahap D — Scale-Up Industri**
1. Terapkan相似原理 (dimensional analysis) untuk mempertahankan konstanta $Re_p$, $Pe$, dan bilangan tak berdimensi perpindahan massa pada skala baru.
2. Validasi melalui 3–5 *pilot batch* sebelum komersialisasi.
3. Implementasikan *Digital Twin* yang terus