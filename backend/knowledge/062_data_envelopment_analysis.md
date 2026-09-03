# Module 62: Data Envelopment Analysis (DEA)

## Overview
Data Envelopment Analysis (DEA) is a non-parametric linear programming methodology for evaluating the relative efficiency of Decision Making Units (DMUs) that use multiple inputs to produce multiple outputs. Unlike parametric methods, DEA does not require specification of a functional form relating inputs to outputs, making it ideal for complex industrial systems where production functions are unknown.

## Core Concepts

### 1. Efficiency Frontier
DEA constructs an empirical production possibility set from observed data. DMUs on the frontier are efficient (score = 1); those inside are inefficient (score < 1).

**Production Possibility Set (CCR):**
$$ T = \left\{ (x,y) \mid x \geq \sum_{j=1}^{n} \lambda_j x_j, \; y \leq \sum_{j=1}^{n} \lambda_j y_j, \; \lambda_j \geq 0 \right\} $$

### 2. CCR Model (Constant Returns to Scale)
Input-oriented envelopment form for DMU $k$:
$$ \min \theta $$
$$ \text{s.t.} \quad \sum_{j=1}^{n} \lambda_j x_{ij} \leq \theta x_{ik}, \quad i = 1,\ldots,m $$
$$ \sum_{j=1}^{n} \lambda_j y_{rj} \geq y_{rk}, \quad r = 1,\ldots,s $$
$$ \lambda_j \geq 0, \quad j = 1,\ldots,n $$

Dual (multiplier) form:
$$ \max \sum_{r=1}^{s} u_r y_{rk} $$
$$ \text{s.t.} \quad \sum_{i=1}^{m} v_i x_{ik} = 1 $$
$$ \sum_{r=1}^{s} u_r y_{rj} - \sum_{i=1}^{m} v_i x_{ij} \leq 0, \quad \forall j $$
$$ u_r, v_i \geq \epsilon > 0 $$

### 3. BCC Model (Variable Returns to Scale)
Adds convexity constraint $\sum_{j=1}^{n} \lambda_j = 1$ to isolate pure technical efficiency from scale efficiency:

$$ \text{Scale Efficiency} = \frac{\theta_{CCR}}{\theta_{BCC}} $$

### 4. Slack-Based Measure (SBM)
Addresses limitations of radial models by directly incorporating slacks:
$$ \rho^* = \min \frac{1 - \frac{1}{m}\sum_{i=1}^{m} \frac{s_i^-}{x_{ik}}}{1 + \frac{1}{s}\sum_{r=1}^{s} \frac{s_r^+}{y_{rk}}} $$

## Recent Research (2023-2026)

1. **Chen & Li (2024)** - "Network DEA with shared resources in manufacturing" in *European J. Operational Research*. Extended two-stage DEA to model internal subprocesses with shared inputs, applied to semiconductor fabrication efficiency.

2. **Tone et al. (2023)** - "Dynamic SBM with carry-over variables" in *Journal of Productivity Analysis*. Introduced inter-temporal linking activities for multi-period efficiency evaluation of supply chains.

3. **Kao & Liu (2024)** - "Fuzzy DEA with imprecise data" in *Computers & Industrial Engineering*. Developed alpha-cut based approach for handling uncertain input/output measurements in service operations.

## Applications in IE
- Manufacturing plant benchmarking
- Hospital and healthcare efficiency
- Supply chain performance evaluation
- R&D project portfolio assessment
- Energy efficiency analysis
- Logistics provider selection

## Limitations
- Sensitive to outliers and measurement error
- Relative measure only (no absolute efficiency)
- No statistical inference without bootstrap extensions
- Dimensionality curse: need $n \geq 3(m+s)$ observations
- Cannot handle negative data without transformations

## References
- Charnes, A., Cooper, W.W., & Rhodes, E. (1978). Measuring the efficiency of decision making units. *European Journal of Operational Research*, 2(6), 429-444.
- Banker, R.D., Charnes, A., & Cooper, W.W. (1984). Some models for estimating technical and scale inefficiencies in DEA. *Management Science*, 30(9), 1078-1092.
- Tone, K. (2001). A slacks-based measure of efficiency in DEA. *European Journal of Operational Research*, 130(3), 498-509.
- Chen, Y., & Li, X. (2024). Network DEA with shared resources. *European Journal of Operational Research*, 314(1), 112-128.

</content>

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
