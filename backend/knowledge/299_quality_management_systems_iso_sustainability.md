# Module 299: Integrated Management Systems (IMS: ISO 9001, 14001, 45001, 27001) & PAS 99 Framework

## Conceptual Framework

Large industrial organizations historically accumulated parallel management systems — quality (ISO 9001:2015), environment (ISO 14001:2015), occupational health & safety (ISO 45001:2018), information security (ISO/IEC 27001:2022) — each with its own manual, procedures, audits, and document control bureaucracy. The **Integrated Management System (IMS)** consolidates them into one governance architecture by exploiting their shared DNA: since 2012 all ISO management standards follow the **High-Level Structure (Harmonized Structure, formerly Annex SL)** — ten identical clause themes (Context → Leadership → Planning → Support → Operation → Performance Evaluation → Improvement) built on Plan-Do-Check-Act. PAS 99, developed by BSI, provided the earlier integration specification and remains the reference framework for common-requirements consolidation.

Integration operates at escalating depth: *documentation* integration (single manual, unified procedures), *process* integration (one risk register feeding quality/environmental/OHS/security risk-based thinking per Clause 6.1), *audit* integration (joint internal and combined certification audits under IAF MD rules), and *strategic* integration (unified policy cascade into a single balanced-scorecard governance loop). Benefits concentrate in reduced duplication (typically 30–50% audit-cost reduction), elimination of contradictory procedures at interfaces, and a coherent organizational-culture signal that quality, safety, environment, and security are one management discipline rather than competing silos.

## Mathematical Formulation

Degree of structural integration:

$$\text{IID} = \dfrac{N_{\text{shared procedures}}}{N_{\text{total standard clauses}}} \times 100\% \geq 80\%$$

Economic justification through consolidated-audit savings:

$$\text{Audit Savings Index} = 1 - \dfrac{C_{\text{integrated}}}{\sum_{k=1}^{M} C_{\text{standalone}, k}}$$

where integrated audit days follow shared-clause overlap: $\text{Days}_{\text{integrated}} = \sum_c d_c \cdot (1 - o_c)$ with $o_c$ the overlap fraction of common clause $c$. Risk-register unification scores aggregate exposure across disciplines on a normalized scale:

$$R_{\text{org}} = \max_{j}\left(\text{Severity}_j \times \text{Likelihood}_j \times w_j\right) \;\rightarrow\; \text{top-risk governance agenda}$$

Document-control efficiency improves as single-source-of-truth indexing reduces obsolete-copy incidents — measurable via audit nonconformity counts $NC(t)$ trending toward zero under IMS maturity curves.

## Implementation Methodology

1. **Gap & overlap analysis:** map each standard's mandatory clauses against existing procedures; classify as unique, overlapping, or conflicting.
2. **Architecture design:** one policy hierarchy, unified context/stakeholder analysis, integrated aspects–impacts–hazards register, single competence matrix.
3. **Process re-engineering:** merge document control, internal audit, management review, corrective action (CAPA), and MOC workflows.
4. **Combined auditing:** train cross-disciplinary lead auditors; sequence certification-body visits for joint stage-1/stage-2 assessments.
5. **Continual improvement:** integrate KPI dashboards (quality PPM, LTIR, emissions intensity, security incidents) into one performance-review cadence with PDCA-driven resource allocation.

## Industrial Applications & Case Evidence

A semiconductor manufacturer integrating ISO 9001, 14001, 45001, and 27001 into a PAS 99-aligned IMS cut annual audit costs 46% by replacing four standalone surveillance cycles with combined audits and eliminating ~200 duplicated procedures. Similar integrations anchor oil-and-gas contractor prequalification, automotive supplier gateways combining IATF 16949 with ISO 14001/45001, and hospital quality-safety-information-security convergence.

## Related Modules

Module 279 (Occupational H&S Standards), Module 280 (Sustainability Engineering & LCA), Module 298 (TQM & Sustainability), Module 300 (Professional Practice & EPC Governance).

## References

1. BSI. (2012). *PAS 99: Specification of Common Management System Requirements as a Framework for Integration*. British Standards Institution.
2. ISO. (2021). *Annex SL / Harmonized Structure* appendices to ISO management system standards (ISO 9001:2015; ISO 14001:2015; ISO 45001:2018; ISO/IEC 27001:2022).
3. Karapetrovic, S., & Casadesús, M. (2009). Dynamics in integrated management systems. *Supply Chain Management: An International Journal*, 14(1), 2–10.
4. International Journal of Quality & Reliability Management (2024).
