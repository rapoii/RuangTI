# 2089 — Pemodelan Numerik Transien Unit Penyimpanan Energi Termal Panas Laten pada 222°C untuk Integrasi dengan Pompa Kalor Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *Prospects of heat pump for thermal energy decarbonization*. *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Krisis energi dan desakan dekarbonisasi sektor industri telah menempatkan pompa kalor suhu tinggi (*High-Temperature Heat Pump*, HTHP) sebagai salah satu teknologi elektrifikasi proses termal yang paling strategis. Xu dan Wang (2024) dalam *The Innovation Energy* menegaskan bahwa HTHP berpotensi menggantikan boiler berbasis fosil pada rentang suhu 100–250°C, khususnya untuk aplikasi *process heat* di industri makanan, kimia, pulp & paper, serta tekstil — yang secara kolektif menyerap hampir 50% konsumsi energi termal industri global (DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Namun, HTHP memiliki karakteristik operasi yang *intermittent-friendly* terhadap beban fluktuatif: koefisien performansi (COP) turun signifikan ketika *lift* temperatur membesar, dan waktu start-up/steady-state memerlukan kondisi tunak yang tidak selalu sinkron dengan permintaan proses.

Di sinilah *Latent Heat Thermal Energy Storage* (LHTES) berperan sebagai *buffer* termal. Toloza, Payá, dan Barceló (2026) dalam kontribusi mereka di *Eurotherm Seminar #119* (DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) mengembangkan model numerik transien unit LHTES *shell-and-tube* yang dirancang untuk beroperasi pada kisaran **222°C** — temperatur yang sangat relevan untuk proses *industrial drying*, *sterilization*, dan *steam generation* skala menengah. Eutectic nitrat yang digunakan (kemungkinan besar berbasis KNO₃–LiNO₃ atau NaNO₃–KNO₃) menawarkan kapasitas penyimpanan volumetrik 3–5 kali lebih besar dibanding air sebagai *sensible* storage, sehingga memungkinkan desain unit yang lebih ringkas dan modular.

Urgensi ekonominya jelas: dengan elektrifikasi proses termal, biaya energi dapat ditekan 30–60% dibanding boiler gas pada tarif listrik terbarukan yang kompetitif, namun *peak shaving* melalui LHTES menurunkan tagihan listrik hingga 25% melalui mekanisme *time-of-use arbitrage*. Tantangan teknis utama — sebagaimana diidentifikasi oleh Toloza et al. (2026) — adalah **konduktivitas termal PCM yang rendah (0,5–1,0 W/m·K)** yang membatasi laju *charge/discharge*. Untuk menjawab hal ini, konfigurasi *shell-and-tube* dipilih karena kekompakan volumetrik, kekakuan struktural, dan kapasitas untuk di-*enhance* dengan *metal wool*, *fins*, atau *nanoparticle-enhanced PCM*. Model transien ini menjadi *decision-support tool* bagi perekayasa industri dalam menentukan geometri, jumlah tabung, dan laju alir HTF (*Heat Transfer Fluid*) optimal sebelum implementasi fisik.

## 2. Landasan Teori & Formulasi Matematis

### 2.1. Kapasitas Termal Efektif PCM

Metode *apparent heat capacity* digunakan untuk menghindari diskontinuitas pada saat fasa berubah. Kapasitas termal efektif $C_{\text{eff}}(T)$ didefinisikan secara piecewise:

$$
C_{\text{eff}}(T) = \begin{cases} c_{p,s} & T < T_{s} \\ \dfrac{\lambda + c_{p,m}\,(T - T_{s})}{\Delta T_{\text{melt}}} & T_{s} \leq T \leq T_{l} \\ c_{p,l} & T > T_{l} \end{cases}
$$

dengan $\lambda$ adalah entalpi peleburan spesifik (J/kg), $T_{s}$ dan $T_{l}$ adalah batas bawah dan atas transisi fasa, dan $c_{p,m}$ adalah kapasitas panas pada rentang *mushy zone*.

### 2.2. Persamaan Konduksi Transien pada PCM

Untuk geometri silinder *shell* dengan PCM mengelilingi tabung, persamaan panas transien radial satu-dimensi adalah:

$$
\rho_{\text{PCM}}\, c_{p,\text{eff}}\, \frac{\partial T}{\partial t} = \frac{1}{r}\,\frac{\partial}{\partial r}\!\left( k_{\text{PCM}}^{\text{eff}}\, r\, \frac{\partial T}{\partial r} \right)
$$

dengan syarat batas konvektif pada permukaan tabung ($r = r_i$):

$$
-k_{\text{PCM}}^{\text{eff}}\, \frac{\partial T}{\partial r}\bigg|_{r=r_i} = h_{\text{HTF}}\, \left( T_{\text{HTF}} - T_{s,i} \right)
$$

dan syarat simetri di pusat *shell* ($r = R_{\text{shell}}$):

$$
\frac{\partial T}{\partial r}\bigg|_{r=R_{\text{shell}}} = 0
$$

### 2.3. Neraca Energi pada Sisi HTF (Tabung)

Untuk fluida yang mengalir di dalam tabung dengan asumsi *plug flow* dan *lumped* radial di dinding:

$$
m_{\text{HTF}}\, c_{p,\text{HTF}}\, \frac{\partial T_{\text{HTF}}}{\partial