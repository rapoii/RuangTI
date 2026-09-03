# Module 172: Ecological Interface Design & Rasmussen's SRK Framework

## Conceptual Framework
Ecological Interface Design (EID), developed by Vicente & Rasmussen, maps work-domain constraints directly onto perceptual representations so that the display supports **all three levels of cognitive control** without forcing unnecessary processing. The founding premise of Cognitive Systems Engineering (Rasmussen's *abstraction-aggregation* space): operators do not merely follow procedures — they adaptively shift between skill-, rule-, and knowledge-based behavior depending on familiarity with the situation. A well-designed interface lets skilled workers act directly on affordances while still exposing the deep functional structure needed for novel-fault reasoning.

## Rasmussen's SRK Taxonomy
- **Skill-Based:** Automated sensorimotor patterns executed without conscious attention. Interface requirement: physical objects and direct manipulation — continuous, invariant, time-space signals.
- **Rule-Based:** Stored if–then rules triggered by familiar situations; sign-based processing. Interface requirement: salient signs and indicators matching procedural cues.
- **Knowledge-Based:** Novel problem solving through symbolic reasoning over goals and constraints. Interface requirement: functional relationships, causal structure, mass-energy topology.

The critical failure mode is **SRK mismatch**: a knowledge-based task presented only as rule-based cues (mimic diagrams) forces slow symbolic decoding under stress — the classic diagnosis-delay pattern in process incidents.

## Abstraction Hierarchy (AH)
Five-level means-ends representation of the work domain:

1. **Functional Purpose** – purpose of the system in its environment
2. **Abstract Function** – causal structure; mass/energy/information flows
3. **Generalized Function** – basic processes and control laws
4. **Physical Function** – subsystem capabilities and connections
5. **Physical Form** – components, appearance, spatial layout

EID's core information principle requires the display to make domain constraints visible:

$$\text{Information}_{display} \supseteq \text{Constraints}_{work\_domain}$$

i.e., every constraint governing safe/efficient operation must be externally represented so it can be perceived rather than recalled.

## EID Design Principles
1. Represent the part-whole hierarchy spatially (configural formats).
2. Map functional relationships to geometric constraints (e.g., power balance as a rectangle whose sides encode generation vs demand).
3. Use emergent features — global geometric properties that change lawfully with system state — for at-a-glance anomaly detection.
4. Preserve direct manipulation for skill-based acts; overlay signs and symbols without occluding the underlying ecology.

A 2023 application to Flexible Manufacturing Systems demonstrated a 40% reduction in diagnosis time for novel faults versus conventional HMI mimics (*Journal of Cognitive Engineering and Decision Making*). Digital-twin era extensions embed EID geometry inside 3D virtual replicas, keeping ecological principles intact while adding predictive overlays; configural formats remain superior to symbolic lists whenever operators must detect emergent anomalies at a glance.

## Industrial Applications
- Nuclear and petrochemical main control room modernization.
- Aviation glass-cockpit energy management displays (total-energy vs airspeed/flight-path angle).
- Grid operations wide-area situational awareness dashboards.
- Manufacturing FMS fault management consoles and maritime engine-room automation.

## Related Modules
- **Module 168 (Situation Awareness)** — SA levels that EID explicitly supports.
- **Module 169 (NASA-TLX)** — workload evaluation of interface redesigns.
- Module on Alarm Management ISA-18.2 — complementary rule-level cue design.

## References
- Rasmussen, J. (1983). Skills, rules, and knowledge; signals, signs, and symbols. *IEEE Transactions on Systems, Man, and Cybernetics*, SMC-13(3), 257–266.
- Vicente, K. J., & Rasmussen, J. (1992). Ecological interface design: Theoretical foundations. *IEEE Transactions on Systems, Man, and Cybernetics*, 22(4), 589–606.
- Burns, C. M., et al. (2023). Decision support for flexible manufacturing systems using CSE/EID. *Journal of Cognitive Engineering and Decision Making*, 17(1), 45–68.
- Jamieson, G. A., et al. (2024). Integrating Rasmussen's SRK framework in next-generation cockpit design. *Aviation Psychology and Applied Human Factors*, 34(2), 112–130.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
