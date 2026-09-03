# 2905 — Transient Numerical Model of Latent Heat Thermal Energy Storage (LHTES) pada Suhu ~222°C untuk Integrasi dengan High-Temperature Heat Pump (HTHP)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *Prospects of heat pump for thermal energy decarbonization*, *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri menyumbang sekitar 24% dari emisi gas rumah kaca global, dengan porsi terbesar berasal dari permintaan *process heat* bersuhu menengah–tinggi (100–400°C) untuk industri kimia, makanan-minuman, pulp & paper, serta tekstil (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Dekarbonisasi *process heat* konvensional yang berbasis boiler gas alam membutuhkan substitusi teknologi yang secara simultan memenuhi tiga kriteria: (i) efisiensi eksergetik tinggi, (ii) fleksibilitas operasional terhadap variabilitas sumber energi terbarukan, dan (iii) kemampuan menyimpan energi termal untuk decoupling antara produksi dan konsumsi. Dalam konteks ini, Toloza, Payá, dan Barceló (2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) menegaskan bahwa **Latent Heat Thermal Energy Storage (LHTES)** berbasis *Phase Change Material* (PCM) merupakan teknologi enabler ketika diintegrasikan dengan **High-Temperature Heat Pump (HTHP)**. HTHP modern mampu menaikkan suhu output ke rentang 150–250°C dengan COP 2,5–4,5 menggunakan siklus trans-kritis CO₂ atau campuran refrigeran alami; akan tetapi, tanpa buffer termal, output HTHP sulit disejajarkan dengan profil demand industri yang bersifat fluktuatif.

Urgensi operasional LHTES-HTHP coupling menjadi nyata ketika kita mengkuantifikasi disparitas temporal: permintaan *process heat* pada industri makanan misalnya memiliki puncak pagi (sterilisasi) dan sore (pasteurisasi), sementara produksi energi termal HTHP paling efisien pada kondisi *steady-state*. LHTES dengan PCM yang beroperasi di sekitar 222°C (eutektik nitrat berbasis garam terlarut) menyediakan densitas energi volumetrik 3–5× lebih tinggi dibanding *sensible heat storage* (SHS) air atau molten salt, sehingga mampu memampatkan kapasitas penyimpanan dalam footprint yang ringkas. Namun, Toloza dkk. (2026) menekankan satu bottleneck kritis: konduktivitas termal PCM pada umumnya rendah ($k_{PCM} \approx 0,2–1,0 \text{ W/m·K}$), yang menyebabkan front melting bergerak lambat dan menghambat *charging/discharging* rate. Solusi yang dieksplorasi dalam paper mencakup optimalisasi geometri *heat exchanger* (HX), strategi enkapsulasi, serta penggunaan metal foam/wool sebagai *thermal conductivity enhancer* (TCE). Di antara alternatif geometri, konfigurasi **shell-and-tube**脱颖而出 karena kekompakan, kekuatan struktural, dan kapasitas untuk *thermal enhancement* melalui pemasangan internal fins atau turbulators. Oleh sebab itu, paper Toloza dkk. (2026) memposisikan studi mereka pada pengembangan model numerik transien vertikal shell-and-tube LHTES yang ditulis dalam bahasa **Modelica** — pendekatan *object-oriented equation-based* yang ideal untuk simulasi *multi-domain* (termal-hidrolik-termo-mekanis) pada skala sistem industri.

---

## 2. Landasan Teori & Formulasi Matematis

Formulasi model LHTES transien pada paper Toloza dkk. (2026) dibangun di atas tiga pilar persamaan: (1) konservasi energi dalam PCM dengan perubahan fasa, (2) dinamika fluida Heat Transfer Fluid (HTF) dalam tabung, dan (3) kopling termal antarmuka HTF–dinding tabung–PCM.

### 2.1 Persamaan Energi pada PCM (Effective Heat Capacity Method)

Karena front melting tidak dapat direpresentasikan sebagai *sharp interface* pada simulasi numerik kontinum, paper menggunakan **metode kapasitas panas efektif** (*apparent/effective heat capacity method*):

$$\rho_{PCM} c_{p,eff}(T) \frac{\partial T}{\partial t} = \nabla \cdot (k_{PCM} \nabla T) + \dot{q}_{TCE}$$

dengan $\rho_{PCM}$ densitas PCM, $k_{PCM}$ konduktivitas termal efektif (sudah memasukkan kontribusi *thermal conductivity enhancer* seperti metal foam), dan $c_{p,eff}(T)$ adalah kapasitas panas efektif yang menangkap latent heat $L$ pada rentang transisi fasa $\Delta T_m$:

$$c_{p,eff}(T) = c_{p,s} + \frac{L}{\Delta T_m} f(T), \quad f(T) = \begin{cases} 0 & T < T_m - \Delta T_m/2 \\ 1 & T_m - \Delta T_m/2 \le T \le T_m + \Delta T_m/2 \\ 0 & T > T_m + \Delta T_m/2 \end{cases}$$

Untuk PCM eutektik nitrat pada ~222°C (kandidat: campuran KNO₃–NaNO₃ atau material garam eutektik proprietary yang disebutkan dalam paper), $L \approx 100–180 \text{ kJ/kg}$ dan $T_m \approx 222°C$.

### 2.2 Persamaan Konduksi Dinding Tabung (Cylindrical Coordinates)

Dinding tabung inner-tube dimodelkan sebagai koordinat silindris 1D radial:

$$\rho_w c_{p,w} \frac{\partial T_w}{\partial t} = \frac{1}{r}\frac{\partial}{\partial r}\left( k_w r \frac{\partial T_w}{\partial r}\right)$$

dengan kondisi batas:

$$-k_w \left.\frac{\partial T_w}{\partial r}\right|_{r=r_i} = h_{HTF}(T_{HTF} - T_{w,i})$$

$$-k_w \left.\frac{\partial T_w}{\partial r}\right|_{r=r_o} = -k_{PCM}\left.\frac{\partial T_{PCM}}{\partial r}\right|_{r=r_o}$$

### 2.3 Dinamika HTF dalam Tabung

Aliran HTF (umumnya air, thermal oil, atau refrigeran R1234ze untuk coupling dengan HTHP) dalam tabung mengikuti persamaan konservasi massa, momentum, dan energi 1D:

$$\frac{\partial \rho_{HTF}}{\partial t} + \frac{\partial (\rho_{HTF} u)}{\partial x} = 0$$

$$\rho_{HTF}\left(\frac{\partial u}{\partial t} + u \frac{\partial u}{\partial x}\right) = -\frac{\partial p}{\partial x} + \frac{4\tau_w}{D_i}$$

$$\rho_{HTF} c_{p,HTF}\left(\frac{\partial T_{HTF}}{\partial t} + u \frac{\partial T_{HTF}}{\partial x}\right) = \frac{4 h_{HTF}}{D_i}(T_{w,i} - T_{HTF})$$

Koefisien konveksi $h_{HTF}$ dihitung melalui korelasi Nu yang sesuai rezim (laminar/transisi/turbulen), misalnya Gnielinski untuk turbulen:

$$Nu_D = \frac{(f/8)(Re_D - 1000)Pr}{1 + 12,7\sqrt{f/8}(Pr^{2/3}-1)}, \quad f = (0,790 \ln Re_D - 1,64)^{-2}$$

### 2.4 Kopling HTF–PCM dalam Modelica

Keunggulan bahasa Modelica (digunakan Toloza dkk., 2026) adalah dekomposisi domain menjadi *connectors* yang memungkinkan *acausal* coupling. Model HTF (1D distributed) di-discretisasi dengan *finite volume method* terhadap sumbu aksial $x$, sementara PCM dan dinding tabung di-discretisasi terhadap sumbu radial $r$. State vector sistem menjadi:

$$\mathbf{X} = [T_{PCM,i,j,k},\ T_{w,i,j,k},\ T_{HTF,i,k},\ p_i]^T$$

dengan indeks $(i,j,k)$ merepresentasikan node aksial, radial, dan angular. Solver integrator (LSODA/DASSL) dengan toleransi relatif $10^{-6}$ digunakan untuk menangani stiffnes akibat disparitas time-constants antara PCM (orde $10^3$ s) dan HTF (orde $10^1$ s).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi rekayasa industri dari paper Toloza dkk. (2026) mengikuti SOP berlapis sebagai berikut:

**Fase 1 — Karakterisasi Termofisik PCM.** Pengukuran DSC (Differential Scanning Calorimetry) untuk menentukan $T_m, L, c_{p,s}, c_{p,l}$. Pengukuran T-history untuk memvalidasi perilaku *supercooling* dan kinetika nukleasi. Standar acuan: ASTM E1269 (specific heat), ASTM D3418 (transition temperatures).

**Fase 2 — Desain Shell-and-Tube.** Parameter desain kunci: rasio $D_o/D_i$ (umumnya 2–4), panjang tabung $L$ (1–3 m), jumlah tabung $N$ (tergantung kapasitas target), spasi baffle. Material tabung: baja karbon dengan $k_w \approx 45 \text{ W/m·K}$. Untuk *thermal enhancement* di sisi PCM, opsi metal foam (Al, Cu) dengan porosity 0,85–0,95 dimasukkan ke annulus shell.

**Fase 3 — Pembangunan Model Modelica.** Langkah-langkah: (i) definisi *record* untuk termofisik PCM dan HTF; (ii) implementasi komponen PCM radial 1D dengan array $N_r$ node; (iii) implementasi dinding tabung radial; (iv) implementasi HTF aksial 1D; (v) koneksi *heat ports* antar-komponen; (vi) integrasi dengan model HTHP (siklus termodinamika terpisah) untuk menguji integrasi.

**Fase 4 — Validasi.** Perbandingan dengan data eksperimental *charging curve* dari prototipe. Kriteria konvergensi: selisih relatif $\le 5\%$ pada prediksi waktu charging untuk $SOC = 90\%$.

**Fase 5 — Integrasi Sistem.** Simulasi *co-simulation* dengan model HTHP trans-kritis CO₂ menggunakan FL/FMI interface untuk mengevaluasi *dispatch strategy* harian.

Diagram alir logika keputusan operasional:
$$\text{HTHP COP}_{design} \ge 2,8 \Rightarrow \text{Charge} \to \text{PCM} \mid T_{HTF,in} \ge T_m - 5°C$$
$$\text{Demand}_{process} > \text{HTHP}_{cap} \Rightarrow \text{Discharge} \leftarrow \text{PCM}$$

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Unit LHTES shell-and-tube vertikal untuk industri makanan/minuman dengan kapasitas target $Q_{th} = 50 \text{ kWh}$ pada suhu transisi $T_m = 222°C$, digunakan untuk sterilisasi batch 4× per hari.

### 4.1 Spesifikasi Desain

| Parameter | Nilai | Satuan |
|---|---|---|
| PCM | Eutektik nitrat proprietary | — |
| $T_m$ | 222 | °C |
| $L$ (latent heat) | 150 | kJ/kg |
| $\rho_{PCM}$ | 1850 | kg/m³ |
| $k_{PCM}$ | 0,5 (tanpa TCE), 5,0 (dengan Al foam) | W/m·K |
| $c_{p,PCM,s}$ | 1,5 | kJ/kg·K |
| Diameter tabung inner $D_i$ | 25 | mm |
| Diameter shell $D_s$ | 150 | mm |
| Panjang tabung $L_t$ | 2,0 | m |
| HTF | Thermal oil (Therminol 66) | — |
| $\dot{m}_{HTF}$ | 0,5 | kg/s |

### 4.2 Perhitungan Massa PCM dan Kapasitas Energi

Massa PCM yang dibutuhkan dihitung dari kapasitas target dengan asumsi *full latent utilization*:

$$m_{PCM} = \frac{Q_{th}}{L} = \frac{50 \times 3600 \text{ kJ}}{150 \text{ kJ/kg}} = 1200 \text{ kg}$$

Volume PCM: $V_{PCM} = m_{PCM}/\rho_{PCM} = 1200/1850 = 0