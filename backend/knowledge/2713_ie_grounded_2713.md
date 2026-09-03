# 2713 — Pemodelan Numerik Transient Unit Penyimpanan Energi Termal Panas Laten (LHTES) pada Suhu ±222°C untuk Integrasi dengan Pompa Kalor Suhu Tinggi (HTHP) dalam Konteks Dekarbonisasi Energi Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri merupakan konsumen akhir energi terbesar di dunia, di mana sekitar 25% dari konsumsi energi global digunakan untuk memenuhi kebutuhan *process heat* (panas proses) pada rentang suhu 150–400°C (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Desentralisasi sumber energi termal, elektrifikasi proses termal melalui *High-Temperature Heat Pumps* (HTHPs), serta integrasi dengan sistem *Latent Heat Thermal Energy Storage* (LHTES) merupakan pilar strategis dekarbonisasi sektor panas proses. Urgensi ini terutama muncul pada industri kimia, makanan & minuman, tekstil, dan logam, di mana fluktuasi harga energi listrik serta kebutuhan *peak shaving* menjadi tantangan operasional yang signifikan.

Toloza, Payá, dan Barceló (2026) menekankan bahwa salah satu bottleneck utama integrasi HTHP–LHTES adalah konduktivitas termal rendah dari material perubahan fasa (*Phase Change Material*/PCM), yang umumnya berada pada rentang 0,2–1,0 W/(m·K) untuk garam nitrat eutektik. Untuk mengatasinya, geometri *shell-and-tube* dipilih karena tingkat kekompakan tinggi, robust secara struktural, dan kapasitas *thermal enhancement* yang fleksibel melalui penggunaan *fins*, *metal foams*, maupun *metal wools*. Dalam konteks dekarbonisasi yang diajukan Xu & Wang (2024), LHTES berfungsi sebagai buffer termal yang menyeimbangkan antara *dispatchable* output HTHP dan beban termal intermiten dari proses industri, sehingga *Coefficient of Performance* (COP) sistem dapat ditingkatkan melalui operasi HTHP pada kondisi *steady-state* mendekati desain.

Secara ekonomis, integrasi HTHP–LHTES memungkinkan pergeseran operasi termal dari listrik *peak hour* (tarif tinggi) ke *off-peak hour* melalui *charge-discharge scheduling*, sekaligus menurunkan kapasitas terpasang (*peak demand charge*) dan utilisasi kapasitas produksi. Analisis transien pada unit LHTES menjadi krusial karena fenomena *phase change* PCM selama *melting-solidification* menghasilkan perilaku termal non-linear yang tidak dapat diprediksi oleh model *steady-state* konvensional.

## 2. Landasan Teori & Formulasi Matematis

Pemodelan transient LHTES *shell-and-tube* yang dikembangkan oleh Toloza et al. (2026) menggunakan bahasa Modelica dengan pendekatan numerik *enthalpy-porosity* atau *apparent heat capacity* untuk menangkap front fasa bergerak selama proses *charge* dan *discharge*.

### 2.1 Persamaan Konservasi Energi pada PCM

Untuk domain PCM yang mengalami perubahan fasa, persamaan konservasi energi transient dalam koordinat silindris adalah:

$$\rho_{PCM} \cdot \frac{\partial h}{\partial t} = \frac{1}{r} \frac{\partial}{\partial r} \left( k_{PCM} \cdot r \cdot \frac{\partial T}{\partial r} \right) + \frac{1}{r^2} \frac{\partial}{\partial \theta} \left( k_{PCM} \cdot \frac{\partial T}{\partial \theta} \right) + \frac{\partial}{\partial z} \left( k_{PCM} \cdot \frac{\partial T}{\partial z} \right)$$

di mana $\rho_{PCM}$ adalah densitas PCM, $h$ adalah entalpi spesifik, $k_{PCM}$ adalah konduktivitas termal, dan $T$ adalah suhu lokal. Asumsi Boussinesq dan aksisimetri 2D diterapkan untuk menyederhanakan computational cost.

### 2.2 Metode Kapasitas Panas Semu (*Apparent Heat Capacity Method*)

Untuk menghindari tracking front fasa eksplisit, digunakan fungsi *smoothed apparent heat capacity*:

$$C_{app}(T) = C_{s}(T) + \frac{L}{\Delta T_{mush}} \cdot f(T)$$

di mana $L$ adalah latent heat of fusion PCM, $\Delta T_{mush}$ adalah lebar zona *mushy* (tipikal 1–2 K untuk garam nitrat), dan $f(T)$ adalah fungsi transisi fasa. Untuk PCM eutektik nitrat pada $T_m \approx 222°C$, $L \approx 160\text{–}180 \text{ kJ/kg}$, $C_s \approx 1,5 \text{ kJ/(kg·K)}$.

### 2.3 Persamaan Energi pada *Heat Transfer Fluid* (HTF)

Untuk HTF yang mengalir dalam tube:

$$\rho_{HTF} \cdot c_{p,HTF} \cdot \frac{\partial T_f}{\partial t} + \rho_{HTF} \cdot c_{p,HTF} \cdot u_z \cdot \frac{\partial T_f}{\partial z} = \frac{k_{HTF}}{r} \frac{\partial}{\partial r}\left( r \frac{\partial T_f}{\partial r} \right)$$

dengan kecepatan $u_z$ pada regime turbulen atau laminar sesuai bilangan Reynolds.

### 2.4 Bilangan Non-Dimensional Kunci

Karakteristik proses *charge-discharge* dievaluasi melalui tiga bilangan non-dimensional:

$$\text{Bilangan Stefan:} \quad Ste = \frac{c_{p,s} \cdot (T_{HTF,in} - T_m)}{L}$$

$$\text{Bilangan Fourier:} \quad Fo = \frac{\alpha_{PCM} \cdot t}{R_{PCM}^2}$$

$$\text{Bilangan Biot:} \quad Bi = \frac{h_{eff} \cdot R_{PCM}}{k_{PCM}}$$

di mana $\alpha_{PCM} = k_{PCM}/(\rho_{PCM} \cdot c_{p,PCM})$ adalah difusivitas termal, $R_{PCM}$ adalah radius efektif PCM dalam shell, dan $h_{eff}$ adalah koefisien perpindahan panas efektif di interface tube-PCM.

### 2.5 Korelasi Perpindahan Panas *Shell-and-Tube*

Untuk konveksi HTF di dalam tube (Gnielinski correlation pada $Re > 10^4$):

$$Nu = \frac{(f/8)(Re - 1000)Pr}{1 + 12,7\sqrt{f/8}(Pr^{2/3} - 1)}$$

dengan $f = (0,79 \ln Re - 1,64)^{-2}$, menghasilkan $h_{HTF} \approx 1500\text{–}3000 \text{ W/(m}^2\text{·K)}$ untuk thermal oil pada $Re \sim 10^4$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis unit LHTES untuk integrasi HTHP mengikuti alur rekayasa berlapis yang diadopsi dari metodologi Toloza et al. (2026) dan best practices industri termal:

**Tahap 1 — Karakterisasi PCM dan Seleksi Material.** Dilakukan *Differential Scanning Calorimetry* (DSC) untuk menentukan $T_m$, $L$, dan $\Delta T_{mush}$. Kandidat PCM eutektik nitrat (misalnya campuran ternary $\text{KNO}_3\text{-NaNO}_3\text{-LiNO}_3$) pada $T_m \approx 222°C$ dipilih karena stabilitas termal hingga 500°C dan kompatibilitas dengan baja karbon.

**Tahap 2 — Desain Geometri Shell-and-Tube.** Rasio geometrik optimum mengikuti constraint:
- $L_{tube}/D_{tube} \in [10, 20]$
- $D_{shell}/D_{tube,outer} \in [2, 4]$
- Baffle spacing $L_B = 0,5 \cdot D_{shell}$

**Tahap 3 — *Thermal Enhancement*.** Konduktivitas efektif PCM ditingkatkan melalui *metal foam* (porositas 0,9–0,95, PPI 10–40) atau *metal wool* yang meningkatkan $k_{eff}$ hingga 5–10× konduktivitas intrinsik PCM.

**Tahap 4 — Pembangunan Model Numerik Transient.** Bahasa Modelica digunakan dengan library *Thermal-Fluid-ThermalStorage* untuk menyelesaikan PDE konservasi energi secara coupled. Diskretisasi: elemen hingga 2D aksisimetris, $\Delta r \leq 2$ mm, $\Delta z \leq 10$ mm, time-step adaptif $\Delta t \in [0,1; 5]$ s.

**Tahap 5 — Validasi Eksperimental.** Data eksperimental *charge-discharge* dari *test rig* dibandingkan dengan simulasi melalui *Root Mean Square Error* (RMSE) pada suhu tengah PCM. Target validasi: RMSE $< 5\%$.

**Tahap 6 — Integrasi dengan HTHP dan *Control Logic*.** Skema kontrol PID mengatur laju alir HTF pada mode *charge* (HTHP → LHTES) dan mode *discharge* (LHTES → beban proses) berdasarkan setpoint suhu proses.

**Tahap 7 — Analisis Exergi dan Ekonomi.** Perhitungan *Second-Law Efficiency* $\eta_{II}$ dan *Levelized Cost of Storage* (LCOS) untuk justifikasi investasi.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Unit LHTES untuk industri kimia farmasi dengan beban termal 500 kW pada suhu 220°C, beroperasi 16 jam/hari, didukung HTHP berskala 350 kW thermal.

### 4.1 Parameter Input Desain

| Parameter | Nilai | Satuan |
|---|---|---|
| PCM | Eutektik nitrat | — |
| $T_m$ | 222 | °C |
| $L$ | 170 | kJ/kg |
| $\rho_{PCM}$ | 1850 | kg/m³ |
| $c_{p,s}$ | 1,55 | kJ/(kg·K)