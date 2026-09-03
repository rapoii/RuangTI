# Module 297: Green Six Sigma DMAIC for Environmental Performance

## Overview

Green Six Sigma adapts the DMAIC methodology specifically for environmental problem-solving, integrating life cycle thinking and pollution prevention into each phase. Unlike traditional Six Sigma focused on defect reduction, Green DMAIC targets emission sources, resource inefficiencies, and regulatory non-compliances as "defects" in the environmental performance system (Antony et al., 2024).

## Green DMAIC Phase-by-Phase Framework

### Define Phase — Environmental Problem Definition

**Green Project Charter Elements:**
- Environmental CTQs: Emissions (kg CO₂e), Energy (kWh), Water (m³), Waste (kg)
- Regulatory boundaries: Permit limits, reporting thresholds, compliance deadlines
- Stakeholder SIPOC expanded to include ecosystem receptors and community impacts
- Business case incorporating carbon pricing, ESG risk, and reputational value

$$
CTQ_{env} = f(Emissions, ResourceUse, ComplianceRisk, EcoToxicity)
$$

**Baseline Environmental Performance:**
$$
DPMO_{env} = \frac{NonComplianceEvents + ExceedanceInstances}{TotalOpportunities} \times 10^6
$$

Where opportunities include permit parameters monitored × sampling frequency.

### Measure Phase — Environmental Data Collection

**Measurement System Analysis for Environmental Data:**
- Emission monitoring uncertainty quantification
- Sampling representativeness validation
- Lab analytical method verification (EPA/ISO methods)

$$
U_{total} = \sqrt{U_{sampling}^2 + U_{analytical}^2 + U_{temporal}^2 + U_{spatial}^2}
$$

**Process Capability for Environmental Parameters:**
$$
C_{pk,env} = \min\left(\frac{USL - \mu}{3\sigma}, \frac{\mu - LSL}{3\sigma}\right)
$$

For emissions with only upper limits:
$$
C_{pu} = \frac{PermitLimit - \bar{x}}{3s}
$$

Target $C_{pu} > 1.33$ for robust compliance margin.

**Material Flow Cost Accounting Integration:**
$$
MFCA: \quad Cost_{waste} = m_{non-product} \times (MC + EC + SC + DC)
$$

Where MC = material cost, EC = energy cost, SC = system cost, DC = disposal cost assigned to non-product output.

### Analyze Phase — Root Cause of Environmental Losses

**Environmental Fishbone (6M+E):**
- Man: Training gaps, awareness, behavior
- Machine: Equipment efficiency, maintenance, technology age
- Material: Raw material quality, supplier variability, toxicity
- Method: Process parameters, SOP adherence, batch vs. continuous
- Measurement: Monitoring frequency, calibration, data integrity
- Mother Nature: Ambient conditions, seasonality, climate sensitivity
- **Environment**: Upstream supply chain, downstream fate, cumulative impacts

**Regression Analysis for Emission Drivers:**
$$
E = \beta_0 + \beta_1(Throughput) + \beta_2(Temperature) + \beta_3(Humidity) + \beta_4(Maintenance) + \epsilon
$$

Variance decomposition identifying controllable vs. noise factors:
$$
SS_{total} = SS_{controllable} + SS_{noise} + SS_{interaction} + SS_{error}
$$

**Pareto Analysis of Environmental Impacts:**
Rank sources by GWP-weighted emissions or cost-normalized impact to focus improvement resources on vital few contributors.

### Improve Phase — Sustainable Solution Design

**Solution Screening Matrix:**

| Criterion | Weight | Option A | Option B | Option C |
|-----------|--------|----------|----------|----------|
| Emission Reduction (%) | 0.30 | 8 | 6 | 9 |
| Implementation Cost ($) | 0.25 | 5 | 8 | 3 |
| Payback Period (months) | 0.20 | 6 | 4 | 8 |
| Regulatory Alignment | 0.15 | 9 | 7 | 6 |
| Technical Risk | 0.10 | 7 | 8 | 4 |
| **Weighted Score** | | **6.85** | **6.65** | **6.15** |

**Design of Experiments for Multi-Objective Optimization:**
Response surface methodology balancing yield against emissions:
$$
\max Y(x), \quad \min E(x) \quad s.t. \quad g_j(x) \leq 0
$$

Desirability function approach:
$$
D = \left(d_Y^{w_Y} \times d_E^{w_E}\right)^{1/(w_Y + w_E)}
$$

**Piloting and Scale-Up Considerations:**
- Mass balance closure verification at pilot scale
- Unintended burden shifting assessment (e.g., reduced air emissions increasing wastewater load)
- Supplier capability confirmation for green material substitutions

### Control Phase — Sustaining Environmental Gains

**Statistical Process Control for Emissions:**
Control charts with environmental specification limits:
- I-MR charts for continuous emission monitoring
- p-charts for compliance/non-compliance binary outcomes
- CUSUM for detecting small persistent drifts toward permit limits

**Standard Operating Procedures Update:**
- Embed environmental checkpoints in work instructions
- Visual management for energy/water consumption at operator level
- Escalation protocols for approaching control limits

**Sustainability Dashboard Integration:**
Real-time KPI tracking linked to MES/SCADA:
$$
KPI_{dashboard} = \left\{SEC, WUI, CEI, Yield, OEE, Compliance\%\right\}
$$

Automated alerts when environmental metrics deviate >2σ from improved baseline.

## Advanced Green Six Sigma Tools

### Life Cycle Inventory Integration

Embedding LCI data collection within Measure phase enables cradle-to-gate optimization rather than gate-to-gate suboptimization:
$$
LCI_{process} = \sum_i m_i \times EF_i + \sum_j e_j \times EF_j + \sum_k w_k \times EF_k
$$

### Carbon Shadow Pricing in ROI Calculations

Internal carbon price incorporated into financial justification:
$$
NPV_{green} = \sum_{t=0}^{n} \frac{(Savings_t + \Delta E_t \times CP_t) - Investment_t}{(1+r)^t}
$$

Where $CP_t$ = Internal carbon price trajectory ($/tCO₂e), making sustainability projects financially comparable to conventional improvements.

### Digital Twin Validation

Simulating improvement scenarios before physical implementation reduces risk:
$$
\hat{E}_{improved} = f(x_{opt}, z_{fixed}) + \epsilon_{model}
$$

Model validation requiring $R^2 > 0.90$ and residual normality before deployment authorization.

## References

- Antony, J., Sony, M., & McDermott, O. (2024). Green Six Sigma: A systematic literature review and future research agenda. *Total Quality Management & Business Excellence*, 35(3-4), 412-438.
- Garza-Reyes, J. A., et al. (2023). Integrating lean six sigma and sustainability: A structured framework for industrial applications. *Journal of Cleaner Production*, 420, 138356.
- Singh, R., & Kumar, V. (2024). Multi-objective optimization in green manufacturing using response surface methodology. *International Journal of Production Research*, 62(8), 2987-3012.
- ISO 14051:2023. *Environmental management — Material flow cost accounting*. International Organization for Standardization.
- EPA. (2025). *Six Sigma for Environmental Excellence: Case Studies and Best Practices*. U.S. Environmental Protection Agency.

</content>

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
