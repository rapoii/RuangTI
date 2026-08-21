# Modul 574: Tube and Sheet Hydroforming (THF/SHF): Mekanika Deformasi Plastis Multaksial, Optimasi Jalur Pembebanan (Loading Path), Mitigasi Kegagalan FLD (Wrinkling vs. Bursting), dan Komponen Ringan Otomotif (DIN 8584)

## 1. Pengantar & Urgensi Hydroforming dalam Manufaktur Komponen Ringan Modern

Hydroforming adalah proses pembentukan logam dingin (*cold metal forming*) bertekanan tinggi di mana fluida hidrolik bertekanan (biasanya emulsi air-minyak atau fluida sintetis khusus) digunakan sebagai media penekan fleksibel untuk membentuk lembaran logam (*Sheet Hydroforming - SHF*) atau tabung pipa (*Tube Hydroforming - THF*) agar mengikuti kontur rongga cetakan (*die cavity*).

Standar manufaktur internasional (seperti **DIN 8584-6** - *Hydroforming processes*) mengklasifikasikan proses ini sebagai salah satu teknologi kunci pereduksian bobot struktural (*automotive lightweighting*) dan peningkatan rigiditas torsi pada industri kendaraan bermotor, dirgantara, serta sistem perpipaan bertekanan tinggi.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                    PERBANDINGAN PROSES PEMBENTUKAN STAMPING KONVENSIONAL VS. TUBE HYDROFORMING (THF)                  |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  Kriteria Perbandingan         Stamping & Pengelasan Tradisional       Tube Hydroforming (THF) Modern                 |
|  -------------------------------------------------------------------------------------------------------------------  |
|  Konstruksi Komponen           Perakitan 2-4 sub-komponen plat cap     Komponen tubular monolitik utuh (single-piece) |
|                                yang disambung dengan spot welding      tanpa sambungan las flens                      |
|  Reduksi Berat Komponen        Titik referensi dasar (0%)              Reduksi berat 15% - 35% lebih ringan           |
|  Kekakuan Struktural (Rigidity)Sambungan las memicu konsentrasi stres  Kekakuan torsi & lentur naik hingga 25% - 40%  |
|  Distribusi Ketebalan Dinding  Variasi tebal tinggi (thinning lokal)   Dapat dikontrol seragam via axial feed pushing |
|  Presisi Geometri & Springback Springback tinggi, butuh post-trimming  Springback sangat rendah karena kalibrasi      |
|                                                                        tekanan hidrostatik ultra-tinggi (calibration) |
|  Jumlah Perkakas Cetakan (Dies)Sepasang punch & die per sub-komponen   Satu die cavity bertekanan internal fluida     |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                ARSITEKTUR KINEMATIKA & SISTEM MESIN TUBE HYDROFORMING (THF)                           |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|    Aktuator Silinder Kiri                Rongga Cetakan Baja Perkakas (Die Tooling)            Aktuator Silinder Kanan|
|    ┌──────────────────────┐             ┌──────────────────────────────────────────┐          ┌──────────────────────┐|
|    │ Silinder Pendorong   │             │             Upper Die (Plat Atas)        │          │ Silinder Pendorong   │|
|    │ Aksial Kiri (Axial 1)│             │ ┌──────────────────────────────────────┐ │          │ Aksial Kanan (Axial2)│|
|    │                      │ Plunger Kiri│ │                                      │ │Plunger Kn│                      │|
|    │ ┌───┐                │ ┌─────────┐ │ │   Rongga Ekspansi (Expansion Zone)   │ │ ┌──────┐ │                ┌───┐ │|
|    │ │   │────────────────┼─┤ Seal &  │─┼─┼─►      [ P_internal (t) ]            │─┼─┤ Seal ├─┼────────────────│   │ │|
|    │ └───┘  Gaya: F_ax1(t)│ │ Nozzle  │ │ │                                      │ │ │ & Noz│ │ Gaya: F_ax2(t) │ └───┘ │|
|    │        Umpan: s_ax1  │ └─────────┘ │ │         Benda Kerja Tabung           │ │ └──────┘ │ Umpan: s_ax2    │       │|
|    └──────────────────────┘             │ └──────────────────────────────────────┘ │          └──────────────────────┘|
|                                         │             Lower Die (Plat Bawah)       │                                  |
|                                         └──────────────────────────────────────────┘                                  |
|                                                               ▲                                                       |
|                                                               │                                                       |
|                                             [ Sistem Pompa Intensifier Tekanan Tinggi ]                               |
|                                             [ Fluida Hidrolik: P_int hingga 400 MPa ]                                 |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 2. Mekanika Deformasi Plastis Multaksial & Kriteria Luluh Hill-48

Pada proses pembentukan tabung berdinding tipis dengan jari-jari awal $R_0$ dan ketebalan $t_0$, tegangan yang bekerja pada elemen material bersifat multaksial:
- Tegangan Lingkar (*Hoop / Circumferential Stress* $\sigma_\theta$): Diinduksi oleh tekanan hidrostatik internal $P_i$.
- Tegangan Aksial (*Axial Stress* $\sigma_z$): Ditentukan oleh kombinasi tekanan fluida pada ujung tabung dan gaya dorong silinder aksial $F_{\text{ax}}$.
- Tegangan Radial (*Radial Stress* $\sigma_r$): Sebanding dengan $-P_i / 2 \approx 0$ (diasumsikan dapat diabaikan pada tabung tipis $t_0 / R_0 \ll 0.1$).

### 2.1 Persamaan Tegangan Membran Laplace
Untuk silinder tipis di bawah tekanan internal $P_i$ dan gaya aksial $F_{\text{ax}}$:

$$\sigma_\theta = \frac{P_i \cdot R}{t}$$

$$\sigma_z = \frac{P_i \cdot R}{2 t} - \frac{F_{\text{ax}}}{2 \pi R t}$$

Rasio tegangan biaxial didefinisikan sebagai $\alpha_s = \sigma_z / \sigma_\theta$. Jika silinder ditekan hanya oleh fluida tanpa dorongan aksial ($F_{\text{ax}} = 0$), maka $\alpha_s = 0.5$ (*plane-strain state* yang rentan penipisan dini).

### 2.2 Kriteria Luluh Anisotropik Hill-48
Karena tabung hasil ekstrusi atau rol-las memiliki sifat anisotropi akibat tekstur kristalografi rolling, kriteria luluh **Hill's 1948 Anisotropic Yield Criterion** digunakan untuk memprediksi inisiasi deformasi plastis:

$$f(\sigma) = \sqrt{ \sigma_\theta^2 - \frac{2 r}{1 + r} \sigma_\theta \sigma_z + \sigma_z^2 } = \bar{\sigma}(\bar{\varepsilon}_p)$$

Di mana:
- $r$ : Nilai koefisien anisotropi plastis normal (*Lankford's plastic strain ratio* $r$-value), yang merupakan rasio regangan lebar terhadap regangan tebal ($r = \varepsilon_w / \varepsilon_t$).
- $\bar{\sigma}(\bar{\varepsilon}_p)$ : Tegangan ekuivalen aliran plastis (*flow stress*), dimodelkan menggunakan persamaan pengerasan regangan **Hollomon** ($\bar{\sigma} = K \bar{\varepsilon}^n$) atau **Swift** ($\bar{\sigma} = K (\varepsilon_0 + \bar{\varepsilon})^n$).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                             ELIPS LULUH MULTAKSIAL HILL-48 PADA HYDROFORMING BIAXIAL                                  |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  Tegangan Aksial σ_z [MPa]                                                                                            |
|         ▲                                                                                                             |
|         │                                                                                                             |
|         │         /───────────────\  (Tension - Tension: Penipisan Parah / Thinning)                                 |
|         │       /                   \                                                                                 |
|         │      /                     \                                                                                |
|  ───────┼─────(───────────────────────)──────────► Tegangan Lingkar σ_θ [MPa]                                         |
|         │      \                     /                                                                                |
|         │       \                   /                                                                                 |
|         │         \───────────────/  (Compression - Tension: Zona THF Stabil dengan Axial Feed)                       |
|         ▼                                                                                                             |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 3. Diagram Batas Pembentukan (Forming Limit Diagram - FLD) & Kegagalan Hydroforming

Keberhasilan hydroforming ditentukan oleh kemampuan menjaga jalur regangan material di dalam koridor jendela proses yang aman (*Process Feasibility Window*). Tiga jenis kegagalan utama yang membatasi proses hydroforming adalah:

```
+-----------------------------------------------------------------------------------------------------------------------+
|                               JENDELA KELAYAKAN PROSES (PROCESS FEASIBILITY WINDOW)                                   |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  Tekanan Internal P_int [MPa]                                                                                         |
|     ▲                                                                                                                 |
|     │                          / / / / / / / / / / / / / / / / / / / / / / / / / /                                    |
|     │                         /  ZONA PECAH / BURSTING (Tension Instability)      /                                   |
|     │  P_burst ───────────────/───────────────────────────────────────────────────/                                   |
|     │                        /                                                   /                                    |
|     │                       /         ★ JALUR PEMBEBANAN OPTIMAL ★               /                                    |
|     │                      /             (OPTIMAL LOADING PATH)                 /                                     |
|     │                     /                                                    /                                      |
|     │  P_yield ──────────/                                                    /                                       |
|     │                   /                                                    /                                        |
|     │  P_wrinkle ──────/────────────────────────────────────────────────────/                                         |
|     │                 /  ZONA LIPATAN / WRINKLING (Compressive Buckling)   /                                          |
|     │                / / / / / / / / / / / / / / / / / / / / / / / / / / /                                            |
|     └────────────────┴──────────────────────────────────────────────────────┴────────► Umpan Aksial s_ax [mm]          |
|                      0                                                     s_max                                      |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.1 Mode Kegagalan Kritis
1. **Wrinkling / Kerutan (Batas Bawah Tekanan)**:
   Terjadi bila gaya umpan dorong aksial $F_{\text{ax}}$ terlalu besar sementara tekanan internal $P_i$ belum cukup kuat untuk menopang dinding tabung, memicu tekuk plastis (*plastic buckling*).
   Kondisi batas tekanan pencegahan kerutan:
   
   $$P_{\text{wrinkle}} \approx \frac{2 E}{1 - \nu^2} \left( \frac{t_0}{D_0} \right)^3 \cdot \psi$$

2. **Bursting / Pecah (Batas Atas Tekanan)**:
   Terjadi bila tekanan internal $P_i$ terlalu tinggi pada awal proses sebelum material yang disuplai oleh silinder aksial cukup mengisi zona ekspansi, memicu ketidakstabilan plastis plastis lokal (*necking*) dan robek (*tensile rupture*).
   Berdasarkan teori ketidakstabilan plastis Hill dan kriteria Swift:
   
   $$P_{\text{burst}} = \frac{2 t}{D} \cdot \bar{\sigma} \cdot \left( \frac{2}{\sqrt{3}} \right)^{n+1}$$

3. **Inadequate Calibration / Under-filling Corner Radius**:
   Bila tekanan akhir pada tahap kalibrasi (*calibration pressure* $P_{\text{cal}}$) tidak mencapai level yang dibutuhkan untuk mencetak radius sudut cetakan ($R_c$):
   
   $$P_{\text{cal}} \ge \frac{t}{R_c} \cdot \sigma_y$$

---

## 4. Parameter Proses & Optimasi Jalur Pembebanan (Loading Path)

Sebuah siklus pembebanan (*loading path*) hydroforming yang sukses terdiri atas tiga tahapan sekuensial yang sinkron:

1. **Tahap Pengisian & Penutupan Awal (*Pre-forming & Clamping*)**: Tabung diisi fluida hidrolik hingga udara terbuang bebas (*venting*), cetakan menutup dengan gaya pengunci (*clamping force* $F_{\text{clamp}} > P_{\text{max}} \cdot A_{\text{proj}}$).
2. **Tahap Ekspansi & Dorongan Aksial (*Expansion & Axial Feeding*)**: Tekanan internal $P_i(t)$ dinaikkan secara simultan dengan perpindahan plunger aksial $s(t)$ untuk menyuplai material ke rongga ekspansi sehingga ketebalan dinding tetap terjaga ($t \ge 0.80 t_0$).
3. **Tahap Kalibrasi Akhir (*Final Calibration Phase*)**: Umpan aksial berhenti, tekanan internal dinaikkan ke puncak ($P_{\text{cal}} \approx 150 - 350\ \text{MPa}$) selama $0.5 - 2\ \text{detik}$ untuk membentuk detail radius sudut tajam ($R_c \le 3 - 5\ \text{mm}$).

---

## 5. Implementasi Algoritma Python: Solver Multaksial Hill-48, Jendela Kegagalan, dan Generator Jalur Pembebanan

Berikut adalah solver komputasi Python berorientasi objek lengkap untuk merancang parameter mesin hydroforming, mengevaluasi kriteria luluh Hill-48, dan memvalidasi batas *wrinkling-bursting*.

```python
"""
RuangTI Engineering Knowledge Base - Module 574
Tube Hydroforming (THF) Multiaxial Mechanics & Loading Path Optimizer
Standard: DIN 8584-6 / ISO 12004 / ASTM E2218
"""

import math
from dataclasses import dataclass
from typing import Dict, List, Tuple


@dataclass
class TubeMaterial:
    name: str
    youngs_modulus_gpa: float  # E (GPa)
    poissons_ratio: float  # nu
    yield_strength_mpa: float  # sigma_y (MPa)
    strength_coeff_k_mpa: float  # K in Hollomon law (MPa)
    strain_hardening_n: float  # n in Hollomon law
    anisotropy_r_value: float  # Lankford r-value (width/thickness strain ratio)
    density_kg_m3: float = 7850.0


@dataclass
class TubeGeometry:
    outer_diameter_mm: float  # D_0 (mm)
    wall_thickness_mm: float  # t_0 (mm)
    tube_length_mm: float  # L_0 (mm)
    target_bulge_diameter_mm: float  # D_target (mm)
    die_corner_radius_mm: float  # R_c (mm)

    @property
    def initial_radius_mm(self) -> float:
        return (self.outer_diameter_mm - self.wall_thickness_mm) / 2.0

    @property
    def expansion_ratio_pct(self) -> float:
        return ((self.target_bulge_diameter_mm - self.outer_diameter_mm) / self.outer_diameter_mm) * 100.0


class TubeHydroformingSolver:
    def __init__(self, material: TubeMaterial, geometry: TubeGeometry):
        self.mat = material
        self.geom = geometry

    def calculate_yield_internal_pressure(self) -> float:
        """
        Menghitung tekanan internal teoritis saat awal terjadinya luluh elastoplastis (MPa)
        menggunakan kriteria luluh Hill-48 pada kondisi free-bulging.
        """
        r = self.mat.anisotropy_r_value
        sigma_y = self.mat.yield_strength_mpa
        r_mid = self.geom.initial_radius_mm
        t_0 = self.geom.wall_thickness_mm

        # Hill's equivalent stress factor under closed-end internal pressure (alpha = 0.5)
        # f_hill = sqrt(1 - 2*r/(1+r)*0.5 + 0.25)
        hill_factor = math.sqrt(1.0 - (r / (1.0 + r)) + 0.25)
        p_yield = (sigma_y * t_0) / (r_mid * hill_factor)
        return p_yield

    def calculate_bursting_pressure_limit(self, current_expansion_ratio: float = 0.15) -> float:
        """
        Menghitung batas tekanan maksimum sebelum ketidakstabilan penipisan/pecah (Bursting Limit).
        """
        k = self.mat.strength_coeff_k_mpa
        n = self.mat.strain_hardening_n
        
        # True hoop strain at maximum uniform plastic strain
        eps_hoop = math.log(1.0 + current_expansion_ratio)
        sigma_flow = k * (eps_hoop ** n)
        
        current_radius = (self.geom.outer_diameter_mm * (1.0 + current_expansion_ratio)) / 2.0
        current_thickness = self.geom.wall_thickness_mm * math.exp(-eps_hoop)
        
        # Bursting pressure model
        p_burst = (2.0 * current_thickness / current_radius) * sigma_flow * (2.0 / math.sqrt(3.0)) ** (n + 1.0)
        return p_burst

    def calculate_wrinkling_pressure_threshold(self) -> float:
        """
        Menghitung tekanan internal minimum yang diperlukan untuk mencegah tekuk plastis (Wrinkling Threshold).
        """
        e_mpa = self.mat.youngs_modulus_gpa * 1000.0
        nu = self.mat.poissons_ratio
        t_d_ratio = self.geom.wall_thickness_mm / self.geom.outer_diameter_mm
        
        p_wrinkle = (2.0 * e_mpa / (1.0 - nu**2)) * (t_d_ratio ** 3) * 0.45
        return p_wrinkle

    def calculate_calibration_pressure(self) -> float:
        """
        Menghitung tekanan kalibrasi akhir yang dibutuhkan untuk mencetak radius sudut cetakan R_c.
        P_cal = (t / R_c) * sigma_flow_cal
        """
        k = self.mat.strength_coeff_k_mpa
        n = self.mat.strain_hardening_n
        # Flow stress at full calibration strain
        eps_cal = math.log(self.geom.target_bulge_diameter_mm / self.geom.outer_diameter_mm)
        eps_cal = max(eps_cal, 0.05)
        sigma_cal = k * (eps_cal ** n)

        t_min = self.geom.wall_thickness_mm * 0.85
        p_cal = (t_min / self.geom.die_corner_radius_mm) * sigma_cal
        return p_cal

    def calculate_required_press_tonnage(self, calibration_pressure_mpa: float) -> Dict[str, float]:
        """
        Menghitung gaya pengunci cetakan hidrolik (Clamping Force) dan gaya dorong aksial (Axial Force).
        """
        # Projected area of expanded tube inside die (mm^2)
        proj_area_mm2 = self.geom.target_bulge_diameter_mm * self.geom.tube_length_mm
        
        # Clamping Force (kN & Tons with 1.25 safety factor)
        clamping_force_kn = (calibration_pressure_mpa * proj_area_mm2 * 1.25) / 1000.0
        clamping_force_tons = clamping_force_kn / 9.80665

        # Axial punch force to overcome internal pressure and friction
        tube_cross_area_mm2 = math.pi * (self.geom.outer_diameter_mm * self.geom.wall_thickness_mm)
        axial_fluid_force_kn = (calibration_pressure_mpa * (math.pi * (self.geom.initial_radius_mm**2))) / 1000.0
        axial_plastic_force_kn = (self.mat.yield_strength_mpa * tube_cross_area_mm2) / 1000.0
        total_axial_force_kn = (axial_fluid_force_kn + axial_plastic_force_kn) * 1.15
        total_axial_force_tons = total_axial_force_kn / 9.80665

        return {
            "projected_area_cm2": proj_area_mm2 / 100.0,
            "clamping_force_kn": clamping_force_kn,
            "clamping_force_metric_tons": clamping_force_tons,
            "axial_force_kn": total_axial_force_kn,
            "axial_force_metric_tons": total_axial_force_tons,
        }

    def generate_optimized_loading_path(self, total_time_s: float = 12.0, steps: int = 12) -> List[Dict[str, float]]:
        """
        Menghasilkan kurva profil jalur pembebanan optimal P_int(t) dan Axial Feed s_ax(t)
        yang berada di dalam zona stabil (bebas kerutan dan bebas robek).
        """
        p_yield = self.calculate_yield_internal_pressure()
        p_burst = self.calculate_bursting_pressure_limit(self.geom.expansion_ratio_pct / 100.0)
        p_cal = self.calculate_calibration_pressure()

        # Maximum stroke required for material feeding (mm)
        target_exp_area = math.pi * self.geom.target_bulge_diameter_mm * (self.geom.tube_length_mm * 0.4)
        init_exp_area = math.pi * self.geom.outer_diameter_mm * (self.geom.tube_length_mm * 0.4)
        area_diff = target_exp_area - init_exp_area
        max_feed_stroke_mm = area_diff / (math.pi * self.geom.outer_diameter_mm)

        path = []
        dt = total_time_s / steps

        for i in range(steps + 1):
            t = i * dt
            progress = t / total_time_s
            
            if progress <= 0.20:
                # Stage 1: Pre-forming & Sealing
                p_current = p_yield * 0.70 * (progress / 0.20)
                stroke_current = 0.0
                phase = "Pre-fill & Sealing"
            elif progress <= 0.75:
                # Stage 2: Main Expansion with Simultaneous Axial Feed
                p_progress = (progress - 0.20) / (0.75 - 0.20)
                # Pressure rises smoothly between yield and 80% burst
                p_current = (p_yield * 0.70) + (p_burst * 0.75 - p_yield * 0.70) * (p_progress ** 0.85)
                stroke_current = max_feed_stroke_mm * (p_progress ** 1.1)
                phase = "Axial Feed Expansion"
            else:
                # Stage 3: High-Pressure Calibration Phase (Feed holds, Pressure peaks)
                cal_progress = (progress - 0.75) / (1.0 - 0.75)
                p_current = (p_burst * 0.75) + (p_cal - p_burst * 0.75) * (cal_progress ** 1.5)
                stroke_current = max_feed_stroke_mm
                phase = "Corner Calibration"

            path.append({
                "time_s": round(t, 2),
                "phase": phase,
                "pressure_mpa": round(p_current, 2),
                "axial_feed_mm": round(stroke_current, 2),
            })

        return path


# =====================================================================
# Unit Test & Validasi Rekayasa Otomotif
# =====================================================================
if __name__ == "__main__":
    # Material Baja Paduan Ringan Otomotif: DP600 (Dual Phase High-Strength Steel)
    dp600 = TubeMaterial(
        name="DP600 Dual-Phase Steel",
        youngs_modulus_gpa=210.0,
        poissons_ratio=0.30,
        yield_strength_mpa=360.0,
        strength_coeff_k_mpa=980.0,
        strain_hardening_n=0.19,
        anisotropy_r_value=1.15,
    )

    # Komponen Otomotif: Engine Cradle Subframe Tubular Crossmember
    crossmember_geom = TubeGeometry(
        outer_diameter_mm=65.0,
        wall_thickness_mm=2.0,
        tube_length_mm=550.0,
        target_bulge_diameter_mm=82.0,  # +26.15% Expansion
        die_corner_radius_mm=5.0,
    )

    solver = TubeHydroformingSolver(dp600, crossmember_geom)
    p_y = solver.calculate_yield_internal_pressure()
    p_w = solver.calculate_wrinkling_pressure_threshold()
    p_b = solver.calculate_bursting_pressure_limit(crossmember_geom.expansion_ratio_pct / 100.0)
    p_c = solver.calculate_calibration_pressure()
    tonnage = solver.calculate_required_press_tonnage(p_c)
    loading_path = solver.generate_optimized_loading_path(total_time_s=10.0, steps=10)

    print("=" * 80)
    print("ANALISIS REKAYASA TUBE HYDROFORMING (THF) - OTOMOTIF SUBFRAME DP600")
    print("=" * 80)
    print(f"Material                     : {dp600.name} (r-value: {dp600.anisotropy_r_value})")
    print(f"Dimensi Pipa Awal            : D0 = {crossmember_geom.outer_diameter_mm} mm, t0 = {crossmember_geom.wall_thickness_mm} mm")
    print(f"Target Ekspansi (Bulge)      : D_target = {crossmember_geom.target_bulge_diameter_mm} mm (+{crossmember_geom.expansion_ratio_pct:.2f}%)")
    print(f"Radius Sudut Cetakan (R_c)   : {crossmember_geom.die_corner_radius_mm} mm")
    print("-" * 80)
    print("BATAS TEKANAN HIDROSTATIK (PRESSURE WINDOW):")
    print(f"1. Tekanan Luluh Awal (P_yield)       : {p_y:.2f} MPa")
    print(f"2. Ambang Kerutan Kritis (P_wrinkle)  : {p_w:.2f} MPa")
    print(f"3. Batas Pecah / Bursting (P_burst)   : {p_b:.2f} MPa")
    print(f"4. Tekanan Kalibrasi Sudut (P_cal)    : {p_c:.2f} MPa")
    print("-" * 80)
    print("SPESIFIKASI KAPASITAS MESIN PRES HIDROLIK (PRESS TONNAGE):")
    print(f"- Gaya Pengunci Cetakan (Clamping Force): {tonnage['clamping_force_kn']:.1f} kN ({tonnage['clamping_force_metric_tons']:.1f} Ton Metrik)")
    print(f"- Total Gaya Dorong Aksial Silinder     : {tonnage['axial_force_kn']:.1f} kN ({tonnage['axial_force_metric_tons']:.1f} Ton Metrik)")
    print("-" * 80)
    print("PROFIL JALUR PEMBEBANAN OPTIMAL (OPTIMIZED LOADING PATH):")
    print(f"{'Time (s)':<10} | {'Tahapan Proses':<22} | {'Internal P (MPa)':<18} | {'Axial Feed (mm)':<16}")
    print("-" * 72)
    for step in loading_path:
        print(f"{step['time_s']:<10.1f} | {step['phase']:<22} | {step['pressure_mpa']:<18.2f} | {step['axial_feed_mm']:<16.2f}")
    print("=" * 80)
```

---

## 6. Studi Kasus Industri Otomotif: Manufaktur Engine Cradle Crossmember dengan Reduksi Bobot 28%

### 6.1 Latar Belakang Desain
Sebuah OEM kendaraan listrik (*Electric Vehicle - EV*) mendesain ulang komponen *Engine Cradle Subframe Crossmember* yang semula dibuat dari 3 pelat baja pres stamping yang dilas titik (*spot welded*). Struktur lama memiliki bobot total $14.8\ \text{kg}$, rawan korosi celah (*crevice corrosion*) pada bibir las, dan memiliki variasi kekakuan lentur.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                 STUDI KASUS REDESAIN SUBFRAME: STAMPING WELDMENT VS. TUBE HYDROFORMING MONOLITIK                      |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   A. Desain Lama: 3-Piece Stamping Weldment                   B. Desain Baru: Monolithic Tube Hydroforming            |
|   ┌───────────────────────────────────────────┐               ┌───────────────────────────────────────────┐           |
|   │ ┌───────────────────────────────────────┐ │               │ ┌───────────────────────────────────────┐ │           |
|   │ │   Pelat Atas (Upper Shell 2.2 mm)     │ │               │ │                                       │ │           |
|   │ └───┬───┬───┬───┬───┬───┬───┬───┬───┬───┘ │               │ │    Struktur Tabung Monolitik Tunggal  │ │           |
|   │     *   *   *   *   *   *   *   *   *     │               │ │         Baja DP600 (2.0 mm)           │ │           |
|   │   Spot Weld Flange (Zona Retak Lelah)     │               │ │  Bebas Flens Las (Smooth Contour)     │ │           |
|   │ ┌───┴───┴───┴───┴───┴───┴───┴───┴───┴───┐ │               │ │                                       │ │           |
|   │ │   Pelat Bawah (Lower Shell 2.2 mm)    │ │               │ └───────────────────────────────────────┘ │           |
|   │ └───────────────────────────────────────┘ │               └───────────────────────────────────────────┘           |
|   └───────────────────────────────────────────┘               [ Berat: 10.6 kg (-28.4% Reduksi Bobot) ]               |
|   [ Berat: 14.8 kg | Titik Las: 42 Spot Welds ]               [ Kekakuan Torsi: +34% Lebih Kaku ]                     |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 6.2 Penerapan Parameter Hydroforming & Hasil Pengujian
1. **Material Benda Kerja**: Pipa baja berfasa ganda DP600 ($D_0 = 65\ \text{mm}, t_0 = 2.0\ \text{mm}, L = 550\ \text{mm}$).
2. **Siklus Loading Path**:
   - Tekanan ekspansi dinaikkan bertahap hingga $85\ \text{MPa}$ diiringi dorongan umpan silinder aksial ganda sebesar $21.5\ \text{mm}$ dari kedua ujung.
   - Tekanan puncak kalibrasi $P_{\text{cal}} = 195\ \text{MPa}$ ditahan selama $1.2\ \text{detik}$ untuk membentuk profil penampang kotak dengan $R_c = 5.0\ \text{mm}$.
3. **Hasil Integritas Struktural**:
   - **Keseragaman Ketebalan**: Penipisan minimum tertahan pada $t_{\text{min}} = 1.76\ \text{mm}$ ($12\%$ thinning, jauh di bawah ambang batas kritis FLD $25\%$).
   - **Bebas Defek**: Tidak ditemukan kerutan gelombang maupun robekan mikro (*zero wrinkling, zero burst*).
   - **Bobot Komponen**: Berkurang dari $14.8\ \text{kg}$ menjadi $10.6\ \text{kg}$ (penghematan bobot $-28.4\%$).
   - **Performa Kelelahan Dinamis**: Uji ketahanan torsional menunjukkan kenaikan umur fatik dari $3.5 \times 10^5\ \text{siklus}$ menjadi $> 1.2 \times 10^6\ \text{siklus}$ tanpa kegagalan.

---

## 7. Referensi Akademis & Standar Industri Terverifikasi

1. **Ahmetoglu, M., & Altan, T.** (2000). "Tube hydroforming: state-of-the-art and future trends". *Journal of Materials Processing Technology*, 98(1), 25–33. DOI: [10.1016/S0924-0136(99)00302-7](https://doi.org/10.1016/S0924-0136(99)00302-7).
2. **Koc, M., & Altan, T.** (2001). "An overall review on tube hydroforming technology". *Journal of Materials Processing Technology*, 108(3), 384–393. DOI: [10.1016/S0924-0136(00)00830-X](https://doi.org/10.1016/S0924-0136(00)00830-X).
3. **Groover, M. P.** (2020). *Fundamentals of Modern Manufacturing: Materials, Processes, and Systems* (7th ed.). John Wiley & Sons, Hoboken, NJ. ISBN: 978-1-119-70642-7.
4. **Asnafi, N.** (1999). "Analytical modelling of tube hydroforming". *Thin-Walled Structures*, 34(4), 295–330. DOI: [10.1016/S0263-8231(99)00018-X](https://doi.org/10.1016/S0263-8231(99)00018-X).
5. **DIN 8584-6:2004** (2004). *Manufacturing processes forming under tensile and compressive conditions - Part 6: Hydroforming; Classification, type of processes, terms and definitions*. Deutsches Institut für Normung, Berlin.
6. **ISO 12004-2:2021** (2021). *Metallic materials — Determination of forming-limit curves for sheet and strip — Part 2: Determination of forming-limit curves in the laboratory*. International Organization for Standardization, Geneva.
