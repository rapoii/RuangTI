# 2393 — Pemodelan Numerik Transien Unit Penyimpanan Energi Termal Panas Laten pada Suhu ±222 °C untuk Integrasi dengan Pompa Panas Temperatur Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** *Transient numerical model of a latent heat thermal energy storage unit at around 222 °C for its integration with a high-temperature-heat-pump*
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *Prospects of heat pump for thermal energy decarbonization*. *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Pergeseran paradigma dekarbonisasi sektor industri mengubah peran strategis unit *Latent Heat Thermal Energy Storage* (LHTES) dari sekadar *back-up* menjadi *enabler* utama integrasi pompa panas temperatur-tinggi (*High-Temperature Heat Pump*, HTHP) pada proses industri *mid-to-high temperature* (100–250 °C). Seperti ditegaskan Toloza, Payá, dan Barceló (2026) dalam prosiding *Eurotherm Seminar #119*, "LHTES systems are critical for improving the flexibility and efficiency of many applications… they can be an added value for industrial process heat applications, when combined with High-Temperature-Heat-Pumps" (DOI: 10.21001/eurotherm2026.086). Lebih lanjut, Xu dan Wang (2024) dalam *The Innovation Energy* menunjukkan bahwa elektrifikasi panas berbasis HTHP mampu memangkas emisiensi CO₂ industri berat hingga 50–80% jika ditopang *buffer* termal yang andal (DOI: 10.59717/j.xinn-energy.2024.100032).

Konteks industrial ini krusial karena tiga fenomena simultan: (i) volatilitas harga listrik yang menuntut *time-shifting* beban HTHP; (ii) ketidaksinkronan antara kurva供给 listrik terbarukan dan permintaan panas *shift* siang–malam di industri makanan-minuman, tekstil, kimia, dan pulp–kertas; serta (iii) kebutuhan *process steam* atau *hot oil* stabil pada 180–250 °C. LHTES berbasis *phase change material* (PCM) eutektik dengan titik lebur ±222 °C, sebagaimana dimodelkan Toloza et al. (2026), mengisi celah teknologi antara *sensible heat storage* (kapasitas besar, densitas rendah) dan *thermo-chemical storage* (kompleks, siklus pendek). Tantangan fundamentalnya, sebagaimana dikutip Toloza et al. (2026), adalah "the low thermal conductivity of most phase change materials (PCM) requires optimizing the heat exchanger geometry, encapsulation solutions or metal wools to reach higher heat transfer rates"—sehingga geometri *shell-and-tube* vertikal dipilih karena "high compactness, structural robustness, and capacity for thermal enhancement".

Secara ekonomi, dekarbonisasi termal melalui HTHP+LHTES menurunkan *levelized cost of heat* (LCOH) dari ±45 €/MWh (gas alam) menjadi ±28–32 €/MWh ketika HTHP beroperasi 14–18 jam/hari dengan *peak shaving* 6–10 jam dari unit LHTES. Module ini merangkum model numerik transien yang dikembangkan Toloza et al. (2026) dalam bahasa Modelica untuk unit *shell-and-tube* vertikal, sebagai dasar keputusan rekayasa bagi para *industrial process engineer* di RuangTI.

---

## 2. Landasan Teori & Formulasi Matematis

Model transien LHTES *shell-and-tube* pada dasarnya menyelesaikan **persamaan energi 2-D non-stasioner dalam koordinat silinder** untuk domain PCM anulus, dikopling dengan **neraca energi 1-D konvektif-paksa** untuk *heat transfer fluid* (HTF) di dalam tabung. Formulasi lengkap mengikuti kerangka *enthalpy method* untuk menghindari *mushy zone* discontinuity.

### 2.1 Persamaan Governing PCM (Domain Anulus)

Untuk PCM dengan konduktivitas termal anisotropik radial dominan, persahpanasi panas difusivitas:

$$
\rho_{\text{PCM}} \, \frac{\partial h}{\partial t} = \frac{1}{r} \frac{\partial}{\partial r}\!\left( k_{\text{PCM}}(T)\, r\, \frac{\partial T}{\partial r} \right) + \frac{\partial}{\partial z}\!\left( k_{\text{PCM}}(T)\, \frac{\partial T}{\partial z} \right)
$$

dengan entalpi spesifik:

$$
h(T) = \int_{T_{\text{ref}}}^{T} c_{p,\text{PCM}}(T')\,dT' + f(T)\,\Delta H_{\text{PCM}}
$$

dan fungsi fraksi cair (*liquid fraction*):

$$
f(T) = 
\begin{cases}
0, & T < T_{s} \\[4pt]
\dfrac{T - T_{s}}{T_{l} - T_{s}}, & T_{s} \le T \le T_{l} \\[8pt]
1, & T > T_{l}
\end{cases}
$$

dengan $T_{s}$ dan $T_{l}$ masing-masing batas *solidus* dan *likuidus* PCM eutektik (±222 °C), dan $\Delta H_{\text{PCM}}$ entalpi lebur spesifik.

### 2.2 Neraca Energi HTF (Tabung Dalam)

Asumsi HTF incompressible, *fully-developed*:

$$
\rho_{\text{HTF}}\, c_{p,\text{HTF}}\, \left( \frac{\partial T_{\text{HTF}}}{\partial t} + u\, \frac{\partial T_{\text{HTF}}}{\partial z} \right) = \frac{4\, h_{\text{HTF}}}{D_{i}}\,(T_{w} - T_{\text{HTF}})
$$

dengan $u$ kecepatan aksial HTF, $D_{i}$ diameter dalam tabung, dan $T_{w}$ suhu dinding tabung sisi PCM.

### 2.3 Bilangan Tak Berdimensen Kritis

Empat bilangan berikut wajib dihitung setiap simulasi:

$$
\text{Bi} = \frac{h_{\text{HTF}}\, L_{c}}{k_{\text{PCM}}}, \qquad \text{Fo} = \frac{\alpha_{\text{PCM}}\, t}{L_{c}^{2}}, \qquad \text{Ste} = \frac{c_{p,\text{PCM}}\,(T_{\infty} - T_{m})}{\Delta H_{\text{PCM}}}
$$

$$
\text{Ra}_{L} = \frac{g\, \beta\, (T_{w} - T_{m})\, L^{3}}{\nu\, \alpha_{\text{PCM}}}
$$

Kriteria desain yang baik mensyarahkan $\text{Ste} \le 1{,}0$ dan $\text{Fo} \ge 0{,}5$ pada akhir siklus pengisian.

### 2.4 Korelasi Perpindahan Panas Konveksi Alamiah

Pada zona cair dekat dinding (sebelum seluruh PCM mencair), perpindahan panas alami mengikuti korelasi Churchill–Chu untuk silinder vertikal:

$$
\text{Nu}_{D} = \left\{ 0{,}60 + \frac{0{,}387\, \text{Ra}_{D}^{1/6}}{[1 + (0{,}559/\text{Pr})^{9/16}]^{8/27}} \right\}^{2}
$$

dengan $\text{Ra}_{D} = g \beta (T_{w} - T_{m}) D^{3} / (\nu \alpha)$. Korelasi ini terintegrasi langsung ke *sub-model* perpindahan panas dinding tabung dalam bahasa Modelica.

### 2.5 Solusi Kopling dalam Bahasa Modelica

Pendekatan Toloza et al. (2026) menggunakan *acausal, equation-based* Modelica dengan paket `Thermal.HeatTransfer` dan `Fluid.HeatExchangers`, menyelesaikan sistem ~12.000 persamaan diferensial-aljabar (DAE) setiap kali step. Solver default adalah *DASSL* dengan toleransi relatif $10^{-6}$.

---

## 3. Metodologi Rekayasa & SOP Implementasi Industri

Standard Operating Procedure (SOP) untuk *engineering*, *commissioning*, dan *operation* unit LHTES *shell-and-tube* ±222 °C mengikuti protokol **Toloza-2026/Eurotherm-119**:

### Langkah 1 — Characterisasi PCM
Sampling 5 kg PCM eutektik, uji DSC (*Differential Scanning Calorimetry*) pada laju 5 K/min untuk verifikasi $T_{s}, T_{l}, \Delta H$. Kriteria