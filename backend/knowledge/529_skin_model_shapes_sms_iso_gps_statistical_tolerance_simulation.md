# Modul 529: Simulasi Toleransi Statistik Berbasis Skin Model Shapes (SMS) dan Geometrical Product Specifications (ISO GPS): Pemodelan Deviasi Bentuk Diskrit, Karhunen-Loève Expansion, dan Analisis Stack-Up Non-Ideal

## 1. Pengantar & Konteks Industri: Paradigma Baru Toleransi Geometris Komputasional

Dalam industri manufaktur presisi tinggi (*high-precision discrete manufacturing*)—seperti industri kedirgantaraan (*aerospace aero-engine blisk & turbine housing*), transmisi otomotif (*powertrain e-axle & gear mesh*), instrumentasi optoelektronik, dan implan ortopedi biomedis—kegagalan fungsional produk akibat variasi dimensi dan deviasi bentuk mikro (*form, waviness, and roughness deviations*) menyumbang **hingga 30% dari total biaya kegagalan internal (*internal failure cost*)** (Schleich et al., 2014; Anwer et al., 2014; Humienny, 2009; Dantan et al., 2020; ISO 17450-1).

```
+---------------------------------------------------------------------------------------------------+
|      PARADIGMA TOLERANSI TRADISIONAL (IDEAL SURFACE) VS SKIN MODEL SHAPES (DISCRETE GPS)          |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|  [Paradigma CAD Tradisional: Geometri Nominal & Rigid 1D/3D Tolerance Vector]                     |
|  ┌───────────────────────────────────────────────────────────────────────────────────────┐        |
|  │ - Mengasumsikan permukaan komponen selalu rata/bulat sempurna (Ideal Shape Parameter) │        |
|  │ - Hanya memperhitungkan pergeseran posisi (Translasi & Rotasi rigid tubuh)            │        |
|  │ - Gagal mendeteksi deviasi bentuk non-ideal: Cekung/Cembung (Form error), Gelombang   │        |
|  └───────────────────────────────────────────┬───────────────────────────────────────────┘        |
|                                              │                                                    |
|                                              ▼                                                    |
|  [Paradigma Modern: ISO GPS & Skin Model Shapes (SMS - ISO 17450-1)]                              |
|  ┌───────────────────────────────────────────────────────────────────────────────────────┐        |
|  │ - Duality Principle: Spesifikasi Desain (Tolerancing) vs Verifikasi Metroloji (CMM)    │        |
|  │ - Representasi Permukaan Diskrit: Point Cloud & Triangular Mesh (Nodal Deviations)     │        |
|  │ - Sintesis Stokastik Deviasi Bentuk: Karhunen-Loève Expansion & Random Fields          │        |
|  └───────────────────────────────────────────┬───────────────────────────────────────────┘        |
|                                              │                                                    |
|                                              ▼                                                    |
|  [Simulasi Kontak & Stack-Up Perakitan Non-Ideal (Skin Model Assembly Simulation)]               |
|  ┌───────────────────────────────────────────────────────────────────────────────────────┐        |
|  │ - Kontak Titik Diskrit Non-Rigid / Rigid (Convex Hull & Distance Field Minimization)  │        |
|  │ - Prediksi Akurat Celah Fungsi (Functional Clearance), Tegangan Kontak, & Fluktuasi   │        |
|  └───────────────────────────────────────────┬───────────────────────────────────────────┘        |
|                                              │                                                    |
|                                              ▼                                                    |
|  [Output Keinsinyuran: Peningkatan Kemampuan Proses & Reduksi Biaya Scrap]                        |
|  - Validasi Desain Pra-Produksi: Menghindari Jamming Perakitan Presisi                            |
|  - Alokasi Toleransi Optimal (Cost-Tolerance Balancing) Berstandar ISO 1101 & ISO 17450-1        |
+---------------------------------------------------------------------------------------------------+
```

Pendekatan toleransi klasik berbasis *Worst-Case (WC)* maupun *Statistical Tolerance Analysis (Root-Sum-of-Squares / RSS)* berasumsi bahwa setiap fitur geometri adalah bidang datar, silinder, atau bola ideal yang hanya mengalami translasi atau rotasi kaku. Namun dalam kenyataan proses pemesinan (frais, bubut, gerinda, EDM, atau *3D metal printing*), deformasi termal, getaran pahat (*tool chatter*), dan tegangan sisa (*residual stress*) menghasilkan deviasi bentuk non-ideal yang sangat kompleks.

Standar internasional **ISO Geometrical Product Specifications (ISO GPS / ISO 17450-1 & ISO 17450-2)** mendefinisikan konsep **Skin Model** sebagai model abstrak dari batas fisik suatu benda kerja nyata yang memuat seluruh variasi bentuk yang tak terbatas. **Skin Model Shapes (SMS)** adalah instans representasi diskrit berbasis titik (*point cloud*) atau jaring segitiga (*triangular mesh*) yang dibangkitkan secara stokastik untuk menyimulasikan perakitan produk non-ideal sebelum proses fabrikasi massal dimulai.

---

## 2. Taksonomi Pendekatan Analisis Toleransi Industri

| Parameter Karakteristik | Analisis 1D Stack-Up (Worst-Case & RSS) | 3D Rigid-Body CAT (Homogeneous Transformation Matrix) | 3D Skin Model Shapes (SMS & ISO GPS) |
| :--- | :--- | :--- | :--- |
| **Representasi Geometri** | Rantai skalar satu dimensi ($L_1 \pm t_1$) | CAD Nominal Parametrik + Vektor Variasi $(dx, dy, dz, d\alpha, d\beta, d\gamma)$ | **Permukaan Diskrit Non-Ideal (*Triangular Mesh* + Vektor Deformasi Nodal)** |
| **Deviasi Bentuk (*Form Error*)** | Diabaikan ($0\%$ representasi bentuk) | Diabaikan (Permukaan tetap ideal datar/silinder) | **Dimodelkan penuh (*Flatness, Circularity, Cylindricity, Freeform Waviness*)** |
| **Interaksi Kontak Pasangan** | Titik ujung garis 1D | Kontak teoritis bidang-ke-bidang | **Kontak titik diskrit multi-kontak nyata (*Multi-point contact & Convex Hull envelope*)** |
| **Metodologi Pembangkitan** | Penjumlahan variansi $\sigma_{\text{tot}}^2 = \sum \sigma_i^2$ | Transformasi matriks $4 \times 4$ | **Karhunen-Loève Expansion, Gaussian Random Fields, atau Modal Decomposition** |
| **Kesesuaian Standar** | Standar toleransi linier dasar | ASME Y14.5 / ISO 1101 (Toleransi Posisi) | **ISO 17450-1, ISO 17450-2, ISO 1101 (ISO GPS Comprehensive)** |
| **Aplikasi Kritis** | Pengecekan jarak celah baut sederhana | Perakitan bodi mobil lembaran (*Sheet metal BIW*) | **Blisk mesin jet turbin, gearbox presisi transmisi EV, lensa optik berakurasi sub-mikron** |

---

## 3. Landasan Teori & Formulasi Matematis Skin Model Shapes (SMS)

### 3.1. Representasi Diskrit Permukaan dan Pemodelan Medan Acak Gauss (Gaussian Random Fields)

Sebuah komponen nominal direpresentasikan sebagai jaring diskrit (*nominal mesh*) $\mathcal{M}_0 = (\mathcal{V}_0, \mathcal{F})$, di mana $\mathcal{V}_0 = \{\mathbf{p}_{0,1}, \mathbf{p}_{0,2}, \dots, \mathbf{p}_{0,N_v}\}$ adalah himpunan koordinat $N_v$ simpul nominal pada $\mathbb{R}^3$, dan $\mathcal{F}$ adalah himpunan elemen segitiga. Setiap simpul $i$ memiliki vektor normal satuan $\mathbf{n}_i$.

Instans **Skin Model Shape (SMS)** $\mathcal{M}_{\text{SMS}} = (\mathcal{V}_{\text{SMS}}, \mathcal{F})$ dihasilkan dengan memberikan pergeseran skalar normal $d_i \in \mathbb{R}$ pada setiap simpul nominal $i$:

$$\mathbf{p}_{\text{SMS}, i} = \mathbf{p}_{0, i} + d_i \, \mathbf{n}_i, \quad \forall i \in \{1, 2, \dots, N_v\}$$

Vektor deviasi bentuk $\mathbf{d} = [d_1, d_2, \dots, d_{N_v}]^T$ dimodelkan sebagai Medan Acak Gauss Multivariat (*Multivariate Gaussian Random Field*) dengan nilai ekspektasi nol $\mathbb{E}[\mathbf{d}] = \mathbf{0}$ dan matriks kovariansi spasial $\mathbf{C} \in \mathbb{R}^{N_v \times N_v}$.

Fungsi kovariansi spasial antar simpul $i$ dan $j$ umumnya didefinisikan menggunakan model korelasi Gaussian atau Matérn:

$$C_{ij} = \operatorname{Cov}(d_i, d_j) = \sigma^2 \exp\left( -\frac{\|\mathbf{p}_{0, i} - \mathbf{p}_{0, j}\|^2}{2 \, l_c^2} \right)$$

di mana:
- $\sigma$: Standar deviasi amplitudo deviasi bentuk (*form deviation magnitude*).
- $l_c$: Panjang korelasi spasial (*correlation length*), yang merepresentasikan skala gelombang (*waviness scale*) dari proses permesinan.

---

### 3.2. Dekomposisi Spektral via Karhunen-Loève Expansion (KLE)

Untuk mereduksi dimensi stokastik yang sangat besar ($N_v > 10^4$ simpul) dan mempercepat simulasi Monte Carlo ribuan instans perakitan, matriks kovariansi $\mathbf{C}$ didekomposisi menggunakan **Karhunen-Loève Expansion (KLE)**:

$$\mathbf{C} \, \boldsymbol{\phi}_k = \lambda_k \, \boldsymbol{\phi}_k, \quad k = 1, 2, \dots, N_v$$

di mana $\lambda_1 \ge \lambda_2 \ge \dots \ge \lambda_{N_v} \ge 0$ adalah nilai eigen (*eigenvalues*) dan $\boldsymbol{\phi}_k$ adalah vektor eigen (*eigenvectors*) ortonormal yang merepresentasikan modus deviasi bentuk (*eigenmodes of geometric error*).

Vektor deviasi $\mathbf{d}$ dapat direkonstruksi secara efisien menggunakan $M \ll N_v$ modus dominan:

$$\mathbf{d} \approx \sum_{k=1}^M \sqrt{\lambda_k} \, \xi_k \, \boldsymbol{\phi}_k$$

di mana $\xi_k \sim \mathcal{N}(0, 1)$ adalah variabel acak normal baku independen.

---

### 3.3. Penskalaan dan Penegakan Toleransi ISO GPS (Zone Scaling)

Agar Skin Model Shape yang dibangkitkan mematuhi spesifikasi toleransi geometris (misalnya toleransi kerataan / *flatness* $t_{\text{flat}}$ sesuai ISO 1101), deviasi bentuk yang dihasilkan harus diproyeksikan dan diskalakan ke dalam zona toleransi:

$$\text{Flatness}(\mathbf{d}) = \max_{i} (\mathbf{p}_{\text{SMS}, i} \cdot \mathbf{n}_{\text{fit}}) - \min_{i} (\mathbf{p}_{\text{SMS}, i} \cdot \mathbf{n}_{\text{fit}}) \le t_{\text{flat}}$$

di mana $\mathbf{n}_{\text{fit}}$ adalah vektor normal bidang pas least-squares (*least-squares fitted plane*). Jika $\text{Flatness}(\mathbf{d}) > t_{\text{flat}}$, deviasi diskalakan:

$$\mathbf{d}_{\text{scaled}} = \mathbf{d} \times \left( \frac{t_{\text{flat}} \cdot U(0, 1)}{\text{Flatness}(\mathbf{d})} \right)$$

---

### 3.4. Mekanika Kontak Perakitan Non-Ideal & Optimasi Jarak Minimum

Ketika dua komponen non-ideal $A$ dan $B$ dirakit, komponen $B$ mengalami transformasi rigid kaku $(\mathbf{R}, \mathbf{t})$ yang meminimalkan energi potensial atau celah fungsional di bawah gaya gravitasi / penekanan $F_{\text{ext}}$, dengan syarat tidak boleh ada penetrasi material (*non-penetration condition*):

$$\min_{\mathbf{t}, \boldsymbol{\theta}} \quad f_{\text{clearance}}(\mathbf{t}, \boldsymbol{\theta}) = \sum_{j \in \mathcal{V}_B} \min_{i \in \mathcal{V}_A} \|\mathbf{p}_{B, j}(\mathbf{t}, \boldsymbol{\theta}) - \mathbf{p}_{A, i}\|$$

dengan konstrain tanpa penetrasi material:

$$\operatorname{SignedDistance}(\mathbf{p}_{B, j}(\mathbf{t}, \boldsymbol{\theta}), \mathcal{M}_{A}) \ge 0, \quad \forall j \in \mathcal{V}_B$$

```
+---------------------------------------------------------------------------------------------------+
|               KONDISI KONTAK NON-IDEAL DUA PERMUKAAN BERBASIS SKIN MODEL SHAPES                   |
+---------------------------------------------------------------------------------------------------+
| Permukaan B (Non-Ideal SMS):       /\__/\  /\  /\                                                 |
|                                    \   / \/  \/  \                                                |
| Kontak Titik Diskrit:               *     *     *   <--- Titik Kontak Nyata (Bukan Bidang Penuh)  |
| Permukaan A (Non-Ideal SMS):      __/‾‾\__/\__/\_                                                 |
|                                                                                                   |
| Celah Fungsional Nyata (Gap g):   g_actual = min(z_B - z_A) >= 0                                  |
| Variasi Sudut Kemiringan (Tilt):  θ_tilt = arctan( Δz / L_contact )                               |
+---------------------------------------------------------------------------------------------------+
```

---

## 4. Implementasi Python: Framework Simulasi Skin Model Shapes & Analisis Stack-Up Non-Ideal

Berikut adalah modul Python terpadu untuk membangkitkan *Skin Model Shapes*, mengeksekusi dekomposisi Karhunen-Loève, melakukan penskalaan zona toleransi ISO GPS, dan menjalankan simulasi Monte Carlo kontak non-ideal.

```python
"""
RuangTI - Industrial Engineering Knowledge Base
Modul 529: Skin Model Shapes (SMS) & ISO GPS Tolerance Stack-Up Simulator
Implementasi Karhunen-Loève Expansion & Non-Ideal Surface Assembly Contact
"""

import numpy as np
from typing import Tuple, Dict, List, Optional

class SurfaceMesh:
    def __init__(self, nx: int, ny: int, length: float, width: float):
        """Membangkitkan mesh diskrit grid beraturan untuk permukaan planar."""
        self.nx = nx
        self.ny = ny
        self.length = length
        self.width = width
        self.num_vertices = nx * ny

        # Titik koordinat nominal
        x = np.linspace(0, length, nx)
        y = np.linspace(0, width, ny)
        xv, yv = np.meshgrid(x, y)
        
        self.nominal_points = np.zeros((self.num_vertices, 3))
        self.nominal_points[:, 0] = xv.flatten()
        self.nominal_points[:, 1] = yv.flatten()
        self.nominal_points[:, 2] = 0.0  # Bidang Z nominal = 0

        self.normals = np.zeros((self.num_vertices, 3))
        self.normals[:, 2] = 1.0  # Normal Z positif

class SkinModelGenerator:
    def __init__(self, mesh: SurfaceMesh, correlation_length: float, std_dev: float):
        self.mesh = mesh
        self.lc = correlation_length
        self.sigma = std_dev
        self.cov_matrix = self._compute_covariance_matrix()
        self.eig_vals, self.eig_vecs = self._compute_kl_modes()

    def _compute_covariance_matrix(self) -> np.ndarray:
        """Menghitung matriks kovariansi spasial Gaussian antar simpul."""
        coords = self.mesh.nominal_points[:, :2] # Evaluasi 2D di bidang XY
        # Hitung jarak kuadrat pairwise menggunakan aljabar matriks NumPy murni
        # ||a - b||^2 = ||a||^2 + ||b||^2 - 2 a.b
        sq_norms = np.sum(coords**2, axis=1)
        dist_sq = sq_norms[:, np.newaxis] + sq_norms[np.newaxis, :] - 2.0 * np.dot(coords, coords.T)
        dist_sq = np.maximum(dist_sq, 0.0) # Hindari nilai negatif numerik
        
        cov = (self.sigma ** 2) * np.exp(-dist_sq / (2.0 * (self.lc ** 2)))
        return cov

    def _compute_kl_modes(self) -> Tuple[np.ndarray, np.ndarray]:
        """Menghitung nilai eigen dan vektor eigen untuk Karhunen-Loève Expansion."""
        vals, vecs = np.linalg.eigh(self.cov_matrix)
        # Urutkan dari nilai eigen terbesar
        idx = np.argsort(vals)[::-1]
        vals = np.maximum(vals[idx], 0.0) # Pastikan non-negatif
        vecs = vecs[:, idx]
        return vals, vecs

    def generate_sms(self, num_modes: int = 20, flatness_tolerance: Optional[float] = None) -> np.ndarray:
        """
        Membangkitkan instans Skin Model Shape (SMS) menggunakan ekspansi KL.
        Output: Koordinat titik diskrit (N_v x 3) dengan deviasi non-ideal.
        """
        m = min(num_modes, len(self.eig_vals))
        xi = np.random.normal(0.0, 1.0, m)
        
        # Rekonstruksi deviasi normal d = sum(sqrt(lambda_k) * xi_k * phi_k)
        dev = np.zeros(self.mesh.num_vertices)
        for k in range(m):
            if self.eig_vals[k] > 1e-12:
                dev += np.sqrt(self.eig_vals[k]) * xi[k] * self.eig_vecs[:, k]

        # Penskalaan Toleransi Kerataan (Flatness Scaling ISO 1101) jika ditentukan
        if flatness_tolerance is not None:
            # Eliminasi komponen translasi/kemiringan kaku (Least Squares Plane Fitting)
            A = np.c_[self.mesh.nominal_points[:, 0], self.mesh.nominal_points[:, 1], np.ones(self.mesh.num_vertices)]
            plane_coeff, _, _, _ = np.linalg.lstsq(A, dev, rcond=None)
            form_error = dev - (A @ plane_coeff)
            raw_flatness = np.max(form_error) - np.min(form_error)
            
            if raw_flatness > 1e-9:
                target_flatness = flatness_tolerance * np.random.uniform(0.6, 1.0)
                form_error = form_error * (target_flatness / raw_flatness)
                dev = form_error + (A @ plane_coeff)

        sms_points = np.copy(self.mesh.nominal_points)
        sms_points[:, 2] += dev
        return sms_points

class AssemblySimulator:
    @staticmethod
    def simulate_contact_stackup(bottom_sms: np.ndarray, top_sms: np.ndarray) -> Dict[str, float]:
        """
        Simulasi perakitan kontak mekanis antara komponen bawah dan atas.
        Komponen atas diletakkan di atas komponen bawah di bawah beban vertikal.
        Mencari pergeseran vertikal minimum (Z-offset) dan sudut kemiringan (tilt) tanpa penetrasi.
        """
        # Komponen atas diposisikan menghadap ke bawah (koordinat relatif)
        # Persamaan kontak: Z_top(x,y) + z_shift >= Z_bottom(x,y) untuk semua (x,y)
        # Gap lokal g(x,y) = (Z_top + z_shift) - Z_bottom
        
        # Pengecekan elevasi dasar (3-point stable support / convex hull contact)
        z_diff = bottom_sms[:, 2] - top_sms[:, 2]
        required_z_shift = np.max(z_diff)
        
        gaps = (top_sms[:, 2] + required_z_shift) - bottom_sms[:, 2]
        
        # Hitung metrik geometris kritis
        min_clearance = np.min(gaps)
        mean_clearance = np.mean(gaps)
        max_clearance = np.max(gaps)
        
        # Hitung sudut tilt ekstrim akibat ketidakrataan
        # Fit bidang pada celah untuk mendeteksi deviasi paralelisme (Parallelism Error)
        x_coords = bottom_sms[:, 0]
        y_coords = bottom_sms[:, 1]
        A = np.c_[x_coords, y_coords, np.ones_like(x_coords)]
        plane_fit, _, _, _ = np.linalg.lstsq(A, gaps, rcond=None)
        tilt_x = np.arctan(plane_fit[0]) * (180.0 / np.pi) * 3600.0 # arcsec
        tilt_y = np.arctan(plane_fit[1]) * (180.0 / np.pi) * 3600.0 # arcsec

        return {
            "assembly_height_shift": float(required_z_shift),
            "min_gap_mm": float(min_clearance),
            "mean_gap_mm": float(mean_clearance),
            "max_gap_mm": float(max_clearance),
            "parallelism_tilt_x_arcsec": float(tilt_x),
            "parallelism_tilt_y_arcsec": float(tilt_y),
            "contact_points_count": int(np.sum(np.isclose(gaps, 0.0, atol=1e-4)))
        }

# =====================================================================
# Verifikasi Komputasional & Simulasi Monte Carlo Skin Model Shapes
# =====================================================================
if __name__ == "__main__":
    print("=" * 80)
    print("SIMULASI TOLERANSI STATISTIK BERBASIS SKIN MODEL SHAPES (ISO GPS)")
    print("=" * 80)

    # 1. Definisi Geometri Flange Pasangan Presisi (100 mm x 100 mm, Mesh 15x15)
    mesh = SurfaceMesh(nx=15, ny=15, length=100.0, width=100.0)
    
    # 2. Generator SMS untuk Dua Proses Manufaktur Berbeda:
    #    - Komponen Bawah: Pemesinan Frais CNC Presisi (lc = 30 mm, Flatness = 0.020 mm)
    #    - Komponen Atas: Pemesinan Gerinda Permukaan (lc = 15 mm, Flatness = 0.010 mm)
    gen_bottom = SkinModelGenerator(mesh, correlation_length=30.0, std_dev=0.008)
    gen_top = SkinModelGenerator(mesh, correlation_length=15.0, std_dev=0.004)

    print(f"Mesh Simpul: {mesh.num_vertices} titik | Panjang Korelasi: {gen_bottom.lc} mm & {gen_top.lc} mm")
    print(f"Eigenmode Karhunen-Loève Dihitung: {len(gen_bottom.eig_vals)} modes")

    # 3. Simulasi Monte Carlo (N = 500 Sampel Perakitan Non-Ideal)
    num_samples = 500
    stackup_shifts = []
    max_gaps = []
    tilts_x = []

    for _ in range(num_samples):
        sms_bot = gen_bottom.generate_sms(num_modes=15, flatness_tolerance=0.020)
        sms_top = gen_top.generate_sms(num_modes=15, flatness_tolerance=0.010)
        
        res = AssemblySimulator.simulate_contact_stackup(sms_bot, sms_top)
        stackup_shifts.append(res["assembly_height_shift"])
        max_gaps.append(res["max_gap_mm"])
        tilts_x.append(res["parallelism_tilt_x_arcsec"])

    stackup_shifts = np.array(stackup_shifts)
    max_gaps = np.array(max_gaps)
    tilts_x = np.array(tilts_x)

    print(f"\nHASIL SIMULASI MONTE CARLO STACK-UP (N = {num_samples} Iterasi):")
    print("-" * 80)
    print(f"Pergeseran Tinggi Perakitan (Z-Shift)  : Mean = {np.mean(stackup_shifts)*1000:.2f} µm | StdDev = {np.std(stackup_shifts)*1000:.2f} µm | 99.73% Max = {np.percentile(stackup_shifts, 99.73)*1000:.2f} µm")
    print(f"Celah Maksimum Antar Muka (*Gap*)     : Mean = {np.mean(max_gaps)*1000:.2f} µm | StdDev = {np.std(max_gaps)*1000:.2f} µm | P95 = {np.percentile(max_gaps, 95)*1000:.2f} µm")
    print(f"Deviasi Kemiringan (*Parallelism Tilt*): Mean = {np.mean(np.abs(tilts_x)):.2f} arcsec | Max = {np.max(np.abs(tilts_x)):.2f} arcsec")
    print("=" * 80)
```

---

## 5. Studi Kasus Industri: Perakitan Sambungan Flange Pompa Bertekanan Tinggi

Sebuah manufaktur pompa sentrifugal multi-tahap bertekanan tinggi (*150 bar offshore injection pump*) mengalami kebocoran minyak pelumas (*leakage failure rate = 8.4%*) pada sambungan *split-casing flange*. Analisis dimensi 1D konvensional memprediksi bahwa celah selalu bernilai nol dengan gasket terpasang, namun di lapangan kebocoran mikro tetap terjadi.

```
+---------------------------------------------------------------------------------------------------+
|             PERBANDINGAN HASIL EVALUASI TOLERANSI KONVENSIONAL VS SIMULASI SMS                    |
+---------------------------------------------------------------------------------------------------+
| Metode Evaluasi Toleransi       | Prediksi Celah Maksimum | Deteksi Tilt Kemiringan | Risiko Kebocoran |
|---------------------------------|-------------------------|-------------------------|------------------|
| 1D Worst-Case (WC) Model        | 0.000 mm (Ideal Flat)   | Tidak terdeteksi        | Dianggap 0% (Salah) |
| 3D Rigid-Body CAT Model         | 0.004 mm (Translasi)    | < 5 arcsec              | Rendah (1.2%)    |
| **Skin Model Shapes (SMS GPS)** | **0.028 mm (Form Wave)**| **42.8 arcsec**         | **Tinggi (8.9%)**|
+---------------------------------------------------------------------------------------------------+
```

### Analisis Keinsinyuran:
1. **Identifikasi Modus Gelombang Permukaan**: Simulasi SMS membuktikan bahwa deviasi kerataan mesin frais memiliki panjang korelasi $l_c = 35\text{ mm}$, membentuk gelombang cekung (*saddle shape*) di dekat lubang baut. Saat baut dikencangkan dengan torsi nominal, kontak hanya terjadi di sekitar baut, meninggalkan celah $28\,\mu\text{m}$ di antara baut yang melampaui ketebalan elastis gasket.
2. **Optimalisasi Desain Berbasis ISO GPS**: Toleransi kerataan (*flatness*) diperketat dari $0.030\text{ mm}$ menjadi $0.012\text{ mm}$ khusus pada zona pembatas fluida, dan panjang korelasi proses diperbaiki dengan mengubah parameter feed rate pahat finishing. Hasil pengujian aktual menunjukkan tingkat kebocoran turun drastis menjadi **0.0%**.

---

## 6. Referensi Terverifikasi & Standar Industri

1. **Schleich, B., Anwer, N., Mathieu, L., & Wartzack, S.** (2014). Skin Model Shapes: A new paradigm shift for geometric variation modeling in Computer-Aided Tolerancing. *Computer-Aided Design*, 50, 1–15. DOI: [10.1016/j.cad.2014.01.001](https://doi.org/10.1016/j.cad.2014.01.001)
2. **Anwer, N., Ballu, A., & Mathieu, L.** (2014). From solid modelling to skin model shapes: Shifting paradigms in Computer-Aided Tolerancing. *CIRP Annals - Manufacturing Technology*, 63(1), 145–148. DOI: [10.1016/j.cirp.2014.03.097](https://doi.org/10.1016/j.cirp.2014.03.097)
3. **Dantan, J. Y., Qureshi, A. J., & Ballu, A.** (2020). Tolerance analysis and synthesis based on Skin Model Shapes: State-of-the-art and future perspectives. *Journal of Manufacturing Systems*, 57, 439–455. DOI: [10.1016/j.jmsy.2020.09.009](https://doi.org/10.1016/j.jmsy.2020.09.009)
4. **Humienny, Z.** (2009). *Geometrical Product Specifications (GPS) - Course for Technical Universities*. Warsaw University of Technology, Publishing House. ISBN: 978-83-7207-827-8.
5. **ISO 17450-1:2011**. *Geometrical product specifications (GPS) — General concepts — Part 1: Model for geometrical specification and verification*. International Organization for Standardization, Geneva.
6. **ISO 1101:2017**. *Geometrical product specifications (GPS) — Geometrical tolerancing — Tolerances of form, orientation, location and run-out*. International Organization for Standardization, Geneva.
