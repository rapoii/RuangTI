# 2249 — Pemodelan Numerik Transien Unit Penyimpanan Energi Termal Panas Laten pada Suhu ~222°C untuk Integrasi dengan Pompa Kalor Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump*
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *Prospects of heat pump for thermal energy decarbonization*. *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri merupakan konsumen energi final terbesar di dunia, di mana proses termal menyumbang lebih dari 50% dari total потребление energi di Uni Eropa dan sekitar 25% secara global. Pada rentang suhu menengah-tinggi (150–250°C), panas proses umumnya dipasok oleh boiler berbahan bakar fosil, yang secara langsung menjadi kontributor emisi CO₂ dalam sektor industri sulit-didekarbonisasi (*hard-to-abate sectors*) seperti kimia, pulp & kertas, makanan & minuman, serta tekstil. Dekarbonisasi pada rentang suhu tersebut mensyaratkan elektrifikasi panas proses yang efisien secara termodinamika dan ekonomis.

Pompa kalor suhu tinggi (*High-Temperature Heat Pump*, HTHP) muncul sebagai teknologi kunci yang mampu menyediakan output termal pada 150–250°C dengan *Coefficient of Performance* (COP) 2–4, sehingga menggantikan peran burner gas secara langsung. Seperti ditegaskan oleh Xu & Wang (2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)), HTHP memiliki prospek strategis untuk dekarbonisasi termal melalui elektrifikasi, namun menghadapi tantangan operasional berupa ketidakselarasan antara profil suplai dan demand industri yang sangat fluktuatif. Solusi yang diajukan adalah integrasi HTHP dengan unit **Latent Heat Thermal Energy Storage** (LHTES), yang berfungsi sebagai buffer termal berdensitas energi tinggi.

Toloza, Payá, dan Barceló (2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) secara spesifik mengembangkan model numerik transien untuk unit LHTES berbasis konfigurasi *shell-and-tube* vertikal dengan material *Phase Change Material* (PCM) eutektik pada suhu fasa转变 sekitar 222°C. Pemilihan suhu ini sangat relevan karena berada dalam window operasional banyak proses industri (sterilisasi, distilasi, pengeringan). Tantangan utama PCM pada suhu tersebut adalah konduktivitas termal yang rendah (tipikal 0,4–1,0 W/(m·K)), yang menghambat laju pelepasan dan penyerapan kalor laten. Untuk itu, optimalisasi geometri penukar kalor, enkapsulasi, dan penggunaan struktur logam berpori (*metal foam/wool*) menjadi variabel desain yang menentukan kinerja sistem secara keseluruhan. Dalam konteks industri modern, integrasi LHTES-HTHP memungkinkan *load-shifting* pada tarif listrik rendah, peak-shaving demand listrik, serta peningkatan kapasitas efektif HTHP secara capital-efficient.

## 2. Landasan Teori & Formulasi Matematis

### 2.1 Persamaan Konservasi Energi Transien pada PCM

Model transien LHTES dikembangkan dengan pendekatan **enthalpy method** untuk mengakomodasi front fasa yang bergerak selama peleburan (*melting*) atau pembekuan (*solidification*). Persamaan governing pada domain PCM adalah:

$$\rho_{\text{PCM}} \frac{\partial h}{\partial t} = \nabla \cdot \left( k_{\text{PCM}} \nabla T \right)$$

di mana $h$ adalah entalpi spesifik, $\rho_{\text{PCM}}$ densitas, dan $k_{\text{PCM}}$ konduktivitas termal efektif. Hubungan entalpi–temperatur diformulasikan sebagai:

$$h(T) = \begin{cases} c_{p,s} \, T & T < T_m \\ c_{p,s} \, T_m + L + c_{p,l}(T - T_m) & T \geq T_m \end{cases}$$

dengan $c_{p,s}$ dan $c_{p,l}$ kapasitas panas pada fasa padat dan cair, $L$ kalor laten spesifik (J/kg), dan $T_m$ suhu lebur eutektik. Dalam zona *mushy*, fraksi likuid $\beta$ dievaluasi dengan relasi:

$$\beta = \begin{cases} 0 & T < T_s \\ \dfrac{T - T_s}{T_l - T_s} & T_s \le T \le T_l \\ 1 & T > T_l \end{cases}$$

sehingga entalpi efektif menjadi $h_{\text{eff}} = \beta L + \int_{T_{\text{ref}}}^{T} c_p \, dT$.

### 2.2 Persamaan Energi pada Heat Transfer Fluid (HTF)

Untuk fluida yang mengalir di dalam tube (HTF, biasanya thermal oil atau refrigeran R1234yf):

$$\rho_f c_{p,f} \left( \frac{\partial T_f}{\partial t} + u \frac{\partial T_f}{\partial z} \right) = \frac{4 h_i}{D_i} (T_{w,i} - T_f)$$

di mana $u$ adalah kecepatan aksial, $D_i$ diameter dalam tube, dan $h_i$ koefisien konveksi internal yang dihitung dari korelasi Gnielinski untuk aliran turbulen:

$$Nu_i = \frac{(f/8)(Re - 1000) Pr}{1 + 12{,}7 \sqrt{f/8}(Pr^{2/3} - 1)}, \quad h_i = \frac{Nu_i \, k_f}{D_i}$$

### 2.3 Parameter Dimensi Penting

Kinerja sistem dianalisis melalui bilangan *Stefan* (Ste), *Fourier* (Fo), dan *Biot* (Bi):

$$Ste = \frac{c_{p,s}(T_{\text{wall}} - T_m)}{L}, \quad Fo = \frac{\alpha t}{R_c^2}, \quad Bi = \frac{h_i R_c}{k_s}$$

di mana $R_c$ adalah radius karakteristik sel PCM, $\alpha = k_s / (\rho_s c_{p,s})$ diffusivitas termal, dan $T_{\text{wall}}$ suhu dinding tube. Nilai $Ste \ll 1$ mengindikasikan dominasi penyimpanan kalor laten atas kalor sensible.

### 2.4 Kapasitas Penyimpanan dan Efektivitas

Kapasitas termal total unit:

$$Q_{\text{stored}} = m_{\text{PCM}} \left[ c_{p,s}(T_m - T_{i}) + L + c_{p,l}(T_{\text{max}} - T_m) \right]$$

Efektivitas pelepasan muatan (*discharge*) dievaluasi dengan metode $\varepsilon$-NTU untuk penukar kalor *shell-and-tube*, dengan NTU:

$$NTU = \frac{U \, A_{\text{transfer}}}{C_{\text{min}}}, \quad \varepsilon = 1 - e^{-NTU(1 - C_r)}$$

untuk $C_r = C_{\text{min}}/C_{\text{max}}$, dengan $U$ koefisien perpindahan panas overall.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi unit LHTES-HTHP mengikuti SOP rekayasa sistematis sebagai berikut:

**Tahap 1 — Penentuan Spesifikasi Termal dan Profil Beban.** Kaji neraca massa-energi proses target (misal sterilisasi pada $T_{\text{proses}} = 180$–$220°C$), identifikasi durasi siklus termal harian, serta kebutuhan *peak demand* dan *base load*. Output: kurva $Q(t)$ dan $T(t)$ target discharge.

**Tahap 2 — Seleksi PCM dan Konfigurasi Geometri.** Pilih PCM eutektik dengan $T_m$ sedekat mungkin dengan $T_{\text{proses}}$ dan $L \geq 100$ kJ/kg. Untuk suhu 222°C, kandidat adalah campuran $\text{KNO}_3$–$\text{NaNO}_3$–$\text{Ca(NO}_3)_2$ dengan $T_m \approx 222$°C, $L \approx 110$ kJ/kg, $k_s \approx 0{,}95$ W/(m·K). Geometri *shell-and-tube* vertikal dengan $D_i = 30$ mm, panjang $L_{\text{active}} = 1{,}5$ m, dan jumlah tube $N = 24$ dalam shell berdiameter $D_s = 400$ mm merupakan baseline desain Toloza et al. (2026).

**Tahap 3 — Diskretisasi dan Pembangunan Model Numerik.** Model dikembangkan dalam bahasa **Modelica** (OpenModelica/Dymola), dengan strategi:
- Diskretisasi 1-D radial pada PCM (elemen *finite volume* tak seragam, refinement di dekat dinding).
- Diskretisasi 1-D aksial pada HTF (orde 5 upwind).
- Coupling antara domain diselesaikan dengan *iterative solver* berbasis Newton-Raphson untuk setiap time step $\Delta t = 1$–$5$ s.

**Tahap 4 — Validasi dan Kalibrasi.** Validasi dilakukan terhadap data eksperimental pilot plant (jika tersedia) atau benchmark numerik dari literatur (misalnya benchmark PCM fase-change IEA SHC Task 58). Kesalahan relatif target $\leq 5\%$ pada kurva $T(t)$ discharge.

**Tahap 5 — Integrasi dengan HTHP.** Sambungkan output termal LHTES ke evaporator atau kondenser HTHP melalui intermediate loop. HTHP dikontrol untuk mengisi LHTES saat tarif rendah (*valley*) dan *co-discharge* dengan proses saat tarif puncak (*peak*).

**Tahap 6 — Commissioning, Monitoring, dan Predictive Maintenance.** Instrumentasi minimum: termokopel tipe-K di 9 titik radial dan 5 titik aksial, flowmeter HTF, pressure transmitter, dan data logger dengan sampling 10 s. Implementasi *digital twin* berbasis Modelica memungkinkan prediksi *State of Charge* (SoC) secara real-time:

$$SoC(t) = \frac{h_{\text{PCM}}(t) - h_{\min}}{h_{\max} - h_{\min}}$$

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

### 4.1 Spesifikasi Desain

Ambil unit LHTES-HTHP untuk fasilitas sterilisasi industri makanan dengan kapasitas:
- Energi target discharge: $Q_{\text{target}} =