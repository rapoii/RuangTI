# 104. Dynamic Programming, Bellman Equation, Policy Iteration

## Konsep Dasar
Dynamic Programming (DP) adalah metode optimasi untuk masalah keputusan berurutan (*sequential decision making*) dengan struktur subproblem yang tumpang tindih (*overlapping subproblems*). Dalam konteks Industrial Engineering, DP digunakan untuk *inventory control*, *scheduling*, *routing*, dan *maintenance planning*.

Prinsip Optimalitas Bellman menyatakan bahwa kebijakan optimal memiliki sifat: apapun keadaan awal dan keputusan awal, keputusan selanjutnya harus membentuk kebijakan optimal terhadap keadaan yang dihasilkan dari keputusan pertama.

## Formulasi Matematis

### Bellman Optimality Equation (Infinite Horizon)
Untuk Markov Decision Process (MDP) dengan discount factor $\gamma \in [0, 1)$:

$$
V^*(s) = \min_{a \in A(s)} \left\{ C(s, a) + \gamma \sum_{s' \in S} P(s'|s, a) V^*(s') \right\}
$$

di mana:
- $V^*(s)$: optimal value function pada state $s$
- $C(s, a)$: immediate cost
- $P(s'|s, a)$: transition probability
- $\gamma$: discount factor

### Value Iteration Algorithm
$$
V_{n+1}(s) = \min_{a \in A(s)} \left\{ C(s, a) + \gamma \sum_{s'} P(s'|s, a) V_n(s') \right\}
$$

Konvergen ke $V^*$ dengan rate $\gamma^n$. Stopping criterion: $\|V_{n+1} - V_n\|_\infty < \epsilon(1-\gamma)/(2\gamma)$.

### Policy Iteration
1. **Policy Evaluation:** Hitung $V^\pi$ dengan menyelesaikan sistem linear:
   $$ V^\pi(s) = C(s, \pi(s)) + \gamma \sum_{s'} P(s'|s, \pi(s)) V^\pi(s') $$
2. **Policy Improvement:** Update policy:
   $$ \pi'(s) = \arg\min_a \left\{ C(s, a) + \gamma \sum_{s'} P(s'|s, a) V^\pi(s') \right\} $$
3. Ulangi hingga $\pi' = \pi$. Konvergensi finit dalam jumlah iterasi polinomial.

## Aplikasi di Industrial Engineering
- **Inventory Control:** $(s, S)$ policy untuk stochastic demand
- **Preventive Maintenance:** Age-based vs condition-based replacement
- **Production Scheduling:** Lot-sizing dengan setup costs
- **Quality Control:** Adaptive sampling plans

## Curse of Dimensionality & Approximate DP
Jumlah state tumbuh eksponensial dengan dimensi masalah. Solusi modern menggunakan:
- **State Aggregation:** Mengelompokkan state serupa
- **Function Approximation:** Neural networks atau linear basis functions
- **Reinforcement Learning:** Q-learning, TD-learning untuk model-free settings

## Referensi Terverifikasi
- Bertsekas, D. P. (2017). *Dynamic Programming and Optimal Control* (4th ed.). Athena Scientific.
- Puterman, M. L. (2014). *Markov Decision Processes: Discrete Stochastic Dynamic Programming*. Wiley.
- Powell, W. B. (2023). *Sequential Decision Analytics under Uncertainty*. Princeton University Press.
- Li, Y., & Wang, H. (2024). Deep reinforcement learning for dynamic inventory control with non-stationary demand. *European Journal of Operational Research*, 312(2), 567–582.

</content>