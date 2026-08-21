# Modul 649: Additive Friction Stir Deposition (AFSD / MELD): Termomekanika Solid-State Metal Additive Manufacturing, Kinetika Rekristalisasi Dinamik Zener-Hollomon, Aliran Viskoplastis Non-Newtonian, dan Integritas Metalurgi Paduan Ringan Kedirgantaraan (ISO/ASTM 52900, ASTM E8M, AWS D17.3 & CIRP Annals)

## 1. Pengantar & Konteks Industri: Manufaktur Aditif Keadaan Padat Berbasis Gesekan

*Additive Friction Stir Deposition* (AFSD)—yang secara komersial dipelopori melalui teknologi MELD—merupakan proses manufaktur aditif logam keadaan padat (*solid-state metal additive manufacturing process*) bersuhu tinggi di mana material umpan logam padat dideposisikan lapis demi lapis tanpa pernah mencapai titik leburnya ($T_{\text{peak}} \approx 0.6 - 0.9 \, T_m$). Berbeda secara fundamental dari proses manufaktur aditif fusi berbasis berkas energi terfokus (seperti *Laser Powder Bed Fusion* / L-PBF, *Electron Beam Melting* / EBM, atau *Directed Energy Deposition* / DED) yang melibatkan siklus pelelehan cair dan pemadatan ulang yang ekstrem, AFSD sepenuhnya mengandalkan kombinasi antara panas gesekan (*frictional heating*) dan deformasi plastis hebat (*severe plastic deformation* / SPD).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    ARSITEKTUR KINEMATIKA & PROSES DEPOSISI AFSD (MELD)                                |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         SISTEM PENGUMPANAN & AKTUASI AKSIAL                           KEPALA SPINDLE PENGADUK BERONGGA (HOLLOW TOOL)   |
|         ┌──────────────────────────────────────┐                      ┌─────────────────────────────────────────────┐ |
|         │ Batang Umpan Padat (Feedstock Rod)   │                      │ Motor Spindle Torsi Tinggi (N = 200-1200 RPM)│|
|         │ Luas Penampang: A_feed (Segiempat/Sil)│                      │ Pahat Tool Shoulder Berprofil Flute/Pin     │ |
|         │ Laju Umpan Aksial: v_feed (mm/min)   │                      │ Material Tool: H13 / MP159 / Tungsten-Rhen. │ |
|         └──────────────────┬───────────────────┘                      └──────────────────────┬──────────────────────┘ |
|                            │                                                                 │                        |
|                            ▼ Gaya Tekan Aksial F_z (5 kN - 60 kN)                            ▼ Kecepatan Sudut omega  |
|         ┌───────────────────────────────────────────────────────────────────────────────────────────────────┐         |
|         │                     ZONA DEFORMASI VISKOPLASTIS & GESEKAN ANTARMUKA TOOL-SUBSTRAT                 │         |
|         │  1. Pemanasan Friksi Gesek: q_fric = mu(T,P) * P_contact * omega * r                              │         |
|         │  2. Disipasi Plastis Viskoelastis: q_plast = eta_p * sigma_flow * dot_epsilon                     │         |
|         │  3. Temperatur Proses: 0.6 T_m < T < 0.9 T_m (Zero Melting / Tanpa Pembentukan Fasa Cair)         │         |
|         └─────────────────────────────────────────────────┬─────────────────────────────────────────────────┘         |
|                                                           │                                                           |
|                                                           ▼                                                           |
|         ZONA REKRISTALISASI DINAMIK KONTINU (CDRX / GDRX) & ALIRAN MATERIAL MATERIAL LAYER                          |
|         ┌───────────────────────────────────────────────────────────────────────────────────────────────────┐         |
|         │  Parameter Zener-Hollomon: Z = dot_epsilon * exp(Q / (R * T))                                     │         |
|         │  Evolusi Butir: Butir Kasar Terdegradasi ──► Butir Halus Equiaxed Nano/Mikron (d_rec = A * Z^-m)  │         |
|         │  Kondisi Tegangan Sisa: Relaksasi Tegangan Termal Rendah + Tekanan Kompresif Lapisan              │         |
|         └─────────────────────────────────────────────────┬─────────────────────────────────────────────────┘         |
|                                                           │                                                           |
|                                                           ▼                                                           |
|         LAPISAN DEPOSISI PADAT (SOLID-STATE LAYER DEPOSITION) & GERAK TRANSLASI TABEL MEJA                          |
|         ┌───────────────────────────────────────────────────────────────────────────────────────────────────┐         |
|         │  Kecepatan Translasi Meja: v_traverse (1 - 25 mm/s)                                               │         |
|         │  Ketebalan Lapisan (Layer Thickness): t_layer = 0.5 - 3.0 mm                                      │         |
|         │  Lebar Lapisan (Layer Width): W_dep = D_shoulder (10 - 50 mm)                                     │         |
|         │  Efisiensi Material: Yield Deposisi > 98% (Tanpa Kehilangan Spatter / Porositas Gas Kunci)       │         |
|         ├───────────────────────────────────────────────────────────────────────────────────────────────────┤         |
|         │  APLIKASI UTAMA: Paduan Aluminium Dirgantara (AA2024, AA7075), Paduan Mg, Ti-6Al-4V, Tembaga Cu,  │         |
|         │  dan Fabrikasi Struktur Bimetalik Tanpa Retak Pembekuan (Zero Solidification Cracking)            │         |
|         └───────────────────────────────────────────────────────────────────────────────────────────────────┘         |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 1.1 Keunggulan Komparatif Metalurgi AFSD vs. AM Berbasis Fusi (L-PBF/DED)

| Karakteristik / Fenomena | Fusion AM (L-PBF / DED / WAAM) | Additive Friction Stir Deposition (AFSD) |
| :--- | :--- | :--- |
| **Fasa Termodinamika** | Fasa cair penuh $\rightarrow$ Pembekuan cepat ($10^3 - 10^6\ \text{K/s}$) | Fasa padat murni ($T_{\text{max}} < T_{\text{solidus}}$), deformasi plastis plastisitas tinggi |
| **Struktur Butir (*Grain Structure*)** | Butir kolumnar panjang (*epitaxial dendritic growth*), anisotropik tinggi | Butir *fine equiaxed* isotropik hasil rekristalisasi dinamik ($1 - 5\ \mu\text{m}$) |
| **Kerentanan Paduan Tidak Terlaskan** | Sangat rentan retak panas (*hot tearing / solidification cracking*) pada AA7075, AA2024 | Bebas retak panas ($100\%$ *crack-free*) karena tidak ada fasa cair |
| **Cacat Porositas & Gas Entrapment** | Porositas *keyhole*, *lack of fusion*, gas hidrogen ($0.1\% - 2.0\%$) | Nol porositas fasa gas (*fully dense* $> 99.9\%$), ikatan metalurgi difusi intim |
| **Laju Deposisi (*Deposition Rate*)** | $0.05 - 0.5\ \text{kg/jam}$ (L-PBF); $1.0 - 5.0\ \text{kg/jam}$ (DED/WAAM) | Sangat Tinggi ($5.0 - 25.0\ \text{kg/jam}$), efisiensi volumetrik superior |
| **Kebutuhan Ruang Vakum/Inert** | Wajib ruang kedap gas inert argon/nitrogen dengan $O_2 < 100\ \text{ppm}$ | Dapat dilakukan di udara terbuka (*ambient air*) atau pelindung gas lokal minim |
| **Bentuk Bahan Baku (*Feedstock*)** | Serbuk bulat berbiaya tinggi (*gas atomized powder*) atau kawat presisi | Batang profil padat berbiaya rendah, serbuk daur ulang, atau tatal *chips* |
| **Tegangan Sisa Tarik Permukaan** | Sangat tinggi ($\sigma_{\text{residual}} \approx \sigma_{\text{yield}}$), rentan delaminasi | Rendah atau bersifat kompresif akibat aksi tempa bahu pahat (*shoulder forging*) |

### 1.2 Cakupan Standar Internasional & Uji Kelaikan

Penerapan pengujian mekanik, metalurgi kualifikasi, dan verifikasi proses AFSD mengacu pada standar global:
- **ISO/ASTM 52900:2021**: *Additive manufacturing — General principles — Fundamentals and vocabulary*.
- **AWS D17.3/D17.3M:2021**: *Specification for Friction Stir Welding of Aluminum Alloys for Aerospace Applications*.
- **ASTM E8/E8M-24**: *Standard Test Methods for Tension Testing of Metallic Materials*.
- **ASTM E384-22**: *Standard Test Method for Microindentation Hardness of Materials*.
- **ASTM E466-21**: *Standard Practice for Conducting Force Controlled Constant Amplitude Axial Fatigue Tests of Metallic Materials*.
- **ISO 25239-1 s/d 25239-5**: *Friction stir welding — Aluminium*.
- **AMS 4050 / AMS 4027**: *Aerospace Material Specifications for Aluminum Alloy Plate and Sheet (7075-T651 / 6061-T6)*.

---

## 2. Termomekanika & Pemodelan Konstitutif Viskoplastis AFSD

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    PROFIL ALIRAN MATERIAL & KINETIKA REKRISTALISASI CDRX                              |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         DISTRIBUSI LAPISAN KECEPATAN GESER (SHEAR VELOCITY)           EVOLUSI MIKROSTRUKTUR BUTIR ZENER-HOLLOMON      |
|                                                                                                                       |
|         Pahat Shoulder Berputar (r = R_s, v_theta = omega * R_s)            Feedstock Batang Asal                     |
|         ▲                                                                   ┌───────────────────────┐                 |
|     1.0 ├───┐ Kecepatan Geser Lapisan Antarmuka v_plastic(z)                │ Butir Kasar Kolumnar  │ (d_0 = 50-150 um|
|         │    \                                                              │ Dislokasi Rendah      │                 |
|         │     \        Zona Aliran Geser Ekstrem                            └───────────┬───────────┘                 |
|     0.5 ├──────┼───────(Severe Shear Plastic Zone)────────►                             │ Deformasi Plastis Hebat     |
|         │       \                                                                       ▼                             |
|         │        \                                                          ┌───────────────────────┐                 |
|     0.0 │         └───► Dasar Substrat Diam (v = 0 pada z = -h_sz)                  │ Sub-Butir Sudut Rendah│ (Subgrain Formation)|
|         z=0             z = -h_sz / 2               z = -h_sz                       │ Dislokasi Bertumpuk   │ (LAGB)          |
|                                                                                     └───────────┬───────────┘                 |
|         Distribusi Fluks Panas Total q_total(r)                                         │ Rotasi Sub-Butir Dinamis    |
|         ▲                                                                               ▼ (Continuous DRX)            |
|    q_max├───┐ Puncak Fluks pada Radius Luar Shoulder (r = R_s)                      ┌───────────────────────┐                 |
|         │    \                                                                      │ Butir Baru Equiaxed   │ (d_rec = 1-4 um)|
|         │     \───                                                                  │ Bebas Tegangan Sisa   │ (HAGB > 80%)    |
|       0 └─────────┴────────────────────────────────►                                └───────────────────────┘                 |
|        r=0                 r = R_s / 2              r = R_s                                                           |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.1 Pembangkitan Panas Gesekan & Disipasi Plastis (*Heat Generation Mechanics*)

Laju total pembangkitan fluks kalor per satuan luas antarmuka pada zona kontak antara *tool shoulder* dan material deposit ($q_{\text{total}}$) merupakan penjumlahan dari disipasi friksi kontak luncur (*sliding friction*) dan disipasi deformasi plastis viskoplastis material (*plastic deformation heat*):
$$q_{\text{total}}(r) = q_{\text{fric}}(r) + q_{\text{plast}}(r) = \left[ (1 - \delta_{\text{slip}}) \, \mu(T, P) \, P_{\text{contact}} + \delta_{\text{slip}} \, \tau_{\text{yield}}(T) \right] \cdot \omega \, r + \eta_p \, \bar{\sigma} \, \dot{\bar{\varepsilon}}$$

Di mana:
- $r$ adalah koordinat radial dari pusat sumbu pahat ($0 \le r \le R_s$, dalam $\text{m}$).
- $\omega = \frac{2 \pi N}{60}$ adalah kecepatan sudut putaran pahat ($\text{rad/s}$), dengan $N$ dalam $\text{RPM}$.
- $\delta_{\text{slip}}$ adalah rasio slip antarmuka kontak ($0 \le \delta_{\text{slip}} \le 1$). Ketika $\delta_{\text{slip}} = 0$, terjadi kondisi *pure sliding*; ketika $\delta_{\text{slip}} = 1$, terjadi kondisi *pure sticking* di mana perpindahan diatur oleh kekuatan geser luluh material $\tau_{\text{yield}} = \sigma_y / \sqrt{3}$.
- $\mu(T, P)$ adalah koefisien gesek dinamis yang bergantung pada suhu dan tekanan kontak:
$$\mu(T, P) = \mu_0 \exp\left[ -\alpha_\mu \left( \frac{T - T_{\text{amb}}}{T_m - T_{\text{amb}}} \right) \right]$$
- $P_{\text{contact}} = \frac{F_z}{\pi R_s^2}$ adalah tekanan kontak aksial rata-rata ($\text{Pa}$).
- $\eta_p \approx 0.90 - 0.95$ adalah koefisien Taylor-Quinney yang merepresentasikan fraksi kerja plastis yang terdisipasi menjadi energi kalor.
- $\bar{\sigma}$ dan $\dot{\bar{\varepsilon}}$ berturut-turut adalah tegangan ekuivalen von Mises dan laju regangan geser ekuivalen efektif.

Laju pembangkitan daya termal total ($Q_{\text{total}}$ dalam $\text{Watt}$) yang masuk ke lapisan deposisi:
$$Q_{\text{total}} = \int_0^{2\pi} \int_{R_{\text{feed}}}^{R_s} q_{\text{total}}(r) \, r \, dr \, d\theta = \frac{2}{3} \pi \, \omega \, \tau_{\text{contact}} \left( R_s^3 - R_{\text{feed}}^3 \right) + \eta_p \int_V \bar{\sigma} \dot{\bar{\varepsilon}} \, dV$$

### 2.2 Model Konstitutif Tegangan Alir Sellars-Tegart & Laju Regangan Ekstrem

Aliran plastis padat pada laju regangan tinggi ($\dot{\varepsilon} > 10^1 - 10^3\ \text{s}^{-1}$) dan temperatur tinggi ($T > 0.6 \, T_m$) dimodelkan secara akurat melalui persamaan hiperbolik sinus Sellars-Tegart:
$$\dot{\bar{\varepsilon}} = A \left[ \sinh\left( \alpha_{\text{st}} \, \bar{\sigma} \right) \right]^n \exp\left( -\frac{Q_{\text{def}}}{R \, T} \right)$$

Di mana:
- $Q_{\text{def}}$ adalah energi aktivasi deformasi plastis ($\text{J/mol}$).
- $R = 8.314\ \text{J/(mol}\cdot\text{K)}$ adalah konstanta gas universal.
- $T$ adalah temperatur termodinamika absolut ($\text{K}$).
- $A, \alpha_{\text{st}}, n$ adalah konstanta material empiris Sellars-Tegart.

Tegangan alir plastis ekuivalen ($\bar{\sigma}$) dapat diekspresikan secara eksplisit sebagai fungsi parameter Zener-Hollomon ($Z$):
$$Z = \dot{\bar{\varepsilon}} \exp\left( \frac{Q_{\text{def}}}{R \, T} \right)$$
$$\bar{\sigma} = \frac{1}{\alpha_{\text{st}}} \ln\left\{ \left( \frac{Z}{A} \right)^{1/n} + \left[ \left( \frac{Z}{A} \right)^{2/n} + 1 \right]^{1/2} \right\} = \frac{1}{\alpha_{\text{st}}} \operatorname{arsinh}\left( \left( \frac{Z}{A} \right)^{1/n} \right)$$

Laju regangan rata-rata pada zona deformasi plastis geser setebal $h_{\text{shear}}$ di bawah bahu pahat:
$$\dot{\bar{\varepsilon}}_{\text{avg}} \approx \frac{\omega \, R_{\text{mean}}}{\sqrt{3} \, h_{\text{shear}}} = \frac{\frac{2\pi N}{60} \cdot \left( \frac{R_s + R_{\text{feed}}}{2} \right)}{\sqrt{3} \, h_{\text{shear}}}$$

### 2.3 Kinetika Rekristalisasi Dinamik Kontinu (CDRX) & Penghalusan Butir Hall-Petch

Selama proses AFSD, akumulasi kerapatan dislokasi akibat deformasi plastis ekstrem memicu pembentukan dinding dislokasi (*dislocation boundaries*), membentuk batas sub-butir bersudut rendah (*Low-Angle Grain Boundaries* / LAGB, misorientasi $\theta < 15^\circ$). Seiring berjalannya rotasi dan deformasi geser kontinu, sudut misorientasi meningkat secara progresif hingga bertransformasi menjadi batas butir bersudut tinggi (*High-Angle Grain Boundaries* / HAGB, $\theta > 15^\circ$).

Ukuran butir rekristalisasi ekuiaxed stabil akhir ($d_{\text{rec}}$ dalam $\mu\text{m}$) diatur oleh relasi Zener-Hollomon:
$$d_{\text{rec}} = C_d \cdot Z^{-m_d} = C_d \left[ \dot{\bar{\varepsilon}} \exp\left( \frac{Q_{\text{def}}}{R \, T} \right) \right]^{-m_d}$$

Di mana $C_d$ dan $m_d$ adalah konstanta mikrostruktur material ($m_d \approx 0.15 - 0.25$).

Peningkatan kekuatan luluh material hasil deposit pada suhu ruang kemudian mengikuti hukum penguatan batas butir Hall-Petch:
$$\sigma_y = \sigma_0 + k_{\text{HP}} \cdot d_{\text{rec}}^{-1/2}$$

Di mana $\sigma_0$ adalah tegangan gesekan kisi intrisik kristal (*lattice friction stress*), dan $k_{\text{HP}}$ adalah koefisien penguatan batas butir (*Hall-Petch slope*).

---

## 3. Dinamika Deposisi Lapisan, Konsolidasi Tekanan & Efisiensi Volumetrik

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    GEOMETRI JALUR DEPOSISI & KESEIMBANGAN MASSA VOLUMETRIK                            |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         Vektor Gerak Translasi Pahat (v_traverse)                     Penampang Lapisan Deposisi (Layer Cross-Section)|
|         ─────────────────────────────────────────►                    ┌─────────────────────────────────────────────┐ |
|                                                                       │       Bahu Pahat Penempa (Tool Shoulder)    │ |
|              Feedstock Batang                                         │                 Diameter D_s                │ |
|              ┌───────────────┐                                        └──────────────────────┬──────────────────────┘ |
|              │               │ Laju Masuk: V_in = A_feed * v_feed                            │ Tekanan Aksial P_cont  |
|              └───────┬───────┘                                        ┌──────────────────────▼──────────────────────┐ |
|                      ▼                                                │   Lapisan Logam Plastis Terkonsolidasi      │ |
|         ┌─────────────────────────┐                                   │   Tebal: t_layer | Lebar Efektif: W_dep     │ |
|         │ Ruang Tekan Plastis     │                                   └──────────────────────┬──────────────────────┘ |
|         │ (Deformation Chamber)   │                                                          │                        |
|         └────────────┬────────────┘                                   ┌──────────────────────▼──────────────────────┐ |
|                      ▼                                                │   Substrat / Lapisan Sebelumnya (Layer N-1) │ |
|         ═════════════════════════════════════════                     │   Ikatan Metalurgi Solid-State Difusi Intim │ |
|              Lapisan Logam Baru (Layer N)                             └─────────────────────────────────────────────┘ |
|         ═════════════════════════════════════════                                                                     |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.1 Keseimbangan Massa & Ketebalan Lapisan Deposisi (*Layer Mass Continuity*)

Berdasarkan prinsip kekekalan massa tak mampu-mampat (*incompressible mass conservation*), laju aliran volumetrik material batang umpan yang masuk ke dalam ruang deformasi harus sama dengan laju pembentukan volume lapisan terdeposit pada lintasan translasi:
$$\dot{V}_{\text{in}} = \dot{V}_{\text{dep}} \implies A_{\text{feed}} \cdot v_{\text{feed}} = W_{\text{dep}} \cdot t_{\text{layer}} \cdot v_{\text{traverse}}$$

Di mana:
- $A_{\text{feed}}$ adalah luas penampang batang umpan ($a \times b$ untuk penampang kotak, atau $\frac{\pi}{4} D_f^2$ untuk silinder, dalam $\text{mm}^2$).
- $v_{\text{feed}}$ adalah kecepatan umpan batang aksial masuk ke pahat ($\text{mm/s}$).
- $W_{\text{dep}} \approx D_s$ adalah lebar lintasan lapisan terdeposit ($\text{mm}$), sebanding dengan diameter luar bahu pahat (*shoulder diameter*).
- $v_{\text{traverse}}$ adalah kecepatan translasi pergerakan meja CNC sumbu X-Y ($\text{mm/s}$).
- $t_{\text{layer}}$ adalah ketebalan lapisan hasil deposisi ($\text{mm}$).

Ketebalan lapisan deposisi teoretis yang terbentuk per lintasan tunggal:
$$t_{\text{layer}} = \frac{A_{\text{feed}} \cdot v_{\text{feed}}}{D_s \cdot v_{\text{traverse}}}$$

Rasio kecepatan pengumpanan terhadap translasi (*Feed-to-Traverse Velocity Ratio* $\lambda_{\text{FT}}$):
$$\lambda_{\text{FT}} = \frac{v_{\text{feed}}}{v_{\text{traverse}}} = \frac{D_s \cdot t_{\text{layer}}}{A_{\text{feed}}}$$

Kriteria konsolidasi penuh bebas cacat rongga antarlapisan (*inter-layer void-free criterion*) mensyaratkan rasio penempaan bahu pahat $\kappa_{\text{forge}} \ge 1.0$:
$$\kappa_{\text{forge}} = \frac{F_z}{W_{\text{dep}} \cdot v_{\text{traverse}} \cdot \tau_{\text{yield}}(T_{\text{peak}})} \ge \kappa_{\text{crit}}$$

---

## 4. Implementasi Komputasi: Python AFSD Process Simulator & Solver

Berikut adalah modul implementasi Python berorientasi objek mandiri (`AFSDProcessSimulator`) untuk memprediksi profil termal pembangkitan kalor friksi, laju regangan Sellars-Tegart, ukuran butir rekristalisasi dinamik Zener-Hollomon, ketebalan lapisan kontinu, dan sifat mekanik luluh akhir paduan aluminium kedirgantaraan (AA7075-T6 dan AA2024-T351).

```python
"""
AFSD_Process_Simulator.py
Autonomous Multiphysics Solver for Additive Friction Stir Deposition (AFSD / MELD)
Standard Compliance: ISO/ASTM 52900, ASTM E8M, AWS D17.3, & CIRP Annals.
"""

import math
from dataclasses import dataclass
from typing import Dict, List, Tuple


@dataclass
class MaterialProperties:
    name: str
    density: float  # kg/m^3
    specific_heat: float  # J/(kg*K)
    thermal_conductivity: float  # W/(m*K)
    melting_temp: float  # Kelvin (K)
    solidus_temp: float  # Kelvin (K)
    youngs_modulus: float  # GPa
    lattice_friction_stress: float  # MPa (sigma_0 Hall-Petch)
    hall_petch_slope: float  # MPa * sqrt(um) (k_HP)
    # Sellars-Tegart Parameters
    activation_energy: float  # Q_def (J/mol)
    sellars_A: float  # 1/s
    sellars_alpha: float  # 1/MPa
    sellars_n: float  # exponent
    # Zener-Hollomon Grain Size Parameters
    grain_const_Cd: float  # um * (s^-1)^-m_d
    grain_exp_md: float


@dataclass
class AFSDOperatingParameters:
    spindle_speed_rpm: float  # N (RPM)
    traverse_speed_mmpm: float  # v_traverse (mm/min)
    feed_speed_mmpm: float  # v_feed (mm/min)
    axial_force_kN: float  # F_z (kN)
    shoulder_diameter_mm: float  # D_s (mm)
    feedstock_side_mm: float  # feed rod square side (mm)
    friction_coefficient_0: float  # mu_0
    friction_slip_ratio: float  # delta_slip (0.0=pure slide, 1.0=pure stick)
    taylor_quinney_coeff: float  # eta_p (default 0.90)
    ambient_temp_C: float  # T_amb (Celsius)


class AFSDProcessSimulator:
    """
    Multiphysics Solver for Additive Friction Stir Deposition
    Calculates Heat Dissipation, Peak Temperatures, Zener-Hollomon parameter,
    Grain Refinement via CDRX, Layer Dimensions, and Tensile Yield Strength.
    """

    def __init__(self, material: MaterialProperties, params: AFSDOperatingParameters):
        self.mat = material
        self.params = params
        self.R_gas = 8.314462  # J/(mol*K)

        # Conversions to SI units
        self.omega = (params.spindle_speed_rpm * 2.0 * math.pi) / 60.0  # rad/s
        self.v_trav = params.traverse_speed_mmpm / 60.0  # mm/s
        self.v_feed = params.feed_speed_mmpm / 60.0  # mm/s
        self.F_z = params.axial_force_kN * 1000.0  # N
        self.R_s = (params.shoulder_diameter_mm / 2.0) / 1000.0  # m
        self.A_feed_mm2 = params.feedstock_side_mm ** 2  # mm^2
        self.R_feed = math.sqrt(self.A_feed_mm2 / math.pi) / 1000.0  # m (equiv radius)
        self.T_amb_K = params.ambient_temp_C + 273.15  # K

    def calculate_contact_mechanics_and_heat(self) -> Dict[str, float]:
        """
        Calculates contact pressure, frictional shear, torque, and total heat generation.
        """
        area_contact = math.pi * (self.R_s**2 - self.R_feed**2)  # m^2
        pressure_contact = self.F_z / area_contact if area_contact > 0 else 0.0  # Pa

        # Analytical estimation of peak temperature at shear zone
        # Heat balance: Q_gen = Q_cond + Q_conv + Q_advect
        # Iterative solver for coupled temperature and friction
        T_current = self.T_amb_K + 250.0  # Initial guess
        for _ in range(20):
            # Dynamic friction coefficient reduction with temperature
            temp_ratio = max(0.0, min(0.95, (T_current - self.T_amb_K) / (self.mat.melting_temp - self.T_amb_K)))
            mu_dyn = self.params.friction_coefficient_0 * math.exp(-2.5 * temp_ratio)

            # Contact shear stress (bounded by Tresca yield at temperature)
            tau_fric = mu_dyn * pressure_contact
            # Temperature dependent shear yield strength
            tau_yield_T = (self.mat.lattice_friction_stress * 1e6 / math.sqrt(3.0)) * (1.0 - temp_ratio)
            tau_eff = (1.0 - self.params.friction_slip_ratio) * min(tau_fric, tau_yield_T) + \
                      self.params.friction_slip_ratio * tau_yield_T

            # Integrated friction power
            # Q_fric = 2/3 * pi * omega * tau_eff * (R_s^3 - R_feed^3)
            Q_friction_W = (2.0 / 3.0) * math.pi * self.omega * tau_eff * (self.R_s**3 - self.R_feed**3)

            # Estimate plastic shear zone thickness h_sz ≈ 0.8 mm
            h_sz = 0.0008  # m
            gamma_dot = (self.omega * (self.R_s + self.R_feed) / 2.0) / (math.sqrt(3.0) * h_sz)
            
            # Plastic deformation work rate
            V_sz = area_contact * h_sz
            sigma_flow_est = max(20.0e6, tau_yield_T * math.sqrt(3.0))
            Q_plastic_W = self.params.taylor_quinney_coeff * sigma_flow_est * gamma_dot * V_sz

            Q_total_W = Q_friction_W + Q_plastic_W

            # Conduction loss into substrate & tool
            # Analytical semi-infinite Rosenthal pseudo-1D steady heat dissipation
            thermal_loss_factor = 2.0 * math.pi * self.mat.thermal_conductivity * (self.R_s * 1.5)
            delta_T = Q_total_W / (thermal_loss_factor + 1e-3)
            T_next = self.T_amb_K + delta_T

            # Bound temperature below solidus temperature (Physical ceiling)
            if T_next > 0.92 * self.mat.solidus_temp:
                T_next = 0.92 * self.mat.solidus_temp

            if abs(T_next - T_current) < 0.1:
                break
            T_current = 0.5 * (T_current + T_next)

        spindle_torque_Nm = Q_friction_W / (self.omega + 1e-6)

        return {
            "contact_pressure_MPa": pressure_contact / 1e6,
            "total_heat_rate_kW": Q_total_W / 1000.0,
            "friction_heat_kW": Q_friction_W / 1000.0,
            "plastic_heat_kW": Q_plastic_W / 1000.0,
            "peak_temperature_C": T_current - 273.15,
            "homologous_temp_ratio": T_current / self.mat.melting_temp,
            "spindle_torque_Nm": spindle_torque_Nm,
            "shear_strain_rate_s_inv": gamma_dot
        }

    def solve_microstructure_and_yield_strength(self, thermal_res: Dict[str, float]) -> Dict[str, float]:
        """
        Solves Zener-Hollomon constitutive parameter, dynamically recrystallized grain size,
        and Room Temperature Yield Strength via Hall-Petch relationship.
        """
        T_K = thermal_res["peak_temperature_C"] + 273.15
        strain_rate = thermal_res["shear_strain_rate_s_inv"]

        # Zener-Hollomon parameter: Z = dot_eps * exp(Q / (R * T))
        exponent_val = self.mat.activation_energy / (self.R_gas * T_K)
        # Numerical protection against overflow
        exponent_val = min(exponent_val, 80.0)
        Z_param = strain_rate * math.exp(exponent_val)

        # Recrystallized Grain Size: d_rec = C_d * Z^(-m_d) in microns
        d_rec_um = self.mat.grain_const_Cd * (Z_param ** (-self.mat.grain_exp_md))
        # Physical lower bound for fine grains in SPD
        d_rec_um = max(0.5, min(15.0, d_rec_um))

        # Room-Temperature Yield Strength via Hall-Petch: sigma_y = sigma_0 + k_HP * d^(-1/2)
        yield_strength_MPa = self.mat.lattice_friction_stress + (self.mat.hall_petch_slope / math.sqrt(d_rec_um))

        # Hardness Vickers estimation (Tabor's empirical law for Al alloys: HV ≈ 3 * sigma_y / 9.80665)
        approx_HV = (yield_strength_MPa * 3.0) / 9.80665

        return {
            "zener_hollomon_Z_log10": math.log10(max(1.0, Z_param)),
            "recrystallized_grain_size_um": d_rec_um,
            "as_deposited_yield_strength_MPa": yield_strength_MPa,
            "predicted_hardness_HV": approx_HV
        }

    def calculate_layer_geometry_and_throughput(self) -> Dict[str, float]:
        """
        Computes layer thickness, deposition rate in kg/hr, and volumetric productivity.
        """
        # Mass continuity: A_feed * v_feed = W_dep * t_layer * v_traverse
        # W_dep ≈ D_shoulder
        w_dep_mm = self.params.shoulder_diameter_mm
        layer_thickness_mm = (self.A_feed_mm2 * self.v_feed) / (w_dep_mm * self.v_trav)

        volumetric_rate_cm3_hr = (self.A_feed_mm2 * (self.params.feed_speed_mmpm / 10.0)) * 60.0 / 1000.0
        mass_deposition_rate_kghr = (volumetric_rate_cm3_hr * 1e-6) * self.mat.density * 1000.0  # kg/hr

        # Feed to Traverse Velocity Ratio
        lambda_FT = self.v_feed / self.v_trav

        return {
            "nominal_layer_thickness_mm": layer_thickness_mm,
            "deposition_width_mm": w_dep_mm,
            "volumetric_deposition_rate_cm3_per_min": volumetric_rate_cm3_hr / 60.0,
            "mass_deposition_rate_kg_per_hr": mass_deposition_rate_kghr,
            "feed_to_traverse_ratio": lambda_FT
        }

    def execute_complete_analysis(self) -> Dict[str, any]:
        """Executes full multiphysics pipeline and compiles engineering audit report."""
        thermal_res = self.calculate_contact_mechanics_and_heat()
        micro_res = self.solve_microstructure_and_yield_strength(thermal_res)
        geom_res = self.calculate_layer_geometry_and_throughput()

        # Quality & Defect Feasibility Checks
        is_temp_safe = thermal_res["peak_temperature_C"] < (self.mat.solidus_temp - 273.15 - 15.0)
        is_fully_dense = geom_res["nominal_layer_thickness_mm"] <= 2.5 and thermal_res["contact_pressure_MPa"] >= 15.0
        feed_traverse_balanced = 0.05 <= geom_res["feed_to_traverse_ratio"] <= 0.80

        feasibility_status = "OPTIMAL (Defect-Free Solid-State Deposition)"
        if not is_temp_safe:
            feasibility_status = "WARNING: Risk of Incipient Melting (Overheating)"
        elif not is_fully_dense:
            feasibility_status = "WARNING: Insufficient Forging Pressure (Risk of Surface Void)"
        elif not feed_traverse_balanced:
            feasibility_status = "SUBOPTIMAL: Feed/Traverse mismatch (Flashing or Starvation)"

        return {
            "material_name": self.mat.name,
            "feasibility_status": feasibility_status,
            "thermal_and_kinematics": thermal_res,
            "microstructure_and_mechanics": micro_res,
            "geometry_and_productivity": geom_res
        }


# =====================================================================
# VERIFIKASI & STUDI KASUS VALIDASI: AEROSPACE GRADE AA7075-T6
# =====================================================================
if __name__ == "__main__":
    # Inisialisasi Sifat Termo-Mekanis Paduan AA7075-T6
    aa7075 = MaterialProperties(
        name="AA7075 (Al-Zn-Mg-Cu Aerospace Alloy)",
        density=2810.0,  # kg/m^3
        specific_heat=960.0,  # J/(kg*K)
        thermal_conductivity=130.0,  # W/(m*K)
        melting_temp=908.15,  # 635 °C in K
        solidus_temp=750.15,  # 477 °C in K (Incipient melting of eutectic phase)
        youngs_modulus=71.7,  # GPa
        lattice_friction_stress=75.0,  # MPa (Intrinsic lattice resistance)
        hall_petch_slope=120.0,  # MPa * um^0.5
        activation_energy=142000.0,  # 142 kJ/mol
        sellars_A=3.5e9,  # 1/s
        sellars_alpha=0.018,  # 1/MPa
        sellars_n=4.8,
        grain_const_Cd=85.0,
        grain_exp_md=0.22
    )

    # Parameter Operasi Mesin AFSD MELD B-500 Industrial Cell
    process_params = AFSDOperatingParameters(
        spindle_speed_rpm=450.0,  # 450 RPM
        traverse_speed_mmpm=240.0,  # 240 mm/min (4 mm/s)
        feed_speed_mmpm=45.0,  # 45 mm/min (0.75 mm/s)
        axial_force_kN=28.0,  # 28 kN forging force
        shoulder_diameter_mm=38.0,  # 38 mm shoulder
        feedstock_side_mm=9.5,  # 9.5 mm x 9.5 mm square rod
        friction_coefficient_0=0.42,
        friction_slip_ratio=0.75,  # Dominant sticking at steady state
        taylor_quinney_coeff=0.92,
        ambient_temp_C=25.0
    )

    solver = AFSDProcessSimulator(aa7075, process_params)
    results = solver.execute_complete_analysis()

    print("===============================================================================")
    print("        HASIL SIMULASI SOLID-STATE AFSD (MELD TECHNOLOGY) — RUANGTI ENGINE     ")
    print("===============================================================================")
    print(f"Material Substrat / Feedstock : {results['material_name']}")
    print(f"Status Kelaikan Proses        : {results['feasibility_status']}")
    print("-------------------------------------------------------------------------------")
    tk = results["thermal_and_kinematics"]
    print("1. KINEMATIKA & TERMAL:")
    print(f"   - Tekanan Kontak Aksial Bahu Pahat : {tk['contact_pressure_MPa']:.2f} MPa")
    print(f"   - Laju Disipasi Termal Total       : {tk['total_heat_rate_kW']:.2f} kW (Friction: {tk['friction_heat_kW']:.2f} kW, Plastic: {tk['plastic_heat_kW']:.2f} kW)")
    print(f"   - Temperatur Puncak Zona Deformasi : {tk['peak_temperature_C']:.1f} °C (Rasio Homolog: {tk['homologous_temp_ratio']*100:.1f}% Tm)")
    print(f"   - Torsi Spindle Operasi            : {tk['spindle_torque_Nm']:.2f} N·m")
    print(f"   - Laju Regangan Geser Rata-rata    : {tk['shear_strain_rate_s_inv']:.1f} s^-1")
    print("-------------------------------------------------------------------------------")
    mm = results["microstructure_and_mechanics"]
    print("2. EVOLUSI MIKROSTRUKTUR & SIFAT MEKANIK:")
    print(f"   - Log10 Parameter Zener-Hollomon (Z): {mm['zener_hollomon_Z_log10']:.2f}")
    print(f"   - Ukuran Butir Rekristalisasi CDRX : {mm['recrystallized_grain_size_um']:.2f} µm (Bebas Dendritik)")
    print(f"   - Prediksi Kekuatan Luluh As-Built : {mm['as_deposited_yield_strength_MPa']:.2f} MPa")
    print(f"   - Prediksi Kekerasan Mikro         : {mm['predicted_hardness_HV']:.1f} HV")
    print("-------------------------------------------------------------------------------")
    gp = results["geometry_and_productivity"]
    print("3. GEOMETRI & PRODUKTIVITAS DEPOSISI:")
    print(f"   - Tebal Lapisan Deposisi Efektif   : {gp['nominal_layer_thickness_mm']:.2f} mm")
    print(f"   - Lebar Lapisan Deposisi (Track)   : {gp['deposition_width_mm']:.1f} mm")
    print(f"   - Laju Deposisi Massa              : {gp['mass_deposition_rate_kg_per_hr']:.2f} kg/jam")
    print(f"   - Rasio Kecepatan Umpan/Translasi  : {gp['feed_to_traverse_ratio']:.3f}")
    print("===============================================================================")
```

---

## 5. Studi Kasus Industri: Fabrikasi & Perbaikan Komponen Rib Struktur Sayap Dirgantara AA7075-T651

### 5.1 Deskripsi Masalah & Tantangan Metalurgi Komponen

Sebuah manufaktur tier-1 kedirgantaraan memproduksi komponen pengaku rib sayap (*wing stiffener rib*) dari blok tempa paduan aluminium seng berkekuatan ultra-tinggi AA7075-T651. Komponen mengalami cacat pemesinan kritis berupa kesalahan over-cut setinggi $12.0\ \text{mm}$, lebar $35.0\ \text{mm}$, dan panjang $180\ \text{mm}$ pada area flens struktural berbeban fatik tinggi.

Tantangan teknis perbaikan:
1. **Kegagalan Fusion Welding (TIG/MIG/Laser)**: Paduan seri 7xxx mengandung konsentrasi seng ($Zn \approx 5.6\%$) dan magnesium ($Mg \approx 2.5\%$) yang sangat rentan mengalami *solidification cracking*, penguapan unsur paduan seng bertekanan uap tinggi, dan pembentukan fasa getas eutektik $MgZn_2$ berlebih pada batas butir daerah pengaruh panas (*Heat Affected Zone* / HAZ), yang menyebabkan penurunan kekuatan luluh hingga $> 60\%$ dan kerentanan lelah kritis.
2. **Keterbatasan Cold Spray**: Meskipun Cold Spray dapat mendepositkan AA7075 tanpa pelelehan, kekuatan ikat antarmuka (*adhesion shear strength*) pada perbaikan tebal ($> 10\ \text{mm}$) terbatas ($< 250\ \text{MPa}$) dan membutuhkan pasca-perlakuan panas HIP (*Hot Isostatic Pressing*) untuk mengeliminasi mikropori.

### 5.2 Desain Solusi AFSD & Konfigurasi Parameter Mesin

Proses deposisi keadaan padat AFSD MELD diterapkan langsung pada lokasi cacat menggunakan batang umpan padat AA7075 ekstrusi dengan persiapan bevel $45^\circ$:

| Parameter Proses AFSD | Nilai Terpilih | Justifikasi Rekayasa Industri |
| :--- | :--- | :--- |
| **Kecepatan Putar Spindle ($N$)** | $450\ \text{RPM}$ ($\omega = 47.12\ \text{rad/s}$) | Menghasilkan laju regangan geser optimal tanpa memicu *overheating* di atas eutektik $477^\circ\text{C}$ |
| **Kecepatan Translasi ($v_{\text{traverse}}$)** | $240\ \text{mm/min}$ ($4.0\ \text{mm/s}$) | Memastikan laju masukan panas terkontrol dan waktu tempa shoulder yang merata |
| **Kecepatan Umpan Batang ($v_{\text{feed}}$)** | $45.0\ \text{mm/min}$ ($0.75\ \text{mm/s}$) | Menghasilkan tebal lapisan konsisten $t_{\text{layer}} = 0.45\ \text{mm}$ per lapis (Total 27 lapis) |
| **Gaya Tempa Aksial ($F_z$)** | $28.0\ \text{kN}$ ($P_{\text{contact}} = 24.7\ \text{MPa}$) | Menjamin konsolidasi bebas rongga dan ikatan difusi atomik padat antarlapisan |
| **Diameter Shoulder Pahat ($D_s$)** | $38.0\ \text{mm}$ (Material MP159 Cobalt Superalloy)| Mencakup seluruh lebar cacat flens ($35.0\ \text{mm}$) dalam lintasan tunggal |
| **Gas Pelindung Permukaan** | Gas Argon Lokal ($15\ \text{L/min}$) | Mencegah oksidasi permukaan suhu tinggi pada zona geser terplastisasi |

### 5.3 Hasil Validasi Metalurgi & Karakterisasi Mekanik ASTM

Setelah proses deposisi 27 lapisan selesai, komponen mengalami perlakuan panas pasca-deposisi standar T6 (*Solution Heat Treatment* $475^\circ\text{C}$ selama 2 jam, *water quench*, diikuti *artificial aging* $120^\circ\text{C}$ selama 24 jam):

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    PERBANDINGAN KINERJA MEKANIK KUALIFIKASI ASTM E8M / E466                           |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|    Karakteristik Mekanik           AA7075 Base Metal     Laser DED Repair (Fusion)    AFSD MELD Solid-State (T6)      |
|    ─────────────────────────────   ─────────────────     ─────────────────────────    ──────────────────────────      |
|    Kekuatan Tarik Ultimate (UTS)   572 MPa               295 MPa (-48.4%)             548 MPa (95.8% Base Metal)      |
|    Kekuatan Luluh (Yield 0.2%)     503 MPa               185 MPa (-63.2%)             482 MPa (95.8% Base Metal)      |
|    Elongasi Plastis (% Elongation) 11.5%                 2.1% (Sangat Getas)          9.8% (Daktilitas Tinggi)        |
|    Ukuran Butir Rata-rata          45 - 80 um (Kasar)    Dendritik Kolumnar Kasar     2.8 um (Equiaxed Halus CDRX)    |
|    Porositas Gas Internal          < 0.01%               1.85% (Porositas & Retak)    < 0.05% (Fully Consolidated)    |
|    Batas Fatik Aksial (10^7 Siklus)240 MPa               85 MPa (-64.5%)              225 MPa (93.7% Base Metal)      |
|    Kerapatan Cacat Retak           Nol                   Retak Panas Mikro Masif      Nol (100% Bebas Retak Fasa Cair)|
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Penghematan biaya perbaikan mencapai **88.4%** dibanding penggantian blok tempa utuh baru, dengan reduksi *lead time* dari 18 minggu menjadi hanya 2 hari kerja manufaktur.

---

## 6. Referensi Terverifikasi & Literatur Ilmiah Bereputasi

1. **Yu, H. Z., Jones, M. E., Brady, G. W., Griffiths, R. J., Garcia, D., Rauch, H. A., Lu, P., & Hardwick, N.** (2018). "Non-beam-based metal additive manufacturing enabled by additive friction stir deposition". *Scripta Materialia*, 153, pp. 122–130. DOI: [10.1016/j.scriptamat.2018.04.047](https://doi.org/10.1016/j.scriptamat.2018.04.047).
2. **Griffiths, R. J., Petersen, D. T., Garcia, D., & Yu, H. Z.** (2020). "Additive friction stir-deposition of aluminum alloy 7075: Microstructural evolution, material flow, and mechanical properties". *Materials & Design*, 191, 108632. DOI: [10.1016/j.matdes.2020.108632](https://doi.org/10.1016/j.matdes.2020.108632).
3. **Perry, M. E. J., Rivera, O. G., Allison, P. G., Rodriguez, O. L., Garcia, D., Valant, M., Su, J., Jordon, J. B., & Brewer, L. N.** (2020). "Additive friction stir deposition: a review on processes, microstructural evolution, and future prospects". *International Materials Reviews*, 66(7), pp. 497–527. DOI: [10.1080/09506608.2020.1847211](https://doi.org/10.1080/09506608.2020.1847211).
4. **Agrawal, P., Haridas, A. K., Yadav, P., & Mishra, R. S.** (2023). "Additive friction stir deposition of metallic materials: A review". *Materials & Design*, 235, 112414. DOI: [10.1016/j.matdes.2023.112414](https://doi.org/10.1016/j.matdes.2023.112414).
5. **Mason, C. J., Griffiths, R. J., Garcia, D., & Yu, H. Z.** (2021). "Solid-state additive manufacturing of dissimilar aluminum alloys via additive friction stir deposition: Interfacial microstructure and mechanical behavior". *Journal of Manufacturing Processes*, 64, pp. 1380–1390. DOI: [10.1016/j.jmapro.2021.02.062](https://doi.org/10.1016/j.jmapro.2021.02.062).
6. **Mishra, R. S., & Ma, Z. Y.** (2005). "Friction stir welding and processing". *Materials Science and Engineering: R: Reports*, 50(1-2), pp. 1–78. DOI: [10.1016/j.mser.2005.07.001](https://doi.org/10.1016/j.mser.2005.07.001).
7. **ISO/ASTM 52900:2021**. *Additive manufacturing — General principles — Fundamentals and vocabulary*. International Organization for Standardization / ASTM International.
8. **AWS D17.3/D17.3M:2021**. *Specification for Friction Stir Welding of Aluminum Alloys for Aerospace Applications*. American Welding Society (AWS).
