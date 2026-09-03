# 2153 — Model Numerik Transien Unit Penyimpanan Energi Termal Panas Laten (LHTES) pada Suhu ~222°C untuk Integrasi dengan Pompa Kalor Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump*
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *Prospects of heat pump for thermal energy decarbonization*, *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri bertanggung jawab atas kurang lebih 25% dari total emisi CO₂ global, dimana lebih dari separuh kebutuhan tersebut berasal dari permintaan *process heat* pada rentang suhu 100–400°C (Xu & Wang, 2024). Dekarbonisasi panas proses industri tidak cukup diselesaikan hanya dengan elektrifikasi berbasis *grid* hijau, melainkan membutuhkan kombinasi tiga pilar: (i) pompa kalor suhu tinggi (*High-Temperature Heat Pump*/HTHP) untuk menaik-kalikan (*upgrade*) panas buang menjadi panas utilisable, (ii) sistem penyimpanan energi termal (*Thermal Energy Storage*/TES) untuk memisahkan kurva permintaan dari kurva penawaran, dan (iii) material pencampur cerdas yang mampu menjembatani celah densitas energi antara *sensible heat storage* (SHS) dan sistem elektrokimia. Dalam konteks inilah Toloza, Payá, dan Barceló (2026) memposisikan *Latent Heat Thermal Energy Storage* (LHTES) berbasis *Phase Change Material* (PCM) sebagai enabler strategis untuk aplikasi industri dengan suhu operasi ~222°C, rentang yang sangat relevan untuk industri makanan (sterilisasi), kimia (reaksi endotermik ringan), tekstil (pewarnaan), dan pulp & kertas (pengeringan).

Permasalahan operasional yang diangkat Toloza et al. (2026) berakar pada konduktivitas termal PCM yang rendah (tipikal 0,2–0,5 W/m·K untuk garam nitrat dan eutektik nitrit), sehingga *charge/discharge cycle* menjadi lambat dan tidak kompatibel dengan dinamika proses industri modern yang membutuhkan respons menit hingga jam. Pendekatan yang dipilih adalah konfigurasi *shell-and-tube* dengan PCM di sisi *shell* dan fluida kerja (HTF) di sisi *tube*, karena kekompakan volumetrik, kekakuan struktural, dan kapasitas penambahan *thermal enhancement* (fin, *metal foam*, *metal wool*) yang tinggi. Xu & Wang (2024) melengkapi horizon pandang ini dengan menyatakan bahwa meskipun HTHP modern sudah mampu mencapai *temperature lift* >80°C dan suhu output >200°C dengan COP 2,5–4,0, keterbatasan utamanya adalah *temporal mismatch* antara ketersediaan *waste heat* (sering intermittent) dan kebutuhan proses (sering kontinu). Unit LHTES bertindak sebagai *thermal buffer* yang menyerap panas saat HTHP beroperasi pada efisiensi puncak dan melepaskannya ketika proses industri membutuhkannya, sehingga *capacity factor* HTHP meningkat 30–50% dan *levelized cost of heat* (LCOH) turun signifikan. Urgensi ekonomi makin kuat ketika dimasukkan harga *grid electricity* yang fluktuatif: dengan strategi *time-shifting*, opname listrik dapat dipindahkan ke jam *off-peak* sehingga komponen biaya energi terhadap *total cost of ownership* (TCO) berkurang tanpa menambah kapasitas HTHP.

---

## 2. Landasan Teori & Formulasi Matematis

Model transien Toloza et al. (2026) dibangun dalam bahasa *Modelica* dengan menggunakan pendekatan *enthalpy-porosity* untuk menyelesaikan *phase-change problem* secara coupled pada domain shell dan tube. Asumsi standar yang diadopsi adalah: (i) PCM bersifat *isotropik* dan *homogen* dalam skala makro, (ii) perpindahan panas di dinding tube didominasi konduksi 1D radial, (iii) efek radiasi diabaikan untuk suhu <250°C, dan (iv) perpindahan massa (*natural convection* akibat *buoyancy* pada *melt front*) diakomodasi melalui *effective thermal conductivity* $k_{eff}$.

### 2.1 Persamaan Konservasi Energi pada PCM

Persamaan *transient heat diffusion* dengan *latent heat* direpresentasikan melalui sumber *apparent heat capacity*:

$$\rho_{PCM} \cdot c_{p,eff}(T) \cdot \frac{\partial T}{\partial t} = \nabla \cdot \left( k_{eff} \nabla T \right)$$

dengan *apparent heat capacity* didefinisikan sebagai:

$$c_{p,eff}(T) = c_{p,s} + \frac{L}{T_2 - T_1} \cdot \frac{1}{1 + \left(\frac{T - T_m}{\sigma}\right)^2}$$

dimana $L$ adalah *latent heat of fusion* (J/kg), $T_m$ adalah titik leleh, dan parameter $\sigma$ mengatur lebar transisi fasa (tipikal 1–3°C untuk *regular solution*, lebih lebar untuk eutektik).

### 2.2 Perpindahan Panas pada Sisi HTF (Tube Side)

Untuk fluida kerja yang mengalir turbulen di dalam tube, persamaan energi 1D *transient* dengan konveksi paksa adalah:

$$\rho_f \cdot c_{p,f} \cdot A_c \cdot \frac{\partial T_f}{\partial t} + \dot{m} \cdot c_{p,f} \cdot \frac{\partial T_f}{\partial x} = h_i \cdot P \cdot (T_{w,i} - T_f)$$

dimana $\dot{m}$ adalah laju alir massa, $h_i$ koefisien konveksi internal, $P$ perimeter tube, dan $A_c$ luas penampang. Koefisien $h_i$ dihitung dari korelasi Gnielinski untuk Nusselt:

$$Nu = \frac{(f/8)(Re - 1000)Pr}{1 + 12{,}7\sqrt{f/8}(Pr^{2/3} - 1)}$$

dengan $f$ faktor friksi Darcy-Weisbach dan $Re$ bilangan Reynolds berbasis diameter dalam tube.

### 2.3 Resistansi Termal Total dan LMTD

Pertukaran panas global antara HTF dan PCM diekspresikan melalui pendekatan *lumped resistance*:

$$\frac{1}{U \cdot A} = \frac{1}{h_i \cdot A_i} + \frac{\ln(d_o/d_i)}{2\pi k_w L} + \frac{1}{h_o \cdot A_o}$$

Untuk evaluasi stasioner desain, *Logarithmic Mean Temperature Difference* (LMTD) digunakan:

$$\Delta T_{LMTD} = \frac{\Delta T_1 - \Delta T_2}{\ln\left(\Delta T_1/\Delta T_2\right)}$$

dimana $\Delta T_1 = T_{h,in} - T_{c,out}$ dan $\Delta T_2 = T_{h,out} - T_{c,in}$.

### 2.4 Kriteria Desain dan Stabilitas Numerik

Untuk menjamin simulasi transien stabil, Toloza et al. (2026) menerapkan *Courant-Friedrichs-Lewy* (CFL) condition pada diskretisasi:

$$CFL = \frac{\alpha \cdot \Delta t}{\Delta x^2} \leq 0{,}5$$

dimana $\alpha = k_{eff}/(\rho \cdot c_{p,eff})$ adalah *thermal diffusivity*.

### 2.5 Kopling dengan HTHP (Perspektif Sistem)

Ketika unit LHTES dikopling dengan HTHP, *Coefficient of Performance* sistem menjadi:

$$COP_{sys} = \frac{Q_{util}}{W_{comp} + W_{aux}} = \frac{Q_{LHTES,discharge} + Q_{HTHP,direct}}{W_{el}}$$

dengan $Q_{LHTES,discharge}$ adalah panas yang dilepas oleh PCM saat proses industri meminta beban lebih besar dari kapasitas sesaat HTHP (Xu & Wang, 2024).

---

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi unit LHTES shell-and-tube pada level industri mengikuti kerangka SOP berikut, yang disintesis dari paper primer dan best-practice rekayasa termal:

**Tahap 1 — Karakterisasi Beban Termal Industri.** Lakukan audit energi proses menggunakan standar ISO 50001. Identifikasi profil beban termal harian dan musiman, *peak demand*, dan *diversity factor*. Output: kurva $Q_{demand}(t)$, suhu target $T_{process}$, dan jumlah *thermal cycle* per hari.

**Tahap 2 — Seleksi PCM.** Untuk suhu operasi ~222°C, kandidat yang layak adalah eutektik $KNO_3$–$NaNO_3$ (titik leleh ~222°C, $L$ ≈ 110 kJ/kg), atau solar salt terner ($NaNO_3$–$KNO_3$–$NaNO_2$). Parameter desain kritis: $T_m \in [T_{process} - 10°C, T_{process} + 5°C]$ agar *discharge* berakhir pada suhu utilisasi.

**Tahap 3 — Desain Geometri Shell-and-Tube.** Tentukan tube bundle dengan *pitch ratio* 1,25–1,5 (triangular pitch) untuk meningkatkan koefisien konveksi luar 20–35%. Diameter tube $d_o$ dipilih 25–50 mm untuk keseimbangan antara *compactness* dan *pressure drop*.

**Tahap 4 — Peningkatan Konduktivitas Termal.** Masukkan *expanded graphite matrix* (EG) atau *metal foam* (nikel atau tembaga, 5–10% volume) ke dalam PCM. Peningkatan $k_{eff}$ hingga 5–20 kali lipat dapat dicapai tanpa menambah biaya material lebih dari 15%.

**Tahap 5 — Simulasi Transien Modelica.** Bangun model dengan pustaka `ThermodynamicState` dan `HeatTransfer.Media`. Validasi menggunakan data eksperimen *charge/discharge* pada prototipe skala lab (tipikal 5 kWh_t).

**Tahap 6 — Integrasi dengan HTHP.** Pasang unit LHTES secara *downstream* dari *condenser* HTHP. Gunakan *three-way valve* dan *PLC* untuk logika kontrol: saat $T_{PCM} < T_{process,min}$, aliran HTF dibelokkan ke LHTES (*charging*); saat proses butuh beban, aliran dibalik (*discharging*).

**Tahap 7 — Commissioning & Monitoring.** Pasang sensor T tipe-K pada minimal 12 titik (radial dan aksial). Kalibrasi dan baseline *state-of-charge* (SOC) awal. SOC didefinisikan sebagai:

$$SOC(t) = \frac{E_{stored}(t)}{E_{nom}} = \frac{\int_{T_{min}}^{T(t)} m \cdot c_{p,eff} \, dT}{m \cdot (L + c_p \Delta T_{util})}$$

**Tahap 8 — O&M Berkala.** Inspeksi tahunan untuk: korosi tube (terutama pada eutektik nitrat yang agresif terhadap baja karbon), *thermal cycling degradation* PCM, dan fouling pada sisi HTF.

---

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Spesifikasi Desain

Ambil kasus industri makanan (sterilisasi UHT) dengan kebutuhan berikut:
- Suhu proses: $T_{process}$ = 180°C (target utilisasi)
- Beban puncak: $Q_{peak}$ = 200 kW_t selama 4 jam
- HTHP: $COP_{HTHP}$ = 2,8, kapasitas termal output = 120 kW_t kontinu
- PCM: eutektik $KNO_3$–$NaNO_3$ dengan $T_m$ = 222°C, $L$ = 110 kJ/kg, $c_{p,s}$ = 1,5 kJ/(kg·K), $\rho_{PCM}$ = 1900 kg/m³
- HTF: *thermal oil* (misalnya Therminol 66) dengan $c_{p,f}$ = 2,3 kJ/(kg·K)
- Tube: baja karbon, $d_i$ = 30 mm, $d_o$ = 35 mm, $k_w$ = 50 W/(m·K)