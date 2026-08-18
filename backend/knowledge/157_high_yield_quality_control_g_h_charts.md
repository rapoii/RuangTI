# Module 157: High-Yield Quality Control (g-Charts and h-Charts)

## 1. Conceptual Foundation

Traditional Shewhart control charts are designed for **low-yield** processes where defects are rare events (Type II error tolerance). In **high-yield** manufacturing (>99% good parts, e.g., electronics, semiconductors, precision components), defects become extremely infrequent. Standard control charts suffer from:

- **Very wide control limits** (UCL ≈ 3σ where σ ≈ $\sqrt{p(1-p)}$ is tiny)
- **High false alarm rates** when rare defects do occur
- **Delayed detection** of shifts because the signal-to-noise ratio for small changes in defect rate is poor

**g-Charts** and **h-Charts** were specifically developed for high-yield processes to provide **sensitive, interpretable control charts** that maintain narrow effective limits while preserving statistical properties (Woodall, 1997; Knoth, 2003).

### 1.1 The g-Chart

The **g-chart** monitors the **number of nonconforming items** in a sample of size $n$:

$$
g_i = \text{number of defects in subgroup } i
$$

Under Poisson assumption (rare events):

$$
g_i \sim \text{Poisson}(\lambda n)
$$

**Control limits** (Woodall, 1997):

$$
UCL_g = \frac{1}{2} \left[ \left( \frac{3}{c_4} \right)^2 + 3\sqrt{ \left( \frac{3}{c_4} \right)^2 \cdot \frac{\bar{g}}{c_4} + \frac{9}{c_4^2} } \right]
$$

$$
LCL_g = \max\left(0, \frac{1}{2} \left[ \left( \frac{3}{c_4} \right)^2 - 3\sqrt{ \left( \frac{3}{c_4} \right)^2 \cdot \frac{\bar{g}}{c_4} + \frac{9}{c_4^2} } \right] \right)
$$

Where:
- $\bar{g}$ = average number of defects per subgroup
- $c_4$ = Shewhart constant for subgroup size $n$ ($c_4 \approx 1$ for large $n$)

**h-Chart** (Knoth, 2003) monitors the **proportion**:

$$
h_i = \frac{g_i}{n}
$$

Control limits:

$$
UCL_h = \bar{h} + k \sqrt{\frac{\bar{h}(1-\bar{h})}{n}}, \quad LCL_h = \bar{h} - k \sqrt{\frac{\bar{h}(1-\bar{h})}{n}}
$$

Where $k$ is chosen to achieve desired in-control ARL (typically $k \approx 2.8–3.0$).

---

## 2. Mathematical Framework

### 2.1 Poisson Assumption Validation

For rare events (high yield, $p \ll 1$):

$$
\text{Mean} = \lambda = np, \quad \text{Variance} = np(1-p) \approx np
$$

**Dispersion index**:

$$
D = \frac{\text{Var}(g_i)}{\text{Mean}(g_i)} \approx 1
$$

Test for over-dispersion:

$$
\chi^2 = \sum_{i=1}^{m} \frac{(g_i - \bar{g})^2}{\bar{g}} \sim \chi^2_{m-1}
$$

Reject $H_0$ if $\chi^2$ exceeds critical value → use negative binomial instead.

### 2.2 g-Chart Limits Derivation

Woodall (1997) derives limits that maintain **exactly 3σ equivalent** under Poisson:

$$
\text{UCL}_g = \bar{g} + 3\sqrt{\bar{g}} \quad (\text{approximate})
$$

Exact form uses $c_4$ to correct for finite $n$:

$$
c_4 = \sqrt{\frac{2}{n-1}} \frac{\Gamma(n/2)}{\Gamma((n-1)/2)}
$$

### 2.3 h-Chart Performance

The h-chart is **equivalent** to a Shewhart chart on $g_i$ but scaled by $1/n$. The advantage is **interpretability** — $h_i$ is a proportion, easier for operators to understand.

### 2.4 Detection of Small Shifts

For a shift of size $\delta$ in defect rate:

$$
\text{ARL}_1 = \frac{1}{P(g > UCL_g)}
$$

For small $\delta$ (e.g., 20% increase in defect rate):

$$
ARL_1 \approx \frac{n}{0.2\delta} \quad (\text{approximate for large } n)
$$

Compare to standard Shewhart ARL$_1$ for same shift: typically 10–50× slower for high-yield processes.

### 2.5 Multiple Defect Types

When multiple nonconformity types exist:

$$
g_{ij} = \text{number of type } j \text{ defects in subgroup } i
$$

**Simultaneous control**:

$$
\text{Monitor } m \text{ separate g-charts or use multivariate extension}
$$

---

## 3. Implementation Workflow

### 3.1 g-Chart Protocol

1. **Determine subgroup size $n$**: Typically $n=1$ for 100% inspection; $n=10–50$ for 100% sampling
2. **Collect Phase I data**: Minimum 30–50 subgroups under known stable conditions
3. **Estimate $\bar{g}$**: Average defects per subgroup
4. **Compute limits**:
   - $UCL_g = 3\sqrt{\bar{g}}$ (large $n$ approximation)
   - $LCL_g = 0$ (since $g \geq 0$)
5. **Phase II monitoring**: Plot $g_i$ vs. subgroup number
6. **Action rules**:
   - Signal at UCL: Investigate assignable causes
   - Signal at LCL: Rare; investigate for over-control or measurement error
7. **Update limits periodically**: Recompute $\bar{g}$ every 100–200 subgroups

### 3.2 h-Chart Protocol

1. **Use when $n$ is large**: $n > 30$ makes $g_i$ cumbersome
2. **Plot $h_i = g_i/n$**
3. **Limits**: $\bar{h} \pm 3\sqrt{\bar{h}(1-\bar{h})/n}$
4. **Interpretation**: $h_i > UCL_h$ indicates increase in defect proportion

### 3.3 Special Considerations

- **Zero-inflated data**: Many subgroups have $g=0$; use zero-inflated Poisson model
- **Multiple charts**: For simultaneous monitoring of different defect types, use separate charts or Hotelling's $T^2$
- **Run rules**: Apply Western Electric or Nelson rules adapted for Poisson/h-chart
- **Process capability link**: High-yield processes have $C_p \gg 1.33$; g-chart monitors stability before capability assessment

---

## 4. Recent Advances (2023–2026)

- **Bayesian g-Chart**: Knoth (2023) proposes fully Bayesian updating of Poisson parameter with exponential smoothing, providing credible intervals and adaptive limits.
- **Machine Learning for Defect Prediction**: Zhang et al. (2024) combine g-chart with random forest anomaly detection for ultra-high yield (>99.99%) semiconductor processes.
- **Digital Twin Integration**: Wang & Liu (2025) embed g-chart logic in digital twins, triggering automatic SPC reconfiguration when process parameters change.
- **Multivariate g-Charts**: Li et al. (2023) extend to simultaneous monitoring of multiple defect types using Mahalanobis distance on vector $(g_1, g_2, ..., g_m)$.
- **Real-Time Streaming**: Chen et al. (2026) develop recursive g-chart updates for continuous defect counts in high-speed manufacturing lines.

---

## 5. Key Takeaways

- **g-charts** are essential for high-yield processes (>99% good) where standard Shewhart charts have impractically wide limits
- **h-charts** are mathematically equivalent but more intuitive for operators when subgroup size $n$ is large
- **Poisson assumption** must be validated; over-dispersion requires negative binomial control chart
- **Small shift detection** is dramatically improved: ARL$_1$ can be 10–100× better than standard Shewhart for same $\delta$
- **LCL = 0** is common; signals below LCL are rare and require investigation
- **Implementation** is straightforward: use existing defect counts, no need for variables data
- **Modern practice**: Combine g-chart with ML anomaly detection and digital twin for ultra-high yield environments
- **Actionability**: g-charts provide **count-based signals** — easier for operators to understand than standardized z-scores in low-defect regimes

## References

1. Woodall, W. H. (1997). Control charts for high-yield processes. *Journal of Quality Technology*, 29(3), 319–330.
2. Knoth, S. (2003). The h-chart: A new control chart for high-yield processes. *Quality Technology & Quantitative Management*, 1(1), 45–56.
3. Knoth, S. (2023). Bayesian control charting for high-yield processes. *Quality Engineering*, 35(2), 178–192.
4. Zhang, Y., et al. (2024). Machine learning-augmented g-chart for semiconductor defect monitoring. *IEEE Transactions on Semiconductor Manufacturing*, 37(2), 145–158.
5. Wang, L., & Liu, J. (2025). Digital twin-enabled adaptive g-chart for smart manufacturing. *Journal of Manufacturing Systems*, 78, 215–228.
6. Chen, X., et al. (2026). Real-time g-chart implementation in streaming data environments. *International Journal of Production Research*, 64(3), 789–802.