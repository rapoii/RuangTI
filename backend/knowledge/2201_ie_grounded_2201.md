# 2201 — Model Numerik Transien Unit Penyimpanan Energi Termal Panas Laten pada Suhu ~222°C untuk Integrasi dengan Pompa Panas Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Transient numerical model of a latent heat thermal energy storage unit at around 222°C for its integration with a high-temperature-heat-pump*
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu & Ruzhu Wang (2024). *Prospects of heat pump for thermal energy decarbonization*, *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri merupakan konsumen energi termal terbesar di Uni Eropa, dengan proporsi sekitar 24% dari total kebutuhan energi final dan menyumbang emisi CO₂ lebih dari 900 juta ton per tahun (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Lebih dari separuh kebutuhan termal industri tersebut berada pada rentang suhu sedang–tinggi (100–250°C) yang digunakan untuk proses pengeringan kertas, pasteurisasi, pemasakan makanan, distilasi kimia, dan produksi uap proses. Decarbonisasi pada rentang suhu ini sangat menantang karena elektrifikasi langsung menggunakan resistif heater memiliki efisiensi eksergetik rendah, sedangkan boiler bahan bakar fosil masih mendominasi (>75% pasar di banyak negara). Dalam konteks inilah *High-Temperature Heat Pump* (HTHP) muncul sebagai teknologi disruptif yang mampu menaikkan suhu sumber panas (misal limbah panas 60°C) menjadi output 150–250°C dengan *Coefficient of Performance* (COP) 2,5–4,5, sehingga menggantikan konsumsi gas alam secara langsung (Xu & Wang, 2024).

Akan tetapi, operasi HTHP memiliki karakteristik fluktuatif: debit termal output bergantung pada suhu kondensasi dan beban evaporator, sementara permintaan industri umumnya bersifat *batch*, periodik, atau *peak-load* (misal pabrik makanan beroperasi dua shift dengan konsumsi puncak saat start-up). Tanpa penyangga termal, sistem HTHP harus di-*oversize* atau di-backup oleh boiler fosil. Toloza, Payá, dan Barceló (2026) dalam makalah yang dipublikasikan di *Eurotherm Seminar #119* mengusulkan integrasi *Latent Heat Thermal Energy Storage* (LHTES) berbasis PCM (*Phase Change Material*) sebagai buffer termal kompak (DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)). LHTES menyimpan energi pada suhu hampir konstan (fasa perubahan) sehingga densitas energi volumetriknya 5–10 kali lebih tinggi dibanding *sensible heat storage* (SHS) berbasis air atau minyak termal. Untuk integrasi dengan HTHP pada level 222°C, paper tersebut memilih garam eutektik nitrat (campuran NaNO₃–KNO₃ atau solar-salt yang dimodifikasi) karena memiliki titik lebur presisi pada suhu target, stabilitas termal tinggi (>1000 siklus), biaya bahan baku rendah (~0,5–1,5 €/kg), dan tidak mudah terbakar.

Urgensi teknisnya berkaitan dengan konduktivitas termal PCM yang rendah (0,3–1,0 W/m·K untuk garam nitrat) yang menciptakan *bottleneck* pelepasan kalor secara cepat. Oleh karena itu paper ini memilih konfigurasi *shell-and-tube* karena kekompakan, kekuatan struktural, dan kemudahan retrofit pada plant yang sudah ada. Model numerik transien dikembangkan dalam bahasa Modelica untuk memprediksi perilaku *charge–discharge*, distribusi suhu, dan evolusi *liquid fraction* PCM dalam geometri silinder vertikal dengan HTF (*Heat Transfer Fluid*) mengalir di dalam tube bundle. Pendekatan ini memungkinkan *scale-up* dari skala laboratorium (5–10 kWh) ke unit industri (≥1 MWh) secara sistematis sebelum fabrikasi prototipe mahal dilakukan.

## 2. Landasan Teori & Formulasi Matematis

Model transien yang dikembangkan Toloza dkk. (2026) menggunakan formulasi **enthalpy-based** dengan *apparent heat capacity method* untuk menghindari diskontinuitas pada antarmuka solid–liquid. Pendekatan ini dipilih karena robust terhadap perubahan fasa dan cocok dengan *solver* Modelica DASSL atau CVODE. Energi total per satuan volum pada kontrol volum PCM didefinisikan sebagai:

$$h(T) = \int_{T_{ref}}^{T} \rho \, c_p(T') \, dT' + \rho \, L \cdot f(T)$$

dengan $f(T)$ adalah *liquid fraction* yang dimodelkan smooth dengan fungsi linier pada interval lebur $[T_s, T_l]$:

$$f(T) = \begin{cases} 0 & T \le T_s \\ \dfrac{T - T_s}{T_l - T_s} & T_s < T < T_l \\ 1 & T \ge T_l \end{cases}$$

Kapasitas panas semu (*apparent heat capacity*) diperoleh dengan menurunkan $h(T)$ terhadap $T$:

$$C_{ap}(T) = \frac{dh}{dT} = \rho \, c_p(T) + \rho \, L \cdot \frac{df}{dT}$$

sehingga konservasi energi pada geometri silinder (koordinat $r$ dan $z$) menjadi:

$$\rho \, \frac{\partial h}{\partial t} = \frac{1}{r} \frac{\partial}{\partial r}\left(k(T) \, r \, \frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k(T) \, \frac{\partial T}{\partial z}\right) \tag{1}$$

Untuk tube yang berisi HTF, perpindahan kalor digambarkan oleh persamaan energi 1-D konveksi dengan koefisien perpindahan kalor $h_{HTF}$ dari hasil korelasi Nusselt untuk aliran *turbulen* dalam tube:

$$Nu = 0.023 \, Re^{0.8} \, Pr^{0.4} \quad \Rightarrow \quad h_{HTF} = \frac{Nu \, k_{HTF}}{D_i} \tag{2}$$

Resistansi termal total antara HTF dan PCM diperhitungkan melalui *thermal resistance network* seri antara konveksi HTF ($1/h_{HTF}$), konduksi dinding tabung ($ln(D_o/D_i)/(2\pi k_{wall} L)$), dan konduksi efektif PCM (diperoleh dari solusi numerik). Kopling antara tube dan PCM dimodelkan sebagai *source term* linier:

$$q''(r,z,t) = \frac{T_{HTF}(z,t) - T_{PCM}(r_{wall}, z, t)}{R_{wall} + R_{PCM}} \tag{3}$$

Boundary condition di dinding luar shell diasumsikan adiabatik (simetri radial), sementara di outlet tube digunakan kondisi outflow $\partial T / \partial z = 0$. Initial condition adalah PCM pada $T_0 = T_s$ (solid) untuk simulasi *charge*, atau $T_0 = T_l$ (liquid) untuk simulasi *discharge*. Massa jenis dan konduktivitas termal diinterpolasi terhadap *liquid fraction*:

$$k(T) = k_s + (k_l - k_s) \, f(T); \quad \rho(T) = \rho_s + (\rho_l - \rho_s) \, f(T)$$

Validasi model dilakukan dengan membandingkan solusi Modelica terhadap benchmark numerik 1-D dan eksperimen *step-input* pada PCM *erythritol* (T = 118°C) sebagai *cross-check* sebelum diaplikasikan ke PCM 222°C.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis di lapangan mengikuti *Standard Operating Procedure* (SOP) berikut yang dipadukan dengan kerangka **VDI 2164** (German guideline untuk PCM-TES) dan **ISO 17748** untuk sistem pompa panas industri:

**Tahap 1 – Karakterisasi beban termal industri.** Audit energi dilakukan dengan *data logging* suhu, debit massa, dan profil beban minimal 4 minggu untuk mendapatkan histogram duty-cycle, *peak load*, dan *base load*. Outputnya adalah kurva $Q(t)$ (kW) versus $t$ dan target suhu proses.

**Tahap 2 – Seleksi PCM dan HTF.** Berdasarkan target suhu 222°C, dipilih garam eutektik solar-salt termodifikasi ($T_{melt} = 222 \pm 1°C$, $L \approx 160$ kJ/kg) sebagai PCM dan fluida termal Dowtherm A atau Therminol VP-1 sebagai HTF. Parameter ini menjadi input langsung ke model Toloza dkk. (2026).

**Tahap 3 – Desain geometri shell-and-tube.** Diameter shell ($D_s$), panjang ($L_{stor}$), jumlah tube ($N_t$), dan diameter tube ($D_i$, $D_o$) ditentukan dari neraca energi storage:

$$Q_{stor} = m_{PCM} \, L = \rho_{PCM} \, V_{PCM} \, L \approx \rho_{PCM} \, \frac{\pi}{4}(D_s^2 - N_t D_o^2) L_{stor} \, L$$

**Tahap 4 – Build model Modelica.** Diagram pemodelan menggunakan library *ThermalEnergyStorage.Components.PCM* dengan komponen: `Tube` (1-D HTF convection), `PCMShell` (2-D axisymmetric enthalpy), dan `HeatExchangerNTU` untuk coupling. Mesh diskretisasi menggunakan 50 node radial dan 20 node aksial — diverifikasi melalui *grid-independence test*.

**Tahap 5 – Simulasi transien charge/discharge.** Run selama 10.000 s dengan time-step adaptif (1–5 s), lalu ekstrak metrik: *charging time*, *discharging time*, *effective energy density*, dan *exergy efficiency*:

$$\eta_{ex} = 1 - \frac{T_0 \int \dot{S}_{gen} \, dt}{Q_{in}} \tag{4}$$

**Tahap 6 – Validasi & verifikasi.** Bandingkan prediksi model dengan prototipe laboratorium pada skala ≥ 1:10. Toleransi deviasi suhu rata-rata ≤ 5% dan deviasi SOC (state-of-charge) ≤ 8% sebagai *acceptance criterion*.

**Tahap 7 – Integrasi dengan HTHP.** Antarmuka dikendalikan oleh PLC dengan algoritma *hysteresis control*: HTF dialihkan ke storage saat $T_{HTHP,out} > T_{PCM,melt} + \Delta T$ dan ke beban saat demand muncul, dengan $\Delta T = 5$–10 K.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Pabrik makanan di Spanyol membutuhkan 500 kW termal pada suhu 200–230°C untuk proses *sterilisasi UHT* selama 6 jam/hari, dengan HTHP sebagai sumber utama.

**Input parameter (berbasis data Toloza dkk. 2026):**

| Parameter | Nilai | Satuan |
|---|---|---|
| PCM (solar-salt termodifikasi) $\rho_{PCM}$ | 1.890 | kg/m³ |
| $c_{p,s}$ (solid) | 1,55 | kJ/kg·K |
| $c_{p,l}$ (liquid) | 1,70 | k