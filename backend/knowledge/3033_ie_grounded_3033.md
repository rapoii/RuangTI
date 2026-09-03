# 3033 — Integrasi Sistem Penyimpanan Energi Termal Panas Laten (LHTES) pada Suhu 222°C dengan High-Temperature Heat Pump (HTHP) untuk Dekarbonisasi Proses Industri

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** Transient numerical model of a latent heat thermal energy storage unit at around 222°C for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *Prospects of heat pump for thermal energy decarbonization*. *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri menyumbang sekitar 25% dari konsumsi energi final global, di mana lebih dari separuh kebutuhan tersebut berupa energi termal pada rentang suhu sedang–tinggi (100–250°C) untuk aplikasi seperti sterilisasi, pengeringan, pemrosesan polimer, dan distilasi (Xu & Wang, 2024, [DOI:10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Dekarbonisasi beban termal industri ini mensyaratkan elektrifikasi proses melalui High-Temperature Heat Pumps (HTHPs), namun karakteristik operasional HTHP yang intermittent dan ketidakstabilan ketersediaannya di pasar listrik menciptakan tantangan dispatchability. Penyimpanan energi termal panas laten (*Latent Heat Thermal Energy Storage* — LHTES) muncul sebagai enabler teknologi untuk menyetarakan profil produksi dan konsumsi panas.

Toloza, Payá, dan Barceló (2026, [DOI:10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) secara eksplisit menekankan bahwa LHTES dapat menjadi *value-added* signifikan bagi aplikasi process heat ketika digabungkan dengan HTHP, khususnya pada suhu transisi fasa sekitar 222°C — suhu yang sangat relevan untuk industri makanan, kimia halus, dan tekstil. Tantangan fundamental yang diidentifikasi adalah konduktivitas termal rendah dari phase change materials (PCM) berbasis garam nitrat eutektik (umumnya $k_{PCM} \approx 0{,}4\text{–}0{,}6 \text{ W/(m·K)}$), yang menuntut optimalisasi exchanger geometry, strategi enkapsulasi, maupun penggunaan metal wool/foam sebagai enhancer.

Konfigurasi *shell-and-tube* dipilih dalam paper tersebut karena tiga keunggulan struktural: (1) kekompakan volumetrik yang tinggi — krusial untuk retrofit di fasilitas industri existing dengan ruang terbatas; (2) robustnya struktur mekanik pada tekanan operasi elevated; dan (3) kapasitas tinggi dalam menerima strategi peningkatan perpindahan panas. Model transient numerik yang dikembangkan dalam bahasa Modelica memungkinkan prediksi perilaku charge/discharge pada unit LHTES vertikal secara real-time, yang merupakan kebutuhan mendasar untuk sistem kontrol HTHP-LHTES terintegerasi.

Konteks bisnisnya jelas: investasi pada sistem terintegrasi ini memungkinkan pelaku industri memitigasi paparan volatilitas harga gas alam sambil memenuhi target emisi Scope 1 dan Scope 2 sesuai protokol GHG Protocol dan ISO 14064. Lebih jauh, integrasi ini membuka revenue stream baru melalui partisipasi dalam program demand-response dan kapasitas penyimpanan termal sebagai *grid service*.

---

## 2. Landasan Teori & Formulasi Matematis

Model transient LHTES shell-and-tube vertikal disusun dengan tiga domain komputasi: (i) PCM anulus yang mengalami perubahan fasa, (ii) dinding tabung logam, dan (iii) fluida pemanas/pendingin (HTF) di dalam tube. Asumsi standar yang digunakan Toloza et al. (2026, DOI:[10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) mencakup kesetimbangan termal radial, sifat termofisika PCM yang bergantung pada temperatur, dan karakteristik HTF yang diperlakukan sebagai fluida dengan kapasitas termal seragam.

### 2.1 Persamaan Energi pada PCM (Koordinat Silindris)

Untuk geometri aksisimetrik di sekitar tube, persamaan konduksi unsteady dengan sumber panas laten adalah:

$$\rho_{PCM} \frac{\partial H}{\partial t} = \frac{1}{r} \frac{\partial}{\partial r}\left( r \, k_{PCM}(T) \, \frac{\partial T}{\partial r} \right) + \frac{1}{r^2} \frac{\partial}{\partial \theta}\left( k_{PCM}(T) \frac{\partial T}{\partial \theta}\right) + \frac{\partial}{\partial z}\left( k_{PCM}(T) \frac{\partial T}{\partial z}\right)$$

Pada geometri satu-dimensi radial (model disederhanakan yang diadopsi Toloza et al., 2026):

$$\rho_{PCM} \frac{\partial H}{\partial t} = \frac{1}{r}\frac{\partial}{\partial r}\left(r \, k_{PCM}(T) \frac{\partial T}{\partial r}\right)$$

### 2.2 Relasi Enthalpi–Temperatur dan Liquid Fraction

Pendekatan *enthalpy method* digunakan untuk menangani moving phase front secara robust. Liquid fraction didefinisikan sebagai:

$$f_l(T) = \begin{cases} 0, & T < T_s \\ \dfrac{T - T_s}{T_l - T_s}, & T_s \leq T \leq T_l \\ 1, & T > T_l \end{cases}$$

di mana $T_s$ dan $T_l$ adalah temperatur mulai dan berakhirnya melting/solidifikasi. Enthalpi spesifik ditulis:

$$H(T) = \int_{T_{ref}}^{T_s} c_{p,s}(T')\,dT' + \rho_{PCM} \, L \cdot f_l(T) + \int_{T_l}^{T} c_{p,l}(T')\,dT'$$

dengan $L$ adalah panas laten PCM. Untuk garam nitrat eutektik pada 222°C (misalnya campuran $\text{NaNO}_3\text{–KNO}_3$ dengan komposisi solar salt), $L \approx 161$ kJ/kg dan $c_{p,l} \approx 1{,}6$ kJ/(kg·K).

### 2.3 Neraca Energi HTF (1D Aliran Sumbu-z)

HTF diasumsikan mengalir secara plug-flow dengan koefisien perpindahan panas konveksi $h_i$ di dinding dalam tabung:

$$\rho_{HTF} \, c_{p,HTF} \, A_c \frac{\partial T_{HTF}}{\partial t} + \dot{m}_{HTF} \, c_{p,HTF} \frac{\partial T_{HTF}}{\partial z} = h_i \, P_i \, (T_{wall}(z,t) - T_{HTF}(z,t))$$

di mana $A_c$ adalah luas penampang aliran, $P_i$ keliling dalam tube, dan $T_{wall}$ temperatur dinding. Korelasi Dittus–Boelter dipakai untuk aliran turbulen:

$$Nu_D = 0{,}023 \, Re^{0{,}8} \, Pr^{0{,}4} \quad \text{(heating)}; \quad h_i = \frac{Nu_D \, k_{HTF}}{D_i}$$

### 2.4 Kondisi Batas dan Diskretisasi

Pada dinding tabug logam, kesetimbangan fluks:

$$-k_{PCM}\left.\frac{\partial T}{\partial r}\right|_{r=r_i^+} = \frac{k_{wall}}{r \ln(r_o/r_i)}(T_{wall} - T_{HTF})\bigg|_{r=r_i^-}$$

Model diselesaikan dalam lingkungan Modelica menggunakan pustaka *Thermal Storage* dengan diskretisasi volume kendali (*finite volume*) pada radial node dan beda-hingga Euler eksplisit untuk waktu.

### 2.5 Kapasitas Termal Unit

Energi total yang dapat disimpan:

$$E_{storage} = m_{PCM}\left[\int_{T_{i}}^{T_m} c_{p,s}(T)\,dT + L + \int_{T_m}^{T_f} c_{p,l}(T)\,dT\right]$$

dengan $T_i, T_f, T_m$ berturut-turut temperatur awal, akhir, dan titik lebur PCM.

---

## 3. Metodologi Rekayasa & SOP Implementasi Industri

Penerapan LHTES-HTHP terintegrasi mengikuti SOP rekayasa lima tahap yang konsisten dengan paper Toloza et al. (2026, [DOI:10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) dan kerangka IEA Heat Pump Programme:

**Tahap 1 — Karakterisasi Beban Termal.** Audit energi berdasarkan ISO 50001 untuk.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
