# 2793 — Model Numerik Transien Unit Penyimpanan Energi Termal Panas Laten Suhu ~222°C untuk Integrasi dengan Pompa Kalor Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri merupakan kontributor terbesar konsumsi energi termal tingkat menengah–tinggi (100–300 °C), yang mencakup proses pengeringan, pasteurisasi, sterilisaso, distilasi, dan reaksi kimia endotermik. Lebih dari 50% kebutuhan termal industri global berada pada rentang suhu tersebut dan secara historis dipenuhi oleh pembakaran gas alam, yang menyebabkan emisi CO₂ signifikan. Dekarbonisasi proses termal industri menuntut integrasi teknologi *high-temperature heat pump* (HTHP) dengan sistem penyimpanan energi termal, seperti yang ditegaskan oleh Xu & Wang (2024) dalam tinjauan prospektif *heat pump* untuk dekarbonisasi termal, yang dipublikasikan di *The Innovation Energy* dengan DOI [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032). Namun, ketidakstabilan temporal antara ketersediaan energi listrik (sumber HTHP) dan permintaan termal proses menjadi bottleneck operasional yang krusial.

Dalam konteks inilah Toloza, Payá, dan Barceló (2026) memperkenalkan model numerik transien unit *Latent Heat Thermal Energy Storage* (LHTES) berbasis konfigurasi *shell-and-tube* vertikal pada suhu operasi sekitar 222 °C (DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)). Material *phase change material* (PCM) yang digunakan adalah eutektik berbasis nitrat, yang memiliki panas laten tinggi namun konduktivitas termal rendah (~0,5 W/m·K). Tantangan utama yang diidentifikasi penulis adalah bagaimana mengatasi hambatan konduksi internal PCM melalui optimalisasi geometri penukar kalor, enkapsulasi, atau penggunaan *metal wool/fin* untuk menaikkan laju perpindahan panas. Pada suhu ~222 °C, eutektik nitrat seperti campuran NaNO₃–KNO₃ (50/50 wt%) atau solar salt ternary menjadi kandidat utama karena kapasitas penyimpanan volumetrik tinggi (≈250–300 kWh/m³) dan stabilitas termal jangka panjang pada siklus charge/discharge berulang.

Relevansi industrial dari riset ini sangat tinggi untuk aplikasi proses industri makanan, tekstil, pulp & paper, dan kimia dasar, di mana fluktuasi permintaan termal dapat diredam oleh unit LHTES, sekaligus memungkinkan operasi HTHP pada titik kerja optimal sepanjang waktu — sebuah *demand-side flexibility* yang menurunkan *Capacity Factor* dan biaya listrik total. Studi ini mengintegrasikan metodologi *object-oriented equation-based modeling* melalui bahasa Modelica, memungkinkan simulasi multi-fisika yang efisien dan skalabel untuk desain unit skala pilot hingga komersial.

## 2. Landasan Teori & Formulasi Matematis

Model transien LHTES yang dikembangkan Toloza et al. (2026) dibangun di atas persamaan konservasi energi dalam geometri silindris 2D *axisymmetric*, dengan asumsi kesetimbangan termal lokal antara fasa padat dan cair di zona *mushy*. Formulasi *apparent heat capacity* digunakan untuk menghindari diskontinuitas pada antarmuka fasa:

$$\rho c_{p,app}(T)\frac{\partial T}{\partial t} = \frac{1}{r}\frac{\partial}{\partial r}\left(k_{eff}(T) \, r \, \frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k_{eff}(T) \, \frac{\partial T}{\partial z}\right)$$

di mana kapasitas panas tampak didefinisikan sebagai:

$$c_{p,app}(T) = c_{p,s} + f(T)\cdot\frac{L}{\Delta T_{mushy}} + (1-f(T))\cdot c_{p,l}$$

dengan $f(T)$ adalah fungsi *smoothing* berbasis Gauss atau polynomial orde tiga pada interval $[T_s, T_l]$, $L$ adalah panas laten peleburan (J/kg), dan $\Delta T_{mushy}$ adalah lebar zona transisi fasa (umumnya 2–5 K).

Konduktivitas termal efektif $k_{eff}(T)$ mencakup kontribusi konduksi murni dan efek konveksi alami di PCM cair. Untuk PCM dalam fase cair, bilangan Rayleigh dan Nusselt digunakan untuk memodifikasi koefisien perpindahan panas efektif:

$$Ra_L = \frac{g \, \beta \, \Delta T \, L_c^3}{\nu \, \alpha}, \quad Nu_L = C \cdot Ra_L^n$$

dengan $C \approx 0,59$ dan $n \approx 0,25$ untuk geometri silindris vertikal (Churchill & Chu), sehingga:

$$h_{conv} = \frac{Nu_L \cdot k_l}{L_c}$$

Konveksi alami ini secara signifikan mempercepat pelepasan muatan (*discharge*) karena densitas PCM cair lebih rendah dibanding fase padat, menghasilkan ketidakstabilan Rayleigh–Bénard di dalam *shell*.

Pada sisi *heat transfer fluid* (HTF) di dalam tabung, perpindahan panas konveksi paksa turbulen mengikuti korelasi Dittus–Boelter atau Gnielinski:

$$Nu_{HTF} = \frac{(f/8)(Re_D - 1000)Pr}{1 + 12,7(f/8)^{0,5}(Pr^{2/3}-1)}$$

dengan faktor gesekan Darcy $f = (0,790 \ln Re_D - 1,64)^{-2}$ valid untuk $2300 < Re_D < 5\times10^6$.

Neraca energi pada sisi HTF (asumsi *plug flow* 1D di sepanjang sumbu $z$):

$$\dot{m}_{HTF} \, c_{p,HTF} \, \frac{dT_{HTF}}{dz} = \pi D_o \, h_{HTF}(T_{wall} - T_{HTF})$$

Kontinuitas termal pada dinding tabung menghasilkan *thermal resistance network*:

$$\frac{1}{U_o} = \frac{D_o}{D_i \, h_{HTF}} + \frac{D_o \ln(D_o/D_i)}{2 k_{wall}} + \frac{1}{h_{gap}}$$

di mana $h_{gap}$ merepresentasikan resistansi kontak antara PCM dan dinding (sangat sensitif pada siklus termal berulang).

Energi total tersimpan dalam unit LHTES dihitung melalui integrasi volumetrik:

$$E_{stored}(t) = \int_{V_{PCM}} \rho \left[\int_{T_{ref}}^{T(t,r,z)} c_{p,app}(T')\, dT'\right] dV$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model di industri mengikuti SOP berikut, disintesis dari protokol Toloza et al. (2026) dengan adaptasi terhadap praktik rekayasa termal industri:

**Langkah 1 – Penentuan Spesifikasi Desain.** Tentukan kapasitas penyimpanan target $E_{target}$ (MWh), suhu operasi $T_{m}$ (~222 °C), dan profil beban HTF. Hitung volume PCM awal menggunakan estimasi densitas energi volumetrik eutektik nitrat ($e_v \approx 250$ kWh/m³).

**Langkah 2 – Konstruksi Model di Modelica.** Bangun komponen *PCMShell*, *HTFTube*, dan *TubeWall* menggunakan pustaka *Modelica.Fluid* dan *Modelica.Thermal.HeatTransfer*. Diskretisasi spasial *finite volume* dengan grid 2D *axisymmetric* (radial 30–50 sel, aksial 50–80 sel) memvalidasi *grid-independence*.

**Langkah 3 – Input Material Properties.** Tabelkan $c_p(T)$, $k(T)$, $\rho(T)$, $\mu(T)$ untuk PCM dan HTF (misal *thermal oil* atau *pressurized water*) pada rentang suhu operasi. Untuk eutektik NaNO₃–KNO₃, $L \approx 100$–$110$ kJ/kg, $k_s \approx 0,5$ W/m·K, $k_l \approx 0,65$ W/m·K.

**Langkah 4 – Penentuan Kondisi Batas.** Batas luar *shell*: adiabatic atau rugi panas ke ambient dengan $h_{amb} = 5$–$10$ W/m²K dan isolasi *ceramic fiber*. Batas dalam tabung: HTC konveksi paksa HTF. Batas atas/bawah: perpindahan panas aksial dimodelkan eksplisit.

**Langkah 5 – Simulasi Charge–Discharge Cycle.** Jalankan simulasi selama minimal 3 siklus termal penuh untuk memvalidasi stabilitas numerik dan menangkap efek *subcooling* serta *hysteresis*.

**Langkah 6 – Validasi Eksperimental.** Bandingkan profil suhu terhadap data eksperimen (*melt front propagation*, waktu peleburan 50% dan 90%, kurva $T(t)$ HTF outlet). Toleransi kesalahan target $\leq 5\%$ RMSE.

**Langkah 7 – Analisis Sensitivitas dan Optimasi.** Lakukan studi parametrik terhadap diameter tabung, pitch, panjang, dan penambahan *fin longitudinal* atau *metal foam* untuk meningkatkan $k_{eff}$.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Spesifikasi Desain:** Unit LHTES vertikal *shell-and-tube* dengan HTF minyak termal. Kapasitas target $E_{target} = 50$ kWh. PCM: eutektik NaNO₃–KNO₃ (50/50 wt%) dengan $T_m =