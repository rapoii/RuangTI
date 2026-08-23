# Module 263: Canonical Correlation Analysis (CCA) & Structural Equation Modeling (SEM-PLS) in Industrial Research

## Conceptual Framework

Industrial engineering research increasingly confronts multi-block data: sets of process/technology variables on one side and sets of performance or human-factor outcomes on the other. Two complementary techniques dominate this space. **Canonical Correlation Analysis (CCA)**, introduced by Hotelling (1936), constructs linear composites of two variable blocks that maximize their mutual correlation, exposing the dominant modes of co-variation between, for example, workplace climate dimensions and operational performance indicators. **Partial Least Squares Structural Equation Modeling (PLS-SEM)** extends the logic to latent (unobserved) constructs measured by indicator batteries, estimating both a *measurement model* (how indicators reflect latent variables) and a *structural model* (causal-path network among latents).

Where covariance-based SEM (CB-SEM) requires multivariate normality, large samples, and correct global specification, PLS-SEM maximizes explained variance in endogenous constructs and remains robust for complex models, formative indicators, and small-to-medium samples — conditions typical of plant-level surveys and Industry 4.0 adoption studies.

## Mathematical Formulation

Given centered data blocks $\mathbf{X}\,(n\times p)$ and $\mathbf{Y}\,(n\times q)$ with covariance matrix $\boldsymbol{\Sigma}$ partitioned into blocks, CCA solves:

$$\max_{\mathbf{a}, \mathbf{b}} \; \rho = \dfrac{\mathbf{a}^T\boldsymbol{\Sigma}_{XY}\mathbf{b}}{\sqrt{\mathbf{a}^T\boldsymbol{\Sigma}_{XX}\mathbf{a}}\,\sqrt{\mathbf{b}^T\boldsymbol{\Sigma}_{YY}\mathbf{b}}}$$

The stationary solutions are eigensystems:

$$\boldsymbol{\Sigma}_{XY}\boldsymbol{\Sigma}_{YY}^{-1}\boldsymbol{\Sigma}_{YX}\,\mathbf{a} = \lambda^2\,\boldsymbol{\Sigma}_{XX}\,\mathbf{a}, \qquad \rho_i = \lambda_i$$

with significance of successive canonical variates tested through Wilks' lambda or Bartlett's chi-square approximation. PLS-SEM estimates the structural layer:

$$\boldsymbol{\eta} = \mathbf{B}\boldsymbol{\eta} + \boldsymbol{\Gamma}\boldsymbol{\xi} + \boldsymbol{\zeta}$$

where $\boldsymbol{\eta}$ are endogenous latents, $\boldsymbol{\zeta}$ disturbances, $\mathbf{B}$ the inner path matrix, and $\boldsymbol{\Gamma}$ outer effects of exogenous latents. Quality assessment uses composite reliability $\rho_c \geq 0.70$, convergent validity AVE $=\sum \lambda_i^2/n \geq 0.50$, discriminant validity HTMT $< 0.85$, explanatory power $R^2$, and predictive relevance via blindfolding:

$$Q^2 = 1 - \dfrac{\sum_e \text{SSE}_e}{\sum_e \text{SSO}_e} > 0$$

## Implementation Methodology

1. Specify construct architecture from theory (reflective vs formative indicators); justify sample adequacy ($n > 10\times$ max arrowheads).
2. Screen data for missingness, outliers, and common-method bias; standardize.
3. Run CCA as an exploratory bridge analysis between raw blocks; interpret canonical loadings and redundancy indices.
4. Estimate PLS-SEM (path weighting scheme, 10k bootstrap resamples); evaluate measurement quality before interpreting structural paths.
5. Report effect sizes $f^2$, confidence intervals from percentile bootstrap, and validate out-of-sample via PLSpredict.

## Industrial Applications & Case Evidence

A national study across 32 automotive assembly plants modeled paths from Safety Leadership → Quality Climate → OEE using PLS-SEM, showing safety climate exerts a significant indirect effect on equipment effectiveness mediated by quality culture — quantifying the often-asserted safety–productivity synergy. CCA applications include linking shop-floor technology stacks to delivery KPIs, ergonomics bundles to musculoskeletal outcomes, and supplier development activities to buyer performance panels.

## Related Modules

Module 262 (Definitive Screening Designs for controlled experiments), Module 264 (Advanced Process Capability), Module 275 (HIRADC risk assessment), Module 298 (TQM & Sustainability), Module 299 (Integrated Management Systems).

## References

1. Hair, J. F., Hult, G. T. M., Ringle, C. M., & Sarstedt, M. (2022). *A Primer on Partial Least Squares Structural Equation Modeling (PLS-SEM)* (3rd ed.). SAGE.
2. Hotelling, H. (1936). Relations between two sets of variates. *Biometrika*, 28(3/4), 321–377.
3. Hair, J. F., Risher, J. J., Sarstedt, M., & Ringle, C. M. (2019). When to use and how to report the results of PLS-SEM. *European Business Review*, 31(1), 2–24.
4. Journal of Operations Management (2024).
