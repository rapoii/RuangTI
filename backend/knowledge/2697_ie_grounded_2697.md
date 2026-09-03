# 2697 — Pemodelan Numerik Transien Unit Penyimpanan Energi Termal Panas Laten (LHTES) pada Suhu ~222°C untuk Integrasi dengan High-Temperature Heat Pump (HTHP)

**Domain:** Teknik Industri & Rekayasa Sistem Industri — Manajemen Energi Proses dan Decarbonisasi Termal
**Topik Spesialis:** *Transient numerical model of a latent heat thermal energy storage unit at around 222°C for its integration with a high-temperature-heat-pump*
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *Prospects of heat pump for thermal energy decarbonization*. *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri bertanggung jawab atas sekitar 37% konsumsi energi final global dan hampir 24% emisi CO₂ langsung (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)), dengan panas proses industri (industrial process heat) menyumbang porsi terbesar — terutama pada rentang suhu menengah hingga tinggi (100–400 °C) yang lazim dijumpai pada industri kimia, makanan & minuman, tekstil basah, pulp & paper, serta semikonduktor. Dekarbonisasi pada rentang suhu ini secara historis sulit dilakukan karena elektrifikasi boiler uap konvensional maupun tungku pembakaran langsung memiliki efisiensi eksergetik rendah dan memerlukan biaya investasi (CAPEX) besar. Atas latar belakang tersebut, **High-Temperature Heat Pump (HTHP)** muncul sebagai teknologi *key-enabler* karena mampu menaikkan suhu sumber panas (umumnya *waste heat* pada 60–150 °C) menjadi panas utilisasi 150–250 °C dengan *Coefficient of Performance* (COP) tipikal 2,0–4,5 (Xu & Wang, 2024).

Akan tetapi, HTHP memiliki kelemahan operasional inheren: pola beban industri jarang *steady-state* melainkan fluktuatif mengikuti *batch process*, jadwal produksi, dan tarif listrik Time-of-Use. Tanpa buffer termal, HTHP akan *cycle* terlalu sering, menurunkan COP efektif dan memperpendek umur kompresor. Toloza, Payá, & Barceló (2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) menyoroti bahwa integrasi **Latent Heat Thermal Energy Storage (LHTES)** pada sekitar 222 °C — rentang suhu yang sangat relevan untuk sterilisasi, bleaching, dan reaksi polimerisasi — menjadi solusi *demand-side flexibility* yang elegan. Tantangan teknis utamanya adalah konduktivitas termal PCM yang sangat rendah (umumnya 0,1–0,3 W/m·K), sehingga geometri penukar panas harus dioptimasi. Toloza et al. (2026) memilih konfigurasi *shell-and-tube* vertikal karena kekompakan, robusteks struktural, dan kapasitas *thermal enhancement*-nya yang tinggi. Urgensi industri dari modul ini nyata: integrasi LHTES-HTHP memungkinkan *peak-shaving* termal, peningkatan COP musiman, dan arbitrase energi antara listrik murah (off-peak) dengan panas utilisasi (peak), sehingga *payback period* sistem dapat turun dari ~8 tahun menjadi 4–5 tahun pada plant ukuran menengah.

## 2. Landasan Teori & Formulasi Matematis

Model transien LHTES Toloza et al. (2026) dibangun dalam bahasa **Modelica** (pustaka `ThermosysPro` dan `HeatTransfer`) dengan menyelesaikan persamaan konservasi energi dalam PCM dan fluida perpindahan panas (HTF) secara coupled. Formulasi intinya adalah sebagai berikut.

### 2.1 Persamaan Energi pada PCM (Solid-Liquid Phase Change)

Untuk PCM dengan perubahan fasa, digunakan **metode entalpi (enthalpy method)** untuk menghindari diskontinuitas pada kapasitas panas:

$$\rho_{PCM} \frac{\partial h_{PCM}}{\partial t} = \nabla \cdot \left( k_{PCM} \, \nabla T \right) \tag{1}$$

dengan relasi konstitutif entalpi–suhu:

$$h_{PCM}(T) = \int_{T_{ref}}^{T} c_{p,PCM}(T')\, dT' + f(T) \cdot \Delta h_{f} \tag{2}$$

di mana $\Delta h_f$ adalah panas laten fusi, dan $f(T)$ adalah *liquid fraction function* (regulasi Gaussian atau smoothed-step untuk numerical stability):

$$f(T) = \frac{1}{2}\left[1 + \mathrm{erf}\left(\frac{T - T_m}{\sigma \sqrt{2}}\right) \right] \tag{3}$$

dengan $T_m$ suhu leleh PCM (sekitar 222 °C pada studi Toloza et al., 2026) dan $\sigma$ lebar transisi fasa tipikal 0,5–2 K. Alternatifnya, metode **apparent heat capacity** menuliskan:

$$\rho_{PCM} \, c_{p,app}(T) \frac{\partial T}{\partial t} = \nabla \cdot \left( k_{PCM} \, \nabla T \right), \quad c_{p,app}(T) = c_{p,sens} + \frac{\Delta h_f}{\sigma\sqrt{2\pi}} \exp\left[-\frac{(T-T_m)^2}{2\sigma^2}\right] \tag{4}$$

### 2.2 Perpindahan Panas pada Sisi HTF (Shell-and-Tube)

Untuk HTF yang mengalir di dalam tube dengan kecepatan $u_{HTF}$, persamaan energi 1-D transien:

$$\rho_{HTF} \, c_{p,HTF} \frac{\partial T_{HTF}}{\partial t} + \rho_{HTF} \, c_{p,HTF} \, u_{HTF} \frac{\partial T_{HTF}}{\partial x} = \frac{h_{i} \, \pi D_i}{A_c} \left( T_{w,i}(x,t) - T_{HTF}(x,t) \right) \tag{5}$$

dengan $h_i$ koefisien konveksi internal dievaluasi melalui korelasi Dittus-Boelter (untuk *turbulent flow* $Re > 10\,000$):

$$Nu_i = 0,023 \, Re^{0,8} Pr^{0,4} \quad \Rightarrow \quad h_i = \frac{Nu_i \, k_{HTF}}{D_i} \tag{6}$$

### 2.3 Resistansi Termal Total Dinding Tube ke PCM

Model Toloza et al. (2026) menyusun *thermal resistance network* seri:

$$R_{tot} = \underbrace{\frac{1}{h_i A_i}}_{\text{konveksi HTF}} + \underbrace{\frac{\ln(D_o/D_i)}{2\pi k_{w} L}}_{\text{konduksi dinding}} + \underbrace{\frac{1}{h_{o} A_o}}_{\text{konveksi PCM (alami/paksa)}} \tag{7}$$

Karena PCM berbentuk *quasi-stagnant*, perpindahan panas sisi shell sangat bergantung pada **konveksi alami Rayleigh–Bénard** di dalam PCM cair, yang dimodelkan melalui bilangan Rayleigh termal:

$$Ra_L = \frac{g \, \beta \, (T_{w,o} - T_m) \, L_c^3}{\nu_{PCM} \, \alpha_{PCM}} \tag{8}$$

dengan korelasi Churchill–Chu untuk silinder vertikal:

$$Nu_o = \left\{ 0,825 + \frac{0,387 \, Ra_L^{1/6}}{\left[1 + (0,492/Pr)^{9/16}\right]^{8/27}} \right\}^2 \tag{9}$$

### 2.4 Energi Tersimpan Kumulatif

Untuk *state-of-charge* (SoC) termal:

$$E_{stored}(t) = m_{PCM} \left[ \int_{T_{init}}^{T_m} c_{p,s} \, dT + f(t) \cdot \Delta h_f + \int_{T_m}^{T(t)} c_{p,l} \, dT \right] \tag{10}$$

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi rekayasa sistem LHTES-HTHP mengikuti SOP berlapis berikut, yang diselaraskan dengan metodologi Toloza et al. (2026) dan best-practice Xu & Wang (2024):

**Tahap 1 — Karakterisasi Kebutuhan Termal Plant.** Lakukan *process heat audit* berdasarkan ISO 50015 untuk memetakan profil suhu ($T_{demand}(t)$), laju alir massa, dan durasi operasi. Tentukan *target storage capacity* $E_{target} = \int_0^{\tau} \dot{Q}_{demand}\, dt$.

**Tahap 2 — Seleksi PCM.** Pilih PCM eutektik dengan $T_m$ 5–10 K di atas suhu target utilisasi (sekitar 222 °C). Kriteria: $\Delta h_f > 180$ kJ/kg, stabilitas siklus > 3.000 kali, dan kompatibilitas kimia dengan material *shell* (umumnya SS316L untuk range 200–300 °C).

**Tahap 3 — Desain Shell-and-Tube.** Optimasi geometri dengan parameter: $D_i$ (10–25 mm), $D_o$ (15–35 mm), *pitch* triangular 1,25$D_o$, panjang $L$ 1,5–3 m, dan jumlah tube $N_t$ untuk memenuhi luas perpindahan panas:

$$A_{req} = \frac{\dot{Q}_{design}}{U \cdot \Delta T_{LMTD}} \tag{11}$$

dengan $U = 1/R_{tot}$ dari Persamaan (7) dan $\Delta T_{LMTD}$ dihitung dari beda suhu masuk-keluar HTF dan PCM.

**Tahap 4 — Pemodelan Numerik Transien.** Bangun model Modelica 1-D radial (PCM) coupled dengan 1-D aksial (HTF). Validasi dengan eksperimen *charge-discharge* pada *prototype single-tube* (Ti < 5% rms error pada prediksi $T_{PCM}(r,t)$ dan $\dot{Q}_{HTF}$).

**Tahap 5 — Integrasi dengan HTHP.** Tentukan *control logic*: HTHP mengisi LHTES saat listrik murah atau saat *waste heat* tersedia; LHTES discharge saat *demand peak* atau saat COP HTHP turun (ambient tinggi). Gunakan *MPC (Model Predictive Control)* dengan horizon 24 jam.

**Tahap 6 — Commissioning & Performance Verification.** Lakukan *capacity test* (charge penuh → discharge penuh) sesuai EN 12977 untuk verifikasi SoC minimal 90% dari nominal, dan pantau *round-trip efficiency*:

$$\eta_{RT} = \frac{\int_0^{t_{dis}} \dot{Q}_{out}\, dt}{\int_0^{t_{ch}} \dot{Q}_{in}\, dt} \geq 0,75 \tag{12}$$

**Tahap 7 — O&M Berbasis Kondisi.** Pasang sensor T di 9 titik (3 radius × 3 aksial) untuk deteksi *subcooling*, *degradation* (penurunan $\Delta h_f$ karena *thermal cycling*), dan *fouling* pada sisi HTF.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Pabrik pengolahan makanan需要进行 *in-pack sterilization* (retort) dengan kebutuhan termal: $\dot{Q}_{peak} = 1{,}2$ MW pada $T_{util} = 220$ °C, durasi puncak 4 jam/hari. HTHP menyediakan $T_{supply,HTF} = 230$ °C (minyak termal), $T_{return,HTF} = 190$ °C. PCM eutektik硝酸盐 (misalnya campuran $NaNO_3$–$KNO_3$) dengan $T_m = 222$ °C, $\Delta h_f = 220$ kJ/kg, $c_{p,s} = 1{,}5$ kJ/(kg·K), $c_{p,l} = 1{,}6$ kJ