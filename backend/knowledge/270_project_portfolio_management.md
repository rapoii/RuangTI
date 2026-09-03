# Module 270: Project Portfolio Management (PPM)

## Overview

Project Portfolio Management (PPM) is the centralized management of one or more portfolios to achieve strategic objectives. Unlike individual project management, PPM focuses on selecting the right projects, prioritizing resources across competing initiatives, and maximizing aggregate value delivery. In industrial engineering contexts, PPM aligns capital investments, R&D programs, and operational improvements with organizational strategy under budget, resource, and risk constraints.

## Portfolio Selection Models

### Scoring Models

Scoring models evaluate projects against weighted criteria:

$$
S_j = \sum_{i=1}^{n} w_i \cdot r_{ij}
$$

Where $S_j$ = total score for project $j$, $w_i$ = weight of criterion $i$ ($\sum w_i = 1$), and $r_{ij}$ = rating of project $j$ on criterion $i$. Common criteria include strategic alignment, financial return, technical feasibility, regulatory compliance, and risk level.

### Financial Models

Portfolio selection incorporates financial metrics:

$$
NPV = \sum_{t=0}^{T} \frac{CF_t}{(1+r)^t}
$$

$$
IRR: \sum_{t=0}^{T} \frac{CF_t}{(1+IRR)^t} = 0
$$

$$
PI = \frac{\sum_{t=1}^{T} \frac{CF_t}{(1+r)^t}}{I_0}
$$

Where $CF_t$ = cash flow at period $t$, $r$ = discount rate, $I_0$ = initial investment. The Profitability Index (PI) enables ranking when capital is constrained.

### Optimization-Based Selection

Mathematical programming optimizes portfolio composition:

$$
\max \sum_{j=1}^{N} v_j x_j
$$

Subject to:
$$
\sum_{j=1}^{N} c_j x_j \leq B
$$
$$
\sum_{j=1}^{N} r_{jk} x_j \leq R_k, \quad \forall k
$$
$$
x_j \in \{0, 1\}
$$

Where $v_j$ = value of project $j$, $c_j$ = cost, $B$ = budget, $r_{jk}$ = resource $k$ consumption, $R_k$ = resource $k$ availability. Extensions include multi-period scheduling, dependency constraints, and stochastic returns.

## Portfolio Categorization

Projects are categorized to enable balanced management:

| Category | Description | Metrics Focus |
|----------|-------------|---------------|
| Strategic | Long-term competitive advantage | NPV, strategic fit |
| Operational | Efficiency, compliance, maintenance | Cost reduction, ROI |
| Innovation | New products, technologies, markets | Option value, learning |
| Regulatory | Mandatory compliance, safety | Risk reduction, avoidance |

The Ansoff Matrix and McKinsey Three Horizons model guide category balance.

## Resource Capacity Planning

Resource-constrained PPM requires capacity modeling:

$$
\text{Utilization}_k = \frac{\sum_{j} d_{jk} \cdot x_j}{C_k}
$$

Where $d_{jk}$ = demand for resource $k$ by project $j$, $C_k$ = capacity of resource $k$. Target utilization is typically 80-85% to maintain flexibility and absorb variability. Critical resources (specialized engineers, test equipment) require dedicated capacity pools.

## Portfolio Governance

Governance structures include:
- **Portfolio Review Board**: Senior leadership making selection/prioritization decisions
- **Stage-Gate Reviews**: Phase-gate checkpoints with kill/hold/go decisions
- **Benefits Realization Management**: Tracking post-implementation value delivery
- **Portfolio Reporting Dashboards**: Real-time visibility into status, risks, resource allocation

Decision frequency ranges from quarterly (strategic) to monthly (operational) to weekly (execution).

## Agile Portfolio Management

Agile PPM adapts traditional frameworks for iterative delivery:
- **Lean Budgeting**: Funding value streams rather than projects
- **WSJF Prioritization**: Weighted Shortest Job First sequencing
- **PI Planning**: Program Increment alignment across teams
- **Epic Hypothesis Testing**: Validating assumptions before full funding

$$
WSJF = \frac{\text{Cost of Delay}}{\text{Job Duration}}
$$

## Risk-Adjusted Portfolio Value

Portfolio risk aggregation accounts for correlations:

$$
\sigma_P^2 = \sum_{i} \sum_{j} w_i w_j \sigma_i \sigma_j \rho_{ij}
$$

Diversification reduces portfolio risk when $\rho_{ij} < 1$. Monte Carlo simulation evaluates portfolio outcome distributions under uncertainty.

## References

1. Project Management Institute. (2023). *The Standard for Portfolio Management* (4th ed.). PMI.
2. Cooper, R. G., Edgett, S. J., & Kleinschmidt, E. J. (2023). Best practices in product innovation: What distinguishes top performers. *Journal of Product Innovation Management*, 40(2), 198–220.
3. Archer, N. P., & Ghasemzadeh, F. (2024). Project portfolio selection: A review of optimization models and methods. *European Journal of Operational Research*, 312(1), 1–20.
4. Martinsuo, M., & Lehtonen, P. (2023). Role of single-project management in achieving portfolio management success. *International Journal of Project Management*, 41(3), 102456.
5. Scaled Agile, Inc. (2024). *SAFe 6.0 Framework: Lean Portfolio Management*. SAFe.
6. Damghani, K. K., & Sadrzadeh, A. (2023). Hybrid MCDM-optimization approach for project portfolio selection under uncertainty. *Computers & Industrial Engineering*, 185, 109654.

</content>

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
