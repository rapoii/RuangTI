# Module 190: GHG Protocol Scope 1, 2, 3 Emissions & Decarbonization Roadmap

## 1. The GHG Protocol Framework in Industrial Engineering

The Greenhouse Gas (GHG) Protocol Corporate Standard is the world's most widely used accounting framework for measuring and managing greenhouse gas emissions. For Industrial Engineers, GHG accounting is not merely a compliance exercise; it is a process optimization tool that identifies inefficiencies, reduces operating costs, and manages regulatory risk. The protocol categorizes emissions into three scopes to prevent double-counting and ensure comprehensive coverage.

### 1.1 Scope Definitions
-   **Scope 1 (Direct):** Emissions from sources owned or controlled by the reporting entity. Includes stationary combustion (boilers, furnaces), mobile combustion (fleet vehicles), process emissions (chemical reactions, fugitive leaks), and on-site waste treatment.
-   **Scope 2 (Indirect Energy):** Emissions from purchased electricity, steam, heating, and cooling consumed by the entity. Dual reporting required: location-based (grid average) and market-based (contracts, RECs).
-   **Scope 3 (Value Chain):** All other indirect emissions across 15 categories defined in the GHG Protocol Value Chain Standard. Typically represents 70-90% of total corporate footprint but carries highest data uncertainty.

### 1.2 Materiality & Boundary Setting
IE practitioners must define organizational boundaries using either equity share or control approach (financial/operational). Operational boundaries determine which scopes/categories are included based on materiality thresholds (>5% of total inventory or strategic relevance).

## 2. Quantification Methodologies

### 2.1 Scope 1 Calculation
$$
E_{scope1} = \sum_{i} AD_i \times EF_i \times (1 - CE_i)
$$
Where $AD_i$ = Activity Data (fuel volume, production rate), $EF_i$ = Emission Factor (kg CO₂e/unit), $CE_i$ = Control Efficiency (abatement technology).

**Example:** Natural gas boiler consuming 500,000 m³/year with EF = 2.02 kg CO₂/m³ and 95% thermal efficiency:
$$
E = 500{,}000 \times 2.02 \times (1 - 0) = 1{,}010 \text{ tCO}_2\text{/yr}
$$
(Note: Thermal efficiency affects fuel consumption, not emission factor per unit fuel burned.)

### 2.2 Scope 2 Dual Reporting
**Location-Based:**
$$
E_{loc} = EC \times EF_{grid}
$$
Where $EC$ = Electricity Consumption (MWh), $EF_{grid}$ = Grid Average Emission Factor (tCO₂e/MWh) from IEA or national authority.

**Market-Based:**
$$
E_{mkt} = \sum_{j} EC_j \times EF_{contract,j} + EC_{residual} \times EF_{residual}
$$
Contract-specific factors override grid average for covered volumes; residual mix applies to uncovered consumption.

### 2.3 Scope 3 Estimation Techniques
Data quality hierarchy for industrial applications:
1.  **Supplier-Specific:** Primary data from tier-1 suppliers (preferred).
2.  **Hybrid:** Mix of primary activity data + secondary emission factors.
3.  **Spend-Based:** EEIO models ($E = Spend \times EF_{EEIO}$) for screening.
4.  **Average-Data:** Industry averages when supplier data unavailable.

**Category 1 (Purchased Goods) Hybrid Example:**
$$
E_{cat1} = \sum_{k} M_k \times EF_{material,k} + \sum_{l} Spend_l \times EF_{EEIO,l}
$$
Where $M_k$ = Mass of key materials with known LCA factors, $Spend_l$ = Expenditure on miscellaneous items.

## 3. Carbon Intensity Metrics for Manufacturing

### 3.1 Specific Emissions Intensity
$$
CEI = \frac{E_{total}}{Q_{output}} \quad [\text{tCO}_2\text{e / unit product}]
$$
Decomposition via Divisia Index Analysis separates structural vs. intensity effects:
$$
\Delta CEI = \underbrace{\sum w_i \ln(I_i/I_0)}_{\text{Intensity Effect}} + \underbrace{\sum w_i \ln(S_i/S_0)}_{\text{Structural Effect}}
$$
Where $I_i$ = Sectoral intensity, $S_i$ = Output share, $w_i$ = Weight.

### 3.2 Marginal Abatement Cost Curve (MACC)
Rank decarbonization levers by cost-effectiveness:
$$
MAC_j = \frac{NPV(Cost_j) - NPV(Savings_j)}{\Delta E_j} \quad [$/\text{tCO}_2\text{e abated}]
$$
Negative MAC indicates net-positive ROI projects (energy efficiency, waste heat recovery). Positive MAC requires carbon price justification or regulatory mandate.

## 4. Decarbonization Roadmap Development

### 4.1 Target Setting Frameworks
-   **Science-Based Targets (SBTi):** Aligns with Paris Agreement 1.5°C pathway. Requires FLAG sector guidance for land-intensive industries.
-   **Net-Zero Standard:** SBTi defines net-zero as >90% absolute reduction + permanent removals for residual (<10%).
-   **Sectoral Decarbonization Approach (SDA):** Physical intensity convergence pathways for steel, cement, chemicals, power generation.

### 4.2 Technology Portfolio Selection
Multi-criteria decision analysis integrates technical readiness, cost, and risk:

| Lever | TRL | Abatement Potential | CAPEX Intensity | Implementation Time |
|-------|-----|-------------------|-----------------|-------------------|
| Electrification | 8-9 | High | Medium | 2-5 yr |
| Green H₂ | 6-7 | Very High | High | 5-10 yr |
| CCUS | 7-8 | Medium-High | Very High | 5-10 yr |
| Biomass/Biofuels | 8-9 | Medium | Low-Medium | 1-3 yr |
| Process Redesign | 4-6 | Variable | High | 5-15 yr |

### 4.3 Transition Risk Modeling
Scenario analysis per TCFD/ISSB standards quantifies financial exposure:
$$
Risk_{transition} = P(policy) \times Impact_{carbon\_price} + P(tech) \times Impact_{stranded\_assets} + P(market) \times Impact_{demand\_shift}
$$
Use NGFS scenarios (Net Zero 2050, Delayed Transition, Current Policies) for stress testing.

## 5. Verification & Assurance

### 5.1 ISO 14064-3 Verification Levels
-   **Limited Assurance:** Negative conclusion ("nothing came to attention"). Lower evidence threshold.
-   **Reasonable Assurance:** Positive opinion. Higher rigor comparable to financial audit.

### 5.2 Data Quality Assessment
Pedigree matrix scores reliability on five dimensions: temporal correlation, geographical correlation, technological correlation, representativeness, completeness. Aggregate score determines uncertainty range for disclosure.

## 6. Key References

-   World Resources Institute & WBCSD (2004). *The Greenhouse Gas Protocol: A Corporate Accounting and Reporting Standard*. Revised Edition.
-   WRI & WBCSD (2011). *Corporate Value Chain (Scope 3) Accounting and Reporting Standard*.
-   Science Based Targets initiative (2024). *FLAG Sector Guidance: Land-Intensive Industries*. Version 2.0.
-   ISO 14064-1:2023. *Greenhouse gases — Part 1: Specification with guidance at the organization level for quantification and reporting of greenhouse gas emissions and removals*.
-   Chen, G. Q., & Wu, X. F. (2023). Carbon footprint assessment for industrial systems: Methods and applications. *Journal of Cleaner Production*, 398, 136582.
-   International Energy Agency (2024). *Tracking Clean Energy Progress 2024: Industrial Sector Deep Dive*. OECD Publishing.
-   Task Force on Climate-related Financial Disclosures (2023). *2023 Status Report: Transition Planning & Scenario Analysis*. IFRS Foundation.

</content>$.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
