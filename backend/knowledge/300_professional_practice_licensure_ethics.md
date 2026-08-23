# Module 300: Industrial Engineering Consulting, Technical Feasibility & EPC Project Governance

## Conceptual Framework

This capstone module integrates professional IE practice into the consulting-and-capital-projects value chain: how independent advisors structure **bankable feasibility studies**, how Front-End Engineering Design (FEED) stages de-risk investment decisions, and how Engineering-Procurement-Construction (EPC) execution is governed contractually and measured through Earned Value Management (EVM).

Project front-end loading progresses through FEL-1 (opportunity screening, Class 5/4 estimates, ±50%/−30%), FEL-2 (conceptual design, Class 3 estimate ±20%, technology selection), to FEL-3/FEED (Class 2 ±10%, basis-of-design freeze, permits, financing package). A feasibility study becomes *bankable* when lenders can rely on it: verified resource/reserves, market offtake evidence, EPC price certainty or lump-sum turnkey structure, environmental licensing pathway, and financial model stress-tested for debt service coverage. Post-FID, EPM governance shifts to schedule-cost integration: milestone-linked payment certificates, progress measurement rules (weighted units, earned-milestone methods), change-order control boards, and interface management among owner, EPC contractor, licensors, and lenders' engineer.

## Mathematical Formulation

Earned Value core metrics from Planned Value ($PV$), Earned Value ($EV$), and Actual Cost ($AC$):

$$\text{SPI} = \dfrac{EV}{PV}, \qquad \text{CPI} = \dfrac{EV}{AC}$$

Forecasting completion cost with coupled schedule-cost performance:

$$\text{EAC} = AC + \dfrac{BAC - EV}{\text{CPI} \times \text{SPI}}, \qquad \text{TCPI} = \dfrac{BAC - EV}{BAC - AC}$$

TCPI above ~1.1 signals an unrealistic recovery plan requiring rebaseline. Contingency sizing uses probabilistic schedule/cost simulation over activity networks:

$$P(C \leq C_{P80}) = 0.80, \quad \sigma^2_{PERT} = \left(\dfrac{b - a}{6}\right)^2$$

Feasibility economics screen via discounted indicators:

$$NPV > 0, \qquad IRR > WACC, \qquad DSCR_t = \dfrac{\text{CFADS}_t}{\text{Debt Service}_t} \geq 1.3$$

with sensitivity tornado analysis identifying which technical assumptions (yield, availability, commodity price) dominate bankability.

## Implementation Methodology

1. **Scoping & optionality:** define decision gates, alternatives register, and kill criteria before spending engineering hours.
2. **FEL progression:** iterate block-flow → PFD → P&ID maturity; drive uncertainty out in staged estimates with documented basis books.
3. **Bankability package:** assemble market studies, technology guarantees, ESIA/permits, EPC contracting strategy, and lender's-independent-engineer reviews.
4. **Execution governance:** install EVM system with control accounts, progress-measurement procedure, monthly variance analysis thresholds (e.g., investigate |CV| > 5%).
5. **Close-out:** commissioning handover matrices, punch-list burn-down, lessons-learned capture feeding the next FEL cycle.

## Industrial Applications & Case Evidence

Preparation of a bankable study for a USD 850 million HPAL nickel-smelter development applied staged FEL discipline with EVM-governed FEED execution achieving forecast deviation below 1.5% — enabling debt syndication at favorable terms because cost confidence met lender Class-2 expectations. The same toolkit governs smelter expansions, LNG terminals, waste-to-energy plants, and manufacturing greenfield entries where consulting engineers certify technical-economic integrity.

## Related Modules

Module 270 (Project Portfolio Management), Module 272 (IP & Patent Engineering in technology licensing), Module 286 (Life-Cycle Costing & TCO), Module 299 (Integrated Management Systems).

## References

1. Project Management Institute. (2021). *A Guide to the Project Management Body of Knowledge (PMBOK Guide)* (7th ed.). PMI.
2. Kerzner, H. (2022). *Project Management: A Systems Approach to Planning, Scheduling, and Controlling* (13th ed.). Wiley.
3. AACE International. *RP 18R-97: Cost Estimate Classification System*; *RP 49R-06: Schedule Classification*.
4. International Journal of Project Management (2024).
