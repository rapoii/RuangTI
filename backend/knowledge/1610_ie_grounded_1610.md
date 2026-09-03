# 1610 — Pemodelan Aliran Aksisimetrik dan Perpindahan Panas pada Ekstraksi Minyak Kanabis dengan Fluida Superkritis CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric Flow Model of Cannabis Oil Extraction of Supercritical Fluid Extraction CO₂ Process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botanol dan nutrasetikal global mengalami transformasi signifikan sejak dekade terakhir, didorong oleh kebutuhan akan proses *green chemistry* yang bebas pelarut organik toksik. Dalam konteks ini, **ekstraksi fluida superkritis (Supercritical Fluid Extraction/SFE)** menggunakan CO₂ (sc-CO₂) muncul sebagai teknologi unggulan karena sifatnya yang non-toksik, tidak mudah terbakar, murah, serta mudah diregenerasi. Pasar ekstraksi minyak kanabis (*cannabis sativa*) global diproyeksikan mencapai USD 28,7 miliar pada tahun 2028 dengan CAGR rata-rata 21,3%, sehingga optimalisasi proses menjadi agenda riset industri yang sangat strategis (Obchoei & Limtrakarn, 2024).

Ekspansi budidaya kanabis medislegal di yurisdiksi seperti Kanada, Jerman, Thailand, dan beberapa negara bagian AS memicu permintaan akan proses ekstraksi yang presisi, reprodusibel, dan sesuai dengan *Good Manufacturing Practice* (GMP). Berbeda dengan destilasi uap atau ekstraksi pelarut hidrokarbon, sc-CO₂ memungkinkan *selectivity tuning* cannabinoid (THC, CBD, CBG) melalui manipulasi tekanan (8–30 MPa) dan suhu (35–60 °C). Akan tetapi, fenomena transien pada tahap **pressurization, extraction, dan depressurization** masih menjadi titik lemah desain reaktor industri karena kopling termodinamika–mekanika fluida–perpindahan massa yang sangat non-linear.

Thanachai Obchoei dan Wiroj Limtrakarn (2024) dalam *International Journal of Thermofluids* memperkenalkan **model aliran aksisimetrik 2-D** yang menggabungkan persamaan kontinuitas, momentum, dan perpindahan massa dalam geometri silinder ekstraktor yang realistis. Studi ini menjawab kelemahan model 1-D sederhana yang selama ini dipakai dalam desain *supercritical extractor* berskala pilot. Studi tersebut menunjukkan bahwa distribusi aksial dan radial tekanan, kecepatan, dan konsentrasi cannabinoid sangat dipengaruhi rasio aspek reaktor, *flow regime* (laminar vs transisi), serta laju alir umpan.

Di sisi lain, Toledo dan del Valle (2023) di *The Journal of Supercritical Fluids* melengkapi pemahaman kita dengan memvalidasi **model perpindahan panas non-adiabatik** yang memasukkan efek kapasitas termal dinding reaktor, koefisien konveksi internal sc-CO₂, dan gradien suhu sepanjang siklus batch. Mereka menunjukkan bahwa asumsi isotermal yang umum digunakan低估 (underestimate) waktu *steady-state* hingga 40% pada reaktor baja berdiameter besar.

Kedua paper ini menjadi fondasi penting untuk industrialisasi proses sc-CO₂ karena mengintegrasikan aspek *computational fluid dynamics* (CFD) dengan analisis termal transien. Dari perspektif **Rekayasa Sistem Industri**, integrasi model ini memungkinkan optimalisasi multi-objektif: minimasi waktu siklus, maksimasi yield cannabinoid, efisiensi energi kompresi, dan kepatuhan terhadap standar farmasi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Geometri Aksisimetrik dan Asumsi Model

Model Obchoei & Limtrakarn (2024) mengadopsi koordinat silindris $(r, z)$ dengan sumbu $z$ sebagai sumbu aksis reaktor. Ekstraktor dimodelkan sebagai silinder vertikal berdiameter dalam $D$ dan tinggi $H$, diisi dengan bahan tanaman (*plant matrix*) yang dianggap sebagai media berpori homogen isotropik dengan porositas $\varepsilon$. Asumsi-asumsi kunci:

1. Aliran sc-CO₂ diasumsikan *axisymmetric* dan *steady-state* selama tahap ekstraksi.
2. Sistem beroperasi di atas titik kritis CO₂ ($T_c = 304{,}13$ K; $P_c = 7{,}38$ MPa).
3. Sifat termodinamika CO₂ dievaluasi dengan persamaan keadaan **Peng-Robinson (1976)**.
4. Perpindahan massa ke dalam padatan digambarkan dengan model *shrinking core* dan difusi efektif.
5. Panas laten pelarutan dan reaksi dekarboksilasi cannabinoid diperhitungkan sebagai *sink/source term* pada persamaan energi.

### 2.2. Persamaan Kontinuitas (Mass Conservation)

Dalam geometri aksisimetrik, bentuk konservatif untuk fluida dengan komposisi multi-komponen adalah:

$$\frac{\partial \rho}{\partial t} + \frac{1}{r}\frac{\partial}{\partial r}(r \rho u_r) + \frac{\partial}{\partial z}(\rho u_z) = 0$$

dengan $\rho$ adalah densitas sc-CO₂, $u_r$ dan $u_z$ adalah komponen kecepatan radial dan aksial. Untuk tahap ekstraksi *steady-state*:

$$\frac{1}{r}\frac{\partial}{\partial r}(r \rho u_r) + \frac{\partial}{\partial z}(\rho u_z) = 0 \tag{1}$$

### 2.3. Persamaan Momentum (Navier–Stokes Aksisimetrik)

Untuk viskositas dinamik $\mu$ yang bergantung pada tekanan dan suhu, persamaan momentum dalam arah $r$ dan $z$ menjadi:

$$\rho\left(u_r\frac{\partial u_r}{\partial r} + u_z\frac{\partial u_r}{\partial z}\right) = -\frac{\partial P}{\partial r} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_r}{\partial r}\right) - \frac{u_r}{r^2} + \frac{\partial^2 u_r}{\partial z^2}\right] - \frac{\mu}{K}u_r \tag{2}$$

$$\rho\left(u_r\frac{\partial u_z}{\partial r} + u_z\frac{\partial u_z}{\partial z}\right) = -\frac{\partial P}{\partial z} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_z}{\partial r}\right) + \frac{\partial^2 u_z}{\partial z^2}\right] - \frac{\mu}{K}u_z + \rho g \tag{3}$$

di mana $K$ adalah permeabilitas intrinsik media berpori (dari persamaan **Kozeny–Carman**):

$$K = \frac{\varepsilon^3}{180(1-\varepsilon)^2} \cdot \frac{d_p^2}{\tau} \tag{4}$$

dengan $d_p$ adalah diameter partikel tanaman dan $\tau$ adalah tortuositas.

### 2.4. Persamaan Energi dengan Sumber Panas

Berdasarkan Toledo & del Valle (2023), persamaan energi untuk fluida superkritis dalam reaktor non-adiabatik:

$$\rho c_p\left(u_r\frac{\partial T}{\partial r} + u_z\frac{\partial T}{\partial z}\right) = \frac{1}{r}\frac{\partial}{\partial r}\left(r k_{eff}\frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k_{eff}\frac{\partial T}{\partial z}\right) + \dot{q}_{rxn} \tag{5}$$

dengan $c_p$ adalah kapasitas panas pada tekanan konstan, $k_{eff}$ konduktivitas efektif (komposit fase padat–fluida), dan $\dot{q}_{rxn}$ adalah laju pelepasan panas akibat dekarboksilasi asam cannabinoid menjadi bentuk netralnya. Untuk dinding reaktor baja (*thermal mass effect*):

$$\rho_w c_{p,w}\frac{\partial T_w}{\partial t} = \frac{k_w}{\delta_w}(T_{ext} - T_w) - h_{int}(T_w - T_{bulk}) \tag{6}$$

dengan $h_{int}$ koefisien konveksi internal yang dikorelasi dengan bilangan **Nusselt** untuk media berpori:

$$Nu = \frac{h_{int} \, d_p}{k_f} = 2 + 1{,}8 Re_p^{0.5} Pr^{0.33} \tag{7}$$

### 2.5. Persamaan Perpindahan Massa (Species Transport)

Untuk konsentrasi cannabinoid terlarut $C_i$ (kg cannabinoid/kg CO₂), persamaan konveksi–difusi:

$$u_r\frac{\partial C_i}{\partial r} + u_z\frac{\partial C_i}{\partial z} = D_{eff,i}\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial C_i}{\partial r}\right) + \frac{\partial^2 C_i}{\partial z^2}\right] - R_i \tag{8}$$

di mana $R_i$ adalah laju pelarutan efektif per satuan volume, dan kelarutan $C_i^*$ pada kondisi kesetimbangan mengikuti **model Chrastil (1982)**:

$$C_i^* = \rho^{k} \exp\left(\frac{a}{T} + b\right) \tag{9}$$

dengan $k$, $a$, $b$ adalah konstanta empiris spesifik cannabinoid (untuk CBD: $k \approx 2{,}27$, $a \approx -4500$ K, $b \approx -10{,}9$).

### 2.6. Persamaan Keadaan Peng–Robinson

Untuk menutup sistem, densitas sc-CO₂ dihitung dari:

$$P = \frac{RT}{V_m - b} - \frac{a(T)}{V_m(V_m + b) + b(V_m - b)} \tag{10}$$

dengan parameter $a(T)$ dan $b$ yang merupakan fungsi dari sifat kritis CO₂.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri dari model ini mengikuti **SOP batch SFE-CO₂** yang distandarisasi oleh ASTM D7804 dan selaras dengan pedoman GMP farmasi:

**Tahap 1 — Persiapan Sistem & Pre-pressurization (0–10 menit):**
1. Validasi *batch number* dan sertifikat analisa (*Certificate of Analysis*) bahan baku kanabis (kadar air ≤ 10%, ukuran partikel 0,5–2 mm).
2. Pengisian *extraction vessel* (EV) dengan massa $m_s$ (umumnya 5–50 kg per siklus pada reaktor industri).
3. Pemeriksaan kebocoran (*pressure leak test*) dengan N₂ pada 1,1× tekanan desain.
4. Aktivasi **preheater** hingga target suhu masuk $T_{in} = 55\,°$C dengan toleransi ± 0,5 °C.

**Tahap 2 — Pressurization (10–30 menit):**
1. Katup *CO₂ inlet* dibuka, pompa diafragma beroperasi hingga mencapai tekanan target $P_{set}$ (umumnya 25 MPa).
2. Sistem memantau secara real-time kurva $P(t)$ dan $T(t)$; laju pressurisasi dijaga $\leq 1$ MPa/menit untuk menghindari gradien termal berlebih sesuai Toledo & del Valle (2023).
3. Algoritma kontrol PID menyeimbangkan kapasitas termal dinding reaktor (Persamaan 6) dengan target $T_{bulk}$ di tengah EV.

**Tahap 3 — Static Soaking & Dynamic Extraction (30–180 menit):**
1. Fase **soaking** statis selama 15–30 menit untuk memungkinkan difusi internal cannabinoid.
2. Fase **dynamic** dengan debit CO₂ $Q = 0{,}5$–$2$ kg CO₂/kg bahan/jam; sampling dilakukan pada *separator* (umumnya 3-stage: 8 MPa, 5 MPa, dan 1,5 MPa) untuk fraksinasi cannabinoid.
3. Data $\Delta P$ melintasi EV dipantau untuk mendeteksi *channeling* atau *caking*.

**Tahap 4 — Depressurization & Recovery (180–240 menit):**
1. Penurunan tekanan secara bertahap ($\leq 0{,}5$ MPa/menit) mengikuti kurva isotermal atau isentropik terkontrol.
2. Pemulihan pelarut CO₂ ke *storage tank* melalui kompresor回収 dan kondensor.
3. Pengosongan EV dan pengumpulan crude extract untuk tahap *winterization* (penghilangan lilin dan lemak).

**Tahap 5 — Dokumentasi & Quality Assurance:**
1. Pencatatan parameter proses dalam *batch record* elektronik sesuai 21 CFR Part 11.
2. Analisa HPLC cannabinoid, residual solvent (harus < 5 ppm sesuai USP <467>), dan logam berat.
3. *Mass balance* CO₂: masuk = keluar ± 0,5% (standar keberlanjutan).

**Diagram Alir Proses:**

```
CO₂ Tank → Filter → Cooler → Pump → Preheater → Extraction Vessel
                                                           ↓ (P=25 MPa, T=