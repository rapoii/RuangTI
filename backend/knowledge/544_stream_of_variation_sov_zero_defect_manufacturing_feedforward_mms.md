# Modul 544: Stream of Variation (SoV) Modeling & Zero-Defect Manufacturing (ZDM): State-Space Dimensional Quality Propagation, Feedforward Fixture Compensation, dan In-Line Metrology Control pada Multi-Stage Manufacturing Systems (MMS)

## 1. Pengantar & Konteks Industri: Paradigma Zero-Defect Manufacturing (ZDM) & MMS

Dalam era manufaktur presisi tinggi (*precision manufacturing*) seperti industri otomotif (*body-in-white assembly*), kedirgantaraan (*aerospace fuselage assembly*), fabrikasi semikonduktor, dan permesinan presisi multi-sumbu, produk akhir dihasilkan melalui rantai proses manufaktur bertingkat (*Multi-Stage Manufacturing Systems* / MMS). Pada sistem manufaktur bertingkat ini, benda kerja (*workpiece*) mengalami serangkaian transformasi fisik, pemesinan, reposisi pencekaman (*fixturing*), penyambungan (*welding/joining*), serta inspeksi geometris di sepanjang beberapa stasiun stasioner berturut-turut.

Secara historis, pengendalian kualitas konvensional berbasis *Statistical Process Control* (SPC) mengevaluasi variasi kualitas secara terisolasi pada masing-masing stasiun kerja (*station-by-station independent inspection*). Pendekatan klasik ini memiliki kelemahan mendasar:
1. **Kegagalan Menangkap Efek Akumulasi & Perambatan (*Variation Accumulation & Propagation*)**: Penyimpangan dimensi kecil pada stasiun hulu ($k=1$) dapat berpindah (*carried-over*), teramplifikasi (*amplified*), atau terdistorsi oleh kesalahan pencekaman (*fixture locating error*) pada stasiun hilir ($k=2, 3, \dots, N$), sehingga menyebabkan cacat dimensi fatal pada produk akhir.
2. **Keterlambatan Tindakan Korektif (Post-Mortem Rejection)**: Deteksi cacat di ujung lini (*end-of-line quality gate*) menyebabkan *scrap rate* dan biaya pengerjaan ulang (*rework cost*) yang sangat masif karena nilai tambah (*added value*) material telah terakumulasi penuh.

```
+-----------------------------------------------------------------------------------------------------------------------+
|                       PARADIGMA STREAM OF VARIATION (SoV) & ZERO-DEFECT MANUFACTURING (ZDM)                          |
+-----------------------------------------------------------------------------------------------------------------------+
|                                                                                                                       |
|   [STASIUN k-1: FORMING/STAMPING]        [STASIUN k: ROBOTIC WELDING]          [STASIUN k+1: DRILLING/MILLING]        |
|                                                                                                                       |
|   Variasi Part Sumber (w_{k-1})           Error Pencekam Fixture (u_k)           Error Pemesinan Alat Potong (w_{k+1})|
|             │                                      │                                      │                           |
|             ▼                                      ▼                                      ▼                           |
|   +───────────────────+                  +───────────────────+                  +───────────────────+                 |
|   | Keadaan Dimensi   |  Perambatan A_k  | Keadaan Dimensi   | A_{k+1} Transisi | Keadaan Dimensi   |                 |
|   | Part x_{k-1}      | ───────────────> | Terakumulasi x_k  | ───────────────> | Final Produk x_N  |                 |
|   +─────────┬─────────+                  +─────────┬─────────+                  +─────────┬─────────+                 |
|             │                                      │                                      │                           |
|             ▼ In-Line Metrology                    ▼ Sensor Optik 3D                      ▼ CMM Inspection            |
|       y_{k-1} = C_{k-1} x_{k-1}               y_k = C_k x_k                          y_N = C_N x_N                    |
|             │                                      │                                      │                           |
|             └───────────────┬──────────────────────┘                                      │                           |
|                             ▼                                                             │                           |
|   +───────────────────────────────────────────────────────────────────+                   │                           |
|   |         FEEDFORWARD REAL-TIME ADAPTIVE COMPENSATION (ZDM)         |                   │                           |
|   |         u_k^* = - (B_k^T B_k)^{-1} B_k^T A_{k-1} \hat{x}_{k-1}    |                   │                           |
|   |   (Kompensasi Aktuator Fixture / Penyesuaian Tool Offset Real-Time)│                   │                           |
|   +─────────────────────────────────┬─────────────────────────────────+                   │                           |
|                                     │                                                     │                           |
|                                     ▼                                                     ▼                           |
|                   VARIASI DIMENSI TERKOMPENSASI 100%                   CPK MENINGKAT > 2.0                            |
|                   Zero Scrap & Waste pada Multi-Stage MMS               Zero Defect Manufacturing                     |
|                                                                                                                       |
+-----------------------------------------------------------------------------------------------------------------------+
```

Teori **Stream of Variation (SoV)**, yang dipelopori oleh Prof. Jianjun Shi (2006), memodelkan fenomena aliran dan perambatan variasi kualitas dimensi antar stasiun kerja ke dalam representasi ruang keadaan (*State-Space Model*). Dengan memadukan model ruang keadaan ini ke dalam arsitektur **Zero-Defect Manufacturing (ZDM)** berbasis sensor *in-line optical scanning / machine vision*, deviasi dimensi dari stasiun sebelumnya dapat diidentifikasi secara *real-time* dan dikompensasi secara *feedforward* oleh aktuator cerdas pada stasiun berikutnya, mencegah timbulnya produk cacat sejak siklus manufaktur berjalan.

---

## 2. Taksonomi & Komparasi Strategi Pengendalian Kualitas Dimensi MMS

| Parameter Evaluasi | Traditional SPC (Shewhart / EWMA) | Engineering Process Control (EPC / PID) | Multistage Stream of Variation (SoV - Open Loop) | ZDM Feedforward-Feedback Control (RuangTI - SoV ZDM) |
| :--- | :--- | :--- | :--- | :--- |
| **Perspektif Pemodelan** | Stasiun Tunggal Independen | Kontrol Dinamis Lokal per Mesin | Propagasi Ruang-Keadaan Multi-Stasiun ($k=1 \dots N$) | **Propagasi Ruang-Keadaan + Kompensasi Aktif Terintegrasi** |
| **Relasi Antar-Stasiun** | Diabaikan (*Blind to Stage Coupling*) | Diabaikan (Fokus pada Output Lokal) | Dimodelkan secara Eksplisit ($A_k, B_k, \Gamma_k$) | **Dimodelkan Eksplisit & Dimanfaatkan untuk Feedforward** |
| **Mekanisme Sensor** | *Post-Process Offline CMM Sampling* | *In-Line Local Sensor* | *Multi-Station Metrology Network* | **100% In-Line Metrology Scanning + Sensor Fusion** |
| **Waktu Respon Korektif** | Reaktif (Setelah *Out-of-Control*) | Real-Time Lokal (Feedback) | Diagnostik Akar Penyebab (*Root Cause*) | **Proaktif & Prediktif (*Pre-emptive Compensation*)** |
| **Kompensasi Fixture/Tool** | Kalibrasi Manual Periodik | Penyesuaian Offset Manual | Simulasi Alokasi Toleransi | **Aktuasi Otomatis Micro-Positioning Fixture / CNC Offset** |
| **Target Kualitas** | Deteksi Penyimpangan ($\pm 3\sigma$) | Menjaga Setpoint Lokal | Analisis Variansi Kumulatif | **Zero Defect ($C_{pk} \ge 2.0$, Defect Rate $\approx 0$ PPM)** |

---

## 3. Landasan Teori & Formulasi Matematis Stream of Variation (SoV)

### 3.1. Representasi Ruang Keadaan (*State-Space Representation*) pada MMS

Pada sistem manufaktur multi-stasiun dengan $N$ stasiun bertingkat, dinamika perambatan deviasi geometris dan dimensi part dimodelkan sebagai sistem diskrit spasial-stokastik:

$$\mathbf{x}_k = \mathbf{A}_{k-1} \mathbf{x}_{k-1} + \mathbf{B}_k \mathbf{u}_k + \mathbf{w}_k, \quad k = 1, 2, \dots, N$$

$$\mathbf{y}_k = \mathbf{C}_k \mathbf{x}_k + \mathbf{v}_k$$

Di mana:
- $\mathbf{x}_k \in \mathbb{R}^{n_x}$: Vektor deviasi dimensi/geometris part (*dimensional deviation state*) setelah operasi pada stasiun $k$ terhadap datum nominal.
- $\mathbf{x}_{k-1} \in \mathbb{R}^{n_x}$: Vektor deviasi dimensi part yang masuk dari stasiun sebelumnya ($k-1$). Pada stasiun awal ($k=1$), $\mathbf{x}_0$ merepresentasikan variasi bawaan bahan baku mentah (*raw material / stamped sheet incoming variation*).
- $\mathbf{u}_k \in \mathbb{R}^{n_u}$: Vektor aksi kendali/kompensasi aktif pada stasiun $k$ (misalnya pergeseran pin penjamin pencekam *fixture locator displacement* atau *CNC tool offset*).
- $\mathbf{w}_k \in \mathbb{R}^{n_x}$: Vektor derau proses independen (*uncorrelated process noise / tooling disturbance*) pada stasiun $k$, yang berdistribusi normal multivariat:
  $$\mathbf{w}_k \sim \mathcal{N}(\mathbf{0}, \mathbf{\Sigma}_{\mathbf{w}_k})$$
- $\mathbf{y}_k \in \mathbb{R}^{n_y}$: Vektor hasil pengukuran dimensi produk oleh sensor *in-line* atau *optical scanner* pada stasiun $k$.
- $\mathbf{v}_k \in \mathbb{R}^{n_y}$: Vektor derau pengukuran sensor (*metrology measurement noise*):
  $$\mathbf{v}_k \sim \mathcal{N}(\mathbf{0}, \mathbf{\Sigma}_{\mathbf{v}_k})$$

### 3.2. Struktur Matriks Fisik Sistem Manufaktur

1. **Matriks Transisi Variasi ($\mathbf{A}_{k-1}$)**:
   Menggambarkan transfer deviasi geometris dari stasiun $k-1$ ke $k$. Untuk proses perakitan lembaran logam (*sheet metal assembly 3-2-1 locating principle*), $\mathbf{A}_{k-1}$ diturunkan dari kinematika bodi kaku (*rigid body kinematics*) atau elastoplastik (*compliant mechanism*):
   $$\mathbf{A}_{k-1} = \mathbf{I} - \mathbf{J}_{\text{fixture}}^{(k)} \mathbf{J}_{\text{part}}^{(k-1)}$$
   di mana $\mathbf{J}$ adalah matriks Jacobian orientasi titik tumpu (*locating pins and clamps*).

2. **Matriks Input Kendali ($\mathbf{B}_k$)**:
   Menghubungkan pergerakan aktuator mikro pada stasiun $k$ terhadap koreksi posisi dan orientasi komponen.

3. **Matriks Observasi Metrologi ($\mathbf{C}_k$)**:
   Memetakan koordinat status dimensi internal terhadap posisi fitur yang terbaca oleh sistem sensor optik/kamera 3D.

---

### 3.3. Perambatan Kovariansi Variasi Tanpa Kendali (*Open-Loop Variance Propagation*)

Apabila tidak ada aksi kompensasi aktif ($\mathbf{u}_k = \mathbf{0}$), kovariansi variasi dimensi produk pada stasiun ke-$k$, dinotasikan sebagai $\mathbf{\Sigma}_{\mathbf{x}_k} = \mathbb{E}[\mathbf{x}_k \mathbf{x}_k^T]$, berkembang secara rekursif:

$$\mathbf{\Sigma}_{\mathbf{x}_k} = \mathbf{A}_{k-1} \mathbf{\Sigma}_{\mathbf{x}_{k-1}} \mathbf{A}_{k-1}^T + \mathbf{\Sigma}_{\mathbf{w}_k}$$

Untuk stasiun akhir $N$, solusi analitis ekspansi total variasi dimensi adalah:

$$\mathbf{\Sigma}_{\mathbf{x}_N} = \mathbf{\Phi}(N, 0) \mathbf{\Sigma}_{\mathbf{x}_0} \mathbf{\Phi}(N, 0)^T + \sum_{j=1}^{N} \mathbf{\Phi}(N, j) \mathbf{\Sigma}_{\mathbf{w}_j} \mathbf{\Phi}(N, j)^T$$

di mana $\mathbf{\Phi}(N, j)$ adalah matriks transisi keadaan diskrit multi-stasiun:
$$\mathbf{\Phi}(N, j) = \begin{cases} \mathbf{A}_{N-1} \mathbf{A}_{N-2} \cdots \mathbf{A}_j, & \text{untuk } N > j \\ \mathbf{I}, & \text{untuk } N = j \end{cases}$$

Formulasi di atas membuktikan secara matematis bahwa variasi produk akhir $\mathbf{\Sigma}_{\mathbf{x}_N}$ merupakan penjumlahan teramplifikasi dari deviasi bahan baku $\mathbf{\Sigma}_{\mathbf{x}_0}$ dan derau proses di seluruh stasiun $\mathbf{\Sigma}_{\mathbf{w}_j}$, dibobot oleh matriks propagasi $\mathbf{\Phi}(N, j)$.

---

### 3.4. Optimal Feedforward Compensation Law untuk Zero-Defect Manufacturing

Tujuan dari strategi kompensasi ZDM adalah meminimalkan deviasi dimensi terdistribusi pada produk akhir dengan menerapkan aksi korektif $\mathbf{u}_k$ pada stasiun $k$ berdasarkan estimasi deviasi yang terdeteksi di stasiun hulu $\hat{\mathbf{x}}_{k-1}$.

Fungsi objektif optimasi kuadratik (*Quadratic Cost Function*) pada stasiun $k$:

$$\min_{\mathbf{u}_k} J_k = \mathbb{E} \left[ \mathbf{x}_k^T \mathbf{Q}_k \mathbf{x}_k + \mathbf{u}_k^T \mathbf{R}_k \mathbf{u}_k \mid \mathbf{y}_{1:k-1} \right]$$

di mana $\mathbf{Q}_k \succeq 0$ adalah matriks penalti toleransi dimensi kritis, dan $\mathbf{R}_k \succ 0$ adalah matriks bobot energi aktuasi koreksi.

Dengan mensubstitusikan persamaan ruang keadaan $\mathbf{x}_k = \mathbf{A}_{k-1} \hat{\mathbf{x}}_{k-1} + \mathbf{B}_k \mathbf{u}_k + \mathbf{w}_k$, turunan parsial terhadap $\mathbf{u}_k$ menghasilkan hukum kontrol kompensasi optimal:

$$\frac{\partial J_k}{\partial \mathbf{u}_k} = 2 \mathbf{B}_k^T \mathbf{Q}_k \left( \mathbf{A}_{k-1} \hat{\mathbf{x}}_{k-1} + \mathbf{B}_k \mathbf{u}_k \right) + 2 \mathbf{R}_k \mathbf{u}_k = \mathbf{0}$$

$$\mathbf{u}_k^* = - \left( \mathbf{B}_k^T \mathbf{Q}_k \mathbf{B}_k + \mathbf{R}_k \right)^{-1} \mathbf{B}_k^T \mathbf{Q}_k \mathbf{A}_{k-1} \hat{\mathbf{x}}_{k-1}$$

Jika penalti aktuasi sangat kecil ($\mathbf{R}_k \to \mathbf{0}$) dan $\mathbf{B}_k$ memiliki rank penuh (*full column rank*), hukum kontrol kompensasi ZDM murni menyederhanakan menjadi eliminasi deviasi sempurna (*perfect cancellation*):

$$\mathbf{u}_k^* = - \left( \mathbf{B}_k^T \mathbf{B}_k \right)^{-1} \mathbf{B}_k^T \mathbf{A}_{k-1} \hat{\mathbf{x}}_{k-1} = - \mathbf{B}_k^{\dagger} \mathbf{A}_{k-1} \hat{\mathbf{x}}_{k-1}$$

di mana $\mathbf{B}_k^{\dagger}$ adalah *Moore-Penrose Pseudoinverse* dari $\mathbf{B}_k$.

---

### 3.5. State Estimation via Kalman Filtering untuk Sensor In-Line Berderau

Dalam kondisi nyata pabrik, status deviasi $\mathbf{x}_{k-1}$ tidak diketahui secara eksak, melainkan diobservasi melalui pengukuran sensor $\mathbf{y}_{k-1} = \mathbf{C}_{k-1} \mathbf{x}_{k-1} + \mathbf{v}_{k-1}$. Estimasi optimal status dimensi $\hat{\mathbf{x}}_{k-1}$ diperoleh melalui algoritma Kalman Filter Spasial:

$$\mathbf{K}_{k-1} = \mathbf{\Sigma}_{\mathbf{x}_{k-1} \mid k-2} \mathbf{C}_{k-1}^T \left( \mathbf{C}_{k-1} \mathbf{\Sigma}_{\mathbf{x}_{k-1} \mid k-2} \mathbf{C}_{k-1}^T + \mathbf{\Sigma}_{\mathbf{v}_{k-1}} \right)^{-1}$$

$$\hat{\mathbf{x}}_{k-1} = \hat{\mathbf{x}}_{k-1 \mid k-2} + \mathbf{K}_{k-1} \left( \mathbf{y}_{k-1} - \mathbf{C}_{k-1} \hat{\mathbf{x}}_{k-1 \mid k-2} \right)$$

$$\mathbf{\Sigma}_{\mathbf{x}_{k-1}} = \left( \mathbf{I} - \mathbf{K}_{k-1} \mathbf{C}_{k-1} \right) \mathbf{\Sigma}_{\mathbf{x}_{k-1} \mid k-2}$$

Dengan estimasi optimal ini, hukum kendali ZDM menjamin variansi dimensi pada produk akhir berada pada batas teoritis terendah (*minimum variance bound*).

---

## 4. Alur Algoritma Kompensasi Feedforward ZDM pada Multi-Stage MMS

```
===================================================================================================
ALGORITMA: FEEDFORWARD STREAM OF VARIATION ZERO-DEFECT CONTROL (SoV-ZDM)
===================================================================================================
Input : 
  - Matriks model sistem {A_k, B_k, C_k} untuk k = 1 ... N
  - Matriks kovariansi derau alat {Sigma_w_k} dan sensor {Sigma_v_k}
  - Matriks pembobotan optimasi Q_k, R_k
  - Batas batas toleransi dimensi produk akhir [LSL, USL]

Output:
  - Vektor aksi kendali optimal u_k* per stasiun per benda kerja
  - Distribusi deviasi produk akhir terkompensasi x_N dan indeks kapabilitas proses C_pk

Langkah Kerja:
1. Inisialisasi status part masuk: x_0 ~ N(0, Sigma_x0)
2. Untuk setiap benda kerja i = 1, 2, ..., N_batch:
     Set x_prev = x_0^{(i)}
     Untuk setiap stasiun perakitan / pemesinan k = 1, 2, ..., N:
       a. Generate gangguan proses riil: w_k ~ N(0, Sigma_w_k)
       b. Jika k == 1:
            u_1 = 0  (stasiun awal tidak menerima feedforward)
       c. Jika k > 1:
            i. Ambil pengukuran sensor in-line stasiun sebelumnya:
               y_{k-1} = C_{k-1} x_{prev} + v_{k-1}, di mana v_{k-1} ~ N(0, Sigma_v_{k-1})
            ii. Estimasi status deviasi part hulu x_hat_{k-1} via Kalman Filter:
               x_hat_{k-1} = Kalman_Update(y_{k-1}, Sigma_x_{k-1}, C_{k-1}, Sigma_v_{k-1})
            iii. Hitung aksi kendali kompensasi optimal:
               u_k^* = - (B_k^T Q_k B_k + R_k)^{-1} B_k^T Q_k A_{k-1} x_hat_{k-1}
       d. Eksekusi proses manufaktur stasiun k dengan kompensasi:
            x_k = A_{k-1} x_prev + B_k u_k + w_k
       e. Perbarui status transmisi: x_prev = x_k
     Simpan hasil akhir x_N^{(i)} = x_k
3. Evaluasi Kinerja Kualitas:
   - Hitung Mean Deviasi: mu_N = (1/N_batch) * sum(x_N^{(i)})
   - Hitung Kovariansi Akhir: Sigma_N = (1/(N_batch-1)) * sum((x_N - mu_N)(x_N - mu_N)^T)
   - Hitung Indeks Kapabilitas: C_pk = min((USL - mu) / (3 * sigma), (mu - LSL) / (3 * sigma))
   - Hitung Defect Rate (PPM) dan Persentase Reduksi Variansi
===================================================================================================
```

---

## 5. Implementasi Python Solver: Stream of Variation & ZDM Adaptive Compensator

Skrip Python independen berikut mensimulasikan sistem manufaktur 3-stasiun (*3-Stage Assembly & Machining Process*), membandingkan variasi produk akhir antara sistem tanpa kendali (*Uncontrolled Baseline*) vs sistem ZDM terkompensasi *feedforward*.

```python
"""
RuangTI Knowledge Base - Modul 544
Stream of Variation (SoV) Modeling & Zero-Defect Manufacturing (ZDM) Solver
Author: Rafi Permana & Tim Riset Teknik Industri RuangTI
"""

import numpy as np
import pandas as pd
from typing import Dict, Tuple, List

class MultiStageSoVZDM:
    def __init__(
        self,
        num_stages: int = 3,
        dim_state: int = 2,
        dim_control: int = 2,
        dim_obs: int = 2,
        seed: int = 42
    ):
        """
        Inisialisasi Sistem Manufaktur Multi-Stasiun (MMS) berbasis SoV.
        dim_state = 2 merepresentasikan deviasi posisi [dx, dy] dalam milimeter (mm).
        """
        np.random.seed(seed)
        self.K = num_stages
        self.nx = dim_state
        self.nu = dim_control
        self.ny = dim_obs
        
        # Matriks Transisi Spasial A_k (Dinamika Propagasi dan Reorientasi Geometris)
        self.A = [
            np.eye(self.nx),                                    # Stasiun 1: Pembentukan / Stamping
            np.array([[1.00, 0.12], [0.05, 1.00]]),            # Stasiun 2: Robotic Fixturing & Welding
            np.array([[1.00, 0.00], [0.15, 1.00]])             # Stasiun 3: Precision Milling & Hole Drilling
        ]
        
        # Matriks Input Kendali B_k (Efektivitas Aktuator Fixture/Micro-Positioner)
        self.B = [
            np.eye(self.nu),
            np.array([[1.00, 0.00], [0.00, 1.00]]),
            np.array([[1.00, -0.05], [0.00, 0.95]])
        ]
        
        # Matriks Observasi Sensor Metrologi In-Line C_k
        self.C = [np.eye(self.ny) for _ in range(self.K)]
        
        # Matriks Kovariansi Gangguan Proses Tooling Sigma_w_k (mm^2)
        self.Sigma_w = [
            np.diag([0.040, 0.035]),   # Variasi Stamping / Blanking
            np.diag([0.060, 0.050]),   # Variasi Distorsi Termal Las
            np.diag([0.030, 0.045])    # Variasi Vibrasi Spindle Milling
        ]
        
        # Kovariansi Derau Sensor In-Line Optical Scanner (mm^2)
        self.Sigma_v = np.diag([0.005, 0.005])
        
        # Bobot Penalti Kuadratik Kualitas Q dan Energi Aktuasi R
        self.Q = np.diag([100.0, 100.0])
        self.R = np.diag([0.10, 0.10])
        
        # Batas Toleransi Spesifikasi Produk Akhir (USL / LSL) dalam mm
        self.tolerance_spec = 0.50  # [-0.50 mm, +0.50 mm]

    def compute_feedforward_gain(self, k: int) -> np.ndarray:
        """Menghitung gain kontrol optimal feedforward L_k = (B_k^T Q B_k + R)^-1 B_k^T Q A_{k-1}."""
        Bk = self.B[k]
        Ak_prev = self.A[k]
        gain = np.linalg.inv(Bk.T @ self.Q @ Bk + self.R) @ (Bk.T @ self.Q @ Ak_prev)
        return gain

    def run_monte_carlo_simulation(self, n_samples: int = 5000) -> Dict[str, np.ndarray]:
        """
        Menjalankan simulasi Monte Carlo untuk N benda kerja membandingkan:
        1. Open-Loop Baseline (Tanpa Kompensasi)
        2. ZDM Feedforward Real-Time Control
        """
        # Variasi part baku masuk x_0 (Raw material deviation)
        Sigma_x0 = np.diag([0.025, 0.025])
        x0_all = np.random.multivariate_normal(mean=[0.0, 0.0], cov=Sigma_x0, size=n_samples)
        
        x_uncontrolled = np.zeros((n_samples, self.K, self.nx))
        x_controlled = np.zeros((n_samples, self.K, self.nx))
        u_actions = np.zeros((n_samples, self.K, self.nu))
        
        # Pre-compute feedforward gains
        gains = [self.compute_feedforward_gain(k) for k in range(self.K)]
        
        for i in range(n_samples):
            # --- 1. Skenario Uncontrolled (Open-Loop) ---
            x_prev_u = x0_all[i].copy()
            for k in range(self.K):
                wk = np.random.multivariate_normal(mean=[0.0, 0.0], cov=self.Sigma_w[k])
                xk_u = self.A[k] @ x_prev_u + wk
                x_uncontrolled[i, k] = xk_u
                x_prev_u = xk_u
                
            # --- 2. Skenario ZDM Feedforward Controlled ---
            x_prev_c = x0_all[i].copy()
            for k in range(self.K):
                wk = np.random.multivariate_normal(mean=[0.0, 0.0], cov=self.Sigma_w[k])
                if k == 0:
                    uk = np.zeros(self.nu)
                else:
                    # In-line metrology measurement dari stasiun k-1
                    vk = np.random.multivariate_normal(mean=[0.0, 0.0], cov=self.Sigma_v)
                    yk_prev = self.C[k-1] @ x_prev_c + vk
                    
                    # State estimation (Kalman filter 1-step simplification)
                    x_hat_prev = yk_prev  # sensor C=I berakurasi tinggi
                    
                    # Aksi kompensasi aktif fixture/offset
                    uk = - gains[k] @ x_hat_prev
                    
                u_actions[i, k] = uk
                xk_c = self.A[k] @ x_prev_c + self.B[k] @ uk + wk
                x_controlled[i, k] = xk_c
                x_prev_c = xk_c
                
        return {
            "uncontrolled": x_uncontrolled,
            "controlled": x_controlled,
            "control_inputs": u_actions
        }

    def evaluate_quality_metrics(self, sim_results: Dict[str, np.ndarray]) -> pd.DataFrame:
        """Menghitung metrik kapabilitas proses Cpk, variansi, dan PPM defect rate."""
        records = []
        n_samples = sim_results["uncontrolled"].shape[0]
        
        for name, data in [("Uncontrolled Baseline", sim_results["uncontrolled"]),
                           ("ZDM Feedforward Control", sim_results["controlled"])]:
            final_dev = data[:, -1, :] # Stasiun akhir N
            var_dx = np.var(final_dev[:, 0])
            var_dy = np.var(final_dev[:, 1])
            std_dx = np.std(final_dev[:, 0])
            std_dy = np.std(final_dev[:, 1])
            
            # Cpk calculation (Toleransi +- 0.50 mm)
            cpk_dx = self.tolerance_spec / (3.0 * std_dx)
            cpk_dy = self.tolerance_spec / (3.0 * std_dy)
            overall_cpk = min(cpk_dx, cpk_dy)
            
            # Defect count (Part di luar batas toleransi +-0.50 mm)
            defects = np.sum((np.abs(final_dev[:, 0]) > self.tolerance_spec) | 
                             (np.abs(final_dev[:, 1]) > self.tolerance_spec))
            ppm = (defects / n_samples) * 1_000_000
            
            records.append({
                "Strategi Kualitas": name,
                "Var(dx) [mm^2]": round(var_dx, 5),
                "Var(dy) [mm^2]": round(var_dy, 5),
                "Std(dx) [mm]": round(std_dx, 4),
                "Std(dy) [mm]": round(std_dy, 4),
                "Cpk dx": round(cpk_dx, 3),
                "Cpk dy": round(cpk_dy, 3),
                "Overall Cpk": round(overall_cpk, 3),
                "Defect Rate (PPM)": int(ppm)
            })
            
        df = pd.DataFrame(records)
        return df

if __name__ == "__main__":
    print("=" * 85)
    print("SIMULASI STREAM OF VARIATION (SoV) & ZERO-DEFECT MANUFACTURING (ZDM) MMS")
    print("=" * 85)
    
    mms_solver = MultiStageSoVZDM(num_stages=3, seed=101)
    results = mms_solver.run_monte_carlo_simulation(n_samples=10000)
    metrics_df = mms_solver.evaluate_quality_metrics(results)
    
    print("\n--- HASIL EVALUASI KAPABILITAS KUALITAS PRODUK AKHIR (STASIUN 3) ---")
    print(metrics_df.to_string(index=False))
    
    # Hitung Persentase Reduksi Variansi
    var_un_x = metrics_df.loc[0, "Var(dx) [mm^2]"]
    var_ct_x = metrics_df.loc[1, "Var(dx) [mm^2]"]
    red_x = (1.0 - var_ct_x / var_un_x) * 100.0
    
    var_un_y = metrics_df.loc[0, "Var(dy) [mm^2]"]
    var_ct_y = metrics_df.loc[1, "Var(dy) [mm^2]"]
    red_y = (1.0 - var_ct_y / var_un_y) * 100.0
    
    print("\n--- ANALISIS REDUKSI VARIANSI SOV-ZDM ---")
    print(f"Reduksi Variansi Deviasi Sumbu X : {red_x:.2f}%")
    print(f"Reduksi Variansi Deviasi Sumbu Y : {red_y:.2f}%")
    print(f"Peningkatan Kapabilitas Proses Cpk: {metrics_df.loc[0, 'Overall Cpk']} -> {metrics_df.loc[1, 'Overall Cpk']}")
    print("=" * 85)
```

---

## 6. Studi Kasus Industri: Body-in-White (BiW) Automotive Assembly Line

### 6.1. Deskripsi Permasalahan Industri
PT Presisi Otomotif Nusantara memproduksi rangka bodi samping mobil (*Automotive Side Body Aperture*) yang dirakit melalui 3 stasiun robotik bertingkat:
1. **Stasiun 1 (Stamping & Clamping)**: Benda kerja lembaran baja ditempatkan pada fixture 3-2-1 locator.
2. **Stasiun 2 (Robotic Spot Welding)**: Pengelasan pilar A dan pilar B ke *floor pan*, menimbulkan distorsi termal dan deviasi rotasi sudut ($\theta$).
3. **Stasiun 3 (Door Hemming & Laser Brazing)**: Pemasangan kusen pintu samping di mana batas celah (*gap and flushness tolerance*) ditetapkan sangat ketat: $\pm 0.50 \text{ mm}$.

Sebelum implementasi ZDM, inspeksi hanya dilakukan di akhir Stasiun 3 menggunakan CMM offline. Tingkat cacat *gap distortion* mencapai $3.8\%$ (38.000 PPM), menyebabkan pengerjaan ulang manual (*manual re-bending*) dengan biaya penalti Rp 1,4 miliar per tahun.

### 6.2. Implementasi Solusi SoV-ZDM Terintegrasi
Manajemen menerapkan solusi SoV-ZDM dengan arsitektur berikut:
1. **In-Line 3D Laser Triangulation Scanner** dipasang di antara Stasiun 1 & 2 serta Stasiun 2 & 3 untuk mengukur koordinat lubang pin dalam waktu $< 0.8$ detik per siklus.
2. **Piezoelectric Micro-Actuators pada Fixture Locator Stasiun 2 & 3** yang mampu menggeser posisi pin pencekam secara *real-time* hingga rentang $\pm 1.20 \text{ mm}$ dengan resolusi $5 \ \mu\text{m}$.
3. **Kontroler Kompensasi Feedforward SoV** yang menghitung koreksi offset $\mathbf{u}_k^*$ untuk setiap rangka bodi yang melintas.

### 6.3. Hasil Kuantitatif Implementasi
Berdasarkan evaluasi $10.000$ unit produksi berturut-turut:
- **Reduksi Variansi Total**: Variansi deviasi dimensi sumbu X turun sebesar $68.4\%$ dan sumbu Y turun sebesar $54.1\%$.
- **Indeks Kapabilitas Proses ($C_{pk}$)**: Melonjak dari $C_{pk} = 0.94$ (tidak kapabel) menjadi $C_{pk} = 2.12$ (kualitas *World-Class Six Sigma*).
- **Penurunan Defect Rate**: Dari $38.000 \text{ PPM}$ menjadi $0 \text{ PPM}$ (*Zero Defect*).
- **Efisiensi Finansial**: Penghematan biaya rework dan penalti *assembly line* mencapai Rp 1,32 miliar pada tahun pertama, dengan *Payback Period* investasi sensor sebesar 6,4 bulan.

---

## 7. Rangkuman Formula Matematis Penting

| Konsep Kunci | Notasi & Formula Matematis | Makna Operasional & Interpretasi |
| :--- | :--- | :--- |
| **Model Ruang Keadaan MMS** | $\mathbf{x}_k = \mathbf{A}_{k-1}\mathbf{x}_{k-1} + \mathbf{B}_k\mathbf{u}_k + \mathbf{w}_k$ | Menghubungkan deviasi dimensi antar-stasiun bertingkat secara fisik. |
| **Model Observasi Metrologi** | $\mathbf{y}_k = \mathbf{C}_k\mathbf{x}_k + \mathbf{v}_k$ | Menangkap pembacaan sensor *in-line* dengan derau pengukuran $\mathbf{v}_k$. |
| **Propagasi Kovariansi Open-Loop** | $\mathbf{\Sigma}_{\mathbf{x}_k} = \mathbf{A}_{k-1} \mathbf{\Sigma}_{\mathbf{x}_{k-1}} \mathbf{A}_{k-1}^T + \mathbf{\Sigma}_{\mathbf{w}_k}$ | Akumulasi perambatan variansi tanpa kompensasi aktif. |
| **Hukum Kontrol ZDM Optimal** | $\mathbf{u}_k^* = - (\mathbf{B}_k^T \mathbf{Q}_k \mathbf{B}_k + \mathbf{R}_k)^{-1} \mathbf{B}_k^T \mathbf{Q}_k \mathbf{A}_{k-1} \hat{\mathbf{x}}_{k-1}$ | Penentuan pergeseran aktuator *fixture* untuk menetralisir deviasi hulu. |
| **Kompensasi Pseudoinverse Murni** | $\mathbf{u}_k^* = - \mathbf{B}_k^{\dagger} \mathbf{A}_{k-1} \hat{\mathbf{x}}_{k-1}$ | Pembatalan deviasi dimensi secara sempurna (*perfect feedforward cancellation*). |
| **Indeks Kapabilitas Proses** | $C_{pk} = \min \left( \frac{\text{USL} - \mu}{3\sigma}, \frac{\mu - \text{LSL}}{3\sigma} \right)$ | Ukuran pemenuhan toleransi dimensi spesifikasi produk akhir. |

---

## 8. Referensi Akademis Terverifikasi

1. **Shi, J.** (2006). *Stream of Variation Modeling and Analysis for Multistage Manufacturing Processes*. CRC Press / Taylor & Francis Group. DOI: [10.1201/9781420003901](https://doi.org/10.1201/9781420003901).
2. **Psarommatis, F., May, G., Dreyfus, P.-A., & Kiritsis, D.** (2020). Zero defect manufacturing: state-of-the-art review, shortcomings and future directions in research. *International Journal of Production Research*, 58(1), 1–17. DOI: [10.1080/00207543.2019.1605228](https://doi.org/10.1080/00207543.2019.1605228).
3. **Azamfirei, V., Psarommatis, F., & Lagrosen, Y.** (2023). Application of automation for in-line quality inspection, a zero-defect manufacturing approach. *Journal of Manufacturing Systems*, 67, 187–203. DOI: [10.1016/j.jmsy.2022.12.010](https://doi.org/10.1016/j.jmsy.2022.12.010).
4. **Huang, Q., Lin, J., Bezdecny, M., & Kong, Z.** (2007). Stream-of-Variation Modeling—Part I: A Generic Three-Dimensional Variation Model for Rigid-Body Assembly in Single Station Assembly Processes. *ASME Journal of Manufacturing Science and Engineering*, 129(4), 821–831. DOI: [10.1115/1.2738117](https://doi.org/10.1115/1.2738117).
5. **Eger, F., Reiff, C., Brantl, M., & Colledani, M.** (2018). Correlation analysis methods in multi-stage production systems for reaching zero-defect manufacturing. *Procedia CIRP*, 67, 215–220. DOI: [10.1016/j.procir.2018.03.163](https://doi.org/10.1016/j.procir.2018.03.163).
6. **Montgomery, D. C.** (2020). *Introduction to Statistical Quality Control* (8th ed.). John Wiley & Sons. ISBN: 978-1-119-39930-8.
