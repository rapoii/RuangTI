# 2377 — Pemodelan Numerik Transien Unit Penyimpanan Energi Termal Panas Laten pada Suhu ~222°C untuk Integrasi dengan Pompa Panas Suhu-Tinggi

**Domain:** Teknik Industri & Rekayasa Sistem Industri
**Topik Spesialis:** Transient numerical model of a latent heat thermal energy storage unit at around 222ºC for its integration with a high-temperature-heat-pump
**Jurnal & Sitasi Utama:** Juan Toloza, Jorge Payá, Francisco Barceló (2026). *Eurotherm Seminar #119: Contribution of thermal energy storage towards decarbonization*. DOI: [https://doi.org/10.21001/eurotherm2026.086](https://doi.org/10.21001/eurotherm2026.086)
**Sitasi Pendukung:** Zhenyuan Xu, Ruzhu Wang (2024). *Prospects of heat pump for thermal energy decarbonization*. DOI: [https://doi.org/10.59717/j.xinn-energy.2024.100032](https://doi.org/10.59717/j.xinn-energy.2024.100032)

---

## 1. Pendahuluan dan Konteks Industri

Sektor industri bertanggung jawab atas sekitar 25% dari konsumsi energi akhir global dan menyumbang emisi CO₂ proses yang signifikan, terutama pada industri proses termal seperti kimia dasar, pulp & paper, makanan & minuman, serta tekstil basah. Dekarbonisasi panas proses industri (industrial process heat) memerlukan transisi dari burner berbasis gas alam ke sistem elektrikal-berbasis rendah karbon, di mana pompa panas suhu-tinggi (High-Temperature Heat Pump, HTHP) muncul sebagai teknologi kunci. Toloza, Payá, dan Barceló (2026) menekankan bahwa integrasi HTHP dengan unit *Latent Heat Thermal Energy Storage* (LHTES) memberikan fleksibilitas operasional yang sangat dibutuhkan karena memungkinkan decoupled supply-demand pada proses batch, membantu *peak shaving*, dan meningkatkan *coefficient of performance* (COP) sistem secara keseluruhan.

Mengacu pada Toloza dkk. (2026), LHTES menyimpan energi dalam bentuk *latent heat* material perubahan fase (Phase Change Material, PCM) sehingga densitas energi volumetriknya 5–10 kali lebih tinggi dibanding *sensible heat storage* konvensional berbasis air atau minyak termal. Pada rentang suhu 200–250°C, kandidat PCM yang relevan adalah campuran eutektik garam nitrat (misalnya biner NaNO₃-KNO₃ atau ternary dengan Ca(NO₃)₂) dan garam-garam organik seperti erythritol. Xu dan Wang (2024) menyatakan bahwa aplikasi HTHP pada rentang 150–250°C merupakan *sweet spot* teknologi untuk dekarbonisasi sektor industri makanan, kimia, dan kertas, namun memerlukan unit penyimpanan untuk menangani sifat *intermittent* output termal dan fluktuasi beban.

Tantangan utama yang diidentifikasi oleh Toloza dkk. (2026) adalah konduktivitas termal PCM yang rendah (umumnya $k_{PCM} = 0{,}5 - 1{,}5 \text{ W/m·K}$ untuk garam nitrat) sehingga membatasi laju transfer panas. Untuk mengatasi hal ini, konfigurasi *shell-and-tube* vertikal dipilih karena memberikan kekompakan struktural, kemampuan *thermal enhancement* tinggi melalui *fins* internal, dan robust terhadap siklus termal berulang. Urgensi ekonominya adalah menurunkan *Levelized Cost of Storage* (LCOS) agar LHTES menjadi layak secara komersial pada payback period 5–8 tahun, yang hanya dapat dicapai melalui optimasi desain berbasis model numerik transien yang akurat.

## 2. Landasan Teori & Formulasi Matematis

Pemodelan transien LHTES *shell-and-tube* mengikuti pendekatan *enthalpy method* yang menggabungkan persamaan konduksi panas dan perubahan fasa dalam satu formulasi. Asumsi dasar yang digunakan Toloza dkk. (2026) mencakup: (i) PCM bersifat homogen dan isotropik; (ii) perpindahan panas dalam PCM terjadi secara predominan konduktif di dalam tube dan konveksi alami pada PCM cair; (iii) perpindahan panas di dinding tube mengikuti *steady-state* konduksi radial; dan (iv) koefisien perpindahan panas antar-fasa (solid-liquid) diseragamkan.

### 2.1 Persamaan Energi pada PCM

Untuk setiap elemen volumetrik kontrol PCM, hukum kekekalan energi transien dinyatakan sebagai:

$$\rho_{PCM} \frac{\partial h(T)}{\partial t} = \nabla \cdot \left( k_{eff}(T) \nabla T \right) + \dot{q}_{gen}$$

di mana $\rho_{PCM}$ adalah densitas PCM, $h(T)$ entalpi spesifik sebagai fungsi suhu, $k_{eff}$ konduktivitas termal efektif, dan $\dot{q}_{gen}$ adalah sumber panas volumetric (diabaikan dalam kasus ini). Enthalpy method menghindari diskontinuitas pada $p \Delta H_{fus}$ dengan mendefinisikan:

$$h(T) = \int_{T_{ref}}^{T} c_p(T) \, dT + \rho_{PCM} \cdot f_l(T) \cdot L_f$$

dengan $f_l(T)$ fraksi liquid yang berubah dari 0 ke 1 sepanjang interval $\left[ T_{s}, T_{l} \right]$, dan $L_f$ adalah latent heat of fusion. Toloza dkk. (2026) menggunakan pendekatan smoothed-step untuk menjamin konvergensi numerik:

$$f_l(T) = \frac{1}{2} \left( 1 + \tanh\left( \frac{T - T_{melt}}{\Delta T_{mush}} \right) \right)$$

di mana $T_{melt}$ adalah suhu leleh nominal dan $\Delta T_{mush}$ adalah lebar zona *mushy* yang mengendalikan kemiringan transisi fasa.

### 2.2 Persamaan Konduksi pada Tube Logam

Untuk dinding tube silindris dengan jari-jari dalam $r_i$ dan luar $r_o$, persamaan konduksi radial *steady-state* diselesaikan secara analitis:

$$\dot{Q}_{wall} = \frac{2 \pi L k_{tube} (T_{HTF,o} - T_{PCM,i})}{\ln(r_o / r_i)}$$

di mana $k_{tube}$ konduktivitas tube (umumnya baja karbon $k \approx 45 \text{ W/m·K}$ atau aluminium $k \approx 200 \text{ W/m·K}$), $L$ panjang tube, dan $T_{HTF,o}$, $T_{PCM,i}$ adalah suhu fluida pemanas/pendingin dan suhu antarmuka PCM.

### 2.3 Perpindahan Panas Konveksi pada Heat Transfer Fluid (HTF)

Koefisien perpindahan panas konveksi untuk HTF yang mengalir di dalam tube mengikuti korelasi Dittus-Boelter untuk aliran turbulen:

$$Nu_{HTF} = 0{,}023 \cdot Re_{HTF}^{0{,}8} \cdot Pr_{HTF}^{0{,}4}$$

dengan $Re_{HTF} = \frac{\rho_{HTF} \cdot v_{HTF} \cdot D_i}{\mu_{HTF}}$ dan $Pr_{HTF} = \frac{c_{p,HTF} \cdot \mu_{HTF}}{k_{HTF}}$. Perpindahan panas keseluruhan (overall heat transfer coefficient) kemudian:

$$\frac{1}{U_{overall}} = \frac{1}{h_{HTF}} + \frac{r_i \ln(r_o/r_i)}{k_{tube}} + \frac{r_i}{r_o \cdot h_{PCM,eff}}$$

di mana $h_{PCM,eff}$ adalah koefisien perpindahan panas efektif di sisi PCM yang mencakup kontribusi konduksi dan konveksi alami. Korelasi Churchill-Chu digunakan untuk konveksi alami PCM cair:

$$Nu_{nat} = \left\{ 0{,}60 + \frac{0{,}387 \cdot Ra_L^{1/6}}{\left[1 + (0{,}559/Pr)^{9/16}\right]^{8/27}} \right\}^2$$

dengan Rayleigh number $Ra_L = \frac{g \beta (T_{wall} - T_{PCM}) L_c^3}{\nu \alpha}$.

### 2.4 Kondisi Batas dan Initial Condition

Pada simulasi *charging*, HTF masuk pada suhu konstan $T_{HTF,in}$ dengan laju alir massa $\dot{m}_{HTF}$:

$$\rho_{HTF} c_{p,HTF} v_{HTF} \frac{\partial T_{HTF}}{\partial x} = h_{HTF} \cdot P_i \cdot (T_{HTF} - T_{wall,i})$$

Initial condition mengasumsikan PCM pada suhu kesetimbangan termal awal $T_{init} < T_{melt}$, dan kondisi batas simetri aksial diterapkan pada ujung tube.

## 3. Metodologi Rekayasa & Standar Prosedur Operasional (SOP)

Implementasi rekayasa mengikuti alur kerja sistematis yang dilaporkan Toloza dkk. (2026) menggunakan bahasa Modelica (DrModelica library) karena kemampuan *acausal modeling* dan kompatibilitas dengan standar *Modelica Fluid Library* untuk HTF:

**Tahap 1 — Karakterisasi Termofisika PCM.** Pengukuran DSC (Differential Scanning Calorimetry) pada laju pemanasan 5 K/min untuk menentukan $T_{melt}$, $L_f$, dan kapasitas panas $c_p(T)$. Kalorimetri T-history memberikan $k_{PCM}$ dalam fasa solid dan liquid.

**Tahap 2 — Diskretisasi Geometri & Mesh.** Volume kontrol dibagi menjadi elemen aksial $N_z = 50{-}100$ dan radial $N_r = 10{-}20$. Mesh independence test dilakukan dengan criteria $\Delta T < 1\%$ pada saat *discharge*.

**Tahap 3 — Kalibrasi Model.** Validasi terhadap data eksperimental *small-scale prototype* pada Reynolds number operasional $Re_{HTF} = 5000{-}15000$.

**Tahap 4 — Simulasi Skenario Transien.** Eksekusi *charging* (8 jam), *holding* (16 jam), dan *discharge* (8 jam) untuk satu siklus harian.

**Tahap 5 — Optimasi Desain.** Analisis sensitivitas terhadap diameter tube $D_i$, pitch *shell*, panjang tube $L$, dan konfigurasi *fins* untuk meminimalkan *capital expenditure* per unit energi tersimpan.

Standar yang relevan mencakup ISO 13790 untuk perhitungan energi termal bangunan (extended ke proses industri), ASHRAE Handbook—HVAC Applications (Chapter 51: *Thermal Storage*), dan IEC 62552 untuk prosedur uji peralatan pemanas. Diagram alir proses rekayasa secara lengkap disajikan sebagai berikut:

```
[Start] → Identifikasi Beban Termal & Profil Harian
       → Seleksi PCM (T_melt, L_f, k_PCM, siklus viskositas)
       → Desain Awal Shell-and-Tube (D_i, N_tubes, L)
       → Pemodelan Numerik Modelica
       → Kalibrasi & Validasi Eksperimental
       → Analisis Sensitivitas
       → Optimasi Multi-Objective (Biaya vs. Kinerja)
       → Desain Final & Drawing Fabrication
       → Commissioning & Performance Test
       → [End]
```

## 4. Studi Kasus Kuantitatif Industri & Perhitungan Numerik

Sebuah pabrik makanan di Eropa Tengah membutuhkan pasokan uap proses pada $180{-}220\text{°C}$ selama 8 jam kerja dengan beban termal rata-rata $\dot{Q}_{req} = 350 \text{ kW}$. Unit HTHP beroperasi 24 jam dengan COP musiman 2,8 dan menyuplai air panas pada $T_{HTF,in} = 230\text{°C}$. Unit LHTES menyimpan energi surplus 16 jam untuk menutupi defisit diurnal.

**Parameter desain awal (berdasarkan Toloza dkk., 2026):**

| Parameter | Nilai | Satuan |
|---|---|---|
| PCM | Eutektik 50%NaNO₃–50%KNO₃ | — |
| $T_{melt}$ | 222 | °C |
| $L_f$ | 110 | kJ/kg |
| $k_{PCM,solid}$ | 0,95 | W/m·K |
| $\rho_{PCM}$ | 1980 | kg/m³ |
| $c_{p,PCM}$ | 1,55 | kJ/kg·K |
| $D_i$ (tube) | 25,4 | mm |
| $L$ (tube) | 3,0 | m |
| $N_{tubes}$ | 120 | — |
| HTF | Therminol VP-1 | — |

**Langkah 1 — Kapasitas Penyimpanan Energi**

Energi sensible dari $T_{melt} - 10°C$ ke $T_{melt}$:
$$E_{sens} = \rho_{PCM} \cdot c_p \cdot \Delta T \cdot V_{PCM} = 1980 \cdot 1550 \cdot 10 \cdot V_{PCM}$$

Energi latent penuh:
$$E_{lat} = \rho_{PCM} \cdot L_f \cdot V_{PCM} = 1980 \cdot 110000 \cdot V_{PCM} = 217{,}8 \text{ MJ/m}^3 \text{ per } m^3$$

Untuk total energi tersimpan $E_{total} = \dot{Q}_{req} \cdot t_{discharge} = 350 \text{ kW} \cdot 28800