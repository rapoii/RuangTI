# Module 286: Life Cycle Costing (LCC) and Total Cost of Ownership

## Overview

Life Cycle Costing (LCC) and Total Cost of Ownership (TCO) are systematic methodologies for evaluating the complete economic burden of industrial assets, products, or systems across their entire lifespan. For industrial engineers, these frameworks extend beyond acquisition costs to include operation, maintenance, disposal, and environmental externalities—enabling sustainable decision-making that balances economic and ecological objectives (ISO 15686-5, 2017).

## LCC Mathematical Framework

### Basic LCC Equation

$$
LCC = C_{acq} + \sum_{t=1}^{n} \frac{C_{op,t} + C_{maint,t} + C_{env,t}}{(1+r)^t} + \frac{C_{disp} - V_{res}}{(1+r)^n}
$$

Where:
- $C_{acq}$ = Acquisition cost (purchase, installation, commissioning)
- $C_{op,t}$ = Operating cost in year $t$ (energy, consumables, labor)
- $C_{maint,t}$ = Maintenance cost in year $t$ (preventive, corrective, spare parts)
- $C_{env,t}$ = Environmental cost in year $t$ (emissions, waste, compliance)
- $C_{disp}$ = Disposal/decommissioning cost
- $V_{res}$ = Residual/salvage value
- $r$ = Discount rate
- $n$ = Analysis period (years)

### Present Value Factor

$$
PVF(r, n) = \frac{1 - (1+r)^{-n}}{r}
$$

For uniform annual costs, LCC simplifies to:

$$
LCC = C_{acq} + A \cdot PVF(r, n) + \frac{C_{disp} - V_{res}}{(1+r)^n}
$$

Where $A$ is the equivalent uniform annual cost.

## Total Cost of Ownership (TCO) Model

TCO extends LCC by incorporating hidden and indirect costs relevant to manufacturing systems:

$$
TCO = C_{pre} + C_{acq} + C_{use} + C_{post} + C_{risk} + C_{ext}
$$

### Cost Categories

| Category | Components | Sustainability Link |
|----------|-----------|-------------------|
| Pre-acquisition | Needs analysis, supplier evaluation, R&D | Eco-design integration |
| Acquisition | Purchase, logistics, installation, training | Green procurement |
| Use phase | Energy, materials, labor, downtime, quality losses | Operational efficiency |
| Post-use | Decommissioning, recycling, disposal, remediation | Circular economy |
| Risk | Supply disruption, regulatory non-compliance, reputation | ESG resilience |
| Externalities | Carbon pricing, water scarcity, social costs | True cost accounting |

## Integration with Sustainability Metrics

### Environmental LCC (E-LCC)

E-LCC monetizes environmental impacts using shadow pricing:

$$
E\text{-}LCC = LCC + \sum_{i} EI_i \cdot SP_i
$$

Where:
- $EI_i$ = Environmental impact quantity (e.g., kg CO₂-eq, m³ water)
- $SP_i$ = Shadow price per unit impact ($/kg CO₂-eq, $/m³)

Shadow prices from literature (2024):
- Carbon: $50–190/t CO₂-eq (social cost)
- Water: $0.5–3.0/m³ (scarcity-weighted)
- Landfill: $80–150/t waste

### Levelized Cost Approach

For energy systems comparison:

$$
LCOE = \frac{\sum_{t=1}^{n} \frac{I_t + O_t + F_t}{(1+r)^t}}{\sum_{t=1}^{n} \frac{E_t}{(1+r)^t}}
$$

Where $I_t$ = investment, $O_t$ = O&M, $F_t$ = fuel, $E_t$ = energy output.

## Industrial Engineering Applications

### Equipment Selection Decision Matrix

Multi-criteria evaluation combining LCC with sustainability:

$$
Score_j = w_{cost} \cdot \frac{LCC_{min}}{LCC_j} + w_{env} \cdot \frac{EI_{min}}{EI_j} + w_{tech} \cdot T_j
$$

Where weights sum to 1.0 and $T_j$ is normalized technical performance.

### Replacement Optimization

Optimal replacement interval minimizing LCC per unit time:

$$
\min_{n} \frac{LCC(n)}{n} \quad \text{s.t.} \quad E[n] \leq E_{target}
$$

Solved via marginal analysis or dynamic programming.

## Digital Tools and Standards

- **ISO 15686-5:2017**: Buildings and constructed assets — Service life planning — Part 5: Life-cycle costing
- **ISO 14040/14044**: LCA standards providing inventory data for E-LCC
- **GaBi & SimaPro**: Integrated LCA-LCC software platforms
- **Digital Twins**: Real-time cost tracking with sustainability KPIs

## Recent Research (2023–2026)

Recent advances integrate AI-driven predictive maintenance into LCC models, reducing uncertainty in maintenance cost forecasting. Blockchain-enabled supply chain transparency now allows verified externality accounting in TCO. The EU's Digital Product Passport regulation (2025) mandates lifecycle cost disclosure for regulated product categories.

## References

- ISO 15686-5:2017. *Buildings and constructed assets — Service life planning — Part 5: Life-cycle costing*. International Organization for Standardization.
- Gluch, P., & Baumann, H. (2023). Life cycle costing in sustainable manufacturing: A systematic review. *Journal of Cleaner Production*, 389, 136042.
- Martinez-Sanchez, M., & Rodriguez-Alloza, A. (2024). Environmental life cycle costing for circular economy transitions. *Resources, Conservation and Recycling*, 204, 107489.
- Kumar, R., & Singh, P. (2025). AI-integrated total cost of ownership modeling for smart manufacturing equipment. *International Journal of Production Economics*, 281, 109534.
- European Commission. (2025). *Digital Product Passport: Lifecycle Cost Disclosure Requirements*. EUR-Lex 32025R0892.

</content>