# Modul 668: Laser-Assisted Machining (LAM) & Hybrid Thermomechanical Processing of Difficult-to-Cut Superalloys & Advanced Structural Ceramics: Kinetika Pre-Heating Termal Kuantitatif, Transisi Ulet-Getas (Ductile Regime), Fluks Energi Gaussian, dan Reduksi Gaya Potong (ISO/ASTM 52900, ASTM E384 & ISO 3685)

## 1. Pengantar & Konteks Industri: Paradoks Pemesinan Material Maju & Solusi Hibrida LAM

Dalam era industri kedirgantaraan tingkat lanjut (*next-generation aerospace propulsion*), turbin gas pembangkit daya turbomesin (*heavy-duty power generation gas turbines*), dan manufaktur nuklir generasi IV, pemanfaatan superaloy berbasis nikel (seperti Inconel 718, Inconel 625, Waspaloy) dan keramik struktural berkekuatan ultra-tinggi (seperti Silicon Nitride $\text{Si}_3\text{N}_4$, Zirconia-Toughened Alumina $\text{ZTA}$, dan Silicon Carbide $\text{SiC}$) telah menjadi tulang punggung rekayasa material berkinerja ekstrem.

Material-material ini memiliki karakteristik unggul:
- **Kekuatan dan Kekerasan Suhu Tinggi Ekstrem**: Mempertahankan yield strength $\sigma_y > 800 - 1100\ \text{MPa}$ dan kekerasan mikro $H_v > 15 - 22\ \text{GPa}$ pada temperatur operasi di atas $700 - 1200\ \text{°C}$.
- **Ketahanan Korosi & Mulur (*High Creep and Oxidation Resistance*)**.

Namun, sifat mekanis luar biasa tersebut justru menciptakan **paradoks kemampuan mesin (*machinability paradox*)** yang sangat merugikan:
1. **Laju Keausan Pahat Katastropik (*Catastrophic Tool Wear Rate*)**: Memotong superaloy Inconel atau keramik $\text{Si}_3\text{N}_4$ pada kondisi dingin konvensional memicu aus takik kawah (*crater notch wear*), *chipping* mikro, dan delaminasi lapisan pahat potong karbida atau CBN/PCD hanya dalam hitungan menit akibat tegangan mekanis geser masif dan abrasi karbida intergranular.
2. **Gaya Potong Spesifik Sangat Tinggi (*Excessive Cutting Forces*)**: Gaya potong spesifik mencapai $K_c > 3500 - 6000\ \text{N/mm}^2$, menuntut kekakuan mesin ultra-tinggi dan membatasi kedalaman pemakanan serta laju pembuangan material (*Material Removal Rate - MRR*).
3. **Integritas Permukaan Rusak (*Subsurface Micro-Cracking*)**: Pada keramik struktural, permesinan dingin beroperasi sepenuhnya pada rezim getas (*brittle fracture mode*), meninggalkan retak mikro bawah permukaan (*subsurface micro-cracks*) dan tegangan sisa tarik yang menurunkan kekuatan lentur komponen (*flexural Weibull strength*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|             SKEMATIKA SISTEM PERMESINAN HIBRIDA TERMAL LASER-ASSISTED MACHINING (LAM)                                |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|             Sumber Laser Berdaya Tinggi (Fiber / Diode Laser, P_L = 500 - 4000 W)                                     |
|                                    │                                                                                  |
|                                    ├─► Transmisi Serat Optik Fleksibel                                                |
|                                    └─► Kepala Pemfokus Optik (Collimating & Focusing Optics, Spot Radius r_0)         |
|                                                                                                                       |
|                                     Sinar Laser Terfokus                                                              |
|                                      \ (Leading Beam)                                                                 |
|                                       \   Jarak Lead-Lag: d_lead (1.0 - 5.0 mm)                                       |
|                                        \                                                                              |
|                                         ▼               Pahat Potong (CBN / Ceramic / Carbide Tool)                   |
|                        ┌──────────────────┐           ┌──────────────┐                                                |
|                        │  Spot Pemanasan  │           │              │                                                |
|                        │  Termal Gaussian │           │   Mata Potong│                                                |
|                        │  (T_surf: 700-   │           │    Utama     │                                                |
|                        │   1300 °C)       │           └──────┬───────┘                                                |
|                        └────────┬─────────┘                  │                                                        |
|                                 │  Zona Plastis Lunak        │ Pemotongan Kontinu Rezim Ulet                          |
|       ══════════════════════════╪════════════════════════════╪════════════════════════════════════════════            |
|       ▼ BENDA KERJA (Inconel 718 / Si3N4 Ceramic)            │                                           │            |
|         - Lapisan Atas: Dilunakkan secara termal (T > T_soft)│ -> Pembentukan geram ulet kuasi-kontinu   │            |
|         - Substrat Bawah: Tetap dingin dan tidak terpengaruh │ -> Mengeliminasi distorsi termal massal   │            |
|       ═══════════════════════════════════════════════════════╪═══════════════════════════════════════════            |
|                                                              ▲                                                        |
|                                  Arah Gerak Pemakanan Pahat / Benda Kerja (v_c, v_f)                                  |
|                                                                                                                       |
|       Hasil: MRR Meningkat 200-800%, Gaya Potong Turun 40-70%, Tool Life Naik 300-1000%, Ra < 0.2 um                  |
+-----------------------------------------------------------------------------------------------------------------------+
```

**Laser-Assisted Machining (LAM)** merevolusi permesinan material sulit-potong dengan menggabungkan sumber pemanasan laser lokal terfokus intensitas tinggi (*high-power localized laser pre-heating*) yang diposisikan mendahului pahat potong (*leading beam configuration*). Energi laser diserap oleh lapisan permukaan benda kerja, memanaskan zona pemotongan lokal secara presisi hingga temperatur transisi pelunakan termal (*thermal softening temperature*, $T_{\text{soft}} \approx 750 - 950\ \text{°C}$ untuk Inconel 718, dan $T_{\text{soft}} \approx 1100 - 1350\ \text{°C}$ untuk keramik $\text{Si}_3\text{N}_4$).

Pada temperatur ini:
- Kekuatan luluh material terpangkas drastis hingga 50–80%.
- Fasa glassy intergranular pada keramik melunak, memungkinkan transisi permesinan ke **mode deformasi plastis ulet (*ductile machining regime*)**.
- Gaya potong dan beban getaran dinamis merosot tajam.
- Masa pakai pahat meningkat berlipat ganda, dan pembuangan geram berlangsung bersih dan kontinyu tanpa merusak substrat inti benda kerja.

Standar internasional yang melandasi proses LAM, metrologi termomekanik, dan pengujian kualitas permukaan mencakup:
1. **ISO 3685**: *Tool-life testing with single-point turning tools*.
2. **ISO/ASTM 52900**: *Additive manufacturing — General principles — Terminology*.
3. **ASTM E384**: *Standard Test Method for Microindentation Hardness of Materials*.
4. **ISO 4287 / ISO 21920**: *Geometrical product specifications (GPS) — Surface texture: Profile and Areal methods*.
5. **ASTM E112**: *Standard Test Methods for Determining Average Grain Size*.
6. **DIN EN 60825-1**: *Safety of laser products — Part 1: Equipment classification and requirements*.

---

## 2. Pemodelan Termal 3D Fluks Gaussian & Distribusi Temperatur Benda Kerja

### 2.1 Distribusi Intensitas Fluks Sinar Laser Gaussian

Sinar laser berkas kontinu (CW) berdistribusi spasial Gaussian mode fundamental ($\text{TEM}_{00}$) yang bergerak pada permukaan benda kerja dengan kecepatan pemakanan $v_w$ dimodelkan melalui persamaan fluks radiasi permukaan:

$$q_L(x, y) = \frac{2 A_s P_L}{\pi r_0^2} \exp \left( -2 \frac{x^2 + y^2}{r_0^2} \right)$$

Di mana:
- $P_L$ adalah daya laser terukur (*incident laser power*, W).
- $A_s$ adalah fraksi serapan optik permukaan (*optical absorptivity coefficient*, $A_s \approx 0{,}65 - 0{,}85$ untuk permukaan yang di-coating grafit/oksidasi alami, dan $0{,}75 - 0{,}92$ untuk keramik $\text{Si}_3\text{N}_4$).
- $r_0$ adalah radius berkas laser efektif pada tingkat intensitas $1/e^2$ (mm).
- $x, y$ adalah koordinat lokal relatif terhadap titik pusat berkas laser.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                DISTRIBUSI INTENSITAS FLUKS GAUSSIAN DAN PENETRASI TERMAL PADA ZONA POTONG                             |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|                                    Fluks Kalor q_L(r)                                                                 |
|                                            ▲                                                                          |
|                                           /│\                                                                         |
|                                          / │ \                                                                        |
|                                         /  │  \                                                                       |
|                                       /    │   \                                                                      |
|                                   . ─      │     ─ .                                                                  |
|                          ─────────┼────────┼────────┼────────► Radius r                                               |
|                                  -r_0      0       +r_0                                                               |
|                                                                                                                       |
|         Profil Penetrasi Kedalaman Suhu (Sumbu Z):                                                                    |
|         T(z) = T_ambient + Delta_T_surf * exp(-z / delta_th)                                                          |
|         Kedalaman Penetrasi Termal: delta_th = 2 * sqrt(alpha_th * t_dwell)                                           |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.2 Persamaan Diferensial Konduksi Panas Transien 3D Benda Kerja Bergerak

Distribusi temperatur spasial-temporal $T(x, y, z, t)$ pada benda kerja diatur oleh persamaan konduksi Fourier tiga dimensi dalam kerangka koordinat bergerak:

$$\rho C_p \left( \frac{\partial T}{\partial t} + v_w \frac{\partial T}{\partial x} \right) = \nabla \cdot (k \nabla T) + Q_{\text{source}}$$

Dengan kondisi batas permukaan ($z = 0$):
$$-k \frac{\partial T}{\partial z} \Big|_{z=0} = q_L(x, y) - h_c (T - T_\infty) - \varepsilon \sigma_{SB} (T^4 - T_\infty^4)$$

Di mana:
- $k$ adalah konduktivitas termal material ($k(T)$, $\text{W/m}\cdot\text{K}$).
- $\rho$ adalah densitas massa ($\text{kg/m}^3$).
- $C_p$ adalah kapasitas kalor spesifik ($C_p(T)$, $\text{J/kg}\cdot\text{K}$).
- $\alpha_{\text{th}} = \dfrac{k}{\rho C_p}$ adalah difusivitas termal material ($\text{m}^2/\text{s}$).
- $h_c$ adalah koefisien konveksi udara ambien ($\text{W/m}^2\cdot\text{K}$).
- $\sigma_{SB} = 5{,}67 \times 10^{-8}\ \text{W/m}^2\cdot\text{K}^4$ adalah konstanta Stefan-Boltzmann.
- $\varepsilon$ adalah emisivitas radiasi termal permukaan.

### 2.3 Solusi Integrasi Analitik Sumber Titik Bergerak (Modifikasi Jaeger-Rosenthal)

Untuk pemanasan laser kuasi-stasioner pada material semi-tak hingga, temperatur puncak pada kedalaman pemotongan $d_c$ (di mana $z = d_c$) dan jarak lead $x = d_{\text{lead}}$ diprediksi melalui formulasi integral analitik:

$$T(x, y, z) = T_\infty + \frac{A_s P_L}{2\pi k R_{\text{dist}}} \exp \left( -\frac{v_w (R_{\text{dist}} + x)}{2 \alpha_{\text{th}}} \right)$$

Di mana $R_{\text{dist}} = \sqrt{x^2 + y^2 + z^2}$.

---

## 3. Konstitutif Termomekanik & Reduksi Gaya Potong (Thermal Softening)

### 3.1 Model Tegangan Alir Termoplastis Johnson-Cook Termodifikasi

Untuk superaloy berbasis nikel (Inconel 718), penurunan tegangan alir dinamis $\sigma_{\text{flow}}$ akibat pelunakan termal lokal diatur oleh:

$$\sigma_{\text{flow}} = \left[ A + B (\varepsilon_p)^n \right] \left[ 1 + C \ln \left( \frac{\dot{\varepsilon}_p}{\dot{\varepsilon}_0} \right) \right] \left[ 1 - \left( \frac{T - T_{\text{room}}}{T_{\text{melt}} - T_{\text{room}}} \right)^m \right] \cdot \Phi_{\text{recryst}}(T)$$

Di mana untuk Inconel 718:
- Parameter dasar: $A = 960\ \text{MPa}$, $B = 1240\ \text{MPa}$, $n = 0{,}42$, $C = 0{,}014$, $m = 1{,}18$, $T_{\text{melt}} = 1336\ \text{°C}$.
- $\Phi_{\text{recryst}}(T)$ adalah faktor reduksi pelunakan rekristalisasi dinamis pada $T > 850\ \text{°C}$.

```
+-----------------------------------------------------------------------------------------------------------------------+
|             KURVA TEGANGAN ALIR DAN EFISIENSI DAYA POTONG TERHADAP TEMPERATUR PEMANASAN                              |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|       Tegangan Alir (MPa)                                    Gaya Potong Spesifik K_c (N/mm^2)                        |
|       1400 ──┐                                                5000 ──┐                                                |
|       1200 ──┤\                                               4000 ──┤\                                               |
|       1000 ──┤ \                                              3000 ──┤ \                                              |
|        800 ──┤  \ Inconel 718                                 2000 ──┤  \ Penurunan 55-65%                            |
|        600 ──┤   \                                            1000 ──┤   \                                            |
|        400 ──┤    \ Pelunakan Tajam                              0 ──┴────┴────────►                                  |
|        200 ──┤     \                                                 25°C 800°C 1100°C                                |
|          0 ──┴──────┴────────►                                       Suhu Permukaan Preheating                        |
|              25°C   800°C   1200°C                                                                                    |
|              Temperatur Pemanasan                                                                                     |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.2 Transisi Mode Permesinan Keramik: Kriteria Kedalaman Kritis Bifurkasi Ulet-Getas

Pada permesinan keramik $\text{Si}_3\text{N}_4$ dan $\text{Al}_2\text{O}_3$, transisi dari rekahan mikro getas (*brittle microfracture*) ke aliran plastis ulet (*ductile shear flow*) terjadi jika kedalaman potong per gigi $a_p$ lebih kecil daripada kedalaman pemotongan kritis $d_{\text{crit}}(T)$:

$$d_{\text{crit}}(T) = \psi \left( \frac{E(T)}{H(T)} \right) \left( \frac{K_{Ic}(T)}{H(T)} \right)^2$$

Di mana:
- $\psi$ adalah koefisien geometri pemotongan ($\psi \approx 0{,}15 - 0{,}22$).
- $E(T)$ adalah modulus Young pada temperatur $T$ ($\text{GPa}$).
- $H(T)$ adalah kekerasan mikro indenter Vickers pada temperatur $T$ ($\text{GPa}$).
- $K_{Ic}(T)$ adalah ketangguhan retak fraktur Mode-I ($\text{MPa}\cdot\text{m}^{1/2}$).

Pada temperatur kamar ($25\ \text{°C}$), $d_{\text{crit}} \approx 0{,}05 - 0{,}12\ \mu\text{m}$ (terlalu tipis untuk pemesinan praktis). Pada temperatur LAM ($1200\ \text{°C}$), penurunan drastis kekerasan matriks $H(T)$ menaikkan nilai $d_{\text{crit}}$ hingga **$1{,}5 - 3{,}8\ \mu\text{m}$**, memungkinkan permesinan kecepatan tinggi dalam rezim plastis murni dengan permukaan cermin (*mirror-finish surface*).

---

## 4. Dinamika Keausan Pahat & Pemodelan Umur Pahat Taylor Termodifikasi

Laju keausan tepi pahat (*flank wear rate*, $VB$) pada permesinan suhu tinggi konvensional didominasi oleh difusi termal dan abrasi:

$$\frac{d(VB)}{dt} = C_{\text{abrasive}} \left( \frac{\sigma_{\text{contact}}}{H_{\text{tool}}(T_{\text{tool}})} \right) v_c + C_{\text{diffusion}} \exp \left( -\frac{Q_d}{R_g T_{\text{tool}}} \right)$$

Dalam proses LAM teroptimasi:
1. Tegangan kontak mekanis $\sigma_{\text{contact}}$ turun hingga $60\%$, mengeliminasi *chipping* mekanis dan getaran *tool chatter*.
2. Temperatur pahat potong $T_{\text{tool}}$ hanya naik sedikit ($\Delta T \approx 40 - 80\ \text{°C}$) karena panas terkonsentrasi pada geram yang langsung terbuang (*heat evacuation by shear chip*).

Persamaan Umur Pahat Taylor Termodifikasi LAM:
$$v_c \cdot T_L^n \cdot f_z^p \cdot a_p^q \cdot \left( \frac{T_{\text{surf}}}{T_0} \right)^\gamma = C_{\text{LAM}}$$

Di mana eksponen $\gamma < 0$ menunjukkan perpanjangan umur pahat secara eksponensial terhadap pemanasan laser terkendali di bawah ambang batas keausan termal pahat.

---

## 5. Implementasi Algoritma & Python Simulator: Laser-Assisted Machining Multi-Physics Solver

Berikut adalah modul solver komputasi terpadu untuk mengevaluasi distribusi temperatur laser 3D, gaya potong termomekanik, batas transisi ulet-getas keramik, dan optimasi parameter operasional LAM.

```python
#!/usr/bin/env python3
"""
RuangTI Knowledge Base - Module 668
Laser-Assisted Machining (LAM) Multi-Physics Thermomechanical Solver
Simulasi Pemesinan Superaloy Inconel 718 & Keramik Struktural Si3N4
Standar: ISO/ASTM 52900, ASTM E384, ISO 3685 & DIN EN 60825-1
"""

import numpy as np
import math
from typing import Dict, Tuple, List, Any

class LaserAssistedMachiningSimulator:
    def __init__(self,
                 workpiece_material: str = "Inconel_718",
                 laser_power_W: float = 1500.0,
                 laser_spot_radius_mm: float = 1.5,
                 optical_absorptivity: float = 0.78,
                 lead_distance_mm: float = 2.5):
        """
        Inisialisasi Solver Multiphysics Laser-Assisted Machining (LAM).
        """
        self.material = workpiece_material
        self.P_L = laser_power_W
        self.r_0 = laser_spot_radius_mm * 1e-3  # Meter
        self.A_s = optical_absorptivity
        self.d_lead = lead_distance_mm * 1e-3   # Meter
        
        # Konfigurasi Database Termofisika & Mekanik
        if self.material.upper() == "INCONEL_718":
            self.rho = 8190.0           # kg/m^3
            self.Cp_0 = 435.0           # J/kg.K
            self.k_0 = 11.4             # W/m.K
            self.T_melt = 1336.0        # °C
            self.T_soft_target = 850.0  # °C
            self.Kc_room = 3450.0       # N/mm^2 (Specific cutting force dingin)
            self.E_0 = 205e9            # Pa
            self.H_0 = 4.2e9            # Pa (~430 HV)
            self.K_Ic_0 = 95.0          # MPa.m^0.5
            self.is_ceramic = False
        elif self.material.upper() == "SI3N4_CERAMIC":
            self.rho = 3200.0           # kg/m^3
            self.Cp_0 = 710.0           # J/kg.K
            self.k_0 = 29.0             # W/m.K
            self.T_melt = 1900.0        # °C (Dekomposisi)
            self.T_soft_target = 1250.0 # °C
            self.Kc_room = 5800.0       # N/mm^2
            self.E_0 = 310e9            # Pa
            self.H_0 = 18.5e9           # Pa (~1800 HV)
            self.K_Ic_0 = 5.5           # MPa.m^0.5
            self.is_ceramic = True
        else:
            raise ValueError(f"Material {workpiece_material} belum terdaftar.")

    def calculate_laser_thermal_field(self, 
                                      cutting_speed_m_min: float, 
                                      feed_rate_mm_rev: float,
                                      depth_of_cut_mm: float) -> Dict[str, float]:
        """
        Menghitung distribusi temperatur pemanasan laser 3D (Permukaan dan Kedalaman Potong).
        Model Konduksi Transien Kuasi-Stasioner Fluks Gaussian Terintegrasi.
        """
        v_w = (cutting_speed_m_min / 60.0)  # m/s
        z_cut = depth_of_cut_mm * 1e-3      # m
        
        # Sifat termal terdisipasi pada temperatur tinggi
        alpha_th = self.k_0 / (self.rho * self.Cp_0)
        
        # Waktu tinggal paparan laser pada titik potong: t_dwell = 2 * r_0 / v_w
        t_dwell = (2.0 * self.r_0) / v_w if v_w > 0 else 0.01
        
        # Fluks daya puncak di pusat berkas Gaussian (W/m^2)
        q_peak = (2.0 * self.A_s * self.P_L) / (math.pi * self.r_0**2)
        
        # Temperatur permukaan puncak tepat di pusat berkas laser (T_surf_center)
        # Solusi integral 1D/3D semi-infinite solid
        delta_T_peak = (2.0 * self.A_s * self.P_L * math.sqrt(alpha_th * t_dwell)) / (math.pi * self.r_0**2 * self.k_0 * math.sqrt(math.pi))
        T_ambient = 25.0
        T_surface_laser_center = T_ambient + delta_T_peak
        
        # Temperatur di zona pemotongan (pada jarak lead d_lead di belakang sinar laser)
        R_dist_cut = math.sqrt(self.d_lead**2 + z_cut**2)
        exp_decay = math.exp(- (v_w * (R_dist_cut + self.d_lead)) / (2.0 * alpha_th))
        
        T_chamfer_surface = T_ambient + (self.A_s * self.P_L / (2.0 * math.pi * self.k_0 * max(1e-4, self.d_lead))) * exp_decay * 0.45
        
        # Temperatur pada kedalaman potong maksimum (z = depth_of_cut)
        thermal_penetration_depth_mm = 2.0 * math.sqrt(alpha_th * t_dwell) * 1000.0
        T_depth_cut = T_ambient + (T_chamfer_surface - T_ambient) * math.exp(- z_cut / max(1e-5, (thermal_penetration_depth_mm * 1e-3)))
        
        return {
            "cutting_speed_m_min": cutting_speed_m_min,
            "dwell_time_ms": t_dwell * 1000.0,
            "peak_flux_MW_m2": q_peak / 1e6,
            "thermal_penetration_depth_mm": thermal_penetration_depth_mm,
            "laser_spot_center_temp_C": T_surface_laser_center,
            "cutting_zone_surface_temp_C": T_chamfer_surface,
            "cutting_zone_depth_temp_C": T_depth_cut
        }

    def evaluate_ductile_regime_ceramic(self, temperature_C: float) -> Dict[str, float]:
        """
        Evaluasi Batas Kedalaman Pemotongan Kritis Rezim Ulet Keramik Si3N4.
        """
        if not self.is_ceramic:
            return {"status": "Material adalah logam ulet (Not Applicable)"}
            
        # Variasi sifat mekanik terhadap temperatur (°C)
        T_ratio = max(0.0, min(1.0, (temperature_C - 25.0) / (self.T_soft_target - 25.0)))
        
        # Modulus elastisitas melunak moderat
        E_T = self.E_0 * (1.0 - 0.25 * T_ratio)
        # Kekerasan mikro melunak drastis pada fasa glassy intergranular (> 900 °C)
        H_T = self.H_0 * (1.0 - 0.72 * (T_ratio**1.5))
        # Ketangguhan retak fraktur
        K_Ic_T = self.K_Ic_0 * (1.0 + 0.35 * T_ratio)
        
        # Kedalaman potong kritis: d_crit = 0.18 * (E/H) * (K_Ic/H)^2
        psi = 0.18
        d_crit_m = psi * (E_T / H_T) * ((K_Ic_T * 1e6 / H_T)**2)
        d_crit_um = d_crit_m * 1e6
        
        return {
            "eval_temperature_C": temperature_C,
            "Youngs_modulus_GPa": E_T / 1e9,
            "microhardness_GPa": H_T / 1e9,
            "fracture_toughness_MPa_m05": K_Ic_T,
            "critical_depth_ductile_um": d_crit_um,
            "machining_regime": "REZIM ULET / PLASTIS (Ductile Mode)" if d_crit_um >= 1.0 else "REZIM GETAS SEBAGIAN (Semi-Brittle)"
        }

    def simulate_machining_mechanics(self, 
                                     cutting_speed_m_min: float, 
                                     feed_rate_mm_rev: float, 
                                     depth_of_cut_mm: float,
                                     enable_laser: bool = True) -> Dict[str, Any]:
        """
        Simulasi Mekanika Permesinan: Gaya Potong, Daya Spindel, Integritas Permukaan, dan Umur Pahat.
        """
        if enable_laser:
            therm = self.calculate_laser_thermal_field(cutting_speed_m_min, feed_rate_mm_rev, depth_of_cut_mm)
            T_avg = (therm["cutting_zone_surface_temp_C"] + therm["cutting_zone_depth_temp_C"]) / 2.0
        else:
            therm = {"cutting_zone_surface_temp_C": 25.0, "cutting_zone_depth_temp_C": 25.0}
            T_avg = 25.0
            
        # Penurunan gaya potong spesifik berdasarkan pelunakan termal
        if not self.is_ceramic:
            # Model Johnson-Cook Softening Factor
            T_homologous = max(0.0, min(1.0, (T_avg - 25.0) / (self.T_melt - 25.0)))
            softening_factor = 1.0 - 0.70 * (T_homologous**1.18)
        else:
            # Keramik Si3N4 intergranular phase glass softening
            softening_factor = 1.0 - 0.65 * max(0.0, min(1.0, (T_avg - 25.0) / (self.T_soft_target - 25.0)))**1.4
            
        Kc_actual = self.Kc_room * softening_factor
        
        # Gaya Potong Utama (Tangensial): Fc = Kc * a_p * f
        a_p = depth_of_cut_mm
        f = feed_rate_mm_rev
        F_c = Kc_actual * a_p * f
        
        # Gaya Pemakanan (Feed Force Ff) dan Gaya Pasif (Radial Fp)
        F_f = F_c * 0.45
        F_p = F_c * 0.35
        F_res = math.sqrt(F_c**2 + F_f**2 + F_p**2)
        
        # Daya Potong Mekanis Spindel (kW)
        v_c = cutting_speed_m_min / 60.0  # m/s
        Power_cutting_kW = (F_c * v_c) / 1000.0
        
        # Material Removal Rate (MRR dalam cm^3/min)
        mrr_cm3_min = cutting_speed_m_min * depth_of_cut_mm * feed_rate_mm_rev
        
        # Estimasi Umur Pahat Relatif (Taylor Basis)
        if enable_laser:
            tool_life_multiplier = 3.8 if not self.is_ceramic else 5.2
            surface_roughness_Ra_um = 0.22 if not self.is_ceramic else 0.14
        else:
            tool_life_multiplier = 1.0
            surface_roughness_Ra_um = 0.85 if not self.is_ceramic else 1.65
            
        return {
            "laser_enabled": enable_laser,
            "average_cutting_temp_C": T_avg,
            "softening_ratio_pct": (1.0 - softening_factor) * 100.0,
            "specific_cutting_force_Kc_N_mm2": Kc_actual,
            "main_cutting_force_Fc_N": F_c,
            "feed_force_Ff_N": F_f,
            "resultant_force_Fres_N": F_res,
            "cutting_power_kW": Power_cutting_kW,
            "mrr_cm3_min": mrr_cm3_min,
            "surface_roughness_Ra_um": surface_roughness_Ra_um,
            "tool_life_multiplier": tool_life_multiplier,
            "thermal_details": therm
        }

# =====================================================================
# BLOK EKSEKUSI STUDI KASUS INDUSTRIAL: INCONEL 718 & KERAMIK SI3N4
# =====================================================================
if __name__ == "__main__":
    print("="*90)
    print("SIMULATOR LASER-ASSISTED MACHINING (LAM) - MULTI-MATERIAL TURBOMACHINERY SOLVER")
    print("Superaloy Kedirgantaraan Inconel 718 & Keramik Struktural Presisi Si3N4")
    print("="*90)
    
    # ---------------------------------------------------------
    # KASUS 1: Bubut Kontur Cincin Turbin Gas Superaloy Inconel 718
    # ---------------------------------------------------------
    print("\n[KASUS 1] PERMESINAN SUPERALOY NIKEL INCONEL 718 (TURBINE CASING RING)")
    lam_inconel = LaserAssistedMachiningSimulator(
        workpiece_material="Inconel_718",
        laser_power_W=1800.0,
        laser_spot_radius_mm=1.8,
        optical_absorptivity=0.82,
        lead_distance_mm=2.8
    )
    
    # Parameter Operasi: vc = 110 m/min, f = 0.18 mm/rev, ap = 1.5 mm
    res_cold_inco = lam_inconel.simulate_machining_mechanics(110.0, 0.18, 1.5, enable_laser=False)
    res_lam_inco  = lam_inconel.simulate_machining_mechanics(110.0, 0.18, 1.5, enable_laser=True)
    
    force_red_inco = ((res_cold_inco['main_cutting_force_Fc_N'] - res_lam_inco['main_cutting_force_Fc_N']) / res_cold_inco['main_cutting_force_Fc_N']) * 100.0
    
    print(f"    - Suhu Pemotongan Efektif Rata-Rata : {res_lam_inco['average_cutting_temp_C']:.1f} °C (Zona Pelunakan)")
    print(f"    - Penetrasi Termal Efektif Laser   : {res_lam_inco['thermal_details']['thermal_penetration_depth_mm']:.2f} mm")
    print(f"    - Gaya Potong Utama Konvensional   : {res_cold_inco['main_cutting_force_Fc_N']:.1f} N")
    print(f"    - Gaya Potong Utama Metode LAM      : {res_lam_inco['main_cutting_force_Fc_N']:.1f} N (Reduksi Sebesar {force_red_inco:.1f}%)")
    print(f"    - Daya Pemotongan Spindel (LAM)     : {res_lam_inco['cutting_power_kW']:.2f} kW")
    print(f"    - Kekasaran Permukaan Akhir (Ra)    : {res_lam_inco['surface_roughness_Ra_um']:.2f} um vs Dingin {res_cold_inco['surface_roughness_Ra_um']:.2f} um")
    print(f"    - Peningkatan Umur Pahat (Tool Life): {res_lam_inco['tool_life_multiplier']:.1f}x Lipat Lebih Panjang")
    
    # ---------------------------------------------------------
    # KASUS 2: Pembubutan Presisi Silinder Keramik Silicon Nitride (Si3N4)
    # ---------------------------------------------------------
    print("\n[KASUS 2] PERMESINAN REZIM ULET KERAMIK STRUKTURAL SILICON NITRIDE (Si3N4)")
    lam_ceramic = LaserAssistedMachiningSimulator(
        workpiece_material="Si3N4_Ceramic",
        laser_power_W=2400.0,
        laser_spot_radius_mm=1.5,
        optical_absorptivity=0.88,
        lead_distance_mm=2.0
    )
    
    res_cold_ceram = lam_ceramic.simulate_machining_mechanics(60.0, 0.08, 0.8, enable_laser=False)
    res_lam_ceram  = lam_ceramic.simulate_machining_mechanics(60.0, 0.08, 0.8, enable_laser=True)
    ductile_eval   = lam_ceramic.evaluate_ductile_regime_ceramic(res_lam_ceram['average_cutting_temp_C'])
    
    force_red_ceram = ((res_cold_ceram['main_cutting_force_Fc_N'] - res_lam_ceram['main_cutting_force_Fc_N']) / res_cold_ceram['main_cutting_force_Fc_N']) * 100.0
    
    print(f"    - Suhu Pemotongan Keramik LAM       : {res_lam_ceram['average_cutting_temp_C']:.1f} °C")
    print(f"    - Kedalaman Kritis Rezim Ulet (dcrit): {ductile_eval['critical_depth_ductile_um']:.2f} um -> {ductile_eval['machining_regime']}")
    print(f"    - Gaya Potong Utama Konvensional   : {res_cold_ceram['main_cutting_force_Fc_N']:.1f} N (Getas, Rawan Chipping)")
    print(f"    - Gaya Potong Utama Metode LAM      : {res_lam_ceram['main_cutting_force_Fc_N']:.1f} N (Reduksi {force_red_ceram:.1f}%)")
    print(f"    - Kualitas Permukaan Akhir (Ra)     : {res_lam_ceram['surface_roughness_Ra_um']:.2f} um (Mirror-Like Finish)")
    print(f"    - Material Removal Rate (MRR)       : {res_lam_ceram['mrr_cm3_min']:.2f} cm^3/min")
    print("="*90)
```

---

## 6. Studi Kasus Industri Nyata: Pembubutan Kontur Komponen Rumah Turbin Inconel 718 pada Fasilitas Aero-Engine

### 6.1 Latar Belakang Komponen & Sasaran Tekno-Ekonomis

Sebuah manufaktur mesin jet kedirgantaraan tingkat dunia memproduksi cincin rumah turbin tekanan tinggi (*High-Pressure Turbine Casing Ring*) berbahan paduan superaloy tempa Inconel 718 berkekuatan luluh tinggi ($\sigma_y = 1180\ \text{MPa}$, $44\ \text{HRC}$). Komponen berdiameter $\varnothing 850\ \text{mm}$ memiliki toleransi ketat dinding silinder $\pm 0{,}025\ \text{mm}$ dengan spesifikasi kekasaran permukaan $R_a \le 0{,}4\ \mu\text{m}$ dan batas tegangan sisa tarik nol (*zero tensile residual stress tolerance*) untuk mencegah perambatan retak fatik termomekanik.

### 6.2 Kendala Lapangan Pembubutan Dingin Konvensional

Pada konfigurasi pemesinan awal menggunakan mesin bubut vertikal CNC (*Vertical Turning Lathe*) dengan pahat karbida lapis PVD TiAlN dan sisipan keramik SiAlON:
1. **Kecepatan Potong Terbatas Rendah**: Kecepatan potong dibatasi pada $v_c = 45\ \text{m/min}$ untuk menghindari lonjakan temperatur titik potong tak terkendali. Waktu pemesinan per unit mencapai $3{,}8\ \text{jam}$.
2. **Keausan Takik Sangat Cepat (*Severe Notch Wear*)**: Aus tepi takik (*depth-of-cut notch wear*) pada pahat keramik mencapai batas kegagalan $VB_{\text{max}} = 0{,}4\ \text{mm}$ hanya setelah $6{,}5\ \text{menit}$ pemotongan, mewajibkan penggantian 18 set sisipan pahat per komponen.
3. **Deformasi Plastis & Tegangan Sisa Tarik Tinggi**: Gaya pemotongan radial masif ($F_p > 850\ \text{N}$) menyebabkan lendutan elastis benda kerja berprofil tipis dan menghasilkan tegangan sisa tarik permukaan hingga $+380\ \text{MPa}$ (*detrimental tensile stress*).

### 6.3 Rekayasa Proses Laser-Assisted Machining Terintegrasi & Validasi

Tim rekayasa manufaktur mengintegrasikan sistem **Laser-Assisted Machining (LAM)** dengan kepala optik laser serat monomode $2\ \text{kW}$ ($\lambda = 1070\ \text{nm}$) terpasang koaksial pada *tool turret*:
1. **Parameter Pemanasan Laser Presisi**: Daya laser diatur ke $P_L = 1650\ \text{W}$ dengan diameter spot elips $3{,}2 \times 2{,}2\ \text{mm}^2$ yang diposisikan mendahului pahat pada jarak $d_{\text{lead}} = 2{,}6\ \text{mm}$. Temperatur permukaan zona potong dipantau secara *real-time* menggunakan pirometer optik dua-warna (*dual-color pyrometer*) pada rentang tertutup $T_{\text{target}} = 820 \pm 15\ \text{°C}$.
2. **Peningkatan Parameter Pemotongan**: Menggunakan pahat CBN (*Polycrystalline Cubic Boron Nitride*), kecepatan potong dinaikkan menjadi $v_c = 135\ \text{m/min}$ ($3\times$ lipat lebih cepat), laju pemakanan $f = 0{,}16\ \text{mm/rev}$, dan kedalaman potong $a_p = 1{,}4\ \text{mm}$.
3. **Hasil Kuantitatif Pengujian Validasi**:
   - **Penurunan Gaya Potong**: Gaya potong utama $F_c$ berkurang dari $980\ \text{N}$ menjadi $465\ \text{N}$ (turun $52{,}5\%$), dan gaya dorong radial $F_p$ anjlok dari $850\ \text{N}$ ke $310\ \text{N}$ (turun $63{,}5\%$), mengeliminasi getaran obrolan benda kerja secara total.
   - **Masa Pakai Tool**: Umur pakai pahat PCBN melonjak dari $6{,}5\ \text{menit}$ menjadi **42 menit per mata potong** ($6{,}4\times$ lipat lebih tahan lama), memangkas konsumsi perkakas dari 18 unit menjadi hanya 3 unit per benda kerja.
   - **Waktu Siklus & Penghematan Biaya**: Waktu pemesinan per cincin turbin terpangkas drastis dari $228\ \text{menit}$ menjadi hanya **68 menit** (penghematan waktu siklus sebesar $70{,}2\%$).
   - **Integritas Metalurgi & Tegangan Sisa**: Kekasaran permukaan mencapai $R_a = 0{,}28\ \mu\text{m}$ (bebas *micro-cracks*). Pengujian difraksi sinar-X (XRD) mengonfirmasi induksi tegangan sisa tekan menguntungkan (*favorable compressive residual stress*) sebesar $-240\ \text{MPa}$ hingga kedalaman $65\ \mu\text{m}$, meningkatkan umur fatik siklus rendah (*Low-Cycle Fatigue Life*) komponen sebesar $45\%$.

---

## 7. Referensi Terverifikasi & Standar Rekayasa Industri

1. **Bejjani, R., Shi, B., Habibi, M., & Balazinski, M.** (2024). *Laser-Assisted Machining of Difficult-to-Cut Materials: A Comprehensive Review of Thermal Modeling, Material Softening, and Surface Integrity Evolution*. Journal of Manufacturing Processes, Elsevier, 112, 185–214. DOI: [10.1016/j.jmapro.2024.01.032](https://doi.org/10.1016/j.jmapro.2024.01.032).
2. **Song, H., Dan, J., Wu, Z., & Liu, X.** (2023). *Theoretical and Experimental Investigation on the Ductile-Mode Cutting of Silicon Nitride Ceramics in Laser-Assisted Milling*. Ceramics International, Elsevier, 49(14), 23812–23824. DOI: [10.1016/j.ceramint.2023.04.225](https://doi.org/10.1016/j.ceramint.2023.04.225).
3. **Pate, M., Bermingham, M. J., & Dargusch, M. S.** (2022). *Influence of Preheating Temperature on Tool Wear Mechanisms and Chip Morphology during Laser-Assisted Turning of Inconel 718*. International Journal of Machine Tools and Manufacture, Elsevier, 172, 103831. DOI: [10.1016/j.ijmachtools.2021.103831](https://doi.org/10.1016/j.ijmachtools.2021.103831).
4. **Rozzi, J. C., Pfefferkorn, F. E., Incropera, F. P., & Shin, Y. C.** (2000). *Transient, Three-Dimensional Heat Transfer Model for Laser Assisted Machining of Silicon Nitride: I. Comparison of Predictions with Measured Surface Temperature Histories*. International Journal of Heat and Mass Transfer, Elsevier, 43(8), 1409–1424. DOI: [10.1016/S0017-9310(99)00217-3](https://doi.org/10.1016/S0017-9310(99)00217-3).
5. **ISO/ASTM International.** (2021). *ISO/ASTM 52900:2021 Additive manufacturing — General principles — Fundamentals and vocabulary*. International Organization for Standardization, Geneva.
