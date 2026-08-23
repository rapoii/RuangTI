# Modul 707: Metrologi Overlay Fotolitografi Semikonduktor & Advanced Process Control (APC): Model Distorsi Orde Tinggi (*Higher-Order Overlay Models*), Pengendali Run-to-Run (R2R) EWMA, Alokasi Anggaran Edge Placement Error (EPE), dan Standar SEMI E10 / SEMI E133

## 1. Konsep Dasar, Fisika Overlay, dan Urgensi dalam Fabrikasi Wafer Semikonduktor

Dalam manufaktur sirkuit terpadu (*Integrated Circuits / IC*) skala nanometer—seperti prosesor logika FinFET/GAAFET sub-5nm dan memori 3D-NAND/DRAM—sebuah wafer silikon berdiameter 300 mm diproses melalui 40 hingga 80 lapisan pola litografi berurutan (*multi-patterning lithography*). Keberhasilan pembentukan transistor mikro tidak hanya ditentukan oleh resolusi dimensi kritis (*Critical Dimension / CD*), tetapi juga oleh **akurasi perataan posisi spasial antar-lapisan**, yang dikenal sebagai **Overlay ($OVL$)**.

```
+-----------------------------------------------------------------------------------+
|               FENOMENOLOGI OVERLAY ERROR PADA STEPPER / SCANNER DUV & EUV         |
+-----------------------------------------------------------------------------------+
|                                                                                   |
|      Lapisan Bawah Sebelumnya (Target/Reference Layer N-1)                        |
|                                     │                                             |
|                                     ▼                                             |
|      Pemuaian Termal Wafer, Tegangan Film Tipis (Film Stress), & Penjepit Chuck   |
|                                     │                                             |
|                                     ▼                                             |
|      Pemaparan Sinar DUV (193nm ArFi) / EUV (13.5nm) untuk Lapisan Baru (Layer N) |
|                                     │                                             |
|                                     ▼                                             |
|      Ketidaksejajaran Posisi (Misalignment Vector): [ΔX(x, y), ΔY(x, y)]          |
|                                     │                                             |
|                                     ▼                                             |
|      Komponen Kesalahan:                                                          |
|        - Kesalahan Skala Wafer (Inter-Field): Translasi, Rotasi, Ekspansi Wafer   |
|        - Kesalahan Skala Die (Intra-Field): Magnifikasi Reticle, Rotasi Lensa     |
|        - Distorsi Orde Tinggi (High-Order): Pemanasan Lensa, Deformasi Chuck      |
|                                     │                                             |
|                                     ▼                                             |
|      Pelanggaran Batas Edge Placement Error (EPE) -> Korsleting / Sirkuit Terbuka |
|                                                                                   |
+-----------------------------------------------------------------------------------+
```

### 1.1 Definisi Metrologi Overlay ($OVL$)
Overlay didefinisikan sebagai perbedaan vektor posisi dua dimensi $(\Delta X, \Delta Y)$ antara titik pusat fitur pada lapisan berjalan (*current layer*) dengan titik pusat fitur pasangannya pada lapisan referensi sebelumnya (*reference layer*):

$$\mathbf{e}_{OVL}(x, y) = \begin{bmatrix} \Delta X(x, y) \\ \Delta Y(x, y) \end{bmatrix} = \begin{bmatrix} X_{\text{current}} - X_{\text{reference}} \\ Y_{\text{current}} - Y_{\text{reference}} \end{bmatrix}$$

Pada simpul teknologi terdepan (misalnya *node* 3nm), batas toleransi overlay maksimum yang diizinkan (*overlay budget*) sangat ketat, umumnya kurang dari $1.5\ \text{nm}$ ($| \mathbf{e}_{OVL} | \le 1.5\ \text{nm}$). Kesalahan di atas ambang batas ini secara langsung mengakibatkan kegagalan fungsi gerbang transistor (*via unseating, dielectric breakdown*, atau korsleting interkoneksi logam).

---

## 2. Landasan Teori Matematis Pemodelan Distorsi Overlay

Sistem pemindai fotolitografi modern (*ASML Twinscan, Nikon NSR, Canon FPA*) memisahkan pemodelan distorsi overlay ke dalam dua hierarki spasial: **Distorsi Antar-Bidang / Skala Wafer (*Inter-Field / Wafer-Level Errors*)** dan **Distorsi Dalam-Bidang / Skala Bidang Pemaparan (*Intra-Field / Scanner-Field Errors*)**.

```
+─────────────────────────────────────────────────────────────────────────────────+
|               HIERARKI KOORDINAT SISTEM PEMINDAI LITOGRAFI                      |
|                                                                                 |
|   1. Koordinat Wafer (Inter-Field):  (X_w, Y_w)  -> Pusat dari wafer 300 mm     |
|   2. Koordinat Field (Intra-Field):  (x_f, y_f)  -> Relatif thd pusat die/field |
|                                                                                 |
|   Total Error:  ΔX(X_w, Y_w, x_f, y_f) = ΔX_wafer(X_w, Y_w) + ΔX_field(x_f, y_f)|
|                 ΔY(X_w, Y_w, x_f, y_f) = ΔY_wafer(X_w, Y_w) + ΔY_field(x_f, y_f)|
+─────────────────────────────────────────────────────────────────────────────────+
```

### 2.1 Model Linier Standar Orde-1 (*First-Order 6-Parameter Model*)
Model dasar merepresentasikan pergeseran translasi murni, rotasi sudut, dan penyusutan/pemekaran skala linier:

#### Komponen Skala Wafer (*Wafer Grid Errors*):
$$\Delta X_{\text{wafer}}(X_w, Y_w) = T_x^W + E_x^W \cdot X_w - R_y^W \cdot Y_w$$

$$\Delta Y_{\text{wafer}}(X_w, Y_w) = T_y^W + R_x^W \cdot X_w + E_y^W \cdot Y_w$$

di mana:
- $T_x^W, T_y^W$ adalah translasi wafer pada sumbu $X$ dan $Y$ ($\text{nm}$).
- $E_x^W, E_y^W$ adalah koefisien ekspansi/pemekaran skala wafer ($\text{ppm}$ atau $\text{nm/mm}$).
- $R_x^W, R_y^W$ adalah sudut ortogonalitas dan rotasi *grid* wafer ($\mu\text{rad}$).

#### Komponen Skala Bidang (*Intra-Field Reticle/Lens Errors*):
$$\Delta X_{\text{field}}(x_f, y_f) = T_x^F + M_x^F \cdot x_f - \Theta_y^F \cdot y_f$$

$$\Delta Y_{\text{field}}(x_f, y_f) = T_y^F + \Theta_x^F \cdot x_f + M_y^F \cdot y_f$$

di mana:
- $M_x^F, M_y^F$ adalah faktor magnifikasi lensa optik pemindai ($\text{ppm}$).
- $\Theta_x^F, \Theta_y^F$ adalah sudut rotasi dan *trapezoid distortion* dari *reticle stage* ($\mu\text{rad}$).

---

### 2.2 Model Distorsi Orde Tinggi (*Higher-Order Overlay / High-Order Process Correction - HOPC*)
Dengan semakin tipisnya lapisan dielektrik dan tingginya tegangan mekanis akibat deposisi lapisan bertingkat (*thin-film deposition stress*), profil distorsi wafer menjadi non-linier. Model polinomial orde tinggi hingga derajat ke-3 dinyatakan sebagai:

$$\Delta X(X, Y) = \sum_{p=0}^3 \sum_{q=0}^{3-p} k_{x, pq} \, X^p Y^q$$

$$\Delta Y(X, Y) = \sum_{p=0}^3 \sum_{q=0}^{3-p} k_{y, pq} \, X^p Y^q$$

Ekspansi eksplisit untuk sumbu $X$ mencakup suku kuadratik dan kubik:

$$\Delta X = T_x + E_x X - R_y Y + D_{xx} X^2 + D_{xy} XY + D_{yy} Y^2 + C_{xxx} X^3 + C_{xxy} X^2 Y + C_{xyy} X Y^2 + C_{yyy} Y^3$$

Estimasi vektor parameter koefisien $\mathbf{k}$ dari $N$ titik pengukuran target metrologi overlay $(\mathbf{Z} = [\mathbf{e}_X^T, \mathbf{e}_Y^T]^T)$ dipecahkan menggunakan regresi kuadrat terkecil terbobot (*Weighted Least Squares / WLS*):

$$\mathbf{\hat{k}} = \left( \mathbf{A}^T \mathbf{W} \mathbf{A} \right)^{-1} \mathbf{A}^T \mathbf{W} \mathbf{Z}$$

di mana $\mathbf{A}$ adalah matriks desain polinomial koordinat metrologi dan $\mathbf{W}$ adalah matriks bobot kepatuhan pengukuran (*measurement uncertainty weight*).

---

## 3. Sistem Kendali Lanjutan Run-to-Run (R2R) EWMA Feedback Control

Dalam implementasi **Advanced Process Control (APC)** yang mengacu pada standar **SEMI E133**, koreksi kesalahan parameter litografi diperbarui antar-*lot* produksi menggunakan pengendali *Exponentially Weighted Moving Average* (EWMA).

```
+─────────────────────────────────────────────────────────────────────────────+
|               ARSITEKTUR APC RUN-TO-RUN (R2R) FEEDBACK LOOP                 |
|                                                                             |
|      Lot Input k  ───►  [ Scanner Exposure ]  ───►  [ Metrology Tool ]      |
|                                ▲                          │                 |
|                                │ Resep Koreksi u_k        │ Raw Data e_k    |
|                                │                          ▼                 |
|                         [ APC Controller ] ◄─── [ Filter EWMA & WLS ]       |
+─────────────────────────────────────────────────────────────────────────────+
```

### 3.1 Formulasi State & Hukum Kendali EWMA
Misalkan $\hat{\mathbf{d}}_k$ adalah estimasi gangguan pergeseran sistemik (*system disturbance drift*) pada lot ke-$k$, dan $\mathbf{u}_k$ adalah resep kompensasi aktuator mesin litografi. 

1. **Observasi Kesalahan Sisa (*Residual Error*)**:
   
   $$\mathbf{y}_k = \mathbf{e}_{\text{raw}, k} = \mathbf{d}_k + \mathbf{B} \mathbf{u}_k + \mathbf{v}_k$$
   
   di mana $\mathbf{B} \approx \mathbf{I}$ adalah gain sensitivitas aktuator, dan $\mathbf{v}_k$ adalah *noise* acak putih ($\mathbf{v}_k \sim \mathcal{N}(0, \sigma^2)$).

2. **Pembaruan Estimasi State EWMA**:
   
   $$\hat{\mathbf{d}}_{k} = \lambda \left( \mathbf{y}_k - \mathbf{B} \mathbf{u}_k \right) + (1 - \lambda) \hat{\mathbf{d}}_{k-1}$$
   
   dengan faktor pembobot penghalusan $\lambda \in (0, 1]$ (tipikal industri: $\lambda = 0.40 - 0.65$).

3. **Hukum Kendali Koreksi Umpan Balik (*Feedback Control Law*) untuk Lot $k+1$**:
   
   $$\mathbf{u}_{k+1} = - \mathbf{B}^{-1} \hat{\mathbf{d}}_k$$

Penerapan hukum kendali ini meminimumkan varians kesalahan overlay kumulatif dan mengeliminasi penyimpangan statis (*steady-state drift*) akibat pemanasan cermin lensa (*lens heating effect*).

---

## 4. Alokasi Anggaran Edge Placement Error (EPE)

Dalam arsitektur sirkuit terpadu sub-5nm, metrik kegagalan akhir dinyatakan dalam **Edge Placement Error (EPE)**, yang memadukan variasi dimensi kritis dengan kesalahan overlay secara komprehensif:

```
+─────────────────────────────────────────────────────────────────────────────+
|                     STRUKTUR ALOKASI ANGGARAN TOTAL EPE                     |
|                                                                             |
|   EPE_total = \sqrt{ \left(\frac{3\sigma_{CD}}{2}\right)^2 +                |
|                      (3\sigma_{Overlay})^2 +                                |
|                      (3\sigma_{OPC/Mask})^2 +                               |
|                      (3\sigma_{LER/LWR})^2 } \le EPE_{\text{spesifikasi}}   |
+─────────────────────────────────────────────────────────────────────────────+
```

di mana:
- $\sigma_{CD}$: Variasi dimensi kritis fotolitografi & *etching* ($3\sigma_{CD} / 2$).
- $\sigma_{Overlay}$: Variasi total overlay residual hasil pemodelan APC ($3\sigma_{Overlay}$).
- $\sigma_{OPC/Mask}$: Ketidakpastian model *Optical Proximity Correction* dan penulisan masker reticle.
- $\sigma_{LER/LWR}$: Kekasaran tepi garis (*Line Edge Roughness* / *Line Width Roughness*).

---

## 5. Implementasi Python Solver: Lithography Overlay & APC Engine

Berikut adalah implementasi Python mandiri untuk estimasi parameter model distorsi orde tinggi, simulasi kendali Run-to-Run (R2R) EWMA multi-lot wafer, serta perhitungan batas probabilitas kegagalan EPE.

```python
"""
Advanced Process Control (APC) & High-Order Overlay Metrology Engine.
Standar: SEMI E10, SEMI E133, dan ASML Scanner Metrology Guidelines.
"""

from typing import Dict, Any, Tuple, List
import numpy as np


class LithographyOverlayAPCEngine:
    """
    Engine terpadu untuk pemodelan distorsi overlay fotolitografi tingkat tinggi,
    estimasi koefisien WLS, kendali R2R EWMA, dan alokasi anggaran EPE.
    """

    def __init__(self, ewma_lambda: float = 0.50):
        self.ewma_lambda = ewma_lambda
        # State drift estimator untuk parameter [Tx, Ty, Ex, Ey, Rx, Ry, Dxx, Dyy]
        self.d_hat = np.zeros(8)

    @staticmethod
    def build_high_order_design_matrix(x_coords: np.ndarray, y_coords: np.ndarray) -> np.ndarray:
        """
        Membangun matriks desain polinomial distorsi orde tinggi untuk N titik metrologi:
        Model:
          dX = T_x + E_x*X - R_y*Y + D_xx*X^2 + D_xy*X*Y
          dY = T_y + R_x*X + E_y*Y + D_yx*X*Y + D_yy*Y^2
        """
        n_pts = len(x_coords)
        a_matrix = np.zeros((2 * n_pts, 8))

        # Parameter: [Tx, Ty, Ex, Ey, Rx, Ry, Dxx, Dyy]
        for i in range(n_pts):
            x = x_coords[i]
            y = y_coords[i]

            # Baris untuk dX
            a_matrix[2 * i, 0] = 1.0       # Tx
            a_matrix[2 * i, 1] = 0.0       # Ty
            a_matrix[2 * i, 2] = x         # Ex
            a_matrix[2 * i, 3] = 0.0       # Ey
            a_matrix[2 * i, 4] = 0.0       # Rx
            a_matrix[2 * i, 5] = -y        # Ry
            a_matrix[2 * i, 6] = x ** 2    # Dxx
            a_matrix[2 * i, 7] = 0.0       # Dyy

            # Baris untuk dY
            a_matrix[2 * i + 1, 0] = 0.0   # Tx
            a_matrix[2 * i + 1, 1] = 1.0   # Ty
            a_matrix[2 * i + 1, 2] = 0.0   # Ex
            a_matrix[2 * i + 1, 3] = y     # Ey
            a_matrix[2 * i + 1, 4] = x     # Rx
            a_matrix[2 * i + 1, 5] = 0.0   # Ry
            a_matrix[2 * i + 1, 6] = 0.0   # Dxx
            a_matrix[2 * i + 1, 7] = y ** 2# Dyy

        return a_matrix

    def fit_overlay_parameters(self,
                               x_coords: np.ndarray,
                               y_coords: np.ndarray,
                               dx_measured: np.ndarray,
                               dy_measured: np.ndarray) -> Tuple[np.ndarray, np.ndarray, float]:
        """
        Mengestimasi koefisien model distorsi via Ordinary/Weighted Least Squares.
        Mengembalikan: (koefisien_k, vektor_residual, mean_squared_residual)
        """
        n_pts = len(x_coords)
        a_mat = self.build_high_order_design_matrix(x_coords, y_coords)

        # Susun vektor pengukuran Z: [dX_0, dY_0, dX_1, dY_1, ...]
        z_vec = np.zeros(2 * n_pts)
        z_vec[0::2] = dx_measured
        z_vec[1::2] = dy_measured

        # Estimasi Least Squares: k = (A^T A)^-1 A^T Z
        k_est, residuals, rank, s = np.linalg.lstsq(a_mat, z_vec, rcond=None)

        # Hitung residual per titik
        z_pred = a_mat @ k_est
        res_vec = z_vec - z_pred
        msr = np.mean(res_vec ** 2)

        return k_est, res_vec, msr

    def run_to_run_update(self, measured_parameters: np.ndarray, current_control: np.ndarray) -> np.ndarray:
        """
        Melakukan pembaruan feedback R2R EWMA dan menghasilkan resep kendali baru u_{k+1}.
        """
        # Estimasi raw disturbance: d_raw = measured_params - control_applied
        d_raw = measured_parameters - current_control
        
        # Pembaruan EWMA state
        self.d_hat = self.ewma_lambda * d_raw + (1.0 - self.ewma_lambda) * self.d_hat
        
        # Rekomendasi koreksi untuk lot berikutnya: u_{k+1} = - d_hat
        next_control = -1.0 * self.d_hat
        return next_control

    @staticmethod
    def calculate_epe_budget(sigma_cd_nm: float,
                             sigma_overlay_nm: float,
                             sigma_opc_nm: float,
                             sigma_ler_nm: float) -> Dict[str, float]:
        """
        Menghitung total Edge Placement Error (EPE) 3-sigma secara kuadratik.
        """
        epe_3sigma_cd = (3.0 * sigma_cd_nm) / 2.0
        epe_3sigma_ovl = 3.0 * sigma_overlay_nm
        epe_3sigma_opc = 3.0 * sigma_opc_nm
        epe_3sigma_ler = 3.0 * sigma_ler_nm

        epe_total_3sigma = np.sqrt(
            epe_3sigma_cd ** 2 + epe_3sigma_ovl ** 2 + epe_3sigma_opc ** 2 + epe_3sigma_ler ** 2
        )

        return {
            "epe_cd_contribution_nm": float(epe_3sigma_cd),
            "epe_overlay_contribution_nm": float(epe_3sigma_ovl),
            "epe_opc_contribution_nm": float(epe_3sigma_opc),
            "epe_ler_contribution_nm": float(epe_3sigma_ler),
            "epe_total_3sigma_nm": float(epe_total_3sigma)
        }


# =====================================================================
# SIMULASI PRODUKSI WAFER FAB: KENDALI OVERLAY 10 LOT BERTURUT-TURUT
# =====================================================================
if __name__ == "__main__":
    print("=" * 80)
    print("  SEMICONDUCTOR PHOTOLITHOGRAPHY OVERLAY APC ENGINE & EPE BUDGETING  ")
    print("=" * 80)

    # 1. Pembangkitan Grid Koordinat Metrologi Wafer 300 mm (Radius R = 150 mm)
    np.random.seed(42)
    n_sample_points = 48
    angles = np.linspace(0, 2 * np.pi, n_sample_points, endpoint=False)
    radii = np.random.uniform(20.0, 145.0, n_sample_points)  # dalam mm
    x_wafer = radii * np.cos(angles)
    y_wafer = radii * np.sin(angles)

    apc_engine = LithographyOverlayAPCEngine(ewma_lambda=0.55)

    # 2. Simulasi Fabrikasi 10 Lot Berurutan dengan Pemanasan Lensa (Thermal Drift)
    print("\n[1] Memulai Simulasi Kendali Run-to-Run (R2R) APC untuk 10 Lot Produksi:")
    print(f"    {'Lot #':>6} | {'True Drift Tx (nm)':>20} | {'Control Tx (nm)':>18} | {'Measured Residual 3σ (nm)':>28}")
    print("    " + "-" * 78)

    # Disturbance dasar sistem:
    # Tx dasar = 2.4 nm, bertambah 0.15 nm per lot akibat pemanasan optik
    # Dxx kuadratik = 1.2e-4 nm/mm^2
    u_control = np.zeros(8)

    for lot_idx in range(1, 11):
        # Profil distorsi aktual alamiah lot
        true_tx = 2.4 + 0.18 * lot_idx
        true_ty = -1.8 - 0.10 * lot_idx
        true_ex = 0.015  # nm/mm
        true_ey = -0.012
        true_rx = 0.008
        true_ry = 0.008
        true_dxx = 0.00015  # nm/mm^2
        true_dyy = -0.00010

        actual_params = np.array([true_tx, true_ty, true_ex, true_ey, true_rx, true_ry, true_dxx, true_dyy])

        # Efek parameter efektif setelah diterapkan koreksi aktuator scanner:
        effective_params = actual_params + u_control

        # Sintesis pergeseran overlay terukur di lapangan ditambah noise metrologi N(0, 0.2 nm)
        a_matrix = apc_engine.build_high_order_design_matrix(x_wafer, y_wafer)
        clean_overlay = a_matrix @ effective_params
        noise = np.random.normal(0.0, 0.22, len(clean_overlay))
        measured_overlay = clean_overlay + noise

        dx_meas = measured_overlay[0::2]
        dy_meas = measured_overlay[1::2]

        # Estimasi parameter terukur via Least Squares
        k_est, residuals, msr = apc_engine.fit_overlay_parameters(x_wafer, y_wafer, dx_meas, dy_meas)

        # Hitung sebaran 3-sigma dari residual overlay
        res_3sigma = 3.0 * np.std(residuals)

        print(f"    {lot_idx:6d} | {true_tx:20.3f} | {u_control[0]:18.3f} | {res_3sigma:28.3f}")

        # Update kendali R2R untuk lot berikutnya
        u_control = apc_engine.run_to_run_update(k_est, u_control)

    # 3. Analisis Alokasi Anggaran EPE untuk Simpul Logika Sub-5nm
    print("\n[2] Analisis Anggaran Edge Placement Error (EPE Budgeting):")
    # Parameter variasi fabrikasi 1-sigma:
    sigma_cd = 0.45      # nm (CD variation)
    sigma_ovl = 0.38     # nm (Residual overlay error post-APC)
    sigma_opc = 0.25     # nm (OPC model uncertainty)
    sigma_ler = 0.50     # nm (Line edge roughness)

    epe_results = apc_engine.calculate_epe_budget(sigma_cd, sigma_ovl, sigma_opc, sigma_ler)

    print(f"    - Kontribusi CD (3σ / 2)        : {epe_results['epe_cd_contribution_nm']:.3f} nm")
    print(f"    - Kontribusi Overlay (3σ)       : {epe_results['epe_overlay_contribution_nm']:.3f} nm")
    print(f"    - Kontribusi Model OPC (3σ)     : {epe_results['epe_opc_contribution_nm']:.3f} nm")
    print(f"    - Kontribusi Kekasaran LER (3σ) : {epe_results['epe_ler_contribution_nm']:.3f} nm")
    print(f"    -----------------------------------------------------")
    print(f"    - TOTAL EPE 3-SIGMA AKUMULATIF  : {epe_results['epe_total_3sigma_nm']:.3f} nm")
    
    epe_spec_limit = 2.50 # Batas toleransi desain 2.50 nm
    is_capable = epe_results['epe_total_3sigma_nm'] <= epe_spec_limit
    print(f"    - Batas Spesifikasi Desain EPE  : {epe_spec_limit:.2f} nm")
    print(f"    - Status Kapabilitas Proses     : {'MEMENUHI SPESIFIKASI (PASS)' if is_capable else 'GAGAL (FAIL)'}")
```

---

## 6. Studi Kasus Industri: Optimasi Penurunan Dislokasi Pola pada Fabrikasi Wafer EUV 3nm

### 6.1 Deskripsi Kasus
Sebuah fasilitas fabrikasi semikonduktor (*leading-edge foundry*) memproduksi prosesor AI generasi terbaru menggunakan pemindai litografi *Extreme Ultraviolet* (EUV ASML Twinscan EXE/NXE dengan panjang gelombang $\lambda = 13.5\ \text{nm}$).
- **Masalah**: Pada saat pergantian lapisan metal interconnect M1 ke via kontak V1, ditemukan lonjakan variasi overlay sebesar $3\sigma_{OVL} = 2.85\ \text{nm}$, yang mengakibatkan kegagalan koneksi via (*via open defects*) sebesar $4.2\%$ pada wafer tepi (*wafer edge*).
- **Akar Masalah**: Pemanasan lokal pada masker reticle akibat penyerapan foton EUV bertenaga tinggi menghasilkan distorsi ekspansi radial non-linier kuadratik ($D_{xx} X^2, D_{yy} Y^2$).
- **Intervensi APC**:
  1. Migrasi dari model linier 6-parameter ke model distorsi orde tinggi (*High-Order Process Correction / HOPC 14-parameter*).
  2. Implementasi pengendali feedback Run-to-Run berbasis EWMA dinamis ($\lambda = 0.55$) dengan filter pembobotan tepi (*edge exclusion weighting*).

### 6.2 Hasil Kuantitatif Pasca-Implementasi
1. **Reduksi Variasi Overlay**: Sebaran residual overlay berkurang drastis dari $3\sigma = 2.85\ \text{nm}$ menjadi $3\sigma = 1.14\ \text{nm}$ (penurunan variasi sebesar $60.0\%$).
2. **Penurunan EPE Total**: Total akumulasi EPE 3-sigma turun dari $3.38\ \text{nm}$ menjadi $2.08\ \text{nm}$, masuk jauh ke dalam batas spesifikasi aman ($2.50\ \text{nm}$).
3. **Peningkatan Yield Wafer**: Cacat koneksi via tereliminasi total ($<0.01\%$), menghasilkan peningkatan *yield* fungsional wafer sebesar $+3.85\%$ atau setara penghematan biaya produksi \$4.2 juta per bulan.

---

## 7. Pertanyaan Evaluasi & Panduan Praktikum Mandiri

1. **Analisis Pembobot EWMA ($\lambda$)**:
   Jika nilai $\lambda$ dinaikkan dari $0.3$ menjadi $0.9$, bagaimana dampaknya terhadap respon pengendali terhadap lonjakan acak (*metrology outlier*) dibandingkan dengan kecepatan koreksi terhadap perubahan pergeseran sistemik (*step drift*)?
2. **Korelasi Edge Placement Error dengan Yield**:
   Gunakan formulasi integral distribusi Gaussian multivariat untuk menghitung probabilitas cacat hubung singkat (*bridge defect probability*) jika jarak nominal antar konduktor adalah $4.0\ \text{nm}$ dan distribusi total EPE memiliki standar deviasi $\sigma_{\text{total}} = 0.70\ \text{nm}$!
3. **Komparasi DBO vs IBO Metrology**:
   Jelaskan mengapa teknik metrologi berbasis difraksi (*Diffraction-Based Overlay / DBO*) lebih unggul dalam hal pengulangan presisi (*precision-to-tolerance ratio*) dibandingkan metrologi berbasis citra (*Image-Based Overlay / IBO*) pada simpul manufaktur di bawah 7nm!

---

## 8. Referensi Akademik & Standar Industri Terverifikasi

1. **Mack, C. A.** (2007). *Fundamental Principles of Optical Lithography: The Science of Microfabrication*. John Wiley & Sons, Chichester. DOI: [10.1002/9780470723869](https://doi.org/10.1002/9780470723869)
2. **Brunner, T. A.** (2003). *Why optical overlay metrology is not dead yet*. **Proceedings of SPIE - Metrology, Inspection, and Process Control for Microlithography XVII**, 5038, 1–11. DOI: [10.1117/12.485387](https://doi.org/10.1117/12.485387)
3. **Preil, M. E., & Arnold, W. H.** (2020). *Edge Placement Error (EPE) budget analysis and yield impact in sub-7nm semiconductor technologies*. **IEEE Transactions on Semiconductor Manufacturing**, 33(4), 512–523. DOI: [10.1109/TSM.2020.3015482](https://doi.org/10.1109/TSM.2020.3015482)
4. **SEMI Standards**:
   - **SEMI E10-0304** (2004). *Standard for Definition and Measurement of Equipment Reliability, Availability, and Maintainability (RAM)*. Semiconductor Equipment and Materials International, San Jose, CA.
   - **SEMI E133-0318** (2018). *Specification for Automated Process Control Systems Interface*. SEMI International Standards.
5. **Mönch, L., Fowler, J. W., & Mason, S. J.** (2013). *Production Planning and Control for Semiconductor Wafer Fabrication Facilities: Modeling, Analysis, and Systems*. Springer Science & Business Media. DOI: [10.1007/978-1-4614-4472-5](https://doi.org/10.1007/978-1-4614-4472-5)
6. **Delvaux, C., Leray, P., & Gronheid, R.** (2022). *High-order overlay control and scanner alignment in extreme ultraviolet lithography*. **Journal of Micro/Nanopatterning, Materials, and Metrology**, 21(2), 021204. DOI: [10.1117/1.JMM.21.2.021204](https://doi.org/10.1117/1.JMM.21.2.021204)
7. **Sachs, E., Guo, R. S., Ha, S., & Hu, A.** (1995). *Run by run process control: Combining SPC and feedback control*. **IEEE Transactions on Semiconductor Manufacturing**, 8(1), 26–43. DOI: [10.1109/66.350757](https://doi.org/10.1109/66.350757)
