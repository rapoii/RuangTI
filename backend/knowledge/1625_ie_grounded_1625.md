# 1625 — Model Numerik Transient Unit Penyimpanan Energi Termal Panas Laten ~222 °C untuk Integrasi dengan High-Temperature Heat Pump

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222 °C for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Panas proses industri (industrial process heat) merupakan kontributor dominan terhadap konsumsi energi final global, mencakup lebih dari 50% kebutuhan termal manufaktur, kimia, makanan-minuman, serta pulp & kertas, dengan rentang suhu operasi yang lebar mulai dari 80 °C pada proses pembersihan hingga di atas 400 °C pada pirolisis dan reformasi katalitik. Desakan dekarbonisasi yang dipercepat oleh *European Green Deal*, *U.S. Inflation Reduction Act*, dan target *Net Zero Emissions* Indonesia 2060迫使 pelaku industri menggantikan boiler berbasis gas alam dengan teknologi elektrifikasi termal beremisi rendah. Dalam konteks ini, *high-temperature heat pump* (HTHP) muncul sebagai teknologi unggulan karena mampu menaikkan品位 termal listrik menjadi panas utilisasi dengan *Coefficient of Performance* (COP) tipikal 3,0–5,0, seperti ditegaskan oleh Xu dan Wang dalam *prospects of heat pump for thermal energy decarbonization* ([Xu & Wang, 2024](https://doi.org/10.59717/j.xinn-energy.2024.100032)).

Akan tetapi, karakteristik operasional HTHP — laju kenaikan suhu yang relatif lambat, defisit daya saat *start-up*, serta ketidakstabilan saat *part-load* — menciptakan *mismatch* temporal dengan profil demand pabrik yang fluktuatif. Solusi yang diajukan oleh Toloza, Payá, dan Barceló dalam *Transient numerical model of a latent heat thermal energy storage unit at around 222 °C* ([Toloza et al., 2026](https://doi.org/10.21001/eurotherm2026.086)) adalah integrasi *Latent Heat Thermal Energy Storage* (LHTES) berbasis *phase change material* (PCM) sebagai *buffer termal* antara HTHP dan beban proses. Temperatur 222 °C dipilih karena merupakan *sweet-spot* untuk aplikasi makanan (sterilisasi *in-container*), tekstil (*dyeing*), dan pretreatment kimia, di mana boiler konvensional mendominasi pasar.

Secara ekonomis, penyimpanan panas laten menawarkan densitas energi volumetric 3–5× lebih tinggi dibanding *sensible heat storage* (SHS) berbasis air atau pasir, sehingga *footprint* instalasi berkurang signifikan — krusial untuk *retrofit* pabrik existing. Namun, seperti disorot oleh Toloza et al. (2026), konduktivitas termal PCM pada umumnya rendah (0,2–1,0 W/m·K untuk garam nitrat eutektik), sehingga optimalisasi geometri *heat exchanger*, enkapsulasi, atau penggunaan *metal wool* menjadi prasyarat performa. Konfigurasi *shell-and-tube* diajukan karena kekompakan, robustisitas struktural, dan kapasitas *thermal enhancement* yang tinggi, menjadikannya kandidat ideal untuk integrasi industri.

## 2. Landasan Teori & Formulasi Matematis

Model transient LHTES Toloza et al. (2026) dibangun dalam bahasa *Modelica* dengan menyelesaikan persamaan konservasi energi 2D axisimetrik pada domain PCM, dikopling dengan *heat transfer fluid* (HTF) pada sisi tube. Formulasi *enthalpy method* dipilih untuk menghindari tracking eksplisit terhadap interface solid-liquid, sehingga kontinum energi ditulis:

$$\rho_{PCM} \frac{\partial h}{\partial t} = \frac{1}{r} \frac{\partial}{\partial r}\left( k_{eff}(r,T) \, r \frac{\partial T}{\partial r} \right) + \frac{\partial}{\partial z}\left( k_{eff}(r,T) \, \frac{\partial T}{\partial z} \right) \tag{1}$$

di mana $\rho_{PCM}$ adalah densitas, $h$ entalpi spesifik, dan $k_{eff}$ konduktivitas efektif yang memperhitungkan *metal wool* atau *fins* radial:

$$k_{eff} = \phi \cdot k_{PCM} + (1-\phi) \cdot k_{metal} \tag{2}$$

dengan $\phi$ fraksi volume PCM. Relasi entalpi–temperatur mengikuti model *apparent heat capacity*:

$$h(T) = \int_{T_{ref}}^{T} c_{p,PCM}(T')\, dT' + f(T) \cdot L \tag{3}$$

dengan $L$ panas laten dan $f(T)$ fraksi cair yang dimodelkan sebagai fungsi *smoothed Heaviside*:

$$f(T) = \frac{1}{2}\left(1 + \frac{\tanh\left(\frac{T - T_m}{\Delta T/2}\right)}{\phantom{x}}\right) \tag{4}$$

di mana $T_m$ adalah temperatur melting dan $\Delta T$ lebar interval transisi (tipikal 2–5 K untuk garam nitrat).

Untuk sisi HTF pada tube dalam, konservasi energi 1D adveksi-difusi radial:

$$\rho_{HTF} c_{p,HTF} \frac{\partial T_f}{\partial t} + \rho_{HTF} c_{p,HTF} u_z \frac{\partial T_f}{\partial z} = \frac{4 U_{i}}{D_i (D_o^2 - D_i^2)} (T_{wall} - T_f) \tag{5}$$

dengan $u_z$ kecepatan aksial HTF, $U_i$ koefisien transfer panas keseluruhan berbasis diameter dalam tube, $D_i$ dan $D_o$ diameter dalam-luar tube.

Kondisi batas pada dinding tube mengkopling kedua domain melalui resistansi konveksi HTF, konduksi dinding logam, dan konduksi PCM:

$$\frac{1}{U_i} = \frac{1}{h_{HTF}} + \frac{D_i \ln(D_o/D_i)}{2 k_{wall}} + \frac{D_i}{D_o \, h_{PCM,surf}} \tag{6}$$

Performa penyimpanan dievaluasi melalui *state of charge* (SOC) termal:

$$SOC(t) = \frac{\int_V \rho_{PCM} \left[ h(T(r,z,t)) - h(T_{min}) \right] dV}{\int_V \rho_{PCM} \left[ h(T_{max}) - h(T_{min}) \right] dV} \tag{7}$$

Efektivitas unit terhadap HTF mengikuti pendekatan ε-NTU:

$$\varepsilon = 1 - \exp\left(-NTU \cdot \frac{1 - C_r}{1 - C_r \cdot \exp[-(1-C_r) \cdot NTU]}\right) \tag{8}$$

dengan $C_r = \min(C_{PCM}, C_{HTF})/\max(C_{PCM}, C_{HTF})$ dan $NTU = U A / (C_{min})$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi unit LHTES integrasi-HTHP mengikuti SOP 7-tahap yang diadaptasi dari Toloza et al. (2026) dan best-practice *ASHRAE Handbook—HVAC Applications* Chapter 51 (*Thermal Storage*):

1. **Karakterisasi demand & profil operasi** — Audit konsumsi termal pabrik dengan resolusi