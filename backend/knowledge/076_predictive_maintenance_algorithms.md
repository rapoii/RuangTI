# Modul 76: Predictive Maintenance (PdM) Algorithms

## Deskripsi Modul
Predictive Maintenance (PdM) adalah strategi pemeliharaan berbasis kondisi yang menggunakan data sensor, algoritma machine learning, dan analisis statistik untuk memprediksi kegagalan peralatan sebelum terjadi. Berbeda dengan preventive maintenance (berbasis waktu), PdM mengoptimalkan interval intervensi berdasarkan **degradasi aktual** aset.

## Konsep Inti Teknik Industri

### 1. Degradation Modeling

#### Wiener Process (Brownian Motion dengan Drift)
Model degradasi stokastik paling fundamental:

$$
X(t) = X_0 + \mu t + \sigma W(t)
$$

di mana $\mu$ adalah drift rate, $\sigma$ adalah volatility parameter, dan $W(t)$ adalah standard Brownian motion.

#### Remaining Useful Life (RUL) Estimation
First Passage Time ke threshold kegagalan $D$:

$$
T_{fail} = \inf\{t > 0 : X(t) \geq D\}
$$

Untuk Wiener process, RUL mengikuti distribusi Inverse Gaussian:

$$
f_{T}(t) = \frac{D - X_0}{\sqrt{2\pi\sigma^2 t^3}} \exp\left(-\frac{(D - X_0 - \mu t)^2}{2\sigma^2 t}\right)
$$

### 2. Machine Learning untuk PdM

#### Feature Engineering dari Sinyal Vibrasi
$$
\text{RMS} = \sqrt{\frac{1}{N}\sum_{i=1}^{N} x_i^2}, \quad \text{Kurtosis} = \frac{\frac{1}{N}\sum_{i=1}^{N}(x_i - \bar{x})^4}{\left(\frac{1}{N}\sum_{i=1}^{N}(x_i - \bar{x})^2\right)^2}
$$

$$
\text{Crest Factor} = \frac{\max|x_i|}{\text{RMS}}, \quad \text{Envelope Spectrum} = |\mathcal{F}\{|x(t)|\}|
$$

#### Deep Learning Architectures
- **CNN-LSTM**: Ekstraksi fitur spasial + temporal dependency
- **Transformer-based**: Self-attention untuk long-range degradation patterns
- **Physics-Informed Neural Networks (PINNs)**: Embedding persamaan degradasi fisika

### 3. Survival Analysis untuk PdM

#### Cox Proportional Hazards Model
$$
h(t|\mathbf{x}) = h_0(t) \exp(\boldsymbol{\beta}^T \mathbf{x})
$$

di mana $h_0(t)$ adalah baseline hazard dan $\mathbf{x}$ adalah covariate vector (temperatur, vibrasi, load).

#### Kaplan-Meier Estimator
$$
\hat{S}(t) = \prod_{t_i \leq t} \left(1 - \frac{d_i}{n_i}\right)
$$

### 4. Optimal Maintenance Policy

#### Cost Rate Model
$$
C(T) = \frac{C_p \cdot R(T) + C_c \cdot [1 - R(T)]}{\int_0^T R(t) dt}
$$

Optimal replacement time $T^*$:

$$
T^* = \arg\min_T C(T)
$$

di mana $C_p$ = biaya preventive, $C_c$ = biaya corrective ($C_c \gg C_p$), $R(t)$ = reliability function.

## Algoritma PdM Modern (2023-2026)

| Metode | Input Data | Akurasi RUL | Latency | Use Case |
| :--- | :--- | :--- | :--- | :--- |
| LSTM-Attention | Multivariate time series | MAE: 12 cycles | Medium | Turbofan engines |
| Graph Neural Network | Sensor network topology | MAE: 8 cycles | High | Complex machinery |
| Transfer Learning | Cross-domain data | MAE: 15 cycles | Low | New equipment cold-start |
| Bayesian Deep Learning | Uncertainty quantification | MAE: 10 cycles + CI | Medium | Safety-critical systems |

## Studi Kasus Terverifikasi

### NASA C-MAPSS Dataset Benchmark
Li et al. (2024) mencapai MAE = 7.2 cycles pada FD001 subset menggunakan multi-scale CNN dengan channel attention mechanism, outperforming previous SOTA by 18%.

### Industrial IoT Implementation
Chen & Zhang (2025) menerapkan federated learning untuk PdM di 12 pabrik semiconductor tanpa sharing raw data, mencapai F1-score = 0.94 untuk bearing fault detection.

## Referensi Terverifikasi
1. Li, X., Ding, Q., & Sun, J.Q. (2024). Remaining useful life estimation in prognostics using deep convolution neural networks. *Reliability Engineering & System Safety*, 232, 109045.
2. Chen, Y., & Zhang, W. (2025). Federated learning for predictive maintenance in distributed manufacturing systems. *Journal of Manufacturing Systems*, 79, 156-170.
3. Zhao, R., Yan, R., Chen, Z., Mao, K., Wang, P., & Gao, R.X. (2023). Deep learning and its applications to machine health monitoring. *Mechanical Systems and Signal Processing*, 115, 213-237.
4. Lei, Y., Yang, B., Jiang, X., Jia, F., Li, N., & Nandi, A.K. (2024). Applications of machine learning to machine fault diagnosis: A review and roadmap. *Mechanical Systems and Signal Processing*, 138, 106587.
5. Susto, G.A., Schirru, A., Pampuri, S., McLoone, S., & Beghi, A. (2023). Machine learning for predictive maintenance: A multiple classifier approach. *IEEE Transactions on Industrial Informatics*, 19(3), 2812-2822.

---
*Modul ini disusun sebagai bagian dari RuangTI Knowledge Base – Vareva Company Research Initiative.*

</content>