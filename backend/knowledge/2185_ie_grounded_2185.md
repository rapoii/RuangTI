# 2185 — Pemodelan Numerik Transien Unit Penyimpanan Energi Termal Panas Laten (~222 °C) untuk Integrasi dengan Pompa Panas Temperatur Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222 °C for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri bertanggung jawab atas sekitar 25–30 % dari konsumsi energi final global, di mana lebih dari separuh kebutuhan tersebut—yakni panas proses (process heat) pada rentang 150–400 °C—masih dipasok oleh pembakaran gas alam langsung. Dalam kerangka dekarbonisasi Eropa (Fit-for-55 dan EU Net-Zero Industry Act), elektrifikasi termal melalui High-Temperature Heat Pumps (HTHPs) muncul sebagai vektor utama menggantikan boiler fosil. Namun, seperti ditegaskan oleh Zhenyuan Xu dan Ruzhu Wang dalam *The Innovation Energy* (DOI: 10.59717/j.xinn-energy.2024.100032), ketersediaan sumber panas buangan (waste heat) yang fluktuatif dan ketidakselarasan antara profil permintaan proses dengan profil pasokan listrik menjadi bottleneck utama adopsi HTHP.

Di sinilah Latent Heat Thermal Energy Storage (LHTES) berperan sebagai buffer termal. Berbeda dengan sensible TES yang hanya memanfaatkan perubahan suhu, LHTES menggunakan Phase Change Material (PCM) sehingga densitas energi volumetrik dapat mencapai 3–5 kali lipatnya, dengan suhu discharge mendekati isotermal. Toloza, Payá, dan Barceló (2026, DOI: 10.21001/eurotherm2026.086) secara eksplisit menyatakan bahwa LHTES dapat menjadi "added value" ketika digandengkan dengan HTHP untuk aplikasi panas proses industri. Target operasional yang dipilih dalam studi tersebut—yakni 222 °C—selaras dengan titik lebur campuran eutektik nitrat (misalnya NaNO₃–KNO₃) yang umum dijumpai pada proses tekstil, pengeringan, dan makanan cair bersuhu menengah-tinggi.

Permasalahan fundamental yang diangkat Toloza et al. (2026) adalah konduktivitas termal PCM yang rendah—tipikal 0,2–0,5 W/(m·K) untuk garam nitrat—sehingga laju transfer panas menjadi terkendala. Untuk menjawab hal tersebut, paper mengusulkan konfigurasi *vertical shell-and-tube* dengan PCMserta menyelidiki geometri penukar kalor, kapsulasi, dan penggunaan metal wool sebagai enhancer. Shell-and-tube dipilih karena tiga atribut industrial-grade: kekompakan volumetrik tinggi, robusteks struktural pada operasi siklik, dan kapasitas untuk augmentasi perpindahan panas (DOI: 10.21001/eurotherm2026.086). Urgensi ekonominya jelas: biaya Levelized Cost of Storage (LCOS) untuk sistem LHTES bersuhu 200–250 °C harus turun di bawah €30/kWh-termal agar dapat bersaing dengan steam accumulator konvensional—dan hal itu mensyaratkan model transient yang andal untuk sizing dan control.

## 2. Landasan Teori & Formulasi Matematis

Toloza et al. (2026) membangun model transient dalam bahasa Modelica dengan menyatukan domain termal fluida Heat Transfer Fluid (HTF), konduksi 2-D aksirosial pada PCM, serta dinamika perubahan fasa. Formulasi intinya mengadopsi metode *enthalpy–apparent heat capacity* untuk menghindari diskontinuitas pada moving interface (Stefan problem klasik).

**Persamaan konservasi energi pada PCM (domain silinder shell-and-tube):**

$$\rho_{PCM}\, c_{p,eff}(T)\,\frac{\partial T}{\partial t} = \frac{1}{r}\frac{\partial}{\partial r}\!\left(k_{PCM}\, r\, \frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\!\left(k_{PCM}\, \frac{\partial T}{\partial z}\right)$$

di mana kapasitas panas efektif didefinisikan sebagai:

$$c_{p,eff}(T) = c_{p,s/l} + L \cdot \frac{df}{dT}$$

dengan $L$ adalah panas laten (J/kg) dan $f(T)$ adalah fungsi fraksi cair (*liquid fraction*) yang umum dimodelkan sebagai kurva Gaussian sempit di sekitar $T_m$:

$$f(T) = \frac{1}{2}\!\left[1 + \mathrm{erf}\!\left(\frac{T - T_m}{\Delta T_{mush}}\right)\right]$$

**Persamaan energi HTF dalam tube (asumsi 1-D plug flow dengan dispersi aksial diabaikan):**

$$\rho_f c_{p,f}\, u_f \frac{\partial T_f}{\partial x} = \frac{4\,U}{D_i}\,(T_{PCM,wall} - T_f)$$

di mana $U$ adalah koefisien transfer panas overall yang menggabungkan resistansi konveksi HTF, konduksi dinding tube, dan konduksi efektif PCM:

$$\frac{1}{U} = \frac{1}{h_{HTF}} + \frac{D_i \ln(D_o/D_i)}{2 k_{w}} + \frac{1}{h_{PCM,eff}}$$

Untuk aliran turbulen HTF di dalam tube, korelasi Dittus–Boelter (heating, $n=0.4$) digunakan sesuai praktik standar ASME:

$$Nu_D = 0{,}023\, Re_D^{0{,}8}\, Pr^{0{,}4} \quad\Rightarrow\quad h_{HTF} = \frac{Nu_D\, k_f}{D_i}$$

**Angka tanpa dimensi untuk analisis performansi:**

- Bilangan Reynolds: $Re_D = \dfrac{4 \dot{m}_f}{\pi D_i \mu_f}$
- Bilangan Biot PCM: $Bi =