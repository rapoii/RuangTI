# Module 278: Fatality & Negligibility — F-N Curves in Risk Assessment

## Overview

F-N curves (Frequency-Number curves) are graphical representations used in Quantitative Risk Assessment (QRA) to evaluate societal risk by plotting the cumulative frequency of accidents against the number of fatalities. Unlike Individual Risk (IR), which assesses risk to a single person at a specific location, F-N curves capture the potential for catastrophic events affecting multiple people simultaneously. This module covers the mathematical foundations, regulatory criteria, ALARP framework integration, and modern extensions of F-N analysis in industrial engineering and process safety.

## Mathematical Foundation of F-N Curves

### Definition and Construction

The F-N curve represents the complementary cumulative distribution function (CCDF) of accident consequences:

$$
F(N) = \sum_{i: n_i \geq N} f_i
$$

Where $F(N)$ is the cumulative frequency of accidents causing $N$ or more fatalities, $f_i$ is the frequency of accident scenario $i$, and $n_i$ is the number of fatalities in scenario $i$. The curve is typically plotted on log-log axes with frequency (events/year) on the y-axis and number of fatalities on the x-axis.

### Societal Risk Calculation

Total societal risk can be quantified as the area under the F-N curve:

$$
R_{\text{societal}} = \int_{0}^{\infty} F(N) \, dN \approx \sum_{i} f_i \cdot n_i
$$

This integral equals the expected value of fatalities per year, also known as the Potential Loss of Life (PLL):

$$
PLL = E[N] = \sum_{i=1}^{k} f_i \cdot n_i
$$

However, PLL alone fails to distinguish between frequent small accidents and rare catastrophes, which is precisely why F-N curves are necessary—they preserve the distribution shape that scalar metrics obscure.

### Risk Aversion Weighting

Many regulatory frameworks apply risk aversion weighting to penalize high-consequence events disproportionately:

$$
R_{\text{weighted}} = \sum_{i=1}^{k} f_i \cdot n_i^{\alpha}
$$

Where $\alpha > 1$ represents the degree of risk aversion. Common values include $\alpha = 1$ (risk-neutral), $\alpha = 1.5$ (moderate aversion), and $\alpha = 2$ (strong aversion). The choice of $\alpha$ reflects societal preferences regarding catastrophe avoidance versus total expected loss minimization.

## Regulatory Criteria and Tolerability Limits

### Historical Development

F-N criteria originated from the 1974 Flixborough disaster inquiry and were formalized by the UK Health and Safety Executive (HSE) in the "Tolerability of Risk" framework (1988, revised 2001). Key milestones include:

- **Netherlands (1985)**: First national F-N criterion for hazardous installations near residential areas
- **UK HSE (1988/2001)**: Two-line criterion defining intolerable, ALARP, and broadly acceptable regions
- **Australia (2006)**: ANCOLD guidelines extending F-N to dam safety and mining
- **ISO 31010 (2019)**: Formal recognition of F-N as standard risk assessment technique

### UK HSE Criterion Structure

The canonical two-line F-N criterion defines three regions:

**Intolerable Region** (above upper line):
$$
F(N) > 10^{-4} \cdot N^{-1} \quad \text{for } N < 50
$$
$$
F(N) > 2 \times 10^{-6} \quad \text{for } N \geq 50
$$

**Broadly Acceptable Region** (below lower line):
$$
F(N) < 10^{-6} \cdot N^{-1} \quad \text{for all } N
$$

**ALARP Region** (between lines): Risk must be reduced As Low As Reasonably Practicable, requiring cost-benefit demonstration using the disproportion factor.

### International Variations

Different jurisdictions adopt varying slopes and intercepts reflecting local risk tolerance:

| Jurisdiction | Slope | Intercept | Application Domain |
|--------------|-------|-----------|-------------------|
| UK HSE | -1 | $10^{-4}$ | Major hazard installations |
| Netherlands | -2 | $10^{-5}$ | External safety zoning |
| Hong Kong EPD | -1 | $10^{-4}$ | Land use planning |
| Australia ANCOLD | -1 | $10^{-4}$ | Dam safety |
| US DOE | -1 | $10^{-4}$ | Nuclear facilities |

The steeper Dutch slope (-2) indicates stronger risk aversion to catastrophes compared to the UK's linear (-1) approach.

## ALARP Framework Integration

### Disproportion Factor Analysis

Within the ALARP region, risk reduction measures are evaluated using the disproportion factor:

$$
DF = \frac{C}{\Delta R \cdot V_{\text{life}}}
$$

Where $C$ is the cost of the measure, $\Delta R$ is the risk reduction achieved, and $V_{\text{life}}$ is the value of preventing a fatality (VPF). Measures with $DF < 1$ are generally considered reasonably practicable; those with $DF > 10$ may be deemed disproportionate unless other factors justify implementation.

### Gross Disproportion Test

Courts and regulators interpret ALARP through the gross disproportion principle established in *Edwards v. National Coal Board* (1949): the sacrifice (cost) must be grossly disproportionate to the benefit before a measure can be rejected. This legal standard means the burden of proof lies with the duty holder to demonstrate that further risk reduction is not reasonably practicable.

## Advanced Applications and Extensions

### Time-Varying F-N Curves

Dynamic F-N analysis accounts for temporal changes in population density, operational modes, and mitigation system degradation:

$$
F(N, t) = \sum_{i} f_i(t) \cdot P(n_i \geq N | t)
$$

This extension is critical for facilities undergoing expansion, aging infrastructure assessment, and emergency evacuation modeling where exposure varies diurnally or seasonally.

### Multi-Attribute Consequence Metrics

Modern extensions incorporate non-fatality consequences into F-N-style analysis:

$$
F(C) = \sum_{i: c_i \geq C} f_i
$$

Where $C$ may represent economic loss, environmental damage, or combined severity indices. This generalization enables unified risk comparison across diverse consequence types relevant to industrial engineering decision-making.

### Bayesian Updating of F-N Curves

Sparse data challenges in low-frequency/high-consequence domains motivate Bayesian approaches:

$$
p(\lambda | \text{data}) \propto L(\text{data} | \lambda) \cdot p_0(\lambda)
$$

Prior distributions encode expert judgment and historical analogs, while likelihood functions incorporate site-specific incident data. Posterior F-N curves provide credible intervals reflecting epistemic uncertainty, essential for defensible regulatory submissions.

## Implementation Best Practices

### Data Quality Requirements
- Minimum 10 independent scenarios spanning 3+ orders of magnitude in frequency
- Consequence modeling validated against benchmark cases (e.g., PHAST, SAFETI)
- Frequency estimates derived from fault trees/event trees with documented assumptions
- Sensitivity analysis on key parameters (ignition probability, wind speed, occupancy)

### Common Pitfalls
- Truncating the curve below regulatory thresholds without justification
- Ignoring dependent failures and common cause events in frequency estimation
- Using generic failure rates without plant-specific calibration
- Presenting point estimates without uncertainty bounds
- Confusing individual risk contours with societal F-N criteria

## References

1. HSE. (2001). *Reducing Risks, Protecting People: HSE's Decision-Making Process*. UK Health and Safety Executive.
2. CCPS. (2023). *Guidelines for Chemical Process Quantitative Risk Analysis* (3rd ed.). Wiley-AIChE.
3. Jonkman, S. N., van Gelder, P. H. A. J. M., & Vrijling, J. K. (2023). An overview of quantitative risk measures for loss of life and economic damage. *Journal of Hazardous Materials*, 264, 1–15.
4. ISO. (2019). *ISO 31010:2019 Risk management — Risk assessment techniques*. International Organization for Standardization.
5. Ale, B. J. M., Baksteen, H., Bellamy, L. J., Bloemhof, A., Goossens, L., Hourston, A., ... & Whiston, J. Y. (2024). Quantifying societal risk: Developments since the Canvey Island report. *Reliability Engineering & System Safety*, 241, 109612.
6. Khakzad, N., & Reniers, G. (2024). Dynamic societal risk assessment considering time-dependent vulnerability and exposure. *Process Safety and Environmental Protection*, 182, 345–360.

</content>