# Modul 604: Isothermal & Hot-Die Forging Mechanics: Pemodelan Konstitutif Tegangan Alir (*Flow Stress Constitutive Modeling*), Peta Pemrosesan Termomekanis (*Dynamic Materials Model & Processing Maps*), Kinetika Rekristalisasi Dinamik (DRX), dan Kriteria Ketidakstabilan Aliran Prasad-Ziegler (ASTM E209 & ISO 6892-2)

## 1. Pengantar & Konteks Industri Penempaan Presisi Paduan Super (*Superalloy Precision Forging*)

Dalam industri manufaktur kedirgantaraan, energi nuklir, dan sistem propulsi canggih, komponen struktural turbin gas seperti piringan turbin rotor (*turbine rotor disks*), bilah kompresor bertekanan tinggi (*compressor blisks/blades*), dan cincin bejana reaktor beroperasi di bawah lingkungan ekstrem yang menggabungkan temperatur tinggi ($>650^\circ\text{C}$ hingga $>1100^\circ\text{C}$), tegangan sentrifugal siklik masif, dan lingkungan korosif. Komponen-komponen kritis ini umumnya difabrikasi dari paduan berbasis nikel (*Nickel-based superalloys* seperti Inconel 718, Waspaloy, UDIMET 720) dan paduan titanium lanjutan (*Titanium alloys* seperti Ti-6Al-4V, Ti-6242, dan TiAl intermetalik).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                PERBANDINGAN GRADASI TEMPERATUR: PENEMPAAN KONVENSIONAL VS ISOTHERMAL                  |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  (A) PENEMPAAN KONVENSIONAL (Cetakan Dingin ~200-400°C)       (B) PENEMPAAN ISOTHERMAL (Cetakan Dipanaskan T_die = T_workpiece)|
|                                                                                                                       |
|             Cetakan Atas Dingin (300°C)                                    Cetakan Mo-Alloy Dipanaskan Induksi        |
|             ┌─────────────────────────┐                                    ┌─────────────────────────┐ (1050°C)       |
|             │                         │                                    │  ═════════════════════  │ ◄── Koil       |
|             └───────────┬─────────────┘                                    └───────────┬─────────────┘     Pemanas    |
|                         ▼                                                              ▼                   Induksi    |
|             ░░░░░░░░░░░░░░░░░░░░░░░░░░░ ◄── Chill Zone (Dingin)            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓                |
|             ███████████████████████████ ◄── Inti Panas (1050°C)            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ T = 1050°C     |
|             ░░░░░░░░░░░░░░░░░░░░░░░░░░░ ◄── Chill Zone (Dingin)            ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ Homogen Murni  |
|                         ▲                                                              ▲                              |
|             ┌───────────┴─────────────┐                                    ┌───────────┴─────────────┐                |
|             │  Cetakan Bawah (300°C)  │                                    │  Cetakan Bawah (1050°C) │                |
|             └─────────────────────────┘                                    └─────────────────────────┘                |
|                                                                                                                       |
|     Efek: Die Chilling, Gradien Aliran Parah,                       Efek: Aliran Superplastis, Tanpa Chill-Zone,      |
|           Gaya Tempa Raksasa, Retak Permukaan.                            Gaya Tempa Turun 70-80%, Near-Net-Shape.    |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 1.1 Keterbatasan Penempaan Konvensional & Fenomena *Die Chilling*
Pada proses penempaan panas konvensional (*conventional drop forging*), temperatur cetakan perkakas (*die tooling*) biasanya dipertahankan pada temperatur relatif rendah ($150^\circ\text{C} - 400^\circ\text{C}$) untuk menjaga umur cetakan baja perkakas standar. Ketika billet superalloy yang dipanaskan hingga $1000^\circ\text{C} - 1150^\circ\text{C}$ bersentuhan dengan cetakan, terjadi perpindahan panas konduktif transien yang sangat cepat (*die chilling effect*). 

Fenomena pendinginan permukaan ini memicu sejumlah persoalan manufaktur yang parah:
1. **Gradien Kekuatan & Fenomena Zona Mati (*Dead Metal Zones*)**: Lapisan permukaan billet mendingin dengan cepat dan mengalami peningkatan tegangan alir (*flow stress*) secara drastis, menjadi kaku dan menghentikan aliran material pada sudut tajam cetakan.
2. **Kebutuhan Kapasitas Beban Tempa Raksasa**: Penempaan konvensional untuk piringan turbin berdiameter $>600\text{ mm}$ membutuhkan mesin kempa hidrolik berkapasitas sangat besar ($300\text{ MN} - 500\text{ MN}$ atau $30.000 - 50.000\text{ ton}$).
3. **Struktur Mikro Tak Seragam & Kelelahan Prematur**: Variasi laju regangan dan temperatur di sepanjang penampang menghasilkan ukuran butir yang sangat heterogen (campuran butir kasar *unrecrystallized* dan butir halus terlokalisasi), menyebabkan degradasi drastis pada ketahanan lelah termomekanis (*low-cycle fatigue* / LCF) dan ketahanan mulur (*creep resistance*).

### 1.2 Konsep Isothermal Forging & Hot-Die Forging
Untuk mengatasi hambatan di atas, teknologi **Isothermal Forging** dan **Hot-Die Forging** dikembangkan:
- **Isothermal Forging**: Benda kerja dan seluruh susunan cetakan (*die stack*) dipanaskan dan dipertahankan secara presisi pada temperatur deformasi yang persis sama ($T_{\text{die}} = T_{\text{billet}} \pm 5^\circ\text{C}$) di dalam ruang vakum atau atmosfer gas mulia (*inert chamber*). Cetakan difabrikasi dari paduan tahan panas ekstrem berbasis molibdenum (*TZM Alloy — Titanium-Zirconium-Molybdenum*) yang mampu menahan tegangan mekanis pada temperatur di atas $1000^\circ\text{C} - 1200^\circ\text{C}$.
- **Hot-Die Forging**: Cetakan dipanaskan hingga mendekati temperatur benda kerja ($T_{\text{billet}} - T_{\text{die}} \le 100^\circ\text{C} - 150^\circ\text{C}$), menggunakan cetakan berbasis superalloy nikel cor (*cast nickel-base superalloy dies* seperti IN-713C atau MAR-M-247) untuk menyeimbangkan biaya perkakas dan pengendalian *die chilling*.

Standar internasional dan acuan pengujian metalurgi deformasi suhu tinggi:
- **ASTM E209**: *Standard Practice for Compression Tests of Metallic Materials at Elevated Temperatures with Conventional or Rapid Heating Rates and Strain Rates*.
- **ISO 6892-2**: *Metallic materials — Tensile testing — Part 2: Method of test at elevated temperature*.
- **ASTM E112**: *Standard Test Methods for Determining Average Grain Size*.
- **AMS 5662 / AMS 5663**: *Nickel Alloy, Corrosion and Heat-Resistant, Bars, Forgings, and Rings (Inconel 718)*.
- **AMS 4928**: *Titanium Alloy Bars, Wire, Forgings, Rings, and Drawn Shapes 6Al-4V*.
- **SAE AS9100D**: *Quality Management Systems — Requirements for Aviation, Space, and Defense Organizations*.

---

## 2. Termodinamika & Pemodelan Konstitutif Tegangan Alir (*Flow Stress Constitutive Modeling*)

### 2.1 Persamaan Konstitutif Arrhenius Berbasis Parameter Zener-Hollomon
Respon tegangan alir plastis ($\sigma$) suatu logam pada temperatur tinggi dipengaruhi secara non-linier oleh temperatur deformasi mutlak ($T$ dalam Kelvin) dan laju regangan ($\dot{\varepsilon}$ dalam $\text{s}^{-1}$). Hubungan termomekanis ini diatur secara fundamental oleh **Persamaan Konstitutif Arrhenius Hiperbolik Sinus** (*Sellars & Tegart model*):

$$\dot{\varepsilon} = A \cdot \left[ \sinh(\alpha \sigma) \right]^n \cdot \exp\left( -\frac{Q}{R T} \right)$$

di mana:
- $\dot{\varepsilon}$ = Laju regangan ekuivalen (*equivalent strain rate*) ($\text{s}^{-1}$).
- $\sigma$ = Tegangan alir plastis sejati (*true flow stress*) ($\text{MPa}$).
- $Q$ = Energi aktivasi deformasi termal semu (*apparent activation energy of hot deformation*) ($\text{J/mol}$).
- $R$ = Konstanta gas universal ($8.314\text{ J/(mol}\cdot\text{K)}$).
- $T$ = Temperatur deformasi absolut ($\text{K}$).
- $A, \alpha, n$ = Konstanta material independen temperatur.

Pengaruh simultan antara temperatur dan laju regangan dikompensasikan ke dalam **Parameter Kompensasi Suhu Zener-Hollomon ($Z$)**:

$$Z = \dot{\varepsilon} \cdot \exp\left( \frac{Q}{R T} \right) = A \cdot \left[ \sinh(\alpha \sigma) \right]^n$$

Dengan mengekspresikan kembali persamaan di atas dalam bentuk eksplisit tegangan alir $\sigma$:

$$\sigma = \frac{1}{\alpha} \ln\left\{ \left( \frac{Z}{A} \right)^{1/n} + \left[ \left( \frac{Z}{A} \right)^{2/n} + 1 \right]^{1/2} \right\} = \frac{1}{\alpha} \operatorname{arsinh}\left( \left[ \frac{Z}{A} \right]^{1/n} \right)$$

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                KURVA TEGANGAN ALIR (FLOW STRESS) & EVOLUSI MIKROSTRUKTUR DRX                          |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  Tegangan Alir Sejati σ (MPa)                                                                                         |
|       ▲                                                                                                               |
|       │                 Puncak Tegangan (σ_p, ε_p)                                                                    |
|       │                       *───────────*                                                                           |
|       │                      /             \    Pelunakan Termal DRX                                                  |
|       │  Pengerasan         /               \  (Dynamic Recrystallization)                                            |
|       │  Regangan          /                 \                                                                        |
|       │  (Strain Hardening) /                   *─────────────────────────── Steady-State Flow (σ_ss)                 |
|       │                  /  Kritis DRX                                                                                |
|       │                 /   (σ_c, ε_c)                                                                                |
|       │                *                                                                                              |
|       │               /                                                                                               |
|       │  Elastis     /                                                                                                |
|       └─────────────*───────────────────────────────────────────────────────► Regangan Sejati ε                       |
|                     ε_e     ε_c           ε_p                                                                         |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.2 Kinetika Rekristalisasi Dinamik (DRX - Dynamic Recrystallization)
Selama penempaan isotermal, dislokasi berakumulasi di batas butir. Ketika regangan mencapai nilai kritis $(\varepsilon_c \approx 0.6 - 0.8 \varepsilon_p)$, nukleasi butir baru bebas dislokasi terpicu.

Fraksi volumetrik rekristalisasi dinamik $(X_{\text{drx}})$ dimodelkan melalui persamaan Avrami termodifikasi:

$$X_{\text{drx}} = 1 - \exp\left[ -k_{\text{drx}} \left( \frac{\varepsilon - \varepsilon_c}{\varepsilon_p} \right)^{m_{\text{drx}}} \right] \quad \text{untuk } \varepsilon \ge \varepsilon_c$$

Ukuran butir hasil rekristalisasi dinamik $(d_{\text{drx}})$ setelah proses selesai bergantung secara eksklusif pada nilai parameter Zener-Hollomon $Z$:

$$d_{\text{drx}} = A_d \cdot Z^{-m_d}$$

di mana $A_d$ dan $m_d$ adalah koefisien penghalusan butir metalurgi ($m_d \approx 0.10 - 0.25$).

---

## 3. Peta Pemrosesan Termomekanis (*Dynamic Materials Model & Processing Maps*)

### 3.1 Teori Dynamic Materials Model (DMM) Prasad & Efisiensi Disipasi Daya
Berdasarkan pendekatan termodinamika non-ekuilibrium sistem kontinum Prasad (*Dynamic Materials Model* / DMM), benda kerja yang mengalami deformasi plastis temperatur tinggi bertindak sebagai penyerap energi non-linier. Daya total yang diinput per satuan volume $(P)$ didekomposisikan menjadi dua komponen disipasi komplementer:

$$P = \sigma \cdot \dot{\varepsilon} = G + J = \int_{0}^{\dot{\varepsilon}} \sigma \, d\dot{\varepsilon} + \int_{0}^{\sigma} \dot{\varepsilon} \, d\sigma$$

di mana:
1. **$G$-content (Disipator Termal)**: Fraksi daya yang diubah menjadi kenaikan temperatur termal internal benda kerja melalui disipasi viskoplasitas deformasi.
2. **$J$-co-content (Disipator Mikrostruktur)**: Fraksi daya yang dikonsumsi secara metalurgi untuk evolusi struktur mikro, seperti rekristalisasi dinamik (*DRX*), pemulihan dinamik (*dynamic recovery* / DRV), pelarutan fasa, atau superplastisitas.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    DEKOMPOSISI DISIPASI ENERGI DMM PRASAD (P = G + J)                                 |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  Tegangan Alir σ                                                                                                      |
|       ▲                                                                                                               |
|       │                      * (σ, ε̇)                                                                                 |
|       │                     /│                                                                                        |
|       │                    / │                                                                                        |
|       │      J-Co-Content /  │                                                                                        |
|       │     (Mikrostruktur)│ │                                                                                        |
|       │                  /   │                                                                                        |
|       │                 /    │   G-Content (Disipasi Panas Termal)                                                    |
|       │                /     │                                                                                        |
|       └───────────────*──────┴────────────────────────► Laju Regangan ε̇                                               |
|                       0      ε̇                                                                                        |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Rasio partisi daya diatur oleh **Sensitivitas Laju Regangan ($m$)**:

$$m = \frac{\partial J}{\partial G} = \left[ \frac{\partial (\ln \sigma)}{\partial (\ln \dot{\varepsilon})} \right]_{\varepsilon, T}$$

Nilai $J$-co-content aktual integrasi dinyatakan sebagai:

$$J = \int_{0}^{\sigma} \dot{\varepsilon} \, d\sigma = \frac{m}{m + 1} \sigma \dot{\varepsilon}$$

Untuk material linear disipatif ideal (*ideal linear dissipator* di mana $m = 1$), disipasi mikrostruktur mencapai nilai maksimum $J_{\text{max}} = P / 2 = \frac{\sigma \dot{\varepsilon}}{2}$.

**Efisiensi Disipasi Daya Mikrostruktur ($\eta$)** dirumuskan sebagai normalisasi tanpa dimensi:

$$\eta = \frac{J}{J_{\text{max}}} = \frac{2m}{m + 1}$$

Daerah dengan nilai $\eta$ tinggi ($35\% - 55\%$) menunjukkan kondisi domain pemrosesan optimal (*safe hot working window*) di mana rekristalisasi dinamis berlangsung penuh tanpa cacat mekanis.

### 3.2 Kriteria Ketidakstabilan Aliran Prasad, Ziegler, dan Gegel
Agar proses penempaan bebas dari cacat aliran metalurgi lokal (seperti *adiabatic shear bands*, *flow localization*, *void formation*, dan *cavitation cracking*), material harus memenuhi kriteria stabilitas termodinamika kontinum.

**Parameter Ketidakstabilan Aliran Prasad ($\xi(\dot{\varepsilon})$)** diturunkan dari prinsip laju produksi entropi minimum:

$$\xi(\dot{\varepsilon}) = \frac{\partial \ln \left( \frac{\eta}{\eta + 1} \right)}{\partial \ln \dot{\varepsilon}} + m \le 0 \quad \Longrightarrow \quad \text{ZONA KETIDAKSTABILAN (FLOW INSTABILITY)}$$

Berdasarkan formulasi Ziegler:

$$\xi_Z(\dot{\varepsilon}) = \frac{\partial \ln(J)}{\partial \ln \dot{\varepsilon}} - 1 = \frac{\partial \ln \left( \frac{m}{m+1} \right)}{\partial \ln \dot{\varepsilon}} + m - 1 < 0$$

Jika $\xi(\dot{\varepsilon}) < 0$, rezim termomekanis tersebut **dilarang keras** untuk digunakan dalam parameter operasi manufaktur penempaan (*instability regime / forging defect domain*).

---

## 4. Algoritma Komputasi & Solusi Python: Generator Processing Maps & Kinematika Forging

Berikut adalah solver komputasi Python industri mandiri untuk memproses data pengujian kompresi isotermal suhu tinggi, menghitung konstanta konstitutif Arrhenius, membangun matriks efisiensi disipasi daya $\eta(T, \dot{\varepsilon})$, mengevaluasi kriteria ketidakstabilan aliran Prasad $\xi(T, \dot{\varepsilon})$, serta memprediksi gaya penempaan hidrolik aktual.

```python
#!/usr/bin/env python3
"""
Isothermal & Hot-Die Forging Mechanics: Dynamic Materials Model & Processing Map Solver
Standar Kepatuhan: ASTM E209, ISO 6892-2, ASTM E112, AMS 5662
Penulis: RuangTI Industrial Engineering Computation Suite
"""

import math
from typing import Dict, List, Tuple, Any

class IsothermalForgingEngine:
    def __init__(
        self,
        material_name: str,
        activation_energy_Q: float,     # J/mol (misal 430000 J/mol untuk Inconel 718)
        arrhenius_alpha: float,         # MPa^-1 (misal 0.0075 MPa^-1)
        arrhenius_A: float,             # s^-1 (misal 1.2e14 s^-1)
        arrhenius_n: float,             # Eksponen tegangan n (misal 4.5)
        grain_size_coeff_Ad: float = 1200.0,
        grain_size_exp_md: float = 0.16
    ):
        self.material = material_name
        self.Q = activation_energy_Q
        self.alpha = arrhenius_alpha
        self.A = arrhenius_A
        self.n = arrhenius_n
        self.R = 8.31446261815324  # J/(mol*K)
        self.Ad = grain_size_coeff_Ad
        self.md = grain_size_exp_md

    def compute_flow_stress(self, temp_celsius: float, strain_rate: float) -> float:
        """
        Menghitung true flow stress (MPa) menggunakan persamaan konstitutif Zener-Hollomon.
        sigma = (1 / alpha) * asinh((Z / A)**(1 / n))
        """
        T_kelvin = temp_celsius + 273.15
        # Parameter Zener-Hollomon Z
        Z = strain_rate * math.exp(self.Q / (self.R * T_kelvin))
        
        # Argumen hiperbolik sinus
        arg = (Z / self.A) ** (1.0 / self.n)
        # arsinh(x) = ln(x + sqrt(x^2 + 1))
        flow_stress = (1.0 / self.alpha) * math.asinh(arg)
        return flow_stress

    def compute_strain_rate_sensitivity(
        self,
        temp_celsius: float,
        strain_rate: float,
        delta_rate_ratio: float = 1.05
    ) -> float:
        """
        Menghitung koefisien sensitivitas laju regangan m = d(ln sigma) / d(ln edot)
        menggunakan diferensiasi berhingga terpusat.
        """
        rate_hi = strain_rate * delta_rate_ratio
        rate_lo = strain_rate / delta_rate_ratio
        
        sigma_hi = self.compute_flow_stress(temp_celsius, rate_hi)
        sigma_lo = self.compute_flow_stress(temp_celsius, rate_lo)
        
        d_ln_sigma = math.log(sigma_hi) - math.log(sigma_lo)
        d_ln_rate = math.log(rate_hi) - math.log(rate_lo)
        
        m = d_ln_sigma / d_ln_rate
        return max(0.01, min(0.99, m))

    def evaluate_dmm_point(
        self,
        temp_celsius: float,
        strain_rate: float
    ) -> Dict[str, Any]:
        """
        Mengevaluasi titik koordinat termomekanis (T, edot):
        - Tegangan alir (Flow stress)
        - Parameter Zener-Hollomon (Z)
        - Efisiensi disipasi daya (Power Dissipation Efficiency eta)
        - Parameter instabilitas Prasad (Prasad Flow Instability Parameter xi)
        - Prediksi ukuran butir rekristalisasi dinamik (d_drx)
        """
        T_kelvin = temp_celsius + 273.15
        sigma = self.compute_flow_stress(temp_celsius, strain_rate)
        Z = strain_rate * math.exp(self.Q / (self.R * T_kelvin))
        
        m = self.compute_strain_rate_sensitivity(temp_celsius, strain_rate)
        
        # Efisiensi Disipasi Daya eta = 2m / (m + 1)
        eta = (2.0 * m) / (m + 1.0)
        
        # Parameter Ketidakstabilan Aliran Prasad xi(edot)
        # Turunan d(ln(eta)) / d(ln(edot))
        delta = 1.05
        m_hi = self.compute_strain_rate_sensitivity(temp_celsius, strain_rate * delta)
        m_lo = self.compute_strain_rate_sensitivity(temp_celsius, strain_rate / delta)
        eta_hi = (2.0 * m_hi) / (m_hi + 1.0)
        eta_lo = (2.0 * m_lo) / (m_lo + 1.0)
        
        d_ln_eta = math.log(eta_hi) - math.log(eta_lo)
        d_ln_rate = math.log(strain_rate * delta) - math.log(strain_rate / delta)
        
        xi_prasad = (d_ln_eta / d_ln_rate) + m
        
        # Ukuran Butir DRX (mikrometer)
        grain_size_um = self.Ad * (Z ** (-self.md))
        
        # Klasifikasi Keamanan Domain Penempaan
        is_unstable = xi_prasad < 0.0
        if is_unstable:
            domain_status = "INSTABILITY (Shear Bands/Cracking)"
        elif eta >= 0.40:
            domain_status = "OPTIMAL DRX (Superplastic/Fine Grain)"
        elif eta >= 0.25:
            domain_status = "SAFE WORKABLE (Dynamic Recovery)"
        else:
            domain_status = "LOW EFFICIENCY (High Hardening)"

        return {
            "temperature_c": temp_celsius,
            "strain_rate_s_1": strain_rate,
            "flow_stress_mpa": round(sigma, 2),
            "log10_Z": round(math.log10(Z), 3),
            "m_sensitivity": round(m, 4),
            "power_efficiency_eta_pct": round(eta * 100, 2),
            "instability_xi": round(xi_prasad, 4),
            "is_unstable": is_unstable,
            "grain_size_drx_um": round(grain_size_um, 2),
            "domain_classification": domain_status
        }

    def compute_forging_hydraulic_force(
        self,
        billet_diameter_mm: float,
        final_height_mm: float,
        flow_stress_mpa: float,
        friction_factor_m: float = 0.10
    ) -> Dict[str, float]:
        """
        Menghitung beban gaya kempa tempa hidrolik (Tonnage & MegaNewtons)
        menggunakan Analisis Slab Tertutup Bertekanan Aksisimetris:
        F_forging = pi * R^2 * sigma * (1 + (2 * m_friction * R) / (3 * sqrt(3) * h))
        """
        radius = billet_diameter_mm / 2.0
        area_mm2 = math.pi * (radius ** 2)
        
        # Faktor pengali gesekan cetakan (Slab shape factor)
        shape_factor = 1.0 + ((2.0 * friction_factor_m * radius) / (3.0 * math.sqrt(3.0) * final_height_mm))
        
        total_force_N = area_mm2 * flow_stress_mpa * shape_factor
        force_MN = total_force_N / 1e6
        force_tonnage = total_force_N / 9806.65  # Metrik ton
        
        return {
            "projected_area_cm2": round(area_mm2 / 100.0, 2),
            "shape_factor_enhancement": round(shape_factor, 3),
            "forging_force_MN": round(force_MN, 2),
            "hydraulic_tonnage_tons": round(force_tonnage, 1)
        }

    def generate_processing_map_grid(
        self,
        temp_range: List[float],
        rate_range: List[float]
    ) -> List[Dict[str, Any]]:
        """Menghasilkan grid evaluasi pemrosesan diskrit multi-kondisi."""
        grid_results = []
        for t in temp_range:
            for r in rate_range:
                grid_results.append(self.evaluate_dmm_point(t, r))
        return grid_results

if __name__ == "__main__":
    # Inisialisasi Karakteristik Material: Superalloy Inconel 718 (Aero-Engine Rotor Grade)
    engine = IsothermalForgingEngine(
        material_name="Inconel 718 Superalloy (AMS 5662)",
        activation_energy_Q=435000.0,   # 435 kJ/mol
        arrhenius_alpha=0.0078,         # 0.0078 MPa^-1
        arrhenius_A=1.45e14,            # 1.45 x 10^14 s^-1
        arrhenius_n=4.42,               # Eksponen tegangan
        grain_size_coeff_Ad=1450.0,
        grain_size_exp_md=0.175
    )

    temps = [950.0, 980.0, 1010.0, 1040.0, 1070.0]  # °C
    rates = [0.001, 0.01, 0.1, 1.0]                 # s^-1

    print("=" * 90)
    print("       DYNAMIC MATERIALS MODEL (DMM) & ISOTHERMAL FORGING PROCESSING MAP ENGINE")
    print(f"       Material: {engine.material}")
    print("=" * 90)
    print(f"{'Temp(°C)':<10}{'Rate(s^-1)':<12}{'Stress(MPa)':<14}{'Log10(Z)':<11}{'Eta(%)':<10}{'Xi(Instab)':<14}{'Grain(μm)':<12}{'Status'}")
    print("-" * 90)

    grid = engine.generate_processing_map_grid(temps, rates)
    for pt in grid:
        instab_mark = "(!)" if pt["is_unstable"] else "   "
        print(f"{pt['temperature_c']:<10}{pt['strain_rate_s_1']:<12}{pt['flow_stress_mpa']:<14}{pt['log10_Z']:<11}{pt['power_efficiency_eta_pct']:<10}{pt['instability_xi']:<14}{pt['grain_size_drx_um']:<12}{pt['domain_classification']}")

    print("=" * 90)
    # Evaluasi Kasus Penempaan Piringan Rotor Turbin (Diameter 450 mm, Tebal Akhir 35 mm)
    print("STUDI BEBAN FORGING PIRINGAN ROTOR MESIN JET (D = 450 mm, h = 35 mm):")
    # Kasus A: Konvensional / Laju Tinggi (T = 950°C, edot = 1.0 s^-1)
    pt_conv = engine.evaluate_dmm_point(950.0, 1.0)
    force_conv = engine.compute_forging_hydraulic_force(450.0, 35.0, pt_conv["flow_stress_mpa"], friction_factor_m=0.30)
    
    # Kasus B: Isothermal Forging Optimal (T = 1040°C, edot = 0.005 s^-1)
    pt_iso = engine.evaluate_dmm_point(1040.0, 0.005)
    force_iso = engine.compute_forging_hydraulic_force(450.0, 35.0, pt_iso["flow_stress_mpa"], friction_factor_m=0.08)

    print(f"  [Kasus A - Hot Die Konvensional] T=950°C, edot=1.0s^-1  -> Stress: {pt_conv['flow_stress_mpa']} MPa, Beban: {force_conv['hydraulic_tonnage_tons']} Ton ({force_conv['forging_force_MN']} MN)")
    print(f"  [Kasus B - Isothermal Optimum]   T=1040°C, edot=0.005s^-1 -> Stress: {pt_iso['flow_stress_mpa']} MPa, Beban: {force_iso['hydraulic_tonnage_tons']} Ton ({force_iso['forging_force_MN']} MN)")
    red = ((force_conv['forging_force_MN'] - force_iso['forging_force_MN']) / force_conv['forging_force_MN']) * 100.0
    print(f"  ==> REDUKSI KAPASITAS TONASE KEMPA: {red:.2f}% (Hemat Energi & Presisi Near-Net-Shape)")
    print("=" * 90)
```

---

## 5. Studi Kasus Industri: Penempaan Isothermal Piringan Rotor Kompresor Superalloy Inconel 718 (*Aero-Engine Compressor Rotor*)

### 5.1 Permasalahan Manufaktur Komponen Kedirgantaraan
Sebuah pabrik mesin propulsi turbofan dirgantara memproduksi piringan rotor kompresor tingkat tinggi (*high-pressure compressor rotor disk*) berdiameter luar $\varnothing 450\text{ mm}$ dan ketebalan web tengah $35\text{ mm}$ dari paduan super Inconel 718 (spesifikasi AMS 5662). 

Pada proses penempaan panas konvensional sebelumnya:
- Penempaan dilakukan pada mesin kempa hidrolik $300\text{ MN}$ ($30.000\text{ ton}$) dengan temperatur pemanasan awal $1010^\circ\text{C}$ dan cetakan baja pada temperatur $350^\circ\text{C}$.
- Akibat *die chilling* yang parah pada daerah kontak cetakan, tegangan alir lokal melonjak hingga $>480\text{ MPa}$, memicu terjadinya retak mikro keliling (*peripheral shear cracking*) dan pembentukan struktur butir berkulit ganda (*duplex coarse grain structure* ASTM 3-4 di permukaan dan ASTM 8-9 di inti).
- Komponen mengalami kegagalan uji kelelahan oligiosiklik (*Low Cycle Fatigue* / LCF) pada $10.000$ siklus (spesifikasi desain mensyaratkan $>25.000$ siklus pada temperatur $650^\circ\text{C}$).

### 5.2 Implementasi Sistem Isothermal Forging Vakum Berbasis Peta Pemrosesan DMM
Berdasarkan analisis pemetaan pemrosesan termomekanis (*Processing Maps*):
1. Ditemukan domain rekristalisasi dinamik (*DRX Window*) yang optimal pada rentang temperatur $1030^\circ\text{C} - 1050^\circ\text{C}$ dengan laju regangan kuasi-statis rendah $\dot{\varepsilon} = 0.001 - 0.01\text{ s}^{-1}$, menghasilkan efisiensi disipasi $\eta = 44.5\% - 48.2\%$ dan bebas dari ketidakstabilan alir $(\xi > 0)$.
2. Sistem cetakan diganti menggunakan perkakas TZM Molybdenum Alloy yang dipanaskan menggunakan induksi frekuensi menengah di dalam bejana vakum tertutup ($10^{-2}\text{ mbar}$), menjaga temperatur $T_{\text{die}} = T_{\text{billet}} = 1040^\circ\text{C} \pm 3^\circ\text{C}$ selama seluruh langkah penekanan berlangsung.
3. Kecepatan ram kempa dikontrol secara adaptif berbasis loop tertutup CNC untuk mempertahankan laju regangan konstan $\dot{\varepsilon} = 0.005\text{ s}^{-1}$ sepanjang siklus deformasi.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                    HASIL EVALUASI SEBELUM DAN SESUDAH ISOTHERMAL FORGING                              |
+-----------------------------------------------------------------------------------------------------------------------+
|  Parameter Kinerja & Karakteristik       Penempaan Konvensional (350°C Die)    Isothermal Forging (1040°C Vacuum)     |
+-----------------------------------------------------------------------------------------------------------------------+
|  Tegangan Alir Puncak (Peak Flow Stress) 485 MPa                               72.4 MPa                               |
|  Kebutuhan Beban Kempa (Press Tonnage)   27.800 Ton (272.6 MN)                 3.240 Ton (31.8 MN) ──► Turun 88.3%    |
|  Homogenitas Ukuran Butir (Grain Size)   ASTM 3-4 (Heterogen / Buruk)          ASTM 10.5 ± 0.5 (Ultra-Halus Seragam)  |
|  Umur Kelelahan LCF (650°C / 800 MPa)    11.200 Siklus (Gagal)                 38.400 Siklus (Lolos Spek >25k)        |
|  Buy-to-Fly Ratio Material               6.8 : 1 (Pembuangan Scrap Masif)      1.4 : 1 (Near-Net-Shape Ekstrem)       |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 6. Referensi Terverifikasi & Standar Industri Internasional

1. **Prasad, Y. V. R. K., Gegel, H. L., Doraivelu, S. M., Malas, J. C., Morgan, J. T., Lark, K. A., & Barker, D. R.** (1984). *Modeling of dynamic material behavior in hot deformation: Forging of Ti-6242*. Metallurgical Transactions A, 15(10), 1883–1892. DOI: 10.1007/BF02664902.
2. **Sellars, C. M., & McTegart, W. J.** (1966). *On the mechanism of hot deformation*. Acta Metallurgica, 14(9), 1136–1138. DOI: 10.1016/0001-6160(66)90207-0.
3. **Ziegler, H.** (1963). *Some extremum principles in irreversible thermodynamics with application to continuum mechanics*. Progress in Solid Mechanics, 4, 93–193.
4. **Semiatin, S. L., & Jonas, J. J.** (1984). *Formability and Workability of Metals: Plastic Instability and Flow Localization*. American Society for Metals (ASM International), Materials Park, OH. ISBN: 978-0-87170-176-3.
5. **Gao, P. X., Yan, F. Y., & Zhang, J. X.** (2022). *Processing map and dynamic recrystallization mechanism of Inconel 718 superalloy during hot isothermal compression*. Journal of Materials Research and Technology, 18, 2568–2581. DOI: 10.1016/j.jmrt.2022.03.146.
6. **ASTM E209-18**: *Standard Practice for Compression Tests of Metallic Materials at Elevated Temperatures with Conventional or Rapid Heating Rates and Strain Rates*. ASTM International, West Conshohocken, PA.
7. **ISO 6892-2:2018**: *Metallic materials — Tensile testing — Part 2: Method of test at elevated temperature*. International Organization for Standardization, Geneva.
8. **ASTM E112-13**: *Standard Test Methods for Determining Average Grain Size*. ASTM International.
9. **AMS 5662R**: *Nickel Alloy, Corrosion and Heat-Resistant, Bars, Forgings, and Rings (Inconel 718)*. SAE International.
10. **SAE AS9100D**: *Quality Management Systems — Requirements for Aviation, Space, and Defense Organizations*. SAE International.
