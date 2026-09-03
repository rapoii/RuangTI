# 2889 — Pemodelan Numerik Transien Unit Penyimpanan Energi Termal Panas Laten (LHTES) Sekitar 222°C untuk Integrasi dengan Heat Pump Suhu Tinggi (HTHP)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri merupakan kontributor terbesar konsumsi energi termal global, di mana sekitar 50% dari total energi akhir digunakan untuk memenuhi kebutuhan panas proses pada rentang suhu 100–400 °C (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Dalam kerangka dekarbonisasi Eropa (Fit for 55 dan EU Energy Taxonomy), elektrifikasi proses termal melalui *High-Temperature Heat Pumps* (HTHPs) muncul sebagai teknologi kunci yang mampu menggantikan boiler berbasis gas alam dengan efisiensi *Coefficient of Performance* (COP) teoritis 4–6 dan emisi *scope-1* mendekati nol. Namun, keterbatasan utama HTHP adalah *mismatch* antara profil permintaan termal fluktuatif industri dan kapasitas pembangkitan panas sesaat, yang menyebabkan *compressor cycling losses*, degradasi efisiensi pada *part-load*, dan pemborosan energi *waste-heat* yang tidak termanfaatkan.

Untuk mengatasi hal tersebut, Toloza, Payá, dan Barceló (2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) memperkenalkan integrasi *Latent Heat Thermal Energy Storage* (LHTES) berbasis PCM *eutectic* dengan konfigurasi *shell-and-tube* vertikal sebagai *buffer termal* antara output HTHP dan beban proses. Unit beroperasi pada fasa transien di sekitar 222 °C, suhu yang relevan untuk aplikasi *food processing* (sterilisasi, pengeringan), *paper drying*, *chemical refining* ringan, dan *textile* dyeing. Urgensi ekonominya signifikan: studi Xu dan Wang (2024) menunjukkan bahwa kombinasi HTHP + LHTES dapat menurunkan *Levelized Cost of Heat* (LCOH) hingga 30–45% dibanding boiler fosil ketika *time-of-use* tarif listrik dimanfaatkan secara optimal.

Secara operasional, tantangan teknis LHTES adalah konduktivitas termal PCM yang rendah (0.5–0.7 W/m·K untuk *salt eutectics*), yang menghambat laju *charge/discharge*. Toloza et al. (2026) menjawab tantangan ini melalui optimasi geometri *shell-and-tube* yang menawarkan kekompakan volumetrik tinggi, robust secara mekanis terhadap siklus termal, dan kapasitas *thermal enhancement* melalui *fins*, *metal wool*, atau *nanofluid* sebagai *heat transfer fluid* (HTF). Pemodelan transien dalam bahasa Modelica memungkinkan prediksi perilaku *melting front*, profil temperatur radial-aksial, dan waktu *full-charge* dengan akurasi tinggi untuk keperluan *control system design*, *safety analysis*, dan *digital twin* implementasi industri.

## 2. Landasan Teori & Formulasi Matematis

Model numerik Toloza et al. (2026) dibangun di atas persamaan konservasi energi transien dalam koordinat silindris 2-D asimetris dengan asumsi *symmetry* aksial dan *no-slip* pada dinding. Bentuk umum *enthalpy method* untuk PCM adalah:

$$\rho c_{p,\text{eff}} \frac{\partial T}{\partial t} = \frac{1}{r} \frac{\partial}{\partial r}\left( k_{\text{eff}} r \frac{\partial T}{\partial r} \right) + \frac{\partial}{\partial z}\left( k_{\text{eff}} \frac{\partial T}{\partial z} \right) + \dot{q}_{\text{latent}}$$

dengan $c_{p,\text{eff}}$ adalah kapasitas panas efektif yang mencakup kontribusi fasa, didefinisikan sebagai:

$$c_{p,\text{eff}} = c_{p,s} + f_L \left( c_{p,l} - c_{p,s} \right) + L \frac{df_L}{dT}$$

di mana $f_L$ adalah *liquid fraction* (fraksi lelehan), $L$ adalah *latent heat of fusion* (J/kg), dan $c_{p,s}$, $c_{p,l}$ adalah kapasitas panas fasa padat dan cair. Model Toloza et al. (2026) menerapkan pendekatan *apparent heat capacity* dengan regularisasi interval fasa $\Delta T_{\text{mushy}} \approx 1\text{–}5$ K untuk menghindari diskontinuitas pada *melting point* nominal $T_m = 222\,°\text{C}$.

Kondisi batas pada dinding tube bagian dalam (HTF-side) menggunakan *convective boundary*:

$$-k_{\text{eff}} \left. \frac{\partial T}{\partial r} \right|_{r=r_i} = h_{\text{HTF}} \left( T_{\text{HTF}}(z,t) - T_{s,i}(z,t) \right)$$

dengan $h_{\text{HTF}}$ koefisien konveksi HTF (untuk oli termal atau *molten salt*: 800–2500 W/m²·K) dan $T_{s,i}$ temperatur permukaan dalam tube. Pada shell-side terluar, Toloza et al. menerapkan *adiabatic boundary* karena geometri simetris, sedangkan pada bagian atas dan bawah unit diterapkan *convective loss* ke ambient dengan $h_{\text{amb}} \approx 5\text{–}15$ W/m²·K.

Persamaan konservasi momentum HTF dalam tube mengikuti model 1-D *plug flow* dengan korelasi Nusselt:

$$\text{Nu}_D = \begin{cases} 3.66 & \text{Re} < 2300 \text{ (laminar)} \\ 0.023\,\text{Re}^{0.8}\,\text{Pr}^{0.4} & \text{Re} \geq 10000 \text{ (turbulen)} \end{cases}$$

sehingga:

$$h_{\text{HTF}} = \frac{\text{Nu}_D \cdot k_{\text{HTF}}}{D_i}$$

untuk oli termal pada $T_{\text{mean}} = 200\,°\text{C}$, sifat-sifat referensinya adalah $k_{\text{HTF}} \approx 0.12$ W/m·K, $\text{Pr} \approx 40$, dan densitas $\rho \approx 760$ kg/m³. Model diselesaikan dengan *finite volume discretization* menggunakan pustaka Modelica `HeatTransfer.Components` dan diselesaikan dengan *implicit Euler* (CFL number > 1 diizinkan untuk *stiff system*) pada langkah waktu adaptif $\Delta t \in [10^{-3}, 10^{1}]$ s.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri dari unit LHTES *shell-and-tube* 222 °C mengikuti *Standard Operating Procedure* (SOP) berikut, yang diselaraskan dengan rekomendasi Toloza et al. (2026) dan pedoman ASME BPVC Section VIII (vessels) serta TEMA (klasifikasiHX):

**Tahap 1 – Karakterisasi Beban Proses.** Kumpulkan profil termal harian fasilitas: suhu target, kapasitas pembangkitan, *duty cycle*, dan *peak shaving requirements*. Output: basis desain dengan *time-of-day tariffs* dan *steam demand curve*.

**Tahap 2 – Seleksi PCM Eutectic.** Berdasarkan rentang fasa yang dibutuhkan, pilih PCM *eutectic nitrate* (misalnya 40% KNO₃ + 60% NaNO₃, $T_m \approx 222\,°\text{C}$, $L \approx 161$ kJ/kg). Verifikasi sifat termofisika dengan DSC (ASTM E1269) dan T-history (ASTM C1784).

**Tahap 3 – Desain Geometri Shell-and-Tube.** Tentukan parameter: diameter tube dalam $D_i \in [20, 50]$ mm, diameter shell $D_s \in [0.3, 1.5]$ m, panjang efektif $L \in [2, 6]$ m, jumlah tube $N_t \in [20, 200]$, dan pitch triangular 1.25 $D_o$. Kriteria: $\text{Re}_{\text{shell}} < 10^3$ untuk menghindari *bypass flow* PCM leleh.

**Tahap 4 – Pemodelan Numerik & Validasi.** Bangun model Modelica sesuai persamaan Bagian 2. Validasi dengan eksperimen *prototype* skala lab (1:5) menggunakan instrumentasi termokopel Tipe-K (akurasi ±1.5 °C, ASTM E220). Toleransi kesalahan RMSE ≤ 5%.

**Tahap 5 – Integrasi HTHP-LHTES.** Rancang sistem kendali cascade: HTHP sebagai *primary source* (setpoint $T_{\text{out}} = 230\,°\text{C}$), LHTES sebagai *buffer charge/discharge* (PID controller dengan *gain scheduling* pada fraksi lelehan). Sertakan *safety interlocks* untuk mencegah *thermal runaway* (T > 250 °C) sesuai IEC 61511 SIL-2.

**Tahap 6 – Commissioning & Monitoring.** Instalasi *distributed temperature sensing* (DTS fiber-optic) untuk verifikasi model *digital twin* secara *real-time*. Lakukan *performance test* sesuai AHRI 1500 untuk kapasitas *discharge* pada *steady-state*.

```
Arsitektur Sistem:
[Grid Listrik] → [HTHP Kompresor] → [HTF Loop Utama (220-230 °C)]
                                              ↓
                              [3-way Valve Otomatis]
                              ↗                ↘
              [LHTES Shell-and-Tube]    [Beban Proses Industri]
              (Mode Charge)              (Mode Discharge)
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Pabrik *dyeing* tekstil di Catalonia dengan kapasitas 5 MW termal pada suhu 220 °C, beroperasi 16 jam/hari. Unit LHTES dirancang sebagai *buffer* dengan target menyimpan energi untuk *peak shaving* selama 4 jam pada tarif listrik puncak.

**Parameter Desain (berdasarkan Toloza et al., 2026):**

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| PCM | 40% KNO₃ + 60% NaNO₃ | — |
| $T_m$ | 222 | °C |
| $L$ (latent heat) | 161 | kJ/kg |
| $\rho_{\text{PCM}}$ (liquid) | 1877 | kg/m³ |
| $k_{\text{PCM}}$ (liquid) | 0.52 | W/m·K |
| $c_{p,l}$ | 1.55 | kJ/kg·K |
| $D_i$ | 30 | mm |
| $D_o$ | 35 | mm |
| $D_s$ | 0.8 | m |
| $L_{\text{tube}}$ | 4 | m |
| $N_t$ | 61 | tube |
| $T_{\text{HTF,in}}$ | 235 | °C |
| $\dot{m}_{\text{HTF}}$ | 8.5 | kg/s |
| $h_{\text{HTF}}$ | 1450 | W/m²·K |

**Perhitungan Volume dan Kapasitas Penyimpanan:**

Volume tube internal total:

$$V_i = N_t \cdot \pi \left(\frac{D_i}{2}\right)^2 \cdot L_{\text{tube}} = 61 \times \pi (0.015)^2 \times 4 = 0.172\,\text{m}^3$$

Volume annulus PCM (selubung antar tube dan shell):

$$V_{\text{shell}} = \pi \left(\frac{D_s}{2}\right)^2 \cdot L_{\text{tube}} - V_o = \pi (0.4)^