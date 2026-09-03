# 2009 — Model Numerik Transient Unit Penyimpanan Energi Termal Laten (LHTES) pada Suhu ~222°C untuk Integrasi dengan Pompa Kalor Suhu Tinggi (HTHP)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** *Transient numerical model of a latent heat thermal energy storage unit at around 222°C for its integration with a high-temperature-heat-pump*
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *Prospects of heat pump for thermal energy decarbonization*. *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Dekarbonisasi sektor energi termal industri merupakan salah satu tantangan teknis paling krusial abad ke-21. Menurut Xu & Wang (2024) dalam *The Innovation Energy* (DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)), sekitar 50% dari konsumsi energi final global masih berupa energi termal, dan mayoritas disuplai oleh pembakaran bahan bakar fosil yang melepaskan CO₂. Dalam konteks inilah High-Temperature Heat Pumps (HTHPs) muncul sebagai teknologi *enabling* yang memungkinkan elektrifikasi panas proses industri pada rentang suhu 150–250°C, sekaligus berpotensi meningkatkan Coefficient of Performance (COP) sistemik hingga 3–5 kali dibanding boiler konvensional (Xu & Wang, 2024).

Namun, integrasi HTHP dengan proses industri menghadapi masalah *temporal mismatch* antara ketersediaan listrik (yang fluktuatif dan time-of-dependent) dan permintaan panas proses (yang sering beroperasi pada pola shift atau *batch*). Toloza, Payá, & Barceló (2026) dalam *Eurotherm Seminar #119* (DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) menegaskan bahwa Latent Heat Thermal Energy Storage (LHTES) merupakan solusi arsitektural untuk menjembatani *gap* temporal ini, khususnya ketika dikombinasikan dengan HTHP. Unit LHTES berfungsi sebagai *thermal buffer* yang menyimpan kelebihan energi pada periode *off-peak* dan melepaskannya saat permintaan puncak, sehingga meningkatkan *capacity factor* instalasi dan *levelized cost of storage* (LCOS) sistem.

Tantangan fundamental yang diangkat oleh Toloza et al. (2026) adalah konduktivitas termal rendah dari sebagian besar Phase Change Material (PCM), khususnya garam nitrat eutektik di sekitar 222°C (komposisi tipikal 60% NaNO₃ – 40% KNO₃ atau "solar salt"), yang hanya memiliki $k \approx 0{,}5 \text{ W/(m·K)}$. Untuk mengatasi hal ini, paper tersebut mengusulkan konfigurasi *shell-and-tube* vertikal sebagai solusi geometris yang menawarkan kekompakan, integritas struktural, dan kapasitas *thermal enhancement* melalui konveksi natural pada fase cair PCM. Tujuan utama paper adalah membangun *transient numerical model* berbasis bahasa Modelica yang mampu memprediksi perilaku termal dinamis unit LHTES selama siklus *charging* dan *discharging*, guna mendukung desain dan operasi sistem terintegrasi HTHP–LHTES.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Penggovernan Konduksi Termal dengan Perubahan Fase

Model transient 2-D *axisymmetric* pada koordinat silinder $(r,z)$ untuk PCM di sisi *shell* mengikuti bentuk konservasi enthalpy:

$$\rho \, \frac{\partial h}{\partial t} = \frac{1}{r} \frac{\partial}{\partial r}\left( r \, k \, \frac{\partial T}{\partial r} \right) + \frac{\partial}{\partial z}\left( k \, \frac{\partial T}{\partial z} \right)$$

dengan $\rho$ densitas PCM (kg/m³), $h$ enthalpi spesifik (J/kg), $k$ konduktivitas termal (W/(m·K)), dan $T$ suhu lokal (K). Pendekatan *effective heat capacity* (capacitance method) digunakan untuk menghindari diskontinuitas pada antarmuka solid-liquid, sehingga:

$$c_{p,\text{eff}}(T) = c_p + L \cdot \frac{df}{dT}, \qquad f(T) = \begin{cases} 0 & T < T_s \\ \frac{T - T_s}{T_l - T_s} & T_s \le T \le T_l \\ 1 & T > T_l \end{cases}$$

dengan $L$ kalor laten (J/kg), $f(T)$ fraksi cair, dan $T_s, T_l$ batas suhu solidus–liquidus. Untuk mencegah singularitas numerik, persamaan ini dihaluskan (*regularized*) menggunakan fungsi Gaussian di sekitar $T_m = (T_s + T_l)/2$:

$$c_{p,\text{eff}}(T) \approx c_p + \frac{L}{\Delta T \sqrt{2\pi}} \exp\!\left[-\frac{(T - T_m)^2}{2\Delta T^2}\right]$$

### 2.2 Perpindahan Panas Konveksi Alam pada PCM Cair

Pada fase cair, pergerakan melt dideskripsikan oleh angka Rayleigh:

$$Ra = \frac{g \, \beta \, \Delta T \, H^3}{\nu \, \alpha}$$

dengan $g$ percepatan gravitasi (m/s²), $\beta$ koefisien ekspansi volumetrik (1/K), $\nu$ viskositas kinematik (m²/s), dan $\alpha = k/(\rho c_p)$ difusivitas termal (m²/s). Koefisien perpindahan panas konvektif alami pada PCM cair mengikuti korelasi empiris umum untuk *enclosed cavities*:

$$Nu = C \cdot Ra^n, \quad \text{dengan } C \in [0{,}059,\,0{,}228], \, n \in [0{,}33,\,