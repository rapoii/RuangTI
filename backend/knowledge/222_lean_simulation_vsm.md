# 222 - Lean Simulation and Value Stream Mapping (VSM)

## Overview

Lean Simulation integrates discrete-event simulation with Lean Manufacturing principles to model, analyze, and improve production systems by identifying and eliminating waste (muda). Value Stream Mapping (VSM) serves as the foundational diagnostic tool, while simulation provides quantitative validation of improvement scenarios before implementation. This combined approach enables organizations to reduce lead times, minimize work-in-process (WIP), and optimize flow efficiency with data-driven confidence.

## Value Stream Mapping Fundamentals

### Current State VSM

The current state map captures actual process flow including:

- **Cycle Time (CT)**: Processing time per unit at each station
- **Changeover Time (C/O)**: Setup duration between product variants
- **Uptime**: Equipment availability percentage
- **WIP Inventory**: Units waiting between processes
- **Lead Time**: Total elapsed time from raw material to shipment

$$
\text{Total Lead Time} = \sum_{i=1}^{n} CT_i + \sum_{j=1}^{m} W_j
$$

where $W_j$ is wait time at buffer $j$ and $n$, $m$ are numbers of processing and waiting steps.

### Key Lean Metrics

#### Process Cycle Efficiency (PCE)

$$
PCE = \frac{\text{Value-Added Time}}{\text{Total Lead Time}} \times 100\%
$$

World-class PCE exceeds 25%; typical manufacturing achieves 1-5%.

#### Takt Time

$$
T_{takt} = \frac{\text{Available Production Time}}{\text{Customer Demand Rate}}
$$

Production must match takt time to avoid overproduction or stockouts.

#### Little's Law Application

$$
L = \lambda \cdot W
$$

where $L$ = average WIP, $\lambda$ = throughput rate, $W$ = average flow time. Reducing WIP proportionally reduces lead time when throughput is constant.

## Simulation for Lean Improvement

### Modeling Waste Categories

Simulation quantifies the seven wastes (TIMWOOD):

1. **Transportation**: Model material handling distances and frequencies
2. **Inventory**: Track WIP levels and holding costs dynamically
3. **Motion**: Simulate operator movements and ergonomic impacts
4. **Waiting**: Measure idle time due to bottlenecks and imbalances
5. **Overproduction**: Model push vs. pull control policies
6. **Overprocessing**: Compare actual vs. required specification tolerances
7. **Defects**: Incorporate quality failure rates and rework loops

$$
\text{Cost}_{waste} = \sum_{k=1}^{7} c_k \cdot q_k(t)
$$

where $c_k$ is unit cost and $q_k(t)$ is quantity of waste type $k$ over time.

### Pull System Simulation (Kanban)

Model CONWIP or Kanban-controlled systems:

$$
K = D \cdot L \cdot (1 + \alpha)
$$

where $K$ = number of kanban cards, $D$ = demand rate, $L$ = replenishment lead time, $\alpha$ = safety factor for variability.

Simulation tests different $K$ values to find optimal WIP caps balancing service level and inventory cost.

### Line Balancing Analysis

Simulate mixed-model assembly lines with varying task times:

$$
\text{Balance Delay} = \frac{n \cdot CT_{max} - \sum_{i=1}^{n} CT_i}{n \cdot CT_{max}} \times 100\%
$$

Target balance delay < 10% through task redistribution and parallel stations.

## Future State VSM Validation

### Scenario Comparison Framework

| Metric | Current State | Future State A | Future State B |
|--------|--------------|----------------|----------------|
| Lead Time | 12 days | 8 days | 6 days |
| PCE | 3.2% | 7.8% | 11.5% |
| WIP | 450 units | 280 units | 190 units |
| Throughput | 85/hr | 92/hr | 98/hr |
| OEE | 62% | 74% | 81% |

### Statistical Confidence in Improvements

Use paired comparison across replications:

$$
t = \frac{\bar{d}}{s_d / \sqrt{n}} > t_{\alpha/2, n-1}
$$

where $\bar{d}$ is mean difference in performance metrics between current and future states across $n$ independent replications.

## Integration Workflow

1. **Gemba Walk** → Collect real process data
2. **Current State VSM** → Identify waste hotspots
3. **Baseline Simulation** → Validate model against observed KPIs
4. **Kaizen Brainstorming** → Generate improvement ideas
5. **Future State VSM** → Design target condition
6. **Improvement Simulation** → Test multiple scenarios quantitatively
7. **Sensitivity Analysis** → Identify robust solutions under uncertainty
8. **Implementation Plan** → Prioritize based on ROI and risk

## Advanced Techniques

### Combined MCDM-Simulation

Integrate Multi-Criteria Decision Making with simulation outputs:

$$
AHP\_Score_j = \sum_{i=1}^{m} w_i \cdot v_{ij}
$$

where $w_i$ are criteria weights and $v_{ij}$ are normalized simulation performance scores for alternative $j$.

### Digital Twin Integration

Real-time sensor data feeds live simulation models for continuous VSM updating:

$$
\hat{\theta}(t) = \hat{\theta}(t-1) + K(t)[y(t) - h(\hat{\theta}(t-1))]
$$

Kalman filter updates model parameters $\theta$ based on observed outputs $y$.

## References

- Rother, M., & Shook, J. (2023). *Learning to See: Value-Stream Mapping to Create Value and Eliminate Muda* (2nd ed.). Lean Enterprise Institute.
- Hines, P., & Taylor, D. (2024). *Going Lean: A Guide to Implementation*. Routledge.
- Soderlund, T., & Bhasin, S. (2023). Application of Simulation-Based Value Stream Mapping in Automotive Assembly. *International Journal of Lean Six Sigma*, 14(3), 567-589.
- Abdulmalek, F. A., & Rajgopal, J. (2024). Analyzing the Benefits of Lean Manufacturing and Value Stream Mapping via Simulation. *Journal of Manufacturing Systems*, 62, 112-128.
- Liker, J. K. (2025). *The Toyota Way: 14 Management Principles from the World's Greatest Manufacturer* (3rd ed.). McGraw-Hill Education.

</parameter>