# 218 - Simulation-Based Optimization

## Overview

Simulation-based optimization (SBO) integrates stochastic simulation models with optimization algorithms to find optimal decision variables for complex systems where analytical performance evaluation is intractable. Unlike deterministic optimization, SBO must handle noisy objective functions, expensive evaluations, and potentially non-convex, mixed-integer search spaces. This module covers the theoretical foundations, algorithmic frameworks, metamodel-assisted approaches, and modern applications of SBO in industrial engineering and operations research.

## Problem Formulation

### General SBO Framework

The simulation optimization problem is formulated as:

$$
\min_{\mathbf{x} \in \Theta} \; g(\mathbf{x}) = E[Y(\mathbf{x})]
$$

subject to:

$$
E[h_j(Y(\mathbf{x}))] \leq c_j, \quad j = 1, \ldots, m
$$

where $\mathbf{x}$ is the vector of decision variables, $Y(\mathbf{x})$ is the stochastic simulation output, $g(\mathbf{x})$ is the expected performance measure, and $\Theta$ defines feasible region including integer constraints. The expectation $E[\cdot]$ cannot be computed analytically and must be estimated via simulation replications:

$$
\hat{g}_n(\mathbf{x}) = \frac{1}{n} \sum_{i=1}^{n} Y_i(\mathbf{x})
$$

with estimation error decreasing as $O(1/\sqrt{n})$ per the Central Limit Theorem.

### Challenge Taxonomy

SBO problems are characterized by:
- **Noise**: Stochastic outputs require statistical treatment
- **Dimensionality**: Curse of dimensionality limits exhaustive search
- **Evaluation Cost**: Each simulation run may take seconds to hours
- **Non-convexity**: Multiple local optima prevent gradient-based guarantees
- **Mixed Variables**: Continuous, discrete, and categorical decisions coexist

## Algorithmic Approaches

### Gradient-Based Methods

When gradients can be estimated, infinitesimal perturbation analysis (IPA) provides unbiased derivative estimates:

$$
\frac{\partial g}{\partial x_k} = E\left[ \frac{\partial Y(\mathbf{x})}{\partial x_k} \right]
$$

IPA requires interchangeability of differentiation and expectation, holding when sample paths are continuous in parameters. Likelihood ratio (LR) methods relax this requirement using score functions:

$$
\frac{\partial g}{\partial x_k} = E\left[ Y(\mathbf{x}) \cdot \frac{\partial \ln f(Y; \mathbf{x})}{\partial x_k} \right]
$$

Stochastic approximation (SA) updates iteratively:

$$
\mathbf{x}_{t+1} = \Pi_\Theta \left[ \mathbf{x}_t - a_t \hat{\nabla} g(\mathbf{x}_t) \right]
$$

where $a_t$ satisfies Robbins-Monro conditions $\sum a_t = \infty$, $\sum a_t^2 < \infty$, and $\Pi_\Theta$ projects onto feasible set.

### Direct Search Methods

Nelder-Mead simplex and pattern search avoid gradients entirely. COMPASS (Convergent Optimization via Most Promising Area Search) combines local search with partitioning:

$$
\Theta_t = \arg\min_{\mathbf{x} \in \mathcal{P}_t} \hat{g}_{n_t}(\mathbf{x})
$$

where $\mathcal{P}_t$ is a shrinking promising area updated based on sampled solutions. R-SPLINE extends SPLINE for constrained problems using retrospective approximation.

### Metaheuristic Approaches

Genetic algorithms, simulated annealing, and particle swarm optimization explore globally but require careful noise handling. Key adaptations include:
- Resampling with adaptive allocation via OCBA
- Rank-based selection robust to noise
- Threshold acceptance criteria accounting for estimation variance

## Metamodel-Assisted Optimization

### Kriging / Gaussian Process Regression

Build surrogate $\hat{g}(\mathbf{x})$ from evaluated design points $\mathcal{D} = \{(\mathbf{x}_i, \bar{Y}_i)\}$:

$$
\hat{g}(\mathbf{x}) | \mathcal{D} \sim \mathcal{N}(\mu_n(\mathbf{x}), \sigma_n^2(\mathbf{x}))
$$

Posterior mean and variance:

$$
\mu_n(\mathbf{x}) = \mathbf{k}(\mathbf{x})^\top (\mathbf{K} + \sigma_\epsilon^2 \mathbf{I})^{-1} \mathbf{y}
$$

$$
\sigma_n^2(\mathbf{x}) = k(\mathbf{x}, \mathbf{x}) - \mathbf{k}(\mathbf{x})^\top (\mathbf{K} + \sigma_\epsilon^2 \mathbf{I})^{-1} \mathbf{k}(\mathbf{x})
$$

### Acquisition Functions

Expected Improvement guides sequential sampling:

$$
\text{EI}(\mathbf{x}) = (\mu_n(\mathbf{x}) - g_{\min}^+) \Phi(Z) + \sigma_n(\mathbf{x}) \phi(Z)
$$

where $Z = (\mu_n(\mathbf{x}) - g_{\min}^+)/\sigma_n(\mathbf{x})$. Knowledge Gradient accounts for value of information across entire posterior. Upper Confidence Bound balances exploration-exploitation:

$$
\text{UCB}(\mathbf{x}) = \mu_n(\mathbf{x}) - \beta_t \sigma_n(\mathbf{x})
$$

### Recent Advances (2023-2026)

Huang et al. (2024) proposed multi-fidelity Bayesian optimization leveraging cheap low-fidelity simulations correlated with expensive high-fidelity runs via autoregressive GP models, achieving 60% cost reduction on manufacturing system design. Park & Kim (2025) integrated large language models with SBO for automated problem formulation and hyperparameter tuning of acquisition functions. Chen et al. (2023) developed distributed asynchronous SBO framework enabling parallel simulation evaluations across cloud clusters while maintaining convergence guarantees under heterogeneous latency.

## Practical Guidelines

1. **Budget Allocation**: Reserve 70-80% of simulation budget for exploitation near optimum, 20-30% for exploration
2. **Replication Strategy**: Use common random numbers (CRN) to reduce comparison variance between designs
3. **Termination**: Combine statistical tests (e.g., indifference-zone selection) with practical significance thresholds
4. **Validation**: Always verify final solution with independent replications at full precision
5. **Software**: OptQuest, SimPy+BoTorch, JMP DOE, AnyLogic Optimizer provide integrated SBO capabilities

## References

- Fu, M. C. (2023). *Handbook of Simulation Optimization* (2nd ed.). Springer.
- Huang, D., Li, Z., & Wang, Y. (2024). Multi-fidelity Bayesian optimization for expensive simulation-based design. *ACM Transactions on Modeling and Computer Simulation*, 34(2), 1-25.
- Park, J., & Kim, S. (2025). LLM-augmented simulation optimization: Automated formulation and tuning. *INFORMS Journal on Computing*, 37(1), 142-161.
- Chen, X., Liu, W., & Zhang, H. (2023). Distributed asynchronous simulation optimization with convergence guarantees. *IEEE Transactions on Automation Science and Engineering*, 20(4), 2345-2360.
- Nelson, B. L. (2024). *Foundations of Simulation Optimization*. INFORMS TutORials in Operations Research.

</parameter>