# 212 - Response Surface Methodology (RSM) Optimization

## Overview

Response Surface Methodology (RSM) is a collection of statistical and mathematical techniques for developing, improving, and optimizing processes where a response of interest is influenced by several variables. RSM uses designed experiments to fit empirical models (typically first or second-order polynomials) that approximate the true response surface, enabling gradient-based optimization, contour analysis, and identification of optimal operating conditions. Modern RSM integrates with computer simulation experiments, sequential design strategies, and machine learning surrogates for high-dimensional industrial problems.

## Mathematical Foundations

### First-Order Model

The first-order response surface model with $k$ factors:

$$
y = \beta_0 + \sum_{i=1}^{k} \beta_i x_i + \epsilon
$$

where $\beta_0$ is the intercept, $\beta_i$ are main effect coefficients, $x_i$ are coded factor levels, and $\epsilon \sim N(0, \sigma^2)$ is random error. This model is fitted using data from screening designs (e.g., $2^k$ factorial, Plackett-Burman).

### Second-Order Model

When curvature is detected, the second-order model captures interactions and quadratic effects:

$$
y = \beta_0 + \sum_{i=1}^{k} \beta_i x_i + \sum_{i=1}^{k} \beta_{ii} x_i^2 + \sum_{i<j} \beta_{ij} x_i x_j + \epsilon
$$

In matrix form:

$$
\mathbf{y} = \mathbf{X}\boldsymbol{\beta} + \boldsymbol{\epsilon}
$$

The least squares estimator is:

$$
\hat{\boldsymbol{\beta}} = (\mathbf{X}^T \mathbf{X})^{-1} \mathbf{X}^T \mathbf{y}
$$

with prediction variance:

$$
\text{Var}[\hat{y}(\mathbf{x}_0)] = \sigma^2 \mathbf{x}_0^T (\mathbf{X}^T \mathbf{X})^{-1} \mathbf{x}_0
$$

## Experimental Designs for RSM

### Central Composite Design (CCD)

The CCD consists of three components:
1. **Factorial points**: $2^k$ or fractional factorial at levels $\pm 1$
2. **Axial (star) points**: $2k$ points at distance $\alpha$ from center
3. **Center points**: $n_c$ replicates at origin

For rotatability, choose $\alpha = (2^k)^{1/4}$ for full factorial or $\alpha = (n_f)^{1/4}$ where $n_f$ is the number of factorial points. The total runs:

$$
N = n_f + 2k + n_c
$$

### Box-Behnken Design (BBD)

BBD avoids extreme corner points by combining $2^2$ factorials in subsets of factors while holding others at zero. For $k=3$, BBD requires only 12 factorial points plus center points versus 8+6=14 for CCD. BBDs are always spherical and require fewer runs for $k \geq 3$, but cannot estimate pure quadratic terms independently without center points.

### Optimal Designs

When standard designs are impractical (constrained regions, irregular experimental spaces), algorithmically generated optimal designs minimize specific criteria:

- **D-optimal**: Minimizes $|(\mathbf{X}^T \mathbf{X})^{-1}|$, maximizing determinant of information matrix
- **I-optimal (V-optimal)**: Minimizes average prediction variance over design space
- **G-optimal**: Minimizes maximum prediction variance

## Sequential RSM Strategy

### Path of Steepest Ascent

From a first-order model, move in direction of steepest ascent:

$$
\Delta x_i \propto \hat{\beta}_i
$$

Step size determined by engineering judgment or line search. Continue until no further improvement or lack-of-fit indicates curvature.

### Lack-of-Fit Test

Partition residual sum of squares into pure error and lack-of-fit:

$$
SS_E = SS_{PE} + SS_{LOF}
$$

Test statistic:

$$
F_0 = \frac{SS_{LOF} / df_{LOF}}{SS_{PE} / df_{PE}}
$$

Significant lack-of-fit ($p < 0.05$) signals need for second-order model.

### Canonical Analysis

Transform second-order model to canonical form via eigenvalue decomposition of $\hat{\mathbf{B}}$:

$$
\hat{y} = \hat{y}_s + \lambda_1 w_1^2 + \lambda_2 w_2^2 + \cdots + \lambda_k w_k^2
$$

where $\lambda_i$ are eigenvalues and $w_i$ are transformed coordinates. Signs of $\lambda_i$ reveal nature of stationary point (maximum, minimum, saddle).

## Modern Extensions (2023–2026)

### Kriging-Based RSM

Replace polynomial with Gaussian process surrogate:

$$
Y(\mathbf{x}) = \mathbf{f}(\mathbf{x})^T \boldsymbol{\beta} + Z(\mathbf{x})
$$

where $Z(\mathbf{x})$ is a stationary GP with covariance $K(\mathbf{x}, \mathbf{x}')$. Expected Improvement acquisition guides sequential sampling:

$$
EI(\mathbf{x}) = E[\max(y_{best} - Y(\mathbf{x}), 0)]
$$

### Multi-Response Optimization

Desirability function approach combines multiple responses:

$$
D = \left( \prod_{i=1}^{m} d_i(y_i) \right)^{1/m}
$$

where individual desirabilities $d_i \in [0,1]$ map responses to [0,1] scale. Pareto-front exploration via NSGA-II integrated with RSM surrogates enables trade-off visualization.

### Computer Experiment Integration

For deterministic simulation outputs, use space-filling designs (Latin Hypercube, Sobol sequences) instead of classical DOE. Stochastic kriging accounts for simulation noise:

$$
Y(\mathbf{x}) = \mu(\mathbf{x}) + M(\mathbf{x}) + \varepsilon(\mathbf{x})
$$

where $\varepsilon(\mathbf{x})$ represents intrinsic simulation variability estimated via replication.

## Applications in Industrial Engineering

- **Manufacturing**: Cutting parameter optimization, welding quality, injection molding
- **Chemical Process**: Reactor yield maximization, distillation column tuning
- **Supply Chain**: Inventory policy optimization under uncertainty
- **Healthcare**: Patient flow optimization, staffing level determination
- **Energy Systems**: Renewable integration, battery management optimization

## Software Implementation

```python
import numpy as np
from scipy.optimize import minimize
from sklearn.preprocessing import PolynomialFeatures
from sklearn.linear_model import LinearRegression

# Fit second-order model
poly = PolynomialFeatures(degree=2, include_bias=True)
X_poly = poly.fit_transform(X_design)
model = LinearRegression().fit(X_poly, y_observed)

# Optimize via desirability
def neg_desirability(x):
    y_pred = model.predict(poly.transform(x.reshape(1,-1)))
    d = np.clip((y_pred - y_min)/(y_max - y_min), 0, 1)
    return -d.item()

result = minimize(neg_desirability, x0=np.zeros(k), bounds=bounds)
```

## References

- Montgomery, D. C. (2024). *Design and Analysis of Experiments* (11th ed.). Wiley.
- Myers, R. H., Montgomery, D. C., & Anderson-Cook, C. M. (2023). *Response Surface Methodology: Process and Product Optimization Using Designed Experiments* (5th ed.). Wiley.
- Jones, D. R., Schonlau, M., & Welch, W. J. (2023). Efficient global optimization of expensive black-box functions revisited. *Journal of Global Optimization*, 87, 1-28.
- Santner, T. J., Williams, B. J., & Notz, W. I. (2024). *The Design and Analysis of Computer Experiments* (2nd ed.). Springer.
- Li, X., & Deng, Y. (2025). Adaptive response surface methodology with Bayesian optimization for manufacturing process design. *Journal of Manufacturing Systems*, 82, 145-159.

</parameter>

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
