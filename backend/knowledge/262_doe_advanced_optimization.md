# Module 262: Definitive Screening Designs (DSD) & Non-Linear Factorial Optimization in R&D

## Conceptual Framework

Definitive Screening Designs, introduced by Jones & Nachtsheim (2011), fill the gap between two-level screening fractions (which cannot detect curvature) and full second-order response surface designs (which demand prohibitive run counts when many factors matter). A DSD uses only three levels and $2k+1$ runs for $k$ continuous factors — roughly half the runs of a central composite design — yet delivers screening and curvature detection simultaneously:

- every main effect is **orthogonal** to all other main effects,
- every main effect is **uncorrelated with all two-factor interactions and all quadratic terms**, so main-effect estimates remain unbiased even under strong second-order contamination,
- every quadratic effect for a factor whose linear term is inactive can be estimated free of interaction aliasing, enabling immediate identification of optima locations without a follow-up CCD.

Each interior foldover pair of runs sits mirrored about the center point, which produces the orthogonality structure; one or more center runs supply pure-error estimates. Extensions accommodate added two-level categorical factors (Jones & Nachtsheim, 2013), blocked structures, and Definitive Screening via computer-generated balanced designs for mixed continuous–discrete spaces typical of modern DoE software.

## Mathematical Formulation

Run count and model capacity:

$$N_{\text{runs}} = 2k + 1, \quad k = \text{number of numeric factors}$$

The full second-order model entertained after screening:

$$y = \beta_0 + \sum_{i=1}^{k}\beta_i x_i + \sum_{i=1}^{k}\beta_{ii}x_i^2 + \sum_{i<j}\beta_{ij}x_ix_j + \varepsilon$$

DSD orthogonality guarantees zero covariance among estimable contrast blocks:

$$\text{Cov}(\hat{\beta}_i, \hat{\beta}_{j}) = 0,\quad \text{Cov}(\hat{\beta}_i, \hat{\beta}_{jj}) = 0,\quad \text{Cov}(\hat{\beta}_i, \hat{\beta}_{jk}) = 0$$

Because columns are correlated only within blocks, analysis proceeds by forward-selection regression guided by effect heredity (a quadratic or interaction term enters only if its parent main effect is active), followed by model validation and steepest-ascent or numerical optimization of the fitted surface $\hat{y}(\mathbf{x})$. For $k=6$, a 13-run DSD screens 6 mains, 6 quadratics, and 15 interactions — 27 candidate effects from 13 observations — illustrating the design's economy versus a rotatable CCD requiring roughly 7× more runs at comparable resolution.

## Implementation Methodology

1. List factors; reserve resources for ≥3 replicate center points to separate curvature from noise.
2. Generate the DSD (standard construction or algorithmic for categorical/blocked variants); randomize run order.
3. Execute; fit main-effects-only first, test curvature globally before entertaining quadratics.
4. Apply forward selection with heredity constraints; confirm active effects with follow-up axial or foldover runs if resolution is marginal.
5. Optimize the reduced second-order model; validate predictions with confirmation experiments at the stationary point.

## Industrial Applications & Case Evidence

Precision injection molding of optical-grade polycarbonate parts screened eight process parameters — melt temperature, injection pressure, packing pressure, cooling time, screw speed, back pressure, mold temperature, holding time — in just 17 trials, isolating two significant quadratics (packing pressure², melt temperature²) and locating the warpage-minimizing window directly. Comparable use cases span wet-etch recipe development in MEMS, bioreactor media optimization, welding parameter qualification, and chemical yield ramp-up where early-run economics dominate.

## Related Modules

Module 260 (Statistical Tolerance Stack-Up), Module 256 (Design for Six Sigma DFSS IDOV), Module 261 (Mixture Experiments — complementary when factors are proportions), Module 263 (CCA/SEM for observational multivariate data).

## References

1. Jones, B., & Nachtsheim, C. J. (2011). A class of three-level designs for definitive screening in the presence of second-order effects. *Journal of Quality Technology*, 43(1), 1–15.
2. Jones, B., & Nachtsheim, C. J. (2013). Definitive screening designs with added two-level categorical factors. *Journal of Quality Technology*, 45(2), 121–129.
3. Montgomery, D. C. (2020). *Design and Analysis of Experiments* (10th ed.). Wiley.
4. Quality Engineering (2023).

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
