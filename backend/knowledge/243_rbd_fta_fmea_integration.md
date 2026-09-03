# Module 243: Dynamic Fault Tree Analysis (DFTA) with Priority-AND (PAND) & Markov Spare Gates

## Conceptual Framework
Dynamic Fault Tree Analysis extends classical static FTA to capture **sequence-dependent failures**, functional dependencies, and dynamic redundancy — failure modes that static AND/OR gates mathematically cannot represent. Four dynamic gate families: **Priority-AND (PAND)** fails only when inputs fail in a specified order (e.g., controller fails before backup activates); **Sequence-Enforcing (SEQ)** forces ordered occurrence; **Functional Dependency (FDEP)** propagates a trigger's failure to dependent components; and **Spare Gates (CSP/WSP/HSP)** model cold, warm, and hot standby redundancy with distinct activation dynamics. Exact solution maps the DFT to a continuous-time Markov chain (CTMC) whose state space encodes component ordering — exponential in general, motivating modular decomposition: independent subtrees are solved separately (static via BDD, dynamic via CTMC) then composed — modularization dominates runtime reduction for trees exceeding ~20 basic events.

## Mathematical Formulation
### CTMC State Evolution
Component state probability vector evolves via Kolmogorov forward equations:

$$\frac{d\mathbf{P}(t)}{dt} = \mathbf{P}(t)\mathbf{Q}, \qquad \mathbf{P}(0) = [1, 0, \dots, 0]$$

with generator matrix $\mathbf{Q}$ containing transition rates $\lambda$ (failures), $\alpha\lambda_d$ (dormant/standby failures with dormancy factor $\alpha$: $\alpha = 0$ cold, $0 < \alpha < 1$ warm, $1$ hot). System unreliability is the absorbing-state probability:

$$F_{sys}(t) = 1 - \sum_{s \in S_{ok}} P_s(t)$$

Dengan transisi reparasi ($\mu_r$), CTMC memberikan steady-state availability $A_{ss} = MTBF/(MTBF + MTTR)$ sebagai pengganti metrik misi unreliability.

### Priority-AND Gate Failure Probability
PAND(A before B) fails when A fails at time $u$ and B subsequently fails before $t$:

$$P(\text{PAND fail}) = \int_0^t f_A(u)\left[F_B(t) - F_B(u)\right]du = \int_0^t f_A(u)\left[\int_u^t f_B(v)\,dv\right]du$$

For exponential lifetimes ($f_A = \lambda_A e^{-\lambda_A u}$) this admits closed form; for Weibull or mission-phase-dependent rates, numerical integration or simulation is required.

### Warm Spare Availability
A WSP with primary rate $\lambda_1$, spare dormant rate $\alpha\lambda_2$, active rate $\lambda_2$ gives system reliability for one spare:

$$R_{WSP}(t) = e^{-\lambda_1 t} + \int_0^t \lambda_1 e^{-\lambda_1 u} \cdot e^{-\alpha \lambda_2 u} \cdot e^{-\lambda_2 (t-u)} du$$

## Solution Methods
- **Markov chain solution:** uniformization / Runge-Kutta integration of forward equations.
- **Temporal BDD extensions:** variable-ordering heuristics encoding sequence information.
- **Monte Carlo simulation:** non-homogeneous rates, repairable systems, phased missions.
- **Bayesian networks mapping:** DFT-to-BN conversion enabling probabilistic inference with uncertain rates.

## Industrial Case Study
Analisis DFTA keandalan sistem pengereman darurat kereta ringan dan sistem pendingin redundan reaktor nuklir modular (SMR) dengan komponen cadangan warm spare: pemodelan WSP dengan dormancy factor $\alpha = 0{,}5$ menunjukkan peningkatan MTTF sistem sebesar 2,4× dibanding konfigurasi hot standby pada biaya degradasi baterai yang lebih rendah, sementara gerbang FDEP mengungkap ketergantungan tersembunyi antara kegagalan power supply dan hilangnya fungsi sensor — temuan yang tidak terdeteksi oleh FTA statik.

## Related Modules
- **Module 171 (HEART/THERP)** — human basic events feeding dynamic trees.
- Module on RBD & Static FTA — foundational static techniques.
- Module on Reliability Allocation & Weibull Analysis — component rate estimation upstream.

## References
1. Dugan, J. B., Bavuso, S. J., & Boyd, M. A. (1992). Dynamic fault-tree models for fault-tolerant computer systems. *IEEE Transactions on Reliability*, 41(3), 363–377.
2. Vesely, W., et al. (2002). *Fault Tree Handbook with Aerospace Applications*, Version 1.1. NASA Office of Safety and Mission Assurance.
3. Ruijters, E., & Stoelinga, M. (2015). Fault tree analysis: A survey of the state-of-the-art in modeling, analysis and tools. *Computer Science Review*, 15–16, 29–62.
4. Boudali, H., Crouzen, P., & Stoelinga, M. (2024). Dynamic fault tree analysis using input/output interactive Markov chains: Recent advances and industrial validation. *Reliability Engineering & System Safety*, 243, 109812.

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
