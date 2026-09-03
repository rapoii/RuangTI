# 1737 — Pemodelan Numerik Transien Unit Penyimpanan Energi Termal Panas Laten pada 222°C untuk Integrasi dengan Pompa Kalor Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri menyumbang hampir 25% emisi CO₂ global, di mana lebih dari separuh kebutuhan energinya berupa **panas proses** pada rentang suhu 150–400 °C (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Decarbonisasi panas proses industri tidak dapat mengandalkan elektrifikasi langsung melalui boiler listrik berskala kecil karena efisiensi eksergetik yang rendah dan biaya Levelized Cost of Heat (LCOH) yang tinggi. Solusi yang diajukan Xu & Wang (2024) adalah kombinasi **High-Temperature Heat Pump (HTHP)** dengan **Latent Heat Thermal Energy Storage (LHTES)**, sehingga terjadi *decoupling* antara waktu produksi panas (off-peak/renewable surplus) dan waktu konsumsi (proses shift).

Toloza, Payá, & Barceló (2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) menyoroti bahwa pada rentang suhu proses 200–250 °C, efisiensi HTHP berbasis siklus trans-kritis CO₂ atau campuran refrigeran alami dapat mencapai COP 3,0–4,5, namun fluktuasi beban dan ketidakselarasan antara profil produksi dan permintaan panas memerlukan buffer termal. Buffer ini harus beroperasi pada suhu dekat 222 °C — rentang kritis untuk industri makanan (sterilisasi UHT), tekstil (pewarnaan), kimia (reaksi endotermik ringan), dan pengeringan kayu/kertas. Mengingat konduktivitas termal Phase Change Material (PCM) pada kisaran ini umumnya rendah ($k_{PCM} \approx 0{,}5\text{–}1{,}2 \text{ W/m·K}$), maka diperlukan optimasi geometri penukar panas. Konfigurasi *shell-and-tube* dipilih karena kekompakan volumetrik, ketahanan struktural pada tekanan internal, dan kapasitas peningkatan termal melalui fin internal (Toloza et al., 2026).

Permasalahan industri yang melatarbelakangi paper ini adalah (i) kurangnya model transien yang tervalidasi untuk desain LHTES pada suhu >200 °C, (ii) kebutuhan memprediksi waktu *charging*/*discharging* untuk sizing buffer yang optimal, dan (iii) integrasi dinamis dengan HTHP agar Total Cost of Ownership (TCO) payback period turun di bawah 7 tahun. Studi ini menyajikan model numerik transien berbasis bahasa Modelica yang mensimulasikan unit LHTES vertikal *shell-and-tube* berisi campuran eutektik nitrat, untuk menjawab ketiga kebutuhan tersebut.

---

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Peng konservasi Energi pada PCM

Model Toloza et al. (2026) menggunakan formulasi **enthalpy method** untuk menghindari *mushy zone* singularity pada persamaan klasik *Stefan problem*. Untuk setiap volume kontrol PCM, berlaku:

$$\rho_{PCM} \frac{\partial H}{\partial t} = \nabla \cdot (k_{PCM} \nabla T) + \dot{q}_{gen}$$

dengan $H$ adalah entalpi volumetrik spesifik total (J/m³). Hubungan $H(T)$ dibangun dengan piecewise function:

$$H(T) = \int_{T_{ref}}^{T_s} \rho_{PCM} \, c_{p,s}(T) \, dT + \rho_{PCM} L \cdot f(T) + \int_{T_s}^{T} \rho_{PCM} \, c_{p,l}(T) \, dT$$

di mana $L$ adalah laten fusi (J/kg), $T_s$ suhu solidifikasi/lebur, dan $f(T) \in [0,1]$ adalah *liquid fraction* yang dimodelkan dengan fungsi smooth Heaviside:

$$f(T) = \frac{1}{2}\left[1 + \tanh\!\left(\frac{T - T_s}{\Delta T/2}\right)\right]$$

dengan $\Delta T$ adalah lebar transisi fasa (tipikal 4–6 K untuk eutektik nitrat pada 222 °C).

### 2.2 Persamaan Energi pada Heat Transfer Fluid (HTF)

Untuk sisi HTF (biasanya minyak termal atau air bertekanan), persamaan konveksi 1-D dalam pipa diasumsikan:

$$\rho_{HTF} c_{p,HTF} \frac{\partial T_{HTF}}{\partial t} + \rho_{HTF} c_{p,HTF} u \frac{\partial T_{HTF}}{\partial z} = \frac{h_{int} \cdot P_{in}}{A_{in}} (T_{PCM,surf} - T_{HTF})$$

dengan $u$ kecepatan aksial HTF, $P_{in}$ keliling dalam tabung, dan $h_{int}$ koefisien konveksi internal. Nilai $h_{int}$ untuk aliran turbulen ($Re > 10^4$) dihitung dengan korelasi Gnielinski:

$$h_{int} = \frac{k_{HTF}}{D_{in}} \cdot \frac{(f/8)(Re - 1000) Pr}{1 + 12{,}7 \sqrt{f/8}(Pr^{2/3} - 1)}$$

dengan $f = (0{,}790 \ln Re - 1{,}64)^{-2}$.

### 2.3 Resistansi Termal Shell-Tube

Total koefisien transfer panas dinding mengikuti resistansi seri:

$$\frac{1}{U} = \frac{1}{h_{int}} + \frac{\ln(D_o/D_{in})}{2\pi k_{wall} L_t} + \frac{1}{h_{ext,eff}}$$

Karena PCM berada dalam kondisi konveksi alamiah terbatas (*stagnant melt*), $h_{ext,eff}$ dimodelkan dengan korelasi natural convection modified Rayleigh:

$$h_{ext,eff} = 0{,}13 \, k_{PCM} \, Ra^{1/3} / D_o^{1/3}$$

dengan bilangan Rayleigh $Ra = Gr \cdot Pr = \frac{g \beta (T_{surf} - T_s) D_o^3}{\nu^2} Pr$. Pada operasi di sekitar 222 °C dengan $\Delta T$ 8 K dan PCM eutektik nitrat ($\nu \approx 2 \times 10^{-6}$ m²/s, $\beta \approx 2 \times 10^{-4}$ K⁻¹), maka $Ra \approx 4{,}7 \times 10^6$, sehingga $h_{ext,eff} \approx 180\text{–}240$ W/m²K.

### 2.4 Parameterisasi Energi Tersimpan

Kapasitas energi utilisasi per unit volume PCM:

$$E_{stored} = \rho_{PCM} \left[ c_{p,s}(T_s - T_{min}) + L + c_{p,l}(T_{max} - T_s) \right]$$

Untuk eutektik nitrat pada $T_s = 222$ °C, dengan $\rho_{PCM} = 1890$ kg/m³, $L = 110$ kJ/kg, $c_p \approx 1500$ J/kg·K, dan rentang utilisasi $T_{min}=200$ °C, $T_{max}=240$ °C:

$$E_{stored} \approx 1890 \times [1500 \times 22 + 110\,000 + 1500 \times 18] \approx 380 \text{ MJ/m}^3$$

Nilai ini 3–5× lebih tinggi dibandingkan *sensible-only* storage pada selang suhu yang sama.

---

## 3. Metodologi Rekayasa & SOP Implementasi Industri

Toloza et al. (2026) menyusun arsitektur model Modelica berlapis (*multi-domain physical modeling*) dengan langkah SOP sebagai berikut:

**Tahap 1 — Definisi Geometri & Material.** Tentukan dimensi tabung ($D_{in}$, $D_o$, $L_t$, jumlah tabung $N_t$), pitch triangular atau square, dan pilih PCM eutektik target (misalnya NaNO₃–KNO₃ 50-50 wt% dengan $T_m \approx 220$ °C).

**Tahap 2 — Discretization 1-D Radial.** PCM dalam tiap sel annulus dimodelkan dengan nodal *finite-volume* radial (umumnya 30–50 nodal) untuk menangkap gradien termal dari dinding tabung menuju pusat. Persamaan diselesaikan secara implisit (backward Euler) dengan time-step adaptif 1–10 s.

**Tahap 3 — Boundary Condition HTF.** Masukkan profil suhu masuk HTF dari siklus HTHP: $T_{HTF,in}(t)$ mengikuti trajektori kompresi trans-kritis. Validasi dengan data eksperimen prototipe 5 kWh pada 220 °C.

**Tahap 4 — Validasi & Sensitivitas.** Bandingkan hasil model dengan termokopel Tipe-K pada 8 lokasi radial, dengan target error <5% RMSE. Lakukan analisis sensitivitas terhadap $k_{PCM}$, $h_{int}$, dan $f(T)$ *transition width*.

**Tahap 5 — Integrasi dengan HTHP.** Hubungkan output $T_{PCM}(z,t)$ ke kurva operasi kompresor HTHP, lalu optimalkan ukuran storage sehingga *duty-cycle matching* tercapai (target: utilisasi >80%, payback <7 tahun).

Diagram alir keputusan rekayasa:

```
[Demand Profile Industri] → [Karakterisasi HTHP] → [Sizing LHTES]
        ↓                          ↓                     ↓
[Time-series Q(t)]     [COP vs T_condenser]   [E_stored = Q × Δt / η_UT]
                                                    ↓
                                       [Simulasi Transien Modelica]
                                                    ↓
                                [Konsultasi: charging time, SOC(t)]
```

---

## 4. Studi Kasus Kuantitatif & Perhitungan Numerik

**Skenario:** Industri makanan UHT membutuhkan 500 kW termal pada 220 °C selama 4 jam (shift pagi). HTHP beroperasi malam hari ketika listrik murah ($0{,}04$ €/kWh) dengan COP = 3,5, sehingga input listrik = $500/3{,}5 \approx 143$ kW. LHTES berfungsi menyangga ketidakselarasan.

### Langkah 1 — Energi yang harus disimpan

$$Q_{storable} = \dot{Q}_{HTHP,night} \cdot \Delta t_{charge} = 500 \text{ kW} \times 4 \text{ jam} \times 3600 = 7{,}2 \text{ GJ}$$

Dengan $E_{stored} \approx 380$ MJ/m³, dibutuhkan volume PCM:

$$V_{PCM} = \frac{7{,}2 \times 10^9}{380 \times 10^6} \approx 18{,}9 \text{ m}^3$$

### Langkah 2 — Desain Shell-and-Tube

Asumsikan geometri standar industri: $D_{in}=0{,}05$ m, $D_o=0{,}06$ m, panjang $L_t = 4$ m, $N_t = 100$ tabung dalam bundle. Volume aktif shell:

$$V_{shell} = \frac{\pi}{4} D_{shell}^2 L_t - N_t \frac{\pi}{4} D_o^2 L_t$$

Dengan $D_{shell} = 1{,}2$ m, diperoleh $V_{shell} \approx 4{,}07$ m³ per modul. Maka jumlah modul = $\lceil 18{,}9/4{,}07 \rceil = 5$ modul.

### Langkah 3 — Perhitungan Waktu Charging

Laju perpindahan panas awal (PCM masih padat, konduksi dominan):

$$\dot{Q}_{init} = U \cdot A_{tot} \cdot \Delta T_{LMTD}$$

dengan $A_{tot} = N_t \pi D_o L_t = 100 \times \pi \times 0{,}06 \times 4 \approx 75{,}4$ m² per modul, dan $\Delta T_{LMTD}$ untuk HTF masuk 240 °C, keluar 230 °C, PCM mulai leleh 222 °C:

$$\Delta T_{LMTD} = \frac{(240-222) - (230-222)}{\ln(18/8)} \approx 12{,}4 \text{ K}$$

Dari persamaan 1/U di Bagian 2.3, dengan $h_{int} \approx 1500$ W/m²K, $k_{wall}=45$ W/m·K (baja karbon), $h_{ext,eff} \approx 200$ W/m²K:

$$\frac{1}{U} = \frac{1}{1500} + \frac{\ln(60/50)}{2\pi \times 45 \times 4} + \frac{1}{200} \approx 0{,