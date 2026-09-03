# 1593 — Pemodelan Numerik Transien Unit Penyimpanan Energi Termal Panas Laten pada Suhu ~222°C untuk Integrasi dengan High-Temperature Heat Pump

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *Prospects of heat pump for thermal energy decarbonization*. *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri bertanggung jawab atas hampir 37% emisi CO₂ global, di mana lebih dari separuh kebutuhan energinya berupa *process heat* pada rentang suhu 150–400°C (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Decarbonisasi *process heat* tidak cukup dipenuhi hanya dengan elektrifikasi boiler karena sebagian besar proses membutuhkan sumber panas *firm* yang stabil, bukan fluktuatif. Oleh karena itu, kombinasi **High-Temperature Heat Pump (HTHP)** dengan **Latent Heat Thermal Energy Storage (LHTES)** menjadi arsitektur hybrid yang paling prospektif, di mana HTHP menyediakan sumber panas *renewable-electricity-driven* dan LHTES menjadi buffer termal untuk menutup gap antara kapasitas produksi dan permintaan industri yang bersifat *time-shifted* maupun *load-shifting* (Toloza, Payá & Barceló, 2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)).

Permasalahan kritis yang diangkat Toloza dkk. (2026) adalah rendahnya konduktivitas termal *phase change material* (PCM) mayoritas, yang bernilai sekitar 0,5–1,5 W/(m·K) untuk garam nitrat eutektik, jauh di bawah logam (~200 W/(m·K)). Konduktivitas rendah ini menghambat laju *charge/discharge* dan menurunkan *power density* sistem. Untuk menjawabnya, penulis memilih konfigurasi **shell-and-tube vertikal** karena tiga keunggulan struktural: (1) kekompakan tinggi (*surface area per unit volume* ≥ 30 m²/m³), (2) ketahanan mekanik terhadap siklus termal, dan (3) kemampuan integrasi *thermal enhancement device* seperti *metal foams*, *fins*, atau *metal wool*. Studi ini beroperasi di sekitar 222°C — rentang suhu khas aplikasi *food processing*, *dairy pasteurization*, *textile finishing*, dan *low-pressure steam generation* — yang merupakan sweet-spot HTHP berbasis siklus *transcritical CO₂* atau *butane* dengan COP realistis 2,5–3,5.

Urgensi ekonominya jelas: dengan harga listrik industri Eropa rata-rata €0,12–0,18/kWh pada 2024, kombinasi HTHP+LHTES mampu menggantikan *natural gas boiler* seharga €0,04–0,06/kWh tetapi dengan emisiensi 3× lebih tinggi dan emisi接近 nol, sehingga *payback period* turun ke 4–6 tahun (Xu & Wang, 2024). Lebih lanjut, storage unit memungkinkan HTHP beroperasi pada *plateau* kapasitas optimalnya (≈85% rated power), meningkatkan COP rata-rata tahunan hingga 12–18%.

## 2. Landasan Teori & Formulasi Matematis

Model transien LHTES Toloza dkk. (2026) dikembangkan dalam bahasa **Modelica** dengan pendekatan *enthalpy-based* untuk menangani *phase change* secara kontinyu, menghindari diskontinuitas pada *mushy zone*. Persamaan konservasi energi 2D-tersimetri (*r-z*) untuk PCM dalam geometri silindris:

$$\rho_{PCM} \frac{\partial h(T)}{\partial t} = \frac{1}{r} \frac{\partial}{\partial r}\left( r \, k_{PCM} \frac{\partial T}{\partial r} \right) + \frac{\partial}{\partial z}\left( k_{PCM} \frac{\partial T}{\partial z} \right) \tag{1}$$

dengan entalpi spesifik sebagai fungsi temperatur:

$$h(T) = \int_{T_{ref}}^{T} c_{p,PCM}(T)\, dT + L \cdot f_s(T) \tag{2}$$

di mana $f_s(T)$ adalah *liquid fraction* yang dimodelkan melalui fungsi *smooth Heaviside* dengan lebar *mushy zone* ΔT = 5 K:

$$f_s(T) = \frac{1}{2}\left[1 + \frac{\tanh\left(\frac{T - T_m}{\Delta T/2}\right)}{\tanh(1)}\right] \tag{3}$$

Untuk sisi *heat transfer fluid* (HTF) di dalam tube, governing equation 1D *forced convection*:

$$\rho_{HTF} \, c_{p,HTF} \, \frac{\partial T_f}{\partial t} + \dot{m} \, c_{p,HTF} \, \frac{\partial T_f}{\partial z} = h_{HTC} \cdot \frac{4}{D_i}\left( T_{wall} - T_f \right) \tag{4}$$

Persamaan kopling termal pada dinding tube mengikuti konduksi silindris *steady* (bi-arah):

$$T_{wall}(r) = T_{s,i} + \frac{\dot{Q}''}{k_{wall}} \cdot r \ln\left(\frac{r_{o}}{r_i}\right) \tag{5}$$

Untuk evaluasi performa global storage, digunakan metode **ε-NTU** pada exchanger:

$$\varepsilon = 1 - \exp\left[-\text{NTU}\,(1 - C_r)\right], \quad C_r = \frac{C_{min}}{C_{max}}, \quad \text{NTU} = \frac{UA}{C_{min}} \tag{6}$$

dengan kapasitas termal $C = \dot{m} \, c_p$. Kapasitas penyimpanan energi total:

$$Q_{store} = m_{PCM} \left[ \int_{T_i}^{T_m} c_{p,s}\, dT + L + \int_{T_m}^{T_f} c_{p,l}\, dT \right] \tag{7}$$

Kondisi batas yang diterapkan: (i) *no-flux* di *r = 0* dan *z = 0,L*, (ii) *convective coupling* di *r = R_i* dengan koefisien konveksi $h_{HTC}$ yang dihitung dari korelasi Gnielinski untuk Re ≥ 4000. Diskretisasi menggunakan metode volume hingga dengan *fully-implicit* time-stepping (Δt = 1–5 s) untuk menjamin stabilitas numerik.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model ke dalam praktik industri mengikuti SOP empat-tahap berikut, diadopsi dari protokol validasi Toloza dkk. (2026) dan panduan IEA SHC Task 58/ECES Annex 33:

**Tahap 1 — Karakterisasi PCM dan HTF.**
Seleksi PCM eutektik (misal 50% KNO₃–50% NaNO₃ dengan $T_m$ = 220°C, $L$ = 100 kJ/kg) dilakukan melalui *Differential Scanning Calorimetry* (DSC) untuk kurva $c_p(T)$ dan *T-history* method untuk validasi $k_{PCM}$. HTF dipilih dari *thermal oil* (Therminol 66) atau *molten salt* (HitecXL) dengan viskositas kinematik < 10 cSt pada suhu operasi.

**Tahap 2 — Desain Shell-and-Tube.**
Optimasi dilakukan terhadap empat *degrees of freedom*: diameter tube $D_i$, jumlah tube $N$, panjang $L$, dan pitch triangular/quad. *Baffle spacing* divariasikan 0,2–0,5× $D_{shell}$ untuk mengendalikan *dead zones*.

**Tahap 3 — Pembangunan Model Numerik.**
Pustaka Modelica (*ThermoFluid* dan *HeatTransfer*) digunakan untuk komposisi *component-based* modeling. Validasi dilakukan dengan *bench-scale experiment* (Toloza dkk., 2026) dan *benchmark* numerik terhadap solusi analitik Neumann untuk validasi *melting front* planar.

**Tahap 4 — Simulasi Skenario dan Integrasi HTHP.**
Simulasi *charge/discharge* dengan profil HTF inlet dari kurva kompresi HTHP aktual (Xu & Wang, 2024). Output yang diekstrak: *time-to-full-charge*, *discharge duration at 250 kW*, dan *round-trip efficiency* $\eta_{RT} = Q_{out}/Q_{in}$.

Diagram alir logika rekayasa:

```
┌─────────────────────┐    ┌─────────────────────┐
│ Identifikasi beban  │ -> │  Pilih rentang T_m  │
│ process heat (kW, h)│    │   (150–350°C)       │
└─────────────────────┘    └─────────────────────┘
            │                          │
            v                          v
   ┌─────────────────┐        ┌─────────────────┐
   │  Cocokkan HTHP  │