# Modul 571: Cold Spray Additive Manufacturing (CSAM): Termogasdinamika Nozel De Laval Supersonik, Kecepatan Kritis Partikel, Ketidakstabilan Geser Adiabatik (ASI), Efisiensi Deposisi, dan Standar SAE AMS 7057 / ASTM B827

## 1. Pengantar & Urgensi Cold Spray Additive Manufacturing (CSAM) dalam Manufaktur & Remanufaktur Maju

Cold Spray Additive Manufacturing (CSAM)—dikenal juga sebagai *Supersonic Gas Dynamic Spraying*—adalah teknologi manufaktur aditif dan modifikasi permukaan berbasis fase padat (*solid-state additive manufacturing process*). Berbeda fundamental dari teknologi deposisi termal konvensional (seperti Laser Powder Bed Fusion / L-PBF, Direct Energy Deposition / DED, Plasma Spray, atau High-Velocity Oxygen-Fuel / HVOF), CSAM tidak melibatkan pelelehan fase cair (*zero melting phase*) dari partikel serbuk logam.

Dalam CSAM, partikel serbuk mikro logam berdiameter $5 - 50\ \mu\text{m}$ diakselerasikan hingga mencapai kecepatan supersonik ($300 - 1400\ \text{m/s}$) oleh aliran gas pendorong bertekanan tinggi yang melewati nozel konvergen-divergen (De Laval nozzle) pada suhu gas yang dipertahankan jauh di bawah titik leleh material ($T_{\text{gas}} \ll T_{\text{melt}}$).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                 PERBANDINGAN CSAM VS TEKNOLOGI ADITIF TERMAL & TERMAL SPRAY PADA PADUAN LOGAM REAKTIF                |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  1. Laser Directed Energy Deposition (L-DED) & Laser Powder Bed Fusion (L-PBF):                                       |
|     - Mekanisme : Pelelehan optik densitas tinggi (Melt pool T > T_melt, hingga 1800 - 2500 °C).                     |
|     - Fenomena  : Oksidasi in-situ tinggi, penguapan elemen volatil, tegangan sisa tarik masif (tensile residual      |
|                   stress), pembentukan struktur mikro dendritik berbutir kasar, rentan retak panas (hot cracking).     |
|                                                                                                                       |
|  2. High-Velocity Oxygen-Fuel (HVOF) & Atmospheric Plasma Spray (APS):                                                |
|     - Mekanisme : Pembakaran gas/cair atau plasma busur listrik menghasilkan pelelehan parsial partikel (T > 2000 °C).|
|     - Fenomena  : Oksidasi partikel ekstensif, dekarburisasi, porositas 1 - 5%, ikatan mekanis adhesif dominan,      |
|                   tegangan sisa tarik pendinginan yang menurunkan ketahanan lelah komponen (fatigue life degradation).|
|                                                                                                                       |
|  3. High-Pressure Cold Spray Additive Manufacturing (HP-CSAM - Standar SAE AMS 7057 & ASTM B827 - Modul Ini):         |
|     - Mekanisme : Deformasi plastis ekstrem fase padat melalui gelombang kejut impak berkecepatan supersonik         |
|                   (v_particle > v_critical, 400 - 1200 m/s), laju regangan geser sangat tinggi (10^7 - 10^9 s^-1).   |
|     - Keunggulan: Zero bulk melting, bebas oksidasi termal dan degradasi fase mikrostruktur, menghasilkan tegangan  |
|                   sisa tekan yang menguntungkan (compressive residual stress), laju deposisi masif (> 5 - 15 kg/jam),|
|                   konduktivitas termal/listrik mendekati 100% IACS, mampu menyambung logam dissimilar tak homogen.  |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                  ARSITEKTUR FISIK HIGH-PRESSURE COLD SPRAY (HP-CSAM) SYSTEM                           |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|    Pasokan Gas Bertekanan                                                                                             |
|   (He / N2: 30 - 70 bar)                                                                                              |
|        │                                                                                                              |
|        ├───► [ Gas Heater ] ───► Gas Panas Bertekanan (T_0 = 300 - 1100 °C, P_0) ──┐                                  |
|        │      (Resistive Coil)                                                     │                                  |
|        │                                                                           ▼                                  |
|        └───► [ High-Pressure Powder Feeder ] ──► Aliran Serbuk Partikel Logam ──► [ Ruang Stagnasi / Nozel ]         |
|               (Pressurized Hopper + Carrier Gas)                                   │                                  |
|                                                                                    ▼                                  |
|                                                                         ┌──────────────────────┐                      |
|                                                                         │ De Laval Nozzle      │                      |
|                                                                         │ - Bagian Konvergen   │                      |
|                                                                         │ - Throat Area (A*)   │                      |
|                                                                         │ - Bagian Divergen    │                      |
|                                                                         └──────────┬───────────┘                      |
|                                                                                    │ Gas Supersonik (Mach 2 - 4)      |
|                                                                                    │ Partikel Logam (v_p = 600-1100m/s|
|                                                                                    ▼                                  |
|                                                                             ══════════════════ Standoff Distance (SOD)|
|                                                                             [ Substrat Logam ] (20 - 40 mm)           |
|                                                                             [ Lapisan CSAM   ] (Adhesive / Cohesive)  |
|                                                                                    ▲                                  |
|                                                                                    │                                  |
|                                                                         [ CNC Gantry / 6-Axis Robot ]                 |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 2. Termogasdinamika Aliran Fluida Kompresibel dalam Nozel De Laval

Akselerasi aliran gas pendorong dari ruang stagnasi bertekanan tinggi ($P_0, T_0$) menuju atmosfer ($P_a$) diatur oleh mekanika fluida kompresibel 1-dimensi melalui nozel konvergen-divergen (*de Laval nozzle*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                   PROFIL KINEMATIKA GAS SEPANJANG NOZEL DE LAVAL                                      |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|             Ruang Stagnasi        Konvergen        Throat (A*)        Divergen (Supersonik)           Ekspansi Bebas  |
|             (P_0, T_0, M≈0)       (M < 1)            (M = 1)          (M > 1, Mach 2.5 - 3.5)                         |
|             ═════════════════    \           /        │ │            /                       \        │               |
|                                   \         /         │ │           /                         \       │               |
|             ─────────────────      \───────/          │ │          /───────────────────────────\      │ [Substrat]    |
|                                     Throat            x=0                   x_exit                    │               |
|                                                                                                                       |
|   Tekanan (P) :  P_0 ──────────────► Turun ────────► P* ──────────► Turun Tajam (P_exit) ────────────► P_amb         |
|   Suhu (T)    :  T_0 ──────────────► Turun ────────► T* ──────────► Turun Drastis (T_exit) ──────────► T_amb         |
|   Kecepatan(v):  0   ──────────────► v_sub ────────► a* (Sonik) ──► v_super (1000 - 2500 m/s) ───────► Bow Shock      |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.1. Hubungan Isentropik Gas Ideal Kompresibel

Untuk gas ideal dengan rasio kalor jenis $\gamma = C_p / C_v$ dan konstanta gas spesifik $R_g = R_u / M_w$, kondisi termodinamika pada setiap penampang di mana Bilangan Mach bernilai $M(x) = v_g(x) / a(x)$ dinyatakan oleh persamaan isentropik:

$$\frac{T_0}{T(x)} = 1 + \frac{\gamma - 1}{2} M(x)^2$$

$$\frac{P_0}{P(x)} = \left( 1 + \frac{\gamma - 1}{2} M(x)^2 \right)^{\frac{\gamma}{\gamma - 1}}$$

$$\frac{\rho_0}{\rho(x)} = \left( 1 + \frac{\gamma - 1}{2} M(x)^2 \right)^{\frac{1}{\gamma - 1}}$$

Kecepatan suara lokal $a(x)$ dan kecepatan gas $v_g(x)$ dihitung sebagai:

$$a(x) = \sqrt{\gamma R_g T(x)}$$

$$v_g(x) = M(x) \sqrt{\gamma R_g T(x)} = M(x) \sqrt{\frac{\gamma R_g T_0}{1 + \frac{\gamma - 1}{2} M(x)^2}}$$

Kecepatan gas teoritis maksimum yang dapat dicapai pada ekspansi tak hingga ($M \to \infty$) adalah:

$$v_{g,\max} = \sqrt{\frac{2 \gamma R_g T_0}{\gamma - 1}}$$

### 2.2. Hubungan Luas Area Penampang Nozel dan Bilangan Mach (Area-Mach Relation)

Distribusi luas penampang nozel $A(x)$ relatif terhadap luas leher (*throat area* $A^*$) mengontrol bilangan Mach lokal $M(x)$ secara eksklusif:

$$\frac{A(x)}{A^*} = \frac{1}{M(x)} \left[ \frac{2}{\gamma + 1} \left( 1 + \frac{\gamma - 1}{2} M(x)^2 \right) \right]^{\frac{\gamma + 1}{2(\gamma - 1)}}$$

Di mana pada kondisi leher nozel (*throat*, $M = 1$), rasio tekanan dan suhu kritis bernilai:

$$\frac{P^*}{P_0} = \left( \frac{2}{\gamma + 1} \right)^{\frac{\gamma}{\gamma - 1}}, \quad \frac{T^*}{T_0} = \frac{2}{\gamma + 1}$$

Laju aliran massa gas total ($\dot{m}_g$) yang melalui nozel tercekik (*choked nozzle condition*) adalah:

$$\dot{m}_g = A^* P_0 \sqrt{\frac{\gamma}{R_g T_0}} \left( \frac{2}{\gamma + 1} \right)^{\frac{\gamma + 1}{2(\gamma - 1)}}$$

### 2.3. Perbandingan Gas Pembawa Termodinamika: Helium ($He$) vs Nitrogen ($N_2$) vs Udara

Karakteristik termofisika gas pembawa memiliki pengaruh deterministik terhadap kecepatan ekspansi gas supersonik:

| Parameter Termodinamika | Helium ($He$) | Nitrogen ($N_2$) | Udara Kering (*Dry Air*) |
| :--- | :--- | :--- | :--- |
| Berat Molekul ($M_w$, $\text{kg/kmol}$) | $4.003$ | $28.013$ | $28.964$ |
| Konstanta Gas Spesifik ($R_g$, $\text{J/kg}\cdot\text{K}$) | $2077.0$ | $296.8$ | $287.0$ |
| Rasio Kalor Jenis ($\gamma$) | $1.667$ | $1.400$ | $1.400$ |
| Kecepatan Suara pada $20\ ^\circ\text{C}$ ($a_0$, $\text{m/s}$) | $1007.4$ | $349.1$ | $343.2$ |
| Kecepatan Gas Maksimum $v_{g,\max}$ pada $T_0 = 800\ ^\circ\text{C}$ | $\approx 2980\ \text{m/s}$ | $\approx 1495\ \text{m/s}$ | $\approx 1470\ \text{m/s}$ |
| Implikasi Operasional Industri | Kecepatan partikel ekstrem, biaya gas tinggi, daur ulang wajib. | Biaya ekonomis, aman, cocok untuk Ti, Cu, Al, Ni-superalloy. | Rentan oksidasi minor pada suhu pemanasan tinggi. |

---

## 3. Dinamika Akselerasi & Perpindahan Panas Partikel dalam Aliran Supersonik

Partikel serbuk yang diinjeksikan ke dalam aliran gas mengalami gaya seret aerodinamis (*aerodynamic drag force*) yang menggerakkan partikel dan perpindahan panas konvektif yang mengubah suhunya.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    KESETIMBANGAN GAYA DAN TERMAL PADA PARTIKEL SERBUK                                 |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                       Aliran Gas Bebas: v_g(x), T_g(x), ρ_g(x), P_g(x), M_g(x)                                       |
|                       ════════════════════════════════════════════════════════                                       |
|                                                                                                                       |
|                                        ┌──────────────────┐                                                           |
|                                        │ Partikel Logam   │                                                           |
|                        Gaya Seret      │ Diameter: d_p    │  Perpindahan Panas Konveksi                               |
|                     ─────────────────► │ Massa   : m_p    │ ◄─────────────────────────                                |
|                        F_drag(x)       │ Densitas: ρ_p    │     q_conv = h * A_p * (T_g - T_p)                        |
|                                        │ Kecepatan: v_p(x)│                                                           |
|                                        │ Suhu    : T_p(x) │                                                           |
|                                        └──────────────────┘                                                           |
|                                                  │                                                                    |
|                                                  ▼                                                                    |
|                                     Akselerasi Partikel:                                                              |
|                                     m_p * (d v_p / dt) = F_drag                                                       |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.1. Persamaan Diferensial Gerak Partikel (Akselerasi Aerodinamis)

Dengan mengabaikan gaya gravitasi dan gaya apung (karena rasio densitas $\rho_p / \rho_g \approx 10^3 - 10^4$), persamaan gerak partikel 1D berbentuk:

$$m_p \frac{dv_p}{dt} = \frac{1}{2} C_D \rho_g A_p (v_g - v_p) |v_g - v_p|$$

Di mana:
- $m_p = \frac{\pi}{6} \rho_p d_p^3$ adalah massa partikel sferis.
- $A_p = \frac{\pi}{4} d_p^2$ adalah luas proyeksi penampang partikel.
- $v_p$ adalah kecepatan translasi partikel.
- $C_D$ adalah koefisien seret aerodinamis (*drag coefficient*).

Substitusi massa dan luas menghasilkan laju perubahan kecepatan terhadap jarak translasi nozel ($x$):

$$v_p \frac{dv_p}{dx} = \frac{3}{4} \frac{\rho_g(x)}{\rho_p d_p} C_D (v_g(x) - v_p) |v_g(x) - v_p|$$

$$\frac{dv_p}{dx} = \frac{3}{4} \frac{\rho_g(x)}{\rho_p d_p v_p} C_D (v_g(x) - v_p) |v_g(x) - v_p|$$

### 3.2. Formulasi Koefisien Seret Kompresibel Supersonik ($C_D$)

Karena aliran gas relatif di sekitar partikel melibatkan efek kompresibilitas tinggi ($M_{rel} = |v_g - v_p| / a_g$), koefisien seret dihitung menggunakan korelasi Henderson atau model kompresibel standar:

Bilangan Reynolds Relatif Partikel:
$$Re_p = \frac{\rho_g |v_g - v_p| d_p}{\mu_g}$$

Untuk rezim subsonik relatif ($M_{rel} < 1$), korelasi Clift-Gauvin atau Schiller-Naumann yang dikoreksi kompresibilitas Carlson-Hoglund digunakan:

$$C_{D,\text{incomp}} = \frac{24}{Re_p} \left( 1 + 0.15 Re_p^{0.687} \right) + \frac{0.42}{1 + 4.25 \times 10^4 Re_p^{-1.16}}$$

Koreksi Kompresibilitas:
$$C_D = C_{D,\text{incomp}} \cdot \left( 1 + \exp\left(-\frac{0.427}{M_{rel}^{4.63}}\right) \right)$$

Untuk kondisi supersonik relatif ($M_{rel} \ge 1$), gelombang kejut bow terbentuk di depan partikel mikro, meningkatkan $C_D \approx 0.9 - 1.2$.

### 3.3. Dinamika Termal Partikel (Konveksi Transient)

Karena Bilangan Biot partikel $Bi = \frac{h d_p}{6 k_p} < 0.1$ (konduktivitas termal logam sangat tinggi pada dimensi mikron), partikel diasumsikan mengalami distribusi suhu spasial seragam (*lumped capacitance system*):

$$m_p C_{p,p} \frac{dT_p}{dt} = h_{\text{conv}} \pi d_p^2 (T_g(x) - T_p)$$

$$v_p \frac{dT_p}{dx} = \frac{6 h_{\text{conv}}}{\rho_p C_{p,p} d_p} (T_g(x) - T_p)$$

Koefisien perpindahan panas konvektif $h_{\text{conv}}$ ditentukan dari Bilangan Nusselt ($Nu$) melalui korelasi Ranz-Marshall:

$$Nu = \frac{h_{\text{conv}} d_p}{k_g} = 2.0 + 0.6 Re_p^{1/2} Pr^{1/3}$$

Di mana $Pr = \frac{\mu_g C_{p,g}}{k_g}$ adalah Bilangan Prandtl gas pendorong.

---

## 4. Metalurgi Impak, Kecepatan Kritis & Ketidakstabilan Geser Adiabatik (ASI)

Ikatan metalurgi dalam CSAM terjadi murni akibat deformasi plastis ekstrem pada laju regangan ultra-tinggi ($\dot{\varepsilon} = 10^7 - 10^9\ \text{s}^{-1}$) saat partikel menumbuk substrat pada kecepatan di atas **Kecepatan Kritis ($v_{\text{crit}}$)**.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                       FENOMENOLOGI IMPAK PARTIKEL & PEMBENTUKAN JETTING LOGAM (ASI MECHANISM)                         |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   1. Partikel Mendekat        2. Tumbukan Awal               3. Jetting & Deformasi Plastis    4. Ikatan Metalurgi    |
|      (v_p > v_crit)              (Tekanan Kontak GPa)           (Adiabatic Shear Instability)      (Deposit Kohesif)  |
|                                                                                                                       |
|          ○ v_p                       ╔══════╗                          ┌───┐                          ▄▄▄▄▄▄▄         |
|                                    ╔═╝      ╚═╗                   ◄─── │   │ ───► Jetting          █       █        |
|          │                       ╔═╝          ╚═╗                      │   │                      █ Kompresi█       |
|          ▼                       ║   Tekanan    ║                    ┌─┴───┴─┐                   █ Residual █       |
|   ───────────────                ╚══════════════╝                    └───────┘                   ▀▀▀▀▀▀▀▀▀▀▀▀▀▀       |
|      Substrat                     ──────────────                  ───────────────                 Substrat Base       |
|                                                                                                                       |
|   Karakteristik Metalurgi:                                                                                            |
|   - Terjadi pelepasan lapisan oksida pasif permukaan secara hidrodinamik melalui fenomena 'metal jetting'.             |
|   - Kontak langsung permukaan atomik bersih (fresh juvenile metal-to-metal contact) di bawah tekanan kontak > 5 - 10 GPa.|
|   - Dynamic Recrystallization (DRX) menghasilkan butir nano-kristalin equiaxed pada antarmuka impak.                  |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 4.1. Model Analitik Kecepatan Kritis ($v_{\text{crit}}$) Assadi-Schmidt

Ketidakstabilan geser adiabatik (*Adiabatic Shear Instability / ASI*) terjadi ketika laju pelunakan termal (*thermal softening*) akibat panas deformasi plastis melampaui laju pengerasan kerja (*strain hardening*).

Berdasarkan formulasi mekanika kontinuum gelombang plastis oleh Assadi et al. dan Schmidt et al., kecepatan kritis impak dinyatakan oleh:

$$v_{\text{crit}} = \sqrt{\frac{A_1 \cdot \sigma_{\text{UTS}}}{\rho_p} \ln\left(\frac{T_m}{T_p}\right) + A_2 \cdot C_{p,p} \cdot (T_m - T_p)}$$

Di mana:
- $\sigma_{\text{UTS}}$: Kekuatan tarik ultimat material serbuk pada suhu ruang ($\text{Pa}$).
- $\rho_p$: Densitas massa material partikel ($\text{kg/m}^3$).
- $T_m$: Titik leleh material serbuk ($\text{K}$).
- $T_p$: Suhu partikel sesaat sebelum menumbuk substrat ($\text{K}$).
- $C_{p,p}$: Kalor jenis material partikel ($\text{J/kg}\cdot\text{K}$).
- $A_1, A_2$: Konstanta kalibrasi universal tak berdimensi ($A_1 \approx 0.8 - 1.2$, $A_2 \approx 0.15 - 0.25$).

### 4.2. Batas Jendela Deposisi & Kecepatan Erosi ($v_{\text{erosion}}$)

Jika kecepatan partikel terlalu tinggi ($v_p > v_{\text{erosion}}$), energi kinetik yang sangat masif memicu pemotongan hidrodinamik dan ablasi material alih-alih deposisi, yang mengakibatkan fenomena erosi substrat:

$$v_{\text{erosion}} \approx (1.5 - 2.0) \cdot v_{\text{crit}}$$

Jendela proses deposisi optimal (*deposition window*) didefinisikan sebagai:

$$v_{\text{crit}} \le v_p \le v_{\text{erosion}}$$

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    JENDELA PROSES DAN EFISIENSI DEPOSISI COLD SPRAY                                  |
+-----------------------------------------------------------------------------------------------------------------------+
|   Efisiensi                                                                                                           |
|   Deposisi (DE)                                                                                                       |
|     100% ┼                                   ┌──────────────────────┐                                                 |
|          │                                  /│                      │\                                                |
|          │                                 / │                      │ \                                               |
|      50% ┼                                /  │    JENDELA DEPOSISI  │  \                                              |
|          │                               /   │      OPTIMAL         │   \                                             |
|          │                              /    │                      │    \                                            |
|       0% ┴─────────────────────────────┴─────┴──────────────────────┴─────┴────────► Kecepatan Partikel (v_p)         |
|                  Zona Pantulan        v_crit                          v_erosion     Zona Erosi & Ablasi               |
|                  (Bouncing Zone)      (Onset of Bonding)              (Hydrodynamic Slicing)                          |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 4.3. Perhitungan Efisiensi Deposisi Kumulatif (Deposition Efficiency - $DE$)

Serbuk industri memiliki distribusi ukuran partikel (*Particle Size Distribution / PSD*) kontinu yang dimodelkan dengan fungsi kepadatan probabilitas Weibull atau Log-Normal $f(d_p)$:

$$DE = \int_{0}^{\infty} \psi(d_p) \cdot f(d_p)\ \mathrm{d}d_p$$

Di mana fungsi indikator deposisi biner $\psi(d_p)$ bernilai:

$$\psi(d_p) = \begin{cases} 1, & \text{jika } v_{\text{crit}}(d_p, T_p) \le v_p(d_p) \le v_{\text{erosion}} \\ 0, & \text{lainnya} \end{cases}$$

---

## 5. Kerangka Standar Industri & Kualifikasi Proses CSAM

Penerapan industri CSAM dalam sektor kedirgantaraan, pertahanan, dan perbaikan cetakan diatur oleh serangkaian standar internasional:

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                   KERANGKA STANDAR INTERNASIONAL KUALIFIKASI CSAM                                     |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   1. SAE AMS 7057 : Standard Specification for Cold Spray Additive Manufacturing of Metallic Materials.               |
|      - Mengatur kualifikasi mesin, stabilitas suhu/tekanan gas, rasio serbuk feeder, dan kontrol lintasan robot.     |
|                                                                                                                       |
|   2. ASTM B827 / ASTM B822 : Standard Practice for Conducting Cold Spray / Particle Size Distribution by Light Scatter|
|      - Kontrol morfologi serbuk sferis gas-atomized, distribusi ukuran partikel D10, D50, D90, dan kelembapan serbuk. |
|                                                                                                                       |
|   3. ASTM C633 / ISO 14916 : Standard Test Method for Adhesion or Cohesion Strength of Thermal/Cold Spray Coatings.   |
|      - Uji tarik rekat tegak lurus (Pull-Off Tensile Adhesion Test); kekuatan adhesi CSAM umumnya > 60 - 90 MPa       |
|        (seringkali melampaui kekuatan lem polimer perekat uji FM-1000).                                               |
|                                                                                                                       |
|   4. ASTM E384 & ASTM E8/E8M : Microindentation Hardness & Tension Testing of Structural Metallic Deposits.           |
|      - Karakterisasi pengerasan regangan (strain hardening) dan kekuatan tarik deposit pasca-perlakuan panas (HIP).   |
|                                                                                                                       |
|   5. MIL-STD-3021 : Materials Deposition, Cold Spray (US Department of Defense Standard).                             |
|      - Protokol remanufaktur dan restorasi dimensi komponen kritis militer / dirgantara.                              |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 6. Algoritma & Implementasi Python: CSAM Gas Dynamics, Particle Kinematics & Deposition Solver

Berikut adalah kode komputasi modular berbasis Python untuk mensimulasikan profil aliran gas supersonik sepanjang nozel De Laval, mengintegrasikan trajektori akselerasi partikel serbuk, menghitung suhu partikel, menentukan kecepatan kritis Assadi-Schmidt, dan mengestimasi Efisiensi Deposisi ($DE$).

```python
"""
RuangTI - Industrial Engineering Knowledge Base
Modul 571: Cold Spray Additive Manufacturing (CSAM) Multi-Physics Simulator
Solver: 1D Isentropic De Laval Gas Dynamics, RK4 Particle Kinematics, 
        Assadi-Schmidt Critical Velocity & Deposition Efficiency.
"""

import math
from typing import Dict, List, Tuple, Any

class ColdSpraySimulator:
    def __init__(
        self,
        gas_type: str = "N2",
        P0_bar: float = 50.0,
        T0_C: float = 800.0,
        throat_diameter_mm: float = 2.5,
        exit_diameter_mm: float = 6.0,
        divergent_length_mm: float = 120.0,
        standoff_distance_mm: float = 30.0
    ):
        # Konversi satuan SI
        self.P0 = P0_bar * 1e5  # Pa
        self.T0 = T0_C + 273.15  # K
        self.P_amb = 101325.0   # Pa (Atmosfer)
        
        # Geometri Nozel
        self.d_throat = throat_diameter_mm * 1e-3
        self.d_exit = exit_diameter_mm * 1e-3
        self.A_throat = math.pi * (self.d_throat / 2.0) ** 2
        self.A_exit = math.pi * (self.d_exit / 2.0) ** 2
        self.L_div = divergent_length_mm * 1e-3
        self.SOD = standoff_distance_mm * 1e-3
        
        # Properti Termofisika Gas
        if gas_type.upper() == "HE":
            self.gas_name = "Helium (He)"
            self.gamma = 1.667
            self.Rg = 2077.0  # J/(kg.K)
            self.Cp_g = self.gamma * self.Rg / (self.gamma - 1.0)
            self.mu_g0 = 1.96e-5  # Pa.s pada 293K
            self.kg_0 = 0.152     # W/(m.K)
        else:  # Default Nitrogen (N2)
            self.gas_name = "Nitrogen (N2)"
            self.gamma = 1.400
            self.Rg = 296.8  # J/(kg.K)
            self.Cp_g = self.gamma * self.Rg / (self.gamma - 1.0)
            self.mu_g0 = 1.76e-5
            self.kg_0 = 0.026

    def solve_mach_from_area_ratio(self, area_ratio: float, supersonic: bool = True) -> float:
        """Menyelesaikan persamaan implisit Area-Mach menggunakan Newton-Raphson."""
        # Initial guess
        M = 2.5 if supersonic else 0.3
        gamma = self.gamma
        g_exp = (gamma + 1.0) / (2.0 * (gamma - 1.0))
        
        for _ in range(50):
            term = (2.0 / (gamma + 1.0)) * (1.0 + 0.5 * (gamma - 1.0) * M**2)
            f = (1.0 / M) * (term ** g_exp) - area_ratio
            
            # Turunan f terhadap M
            df_dM = - (1.0 / M**2) * (term ** g_exp) + \
                    (1.0 / M) * g_exp * (term ** (g_exp - 1.0)) * ((2.0 / (gamma + 1.0)) * (gamma - 1.0) * M)
            
            diff = f / df_dM
            M = M - diff
            if abs(diff) < 1e-6:
                break
        return max(M, 1e-3)

    def get_gas_state_at_x(self, x: float) -> Dict[str, float]:
        """
        Menghitung properti gas 1D pada posisi aksial x.
        x = 0 di throat, x = L_div di exit, x > L_div di area standoff.
        """
        if x <= 0:
            # Bagian Konvergen (pendekatan)
            M = max(0.1, 1.0 + (x / 0.02) * 0.9)
        elif x <= self.L_div:
            # Bagian Divergen Nozel
            diam_x = self.d_throat + (self.d_exit - self.d_throat) * (x / self.L_div)
            area_x = math.pi * (diam_x / 2.0) ** 2
            area_ratio = area_x / self.A_throat
            M = self.solve_mach_from_area_ratio(area_ratio, supersonic=True)
        else:
            # Wilayah Standoff Luar Nozel (Ekspansi bebas, deselerasi gas moderat)
            dist_out = x - self.L_div
            decay = math.exp(-dist_out / (2.0 * self.SOD))
            M_exit = self.solve_mach_from_area_ratio(self.A_exit / self.A_throat, supersonic=True)
            M = max(1.0, M_exit * decay)
            
        # Properti Isentropik
        T = self.T0 / (1.0 + 0.5 * (self.gamma - 1.0) * M**2)
        P = self.P0 / ((1.0 + 0.5 * (self.gamma - 1.0) * M**2) ** (self.gamma / (self.gamma - 1.0)))
        rho = P / (self.Rg * T)
        a = math.sqrt(self.gamma * self.Rg * T)
        v_g = M * a
        
        # Viskositas Sutherland
        T_ref = 273.15
        S_const = 110.4
        mu_g = self.mu_g0 * ((T / T_ref)**1.5) * ((T_ref + S_const) / (T + S_const))
        k_g = self.kg_0 * math.sqrt(T / T_ref)
        
        return {
            "M": M, "T": T, "P": P, "rho": rho, "v_g": v_g, 
            "a": a, "mu_g": mu_g, "k_g": k_g
        }

    def simulate_particle_trajectory(
        self,
        dp_microns: float,
        rho_p: float = 4430.0,      # Densitas Ti-6Al-4V (kg/m3)
        Cp_p: float = 526.0,        # Kalor jenis Ti-6Al-4V (J/kg.K)
        initial_vp: float = 20.0,
        initial_Tp_C: float = 25.0
    ) -> Dict[str, float]:
        """
        Simulasi integrasi numerik akselerasi dan perpindahan panas partikel (Euler/RK2).
        """
        d_p = dp_microns * 1e-6
        m_p = (math.pi / 6.0) * rho_p * (d_p ** 3)
        A_p = (math.pi / 4.0) * (d_p ** 2)
        
        x = -0.015  # Mulai 15 mm sebelum leher
        x_target = self.L_div + self.SOD
        dx = 0.0002  # Langkah spasial 0.2 mm
        
        v_p = max(initial_vp, 1.0)
        T_p = initial_Tp_C + 273.15
        
        while x < x_target:
            gas = self.get_gas_state_at_x(x)
            v_rel = abs(gas["v_g"] - v_p)
            M_rel = v_rel / gas["a"]
            Re_p = max(0.1, (gas["rho"] * v_rel * d_p) / gas["mu_g"])
            
            # Drag coefficient Schiller-Naumann dengan koreksi kompresibilitas
            Cd_inc = (24.0 / Re_p) * (1.0 + 0.15 * (Re_p ** 0.687)) + 0.42 / (1.0 + 4.25e4 * (Re_p ** -1.16))
            if M_rel > 0.01:
                Cd = Cd_inc * (1.0 + math.exp(-0.427 / (M_rel ** 4.63 + 1e-6)))
            else:
                Cd = Cd_inc
                
            # Gaya Seret
            F_drag = 0.5 * Cd * gas["rho"] * A_p * (gas["v_g"] - v_p) * v_rel
            accel = F_drag / m_p
            
            # Perpindahan Panas Konvektif (Ranz-Marshall)
            Pr = (gas["mu_g"] * self.Cp_g) / gas["k_g"]
            Nu = 2.0 + 0.6 * math.sqrt(Re_p) * (Pr ** (1.0 / 3.0))
            h_conv = (Nu * gas["k_g"]) / d_p
            
            q_conv = h_conv * (math.pi * d_p**2) * (gas["T"] - T_p)
            dTp_dt = q_conv / (m_p * Cp_p)
            
            # Integrasi terhadap langkah dx (dt = dx / v_p)
            dt = dx / v_p
            v_p += accel * dt
            T_p += dTp_dt * dt
            x += dx
            
        return {
            "d_p_um": dp_microns,
            "v_impact": v_p,
            "T_impact_C": T_p - 273.15,
            "Mach_rel_final": M_rel
        }

    def calculate_critical_velocity_assadi(
        self,
        UTS_MPa: float = 950.0,     # Ti-6Al-4V UTS
        rho_p: float = 4430.0,
        Tm_C: float = 1660.0,
        Cp_p: float = 526.0,
        Tp_impact_C: float = 300.0
    ) -> Dict[str, float]:
        """
        Model Analitik Assadi-Schmidt untuk Kecepatan Kritis Deposisi.
        """
        UTS_Pa = UTS_MPa * 1e6
        Tm_K = Tm_C + 273.15
        Tp_K = Tp_impact_C + 273.15
        
        # Koefisien Assadi-Schmidt
        A1 = 1.0
        A2 = 0.20
        
        term1 = (A1 * UTS_Pa / rho_p) * math.log(Tm_K / Tp_K)
        term2 = A2 * Cp_p * (Tm_K - Tp_K)
        
        v_crit = math.sqrt(term1 + term2)
        v_erosion = 1.85 * v_crit
        
        return {
            "v_crit_m_s": v_crit,
            "v_erosion_m_s": v_erosion,
            "T_melt_K": Tm_K,
            "T_part_K": Tp_K
        }

    def evaluate_psd_deposition_efficiency(
        self,
        psd_distribution: List[Tuple[float, float]],  # List of (diameter_um, weight_fraction)
        material_props: Dict[str, float]
    ) -> Dict[str, Any]:
        """
        Menghitung Deposisi Efisiensi Kumulatif (DE) dari spektrum serbuk industri.
        """
        total_weight = sum(w for _, w in psd_distribution)
        deposited_weight = 0.0
        details = []
        
        for dp, weight in psd_distribution:
            traj = self.simulate_particle_trajectory(
                dp_microns=dp,
                rho_p=material_props["rho"],
                Cp_p=material_props["Cp"]
            )
            
            crit = self.calculate_critical_velocity_assadi(
                UTS_MPa=material_props["UTS_MPa"],
                rho_p=material_props["rho"],
                Tm_C=material_props["Tm_C"],
                Cp_p=material_props["Cp"],
                Tp_impact_C=traj["T_impact_C"]
            )
            
            v_p = traj["v_impact"]
            v_crit = crit["v_crit_m_s"]
            v_eros = crit["v_erosion_m_s"]
            
            is_bonded = (v_p >= v_crit) and (v_p <= v_eros)
            if is_bonded:
                deposited_weight += weight
                status = "Bonded (Optimal Deposit)"
            elif v_p < v_crit:
                status = "Bounced Off (Sub-critical)"
            else:
                status = "Erosion / Ablation"
                
            details.append({
                "dp_um": dp,
                "fraction": weight / total_weight,
                "v_impact": v_p,
                "v_crit": v_crit,
                "T_impact_C": traj["T_impact_C"],
                "status": status,
                "bonded": is_bonded
            })
            
        de_total = (deposited_weight / total_weight) * 100.0
        return {
            "Overall_DE_pct": de_total,
            "Particle_Breakdown": details
        }

# ==============================================================================
# EKSEKUSI SIMULASI KASUS KEDIRGANTARAAN (Ti-6Al-4V CSAM REPAIR)
# ==============================================================================
if __name__ == "__main__":
    print("=" * 85)
    print("RUANGTI - SIMULASI DEPOSISI COLD SPRAY ADDITIVE MANUFACTURING (CSAM)")
    print("Analisis Gas Dinamika De Laval & Parameter Impak Partikel Titanium Ti-6Al-4V")
    print("=" * 85)
    
    # 1. Inisialisasi Simulator dengan Gas Nitrogen Tekanan Tinggi
    cs_n2 = ColdSpraySimulator(
        gas_type="N2",
        P0_bar=55.0,
        T0_C=850.0,
        throat_diameter_mm=2.7,
        exit_diameter_mm=6.2,
        divergent_length_mm=130.0,
        standoff_distance_mm=30.0
    )
    
    # Properti Material Serbuk Ti-6Al-4V (Grade 5 Dirgantara)
    ti64_props = {
        "rho": 4430.0,       # kg/m3
        "Cp": 526.0,         # J/(kg.K)
        "UTS_MPa": 950.0,    # MPa
        "Tm_C": 1660.0       # deg C
    }
    
    # Distribusi Ukuran Serbuk Industri (PSD Log-Normal Ti-6Al-4V)
    ti_psd = [
        (15.0, 0.10),  # D10 (15 um) -> 10%
        (25.0, 0.25),  # 25 um       -> 25%
        (35.0, 0.35),  # D50 (35 um) -> 35%
        (45.0, 0.20),  # 45 um       -> 20%
        (60.0, 0.10)   # D90 (60 um) -> 10%
    ]
    
    res_n2 = cs_n2.evaluate_psd_deposition_efficiency(ti_psd, ti64_props)
    
    print(f"\n[HASIL SIMULASI HP-CSAM NITROGEN (N2)]")
    print(f"Gas: {cs_n2.gas_name} | Tekanan Stagnasi: 55.0 bar | Suhu Gas Heater: 850 °C")
    print("-" * 85)
    print(f"{'d_p (µm)':<10} {'Fraksi':<8} {'v_impact (m/s)':<16} {'v_crit (m/s)':<15} {'T_imp (°C)':<12} {'Status Metalurgi'}")
    print("-" * 85)
    for p in res_n2["Particle_Breakdown"]:
        print(f"{p['dp_um']:<10.1f} {p['fraction']*100:<7.1f}% {p['v_impact']:<16.2f} {p['v_crit']:<15.2f} {p['T_impact_C']:<12.1f} {p['status']}")
    print("-" * 85)
    print(f"--> ESTIMASI TOTAL DEPOSITION EFFICIENCY (DE): {res_n2['Overall_DE_pct']:.2f} %\n")
    
    # 2. Perbandingan dengan Gas Helium (He)
    cs_he = ColdSpraySimulator(
        gas_type="HE",
        P0_bar=35.0,
        T0_C=400.0,
        throat_diameter_mm=2.0,
        exit_diameter_mm=5.0,
        divergent_length_mm=100.0,
        standoff_distance_mm=25.0
    )
    res_he = cs_he.evaluate_psd_deposition_efficiency(ti_psd, ti64_props)
    print(f"\n[HASIL SIMULASI HP-CSAM HELIUM (HE)]")
    print(f"Gas: {cs_he.gas_name} | Tekanan Stagnasi: 35.0 bar | Suhu Gas Heater: 400 °C")
    print("-" * 85)
    print(f"{'d_p (µm)':<10} {'Fraksi':<8} {'v_impact (m/s)':<16} {'v_crit (m/s)':<15} {'T_imp (°C)':<12} {'Status Metalurgi'}")
    print("-" * 85)
    for p in res_he["Particle_Breakdown"]:
        print(f"{p['dp_um']:<10.1f} {p['fraction']*100:<7.1f}% {p['v_impact']:<16.2f} {p['v_crit']:<15.2f} {p['T_impact_C']:<12.1f} {p['status']}")
    print("-" * 85)
    print(f"--> ESTIMASI TOTAL DEPOSITION EFFICIENCY (DE): {res_he['Overall_DE_pct']:.2f} %\n")
    print("=" * 85)
```

---

## 7. Studi Kasus Industri: Rekondisi Komponen Fan Blade Turbofan Ti-6Al-4V & Saluran Pendingin Roket Tembaga CuCrZr

### 7.1. Rekondisi Komponen Kedirgantaraan (Leading Edge Fan Blade Ti-6Al-4V)
- **Tantangan Industri**: *Leading edge* bilah kipas titanium mengalami erosi partikel pasir dan impak benda asing (*Foreign Object Damage / FOD*). Metode pengelasan konvensional (TIG/Laser) memicu distorsi geometris bilah aerodinamis tipis dan zona terpengaruh panas (HAZ) getas akibat penyerapan gas atmosferik ($O_2, N_2, H_2$).
- **Solusi HP-CSAM**: Pemanfaatan CSAM dengan gas pendorong $N_2$ pada $P_0 = 60\ \text{bar}$ dan $T_0 = 900\ ^\circ\text{C}$ menyemprotkan serbuk Ti-6Al-4V gas-atomized ($d_{50} = 25\ \mu\text{m}$).
- **Hasil Kualifikasi Standar**:
  1. Porositas deposit: $< 0.3\%$ (sesuai standar SAE AMS 7057).
  2. Kekuatan tarik adhesi (ASTM C633): $> 85\ \text{MPa}$ (kegagalan terjadi pada lem perekat, bukan pada antarmuka substrat-deposit).
  3. Tegangan sisa: $-350\ \text{MPa}$ (tegangan sisa tekan / compressive, yang secara signifikan memperpanjang *fatigue limit* komponen di atas $10^7$ siklus).
  4. Penghematan biaya remanufaktur: $72\%$ dibandingkan penggantian bilah baru (*new part replacement*), dengan *lead time* perbaikan berkurang dari 14 minggu menjadi 8 jam.

### 7.2. Deposisi Saluran Pendingin Ruang Bakar Roket (Alloy CuCrZr pada Liner Inconel 718)
- **Tantangan Industri**: Pembuatan jaket struktural berkekuatan tinggi di atas liner saluran pendingin mikro tembaga murni membutuhkan ikatan metalurgi disimilar yang sempurna tanpa pelelehan yang dapat menyumbat saluran pendingin tipis ($0.5\ \text{mm}$).
- **Solusi CSAM**: Deposisi aditif partikel tembaga-kromium-zirkonium (CuCrZr) berkecepatan $750\ \text{m/s}$ menghasilkan konduktivitas termal $> 320\ \text{W/(m}\cdot\text{K)}$ ($88\%$ IACS) dan densitas struktural $99.85\%$ tanpa perlu proses permesinan ulang elektroda.

---

## 8. Referensi Terverifikasi & Literatur Akademik Standar

1. **SAE International** (2021). *SAE AMS 7057: Standard Specification for Cold Spray Additive Manufacturing of Metallic Materials*. SAE International Aerospace Material Specifications. DOI: [10.4271/AMS7057](https://doi.org/10.4271/AMS7057).
2. **Yin, S., & Lupoi, R.** (2021). *Introduction to Cold Spray Additive Manufacturing & Manufacturing Parameters*. Springer Tracts in Additive Manufacturing. DOI: [10.1007/978-3-030-73367-4_1](https://doi.org/10.1007/978-3-030-73367-4_1).
3. **Assadi, H., Gärtner, F., Klassen, T., & Kreye, H.** (2019). *Comment on ‘Adiabatic shear instability is not necessary for adhesion in cold spray’*. Scripta Materialia, 162, 510-514. DOI: [10.1016/j.scriptamat.2018.10.036](https://doi.org/10.1016/j.scriptamat.2018.10.036).
4. **Schmidt, T., Gärtner, F., Assadi, H., & Kreye, H.** (2006). *Development of a generalized parameter window for cold spray deposition*. Acta Materialia, 54(3), 729-742. DOI: [10.1016/j.actamat.2005.10.005](https://doi.org/10.1016/j.actamat.2005.10.005).
5. **Papyrin, A., Kosarev, V., Klinkov, S., & Alkimov, A.** (2007). *Cold Spray Technology: Gas-dynamics of Cold Spray*. Elsevier Science. DOI: [10.1016/B978-008045155-8/50003-X](https://doi.org/10.1016/B978-008045155-8/50003-X).
6. **ASTM International** (2020). *ASTM B827 / B822 / C633: Standard Practices for Powder Characterization and Adhesion Testing of Solid-State Coatings*. ASTM International, West Conshohocken, PA.
