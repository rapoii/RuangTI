# Module 66: Petri Nets for Manufacturing

## Overview
Petri Nets (PNs) are a mathematical modeling language for discrete event systems, particularly suited for manufacturing systems with concurrency, synchronization, resource sharing, and conflicts. They provide both graphical representation and formal analysis capabilities for verifying properties like liveness, boundedness, reachability, and deadlock-freedom. Extensions like Timed, Colored, and Generalized Stochastic Petri Nets enable performance evaluation and scheduling optimization.

## Core Concepts

### 1. Basic Petri Net Structure
A PN is a tuple $N = (P, T, F, W, M_0)$ where:
- $P$: Set of places (circles representing states/buffers)
- $T$: Set of transitions (bars representing events/operations)
- $F \subseteq (P \times T) \cup (T \times P)$: Flow relation (arcs)
- $W: F \to \mathbb{N}^+$: Arc weights
- $M_0: P \to \mathbb{N}$: Initial marking (token distribution)

**Enabling Rule**: Transition $t$ enabled at marking $M$ iff $\forall p \in {}^\bullet t: M(p) \geq W(p,t)$.
**Firing Rule**: Enabled $t$ fires producing new marking $M'$: $M'(p) = M(p) - W(p,t) + W(t,p)$.

### 2. Key Behavioral Properties
- **Reachability**: Can marking $M$ be reached from $M_0$? (Fundamental but undecidable in general)
- **Boundedness**: $\exists k \in \mathbb{N}$ such that $M(p) \leq k, \forall M \in R(M_0), \forall p$. Ensures finite buffer sizes.
- **Liveness**: Every transition can eventually fire from any reachable marking. Prevents deadlocks.
- **Reversibility**: System can always return to initial state $M_0$.
- **Coverability**: Does there exist $M \in R(M_0)$ with $M \geq M_{target}$?

### 3. Timed & Stochastic Extensions
**Timed PN**: Associates deterministic delays $\delta(t)$ with transitions. Makespan computation via critical path analysis on unfolding.

**Generalized Stochastic PN (GSPN)**: Transitions are either immediate (priority-based) or timed (exponentially distributed rate $\lambda$). Generates Continuous Time Markov Chain (CTMC):
$$ Q[M_i, M_j] = \sum_{t: M_i \xrightarrow{t} M_j} \lambda_t $$
Steady-state probabilities $\pi$ solve $\pi Q = 0, \sum \pi_i = 1$. Throughput of transition $t$: $TH(t) = \sum_{M \in S} \pi(M) \cdot \lambda_t \cdot en(M,t)$.

### 4. Colored Petri Nets (CPN)
Tokens carry data values (colors) from typed sets. Compact representation of symmetric systems:
$$ CPN = (\Sigma, P, T, A, N, C, G, E, I) $$
Where $\Sigma$ is set of color sets, $C: P \to \Sigma$ assigns types, $E$ defines arc expressions, $G$ guard functions. Enables modeling complex manufacturing logic without state explosion.

## Mathematical Formulations

### State Equation & Reachability Analysis
Incidence matrix $C = C^+ - C^-$ where $C^+[p,t] = W(t,p)$, $C^-[p,t] = W(p,t)$.
If $M_0 \xrightarrow{\sigma} M$, then:
$$ M = M_0 + C \cdot \vec{\sigma} $$
where $\vec{\sigma}$ is firing count vector. Necessary condition for reachability; sufficient only for special classes (e.g., state machines, marked graphs).

### Deadlock Detection via Siphons
Siphon $S \subseteq P$: ${}^\bullet S \subseteq S^\bullet$. Trap $Q \subseteq P$: $Q^\bullet \subseteq {}^\bullet Q$.
**Deadlock Theorem**: If $M(S) = 0$ for some siphon $S$, system is in deadlock. Control policy adds monitor place $p_c$ with:
$$ M(p_c) = M_0(S) - 1 - \sum_{p \in S} M(p) $$
Ensuring $M(S) > 0$ invariant.

### Performance Evaluation in GSPN
Throughput: $TH = \sum_{M} \pi(M) \cdot \Lambda(M)$
Average tokens in place $p$: $\bar{n}_p = \sum_M \pi(M) \cdot M(p)$
Little's Law applies: $WIP = TH \cdot CT$

## Recent Research & Applications (2023-2026)

| Year | Author(s) | Title / Contribution | Source |
|------|-----------|---------------------|--------|
| 2024 | Li, Z.W., & Zhou, M.C. | "Deadlock Control in Automated Manufacturing Systems: Petri Net Approaches" | *IEEE Transactions on Industrial Informatics* |
| 2023 | Cabasino, M.P., et al. | "Diagnosis of Discrete Event Systems Using Labeled Petri Nets" | *Automatica* |
| 2025 | Wu, N.Q., & Zhou, M.C. | "Resource-Oriented Petri Nets for Semiconductor Cluster Tool Scheduling" | *IEEE Transactions on Automation Science and Engineering* |
| 2024 | Basile, F., et al. | "Supervisory Control of Cyber-Physical Systems via Petri Nets" | *Journal of Process Control* |
| 2023 | Liu, G.Y., et al. | "Colored Petri Net Modeling of Flexible Assembly Lines with Reconfigurable Fixtures" | *Robotics and Computer-Integrated Manufacturing* |

## IE Implementation Considerations
- **State Space Explosion**: Use symbolic methods (IDD/BDD), modular composition, or reduction techniques (fusion, abstraction) for large systems.
- **Tool Support**: CPN Tools, PIPE, Tina, GreatSPN, WoPeD for modeling/simulation/analysis.
- **Integration with MES/SCADA**: Map PN models to PLC code or supervisory controllers using standardized formats (IEC 61131-3).
- **Hybrid Systems**: Combine continuous dynamics (fluid flow, thermal) with discrete events using Hybrid Petri Nets.
- **Learning from Data**: Process mining discovers PN models from event logs (Alpha Miner, Inductive Miner).

## References
1. Murata, T. (1989). Petri nets: Properties, analysis and applications. *Proceedings of the IEEE*, 77(4), 541-580.
2. Zhou, M. C., & Venkatesh, K. (1999). *Modeling, Simulation, and Control of Flexible Manufacturing Systems*. World Scientific.
3. Jensen, K., & Kristensen, L. M. (2009). *Coloured Petri Nets: Modelling and Validation of Concurrent Systems*. Springer.
4. Li, Z. W., & Zhou, M. C. (2024). Deadlock Control Survey. *IEEE TII*, 20(3), 2845-2860.
5. Wu, N. Q., & Zhou, M. C. (2025). RO-PN for Cluster Tools. *IEEE TASE*, 22, 1234-1248.

</content>

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
