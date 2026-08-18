# Module 277: Quantitative Risk Assessment (QRA)

## Overview

Quantitative Risk Assessment (QRA) is a systematic methodology for numerically estimating the frequency and consequences of hazardous events to produce measurable risk metrics. Unlike qualitative or semi-quantitative approaches, QRA provides absolute risk values enabling comparison against regulatory tolerability criteria, cost-benefit analysis of safety investments, and optimization of risk reduction measures. In industrial engineering, QRA is essential for process industries (oil & gas, chemicals, pharmaceuticals), nuclear facilities, and major hazard installations governed by COMAH/Seveso directives.

## Fundamental Risk Metrics

### Individual Risk (IR)

Individual Risk quantifies the probability of fatality per year for a person at a specific location:

$$ IR(x,y) = \sum_{i=1}^{N} f_i \cdot P_f(x,y|i) $$

Where $f_i$ = frequency of accident scenario $i$, and $P_f(x,y|i)$ = conditional probability of fatality at location $(x,y)$ given scenario $i$. Typical tolerability limits:
- **Maximum Tolerable**: $1 \times 10^{-4}$/yr (workers), $1 \times 10^{-5}$/yr (public)
- **Broadly Acceptable**: $1 \times 10^{-6}$/yr

### Societal Risk

Societal Risk captures potential for multiple fatalities through F-N curves:

$$ F(N) = \sum_{j: N_j \geq N} f_j $$

Where $F(N)$ = cumulative frequency of accidents causing $N$ or more fatalities. Compared against ALARP region boundaries defined by regulators (e.g., HSE, EPA).

### Potential Loss of Life (PLL)

Aggregate risk metric for workforce or population:

$$ PLL = \sum_{k=1}^{M} IR_k \cdot t_k $$

Where $t_k$ = time fraction person $k$ spends at location. Used for overall facility risk benchmarking.

## QRA Methodology Framework

### Step 1: Hazard Identification & Scenario Development
Systematic identification using HAZOP, FMEA, and historical incident databases. Each credible release/ignition scenario is characterized by:
- Release source, size, duration, phase
- Dispersion conditions (weather, terrain)
- Ignition probabilities (immediate vs. delayed)
- Explosion/fire type selection (UVCE, BLEVE, pool fire, jet fire)

### Step 2: Frequency Estimation
Fault tree analysis combined with generic failure rate data:

$$ f_{scenario} = f_{initiating} \cdot \prod P(\text{enabling events}) \cdot \prod [1 - P(\text{prevention IPLs})] $$

Data sources include OREDA, CCPS Guidelines, E&P Forum, and plant-specific maintenance records. Bayesian updating incorporates operational experience:

$$ \lambda_{posterior} = \frac{\alpha + x}{\beta + T} $$

Where $\alpha, \beta$ = prior distribution parameters, $x$ = observed failures, $T$ = exposure time.

### Step 3: Consequence Modeling
Physics-based models calculate hazard zones:
- **Dispersion**: Gaussian plume/puff, dense gas (SLAB, DEGADIS), CFD for complex geometries
- **Thermal Radiation**: Point source, solid flame, view factor calculations
  $$ q'' = \frac{Q_r \cdot \tau}{4\pi r^2} \cdot F_v $$
- **Overpressure**: TNT equivalence, Baker-Strehlow-Tang (BST), multi-energy method
- **Toxic Exposure**: Probit models for probit-to-fatality conversion
  $$ Y = k_1 + k_2 \ln(C^n t) $$

### Step 4: Risk Integration & Presentation
Combining frequencies and consequences into contour maps, F-N plots, and tabular summaries. Uncertainty quantification via Monte Carlo simulation propagates parameter variability through the model chain.

## Software Tools & Standards

Industry-standard QRA platforms include:
- **DNV PHAST/SAFETI**: Integrated consequence and risk modeling
- **TNO EFFECTS/RISKCURVES**: Dutch standard methodology
- **Canary RISK**: Cloud-native QRA with API integration
- **Open-source alternatives**: ALOHA, RMP*Comp for screening-level assessments

Governing standards: ISO 31010 (risk assessment techniques), CCPS Guidelines for Chemical Process QRA (2nd ed.), API RP 752/753 for building siting.

## Recent Advances (2023-2026)

Dynamic QRA integrates real-time process data and barrier performance monitoring to update risk estimates continuously rather than relying on static annual snapshots. Research by Paltrinieri et al. (2024) demonstrated dynamic Bayesian network implementations reducing conservatism in LOPA credit factors by incorporating actual proof test results and inspection findings. Machine learning surrogates accelerate consequence modeling, enabling real-time risk dashboards for operator decision support during transient operations.

## Limitations & Best Practices

QRA outputs are only as reliable as input data and model assumptions. Key pitfalls include:
- Over-reliance on generic failure rates without site-specific calibration
- Neglecting human factors and organizational influences on barrier performance
- Insufficient treatment of dependent failures and common cause mechanisms
- Failure to communicate uncertainty ranges alongside point estimates

Best practice mandates peer review, sensitivity analysis, and validation against historical incident data where available.

## References

1. CCPS. (2023). *Guidelines for Chemical Process Quantitative Risk Analysis* (3rd ed.). Wiley-AIChE.
2. Paltrinieri, N., Khan, F., & Cozzani, V. (2024). Dynamic quantitative risk assessment: A decade of progress and future challenges. *Reliability Engineering & System Safety*, 241, 109638.
3. DNV. (2024). *PHAST & SAFETI Technical Reference Manual* (v8.12). DNV AS.
4. ISO. (2019). *ISO 31010:2019 Risk management — Risk assessment techniques*. International Organization for Standardization.
5. HSE. (2023). *Reducing Risks, Protecting People: HSE's Decision-Making Process*. UK Health and Safety Executive.
6. Khakzad, N., & Reniers, G. (2024). Advanced methods for domino effect analysis in chemical process plants. *Process Safety Progress*, 43(1), e12456.

</content>