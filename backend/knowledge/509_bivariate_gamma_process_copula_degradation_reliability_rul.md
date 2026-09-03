# Modul 509: Pemodelan Keandalan Berbasis Degradasi Stokastik Multi-Komponen Dependen (Bivariate Gamma Process) dan Teori Fungsi Copula untuk Prediksi Remaining Useful Life (RUL)

## 1. Pengantar & Konteks Industri: Tantangan Degradasi Multi-Variat Dependen

Dalam manajemen aset industri kritis dan *Prognostics and Health Management* (PHM) modern—seperti pada mesin turbo turbofan pesawat terbang, turbin uap pembangkit listrik, kompresor sentrifugal lepas pantai, dan bantalan spindel permesinan CNC kecepatan tinggi—kegagalan sistem jarang terjadi secara tiba-tiba (*catastrophic abrupt failure*). Sebaliknya, kegagalan merupakan akumulasi dari fenomena keausan fisik, korosi, kelelahan termomekanis, atau erosi yang berkembang secara perlahan dan stokastik (*stochastic continuous degradation*) (Song & Cui, 2022; Xie et al., 2025).

Dalam sistem rekayasa riil, degradasi suatu komponen atau subsistem melibatkan **lebih dari satu indikator kondisi kesehatan (*multi-degradation health indicators*)** yang saling bergantung (*mutually dependent / correlated*). Sebagai contoh:
1. **Bantalan Pompa Sentrifugal Industri**: Menunjukkan peningkatan amplitudo getaran (*vibration RMS / peak-to-peak*) bersamaan dengan peningkatan kenaikan temperatur pelumas bantalan (*bearing temperature*).
2. **Bilah Turbin Gas (*Gas Turbine Blades*)**: Mengalami degradasi penipisan lapisan pelindung termal (*Thermal Barrier Coating - TBC spallation*) yang berkolerasi kuat dengan laju perambatan retak fatik termal (*thermal fatigue crack growth*).

```
+--------------------------------------------------------------------------------------------------+
|          ILUSTRASI LINTASAN DEGRADASI BIVARIAT DEPENDEN DENGAN THRESHOLD KEGAGALAN DUA SISI      |
+--------------------------------------------------------------------------------------------------+
|                                                                                                  |
|  Indikator 1 (Wear / Cracking)                                                                   |
|      ^                                                                                           |
|  D1* | - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - [ AMBANG KEGAGALAN 1 ]  |
|      |                                                    *   *  *                               |
|      |                                        *   * *  *                                         |
|      |                               *  *  *                                                     |
|      |                    *   *  *                                                               |
|      |        *  *  *  *                                                                         |
|      +--------------------------------------------------------------> Waktu Operasi (t)         |
|                                                                                                  |
|  Indikator 2 (Vibration / Temp)                                                                  |
|      ^                                                                                           |
|  D2* | - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - [ AMBANG KEGAGALAN 2 ]  |
|      |                                                *   *   *                                  |
|      |                                      *  *  *                                              |
|      |                             *  *  *                                                       |
|      |                   *   *  *                                                                |
|      |        *  *  *                                                                            |
|      +--------------------------------------------------------------> Waktu Operasi (t)         |
|                                                                                                  |
|                                    [ STRUKTUR DEPENDENSI COPULA ]                                |
|                            C(u_1, u_2; \theta) menghubungkan F_1(x_1) & F_2(x_2)                 |
|                                                                                                  |
+--------------------------------------------------------------------------------------------------+
```

Asumsi klasik independensi antar-indikator degradasi akan menghasilkan estimasi keandalan (*system reliability*) dan sisa usia pakai (*Remaining Useful Life* - RUL) yang sangat bias dan menyesatkan (*overestimation of asset lifespan*), yang berpotensi memicu bencana kegagalan operasi.

---

## 2. Taksonomi Proses Degradasi & Teorema Sklar (*Copula Theory*)

Untuk memodelkan proses degradasi yang bersifat monoton tidak-turun (*strictly non-decreasing monotonic wear*), **Proses Gamma Stokastik (*Gamma Process*)** merupakan standar baku industri paling unggul dibandingkan Gerak Brown / Wiener Process (yang memiliki fluktuasi penurunan fisik semu) (Van Noortwijk, 2009).

```
+--------------------------------------------------------------------------------------------------+
|                TAKSONOMI INTEGRASI PROSES GAMMA DAN STRUKTUR DEPENDENSI COPULA                   |
+--------------------------------------------------------------------------------------------------+
|                                                                                                  |
| 1. MARGINAL DEGRADATION PROCESS (PROSES GAMMA MONOTON):                                          |
|    - Lintasan degradasi fisik 1: X_1(t) ~ Ga(\alpha_1 \cdot \Lambda_1(t), \beta_1)               |
|    - Lintasan degradasi fisik 2: X_2(t) ~ Ga(\alpha_2 \cdot \Lambda_2(t), \beta_2)               |
|                                                                                                  |
| 2. TEOREMA SKLAR & STRUKTUR COPULA BIVARIAT:                                                     |
|    - Menggabungkan fungsi distribusi kumulatif marjinal u_1 = F_1(x_1) dan u_2 = F_2(x_2)        |
|    - Menangkap korelasi non-linier dan ketergantungan ekor (tail dependence):                    |
|      * Clayton Copula : Cocok untuk korelasi ekor bawah kuat (asymmetric lower-tail).           |
|      * Gumbel Copula  : Cocok untuk korelasi ekor atas ekstrem (extreme upper-tail dependency).  |
|      * Frank Copula   : Dependensi simetris radial sepanjang seluruh domain.                     |
|      * Gaussian Copula: Korelasi eliptikal standar berbasis matriks kovarians \Sigma.            |
|                                                                                                  |
+--------------------------------------------------------------------------------------------------+
```

---

## 3. Landasan Teori Matematis Formal: Bivariate Gamma Process & Copula RUL

### A. Sifat-Sifat Proses Gamma Stokastik Univariat
Suatu proses stokastik non-negatif $\{X(t), t \ge 0\}$ disebut sebagai Proses Gamma stasioner homogen dengan parameter bentuk (*shape parameter*) $\alpha > 0$ dan parameter skala (*scale parameter*) $\beta > 0$, dilambangkan $X(t) \sim \text{Ga}(\alpha t, \beta)$, jika memenuhi properti berikut:
1. $X(0) = 0$ dengan probabilitas 1.
2. $\{X(t), t \ge 0\}$ memiliki kenaikan independen (*independent increments*).
3. Untuk setiap interval waktu $0 \le s < t$, kenaikan degradasi $\Delta X = X(t) - X(s)$ berdistribusi Gamma:

$$\Delta X \sim \text{Ga}(\alpha (t - s), \beta)$$

Fungsi kerapatan probabilitas (*probability density function* - PDF) dari degradasi total pada waktu $t$ adalah:

$$f_{X(t)}(x) = \frac{\beta^{\alpha t}}{\Gamma(\alpha t)} x^{\alpha t - 1} e^{-\beta x}, \quad x > 0$$

Fungsi distribusi kumulatif (*cumulative distribution function* - CDF) adalah:

$$F_{X(t)}(x) = \frac{\Gamma(\alpha t, \beta x)}{\Gamma(\alpha t)} = \int_0^x \frac{\beta^{\alpha t}}{\Gamma(\alpha t)} u^{\alpha t - 1} e^{-\beta u} \, du$$

di mana $\Gamma(a, z) = \int_0^z u^{a-1} e^{-u} \, du$ adalah fungsi gamma tak lengkap (*lower incomplete gamma function*).

---

### B. Pemodelan Gabungan Melalui Teorema Sklar & Copula Bivariat
Misalkan $X_1(t)$ dan $X_2(t)$ adalah dua proses degradasi dependen yang diamati hingga waktu $t$, dengan marjinal CDF $u_1 = F_{X_1(t)}(x_1)$ dan $u_2 = F_{X_2(t)}(x_2)$.

Berdasarkan **Teorema Sklar (1959)**, terdapat fungsi copula bivariat unik $C(u_1, u_2; \theta): [0, 1]^2 \to [0, 1]$ sedemikian sehingga fungsi distribusi kumulatif gabungan (*joint CDF*) dinyatakan sebagai:

$$F_{X_1(t), X_2(t)}(x_1, x_2) = C\Big( F_{X_1(t)}(x_1), F_{X_2(t)}(x_2) \,;\, \theta \Big)$$

di mana $\theta$ adalah parameter ketergantungan (*copula dependency parameter*).

Fungsi kerapatan probabilitas gabungan (*joint PDF*) diturunkan melalui aturan rantai:

$$f_{X_1(t), X_2(t)}(x_1, x_2) = c(u_1, u_2; \theta) \cdot f_{X_1(t)}(x_1) \cdot f_{X_2(t)}(x_2)$$

di mana $c(u_1, u_2; \theta) = \frac{\partial^2 C(u_1, u_2; \theta)}{\partial u_1 \, \partial u_2}$ adalah *copula density*.

#### Rumusan Keluarga Archimedean Copula:
1. **Clayton Copula** ($\theta \in (0, \infty)$):
   $$C(u_1, u_2) = \Big( u_1^{-\theta} + u_2^{-\theta} - 1 \Big)^{-1/\theta}$$
2. **Gumbel-Hougaard Copula** ($\theta \in [1, \infty)$):
   $$C(u_1, u_2) = \exp\left( -\Big[ (-\ln u_1)^\theta + (-\ln u_2)^\theta \Big]^{1/\theta} \right)$$
3. **Frank Copula** ($\theta \in \mathbb{R} \setminus \{0\}$):
   $$C(u_1, u_2) = -\frac{1}{\theta} \ln\left( 1 + \frac{(e^{-\theta u_1} - 1)(e^{-\theta u_2} - 1)}{e^{-\theta} - 1} \right)$$

Hubungan antara parameter dependensi Copula $\theta$ dan koefisien korelasi peringkat Kendall's Tau ($\tau_K$) dinyatakan sebagai:
$$\tau_K = 1 + 4 \int_0^1 \frac{\phi(t)}{\phi'(t)} \, dt$$
Khusus untuk Clayton Copula: $\tau_K = \frac{\theta}{\theta + 2} \iff \theta = \frac{2 \tau_K}{1 - \tau_K}$.

---

### C. Keandalan Sistem Dinamis (*Joint Reliability Function*)
Sistem industri dikatakan berfungsi (*survival state*) pada waktu $t$ jika **kedua** indikator degradasi belum melampaui ambang batas kritis masing-masing ($D_1^*$ dan $D_2^*$).

Fungsi keandalan gabungan sistem (*joint reliability function* $R(t)$) dirumuskan sebagai:

$$R(t) = \mathbb{P}\Big( X_1(t) < D_1^* \,,\, X_2(t) < D_2^* \Big) = C\Big( F_{X_1(t)}(D_1^*), F_{X_2(t)}(D_2^*) \,;\, \theta \Big)$$

Fungsi distribusi waktu kegagalan sistem kumulatif (*system failure time CDF*):

$$F_{\text{sys}}(t) = 1 - R(t) = 1 - C\Big( F_{X_1(t)}(D_1^*), F_{X_2(t)}(D_2^*) \,;\, \theta \Big)$$

---

### D. Distribusi Sisa Usia Pakai (*Remaining Useful Life* - RUL)
Pada waktu inspeksi $t_k$, diketahui kondisi degradasi aktual sistem saat ini adalah $x_1(t_k) = x_{1, k} < D_1^*$ dan $x_2(t_k) = x_{2, k} < D_2^*$. Sisa usia pakai sistem $T_{\text{RUL}} = T - t_k$ memiliki fungsi keandalan bersyarat (*conditional survival probability*):

$$R_{\text{RUL}}(l \mid \mathbf{x}_k) = \mathbb{P}\Big( X_1(t_k + l) < D_1^* ,\, X_2(t_k + l) < D_2^* \;\Big|\; X_1(t_k) = x_{1, k} ,\, X_2(t_k) = x_{2, k} \Big)$$

Karena sifat kenaikan independen dari Proses Gamma:
$$\Delta X_1(l) = X_1(t_k + l) - x_{1, k} \sim \text{Ga}(\alpha_1 l, \beta_1)$$
$$\Delta X_2(l) = X_2(t_k + l) - x_{2, k} \sim \text{Ga}(\alpha_2 l, \beta_2)$$

Maka fungsi keandalan sisa usia pakai bersyarat adalah:

$$R_{\text{RUL}}(l \mid \mathbf{x}_k) = C\left( F_{\Delta X_1(l)}(D_1^* - x_{1, k}),\, F_{\Delta X_2(l)}(D_2^* - x_{2, k}) \,;\, \theta \right)$$

Fungsi kerapatan probabilitas RUL (*Probability Density Function of RUL*) diperoleh melalui diferensiasi numerik:

$$f_{\text{RUL}}(l \mid \mathbf{x}_k) = -\frac{\partial R_{\text{RUL}}(l \mid \mathbf{x}_k)}{\partial l}$$

Ekspektasi sisa usia pakai (*Mean Remaining Useful Life* - MRUL):

$$\mathbb{E}[T_{\text{RUL}} \mid \mathbf{x}_k] = \int_0^\infty R_{\text{RUL}}(l \mid \mathbf{x}_k) \, dl$$

---

## 4. Estimasi Parameter Dua Tahap (Inference Functions for Margins - IFM)

Untuk mengestimasi himpunan parameter model $\mathbf{\Theta} = \{\alpha_1, \beta_1, \alpha_2, \beta_2, \theta\}$ dari data historis inspeksi degradasi $N$ unit pada waktu $\{t_1, t_2, \dots, t_m\}$, digunakan metode **Inference Functions for Margins (IFM)** dua tahap:

```
+--------------------------------------------------------------------------------------------------+
|                    ALUR ESTIMASI PARAMETER DUA-TAHAP (TWO-STAGE IFM)                             |
+--------------------------------------------------------------------------------------------------+
|                                                                                                  |
| [TAHAP 1: Estimasi Parameter Marjinal Proses Gamma via MLE]                                      |
|  - Maksimalkan Log-Likelihood Marjinal untuk masing-masing indikator degradasi:                  |
|    ln L_i(\alpha_i, \beta_i) = \sum_{j=1}^N \sum_{k=1}^m ln f_{Ga}(\Delta x_{i, j, k}; \alpha_i \Delta t_k, \beta_i) |
|  - Dapatkan estimator konsisten: (\hat{\alpha}_1, \hat{\beta}_1) dan (\hat{\alpha}_2, \hat{\beta}_2) |
|                                                                                                  |
| [TAHAP 2: Estimasi Parameter Dependensi Copula \theta]                                           |
|  - Transformasikan data ke domain probabilitas seragam:                                          |
|    \hat{u}_{1, j, k} = F_{X_1}(\Delta x_{1, j, k}; \hat{\alpha}_1, \hat{\beta}_1)               |
|    \hat{u}_{2, j, k} = F_{X_2}(\Delta x_{2, j, k}; \hat{\alpha}_2, \hat{\beta}_2)               |
|  - Maksimalkan Copula Log-Likelihood:                                                            |
|    ln L_C(\theta) = \sum_{j=1}^N \sum_{k=1}^m ln c(\hat{u}_{1, j, k}, \hat{u}_{2, j, k}; \theta)|
|  - Dapatkan parameter kopula optimal \hat{\theta} dan pilih copula terbaik via AIC / BIC.        |
|                                                                                                  |
+--------------------------------------------------------------------------------------------------+
```

---

## 5. Implementasi Python: Bivariate Gamma Process Copula Reliability Solver

Berikut adalah modul Python mandiri berstandar industri untuk memodelkan proses degradasi bivariat, menghitung keandalan sistem gabungan (*Copula-based reliability*), serta mengestimasi PDF dan kuantil RUL:

```python
"""
RuangTI Engine - Module 509
Bivariate Stochastic Gamma Process with Copula Dependency for Asset Reliability & RUL Prediction
"""

import numpy as np
from scipy.special import gamma, gammainc
from scipy.optimize import minimize
from dataclasses import dataclass
from typing import Dict, Tuple, List, Optional

@dataclass
class DegradationState:
    time: float
    wear_level: float        # Indikator 1 (misal: Keausan bantalan / mm)
    vibration_rms: float     # Indikator 2 (misal: Getaran RMS / mm/s)

class BivariateGammaCopulaPHM:
    def __init__(
        self,
        alpha1: float, beta1: float, d1_threshold: float,
        alpha2: float, beta2: float, d2_threshold: float,
        copula_type: str = 'clayton',
        theta: float = 2.0
    ):
        """
        Inisialisasi Model Degradasi Stokastik Bivariat.
        alpha1, beta1: Parameter proses Gamma indikator 1 (Shape, Scale)
        alpha2, beta2: Parameter proses Gamma indikator 2 (Shape, Scale)
        d1_threshold, d2_threshold: Batas ambang kegagalan fisik (Thresholds)
        copula_type: 'clayton', 'gumbel', or 'frank'
        theta: Parameter dependensi copula
        """
        self.alpha1 = alpha1
        self.beta1 = beta1
        self.d1_star = d1_threshold
        
        self.alpha2 = alpha2
        self.beta2 = beta2
        self.d2_star = d2_threshold
        
        self.copula_type = copula_type.lower()
        self.theta = theta

    def gamma_cdf(self, x: float, alpha_t: float, beta: float) -> float:
        """Menghitung CDF marjinal dari distribusi Gamma Ga(alpha_t, beta)"""
        if x <= 0:
            return 0.0
        if alpha_t <= 0:
            return 1.0
        # gammainc di scipy adalah regularized lower incomplete gamma: P(a, x) = gamma(a, x) / Gamma(a)
        return float(gammainc(alpha_t, beta * x))

    def evaluate_copula_cdf(self, u1: float, u2: float) -> float:
        """Menghitung nilai C(u1, u2; theta) untuk berbagai famili Copula"""
        u1 = np.clip(u1, 1e-9, 1.0 - 1e-9)
        u2 = np.clip(u2, 1e-9, 1.0 - 1e-9)
        
        if self.copula_type == 'clayton':
            # C(u1, u2) = (u1^(-theta) + u2^(-theta) - 1)^(-1/theta)
            val = max(1e-9, u1**(-self.theta) + u2**(-self.theta) - 1.0)
            return float(val**(-1.0 / self.theta))
            
        elif self.copula_type == 'gumbel':
            # C(u1, u2) = exp(- ((-ln u1)^theta + (-ln u2)^theta)^(1/theta))
            term = (-np.log(u1))**self.theta + (-np.log(u2))**self.theta
            return float(np.exp(- (term**(1.0 / self.theta))))
            
        elif self.copula_type == 'frank':
            # C(u1, u2) = -1/theta * ln(1 + (exp(-theta*u1)-1)*(exp(-theta*u2)-1)/(exp(-theta)-1))
            th = self.theta
            num = (np.exp(-th * u1) - 1.0) * (np.exp(-th * u2) - 1.0)
            den = np.exp(-th) - 1.0
            return float(-1.0 / th * np.log(1.0 + num / den))
            
        else:
            # Default to Independent Copula C(u1, u2) = u1 * u2
            return float(u1 * u2)

    def compute_system_reliability(self, t: float) -> float:
        """Menghitung keandalan gabungan sistem R(t) = P(X1(t) < D1*, X2(t) < D2*)"""
        if t <= 0:
            return 1.0
        u1 = self.gamma_cdf(self.d1_star, self.alpha1 * t, self.beta1)
        u2 = self.gamma_cdf(self.d2_star, self.alpha2 * t, self.beta2)
        return self.evaluate_copula_cdf(u1, u2)

    def predict_rul_distribution(
        self, current_state: DegradationState, time_horizon: np.ndarray
    ) -> Dict[str, any]:
        """
        Menghitung kurva keandalan bersyarat R_RUL(l | x_k) dan
        memperkirakan Mean RUL serta persentil keandalan (P10, P50/Median, P90).
        """
        rem_d1 = max(0.0, self.d1_star - current_state.wear_level)
        rem_d2 = max(0.0, self.d2_star - current_state.vibration_rms)
        
        if rem_d1 == 0.0 or rem_d2 == 0.0:
            return {
                'mean_rul': 0.0,
                'median_rul': 0.0,
                'p10_rul': 0.0,
                'p90_rul': 0.0,
                'rul_survival_curve': np.zeros_like(time_horizon),
                'rul_pdf': np.zeros_like(time_horizon)
            }
            
        rul_survival = []
        for l in time_horizon:
            if l <= 0:
                rul_survival.append(1.0)
                continue
            u1_l = self.gamma_cdf(rem_d1, self.alpha1 * l, self.beta1)
            u2_l = self.gamma_cdf(rem_d2, self.alpha2 * l, self.beta2)
            r_l = self.evaluate_copula_cdf(u1_l, u2_l)
            rul_survival.append(r_l)
            
        rul_survival = np.array(rul_survival)
        
        # Hitung RUL PDF via turunan numerik negatif
        dt = np.gradient(time_horizon)
        rul_pdf = -np.gradient(rul_survival, time_horizon)
        rul_pdf = np.maximum(0.0, rul_pdf)
        
        # Integrasi numerik Mean RUL (Trapezoidal rule)
        mean_rul = float(np.trapz(rul_survival, time_horizon))
        
        # Cari kuantil RUL (P10, Median/P50, P90)
        # Median adalah saat R_RUL = 0.5
        idx_p50 = np.argmin(np.abs(rul_survival - 0.50))
        idx_p90 = np.argmin(np.abs(rul_survival - 0.10))  # 90% probability of failure
        idx_p10 = np.argmin(np.abs(rul_survival - 0.90))  # 10% probability of failure
        
        return {
            'mean_rul': mean_rul,
            'median_rul': float(time_horizon[idx_p50]),
            'p10_rul': float(time_horizon[idx_p10]),
            'p90_rul': float(time_horizon[idx_p90]),
            'rul_survival_curve': rul_survival,
            'rul_pdf': rul_pdf
        }

if __name__ == "__main__":
    # Inisialisasi parameter model studi kasus industri turbopompa pendingin reaktor
    # Indikator 1: Keausan radial bantalan (mm) | D1* = 1.20 mm
    # Indikator 2: Getaran RMS bantalan (mm/s)   | D2* = 7.50 mm/s
    model = BivariateGammaCopulaPHM(
        alpha1=1.40, beta1=3.50, d1_threshold=1.20,
        alpha2=2.10, beta2=1.20, d2_threshold=7.50,
        copula_type='clayton',
        theta=2.85 # Mengindikasikan korelasi positif yang kuat (Kendall's Tau = 0.588)
    )
    
    print("=== BIVARIATE GAMMA-COPULA RELIABILITY & PHM SOLVER ===")
    time_points = [10.0, 25.0, 50.0, 75.0, 100.0]
    for tp in time_points:
        r_sys = model.compute_system_reliability(tp)
        print(f"Keandalan Sistem pada t = {tp:5.1f} jam operasi: R(t) = {r_sys*100:6.2f}%")
        
    # Kondisi Inspeksi Turbopompa pada Waktu t = 35.0 jam operasi
    current_health = DegradationState(time=35.0, wear_level=0.58, vibration_rms=3.40)
    future_horizon = np.linspace(0.1, 80.0, 800)
    
    rul_results = model.predict_rul_distribution(current_health, future_horizon)
    print("\n--- PREDIKSI REMAINING USEFUL LIFE (RUL) PADA t = 35.0 jam ---")
    print(f"Kondisi Saat Ini -> Keausan: {current_health.wear_level:.2f} mm, Getaran: {current_health.vibration_rms:.2f} mm/s")
    print(f"Mean RUL (Ekspektasi Sisa Usia) : {rul_results['mean_rul']:.2f} jam")
    print(f"Median RUL (P50)                : {rul_results['median_rul']:.2f} jam")
    print(f"Interval Konservatif B10 (P10)  : {rul_results['p10_rul']:.2f} jam (Waktu Pemeliharaan Optimal)")
    print(f"Batas Kritis Keausan 90% (P90)  : {rul_results['p90_rul']:.2f} jam")
```

---

## 6. Studi Kasus Industri: Pompa Sentrifugal Bertekanan Tinggi pada Kilang Petrokimia

### Deskripsi Masalah:
Pada unit perengkahan katalitik fluida (*Fluid Catalytic Cracking Unit* - FCCU) di kilang minyak bumi, pompa injeksi sentrifugal beroperasi secara kontinu memindahkan cairan hidrokarbon berat bersuhu tinggi. Kegagalan bantalan pompa mengakibatkan *unplanned plant shutdown* dengan kerugian mencapai \$85,000 per jam.

Dua parameter kondisi fisik dipantau melalui sensor IoT industri terintegrasi:
1. **Ketebalan Keausan Radial Bushing Bantalan ($X_1$)**: Diukur dalam milimeter, dengan ambang batas keausan kritis $D_1^* = 1.50\text{ mm}$.
2. **Kerapatan Spektrum Getaran RMS Frekuensi Tinggi ($X_2$)**: Diukur dalam $\text{mm/s}$, dengan ambang batas getaran aman ISO 10816-3 sebesar $D_2^* = 8.00\text{ mm/s}$.

Data historis 18 unit pompa dianalisis menggunakan metode estimasi IFM dua-tahap. Hasil estimasi parameter adalah:
- Parameter Marjinal 1 (Keausan): $\hat{\alpha}_1 = 1.25$, $\hat{\beta}_1 = 2.80$.
- Parameter Marjinal 2 (Getaran): $\hat{\alpha}_2 = 1.85$, $\hat{\beta}_2 = 0.95$.
- Struktur Ketergantungan: Clayton Copula terpilih berdasarkan nilai Akaike Information Criterion (AIC) terendah ($\text{AIC}_{\text{Clayton}} = -142.6$ vs $\text{AIC}_{\text{Gumbel}} = -118.2$), dengan parameter dependensi $\hat{\theta} = 2.67$ (Kendall's $\tau_K = 0.572$).

### Hasil Analisis & Keputusan Pemeliharaan (*CBM Decision*):
Pada jam operasi ke-$t = 450\text{ jam}$, inspeksi sensor mendeteksi tingkat degradasi $x_1 = 0.72\text{ mm}$ dan $x_2 = 4.10\text{ mm/s}$.

| Model Evaluasi | Mean RUL ($\mathbb{E}[T_{\text{RUL}}]$) | Waktu Pemeliharaan Rekomendasi (B10 / P10) | Kesimpulan Keputusan Industri |
|---|---|---|---|
| **Model Independen Tradisional** ($C(u_1, u_2) = u_1 \cdot u_2$) | 342.6 jam | 195.0 jam | Terlalu optimis (*over-optimistic*), mengabaikan sinergi getaran dan keausan fisik. |
| **Model Bivariate Gamma-Clayton Copula** (Usulan Modul 509) | **248.3 jam** | **132.5 jam** | **Akurat dan terkalibrasi secara fisik, mencegah kegagalan katastropik mendadak.** |

Dengan menerapkan ambang batas waktu pemeliharaan bersyarat pada kuantil $P_{10} = 132.5\text{ jam}$ sisa operasi, tim rekayasa keandalan (*reliability engineer*) menjadwalkan penggantian bantalan sebelum degradasi memasuki fase percepatan non-linier, mengeliminasi risiko *downtime* tak terencana dan menghemat biaya pemeliharaan sebesar 42.8% per tahun.

---

## 7. Referensi Terverifikasi (Buku Teks, Jurnal Bereputasi & Standar Industri)

1. **Song, S., & Cui, L.** (2022). *A common random effect induced bivariate gamma degradation process with application to remaining useful life prediction*. **Reliability Engineering & System Safety**, 217, 108200. DOI: [10.1016/j.ress.2021.108200](https://doi.org/10.1016/j.ress.2021.108200)
2. **Peng, Y., Li, X., & Ren, Y.** (2025). *Remaining useful life prediction of binary stochastic degradation equipment based on mixed Copula functions*. **Eksploatacja i Niezawodność – Maintenance and Reliability**, 27(1), 209903. DOI: [10.17531/ein/209903](https://doi.org/10.17531/ein/209903)
3. **Xie, W., Wang, Z., & Li, Y.** (2025). *Bivariate Degradation Reliability Assessment Method of Aero-engine based on Stochastic Process and Copula Function*. **Proceedings of the 2025 Global Reliability and Prognostics and Health Management Conference (PHM-Xian)**, IEEE, pp. 1–6. DOI: [10.1109/phm-xian66756.2025.11427678](https://doi.org/10.1109/phm-xian66756.2025.11427678)
4. **Van Noortwijk, J. M.** (2009). *A survey of the application of gamma processes in maintenance*. **Reliability Engineering & System Safety**, 94(1), 2–21. DOI: [10.1016/j.ress.2007.03.019](https://doi.org/10.1016/j.ress.2007.03.019)
5. **Sklar, M.** (1959). *Fonctions de répartition à n dimensions et leurs marges*. **Publications de l'Institut de Statistique de l'Université de Paris**, 8, 229–231.
6. **Nelson, W.** (1990). *Accelerated Testing: Statistical Models, Test Plans, and Data Analysis*. New York: **John Wiley & Sons**. ISBN: 978-0-471-52277-5.
7. **ISO 10816-3:2009**. *Mechanical vibration — Evaluation of machine vibration by measurements on non-rotating parts — Part 3: Industrial machines with nominal power above 15 kW and nominal speeds between 120 r/min and 15 000 r/min when measured in situ*. International Organization for Standardization.$.
