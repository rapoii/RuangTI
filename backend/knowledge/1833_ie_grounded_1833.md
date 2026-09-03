# 1833 — Model Numerik Transien Unit Penyimpanan Energi Termal Panas Laten pada Suhu ~222°C untuk Integrasi dengan Pompa Kalor Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri merupakan konsumen energi akhir terbesar di Uni Eropa dan global, dengan porsi lebih dari 25% dari total permintaan energi, dimana sekitar 50%-70% kebutuhan tersebut berupa *process heat* (panas proses) pada rentang suhu 150°C–400°C (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Deskarbonisasi panas proses industri menjadi tantangan strategis karena dominasi burner gas alam pada boiler dan tungku konvensional. Solusi *High-Temperature Heat Pump* (HTHP) muncul sebagai teknologi elektrifikasi yang menawarkan *Coefficient of Performance* (COP) 3–5, dengan potensi削减 emisiensi CO₂ hingga 80% pada suhu output 150°C–250°C (Xu & Wang, 2024). Namun demikian, karakteristik operasional HTHP yang intermiten dan *mismatch* antara profil pasokan listrik fluktuatif (PLTS/PV surya) dengan permintaan panas proses yang fluktuatif memerlukan unit *Thermal Energy Storage* (TES) sebagai buffer termal untuk menjamin kontinuitas operasional.

Toloza, Payá, dan Barceló (2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) menegaskan bahwa *Latent Heat Thermal Energy Storage* (LHTES) merupakan teknologi kritis yang mampu meningkatkan fleksibilitas dan efisiensi sistem terintegrasi HTHP, terutama pada aplikasi *industrial process heat* dengan suhu sekitar 222°C. Tantangan fundamental LHTES terletak pada konduktivitas termal rendah dari mayoritas *Phase Change Material* (PCM) — umumnya hanya 0,2–0,5 W/(m·K) untuk garam nitrat atau organik — yang menghambat laju transfer panas dan memperpanjang durasi *charge/discharge*. Untuk mengatasi hal tersebut, tiga pendekatan rekayasa dominan adalah: (i) optimasi geometri *heat exchanger*, (ii) enkapsulasi PCM dalam matriks komposit, dan (iii) penggunaan *metal wool* atau *fins* sebagai enhancer. Konfigurasi *shell-and-tube*脱颖而出 karena tiga keunggulan struktural: kekompakan volumetric yang tinggi, robustnya struktur mekanis untuk operasi pada suhu dan tekanan tinggi, serta kapasitas *thermal enhancement* melalui integrasi internal fins (Toloza et al., 2026). Urgensi industrialisasi unit LHTES ~222°C ini diperkuat oleh fakta bahwa pasar global TES diproyeksikan mencapai USD 9,8 miliar pada 2030, dengan CAGR 8,7% — didorong oleh integrasi dengan pompa kalor dan sistem energi terbarukan (Xu & Wang, 2024).

---

## 2. Landasan Teori & Formulasi Matematis

Model numerik transien yang dikembangkan Toloza et al. (2026) menggunakan bahasa Modelica, dengan formulasi termodinamika berbasis *enthalpy method* dan *effective heat capacity* untuk menangani *moving interface* selama proses melting/solidification. Persamaan dasar konservasi energi pada domain PCM (shell side) diselesaikan secara 2-D axisymmetric:

$$\rho_{PCM} \frac{\partial h}{\partial t} = \nabla \cdot (k_{PCM} \nabla T) + \dot{q}_{lat}$$

dengan $\rho_{PCM}$ densitas PCM (kg/m³), $h$ entalpi spesifik (J/kg), $k_{PCM}$ konduktivitas termal efektif (W/(m·K)), dan $\dot{q}_{lat}$ sumber panas laten per volume yang muncul pada saat proses perubahan fasa. Formulasi entalpi ini lebih disukai dibanding metode *front-tracking* Stefan karena menghindari diskontinuinitas kuat pada batas solid-liquid.

Untuk keperluan komputasi, metode *apparent heat capacity* mengaproximasi panas laten sebagai puncak pada fungsi kapasitas panas efektif:

$$c_{p,eff}(T) = c_{p,s}(T) + \frac{L}{\Delta T_{mush}} \cdot f(T)$$

dengan $c_{p,s}$ kapasitas panas fase padat, $L$ panas laten peleburan (J/kg), $\Delta T_{mush}$ interval *mushy zone* (tipikal 2–5 K), dan $f(T)$ fungsi regularisasi berbentuk Gaussian atau piecewise-linear. Persamaan energi pada domain PCM menjadi:

$$\rho_{PCM} c_{p,eff}(T) \frac{\partial T}{\partial t} = \frac{1}{r} \frac{\partial}{\partial r}\left(r k_{PCM} \frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\left(k_{PCM} \frac{\partial T}{\partial z}\right)$$

Untuk *Heat Transfer Fluid* (HTF) pada sisi tube, persamaan konservasi energi 1-D dengan asumsi *plug flow* dan koefisien perpindahan panas konvektif $h_{conv}$ adalah:

$$\rho_f c_{p,f} A_c \frac{\partial T_f}{\partial t} + \dot{m}_f c_{p,f} \frac{\partial T_f}{\partial z} = h_{conv} \pi D_{t,i} (T_{wall} - T_f)$$

dengan $\dot{m}_f$ laju alir massa HTF (kg/s), $A_c$ luas penampang tube, $D_{t,i}$ diameter dalam tube, dan $T_{wall}$ suhu dinding tube. Kondisi kopling antardomain dipenuhi oleh kesetimbangan panas pada antarmuka tube-PCM:

$$k_{tube} \frac{T_{tube,o} - T_{wall}}{s_{tube}} = k_{PCM,eff} \frac{T_{wall} - T_{PCM,surface}}{s_{PCM}}$$

Model juga memasukkan konveksi alami di dalam PCM cair menggunakan aproksimasi Boussinesq dengan bilangan Rayleigh:

$$Ra = \frac{g \beta (T_{wall} - T_m) L_c^3}{\nu \alpha}$$

Korelasi Nusselt untuk rongga silinder vertikal dengan $Ra \in [10^4, 10^7]$ mengikuti $Nu = 0,059 \, Ra^{1/3}$ (Churchill & Chu). Parameter operasional kunci yang menyusun model adalah: $T_{in}$ (suhu masuk HTF), $T_{out}$ (suhu keluar), $T_m$ (titik lebur PCM = ~222°C), $\dot{m}_f$ (laju alir), dan geometri tube ($D_i$, $D_o$, pitch). Energi tersimpan pada akhir *charging* diekspresikan:

$$E_{stored} = \int_V \rho_{PCM} \left[ c_{p,s}(T_m - T_{i}) + L + c_{p,l}(T_{max} - T_m) \right] dV$$

dengan $T_i$ suhu awal PCM dan $T_{max}$ suhu maksimum saat pengisian selesai.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi model Toloza et al. (2026) mengikuti arsitektur berlapis dalam bahasa Modelica (*object-oriented equation-based modeling*), dengan langkah SOP industri berikut:

**Tahap 1 — Karakterisasi Material PCM.** Eutectic salt (misalnya campuran KNO₃-NaNO₃ atau PCM organik *erythritol-sugar alcohol*) dikarakterisasi melalui DSC (*Differential Scanning Calorimetry*) untuk mendapatkan $T_m$, $L$, $c_p(T)$, $k(T)$, dan $\rho(T)$. Validasi data dilakukan terhadap basis data IEA SHC Task 58/ECES Annex 29.

**Tahap 2 — Desain Geometri Shell-and-Tube.** Dimensi utama — diameter dalam shell $D_s$ (0,1–0,5 m), panjang tube $L_t$ (1–5 m), jumlah tube $N_t$, dan pitch triangular/square — ditentukan melalui约束 berikut: (i) volume PCM harus memenuhi target kapasitas energi $E_{target}$ dengan margin desain 20%; (ii) kecepatan HTF dalam tube 0,5–2,5 m/s untuk membatasi pressure drop <50 kPa; (iii) luas perpindahan panas spesifik >10 m²/m³.

**Tahap 3 — Discretisasi Domain.** Mesh CFD 2-D axisymmetric dengan elemen quad dominan, refined di sekitar dinding tube dan mushy zone (Δr ≈ 0,5 mm). Diskretisasi temporal menggunakan *backward Euler* dengan Δt adaptif (1–60 detik) berdasarkan Courant number <1 untuk stabilitas.

**Tahap 4 — Penentuan Kondisi Batas.** (a) Inlet HTF: $T_{f,in}(t)$ sebagai profil transien (umumnya *step change* atau ramp); (b) Outlet HTF: outflow $\partial T_f/\partial z = 0$; (c) Shell outer wall: *adiabatic* atau *convective ambient* $h_{amb}$ = 5–15 W/(m²·K); (d) Symmetry axis: $\partial T/\partial r = 0$.

**Tahap 5 — Validasi & Verifikasi.** Run dilakukan pada platform Dymola/Modelon atau Wolfram SystemModeler dengan *grid independence test* (3 level mesh, GCI <2%). Validasi eksperimental menggunakan *test rig* HTHP+TES dengan sensor T-type thermocouple akurasi ±0,5°C pada 12 titik radial-aksial.

**Tahap 6 — Analisis Sensitivitas.** Studi parametrik atas $T_{f,in}$, $\dot{m}_f$, $T_m$, dan konfigurasi tube untuk membangun *design map* operasional. Diagram alir proses mengikuti bagan: *Data Material → Geometri → Mesh → Solve (Coupled) → Post-process → Validasi → Optimasi*.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Unit LHTES shell-and-tube vertikal terintegrasi dengan HTHP untuk aplikasi *industrial process heat* pada suhu 222°C. Kapasitas target: $E_{target} = 500$ kWh_th untuk mensuplai lini *drying* pada pabrik makanan selama 2 jam.

**Input Parameter:**

| Parameter | Nilai | Satuan |
|---|---|---|
| PCM (eutectic KNO₃-NaNO₃-Ca(NO₃)₂) | — | — |
| Titik lebur $T_m$ | 222 | °C |
| Panas laten $L$ | 130 | kJ/kg |
| $c_{p,s}$ | 1,55 | kJ/(kg·K) |
| $c_{p,l}$ | 1,65 | kJ/(kg·K) |
| $\rho_{PCM}$ | 1850 | kg/m³ |
| $k_{PCM,s}$ | 0,52 | W/(m·K) |
| $k_{PCM,l}$ | 0,65 | W/(m·K) |
| Diameter dalam tube $D_{t,i}$ | 20 | mm |
| Diameter luar tube $D_{t,o}$ | 25 | mm |
| Panjang tube $L_t$ | 3,0 | m |
| Jumlah tube $N_t$ | 37 | — |
| HTF (sintetik oil Dowtherm A) | — | — |
| $T_{f,in}$ | 245 | °C |
| $\dot{m}_f$ (total) | 1,2 | kg/s |
| $c_{p,f}$ | 2,4 | kJ/(kg