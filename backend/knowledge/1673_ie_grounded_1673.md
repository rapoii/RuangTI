# 1673 — Pemodelan Numerik Transien Unit Penyimpanan Energi Termal Panas Laten pada Suhu ~222°C untuk Integrasi dengan Pompa Kalor Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *Prospects of heat pump for thermal energy decarbonization*. *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Krisis iklim global dan target dekarbonisasi sektor industri telah mendorong pencarian teknologi energi termal yang efisien, padat energi, dan mampu menyimpan panas proses pada suhu menengah-tinggi (150–250°C). Dalam konteks ini, sistem *Latent Heat Thermal Energy Storage* (LHTES) muncul sebagai solusi strategis karena densitas energi volumetriknya jauh melampaui sistem *sensible heat storage*. Toloza, Payá, dan Barceló (2026) menekankan bahwa LHTES dapat menjadi nilai tambah signifikan ketika diintegrasikan dengan *High-Temperature Heat Pump* (HTHP) untuk aplikasi panas proses industri, menggantikan boiler berbasis gas alam yang masih mendominasi sektor manufaktur berat.

Permasalahan fundamental yang diangkat oleh para penulis adalah konduktivitas termal PCM (*Phase Change Material*) yang rendah — umumnya berkisar 0,2–0,5 W/(m·K) untuk garam nitrat atau parafin — sehingga membatasi laju pelepasan dan penyerapan kalor. Toloza et al. (2026) memilih geometri *shell-and-tube* vertikal karena tiga atributnya: kekompakan volumetrik tinggi, integritas struktural terhadap siklus termal berulang, dan kapasitas untuk peningkatan termal melalui internal fin, *metal foam*, atau *metal wool*. Suhu fusi ~222°C dipilih untuk menjembatani kesenjangan suhu antara output HTHP industri (140–200°C) dan kebutuhan uap proses pada sektor kimia, makanan, dan tekstil.

Xu dan Wang (2024) mengonfirmasi bahwa dekarbonisasi termal global mensyaratkan adopsi masif HTHP, dengan potensi pengurangan emisi CO₂ hingga 50% pada sektor industri suhu menengah. Integrasi LHTES dengan HTHP memungkinkan *time-shifting* energi: HTHP beroperasi pada jam *off-peak* listrik (tarif rendah, jaringan lebih bersih) dan melepaskan panas tersimpan saat permintaan puncak. Dari perspektif Teknik Industri, ini adalah persoalan *capacity planning*, *scheduling*, dan *levelized cost of storage* (LCOS) yang memerlukan pemodelan transien yang andal agar keputusan investasi CAPEX dapat dijustifikasi secara kuantitatif.

Relevansi industri meluas ke rantai pasok energi: fasilitas manufaktur dengan *process heat demand* fluktuatif (misalnya industri susu UHT, *sterilization*, *dyeing*) dapat memanfaatkan buffer termal ini untuk decoupling produksi dari volatilitas harga listrik. Dalam kerangka *Industrial Symbiosis*, panas *waste* dari proses lain juga dapat disimpan untuk digunakan kembali, meningkatkan *resource efficiency* sesuai prinsip *circular economy*.

## 2. Landasan Teori & Formulasi Matematis

Pemodelan transien LHTES pada paper Toloza et al. (2026) menggunakan bahasa Modelica dengan pendekatan *enthalpy method* untuk menangani *moving phase-change front*. Persamaan konservasi energi pada PCM ditulis sebagai:

$$\rho_{PCM} \frac{\partial H}{\partial t} = \nabla \cdot \left( k_{PCM} \nabla T \right)$$

dengan $H$ adalah entalpi spesifik (J/kg) yang mencakup kontribusi sensible dan latent:

$$H(T) = \int_{T_{ref}}^{T} c_{p}(\tau) \, d\tau + f_l \cdot L_f$$

di mana $f_l \in [0,1]$ adalah fraksi liquid dan $L_f$ adalah kalor laten peleburan (J/kg). Fraksi liquid didefinisikan melalui regularisasi termodinamika:

$$f_l = \begin{cases} 0, & T \leq T_s \\ \frac{T - T_s}{T_l - T_s}, & T_s < T < T_l \\ 1, & T \geq T_l \end{cases}$$

untuk garam eutektik dengan selang peleburan sempit, pendekatan *apparent heat capacity* dapat digunakan:

$$\rho_{PCM} \left( c_{p,eff} \frac{\partial T}{\partial t} \right) = \nabla \cdot \left( k_{PCM} \nabla T \right)$$

dengan $c_{p,eff} = c_{p,s} + c_{p,l} + \frac{L_f}{T_l - T_s} \cdot \delta(T - T_m)$.

Pada sisi *shell*, perpindahan kalor dari dinding tabung ke PCM selama peleburan dimodelkan dengan konveksi alami laminar di dalam *envelope* silinder. Bilangan Nusselt untuk konveksi alami internal di sekitar tabung horizontal mengikuti korelasi Churchill-Chu:

$$Nu_D = \left\{ 0.60 + \frac{0.387 \cdot Ra_D^{1/6}}{\left[1 + (0.559/Pr)^{9/16}\right]^{8/27}} \right\}^2$$

dengan $Ra_D = \frac{g \beta (T_{wall} - T_{PCM}) D^3}{\nu \alpha}$ adalah bilangan Rayleigh, $Pr$ adalah Prandtl number, dan $\beta$ adalah koefisien ekspansi termal.

Pada sisi *tube*, fluida pemanas (HTF — biasanya minyak termal atau fluida *two-phase*) mengalir dan melepas/menyerap kalor melalui dinding logam. Balance energi 1D sepanjang sumbu tabung:

$$\dot{m}_{htf} c_{p,htf} \frac{dT_{htf}}{dz} = U_o \pi D_o \left( T_{PCM,interface}(z,t) - T_{htf}(z) \right)$$

di mana koefisien perpindahan kalor overall $U_o$ diperoleh dari resistansi seri:

$$\frac{1}{U_o} = \frac{1}{h_{htf,i}} \frac{D_o}{D_i} + \frac{D_o \ln(D_o/D_i)}{2 k_{wall}} + \frac{1}{h_{PCM,eff}}$$

Energi total yang tersimpan dalam satu siklus peleburan-pembekuan:

$$Q_{storage} = m_{PCM} \left[ c_{p,s}(T_m - T_{i}) + L_f + c_{p,l}(T_{f} - T_m) \right]$$

Kapasitas perpindahan kalor sesaat *effective*:

$$\dot{Q}_{inst}(t) = U_o A_{surface} \Delta T_{LMTD}(t)$$

dengan $\Delta T_{LMTD} = \frac{(T_{htf,in} - T_{PCM,out}) - (T_{htf,out} - T_{PCM,in})}{\ln\left(\frac{T_{htf,in} - T_{PCM,out}}{T_{htf,out} - T_{PCM,in}}\right)}$ dalam kasus counter-flow.

Untuk HTHP, parameter kunci adalah *Coefficient of Performance*:

$$COP_{HTHP} = \frac{\dot{Q}_{useful}}{W_{electric}} = \frac{1}{1 - T_c/T_h}$$

dengan batas Carnot yang menurun seiring kenaikan $T_h$. Untuk $T_h = 220°C$ dan $T_c = 30°C$, $COP_{Carnot} \approx 4{,}16$, namun nilai realistis HTHP industri berada pada rentang 1,8–3,0 karena irreversibilitas kompresi dan kerugian ekspansi.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri unit LHTES untuk integrasi HTHP mengikuti *Standard Operating Procedure* (SOP) berbasis *risk-based engineering*. Tahapan sistematisnya adalah:

**Fase 1: Karakterisasi PCM.** Seleksi material eutektik (misalnya campuran $\text{NaNO}_3$–$\text{KNO}_3$ atau garam organik) dilakukan dengan kriteria: $T_m \in [200, 230]°C$, $L_f \geq 150$ kJ/kg, stabilitas siklus >3000 siklus, dan compatibilitas kimia dengan dinding tabung baja karbon atau stainless steel 316L. Pengujian DSC (*Differential Scanning Calorimetry*) sesuai ASTM E1269 wajib dilakukan untuk validasi properti termofisik.

**Fase 2: Desain geometri shell-and-tube.** Rasio aspek tabung ($L/D_i$) dipilih antara 4–8 untuk mencegah *flow maldistribution*. Jarak antar tabung dalam bundle harus memenuhi *baffle spacing* minimum 0,2 × diameter shell sesuai TEMA standards. Encapsulasi PCM dalam tabung atau shell tergantung pada korosivitas — untuk garam nitrat korosif, PCM ditempatkan di shell dan HTF bersirkulasi dalam tabung.

**Fase 3: Pemodelan & simulasi transien.** Bahasa Modelica digunakan untuk membangun *multi-domain model* yang mengintegrasikan dinamika PCM, HTF, dan HTHP secara *co-simulation*. Diskretisasi spatial menggunakan metode *finite volume* dengan grid refinement di sekitar *phase-change front*. Validasi dilakukan dengan benchmarking terhadap solusi analitik Neumann atau eksperimen *Stefan problem*.

**Fase 4: Integrasi kontrol.** Sistem kontrol SCADA mengelola *mode charging* (HTHP aktif, HTF memanaskan PCM), *mode discharging* (PCM melepas panas ke HTF untuk feed uap proses), dan *idle mode*. Strategi *model predictive control* (MPC) menggunakan prediksi beban termal 24-jam ke depan untuk optimasi switching.

**Fase 5: Commissioning & monitoring.** Pengujian *performance verification* meliputi: (i) verifikasi kapasitas storage sesuai desain dengan toleransi ±5%, (ii) pengukuran *round-trip efficiency* (target ≥75%), dan (iii) *long-term cycling test* minimal 100 siklus untuk validasi degradasi.

Diagram alir logika operasi adalah sebagai berikut:

```
[Start] → [Load Demand Forecast] 
   ↓
[Decision: Hour t = Peak?] 
   ├── Ya → [Discharge Mode: HTF in tube, PCM releases heat] → [Steam to process] → [Loop]
   └── Tidak → [Decision: Harga listrik rendah?]
                ├── Ya → [Charge Mode: HTHP aktif, HTF memanaskan PCM] → [Store] → [Loop]
                └── Tidak → [Idle Mode: Insulated hold] → [Loop]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**