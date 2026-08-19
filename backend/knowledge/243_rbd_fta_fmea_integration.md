# Module 243: Dynamic Fault Tree Analysis (DFTA) with Priority-AND (PAND) & Markov Spare Gates

## Overview
Dynamic Reliability modeling capturing sequence-dependent failures, functional dependencies, and dynamic redundancy gates: Priority-AND (PAND), Sequence-Enforcing (SEQ), Functional Dependency (FDEP), and Cold/Warm/Hot Spare Gates (CSP, WSP, HSP) mapped to continuous-time Markov chains.

## Mathematical Formulation
$$\dfrac{d\mathbf{P}(t)}{dt} = \mathbf{P}(t) \mathbf{Q}, \quad \mathbf{P}(0) = [1, 0, \dots, 0]$$
$$P(\text{PAND Gate Fail}) = \int_0^t f_A(u) \left( \int_u^t f_B(v) \, dv \right) \, du = \int_0^t f_A(u) [F_B(t) - F_B(u)] \, du$$

## Industrial Case Study
Analisis DFTA keandalan sistem pengereman darurat dan sistem pendingin redundan reaktor nuklir modular (SMR) dengan komponen cadangan warm spare.

## References
1. Dugan, J. B., Bavuso, S. J., & Boyd, M. A. (1992). Dynamic fault-tree models for fault-tolerant computer systems. IEEE Transactions on Reliability, 41(3), 363-377.
2. Reliability Engineering & System Safety (2024).
