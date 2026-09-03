# Module 275: Hazard Identification & Risk Assessment (HIRADC)

## Overview

Hazard Identification, Risk Assessment, and Determining Control (HIRADC) is the foundational methodology in occupational safety management for systematically identifying workplace hazards, evaluating their associated risks, and implementing appropriate control measures. In industrial engineering, HIRADC serves as the proactive backbone of ISO 45001 compliance and operational risk management, ensuring that process design, equipment selection, and work methods inherently minimize harm potential before incidents occur.

## Hazard Identification Techniques

### Systematic Hazard Identification Methods

Industrial engineers employ multiple complementary techniques to ensure comprehensive hazard coverage:

1. **Job Hazard Analysis (JHA)**: Decomposes tasks into discrete steps to identify hazards at each stage
   $$ \text{Risk}_{step} = P(\text{exposure}) \times C(\text{consequence}) $$

2. **Process Hazard Analysis (PHA)**: Structured methodologies including HAZOP, What-If, and FMEA applied to process systems
   - HAZOP uses guide words (No, More, Less, As Well As, Part Of, Reverse, Other Than) systematically applied to process parameters

3. **Safety Inspection Checklists**: Standardized verification against regulatory requirements and best practices

4. **Incident/Near-Miss Analysis**: Learning from precursor events using root cause analysis (RCA) techniques like 5-Why and Fishbone diagrams

5. **Ergonomic Risk Assessment**: Tools such as RULA, REBA, and NIOSH Lifting Equation for musculoskeletal disorder prevention

$$ \text{LI} = \frac{L}{LCM} \times VM \times DM \times AM \times FM \times CM $$

Where LI = Lifting Index, L = load weight, LCM = load constant (23 kg), and VM, DM, AM, FM, CM are multipliers for vertical, distance, asymmetric, frequency, and coupling factors respectively.

## Risk Assessment Matrix

### Semi-Quantitative Risk Rating

The standard risk matrix combines likelihood and severity:

$$ R = L \times S $$

| Likelihood (L) | Description | Severity (S) | Description |
|----------------|-------------|--------------|-------------|
| 5 | Almost certain | 5 | Fatality/Catastrophic |
| 4 | Likely | 4 | Major injury/Extensive damage |
| 3 | Possible | 3 | Lost time injury |
| 2 | Unlikely | 2 | Medical treatment |
| 1 | Rare | 1 | Minor/First aid |

Risk ratings typically map to action priorities:
- **High (15-25)**: Immediate action required; stop work if necessary
- **Medium (8-12)**: Action plan within defined timeframe
- **Low (1-6)**: Monitor and manage through routine procedures

### Quantitative Refinements

For high-consequence scenarios, semi-quantitative matrices give way to quantitative methods:
- **Fault Tree Analysis (FTA)**: Deductive logic modeling top events
  $$ P(Top) = 1 - \prod_{i=1}^{n}(1 - P(Basic_i)) \quad \text{(for OR gate)} $$
- **Event Tree Analysis (ETA)**: Inductive consequence modeling
- **Bow-Tie Analysis**: Visual integration of preventive and mitigative barriers

## Hierarchy of Controls

The universally accepted control hierarchy prioritizes effectiveness over convenience:

1. **Elimination**: Physically remove the hazard (e.g., redesign process to eliminate toxic chemical)
2. **Substitution**: Replace with less hazardous alternative (e.g., water-based vs. solvent-based cleaning)
3. **Engineering Controls**: Isolate people from hazard (guarding, ventilation, automation)
4. **Administrative Controls**: Change how people work (procedures, training, scheduling, signage)
5. **PPE**: Protect the worker as last line of defense

Effectiveness follows an inverse relationship with reliance on human behavior:
$$ E_{elimination} > E_{substitution} > E_{engineering} > E_{administrative} > E_{PPE} $$

## Digital HIRADC Systems

Modern implementations leverage technology for enhanced effectiveness:
- **Mobile inspection apps** with offline capability and photo documentation
- **AI-assisted hazard recognition** using computer vision on site cameras
- **Dynamic risk dashboards** integrating real-time sensor data with assessment records
- **Predictive analytics** correlating leading indicators with incident trends

Research by Targoutis et al. (2024) demonstrated that digital HIRADC systems reduced identification-to-control closure time by 42% compared to paper-based approaches in automotive manufacturing.

## Integration with Management Systems

HIRADC outputs feed directly into:
- **Operational planning and control** (ISO 45001 Clause 8.1)
- **Management of change** processes (new hazards introduced by modifications)
- **Emergency preparedness** (residual risks requiring response plans)
- **Performance evaluation** through leading/lagging indicator tracking
- **Management review** inputs for strategic OH&S decisions

## References

1. International Organization for Standardization. (2018). *ISO 45001:2018 Occupational health and safety management systems — Requirements*. ISO.
2. CCPS. (2023). *Guidelines for Hazard Evaluation Procedures* (4th ed.). Wiley-AIChE.
3. Targoutis, M., Psarommatis, F., & Kiritsis, D. (2024). Digital transformation of occupational safety: AI-enhanced HIRADC in smart factories. *Journal of Manufacturing Systems*, 73, 215–230.
4. OSHA. (2024). *Recommended Practices for Safety and Health Programs*. U.S. Department of Labor.
5. NIOSH. (2023). *NIOSH Lifting Equation: Applications Manual* (Rev. ed.). CDC.
6. Reniers, G., & Van Nunen, K. (2023). Dynamic risk assessment in the process industry: State of the art and future directions. *Process Safety and Environmental Protection*, 178, 412–429.

</content>

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
