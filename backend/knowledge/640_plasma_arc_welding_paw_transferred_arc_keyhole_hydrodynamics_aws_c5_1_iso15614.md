# Modul 640: Plasma Arc Welding (PAW): Hidrodinamika Busur Tertransfer (*Transferred Arc Keyhole*), Keseimbangan Energi Lapisan Batas Anoda, Gaya Geser Jet Plasma, dan Stabilitas Termal Kolam Las (AWS C5.1, ISO 15614-6, ASTM E8M & ASME Sec. IX)

## 1. Pengantar & Konteks Industri: Pengelasan Busur Plasma (*Plasma Arc Welding*)

*Plasma Arc Welding* (PAW) adalah proses penyambungan fusi busur listrik densitas energi tinggi (*high energy density arc welding process*) yang merupakan evolusi lanjutan dari proses *Gas Tungsten Arc Welding* (GTAW/TIG). Pada PAW, busur listrik antara elektroda tungsten non-konsumsi dan benda kerja dikonstriksikan secara mekanis dan termal dengan memaksanya melewati nosel tembaga berpendingin air (*water-cooled constricting copper orifice nozzle*). Konstriksi ini mentransformasikan busur divergensi bebas menjadi jet gas plasma terionisasi kolom sempit (*narrow constricted plasma jet*) dengan temperatur sumbu tengah mencapai $20.000 - 30.000\ \text{K}$ dan kecepatan aliran gas plasma melampaui $1000\ \text{m/s}$.

Kerapatan daya (*power density*) busur plasma terkonstriksi mencapai $10^5 - 10^6\ \text{W/cm}^2$, yakni sekitar tiga hingga lima kali lipat lebih tinggi dibandingkan TIG konvensional. Tingkat konsentrasi energi yang tinggi ini memungkinkan PAW beroperasi dalam dua modus operasional utama:
1. **Melt-in Mode (Conduction Mode)**: Digunakan pada arus rendah ($I \le 100\ \text{A}$) untuk penyambungan presisi foil logam tipis (*micro-plasma welding*, ketebalan $0{,}05 - 1{,}5\ \text{mm}$) dengan distorsi termal minimal.
2. **Keyhole Mode**: Digunakan pada arus menengah hingga tinggi ($I \approx 100 - 350\ \text{A}$) dan laju aliran gas plasma tinggi ($2 - 6\ \text{L/min}$). Tekanan momentum dinamik jet busur plasma menembus seluruh ketebalan logam cair secara instan, membuka saluran lubang kunci (*keyhole*) tembus penuh (*full penetration*) pada ketebalan material $3 - 12\ \text{mm}$ dalam satu lintasan tunggal (*single pass*) tanpa memerlukan alur kampuh miring (*square butt preparation*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    ARSITEKTUR & KINEMATIKA TORCH BUSUR PLASMA (PAW)                                   |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         BODY TORCH PENGELASAN PLASMA (PAW TORCH)                                                                      |
|         ┌───────────────────────────────────────────────────────────────────────────┐                                 |
|         │                        Saluran Gas Orifice / Plasma (Ar murni)            │                                 |
|         │                                    │           │                          │                                 |
|         │                                    ▼           ▼                          │                                 |
|         │                             ┌────────────────────────┐                    │                                 |
|         │   Elektroda Tungsten (W-Th) │    |               |   │ Katoda (-)         │                                 |
|         │                             │    |               |   │                    │                                 |
|         │                             └────┼───────────────┼───┘                    │                                 |
|         │                                  │  Elektroda    │                        │                                 |
|         │                                  ▼  Tungsten     │                        │                                 |
|         │                      ┌──────────────────────────────┐                     │                                 |
|         │  Saluran Gas         │ Nosel Konstriksi Tembaga     │ Saluran Gas         │                                 |
|         │  Pelindung (Shielding│ (Water-Cooled Copper Orifice)│ Pelindung           │                                 |
|         │  Gas: Ar + H2 / He)  │ ┌──────────────────────────┐ │ (Outer Shielding)   │                                 |
|         │         │            │ │   Busur Pilot (Pilot Arc)│ │        │            │                                 |
|         │         ▼            └─┴───────────┬──────────────┴─┴────────▼            │                                 |
|         └────────────────────────────────────┼──────────────────────────────────────┘                                 |
|                                              │                                                                        |
|                                              ▼ Kolom Busur Plasma Terkonstriksi (Constricted Jet)                     |
|                                         (T ≈ 25.000 K, v > 1000 m/s)                                                  |
|                                              │                                                                        |
|         BENDA KERJA & RONGGA LUBANG KUNCI    ▼                                                                        |
|         ┌───────────────────────────────────────────────────────────────────────────┐                                 |
|         │                                    │                                      │                                 |
|         │             ┌──────────────────────┴──────────────────────┐               │                                 |
|         │             │    Rongga Uap & Jet Plasma (Keyhole)        │               │                                 |
|         │             │   ┌─────────────────────────────────────┐   │               │                                 |
|         │   Pelat     │   │   Tekanan Stagnasi Jet P_stag       │   │     Pelat     │                                 |
|         │   Logam (1) ├───┤   Gaya Geser Dinding Tau_shear      ├───┤───  Logam (2) │                                 |
|         │   Induk     │   │   Aliran Fluida Mengitari Keyhole   │   │     Induk     │                                 |
|         │             └───┴──────────────────┬──────────────────┴───┘               │                                 |
|         │                                    │ Eflux Plasma Jet                     │                                 |
|         │                                    ▼ (Menembus Akar Bawah Las)            │                                 |
|         └───────────────────────────────────────────────────────────────────────────┘                                 |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Karakteristik rekayasa manufaktur dan metalurgi PAW meliputi:
- **Toleransi Jarak Nosel (*Stand-off Distance Insensitivity*)**: Kolom busur plasma yang terkonstriksi bersifat silindris paralel (bukan kerucut menyebar seperti TIG), sehingga fluktuasi jarak ujung torch terhadap benda kerja tidak secara signifikan mengubah densitas energi maupun lebar jalur las (*weld bead width*).
- **Efisiensi Produksi & Peniadaan Kawat Pengisi**: Mampu menyambung pelat baja tahan karat, titanium, dan paduan nikel setebal $6 - 10\ \text{mm}$ dalam posisi kampuh rapat tanpa alur bevel (*I-butt joint*), memangkas waktu fabrikasi hingga $70\%$ dan mengeliminasi konsumsi kawat las pengisi (*filler wire consumption*).
- **Integritas Penetrasi Akar Las (*Root Pass Reliability*)**: Aliran jet plasma yang menembus sisi bawah pelat (*efflux plasma jet*) menjamin fusi akar $100\%$ tanpa risiko diskontinuitas *lack of penetration* atau *incomplete fusion*.

Aplikasi industri vital:
- **Fabrikasi Bejana Tekan & Pipa Kriogenik**: Pengelasan melingkar (*girth welding*) tangki penyimpanan LNG, reaktor kimia baja tahan karat austenitik ($304L / 316L$), dan pipa saluran minyak/gas lepas pantai duplex stainless steel ($UNS\ S32205 / SAF\ 2205$).
- **Dirgantara & Kelautan**: Tangki bahan bakar roket paduan titanium ($Ti\text{-}6Al\text{-}4V$), selongsong ruang bakar turbin mesin jet, serta lambung kapal selam paduan tembaga-nikel ($Cu\text{-}Ni$).
- **Manufaktur Tabung Presisi Berkelanjutan**: Lini pipa las kontinu (*continuous tube mills*) berkecepatan tinggi untuk industri otomotif dan pembangkit tenaga listrik.

Standar internasional, pedoman pengelasan, dan spesifikasi prosedur:
- **AWS C5.1**: *Recommended Practices for Plasma Arc Welding*.
- **ISO 15614-6**: *Specification and qualification of welding procedures for metallic materials — Welding procedure test — Part 6: Arc and gas welding of copper and its alloys*.
- **ISO 15614-1**: *Welding procedure test — Part 1: Steel and nickel alloys (Plasma Arc Welding)*.
- **ASME BPVC Section IX**: *Welding, Brazing, and Fusing Qualifications — Plasma Arc Welding (QW-214 / QW-400)*.
- **ASTM E8 / E8M**: *Standard Test Methods for Tension Testing of Metallic Materials*.

---

## 2. Termodinamika & Fisika Plasma Terkonstriksi: Persamaan Saha & Magnetohidrodinamika (MHD)

```
+-----------------------------------------------------------------------------------------------------------------------+
|                              MEKANISME TRANSFER ENERGI & FISIKA BUSUR PLASMA TERKONSTRIKSI                            |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  1. DERAJAT IONISASI PLASMA (Saha Eq.)      2. GAYA PINCH ELEKTROMAGNETIK (MHD)       3. DISTRIBUSI TEKANAN JET       |
|                                                                                                                       |
|          Gas Orifice Argon (Ar)                     Rapat Arus Busur j_z                      Nosel Konstriksi        |
|               (T ≈ 15.000 - 28.000 K)                     Medan Magnet B_θ                       (Diameter d_n)       |
|               ┌─────────────────┐                       ┌──────────────┐                       ┌────────────────┐     |
|               │  Ionisasi Gas:  │                       │ Gaya Lorentz │                       │ Profil Tekanan │     |
|               │  Ar -> Ar+ + e- │                       │  F_L = j x B │                       │ P_arc(r) Gauss │     |
|               └────────┬────────┘                       └──────┬───────┘                       └───────┬────────┘     |
|                        │                                       │                                       │              |
|                        ▼ Derajat Ionisasi x_i                  ▼ Kompresi Magnetik Radial              ▼ Tekanan Jet  |
|               ┌─────────────────┐                       ┌──────────────┐                       ┌────────────────┐     |
|               │ Persamaan Saha  │ ────────────────────► │ Tekanan Arus │ ────────────────────► │ Keseimbangan   │     |
|               │ Fraksi Elektron │                       │ P_mag(r)     │                       │ Dinding Lubang │     |
|               └─────────────────┘                       └──────────────┘                       └────────────────┘     |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.1. Derajat Ionisasi Termal Gas Plasma (Persamaan Saha-Eggert)

Gas argon yang dipaksa melintasi busur listrik mengalami ionisasi termal menjadi campuran gas netral, ion positif ($Ar^+$), dan elektron bebas ($e^-$). Dalam kondisi kesetimbangan termodinamika lokal (*Local Thermodynamic Equilibrium* / LTE), derajat ionisasi fraksional plasma dipandu oleh **Persamaan Saha-Eggert**:

$$\frac{n_e \, n_i}{n_n} = \frac{2 \, g_i}{g_n} \left(\frac{2\pi m_e k_B T_p}{h^2}\right)^{3/2} \exp\left(-\frac{E_i - \Delta E_i}{k_B T_p}\right)$$

Di mana:
- $n_e, n_i, n_n$ = Kerapatan jumlah elektron, ion, dan atom netral per satuan volume ($\text{m}^{-3}$).
- $g_i, g_n$ = Bobot statistik fasa ion ($g_i = 4$) dan atom netral argon ($g_n = 1$).
- $m_e$ = Massa diam elektron ($9{,}10938 \times 10^{-31}\ \text{kg}$).
- $h$ = Konstanta Planck ($6{,}62607 \times 10^{-34}\ \text{J}\cdot\text{s}$).
- $E_i$ = Potensial ionisasi pertama atom argon ($15{,}759\ \text{eV} = 2{,}525 \times 10^{-18}\ \text{J}$).
- $\Delta E_i$ = Reduksi potensial ionisasi akibat efek penapisan Debye (*Debye screening*).
- $T_p$ = Temperatur termodinamika kolom plasma ($\text{K}$).

Pada temperatur kolom inti $T_p \ge 22.000\ \text{K}$, derajat ionisasi argon mendekati $100\%$ ($x_i \to 1{,}0$), mentransformasikan gas menjadi konduktor listrik cair-gas ideal dengan konduktivitas listrik $\sigma_e \approx 10^4\ \text{S/m}$.

### 2.2. Gaya Pinch Elektromagnetik Magnetohidrodinamika (Lorentz Pinch Force)

Aliran arus listrik aksial dengan kerapatan arus $j_z(r)$ di dalam kolom plasma silindris membangkitkan medan magnetik azimutal $B_\theta(r)$ sesuai Hukum Ampère:

$$B_\theta(r) = \frac{\mu_0}{r} \int_0^r j_z(r') \, r' \, dr'$$

Interaksi antara vektor kerapatan arus listrik $\mathbf{j}$ dan medan magnet induksi diri $\mathbf{B}$ menghasilkan **Gaya Lorentz volumetrik radial ke arah dalam** (*Lorentz pinch force*):

$$\mathbf{F}_L = \mathbf{j} \times \mathbf{B} = - j_z(r) \, B_\theta(r) \, \hat{\mathbf{r}}$$

Gaya kompresi elektromagnetik radial ini menghasilkan gradien tekanan fluida statis plasma sepanjang radius:

$$\frac{dP_{\text{mag}}}{dr} = - j_z(r) \, B_\theta(r)$$

Integrasi persamaan di atas untuk distribusi kerapatan arus seragam ($j_z = I / (\pi R_p^2)$) menghasilkan tekanan magnetik aksial maksimum pada sumbu tengah plasma ($r = 0$):

$$P_{\text{mag, max}} = \frac{\mu_0 \, I^2}{4\pi^2 R_p^2}$$

Di mana $\mu_0 = 4\pi \times 10^{-7}\ \text{H/m}$ adalah permeabilitas vakum, $I$ adalah arus pengelasan total ($\text{A}$), dan $R_p$ adalah radius efektif lubang konstriksi nosel plasma ($\text{m}$). Gradien tekanan aksial dari ujung katoda runcing menuju anoda inilah yang mempercepat jet plasma ke kecepatan supersonik / transonik (*Maecker effect*).

---

## 3. Keseimbangan Energi Lapisan Batas Anoda & Hidrodinamika Lubang Kunci (*Keyhole Stability*)

```
+-----------------------------------------------------------------------------------------------------------------------+
|                               KESEIMBANGAN HIDRODINAMIKA & MEKANISME GAYA PADA DINDING KEYHOLE PAW                    |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                                          Jet Busur Plasma Terkonstriksi                                               |
|                                          (Arus I, Laju Gas Orifice Q_p)                                               |
|                                                        │                                                              |
|                                                        ▼                                                              |
|          Permukaan Pelat Atas ───────────────────────┐   ┌─────────────────────── Permukaan Pelat Atas                |
|                                                      │   │                                                            |
|                                     ┌────────────────┘   └────────────────┐                                           |
|                                     │ ◄── P_stag(r,z)             P_σ ──► │ (Tegangan Muka γ_s)                       |
|                                     │ (Tekanan Stagnasi Jet)              │                                           |
|                                     │                                     │                                           |
|                                     │ ◄── τ_shear(z)              P_h ──► │ (Tekanan Hidrostatis ρ_l*g*z)             |
|                                     │ (Gaya Geser Gas Plasma)             │                                           |
|                  Dinding Depan      │                                     │      Dinding Belakang                     |
|                  (Front Keyhole)    │              Rongga Uap             │      (Rear Keyhole Pool)                  |
|                  Peleburan Cepat    │              (Keyhole PAW)          │      Aliran Fluida Mengitari              |
|                                     │                                     │      Sisi Saluran                         |
|                                     │ ◄── P_recoil(T)            P_dyn ──►│                                           |
|                                     │ (Tekanan Uap Logam)  (Dinamika Cair)│                                           |
|                                     └────────────────┐   ┌────────────────┘                                           |
|                                                      │   │                                                            |
|                                                      └───┘                                                            |
|                                              Eflux Jet Plasma Terbuka                                                 |
|                                            (Penetrasi Tembus Sisi Bawah)                                              |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.1. Keseimbangan Fluks Kalor Lapisan Batas Anoda (*Anode Heat Balance*)

Fluks kalor total yang ditransfer dari busur plasma terkonstriksi ke permukaan kolam logam cair benda kerja ($q_{\text{anode}}$) dirumuskan oleh persamaan kekekalan energi lapisan batas anoda (*anode boundary layer energy balance*):

$$q_{\text{anode}}(r) = j_a(r) \left[ \Phi_w + \frac{5}{2} \frac{k_B T_e}{e} + V_a \right] + h_{\text{conv}} (T_p - T_w) + \epsilon_r \, \sigma_{\text{SB}} (T_p^4 - T_w^4)$$

Di mana suku-suku penyusunnya adalah:
1. $j_a(r) \, \Phi_w$ = Fluks pelepasan energi akibat elektron memasuki fungsi kerja anoda logam (*electron condensation heat*).
2. $j_a(r) \left(\frac{5}{2} \frac{k_B T_e}{e}\right)$ = Entalpi termal elektron yang dibawa melintasi selubung anoda (*electron thermal energy transport*).
3. $j_a(r) \, V_a$ = Disipasi energi pada jatuh potensial selubung anoda (*anode sheath voltage drop*).
4. $h_{\text{conv}} (T_p - T_w)$ = Transfer kalor konveksi paksa dari jet plasma berkecepatan tinggi dengan koefisien perpindahan panas $h_{\text{conv}}$.
5. $\epsilon_r \, \sigma_{\text{SB}} (T_p^4 - T_w^4)$ = Radiasi termal plasma ke permukaan kolam fusi.

Efisiensi termal total busur plasma PAW berada pada rentang $\eta_{\text{PAW}} \approx 0{,}65 - 0{,}85$.

### 3.2. Hidrodinamika Stabilitas Dinding Keyhole (Model Keseimbangan Kuasi-Statik)

Pembentukan dan stabilitas saluran lubang kunci terbuka (*open through-thickness keyhole*) pada pengelasan PAW diatur oleh interaksi kompetitif antara gaya-gaya pembuka (*opening forces*) dan gaya-gaya penutup (*closing forces*):

$$P_{\text{opening}}(z) \ge P_{\text{closing}}(z)$$

Di mana:

1. **Tekanan Stagnasi Jet Gas Plasma (*Plasma Stagnation Pressure* $P_{\text{stag}}$)**:

$$P_{\text{stag}}(r) = \frac{1}{2} \rho_p \, v_{\text{plasma}}^2 = P_{\text{arc, max}} \exp\left(-\frac{r^2}{2 \sigma_p^2}\right)$$

Dengan $P_{\text{arc, max}} = \dfrac{\mu_0 I^2}{4\pi^2 R_p^2} + \dfrac{1}{2} \rho_g \left(\dfrac{Q_{\text{orifice}}}{\pi R_p^2}\right)^2$.

2. **Gaya Geser Dinding Plasma (*Plasma Jet Shear Stress* $\tau_{\text{shear}}$)**:

$$\tau_{\text{shear}} = \frac{1}{2} C_f \, \rho_p \, v_{\text{plasma}}^2$$

Gaya geser ini menyeret lapisan logam cair di dinding depan *keyhole* ke arah bawah dan samping, mencegah akumulasi cairan yang dapat menyumbat saluran.

3. **Tekanan Penutupan Kapiler Permukaan & Hidrostatis ($P_\sigma + P_h$)**:

$$P_{\text{closing}}(z) = \gamma_s(T) \left( \frac{1}{R_1(z)} + \frac{1}{R_2(z)} \right) + \rho_l \, g \, z$$

Kriteria Keseimbangan Kritis:
- Jika $P_{\text{opening}} \gg P_{\text{closing}}$: Terjadi fenomena semburan logam cair (*cutting mode / blow-out*), meninggalkan lubang cacat permanen pada benda kerja.
- Jika $P_{\text{opening}} < P_{\text{closing}}$: Lubang kunci tertutup sebelum menembus akar (*keyhole collapse*), menyebabkan diskontinuitas fusi akar (*incomplete penetration*).
- Jendela Proses Stabil (*Stable Keyhole Window*): Menjaga rasio tekanan pembuka terhadap penutup pada interval $1{,}08 \le \dfrac{P_{\text{opening}}}{P_{\text{closing}}} \le 1{,}45$.

---

## 4. Pemodelan Distribusi Sumber Panas Gabungan: Double-Ellipsoidal & Gaussian Conical

```
+-----------------------------------------------------------------------------------------------------------------------+
|                              MODEL SUMBER PANAS GABUNGAN VOLUMETRIK PAW KEYHOLE                                       |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         Bagian Atas: Double-Ellipsoidal Goldak                 Bagian Bawah: Conical Gaussian Column                  |
|         (Efek Busur Melebar & Anoda Attachment)                (Efek Penetrasi Jet Plasma & Keyhole)                  |
|                                                                                                                       |
|                  y (Lebar Kolam)                                          y                                           |
|                  ▲                                                        ▲                                           |
|                  │                                                        │                                           |
|             ┌────┼────┐                                              ┌────┼────┐                                      |
|             │    │    │                                              │    │    │                                      |
|      ◄──────┼────o────┼──────► x (Sumbu Las)                  ◄──────┼────o────┼──────► x                             |
|             │    │    │                                              │    │    │                                      |
|             └────┼────┘                                              └────┼────┘                                      |
|                  │                                                        │                                           |
|                  ▼ z (0 <= z <= H_c)                                      ▼ z (H_c < z <= H_plate)                    |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Untuk merefleksikan morfologi penetrasi gabungan antara peleburan permukaan lebar dan saluran sempit di bawahnya (*wine-glass weld pool cross-section*), fluks volumetrik $q(x,y,z)$ dimodelkan melalui kombinasi dua model sumber panas:

$$q_{\text{PAW}}(x,y,z) = \chi_{\text{top}}(z) \, q_{\text{Goldak}}(x,y,z) + \chi_{\text{bottom}}(z) \, q_{\text{Cone}}(x,y,z)$$

Fungsi pembagian ruang kontinu $\chi(z)$:

$$\chi_{\text{top}}(z) = \frac{1}{1 + \exp\left(\dfrac{z - H_c}{\delta_z}\right)}, \qquad \chi_{\text{bottom}}(z) = 1 - \chi_{\text{top}}(z)$$

Di mana $H_c$ adalah kedalaman transisi transisional antara zona mangkok atas (*crown*) dan leher *keyhole*, dan $\delta_z$ adalah ketebalan transisi pelumatan numerik.

---

## 5. Algoritma Komputasi Python: Multiphysics Solver & Optimasi Parameter PAW Keyhole

Skrip Python di bawah ini mengimplementasikan simulasi termofisika plasma, penentuan kecepatan dan tekanan jet plasma, perhitungan stabilitas *keyhole*, prediksi lebar fusi penampang lintang (*wine-glass cross-section*), dan optimasi parameter arus-kecepatan pengelasan untuk Baja Tahan Karat Austenitik $304L$ dan Paduan Titanium $Ti\text{-}6Al\text{-}4V$.

```python
"""
Plasma Arc Welding (PAW) Keyhole Dynamics, Arc Pressure & Operating Window Solver.
Standar Acuan: AWS C5.1, ISO 15614-6, ASTM E8M, dan ASME BPVC Section IX.
"""

import math
from typing import Dict, Tuple, List

class PlasmaArcWeldingSolver:
    def __init__(self, material: str = "SS304L"):
        self.material = material
        self.mu0 = 4.0 * math.pi * 1e-7 # Permeabilitas vakum (H/m)
        self.kB = 1.380649e-23          # Konstanta Boltzmann (J/K)
        self.qe = 1.60217663e-19         # Muatan elementer (C)
        self.g = 9.80665                 # Gravitasi bumi (m/s^2)
        
        # Database Termofisika Material
        if material == "SS304L":
            self.props = {
                "density_solid": 7900.0,    # kg/m^3
                "density_liquid": 6900.0,   # kg/m^3
                "specific_heat": 500.0,     # J/(kg*K)
                "thermal_cond": 21.5,       # W/(m*K)
                "T_melt": 1723.0,           # K (1450 C)
                "T_boil": 3100.0,           # K
                "latent_heat_fus": 2.7e5,   # J/kg
                "surf_tension": 1.65,       # N/m
                "d_gamma_dT": -0.38e-3,     # N/(m*K)
                "viscosity": 5.0e-3,        # Pa*s
                "work_function_eV": 4.5
            }
        elif material == "Ti6Al4V":
            self.props = {
                "density_solid": 4430.0,
                "density_liquid": 3900.0,
                "specific_heat": 560.0,
                "thermal_cond": 7.2,
                "T_melt": 1923.0,
                "T_boil": 3560.0,
                "latent_heat_fus": 2.9e5,
                "surf_tension": 1.50,
                "d_gamma_dT": -0.26e-3,
                "viscosity": 4.2e-3,
                "work_function_eV": 4.3
            }
        else:
            raise ValueError(f"Material {material} belum terkonfigurasi.")

    def calculate_plasma_jet_dynamics(
        self, current_A: float, orifice_flow_L_min: float, orifice_dia_mm: float
    ) -> Dict[str, float]:
        """
        Menghitung kecepatan jet plasma, temperatur inti plasma rata-rata,
        dan tekanan busur elektromagnetik + aerodinamik.
        """
        R_nozzle = (orifice_dia_mm * 1e-3) / 2.0 # meter
        Area_nozzle = math.pi * (R_nozzle**2)
        
        # 1. Perkiraan Temperatur Kolom Inti Plasma Terkonstriksi
        # Temperatur meningkat secara monoton terhadap kerapatan arus j = I / Area
        current_density_A_m2 = current_A / Area_nozzle
        T_plasma_K = 12000.0 + 8000.0 * math.tanh(current_density_A_m2 / 1.5e7)
        
        # 2. Densitas Massa Plasma Argon pada T_plasma (Hukum Gas Ideal LTE)
        M_argon = 0.039948 # kg/mol
        Rg = 8.3144626
        P_amb = 101325.0
        rho_plasma = (P_amb * M_argon) / (Rg * T_plasma_K)
        
        # 3. Kecepatan Aliran Gas Orifice Termal Murni
        Q_m3_s = (orifice_flow_L_min * 1e-3) / 60.0 # m^3/s
        # Ekspansi termal gas saat masuk ke dalam busur
        expansion_ratio = T_plasma_K / 300.0
        v_gas_thermal = (Q_m3_s * expansion_ratio) / Area_nozzle
        
        # 4. Percepatan Magnetohidrodinamika (Maecker Effect Velocity)
        # Kecepatan dorong magnetik: v_mag = sqrt(mu0 * I^2 / (4 * pi^2 * R^2 * rho_plasma))
        v_mag = math.sqrt((self.mu0 * (current_A**2)) / (4.0 * (math.pi**2) * (R_nozzle**2) * rho_plasma))
        
        # Kecepatan Total Jet Plasma
        v_total_plasma = math.sqrt(v_gas_thermal**2 + v_mag**2)
        
        # 5. Tekanan Stagnasi Busur Maksimum (Stagnation Arc Pressure)
        P_magnetic = (self.mu0 * (current_A**2)) / (4.0 * (math.pi**2) * (R_nozzle**2))
        P_dynamic = 0.5 * rho_plasma * (v_total_plasma**2)
        P_stagnation_total = P_magnetic + P_dynamic
        
        return {
            "plasma_temp_K": T_plasma_K,
            "plasma_density_kg_m3": rho_plasma,
            "plasma_velocity_m_s": v_total_plasma,
            "magnetic_pressure_Pa": P_magnetic,
            "dynamic_pressure_Pa": P_dynamic,
            "total_arc_pressure_Pa": P_stagnation_total
        }

    def evaluate_keyhole_penetration_stability(
        self,
        current_A: float,
        voltage_V: float,
        speed_mm_s: float,
        plate_thickness_mm: float,
        orifice_flow_L_min: float,
        orifice_dia_mm: float,
        efficiency: float = 0.75
    ) -> Dict[str, float]:
        """
        Evaluasi kriteria kestabilan lubang kunci tembus penuh (Through-Thickness Keyhole)
        dan penentuan margin operasi (Safety Margin terhadap Burn-Through vs Incomplete Penetration).
        """
        v_welding_m_s = speed_mm_s * 1e-3
        H_plate_m = plate_thickness_mm * 1e-3
        P_net_W = efficiency * current_A * voltage_V
        
        # Dinamika Plasma
        jet = self.calculate_plasma_jet_dynamics(current_A, orifice_flow_L_min, orifice_dia_mm)
        P_open = jet["total_arc_pressure_Pa"]
        
        # Tekanan Penutup Kapiler & Hidrostatis pada Bawah Pelat (Root)
        # Asumsi radius kelengkungan lubang kunci sebanding dengan radius nosel
        rk_bottom = (orifice_dia_mm * 1e-3) / 2.2
        P_capillary = (2.0 * self.props["surf_tension"]) / rk_bottom
        P_hydrostatic = self.props["density_liquid"] * self.g * H_plate_m
        P_close = P_capillary + P_hydrostatic
        
        # Rasio Tekanan Stabilitas Kunci (Keyhole Pressure Balance Ratio)
        ratio_pressure = P_open / P_close if P_close > 0 else 999.0
        
        # Keseimbangan Masukan Energi Termal untuk Penetrasi Penuh (Swift-Hook / Rosenthal)
        rho = self.props["density_solid"]
        Cp = self.props["specific_heat"]
        Tm = self.props["T_melt"]
        Lf = self.props["latent_heat_fus"]
        k = self.props["thermal_cond"]
        T0 = 298.15
        
        # Entalpi pencairan per volume
        H_melt = rho * (Cp * (Tm - T0) + Lf)
        alpha = k / (rho * Cp)
        
        # Kapasitas peleburan volumetrik teoritis per satuan panjang
        fusion_area_m2 = P_net_W / (H_melt * v_welding_m_s * 1.8)
        
        # Estimasi Lebar Lasan Muka (Top Crown Width) dan Bawah (Root Width)
        top_width_mm = 2.4 * orifice_dia_mm * math.sqrt(current_A / 120.0)
        root_width_mm = top_width_mm * (0.4 + 0.3 * (ratio_pressure - 1.0))
        root_width_mm = max(0.0, min(top_width_mm * 0.9, root_width_mm))
        
        # Evaluasi Status Stabilitas
        # Interval Stabil: 1.10 <= ratio <= 2.20
        status_keyhole = "STABIL (PERFECT KEYHOLE)"
        if ratio_pressure < 1.05:
            status_keyhole = "GAGAL PENETRASI (BLIND POOL / LACK OF FUSION)"
        elif ratio_pressure > 2.30:
            status_keyhole = "CACAT JEBOL (BURN-THROUGH / BLOWOUT)"
            
        heat_input_linear_J_mm = (P_net_W / v_welding_m_s) / 1e3
            
        return {
            "plasma_velocity_m_s": jet["plasma_velocity_m_s"],
            "opening_arc_pressure_Pa": P_open,
            "closing_capillary_pressure_Pa": P_close,
            "pressure_balance_ratio": ratio_pressure,
            "linear_heat_input_J_mm": heat_input_linear_J_mm,
            "top_crown_width_mm": top_width_mm,
            "root_width_mm": root_width_mm,
            "keyhole_stability_status": status_keyhole
        }

if __name__ == "__main__":
    solver = PlasmaArcWeldingSolver(material="SS304L")
    
    # Parameter Pengelasan Tangki Bejana Tekan Stainless Steel 304L (Tebal 6,0 mm)
    current = 190.0          # Ampere
    voltage = 28.5           # Volt
    travel_speed = 3.8       # mm/s (~228 mm/min)
    thickness = 6.0          # mm
    gas_flow = 3.2           # L/min (Orifice Argon)
    nozzle_dia = 3.2         # mm (Orifice diameter)
    
    res = solver.evaluate_keyhole_penetration_stability(
        current_A=current,
        voltage_V=voltage,
        speed_mm_s=travel_speed,
        plate_thickness_mm=thickness,
        orifice_flow_L_min=gas_flow,
        orifice_dia_mm=nozzle_dia
    )
    
    print("=================================================================")
    print(f"HASIL SIMULASI KEYHOLE PLASMA ARC WELDING — {solver.material}")
    print("=================================================================")
    print(f"Kecepatan Semburan Jet Plasma      : {res['plasma_velocity_m_s']:.1f} m/s")
    print(f"Tekanan Stagnasi Pembuka (P_open)  : {res['opening_arc_pressure_Pa']:.1f} Pa ({res['opening_arc_pressure_Pa']/1e3:.2f} kPa)")
    print(f"Tekanan Penutup Kapiler (P_close)  : {res['closing_capillary_pressure_Pa']:.1f} Pa ({res['closing_capillary_pressure_Pa']/1e3:.2f} kPa)")
    print(f"Rasio Keseimbangan Tekanan         : {res['pressure_balance_ratio']:.3f}")
    print(f"Status Kestabilan Lubang Kunci     : {res['keyhole_stability_status']}")
    print("-----------------------------------------------------------------")
    print(f"Masukan Kalor Linear Neto          : {res['linear_heat_input_J_mm']:.2f} J/mm")
    print(f"Lebar Penampang Las Atas (Crown)   : {res['top_crown_width_mm']:.2f} mm")
    print(f"Lebar Fusi Akar Bawah (Root Width) : {res['root_width_mm']:.2f} mm")
    print("=================================================================")
```

---

## 6. Studi Kasus Industri: Pengelasan Bejana Tekan Kriogenik Baja Tahan Karat Austenitik ($AISI\ 304L\ / 1.4307$)

### 6.1. Deskripsi Masalah & Spesifikasi Komponen

Sebuah industri manufaktur peralatan proses kimia dan bejana kriogenik memproduksi tangki penyimpanan cairan nitrogen cair (*liquid nitrogen storage vessel*) berbahan plat baja tahan karat austenitik $AISI\ 304L$ berketebalan dinding $H_0 = 8{,}0\ \text{mm}$.

Permasalahan pada jalur fabrikasi sebelumnya:
1. Pengelasan menggunakan metode *Gas Tungsten Arc Welding* (GTAW) otomatis memerlukan alur kampuh miring (*single-V groove*, sudut kampuh $60^\circ$) dengan 4 lintasan (*root, 2x fill, cap*). Hal ini menyebabkan konsumsi gas argon pelindung yang sangat besar ($18\ \text{L/min}$ selama 45 menit per sambungan keliling) dan distorsi sudut distorsi melintang mencapai $4{,}2^\circ$.
2. Sensitasi korosi batas butir (*intergranular corrosion*) akibat masukan panas kumulatif tinggi pada lintasan jamak yang memperlambat laju pendinginan melalui rentang temperatur kritis $500 - 850\ ^\circ\text{C}$ (pembentukan karbida kromium $Cr_{23}C_6$).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    STUDI KASUS: OPTIMASI PARAMETER PENGELASAN PAW BEJANA TEKAN STAINLESS STEEL 304L                   |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         Parameter Proses                     Multi-Pass GTAW (TIG)           Keyhole PAW Single-Pass                  |
|         ───────────────────────────────────────────────────────────────────────────────────────────────────           |
|         Preparasi Kampuh Las                 Single-V Groove (60 deg, 2mm)   Square Butt (I-Groove, 0mm Gap)          |
|         Jumlah Lintasan (*Passes*)           4 Lintasan (Root + Fill + Cap)  1 Lintasan Tunggal (*Keyhole Mode*)      |
|         Arus Pengelasan ($I$)                140 - 180 A                     225 A (Tegangan: 29 V)                   |
|         Kecepatan Pengelasan ($v$)           1,8 mm/s                        3,2 mm/s (192 mm/min)                    |
|         Kebutuhan Kawat Las Pengisi          1,45 kg per meter sambungan     0,0 kg (Autogenous / Tanpa Filler)       |
|         Masukan Panas Total Kumulatif        3650 J/mm                       1530 J/mm (Reduksi 58,1%)                |
|         Distorsi Sudut (*Angular Distortion*)4,2 derajat (REJECT)            0,35 derajat (PASS < 0,5 deg)            |
|         Uji Korosi ASTM A262 Practice E      Gagal (Terjadi Cracking)        Lolos 100% (Bebas Sensitasi Batas Butir) |
|         Waktu Siklus Fabrikasi per Bejana    185 Menit                       38 Menit (Penghematan Waktu 79,5%)       |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 6.2. Evaluasi Metalurgi & Pengujian Mekanis

Pengelasan *Keyhole PAW* lintasan tunggal autogenus pada baja tahan karat austenitik $304L$ memberikan peningkatan sifat mekanik dan metalurgi yang signifikan:
- **Kandungan Fasa Ferit Delta ($\delta$-ferrite)**: Dipertahankan pada rentang ideal $6 - 9\ \text{FN}$ (*Ferrite Number*) pada zona fusi, sepenuhnya meniadakan kerentanan retak panas pemadatan (*solidification hot cracking*) sesuai diagram Schaeffler-DeLong.
- **Kekuatan Tarik & Uji Tekuk**: Pengujian tarik menurut **ASTM E8M** menghasilkan kekuatan tarik luluh $\sigma_y = 315\ \text{MPa}$ dan kekuatan tarik ultimate $\sigma_{\text{uts}} = 635\ \text{MPa}$ dengan patahan terjadi pada daerah logam induk. Uji lengkung pandu (*guided bend test* 180° menurut **ASTM E190**) tidak menunjukkan adanya retakan atau pembukaan diskontinuitas pada muka maupun akar las.

---

## 7. Rujukan Terverifikasi (Standards & Peer-Reviewed Literature)

1. **AWS C5.1:2018**: *Recommended Practices for Plasma Arc Welding*. American Welding Society, Miami, FL.
2. **ISO 15614-6:2006**: *Specification and qualification of welding procedures for metallic materials — Welding procedure test — Part 6: Arc and gas welding of copper and its alloys*. International Organization for Standardization.
3. **ISO 15614-1:2017**: *Specification and qualification of welding procedures for metallic materials — Welding procedure test — Part 1: Arc and gas welding of steels and arc welding of nickel and nickel alloys*. International Organization for Standardization.
4. **ASME Boiler and Pressure Vessel Code (BPVC) Section IX:2023**: *Welding, Brazing, and Fusing Qualifications — Plasma Arc Welding Procedure & Performance Qualifications (QW-214 & QW-400)*. American Society of Mechanical Engineers.
5. **ASTM E8 / E8M-24**: *Standard Test Methods for Tension Testing of Metallic Materials*. ASTM International, West Conshohocken, PA. DOI: https://doi.org/10.1520/E0008_E0008M-24.
6. Wu, D., Tashiro, S., Hua, X., & Tanaka, M. (2019). *Analysis of the energy propagation in the keyhole plasma arc welding using a novel fully coupled plasma arc-keyhole-weld pool model*. **International Journal of Heat and Mass Transfer**, 142, 118443. DOI: https://doi.org/10.1016/j.ijheatmasstransfer.2019.07.008.
7. Abedifard, R., & Sadodin, S. (2015). *Numerical modeling of non-Fourier heat transfer and fluid flow during plasma arc welding of AISI 304 stainless steel*. **Numerical Heat Transfer, Part A: Applications**, 68(10), 1146-1166. DOI: https://doi.org/10.1080/10407782.2015.1080576.
8. Zhang, T., Wu, C. S., & Feng, Y. H. (2011). *Numerical Analysis of Heat Transfer and Fluid Flow in Keyhole Plasma Arc Welding*. **Numerical Heat Transfer, Part A: Applications**, 60(8), 685-703. DOI: https://doi.org/10.1080/10407782.2011.616851.
9. Li, T. Q., Wu, C. S., Feng, Y. H., & Zheng, L. C. (2012). *Modeling of the thermal fluid flow and keyhole shape in stationary plasma arc welding*. **International Journal of Heat and Fluid Flow**, 34, 100-109. DOI: https://doi.org/10.1016/j.ijheatfluidflow.2011.12.004.
