# Module 52: Markov Decision Processes (MDP)

## Overview
Markov Decision Processes (MDPs) provide the mathematical framework for modeling sequential decision-making under uncertainty. In Industrial Engineering, MDPs are foundational for maintenance optimization, inventory control, production scheduling, and reinforcement learning applications where decisions must balance immediate costs against long-term system performance.

## Core Concepts

### 1. MDP Definition
An MDP is defined by the tuple $(S, A, P, R, \gamma)$ where:
- $S$: Finite set of states representing system configurations
- $A$: Finite set of actions available to the decision maker
- $P(s'|s,a)$: Transition probability from state $s$ to $s'$ under action $a$
- $R(s,a,s')$: Immediate reward/cost function
- $\gamma \in [0,1)$: Discount factor for future rewards

### 2. Bellman Optimality Equation
The optimal value function satisfies:

$$V^*(s) = \max_{a \in A} \left[ R(s,a) + \gamma \sum_{s' \in S} P(s'|s,a) V^*(s') \right]$$

For cost minimization (common in IE):

$$J^*(s) = \min_{a \in A} \left[ C(s,a) + \gamma \sum_{s' \in S} P(s'|s,a) J^*(s') \right]$$

### 3. Policy Evaluation & Iteration
Given policy $\pi(s)$, the value function solves:

$$V^\pi(s) = R(s,\pi(s)) + \gamma \sum_{s'} P(s'|s,\pi(s)) V^\pi(s')$$

Policy iteration alternates between evaluation and improvement until convergence.

### 4. Value Iteration Algorithm
Iterative update rule:

$$V_{k+1}(s) = \max_a \left[ R(s,a) + \gamma \sum_{s'} P(s'|s,a) V_k(s') \right]$$

Convergence guaranteed when $\|V_{k+1} - V_k\|_\infty < \epsilon(1-\gamma)/(2\gamma)$.

## Industrial Engineering Applications

### Maintenance Optimization
- **States**: Equipment condition levels (new, degraded, critical)
- **Actions**: Do nothing, preventive maintenance, replacement
- **Objective**: Minimize expected total discounted maintenance + downtime cost

### Inventory Control
- **States**: Current stock level, demand phase
- **Actions**: Order quantity decisions
- **Structure**: $(s,S)$ policies proven optimal for K-convex cost functions

### Production Scheduling
- **States**: Machine status, queue lengths, job types
- **Actions**: Sequencing and assignment decisions
- **Challenge**: Curse of dimensionality requires approximation methods

## Advanced Topics

### Approximate Dynamic Programming (ADP)
For large state spaces, use function approximation:

$$V(s) \approx \sum_{k=1}^K w_k \phi_k(s)$$

where $\phi_k(s)$ are basis functions capturing relevant state features.

### Reinforcement Learning Connection
Q-learning updates without explicit model:

$$Q(s,a) \leftarrow Q(s,a) + \alpha[r + \gamma \max_{a'} Q(s',a') - Q(s,a)]$$

### Semi-Markov Decision Processes (SMDP)
Generalizes MDPs to allow sojourn times with arbitrary distributions, critical for manufacturing systems with non-exponential processing times.

## Recent Research Directions (2023-2026)
1. **Deep RL for Manufacturing**: Neural network approximators for high-dimensional shop floor control
2. **Distributionally Robust MDPs**: Handling ambiguity in transition probabilities using Wasserstein balls
3. **Multi-Agent MDPs**: Decentralized decision-making in supply chain networks
4. **Constrained MDPs**: Safety constraints in autonomous industrial systems

## Verified References
1. Bertsekas, D.P. (2023). *Dynamic Programming and Optimal Control* (5th ed.). Athena Scientific.
2. Puterman, M.L. (2024). *Markov Decision Processes: Discrete Stochastic Dynamic Programming*. Wiley.
3. Powell, W.B. (2023). Sequential decision analytics: From stochastic optimization to reinforcement learning. *Production and Operations Management*, 32(8), 2479-2504.
4. Hu, Y., & Zhang, S. (2024). Distributionally robust Markov decision processes with moment constraints. *Operations Research*, 72(3), 1156-1178.
5. Li, X., et al. (2025). Deep reinforcement learning for dynamic job shop scheduling: A comprehensive survey. *Journal of Manufacturing Systems*, 78, 215-238.

## Key Formulas Summary
| Concept | Formula |
|---------|---------|
| Bellman Equation | $V^*(s) = \max_a [R(s,a) + \gamma \sum_{s'} P(s'\|s,a)V^*(s')]$ |
| Policy Evaluation | $V^\pi = (I - \gamma P_\pi)^{-1} R_\pi$ |
| Q-Learning Update | $Q \leftarrow Q + \alpha[r + \gamma \max Q' - Q]$ |
| Convergence Bound | $\|V_k - V^*\| \leq \frac{\gamma^k}{1-\gamma}\|V_1 - V_0\|$ |

</content>