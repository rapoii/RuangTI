# Module 154: MSA Attribute Agreement Analysis & Fleiss Kappa Statistic

## 1. Conceptual Foundation

Attribute Agreement Analysis (AAA) is the Measurement System Analysis method for **discrete/categorical data** (pass/fail, defect types, ordinal ratings). Unlike variable MSA which uses ANOVA and %GRR, attribute data requires agreement statistics because there is no continuous measurement scale. The core question is: *Do appraisers agree with each other and with a known standard beyond what chance alone would produce?* (AIAG, 2010; Montgomery, 2020).

### 1.1 Why Cohen's Kappa Is Insufficient for Multiple Appraisers

Cohen’s $\kappa$ handles only **two** raters. Industrial inspection typically involves 3+ appraisers, requiring **Fleiss’ Kappa** ($\hat{\kappa}$), which generalizes agreement to $m > 2$ raters and accommodates unbalanced category distributions (Fleiss, 1971; Landis & Koch, 1977).

## 2. Mathematical Framework

### 2.1 Fleiss’ Kappa Formulation

Given $n$ subjects rated by $m$ appraisers into $k$ categories:

$$
P_{ij} = \frac{n_{ij}}{m}
$$

where $n_{ij}$ = number of raters assigning subject $i$ to category $j$.

**Observed agreement for subject $i$:**

$$
P_i = \frac{1}{m(m-1)} \sum_{j=1}^{k} n_{ij}(n_{ij} - 1)
$$

**Mean observed agreement across all subjects:**

$$
\bar{P} = \frac{1}{n} \sum_{i=1}^{n} P_i
$$

**Expected agreement under chance:**

$$
P_e = \sum_{j=1}^{k} p_j^2, \quad \text{where } p_j = \frac{1}{nm} \sum_{i=1}^{n} n_{ij}
$$

**Fleiss’ Kappa:**

$$
\hat{\kappa} = \frac{\bar{P} - P_e}{1 - P_e}
$$

### 2.2 Standard Error and Hypothesis Test

$$
SE(\hat{\kappa}) = \sqrt{\frac{2}{nm(m-1)(1-P_e)^2} \left[ P_e + P_e^2 - \sum_{j=1}^{k} p_j(2p_j - 1) \right]}
$$

Test statistic: $Z = \hat{\kappa} / SE(\hat{\kappa}) \sim N(0,1)$ under $H_0: \kappa = 0$.

### 2.3 Interpretation Scale (Landis & Koch, 1977)

| $\kappa$ Range | Agreement Level | Industrial Acceptability |
|----------------|-----------------|--------------------------|
| < 0.00 | Poor | Unacceptable |
| 0.00–0.20 | Slight | Unacceptable |
| 0.21–0.40 | Fair | Marginal |
| 0.41–0.60 | Moderate | Needs improvement |
| 0.61–0.80 | Substantial | Minimum acceptable |
| 0.81–1.00 | Almost Perfect | Excellent |

**AIAG Recommendation:** $\kappa \geq 0.70$ for critical characteristics; $\geq 0.90$ preferred for safety-related inspections.

### 2.4 Individual Appraiser Effectiveness

For each appraiser vs. standard:

$$
\text{Effectiveness} = \frac{\text{Number of correct classifications}}{n} \times 100\%
$$

**Escape Rate** (Type II error proxy):

$$
\text{Escape \%} = \frac{\text{Defective parts classified as Good}}{\text{Total defective parts}} \times 100\%
$$

**False Alarm Rate** (Type I error proxy):

$$
\text{False Alarm \%} = \frac{\text{Good parts classified as Defective}}{\text{Total good parts}} \times 100\%
$$

## 3. Practical Implementation Protocol

### 3.1 Study Design Requirements

- **Minimum sample size:** $n \geq 30$ parts covering full range of categories
- **Appraisers:** $m \geq 3$ (typically 3–5 production inspectors)
- **Replicates:** Each appraiser rates each part at least twice in randomized order
- **Blind study:** Appraisers must not see others' ratings or part identity
- **Known standard:** Reference classification by expert or validated test method

### 3.2 AIAG Cross-Tabulation Method

Construct contingency tables for each pair of appraisers and compute:

$$
\text{Overall Agreement} = \frac{\sum \text{Diagonal cells}}{n}
$$

Compare against chance-adjusted kappa to distinguish true agreement from category prevalence effects.

## 4. Recent Research Advances (2023–2026)

- **Bayesian Kappa Estimation:** Gelman et al. (2023) propose hierarchical Bayesian models that provide credible intervals instead of asymptotic SEs, more reliable for small $n$ common in industrial studies.
- **Weighted Kappa for Ordinal Data:** Vanbelle & Albert (2024) extend weighted kappa with linear/quadratic weights for severity-rated defects, avoiding information loss from treating ordinal scales as nominal.
- **Automated Visual Inspection Validation:** Zhang & Liu (2025, *Journal of Manufacturing Systems*) compare human AAA results against deep learning classifiers, using kappa as the bridge metric for human-AI agreement validation.
- **Multi-Rater Latent Class Models:** Uebersax (2024) address the "no gold standard" problem where no perfect reference exists, estimating true category probabilities simultaneously with rater accuracy.

## 5. Key Takeaways

- Fleiss’ $\kappa$ is the **industry standard** for multi-appraiser attribute MSA; never use simple percent agreement
- Always report both **overall kappa** and **per-category kappa**; overall can mask poor agreement on rare but critical defect types
- Escape rate matters more than overall kappa for safety-critical applications
- Sample must represent actual production mix; artificial balance inflates/deflates $\kappa$
- Re-validate after any change: new inspector, revised criteria, lighting change, fatigue shift
- Modern practice integrates AAA with digital work instructions and AI-assisted visual inspection calibration

## References

1. AIAG. (2010). *Measurement Systems Analysis* (4th ed.). Automotive Industry Action Group.
2. Fleiss, J. L. (1971). Measuring nominal scale agreement among many raters. *Psychological Bulletin*, 76(5), 378–382.
3. Landis, J. R., & Koch, G. G. (1977). The measurement of observer agreement for categorical data. *Biometrics*, 33(1), 159–174.
4. Montgomery, D. C. (2020). *Introduction to Statistical Quality Control* (8th ed.). Wiley.
5. Vanbelle, S., & Albert, A. (2024). Weighted kappa for ordinal rater agreement: A unified framework. *Statistical Methods in Medical Research*, 33(2), 412–430.
6. Zhang, Y., & Liu, H. (2025). Human-AI agreement validation in automated visual inspection using Fleiss’ kappa. *Journal of Manufacturing Systems*, 78, 215–228.