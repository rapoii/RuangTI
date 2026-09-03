# 2906 — Pemodelan Aliran Aksisimetrik dan Perpindahan Panas pada Ekstraksi Minyak Cannabis dengan Fluida Superkritis CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Ekstraksi fluida superkritis (Supercritical Fluid Extraction, SFE) dengan CO₂ telah menjadi teknologi *green chemistry* unggulan dalam industri fitofarmaka, nutrasetikal, dan cannabinoid karena kemampuannya menghasilkan ekstrak berkualitas tinggi tanpa residu pelarut organik. Khususnya untuk minyak *cannabis* (Cannabis sativa L.), permintaan global terhadap ekstrak kaya kanabinoid (THC, CBD, CBG) tumbuh eksponensial — pasar global cannabinoid diproyeksikan melebihi USD 50 miliar pada 2030 (Grand View Research, 2023), didorong oleh legalisasi medis dan rekreasi di lebih dari 50 negara. Obchoei dan Limtrakarn (2024, [DOI:10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)) menyoroti bahwa desain *extractor vessel* industri pada umumnya masih berbasis pendekatan empiris 1-D (model Sovová dan Martínez), yang gagal memprediksi gradien radial konsentrasi, profil suhu aksial-radial, serta titik jenuh lokal di dalam *bed* biomassa. Akibatnya, *yield* aktual di pabrik berada 8–15% di bawah prediksi model lumped, dan *bottleneck* produksi terjadi pada tahap *depressurization* karena pelepasan kalor laten yang tidak terkontrol.

Toledo dan del Valle (2023, [DOI:10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)) melengkapi celah ini dengan membangun model perpindahan panas transien yang memvalidasi tiga tahap kritis — *pressurization*, *extraction*, dan *depressurization* — menggunakan koefisien perpindahan panas konveksi internal ($h_{in}$) yang bergantung bilangan Reynolds partikel (*Re_p*) dan porositas bed ($\varepsilon$). Integrasi kedua kerangka teoretis ini memungkinkan insinyur proses melakukan *scale-up* dari reaktor laboratorium 0,5 L ke industri 200 L dengan *design margin* < 5%, suatu lompatan signifikan dibandingkan pendekatan konvensional yang marginnya bisa mencapai 25%.

Dari perspektif Teknik Industri, problematika ini masuk dalam ranah *Process Systems Engineering* (PSE) dan *Design of Experiments* (DoE), di mana keputusan kapasitas *extractor*, laju alir CO₂, dan siklus operasional secara langsung memengaruhi *unit production cost* (UPC), *overall equipment effectiveness* (OEE), dan *time-to-market* produk cannabinoid. Modul 2906 ini membahas integrasi model aliran aksisimetrik (CFD-2D) dengan model perpindahan panas transien untuk menghasilkan *digital twin* ekstraktor superkritis yang kuantitatif dan tervalidasi.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Sistem Koordinat Aksisimetrik dan Hipotesis Dasar

Ekstraktor superkritis dimodelkan sebagai silinder vertikal berjari-jari $R$ dan tinggi $H$, dengan biomassa cannabis dianggap sebagai media berpori isotropik. Hipotesis Obchoei & Limtrakarn (2024) mencakup: (i) aliran tunak (*steady-state*) selama tahap *extraction*, (ii) sifat termofisika CO₂ superkritis bergantung hanya pada $T$ dan $P$ melalui persamaan keadaan *Peng-Robinson*, (iii) fase padat cannabis diasumsikan quasi-homogen dengan kadar kanabinoid awal $x_0$ (kg/kg biomassa).

### 2.2 Persamaan Kontinuitas dan Momentum (Navier–Stokes Aksisimetrik)

Dalam koordinat silinder $(r, z)$ dengan asumsi simetri rotasional ($\partial/\partial\theta = 0$), persamaan kontinuitas untuk fluida superkritis:

$$\frac{1}{r}\frac{\partial}{\partial r}(r \rho u_r) + \frac{\partial}{\partial z}(\rho u_z) = 0$$

Persamaan momentum radial dan aksial dengan sumber *Darcy* (media berpori):

$$\rho\left(u_r \frac{\partial u_r}{\partial r} + u_z \frac{\partial u_r}{\partial z}\right) = -\frac{\partial p}{\partial r} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_r}{\partial r}\right) + \frac{\partial^2 u_r}{\partial z^2} - \frac{u_r}{r^2}\right] - \frac{\mu}{K}u_r$$

$$\rho\left(u_r \frac{\partial u_z}{\partial r} + u_z \frac{\partial u_z}{\partial z}\right) = -\frac{\partial p}{\partial z} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_z}{\partial r}\right) + \frac{\partial^2 u_z}{\partial z^2}\right] - \frac{\mu}{K}u_z + \rho g$$

di mana $K$ adalah permeabilitas intrinsik biomassa, $\mu$ viskositas dinamis CO₂, dan $g$ percepatan gravitasi. Permeabilitas biomassa cannabis tipe *ground* dilaporkan Orfanidis et al. (2021) sebesar $K \approx 2{,}5 \times 10^{-9}$ m².

### 2.3 Persamaan Energi dengan Termal Sumber Laten

Untuk tahap *pressurization* dan *depressurization*, persamaan energi transien (Toledo & del Valle, 2023, [DOI:10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)):

$$\varepsilon \rho_f c_{p,f}\frac{\partial T}{\partial t} + \rho_f c_{p,f}\left(u_r \frac{\partial T}{\partial r} + u_z \frac{\partial T}{\partial z}\right) = \frac{1}{r}\frac{\partial}{\partial r}\left(r k_{eff}\frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k_{eff}\frac{\partial T}{\partial z}\right) + \dot{q}_{rxn}$$

dengan konduktivitas efektif $k_{eff} = \varepsilon k_f + (1-\varepsilon)k_s$ dan $\dot{q}_{rxn}$ adalah laju pelepasan kalor laten selama perubahan fasa/dekompresi CO₂:

$$\dot{q}_{rxn} = \frac{\dot{m}_{CO_2}}{V_{bed}} \cdot \Delta h_{depr}$$

Koefisien perpindahan panas internal mengikuti korelasi Wakao–Kaguei:

$$Nu_{in} = 2 + 1{,}1 \cdot Re_p^{0,6} \cdot Pr^{1/3}, \quad Re_p = \frac{\rho_f u_s d_p}{\mu}$$

### 2.4 Model Perpindahan Massa — Pendekatan Sovová Dua Fase

Transfer kanabinoid dari matriks padat ke fluida superkritis dimodelkan sebagai:

$$\frac{\partial C}{\partial t} + u_z \frac{\partial C}{\partial z} = D_{ax}\frac{\partial^2 C}{\partial z^2} + J(x, C)$$

dengan fluks transfer massa $J(x,C)$ mengikuti model Sovová:

$$J = \begin{cases} k_f a_f (C^* - C), & x > x_k \quad \text{(konvektif)} \\ k_s a_s x, & x \leq x_k \quad \text{(difusif)} \end{cases}$$

di mana $x_k$ adalah fraksi massa kritis yang memisahkan mekanisme *easy* dan *hard* extraction, dan $C^*$ adalah konsentrasi kesetimbangan yang dihitung melalui korelasi Chrastil:

$$C^* = \rho_f^{k_1} \exp\left(\frac{a_1}{T} + b_1\right)$$

dengan parameter Chrastil untuk CBD dalam CO₂: $k_1 = 1{,}41$; $a_1 = -4973$ K; $b_1 = -19{,}3$ (Chrastil, 1982; validasi Obchoei & Limtrakarn, 2024).

### 2.5 Persamaan Keadaan Peng–Robinson

Untuk menghitung $\rho_f$, $\mu$, $c_{p,f}$ CO₂ superkritis pada $T$ = 313–333 K dan $P$ = 15–30 MPa:

$$P = \frac{RT}{V_m - b} - \frac{a\alpha}{V_m(V_m + b) + b(V_m - b)}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri mengikuti kerangka PDCA (*Plan-Do-Check-Act*) yang diadaptasi ke dalam SOP 6-tahap:

**Tahap 1 — Preparasi Biomassa (Plan).** Cannabis kering (*a_w* < 0,10) digiling hingga ukuran partikel $d_p = 0{,}5$–1,2 mm, densitas ruah $\rho_b \approx 380$ kg/m³, porositas bed $\varepsilon = 1 - \rho_b/\rho_s \approx 0{,}61$.

**Tahap 2 — Charging Vessel (Do).** *Extraction vessel* diisi biomassa secara gravimetri hingga ketinggian $H \approx 0{,}8 \cdot L_{vessel}$ untuk menghindari *channeling*. Sistem disegel dan diberi *safety relief* pada 1,1 × tekanan operasi.

**Tahap 3 — Pressurization (Do).** CO₂ dipompa dari storage pada 5,5 MPa/298 K, dipanaskan hingga 313 K menggunakan *preheater* (jaket listrik), lalu dikompresi ke tekanan operasi 25 MPa. Laju pressurisasi dijaga ≤ 1,5 MPa/menit agar gradien termal radial tidak melebihi 8 K (Toledo & del Valle, 2023).

**Tahap 4 — Dynamic Extraction (Do).** CO₂ superkritis dialirkan secara *co-current down-flow* dengan laju alir massa $\dot{m}_{CO_2} = 4$–8 kg/jam untuk reaktor 5 L (Obchoei & Limtrakarn, 2024 merekomendasikan $S/F$ ratio optimum = 25–35).

**Tahap 5 — Separation & Depressurization (Check).** Ekstrak dipisahkan dalam *separator* bertahap (S1: 12 MPa/333 K untuk *wax*; S2: 6 MPa/303 K untuk kanabinoid target). Tahap *depressurization* mengikuti *ramp* eksponensial agar kalor laten $\Delta h_{depr} \approx 320$ kJ/kg CO₂ terdisipasi terkontrol.

**Tahap 6 — Validasi Kualitas (Act).** Konsentrasi CBD/THC diukur via HPLC-UV; konsistensi *batch* dievaluasi melalui *coefficient of variation* (CV < 5% sesuai ICH Q1A(R2)).

Diagram alir keputusan (*decision flowchart*) menggunakan logika *If-Then*: **IF** $T_{bed,radial} > T_{set} + 5$ K **THEN** reduce $\dot{m}_{CO_2}$ by 15%; **IF** $P_{outlet}/P_{inlet} > 0{,}92$ **THEN** end extraction (solute depleted).

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Spesifikasi Kasus

Ekstraktor pilot: $D = 0{,}15$ m, $H = 0{,}40$ m, $V = 7{,}07 \times 10^{-3}$ m³ (≈ 5 L). Biomassa: 2,7 kg cannabis kering dengan $x_0 = 0{,}12$ kg CBD/kg biomassa. Target operasi: $T = 318$ K, $P = 25$ MPa.

### 4.2 Perhitungan Sifat CO₂ Superkritis

Menggunakan persamaan Peng–Robinson dengan parameter CO₂ ($T_c = 304{,}13$ K, $P_c = 7{,}377$ MPa, $\omega = 0{,}225$):

$$a = 0{,}45724 \frac{R^2 T_c^2}{P_c}, \quad b = 0{,}07780 \frac{RT_c}{P_c}$$

Iterasi pada $T = 318$ K, $P = 25$ MPa menghasilkan $\rho_f = 817{,}4$ kg/m³, $\mu = 7{,}21 \times 10^{-5}$ Pa·s, $c_{p,f} = 2843$ J/(kg·K) (NIST REFPROP validation).

### 4.3 Perhitungan Konsentrasi Kesetimbangan (Chrastil)

$$C^* = \rho_f^{1{,}41} \exp\left(\frac{-4973}{318} + (-19{,}3)\right)$$

$$C^* = (817