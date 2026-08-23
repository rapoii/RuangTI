# Modul 104: Dynamic Programming, Bellman Equation, Value Iteration & Policy Iteration

## Konsep Dasar
Dynamic Programming (DP) adalah metode optimasi untuk masalah keputusan berurutan (*sequential decision making*) dengan struktur subproblem tumpang-tindih (*overlapping subproblems*) dan optimal substructure. Dalam Industrial Engineering, DP menjadi fondasi *inventory control*, *scheduling*, *routing*, *equipment replacement*, dan *maintenance planning*.

**Prinsip Optimalitas Bellman:** kebijakan optimal memiliki sifat — apa pun keadaan awal dan keputusan pertama, keputusan-keputusan selanjutnya harus membentuk kebijakan optimal terhadap keadaan hasil keputusan pertama. Untuk proses keputusan Markov (MDP) dengan transisi stokastik, DP meminimasi ekspektasi biaya kumulatif terdiskonto.

## Formulasi Matematis

### Bellman Optimality Equation (Infinite Horizon, Discounted)
Untuk MDP dengan discount factor $\gamma \in [0,1)$:

$$
V^*(s) = \min_{a \in A(s)}\left\{ C(s,a) + \gamma \sum_{s' \in S} P(s'|s,a)\, V^*(s') \right\}
$$

- $V^*(s)$: fungsi nilai optimal pada state $s$; $C(s,a)$: immediate cost.
- $P(s'|s,a)$: probabilitas transisi; $\gamma$: diskonto.

Operator Bellman $TV$ bersifat **kontraksi** dalam norma sup:

$$
\|TV - TW\|_\infty \leq \gamma \|V-W\|_\infty
$$

sehingga persamaan fixpoint punya solusi unik dan iterasi konvergen geometris dengan laju $\gamma^n$.

### Value Iteration (VI)
Skema iterasi titik-tetap:

$$
V_{n+1}(s) = \min_{a}\left\{ C(s,a) + \gamma \sum_{s'} P(s'|s,a)V_n(s') \right\}
$$

Batas galat praktis setelah $n$ iterasi: $\|V_n - V^*\|_\infty \le \frac{\gamma^n}{1-\gamma}\|V_1 - V_0\|_\infty$. Kriteria berhenti standar: $\|V_{n+1}-V_n\|_\infty < \epsilon(1-\gamma)/(2\gamma)$. Varian Gauss-Seidel VI memperbarui state secara in-place untuk percepatan konvergensi.

### Policy Iteration (PI)
1. **Policy Evaluation:** hitung $V^\pi$ dengan menyelesaikan sistem linear:
   $$V^\pi(s) = C(s,\pi(s)) + \gamma \sum_{s'} P(s'|s,\pi(s))V^\pi(s')$$
2. **Policy Improvement:**
   $$\pi'(s) = \arg\min_a\left\{ C(s,a)+\gamma\sum_{s'}P(s'|s,a)V^\pi(s')\right\}$$
3. Ulangi hingga $\pi' = \pi$. PI konvergen finit (jumlah policy berhingga), sering lebih cepat daripada VI ketika $\gamma$ mendekati 1.

## Metode Solusi / Implementasi & Skala Besar

- **Curse of dimensionality:** jumlah state meledak eksponensial dengan dimensi masalah (inventory multi-SKU, fleet management). Mitigasi modern:
  1. **State aggregation / abstraction:** klaster state serupa.
  2. **Approximate DP:** approximasi linear basis functions atau neural network atas $V$/$Q$.
  3. **Reinforcement Learning:** Q-learning model-free:
$$Q(s,a)\leftarrow Q(s,a) + \alpha\left[r + \gamma \max_{a'}Q(s',a') - Q(s,a)\right]$$
  kerangka unifikasi lihat Powell (2022); Sutton & Barto (2018).
- **Finite horizon:** rekursi mundur (backward induction) tanpa diskonto — dipakai lot-sizing dan equipment replacement deterministik.
- **Praktik komputasi:** value iteration vektorisasi NumPy; policy evaluation via sparse linear solver untuk jutaan state.

**Kaitan antar-modul:** DP/MDP adalah generalisasi dari CTMC antrian (Modul 108) — ketika keputusan kontrol ditambahkan pada rantai Markov, muncul MDP; sebaliknya NHPP reliability (Modul 109) menyuplai parameter transisi degradasi $P(s'|s,a)$ untuk model maintenance optimal.

## Aplikasi di Industrial Engineering

- **Inventory Control:** kebijakan $(s,S)$ optimal untuk permintaan stokastik (Wagner-Whitin sebagai kasus finite-horizon).
- **Preventive Maintenance:** penggantian age-based vs condition-based; trade-off risiko breakdown vs biaya preventif.
- **Production Scheduling:** lot-sizing dengan setup cost dan demand dinamis.
- **Equipment Replacement:** umur ekonomis mesin dengan biaya maintenance naik dan resale turun.
- **Quality Control:** rencana sampling adaptif yang diperbarui tiap batch inspeksi.
- **RL Industri:** dynamic pricing, energy scheduling pabrik, dan dispatch AGV dengan deep RL (Li & Wang, 2024).

## Referensi Terverifikasi

1. Bertsekas, D. P. (2017). *Dynamic Programming and Optimal Control, Vol. I* (4th ed.). Athena Scientific.
2. Puterman, M. L. (2014). *Markov Decision Processes: Discrete Stochastic Dynamic Programming*. Wiley.
3. Powell, W. B. (2022). *Reinforcement Learning and Stochastic Optimization: A Unified Framework for Sequential Decisions*. Wiley.
4. Sutton, R. S., & Barto, A. G. (2018). *Reinforcement Learning: An Introduction* (2nd ed.). MIT Press.
5. Li, Y., & Wang, H. (2024). Deep reinforcement learning for dynamic inventory control with non-stationary demand. *European Journal of Operational Research*, 312(2), 567-582.
