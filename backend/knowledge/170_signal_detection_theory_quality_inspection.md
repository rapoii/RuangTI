# Module 170: Signal Detection Theory ($d'$ and $\beta$) in Industrial Inspection

## Conceptual Framework
Signal Detection Theory (SDT) separates **sensory sensitivity** from **response bias** in visual inspection tasks — the key analytical advance over raw accuracy percentages, which confound the two. In quality inspection, defective items are *signals* embedded in a distribution of conforming items (*noise*). Each inspection decision falls into one of four outcome classes: Hit (defect correctly rejected), Miss (defect passed), False Alarm (good item rejected), Correct Rejection. The inspector's internal response criterion converts a continuous sensory evidence $x$ into binary decisions; shifting the criterion changes Hits and False Alarms jointly along the **ROC (Receiver Operating Characteristic) curve**, while sensitivity fixes the curve itself. The area under the ROC ($AUC = \Phi(d'/\sqrt{2})$) gives a bias-free discriminability summary for comparing inspectors across criterion settings.

## Sensitivity Index ($d'$)
Discriminability between signal and noise distributions measured in standard-normal units:

$$d' = z(H) - z(F)$$

where $H$ = hit rate (defects detected / total defects), $F$ = false alarm rate (false rejects / total good), and $z(\cdot)$ is the inverse normal CDF (probit). Industrial benchmarks: $d' \approx 1.5$ (poor), $2.5$ (typical trained inspector), $3.5$ (expert). When $H = 1$ or $F = 0$, log-linear correction ($\frac{3N+1}{3N+2}$ adjustment) avoids infinite $z$-scores.

## Response Criterion ($\beta$ and $c$)
Likelihood-ratio criterion:

$$\beta = \frac{\phi(z(H))}{\phi(z(F))}, \qquad c = -\frac{z(H) + z(F)}{2}$$

with $\phi$ the standard normal PDF. Conservative inspectors set high $\beta > 1$ (few false alarms, more misses — costly when defects escape to customers); liberal inspectors set $\beta < 1$ (over-rejection inflates scrap cost). Optimal criterion placement follows decision-theoretic payoffs:

$$\beta^* = \frac{P(N)}{P(S)} \cdot \frac{V(CR) + C(FA)}{V(H) + C(Miss)}$$

balancing prior defect prevalence against asymmetric costs of misses versus false alarms.

## Vigilance Decrement Model
Sensitivity declines with time-on-task following a power law:

$$d'(t) = d'_0 \cdot t^{-\alpha}$$

with $\alpha \approx 0.13$ for visual inspection tasks (Mackworth's 1948 clock test; consolidated by Warm et al., 2023 meta-analytic review). Mitigations: task rotation every 30–45 min, rest pauses, salient display design, and cognitive stimulation targeting resource depletion rather than mere boredom, per the resource theory of vigilance.

## Automation Interaction
When AI pre-screens items, human $d'$ often degrades through automation complacency and bias capture — operators anchor their criterion to the algorithm's recommendations. 2024 research shows maintaining human-in-the-loop competence requires variable reliability scheduling (occasional seeded faults) to prevent skill atrophy, and that human-AI fusion achieves optimal ROC only when the human retains independent access to raw evidence rather than filtered classifications; periodic recalibration studies quantify drift — without them, fused systems silently converge on the machine's ROC, forfeiting the redundancy benefit.

## Industrial Applications
- Inspector calibration studies benchmarking $d'/\beta$ before and after training interventions.
- Setting sampling economics: expected total cost $ETC(d', \beta)$ balancing escape defects vs over-inspection; optimal $\beta^*$ shifts liberal as escape cost rises.
- Medical device & pharma visual inspection qualification per USP <790>.
- X-ray security screening and weld radiography operator certification.

## Related Modules
- **Module 169 (Mental Workload)** — workload-driven criterion drift.
- **Module 171 (HEART/THERP)** — embedding HEP into system risk models.
- Module on Acceptance Sampling ISO 2859 — statistical complement for lot disposition.

## References
- Green, D. M., & Swets, J. A. (1966). *Signal Detection Theory and Psychophysics*. Wiley.
- Macmillan, N. A., & Creelman, C. D. (2005). *Detection Theory: A User's Guide* (2nd ed.). Erlbaum.
- See, J. E., et al. (2023). Signal detection theory in industrial quality inspection: A 50-year retrospective. *Human Factors*, 65(8), 1623–1645.
- Warm, J. S., Matthews, G., & Finomore, V. S. (2023). Vigilance and workload: 75 years of research. *Human Factors*, 65(1), 5–27.
