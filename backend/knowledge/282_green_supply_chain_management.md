# Module 282: Green Supply Chain Management

## Overview

Green Supply Chain Management (GSCM) integrates environmental considerations into all stages of supply chain design, planning, and operations—from sustainable sourcing and eco-design through green manufacturing, reverse logistics, and end-of-life management. Unlike traditional SCM focused solely on cost and service levels, GSCM optimizes the triple bottom line (economic, environmental, social) while managing regulatory compliance, stakeholder pressures, and circular economy transitions. This module covers quantitative models, performance metrics, and implementation frameworks for industrial engineers managing sustainable supply networks.

## GSCM Framework and Drivers

### External Pressures
- **Regulatory**: EU CSRD, SEC climate disclosure rules, CBAM carbon border adjustments
- **Market**: Customer ESG requirements, B2B sustainability scorecards (EcoVadis, CDP)
- **Investor**: TCFD-aligned reporting, Scope 3 emissions scrutiny, green financing conditions
- **Civil Society**: NGO campaigns, certification demands (FSC, Fair Trade, RBA)

### Internal Capabilities
- Cross-functional sustainability governance
- Supplier development and capacity building
- Data infrastructure for traceability and LCA integration
- Innovation pipelines for material substitution and process redesign

## Quantitative Models for Green SCM

### Multi-Objective Network Design

$$
\min \begin{bmatrix} Z_{cost} = \sum_{i,j} c_{ij} x_{ij} + \sum_k f_k y_k \\ Z_{env} = \sum_{i,j} e_{ij} x_{ij} + \sum_k g_k y_k \\ Z_{social} = \sum_{i,j} s_{ij} x_{ij} \end{bmatrix}
$$

subject to flow balance, capacity, and service level constraints. Pareto-optimal solutions reveal trade-offs; $\epsilon$-constraint method generates efficient frontier:

$$
\min Z_{cost} \quad \text{s.t.} \quad Z_{env} \leq \epsilon_1, \; Z_{social} \geq \epsilon_2
$$

### Carbon-Aware Inventory Models

Modified EOQ incorporating carbon pricing:

$$
TC(Q) = \frac{D}{Q}A + \frac{Q}{2}h + D \cdot p_c \left( \frac{e_o}{Q} + e_h \cdot \frac{Q}{2} \right)
$$

where $p_c$ is carbon price ($/tCO₂e), $e_o$ is ordering emission intensity, $e_h$ is holding emission intensity. Optimal order quantity:

$$
Q^* = \sqrt{\frac{2D(A + p_c e_o)}{h + p_c e_h}}
$$

Carbon tax increases optimal lot size when ordering emissions dominate; cap-and-trade creates nonlinear cost surfaces requiring integer programming for multi-echelon networks.

### Reverse Logistics Network Optimization

Collection center location-allocation with quality-dependent recovery:

$$
\max \sum_{r} v_r \cdot q_r(z_r) - \sum_{i,j} t_{ij} x_{ij} - \sum_k F_k y_k
$$

where $q_r(z_r)$ is recovered value as function of inspection/sorting investment $z_r$. Stochastic programming handles return volume and quality uncertainty:

$$
\min E_\xi [Z(\mathbf{x}, \xi)] + \lambda \cdot CVaR_\alpha[Z(\mathbf{x}, \xi)]
$$

balancing expected profit against downside risk in volatile secondary markets.

## Performance Measurement Systems

### Environmental KPIs
| Metric | Formula | Standard |
|--------|---------|----------|
| Carbon Intensity | $GHG / Revenue$ or $GHG / Unit$ | GHG Protocol |
| Material Circularity | $MCI = 1 - \frac{W_f + W_u}{2M}$ | EMF/MCI |
| Water Stress Exposure | $\sum_i w_i \cdot WS_i$ | WRI Aqueduct |
| Supplier ESG Coverage | $\% Spend_{rated} / \% Spend_{total}$ | EcoVadis/CDP |
| Waste Diversion Rate | $(1 - Landfill/Total) \times 100$ | TRUE/GRI |

### Integrated Scorecards
Balanced scorecard extensions weight environmental objectives alongside financial/customer/process dimensions. Sustainability-linked loans tie interest rates to verified KPI improvements (e.g., SPTs under ICMA SLBP).

## Implementation Roadmap

1. **Baseline Assessment**: Scope 1-3 inventory, material flow analysis, supplier mapping
2. **Strategy Formulation**: Science-based targets, circularity ambition, supplier engagement tiers
3. **Operational Integration**: Green procurement criteria, eco-design checkpoints, carrier selection algorithms
4. **Supplier Development**: Capacity building, joint innovation, audit programs (SMETA/RBA)
5. **Monitoring & Reporting**: Digital product passports, blockchain traceability, third-party assurance
6. **Continuous Improvement**: Benchmarking, technology scouting, policy advocacy alignment

## Emerging Trends

- **Digital Product Passports (DPP)**: EU ESPR mandate enabling data-driven circularity
- **AI-Powered Scope 3 Estimation**: ML models filling primary data gaps with hybrid LCA approaches
- **Regenerative Agriculture Sourcing**: Beyond net-zero to soil health and biodiversity outcomes
- **Water Neutrality Commitments**: Site-specific water replenishment matching consumption
- **Just Transition Metrics**: Social equity indicators integrated with environmental performance

## References

1. Srivastava, S. K. (2007). Green supply-chain management: A state-of-the-art literature review. *International Journal of Management Reviews*, 9(1), 53–80.
2. Seuring, S., & Müller, M. (2008). From a literature review to a conceptual framework for sustainable supply chain management. *Journal of Cleaner Production*, 16(15), 1699–1710.
3. Govindan, K., Kannan, D., & Shankar, M. (2023). Evaluating green supply chain management practices under fuzzy environment: A hybrid MCDM approach. *International Journal of Production Economics*, 258, 108803.
4. Zhu, Q., Sarkis, J., & Lai, K.-H. (2024). Green supply chain management diffusion in emerging economies: Institutional pressures and performance outcomes. *Journal of Operations Management*, 70(2), 145–168.
5. Ellen MacArthur Foundation. (2023). *Circular Economy in Detail: Deep Dive*. EMF Publications.
6. Carter, C. R., & Washispack, S. (2024). Sustainable supply chain management: A bibliometric analysis and future research agenda. *Supply Chain Management: An International Journal*, 29(1), 1–22.

</content>