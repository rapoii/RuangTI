# 2569 — Pemodelan Numerik Transient Unit Penyimpanan Energi Termal Panas Laten (LHTES) pada Suhu ~222°C untuk Integrasi dengan High-Temperature Heat Pump (HTHP)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri merupakan penyumbang utama konsumsi energi termal tingkat menengah–tinggi di Uni Eropa, dimana sekitar 30% dari total kebutuhan energi final digunakan untuk memenuhi demand proses panas pada rentang suhu 150–400°C (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Dekarbonisasi panas proses industri menjadi agenda strategis pasca-persetujuan Paris Agreement, namun substitifikasi boiler berbasis gas alam dengan electric High-Temperature Heat Pump (HTHP) menghadapi tantangan krusial berupa *temporal mismatch* antara availability listrik terbarukan (intermittent wind/solar) dan demand proses yang fluktuatif. Tanpa buffer termal, kapasitas HTHP tereduksi secara signifikan ketika operasi *ramping* terjadi pada grid yang tidak stabil.

Toloza, Payá, dan Barceló (2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) menyatakan bahwa integrasi **Latent Heat Thermal Energy Storage (LHTES)** berbasis *phase change material* (PCM) merupakan added value strategis untuk aplikasi *industrial process heat* ketika dikombinasikan dengan HTHP. Pada titik operasi 222°C, PCM eutectic nitrat memungkinkan compactness energi ~150–250 kJ/kg, jauh melampaui *sensible* water storage. Namun, konduktivitas termal rendah PCM (~0,5 W/m·K) menjadi bottleneck yang menghambat *charging/discharging rate* dan memerlukan optimasi geometri heat exchanger.

Kontribusi utama paper Toloza et al. (2026) adalah pengembangan model transient 1D/2D dalam bahasa Modelica untuk unit LHTES konfigurasi *shell-and-tube* vertikal, yang relevan karena tiga atribut: (i) compactness struktural tinggi, (ii) robustness mekanik untuk operasi siklik, dan (iii) kapasitas *thermal enhancement* melalui internal fins atau metal foam. Aspek ini sangat relevan dalam konteks industrial engineering karena keputusan desain storage unit secara langsung memengaruhi CAPEX/OPEX sistem HTHP-plus-storage, parameter desain yang tidak dapat ditentukan tanpa model transient valid.

## 2. Landasan Teori & Formulasi Matematis

Model transient LHTES Toloza et al. (2026) dibangun di atas persamaan konservasi energi dengan metode **enthalpy formulation** untuk menangkap moving solid-liquid interface. Persamaan governing pada domain PCM:

$$\rho_{PCM} \frac{\partial h}{\partial t} = \nabla \cdot (k_{PCM} \nabla T) \tag{1}$$

dengan enthalpy total didefinisikan sebagai:

$$h(T) = \int_{T_{ref}}^{T} c_{p,PCM}(T')\,dT' + f(T) \cdot L \tag{2}$$

di mana $f(T)$ adalah *liquid fraction* yang dimodelkan dengan fungsi smooth Heaviside:

$$f(T) = \frac{1}{2}\left[1 + \frac{T - T_m}{\Delta T_{mush}}\right] \quad \text{untuk } |T - T_m| \leq \Delta T_{mush} \tag{3}$$

dengan $T_m = 222°C$ sebagai titik lebur eutectic, dan $\Delta T_{mush}$ adalah lebar zona *mushy* (umumnya 2–5 K).

Untuk *heat transfer fluid* (HTF) yang mengalir dalam tube, persamaan energi 1D unsteady dengan konveksi paksa:

$$\rho_{HTF} c_{p,HTF} \frac{\partial T_{HTF}}{\partial t} + \rho_{HTF} c_{p,HTF} u \frac{\partial T_{HTF}}{\partial x} = \frac{4 h_i}{D_i}(T_{PCM,wall} - T_{HTF}) \tag{4}$$

di mana $u$ adalah kecepatan HTF, $D_i$ diameter internal tube, dan $h_i$ koefisien konveksi internal yang dihitung dari korelasi Gnielinski:

$$Nu = \frac{h_i D_i}{k_{HTF}} = \frac{(f/8)(Re - 1000)Pr}{1 + 12{,}7\sqrt{f/8}(Pr^{2/3} - 1)} \tag{5}$$

dengan faktor friksi Darcy: $f = (0{,}790 \ln Re - 1{,}64)^{-2}$.

Kopling termal HTF-PCM pada dinding tube menggunakan **continuity of heat flux**:

$$-k_{PCM} \frac{\partial T}{\partial r}\bigg|_{r=R_i} = h_i (T_{HTF} - T_{wall}) \tag{6}$$

Parameter nondimensional kritis yang mencirikan dinamika sistem didefinisikan sebagai berikut:

$$\text{Ste} = \frac{c_{p,PCM}(T_m - T_{HTF,in})}{L}, \quad \text{Fo} = \frac{\alpha_{PCM} t}{R_o^2}, \quad \text{Bi} = \frac{h_i R_i}{k_{PCM}} \tag{7}$$

di mana Ste adalah *Stefan number*, Fo *Fourier number*, dan Bi *Biot number*. Untuk PCM eutectic nitrat, $Ste \approx 0{,}3–0{,}6$ menandakan bahwa sensible heating/cooling dalam fase signifikan dibanding latent term.

Model Toloza et al. (2026) diimplementasikan dalam bahasa **Modelica** dengan *discretization* finite-volume 1D radial pada PCM dan 1D aksial pada HTF, diselesaikan secara coupled melalui solver DASSL dengan toleransi relatif $10^{-6}$. Validasi dilakukan terhadap benchmark numerik *Stefan problem* klasik dan data eksperimental.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri unit LHTES-HTHP mengikuti SOP berbasis *model-based systems engineering* (MBSE) yang diuraikan oleh Toloza et al. (2026) dan diperkuat dengan framework Xu & Wang (2024):

**Tahap 1 — Karakterisasi Demand & PCM Selection.** Analisis profil termal proses industri: identifikasi rentang suhu (220–230°C untuk *case study*), durasi discharge minimum (4–8 jam), dan kapasitas energi target (mis. 500 kWh_th). Seleksi PCM berdasarkan *figure of merit*:

$$FOM = \frac{\rho_{PCM} \cdot L}{\rho_{PCM} \cdot c_{p,PCM} \cdot \Delta T_{cycle}} \tag{8}$$

Nilai FOM > 4 mengindikasikan PCM layak secara termodinamik.

**Tahap 2 — Desain Geometri Shell-and-Tube.** Penentuan diameter shell $D_s$, jumlah tube $N_t$, panjang $L_t$, dan pitch arrangement (triangular atau square). Batasan: $\text{Re}_{HTF} > 10^4$ untuk turbulen, $Bi > 5$ untuk pendekatan lumped-capacity yang valid.

**Tahap 3 — Building & Validasi Model.** Konstruksi model Modelica sesuai persamaan (1)–(6), validasi terhadap data eksperimental unit pilot pada kondisi *charging* dan *discharging* dengan $\pm 5\%$ error tolerable.

**Tahap 4 — Integrasi dengan HTHP.** Model storage digabung dengan model kompresor HTHP (siklus trans-Critical CO₂ atau refrigeran HFO/HFC) menggunakan *energy balance* pada *hot-side heat exchanger*:

$$\dot{Q}_{HTHP} = \dot{Q}_{storage,charging} + \dot{Q}_{process} \tag{9}$$

**Tahap 5 — Optimasi & Dispatch Strategy.** Penjadwalan operasi *charging* saat listrik murah/oversupply renewable, *discharging* saat peak demand proses.

Diagram alir logika proses engineering ini sesuai dengan alur MBSE pada Toloza et al. (2026, §3) yang menyatakan perlunya iterasi antara model numerik dan parameter desain fisik.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Spesifikasi Unit Studi Kasus (terinspirasi Toloza et al., 2026):**

| Parameter | Nilai | Satuan |
|---|---|---|
| PCM | Eutectic nitrate (NaNO₃-KNO₃) | – |
| $T_m$ | 222 | °C |
| $\rho_{PCM}$ | 1890 | kg/m³ |
| $L$ (latent heat) | 110 | kJ/kg |
| $c_{p,PCM}$ | 1550 | J/kg·K |
| $k_{PCM}$ | 0,55 | W/m·K |
| $D_i$ (tube ID) | 0,020 | m |
| $D_o$ (tube OD) | 0,025 | m |
| $D_s$ (shell ID) | 0,30 | m |
| $L_t$ (tube length) | 2,0 | m |
| $N_t$ (jumlah tube) | 30 | – |
| HTF | Synthetic oil (Therminol 66) | – |
| $T_{HTF,in}$ (charging) | 240 | °C |
| $\dot{m}_{HTF}$ | 0,40 | kg/s |

**Langkah 1 — Volume & Kapasitas PCM:**

Volume shell: $V_s = \pi(D_s/2)^2 L_t = \pi(0{,}15)^2 \cdot 2{,}0 = 0{,}1414 \text{ m}^3$

Volume tube (HTF): $V_t = N_t \pi (D_i/2)^2 L_t = 30 \cdot \pi \cdot (0{,}01)^2 \cdot 2{,}0 = 0{,}01885 \text{ m}^3$

Volume PCM (shell - tubes): $V_{PCM} = 0{,}1414 - 0{,}01885 = 0{,}1225 \text{ m}^3$

Massa PCM: $m_{PCM} = \rho_{PCM} \cdot V_{PCM} = 1890 \cdot 0{,}1225 = 231{,}5 \text{ kg}$

Kapasitas energi (latent only, 100% melt): 

$$E = m_{PCM} \cdot L = 231{,}5 \cdot 110 = 25.470 \text{ kJ} \approx 7{,}08 \text{ kWh}_{th}$$

**Langkah 2 — Perhitungan Koefisien Konveksi Internal:**

Asumsi HTF pada $\bar{T}_{HTF} = 235°C$: $\rho_{HTF} \approx 765$ kg/m³, $k_{HTF} \approx 0{,}106$ W/m·K, $c_{p,HTF} \approx 2150$ J/kg·K, $\mu \approx 1{,}8 \times 10^{-4}$ Pa·s.

Kecepatan HTF dalam tube: $u = \dot{m}/(\rho A) = 0{,}40/(765 \cdot \pi(0{,}01)^2) = 1{,}665$ m/s

Re = $\rho u D_i/\mu = 765 \cdot 1{,}665 \cdot 0{,}020 / (1{,}8 \times 10^{-4}) = 141.500$ (turbulen)

Pr = $c_p \mu / k = 2150 \cdot 1{,}8 \times 10^{-4} / 0{,}106 = 3{,}65$

Gnielinski: $f = (0{,}790 \ln 141.500 - 1{,}64)^{-2} = (0{,}790 \cdot 11{,}86 - 1{,}64)^{-2} = (7{,}73)^{-2} = 0{,}01674$

Nu = $\frac{0{,}01674/8 \cdot (141.500 - 1000) \cdot 3{,}65}{1 + 12{,}7\sqrt{0{,}01674/8} \cdot (3{,}65^{2/3} - 1)} = \frac{0{,}00209 \cdot 140.500 \cdot 3{,}65}{1 + 12{,}7 \cdot 0{,}0457 \cdot 2{,}46} = \frac{1071}{2{,}43} = 441$

$$h_i = Nu \cdot k_{HTF}/D_i = 441 \cdot 0{,}106/0{,}020 = 2.337 \text{ W/m}^2\text{K}$$