# 2698 — Pemodelan Aliran Aksisimetrik pada Ekstraksi Minyak Cannabis Menggunakan Fluida Superkritis CO₂: Integrasi Model Termofluida dan Perpindahan Panas Transien

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Jurnal & Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi botolan modern—khususnya pada sektor cannabinoid farmasi, nutraceutical, dan kosmetik—menghadapi tantangan rekayasa yang sangat spesifik terkait dengan **Yield Quality Consistency** dan **Process Scale-Up Integrity** ketika bertransisi dari laboratorium (≤1 L extractor) ke kapasitas pilot serta komersial (≥100 L extractor). Di tengah ketatnya regulasi *Good Manufacturing Practice* (GMP) untuk produk cannabis medis sesuai pedoman EMA, Health Canada, dan BPOM, kemampuan untuk **memprediksi distribusi medan aliran, gradien konsentrasi, dan profil termal** di dalam *extractor vessel* bukan lagi pilihan akademis melainkan kebutuhan operasional yang strategis. Obchoei dan Limtrakarn (2024) dalam *International Journal of Thermofluids* memperkenalkan **model aliran aksisimetrik 2-D axisymmetric** yang memformulasikan secara coupled problem interaksi antara fase fluida superkritik CO₂ (SC-CO₂) dengan matriks padat biomassa cannabis yang dikemas dalam vessel silinder. Pendekatan ini menjawab gap riset utama: **mengapa hasil ekstraksi laboratorium sulit direplikasi pada skala besar**, padahal parameter nominal (tekanan, suhu, laju alir massa) terlihat identik.

Konteks ekonominya pun tidak dapat diabaikan. Harga pasar ekstrak cannabinoid murni (THC/CBD distillate) berada pada rentang USD 2.500–15.000/kg tergantung kemurnian dan profil cannabinoid, sehingga **setiap deviasi yield 1% pada batch 100 kg biomassa** bernilai ratusan ribu dolar AS per siklus produksi. Lebih jauh, karena proses ini bersifat **batch semi-kontinyu** dengan siklus *pressurization → extraction (static + dynamic) → depressurization* yang masing-masing memiliki dinamika termal berbeda**, model yang mengabaikan *transient heat transfer* akan低估 (underestimate) waktu yang dibutuhkan untuk mencapai kondisi tunak. Toledo dan del Valle (2023) dalam *The Journal of Supercritical Fluids* secara eksplisit menunjukkan bahwa asumsi **isotermal selama tahap ekstraksi** adalah penyederhanaan yang tidak valid untuk vessel dengan diameter >50 mm karena *thermal lag* antara dinding jacket dan pusat bed dapat mencapai 5–15 K selama 30–60 menit pertama. Sinergi antara kedua paper ini—yaitu **mekanika fluida multi-fasa aksisimetrik (Obchoei & Limtrakarn) dan perpindahan panas transien (Toledo & del Valle)**—menjadi kerangka kerja rekayasa yang integral untuk desain dan optimasi extractor SC-CO₂ generasi baru.

Urgensi teknis lainnya adalah **kontrol kualitas cannabinoid profile**. Senyawa target seperti tetrahydrocannabinol (THC), cannabidiol (CBD), cannabinol (CBN), dan terpena volatil (myrcene, limonene, β-caryophyllene) memiliki **thermolability dan pressure-dependent solubility** yang berbeda. Profil aksisimetrik dari variabel-variabel proses menjadi penentu apakah suatu vessel mengalami **channeling** (jalur prefensi alir), **dead zone** (zona tanpa kontak fluida-padat), atau **hot spot** lokal yang mendegradasi cannabinoid. Dengan demikian, pengembangan model termofluida bukan sekadar persoalan akademis Computational Fluid Dynamics (CFD), melainkan **instrumen keputusan rekayasa** yang menentukan *capital expenditure* (CAPEX) optimal dan *operating expenditure* (OPEX) rendah untuk fasilitas produksi baru.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Asumsi dan Domain Aksisimetrik

Model yang dikembangkan oleh Obchoei dan Limtrakarn (2024) mengasumsikan geometri vessel silinder vertikal dengan panjang $L$ dan radius dalam $R$, di mana **fluida SC-CO₂ dialirkan dari bagian bawah** (*bottom-up*) menembus packed-bed biomassa cannabis. Karena geometri dan kondisi batas memiliki simetri rotasi terhadap sumbu $z$, masalah 3-D direduksi menjadi 2-D dalam koordinat silinder $(r, z)$ dengan variabel dependen yang independen terhadap sudut azimuthal $\theta$. Asumsi kunci mencakup: (i) **aliran laminar hingga transisi awal** karena bilangan Reynolds partikel rendah, (ii) **properti termofluida CO₂ dievaluasi melalui persamaan keadaan**, dan (iii) **packed-bed diperlakukan sebagai medium porous isotropik** dengan permeabilitas $\kappa$ dan porositas $\varepsilon$.

### 2.2 Persamaan Kontinuitas dan Momentum (Navier-Stokes Aksisimetrik)

Persamaan konservasi massa dalam koordinat silinder untuk kasus tunak (*steady-state*) ditulis:

$$\frac{1}{r}\frac{\partial (r \rho u_r)}{\partial r} + \frac{\partial (\rho u_z)}{\partial z} = 0 \quad (1)$$

di mana $u_r$ dan $u_z$ adalah komponen kecepatan radial dan aksial, $\rho$ adalah densitas SC-CO₂ yang sangat bergantung pada tekanan dan suhu. Persamaan momentum radial $(r)$:

$$\rho\left(u_r \frac{\partial u_r}{\partial r} + u_z \frac{\partial u_r}{\partial z}\right) = -\frac{\partial p}{\partial r} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_r}{\partial r}\right) - \frac{u_r}{r^2} + \frac{\partial^2 u_r}{\partial z^2}\right] - \frac{\mu}{\kappa}u_r \quad (2)$$

Persamaan momentum aksial $(z)$, dengan kontribusi gravitasi:

$$\rho\left(u_r \frac{\partial u_z}{\partial r} + u_z \frac{\partial u_z}{\partial z}\right) = -\frac{\partial p}{\partial z} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial u_z}{\partial r}\right) + \frac{\partial^2 u_z}{\partial z^2}\right] - \frac{\mu}{\kappa}u_z + \rho g \quad (3)$$

Suku $-\dfrac{\mu}{\kappa}u_i$ merupakan **resistansi Darcy** yang merepresentasikan gesekan viskos terhadap matriks padat biomassa, dengan $\kappa$ merupakan permeabilitas intrinsik packed-bed (m²). Hubungan permeabilitas dengan porositas dan diameter partikel efektif $d_p$ diberikan oleh **persamaan Kozeny-Carman**:

$$\kappa = \frac{\varepsilon^3 \, d_p^2}{180 \, (1-\varepsilon)^2} \quad (4)$$

### 2.3 Persamaan Energi dan Persamaan Keadaan

Persamaan energi coupled dengan momentum untuk menangkap profil suhu lokal:

$$\rho c_p \left(u_r \frac{\partial T}{\partial r} + u_z \frac{\partial T}{\partial z}\right) = k_{eff}\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial T}{\partial r}\right) + \frac{\partial^2 T}{\partial z^2}\right] + \Phi_v + Q_{diss} \quad (5)$$

di mana $k_{eff}$ adalah konduktivitas termal efektif packed-bed (mempertimbangkan kontribusi konduksi fluida dan konduksi antar-partikel), $\Phi_v$ adalah dissipation function viskos, dan $Q_{diss}$ adalah sumber panas dari ekspansi Joule-Thomson selama proses *pressurization*—fenomena yang secara eksplisit dimodelkan oleh Toledo dan del Valle (2023). Konstanta $c_p$ sangat sensitif di dekat titik kritis CO₂ ($T_c = 304{,}13$ K, $P_c = 7{,}377$ MPa). Densitas dan viskositas fluida superkritik dievaluasi melalui **persamaan keadaan Peng-Robinson**:

$$P = \frac{R_g T}{V_m - b} - \frac{a \alpha(T)}{V_m(V_m + b) + b(V_m - b)} \quad (6)$$

dengan parameter $a = 0{,}45724 \dfrac{R_g^2 T_c^2}{P_c}$, $b = 0{,}07780 \dfrac{R_g T_c}{P_c}$, dan fungsi alpha $\alpha(T) = \left[1 + \kappa_0\left(1-\sqrt{T/T_c}\right)\right]^2$ dengan $\kappa_0 = 0{,}37464 + 1{,}54226\omega - 0{,}26992\omega^2$ untuk faktor asentrisitas $\omega = 0{,}225$ pada CO₂.

### 2.4 Model Transpor Spesies dan Kelarutan Cannabinoid

Persamaan konservasi spesies untuk fraksi massa cannabinoid $Y_s$ dalam fase fluida:

$$u_r \frac{\partial Y_s}{\partial r} + u_z \frac{\partial Y_s}{\partial z} = D_{eff}\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial Y_s}{\partial r}\right) + \frac{\partial^2 Y_s}{\partial z^2}\right] + R_s \quad (7)$$

di mana $R_s$ adalah laju pelepasan cannabinoid dari matriks padat ke fase fluida, dan $D_{eff}$ adalah koefisien difusi efektif (orde $10^{-9}$–$10^{-8}$ m²/s). Kelarutan SC-CO₂ terhadap cannabinoid dimodelkan dengan **korelasi Chrastil**:

$$c_s = \rho^n \exp\left(\frac{a}{T} + b\right) \quad (8)$$

dengan parameter empiris $a, b, n$ yang nilainya berbeda untuk THC, CBD, dan CBN; misalnya untuk THC $n \approx 5{,}5$, $a \approx -5800$ K, $b \approx -