# Module 287: GHG Protocol and Industrial Decarbonization Strategies

## Overview

The Greenhouse Gas (GHG) Protocol provides the world's most widely used accounting standard for measuring and managing greenhouse gas emissions. For industrial engineers, decarbonization requires integrating GHG accounting with process optimization, technology selection, and supply chain redesign to achieve net-zero manufacturing targets aligned with Paris Agreement goals (WRI & WBCSD, 2023).

## GHG Protocol Corporate Standard Structure

### Scope Boundaries Revisited

**Organizational Boundaries:**
- **Equity Share Approach**: Account GHGs according to equity interest in operations
- **Control Approach**: Account 100% of GHGs from operations under operational/financial control
- Most industrial firms use **operational control** for alignment with management authority

**Operational Boundaries:**
- Scope 1: Direct emissions from owned/controlled sources
- Scope 2: Indirect emissions from purchased electricity, steam, heat, cooling
- Scope 3: All other indirect emissions across value chain (15 categories)

### Location-Based vs. Market-Based Accounting (Scope 2)

$$
E_{scope2,loc} = \sum_{i} A_i \times EF_{grid,i}
$$

$$
E_{scope2,mkt} = \sum_{j} Q_j \times EF_{contract,j} + R_{uncovered} \times EF_{residual}
$$

Where:
- $A_i$ = Activity data (kWh consumed at location $i$)
- $EF_{grid}$ = Grid average emission factor (tCO₂e/MWh)
- $Q_j$ = Quantity of contractual instruments (RECs, GOs, PPAs)
- $EF_{contract}$ = Supplier-specific or instrument emission factor
- $R_{uncovered}$ = Remaining consumption not covered by contracts
- $EF_{residual}$ = Residual mix emission factor

**Dual reporting required** since 2015; market-based typically lower when renewable procurement exists.

## Science-Based Targets Initiative (SBTi)

### Sectoral Decarbonization Approach (SDA)

For energy-intensive industries, SDA allocates carbon budgets based on physical activity metrics:

$$
CB_{company} = CB_{sector} \times \frac{Activity_{company}}{Activity_{sector}} \times MS_{market\_share}
$$

Where $CB$ = Carbon Budget, $MS$ = Market share adjustment factor.

### FLAG Sector Guidance (2024 Update)

Forest, Land, and Agriculture sectors now have dedicated methodologies:
- Land-use change emissions integrated into baselines
- Removals accounted separately from reductions
- Deforestation-free supply chain verification required

## Industrial Decarbonization Levers

### Technology Pathways Matrix

| Lever | Applicability | Abatement Cost ($/tCO₂) | TRL | IE Integration |
|-------|--------------|------------------------|-----|----------------|
| Electrification | Heat <200°C, motors | -50 to +100 | 9 | Process redesign, load management |
| Green Hydrogen | High-temp heat, feedstock | 80-200 | 6-8 | Storage sizing, safety systems |
| CCUS | Point sources >100kt/yr | 40-120 | 7-9 | Capture integration, transport logistics |
| Biomass/Bioenergy | Thermal, combined heat/power | 20-80 | 8-9 | Feedstock supply chain, ash handling |
| Material Efficiency | All manufacturing | Negative to 50 | 9 | Yield improvement, scrap reduction |
| Circular Models | Assembly, chemicals | Negative to 30 | 8-9 | Reverse logistics, remanufacturing lines |

### Marginal Abatement Cost Curve (MACC) Construction

Rank abatement options by cost-effectiveness:

$$
MAC_i = \frac{\Delta Cost_i}{\Delta Emissions_i} \quad \left[\frac{\$/tCO_2e}{year}\right]
$$

Cumulative curve identifies least-cost pathway to target:
$$
Total\ Abatement = \sum_{i=1}^{n} \Delta E_i \quad \text{where } MAC_i \leq Carbon\ Price
$$

Negative MAC options (material efficiency, energy savings) implemented first regardless of carbon price.

## Process-Level Decarbonization Engineering

### Steam System Optimization

Boiler efficiency improvement:
$$
\eta_{boiler} = \frac{\dot{m}_{steam}(h_{out} - h_{fw})}{\dot{m}_{fuel} \times HHV}
$$

Typical improvements: economizers (+3-5%), condensate recovery (+5-10%), blowdown heat recovery (+1-2%).

Electrification feasibility:
$$
COP_{heat\_pump} = \frac{T_{delivery}}{T_{delivery} - T_{source}} \quad (\text{Carnot limit})
$$

Industrial heat pumps viable up to 160°C (2024); higher temperatures require cascade systems or resistive heating.

### Compressed Air Decarbonization

Compressor specific power:
$$
SP = \frac{P_{electrical}}{Q_{FAD}} \quad \left[\frac{kW}{m^3/min}\right]
$$

Leakage reduction impact:
$$
\Delta E = P_{comp} \times t_{op} \times \frac{\Delta Q_{leak}}{Q_{total}} \times EF_{elec}
$$

Variable speed drives reduce part-load energy by 20-35% versus throttling/unloading controls.

### Furnace and Kiln Transition

Hydrogen-ready burner design considerations:
- Flame speed differences (H₂ ~3× natural gas)
- NOx formation mechanisms shift to thermal dominance
- Radiative heat transfer changes (lower emissivity flame)
$$
Q_{rad,H2} \approx 0.7 \times Q_{rad,NG} \quad \text{(requiring convective section enlargement)}
$$

## Supply Chain Decarbonization (Scope 3)

### Category Prioritization Framework

Screening using spend-based hybrid method:
$$
E_{cat,k} = Spend_k \times EEIOF_k \times AdjustmentFactor
$$

Top 5 categories typically account for 70-80% of Scope 3 in manufacturing:
1. Purchased goods and services
2. Capital goods
3. Fuel and energy-related activities
4. Upstream transportation
5. Use of sold products (for durable goods manufacturers)

### Supplier Engagement Programs

Tiered approach:
- **Tier 1 Strategic Suppliers**: Primary data collection, joint abatement projects
- **Tier 2 Preferred Suppliers**: Secondary data, capacity building workshops
- **Tier 3 General Suppliers**: Industry averages, minimum standards enforcement

Data quality scoring:
$$
DQS = w_1 \cdot TechRep + w_2 \cdot GeoRep + w_3 \cdot TempRep + w_4 \cdot Completeness
$$

## Digital Enablers for Decarbonization

### Real-Time Carbon Accounting

Integration with MES/SCADA:
$$
EF_{dynamic}(t) = \frac{\sum_g P_g(t) \times EF_g(t)}{\sum_g P_g(t)}
$$

Enables time-of-use optimization: shifting flexible loads to low-carbon intensity periods reduces scope 2 without volume reduction.

### AI-Powered Process Optimization

Reinforcement learning for multi-objective control:
$$
\max_{u_t} \mathbb{E}\left[\sum_{t=0}^{T} \gamma^t (R_{prod,t} - \lambda C_{carbon,t})\right]
$$

Where $\lambda$ = Internal carbon price shadow cost, balancing throughput against emissions.

## References

- WRI & WBCSD. (2023). *GHG Protocol Corporate Accounting and Reporting Standard* (Updated Edition). World Resources Institute.
- SBTi. (2024). *FLAG Sector Guidance: Forest, Land and Agriculture*. Science Based Targets initiative.
- Bataille, C., et al. (2023). Net-zero steel: Technology pathways and policy implications. *Nature Climate Change*, 13, 1152-1161.
- Vogl, V., et al. (2024). Green hydrogen for industrial heat: Techno-economic assessment across European regions. *Joule*, 8(3), 101245.
- IEA. (2025). *Industrial Decarbonisation Roadmap: Tracking Progress Towards Net Zero*. International Energy Agency.

</content>