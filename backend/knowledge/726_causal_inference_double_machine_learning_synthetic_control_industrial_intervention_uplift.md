# Modul 726: Causal Inference — Double Machine Learning & Synthetic Control untuk Evaluasi Intervensi Industri, Lean Six Sigma, Otomasi, dan Uplift Modeling (Chernozhukov, Abadie, Rubin, Imbens)

**Nomor Modul:** [726]  
**Domain Keahlian:** Causal Inference, Econometrics & Industrial Program Evaluation (*Double Machine Learning, Synthetic Control, Propensity Score, Uplift Modeling — Chernozhukov, Abadie, Rubin, Imbens, Rosenbaum*).  
**Sumber Referensi Utama:** *Chernozhukov et al. — Double/Debiased Machine Learning, The Econometrics Journal 21(1), 2018*, *Abadie, Diamond & Hainmueller — Synthetic Control Methods, JASA 105(490), 2010; JEL 2021*, *Imbens & Rubin — Causal Inference for Statistics, Social, and Biomedical Sciences (Cambridge, 2015)*, *Rosenbaum & Rubin — The Central Role of the Propensity Score, Biometrika 70(1), 1983*, *Athey & Imbens — Generalized Synthetic Control, JASA 2023*.

---

## 1. Pengantar & Konteks Industri: Dari Korelasi ke Kausalitas di Lantai Pabrik

Setiap manajer industri pernah mengklaim: "Setelah implementasi Lean Six Sigma, defect turun 32% — program berhasil!" Atau: "Setelah automasi AGV, throughput naik 18%." Namun klaim tersebut hampir selalu **korelasional, bukan kausal**. Defect mungkin turun karena *demand* turun (volume rendah → inspeksi lebih teliti), atau throughput naik karena *seasonality* — bukan karena intervensi. Tanpa inferensi kausal yang rigor, investasi miliaran rupiah dievaluasi dengan *before-after* naif yang bias.

Tiga pertanyaan kausal paling sering di industri:

1. **ATE (Average Treatment Effect):** Berapa efek rata-rata Lean Six Sigma terhadap defect rate di seluruh plant? — untuk *business case* program.
2. **ATT & Heterogenitas (CATE/Uplift):** Plant/line mana yang paling diuntungkan automasi? — untuk *targeted rollout* dan *personalized assignment*.
3. **Synthetic Control:** Bagaimana mengukur dampak intervensi pada **satu unit** (satu pabrik, satu gudang) tanpa kelompok kontrol paralel — mis. pilot Industry 4.0 di Plant Karawang vs plant lain yang tidak sebanding?

Metode klasik — regresi OLS dengan kontrol, Difference-in-Differences (DiD) — gagal ketika **confounder berdimensi tinggi** (ratusan kovariat MES: OEE historis, mix produk, skill operator, supplier) dan **relasi nonlinear**. **Double Machine Learning (DML)** (Chernozhukov et al., 2018) memecahkan ini dengan menggabungkan ML untuk *nuisance functions* namun tetap menghasilkan estimasi kausal $\sqrt{n}$-konsisten dan interval kepercayaan valid. **Synthetic Control Method (SCM)** (Abadie et al., 2010) memecahkan problem satu unit terintervensi dengan membangun "kembaran sintetis" dari *donor pool*.

Modul ini membangun fondasi matematis kedua metode, implementasi Python nyata, dan studi kasus evaluasi program Lean Six Sigma + automasi.

---

## 2. Landasan Teoretis & Formulasi Matematis Formal

### 2.1 Potential Outcomes Framework (Rubin, 1974)

Untuk setiap unit $i$, definisikan **potential outcomes** $Y_i(1)$ (jika diberi treatment) dan $Y_i(0)$ (jika tidak). Efek kausal individu $\tau_i = Y_i(1)-Y_i(0)$ tidak pernah teramati simultan (**fundamental problem of causal inference**). Target:

$$
\tau_{ATE} = \mathbb{E}[Y(1)-Y(0)], \quad \tau_{ATT} = \mathbb{E}[Y(1)-Y(0)\mid D=1], \quad \tau_{CATE}(x) = \mathbb{E}[Y(1)-Y(0)\mid X=x]
$$

di mana $D \in \{0,1\}$ adalah indikator treatment, $X$ kovariat. Asumsi identifikasi (Imbens & Rubin):

1. **SUTVA:** $Y_i = D_i Y_i(1) + (1-D_i)Y_i(0)$ (tidak ada interferensi antar unit).
2. **Unconfoundedness (ignorability):** $\{Y(1),Y(0)\} \perp D \mid X$.
3. **Overlap (positivity):** $0 < e(X) := \mathbb{P}(D=1\mid X) < 1$.

Di bawah asumsi ini, $\tau_{ATE}$ teridentifikasi dari data observasional.

### 2.2 Partially Linear Model & Double Machine Learning

Model semi-parametrik Chernozhukov et al. (2018):

$$
Y = \theta_0 D + g_0(X) + U, \quad \mathbb{E}[U\mid X,D]=0
$$

$$
D = m_0(X) + V, \quad \mathbb{E}[V\mid X]=0
$$

$\theta_0$ adalah **parameter kausal** (ATE jika model homogen), $g_0(X)$ dan $m_0(X)$ adalah *nuisance functions* berdimensi tinggi (nonlinear, 100+ kovariat). Estimasi naif — regresi $Y$ pada $D,X$ dengan ML — bias karena **regularization bias** dan **overfitting**.

**Neyman Orthogonality:** Skor yang ortogonal terhadap perturbasi nuisance:

$$
\psi(W;\theta,\eta) = \big(Y - g(X) - \theta(D - m(X))\big)(D - m(X))
$$

di mana $\eta=(g,m)$, $W=(Y,D,X)$. Momen $\mathbb{E}[\psi(W;\theta_0,\eta_0)]=0$ dan turunan Gateaux $\partial_\eta \mathbb{E}[\psi]\mid_{\eta_0}=0$ — sehingga error kecil pada $\hat{g},\hat{m}$ tidak *first-order* mempengaruhi $\hat{\theta}$.

**Cross-Fitting (K-fold):** Bagi data menjadi $K$ lipatan. Untuk lipatan $k$, latih $\hat{g}_{-k}, \hat{m}_{-k}$ pada $K-1$ lipatan lain (dengan ML apa pun: Random Forest, XGBoost, Lasso), lalu hitung residual pada lipatan $k$:

$$
\tilde{Y}_i = Y_i - \hat{g}_{-k}(X_i), \quad \tilde{D}_i = D_i - \hat{m}_{-k}(X_i), \quad i \in I_k
$$

Estimator DML:

$$
\hat{\theta}_{DML} = \frac{\sum_{k=1}^K \sum_{i \in I_k} \tilde{Y}_i \tilde{D}_i}{\sum_{k=1}^K \sum_{i \in I_k} \tilde{D}_i^2}
$$

**Teorema (Chernozhukov et al. 2018):** Jika $\|\hat{g}-g_0\|_{L_2}\cdot\|\hat{m}-m_0\|_{L_2}=o(n^{-1/2})$ dan $\|\hat{g}-g_0\|+\|\hat{m}-m_0\|=o(n^{-1/4})$, maka

$$
\sqrt{n}(\hat{\theta}_{DML} - \theta_0) \xrightarrow{d} \mathcal{N}(0, \sigma^2)
$$

dengan varians $\sigma^2 = \mathbb{E}[\psi^2]/\mathbb{E}[(D-m_0(X))^2]^2$ — memungkinkan **interval kepercayaan valid** meski nuisance diestimasi dengan ML.

Untuk **CATE / Uplift**: ganti $\theta_0$ dengan $\tau(x)$ via **R-learner** atau **Causal Forest** (Athey & Imbens), atau DML interaktif $Y = g_0(X) + \theta_0(X)D + U$.

### 2.3 Propensity Score & Doubly Robust

**Propensity score** $e(X)=\mathbb{P}(D=1\mid X)$ (Rosenbaum & Rubin, 1983) adalah *balancing score*: $X \perp D \mid e(X)$. Estimator **Inverse Propensity Weighting (IPW)** dan **Doubly Robust (DR)** / Augmented IPW:

$$
\hat{\tau}_{DR} = \frac{1}{n}\sum_{i=1}^n \left[ \hat{\mu}_1(X_i) - \hat{\mu}_0(X_i) + \frac{D_i(Y_i-\hat{\mu}_1(X_i))}{\hat{e}(X_i)} - \frac{(1-D_i)(Y_i-\hat{\mu}_0(X_i))}{1-\hat{e}(X_i)} \right]
$$

DR **konsisten jika salah satu** dari $\hat{\mu}$ atau $\hat{e}$ benar — *double robustness*.

### 2.4 Synthetic Control Method (SCM)

Untuk **satu unit terintervensi** ($j=1$) dan $J$ donor ($j=2,\dots,J+1$), amati $Y_{jt}$ untuk $t=1,\dots,T$ dengan intervensi pada $T_0+1$. SCM mencari bobot $\mathbf{w}=(w_2,\dots,w_{J+1})$ dengan $w_j \geq 0, \sum w_j=1$ sehingga

$$
\mathbf{w}^* = \arg\min_{\mathbf{w}} \left\| \mathbf{X}_1 - \sum_{j=2}^{J+1} w_j \mathbf{X}_j \right\|_{\mathbf{V}}^2 + \lambda\|\mathbf{w}\|_2^2
$$

di mana $\mathbf{X}_j$ adalah vektor prediktor pra-intervensi (rata-rata $Y$ pra, kovariat). Matriks $\mathbf{V}$ (diagonal positif) dipilih via *cross-validation* pra-periode. **Synthetic outcome**:

$$
\hat{Y}_{1t}^N = \sum_{j=2}^{J+1} w_j^* Y_{jt}, \quad t > T_0
$$

**Efek kausal** pada $t>T_0$:

$$
\hat{\tau}_{1t} = Y_{1t} - \hat{Y}_{1t}^N
$$

Inferensi via **placebo test** (Abadie et al. 2010): terapkan SCM pada setiap donor sebagai *fake treated*, bangun distribusi *placebo effects*, hitung $p$-value permutasi:

$$
p = \frac{1}{J}\sum_{j \neq 1} \mathbf{1}\left\{ \frac{\text{RMSPE}_{j,post}}{\text{RMSPE}_{j,pre}} \geq \frac{\text{RMSPE}_{1,post}}{\text{RMSPE}_{1,pre}} \right\}
$$

dengan $\text{RMSPE}_{pre}=\sqrt{\frac{1}{T_0}\sum_{t\leq T_0}(Y_{jt}-\hat{Y}_{jt}^N)^2}$.

---

## 3. Arsitektur Algoritma & Alur Data

```
+--------------------------------------------------------------------------------------------------+
|         CAUSAL INFERENCE PIPELINE — DML & SYNTHETIC CONTROL UNTUK EVALUASI INTERVENSI            |
+--------------------------------------------------------------------------------------------------+
|                                                                                                  |
|  [0] DATA OBSERVASIONAL (MES/ERP/HR)                                                             |
|      Kovariat X: OEE historis, mix produk, skill operator, supplier lead time, demand            |
|      Treatment D: Lean Six Sigma (1/0), Automasi AGV (1/0), Training (jam)                      |
|      Outcome Y: defect rate (%), throughput (unit/jam), biaya kualitas (Rp)                     |
|       |                                                                                          |
|       +---> [1A] DOUBLE MACHINE LEARNING (ATE/CATE)                                             |
|       |      |                                                                                  |
|       |      +-> Split K-fold (K=5)                                                             |
|       |      +-> Untuk tiap fold k:                                                            |
|       |      |    hat(g)_{-k} = ML(Y ~ X)  pada fold !=k  (RF/XGBoost)                        |
|       |      |    hat(m)_{-k} = ML(D ~ X)  pada fold !=k  (RF/Logit)                          |
|       |      |    Residual: tilde(Y)=Y - hat(g)(X), tilde(D)=D - hat(m)(X) pada fold k       |
|       |      +-> hat(theta)_DML = sum(tildeY*tildeD)/sum(tildeD^2)                             |
|       |      +-> SE & CI via var(psi)/n  |  CATE via Causal Forest / R-learner                |
|       |      +-> Output: ATE, CI 95%, CATE per segmen (uplift)                                |
|       |                                                                                          |
|       +---> [1B] SYNTHETIC CONTROL (Single Treated Unit)                                        |
|              |                                                                                  |
|              +-> Donor pool: J plant/gudang tanpa intervensi                                   |
|              +-> Optimasi bobot w* = argmin ||X1 - X0 w||_V + ridge                            |
|              +-> Synthetic path: hat(Y)_1t^N = sum w_j* Y_jt  (t > T0)                         |
|              +-> Effect: tau_t = Y_1t - hat(Y)_1t^N                                            |
|              +-> Placebo test: permutasi donor -> p-value                                      |
|       |                                                                                          |
|       v                                                                                          |
|  [2] DIAGNOSTIK & VALIDASI                                                                       |
|      - Overlap check: histogram propensity score hat(e)(X) per grup D                            |
|      - Balance check: SMD (standardized mean difference) < 0.1 setelah weighting                |
|      - Pre-treatment fit: RMSPE_pre SCM < 5% dari mean Y                                       |
|      - Sensitivity: Rosenbaum bounds, Oster delta untuk unobserved confounder                   |
|       |                                                                                          |
|       v                                                                                          |
|  [3] KEPUTUSAN INDUSTRI                                                                          |
|      - Go/No-Go rollout: ATE > hurdle rate (mis. defect turun > 2pp, p<0.05)                   |
|      - Targeted rollout: prioritaskan unit dengan CATE tertinggi (uplift top decile)            |
|      - ROI kausal: (ATE * volume * cost_per_defect - biaya_program) / biaya_program            |
|                                                                                                  |
+--------------------------------------------------------------------------------------------------+
```

---

## 4. Implementasi Komputasi: Python DML & Synthetic Control Engine

```python
"""
RuangTI - Industrial Engineering Knowledge Base
Modul 726: Causal Inference Engine — Double Machine Learning (DML) & Synthetic Control
Standar: Chernozhukov et al. 2018 (DML), Abadie et al. 2010 (SCM)
"""
import numpy as np
from sklearn.ensemble import RandomForestRegressor, RandomForestClassifier
from sklearn.linear_model import Ridge, LassoCV
from sklearn.model_selection import KFold
from scipy.optimize import minimize
import warnings
warnings.filterwarnings('ignore')

np.random.seed(42)

# ═══════════════════════════════════════════════════════════════════════
# BAGIAN A: DOUBLE MACHINE LEARNING (Partially Linear Model)
# ═══════════════════════════════════════════════════════════════════════

def simulate_industrial_obs(n=3000, p=10, true_ate=-2.5):
    """
    Simulasi observasional Lean Six Sigma:
    X: 10 kovariat (OEE hist, mix, skill, dsb) ~ N(0,1) + korelasi
    D: treatment ~ Bernoulli(sigmoid(X*beta)), confounded
    Y: defect_rate = theta*D + g(X) + noise, g(X) nonlinear
    true_ate = -2.5 pp (Lean menurunkan defect 2.5 pp)
    """
    X = np.random.randn(n, p)
    # propensity nonlinear
    logit = 0.4*X[:,0] + 0.3*X[:,1] - 0.2*X[:,2] + 0.15*X[:,0]*X[:,1]
    e = 1/(1+np.exp(-logit))
    e = np.clip(e, 0.1, 0.9)
    D = np.random.binomial(1, e)
    # g(X) nonlinear
    g = 8 + 1.2*X[:,0] + 0.8*X[:,1]**2 + 0.5*np.sin(3*X[:,2]) + 0.3*X[:,3]*X[:,4]
    Y = true_ate*D + g + np.random.normal(0, 1.2, n)
    return X, D, Y, true_ate

class DoubleML:
    """DML untuk Partially Linear Model — Chernozhukov et al. 2018"""
    def __init__(self, n_folds=5):
        self.n_folds = n_folds
        self.theta = None
        self.se = None
        self.ci = None

    def fit(self, X, D, Y):
        n = len(Y)
        kf = KFold(n_splits=self.n_folds, shuffle=True, random_state=42)
        # residual storage
        tilde_Y = np.zeros(n)
        tilde_D = np.zeros(n)

        for train_idx, test_idx in kf.split(X):
            X_tr, X_te = X[train_idx], X[test_idx]
            D_tr, D_te = D[train_idx], D[test_idx]
            Y_tr, Y_te = Y[train_idx], Y[test_idx]

            # nuisance g: E[Y|X]
            g_model = RandomForestRegressor(n_estimators=200, max_depth=8, random_state=42, n_jobs=-1)
            g_model.fit(X_tr, Y_tr)
            g_hat = g_model.predict(X_te)

            # nuisance m: E[D|X] (propensity)
            m_model = RandomForestRegressor(n_estimators=200, max_depth=8, random_state=42, n_jobs=-1)
            m_model.fit(X_tr, D_tr)
            m_hat = m_model.predict(X_te)
            m_hat = np.clip(m_hat, 0.05, 0.95)

            tilde_Y[test_idx] = Y_te - g_hat
            tilde_D[test_idx] = D_te - m_hat

        # DML estimator
        self.theta = np.sum(tilde_Y * tilde_D) / np.sum(tilde_D**2)
        # Neyman-orthogonal score variance
        psi = (tilde_Y - self.theta * tilde_D) * tilde_D
        # var = E[psi^2] / E[tildeD^2]^2 / n
        denom = np.mean(tilde_D**2)
        var = np.mean(psi**2) / (denom**2) / n
        self.se = np.sqrt(var)
        self.ci = (self.theta - 1.96*self.se, self.theta + 1.96*self.se)
        self.tilde_Y, self.tilde_D = tilde_Y, tilde_D
        return self

# ═══════════════════════════════════════════════════════════════════════
# BAGIAN B: SYNTHETIC CONTROL METHOD
# ═══════════════════════════════════════════════════════════════════════

def simulate_scm_data(J=15, T0=20, T1=10, true_effect=-3.0):
    """
    J donor + 1 treated, T0 pre + T1 post periods.
    Treated mendapat efek true_effect pada post-period.
    """
    T = T0 + T1
    # factor model: Y_jt = lambda_j * F_t + eps
    F = np.random.randn(T) * 1.5 + np.sin(np.arange(T)*0.3)*2
    lambdas = np.random.randn(J+1) * 0.8 + 1.0
    Y = np.zeros((J+1, T))
    for j in range(J+1):
        Y[j] = lambdas[j] * F + np.random.normal(0, 0.6, T) + 10
    # treatment effect pada unit 0 post
    Y[0, T0:] += true_effect + np.random.normal(0, 0.3, T1)
    return Y, T0, true_effect

class SyntheticControl:
    """SCM Abadie et al. 2010 — bobot simplex via optimasi"""
    def __init__(self, lambda_ridge=0.01):
        self.lambda_ridge = lambda_ridge
        self.w_star = None

    def fit(self, Y_donors_pre, y_treated_pre):
        """
        Y_donors_pre: (J, T0) donor outcomes pre
        y_treated_pre: (T0,) treated pre
        """
        J = Y_donors_pre.shape[0]
        # Optimasi: min ||y_treated - Y_donors^T w||^2 + lambda||w||^2  s.t. w>=0, sum w=1
        def objective(w):
            synth = Y_donors_pre.T @ w  # (T0,)
            mse = np.mean((y_treated_pre - synth)**2)
            return mse + self.lambda_ridge * np.sum(w**2)

        constraints = {'type': 'eq', 'fun': lambda w: np.sum(w) - 1}
        bounds = [(0, 1) for _ in range(J)]
        w0 = np.ones(J)/J
        res = minimize(objective, w0, method='SLSQP', bounds=bounds, constraints=constraints,
                       options={'maxiter': 500, 'ftol': 1e-9})
        self.w_star = res.x
        return self

    def predict(self, Y_donors_post):
        """Y_donors_post: (J, T1) -> synthetic (T1,)"""
        return Y_donors_post.T @ self.w_star

    def rmspe(self, y_true, y_synth):
        return np.sqrt(np.mean((y_true - y_synth)**2))

# ═══════════════════════════════════════════════════════════════════════
# DEMO EKSEKUSI
# ═══════════════════════════════════════════════════════════════════════
if __name__ == "__main__":
    print("="*78)
    print(" RUANGTI CAUSAL INFERENCE ENGINE — DML & Synthetic Control")
    print(" Chernozhukov et al. 2018 | Abadie et al. 2010 | Imbens & Rubin 2015")
    print("="*78)

    # ── DML Demo ──
    X, D, Y, true_ate = simulate_industrial_obs(n=3000, p=10, true_ate=-2.5)
    print(f"\n[DML] Simulasi Lean Six Sigma: n=3000, p=10, True ATE={true_ate:.2f} pp")
    print(f"  Treatment rate: {D.mean():.1%} | Y mean: {Y.mean():.2f} | Confounding: E[Y|D=1]-E[Y|D=0]={Y[D==1].mean()-Y[D==0].mean():.2f} (naif, bias!)")

    # Naif OLS tanpa kontrol ML (bias)
    naive_ate = Y[D==1].mean() - Y[D==0].mean()
    print(f"  Naive diff-in-means (bias): {naive_ate:.3f} (bias={naive_ate-true_ate:+.3f})")

    dml = DoubleML(n_folds=5)
    dml.fit(X, D, Y)
    print(f"  DML ATE  : {dml.theta:.3f}  SE={dml.se:.3f}  95%CI=[{dml.ci[0]:.3f}, {dml.ci[1]:.3f}]")
    print(f"  True ATE : {true_ate:.3f}  |  Error={abs(dml.theta-true_ate):.3f}  |  CI covers true? {dml.ci[0]<=true_ate<=dml.ci[1]}")

    # CATE heterogeneity: split by X0 median
    median_x0 = np.median(X[:,0])
    # CATE via subgroup DML
    for label, mask in [("X0 rendah", X[:,0] <= median_x0), ("X0 tinggi", X[:,0] > median_x0)]:
        sub_dml = DoubleML(n_folds=5)
        sub_dml.fit(X[mask], D[mask], Y[mask])
        print(f"    CATE {label}: {sub_dml.theta:.3f} (n={mask.sum()})")

    # ── SCM Demo ──
    Y_all, T0, true_eff = simulate_scm_data(J=15, T0=20, T1=10, true_effect=-3.0)
    y_treated = Y_all[0]
    Y_donors = Y_all[1:]
    scm = SyntheticControl(lambda_ridge=0.01)
    scm.fit(Y_donors[:, :T0], y_treated[:T0])
    y_synth_pre = Y_donors[:, :T0].T @ scm.w_star
    y_synth_post = scm.predict(Y_donors[:, T0:])
    rmspe_pre = scm.rmspe(y_treated[:T0], y_synth_pre)
    rmspe_post = scm.rmspe(y_treated[T0:], y_synth_post)
    att_est = np.mean(y_treated[T0:] - y_synth_post)
    print(f"\n[SCM] Pilot Industry 4.0 — 1 treated + 15 donor, T0={T0}, T1={10}, True ATT={true_eff:.2f}")
    print(f"  Bobot top-3 donor: {np.sort(scm.w_star)[-3:][::-1].round(3)} (sparsity: {(scm.w_star>0.01).sum()} donor aktif)")
    print(f"  RMSPE pre : {rmspe_pre:.3f}  RMSPE post: {rmspe_post:.3f}  Ratio: {rmspe_post/(rmspe_pre+1e-9):.2f}")
    print(f"  ATT est : {att_est:.3f} (true {true_eff:.2f}, error {abs(att_est-true_eff):.3f})")
    print(f"  Efek per periode post: {(y_treated[T0:] - y_synth_post).round(2).tolist()}")

    # Placebo test (ringkas)
    placebo_ratios = []
    for j in range(15):
        # leave-one donor as fake treated
        fake_treated = Y_donors[j]
        fake_donors = np.delete(Y_donors, j, axis=0)
        scm_p = SyntheticControl(lambda_ridge=0.01)
        scm_p.fit(fake_donors[:, :T0], fake_treated[:T0])
        pre_p = scm_p.rmspe(fake_treated[:T0], fake_donors[:, :T0].T @ scm_p.w_star)
        post_p = scm_p.rmspe(fake_treated[T0:], scm_p.predict(fake_donors[:, T0:]))
        placebo_ratios.append(post_p/(pre_p+1e-9))
    treated_ratio = rmspe_post/(rmspe_pre+1e-9)
    p_val = np.mean(np.array(placebo_ratios) >= treated_ratio)
    print(f"  Placebo test p-value: {p_val:.3f} ({sum(np.array(placebo_ratios)>=treated_ratio)}/15 placebo >= treated ratio)")

    print("="*78)
```
