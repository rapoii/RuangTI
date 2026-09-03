# 2809 — Pemodelan Numerik Transien Unit Penyimpanan Energi Termal Panas Laten pada Suhu ~222°C untuk Integrasi dengan Pompa Kalor Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *Prospects of heat pump for thermal energy decarbonization*. *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri merupakan kontributor terbesar konsumsi energi termal tingkat menengah hingga tinggi (100–400 °C) di Uni Eropa, dengan pangsa mencapai hampir 50% dari total kebutuhan energi akhir manufaktur. Proses-proses seperti steam stripping, sterilisasi, pengeringan, dan reaksi kimia endotermik membutuhkan suplai panas stabil pada rentang suhu yang selama ini dipenuhi oleh boiler berbahan bakar fosil (Toloza et al., 2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)). Dekarbonisasi proses termal industri mensyaratkan dua pilar teknologi: (1) **High-Temperature Heat Pump (HTHP)** sebagai *prime mover* elektrik yang menggantikan tungku pembakaran, dan (2) **Latent Heat Thermal Energy Storage (LHTES)** sebagai buffer termal yang menyeimbangkan profil beban intermiten dengan profil operasi HTHP. Xu & Wang (2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)) menyoroti bahwa volatilitas tarif listrik dan *time-of-use pricing* menjadi justifikasi ekonomis kuat bagi penyimpanan termal sebagai komponen *demand-side flexibility*.

Dalam konteks tersebut, Toloza, Payá, dan Barceló (2026) mempresentasikan model numerik transien unit LHTES *shell-and-tube* vertikal yang beroperasi pada suhu sekitar 222 °C menggunakan campuran eutectic nitrat sebagai Phase Change Material (PCM). Kontribusi utama paper ini terletak pada tiga aspek: (a) pemilihan arsitektur *shell-and-tube* yang menawarkan kekompakan volumetrik tinggi dan ketahanan struktural terhadap siklus termal berulang, (b) implementasi model dalam bahasa **Modelica** yang memungkinkan *acausal modeling* sehingga integrasi dengan model HTHP menjadi plug-and-play, dan (c) eksplisit mengakui keterbatasan konduktivitas termal PCM (umumnya 0,5–1,5 W/m·K untuk garam nitrat) sehingga desain geometri heat exchanger menjadi variabel keputusan kritis. Konteks industri riil—misalnya pabrik makanan & minuman, tekstil finishing, atau kimia dasar—menuntut densitas energi volumetrik tinggi yang hanya dapat dipenuhi oleh PCM laten, bukan sensibel water tank. Urgensi rekayasa industri pada modul ini adalah bagaimana menerjemahkan model transien tersebut menjadi keputusan desain dan operasi pabrik yang terukur (kapasitas charge/discharge, dimensi tangki, luas permukaan perpindahan panas, dan tekanan pompa HTF).

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Formulasi Energi dengan Metode Enthalpy

Untuk PCM yang mengalami perubahan fasa padat–cair, persamaan energi transien paling stabil secara numerik ditulis dalam formulasi entalpi (enthalpy formulation), bukan formulasi suhu murni, karena menghindari diskontinuitas pada kapasitas panas selama fasa perubahan:

$$\rho_{PCM} \cdot \frac{\partial h}{\partial t} = \nabla \cdot \left( k_{eff} \cdot \nabla T \right) + \dot{q}_{PCM}$$

Di mana:
- $\rho_{PCM}$ = densitas PCM (kg/m³)
- $h$ = entalpi spesifik (J/kg)
- $k_{eff}$ = konduktivitas termal efektif (W/m·K), mempertimbangkan konveksi natural di zona cair
- $\dot{q}_{PCM}$ = sumber panas volumetric (W/m³)

Entalpi total $h$ didekomposisi menjadi:

$$h(T) = \int_{T_{ref}}^{T} c_{p,solid}(T') \, dT' + L \cdot f(T) + \int_{T_{m}+\Delta T/2}^{T} c_{p,liquid}(T') \, dT'$$

Dengan $L$ sebagai panas laten (J/kg) dan $f(T)$ adalah *liquid fraction* yang selama proses melting/solidification dimodelkan linear:

$$f(T) = \begin{cases} 0, & T < T_{m} - \Delta T/2 \\ \dfrac{T - (T_{m} - \Delta T/2)}{\Delta T}, & T_{m} - \Delta T/2 \leq T \leq T_{m} + \Delta T/2 \\ 1, & T > T_{m} + \Delta T/2 \end{cases}$$

Untuk eutektik nitrat di sekitar 222 °C, lebar interval fasa $\Delta T$ sekitar 5–10 K, dengan $L \approx 100\text{–}150$ kJ/kg.

### 2.2 Perpindahan Panas pada Konfigurasi Shell-and-Tube

Laju perpindahan panas antara HTF di dalam tube dan PCM di shell dirumuskan melalui koefisien overall heat transfer:

$$\frac{1}{U_o} = \frac{D_i}{D_o \cdot h_i} + \frac{D_i \cdot \ln(D_o/D_i)}{2 k_{tube}} + \frac{1}{h_{o,PCM}}$$

Dimana:
- $U_o$ = koefisien overall berdasarkan diameter luar tube (W/m²·K)
- $h_i$ = koefisien konveksi internal HTF (Dittus-Boelter): $Nu_i = 0.023 \cdot Re^{0.8} \cdot Pr^{0.4}$
- $k_{tube}$ = konduktivitas material tube (stainless steel 316L ≈ 16 W/m·K)
- $h_{o,PCM}$ = koefisien konveksi PCM di shell, biasanya $5\text{–}40$ W/m²·K karena diperkuat oleh *natural convection* dan potensi *metal foam/wool*

### 2.3 Persamaan Energi HTF (Tube-side, 1D)

Asumsi plug-flow dengan aksial dispersion diabaikan untuk Reynolds > 10 000:

$$\rho_{HTF} \cdot c_{p,HTF} \cdot A_c \cdot \frac{\partial T_{HTF}}{\partial t} + \dot{m}_{HTF} \cdot c_{p,HTF} \cdot \frac{\partial T_{HTF}}{\partial z} = U_o \cdot \pi D_o \cdot (T_{PCM}(z,t) - T_{HTF}(z,t))$$

### 2.4 Coupling dengan Model HTHP

Saat unit LHTES discharge, suhu masuk HTF $T_{HTF,in}$ ditentukan oleh evaporator HTHP (untuk charging, kondenser HTHP). Model integrated mengkuplik dua subdomain ini melalui variabel aliran massa $\dot{m}_{HTF}$ dan port termal sesuai standar **Modelica.Thermal.HeatTransfer** (Toloza et al., 2026).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industrial unit LHTES untuk integrasi HTHP mengikuti prosedur rekayasa 7-tahap berikut:

**Tahap 1 – Karakterisasi Beban Termal.** Audit proses industri menghasilkan profil $Q_{demand}(t)$ harian (24-jam × 365-hari) dalam satuan kWh. Kapasitas storage dirancang untuk menutupi jendela defisit saat HTHP beroperasi pada kapasitas parsial (misalnya tarif listrik puncak siang hari).

**Tahap 2 – Seleksi PCM.** Kriteria: (i) suhu fasa di antara $T_{evap}$ dan $T_{cond}$ HTHP, (ii) panas laten tinggi (>100 kJ/kg), (iii) stabilitas siklus >3000, (iv) kompatibilitas kimia dengan material containment. Untuk aplikasi 222 °C, kandidat utama adalah eutektik $NaNO_3$–$KNO_3$ (Solar Salt, mp ≈ 220 °C, L ≈ 100 kJ/kg) dan $KNO_3$–$KCl$.

**Tahap 3 – Desain Geometri Shell-and-Tube.** Iterasi desain dilakukan terhadap tiga variabel keputusan: diameter tube $D_o$, panjang tube $L_t$, dan jumlah tube $N_t$. Constraint: $\dot{Q} = U_o \cdot A_o \cdot LMTD$ harus memenuhi kapasitas target dengan LMTD realistis 15–40 K.

**Tahap 4 – Pemodelan Numerik Transien dalam Modelica.** Mengikuti Toloza et al. (2026), digunakan pustaka `ThermalEnergyStorage.Components.LHTES` yang dibangun di atas `Modelica.Fluid` dan `Modelica.Thermal`. Persamaan PDE didiskretisasi dengan metode volume hingga (volume-of-fluid approach untuk tracking zona padat/cair).

**Tahap 5 – Validasi Eksperimental.** Unit prototipe diuji pada *test rig* dengan protokol charge–discharge pada tiga laju alir HTF berbeda (0,5; 1,0; 1,5 kg/s). Perbandingan kurva T(t) hasil model dan eksperimen harus menghasilkan RMSE < 3% untuk iterasi sign-off desain.

**Tahap 6 – Integrasi Plant-wide.** Unit LHTES dihubungkan dengan HTHP melalui sistem kontrol DCS (Distributed Control System) dengan strategi *MPC (Model Predictive Control)* yang menggunakan model Modelica sebagai *digital twin*. Standar referensi: ISO 50001 (Energy Management) dan EN 12977 untuk instalasi termal.

**Tahap 7 – Commissioning & Monitoring.** Pengujian FAT (Factory Acceptance Test) dan SAT (Site Acceptance Test), dilanjutkan *continuous monitoring* SOC (State of Charge) termal: $SOC(t) = \frac{h(t) - h_{min}}{h_{max} - h_{min}}$.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Spesifikasi Desain

Sebuah pabrik kimia kecil di Eropa membutuhkan suplai uap 200 °C untuk proses distilasi batch dengan kebutuhan harian 8 MWh_th pada jam 06:00–18:00. HTHP beroperasi malam hari (tarif rendah) mengisi LHTES.

**Parameter desain:**
- PCM: Solar Salt ($60\%$ $NaNO_3$ + $40\%$ $KNO_3$), $T_m = 220$ °C, $L = 110$ kJ/kg, $\rho = 1870$ kg/m³, $c_{p,solid} = 1,50$ kJ/kg·K, $c_{p,liquid} = 1,60$ kJ/kg·K
- Tube: stainless steel 316L, $D_o = 25,4$ mm, $D_i = 21,6$ mm, $k_{tube} = 16$ W/m·K, $L_t = 3,0$ m, $N_t = 120$
- HTF: Thermal oil (Therminol 66), $T_{in,charge} = 240$ °C, $\dot{m} = 1,2$ kg/s

### 4.2 Perhitungan Densitas Energi dan Kapasitas

Energi sensibel + laten per kg PCM antara 195 °C (padat) dan 245 °C (cair):

$$Q_{sens,solid} = c_{p,solid} \cdot (T_m - T_{min}) = 1{,}50 \cdot 25 = 37{,}5 \text{ kJ/kg}$$

$$Q_{latent} = L = 110 \text{ kJ/kg}$$

$$Q_{sens,liquid} = c_{p,liquid} \cdot (T_{max} - T_m) = 1{,}60 \cdot 25 = 40{,}0 \text{ kJ/kg}$$

$$Q_{total} = 37{,}5 + 110 + 40{,}0 = 187{,}5 \text{ kJ/kg}$$

Kebutuhan massa PCM untuk target 8 MWh dengan asumsi 85% utilasi efektif:

$$m_{PCM} = \frac{8.000 \text{ kWh} \cdot 3600 \text{ kJ/kWh}}{187{,}5 \cdot 0{,}85} = \