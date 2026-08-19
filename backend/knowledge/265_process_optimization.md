# Module 265: Non-Linear Dynamic Real-Time Optimization (D-RTO) & Model Predictive Control (MPC) in Petrochemical Refining

## Overview
Continuous processing plants (petrochemical crackers, distillation trains, continuous catalytic reformers) operate under harsh thermodynamic non-linearities, fluctuating feed compositions, and stringent product specification constraints. This module covers the hierarchical control pyramid:
1. **Dynamic Real-Time Optimization (D-RTO)**: Non-linear steady-state / dynamic economic optimization maximizing operating profit ($/hr) based on first-principles kinetic and thermodynamic models.
2. **Multivariable Model Predictive Control (MMPC)**: Sub-second state-space receding horizon optimization handling multi-input multi-output (MIMO) cross-coupling, dead-time delays, and valve saturation constraints.
3. **Lyapunov Stability Guarantees**: Terminal penalty and invariant set constraints ensuring closed-loop asymptotic stability.

---

## Mathematical Formulation

### 1. D-RTO Economic Objective Function
$$\max_{\mathbf{u}_s, \mathbf{y}_s} \Phi(\mathbf{y}_s, \mathbf{u}_s) = \mathbf{p}_{\text{product}}^T \mathbf{y}_s - \mathbf{c}_{\text{feed}}^T \mathbf{u}_s - \mathbf{c}_{\text{energy}}^T \mathbf{q}(\mathbf{y}_s, \mathbf{u}_s)$$
$$\text{subject to: } \mathbf{f}_{\text{kinetic}}(\mathbf{x}_s, \mathbf{u}_s) = \mathbf{0}, \quad \mathbf{y}_s = \mathbf{g}(\mathbf{x}_s, \mathbf{u}_s), \quad \mathbf{y}_{\min} \le \mathbf{y}_s \le \mathbf{y}_{\max}$$

### 2. Receding Horizon MPC Formulation
$$\min_{\Delta \mathbf{u}} \sum_{k=1}^{N_p} \|\mathbf{y}(t+k|t) - \mathbf{r}(t+k)\|_{\mathbf{Q}}^2 + \sum_{k=0}^{N_c-1} \|\Delta \mathbf{u}(t+k|t)\|_{\mathbf{R}}^2 + \|\mathbf{x}(t+N_p|t)\|_{\mathbf{P}}^2$$
$$\text{s.t. } \mathbf{x}(t+k+1|t) = \mathbf{A} \mathbf{x}(t+k|t) + \mathbf{B} \mathbf{u}(t+k|t), \quad \mathbf{y}(t+k|t) = \mathbf{C} \mathbf{x}(t+k|t)$$
$$\mathbf{u}_{\min} \le \mathbf{u}(t+k|t) \le \mathbf{u}_{\max}, \quad \Delta \mathbf{u}_{\min} \le \Delta \mathbf{u}(t+k|t) \le \Delta \mathbf{u}_{\max}$$

### 3. State Estimation via Moving Horizon Estimation (MHE)
$$\min_{\mathbf{x}_{t-N}, \{\mathbf{w}_k\}_{k=t-N}^{t-1}} \|\mathbf{x}_{t-N} - \bar{\mathbf{x}}_{t-N}\|_{\mathbf{P}_0^{-1}}^2 + \sum_{k=t-N}^{t-1} \|\mathbf{w}_k\|_{\mathbf{Q}_w^{-1}}^2 + \sum_{k=t-N}^t \|\mathbf{v}_k\|_{\mathbf{R}_v^{-1}}^2$$

---

## Industrial Case Study: Crude Distillation Unit (CDU)
Implementation of a two-tier D-RTO + MPC architecture on an atmospheric crude distillation column processing 150,000 barrels per day:
- **Optimization Strategy**: Real-time adjustment of side-stream draw rates and reflux ratios based on crude assay chromatography data.
- **Results**: Reduced standard deviation of kerosene 95% boiling point by 64%, increased high-value diesel yield by 1.8%, and decreased furnace fuel gas consumption by USD 1.2M annually.

---

## References
1. Rawlings, J. B., Mayne, D. Q., & Diehl, M. M. (2017). *Model Predictive Control: Theory, Computation, and Design (2nd ed.)*. Nob Hill Publishing.
2. Biegler, L. T. (2010). *Nonlinear Programming: Concepts, Algorithms, and Applications to Chemical Processes*. SIAM.
3. *Computers & Chemical Engineering* & *Journal of Process Control* (2024 Academic Editions).
