# 3017 — Pemodelan Numerik Transien Unit Penyimpanan Energi Termal Panas Laten pada Suhu ~222°C untuk Integrasi dengan Pompa Kalor Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump*
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri bertanggung jawab atas hampir 25% dari konsumsi energi final global dan menyumbang sekitar 30% emisi CO₂ terkait energi (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Dari total kebutuhan energi industri tersebut, lebih dari separuh berupa **panas proses** (*process heat*) dengan rentang suhu yang bervariasi, mulai dari uap suhu rendah (~100°C) hingga panas suhu menengah-tinggi (>200°C) yang digunakan pada sektor kimia, makanan & minuman, tekstil, pulp & kertas, serta pemrosesan logam. Elektrifikasi panas proses melalui **High-Temperature Heat Pumps (HTHPs)** menjadi salah satu pilar utama dekarbonisasi karena mampu menaikkan suhu energi termal sumber (biasanya *waste heat* 30–90°C) menjadi tingkat yang dibutuhkan proses industri dengan *Coefficient of Performance* (COP) teoretis 3–5 (Xu & Wang, 2024).

Namun demikian, operasional HTHP menghadapi dua tantangan struktural yang krusial. Pertama, **mismatch temporal** antara profil ketersediaan *waste heat* (sering间歇) dan kebutuhan proses (sering kontinu). Kedua, **mismatch termal** antara suhu output kompresor dan titik uap yang dibutuhkan evaporator/kondenser proses. Untuk menjawab kedua tantangan ini, Toloza, Payá, dan Barceló (2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) memperkenalkan pendekatan **Latent Heat Thermal Energy Storage (LHTES)** sebagai unit buffer termal yang dikawinkan dengan HTHP pada suhu operasi ~222°C — kisaran suhu yang sangat relevan untuk aplikasi industri susu, kimia halus, dan pengeringan tekstil.

Keunggulan LHTES dibanding *sensible heat storage* adalah densitas penyimpanan energi yang jauh lebih tinggi (200–500 kJ/kg vs. 50–100 kJ/kg air pada ΔT 50°C), sehingga footprint sistem dapat ditekan signifikan pada fasilitas industri dengan keterbatasan ruang. Akan tetapi, seperti ditegaskan oleh Toloza et al. (2026), **konduktivitas termal rendah** dari sebagian besar *phase change material* (PCM) — umumnya pada orde 0,2–0,5 W/m·K untuk garam dan 0,1–0,3 W/m·K untuk paraffin — menjadi *bottleneck* utama yang menentukan kinerja dinamis unit. Untuk mengatasinya, paper tersebut memilih konfigurasi **shell-and-tube** yang menawarkan kekompakan struktural, kemampuan *thermal enhancement* lewat internal fins atau turbulasi HTF (*heat transfer fluid*), dan integrasi yang mudah dengan plant bertekanan. Lebih jauh, pemilihan **eutectic nitrate salt** sebagai PCM memungkinkan tuning suhu fusi presisi di rentang 220–230°C dengan panas laten tinggi (~150–180 kJ/kg), sehingga matching dengan profil suhu discharge HTHP menjadi optimal.

Dari sisi strategis, integrasi LHTES-HTHP bukan sekadar masalah teknis, melainkan keputusan investasi modal dengan payback period yang sensitif terhadap harga listrik, tarif gas alam (sebagai bahan bakar fosfasi替代), dan insentif karbon. Per dokumen Xu & Wang (2024), HTHP saja berpotensi menurunkan emisi CO₂ industri hingga 50–80% pada rentang suhu 100–200°C, dan penambahan LHTES dapat memperbesar *flexibility margin* sebesar 15–25% sekaligus memitigasi *peak-shaving* pada jaringan listrik. Konteks ini menjadikan model transien yang akurat bukan alat akademik semata, melainkan kebutuhan rekayasa praktis untuk sizing, kontrol, dan integrasi plant.

---

## 2. Landasan Teori & Formulasi Matematis

Pemodelan transien unit LHTES shell-and-tube pada dasarnya adalah **masalah pindah panas dengan perubahan fasa (moving boundary problem)** atau yang secara klasik dikenal sebagai **Problema Stefan**. Pendekatan yang digunakan Toloza et al. (2026) dalam lingkungan Modelica mengandalkan **enthalpy method** dengan *apparent heat capacity*, yang dipilih karena kemampuan menangani *mushy zone* (daerah transisi padat-cair) tanpa harus melacak antarmuka secara eksplisit.

### 2.1 Persamaan konservasi energi pada PCM

Untuk elemen kontrol infinitesimal PCM dalam koordinat silinder (asumsi aksial-simétri), persamaan energi transien adalah:

$$\rho_{PCM} \frac{\partial h}{\partial t} = \frac{1}{r} \frac{\partial}{\partial r}\left( k_{PCM}(T) \cdot r \frac{\partial T}{\partial r} \right) + \frac{1}{r^2} \frac{\partial}{\partial \theta}\left( k_{PCM}(T) \frac{\partial T}{\partial \theta} \right) + \frac{\partial}{\partial z}\left( k_{PCM}(T) \frac{\partial T}{\partial z} \right)$$

dengan $\rho_{PCM}$ densitas PCM, $h$ entalpi spesifik, $T$ suhu, dan $k_{PCM}(T)$ konduktivitas termal dependen suhu. Karena konfigurasi dominan radial-simetris dan gradien aksial kecil dibanding radial, paper menyederhanakan menjadi problem 1D-radial.

### 2.2 Formulasi enthalpy dengan apparent heat capacity

Pendekatan Toloza et al. (2026) menggunakan:

$$h(T) = \int_{T_{ref}}^{T} c_{p,app}(T^*) \, dT^*$$

dengan *apparent heat capacity* didefinisikan:

$$c_{p,app}(T) = c_{p,s}(T) + L \cdot \frac{f(T)}{\Delta T_{mushy}}$$

di mana $c_{p,s}(T)$ kapasitas panas sensible fase padat/cair, $L$ panas laten, $f(T)$ fungsi distribusi Gaussian (atau smooth step) yang mensimulasikan fraksi liquified, dan $\Delta T_{mushy}$ lebar *mushy zone* (umumnya 3–5°C di sekitar $T_{m}$).

### 2.3 Persamaan energi pada sisi HTF

Untuk fluida perpindahan panas (HTF, umumnya minyak termal atau CO₂ superkritis dalam aplikasi suhu tinggi), berlaku:

$$\rho_{HTF} c_{p,HTF} \left( \frac{\partial T_{HTF}}{\partial t} + u_z \frac{\partial T_{HTF}}{\partial z} \right) = k_{HTF} \nabla^2 T_{HTF} + \frac{\dot{Q}_{wall}}{V_{HTF}}$$

dengan $u_z$ kecepatan aksial HTF, dan $\dot{Q}_{wall}/V_{HTF}$ adalah sumber panas dari dinding pipa ke fluida.

### 2.4 Kopling antardomain dan kondisi batas

Kondisi batas kritis terjadi pada dinding tube. Toloza et al. (2026) menerapkan kontinuitas fluks dan suhu:

$$-k_{PCM} \left. \frac{\partial T}{\partial r} \right|_{r=R_i^-} = -k_{wall} \left. \frac{\partial T}{\partial r} \right|_{r=R_i^+} = U_i (T_{HTF} - T_{PCM,surface})$$

dengan $U_i$ koefisien perpindahan panas keseluruhan dinding pipa bagian dalam. Untuk dinding luar shell diasumsikan **adiabatic** (asumsi cluster pada plant industri):

$$\left. \frac{\partial T}{\partial r} \right|_{r=R_o} = 0$$

### 2.5 Persamaan governing HTF dalam tube

Untuk aliran internal turbulen, perpindahan panas konvektif mengikuti korelasi Dittus-Boelter (untuk $Re > 10^4$ dan $0.7 < Pr < 160$):

$$Nu = 0.023 \, Re^{0.8} \, Pr^{n}$$

dengan $n = 0.4$ untuk pemanasan HTF dan $n = 0.3$ untuk pendinginan. Bilangan Reynolds dihitung sebagai $Re = \rho_{HTF} u_z D_i / \mu_{HTF}$, dan koefisien perpindahan panas sisi HTF:

$$h_{HTF} = \frac{Nu \cdot k_{HTF}}{D_i}$$

### 2.6 Kriteria kinerja storage unit

Untuk evaluasi kinerja storage, paper mendefinisikan:

- **Densitas energi volumetrik:**
$$E_v = \frac{\int_V \rho_{PCM} \left( h(T_{akhir}) - h(T_{awal}) \right) dV}{V_{total}}$$

- **Efektiivitas discharge** (rasio energi实际 dilepas terhadap energi tersedia secara teoritis):
$$\eta_{dis} = \frac{E_{actual}}{E_{theoretical}} \cdot 100\%$$

- **Waktu discharge/pengisian** karakteristik $t^*$ saat 90% PCM mencapai konversi fasa.

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri model Toloza et al. (2026) mengikuti kerangka kerja yang dapat distandarkan sebagai berikut:

**Tahap 1 — Karakterisasi PCM.** Dilakukan DSC (*Differential Scanning Calorimetry*) untuk memperoleh $T_m$, $L$, dan $c_p$ pada rentang 180–260°C. Pengulangan minimal 3 siklus termal untuk verifikasi stabilitas termal jangka panjang. Sesuai ISO 11357, akurasi suhu ±0,5°C dan kalorimetri ±2%.

**Tahap 2 — Desain geometri shell-and-tube.** Parameter desain utama:
- Diameter dalam tube $D_i$ = 10–25 mm
- Diameter luar tube $D_o$ = 14–32 mm
- Pitch tube $P_t$ = 1,25–1,5 × $D_o$
- Rasio panjang/diameter shell $L/D_s$ = 4–8 untuk karakteristik plug-flow

**Tahap 3 — Pemodelan di Modelica.** Menggunakan library *Thermal.FluidHeatFlow* atau *HeatTransfer* dari Modelica Standard Library 4.0. Diskretisasi menggunakan finite volume method dengan grid 50–100 node radial. Time step adaptif dengan batas $\Delta t_{max} = 5$ s untuk stabilitas numerik.

**Tahap 4 — Validasi eksperimental.** Bandingkan prediksi dengan unit prototipe skala laboratorium. Kriteria konvergensi: error suhu titik ukur < 2°C, error kapasitas discharge < 5%.

**Tahap 5 — Integrasi dengan HTHP.** Unit LHTES dipasang secara seri pada jalur discharge kompresor atau intermediate circuit. Sistem kontrol PID mengatur valve bypass untuk menjaga suhu discharge antara 215–225°C sesuai setpoint proses.

**Diagram alir SOP:**

```
[Karakterisasi PCM] → [Desain Shell-Tube] → [Mesh & Diskretisasi]
        ↓
[Implementasi Modelica] → [Simulasi Transien] → [Validasi Eksperimental]
        ↓
[Integrasi HTHP-LHTES] → [Commissioning Plant] → [Monitoring Operasi]
```

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Berikut simulasi kuantitatif parameter industri yang konsisten dengan studi Toloza et al. (2026) untuk pabrik pengeringan tekstil kapasitas 500 kW termal.

### 4.1 Input parameter

| Parameter | Nilai | Satuan |
|---|---|---|
| Suhu fusi PCM ($T_m$) | 222 | °C |
| Panas laten ($L$) | 170 | kJ/kg |
| $c_{p,PCM}$ (padat) | 1,55 | kJ/kg·K |
| $\rho_{PCM}$ | 1850 | kg/m³ |
| $k_{PCM}$ | 0,52 | W/m·K |
| $D_i$ / $D_o$ | 20 / 25 | mm |
| Jumlah tube ($N_t$) | 61 | – |
| Panjang aktif ($L_{act}$) | 2,5 | m |
| HTF inlet ($T_{h,in}$) | 235 | °C |
| HTF mass flow ($\dot{m}_h$) | 1,8 | kg/s |
| $c_{p,HTF}$ | 2,30 | kJ/kg·K |

### 4.2 Perhitungan kapasitas storage

Massa PCM dalam shell:

$$m_{PCM} = \rho_{PCM} \cdot \left( \frac{\pi}{4} D_s^2 - N_t \frac{\pi}{4} D_o^2 \right) \cdot L_{act}$$

dengan asumsi $D_s = 0,30$ m:

$$V_{PCM} = \left( \frac{\pi}{4}(0,30)^2 - 61 \cdot \frac{\pi}{4}(0,025)^2 \right) \cdot 2,5 = (0,0707 - 0,0299) \cdot 2,5 = 0,1019 \text{ m}^3$$

$$m_{PCM} = 1850 \times 0,1019 = 188,5 \text{ kg}$$

Energi tersimpan pada charging dari 195°C ke 235°C (sensible 15°C + laten penuh):