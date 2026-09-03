# Module 276: Bow-Tie Risk Analysis & Dynamic Barrier Management in Process Safety Management (PSM)

## Conceptual Framework

The Bow-Tie methodology provides the visual-analytical bridge between hazard identification and barrier-based risk management. Centered on a **Top Event** (the moment control over the hazard is lost — e.g., loss of containment), its left wing deploys Fault Tree logic mapping threats through *preventive barriers*, while its right wing deploys Event Tree logic mapping escalation through *mitigative barriers* toward consequence endpoints (people, environment, asset, reputation). Barriers are decomposed into elements — hardware, human action, management system — with assigned owners and performance standards, following CCPS' *Bow Ties in Risk Management* concept book.

Dynamic Barrier Management extends the static diagram into operations by continuously scoring **Barrier Health Indicators** from live data streams: proof-test results, valve partial-stroke diagnostics, corrosion-monitoring trends, training currency, and permit-to-work compliance. Degradation signals trigger maintenance before the barrier's demanded reliability silently decays — the failure mode behind many major accidents (Buncefield, Macondo), where paper barriers existed but were functionally absent at the moment of demand.

## Mathematical Formulation

Threat-side frequency attenuation through independent preventive barriers:

$$f(\text{Top Event}) = \sum_{i \in \text{threats}} f_i \prod_{k \in B_i^{\text{prev}}} \text{PFD}_{i,k}$$

Consequence-side escalation through mitigative barriers:

$$f(C_j) = f(\text{Top Event})\prod_{m \in B_j^{\text{mit}}} \text{PFD}_{j,m}$$

Barrier health integrates degradation state into demanded reliability. Modeling each hardware barrier as a Markov chain with states $\{OK, degraded, failed\}$ and transition matrix $\mathbf{Q}$ yields time-dependent availability:

$$A_k(t) = \boldsymbol{\pi}_0\,\mathbf{Q}^{t}\,\mathbf{1}_{OK}, \qquad \text{PFD}_{k}(t) = 1 - A_k(t)$$

A composite **Barrier Health Index** aggregates normalized indicator scores $h_k \in [0,1]$:

$$\text{BHI}(t) = \prod_{k} h_k(t)^{w_k}, \quad \textstyle\sum_k w_k = 1$$

with alarm thresholds set so that BHI below target forces explicit risk acceptance at defined authority levels. Escalation factors (corrosion undermining instrument integrity, fatigue eroding human response) are treated as conditional multipliers on PFD rather than decorative annotations.

## Implementation Methodology

1. Define top events per major accident hazard from HAZID/HAZOP outputs (Module 275).
2. Build threat/consequence wings; assign barriers with type (preventive/mitigative), independence check, and accountable owner.
3. Quantify critical barriers: derive PFD targets consistent with LOPA/SIL allocation (IEC 61511).
4. Instrument the diagram: map each barrier element to measurable indicators in CMMS/SCADA historian; compute BHI dashboards.
5. Govern: quarterly barrier-review meetings, audit trails of bypasses, and integration of BHI into shift-handover and management-of-change triggers.

## Industrial Applications & Case Evidence

On a Pertamina hydrocracking unit, bow-tie diagrams for high-pressure hydrogen loss of containment were wired to SCADA-derived indicators — flare header vacuum status, ESD valve stroke tests, H₂ detector availability — enabling early detection of a degrading depressurization path weeks before scheduled turnaround. The method is standard across LNG terminals, ammonium nitrate storage, offshore drilling (wellbarrier diagrams), and mining ventilation-on-demand systems.

## Related Modules

Module 243 (RBD/FTA/FMEA Integration), Module 275 (HIRADC), Module 277 (Quantitative Consequence Modeling), Module 278 (Societal Risk & ALARP), Module 279 (Occupational H&S Standards).

## References

1. Center for Chemical Process Safety (CCPS). (2018). *Bow Ties in Risk Management: A Concept Book for Process Safety*. Wiley-AIChE.
2. Center for Chemical Process Safety (CCPS). (2001). *Layer of Protection Analysis: Simplified Process Risk Assessment*. AIChE.
3. IEC 61511:2016, *Functional Safety — Safety Instrumented Systems for the Process Industry Sector*.
4. Reliability Engineering & System Safety (2024).

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
