# 1641 — Model Numerik Transien Unit Penyimpanan Energi Termal Panas Laten (LHTES) pada Suhu ~222°C untuk Integrasi dengan Pompa Panas Temperatur Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *Prospects of heat pump for thermal energy decarbonization*, *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri merupakan kontributor terbesar konsumsi energi termal global, dengan proporsi mencapai 50% dari total kebutuhan energi akhir dunia dan hampir separuh dari emisi CO₂ terkait energi (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Proses industri pada rentang suhu medium-to-high (150–400°C) — mencakup sterilisasi makanan, pengeringan, pemrosesan kimia, dan tekstil — selama ini dipasok terutama oleh boiler berbasis bahan bakar fosil. Dekarbonisasi sektor ini mensyaratkan substitusi boiler dengan kombinasi **High-Temperature Heat Pump (HTHP)** dan **Latent Heat Thermal Energy Storage (LHTES)**, yang secara kolektif mampu meningkatkan *Coefficient of Performance* (COP) sistem sekaligus memungkinkan *time-shifting* energi termal antara periode *off-peak* dan *peak demand*.

Toloza, Payá, dan Barceló (2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) menyoroti salah satu tantangan integratif yang krusial: keterbatasan konduktivitas termal material perubahan fasa (PCM) yang umumnya rendah ($k_{PCM} \approx 0.2\text{–}0.6\;\text{W/(m·K)}$). Untuk aplikasi industri pada titik lebur ~222°C — yang merupakan jendela operasional penting untuk *eutectic nitrate salts* seperti solar salt (60% NaNO₃ + 40% KNO₃, $T_m \approx 220\text{–}222°C$) — solusi geometri *shell-and-tube* diajukan karena tiga atribut unggul: (1) kekompakan volumetrik tinggi, (2) ketahanan struktural pada siklus termal berulang, dan (3) kapasitas peningkatan termal melalui *fins*, *metal foams*, atau *nanoparticle enhancement*. Unit LHTES yang dirancang harus mampu menyimpan energi termal dalam jumlah besar pada rentang *charging* singkat (orde jam) ketika HTHP beroperasi pada efisiensi puncak, lalu melepaskannya secara stabil saat *discharge* ke proses industri.

Urgensi ekonominya nyata: penyimpanan termal yang efektif memungkinkan HTHP beroperasi pada faktor kapasitas lebih rendah dengan COP rata-rata yang lebih tinggi, menurunkan *Levelized Cost of Heat* (LCOH) hingga 15–25% menurut berbagai studi berbasis EU Horizon (Xu & Wang, 2024). Namun, tanpa model numerik transien yang tervalidasi, desain unit LHTES menjadi mahal dan berisiko terhadap degradasi PCM setelah数百 siklus termal. Oleh karena itu, pengembangan model *transient* menggunakan bahasa Modelica — sebagaimana dilakukan Toloza et al. (2026) — menjadi artefak rekayasa yang sangat bernilai untuk pengambilan keputusan investasi modal di sektor manufaktur dan proses.

## 2. Landasan Teori & Formulasi Matematis

Pemodelan transien LHTES *shell-and-tube* membutuhkan penyelesaian simultan terhadap tiga domain fisika: (i) konduksi non-linear di dalam PCM dengan perubahan fasa, (ii) konveksi paksa fluida pemanas (HTF) di dalam tabung, dan (iii) perpindahan panas melalui dinding tabung. Formulasi matematis inti yang diadopsi Toloza et al. (2026) mengikuti metode ***apparent heat capacity***, di mana entalpi laten didistribusikan pada interval suhu kecil di sekitar titik lebur.

### 2.1 Persamaan Energi pada PCM (Koordinat Silindris)

Untuk geometri tabung vertikal dengan PCM di sekitarnya, persamaan energi 2-D non-stasioner dalam koordinat $(r,z)$ adalah:

$$\rho_{PCM}\,c_{p,\text{app}}(T)\,\frac{\partial T}{\partial t} = \frac{1}{r}\frac{\partial}{\partial r}\!\left(k_{PCM}\,r\,\frac{\partial T}{\partial r}\right) + \frac{\partial}{\partial z}\!\left(k_{PCM}\,\frac{\partial T}{\partial z}\right)$$

di mana kapasitas panas efektif didefinisikan sebagai:

$$c_{p,\text{app}}(T) = c_{p,s} + \rho\,L\,\frac{df}{dT}$$

dengan $L$ adalah entalpi laten spesifik (J/kg), dan $f(T)$ adalah fungsi *liquid fraction* yang lazim diformulasikan sebagai kurva Gaussian di sekitar $T_m$:

$$f(T) = \frac{1}{2}\!\left[1 + \text{erf}\!\left(\frac{T - T_m}{\sigma\sqrt{2}}\right)\right]$$

dengan $\sigma$ adalah lebar transisi fasa (orde 1–3 K untuk *eutectic salt*). Pada fase solid, $f=0$; pada fase liquid, $f=1$.

### 2.2 Persamaan Energi pada HTF (1-D Plug Flow)

Untuk fluida pemanas di dalam tabung, model *plug flow* 1-D dengan asumsi keseimbangan termal radial instan terhadap $T_{HTF}(z,t)$:

$$\rho_{HTF}\,c_{p,HTF}\,A_c\,\frac{\partial T_{HTF}}{\partial t} + \dot{m}\,c_{p,HTF}\,\frac{\partial T_{HTF}}{\partial z} = h_i\,\pi d_i\,(T_{w,i} - T_{HTF})$$

### 2.3 Kondisi Batas dan Parameter Konservasi

Kondisi batas antarmuka dinding tabung–PCM (di $r = d_o/2$):

$$-k_{w}\,\left.\frac{\partial T}{\partial r}\right|_{r=d_o/2^-} = h_{ext}\,(T_{PCM} - T_{w,o})$$

$$-k_{PCM}\,\left.\frac{\partial T}{\partial r}\right|_{r=d_o/2^+} = h_{ext}\,(T_{w,o} - T_{PCM})$$

### 2.4 Bilangan Tak Berdimensen Kunci

Untuk analisis *scaling* dan validasi model, tiga bilangan berikut esensial:

**Biot Number** (rasio resistansi konduksi PCM terhadap resistansi konveksi):
$$Bi = \frac{h\,R_{o}}{k_{PCM}}$$

**Fourier Number** (kapasitas difusi termal terhadap skala waktu proses):
$$Fo = \frac{\alpha_{PCM}\,t}{R_{o}^2} = \frac{k_{PCM}\,t}{\rho_{PCM}\,c_{p,PCM}\,R_{o}^2}$$

**Stefan Number** (rasio sensible heat terhadap latent heat pada PCM):
$$Ste = \frac{c_{p,PCM}\,(T_{in,HTF} - T_m)}{L}$$

Untuk solar salt dengan $L \approx 161\,\text{kJ/kg}$, $c_{p} \approx 1{,}500\,\text{J/(kg·K)}$, dan $\Delta T = 30\,\text{K}$, diperoleh $Ste \approx 0{,}28$ — mengindikasikan bahwa kontribusi latent heat dominan, sehingga asumsi quasi-steady HTF cukup valid.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industrial unit LHTES-HTHP mengikuti kerangka rekayasa sistematis berikut, sesuai alur pengembangan model pada Toloza et al. (2026) dan perspektif integrasi sistem dari Xu & Wang (2024):

**Tahap 1 — Karakterisasi Termofisik PCM.** Pengukuran DSC (*Differential Scanning Calorimetry*) untuk memperoleh $T_m$, $L$, $c_{p,s}$, $c_{p,l}$, $k_{PCM,s}$, dan $k_{PCM,l}$. Untuk solar salt pada suhu 222°C, rujukan standar adalah ASTM E1269 dan ISO 11357. Karakterisasi harus dilakukan minimal pada 3 sampel dengan pengulangan untuk mengendalikan *measurement uncertainty* ≤ 5%.

**Tahap 2 — Desain Geometri Awal.** Penentuan dimensi unit mengikuti约束 energi:
- Energi target: $E_{storage} = M_{PCM} \cdot L$ (untuk *phase change region* dominan)
- Volume PCM: $V_{PCM} = E_{storage} / (\rho_{PCM} \cdot L)$
- Geometri *shell-and-tube* dengan *tube pitch* triangular, *pitch-to-diameter ratio* $p/d_i = 1{,}25$ (optimal kompromi antara perpindahan panas dan kompaknya)

**Tahap 3 — Discretisasi Domain dan Implementasi Numerik.** Bahasa Modelica (melalui pustaka *HeatTransfer* dan *Media*) digunakan untuk menyelesaikan PDE di atas secara otomatis dengan *method-of-lines* dan integrator *CVODE*. Diskretisasi radial minimum 20 *nodes* untuk memastikan resolusi akurat pada interfase solid–liquid. Langkah waktu adaptif dengan toleransi relatif $10^{-6}$.

**Tahap 4 — Validasi Eksperimental.** Bandingkan hasil simulasi dengan data eksperimen *charging/discharging* pada prototipe skala laboratorium (orde 5–20 kWh). Metrik validasi: NRMSE ≤ 8% untuk profil suhu dan ≤ 12% untuk *liquid fraction*.

**Tahap 5 — Analisis Sensitivitas dan Optimasi.** Lakukan *sweep* parameter terhadap $d_i$, $N_{tube}$, $\dot{m}_{HTF}$, $T_{in,HTF}$. Identifikasi titik optimal yang meminimalkan LCOH dengan tetap memenuhi *discharge duration* target.

**Tahap 6 — Integrasi dengan HTHP.** Pasangkan model LHTES dengan kurva performa HTHP (COP vs $T_{evap}/T_{cond}$) untuk menentukan strategi operasi *charging* (HTHP → LHTES pada $T_{cond}$ = 230–240°C) dan *discharge* (LHTES → proses pada $T_{discharge}$ = 200–210°C).

Diagram alir proses rekayasa:

```
[Kebutuhan Proses] → [Pilihan PCM & Tm] → [Desain Awal Shell-Tube]
        ↓                                          ↓
[Validasi Eksperimen] ← [Simulasi Modelica] ← [Discretisasi PDE]
        ↓                                          ↓
[Optimalisasi Parametrik]              [Analisis Sensitivitas]
        ↓
[Integrasi HTHP + LCOH Analysis] → [Prototipe Industri]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Unit LHTES *shell-and-tube* untuk proses sterilisasi makanan kapasitas 50 kWh pada $T_m = 222°C$, terintegrasi dengan HTHP *heat pump* CO₂ *transcritical* (Xu & Wang, 2024).

### 4.1 Parameter Desain (Input Industri)

| Parameter | Simbol | Nilai | Satuan |
|-----------|--------|-------|--------|
| PCM | Solar salt (60% NaNO₃ + 40% KNO₃) | — | — |
| Titik lebur | $T_m$ | 222 | °C |
| Entalpi laten | $L$ | 161.000 | J/kg |
| Kapasitas panas (solid) | $c_{p,s}$ | 1.450 | J/(kg·K) |
| Kapasitas panas (liquid) | $c_{p,l}$ | 1.560 | J/(kg·K) |
| Konduktivitas termal PCM | $k_{PCM}$