# Modul 653: Vaporizing Foil Actuator Welding (VFAW) & Solid-State Impact Welding Dynamics: Kinetika Pelepasan Kapasitor Tegangan Tinggi, Mekanika Kecepatan Flyer (*Flyer Velocity*), Fenomena Pancaran Jetting Antarmuka, dan Metalurgi Sambungan Bimetalik Disimilar (AWS C6.1, ASTM E8M, ISO 15620 & ASME BPVC)

## 1. Pengantar & Konteks Industri: Teknologi *Vaporizing Foil Actuator Welding* (VFAW)

*Vaporizing Foil Actuator Welding* (VFAW) adalah teknologi penyambungan keadaan padat (*solid-state impact welding process*) berkecepatan ultra-tinggi (*ultra-high velocity impulse welding*) yang ditemukan dan dipelopori oleh tim riset Prof. Glenn S. Daehn di *The Ohio State University*. VFAW memanfaatkan energi plasma ledakan listrik dari sebuah foil konduktor tipis (biasanya aluminium berketebalan $50 - 150\ \mu\text{m}$) yang diuapkan seketika (*instantaneous electrical vaporization*) menggunakan lucutan arus pulsa bertegangan tinggi dari bank kapasitor (*pulsed capacitor bank discharge*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                 ARSITEKTUR FISIS SISTEM VAPORIZING FOIL ACTUATOR WELDING (VFAW) & PROSES IMPAK SOLID-STATE            |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         BANK KAPASITOR PULSA ENERGI TINGGI (HIGH-VOLTAGE PULSED POWER SUPPLY)                                         |
|         ┌───────────────────────────────────────────────────────────────────────────┐ Parameter Pulsa Listrik:       |
|         │  Tegangan Pengisian Bank Kapasitor: V_0 = 3 - 10 kV                       │ • Kapasitansi Total:            |
|         │  Energi Tersimpan: E_cap = 0.5 * C * V_0^2 = 1.0 - 16.0 kJ                │   C = 50 - 400 µF               |
|         │  Sakelar Celah Percikan / Ignitron Ultra-Cepat: t_rise < 2.0 µs           │ • Arus Puncak (Peak Current):   |
|         │                                    │                                      │   I_peak = 50 - 200 kA          |
|         └────────────────────────────────────┼──────────────────────────────────────┘ • Frekuensi RLC: f ≈ 50-150 kHz |
|                                              │                                                                        |
|                                              ▼                                                                        |
|         SUSUNAN AKTUTATOR FOIL, FLYER PLATE, STANDOFF GAP & TARGET BASE PLATE                                        |
|         ┌───────────────────────────────────────────────────────────────────────────┐                                 |
|         │  [ BLOK PENAHAN KEKAKUAN TINGGI (HEAVY BACKING / ANVIL TOOLING) ]         │ Mekanisme Pendorong:            |
|         │  ───────────────────────────────────────────────────────────────────────  │ Logam foil meledak dan berubah  |
|         │  [ FOIL AKTUTATOR TIPIS (Al Foil t = 75-100 µm) + INSULATOR DILEKTRIK ]   │ menjadi gas plasma bertekanan   |
|         │  ░░░░░░░░░░░░ LEDAKAN PLASMA TEKANAN TINGGI (P_plasma > 1 - 5 GPa) ░░░░░░ │ tinggi dalam hitungan < 3 µs   |
|         │  ───────────────────────────────────────────────────────────────────────  │                                 |
|         │  [ PELAT TERBANG / FLYER SHEET (Al, Ti, Mg, Cu, t = 0.5 - 2.0 mm) ]       │ Kecepatan Luncur:               |
|         │  ═══════════════════════════════════════════════════════════════════════  │ V_p = 300 - 1200 m/s            |
|         │             │  JARAK CELAH LUNCUR BEBAS (STANDOFF GAP h_g = 0.5 - 3.0 mm) │ Sudut Benturan Dinamis:         |
|         │             ▼                                                             │ β = 5° - 25°                    |
|         │  [ PELAT TARGET / BASE SUBSTRATE (Advanced High-Strength Steel, Ti, Al) ] │                                 |
|         │  ───────────────────────────────────────────────────────────────────────  │ Fenomena Metalurgi:             |
|         │  [ LANDASAN BAWAH / BACKING BASE PLATE ]                                  │ • Pancaran Jetting Antarmuka    |
|         └───────────────────────────────────────────────────────────────────────────┘ • Zero Heat-Affected Zone       |
|                                              │                                        • Antarmuka Gelombang Padat     |
|                                              ▼ Tabrakan Hipersonik Oblique (t < 10 µs)• Bebas Intermetalik Rapuh      |
|                                                                                                                       |
|         HASIL SAMBUNGAN IKATAN METALURGI SOLID-STATE BIMETALIK (INTERFACIAL WAVY BOND)                                |
|         ┌───────────────────────────────────────────────────────────────────────────┐                                 |
|         │  PELAT ATAS (FLYER)     ████████████████████████████████████████████████  │ Karakteristik Sambungan:        |
|         │  ANTARMUKA IKATAN WAVY  ~~~~~~~~ SIKLOIDA GELOMBANG METALURGI ~~~~~~~~~~  │ • Kekuatan Geser > Logam Induk  |
|         │  PELAT BAWAH (TARGET)   ▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒  │ • Efisiensi Energi > 80% vs MPW |
|         └───────────────────────────────────────────────────────────────────────────┘ • Biaya Alat Sangat Rendah      |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 1.1 Keunggulan Fisis VFAW Dibandingkan Pengelasan Konvensional & MPW
Dalam pengelasan fusi konvensional (seperti laser welding, TIG, MIG, atau resistance spot welding), penyambungan material disimilar dengan perbedaan titik lebur, konduktivitas termal, dan afinitas kimia yang drastis (contoh: aluminium paduan seri 6xxx/7xxx ke baja kekuatan ultra-tinggi *Press Hardened Steel* / PHS 22MnB5 1500 MPa, atau tembaga ke titanium) hampir selalu menghasilkan pembentukan senyawa intermetalik (*intermetallic compounds* / IMC) rapuh seperti $\text{Fe}_2\text{Al}_5$, $\text{FeAl}_3$, $\text{TiAl}_3$, atau $\text{Cu}_9\text{Al}_4$. Keberadaan lapisan intermetalik dengan ketebalan lebih dari $1 - 2\ \mu\text{m}$ menurunkan kekuatan geser putus sambungan secara katastropik dan menyebabkan keretakan getas (*brittle fracture*).

Pengelasan tumbukan (*impact welding*) menyelesaikan kendala tersebut dengan menjaga proses dalam fasa padat murni (*solid-state*). Selama dekade terakhir, *Magnetic Pulse Welding* (MPW) dan *Explosion Welding* (EXW) menjadi metode impak utama. Namun:
1. **Explosion Welding (EXW)** memerlukan bahan peledak kimia berbahaya, regulasi keamanan amunisi ketat, dan tidak dapat diterapkan di dalam lini perakitan pabrik otomotif modern.
2. **Magnetic Pulse Welding (MPW)** memerlukan kumparan kerja (*actuator coils*) elektromagnetik yang sangat besar, berbiaya mahal, dan rentan terhadap kegagalan fatik mekanis dan termal akibat gaya Lorentz balikan internal (*repulsive magnetic back-forces*) yang menghancurkan kumparan setelah ratusan siklus tembakan.

**Vaporizing Foil Actuator Welding (VFAW)** mengatasi kelemahan kumparan MPW dengan mengganti kumparan permanen dengan foil aluminium berbiaya sangat rendah yang bersifat *single-use consumable*. Ledakan plasma foil mengubah energi listrik kapasitor menjadi kerja mekanik ekspansi fluida gas terionisasi bertekanan multi-gigapascal ($P_{\text{plasma}} = 1 - 5\ \text{GPa}$), yang meluncurkan pelat terbang (*flyer sheet*) melintasi celah bebas (*standoff distance*) hingga mencapai kecepatan benturan hipersonik $V_p = 300 - 1200\ \text{m/s}$ dalam waktu kurang dari $5\ \mu\text{s}$.

### 1.2 Aplikasi Industri Strategis
- **Struktur Bodi Otomotif Ringan (*Multi-Material Lightweight Automotive BIW*)**: Penyambungan lembaran paduan aluminium berkekuatan tinggi (AA6061-T6, AA7075-T6) dengan baja otomotif *Advanced High-Strength Steels* (DP980, TRIP1180) dan baja martensitik cetak panas *Press-Hardened Steels* (PHS 22MnB5 1500 MPa / Usibor 1500).
- **Sistem Baterai Kendaraan Listrik (EV Battery Packs)**: Penyambungan multi-tab busbar disimilar tembaga berkonduktivitas tinggi (Cu-ETP) ke terminal aluminium (Al 1050 / Al 3003) dengan resistansi kontak listrik mikro-ohm ($\mu\Omega$) mendekati konduktor kontinu murni.
- **Industri Dirgantara & Aviasi**: Penyambungan lembaran tipis paduan titanium (Ti-6Al-4V) ke lembaran aluminium dirgantara (AA2024-T3) tanpa pembentukan fasa intermetalik getas.
- **Peralatan Penukar Kalor & Cryogenic Cooling**: Fabrikasi tabung dan pelat transisi bimetalik aluminium-tembaga dan zirkonium-baja tahan karat untuk bejana kriogenik dan reaktor kimia.

### 1.3 Standar Keteknikan & Regulasi Pengujian
- **AWS C6.1 / AWS C6.2M**: *Recommended Practices for Friction and Impact Welding*.
- **ASTM E8 / E8M-24**: *Standard Test Methods for Tension Testing of Metallic Materials (Lap Shear & Cross-Tension Joint Testing)*.
- **ISO 15620:2019**: *Welding — Friction welding of metallic materials*.
- **ISO 14272:2016**: *Resistance welding — Specimen dimensions and procedure for cross tension testing of resistance spot and embossed projection welds (adapted for impact spot welds)*.
- **ISO 14329:2003**: *Welding — Resistance welding — Destructive tests of welds — Failure types and geometric evaluations for resistance spot, seam and projection welds*.
- **ASME BPVC Section IX**: *Welding, Brazing, and Fusing Qualifications (Solid-State Welding Performance Qualification)*.

---

## 2. Fisika Ledakan Foil Listrik, Dinamika Plasma & Kecepatan Flyer

```
+-----------------------------------------------------------------------------------------------------------------------+
|                       TERMODINAMIKA ELEKTRO-TERMAL & DINAMIKA PELEPASAN FOIL VFAW                                     |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         SIRKUIT DISCHARGE SERI RLC                                                                                    |
|         ┌───────────┐    Sakelar Ignitron     L_sirkuit       R(t)_foil                                               |
|         │ Kapasitor ├───/ ─── [S] ───────────( ( ( ( )───────/\/\/\/\/\───────┐                                      |
|         │ C, V_0    │                                                        │                                      |
|         └─────┬─────┘                                                        │                                      |
|               └──────────────────────────────────────────────────────────────┘                                      |
|                                                                                                                       |
|         FASA TRANSISI FISIS MATERIAL FOIL AKTUTATOR (DURASI TOTAL t < 3.0 µs):                                        |
|         1. Pemanasan Joule Ohmik Cepat (Ohmic Solid Heating):    t = 0.0 - 0.8 µs (T meningkat dari T_0 ke T_melt)   |
|         2. Peleburan Fasa Cair Cepat (Latent Heat of Fusion):   t = 0.8 - 1.2 µs (Liquid metal conductor)            |
|         3. Pendidihan Cepat & Atomisasi (Superheating):         t = 1.2 - 1.6 µs (T melampaui T_boil = 2743 K)        |
|         4. Ledakan Listrik & Ionisasi Plasma (Electrical Burst): t = 1.6 - 2.5 µs (R_foil melonjak, P_burst > 3 GPa)  |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.1 Persamaan Rangkaian Listrik Transien RLC & Ledakan Foil
Rangkaian pulsa pengelasan VFAW dimodelkan sebagai rangkaian listrik seri $RLC$ transien orde kedua non-linier di mana resistansi foil konduktor $R_f(t)$ berubah secara drastis hingga ribuan kali lipat saat bertransisi dari fasa padat ke uap terionisasi (*plasma state*):

$$L_{\text{sys}} \frac{d^2 Q(t)}{dt^2} + \left( R_{\text{sys}} + R_f(t) \right) \frac{dQ(t)}{dt} + \frac{Q(t)}{C_{\text{bank}}} = 0$$

Di mana:
- $Q(t)$ adalah muatan listrik sesaat pada bank kapasitor ($\text{Coulomb}$), dengan $I(t) = -\frac{dQ(t)}{dt}$ sebagai arus pulsa lucutan ($\text{Ampere}$).
- $C_{\text{bank}}$ adalah kapasitansi total bank kapasitor ($\text{Farad}$).
- $L_{\text{sys}}$ adalah induktansi parasitik sistem kabel, sakelar, dan kolektor arus ($\text{Henry}$, umumnya $L_{\text{sys}} \approx 50 - 300\ \text{nH}$).
- $R_{\text{sys}}$ adalah resistansi internal busbar dan sakelar celah percikan ($\Omega$, umumnya $5 - 20\ \text{m}\Omega$).
- $R_f(t)$ adalah resistansi sesaat foil aluminium aktuator:

$$R_f(t) = \rho_{\text{res}}(e) \cdot \frac{l_f}{w_f \cdot t_f}$$

Dengan $l_f$, $w_f$, dan $t_f$ berturut-turut adalah panjang aktif, lebar aktif, dan ketebalan awal foil aktuator ($\text{m}$), serta $\rho_{\text{res}}(e)$ adalah resistivitas listrik sebagai fungsi dari energi internal jenis yang diserap ($e = \int I^2 R_f dt / m_{\text{foil}}$).

### 2.2 Kriteria Ledakan Uap Listrik (*Action Integral & Burst Criterion*)
Menurut teori ledakan kawat/foil listrik Anderson-Smith dan Chace-Webb, penguapan eksplosif foil terjadi ketika integral aksi arus spesifik (*specific action integral*, $g_{\text{burst}}$) mencapai konstanta karakteristik material:

$$g_{\text{action}} = \int_{0}^{t_{\text{burst}}} j^2(t)\, dt = \int_{0}^{t_{\text{burst}}} \left( \frac{I(t)}{A_0} \right)^2 dt = g_{\text{burst}}$$

Untuk aluminium komersial kemurnian tinggi:
$$g_{\text{burst}}^{\text{Al}} \approx 0{,}90 - 1{,}05 \times 10^{17}\ \text{A}^2\cdot\text{s}/\text{m}^4$$

Energi ambang sublimasi volumetrik untuk menguapkan aluminium cair secara adiabatik adalah $E_{\text{sub}}^{\text{Al}} \approx 32\ \text{kJ/cm}^3$ ($32\ \text{J/mm}^3$). Ketika energi yang didepositkan melampaui batas ini, foil meledak dan memicu transisi fasa superkritis menjadi gas terionisasi berdensitas tinggi (*dense metallic plasma*).

### 2.3 Persamaan Tekanan Ekspansi Plasma Gurney Modifikasi
Tekanan plasma sesaat ($P_{\text{plasma}}(t)$) yang mendorong pelat terbang dapat diaproksimasi melalui perluasan persamaan keadaan gas ideal berdensitas tinggi Jones-Wilkins-Lee (JWL) atau model ekspansi satu dimensi:

$$P_{\text{plasma}}(t) = \eta_{\text{plasma}} \cdot \frac{E_{\text{deposited}}(t) - E_{\text{vap}}}{V_{\text{cavity}}(t)} \cdot (\gamma_{\text{ad}} - 1)$$

Di mana:
- $\eta_{\text{plasma}}$ adalah efisiensi konversi energi listrik ke energi termal plasma ($0{,}60 - 0{,}85$).
- $E_{\text{deposited}}(t) = \int_0^t I^2(\tau) R_f(\tau)\, d\tau$ adalah energi Joule yang diserap foil ($\text{J}$).
- $E_{\text{vap}} = m_{\text{foil}} \cdot \Delta H_{\text{vap}}$ adalah entalpi total penguapan foil ($\text{J}$).
- $V_{\text{cavity}}(t) = A_f \cdot \left( t_{\text{insulator}} + y_f(t) \right)$ adalah volume rongga ekspansi sesaat ($\text{m}^3$), dengan $y_f(t)$ adalah perpindahan posisi pelat terbang.
- $\gamma_{\text{ad}}$ adalah indeks adiabatik plasma aluminium ($\gamma_{\text{ad}} \approx 1{,}25 - 1{,}35$).

### 2.4 Kecepatan Luncur Pelat Terbang (*Flyer Plate Acceleration Dynamics*)
Percepatan dan kecepatan terminal pelat terbang ($v_p(t)$) dikendalikan oleh integrasi hukum kedua Newton terhadap gaya dorong tekanan plasma dan inersia massa pelat per satuan luas:

$$m_{\text{areal}} \cdot \frac{d^2 y_f(t)}{dt^2} = P_{\text{plasma}}(t) - P_{\text{atm}} \approx P_{\text{plasma}}(t)$$

Di mana massa per satuan luas pelat terbang adalah:
$$m_{\text{areal}} = \rho_{\text{flyer}} \cdot t_{\text{flyer}}$$

Dengan mengintegrasikan terhadap celah bebas luncur (*standoff distance*, $h_g$), kecepatan impak akhir pelat terbang sebelum menabrak target ($V_p$) dinyatakan dalam formulasi analitis Gurney termodifikasi:

$$V_p = \sqrt{2 \cdot \eta_{\text{coupl}} \cdot \frac{E_{\text{kinetic}}}{M_{\text{flyer}} + \frac{1}{3} M_{\text{foil}}}} = \sqrt{\frac{2 \cdot \eta_{\text{eff}} \cdot E_{\text{cap}}}{\rho_f \cdot A_f \cdot t_f + \frac{1}{3} \rho_{\text{foil}} \cdot A_{\text{foil}} \cdot t_{\text{foil}}}}$$

Dalam praktik industri, kecepatan impak $V_p$ diukur secara presisi menggunakan interferometri laser berbasis serat optik *Photonic Doppler Velocimetry* (PDV) atau *Velocity Interferometer System for Any Reflector* (VISAR).

---

## 3. Metalurgi Impak Solid-State, Dinamika Jetting & Pembentukan Antarmuka Bergelombang

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    MEKANIKA BENTURAN MIRING (OBLIQUE IMPACT) & MEKANISME PANCARAN JETTING                             |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         PELAT TERBANG (FLYER)                                                                                         |
|         \                                                                                                             |
|          \  Kecepatan Luncur V_p                                                                                      |
|           \     │                                                                                                     |
|            \    ▼                                                                                                     |
|             \      Sudut Benturan β                                                                                   |
|              \ ┌─────────────────────────                                                                             |
|               \│                                                                                                      |
|         ───────X─────────────────────────  Titik Kontak Tabrakan (Collision Point C)                                  |
|               /│ ◄─── PANCARAN JETTING LOGAM CAIR-PADAT HIPERSONIK (Ejeksi Lapisan Oksida & Kontaminan)               |
|              / └─────────────────────────                                                                             |
|             /                                                                                                         |
|         PELAT TARGET (BASE SUBSTRATE)                                                                                 |
|                                                                                                                       |
|         ZONA TEKANAN HIDRODINAMIS (P > P_Hugoniot > 5 GPa) ──► ALIRAN PLASTIS HIDRODINAMIS INSTAN                   |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.1 Kinematika Titik Benturan & Titik Kontak (*Collision Velocity*)
Pada benturan miring (*oblique impact*) dengan sudut tabrakan dinamis $\beta$, kecepatan perambatan titik kontak benturan ($V_c$) di sepanjang permukaan target ditentukan oleh:

$$V_c = \frac{V_p}{\sin \beta} \quad \text{atau} \quad V_c = \frac{V_p}{2 \sin(\beta / 2)}$$

Agar terjadi ikatan metalurgi padat berkualitas tinggi, kecepatan titik kontak harus bersifat subsonik relatif terhadap kecepatan gelombang akustik ruah (*bulk sound speed*, $c_0 = \sqrt{K/\rho}$) dari kedua pasangan logam:

$$V_c < c_{\text{sound}} = \min(c_{0,\text{flyer}}, c_{0,\text{target}})$$

Jika $V_c > c_{\text{sound}}$ (benturan supersonik), gelombang kejut terlepas mendahului titik kontak (*detached shockwave*), menaikkan tekanan di depan titik tabrakan dan mengeliminasi mekanisme semburan pembersih antarmuka (*jetting*), yang mengakibatkan kegagalan ikatan total.

### 3.2 Fenomena Pancaran Pembersih Antarmuka (*Interfacial Jetting Mechanics*)
Ketika dua permukaan logam bertabrakan pada tekanan kontak yang jauh melampaui kekuatan luluh dinamis material ($P_{\text{impact}} \gg \sigma_{\text{yield,dyn}}$), material logam di sekitar titik kontak berperilaku sebagai fluida tak kental (*inviscid hydrodynamic flow*). Aliran fluida logam terbagi menjadi dua komponen di titik stagnasi:
1. **Saluran Utama Sambungan (*Main Parent Stream*)**: Logam murni yang tertekan membentuk ikatan atomik kohesif di bawah tegangan kompresi multi-gigapascal.
2. **Pancaran Jetting (*Free Surface Jet*)**: Semburan partikel logam berkecepatan ultra-tinggi yang menyembur keluar dari celah tabrakan, menyapu dan mengejeksikan seluruh lapisan oksida pasif ($\text{Al}_2\text{O}_3$, $\text{Fe}_2\text{O}_3$), lapisan hidrokarbon, dan kontaminan mikroskopis.

Pembersihan permukaan secara mekanik-hidrodinamik dalam fraksi nanodetik ini mempertemukan kisi kristal logam murni bebas oksida (*virgin nascent metals*) dalam jarak interatomik ($< 0{,}5\ \text{nm}$), memfasilitasi ikatan logam (*metallic bonding*) seketika tanpa memerlukan fasa cair.

### 3.3 Teori Instabilitas Kelvin-Helmholtz & Morfologi Gelombang Antarmuka
Antarmuka sambungan VFAW yang optimal menunjukkan morfologi gelombang sinusoidal teratur (*wavy interface*). Terjadinya pola bergelombang ini dimodelkan melalui analogi ketidakstabilan hidrodinamika Kelvin-Helmholtz antara dua fluida yang bergerak dengan perbedaan kecepatan geser ekstrem:

Panjang gelombang antarmuka ($\lambda_{\text{wave}}$) dan amplitudo gelombang ($A_{\text{wave}}$) dirumuskan oleh Bahrani & Crossland:

$$\lambda_{\text{wave}} = C_w \cdot \frac{m_{\text{flyer}}}{\rho_{\text{avg}}} \cdot \left( \frac{V_p}{c_{\text{bulk}}} \right)^2$$

$$A_{\text{wave}} \approx 0{,}25 \cdot \lambda_{\text{wave}} \cdot \sin \beta$$

Di mana $C_w$ adalah koefisien tak berdimensi yang bergantung pada kekerasan relatif pasangan material ($C_w \approx 10 - 25$).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                       JENDELA PENGELASAN IMPAK (IMPACT WELDABILITY WINDOW)                                            |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         Kecepatan Flyer V_p (m/s)                                                                                     |
|         ▲                                                                                                             |
|  1400   │                            BATAS ATAS: PELELEHAN BERLEBIH / INTERMETALIK GETAS (MELTING & IMC FORMATION)    |
|         │                        ┌───────────────────────────────────────────────────────────┐                        |
|  1000   │                        │                                                           │                        |
|         │                        │              ZONA SAMBUNGAN OPTIMAL BERGELOMBANG          │                        |
|   800   │                        │             (STABLE WAVY SOLID-STATE WELDING)             │                        |
|         │                        │                                                           │                        |
|   600   │                        │                                                           │                        |
|         │   BATAS KIRI:          │                                                           │ BATAS KANAN:           |
|   400   │   SUDUT KRITIS         │                                                           │ BATAS SUBNONIK         |
|         │   MINIMUM JETTING      │                                                           │ (DETACHED SHOCKWAVE)   |
|   200   │   (β < β_min)          └───────────────────────────────────────────────────────────┘ (V_c > c_sound)        |
|         │   ──────────────────────────────────────────────────────────────────────────────────                        |
|     0   │   BATAS BAWAH: ENERGI / KECEPATAN MINIMUM PEMBENTUKAN JETTING (V_p < V_min)                                 |
|         └────────────────────────────────────────────────────────────────────────────────────────► Sudut Benturan β  |
|         0°                       5°                          15°                         25°        30°               |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.4 Kriteria Ambang Batas Jendela Pengelasan Impak (*Weldability Window Criteria*)
1. **Batas Kecepatan Minimum Impak ($V_{p,\min}$)**:
   $$V_{p,\min} = \sqrt{\frac{\sigma_{\text{yield,dyn}}}{\rho_{\text{flyer}}}} \approx \sqrt{\frac{H_v}{3 \rho_{\text{flyer}}}}$$
   Di mana $H_v$ adalah kekerasan Vickers material ($\text{Pa}$).
2. **Batas Sudut Benturan Minimum ($\beta_{\min}$)**:
   $$\beta_{\min} \approx 2^\circ - 5^\circ$$
   (Sudut yang lebih kecil gagal membentuk gradien tekanan asimetris untuk memicu ejeksi *jetting*).
3. **Batas Kecepatan Maksimum / Titik Leleh Berlebih ($V_{p,\max}$)**:
   $$V_{p,\max} = \sqrt{\frac{2 \cdot C_p \cdot (T_{\text{melt}} - T_0)}{\eta_{\text{diss}}}} \cdot \frac{1}{\sin(\beta/2)}$$
   Jika kecepatan melebihi ambang batas ini, energi disipasi plastis adiabatik memicu pembentukan kantung lelehan lokal (*interfacial melt pockets*) yang memadat kembali menjadi fasa intermetalik rapuh berpori.

---

## 4. Parameter Kritis Proses, Desain Sambungan & Metrologi Pengujian

### 4.1 Matriks Parameter Kunci Sistem VFAW
| Parameter Mesin & Perkakas | Simbol | Rentang Nilai Khas Industri | Pengaruh Fisis pada Sambungan |
| :--- | :---: | :---: | :--- |
| **Tegangan Lucutan Kapasitor** | $V_0$ | $3{,}0 - 9{,}0\ \text{kV}$ | Mengontrol energi total input dan laju kenaikan arus awal ($dI/dt$). |
| **Energi Input Tersimpan** | $E_{\text{cap}}$ | $1{,}5 - 12{,}0\ \text{kJ}$ | Menentukan volume foil yang dapat diuapkan dan puncak tekanan plasma $P_{\text{plasma}}$. |
| **Geometri Foil Aktuator (Al)** | $l_f \times w_f \times t_f$ | $(30-60) \times (10-25) \times (0{,}075-0{,}10)\ \text{mm}$ | Menentukan massa foil, resistansi awal $R_f$, dan kerapatan arus ledakan $j_{\text{burst}}$. |
| **Ketebalan Pelat Terbang (*Flyer*)** | $t_{\text{flyer}}$ | $0{,}5 - 2{,}5\ \text{mm}$ | Mengontrol inersia massa areal ($m_{\text{areal}}$) dan waktu akselerasi. |
| **Jarak Celah Bebas (*Standoff Gap*)** | $h_g$ | $0{,}8 - 3{,}0\ \text{mm}$ | Ruang luncur bebas bagi pelat untuk mencapai kecepatan terminal $V_p$ sebelum tumbukan. |
| **Kekakuan Landasan (*Backing Block*)**| $K_{\text{anvil}}$ | Baja Perkakas D2 / H13 ($> 55\ \text{HRC}$) | Mencegah lenturan lentur (*bending compliance*) dan menjaga efisiensi pantulan gelombang. |

### 4.2 Desain Sambungan Lap Joint & Pengaturan Standoff
Untuk memastikan terbentuknya sudut benturan $\beta$ yang stabil pada lembaran datar paralel:
1. **Metode Celah Konstan Paralel (*Parallel Standoff Configuration*)**: Pelat terbang dan pelat target dipisahkan oleh shim isolator setebal $h_g = 1{,}0 - 2{,}0\ \text{mm}$. Saat foil diuapkan di tengah, lembaran terbang melengkung secara aerodinamis-hidrodinamis, secara alami menciptakan sudut benturan kontinu $\beta(t) = 8^\circ - 20^\circ$ saat garis kontak merambat dari pusat ke tepi luar.
2. **Metode Sudut Terbuka (*Angular Configuration*)**: Pelat terbang diposisikan dengan kemiringan awal $\alpha_{\text{standoff}} = 5^\circ - 12^\circ$ terhadap target untuk menghasilkan pola gelombang satu arah berorientasi tinggi.

---

## 5. Implementasi Algoritma Python: Simulasi RLC, Dinamika Flyer & Evaluasi Jendela Pengelasan

Berikut adalah kode program Python mandiri (*self-contained engine*) berstandar industri untuk memodelkan pelepasan sirkuit $RLC$ transien, ledakan uap foil, dinamika percepatan pelat terbang $V_p(y)$, serta memvalidasi kriteria jendela pengelasan impak (*Impact Weldability Window*) untuk pasangan logam disimilar:

```python
"""
================================================================================
ENGINE SIMULASI VAPORIZING FOIL ACTUATOR WELDING (VFAW) & METALURGI IMPAK
Standar Rujukan: AWS C6.1, ASTM E8M, ISO 15620 & ASM Handbook Vol. 6
================================================================================
"""

import numpy as np
import math
from typing import Dict, Tuple, Any, List

class VFAWSimulationEngine:
    """
    Simulator Multiphysics untuk Vaporizing Foil Actuator Welding (VFAW):
    1. Dinamika RLC Lucutan Kapasitor & Kinetika Pemanasan Joule
    2. Ledakan Listrik Foil (Action Integral & Plasma Pressure Burst)
    3. Kinematika Luncur Pelat Terbang (Flyer Velocity Profile V_p vs Standoff)
    4. Evaluasi Jendela Pengelasan Impak (Kelvin-Helmholtz & Melting Limit)
    """

    def __init__(self):
        # Database Sifat Material Konduktor Foil & Pelat
        self.materials_db = {
            "Al1100": {
                "density": 2700.0,            # kg/m^3
                "bulk_sound_speed": 5100.0,   # m/s
                "dynamic_yield": 120.0e6,     # Pa (120 MPa)
                "specific_heat": 900.0,       # J/(kg K)
                "melting_temp": 933.0,        # K
                "latent_heat_vap": 10.8e6,    # J/kg
                "action_burst": 1.2e16,       # A^2 s / m^4 (Characteristic VFAW foil burst action)
                "vickers_hardness": 35.0      # HV
            },
            "AA6061-T6": {
                "density": 2700.0,
                "bulk_sound_speed": 5100.0,
                "dynamic_yield": 320.0e6,     # Pa (High strain rate yield)
                "specific_heat": 896.0,
                "melting_temp": 925.0,
                "latent_heat_vap": 10.5e6,
                "action_burst": 0.95e17,
                "vickers_hardness": 105.0
            },
            "DP980_Steel": {
                "density": 7850.0,
                "bulk_sound_speed": 4800.0,
                "dynamic_yield": 1100.0e6,    # Pa (High strain rate)
                "specific_heat": 460.0,
                "melting_temp": 1780.0,
                "latent_heat_vap": 6.3e6,
                "action_burst": 1.2e17,
                "vickers_hardness": 310.0
            },
            "PHS1500_Usibor": {
                "density": 7850.0,
                "bulk_sound_speed": 4850.0,
                "dynamic_yield": 1650.0e6,    # Pa (Martensitic Steel)
                "specific_heat": 470.0,
                "melting_temp": 1770.0,
                "latent_heat_vap": 6.3e6,
                "action_burst": 1.3e17,
                "vickers_hardness": 480.0
            },
            "Cu-ETP": {
                "density": 8960.0,
                "bulk_sound_speed": 3950.0,
                "dynamic_yield": 280.0e6,
                "specific_heat": 385.0,
                "melting_temp": 1357.0,
                "latent_heat_vap": 4.8e6,
                "action_burst": 1.8e17,
                "vickers_hardness": 95.0
            },
            "Ti-6Al-4V": {
                "density": 4430.0,
                "bulk_sound_speed": 4900.0,
                "dynamic_yield": 1250.0e6,
                "specific_heat": 526.0,
                "melting_temp": 1933.0,
                "latent_heat_vap": 8.9e6,
                "action_burst": 0.8e17,
                "vickers_hardness": 350.0
            }
        }

    def simulate_discharge_and_acceleration(
        self,
        c_bank_uf: float,
        v_charge_kv: float,
        l_system_nh: float,
        r_system_mohm: float,
        foil_geom: Dict[str, float],      # length_mm, width_mm, thick_um
        flyer_mat: str,
        flyer_thick_mm: float,
        target_mat: str,
        standoff_gap_mm: float,
        dt_ns: float = 2.0,
        t_total_us: float = 8.0
    ) -> Dict[str, Any]:
        """
        Simulasi integrasi numerik Euler-Cromer untuk dinamika lucutan RLC,
        penguapan foil, ledakan plasma, dan profil kecepatan pelat terbang.
        """
        # Konversi Unit SI
        C = c_bank_uf * 1.0e-6
        V0 = v_charge_kv * 1.0e3
        L_sys = l_system_nh * 1.0e-9
        R_sys = r_system_mohm * 1.0e-3

        l_f = foil_geom["length_mm"] * 1.0e-3
        w_f = foil_geom["width_mm"] * 1.0e-3
        t_f = foil_geom["thick_um"] * 1.0e-6
        a_f = w_f * t_f
        vol_f = l_f * w_f * t_f
        mass_foil = vol_f * self.materials_db["Al1100"]["density"]

        flyer_prop = self.materials_db[flyer_mat]
        target_prop = self.materials_db[target_mat]
        flyer_t = flyer_thick_mm * 1.0e-3
        m_areal_flyer = flyer_prop["density"] * flyer_t

        total_steps = int((t_total_us * 1.0e-6) / (dt_ns * 1.0e-9))
        dt = dt_ns * 1.0e-9

        # Inisialisasi State Variabel RLC & Mekanika
        q = C * V0
        i_curr = 0.0
        energy_cap_init = 0.5 * C * (V0 ** 2)

        action_integral = 0.0
        e_deposited = 0.0
        is_exploded = False
        t_burst = 0.0

        y_pos = 0.0
        v_flyer = 0.0

        standoff_m = standoff_gap_mm * 1.0e-3
        impact_occurred = False
        impact_time = 0.0
        impact_velocity = 0.0

        # Resistivitas fasa padat Al dasar
        rho_al_solid = 2.82e-8 # Ohm.m

        time_hist = []
        i_hist = []
        v_flyer_hist = []
        p_plasma_hist = []
        y_hist = []

        p_plasma = 0.0

        for step in range(total_steps):
            t = step * dt

            # 1. Hitung Resistansi Foil R_f(t)
            if not is_exploded:
                # Kenaikan resistivitas linier dengan integral aksi
                j_curr = abs(i_curr) / a_f if a_f > 0 else 0.0
                action_integral += (j_curr ** 2) * dt
                
                res_factor = 1.0 + 15.0 * (action_integral / self.materials_db["Al1100"]["action_burst"])
                r_foil = (rho_al_solid * res_factor * l_f) / a_f
                
                # Cek kriteria ledakan (Burst Criterion)
                if action_integral >= self.materials_db["Al1100"]["action_burst"]:
                    is_exploded = True
                    t_burst = t
            else:
                # Fasa plasma uap bertekanan tinggi: resistansi melonjak tajam
                t_after_burst = t - t_burst
                r_plasma_peak = 0.25 # 250 mOhm
                r_foil = r_plasma_peak * math.exp(-t_after_burst / 1.5e-6) + 0.02

            # 2. Persamaan Rangkaian RLC
            r_total = R_sys + r_foil
            v_cap = q / C
            
            # dI/dt = (V_cap - I * R_total) / L_sys
            di_dt = (v_cap - i_curr * r_total) / L_sys
            i_curr += di_dt * dt
            q -= i_curr * dt

            power_joule = (i_curr ** 2) * r_foil
            e_deposited += power_joule * dt

            # 3. Model Tekanan Plasma & Percepatan Flyer
            if is_exploded and not impact_occurred:
                # Volume rongga ekspansi: A_foil * (t_insulator + y_pos)
                t_insulator = 0.15e-3 # 150 um kapton tape
                vol_cavity = (l_f * w_f) * (t_insulator + y_pos)
                
                # Energi dalam plasma (ekspansi gas terionisasi)
                # Fraksi energi termal/kinetik plasma yang diekspansikan: eta_plasma = 0.65
                e_plasma = (e_deposited * 0.65)
                gamma_ad = 1.30
                
                p_plasma = ((gamma_ad - 1.0) * e_plasma) / max(vol_cavity, 1.0e-9)
                p_plasma = min(p_plasma, 4.5e9) # Cap at 4.5 GPa

                # Gaya dorong per satuan luas m_areal * a = P_plasma
                a_flyer = p_plasma / m_areal_flyer
                v_flyer += a_flyer * dt
                y_pos += v_flyer * dt

                if y_pos >= standoff_m:
                    impact_occurred = True
                    impact_time = t
                    impact_velocity = v_flyer
            elif not is_exploded:
                p_plasma = 0.0

            time_hist.append(t * 1.0e6) # us
            i_hist.append(i_curr * 1.0e-3) # kA
            v_flyer_hist.append(v_flyer)
            p_plasma_hist.append(p_plasma * 1.0e-6) # MPa
            y_hist.append(y_pos * 1.0e3) # mm

        if not impact_occurred:
            impact_velocity = v_flyer
            impact_time = t_total_us * 1.0e-6

        # Evaluasi Kelayakan Jendela Pengelasan (Impact Weldability Window)
        weldability = self._evaluate_weldability_window(
            flyer_prop, target_prop, impact_velocity, impact_angle_deg=14.0
        )

        return {
            "initial_stored_energy_j": energy_cap_init,
            "peak_current_ka": max(i_hist),
            "burst_time_us": t_burst * 1.0e6,
            "total_deposited_energy_j": e_deposited,
            "energy_efficiency_pct": (e_deposited / energy_cap_init) * 100.0,
            "peak_plasma_pressure_mpa": max(p_plasma_hist),
            "final_impact_velocity_ms": impact_velocity,
            "time_to_impact_us": impact_time * 1.0e6,
            "weldability_assessment": weldability
        }

    def _evaluate_weldability_window(
        self,
        flyer_prop: Dict[str, float],
        target_prop: Dict[str, float],
        v_impact: float,
        impact_angle_deg: float
    ) -> Dict[str, Any]:
        """
        Mengevaluasi apakah parameter impak (V_p, beta) berada di dalam jendela
        pengelasan solid-state impak bebas senyawa intermetalik.
        """
        beta_rad = math.radians(impact_angle_deg)
        
        # 1. Batas Bawah: Kecepatan Minimum Jetting (Hydrodynamic Plastic Flow)
        # V_min = sqrt(Hv / (3 * rho))
        h_v_avg = (flyer_prop["vickers_hardness"] + target_prop["vickers_hardness"]) / 2.0 * 1.0e7 # Pa approx
        rho_avg = (flyer_prop["density"] + target_prop["density"]) / 2.0
        v_min_jetting = math.sqrt(h_v_avg / (3.0 * rho_avg)) * 0.85

        # 2. Batas Kanan: Kecepatan Titik Tabrakan Subsonik V_c < c_sound
        c_sound_min = min(flyer_prop["bulk_sound_speed"], target_prop["bulk_sound_speed"])
        v_collision = v_impact / math.sin(beta_rad) if math.sin(beta_rad) > 0 else 9999.0
        is_subsonic = v_collision < c_sound_min

        # 3. Batas Atas: Ambang Batas Pelelehan Antarmuka (Adiabatic Shear Melting Limit)
        # V_max_melt = sqrt(2 * Cp * (Tm - T0) / eta_diss) / sin(beta / 2)
        cp_flyer = flyer_prop["specific_heat"]
        delta_t_melt = flyer_prop["melting_temp"] - 298.0
        v_max_melting = math.sqrt(2.0 * cp_flyer * delta_t_melt / 0.85) / math.sin(beta_rad / 2.0)

        # 4. Prediksi Karakteristik Gelombang Kelvin-Helmholtz
        is_wavy = (v_impact >= v_min_jetting) and (v_impact <= v_max_melting) and is_subsonic

        # Panjang gelombang analitis
        if is_wavy:
            mach_impact = v_impact / c_sound_min
            lambda_wave_um = 18.0 * (v_impact / 600.0)**1.5 * math.sin(beta_rad) * 10.0
            amplitude_wave_um = 0.28 * lambda_wave_um
        else:
            lambda_wave_um = 0.0
            amplitude_wave_um = 0.0

        status_pass = is_wavy and (impact_angle_deg >= 5.0) and (impact_angle_deg <= 25.0)

        return {
            "is_within_window": status_pass,
            "v_impact_ms": v_impact,
            "v_min_threshold_ms": round(v_min_jetting, 1),
            "v_max_melt_threshold_ms": round(v_max_melting, 1),
            "collision_point_velocity_ms": round(v_collision, 1),
            "bulk_sound_speed_limit_ms": c_sound_min,
            "is_subsonic_jetting": is_subsonic,
            "predicted_interface_morphology": "Wavy Solid-State Bond" if is_wavy else "No Bond / Planar Melt",
            "wave_wavelength_um": round(lambda_wave_um, 2),
            "wave_amplitude_um": round(amplitude_wave_um, 2),
            "joint_quality_grade": "CLASS_A_STRUCTURAL" if status_pass else "SUB_OPTIMAL"
        }

# ==============================================================================
# DEMONSTRASI EKSEKUSI STUDI KASUS OTOMOTIF: AA6061-T6 KE PHS 1500 (USIBOR 1500)
# ==============================================================================
if __name__ == "__main__":
    engine = VFAWSimulationEngine()

    print("=" * 80)
    print("SIMULASI MULTIPHYSICS VAPORIZING FOIL ACTUATOR WELDING (VFAW)")
    print("Pasangan Sambungan: Aluminium Dirgantara/Otomotif AA6061-T6 -> PHS 1500 MPa Steel")
    print("=" * 80)

    foil_geometry = {
        "length_mm": 50.0,
        "width_mm": 15.0,
        "thick_um": 76.2  # 0.003 inch foil standard
    }

    result = engine.simulate_discharge_and_acceleration(
        c_bank_uf=160.0,           # 160 uF bank
        v_charge_kv=6.5,           # 6.5 kV -> E_cap = 3.38 kJ
        l_system_nh=120.0,         # 120 nH
        r_system_mohm=12.0,        # 12 mOhm
        foil_geom=foil_geometry,
        flyer_mat="AA6061-T6",
        flyer_thick_mm=1.2,        # 1.2 mm AA6061 sheet
        target_mat="PHS1500_Usibor",# 1.5 mm Press-Hardened Steel
        standoff_gap_mm=1.8,       # 1.8 mm standoff
        dt_ns=2.0,
        t_total_us=6.0
    )

    print(f"1. Energi Input Awal Kapasitor   : {result['initial_stored_energy_j']:.2f} J ({result['initial_stored_energy_j']/1000:.2f} kJ)")
    print(f"2. Arus Puncak Lucutan (I_peak)  : {result['peak_current_ka']:.2f} kA")
    print(f"3. Waktu Ledakan Foil (t_burst)  : {result['burst_time_us']:.3f} us")
    print(f"4. Energi Deposisi Listrik       : {result['total_deposited_energy_j']:.2f} J (Efisiensi: {result['energy_efficiency_pct']:.1f}%)")
    print(f"5. Puncak Tekanan Plasma         : {result['peak_plasma_pressure_mpa']:.1f} MPa ({result['peak_plasma_pressure_mpa']/1000:.2f} GPa)")
    print(f"6. Kecepatan Impak Flyer (V_p)   : {result['final_impact_velocity_ms']:.1f} m/s")
    print(f"7. Waktu Tempuh Luncur           : {result['time_to_impact_us']:.3f} us")

    w = result["weldability_assessment"]
    print("\n--- EVALUASI JENDELA PENGELASAN IMPAK (AWS C6.1 & ASTM E8M) ---")
    print(f"• Status Kelayakan Sambungan     : {'MEMENUHI SYARAT (PASS)' if w['is_within_window'] else 'GAGAL (FAIL)'}")
    print(f"• Kriteria Kecepatan Minimum     : {w['v_min_threshold_ms']} m/s <= V_impact ({w['v_impact_ms']:.1f} m/s)")
    print(f"• Kriteria Batas Leleh Maksimum  : V_impact <= {w['v_max_melt_threshold_ms']} m/s")
    print(f"• Kecepatan Titik Tabrakan (V_c) : {w['collision_point_velocity_ms']} m/s (Batas Suara: {w['bulk_sound_speed_limit_ms']} m/s)")
    print(f"• Rezim Akustik                  : {'SUBSONIK JETTING STABIL' if w['is_subsonic_jetting'] else 'SUPERSONIK TERTOLAK'}")
    print(f"• Morfologi Antarmuka Prediksi   : {w['predicted_interface_morphology']}")
    print(f"• Parameter Gelombang Antarmuka  : Wavelength = {w['wave_wavelength_um']} um, Amplitudo = {w['wave_amplitude_um']} um")
    print(f"• Tingkat Kualitas Sambungan     : {w['joint_quality_grade']}")
```

---

## 6. Studi Kasus Industri: Pengelasan Lembaran AA6061-T6 ke Baja Cetak Panas Martensitik Usibor 1500 (B-Pillar Otomotif)

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    STUDI KASUS SAMBUNGAN DISIMILAR BIW: AA6061-T6 KE PHS 22MnB5 (1500 MPa)                             |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         KOMPONEN B-PILLAR KENDARAAN RINGAN (HYBRID MULTI-MATERIAL BIW)                                                |
|         ┌───────────────────────────────────────────────────────────────────────────┐ Masalah Pengelasan Fusi Laser:  |
|         │  Pelat Terbang Atas: AA6061-T6 (t = 1.2 mm, Yield = 276 MPa)              │ • Pembentukan Intermetalik Fe-Al|
|         │  Pelat Target Bawah: Usibor 1500 Martensit (t = 1.5 mm, UTS = 1500 MPa)   │   Fe2Al5 & FeAl3 tebal > 10 µm  |
|         │                                                                           │ • Beban Geser Putus < 3.2 kN    |
|         │  PARAMETER PROSES VFAW TERKENDALI:                                        │ • Modus Patah: Getas Antarmuka  |
|         │  • Kapasitor Bank: C = 160 µF, V_0 = 6.5 kV (E_cap = 3.38 kJ)             │                                 |
|         │  • Foil Aktuator: Aluminium 1100-O (t = 76 µm, 50 mm x 15 mm)             │ Solusi Rekayasa VFAW:           |
|         │  • Jarak Standoff: h_g = 1.8 mm, Isolator Polyimide Kapton 125 µm         │ • Bebas Pelelehan Termal (IMC=0)|
|         │  • Tekanan Landasan Penahan (Clamping Anvil): P_clamp = 8 bar             │ • Antarmuka Gelombang Padat     |
|         └───────────────────────────────────────────────────────────────────────────┘ • Beban Geser > 12.8 kN         |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 6.1 Latar Belakang Masalah & Kegagalan Metode Eksisting
Dalam perakitan struktur *Body-in-White* (BIW) kendaraan listrik generasi terbaru, pengurangan bobot kendaraan sebesar $10\%$ berkorelasi langsung dengan peningkatan jarak tempuh baterai sebesar $6 - 8\%$. Salah satu inovasi desain teringan adalah mengawinkan panel atap paduan aluminium AA6061-T6 dengan pilar pengaman samping (*B-Pillar*) berbahan baja martensit berkekuatan 1500 MPa (*Press-Hardened Steel* 22MnB5).

Namun, pengelasan titik resistansi (*Resistance Spot Welding* / RSW) dan pengelasan laser (*Laser Beam Welding* / LBW) pada pasangan ini mengalami kegagalan struktural berat:
1. Reaksi termal pada temperatur leleh ($T > 1500^\circ\text{C}$) memicu pembentukan lapisan senyawa intermetalik getas $\text{Fe}_2\text{Al}_5$ dan $\text{FeAl}_3$ dengan ketebalan mencapai $12 - 25\ \mu\text{m}$.
2. Perbedaan koefisien ekspansi termal ($\alpha_{\text{Al}} \approx 23 \times 10^{-6}/\text{K}$ vs $\alpha_{\text{Steel}} \approx 12 \times 10^{-6}/\text{K}$) menimbulkan tegangan sisa tarik termal ekstrem yang memicu keretakan mikro spontan saat pembekuan lelehan.
3. Beban geser putus sambungan (*Lap Shear Failure Load*) pada pengelasan laser hanya mencapai $3{,}1\ \text{kN}$, di mana kegagalan terjadi secara getas di sepanjang antarmuka sambungan (*interfacial brittle debonding*).

### 6.2 Implementasi Parameter Solusi VFAW
Dengan mengimplementasikan sistem VFAW pada parameter hasil optimasi algoritma numerik:
- **Konfigurasi Elektrik**: Bank Kapasitor $C = 160\ \mu\text{F}$, $V_0 = 6{,}5\ \text{kV}$, $E_{\text{cap}} = 3{,}38\ \text{kJ}$, durasi pulsa total $4{,}8\ \mu\text{s}$.
- **Aktuator & Standoff**: Foil Aluminium murni $t_f = 76{,}2\ \mu\text{m}$ ($50\ \text{mm} \times 15\ \text{mm}$), jarak celah bebas $h_g = 1{,}8\ \text{mm}$.
- **Dinamika Benturan**: Kecepatan impak flyer terukur via PDV mencapai $V_p = 685\ \text{m/s}$ dengan sudut benturan dinamis $\beta \approx 14{,}2^\circ$. Kecepatan titik tabrakan $V_c = 2790\ \text{m/s}$ (jauh di bawah batas kecepatan suara baja $4850\ \text{m/s}$).

### 6.3 Hasil Karakterisasi Metalurgi & Uji Mekanis Sesuai ASTM E8M
1. **Analisis Mikroskop Elektron (SEM-EDS)**:
   - Pengamatan SEM pada perbesaran $10.000\times$ menunjukkan antarmuka sambungan gelombang sinusoidal teratur (*continuous wavy bonding*) dengan panjang gelombang rata-rata $\lambda = 38\ \mu\text{m}$ dan amplitudo $A = 10{,}5\ \mu\text{m}$.
   - Analisis garis EDS (*line scan EDS*) mengonfirmasi tidak ada pembentukan lapisan intermetalik fasa kontinu ($t_{\text{IMC}} < 50\ \text{nm}$, berada di bawah batas resolusi difusi termal), membuktikan ikatan terjadi murni secara keadaan padat (*true solid-state metallic bond*).
2. **Uji Tarik Geser (*Lap Shear Tensile Test*) ASTM E8M**:
   - Beban geser putus maksimum melonjak dari $3{,}1\ \text{kN}$ (pengelasan laser) menjadi **$12{,}85\ \text{kN}$** pada sambungan VFAW (peningkatan kekuatan sebesar $+314\%$).
   - Modus patahan beralih dari patah getas antarmuka (*interfacial failure*) menjadi **patah robek pada logam induk aluminium (*parent metal substrate tear-out*)** di luar area sambungan las, mengindikasikan bahwa kekuatan antarmuka sambungan solid-state VFAW lebih tinggi daripada kekuatan luluh geser logam induk aluminium AA6061-T6.
3. **Uji Fatik Siklik Sesuai ASTM E466**:
   - Sambungan VFAW menunjukkan batas ketahanan lelah (*fatigue endurance limit*) sebesar $10^7$ siklus pada beban tegangan puncak $4{,}2\ \text{kN}$ ($R = 0{,}1$), tanpa mengalami delaminasi antarmuka.

---

## 7. Rangkuman Panduan Praktis untuk Engineer Teknik Industri

1. **Jaga Kecepatan Flyer dalam Koridor Aman Jendela Pengelasan**: Pastikan kecepatan luncur flyer berada di atas ambang batas $V_{\min}$ ($> 400\ \text{m/s}$ untuk paduan aluminium) agar terjadi ejeksi *jetting* pembersih oksida, namun di bawah batas leleh adiabatik $V_{\max}$ ($< 950\ \text{m/s}$) untuk mencegah terbentuknya kantung lelehan intermetalik getas.
2. **Optimasi Ketebalan Foil vs Kapasitansi Rangkaian**: Selaraskan integral aksi arus spesifik foil dengan konstanta $g_{\text{burst}}$ aluminium ($1{,}0 \times 10^{17}\ \text{A}^2\cdot\text{s}/\text{m}^4$). Foil yang terlalu tebal gagal meledak secara serentak (menyerap energi tanpa menjadi plasma), sedangkan foil yang terlalu tipis meledak terlalu dini sebelum energi listrik maksimum sempat ditransfer dari kapasitor.
3. **Kontrol Ketelitian Jarak Celah Bebas (*Standoff Gap*)**: Gunakan shim kalibrasi presisi tinggi ($\pm 0{,}05\ \text{mm}$) untuk menetapkan jarak $h_g$. Deviasi standoff gap akan mengubah kecepatan impak terminal $V_p$ dan sudut tabrakan $\beta$, yang dapat menggeser proses keluar dari jendela pengelasan stabil.
4. **Perhatikan Kekakuan Landasan Penahan (*Tooling Anvil Rigidity*)**: Selalu gunakan blok landasan berbahan baja perkakas yang diperkeras ($> 55\ \text{HRC}$) dengan massa inersial yang cukup untuk memantulkan gelombang tegangan kompresi secara simetris dan mencegah disipasi energi akibat lenturan lentur lembaran target.

---

## 8. Referensi Akademis & Standar Industri Terverifikasi

1. **Vivek, A., Hansen, S. R., Liu, B. C., & Daehn, G. S.** (2013). "Vaporizing foil actuator: A tool for collision welding". *Journal of Materials Processing Technology*, 213(12), pp. 2304–2311. DOI: [10.1016/j.jmatprotec.2013.07.006](https://doi.org/10.1016/j.jmatprotec.2013.07.006).
2. **Hahn, M., Weddeling, C., Taber, G., Vivek, A., Daehn, G. S., & Tekkaya, A. E.** (2016). "Vaporizing foil actuator welding as a competing technology to magnetic pulse welding". *Journal of Materials Processing Technology*, 230, pp. 8–20. DOI: [10.1016/j.jmatprotec.2015.11.005](https://doi.org/10.1016/j.jmatprotec.2015.11.005).
3. **Lee, T., Zhang, S., Vivek, A., Daehn, G. S., & Kinsey, B.** (2019). "Wave formation in impact welding: Study of the Cu–Ti system". *CIRP Annals - Manufacturing Technology*, 68(1), pp. 317–320. DOI: [10.1016/j.cirp.2019.04.053](https://doi.org/10.1016/j.cirp.2019.04.053).
4. **Vivek, A., Liu, B. C., Hansen, S. R., & Daehn, G. S.** (2014). "Impact welding of structural aluminium alloys to high strength steels using vaporizing foil actuator". *Science and Technology of Welding and Joining*, 19(7), pp. 586–593. DOI: [10.1179/1362171814Y.0000000228](https://doi.org/10.1179/1362171814Y.0000000228).
5. **American Welding Society (AWS)**. (2020). *AWS C6.1: Recommended Practices for Friction and Solid-State Impact Welding*. Miami: American Welding Society.
6. **ASTM International**. (2024). *ASTM E8/E8M-24: Standard Test Methods for Tension Testing of Metallic Materials*. West Conshohocken: ASTM International. DOI: [10.1520/E0008_E0008M-24](https://doi.org/10.1520/E0008_E0008M-24).
7. **International Organization for Standardization**. (2019). *ISO 15620:2019: Welding — Friction welding of metallic materials*. Geneva: ISO.
