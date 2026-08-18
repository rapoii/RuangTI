# Module 156: Profile Monitoring in SPC (Linear & Non-Linear Profiles)

## 1. Conceptual Foundation

Traditional Shewhart, EWMA, and CUSUM control charts are designed for **univariate scalar measurements** (e.g., diameter, temperature, force). However, modern manufacturing increasingly collects **functional profiles** — continuous or high-dimensional data streams that represent the shape, trajectory, or waveform of a process output over time or space. Examples include:

- **Shape profiles**: Surface roughness contours, weld bead geometry, tire tread patterns
- **Trajectory profiles**: Robot arm paths, CNC tool paths, vehicle trajectories
- **Waveform profiles**: Vibration signatures, acoustic emissions, force signals
- **Multivariate profiles**: Simultaneous monitoring of multiple channels (e.g., multi-axis accelerometer)

These profiles carry **functional information** — the entire curve is the observation unit, not individual points. Standard point-wise control charts lose critical information about **profile variation** (parallel shift, slope change, curvature, dispersion). Profile monitoring treats the **entire profile** as the data unit and applies statistical methods to detect changes in profile characteristics (Woodall et al., 2004; Noorossana et al., 2010).

### 1.1 Why Traditional SPC Fails on Profiles

| Limitation of Point-wise Charts | Consequence for Profile Data |
|-------------------------------|------------------------------|
| Ignores shape information | Misses systematic profile shifts (e.g., bowed vs. straight weld bead) |
| Assumes i.i.d. points | Violated by spatial/temporal correlation within profile |
| Single-point signals | Cannot detect phase shifts or scale changes in waveform |
| Requires point-wise calibration | Infeasible for high-resolution sensors (>1000 points) |

---

## 2. Mathematical Framework

### 2.1 Functional Data Representation

A profile is treated as a **functional observation** $Y(t)$, $t \in \mathcal{T}$:

$$
Y(t) = \mu(t) + \sigma(t) \cdot Z(t)
$$

Where:
- $\mu(t)$ = mean function (target profile)
- $\sigma(t)$ = standard deviation function (dispersion)
- $Z(t) \sim$ some random process (often assumed Gaussian)

### 2.2 Linear Profile Model

For straight-line profiles (most common):

$$
Y_i(t) = \beta_0 + \beta_1 t + \epsilon_i(t)
$$

Where $\epsilon_i(t)$ is a stochastic process with covariance structure $\text{Cov}(\epsilon(t),\epsilon(s)) = \sigma^2 \rho(t-s)$.

**Key parameters to monitor:**

1. **Intercept shift**: $\Delta\beta_0 = \beta_0 - \beta_0^0$
2. **Slope shift**: $\Delta\beta_1 = \beta_1 - \beta_1^0$
3. **Dispersion change**: $\Delta\sigma$

### 2.3 Non-Linear Profile Model

$$
Y_i(t) = \mu(t; \boldsymbol{\theta}) + \epsilon_i(t)
$$

Where $\mu(t; \boldsymbol{\theta})$ is a non-linear function parameterized by $\boldsymbol{\theta}$. Common forms:

- Polynomial: $\mu(t) = \beta_0 + \beta_1 t + \beta_2 t^2 + \dots$
- Logistic: $\mu(t) = \frac{A}{1 + e^{-k(t-t_0)}}$
- Gaussian: $\mu(t) = A e^{-(t-\mu)^2/(2\sigma^2)}$
- Fourier series: $\mu(t) = a_0 + \sum_{k=1}^{K} [a_k \cos(k\omega t) + b_k \sin(k\omega t)]$

### 2.4 Principal Component Analysis (PCA) for Profile Monitoring

**Karhunen–Loève expansion**:

$$
Y_i(t) = \mu(t) + \sum_{k=1}^{K} \xi_{ik} \phi_k(t) + \epsilon_i(t)
$$

Where:
- $\phi_k(t)$ = eigenfunctions (orthogonal basis)
- $\xi_{ik}$ = principal component scores (coefficients)

**T² chart on PC scores**:

$$
T^2 = \mathbf{\xi}^\top \mathbf{\Lambda}^{-1} \mathbf{\xi}
$$

Where $\mathbf{\Lambda} = \text{diag}(\lambda_1, \lambda_2, \dots, \lambda_K)$ and $\lambda_k$ = eigenvalues. UCL = $\chi^2_{K,1-\alpha}$.

### 2.5 Functional ANOVA (FANOVA)

Decompose profile variation into **between-group** and **within-group** components:

$$
SS_{total} = \int_{\mathcal{T}} \left[ Y(t) - \bar{Y}(t) \right]^2 dt
$$

$$
SS_{between} = \int_{\mathcal{T}} \left[ \bar{Y}_j(t) - \bar{Y}(t) \right]^2 dt
$$

$$
SS_{within} = \int_{\mathcal{T}} \left[ Y_i(t) - \bar{Y}_j(t) \right]^2 dt
$$

**F-statistic**:

$$
F = \frac{SS_{between} / (g-1)}{SS_{within} / (n-g)}
$$

Compare against F-distribution with appropriate degrees of freedom.

---

## 3. Control Charting Methods for Profiles

### 3.1 Phase I: Establishing Control Limits

1. **Collect reference samples**: Minimum $m = 20–30$ complete profiles under stable conditions
2. **Smooth profiles**: Kernel smoothing or splines to reduce measurement noise
3. **Basis expansion**: Choose basis (wavelets, splines, Fourier) or use raw points
4. **PCA decomposition**: Compute eigenfunctions and PC scores
5. **Set control limits**:
   - **T² chart**: UCL = $\chi^2_{K,0.997}$ (or bootstrap)
   - **Functional EWMA**: $\lambda = 0.1–0.2$, $L = 2.7–3.0$
   - **FANOVA**: Compare between-group variation to within-group

### 3.2 Phase II: Online Monitoring

For each new profile $Y_{new}(t)$:

1. **Project onto learned basis**: Compute $\hat{\xi}_k = \int Y_{new}(t) \phi_k(t) dt$
2. **Compute test statistic**: $T^2_{new}$ or $F_{new}$
3. **Signal if exceeds UCL**:
   - **Type I error**: False positive (profile change detected when none)
   - **Type II error**: Miss (true shift undetected)
   - **Average Run Length (ARL)**:

$$
ARL_0 = \frac{1}{\alpha}, \quad ARL_1 = \frac{1}{\beta}
$$

---

## 4. Recent Advances & Extensions (2023–2026)

- **Deep Learning Functional Monitoring**: Zhang et al. (2024, *Journal of Manufacturing Systems*) use autoencoder latent spaces for non-linear profiles; outperforms PCA by 30% in small-shift detection.
- **Bayesian Profile Monitoring**: Wang & Chen (2025) introduce hierarchical Bayesian models that update profile parameters online, providing credible intervals instead of fixed limits.
- **Multivariate Functional Profiles**: Li et al. (2023) extend to simultaneous monitoring of multiple profile channels using joint FANOVA on vector-valued functions.
- **Real-Time Streaming**: Zhang & Liu (2026) develop recursive PCA updates for online profile monitoring without storing all historical profiles.
- **Functional CUSUM**: Noorossana et al. (2023) propose cumulative sum charts on functional residuals, sensitive to small persistent shifts.

---

## 5. Key Takeaways

- **Profile monitoring is fundamentally different** from point-wise SPC; treat the entire curve as the unit of variation
- **PCA on functional data** provides optimal basis representation; eigenfunctions capture dominant modes of profile variation
- **T² chart on PC scores** is the most common and statistically powerful method for linear profiles
- **Functional ANOVA** directly tests for systematic profile differences between groups
- **Deep learning** is increasingly replacing PCA for highly non-linear profiles (e.g., image-like surface scans)
- **Online implementation** requires efficient basis projection; avoid recomputing full SVD on every new observation
- **ARL tradeoffs**: Higher sensitivity to small shifts ($\alpha$ small) increases false alarms; balanced ARL₀≈200–370 recommended
- **Validation**: Always compare functional charts against domain-expert knowledge; statistical significance alone is insufficient

## References

1. Woodall, W. H., et al. (2004). *Statistical Monitoring of Profile Data*. Journal of Quality Technology, 36(3), 363–381.
2. Noorossana, R., et al. (2010). *Statistical Analysis of Profile Monitoring*. Wiley.
3. Zhang, Y., et al. (2024). Deep functional data monitoring for additive manufacturing quality control. *Journal of Manufacturing Systems*, 78, 215–228.
4. Wang, L., & Chen, X. (2025). Bayesian online profile monitoring using functional data analysis. *Technometrics*, 67(1), 112–125.
5. Li, Z., et al. (2023). Multivariate functional statistical process control for multi-channel sensor data. *IEEE Transactions on Instrumentation and Measurement*, 72, 1–12.
6. Noorossana, R., et al. (2023). Functional CUSUM charts for profile monitoring. *Quality and Reliability Engineering International*, 39(4), 1456–1472.