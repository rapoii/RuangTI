# 1529 — Model Numerik Transien Unit Penyimpanan Energi Termal Panas Laten (~222°C) untuk Integrasi dengan Pompa Panas Suhu Tinggi (HTHP)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump*
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *Prospects of heat pump for thermal energy decarbonization*, *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri merupakan kontributor terbesar permintaan energi termal bersuhu menengah–tinggi (100–400 °C), mencakup proses pengeringan, sterilisasi, pemanasan fluida proses, distilasi, dan reaksi kimia endotermik. Menurut Xu dan Wang (2024) dalam *The Innovation Energy* (DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)), elektrifikasi termal melalui *high-temperature heat pumps* (HTHPs) merupakan salah satu pilar dekarbonisasi paling prospektif karena mampu menaikkan kalor pada suhu tinggi dengan *Coefficient of Performance* (COP) yang masih signifikan, menggantikan boiler berbasis gas alam. Namun, operasi HTHP sangat sensitif terhadap profil beban termal yang fluktuatif; ketika permintaan proses turun, HTHP harus melakukan *cascading down* atau *defrosting*, menurunkan efisiensi termodinamika sistem secara keseluruhan.

Di sinilah unit *Latent Heat Thermal Energy Storage* (LHTES) berperan sebagai *buffer* termal. Toloza, Payá, dan Barceló (2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) menekankan bahwa integrasi LHTES dengan HTHP memungkinkan unit beroperasi pada kondisi desain optimal dengan pembebanan konstan, sementara fluktuasi kebutuhan proses diserap/dilepaskan oleh PCM. Tantangan fundamentalnya adalah konduktivitas termal PCM yang rendah — pada kisaran 0,2–1,0 W/(m·K) untuk garam eutektik dan garam hidrat — sehingga geometri penukar panas harus dioptimasi.

Makalah Toloza et al. (2026) mengangkat isu operasional spesifik pada ambang 222 °C, suhu yang relevan untuk proses industri makanan (sterilisasi UHT), tekstil (*dyeing*), kimia halus, dan plastik. Material fasa-ubah yang digunakan adalah **campuran eutektik nitrat** (umumnya berbasis NaNO₃–KNO₃ atau ternary dengan Ca(NO₃)₂) yang memiliki titik lebur ±222 °C, densitas energi volumetrik tinggi (≈250–350 kWh/m³), dan stabilitas siklik yang mumpuni. Konfigurasi *shell-and-tube* dipilih karena kekompakan, robustness struktural, dan kapasitas peningkatan perpindahan panas melalui internal finning atau metal wool/foam. Urgensi industrial-ekonominya adalah menurunkan *levelized cost of stored energy* (LCOSE) sehingga payback period integrasi HTHP+LHTES dapat dipangkas menjadi di bawah 5 tahun.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Transien dengan Perubahan Fasa (Model Enthalpy)

Untuk pemodelan PCM pada suhu di sekitar titik lebur $T_m$, persamaan energi transien dalam formulasi enthalpi ditulis sebagai:

$$\rho \, \frac{\partial h}{\partial t} = \nabla \cdot \bigl( k(T) \, \nabla T \bigr)$$

di mana $h$ adalah entalpi spesifik yang mencakup kontribusi fasa-sensibel dan laten:

$$h(T) = \int_{T_{ref}}^{T} c_{p,s}(T') \, dT' + f(T) \cdot L$$

dengan $f(T)$ adalah *liquid fraction* yang dimodelkan secara *smooth* menggunakan fungsi Gaussian atau *smeared* Heaviside:

$$f(T) = \frac{1}{2}\left(1 + \mathrm{erf}\!\left(\frac{T - T_m}{\Delta T_{mushy}}\right)\right)$$

dengan $\Delta T_{mushy}$ = lebar zona *mushy* (transisi padat–cair) ≈ 2–5 K.

### 2.2 Konduktivitas Termal Efektif pada Zona Mushy

Untuk menghindari singularitas pada $T = T_m$, Toloza et al. (2026) menggunakan pendekatan *enthalpy-porosity* dengan permeabilitas sebagai fungsi $f$:

$$K = K_0 \cdot \frac{f^3 + \varepsilon}{(1-f)^3 + \varepsilon}$$

sehingga kecepatan konveksi alami pada PCM cair direpresentasikan melalui persamaan momentum Brinkman:

$$\rho \left(\frac{\partial \vec{u}}{\partial t} + \vec{u}\cdot\nabla \vec{u}\right) = -\nabla p + \mu \nabla^2 \vec{u} + \rho \vec{g}\beta(T-T_{ref}) - A_{mush}\frac{(1-f)^2}{f^3+\varepsilon}\vec{u}$$

### 2.3 Neraca Energi pada Konfigurasi Shell-and-Tube

Untuk fluida heat transfer (HTF) yang mengalir di dalam tube, neraca 1-D transien pada arah aksial $z$:

$$\rho_f c_{p,f} A_f \frac{\partial T_f}{\partial t} + \dot{m} c_{p,f}\frac{\partial T_f}{\partial z} = h_{in} \, \pi D_{in} (T_{w,int} - T_f)$$

di mana $T_{w,int}$ adalah suhu dinding tube sisi dalam dan $h_{in}$ koefisien konveksi internal (Dittus–Boelter untuk turbulen):

$$h_{in} = 0.023 \, \mathrm{Re}^{0.8} \, \mathrm{Pr}^{0.4} \cdot \frac{k_f}{D_{in}}$$

Perpindahan radial dari dinding ke PCM mengikuti resistansi seri:

$$\frac{1}{U_{eff}} = \frac{1}{h_{in}} + \frac{\ln(D_{o}/D_{in})}{2\pi k_{wall} L} + \frac{1}{h_{pcm,eff}}$$

### 2.4 Bilangan Tak Berdimensen untuk Desain

- **Biot Number** $\mathrm{Bi} = \frac{U_{eff} \cdot R_o}{k_{pcm}}$ — mengindikasikan keseragaman suhu dalam PCM.
- **Fourier Number** $\mathrm{Fo} = \frac{\alpha_{pcm} \, t}{R_o^2}$
- **Stefan Number** $\mathrm{Ste} = \frac{c_{p,l} (T_{h,in} - T_m)}{L}$
- **Modified Stefan Number** $\mathrm{Ste}^* = \mathrm{Ste} \cdot \mathrm{Fo}^{-1/2}$ untuk analisis front moving.

### 2.5 Coupling HTHP–LHTES pada Level Sistem

Pada integrasi HTHP, kapasitas termal sesaat LHTES menjadi *sink* selama charging dan *source* selama discharging. Efek buffer dimodelkan sebagai:

$$\dot{Q}_{HTHP}(t) = \dot{Q}_{proc}(t) + \dot{Q}_{store}(t)$$

dengan $\dot{Q}_{store} > 0$ saat charging dan $\dot{Q}_{store} < 0$ saat discharging. *State of Charge* (SOC) termal:

$$\mathrm{SOC}(t) = \frac{\int_{V_{pcm}} \rho \, h(T(\vec{x},t)) \, dV}{M_{pcm} \cdot h_{tot,ref}}$$

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

### 3.1 Arsitektur Simulasi Modelica (Toloza et al., 2026)

1. **Pre-Processing — Karakterisasi PCM**: Pengukuran DSC (*Differential Scanning Calorimetry*) untuk $L$, $c_p$, $T_m$, dan lebar zona transisi. Parameter dimasukkan ke *record* thermophysical.
2. **Geometri Tube-Shell**: Pembagian diskritisasi — tube inner diameter $D_{in}=20$ mm, $D_o=25$ mm, shell ID 200 mm, panjang aktif $L=1{,}5$ m. Jumlah tube sesuai triangular pitch 30 mm.
3. **Discretization**: 1-D *finite volume* aksial pada HTF (50 sel) + 2-D aksial-radial pada PCM (10×40 sel) menggunakan koordinat silinder.
4. **Numerical Solver**: Integrasi eksplisit Euler dengan time-step adaptif $\Delta t \le \frac{\mathrm{Fo}_{max}}{4}$ untuk menjamin stabilitas CFL.
5. **Validation**: Benchmarking terhadap solusi analitik Neumann untuk geometri planar dan semi-analitik London & Seban untuk PCM tube.

### 3.2 Diagram Alir SOP Integrasi HTHP–LHTES

```
[Pengukuran Beban Proses] → [Profil Q_proc(t), T_proc(t)]
         │
         ▼
[Estimasi Kapasitas Buffer] → E = max(|∫(Q_HTHP_opt - Q_proc) dt|)
         │
         ▼
[Sizing PCM: M_pcm = E / (η_sys · h_tot)] → [Volume Shell]
         │
         ▼
[Simulasi Transien Modelica] → [Validasi SOC(t), T_pcm_max, t_charge]
         │
         ▼
[Analisis Ekonomi: LCOSE vs. Boiler baseline]
         │
         ▼
[Implementasi & Commissioning]
```

### 3.3 Parameter Operasi Desain

| Parameter | Nilai Desain |
|---|---|
| Titik lebur PCM | 222 °C |
| Laten fusion $L$ | 180 kJ/kg |
| $c_{p,solid}$ / $c_{p,liquid}$ | 1,55 / 1,70 kJ/(kg·K) |
| $k_{pcm}$ padat / cair | 0,95 / 0,55 W/(m·K) |
| Densitas PCM ρ | 1.900 kg/m³ |
| HTF masuk (charging) | 260 °C, ṁ = 0,8 kg/s |
| HTF keluar (discharging) | 195 °C, ṁ = 0,8 kg/s |
| Jumlah tube | 7 (1 central + 6 hexagonal) |
| $\Delta P$ tube target | ≤ 25 kPa |

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Skenario Kasus

Sebuah pabrik kimia halus membutuhkan uap proses 230 °C dengan beban rata-rata 180 kW selama 8 jam, namun dengan puncak 240 kW (4 jam pagi, 4 jam sore) dan lembah 130 kW (8 jam malam). HTHP beroperasi optimal pada 200 kW konstan. Unit LHTES dengan PCM eutektik $T_m=222$ °C digunakan sebagai buffer.

**Langkah 1 — Energi Buffer yang Diperlukan:**

$$E_{buffer} = \int_{lembah}^{puncak} \bigl(Q_{proc}(t) - Q_{HTHP,opt}\bigr)\, dt = (240-200)\,\text{kW} \times 4\,\text{h} = 160\,\text{kWh}$$

Ditambah buffer malam (HTHP mengisi saat lembah):

$$E_{malam} = (200-130)\,\text{kW} \times 4\,\text{h} = 280\,\text{kWh}$$

Total kapasitas simpan: $E_{tot} = 160 + 280 = 440\,\text{kWh}$.

**Langkah 2 — Massa PCM yang Diperlukan:**

Energi spesifik efektif per kg PCM pada siklus 195–260 °C mencakup sensibel dan laten:

$$h_{eff} = c_{p,s}(T_m-T_{cold}) + L + c_{p,l}(T_{hot}-T_m)$$
$$h_{eff} = 1{,}55 \times 27 + 180 + 1{,}70 \times 38 = 41{,}85 + 180 + 64{,}6 = 286{,}45\,\text{kJ/kg}$$

Asumsi efisiensi round-trip $\eta_{rt}=0{,}85$ (losses + GR gradien):

$$M_{pcm} = \frac{E_{tot}}{\eta_{rt} \cdot h_{eff}/3600} = \frac{440}{0{,}85 \times 286{,}45/3600} = \frac{440}{0{,}06764} = 6.504\,\text{kg}$$

**Langkah 3 — Volume PCM dan Dimensi Shell:**

$$V_{pcm} = \frac{M_{pcm}}{\rho_{pcm}} = \frac{6.504}{1.900} = 3{,}42\,\text{m}^3$$

Shell dengan panjang 1,5 m dan diameter 1,7 m berisi shell-side PCM, volume tersedia:

$$V_{shell} = \pi \times (0{,}85)^2 \times 1{,}5 - 7 \times \pi \times (0{,}0125)^2 \times 1{,}5 \approx 3{,}40\,\text{m}^3$$

Cocok dengan target densitas packing ~95