# 1674 — Pemodelan Aliran Aksisimetrik pada Ekstraksi Minyak Kanabis dengan Proses Supercritical Fluid Extraction CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Axisymmetric Flow Model of Cannabis Oil Extraction of Supercritical Fluid Extraction CO₂ Process*
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi kanabis (*Cannabis sativa* L.) telah mengalami transformasi struktural yang luar biasa dalam dekade terakhir, didorong oleh legalisasi bertahap produk cannabidiol (CBD) di berbagai negara, meningkatnya permintaan farmasi untuk cannabinoid dengan kemurnian tinggi, serta pergeseran preferensi konsumen dari produk rekreasional menuju aplikasi terapeutik seperti penanganan epilepsi refraktori, ansietas kronis, dan nyeri neuropatik. Pasar global CBD diperkirakan menembus lebih dari USD 12 miliar pada akhir dekade ini dengan *compound annual growth rate* (CAGR) lebih dari 20% (Grand View Research, 2023), sehingga memaksa pelaku industri mengadopsi teknologi ekstrakasi berstandar *Good Manufacturing Practice* (GMP) untuk menjamin konsistensi profil cannabinoid, bebas pelarut toksik, dan mampu diskalakan secara ekonomis.

Dalam konteks inilah *supercritical fluid extraction* (SFE) dengan CO₂ muncul sebagai teknologi dominan. CO₂ bersifat *Generally Recognized as Safe* (GRAS), tidak meninggalkan residu pelarut, memiliki selektivitas yang dapat dikontrol melalui tekanan dan temperatur, serta kritis pada kondisi yang relatif mudah dicapai ($T_c = 31{,}1^\circ\text{C}$, $P_c = 73{,}8\ \text{bar}$). Obchoei dan Limtrakarn (2024) menyoroti bahwa meskipun teknologi SFE-CO₂ sudah mapan secara operasional, pemahaman kuantitatif mengenai dinamika fluida di dalam bejana ekstraktor masih terbatas, terutama untuk sistem berbasis biomassa kanabis dengan morfologi partikel yang sangat heterogen. Mereka mengajukan model aliran aksisimetrik dua dimensi yang mampu memetakan profil tekanan, temperatur, dan konsentrasi cannabinoid di sepanjang sumbu radial dan aksial bejana, suatu kebutuhan penting untuk desain optimal dan *scale-up* dari skala laboratorium (1–5 L) ke skala pilot maupun komersial (50–1.000 L).

Di sisi lain, Toledo dan del Valle (2023) menunjukkan bahwa fenomena perpindahan panas memiliki pengaruh signifikan terhadap ketiga tahap operasional SFE-CO₂, yaitu *pressurization* (kompresi isentropik CO₂ dari kondisi tangki hingga kondisi operasi), *extraction* (pelarutan cannabinoid dari matriks biomassa), dan *depressurization* (ekspansi CO₂ untuk memisahkan solute). Tanpa model perpindahan panas yang akurat, prediksi waktu tinggal (*residence time*) optimal dan konsumsi energi spesifik (kWh/kg ekstrak) akan meleset hingga 30–40%, yang secara langsung berdampak pada *operating cost* dan jejak karbon fasilitas produksi. Integrasi kedua perspektif ini—mekanika fluida aksisimetrik dan termodinamika perpindahan panas—menjadi pilar penting dalam membangun model proses yang representatif untuk kebutuhan industri.

Urgensi industrial dari topik ini juga terletak pada fakta bahwa proses SFE-CO₂ beroperasi pada tekanan tinggi (200–400 bar) dengan investasi modal yang besar (CAPEX untuk satu unit ekstraktor 100 L mencapai USD 500.000–1.500.000), sehingga kesalahan desain atau optimasi yang suboptimal akan berakibat fatal secara finansial. Pemodelan aksisimetrik memberikan jalan tengah yang kompromi antara akurasi model tiga dimensi penuh (3D CFD) yang mahal secara komputasional, dan model satu dimensi *plug flow* yang terlalu sederhana untuk menangkap gradien radial konsentrasi dan temperatur yang nyata di lapangan.

## 2. Landasan Teori & Formulasi Matematis

Model yang dikembangkan Obchoei dan Limtrakarn (2024) dibangun di atas empat persamaan konservasi utama dalam koordinat silinder $(r, z)$ dengan asumsi aliran *steady-state*, *axisymmetric*, dan *single-phase supercritical* untuk fase fluida. Sistem persamaan diferensial parsial (PDP) tersebut adalah sebagai berikut.

### 2.1 Persamaan Kontinuitas (Konservasi Massa)

$$\frac{1}{r}\frac{\partial}{\partial r}\left(r\,\rho\,v_r\right) + \frac{\partial}{\partial z}\left(\rho\,v_z\right) = 0$$

di mana $\rho$ adalah densitas CO₂ superkritis $\left[\text{kg/m}^3\right]$, $v_r$ dan $v_z$ masing-masing adalah komponen kecepatan radial dan aksial $\left[\text{m/s}\right]$.

### 2.2 Persamaan Momentum (Navier–Stokes Aksisimetrik)

Arah radial:

$$\rho\left(v_r\frac{\partial v_r}{\partial r} + v_z\frac{\partial v_r}{\partial z}\right) = -\frac{\partial P}{\partial r} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial v_r}{\partial r}\right) - \frac{v_r}{r^2} + \frac{\partial^2 v_r}{\partial z^2}\right] - \mu\frac{v_r}{K}$$

Arah aksial:

$$\rho\left(v_r\frac{\partial v_z}{\partial r} + v_z\frac{\partial v_z}{\partial z}\right) = -\frac{\partial P}{\partial z} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial v_z}{\partial r}\right) + \frac{\partial^2 v_z}{\partial z^2}\right] - \frac{\mu\,v_z}{K} + \rho\,g$$

di mana $P$ adalah tekanan $\left[\text{Pa}\right]$, $\mu$ adalah viskositas dinamik CO₂ $\left[\text{Pa·s}\right]$, $K$ adalah permeabilitas intrinsik medium biomassa $\left[\text{m}^2\right]$, dan $g$ adalah percepatan gravitasi. Term $-\mu\,v_i/K$ merepresentasikan gaya hambatan Darcy sebagai konsekuensi aliran melalui media berpori (tanaman kanabis yang telah digiling).

### 2.3 Persamaan Energi

Berdasarkan formulasi Toledo dan del Valle (2023), persamaan energi untuk fluida superkritis mempertimbangkan *enthalpy transport* dan sumber panas dari pelarutan *latent heat* cannabinoid:

$$\rho\,c_p\left(v_r\frac{\partial T}{\partial r} + v_z\frac{\partial T}{\partial z}\right) = \frac{1}{r}\frac{\partial}{\partial r}\left(r\,k\frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k\frac{\partial T}{\partial z}\right) + \dot{q}_{\text{des}} - \dot{q}_{\text{loss}}$$

dengan $c_p$ kapasitas panas spesifik $\left[\text{J/kg·K}\right]$, $k$ konduktivitas termal $\left[\text{W/m·K}\right]$, $\dot{q}_{\text{des}}$ laju pelepasan panas desorpsi cannabinoid, dan $\dot{q}_{\text{loss}}$ laju kehilangan panas ke lingkungan melalui dinding bejana.

### 2.4 Persamaan Transport Spesies (Cannabinoid)

Untuk konstituen target seperti CBD dan THC, konservasi massa spesies $i$ mengikuti:

$$\rho\left(v_r\frac{\partial Y_i}{\partial r} + v_z\frac{\partial Y_i}{\partial z}\right) = \frac{1}{r}\frac{\partial}{\partial r}\left(r\,\rho\,D_{i,\text{CO}_2}\frac{\partial Y_i}{\partial r}\right) + \frac{\partial}{\partial z}\left(\rho\,D_{i,\text{CO}_2}\frac{\partial Y_i}{\partial z}\right) + \dot{r}_i$$

di mana $Y_i$ adalah fraksi massa cannabinoid $i$, $D_{i,\text{CO}_2}$ adalah koefisien difusi biner $\left[\text{m}^2/\text{s}\right]$, dan $\dot{r}_i$ adalah laju pelarutan yang dimodelkan menggunakan persamaan *shrinking core* atau *broken-and-intact cells* (del Valle & Toledo, 2023).

### 2.5 Persamaan Keadaan (Equation of State)

Hubungan $P-\rho-T$ untuk CO₂ superkritis mengikuti persamaan keadaan Peng–Robinson:

$$P = \frac{RT}{V_m - b} - \frac{a\,\alpha}{V_m(V_m + b) + b(V_m - b)}$$

dengan parameter $a$, $b$, dan $\alpha$ sebagai fungsi temperatur dan *acentric factor* $\omega = 0{,}225$ untuk CO₂. Persamaan ini krusial untuk menentukan $\rho(P,T)$ secara akurat pada rentang operasi 200–400 bar dan 313–333.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
