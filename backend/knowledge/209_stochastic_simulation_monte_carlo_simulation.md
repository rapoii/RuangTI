# 209 - Stochastic Simulation: Monte Carlo Simulation

## Overview

Monte Carlo simulation is a computational technique that uses repeated random sampling to obtain numerical results for problems that are deterministic in principle but too complex to solve analytically. The method relies on the Law of Large Numbers and Central Limit Theorem to approximate expectations, probabilities, and integrals through empirical averages. Modern applications span financial engineering, physics, operations research, reliability analysis, and machine learning.

## Mathematical Foundations

### Estimation via Sampling

For a random variable $X$ with probability density function $f(x)$, the expected value of a function $g(X)$ is:

$$
\mu = E[g(X)] = \int_{-\infty}^{\infty} g(x) f(x) \, dx
$$

The Monte Carlo estimator using $N$ independent samples $\{x_i\}_{i=1}^N$ is:

$$
\hat{\mu}_N = \frac{1}{N} \sum_{i=1}^{N} g(x_i)
$$

By the Strong Law of Large Numbers, $\hat{\mu}_N \xrightarrow{a.s.} \mu$ as $N \to \infty$.

### Convergence Rate

The Central Limit Theorem establishes the convergence rate:

$$
\sqrt{N}(\hat{\mu}_N - \mu) \xrightarrow{d} \mathcal{N}(0, \sigma^2)
$$

where $\sigma^2 = \text{Var}[g(X)]$. The standard error is:

$$
SE(\hat{\mu}_N) = \frac{\sigma}{\sqrt{N}}
$$

This implies that to reduce error by factor $k$, one needs $k^2$ times more samples — the hallmark $O(N^{-1/2})$ convergence rate.

### Confidence Intervals

A $(1-\alpha)$ confidence interval for $\mu$ is:

$$
\hat{\mu}_N \pm z_{\alpha/2} \cdot \frac{s_N}{\sqrt{N}}
$$

where $s_N$ is the sample standard deviation and $z_{\alpha/2}$ is the critical value from the standard normal distribution.

## Variance Reduction Techniques

### Antithetic Variates

Generate pairs $(U, 1-U)$ where $U \sim \text{Uniform}(0,1)$. The antithetic estimator:

$$
\hat{\mu}_{AV} = \frac{1}{2N} \sum_{i=1}^{N} [g(F^{-1}(U_i)) + g(F^{-1}(1-U_i))]
$$

reduces variance when $g$ is monotonic, since $\text{Cov}(g(U), g(1-U)) < 0$.

### Control Variates

If $E[h(X)] = \nu$ is known, use:

$$
\hat{\mu}_{CV} = \hat{\mu}_N - c(\bar{h}_N - \nu)
$$

The optimal coefficient is $c^* = \frac{\text{Cov}(g(X), h(X))}{\text{Var}(h(X))}$, yielding variance reduction proportional to $\rho^2$ where $\rho$ is the correlation between $g$ and $h$.

### Importance Sampling

Sample from proposal distribution $q(x)$ instead of $f(x)$:

$$
\hat{\mu}_{IS} = \frac{1}{N} \sum_{i=1}^{N} g(x_i) \frac{f(x_i)}{q(x_i)}, \quad x_i \sim q
$$

Optimal $q^*(x) \propto |g(x)|f(x)$ minimizes variance but is typically intractable; practical choices tilt $q$ toward regions where $g(x)f(x)$ is large.

### Stratified Sampling

Partition domain into $K$ strata with probabilities $p_k$:

$$
\hat{\mu}_{SS} = \sum_{k=1}^{K} p_k \cdot \frac{1}{n_k} \sum_{j=1}^{n_k} g(x_{kj})
$$

Variance is always less than or equal to crude MC when allocation is proportional: $n_k = N \cdot p_k$.

## Quasi-Monte Carlo Methods

Low-discrepancy sequences (Sobol, Halton, Faure) achieve better uniformity than pseudo-random numbers. The Koksma-Hlawka inequality bounds integration error:

$$
|I(f) - Q_N(f)| \leq V(f) \cdot D_N^*
$$

where $V(f)$ is the Hardy-Krause variation and $D_N^*$ is the star discrepancy. For smooth integrands, QMC achieves $O(N^{-1} (\log N)^d)$ convergence, superior to MC's $O(N^{-1/2})$.

## Markov Chain Monte Carlo (MCMC)

For high-dimensional Bayesian inference where direct sampling is impossible, MCMC constructs a Markov chain with stationary distribution $\pi(\theta)$:

### Metropolis-Hastings Algorithm

Given current state $\theta_t$, propose $\theta' \sim q(\theta'|\theta_t)$ and accept with probability:

$$
\alpha = \min\left(1, \frac{\pi(\theta') q(\theta_t|\theta')}{\pi(\theta_t) q(\theta'|\theta_t)}\right)
$$

The chain satisfies detailed balance: $\pi(\theta) P(\theta \to \theta') = \pi(\theta') P(\theta' \to \theta)$.

### Hamiltonian Monte Carlo (HMC)

Introduces auxiliary momentum variables $p$ and simulates Hamiltonian dynamics:

$$
H(\theta, p) = U(\theta) + K(p) = -\log \pi(\theta) + \frac{1}{2} p^T M^{-1} p
$$

Leapfrog integration preserves volume and approximately conserves energy, enabling efficient exploration of high-dimensional posteriors with acceptance rates near 0.65-0.90.

## Applications in Industrial Engineering

### Reliability Analysis

System reliability with component failure times $T_i \sim F_i(t)$:

$$
R_{sys}(t) = P(T_{sys} > t) = E[\mathbb{1}\{T_{sys} > t\}]
$$

Monte Carlo estimates rare failure probabilities via subset simulation or line sampling.

### Supply Chain Risk Assessment

Model demand uncertainty, lead time variability, and disruption risks:

$$
TC = \sum_{t=1}^{T} (h \cdot I_t^+ + b \cdot I_t^- + c \cdot Q_t)
$$

where $I_t^+$ is inventory, $I_t^-$ is backlog, and parameters follow stochastic processes.

### Financial Risk Management

Value-at-Risk estimation:

$$
VaR_\alpha = \inf\{l : P(L > l) \leq \alpha\}
$$

Estimated via historical simulation, parametric methods, or full revaluation MC.

## Implementation Best Practices

1. **Random Number Generation**: Use Mersenne Twister (MT19937) or PCG for long period and good statistical properties
2. **Seed Management**: Record seeds for reproducibility; use stream-based generators for parallel simulations
3. **Convergence Diagnostics**: Monitor running mean, batch means, Gelman-Rubin statistic for MCMC
4. **Dimensionality**: For $d > 20$, prefer MCMC or sparse grid methods over standard MC/QMC
5. **Rare Events**: Use splitting methods, cross-entropy, or conditional MC for tail probabilities

## Recent Advances (2023-2026)

- **Neural Monte Carlo**: Combining deep learning with MC for adaptive importance sampling (Zhou et al., 2024)
- **Differentiable Simulation**: Gradient-based optimization through stochastic simulators using reparameterization tricks (Mohamed et al., 2023)
- **Multi-fidelity MC**: Hierarchical estimators combining cheap low-fidelity and expensive high-fidelity models (Giles & Szpruch, 2024)
- **Quantum Monte Carlo**: Quantum algorithms achieving quadratic speedup for certain integration problems (Montanaro, 2023)

## References

- Robert, C. P., & Casella, G. (2023). *Monte Carlo Statistical Methods* (3rd ed.). Springer.
- Kroese, D. P., Taimre, T., & Botev, Z. I. (2024). *Handbook of Monte Carlo Methods*. Wiley.
- Glasserman, P. (2023). *Monte Carlo Methods in Financial Engineering* (2nd ed.). Springer.
- Zhou, Y., Li, W., & Chen, X. (2024). Neural adaptive importance sampling for high-dimensional integration. *Journal of Computational Physics*, 498, 112678.
- Mohamed, S., Rosca, M., & Figurnov, M. (2023). Monte Carlo gradient estimation in machine learning. *Journal of Machine Learning Research*, 24(132), 1-58.

</parameter>

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
