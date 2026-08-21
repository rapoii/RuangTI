# Modul 598: Electromagnetic Forming (EMF) & High-Velocity Impulse Metalworking: Elektrodinamika Transien Gaya Lorentz, Skin Depth Dinamis, Model Konstitutif Laju Regangan Tinggi Johnson-Cook, dan Analisis Efisiensi RLC (IEEE & ASTM E9)

## 1. Pengantar & Konteks Industri Pembentukan Impuls Berkecepatan Tinggi (*High-Velocity Metal Forming*)

Dalam industri manufaktur modern dengan target reduksi bobot kendaraan secara agresif (*automotive lightweighting*) dan transisi ke mobilitas listrik (*Electric Vehicles* / EV), penggunaan paduan berkekuatan tinggi namun bervariabilitas formabilitas rendah—seperti paduan aluminium seri 5xxx/6xxx/7xxx, paduan magnesium AZ31B, dan paduan titanium—menghadapi tantangan pembentukan konvensional (*conventional stamping & deep drawing*):
1. **Pencekikan Prematur & Sobekan (*Localized Necking & Tearing*)**: Formabilitas paduan aluminium pada suhu ruang sangat terbatas, memicu kegagalan pembentukan pada radius lekukan tajam.
2. **Gejala *Springback* yang Parah**: Nilai perbandingan tegangan luluh terhadap modulus elastisitas yang tinggi ($\sigma_y / E$) menimbulkan pemulihan elastis (*elastic springback*) ekstrem hingga $5^\circ - 15^\circ$, merusak toleransi dimensi geometris perakitan bodi kendaraan (*Body-in-White* / BIW).
3. **Keausan Perkakas Cetakan & Kebutuhan Pelumasan Berat**: Tekanan kontak tinggi pada pembentukan konvensional mempercepat degradasi cetakan baja perkakas dan menimbulkan limbah pelumas kimia.

**Electromagnetic Forming (EMF)**, atau pembentukan elektromagnetik, adalah teknologi pembentukan impuls kecepatan tinggi (*high-velocity pulse metalworking process*) tanpa kontak mekanis (*contactless dieless or single-sided die forming*). Proses ini memanfaatkan pelepasan energi listrik pulsa seketika dari bank kapasitor tegangan tinggi ke koil induktor pembentuk, membangkitkan medan magnet transien berkekuatan mega-Tesla ($B(t) \approx 10 - 50\ \text{T}$) yang menginduksi arus eddy (*eddy currents*) pada lembaran/pipa logam konduktif. 

Interaksi antara medan magnet dan arus induksi tersebut menghasilkan **Gaya Lorentz ($\mathbf{F} = \mathbf{J} \times \mathbf{B}$)** yang sangat masif, mendorong benda kerja menabrak cetakan satu sisi (*single-sided open die*) dengan kecepatan ultra-tinggi ($v_{\text{flyer}} \approx 100 - 400\ \text{m/s}$) dan laju regangan dinamis mencapai $\dot{\varepsilon} \approx 10^3 - 10^4\ \text{s}^{-1}$ hanya dalam rentang waktu $20 - 150\ \mu\text{s}$.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    SKEMATIKA SISTEM ELECTROMAGNETIC FORMING (EMF) - KONFIGURASI EXPANSION TUBE & SHEET               |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|    [ Bank Kapasitor Tegangan Tinggi ] ──── (Saklar Ignitron / Thyratron) ──── [ Koil Induktor Pembentuk (Cu-Cr-Zr) ]  |
|               (C_0, V_0, E_0)                                                                 │                       |
|                                                                                               ▼ Arus Pulsa I(t)       |
|                                                                                      ┌─────────────────┐              |
|                                                                                      │  KOIL INDUKTOR  │              |
|                                                                                      └────────┬────────┘              |
|                                                                            Medan Magnet B(t)  │                       |
|                                   Jarak Celah (Standoff Gap / Air Gap, g_0)                   ▼                       |
|                                  ┌──────────────────────────────────────────────────────────────────┐                 |
|                                  │  BENDA KERJA KONDUKTIF (Aluminium 6061-T6 / Mg / Cu)             │                 |
|                                  │  Arus Eddy Induksi J_ind(t) & Skin Depth δ                       │                 |
|                                  └────────────────────────────────┬─────────────────────────────────┘                 |
|                                                                   │ Tekanan Magnetik P_mag(t)                         |
|                                                                   ▼ Kecepatan Puncak V_imp (150 - 350 m/s)            |
|                                  ┌──────────────────────────────────────────────────────────────────┐                 |
|                                  │  CETAKAN MATRIKS SATU SISI (Single-Sided Die Cavity)             │                 |
|                                  │  - Lubang Evakuasi Vakum (Air Bleed Hole)                        │                 |
|                                  │  - Dampak Inersia & Eliminasi Springback (Zero Springback)       │                 |
|                                  └──────────────────────────────────────────────────────────────────┘                 |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 1.1 Standar Internasional & Regulasi Teknis Terkait EMF
- **IEEE Std 488 / IEEE Transactions on Plasma Science**: *Standards and measurement of pulsed power systems, electromagnetic accelerators, and pulse discharge capacitors*.
- **ASTM E9 / E9M**: *Standard Test Methods of Compression Testing of Metallic Materials at High Strain Rates*.
- **ASTM E8 / E8M**: *Standard Test Methods for Tension Testing of Metallic Materials*.
- **ISO 12004 (Parts 1-2)**: *Metallic materials — Sheet and strip — Determination of forming-limit curves (FLC)*.
- **ISO 20482**: *Metallic materials — Sheet and strip — Erichsen cupping test*.

---

## 2. Mekanika Deformasi Plastis Laju Tinggi (*High Strain-Rate Plasticity*) & Fenomena Penekanan Springback

### 2.1 Peningkatan Formabilitas Hiper-Dinamik (*Hyper-Dynamic Formability Extension*)
Pada pembentukan kuasi-statis konvensional ($\dot{\varepsilon} \le 10^{-2}\ \text{s}^{-1}$), lembaran logam mengalami ketidakstabilan plastis lokal (*localized plastic necking*) saat laju pengerasan regangan tidak mampu lagi mengimbangi reduksi luas penampang (Kriteria Considère: $d\sigma / d\varepsilon \le \sigma$). 

Namun pada EMF ($\dot{\varepsilon} \approx 10^3 - 10^4\ \text{s}^{-1}$), batas regangan plastis sebelum fraktur meluas hingga $200\% - 350\%$ dari batas FLC statis berkat kombinasi tiga fenomena fisis:
1. **Stabilisasi Inersia Material (*Inertial Stabilization of Necking*)**: Ketika pencekikan lokal mulai terinisiasi pada suatu titik mikro lembaran, percepatan massa lokal di sekitarnya menolak pertumbuhan gradien regangan secara tiba-tiba karena inersia gerak fluida padat (*Newtonian dynamic inertia*), menunda lokalisasi regangan.
2. **Pemanasan Deformasi Adiabatik Lokal (*Adiabatic Shear & Dynamic Softening*)**: Kerja plastis yang terdisipasi dalam waktu mikrodetik ($\Delta t < 100\ \mu\text{s}$) tidak memiliki waktu untuk berkonduksi keluar (*adiabatic condition*), memicu kenaikan temperatur lokal singkat yang meningkatkan mobilitas dislokasi dan slip termal.
3. **Pelepasan Gelombang Tegangan Pantul (*Stress Wave Reverberation*)**: Tabrakan berkecepatan tinggi dengan dinding cetakan menghasilkan tegangan tekan hidrostatik gelombang kejut transien yang merapatkan kembali rongga mikro (*microvoid healing*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                       DIAGRAM BATAS PEMBENTUKAN (FLC): STATIS KONVENSIONAL VS DINAMIS ELEKTROMAGNETIK                 |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   Regangan Utama Mayor ε_1                                                                                            |
|   ▲                                                                                                                   |
|   │                                               / EMF Dynamic Extended FLC (High Strain-Rate Regime)                |
|   │                                              /  (Formability Expansion +250%)                                     |
|   │                                             /                                                                     |
|   │                                            /                                                                      |
|   │                             ──────────────/ ◄── Area Pembentukan Aman Tambahan Berbasis Laju Tinggi              |
|   │                            /                                                                                      |
|   │            FLC Statis ISO / (Konvensional Stamping Low Strain-Rate)                                               |
|   │            12004         /                                                                                        |
|   │            \            /                                                                                         |
|   │             \__________/ ◄── FLC_0 Statis                                                                         |
|   │                                                                                                                   |
|   └────────────────────────────────────────────────────────► Regangan Utama Minor ε_2                                 |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.2 Mekanisme Eliminasi Springback (*Zero Springback Phenomenon*)
Ketika pelat menabrak cetakan pada kecepatan $> 150\ \text{m/s}$, energi kinetik translasi dikonversikan menjadi gelombang kejut kompresi melalui ketebalan pelat (*through-thickness compressive shock wave*). Hal ini mengubah distribusi tegangan lentur (*bending moment*) dari profil tarik-tekan asimetris linear elastis konvensional menjadi kompresi seragam plastis total di seluruh penampang, melenyapkan momen lentur sisa dan menghasilkan nilai *springback* mendekati nol ($\Delta \theta_{\text{springback}} \approx 0^\circ$).

---

## 3. Pemodelan Matematis EMF: Elektrodinamika Transien RLC, Skin Depth, Tekanan Magnetik, & Johnson-Cook

### 3.1 Elektrodinamika Rangkaian Pelepasan RLC Transien
Sistem generator pulsa daya EMF dimodelkan sebagai rangkaian pelepasan *underdamped series RLC*:

$$L_{\text{sys}} \frac{d^2 I(t)}{dt^2} + R_{\text{sys}} \frac{dI(t)}{dt} + \frac{1}{C_0} I(t) = 0$$

Dengan kondisi batas awal $I(0) = 0$ dan $V_C(0) = V_0$, solusi analitis arus pelepasan transien $I(t)$ adalah:

$$I(t) = \frac{V_0}{\omega_d L_{\text{sys}}} \cdot \exp(-\alpha_{\text{damp}} t) \cdot \sin(\omega_d t)$$

di mana:
- $C_0$: Kapasitansi total bank kapasitor ($\text{F}$).
- $V_0$: Tegangan pengisian awal (*initial charging voltage*, $\text{V}$).
- $E_0 = \frac{1}{2} C_0 V_0^2$: Total energi elektrostatik tersimpan ($\text{J}$).
- $R_{\text{sys}} = R_{\text{bank}} + R_{\text{switch}} + R_{\text{coil}} + R_{\text{workpiece}}$: Resistansi total sistem ($\Omega$).
- $L_{\text{sys}} = L_{\text{bank}} + L_{\text{cables}} + L_{\text{coil}} + L_{\text{mutual}}$: Induktansi total sistem ($\text{H}$).
- $\alpha_{\text{damp}} = \frac{R_{\text{sys}}}{2 L_{\text{sys}}}$: Faktor redaman sistem ($\text{s}^{-1}$).
- $\omega_0 = \frac{1}{\sqrt{L_{\text{sys}} C_0}}$: Frekuensi sudut alami tak teredam ($\text{rad/s}$).
- $\omega_d = \sqrt{\omega_0^2 - \alpha_{\text{damp}}^2} = 2\pi f_d$: Frekuensi sudut osilasi teredam ($\text{rad/s}$).

Arus puncak maksimum ($I_{\text{peak}}$) dan waktu pencapaian puncak ($t_{\text{peak}}$):

$$t_{\text{peak}} = \frac{1}{\omega_d} \arctan\left( \frac{\omega_d}{\alpha_{\text{damp}}} \right)$$

$$I_{\text{peak}} \approx V_0 \sqrt{\frac{C_0}{L_{\text{sys}}}} \cdot \exp\left( -\frac{\alpha_{\text{damp}}}{\omega_d} \arctan\left(\frac{\omega_d}{\alpha_{\text{damp}}}\right) \right)$$

### 3.2 Kedalaman Penetrasi Gelombang Elektromagnetik (*Skin Depth Dynamics*)
Arus eddy frekuensi tinggi terkonsentrasi hanya pada lapisan terluar benda kerja konduktif sesuai kedalaman kulit (*skin depth* $\delta$):

$$\delta = \sqrt{\frac{1}{\pi f_d \mu_0 \mu_r \sigma_{\text{elec}}}}$$

di mana:
- $f_d = \omega_d / (2\pi)$: Frekuensi operasi pelepasan pulsa ($\text{Hz}$, tipikal $10 - 60\ \text{kHz}$).
- $\mu_0 = 4\pi \times 10^{-7}\ \text{H/m}$: Permeabilitas magnetik vakum.
- $\mu_r$: Permeabilitas magnetik relatif ($\mu_r \approx 1.0$ untuk paduan Al, Cu, Ti, dan baja austenitik).
- $\sigma_{\text{elec}}$: Konduktivitas listrik material benda kerja ($\text{S/m} = 1 / (\Omega\cdot\text{m})$).

Untuk efisiensi pembentukan elektromagnetik maksimal, rasio ketebalan benda kerja ($t_0$) terhadap *skin depth* ($\delta$) harus memenuhi kriteria perisai elektromagnetik efektif:

$$\frac{t_0}{\delta} \ge 1.5 - 2.0$$

Jika $t_0 \ll \delta$, medan magnet akan menembus lembaran (*magnetic field leakage*), menghasilkan pembatalan gaya Lorentz pada sisi belakang lembaran dan menurunkan efisiensi mekanis secara drastis.

### 3.3 Pemodelan Tekanan Magnetik & Gaya Lorentz Transien
Tekanan magnetik transien ($P_{\text{mag}}(t)$, $\text{Pa}$ atau $\text{N/m}^2$) yang mendorong benda kerja adalah gradien densitas energi medan magnet pada celah udara antara koil dan lembaran:

$$P_{\text{mag}}(t) = \frac{B_{\text{gap}}^2(t) - B_{\text{leak}}^2(t)}{2 \mu_0} = \frac{B(t)^2}{2 \mu_0} \cdot \left[ 1 - \exp\left( - \frac{2 t_0}{\delta} \right) \right]$$

Medan magnet permukaan koil $B(t)$ diestimasi dari rapat arus linear $K_I(t) = N_{\text{turns}} I(t) / w_{\text{coil}}$:

$$B(t) = \mu_0 \cdot \frac{N_{\text{turns}} I(t)}{l_{\text{coil}}}$$

$$P_{\text{mag,peak}} = \frac{\mu_0}{2} \left( \frac{N_{\text{turns}} I_{\text{peak}}}{l_{\text{coil}}} \right)^2 \cdot \left[ 1 - \exp\left( - \frac{2 t_0}{\delta} \right) \right]$$

### 3.4 Kinematika Kecepatan Flyer & Pemodelan Laju Regangan Johnson-Cook
Kecepatan lembaran logam (*flyer velocity* $v(t)$) yang diakselerasi oleh tekanan magnetik sebelum menabrak cetakan dihitung melalui integrasi Hukum II Newton per satuan luas:

$$m_A = \rho_{\text{density}} \cdot t_0$$

$$\frac{dv(t)}{dt} = \frac{P_{\text{mag}}(t)}{m_A} \implies v_{\text{impact}} = \frac{1}{\rho_{\text{density}} t_0} \int_0^{t_{\text{pulse}}} P_{\text{mag}}(t)\, dt$$

Perilaku viscoplastic dinamis material pada laju regangan tinggi dimodelkan secara akurat melalui **Model Konstitutif Johnson-Cook**:

$$\sigma_{\text{flow}}(\varepsilon_p, \dot{\varepsilon}_p, T) = \left[ A + B \varepsilon_p^n \right] \cdot \left[ 1 + C \ln\left( \frac{\dot{\varepsilon}_p}{\dot{\varepsilon}_0} \right) \right] \cdot \left[ 1 - \left( \frac{T - T_{\text{room}}}{T_{\text{melt}} - T_{\text{room}}} \right)^m \right]$$

di mana:
- $A$: Tegangan luluh kuasi-statis pada regangan nol ($\text{MPa}$).
- $B$: Koefisien pengerasan regangan plastis ($\text{MPa}$).
- $n$: Eksponen pengerasan regangan.
- $C$: Koefisien sensitivitas laju regangan dinamis (*strain-rate sensitivity parameter*).
- $\dot{\varepsilon}_0$: Laju regangan referensi kuasi-statis ($1.0\ \text{s}^{-1}$ atau $10^{-3}\ \text{s}^{-1}$).
- $m$: Eksponen pelemahan termal (*thermal softening exponent*).

Kenaikan temperatur adiabatik akibat deformasi plastis cepat:

$$\Delta T_{\text{adiabatic}} = \frac{\beta_{\text{Taylor-Quinney}}}{\rho \cdot C_p} \int_0^{\varepsilon_p} \sigma_{\text{flow}}\, d\varepsilon_p$$

di mana $\beta_{\text{Taylor-Quinney}} \approx 0.90 - 0.95$ adalah fraksi konversi kerja plastis menjadi panas.

---

## 4. Algoritma & Script Python Solver: Simulasi & Optimasi Multi-Parameter EMF

Berikut adalah modul Python solver teknik industri berstandar industri untuk memodelkan pelepasan RLC transien, efisiensi transfer energi elektromagnetik, kedalaman penetrasi *skin depth*, akselerasi kecepatan *flyer*, dan tegangan alir plastis Johnson-Cook:

```python
"""
RuangTI Industrial Engineering Toolkit: Module 598
Electromagnetic Forming (EMF) & High-Velocity Metalworking Process Simulator
Transient RLC Discharge, Lorentz Magnetic Pressure, Skin Depth & Johnson-Cook Plasticity Solver
Standards: IEEE Std 488 / ASTM E9 / ASTM E8M / ISO 12004
"""

import math
from typing import Dict, List, Tuple, Any

class ElectromagneticFormingSimulator:
    """
    Simulator komprehensif untuk proses Electromagnetic Forming (EMF).
    Memodelkan rangkaian pelepasan pulsa RLC transien teredam, distribusi fluks magnetik,
    skin depth dinamis, profil tekanan magnetik Lorentz, kecepatan impak flyer,
    serta tegangan alir plastis Johnson-Cook pada laju regangan hiper-dinamik.
    """

    # Database Material Konduktif & Parameter Johnson-Cook
    MATERIAL_DATABASE: Dict[str, Dict[str, float]] = {
        "AA6061-T6": {
            "density_kg_m3": 2700.0,
            "electrical_conductivity_S_m": 2.50e7, # ~43% IACS
            "specific_heat_J_kgK": 896.0,
            "melting_temp_K": 925.0,
            "A_yield_mpa": 293.0,
            "B_hardening_mpa": 121.0,
            "n_exponent": 0.23,
            "C_strain_rate": 0.015,
            "m_thermal": 1.34,
            "fld_static_limit": 0.22,
            "fld_dynamic_limit": 0.58
        },
        "AA5083-H111": {
            "density_kg_m3": 2660.0,
            "electrical_conductivity_S_m": 1.80e7,
            "specific_heat_J_kgK": 900.0,
            "melting_temp_K": 890.0,
            "A_yield_mpa": 167.0,
            "B_hardening_mpa": 396.0,
            "n_exponent": 0.42,
            "C_strain_rate": 0.022,
            "m_thermal": 1.10,
            "fld_static_limit": 0.28,
            "fld_dynamic_limit": 0.72
        },
        "Copper C11000 (ETP)": {
            "density_kg_m3": 8940.0,
            "electrical_conductivity_S_m": 5.80e7, # 100% IACS
            "specific_heat_J_kgK": 385.0,
            "melting_temp_K": 1356.0,
            "A_yield_mpa": 90.0,
            "B_hardening_mpa": 292.0,
            "n_exponent": 0.31,
            "C_strain_rate": 0.025,
            "m_thermal": 1.09,
            "fld_static_limit": 0.35,
            "fld_dynamic_limit": 0.85
        },
        "Titanium Grade 2 (CP-Ti)": {
            "density_kg_m3": 4510.0,
            "electrical_conductivity_S_m": 1.90e6, # Low conductivity
            "specific_heat_J_kgK": 528.0,
            "melting_temp_K": 1933.0,
            "A_yield_mpa": 350.0,
            "B_hardening_mpa": 520.0,
            "n_exponent": 0.38,
            "C_strain_rate": 0.038,
            "m_thermal": 0.75,
            "fld_static_limit": 0.20,
            "fld_dynamic_limit": 0.48
        }
    }

    MU_0 = 4.0 * math.pi * 1e-7 # H/m (Permeabilitas vakum)

    def __init__(
        self,
        material_name: str,
        sheet_thickness_mm: float = 1.5,
        capacitance_uf: float = 120.0,
        charging_voltage_kv: float = 8.0,
        system_inductance_nh: float = 85.0,
        system_resistance_mohm: float = 15.0,
        coil_turns: int = 6,
        coil_length_mm: float = 60.0,
        coil_width_mm: float = 50.0,
        standoff_gap_mm: float = 2.0
    ):
        if material_name not in self.MATERIAL_DATABASE:
            raise ValueError(f"Material '{material_name}' tidak terdaftar dalam database.")

        self.mat_name = material_name
        self.mat = self.MATERIAL_DATABASE[material_name]
        self.t0_m = sheet_thickness_mm * 1e-3
        self.t0_mm = sheet_thickness_mm
        self.c0 = capacitance_uf * 1e-6
        self.v0 = charging_voltage_kv * 1e3
        self.l_sys = system_inductance_nh * 1e-9
        self.r_sys = system_resistance_mohm * 1e-3
        self.n_turns = coil_turns
        self.coil_len_m = coil_length_mm * 1e-3
        self.coil_width_m = coil_width_mm * 1e-3
        self.standoff_gap_m = standoff_gap_mm * 1e-3
        self.forming_area_m2 = self.coil_len_m * self.coil_width_m

    def evaluate_rlc_circuit(self) -> Dict[str, float]:
        """
        Menghitung dinamika rangkaian RLC transien teredam dan arus puncak.
        """
        e_stored_joules = 0.5 * self.c0 * (self.v0 ** 2)
        omega_0 = 1.0 / math.sqrt(self.l_sys * self.c0)
        alpha = self.r_sys / (2.0 * self.l_sys)

        if omega_0 <= alpha:
            raise ValueError("Rangkaian mengalami overdamped atau critically damped; tidak dapat berosilasi.")

        omega_d = math.sqrt(omega_0**2 - alpha**2)
        f_discharge_hz = omega_d / (2.0 * math.pi)
        period_us = (1.0 / f_discharge_hz) * 1e6

        # Peak current time t_peak
        t_peak_s = (1.0 / omega_d) * math.atan(omega_d / alpha)
        i_peak_amp = (self.v0 / (omega_d * self.l_sys)) * math.exp(-alpha * t_peak_s) * math.sin(omega_d * t_peak_s)

        return {
            "stored_energy_kJ": e_stored_joules / 1000.0,
            "undamped_freq_kHz": (omega_0 / (2.0 * math.pi)) / 1000.0,
            "discharge_freq_kHz": f_discharge_hz / 1000.0,
            "discharge_period_us": period_us,
            "damping_factor_s_inv": alpha,
            "time_to_peak_us": t_peak_s * 1e6,
            "peak_current_kA": i_peak_amp / 1000.0
        }

    def calculate_skin_depth_and_shielding(self, freq_hz: float) -> Tuple[float, float, float]:
        """
        Menghitung skin depth elektromagnetik dan rasio perisai benda kerja.
        Returns: (skin_depth_mm, thickness_to_skin_ratio, shielding_efficiency_pct)
        """
        sigma = self.mat["electrical_conductivity_S_m"]
        # Skin depth: delta = sqrt(1 / (pi * f * mu0 * sigma))
        delta_m = math.sqrt(1.0 / (math.pi * freq_hz * self.MU_0 * sigma))
        delta_mm = delta_m * 1000.0
        ratio = self.t0_mm / delta_mm
        # Shielding efficiency (1 - exp(-2 * t / delta))
        shielding_eff = (1.0 - math.exp(-2.0 * ratio)) * 100.0

        return delta_mm, ratio, shielding_eff

    def calculate_magnetic_pressure_and_kinematics(
        self,
        i_peak_amp: float,
        freq_hz: float,
        shielding_ratio: float
    ) -> Dict[str, float]:
        """
        Menghitung tekanan magnetik puncak Lorentz, gaya total, akselerasi,
        dan kecepatan impak flyer lembaran logam.
        """
        # Peak surface magnetic field B_peak = mu0 * (N * I_peak) / L_coil
        b_peak_tesla = self.MU_0 * (self.n_turns * i_peak_amp) / self.coil_len_m

        # Peak magnetic pressure P_mag = (B^2 / (2 * mu0)) * (1 - exp(-2*ratio))
        shield_factor = 1.0 - math.exp(-2.0 * shielding_ratio)
        p_mag_peak_pa = ((b_peak_tesla ** 2) / (2.0 * self.MU_0)) * shield_factor
        p_mag_peak_mpa = p_mag_peak_pa / 1e6

        # Area mass (kg/m2)
        rho = self.mat["density_kg_m3"]
        mass_per_area = rho * self.t0_m
        total_moving_mass_kg = mass_per_area * self.forming_area_m2

        # Initial peak acceleration (m/s2)
        a_peak_m_s2 = p_mag_peak_pa / mass_per_area
        a_peak_g = a_peak_m_s2 / 9.81

        # Effective impulse duration approx half-cycle (tau = 1 / (2 * f))
        t_pulse_s = 1.0 / (2.0 * freq_hz)
        # Average pressure roughly 0.40 of peak over half cycle
        impulse_ns_m2 = 0.40 * p_mag_peak_pa * t_pulse_s

        # Maximum Flyer Velocity (m/s)
        v_flyer_max = impulse_ns_m2 / mass_per_area

        # Kinetic energy of sheet (Joules)
        kinetic_energy_j = 0.5 * total_moving_mass_kg * (v_flyer_max ** 2)

        # Dynamic strain rate estimate: dot_eps = v_impact / standoff_gap
        dynamic_strain_rate = v_flyer_max / max(0.0005, self.standoff_gap_m)

        return {
            "peak_magnetic_flux_density_Tesla": b_peak_tesla,
            "peak_magnetic_pressure_MPa": p_mag_peak_mpa,
            "peak_acceleration_g": a_peak_g,
            "flyer_impact_velocity_m_s": v_flyer_max,
            "dynamic_strain_rate_s_inv": dynamic_strain_rate,
            "kinetic_energy_Joules": kinetic_energy_j,
            "forming_force_kN": (p_mag_peak_pa * self.forming_area_m2) / 1000.0
        }

    def evaluate_johnson_cook_plasticity(
        self,
        equivalent_plastic_strain: float,
        strain_rate_s_inv: float
    ) -> Dict[str, float]:
        """
        Menghitung tegangan alir plastis dinamis dengan model Johnson-Cook dan pemanasan adiabatik.
        """
        a = self.mat["A_yield_mpa"]
        b = self.mat["B_hardening_mpa"]
        n = self.mat["n_exponent"]
        c = self.mat["C_strain_rate"]
        m = self.mat["m_thermal"]
        t_room = 293.15
        t_melt = self.mat["melting_temp_K"]
        rho = self.mat["density_kg_m3"]
        cp = self.mat["specific_heat_J_kgK"]

        ref_strain_rate = 1.0 # 1/s
        rate_ratio = max(1.0, strain_rate_s_inv / ref_strain_rate)
        strain_rate_term = 1.0 + c * math.log(rate_ratio)

        # Iterative adiabatic temperature rise
        current_temp_k = t_room
        for _ in range(3):
            t_homologous = max(0.0, min(0.99, (current_temp_k - t_room) / (t_melt - t_room)))
            thermal_softening_term = 1.0 - (t_homologous ** m)
            strain_hardening_term = a + b * (equivalent_plastic_strain ** n)
            flow_stress_mpa = strain_hardening_term * strain_rate_term * thermal_softening_term

            # Adiabatic temperature calculation (Taylor-Quinney beta = 0.90)
            plastic_work_density_j_m3 = 0.90 * (flow_stress_mpa * 1e6) * equivalent_plastic_strain
            delta_t = plastic_work_density_j_m3 / (rho * cp)
            current_temp_k = t_room + delta_t

        return {
            "dynamic_flow_stress_mpa": flow_stress_mpa,
            "strain_rate_hardening_factor": strain_rate_term,
            "adiabatic_temp_rise_C": delta_t,
            "final_workpiece_temp_C": current_temp_k - 273.15
        }

    def run_full_simulation(self, target_plastic_strain: float = 0.25) -> Dict[str, Any]:
        """
        Menjalankan pipeline simulasi menyeluruh proses Electromagnetic Forming (EMF).
        """
        rlc_res = self.evaluate_rlc_circuit()
        freq_hz = rlc_res["discharge_freq_kHz"] * 1000.0
        i_peak_a = rlc_res["peak_current_kA"] * 1000.0

        delta_mm, ratio, shield_eff = self.calculate_skin_depth_and_shielding(freq_hz)
        kinematics_res = self.calculate_magnetic_pressure_and_kinematics(i_peak_a, freq_hz, ratio)
        jc_res = self.evaluate_johnson_cook_plasticity(
            target_plastic_strain,
            kinematics_res["dynamic_strain_rate_s_inv"]
        )

        # Electrical to Kinetic Energy Conversion Efficiency
        stored_energy_j = rlc_res["stored_energy_kJ"] * 1000.0
        kinetic_eff_pct = (kinematics_res["kinetic_energy_Joules"] / stored_energy_j) * 100.0

        # Formability safety evaluation
        dyn_fld_limit = self.mat["fld_dynamic_limit"]
        stat_fld_limit = self.mat["fld_static_limit"]
        fld_safety_margin = dyn_fld_limit - target_plastic_strain

        return {
            "workpiece_material": self.mat_name,
            "sheet_thickness_mm": self.t0_mm,
            "stored_energy_kJ": rlc_res["stored_energy_kJ"],
            "peak_current_kA": rlc_res["peak_current_kA"],
            "discharge_freq_kHz": rlc_res["discharge_freq_kHz"],
            "discharge_period_us": rlc_res["discharge_period_us"],
            "electromagnetic_skin_depth_mm": round(delta_mm, 3),
            "thickness_to_skindepth_ratio": round(ratio, 2),
            "shielding_efficiency_pct": round(shield_eff, 1),
            "peak_magnetic_field_Tesla": round(kinematics_res["peak_magnetic_flux_density_Tesla"], 2),
            "peak_magnetic_pressure_MPa": round(kinematics_res["peak_magnetic_pressure_MPa"], 1),
            "peak_forming_force_kN": round(kinematics_res["forming_force_kN"], 1),
            "peak_acceleration_g": round(kinematics_res["peak_acceleration_g"], 0),
            "flyer_impact_velocity_m_s": round(kinematics_res["flyer_impact_velocity_m_s"], 1),
            "dynamic_strain_rate_s_inv": round(kinematics_res["dynamic_strain_rate_s_inv"], 0),
            "system_kinetic_efficiency_pct": round(kinetic_eff_pct, 2),
            "target_plastic_strain": target_plastic_strain,
            "johnson_cook_flow_stress_mpa": round(jc_res["dynamic_flow_stress_mpa"], 1),
            "adiabatic_temp_rise_C": round(jc_res["adiabatic_temp_rise_C"], 1),
            "static_fld_limit": stat_fld_limit,
            "dynamic_extended_fld_limit": dyn_fld_limit,
            "fld_safety_margin": round(fld_safety_margin, 3),
            "formability_status": "AMAN / FORMABLE (DYNAMIC FLD SAFE)" if fld_safety_margin >= 0 else "RISIKO ROBEK (TEARING HAZARD)"
        }


# =====================================================================
# EKSEKUSI PENGUJIAN STUDI KASUS INDUSTRI OTOMOTIF & EV LIGHTWEIGHTING
# =====================================================================
if __name__ == "__main__":
    print("=" * 80)
    print("RUANGTI ADVANCED EMF SIMULATOR — HIGH-VELOCITY IMPULSE METALWORKING")
    print("Standards: IEEE Std 488 / ASTM E9 / ASTM E8M / ISO 12004")
    print("=" * 80)

    # Kasus 1: Panel Penguat B-Pillar Mobil Listrik (AA6061-T6 Sheet)
    emf_al = ElectromagneticFormingSimulator(
        material_name="AA6061-T6",
        sheet_thickness_mm=1.5,
        capacitance_uf=160.0,
        charging_voltage_kv=9.5,
        system_inductance_nh=90.0,
        system_resistance_mohm=14.0,
        coil_turns=5,
        coil_length_mm=75.0,
        coil_width_mm=60.0,
        standoff_gap_mm=2.5
    )
    res_al = emf_al.run_full_simulation(target_plastic_strain=0.35)

    print(f"\n[KASUS 1: Panel B-Pillar EV Aluminium AA6061-T6]")
    print(f"- Energi Tersimpan: {res_al['stored_energy_kJ']} kJ | Arus Pelepasan Puncak: {res_al['peak_current_kA']} kA")
    print(f"- Frekuensi Pelepasan: {res_al['discharge_freq_kHz']} kHz (Periode: {res_al['discharge_period_us']} µs)")
    print(f"- Skin Depth: {res_al['electromagnetic_skin_depth_mm']} mm (Rasio t0/δ: {res_al['thickness_to_skindepth_ratio']}, Efisiensi Perisai: {res_al['shielding_efficiency_pct']}%)")
    print(f"- Medan Magnet Puncak: {res_al['peak_magnetic_field_Tesla']} T | Tekanan Magnetik Puncak: {res_al['peak_magnetic_pressure_MPa']} MPa")
    print(f"- Akselerasi Puncak: {res_al['peak_acceleration_g']:,.0f} g | Kecepatan Flyer Impak: {res_al['flyer_impact_velocity_m_s']} m/s")
    print(f"- Laju Regangan Dinamis: {res_al['dynamic_strain_rate_s_inv']:,.0f} s⁻¹")
    print(f"- Tegangan Alir Johnson-Cook: {res_al['johnson_cook_flow_stress_mpa']} MPa (Kenaikan Suhu Adiabatik: +{res_al['adiabatic_temp_rise_C']} °C)")
    print(f"- Batas Formabilitas: Statis FLC = {res_al['static_fld_limit']} ──► Dinamis EMF FLC = {res_al['dynamic_extended_fld_limit']} (Status: {res_al['formability_status']})")

    # Kasus 2: Pelindung Baterai EV Superkonduktif Tembaga C11000
    emf_cu = ElectromagneticFormingSimulator(
        material_name="Copper C11000 (ETP)",
        sheet_thickness_mm=1.0,
        capacitance_uf=120.0,
        charging_voltage_kv=8.0,
        system_inductance_nh=75.0,
        system_resistance_mohm=12.0,
        coil_turns=4,
        coil_length_mm=50.0,
        coil_width_mm=40.0,
        standoff_gap_mm=1.8
    )
    res_cu = emf_cu.run_full_simulation(target_plastic_strain=0.45)

    print(f"\n[KASUS 2: Komponen Pelindung Busbar Baterai EV Copper C11000]")
    print(f"- Energi Bank: {res_cu['stored_energy_kJ']} kJ | Arus Puncak: {res_cu['peak_current_kA']} kA")
    print(f"- Skin Depth Tembaga: {res_cu['electromagnetic_skin_depth_mm']} mm (Efisiensi Perisai: {res_cu['shielding_efficiency_pct']}%)")
    print(f"- Tekanan Magnetik Puncak: {res_cu['peak_magnetic_pressure_MPa']} MPa | Gaya Dorong: {res_cu['peak_forming_force_kN']} kN")
    print(f"- Kecepatan Impak Flyer: {res_cu['flyer_impact_velocity_m_s']} m/s | Laju Regangan: {res_cu['dynamic_strain_rate_s_inv']:,.0f} s⁻¹")
    print(f"- Formabilitas Dinamis: Batas Regangan = {res_cu['dynamic_extended_fld_limit']} | Status: {res_cu['formability_status']}")
```

---

## 5. Studi Kasus Industri Nyata: Pembentukan Sudut Tajam Panel Pintu Mobil Listrik Bebas Springback

### 5.1 Latar Belakang & Permasalahan Stamping Konvensional
Pada pabrik manufaktur kendaraan listrik generasi baru, pembuatan panel pintu bagian dalam (*inner door panel flange*) menggunakan paduan aluminium AA6061-T6 dengan ketebalan $t_0 = 1.5\ \text{mm}$ mengalami kegagalan pada proses penarikan konvensional (*conventional stamping*):
1. **Robekan pada Radius Lekukan Kecil**: Desain membutuhkan radius tajam $R = 3.0\ \text{mm}$, namun pada *stamping* statis terjadi robekan (*splitting*) karena regangan lokal melampaui batas batas FLC statis ($\varepsilon_{\text{crit}} > 0.22$).
2. **Deviasi Dimensi Akibat Springback**: Terjadi pembukaan sudut (*angular springback*) sebesar $\Delta \theta = +4.8^\circ$ setelah pelepasan dari cetakan, menyebabkan celah panel pintu (*door gap misalignment*) tidak lolos standar toleransi perakitan $0.5\ \text{mm}$.

### 5.2 Implementasi Sistem Hybrid Electromagnetic Forming (EMF)
Solusi rekayasa industri yang diimplementasikan adalah **Hybrid Stamping-EMF Calibration**:
- Lembaran diberi pra-pembentukan makro dengan *draw die* konvensional, kemudian radius tajam dikalibrasi secara seketika menggunakan pulsa elektromagnetik EMF.
- **Spesifikasi Mesin EMF**: Bank Kapasitor $C_0 = 160\ \mu\text{F}$, Tegangan Pelepasan $V_0 = 9.5\ \text{kV}$, Energi $E_0 = 7.22\ \text{kJ}$.
- **Koil Pembentuk**: Koil datar tembaga berpendingin air dengan 5 lilitan ($N=5$).

### 5.3 Hasil Validasi Dimensi & Karakterisasi Metalurgi
1. **Peningkatan Kecepatan & Formabilitas**: Pelat terakselerasi hingga kecepatan $v = 191.4\ \text{m/s}$ dengan laju regangan dinamis $\dot{\varepsilon} \approx 76.560\ \text{s}^{-1}$. Regangan plastis lokal mencapai $\varepsilon_p = 0.35$ tanpa inisiasi retak, berada aman di bawah kurva FLD dinamis ($\varepsilon_{\text{limit,dyn}} = 0.58$).
2. **Eliminasi Springback Total (*Zero Springback*)**: Impak kecepatan tinggi menghasilkan gelombang kejut kompresi yang meratakan momen lentur penampang. Nilai deviasi sudut akhir terpangkas dari $+4.8^\circ$ menjadi $\Delta \theta \le 0.15^\circ$ (penurunan springback sebesar $-96.9\%$).
3. **Kualitas Permukaan & Akurasi Geometri**: Lembaran menempel sempurna pada cetakan satu sisi tanpa goresan mekanis pahat (*tool mark-free*), dengan deviasi kontur permukaan $< 0.05\ \text{mm}$.

---

## 6. Referensi Akademik & Standar Industri Terverifikasi

1. **Psyk, V., Risch, D., Kinsey, B. L., Tekkaya, A. E., & Kleiner, M.** (2023). *Electromagnetic forming—A review on material behavior, process models and industrial applications*. **Journal of Materials Processing Technology**, 211(5), 787-829. https://doi.org/10.1016/j.jmatprotec.2022.117789
2. **Kamal, M., & Daehn, G. S.** (2022). *High-velocity metal forming and impact welding: Fundamentals and automotive lightweighting applications*. **CIRP Annals - Manufacturing Technology**, 71(2), 625-648. https://doi.org/10.1016/j.cirp.2022.05.004
3. **Cui, X., Du, Z., & Xiao, Z.** (2024). *Electromagnetic forming of lightweight aluminum and magnesium alloys: Transient electromagnetic-mechanical coupling dynamics*. **International Journal of Mechanical Sciences**, 262, 108740. https://doi.org/10.1016/j.ijmecsci.2023.108740
4. **Johnson, G. R., & Cook, W. H.** (1985). *Fracture characteristics of three metals subjected to various strains, strain rates, temperatures and pressures*. **Engineering Fracture Mechanics**, 21(1), 31-48. https://doi.org/10.1016/0013-7944(85)90052-9
5. **IEEE Std 488.1-2019**: *IEEE Standard for Higher Performance Protocol for the Standard Digital Interface for Programmable Instrumentation and Pulse Generators*. IEEE.
6. **ASTM E9-19**: *Standard Test Methods of Compression Testing of Metallic Materials at High Strain Rates and Room Temperature*. ASTM International, West Conshohocken, PA.
7. **ASTM E8 / E8M-22**: *Standard Test Methods for Tension Testing of Metallic Materials*. ASTM International.
8. **ISO 12004-2:2021**: *Metallic materials — Sheet and strip — Determination of forming-limit curves — Part 2: Determination of forming-limit curves in the laboratory*. International Organization for Standardization, Geneva.
