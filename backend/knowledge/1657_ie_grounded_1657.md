# 1657 — Pemodelan Numerik Transient Unit Penyimpanan Energi Termal Panas Laten (~222 °C) untuk Integrasi dengan Heat Pump Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Transient numerical model of a latent heat thermal energy storage unit at around 222 °C for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *Prospects of heat pump for thermal energy decarbonization*. *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Permintaan global terhadap *industrial process heat* (panas proses industri) menyumbang sekitar 50 % dari konsumsi energi final dunia, di mana lebih dari 70 % di antaranya dipenuhi oleh pembakaran fosil langsung yang menghasilkan emisi CO₂ masif. Dalam kerangka dekarbonisasi sistem termal industri, integrasi antara *High-Temperature Heat Pump* (HTHP) dan *Latent Heat Thermal Energy Storage* (LHTES) muncul sebagai salah satu solusi paling strategis. Xu dan Wang (2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)) menekankan bahwa HTHP mampu menyediakan output termal pada kisaran 150–250 °C dengan *Coefficient of Performance* (COP) 3–6, secara signifikan menggantikan boiler gas di industri kimia, makanan, tekstil, dan kertas. Namun, karakteristik operasional HTHP yang fluktuatif — bergantung pada *source temperature*, *lift ratio*, dan siklus defrost — memerlukan buffer termal yang dapat menyimpan energi pada suhu tinggi tanpa degradasi kapasitas yang besar.

Toloza, Payá, dan Barceló (2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) menjawab kebutuhan ini dengan mengembangkan model numerik transient unit LHTES berbasis konfigurasi *shell-and-tube* vertikal, yang dirancang untuk beroperasi pada suhu fasa perubahan sekitar 222 °C. Pemilihan kisaran suhu ini sangat relevan karena menjembatani rentang operasi tipikal HTHP generasi baru (siklus trans-kritis CO₂ dan campuran refrigeran HFO/HFC) dengan kebutuhan proses industri menengah-tinggi seperti *sterilisasi*, *evaporasi*, dan *brazing*. Material fasa perubahan (*Phase Change Material*, PCM) yang digunakan adalah campuran eutektik nitrat — kemungkinan besar varian *solar salt* (NaNO₃–KNO₃) yang melebur pada ~220 °C dengan kapasitas latent tinggi namun memiliki konduktivitas termal rendah (0,5–0,6 W/m·K). Keterbatasan konduktivitas intrinsik ini menjadi bottleneck klasik dalam desain LHTES, sehingga optimasi geometri heat exchanger, pemilihan enkapsulasi, atau penambahan *metal foam/wool* menjadi krusial untuk mempertahankan laju pelepasan/penyimpanan energi yang kompetitif.

Urgensi ekonomis dari integrasi HTHP-LHTES juga tampak pada analisis *Levelized Cost of Storage* (LCOS). Dengan asumsi durasi discharge 4–6 jam pada suhu stabil ±2 °C, unit LHTES dengan PCM suhu tinggi mampu menggantikan *buffer tank* air bertekanan besar yang volumenya 5–8 kali lipat untuk kapasitas energi yang setara. Lebih jauh, kemampuan *peak shaving* melalui LHTES memungkinkan HTHP beroperasi pada kondisi desain optimal (COP tinggi) sepanjang waktu, sementara fluktuasi beban ditahan oleh unit penyimpanan — sebuah aplikasi *demand-side management* yang relevan untuk industri dengan tarif listrik Time-of-Use (ToU) di kawasan Eropa dan Asia Tenggara.

---

## 2. Landasan Teori & Formulasi Matematis

Pemodelan transient LHTES mengikuti formulasi enthalpy-based tiga fasa (padat, mushy, cair) yang umum diadopsi dalam Modelica dan finite-volume CFD. Untuk geometri *shell-and-tube* aksial-simetris, persamaan konservasi energi dalam koordinat silinder $(r,z,t)$ adalah:

$$\rho \, c_{p}^{\text{eff}}(T) \, \frac{\partial T}{\partial t} = \frac{1}{r} \frac{\partial}{\partial r}\left( k^{\text{eff}}(T) \, r \, \frac{\partial T}{\partial r} \right) + \frac{\partial}{\partial z}\left( k^{\text{eff}}(T) \, \frac{\partial T}{\partial z} \right) \tag{1}$$

dengan kapasitas panas efektif $c_p^{\text{eff}}$ mencakup kontribusi latent heat melalui pendekatan *apparent heat capacity*:

$$c_p^{\text{eff}}(T) = c_p^{s,l}(T) + L \, f(T) \tag{2}$$

di mana $f(T)$ adalah fungsi regularisasi Gaussian yang mendistribusikan latent heat $L$ dalam interval fasa perubahan $[T_s - \Delta T/2,\, T_s + \Delta T/2]$. Toloza et al. (2026) menggunakan $f(T)$ berbentuk:

$$f(T) = \frac{1}{\sqrt{2\pi}\,\sigma} \exp\!\left(-\frac{(T - T_m)^2}{2\sigma^2}\right), \qquad \sigma \approx \frac{\Delta T_{\text{mushy}}}{2{,}355} \tag{3}$$

dengan $T_m = 222 \,^\circ\text{C}$ dan $\Delta T_{\text{mushy}}$ dipilih 2–5 K sesuai eksperimen DSC (*Differential Scanning Calorimetry*).

Untuk tabung internal yang membawa *Heat Transfer Fluid* (HTF) — biasanya *thermal oil* atau air bertekanan — konservasi energi pada sisi HTF mengikuti:

$$\rho_f \, c_{p,f} \, A_f \, \frac{\partial T_f}{\partial t} + \dot{m} \, c_{p,f} \, \frac{\partial T_f}{\partial z} = h_i \, \pi d_i \, (T_{w,i} - T_f) \tag{4}$$

dengan $h_i$ koefisien konveksi internal, $d_i$ diameter dalam tabung, dan $\dot{m}$ laju aliran massa HTF. Kopling radial diselesaikan melalui resistansi termal seri pada dinding tabung dan PCM:

$$U_{o} = \left[ \frac{1}{h_i}\!\left(\frac{d_o}{d_i}\right) + \frac{d_o \ln(d_o/d_i)}{2 k_{\text{wall}}} + \frac{1}{h_{\text{PCM,eff}}}\right]^{-1} \tag{5}$$

Untuk PCM, konduktivitas efektif dapat ditingkatkan dengan *metal foam* dan menghasilkan:

$$k_{\text{PCM,eff}} = \varepsilon \, k_f + (1-\varepsilon) \, k_{\text{PCM}} \tag{6}$$

Parameter dimensionless yang mengendalikan dinamika proses adalah *Stefan number*, *Fourier number*, dan *Biot number*:

$$\text{Ste} = \frac{c_{p,s} (T_m - T_{\infty})}{L}, \quad \text{Fo} = \frac{\alpha t}{R^2}, \quad \text{Bi} = \frac{h R}{k} \tag{7}$$

Kriteria desain memastikan $\text{Ste} \ll 1$ untuk operasi quasi-steady dan $\text{Bi} < 1$ agar gradien radial dalam PCM dapat diselesaikan numerik tanpa *numerical diffusion* berlebihan. Implementasi dalam Modelica oleh Toloza et al. (2026) menggunakan diskretisasi 1D radial (*finite difference*) dengan orde kedua dan time-step adaptif berbasis *BDF (Backward Differentiation Formula)* untuk menjaga stabilitas pada transisi fasa cepat. Validasi dilakukan melalui *benchmark* numerik (*e.g.*, проблема Stefan klasik) dengan *grid-independence test* pada $\Delta r = 0{,}5$–$1{,}0$ mm dan *tolerance* $\leq 10^{-4}$.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri unit LHTES shell-and-tube mengikuti SOP berikut:

```
┌──────────────────────────────────────────────────────────────┐
│  F1: Karakterisasi PCM (DSC, TGA, siklus termal 1000x)       │
│            ↓                                                 │
│  F2: Desain geometri shell-and-tube (D_sh, d_i, L, pitch)    │
│            ↓                                                 │
│  F3: Simulasi transient Modelica (charge/discharge)          │
│            ↓                                                 │
│  F4: Analisis sensitivitas (h_HTF, m_dot, foam porosity)     │
│            ↓                                                 │
│  F5: Fabrikasi prototipe & instrumentasi (T, P, flow)        │
│            ↓                                                 │
│  F6: Commissioning test integrasi HTHP (COP, ramp rate)      │
│            ↓                                                 │
│  F7: Validasi model vs data eksperimen (RMSE < 5%)           │
└──────────────────────────────────────────────────────────────┘
```

**Fase 1 — Karakterisasi PCM.** Pengujian DSC menentukan $T_m$, $L$, dan $\Delta T_{\text{mushy}}$. Analisis TGA (*Thermo-Gravimetric Analysis*) memverifikasi stabilitas termal di atas $T_m + 50$ °C (target $> 300$ °C untuk eutektik nitrat). Pengujian *thermal cycling* 1000 siklus mengukur degradasi kapasitas latent (target $< 5$ %).

**Fase 2 — Desain geometri.** Shell diameter $D_{\text{sh}}$ dipilih untuk compactness tipikal $\beta = V_{\text{PCM}} / V_{\text{total}} \geq 0{,}65$. Tube pitch $P_t = 1{,}25 d_o$ untuk layout triangular, dengan jumlah tabung $N_t$ dihitung:

$$N_t = \frac{0{,}907 \, D_{\text{sh}}^2}{P_t^2} \tag{8}$$

**Fase 3 — Simulasi Modelica.** Model dikembangkan dengan pustaka `Buildings.Fluid.HeatExchangers` dan `Modelica.Thermal.HeatTransfer`. Skenario simulasi mencakup: (a) *charging* dari HTHP pada $T_{\text{HTF,in}} = 240$ °C, (b) *discharging* ke beban industri pada $T_{\text{HTF,in}}^{\text{dis}} = 230$ °C, dan (c) mode *standby* selama 1–6 jam.

**Fase 4 — Analisis sensitivitas.** Parameter yang divariasikan meliputi: laju aliran HTF (0,005–0,05 kg/s per tabung), temperatur inlet, dan porositas metal foam (0,85–0,95). Output yang dipantau: waktu *full charge/discharge* ($t_{\text{ch}}$, $t_{\text{dis}}$), efisiensi exergetic $\eta_{\text{ex}}$, dan *effectiveness* $\varepsilon_{\text{LMTD}}$.

**Fase 5 — Fabrikasi & instrumentasi.** Material shell: baja karbon SA-516 Gr. 70 (untuk operasi hingga 300 °C). Tube: stainless steel 316L. Sensor: termokopel Tipe K kelas 1 ($\pm 1{,}1$ °C atau 0,4 % bacaan), dipasang di 9 lokasi radial dan 5 lokasi aksial. Flowmeter Coriolis untuk akurasi $\pm 0{,}05$ %.

**Fase 6 — Commissioning HTHP.** Integrasi dengan HTHP siklus trans-kritis CO₂ atau HFO/HFC mengikuti standar EN 378 (keamanan refrigeran) dan ASME BPVC Section VIII (desain pressure vessel).

**Fase 7 — Validasi.** Metrik akurasi: RMSE (Root Mean Square Error) $< 5$ %, MAPE $< 3$ %, dan *R²* $> 0{,}98$ antara prediksi Modelica dan data eksperimen.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Spesifikasi desain unit LHTES skala pilot industri:**

| Parameter | Nilai | Satuan |
|---|---|---|
| PCM | Solar Salt (60 % NaNO₃ – 40 % KNO₃) | — |
| $T_m$ |.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
