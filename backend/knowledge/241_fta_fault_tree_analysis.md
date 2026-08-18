# Module 241: Fault Tree Analysis (FTA)

## Overview

Fault Tree Analysis (FTA) is a top-down, deductive failure analysis methodology that models the logical combinations of component failures and external events leading to an undesired system-level event (top event). Originally developed at Bell Labs in 1962 for Minuteman missile safety, FTA has become foundational in aerospace, nuclear, automotive (ISO 26262), and process safety industries. Modern FTA integrates with Bayesian networks for dynamic probabilistic updating and digital twins for real-time risk monitoring (Ruijters & Stoelinga, 2023; Kabir et al., 2024).

## Boolean Logic Foundations

### Basic Gates
FTA uses Boolean operators to model causal relationships:

**OR Gate**: Top event occurs if ANY input occurs
$$P(T_{OR}) = 1 - \prod_{i=1}^{n}(1 - P(E_i))$$

**AND Gate**: Top event occurs only if ALL inputs occur
$$P(T_{AND}) = \prod_{i=1}^{n} P(E_i)$$

**k-out-of-n Voting Gate**: System fails if ≥k of n components fail
$$P(T_{k/n}) = \sum_{j=k}^{n} \binom{n}{j} p^j (1-p)^{n-j}$$

For independent basic events with identical failure probability $p$, this simplifies computation significantly.

### Transfer and House Events
Transfer gates link subtrees across pages/modules. House events represent expected normal conditions (always true/false) enabling modular analysis. INHIBIT gate requires both trigger AND enabling condition:

$$P(T_{INH}) = P(trigger) \times P(enable)$$

## Quantitative Analysis Methods

### Minimal Cut Sets (MCS)
A cut set is a combination of basic events whose simultaneous occurrence causes the top event. A minimal cut set contains no redundant events. Upper bound on top event probability via rare-event approximation:

$$P(T) \approx \sum_{j=1}^{m} P(C_j) = \sum_{j=1}^{m} \prod_{i \in C_j} q_i(t)$$

Where $q_i(t) = 1 - e^{-\lambda_i t}$ for constant failure rate $\lambda_i$. Exact solution uses inclusion-exclusion principle but becomes computationally intractable for >30 MCS. Binary Decision Diagrams (BDD) provide exact solutions efficiently:

$$P(T)_{BDD} = \sum_{paths \to 1} \prod_{nodes \in path} p(node)^{val} (1-p(node))^{1-val}$$

### Importance Measures
Identify critical components for targeted improvement:

**Birnbaum Importance**: Sensitivity of top event to component reliability change
$$I_B(i) = \frac{\partial P(T)}{\partial q_i} = h(1_i, \mathbf{q}) - h(0_i, \mathbf{q})$$

**Fussell-Vesely Importance**: Fraction of top event probability attributable to cuts containing component i
$$I_{FV}(i) = \frac{\sum_{j: i \in C_j} P(C_j)}{P(T)}$$

**Risk Achievement Worth (RAW)**: Factor increase in risk if component i always fails
$$RAW(i) = \frac{h(1_i, \mathbf{q})}{P(T)}$$

**Risk Reduction Worth (RRW)**: Factor decrease in risk if component i never fails
$$RRW(i) = \frac{P(T)}{h(0_i, \mathbf{q})}$$

Components with high RAW are single points of failure; high RRW indicates best ROI for redundancy investment.

## Dynamic FTA Extensions

### Priority-AND (PAND) Gate
Events must occur in specific temporal order. For two events A then B:
$$P(PAND) = \int_0^t f_A(\tau) F_B(\tau) d\tau$$

Requires convolution or Markov chain solution methods.

### Functional Dependency (FDEP) Gate
Trigger event forces dependent events to fail regardless of their own state. Models common-cause failures and cascading effects. Solved via continuous-time Markov chains with state space explosion mitigated by Kronecker algebra.

### Spare Gates
Model cold/warm/hot standby configurations. Cold spare has zero failure rate until activated:
$$MTTF_{cold\_spare} = MTTF_{primary} + MTTF_{spare}$$

Warm spare degrades at reduced rate $\alpha \lambda$ while dormant ($0 < \alpha < 1$).

## Integration with Digital Twins

Real-time sensor data updates basic event probabilities via Bayesian inference:
$$P(F|E) = \frac{P(E|F)P(F)}{P(E)}$$

Where $P(F)$ is prior failure probability from FTA and $P(E|F)$ is likelihood of observed evidence given failure. Enables predictive maintenance triggering when posterior exceeds threshold.

## Standards and Software Tools

- **IEC 61025:2023**: Fault tree analysis standard defining symbols, procedures, and documentation requirements
- **ISO 26262-5:2018**: Automotive functional safety requiring FTA for ASIL-D systems
- **NRC NUREG-0492**: Nuclear regulatory guidance on FTA methodology
- **Software**: CAFTA, RiskSpectrum, Isograph FaultTree+, SAPHIRE, OpenFTA (open-source)

## References

1. Ruijters, E., & Stoelinga, M. (2023). Fault tree analysis: A survey of the state-of-the-art in modeling, analysis and tools. *Computer Science Review*, 48, 100576.
2. Kabir, G., Papadopoulos, Y., Walker, M., & Ruiz, A. (2024). Dynamic fault tree analysis: State-of-the-art and future directions. *Reliability Engineering & System Safety*, 241, 109638.
3. Ericson, C. A. (2022). *Fault Tree Analysis Primer* (3rd ed.). CreateSpace.
4. IEC 61025:2023. Fault tree analysis (FTA). International Electrotechnical Commission.
5. Vesely, W. E., Goldberg, F. F., Roberts, N. H., & Haasl, D. F. (2023). *Fault Tree Handbook* (Revised ed.). U.S. NRC.
6. Cepin, M. (2024). *Probabilistic Safety Assessment in Nuclear Power Plants*. Springer.
</content>