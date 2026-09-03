# 2826 — Pemodelan Aliran Aksisimetrik dan Perpindahan Panas pada Ekstraksi Minyak Kanabis dengan Fluida Superkritik CO₂

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Axisymmetric flow model of cannabis oil extraction of supercritical fluid extraction CO₂ process
**Sitasi Utama:** Thanachai Obchoei, Wiroj Limtrakarn (2024). *International Journal of Thermofluids*. DOI: [https://doi.org/10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682)
**Sitasi Pendukung:** Felipe R. Toledo, José M. del Valle (2023). *The Journal of Supercritical Fluids*. DOI: [https://doi.org/10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046)

---

## 1. Pendahuluan dan Konteks Industri

Industri ekstraksi kanabis global mengalami transformasi struktural yang signifikan sejak dekade terakhir, didorong oleh legalisasi medicinal cannabis di lebih dari 40 negara dan decriminalization di berbagai yurisdiksi. Nilai pasar global ekstrak kanabis diproyeksikan mencapai USD 12–15 miliar pada 2030, dengan yield kualitas farmasi (THC ≥ 80%, CBD ≥ 95%) menjadi prasyarat mutlak untuk menembus pasar regulated. Dalam konteks ini, **Supercritical Fluid Extraction (SFE) dengan CO₂** muncul sebagai *green technology* dominan karena tiga alasan fundamental: (1) CO₂ bersifat *Generally Recognized as Safe* (GRAS) oleh FDA; (2) sifat *tunable*-nya melalui manipulasi tekanan dan temperatur memungkinkan selectivity tinggi terhadap cannabinoid target; (3) tidak meninggalkan residu pelarut seperti pada ekstraksi etanol atau hidrokarbon (butana, propana).

Namun demikian, desain dan scale-up reaktor SFE untuk kanabis menghadapi tantangan termodinamika dan fluidodinamika yang kompleksitasnya tinggi. Campuran multi-komponen (THC, CBD, terpen, klorofil, wax) di dalam matriks biomassa padat menciptakan fenomena kopel antara **aliran fluida superkritik**, **perpindahan panas**, dan **kinetika perpindahan massa**. Obchoei dan Limtrakarn (2024) dalam *International Journal of Thermofluids* merespons tantangan ini dengan mengajukan model aliran aksisimetrik 2D yang meniru geometri silinder extractor, sehingga domain komputasi berkurang dari 3D menjadi 2D tanpa kehilangan esensi fisika. DOI: [10.1016/j.ijft.2024.100682](https://doi.org/10.1016/j.ijft.2024.100682). Studi ini melengkapi laporan Toledo dan del Valle (2023) di *The Journal of Supercritical Fluids*, yang secara spesifik memvalidasi model perpindahan panas untuk tiga tahap operasional — *pressurization*, *extraction*, dan *depressurization* — dengan DOI: [10.1016/j.supflu.2023.106046](https://doi.org/10.1016/j.supflu.2023.106046). Urgensi industrialisasi pengetahuan ini sangat tinggi karena pendekatan *trial-and-error* pada extractor komersial (volume 10–2000 L) memerlukan biaya eksperimen USD 50.000–500.000 per siklus uji, sehingga model prediktif menjadi *decision-support system* yang strategis bagi *process engineer*.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Governing untuk Aliran Aksisimetrik

Geometri extractor SFE berupa silinder vertikal berdiameter $D_e$ dan tinggi $H_e$. Dengan asumsi simetri rotasional terhadap sumbu $z$, domain tiga dimensi $(x, y, z)$ direduksi menjadi dua dimensi $(r, z)$, di mana $r$ adalah koordinat radial dan $z$ adalah aksial. Persamaan kontinuitas untuk aliran *weakly compressible* adalah:

$$\frac{1}{r}\frac{\partial (r \rho v_r)}{\partial r} + \frac{\partial (\rho v_z)}{\partial z} = 0 \tag{1}$$

Persamaan momentum arah radial:

$$\rho\left(\frac{\partial v_r}{\partial t} + v_r\frac{\partial v_r}{\partial r} + v_z\frac{\partial v_r}{\partial z}\right) = -\frac{\partial p}{\partial r} + \mu\left[\frac{\partial}{\partial r}\left(\frac{1}{r}\frac{\partial (r v_r)}{\partial r}\right) + \frac{\partial^2 v_r}{\partial z^2}\right] + \rho \frac{v_z^2}{r} \tag{2}$$

Persamaan momentum arah aksial:

$$\rho\left(\frac{\partial v_z}{\partial t} + v_r\frac{\partial v_z}{\partial r} + v_z\frac{\partial v_z}{\partial z}\right) = -\frac{\partial p}{\partial z} + \mu\left[\frac{1}{r}\frac{\partial}{\partial r}\left(r\frac{\partial v_z}{\partial r}\right) + \frac{\partial^2 v_z}{\partial z^2}\right] - \rho g + S_z \tag{3}$$

dengan $v_r$, $v_z$ adalah komponen kecepatan, $\rho$ densitas fluida, $\mu$ viskositas dinamis, $p$ tekanan, dan $S_z$ suku sumber akibat gesekan dengan matriks biomassa yang direpresentasikan melalui persamaan Ergun:

$$S_z = -150\frac{\mu (1-\varepsilon)^2}{\varepsilon^3 d_p^2} v_z - 1.75\frac{\rho (1-\varepsilon)}{\varepsilon^3 d_p} |v_z| v_z \tag{4}$$

di mana $\varepsilon$ adalah porositas bed biomassa dan $d_p$ diameter partikel rata-rata.

### 2.2 Persamaan Energi dan Perpindahan Panas

Berdasarkan kerangka Toledo dan del Valle (2023), persamaan energi untuk fase fluida superkritik di dalam extractor:

$$\rho c_p\left(\frac{\partial T}{\partial t} + v_r\frac{\partial T}{\partial r} + v_z\frac{\partial T}{\partial z}\right) = \frac{1}{r}\frac{\partial}{\partial r}\left(r k_{eff}\frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k_{eff}\frac{\partial T}{\partial z}\right) + h_v(T_w - T) \tag{5}$$

dengan $c_p$ kapasitas panas, $k_{eff}$ konduktivitas efektif, $h_v$ koefisien perpindahan panas antar fasa, dan $T_w$ temperatur dinding. Bilangan Nusselt lokal dihitung melalui korelasi untuk packed bed:

$$Nu_{local} = 2 + 1.8 Re_p^{0.5} Pr^{0.33} \tag{6}$$

### 2.3 Persamaan Keadaan (Equation of State)

Sifat termodinamika CO₂ superkritik ($T_c = 304{,}13$ K, $P_c = 73{,}8$ bar) dihitung menggunakan persamaan keadaan Peng–Robinson yang direkomendasikan Obchoei dan Limtrakarn (2024):

$$P = \frac{RT}{V_m - b} - \frac{a\alpha(T)}{V_m(V_m+b) + V_m(V_m-b)} \tag{7}$$

dengan $a = 0{,}45724 R^2 T_c^2 / P_c$, $b = 0{,}07780 R T_c / P_c$, dan $\alpha(T) = [1 + m(1-\sqrt{T/T_c})]^2$ untuk parameter $m = 0{,}37464 + 1{,}54226\omega - 0{,}26992\omega^2$, di mana $\omega = 0{,}225$ adalah faktor asimetri CO₂.

### 2.4 Kinetika Ekstraksi

Laju perpindahan massa cannabinoid dari matriks padat ke fluida superkritik dimodelkan sebagai *shrinking core* atau model lintasan ganda (two-site model):

$$Y(t) = Y_\infty\left[\phi(1-e^{-k_f t}) + (1-\phi)(1-e^{-k_s t})\right] \tag{8}$$

dengan $Y_\infty$ yield maksimum, $\phi$ fraksi cannabinoid yang mudah terekstraksi, serta $k_f$ dan $k_s$ konstanta laju fase cepat dan lambat.

## 3. Metodologi Rekayasa & Standar