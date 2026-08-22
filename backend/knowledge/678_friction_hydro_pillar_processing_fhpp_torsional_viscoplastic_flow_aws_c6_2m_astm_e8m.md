# Modul 678: Friction Hydro-Pillar Processing (FHPP) & Friction Taper Plug Welding (FTPW): Mekanika Aliran Viscoplisitas Puntir (Torsional Viscoplastic Flow), Pembangkitan Panas Gesek Antarmuka, Rekristalisasi Dinamis (Dynamic Recrystallization), Penutupan Rongga Cacat, dan Rekayasa Perbaikan Struktur Beban Berat (AWS C6.2M, AWS D17.3, ISO 25239 & ASTM E8M)

## 1. Pengantar & Konteks Industri: Teknologi Rekayasa Perbaikan Fase Padat (*Solid-State Structural Repair*)

Pada struktur teknik industri beban berat (*heavy-duty structural engineering*)—seperti anjungan minyak lepas pantai (*offshore jackets*), pipa penyalur migas bawah laut (*subsea pipelines*), bejana tekan reaktor nuklir, poros rotor turbin uap, dan komponen paduan aluminium berkekuatan tinggi pada badan wahana antariksa—keberadaan cacat retak lelah internal (*sub-surface fatigue cracks*), lubang korosi sumuran (*pitting holes*), dan cacat porositas las merupakan ancaman integritas struktural yang katastropik.

Metode perbaikan fusi konvensional (seperti pengelasan busur *GMAW/GTAW repair*) seringkali tidak dapat diterapkan pada baja berkekuatan tinggi (seperti AISI 4140, baja struktural S355/S690, atau paduan nikel Inconel) karena:
1. Pemasukan panas lokal yang masif menginduksi zona terpengaruh panas (*Heat-Affected Zone* - HAZ) yang rentan mengalami penggetasan martensit dan retak dingin hidrogen (*hydrogen-induced cold cracking*).
2. Terbentuknya tegangan sisa tarik puncak setara tegangan luluh material di sekitar area perbaikan.
3. Distorsi geometrik parah dan timbulnya porositas sekunder lelehan.

Sebagai teknologi terobosan fase padat (*solid-state joining technology*), **Friction Hydro-Pillar Processing (FHPP)**—yang dikembangkan secara revolusioner oleh The Welding Institute (TWI)—dan variannya **Friction Taper Plug Welding (FTPW)** menghadirkan solusi pengelasan dan penambalan struktural tanpa melalui fasa cair (*non-fusion solid-state joining*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|            PARADIGMA PERBAIKAN STRUKTURAL: FUSION ARC WELDING REPAIR VS FRICTION HYDRO-PILLAR (FHPP)                  |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   1. PENGELASAN FUSI KONVENSIONAL (GMAW / SMAW REPAIR):                                                               |
|      - Membutuhkan pemotongan gouging rongga besar, pemanasan awal (preheating) ketat, dan pendinginan terkontrol.     |
|      - Terjadi peleburan dan pembekuan ulang logam -> segregasi unsur, porositas, dan pembentukan struktur dendritik. |
|      - HAZ getas dengan tegangan sisa tarik ekstrem (sigma_res ~ sigma_yield) -> rentan retak fatik susulan.         |
|      - Tidak memungkinkan untuk perbaikan darurat bawah air (underwater repair) tanpa habitat kering berbiaya mahal.  |
|                                                                                                                       |
|   2. FRICTION HYDRO-PILLAR PROCESSING / FRICTION TAPER PLUG (FHPP / FTPW):                                            |
|      - Bekerja sepenuhnya dalam FASA PADAT (Suhu puncak T_peak = 0.70 - 0.85 T_melt, TIDAK ADA PELELEBURAN LOGAM).    |
|      - Batang stud konsumsi (consumable stud rod) diputar pada kecepatan rotasi tinggi (N = 1.000 - 6.000 RPM)         |
|        dan ditekan secara aksial (F_axial = 10 - 150 kN) ke dalam lubang silinder/konis yang telah dibor pada cacat.  |
|      - Friksi antarmuka membangkitkan panas viscoplisitas ekstrem -> stud mengalami pemendekan plastis (burn-off).    |
|      - Logam plastis mengalami ekstrusi hidrostatik membalik, mengisi rongga lubang dari bawah ke atas secara kontinu. |
|      - REKRISTALISASI DINAMIS (Dynamic Recrystallization - DRX) menghasilkan butir equiaxed ultra-halus (d < 5 um).   |
|      - Sifat mekanis sambungan (kekuatan tarik, ketangguhan impak Charpy) setara atau melebihi logam induk (parent).   |
|      - Mampu beroperasi di lingkungan ekstrem bawah air laut (hyperbaric underwater in-situ repair).                   |
|                                                                                                                       |
|                             Sistem Spindel Friksi Torsi Tinggi (High-Torque Friction Head)                            |
|                                         ┌───────────────────────────┐                                                 |
|                                         │   Kecepatan Putar Stud N  │ N = 1.500 - 5.000 RPM                           |
|                                         │   Gaya Aksial F_axial     │ F_a = 20 - 120 kN                               |
|                                         └───────────┬───────────────┘                                                 |
|                                                     │                                                                 |
|                                                     ▼                                                                 |
|                                         ┌───────────────────────────┐                                                 |
|                                         │ Batang Stud Konsumsi      │ Diameter D_stud = 10 - 30 mm (Material Sejenis/ |
|                                         │ (Consumable Stud Rod)     │ Paduan Khusus Berkekuatan Tinggi)               |
|                                         └───────────┬───────────────┘                                                 |
|                                                     │                                                                 |
|                                                     ▼                                                                 |
|    ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════    |
|    ◄── Gerak Pakan Aksial Tekan (Burn-Off Rate v_bo = 2 - 15 mm/s, Waktu Proses t_total = 5 - 30 detik)               |
|    ▼ LUBANG SILINDER/KONIS PEMBERSIH CACAT PADA PELAT LOGAM INDUK (Hole Diameter D_hole, Kedalaman H_hole)           |
|      - Gesekan Kontak Titik Dasar Lubang Mengawali Pembangkitan Panas Friksi Termal (T_int = 950 - 1200 deg C)        |
|      - Pembentukan Lapisan Logam Viscoplisitas Terplastisasi Penuh (*Plasticized Viscoplastic Shear Layer*)           |
|      - Aliran Ekstrusi Membalik Mengisi Seluruh Celah Radial Cincin dan Mengeluarkan Oksida Permukaan                 |
|      - Penempaan Aksial Akhir (*Forging / Upset Stage*) Menjamin Pengikatan Metalurgi Tanpa Rongga Void (*Defect-Free)|
|    ═══════════════════════════════════════════════════════════════════════════════════════════════════════════════    |
+-----------------------------------------------------------------------------------------------------------------------+
```

Standar internasional dan regulasi perserikatan pengelasan yang mengatur proses pengelasan gesek dan perbaikan fase padat:
1. **AWS C6.2M/C6.2:2020**: *Specification for Friction Welding of Metals* (Kualifikasi prosedur dan operator pengelasan gesek).
2. **AWS D17.3/D17.3M:2021**: *Specification for Friction Stir Welding in Aerospace Applications*.
3. **ISO 25239 (Parts 1 to 5)**: *Friction stir welding — Aluminium*.
4. **ISO 15614-13**: *Specification and qualification of welding procedures for metallic materials — Welding procedure test — Part 13: Resistance and friction welding*.
5. **ASTM E8 / E8M**: *Standard Test Methods for Tension Testing of Metallic Materials*.
6. **ASTM E23**: *Standard Test Methods for Notched Bar Impact Testing of Metallic Materials (Charpy V-Notch)*.

---

## 2. Termomekanika & Pemodelan Pembangkitan Panas Gesek Antarmuka (*Frictional Heat Generation Mechanics*)

### 2.1 Pembangkitan Panas Friksi Tergantung Tekanan dan Kecepatan Sudut

Pada FHPP, laju pembangkitan panas total pada antarmuka gesekan dasar dan dinding silinder terdiri atas komponen gesekan antarmuka kering (*coulomb friction stage*) pada fasa awal dan disipasi energi deformasi viscoplisitas plastis (*viscoplastic shear deformation*) pada fasa tunak (*steady-state plasticized stage*).

Fluks panas gesek total ($q_{\text{fric}}(r)$) pada permukaan kontak ujung stud berputar dinyatakan oleh integrasi tegangan geser kontak ($\tau_c$) dan kecepatan tangensial lokal ($v(r) = \omega \cdot r$):

$$q_{\text{fric}}(r) = \tau_c(r) \cdot \omega \cdot r = \mu_f \cdot P_{\text{axial}} \cdot \left(\frac{2\pi N}{60}\right) \cdot r$$

Di mana:
- $\mu_f$ = Koefisien gesekan dinamis antarmuka ($\mu_f \approx 0{,}30 - 0{,}60$ pada fasa dingin, menurun menjadi $\mu_f \approx 0{,}10 - 0{,}20$ pada suhu plastis).
- $P_{\text{axial}} = \frac{4 F_{\text{axial}}}{\pi D_{\text{stud}}^2}$ = Tekanan kontak aksial nominal ($\text{N/mm}^2$ atau $\text{MPa}$).
- $N$ = Kecepatan putar spindel stud ($\text{RPM}$).
- $\omega = \frac{2\pi N}{60}$ = Kecepatan sudut rotasi ($\text{rad/s}$).
- $r$ = Jarak radial dari sumbu pusat putaran ($0 \le r \le R_{\text{stud}}$).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    DISTRIBUSI TEGANGAN GESER, KECEPATAN TANGENSIAL, DAN FLUKS PANAS RADIAL                             |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|       Kecepatan Tangensial v(r) = omega * r                                                                           |
|             ▲                                                                                                         |
|             │                                                                         /  v_max = omega * R_stud       |
|             │                                                                       /                                 |
|             │                                                                     /                                   |
|             │                                                                   /                                     |
|             │                                                                 /                                       |
|             │                                                               /                                         |
|             │                                                             /                                           |
|       ──────┼───────────────────────────────────────────────────────────/────────────────► Radius r                  |
|             │ r = 0 (Pusat Stud, v = 0)                                 r = R_stud (Tepi Luar Stud)                   |
|             │                                                                                                         |
|       Fluks Panas Friksi q_fric(r) (Fasa Awal Kontak)                                                                 |
|             ▲                                                                                                         |
|             │                                                                         *  q_max pada radius terluar    |
|             │                                                                       /                                 |
|             │                                                                     /                                   |
|             │                                                                   /                                     |
|             │                                                                 /                                       |
|       ──────┼───────────────────────────────────────────────────────────────/────────────► Radius r                  |
|             │ Pembangkitan Panas Nol di Pusat -> Panas Merambat Konduktif ke Inti Stud                                |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Total daya kalor gesek yang dibangkitkan pada antarmuka ujung kontak dasar stud ($Q_{\text{base}}$):
$$Q_{\text{base}} = \int_0^{R_{\text{stud}}} q_{\text{fric}}(r) \cdot 2\pi r \, dr = \int_0^{R_{\text{stud}}} (\mu_f P_{\text{axial}} \omega r) \cdot 2\pi r \, dr = \frac{2}{3} \pi \mu_f P_{\text{axial}} \omega R_{\text{stud}}^3$$

Saat dinding lateral stud mulai terdesak dan mengalami kontak friksi dengan dinding lubang lubang, fluks panas lateral tambahan pada dinding selimut silinder ($Q_{\text{wall}}$) dengan kedalaman penetrasi kontak $h_c(t)$ adalah:
$$Q_{\text{wall}} = \mu_{\text{wall}} P_{\text{radial}} \omega R_{\text{stud}} \cdot (2\pi R_{\text{stud}} h_c(t)) = 2\pi \mu_{\text{wall}} P_{\text{radial}} \omega R_{\text{stud}}^2 h_c(t)$$

---

## 3. Mekanika Deformasi Viscoplisitas Puntir & Aliran Material (*Torsional Viscoplastic Flow Mechanics*)

### 3.1 Model Konstitutif Tegangan Alir Zener-Hollomon & Sellars-Tegart

Pada kondisi tunak pemrosesan FHPP, suhu pada lapisan kontak mencapai $T = 950 - 1250^\circ\text{C}$ ($> 0{,}75 T_{\text{solidus}}$). Pada rezim termomekanis ini, logam stud mengalami deformasi viscoplisitas aliran fasa padat dengan laju regangan geser sangat tinggi ($\dot{\varepsilon} = 10^1 - 10^3\ \text{s}^{-1}$).

Hubungan antara tegangan alir plastis ($\sigma_{\text{flow}}$), laju regangan ($\dot{\varepsilon}$), dan suhu deformasi absolut ($T$) dimodelkan melalui persamaan hiperbolik sinus Arrhenius Sellars-Tegart:

$$Z = \dot{\varepsilon} \exp\left( \frac{Q_{\text{def}}}{R \cdot T} \right) = A \left[ \sinh\left( \alpha \cdot \sigma_{\text{flow}} \right) \right]^n$$

Di mana:
- $Z$ = Parameter Zener-Hollomon (faktor laju regangan terkompensasi suhu, $\text{s}^{-1}$).
- $Q_{\text{def}}$ = Energi aktivasi deformasi plastis fasa padat ($\text{J/mol}$, misalnya $Q_{\text{def}} \approx 280 - 320\ \text{kJ/mol}$ untuk baja struktural/paduan rendah).
- $R$ = Konstanta gas universal ($8{,}314\ \text{J/mol}\cdot\text{K}$).
- $T$ = Suhu absolut pada lapisan plastis ($\text{Kelvin}$).
- $A, \alpha, n$ = Konstanta material empiris.

Tegangan luluh geser plastis material panas ($\tau_{\text{yield}}(T)$) dihitung dari kriteria plastisitas von Mises:
$$\tau_{\text{yield}}(T) = \frac{\sigma_{\text{flow}}(Z, T)}{\sqrt{3}} = \frac{1}{\sqrt{3} \alpha} \text{arcsinh}\left( \left[ \frac{Z}{A} \right]^{1/n} \right)$$

```
+-----------------------------------------------------------------------------------------------------------------------+
|                 DINAMIKA ALIRAN EKSTRUSI MEMBALIK MATERIAL VISCOPLASTIS DALAM RONGGA FHPP                             |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                   Batang Stud Konsumsi Bergerak Turun (Kecepatan Burn-Off v_bo)                                        |
|                                        │       │                                                                      |
|                                        │   ▼   │                                                                      |
|                                  ╔═════╪═══════╪═════╗                                                                |
|                                  ║     │       │     ║                                                                |
|                                  ║  ┌──┴───────┴──┐  ║                                                                |
|                                  ║  │ Lapisan     │  ║                                                                |
|                                  ║  │ Viscoplisitas│ ║ Aliran Ekstrusi Membalik (Reverse Upward Flow)                 |
|                                  ║  │ Plastis     │  ║ Tekanan Hidrostatik P_hydro > 150 - 300 MPa                    |
|                                  ║ ╭┴─────────────┴╮ ║                                                                |
|       Logam Induk                ║ │ 🌀 Logam DRX 🌀│ ║ Logam Induk                                                   |
|       (Base Metal)               ║ │ Butir Ultrafine│ ║ (Base Metal)                                                  |
|       ═══════════════════════════╬═╧═══════════════╧═╬═════════════════════════════════                               |
|                                  ║   Dasar Lubang    ║                                                                |
|                                  ╚═══════════════════╝                                                                |
|                                                                                                                       |
|       Tahapan Metalurgi Pembentukan Sambungan FHPP:                                                                   |
|       1. Fasa Gesekan Awal (Friction & Rubbing Stage, t = 0 - 3 s): Pembentukan panas antarmuka kering.               |
|       2. Fasa Plastisasi & Konsolidasi (Plasticizing Stage, t = 3 - 15 s): Stud melunak & mengisi rongga lubang.      |
|       3. Fasa Pengereman Rotasi Cepat (Deceleration Stage, t_brake < 0.3 s): Spindel berhenti seketika.                |
|       4. Fasa Tempa Aksial Akhir (Forging & Upset Stage, t = 15 - 20 s): Tekanan tempa tinggi menutup seluruh void.   |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.2 Kinetika Rekristalisasi Dinamis (DRX) & Evolusi Ukuran Butir Kristal

Deformasi plastis geser intensif pada suhu tinggi memicu Rekristalisasi Dinamis Kontinu (*Continuous Dynamic Recrystallization* - CDX) dan Diskontinu (*DDRX*). Ukuran butir rekristalisasi akhir ($d_{\text{DRX}}$) pada zona inti olahan (*processed pillar zone*) berkorelasi secara langsung dengan parameter Zener-Hollomon melalui persamaan Hall-Petch termodifikasi:

$$d_{\text{DRX}} = B \cdot Z^{-m} = B \cdot \left[ \dot{\varepsilon} \exp\left( \frac{Q_{\text{def}}}{R \cdot T} \right) \right]^{-m}$$

Di mana $B$ adalah konstanta struktural dan $m$ adalah eksponen ukuran butir ($m \approx 0{,}10 - 0{,}25$). Akibat dislokasi regangan yang masif dan nukleasi butir baru, ukuran butir ferit/austenit yang semula berukuran $d_0 = 30 - 80\ \mu\text{m}$ pada bahan mentah mengalami penghalusan ekstrem (*grain refinement*) menjadi butir sub-mikron/mikron halus ($d_{\text{DRX}} = 1{,}5 - 4{,}0\ \mu\text{m}$).

Berdasarkan relasi Hall-Petch:
$$\sigma_y = \sigma_0 + \frac{k_y}{\sqrt{d_{\text{DRX}}}}$$

Penyusutan ukuran butir ini menghasilkan peningkatan kekuatan luluh ($\sigma_y$) dan kekuatan tarik maksimum ($\sigma_{\text{UTS}}$) pada pilar sambungan hingga $15\% - 35\%$ lebih tinggi dibandingkan logam induk asli tanpa mengorbankan keuletan (*ductility*).

---

## 4. Mekanisme Penutupan Rongga Cacat (*Void Closure Mechanics*) & Pengikatan Fasa Padat

Keberhasilan integritas sambungan FHPP mensyaratkan penutupan sempurna dari seluruh rongga cacat awal dan pencegahan terbentuknya rongga sekunder (*interface unbonding / lack of consolidation*).

Kondisi penutupan rongga secara mekanis didasarkan pada model kriteria tegangan triaksial dan tekanan hidrostatik leleh ($P_{\text{hydro}}$):

$$\frac{d R_{\text{pore}}}{d t} = - \frac{1}{2} R_{\text{pore}} \cdot \dot{\varepsilon}_{\text{eff}} \cdot \left( \frac{P_{\text{hydro}}}{\sigma_{\text{flow}}} \right)$$

Di mana:
- $R_{\text{pore}}$ = Radius mikro-porositas rongga cacat ($\mu\text{m}$).
- $\dot{\varepsilon}_{\text{eff}}$ = Laju regangan efektif ekuivalen ($\text{s}^{-1}$).
- $P_{\text{hydro}} = -\frac{1}{3}(\sigma_{xx} + \sigma_{yy} + \sigma_{zz})$ = Tekanan hidrostatik kompresif internal yang dibangkitkan oleh gaya aksial tempa ($F_{\text{forge}}$).

Ketika rasio tegangan hidrostatik kompresif terhadap tegangan alir memenuhi $\frac{P_{\text{hydro}}}{\sigma_{\text{flow}}} > 1{,}5 - 2{,}5$, film oksida permukaan pecah dan terdispersi ke dalam matriks terplastisasi (*oxide disruption*), memfasilitasi kontak metalurgi atom-ke-atom murni (*intimate metallic contact*) dan difusi batas butir fasa padat secara instan dalam hitungan detik.

---

## 5. Algoritma & Python Solver: Simulator Termomekanika FHPP, Kinetika DRX, dan Kekuatan Sambungan

Berikut adalah implementasi skrip Python berstandar rekayasa industri untuk menyimulasikan profil suhu transien, laju konsumsi batang stud (*burn-off rate*), evolusi ukuran butir DRX Zener-Hollomon, dan estimasi kekuatan tarik pilar hasil perbaikan FHPP.

```python
"""
Friction Hydro-Pillar Processing (FHPP) & FTPW Thermomechanical Solver
Standar Kepatuhan: AWS C6.2M/C6.2, AWS D17.3, ISO 25239, ASTM E8M
Author: RuangTI Advanced Solid-State Joining & Structural Repair Lab
"""

import math
from typing import Dict, List, Tuple

class FHPPThermomechanicalSimulator:
    def __init__(
        self,
        stud_diameter_mm: float,         # D_stud (mm)
        hole_diameter_mm: float,         # D_hole (mm)
        hole_depth_mm: float,            # H_hole (mm)
        spindle_speed_rpm: float,        # N (RPM)
        axial_force_kn: float,           # F_axial (kN)
        friction_time_sec: float,        # t_fric (detik)
        forge_force_kn: float,           # F_forge (kN)
        material_name: str = "AISI 4140 Alloy Steel",
        parent_yield_strength_mpa: float = 650.0,
        parent_uts_mpa: float = 850.0,
        initial_grain_size_um: float = 45.0
    ):
        self.D_stud = stud_diameter_mm * 1e-3  # m
        self.D_hole = hole_diameter_mm * 1e-3  # m
        self.H_hole = hole_depth_mm * 1e-3    # m
        self.N = spindle_speed_rpm
        self.omega = (2.0 * math.pi * self.N) / 60.0 # rad/s
        self.F_axial = axial_force_kn * 1e3   # N
        self.t_fric = friction_time_sec
        self.F_forge = forge_force_kn * 1e3   # N
        
        self.material = material_name
        self.sigma_y_parent = parent_yield_strength_mpa
        self.sigma_uts_parent = parent_uts_mpa
        self.d_grain_0 = initial_grain_size_um
        
        # Konstanta Termofisika & Konstitutif Baja Paduan Rendah (AISI 4140)
        self.k_thermal = 35.0         # W/m.K
        self.rho = 7850.0             # kg/m3
        self.c_p = 480.0              # J/kg.K
        self.mu_friction_steady = 0.22 # Koefisien friksi fasa plastis
        self.Q_def = 295000.0         # Energi aktivasi deformasi (J/mol)
        self.R_gas = 8.314            # J/mol.K
        self.A_const = 1.2e12         # s^-1
        self.alpha_const = 0.014      # MPa^-1
        self.n_const = 4.8            # Eksponen tegangan
        self.B_drx = 120.0            # Konstanta ukuran butir DRX
        self.m_drx = 0.18             # Eksponen Zener DRX
        self.k_hall_petch = 18.5      # MPa.mm^0.5 (Hall-Petch slope)

    def calculate_contact_pressure_and_heat_power(self) -> Dict[str, float]:
        """Menghitung tekanan aksial kontak dan daya pembangkitan panas total."""
        A_stud = (math.pi / 4.0) * (self.D_stud ** 2)
        P_axial_mpa = (self.F_axial / A_stud) * 1e-6 # MPa
        
        # Daya kalor gesek ujung dasar stud: Q_base = (2/3) * pi * mu * P * omega * R^3
        R_stud = self.D_stud / 2.0
        Q_base_watts = (2.0 / 3.0) * math.pi * self.mu_friction_steady * (P_axial_mpa * 1e6) * self.omega * (R_stud ** 3)
        
        # Fluks panas rata-rata q_avg (W/m2)
        q_avg = Q_base_watts / A_stud
        
        return {
            "stud_cross_section_area_mm2": A_stud * 1e6,
            "axial_contact_pressure_mpa": P_axial_mpa,
            "frictional_heat_power_kw": Q_base_watts / 1000.0,
            "average_heat_flux_mw_per_m2": q_avg * 1e-6
        }

    def simulate_temperature_field_and_burnoff(self) -> Dict[str, float]:
        """Simulasi medan suhu puncak dan laju konsumsi stud (burn-off rate)."""
        heat_data = self.calculate_contact_pressure_and_heat_power()
        Q_total = heat_data["frictional_heat_power_kw"] * 1000.0
        A_stud = (math.pi / 4.0) * (self.D_stud ** 2)
        
        # Pendekatan konduksi semi-tak hingga kuasi-tunak untuk estimasi suhu antarmuka
        # T_peak = T_0 + (2 * q_avg / k) * sqrt(alpha_diff * t / pi)
        thermal_diffusivity = self.k_thermal / (self.rho * self.c_p) # m2/s
        q_avg = Q_total / A_stud
        T_0_c = 25.0
        
        # Suhu antarmuka plastis termal jenuh (saturasi pada steady state)
        T_interface_c = T_0_c + 0.65 * (q_avg * math.sqrt(thermal_diffusivity * self.t_fric / math.pi) / self.k_thermal)
        # Batasan fisik termal: suhu fasa padat maksimum sekitar 0.85 T_solidus (~ 1200 C)
        T_peak_c = min(T_interface_c, 1180.0)
        T_peak_k = T_peak_c + 273.15
        
        # Laju regangan geser ekuivalen pada lapisan viscoplisitas
        # dot_epsilon ~ (2/3) * (omega * R_stud) / h_shear_layer
        h_shear_layer = 1.8e-3 # Tebal lapisan geser viscoplisitas ~ 1.8 mm
        strain_rate = (2.0 / 3.0) * (self.omega * (self.D_stud / 2.0)) / h_shear_layer
        
        # Parameter Zener-Hollomon Z
        Z = strain_rate * math.exp(self.Q_def / (self.R_gas * T_peak_k))
        
        # Laju pemendekan konsumsi aksial stud (Burn-Off Rate v_bo dalam mm/s)
        # Berkorelasi dengan kecepatan perpindahan panas dan pelunakan viscoplisitas
        v_bo_mm_s = 0.045 * math.sqrt(heat_data["axial_contact_pressure_mpa"] * self.omega)
        total_burnoff_length_mm = v_bo_mm_s * self.t_fric
        
        return {
            "peak_interface_temp_celsius": T_peak_c,
            "equivalent_shear_strain_rate_s1": strain_rate,
            "zener_hollomon_parameter_Z": Z,
            "burn_off_rate_mm_per_s": v_bo_mm_s,
            "total_stud_consumed_length_mm": total_burnoff_length_mm
        }

    def predict_microstructure_and_joint_strength(self) -> Dict[str, float]:
        """Prediksi ukuran butir rekristalisasi DRX dan sifat mekanis akhir sambungan."""
        sim_data = self.simulate_temperature_field_and_burnoff()
        Z = sim_data["zener_hollomon_parameter_Z"]
        
        # Ukuran butir rekristalisasi dinamis d_DRX (mikron)
        # d_DRX = B * Z^(-m)
        d_drx_um = self.B_drx * (Z ** (-self.m_drx)) * 1e4 # konversi skala empiris ke um
        d_drx_um = max(1.2, min(d_drx_um, 6.5)) # Batas validasi eksperimen
        
        # Peningkatan Kekuatan Tarik Luluh via Relasi Hall-Petch
        # Delta_sigma_y = k_HP * (1/sqrt(d_drx_mm) - 1/sqrt(d_0_mm))
        d_drx_mm = d_drx_um * 1e-3
        d_0_mm = self.d_grain_0 * 1e-3
        delta_sigma_y = self.k_hall_petch * ((1.0 / math.sqrt(d_drx_mm)) - (1.0 / math.sqrt(d_0_mm)))
        
        predicted_yield_strength_mpa = self.sigma_y_parent + delta_sigma_y
        predicted_uts_mpa = self.sigma_uts_parent + (0.75 * delta_sigma_y)
        
        # Efisiensi kekuatan sambungan terhadap logam induk (Joint Efficiency)
        joint_efficiency_percent = (predicted_uts_mpa / self.sigma_uts_parent) * 100.0
        
        # Tekanan tempa akhir (Forging Pressure P_forge)
        A_stud = (math.pi / 4.0) * (self.D_stud ** 2)
        P_forge_mpa = (self.F_forge / A_stud) * 1e-6
        
        return {
            "initial_parent_grain_size_um": self.d_grain_0,
            "refined_drx_grain_size_um": round(d_drx_um, 2),
            "grain_refinement_ratio": round(self.d_grain_0 / d_drx_um, 1),
            "predicted_joint_yield_strength_mpa": round(predicted_yield_strength_mpa, 2),
            "predicted_joint_uts_mpa": round(predicted_uts_mpa, 2),
            "joint_efficiency_percent": round(joint_efficiency_percent, 2),
            "forging_pressure_mpa": round(P_forge_mpa, 2),
            "void_closure_integrity_status": "CONSOLIDATED_DEFECT_FREE" if P_forge_mpa >= 180.0 else "RISK_OF_MICRO_VOIDS"
        }

if __name__ == "__main__":
    print("=== RUANGTI FHPP & FTPW SOLID-STATE STRUCTURAL REPAIR SOLVER ===")
    
    # Inisialisasi Simulator FHPP untuk Perbaikan Baja Paduan AISI 4140
    # Diameter lubang cacat D = 20 mm, Kedalaman H = 35 mm, Stud D = 20 mm
    fhpp = FHPPThermomechanicalSimulator(
        stud_diameter_mm=20.0,
        hole_diameter_mm=20.0,
        hole_depth_mm=35.0,
        spindle_speed_rpm=3200.0,       # 3200 RPM
        axial_force_kn=45.0,            # 45 kN
        friction_time_sec=12.0,         # 12 detik
        forge_force_kn=95.0,            # 95 kN gaya tempa akhir
        material_name="AISI 4140 High-Strength Low-Alloy Steel",
        parent_yield_strength_mpa=680.0,
        parent_uts_mpa=890.0,
        initial_grain_size_um=42.0
    )
    
    # 1. Evaluasi Kontak Termal dan Fluks Panas
    p_heat = fhpp.calculate_contact_pressure_and_heat_power()
    print("\n--- 1. Parameter Pembangkitan Panas Gesekan Friksi ---")
    print(f"Luas Penampang Stud (A_stud)       : {p_heat['stud_cross_section_area_mm2']:.2f} mm2")
    print(f"Tekanan Kontak Aksial (P_axial)    : {p_heat['axial_contact_pressure_mpa']:.2f} MPa")
    print(f"Total Daya Kalor Friksi            : {p_heat['frictional_heat_power_kw']:.2f} kW")
    print(f"Fluks Panas Rata-rata              : {p_heat['average_heat_flux_mw_per_m2']:.2f} MW/m2")
    
    # 2. Simulasi Medan Termomekanis & Konsumsi Stud
    t_sim = fhpp.simulate_temperature_field_and_burnoff()
    print("\n--- 2. Dinamika Termomekanis & Laju Pemendekan Stud (Burn-Off) ---")
    print(f"Suhu Puncak Antarmuka Fasa Padat   : {t_sim['peak_interface_temp_celsius']:.1f} °C")
    print(f"Laju Regangan Geser Efektif        : {t_sim['equivalent_shear_strain_rate_s1']:.2f} s^-1")
    print(f"Parameter Zener-Hollomon (ln Z)    : {math.log(t_sim['zener_hollomon_parameter_Z']):.2f}")
    print(f"Laju Konsumsi Stud (Burn-Off Rate) : {t_sim['burn_off_rate_mm_per_s']:.2f} mm/detik")
    print(f"Total Panjang Stud Terkonsumsi     : {t_sim['total_stud_consumed_length_mm']:.2f} mm")
    
    # 3. Prediksi Metalurgi, Rekristalisasi DRX, dan Kekuatan Sambungan
    mech = fhpp.predict_microstructure_and_joint_strength()
    print("\n--- 3. Struktur Mikro DRX & Integritas Kekuatan Sambungan ---")
    print(f"Ukuran Butir Awal Logam Induk      : {mech['initial_parent_grain_size_um']:.1f} um")
    print(f"Ukuran Butir Halus DRX Pilar       : {mech['refined_drx_grain_size_um']:.2f} um (Refinement {mech['grain_refinement_ratio']}x)")
    print(f"Prediksi Kekuatan Luluh Sambungan  : {mech['predicted_joint_yield_strength_mpa']:.2f} MPa")
    print(f"Prediksi Kekuatan Tarik UTS        : {mech['predicted_joint_uts_mpa']:.2f} MPa")
    print(f"Efisiensi Kekuatan Sambungan       : {mech['joint_efficiency_percent']:.2f} %")
    print(f"Tekanan Tempa Akhir (Forging)      : {mech['forging_pressure_mpa']:.2f} MPa")
    print(f"Status Integritas Penutupan Void   : {mech['void_closure_integrity_status']}")
```

---

## 6. Studi Kasus Industri: Perbaikan Retak Lelah Bawah Air (*Underwater Subsea Pipeline Repair*) pada Pipa Baja API 5L X65

### 6.1 Latar Belakang Masalah & Kondisi Operasional

Sebuah jaringan pipa transmisi minyak bawah laut berdiameter $36\ \text{inci}$ berdinding tebal $25{,}4\ \text{mm}$ berbahan baja API 5L X65 mengalami retak lelah akibat getaran vortex (*vortex-induced vibration* - VIV) di kedalaman laut $60\ \text{meter}$. Cacat retak memiliki kedalaman penetrasi $14\ \text{mm}$.

Pengelasan fusi basah (*wet fusion welding*) menghasilkan struktur martensitik getas dengan kekerasan melampaui $420\ \text{HV}$ dan laju difusi hidrogen masif yang menyebabkan retak susulan dalam waktu kurang dari 48 jam.

### 6.2 Solusi Engineering Berbasis Friction Taper Plug Welding (FTPW)

Prosedur perbaikan dilakukan dengan mengebor lubang konis ($15^\circ$ taper angle) untuk melenyapkan retak lelah, kemudian memasukkan stud konis berbahan baja API 5L X65 termodifikasi melalui unit pengelasan gesek hidrolik subsea otomatis.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                 HASIL PENGUJIAN KUALIFIKASI PROSEDUR PERBAIKAN PIPA SUBSEA: WET WELDING VS FTPW                       |
+-----------------------------------------------------------------------------------------------------------------------+
|   Kriteria Evaluasi Sifat Mekanis    Standar API 1104 / DNV-OS-F101   Wet Fusion Repair       FTPW Solid-State Repair |
+-----------------------------------------------------------------------------------------------------------------------+
|   Kekuatan Tarik Sambungan (UTS)     >= 535 MPa                       465 MPa (Gagal / Patah) 592 MPa (Lolos 110.6%)  |
|   Uji Tekuk Sisi (Side Bend Test)    180 deg Tanpa Retak > 3 mm       Retak Getas pada 45 deg Lolos Sempurna (180 deg)|
|   Kekerasan Puncak HAZ (Vickers)     <= 325 HV10                      445 HV10 (Gagal)        248 HV10 (Lolos Sempurna)|
|   Ketangguhan Impak Charpy (-20 C)   >= 45 Joule                      18 Joule (Getas)        112 Joule (Sangat Ulet) |
|   Kandungan Hidrogen Difusibel       <= 5 ml/100g Logam Las           28.5 ml/100g (Kritis)   < 0.2 ml/100g (Aman)    |
|   Waktu Siklus Perbaikan Per Cacat   -                                6.5 Jam                 18 Menit                |
+-----------------------------------------------------------------------------------------------------------------------+
```

Dengan penerapan FTPW fase padat, kekerasan puncak HAZ tetap berada di bawah $250\ \text{HV10}$, dan ketangguhan impak Charpy pada suhu $-20^\circ\text{C}$ melonjak menjadi $112\ \text{Joule}$, menjamin integritas operasional pipa selama lebih dari 25 tahun masa pakai tambahan.

---

## 7. Analisis Metalurgi Zona Sambungan & Cacat Kritis FHPP

Struktur penampang melintang sambungan FHPP terbagi menjadi empat zona metalurgi distingtif:

```
+-----------------------------------------------------------------------------------------------------------------------+
|                  ZONASI METALURGI PENAMPANG SAMBUNGAN FRICTION HYDRO-PILLAR PROCESSING                                |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   1. ZONA INTI OLAHAN TERPLASTISASI PENUH (FULLY PLASTICIZED RECRYSTALLIZED CORE - WCZ):                              |
|      - Mengalami regangan geser plastis dan panas tertinggi (T > 1000 deg C).                                         |
|      - Terdiri atas butir equiaxed ultra-halus hasil rekristalisasi dinamis kontinu (CDRX/DDRX).                      |
|      - Memiliki sifat mekanis kombinasi kekuatan tarik dan ketangguhan impak tertinggi.                              |
|                                                                                                                       |
|   2. ZONA TERPENGARUH TERMO-MEKANIS (THERMOMECHANICALLY AFFECTED ZONE - TMAZ):                                        |
|      - Mengalami deformasi plastis parsial dan siklus termal tinggi (T ~ 750 - 950 deg C).                            |
|      - Butir-butir kristal tampak terdistorsi dan terorientasi mengikuti garis alir vorteks puntiran.                |
|                                                                                                                       |
|   3. ZONA TERPENGARUH PANAS MURNI (HEAT-AFFECTED ZONE - HAZ):                                                         |
|      - Hanya mengalami siklus termal tanpa deformasi plastis mekanis (T ~ 500 - 750 deg C).                           |
|      - Terjadi sedikit pertumbuhan butir (grain coarsening) namun tanpa perubahan fasa merugikan.                    |
|                                                                                                                       |
|   4. LOGAM INDUK TAK TERPENGARUH (UNAFFECTED PARENT METAL - PM):                                                      |
|      - Mempertahankan struktur mikro dan sifat mekanis awal pelat.                                                    |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 8. Soal Latihan & Evaluasi Komprehensif

### Soal 1: Perhitungan Tekanan Kontak, Daya Friksi, dan Laju Konsumsi Stud
Sebuah pilar stud baja paduan berkekuatan tinggi ($D_{\text{stud}} = 25\ \text{mm}$) diputar pada kecepatan spindel $N = 2400\ \text{RPM}$ dan ditekan dengan gaya aksial $F_{\text{axial}} = 60\ \text{kN}$ untuk memperbaiki lubang silinder sedalam $40\ \text{mm}$. Diketahui koefisien friksi dinamis fasa plastis adalah $\mu_f = 0{,}20$.
1. Hitung tekanan kontak aksial nominal ($P_{\text{axial}}$) dalam satuan $\text{MPa}$.
2. Tentukan total daya kalor friksi ($Q_{\text{base}}$) yang dibangkitkan pada antarmuka dasar dalam satuan kilowatt ($\text{kW}$).
3. Jika laju pemendekan stud empiris adalah $v_{\text{bo}} = 4{,}2\ \text{mm/s}$, berapa lama waktu gesekan minimum ($t_{\text{fric}}$) yang dibutuhkan untuk mengonsumsi stud sepanjang $45\ \text{mm}$?

### Soal 2: Pemodelan Zener-Hollomon dan Rekristalisasi Dinamis
Pada proses pengelasan FHPP dengan laju regangan geser $\dot{\varepsilon} = 150\ \text{s}^{-1}$ dan suhu puncak lapisan plastis $T = 1100^\circ\text{C}$ ($1373{,}15\ \text{K}$), material memiliki energi aktivasi deformasi $Q_{\text{def}} = 290\ \text{kJ/mol}$.
1. Hitung nilai parameter Zener-Hollomon ($Z$) dan $\ln Z$.
2. Jika ukuran butir rekristalisasi DRX mengikuti persamaan $d_{\text{DRX}} = 115 \cdot Z^{-0{,}16} \cdot 10^4\ (\mu\text{m})$, perkirakan ukuran butir akhir pada zona inti olahan.

---

## 9. Referensi Akademik Terverifikasi (AWS, TWI, CIRP, ISO & ASTM)

1. Thomas, W. M., Nicholas, E. D., & Jones, S. B. (1995). *Friction hydro pillar processing*. **GB Patent 2306365B**, The Welding Institute (TWI), Cambridge, UK.
2. Sajed, M., & Chamanfar, A. (2018). *Friction Hydro-Pillar Processing of a High Carbon Steel: A Coupled Experimental and Theoretical Study*. **Metallurgical and Materials Transactions B**, 49(2), 794–807. DOI: [10.1007/s11663-018-1171-5](https://doi.org/10.1007/s11663-018-1171-5).
3. Hattingh, D. G., Bulbring, D. L. H., Blignault, C., & James, M. N. (2011). *Process parameter influence on performance of friction taper stud welds in 5083-H111 aluminium alloy*. **Science and Technology of Welding and Joining**, 16(3), 296–303. DOI: [10.1179/1362171810Y.0000000010](https://doi.org/10.1179/1362171810Y.0000000010).
4. Ambroziak, A., & Gul, B. (2007). *Investigation of friction hydro pillar processing for underwater joining and repair*. **Archives of Civil and Mechanical Engineering**, 7(2), 67–76. DOI: [10.1016/S1644-9665(12)60007-8](https://doi.org/10.1016/S1644-9665(12)60007-8).
5. AWS C6.2M/C6.2:2020. *Specification for Friction Welding of Metals*. American Welding Society (AWS), Miami, FL.
6. AWS D17.3/D17.3M:2021. *Specification for Friction Stir Welding in Aerospace Applications*. American Welding Society, Miami, FL.
7. ISO 25239-1:2020. *Friction stir welding — Aluminium — Part 1: Vocabulary*. International Organization for Standardization, Geneva.
8. ASTM E8 / E8M-22. *Standard Test Methods for Tension Testing of Metallic Materials*. ASTM International, West Conshohocken, PA.
9. Groover, M. P. (2020). *Fundamentals of Modern Manufacturing: Materials, Processes, and Systems* (7th ed.). John Wiley & Sons, Hoboken, NJ.
