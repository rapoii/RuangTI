# Module 58: Humanitarian Logistics

## Overview
Humanitarian Logistics (HL) encompasses the planning, implementation, and control of the efficient flow of goods, services, and information from origin to consumption for the purpose of alleviating suffering of vulnerable people. Unlike commercial supply chains, HL operates under extreme uncertainty, time pressure, political constraints, and non-monetary objectives (minimizing human suffering). Industrial Engineering provides the analytical backbone for disaster preparedness, response, and recovery through stochastic optimization, network design, and performance measurement.

## Core Concepts

### 1. Disaster Management Cycle & Logistics Phases
- **Preparedness**: Pre-positioning inventory, facility location, supplier pre-qualification.
- **Response**: Emergency distribution, last-mile delivery, evacuation routing.
- **Recovery**: Reconstruction logistics, capacity building, transition to development.
- **Mitigation**: Infrastructure hardening, risk reduction investments.

### 2. Stochastic Facility Location-Allocation
Pre-positioning warehouses before disasters strike requires balancing coverage against cost under uncertain demand and disruption risks:
$$ \min \sum_{i} f_i y_i + \sum_{s} p_s \left( \sum_{i,j} c_{ij} x_{ijs} + \sum_{j} \pi_j u_{js} \right) $$
Subject to:
$$ \sum_{i} x_{ijs} + u_{js} = d_{js}, \quad \forall j,s $$
$$ \sum_{j} x_{ijs} \leq K_i y_i, \quad \forall i,s $$
$$ y_i \in \{0,1\}, \quad x_{ijs}, u_{js} \geq 0 $$
Where $y_i$ is binary warehouse opening, $x_{ijs}$ is shipment, $u_{js}$ is unmet demand penalty, $p_s$ is scenario probability, and $\pi_j$ is deprivation cost per unit.

### 3. Vehicle Routing in Post-Disaster Environments
Road networks are partially destroyed; travel times are stochastic. The **Stochastic VRP with Recourse** minimizes expected total cost:
$$ \min \sum_{(i,j)} t_{ij} x_{ij} + E[Q(x, \xi)] $$
Where $Q(x, \xi)$ is recourse cost (e.g., returning to depot, skipping customers) given realized conditions $\xi$. Robust optimization alternatives use uncertainty sets $\mathcal{U}$:
$$ \min_{x} \max_{\xi \in \mathcal{U}} \left\{ \sum_{(i,j)} t_{ij}(\xi) x_{ij} \right\} $$

### 4. Deprivation Cost Modeling
Unlike commercial logistics where shortage cost equals lost profit, HL uses **deprivation cost functions** that increase nonlinearly with time without aid:
$$ DC(t) = \alpha \cdot e^{\beta t} $$
This captures escalating human suffering and justifies premium transportation modes (airlift vs. truck).

## Mathematical Formulations

### Multi-Objective Relief Distribution
$$ \min Z_1 = \sum_{i,j} c_{ij} x_{ij} \quad \text{(Total Cost)} $$
$$ \min Z_2 = \sum_{j} w_j \cdot T_j \quad \text{(Weighted Response Time)} $$
$$ \min Z_3 = \sum_{j} u_j \quad \text{(Unmet Demand)} $$
Solved via lexicographic goal programming or Pareto frontier generation. Equity constraints often added: $u_j / d_j \leq \epsilon, \forall j$.

### Inventory Pre-positioning with Disruption Risk
$$ \max \sum_{s} p_s \sum_{j} \min(d_{js}, I_j + \sum_{i} x_{ijs}) $$
Subject to budget $\sum_i f_i y_i + \sum_i h_i I_i \leq B$ and survivability constraints ensuring warehouses remain functional under hazard scenarios.

## Recent Research & Applications (2023-2026)

| Year | Author(s) | Title / Contribution | Source |
|------|-----------|---------------------|--------|
| 2024 | Kovács, G., & Spens, K.M. | "Humanitarian Logistics Research: Trends and Future Directions" | *Journal of Humanitarian Logistics and Supply Chain Management* |
| 2023 | Holguín-Veras, J., et al. | "Deprivation Cost Functions in Humanitarian Logistics: Empirical Validation" | *Transportation Research Part E* |
| 2025 | Papadopoulos, T., et al. | "Blockchain for Transparency in Humanitarian Aid Supply Chains" | *International Journal of Production Economics* |
| 2024 | Nayeri, S., et al. | "Robust-Stochastic Programming for Disaster Relief Network Design under Hybrid Uncertainty" | *Computers & Industrial Engineering* |
| 2023 | Van Wassenhove, L.N. | "Humanitarian Operations: A Quarter Century of Research Impact" | *Production and Operations Management* |

## IE Implementation Considerations
- **Data Scarcity**: Post-disaster data is incomplete; use Bayesian updating, expert elicitation, and proxy indicators.
- **Coordination Mechanisms**: Cluster system (UN OCHA) requires interoperable IT systems and standardized reporting (Logistics Capacity Assessments).
- **Ethical Dimensions**: Allocation rules must be transparent and equitable; avoid optimizing solely for efficiency at expense of vulnerable groups.
- **Technology Adoption**: Drones for last-mile delivery, mobile money for cash transfers, satellite imagery for damage assessment.
- **Performance Metrics**: Beyond cost/time, measure coverage equity, beneficiary satisfaction, and local capacity strengthening.

## References
1. Van Wassenhove, L. N. (2006). Humanitarian aid logistics: supply chain management in high gear. *Journal of the Operational Research Society*, 57(5), 475-489.
2. Holguín-Veras, J., Pérez-Romanet, N., & Jaller, M. (2023). Deprivation Cost Functions. *TRE*, 172, 103089.
3. Kovács, G., & Spens, K. M. (2024). Humanitarian Logistics Research Trends. *JHLSCM*, 14(1), 1-25.
4. Nayeri, S., Torabi, S. A., & Heydari, J. (2024). Robust-Stochastic Relief Network Design. *C&IE*, 189, 109945.
5. Tomasini, R. M., & Van Wassenhove, L. N. (2009). *Humanitarian Logistics*. Palgrave Macmillan.

</content>

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
