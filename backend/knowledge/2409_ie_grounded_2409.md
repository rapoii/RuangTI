# 2409 — Pemodelan Numerik Transien Unit Penyimpan Energi Termal Panas Laten pada 222°C untuk Integrasi dengan Pompa Kalor Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump*
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *Prospects of heat pump for thermal energy decarbonization*. *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri menyumbang sekitar 37% dari konsumsi energi akhir global dan hampir 24% dari emisi CO₂ dunia, dengan lebih dari separuh kebutuhan energi tersebut berupa *process heat* pada rentang suhu 150–400 °C (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Dekarbonisasi *process heat* menjadi tantangan teknis dan ekonomi yang krusial karena dominasi burner bahan bakar fosil pada boiler industri, kiln semen, pengering makanan, serta proses kimia dan tekstil. Pompa Kalor Suhu Tinggi (*High-Temperature Heat Pump*, HTHP) muncul sebagai teknologi *electrify-and-decarbonize* yang memanfaatkan listrik terbarukan untuk menyediakan panas proses dengan *Coefficient of Performance* (COP) 2,5–4,5 pada suhu output hingga 200 °C (Xu & Wang, 2024). Namun, operasi HTHP menghadapi dua tantangan fundamental: (i) fluktuasi beban termal dan harga listrik yang menurunkan efektilitas sistem, dan (ii) mismatch antara profil produksi panas HTHP dengan profil kebutuhan proses yang tidak stasioner.

Toloza, Payá, dan Barceló (2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) mengajukan solusi *Latent Heat Thermal Energy Storage* (LHTES) berbasis material *phase change* (PCM) sebagai *buffer* termal antara HTHP dan beban proses. Unit LHTES vertical *shell-and-tube* yang diusulkan menggunakan campuran eutektik *NaNO₃–KNO₃* dengan titik lebur sekitar 222 °C, yang berada tepat di jendela operasional HTHP generasi baru berbasis siklus trans-kritis CO₂ dan refrigeran hidrokarbon. Menurut Toloza *et al.* (2026), konduktivitas termal PCM pada umumnya rendah (0,5–1,5 W/m·K), sehingga geometri *heat exchanger*, enkapsulasi, dan *metal wool* harus dioptimasi untuk mencapai laju perpindahan panas yang tinggi. Konfigurasi *shell-and-tube* menawarkan kekompakan, robustnya struktural, dan kapasitas peningkatan termal yang relevan untuk integrasi industri (*Eurotherm Seminar #119*, 2026).

Konteks industri ini mendesak karena kebijakan *Net Zero* Uni Eropa (EU *Fit for 55*) dan standar ISO 50001 menghendaki elektrifikasi proses termal industri. PT. Krakatau Steel, Pertamina Refinery, dan industri makanan di Indonesia juga memerlukan solusi LHTES untuk menggantikan boiler batubara pada rentang 180–230 °C. Urgensi operasionalnya nyata: penyimpanan termal memungkinkan HTHP beroperasi pada *setpoint* optimal sepanjang hari, memindahkan operasi ke jam tarif listrik rendah (*load shifting*), dan memitigasi *cycling losses* yang menurunkan lifetime kompresor hingga 30%.

## 2. Landasan Teori & Formulasi Matematis

Model numerik transien unit LHTES *shell-and-tube* pada Toloza *et al.* (2026) dibangun dengan formulasi *enthalpy-porosity* di lingkungan bahasa *Modelica*, yang menggabungkan persamaan konservasi energi, konservasi momentum (Navier-Stokes), dan fungsi *liquid fraction* PCM. Formulasi matematis utama yang digunakan adalah sebagai berikut.

**Persamaan konservasi momentum dengan *mushy zone* term (Brinkman-Forchheimer-extended Darcy):**

$$\frac{\partial \mathbf{u}}{\partial t} + (\mathbf{u} \cdot \nabla) \mathbf{u} = -\frac{1}{\rho} \nabla p + \nu \nabla^2 \mathbf{u} + \mathbf{g} \beta (T - T_{ref}) - A_m \frac{(1-f_l)^2}{f_l^3 + \epsilon} \mathbf{u}$$

dengan $\mathbf{u}$ adalah vektor kecepatan, $\rho$ densitas PCM, $p$ tekanan, $\nu$ viskositas kinematik, $\mathbf{g}$ percepatan gravitasi, $\beta$ koefisien ekspansi volumetrik, $A_m$ konstanta *mushy zone* (umumnya $10^{5}$ kg/m³·s), $f_l$ fraksi cair, dan $\epsilon$ konstanta kecil untuk mencegah pembagian nol (Toloza *et al.*, 2026).

**Persamaan konservasi energi dengan *enthalpy method* untuk PCM:**

$$\rho \left( \frac{\partial H}{\partial t} + \nabla \cdot (\mathbf{u} H) \right) = \nabla \cdot (k \nabla T)$$

di mana entalpi total $H$ didefinisikan sebagai:

$$H(T) = \int_{T_{ref}}^{T} c_p \, dT + f_l L$$

dengan $L$ adalah *latent heat* PCM (untuk eutektik *NaNO₃–KNO₃* ≈ 110 kJ/kg) dan $c_p$ kapasitas panas spesifik. Fungsi fraksi cair mengikuti model *piecewise linear*:

$$f_l = \begin{cases} 0, & T \leq T_s \\ \frac{T - T_s}{T_l - T_s}, & T_s < T < T_l \\ 1, & T \geq T_l \end{cases}$$

dengan $T_s$ dan $T_l$ berturut-turut suhu *solidus* dan *liquidus* PCM (Toloza *et al.*, 2026).

**Kapasitas penyimpanan energi termal unit LHTES:**

$$Q_{stored} = m_{PCM} \left[ c_p (T_{charge} - T_{m}) + L + c_p (T_{m} - T_{discharge}) \right]$$

dengan $m_{PCM}$ massa PCM dan $T_m$ suhu lebur eutektik (222 °C). Untuk geometri *shell-and-tube* vertikal, perpindahan panas pada sisi fluida pemindah panas (HTF) mengikuti korelasi *Nusselt* aliran turbulen dalam tabung:

$$Nu = 0.023 Re^{0.8} Pr^{0.4}$$

**Efektilitas termal *heat exchanger*:**

$$\varepsilon = 1 - \exp\left[ -NTU \left( 1 - C_r \right) \right]$$

dengan $NTU = UA/(C_{min})$ dan $C_r = C_{min}/C_{max}$ (Xu & Wang, 2024).

Parameter desain utama yang digunakan Toloza *et al.* (2026) antara lain: diameter dalam tube 25 mm, diameter luar 34 mm, panjang efektif 1,5 m, PCM initial temperature 200 °C, HTF (minyak termal) suhu masuk 240 °C dengan laju alir 0,02 kg/s, dan ukuran mesh untuk *discretization* Domain CFD 50.000–120.000 sel.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi rekayasa unit LHTES untuk integrasi dengan HTHP mengikuti prosedur sistematis sebagai berikut:

**Tahap 1 — Penentuan Spesifikasi Termal Proses.** Analisis *heat balance* lini produksi dilakukan dengan metode *pinch analysis* (ISO 50015) untuk menentukan profil beban termal harian, suhu target, dan fluktuasi musiman. Output: kurva durasi beban dan kebutuhan kapasitas penyimpanan $Q_{stored,design}$ (kWh).

**Tahap 2 — Seleksi PCM.** Pemilihan PCM didasarkan pada kriteria: (i) titik lebur dalam rentang 180–230 °C untuk HTHP, (ii) *latent heat* > 100 kJ/kg, (iii) stabilitas siklus > 1.000 siklus, (iv) tidak korosif terhadap baja karbon/stainless steel 316. Eutektik *NaNO₃–KNO₃* (60–40 wt%) memenuhi kriteria dengan $T_m = 222$ °C dan $L = 110$ kJ/kg (Toloza *et al.*, 2026).

**Tahap 3 — Desain *Shell-and-Tube Heat Exchanger*.** Dimensi utama dihitung dari persamaan perpindahan panas transien:

$$Q = UA \cdot \Delta T_{lmtd} = m_{HTF} c_{p,HTF} (T_{in} - T_{out})$$

Perhitungan dilakukan secara iteratif untuk menentukan jumlah tube ($N_t$), panjang ($L$), dan jarak antar-tube (*pitch*).

**Tahap 4 — Pemodelan Numerik Transien.** Bahasa *Modelica* (Dymola/OMS) digunakan untuk membangun model 1D-radial 2D-aksial pada setiap tabung dengan diskretisasi 20–50 node radial. Persamaan *enthalpy-porosity* diselesaikan dengan solver *CVODE* atau *IDA* (Toloza *et al.*, 2026).

**Tahap 5 — Simulasi Skenario Charging/Discharging.** Simulasi dijalankan untuk skenario *constant inlet temperature* dan *constant heat flux*, divalidasi dengan data eksperimen atau benchmark numerik (misal Stefan problem, *HiTPCM* database).

**Tahap 6 — Integrasi HTHP-LHTES.** Unit LHTES dihubungkan sebagai *thermal buffer* antara output HTHP dan beban proses melalui *primary loop* HTF. Sistem kontrol PLC/SCADA memantau suhu outlet HTF dan membuka/menutup *3-way valve* untuk *charging* (saat tarif listrik rendah) atau *discharging* (saat permintaan puncak).

**Tahap 7 — Commissioning & Validasi Kinerja.** Pengujian lapangan mengacu pada standar ASME PTC 12.2 (uji performa *heat exchangers*) dan ISO 13256 untuk verifikasi *charge/discharge* efficiency > 85%.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Industri makanan pengolahan susu di Jawa Tengah membutuhkan 500 kWh panas proses pada suhu 210–230 °C selama 8 jam/hari. HTHP dengan kapasitas 100 kW termal dipasangkan dengan unit LHTES *shell-and-tube* untuk *load leveling*.

**Input Parameter Desain:**

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| $Q_{design}$ | 500 | kWh |
| $T_m$ (PCM eutektik NaNO₃–KNO₃) | 222 | °C |
| $L$ (*latent heat*) | 110 | kJ/kg |
| $c_p$ PCM | 1,55 | kJ/kg·K |
| $\Delta T$ utilisasi | 10 | K |
| $\rho$ PCM | 1.890 | kg/m³ |
| $T_{charge}$ | 232 | °C |
| $T_{discharge}$ | 212 | °C |

**Langkah 1 — Massa PCM yang dibutuhkan:**

$$m_{PCM} = \frac{Q_{stored}}{c_p \Delta T + L} = \frac{500 \times 3600}{1{,}55 \times 10 \times 1000 + 110 \times 1000} = \frac{1.800.000}{15.500 + 110.000} = \frac{1.800.000}{125.500} \approx 14{,}34 \text{ ton}$$

**Langkah 2 — Volume PCM dan dimensi *shell-and-tube*:**

$$V_{PCM} = \frac{m_{PCM}}{\rho} = \frac{14.340}{1.890} \approx 7{,}59 \text{ m}^3$$

Dengan faktor compactness *shell-and-tube* 0,65, volume total unit ≈ 11,68 m³. Dipilih konfigurasi: 24 tabung stainless steel 316 diameter 50 mm, panjang efektif 2,5 m, shell diameter 0,5 m (mengikuti prinsip $L/D \geq 5$).

**Langkah 3 — Kapasitas perpindahan panas charging:**

Laju alir HTF (minyak termal Therminol 66) $m_{HTF} = 1,5$ kg/s, $c_{p,HTF} = 2,3$ kJ/kg·K:

$$Q_{charge} = m_{HTF} \cdot c_{p,HTF} \cdot (T_{in} - T_{out})$$

Untuk $\Delta T_{HTF} = 15$ K: $Q_{charge} = 1{,}5 \times 2{,}3 \times 15 = 51{,}75$ kW. Durasi charging: $t_{charge} = 500/51{,}75 \approx 9{,}66$ jam.

**Langkah 4 — Simulasi transien (metode numerik):** Diskretisasi domain 1D-radial pada PCM menghasilkan persamaan beda hingga:

$$\rho c_p \frac{T_i^{n+1} - T_i^n}{\Delta t} = k \frac