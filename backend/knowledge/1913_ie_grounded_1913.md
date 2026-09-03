# 1913 — Model Numerik Transien Unit Penyimpanan Energi Termal Panas Laten (LHTES) pada Suhu ~222°C untuk Integrasi dengan Pompa Panas Temperatur Tinggi (HTHP)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *Prospects of heat pump for thermal energy decarbonization*, *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri merupakan kontributor terbesar terhadap konsumsi energi final dunia—International Energy Agency (IEA) melaporkan bahwa industri menyumbang lebih dari 37% emisi CO₂ akhir dan sekitar 54% konsumsi energi untuk panas proses (process heat) berada di atas 200°C. Permintaan panas proses pada rentang 150–250°C ini secara historis dilayani oleh boiler pembakaran gas alam, yang menciptakan ketergantungan fosil yang sulit didekarbonisasi melalui elektrifikasi langsung. Oleh karena itu, integrasi *High-Temperature Heat Pump* (HTHP) dengan *Latent Heat Thermal Energy Storage* (LHTES) muncul sebagai arsitektur sistem yang sangat prospektif. Toloza, Payá, dan Barceló (2026) dalam makalah *Eurotherm Seminar #119* (DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) menekankan bahwa fleksibilitas dan efisiensi LHTES menjadi *added value* ketika dikawinkan dengan HTHP, karena waktu muat-bongkar (charging/discharging) yang cepat memungkinkan *peak-shaving*, *load-leveling*, dan pemulihan panas buang (waste heat recovery) yang sebelumnya terbuang. Xu dan Wang (2024) (DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)) memperkuat argumentasi tersebut dengan menyatakan bahwa *thermal energy decarbonization* melalui *heat pump* merupakan salah satu *low-hanging fruit* karena rasio performa musiman (SCOP) HTHP modern telah mencapai 3,5–5,5 pada lift termal hingga 80–120 K. Pada suhu operasi LHTES sekitar 222°C, pilihan PCM (Phase Change Material) yang masuk akal adalah campuran eutektik NaNO₃–KNO₃ (solar salt variant) dengan titik lebur yang dapat di-tune ke rentang tersebut, kapasitas panas leleh (latent heat of fusion) sekitar 160–170 kJ/kg, dan stabilitas termal yang baik pada >300 siklus. Urgensi industri dari penelitian ini adalah: (i) mendekatkan elektrifikasi proses industri pada rentang suhu menengah, (ii) mengurangi kapasitas terpasang HTHP melalui *thermal buffering*, dan (iii) menyediakan *dispatchable heat* untuk menutupi intermittency listrik hijau. Tantangan teknis yang diidentifikasi Toloza et al. (2026) adalah konduktivitas termal PCM yang rendah (0,5–1,5 W/m·K) sehingga geometri *heat exchanger*, enkapsulasi, dan *metal wool/fin enhancement* harus dioptimasi—di mana konfigurasi *shell and tube* dipilih karena kekompakan, kekuatan struktural, dan kapasitas peningkatan termalnya.

## 2. Landasan Teori & Formulasi Matematis

Model transien yang dikembangkan Toloza et al. (2026) dalam bahasa Modelica menyelesaikan persamaan energi 2-D aksisimetris dengan metode *enthalpy* untuk menghindari diskontinuitas pada *solid-liquid interface*. Persamaan governing-nya adalah:

$$\rho \, \frac{\partial H(T)}{\partial t} = \frac{1}{r}\frac{\partial}{\partial r}\left( r \, k(T) \frac{\partial T}{\partial r} \right) + \frac{\partial}{\partial z}\left( k(T) \frac{\partial T}{\partial z} \right)$$

dengan $H(T)$ adalah entalpi spesifik sebagai fungsi suhu, $\rho$ densitas PCM, $k(T)$ konduktivitas termal efektif, dan $(r,z)$ koordinat silindris. Formulasi entalpi digunakan untuk menangani fase *mushy zone* secara numerik stabil:

$$H(T) = \int_{T_{ref}}^{T} c_p(T')\, dT' + \beta(T) \, L_f$$

dengan $\beta(T) \in [0,1]$ adalah fraksi leleh (liquid fraction) yang dimodelkan Gaussian atau sigmoid di sekitar $T_m$:

$$\beta(T) = \frac{1}{2}\left[ 1 + \mathrm{erf}\left( \frac{T - T_m}{\Delta T_{mushy}\sqrt{2}} \right) \right]$$

Untuk PCM eutektik nitrat, parameter karakteristik: $T_m = 222\,°C$, $\rho \approx 1900\,\text{kg/m}^3$, $c_{p,solid} \approx 1300\,\text{J/kg·K}$, $c_{p,liquid} \approx 1500\,\text{J/kg·K}$, $k_{solid} \approx 1{,}5\,\text{W/m·K}$, $k_{liquid} \approx 0{,}6\,\text{W/m·K}$, $L_f \approx 160\,\text{kJ/kg}$, dan $\Delta T_{mushy} \approx 3\,K$.

Kondisi batas pada dinding dalam (permukaan kontak HTF/PCM) adalah konveksi paksa:

$$-k(T)\frac{\partial T}{\partial r}\bigg|_{r=R_i} = h_{HTF}(T_{HTF} - T_{surface})$$

dengan koefisien konveksi $h_{HTF}$ untuk oli termal pada aliran turbulen dapat dihitung dari korelasi Gnielinski:

$$Nu = \frac{(f/8)(Re-1000)Pr}{1 + 12{,}7(f/8)^{1/2}(Pr^{2/3}-1)}$$

di mana $Re = \rho_{HTF} v D_i / \mu_{HTF}$ dan $f = (0{,}79 \ln Re - 1{,}64)^{-2}$. Pada dinding luar shell diasumsikan adiabatic: $\partial T/\partial r|_{r=R_o} = 0$.

Untuk HTF di dalam tabung, persamaan energi 1-D unsteady dengan asumsi *plug flow* adalah:

$$\rho_{HTF} c_{p,HTF} A_c \frac{\partial T_{HTF}}{\partial t} + \dot{m} c_{p,HTF} \frac{\partial T_{HTF}}{\partial z} = h_{HTF} P_i \left( T_{surface} - T_{HTF} \right)$$

dengan $P_i = \pi D_i$ keliling basah dan $A_c = \pi D_i^2/4$ luas penampang. *Stefan number* dan *Fourier number* digunakan untuk analisis non-dimensional:

$$Ste = \frac{c_p(T_\infty - T_m)}{L_f}, \qquad Fo = \frac{\alpha t}{R_o^2}, \qquad Bi = \frac{h R_i}{k_{eff}}$$

Kondisi untuk aproksimasi kapasitas termal terkonsentrasi (*lumped capacitance*) adalah $Bi \cdot Fo \ll 1$; untuk sistem shell-and-tube dengan PCM nitrat, $Bi \approx 8$ sehingga tidak valid dan diperlukan PDE 2-D penuh seperti diselesaikan oleh Toloza et al. (2026).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri mengikuti SOP berlapis yang distandardisasi berdasarkan ISO 13790 untuk dinamika termal bangunan dan ASHRAE Guideline 36 untuk kontrol. Tahapan metodologi berdasarkan Toloza et al. (2026) adalah:

**Tahap 1 — Karakterisasi PCM dan HTF.** Pengukuran DSC (Differential Scanning Calorimetry) pada heating/cooling rate 2–5 K/min untuk menentukan $T_m$, $L_f$, dan $c_p$ sesuai ASTM E1269. Verifikasi stabilitas siklus termal minimal 100 siklus antara $T_m \pm 50\,K$ sesuai