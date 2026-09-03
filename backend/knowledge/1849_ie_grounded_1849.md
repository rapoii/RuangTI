# 1849 — Model Numerik Transien Unit Penyimpanan Energi Termal Panas Laten pada ~222°C untuk Integrasi dengan Pompa Panas Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri menyumbang hampir 37% konsumsi energi final global, di mana lebih dari separuh beban termal berada pada rentang suhu menengah-tinggi (100–400°C) untuk proses seperti sterilisasi, pengeringan, distilasi, dan reaksi kimia endotermik. Dalam kerangka transisi energi yang diangkat secara eksplisit oleh Xu & Wang (2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)), *heat pump* suhu-tinggi (HTHP) diakui sebagai salah satu tulang punggung dekarbonisasi panas proses karena mampu menaikkan suhu *waste heat* atau sumber panas terbarukan mendekati kebutuhan proses dengan *Coefficient of Performance* (COP) yang masih signifikan. Namun, sifat fluktuatif sumber energi terbarukan dan karakteristik *batch* dari banyak proses industri mengharuskan keberadaan unit *buffer* termal yang tangguh.

Di sinilah peran sistem *Latent Heat Thermal Energy Storage* (LHTES) yang diangkat oleh Toloza, Payá, dan Barceló (2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) menjadi strategis. Unit LHTES menyimpan energi dalam bentuk panas laten *phase change material* (PCM) sehingga densitas energi volumetric-nya 5–10× lipat lebih besar dibanding penyimpanan panas sensibel konvensional. Untuk aplikasi panas proses pada ~222°C, eutektik berbasis garam nitrat atau campuran logam ringan menjadi kandidat utama karena titik lelehnya dapat di-tune sesuai kebutuhan. Permasalahan kritikal yang diidentifikasi oleh Toloza et al. (2026) adalah konduktivitas termal PCM yang rendah (umumnya 0,5–1,5 W/m·K), sehingga laju pengisian dan pengosongan menjadi bottleneck. Oleh karena itu, konfigurasi *shell-and-tube* vertikal dipilih karena kekompakan, integritas struktural, dan kapasitas *thermal enhancement* melalui modifikasi geometrik, enkapsulasi, atau *metal wool* di sisi PCM.

Integrasi HTHP + LHTES menciptakan耦pling sinergis: saat listrik murah/renewable tersedia, HTHP memompa energi ke LHTES (mode *charging*); saat proses membutuhkan panas puncak, LHTES melepas energi secara *dispatchable*. Dengan demikian, kapasitas terpasang HTHP dapat ditekan, *peak shaving* tercapai, dan emisi CO₂ sektor termal industri berkurang secara terukur. Urgensi ekonominya juga jelas: biaya energi termal industri sering mencapai 10–25% *operating cost* manufaktur, sehingga setiap peningkatan 1% pada efisiensi termal berdampak langsung pada margin operasional.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Konservasi Energi pada PCM (Formulasi Enthalpy)

Untuk memodelkan transisi fasa secara transien tanpa diskontinuitas pada antarmuka padat-cair, digunakan formulasi enthalpy berdasarkan Toloza et al. (2026). Energi dalam total $H$ per satuan volume didefinisikan sebagai:

$$H(T) = \rho_{PCM} \left[ c_{p,s} \, T + f \cdot L + c_{p,l} \, (T - T_m) \cdot \mathbb{1}_{T > T_m} \right]$$

dengan $\rho_{PCM}$ densitas PCM, $c_{p,s}$ dan $c_{p,l}$ kapasitas panas spesifik fasa padat dan cair, $L$ panas laten fusi, $T_m$ titik leleh, dan $f \in [0,1]$ fraksi liquid (*liquid fraction*). Persamaan energi 1-D radial dalam domain silinder PCM adalah:

$$\rho_{PCM} \frac{\partial H}{\partial t} = \frac{1}{r} \frac{\partial}{\partial r}\left( k_{PCM}(T) \, r \, \frac{\partial T}{\partial r} \right)$$

### 2.2 Perpindahan Panas pada Sisi HTF (*Heat Transfer Fluid*)

Untuk HTF yang mengalir di dalam tube, persamaan konservasi energi 1-D aksial dengan asumsi *plug flow* dan tanpa gradien radial:

$$\rho_{HTF} \, c_{p,HTF} \, A_{HTF} \frac{\partial T_{HTF}}{\partial t} + \dot{m}_{HTF} \, c_{p,HTF} \frac{\partial T_{HTF}}{\partial z} = U_o \, \pi \, D_o \, (T_{HTF} - T_{wall})$$

dengan $U_o$ koefisien perpindahan panas overall berbasis luas luar tube, $D_o$ diameter luar tube, dan $\dot{m}_{HTF}$ laju alir massa HTF. Kondisi batas di dinding tube dievaluasi dari fluks konduksi radial PCM:

$$q'' = -k_{PCM} \left. \frac{\partial T}{\partial r} \right|_{r = R_i}$$

### 2.3 Kapasitas Penyimpanan Energi

Kapasitas energi total unit LHTES dengan volume PCM efektif $V_{PCM}$:

$$Q_{total} = \rho_{PCM} \, V_{PCM} \left[ c_{p,s}(T_m - T_{s,i}) + L + c_{p,l}(T_{l,i} - T_m) \right]$$

### 2.4 Bilangan-Bilangan Karakteristik

Untuk analisis kinerja digunakan tiga bilangan dimensionless utama:

**Biot Number** (resistansi internal vs. permukaan):

$$Bi = \frac{U \cdot R_i}{k_{PCM}}$$

**Stefan Number** (rasio panas sensibel vs. laten):

$$Ste = \frac{c_{p,s}(T_m - T_i)}{L}$$

**Fourier Number** (skala waktu difusi):

$$Fo = \frac{\alpha_{PCM} \cdot t}{R_i^2}, \quad \alpha_{PCM} = \frac{k_{PCM}}{\rho_{PCM} c_{p,s}}$$

### 2.5 Efektivitas & NTU pada Mode Discharge

Untuk mengkuantifikasi kualitas pelepasan panas digunakan metode $\varepsilon$-NTU:

$$\varepsilon = 1 - \exp\left[ -NTU \cdot (1 - C_r) \right]$$

dengan $C_r = \dot{m}_{min} c_{p,min} / (\dot{m}_{max} c_{p,max})$ rasio kapasitas heat rate minimum dan maksimum, serta $NTU = UA / (\dot{m}_{min} c_{p,min})$.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis di industri mengikuti SOP integrasi HTHP–LHTES berbasis rekomendasi Toloza et al. (2026) dan Xu & Wang (2024):

**Tahap 1 — Karakterisasi Beban Termal Proses:**
1. Audit profil panas proses (suhu, durasi, *duty cycle*) selama 12 bulan representatif.
2. Identifikasi rentang *base load* dan *peak load* untuk sizing unit storage.
3. Penetukan target kapasitas termal $Q_{target}$ (MJ) dan *discharge time* minimum (jam).

**Tahap 2 — Seleksi PCM dan Geometri Shell-and-Tube:**
1. Pilih PCM eutektik dengan $T_m$ ≈ 222°C dan $L > 180$ kJ/kg.
2. Tentukan diameter tube $D_o$, ketebalan dinding, dan jumlah tube $N_t$ untuk memenuhi luas perpindahan panas yang dibutuhkan $A_{req} = Q_{target}/(U \cdot \Delta T_{LMTD})$.
3. Validasi structural pressure vessel per ASME BPVC Section VIII.

**Tahap 3 — Pemodelan Numerik Transien (Modelica):**
1. Diskretisasi domain PCM radial (≥30 node untuk akurasi pada *mushy zone*).
2. Coupling *DASSL*-based solver dengan toleransi relatif $10^{-6}$.
3. Kalibrasi dengan data eksperimental titik leleh dan *enthalpy curve* PCM.

**Tahap 4 — Integrasi dengan HTHP:**
1. Konfigurasi HTF loop dengan thermal oil atau *molten salt* (suhu operasi hingga 280°C).
2. Instalasi *three-way valve* untuk switching mode *charge/discharge*.
3. Implementasi *control logic* berbasis prediksi kebutuhan proses (model predictive control/MPC).

**Tahap 5 — Commissioning & Validasi:**
1. *Thermal cycling test* minimal 50 siklus untuk verifikasi stabilitas PCM.
2. Pengukuran $Q_{discharged}$ aktual vs. simulasi (target deviasi < 8%).
3. Commissioning HTHP dan tuning COP pada berbagai *lift* suhu.

**Tahap 6 — Operasi & Pemeliharaan:**
1. Inspeksi *metal wool* atau *fins* setiap 1000 siklus untuk antisipasi degradasi konduktivitas efektif.
2. Monitoring *liquid fraction profile* via sensor suhu多点 pada radius kritis.
3. Pembersihan HTF dan analisa korosi per ASTM D6304.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Unit LHTES shell-and-tube vertikal untuk mendukung proses industri makanan/minuman (sterilisasi) dengan beban termal puncak 250 kW pada 220°C, didesain discharge selama 4 jam.

### 4.1 Parameter Desain

| Parameter | Simbol | Nilai | Satuan |
|---|---|---|---|
| Titik leleh PCM | $T_m$ | 222 | °C |
| Panas laten PCM | $L$ | 220 | kJ/kg |
| Densitas PCM | $\rho_{PCM}$ | 1850 | kg/m³ |
| Konduktivitas termal PCM | $k_{PCM}$ | 1,1 | W/m·K |
| $c_p$ padat/cair | $c_{p,s/l}$ | 1,55 / 1,65 | kJ/(kg·K) |
| Diameter luar tube | $D_o$ | 0,060 | m |
| Diameter dalam tube | $D_i$ | 0,054 | m |
| Panjang tube | $L_t$ | 2,0 | m |
| Jumlah tube | $N_t$ | 19 | — |
| Massa alir HTF | $\dot{m}_{HTF}$ | 1,2 | kg/s |
| $c_p$ HTF | $c_{p,HTF}$ | 2,4 | kJ/(kg·K) |
| Suhu inlet HTF (charge) | $T_{HTF,in}$ | 245 | °C |

### 4.2 Perhitungan Kapasitas Energi Total

Diasumsikan PCM dimuat dengan suhu awal 195°C (padat, subcooled 27°C di bawah $T_m$). Volume PCM efektif:

$$V_{PCM} = \frac{\pi}{4}(D_{shell}^2 - N_t D_o^2) L_t$$

Dengan $D_{shell} = 0,35$ m: $V_{PCM} \approx \frac{\pi}{4}(0,35^2 - 19 \cdot 0,06^2) \cdot 2 \approx 0,085$ m³.

Massa PCM: $m_{PCM} = \rho_{PCM} \cdot V_{PCM} = 1850 \cdot 0,085 = 157,25$ kg.