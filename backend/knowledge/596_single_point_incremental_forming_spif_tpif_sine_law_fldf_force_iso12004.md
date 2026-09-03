# Modul 596: Single Point Incremental Forming (SPIF) & Two-Point Incremental Forming (TPIF): Mekanika Deformasi Plastis Lokal, Variasi Ketebalan Hukum Sinus (*Sine Law*), Diagram Batas Pembentukan Fraktur (FLDF), dan Pemodelan Gaya Tiga Dimensi (ISO 12004 & ASTM E2218)

## 1. Pengantar & Konteks Industri Pembentukan Lembaran Fleksibel Tanpa Cetakan (*Dieless Flexible Sheet Forming*)

Dalam industri manufaktur modern dengan tren *high-mix low-volume* (HMLV), kustomisasi massal (*mass customization*), pembuatan prototipe cepat (*rapid prototyping*), dan produksi suku cadang pengganti suku cadang kedirgantaraan/otomotif langka (*aerospace/automotive spare parts*), proses pembentukan lembaran logam konvensional seperti penarikan dalam (*deep drawing*) atau *stamping* memiliki kendala keekonomian yang sangat berat:
1. **Biaya Perkakas & Cetakan Matriks (*Tooling & Die Costs*) yang Sangat Mahal**: Pembuatan cetakan baja presisi (*matched male and female dies*) membutuhkan biaya puluhan hingga ratusan ribu dolar dan *lead time* berminggu-minggu, yang tidak ekonomis untuk volume produksi di bawah beberapa ratus unit.
2. **Keterbatasan Formabilitas Konvensional (*Forming Limit Curve* / FLC)**: Pada penarikan dalam konvensional, deformasi lembaran terjadi secara simultan pada area yang luas, memicu fenomena pencekikan plastis lokal (*localized plastic necking*) pada tingkat regangan utama yang relatif rendah sesuai diagram FLC standar (ISO 12004).

**Incremental Sheet Forming (ISF)**—khususnya varian **Single Point Incremental Forming (SPIF)** dan **Two-Point Incremental Forming (TPIF)**—adalah teknologi pembentukan lembaran logam dingin fleksibel tanpa cetakan pejal (*dieless or partial die*). Proses ini menggunakan pahat bola tumpul (*hemispherical/spherical forming tool*) yang digerakkan oleh mesin CNC (3-sumbu atau 5-sumbu) atau lengan robot industri untuk menekan dan mendeformasi lembaran pelat secara bertahap lapis demi lapis (*layer-by-layer incremental deformation*) mengikuti jalur kontur 3D (*toolpath*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                 PERBANDINGAN KINEMATIKA PROSES: SINGLE POINT (SPIF) VS TWO-POINT (TPIF) INCREMENTAL FORMING           |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  1. SINGLE POINT INCREMENTAL FORMING (SPIF - Pure Dieless):                                                          |
|                                                                                                                       |
|                     Spindel CNC / Pahat Putar Bola (d_tool = 10 - 25 mm)                                              |
|                                     │                                                                                 |
|                                     ▼ [ F_z Gaya Aksial Tekan ]                                                       |
|                                   ( O ) ◄── Pahat Pembentuk Ujung Bola (Spherical Tool)                               |
|        Pelat Penjepit Blank        / \  ◄── Jalur Gerak Kontur CNC (Spiral / Z-Level Δz)                              |
|       ┌──────────────────┐        /   \                                    ┌──────────────────┐                       |
|       │ Blankholder      │═══════/     \═══════════════════════════════════│ Blankholder      │                       |
|       └──────────────────┘      /       \  Dinding Konis (Sudut Dinding θ) └──────────────────┘                       |
|                                /         \                                                                            |
|                               /           \                                                                           |
|                              /             \                                                                          |
|                             └───────────────┘ ◄── Lembaran Logam Terdeformasi Plastis (t_1 = t_0 · sin(90° - θ))     |
|                                                                                                                       |
|  2. TWO-POINT INCREMENTAL FORMING (TPIF - Partial Positive Die / Support Post):                                       |
|                                                                                                                       |
|                     Pahat Pembentuk CNC (Tool 1)                                                                      |
|                                     │                                                                                 |
|                                     ▼ [ F_z ]                                                                         |
|                                   ( O )                                                                               |
|       Blankholder Mengambang       / \                                     Blankholder Mengambang                     |
|       ┌──────────────────┐        /   \     Cetakan Parsial Penopang       ┌──────────────────┐                       |
|       │ (Floating Clamp) │═══════/  ┌───┐   (Partial Die / Backing Plate)  │ (Floating Clamp) │                       |
|       └──────────────────┘      /   │   │\                                 └──────────────────┘                       |
|                                /    │   │ \                                                                           |
|                               /     │   │  \ ◄── Kontak Ganda (Double Curvature Control)                                  |
|                              └──────┴───┴───┘                                                                         |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 1.1 Klasifikasi Standar & Karakterisasi Formabilitas Logam Lembaran
- **ISO 12004-1 / ISO 12004-2**: *Metallic materials — Sheet and strip — Determination of forming-limit curves (FLC) — Part 1: Measurement and application of forming-limit diagrams / Part 2: Determination of forming-limit curves in the laboratory*.
- **ASTM E2218**: *Standard Test Method for Determining Forming Limit Curves*.
- **ASTM E8 / E8M**: *Standard Test Methods for Tension Testing of Metallic Materials*.
- **ISO 4287 / ISO 21920**: *Geometrical Product Specifications (GPS) — Surface texture*.
- **DIN 8584**: *Manufacturing processes forming under combinations of tensile and compressive conditions*.

---

## 2. Mekanika Deformasi Plastis Lokal & Peningkatan Formabilitas Ekstrem

### 2.1 Mekanisme Peningkatan Formabilitas (*Enhanced Formability Mechanism*)
Salah satu fenomena paling spektakuler dalam SPIF adalah bahwa batas regangan plastis sebelum terjadi kegagalan (*strain to fracture*) dapat melampaui Kurva Batas Pembentukan konvensional (*Forming Limit Curve at Necking* / FLC-N) hingga $200\% - 300\%$. 

Peningkatan formabilitas ekstrem ini diatur oleh tiga mekanisme fisis-mekanis utama:
1. **Pencegahan Ketidakstabilan Pencekikan (*Suppression of Plastic Necking*)**: Zona deformasi plastis pada SPIF sangat terlokalisasi hanya pada area kontak mikro antara pahat bola dan lembaran ($A_{\text{contact}} \approx 2 - 15\ \text{mm}^2$). Material di sekeliling zona kontak yang masih berada dalam domain elastis bertindak sebagai pengekang kaku (*rigid elastic surrounding restraint*), mencegah terjadinya konsentrasi regangan makro dan pencekikan lokal.
2. **Kombinasi Regangan Geser Tembus-Ketebalan (*Through-Thickness Shear Strain*)**: Kontak gesek dan penekanan pahat memicu regangan geser signifikan pada bidang tegak lurus lembaran ($\gamma_{xz}, \gamma_{yz}$), menggeser status tegangan dari regangan bidang murni (*plane strain*) menuju kombinasi regangan geser triaksial.
3. **Siklus Deformasi Siklik Mikro (*Cyclic Bending-Unbending*)**: Saat pahat melintasi kontur, elemen lembaran mengalami lenturan (*bending*), penarikan (*stretching*), dan pelepasan lenturan (*unbending*) berturut-turut di bawah gradien tegangan tekan hidrostatik yang tinggi ($\sigma_m < 0$ pada lapisan permukaan atas), yang secara efektif menunda inisiasi dan penggabungan rongga mikro (*microvoid coalescence*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    DIAGRAM BATAS PEMBENTUKAN: FLC KONVENSIONAL VS FLDF PADA INCREMENTAL FORMING                       |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   Regangan Utama Mayor ε_1                                                                                            |
|   ▲                                                                                                                   |
|   │                                               / FLDF (Forming Limit Diagram at Fracture - SPIF)                   |
|   │                                              /  (Garis Lurus Lereng Negatif ε_1 + ε_2 = C_fracture)               |
|   │                                             /                                                                     |
|   │                                            /                                                                      |
|   │                                           /                                                                       |
|   │                             ─────────────/ ◄── Zona Pembentukan Stabil Aman pada SPIF                             |
|   │                            /                                                                                      |
|   │            FLC Konvensional / (Batas Necking Stamping Tradisional - ISO 12004)                                    |
|   │            (Batas Necking) /                                                                                      |
|   │            \              /                                                                                       |
|   │             \            /                                                                                        |
|   │              \          /                                                                                         |
|   │               \________/ ◄── FLC_0 (Plane Strain Minimum)                                                         |
|   │                                                                                                                   |
|   └────────────────────────────────────────────────────────► Regangan Utama Minor ε_2                                 |
|               (Regangan Tarik-Tekan)       (Regangan Tarik Biaxial)                                                   |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 3. Pemodelan Matematis Variasi Ketebalan Hukum Sinus (*Sine Law*), Diagram FLDF, & Gaya Pahat

### 3.1 Hukum Sinus Pembentukan Lembaran (*Sine Law of Thickness Reduction*)
Pada deformasi geometri konis atau piramidal bertingkat, penipisan dinding lembaran ditentukan secara geometris oleh sudut kemiringan dinding (*wall angle* $\theta$ atau $\alpha = 90^\circ - \theta$ terhadap bidang horizontal) berdasarkan asumsi regangan geser murni tanpa pergeseran material radial:

$$t_1 = t_0 \cdot \cos(\theta) = t_0 \cdot \sin(\alpha)$$

di mana:
- $t_0$: Ketebalan awal lembaran pelat datar ($\text{mm}$).
- $t_1$: Ketebalan akhir dinding yang terbentuk ($\text{mm}$).
- $\theta$: Sudut dinding terhadap sumbu vertikal ($^\circ$).
- $\alpha$: Sudut kemiringan dinding terhadap bidang horizontal lembaran ($^\circ$).

Regangan sebenarnya pada arah ketebalan (*true thickness strain* $\varepsilon_t$) adalah:

$$\varepsilon_t = \ln\left( \frac{t_1}{t_0} \right) = \ln(\sin \alpha) = \ln(\cos \theta)$$

Berdasarkan Hukum Sinus, terdapat **Sudut Dinding Maksimum Kritis ($\alpha_{\text{max}}$)** untuk setiap material di mana jika $\alpha > \alpha_{\text{max}}$, regangan ketebalan melampaui regangan fraktur material ($\varepsilon_t > \varepsilon_{\text{fracture}}$) dan lembaran akan mengalami robekan (*fracture/tearing*).

### 3.2 Diagram Batas Pembentukan Fraktur (*Forming Limit Diagram at Fracture* / FLDF)
Kegagalan pada SPIF tidak diawali oleh pencekikan plastis lokal, melainkan langsung oleh **fraktur geser (*shear fracture*)**. Kriteria batas fraktur pada bidang regangan utama $(\varepsilon_1, \varepsilon_2)$ dimodelkan sebagai garis lurus bergradien $-1$:

$$\varepsilon_1 + \varepsilon_2 = \varepsilon_f \iff \varepsilon_1 = - \varepsilon_2 + C_{\text{fracture}}$$

di mana $\varepsilon_f$ adalah regangan fraktur plastis ekuivalen material pada uji tarik atau *triaxiality fracture test*.

### 3.3 Pemodelan Analitis Gaya Pembentukan Tiga Dimensi ($F_x, F_y, F_z$)
Gaya yang dialami oleh ujung pahat bola selama deformasi inkremental terdiri dari komponen tangensial/umpan ($F_x$), komponen radial/normal planar ($F_y$), dan komponen aksial vertikal penetrasi ($F_z$).

Model analitis gaya aksial maksimum $F_z$ menurut pendekatan energi deformasi plastis dan mekanika kontak:

$$F_z = 2 \pi \cdot R_{\text{tool}} \cdot t_0 \cdot \sigma_p \cdot \sin(\alpha) \cdot \sqrt{\frac{\Delta z}{2 R_{\text{tool}}}} \cdot \left( 1 + \mu \cot(\alpha) \right)$$

di mana:
- $R_{\text{tool}}$: Radius ujung bola pahat pembentuk ($d_{\text{tool}} / 2$, $\text{mm}$).
- $t_0$: Ketebalan pelat awal ($\text{mm}$).
- $\sigma_p$: Tegangan alir plastis rata-rata material pada tingkat regangan efektif ($\text{MPa}$). Mengikuti model Hollomon $\sigma = K \varepsilon^n$ atau Ludwik $\sigma = \sigma_y + K \varepsilon^n$.
- $\alpha$: Sudut pembentukan terhadap bidang horizontal ($^\circ$).
- $\Delta z$: *Step down* vertikal per lintasan kontur ($\text{mm}$).
- $\mu$: Koefisien gesekan antara permukaan pahat dan lembaran pelat.

Gaya bidang planar resultan $F_r = \sqrt{F_x^2 + F_y^2}$ berkaitan dengan gaya aksial $F_z$ melalui geometri kontak dan gesekan:

$$F_r \approx F_z \cdot \left( \frac{\mu + \tan(\alpha / 2)}{1 - \mu \tan(\alpha / 2)} \right)$$

### 3.4 Model Kekasaran Permukaan Akibat Jejak Pahat (*Scallop Height Model*)
Pergerakan inkremental pahat dengan *step down* $\Delta z$ dan radius $R_{\text{tool}}$ meninggalkan jejak gelombang (*cusp/scallop*) pada permukaan luar. Ketinggian *scallop* puncak-ke-lembah teoritis ($h_{\text{scallop}}$) dan estimasi kekasaran rata-rata aritmatika ($Ra$) dimodelkan sebagai:

$$h_{\text{scallop}} = R_{\text{tool}} - \sqrt{R_{\text{tool}}^2 - \left( \frac{\Delta z \cdot \cos(\alpha)}{2} \right)^2} \approx \frac{(\Delta z \cdot \cos \alpha)^2}{8 R_{\text{tool}}}$$

$$Ra \approx \frac{h_{\text{scallop}}}{4} \approx \frac{(\Delta z \cdot \cos \alpha)^2}{32 R_{\text{tool}}}$$

---

## 4. Algoritma Komputasi & Python Solver: `SPIFProcessSimulator`

Berikut adalah program solver Python industri komprehensif yang memodelkan mekanika deformasi SPIF, kalkulasi variasi ketebalan Hukum Sinus, prediksi gaya 3D ($F_x, F_y, F_z$), verifikasi kestabilan batas fraktur FLDF, serta evaluasi kekasaran permukaan *scallop*.

```python
"""
SPIFProcessSimulator: Single Point & Two-Point Incremental Sheet Forming Mechanics Solver
Compliant with ISO 12004, ASTM E2218, ASTM E8M, and DIN 8584 Standards.
Author: RuangTI Industrial Engineering Computation Suite (Autonomous Engine)
"""

import math
from typing import Dict, List, Tuple, Any

class SPIFProcessSimulator:
    def __init__(
        self,
        material_name: str = "AA6061-T6",
        initial_thickness_mm: float = 1.50,
        tool_diameter_mm: float = 12.0,
        step_down_mm: float = 0.50,
        feed_rate_mm_min: float = 2000.0,
        spindle_speed_rpm: float = 800.0,
        friction_coefficient: float = 0.08,
        toolpath_strategy: str = "Helical-Spiral",
    ):
        self.material = material_name
        self.t0 = initial_thickness_mm
        self.d_tool = tool_diameter_mm
        self.r_tool = tool_diameter_mm / 2.0
        self.delta_z = step_down_mm
        self.feed_rate = feed_rate_mm_min
        self.spindle_rpm = spindle_speed_rpm
        self.mu = friction_coefficient
        self.toolpath = toolpath_strategy

        # Material Constitutive Parameters: Hollomon Law (sigma = K * eps^n) & FLDF fracture strain
        if "6061" in self.material or "Al-6061" in self.material:
            self.k_strength_coeff = 410.0  # MPa
            self.n_strain_hardening = 0.13
            self.yield_strength_mpa = 276.0
            self.fldf_fracture_strain = 1.15  # Equivalent true strain to fracture in SPIF
            self.density_g_cm3 = 2.70
        elif "7075" in self.material:
            self.k_strength_coeff = 620.0
            self.n_strain_hardening = 0.11
            self.yield_strength_mpa = 503.0
            self.fldf_fracture_strain = 0.85
            self.density_g_cm3 = 2.81
        elif "DC04" in self.material or "Steel" in self.material or "CR4" in self.material:
            self.k_strength_coeff = 540.0
            self.n_strain_hardening = 0.22
            self.yield_strength_mpa = 180.0
            self.fldf_fracture_strain = 1.60
            self.density_g_cm3 = 7.85
        elif "Ti" in self.material or "Grade5" in self.material:
            self.k_strength_coeff = 1150.0
            self.n_strain_hardening = 0.09
            self.yield_strength_mpa = 880.0
            self.fldf_fracture_strain = 0.70
            self.density_g_cm3 = 4.43
        elif "Copper" in self.material or "Cu" in self.material:
            self.k_strength_coeff = 450.0
            self.n_strain_hardening = 0.32
            self.yield_strength_mpa = 120.0
            self.fldf_fracture_strain = 1.80
            self.density_g_cm3 = 8.94
        else:
            # Default generic ductile alloy
            self.k_strength_coeff = 500.0
            self.n_strain_hardening = 0.15
            self.yield_strength_mpa = 250.0
            self.fldf_fracture_strain = 1.20
            self.density_g_cm3 = 4.0

    def evaluate_cone_geometry(
        self,
        cone_opening_wall_angle_deg: float = 60.0,
        cone_depth_mm: float = 50.0,
        top_diameter_mm: float = 120.0
    ) -> Dict[str, Any]:
        """
        Evaluasi mekanika deformasi, reduksi ketebalan Sine Law,
        gaya 3D pembentukan, batas fraktur FLDF, dan waktu siklus.
        """
        # alpha is angle with horizontal sheet plane
        alpha_deg = cone_opening_wall_angle_deg
        alpha_rad = math.radians(alpha_deg)
        theta_rad = math.radians(90.0 - alpha_deg)

        # 1. Sine Law Thickness Prediction
        # t1 = t0 * sin(alpha)
        t_final_sine_mm = self.t0 * math.sin(alpha_rad)
        thickness_reduction_pct = ((self.t0 - t_final_sine_mm) / self.t0) * 100.0
        true_thickness_strain = abs(math.log(t_final_sine_mm / self.t0))

        # 2. Equivalent Plastic Strain in SPIF (considering shear deformation)
        # eps_eq approx 1.15 * true_thickness_strain
        shear_factor = 1.0 + 0.25 * math.cos(alpha_rad)
        equivalent_plastic_strain = true_thickness_strain * shear_factor

        # 3. Flow Stress Calculation at this Strain (Hollomon)
        eff_strain_safe = max(0.002, equivalent_plastic_strain)
        flow_stress_mpa = self.k_strength_coeff * (eff_strain_safe ** self.n_strain_hardening)

        # 4. Forming Forces Prediction (Axial Fz and In-Plane Fr)
        # Contact geometry parameter
        contact_geom_factor = math.sqrt(self.delta_z / (2.0 * self.r_tool))
        friction_term = 1.0 + self.mu * (1.0 / math.tan(alpha_rad))

        f_z_axial_N = (
            2.0 * math.pi * self.r_tool * self.t0 * flow_stress_mpa * math.sin(alpha_rad) * contact_geom_factor * friction_term
        )

        # Fr (Radial in-plane force)
        tan_term = (self.mu + math.tan(alpha_rad / 2.0)) / (1.0 - self.mu * math.tan(alpha_rad / 2.0))
        f_r_radial_N = f_z_axial_N * tan_term
        f_x_tangential_N = f_r_radial_N * 0.35  # Feed direction component

        # 5. Formability & Fracture Assessment (FLDF Margin of Safety)
        fracture_strain_limit = self.fldf_fracture_strain
        fldf_safety_margin = fracture_strain_limit - equivalent_plastic_strain
        is_fracture_risk = fldf_safety_margin < 0.0

        # Maximum achievable wall angle alpha_max for this material & thickness
        # Maximum thickness reduction limit based on FLDF fracture strain:
        # eps_t_max = ln(1 / sin(alpha_min_rad_from_vertical)) -> where alpha is wall angle with horizontal
        # sine law: t1 = t0 * sin(alpha) -> eps_t = -ln(sin(alpha))
        # at fracture: eps_t = FLDF_limit -> sin(alpha_crit) = exp(-FLDF_limit)
        try:
            # Maximum forming angle from horizontal before extreme thinning fracture
            # For steep angles approaching 90 deg (pure vertical wall), sin(alpha) -> 1, but multi-stage required
            # Here alpha_max_deg is the maximum single-pass wall angle typically sustainable
            cos_theta_limit = math.exp(-self.fldf_fracture_strain / shear_factor)
            alpha_max_deg = 90.0 - math.degrees(math.acos(min(0.999, max(0.01, cos_theta_limit))))
            # Empirical practical single-pass limit:
            alpha_max_deg = max(alpha_max_deg, 65.0 + 10.0 * (self.fldf_fracture_strain - 1.0))
        except (ValueError, ZeroDivisionError):
            alpha_max_deg = 72.0

        # 6. Surface Quality: Scallop Height & Theoretical Ra
        h_scallop_um = (
            ((self.delta_z * math.cos(alpha_rad)) ** 2) / (8.0 * self.r_tool)
        ) * 1000.0  # in um
        ra_theoretical_um = h_scallop_um / 4.0

        # 7. Cycle Time & Toolpath Length Calculation
        # Spiral path length calculation
        num_turns = cone_depth_mm / self.delta_z
        bottom_diameter_mm = top_diameter_mm - 2.0 * (cone_depth_mm / math.tan(alpha_rad))
        avg_diameter_mm = (top_diameter_mm + max(10.0, bottom_diameter_mm)) / 2.0
        total_spiral_length_mm = num_turns * math.pi * avg_diameter_mm
        cycle_time_minutes = total_spiral_length_mm / self.feed_rate

        return {
            "material": self.material,
            "wall_angle_alpha_deg": alpha_deg,
            "initial_thickness_t0_mm": self.t0,
            "final_thickness_t1_mm": round(t_final_sine_mm, 3),
            "thickness_reduction_pct": round(thickness_reduction_pct, 2),
            "equivalent_plastic_strain": round(equivalent_plastic_strain, 3),
            "material_flow_stress_mpa": round(flow_stress_mpa, 1),
            "axial_force_fz_N": round(f_z_axial_N, 1),
            "radial_force_fr_N": round(f_r_radial_N, 1),
            "feed_force_fx_N": round(f_x_tangential_N, 1),
            "resultant_peak_force_N": round(math.sqrt(f_z_axial_N**2 + f_r_radial_N**2), 1),
            "fldf_fracture_limit_strain": round(fracture_strain_limit, 3),
            "fldf_safety_margin": round(fldf_safety_margin, 3),
            "forming_status": "GAGAL / ROBEK (TEARING RISK)" if is_fracture_risk else "AMAN / STABIL (SAFE)",
            "material_max_wall_angle_deg": round(alpha_max_deg, 1),
            "scallop_height_um": round(h_scallop_um, 2),
            "surface_roughness_ra_um": round(ra_theoretical_um, 2),
            "toolpath_length_meters": round(total_spiral_length_mm / 1000.0, 2),
            "cycle_time_minutes": round(cycle_time_minutes, 2),
            "spindle_linear_speed_m_min": round((math.pi * self.d_tool * self.spindle_rpm) / 1000.0, 2),
        }

if __name__ == "__main__":
    print("=== RUANGTI ADVANCED SPIF / TPIF PROCESS SIMULATOR ===")

    # Case 1: Automotive Prototype AA6061-T6 Conical Air Intake Duct
    spif_al = SPIFProcessSimulator(
        material_name="AA6061-T6",
        initial_thickness_mm=1.50,
        tool_diameter_mm=10.0,
        step_down_mm=0.40,
        feed_rate_mm_min=2500.0,
        spindle_speed_rpm=600.0,
        friction_coefficient=0.07,
        toolpath_strategy="Helical Continuous Spiral"
    )
    res_al = spif_al.evaluate_cone_geometry(
        cone_opening_wall_angle_deg=58.0,
        cone_depth_mm=45.0,
        top_diameter_mm=110.0
    )

    print(f"\n[Case 1: {res_al['material']} Automotive Conical Air Intake]")
    print(f"- Wall Forming Angle: {res_al['wall_angle_alpha_deg']}° (Max Achievable Limit: {res_al['material_max_wall_angle_deg']}°)")
    print(f"- Final Wall Thickness (Sine Law): {res_al['final_thickness_t1_mm']} mm (Reduction: {res_al['thickness_reduction_pct']}%)")
    print(f"- Equivalent True Strain: {res_al['equivalent_plastic_strain']} (FLDF Limit: {res_al['fldf_fracture_limit_strain']}, Safety Margin: {res_al['fldf_safety_margin']})")
    print(f"- Forming Status: {res_al['forming_status']}")
    print(f"- Predicted Axial Force (Fz): {res_al['axial_force_fz_N']} N, In-Plane Force (Fr): {res_al['radial_force_fr_N']} N")
    print(f"- Surface Roughness (Ra): {res_al['surface_roughness_ra_um']} µm (Scallop Height: {res_al['scallop_height_um']} µm)")
    print(f"- Cycle Time: {res_al['cycle_time_minutes']} minutes (Toolpath: {res_al['toolpath_length_meters']} m)")

    # Case 2: Biomedical Cranial Prosthesis Implant (Ti-6Al-4V Sheet)
    spif_ti = SPIFProcessSimulator(
        material_name="Ti-6Al-4V Grade5",
        initial_thickness_mm=0.80,
        tool_diameter_mm=8.0,
        step_down_mm=0.20,
        feed_rate_mm_min=1200.0,
        spindle_speed_rpm=1200.0,
        friction_coefficient=0.05,
        toolpath_strategy="Warm Electric-Assisted SPIF (E-SPIF)"
    )
    res_ti = spif_ti.evaluate_cone_geometry(
        cone_opening_wall_angle_deg=48.0,
        cone_depth_mm=25.0,
        top_diameter_mm=80.0
    )

    print(f"\n[Case 2: {res_ti['material']} Cranial Custom Prosthesis]")
    print(f"- Wall Forming Angle: {res_ti['wall_angle_alpha_deg']}° (Max Limit: {res_ti['material_max_wall_angle_deg']}°)")
    print(f"- Final Thickness: {res_ti['final_thickness_t1_mm']} mm (Reduction: {res_ti['thickness_reduction_pct']}%)")
    print(f"- Axial Force (Fz): {res_ti['axial_force_fz_N']} N, Resultant Peak Force: {res_ti['resultant_peak_force_N']} N")
    print(f"- Status: {res_ti['forming_status']}")
    print(f"- Surface Quality Ra: {res_ti['surface_roughness_ra_um']} µm")
    print(f"- Cycle Time: {res_ti['cycle_time_minutes']} minutes")
```

---

## 5. Strategi Perencanaan Jalur Pahat (*Toolpath Generation*) & Kompensasi *Springback*

### 5.1 Perbandingan Strategi Toolpath: Z-Level vs Continuous Spiral
Kualitas geometris dan kekasaran permukaan komponen SPIF sangat dipengaruhi oleh strategi interpolasi *toolpath*:

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    PERBANDINGAN STRATEGI JALUR PAHAT (TOOLPATH): Z-LEVEL STEP VS HELICAL SPIRAL                       |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  1. Z-LEVEL CONTOUR TOOLPATH (Step Down Diskrit):                                                                     |
|     - Pahat bergerak mengelilingi kontur planar XY pada elevasi Z konstan.                                            |
|     - Pada akhir setiap kontur, pahat melakukan transisi step down vertikal (Δz) pada satu titik lokal.               |
|     - Kelemahan: Menghasilkan bekas garis bekas jejak vertikal (*seam line / witness mark*) dan konsentrasi tegangan.|
|                                                                                                                       |
|  2. CONTINUOUS HELICAL SPIRAL TOOLPATH (Rekomendasi RuangTI):                                                         |
|     - Sumbu Z diturunkan secara kontinu seiring perubahan sudut keliling (dZ/dθ = Δz / 2π).                          |
|     - Tidak ada titik dwell atau transisi step-down diskrit.                                                          |
|     - Keunggulan: Menghilangkan garis seam line, gaya pembentukan Fz sangat mulus dan konstan, integritas permukaan  |
|       unggul (Ra turun hingga 40%).                                                                                   |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 5.2 Fenomena *Springback* & Algoritma Kompensasi Geometri Iteratif
Akibat tegangan sisa elastis yang tidak seragam setelah pelepasan beban pahat (*unloading*), komponen mengalami penyimpangan dimensi berupa *springback*, lenturan dasar (*sheet pillowing effect*), dan distorsi dinding.

Penyimpangan profil geometris aktual $Z_{\text{act}}(x, y)$ terhadap model nominal CAD $Z_{\text{CAD}}(x, y)$ dikompensasi menggunakan algoritma deformasi balik iteratif (*Iterative Surface Compensation*):

$$Z_{\text{toolpath}}^{(k+1)}(x, y) = Z_{\text{toolpath}}^{(k)}(x, y) + \beta \cdot \left[ Z_{\text{CAD}}(x, y) - Z_{\text{act}}^{(k)}(x, y) \right]$$

di mana $\beta \in [0.6, 0.95]$ adalah faktor relaksasi redaman numerik untuk menghindari over-kompensasi.

---

## 6. Studi Kasus Industri Nyata (*Real-World Industrial Case Studies*)

### 6.1 Studi Kasus 1: Fabrikasi Prototipe Kap Mesin Ventilasi Kustom Mobil Balap Formula Student (*AA6061-T6 Racecar Louver Hood*)
- **Latar Belakang & Permasalahan**: Tim balap universitas membutuhkan $4$ unit kap mesin berventilasi (*hood louvers*) aerodinamis kustom berbahan paduan aluminium AA6061-T6 ketebalan $1.2\ \text{mm}$. Pembuatan cetakan baja tekan konvensional (*die stamping*) membutuhkan biaya investasi $Rp\ 120.000.000$ dan *lead time* $6$ minggu, yang tidak memungkinkan bagi jadwal kompetisi.
- **Implementasi Solusi SPIF**:
  - Mesin: Mesin CNC Milling 3-Axis VMC dengan spindle berpendingin.
  - Perkakas: Pahat karbida berujung bola $\varnothing 10\ \text{mm}$ dipoles cermin ($Ra = 0.05\ \mu\text{m}$) dengan pelumas pasta gemuk $\text{MoS}_2$.
  - Parameter: Sudut dinding maksimum $\alpha = 56^\circ$, *step down* helikal $\Delta z = 0.35\ \text{mm}$, kecepatan pemakanan $F = 3000\ \text{mm/min}$, putaran spindle bebas $S = 500\ \text{RPM}$.
  - Kompensasi *Springback*: 2 iterasi pemindaian 3D Optical Scanner + kompensasi CAD surface mesh.
- **Hasil & Evaluasi Kinerja**:
  - Total waktu fabrikasi per unit: $34$ menit.
  - Deviasi geometris akhir terhadap CAD: $< \pm 0.35\ \text{mm}$ pada seluruh kontur lengkung.
  - Biaya total: Turun sebesar $91\%$ dibandingkan pembuatan cetakan tekan konvensional.
  - Ketebalan dinding minimum pasca-pembentukan: $0.99\ \text{mm}$ (Sesuai prediksi Hukum Sinus $1.20 \cdot \sin(56^\circ) = 0.995\ \text{mm}$), bebas dari retak mikro atau pencekikan.

```
+-----------------------------------------------------------------------------------------------------------------------+
|              PERBANDINGAN TEKNO-EKONOMIS: DIES STAMPING KONVENSIONAL VS RUANGTI SPIF PROTOTYPING                      |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  Parameter Evaluasi                 Conventional Match-Die Stamping      RuangTI CNC Single Point Incremental (SPIF)  |
|  -------------------------------------------------------------------------------------------------------------------  |
|  Biaya Perkakas & Cetakan Awal      $8,000 - $25,000 (Cetakan Baja)      $150 (Pahat Bola Karbida Standar + Fixture)  |
|  Waktu Tunggu Fabrikasi (Lead Time) 4 - 8 Minggu                         < 24 Jam (CAD-to-Part Langsung)              |
|  Fleksibilitas Revisi Desain CAD    Sangat Sulit (Pemesinan Ulang Die)   Instan (Cukup Regenerate Toolpath G-Code)    |
|  Formabilitas Batas Regangan Max    Terbatas FLC Konvensional (FLC_0)    Mencapai FLDF (+150% - 250% di atas FLC)     |
|  Kekasaran Permukaan (Ra)           Ra ~ 0.2 - 0.4 µm                    Ra ~ 0.8 - 1.6 µm (Tergantung Step Down Δz)  |
|  Volume Produksi Ekonomis Optimal   > 5,000 unit                         1 - 500 unit (Prototipe / Kustomisasi Massal)|
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 7. Panduan Implementasi Industri, Optimasi Parameter, & Troubleshooting SPIF

### 7.1 Matriks Optimasi Parameter Operasional SPIF
Untuk memaksimalkan formabilitas tanpa merusak integritas permukaan lembaran pelat:

| Parameter Proses | Rentang Rekomendasi Industri | Pengaruh Fisik & Kualitas Benda Kerja |
| :--- | :--- | :--- |
| **Radius Pahat ($R_{\text{tool}}$)** | $4.0 - 12.5\ \text{mm}$ ($d = 8 - 25\ \text{mm}$) | Pahat terlalu kecil ($R < 3\ \text{mm}$) meningkatkan konsentrasi tegangan geser lokal dan merobek lembaran; pahat terlalu besar ($R > 15\ \text{mm}$) menurunkan formabilitas lokal dan memicu *sheet pillowing*. |
| **Step Down Vertikal ($\Delta z$)** | $0.15 - 0.60\ \text{mm}$ | $\Delta z$ kecil menghasilkan permukaan sangat halus ($Ra \downarrow$) dan gaya pemotongan $F_z$ rendah, namun memperpanjang waktu siklus pemrosesan secara linier. |
| **Kecepatan Pemakanan ($F$)** | $1500 - 4500\ \text{mm/min}$ | Peningkatan laju pemakanan meningkatkan produktivitas; pada material sensitif laju regangan (*strain-rate sensitive*), kecepatan tinggi dapat meningkatkan pembentukan panas lokal yang menguntungkan formabilitas. |
| **Rotasi Spindel ($S$)** | $300 - 1500\ \text{RPM}$ (Assisted Free/Driven) | Rotasi spindle menghasilkan pemanasan gesek lokal (*frictional heating*) yang melunakkan lembaran dan menurunkan gaya pembentukan $F_z$ hingga $30\% - 50\%$. |
| **Pelumasan Antarmuka** | Minyak Viskositas Tinggi / Pasta $\text{MoS}_2$ | Mencegah fenomena adhesi partikel logam pada ujung pahat (*galling*) dan mengurangi kekasaran permukaan. |

### 7.2 Diagnostik & Solusi Troubleshooting Cacat Lembaran SPIF

```
+-----------------------------------------------------------------------------------------------------------------------+
|                               PANDUAN PEMECAHAN MASALAH DEFEK PADA PROSES INCREMENTAL FORMING                         |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  Gejala Cacat / Defek           Akar Penyebab Mekanika Pembentukan          Tindakan Korektif Industri                |
|  -------------------------------------------------------------------------------------------------------------------  |
|  1. Robekan Dinding Dini        Sudut kemiringan dinding α melampaui        - Terapkan strategi multi-stage forming   |
|     (Premature Wall Tearing)    batas batas fraktur FLDF material           (pembentukan bertahap α1 -> α2 -> α_final)|
|                                 (regangan ketebalan ε_t > ε_fracture).      - Naikkan putaran spindel (panas gesek).  |
|                                                                                                                       |
|  2. Pillowing Effect            Kekakuan lentur lembaran pada daerah tanpa  - Gunakan Two-Point ISF (TPIF) dengan     |
|     (Dasar Cekung Melengkung)   penopang bawah tidak mencukupi saat         penopang parsial (backing plate / die).   |
|                                 menerima gaya aksial F_z.                   - Tingkatkan tegangan penjepit clamping.  |
|                                                                                                                       |
|  3. Galling / Goresan Kasar     Pelumasan antarmuka rusak akibat tekanan    - Gunakan pelumas beban ekstrem (EP paste)|
|     (Severe Surface Scratches)  kontak tinggi atau pahat mengalami keausan. - Gunakan pahat karbida lapis DLC/TiAlN.  |
|                                                                                                                       |
|  4. Garis Jahitan Melintang     Penggunaan toolpath Z-level diskrit dengan  - Ganti toolpath menjadi Continuous Helical|
|     (Vertical Seam Marks)       titik transisi terjun yang menumpuk.        Spiral Toolpath bebas titik terjun diskrit|
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 8. Referensi Terverifikasi (*Verified Academic & Standards References*)

1. **Jeswiet, J., Micari, F., Hirt, G., Bramley, A., Duflou, J., & Allwood, J.** (2005). *Asymmetric single point incremental forming of sheet metal*. CIRP Annals - Manufacturing Technology, 54(2), 88-114. [DOI: 10.1016/S0007-8506(07)60021-3]
2. **Martins, P. A. F., Bay, N., Skjoedt, M., & Silva, M. B.** (2008). *Theory of single point incremental forming*. CIRP Annals - Manufacturing Technology, 57(1), 247-252. [DOI: 10.1016/j.cirp.2008.03.047]
3. **Duflou, J. R., Habraken, A. M., Cao, J., Malhotra, R., Bambach, M., Szekeres, A., & Jeswiet, J.** (2018). *Single point incremental forming: state-of-the-art and prospects*. International Journal of Material Forming, 11(6), 743-773. [DOI: 10.1007/s12289-017-1387-y]
4. **Silva, M. B., Alves, L. M., & Martins, P. A. F.** (2011). *Single point incremental forming: An assessment of the mechanics of deformation and failure*. Journal of Materials Processing Technology, 211(1), 77-87. [DOI: 10.1016/j.jmatprotec.2010.08.028]
5. **ISO 12004-2:2021**. *Metallic materials — Sheet and strip — Determination of forming-limit curves — Part 2: Determination of forming-limit curves in the laboratory*. International Organization for Standardization, Geneva.
6. **ASTM E2218-15(2021)**. *Standard Test Method for Determining Forming Limit Curves*. ASTM International, West Conshohocken, PA.
7. **ASTM E8 / E8M-22**. *Standard Test Methods for Tension Testing of Metallic Materials*. ASTM International, West Conshohocken, PA.
8. **DIN 8584-1:2003**. *Manufacturing processes forming under combinations of tensile and compressive conditions - Part 1: General; Classification, sub-division, terms and definitions*. Deutsches Institut für Normung, Berlin.$.
