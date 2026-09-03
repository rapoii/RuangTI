# 211 - Taguchi Method: Robust Design (Lanjutan)

## Overview

The Taguchi Method extends traditional Design of Experiments by focusing on robust design—making product or process performance insensitive to uncontrollable noise factors. While basic Taguchi concepts cover orthogonal arrays and signal-to-noise ratios, this advanced module addresses dynamic S/N ratios, tolerance design, loss function economics, and integration with modern simulation-based optimization. Recent research (2023–2026) has combined Taguchi methods with machine learning surrogates and multi-objective frameworks for complex industrial systems.

## Advanced Signal-to-Noise Ratios

### Dynamic S/N Ratio

For systems with a functional relationship between input signal $M$ and output response $y$, the dynamic S/N ratio measures linearity and robustness simultaneously:

$$
\eta = 10 \log_{10} \left( \frac{\beta^2}{\sigma_e^2} \right)
$$

where $\beta$ is the slope of the ideal function $y = \beta M + \epsilon$, and $\sigma_e^2$ is the error variance around the fitted line. Unlike static S/N ratios (nominal-the-best, smaller-the-better, larger-the-better), the dynamic version evaluates how well the system maintains its intended transfer function under noise conditions.

### Functional Quality Loss

Taguchi's quadratic loss function for dynamic characteristics:

$$
L(y) = k \cdot E\left[(y - \beta M)^2\right] = k \left[ \sigma_e^2 + (\hat{\beta} - \beta_0)^2 \cdot E[M^2] \right]
$$

where $\beta_0$ is the target slope and $k$ is the economic loss coefficient determined from specification limits and cost data.

## Tolerance Design via Simulation

### Variance Decomposition for Tolerance Allocation

After parameter design identifies optimal settings, tolerance design assigns component tolerances to minimize total cost:

$$
C_T = C_m(\mathbf{t}) + L(\mathbf{t}) = \sum_{i=1}^{p} c_i(t_i) + k \cdot V_Y(\mathbf{t})
$$

where $c_i(t_i)$ is the manufacturing cost for tolerance $t_i$ on component $i$, and $V_Y(\mathbf{t})$ is the output variance propagated through the system transfer function. Monte Carlo simulation estimates $V_Y$ when analytical propagation is intractable.

### Simulation-Based Tolerance Optimization

Modern approaches replace Taguchi's linear approximations with full stochastic simulation:

$$
\min_{\mathbf{t}} \; C_T(\mathbf{t}) \quad \text{s.t.} \quad P(Y \in \text{Spec} | \mathbf{t}) \geq p_{\min}
$$

Solved via GA or gradient-based methods with simulation-generated response surfaces (Li & Chen, 2024).

## Integration with Computer Experiments

### Taguchi-Inspired Space-Filling Designs

For expensive simulations, orthogonal array structures guide Latin Hypercube and maximin distance designs:

$$
D_{\max} = \max_{\mathcal{D}} \min_{i \neq j} d(\mathbf{x}_i, \mathbf{x}_j)
$$

OA-constrained space-filling designs preserve balance properties while covering continuous design spaces relevant to simulation inputs (Wang et al., 2025).

### Surrogate-Assisted Robust Design

Gaussian Process metamodels trained on OA-based simulation runs enable continuous robust optimization:

$$
\hat{Y}(\mathbf{x}, \mathbf{z}) \sim \mathcal{GP}(m(\mathbf{x},\mathbf{z}), k((\mathbf{x},\mathbf{z}), (\mathbf{x}',\mathbf{z}')))
$$

The expected loss is then minimized analytically over the GP posterior, avoiding repeated inner-loop noise simulations (Zhang & Liu, 2023).

## Multi-Response Extensions

### Weighted S/N Approach

For multiple quality characteristics $Y_1, \ldots, Y_q$:

$$
\eta_{\text{multi}} = \sum_{j=1}^{q} w_j \cdot \eta_j, \quad \sum w_j = 1
$$

Weights derived from entropy methods, TOPSIS, or stakeholder preference modeling. Recent work uses PCA-based weighting to handle correlated responses without subjective bias (Kumar & Singh, 2024).

### Desirability-Taguchi Hybrid

Combining Derringer's desirability with Taguchi robustness:

$$
D_{\text{robust}} = \left( \prod_{j=1}^{q} d_j(\mu_j, \sigma_j) \right)^{1/q}
$$

where each individual desirability $d_j$ depends on both mean and variance, ensuring solutions are simultaneously on-target and low-variability.

## Case Study: Injection Molding Parameter Robustness

A 2025 study optimized injection molding for automotive connectors using L27 OA with 3 noise factors (material batch variation, ambient humidity, mold wear). Dynamic S/N analysis identified melt temperature and injection speed as dominant control factors. GP surrogate built from 27 simulation runs predicted warpage within 2.3% RMSE. Tolerance design reduced scrap rate from 8.7% to 1.2% while increasing tooling cost by only 4% (Park & Kim, 2025).

## Software Implementation

- **Minitab**: Built-in Taguchi DOE with S/N plots, ANOVA, and tolerance design modules
- **JMP**: Custom DOE platform supporting dynamic S/N and desirability hybrids
- **Python (pyDOE2 + scikit-learn)**: Flexible OA generation, GP surrogate fitting, and custom loss functions
- **AnyLogic/Simulink**: Direct integration of Taguchi experimental frames with simulation models

## References

- Li, X., & Chen, Y. (2024). Simulation-based tolerance design using Gaussian process metamodels and genetic algorithms. *Quality Engineering*, 36(2), 312-329.
- Wang, H., Zhang, R., & Lee, J. (2025). Orthogonal array constrained space-filling designs for computer experiments. *Technometrics*, 67(1), 45-62.
- Zhang, W., & Liu, Y. (2023). Surrogate-assisted robust design optimization under epistemic uncertainty. *Journal of Mechanical Design*, 145(6), 061703.
- Kumar, A., & Singh, R. (2024). PCA-weighted multi-response Taguchi method for correlated quality characteristics. *International Journal of Production Research*, 62(8), 2891-2910.
- Park, S., & Kim, J. (2025). Robust injection molding optimization combining Taguchi method and Gaussian process regression. *Journal of Manufacturing Processes*, 112, 456-468.
- Taguchi, G., Chowdhury, S., & Wu, Y. (2023). *Taguchi's Quality Engineering Handbook* (2nd ed.). Wiley.

</parameter>

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
