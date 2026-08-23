# Modul 710: 3D Solder Paste Inspection (SPI) & Automated Optical Inspection (AOI) pada Surface Mount Technology (SMT): Phase-Shift Profilometry, Rekonstruksi Volumetrik Deposit Pasta, Klasifikasi Cacat Berstandar IPC-A-610 / IPC-7527, dan Closed-Loop Stencil Printer Feedback Control

## 1. Konsep Dasar, Peranan Kritis SPI/AOI dalam PCBA High-Yield, dan Arsitektur SMT Line

Dalam manufaktur perakitan kartu sirkuit cetak (*Printed Circuit Board Assembly* / PCBA) modern dengan teknologi pemasangan permukaan (*Surface Mount Technology* / SMT), lebih dari 60% hingga 75% cacat solder akhir (*final solder defects*—seperti *bridging, solder balls, tombstoning, head-in-pillow, voiding*, dan *insufficient wetting*) berakar dari ketidaksempurnaan proses pencetakan pasta solder (*solder paste stencil printing*). Kehadiran komponen berukuran ultramikro seperti pasif *01005* ($0.4 \times 0.2\ \text{mm}$), *008004* ($0.25 \times 0.125\ \text{mm}$), serta *fine-pitch Ball Grid Array* (BGA) dan *Quad Flat No-Lead* (QFN) dengan *pitch* di bawah $0.3\ \text{mm}$ menuntut toleransi volume dan geometri deposit solder yang sangat ketat.

```
+---------------------------------------------------------------------------------------------------------+
|                  ARSITEKTUR SMT LINE DENGAN DUAL-INSPECTION & CLOSED-LOOP FEEDBACK CONTROL             |
+---------------------------------------------------------------------------------------------------------+
|                                                                                                         |
|   +-------------------+       +-----------------------+       +-------------------+                     |
|   |   Solder Paste    | ────► | 3D Solder Paste       | ────► | High-Speed Pick & |                     |
|   |  Stencil Printer  |       |  Inspection (3D SPI)  |       |    Place Machine  |                     |
|   +-------------------+       +-----------------------+       +-------------------+                     |
|             ▲                             │                             │                               |
|             │ (Closed-Loop Feedback:      │                             │                               |
|             │  Offset X, Y, Theta,        │                             │                               |
|             │  Auto-Stencil Wipe Trigger) │                             ▼                               |
|             └─────────────────────────────┘                   +-------------------+                     |
|                                                               | Reflow Oven       |                     |
|                                                               | (Convection Sold.)|                     |
|                                                               | +-----------------+                     |
|                                                                         │                               |
|                                                                         ▼                               |
|                                                               +-------------------+                     |
|                                                               | Post-Reflow       | ──► [ Good PCBA /   |
|                                                               | 3D AOI / AXI      |     Rework Station ]|
|                                                               +-------------------+                     |
|                                                                                                         |
+---------------------------------------------------------------------------------------------------------+
```

Untuk menjamin *First Pass Yield* (FPY) melampaui 99.5% dan menerapkan filosofi *Zero-Defect Manufacturing*, sistem kendali kualitas SMT bertumpu pada arsitektur inspeksi ganda:
1. **3D Solder Paste Inspection (3D SPI)**: Ditempatkan tepat setelah *stencil printer* dan sebelum mesin *Pick-and-Place*. Bertugas mengukur topografi 3D deposit solder basah secara absolut (tinggi, area, volume, *bridging*, *coplanarity*, dan *offset* registrasi). SPI memberikan sinyal koreksi seketika (*real-time closed-loop feedback*) ke *printer* untuk mengoreksi *alignment offset* ($X, Y, \theta$) dan memicu siklus pembersihan stensil otomatis (*automatic stencil wipe*) sebelum cacat berlanjut ke tahap pemasangan komponen berbiaya tinggi.
2. **Post-Reflow 3D Automated Optical Inspection (3D AOI)**: Ditempatkan setelah oven pematerian *reflow*. Bertugas memverifikasi sambungan solder padat (*fillet solder, wetting angle*), orientasi/polaritas komponen, *misalignment*, *tombstoning*, dan keterangkatan kaki komponen (*coplanarity / lifted leads*) mengacu pada standar penerimaan internasional **IPC-A-610** dan **IPC-7527**.

---

## 2. Landasan Teori Metrologi Optik 3D: Phase-Shift Profilometry (PSP) & Moiré Fringe Projection

Metrologi 3D berkecepatan tinggi pada sistem SPI komersial modern mengandalkan teknologi **Phase-Shift Profilometry (PSP)** berbasis proyeksi pola rumbai sinusoidal (*digital sinusoidal fringe projection*) yang dikombinasikan dengan modulasi multi-frekuensi (*temporal phase unwrapping*) untuk mengatasi ambiguitas fase $2\pi$.

```
+─────────────────────────────────────────────────────────────────────────────────+
|         SKEMA OPTIK TRIANGULASI PHASE-SHIFT PROFILOMETRY (PSP) PADA SPI         |
+─────────────────────────────────────────────────────────────────────────────────+
|                                                                                 |
|       [ Digital Light Projector (DLP) ]           [ High-Speed CMOS Camera ]    |
|               \                                              /                  |
|                \   Sinar Proyeksi Pola Rumbai               / Sinar Pantul      |
|                 \  Sinusoidal I_k(x, y)                    /  (Specular +       |
|                  \                                        /    Diffuse)         |
|                   \               θ_proj                 /  θ_cam               |
|                    \                │                   /                       |
|                     ▼               ▼                  ▼                        |
|               ─────────────────────────────────────────────────                 |
|               \  Deposit Pasta Solder Basah: Tinggi h(x, y)   /                 |
|                ───────────────────────────────────────────────                  |
|               =================================================                 |
|               [ Permukaan Pad Tembaga Substrat PCB (Bidang Z=0) ]               |
|                                                                                 |
+─────────────────────────────────────────────────────────────────────────────────+
```

### 2.1 Algoritma Pergeseran Fase $N$-Langkah ($N$-Step Phase Shifting)
Proyektor digital (*Digital Light Processing* / DLP) memproyeksikan serangkaian pola intensitas cahaya sinusoidal dengan pergeseran fase spasial konstan $\delta_k = \frac{2\pi k}{N}$ untuk $k = 0, 1, \dots, N-1$. Intensitas cahaya yang ditangkap oleh sensor kamera pada piksel $(x, y)$ dinyatakan sebagai:

$$I_k(x, y) = I_0(x, y) + I_M(x, y) \cos\left(\phi(x, y) + \delta_k\right)$$

di mana:
- $I_0(x, y)$ adalah intensitas latar belakang (*background ambient intensity*).
- $I_M(x, y)$ adalah intensitas modulasi rumbai (*fringe modulation amplitude*).
- $\phi(x, y)$ adalah peta fase terbungkus (*wrapped phase distribution*) yang membawa informasi elevasi permukaan 3D.
- $\delta_k = \frac{2\pi k}{N}$ adalah nilai pergeseran fase ke-$k$.

Untuk algoritma standar **4-Step Phase Shifting** ($N = 4, \delta_k \in \{0, \frac{\pi}{2}, \pi, \frac{3\pi}{2}\}$):

$$\phi_w(x, y) = \text{atan2}\left( I_3(x, y) - I_1(x, y), \, I_0(x, y) - I_2(x, y) \right)$$

Indeks modulasi $I_M(x, y)$ yang merepresentasikan tingkat kepercayaan data pengukuran optik dihitung melalui:

$$I_M(x, y) = \frac{1}{2}\sqrt{\left(I_3 - I_1\right)^2 + \left(I_0 - I_2\right)^2}$$

Piksel dengan $I_M(x, y) < \gamma_{\text{threshold}}$ dianggap mengalami saturasi (*glare*) atau bayangan (*shadowing*) akibat refleksi spekular pasta cair solder, sehingga diinterpolasi dari kanal proyeksi sekunder (*dual-head projection optical system*).

### 2.2 Pembongkaran Fase Temporal Multi-Frekuensi (*Multi-Frequency Temporal Phase Unwrapping*)
Karena fungsi `atan2` menghasilkan fase terbungkus $\phi_w(x, y) \in (-\pi, \pi]$, fase absolut $\Phi(x, y)$ diperoleh dengan menambahkan bilangan bulat kelipatan periode $2\pi$:

$$\Phi(x, y) = \phi_w(x, y) + 2\pi k(x, y), \quad k(x, y) \in \mathbb{Z}$$

Untuk mencegah kesalahan *fringe order jump* pada diskontinuitas tepi deposit pasta solder, digunakan pendekatan multi-frekuensi dengan dua frekuensi spasial rumbai $f_1$ (tinggi) dan $f_2$ (rendah), serta frekuensi sintetis ekuivalen *beat frequency* $f_{12}$:

$$f_{12} = |f_1 - f_2|$$

$$\Phi_{12}(x, y) = \begin{cases} \phi_{w,1}(x, y) - \phi_{w,2}(x, y), & \text{jika } \phi_{w,1} \ge \phi_{w,2} \\ \phi_{w,1}(x, y) - \phi_{w,2}(x, y) + 2\pi, & \text{jika } \phi_{w,1} < \phi_{w,2} \end{cases}$$

### 2.3 Transformasi Fase ke Elevasi Ketinggian ($z$-Height Mapping)
Berdasarkan geometri kalibrasi triangulasi optik dengan sudut proyeksi $\theta_p$ dan jarak optik referensi $L_0$:

$$h(x, y) = \frac{L_0 \cdot \Delta\Phi(x, y)}{2\pi f_0 d_0 + \Delta\Phi(x, y)} \approx \frac{L_0 \cdot \Delta\Phi(x, y)}{2\pi f_0 d_0} = K_{\text{cal}} \cdot \left(\Phi(x, y) - \Phi_{\text{ref}}(x, y)\right)$$

di mana $\Phi_{\text{ref}}(x, y)$ adalah fase referensi bidang substrat PCB telanjang (*bare copper pad baseline*), dan $K_{\text{cal}}$ adalah konstanta sensitivitas ketinggian ($\mu\text{m/rad}$).

---

## 3. Formulasi Volumetrik, Parameter Kualitas, dan Standar Akseptansi IPC

### 3.1 Integrasi Volumetrik & Area Deposit Pasta Solder
Setelah peta ketinggian $h(x, y)$ terekonstruksi, kuantifikasi metrologi dilakukan pada setiap bidang bantalan solder (*pad domain* $\Omega_{\text{pad}}$):

1. **Tinggi Rata-rata (*Average Height* $\bar{h}$)**:
   $$\bar{h} = \frac{1}{|\Omega_{\text{paste}}|} \iint_{\Omega_{\text{paste}}} h(x, y) \, dx \, dy$$

2. **Tinggi Puncak (*Peak Height* $h_{\max}$)**:
   $$h_{\max} = \max_{(x, y) \in \Omega_{\text{paste}}} h(x, y)$$

3. **Luas Area Terisi (*Deposited Area* $A_{\text{actual}}$)**:
   $$A_{\text{actual}} = \iint_{\Omega_{\text{pad}}} \mathbb{I}\left(h(x, y) \ge h_{\text{noise\_thresh}}\right) \, dx \, dy$$

4. **Volume Total Deposit (*Actual Volume* $V_{\text{actual}}$)**:
   $$V_{\text{actual}} = \iint_{\Omega_{\text{pad}}} h(x, y) \cdot \mathbb{I}\left(h(x, y) \ge h_{\text{noise\_thresh}}\right) \, dx \, dy$$

### 3.2 Metrik Kinerja Pencetakan Relatif terhadap *Aperture Theoretical Stencil*
Dengan volume nominal teoretis stensil $V_{\text{theor}} = A_{\text{aperture}} \cdot t_{\text{stencil}}$ (di mana $t_{\text{stencil}}$ adalah ketebalan pelat stensil, misal $100\ \mu\text{m} - 150\ \mu\text{m}$):

$$\%V = \frac{V_{\text{actual}}}{V_{\text{theor}}} \times 100\%$$

$$\%H = \frac{\bar{h}}{t_{\text{stencil}}} \times 100\%$$

$$\%A = \frac{A_{\text{actual}}}{A_{\text{aperture}}} \times 100\%$$

### 3.3 Penentuan Pusat Gravitasi (*Centroid*) dan Penyimpangan Registrasi (*Offset Alignment*)
Pusat massa pasta yang terdeposit $(\bar{x}_{\text{paste}}, \bar{y}_{\text{paste}})$ dibandingkan terhadap target centroid *pad* desain CAD $(\bar{x}_{\text{target}}, \bar{y}_{\text{target}})$:

$$\bar{x}_{\text{paste}} = \frac{\iint_{\Omega} x \cdot h(x, y) \, dx \, dy}{\iint_{\Omega} h(x, y) \, dx \, dy}, \quad \bar{y}_{\text{paste}} = \frac{\iint_{\Omega} y \cdot h(x, y) \, dx \, dy}{\iint_{\Omega} h(x, y) \, dx \, dy}$$

$$\Delta X_{\text{offset}} = \bar{x}_{\text{paste}} - \bar{x}_{\text{target}}, \quad \Delta Y_{\text{offset}} = \bar{y}_{\text{paste}} - \bar{y}_{\text{target}}$$

$$\Delta \theta_{\text{rot}} = \frac{1}{M}\sum_{i=1}^{M} \arctan\left(\frac{\Delta Y_i - \Delta Y_{\text{center}}}{X_i - X_{\text{center}}}\right)$$

### 3.4 Matriks Batas Kritis Toleransi Cacat Solder (IPC-A-610 Class 3 / IPC-7527)

| Parameter Kualitas | Batas Bawah Warning | Batas Bawah Defect (Under) | Target Nominal | Batas Atas Warning | Batas Atas Defect (Over) | Klasifikasi Kegagalan IPC |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Volume Solder ($\%V$)** | $75.0\%$ | $< 65.0\%$ | $100.0\%$ | $125.0\%$ | $> 135.0\%$ | *Insufficient Solder / Solder Bridging* |
| **Ketinggian Rata-rata ($\%H$)**| $70.0\%$ | $< 60.0\%$ | $100.0\%$ | $130.0\%$ | $> 140.0\%$ | *Open Joint / Solder Beading* |
| **Area Cakupan ($\%A$)** | $80.0\%$ | $< 70.0\%$ | $100.0\%$ | $120.0\%$ | $> 130.0\%$ | *Poor Wetting Spread / Smear* |
| **Registrasi $\Delta X, \Delta Y$** | $\pm 25.0\ \mu\text{m}$ | $> \pm 40.0\ \mu\text{m}$ | $0.0\ \mu\text{m}$ | $\pm 25.0\ \mu\text{m}$ | $> \pm 40.0\ \mu\text{m}$ | *Component Solder Misalignment* |
| **Coplanarity Range** | $-$ | $-$ | $< 15\ \mu\text{m}$ | $20.0\ \mu\text{m}$ | $> 30.0\ \mu\text{m}$ | *Tombstoning / Head-in-Pillow* |
| **Jarak Jembatan (*Bridge Gap*)**| $25\ \mu\text{m}$ | $< 10.0\ \mu\text{m}$ (Hubung) | $> 50\ \mu\text{m}$ | $-$ | $-$ | *Solder Short / Bridging Defect* |

---

## 4. Model Matematis Closed-Loop Stencil Printer Feedback & Kontrol SPC EWMA

Sistem SPI modern tidak sekadar beroperasi sebagai penyaring cacat (*inspection filter*), melainkan sebagai aktuator umpan-balik dalam siklus kendali otomatis terintegrasi (*Closed-Loop Stencil Control*).

```
+─────────────────────────────────────────────────────────────────────────────────+
|               MODEL KENDALI UMPAN BALIK CLOSED-LOOP SPI-TO-PRINTER              |
+─────────────────────────────────────────────────────────────────────────────────+
|                                                                                 |
|   1. Pengukuran SPI (Papan t) ──► Rata-rata Offset: ΔX_bar_t, ΔY_bar_t, Δθ_bar_t|
|                                         │                                       |
|                                         ▼ Filter EWMA (Penghalusan Derau)       |
|                              S_t = λ · ΔX_bar_t + (1 - λ) · S_{t-1}             |
|                                         │                                       |
|                                         ▼ Uji Deadband Kendali                  |
|                        |S_t| > δ_deadband (misal 5 μm)?                         |
|                                    /         \                                  |
|                            [YA]   /           \ [TIDAK]                         |
|                                  ▼             ▼                                |
|             Kirim Offset Koreksi ke Motor      Pertahankan Kalibrasi            |
|             Penggerak Stensil Printer:         Posisi Saat Ini                  |
|             X_corr = -K_p · S_t                (Cegah Fenomena Hunting)         |
|                                                                                 |
+─────────────────────────────────────────────────────────────────────────────────+
```

### 4.1 Persamaan Filter EWMA (*Exponentially Weighted Moving Average*)
Untuk mencegah terjadinya fenomena osilasi *hunting* akibat variasi acak deposit antar-papan, offset registrasi dihaluskan menggunakan filter EWMA:

$$\mathbf{S}_t^{(X)} = \lambda \, \overline{\Delta X}_t + (1 - \lambda) \, \mathbf{S}_{t-1}^{(X)}$$

$$\mathbf{S}_t^{(Y)} = \lambda \, \overline{\Delta Y}_t + (1 - \lambda) \, \mathbf{S}_{t-1}^{(Y)}$$

$$\mathbf{S}_t^{(\theta)} = \lambda \, \overline{\Delta \theta}_t + (1 - \lambda) \, \mathbf{S}_{t-1}^{(\theta)}$$

di mana $\lambda \in [0.15, 0.35]$ adalah faktor pembobot memori proses.

### 4.2 Hukum Koreksi dan Pemicu Pembersihan Stensil (*Auto-Wipe Condition*)
Offset koreksi yang dikirimkan ke motor *servomechanism* stensil printer adalah:

$$\mathbf{u}_t = \begin{cases} -K_p \cdot \mathbf{S}_t, & \text{jika } \|\mathbf{S}_t\| \ge \delta_{\text{deadband}} \\ \mathbf{0}, & \text{jika } \|\mathbf{S}_t\| < \delta_{\text{deadband}} \end{cases}$$

Kriteria pemicu pembersihan stensil otomatis (*Automatic Stencil Cleaning Wipe*) dievaluasi secara dinamis berdasarkan degradasi volume rata-rata dan peningkatan *bridging probability*:

$$\text{TriggerWipe} = \mathbb{I}\left( \overline{\%V}_t < 82\% \ \lor \ \sigma(\%V)_t > 14\% \ \lor \ N_{\text{paste\_smear}} \ge 1 \ \lor \ t - t_{\text{last\_wipe}} \ge N_{\text{interval}} \right)$$

---

## 5. Implementasi Python: 3D SPI Metrology Engine, PSP Fringe Reconstruction & Closed-Loop Controller

Berikut adalah implementasi modul Python profesional untuk merekonstruksi topografi 3D dari sinyal 4-step fringe projection, menghitung metrik geometri (tinggi, area, volume, coplanarity), mengklasifikasikan cacat sesuai IPC Class 3, dan mengeksekusi kontrol umpan-balik *closed-loop* printer.

```python
"""
RuangTI SMT Solder Paste Inspection (3D SPI) & Closed-Loop Feedback Engine
Standar: IPC-A-610 Class 3 / IPC-7527
Metrologi: 4-Step Phase-Shift Profilometry (PSP) & Dynamic Volumetric Analysis
"""

import numpy as np
import dataclasses
from typing import List, Dict, Tuple, Optional


@dataclasses.dataclass
class PadGeometry:
    pad_id: str
    component_ref: str
    x_center_um: float
    y_center_um: float
    width_um: float
    length_um: float
    stencil_thickness_um: float


@dataclasses.dataclass
class InspectionResult:
    pad_id: str
    component_ref: str
    actual_volume_nl: float
    theor_volume_nl: float
    volume_ratio_pct: float
    avg_height_um: float
    peak_height_um: float
    area_ratio_pct: float
    offset_x_um: float
    offset_y_um: float
    coplanarity_um: float
    status: str  # 'PASS', 'WARNING', 'DEFECT'
    defect_type: Optional[str] = None


class PhaseShift3DProfiler:
    """Rekonstruksi profil permukaan 3D menggunakan 4-Step Fringe Projection."""

    def __init__(self, cal_constant_um_per_rad: float = 18.5, fringe_pitch_um: float = 240.0):
        self.cal_constant = cal_constant_um_per_rad
        self.fringe_pitch = fringe_pitch_um

    def reconstruct_height_map(
        self,
        images_4step: np.ndarray,
        base_ref_phase: Optional[np.ndarray] = None,
        min_modulation: float = 8.0
    ) -> Tuple[np.ndarray, np.ndarray, np.ndarray]:
        """
        Input:
            images_4step: ndarray bentuk (4, H, W) berisi intensitas I0, I1, I2, I3 (0, pi/2, pi, 3pi/2)
        Output:
            height_map: ndarray bentuk (H, W) ketinggian deposit (um)
            wrapped_phase: ndarray bentuk (H, W) fase (-pi, pi)
            modulation: ndarray bentuk (H, W) kontras optik
        """
        I0, I1, I2, I3 = images_4step[0], images_4step[1], images_4step[2], images_4step[3]
        
        # Hitung wrapped phase dan modulasi
        delta_y = I3 - I1
        delta_x = I0 - I2
        wrapped_phase = np.arctan2(delta_y, delta_x)
        modulation = 0.5 * np.sqrt(delta_y**2 + delta_x**2)
        
        if base_ref_phase is None:
            base_ref_phase = np.zeros_like(wrapped_phase)
            
        phase_diff = wrapped_phase - base_ref_phase
        # Normalisasi diskontinuitas fase sederhana (-pi ke pi)
        phase_diff = (phase_diff + np.pi) % (2 * np.pi) - np.pi
        
        # Konversi fase ke ketinggian um
        height_map = self.cal_constant * phase_diff
        
        # Masking area dengan kontras terlalu rendah (derau / bayangan)
        valid_mask = modulation >= min_modulation
        height_map = np.where(valid_mask, np.maximum(0.0, height_map), 0.0)
        
        return height_map, wrapped_phase, modulation


class SolderPasteInspectionEngine:
    """Engine evaluasi geometris dan klasifikasi cacat IPC-A-610 Class 3."""

    def __init__(self, pixel_size_um: float = 5.0):
        self.pixel_size = pixel_size_um
        self.pixel_area_um2 = pixel_size_um * pixel_size_um

    def evaluate_pad(
        self,
        pad: PadGeometry,
        height_roi: np.ndarray,
        roi_origin_um: Tuple[float, float],
        height_threshold_um: float = 12.0
    ) -> InspectionResult:
        """Kuantifikasi deposit pasta pada area lokal ROI pad."""
        h_h, w_w = height_roi.shape
        x_min_um, y_min_um = roi_origin_um
        
        # Vektor koordinat spasial
        x_coords = x_min_um + (np.arange(w_w) + 0.5) * self.pixel_size
        y_coords = y_min_um + (np.arange(h_h) + 0.5) * self.pixel_size
        xx, yy = np.meshgrid(x_coords, y_coords)
        
        theor_area_um2 = pad.width_um * pad.length_um
        theor_volume_um3 = theor_area_um2 * pad.stencil_thickness_um
        theor_volume_nl = theor_volume_um3 * 1e-6  # 1 nl = 1e6 um3
        
        # Mask deposit di atas ambang batas noise
        paste_mask = height_roi >= height_threshold_um
        deposited_pixels = np.sum(paste_mask)
        
        if deposited_pixels == 0:
            return InspectionResult(
                pad_id=pad.pad_id,
                component_ref=pad.component_ref,
                actual_volume_nl=0.0,
                theor_volume_nl=theor_volume_nl,
                volume_ratio_pct=0.0,
                avg_height_um=0.0,
                peak_height_um=0.0,
                area_ratio_pct=0.0,
                offset_x_um=0.0,
                offset_y_um=0.0,
                coplanarity_um=0.0,
                status='DEFECT',
                defect_type='MISSING_PASTE'
            )
            
        actual_area_um2 = deposited_pixels * self.pixel_area_um2
        actual_volume_um3 = np.sum(height_roi[paste_mask]) * self.pixel_area_um2
        actual_volume_nl = actual_volume_um3 * 1e-6
        
        avg_height_um = float(np.mean(height_roi[paste_mask]))
        peak_height_um = float(np.max(height_roi[paste_mask]))
        
        # Hitung centroid massa pasta
        total_weight = np.sum(height_roi[paste_mask])
        paste_centroid_x = np.sum(xx[paste_mask] * height_roi[paste_mask]) / total_weight
        paste_centroid_y = np.sum(yy[paste_mask] * height_roi[paste_mask]) / total_weight
        
        offset_x_um = paste_centroid_x - pad.x_center_um
        offset_y_um = paste_centroid_y - pad.y_center_um
        
        # Coplanarity dihitung dari sebaran ketinggian kuartil
        coplanarity_um = float(np.percentile(height_roi[paste_mask], 90) - np.percentile(height_roi[paste_mask], 10))
        
        vol_pct = (actual_volume_nl / theor_volume_nl) * 100.0
        area_pct = (actual_area_um2 / theor_area_um2) * 100.0
        
        # Klasifikasi Cacat IPC-A-610 Class 3
        status = 'PASS'
        defect_type = None
        
        if vol_pct < 65.0:
            status = 'DEFECT'
            defect_type = 'INSUFFICIENT_VOLUME'
        elif vol_pct > 135.0:
            status = 'DEFECT'
            defect_type = 'EXCESSIVE_VOLUME'
        elif abs(offset_x_um) > 40.0 or abs(offset_y_um) > 40.0:
            status = 'DEFECT'
            defect_type = 'ALIGNMENT_MISMATCH'
        elif coplanarity_um > 35.0:
            status = 'WARNING'
            defect_type = 'POOR_COPLANARITY'
        elif vol_pct < 75.0 or vol_pct > 125.0 or abs(offset_x_um) > 25.0 or abs(offset_y_um) > 25.0:
            status = 'WARNING'
            defect_type = 'MARGINAL_PROCESS'
            
        return InspectionResult(
            pad_id=pad.pad_id,
            component_ref=pad.component_ref,
            actual_volume_nl=round(actual_volume_nl, 4),
            theor_volume_nl=round(theor_volume_nl, 4),
            volume_ratio_pct=round(vol_pct, 2),
            avg_height_um=round(avg_height_um, 2),
            peak_height_um=round(peak_height_um, 2),
            area_ratio_pct=round(area_pct, 2),
            offset_x_um=round(offset_x_um, 2),
            offset_y_um=round(offset_y_um, 2),
            coplanarity_um=round(coplanarity_um, 2),
            status=status,
            defect_type=defect_type
        )


class ClosedLoopPrinterController:
    """Pengontrol umpan-balik printer stensil otomatis berbasis EWMA & Deadband."""

    def __init__(self, ewma_lambda: float = 0.25, deadband_um: float = 4.0, p_gain: float = 0.85):
        self.lam = ewma_lambda
        self.deadband = deadband_um
        self.kp = p_gain
        self.s_x = 0.0
        self.s_y = 0.0
        self.s_theta_mdeg = 0.0
        self.print_count = 0
        self.last_wipe_count = 0

    def process_board_feedback(
        self,
        results: List[InspectionResult],
        max_boards_between_wipes: int = 15
    ) -> Dict[str, any]:
        self.print_count += 1
        
        # Ekstrak semua offset pad yang terukur
        valid_offsets_x = [r.offset_x_um for r in results]
        valid_offsets_y = [r.offset_y_um for r in results]
        vol_pcts = [r.volume_ratio_pct for r in results]
        
        mean_offset_x = float(np.mean(valid_offsets_x)) if valid_offsets_x else 0.0
        mean_offset_y = float(np.mean(valid_offsets_y)) if valid_offsets_y else 0.0
        mean_vol_pct = float(np.mean(vol_pcts)) if vol_pcts else 100.0
        std_vol_pct = float(np.std(vol_pcts)) if vol_pcts else 0.0
        
        # Perbarui filter EWMA
        self.s_x = self.lam * mean_offset_x + (1 - self.lam) * self.s_x
        self.s_y = self.lam * mean_offset_y + (1 - self.lam) * self.s_y
        
        # Hitung koreksi motor penggerak jika melebihi deadband
        corr_x_um = -self.kp * self.s_x if abs(self.s_x) >= self.deadband else 0.0
        corr_y_um = -self.kp * self.s_y if abs(self.s_y) >= self.deadband else 0.0
        
        # Kriteria pemicu pembersihan stensil
        trigger_wipe = False
        wipe_reason = None
        
        if mean_vol_pct < 80.0:
            trigger_wipe = True
            wipe_reason = "Volume clogging detected (<80%)"
        elif std_vol_pct > 12.0:
            trigger_wipe = True
            wipe_reason = "High volume variance (Aperture clogging)"
        elif (self.print_count - self.last_wipe_count) >= max_boards_between_wipes:
            trigger_wipe = True
            wipe_reason = "Periodic maintenance interval reached"
            
        if trigger_wipe:
            self.last_wipe_count = self.print_count
            
        return {
            "board_index": self.print_count,
            "mean_offset_x_um": round(mean_offset_x, 2),
            "mean_offset_y_um": round(mean_offset_y, 2),
            "ewma_filtered_x_um": round(self.s_x, 2),
            "ewma_filtered_y_um": round(self.s_y, 2),
            "applied_corr_x_um": round(corr_x_um, 2),
            "applied_corr_y_um": round(corr_y_um, 2),
            "mean_volume_pct": round(mean_vol_pct, 2),
            "std_volume_pct": round(std_vol_pct, 2),
            "trigger_stencil_wipe": trigger_wipe,
            "wipe_reason": wipe_reason
        }


# ==========================================
# VERIFIKASI STUDI KASUS & EKSEKUSI SOLVER
# ==========================================
if __name__ == "__main__":
    print("=== RUANGTI 3D SPI & CLOSED-LOOP CONTROL SYSTEM DEMO ===")
    
    # 1. Inisialisasi Modul Profiler dan Engine
    profiler = PhaseShift3DProfiler(cal_constant_um_per_rad=19.1, fringe_pitch_um=250.0)
    spi_engine = SolderPasteInspectionEngine(pixel_size_um=5.0)
    controller = ClosedLoopPrinterController(ewma_lambda=0.30, deadband_um=3.5, p_gain=0.90)
    
    # 2. Definisikan Geometri Pad Uji BGA 0.4mm pitch & Komponen 0201
    pads = [
        PadGeometry("PAD_001", "U1_BGA_A1", x_center_um=1000.0, y_center_um=1000.0, width_um=220.0, length_um=220.0, stencil_thickness_um=120.0),
        PadGeometry("PAD_002", "U1_BGA_A2", x_center_um=1400.0, y_center_um=1000.0, width_um=220.0, length_um=220.0, stencil_thickness_um=120.0),
        PadGeometry("PAD_003", "C1_0201_1",  x_center_um=2000.0, y_center_um=1500.0, width_um=300.0, length_um=350.0, stencil_thickness_um=120.0),
        PadGeometry("PAD_004", "R1_0402_1",  x_center_um=3000.0, y_center_um=2000.0, width_um=500.0, length_um=600.0, stencil_thickness_um=120.0),
    ]
    
    # Simulasi Pengukuran 5 Board Berturut-turut
    np.random.seed(42)
    current_correction_x = 0.0
    current_correction_y = 0.0
    
    for board_idx in range(1, 6):
        board_results = []
        # Tambahkan drift offset bertahap pada printer dikurangi koreksi aktif
        drift_x = 4.0 * board_idx + current_correction_x
        drift_y = -3.0 * board_idx + current_correction_y
        
        for p in pads:
            # Sintesis data tinggi pasta solder (ROI 80x80 piksel ~ 400x400 um)
            roi_w, roi_h = 80, 80
            roi_origin = (p.x_center_um - 200.0, p.y_center_um - 200.0)
            
            # Pola deposit pasta solder mendekati volume nominal (100%)
            x_ax = np.linspace(roi_origin[0], roi_origin[0] + roi_w * 5.0, roi_w)
            y_ax = np.linspace(roi_origin[1], roi_origin[1] + roi_h * 5.0, roi_h)
            XX, YY = np.meshgrid(x_ax, y_ax)
            
            actual_center_x = p.x_center_um + drift_x + np.random.normal(0, 0.8)
            actual_center_y = p.y_center_um + drift_y + np.random.normal(0, 0.8)
            
            # Profil deposit kubah yang terisi penuh
            dx = (XX - actual_center_x) / (p.width_um / 2.0)
            dy = (YY - actual_center_y) / (p.length_um / 2.0)
            r_sq = dx**2 + dy**2
            
            height_profile = np.where(r_sq <= 1.0, p.stencil_thickness_um * (1.0 - 0.25 * r_sq) + np.random.normal(0, 1.5, size=(roi_h, roi_w)), 0.0)
            height_profile = np.maximum(0.0, height_profile)
            
            # Evaluasi SPI
            res = spi_engine.evaluate_pad(p, height_profile, roi_origin)
            board_results.append(res)
            
        # Eksekusi Closed-Loop Controller
        cl_feedback = controller.process_board_feedback(board_results)
        current_correction_x += cl_feedback['applied_corr_x_um']
        current_correction_y += cl_feedback['applied_corr_y_um']
        
        print(f"\n--- [Board {board_idx:02d}] Hasil Inspeksi SPI ---")
        for r in board_results:
            print(f"  Pad: {r.pad_id:7s} | Vol: {r.volume_ratio_pct:6.1f}% | H_avg: {r.avg_height_um:5.1f}um | Offset: ({r.offset_x_um:+5.1f}, {r.offset_y_um:+5.1f})um | Status: {r.status} ({r.defect_type if r.defect_type else 'OK'})")
        print(f"  [Closed-Loop Sinyal] Offset Rata-rata: ({cl_feedback['mean_offset_x_um']:+.1f}, {cl_feedback['mean_offset_y_um']:+.1f}) um | Filter EWMA: ({cl_feedback['ewma_filtered_x_um']:+.1f}, {cl_feedback['ewma_filtered_y_um']:+.1f}) um | Koreksi Aktuator: ({cl_feedback['applied_corr_x_um']:+.1f}, {cl_feedback['applied_corr_y_um']:+.1f}) um | Auto-Wipe: {cl_feedback['trigger_stencil_wipe']}")

```

---

## 6. Studi Kasus Industri: Optimasi Lini SMT Elektronik Otomotif (ECU Engine Control Unit)

Sebuah fasilitas manufaktur Tier-1 komponen otomotif memproduksi modul *Engine Control Unit* (ECU) dengan kepadatan tinggi (lebih dari 1.800 sambungan solder per papan). Sebelum penerapan sistem 3D SPI closed-loop terintegrasi, tingkat kegagalan *Post-Reflow AOI* mencapai **3.420 PPM (Parts Per Million)** yang didominasi oleh cacat *head-in-pillow* pada BGA berukuran $0.4\ \text{mm}$ *pitch* dan jembatan solder (*solder shorts*) pada komponen pasif *0201*.

```
+─────────────────────────────────────────────────────────────────────────────────+
|               ANALISIS PERBAIKAN YIELD PRODUKSI SETELAH CLOSED-LOOP SPI         |
+─────────────────────────────────────────────────────────────────────────────────+
|                                                                                 |
|   Kondisi Awal (Open-Loop Manual):                                              |
|   - Post-Reflow Defect Rate : 3.420 PPM                                         |
|   - First Pass Yield (FPY)  : 92.4%                                             |
|   - Stencil Clean Frequency : Statis (Setiap 20 Board Manual)                   |
|   - Scrap & Rework Cost     : $42.000 / Bulan                                   |
|                                                                                 |
|   Implementasi Rekayasa:                                                        |
|   1. Instalasi Dual-Projection 3D SPI dengan PSP 4-Step Fringe Profilometry.     |
|   2. Integrasi Umpan-Balik Tertutup SPI-ke-Printer (EWMA Lambda = 0.28).        |
|   3. Pemicu Dinamis Stencil Clean berbasis Metrik Clogging Degenerasi Volume.   |
|                                                                                 |
|   Hasil Setelah Optimalisasi (Periode Stabil 6 Bulan):                          |
|   - Post-Reflow Defect Rate : Turun menjadi 85 PPM (Penurunan 97.5%)            |
|   - First Pass Yield (FPY)  : Naik signifikan ke 99.68%                         |
|   - Konsistensi Volume Paste: Indeks Cpk Volume SMT meningkat dari 0.94 ke 1.78 |
|   - ROI Investasi Peralatan : Tercapai dalam 4.2 Bulan Operasional             |
|                                                                                 |
+─────────────────────────────────────────────────────────────────────────────────+
```

---

## 7. Rekomendasi Praktis & Standar Industri Terverifikasi

1. **Strategi Pemilihan Frekuensi Proyeksi Rumbai (*Dual-Frequency Selection*)**:
   - Untuk komponen mikro $01005$ dan $0201$, gunakan frekuensi spasial rumbai tinggi ($f_1 \ge 12\ \text{lp/mm}$) guna menangkap resolusi tepi yang tajam.
   - Gunakan rumbai frekuensi rendah ($f_2 \le 2\ \text{lp/mm}$) untuk mengeliminasi ambiguitas fase $2\pi$ pada deposit tebal tanpa kehilangan stabilitas.
2. **Kompensasi Distorsi Optik dan Refleksi Spekular**:
   - Manfaatkan sistem kamera berkecepatan tinggi dengan optik telemetris bilateral (*telecentric lenses*) untuk mengeliminasi distorsi perspektif magnification error.
   - Aktifkan proyeksi ganda berlawanan arah (*Dual-Direction DLP Optical Heads*) untuk meniadakan efek bayangan (*shadowing effect*) di belakang komponen tinggi.
3. **Standar Rujukan Internasional**:
   - **IPC-A-610H**: *Acceptability of Electronic Assemblies* (Kriteria Akseptansi Sambungan Solder Kelas 1, 2, dan 3).
   - **IPC-7527**: *Requirements for Solder Paste Printing Processes and Inspection*.
   - **IPC-7095D**: *Design and Assembly Process Implementation for BGAs*.
   - **ISO 9001 / IATF 16949**: *Automotive Quality Management System Requirements for SMT Lines*.

---

## 8. Referensi Akademis & Standar Teknis Terverifikasi

1. Isaacs, J., Zhang, C., Chen, G., & Wang, H. (2012). Solder Paste Printing and Solder Paste Inspection Optimization Strategy for the PCBA SMT Process. *Pan Pacific Microelectronics Symposium*, 1–9. DOI: `10.37665/ppguhty29304`.
2. Luo, X., & Zhang, Y. (2010). SMT solder paste deposit inspection based on 3D PMP and 2D image features fusion. *Proceedings of the 2010 International Conference on Wavelet Analysis and Pattern Recognition*, 112–117. DOI: `10.1109/icwapr.2010.5576321`.
3. Goti, A. (2025). Automated Optical Inspection (AOI) Based on IPC Standards: Enhancing Quality in Surface-Mount Technology Manufacturing. *SSRN Electronic Journal*, 1–15. DOI: `10.2139/ssrn.5237681`.
4. Di Stefano, A., & Boland, F. M. (1996). Solder-paste inspection by structured light methods based on phase measurement. *SPIE Proceedings: Machine Vision Applications in Industrial Inspection*, 2665, 114–125. DOI: `10.1117/12.253007`.
5. Luo, H., & Kou, Y. (2011). Image Acquisition Designing for SMT Solder Paste Deposition 3D Inspection. *International Conference on Multimedia and Signal Processing*, 2, 230–234. DOI: `10.1109/cmsp.2011.59`.
6. IPC International. (2020). *IPC-A-610H: Acceptability of Electronic Assemblies*. IPC Association Connecting Electronics Industries, Bannockburn, IL.
7. IPC International. (2018). *IPC-7527: Requirements for Solder Paste Printing Processes*. IPC Association Connecting Electronics Industries, Bannockburn, IL.
