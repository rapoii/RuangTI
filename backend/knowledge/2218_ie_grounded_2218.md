# 2218 — Pemodelan Aliran Aksimetrik dan Transfer Panas pada Ekstraksi Minyak Cannabis dengan Fluida Superkritikal CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botani modern tengah mengalami transformasi paradigmatis yang didorong oleh permintaan global terhadap produk *cannabidiol* (CBD), *tetrahydrocannabinol* (THC) untuk farmasi, nutraceutical, dan kosmetik kelas premium. Pasar minyak cannabis global diproyeksikan menembus valuasi lebih dari USD 60 miliar pada dekade ini dengan *compound annual growth rate* (CAGR) di kisaran 18–22%, sehingga mendorong kebutuhan akan proses ekstraksi yang tidak hanya *scalable* tetapi juga mampu memenuhi regulasi *Good Manufacturing Practice* (GMP) farmasi. Di antara beragam teknologi ekstraksi yang tersedia—mulai dari pelarut organik konvensional, etanol, hingga distilasi uap—ekstraksi dengan **fluida superkritikal CO₂ (Supercritical Fluid Extraction, SFE)** muncul sebagai *gold standard* karena sifatnya yang non-toksik, tidak meninggalkan residu pelarut, selektivitas tinggi terhadap cannabinoid target, serta kemampuannya untuk memisahkan komponen bioaktif termolabil seperti terpena.

Thanachai Obchoei dan Wiroj Limtrakarn (2024) dalam *International Journal of Thermofluids* menyoroti satu masalah kritis yang selama ini menghambat *scale-up* proses SFE dari *bench-scale* (≤ 1 L) ke *pilot-industrial* (≥ 100 L), yaitu **ketiadaan model aliran aksimetrik yang mampu memprediksi distribusi konsentrasi minyak cannabis secara spasial dalam tabung ekstraktor cylindrical**. Distribusi konsentrasi yang tidak homogen berakibat pada *channeling effect*, *dead zone* di sepanjang *packed bed* biomassa, serta penurunan *yield* hingga 15–30% dibandingkan prediksi stoikiometri ideal. Studi Obchoei & Limtrakarn (2024) menutup gap ini melalui formulasi Computational Fluid Dynamics (CFD) yang menggabungkan persamaan momentum aksimetrik dengan kinetika desorpsi cannabinoid dari matriks tanaman.

Di sisi lain, Felipe R. Toledo dan José M. del Valle (2023) dalam *The Journal of Supercritical Fluids* melengkapi pemahaman dengan mengkuantifikasi efek transfer panas pada tiga tahap kritis siklus SFE: **pressurization** (naikkan tekanan dari 60 bar ke 300 bar), **extraction** (steady-state isobarik), dan **depressurization** (turun ke tekanan atmosferik). Kedua penulis menemukan bahwa selama tahap *pressurization* dan *depressurization*, gradien termal radial dan aksial pada dinding extractor baja tahan karst 316L dapat mencapai ΔT = 15–25°C, yang secara langsung memengaruhi kelarutan CO₂ superkritikal dan selectivity terhadap cannabinoid target. Tanpa akomodasi model transfer panas ini, desain *heat exchanger* eksternal sering kali *over-sized* atau *under-sized* sebesar 20–40%.

Konteks industri Indonesia juga relevan: dengan terbitnya **Peraturan BPOM No. 8 Tahun 2024** tentang pengawasan produk mengandung cannabis untuk kebutuhan medis, kapasitas rekayasa proses pada fasilitas SFE dalam negeri akan meningkat tajam. Oleh karena itu, pemahaman akan model aksimetrik dan perpindahan panas menjadi *core competency* insinyur industri yang akan merancang, mengoperasikan, dan mengoptimasi fasilitas SFE masa depan.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Geometri Aksimetrik dan Asumsi Dasar

Sistem SFE dimodelkan sebagai tabung silinder vertikal dengan radius $R$ dan tinggi $H$, di mana biomassa cannabis membentuk *porous packed bed* dengan porositas $\varepsilon_b$. Karena geometri dan kondisi batas simetris terhadap sumbu vertikal $z$, model dikembangkan dalam koordinat silinder $(r, z)$, dengan kecepatan radial $v_r$ dan aksial $v_z$.

### 2.2 Persamaan Kontinuitas (Konservasi Massa)

Untuk fase fluida superkritikal, hukum konservasi massa dalam koordinat aksimetrik dinyatakan sebagai:

$$\frac{1}{r}\frac{\partial}{\partial r}\left(r \rho_{SC} v_r\right) + \frac{\partial}{\partial z}\left(\rho_{SC} v_z\right) = -S_m$$

di mana $\rho_{SC}$ adalah densitas CO₂ superkritikal dan $S_m$ adalah *source term* yang merepresentasikan laju pelarutan minyak cannabis ke dalam fasa superkritikal (kg/m³·s).

### 2.3 Persamaan Momentum (Navier-Stokes Aksimetrik)

Dengan asumsi aliran *steady*, *laminar* (Re < 1000 khas untuk SFE), dan mengikuti pendekatan Brinkman-Forchheimer untuk *porous media*:

$$\rho_{SC}\left(v_r\frac{\partial v_z}{\partial r} + v_z\frac{\partial v_z}{\partial z}\right) = -\frac{\partial P}{\partial z} + \mu_{SC}\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial v_z}{\partial r}\right) + \frac{\partial^2 v_z}{\partial z^2}\right] - \frac{\mu_{SC}}{K}v_z - \frac{\rho_{SC}C_F}{\sqrt{K}}|v_z|v_z$$

di mana $K$ adalah permeabilitas Darcy ($m^2$), $C_F$ adalah koefisien inertial Forchheimer (≈ 0.55 untuk bed biomassa), dan $\mu_{SC}$ adalah viskositas dinamik CO₂ superkritikal.

### 2.4 Persamaan Energi (Konservasi Energi Termal)

Berdasarkan formulasi Toledo & del Valle (2023), untuk tahap *extraction* steady-state:

$$\rho_{SC} c_{p,SC}\left(v_r\frac{\partial T}{\partial r} + v_z\frac{\partial T}{\partial z}\right) = \frac{1}{r}\frac{\partial}{\partial r}\left(r k_{SC}\frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k_{SC}\frac{\partial T}{\partial z}\right) + \dot{q}_{diss} - \dot{q}_{loss}$$

di mana $\dot{q}_{diss}$ adalah disipasi viskos dan $\dot{q}_{loss}$ adalah kalor yang hilang melalui dinding extractor. Untuk tahap *pressurization* transien, *transient term* $\rho_{SC} c_{p,SC} \partial T/\partial t$ ditambahkan di ruas kiri.

### 2.5 Kinetika Ekstraksi (Sovová, 1994; diperbarui Obchoei 2024)

Laju transfer massa cannabinoid dari matriks padat ke fasa superkritikal mengikuti model dua-mekanisme:

$$\frac{\partial C}{\partial t} = \begin{cases} k_f a_p (C^* - C), & \text{fase 1: konvektif (t < t_{CER})} \\ k_s a_p (C^* - C), & \text{fase 2: difusif (t \geq t_{CER})} \end{cases}$$

dengan $C^*$ adalah konsentrasi jenuh (kelarutan) cannabinoid dalam CO₂ superkritikal yang dihitung dari persamaan *Peng-Robinson* EOS:

$$P = \frac{R_g T}{V_m - b} - \frac{a(T)}{V_m(V_m + b) + b(V_m - b)}$$

### 2.6 Kondisi Batas

- **Inlet** ($z = 0$): $v_z = v_{in}$, $C = C_{in}$, $T = T_{in}$
- **Outlet** ($z = H$): $\partial P / \partial z = 0$, $\partial C / \partial z = 0$
- **Dinding** ($r = R$): $v_r = 0$, $T = T_{wall}$ (model *convective* dengan $h_{ext}$)

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri model Obchoei-Limtrakarn (2024) memerlukan SOP berlapis yang mengikuti arsitektur **PDCA (Plan-Do-Check-Act)** dengan integrasi CFD sebagai *decision support system*.

### 3.1 Tahap Plan — Penyiapan Geometri & Diskretisasi

1. **Karakterisasi biomassa**: ukur distribusi ukuran partikel (sieve analysis ASTM E11), kadar air (gravimetri 105°C/3h), dan kadar cannabinoid awal (HPLC-DAD).
2. **Definisi geometri CFD**: buat geometri 2D aksimetrik dengan *mesh independence test* pada minimal 5 tingkatan refinement (target *grid convergence index* GCI < 2%).
3. **Input property database**: gunakan NIST REFPROP atau CoolProp untuk $\rho_{SC}$, $\mu_{SC}$, $k_{SC}$, $c_{p,SC}$ sebagai fungsi $(P, T)$.

### 3.2 Tahap Do — Simulasi & Ekstraksi

1. **Set solver**: SIMPLE algorithm, second-order upwind, residual target 10⁻⁶.
2. **Inisialisasi**: tekanan kerja $P = 250$ bar, suhu $T = 50°C$ (di atas $T_c = 31.04°C$ dan $P_c = 73.8$ bar CO₂).
3. **Run transient**: integrasikan persamaan energi + momentum + kinetika secara coupled hingga *quasi-steady state* tercapai (residuali stabil selama ≥ 1000 iterasi).

### 3.3 Tahap Check — Validasi

Validasi dilakukan terhadap data eksperimental Obchoei & Limtrakarn (2024) menggunakan *Root Mean Square Error* (RMSE):

$$RMSE = \sqrt{\frac{1}{N}\sum_{i=1}^{N}(Y_{sim,i} - Y_{exp,i})^2}$$

Kriteria terima: RMSE < 5% terhadap profil konsentrasi minyak keluar.

### 3.4 Tahap Act — Optimasi & Scale-Up

Gunakan hasil CFD sebagai input ke algoritma *Response Surface Methodology* (RSM) atau *Genetic Algorithm* untuk menemukan kombinasi optimal $(P, T, \dot{m}_{CO_2}, \text{particle size})$ yang memaksimumkan *yield* dengan约束 konsumsi energi minimum.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Spesifikasi Kasus

Sebuah fasilitas SFE di Indonesia akan mengekstraksi biomassa cannabis dengan parameter berikut:

| Parameter | Nilai | Satuan |
|---|---|---|
| Tekanan kerja $P$ | 250 | bar |
| Suhu kerja $T$ | 50 | °C |
| Radius extractor $R$ | 0.075 | m |
| Tinggi extractor $H$ | 0.6 | m |
| Porositas bed $\varepsilon_b$ | 0.42 | – |
| Laju alir massa CO₂ $\dot{m}_{CO_2}$ | 8.5 | kg/jam |
| Kadar cannabinoid awal $q_0$ | 0.12 | kg/kg biomassa |

### 4.2 Properti CO₂ Superkritikal (NIST REFPROP @ 250 bar, 50°C)

$$\rho_{SC} = 830.4 \text{ kg/m}^3, \quad \mu_{SC} = 7.18 \times 10^{-5} \text{ Pa·s}, \quad k_{SC} = 0.098 \text{ W/m·K}, \quad c_{p,SC} = 1425 \text{ J/kg·K}$$

### 4.3 Perhitungan Bilangan Reynolds dan Aliran

Kecepatan superfisial:

$$v_{sup} = \frac{\dot{m}_{CO_2}}{\rho_{SC} \cdot \pi R^2} = \frac{8.5/3600}{830.4 \cdot \pi (0.075)^2} = \frac{2.361 \times 10^{-3}}{14.67} = 1.610 \times 10^{-4} \text{ m/s}$$

Bilangan Reynolds berbasis partikel ($d_p = 1.5$ mm):

$$Re_p = \frac{\rho_{SC} \cdot v_{sup} \cdot d_p}{\mu_{SC}} = \frac{830.4 \times 1.610 \times 10^{-4} \times 1.5 \times 10^{-3}}{7.18 \times 10^{-5}} \approx 2.79$$

Karena $Re_p \ll 10$, asumsi aliran laminar dan hukum Darcy valid — konsisten dengan pendekatan Obchoei & Limtrakarn (2024).

### 4.4 Perhitungan Permeabilitas $K$ (Kozeny-Carman)

$$K = \frac{d_p^2 \varepsilon_b^3}{150(1-\varepsilon_b)^2} = \frac{(1.5 \times 10^{-3})^2 (0.42)^3}{150(0.58)^2} = \frac{1.78 \times 10^{-7}}{50.46} = 3.53 \times 10^{-9} \text{ m}^2$$

### 4.5 Drop Tekanan (Darcy-Forchheimer)

$$-\frac{\partial P}{\partial z} = \frac{\mu_{SC}}{K}v_{sup} + \frac{\rho_{SC} C_F}{\sqrt{K}} v_{sup}^2