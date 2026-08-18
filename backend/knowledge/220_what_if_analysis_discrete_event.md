# 220 - What-If Analysis: Discrete Event Simulation

## Overview

What-if analysis in discrete event simulation (DES) is the systematic exploration of alternative system configurations, policies, and scenarios to understand their impact on performance metrics before implementation. Unlike optimization which seeks a single best solution, what-if analysis supports decision-making under uncertainty by comparing multiple plausible futures. This technique is fundamental in manufacturing capacity planning, healthcare resource allocation, supply chain resilience testing, and service system design where stakeholders need to evaluate trade-offs across competing objectives.

## Conceptual Framework

### Scenario Definition

A scenario $S_j$ is defined as a vector of input parameters:

$$
S_j = \{x_1^{(j)}, x_2^{(j)}, \ldots, x_k^{(j)}\}
$$

where each $x_i$ represents a controllable decision variable (e.g., number of servers, buffer size, scheduling rule). The simulation model maps scenarios to output performance measures:

$$
\mathbf{Y}(S_j) = \{Y_1(S_j), Y_2(S_j), \ldots, Y_m(S_j)\}
$$

with stochastic outputs requiring replication for statistical comparison.

### Types of What-If Questions

1. **Predictive**: "What happens if we add a third shift?" → Single scenario evaluation
2. **Comparative**: "Which layout minimizes WIP?" → Multi-scenario ranking
3. **Threshold**: "How many nurses needed to keep wait < 15 min?" → Inverse search
4. **Robustness**: "Does this policy work under demand surge?" → Stress testing
5. **Contingency**: "If supplier A fails, can B absorb volume?" → Disruption analysis

## Experimental Design for What-If Analysis

### Factorial Screening

For initial exploration with $k$ factors at 2 levels, use $2^k$ or fractional factorial designs to identify influential factors efficiently. Main effects estimate average impact:

$$
\text{ME}_i = \bar{Y}(x_i = +1) - \bar{Y}(x_i = -1)
$$

Interaction effects reveal non-additive behavior critical for understanding system complexity.

### Space-Filling Designs

When factor ranges are continuous and nonlinear responses expected, Latin Hypercube Sampling (LHS) ensures uniform coverage:

$$
\text{Discrepancy}(D_n) = \sup_{R \subset [0,1]^k} \left| \frac{\#(D_n \cap R)}{n} - \text{Vol}(R) \right|
$$

Low-discrepancy sequences (Sobol, Halton) provide better space-filling than random LHS for high-dimensional problems.

### Adaptive Sampling

Sequentially allocate replications to promising or uncertain regions using Expected Improvement:

$$
EI(\mathbf{x}) = E[\max(f_{best} - Y(\mathbf{x}), 0) | \mathcal{D}_n]
$$

Gaussian process surrogates enable efficient interpolation between simulated scenarios, reducing total runs needed for comprehensive what-if coverage.

## Statistical Comparison Methods

### Common Random Numbers (CRN)

Use identical random streams across scenarios to induce positive correlation and reduce variance of differences:

$$
\text{Var}[Y_A - Y_B] = \text{Var}[Y_A] + \text{Var}[Y_B] - 2\text{Cov}[Y_A, Y_B]
$$

With CRN, $\text{Cov}[Y_A, Y_B] > 0$, yielding tighter confidence intervals for pairwise comparisons.

### Multiple Comparisons with the Best (MCB)

When comparing $k$ scenarios simultaneously, control family-wise error rate via Tukey-Kramer intervals:

$$
\mu_i - \mu_j \in (\bar{Y}_i - \bar{Y}_j) \pm q_{\alpha,k,\nu} \sqrt{\frac{MSE}{2}\left(\frac{1}{n_i} + \frac{1}{n_j}\right)}
$$

where $q_{\alpha,k,\nu}$ is the studentized range quantile. MCB identifies subsets statistically indistinguishable from the observed best.

### Ranking and Selection Procedures

Indifference-zone procedures guarantee probability of correct selection $P(CS) \geq P^*$ when true best exceeds others by $\delta^*$:

$$
n \geq \left( \frac{h \sigma}{\delta^*} \right)^2
$$

where $h$ depends on $k$, $P^*$, and variance configuration. Rinott's two-stage procedure is standard for DES applications.

## Visualization and Communication

### Tornado Diagrams

Rank-order sensitivity display showing impact of each factor on key output. Bars extend proportionally to main effect magnitude, enabling quick identification of leverage points for stakeholder discussion.

### Pareto Frontiers

For multi-objective what-if analysis, plot non-dominated solutions in objective space:

$$
S_a \prec S_b \iff \forall i: Y_i(S_a) \leq Y_i(S_b) \land \exists j: Y_j(S_a) < Y_j(S_b)
$$

Interactive frontiers allow stakeholders to explore trade-offs between cost, throughput, quality, and risk dimensions.

### Scenario Narratives

Translate technical parameter vectors into business-language stories: "High-demand + staff shortage + equipment failure" enables executive engagement beyond raw numbers. Link narratives to quantitative results via dashboards.

## Modern Advances (2023–2026)

### Digital Twin Integration

Real-time data feeds update simulation base state, enabling what-if analysis anchored to current system status rather than steady-state assumptions. IoT sensor fusion reduces initialization bias and improves scenario relevance.

### Large Language Model Interfaces

Natural language query interfaces ("What if we double weekend staffing?") translate to parameter changes automatically, democratizing what-if analysis beyond simulation specialists. Guardrails prevent invalid configurations.

### Cloud-Native Parallel Execution

Serverless architectures enable massive parallel scenario evaluation (1000+ scenarios/hour) with auto-scaling. Cost-per-scenario drops below $0.01, making exhaustive exploration feasible for tactical decisions.

## Applications in Industrial Engineering

- **Manufacturing**: Line balancing alternatives, maintenance policy comparison, new product introduction impact
- **Healthcare**: ED staffing scenarios, pandemic surge capacity, OR block scheduling
- **Logistics**: Network redesign, cross-docking vs. warehousing, last-mile delivery options
- **Energy**: Grid expansion scenarios, renewable integration, storage sizing
- **Finance**: Portfolio stress testing, credit policy changes, fraud detection thresholds

## Software Implementation

```python
import numpy as np
from scipy.stats import t, sem

def compare_scenarios(results_a, results_b, alpha=0.05):
    """Paired comparison with CRN."""
    diffs = np.array(results_a) - np.array(results_b)
    mean_diff = np.mean(diffs)
    se_diff = sem(diffs)
    df = len(diffs) - 1
    ci = t.interval(1-alpha, df, loc=mean_diff, scale=se_diff)
    return {"mean_diff": mean_diff, "ci_95": ci, "significant": ci[0] > 0 or ci[1] < 0}

# Example: Compare 5 staffing scenarios
scenarios = {f"S{i}": simulate(staff=i) for i in range(3,8)}
for name, data in scenarios.items():
    print(f"{name}: throughput={np.mean(data['tp']):.1f} ± {sem(data['tp'])*1.96:.1f}")
```

## References

- Banks, J., Carson, J. S., Nelson, B. L., & Nicol, D. M. (2024). *Discrete-Event System Simulation* (6th ed.). Pearson.
- Law, A. M. (2024). *Simulation Modeling and Analysis* (6th ed.). McGraw-Hill Education.
- Goldsman, D., & Nelson, B. L. (2023). *Stochastic Simulation: Fundamentals and Practice*. CRC Press.
- Chen, X., Li, Y., & Wang, Z. (2025). Digital twin-enabled what-if analysis for smart manufacturing systems. *Journal of Manufacturing Systems*, 81, 234-249.
- Barton, R. R., & Meckesheimer, M. (2024). Metamodel-based simulation optimization and what-if analysis. *INFORMS Journal on Computing*, 36(2), 567-585.

</parameter>