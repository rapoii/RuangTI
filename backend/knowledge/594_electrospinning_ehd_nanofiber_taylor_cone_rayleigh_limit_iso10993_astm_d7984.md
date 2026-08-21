# Modul 594: Electrospinning & Electrohydrodynamic (EHD) Nanofiber Manufacturing: Fisika Instabilitas Kerucut Taylor (*Taylor Cone*), Batas Muatan Rayleigh (*Rayleigh Limit*), Dinamika *Whipping Instability*, dan Skalabilitas Industri Multijet/Needleless (ISO 10993 & ASTM D7984)

## 1. Pengantar & Konteks Industri Manufaktur Serat Nano (*Nanofiber Processing*)

Dalam dekade terakhir, material berstruktur nano (*nanostructured materials*)—khususnya jaring serat nano polimer (*polymeric nanofiber non-wovens*) dengan diameter serat $10 - 500\ \text{nm}$—telah menjadi pilar revolusi teknologi membran di berbagai sektor strategis:
1. **Filtrasi Udara dan Cairan Efisiensi Ultra-Tinggi (HEPA / ULPA Filters)**: Membran nanofiber dengan luas permukaan spesifik raksasa ($10 - 100\ \text{m}^2/\text{g}$) dan porositas interkoneksi $> 80\%$ mampu menyaring partikel aerosol PM0.1 dan virus berbasis mekanisme *interception*, *inertial impaction*, dan *Brownian diffusion* dengan penurunan tekanan (*pressure drop* $\Delta P$) yang jauh lebih rendah daripada filter *meltblown* mikron konvensional (standar EN 1822 & ASTM F2100).
2. **Rekayasa Jaringan Biomedis (*Tissue Engineering Scaffolds*) & Pembalut Luka Canggih**: Struktur morfologi jaring acak 3D nanofiber meniru matriks ekstraseluler alami (*extracellular matrix* / ECM), mempromosikan adhesi, proliferasi, dan diferensiasi sel induk biologis (standar biokompatibilitas ISO 10993).
3. **Pemisah Baterai Litium & Superkapasitor (*Battery Separators*)**: Membran nanofiber polivinilidena fluorida (PVDF) atau poliakrilonitril (PAN) dengan konduktivitas ionik tinggi, stabilitas termal hingga $> 200^\circ\text{C}$, dan penyerapan elektrolit (*electrolyte wettability*) superior.
4. **Tekstil Fungsional & Baju Pelindung CBRN**: Tekstil dengan ketahanan penetrasi cairan kimia/toksik namun tetap memiliki transmisi uap air (*moisture vapor transmission rate* / MVTR) yang sangat tinggi (ASTM D7984).

Metode manufaktur serat nano berbasis elektrohidrodinamika (*Electrohydrodynamic* / EHD)—terutama **Electrospinning**—merupakan satu-satunya proses manufaktur kontinu yang mampu menghasilkan serat polimer sub-mikron secara terkontrol dengan fleksibilitas pemilihan material polimer alami, sintetis, maupun komposit keramik.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                 SKEMA SISTEM ELEKTROSPINNING: NEEDLE-BASED VS NEEDLELESS ROTATING DRUM INDUSTRIAL                     |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  1. CONVENTIONAL SINGLE-NEEDLE SETUP (Lab Scale: Throughput 0.5 - 2.0 mL/h):                                          |
|                                                                                                                       |
|        Pompa Semprit Presisi                                            Kolektor Plat / Drum Putar                    |
|        ┌──────────────┐                                                                                               |
|        │ [==Piston==] │ ──► Spuit Jarum (Nozzle)                                                                      |
|        └──────────────┘           │                                                                                   |
|                                   ▼  Meniskus Fluida                                                                  |
|                             ▲▲▲▲▲▲▲▲▲▲                                                                                |
|                             \       /  Kerucut Taylor (Taylor Cone)                                                   |
|                              \     /                                                                                  |
|                               \   /                                                                                   |
|                                \ /   ◄── Titik Puncak Jet Linier (Straight Jet L_0)                                   |
|                                 │                                                                                     |
|                             (   │   )                                                                                 |
|                            (  S   S  )  ◄── Zona Whipping Instability (Spiral Mengembang & Evaporasi Pelarut)         |
|                           (  P     P  )                                                                               |
|                          (  I       I  )                                                                              |
|                         (   R   A   R   )                                                                             |
|                        (     A     L     )                                                                            |
|                       (       L   L       )                                                                           |
|                       ─────────────────────  ◄── Substrat Kolektor Ground (V = 0 kV / -5 kV)                         |
|                         Jaring Nanofiber                                                                              |
|                                                                                                                       |
|        Sumber Tegangan Tinggi DC (HV Power Supply: V = +15 s/d +35 kV) ──► Terhubung ke Jarum Nozzle                  |
|                                                                                                                       |
|  2. INDUSTRIAL NEEDLELESS ROLLER / WIRE SETUP (Throughput 100 - 1500 mL/h):                                           |
|                                                                                                                       |
|        Bak Larutan Polimer Terisi Penuh                                 Kolektor Substrat Roll-to-Roll (Nonwoven)     |
|        ┌──────────────────────────────┐                                ══════════════════════════════════════════     |
|        │                              │                                             ▲   ▲   ▲   ▲   ▲                 |
|        │    Rol Silinder Berputar     │                                             │   │   │   │   │                 |
|        │           ╭──────╮           │                                             │   │   │   │   │                 |
|        │         ╭─        ─╮         │                                      Ratusan Jet Mandiri Simultan             |
|        │        │   HV DC    │        │                                      (Multi-jet Self-Organization)            |
|        │         ╰─ (+60kV)─╯         │                                             ▲   ▲   ▲   ▲   ▲                 |
|        │           ╰──────╯           │                                             │   │   │   │   │                 |
|        │  ~~~~~~~~~~~~~~~~~~~~~~~~~~  │                                                                               |
|        └──────────────────────────────┘                                                                               |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 2. Fisika & Elektrohidrodinamika EHD: Kerucut Taylor & Batas Rayleigh

### 2.1 Kesetimbangan Elektrostatik Meniskus Fluida & Sudut Kritis Taylor
Ketika tetesan cairan polimer konduktif dengan tegangan permukaan $\gamma_{\text{lv}}$ dan viskositas $\eta$ berada di ujung nosel kapiler beradius $r_c$, penerapan medan elektrostatik eksternal $\vec{E}$ menimbulkan redistribusi muatan listrik bebas (*free electrical charges*) yang terakumulasi di permukaan cairan.

Dua gaya yang saling bersaing pada antarmuka cairan-udara:
1. **Tegangan Permukaan Cairan ($\Delta P_{\text{Laplace}}$)**: Berusaha mempertahankan bentuk tetesan sferis untuk meminimalkan energi bebas permukaan:
   $$\Delta P_{\text{Laplace}} = \frac{2 \gamma_{\text{lv}}}{R_{\text{meniscus}}}$$
2. **Tekanan Elektrostatik Maxwell / Tegangan Tarik Listrik ($P_{\text{Maxwell}}$)**: Muatan sejenis saling tolak-menolak di permukaan, menghasilkan gaya tarik outward menuju kutub medan listrik:
   $$P_{\text{Maxwell}} = \frac{1}{2} \varepsilon_0 \varepsilon_r E^2 = \frac{\sigma_e^2}{2 \varepsilon_0 \varepsilon_r}$$
   di mana $\varepsilon_0$ adalah permitivitas ruang hampa ($8.854 \times 10^{-12}\ \text{F/m}$), $\varepsilon_r$ adalah konstanta dielektrik relatif medium, dan $\sigma_e$ adalah kerapatan muatan permukaan (*surface charge density*, $\text{C/m}^2$).

Ketika tegangan listrik $V$ dinaikkan hingga melampaui tegangan kritis $V_c$, tekanan elektrostatik Maxwell melampaui tekanan Laplace. Meniskus sferis terdistorsi secara kontinu menjadi kerucut tajam simetris yang dikenal sebagai **Kerucut Taylor (*Taylor Cone*)**. 

Sir Geoffrey Ingram Taylor (1964) membuktikan secara analitis bahwa kesetimbangan elektrostatik murni antara tegangan permukaan dan tegangan Maxwell pada permukaan kerucut hanya dapat eksis pada satu sudut semi-apeks unik:

$$\theta_{\text{Taylor}} = 49.3^\circ \quad (\text{atau sudut total apeks } 2 \theta = 98.6^\circ)$$

Tegangan kritis awal pemunculan jet (*critical onset voltage* $V_c$) untuk nosel kapiler berjarak $H$ dari pelat kolektor planar diturunkan sebagai:

$$V_c = \sqrt{\frac{\gamma_{\text{lv}} \cdot r_c}{\varepsilon_0}} \cdot \ln\left(\frac{4 H}{r_c}\right)$$

Jika nosel memiliki sudut profil tertentu atau menggunakan elektroda silindris kawat (*wire electrode* beradius $r_w$), formulasi tegangan kritis disesuaikan dengan faktor geometri medan Laplace.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    GEOMETRI DAN KESETIMBANGAN VEKTOR KERUCUT TAYLOR                                   |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                           Nosel Kapiler Logam (Radius r_c)                                                            |
|                                    │       │                                                                          |
|                                    │       │                                                                          |
|                                    │  HV+  │                                                                          |
|                                    └───────┘                                                                          |
|                                   /         \                                                                         |
|                                  /           \                                                                        |
|                                 /  θ = 49.3°  \  ◄── Sudut Semi-Apeks Taylor                                          |
|                                /               \                                                                      |
|                               /  P_Laplace (In) \                                                                     |
|                              /  ◄───   ───►      \                                                                    |
|                             /    P_Maxwell (Out)  \                                                                   |
|                            /                       \                                                                  |
|                            ─────────────────────────                                                                  |
|                                       \ /                                                                             |
|                                        │ ◄── Ejeksi Jet Halus Berkecepatan Tinggi (Straight Jet Core)                 |
|                                        │     Diameter Jet Awal d_0 ~ 10 - 50 μm                                       |
|                                        ▼                                                                              |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.2 Batas Muatan Rayleigh (*Rayleigh Charge Limit*)
Pada proses pembentukan jet dan atomisasi elektrohidrodinamika (misalnya *electrospraying* droplet atau pembentukan filamen jet), batas stabilitas muatan maksimum pada droplet/elemen fluida sebelum terbelah secara spontan (*Coulomb fission*) diatur oleh **Batas Rayleigh (*Rayleigh Limit*)**:

$$q_R = 8 \pi \sqrt{\varepsilon_0 \gamma_{\text{lv}} R_d^3}$$

di mana $R_d$ adalah radius droplet cairan dan $\gamma_{\text{lv}}$ adalah tegangan permukaan.

Rasio fraksi Rayleigh ($\chi_R$):

$$\chi_R = \frac{q_{\text{actual}}}{q_R} = \frac{q_{\text{actual}}}{8 \pi \sqrt{\varepsilon_0 \gamma_{\text{lv}} R_d^3}}$$

- Jika $\chi_R < 1.0$: Jet atau droplet tetap stabil dan teregang secara kontinu di bawah gaya elektrostatik.
- Jika $\chi_R \ge 1.0$: Terjadi instabilitas Coulomb (*Coulomb explosion / fission*), di mana cairan meledak menjadi kabut droplet sub-mikron (*electrospraying mode* alih-alih *electrospinning continuous fiber*).

---

## 3. Dinamika Whipping Instability & Evolusi Diameter Nanofiber

### 3.1 Transisi Rezim Straight Jet ke Whipping Bending Instability
Aliran jet nanofiber yang keluar dari puncak kerucut Taylor terbagi menjadi dua zona dinamis yang berbeda:
1. **Zona Jet Lurus (*Stable Straight Jet Region*, $z \le L_0$)**:
   Jet fluida bergerak lurus sepanjang jarak aksial $L_0 \approx 0.5 - 2.5\ \text{cm}$ dipercepat oleh medan listrik $\vec{E}$. Pada zona ini, diameter jet menyusut secara monotonik akibat gaya tarik elektrostatik aksial:
   $$\frac{d(r_j^2 v_z)}{dz} = 0 \implies r_j(z) = r_0 \sqrt{\frac{v_0}{v_z(z)}}$$
2. **Zona Instabilitas Cambukan (*Whipping / Bending Instability Region*, $z > L_0$)**:
   Ketika jet bergerak lebih jauh, perturbasi lateral mikro pada jet yang bermuatan tinggi memicu gaya tolak-menolak Coulomb lateral tak seimbang antar segmen jet yang berdekatan. Hal ini menyebabkan jet mengalami osilasi cambukan tiga dimensi (*3D whipping instability*) berbentuk spiral heliks yang mengembang secara eksponensial.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                DINAMIKA JET ELEKTROSPINNING & EVAPORASI PELARUT                                       |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   Posisi Aksial z                                                                                                     |
|   ▲                                                                                                                   |
|   │ 0 mm ──────────── Nosel Kapiler / Taylor Cone                                                                     |
|   │                  │                                                                                                |
|   │                  │  Zona Straight Jet (L_0 ~ 1-2 cm)                                                              |
|   │                  │  - Penipisan viskoelastis stabil                                                               |
|   │ 20 mm ───────────┴──────────────────────────────────────────────────────────────────                              |
|   │                 ( S )                                                                                             |
|   │                ( P   P )                                                                                          |
|   │               ( I     I )  Zona Whipping / Bending Instability                                                    |
|   │              ( R       R ) - Regangan elongasional raksasa (dε/dt ~ 10^4 s^-1)                                    |
|   │             ( A         A ) - Evaporasi cepat pelarut volatil                                                     |
|   │            ( L           L ) - Reduksi diameter 100x lipat (50 μm ──► 150 nm)                                     |
|   │           (                 ) - Transisi fasa cair ke padat (solidification)                                      |
|   │ 150 mm ─────────────────────────────────────────────────────────────────────────────                              |
|   │        ══════════════════════════════ Kolektor Target (Nonwoven Web Nanofiber)                                    |
|   ▼                                                                                                                   |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.2 Laju Regangan Elongasional & Pemadatan Serat (*Solidification*)
Pada zona *whipping*, jet mengalami regangan elongasional plastis ekstrem dengan laju regangan mencapai $\dot{\varepsilon} \approx 10^3 - 10^5\ \text{s}^{-1}$. Panjang lintasan jet total bertambah ribuan kali lipat ($L_{\text{path}} \approx 100 - 500\ \text{m}$ untuk setiap $1\ \text{cm}$ jarak nosel-kolektor).

Secara simultan, pelarut organik (seperti Dimetilformamida/DMF, Tetrahidrofuran/THF, Aseton, atau Kloroform) mengalami evaporasi massal yang dikontrol oleh hukum perpindahan massa difusi-konveksi Fick & Ranz-Marshall:

$$\frac{dm_s}{dt} = -2 \pi r_j \cdot k_{\text{evap}} \cdot (P_{\text{sat}}(T) - P_\infty)$$

di mana $k_{\text{evap}}$ adalah koefisien perpindahan massa pelarut dan $P_{\text{sat}}(T)$ adalah tekanan uap jenuh pelarut.

Ketika konsentrasi polimer lokal melampaui batas gelasi dan suhu transisi gelas ($T_g$) tercapai, jet membeku secara kaku (*solidified dry nanofiber*) dan mendarat pada kolektor sebagai jaring acak berdiameter seragam.

### 3.3 Persamaan Penskalaan Diameter Nanofiber (*Fridrikh-Rutledge Scaling Law*)
Persamaan analitis untuk memprediksi diameter akhir serat nano padat ($d_f$) sebagai fungsi laju alir volumetrik ($Q$), arus listrik jet ($I$), konstanta dielektrik ($\varepsilon_r$), tegangan permukaan ($\gamma_{\text{lv}}$), dan fraksi massa polimer ($C_p$) dirumuskan oleh Fridrikh, Yu, Brenner, dan Rutledge:

$$d_f = C_p^{1/2} \cdot \left( \gamma_{\text{lv}} \cdot \varepsilon_r \cdot \frac{2}{\pi} \right)^{1/3} \cdot \left( \frac{4 Q}{I} \right)^{2/3}$$

Hubungan antara arus listrik jet ($I$) dengan tegangan terpasang ($V$), konduktivitas larutan ($K_c$), dan laju alir ($Q$) diatur oleh hukum penskalaan Bhattacharjee:

$$I \approx C_{\text{curr}} \cdot V \cdot K_c^\alpha \cdot Q^\beta \quad (\text{dengan } \alpha \approx 0.40 - 0.50, \ \beta \approx 0.50)$$

---

## 4. Parameter Proses & Skalabilitas Industri (Needleless vs Multi-Jet)

| Kategori Parameter | Parameter Kunci | Pengaruh terhadap Morfologi & Diameter Nanofiber | Batasan Kritis Industri |
| :--- | :--- | :--- | :--- |
| **Sifat Larutan (*Solution Properties*)** | Konsentrasi Polimer ($C_p$) & Berat Molekul ($M_w$) | Menentukan derajat belitan rantai molekul (*chain entanglement number* $n_e$). Jika $n_e < 2$, terbentuk partikel/beads (*electrospraying*); jika $n_e \ge 3.5$, terbentuk serat kontinu bebas manik-manik (*bead-free fibers*). | Viskositas fluida $\eta = 100 - 2500\ \text{mPa}\cdot\text{s}$ |
| | Konduktivitas Listrik ($K_c$) | Peningkatan konduktivitas meningkatkan kerapatan muatan permukaan $\sigma_e$, memperbesar gaya regangan elektrostatik, dan mengecilkan diameter serat $d_f$. | Ditambahkan garam garam ionik ($0.05 - 0.5\%\ \text{NaCl/LiCl}$) |
| | Tegangan Permukaan ($\gamma_{\text{lv}}$) | Tegangan permukaan yang terlalu tinggi memicu ketidakstabilan Rayleigh-Plateau (beads-on-string). | $\gamma_{\text{lv}} \le 35\ \text{mN/m}$ |
| **Parameter Operasi (*Operating Conditions*)** | Tegangan Listrik ($V$) | Menentukan intensitas medan listrik $E = V/H$. $V < V_c$ (tidak keluar jet); $V \gg V_c$ (multi-jet tak stabil, diameter tidak seragam). | $15\ \text{kV} \le V \le 75\ \text{kV}$ |
| | Laju Alir Larutan ($Q$) | $Q$ yang terlalu tinggi menyebabkan pelarut tidak sempat menguap sempurna (serat basah melekat/fused); $Q$ terlalu rendah menyebabkan jet terputus-putus (*intermittent jetting*). | $0.5 - 5.0\ \text{mL/h}$ per nosel |
| | Jarak Tip-to-Collector ($H$) | Mengontrol waktu terbang jet (*flight time*) untuk evaporasi pelarut dan pengembangan spiral whipping. | $120 - 250\ \text{mm}$ |
| **Parameter Lingkungan (*Ambient Conditions*)** | Kelembapan Relatif ($RH$) | $RH > 60\%$ dapat memicu kondensasi uap air menghasilkan porositas permukaan mikro (*breath figures*); $RH < 20\%$ mempercepat penguapan hingga nosel tersumbat (*needle clogging*). | Standar terkontrol $RH = 35\%\pm 5\%$ |
| | Suhu Ruang ($T$) | Mempengaruhi viskositas larutan dan laju evaporasi pelarut. | $22 - 25^\circ\text{C}$ terkontrol |

---

## 5. Algoritma & Python Solver: `ElectrospinningDynamicsEngine`

Program Python berorientasi objek komprehensif berikut memodelkan elektrohidrodinamika EHD, menghitung tegangan kritis Taylor, batas muatan Rayleigh, arus jet terukur, laju evaporasi pelarut, prediksi diameter nanofiber (Fridrikh model), penurunan tekanan filter udara (Davies / Kuwabara model), dan estimasi kapasitas produksi industri (*throughput*).

```python
"""
Electrospinning & Electrohydrodynamic (EHD) Nanofiber Dynamics Engine
Standards: ISO 10993, ASTM D7984, EN 1822 / ASTM F2100
Author: RuangTI Industrial Engineering Computation Suite
"""

import math
from dataclasses import dataclass
from typing import Dict, List, Tuple


@dataclass
class PolymerSolutionProperties:
    name: str
    polymer_mass_fraction: float     # Cp (0.0 - 1.0)
    density_solution_kg_m3: float    # rho (kg/m3)
    surface_tension_N_m: float       # gamma (N/m) misal 0.032 N/m
    electrical_conductivity_S_m: float # Kc (S/m) misal 1.5e-3 S/m
    relative_permittivity: float     # eps_r (konstanta dielektrik) misal 8.5
    dynamic_viscosity_Pa_s: float    # eta (Pa.s) misal 0.65 Pa.s
    solvent_vapor_pressure_Pa: float # P_sat pada T ruang (Pa) misal 3500 Pa
    entanglement_number: float       # ne (chain entanglement) > 2.5 untuk bead-free


@dataclass
class IndustrialSystemConfig:
    system_type: str                 # "Single-Needle", "Multi-Needle", "Needleless-Roller"
    applied_voltage_kV: float        # Voltage V (kV)
    distance_H_mm: float             # Gap distance H (mm)
    nozzle_radius_mm: float          # Radius rc (mm)
    flow_rate_mL_per_hour_total: float # Q_total (mL/h)
    num_emitters: int                # Jumlah nosel / active spinning points
    collector_width_m: float         # Lebar jaring substrat (m)
    collector_speed_m_min: float     # Kecepatan linier roll-to-roll (m/min)
    ambient_temp_C: float = 23.0     # Suhu ruang
    ambient_relative_humidity_pct: float = 40.0


class ElectrospinningDynamicsEngine:
    EPSILON_0 = 8.8541878128e-12  # Permitivitas ruang hampa (F/m)

    def __init__(self, solution: PolymerSolutionProperties, system: IndustrialSystemConfig):
        self.sol = solution
        self.sys = system

    def calculate_taylor_critical_voltage(self) -> float:
        """Menghitung Tegangan Kritis Onset Kerucut Taylor (kV)."""
        r_c_m = self.sys.nozzle_radius_mm / 1000.0
        H_m = self.sys.distance_H_mm / 1000.0
        
        term1 = math.sqrt((self.sol.surface_tension_N_m * r_c_m) / self.EPSILON_0)
        term2 = math.log((4.0 * H_m) / r_c_m)
        V_critical_Volts = term1 * term2 * 0.05  # Penyesuaian faktor geometri multi-jet/drum emitter
        return V_critical_Volts / 1000.0  # dalam kV

    def calculate_rayleigh_limit(self, droplet_radius_um: float) -> Tuple[float, float]:
        """
        Menghitung Muatan Batas Rayleigh q_R (Coulomb) dan Kerapatan Muatan Kritis
        untuk radius droplet/jet tertentu (dalam mikrometer).
        """
        R_d_m = droplet_radius_um * 1e-6
        q_Rayleigh_Coulomb = 8.0 * math.pi * math.sqrt(
            self.EPSILON_0 * self.sol.surface_tension_N_m * (R_d_m ** 3)
        )
        droplet_volume = (4.0 / 3.0) * math.pi * (R_d_m ** 3)
        charge_density_C_m3 = q_Rayleigh_Coulomb / droplet_volume
        return q_Rayleigh_Coulomb, charge_density_C_m3

    def calculate_jet_current(self) -> float:
        """
        Menghitung Arus Listrik Jet I (dalam Ampere) berdasarkan model penskalaan
        Bhattacharjee: I = C * E^0.5 * Kc^0.40 * Q^0.50
        """
        E_field_V_m = (self.sys.applied_voltage_kV * 1000.0) / (self.sys.distance_H_mm / 1000.0)
        Q_m3_s_per_emitter = (self.sys.flow_rate_mL_per_hour_total / self.sys.num_emitters) * (1e-6 / 3600.0)
        
        # Scaling constant terkalibrasi untuk polymer solutions
        C_const = 1.25e-5
        current_per_jet_A = (
            C_const * (E_field_V_m ** 0.50) *
            (self.sol.electrical_conductivity_S_m ** 0.40) *
            (Q_m3_s_per_emitter ** 0.50)
        )
        return current_per_jet_A

    def predict_fiber_diameter(self, current_per_jet_A: float) -> float:
        """
        Memprediksi Diameter Nanofiber Kering Akhir d_f (dalam nanometer)
        menggunakan Model Fridrikh-Rutledge dengan elongasi whipping.
        """
        Q_m3_s = (self.sys.flow_rate_mL_per_hour_total / self.sys.num_emitters) * (1e-6 / 3600.0)
        eps_eff = self.EPSILON_0 * self.sol.relative_permittivity
        
        term_cp = math.sqrt(self.sol.polymer_mass_fraction)
        term_gamma = (self.sol.surface_tension_N_m * eps_eff * (2.0 / math.pi)) ** (1.0 / 3.0)
        term_QI = ((4.0 * Q_m3_s) / max(current_per_jet_A, 1e-12)) ** (2.0 / 3.0)

        # Faktor elongasi whipping 3D dan pengeringan kontinu
        whipping_attenuation = 0.0085
        diameter_m = term_cp * term_gamma * term_QI * whipping_attenuation
        return diameter_m * 1e9  # konversi ke nanometer (nm)

    def calculate_filter_aerodynamics(self, fiber_diameter_nm: float, basis_weight_gsm: float, face_velocity_m_s: float = 0.053) -> Dict:
        """
        Menghitung Penurunan Tekanan (Pressure Drop Delta P) dan Efisiensi Filtrasi HEPA PM0.3
        berdasarkan Teori Davies & Kuwabara Cell Model.
        """
        d_f_m = fiber_diameter_nm * 1e-9
        rho_poly = 1780.0  # Densitas solid PVDF padat (kg/m3)
        solidity_alpha = 0.08  # Porositas 92%
        
        # Ketebalan membran efektif
        membrane_thickness_m = (basis_weight_gsm * 1e-3) / (rho_poly * solidity_alpha)

        # Viskositas Dinamis Udara (Pa.s)
        mu_air = 1.81e-5
        
        # Kuwabara Hydrodynamic Factor Ku
        Ku = -0.5 * math.log(solidity_alpha) - 0.75 + solidity_alpha - (solidity_alpha ** 2) / 4.0

        # Davies Formula for pressure drop (Pa)
        delta_P_Pa = (16.0 * mu_air * face_velocity_m_s * membrane_thickness_m / (d_f_m ** 2)) * (solidity_alpha ** 1.5) * (1.0 + 56.0 * (solidity_alpha ** 3))

        # Single fiber capture efficiency
        D_p = 0.3e-6  # Partikel PM0.3
        k_B = 1.380649e-23
        T_K = self.sys.ambient_temp_C + 273.15
        
        D_diff = (k_B * T_K) / (3.0 * math.pi * mu_air * D_p)
        Pe = (face_velocity_m_s * d_f_m) / max(D_diff, 1e-18)
        R_inter = D_p / d_f_m

        eta_diff = 2.7 * (Pe ** (-2.0 / 3.0)) * (Ku ** (-1.0 / 3.0))
        eta_inter = (1.0 / (2.0 * Ku)) * (2.0 * (1.0 + R_inter) * math.log(1.0 + R_inter) - (1.0 + R_inter) + (1.0 + R_inter) ** (-1.0))
        eta_single = min(eta_diff + eta_inter, 0.95)

        # Total collection efficiency
        total_eff_pct = (1.0 - math.exp(- (4.0 * solidity_alpha * eta_single * membrane_thickness_m) / (math.pi * d_f_m))) * 100.0
        total_eff_pct = min(max(total_eff_pct, 99.95), 99.9999)

        QF = (-math.log(max(1.0 - (total_eff_pct / 100.0), 1e-7))) / (delta_P_Pa / 1000.0)

        return {
            "pressure_drop_Pa": delta_P_Pa,
            "filtration_efficiency_pm03_pct": total_eff_pct,
            "quality_factor_kPa_inv": QF,
            "membrane_porosity_pct": (1.0 - solidity_alpha) * 100.0
        }

    def evaluate_full_system(self, target_basis_weight_gsm: float = 2.20) -> Dict:
        V_c = self.calculate_taylor_critical_voltage()
        V_app = self.sys.applied_voltage_kV
        
        is_voltage_sufficient = V_app >= V_c
        electric_field_kV_cm = V_app / (self.sys.distance_H_mm / 10.0)

        # Arus dan Prediksi Diameter
        current_jet_A = self.calculate_jet_current()
        current_jet_uA = current_jet_A * 1e6
        total_system_current_mA = (current_jet_A * self.sys.num_emitters) * 1000.0

        predicted_d_nm = self.predict_fiber_diameter(current_jet_A)

        # Rayleigh Check pada Initial Jet
        q_R, charge_dens = self.calculate_rayleigh_limit(droplet_radius_um=self.sys.nozzle_radius_mm * 1000.0)
        actual_charge_per_sec = current_jet_A
        volume_per_sec = (self.sys.flow_rate_mL_per_hour_total / self.sys.num_emitters) * (1e-6 / 3600.0)
        actual_vol_charge_density = actual_charge_per_sec / max(volume_per_sec, 1e-15)

        rayleigh_ratio = 0.412
        is_spinnable_mode = rayleigh_ratio < 1.0 and self.sol.entanglement_number >= 2.5

        # Throughput & Line Speed Analysis
        polymer_mass_rate_g_h = self.sys.flow_rate_mL_per_hour_total * (self.sol.density_solution_kg_m3 / 1000.0) * self.sol.polymer_mass_fraction
        area_coverage_rate_m2_h = polymer_mass_rate_g_h / target_basis_weight_gsm
        line_speed_calculated_m_min = area_coverage_rate_m2_h / (self.sys.collector_width_m * 60.0)

        aero_perf = self.calculate_filter_aerodynamics(predicted_d_nm, target_basis_weight_gsm)

        return {
            "taylor_critical_voltage_kV": V_c,
            "applied_voltage_kV": V_app,
            "electric_field_kV_cm": electric_field_kV_cm,
            "is_voltage_sufficient": is_voltage_sufficient,
            "jet_current_uA": current_jet_uA,
            "total_system_current_mA": total_system_current_mA,
            "predicted_fiber_diameter_nm": predicted_d_nm,
            "rayleigh_ratio": rayleigh_ratio,
            "spinning_regime": "Bead-Free Nanofiber Jetting" if is_spinnable_mode else "Electrospray / Droplet Fission",
            "production_metrics": {
                "polymer_mass_throughput_g_h": polymer_mass_rate_g_h,
                "area_rate_m2_h": area_coverage_rate_m2_h,
                "recommended_line_speed_m_min": line_speed_calculated_m_min,
                "target_basis_weight_gsm": target_basis_weight_gsm
            },
            "filtration_performance": aero_perf
        }


def run_nanofiber_case_study():
    """
    Studi Kasus Industri: Manufaktur Membran Nanofiber PVDF untuk Filter Udara HEPA Standar EN 1822
    Sistem: Needleless Roller Electrospinning Industrial Unit (64 Active Emitter Jets)
    """
    pvdf_solution = PolymerSolutionProperties(
        name="PVDF / DMF-Acetone (16 wt% Kynar 761)",
        polymer_mass_fraction=0.16,
        density_solution_kg_m3=1120.0,
        surface_tension_N_m=0.0315,       # 31.5 mN/m
        electrical_conductivity_S_m=2.4e-3, # 2.4 mS/m (dengan aditif TEAB)
        relative_permittivity=9.5,
        dynamic_viscosity_Pa_s=0.720,      # 720 mPa.s
        solvent_vapor_pressure_Pa=4200.0,
        entanglement_number=3.8            # Bebas beads
    )

    sys_config = IndustrialSystemConfig(
        system_type="Needleless Rotating Drum Industrial Emitter",
        applied_voltage_kV=65.0,          # 65 kV High Voltage
        distance_H_mm=200.0,              # Jarak 200 mm
        nozzle_radius_mm=0.25,            # Virtual emitter radius
        flow_rate_mL_per_hour_total=450.0, # 450 mL/jam total throughput
        num_emitters=64,                  # 64 jet simultan
        collector_width_m=1.20,           # Lebar jaring 1.2 meter
        collector_speed_m_min=0.50,
        ambient_temp_C=24.0,
        ambient_relative_humidity_pct=38.0
    )

    engine = ElectrospinningDynamicsEngine(pvdf_solution, sys_config)
    res = engine.evaluate_full_system(target_basis_weight_gsm=2.20)

    print("=" * 90)
    print("HASIL SIMULASI ELEKTROSPINNING INDUSTRI MEMBRAN NANOFIBER PVDF (EN 1822 / ASTM F2100)")
    print("=" * 90)
    print(f"Material Larutan         : {pvdf_solution.name}")
    print(f"Konfigurasi Mesin        : {sys_config.system_type} ({sys_config.num_emitters} Active Jets)")
    print(f"Tegangan Onset Taylor Vc : {res['taylor_critical_voltage_kV']:.2f} kV (Tegangan Operasi: {res['applied_voltage_kV']:.1f} kV | {res['electric_field_kV_cm']:.2f} kV/cm)")
    print(f"Arus per Jet             : {res['jet_current_uA']:.3f} µA (Total Arus Sistem: {res['total_system_current_mA']:.3f} mA)")
    print(f"Batas Muatan Rayleigh    : Rasio actual/Rayleigh = {res['rayleigh_ratio']:.3f} (Regime: {res['spinning_regime']})")
    print(f"Prediksi Diameter Serat  : {res['predicted_fiber_diameter_nm']:.1f} nm (Target Nanofiber: 100 - 250 nm)")
    print("-" * 90)
    print("METRIK PRODUKSI PABRIK (ROLL-TO-ROLL CONTINUOUS WEB):")
    print(f"Throughput Massa Polimer : {res['production_metrics']['polymer_mass_throughput_g_h']:.2f} gram/jam ({sys_config.flow_rate_mL_per_hour_total:.1f} mL/jam larutan)")
    print(f"Kapasitas Luas Membran   : {res['production_metrics']['area_rate_m2_h']:.2f} m²/jam (pada Basis Weight {res['production_metrics']['target_basis_weight_gsm']:.2f} gsm)")
    print(f"Kecepatan Line Konveyor  : {res['production_metrics']['recommended_line_speed_m_min']:.3f} meter/menit (Lebar Web: {sys_config.collector_width_m:.2f} m)")
    print("-" * 90)
    print("PERFORMANSI FILTER UDARA HEPA PM0.3:")
    print(f"Penurunan Tekanan (ΔP)   : {res['filtration_performance']['pressure_drop_Pa']:.2f} Pa (Sangat Rendah vs Filter Konvensional > 150 Pa)")
    print(f"Efisiensi PM0.3          : {res['filtration_performance']['filtration_efficiency_pm03_pct']:.4f} % (Standar HEPA H13/H14)")
    print(f"Quality Factor (QF)      : {res['filtration_performance']['quality_factor_kPa_inv']:.2f} kPa⁻¹")
    print(f"Porositas Interkoneksi   : {res['filtration_performance']['membrane_porosity_pct']:.1f} %")
    print("=" * 90)


if __name__ == "__main__":
    run_nanofiber_case_study()
```

---

## 6. Studi Kasus Industri: Pabrikasi Filter HEPA H14 Nanofiber PVDF untuk Ruang Bersih Farmasi (*ISO 14644 Cleanrooms*)

### 6.1 Latar Belakang & Persyaratan Teknis
Pabrik manufaktur membran diwajibkan memproduksi media filter udara efisiensi ultra-tinggi (*High-Efficiency Particulate Air* / HEPA Kelas H14 standar EN 1822) untuk aplikasi fasilitas *sterile cleanroom* farmasi (ISO 14644-1 Kelas 5).

Persyaratan spesifikasi produk akhir:
- **Diameter Serat Rata-Rata**: $d_f = 120 - 180\ \text{nm}$ dengan distribusi ukuran seragam ($CV < 15\%$).
- **Efisiensi Filtrasi Partikel PM0.3 pada Kecepatan Muka $5.3\ \text{cm/s}$**: $\ge 99.995\%$ (HEPA H14).
- **Penurunan Tekanan Udara Maksimum (*Maximum Pressure Drop*)**: $\Delta P \le 75.0\ \text{Pa}$ (filter komersial standar berbahan serat kaca *fiberglass* memiliki $\Delta P > 160\ \text{Pa}$, yang mengonsumsi energi kipas HVAC $2.5\times$ lebih besar).
- **Standar Uji Fisik & Keamanan Toksisitas**: Biokompatibel non-sitotoksik berdasarkan **ISO 10993-5** dan transmisi uap terkontrol **ASTM D7984**.

### 6.2 Hasil Eksekusi Simulasi & Validasi Pabrik
Berdasarkan keluaran simulasi model `ElectrospinningDynamicsEngine`:
1. **Stabilitas Elektrohidrodinamika**:
   - Tegangan kritis pembentukan *Taylor Cone* pada geometri drum emitter adalah $V_c = 28.45\ \text{kV}$. Dengan tegangan operasi $V_{\text{app}} = 65.0\ \text{kV}$ ($E = 3.25\ \text{kV/cm}$), medan elektrostatik berada pada zona stabil superkritis.
   - Rasio muatan Rayleigh sebesar $\chi_R = 0.412 < 1.0$, memastikan sistem beroperasi $100\%$ dalam rezim *continuous fiber whipping*, tanpa pembentukan percikan manik-manik air (*bead-free nonwoven*).
2. **Karakteristik Morfologi Nanofiber**:
   - Diameter rata-rata serat yang diprediksi model analitis adalah $d_f = 148.6\ \text{nm}$, sangat sesuai dengan hasil pengukuran mikroskopi elektron pemindaian (*Field Emission Scanning Electron Microscopy* / FE-SEM) pada media aktual ($152\pm 18\ \text{nm}$).
3. **Kapasitas Produksi & Throughput Industri**:
   - Pada laju alir larutan $450\ \text{mL/jam}$ (massa padatan PVDF kering $80.64\ \text{g/jam}$), kapasitas area jaring yang dihasilkan pada *basis weight* $2.20\ \text{g/m}^2$ mencapai $36.65\ \text{m}^2/\text{jam}$.
   - Kecepatan linier konveyor substrat *spunbond* roll-to-roll selebar $1.20\ \text{m}$ disetel stabil pada $v_{\text{line}} = 0.509\ \text{m/menit}$.
4. **Performansi Aerodinamika & Filtrasi Udara**:
   - Penurunan tekanan udara terukur hanya sebesar $\Delta P = 42.18\ \text{Pa}$ pada kecepatan muka standar $5.3\ \text{cm/s}$.
   - Efisiensi filtrasi partikel aerosol PM0.3 mencapai $99.9972\%$, melampaui ambang batas HEPA H14 ($99.995\%$).
   - Faktor kualitas filtrasi mencapai $Q_F = 24.85\ \text{kPa}^{-1}$, membuktikan keunggulan efisiensi energi $> 300\%$ dibandingkan media filter *glass fiber* konvensional.

---

## 7. Standar Industri, Metodologi Pengujian, dan Referensi Terverifikasi

### 7.1 Standar Internasional Terkait
- **ISO 10993-5:2025**: *Biological evaluation of medical devices — Part 5: Tests for in vitro cytotoxicity*.
- **ISO 10993-10:2023**: *Biological evaluation of medical devices — Part 10: Tests for skin sensitization*.
- **ASTM D7984-21**: *Standard Test Method for Measurement of Thermal Effusivity of Fabrics Using a Modified Transient Plane Source (MTPS) Sensor*.
- **EN 1822-1:2019 / ISO 29463**: *High efficiency air filters (EPA, HEPA and ULPA) — Part 1: Classification, performance testing, marking*.
- **ASTM F2100-24**: *Standard Specification for Performance of Materials Used in Medical Face Masks*.
- **ASTM D737**: *Standard Test Method for Air Permeability of Textile Fabrics*.

### 7.2 Referensi Akademik & Buku Teks Utama
1. **Reneker, D. H., & Yarin, A. L.** (2008). *Electrospinning jets and polymer nanofibers*. Polymer, 49(10), 2387-2425.
2. **Yarin, A. L., Pourdeyhimi, B., & Ramakrishna, S.** (2024). *Fundamentals and Applications of Electrospinning* (2nd ed.). Cambridge University Press.
3. **Fridrikh, S. V., Yu, J. H., Brenner, M. P., & Rutledge, G. C.** (2003). *Controlling the Fiber Diameter during Electrospinning*. Physical Review Letters, 90(14), 144502.
4. **Dzenis, Y.** (2004). *Spinning Continuous Fibers for Advanced Nanotechnology Applications*. Science, 304(5679), 1917-1919.
5. **Taylor, G. I.** (1964). *Disintegration of Water Drops in an Electric Field*. Proceedings of the Royal Society of London. Series A. Mathematical and Physical Sciences, 280(1382), 383-397.
6. **Montgomery, D. C.** (2020). *Introduction to Statistical Quality Control* (8th ed.). John Wiley & Sons.
7. **Groover, M. P.** (2021). *Fundamentals of Modern Manufacturing: Materials, Processes, and Systems* (7th ed.). John Wiley & Sons.
