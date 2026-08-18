# Module 265: Process Optimization in Industrial Engineering

## Overview

Process optimization is the systematic discipline of adjusting process parameters, configurations, and workflows to maximize desired performance metrics (yield, throughput, quality) while minimizing costs, waste, and variability. In industrial engineering, optimization spans from classical response surface methodology (RSM) to modern machine learning-driven adaptive control. This module covers deterministic and stochastic optimization frameworks, multi-objective trade-offs, and real-time process adjustment strategies relevant to manufacturing and service systems.

## Response Surface Methodology (RSM)

RSM remains the cornerstone of empirical process optimization when first-principles models are unavailable. The second-order model for $k$ factors is:

$$
y = \beta_0 + \sum_{i=1}^{k} \beta_i x_i + \sum_{i=1}^{k} \beta_{ii} x_i^2 + \sum_{i<j} \beta_{ij} x_i x_j + \epsilon
$$

The stationary point $\mathbf{x}_s$ is found by solving $\nabla y = 0$:

$$
\mathbf{x}_s = -\frac{1}{2}\mathbf{B}^{-1}\mathbf{b}
$$

where $\mathbf{B}$ is the matrix of second-order coefficients and $\mathbf{b}$ is the vector of first-order coefficients. Canonical analysis determines whether $\mathbf{x}_s$ is a maximum, minimum, or saddle point via eigenvalues of $\mathbf{B}$.

### Central Composite Design (CCD) Efficiency

For $k$ factors, CCD requires $2^k + 2k + n_c$ runs. Rotatability requires $\alpha = (2^k)^{1/4}$. For $k=3$, $\alpha = 1.682$; for $k=5$, $\alpha = 2.0$. Face-centered designs ($\alpha=1$) sacrifice rotatability but reduce factor levels to three, easing implementation in constrained processes.

## Multi-Objective Optimization

Real processes rarely optimize a single response. Desirability functions combine multiple responses into a scalar metric:

$$
D = \left( d_1^{w_1} \cdot d_2^{w_2} \cdots d_m^{w_m} \right)^{1/\sum w_i}
$$

where individual desirabilities $d_i \in [0,1]$ map each response to a standardized scale. For "target-is-best" responses:

$$
d_i = \begin{cases} 
0 & y_i < LSL_i \\
\left(\frac{y_i - LSL_i}{T_i - LSL_i}\right)^s & LSL_i \leq y_i \leq T_i \\
\left(\frac{USL_i - y_i}{USL_i - T_i}\right)^t & T_i < y_i \leq USL_i \\
0 & y_i > USL_i
\end{cases}
$$

Pareto-optimal frontiers provide non-dominated solution sets when weighting is subjective. NSGA-II and MOEA/D algorithms efficiently approximate these fronts for high-dimensional process spaces.

## Stochastic Optimization Under Uncertainty

Process parameters exhibit natural variation; robust optimization seeks solutions insensitive to noise. Taguchi's signal-to-noise ratio:

$$
SN_T = -10 \log_{10}\left(\frac{1}{n}\sum_{i=1}^{n} y_i^2\right) \quad \text{(nominal-is-best)}
$$

Modern alternatives use dual-response surfaces modeling both mean $\hat{\mu}(\mathbf{x})$ and variance $\hat{\sigma}^2(\mathbf{x})$, then optimizing:

$$
\min_{\mathbf{x}} \hat{\sigma}^2(\mathbf{x}) \quad \text{s.t.} \quad |\hat{\mu}(\mathbf{x}) - T| \leq \delta
$$

Bayesian optimization with Gaussian process surrogates handles expensive black-box evaluations common in semiconductor and pharmaceutical processes. Expected improvement acquisition balances exploration-exploitation:

$$
EI(\mathbf{x}) = (\mu(\mathbf{x}) - f_{best} - \xi)\Phi(Z) + \sigma(\mathbf{x})\phi(Z)
$$

where $Z = (\mu(\mathbf{x}) - f_{best} - \xi)/\sigma(\mathbf{x})$.

## Real-Time Adaptive Control

Model Predictive Control (MPC) solves at each sampling instant:

$$
\min_{\mathbf{u}} \sum_{j=1}^{N_p} \|y(k+j|k) - r(k+j)\|^2_Q + \sum_{j=0}^{N_c-1} \|\Delta u(k+j|k)\|^2_R
$$

subject to process dynamics and constraints. Run-to-run control in semiconductor manufacturing uses EWMA feedback:

$$
a_t = \lambda(y_t - b x_t) + (1-\lambda)a_{t-1}
$$

adjusting recipe parameters between batches to compensate for drift.

## Implementation Framework

1. **Characterization**: DOE screening → identify active factors
2. **Modeling**: RSM or ML surrogate fitting with validation
3. **Optimization**: Single/multi-objective solver with constraints
4. **Robustness**: Sensitivity analysis, Monte Carlo verification
5. **Deployment**: SPC monitoring, control charts for sustained gains

## References

1. Myers, R. H., Montgomery, D. C., & Anderson-Cook, C. M. (2016). *Response Surface Methodology: Process and Product Optimization Using Designed Experiments* (4th ed.). Wiley.
2. Del Castillo, E. (2007). Process optimization: A statistical approach. *Springer*.
3. Jones, B., & Goos, P. (2023). Optimal design of experiments for process optimization. *Journal of Quality Technology*, 55(2), 145–168.
4. Li, X., & Zhang, Y. (2024). Bayesian optimization for semiconductor process tuning: A review. *IEEE Transactions on Semiconductor Manufacturing*, 37(2), 112–130.
5. Edgar, T. F., Himmelblau, D. M., & Lasdon, L. S. (2001). *Optimization of Chemical Processes* (2nd ed.). McGraw-Hill.
6. Khuri, A. I., & Mukhopadhyay, S. (2010). Response surface methodology. *Wiley Interdisciplinary Reviews: Computational Statistics*, 2(2), 128–149.

</content>