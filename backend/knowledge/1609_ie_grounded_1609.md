# 1609 — Pemodelan Numerik Transien Unit Penyimpanan Energi Termal Panas Laten pada Suhu 222°C untuk Integrasi dengan Pompa Kalor Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri bertanggung jawab atas sekitar 24% emisi gas rumah kaca global dan mengonsumsi lebih dari 50% energi termal dalam bentuk proses panas (<300°C). Dekarbonisasi proses industri ini mensyaratkan integrasi teknologi efisiensi tinggi yang mampu menjembatani intermitensi sumber energi terbarukan dengan kebutuhan termal kontinyu. Dalam konteks inilah Toloza, Payá, dan Barceló (2026) memperkenalkan model numerik transien unit *Latent Heat Thermal Energy Storage* (LHTES) yang beroperasi pada suhu sekitar 222°C, dirancang khusus untuk integrasi dengan *High-Temperature-Heat-Pump* (HTHP) — sebagaimana dikutip dalam [DOI: 10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086). Sistem LHTES menyimpan energi dalam bentuk panas laten ketika material *Phase Change Material* (PCM) mengalami transisi fase, biasanya padat-cair, sehingga densitas energi volumetric-nya dapat mencapai 5–10 kali lipat dibanding sistem *sensible heat storage* konvensional.

Permasalahan fundamental yang diangkat oleh Toloza et al. (2026) adalah konduktivitas termal PCM yang rendah (umumnya 0,2–1,0 W/m·K untuk garam nitrat eutektik), yang membatasi laju perpindahan panas dan menimbulkan gradien suhu substansial selama proses *charging* dan *discharging*. Untuk mengatasinya, penulis memilih konfigurasi *shell-and-tube* karena tiga keunggulan struktural: kekompakan geometris tinggi, robust secara mekanis pada tekanan operasi termal, dan kapasitas untuk ditingkatkan melalui optimalisasi geometri, enkapsulasi, maupun penyisipan *metal wool*. Pemilihan suhu operasi 222°C mengindikasikan penggunaan garam nitrat eutektik (misalnya campuran terner NaNO₃-KNO₃-Ca(NO₃)₂ atau sistem Solar Salt yang dimodifikasi) yang memiliki titik lebur dalam rentang 220–230°C, menjadikannya kandidat ideal untuk aplikasi industri makanan, kimia, dan pulp-paper. Kontribusi Xu dan Wang (2024) dalam [DOI: 10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032) melengkapi narasi ini dengan menunjukkan bahwa HTHP generasi baru mampu menghasilkan suhu output hingga 200°C dengan COP 3–5, sehingga kombinasi HTHP-LHTES menjadi arsitektur sinergis untuk dekarbonisasi termal industri.

Urgensi ekonomis dari integrasi HTHP-LHTES dapat dihitung dari *levelized cost of storage* (LCOS) yang menurun tajam ketika siklus *peak-shaving* dan *load-shifting* diterapkan, terutama di industri dengan pola operasi *batch* atau *multi-shift* di mana permintaan termal tidak konstan sepanjang hari.

## 2. Landasan Teori & Formulasi Matematis

Model transien yang dikembangkan Toloza et al. (2026) dalam bahasa Modelica dibangun di atas persamaan energi diferensial tiga dimensi untuk dinding tabung dan PCM, diselesaikan dengan skema numerik *enthalpy method* untuk mengakomodasi *moving phase-change front* tanpa memerlukan pelacakan interface eksplisit. Formulasi governing equation pada koordinat silindris untuk PCM adalah:

$$\rho_{PCM} \frac{\partial h}{\partial t} = \frac{1}{r}\frac{\partial}{\partial r}\left(k_{PCM}(T) \cdot r \frac{\partial T}{\partial r}\right) + \frac{1}{r^2}\frac{\partial}{\partial \theta}\left(k_{PCM}(T)\frac{\partial T}{\partial \theta}\right) + \frac{\partial}{\partial z}\left(k_{PCM}(T)\frac{\partial T}{\partial z}\right)$$

di mana $h$ adalah entalpi spesifik (J/kg), $\rho_{PCM}$ densitas (kg/m³), $k_{PCM}(T)$ konduktivitas termal dependen suhu (W/m·K), dan $r, \theta, z$ koordinat silindris. Hubungan entalpi-suhu untuk PCM didekati dengan fungsi piecewise:

$$h(T) = \begin{cases} c_{p,s}(T-T_m) + \Delta h_{fus}, & T > T_m \\ \Delta h_{fus}\left(\frac{T-T_s}{T_l-T_s}\right), & T_s \leq T \leq T_l \\ c_{p,l}(T-T_m) + \Delta h_{fus}, & T < T_m \end{cases}$$

dengan $T_s$ dan $T_l$ berturut-turut adalah batas suhu *solidus* dan *liquidus*, $T_m$ adalah suhu fusi eutektik, $c_{p,s}$ dan $c_{p,l}$ kapasitas panas spesifik fase padat dan cair (J/kg·K), dan $\Delta h_{fus}$ panas laten fusi (J/kg). Untuk dinding tabung konduksi unsteady mengikuti:

$$\rho_w c_{p,w}\frac{\partial T_w}{\partial t} = \frac{1}{r}\frac{\partial}{\partial r}\left(k_w r\frac{\partial T_w}{\partial r}\right)$$

Kondisi batas di dinding bagian dalam tabung (permukaan kontak dengan HTHP) menggunakan konveksi Newton:

$$-k_w \frac{\partial T_w}{\partial r}\bigg|_{r=r_i} = h_{HTF}(T_{HTF}-T_{w,i})$$

di mana $h_{HTF}$ adalah koefisien perpindahan panas *heat transfer fluid* (W/m²·K). Korelasi Nusselt untuk fluida di dalam tabung:

$$Nu_{HTF} = 0.023 \cdot Re_{HTF}^{0.8} \cdot Pr_{HTF}^{0.4}$$

Untuk dinding luar (permukaan kontak dengan PCM), Toloza et al. (2026) mengasumsikan kontak termal sempurna dengan resistansi kontak $R_{tc}$ yang diperhitungkan secara eksplisit:

$$\dot{q}'' = \frac{T_{w,o} - T_{PCM,surface}}{R_{tc}}$$

Persamaan governing untuk HTF dalam tabung dimodelkan sebagai perpindahan panas konvektif-aliran 1D:

$$\rho_{HTF} c_{p,HTF} A_c \frac{\partial T_{HTF}}{\partial t} + \dot{m}_{HTF} c_{p,HTF}\frac{\partial T_{HTF}}{\partial z} = h_{HTF} P_i (T_{w,i}-T_{HTF})$$

dengan $A_c$ luas penampang aliran (m²), $\dot{m}_{HTF}$ laju aliran massa (kg/s), dan $P_i$ keliling dalam tabung (m).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Protokol implementasi unit LHTES berbasis *shell-and-tube* sesuai arsitektur Toloza et al. (2026) mengikuti tahapan sistematis sebagai berikut:

**Tahap 1 — Seleksi PCM dan Karakterisasi Termofisika.** Penentuan titik lebur eutektik target 222°C melalui diagram fasa biner/terner, pengukuran DSC (*Differential Scanning Calorimetry*) untuk validasi $T_s, T_l, \Delta h_{fus}$, serta pengukuran konduktivitas termal dengan *transient hot-wire method* (standar ASTM D5334-22).

**Tahap 2 — Desain Geometri Heat Exchanger.** Perhitungan jumlah tabung $N_t$, diameter dalam $D_i$, diameter luar $D_o$, panjang $L$, dan pitch triangular $P_t$ menggunakan persamaan *Kern's method* dan *Bell-Delaware method* untuk estimasi koefisien film luar pada sisi shell.

**Tahap 3 — Konstruksi Model Numerik Modelica.** Pemodelan dalam *Dymola* atau *OpenModelica* dengan komponen *HeatExchanger* dan *PCMVolume* yang digabungkan dalam sistem persamaan diferensial-aljabar (DAE).

**Tahap 4 — Kalibrasi dan Validasi.** Penyelarasan parameter model dengan data eksperimental dari prototipe, menggunakan *inverse heat conduction problem* untuk menentukan $h_{HTF}$ dan $R_{tc}$.

**Tahap 5 — Integrasi dengan HTHP.** Penentuan titik operasi coupling: suhu *source* (ambient/limbah panas) dan *sink* (output HTF masuk unit LHTES), dengan HTHP bertindak sebagai *thermal bridge* antara sumber panas tingkat rendah dan reservoir PCM tingkat tinggi.

**Tahap 6 — Commissioning dan Monitoring.** Implementasi sensor T-type thermocouple di 15–20 titik radial-aksial untuk verifikasi profil suhu dan deteksi *thermal runaway* atau *subcooling* abnormal.

Diagram alir logikanya adalah: **Sumber Panas Rendah → HTHP (Kompresi Siklus) → HTF Panas (220–230°C) → Unit LHTES Shell-and-Tube → PCM Charge (Pelelehan) → HTF Dingin (Kondensasi HTHP) → PCM Discharge (Pembekuan) → Beban Industri**.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario Kasus:** Pabrik pengolahan makanan di Valencia, Spanyol, membutuhkan 2,5 MW termal pada suhu 200°C selama 8 jam operasi harian dengan total kebutuhan harian 20 MWh_th. Unit LHTES dirancang menyimpan cadangan termal 12 MWh_th untuk di-*discharge* saat *peak load*.

**Parameter Desain:**

| Parameter | Nilai | Satuan |
|-----------|-------|--------|
| PCM (solar salt modified) | $\Delta h_{fus} = 230$ | kJ/kg |
| Densitas PCM cair | $\rho_{PCM,l} = 1890$ | kg/m³ |
| Konduktivitas PCM | $k_{PCM} = 0,55$ | W/m·K |
| Suhu fusi | $T_m = 222$ | °C |
| Kapasitas panas PCM | $c_{p,l} = 1550$ | J/kg·K |
| Diameter luar tabung | $D_o = 0,0254$ | m |
| Diameter dalam tabung | $D_i = 0,0200$ | m |
| Panjang tabung | $L = 3,0$ | m |
| Jumlah tabung | $N_t = 240$ | buah |
| HTF (sintetik oil) | $T_{in} = 230$ | °C |
| Laju aliran massa HTF | $\dot{m}_{HTF} = 8,5$ | kg/s |

**Perhitungan Kapasitas Penyimpanan:**

Massa PCM yang dibutuhkan untuk 12 MWh_th = $43.200$ MJ:

$$m_{PCM} = \frac{E_{st}}{\Delta h_{fus} + c_{p,l}(T_{op}-T_m)} = \frac{43,2 \times 10^6}{230.000 + 1550 \times 10} = \frac{43,2 \times 10^6}{245.500} = 175,97 \text{ kg}$$

Volume PCM yang dibutuhkan:

$$V_{PCM} = \frac{m_{PCM}}{\rho_{PCM,l}} = \frac{175,97}{1890} = 0,0931 \text{ m}^3 = 93,1 \text{ liter}$$

Volume shell berdasarkan konfigurasi triangular pitch $P_t = 1,25 \cdot D_o = 0,03175$ m:

$$V_{shell