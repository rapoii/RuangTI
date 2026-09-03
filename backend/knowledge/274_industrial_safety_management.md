# Module 274: Industrial Safety Management Systems

## Overview

Industrial Safety Management Systems (SMS) provide structured frameworks for managing occupational health and safety risks in manufacturing, construction, mining, and process industries. Modern SMS integrates regulatory compliance (OSHA, EU-OSHA), international standards (ISO 45001), and continuous improvement methodologies to achieve zero-harm cultures. This module covers SMS architecture, risk-based planning, operational controls, performance evaluation, and leadership integration specific to industrial engineering contexts.

## ISO 45001:2018 Framework

ISO 45001 follows the High-Level Structure (HLS) aligned with ISO 9001/14001, enabling integrated management systems:

$$
\text{SMS Effectiveness} = f(\text{Context}, \text{Leadership}, \text{Planning}, \text{Support}, \text{Operation}, \text{Evaluation}, \text{Improvement})
$$

### Key Clauses for IE
- **Clause 4 (Context)**: Identify internal/external issues affecting OH&S; determine scope including contractor/multi-employer worksites.
- **Clause 5 (Leadership)**: Top management accountability; consultation/participation of workers at all levels.
- **Clause 6 (Planning)**: Hazard identification methodology; legal requirements register; objectives linked to measurable KPIs.
- **Clause 8 (Operation)**: Hierarchy of controls implementation; change management; procurement/supplier safety criteria; emergency preparedness.

## Risk-Based Safety Planning

### Hierarchy of Controls Integration
Safety planning must systematically apply the hierarchy:

$$
\text{Control Priority}: \text{Elimination} > \text{Substitution} > \text{Engineering} > \text{Administrative} > \text{PPE}
$$

Industrial engineers uniquely contribute through:
- **Design-stage elimination**: DFM/DFA incorporating safety constraints.
- **Engineering controls**: Machine guarding, ventilation system design, ergonomic workstation layout.
- **Administrative optimization**: Standard work procedures balancing productivity and safety margins.

### Safety Critical Task Analysis (SCTA)
For high-risk tasks, SCTA identifies performance-shaping factors:
$$
P(\text{Error}) = P(\text{Nominal Error}) \times \prod_{i=1}^{n} PSF_i
$$
Where $PSF$ includes time pressure, fatigue, training adequacy, procedure clarity, and supervision quality.

## Operational Safety Controls

### Permit-to-Work Systems
Formal authorization for non-routine hazardous activities:
- Hot work, confined space entry, lockout/tagout, excavation, working at height.
- Digital permit systems enable real-time status tracking and conflict detection.
- Integration with maintenance CMMS ensures coordination between operations and maintenance.

### Contractor Safety Management
Multi-employer worksite challenges require:
- Prequalification based on TRIR, EMR, safety program maturity.
- Site-specific orientation and competency verification.
- Joint safety committees and unified incident reporting.
- Contractual flow-down of SMS requirements.

$$
\text{Contractor Risk Score} = w_1 \cdot TRIR + w_2 \cdot EMR + w_3 \cdot (1 - \text{Program Maturity}) + w_4 \cdot \text{Historical Incidents}
$$

## Performance Measurement & Evaluation

### Leading vs. Lagging Indicators
| Lagging | Leading |
|---------|---------|
| TRIR / LTIFR | Safety observations reported |
| Lost days | Near-miss reporting rate |
| Recordables | Training completion % |
| Fatalities | Audit finding closure rate |
| Workers' comp costs | Safety culture survey score |

Balanced scorecard approach recommended:
$$
\text{Safety Performance Index} = \alpha \cdot I_{lagging} + \beta \cdot I_{leading} + \gamma \cdot I_{cultural}
$$
Where $\alpha + \beta + \gamma = 1$, typically $\alpha=0.3, \beta=0.4, \gamma=0.3$.

### Statistical Process Control for Safety
Apply control charts to safety metrics to distinguish common cause from special cause variation:
- u-charts for injury rates (variable exposure hours).
- p-charts for unsafe observation percentages.
- CUSUM/EWMA for detecting gradual deterioration in leading indicators.

## Safety Culture & Human Factors

### Bradley Curve Model
Progression from reactive → dependent → independent → interdependent safety culture. Assessment tools include DuPont STOP, Hearts & Minds, and Safety Climate Assessment Toolkit.

### Just Culture Framework
Distinguish human error, at-risk behavior, and reckless conduct:
- **Human Error**: Console, fix system triggers.
- **At-Risk Behavior**: Coach, remove incentives for shortcuts.
- **Reckless Behavior**: Discipline, enforce accountability.

Just culture enables reporting without fear while maintaining appropriate accountability boundaries.

## References

1. International Organization for Standardization. (2018). *ISO 45001:2018 Occupational health and safety management systems*. ISO.
2. Occupational Safety and Health Administration. (2024). *Safety and Health Program Management Guidelines*. OSHA.
3. Reason, J. (2023). *Managing the Risks of Organizational Accidents* (2nd ed.). Routledge.
4. Hopkins, A. (2024). *Organising for Safety: How Structure Creates Disaster*. CCH Australia.
5. European Agency for Safety and Health at Work. (2023). *European Survey of Enterprises on New and Emerging Risks (ESENER)*. EU-OSHA.
6. Guldenmund, F. W. (2023). Understanding safety culture: A review and research agenda. *Safety Science*, 167, 106267.

</content>

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
