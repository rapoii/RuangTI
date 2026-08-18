# Module 273: Occupational Health & Industrial Hygiene in Industrial Engineering

## Overview

Occupational health and industrial hygiene (IH) constitute the scientific discipline of anticipating, recognizing, evaluating, and controlling workplace hazards that may cause illness, injury, or impaired well-being among workers. Industrial engineers integrate IH principles into production system design, ensuring that productivity gains do not compromise worker health. The field encompasses chemical, physical, biological, ergonomic, and psychosocial hazard domains, governed by exposure limits established through toxicological research and epidemiological evidence.

## Chemical Hazard Assessment

### Time-Weighted Average Exposure

The fundamental metric for airborne contaminant assessment:

$$TWA = \frac{\sum_{i=1}^{n} C_i t_i}{\sum_{i=1}^{n} t_i} = \frac{C_1 t_1 + C_2 t_2 + \cdots + C_n t_n}{8 \text{ hours}}$$

where $C_i$ is concentration during period i and $t_i$ is duration. OSHA PELs, ACGIH TLVs, and NIOSH RELs define permissible 8-hour TWA limits. For example, respirable crystalline silica PEL = 50 μg/m³ (OSHA 2016 standard).

### Short-Term Exposure Limits

STEL captures peak exposures over 15-minute sampling periods:

$$STEL = \frac{\sum_{j=1}^{m} C_j \Delta t_j}{15 \text{ min}}, \quad \text{max 4 excursions/day with 60-min recovery}$$

Ceiling limits (C) must never be exceeded even instantaneously. Haber's Law approximates dose-response for acute toxins:

$$C \times t = k$$

though modern toxicology recognizes deviations for irritants and sensitizers where threshold effects dominate.

### Sampling Strategy Design

NIOSH 7700 guidance prescribes statistical sampling plans:

$$n = \left(\frac{z_{\alpha/2} \cdot s}{E}\right)^2$$

where n is sample size, s is estimated standard deviation from pilot study, E is desired precision (typically ±25% of OEL), and $z_{\alpha/2}$ corresponds to confidence level (1.96 for 95%). Stratified random sampling across job classifications and shifts ensures representative exposure characterization.

## Physical Hazard Quantification

### Noise Exposure

OSHA uses a 5-dB exchange rate; ACGIH/ISO use 3-dB:

$$D = 100 \times \sum_{i=1}^{k} \frac{C_i}{T_i}, \quad T_i = \frac{8}{2^{(L_i - 90)/ER}}$$

where D is percent dose, $C_i$ is actual exposure duration at level $L_i$, $T_i$ is permissible duration, and ER is exchange rate (5 for OSHA, 3 for ACGIH). Hearing conservation programs trigger at 85 dBA TWA (action level) or 85% dose.

### Thermal Stress Assessment

Wet Bulb Globe Temperature (WBGT) integrates heat stress factors:

$$WBGT_{indoor} = 0.7 T_{wb} + 0.3 T_g$$
$$WBGT_{outdoor} = 0.7 T_{wb} + 0.2 T_g + 0.1 T_{db}$$

ACGIH TLV for heat stress adjusts WBGT thresholds by work-rest cycle and metabolic rate:

$$WBGT_{limit} = f(MET, Clothing, Acclimatization)$$

Bernard et al. (2023) validated physiological strain index models predicting core temperature rise within ±0.3°C for industrial workers wearing chemical protective ensembles.

### Vibration Exposure

Hand-arm vibration assessed per ISO 5349:

$$A(8) = a_{hv} \sqrt{\frac{T_v}{T_0}}, \quad a_{hv} = \sqrt{a_x^2 + a_y^2 + a_z^2}$$

Daily exposure action value = 2.5 m/s², limit value = 5.0 m/s². Whole-body vibration per ISO 2631 evaluates spinal compression and fatigue-decreased proficiency boundaries for vehicle operators.

## Biological Hazard Control

Biosafety levels (BSL-1 through BSL-4) correspond to pathogen risk groups. Industrial applications include wastewater treatment (Legionella, endotoxins), food processing (Salmonella, Listeria), and biopharmaceutical manufacturing (recombinant organisms). Hierarchy of controls applies:

$$Control\ Effectiveness: Elimination > Substitution > Engineering > Administrative > PPE$$

Quantitative microbial risk assessment (QMRA) estimates infection probability:

$$P_{inf} = 1 - \exp(-dose \times r)$$

where r is pathogen-specific infectivity parameter derived from human challenge studies or animal model extrapolation.

## Ergonomic Risk Assessment Tools

### NIOSH Lifting Equation

Revised equation calculates Recommended Weight Limit:

$$RWL = LC \times HM \times VM \times DM \times AM \times FM \times CM$$

where LC = 23 kg load constant, and multipliers account for horizontal distance, vertical height, travel distance, asymmetry angle, frequency, and coupling quality. Lifting Index LI = Load/RWL; LI > 1.0 indicates increased risk, LI > 3.0 requires immediate redesign.

### RULA and REBA

Rapid Upper Limb Assessment scores posture, force, and repetition on 1-7 scale. Rapid Entire Body Assessment extends to whole-body tasks with 1-15 scoring. Both tools validated against EMG and epidemiological data; Waters et al. (2024) demonstrated RULA sensitivity of 0.82 and specificity of 0.71 for predicting upper extremity MSDs in automotive assembly.

## Ventilation Engineering Controls

Local exhaust ventilation design follows mass balance:

$$Q = \frac{G}{C_{target} - C_{background}}$$

where Q is volumetric flow rate, G is generation rate, and $C_{target}$ is design concentration below OEL. Capture velocity requirements depend on contaminant release energy: 0.25-0.5 m/s for low-velocity evaporation, 0.5-1.0 m/s for active generation, 1.0-2.5 m/s for high-velocity grinding. Dilution ventilation provides backup but cannot replace LEV for toxic substances.

## Medical Surveillance Programs

OSHA standards mandate surveillance for specific exposures (lead, asbestos, benzene, noise). Biomonitoring correlates external exposure with internal dose:

$$Biological\ Marker = f(Exposure, Metabolism, Excretion)$$

Blood lead levels (BLL) action level = 5 μg/dL (CDC 2023 reference value). Urinary cadmium adjusted for creatinine accounts for hydration variability. Audiometric testing detects standard threshold shift ≥10 dB at 2000-4000 Hz relative to baseline.

## References

1. ACGIH. (2024). *TLVs and BEIs: Threshold Limit Values for Chemical Substances and Physical Agents*. American Conference of Governmental Industrial Hygienists.
2. Bernard, T. E., Ashley, C. D., & Trentacosta, J. M. (2023). Validation of physiological strain prediction models for chemical protective clothing ensembles. *Journal of Occupational and Environmental Hygiene*, 20(8), 489–502.
3. Waters, T. R., Lu, M.-L., & Werren, D. W. (2024). Predictive validity of RULA for upper extremity musculoskeletal disorders in automotive assembly. *Applied Ergonomics*, 115, 104156.
4. NIOSH. (2023). *Occupational Exposure Sampling Strategy Manual* (DHHS Pub. No. 77-173, Rev.). National Institute for Occupational Safety and Health.
5. OSHA. (2024). *Occupational Safety and Health Standards* (29 CFR 1910). U.S. Department of Labor.
6. ISO. (2023). *ISO 5349-1: Mechanical vibration — Measurement and evaluation of human exposure to hand-transmitted vibration*. International Organization for Standardization.

</content>