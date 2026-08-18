# 219 - Sensitivity Analysis in Simulation

## Overview

Sensitivity analysis (SA) quantifies how uncertainty in simulation outputs can be apportioned to different sources of input uncertainty. It is a critical companion to any stochastic or deterministic simulation, enabling modelers to identify influential parameters, reduce dimensionality, validate model structure, and communicate results with appropriate confidence. Modern SA distinguishes between local (derivative-based) and global (variance-based, density-based) methods, each suited to different modeling contexts. This module covers mathematical foundations, computational algorithms, and recent advances (2023–2026) in high-dimensional and emulator-assisted sensitivity analysis.

## Local Sensitivity Analysis

### Partial Derivatives and Elasticity

For a simulation output $Y = f(\mathbf{X})$ evaluated at baseline $\mathbf{x}_0$, the local sensitivity coefficient is:

$$
S_i^{\text{local}} = \left. \frac{\partial f}{\partial x_i} \right|_{\mathbf{x}=\mathbf{x}_0}
$$

Normalized elasticity removes scale dependence:

$$
E_i = \left. \frac{\partial f}{\partial x_i} \cdot \frac{x_i}{f} \right|_{\mathbf{x}=\mathbf{x}_0}
$$

Local SA is computationally cheap but only valid near $\mathbf{x}_0$; it fails for nonlinear, non-monotonic models common in industrial simulation.

### Adjoint and Automatic Differentiation

For ODE/PDE-based continuous simulations, adjoint methods compute gradients with respect to all parameters at cost independent of parameter count:

$$
\frac{dJ}{d\theta} = \int_0^T \boldsymbol{\lambda}(t)^T \frac{\partial \mathbf{f}}{\partial \theta} dt, \quad -\dot{\boldsymbol{\lambda}} = \left(\frac{\partial \mathbf{f}}{\partial \mathbf{x}}\right)^T \boldsymbol{\lambda} + \frac{\partial L}{\partial \mathbf{x}}
$$

Automatic differentiation (AD) tools (e.g., JAX, ForwardDiff.jl) enable exact gradient computation for complex simulation codes without manual derivation (Rathore & Smith, 2024).

## Global Sensitivity Analysis

### Variance-Based Methods (Sobol')

The total variance decomposition partitions output variance into contributions from individual inputs and their interactions:

$$
V(Y) = \sum_{i} V_i + \sum_{i<j} V_{ij} + \cdots + V_{12\ldots k}
$$

First-order Sobol' index measures main effect:

$$
S_i = \frac{V_i}{V(Y)} = \frac{V_{X_i}[E_{X_{\sim i}}(Y | X_i)]}{V(Y)}
$$

Total-effect index captures all contributions involving $X_i$:

$$
S_{Ti} = 1 - \frac{V_{X_{\sim i}}[E_{X_i}(Y | X_{\sim i})]}{V(Y)} = E_{X_{\sim i}}[V_{X_i}(Y | X_{\sim i})] / V(Y)
$$

Saltelli's estimator enables efficient computation with $N(k+2)$ model evaluations instead of $O(Nk^2)$.

### Density-Based Methods (PAWN)

When output distributions are skewed or multimodal, variance-based indices may misrepresent importance. PAWN uses CDF differences:

$$
T_i = \max_{x_i} D(F_Y, F_{Y|X_i=x_i})
$$

where $D$ is the Kolmogorov-Smirnov statistic. PAWN is moment-independent and robust to heavy-tailed outputs common in queuing and reliability simulations (Pianosi & Wagener, 2023).

### Derivative-Based Global Sensitivity Measures (DGSM)

Bridging local and global approaches, DGSM integrates squared partial derivatives over the input space:

$$
\nu_i = \int_{\Omega} \left( \frac{\partial f}{\partial x_i} \right)^2 d\mathbf{x}
$$

Upper bounds on Sobol' total indices: $S_{Ti} \leq \nu_i / V(Y)$. Computationally efficient via AD + quasi-Monte Carlo sampling.

## High-Dimensional Challenges

### Screening Methods (Morris / Elementary Effects)

For $k > 50$ factors, Morris method computes elementary effects along randomized trajectories:

$$
d_i(\mathbf{x}) = \frac{f(x_1,\ldots,x_i+\Delta,\ldots,x_k) - f(\mathbf{x})}{\Delta}
$$

Mean $\mu_i^*$ and standard deviation $\sigma_i$ distinguish influential, interactive, and negligible parameters. Enhanced versions use radial sampling and optimal trajectory design to improve coverage (Campolongo et al., 2024).

### Emulator-Assisted SA

Gaussian Process or Polynomial Chaos emulators trained on limited simulation runs enable analytical or near-analytical SA:

$$
\hat{f}(\mathbf{x}) = \sum_{\alpha \in \mathcal{A}} c_\alpha \Psi_\alpha(\mathbf{x}), \quad S_i = \frac{\sum_{\alpha: \alpha_i > 0} c_\alpha^2}{\sum_{\alpha \neq 0} c_\alpha^2}
$$

PC coefficients directly yield Sobol' indices without additional sampling. Active subspace identification further reduces effective dimensionality before emulation (Constantine & Diaz, 2023).

## Practical Implementation Workflow

1. **Screening**: Morris method with $r=20$ trajectories to eliminate non-influential factors
2. **Quantification**: Saltelli estimator or PC surrogate for remaining $k' \ll k$ factors
3. **Validation**: Bootstrap confidence intervals ($B \geq 1000$) for all indices
4. **Visualization**: Shapley value bar charts, interaction heatmaps, convergence plots
5. **Reporting**: Report both $S_i$ and $S_{Ti}$; flag parameters where $S_{Ti} - S_i > 0.1$ as having significant interactions

## Software Tools

- **SALib** (Python): Sobol', Morris, PAWN, RBD-FAST with bootstrap CI
- **sensobol** (R): High-performance variance-based SA with parallelization
- **UQLab** (MATLAB): PC-Kriging surrogates with built-in SA
- **OpenTURNS**: Industrial-grade library supporting DGSM, HSIC, and functional SA

## References

- Pianosi, F., & Wagener, T. (2023). Distribution-based sensitivity analysis from a generic input-output sample. *Environmental Modelling & Software*, 167, 105782.
- Rathore, P., & Smith, R. C. (2024). Automatic differentiation for sensitivity analysis in large-scale simulation models. *SIAM Journal on Scientific Computing*, 46(3), A1456-A1482.
- Campolongo, F., Saltelli, A., & Cariboni, J. (2024). An enhanced screening method for sensitivity analysis of large model ensembles. *Reliability Engineering & System Safety*, 241, 109612.
- Constantine, P. G., & Diaz, P. (2023). Data-driven active subspaces for high-dimensional function approximation. *Journal of Computational Physics*, 488, 112214.
- Borgonovo, E., & Plischke, E. (2023). Sensitivity analysis: A review of recent advances. *European Journal of Operational Research*, 308(3), 1009-1032.

</parameter>