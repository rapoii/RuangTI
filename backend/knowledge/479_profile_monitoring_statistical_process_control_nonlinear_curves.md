# Modul 479: Profile Monitoring in Statistical Process Control for Nonlinear Industrial Curves

## 1. Pengantar & Konteks Industri: Paradigma Profile Monitoring

Dalam Statistical Process Control (SPC) konvensional (Shewhart, CUSUM, EWMA, maupun Hotelling $T^2$), karakteristik kualitas suatu produk atau proses biasanya diasumsikan sebagai variabel skalar tunggal atau vektor acak diskrit pada satu titik waktu tertentu. Namun, pada berbagai proses manufaktur modern tingkat lanjut (*advanced manufacturing*), kualitas suatu komponen ditentukan oleh **hubungan fungsional dinamis** (*functional relationship / signature curve*) antara variabel respon $Y$ dan satu atau lebih variabel penjelas (*explanatory variables*) $X$.

```
+---------------------------------------------------------------------------------------------------+
|                        PARADIGMA MONITORING PROFIL NONLINEAR DALAM INDUSTRI                       |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|  [ SPC SKALAR / UNIVARIAT ]              [ PROFILE MONITORING (FUNCTIONAL SPC) ]                  |
|  - Mengukur 1 nilai (e.g. Peak Force)    - Mengukur seluruh kurva fungsi f(x) kontinu             |
|  - Mengabaikan lintasan dinamika proses  - Memonitor parameter fungsi regresi / koefisien bentuk  |
|  - Risiko False Alarm / Missed Defect    - Deteksi pergeseran bentuk (shape), skala, & translasi  |
|                                                                                                   |
|  Contoh Industri:                                                                                 |
|  1. Press-Fit Assembly Otomotif          -> Kurva Gaya Pendorongan vs. Kedalaman Penetrasi (F vs d)|
|  2. Reaktor Polimerisasi Batch / CSTR    -> Profil Kinetika Suhu/Tekanan vs. Waktu (T vs t)        |
|  3. Uji Tarik Material Komposit/Logam    -> Kurva Tegangan-Regangan Non-linear (Stress vs Strain)  |
|  4. Pemesinan CNC Berkecepatan Tinggi    -> Profil Torsi Spindel vs. Sudut Pemakanan Pahat        |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

### 1.1 Keterbatasan Reduksi Fitur Skalar (Feature Extraction Collapse)

Praktik industri tradisional sering menyederhanakan kurva menjadi beberapa metrik ringkasan diskrit (misalnya gaya maksimum $F_{\max}$, luas area di bawah kurva $AUC$, atau nilai pada titik akhir). Pendekatan reduksi skalar ini memiliki kelemahan kritis:
1. **Kehilangan Informasi Morfologi Kurva**: Anomali berupa perubahan laju gradien transisi fasa, osilasi mikro akibat getaran pahat (*tool chatter*), atau pergeseran titik belok (*inflection point*) tidak terdeteksi jika nilai puncak skalar tetap konstan.
2. **Korelasi Autoregresif Antar-Titik Pengamatan**: Titik-titik data sepanjang kurva kontinu memiliki korelasi serial (*within-profile autocorrelation*) yang melanggar asumsi independensi (*IID*) SPC standar jika dimonitor titik demi titik secara univariat.

**Profile Monitoring** mengatasi limitasi ini dengan memodelkan seluruh kurva fungsional melalui estimasi parameter regresi parametrik non-linear (seperti model logistik 4-parameter, kurva eksponensial asimtotik, atau B-Splines) dan memantau stabilitas vektor parameter beserta varians residualnya dari waktu ke waktu (Fase I kalibrasi dan Fase II pemantauan *online*).

---

## 2. Landasan Teori & Formulasi Matematis Formal

### 2.1 Model Umum Profil Non-linear

Misalkan sampel profil ke-$j$ ($j = 1, 2, \dots, m$) memiliki $n_j$ titik observasi $(x_{ij}, y_{ij})$ untuk $i = 1, 2, \dots, n_j$. Hubungan fungsional non-linear umum dinyatakan sebagai:

$$y_{ij} = f(x_{ij}, \boldsymbol{\theta}_j) + \varepsilon_{ij}, \quad i = 1, \dots, n_j; \quad j = 1, \dots, m$$

di mana:
- $y_{ij} \in \mathbb{R}$ adalah nilai respon kualitas ke-$i$ pada profil ke-$j$.
- $x_{ij} \in \mathbb{R}^d$ adalah variabel penjelas (misalnya posisi linear $d$, waktu $t$, atau regangan $\varepsilon$).
- $\boldsymbol{\theta}_j = [\theta_{j1}, \theta_{j2}, \dots, \theta_{jp}]^T \in \mathbb{R}^p$ adalah vektor parameter non-linear berdimensi $p$.
- $\varepsilon_{ij}$ adalah galat acak (*random error*), diasumsikan $\varepsilon_{ij} \sim \mathcal{N}(0, \sigma^2)$ atau memiliki struktur matriks kovarians residual $\boldsymbol{\Sigma}_\varepsilon$.

```
                  Gaya F(x) ^
                            |                            .-----. Asimtot Atas (theta_1)
                            |                          .'
                            |                        .'   Titik Belok / Midpoint (theta_3)
                            |                      .'     dengan Laju Pertumbuhan (theta_4)
                            |                    .'
                            |           .-------'
                            |          /  Asimtot Bawah (theta_2)
                            +---------+----------------------------------->
                            0         x_0                               Posisi x
```

### 2.2 Model Kasus Khusus: Kurva Logistik 4-Parameter (4PL)

Dalam proses perakitan interferensi (*press-fit assembly*) atau bio-proses kinetika enzim, model logistik 4-parameter merupakan standar representasi:

$$f(x, \boldsymbol{\theta}) = \theta_2 + \frac{\theta_1 - \theta_2}{1 + \exp\left( \frac{\theta_3 - x}{\theta_4} \right)}$$

Parameter fisis:
- $\theta_1$: Batas respon asimtotik atas (*upper asymptote / final pressing resistance*).
- $\theta_2$: Batas respon asimtotik bawah (*lower asymptote / baseline tare force*).
- $\theta_3$: Titik transisi tengah / lokasi titik belok (*inflection point location / engagement position*).
- $\theta_4$: Parameter skala kemiringan kurva (*scale / transition rate factor*).

### 2.3 Estimasi Parameter Nonlinear Least Squares (NLLS) & Linearitas Orde Pertama

Estimasi parameter $\widehat{\boldsymbol{\theta}}_j$ diperoleh dengan meminimalkan jumlah kuadrat galat (*Sum of Squared Residuals* / $SSR$):

$$\widehat{\boldsymbol{\theta}}_j = \arg\min_{\boldsymbol{\theta}} \sum_{i=1}^{n_j} \left( y_{ij} - f(x_{ij}, \boldsymbol{\theta}) \right)^2$$

Melalui aproposimasi ekspansi Taylor orde pertama di sekitar nilai konvergen $\widehat{\boldsymbol{\theta}}_j$, matriks sensitivitas Jacobian didefinisikan sebagai $\mathbf{J}_j \in \mathbb{R}^{n_j \times p}$ dengan elemen:

$$J_{ik} = \left. \frac{\partial f(x_{ij}, \boldsymbol{\theta})}{\partial \theta_k} \right|_{\boldsymbol{\theta} = \widehat{\boldsymbol{\theta}}_j}$$

Matriks varians-kovarians asimtotik dari estimator parameter $\widehat{\boldsymbol{\theta}}_j$ adalah:

$$\operatorname{Cov}(\widehat{\boldsymbol{\theta}}_j) \approx \widehat{\sigma}_j^2 \left( \mathbf{J}_j^T \mathbf{J}_j \right)^{-1}$$

di mana estimasi varians residual adalah:

$$\widehat{\sigma}_j^2 = \frac{1}{n_j - p} \sum_{i=1}^{n_j} \left( y_{ij} - f(x_{ij}, \widehat{\boldsymbol{\theta}}_j) \right)^2 = \frac{SSR_j}{n_j - p}$$

---

## 3. Prosedur Pemantauan Fase I dan Fase II

```
+---------------------------------------------------------------------------------------------------+
|                        ARSITEKTUR MONITORING PROFIL STATISTIK INDUSTRI                            |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|  FASE I: KALIBRASI & BASELINE HISTORIS                                                            |
|  1. Kumpulkan m profil historis referensi (j = 1..m).                                             |
|  2. Fitting NLLS tiap kurva -> dapatkan theta_j dan sigma_j^2.                                    |
|  3. Hitung Vektor Rata-rata In-Control (theta_bar) dan Matriks Kovarians Sampel (S_theta).        |
|  4. Eliminasi profil Out-of-Control hingga diperoleh baseline stabil terkontrol.                 |
|                                                                                                   |
|  FASE II: MONITORING ONLINE REAL-TIME                                                             |
|  1. Dapatkan profil baru ke-k (x_ik, y_ik) dari sensor lini produksi.                             |
|  2. Estimasi vektor parameter theta_k dan varians residual sigma_k^2.                             |
|  3. Hitung Statistik T^2 atau MEWMA untuk parameter bentuk/skala:                                 |
|       T_k^2 = (theta_k - theta_0)^T S_theta^-1 (theta_k - theta_0)                                |
|  4. Hitung Statistik Pengendali Varians Residual (Bagan F atau S_k^2 / sigma_0^2).                |
|  5. Trigger Intervensi Mesin jika T_k^2 > UCL atau S_k^2 > UCL_sigma.                             |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

### 3.1 Statistik Pemantauan Parameter Rata-Rata: Hotelling's $T^2$ Profil

Untuk memonitor deviasi bentuk keseluruhan dari baseline in-control $\boldsymbol{\theta}_0$ dengan matriks kovarians $\boldsymbol{\Sigma}_0$:

$$T_k^2 = (\widehat{\boldsymbol{\theta}}_k - \boldsymbol{\theta}_0)^T \boldsymbol{\Sigma}_0^{-1} (\widehat{\boldsymbol{\theta}}_k - \boldsymbol{\theta}_0)$$

Batas Kendali Atas (*Upper Control Limit* / UCL) Fase II pada tingkat signifikansi $\alpha$:

$$\text{UCL}_{T^2} = \chi^2_{\alpha, p} \quad \text{atau} \quad \frac{p(m+1)(m-1)}{m(m-p)} F_{\alpha, p, m-p}$$

### 3.2 Statistik Pemantauan Variabilitas Lokal: Residual Variance Chart

Perubahan lokal pada kurva yang tidak tertangkap oleh pergeseran parameter makro $\boldsymbol{\theta}$ akan terefleksikan pada peningkatan varians galat residual $\widehat{\sigma}_k^2$. Statistik rasio varians residual:

$$W_k = \frac{(n_k - p) \widehat{\sigma}_k^2}{\sigma_0^2} \sim \chi^2(n_k - p)$$

Batas kendali atas untuk residual variance:

$$\text{UCL}_{\sigma^2} = \frac{\sigma_0^2 \cdot \chi^2_{\alpha/2, n_k - p}}{n_k - p}, \quad \text{LCL}_{\sigma^2} = \frac{\sigma_0^2 \cdot \chi^2_{1 - \alpha/2, n_k - p}}{n_k - p}$$

---

## 4. Implementasi Python Solver: Engine Pemantau Profil Non-linear

Berikut adalah implementasi Python mandiri berstandar industri untuk memproses batch kurva, mengestimasi parameter 4PL via optimasi Levenberg-Marquardt, menghitung matriks kovarians Fase I, dan mengeksekusi pengujian Fase II secara real-time.

```python
"""
Autonomous Profile Monitoring Engine for Nonlinear Industrial Curves
Model: 4-Parameter Logistic (4PL) Curve Fitting and MSPC T2 / Residual Tracking
Author: RuangTI Industrial Knowledge Base Specialist
"""

import numpy as np
from scipy.optimize import curve_fit
from scipy.stats import chi2, f
from typing import Dict, List, Tuple, Any

def logistic_4p(x: np.ndarray, theta1: float, theta2: float, theta3: float, theta4: float) -> np.ndarray:
    """
    Model 4-Parameter Logistic:
    f(x) = theta2 + (theta1 - theta2) / (1 + exp((theta3 - x) / theta4))
    """
    # Clip ekspresion untuk mencegah numerical overflow
    z = np.clip((theta3 - x) / theta4, -100, 100)
    return theta2 + (theta1 - theta2) / (1.0 + np.exp(z))

class NonlinearProfileMonitor:
    def __init__(self, alpha: float = 0.005):
        self.alpha = alpha
        self.p = 4  # Jumlah parameter (theta1, theta2, theta3, theta4)
        self.theta_0: np.ndarray = None
        self.cov_theta_0: np.ndarray = None
        self.inv_cov_0: np.ndarray = None
        self.sigma0_sq: float = None
        self.ucl_t2: float = None
        self.ucl_sigma: float = None
        self.lcl_sigma: float = None
        self.df_resid: int = None

    def fit_single_profile(self, x: np.ndarray, y: np.ndarray, p0: List[float] = None) -> Tuple[np.ndarray, float]:
        """
        Melakukan estimasi parameter NLLS untuk satu profil tunggal.
        """
        if p0 is None:
            # Heuristik inisialisasi parameter: max, min, median_x, slope_approx
            p0 = [np.max(y), np.min(y), np.median(x), (np.max(x) - np.min(x)) / 6.0]
        
        popt, _ = curve_fit(logistic_4p, x, y, p0=p0, maxfev=10000)
        y_pred = logistic_4p(x, *popt)
        residuals = y - y_pred
        n = len(x)
        dof = n - self.p
        sigma_sq = np.sum(residuals**2) / dof
        return popt, sigma_sq

    def fit_phase_1(self, profiles_x: List[np.ndarray], profiles_y: List[np.ndarray]) -> Dict[str, Any]:
        """
        Kalibrasi Fase I: Membangun baseline in-control theta_0 dan matriks kovarians.
        """
        m = len(profiles_y)
        theta_list = []
        sigma_sq_list = []
        n_points = len(profiles_x[0])
        self.df_resid = n_points - self.p

        for j in range(m):
            theta_est, s2_est = self.fit_single_profile(profiles_x[j], profiles_y[j])
            theta_list.append(theta_est)
            sigma_sq_list.append(s2_est)

        theta_matrix = np.array(theta_list) # Shape (m, p)
        self.theta_0 = np.mean(theta_matrix, axis=0)
        self.sigma0_sq = float(np.mean(sigma_sq_list))

        # Hitung matriks kovarians antar-parameter profil
        dev = theta_matrix - self.theta_0
        self.cov_theta_0 = np.dot(dev.T, dev) / (m - 1)
        
        # Tambahkan regularisasi Tikhonov kecil jika matriks mendekati singular
        self.cov_theta_0 += 1e-8 * np.eye(self.p)
        self.inv_cov_0 = np.linalg.inv(self.cov_theta_0)

        # Hitung Batas Kendali Fase II
        # Pendekatan Chi-square atau F-distribution
        self.ucl_t2 = float(chi2.ppf(1.0 - self.alpha, df=self.p))
        self.ucl_sigma = float(self.sigma0_sq * chi2.ppf(1.0 - self.alpha / 2.0, df=self.df_resid) / self.df_resid)
        self.lcl_sigma = float(self.sigma0_sq * chi2.ppf(self.alpha / 2.0, df=self.df_resid) / self.df_resid)

        return {
            "m_profiles": m,
            "theta_baseline": self.theta_0.tolist(),
            "sigma0_squared": self.sigma0_sq,
            "ucl_t2": self.ucl_t2,
            "ucl_sigma_sq": self.ucl_sigma,
            "lcl_sigma_sq": self.lcl_sigma
        }

    def monitor_phase_2(self, x_new: np.ndarray, y_new: np.ndarray) -> Dict[str, Any]:
        """
        Evaluasi profil online baru terhadap batas kendali T^2 dan varians residual.
        """
        theta_k, sigma_sq_k = self.fit_single_profile(x_new, y_new, p0=self.theta_0.tolist())
        diff = theta_k - self.theta_0
        t2_stat = float(np.dot(np.dot(diff.T, self.inv_cov_0), diff))

        is_t2_ooc = t2_stat > self.ucl_t2
        is_sigma_ooc = (sigma_sq_k > self.ucl_sigma) or (sigma_sq_k < self.lcl_sigma)
        status = "OUT_OF_CONTROL" if (is_t2_ooc or is_sigma_ooc) else "IN_CONTROL"

        root_cause = []
        if is_t2_ooc:
            root_cause.append(f"Pergeseran Parameter Morfologi Kurva (T2={t2_stat:.2f} > UCL={self.ucl_t2:.2f})")
        if is_sigma_ooc:
            root_cause.append(f"Anomali Varians Residual/Noise Lokal (Sigma^2={sigma_sq_k:.4f})")

        return {
            "status": status,
            "t2_statistic": t2_stat,
            "sigma_sq": sigma_sq_k,
            "estimated_theta": theta_k.tolist(),
            "is_t2_alarm": is_t2_ooc,
            "is_sigma_alarm": is_sigma_ooc,
            "diagnostics": root_cause if root_cause else ["Proses Stabil dan Presisi Sesuai Baseline"]
        }

# --- Verifikasi Eksekusi Simulasi Industri ---
if __name__ == "__main__":
    np.random.seed(42)
    # Domain penetrasi kedalaman press-fit (0 mm s.d. 30 mm)
    x_domain = np.linspace(0, 30, 60)
    
    # Nilai nominal proses: theta = [F_max=45 kN, F_min=2 kN, x_inflect=15 mm, scale=3.5 mm]
    nominal_theta = np.array([45.0, 2.0, 15.0, 3.5])
    noise_sigma = 0.6  # Residual noise standar deviasi (kN)

    # 1. Generate Fase I: 30 Profil Historis In-Control
    m_baseline = 30
    p1_x, p1_y = [], []
    for _ in range(m_baseline):
        # Variasi acak alami antar batch
        rand_theta = nominal_theta + np.random.multivariate_normal(
            mean=[0, 0, 0, 0],
            cov=np.diag([0.8**2, 0.1**2, 0.3**2, 0.1**2])
        )
        curve_clean = logistic_4p(x_domain, *rand_theta)
        curve_noisy = curve_clean + np.random.normal(0, noise_sigma, size=len(x_domain))
        p1_x.append(x_domain)
        p1_y.append(curve_noisy)

    monitor = NonlinearProfileMonitor(alpha=0.005)
    phase1_summary = monitor.fit_phase_1(p1_x, p1_y)
    print("=== BASELINE FASE I TERBENTUK ===")
    print(f"Theta Rata-rata  : {np.round(phase1_summary['theta_baseline'], 3)}")
    print(f"Sigma0 Kuadrat   : {phase1_summary['sigma0_squared']:.4f}")
    print(f"UCL T2           : {phase1_summary['ucl_t2']:.3f}")
    print(f"UCL Sigma Residual: {phase1_summary['ucl_sigma_sq']:.4f}\n")

    # 2. Pengujian Profil Normal Baru (Fase II In-Control)
    y_normal = logistic_4p(x_domain, 45.1, 2.05, 15.1, 3.48) + np.random.normal(0, noise_sigma, len(x_domain))
    res_normal = monitor.monitor_phase_2(x_domain, y_normal)
    print("=== HASIL UJI PROFIL NORMAL (IN-CONTROL) ===")
    print(f"Status      : {res_normal['status']}")
    print(f"T2 Stat     : {res_normal['t2_statistic']:.3f}")
    print(f"Diagnostics : {res_normal['diagnostics']}\n")

    # 3. Pengujian Profil Anomali Bentuk (Pergeseran Titik Penetrasi x_inflect akibat Misalignment Pin)
    y_faulty = logistic_4p(x_domain, 45.2, 2.0, 18.5, 3.5) + np.random.normal(0, noise_sigma, len(x_domain))
    res_faulty = monitor.monitor_phase_2(x_domain, y_faulty)
    print("=== HASIL UJI PROFIL DEVIASI MISALIGNMENT (OUT-OF-CONTROL) ===")
    print(f"Status      : {res_faulty['status']}")
    print(f"T2 Stat     : {res_faulty['t2_statistic']:.3f} (UCL = {phase1_summary['ucl_t2']:.3f})")
    print(f"Diagnostics : {res_faulty['diagnostics']}")
```

---

## 5. Studi Kasus Industri: Operasi Press-Fit Pin Bushing Powertrain Otomotif

### 5.1 Deskripsi Kasus & Parameter Rekayasa

Pada lini perakitan transmisi otomatis otomotif, pin baja dikempa masuk (*press-fitted*) ke dalam rumah transmisi aluminium berkecepatan $5\text{ mm/s}$ hingga mencapai kedalaman $30\text{ mm}$. Sensor gaya (*load cell*) piezoelektrik dan LVDT mencatat kurva gaya vs. jarak ($F$ vs. $x$) dengan resolusi $0,5\text{ mm}$ (60 titik pengamatan per siklus).

```
+---------------------------------------------------------------------------------------------------+
|                        ANALISIS DEKOMPOSISI ANOMALI PROFIL PRESS-FIT                              |
+---------------------------------------------------------------------------------------------------+
|                                                                                                   |
|  Gejala Fisik Suku Cadang               Dampak Parameter 4PL             Status Statistik         |
|  ------------------------------------   ------------------------------   ------------------------ |
|  1. Toleransi Dimensi Lubang Terlalu    theta_1 (Asimtot Gaya Puncak)    T^2 melonjak > UCL       |
|     Sempit (Over-Interference)          naik dari 45 kN ke 62 kN         (Shape Defect)           |
|                                                                                                   |
|  2. Kemiringan Posisi Pin Saat Masuk    theta_3 (Engagement Midpoint)    T^2 melonjak > UCL       |
|     (Pin Angular Misalignment)          bergeser dari 15 mm ke 19 mm     (Phase Delay Defect)     |
|                                                                                                   |
|  3. Adanya Geram Logam / Kontaminan     sigma^2 (Varians Residual)       Sigma^2 melonjak > UCL   |
|     di Dinding Lubang (Galling)         naik dari 0,36 ke 2,45           (Local Jitter Alarm)     |
|                                                                                                   |
+---------------------------------------------------------------------------------------------------+
```

### 5.2 Strategi Root Cause Diagnosis: Dekomposisi Mason-Young-Tracy (MYT)

Ketika bagan kendali Fase II membunyikan alarm $T_k^2 > \text{UCL}$, tim *Quality Assurance* menguraikan kontribusi individual kuadratik parameter menggunakan dekomposisi ortogonal MYT:

$$T^2 = T_j^2 + T_{-j}^2 = \frac{(\widehat{\theta}_j - \theta_{0,j})^2}{s_{jj}} + (\widehat{\boldsymbol{\theta}}_{-j} - \boldsymbol{\theta}_{0,-j|\theta_j})^T \mathbf{S}_{-j|-j}^{-1} (\widehat{\boldsymbol{\theta}}_{-j} - \boldsymbol{\theta}_{0,-j|\theta_j})$$

Hal ini memungkinkan sistem otomatis memberikan rekomendasi langsung ke teknisi mesin CNC/Press:
- Jika kontributor dominan adalah $\theta_3 \rightarrow$ Lakukan kalibrasi posisi gripper lengan robotik (*pneumatic chuck alignment*).
- Jika kontributor dominan adalah $\sigma^2 \rightarrow$ Bersihkan sistem lubrikasi pendingin untuk membuang partikel gram sisa pemesinan.

---

## 6. Referensi Terverifikasi & Standar Industri

1. **Woodall, W. H., Spitzner, D. J., Montgomery, D. C., & Gupta, S. (2004)**. *Using Control Charts to Monitor Process and Product Quality Profiles*. Journal of Quality Technology, 36(3), 309–320. [DOI: 10.1080/00224065.2004.11980276](https://doi.org/10.1080/00224065.2004.11980276).
2. **Williams, J. D., Woodall, W. H., & Birch, J. B. (2007)**. *Statistical Monitoring of Nonlinear Product and Process Quality Profiles*. Quality and Reliability Engineering International, 23(8), 925–941. [DOI: 10.1002/qre.858](https://doi.org/10.1002/qre.858).
3. **Montgomery, D. C. (2019)**. *Introduction to Statistical Quality Control* (8th Edition). John Wiley & Sons, New York. ISBN: 978-1-119-39930-8.
4. **Colosimo, B. M., & Pacella, M. (2010)**. *A Comparison Study of Control Charts for Statistical Process Control of Functional Data*. International Journal of Production Research, 48(6), 1575–1601. [DOI: 10.1080/00207540802662888](https://doi.org/10.1080/00207540802662888).
5. **Noorossana, R., Saghaei, A., & Amiri, A. (2011)**. *Statistical Analysis of Profile Monitoring*. John Wiley & Sons, Hoboken, NJ. [DOI: 10.1002/9781118115800](https://doi.org/10.1002/9781118115800).
6. **ISO 7870-2:2023**. *Control charts — Part 2: Shewhart control charts and extensions for multivariate and functional data*. International Organization for Standardization, Geneva.
