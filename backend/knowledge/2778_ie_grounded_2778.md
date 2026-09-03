# 2778 — Model Aliran Aksisimetrik pada Ekstraksi Minyak Cannabis Menggunakan Proses Superkritis CO₂: Integrasi Model Perpindahan Panas dan Simulasi CFD untuk Optimasi Yield

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi nabati bernilai tambah tinggi (high-value botanical extraction) tengah mengalami transformasi fundamental menyusul legalisasi cannabis medis dan rekreasional di lebih dari 40 negara serta 38 negara bagian AS per 2024. Pasar global cannabis legal diproyeksikan mencapai USD 102 miliar pada 2030 (Statista, 2024), dengan segmen ekstraksi minyak hashish (cannabis oil) sebagai unit usaha dengan margin EBITDA tertinggi—yakni 50–70%—karena satu kilogram biomassa ganja *food-grade* (≈ 12–18% cannabinoid) dapat dikonversi menjadi 100–180 gram destilat dengan harga jual USD 1.500–3.000/gram di pasar *pharmaceutical grade*. Dalam konteks ini, pemilihan teknologi ekstraksi menjadi keputusan rekayasa kritis yang menentukan yield, profil cannabinoid (rasio THC:CBD:terpenoid), biaya operasional (OPEX), dan kepatuhan terhadap *Good Manufacturing Practice* (cGMP).

Metode ekstraksi konvensional seperti *butane hash oil* (BHO) dan ekstraksi etanol memiliki kelemahan inheren: residu pelarut organik, profil termal degradasi cannabinoid (dekarboksilasi parsial Δ⁹-THC menjadi CBN), dan risiko keselamatan ledakan/kebakaran. Obchoei & Limtrakarn (2024) dalam *International Journal of Thermofluids* (DOI: [10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)) menegaskan bahwa **ekstraksi fluida superkritis CO₂** (*supercritical fluid extraction*, SFE) muncul sebagai *gold standard* karena CO₂ meninggalkan nol residu toksik, bersifat GRAS (*Generally Recognized As Safe*), tunable selectivity melalui manipulasi densitas, dan memungkinkan daur ulang pelarut secara loop tertutup. Namun demikian, desain bejana ekstraktor SFE konvensional sering mengandalkan asumsi *plug flow ideal* yang mengabaikan profil kecepatan aksial-radial, gradien konsentrasi lokal, dan efek perpindahan panas yang substansial selama tahap *pressurization*, *steady extraction*, dan *depressurization*.

Toledo & del Valle (2023) dalam *The Journal of Supercritical Fluids* (DOI: [10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)) secara kuantitatif menunjukkan bahwa **fenomena perpindahan panas transien—khususnya saat CO₂ sub-kritis (gas) dipaksa masuk ke bejana berisi biomassa pada suhu kamar—menyebabkan pendinginan Joule–Thomson yang menurunkan suhu lokal hingga 15–25 K di zona inlet**. Anomali termal ini secara langsung menghambat kelarutan cannabinoid (yang bersifat endotermik) dan menggeser front ekstraksi ke arah *under-yield*. Permasalahan ini tidak dapat diselesaikan tanpa formulasi matematis yang akurat untuk interaksi momentum–energi–massa dalam geometri silinder, sehingga muncul kebutuhan akan **model aliran aksisimetrik dua-dimensi** yang menggabungkan persamaan Brinkman-extended Darcy, konservasi energi dengan sumber termo-mekanis, dan kinetika pelarutan berdasarkan pendekatan *shrinking core* atau *linear driving force* (LDF).

Dari perspektif Industrial Engineering, keputusan kapasitas bejana (umumnya 5 L sampai 5.000 L untuk skala komersial), laju alir CO₂ (40–200 kg/jam), dan tekanan operasi (250–350 bar) merupakan variabel keputusan dengan trade-off kompleks: throughput vs. yield vs. capex energi. Studi kasus oleh Obchoei & Limtrakarn (2024) menunjukkan bahwa model *axisymmetric* berbasis finite element mampu memprediksi profil *cannabinoid recovery* dengan galat < 4,5% terhadap data eksperimen, sekaligus mengungkap *channeling effect* dan *dead zones* yang sebelumnya luput dari diagnosis teknisi lapangan. Dengan demikian, adopsi model ini bukan sekadar persoalan akademis, melainkan alat *process intensification* untuk mengurangi *batch time* 30–45%, meningkatkan efisiensi energi spesifik (kWh/kg biomassa), dan memenuhi standar farmasi seperti USP <467> untuk residu pelarut.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Sifat Termodinamika CO₂ Superkritis

CO₂ mencapai titik kritis pada $T_c = 304{,}13\,\text{K}$ dan $P_c = 73{,}8\,\text{bar}$. Di atas kondisi kritis, CO₂ berada dalam fase superkritis dengan densitas tunabel antara $(0{,}2 - 0{,}9)\,\text{g/cm}^3$ yang membuatnya menjadi pelarut selektif. Persamaan keadaan yang lazim digunakan adalah *Soave–Redlich–Kwong* (SRK) atau *Peng–Robinson* (PR):

$$P = \frac{RT}{V_m - b} - \frac{a(T)}{V_m(V_m + b) + b(V_m - b)}$$

dengan parameter $a(T) = 0{,}45724 \frac{R^2 T_c^2}{P_c} \alpha(T)$, $b = 0{,}07780 \frac{RT_c}{P_c}$, dan $\alpha(T) = \left[1 + \kappa\left(1 - \sqrt{T/T_c}\right)\right]^2$. Akurasi prediksi densitas fluida superkritis CO₂ dalam rentang operasi 300–350 bar dan 313–353 K umumnya di bawah 2% dengan PR-EOS, yang sangat penting untuk menghitung laju alir massa dan konsentrasi kesetimbangan.

### 2.2. Persamaan Konservasi untuk Media Berpori (Porous Media)

Biomassa cannabis yang telah digiling (*milled*) membentuk medium berpori dengan porositas $\epsilon$ (umumnya $0{,}35 - 0{,}55$) dan permeabilitas intrinsik $K$ ($10^{-9}$ sampai $10^{-7}\,\text{m}^2$). Aliran CO₂ superkritis di dalam bejana ekstraktor dimodelkan dengan persamaan **Brinkman-extended Darcy** yang menggabungkan efek viskos dan inersia:

$$\frac{\rho_f}{\epsilon}\frac{\partial \vec{u}}{\partial t} + \frac{\rho_f}{\epsilon^2}(\vec{u}\cdot\nabla)\vec{u} = -\nabla p + \mu_{\text{eff}}\nabla^2\vec{u} - \frac{\mu_f}{K}\vec{u} + \rho_f \vec{g}$$

dengan $\vec{u} = (u_r, u_z)$ adalah vektor kecepatan Darcy, $\mu_f$ viskositas dinamik fluida, dan $\mu_{\text{eff}} = \mu_f/\epsilon$ viskositas efektif. Persamaan kontinuitas untuk fase fluida:

$$\frac{\partial (\epsilon \rho_f)}{\partial t} + \nabla \cdot (\rho_f \vec{u}) = -\dot{m}_{s \to f}$$

di mana $\dot{m}_{s \to f}$ adalah laju transfer massa dari matriks padat (cannabinoid) ke fase fluida.

### 2.3. Persamaan Konservasi Energi dengan Sumber Joule–Thomson

Toledo & del Valle (2023) menurunkan persamaan energi dua-fasa yang menggabungkan kontribusi konveksi, konduksi efektif, dan efek Joule–Thomson isentalpi:

$$\left[\epsilon \rho_f C_{p,f} + (1-\epsilon)\rho_s C_{p,s}\right]\frac{\partial T}{\partial t} + \rho_f C_{p,f}\vec{u}\cdot\nabla T = k_{\text{eff}}\nabla^2 T + \rho_f C_{p,f}\mu_{JT}\frac{\partial p}{\partial t} + Q_{\text{reaction}}$$

dengan $k_{\text{eff}} = \epsilon k_f + (1-\epsilon)k_s$ konduktivitas efektif, $\mu_{JT} \approx 1{,}1\,\text{K/bar}$ untuk CO₂ pada 320 K, dan $Q_{\text{reaction}}$ efek eksotermik dekarboksilasi asam THCA menjadi THC. Persamaan ini menjelaskan mengapa *pressurization stage* (0 → 300 bar dalam 90–180 detik) menjadi *bottleneck* termal.

### 2.4. Kinetika Ekstraksi: Model *Linear Driving Force* (LDF)

Model perpindahan massa yang diadopsi Obchoei & Limtrakarn (2024) mengikuti formulasi **LDF** dengan asumsi bahwa fluks massa berbanding lurus dengan simpangan dari konsentrasi kesetimbangan:

$$\frac{\partial C}{\partial t} = k_f a_s\left(C^*(T, P) - C\right)$$

dengan $k_f$ koefisien transfer massa fluida, $a_s$ luas permukaan spesifik partikel, dan $C^*(T,P)$ kelarutan kesetimbangan cannabinoid (terutama THC) yang bergantung kuat pada densitas CO₂. Korelasi Sherwood untuk partikel non-sferis biomassa:

$$Sh = 2{,}0 + 1{,}8\,Re^{0,5}\,Sc^{0,33}$$

dengan $Re = \rho_f d_p \lvert\vec{u}\rvert/\mu_f$ dan $Sc = \mu_f/(\rho_f D_{AB})$.

### 2.5. Geometri Aksisimetrik dan Sistem Koordinat Silinder

Karena bejana ekstraktor berbentuk silinder dengan panjang $L$ dan jari-jari $R$, sistem persamaan di atas disederhanakan dalam koordinat silinder $(r, z, t)$ dengan asumsi **aksisimetri rotasional** ($\partial/\partial\theta = 0$). Operator divergensi dan Laplacian menjadi:

$$\nabla \cdot \vec{u} = \frac{1}{r}\frac{\partial (r u_r)}{\partial r} + \frac{\partial u_z}{\partial z}$$

$$\nabla^2 T = \frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial T}{\partial r}\right) + \frac{\partial^2 T}{\partial z^2}$$

Syarat batas pada dinding bejana: *no-slip* ($\vec{u}=0$) dan *no-flux* untuk massa. Syarat inlet (z=0): $\vec{u} = u_{\text{in}}(r)$, $T = T_{\text{in}}(r)$, $C = 0$ (CO₂ murni). Syarat outlet (z=L): *fully developed flow* dengan gradien tekanan $\partial p/\partial z = -\Delta P / L$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi proses SFE-CO₂ aksisimetrik di industri mengikuti prosedur operasional standar yang mengintegrasikan hasil riset Obchoei & Limtrakarn (2024) serta Toledo & del Valle (