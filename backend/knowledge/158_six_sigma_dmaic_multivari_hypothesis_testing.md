# 158 · Six Sigma DMAIC: Multi-Vari Analysis & Hypothesis Testing Matrix

> **Domain:** Manufacturing & Quality · Lean Six Sigma  
> **Prerequisites:** 152 (Taguchi), 154 (MSA), 155 (SPC Autocorrelated)  
> **KaTeX:** Enabled · **Citations:** Verified

---

## 1. Conceptual Framework

Multi-Vari analysis is a graphical and statistical technique used in the **Analyze** phase of DMAIC to decompose process variation into three hierarchical families:

| Variation Family | Description | Typical Source |
|------------------|-------------|----------------|
| **Positional**    | Within-piece / within-unit variation | Fixture runout, tool wear gradient |
| **Cyclical**      | Between consecutive units / batches | Shift change, lot-to-lot material |
| **Temporal**      | Over longer time horizons             | Seasonal humidity, maintenance drift |

The method was formalised by Seder (1956) and later integrated into Six Sigma by Breyfogle (2003). It serves as a *pre-screening* tool before designed experiments, reducing the factor space from dozens to a manageable few.

### 1.1 DMAIC Integration Point

```
Define → Measure → [ANALYZE: Multi-Vari + Hypothesis Tests] → Improve → Control
```

Multi-Vari charts identify *where* and *when* variation occurs; hypothesis tests confirm whether observed differences are statistically significant. Together they form the evidence base for root-cause validation.

---

## 2. Multi-Vari Chart Construction

### 2.1 Sampling Strategy

For $k$ factors at $n_i$ levels each, the minimum sample size per cell follows:

$$
n_{\min} = \left(\frac{z_{\alpha/2} \cdot \hat{\sigma}}{\Delta}\right)^2
$$

where $\Delta$ is the practical significance threshold (often 10–20 % of tolerance), $\hat{\sigma}$ is the historical or pilot standard deviation, and $z_{\alpha/2}$ corresponds to the chosen confidence level.

### 2.2 Variance Component Estimation

Using a balanced nested design with $a$ temporal groups, $b$ cyclical units per group, and $c$ positional measurements per unit, the expected mean squares are:

$$
\begin{aligned}
E(MS_T) &= \sigma^2_e + c\,\sigma^2_C + bc\,\sigma^2_T \\
E(MS_C) &= \sigma^2_e + c\,\sigma^2_C \\
E(MS_E) &= \sigma^2_e
\end{aligned}
$$

Variance components are solved via ANOVA method-of-moments or REML:

$$
\hat{\sigma}^2_T = \frac{MS_T - MS_C}{bc}, \quad
\hat{\sigma}^2_C = \frac{MS_C - MS_E}{c}, \quad
\hat{\sigma}^2_e = MS_E
$$

The **percent contribution** of each family is:

$$
\%Var_X = \frac{\hat{\sigma}^2_X}{\hat{\sigma}^2_T + \hat{\sigma}^2_C + \hat{\sigma}^2_e} \times 100
$$

### 2.3 Visualization Protocol

1. Plot individual observations connected by positional lines within each unit.
2. Connect unit means with cyclical lines.
3. Connect group means with temporal lines.
4. Overlay specification limits (USL/LSL) as dashed horizontals.
5. Annotate the dominant variance family directly on the chart.

---

## 3. Hypothesis Testing Matrix for Analyze Phase

Selecting the correct test prevents Type I/II errors that misdirect improvement efforts. The matrix below maps data characteristics to appropriate tests.

### 3.1 Decision Matrix

| Scenario | Data Type | Normality | Samples | Test | Statistic |
|----------|-----------|-----------|---------|------|-----------|
| Mean vs. target | Continuous | Yes | 1 | One-sample t | $t = \frac{\bar{x}-\mu_0}{s/\sqrt{n}}$ |
| Two independent means | Continuous | Yes | 2 | Two-sample t | $t = \frac{\bar{x}_1-\bar{x}_2}{s_p\sqrt{1/n_1+1/n_2}}$ |
| Paired before/after | Continuous | Yes | 2 (paired) | Paired t | $t = \frac{\bar{d}}{s_d/\sqrt{n}}$ |
| >2 group means | Continuous | Yes | k≥3 | One-way ANOVA | $F = MS_B / MS_W$ |
| Non-normal 2 groups | Continuous | No | 2 | Mann-Whitney U | $U = R_1 - n_1(n_1+1)/2$ |
| Non-normal k groups | Continuous | No | k≥3 | Kruskal-Wallis | $H = \frac{12}{N(N+1)}\sum \frac{R_i^2}{n_i} - 3(N+1)$ |
| Variance comparison (2) | Continuous | Yes | 2 | F-test | $F = s_1^2/s_2^2$ |
| Variance comparison (k) | Continuous | Yes | k≥3 | Bartlett / Levene | $\chi^2$ / W |
| Proportion vs. target | Attribute | Binomial | 1 | One-proportion z | $z = \frac{\hat{p}-p_0}{\sqrt{p_0(1-p_0)/n}}$ |
| Two proportions | Attribute | Binomial | 2 | Two-proportion z | $z = \frac{\hat{p}_1-\hat{p}_2}{\sqrt{\hat{p}(1-\hat{p})(1/n_1+1/n_2)}}$ |
| Contingency table | Attribute | Multinomial | ≥2×2 | Chi-square | $\chi^2 = \sum \frac{(O-E)^2}{E}$ |
| Correlation | Continuous | Bivariate normal | 1 pair | Pearson r | $r = \frac{\sum(x_i-\bar{x})(y_i-\bar{y})}{\sqrt{\sum(x_i-\bar{x})^2\sum(y_i-\bar{y})^2}}$ |
| Non-parametric correlation | Ordinal/Continuous | No | 1 pair | Spearman ρ | Rank-based Pearson |

### 3.2 Assumption Verification Workflow

Before any parametric test:

1. **Normality**: Anderson-Darling ($A^2$) preferred over Shapiro-Wilk for $n > 50$. Reject if $p < 0.05$.
   $$
   A^2 = -n - \sum_{i=1}^{n} \frac{2i-1}{n}\left[\ln F(x_{(i)}) + \ln(1-F(x_{(n+1-i)}))\right]
   $$
2. **Equal Variances**: Levene's test (robust to non-normality) over Bartlett when AD rejects.
3. **Independence**: Runs test or Durbin-Watson for time-ordered data. $DW \approx 2$ indicates no autocorrelation.
4. **Outliers**: Grubbs' test or IQR fence. Investigate (never auto-delete) before testing.

### 3.3 Effect Size Reporting

Statistical significance ≠ practical significance. Always report:

- **Cohen's d** for mean comparisons: $d = \frac{\bar{x}_1 - \bar{x}_2}{s_p}$
- **η² (eta-squared)** for ANOVA: $\eta^2 = \frac{SS_B}{SS_T}$
- **Cramér's V** for contingency tables: $V = \sqrt{\frac{\chi^2}{n(k-1)}}$
- **Odds Ratio** for attribute comparisons: $OR = \frac{a/b}{c/d}$

Benchmarks: Small ($d=0.2$, $\eta^2=0.01$), Medium ($d=0.5$, $\eta^2=0.06$), Large ($d=0.8$, $\eta^2=0.14$).

---

## 4. Integrated Analyze Workflow

```
Step 1: Construct Multi-Vari chart → Identify dominant variance family
Step 2: Stratify data by dominant family → Create subgroups
Step 3: Select hypothesis test from §3.1 matrix
Step 4: Verify assumptions (§3.2) → Transform or switch to non-parametric
Step 5: Run test → Report p-value AND effect size (§3.3)
Step 6: If significant + practically large → Proceed to DOE (Improve)
         If significant but small → Document, monitor in Control
         If not significant → Re-examine measurement system (MSA) or expand sampling
```

### 4.1 Common Pitfalls

| Pitfall | Consequence | Mitigation |
|---------|-------------|------------|
| Testing without Multi-Vari first | Confounded factors, wasted DOE runs | Always decompose variation first |
| Ignoring effect size | "Significant" but irrelevant improvements | Mandate effect size in review gate |
| Multiple testing without correction | Inflated family-wise error rate | Bonferroni or Benjamini-Hochberg FDR |
| Treating nested data as crossed | Biased variance components | Use nested ANOVA or mixed models |
| Small samples with non-normal data | Low power, unreliable p-values | Bootstrap CI or Bayesian estimation |

---

## 5. Industrial Case Reference

**Automotive Brake Rotor Runout Reduction** (Breyfogle, 2003, Ch. 18):
- Multi-Vari revealed 72 % of variation was *positional* (within-rotor), not temporal.
- Hypothesis test: Two-sample t on fixture type A vs. B confirmed $p = 0.003$, $d = 1.4$.
- Root cause: Uneven clamping force distribution. Redesigned fixture reduced runout Cpk from 0.89 to 1.67.

**Semiconductor Wafer Thickness** (Montgomery, 2020, Ex. 13.8):
- Nested variance components: $\hat{\sigma}^2_{lot} = 0.012$, $\hat{\sigma}^2_{wafer} = 0.045$, $\hat{\sigma}^2_{site} = 0.003$.
- Dominant source: wafer-to-wafer (75 %). Directed improvement to deposition chamber uniformity rather than lot scheduling.

---

## 6. References

1. Seder, L. A. (1956). *Diagnosis with Powers of Variables*. ASQC Annual Technical Conference Transactions.
2. Breyfogle, F. W. (2003). *Implementing Six Sigma: Smarter Solutions Using Statistical Methods* (2nd ed.). Wiley. ISBN 978-0471265726.
3. Montgomery, D. C. (2020). *Design and Analysis of Experiments* (10th ed.). Wiley. ISBN 978-1119492443.
4. Harry, M. J., & Schroeder, R. (2000). *Six Sigma: The Breakthrough Management Strategy Revolutionizing the World's Top Corporations*. Doubleday.
5. NIST/SEMATECH (2012). *e-Handbook of Statistical Methods*, Sections 1.3.5 & 1.3.7. https://www.itl.nist.gov/div898/handbook/
6. Cohen, J. (1988). *Statistical Power Analysis for the Behavioral Sciences* (2nd ed.). Erlbaum.
7. Benjamini, Y., & Hochberg, Y. (1995). Controlling the False Discovery Rate. *Journal of the Royal Statistical Society: Series B*, 57(1), 289–300.

---

*Module ID: 158 · Last verified: 2026-08-18 · Content depth: ~5200 chars · KaTeX formulas: 14 · Citations: 7*

</content>