# Modul 569: Industrial X-ray Computed Tomography (XCT) Dimensional Metrology, VDI/VDE 2630 & ISO 10360-11 Standard Testing, Porosity Defect Characterization, and PVR Coordinate Calibration

## 1. Pengantar & Urgensi Metrologi Industri X-ray Computed Tomography (XCT)

Dalam era manufaktur presisi modern, pengadopsian geometri kompleks non-konvensional meningkat pesat seiring meluasnya implementasi *Additive Manufacturing* (seperti *Laser Powder Bed Fusion* / L-PBF dan *Electron Beam Melting* / EBM), pengecoran presisi (*high-pressure die casting* / HPDC), serta komponen biomedis/kedirgantaraan terintegrasi (*monolithic hollow turbine blades*, *lattice structures*, dan saluran pendingin konformal).

Metode metrologi koordinat taktil konvensional (*Coordinate Measuring Machine* / CMM) dan pemindaian optik (*Structured Light Scanner* / Laser Triangulation) memiliki limitasi fisik fundamental: **hanya mampu mengukur geometri permukaan luar yang tampak (*line-of-sight accessible surfaces*)**. Pengukuran fitur internal tersembunyi (*internal blind cavities*, *undercuts*, *cooling channels*), analisis porositas volumetrik internal (gas pores, keyhole voids, lack of fusion), serta evaluasi ketebalan dinding (*wall thickness variation*) secara destruktif (*cross-sectioning metallography*) memakan waktu lama, merusak benda kerja mahal, dan hanya memberikan representasi 2D lokal.

**Industrial X-ray Computed Tomography (XCT)** hadir sebagai teknologi metrologi nondestruktif (*non-destructive coordinate metrology*) 3D holistik yang mampu menangkap struktur internal dan eksternal secara simultan dengan akurasi sub-mikron hingga beberapa mikron. XCT mentranslasikan ratusan hingga ribuan proyeksi radiografi 2D sinar-X multi-sudut menjadi model densitas volumetrik voxel 3D (*reconstructed volumetric voxel grid*) melalui rekonstruksi matematis Radon transform dan *Feldkamp-Davis-Kress* (FDK) cone-beam filtered backprojection.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                 PERBANDINGAN SISTEM METROLOGI KOORDINAT INDUSTRI: CMM, OPTIK, DAN INDUSTRIAL XCT                      |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  1. Coordinate Measuring Machine Taktil (Tactile CMM - ISO 10360-2):                                                  |
|     - Mekanisme : Kontak fisik probe stylus mekanis (Ruby/Silicon Nitride tip).                                       |
|     - Kelebihan : Akurasi tertinggi (MPE_E = 0.5 + L/400 µm), standar emas industri metrologi dimensi.                |
|     - Limitasi  : Lambat (point-by-point), hanya mengukur eksternal, risiko defleksi stylus pada mikro-lubang.        |
|                                                                                                                       |
|  2. Optical 3D Scanner (Fringe Projection / Laser Line - VDI/VDE 2634):                                               |
|     - Mekanisme : Triangulasi optik cahaya tampak / struktur garis fringe.                                            |
|     - Kelebihan : Kecepatan akuisisi permukaan tinggi (jutaan titik dalam hitungan detik).                            |
|     - Limitasi  : Bergantung pada reflektansi permukaan (butuh coating spray), tidak bisa melihat rongga tertutup.    |
|                                                                                                                       |
|  3. Industrial X-ray Computed Tomography (Dimensional XCT - VDI/VDE 2630 & ISO 10360-11 - Modul Ini):               |
|     - Mekanisme : Penetrasi foton sinar-X multi-proyeksi volumetrik & rekonstruksi atenuasi linear Lambert-Beer.     |
|     - Kelebihan : Mengukur dimensi eksternal & internal simultan tanpa kontak, visualisasi porositas & void 3D,      |
|                   verifikasi CAD-to-part nominal-actual comparison seluruh bodi benda kerja secara nondestruktif.     |
|     - Tantangan : Artefak pemindaian (beam hardening, ring artifact, scatter), komputasi rekonstruksi besar,         |
|                   perlunya kalibrasi scale factor & penentuan ambang batas permukaan (ISO 50% surface determination). |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 2. Arsitektur Fisik Sistem XCT & Kinematika Cone-Beam Computed Tomography

Sistem metrologi XCT industri tipe laboratorium dan produksi umumnya mengadopsi konfigurasi *Cone-Beam CT* dengan meja putar presisi (*high-precision rotary stage*), sumber sinar-X mikrofokus (*micro-focus X-ray tube*), dan detektor panel datar digital (*flat-panel detector* / FPD).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                             ARSITEKTUR FISIK INDUSTRIAL CONE-BEAM X-RAY COMPUTED TOMOGRAPHY                           |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|    X-ray Tube Source (Target W/Mo)                                                                                    |
|    Focal Spot Size (d_f = 1 - 5 µm)                                                                                   |
|            │                                                                                                          |
|            ▼ Berkas Kerucut Sinar-X                                                                                   |
|           / \                               Meja Putar Presisi (Rotary Stage θ = 0°..360°)                            |
|          /   \                               ┌───────────────────────────┐                                            |
|         /     \                              │     Spesimen Benda Uji    │                                            |
|        /   ●   \  ──────────────────────────►│ (Alloy Die Casting / AM)  │                                            |
|       /         \                            └─────────────┬─────────────┘                                            |
|      /           \                                         │                                                          |
|     /             \                                        │ Penetrasi Sinar-X Teratenuasi                            |
|    /               \                                       ▼                                                          |
|   ┌─────────────────┐                        ┌───────────────────────────┐                                            |
|   │ ◄─── FOD ─────► │                        │ ◄────────── FDD ────────► │                                            |
|   └─────────────────┘                        └───────────────────────────┘                                            |
|                                                            │                                                          |
|                                                            ▼                                                          |
|                                              ┌───────────────────────────┐                                            |
|                                              │ Flat Panel Detector (FPD) │ Dimensi: M x N Piksel                      |
|                                              │ CsI(Tl) / a-Si Scintill.  │ Ukuran Piksel: p_det = 100 - 200 µm        |
|                                              └───────────────────────────┘                                            |
|                                                            │                                                          |
|                                                            ▼ Proyeksi Radiografi I(u, v, θ) (N_proj = 1000 - 3600)    |
|                                              ┌───────────────────────────┐                                            |
|                                              │ GPU Reconstruction Engine │ Algoritma Feldkamp-Davis-Kress (FDK)       |
|                                              │ 3D Voxel Grid μ(x, y, z)  │ Ukuran Voxel: v_vox = p_det / M_mag        |
|                                              └───────────────────────────┘                                            |
|                                                            │                                                          |
|                                                            ▼ Ekstraksi Permukaan & Metrologi Dimensi                  |
|                                              ┌───────────────────────────┐                                            |
|                                              │ Surface Mesh (STL/STEP)   │ Penentuan Ambang Batas ISO-50% / Local Max |
|                                              │ VDI/VDE 2630 / ISO 10360  │ Pengukuran GD&T, Form, Porosity Defect     |
|                                              └───────────────────────────┘                                            |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.1. Parameter Geometri & Pembesaran Optik Sinar-X

1. **Focus-to-Object Distance ($\text{FOD}$)**: Jarak dari titik fokus elektron anoda (*focal spot*) ke sumbu rotasi meja putar.
2. **Focus-to-Detector Distance ($\text{FDD}$)**: Jarak total dari titik fokus anoda ke bidang sensor detektor panel datar.
3. **Faktor Pembesaran Geometris (*Geometric Magnification*, $M_{\text{mag}}$)**:
   $$M_{\text{mag}} = \frac{\text{FDD}}{\text{FOD}}$$
4. **Ukuran Voxel Efektif (*Effective Voxel Size*, $v_{\text{vox}}$)**:
   $$v_{\text{vox}} = \frac{p_{\text{det}}}{M_{\text{mag}}} = p_{\text{det}} \cdot \frac{\text{FOD}}{\text{FDD}}$$
   dengan $p_{\text{det}}$ adalah ukuran piksel fisik detektor panel datar ($\mu\text{m}$).
5. **Kekaburan Geometris Titik Fokus (*Focal Spot Geometric Unsharpness*, $U_g$)**:
   $$U_g = d_f \cdot (M_{\text{mag}} - 1) = d_f \left(\frac{\text{FDD}}{\text{FOD}} - 1\right)$$
   dengan $d_f$ adalah diameter titik fokus sumber sinar-X (*X-ray focal spot diameter*).

---

## 3. Landasan Teori & Formulasi Matematis Formal

```
+-----------------------------------------------------------------------------------------------------------------------+
|                          FORMULASI FISIKA ATENUASI RADIASI, RADON TRANSFORM & REKONSTRUKSI FDK                        |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  1. Hukum Atenuasi Lambert-Beer Polikromatik:                                                                         |
|     I = I_0 * exp( - ∫ μ(s, E) ds )  ==>  I_det(u,v,θ) = ∫ Φ_0(E) * η(E) * exp( - ∫ μ(x,y,z,E) ds ) dE               |
|                                                                                                                       |
|  2. Transformasi Radon 2D (Sino-gram Basis):                                                                          |
|     p(s, θ) = R{f(x,y)} = ∫∫ f(x, y) * δ(x*cos(θ) + y*sin(θ) - s) dx dy                                              |
|                                                                                                                       |
|  3. Transformasi Balik Radon (Filtered Backprojection / FBP):                                                         |
|     f(x, y) = ∫_0^π [ p(s, θ) * h(s) ] |_{s = x*cos(θ) + y*sin(θ)} dθ                                                 |
|     dengan h(s) adalah filter ramp (Ram-Lak / Shepp-Logan).                                                           |
|                                                                                                                       |
|  4. Rekonstruksi Volumetrik Cone-Beam FDK (Feldkamp, Davis, Kress):                                                  |
|     μ(x, y, z) = 1/2 * ∫_0^{2π} ( FDD^2 / (FDD - s')^2 ) * [ p_w(u', v', θ) * h_u(u') ] dθ                          |
|                                                                                                                       |
|  5. Evaluasi Kinerja Metrologi Berdasarkan Standar VDI/VDE 2630 Blatt 1.3 & ISO 10360-11:                             |
|     - Probing Size Error (P_S) & Probing Form Error (P_F) menggunakan Calibrated Sphere.                              |
|     - Length Measurement Error (E_L):  |E_L| ≤ MPE_E = ± ( A + L / K )  [µm]                                          |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 3.1. Interaksi Radiasi Foton dengan Materi & Penyerapan Polikromatik

Ketika berkas sinar-X monokromatik menembus materi homogen berketebalan $x$, intensitas foton yang lolos $I$ ditentukan oleh koefisien atenuasi linear $\mu(E)$:
$$I(E) = I_0(E) \exp(-\mu(E) \cdot x)$$

Dalam konteks volumetrik heterogen 3D, atenuasi total di sepanjang garis sinar lintasan $L$ (*ray path*) adalah integral garis:
$$p_L = -\ln\left(\frac{I}{I_0}\right) = \int_L \mu(x, y, z, E) \, ds$$

Koefisien atenuasi linear $\mu(E)$ merupakan fungsi dari densitas massa material $\rho$ dan koefisien atenuasi massa $\mu/\rho(E)$, yang didominasi oleh efek fotolistrik (*Photoelectric Effect*) pada energi rendah dan hamburan Compton (*Compton Scattering*) pada energi menengah:
$$\frac{\mu}{\rho}(E) \approx C_1 \frac{Z^4}{A \cdot E^3} + C_2 \frac{Z}{A} f_C(E)$$
dengan $Z$ adalah nomor atom, $A$ massa atom relatif, dan $E$ energi foton sinar-X ($\text{keV}$).

### 3.2. Formulasi Rekonstruksi Cone-Beam Feldkamp-Davis-Kress (FDK)

Untuk geometri berkas kerucut (*cone-beam*), proyeksi radiografi berbobot (*weighted projection*) $p_w(u, v, \theta)$ pada koordinat bidang detektor $(u, v)$ dirotasikan sebesar sudut $\theta$:
$$p_w(u, v, \theta) = p(u, v, \theta) \cdot \frac{\text{FDD}}{\sqrt{\text{FDD}^2 + u^2 + v^2}}$$

Proyeksi berbobot ini kemudian difilter secara 1D di sepanjang baris detektor $u$ menggunakan kernel filter ramp $h(u)$ (misalnya filter Ram-Lak):
$$\tilde{p}(u, v, \theta) = p_w(u, v, \theta) * h(u) = \int_{-\infty}^{\infty} p_w(u', v, \theta) \, h(u - u') \, du'$$

Nilai voxel 3D $\mu(x, y, z)$ direkonstruksi melalui *backprojection* berbobot 3D:
$$\mu(x, y, z) = \frac{1}{2} \int_0^{2\pi} \frac{\text{FDD}^2}{(\text{FOD} - y')^2} \, \tilde{p}\left( u^*(x, y, z, \theta), v^*(x, y, z, \theta), \theta \right) \, d\theta$$
dengan pemetaan proyeksi koordinat objek ke bidang detektor:
$$u^* = \text{FDD} \cdot \frac{x \cos\theta + y \sin\theta}{\text{FOD} - (-x \sin\theta + y \cos\theta)}$$
$$v^* = \text{FDD} \cdot \frac{z}{\text{FOD} - (-x \sin\theta + y \cos\theta)}$$

### 3.3. Penentuan Ambang Batas Permukaan (Surface Determination) & Koreksi Artefak

Nilai voxel mentah merepresentasikan koefisien atenuasi lokal dalam skala abu-abu (*Gray Value* / GV). Untuk mengukur dimensi geometris (GD&T) dan mengekstrak *mesh* permukaan STL/STEP, batas fisik antarmuka material-udara (*material-air boundary*) harus ditentukan:
1. **Metode Ambang Global ISO-50% ($GV_{50\%}$)**:
   $$GV_{50\%} = \frac{GV_{\text{background/air}} + GV_{\text{material}}}{2}$$
2. **Metode Ambang Gradien Lokal Maksimum (*Advanced Local Thresholding / Maximum Gradient*)**:
   Menemukan titik transisi di sepanjang vektor normal permukaan di mana turunan pertama medan intensitas voxel mencapai nilai puncak lokal:
   $$\nabla GV(\mathbf{r}) = \max \left( \left\| \frac{\partial GV}{\partial \mathbf{n}} \right\| \right)$$

### 3.4. Karakterisasi Cacat Porositas Volumetrik (ASTM E505 / BDG P201 / VDG P202)

1. **Porositas Total Volumetrik (*Global Porosity Percentage*, $\Phi_{\text{por}}$)**:
   $$\Phi_{\text{por}} = \frac{V_{\text{void\_total}}}{V_{\text{nominal\_part}}} \times 100\% = \frac{\sum_{k=1}^{K} V_{\text{pore}, k}}{V_{\text{solid}} + \sum_{k=1}^{K} V_{\text{pore}, k}} \times 100\%$$
2. **Sphericity Cacat Pori ($\Psi_{\text{sph}}$)**:
   $$\Psi_{\text{sph}} = \frac{\pi^{1/3} (6 V_{\text{pore}})^{2/3}}{A_{\text{pore}}}$$
   - Gas Pores (Entrapped gas): $\Psi_{\text{sph}} \ge 0.70$ (mendekati bola sempurna).
   - Shrinkage Cavity / Lack of Fusion (LoF): $\Psi_{\text{sph}} < 0.50$ (morfologi pipih, bersudut tajam, konsentrasi tegangan tinggi).
3. **Pore Size Distribution**: Diameter ekuivalen bola (*Equivalent Sphere Diameter*, $d_{\text{eq}}$):
   $$d_{\text{eq}} = 2 \left( \frac{3 V_{\text{pore}}}{4 \pi} \right)^{1/3}$$

---

## 4. Standar Uji Metrologi VDI/VDE 2630 Blatt 1.3 & ISO 10360-11

Untuk memastikan ketertelusuran metrologis (*metrological traceability*) XCT setara dengan CMM, instrumen XCT harus diverifikasi menggunakan standar acuan terkalibrasi (*Calibrated Ball Bar*, *Hole Plate*, atau *Multi-Sphere Phantom*):

```
+-----------------------------------------------------------------------------------------------------------------------+
|                         METRIK VERIFIKASI AKURASI XCT SESUAI VDI/VDE 2630 BLATT 1.3 & ISO 10360-11                    |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  1. Sphere Probing Size Error (P_S):                                                                                  |
|     P_S = D_meas - D_calib                                                                                            |
|     D_meas = Diameter bola hasil fitting Gaussian terkecil pada cloud point rekonstruksi.                             |
|                                                                                                                       |
|  2. Sphere Probing Form Error (P_F):                                                                                  |
|     P_F = R_max - R_min                                                                                               |
|     Rentang radial deviasi titik permukaan terhadap pusat bola Gaussian fitted.                                       |
|                                                                                                                       |
|  3. Length Measurement Error (E_L) / Centre-to-Centre Distance:                                                       |
|     E_L = L_meas - L_calib                                                                                            |
|     Batas Penerimaan Maksimum (Maximum Permissible Error):  |E_L| ≤ MPE_E = ± ( A + L / K )  [µm]                       |
|     dengan A adalah konstanta dasar (µm), L adalah panjang ukur (mm), dan K adalah koefisien panjang.                 |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 5. Implementasi Algoritma & Komputasi Python: Pipeline Metrologi Dimensi XCT & Porosity Analyzer

Berikut adalah program Python mandiri berstandar industri untuk memproses evaluasi metrologi verifikasi bola terkalibrasi sesuai VDI/VDE 2630, kalibrasi *Scale Factor* voxel, klasifikasi morfologi porositas (Sphericity & Volume Distribution), serta pengujian batas MPE.

```python
"""
RuangTI Industrial Engineering Knowledge Base - Module 569
Industrial X-ray Computed Tomography (XCT) Dimensional Metrology & Defect Analysis
Standards: VDI/VDE 2630-1.3, ISO 10360-11, ASTM E505 / BDG P201
"""

import math
from typing import Dict, List, Tuple, Any

class XCTMetrologyAnalyzer:
    """
    Engine Analisis Metrologi Koordinat XCT dan Karakterisasi Porositas 3D.
    Menerapkan evaluasi VDI/VDE 2630-1.3, kalibrasi jarak bola, dan filter morfologi void.
    """
    def __init__(self, fod_mm: float, fdd_mm: float, detector_pixel_um: float):
        self.fod = fod_mm
        self.fdd = fdd_mm
        self.detector_pixel_um = detector_pixel_um
        self.magnification = self.fdd / self.fod
        self.nominal_voxel_size_um = self.detector_pixel_um / self.magnification

    def compute_geometric_parameters(self, focal_spot_um: float) -> Dict[str, float]:
        """Menghitung faktor pembesaran, ukuran voxel, dan unsharpness geometris."""
        ug = focal_spot_um * (self.magnification - 1.0)
        return {
            "geometric_magnification": round(self.magnification, 4),
            "nominal_voxel_size_um": round(self.nominal_voxel_size_um, 3),
            "geometric_unsharpness_ug_um": round(ug, 3)
        }

    def calibrate_voxel_scale_factor(self, measured_c2c_dist_vx: float, calibrated_c2c_dist_mm: float) -> Dict[str, float]:
        """
        Menghitung True Voxel Size (PVR - Pixel/Voxel Rescaling) berbasis standar Ball Bar terkalibrasi.
        """
        calibrated_c2c_dist_um = calibrated_c2c_dist_mm * 1000.0
        calibrated_voxel_size_um = calibrated_c2c_dist_um / measured_c2c_dist_vx
        scale_error_pct = ((calibrated_voxel_size_um - self.nominal_voxel_size_um) / self.nominal_voxel_size_um) * 100.0
        return {
            "calibrated_voxel_size_um": round(calibrated_voxel_size_um, 4),
            "nominal_voxel_size_um": round(self.nominal_voxel_size_um, 4),
            "scale_error_pct": round(scale_error_pct, 4)
        }

    def evaluate_vdi_vde_2630(self, sphere_measurements: List[Dict[str, float]], 
                              mpe_a_um: float, mpe_k: float) -> Dict[str, Any]:
        """
        Evaluasi akurasi metrologi dimensi menurut VDI/VDE 2630 Blatt 1.3.
        MPE_E = +/- (A + L / K) [µm]
        """
        results = []
        all_passed = True
        
        for item in sphere_measurements:
            l_calib_mm = item["calibrated_distance_mm"]
            l_meas_mm = item["measured_distance_mm"]
            error_el_um = (l_meas_mm - l_calib_mm) * 1000.0
            
            # Hitung MPE_E
            mpe_limit_um = mpe_a_um + (l_calib_mm / mpe_k)
            passed = abs(error_el_um) <= mpe_limit_um
            if not passed:
                all_passed = False
                
            results.append({
                "feature": item.get("name", "Distance"),
                "calibrated_mm": l_calib_mm,
                "measured_mm": l_meas_mm,
                "error_e_l_um": round(error_el_um, 3),
                "mpe_limit_um": round(mpe_limit_um, 3),
                "status": "PASS" if passed else "FAIL"
            })
            
        return {
            "mpe_formula": f"±({mpe_a_um} + L/{mpe_k}) µm",
            "overall_verification": "COMPLIANT" if all_passed else "NON_COMPLIANT",
            "details": results
        }

    def analyze_porosity_defects(self, defects: List[Dict[str, float]], 
                                 part_volume_mm3: float) -> Dict[str, Any]:
        """
        Karakterisasi porositas 3D: total porosity percentage, sphericity, klasifikasi jenis defek.
        """
        total_void_volume_mm3 = 0.0
        classified_pores = []
        
        gas_pores_count = 0
        shrinkage_count = 0
        
        for idx, defect in enumerate(defects):
            vol_mm3 = defect["volume_mm3"]
            area_mm2 = defect["surface_area_mm2"]
            
            total_void_volume_mm3 += vol_mm3
            
            # Sphericity = [pi^(1/3) * (6 * V)^(2/3)] / A
            sphericity = (math.pi**(1.0/3.0) * (6.0 * vol_mm3)**(2.0/3.0)) / area_mm2
            
            # Equivalent sphere diameter
            d_eq_mm = 2.0 * ((3.0 * vol_mm3) / (4.0 * math.pi))**(1.0/3.0)
            
            # Klasifikasi defek
            if sphericity >= 0.65:
                defect_type = "Gas Pore (Entrapped Gas / Keyhole)"
                gas_pores_count += 1
            else:
                defect_type = "Shrinkage Cavity / Lack of Fusion (LoF)"
                shrinkage_count += 1
                
            classified_pores.append({
                "pore_id": idx + 1,
                "volume_mm3": round(vol_mm3, 5),
                "surface_area_mm2": round(area_mm2, 4),
                "equivalent_diameter_mm": round(d_eq_mm, 4),
                "sphericity": round(sphericity, 4),
                "classification": defect_type
            })
            
        porosity_pct = (total_void_volume_mm3 / part_volume_mm3) * 100.0
        
        return {
            "total_part_volume_mm3": round(part_volume_mm3, 2),
            "total_pore_volume_mm3": round(total_void_volume_mm3, 5),
            "global_porosity_percentage": round(porosity_pct, 4),
            "total_defects_count": len(defects),
            "gas_pores_count": gas_pores_count,
            "shrinkage_pores_count": shrinkage_count,
            "defect_details": classified_pores
        }


# =====================================================================
# Skenario Pengujian & Eksekusi Validasi Industri
# =====================================================================
if __name__ == "__main__":
    print("=" * 85)
    print("RUANGTI INDUSTRIAL CT METROLOGY & DEFECT CHARACTERIZATION (VDI/VDE 2630 / ISO 10360-11)")
    print("=" * 85)

    # Spesifikasi Sistem XCT Mikrofokus 225 kV
    analyzer = XCTMetrologyAnalyzer(
        fod_mm=120.0,
        fdd_mm=600.0,
        detector_pixel_um=127.0
    )

    # 1. Parameter Geometris
    geo = analyzer.compute_geometric_parameters(focal_spot_um=3.0)
    print(f"[1] XCT Optical Configuration:")
    print(f"    - Magnification Factor (M)   : {geo['geometric_magnification']}x")
    print(f"    - Nominal Voxel Size         : {geo['nominal_voxel_size_um']} µm")
    print(f"    - Geometric Unsharpness (Ug) : {geo['geometric_unsharpness_ug_um']} µm\n")

    # 2. Kalibrasi Voxel Size menggunakan Calibrated Ball Bar (Jarak Nominal = 50.000 mm)
    c2c_dist_vx = 1968.80  # Terukur dalam satuan voxel grid
    calib = analyzer.calibrate_voxel_scale_factor(measured_c2c_dist_vx=c2c_dist_vx, calibrated_c2c_dist_mm=50.002)
    print(f"[2] Voxel Rescaling & PVR Calibration:")
    print(f"    - Calibrated True Voxel Size : {calib['calibrated_voxel_size_um']} µm")
    print(f"    - Scaling Error              : {calib['scale_error_pct']:.4f}%\n")

    # 3. Uji Verifikasi Akurasi Panjang VDI/VDE 2630 Blatt 1.3 (MPE_E = 4.5 + L / 100 µm)
    test_distances = [
        {"name": "Ball 1 - Ball 2", "calibrated_distance_mm": 20.001, "measured_distance_mm": 20.0035},
        {"name": "Ball 1 - Ball 3", "calibrated_distance_mm": 40.002, "measured_distance_mm": 40.0058},
        {"name": "Ball 1 - Ball 4", "calibrated_distance_mm": 60.004, "measured_distance_mm": 60.0089},
        {"name": "Ball 1 - Ball 5", "calibrated_distance_mm": 80.005, "measured_distance_mm": 80.0102},
    ]
    vdi_eval = analyzer.evaluate_vdi_vde_2630(test_distances, mpe_a_um=4.5, mpe_k=100.0)
    print(f"[3] VDI/VDE 2630-1.3 Verification Results (MPE: {vdi_eval['mpe_formula']}):")
    print(f"    Status Keseluruhan: {vdi_eval['overall_verification']}")
    for d in vdi_eval["details"]:
        print(f"    - {d['feature']:<18}: Calib={d['calibrated_mm']:>7.3f} mm, Meas={d['measured_mm']:>7.3f} mm | Error={d['error_e_l_um']:>+6.3f} µm | Limit=±{d['mpe_limit_um']:>5.2f} µm -> [{d['status']}]")

    # 4. Karakterisasi Cacat Porositas Komponen AlSi10Mg LPBF (Volume Nominal = 12500 mm³)
    sample_pores = [
        {"volume_mm3": 0.0450, "surface_area_mm2": 0.580},  # Bulat (Gas pore)
        {"volume_mm3": 0.0820, "surface_area_mm2": 0.920},  # Bulat (Keyhole)
        {"volume_mm3": 0.1250, "surface_area_mm2": 2.450},  # Pipih/Unfused (LoF)
        {"volume_mm3": 0.0150, "surface_area_mm2": 0.280},  # Bulat
        {"volume_mm3": 0.2100, "surface_area_mm2": 4.120},  # Pipih (Shrinkage)
    ]
    pore_eval = analyzer.analyze_porosity_defects(sample_pores, part_volume_mm3=12500.0)
    print(f"\n[4] Volumetric Porosity & Pore Morphology Analysis:")
    print(f"    - Total Void Volume          : {pore_eval['total_pore_volume_mm3']} mm³")
    print(f"    - Global Porosity            : {pore_eval['global_porosity_percentage']:.4f}%")
    print(f"    - Gas Pores (Spherical)      : {pore_eval['gas_pores_count']} cacat")
    print(f"    - Shrinkage / LoF (Planar)   : {pore_eval['shrinkage_pores_count']} cacat")
    print(f"    - Sampel Cacat Individual   :")
    for p in pore_eval["defect_details"]:
        print(f"      * Pori #{p['pore_id']}: Vol={p['volume_mm3']:.4f} mm³, d_eq={p['equivalent_diameter_mm']:.3f} mm, Sphericity={p['sphericity']:.3f} -> {p['classification']}")
    print("=" * 85)
```

---

## 6. Studi Kasus Industri Nyata: Inspeksi Dimensi Internal & Karakterisasi Porositas Manifold Hidrolik AlSi10Mg Hasil Additive Manufacturing

### 6.1. Konteks Permasalahan Industri & Metrologi

Sebuah perusahaan manufaktur kedirgantaraan memproduksi komponen *Hydraulic Valve Block Manifold* berbahan paduan aluminium $\text{AlSi10Mg}$ menggunakan mesin *Laser Powder Bed Fusion* (L-PBF). Manifold ini memiliki jaringan saluran fluida internal berbelok lengkung (*conformal internal flow channels*) berdiameter internal nominal $d = 6.000 \pm 0.025 \text{ mm}$ dan ketebalan dinding pemisah internal $t = 1.500 \pm 0.030 \text{ mm}$.

Masalah operasional yang dialami:
1. Pengukuran CMM taktil konvensional tidak dapat menjangkau saluran internal yang berliku sepanjang $180\text{ mm}$ (*zero accessibility*).
2. Terdapat kegagalan uji kebocoran tekanan (*pressure leak test* pada $350\text{ bar}$) pada $8.4\%$ batch produksi akibat adanya *Lack of Fusion* (LoF) internal yang menghubungkan dua saluran internal.
3. Terjadi penyimpangan koefisien ekspansi termal dan *scaling factor* voxel akibat drift suhu ruang pemindaian XCT ($\Delta T = 4.2^\circ\text{C}$).

### 6.2. Parameter Pengujian & Rekonstruksi XCT

- **Sistem XCT**: 225 kV Micro-focus X-ray Computed Tomography System.
- **Tegangan Tabung & Arus**: $V = 190\text{ kV}$, $I = 140\ \mu\text{A}$ (Daya fokus: $26.6\text{ W}$).
- **Ukuran Titik Fokus (*Focal Spot*)**: $d_f = 4.2\ \mu\text{m}$.
- **Pre-Filtering Fisik**: Tembaga ($1.0\text{ mm Cu}$) untuk mereduksi artefak *beam hardening*.
- **Geometri**: $\text{FOD} = 150.0\text{ mm}$, $\text{FDD} = 900.0\text{ mm}$ ($M_{\text{mag}} = 6.00\text{x}$).
- **Detektor**: Flat Panel $2048 \times 2048$ piksel, ukuran piksel fisik $p_{\text{det}} = 150\ \mu\text{m}$.
- **Ukuran Voxel Rekonstruksi**: $v_{\text{vox}} = 150 / 6.0 = 25.00\ \mu\text{m}$.
- **Jumlah Proyeksi**: $N_{\text{proj}} = 2400$ proyeksi pada rentang $360^\circ$, waktu integrasi $500\text{ ms}$ per frame dengan *frame averaging* 3x.
- **Ambience Control**: Enclosure CT distabilkan pada $20.0 \pm 0.2^\circ\text{C}$ sesuai ISO 1.

### 6.3. Hasil Pengukuran Metrologi & Klasifikasi Porositas

```
+-----------------------------------------------------------------------------------------------------------------------+
|                 HASIL EVALUASI METROLOGI DIMENSI XCT & ANALISIS CACAT MANIFOLD ALSI10MG                               |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  1. Kalibrasi Ketertelusuran VDI/VDE 2630-1.3 (Ball Bar 100 mm Terkalibrasi DKD/DAkkS):                               |
|     - Panjang Acuan Terkalibrasi (L_calib)  : 100.0032 mm                                                             |
|     - Panjang Terukur XCT Sebelum PVR       :  99.9680 mm (Error = -35.2 µm, FAIL MPE_E = ±5.5 µm)                    |
|     - Voxel Rescaling Factor (PVR)          : 1.000352 (Voxel terkoreksi: 25.0088 µm)                                 |
|     - Panjang Terukur XCT Setelah Koreksi   : 100.0018 mm (Error = -1.4 µm, PASS MPE_E)                               |
|                                                                                                                       |
|  2. Metrologi Fitur Saluran Internal Konformal (Target: d = 6.000 ± 0.025 mm):                                        |
|     - Diameter Saluran Rata-Rata Terukur    : 5.982 mm (Deviasi = -0.018 mm, Masuk Toleransi)                         |
|     - Silindrisitas Saluran (Cylindricity)  : 0.034 mm (Pengaruh roughness fusi serbuk L-PBF Ra ≈ 11 µm)              |
|     - Minimum Wall Thickness Antar-Saluran  : 1.482 mm (Toleransi 1.500 ± 0.030 mm -> PASS)                           |
|                                                                                                                       |
|  3. Analisis Porositas Volumetrik Kritis (ASTM E505 / BDG P201):                                                      |
|     - Volume Total Komponen Solid           : 48,250.0 mm³                                                            |
|     - Volume Total Void Terdeteksi          : 14.475 mm³                                                              |
|     - Persentase Porositas Global (Φ_por)   : 0.0300% (Di bawah batas kritis spesifikasi dirgantara 0.10%)            |
|     - Populasi Cacat:                                                                                                 |
|       * Gas Entrapped Pores (Spherical, Ψ ≥ 0.70) : 1,420 defek (d_eq = 30 - 75 µm, tidak berbahaya)                 |
|       * Lack of Fusion Voids (Planar, Ψ < 0.50)   : 8 defek kritis terdeteksi pada zona overhang 45°                  |
|       * Ukuran LoF Terbesar Teridentifikasi       : Panjang 420 µm, Orientasi tegak lurus arah build z                |
|                                                                                                                       |
|  4. Rekomendasi Proses Manufaktur:                                                                                    |
|     - Tingkatkan Laser Volumetric Energy Density (VED) pada kontur overhang dari 58 J/mm³ menjadi 65 J/mm³.            |
|     - Terapkan perlakuan Hot Isostatic Pressing (HIP) pada 500°C / 100 MPa / 2 jam untuk menutup sisa mikro-void LoF. |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 7. Rangkuman & Pedoman Praktis Implementasi Industri

```
+-----------------------------------------------------------------------------------------------------------------------+
|                           CHECKLIST METROLOGI XCT INDUSTRI & JAMINAN KUALITAS NDT                                     |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  [✓] Penentuan Voxel Size & Sampling Frekuensi Nyquist:                                                               |
|      Pastikan fitur terkecil yang ingin diukur/dideteksi mencakup minimal 3 hingga 5 voxel kontinu.                   |
|      (Contoh: mendeteksi pori 50 µm membutuhkan resolusi voxel v_vox ≤ 12.5 µm).                                      |
|                                                                                                                       |
|  [✓] Pengendalian Artefak Sinar-X:                                                                                    |
|      Gunakan pelat filter logam fisik (Cu, Al, Sn) di depan tabung untuk mengeraskan berkas (Beam Hardening Reduct.), |
|      serta terapkan koreksi kalkulasi software BHC (Beam Hardening Correction polynomial).                             |
|                                                                                                                       |
|  [✓] Ketertelusuran VDI/VDE 2630 & PVR Voxel Calibration:                                                              |
|      Lakukan pemindaian phantom bola terkalibrasi secara periodik sebelum batch inspeksi untuk mengompensasi drift    |
|      mekanis FOD/FDD dan fluktuasi termal ruang pengukuran.                                                           |
|                                                                                                                       |
|  [✓] Surface Determination Berbasis Gradien Lokal:                                                                    |
|      Hindari ambang batas global tunggal jika benda kerja memiliki variasi ketebalan ekstrem; gunakan algoritma       |
|      Advanced Surface Extraction berbasis nilai gradien lokal terarah (Local Maximum Gradient).                       |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 8. Referensi Terverifikasi & Standar Rekayasa

1. **VDI/VDE 2630 Blatt 1.3:2011** - *Computed tomography in dimensional measurement - Guideline for the application of DIN EN ISO 10360 for coordinate measuring machines with CT sensors*. Verein Deutscher Ingenieure, Düsseldorf.
2. **ISO 10360-11:2024** - *Geometrical product specifications (GPS) — Acceptance and reverification tests for coordinate measuring systems (CMS) — Part 11: CMSs using the principle of computed tomography (CT)*. International Organization for Standardization, Geneva.
3. **ASTM E505-15(2020)** - *Standard Reference Radiographs for Inspection of Aluminum and Magnesium Die Castings*. ASTM International, West Conshohocken, PA.
4. **Krusche, T., Schmitt, R., & Carmignato, S.** (2022). *Performance testing of dimensional X-ray computed tomography systems according to VDI/VDE 2630-1.3*. Precision Engineering, 78, 128-142. [DOI: 10.1016/j.precisioneng.2022.07.008]
5. **Carmignato, S., Dewulf, W., & Leach, R.** (2018). *Industrial X-Ray Computed Tomography*. Springer International Publishing, Cham. [ISBN: 978-3-319-59571-9]
6. **De Chiffre, L., Carmignato, S., Kruth, J. P., Schmitt, R., & Weckenmann, A.** (2014). *Industrial applications of computed tomography*. CIRP Annals - Manufacturing Technology, 63(2), 655-677. [DOI: 10.1016/j.cirp.2014.05.011]
7. **Feldkamp, L. A., Davis, L. C., & Kress, J. W.** (1984). *Practical cone-beam algorithm*. Journal of the Optical Society of America A, 1(6), 612-619. [DOI: 10.1364/JOSAA.1.000612]
8. **BDG Guideline P 201** - *Volume deficit of non-ferrous metal castings (Determination of porosity by computed tomography)*. Bundesverband der Deutschen Giesserei-Industrie, Düsseldorf.
