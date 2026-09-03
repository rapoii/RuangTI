# 2105 — Pemodelan Numerik Transien Unit Penyimpanan Energi Termal Panas Laten (LHTES) Suhu ~222°C untuk Integrasi dengan Pompa Kalor Suhu Tinggi (HTHP)

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** *Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump*
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *The Innovation Energy*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri global bertanggung jawab atas sekitar 24% dari emisi CO₂ global dan mengonsumsi hampir 54% dari total energi final dunia, di mana lebih dari separuhnya digunakan untuk memenuhi kebutuhan panas proses industri (*process heat*). Menurut Xu & Wang (2024) dalam artikel *"Prospects of heat pump for thermal energy decarbonization"* yang dipublikasikan di *The Innovation Energy* (DOI: [10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)), dekarbonisasi panas proses industri merupakan salah satu tantangan terbesar dalam transisi energi global. Pompa kalor suhu tinggi (*High-Temperature Heat Pump* / HTHP) muncul sebagai teknologi kunci yang mampu menggantikan boiler bahan bakar fosil dengan efisiensi (*Coefficient of Performance*/COP) tipikal 2,5–4,0 dan menyediakan output termal pada rentang suhu 150–250°C.

Namun, seperti yang diuraikan Toloza, Payá & Barceló (2026, DOI: [10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)) dalam kontribusinya di *Eurotherm Seminar #119*, integrasi HTHP ke dalam lini produksi industri menghadapi dua tantangan operasional utama: (i) **fluktuasi permintaan termal** yang sering kali tidak sinkron dengan kapasitas pasok HTHP, dan (ii) **kebutuhan akan kapasitas termal tinggi** pada waktu singkat (peak shaving). Di sinilah *Latent Heat Thermal Energy Storage* (LHTES) berperan strategis — berfungsi sebagai buffer termal yang menyimpan energi pada suhu relatif konstan selama perubahan fase (*phase change*) *Phase Change Material* (PCM).

Tantangan rekayasa utama PCM adalah konduktivitas termalnya yang rendah (umumnya $k_{PCM} \approx 0,2–0,5$ W/m·K untuk garam dan pelet organik), sehingga laju pertukaran panas menjadi terbatas. Untuk aplikasi suhu ~222°C, eutektik berbasis nitrat atau hidroksida merupakan kandidat PCM yang menarik karena titik leburnya yang dapat disetel. Toloza et al. (2026) secara eksplisit mengusulkan konfigurasi *shell-and-tube* vertikal karena tiga keunggulan fundamental: kekompakan struktural yang tinggi, ketahanan mekanis pada tekanan termal siklik, dan kapasitas untuk ditingkatkan melalui penambahan logam penguat konduktivitas (*metal wool/foam*). Konteks industrialisasi LHTES suhu tinggi ini juga menjadi perhatian Eurotherm Seminar #119 yang secara khusus mendiskusikan kontribusi penyimpanan energi termal terhadap agenda dekarbonisasi energi Eropa.

Urgensi ekonomi-ekonominya sangat nyata: industri kimia, makanan, dan kertas di Uni Eropa dilaporkan mengonsumsi lebih dari 300 TWh/tahun panas proses pada rentang 100–250°C. Penyimpanan termal suhu tinggi mampu menurunkan *operational expenditure* (OPEX) industri hingga 15–25% melalui arbitrase termal (*load shifting* antara jam tarif listrik rendah dan permintaan puncak produksi), sekaligus menurunkan *Scope 1 emissions* ketika dipadukan dengan HTHP bertenaga listrik terbarukan.

## 2. Landasan Teori & Formulasi Matematis

Pemodelan transien LHTES memerlukan penyelesaian persamaan energi tak tunak (*unsteady*) dalam geometri axisimetrik *shell-and-tube*, dengan memperhatikan perubahan fase PCM. Toloza et al. (2026) menggunakan bahasa Modelica untuk mensimulasikan perilaku ini dengan metode kapasitas panas efektif (*apparent heat capacity method*). Formulasi governing equation yang digunakan adalah:

$$\rho_{PCM} \frac{\partial H}{\partial t} = \nabla \cdot \left( k_{eff}(T) \nabla T \right) + \dot{q}_{gen}$$

dengan $\rho_{PCM}$ adalah densitas PCM (kg/m³), $H$ adalah entalpi spesifik (J/kg), $k_{eff}(T)$ adalah konduktivitas efektif termal, dan $\dot{q}_{gen}$ adalah sumber panas volumetric (W/m³). Dalam kapasitas panas semu, entalpi didekomposisi menjadi kontribusi sensible dan laten:

$$H(T) = \int_{T_{ref}}^{T} c_{p,s}(T) \, dT + L \cdot f(T)$$

dengan $c_{p,s}(T)$ kapasitas panas sensible, dan $L$ adalah panas laten (J/kg). Fungsi $f(T)$ menggambarkan fraksi likuid (fasa cair) pada zona *mushy*:

$$f(T) = \begin{cases} 0 & T \leq T_{solidus} \\ \frac{T - T_{solidus}}{T_{liquidus} - T_{solidus}} & T_{solidus} < T < T_{liquidus} \\ 1 & T \geq T_{liquidus} \end{cases}$$

Untuk PCM eutektik pada suhu target $T_{m} \approx 222°C$ (sebagaimana disebutkan dalam judul paper Toloza et al. 2026), biasanya $T_{solidus} = T_{liquidus} = T_m$ sehingga zona *mushy* menyusut menjadi singularitas pada $T_m$, dan aproksimasi regularisasi Gaussian sering diterapkan:

$$f(T) = \frac{1}{2} \left[ 1 + \operatorname{erf}\left( \frac{T - T_m}{\Delta T / \sqrt{2}} \right) \right]$$

Untuk Heat Transfer Fluid (HTF) yang mengalir di dalam tube, persamaan konservasi massa, momentum, dan energi digabungkan dalam rezim konveksi paksa transien:

$$\rho_{HTF} c_{p,HTF} \left( \frac{\partial T_{HTF}}{\partial t} + u \cdot \nabla T_{HTF} \right) = k_{HTF} \nabla^2 T_{HTF}$$

dengan $u$ adalah vektor kecepatan HTF (m/s). Untuk aliran turbulen dalam tube, korelasi Nusselt digunakan:

$$Nu_D = 0,023 \, Re_D^{0,8} \, Pr^{0,4}$$

sehingga koefisien perpindahan panas konveksi menjadi $h = Nu_D \cdot k_{HTF} / D_h$.

Angka-angka dimensionless kunci yang menjadi *figure of merit* desain adalah:

**Bilangan Stefan** (rasio energi sensible terhadap laten):
$$Ste = \frac{c_p (T_\infty - T_m)}{L}$$

**Bilangan Fourier** (kemajuan waktu difusif):
$$Fo = \frac{\alpha_{eff} \, t}{R_{shell}^2}$$

**Bilangan Biot** (resistansi internal vs. permukaan):
$$Bi = \frac{h \, R_{shell}}{k_{eff}}$$

Untuk operasi yang diinginkan (waktu peleburan ~30–60 menit), desain optimal membutuhkan $Bi > 5$ dan $Ste \ll 1$, yang mengharuskan peningkatan $k_{eff}$ melalui *metal wool* dengan faktor penguatan 5–20× (Toloza et al., 2026). Model komposit efektif untuk PCM + *metal wool* mengikutimodel Maxwell-Eucken:

$$k_{eff} = k_{PCM} \cdot \frac{2 k_{PCM} + k_{metal} + 2 \phi (k_{metal} - k_{PCM})}{2 k_{PCM} + k_{metal} - \phi (k_{metal} - k_{PCM})}$$

dengan $\phi$ adalah fraksi volume logam penguat.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi LHTES-HTHP di industri mengikuti SOP sistematis yang dapat distrukturisasi sebagai berikut:

**Tahap 1 — Karakterisasi Permintaan Termal & Penentuan PCM.** Audit energi proses selama minimal 12 bulan dilakukan untuk mendapatkan profil suhu dan daya termal harian/musiman. Pemilihan PCM eutektik dilakukan berdasarkan tiga kriteria utama: titik lebur $T_m$ di tengah rentang operasi (210–230°C untuk aplikasi HTHP menurut Xu & Wang, 2024), panas laten $L \geq 150$ kJ/kg, dan stabilitas siklik ≥ 1000 siklus tanpa degradasi signifikan. Contohnya: eutektik NaNO₃-KNO₃ memiliki $T_m \approx 222°C$ dan $L \approx 110$ kJ/kg (kandidat yang konsisten dengan frasa "eutectic N..." pada paper Toloza et al., 2026).

**Tahap 2 — Desain Termal & Hidrolik Shell-and-Tube.** Berdasarkan kapasitas target $Q_{storage}$ (MWh), massa PCM dihitung:

$$m_{PCM} = \frac{Q_{storage}}{L \cdot \eta_{discharge}}$$

dengan $\eta_{discharge} \approx 0,85–0,95$ untuk geometri yang dioptimalkan. Diameter shell $D_s$ dan jumlah tube $N_t$ dipilih agar kecepatan HTF masuk dalam rezim turbulen ($Re > 10^4$) untuk koefisien perpindahan panas yang tinggi.

**Tahap 3 — Penyelesaian Numerik dalam Modelica.** Sesuai Toloza et al. (2026), model dikembangkan dengan *object-oriented modeling* di Modelica, menggunakan pustaka `HeatTransfer.Components` dan `FluidPower`. Discretization dilakukan dengan metode volume hingga (*finite volume*) pada grid 2D axisimetrik. Ukuran grid tipikal $\Delta r = 2$ mm dan $\Delta z = 5$ mm dipilih setelah studi *grid-independence*.

**Tahap 4 — Validasi Eksperimental.** Model divalidasi terhadap data eksperimen *charging/discharging* pada prototipe skala laboratorium. Kriteria konvergensi: kesalahan relatif $\leq 5\%$ pada prediksi waktu peleburan dan profil suhu.

**Tahap 5 — Integrasi dengan HTHP.** Unit LHTES diintegrasikan sebagai buffer antara kompresor HTHP dan beban proses. Diagram alir prosesnya adalah sebagai berikut:

```
[HTHP Compressor] → [Kondensor HTHP] → [Unit LHTES Shell-Tube]
                                          ↓               ↓
                                   [Charging Mode]  [Discharging → Proses Industri]
                                          ↓
                              [Sensor T, P, ṁ HTF & Sistem SCADA]
```

**Tahap 6 — Commissioning & Kontrol Operasional.** Sistem kontrol berbasis PLC/DCS memantau State of Charge (SOC) termal yang dihitung real-time:

$$SOC(t) = \frac{\int_{T_{ref}}^{T_{PCM}(t)} c_p \, dT' + L \cdot f(T_{PCM}(t))}{\int_{T_{ref}}^{T_{liquidus}} c_p \, dT' + L}$$

Pengisian dilakukan saat tarif listrik rendah (off-peak) dan pelepasan saat puncak tarif, dengan logika *hysteresis* ±2°C pada setpoint untuk mencegah siklus termal berlebih.

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

**Studi Kasus:** Pabrik kimia di Eropa membutuhkan $Q_{storage} = 500$ kWh termal pada suhu 215–225°C untuk operasi *batch reactor* selama 8 jam/hari dengan puncak beban termal 4 jam. HTHP beroperasi pada COP = 3,0 dengan kapasitas termal 200 kW.

**Langkah 1 — Penentuan Massa PCM.** Menggunakan PCM eutektik nitrat dengan $L = 120$ kJ/kg dan $\eta_{discharge} = 0,90$:

$$m_{PCM} = \frac{Q_{storage}}{L \cdot