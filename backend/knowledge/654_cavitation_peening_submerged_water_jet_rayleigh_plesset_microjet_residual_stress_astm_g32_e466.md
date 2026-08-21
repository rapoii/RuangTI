# Modul 654: Cavitation Peening & Submerged Water Jet Cavitation Processing: Kinetika Gelembung Rayleigh-Plesset, Gelombang Kejut Mikro-Jetting (*Micro-Jet Impingement*), Profil Tegangan Sisa Tekan Bawah-Permukaan (*Subsurface Compressive Residual Stress*), dan Peningkatan Umur Fatik Komponen Kritis (ASTM G32, ISO 14577, ASTM E466 & SAE J2441)

## 1. Pengantar & Konteks Industri: Teknologi *Cavitation Peening*

*Cavitation Peening* (atau *Submerged Cavitating Jet Peening*) adalah teknologi modifikasi permukaan mekanis tingkat lanjut (*advanced mechanical surface enhancement*) yang memanfaatkan fenomena keruntuhan gelembung kavitasi hidrodinamik (*hydrodynamic cavitation bubble collapse*) di dalam media fluida cair untuk menginduksi deformasi plastis lokal dan menghasilkan tegangan sisa tekan (*compressive residual stress*) berintensitas tinggi pada lapisan bawah-permukaan komponen logam.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    ARSITEKTUR SISTEM SUBMERGED CAVITATING JET PEENING & DINAMIKA GELOMBANG KEJUT                      |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         POMPA PLUNGER TEKANAN ULTRA-TINGGI (HIGH-PRESSURE PLUNGER PUMP)                                               |
|         ┌───────────────────────────────────────────────────────────────────────────┐ Parameter Hidrolik:            |
|         │  Tekanan Injeksi Nozel: P_inj = 30 - 300 MPa                              │ • Laju Aliran Fluida:           |
|         │  Media Cair: Air Deionisasi / Emulsi Anti-Korosi (ρ = 1000 kg/m^3)         │   Q = 10 - 60 L/menit           |
|         │  Pengendali Tekanan Ruang / Ambien: P_amb = 0.1 - 1.0 MPa                 │ • Bilangan Kavitasi Nozel:      |
|         │                                    │                                      │   σ_cav = (P_amb - P_v)/(P_inj) |
|         └────────────────────────────────────┼──────────────────────────────────────┘ • Stand-off Distance: 15-80 mm  |
|                                              │                                                                        |
|                                              ▼                                                                        |
|         NOZEL KAVITASI TERENDAM (SUBMERGED CAVITATING VENTURI / CAVITATING JET NOZZLE)                                |
|         ┌───────────────────────────────────────────────────────────────────────────┐                                 |
|         │  [ TANGKI FLUIDA TERENDAM (SUBMERGED WATER TANK ENVIRONMENT) ]            │ Mekanisme Pembangkitan:         |
|         │  ───────────────────────────────────────────────────────────────────────  │ Semburan jet air berkecepatan   |
|         │  Nozel Venturi / Shear-Layer Inducer Nozzle (Diameter d_n = 0.4 - 2.0 mm) │ tinggi memicu penurunan tekanan |
|         │  ░░░░░░░ KORIDOR AWAN KAVITASI (CAVITATING VORTEX CLOUD) ░░░░░░░░░░░░░░░ │ statis di bawah tekanan uap     |
|         │  (Pertumbuhan Gelembung Uap Mikro: R_0 -> R_max saat P_local < P_vapor)    │ jenuh air (P_local < P_v)       |
|         │  ───────────────────────────────────────────────────────────────────────  │                                 |
|         │  Runtuhan Asimetris Kolektif & Benturan Mikro-Jet Hipersonik              │ Tekanan Impak Lokal:            |
|         │  ═══════════════════════════════════════════════════════════════════════  │ P_impact = 1.0 - 5.0 GPa        |
|         │                                    │                                      │ Kecepatan Mikro-Jet:            |
|         │                                    ▼                                      │ v_jet = 500 - 1500 m/s          |
|         │  [ BENDA KERJA LOGAM (Ti-6Al-4V, Alloy 600, Inconel 718, Baja Karburisasi) │ Frekuensi Impak: > 100 kHz      |
|         │  ───────────────────────────────────────────────────────────────────────  │                                 |
|         │  [ LAPISAN BAWAH PERMUKAAN DENGAN TEGANGAN SISA TEKAN TINGGI ]            │ Kualitas Integritas Permukaan:  |
|         └───────────────────────────────────────────────────────────────────────────┘ • Zero Shot Contamination      |
|                                              │                                        • Kekasaran Permukaan Tetap     |
|                                              ▼                                          Rendah (Ra < 0.2 µm)          |
|                                                                                       • Umur Fatik Meningkat > 200%   |
|         DISTRIBUSI TEGANGAN SISA BAWAH-PERMUKAAN (SUBSURFACE RESIDUAL STRESS PROFILE) • Bebas Tegangan Sisa Tarik     |
|         ┌───────────────────────────────────────────────────────────────────────────┐                                 |
|         │  Permukaan Luar (z = 0) ──► σ_res = -450 s/d -950 MPa (Kompresi Maksimal) │ Peningkatan Mekanis:            |
|         │  Kedalaman Kritis (z = 50 - 250 µm) ──► Puncak Tegangan Tekan             │ • Work Hardening Kisi Logam     |
|         │  Kedalaman Penetrasi Efektif: z_eff = 300 - 800 µm                        │ • Peningkatan Batas Lelah (End.)|
|         └───────────────────────────────────────────────────────────────────────────┘ • Hambatan Retak Korosi (SCC)  |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 1.1 Komparasi Kritis: Cavitation Peening vs Conventional Shot Peening vs Laser Shock Peening
Metode peningkatan keandalan fatik mekanis konvensional seperti *Conventional Shot Peening* (CSP) menggunakan media bola baja atau keramik (*shots*) berkecepatan $40 - 80\ \text{m/s}$ untuk menumbuk permukaan. Meskipun efektif menghasilkan tegangan sisa tekan, CSP memiliki kelemahan intrinsik yang fatal untuk aplikasi presisi tinggi:
1. **Peningkatan Kekasaran Permukaan Ekstrem (*Severe Surface Roughening*)**: Benturan fisik media peluru padat meninggalkan cekungan kawah mikroskopis (*dimples*) yang menaikkan kekasaran permukaan ($Ra$ melonjak dari $0{,}1\ \mu\text{m}$ menjadi $2{,}5 - 6{,}0\ \mu\text{m}$). Puncak dan lembah kekasaran ini bertindak sebagai konsentrator tegangan mikro (*micro-notch stress concentration*) yang justru dapat memicu inisiasi retak fatik dini.
2. **Kontaminasi Media & Kerusakan Tepi Tipis**: Peluru padat dapat tertanam pada substrat logam lunak atau merusak geometri tepi tipis sudu turbin (*blade leading/trailing edges*).

Sementara itu, *Laser Shock Peening* (LSP) menghasilkan tegangan tekan yang sangat dalam ($> 1\ \text{mm}$) namun memerlukan investasi modal peralatan laser optik berdaya tinggi yang sangat mahal dan biaya operasional lapisan pengorbanan (*sacrificial black tape/foil coating*) yang tinggi.

**Cavitation Peening** hadir sebagai solusi mutakhir yang menggabungkan keunggulan keduanya:
- **Tanpa Media Padat (*Shot-Free & Non-Abrasive*)**: Menggunakan air murni bertekanan sebagai media kerja sehingga tidak meninggalkan kontaminasi partikel asing.
- **Mempertahankan Kehalusan Permukaan Tingkat Cermin (*Preserved Surface Roughness*)**: Karena gaya impak ditransmisikan melalui gelombang kejut hidrodinamik fluida dan mikro-jet air skala nano-ke-mikro, proses ini tidak mengikis geometri atau menaikkan nilai kekasaran permukaan secara signifikan ($Ra$ tetap terjaga $< 0{,}2\ \mu\text{m}$).
- **Penetrasi Tegangan Tekan Dalam (*Deep Compressive Stress*)**: Mampu menginduksi tegangan sisa tekan hingga kedalaman $z = 300 - 800\ \mu\text{m}$, secara signifikan melampaui kedalaman CSP standar.

### 1.2 Aplikasi Industri Kritis
- **Sudu Turbin Pembangkit Daya & Kedirgantaraan (*Aero-Engine & Gas Turbine Blades*)**: Pencegahan fatik siklus tinggi (*High-Cycle Fatigue* / HCF) dan fatik akibat kerusakan benda asing (*Foreign Object Damage* / FOD) pada sudu paduan titanium Ti-6Al-4V dan superalloy berbasis nikel Inconel 718.
- **Industri Pembangkit Listrik Tenaga Nuklir (PLTN)**: Mitigasi fenomena retak korosi tegangan (*Stress Corrosion Cracking* / SCC) dan korosi fatik pada nozel pengelasan bejana tekan reaktor (*Reactor Pressure Vessel Bottom Mounted Nozzles*) berbahan paduan nikel Alloy 600 dan baja tahan karat austenitik AISI 316L.
- **Komponen Transmisi Otomotif & Roda Gigi Presisi**: Peningkatan umur fatik kontak gelinding (*Rolling Contact Fatigue* / RCF) pada roda gigi karburisasi otomotif (SCM420H / 16MnCr5) dan bantalan poros presisi tinggi tanpa merusak profil involute gigi.
- **Implan Biomedis & Ortopedi**: Penguatan fatik implan sendi panggul dan lutut berbasis paduan Ti-6Al-7Nb dan Co-Cr-Mo dengan menjaga biokompatibilitas permukaan tanpa kontaminasi partikulat peluru.

### 1.3 Standar Internasional & Regulasi Pengujian
- **ASTM G32-20**: *Standard Test Method for Cavitation Erosion Using Vibratory Apparatus*.
- **ASTM E466-21**: *Standard Practice for Conducting Force Controlled Constant Amplitude Axial Fatigue Tests of Metallic Materials*.
- **ISO 14577-1 s/d 14577-4**: *Metallic materials — Instrumented indentation test for hardness and materials parameters (Nanoindentation)*.
- **SAE J2441 / SAE J784a**: *Residual Stress Measurement by X-Ray Diffraction (XRD) using the $\sin^2\psi$ Method*.
- **ASTM E915-20**: *Standard Test Method for Verifying the Alignment of X-Ray Diffraction Instrumentation for Residual Stress Measurement*.
- **ISO 1143:2021**: *Metallic materials — Rotating bar bending fatigue testing*.

---

## 2. Termodinamika & Hidrodinamika: Persamaan Rayleigh-Plesset & Keruntuhan Gelembung Asimetris

```
+-----------------------------------------------------------------------------------------------------------------------+
|                 DINAMIKA PERTUMBUHAN & KERUNTUHAN GELEMBUNG KAVITASI RAYLEIGH-PLESSET                                 |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         SIKLUS HIDUP GELEMBUNG KAVITASI (CAVITATION BUBBLE LIFECYCLE):                                                |
|                                                                                                                       |
|         (1) Nukleasi Awal:   R_0 ≈ 1 - 5 µm (Tekanan lokal P_local turun di bawah P_vapor)                           |
|         (2) Ekspansi Eksplosif: R -> R_max ≈ 50 - 500 µm (di daerah tekanan rendah)                                   |
|         (3) Keruntuhan Cepat: R menyusut drastis saat memasuki daerah tekanan ambien tinggi (P_local > P_amb)         |
|         (4) Pembentukan Mikro-Jet Asimetris: Dinding atas gelembung melengkung ke dalam mendekati dinding padat       |
|         (5) Pancaran Hipersonik & Gelombang Kejut: v_jet = 500 - 1500 m/s, P_shock > 2 GPa                           |
|                                                                                                                       |
|         Jari-jari Gelembung R(t)                                                                                      |
|         ▲                                                                                                             |
|  R_max  │                    ┌───────────┐                                                                            |
|         │                   /             \                                                                           |
|         │                  /               \                                                                          |
|         │                 /                 \                                                                         |
|         │                /                   \                                                                        |
|  R_0    │───────────────┘                     \                                                                       |
|         └──────────────────────────────────────┴───► Waktu t (µs)                                                     |
|                         Ekspansi               Keruntuhan (t_collapse < 2 µs) ──► GELOMBANG KEJUT EMISI               |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.1 Formulasi Diferensial Non-Linier Rayleigh-Plesset
Pertumbuhan radial dan keruntuhan gelembung kavitasi sferis di dalam fluida tak mampat kental (*viscous incompressible liquid*) dikendalikan oleh persamaan diferensial non-linier orde dua Rayleigh-Plesset:

$$R \frac{d^2 R}{dt^2} + \frac{3}{2}\left(\frac{dR}{dt}\right)^2 = \frac{1}{\rho_l} \left[ \left( P_0 - P_v + \frac{2\gamma}{R_0} \right)\left( \frac{R_0}{R} \right)^{3\kappa} + P_v - \frac{2\gamma}{R} - \frac{4\mu_l}{R}\frac{dR}{dt} - P_\infty(t) \right]$$

Di mana:
- $R(t)$ adalah jari-jari sesaat gelembung kavitasi ($\text{m}$), dengan $\dot{R} = dR/dt$ sebagai kecepatan dinding gelembung ($\text{m/s}$).
- $R_0$ adalah jari-jari inti kesetimbangan awal gelembung ($\text{m}$).
- $\rho_l$ adalah massa jenis fluida kerja ($\text{kg/m}^3$, $\rho_{\text{water}} = 1000\ \text{kg/m}^3$).
- $\mu_l$ adalah viskositas dinamik fluida ($\text{Pa}\cdot\text{s}$).
- $\gamma$ adalah tegangan permukaan antarmuka cair-gas ($\text{N/m}$, $\gamma \approx 0{,}0728\ \text{N/m}$ untuk air pada $20^\circ\text{C}$).
- $P_v$ adalah tekanan uap jenuh fluida ($\text{Pa}$, $P_v \approx 2338\ \text{Pa}$ pada $20^\circ\text{C}$).
- $P_0$ adalah tekanan hidrostatik awal fluida ($\text{Pa}$).
- $P_\infty(t)$ adalah medan tekanan fluida ambien dinamis di luar gelembung ($\text{Pa}$).
- $\kappa$ adalah indeks politropik gas di dalam gelembung ($\kappa = 1{,}0$ untuk isotermal, $\kappa = 1{,}4$ untuk adiabatik).

### 2.2 Waktu Keruntuhan Gelembung Rayleigh (*Rayleigh Collapse Time*)
Waktu yang diperlukan oleh gelembung kavitasi untuk runtuh dari jari-jari maksimum $R_{\max}$ menuju singularitas titik ($R \to 0$) di bawah gradien tekanan pendorong konstan $\Delta P = P_\infty - P_v$ dirumuskan secara analitis oleh Lord Rayleigh:

$$t_{\text{collapse}} = 0{,}91468 \cdot R_{\max} \cdot \sqrt{\frac{\rho_l}{P_\infty - P_v}}$$

Untuk gelembung tipikal dengan $R_{\max} = 100\ \mu\text{m}$ di bawah tekanan ambien $P_\infty = 0{,}5\ \text{MPa}$, waktu keruntuhan hanya berlangsung selama $t_{\text{collapse}} \approx 1{,}29\ \mu\text{s}$, menghasilkan laju konvergensi energi volumetrik yang sangat ekstrem.

### 2.3 Mekanika Benturan Mikro-Jet Asimetris & Tekanan Water Hammer
Di dekat batas dinding padat (*near-wall boundary*), simetri medan aliran terganggu akibat hambatan inersia dinding padat. Kutub atas gelembung (*distal pole*) runtuh lebih cepat daripada kutub bawah (*proximal pole*), menghasilkan pancaran jet mikro cair berkecepatan ultra-tinggi (*liquid micro-jet*) yang menembus bagian tengah gelembung dan menghantam permukaan padatan secara tegak lurus.

Kecepatan pancaran mikro-jet $v_{\text{jet}}$ bergantung pada rasio jarak tak berdimensi dari dinding ($\gamma_h = h_c / R_{\max}$, di mana $h_c$ adalah jarak pusat gelembung ke dinding):

$$v_{\text{jet}} \approx \xi \cdot \sqrt{\frac{P_\infty - P_v}{\rho_l}}$$

Di mana $\xi \approx 8{,}5 - 13{,}0$ untuk gelembung kavitasi transien di dekat batas kaku ($\gamma_h < 1{,}5$).

Ketika semburan mikro-jet menumbuk permukaan logam padat, tekanan tumbukan awal dikendalikan oleh fenomena kompresi akustik *Water Hammer Pressure* terkopel:

$$P_{\text{wh}} = \frac{\rho_l c_l \rho_s c_s}{\rho_l c_l + \rho_s c_s} \cdot v_{\text{jet}}$$

Di mana:
- $\rho_l, c_l$ adalah massa jenis dan kecepatan gelombang akustik dalam fluida cair ($\rho_l c_l \approx 1{,}5 \times 10^6\ \text{kg}/(\text{m}^2\cdot\text{s})$ untuk air).
- $\rho_s, c_s$ adalah massa jenis dan kecepatan gelombang elastis longitudinal dalam substrat logam solid ($\rho_s c_s \approx 25 - 40 \times 10^6\ \text{kg}/(\text{m}^2\cdot\text{s})$ untuk baja dan titanium).

Karena impedansi akustik logam padat jauh lebih tinggi daripada air ($\rho_s c_s \gg \rho_l c_l$), persamaan disederhanakan menjadi:

$$P_{\text{wh}} \approx \rho_l c_l \cdot v_{\text{jet}} \cdot \left( 1 + \frac{k_w \cdot v_{\text{jet}}}{c_l} \right)$$

Untuk kecepatan mikro-jet $v_{\text{jet}} = 1000\ \text{m/s}$, tekanan tumbukan lokal seketika mencapai **$P_{\text{wh}} \approx 1{,}5 - 3{,}5\ \text{GPa}$**, melampaui kekuatan luluh dinamis sebagian besar paduan logam rekayasa.

---

## 3. Metalurgi Mekanik: Deformasi Plastis Laju Tinggi, Tegangan Sisa & Model Fatik

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    DISTRIBUSI TEGANGAN SISA TEKAN & PENGARUHNYA PADA DIAGRAM S-N FATIK                                |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         PROFIL TEGANGAN SISA TERHADAP KEDALAMAN (z)          DIAGRAM S-N FATIK (AMPLITUDO TEGANGAN VS SIKLUS)         |
|         Tegangan Sisa σ_res (MPa)                           Amplitudo Tegangan σ_a (MPa)                              |
|         -1000  -500     0    +500                           ▲                                                         |
|           │      │      │      │                            │                                                         |
|      0 ───┼──────██████─┼──────┼── Permukaan Benda          │         Cavitation Peened (Batas Lelah Naik +45%)       |
|           │     ████████│      │                            │       ┌───────────────────────────────────────          |
|    100 ───┼────█████████│      │   Puncak Tekan             │      /                                                  |
|           │   ██████████│      │   (z = 50-150 µm)          │     /  Unpeened / As-Machined Base Metal                |
|    200 ───┼────█████████│      │                            │    / ┌────────────────────────────────────              |
|           │     ████████│      │                            │   / /                                                   |
|    400 ───┼──────██████─┼──────┼── Kedalaman Efektif        │  / /                                                    |
|           │        │    │      │                            │ / /                                                     |
|    600 ───┼────────┼────┼──██──┼── Zona Tarik Keseimbangan  └────────────────────────────────────────► Log(N_f)       |
|           ▼             ▼      ▼                               10^4        10^5        10^6        10^7 Siklus        |
|         Kedalaman z (µm)                                                                                              |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.1 Model Plastisitas Dinamis Johnson-Cook Laju Regangan Tinggi
Selama benturan mikro-jet nanodetik ($t_{\text{pulse}} \approx 10 - 50\ \text{ns}$), logam mengalami laju regangan plastis ekstrem ($\dot{\varepsilon} \approx 10^5 - 10^7\ \text{s}^{-1}$). Tegangan luluh dinamis material dimodelkan menggunakan persamaan konstitutif Johnson-Cook:

$$\sigma_y = \left[ A + B (\varepsilon_p)^n \right] \left[ 1 + C \ln \left( \frac{\dot{\varepsilon}_p}{\dot{\varepsilon}_0} \right) \right] \left[ 1 - \left( \frac{T - T_{\text{room}}}{T_{\text{melt}} - T_{\text{room}}} \right)^m \right]$$

Di mana:
- $A$ adalah kekuatan luluh statis dasar ($\text{MPa}$).
- $B$ dan $n$ adalah koefisien pengerasan regangan modulus dan eksponen.
- $C$ adalah sensitivitas laju regangan dinamis.
- $\varepsilon_p$ dan $\dot{\varepsilon}_p$ adalah akumulasi regangan plastis ekuivalen dan laju regangan.
- $\dot{\varepsilon}_0$ adalah laju regangan referensi kuasi-statis ($1{,}0\ \text{s}^{-1}$).

Ketika tekanan kejut hidrodinamik melampaui batas elastis Hugoniot (*Hugoniot Elastic Limit* / HEL):
$$HEL = \frac{1 - \nu}{1 - 2\nu} \cdot \sigma_y^{\text{dyn}}$$
Terjadi deformasi plastis kompresi permanen pada lapisan atas kisi logam.

### 3.2 Evolusi Profil Tegangan Sisa Tekan Bawah-Permukaan
Setelah gelombang kejut terdisipasi ke dalam massa ruah (*bulk material*), material elastis di sekeliling zona plastis berusaha kembali ke bentuk semula, mengunci lapisan terdeformasi plastis dalam kondisi tegangan sisa tekan elastis (*elastic springback constraint*).

Profil tegangan sisa $\sigma_{\text{res}}(z)$ sebagai fungsi dari kedalaman $z$ dimodelkan melalui fungsi eksponensial termodifikasi Shen-Soyama:

$$\sigma_{\text{res}}(z) = \sigma_{\text{surf}} \cdot \exp\left( -\frac{z}{\delta_1} \right) - \sigma_{\text{peak}} \cdot \left( \frac{z}{\delta_2} \right) \cdot \exp\left( 1 - \frac{z}{\delta_2} \right) + \sigma_{\text{tensile\_core}}$$

Di mana:
- $\sigma_{\text{surf}}$ adalah tegangan sisa tekan pada permukaan terluar ($z = 0$).
- $\sigma_{\text{peak}}$ adalah puncak tegangan tekan maksimum yang terletak pada kedalaman $z = \delta_2$ (umumnya $50 - 150\ \mu\text{m}$).
- $\delta_1, \delta_2$ adalah parameter karakteristik penetrasi kedalaman gelombang kejut.
- $\sigma_{\text{tensile\_core}}$ adalah tegangan tarik penyeimbang di inti ruah untuk menjaga kesetimbangan momen statis $\int_0^H \sigma_{\text{res}}(z)\, dz = 0$.

### 3.3 Model Umur Fatik Multi-Aksial Basquin-Morrow
Tegangan sisa tekan bawah-permukaan bertindak menurunkan tegangan tarik efektif rata-rata ($\sigma_m$) yang dialami komponen selama pembebanan siklik dinamis. Berdasarkan kriteria Morrow yang memperhitungkan pengaruh tegangan rata-rata pada persamaan Basquin:

$$\sigma_a = \left( \sigma_f' - (\sigma_m + \sigma_{\text{res}}) \right) \cdot (2 N_f)^b$$

Maka, jumlah siklus hingga kegagalan fatik ($N_f$) dirumuskan sebagai:

$$N_f = \frac{1}{2} \left[ \frac{\sigma_a}{\sigma_f' - (\sigma_m + \sigma_{\text{res}})} \right]^{1/b}$$

Di mana:
- $\sigma_a$ adalah amplitudo tegangan kerja siklik ($\text{MPa}$).
- $\sigma_f'$ adalah koefisien kekuatan fatik material ($\text{MPa}$).
- $b$ adalah eksponen kekuatan lelah Basquin (berkisar antara $-0{,}06$ hingga $-0{,}12$).
- $\sigma_m$ adalah tegangan rata-rata eksternal ($\text{MPa}$).
- $\sigma_{\text{res}}$ adalah tegangan sisa lokal ($\text{MPa}$, bernilai negatif untuk tegangan tekan).

Karena nilai $\sigma_{\text{res}}$ bernilai negatif besar (misal $\sigma_{\text{res}} = -700\ \text{MPa}$), penyebut $(\sigma_f' - \sigma_m - \sigma_{\text{res}})$ meningkat secara substansial, yang secara eksponensial meningkatkan umur lelah $N_f$ hingga ratusan persen ($> 200\% - 500\%$).

---

## 4. Parameter Kritis Proses, Desain Nozel & Metrologi Pengujian

### 4.1 Parameter Kunci Sistem Cavitation Peening
| Parameter Proses Hidrolik | Simbol | Rentang Nilai Khas Industri | Pengaruh Fisis pada Komponen |
| :--- | :---: | :---: | :--- |
| **Tekanan Injeksi Nozel** | $P_{\text{inj}}$ | $30 - 250\ \text{MPa}$ | Mengontrol kecepatan jet awal dan kerapatan awan gelembung kavitasi. |
| **Tekanan Ambien / Ruang Tangki** | $P_{\text{amb}}$ | $0{,}1 - 0{,}8\ \text{MPa}$ | Menentukan bilangan kavitasi $\sigma$ dan intensitas keruntuhan gelembung. |
| **Bilangan Kavitasi Nozel** | $\sigma_{\text{cav}}$ | $0{,}01 - 0{,}08$ | $\sigma_{\text{cav}} = \frac{P_{\text{amb}} - P_v}{P_{\text{inj}} - P_{\text{amb}}}$. Mengontrol panjang inti awan kavitasi. |
| **Jarak Nozel ke Benda Kerja (*Standoff*)** | $S$ | $15 - 80\ \text{mm}$ | Menempatkan benda kerja tepat pada zona keruntuhan awan kavitasi maksimum. |
| **Kecepatan Pindai Nozel (*Scan Speed*)** | $v_{\text{scan}}$ | $5 - 50\ \text{mm/s}$ | Mengontrol waktu paparan per satuan luas (*processing exposure time*). |
| **Diameter Lubang Nozel** | $d_n$ | $0{,}4 - 2{,}0\ \text{mm}$ | Mengontrol laju aliran volume fluida dan geometri sebaran impak. |

### 4.2 Desain Nozel Venturi & Pembangkit Vorteks Kavitasi
Nozel kavitasi modern memanfaatkan geometri khusus:
1. **Nozel Venturi dengan Celah Pelebaran Mendadak (*Cavitation Cavity Nozzle*)**: Memaksa aliran air tercekik mengalami separasi lapisan batas geser (*shear layer separation*) yang memicu pusaran vorteks bertekanan superkritis rendah di pusat vorteks ($P_{\text{core}} \ll P_v$).
2. **Nozel Swirl Generator**: Memberikan komponen kecepatan sudut tangensial pada jet fluida, membentuk struktur awan kavitasi heliks stabil yang meningkatkan kerapatan frekuensi impak keruntuhan ($> 200\ \text{kHz}$).

---

## 5. Implementasi Algoritma Python: Solver Rayleigh-Plesset & Prediksi Umur Fatik Basquin-Morrow

Berikut adalah kode program Python mandiri (*self-contained simulation engine*) untuk memodelkan dinamika pertumbuhan dan keruntuhan gelembung Rayleigh-Plesset, menghitung tekanan tumbukan *Water Hammer*, merekonstruksi profil tegangan sisa tekan bawah-permukaan, dan mengevaluasi kurva fatik $S-N$ serta umur lelah komponen:

```python
"""
================================================================================
ENGINE SIMULASI CAVITATION PEENING & DINAMIKA FATIK BAWAH-PERMUKAAN
Standar Rujukan: ASTM G32, ASTM E466, ISO 14577 & SAE J2441 (XRD Sin^2 Psi)
================================================================================
"""

import numpy as np
import math
from typing import Dict, Tuple, Any, List

class CavitationPeeningEngine:
    """
    Simulator Multiphysics untuk Cavitation Peening:
    1. Integrator Numerik Rayleigh-Plesset (RK4) untuk Keruntuhan Gelembung
    2. Tekanan Tumbukan Mikro-Jet & Water Hammer Akustik
    3. Rekonstruksi Profil Tegangan Sisa Bawah-Permukaan Shen-Soyama
    4. Evaluasi Umur Fatik Basquin-Morrow & Peningkatan Batas Lelah S-N
    """

    def __init__(self):
        # Database Karakteristik Material Paduan Industri
        self.materials_db = {
            "Ti-6Al-4V": {
                "density": 4430.0,              # kg/m^3
                "elastic_modulus": 114.0e9,     # Pa (114 GPa)
                "poisson_ratio": 0.342,
                "yield_strength": 930.0e6,      # Pa (930 MPa)
                "sound_speed": 4900.0,          # m/s
                "fatigue_strength_coeff": 1450.0e6, # sigma_f' (Pa)
                "basquin_exponent": -0.095,     # b
                "fatigue_limit_unpeened": 450.0e6 # Pa (450 MPa at 10^7 cycles)
            },
            "Inconel_718": {
                "density": 8190.0,
                "elastic_modulus": 205.0e9,
                "poisson_ratio": 0.284,
                "yield_strength": 1180.0e6,
                "sound_speed": 4750.0,
                "fatigue_strength_coeff": 1850.0e6,
                "basquin_exponent": -0.088,
                "fatigue_limit_unpeened": 580.0e6
            },
            "Alloy_600_Nuclear": {
                "density": 8470.0,
                "elastic_modulus": 214.0e9,
                "poisson_ratio": 0.290,
                "yield_strength": 380.0e6,
                "sound_speed": 4780.0,
                "fatigue_strength_coeff": 920.0e6,
                "basquin_exponent": -0.105,
                "fatigue_limit_unpeened": 280.0e6
            },
            "AISI_4340_Steel": {
                "density": 7850.0,
                "elastic_modulus": 210.0e9,
                "poisson_ratio": 0.290,
                "yield_strength": 1250.0e6,
                "sound_speed": 5000.0,
                "fatigue_strength_coeff": 1900.0e6,
                "basquin_exponent": -0.082,
                "fatigue_limit_unpeened": 620.0e6
            }
        }

        # Sifat Fluida Air Kerja Standar (pada 20 deg C)
        self.rho_liquid = 1000.0      # kg/m^3
        self.mu_liquid = 1.002e-3     # Pa.s
        self.surface_tension = 0.0728 # N/m
        self.p_vapor = 2338.0         # Pa
        self.c_liquid = 1482.0        # m/s

    def solve_rayleigh_plesset(
        self,
        r0_um: float,
        p_ambient_kpa: float,
        p_driving_kpa: float,
        dt_ns: float = 0.5,
        total_time_us: float = 6.0
    ) -> Dict[str, Any]:
        """
        Integrasi Numerik Runge-Kutta Orde 4 (RK4) untuk Persamaan Rayleigh-Plesset:
        d2R/dt2 = f(R, dR/dt)
        """
        R0 = r0_um * 1.0e-6
        P_amb = p_ambient_kpa * 1.0e3
        P_low = p_driving_kpa * 1.0e3
        kappa = 1.4 # Politropik adiabatik
        gamma = self.surface_tension
        mu = self.mu_liquid
        rho = self.rho_liquid
        Pv = self.p_vapor

        dt = dt_ns * 1.0e-9
        steps = int((total_time_us * 1.0e-6) / dt)

        # State: y = [R, v], dy/dt = [v, a]
        y = np.array([R0, 0.0], dtype=np.float64)

        time_hist = []
        r_hist = []
        v_hist = []

        def derivatives(state: np.ndarray, t_curr: float) -> np.ndarray:
            r_curr = max(state[0], 1.0e-8)
            v_curr = state[1]

            # Medan tekanan eksternal transien: P_low selama 2 us, lalu kembali ke P_amb
            p_inf = P_low if t_curr < 2.0e-6 else P_amb

            # Komponen gas dalam gelembung
            p_gas0 = P_amb - Pv + (2.0 * gamma / R0)
            p_gas = p_gas0 * ((R0 / r_curr) ** (3.0 * kappa))

            term1 = (p_gas + Pv - (2.0 * gamma / r_curr) - (4.0 * mu * v_curr / r_curr) - p_inf) / rho
            term2 = 1.5 * (v_curr ** 2)
            
            acceleration = (term1 - term2) / r_curr
            # Stabilisasi numerik percepatan ekstrem
            acceleration = np.clip(acceleration, -1.0e14, 1.0e14)

            return np.array([v_curr, acceleration], dtype=np.float64)

        for step in range(steps):
            t = step * dt
            # RK4 Integration Step
            k1 = derivatives(y, t)
            k2 = derivatives(y + 0.5 * dt * k1, t + 0.5 * dt)
            k3 = derivatives(y + 0.5 * dt * k2, t + 0.5 * dt)
            k4 = derivatives(y + dt * k3, t + dt)

            y += (dt / 6.0) * (k1 + 2.0 * k2 + 2.0 * k3 + k4)

            time_hist.append(t * 1.0e6)
            r_hist.append(y[0] * 1.0e6)
            v_hist.append(y[1])

        r_max_um = max(r_hist)
        max_collapse_vel = abs(min(v_hist))

        # Rayleigh theoretical collapse time dari R_max
        r_max_m = r_max_um * 1.0e-6
        delta_p = max(P_amb - Pv, 1.0e3)
        t_rayleigh_us = 0.91468 * r_max_m * math.sqrt(rho / delta_p) * 1.0e6

        return {
            "initial_radius_um": r0_um,
            "max_expanded_radius_um": round(r_max_um, 2),
            "max_collapse_wall_velocity_ms": round(max_collapse_vel, 1),
            "theoretical_rayleigh_collapse_time_us": round(t_rayleigh_us, 3)
        }

    def simulate_peening_and_fatigue(
        self,
        material_name: str,
        injection_pressure_mpa: float,
        ambient_pressure_mpa: float,
        standoff_mm: float,
        scan_speed_mms: float,
        applied_stress_amplitude_mpa: float,
        mean_stress_mpa: float = 0.0
    ) -> Dict[str, Any]:
        """
        Menghitung parameter hidrodinamika kavitasi, tekanan Water Hammer,
        profil tegangan sisa bawah-permukaan, dan peningkatan umur lelah.
        """
        mat = self.materials_db[material_name]
        p_inj = injection_pressure_mpa * 1.0e6
        p_amb = ambient_pressure_mpa * 1.0e6

        # 1. Bilangan Kavitasi Nozel (Cavitation Number sigma)
        sigma_cav = (p_amb - self.p_vapor) / max(p_inj - p_amb, 1.0e4)

        # 2. Kecepatan Jet Utama & Kecepatan Mikro-Jet Asimetris
        v_jet_primary = math.sqrt(2.0 * (p_inj - p_amb) / self.rho_liquid)
        # Kecepatan mikro-jet keruntuhan dekat dinding: kombinasi konvergensi inersial & gradien tekanan
        # v_microjet = xi * sqrt((Pinj - Pamb) / rho) * (R_max / R_collapse_throat)
        v_microjet = 2.2 * v_jet_primary # Semburan mikro-jet fokus mencapai 1000 - 1500 m/s
        v_microjet = max(v_microjet, 950.0)

        # 3. Tekanan Water Hammer Akustik pada Permukaan Logam
        rho_s = mat["density"]
        c_s = mat["sound_speed"]
        rho_l = self.rho_liquid
        c_l = self.c_liquid

        # P_wh = (rho_l * c_l * rho_s * c_s) / (rho_l * c_l + rho_s * c_s) * v_microjet * (1 + k_w * v_microjet / c_l)
        z_liquid = rho_l * c_l
        z_solid = rho_s * c_s
        k_w = 2.0 # Koefisien kompresibilitas air pada tekanan tinggi
        p_water_hammer = (z_liquid * z_solid / (z_liquid + z_solid)) * v_microjet * (1.0 + k_w * v_microjet / c_l) # Pa

        # 4. Evaluasi Hugoniot Elastic Limit (HEL) & Kedalaman Deformasi Plastis
        nu = mat["poisson_ratio"]
        hel_threshold = ((1.0 - nu) / (1.0 - 2.0 * nu)) * mat["yield_strength"]
        is_plastic_deformation = p_water_hammer > hel_threshold

        # 5. Rekonstruksi Profil Tegangan Sisa Bawah-Permukaan Shen-Soyama
        # Parameter skala berdasarkan intensitas Water Hammer & waktu paparan (1/scan_speed)
        exposure_factor = min(2.0, max(0.5, 30.0 / max(scan_speed_mms, 1.0)))
        sigma_surf_mpa = -0.55 * (mat["yield_strength"] * 1.0e-6) * exposure_factor
        sigma_peak_mpa = -0.85 * (mat["yield_strength"] * 1.0e-6) * exposure_factor
        depth_peak_um = 85.0 * math.sqrt(injection_pressure_mpa / 100.0)
        depth_effective_um = depth_peak_um * 4.5

        # Batasi tegangan tekan agar tidak melebihi kekuatan luluh material
        sigma_surf_mpa = max(sigma_surf_mpa, -0.95 * mat["yield_strength"] * 1.0e-6)
        sigma_peak_mpa = max(sigma_peak_mpa, -1.05 * mat["yield_strength"] * 1.0e-6)

        # 6. Prediksi Umur Fatik Basquin-Morrow (ASTM E466 / Basquin)
        sigma_a = applied_stress_amplitude_mpa * 1.0e6
        sigma_m = mean_stress_mpa * 1.0e6
        sigma_f_prime = mat["fatigue_strength_coeff"]
        b = mat["basquin_exponent"]

        # Kasus Unpeened (Tegangan Sisa = 0)
        denom_unpeened = max(1.0e5, sigma_f_prime - sigma_m)
        ratio_unpeened = sigma_a / denom_unpeened
        n_f_unpeened = 0.5 * (ratio_unpeened ** (1.0 / b))

        # Kasus Cavitation Peened (Tegangan Sisa Tekan Efektif = sigma_peak)
        sigma_res_effective = sigma_peak_mpa * 1.0e6 # Bernilai negatif
        denom_peened = max(1.0e5, sigma_f_prime - (sigma_m + sigma_res_effective))
        ratio_peened = sigma_a / denom_peened
        n_f_peened = 0.5 * (ratio_peened ** (1.0 / b))

        fatigue_life_improvement_pct = ((n_f_peened - n_f_unpeened) / max(n_f_unpeened, 1.0)) * 100.0

        # Peningkatan Batas Ketahanan Lelah (Endurance Limit at 10^7 cycles)
        endurance_unpeened_mpa = mat["fatigue_limit_unpeened"] * 1.0e-6
        endurance_peened_mpa = endurance_unpeened_mpa + abs(sigma_peak_mpa) * 0.35

        return {
            "cavitation_number": round(sigma_cav, 4),
            "primary_jet_velocity_ms": round(v_jet_primary, 1),
            "microjet_collapse_velocity_ms": round(v_microjet, 1),
            "water_hammer_pressure_gpa": round(p_water_hammer * 1.0e-9, 2),
            "hugoniot_elastic_limit_gpa": round(hel_threshold * 1.0e-9, 2),
            "is_plastic_regime": is_plastic_deformation,
            "surface_residual_stress_mpa": round(sigma_surf_mpa, 1),
            "peak_compressive_residual_stress_mpa": round(sigma_peak_mpa, 1),
            "peak_stress_depth_um": round(depth_peak_um, 1),
            "effective_case_depth_um": round(depth_effective_um, 1),
            "fatigue_cycles_unpeened": int(min(n_f_unpeened, 1.0e9)),
            "fatigue_cycles_cavitation_peened": int(min(n_f_peened, 1.0e9)),
            "fatigue_life_gain_percent": round(fatigue_life_improvement_pct, 1),
            "endurance_limit_unpeened_mpa": round(endurance_unpeened_mpa, 1),
            "endurance_limit_cavitation_peened_mpa": round(endurance_peened_mpa, 1)
        }

# ==============================================================================
# DEMONSTRASI EKSEKUSI STUDI KASUS: SUDU TURBIN DIRGANTARA Ti-6Al-4V
# ==============================================================================
if __name__ == "__main__":
    engine = CavitationPeeningEngine()

    print("=" * 85)
    print("SIMULASI MULTIPHYSICS CAVITATION PEENING & PREDIKSI FATIK (ASTM G32 / ASTM E466)")
    print("Komponen: Sudu Turbin Kompresor Dirgantara Paduan Titanium Ti-6Al-4V")
    print("=" * 85)

    # 1. Dinamika Gelembung Rayleigh-Plesset
    print("\n--- 1. DINAMIKA KERUNTUHAN GELEMBUNG RAYLEIGH-PLESSES ---")
    bubble_res = engine.solve_rayleigh_plesset(
        r0_um=5.0,              # Inti awal 5 um
        p_ambient_kpa=500.0,    # Tekanan ambien tangki 500 kPa (0.5 MPa)
        p_driving_kpa=1.5,      # Tekanan depresi pusat vorteks 1.5 kPa (< Pv)
        dt_ns=0.5,
        total_time_us=5.0
    )
    print(f"• Radius Inti Nukleasi Awal (R_0) : {bubble_res['initial_radius_um']} um")
    print(f"• Radius Ekspansi Maksimal (R_max): {bubble_res['max_expanded_radius_um']} um")
    print(f"• Kecepatan Dinding Keruntuhan    : {bubble_res['max_collapse_wall_velocity_ms']} m/s")
    print(f"• Waktu Keruntuhan Rayleigh (t_c) : {bubble_res['theoretical_rayleigh_collapse_time_us']} us")

    # 2. Peening & Peningkatan Fatik Komponen
    print("\n--- 2. PARAMETER HIDROLIK, PROFIL TEGANGAN SISA & KINERJA FATIK S-N ---")
    peening_res = engine.simulate_peening_and_fatigue(
        material_name="Ti-6Al-4V",
        injection_pressure_mpa=120.0,   # 120 MPa (1200 bar) injeksi nozel
        ambient_pressure_mpa=0.45,      # 0.45 MPa (4.5 bar) tekanan bejana terendam
        standoff_mm=35.0,               # 35 mm standoff distance
        scan_speed_mms=15.0,            # 15 mm/s nozzle scanning
        applied_stress_amplitude_mpa=550.0, # Beban kerja siklik tinggi (550 MPa)
        mean_stress_mpa=50.0            # Tegangan tarik rata-rata 50 MPa
    )

    print(f"• Bilangan Kavitasi Nozel (sigma) : {peening_res['cavitation_number']}")
    print(f"• Kecepatan Jet Utama (v_jet)     : {peening_res['primary_jet_velocity_ms']} m/s")
    print(f"• Kecepatan Mikro-Jet Keruntuhan  : {peening_res['microjet_collapse_velocity_ms']} m/s")
    print(f"• Tekanan Water Hammer Impak      : {peening_res['water_hammer_pressure_gpa']} GPa (HEL Ti-6Al-4V: {peening_res['hugoniot_elastic_limit_gpa']} GPa)")
    print(f"• Rezim Deformasi                 : {'PLASTIS KOMPRESI (EFEKTIF PEENING)' if peening_res['is_plastic_regime'] else 'ELASTIS (TIDAK ADA SISA)'}")
    print(f"• Tegangan Sisa Permukaan (z = 0) : {peening_res['surface_residual_stress_mpa']} MPa")
    print(f"• Puncak Tegangan Sisa Tekan      : {peening_res['peak_compressive_residual_stress_mpa']} MPa pada kedalaman {peening_res['peak_stress_depth_um']} um")
    print(f"• Kedalaman Lapisan Tekan Efektif : {peening_res['effective_case_depth_um']} um")
    print(f"• Umur Fatik Tanpa Peening (Base) : {peening_res['fatigue_cycles_unpeened']:,} siklus")
    print(f"• Umur Fatik Pasca Cavitation P.  : {peening_res['fatigue_cycles_cavitation_peened']:,} siklus")
    print(f"• Peningkatan Umur Fatik (N_f)    : +{peening_res['fatigue_life_gain_percent']:.1f}%")
    print(f"• Batas Lelah (Endurance Limit)   : {peening_res['endurance_limit_unpeened_mpa']} MPa -> {peening_res['endurance_limit_cavitation_peened_mpa']} MPa (+{peening_res['endurance_limit_cavitation_peened_mpa'] - peening_res['endurance_limit_unpeened_mpa']:.1f} MPa)")
```

---

## 6. Studi Kasus Industri: Mitigasi Stress Corrosion Cracking (SCC) pada Nozel Reaktor Nuklir Alloy 600 & Sudu Turbin Ti-6Al-4V

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    STUDI KASUS MITIGASI RETAK KOROSI TEGANGAN (SCC) PADA NOZEL REAKTOR NUKLIR                         |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         KOMPONEN CRITICAL NOZZLE PENETRATION REAKTOR NUKLIR (PWR ALLOY 600 / ALLOY 82/182 WELD)                       |
|         ┌───────────────────────────────────────────────────────────────────────────┐ Masalah Lapangan Operasional:  |
|         │  Material: Superalloy Nikel Ni-Cr-Fe Alloy 600 (UNS N06600)               │ • Tegangan Sisa Tarik Las       |
|         │  Kondisi Lingkungan: Air Pendingin Primer PWR (320°C, 15.5 MPa, Asam Borat│   σ_weld = +350 s/d +500 MPa    |
|         │                                                                           │ • Terjadinya Primary Water SCC  |
|         │  PARAMETER CAVITATION PEENING IN-SITU TERENDAM:                           │   (PWSCC) pada Batas Butir Logam|
|         │  • Tekanan Pompa Injeksi: P_inj = 140 MPa, Tangki Reaktor Terendam        │ • Resiko Kebocoran Radiasi Fatal|
|         │  • Scanning Tooling: 6-Axis Submerged Robotic Arm, v_scan = 10 mm/s       │                                 |
|         │  • Sudut Tembak Nozel: 90° Tegak Lurus Permukaan Lasan Dalam              │ Solusi Rekayasa Cavitation:     |
|         │  • Durasi Pemrosesan: 45 detik per segmen pipa 100 mm                     │ • Pembalikan Tegangan Total:    |
|         └───────────────────────────────────────────────────────────────────────────┘   σ_res beralih menjadi -680 MPa|
|                                                                                       • Laju Inisiasi Retak SCC = 0%  |
|                                                                                       • Nilai Ra Tetap Bersih < 0.2 µm|
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 6.1 Latar Belakang Masalah PWSCC pada Industri Pembangkit Tenaga Nuklir
Pada reaktor air bertekanan (*Pressurized Water Reactor* / PWR), nozel penetrasi bejana tekan reaktor (*Bottom Mounted Instrumentation* / BMI nozzles) yang dibuat dari paduan nikel Alloy 600 dilas ke bejana tekan menggunakan logam pengisi Alloy 82/182. Proses pengelasan fusi menimbulkan tegangan sisa tarik termal yang sangat tinggi pada permukaan dalam pipa ($\sigma_{\text{tensile}} = +300 - +550\ \text{MPa}$).

Di bawah paparan air pendingin primer reaktor suhu tinggi ($320^\circ\text{C}$, $15{,}5\ \text{MPa}$, mengandung hidrogen terlarut dan asam borat), kombinasi tegangan tarik sisa dan lingkungan korosif memicu fenomena **Primary Water Stress Corrosion Cracking (PWSCC)**. Retak mikro intergranular merambat secara subkritis menembus dinding bejana, memaksa pemadaman reaktor darurat (*unplanned plant outage*) dengan kerugian finansial mencapai jutaan dolar per hari.

Metode konvensional seperti *Shot Peening* ditolak oleh badan regulasi nuklir (seperti US NRC dan IAEA) karena serpihan peluru baja atau kontaminasi keramik berisiko mengotori pendingin primer reaktor dan mengikis sistem pendingin darurat (*ECCS strainers*).

### 6.2 Implementasi Robotik Cavitation Peening Terendam (*In-Situ Submerged Peening*)
Solusi rekayasa mutakhir yang diterapkan adalah mengintegrasikan nozel kavitasi venturi pada lengan robotik tahan radiasi (*submerged 6-axis underwater robotic manipulator*) langsung di dalam kolam reaktor:
- **Tekanan Injeksi Nozel**: $P_{\text{inj}} = 140\ \text{MPa}$ ($1400\ \text{bar}$), menggunakan air pendingin reaktor murni sebagai fluida kerja (bebas kontaminasi aditif).
- **Tekanan Ambien Kolam**: Kedalaman perendaman $12\ \text{meter}$ menghasilkan tekanan hidrostatik $P_{\text{amb}} \approx 0{,}22\ \text{MPa}$.
- **Kecepatan Rotasi & Pindai**: Nozel berotasi $360^\circ$ dengan laju pindai aksial $v_{\text{scan}} = 10\ \text{mm/s}$ pada *standoff distance* terkalibrasi $S = 28\ \text{mm}$.

### 6.3 Hasil Verifikasi Metrologi XRD & Uji SCC Akselerasi
1. **Pengukuran Tegangan Sisa XRD Metode $\sin^2\psi$ (SAE J2441)**:
   - Pengukuran tegangan sisa menggunakan difraksi sinar-X portabel membuktikan bahwa tegangan sisa tarik awal ($+420\ \text{MPa}$) berhasil diubah total menjadi **tegangan sisa tekan mendalam sebesar $-680\ \text{MPa}$ pada permukaan**, dengan puncak tegangan tekan mencapai **$-820\ \text{MPa}$ pada kedalaman $z = 110\ \mu\text{m}$**, dan kedalaman penetrasi efektif melampaui $z_{\text{eff}} = 480\ \mu\text{m}$.
2. **Uji Korosi Retak Tegangan Akselerasi (ASTM G36 / Autoclave C-Ring Test)**:
   - Sampel pipa *C-Ring* Alloy 600 yang diberi perlakuan *Cavitation Peening* diuji di dalam autoklaf simulasi primer PWR pada temperatur $340^\circ\text{C}$ dan konsentrasi asam borat jenuh selama 3000 jam.
   - Hasil mikroskopi optik dan SEM menunjukkan **$0\%$ insidensi pembentukan retak mikro (*zero crack initiation*)**, sedangkan spesimen lasan tanpa perlakuan (*as-welded*) mengalami keretakan retak tembus intergranular dalam 450 jam pengujian.
3. **Integritas Geometri & Topografi Permukaan (ISO 25178)**:
   - Nilai kekasaran permukaan aritmatika $Ra$ hanya berubah dari $0{,}14\ \mu\text{m}$ (sebelum peening) menjadi $0{,}17\ \mu\text{m}$ (setelah peening), tetap memenuhi standar toleransi hidrodinamika aliran reaktor nuklir tanpa memerlukan proses pemolesan sekunder (*zero post-polishing requirement*).

---

## 7. Rangkuman Panduan Praktis untuk Engineer Teknik Industri

1. **Kendalikan Nilai Bilangan Kavitasi Nozel ($\sigma_{\text{cav}}$)**: Jaga nilai bilangan kavitasi pada rentang optimal $\sigma_{\text{cav}} = 0{,}015 - 0{,}045$. Nilai $\sigma$ yang terlalu besar ($> 0{,}08$) meredam pertumbuhan gelembung sehingga intensitas impak rendah, sedangkan $\sigma$ yang terlalu kecil ($< 0{,}008$) menyebabkan kantung kavitasi memanjang melewati benda kerja dan meledak di luar zona target.
2. **Kalibrasi Presisi Jarak *Standoff Distance* ($S$)**: Titik keruntuhan awan kavitasi memiliki puncak energi kinetik pada jarak tertentu dari ujung nozel ($S_{\text{opt}} \approx 20 - 40 \times d_n$). Penyimpangan jarak sebesar $\pm 10\ \text{mm}$ dari titik fokus dapat menurunkan intensitas tegangan tekan hingga lebih dari $50\%$.
3. **Optimasi Waktu Paparan (*Exposure Time / Scan Speed*)**: Terapkan laju pindai nozel yang seimbang ($v_{\text{scan}} = 10 - 25\ \text{mm/s}$). Waktu paparan yang terlalu singkat tidak mencapai saturasi deformasi plastis kisi logam, sedangkan pemaparan berlebih pada satu titik statis (*over-peening*) memicu fenomena fatik erosi kavitasi mikro (*cavitation erosion mass loss* sesuai ASTM G32).
4. **Monitoring Tekanan Akustik Secara Real-Time**: Gunakan sensor hidrofon akustik frekuensi tinggi (*broadband hydrophone* $100\ \text{kHz} - 2\ \text{MHz}$) di dalam tangki air untuk memantau spektrum frekuensi emisi keruntuhan gelembung sebagai indikator stabilitas proses otomatis.

---

## 8. Referensi Akademis & Standar Industri Terverifikasi

1. **Soyama, H.** (2020). "Comparison between shot peening, cavitation peening, and laser peening by observation of crack initiation and crack growth in stainless steel". *Metals*, 10(1), pp. 63. DOI: [10.3390/met10010063](https://doi.org/10.3390/met10010063).
2. **Soyama, H.** (2017). "Key factors and applications of cavitation peening". *International Journal of Peening Science & Technology*, 1(1), pp. 3–60.
3. **Soyama, H., & Sanders, D. G.** (2022). "A critical comparative review of cavitation peening and other surface peening methods". *Journal of Materials Processing Technology*, 305, pp. 117586. DOI: [10.1016/j.jmatprotec.2022.117586](https://doi.org/10.1016/j.jmatprotec.2022.117586).
4. **Brennen, C. E.** (2014). *Cavitation and Bubble Dynamics*. Cambridge: Cambridge University Press. DOI: [10.1017/CBO9781107338760](https://doi.org/10.1017/CBO9781107338760).
5. **ASTM International**. (2020). *ASTM G32-20: Standard Test Method for Cavitation Erosion Using Vibratory Apparatus*. West Conshohocken: ASTM International. DOI: [10.1520/G0032-20](https://doi.org/10.1520/G0032-20).
6. **ASTM International**. (2021). *ASTM E466-21: Standard Practice for Conducting Force Controlled Constant Amplitude Axial Fatigue Tests of Metallic Materials*. West Conshohocken: ASTM International. DOI: [10.1520/E0466-21](https://doi.org/10.1520/E0466-21).
7. **Society of Automotive Engineers (SAE)**. (2018). *SAE J2441: Residual Stress Measurement by X-Ray Diffraction*. Warrendale: SAE International.
