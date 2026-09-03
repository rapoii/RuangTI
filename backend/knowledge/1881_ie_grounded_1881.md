# 1881 — Model Numerik Transien untuk Unit Penyimpanan Energi Termal Panas Laten (LHTES) pada Suhu ~222°C Terintegrasi dengan Pompa Kalor Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** *Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump*
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *Prospects of heat pump for thermal energy decarbonization*. *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Dekarbonisasi proses termal industri merupakan salah satu tantangan teknis terbesar abad ke-21. Berdasarkan tinjauan Xu & Wang (2024) yang dipublikasikan di *The Innovation Energy* dengan DOI [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032), sektor industri bertanggung jawab atas lebih dari 25% konsumsi energi final global, di mana mayoritas (sekitar 50%) berupa *medium-grade* dan *high-grade process heat* pada rentang suhu 150–400°C. Aplikasi seperti pasteurisasi, sterilisasi, distilasi, pengeringan, dan reaksi kimia endotermis membutuhkan suplai panas yang kontinu dan termal stabil untuk menjaga kualitas produk. Dalam konteks transisi energi, pompa kalor suhu tinggi (*High-Temperature Heat Pump*, HTHP) muncul sebagai teknologi elektrifikasi yang menjanjikan karena mampu menyediakan *Coefficient of Performance* (COP) antara 2,5–4,5 untuk suhu kondensor hingga 200°C, sebagaimana ditunjukkan oleh Xu & Wang (2024).

Namun, salah satu kelemahan operasional HTHP adalah ketidakstabilan termal antara fase *charging* (kompresi) dan *discharging* (pelepasan kalor ke proses), ditambah dengan karakteristik beban termal industri yang fluktuatif. Di sinilah peran *Latent Heat Thermal Energy Storage* (LHTES) menjadi krusial. Toloza, Payá, dan Barceló (2026) dalam *Eurotherm Seminar #119* ([DOI 10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) menegaskan bahwa LHTES berfungsi sebagai *buffer termal* yang meningkatkan fleksibilitas dan efisiensi sistem terintegrasi HTHP-proses. Unit LHTES menyimpan energi dalam bentuk *phase change material* (PCM) yang melepas/menyerap kalor laten pada suhu hampir konstan di sekitar titik lelehnya.

Tantangan rekayasa utama pada LHTES bersuhu ~222°C adalah konduktivitas termal PCM yang rendah (umumnya 0,3–1,0 W/m·K untuk garam eutektik), sehingga tanpa optimalisasi geometri perpindahan panas, laju *charging/discharging* akan menjadi sangat lambat dan menurunkan kelayakan ekonomi sistem. Toloza et al. (2026) mengusulkan konfigurasi *shell-and-tube* vertikal sebagai solusi karena tiga keunggulan struktural: (1) kekompakan volumetrik tinggi, (2)robustness struktural pada operasi siklik termal, dan (3) kapasitas tinggi untuk integrasi *thermal enhancement devices* seperti sirip, wool logam, atau *encapsulation solutions*. Atas dasar itulah modul ini membahas model numerik transien LHTES eutektik dengan geometri *shell-and-tube* yang dirancang untuk integrasi langsung dengan HTHP di sektor industri proses.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Pengendalian Energi Transien dengan Perubahan Fase

Model LHTES transien pada dasarnya adalah masalah *Stefan* yang diselesaikan menggunakan pendekatan formulasi entalpi (*enthalpy method*). Toloza et al. (2026) mengembangkan model 2-D aksial-radial pada geometri silinder dengan mengasumsikan aliran *heat transfer fluid* (HTF) 1-D di dalam tabung dan konduksi 2-D pada PCM di sisi *shell*. Persamaan konservasi energi pada PCM ditulis sebagai:

$$\rho_{PCM} \frac{\partial h}{\partial t} = \frac{1}{r} \frac{\partial}{\partial r}\left( k_{PCM}(T) \cdot r \frac{\partial T}{\partial r} \right) + \frac{\partial}{\partial z}\left( k_{PCM}(T) \frac{\partial T}{\partial z} \right)$$

dengan $h$ adalah entalpi spesifik, $\rho_{PCM}$ densitas PCM, $k_{PCM}(T)$ konduktivitas termal dependen suhu, dan $(r,z)$ koordinat radial-aksial. Formulasi entalpi memungkinkan penyelesaian tanpa harus melacak antarmuka padat-cair secara eksplisit, melainkan melalui kurva $h(T)$ yang menggabungkan kalor sensible dan laten.

### 2.2 Kurva Entalpi-Temperature (Apparent Heat Capacity)

Untuk menyederhanakan komputasi dalam Modelica, model Toloza et al. (2026) menggunakan metode kapasitas panas semu:

$$C_{app}(T) = \frac{dh}{dT} = c_{p,s} + \frac{L}{\Delta T_{m}} \cdot f(T)$$

dengan $L$ adalah kalor laten, $\Delta T_m$ adalah interval transisi fasa (umumnya 2–5 K untuk garam eutektik murni), dan $f(T)$ adalah fungsi regularisasi Gauss atau *smoothing function* berbentuk:

$$f(T) = \frac{1}{\sigma\sqrt{2\pi}} \exp\left(-\frac{(T-T_m)^2}{2\sigma^2}\right)$$

di mana $T_m$ adalah titik leleh PCM eutektik dan $\sigma = \Delta T_m/4$.

### 2.3 Neraca Energi pada Sisi HTF (Tabung)

Untuk sisi fluida di dalam tabung, persamaan energi 1-D dengan asumsi *plug flow* dan tanpa akumulasi pada dinding:

$$\rho_{HTF} c_{p,HTF} A_c \frac{\partial T_f}{\partial t} + \dot{m}_{HTF} c_{p,HTF} \frac{\partial T_f}{\partial z} = h_i \pi D_i (T_{w,i} - T_f)$$

dengan $A_c$ luas penampang tabung, $D_i$ diameter dalam tabung, $T_{w,i}$ suhu dinding dalam tabung, dan $h_i$ koefisien konveksi internal yang dihitung dari korelasi Gnielinski:

$$Nu = \frac{h_i D_i}{k_{HTF}} = \frac{(f/8)(Re-1000)Pr}{1 + 12,7(f/8)^{0,5}(Pr^{2/3}-1)}$$

dengan $f = (0,790 \ln Re - 1,64)^{-2}$.

### 2.4 Kondisi Batas dan Kopling Termal

Kopling termal antara HTF dan PCM terjadi melalui resistansi dinding tabung dan lapisan batas luar:

$$q''(z,t) = \frac{T_f(z,t) - T_{PCM}(r=R_o, z, t)}{\frac{1}{h_i} + \frac{D_o \ln(D_o/D_i)}{2 k_w} + \frac{1}{h_o}}$$

dengan $D_o$ diameter luar tabung, $k_w$ konduktivitas material dinding (umumnya baja karbon atau baja tahan karat 316L untuk operasi >200°C), dan $h_o$ koefisien konveksi luar alami-bebas karena PCM diam (konduksi alami di *mushy zone*).

### 2.5 Efektivitas Unit dan Kapasitas Penyimpanan

Total energi yang disimpan selama *charging* dinyatakan sebagai:

$$Q_{stored}(t) = \int_0^t \dot{m}_{HTF} c_{p,HTF} \left[ T_{f,in}(t') - T_{f,out}(t') \right] dt'$$

dan efektivitas *discharging* terhadap kebutuhan proses:

$$\eta_{dis} = \frac{\int_0^{t_{dis}} \dot{Q}_{proc}(t) dt}{Q_{stored}}$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri dari unit LHTES yang dimodelkan Toloza et al. (2026) mengikuti SOP terstruktur sebagai berikut:

**Tahap 1 – Karakterisasi Termal PCM.** Pengukuran *Differential Scanning Calorimetry* (DSC) untuk menentukan $T_m$, $L$, dan kurva $c_p(T)$. Kalibrasi model menggunakan data eksperimental pada *test bench* mini-LHTES berskala laboratorium (D = 50 mm, L = 300 mm).

**Tahap 2 – Desain Geometri Shell-and-Tube.** Penentuan jumlah tabung $N_t$, panjang $L_{unit}$, dan diameter *shell* $D_s$ melalui korelasi kekompakan volumetrik $\beta = V_{PCM}/(V_{unit}) \geq 0{,}70$ dan kendala pressure drop HTF $\Delta P \leq 50$ kPa. Untuk aplikasi industri tipikal ($\dot{Q}_{proc} = 100$ kW pada 222°C), diperoleh $N_t = 37$ tabung (susunan triangular pitch), $D_i = 20$ mm, $L_{unit} = 2{,}5$ m.

**Tahap 3 – Implementasi Numerik dalam Modelica.** Pembangunan model multi-domain dengan pustaka `Modelica.Fluid` untuk HTF dan `Modelica.Thermal.HeatTransfer` untuk konduksi 2-D PCM. Diskretisasi *finite volume* dengan $\Delta r = 5$ mm dan $\Delta z = 50$ mm, menghasilkan ~4000 *control volumes*. Solver yang digunakan adalah CVode atau Dassl dengan toleransi relatif $10^{-6}$.

**Tahap 4 – Kalibrasi dan Validasi.** Bandingkan profil suhu eksit HTF model dengan data eksperimen. Kriteria konvergensi: *root mean square error* (RMSE) $\leq 1{,}5$ K pada $T_{f,out}$ dan $\leq 5\%$ pada *state of charge* (SoC).

**Tahap 5 – Integrasi dengan HTHP.** Sambungan seri unit LHTES dengan kondensor HTHP menggunakan *control valve* tiga-arah dan *bypass line*. Sistem kontrol PLC/SCADA memantau SoC, suhu *charging inlet*, dan laju aliran HTF untuk operasi adaptif.

**Tahap 6 – Commissioning dan Monitoring Jangka Panjang.** Pengujian *thermal cycling* minimal 50 siklus *charge-discharge* penuh untuk validasi degradasi termo-mekanis (kemungkinan delaminasi, retak, atau *subcooling* PCM). Sensor T (tipe K) minimal 12 titik pada inlet, outlet, dan 4 ketinggian aksial unit.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Spesifikasi Unit dan Input Parameter

Pertimbangkan unit LHTES untuk industri pengolahan makanan skala menengah dengan profil operasi berikut:

| Parameter | Nilai | Satuan |
|---|---|---|
| Daya proses rata-rata $\dot{Q}_{proc}$ | 100 | kW |
| Suhu proses target $T_{proc}$ | 222 | °C |
| PCM eutektik (simulasi: campuran nitrat) | | |
| Titik leleh $T_m$ | 222 | °C |
| Kalor laten $L$ | 220 | kJ/kg |
| $c_{p,s}$ (padat) | 1,55 | kJ/kg·K |
| $c_{p,l}$ (cair) | 1,80 | kJ/kg·K |
| $\rho_{PCM}$ | 1.900 | kg/m³ |
| $k_{PCM}$ (padat) | 0,65 | W/m·K |
| $k_{PCM}$ (cair) | 0,55 | W/m·K |
| HTF (sintetik termal, *thermocinol* 55 simulasi) | | |
| $c_{p,HTF}$ | 2,30 | kJ/kg·K |
|