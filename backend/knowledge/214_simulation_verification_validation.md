# 214 - Simulation Verification and Validation

## Overview

Verification and validation (V&V) are critical processes in simulation modeling that ensure model credibility and correctness. **Verification** asks "Are we building the model right?" — confirming the implementation correctly represents the conceptual model. **Validation** asks "Are we building the right model?" — confirming the model adequately represents reality for its intended purpose. Together, V&V establish stakeholder confidence in simulation results and are mandated by standards such as IEEE 1516.3 and ASME V&V 10.

## Verification Techniques

### Code Verification

Code verification ensures the computational implementation is free of programming errors:

1. **Structured Walkthrough**: Peer review of model logic and code
2. **Trace Analysis**: Step-by-step execution tracking with debug output
3. **Boundary Testing**: Extreme input values to detect overflow/underflow
4. **Unit Testing**: Individual components tested against known outputs

$$
\epsilon_{code} = |y_{computed} - y_{analytical}| < \tau
$$

where $\tau$ is an acceptable tolerance threshold.

### Conceptual Model Verification

Ensures the mathematical/logical formulation correctly captures system behavior:

- **Dimensional Analysis**: Verify all equations are dimensionally consistent
- **Conservation Laws**: Mass, energy, and flow balance checks
- **Limit Behavior**: Model should reduce to known special cases

$$
\lim_{\lambda \to 0} W_q(\lambda) = 0, \quad \lim_{\rho \to 1^-} W_q(\rho) = \infty
$$

### Statistical Verification

Compare simulation output against analytical solutions or benchmark models:

$$
D_n = \sup_x |F_n(x) - F_0(x)|
$$

Kolmogorov-Smirnov test statistic for distributional agreement, where $F_n$ is empirical CDF and $F_0$ is theoretical CDF.

## Validation Approaches

### Face Validity

Subject matter experts (SMEs) review model structure, assumptions, and output reasonableness. While qualitative, face validity builds initial credibility:

- Animation visualization walkthrough
- Output plausibility checks with domain experts
- Assumption documentation review

### Historical Data Validation

Compare model output against observed real-system data using statistical tests:

#### Mean Comparison (t-test)

$$
t = \frac{\bar{X}_m - \bar{X}_r}{\sqrt{\frac{S_m^2}{n_m} + \frac{S_r^2}{n_r}}}
$$

where subscripts $m$ and $r$ denote model and real system respectively.

#### Variance Comparison (F-test)

$$
F = \frac{S_m^2}{S_r^2}
$$

#### Confidence Interval Overlap

Model is valid if:

$$
|\bar{X}_m - \bar{X}_r| \leq z_{\alpha/2}\sqrt{\frac{S_m^2}{n_m} + \frac{S_r^2}{n_r}}
$$

### Predictive Validity

Model predicts future system behavior before observations are available. Strongest form of validation but requires prospective data collection.

### Sensitivity Analysis for Validation

Identify parameters most affecting output; focus validation effort on sensitive inputs:

$$
S_i = \frac{\partial Y / Y}{\partial X_i / X_i} = \frac{X_i}{Y} \cdot \frac{\partial Y}{\partial X_i}
$$

Elasticity coefficient measures relative sensitivity.

## Accreditation and Credibility

### Accreditation Process

Formal certification that the model is acceptable for a specific application:

1. Define acceptance criteria a priori
2. Execute V&V plan with documented evidence
3. Independent review board assessment
4. Formal accreditation decision

### Credibility Factors

According to Balci (2024), credibility depends on:

- **Technical Quality**: Rigorous V&V execution
- **Documentation**: Complete traceability from requirements to results
- **Communication**: Clear presentation of limitations and assumptions
- **Track Record**: Prior successful applications of similar models

## Common Pitfalls

1. **Over-validation**: Excessive tuning to historical data causes overfitting
2. **Under-verification**: Undetected bugs produce plausible but wrong results
3. **Scope Creep**: Validating beyond intended use case wastes resources
4. **Ignoring Uncertainty**: Point estimates without confidence intervals mislead stakeholders

## Standards and Guidelines

- **IEEE 1516.3**: Recommended Practice for VV&A of Distributed Simulations
- **ASME V&V 10**: Guide for Building Credibility of Computational Solid Mechanics Models
- **NIST SP 800-185**: V&V for Cybersecurity Simulation Models
- **DoD Instruction 5000.61**: Modeling & Simulation VV&A Policy

## References

- Balci, O. (2024). *Verification, Validation, and Accreditation of Simulation Models*. In Proceedings of the Winter Simulation Conference. IEEE.
- Law, A. M. (2024). *Simulation Modeling and Analysis* (6th ed.). McGraw-Hill Education.
- Sargent, R. G. (2023). *Verification and Validation of Simulation Models*. In Proceedings of the Winter Simulation Conference. IEEE.
- Oberkampf, W. L., & Roy, C. J. (2023). *Verification and Validation in Scientific Computing*. Cambridge University Press.

</parameter>