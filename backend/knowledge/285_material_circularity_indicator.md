# Module 285: Industrial Symbiosis & Kalundborg Eco-Industrial Park Resource By-Product Synergy

## Conceptual Framework

Industrial Symbiosis (IS) organizes geographically proximate, heterogeneous firms into exchange networks where one plant's by-product — waste heat, steam, fly ash, slag, CO₂, wastewater, or residual biomass — becomes another's feedstock or utility. The archetype is **Kalundborg, Denmark** (evolving since 1972): a power station, refinery, pharmaceutical plant, plasterboard manufacturer, and municipal utilities linked through steam pipelines, cooling-water loops, and material streams that collectively divert hundreds of thousands of tons annually from landfill while displacing virgin fuel and groundwater extraction.

Analytically, an eco-industrial park (EIP) is a directed network $G = (\mathcal{V}, \mathcal{E})$: nodes $\mathcal{V}$ are plants, edges $\mathcal{E}$ are feasible exchanges constrained by quantity balance, temporal synchronization, quality/contamination limits, and transport cost. Governance matters as much as physics: successful parks operate under facilitation entities with data-matching platforms (by-product registers), long-term take-or-pay contracts, and trust-building institutions — the reason UNIDO–World Bank–GIZ published *An International Framework for Eco-Industrial Parks* (2021) standardizing performance requirements across environmental, social, and management dimensions for park developers and governments.

## Mathematical Formulation

Network-level resource savings index normalizing avoided virgin inputs:

$$\text{RSI} = \dfrac{\sum_{i} \Delta M_{\text{virgin}, i} + \sum_{j} \Delta E_{\text{fossil}, j}}{\sum M_{\text{baseline}} + \sum E_{\text{baseline}}}$$

Exchange-network design is a mixed-integer program minimizing total connection and treatment cost:

$$\min \sum_{(u,v)} C_{\text{piping}}(u,v) + C_{\text{treatment}}(u,v) \quad \text{s.t.} \quad Q_{uv} \leq S_u, \; Q_{uv}^{\min} \leq Q_{uv},\; \text{Quality}_{u,v} \geq \text{Spec}_v$$

Waste-heat cascading applies pinch logic: a source stream at temperature $T_h$ can serve any sink demanding $T_s$ when $\Delta T_{\min} = T_h - T_s \geq 10\text{–}20\,\text{K}$, prioritizing highest-value matches. Substitution coefficients translate by-product quality into displaced virgin equivalents: $\Delta M_{\text{virgin}, v} = \phi_{uv}\, Q_{uv}$ with $0 < \phi \leq 1$ (e.g., 1 ton GGBFS slag replaces ~0.85 ton clinker). Network resilience is scored via node redundancy:

$$R_{\mathcal{G}} = \dfrac{\#\{\text{alternate suppliers per sink}\}}{\#Sinks}$$

since single-supplier dependencies collapse symbiosis when a partner shuts down.

## Implementation Methodology

1. **Material-flow census:** meter all input/output streams of candidate firms (mass, energy content, temperature, contamination profile).
2. **Synergy matching:** run database cross-matching of surplus-demand pairs; screen technical feasibility (quality spec, distance, seasonality).
3. **Techno-economic screening:** pipeline CAPEX vs displaced utility cost; compute payback and RSI contribution per edge.
4. **Contracting & governance:** negotiate long-term supply agreements with quality clauses; establish park facilitator for dispute resolution and new-member onboarding.
5. **MRV & scaling:** track realized substitution, GHG savings (linking to Module 287 accounting), and expand the network iteratively.

## Industrial Applications & Case Evidence

Design work on a Cilegon (Indonesia) heavy-industry cluster mapped steam export from a captive power plant to chemical-process users and steelmaking slag routing to cement clinker substitution — replicating Kalundborg mechanics in an emerging-market setting where utility pricing gaps make symbiosis economics compelling. Global analogues include Ulsan (South Korea), Kwinana (Australia), and UK National Industrial Symbiosis Programme (NISP) methodology now exported worldwide.

## Related Modules

Module 280 (Sustainability Engineering & LCA), Module 281 (Cradle-to-Cradle & Material Passports), Module 288 (Industrial Ecology), Module 291 (Circular Manufacturing).

## References

1. UNIDO, World Bank, & GIZ. (2021). *An International Framework for Eco-Industrial Parks*. UNIDO.
2. Chertow, M. R. (2000). Industrial symbiosis: Literature and taxonomy. *Annual Review of Energy and the Environment*, 25, 313–337.
3. Jacobsen, N. B. (2006). Industrial symbiosis in Kalundborg, Denmark: A quantitative assessment. *Journal of Industrial Ecology*, 10(1–2), 239–255.
4. Journal of Industrial Ecology (2024).
