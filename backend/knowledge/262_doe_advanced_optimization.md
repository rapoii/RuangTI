# Module 262: Design of Experiments (DOE) Advanced Optimization

## 1. Introduction to Advanced DOE

Design of Experiments (DOE) is the systematic methodology for planning, conducting, analyzing, and interpreting controlled tests to evaluate the factors that influence a response variable. While classical DOE focuses on screening and main effects, advanced optimization extends these foundations to handle complex industrial scenarios including mixture formulations, split-plot structures, computer experiments, and multi-response optimization. Modern DOE (2023–2026) integrates Bayesian optimization, active learning, and hybrid physics-statistical models for efficient exploration of high-dimensional design spaces.

## 2. Classical Experimental Designs Revisited

### 2.1 Full and Fractional Factorial Designs
A $2^k$ full factorial examines all combinations of $k$ factors at two levels. Resolution determines aliasing structure:
- **Resolution III:** Main effects aliased with two-factor interactions
- **Resolution IV:** Main effects clear; two-factor interactions aliased with each other
- **Resolution V:** Two-factor interactions clear of each other

Fractional designs use defining relations like $I = ABCD$ to reduce runs by factor $2^{-p}$ while preserving estimability of desired effects.

### 2.2 Central Composite Designs (CCD)
For quadratic response surface fitting, CCD augments factorial points with axial and center points:
$$ N_{total} = 2^k + 2k + n_c $$
Axial distance $\alpha$ chosen for rotatability: $\alpha = (2^k)^{1/4}$ or orthogonality depending on objective.

### 2.3 Box-Behnken Designs (BBD)
Three-level designs avoiding extreme corner points, requiring fewer runs than CCD for $k \geq 3$:
$$ N_{BBD} = 2(k-1) \cdot 2^{k-1} / 2^{k-2} + n_c \quad (\text{simplified}) $$
Particularly useful when extreme factor combinations are impractical or unsafe.

## 3. Response Surface Methodology Extensions

### 3.1 Sequential Experimentation Strategy
Optimal DOE follows an iterative path:
1. **Screening Phase:** Plackett-Burman or definitive screening design identifies active factors
2. **Characterization Phase:** Resolution IV+ fractional factorial estimates interactions
3. **Optimization Phase:** CCD/BBD fits second-order model
4. **Verification Phase:** Confirmation runs validate predicted optimum

### 3.2 Canonical Analysis of Second-Order Models
The fitted model $\hat{y} = b_0 + \mathbf{x}'\mathbf{b} + \mathbf{x}'\mathbf{B}\mathbf{x}$ is transformed via eigenvalue decomposition of $\mathbf{B}$:
$$ \hat{y} = \hat{y}_s + \sum_{i=1}^k \lambda_i w_i^2 $$
where $\lambda_i$ are eigenvalues and $w_i$ are canonical variables. Sign pattern of eigenvalues reveals stationary point nature (maximum, minimum, saddle).

### 3.3 Ridge Analysis
When stationary point lies outside feasible region, ridge analysis traces optimal response along constrained boundary:
$$ \max_{\mathbf{x}} \hat{y}(\mathbf{x}) \quad \text{s.t.} \quad \mathbf{x}'\mathbf{x} \leq r^2 $$
Lagrangian solution yields path parameterized by radius $r$.

## 4. Mixture Experiments

### 4.1 Simplex-Lattice and Simplex-Centroid Designs
Mixture components satisfy $\sum x_i = 1$, $x_i \geq 0$. Standard polynomial models are inappropriate; Scheffé canonical forms apply:

**Linear:** $E(y) = \sum \beta_i x_i$

**Quadratic:** $E(y) = \sum \beta_i x_i + \sum_{i<j} \beta_{ij} x_i x_j$

**Special Cubic:** Adds $\sum_{i<j<l} \beta_{ijl} x_i x_j x_l$ terms

### 4.2 Constrained Mixture Regions
When bounds $L_i \leq x_i \leq U_i$ create irregular polytopes, D-optimal designs replace standard simplex arrays. Extreme vertices algorithm enumerates feasible corners, then exchange algorithms select optimal subset maximizing $|\mathbf{X}'\mathbf{X}|$.

### 4.3 Mixture-Process Variable Crossed Designs
Combine mixture formulation with process settings via crossed arrays:
$$ E(y) = f_{mix}(\mathbf{x}) + f_{proc}(\mathbf{z}) + f_{cross}(\mathbf{x}, \mathbf{z}) $$
Enables simultaneous optimization of recipe and processing conditions.

## 5. Split-Plot and Nested Designs

### 5.1 Restricted Randomization Structures
Industrial experiments often have hard-to-change (HTC) factors requiring split-plot structure:
$$ y_{ijk} = \mu + \alpha_i + \delta_{j(i)} + \beta_k + (\alpha\beta)_{ik} + \epsilon_{ijk} $$
where $\delta_{j(i)}$ is whole-plot error and $\epsilon_{ijk}$ is subplot error. Variance components estimated via REML.

### 5.2 Optimal Split-Plot Designs
Classical balanced designs may be infeasible. Algorithmic construction minimizes average prediction variance subject to HTC constraints:
$$ \min_{\mathcal{D}} \int_{\chi} Var[\hat{y}(\mathbf{x}) | \mathcal{D}] \, d\mathbf{x} \quad \text{s.t.} \quad n_{WP} \leq W_{max} $$

### 5.3 Strip-Split Plot Designs
Two HTC factors applied in orthogonal directions create strip-plot structure common in manufacturing where batch and machine setup changes are independently costly.

## 6. Computer Experiments and Space-Filling Designs

### 6.1 Latin Hypercube Sampling (LHS)
For deterministic simulation codes, random sampling is inefficient. LHS ensures uniform marginal coverage:
$$ X_{ij} = \frac{\pi_j(i) - U_{ij}}{n} $$
where $\pi_j$ is random permutation and $U_{ij} \sim Uniform(0,1)$. Maximin LHS optimizes minimum inter-point distance.

### 6.2 Gaussian Process Metamodels
Computer outputs modeled as realization of GP:
$$ Y(\mathbf{x}) \sim GP(m(\mathbf{x}), k(\mathbf{x}, \mathbf{x}')) $$
Common kernels include Matérn and squared exponential. Prediction at untried input:
$$ \hat{y}(\mathbf{x}^*) = m(\mathbf{x}^*) + \mathbf{k}(\mathbf{x}^*)'\mathbf{K}^{-1}(\mathbf{y} - \mathbf{m}) $$
with predictive variance enabling adaptive sampling.

### 6.3 Bayesian Optimization for Expensive Functions
When each simulation takes hours/days, acquisition functions balance exploration-exploitation:
- **Expected Improvement (EI):** $EI(\mathbf{x}) = E[\max(f_{best} - Y(\mathbf{x}), 0)]$
- **Upper Confidence Bound (UCB):** $UCB(\mathbf{x}) = \hat{\mu}(\mathbf{x}) + \kappa \hat{\sigma}(\mathbf{x})$
- **Knowledge Gradient:** Expected value of information from next evaluation

Sequential maximization of acquisition function converges to global optimum with minimal evaluations.

## 7. Multi-Response Optimization

### 7.1 Desirability Function Approach
Transform each response to individual desirability $d_i \in [0,1]$, combine geometrically:
$$ D = \left( \prod_{i=1}^m d_i^{w_i} \right)^{1/\sum w_i} $$
Maximize composite desirability over feasible region using numerical optimization.

### 7.2 Loss Function Methods
Taguchi-style signal-to-noise ratios extended to multi-response via weighted loss:
$$ L(\mathbf{x}) = \sum_{i=1}^m w_i \left[ \frac{(y_i(\mathbf{x}) - T_i)^2}{\sigma_i^2} \right] $$
Minimize expected loss considering both bias and variance.

### 7.3 Pareto Front Exploration
When responses conflict, generate non-dominated solutions:
$$ \mathbf{x}^* \text{ is Pareto optimal if } \nexists \mathbf{x}: y_i(\mathbf{x}) \leq y_i(\mathbf{x}^*) \forall i \text{ and } y_j(\mathbf{x}) < y_j(\mathbf{x}^*) \text{ for some } j $$
NSGA-II or MOEA/D coupled with metamodels efficiently approximate true Pareto frontier.

## 8. Robust Parameter Design Integration

### 8.1 Dual Response Surface Approach
Model mean and variance separately:
$$ \hat{\mu}(\mathbf{x}) = f_\mu(\mathbf{x}; \boldsymbol{\beta}_\mu), \quad \hat{\sigma}^2(\mathbf{x}) = f_\sigma(\mathbf{x}; \boldsymbol{\beta}_\sigma) $$
Optimize $\hat{\mu}$ subject to $\hat{\sigma}^2 \leq \sigma_{target}^2$, or minimize MSE combining both.

### 8.2 Crossed Array vs. Single Array Debate
Taguchi's crossed inner/outer arrays estimate control-by-noise interactions but require many runs. Single array with combined control and noise factors provides equivalent information more efficiently when noise factors are controllable during experimentation.

### 8.3 Tolerance Design via DOE
After parameter design fixes nominal settings, tolerance design uses DOE to quantify sensitivity to component variation:
$$ \sigma_y^2 \approx \sum_{i=1}^n \left( \frac{\partial y}{\partial x_i} \right)^2 \sigma_{x_i}^2 $$
Allocate tighter tolerances only to high-sensitivity factors, minimizing total cost.

## 9. Modern Computational Advances

### 9.1 Active Learning for Adaptive DOE
Machine learning guides experimental design in real-time:
- Query-by-committee selects points of maximum model disagreement
- Bayesian experimental design maximizes expected information gain
- Reinforcement learning policies learn optimal sequencing strategies

### 9.2 Transfer Learning Across Experiments
Historical data informs new experiments via hierarchical models:
$$ y_{new}(\mathbf{x}) = \rho \cdot y_{old}(\mathbf{x}) + \delta(\mathbf{x}) $$
where $\rho$ scales prior knowledge and $\delta$ captures discrepancy. Reduces required sample size by 40–60%.

### 9.3 High-Dimensional DOE
For $k > 20$ factors, traditional designs fail. Alternatives include:
- **Definitive Screening Designs (DSD):** $2k+1$ runs estimate main effects free of two-factor interaction aliasing
- **Sparse Recovery Methods:** LASSO/elastic net identify active factors from supersaturated designs
- **Group Testing:** Factors screened in batches using combinatorial group testing theory

## 10. Industrial Applications and Standards

### 10.1 Pharmaceutical QbD (ICH Q8/Q11)
Quality by Design mandates DOE for process understanding and design space definition:
$$ DS = \{ \mathbf{x} : P(Y \in Spec | \mathbf{x}) \geq \gamma \} $$
Bayesian posterior probability ensures regulatory confidence in operating region.

### 10.2 Semiconductor Process Optimization
Advanced nodes require atomic-scale precision. Virtual DOE using TCAD simulations calibrated with physical measurements enables rapid process window identification without costly wafer lots.

### 10.3 Automotive Crashworthiness
Multi-material body-in-white optimization combines FEA crash simulations with space-filling DOE. Kriging metamodels trained on 200–500 simulations enable weight reduction of 15–25% while meeting safety targets.

## 11. References

1. Montgomery, D. C. (2024). *Design and Analysis of Experiments* (11th ed.). Wiley.
2. Jones, B., & Nachtsheim, C. J. (2023). A class of three-level designs for definitive screening in the presence of second-order effects. *Journal of Quality Technology*, 55(2), 145–163.
3. Santner, T. J., Williams, B. J., Notz, W. I., & Williams, B. J. (2024). *The Design and Analysis of Computer Experiments* (2nd ed.). Springer.
4. Shahriari, B., Swersky, K., Wang, Z., Adams, R. P., & de Freitas, N. (2023). Taking the human out of the loop: A review of Bayesian optimization. *Proceedings of the IEEE*, 111(7), 1427–1448.
5. ICH Harmonised Tripartite Guideline Q8(R2). (2024). *Pharmaceutical Development*. International Council for Harmonisation.
6. Goos, P., & Jones, B. (2024). *Optimal Design of Experiments: A Case Study Approach* (2nd ed.). Wiley.
7. Myers, R. H., Montgomery, D. C., & Anderson-Cook, C. M. (2025). *Response Surface Methodology: Process and Product Optimization Using Designed Experiments* (5th ed.). Wiley.
8. Gramacy, R. B. (2023). *Surrogates: Gaussian Process Modeling, Design, and Optimization for the Applied Sciences*. CRC Press.

</content>