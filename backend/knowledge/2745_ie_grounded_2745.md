# 2745 — Pemodelan Numerik Transient Unit Penyimpanan Energi Termal Panas Laten (LHTES) Suhu ~222°C untuk Integrasi dengan High-Temperature Heat Pump (HTHP)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** *Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump*
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri menyumbang hampir 25% dari konsumsi energi final global, di mana lebih dari separuh kebutuhan tersebut berupa **panas proses** (process heat) bersuhu 150–400 °C untuk aplikasi seperti pasteurisasi, sterilisasi, pengeringan, dan distilasi [Xu & Wang, 2024, DOI: 10.59717/j.xinn-energy.2024.100032]. Dekarbonisasi pada rentang suhu menengah-tinggi ini secara historis sulit dilakukan karena keterbatasan teknologi *high-temperature heat pump* (HTHP) dan tidak ekonomisnya elektrifikasi langsung berbasis resistif. Dalam konteks inilah integrasi **Latent Heat Thermal Energy Storage (LHTES)** dengan HTHP menjadi agenda riset strategis yang mendesak.

Toloza, Payá, dan Barceló (2026, DOI: 10.21001/eurotherm2026.086) menyoroti bahwa sistem LHTES mampu meningkatkan fleksibilitas dan efisiensi HTHP secara signifikan karena berfungsi sebagai **buffer termal** yang menampung kelebihan energi saat harga listrik rendah (atau saat HTHP beroperasi pada *coefficient of performance* optimal) dan melepaskannya saat permintaan puncak. Namun, penerapan LHTES pada suhu ~222 °C menghadapi tantangan fundamental: **konduktivitas termal phase change material (PCM)** yang sangat rendah (umumnya 0,5–1,5 W/m·K untuk garam nitrat eutektik) menghambat laju transfer panas dan memperpanjang *charge/discharge time* secara dramatis. Tanpa optimalisasi geometri heat exchanger, potensi LHTES tidak dapat dimanfaatkan secara ekonomis.

Kontribusi utama paper Toloza et al. (2026) adalah membangun **model numerik transient** berbasis bahasa Modelica untuk unit LHTES *shell-and-tube* vertikal yang menggunakan garam eutektik sebagai PCM, dengan tujuan akhir mengkuantifikasi performa termal dan menyediakannya sebagai sub-model untuk simulasi sistem HTHP+LHTES terintegrasi. Signifikansi industrialnya berlipat ganda: (i) memungkinkan sizing yang akurat untuk aplikasi *demand-side flexibility* di pabrik makanan, kimia, dan tekstil; (ii) mengurangi *peak shaving* pada jaringan listrik ketika banyak HTHP beroperasi simultan; dan (iii) memberikan dasar kuantitatif untuk keputusan *capital expenditure* (CAPEX) terhadap *levelized cost of storage* (LCOS).

## 2. Landasan Teori & Formulasi Matematis

Model transient yang dikembangkan oleh Toloza et al. (2026) menggunakan **formulasi entalpi** untuk menangani perubahan fasa isothermal quasi-pada PCM. Persamaan konservasi energi pada PCM dalam geometri silindris (koordinat radial $r$ dan aksial $z$) adalah:

$$\rho_{PCM} \frac{\partial H(T)}{\partial t} = \frac{1}{r} \frac{\partial}{\partial r}\left( r k_{PCM} \frac{\partial T}{\partial r} \right) + \frac{\partial}{\partial z}\left( k_{PCM} \frac{\partial T}{\partial z} \right) \tag{1}$$

di mana $\rho_{PCM}$ adalah densitas PCM (kg/m³), $k_{PCM}$ konduktivitas termal (W/m·K), dan $H(T)$ entalpi spesifik (J/kg) yang mencakup kontribusi panas laten. Untuk garam nitrat eutektik dengan titik lebur $T_m \approx 222\,^\circ$C, hubungan entalpi–suhu mengikuti:

$$H(T) = \int_{T_{ref}}^{T} c_{p,solid}(T')\,dT' + f \cdot \Delta h_{sl} + \int_{T_{ref}}^{T} c_{p,liq}(T')\,dT' \tag{2}$$

dengan $f \in [0,1]$ adalah **fungsi liquid fraction** yang dimodelkan sebagai kurva sigmoid atau pendekatan *apparent heat capacity* Gaussian di sekitar $T_m$:

$$f(T) = \frac{1}{2}\left[ 1 + \text{erf}\left( \frac{T - T_m}{\Delta T_{mushy}} \right) \right] \tag{3}$$

di mana $\Delta T_{mushy}$ adalah lebar zona *mushy* (padat-cair bersamaan), umumnya 2–5 K untuk garam eutektik.

Pada sisi **heat transfer fluid (HTF)** yang mengalir di dalam tube, konservasi energi dalam kondisi *plug flow* dengan asumsi temperatur seragam pada penampang HTF:

$$\dot{m}_{HTF} \cdot c_{p,HTF} \frac{dT_{HTF}}{dz} = h_{HTF} \cdot \pi d_i \cdot (T_{wall} - T_{HTF}) \tag{4}$$

di mana $\dot{m}_{HTF}$ adalah laju alir massa (kg/s), $d_i$ diameter dalam tube (m), dan $h_{HTF}$ koefisien konveksi (W/m²·K) yang dihitung dari korelasi Nusselt untuk aliran turbulen dalam pipa (Gnielinski atau Dittus-Boelter):

$$Nu_{HTF} = \frac{h_{HTF} d_i}{k_{HTF}} = \frac{(f/8)(Re_{HTF} - 1000) Pr_{HTF}}{1 + 12.7\sqrt{f/8}(Pr_{HTF}^{2/3} - 1)} \tag{5}$$

dengan *friction factor* $f = (0.79 \ln Re_{HTF} - 1.64)^{-2}$ untuk rentang $Re_{HTF} \in [3000, 5\times 10^6]$.

Pada sisi **shell** (selubung luar), perpindahan panas terjadi secara *natural convection* dan/atau radiasi dari PCM ke lingkungan, serta konduksi melalui dinding tube menuju HTF. Resistansi termal total dari PCM ke HTF disusun secara seri:

$$R_{tot} = \frac{1}{h_{PCM}} + \frac{\ln(d_o/d_i)}{2\pi k_{wall}} + \frac{1}{h_{HTF}} \tag{6}$$

Karena $h_{PCM} \ll h_{HTF}$, dominasi resistansi berada pada sisi PCM. Inilah alasan Toloza et al. (2026) memilih geometri *shell-and-tube* vertikal dengan tube berdiameter kecil dan jumlah tube banyak untuk memperbesar luas permukaan spesifik ($A_v$, m²/m³).

Untuk mendiskretisasi Persamaan (1)–(4), paper menggunakan **finite volume method (FVM)** pada grid 2D aksimetris dengan langkah waktu adaptif yang memenuhi kriteria *Courant-Friedrichs-Lewy* (CFL):

$$CFL = \frac{\alpha_{PCM} \Delta t}{\Delta r^2} \leq 0.5 \quad \text{dengan} \quad \alpha_{PCM} = \frac{k_{PCM}}{\rho_{PCM} c_{p,PCM}} \tag{7}$$

di mana $\alpha_{PCM}$ adalah difusivitas termal PCM (m²/s). Pemilihan model pada lingkungan Modelica memungkinkan *co-simulation* dengan library HTHP dan sistem kontrol HVAC.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi sistematis model Toloza et al. (2026) di lingkungan industri mengikuti **SOP rekayasa termal terintegrasi** sebagai berikut:

**Tahap 1 — Karakterisasi Kebutuhan Energi Proses.**
Identifikasi profil beban termal pabrik (basis data SCADA/EMS minimal 1 tahun), suhu target proses $T_{process}$, durasi operasi, dan toleransi fluktuasi suhu.

**Tahap 2 — Seleksi PCM dan HTF.**
Berdasarkan $T_{process} \approx 222\,^\circ$C, kandidat PCM adalah garam nitrat eutektik (misalnya campuran $\text{NaNO}_3$-$\text{KNO}_3$ 60:40 wt% atau "solar salt" modifikasi) dengan $\Delta h_{sl} \approx 100\text{–}160$ kJ/kg. HTF yang kompatibel adalah *thermal oil* (misalnya Therminol VP-1, range 12–400 °C) atau udara untuk HTHP bersuhu lebih rendah.

**Tahap 3 — Desain Geometri Shell-and-Tube Vertikal.**
Iterasi parameter desain:

```
┌──────────────────────────────────────────┐
│   INPUT: Q_storage, T_m, Δt_charge      │
│         ↓                                │
│   Hitung m_PCM = Q_storage / Δh_sl       │
│         ↓                                │
│   Pilih D_shell, L_shell, N_tubes        │
│         ↓                                │
│   Validasi A_v ≥ 50 m²/m³ (benchmark)    │
│         ↓                                │
│   Estimasi Re_HTF → Nu → h_HTF           │
│         ↓                                │
│   Cek ΔT_pinch ≥ 10 K (efektivitas)      │
└──────────────────────────────────────────┘
```

**Tahap 4 — Pembangunan Model Numerik.**
Model dikembangkan di **Modelica** dengan pustaka *Thermal-Fluid-Toolbox* dan *HeatTransfer*. Sub-model PCM, HTF, dan dinding tube dikopling melalui *connectors* termal. Validasi dilakukan terhadap data eksperimental *melting front* (benchmark dari literatur, miso. lacroix & Benmouna