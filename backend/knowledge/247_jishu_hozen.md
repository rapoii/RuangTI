# Module 247: Digital Poka-Yoke & IoT Sensor-Assisted Mistake Proofing in Assembly Lines

## Conceptual Framework

Poka-yoke (mistake proofing), formalized by Shigeo Shingo within the Zero Quality Control (ZQC) paradigm, replaces statistical inference on samples with 100% source inspection performed by inexpensive devices embedded directly in the process. Classical poka-yoke rests on three detection principles: **contact devices** (geometric mismatch detection), **fixed-value devices** (quantity or torque mismatch), and **motion-step devices** (sequence deviation). Its philosophical core is that defects originate from human errors, and properly engineered constraints make those errors either impossible or instantly detectable without reliance on operator vigilance.

The *digital* evolution of this discipline substitutes mechanical limit switches with networked sensing — photoelectric light curtains, UHF RFID part-verification tags, smart torque/current transducers, load cells, and CNN-based vision inspection — and migrates interlock logic from hardwired relays into PLC/edge controllers synchronized with MES and ERP layers. Beyond physical prevention, every digital poka-yoke event produces a timestamped data exhaust that enables escape analytics, barrier health monitoring, and predictive quality control, transforming mistake proofing from a static fixture into a continuously audited cyber-physical barrier system.

## Mathematical Formulation

The **Poka-Yoke Effectiveness Index (PEI)** quantifies barrier performance empirically:

$$\text{PEI} = \left(1 - \dfrac{N_{\text{escaped defects}}}{N_{\text{total defect attempts}}}\right) \times 100\% \;\longrightarrow\; 100\%$$

If $m$ independent detection barriers protect one station, a defect escapes only when *every* barrier simultaneously fails:

$$P(\text{Defective Handover}) = \prod_{k=1}^{m} \bigl(1 - R_k\bigr) \to 0 \quad \text{for } m \geq 2,\; R_k > 0.99$$

At line level with $n$ stations, the outgoing defect probability compounds multiplicatively:

$$P_{\text{out}} = P_{\text{in}} \prod_{j=1}^{n}\left(1 - \text{PEI}_j\right)\left(1 - P_{\text{false reject}, j}\right)$$

where $P_{\text{false reject}}$ captures the sensitivity trade-off: overly aggressive thresholds stop good product and erode OEE. Barrier availability follows standard repairable-system theory, $A_k = \dfrac{\text{MTBF}_k}{\text{MTBF}_k + \text{MTTR}_k}$, so an interlock left bypassed or failed silently contributes zero protection — motivating automated bypass detection. The economic justification compares annualized investment against escaped-defect cost avoidance:

$$C_{\text{avoided}} = N \cdot P_{\text{defect}} \cdot C_{\text{escape}} \cdot \Delta\text{PEI} \gg C_{\text{device}} + C_{\text{integration}}$$

## Implementation Methodology

1. **Error-mode identification:** extract high-risk assembly errors from PFMEA (Module 243) ranked by severity × occurrence; prioritize errors with silent downstream consequences.
2. **Device selection matrix:** match error physics to sensor class — geometry errors to contact/fixture keys, presence errors to photoelectric or capacitive sensing, part-mix errors to RFID serialization, torque/thread errors to transducer-verified DC tools, surface/cosmetic errors to AI vision.
3. **Interlock logic design:** encode fail-safe PLC logic (normally-closed circuits, watchdog timers) so any wire break, sensor failure, or power loss halts release rather than permitting passage.
4. **MES integration:** bind each verification event to the serialized unit ID, creating a genealogy record and enabling SPC-style monitoring of barrier health ($R_k$ estimation over time).
5. **Digital andon escalation:** route rejects to tiered response queues with mean-time-to-response KPIs.
6. **Audit & change control:** periodic challenge tests (seeded defects) verify PEI remains at 100%; any firmware or fixture change re-triggers validation.

## Industrial Applications & Case Evidence

In automotive airbag sub-assembly, pick-to-light bin verification combined with camera recognition of bolt seat patterns eliminated wrong-part and missing-component escapes entirely, achieving PEI = 100% on safety-critical operations where a single escape can trigger multi-million-dollar recalls under NHTSA scrutiny. Comparable deployments include EV battery pack high-voltage interlock verification, pharmaceutical kitting serialization under GS1/UDI mandates, and electronics connector mis-insertion prevention via keyed fixtures plus vision confirmation.

## Related Modules

Module 251 (Poka-Yoke & ZQC 2.0 fundamentals), Module 246 (Autonomous Maintenance TPM 2.0), Module 248 (TPM Eight Losses — quality loss decomposition), Module 249 (OEE/TEEP/ORE 2.0 quantification), Module 250 (SMED 4.0 setup error proofing), Module 264 (Advanced Process Capability — Cp/Cpk linkage).

## References

1. Shingo, S. (1986). *Zero Quality Control: Source Inspection and the Poka-Yoke System*. Productivity Press.
2. Hinckley, C. M. (2001). *Make No Mistake!: An Outcome-Based Approach to Mistake-Proofing*. CRC Press.
3. Computers & Industrial Engineering (2024).
4. International Journal of Production Research (2023).
