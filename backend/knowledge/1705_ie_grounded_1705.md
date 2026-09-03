# 1705 — Model Numerik Transien Unit Penyimpanan Energi Termal Panas Laten (LHTES) pada ±222 °C untuk Integrasi dengan High-Temperature Heat Pump (HTHP)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Transient numerical model of a latent heat thermal energy storage unit at around 222 °C for its integration with a high-temperature-heat-pump*
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *Prospects of heat pump for thermal energy decarbonization*, *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri merupakan kontributor terbesar konsumsi energi termal tingkat-tinggi (di atas 150 °C) di Uni Eropa, mencakup proses pengeringan, sterilisasi, distilasi, dan reaksi kimia endotermik. Berdasarkan laporan IEA dan tinjauan yang dipublikasikan Xu & Wang (2024) di *The Innovation Energy* (DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)), lebih dari 50 % kebutuhan panas proses industri secara historis dipasok oleh pembakaran gas alam, sebuah kondisi yang bertentangan dengan target dekarbonisasi dan *Net-Zero Industry Act*. Dalam konteks inilah *High-Temperature Heat Pump* (HTHP) muncul sebagai teknologi elektrifikasi termal yang mampu menyediakan *Coefficient of Performance* (COP) tipikal 2,5–4,0 pada rentang suhu 150–250 °C, namun terkendala oleh profil beban yang tidak kontinu (Toloza, Payá, & Barceló, 2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)).

Toloza dkk. (2026) menegaskan bahwa integrasi HTHP dengan unit *Latent Heat Thermal Energy Storage* (LHTES) merupakan arsitektur yang sangat prospektif, karena LHTES menyimpan energi dalam bentuk panas laten *phase change material* (PCM) pada suhu mendekati konstan (±2 °C selama transisi fasa), sehingga memungkinkan *time-shifting* antara produksi listrik/panas dari HTHP dan kebutuhan termal proses. Tantangan fundamental yang diangkat dalam paper tersebut adalah konduktivitas termal PCM yang sangat rendah (umumnya 0,2–1,0 W/m·K untuk garam nitrat dan eutektik metalurgi), yang membatasi laju pengisian dan pengosongan unit. Sebagai respons, konfigurasi *shell-and-tube* vertikal dipilih karena memberikan kekompakan volumetrik tinggi, integritas struktural pada suhu 222 °C, dan kapasitas peningkatan termal melalui *fins*, *metal foams*, atau *metal wool* (Toloza dkk., 2026). Studi ini mengembangkan model transien dalam bahasa Modelica untuk menyimulasikan perilaku *charge–discharge* unit LHTES berbasis PCM eutektik bersuhu lebur 222 °C, dengan tujuan akhir menyediakan *digital twin* bagi rekayasa proses, optimalisasi geometri, dan integrasi kendali HTHP dalam industri proses panas berkelanjutan.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Energi Transien dengan Formulasi Entalpi

Perilaku termal PCM dalam tabung LHTES dimodelkan menggunakan persamaan difusi termal transien dalam bentuk entalpi (*enthalpy method*), yang menghindari diskontinuitas pada antarmuka padat–cair:

$$\rho \, \frac{\partial h(T)}{\partial t} = \nabla \cdot \bigl(k(T)\,\nabla T\bigr) + \dot{q}_{v} \tag{1}$$

dengan $\rho$ adalah densitas PCM [kg/m³], $h(T)$ entalpi spesifik [J/kg], $k(T)$ konduktivitas termal efektif [W/m·K] yang bergantung pada fase, dan $\dot{q}_{v}$ adalah sumber panas volumetric (diabaikan dalam kasus tipikal). Hubungan $h(T)$ dimodelkan dengan metode *apparent heat capacity*:

$$h(T) = \int_{T_{ref}}^{T} c_{p,\text{eff}}(\tau)\,d\tau, \quad c_{p,\text{eff}}(T) = c_{p,s}(T)(1-f_l) + c_{p,l}(T)\,f_l + L\,\frac{df_l}{dT} \tag{2}$$

dengan $L$ adalah panas laten peleburan [J/kg] dan $f_l(T)$ adalah *liquid fraction* (fraksi cair) yang lazim dimodelkan sebagai fungsi sigmoid:

$$f_l(T) = \frac{1}{2}\left[1 + \operatorname{erf}\!\left(\frac{T - T_m}{\Delta T_m/2}\right)\right] \tag{3}$$

dengan $T_m$ suhu lebur eutektik (222 °C) dan $\Delta T_m$ adalah lebar transisi fasa yang biasa diasumsikan 4–6 K untuk garam nitrat eutektik (Toloza dkk., 2026).

### 2.2 Perpindahan Panas Konvektif pada Sisi HTF

Aliran *heat transfer fluid* (HTF) di dalam tabung dalam dimodelkan dengan persamaan konservasi energi 1D:

$$\rho_f c_{p,f}\,A_c\,\frac{\partial T_f}{\partial t} + \rho_f c_{p,f}\,u_f\,A_c\,\frac{\partial T_f}{\partial x} = h_i\,P_i\,\bigl(T_{w,i} - T_f\bigr) \tag{4}$$

dengan $A_c$ luas penampang aliran, $u_f$ kecepatan HTF, $P_i$ keliling bagian dalam tabung, dan $h_i$ koefisien konveksi internal yang dievaluasi melalui korelasi Gnielinski atau Dittus-Boelter tergantung rezim Reynolds.

### 2.3 Resistansi Termal Total dan Kapasitas Penyimpanan

Untuk kapasitas unit LHTES skala pilot pada paper Toloza dkk. (2026), resistansi termal total antara HTF dan PCM digabungkan melalui konsep $UA$:

$$\frac{1}{UA} = \frac{1}{h_i A_i} + \frac{\ln(r_o/r_i)}{2\pi k_w L_{tube}} + \frac{1}{h_{o,\text{eff}} A_o} \tag{5}$$

dengan $h_{o,\text{eff}}$ adalah koefisien konveksi efektif pada PCM yang ditingkatkan oleh *metal wool* atau struktur *fin*. Energi yang tersimpan dalam PCM selama satu siklus peleburan adalah:

$$E_{stored} = m_{PCM}\,\bigl[c_{p,s}(T_m - T_{s,init}) + L + c_{p,l}(T_{l,fin} - T_m)\bigr] \tag{6}$$

### 2.4 Kinerja Siklus HTHP–LHTES Gabungan

Kinerja sistem gabungan dievaluasi melalui *exergy efficiency*:

$$\eta_{ex} = \frac{\int_{t_0}^{t_f} \dot{Q}_{use}\!\left(1 - \frac{T_0}{T_{use}(t)}\right)dt}{\int_{t_0}^{t_f} \dot{W}_{comp}\,dt + E_{PCM,\text{loss}}} \tag{7}$$

dengan $T_0$ suhu referensi lingkungan (293 K) dan $T_{use}(t)$ suhu pemakaian proses. Xu & Wang (2024) melaporkan bahwa integrasi HTHP dengan LHTES dapat meningkatkan efisiensi exergy sistem 8–15 % melalui *peak shaving* dan *load leveling*.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model numerik transien Toloza dkk. (2026) mengikuti alur kerja rekayasa berikut dalam bahasa Modelica (melalui pustaka *Thermal Energy Storage* dan *HeatTransfer*):

```text
┌──────────────────────────────────────────────────────────┐
│ 1. Definisi geometri shell-and-tube (D_o, D_i, L, N_t)   │
│                ↓                                         │
│ 2. Input properties PCM: ρ, c_p(T), k(T), L, T_m, μ(T)   │
│                ↓                                         │
│ 3. Diskretisasi 1D-radial PCM + 1D-axial HTF              │
│    (finite volume, 50 node radial, 80 node aksial)        │
│                ↓                                         │
│ 4. Initial condition: T_PCM = T_init < T_m                │
│    Boundary: konveksi HTF inlet T_f,in(t)                │
│                ↓                                         │
│ 5. Solve PDE-coupled (Eq.1 + Eq.4) time step Δt          │
│                ↓                                         │
│ 6. Post-process: f_l(t,r), T(r,z,t), Q̇_HTF, SOC(t)      │
│                ↓                                         │
│ 7. Validasi vs eksperimen & ekspor ke kontrol HTHP       │
└──────────────────────────────────────────────────────────┘
```

**SOP operasional integrasi HTHP–LHTES di lapangan:**

1. **Komisioning termal:** Pre-heating HTF secara bertahap (rate ≤ 30 K/jam) untuk mencegah *thermal shock* pada shell PCM.
2. **Profil pengisian (*charging*):** HTHP beroperasi dengan *lift* suhu 80–110 K dari sumber buang (≤120 °C) ke target HTF 230–240 °C; HTF dialirkan melalui tube bundle dengan bilangan Reynolds 5.000–15.000.
3. **Logika kendali SOC:** *State of Charge* $SOC(t) = E_{stored}(t)/E_{max}$ dipantau melalui sensor T terdistribusi; ketika $SOC < 0,2$, HTHP diaktifkan (*charging mode*); ketika $SOC > 0,9$ dan permintaan proses rendah, *stand-by*.
4. **Pelepasan (*discharging*):** HTF panas dari LHTES dicampur dengan output HTHP untuk memenuhi fluktuasi beban proses, dengan *mixing valve* mempertahankan suhu delivery dalam toleransi proses ±3 K.
5. **Pemeliharaan preventif:** Inspeksi korosi shell (khususnya untuk garam nitrat agresif), uji kebocoran HTF tiap 6 bulan, dan kalibrasi sensor sesuai ISO 13790 untuk akurasi energi.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Spesifikasi Unit LHTES

Diambil kasus studi terinspirasi paper Toloza dkk. (2026) untuk unit pilot di industri kimia/farmasi:

| Parameter | Nilai | Satuan |
|---|---|---|
| PCM (eutectic NaNO₃–KNO₃ enriched) | $T_m = 222$ | °C |
| Panas laten $L$ | 110 | kJ/kg |
| $c_{p,s}$ / $c_{p,l}$ | 1,55 / 1,65 | kJ/(kg·K) |
| $\rho$ PCM (padat/cair) | 1.900 / 1.820 | kg/m³ |
| $k$ PCM | 0,55 (padat) | W/(m·K) |
| Diameter luar shell $D_o$ | 0,40 | m |
| Diameter luar tabung $d_o$ | 0,034 | m |
| Jumlah tabung $N_t$ | 19 | – |
| Panjang efektif $L_{tube}$ | 2,0 | m |
| Massa PCM $m_{PCM}$ | ≈ 215 | kg |
| HTF (termal oil Dowtherm A) | – | – |
| Suhu inlet HTF (charging) | 240 | °C |
| Debit HTF $\