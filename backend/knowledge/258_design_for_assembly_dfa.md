# Module 258: Design for Disassembly (DfD) & Remanufacturing End-of-Life Index

## Conceptual Framework

While Design for Assembly (DFA) minimizes part count and insertion time for first-life production, Design for Disassembly inverts the objective: it engineers the product so that, at end-of-life (EoL), components can be separated rapidly and non-destructively to preserve residual economic and material value. DfD is the enabling discipline of remanufacturing, refurbishment, and component harvesting within the 9R circularity hierarchy (Refuse → Rethink → Reduce → Reuse → Repair → Refurbish → Remanufacture → Repurpose → Recycle → Recover), because value retention collapses as one descends from remanufacturing (retaining embedded form/function value, typically 60–85% of original manufacturing cost) toward material recycling (retaining only scrap value).

Core design guidelines include: snap-fit standardization replacing adhesives and welds where structural duty allows; non-destructive fastener release (captured screws, quarter-turn locks); single-direction disassembly sequences without part flipping; material homogeneity and polymer marking (ISO 11469) to prevent contamination; and modular architecture that isolates hazardous or wear-prone elements (batteries, seals, electronics) into quickly removable cores. The economic logic follows the Disassembly Time–Value curve: each added second of labor erodes margin, so disassembly efficiency directly gates which recovery route is profitable.

## Mathematical Formulation

The **Disassembly Efficiency Index (DEI)** compares ideal against actual separation effort:

$$\text{DEI} = \dfrac{\sum t_{\text{theoretical min disassembly}}}{\sum t_{\text{actual disassembly}}} \times 100\%$$

Remanufacturing profitability for a recovered core aggregates revenue over acquisition, teardown labor, and reconditioning costs:

$$\Pi_{\text{reman}} = P_{\text{reman}} - C_{\text{core}} - \sum_{k} t_{\text{disassemble},k}\cdot R_{\text{labor}} - C_{\text{clean/test}} - \sum_{j} c_j q_j$$

where $c_j, q_j$ denote replacement-part cost and quantity. A normalized **End-of-Life Value Retention Ratio** guides route selection per module:

$$\text{VRR}_{i} = \dfrac{V_{\text{route}, i} - \sum_{k \in S_i} t_{k} R_{\text{labor}}}{V_{\text{new}, i}}, \quad \text{choose } i^* = \arg\max_i \text{VRR}_i$$

Disassembly precedence is modeled as a directed graph $G=(V,E)$ with parts as nodes and removal-order constraints as edges; the optimal selective-disassembly problem (extracting target part $p$ at minimum total time) is NP-hard, solved by branch-and-bound or greedy heuristic on depth metrics. Fastener diversity penalty can be tracked via a tool-count index $\eta_{\text{tool}} = N_{\text{distinct tools}}/N_{\text{fasteners}}$, targeted near zero.

## Implementation Methodology

1. **EoL requirements mapping:** translate regulatory drivers (EU WEEE, EU Battery Regulation 2023/1542 removable-battery mandate) and core-supply strategy into target DEI and teardown-time budgets.
2. **Precedence graph & time study:** build the disassembly DAG in CAD (digital mock-up), assign motion-time standards per joint type, and compute critical-path teardown time.
3. **Joint rationalization:** replace bonded/welded joints with releasable alternatives wherever stress analysis permits; standardize fastener head, thread, and tool.
4. **Marking & material passport:** label polymers per ISO 11469 and register composition in a digital product passport to enable downstream sorting.
5. **Reverse-line validation:** physically pilot-teardown 5–10 units, re-time operations, and iterate design changes before launch.

## Industrial Applications & Case Evidence

Redesign of an electric-vehicle traction battery pack around a modular DfD locking system cut cell-module removal from 45 minutes to 4.5 minutes (DEI improvement ≈ 90%), converting the pack from a recycling-only asset into a viable second-life storage core. Similar approaches govern toner cartridges, single-use medical device refurbishment screening, industrial gearboxes, and photocopier cores where OEM-captive reman programs recover high-margin cores.

## Related Modules

Module 257 (Design for Manufacturability), Module 259 (Design for X), Module 281 (Cradle-to-Cradle & Material Passports), Module 285 (Industrial Symbiosis networks), Module 292 (Eco-Design / DfE).

## References

1. Boothroyd, G., Dewhurst, P., & Knight, W. A. (2011). *Product Design for Manufacture and Assembly* (3rd ed.). CRC Press.
2. Hatcher, G. D., Ijomah, W. L., & Windmill, J. F. C. (2013). Design for remanufacture: A literature review. *Journal of Cleaner Production*, 45, 45–53.
3. Journal of Cleaner Production (2024).
4. Resources, Conservation and Recycling (2023).

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
