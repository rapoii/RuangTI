# Modul 623: Electrohydraulic Forming (EHF) & High-Rate Underwater Shockwave Metalworking: Mekanika Pelepasan Busur Listrik Bawah Air, Dinamika Gelombang Kejut & Kavitasi Fluida, Peningkatan Batas Mampu Bentuk (FLC Extension), dan Optimasi Energi Pulsa Kapasitif (ASTM E9, ASME BPVC & ISO 12004)

## 1. Pengantar & Konteks Industri: Deformasi Kecepatan Sangat Tinggi (High-Velocity Forming)

Dalam industri manufaktur modern—terutama sektor kedirgantaraan (*aerospace*), otomotif kendaraan listrik (*electric vehicle lightweighting*), dan bejana tekan presisi—penggunaan material berkekuatan ultra-tinggi seperti paduan aluminium seri 5xxx/6xxx/7xxx, *Advanced High-Strength Steels* (AHSS: DP, TRIP, CP), serta lembaran titanium (Ti-6Al-4V) sering kali terbentur oleh batasan keuletan (*ductility limit*) yang rendah pada temperatur ruang jika dibentuk menggunakan mesin pres mekanis/hidrolik konvensional.

Pembentukan konvensional dengan laju regangan kuasi-statis ($\dot{\varepsilon} \approx 10^{-3} - 10^{-1}\text{ s}^{-1}$) memicu lokalisasi regangan (*strain localization*) dini, fenomena *necking*, dan keretakan getas sebelum kontur cetakan rumit dapat terisi sempurna. Fenomena *springback* yang parah pada material bertegangan luluh tinggi juga menambah kompleksitas koreksi geometris cetakan.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                       SPEKTRUM LAJU REGANGAN DALAM PROSES PEMBENTUKAN LOGAM LEMBARAN                                  |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   Kuasi-Statis                 Pengecapan Dinamis          Pembentukan Kecepatan Tinggi (HVF: EHF / EMF)             |
|   (10^-4 - 10^-1 s^-1)         (10^0 - 10^2 s^-1)          (10^3 - 10^5 s^-1)                                         |
|   ├────────────────────────────┼───────────────────────────┼──────────────────────────────────────────────┤           |
|   • Hydraulic Press            • Mechanical Crank Press    • Electrohydraulic Forming (EHF)                           |
|   • Deep Drawing Konvensional  • Drop Hammer               • Electromagnetic Forming (EMF)                            |
|   • Batas Mampu Bentuk Rendah  • Efek Inersia Terbatas     • Explosive Forming                                        |
|   • Springback Signifikan      • Risiko Robek Tinggi       • Perpanjangan Batas Mampu Bentuk (FLC) +40-100%           |
|                                                            • Reduksi Nyata Efek Springback (~0%)                      |
|                                                            • Kecepatan Lembaran: 100 - 350 m/s                        |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

**Electrohydraulic Forming (EHF)** adalah teknologi manufaktur berbasis impuls (*high-velocity pulse-forming*) yang memanfaatkan konversi energi listrik bertegangan tinggi yang tersimpan dalam bank kapasitor menjadi energi kinetik gelombang kejut mekanis (*hydrodynamic shock wave*) melalui fenomena pelepasan busur listrik bawah air (*underwater electrical spark discharge*) atau ledakan kawat inisiasi (*initiating exploding wire*).

Keunggulan revolusioner dari teknologi EHF meliputi:
1. **Peningkatan Batas Mampu Bentuk (*Forming Limit Curve Extension*)**: Pada laju regangan ekstrem ($\dot{\varepsilon} > 10^3\text{ s}^{-1}$), inersia massa lokal dan tegangan dislokasi viskoplastis menekan inisiasi *necking*, meningkatkan regangan batas plastis lembaran sebesar $30\% - 100\%$ melampaui kurva kuasi-statis standar ISO 12004.
2. **Reduksi Drastis *Springback***: Impuls tekanan gelombang kejut yang merambat menabrakkan lembaran logam ke rongga cetakan pada kecepatan tinggi ($100 - 350\text{ m/s}$), memicu pemantulan gelombang tegangan tekan (*compressive stress wave superposition*) yang meratakan distribusi sisa tegangan hingga mendekati nol.
3. **Pencetakan Detail Mikro (*High Micro-Feature Replication*)**: Tekanan puncak impuls mencapai ratusan megapascal ($P_{\text{peak}} \approx 50 - 500\text{ MPa}$), memungkinkan lembaran mengalir ke sudut fillet cetakan yang sangat tajam tanpa memerlukan cetakan lawan (*single-sided die tooling*).

Standar internasional yang mengatur karakterisasi dan validasi proses ini antara lain:
- **ISO 12004-1 / 12004-2**: *Metallic materials — Determination of forming-limit curves for sheet and strip*.
- **ASTM E9**: *Standard Test Methods of Compression Testing of Metallic Materials at Room Temperature (High Strain Rate Dynamics)*.
- **ASME Boiler and Pressure Vessel Code (BPVC) Section VIII**: *Rules for Construction of Pressure Vessels (Pressure Chamber Safety Guidelines)*.
- **IEEE Std 4**: *Standard Techniques for High-Voltage Testing*.

---

## 2. Arsitektur Sistem EHF & Rangkaian RLC Bank Kapasitor

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                ARSITEKTUR FISIK DAN RANGKAIAN SISTEM EHF                                              |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         [ UNIT CHARGER HV ]                                                                                           |
|          Tegangan: V_0 (5 - 30 kV)                                                                                    |
|                 │                                                                                                     |
|                 ▼                                                                                                     |
|          [ BANK KAPASITOR ]  (Kapasitansi C: 50 - 400 uF, Energi E_0: 2 - 50 kJ)                                      |
|                 │                                                                                                     |
|                 ▼ (Saklar Cepat Spark-Gap / Ignitron / Thyratron)                                                     |
|         ╔═══════════════════════════════════════════════════════════════════════════════════════════════════════╗     |
|         ║ BEJANA TEKAN RUANG AIR (WATER CHAMBER)                                                                ║     |
|         ║                                                                                                       ║     |
|         ║      Elektroda Positif (+)                     Elektroda Negatif (-)                                  ║     |
|         ║          ┌──────────┐                               ┌──────────┐                                      ║     |
|         ║          │   [+]    │══════► [BUSUR PLASMA] ◄═══════│   [-]    │                                      ║     |
|         ║          └──────────┘        (Spark Gap L_g)        └──────────┘                                      ║     |
|         ║                                    │                                                                  ║     |
|         ║                             Gelombang Kejut                                                           ║     |
|         ║                               (Shockwave P)                                                           ║     |
|         ║                                    ▼                                                                  ║     |
|         ║          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ (Medium Air: c_0 = 1500 m/s)        ║     |
|         ║          ════════════════════════════════════════════════════════ (Lembaran Logam Benda Kerja)        ║     |
|         ║          ┌──────────────────────────────────────────────────────┐ (Blankholder Clamping Force F_b)    ║     |
|         ║          │             RONGGA CETAKAN (VACUUM DIE)              │                                     ║     |
|         ║          │                      \_/ \_/                         │ (Evakuasi Udara: Vakum < 10 mbar)   ║     |
|         ║          └──────────────────────────────────────────────────────┘                                     ║     |
|         ╚═══════════════════════════════════════════════════════════════════════════════════════════════════════╝     |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.1 Persamaan Dinamika Rangkaian Pelepasan Muatan RLC
Sistem pelepasan daya EHF dimodelkan secara matematis sebagai rangkaian listrik seri RLC teredam (*underdamped series RLC circuit*), di mana resistansi $R(t)$ mencakup resistansi internal rangkaian $R_0$, resistansi kabel, dan resistansi dinamis saluran busur plasma $R_{\text{plasma}}(t)$, sedangkan induktansi $L$ mencakup induktansi kabel koaksial dan elektroda.

Persamaan diferensial aliran muatan $q(t)$ pada bank kapasitor adalah:
$$L \frac{d^2 q(t)}{dt^2} + R(t) \frac{dq(t)}{dt} + \frac{1}{C} q(t) = 0$$

Dengan kondisi batas awal:
$$q(0) = Q_0 = C V_0, \quad I(0) = \left. \frac{dq}{dt} \right|_{t=0} = 0$$

Energi elektrostatik nominal mula-mula yang tersimpan pada bank kapasitor dinyatakan oleh:
$$E_0 = \frac{1}{2} C V_0^2$$

Di mana:
- $E_0$ = Energi total bank kapasitor ($\text{Joule}$)
- $C$ = Kapasitansi ekuivalen ($\text{Farad}$)
- $V_0$ = Tegangan pengisian awal ($\text{Volt}$)

Jika diasumsikan resistansi rata-rata rangkaian $R$ bersifat sub-kritis ($R < 2 \sqrt{L/C}$), arus transien pelepasan $I(t)$ berbentuk osilasi sinus teredam eksponensial:
$$I(t) = \frac{V_0}{\omega_d L} e^{-\alpha t} \sin(\omega_d t)$$

Di mana konstanta redaman $\alpha$ dan frekuensi sudut teredam $\omega_d$ dirumuskan sebagai:
$$\alpha = \frac{R}{2L}$$
$$\omega_0 = \frac{1}{\sqrt{LC}}, \quad \omega_d = \sqrt{\omega_0^2 - \alpha^2} = \sqrt{\frac{1}{LC} - \frac{R^2}{4L^2}}$$

Periode pelepasan gelombang arus primer adalah $T = \frac{2\pi}{\omega_d}$, dengan waktu menuju arus puncak ($t_{\text{peak}}$):
$$t_{\text{peak}} = \frac{1}{\omega_d} \arctan\left( \frac{\omega_d}{\alpha} \right) \approx \frac{\pi}{2} \sqrt{LC} \quad (\text{untuk redaman rendah } \alpha \ll \omega_0)$$

Arus puncak maksimum ($I_{\text{max}}$) yang mengalir melalui celah elektroda dapat diestimasi melalui:
$$I_{\text{max}} \approx V_0 \sqrt{\frac{C}{L}} e^{-\frac{\alpha}{\omega_d} \arctan\left( \frac{\omega_d}{\alpha} \right)}$$

---

## 3. Termodinamika Saluran Plasma, Hidrodinamika Gelombang Kejut & Perambatan Tekanan

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    MEKANISME PELEPASAN PLASMA DAN PERAMBATAN GELOMBANG KEJUT EHF                                      |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  FASE 1: PELEPASAN & EKSPANSI PLASMA (0 - 10 us)                                                                      |
|  Pelepasan muatan listrik bertegangan tinggi melintasi celah elektroda memanaskan air menjadi plasma gas terionisasi  |
|  dengan temperatur T > 10.000 - 30.000 K dan tekanan internal P_plasma > 1 - 5 GPa.                                   |
|                                                                                                                       |
|  FASE 2: PEMBENTUKAN & PROPAGASI GELOMBANG KEJUT AKUSTIK (10 - 50 us)                                                 |
|  Ekspansi supersonik gelembung plasma mendorong fluida air di sekitarnya, membentuk diskontinuitas gelombang kejut    |
|  bola (spherical acoustic shock wave front) yang merambat pada kecepatan c > c_0 (c_0 = 1482 m/s).                   |
|                                                                                                                       |
|  FASE 3: INTERAKSI FLUIDA-STRUKTUR & DEFORMASI LEMBARAN (50 - 300 us)                                                |
|  Gelombang kejut menghantam permukaan lembaran logam, mentransfer momentum fluida, memicu deformasi plastis           |
|  berkecepatan 100 - 350 m/s menuju profil cetakan vakum.                                                             |
|                                                                                                                       |
|  FASE 4: OSILASI GELEMBUNG KAVITASI & DENYUT SEKUNDER (0.5 - 5 ms)                                                    |
|  Gelembung plasma mengembang melampaui titik kesetimbangan, mengalami kolaps hidrodinamik (bubble collapse),          |
|  dan menghasilkan gelombang kejut sekunder (secondary cavitation pulse).                                              |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.1 Model Kanal Pelepasan Energi Plasma
Daya listrik seketika yang terdisipasi ke dalam kanal plasma air adalah:
$$P_e(t) = I(t)^2 R_{\text{plasma}}(t)$$

Resistansi kanal plasma air sering dimodelkan melalui formulasi semi-empiris Weizel-Rompe atau model resistansi Toepler tergeneralisasi:
$$R_{\text{plasma}}(t) = \frac{k_R \cdot d_{\text{gap}}}{\left( \int_0^t I^2(\tau) d\tau \right)^{\beta}}$$

Di mana $d_{\text{gap}}$ adalah jarak celah elektroda, $k_R$ adalah koefisien konduktivitas spesifik plasma media cair, dan eksponen $\beta \approx 0{,}5 - 1{,}0$.

Fraksi energi listrik yang berhasil dikonversikan menjadi energi mekanik gelombang kejut fluida dinyatakan oleh efisiensi akustik $\eta_{\text{shock}}$:
$$E_{\text{shock}} = \eta_{\text{shock}} \cdot E_0 \quad (\eta_{\text{shock}} \approx 0{,}15 - 0{,}40)$$

### 3.2 Pemodelan Tekanan Puncak Gelombang Kejut Bawah Air (Model Cole-Taylor)
Berdasarkan teori dinamika ledakan bawah air (*underwater explosion hydrodynamics*) oleh Cole, profil tekanan transien gelombang kejut pada jarak radial $r$ dari sumbu titik pelepasan busur dirumuskan sebagai peluruhan eksponensial:
$$P(r, t) = P_m(r) \cdot e^{-\frac{t}{\theta(r)}} \quad \text{untuk } t \ge 0$$

Di mana:
- $P_m(r)$ = Tekanan puncak muka gelombang kejut (*peak shock pressure*) pada jarak $r$
- $\theta(r)$ = Konstanta waktu peluruhan impuls gelombang kejut (*time decay constant*)

Formulasi tekanan puncak $P_m(r)$ dan konstanta peluruhan $\theta(r)$ sebagai fungsi energi efektif pelepasan $E_{\text{eff}} = \eta_{\text{shock}} E_0$ dan jarak rambat $r$ dinyatakan oleh:
$$P_m(r) = K_p \left( \frac{E_{\text{eff}}^{1/3}}{r} \right)^{\alpha_p}$$
$$\theta(r) = K_{\theta} \cdot E_{\text{eff}}^{1/3} \left( \frac{E_{\text{eff}}^{1/3}}{r} \right)^{-\alpha_{\theta}}$$

Untuk medium air destilasi pada kondisi standar:
- $K_p \approx 53{,}1 - 58{,}5\text{ MPa}\cdot\text{m}^{\alpha_p}/\text{kJ}^{1/3}$
- $\alpha_p \approx 1{,}13 - 1{,}20$
- $K_{\theta} \approx 0{,}092\text{ ms}/\text{kJ}^{1/3}$
- $\alpha_{\theta} \approx 0{,}22$

### 3.3 Persamaan Keadaan Fluida Mie-Grüneisen & Hugoniot Air
Pada kondisi tekanan kejut tinggi ($P > 100\text{ MPa}$), kompresibilitas nonlinier air diperhitungkan menggunakan relasi kecepatan kejut Hugoniot (*shock Hugoniot equation of state*):
$$U_s = c_0 + s \cdot u_p$$

Di mana:
- $U_s$ = Kecepatan perambatan muka gelombang kejut ($\text{m/s}$)
- $c_0$ = Kecepatan suara volumetrik referensi dalam air ($c_0 \approx 1482\text{ m/s}$)
- $s$ = Koefisien kemiringan Hugoniot empiris ($s \approx 1{,}75 - 2{,}0$ untuk air)
- $u_p$ = Kecepatan partikel fluida di belakang muka kejut ($\text{m/s}$)

Tekanan kejut Hugoniot memenuhi hukum kekekalan momentum fluida:
$$P_s - P_0 = \rho_0 \cdot U_s \cdot u_p = \rho_0 (c_0 + s \cdot u_p) u_p$$

---

## 4. Mekanika Deformasi Plastis Kecepatan Tinggi & Perpanjangan Batas Mampu Bentuk (FLC Extension)

```
+-----------------------------------------------------------------------------------------------------------------------+
|                       FENOMENOLOGI PENINGKATAN KEULETAN PADA HIGH STRAIN-RATE                                         |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   Regangan Utama Mayor (e_1)                                                                                          |
|        ▲                                                                                                              |
|        │                                        KURVA EHF (HIGH-RATE: 10^3 s^-1)                                      |
|        │                                     .------------------------.  <-- Peningkatan Batas Mampu Bentuk           |
|        │                                   /                            \     (+40% - 100% Ekspansi Formabilitas)     |
|        │                                 /                                \                                           |
|        │                               /                                    \                                         |
|        │        KURVA KUASI-STATIS   /                                        \                                       |
|        │        (ISO 12004 STANDAR)/                                            \                                     |
|        │               ┌──────────┐                                               \                                   |
|        │              /            \                                                \                                 |
|        │             /              \                                                 \                               |
|        │            /                \                                                  \                             |
|        │           /                  \                                                   \                           |
|        └──────────┴────────────────────┴────────────────────────────────────────────────────┴────────►                |
|               -0.2         0          +0.2        +0.4        +0.6        +0.8        +1.0      Regangan Minor (e_2)  |
|               (Tension-Compression)  (Plane Strain)          (Biaxial Tension)                                        |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 4.1 Persamaan Konstitutif Johnson-Cook Termo-Viskoplastis
Perilaku tegangan alir logam lembaran di bawah regangan besar, laju regangan tinggi, dan kenaikan temperatur adiabatik dimodelkan menggunakan persamaan viskoplastis Johnson-Cook:
$$\sigma_{\text{flow}} = \left( A + B \varepsilon_p^n \right) \left[ 1 + C \ln \left( \frac{\dot{\varepsilon}_p}{\dot{\varepsilon}_0} \right) \right] \left[ 1 - \left( \frac{T - T_{\text{room}}}{T_{\text{melt}} - T_{\text{room}}} \right)^m \right]$$

Di mana:
- $A$ = Batas luluh referensi pada laju regangan kuasi-statis ($\text{MPa}$)
- $B, n$ = Koefisien dan eksponen pengerasan regangan (*strain hardening*)
- $C$ = Parameter sensitivitas laju regangan (*strain rate sensitivity*)
- $\dot{\varepsilon}_0$ = Laju regangan referensi ($\approx 1{,}0\text{ s}^{-1}$)
- $m$ = Eksponen pelunakan termal (*thermal softening exponent*)
- $T_{\text{melt}}, T_{\text{room}}$ = Titik leleh material dan temperatur lingkungan

### 4.2 Kenaikan Temperatur Akibat Pemanasan Deformasi Adiabatik
Karena proses pembentukan berlangsung sangat cepat ($\Delta t < 200\ \mu\text{s}$), tidak ada waktu yang cukup untuk disipasi konduksi panas (*adiabatic condition*). Fraksi kerja plastis yang terkonversi menjadi panas dinyatakan oleh faktor Taylor-Quinney ($\beta_{\text{TQ}} \approx 0{,}90 - 0{,}95$):
$$\Delta T_{\text{adiab}} = \frac{\beta_{\text{TQ}}}{\rho c_p} \int_0^{\varepsilon_p} \sigma_{\text{flow}} \, d\varepsilon_p$$

Di mana $\rho$ adalah densitas logam dan $c_p$ adalah kapasitas panas spesifik.

### 4.3 Kriteria Inersia Penekan Necking (Inertial Stabilization)
Penyebab utama melonjaknya kurva batas mampu bentuk (*Forming Limit Curve / FLC*) pada laju deformasi tinggi dijelaskan oleh stabilisasi inersia. Berdasarkan analisis gangguan linier pertambahan leher (*linear perturbation necking analysis*), percepatan deselerasi massa lembaran membangkitkan gaya inersia penstabil:
$$F_{\text{inertia}} = -\rho t_s \frac{\partial^2 w}{\partial t^2}$$

Inersia ini mendistribusikan tegangan lokal melintasi area yang lebih luas, menghambat konsentrasi deformasi plastis terlokalisasi (*necking suppression*), sehingga lembaran mampu menyerap regangan plastis seragam yang jauh lebih tinggi sebelum terjadi kegagalan fraktur.

---

## 5. Algoritma Perhitungan & Python Solver: Multiphysics EHF Simulator

Berikut adalah program solver Python industri komprehensif untuk menyimulasikan:
1. Dinamika pelepasan muatan listrik rangkaian RLC berdaya tinggi.
2. Estimasi tekanan puncak impuls gelombang kejut bawah air pada variasi jarak stand-off $r$.
3. Respon kinematika kecepatan terbang lembaran (*blank fly velocity*) dan evolusi regangan viskoplastis Johnson-Cook berkecepatan tinggi.

```python
"""
RuangTI Multiphysics Electrohydraulic Forming (EHF) Numerical Engine
Standar Komputasi: ISO 12004, ASTM E9, ASME BPVC Sec VIII & IEEE Std 4
"""

import math
from typing import Dict, List, Tuple

class ElectrohydraulicFormingSimulator:
    def __init__(
        self,
        capacitance_uF: float = 120.0,       # Bank Capacitance (uF)
        voltage_kV: float = 18.0,            # Charging Voltage (kV)
        inductance_uH: float = 2.5,          # System Parasitic Inductance (uH)
        resistance_mOhm: float = 25.0,       # Circuit + Plasma Resistance (mOhm)
        efficiency_shock: float = 0.22,      # Electrical-to-Acoustic Shock Efficiency (15-30%)
        water_density: float = 1000.0,       # Fluid density (kg/m3)
        water_c0: float = 1482.0,            # Acoustic speed in water (m/s)
        die_standoff_mm: float = 65.0,       # Standoff Distance electrode to blank (mm)
        sheet_thickness_mm: float = 1.2,     # Blank Sheet Thickness (mm)
        sheet_density: float = 2700.0,       # Material Density (kg/m3 - e.g. AA6061-T6)
        jc_A_MPa: float = 324.0,             # Johnson-Cook Yield Stress A (MPa)
        jc_B_MPa: float = 114.0,             # JC Strain Hardening B (MPa)
        jc_n: float = 0.42,                  # JC Hardening Exponent n
        jc_C: float = 0.016,                 # JC Strain Rate Sensitivity C
        jc_m: float = 1.34,                  # JC Thermal Softening m
        T_melt_K: float = 925.0,             # Melting Temperature (K)
        T_room_K: float = 298.15,            # Ambient Temperature (K)
        heat_capacity_J_kgK: float = 896.0,  # Specific Heat cp (J/kg.K)
        taylor_quinney: float = 0.90         # Taylor-Quinney Coefficient
    ):
        self.C = capacitance_uF * 1e-6
        self.V0 = voltage_kV * 1e3
        self.L = inductance_uH * 1e-6
        self.R = resistance_mOhm * 1e-3
        self.eta_shock = efficiency_shock
        self.rho_w = water_density
        self.c0_w = water_c0
        self.R_dist = die_standoff_mm * 1e-3
        self.t_s = sheet_thickness_mm * 1e-3
        self.rho_s = sheet_density
        self.jc_A = jc_A_MPa * 1e6
        self.jc_B = jc_B_MPa * 1e6
        self.jc_n = jc_n
        self.jc_C = jc_C
        self.jc_m = jc_m
        self.Tm = T_melt_K
        self.T0 = T_room_K
        self.cp = heat_capacity_J_kgK
        self.beta_tq = taylor_quinney

    def compute_electrical_discharge(self) -> Dict[str, float]:
        """Menghitung parameter elektrostatik dan transien rangkaian pelepasan RLC."""
        stored_energy_kJ = 0.5 * self.C * (self.V0 ** 2) / 1e3
        omega_0 = 1.0 / math.sqrt(self.L * self.C)
        alpha = self.R / (2.0 * self.L)
        
        is_underdamped = (self.R < 2.0 * math.sqrt(self.L / self.C))
        if is_underdamped:
            omega_d = math.sqrt(omega_0**2 - alpha**2)
            t_peak_us = (math.atan(omega_d / alpha) / omega_d) * 1e6
            discharge_period_us = (2.0 * math.pi / omega_d) * 1e6
            peak_current_kA = (self.V0 / (omega_d * self.L)) * math.exp(-alpha * (t_peak_us * 1e-6)) * math.sin(omega_d * (t_peak_us * 1e-6)) / 1e3
        else:
            omega_d = 0.0
            t_peak_us = math.sqrt(self.L * self.C) * 1e6
            discharge_period_us = 0.0
            peak_current_kA = (self.V0 / (self.R + 1e-6)) / 1e3

        return {
            "stored_energy_kJ": stored_energy_kJ,
            "is_underdamped": is_underdamped,
            "damping_factor_alpha": alpha,
            "natural_freq_kHz": (omega_0 / (2.0 * math.pi)) / 1e3,
            "discharge_period_us": discharge_period_us,
            "time_to_peak_current_us": t_peak_us,
            "peak_discharge_current_kA": peak_current_kA
        }

    def compute_shockwave_pressure_profile(self) -> Dict[str, float]:
        """
        Menghitung profil tekanan puncak gelombang kejut bawah air (Cole-Taylor model)
        dan momentum impuls spesifik pada lembaran.
        """
        elec = self.compute_electrical_discharge()
        E_eff_kJ = elec["stored_energy_kJ"] * self.eta_shock
        
        # Konstanta Cole untuk pelepasan busur air
        Kp = 55.4  # MPa * m^(1.15) / (kJ)^(1/3)
        alpha_p = 1.15
        K_theta = 0.095  # ms / kJ^(1/3)
        alpha_theta = 0.22

        scaled_dist = self.R_dist / (max(E_eff_kJ, 0.001) ** (1.0 / 3.0))
        peak_pressure_MPa = Kp * ((1.0 / scaled_dist) ** alpha_p)
        decay_time_theta_us = K_theta * (max(E_eff_kJ, 0.001) ** (1.0 / 3.0)) * (scaled_dist ** alpha_theta) * 1e3

        # Impuls spesifik per satuan luas (Integral P(t) dt = P_m * theta)
        specific_impulse_Pa_s = (peak_pressure_MPa * 1e6) * (decay_time_theta_us * 1e-6)

        return {
            "effective_shock_energy_kJ": E_eff_kJ,
            "peak_shock_pressure_MPa": peak_pressure_MPa,
            "pressure_decay_time_us": decay_time_theta_us,
            "specific_impulse_Pa_s": specific_impulse_Pa_s
        }

    def simulate_high_velocity_forming(self, time_steps: int = 200, total_time_us: float = 150.0) -> Dict[str, Any]:
        """
        Simulasi integrasi numerik dinamika kecepatan terbang lembaran dan regangan plastik viskoplastis.
        """
        shock = self.compute_shockwave_pressure_profile()
        P_peak_Pa = shock["peak_shock_pressure_MPa"] * 1e6
        theta_s = shock["pressure_decay_time_us"] * 1e-6
        m_areal = self.rho_s * self.t_s  # Massa per satuan luas (kg/m2)

        dt = (total_time_us * 1e-6) / time_steps
        t_arr: List[float] = []
        v_arr: List[float] = []
        disp_arr: List[float] = []
        eps_arr: List[float] = []
        sigma_flow_arr: List[float] = []

        v = 0.0
        displacement = 0.0
        eps_p = 0.001
        temp = self.T0

        for step in range(time_steps):
            t_curr = step * dt
            # Tekanan gelombang kejut transien
            P_t = P_peak_Pa * math.exp(-t_curr / theta_s) if theta_s > 0 else 0.0

            # Laju regangan ekuivalen aproksimasi kinematika regangan membran kubah:
            # eps ~ (displacement / R_die)^2, eps_dot ~ 2 * displacement * v / R_die^2
            R_die = 0.05  # Radius rongga cetakan nominal 50 mm
            eps_dot = max(abs(2.0 * displacement * v / (R_die**2 + 1e-9)), 1.0)

            # Evaluasi Tegangan Alir Johnson-Cook
            term_strain = self.jc_A + self.jc_B * (eps_p ** self.jc_n)
            term_rate = 1.0 + self.jc_C * math.log(eps_dot / 1.0)
            T_homologous = max(0.0, min(1.0, (temp - self.T0) / (self.Tm - self.T0)))
            term_temp = 1.0 - (T_homologous ** self.jc_m)
            sigma_flow = term_strain * term_rate * term_temp

            # Tegangan membran penahan deformasi
            sigma_resisting = 2.0 * (self.t_s / R_die) * sigma_flow

            # Persamaan Gerak Newton Massa Lembaran: m * a = P_t - P_resist
            net_pressure = P_t - sigma_resisting
            accel = net_pressure / m_areal

            v += accel * dt
            if v < 0.0 and t_curr > theta_s * 2.0:
                v = 0.0  # Menahan osilasi balik setelah benturan cetakan
            displacement += v * dt
            
            # Update regangan plastis inkremental
            d_eps = (v / R_die) * dt
            eps_p += max(0.0, d_eps)

            # Update kenaikan temperatur adiabatik
            d_heat = (self.beta_tq / (self.rho_s * self.cp)) * sigma_flow * max(0.0, d_eps)
            temp += d_heat

            t_arr.append(t_curr * 1e6)
            v_arr.append(v)
            disp_arr.append(displacement * 1e3)
            eps_arr.append(eps_p)
            sigma_flow_arr.append(sigma_flow / 1e6)

        max_v = max(v_arr)
        max_disp = max(disp_arr)
        max_strain = max(eps_arr)
        final_temp_C = temp - 273.15

        return {
            "max_sheet_velocity_m_s": max_v,
            "max_dome_height_mm": max_disp,
            "equivalent_plastic_strain": max_strain,
            "final_adiabatic_temperature_C": final_temp_C,
            "time_history_samples": {
                "time_us": [t_arr[i] for i in range(0, time_steps, time_steps // 6)],
                "velocity_m_s": [v_arr[i] for i in range(0, time_steps, time_steps // 6)],
                "displacement_mm": [disp_arr[i] for i in range(0, time_steps, time_steps // 6)],
                "flow_stress_MPa": [sigma_flow_arr[i] for i in range(0, time_steps, time_steps // 6)]
            }
        }

if __name__ == "__main__":
    ehf_engine = ElectrohydraulicFormingSimulator(
        capacitance_uF=150.0,
        voltage_kV=20.0,
        inductance_uH=2.0,
        resistance_mOhm=30.0,
        efficiency_shock=0.25,
        die_standoff_mm=60.0,
        sheet_thickness_mm=1.5,
        sheet_density=2700.0,     # Paduan AA6061-T6
        jc_A_MPa=324.0,
        jc_B_MPa=114.0,
        jc_n=0.42,
        jc_C=0.016,
        jc_m=1.34
    )

    elec = ehf_engine.compute_electrical_discharge()
    shock = ehf_engine.compute_shockwave_pressure_profile()
    dyn = ehf_engine.simulate_high_velocity_forming()

    print("================================================================================")
    print("          HASIL SIMULASI NUMERIK ELECTROHYDRAULIC FORMING (EHF)                 ")
    print("================================================================================")
    print(f"Energi Tersimpan Bank Kapasitor (E_0) : {elec['stored_energy_kJ']:.2f} kJ")
    print(f"Frekuensi Pelepasan Transien          : {elec['natural_freq_kHz']:.2f} kHz")
    print(f"Arus Puncak Pelepasan Busur Air (I_max): {elec['peak_discharge_current_kA']:.2f} kA")
    print(f"Waktu Menuju Arus Puncak (t_peak)     : {elec['time_to_peak_current_us']:.2f} us")
    print("--------------------------------------------------------------------------------")
    print(f"Energi Gelombang Kejut Akustik        : {shock['effective_shock_energy_kJ']:.2f} kJ")
    print(f"Tekanan Puncak Muka Kejut (P_max)     : {shock['peak_shock_pressure_MPa']:.2f} MPa")
    print(f"Konstanta Waktu Peluruhan Impuls (θ)  : {shock['pressure_decay_time_us']:.2f} us")
    print(f"Impuls Spesifik Fluida                : {shock['specific_impulse_Pa_s']:.2f} Pa.s")
    print("--------------------------------------------------------------------------------")
    print(f"Kecepatan Puncak Terbang Lembaran     : {dyn['max_sheet_velocity_m_s']:.2f} m/s")
    print(f"Kedalaman Penetrasi Deformasi Kubah   : {dyn['max_dome_height_mm']:.2f} mm")
    print(f"Regangan Plastis Ekuivalen Akumulasi  : {dyn['equivalent_plastic_strain']:.4f}")
    print(f"Temperatur Adiabatik Deformasi        : {dyn['final_adiabatic_temperature_C']:.1f} °C")
    print("================================================================================")
```

---

## 6. Studi Kasus Industri: Pembentukan Komponen B-Pillar & Panel Baterai EV AA6061-T6 Tanpa Retak

### 6.1 Latar Belakang Masalah
Sebuah manufaktur tier-1 komponen otomotif kendaraan listrik menghadapi kendala serius saat mencetak panel penutup modul baterai (*battery enclosure structural lid*) berbahan aluminium paduan AA6061-T6 tebal $1{,}5\text{ mm}$. Pada proses pengecapan (*stamping*) mekanis kuasi-statis konvensional:
- Terjadi robekan (*splitting failure*) pada sudut fillet radius kecil ($R = 3{,}0\text{ mm}$) akibat terlampauinya batas keuletan material ($\varepsilon_{\text{fracture}} \approx 0{,}18$).
- Variasi distorsi *springback* mencapai $\pm 2{,}4\text{ mm}$, mengakibatkan kebocoran seal IP67 pada pengujian kedap air baterai pack.
- Upaya anil pelunakan (*full annealing*) sebelum stamping membutuhkan tahapan perlakuan panas pasca-pembentukan larutan padat dan penuaan (*solution heat treatment & T6 artificial aging*) yang melipatgandakan *cycle time* dan biaya energi.

### 6.2 Implementasi Sistem Electrohydraulic Forming (EHF)
Pabrik mengimplementasikan stasiun kerja EHF berkonfigurasi cetakan vakum satu sisi (*single-sided vacuum die*) dengan parameter operasional:
- **Bank Kapasitor**: $C = 150\ \mu\text{F}$, $V_0 = 20\text{ kV}$ ($E_0 = 30\text{ kJ}$).
- **Medium Transmisi**: Air deionisasi dengan celah elektroda tungsten-tembaga $d_{\text{gap}} = 35\text{ mm}$.
- **Jarak Stand-Off Cetakan**: $h = 60\text{ mm}$.
- **Tingkat Vakum Cetakan Bawah**: $P_{\text{die}} < 5\text{ mbar}$ (mencegah kompresi bantalan udara terperangkap).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                 KOMPARASI METRIK KINERJA: MECHANICAL STAMPING VS ELECTROHYDRAULIC FORMING                             |
+-----------------------------------------------------------------------------------------------------------------------+
| Metrik Kinerja                              Mechanical Stamping          EHF Single-Pulse            Peningkatan      |
+-----------------------------------------------------------------------------------------------------------------------+
| Laju Regangan Deformasi (eps_dot)           0.05 s^-1                    4.2 x 10^3 s^-1             ~84.000x         |
| Regangan Batas Plastis Mayor (e_1 max)      0.18                         0.36                        +100.0%          |
| Kedalaman Tarik Maksimum Fillet             14.2 mm (Retak/Tear)         28.5 mm (Mulus/No Necking)  +100.7%          |
| Deviasi Springback Geometris                +/- 2.40 mm                  +/- 0.08 mm                 -96.7%           |
| Biaya Perkakas Cetakan (Tooling Cost)       Rp 850.000.000 (Punch & Die) Rp 320.000.000 (Single Die) -62.4%          |
| Integritas Kerapatan IP67 Seal              Gagal (Tingkat Cacat 14.8%)  Lolos 100% (Zero Leakage)   Zero Defect      |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 6.3 Analisis Metalurgi & Distribusi Sisa Tegangan
Pemeriksaan difraksi sinar-X (XRD) dan mikroskopi elektron transmisi (TEM) menunjukkan:
1. **Peredaman Sisa Tegangan (*Residual Stress Relief*)**: Gelombang pantul tegangan tekan berkecepatan tinggi meregangkan matriks kisi secara seragam, menghasilkan sisa tegangan permukaan mendekati nol ($\sigma_{\text{res}} = -15\text{ MPa}$ tekan menguntungkan), mengeliminasi fenomena *springback*.
2. **Kerapatan Dislokasi Seragam**: Deformasi berkecepatan $210\text{ m/s}$ mengaktivasi *multiple slip systems* dan dislokasi heliks tanpa membentuk pita geser terlokalisasi (*localized shear bands*), menjaga ketahanan korosi tegangan (*stress corrosion cracking resistance*) sesuai standar ASTM G47.

---

## 7. Pertanyaan Evaluasi & Panduan Praktis

1. **Jelaskan mengapa batas mampu bentuk (FLC) lembaran logam meningkat signifikan pada proses EHF dibandingkan pembentukan kuasi-statis.**
   - *Jawaban*: Peningkatan FLC pada EHF didorong oleh kombinasi dua mekanisme utama: (a) *Stabilisasi Inersia*: Kecepatan deformasi yang mencapai $> 100\text{ m/s}$ membangkitkan gaya inersia deselerasi massa yang mendistribusikan regangan ke seluruh lembaran, menekan inisiasi penyempitan lokal (*necking suppression*); (b) *Viskoplastisitas & Efek Laju Regangan*: Nilai parameter sensitivitas laju regangan $C$ dalam model Johnson-Cook meningkatkan tegangan alir efektif seiring peningkatan $\dot{\varepsilon}$, menunda kegagalan bifurkasi plastis.

2. **Mengapa evakuasi udara (pemvakuman) di dalam rongga cetakan bawah wajib dilakukan sebelum pelepasan impuls EHF?**
   - *Jawaban*: Pada kecepatan terbang lembaran $100 - 300\text{ m/s}$, udara yang terperangkap di dalam rongga cetakan tidak memiliki waktu untuk keluar melalui celah ventilasi konvensional. Udara tersebut akan mengalami kompresi adiabatik ekstrem yang menghasilkan kantung tekanan balik tinggi (*back-pressure cushion*) dan temperatur tinggi lokal (*diesel effect*), yang menghalangi lembaran mengisi sudut detail fillet cetakan serta berpotensi membakar pelumas atau mengoksidasi permukaan benda kerja.

3. **Bagaimana hubungan antara kapasitansi $C$, induktansi parasitik $L$, dan efisiensi konversi energi akustik pada sistem pelepasan EHF?**
   - *Jawaban*: Frekuensi pelepasan sudut berbanding terbalik dengan $\sqrt{LC}$. Untuk memaksimalkan transfer daya listrik ke kanal busur plasma sebelum air mengembang secara termal, induktansi sistem $L$ harus diminimalkan sekecil mungkin ($L < 2 - 3\ \mu\text{H}$) dengan menggunakan kabel koaksial berinduktansi rendah dan koneksi kolektor paralel. Pelepasan berdurasi pendek dengan waktu puncak $t_{\text{peak}} < 15\ \mu\text{s}$ mentransfer energi secara impulsif, menghasilkan efisiensi gelombang kejut hidrodinamik $\eta_{\text{shock}}$ tertinggi.

---

## 8. Referensi Terverifikasi (Academic & Industrial Standards)

1. **Soulami, A., Smith, M., & Rohatgi, A.** (2012). *Electrohydraulic Forming of Near-Net Shape Automotive Panels - Final CRADA Report*. Pacific Northwest National Laboratory (PNNL), U.S. Department of Energy. DOI: `10.2172/1048654`.
2. **Golovashchenko, S. F., Bonnen, J. J. F., & Dawson, S. A.** (2012). "Electrohydraulic Sheet Metal Forming of Aluminum Panels". *Light Metals 2012*, The Minerals, Metals & Materials Society, pp. 497–502. DOI: `10.1007/978-3-319-48179-1_76`.
3. **Samei, J., Green, D. E., & Golovashchenko, S. F.** (2014). "Analysis of Failure in Dual Phase Steel Sheets Subject to Electrohydraulic Forming". *ASME Journal of Manufacturing Science and Engineering*, 136(4), 041011. DOI: `10.1115/1.4027940`.
4. **Holzmüller, M., & Volk, W.** (2023). "Proof of concept for incremental sheet metal forming by means of electromagnetic and electrohydraulic high-speed forming". *Materials Research Proceedings*, 28, pp. 11–18. DOI: `10.21741/9781644902417-2`.
5. **Hassannejadasl, A., Green, D. E., & Golovashchenko, S. F.** (2013). "Electrohydraulic forming of dual phase steels; numerical and experimental work". *AIP Conference Proceedings*, 1567(1), pp. 696–699. DOI: `10.1063/1.4850166`.
6. **ISO 12004-2:2021**: *Metallic materials — Determination of forming-limit curves for sheet and strip — Part 2: Determination of forming-limit curves in the laboratory*. International Organization for Standardization.
7. **ASTM E9-19**: *Standard Test Methods of Compression Testing of Metallic Materials at Room Temperature*. ASTM International, West Conshohocken, PA.
