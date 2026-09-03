# 2297 — Integrasi Penyimpanan Energi Termal Panas Laten (LHTES) Shell-and-Tube pada Suhu ~222 °C dengan Pompa Kalor Suhu Tinggi untuk Dekarbonisasi Panas Proses Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Transient numerical model of a latent heat thermal energy storage unit at around 222 °C for its integration with a high-temperature-heat-pump*
**Sitasi Utama:** Toloza, J., Payá, J., & Barceló, F. (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Xu, Z., & Wang, R. (2024). *Prospects of heat pump for thermal energy decarbonization*. *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri merupakan kontributor terbesar permintaan energi termal suhu-menengah hingga tinggi (100–400 °C) di Uni Eropa dan Asia, mencakup proses pengeringan, sterlisasi, pemasakan, distilasi, dan reaksi kimia endotermik. Toloza, Payá, dan Barceló (2026) menekankan bahwa desentralisasi panas proses industri tidak cukup diselesaikan dengan elektrifikasi tunggal melainkan memerlukan *buffer* termal yang mampu menyerap fluktuasi sisi penawaran dan permintaan. Dalam konteks inilah **Latent Heat Thermal Energy Storage (LHTES)** menjadi strategis karena densitas energi volumetriknya 5–10× lebih tinggi dibanding *sensible heat storage*, sehingga tapak instalasi berkurang signifikan di lantai pabrik.

Permasalahan klasik LHTES pada suhu operasi >200 °C adalah konduktivitas termal *phase change material* (PCM) berbasis garam eutektik yang sangat rendah ($k_{PCM,s} \approx 0{,}5$–$1{,}2$ W/(m·K)). Toloza dkk. (2026) mengusulkan geometri **shell-and-tube vertikal** karena tiga alasan: (i) kekakuan struktural pada tekanan internal fluida pemindah panas (HTF), (ii) kompaktness ratio tinggi (luas pindah panas per volume), dan (iii) kemudahan retrofit pada unit HTHP yang sudah terpasang. Xu dan Wang (2024) melengkapi perspektif ini dengan menunjukkan bahwa **High-Temperature Heat Pump (HTHP)** dengan *Coefficient of Performance* (COP) 3–5 pada suhu output 200 °C mampu menyediakan panas proses secara elektrifikasi, namun dibatasi oleh profil beban harian dan kapasitas jaringan listrik. Pasangan HTHP–LHTES secara mutualistik: HTHP mengisi LHTES saat tarif listrik rendah (*valley charging*), LHTES melepas panas saat *peak demand*, sehingga *peak shaving* dan *load shifting* tercapai.

Urgensi ekonomi: biaya listrik industri di Eropa tengah berada pada €80–140/MWh dengan puncak €250/MWh, sementara kelebihan panas proses yang tidak terpakai diestimasi 20–40% dari total konsumsi. Investasi pada LHTES memiliki *payback* 3–6 tahun pada fasilitas dengan operasi >5.000 jam/tahun. Aspek keberlanjutan: dekarbonisasi panas proses melalui integrasi HTHP+LHTES diproyeksikan menurunkan emisi CO₂ industri sebesar 30–50% tergantung *fuel switching baseline*.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Pengatur Transien 2-D Axisymmetric

Model Toloza dkk. (2026) menyelesaikan persamaan konduksi-transien dalam koordinat silinder $(r, z)$ untuk PCM di dalam cangkang, dengan asumsi simetri aksial:

$$\rho_{PCM} \, c_{p,PCM}(T) \, \frac{\partial T}{\partial t} = \frac{1}{r}\frac{\partial}{\partial r}\!\left( k_{PCM}(T)\,r\,\frac{\partial T}{\partial r} \right) + \frac{\partial}{\partial z}\!\left( k_{PCM}(T)\,\frac{\partial T}{\partial z} \right)$$

dengan $\rho_{PCM}$ densitas PCM, $c_{p,PCM}$ kapasitas panas spesifik (fungsi suhu untuk menangkap efek fasa), dan $k_{PCM}$ konduktivitas termal. Toloza dkk. (2026) menggunakan **metode kapasitas panas efektif** (*effective heat capacity method*) untuk menghindari diskontinuitas pada suhu lebur $T_m$:

$$c_{\text{eff}}(T) = c_{p,s} + (c_{p,l} - c_{p,s}) \, \gamma(T) + L \,\frac{d\gamma}{dT}$$

dengan fungsi fraksi cair $\gamma(T)$ dimodelkan Gaussian di sekitar $T_m$:

$$\gamma(T) = \frac{1}{2}\left[1 + \text{erf}\!\left(\frac{T - T_m}{\Delta T_{\text{mush}}}\right)\right]$$

di mana $\Delta T_{\text{mush}}$ adalah lebar zona *mushy* (Toloza dkk., 2026).

### 2.2 Perpindahan Panas Sisi HTF dalam Tabung

Aliran HTF di dalam tabung dikarakterisasi dengan bilangan Reynolds dan Nusselt. Untuk rezim turbulen (*Re* > 10.000) dipakai korelasi Dittus-Boelter (Xu & Wang, 2024):

$$Nu_D = 0{,}023 \, Re_D^{0,8} \, Pr^{0,4}, \qquad Re_D = \frac{\dot{m}_{HTF}\, D_i}{\mu_{HTF}\, A_i}$$

Koefisien pindah panas konveksi internal:

$$h_i = \frac{Nu_D \, k_{HTF}}{D_i}$$

### 2.3 Kapasitas dan Laju Penyimpanan Energi

Energi total yang tersimpan dihitung dari integrasi entalpi:

$$E_{st} = m_{PCM}\!\left[\int_{T_i}^{T_m}\! c_{p,s}\,dT + L_f + \int_{T_m}^{T_f}\! c_{p,l}\,dT \right]$$

Laju pengisian sesaat:

$$\dot{Q}_{ch}(t) = \dot{m}_{HTF}\,c_{p,HTF}\,(T_{in}(t) - T_{out}(t))$$

### 2.4 Bilangan Tak Berdimensen Pengendali

Tiga bilangan berikut menentukan perilaku dinamis sistem:

$$Fo = \frac{\alpha_{PCM}\, t}{R_o^2}, \qquad Ste = \frac{c_{p,PCM}(T_{HTF} - T_m)}{L_f}, \qquad Bi = \frac{h_i R_o}{k_{PCM}}$$

dengan $\alpha_{PCM}=k_{PCM}/(\rho_{PCM}c_{p,PCM})$ difusivitas termal. Xu dan Wang (2024) menekankan bahwa nilai $Ste \approx 0{,}5$–1,5 merupakan optimum untuk menjaga agar lapisan padat tidak terlalu tebal selama *discharge*.

### 2.5 Kapasitas dan Energi Numerik Model dalam Modelica

Toloza dkk. (2026) memilih bahasa **Modelica** melalui *Dymola/Modelon* karena kemampuan *acausal modeling* dan pustaka termal `Thermal.FluidHeatFlow` dan `Thermal.Storage`. Diskretisasi diselesaikan dengan metode volume hingga (*finite volume*) pada grid 50 × 100 node aksial-radial, time-step adaptif $\Delta t \in [0{,}1;\;5]$ s dengan toleransi relatif $10^{-4}$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (S