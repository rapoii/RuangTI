# Module 283: Carbon Footprint Analysis — Scope 1, 2, and 3 Emissions

## Overview

Carbon footprint analysis under the Greenhouse Gas (GHG) Protocol categorizes organizational emissions into three scopes, providing a comprehensive framework for industrial engineers to quantify, manage, and reduce greenhouse gas emissions across manufacturing systems and supply chains. Understanding scope boundaries is fundamental to sustainability engineering and regulatory compliance (GHG Protocol, 2023).

## The Three Scopes Defined

### Scope 1: Direct Emissions

Scope 1 emissions are direct GHG emissions from sources owned or controlled by the organization:

- **Stationary combustion**: Boilers, furnaces, turbines burning fossil fuels
- **Mobile combustion**: Company-owned vehicles, forklifts, mobile equipment
- **Process emissions**: Chemical reactions in manufacturing (e.g., cement calcination, aluminum smelting)
- **Fugitive emissions**: Refrigerant leaks, methane from wastewater treatment

$$
E_{scope1} = \sum_{i=1}^{n} AD_i \times EF_i \times GWP_i
$$

Where $AD_i$ = activity data (fuel consumed, km traveled), $EF_i$ = emission factor (kg CO₂e/unit), and $GWP_i$ = global warming potential multiplier.

### Scope 2: Indirect Energy Emissions

Scope 2 covers indirect emissions from purchased electricity, steam, heating, and cooling:

$$
E_{scope2} = EC \times EF_{grid} \quad \text{(location-based)}
$$

$$
E_{scope2} = EC \times EF_{supplier} \quad \text{(market-based)}
$$

The dual reporting method (introduced in GHG Protocol Scope 2 Guidance, updated 2023) requires organizations to report both location-based and market-based figures. Industrial facilities with significant electrical loads (motors, HVAC, process heating) often find Scope 2 represents 40–70% of their total operational footprint (CDP, 2024).

### Scope 3: Value Chain Emissions

Scope 3 encompasses all other indirect emissions across 15 categories:

| Category | Upstream/Downstream | IE Relevance |
|----------|-------------------|--------------|
| Purchased goods & services | Upstream | Raw materials, components |
| Capital goods | Upstream | Equipment, machinery |
| Fuel & energy-related activities | Upstream | Transmission losses |
| Transportation & distribution | Both | Logistics network design |
| Waste generated in operations | Upstream | Scrap, packaging disposal |
| Business travel | Upstream | Employee mobility |
| Use of sold products | Downstream | Product energy consumption |
| End-of-life treatment | Downstream | Recycling, landfill |

$$
E_{scope3} = \sum_{j=1}^{15} \sum_{k=1}^{m_j} AD_{jk} \times EF_{jk}
$$

Scope 3 typically accounts for 70–90% of total value chain emissions in manufacturing sectors (McKinsey, 2024).

## Quantification Methodologies

### Emission Factor Hierarchy

1. **Primary data**: Direct measurement via continuous emissions monitoring systems (CEMS)
2. **Supplier-specific factors**: Verified LCA data from material suppliers
3. **Industry-average factors**: Sector-specific databases (ecoinvent, GaBi)
4. **Default factors**: IPCC Guidelines, national inventory reports

### Mass Balance Approach

For process emissions where direct measurement is impractical:

$$
E_{process} = \left( \sum M_{in} \times C_{carbon,in} - \sum M_{out} \times C_{carbon,out} \right) \times \frac{44}{12}
$$

Where $M$ = mass flow rate and $C_{carbon}$ = carbon content fraction. The $\frac{44}{12}$ ratio converts carbon mass to CO₂ equivalent molecular weight.

## Industrial Engineering Applications

### Manufacturing System Design

Carbon intensity per unit of production serves as a key performance indicator alongside traditional metrics:

$$
CI = \frac{E_{total}}{Q_{output}} \quad \left[ \frac{\text{kg CO}_2\text{e}}{\text{unit}} \right]
$$

Integration with OEE (Overall Equipment Effectiveness):

$$
OEE_{carbon} = Availability \times Performance \times Quality \times CarbonEfficiency
$$

### Supply Chain Network Optimization

Multi-objective optimization balancing cost and emissions:

$$
\min Z = w_1 \sum c_{ij} x_{ij} + w_2 \sum e_{ij} x_{ij}
$$

Subject to demand satisfaction, capacity constraints, and service level requirements. Pareto frontier analysis reveals trade-offs between total cost and carbon footprint (Chen et al., 2024).

## Regulatory Framework and Standards

- **ISO 14064-1:2018**: Specification for quantification and reporting of GHG emissions
- **EU CSRD (2024)**: Mandatory Scope 3 reporting for large EU companies
- **SEC Climate Disclosure Rule (2024)**: Scope 1 and 2 mandatory for US registrants
- **ISSB S2**: International baseline for climate-related financial disclosures

## Recent Research Directions

Recent studies emphasize dynamic emission factors reflecting real-time grid carbon intensity rather than annual averages (Wang & Liu, 2025). Digital twin integration enables predictive carbon accounting at the machine level, supporting real-time operational decisions that minimize both cost and emissions simultaneously.

## References

- GHG Protocol. (2023). *Corporate Accounting and Reporting Standard*. World Resources Institute.
- CDP. (2024). *Global Supply Chain Report 2024*. Carbon Disclosure Project.
- McKinsey & Company. (2024). *Decarbonizing Industrial Supply Chains*. Sustainability Practice.
- Chen, Y., Li, X., & Zhang, W. (2024). Multi-objective supply chain network design under carbon pricing. *Journal of Cleaner Production*, 438, 140721.
- Wang, H., & Liu, J. (2025). Real-time carbon intensity modeling for smart manufacturing. *Applied Energy*, 378, 124891.
- ISO 14064-1:2018. *Greenhouse gases — Part 1: Specification with guidance at the organization level*.

</content>