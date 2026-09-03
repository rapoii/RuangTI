# Module 171: Human Reliability Assessment (HEART, THERP, HRA)

## Conceptual Framework
Human Reliability Assessment (HRA) quantifies Human Error Probabilities (HEPs) for integration into Probabilistic Risk Assessments (PRA/PSA) of safety-critical systems. **First-generation techniques** (THERP, HEART, SPAR-H) decompose tasks into discrete steps and multiply nominal error rates by contextual modifiers. **Second-generation methods** (ATHEANA, CREAM) model cognitive error mechanisms — how unsafe actions emerge from performance contexts and organizational factors. The distinction matters for digital control rooms: first-generation databases predate soft-control interfaces where slips of the mouse or mode confusion dominate over classic valve-turning errors. HRA outputs feed fault trees and event trees as human-failure branches, enabling risk-informed decisions on procedure design, staffing, and automation boundaries.

## THERP (Technique for Human Error Rate Prediction)
Event-tree based methodology (Swain & Guttmann, NUREG/CR-1278): tasks decompose into binary success/failure nodes with Basic HEPs (BHEP) from the THERP database, modified by Performance Shaping Factors (PSF):

$$HEP_{task} = 1 - \prod_{i=1}^{n}\left(1 - BHEP_i \cdot PSF_i\right)$$

For serial dependent steps, conditional probabilities apply via dependency coupling (zero, low, moderate, high, complete dependence):

$$P(F_{B}|F_{A}) = \frac{1 + P(F_B)}{2} \quad (\text{high dependence}), \qquad P(F_B | F_A) \approx P(F_B) \quad (\text{zero dependence})$$

Recovery credit from independent verifiers is modeled explicitly — a key strength for procedure-based operations; screening values are rounded conservatively upward before final quantification per NUREG guidance.

## HEART (Human Error Assessment and Reduction Technique)
Nominal HEPs assigned by Generic Task Type (GTT), multiplied by Error Producing Condition (EPC) enhancements weighted by Assessed Proportion Of Affect ($APOA \in [0,1]$):

$$HEP = NHEP \times \prod_{j=1}^{m}\left[(EPC_j - 1)\cdot APOA_j + 1\right]$$

Representative GTTs: routine highly-practiced task ($NHEP = 0.00002$–$0.0004$); restore/shift system following procedures ($NHEP = 0.003$); complex non-routine decision under stress ($NHEP = 0.16$). Dominant EPCs include unfamiliarity (×3), time shortage (×11), poor feedback (×8), and operator inexperience (×3). The multiplicative form makes HEART sensitive to assessor judgment → inter-analyst calibration workshops are standard practice; uncertainty bounds (median ×3 / ÷3) propagate through fault trees via Monte Carlo sampling.

## Second-Generation HRA & Digitalization
- **ATHEANA:** Retrospective framing identifying *error-forcing contexts* combining plant conditions + cognitive mechanisms.
- **CREAM:** Core method classifying cognitive function failures (observation, interpretation, planning, execution) with Common Performance Conditions (CPCs) aggregated into a control-mode score mapping onto scrambled, opportunistic, tactical, or strategic control modes with characteristic error-rate bands.
- **IAEA TECDOC-1842** guidance integrates digital instrumentation effects (alarm rationalization, computerized procedures) on HEP baselines.

## Industrial Applications
- Nuclear PSA human-failure event quantification (post-initiator operator actions).
- Offshore drilling well-kill procedure risk studies; aviation maintenance error audits (MEDA adaptation).
- Pharmaceutical GMP deviation prediction for batch record completion and aseptic intervention qualification in isolators.
- Railway signaling misuse analysis and SPAD (signal passed at danger) prevention.

## Related Modules
- **Module 170 (Signal Detection Theory)** — micro-model of detection errors underlying HEP.
- **Module 243 (FTA/DFTA)** — HEP as basic events in system trees.
- Module 168 (Situation Awareness) — cognitive precursor of diagnostic errors.

## References
- Swain, A. D., & Guttmann, H. E. (1983). *Handbook of Human Reliability Analysis with Emphasis on Nuclear Power Plant Applications*. NUREG/CR-1278.
- Williams, J. C. (1988). HEART: A proposed method for assessing and reducing human error. *9th Advances in Reliability Technology Symposium*, University of Bradford.
- Kirwan, B. (1994). *A Guide to Practical Human Reliability Assessment*. Taylor & Francis.
- Kirwan, B., & Ainsworth, L. (Eds.). (2023). *A Guide to Practical Human Reliability Assessment* (2nd ed.). Taylor & Francis.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
