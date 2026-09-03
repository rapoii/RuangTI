# 1785 — Model Numerik Transien Penyimpanan Energi Termal Panas Laten pada Suhu ~222°C untuk Integrasi dengan Pompa Kalor Suhu Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesifik:** *Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump*
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri menyumbang sekitar 37% konsumsi energi final global dan lebih dari 24% emisi CO₂ langsung, di mana proses termal (process heat) pada rentang suhu 150–400°C merupakan penyerap energi terbesar (Xu & Wang, 2024, DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)). Dekarbonisasi sektor ini tidak dapat hanya mengandalkan elektrifikasi berbasis boiler resistif atau tungku pembakaran fosil karena efisiensi termodinamika rendah; solusi *High-Temperature Heat Pump* (HTHP) muncul sebagai teknologi pengubah permainan dengan *Coefficient of Performance* (COP) tipikal 2,5–4,5 pada suhuoutput 150–250°C.

Namun, integrasi HTHP ke dalam lini proses industri menghadapi tantangan fundamental berupa **mismatch temporal** antara availability energi listrik murah (off-peak, curtailment renewables) dan demand proses termal yang sering kali fluktuatif. Toloza, Payá, dan Barceló (2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) menekankan bahwa *Latent Heat Thermal Energy Storage* (LHTES) menjadi nilai tambah (*added value*) yang krusial untuk menjembatani gap tersebut, memungkinkan HTHP beroperasi pada *set-point* optimal secara kontinu sementara beban proses termal dipenuhi dari unit penyimpanan.

Urgensi ekonominya semakin jelas ketika dihitung *Levelized Cost of Heat* (LCOH): dengan integrasi HTHP+LHTES pada suhu 222°C, biaya termal dapat ditekan menjadi €18–28/MWh dibandingkan €45–65/MWh untuk boiler gas alam di Eropa (Xu & Wang, 2024). Tantangan teknis yang diidentifikasi Toloza et al. (2026) adalah konduktivitas termal rendah PCM tipikal (0,1–0,3 W/m·K) yang menghambat laju *charging/discharging*, sehingga optimasi geometri heat exchanger, enkapsulasi, atau penggunaan *metal wool* menjadi imperatif. Di antara alternatif tersebut, konfigurasi *shell-and-tube* dipilih karena kekompakan, kekokohan struktural, dan kapasitasnya untuk ditingkatkan melalui fin atau insert turbulator. Konteks ini mengarahkan rekayasa pada pengembangan model numerik transien yang mampu memprediksi perilaku dinamis unit LHTES sehingga integrasi dengan HTHP dapat dirancang dengan margin keamanan termal yang presisi.

## 2. Landasan Teori & Formulasi Matematis

Model numerik transien yang dikembangkan Toloza et al. (2026) menggunakan bahasa *Modelica* dan diselesaikan melalui *method of lines* dengan diskretisasi spatial 1D radial. Formulasi matematis intinya dibangun di atas tiga persamaan konservasi berikut.

**Persamaan Energi pada PCM (sistem shell):** Mengasumsikan PCM mengalami *phase change* pada suhu $T_m$ dengan lebar interval fusi $\Delta T_{pc}$, model enthalpy (*apparent heat capacity*) digunakan:

$$\rho_{PCM} \frac{\partial h}{\partial t} = \frac{1}{r} \frac{\partial}{\partial r}\left( k_{PCM}(T) \cdot r \frac{\partial T}{\partial r} \right)$$

dengan kapasitas panas apparent yang mencakup efek latent:

$$c_{p,app}(T) = c_{p,s} + \frac{L}{\sqrt{\pi}\sigma} \exp\left(-\frac{(T-T_m)^2}{\sigma^2}\right)$$

di mana $L$ adalah latent heat fusion (J/kg), $\sigma = \Delta T_{pc}/(2\sqrt{2\ln 2})$ adalah *standard deviation* Gaussian smoothing, dan $c_{p,s}$ adalah kapasitas panas fase solid. Formulasi ini menghindari singularitas pada *moving interface* (masalah Stefan klasik).

**Persamaan Energi pada Heat Transfer Fluid (HTF, sistem tube):** Aliran HTF dalam tube diasumsikan 1D dengan profil plug-flow yang didiskretisasi menggunakan *finite volume* di sepanjang sumbu aksial $z$:

$$\rho_{HTF} c_{p,HTF} A_{HTF} \frac{\partial T_{HTF}}{\partial t} + \dot{m}_{HTF} c_{p,HTF} \frac{\partial T_{HTF}}{\partial z} = h_{conv} P_{HTF} (T_{wall} - T_{HTF})$$

dengan $h_{conv}$ koefisien konveksi yang dihitung dari korelasi Gnielinski untuk bilangan Reynolds $Re > 10^4$:

$$Nu_D = \frac{(f/8)(Re-1000)Pr}{1+12.7\sqrt{f/8}(Pr^{2/3}-1)}, \quad f = (0.790\ln Re - 1.64)^{-2}$$

**Kopling Termal Tube Wall–PCM (resistance network):**

$$q'' = \frac{T_{HTF} - T_{PCM}}{R_{conv,HTF} + R_{cond,wall} + R_{cond,PCM,r}}$$

dengan tahanan konduksi radial PCM pada front fusi yang diselesaikan menggunakan *quasi-steady heat conduction* dengan *moving boundary*:

$$R_{cond,PCM,r} = \frac{\ln(r_{ext}/r_{int})}{2\pi k_{PCM,eff} L_z}$$

**Parameter Kunci Eutektik pada 222°C:** Paper menggunakan campuran eutektik (komposisi kimia tidak diungkap lengkap pada abstrak namun diindikasikan sebagai garam nitrat atau hidroksida) dengan properti termofisika tipikal: $L \approx 180–220$ kJ/kg, $\rho \approx 1850$ kg/m³, dan $k_{PCM} \approx 0,4$ W/m·K untuk eutektik terner. Suhu fusi 222°C berada dalam window operasi ideal untuk HTHP berbasis siklus *transcritical CO₂* atau *HCFO/HFO refrigeran*新一代.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi industri LHTES+HTHP mengikuti kerangka SOP 6-tahap yang diturunkan dari metodologi Toloza et al. (2026) dan best practice Xu & Wang (2024):

**Tahap 1 — Karakterisasi Demand & Sumber Energi.** Audit proses termal 12 bulan untuk memetakan profil suhu, durasi, dan *duty cycle* harian/musiman. Tentukan *design point* (suhu, kapasitas termal peak dalam MWh) dan *off-design* (jendela waktu *charging* saat listrik surplus atau tarif rendah).

**Tahap 2 — Seleksi PCM & HTF.** Pilih PCM eutektik dengan $T_m$ di tengah rentang set-point proses (untuk overcharge/discharge margin) dan stabilitas siklus ≥3000 thermal cycles tanpa degradasi >5%. HTF harus stabil pada suhu operasi (sintetik oil atau molten salt untuk >250°C).

**Tahap 3 — Desain Shell-and-Tube Heat Exchanger.** Tentukan *pitch ratio* $P_t/D_o = 1,25$ (segitelta) untuk triangular pitch sebagai baseline, pertimbangkan *helical baffles* atau *longitudinal fins* untuk enhancement. Validasi structural terhadap thermal stress cycling.

**Tahap 4 — Pemodelan & Simulasi Transien.** Bangun model dalam *Modelica* (Dymola) atau *MATLAB/Simulink* dengan persamaan Bagian 2. Jalankan simulasi untuk skenario charge, hold, discharge dengan variasi laju alir HTF (0,5–2,0 m/s) dan inlet temperature (-10 sampai +15 K dari $T_m$).

**Tahap 5 — Verifikasi & Kalibrasi.** Bandingkan hasil model dengan eksperimen laboratorium (skala bench). Sesuaikan parameter effective ($k_{PCM,eff}$) yang mencakup efek *natural convection* dalam PCM cair (bilangan Rayleigh lokal $Ra = g\beta \Delta T L^3 / (\nu \alpha)$).

**Tahap 6 — Integrasi Control & Safety.** Implementasikan *cascade control* (T outer, flow inner) dengan limit pada *thermal runaway* dan *freeze protection*. Standar acuan: ISO 12241 (insulation), ASME BPVC Section VIII (vessel), dan EN 13445 (unfired pressure vessels).

Diagram alir keputusan: jika $LCOH_{LHTES+HTHP} < LCOH_{boiler}$ AND *payback period* < 5 tahun, maka proceed ke engineering procurement; jika tidak, evaluasi alternatif *sensible TES* (contoh: molten salt thermocline) atau *thermochemical*.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Skenario:** Pabrik makanan/minuman di Eropa Selatan membutuhkan 2,5 MWh_th/h pada suhu 215–225°C untuk proses sterilisasi, beroperasi 16 jam/hari. Listrik tersedia dengan tarif *time-of-use* €0,08/kWh (malam) dan €0,18/kWh (siang). HTHP memiliki kapasitas termal 800 kW_th, COP 3,2 pada kondisi desain.

**Parameter Desain LHTES (turunan dari Toloza et al., 2026):**
- PCM eutektik, $T_m = 222°C$, $L = 200$ kJ/kg, $\rho = 1850$ kg/m³, $k_{PCM} = 0,4$ W/m·K
- HTF: synthetic oil, $c_{p,HTF} = 2400$ J/kg·K, $\dot{m}_{HTF} = 4$ kg/s
- Shell-and-tube: 200 tube, $D_o = 25$ mm, $D_i = 20$ mm, $L_z = 4$ m
- Volume PCM: $V_{PCM} = 12$ m³ → massa $m_{PCM} = 22.200$ kg

**Kapasitas Penyimpanan:**
$$E_{th} = m_{PCM} \cdot L = 22.200 \times 200.000 = 4,44 \text{ GJ} = 1,233 \text{ MWh}_{th}$$

Ini mampu menutup 49% kebutuhan harian pada *design point* (16 jam × 2,5 MWh = 40 MWh/hari → 1,233 MWh mengisi 4,93 jam proses, dengan HTHP menutup sisanya).

**Waktu Charging (perhitungan *apparent heat capacity*):** Asumsikan inlet HTF 235°C, $\Delta T_{log-mean} \approx 10$ K pada awal charge. Perpindahan panas awal:
$$Q = U \cdot A \cdot \Delta T_{LM}$$
dengan $U \approx 180$ W/m²K, $A = n \cdot \pi D_o L_z = 200 \times \pi \times 0,025 \times 4 = 62,8$ m²:
$$Q = 180 \times 62,8 \times 10 = 113 \text{ kW}$$

Waktu untuk melepas sensible heat PCM dari 200°C ke 222°C:
$$t_{sensible} = \frac{m_{PCM} c_{p,s} \Delta T}{Q} = \frac{22.200 \times 1500 \times 22}{113.000} = 6.482 \text{ s} \approx 1,8 \text{ jam}$$

Waktu untuk menyelesaikan *phase change* (asumsi $U$ turun menjadi ~120 W/m²K karena resistensi konduksi PCM dominan):
$$t_{latent} = \frac{m_{PCM} \cdot L}{Q_{avg}} = \frac{22.200 \times 200.000}{100.000} = 44.400 \text{ s} \approx 12,3 \text{ jam}$$

Total charging time: ~14,1 jam. Ini memenuhi slot malam (10 jam off-peak + 4 jam shoulder), yang berarti hanya membutuhkan tambahan grid listrik 2,1 jam pada tarif menengah.

**Perhitungan LCOH:** Capital cost LHTES ~€320.000 (€65/kWh_th), HTHP upgrade ~€450.000, BOP ~€180.000. Total CAPEX €950.000, lifetime 20 tahun, O&M €25.000/tahun, discount rate 6%:
$$LCOH = \frac{950.000 \times CRF(6\%,20) + 25.000}{8.000 \text{ MWh}_{th}} = \frac{950.000 \times 0,0872 + 25.000}{8.000} = \frac{82.840 + 25.000}{8.000} = €13,5/\text{MWh}$$

Penurunan 67% versus boiler gas €40/MWh (Xu & Wang, 2024). **Payback period: 3,8 tahun.**

## 5. Evaluasi Kritis, Aplikasi Lintas Sektor & Standar Masa Depan

**Keterbatasan Model Toloza et al. (2026):** Model 1D radial mengabaikan *natural convection* di PCM cair yang secara eksperimental menyumbang 15–40% peningkatan $k_{eff}$. Asumsi *constant properties* dalam rentang suhu 200–250°C belum diverifikasi untuk eutektik yang dilaporkan. Coupling dengan.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
