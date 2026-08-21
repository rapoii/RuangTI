# Modul 584: High-Velocity Oxygen-Fuel (HVOF) Thermal Spray: Dinamika Gas Supersonik Nozel De Laval, Akselerasi Partikel In-Flight, Kinetika Solidifikasi Splat, dan Kekuatan Adhesi Lapisan (ASTM C633 & ISO 14919)

## 1. Pengantar & Prinsip Fundamental High-Velocity Oxygen-Fuel (HVOF) Thermal Spray

High-Velocity Oxygen-Fuel (HVOF) Thermal Spray adalah proses pelapisan termal canggih (*advanced thermal spray coating*) di mana bahan baku berupa serbuk mikro (*micro-powder feedstock*, diameter partikel $d_p = 10 - 45\text{ }\mu\text{m}$) disuntikkan ke dalam aliran gas hasil pembakaran berkecepatan tinggi yang mengalami ekspansi supersonik melalui nozel konvergen-divergen (*De Laval nozzle*). Campuran bahan bakar hidrokarbon (seperti propana, propilena, gas alam, kerosene / minyak tanah cair) dan oksigen bertekanan tinggi ($P_{\text{comb}} = 0.5 - 1.2\text{ MPa}$) dibakar secara kontinu di dalam ruang bakar (*combustion chamber*), menghasilkan temperatur gas $T_{\text{flame}} \approx 2500 - 3200\text{ K}$ dan kecepatan semburan jet supersonik $v_{\text{gas}} \approx 1200 - 2200\text{ m/s}$ (Mach $M = 1.5 - 2.5$).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    ARSITEKTUR HVOF GUN & DINAMIKA JET GAS SUPERSONIK                                  |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   ┌─────────────────────────────────────────────────────────────────────────────────────────────────────────────┐     |
|   │                                    BADAN SENJATA HVOF (GUN BODY)                                            │     |
|   │                                                                                                             │     |
|   │  Bahan Bakar Kerosene/C3H8 ──►┌─────────────────────┐                                                       │     |
|   │  (P = 0.8 - 1.2 MPa)          │ RUANG PEMBAKARAN    │                                                       │     |
|   │                               │ (COMBUSTION CHAMBER)│                                                       │     |
|   │  Oksigen O2 Murni ───────────►│ P_0 = 8 - 12 bar    │                                                       │     |
|   │  (P = 0.8 - 1.5 MPa)          │ T_0 = 2800 - 3100 K │                                                       │     |
|   │                               └──────────┬──────────┘                                                       │     |
|   │                                          │                                                                  │     |
|   │  Gas Pembawa (Carrier Gas N2/Ar) ────────┼───────────────────┐                                              │     |
|   │  + Serbuk Feedstock (WC-Co/Cr3C2-NiCr) ──┘                   │                                              │     |
|   │                                                              ▼                                              │     |
|   │                                            ┌─── Konvergen ─┬─── Divergen ─────────┐                         │     |
|   │                                            │  Leher (Throat) A*                   │                         │     |
|   │  Air Pendingin (Water Cooling Jacket) ────►│  (Mach M = 1.0) ─► Nozel De Laval   │                         │     |
|   │                                            └───────────────┴──────────────────────┘                         │     |
|   └──────────────────────────────────────────────────────────────┬──────────────────────────────────────────────┘     |
|                                                                  │                                                    |
|                                                                  ▼ Gelombang Kejut Berlian (Shock Diamonds)           |
|                                                 > > > > > ░░░░░░░░░░░░░░ > > > > >                                    |
|                                                   Jet Gas Supersonik (v_g = 1500 - 2100 m/s)                          |
|                                                   Partikel In-Flight (v_p = 500 - 900 m/s, T_p = 1800 - 2400 K)       |
|                                                                  │                                                    |
|                                                                  │ Stand-off Distance (SOD = 200 - 380 mm)            |
|                                                                  ▼                                                    |
|                                              ┌──────────────────────────────────────────────┐                         |
|                                              │ DEPOSISI SPLAT & LAPISAN KERAS (COATING)     │                         |
|                                              │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │                         |
|                                              │   Porositas Sangat Rendah (P < 0.5%)         │                         |
|                                              │   Tegangan Sisa Tekan (Peening Stress)       │                         |
|                                              │   Kekuatan Adhesi Ekstrim (> 70 - 90 MPa)    │                         |
|                                              ├──────────────────────────────────────────────┤                         |
|                                              │ Pelat Substrat Dasar (Steel / Inconel / Al)  │                         |
|                                              │ (Kekasaran Permukaan Grit Blasted Ra 3-6 um) │                         |
|                                              └──────────────────────────────────────────────┘                         |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Berbeda dengan teknik *Atmospheric Plasma Spraying (APS)* yang mengandalkan temperatur sangat tinggi ($>10.000\text{ K}$) dengan kecepatan partikel moderat ($v_p \approx 200 - 400\text{ m/s}$), HVOF mengutamakan **energi kinetik impak kinetik ultra-tinggi (*kinetic energy dominance*)** dengan temperatur kerja yang relatif moderat. Karakteristik ini memberikan keunggulan metalurgi yang vital:
1. **Minim Dekomposisi & Dekarburisasi (*Minimal Decarburization*)**: Dalam penyemprotan material cermet sensitif panas seperti Tungsten Carbide-Cobalt ($WC\text{-}Co$), dekomposisi getas $WC \to W_2C + C$ atau pembentukan fasa getas $\eta$-phase ($Co_3W_3C / Co_6W_6C$) dapat ditekan secara signifikan.
2. **Kerapatan Ekstrim & Porositas Sangat Rendah (*Ultra-Dense Coatings*)**: Impak partikel dengan momentum tinggi memicu deformasi plastis hebat (*flattening and peening*), menghasilkan porositas mikro $< 0.5\% - 1.0\%$.
3. **Tegangan Sisa Tekan (*Favorable Compressive Residual Stresses*)**: Efek *hammering/peening* dari partikel berkecepatan ratusan meter per detik menetralkan tegangan tarik pendinginan (*quenching tensile stress*), menghasilkan tegangan sisa tekan yang meningkatkan ketahanan lelah (*fatigue life*) komponen dasar.
4. **Kekuatan Lekat Antarmuka Unggul (*Bond Strength*)**: Kekuatan rekat tarik melampaui kekuatan lem polimer standar ($> 70 - 90\text{ MPa}$ berdasarkan uji ASTM C633).

Standar internasional yang meregulasi proses dan pengujian HVOF mencakup:
- **ASTM C633**: *Standard Test Method for Adhesion or Cohesion Strength of Thermal Spray Coatings*.
- **ISO 14919**: *Thermal spraying — Wires, rods, cords and powders for flame and arc spraying — Classification and technical supply conditions*.
- **ISO 14923**: *Thermal spraying — Characterization and testing of thermally sprayed coatings*.
- **DIN EN ISO 2063**: *Thermal spraying — Zinc, aluminium and their alloys*.
- **ASTM E1920**: *Standard Guide for Metallographic Preparation of Thermal Sprayed Coatings*.

---

## 2. Termodinamika Gas Dinamika Supersonik Nozel De Laval

Aliran gas campuran pembakaran melalui nozel konvergen-divergen dimodelkan menggunakan persamaan dinamika gas kompresibel isentropik kuasi-satu dimensi (*1D isentropic compressible flow equations*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                  VARIASI PROFIL AERODINAMIKA NOZEL DE LAVAL HVOF                                      |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   Tekanan P / Kecepatan v                                                                                             |
|                                                                                                                       |
|         P_0 ┼─────────╮                                                                                               |
|             │          ╲                                                                                              |
|             │           ╲   Tekanan Statis P(x) Menurun Drastis                                                       |
|             │            ╲                                                                                            |
|             │             ╰───────────────╮                                                                           |
|             │                              ╲                                                                          |
|         P_e ┼ - - - - - - - - - - - - - - - ╰───────────────────────► P_exit                                          |
|                                                                                                                       |
|         v_e ┼ - - - - - - - - - - - - - - - ╭───────────────────────► v_gas Supersonik (1800 - 2200 m/s)             |
|             │                              ╱                                                                          |
|             │             ╭───────────────╯                                                                           |
|             │            ╱  Kecepatan Gas v(x) Naik Pesat                                                             |
|             │           ╱                                                                                             |
|           0 ┼──────────╯                                                                                              |
|             └───────────┬───────────────────┬───────────────────────► Panjang Aksial Nozel x                          |
|                      Konvergen            Throat A*                Divergen                                           |
|                     (Subsonik M < 1)     (Sonic M = 1)            (Supersonik M > 1)                                  |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.1 Hubungan Luas Penampang-Bilangan Mach (Area-Mach Relation)
Distribusi bilangan Mach $M(x) = v_{\text{gas}} / a_{\text{acoustic}}$ sepanjang penampang nozel $A(x)$ terhadap luas leher (*throat area*, $A^*$) dinyatakan oleh persamaan dinamika fluida kompresibel:

$$\frac{A(x)}{A^*} = \frac{1}{M(x)} \left[ \frac{2}{\gamma + 1} \left( 1 + \frac{\gamma - 1}{2} M^2(x) \right) \right]^{\frac{\gamma + 1}{2(\gamma - 1)}}$$

Di mana:
- $\gamma = C_p / C_v$ = Rasio kapasitas kalor spesifik gas pembakaran ($\gamma \approx 1.20 - 1.35$).
- $A^*$ = Luas penampang leher nozel (*choked throat*, $M = 1$).

### 2.2 Hubungan Termodinamika Tekanan, Temperatur, dan Kecepatan Gas
Dengan tekanan stagnasi ruang bakar $P_0$ dan temperatur stagnasi $T_0$:

$$T(x) = \frac{T_0}{1 + \frac{\gamma - 1}{2} M^2(x)}$$

$$P(x) = \frac{P_0}{\left( 1 + \frac{\gamma - 1}{2} M^2(x) \right)^{\frac{\gamma}{\gamma - 1}}}$$

$$\rho_g(x) = \frac{\rho_0}{\left( 1 + \frac{\gamma - 1}{2} M^2(x) \right)^{\frac{1}{\gamma - 1}}} = \frac{P(x)}{R_{\text{gas}} T(x)}$$

Kecepatan gas keluar nozel (*exit velocity*, $v_e$):
$$v_{\text{gas}}(x) = M(x) \cdot \sqrt{\gamma R_{\text{gas}} T(x)} = \sqrt{\frac{2 \gamma R_{\text{gas}} T_0}{\gamma - 1} \left[ 1 - \left( \frac{P(x)}{P_0} \right)^{\frac{\gamma - 1}{\gamma}} \right]}$$

Di mana $R_{\text{gas}} = \bar{R} / M_{\text{mol}}$ adalah konstanta gas spesifik campuran pembakaran ($M_{\text{mol}} \approx 24 - 30\text{ kg/kmol}$).

---

## 3. Kinematika & Transfer Termal Partikel In-Flight

Partikel serbuk yang diinjeksikan secara koaksial atau radial ke dalam jet supersonik dipercepat oleh gaya hambat aerodinamika (*aerodynamic drag force*) dan dipanaskan melalui konveksi dan radiasi paksa.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                  NERACA GAYA DAN KALOR PADA PARTIKEL SERBUK IN-FLIGHT                                 |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                                     Vektor Kecepatan Relatif v_rel = (v_g - v_p)                                      |
|                                       ────────────────────────────────────────►                                       |
|                                                                                                                       |
|                                           ┌───────────────────────────────┐                                           |
|                                           │      Fluks Kalor Konveksi     │                                           |
|                                           │      q_conv = h * (T_g - T_p) │                                           |
|                                           └───────────────┬───────────────┘                                           |
|                                                           │                                                           |
|                                                           ▼                                                           |
|                                                  . ── ── ── ── .                                                      |
|                                              . '   Konduksi    ' .                                                    |
|                                            /      Intra-Partikel   \                                                  |
|                   Gaya Hambat Drag        │   k_p * (d2T/dr2)       │  Gaya Inersia Gerak                             |
|              F_D = 0.5*Cd*rho_g*A_p*v_rel^2 ◄─                      ──► m_p * (dv_p / dt)                             |
|                                           │    Pelelehan Fasa Cair  │                                                 |
|                                            \   (T_p >= T_melting)  /                                                  |
|                                              . '                 ' .                                                  |
|                                                  ' ── ── ── ── '                                                      |
|                                                           │                                                           |
|                                                           ▼                                                           |
|                                           ┌───────────────────────────────┐                                           |
|                                           │      Radiasi Permukaan        │                                           |
|                                           │ q_rad = eps*sigma*(Tp^4 - T0^4│                                           |
|                                           └───────────────────────────────┘                                           |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.1 Persamaan Momentum Gerak Partikel (Akselerasi Aerodinamika)
Massa partikel sferis dengan diameter $d_p$ dan massa jenis $\rho_p$ adalah $m_p = \frac{\pi}{6} \rho_p d_p^3$. Persamaan diferensial gerak partikel 1D:

$$\frac{d v_p}{d t} = \frac{3}{4} \frac{\rho_g}{\rho_p d_p} C_D (v_{\text{gas}} - v_p) |v_{\text{gas}} - v_p|$$

Di mana koefisien hambat partikel sferis $C_D$ dinyatakan sebagai fungsi bilangan Reynolds relatif ($Re_p = \frac{\rho_g |v_{\text{gas}} - v_p| d_p}{\mu_g}$):

$$C_D = \begin{cases} 
\frac{24}{Re_p} \left( 1 + 0.15 Re_p^{0.687} \right) & \text{untuk } Re_p \le 1000 \quad (\text{Korelasi Schiller-Naumann}) \\
0.44 & \text{untuk } Re_p > 1000
\end{cases}$$

Koreksi kompresibilitas gas supersonik (bilangan Mach relatif $M_p = |v_{\text{gas}} - v_p| / a_g$) diaplikasikan menggunakan model Henderson jika $M_p > 0.3$.

### 3.2 Persamaan Pemanasan dan Pelelehan Partikel
Dengan mengasumsikan gradien temperatur internal rendah (bilangan Biot $Bi = \frac{h d_p}{6 k_p} < 0.1$, *lumped capacitance model*):

$$m_p C_p \frac{d T_p}{d t} = \pi d_p^2 \cdot h_{\text{conv}} (T_{\text{gas}} - T_p) - \pi d_p^2 \cdot \epsilon \sigma_{\text{SB}} (T_p^4 - T_{\text{env}}^4)$$

Koefisien perpindahan panas konveksi $h_{\text{conv}}$ ditentukan dari bilangan Nusselt ($Nu_p$):
$$Nu_p = \frac{h_{\text{conv}} d_p}{k_g} = 2.0 + 0.6 \cdot Re_p^{1/2} \cdot Pr^{1/3} \quad (\text{Korelasi Ranz-Marshall})$$

di mana $Pr = \frac{\mu_g C_{p,g}}{k_g}$ adalah bilangan Prandtl gas pelindung.

---

## 4. Kinetika Impak Splat, Solidifikasi & Mekanisme Adhesi Lapisan

Ketika partikel cair/semi-cair menabrak substrat padat dengan kecepatan tinggi ($v_p = 500 - 900\text{ m/s}$), partikel mengalami deformasi plastis ekstrim dan merata menjadi piringan pipih tipis yang disebut **splat**.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                     DINAMIKA DEFORMASI DAN PEMBENTUKAN SPLAT TUNGGAL                                  |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   1. SEBELUM IMPAK                       2. SIKLUS SPREADING & SOLIDIFIKASI      3. SPLAT PADAT AKHIR                 |
|   Partikel Sferis (d_p)                  Waktu Spreading: t_flat ~ 10 - 50 ns    Ketebalan Splat: b_splat ~ 0.5 - 2 um|
|                                          Laju Pendinginan: 10^7 - 10^9 K/s       Diameter Splat: D_splat = xi * d_p   |
|         . ── .                                                                                                        |
|       (  m_p   ) v_p = 750 m/s                Aliran Jet Radial                      Diameter Efektif D_splat         |
|         ' ── '                                ◄────        ────►                  ◄──────────────────────────────►    |
|           │                                  ╭──────────────────╮                 ╭──────────────────────────────╮    |
|           ▼                                  │ ░░░░ Liquid ░░░░ │                 │ ▓▓▓▓ Padat Nanokristalin ▓▓▓ │    |
|   ────────────────────── Substrat            └───┴──────────┴───┘                 └───┴──────────────────────┴───┘    |
|                                                Ketahanan Kontak Termal R_c          Mechanical Interlocking Mikro     |
|                                              ────────────────────────── Substrat  ──────────────────────── Substrat   |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 4.1 Rasio Perataan Splat (Flattening Ratio - Model Madejski)
Rasio perataan geometri $\xi = \frac{D_{\text{splat}}}{d_p}$ diatur oleh keseimbangan antara inersia partikel, tegangan permukaan $\sigma_{\text{liquid}}$, dan disipasi viskositas $\mu_{\text{liquid}}$ yang dinyatakan oleh bilangan Reynolds ($Re$) dan Weber ($We$):

$$Re = \frac{\rho_p v_p d_p}{\mu_p}, \quad We = \frac{\rho_p v_p^2 d_p}{\sigma_p}$$

Berdasarkan model analitis Madejski yang disempurnakan (Madejski, 1976; Fauchais, 2014):

$$\xi = \frac{D_{\text{splat}}}{d_p} \approx 1.12 \cdot Re^{0.2} \cdot \left( \frac{Re}{We} \right)^{0.05} \approx 1.12 \cdot Re^{0.2} \cdot Oh^{-0.1}$$

di mana $Oh = \frac{\mu_p}{\sqrt{\rho_p \sigma_p d_p}}$ adalah bilangan Ohnesorge. Untuk partikel WC-Co berkecepatan $750\text{ m/s}$, nilai $\xi$ tipikal berkisar antara $3.5 - 5.5$, menghasilkan ketebalan splat $b_{\text{splat}} = \frac{2 d_p}{3 \xi^2} \approx 0.8 - 2.0\text{ }\mu\text{m}$.

### 4.2 Laju Pendinginan Ekstrim & Pembentukan Ikatan (Cooling Rate & Splat Quenching)
Waktu solidifikasi penuh splat $t_{\text{solid}}$ berada dalam orde nanodetik:

$$t_{\text{solid}} \approx \frac{\rho_p L_f b_{\text{splat}}}{h_{\text{contact}} (T_{\text{melting}} - T_{\text{substrate}})}$$

Laju pendinginan (*cooling rate*) mencapai:
$$\dot{T}_{\text{quench}} = \frac{\partial T}{\partial t} \approx 10^7 - 10^9\text{ K/s}$$

Laju pendinginan ekstrim ini menghasilkan struktur butir metastabil nanokristalin atau amorf yang sangat tahan aus dan bebas segregasi makro.

### 4.3 Kekuatan Adhesi Lapisan Sesuai ASTM C633
Kekuatan lekat antarmuka (*adhesion/cohesion strength*, $\sigma_{\text{bond}}$) diukur melalui uji tarik tegak lurus permukaan (*pull-off tensile test*) menggunakan dua silinder uji standar $\varnothing 25.4\text{ mm}$ (1 inch):

$$\sigma_{\text{bond}} = \frac{F_{\text{rupture}}}{A_{\text{cylinder}}} = \frac{4 F_{\text{rupture}}}{\pi D^2} \quad \left[\text{MPa}\right]$$

Di mana:
- $F_{\text{rupture}}$ = Beban tarik maksimum saat terjadi kegagalan rekat ($\text{Newton}$).
- $D = 25.4\text{ mm}$ = Diameter penampang benda uji ($A = 506.7\text{ mm}^2$).

Jika kegagalan terjadi pada lem polimer epoksi pengikat ($F_{\text{rupture}} > 80\text{ MPa}$), dicatat sebagai *Glue Failure* dan kekuatan lapisan aktual dinotasikan $\sigma_{\text{bond}} > \sigma_{\text{glue}}$.

---

## 5. Implementasi Algoritma & Python Solver: Gas Dinamika Supersonik & Lintasan Partikel

Berikut adalah program simulasi Python komprehensif untuk menganalisis distribusi aerodinamika nozel De Laval 1D, mengintegrasikan trayektori kecepatan dan temperatur partikel *in-flight* dengan metode Euler/Runge-Kutta, memprediksi rasio perataan splat Madejski, dan menghitung kekuatan adhesi ASTM C633:

```python
"""
RuangTI - Industrial Engineering Knowledge Hub
Module 584: High-Velocity Oxygen-Fuel (HVOF) Multiphysics Solver
Solves: 1D Compressible Nozzle Gas Dynamics, In-Flight Particle Kinematics,
        Madejski Splat Flattening Ratio, and ASTM C633 Adhesion Strength.
"""

import math
import numpy as np
from typing import Dict, List, Tuple

class HVOFThermalSpraySimulator:
    def __init__(self,
                 combustion_pressure_bar: float = 8.5,  # P0 in bar
                 combustion_temp_k: float = 2950.0,    # T0 in Kelvin
                 gas_gamma: float = 1.25,              # Specific heat ratio
                 gas_molar_mass: float = 27.5,         # kg / kmol
                 throat_diameter_mm: float = 10.0,     # D* in mm
                 exit_diameter_mm: float = 14.5,       # D_exit in mm
                 barrel_length_mm: float = 250.0):     # Nozzle length in mm
        
        self.P0 = combustion_pressure_bar * 1e5  # Pa
        self.T0 = combustion_temp_k            # K
        self.gamma = gas_gamma
        self.M_mol = gas_molar_mass * 1e-3     # kg / mol
        self.R_gas = 8.31446 / self.M_mol       # J / (kg * K)
        
        self.d_throat = throat_diameter_mm * 1e-3
        self.d_exit = exit_diameter_mm * 1e-3
        self.L_barrel = barrel_length_mm * 1e-3
        
        self.A_throat = math.pi * (self.d_throat ** 2) / 4.0
        self.A_exit = math.pi * (self.d_exit ** 2) / 4.0
        self.area_ratio = self.A_exit / self.A_throat
        
        # Calculate exit Mach number using area-Mach iteration
        self.M_exit = self._solve_exit_mach(self.area_ratio, self.gamma)
        
    def _solve_exit_mach(self, area_ratio: float, gamma: float) -> float:
        """Solves area-Mach relation for supersonic exit branch (M > 1)."""
        m = 2.0  # Initial guess
        for _ in range(50):
            # f(M) = (1/M) * [ 2/(gamma+1) * (1 + (gamma-1)/2 * M^2) ]^((gamma+1)/(2*(gamma-1))) - area_ratio
            term = (2.0 / (gamma + 1.0)) * (1.0 + 0.5 * (gamma - 1.0) * m**2)
            exponent = (gamma + 1.0) / (2.0 * (gamma - 1.0))
            f_val = (1.0 / m) * (term ** exponent) - area_ratio
            
            # Derivative f'(M)
            df_dm = (term ** exponent) * ( -1.0 / (m**2) + (gamma + 1.0) / (2.0 * term) * (m * (gamma - 1.0) / (gamma + 1.0)) * (1.0 / m) )
            m_next = m - f_val / df_dm
            if abs(m_next - m) < 1e-6:
                return m_next
            m = m_next
        return m

    def get_exit_gas_properties(self) -> Dict[str, float]:
        """Calculates temperature, pressure, density, and velocity of exit gas jet."""
        m_e = self.M_exit
        t_e = self.T0 / (1.0 + 0.5 * (self.gamma - 1.0) * m_e**2)
        p_e = self.P0 / ((1.0 + 0.5 * (self.gamma - 1.0) * m_e**2) ** (self.gamma / (self.gamma - 1.0)))
        rho_e = p_e / (self.R_gas * t_e)
        a_e = math.sqrt(self.gamma * self.R_gas * t_e)
        v_e = m_e * a_e
        
        return {
            "exit_mach": m_e,
            "exit_temp_K": t_e,
            "exit_pressure_bar": p_e / 1e5,
            "exit_density_kg_m3": rho_e,
            "exit_velocity_m_s": v_e,
            "speed_of_sound_m_s": a_e
        }

    def simulate_inflight_particle(self,
                                  particle_diameter_um: float = 30.0,
                                  particle_density_kg_m3: float = 14500.0, # WC-10Co-4Cr
                                  particle_cp: float = 295.0,              # J/(kg*K)
                                  particle_initial_temp_k: float = 300.0,
                                  standoff_distance_mm: float = 300.0,
                                  dt: float = 1e-6) -> Dict[str, float]:
        """
        Integrates 1D trajectory of a single powder particle from gun throat to substrate.
        Computes velocity and temperature profile.
        """
        d_p = particle_diameter_um * 1e-6
        rho_p = particle_density_kg_m3
        m_p = (math.pi / 6.0) * (d_p ** 3) * rho_p
        a_p_cross = math.pi * (d_p ** 2) / 4.0
        a_p_surface = math.pi * (d_p ** 2)
        
        gas_prop = self.get_exit_gas_properties()
        v_gas = gas_prop["exit_velocity_m_s"]
        t_gas = gas_prop["exit_temp_K"]
        rho_gas = gas_prop["exit_density_kg_m3"]
        mu_gas = 5.0e-5  # Dynamic viscosity Pa.s
        k_gas = 0.15     # Thermal conductivity W/(m.K)
        pr_gas = 0.72    # Prandtl number
        
        # State variables
        x = 0.0
        v_p = 25.0  # Initial injection velocity m/s
        t_p = particle_initial_temp_k
        t_total = 0.0
        
        target_x = (self.L_barrel + standoff_distance_mm * 1e-3)
        
        while x < target_x:
            # Relative flow
            v_rel = abs(v_gas - v_p)
            re_p = (rho_gas * v_rel * d_p) / mu_gas if mu_gas > 0 else 1.0
            
            # Drag coefficient (Schiller-Naumann correlation)
            if re_p <= 1000.0:
                c_d = (24.0 / re_p) * (1.0 + 0.15 * (re_p ** 0.687))
            else:
                c_d = 0.44
                
            f_drag = 0.5 * c_d * rho_gas * a_p_cross * (v_gas - v_p) * v_rel
            a_acc = f_drag / m_p
            
            # Heat transfer (Ranz-Marshall correlation)
            nu_p = 2.0 + 0.6 * (re_p ** 0.5) * (pr_gas ** (1.0 / 3.0))
            h_conv = (nu_p * k_gas) / d_p
            q_conv = h_conv * a_p_surface * (t_gas - t_p)
            
            # Time stepping
            v_p += a_acc * dt
            t_p += (q_conv / (m_p * particle_cp)) * dt
            x += v_p * dt
            t_total += dt
            
            if t_total > 0.05:  # Safety cutoff
                break
                
        # Calculate Madejski flattening ratio
        # Liquid properties for molten WC-Co droplet (viscosity ~ 0.005 Pa.s, surface tension ~ 1.5 N/m)
        mu_liq = 0.005
        sigma_liq = 1.5
        re_impact = (rho_p * v_p * d_p) / mu_liq
        we_impact = (rho_p * (v_p ** 2) * d_p) / sigma_liq
        
        flattening_ratio = 1.12 * (re_impact ** 0.2) * ((re_impact / we_impact) ** 0.05)
        splat_diameter_um = flattening_ratio * particle_diameter_um
        splat_thickness_um = (2.0 * particle_diameter_um) / (3.0 * (flattening_ratio ** 2))
        
        return {
            "impact_velocity_m_s": v_p,
            "impact_temp_K": t_p,
            "flight_time_ms": t_total * 1000.0,
            "reynolds_impact": re_impact,
            "weber_impact": we_impact,
            "madejski_flattening_ratio": flattening_ratio,
            "splat_diameter_um": splat_diameter_um,
            "splat_thickness_um": splat_thickness_um
        }

    @staticmethod
    def calculate_astm_c633_adhesion(rupture_force_kn: float, cylinder_diameter_mm: float = 25.4) -> Dict[str, Any]:
        """Calculates ASTM C633 tensile adhesion bond strength."""
        area_m2 = math.pi * ((cylinder_diameter_mm * 1e-3) ** 2) / 4.0
        force_n = rupture_force_kn * 1e3
        bond_strength_mpa = (force_n / area_m2) / 1e6
        
        return {
            "cylinder_diameter_mm": cylinder_diameter_mm,
            "test_area_mm2": area_m2 * 1e6,
            "rupture_force_kN": rupture_force_kn,
            "adhesion_strength_MPa": bond_strength_mpa,
            "pass_aerospace_threshold_70MPa": bond_strength_mpa >= 70.0
        }

if __name__ == "__main__":
    # Inisialisasi Sistem HVOF Kerosene-Oxygen DJ2600 / JP-5000
    hvof = HVOFThermalSpraySimulator(
        combustion_pressure_bar=9.2,
        combustion_temp_k=3050.0,
        gas_gamma=1.24,
        gas_molar_mass=28.0,
        throat_diameter_mm=10.0,
        exit_diameter_mm=14.8,
        barrel_length_mm=200.0
    )
    
    gas_res = hvof.get_exit_gas_properties()
    print("=== KARAKTERISTIK JET GAS SUPERSONIK NOZEL DE LAVAL HVOF ===")
    print(f"Bilangan Mach Exit (M_e)        : {gas_res['exit_mach']:.3f}")
    print(f"Kecepatan Gas Supersonik (v_e)  : {gas_res['exit_velocity_m_s']:.2f} m/s")
    print(f"Temperatur Gas Exit (T_e)       : {gas_res['exit_temp_K']:.2f} K")
    print(f"Tekanan Statis Exit (P_e)       : {gas_res['exit_pressure_bar']:.3f} bar")
    
    # Simulasi Partikel Cermet WC-10Co-4Cr (Diameter 25 um)
    p_res = hvof.simulate_inflight_particle(
        particle_diameter_um=25.0,
        particle_density_kg_m3=14200.0,
        standoff_distance_mm=320.0
    )
    print("\n=== KINEMATIKA PARTIKEL CERMET WC-10CO-4CR IN-FLIGHT ===")
    print(f"Kecepatan Impak Substrat (v_p)  : {p_res['impact_velocity_m_s']:.2f} m/s")
    print(f"Temperatur Impak Substrat (T_p) : {p_res['impact_temp_K']:.2f} K")
    print(f"Waktu Terbang (Flight Time)     : {p_res['flight_time_ms']:.3f} ms")
    print(f"Rasio Perataan Madejski (xi)    : {p_res['madejski_flattening_ratio']:.2f}")
    print(f"Diameter Splat Pipih (D_splat)  : {p_res['splat_diameter_um']:.2f} um")
    print(f"Ketebalan Splat (b_splat)       : {p_res['splat_thickness_um']:.2f} um")
    
    # Uji Kekuatan Adhesi ASTM C633
    adh_res = hvof.calculate_astm_c633_adhesion(rupture_force_kn=42.5)
    print("\n=== HASIL UJI TARIK ADHESI ASTM C633 ===")
    print(f"Gaya Putus Tarik (F_rupture)    : {adh_res['rupture_force_kN']:.2f} kN")
    print(f"Kekuatan Adhesi Antarmuka       : {adh_res['adhesion_strength_MPa']:.2f} MPa")
    print(f"Kualifikasi Dirgantara (>=70MPa): {'LOLOS / MEMENUHI' if adh_res['pass_aerospace_threshold_70MPa'] else 'GAGAL'}")
```

---

## 6. Studi Kasus Industri: Penggantian Hard Chrome Plating pada Batang Silinder Hidrolik Landing Gear Pesawat Komersial

### 6.1 Permasalahan Lingkungan & Kinerja Hard Chrome Plating (ECHA REACH)
Regulasi ketat Uni Eropa (*REACH Annex XIV*) dan OSHA membatasi penggunaan asam kromat heksavalen ($Cr^{6+}$) akibat sifat karsinogenik ekstrim pada proses elektroplating krom keras (*Hard Chrome Plating / HCP*). Selain regulasi lingkungan, lapisan HCP konvensional memiliki kelemahan mendasar:
- Timbulnya jaringan retak mikro (*micro-cracks*) intrinsik dari proses elektrodeposisi yang memicu korosi sumuran galvano-pitting.
- Tegangan sisa tarik tinggi yang menurunkan batas lelah (*fatigue endurance limit*) baja berkekuatan ultra-tinggi (*Ultra-High Strength Steel* 300M / AISI 4340) sebesar $20\% - 40\%$.
- Laju keausan abrasi tinggi dalam lingkungan pasir kering (*ASTM G65 dry sand rubber wheel*).

### 6.2 Implementasi Solusi HVOF WC-10Co-4Cr Cermet Coating
Industri manufaktur roda pendarat (*commercial aircraft landing gear tier-1*) mengganti HCP dengan lapisan cermet **WC-10Co-4Cr** setebal $200\text{ }\mu\text{m}$ menggunakan sistem HVOF bertekanan tinggi (JP-5000 Liquid Kerosene Fuel).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    PERBANDINGAN KINERJA TEKNIS: HARD CHROME VS. HVOF WC-10CO-4CR                      |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   Parameter Evaluasi                Hard Chrome Plating (HCP)            HVOF WC-10Co-4Cr Cermet                      |
|   ─────────────────────────────────────────────────────────────────────────────────────────────────────────────────   |
|   Kekerasan Mikro Permukaan         850 - 1000 HV_0.3                    1350 - 1500 HV_0.3 (+50% Lebih Keras)        |
|   Kekuatan Adhesi (ASTM C633)       35 - 50 MPa                          > 82.5 MPa (Substrate/Glue Cohesion Limit)   |
|   Porositas Lapisan                 1.5 - 3.0% (Micro-cracked)           < 0.4% (Ultra-Dense Homogeneous)             |
|   Tegangan Sisa (Residual Stress)   +80 s.d. +180 MPa (Tarik / Tensile)  -150 s.d. -350 MPa (Tekan / Compressive)     |
|   Dampak Batas Lelah Baja 300M      Penurunan Fatigue Life -32%          Peningkatan Fatigue Life +14%                |
|   Laju Keausan Abrasi (ASTM G65)    18.4 mm^3 / 1000 rev                 1.8 mm^3 / 1000 rev (Ketahanan Aus 10x Lipat)|
|   Uji Ketahanan Korosi Salt Spray   500 jam hingga timbul karat merah    > 3000 jam tanpa cacat (ASTM B117)           |
|   Dampak Lingkungan (REACH / OSHA)  Emisi Beracun Karsinogenik Cr(VI)    Bebas Cr(VI) / Ramah Lingkungan 100%         |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 6.3 Prosedur Kualifikasi Metallurgi Sesuai ISO 14923 & ASTM E1920
1. **Preparasi Permukaan Substrat**: *Grit blasting* menggunakan partikel alumina korundum cokelat kasar ($Al_2O_3$ mesh 24) pada tekanan udara $0.6\text{ MPa}$, sudut semprot $75^\circ$, menghasilkan profil kekasaran permukaan $R_a = 4.2 - 5.5\text{ }\mu\text{m}$ untuk *mechanical interlocking* optimal.
2. **Pengendalian Rasio Stoikiometri Bahan Bakar-Oksigen**: Mengoperasikan HVOF pada kondisi nyala api sedikit teroksidasi (*slightly oxidizing flame*, rasio $O_2 : \text{Kerosene} = 3.8 : 1$) untuk memaksimalkan efisiensi termal sambil mencegah dekarburisasi $WC$.
3. **Penyelesaian Akhir (*Diamond Superfinishing*)**: Pelapisan dihaluskan menggunakan gerinda roda berlian (*diamond grinding*) dan pemolesan sabuk (*superfinishing tape*) hingga mencapai kekasaran permukaan cermin $R_a \le 0.05\text{ }\mu\text{m}$ untuk menjaga keawetan segel hidrolik (*hydraulic seals*).

---

## 7. Referensi Akademis Terverifikasi (Standards & Peer-Reviewed Literature)

1. **Pawlowski, L. (2008)**. *The Science and Engineering of Thermal Spray Coatings* (2nd ed.). John Wiley & Sons, Chichester, UK. [DOI: 10.1002/9780470754085](https://doi.org/10.1002/9780470754085)
2. **Fauchais, P. L., Heberlein, J. V., & Boulos, M. I. (2014)**. *Thermal Spray Fundamentals: From Powder to Part*. Springer Science+Business Media, New York. [DOI: 10.1007/978-0-387-68991-3](https://doi.org/10.1007/978-0-387-68991-3)
3. **Sobolev, V. V., Guilemany, J. M., & Calero, J. A. (1998)**. *Thermal Processes in HVOF Sprayed WC-Co Coating on a Copper Substrate*. Journal of Thermal Spray Technology, 7(1), 89–95. [DOI: 10.1361/105996398770350918](https://doi.org/10.1361/105996398770350918)
4. **Madejski, J. (1976)**. *Solidification of droplets on a cold surface*. International Journal of Heat and Mass Transfer, 19(9), 1009–1013. [DOI: 10.1016/0017-9310(76)90183-6](https://doi.org/10.1016/0017-9310(76)90183-6)
5. **Tilger, M., & Biermann, D. (2019)**. *The Effect of Machined Surface Conditioning on the Coating Interface of High Velocity Oxygen Fuel (HVOF) Sprayed Coating*. Journal of Manufacturing and Materials Processing, 3(3), 79. [DOI: 10.3390/jmmp3030079](https://doi.org/10.3390/jmmp3030079)
6. **ASTM International (2021)**. *ASTM C633-21 Standard Test Method for Adhesion or Cohesion Strength of Thermal Spray Coatings*. ASTM International, West Conshohocken, PA.
7. **ISO (2015)**. *ISO 14919:2015 Thermal spraying — Wires, rods, cords and powders for flame and arc spraying — Classification and technical supply conditions*. International Organization for Standardization, Geneva.
8. **ISO (2012)**. *ISO 14923:2012 Thermal spraying — Characterization and testing of thermally sprayed coatings*. International Organization for Standardization, Geneva.
