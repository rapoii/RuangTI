# Module 287: Carbon Capture, Utilization, and Storage (CCUS) & Heavy Industry Decarbonization Techno-Economics

## Conceptual Framework

CCUS is the abatement pathway for industrial emissions that resist electrification: process chemistry emissions (cement calcination CaCO₃ → CaO + CO₂, steel blast furnaces), high-temperature-heat combustion, and residual flue-gas streams. The technology chain comprises **capture** (post-combustion amine absorption — 30 wt% MEA benchmark with reboiler duty ≈ 3.0–3.5 GJ/ton CO₂; pre-combustion syngas shifting; oxy-fuel combustion; emerging solid sorbents and membranes), **compression and transport** (supercritical CO₂ pipelines at >110 bar), and **utilization or storage** — enhanced oil recovery (CO₂-EOR), mineral carbonation reacting Mg/Ca silicates to stable carbonates (exothermic, permanent), concrete curing, or deep saline-aquifer sequestration under monitoring obligations.

Techno-economics decide deployment sequencing: levelized cost of avoided carbon varies by an order of magnitude across sources (ethanol fermentation ≈ cheapest; cement kilns and direct air capture ≈ most expensive), so portfolio optimization ranks capture projects by marginal abatement cost within corporate decarbonization pathways aligned to IEA Net Zero milestones and national targets such as Indonesia's 2035 clean-industry agenda.

## Mathematical Formulation

Levelized cost of carbon abatement combines annualized CAPEX with operating costs net of utilization revenue:

$$\text{LCCA} = \dfrac{\text{CAPEX}\times\text{CRF} + \text{OPEX}_{\text{annual}} - \text{Revenue}_{CO_2}}{\text{Annual } CO_2 \text{ Avoided}} \quad [\text{USD/tCO}_2]$$

$$\text{CRF} = \dfrac{r(1+r)^n}{(1+r)^n - 1}$$

Capture efficiency for a flue-gas stream:

$$\eta_{\text{capture}} = \dfrac{\dot{m}_{CO_2,\text{captured}}}{\dot{m}_{CO_2,\text{inlet}}} \times 100\%$$

Energy penalty expresses the parasitic load reducing net plant output:

$$EP = \dfrac{W_{\text{gross}} - W_{\text{net, capture}}}{W_{\text{gross}}} \times 100\%, \qquad q_{reb} \approx 3.0\text{–}3.5 \; \text{GJ/tCO}_2 \; (\text{MEA})$$

Mineral carbonation stoichiometry exemplifies permanent storage chemistry: $\text{Mg}_2\text{SiO}_4 + 2\,CO_2 \rightarrow 2\,\text{MgCO}_3 + \text{SiO}_2$ (ΔH < 0). Avoidance accounting must credit only net storage permanence, discounting utilization products with short re-release half-lives.

## Implementation Methodology

1. **Source screening:** inventory emission points with concentration, flow, and partial pressure — the dominant drivers of capture cost.
2. **Technology matching:** amine systems for dilute flue gas; oxy-fuel or membrane candidates at high-purity streams; evaluate solvent degradation risks with SOx/NOx pretreatment requirements.
3. **Integration study:** heat-integration pinch analysis to supply reboiler duty from available steam; quantify energy penalty on site utility balance.
4. **Transport/storage due diligence:** pipeline routing, injectivity assessment, pore-space ownership, MRV plan per storage regulations.
5. **Financial structuring:** LCCA benchmarking against internal carbon price (Module 283), tax-credit regimes, and offtake contracts for utilization revenue.

## Industrial Applications & Case Evidence

Techno-economic feasibility of an amine-capture unit retrofitted onto a 3,000-ton clinker/day cement kiln targeted net-zero operations by 2035: capture covered both fuel-combustion and calcination CO₂, with LCCA dominated by reboiler steam demand mitigated through waste-heat recovery integration. Parallel deployments include Sleipner saline storage (operating since 1996), Quest (Scotford) hydrogen-plant capture, Boundary Dam power retrofit, and gulf-coast CO₂-EOR networks monetizing anthropogenic CO₂.

## Related Modules

Module 280 (Sustainability Engineering & LCA), Module 283 (Internal Carbon Pricing & Shadow Price), Module 286 (Life-Cycle Costing & TCO), Module 289 (Sustainable Manufacturing).

## References

1. International Energy Agency (IEA). (2023). *CCUS in Clean Energy Transitions* / CCUS Projects Database 2023. IEA, Paris.
2. IPCC. (2022). *Climate Change 2022: Mitigation of Climate Change* (AR6 WGIII), Chapter 11 — Industry; Chapter 12 — Cross-sectoral perspectives.
3. Global CCS Institute. (2023). *Global Status of CCS Report*.
4. Applied Energy (2024).

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
