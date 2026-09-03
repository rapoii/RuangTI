# 1818 — Pemodelan Aliran Aksisimetrik dan Transfer Panas pada Ekstraksi Minyak Kanabis dengan Fluida Superkritis CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botensial nabati telah mengalami transformasi radikal selama dekade terakhir, didorong oleh meningkatnya permintaan global akan produk kanabinoid farmasial—khususnya *cannabidiol* (CBD) dan *tetrahydrocannabinol* (THC)—untuk aplikasi terapeutik, nutraceutical, dan kosmeseutikal. Menurut Thanachai Obchoei dan Wiroj Limtrakarn (2024) dalam publikasi mereka di *International Journal of Thermofluids*, pasar ekstrak kanabis diproyeksikan melebihi USD 50 miliar secara global pada tahun 2027, dengan ekstraksi berbasis *supercritical fluid extraction* (SFE) menggunakan CO₂ menjadi *gold standard* karena kemampuannya menghasilkan produk bebas residu pelarut organik, selektivitas tinggi terhadap cannabinoid target, dan ramah lingkungan secara inheren ([DOI: 10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)).

Urgensi teknis dari adopsi SFE-CO₂ terletak pada tiga tantangan operasional utama. Pertama, **selektivitas kimiawi**: pada kondisi superkritik (T > 31,1 °C dan P > 73,8 bar), CO₂ menunjukkan daya solvasi yang dapat di-tuning melalui variasi densitas, memungkinkan fraksinasi cannabinoid berdasarkan afinitas polaritas. Kedua, **kepatuhan regulasi** di yurisdiksi seperti Uni Eropa, Kanada, dan beberapa negara bagian AS mensyaratkan *residual solvent* di bawah ambang batas deteksi (≤ 5 ppm untuk heksana), yang secara inheren dipenuhi oleh CO₂ karena sifatnya yang meninggalkan produk sebagai *residual gas*. Ketiga, **kompleksitas termodinamika multi-fasa** yang melibatkan kesetimbangan padat-cair-gas di dalam *extraction vessel*, sehingga memerlukan permodelan *computational fluid dynamics* (CFD) yang robust untuk optimasi hasil dan efisiensi energi.

Felipe R. Toledo dan José M. del Valle (2023) menekankan dalam *The Journal of Supercritical Fluids* bahwa pemahaman terhadap dinamika transfer panas selama tahap *pressurization*, *static extraction*, dan *depressurization* merupakan *bottleneck* rekayasa yang selama ini kurang terkuantifikasi ([DOI: 10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)). Mereka menunjukkan bahwa model isotermal klasik—yang mengasumsikan suhu vessel konstan selama proses—secara sistematis memprediksi *yield* yang terlalu optimis hingga 18–22% dibandingkan data eksperimen, karena mengabaikan *thermal lag* antara dinding vessel, bed biomassa, dan fluida superkritik yang mengalir. Implikasi ekonominya langsung: pada fasilitas produksi 1.000 L/batch, kesalahan prediksi 15% terhadap yield setara dengan kerugian revenue tahunan lebih dari USD 2,3 juta pada harga jual CBD isolate USD 8.500/kg.

Konteks industri ini menempatkan permodelan **aliran aksisimetrik** sebagai alat strategis bagi *process engineer* untuk memprediksi profil kecepatan, tekanan, dan konsentrasi solute dalam geometri vessel silinder secara 2D-radial-aksial. Pendekatan ini secara komputasional lebih efisien daripada simulasi 3D penuh (*full 3D CFD*), namun tetap menangkap gradien radial yang relevan untuk desain *flow distributor*, penentuan *aspect ratio* vessel (H/D), dan prediksi *channeling effects* pada bed biomassa yang tidak homogen.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Dasar Fluida Superkritik CO₂

Titik kritis CO₂ murni berada pada $T_c = 304{,}13 \text{ K}$ dan $P_c = 73{,}8 \text{ bar}$. Di atas titik ini, fluida bersifat *single-phase* dengan densitas dan viskositas yang sangat sensitif terhadap perubahan kecil suhu dan tekanan. Hubungan densitas terhadap kondisi operasi dapat didekati dengan persamaan keadaan Peng-Robinson:

$$P = \frac{RT}{V_m - b} - \frac{a(T)}{V_m(V_m + b) + V_m(V_m - b)}$$

dengan parameter $a(T)$ dan $b$ yang bergantung pada faktor acentrik $\omega_{\text{CO}_2} = 0{,}225$. Pada kondisi operasi tipikal SFE kanabis ($T = 323$ K, $P = 250$ bar), densitas CO₂ superkritik mencapai $\rho_{\text{SC-CO}_2} \approx 839 \text{ kg/m}^3$, mendekati densitas air cair, sementara viskositas dinamisnya hanya $\mu \approx 7{,}2 \times 10^{-5} \text{ Pa·s}$—sepersepuluh viskositas air. Kombinasi ini menghasilkan angka Reynolds tinggi dan perilaku perpindahan massa yang difusi-konvektif.

### 2.2 Model Aliran Aksisimetrik dalam Media Berpori

Obchoei dan Limtrakarn (2024) menurunkan model aliran 2D-aksisimetrik dengan asumsi *steady-state*, *incompressible pseudo-fluid*, dan *Darcy flow* melalui matriks biomassa kanabis yang diperlakukan sebagai *porous medium* ([DOI: 10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)). Dalam koordinat silindris $(r, z)$, persamaan kontinuitas dan momentum adalah:

$$\frac{1}{r}\frac{\partial(r u_r)}{\partial r} + \frac{\partial u_z}{\partial z} = 0$$

$$u_r = -\frac{k}{\mu}\frac{\partial P}{\partial r}, \quad u_z = -\frac{k}{\mu}\frac{\partial P}{\partial z}$$

dengan $k$ adalah permeabilitas intrinsik bed biomassa, $\mu$ viskositas dinamis SC-CO₂, dan $u_r$, $u_z$ komponen kecepatan radial dan aksial. Substitusi hukum Darcy ke kontinuitas menghasilkan persamaan Laplace untuk tekanan:

$$\frac{1}{r}\frac{\partial}{\partial r}\left(r \frac{\partial P}{\partial r}\right) + \frac{\partial^2 P}{\partial z^2} = 0$$

### 2.3 Persamaan Konveksi-Difusi untuk Konsentrasi Solute

Transport cannabinoid (CBD, THC, CBN) dari permukaan partikel biomassa ke fasa superkritik dimodelkan dengan persamaan konveksi-difusi:

$$u_z \frac{\partial C}{\partial z} = D_{\text{eff}} \left[\frac{1}{r}\frac{\partial}{\partial r}\left(r \frac{\partial C}{\partial r}\right) + \frac{\partial^2 C}{\partial z^2}\right] - R_s(C)$$

dengan $C$ konsentrasi solute dalam fasa fluida, $D_{\text{eff}}$ koefisien difusi efektif (tergantung porositas $\varepsilon$ dan tortuositas $\tau$ melalui $D_{\text{eff}} = D_m \varepsilon / \tau$), dan $R_s(C)$ laju pelarutan dari fasa padat yang bergantung pada kelarutan equilibrium $C^*(T,P)$:

$$R_s = k_s a_s [C^* - C]$$

### 2.4 Model Transfer Panas Tiga Tahap (Toledo & del Valle, 2023)

Toledo dan del Valle (2023) mengembangkan model *transient 1D radial* untuk tahap *pressurization*, *static extraction*, dan *depressurization* ([DOI: 10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)). Persamaan energi untuk dinding vessel adalah:

$$\rho_w c_{p,w} \frac{\partial T_w}{\partial t} = \frac{k_w}{\delta_w}(T_{\text{ext}} - T_w) - h_{\text{in}}(T_w - T_b)$$

dengan $T_{\text{ext}}$ suhu eksternal (suhu *jacket heater*), $T_b$ suhu bed biomassa, dan $h_{\text{in}}$ koefisien konveksi internal. Energi dalam bed mengikuti:

$$(\rho c_p)_{\text{eff}} \frac{\partial T_b}{\partial t} = k_{\text{eff}} \nabla^2 T_b + \rho_g u c_{p,g} \frac{\partial T_b}{\partial z} - \Delta H_s R_s$$

Suku $\Delta H_s R_s$ merepresentasikan panas laten *dissolution* yang umumnya eksotermik lemah ($\Delta H_s \approx -15$ sampai $-25 \text{ kJ/kg}$) untuk cannabinoid dalam SC-CO₂.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri dari model-model di atas memerlukan SOP terstruktur yang mengikuti kerangka *Good Manufacturing Practice* (GMP) untuk produk kanabinoid farmasial. Prosedur operasional standar dapat diuraikan sebagai berikut:

**Tahap A: Pra-Proses dan Karakterisasi Feedstock**
1. Sortasi dan pengeringan biomassa kanabis pada $T \leq 45$ °C hingga kadar air $w < 12$% (basis basah).
2. Penggilingan terkontrol menggunakan *cryogenic grinder* pada ukuran partikel $d_p = 0{,}5$–$2{,}0$ mm untuk menjaga integritas *trichome* tempat akumulasi cannabinoid.
3. Karakterisasi feedstock: kadar cannabinoid total (HPLC-UV), kadar klorofil, dan kadar air.
4. Penentuan porositas bed $\varepsilon = 1 - \rho_b / \rho_p$ melalui pengukuran densitas *bulk* $\rho_b$ dan densitas partikel $\rho_p$ (ASTM D7481).

**Tahap B: Pemuatan Vessel dan Persiapan Termal**
1. Vessel ekstraktor (umumnya SS316L, kapasitas 1 L–1000 L) diisi biomassa dengan teknik *tamping* terkontrol untuk mencapai $\rho_b = 350$–$450 \text{ kg/m}^3$.
2. *Leak test* dengan nitrogen pada 1,1× tekanan operasi selama 30 menit (standar ASME Section VIII).
3. Pemanasan awal vessel menggunakan *jacketed heater* hingga target $T_{\text{ext}} = 323$ K dengan *ramp rate* $\leq 2$ K/menit untuk mencegah gradien termal merusak material.

**Tahap C: Siklus Ekstraksi (berdasarkan model Toledo & del Valle)**
1. **Pressurization**: Katup inlet dibuka, CO₂ dipompa hingga $P_{\text{target}} = 200$–$300$ bar dengan laju $dP/dt$ yang dikontrol (umumnya 5–10 bar/menit) untuk menghindari *fluid hammer* dan kompresi adiabatik yang mendinginkan bed.
2. **Static Extraction**: Setelah mencapai tekanan target, sistem dipertahankan *static* selama $t_s = 15$–$60$ menit untuk memungkinkan equilibrium fasa padat-fluida. Pada fase ini, model Toledo-prediksi menunjukkan penurunan suhu bed sebesar 3–6 K karena perpindahan panas laten pelarutan.
3. **Dynamic Extraction**: SC-CO₂ dialirkan dengan laju $Q = 5$–$25$ g CO₂/detik per kg biomassa, sesuai korelasi empiris *Sovová* untuk kondisi *broken+intact cells*.
4. **Depressurization**: Katup outlet dibuka secara gradual, dengan ekspansi Joule-Thomson yang menurunkan suhu secara signifikan—data Toledo menunjukkan $\Delta T \approx -8$ K pada $P = 200$ bar ke $P_{\text{atm}}$.

**Tahap D: Separasi dan Recovery**
SC-CO₂ yang membawa solute dilewatkan ke *separator vessel* pada $P_1 = 50$–$80$ bar, $T_1 = 313$ K, di mana cannabinoid mengendap karena penurunan daya solvasi. Gas CO₂ direcycle melalui kompresor dan *condenser*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Parameter Input untuk Vessel 5 L

Ambil studi kasus tipikal: *extraction vessel* silinder dengan $D = 15 \text{ cm}$ dan $H = 30 \text{ cm}$, berisi biomassa kanabis giling dengan:
- $\rho_b = 400 \text{ kg/m}^3$, $\varepsilon = 0{,}55$, $d_p = 1{,}0 \text{ mm}$
- Kadar cannabinoid total feed: $C_0 = 12\%$ massa
- Target kondisi operasi: $T = 323$ K, $P = 250$ bar
- Laju alir massa CO₂: $\dot{m} = 8{,}0 \text{ g/s}$

### 4.2 Perhitungan Profil Tekanan Aksisimetrik

Selesaikan persamaan Laplace dengan kondisi batas:
- $P(r,0) = P_{\text{in}}$ (inlet di bawah)
- $\partial P/\partial r|_{r=R} = 0$ (dinding impermeable)
- $\partial P/\partial z|_{z=H} = P_{\text{out}}$ (outlet di atas, diasumsikan $P_{\text{out}} = 0{,}98 P_{\text{in}}$)

Dengan permeabilitas $k = 5 \times 10^{-12} \text{ m}^2$ dan $\mu = 7