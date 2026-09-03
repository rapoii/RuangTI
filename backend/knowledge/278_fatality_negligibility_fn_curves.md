# Module 278: Societal Risk Assessment, ALARP Principle & Value of Statistical Life (VSL)

## Conceptual Framework

While individual risk metrics express the probability for a single hypothetical exposed person, **societal risk** aggregates across all exposed population: it answers whether a facility's potential multi-fatality accidents are tolerable to society. The canonical representation is the **F-N curve** — cumulative frequency $F$ of accidents producing $N$ or more fatalities, plotted on log-log axes. Regulatory acceptability is judged against criterion lines of power-law form, with slope $\alpha$ encoding societal risk aversion: $\alpha = 1$ (risk-neutral aggregation, UK practice) versus $\alpha = 2$ (strong aversion to mass casualties, Netherlands and Hong Kong practice).

The **ALARP principle** (As Low As Reasonably Practicable) partitions risk into intolerable, ALARP/tolerable-with-alara-drivers, and broadly acceptable zones. Between boundaries, duty-holders must reduce risk unless reduction effort is "grossly disproportionate" to benefit — a legal standard originating from *Edwards v National Coal Board* (1949). Cost-benefit analysis operationalizes disproportionality using the **Value of Statistical Life**: US DOT's 2023 departmental guidance sets VSL near USD 13.2 million (2022 dollars), indexed by real income growth; UK HSE applies a proportionate factor (DF ≈ 3–10+) scaling gross disproportion above pure CBA parity.

## Mathematical Formulation

Societal-risk tolerability boundary:

$$F(N) = \sum_{i:\, N_i \geq N} f_i \leq \dfrac{C}{N^{\alpha}}$$

with anchor constant $C$ fixed at the intersection with individual-risk criteria (e.g., Dutch limit: $C = 10^{-5}$/yr at $N=10$, $\alpha=2$). The Potential Loss of Life aggregates expected annual fatalities:

$$\text{PLL} = \sum_{i} f_i N_i$$

ALARP cost-benefit disproportionality test for a candidate measure:

$$\text{DF} = \dfrac{C_{\text{measure}}}{\Delta\text{PLL} \times \text{VSL}} \leq DF_{\max}, \quad DF_{\max} \in [1, 10]$$

Measures passing the test are implemented regardless; measures failing by wide margin may be rejected as grossly disproportionate, documented transparently. Individual-risk check complements: probability of death per year for the maximally exposed person must sit below the intolerable ceiling ($10^{-3}$ UK) and above de-minimis ($10^{-6}$).

## Implementation Methodology

1. Build QRA event trees yielding frequency-consequence pairs $(f_i, N_i)$ using consequence modeling (Module 277) and local population data.
2. Construct F-N scatter against jurisdictional criterion lines; compute PLL and locate zones.
3. Identify risk-reduction portfolios (barrier upgrades, inventory reduction, siting changes) with costs; run DF tests ranked by cost-effectiveness ratio $C/\Delta\text{PLL}$.
4. Implement all reasonably practicable measures until curves enter acceptable zone or residual disproportionality is demonstrably gross.
5. Re-validate periodically: population growth around plants shifts F-N curves upward without any plant change — a recurring finding in land-use planning disputes.

## Industrial Applications & Case Evidence

An ALARP review of an ammonia-storage terminal showed its deluge-system upgrade moved the societal-risk curve from tolerable into broadly acceptable territory at DF ≈ 4 — clearly below gross-disproportion thresholds — justifying mandatory installation despite capital cost. Comparable analyses govern LNG terminals under Seveso III, pipeline corridors (CSA Z662), offshore installations (UK SCR regime), and Indonesian major-hazard facility licensing.

## Related Modules

Module 276 (Bow-Tie & Barrier Management), Module 277 (Consequence Modeling: BLEVE/VCE/Dispersion), Module 275 (HIRADC), Module 279 (Occupational H&S Standards).

## References

1. UK Health and Safety Executive (HSE). (2001). *Reducing Risks, Protecting People (R2P2)*. HSE Books.
2. Jonkman, S. N., van Gelder, P. H. A. J. M., & Vrijling, J. K. (2003). An overview of quantitative risk measures for loss of life and economic damage. *Journal of Hazardous Materials*, 99(1), 1–30.
3. US Department of Transportation. (2023). *Departmental Guidance on Valuation of a Statistical Life*.
4. Risk Analysis (2024).

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
