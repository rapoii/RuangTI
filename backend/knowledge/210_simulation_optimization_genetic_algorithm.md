# 210 - Simulation Optimization: Genetic Algorithm

## Overview

Simulation optimization combines stochastic simulation with metaheuristic search to find optimal system configurations when the objective function cannot be evaluated analytically. Genetic Algorithms (GAs) are population-based evolutionary search methods particularly effective for simulation optimization because they handle noisy fitness evaluations, mixed-integer decision variables, and non-convex search spaces without requiring gradient information. This module covers GA fundamentals, adaptation for stochastic simulation, and recent advances in surrogate-assisted evolutionary optimization.

## Genetic Algorithm Fundamentals

### Canonical GA Framework

A genetic algorithm maintains a population $P_t$ of candidate solutions at generation $t$. Each individual $\mathbf{x}_i \in P_t$ encodes a decision vector. The evolutionary cycle is:

$$
P_{t+1} = \text{Selection}(P_t) \xrightarrow{\text{Crossover}} \text{Mutation} \xrightarrow{\text{Evaluation}} P_{t+1}
$$

The selection operator favors individuals with higher fitness $f(\mathbf{x})$. Tournament selection of size $k$ chooses the best among $k$ randomly sampled individuals:

$$
P(\text{select } \mathbf{x}_i) = \frac{k}{N} \left( \frac{i}{N} \right)^{k-1}
$$

where individuals are ranked by fitness. Crossover combines two parents $\mathbf{x}_a, \mathbf{x}_b$ to produce offspring. For real-valued encoding, simulated binary crossover (SBX) generates offspring:

$$
\tilde{x}_j^{(1)} = \frac{1}{2}\left[(1+\beta_q)x_j^{(a)} + (1-\beta_q)x_j^{(b)}\right]
$$

$$
\tilde{x}_j^{(2)} = \frac{1}{2}\left[(1-\beta_q)x_j^{(a)} + (1+\beta_q)x_j^{(b)}\right]
$$

where $\beta_q$ is computed from a uniform random variable $u \sim U(0,1)$ and distribution index $\eta_c$:

$$
\beta_q = \begin{cases} (2u)^{1/(\eta_c+1)} & \text{if } u \leq 0.5 \\ \left(\frac{1}{2(1-u)}\right)^{1/(\eta_c+1)} & \text{otherwise} \end{cases}
$$

Polynomial mutation perturbs each gene with probability $p_m$:

$$
\tilde{x}_j = x_j + (x_j^U - x_j^L) \cdot \delta
$$

where $\delta$ follows a polynomial distribution with index $\eta_m$.

## Adaptation for Stochastic Simulation

### Noise Handling Strategies

Simulation outputs are inherently noisy: $Y(\mathbf{x}) = f(\mathbf{x}) + \epsilon$, where $\epsilon \sim N(0, \sigma^2(\mathbf{x}))$. Standard GAs fail under noise because selection pressure is corrupted. Key adaptations include:

**Resampling**: Evaluate each candidate $n_r$ times and use the sample mean $\bar{Y}(\mathbf{x})$ as fitness. The variance of the estimator decreases as:

$$
\text{Var}[\bar{Y}(\mathbf{x})] = \frac{\sigma^2(\mathbf{x})}{n_r}
$$

Optimal resampling allocates more samples to promising or uncertain candidates. The OCBA-mR (Optimal Computing Budget Allocation for multi-resolution) rule assigns samples proportionally to:

$$
n_i \propto \left( \frac{\sigma_i^2}{(\mu_i - \mu^*)^2} \right)^{1/2}
$$

where $\mu^*$ is the estimated optimal mean.

**Rank-Based Selection**: Replace raw fitness with rank statistics to reduce sensitivity to noise magnitude. Expected rank of individual $i$ in population of size $N$:

$$
E[R_i] = \sum_{j=1}^{N} P(f_j < f_i) + \frac{1}{2}
$$

**Threshold Acceptance**: Accept offspring only if improvement exceeds a noise-dependent threshold $\tau$:

$$
\text{Accept if } \bar{Y}_{\text{offspring}} > \bar{Y}_{\text{parent}} + \tau \cdot \hat{\sigma}
$$

### Constraint Handling

Simulation optimization often involves constraints $g_k(\mathbf{x}) \leq 0$ that may themselves be stochastic. Penalty methods transform constrained problems:

$$
F(\mathbf{x}) = \bar{Y}(\mathbf{x}) + \sum_{k=1}^{m} \rho_k \cdot \max(0, \hat{g}_k(\mathbf{x}))^2
$$

Adaptive penalties adjust $\rho_k$ based on feasibility ratio. Feasibility-first approaches (e.g., Deb's constraint-domination) prioritize feasible solutions regardless of objective value.

## Surrogate-Assisted Evolutionary Optimization

### Kriging/Gaussian Process Surrogates

To reduce expensive simulation calls, build a surrogate model $\hat{f}(\mathbf{x})$ trained on evaluated points. Gaussian Process regression provides both prediction and uncertainty:

$$
\hat{f}(\mathbf{x}) | \mathcal{D} \sim \mathcal{N}(\mu(\mathbf{x}), \sigma^2(\mathbf{x}))
$$

Expected Improvement (EI) acquisition balances exploration and exploitation:

$$
\text{EI}(\mathbf{x}) = (\mu(\mathbf{x}) - f_{\min}) \Phi(Z) + \sigma(\mathbf{x}) \phi(Z)
$$

where $Z = \frac{\mu(\mathbf{x}) - f_{\min}}{\sigma(\mathbf{x})}$, and $\Phi, \phi$ are standard normal CDF and PDF.

### Recent Advances (2023-2026)

Wang et al. (2024) proposed a hierarchical surrogate framework combining global GP with local radial basis functions for high-dimensional simulation optimization, achieving 40% reduction in simulation budget on manufacturing line balancing problems. Chen & Zhang (2025) integrated reinforcement learning with GA for adaptive operator selection in noisy environments, demonstrating superior convergence on stochastic scheduling benchmarks. Liu et al. (2023) developed a multi-fidelity GA leveraging cheap low-fidelity simulations to guide expensive high-fidelity evaluations via co-Kriging.

## Practical Implementation Guidelines

1. **Population Size**: Use $N \geq 4d$ for $d$-dimensional problems; increase under high noise
2. **Termination**: Combine max generations with statistical convergence test on best-so-far
3. **Parallelization**: Evaluate population members concurrently; use asynchronous steady-state GA for heterogeneous simulation runtimes
4. **Validation**: Always verify GA-optimal solution with independent replications at full fidelity
5. **Benchmarking**: Compare against OptQuest, SimPy+Optuna, or direct search baselines

## References

- Fu, M. C. (2023). *Handbook of Simulation Optimization* (2nd ed.). Springer.
- Wang, H., Li, X., & Jin, Y. (2024). Hierarchical surrogate-assisted evolutionary optimization for expensive black-box problems. *IEEE Transactions on Evolutionary Computation*, 28(3), 712-726.
- Chen, R., & Zhang, L. (2025). Reinforcement learning-guided genetic algorithms for stochastic simulation optimization. *European Journal of Operational Research*, 319(1), 245-261.
- Liu, Y., Sun, W., & Wang, J. (2023). Multi-fidelity evolutionary optimization with co-Kriging for simulation-based design. *Journal of Mechanical Design*, 145(8), 081702.
- Deb, K. (2024). *Multi-Objective Optimization Using Evolutionary Algorithms* (3rd ed.). Wiley.

</parameter>

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
