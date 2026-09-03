# 2458 — Pemodelan Aliran Aksisimetrik pada Ekstraksi Minyak Kanabis dengan Fluida Superkritis CO₂: Integrasi Model Perpindahan Panas dan Massa

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Ekstraksi minyak kanabis (Cannabis sativa L.) menggunakan fluida superkritis CO₂ (SC-CO₂) telah menjadi tulang punggung industri ganja medis dan rekreasional legal yang bernilai global lebih dari USD 30 miliar pada 2023. Berbeda dengan ekstraksi pelarut organik (etanol, butana, heksana), teknologi SC-CO₂ menawarkan kemurnian produk tinggi, tidak meninggalkan residu toksik, dan memungkinkan *tunability* selektivitas melalui manipulasi tekanan serta temperatur. Obchoei dan Limtrakarn (2024) dalam *International Journal of Thermofluids* memperkenalkan model aliran aksisimetrik 2D yang memprediksi dinamika fluida di dalam vessel ekstraksi untuk meningkatkan yield cannabinoid (THC, CBD) sekaligus menekan degradasi termal.

Urgensi ekonominya nyata: proses SC-CO₂ menyumbang 30–50% CapEx lini produksi kanabis, dan setiap peningkatan efisiensi sebesar 1% pada yield translates menjadi penghematan operasional puluhan ribu USD per batch pada fasilitas berskala menengah (500–2000 kg biomassa/hari). Lebih jauh, Toledo dan del Valle (2023) dalam *The Journal of Supercritical Fluids* menunjukkan bahwa fenomena perpindahan panas selama tahap *pressurization*, *extraction*, dan *depressurization* memiliki dampak dominan terhadap profil yield dan selektivitas cannabinoid—sehingga integrasi model aliran dan model termal menjadi kebutuhan rekayasa yang tidak terhindarkan.

Konteks industri farmasutikal mensyaratkan kepatuhan terhadap Good Manufacturing Practice (GMP) dan standar Farmakope USP <467> untuk residu pelarut, menjadikan SC-CO₂ sebagai pilihan strategis. Namun, tantangan operasional tetap signifikan: (i) *channeling effect* pada packed bed biomassa yang menurunkan efisiensi kontak fluida-padatan; (ii) gradien tekanan radial-aksial yang menciptakan profil konsentrasi tidak homogen; dan (iii) degradasi termal cannabinoid pada suhu di atas 60 °C. Justru karena itulah model aksisimetrik Obchoei & Limtrakarn (2024) menjadi relevan: ia memungkinkan prediksi *local* dari kecepatan, tekanan, dan konsentrasi sehingga operator dapat mengoptimalkan laju alir, ukuran partikel, dan densitas packing sebelum *commissioning* vessel.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Sifat Termodinamika CO₂ Superkritis

CO₂ mencapai kondisi superkritis pada $T_c = 304{,}25$ K dan $P_c = 7{,}38$ MPa. Di atas titik kritis, CO₂ memiliki difusivitas tinggi ($D_{CO_2} \sim 10^{-8}$ m²/s) dan viskositas rendah ($\mu \sim 10^{-5}$ Pa·s) sehingga penetrasi ke dalam matriks biomassa meningkat drastis. Persamaan keadaan yang lazim digunakan adalah **Soave–Redlich–Kwong (SRK)** atau **Peng–Robinson (PR)**:

$$P = \frac{RT}{V_m - b} - \frac{a(T)}{V_m(V_m + b) + b(V_m - b)}$$

dengan parameter atraktif $a(T)$ yang bergantung pada faktor acentrik ω. Untuk CO₂, $\omega = 0{,}225$ dan pendekatan ini valid hingga tekanan 30 MPa dengan deviasi $< 2\%$.

### 2.2 Model Aliran Aksisimetrik (Obchoei & Limtrakarn, 2024)

Obchoei dan Limtrakarn (2024) menurunkan governing equations dalam koordinat silinder $(r, z)$ dengan asumsi **axisymmetric, steady-state, incompressible (densitas diperlakukan via persamaan keadaan)**, dan **Darcy-Forchheimer** untuk aliran melalui media berpori (packed bed biomassa):

$$\frac{1}{r}\frac{\partial}{\partial r}\left(r \rho v_r\right) + \frac{\partial}{\partial z}\left(\rho v_z\right) = 0 \quad \text{(kontinuitas)}$$

$$\rho\left(v_r\frac{\partial v_r}{\partial r} + v_z\frac{\partial v_r}{\partial z}\right) = -\frac{\partial P}{\partial r} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial v_r}{\partial r}\right) - \frac{v_r}{r^2} + \frac{\partial^2 v_r}{\partial z^2}\right] - \frac{\mu}{K}v_r - \beta\rho|v|v_r$$

$$\rho\left(v_r\frac{\partial v_z}{\partial r} + v_z\frac{\partial v_z}{\partial z}\right) = -\frac{\partial P}{\partial z} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial v_r}{\partial r}\right) + \frac{\partial^2 v_z}{\partial z^2}\right] - \rho g - \frac{\mu}{K}v_z - \beta\rho|v|v_z$$

dengan $K$ permeabilitas intrinsik (m²) dan $\beta$ koefisien inersia Forchheimer. Untuk biomassa kanabis granul dengan diameter partikel $d_p = 1$ mm dan porositas $\epsilon = 0{,}4$, Kozeny-Carman menghasilkan:

$$K = \frac{d_p^2 \epsilon^3}{150(1-\epsilon)^2} \approx 4{,}2 \times 10^{-9} \text{ m}^2$$

### 2.3 Model Perpindahan Massa

Konsentrasi cannabinoid dalam fase fluida $C_f$ (kg/m³) mengikuti persamaan konveksi-difusi:

$$v_z\frac{\partial C_f}{\partial z} + v_r\frac{\partial C_f}{\partial r} = D_{eff}\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial C_f}{\partial r}\right) + \frac{\partial^2 C_f}{\partial z^2}\right]$$

Laju pelepasan cannabinoid dari matriks padat dimodelkan dengan **Sovová's broken-and-intact cell model**, yang membedakan dua tahap: (i) konveksi eksternal pada sel yang sudah pecah ($k_f a_0$) dan (ii) difusi internal pada sel utuh ($k_s a_0$):

$$\frac{\partial q}{\partial t} = -k_f a_0 (q - q^*) \quad \text{(fase konvektif, } q > q^*)$$

$$\frac{\partial q}{\partial t} = -k_s a_0 (q - q^*) \quad \text{(fase difusif, } q \leq q^*)$$

dengan $q$ konsentrasi dalam padatan, $q^*$ konsentrasi kesetimbangan, dan $a_0$ luas spesifik (m²/m³).

### 2.4 Model Perpindahan Panas (Toledo & del Valle, 2023)

Toledo dan del Valle (2023) menurunkan persamaan energi untuk tiga tahap dengan enthalpi $H$ sebagai variabel dependen:

$$\frac{\partial(\rho H)}{\partial t} = \frac{1}{r}\frac{\partial}{\partial r}\left(r k_{eff}\frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k_{eff}\frac{\partial T}{\partial z}\right) + \dot{Q}_{comp} - \dot{Q}_{loss}$$

Enthalpi CO₂ superkritis disusun sebagai $H = H_{ref} + \int_{T_{ref}}^{T} C_p(T)\,dT$, dengan $C_p$ dihitung dari turunan persamaan keadaan. Untuk tahap *pressurization*, sumber panas kompresi adiabatik berharga:

$$\dot{Q}_{comp} = \frac{\beta_T T}{\rho}\frac{dP}{dt}$$

dengan $\beta_T$ koefisien ekspansi termal—isothermal compressibility ratio. Toledo & del Valle melaporkan bahwa fluks panas ini dapat meningkatkan suhu lokal hingga 15–20 K di zona inlet vessel jika tidak dikontrol, sehingga memicu degradasi THC menjadi CBN.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri mengikuti SOP terstruktur yang diturunkan langsung dari kerangka model Obchoei & Limtrakarn (2024) serta korelasi termal Toledo & del Valle (2023):

**Tahap 1 — Preparasi Biomassa.** Kanabis kering dikeringkan hingga kadar air < 10% (sesuai ASTM D8196), digiling hingga $d_p = 0{,}8$–$1{,}2$ mm, lalu dikemas dalam vessel dengan porositas target $0{,}38 \leq \epsilon \leq 0{,}42$ (divariasikan dalam simulasi aksisimetrik).

**Tahap 2 — Pressurization (5–8 menit).** CO₂ dialirkan hingga mencapai target $P = 25$ MPa dengan *ramp rate* $\leq 3$ MPa/menit. Berdasarkan Toledo & del Valle (2023), laju ini membatasi $\Delta T_{adiabatik} \leq 5$ K sehingga integritas cannabinoid terjaga. Jacket vessel dialiri air pendingin pada 15 °C.

**Tahap 3 — Static Soaking (0–30 menit, opsional).** Jika diinginkan *pre-equilibration*, sistem didiamkan pada $P = 25$ MPa, $T = 313$ K selama periode $t_{soak}$ untuk meningkatkan kelarutan awal THC.

**Tahap 4 — Dynamic Extraction (60–180 menit).** Aliran SC-CO₂ dipertahankan pada debit $Q = 5$–$15$ L/min (STP) dengan *co-current* atau *counter-current* terhadap arah packing. Parameter ini menjadi input utama model aksisimetrik untuk memprediksi profil $C_f(r,z)$.

**Tahap 5 — Separation (Depressurization Bertahap).** Ekspansi ke separator pada $P_1 = 8$ MPa (fraksi berat molekul tinggi) dan $P_2 = 5$ MPa (fraksi terpenten) menggunakan restrictor nozzle yang dipanaskan untuk mencegah *plugging*.

**Tahap 6 — Quality Control.** Analisis HPLC untuk profil cannabinoid, GC-MS untuk profil terpen, dan pengujian residu pelarut sesuai USP <467>.

Diagram alir keputusan: (a) jika model memprediksi $v_{z,max}/v_{z,avg} > 1{,}5$ (indikasi *channeling*), maka kurangi $Q$ atau tambah *fines* sebagai distributor; (b) jika $\Delta T > 8$ K terdeteksi sensor vessel, aktifkan *emergency cooling* dan turunkan set-point $T$.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Vessel ekstraksi silinder dengan $D = 0{,}2$ m, $H = 1{,}0$ m, berisi biomassa kanabis 14 kg (densitas bulk $\rho_b = 450$ kg/m³). Kondisi operasi: $P = 25$ MPa, $T = 313$ K, $Q_{CO_2} = 8$ L/min (STP).

**Langkah 1 — Konversi debit ke kecepatan superfisial:**
Pada STP, $\rho_{CO_2}^{STP} = 1{,}977$ kg/m³. Massa jenis SC-CO₂ pada 25 MPa/313 K (dari NIST REFPROP) adalah $\rho_{SC} = 839$ kg/m³. Debit volumetrik aktual:

$$Q_{aktual} = \frac{8 \times 1{,}977}{839} = 0{,}01885 \text{ L/min} = 3{,}14 \times 10^{-7} \text{ m}^3/\text{s}$$

Luas penampang vessel: $A = \pi (0{,}1)^2 = 0{,}0314$ m². Kecepatan superfisial:

$$v_{sup} = \frac{Q_{aktual}}{A} = 1{,}0 \times 10^{-5} \text{ m/s}$$

**Langkah 2 — Kecepatan interstitial (porositas 0,40):**

$$v_{int} = \frac{v_{sup}}{\epsilon} = \frac{1{,}0 \times 10^{-5}}{0{,}40} = 2{,}5 \times 10^{-5} \text{ m/s}$$

**Langkah 3 — Reynold partikel untuk verifikasi rezim:**

$$Re_p = \frac{\rho_{SC} v_{sup} d_p}{\mu (1-\epsilon)} = \frac{839 \times 1{,}0\times10^{-5} \times 1\times10^{-3}}{8\times10^{-5} \times 0{,}6} = 0{,}175$$

Karena $Re_p < 1$, rezim aliran adalah **creeping flow** dan kontribusi inersia Forchheimer dapat diabaikan (validasi asumsi model Obchoei & Limtrakarn 2024).

**Langkah