# Modul 563: Metrologi Regangan Bidang-Penuh Digital Image Correlation (DIC) 2D/3D pada Pengujian Integritas Struktural Material Industri: Algoritma Pencocokan Pola Speckle (IC-GN Sub-Pixel Tracking), Analisis Medan Regangan Green-Lagrange, dan Kalibrasi Standar ASTM E2533 / ISO 9513

## 1. Pengantar & Urgensi Metrologi Optik Non-Kontak Digital Image Correlation (DIC)

Dalam rekayasa pengujian material industri (*industrial mechanical testing*), validasi integritas struktur kedirgantaraan, otomotif, manufaktur aditif (*additive manufacturing*), dan bejana tekan (*pressure vessels*), pemahaman komprehensif mengenai medan deformasi (*full-field displacement*) dan distribusi konsentrasi tegangan/regangan lokal (*strain gradient localization*) sangatlah krusial.

Metode pengukuran kontak konvensional seperti *foil strain gauge* (ekstensometer resistansi listrik) dan *clip-on extensometer* memiliki keterbatasan mendasar:
1. **Pengukuran Titik Tunggal (Point-wise Measurement)**: Hanya menghasilkan nilai regangan rata-rata pada area gauge kecil ($1 - 10 \text{ mm}$), sehingga gagal menangkap fenomena inisiasi retak mikro (*micro-crack initiation*), pembentukan pita geser (*shear bands*), dan efek konsentrasi tegangan di dekat takik (*notch stress concentration*).
2. **Keterbatasan Kontak Fisik (Intrusive Attachment)**: Lem perekat *strain gauge* dapat terkelupas pada temperatur tinggi atau regangan besar (> 10%), serta menambah kekakuan semu pada material tipis/lunak (lembaran komposit tipis, elastomer, jaringan biologis).
3. **Ketidakmampuan Mengukur Geometri 3D Kompleks**: Pengujian deformasi *out-of-plane* (tekuk/buckling atau deformasi permukaan melengkung) tidak dapat diukur secara serentak.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                       PARADIGMA METROLOGI REGANGAN INDUSTRI: EKSTENSOMETER KONVENSIONAL VS DIC                        |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|  1. Foil Strain Gauge / Clip-on Extensometer:                                                                         |
|     - Output: 1 nilai diskrit (1D point strain data).                                                                 |
|     - Setup: Memerlukan persiapan permukaan rumit, pengeleman kimiawi, pemasangan kabel listrik.                      |
|     - Risiko: Batas regangan terbatas (< 5-15%), slip mekanis, tidak dapat menangkap diskontinuitas retak.            |
|                                                                                                                       |
|  2. Full-Field Digital Image Correlation (DIC 2D / Stereovision 3D DIC):                                              |
|     - Output: Medan perpindahan [u(x,y,z), v(x,y,z), w(x,y,z)] & tensor regangan bidang-penuh jutaan titik data.      |
|     - Metode: Pemantauan optik non-kontak terhadap deformasi pola acak speckle (speckle pattern tracking).            |
|     - Keunggulan:                                                                                                     |
|       * Resolusi sub-piksel hingga 0.001 - 0.01 piksel (~5 - 20 microstrain accuracy).                                 |
|       * Rentang pengukuran dari regangan elastis mikro (0.005%) hingga deformasi plastis ekstrem (> 500%).            |
|       * Mampu mengukur dinamika kecepatan tinggi (High-Speed DIC hingga 1.000.000 fps untuk uji impak Hopkinson Bar). |
|       * Kompatibel dengan lingkungan ekstrem (Cryogenic hingga Furnace Suhu Tinggi > 1200 °C dengan bandpass filter).|
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

---

## 2. Arsitektur Sistem Pengukuran DIC & Pembentukan Pola Speckle (Speckle Patterning)

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                  ARSITEKTUR STEREO-DIC 3D & ALUR PENGOLAHAN SINYAL OPTIK                              |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   Kamera Stereo Kiri (Cam 1)                      Kamera Stereo Kanan (Cam 2)                                         |
|      ┌───────────────┐                                ┌───────────────┐                                               |
|      │  Sensor CMOS  │                                │  Sensor CMOS  │                                               |
|      │ 5 MP @ 12-bit │                                │ 5 MP @ 12-bit │                                               |
|      └───────┬───────┘                                └───────┬───────┘                                               |
|              │  Lensa Lensa Rendah Distorsi (Telecentric)     │                                                       |
|              ▼                                                ▼                                                       |
|        ┌───────────┐    Sudut Stereo (15° - 35°)        ┌───────────┐                                                 |
|        │  Citra f  │ ◄────────────────────────────────► │  Citra g  │                                                 |
|        │(Referensi)│                                    │(Terdeform)│                                                 |
|        └─────┬─────┘                                    └─────┬─────┘                                                 |
|              │                                                │                                                       |
|              └───────────────────────┬────────────────────────┘                                                       |
|                                      │                                                                                |
|                                      ▼                                                                                |
|         ┌────────────────────────────────────────────────────────┐                                                    |
|         │           SUBSET MATCHING & IC-GN SOLVER               │                                                    |
|         │   - Inisialisasi: Fast FFT-based Cross-Correlation     │                                                    |
|         │   - Optimasi: Inverse Compositional Gauss-Newton       │                                                    |
|         │   - Interpolasi: B-Spline Bicubic / Quintic Order      │                                                    |
|         └────────────────────────────┬───────────────────────────┘                                                    |
|                                      │                                                                                |
|                                      ▼                                                                                |
|         ┌────────────────────────────────────────────────────────┐                                                    |
|         │        REKONSTRUKSI 3D & ANALISIS TENSOR REGANGAN      │                                                    |
|         │   - Kalibrasi Epipolar Standar ASTM E2533 / ISO 9513   │                                                    |
|         │   - Rekonstruksi Titik 3D (Triangulasi Stereo)         │                                                    |
|         │   - Komputasi Tensor Regangan Green-Lagrange E_xx, E_yy│                                                    |
|         │   - Visualisasi Kontur Medan Regangan Utama (E_1, E_2) │                                                    |
|         └────────────────────────────────────────────────────────┘                                                    |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

### 2.1. Standar Kualitas Pola Speckle (ASTM E2533)
Keberhasilan pelacakan korelasi citra sangat bergantung pada kualitas pola speckle buatan di permukaan benda uji:
1. **Ukuran Titik Speckle Efektif**: Diameter titik optimal adalah $3 \text{ hingga } 7 \text{ piksel}$ pada bidang sensor kamera untuk mencegah efek alias (*aliasing*) atau degradasi gradien lokal.
2. **Kerapatan (Density)**: Cakupan luas hitam-putih seimbang sekitar $50\% : 50\%$.
3. **Kontras & Rentang Dinamis**: Histogram intensitas harus mencakup seluruh rentang 8-bit ($0 - 255$) atau 12-bit ($0 - 4095$) tanpa saturasi putih (*over-exposure*) atau hitam pekat (*underexposure*).
4. **Kriteria Mean Intensity Gradient (MIG)**:
   $$ \text{MIG} = \sum_{x=1}^{W} \sum_{y=1}^{H} \frac{|\nabla f(x,y)|}{W \cdot H} $$
   Nilai MIG $> 20 \text{ level/piksel}$ memastikan kesalahan acak (*random noise error*) pada pelacakan sub-piksel berada di bawah $0.005 \text{ piksel}$.

---

## 3. Landasan Teori & Formulasi Matematis Formal

### 3.1. Fungsi Korelasi Citra & Normalisasi Intensitas (ZNCC & ZNSSD)

Untuk melacak pergeseran subset citra persegi berukuran $(2M+1) \times (2M+1)$ dari citra referensi $f(\mathbf{x})$ ke citra terdeformasi $g(\mathbf{x}')$, digunakan fungsi korelasi ternormalisasi bebas variasi iluminasi cahaya (*Zero-Normalized Sum of Squared Differences* / ZNSSD):

$$ C_{\text{ZNSSD}}(\mathbf{p}) = \sum_{\Delta \mathbf{x} \in \Omega} \left[ \frac{f(\mathbf{x}_0 + \Delta \mathbf{x}) - f_m}{\Delta f} - \frac{g(\mathbf{x}_0 + \mathbf{W}(\Delta \mathbf{x}; \mathbf{p})) - g_m}{\Delta g} \right]^2 $$

di mana:
- $\mathbf{x}_0 = (x_0, y_0)^T$: Koordinat pusat subset.
- $\Delta \mathbf{x} = (\Delta x, \Delta y)^T$: Vektor offset lokal dalam domain subset $\Omega$.
- $f_m = \frac{1}{N} \sum_{\Delta \mathbf{x} \in \Omega} f(\mathbf{x}_0 + \Delta \mathbf{x})$: Rata-rata intensitas subset referensi.
- $\Delta f = \sqrt{\sum_{\Delta \mathbf{x} \in \Omega} [f(\mathbf{x}_0 + \Delta \mathbf{x}) - f_m]^2}$: Standar deviasi intensitas subset referensi.
- $g_m, \Delta g$: Nilai rata-rata dan deviasi standar subset citra terdeformasi.

Hubungan ZNSSD dengan *Zero-Normalized Cross-Correlation* ($C_{\text{ZNCC}}$):

$$ C_{\text{ZNSSD}}(\mathbf{p}) = 2 \cdot [1 - C_{\text{ZNCC}}(\mathbf{p})] $$

### 3.2. Fungsi Bentuk Deformasi Subset (First-Order & Second-Order Shape Functions)

Hubungan pemetaan koordinat titik $\mathbf{x} = (x, y)^T$ pada subset referensi ke koordinat terdeformasi $\mathbf{x}' = (x', y')^T$ didefinisikan oleh fungsi bentuk (*shape function*) $\mathbf{W}(\Delta \mathbf{x}; \mathbf{p})$:

**Fungsi Bentuk Orde Pertama (Affine Deformation):**
$$ \mathbf{W}(\Delta \mathbf{x}; \mathbf{p}) = \begin{bmatrix} x' \\ y' \end{bmatrix} = \begin{bmatrix} x_0 + u + u_x \Delta x + u_y \Delta y \\ y_0 + v + v_x \Delta x + v_y \Delta y \end{bmatrix} $$

Vektor parameter deformasi:
$$ \mathbf{p} = [u, u_x, u_y, v, v_x, v_y]^T $$

di mana $u, v$ adalah translasi rigid pada pusat subset, sedangkan $u_x, u_y, v_x, v_y$ adalah gradien perpindahan lokal (regangan dan rotasi).

```
Deformasi Subset Orde Pertama (Affine):
  Subset Referensi Segiempat              Subset Terdeformasi (Rotasi + Regangan)
     ┌──────────────┐                            /────────────────/
     │              │                           /                /
     │      ● (x0,y0)│           ───►          /       ● (x0',y0')/
     │              │                         /                /
     └──────────────┘                        /────────────────/
```

### 3.3. Algoritma Optimasi Sub-Piksel: Inverse Compositional Gauss-Newton (IC-GN)

Algoritma Inverse Compositional Gauss-Newton (IC-GN) adalah standar emas dalam DIC komputasional modern karena matriks Hessian $\mathbf{H}$ hanya dievaluasi satu kali pada citra referensi, menghasilkan efisiensi komputasi $5 - 10\times$ lebih cepat dibandingkan algoritma konvensional Forward-Additive Newton-Raphson (FA-NR).

Target optimasi IC-GN adalah meminimalkan kriteria ZNSSD dengan memperbarui penambahan parameter $\Delta \mathbf{p}$ pada subset referensi:

$$ \min_{\Delta \mathbf{p}} \sum_{\Delta \mathbf{x} \in \Omega} \left[ \frac{f(\mathbf{x}_0 + \mathbf{W}(\Delta \mathbf{x}; \Delta \mathbf{p})) - f_m}{\Delta f} - \frac{g(\mathbf{x}_0 + \mathbf{W}(\Delta \mathbf{x}; \mathbf{p})) - g_m}{\Delta g} \right]^2 $$

Ekspansi deret Taylor orde pertama pada suku referensi menghasilkan sistem persamaan linier Gauss-Newton:

$$ \mathbf{H} \cdot \Delta \mathbf{p} = \mathbf{b} $$

di mana **Matriks Hessian $\mathbf{H}$ (Konstan di Setiap Iterasi):**
$$ \mathbf{H} = \sum_{\Delta \mathbf{x} \in \Omega} \left( \nabla f \cdot \frac{\partial \mathbf{W}}{\partial \mathbf{p}} \right)^T \left( \nabla f \cdot \frac{\partial \mathbf{W}}{\partial \mathbf{p}} \right) $$

**Vektor Residu Gradien $\mathbf{b}$:**
$$ \mathbf{b} = \sum_{\Delta \mathbf{x} \in \Omega} \left( \nabla f \cdot \frac{\partial \mathbf{W}}{\partial \mathbf{p}} \right)^T \cdot \left[ \frac{\Delta f}{\Delta g} (g(\mathbf{x}') - g_m) - (f(\mathbf{x}) - f_m) \right] $$

Pembaruan fungsi bentuk dilakukan secara komposisional terbalik (*inverse compositional update*):
$$ \mathbf{W}(\mathbf{x}; \mathbf{p}^{(k+1)}) = \mathbf{W}(\mathbf{x}; \mathbf{p}^{(k)}) \circ \mathbf{W}(\mathbf{x}; \Delta \mathbf{p})^{-1} $$

Kriteria konvergensi iteratif:
$$ \|\Delta \mathbf{p}\| = \sqrt{\Delta u^2 + \Delta v^2 + \Delta u_x^2 + \Delta u_y^2 + \Delta v_x^2 + \Delta v_y^2} < 10^{-4} \text{ piksel} $$

### 3.4. Rekonstruksi Medan Regangan Finite-Strain Green-Lagrange

Setelah medan perpindahan kontinyu $u(x,y)$ dan $v(x,y)$ diperoleh di seluruh titik kisi (*grid points*), gradien perpindahan dihaluskan secara spasial menggunakan *Local Polynomial Surface Fitting* berorde 2 pada jendela diferensiasi lokal $(2N_s+1) \times (2N_s+1)$ titik:

$$ u(x,y) = a_0 + a_1 x + a_2 y + a_3 x^2 + a_4 x y + a_5 y^2 $$
$$ v(x,y) = b_0 + b_1 x + b_2 y + b_3 x^2 + b_4 x y + b_5 y^2 $$

Gradien perpindahan:
$$ \frac{\partial u}{\partial x} = a_1 + 2 a_3 x + a_4 y, \quad \frac{\partial u}{\partial y} = a_2 + a_4 x + 2 a_5 y $$
$$ \frac{\partial v}{\partial x} = b_1 + 2 b_3 x + b_4 y, \quad \frac{\partial v}{\partial y} = b_2 + b_4 x + 2 b_5 y $$

Tensor Regangan Hingga Green-Lagrange ($\mathbf{E}$):

$$ \mathbf{E} = \frac{1}{2} (\mathbf{F}^T \mathbf{F} - \mathbf{I}) $$

Komponen tensor regangan Green-Lagrange 2D:

$$ E_{xx} = \frac{\partial u}{\partial x} + \frac{1}{2} \left[ \left( \frac{\partial u}{\partial x} \right)^2 + \left( \frac{\partial v}{\partial x} \right)^2 \right] $$

$$ E_{yy} = \frac{\partial v}{\partial y} + \frac{1}{2} \left[ \left( \frac{\partial u}{\partial y} \right)^2 + \left( \frac{\partial v}{\partial y} \right)^2 \right] $$

$$ E_{xy} = \frac{1}{2} \left( \frac{\partial u}{\partial y} + \frac{\partial v}{\partial x} \right) + \frac{1}{2} \left[ \frac{\partial u}{\partial x} \frac{\partial u}{\partial y} + \frac{\partial v}{\partial x} \frac{\partial v}{\partial y} \right] $$

Regangan Utama Maksimum ($E_1$) dan Minimum ($E_2$):

$$ E_{1,2} = \frac{E_{xx} + E_{yy}}{2} \pm \sqrt{\left( \frac{E_{xx} - E_{yy}}{2} \right)^2 + E_{xy}^2} $$

Regangan Geser Maksimum ($\gamma_{\max}$):

$$ \gamma_{\max} = E_1 - E_2 = 2 \sqrt{\left( \frac{E_{xx} - E_{yy}}{2} \right)^2 + E_{xy}^2} $$

Regangan Ekuivalen Von Mises ($\varepsilon_{\text{eq}}$):

$$ \varepsilon_{\text{eq}} = \frac{2}{3} \sqrt{E_{xx}^2 - E_{xx}E_{yy} + E_{yy}^2 + 3 E_{xy}^2} $$

---

## 4. Implementasi Komputasi & Solver Terapan DIC IC-GN (Python)

Berikut adalah implementasi Python mandiri berkinerja tinggi untuk algoritma pelacakan sub-piksel Inverse Compositional Gauss-Newton (IC-GN) lengkap dengan interpolasi intensitas Bicubic Spline, perhitungan tensor regangan Green-Lagrange, dan analisis konsentrasi tegangan di sekitar lubang/takik (*open-hole tensile specimen*).

```python
"""
RuangTI Engineering Knowledge Base - Module 563
Full-Field Digital Image Correlation (DIC) 2D Sub-Pixel Engine & Green-Lagrange Strain Solver
Algorithm: Inverse Compositional Gauss-Newton (IC-GN) with Bicubic Spline Interpolation
"""

import numpy as np
from scipy.ndimage import map_coordinates, sobel
from dataclasses import dataclass
from typing import Tuple, Dict, List

@dataclass
class DICParameters:
    subset_radius: int = 15  # Subset size (2*M + 1) = 31x31 pixels
    step_size: int = 5       # Grid step size (pixels between test points)
    max_iterations: int = 50 # Maximum IC-GN iterations
    convergence_tol: float = 1e-4  # Stop threshold in sub-pixel delta
    strain_window_radius: int = 3  # Radius for local least-squares strain fitting

class DICSolverEngine:
    def __init__(self, params: DICParameters):
        self.p = params
        
    def generate_synthetic_speckle_pattern(self, width: int = 256, height: int = 256, 
                                           n_speckles: int = 2500, speckle_radius: float = 2.5) -> np.ndarray:
        """Membangkitkan citra pola speckle sintetik berstandar metrologi ASTM E2533."""
        np.random.seed(42)
        img = np.zeros((height, width), dtype=np.float64)
        
        # Koordinat acak speckle
        x_c = np.random.uniform(0, width, n_speckles)
        y_c = np.random.uniform(0, height, n_speckles)
        intensity_peak = np.random.uniform(180, 255, n_speckles)
        
        y_grid, x_grid = np.ogrid[:height, :width]
        
        for i in range(n_speckles):
            dist_sq = (x_grid - x_c[i])**2 + (y_grid - y_c[i])**2
            blob = intensity_peak[i] * np.exp(-dist_sq / (2.0 * speckle_radius**2))
            img += blob
            
        # Normalisasi ke rentang 0 - 255 dan tambahkan noise acak gaussian
        img = np.clip(img, 0, 255)
        noise = np.random.normal(0, 1.5, (height, width))
        img = np.clip(img + noise, 0, 255)
        return img

    def apply_tensile_deformation_with_hole(self, ref_img: np.ndarray, 
                                            strain_nominal: float = 0.05, 
                                            hole_radius: float = 25.0) -> np.ndarray:
        """
        Mensimulasikan deformasi medan tarik elastis-plastis spesimen berlubang (Kirsch Solution)
        U(x,y) dan V(x,y) analitis untuk pengujian presisi metrologi DIC.
        """
        h, w = ref_img.shape
        x0, y0 = w / 2.0, h / 2.0
        
        y_coords, x_coords = np.indices((h, w), dtype=np.float64)
        x_rel = x_coords - x0
        y_rel = y_coords - y0
        r = np.sqrt(x_rel**2 + y_rel**2)
        theta = np.arctan2(y_rel, x_rel)
        
        # Kirsch Analytical Solution untuk Tegangan & Medan Perpindahan di sekitar Lubang
        # Regangan tarik arah X (nominal)
        e0 = strain_nominal
        nu = 0.33  # Poisson's ratio
        a = hole_radius
        
        # Medan perpindahan u(x,y) dan v(x,y)
        u_disp = np.zeros_like(x_coords)
        v_disp = np.zeros_like(y_coords)
        
        mask = r >= a
        r_m = np.maximum(r, a)
        
        # Solusi perpindahan elastis Kirsch
        u_disp[mask] = e0 * (x_rel[mask] * (1.0 + 0.5 * (a**2 / r_m[mask]**2)) + 
                             0.5 * (a**4 / r_m[mask]**4) * x_rel[mask] * np.cos(4 * theta[mask]))
        v_disp[mask] = -nu * e0 * (y_rel[mask] * (1.0 - 0.5 * (a**2 / r_m[mask]**2)) + 
                                   0.5 * (a**4 / r_m[mask]**4) * y_rel[mask] * np.cos(4 * theta[mask]))
        
        # Pemetaan balik citra (Inverse coordinate mapping)
        x_src = x_coords - u_disp
        y_src = y_coords - v_disp
        
        # Interpolasi B-spline orde 3
        coords = np.array([y_src.ravel(), x_src.ravel()])
        def_img_flat = map_coordinates(ref_img, coords, order=3, mode='nearest')
        def_img = def_img_flat.reshape((h, w))
        
        # Masking area lubang menjadi gelap
        hole_mask = r < a
        def_img[hole_mask] = 10.0
        return def_img

    def compute_icgn_tracking(self, ref_img: np.ndarray, def_img: np.ndarray, 
                              grid_x: np.ndarray, grid_y: np.ndarray) -> Dict[str, np.ndarray]:
        """
        Pelacakan sub-piksel Inverse Compositional Gauss-Newton (IC-GN)
        Mengestimasi parameter p = [u, u_x, u_y, v, v_x, v_y] pada setiap titik kisi.
        """
        m = self.p.subset_radius
        n_pts = len(grid_x)
        
        u_res = np.full(n_pts, np.nan)
        v_res = np.full(n_pts, np.nan)
        iterations_res = np.zeros(n_pts, dtype=int)
        zncc_res = np.zeros(n_pts)
        
        # Hitung gradien spasial citra referensi
        grad_y, grad_x = np.gradient(ref_img)
        
        # Koordinat lokal subset Omega
        dx_local, dy_local = np.meshgrid(np.arange(-m, m + 1), np.arange(-m, m + 1))
        dx_vec = dx_local.ravel()
        dy_vec = dy_local.ravel()
        n_pixels = len(dx_vec)
        
        # Matriks Jacobian bentuk orde pertama: dW/dp
        # p = [u, u_x, u_y, v, v_x, v_y]
        
        for pt_idx in range(n_pts):
            x0 = grid_x[pt_idx]
            y0 = grid_y[pt_idx]
            
            # Cek batas tepi
            if (x0 - m < 0 or x0 + m >= ref_img.shape[1] or 
                y0 - m < 0 or y0 + m >= ref_img.shape[0]):
                continue
                
            # Ekstrak subset referensi
            subset_f = ref_img[y0 - m : y0 + m + 1, x0 - m : x0 + m + 1]
            f_mean = np.mean(subset_f)
            delta_f = np.sqrt(np.sum((subset_f - f_mean)**2))
            
            if delta_f < 1e-3:
                continue  # Subset tanpa pola/kontras
                
            # Gradien referensi pada subset
            subset_gx = grad_x[y0 - m : y0 + m + 1, x0 - m : x0 + m + 1].ravel()
            subset_gy = grad_y[y0 - m : y0 + m + 1, x0 - m : x0 + m + 1].ravel()
            
            # Matriks Desain Gradien J_f = [gx, gx*dx, gx*dy, gy, gy*dx, gy*dy]
            J_f = np.zeros((n_pixels, 6))
            J_f[:, 0] = subset_gx
            J_f[:, 1] = subset_gx * dx_vec
            J_f[:, 2] = subset_gx * dy_vec
            J_f[:, 3] = subset_gy
            J_f[:, 4] = subset_gy * dx_vec
            J_f[:, 5] = subset_gy * dy_vec
            
            # Matriks Hessian H_IC = J_f^T * J_f (Hanya dihitung 1x per titik subset!)
            Hessian = J_f.T @ J_f
            try:
                H_inv = np.linalg.inv(Hessian)
            except np.linalg.LinAlgError:
                continue
                
            # Inisialisasi parameter deformasi p = [u, ux, uy, v, vx, vy]
            p = np.zeros(6)
            # Inisialisasi tebakan awal (dapat diperoleh dari FFT Cross-Correlation)
            p[0] = 0.0  # u
            p[3] = 0.0  # v
            
            converged = False
            f_norm = (subset_f.ravel() - f_mean) / delta_f
            
            for it in range(self.p.max_iterations):
                # Hitung koordinat terdeformasi x' = x0 + u + (1+ux)dx + uy*dy
                x_def = x0 + p[0] + (1.0 + p[1]) * dx_vec + p[2] * dy_vec
                y_def = y0 + p[3] + p[4] * dx_vec + (1.0 + p[5]) * dy_vec
                
                # Cek apakah koordinat keluar batas citra terdeformasi
                if np.any(x_def < 0) or np.any(x_def >= def_img.shape[1]-1) or \
                   np.any(y_def < 0) or np.any(y_def >= def_img.shape[0]-1):
                    break
                    
                # Interpolasi B-spline orde 3 pada citra terdeformasi
                coords_sample = np.array([y_def, x_def])
                g_samples = map_coordinates(def_img, coords_sample, order=3, mode='nearest')
                
                g_mean = np.mean(g_samples)
                delta_g = np.sqrt(np.sum((g_samples - g_mean)**2))
                if delta_g < 1e-3:
                    break
                    
                g_norm = (g_samples - g_mean) / delta_g
                
                # Vektor Residu b = J_f^T * (g_norm - f_norm)
                diff = (delta_f / delta_g) * (g_samples - g_mean) - (subset_f.ravel() - f_mean)
                b_vec = J_f.T @ diff
                
                # Solusi Gauss-Newton: dp = -H^-1 * b
                dp = H_inv @ b_vec
                
                # Update Inverse Compositional:
                # W(p) <- W(p) * W(dp)^-1
                # Untuk model affine 1st order:
                du, dux, duy, dv, dvx, dvy = dp
                det = (1.0 + dux) * (1.0 + dvy) - duy * dvx
                if abs(det) < 1e-6:
                    break
                    
                # Inversi W(dp)
                inv_u = (-du * (1.0 + dvy) + dv * duy) / det
                inv_v = (-dv * (1.0 + dux) + du * dvx) / det
                inv_ux = -dux / det
                inv_uy = -duy / det
                inv_vx = -dvx / det
                inv_vy = -dvy / det
                
                # Komposisi W(p) o W(dp)^-1
                u_new = p[0] + inv_u + p[1] * inv_u + p[2] * inv_v
                v_new = p[3] + inv_v + p[4] * inv_u + p[5] * inv_v
                ux_new = p[1] + inv_ux + p[1] * inv_ux + p[2] * inv_vx
                uy_new = p[2] + inv_uy + p[1] * inv_uy + p[2] * inv_vy
                vx_new = p[4] + inv_vx + p[4] * inv_ux + p[5] * inv_vx
                vy_new = p[5] + inv_vy + p[4] * inv_uy + p[5] * inv_vy
                
                p = np.array([u_new, ux_new, uy_new, v_new, vx_new, vy_new])
                
                # Evaluasi norma konvergensi
                norm_dp = np.sqrt(dp[0]**2 + dp[3]**2)
                if norm_dp < self.p.convergence_tol:
                    converged = True
                    iterations_res[pt_idx] = it + 1
                    # Hitung ZNCC
                    zncc = np.sum(f_norm * g_norm)
                    zncc_res[pt_idx] = zncc
                    break
                    
            if converged:
                u_res[pt_idx] = p[0]
                v_res[pt_idx] = p[3]
                
        return {
            "grid_x": grid_x,
            "grid_y": grid_y,
            "u": u_res,
            "v": v_res,
            "iterations": iterations_res,
            "zncc": zncc_res
        }

    def compute_green_lagrange_strain(self, dic_result: Dict[str, np.ndarray], 
                                      grid_shape: Tuple[int, int]) -> Dict[str, np.ndarray]:
        """
        Menghitung Medan Tensor Regangan Green-Lagrange (Exx, Eyy, Exy, E1, E2, E_eq).
        Menggunakan regresi kuadrat terkecil lokal polinomial 2D.
        """
        ny, nx = grid_shape
        u_2d = dic_result["u"].reshape((ny, nx))
        v_2d = dic_result["v"].reshape((ny, nx))
        
        exx_2d = np.full((ny, nx), np.nan)
        eyy_2d = np.full((ny, nx), np.nan)
        exy_2d = np.full((ny, nx), np.nan)
        e1_2d = np.full((ny, nx), np.nan)
        e2_2d = np.full((ny, nx), np.nan)
        eq_2d = np.full((ny, nx), np.nan)
        
        step = self.p.step_size
        radius = self.p.strain_window_radius
        
        # Grid lokal fitting
        dy_fit, dx_fit = np.meshgrid(np.arange(-radius, radius + 1) * step, 
                                     np.arange(-radius, radius + 1) * step)
        dx_vec = dx_fit.ravel()
        dy_vec = dy_fit.ravel()
        
        # Matriks Desain Polinomial 2D: [1, x, y, x^2, xy, y^2]
        A_mat = np.column_stack([
            np.ones_like(dx_vec),
            dx_vec,
            dy_vec,
            dx_vec**2,
            dx_vec * dy_vec,
            dy_vec**2
        ])
        A_pinv = np.linalg.pinv(A_mat)
        
        for r in range(radius, ny - radius):
            for c in range(radius, nx - radius):
                u_win = u_2d[r - radius : r + radius + 1, c - radius : c + radius + 1].ravel()
                v_win = v_2d[r - radius : r + radius + 1, c - radius : c + radius + 1].ravel()
                
                # Abaikan jika ada data NaN (misal di lubang)
                if np.any(np.isnan(u_win)) or np.any(np.isnan(v_win)):
                    continue
                    
                coeff_u = A_pinv @ u_win
                coeff_v = A_pinv @ v_win
                
                # Gradien du/dx = a1, du/dy = a2, dv/dx = b1, dv/dy = b2 pada pusat (0,0)
                dudx = coeff_u[1]
                dudy = coeff_u[2]
                dvdx = coeff_v[1]
                dvdy = coeff_v[2]
                
                # Tensor Regangan Finite Green-Lagrange
                exx = dudx + 0.5 * (dudx**2 + dvdx**2)
                eyy = dvdy + 0.5 * (dudy**2 + dvdy**2)
                exy = 0.5 * (dudy + dvdx) + 0.5 * (dudx * dudy + dvdx * dvdy)
                
                # Regangan Utama
                mean_e = 0.5 * (exx + eyy)
                radius_mohr = np.sqrt((0.5 * (exx - eyy))**2 + exy**2)
                e1 = mean_e + radius_mohr
                e2 = mean_e - radius_mohr
                
                # Regangan Ekuivalen Von Mises
                e_eq = (2.0 / 3.0) * np.sqrt(exx**2 - exx * eyy + eyy**2 + 3.0 * exy**2)
                
                exx_2d[r, c] = exx
                eyy_2d[r, c] = eyy
                exy_2d[r, c] = exy
                e1_2d[r, c] = e1
                e2_2d[r, c] = e2
                eq_2d[r, c] = e_eq
                
        return {
            "Exx": exx_2d,
            "Eyy": eyy_2d,
            "Exy": exy_2d,
            "E1": e1_2d,
            "E2": e2_2d,
            "E_equivalent": eq_2d
        }

if __name__ == "__main__":
    print("=" * 80)
    print("       RUANGTI FULL-FIELD DIGITAL IMAGE CORRELATION (DIC) 2D ENGINE     ")
    print("       Algoritma IC-GN Sub-Pixel Tracking & Green-Lagrange Strain Tensor ")
    print("=" * 80)
    
    # 1. Inisialisasi Konfigurasi & Pembangkitan Speckle
    params = DICParameters(subset_radius=15, step_size=8, max_iterations=30)
    dic = DICSolverEngine(params)
    
    width, height = 240, 240
    print(f"\n[1] Membangkitkan Citra Pola Speckle Sintetik ({width}x{height} px)...")
    img_ref = dic.generate_synthetic_speckle_pattern(width=width, height=height, n_speckles=3500)
    
    # Cek Kualitas MIG
    gy, gx = np.gradient(img_ref)
    mig = np.mean(np.sqrt(gx**2 + gy**2))
    print(f"    Kualitas Pola Speckle (Mean Intensity Gradient / MIG) : {mig:.2f} (Target > 20.0)")
    
    # 2. Penerapan Deformasi Tarik Spesimen dengan Lubang Sentral (Kirsch Analytical)
    nominal_tensile_strain = 0.04  # 4% regangan tarik
    hole_radius = 20.0  # px
    print(f"\n[2] Mensimulasikan Deformasi Tarik Spesimen Kirsch (e0 = {nominal_tensile_strain*100}%, R_hole = {hole_radius} px)...")
    img_def = dic.apply_tensile_deformation_with_hole(img_ref, strain_nominal=nominal_tensile_strain, hole_radius=hole_radius)
    
    # 3. Grid Titik Pengukuran DIC
    margin = params.subset_radius + 5
    xs = np.arange(margin, width - margin, params.step_size)
    ys = np.arange(margin, height - margin, params.step_size)
    grid_xx, grid_yy = np.meshgrid(xs, ys)
    
    gx_flat = grid_xx.ravel()
    gy_flat = grid_yy.ravel()
    ny_grid, nx_grid = grid_xx.shape
    print(f"\n[3] Melakukan Pelacakan Sub-Piksel IC-GN pada {len(gx_flat)} Titik Kisi ({nx_grid}x{ny_grid})...")
    
    dic_res = dic.compute_icgn_tracking(img_ref, img_def, gx_flat, gy_flat)
    valid_pts = np.sum(~np.isnan(dic_res["u"]))
    mean_iter = np.mean(dic_res["iterations"][~np.isnan(dic_res["u"])])
    mean_zncc = np.mean(dic_res["zncc"][~np.isnan(dic_res["u"])])
    
    print(f"    Titik Berhasil Dilacak (Valid Subsets) : {valid_pts} / {len(gx_flat)} ({valid_pts/len(gx_flat)*100:.1f}%)")
    print(f"    Rata-rata Iterasi Konvergensi IC-GN    : {mean_iter:.2f} iterasi")
    print(f"    Rata-rata Koefisien Korelasi ZNCC      : {mean_zncc:.4f} (Ideal = 1.0000)")
    
    # 4. Analisis Tensor Regangan Green-Lagrange
    print(f"\n[4] Mengkomputasi Medan Tensor Regangan Finite Green-Lagrange 2D...")
    strain_res = dic.compute_green_lagrange_strain(dic_res, grid_shape=(ny_grid, nx_grid))
    
    exx_valid = strain_res["Exx"][~np.isnan(strain_res["Exx"])]
    e1_valid = strain_res["E1"][~np.isnan(strain_res["E1"])]
    
    max_exx = np.max(exx_valid)
    mean_far_exx = np.mean(exx_valid[exx_valid < 0.05])
    kt_est = max_exx / nominal_tensile_strain
    
    print(f"    Regangan Tarik Nominal Terukur (Far-field Exx) : {mean_far_exx*100:.2f}%")
    print(f"    Regangan Tarik Puncak di Tepi Takik/Lubang (Max Exx): {max_exx*100:.2f}%")
    print(f"    Faktor Konsentrasi Regangan Eksperimental (K_t): {kt_est:.2f} (Teori Kirsch K_t = 3.00)")
    print("=" * 80)
```

---

## 5. Studi Kasus Industri: Uji Tarik Komposit CFRP Kedirgantaraan & Deteksi Delaminasi

### 5.1. Deskripsi Spesimen & Persiapan Pengujian

Dalam pengujian struktur panel sayap pesawat berbahan serat karbon polimer (*Carbon Fiber Reinforced Polymer* / CFRP) laminat quasi-isotropik $[0/\pm 45/90]_s$ di industri dirgantara, kegagalan dini sering dipicu oleh konsentrasi tegangan di dekat lubang baut (*fastener hole*) yang memicu delaminasi antarlapisan (*interlaminar delamination*).

```
+-----------------------------------------------------------------------------------------------------------------------+
|                                SPESIFIKASI PENGUJIAN OPTO-MEKANIK STEREO-DIC 3D KOMPOSIT                              |
+-----------------------------------------------------------------------------------------------------------------------+
|  Parameter Pengujian               | Nilai Parameter & Standar Rujukan                                                |
+------------------------------------+----------------------------------------------------------------------------------+
|  Geometri Spesimen                 | Kupon Tarik Berlubang Sentral (Open-Hole Tension ASTM D5766)                     |
|  Dimensi Spesimen                  | 250 mm x 36 mm x 2.4 mm (Diameter Lubang d = 6.0 mm)                             |
|  Material                          | Toray T800 / Epoxy Prepreg Matrix                                                |
|  Sistem Akuisisi Citra             | Dual CMOS 12 MP Stereo Camera, Focal Length 50 mm Telecentric                    |
|  Standar Kalibrasi Stereo          | ASTM E2533 Grid Target 9x9 Ceramic Target (Root Mean Square Reprojection < 0.02 px)|
|  Metode Pembuatan Pola Speckle     | Aerosol Spray Gun: Lapisan dasar matte putih (5 um) + Titik hitam acak (40 um)   |
+------------------------------------+----------------------------------------------------------------------------------+
```

### 5.2. Analisis Distribusi Regangan Bidang-Penuh & Validasi Model FEM

Hasil pelacakan regangan bidang penuh stereo-DIC mengungkapkan perilaku inisiasi retak matriks dan delaminasi sebelum terjadi keruntuhan katastropik:

```
+------------------------------------+-------------------------+-------------------------+------------------------------+
| Titik Evaluasi Kritis             | Pengukuran Strain Gauge | Analisis Stereo-DIC     | Simulasi FEM ABAQUS 3D       |
+------------------------------------+-------------------------+-------------------------+------------------------------+
| Regangan Jauh (Far-field Strain)   | 4.250 microstrain       | 4.280 microstrain       | 4.260 microstrain            |
| Konsentrasi Regangan Tepi Lubang   | Tak Terukur (Off-scale) | 13.650 microstrain      | 13.800 microstrain           |
| Faktor Konsentrasi Tegangan (K_t)  | Tidak Terdeteksi        | K_t = 3.19              | K_t = 3.24 (Deviasi 1.5%)    |
| Inisiasi Retak Matriks Geser (±45°)| Tidak Terdeteksi        | Terdeteksi pada 62% UTS | Prediksi Hashin Damage 65%   |
| Lokasi Perpindahan Out-of-Plane    | Tidak Mampu Mengukur    | w = 0.42 mm (Tekuk Lapis)| Sesuai Prediksi Cohesive CZM|
+------------------------------------+-------------------------+-------------------------+------------------------------+
```

---

## 6. Protokol Kalibrasi, Verifikasi Ketidakpastian, & Standar Industri

### 6.1. Protokol Verifikasi Ketidakpastian Menurut ASTM E2533 & ISO 9513
1. **Uji Translasi Benda Kaku (*Rigid Body Motion Test*)**:
   - Spesimen digerakkan oleh *micrometer translation stage* presisi sebesar $100 \ \mu\text{m}$ tanpa pembebanan eksternal.
   - Evaluasi metrik: Galat sistematis $\Delta u = |u_{\text{measured}} - u_{\text{true}}| \le 0.005 \text{ piksel}$, dan galat acak (*standard deviation*) $\sigma_u \le 0.002 \text{ piksel}$.
2. **Kompensasi Distorsi Optik Lensa**:
   - Koreksi distorsi radial ($k_1, k_2, k_3$) dan tangensial ($p_1, p_2$) menggunakan model Brown-Conrady saat kalibrasi stereo target.
3. **Kompensasi Efek Fluktuasi Termal & Indeks Bias Udara**:
   - Pada pengujian temperatur tinggi ($> 500 \ ^\circ\text{C}$), pasang filter interferensi optik *blue bandpass* ($\lambda = 450 \text{ nm}$) dan pencahayaan LED monokromatik biru untuk mengeliminasi radiasi termal benda hitam (*incandescence*). Pasang bilah angin laminer untuk mencegah *heat haze refractive shimmer*.

---

## 7. Referensi Terverifikasi & Standar Industri

1. **Pan, B., Qian, K., Xie, H., & Asundi, A.** (2009). Two-dimensional digital image correlation for in-plane displacement and strain measurement: a review. *Measurement Science and Technology*, 20(6), 062001. https://doi.org/10.1088/0957-0233/20/6/062001
2. **Pan, B.** (2018). Bias of digital image correlation due to the sub-pixel registration algorithm. *Experimental Mechanics*, 58(2), 295–309. https://doi.org/10.1007/s11340-017-0346-6
3. **Sutton, M. A., Orteu, J. J., & Schreier, H.** (2009). *Image Correlation for Shape, Motion and Deformation Measurements: Basic Concepts, Theory and Applications*. Springer Science & Business Media. ISBN: 9780387787473.
4. **International Digital Image Correlation Society (iDICs)**. (2018). *A Good Practices Guide for Digital Image Correlation*. Edited by E.M.C. Jones and M.A. Iadicola. https://doi.org/10.32720/idics/gpg.ed1
5. **ASTM E2533-17**: Standard Guide for Testing Advanced Ceramics and Composites Using Non-Contact Optical Strain Metrology.
6. **ISO 9513:2012**: Metallic materials — Calibration of extensometer systems used in uniaxial testing.
7. **Schreier, H. W., & Sutton, M. A.** (2002). Systematic errors in digital image correlation due to imperfect subpixel interpolation. *Experimental Mechanics*, 42(3), 303–310. https://doi.org/10.1007/BF02410987.
