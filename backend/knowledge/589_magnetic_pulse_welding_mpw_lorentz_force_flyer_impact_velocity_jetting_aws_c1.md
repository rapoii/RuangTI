# Modul 589: Magnetic Pulse Welding (MPW) & Solid-State Impact Bonding: Elektrodinamika Gaya Lorentz, Kecepatan Tabrakan Flyer, Hydrodynamic Jetting, dan Morfologi Gelombang Antarmuka Disimilar Logam (AWS C1.1 & ISO 18595)

## 1. Pengantar & Prinsip Fundamental Magnetic Pulse Welding (MPW)

*Magnetic Pulse Welding* (MPW), atau pengelasan pulsa magnetik, adalah teknologi penyambungan kondisi padat (*solid-state impact welding process*) berkecepatan ultra-tinggi (*ultra-high velocity impact bonding*) yang memanfaatkan energi elektromagnetik transien untuk mengakselerasi salah satu benda kerja (*flyer*) menabrak benda kerja stasioner (*parent / target metal*). Proses ini berlangsung dalam hitungan mikrodetik ($\tau \approx 10 - 100\ \mu\text{s}$) tanpa mencairkan logam induk (*non-fusion solid-state joining*).

Dalam spektrum teknik industri manufaktur modern, MPW menempati posisi yang sangat strategis untuk manufaktur otomotif ringan (*lightweight automotive structures*), sistem baterai kendaraan listrik (EV *battery busbars & pouch cell tab joining* Al-Cu), penukar kalor pendingin (*HVAC tubular joints*), dan bejana kedap udara kedirgantaraan (*aerospace hermetic sealing*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                       SKEMATIKA SISTEM MAGNETIC PULSE WELDING (MPW) - KONFIGURASI TUBULAR & PLANAR                    |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|    [ Bank Kapasitor Arus Tinggi ] ────── (Saklar Ignitron / Spark-Gap) ────── [ Koil Elektromagnetik / Induktor ]    |
|               (C, V_0)                                                                        │                       |
|                                                                                               ▼ Arus Pulsa I_c(t)     |
|                                                                                       ┌───────────────┐               |
|                                                                                       │   KOIL MPW    │               |
|                                                                                       └───────┬───────┘               |
|                                                                             Fluks Magnet B(t) │                       |
|                                     Gap Akselerasi (Standoff Distance, g_0)                   ▼                       |
|                                    ┌──────────────────────────────────────────────────────────────────┐               |
|                                    │  FLYER SHEET / TUBE (Logam Konduktif: Al / Cu)                   │               |
|                                    └────────────────────────────────┬─────────────────────────────────┘               |
|                                                                     │ Tekanan Magnetik P_mag(t)                       |
|                                                                     ▼ Kecepatan Impak V_imp (200 - 600 m/s)           |
|                                                            ┌─────────────────┐                                        |
|                                                            │ Jetting Logam   │ ◄── Pancaran Oksida & Kontaminan       |
|                                                            │ (Metal Jetting) │     (Self-Cleaning Phenomenon)         |
|                                                            └────────┬────────┘                                        |
|                                    ┌────────────────────────────────┴─────────────────────────────────┐               |
|                                    │  TARGET / PARENT METAL (Benda Stasioner: Baja, Ti, Al, Cu)       │               |
|                                    └──────────────────────────────────────────────────────────────────┘               |
|                                              Ikatan Metalurgi Gelombang Padat (Interlocking Wavy Bond)                |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 1.1 Keunggulan Metalurgi & Keteknikan Industri MPW
Pada penyambungan konvensional berbasis peleburan (*fusion welding* seperti TIG, Laser, atau Resistance Spot Welding) antara logam tak sejenis (*dissimilar materials*, misal Aluminium ke Tembaga, Aluminium ke Baja, atau Magnesium ke Titanium), perbedaan titik leleh, koefisien ekspansi termal, serta kelarutan fasa timbal balik yang rendah memicu pembentukan senyawa intermetalik getas (*brittle Intermetallic Compounds* / IMC seperti $\text{Al}_2\text{Cu}$, $\text{Al}_4\text{Cu}_9$, $\text{Fe}_2\text{Al}_5$) dan zona terpengaruh panas (*Heat-Affected Zone* / HAZ) yang sangat rapuh.

MPW mengeliminasi permasalahan termal tersebut secara tuntas melalui karakteristik:
1. **Penyambungan Dingin / Solid-State**: Suhu puncak lokal antarmuka hanya mencapai deformasi adiabatik plastis tanpa peleburan makro volumetrik, menjaga ketebalan lapisan difusi intermetalik di bawah batas kritis ($t_{\text{IMC}} < 1\ \mu\text{m}$).
2. **Efek Jetting Mandiri (*Self-Cleaning Metallic Jet*)**: Tabrakan miring berkecepatan tinggi menimbulkan fenomena hidrodinamika yang mengelupas lapisan oksida permukaan ($\text{Al}_2\text{O}_3$, $\text{CuO}$) dan menghembuskannya keluar dalam bentuk semburan mikropartikel (*jetting*), mengekspos atom logam murni bebas oksida pada jarak kisi kristal atomik ($< 0.5\ \text{nm}$).
3. **Efisiensi Energi Siklus Tinggi**: Konsumsi energi listrik per sambungan hanya berkisar $1 - 10\ \text{kJ}$, berlangsung dalam waktu $< 50\ \mu\text{s}$, memungkinkan waktu siklus produksi (*takt time*) di bawah $3\ \text{detik}$ per benda kerja pada lini otomasi perakitan.

Standar internasional yang mengatur kualifikasi dan pengujian sambungan las impak/solid-state:
- **AWS C1.1M/C1.1**: *Recommended Practices for Resistance and Solid-State Impact Welding*.
- **ISO 18595**: *Resistance spot welding — Procedures for spot welding of uncoated and coated low carbon steels and non-ferrous metals*.
- **ASTM E8 / E8M**: *Standard Test Methods for Tension Testing of Metallic Materials (Lap Shear & Tensile Peeling)*.
- **ISO 15614-13**: *Specification and qualification of welding procedures for metallic materials — Welding procedure test (Resistance and solid-state welding)*.

---

## 2. Model Fisika & Elektrodinamika Rangkaian Transien MPW

Sistem pembangkit pulsa MPW dimodelkan sebagai rangkaian listrik RLC transien teredam (*damped series RLC circuit*) yang berpasangan secara induktif dengan benda kerja (*workpiece*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                  RANGKAIAN EKUIVALEN RLC SISTEM DISCHARGE MPW                                         |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|         ┌───────[ Saklar S ]───────[ R_total ]───────[ L_total ]───────┐                                              |
|         │                                                              │                                              |
|       ┌─┴─┐                                                          ┌─┴─┐                                            |
|       │ + │                                                          │   │ Koil MPW                                   |
|    C  │   │ V_0 (Tegangan Kapasitor)                                 │ L │ (L_coil, R_coil)                           |
|       │ - │                                                          │   │                                            |
|       └─┬─┘                                                          └─┬─┘                                            |
|         │                                                              │                                              |
|         └──────────────────────────────────────────────────────────────┘                                              |
|                                                                                                                       |
|   Persamaan Arus Discharge Teramortisasi:                                                                             |
|   I(t) = (V_0 / (ω * L_eq)) * exp(-δ * t) * sin(ω * t)                                                                |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.1 Persamaan Diferensial Discharge Kapasitor
Ketika bank kapasitor berkapasitansi $C$ yang diisi daya hingga tegangan awal $V_0$ dilepaskan ke rangkaian berhambatan total $R = R_{\text{bank}} + R_{\text{line}} + R_{\text{coil}}$ dan induktansi total $L = L_{\text{bank}} + L_{\text{line}} + L_{\text{coil}}(x)$, persamaan diferensial arus pelepasan adalah:

$$L \frac{d^2 I(t)}{dt^2} + R \frac{d I(t)}{dt} + \frac{1}{C} I(t) = 0$$

Dengan faktor redaman $\delta = \frac{R}{2L}$ dan frekuensi sudut osilasi teredam $\omega = \sqrt{\omega_0^2 - \delta^2} = \sqrt{\frac{1}{LC} - \left(\frac{R}{2L}\right)^2}$, arus discharge transien dirumuskan sebagai:

$$I(t) = \frac{V_0}{\omega L} \exp(-\delta t) \sin(\omega t)$$

Energi elektrostatik total yang tersimpan dalam bank kapasitor:

$$E_0 = \frac{1}{2} C V_0^2$$

### 2.2 Efek Kulit (*Skin Effect*) dan Kedalaman Penetrasi Fluks Magnetik
Arus frekuensi tinggi yang berosilasi pada rentang $10\ \text{kHz} \le f \le 50\ \text{kHz}$ menciptakan fenomena medan elektromagnetik terkonsentrasi pada lapisan terluar konduktor. Kedalaman kulit penetrasi magnetik (*skin depth* $\delta_s$) ditentukan oleh konduktivitas listrik material flyer $\sigma_e$ dan permeabilitas magnetik $\mu = \mu_0 \mu_r$:

$$\delta_s = \sqrt{\frac{1}{\pi f \mu \sigma_e}} = \sqrt{\frac{2}{\omega \mu \sigma_e}}$$

Agar gaya tolakan elektromagnetik maksimal dan fluks tidak bocor menembus flyer tanpa melakukan kerja mekanis, ketebalan flyer $t_f$ harus memenuhi kriteria perancangan teknis:

$$t_f \ge 1.5 \cdot \delta_s$$

### 2.3 Tekanan Magnetik (*Magnetic Pressure*) & Gaya Lorentz
Interaksi antara medan induksi magnetik sesaat $B(t)$ di dalam celah koil dan arus eddy induksi $J_e(t)$ yang timbul pada benda kerja flyer menghasilkan gaya Lorentz volumetrik $\mathbf{f}_L = \mathbf{J}_e \times \mathbf{B}$. Tekanan magnetik permukaan total ($P_{\text{mag}}(t)$) yang mendorong flyer ke arah target dinyatakan dalam bentuk kerapatan energi magnetik:

$$P_{\text{mag}}(t) = \frac{B(t)^2 - B_{\text{trans}}(t)^2}{2 \mu_0}$$

Bila penetrasi fluks diabaikan ($t_f \gg \delta_s \implies B_{\text{trans}} \approx 0$):

$$P_{\text{mag}}(t) = \frac{B(t)^2}{2 \mu_0} = \frac{\mu_0 n^2 I(t)^2}{2}$$

di mana $n$ adalah kerapatan lilitan per satuan panjang koil ($\text{turns/meter}$) dan $\mu_0 = 4\pi \times 10^{-7}\ \text{H/m}$. Tekanan magnetik puncak dalam proses industri MPW dapat mencapai $P_{\text{peak}} \approx 200 - 1500\ \text{MPa}$ ($2 - 15\ \text{kbar}$).

---

## 3. Dinamika Impak, Kinematika Gelombang, dan Kriteria Weldability

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                 KINEMATIKA TABRAKAN OBLIK & SUDUT IMPAK PADA MPW                                      |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                        Flyer Plate / Tube                                                                             |
|                     ─────────────────────────┐                                                                        |
|                                              │                                                                        |
|                                              ▼ Kecepatan Flyer (V_p / V_imp)                                          |
|                                         \    │                                                                        |
|                                          \ β │ Sudut Tabrakan Dinamis (Dynamic Collision Angle)                       |
|                                           \  │                                                                        |
|     Titik Kontak Tabrakan                  \ │                                                                        |
|    (Collision Point S)                      \│                                                                        |
|     ──────────────► V_c (Kecepatan Titik Kontak)                                                                      |
|    ══════════════════════════════════════════╦════════════════════════════════════════════════════════════════════    |
|                        Parent Plate / Mandrel Target Metal                                                            |
|                                                                                                                       |
|   Hubungan Kinematika:                                                                                                |
|   V_c = V_p / sin(β)           atau         V_c = (V_p / 2) / sin(β / 2) (Konfigurasi Paralel Miring)                 |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.1 Kinematika Titik Kontak & Kecepatan Tabrakan (*Collision Velocity*)
Pergerakan titik tumbukan $S$ sepanjang permukaan benda kerja bergerak dengan kecepatan propagasi kontak $V_c$. Hubungan trigonometri antara kecepatan impak flyer orthogonal $V_p$ (atau $V_{\text{imp}}$) dan sudut tabrakan dinamis $\beta$ dinyatakan oleh persamaan:

$$V_c = \frac{V_p}{\sin \beta}$$

Untuk penyambungan solid-state yang sukses, kecepatan titik kontak $V_c$ harus bersifat **subsonik** terhadap kecepatan suara akustik ruah (*bulk sound velocity* $C_0$) dari kedua material yang disambung:

$$V_c < C_{0,\min} = \min\left(\sqrt{\frac{K_1}{\rho_1}}, \sqrt{\frac{K_2}{\rho_2}}\right)$$

di mana $K$ adalah modulus kompresibilitas ruah (*bulk modulus*) dan $\rho$ adalah massa jenis material. Jika $V_c \ge C_0$, gelombang kejut detached (*detached shock wave*) akan terbentuk di depan titik kontak, mencegah keluarnya gas/oksida dan menggagalkan pembentukan jetting.

### 3.2 Kecepatan Impak Flyer Minimum & Teori Kritis Wittman-Deribas
Agar tekanan kontak sesaat melebihi tegangan alir dinamis material pada laju regangan tinggi ($\dot{\varepsilon} > 10^4\ \text{s}^{-1}$) dan memicu aliran hidrodinamik fluida padat (*viscoplastic hydrodynamic flow*), kecepatan impak flyer minimum ($V_{p,\min}$) harus melampaui batas batas kritis:

$$V_{p,\min} = \sqrt{\frac{\sigma_{y,\text{dyn}}}{\rho_f}} \approx \sqrt{\frac{H_v}{3 \rho_f}}$$

di mana $H_v$ adalah kekerasan Vickers material flyer dan $\rho_f$ adalah densitas logam flyer.

### 3.3 Morfologi Gelombang Antarmuka & Kestabilan Kelvin-Helmholtz
Fenomena terbentuknya gelombang antarmuka berulang (*interlocking wavy interface*) dianalisis sebagai ketidakstabilan hidrodinamika Kelvin-Helmholtz antara dua fluida padat berkecepatan relatif tinggi.

Panjang gelombang antarmuka $\lambda_w$ dan amplitudo gelombang $A_w$ dimodelkan melalui hubungan empiris-analitis Bahrani & Crossland:

$$\lambda_w \approx K_w \frac{t_f (V_p / C_0)^2}{\sin^2 \beta}$$

$$A_w \approx \frac{\lambda_w}{4} \cdot \left(\frac{\rho_f V_p^2}{\sigma_{y,\text{parent}}}\right)^{0.5}$$

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    WELDABILITY WINDOW UNTUK PROSES MPW                                                |
+-----------------------------------------------------------------------------------------------------------------------+
|   Kecepatan Flyer V_p (m/s)                                                                                           |
|        ▲                                                                                                              |
|        │                    ┌────────────────────────────────────────────────────────┐                                |
|        │                    │   Batas Atas: Peleburan Berlebih & Erosi Intermetalik  │                                |
|        │                    │   (Excessive Intermetallic Formation & Jet Trapping)   │                                |
|        │                    └────────────────────────────────────────────────────────┘                                |
|        │                       ╱                                                ╲                                     |
|        │                      ╱            ZONA PENGELASAN OPTIMAL               ╲                                    |
|        │                     ╱            (WELDABILITY WINDOW)                    ╲                                   |
|        │                    ╱             - Wavy Bond Kuat                        │                                   |
|        │                   │              - Jetting Sempurna                      │                                   |
|        │                   │              - Lapisan IMC < 1 µm                    │                                   |
|        │                   │                                                      │                                   |
|        │                    ╲                                                    ╱                                    |
|        │                     └──────────────────────────────────────────────────┘                                     |
|        │                     Batas Bawah: Kecepatan Tidak Cukup untuk Jetting                                         |
|        │                     (No Bonding / Insufficient Hydrodynamic Plasticity)                                      |
|        └──────────────────────────────────────────────────────────────────────────────────►                           |
|        0                 β_min (~ 3° - 5°)                    β_max (~ 25° - 30°)       Sudut Impak Dinamis β (deg)   |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 4. Parameter Proses Utama & Perancangan Peralatan Industri

Dalam rekayasa sistem manufaktur MPW, empat variabel independen utama dikontrol oleh insinyur industri:
1. **Tegangan Discharge Bank Kapasitor ($V_0$) [kV]**: Menentukan energi total input $E_0$ dan amplitudo medan magnet puncak.
2. **Jarak Renggang Awal (*Standoff Distance*, $g_0$) [mm]**: Memberikan ruang lintasan bebas bagi flyer untuk berakselerasi di bawah dorongan gaya Lorentz sebelum menabrak target. $g_0$ optimal umumnya berkisar antara $1.0\times$ hingga $2.5\times$ ketebalan flyer ($1.0 \le g_0 / t_f \le 2.5$).
3. **Geometri Koil dan Field Shaper**: *Field shaper* berbahan paduan tembaga berkekuatan mekanis dan konduktivitas tinggi (CuCrZr atau CuBe) digunakan untuk mengonsentrasikan kerapatan fluks magnetik pada zona pengelasan selektif sempit.
4. **Panjang Tumpang Tindih (*Overlap Length*, $L_o$) [mm]**: Lebar area antarmuka tumpang tindih sambungan.

---

## 5. Implementasi Python: Simulasi Elektrodinamika RLC, Kecepatan Flyer & Verifikasi Weldability Window

Berikut adalah script Python komprehensif berstandar industri untuk menghitung respons transien arus discharge, percepatan medan magnetik flyer plate, dinamika tumbukan, dan memvalidasi apakah parameter proses berada di dalam *weldability window*.

```python
"""
MPW_Process_Simulator.py
Industrial Magnetic Pulse Welding (MPW) Physics & Weldability Engine
Standar: AWS C1.1 / ISO 18595 / ISO 15614-13
"""

import numpy as np
import math
from dataclasses import dataclass
from typing import Dict, Tuple, List

@dataclass
class MPWSystemConfig:
    # Parameter Rangkaian Pembangkit Pulsa
    capacitance_uF: float       # Kapasitansi bank kapasitor (uF)
    charging_voltage_kV: float  # Tegangan pengisian daya V0 (kV)
    circuit_inductance_nH: float# Total induktansi rangkaian (nH)
    circuit_resistance_mOhm: float # Total hambatan rangkaian (mOhm)
    coil_turns: int             # Jumlah lilitan efektif koil
    coil_length_mm: float       # Panjang aksial zona kerja koil (mm)
    
    # Parameter Benda Kerja (Flyer & Parent)
    flyer_material: str         # Material flyer (misal 'Al6061-T6')
    flyer_thickness_mm: float   # Tebal flyer tf (mm)
    flyer_density_kg_m3: float  # Densitas flyer rho (kg/m3)
    flyer_yield_MPa: float      # Tegangan alir statis flyer (MPa)
    flyer_conductivity_MS_m: float # Konduktivitas listrik (MS/m)
    
    parent_material: str        # Material parent (misal 'Cu-ETP' / 'Steel')
    parent_density_kg_m3: float # Densitas target (kg/m3)
    parent_sound_speed_m_s: float # Kecepatan suara akustik target C0 (m/s)
    
    # Setup Geometri
    standoff_gap_mm: float      # Jarak celah akselerasi standoff g0 (mm)
    initial_angle_deg: float    # Sudut kemiringan awal (deg)

class MPWProcessSolver:
    def __init__(self, cfg: MPWSystemConfig):
        self.cfg = cfg
        self.mu_0 = 4.0 * math.pi * 1e-7  # Permeabilitas ruang hampa (H/m)
        
    def calculate_electrical_transients(self, time_array_us: np.ndarray) -> Dict[str, np.ndarray]:
        """Menghitung osilasi arus transien I(t), medan magnet B(t), dan tekanan magnetik P(t)."""
        C = self.cfg.capacitance_uF * 1e-6
        V0 = self.cfg.charging_voltage_kV * 1e3
        L = self.cfg.circuit_inductance_nH * 1e-9
        R = self.cfg.circuit_resistance_mOhm * 1e-3
        
        # Karakteristik Rangkaian RLC
        delta = R / (2.0 * L)  # Faktor redaman (1/s)
        omega_0_sq = 1.0 / (L * C)
        if omega_0_sq <= delta**2:
            raise ValueError("Rangkaian overdamped / kritis! MPW memerlukan kondisi underdamped oscilator.")
        omega = math.sqrt(omega_0_sq - delta**2) # Frekuensi sudut teredam (rad/s)
        freq_Hz = omega / (2.0 * math.pi)
        
        t_sec = time_array_us * 1e-6
        # Persamaan Arus: I(t) = (V0 / (omega * L)) * exp(-delta * t) * sin(omega * t)
        current_A = (V0 / (omega * L)) * np.exp(-delta * t_sec) * np.sin(omega * t_sec)
        
        # Medan Magnet Permukaan B(t) = mu_0 * n * I(t)
        n_turns_per_m = self.cfg.coil_turns / (self.cfg.coil_length_mm * 1e-3)
        b_field_T = self.mu_0 * n_turns_per_m * current_A
        
        # Tekanan Magnetik P_mag(t) = B(t)^2 / (2 * mu_0) [Pa]
        p_mag_Pa = (b_field_T**2) / (2.0 * self.mu_0)
        p_mag_MPa = p_mag_Pa * 1e-6
        
        # Skin depth pada frekuensi dominan
        sigma = self.cfg.flyer_conductivity_MS_m * 1e6
        skin_depth_mm = math.sqrt(1.0 / (math.pi * freq_Hz * self.mu_0 * sigma)) * 1e3
        
        return {
            "frequency_kHz": freq_Hz * 1e-3,
            "skin_depth_mm": skin_depth_mm,
            "current_kA": current_A * 1e-3,
            "b_field_Tesla": b_field_T,
            "p_mag_MPa": p_mag_MPa,
            "stored_energy_kJ": 0.5 * C * (V0**2) * 1e-3
        }

    def simulate_flyer_kinematics(self, dt_ns: float = 5.0, max_time_us: float = 40.0) -> Dict[str, float]:
        """Simulasi integrasi numerik gerak translasi 1D flyer hingga mencapai standoff gap."""
        dt = dt_ns * 1e-9
        steps = int((max_time_us * 1e-6) / dt)
        
        t_eval = np.linspace(0, max_time_us, steps)
        electrics = self.calculate_electrical_transients(t_eval)
        p_mag_series = electrics["p_mag_MPa"] * 1e6 # Pa
        
        m_area = self.cfg.flyer_density_kg_m3 * (self.cfg.flyer_thickness_mm * 1e-3) # massa per satuan luas (kg/m2)
        gap_m = self.cfg.standoff_gap_mm * 1e-3
        
        pos = 0.0
        vel = 0.0
        impact_time = 0.0
        impact_vel = 0.0
        has_impacted = False
        
        for idx in range(steps):
            t_curr = t_eval[idx] * 1e-6
            p_curr = p_mag_series[idx]
            
            # Gaya netto per satuan luas (mengabaikan bending resistance minor pada kecepatan tinggi)
            accel = p_curr / m_area
            vel += accel * dt
            pos += vel * dt
            
            if pos >= gap_m and not has_impacted:
                has_impacted = True
                impact_time = t_curr * 1e6
                impact_vel = vel
                break
                
        if not has_impacted:
            impact_vel = vel
            impact_time = max_time_us

        # Sudut Impak Dinamis Beta (Perkiraan Kinematika Sudut Tumbukan)
        # beta = initial_angle + arctan(V_p / V_phase)
        beta_rad = math.radians(self.cfg.initial_angle_deg) + math.atan(impact_vel / 3000.0)
        beta_deg = math.degrees(beta_rad)
        
        # Kecepatan Titik Kontak (Collision Point Velocity Vc)
        v_c = impact_vel / math.sin(beta_rad) if math.sin(beta_rad) > 0 else float('inf')
        
        return {
            "impact_velocity_m_s": impact_vel,
            "impact_time_us": impact_time,
            "dynamic_collision_angle_deg": beta_deg,
            "collision_point_velocity_m_s": v_c,
            "stored_energy_kJ": electrics["stored_energy_kJ"],
            "frequency_kHz": electrics["frequency_kHz"],
            "skin_depth_mm": electrics["skin_depth_mm"],
            "peak_current_kA": float(np.max(np.abs(electrics["current_kA"]))),
            "peak_pressure_MPa": float(np.max(electrics["p_mag_MPa"]))
        }

    def evaluate_weldability_window(self, kin: Dict[str, float]) -> Dict[str, any]:
        """Memeriksa apakah parameter operasi memenuhi kriteria metalurgi las impak AWS/ISO."""
        v_p = kin["impact_velocity_m_s"]
        beta = kin["dynamic_collision_angle_deg"]
        v_c = kin["collision_point_velocity_m_s"]
        c_sound = self.cfg.parent_sound_speed_m_s
        
        # Kriteria 1: Kecepatan minimum untuk fluidisasi hidrodinamik
        v_min_threshold = math.sqrt((self.cfg.flyer_yield_MPa * 1e6) / self.cfg.flyer_density_kg_m3) * 1.2
        crit_v_min = v_p >= v_min_threshold
        
        # Kriteria 2: Kecepatan maksimum untuk menghindari pembentukan IMC tebal & overheating (> 800 m/s)
        v_max_threshold = 750.0
        crit_v_max = v_p <= v_max_threshold
        
        # Kriteria 3: Sudut impak dinamis berada pada rentang stabil (3 deg <= beta <= 28 deg)
        crit_angle = (3.0 <= beta <= 28.0)
        
        # Kriteria 4: Kondisi subsonik pada titik kontak (Vc < C0)
        crit_subsonic = v_c < c_sound
        
        is_weldable = crit_v_min and crit_v_max and crit_angle and crit_subsonic
        
        # Estimasi Morfologi Gelombang Antarmuka (Bahrani & Crossland)
        if is_weldable:
            tf_m = self.cfg.flyer_thickness_mm * 1e-3
            wavelength_um = (0.25 * tf_m * ((v_p / c_sound)**2) / (math.sin(math.radians(beta))**2)) * 1e6
            amplitude_um = 0.28 * wavelength_um
            wave_type = "Wavy Interface (Kuat & Ulet / Interlocking)"
        else:
            wavelength_um = 0.0
            amplitude_um = 0.0
            wave_type = "No Bonding / Planar Defective / Porous IMC"
            
        return {
            "is_weldable": is_weldable,
            "v_p_actual_m_s": round(v_p, 2),
            "v_min_required_m_s": round(v_min_threshold, 2),
            "dynamic_angle_deg": round(beta, 2),
            "v_c_m_s": round(v_c, 2),
            "sound_speed_limit_m_s": round(c_sound, 2),
            "estimated_wavelength_um": round(wavelength_um, 2),
            "estimated_amplitude_um": round(amplitude_um, 2),
            "interface_morphology": wave_type,
            "pass_checks": {
                "Hydrodynamic_Plasticity (Vp >= Vmin)": crit_v_min,
                "Thermal_IMC_Limit (Vp <= Vmax)": crit_v_max,
                "Angle_Window (3° <= β <= 28°)": crit_angle,
                "Subsonic_Jetting (Vc < C0)": crit_subsonic
            }
        }

# ==========================================
# TEST & VALIDASI SISTEM MPW DENGAN PARAMETER INDUSTRI
# Sambungan Tabung Aluminium Al6061-T6 ke Inti Tembaga Cu-ETP (Aplikasi Tab Baterai EV)
# ==========================================
if __name__ == "__main__":
    test_config = MPWSystemConfig(
        capacitance_uF=160.0,
        charging_voltage_kV=18.0,
        circuit_inductance_nH=120.0,
        circuit_resistance_mOhm=14.0,
        coil_turns=1,
        coil_length_mm=25.0,
        
        flyer_material="Aluminium 6061-T6",
        flyer_thickness_mm=1.2,
        flyer_density_kg_m3=2700.0,
        flyer_yield_MPa=276.0,
        flyer_conductivity_MS_m=25.0,
        
        parent_material="Copper Cu-ETP",
        parent_density_kg_m3=8960.0,
        parent_sound_speed_m_s=3940.0,
        
        standoff_gap_mm=1.8,
        initial_angle_deg=5.0
    )
    
    solver = MPWProcessSolver(test_config)
    kinematics = solver.simulate_flyer_kinematics()
    weld_eval = solver.evaluate_weldability_window(kinematics)
    
    print("==========================================================")
    print("   HASIL SIMULASI SISTEM MAGNETIC PULSE WELDING (MPW)     ")
    print("==========================================================")
    print(f"Energi Tersimpan Bank Kapasitor  : {kinematics['stored_energy_kJ']:.2f} kJ")
    print(f"Frekuensi Osilasi Pulsa          : {kinematics['frequency_kHz']:.2f} kHz")
    print(f"Arus Puncak Discharge (I_peak)   : {kinematics['peak_current_kA']:.2f} kA")
    print(f"Tekanan Magnetik Puncak (P_peak) : {kinematics['peak_pressure_MPa']:.2f} MPa")
    print(f"Kedalaman Penetrasi Kulit (δ_s)  : {kinematics['skin_depth_mm']:.3f} mm")
    print("----------------------------------------------------------")
    print(f"Waktu Mencapai Tabrakan (t_imp)  : {kinematics['impact_time_us']:.2f} µs")
    print(f"Kecepatan Impak Flyer (V_p)      : {kinematics['impact_velocity_m_s']:.2f} m/s")
    print(f"Sudut Tabrakan Dinamis (β)       : {kinematics['dynamic_collision_angle_deg']:.2f}°")
    print(f"Kecepatan Titik Kontak (V_c)     : {kinematics['collision_point_velocity_m_s']:.2f} m/s")
    print("----------------------------------------------------------")
    print(f"Status Kualifikasi Pengelasan    : {'MEMENUHI SYARAT (QUALIFIED)' if weld_eval['is_weldable'] else 'REJECTED'}")
    print(f"Morfologi Gelombang Antarmuka    : {weld_eval['interface_morphology']}")
    print(f"Panjang Gelombang Estimasi (λ)   : {weld_eval['estimated_wavelength_um']} µm")
    print(f"Amplitudo Gelombang Estimasi (A) : {weld_eval['estimated_amplitude_um']} µm")
    print("Detail Pengecekan Kriteria:")
    for check_name, status in weld_eval["pass_checks"].items():
        print(f"  - {check_name:38s}: {'[PASS]' if status else '[FAIL]'}")
    print("==========================================================")
```

---

## 6. Studi Kasus Rekayasa Industri: Perakitan Busbar Baterai EV Al-Cu

### 6.1 Latar Belakang Masalah
Sebuah pabrik perakitan modul baterai kendaraan listrik (*electric vehicle battery pack*) memproduksi sambungan busbar antara terminal sel kantong (*pouch cell tabs*) Aluminium paduan Al1050 ($t = 1.0\ \text{mm}$) ke busbar distribusi Tembaga C11000 ($t = 2.0\ \text{mm}$).

Pengelasan konvensional menggunakan *Ultrasonic Metal Welding* (USMW) mengalami keausan tip sonotrode yang parah setiap 5.000 siklus, sementara *Laser Welding* menghasilkan lapisan intermetalik $\text{Al}_2\text{Cu}$ dan $\text{Al}_4\text{Cu}_9$ getas setebal $8 - 15\ \mu\text{m}$ yang memicu resistansi kontak ohmik tinggi ($> 120\ \mu\Omega$) dan kegagalan fatik getaran jalan (*vibration fatigue failure*).

### 6.2 Desain Ulang Sistem MPW
Tim Rekayasa Manufaktur menerapkan sistem MPW berenergi rendah dengan konfigurasi *single-turn E-shaped coil* dan field shaper CuCrZr:
- Kapasitansi: $C = 160\ \mu\text{F}$
- Tegangan Pengisian: $V_0 = 17.5\ \text{kV}$ ($E_0 = 24.5\ \text{kJ}$)
- Celah Akselerasi (*Standoff*): $g_0 = 1.5\ \text{mm}$
- Sudut Chamfer Awal: $\alpha = 4.5^\circ$

### 6.3 Hasil Pengujian & Analisis Metalurgi
1. **Analisis SEM & EDS**: Antarmuka las menunjukkan pola gelombang sinusoidal kontinu (*regular wavy interface*) dengan panjang gelombang $\lambda = 62\ \mu\text{m}$ dan amplitudo $A = 16\ \mu\text{m}$. Lapisan difusi intermetalik diukur sebesar $t_{\text{IMC}} = 0.42\ \mu\text{m}$ (jauh di bawah batas bahaya $1.5\ \mu\text{m}$).
2. **Kekuatan Geser Tarik (*Lap Shear Strength*, ASTM E8)**: Beban putus rata-rata mencapai $4.85\ \text{kN}$, dengan mode kegagalan putus pada logam induk Aluminium (*parent metal tearing failure*), bukan pada antarmuka sambungan.
3. **Resistansi Kontak Listrik**: Resistansi sambungan turun menjadi $14.2\ \mu\Omega$, menghasilkan penurunan panas Joule sebesar $68\%$ saat diuji arus kontinyu $200\ \text{A}$.
4. **Keandalan Umur Koil**: Penggunaan field shaper yang didinginkan air memperpanjang umur pakai koil hingga $> 250.000$ siklus sebelum rekondisi.

---

## 7. Referensi Akademis Terverifikasi & Standar Industri

1. **Yu, H., Jiang, X., & Zhang, M.** (2024). "An innovative coil for magnetic pulse welding of dissimilar sheet metals: Numerical simulation and experiments". *Journal of Materials Processing Technology*, 323, 118230. DOI: [10.1016/j.jmatprotec.2023.118230](https://doi.org/10.1016/j.jmatprotec.2023.118230).
2. **Kapil, A., Mastanaiah, P., & Sharma, A.** (2022). "Comprehensive Weldability Criterion for Magnetic Pulse Welding of Dissimilar Materials". *Metals*, 12(11), 1791. DOI: [10.3390/met12111791](https://doi.org/10.3390/met12111791).
3. **Lueg-Althoff, J., Bellmann, J., Gies, S., Schulze, S., Tekkaya, A. E., & Beyer, E.** (2020). "Role of collision angle during dissimilar Al/Cu magnetic pulse welding". *Science and Technology of Welding and Joining*, 25(8), 653–660. DOI: [10.1080/13621718.2020.1768351](https://doi.org/10.1080/13621718.2020.1768351).
4. **Miyazaki, M., Sasaki, K., & Okada, M.** (2013). "Influence of Gap Length on Collision Angle and Collision Point Velocity of Magnetic Pressure Seam Welding". *Materials Science Forum*, 767, 166–170. DOI: [10.4028/www.scientific.net/msf.767.166](https://doi.org/10.4028/www.scientific.net/msf.767.166).
5. **AWS C1.1M/C1.1:2019**: *Recommended Practices for Resistance and Solid-State Impact Welding*. American Welding Society (AWS), Miami, FL.
6. **ISO 18595:2021**: *Resistance welding — Spot welding of aluminium and aluminium alloys — Weldability, welding and testing*. International Organization for Standardization, Geneva.
7. **Groover, M. P.** (2020). *Fundamentals of Modern Manufacturing: Materials, Processes, and Systems* (7th Edition). John Wiley & Sons, Hoboken, NJ.
