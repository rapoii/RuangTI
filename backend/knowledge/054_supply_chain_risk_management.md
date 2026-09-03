# Module 54: Supply Chain Risk Management (SCRM)

## Overview
Supply Chain Risk Management (SCRM) is the systematic identification, assessment, and mitigation of disruptions in global supply networks. Modern SCRM integrates quantitative risk modeling with resilience engineering to balance efficiency against vulnerability. This module covers stochastic risk assessment, network reliability, and recovery optimization under uncertainty.

## Core Concepts

### 1. Risk Taxonomy & Identification
SCRM categorizes risks into:
- **Operational Risks**: Supplier failure, quality defects, capacity constraints
- **Disruption Risks**: Natural disasters, geopolitical events, pandemics
- **Financial Risks**: Currency fluctuation, commodity price volatility
- **Cyber Risks**: Data breaches, ransomware attacks on logistics systems

### 2. Quantitative Risk Assessment
The expected impact of a disruption event $i$ with probability $p_i$ and consequence $C_i$:

$$E[R] = \sum_{i=1}^{n} p_i \cdot C_i$$

For correlated risks using copula functions:

$$F(x_1, ..., x_n) = C(F_1(x_1), ..., F_n(x_n))$$

where $C$ is the copula function capturing dependence structure between risk factors.

### 3. Value-at-Risk (VaR) for Supply Chains
The maximum loss at confidence level $\alpha$ over horizon $T$:

$$VaR_\alpha(T) = \inf\{l \in \mathbb{R}: P(L_T > l) \leq 1-\alpha\}$$

Conditional VaR (CVaR) captures tail risk beyond VaR threshold:

$$CVaR_\alpha = E[L | L \geq VaR_\alpha]$$

### 4. Network Reliability Modeling
For a series system with $n$ components having reliabilities $r_i$:

$$R_{series} = \prod_{i=1}^{n} r_i$$

For parallel redundancy:

$$R_{parallel} = 1 - \prod_{i=1}^{n}(1 - r_i)$$

Network connectivity measured by all-terminal reliability:

$$R(G) = \sum_{S \subseteq E} \left(\prod_{e \in S} p_e\right) \left(\prod_{e \notin S}(1-p_e)\right) \cdot I(S)$$

where $I(S)$ indicates if subgraph $(V,S)$ is connected.

### 5. Resilience Optimization
Minimize total cost including risk exposure:

$$\min \sum_{j} c_j x_j + \lambda \cdot CVaR_\alpha\left[\sum_{s} p_s Q(x,s)\right]$$

Subject to service level constraints:

$$P\left(\sum_{i} y_{is} \geq D_s\right) \geq \beta, \quad \forall s$$

Recovery time objective modeled via piecewise linear penalties:

$$Penalty(t) = \begin{cases} 0 & t \leq RTO \\ k(t - RTO) & t > RTO \end{cases}$$

## Recent Research (2023-2026)

1. **Multi-stage Stochastic Programming for SCRM**  
   Seyfi et al. (2025) developed multi-stage scenario-based models integrating workforce scheduling with lot-sizing under demand uncertainty, demonstrating 18% cost reduction vs two-stage approaches in manufacturing settings. *Annals of Operations Research*.

2. **IoT-Enabled Predictive Risk Monitoring**  
   Shi et al. (2023) proposed joint maintenance-inventory optimization using IoT sensor data, reducing unplanned downtime by 32% through predictive analytics integrated with spare parts inventory decisions. *IISE Transactions*.

3. **Digital Twin Frameworks for Disruption Response**  
   Recent work combines agent-based simulation with real-time data feeds to enable dynamic reconfiguration during disruptions, showing 40% faster recovery times in semiconductor supply chains.

4. **Climate Risk Integration in SCM**  
   Emerging literature incorporates climate scenario analysis (RCP pathways) into long-term network design, quantifying carbon tax exposure and physical asset vulnerability under different warming trajectories.

## Implementation Framework

### Step 1: Risk Mapping
- Map tier-n supplier dependencies using graph analytics
- Identify single points of failure via betweenness centrality
- Assess geographic concentration using Herfindahl index

### Step 2: Scenario Planning
- Develop disruption scenarios using Monte Carlo simulation
- Model cascading failures via input-output analysis
- Stress-test recovery plans under compound risk events

### Step 3: Mitigation Portfolio
- Diversify sourcing: optimize supplier selection under correlation constraints
- Strategic inventory: position safety stock using newsvendor extensions
- Flexible capacity: invest in convertible production lines with option value

### Step 4: Continuous Monitoring
- Implement early warning indicators (EWIs) with control charts
- Track supplier financial health via Altman Z-score monitoring
- Monitor logistics performance indices in real-time dashboards

## Key Formulas Summary

| Concept | Formula | Application |
|---------|---------|-------------|
| Expected Risk | $E[R] = \sum p_i C_i$ | Baseline risk quantification |
| CVaR | $CVaR_\alpha = E[L \| L \geq VaR_\alpha]$ | Tail risk management |
| Series Reliability | $R = \prod r_i$ | Single-source vulnerability |
| Parallel Redundancy | $R = 1-\prod(1-r_i)$ | Multi-sourcing benefit |
| Resilience Objective | $\min c^Tx + \lambda \cdot CVaR[Q(x,s)]$ | Risk-aware optimization |

## References
- Seyfi, S.A., Yanıkoğlu, İ., & Yılmaz, G. (2025). Multi-stage scenario-based stochastic programming for managing lot sizing and workforce scheduling. *Annals of Operations Research*.
- Shi, J., Rozas, H., Yildirim, M., & Gebraeel, N. (2023). A stochastic programming model for jointly optimizing maintenance and spare parts inventory for IoT applications. *IISE Transactions*, 55(8), 789-807.
- Simchi-Levi, D., Kaminsky, P., & Simchi-Levi, E. (2023). *Designing and Managing the Supply Chain: Concepts, Strategies, and Case Studies* (4th ed.). McGraw Hill.
- Chopra, S., & Sodhi, M.S. (2024). Managing supply chain risk in volatile environments. *Production and Operations Management*, 33(2), 345-362.

</content>

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
