# 2281 — Pemodelan Numerik Transien Unit Penyimpanan Energi Termal Panas Laten pada Suhu ~222 °C untuk Integrasi dengan Pompa Kalor Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222 ºC for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri global mengonsumsi sekitar 37 % dari total energi final dunia dan menyumbang hampir 24 % emisi CO₂, di mana panas proses (process heat) pada rentang suhu 150–400 °C merupakan kontributor dominan hingga 50 % dari kebutuhan energi termal industri (Xu & Wang, 2024, *The Innovation Energy*, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Dekarbonisasi panas proses mensyaratkan integrasi pompa kalor suhu tinggi (*High-Temperature Heat Pump*/HTHP) yang mampu menaikkan *coefficient of performance* (COP) menjadi 3–5, jauh melampaui boiler bahan bakar fosil. Namun, karakteristik operasional HTHP yang intermittent—akibat siklus defrost, variabilitas beban, dan profil tarif listrik dinamis—menuntut adanya buffer termal yang mampu menyimpan dan melepas energi pada suhu tinggi secara fleksibel.

Toloza, Payá, dan Barceló (2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) menjawab kebutuhan tersebut dengan mengajukan *Latent Heat Thermal Energy Storage* (LHTES) berbasis *Phase Change Material* (PCM) eutektik pada suhu fusi ~222 °C. Justifikasi pemilihan suhu ini sangat strategis karena 222 °C berada dalam *sweet spot* antara output HTHP berbasis siklus trans-kritis CO₂ (suhu buang 150–250 °C) dan kebutuhan uap proses industri makanan, kimia, dan tekstil. Tantangan utama PCM, yaitu konduktivitas termal rendah (0,2–0,5 W/m·K untuk garam eutektik), diatasi dengan konfigurasi *shell-and-tube* vertikal yang menawarkan kekompakan, robustnes struktural, dan kapasitas peningkatan perpindahan panas melalui optimasi geometri, enkapsulasi, atau *metal wool*. Urgensi ekonominya jelas: capital cost LHTES harus turun di bawah 30 €/kWh_th agar payback period integrasi HTHP-LHTES di industri kurang dari 7 tahun.

## 2. Landasan Teori & Formulasi Matematis

Model transien Toloza dkk. (2026) dibangun dalam bahasa Modelica dengan tiga domain fisika simultan: konduksi PCM, perpindahan panas konveksi pada *heat transfer fluid* (HTF), dan dinamika perubahan fasa. Persamaan governing untuk PCM mengikuti *energy equation* bentuk enthalpi:

$$\rho_{PCM} \frac{\partial H}{\partial t} = \nabla \cdot (k_{PCM}(T) \nabla T) \tag{1}$$

dengan hubungan enthalpi-temperatur didekati dengan metode *apparent heat capacity*:

$$H(T) = \int_{T_{ref}}^{T_m} c_{p,s}(\tau)d\tau + f_l \cdot h_{sl} + \int_{T_m}^{T} c_{p,l}(\tau)d\tau \tag{2}$$

di mana $f_l$ adalah fraksi cair (*liquid fraction*), $h_{sl}$ adalah panas laten, dan $T_m$ suhu lebur. Fraksi cair dimodelkan dengan kurva *smoothed Heaviside* untuk menghindari diskontinuitas numerik:

$$f_l = \frac{1}{2}\left(1 + \frac{\tanh\!\left(\frac{T - T_m}{\Delta T_{mush}}\right)}{\tanh(1)}\right) \tag{3}$$

dengan $\Delta T_{mush}$ adalah lebar zona *mushy* (tipikal 1–3 K). Untuk HTF di dalam tabung, persamaan konservasi energi 1D digabung dengan momentum untuk menangkap efek termal buoyancy:

$$\rho_{HTF} c_{p,HTF} A_c \frac{\partial T_{HTF}}{\partial t} + \dot{m} c_{p,HTF} \frac{\partial T_{HTF}}{\partial z} = U_i \pi D_i (T_{PCM,wall} - T_{HTF}) \tag{4}$$

Koefisien transfer panas overall $U_i$ dihitung dari resistansi seri:

$$\frac{1}{U_i} = \frac{1}{h_i} + \frac{D_i \ln(D_o/D_i)}{2 k_{tube}} + \frac{1}{h_o} \frac{D_i}{D_o} \tag{5}$$

Dengan korelasi Nusselt Dittus-Boelter untuk aliran turbulen HTF:

$$Nu_D = 0.023\, Re_D^{0.8}\, Pr^{0.4}, \quad 10^4 < Re_D < 1.2 \times 10^5 \tag{6}$$

Untuk sisi PCM (shell-side, *natural convection* selama pelelehan), Toloza dkk. menggunakan korelasi Nusselt yang bergantung pada Rayleigh dan rasio aspek, $Nu = C(Ra \cdot L/D)^{n}$, dengan $C$ dan $n$ fungsi geometri *shell-and-tube*. Kapasitas penyimpanan energi total sistem:

$$Q_{LHTES} = m_{PCM} \left[ h_{sl} + c_{p,avg} (T_{max} - T_m) \right] \tag{7}$$

Parameter kunci yang di-*sensitivity-analyze*: $k_{PCM}$ (0,2–1,0 W/m·K), $h_{sl}$ (150–250 kJ/kg), dan pitch antar-tabung (rasio $P/D_o$ = 1,25–2,0).

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi SOP di lapangan mengikuti tahapan sistematis berikut, diadopsi dari alur kerja Toloza dkk. (2026) dan praktik terbaik IEA SHC Task 58/ECES Annex 30:

1. **Karakterisasi Termofisik PCM.** Uji DSC (*Differential Scanning Calorimetry*) untuk $h_{sl}$, $T_m$, dan $c_p$; uji T-History untuk konduktivitas; uji siklus termal 1000 siklus untuk degradasi.
2. **Desain Geometri Shell-and-Tube.** Pilih diameter tabung $D_o$ = 25,4 mm (1 in), ketebalan 2 mm; panjang $L$ = 1,5–3 m; jumlah tabung $N_t$ dihitung dari target $Q_{LHTES}$ menggunakan Persamaan (7). Pitch triangular $P = 1,5 D_o$ untuk kompromi kompaktness dan *baffle spacing*.
3. **Pembangunan Model Numerik Modelica.** Diskretisasi 1D radial pada PCM (50–100 node) dan 1D aksial pada HTF (20–40 node). Integrasi waktu dengan solver `ida` (BDF orde variabel), toleransi absolut $10^{-4}$.
4. **Validasi Eksperimental.** Bandingkan profil suhu terhadap data eksperimen pelelehan/pembekuan; target RMSE < 3 %.
5. **Integrasi dengan HTHP.** Sambungkan outlet HTHP ke inlet HTF LHTES melalui *control valve*; implementasi logika kontrol: HTHP mengisi LHTES saat tarif listrik rendah (*valley*) dan melepas saat *peak* atau saat *defrost cycle*.
6. **Commissioning dan Monitoring.** Pasang sensor T tipe-K di 5 lokasi axial dan 3 radial; data logger 10 s; alarm anomali berdasarkan $\Delta T$ berlebih.
7. **Maintenance Berkala.** Inspeksi korosi tabung, kebocoran enkapsulasi, dan degradasi PCM setiap 2000 jam operasi sesuai ASME PCC-2 untuk *in-service inspection*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Pabrik makanan membutuhkan uap proses 200 °C, laju 500 kg/jam. Diintegrasikan HTHP kapasitas 100 kW_th (COP 3,2) dengan unit LHTES PCM eutektik nitrat (komposisi tipikal: 40 % NaNO₃ – 60 % KNO₃, $T_m$ ≈ 222 °C, $h_{sl}$ = 160 kJ/kg, $k_{PCM}$ = 0,5 W/m·K, $\rho_{PCM}$ = 1980 kg/m³).

**Langkah 1 — Penentuan massa PCM untuk penyimpanan 4 jam:**

$$m_{PCM} = \frac{Q_{required}}{h_{sl} + c_{p,PCM} (T_{max} - T_m)} = \frac{100 \text{ kW} \times 4 \text{ jam}}{160 + 1,5 \times (250 - 222)} = \frac{400.000 \text{ kJ}}{202 \text{ kJ/kg}} \approx 1980 \text{ kg}$$

**Langkah 2 — Geometri Shell-and-Tube:** Dengan $\rho_{PCM}$ = 1980 kg/m³, volume PCM $V = m/\rho = 1{,}0$ m³. Pilih tabung $D_o$ = 25,4 mm, $D_i$ = 21,4 mm, panjang $L$ = 2 m, diisi 80 % volume shell. Jumlah tabung:

$$N_t = \frac{0{,}8 \cdot V_{shell}}{\pi D_o^2 L / 4} \approx 78 \text{ tabung (bundle)} \text{ dengan } D_{shell} \approx 350 \text{ mm}$$

**Langkah 3 — Laju Aliran HTF (air termal):** Target perpindahan panas 100 kW dengan $\Delta T_{HTF}$ = 20 K:

$$\dot{m}_{HTF} = \frac{\dot{Q}}{c_{p,HTF} \Delta T_{HTF}} = \frac{100.000}{4{,}18 \times 20} \approx 1196 \text{ kg/jam} \approx 0{,}33 \text{ kg/s}$$

Cek Reynolds per tabung (HTF terdistribusi paralel melalui 78 tabung, laju per tabung $u$ ≈ 0,35 m/s, $D_i$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
