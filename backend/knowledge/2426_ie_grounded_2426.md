# 2426 — Pemodelan Aliran Aksisimetrik dan Transfer Panas pada Ekstraksi Minyak Kanabis dengan Karbondioksida Superkritis (SFE-CO₂)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric Flow Model of Cannabis Oil Extraction of Supercritical Fluid Extraction CO₂ Process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botani berbasis pelarut superkritis, khususnya Superkritical Fluid Extraction (SFE) menggunakan karbondioksida (CO₂), telah mengalami transformasi disruptif sejak diterapkannya regulasi legalisasi kanabis untuk kebutuhan medis dan rekreasional di berbagai yurisdiksi (Kanada, beberapa negara bagian Amerika Serikat, serta Thailand). Permintaan global terhadap ekstrak kanabis (minyak full-spectrum, distilat cannabinoid, serta isolate THC dan CBD) diproyeksikan menembus USD 70 miliar pada 2030, menciptakan tekanan rekayasa untuk meningkatkan yield, mengurangi biaya operasional, dan menjamin konsistensi kualitas produk (Obchoei & Limtrakarn, 2024).

Obchoei dan Limtrakarn (2024) dalam *International Journal of Thermofluids* menyoroti bahwa proses SFE-CO₂ konvensional selama ini masih didominasi oleh pendekatan empiris berbasis design of experiment (DoE) tanpa representasi fisik yang robust tentang dinamika fluida dalam vessel ekstraktor. Oleh karena itu, mereka mengajukan **model aliran aksisimetrik** untuk memprediksi profil kecepatan, tekanan, dan konsentrasi solute dalam geometri silinder extractor. Pendekatan ini menjadi krusial karena distribusi aliran yang tidak homogen akan menghasilkan *channeling effect* — fenomena di mana CO₂ superkritis memilih jalur dengan resistansi hidrolik minimum sehingga biomassa tidak terekspos secara merata. Dampak langsungnya adalah penurunan yield hingga 15–25% dan kualitas cannabinoid profile yang inkoheren antar-batch. Studi yang dilakukan di King Mongkut's University of Technology ini mengusulkan computational framework yang kemudian divalidasi terhadap data eksperimental pilot-scale di Thailand.

Di sisi komplementer, Toledo dan del Valle (2023) dalam *The Journal of Supercritical Fluids* — jurnal top-tier Q1 dengan impact factor 4,5 — mempublikasikan model transfer panas terintegrasi yang mencakup tiga tahap kritis siklus SFE-CO₂: (1) **pressurization** (kompresi CO₂ dari fase gas menuju kondisi superkritis), (2) **extraction** (interaksi massa-panas antara fluida dan biomassa), dan (3) **depressurization** (ekspansi dan recovery solute pada separator). Makalah ini merupakan bagian pertama dari seri dua-paper yang membangun landasan termodinamika transien untuk mencegah kesalahan rekayasa fatal berupa degradasi termal cannabinoid (terutama THCA yang ter-decarboxylate pada >110°C) serta mengontrol densitas CO₂ yang sangat sensitif terhadap temperatur (del Valle, seorang profesor Universidad Católica de Chile, dikenal sebagai otoritas global dalam SFE botani sejak 1990-an). Urgensi ekonomis dari integrasi kedua paper ini adalah optimalisasi CAPEX dan OPEX pada unit ekstraksi kapasitas 100–1000 L yang lazim di industri.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Sifat Termodinamika CO₂ Superkritis

CO₂ mencapai kondisi superkritis ketika temperatur ($T$) dan tekanan ($P$) melampaui titik kritisnya, yaitu $T_c = 304{,}25\,\text{K}$ dan $P_c = 7{,}38\,\text{MPa}$. Pada kondisi ini, CO₂ memiliki difusivitas tinggi (~$10^{-8}\,\text{m}^2/\text{s}$), viskositas rendah (~$10^{-4}\,\text{Pa}\cdot\text{s}$), dan kemampuan pelarutan yang dapat diatur melalui tuning densitas. Hubungan densitas CO₂ terhadap temperatur dan tekanan paling akurat dimodelkan dengan persamaan keadaan **Peng–Robinson (PR-EOS)**:

$$P = \frac{RT}{v - b} - \frac{a(T)}{v(v+b) + b(v-b)}$$

dengan parameter atraktif $a(T)$ dan kovolume $b$ yang dihitung menggunakan *mixing rules* klasik:

$$a_i = 0{,}45724 \cdot \frac{R^2 T_c^2}{P_c} \left[1 + \kappa_i\left(1 - \sqrt{T/T_c}\right)\right]^2$$

$$b_i = 0{,}07780 \cdot \frac{RT_c}{P_c}, \quad \kappa_i = 0{,}37464 + 1{,}54226\omega_i - 0{,}26992\omega_i^2$$

dimana $\omega$ adalah faktor asentrik Pitzer dan $R = 8{,}314\,\text{J/(mol·K)}$.

### 2.2 Persamaan Momentum Aksisimetrik

Karena vessel ekstraktor SFE memiliki geometri silinder dengan rasio panjang terhadap diameter besar, Obchoei dan Limtrakarn (2024) menerapkan simplifikasi **aliran aksisimetrik** dalam koordinat silindris $(r, z)$, mengasumsikan invariansi terhadap sudut azimuth $\theta$. Sistem Navier–Stokes tereduksi menjadi:

$$\frac{\partial u_z}{\partial t} + u_r \frac{\partial u_z}{\partial r} + u_z \frac{\partial u_z}{\partial z} = -\frac{1}{\rho}\frac{\partial P}{\partial z} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_z}{\partial r}\right) + \frac{\partial^2 u_z}{\partial z^2}\right] + g_z$$

$$\frac{\partial u_r}{\partial t} + u_r \frac{\partial u_r}{\partial r} + u_z \frac{\partial u_r}{\partial z} = -\frac{1}{\rho}\frac{\partial P}{\partial r} + \mu\left[\frac{\partial}{\partial r}\left(\frac{1}{r}\frac{\partial (r u_r)}{\partial r}\right) + \frac{\partial^2 u_r}{\partial z^2}\right]$$

dengan syarat batas: no-slip pada dinding vessel ($u_r = u_z = 0$), serta profil uniform inflow pada inlet distributor atas/bawah.

### 2.3 Model Transfer Panas (Toledo & del Valle, 2023)

Untuk tahap **pressurization** dan **depressurization**, Toledo dan del Valle (2023) mengembangkan neraca energi unsteady-state pada dinding vessel (diasumsikan baja SS316L):

$$\rho_{ss}\,c_{p,ss}\,\frac{\partial T_w}{\partial t} = \frac{k_{ss}}{\delta_w}\left(T_{ext} - T_w\right) - h_i\left(T_w - T_{CO_2}\right)$$

dengan $h_i$ adalah koefisien konveksi internal yang dikorelasikan menggunakan bilangan **Nusselt**:

$$Nu = \frac{h_i D_h}{k_{CO_2}} = 0{,}023\,Re^{0{,}8}\,Pr^{0{,}4}$$

untuk aliran turbulen fully-developed dalam pipa. Pada tahap **extraction**, perpindahan panas dari CO₂ ke biomassa mengikuti resistansi seri:

$$\frac{1}{U_{overall}} = \frac{1}{h_{CO_2}} + \frac{\delta_{bed}}{k_{bed}} + \frac{1}{h_{solid}}$$

### 2.4 Kinetika Ekstraksi (Model Two-Site Sovová)

Yield kumulatif minyak $E(t)$ dimodelkan menggunakan persamaan laju dua-resistensi yang diakui luas:

$$\frac{dE}{dt} = \begin{cases} k_f \cdot x_0 \cdot (1 - E/E_s), & t \leq t_m \quad (\text{fase easy access}) \\ k_s \cdot (E_s - E), & t > t_m \quad (\text{fase broken cells}) \end{cases}$$

dengan $x_0$ adalah fraksi solute awal, $E_s$ solubility equilibrium, $k_f$ dan $k_s$ adalah koefisien transfer massa konvektif dan difusif.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industrialisasi model ini mengikuti kerangka 7-tahap berikut yang distandarisasi dari paper Obchoei & Limtrakarn (2024) yang divalidasi oleh Toledo & del Valle (2023):

**Tahap 1 – Preparasi Biomassa.** Bunga kanabis kering dikeringkan hingga *moisture content* (MC) ≤ 10% untuk mencegah aglomerasi dan ekstraksi air yang mengencerkan fraksi cannabinoid. Biomassa di-*milling* hingga ukuran partikel $d_p = 0{,}5$–$2\,\text{mm}$ menggunakan *cryogenic grinder* untuk mempertahankan profil terpene volatil. Pengayakan standar ASTM E11 digunakan untuk memastikan distribusi ukuran yang terkontrol.

**Tahap 2 – Loading Vessel.** Biomassa dimasukkan ke dalam extractor vessel kapasitas 100 L pada tekanan atmosferik, dengan packing density $\rho_{bed} = 350$–$450\,\text{kg/m}^3$.

**Tahap 3 – Pressurization.** Katup inlet dibuka dan CO₂ dialirkan dari tangki penampungan cair (dipompa pada $6\,\text{MPa}$) menuju extractor dengan target $30\,\text{MPa}$ dan $333\,\text{K}$ (60°C). Durasi pressurization tipikal 8–12 menit. Tahapan ini dikontrol mengikuti model Toledo-del Valle agar gradien temperatur dinding tidak melebihi $\Delta T = 15\,\text{K}$ untuk mencegah stres mekanis vessel.

**Tahap 4 – Static Soaking (opsional).** Biomassa didiamkan dalam CO₂ superkritis selama 10–20 menit untuk equilibrasi internal.

**Tahap 5 – Dynamic Extraction.** CO₂ superkritis dipompakan secara continuous dengan flow rate $Q = 2$–$10\,\text{L/min}$ (dinyatakan dalam liquid CO₂). Profil kecepatan aksisimetrik dimonitor melalui pressure transducer di inlet, mid-bed, dan outlet. Sampling dilakukan setiap 5 menit pada separator 1 (5 MPa, 40°C) dan separator 2 (2 MPa, 25°C).

**Tahap 6 – Depressurization.** Setelah target yield tercapai atau siklus berakhir, CO₂ dialirkan ke separator dengan throttling valve terkontrol (rate −2 MPa/menit) mengikuti rekomendasi Toledo-del Valle untuk menghindari *foaming* dan *choking*.

**Tahap 7 – Collection & Post-Processing.** Minyak dikumpulkan dari separator, winterisasi pada −20°C selama 24 jam untuk menghilangkan wax, kemudian diuji dengan HPLC untuk profil cannabinoid.

Diagram alir proses mengikuti pola: *Biomassa → Prep → Load → Pressurize → Extract → Separate → Collect → Winterize → QC Release*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Spesifikasi Input

Kami mengambil studi kasus pilot plant sesuai parameter tipikal paper Obchoei & Limtrakarn (2024):

- Tekanan operasi: $P = 30\,\text{MPa}$
- Temperatur operasi: $T = 333\,\text{K}$
- Diameter vessel: $D = 0{,}20\,\text{m}$, panjang: $L = 0{,}60\,\text{m}$
- Massa biomassa: $m_{bio} = 1{,}0\,\text{kg}$ (MC = 8%)
- Kandungan cannabinoid awal: $x_0 = 0{,}15\,\text{kg/mac}$ (15% berat kering)
- Flow rate CO₂: $Q = 2{,}0\,\text{L/menit}$ (liquid CO₂)

### 4.2 Per