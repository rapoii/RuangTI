# 2969 — Model Numerik Transien Unit Penyimpanan Energi Termal Panas Laten pada ~222°C untuk Integrasi dengan High-Temperature Heat Pump (HTHP)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global akan dekarbonisasi panas proses industri mendorong konvergensi dua teknologi kritikal: *High-Temperature Heat Pump* (HTHP) dan *Latent Heat Thermal Energy Storage* (LHTES). Xu & Wang (2024) dalam *The Innovation Energy* menekankan bahwa pompa kalor merupakan tulang punggung elektrifikasi panas industri, dengan potensi menggantikan boiler bahan bakar fosil pada rentang suhu 100–250°C di sektor kimia, makanan, tekstil, dan pengeringan (DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Namun, karakteristik operasional HTHP—yaitu profil beban parsial dan kebutuhan matching antara *source* dan *sink*—menyebabkan inefisiensi ketika diintegrasikan langsung ke proses yang bersifat fluktuatif. Toloza, Payá, dan Barceló (2026) menjawab tantangan ini dengan mengusulkan unit LHTES berbasis *eutectic nitrate* (campuran eutektik nitrat) sebagai buffer termal pada suhu operasi sekitar 222°C, yang terintegrasi dengan HTHP untuk menyediakan panas proses secara stabil dan fleksibel (DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)).

Konteks industri yang melatarbelakangi riset ini adalah tiga hal. Pertama, lebih dari 50% konsumsi energi industri Eropa digunakan untuk panas proses di bawah 400°C, sehingga rentang 200–250°C menjadi *sweet spot* untuk elektrifikasi. Kedua, kapasitas termal spesifik (*specific heat capacity*) PCM eutektik nitrat—misalnya campuran NaNO₃–KNO₃—yang meleleh pada ~222°C memberikan densitas energi volumetrik 3–5 kali lebih tinggi dibanding *sensible heat storage* (SHS) berbasis minyak termal atau beton, sehingga secara langsung menurunkan *footprint* instalasi. Ketiga, konduktivitas termal PCM murni yang rendah (≈0,5 W/m·K untuk garam nitrat) menjadi *bottleneck* yang menghambat *charging/discharging rate*; oleh karena itu, geometri *shell-and-tube* dipilih karena kekompakan, kekakuan struktural, dan kapasitas *thermal enhancement* melalui integrasi *fins*, *metal wool*, atau *nanoparticle-enhanced PCM* (Toloza et al., 2026). Model numerik transien yang dikembangkan dalam bahasa Modelica memungkinkan simulasi perilaku *phase change* secara akurat untuk prediksi performa jangka panjang dan *optimal control* HTHP–LHTES.

## 2. Landasan Teori & Formulasi Matematis

Model transien unit LHTES *shell-and-tube* yang dikembangkan Toloza et al. (2026) menyelesaikan persamaan konservasi energi 2D aksiseragam dalam koordinat silindris $(r,z)$, dengan HTF mengalir di dalam tabung dan PCM mengisi selubung. Bentuk diferensial parsialnya adalah:

$$\rho_{PCM} \frac{\partial H}{\partial t} = \frac{1}{r}\frac{\partial}{\partial r}\left(r\, k_{PCM}(T) \frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k_{PCM}(T) \frac{\partial T}{\partial z}\right)$$

di mana $H$ adalah entalpi volumetrik spesifik (J/m³) dan $k_{PCM}(T)$ adalah konduktivitas termal yang bergantung suhu. Untuk mengatasi diskontinuitas pada *moving interface* (antarmuka padat–cair), digunakan **metode entalpi** (*enthalpy method*) yang menggabungkan *latent* dan *sensible heat* dalam satu variabel:

$$H(T) = \int_{T_{ref}}^{T} \rho_{PCM}\, c_{p,PCM}(T')\, dT' + \rho_{PCM}\, L \cdot f(T)$$

dengan $L$ adalah *latent heat of fusion* dan $f(T)$ adalah fraksi liquid (*liquid fraction*):

$$f(T) = \begin{cases} 0, & T < T_s \\ \dfrac{T - T_s}{T_l - T_s}, & T_s \le T \le T_l \\ 1, & T > T_l \end{cases}$$

Pendekatan ekuivalen yang sering dipakai untuk stabilitas numerik adalah **metode kapasitas panas efektif**:

$$\rho_{PCM}\, c_{p,\text{eff}}(T) = \rho_{PCM}\, c_{p,PCM} + \rho_{PCM}\, L \cdot \frac{df}{dT}$$

dengan puncak Gaussian atau *smoothing function* di sekitar $T_s$ hingga $T_l$ untuk menghindari singularitas.

Untuk sisi HTF di dalam tabung, persamaan konservasi energi 1D *plug-flow* dengan *transient* diterapkan:

$$\rho_{HTF}\, c_{p,HTF}\, A_c \frac{\partial T_{HTF}}{\partial t} + \dot{m}_{HTF}\, c_{p,HTF} \frac{\partial T_{HTF}}{\partial z} = h_i\, P_i \left(T_{w,i}(z,t) - T_{HTF}(z,t)\right)$$

dengan $A_c$ luas penampang, $P_i$ keliling dalam tabung, dan $h_i$ koefisien konveksi internal yang dihitung dari korelasi Gnielinski untuk aliran turbulen:

$$Nu_i = \frac{(f/8)(Re_i - 1000)\, Pr}{1 + 12{,}7\sqrt{f/8}\left(Pr^{2/3} - 1\right)}, \quad f = (0{,}79 \ln Re_i - 1{,}64)^{-2}$$

Kopling termal antardomain dimodelkan melalui resistansi termal seri: konveksi HTF → konduksi dinding tabung → konduksi efektif PCM (dengan *effective thermal conductivity* $k_{\text{eff}}$ yang mungkin sudah mencakup *metal foam* atau *fins*). Pada simulasi Modelica, *component-based modeling* (Toloza et al., 2026) memecah domain menjadi *connectors* termal dan memungkinkan *co-simulation* dengan model HTHP berbasis siklus Rankine atau trans-kritis CO₂ (Xu & Wang, 2024).

Parameter kunci untuk garam nitrat eutektik pada ~222°C adalah: $T_s \approx 220°C$, $L \approx 150$–$161$ kJ/kg, $k_{PCM} \approx 0{,}5$ W/m·K, $\rho_{PCM} \approx 1900$ kg/m³, $c_{p,PCM} \approx 1{,}55$ kJ/kg·K.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi unit LHTES–HTHP di lapangan mengikuti SOP berlapis sebagai berikut:

**Tahap 1 – Karakterisasi Beban Proses.** Lakukan audit termal pada fasilitas industri (misalnya pabrik makanan atau kimia) untuk memperoleh profil $Q_{demand}(t)$, $T_{supply}$, dan $T_{return}$ selama 1 tahun operasional. Data ini menjadi basis sizing unit LHTES.

**Tahap 2 – Seleksi PCM dan Geometri.** Tentukan PCM dengan $T_s$ dalam rentang $T_{supply} \pm 5$ K. Untuk $T_{supply} \approx 220$–225°C, gunakan eutektik NaNO₃–KNO₃ (Solar Salt *modified*). Pilih konfigurasi *vertical shell-and-tube* dengan kriteria kompak $\beta = D_s/d_i \le 10$ dan *pitch ratio* sesuai standar TEMA.

**Tahap 3 – Pemodelan Transien Modelica.** Bangun model dengan pustaka `Buildings.ThermalStorage.PCM` atau pustaka kustom Toloza et al. (2026). Validasi dengan data eksperimen DSC (*Differential Scanning Calorimetry*) untuk $H(T)$ dan data *step-response* untuk verifikasi $k_{\text{eff}}$.

**Tahap 4 – Diskretisasi dan Solusi.** Gunakan *control-volume* 50×100 (radial × aksial) dengan *time step* adaptif $\Delta t \in [0{,}1; 5]$ s. Toleransi konvergensi $10^{-6}$ pada residual energi.

**Tahap 5 – Integrasi HTHP.** Hubungkan *outlet* evaporator/kondensor HTHP ke *inlet* HTF unit LHTES melalui *control valve* yang dimodulasi oleh MPC (*Model Predictive Control*) dengan horizon 15 menit, untuk menjaga *State of Charge* (SoC) PCM dalam rentang 30–80%.

**Tahap 6 – Commissioning dan Validasi.** Lakukan *charge–discharge* tes pada empat tingkat So