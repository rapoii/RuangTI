# 1754 — Pemodelan Aliran Aksisimetrik dan Perpindahan Panas pada Ekstraksi Minyak Kanabis dengan Fluida Superkritis CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botanol dari tanaman *Cannabis sativa* mengalami pertumbuhan eksponensial pascalegalisasi medis dan rekreasional di berbagai yurisdiksi global, dengan valuasi pasar cannabinoid global yang diproyeksikan menembus USD 47 miliar pada 2028. Di tengah pertumbuhan ini, teknologi **Supercritical Fluid Extraction (SFE) menggunakan CO₂** muncul sebagai *gold standard* karena mampu menghindari residu pelarut organik, menghasilkan profil cannabinoid dan terpena yang utuh, serta memenuhi standar farmakope (USP, EP) untuk aplikasi medis. Obchoei dan Limtrakarn (2024) dalam *International Journal of Thermofluids* menekankan bahwa pada tekanan operasi 25–35 MPa dan suhu 308–333 K — di atas titik kritis CO₂ ($T_c = 304{,}13$ K, $P_c = 7{,}377$ MPa) — fluida memiliki difusivitas tinggi dan viskositas rendah, sehingga penetrasi ke matriks padat kanabis menjadi sangat efisien.

Namun, efisiensi proses secara industri sangat ditentukan oleh desain reaktor (extractor vessel) yang umumnya berbentuk silinder vertikal dengan rasio aspek panjang terhadap diameter (L/D) antara 4–8. Keseragaman aliran dalam vessel ini menjadi krusial; oleh sebab itu Obchoei & Limtrakarn (2024) mengembangkan **model aliran aksisimetrik 2-D** (axisymmetric flow model) untuk memprediksi profil kecepatan, tekanan, dan konsentrasi dalam extractor, mengatasi keterbatasan model 1-D pseudo-steady state yang selama ini digunakan dalam desain komersial. Di sisi lain, Toledo & del Valle (2023) menyoroti bahwa sekitar 60–70% dari total waktu siklus batch SFE dihabiskan pada tahap **pressurization dan depressurization**, di mana perpindahan panas non-tunak (transient heat transfer) mendominasi dinamika proses. Kedua perspektif ini saling melengkapi karena desain vessel yang baik harus mengintegrasikan hidrodinamika aliran aksisimetrik dengan manajemen termal selama seluruh siklus batch.

Urgensi ekonominya jelas: kapasitas ekstraktor industri tipikal berkisar 100–2000 L dengan throughput 50–500 kg biomassa per batch. Optimasi 1% saja dalam yield recovery menghasilkan tambahan revenue signifikan, terlebih bila dikombinasikan dengan reduksi waktu siklus 10–15 menit per batch melalui pemahaman perpindahan panas. Tanpa model rekayasa yang kredibel, insinyur proses cenderung *over-design* dengan safety factor berlebihan, menaikkan CAPEX vessel hingga 25% (Obchoei & Limtrakarn, 2024; Toledo & del Valle, 2023).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan State untuk CO₂ Superkritis

Kepadatan CO₂ superkritis pada berbagai kondisi operasi dihitung dengan persamaan状态 **Peng-Robinson (PR-EOS)**:

$$P = \frac{RT}{V_m - b} - \frac{a(T)}{V_m(V_m + b) + b(V_m - b)}$$

dengan parameter atraktif:

$$a(T) = 0{,}45724 \frac{R^2 T_c^2}{P_c} \left[1 + \kappa \left(1 - \sqrt{T/T_c}\right)\right]^2$$

dan parameter kovolumetrik $b = 0{,}07780 \, R T_c / P_c$. Konstanta gas universal $R = 8{,}314$ J/(mol·K). Parameter $\kappa$ untuk CO₂ bernilai $0{,}37464 + 1{,}54226\omega - 0{,}26992\omega^2$ dengan faktor asentrisitas $\omega = 0{,}225$.

### 2.2 Persamaan Kontinuitas dan Momentum Aksisimetrik

Model Obchoei & Limtrakarn (2024) mengadopsi koordinat silinder $(r,z)$ dengan asumsi simetri aksial. Persamaan kontinuitas untuk fluida superkritis yang melalui media berpori:

$$\frac{\partial (\varepsilon \rho_f)}{\partial t} + \frac{1}{r}\frac{\partial (r \rho_f u_r)}{\partial r} + \frac{\partial (\rho_f u_z)}{\partial z} = 0$$

Persamaan momentum (Brinkman-extended Darcy):

$$\rho_f \left(\frac{\partial \mathbf{u}}{\partial t} + \mathbf{u} \cdot \nabla \mathbf{u}\right) = -\nabla P + \mu \nabla^2 \mathbf{u} - \frac{\mu}{K}\varepsilon \mathbf{u}$$

dengan $\varepsilon$ porositas bed biomassa, $K$ permeabilitas intrinsik (Persamaan Kozeny-Carman):

$$K = \frac{d_p^2 \, \varepsilon^3}{150(1-\varepsilon)^2}$$

untuk diameter partikel biomassa $d_p$ tipikal 0,5–2 mm.

### 2.3 Model Perpindahan Massa Sovová (Broken-and-Intact Cells)

Yield ekstraksi dimodelkan menggunakan persamaan laju untuk fraksi minyak mudah-terakses (uap-tekanan tinggi) dan fraksi sulit-terakses (terperangkap dalam sel utuh):

$$\frac{\partial q}{\partial t} = -k_f \, a \, (q - q^*) \quad \text{(fase intact cells)}$$

$$\frac{\partial C}{\partial t} + u \frac{\partial C}{\partial z} = k_f \, a \, (q - q^*) \quad \text{(fase fluida)}$$

dengan $q$ konsentrasi minyak di solid (kg/kg), $C$ konsentrasi minyak di fluida (kg/kg), $k_f$ koefisien transfer fluida, $a$ luas spesifik, dan $q^*$ konsentrasi kesetimbangan yang terkait dengan solubility $y^*$ melalui:

$$q^* = \frac{q_0}{1 + (q_0/(y^* W) - 1)\exp[(k_f a \rho_f)/(q_0 G)]}$$

### 2.4 Persamaan Energi Transient (Toledo & del Valle, 2023)

Untuk dinding extractor baja SS-316 dan biomassa, Toledo & del Valle (2023) menyusun persamaan panas 1-D radial:

$$\rho_i c_{p,i} \frac{\partial T_i}{\partial t} = \frac{1}{r}\frac{\partial}{\partial r}\left(r k_i \frac{\partial T_i}{\partial r}\right) + \dot{q}_i$$

dengan kondisi batas konveksi di dinding extractor ($h_{ext}$ oleh air pemanas/dingin) dan sumber panas $\dot{q}_i$ dari langkah kompresi CO₂ selama *pressurization*. Energi kompresi dihitung dari kerja isotermal nyata:

$$W_{press} = \int_{P_0}^{P_{op}} V \left(\frac{\partial P}{\partial \rho_f}\right)_T d\rho_f \approx nRT \ln\frac{P_{op}}{P_0} \cdot \frac{Z_{op}}{Z_0}$$

dengan faktor kompresibilitas $Z = P V_m / (RT)$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri SFE-CO₂ untuk kanabis mengikuti protokol rekayasa terstruktur sebagai berikut (disintesis dari Obchoei & Limtrakarn, 2024; Toledo & del Valle, 2023):

**Tahap 1 — Preparasi Biomassa.** Cannabis kering digiling hingga ukuran partikel 0,5–1,5 mm dan dikemas dalam extractor vessel dengan densitas packing $\rho_b = 350{-}500$ kg/m³. Moisture content dijaga <10% untuk mencegah aglomerasi dan formasi es CO₂ saat *depressurization*.

**Tahap 2 — Pressurization (5–15 menit).** CO₂ dipompa dari reservoir cair ($P_0 \approx 5$ MPa) hingga tekanan operasi $P_{op} = 25{-}35$ MPa. Sistem pemanas (water jacket) mempertahankan suhu dalam rentang 313–333 K. Validasi model Toledo & del Valle (2023) menunjukkan profil suhu dinding vessel dapat diprediksi dengan galat <2% menggunakan persamaan energi transient radial.

**Tahap 3 — Static Soaking (10–30 menit).** Ekstraktor ditutup tanpa aliran selama periode soaking agar minyak berdifusi ke permukaan partikel. Tahap ini memaksimalkan yield fraksi *easily accessible* sebelum fase dinamis.

**Tahap 4 — Dynamic Extraction (60–180 menit).** CO₂ superkritis dipompa dengan flow rate $Q = 2{-}10$ kg/jam per kg biomassa, melewati bed secara aksisimetrik. Pemodelan aksisimetrik 2-D memastikan tidak ada *channeling* atau *dead zone* dalam vessel.

**Tahap 5 — Separation & Depressurization.** Campuran CO₂-minyak masuk separator pada $P = 6{-}8$ MPa, $T = 313$ K, mempresipitasikan minyak. CO₂ direcycle. Pendinginan depressurization mengikuti ramp suhu terkontrol agar tidak terjadi thermal shock pada vessel.

Diagram alir logika pengendalian proses menggunakan **Process Flow Diagram (PFD)** standar ISA-5.1 dengan Instrumentation & Control loop PID untuk variabel P, T, Q, dan level separator. Sistem SCADA memantau yield kumulatif real-time melalui neraca massa dinamis:

$$\text{Yield}(t) = \frac{\int_0^t Q_{CO_2}(\tau) \, C(\tau) \, d\tau}{m_{biomassa}}$$

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Spesifikasi Kasus

Studi kasus mengacu pada parameter eksperimental Obchoei & Limtrakarn (2024) dan kondisi operasi khas fasilitas produksi kanabis medis skala menengah:

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| Tekanan operasi $P_{op}$ | 30 | MPa |
| Suhu operasi $T_{op}$ | 323 | K |
| Diameter extractor $D$ | 0,15 | m |
| Panjang extractor $L$ | 0,90 | m |
| Porositas bed $\varepsilon$ | 0,42 | — |
| Diameter partikel $d_p$ | 1,0 | mm |
| Permeabilitas $K$ | 4,0 × 10⁻⁹ | m² |
| Laju alir massa CO₂ $G$ | 4,0 | kg/jam |
| Viscositas dinamis CO₂ $\mu$ | 7,2 × 10⁻⁵ | Pa·s |
| Kapadatan CO₂ $\rho_f$ | 830 | kg/m³ |
| Kapadatan biomassa $\rho_b$ | 420 | kg/m³ |
| Massa biomassa $m_b$ | 6,6 | kg |

### 4.2 Perhitungan Permeabilitas (Kozeny-Carman)

$$K = \frac{(1{,}0 \times 10^{-3})^2 \times 0{,}42^3}{150 \times (1-0{,}42)^2} = \frac{1{,}0 \times 10^{-6} \times 0{,}0741}{150 \times 0{,}3364}$$

$$K = \frac{7{,}41 \times 10^{-8}}{50{,}46} = 1{,}47 \times 10^{-9} \text{ m}^2$$

### 4.3 Perhitungan Kecepatan Superfisial dan Interstitial

Laju alir volumetrik CO₂:

$$\dot{V}_{CO_2} = \frac{G}{\rho_f} = \frac{4{,}0}{830} = 4{,}82 \times 10^{-3} \text{ m}^3/\text{jam} = 1{,}34 \times 10^{-6} \text{ m}^3/\text{s}$$

Luas penampang extractor:

$$A_c = \frac{\pi D^2}{4} = \frac{\pi (0{,}15)^2}{4} = 1{,}767 \times 10^{-2} \text{ m}^2$$

Kecepatan superfisial:

$$u_s = \frac{\dot{V}}{A_c} = \frac{1{,}34 \times 10^{-6}}{1{,}767 \times 10^{-2}} = 7{,}58 \times 10^{-5} \text{ m/s}$$

Kecepatan interstitial (pori):

$$u_i = \frac{u_s}{\varepsilon} = \frac{7{,}58 \times 10^{-5}}{0{,}42} = 1{,}80 \times 10^{-4} \text{ m/s}$$

### 4.4 Penurunan Tekanan Darcy di Sepanjang Bed

$$\Delta P = \frac{\mu L \, u_s}{K} = \frac{(7{,}2 \times 10^{-5})(0{,}90)(7{,}58 \times 10^{-5})}{1{,}47 \times 10^{-9}}$$

$$\Delta P = \frac{4{,}91 \times 10^{-9}}{1{,}47 \times 10^{-9}} = 3{,}34 \text{ Pa}$$

Penurunan tekanan sangat rendah (~0,003 bar), mengindikasikan desain vessel sudah optimal tanpa *

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
