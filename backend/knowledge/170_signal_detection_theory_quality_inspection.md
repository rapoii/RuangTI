# Module 170: Signal Detection Theory ($d'$ and $\beta$) in Industrial Inspection

## 1. SDT Fundamentals in Quality Control
Signal Detection Theory separates sensory sensitivity from response bias in visual inspection tasks. Defects are signals; conforming items are noise.

## 2. Sensitivity Index ($d'$)
Measures inspector ability to discriminate defects:
$$
d' = z(H) - z(F)
$$
Where $H$ = Hit Rate (defect detected / total defects), $F$ = False Alarm Rate (false reject / total good), and $z()$ is the inverse normal CDF.

For industrial inspection, typical $d'$ values range from 1.5 (poor) to 3.5 (excellent).

## 3. Response Criterion ($\beta$ and $c$)
$$
\beta = \frac{\phi(z(H))}{\phi(z(F))}
$$
$$
c = -\frac{z(H) + z(F)}{2}
$$
Where $\phi$ is the standard normal PDF. Conservative inspectors have high $\beta$ (>1); liberal inspectors have low $\beta$ (<1).

## 4. Vigilance Decrement Model
Sensitivity declines over time following:
$$
d'(t) = d'_0 \cdot t^{-\alpha}
$$
Where $\alpha \approx 0.13$ for visual inspection tasks (Mackworth, 1948; updated Warm et al., 2023).

## 5. Automation Interaction
When AI pre-screens items, human $d'$ often degrades due to automation complacency. Recent 2024 research shows that maintaining human-in-the-loop requires variable reliability scheduling to prevent skill atrophy.

## 6. References
*   Green, D. M., & Swets, J. A. (1966). *Signal Detection Theory and Psychophysics*. Wiley.
*   Macmillan, N. A., & Creelman, C. D. (2005). *Detection Theory: A User's Guide* (2nd ed.). Erlbaum.
*   See, J. E., et al. (2023). Signal detection theory in industrial quality inspection: A 50-year retrospective. *Human Factors*, 65(8), 1623-1645.
*   MetricGate. (2026). Signal Detection Theory Calculator & Industrial Application Guide.
