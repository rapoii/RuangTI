# 2234 — Model Aliran Aksisimetrik dan Perpindahan Kalor pada Ekstraksi Minyak Kanabis dengan Fluida Superkritis CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botanol dan fitokimia global telah mengalami transformasi signifikan dalam satu dekade terakhir, didorong oleh legalisasi ganja medis di lebih dari 50 negara (termasuk Kanada, Jerman, Australia, dan Thailand) serta meningkatnya permintaan akan produk cannabinoid berkualitas farmasi (Obchoei & Limtrakarn, 2024). Minyak kanabis (cannabis oil) yang kaya akan kannabinoid seperti cannabidiol (CBD) dan tetrahydrocannabinol (THC) saat ini menjadi bahan baku bernilai tambah tinggi untuk industri farmasi, nutraceutical, dan kosmetik. Nilai pasar ekstrak kanabis global diproyeksikan mencapai USD 45,8 miliar pada tahun 2027 dengan CAGR 18,4%, sehingga efisiensi proses ekstraksi menjadi penentu langsung profitabilitas operasional (Obchoei & Limtrakarn, 2024).

Metode ekstraksi konvensional—seperti ekstraksi pelarut organik (etanol, heksana, kloroform)—menghadapi tiga kelemahan struktural: (i) residu pelarut toksik yang melanggar standar USP/EP untuk produk farmasi, (ii) degradasi termal termolabil cannabinoid pada suhu >120 °C, serta (iii) jejak karbon tinggi dan konsumsi energi yang tidak memenuhi target ESG. Ekstraksi Fluida Superkritis Karbon Dioksida (Supercritical Fluid Extraction with CO₂ / SC-CO₂) muncul sebagai teknologi alternatif yang memenuhi keempat kriteria ini secara simultan (Toledo & del Valle, 2023). CO₂ bersifat inert, tidak beracun, GRAS (Generally Recognized as Safe), dan memiliki kondisi kritis pada T_c = 304,25 K serta P_c = 7,38 MPa—parameter yang mudah dicapai dengan sistem pompa hidrolik standar industri.

Namun demikian, desain reaktor SC-CO₂ konvensional di industri masih bersifat *rule-of-thumb* dengan asumsi plug flow isothermal yang sangat menyederhanakan fenomena transpor riil. Obchoei & Limtrakarn (2024) menunjukkan bahwa profil kecepatan aksisimetrik dalam vessel ekstraksi sangat mempengaruhi laju perpindahan massa dan konsentrasi yield lokal, sementara Toledo & del Valle (2023) membuktikan bahwa asumsi isotermal menghasilkan deviasi prediksi yield hingga 18–22% pada tahap *pressurization* dan *depressurization* karena efek Joule-Thomson dan perpindahan kalor non-stationer. Kajian ini menjadi semakin urgen ketika kita bergerak menuju *Industry 5.0* yang membutuhkan model digital twin (DT) akurat untuk optimalisasi proses real-time.

Urgensi ekonomi-teknis paper Obchoei & Limtrakarn (2024) terletak pada kemampuan model aksisimetrik 2D yang mereka kembangkan untuk memprediksi distribusi *local yield* dan *pressure drop* sepanjang sumbu vessel—parameter yang tidak dapat ditangkap oleh model 1D lumped-parameter. Sementara Toledo & del Valle (2023) melengkapi analisis dengan memodelkan dinamika termal selama tiga tahap operasional (pressurization, extraction, depressurization), yang mana tahap depressurization menghasilkan efek pendinginan Joule-Thomson ΔT ≈ −40 K yang dapat merusak selulosa matriks dan menurunkan yield hingga 9%.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Model Aliran Aksisimetrik (Obchoei & Limtrakarn, 2024)

Ekstraktor SC-CO₂ berbentuk vessel silinder vertikal dengan diameter D dan tinggi L, diisi dengan partikel biomassa kanabis yang dihancurkan (milled). Diasumsikan geometri dan kondisi batas rotasional-simetris terhadap sumbu z, sehingga persoalan 3D direduksi menjadi 2D (r, z). Persamaan konservasi massa (kontinuitas) dalam koordinat silinder adalah:

$$\frac{\partial \rho}{\partial t} + \frac{1}{r}\frac{\partial (r\rho u_r)}{\partial r} + \frac{\partial (\rho u_z)}{\partial z} = 0$$

di mana $u_r$ dan $u_z$ adalah komponen kecepatan radial dan aksial (m·s⁻¹), $\rho$ adalah densitas CO₂ superkritis (kg·m⁻³) yang bergantung pada tekanan dan suhu menurut persamaan keadaan Peng-Robinson. Persamaan momentum Navier-Stokes untuk komponen radial dan aksial adalah:

$$\rho\left(\frac{\partial u_r}{\partial t} + u_r\frac{\partial u_r}{\partial r} + u_z\frac{\partial u_r}{\partial z}\right) = -\frac{\partial p}{\partial r} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_r}{\partial r}\right) + \frac{\partial^2 u_r}{\partial z^2} - \frac{u_r}{r^2}\right]$$

$$\rho\left(\frac{\partial u_z}{\partial t} + u_r\frac{\partial u_z}{\partial r} + u_z\frac{\partial u_z}{\partial z}\right) = -\frac{\partial p}{\partial z} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_z}{\partial r}\right) + \frac{\partial^2 u_z}{\partial z^2}\right] + \rho g_z$$

di mana $\mu$ adalah viskositas dinamis CO₂ superkritis dan $g_z$ adalah komponen aksial gravitasi.

### 2.2 Model Perpindahan Massa (Sovová-Termodinamika)

Laju perpindahan massa dari matriks padat ke fase fluida superkritis dimodelkan menggunakan pendekatan *broken-and-intact cells* (Sovová, 1994) yang diadopsi Obchoei & Limtrakarn (2024). Fase fluida mengikuti kesetimbangan termodinamika:

$$y_{eq} = \frac{P_{sat,i}(T)}{P} \cdot \frac{x_{i,local}}{\gamma_{i}}$$

sedangkan fluks massa antara fasa padat-cair diberikan oleh:

$$\frac{\partial x_i}{\partial t} = D_{eff,i}\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial x_i}{\partial r}\right) + \frac{\partial^2 x_i}{\partial z^2}\right] - k_f a_s (y_{eq} - y)$$

di mana $D_{eff,i}$ adalah difusivitas efektif cannabinoid dalam partikel (m²·s⁻¹), $k_f$ koefisien transfer massa konvektif (m·s⁻¹), $a_s$ luas spesifik partikel (m²·m⁻³), dan $y$ fraksi massa cannabinoid dalam fasa superkritis.

### 2.3 Model Perpindahan Kalor (Toledo & del Valle, 2023)

Persamaan energi untuk vessel silinder dengan efek *pressurization* dan *depressurization* adalah:

$$\rho C_p \frac{\partial T}{\partial t} + \rho C_p (u_r\frac{\partial T}{\partial r} + u_z\frac{\partial T}{\partial z}) = \frac{1}{r}\frac{\partial}{\partial r}\left(k r\frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k\frac{\partial T}{\partial z}\right) + Q_{JT} + Q_{ext}$$

di mana $Q_{JT}$ adalah laju pendinginan/pemanasan Joule-Thomson (W·m⁻³):

$$Q_{JT} = -\rho C_p \mu_{JT} \frac{\partial p}{\partial t}$$

dengan $\mu_{JT}$ adalah koefisien Joule-Thomson CO₂ superkritis (K·Pa⁻¹). Untuk CO₂ pada 35 MPa dan 323 K, $\mu_{JT} \approx 1,2 \times 10^{-6}$ K·Pa⁻¹ yang menunjukkan pendinginan signifikan saat depresurisasi. Perpindahan kalor antara vessel dan mantel jaket dimodelkan dengan koefisien $h_{ext}$ (W·m⁻²·K⁻¹) yang diperoleh dari korelasi Wakao & Kaguei untuk *packed bed*:

$$h_{ext} = \frac{k_f}{d_p}\left[2 + 1,1 \cdot Re_p^{0,6} \cdot Pr^{1/3}\right]$$

di mana $Re_p = \rho u d_p / \mu$ adalah Reynolds partikel dan $Pr$ adalah Prandtl number.

### 2.4 Kondisi Batas dan Initial

- *Inlet* (z = 0): $u_z = u_{in}$, $T = T_{in}$, $y_i = 0$
- *Outlet* (z = L): $\partial u_z / \partial z = 0$, $\partial T / \partial z = 0$ (konvektif)
- *Wall* (r = R): $u_r = 0$, $q'' = h_{ext}(T_{wall} - T_{mantel})$
- *Sumbu* (r = 0): $\partial u_r / \partial r = 0$, $\partial T / \partial r = 0$ (simetri)

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri model ini mengikuti SOP berlapis yang dikembangkan berdasarkan kedua paper di atas. Tahapan operasionalnya adalah sebagai berikut:

**Tahap 1: Preparasi Biomassa.** Biomass ganja kering (kadar air <10% wb) digiling hingga ukuran partikel 0,5–2,0 mm untuk memastikan difusivitas internal optimal. Pengecekan kadar air harus lolos ASTM E1756 dan kandungan cannabinoid total diukur via HPLC sesuai AOAC 2018.10.

**Tahap 2: Pengisian Vessel.** Vessel diisi dengan biomass dengan densitas packing $\rho_b = 350$–450 kg·m⁻³. Void fraction (porositas) diukur sebagai $\varepsilon = 1 - \rho_b/\rho_{partikel}$. Ketidakseragaman packing menyebabkan *channeling* yang menurunkan yield; oleh karena itu, SOP mensyaratkan vibrating bed 5 menit pada frekuensi 25 Hz.

**Tahap 3: Pressurization.** CO₂ dialirkan dari kondisi subkritis (P₀ = 5 MPa, T₀ = 298 K) hingga tekanan operasi (P_op = 25–35 MPa) dengan laju ram ramp 1 MPa·menit⁻¹. Tahap ini mengikuti model termal Toledo & del Valle (2023), yang menunjukkan bahwa ramp rate terlalu cepat (>2 MPa·menit⁻¹) menyebabkan gradien termal >15 K dan yield loss 6–8%.

**Tahap 4: Ekstraksi (Holding).** Suhu dipertahankan pada T_op = 313–333 K dengan kontroler PID (jaket air-pendingin). Laju alir CO₂ dijaga konstan pada ṁ = 5–20 kg·jam⁻¹ dengan rasio solvent-to-feed (S/F) 25–40. Parameter ini merupakan domain operasi optimal Obchoei & Limtrakarn (2024).

**Tahap 5: Depressurization.** Dilakukan secara gradual (0,5 MPa·menit⁻¹) untuk menghindari efek Joule-Thomson berlebih yang dapat merusak struktur partikel dan mengkontaminasi separator downstream.

**Tahap 6: Pemisahan & Recovery.** Campuran CO₂-oleoresin masuk separator pada P_sep = 6 MPa, T_sep = 298 K, di mana cannabinoid mengendap. CO₂ direcycle ke kompressor.

Secara diagram alir: `Biomassa → Grinding → Filling → Pressurization → Static Extraction (3–6 jam) → Depressurization → Separation I → Separation II → Crude Oil → Winterization → Dec