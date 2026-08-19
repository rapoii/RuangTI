# Module 276: Bow-Tie Risk Analysis & Dynamic Barrier Management in Process Safety Management (PSM)

## Overview
Bow-Tie methodology integrates Fault Tree Analysis (left-hand proactive side: threats to top event) with Event Tree Analysis (right-hand reactive side: top event to consequences), incorporating preventive and mitigative Independent Protection Layers (IPLs) and escalation factor degradation monitoring.

## Mathematical Formulation
$$f(\text{Top Event}) = \sum_{i \in \text{Threats}} f_i \times \prod_{k \in \text{Preventive Barriers}} \text{PFD}_{i, k}$$
$$f(\text{Consequence}_j) = f(\text{Top Event}) \times \prod_{m \in \text{Mitigative Barriers}} \text{PFD}_{j, m}$$

## Industrial Case Study
Penerapan Bow-Tie Barrier Management terintegrasi sensor SCADA pada unit hydrocracking kilang BBM Pertamina untuk mencegah kebocoran hidrogen tekanan tinggi.

## References
1. Center for Chemical Process Safety (CCPS). (2018). Bow Ties in Risk Management: A Concept Book for Process Safety. Wiley-AIChE.
2. Reliability Engineering & System Safety (2024).
