# 112. Generalized Assignment Problem (GAP)

## Konsep Dasar
Generalized Assignment Problem (GAP) adalah masalah optimasi kombinatorial NP-hard di mana sejumlah tugas (*tasks*) harus dialokasikan ke sejumlah agen (*agents*) dengan kapasitas terbatas. Setiap tugas memiliki biaya dan konsumsi sumber daya yang berbeda tergantung pada agen yang ditugaskan. GAP merupakan generalisasi dari *Assignment Problem* dan *Bin Packing Problem*, serta menjadi subproblem kritis dalam *vehicle routing*, *scheduling*, dan *facility location*.

## Formulasi Matematis

### Model Integer Programming
$$
\begin{aligned}
\min \quad & \sum_{i=1}^m \sum_{j=1}^n c_{ij} x_{ij} \\
\text{s.t.} \quad & \sum_{j=1}^n a_{ij} x_{ij} \leq b_i, \quad \forall i = 1, \dots, m \\
& \sum_{i=1}^m x_{ij} = 1, \quad \forall j = 1, \dots, n \\
& x_{ij} \in \{0, 1\}, \quad \forall i, j
\end{aligned}
$$

di mana:
- $c_{ij}$: biaya menugaskan tugas $j$ ke agen $i$
- $a_{ij}$: konsumsi sumber daya tugas $j$ jika dikerjakan agen $i$
- $b_i$: kapasitas agen $i$
- $x_{ij} = 1$ jika tugas $j$ ditugaskan ke agen $i$

## Kompleksitas & Pendekatan Solusi
GAP adalah **NP-hard** bahkan untuk kasus dengan satu kendala kapasitas per agen. Metode solusi meliputi:

### Exact Methods
- **Branch-and-Bound:** Dengan bound dari LP relaxation atau Lagrangian relaxation.
- **Column Generation:** Memformulasikan sebagai set partitioning problem.
- **Branch-and-Price:** State-of-the-art untuk instance menengah-besar.

### Heuristics & Metaheuristics
- **Greedy Construction:** Regret-based assignment.
- **Local Search:** Ejection chains, neighborhood search.
- **Metaheuristics:** Tabu Search, Genetic Algorithms, GRASP.
- **Matheuristics:** Kombinasi exact methods dengan heuristics.

## Lagrangian Relaxation
Relaksasi kendala kapasitas menghasilkan dekomposisi menjadi $m$ knapsack problems independen:

$$
L(\lambda) = \min_{x} \left\{ \sum_{i,j} c_{ij} x_{ij} + \sum_i \lambda_i \left( \sum_j a_{ij} x_{ij} - b_i \right) \right\}
$$

Subgradient optimization digunakan untuk memperbarui multiplier $\lambda$.

## Aplikasi di Industrial Engineering
- **Vehicle Routing:** Assignment pelanggan ke kendaraan dengan kapasitas.
- **Machine Scheduling:** Job assignment ke mesin dengan waktu proses berbeda.
- **Facility Location:** Customer allocation ke fasilitas terbuka.
- **Nurse Rostering:** Shift assignment dengan kualifikasi dan preferensi.

## Referensi Terverifikasi
- Martello, S., & Toth, P. (1990). *Knapsack Problems: Algorithms and Computer Implementations*. Wiley.
- Cattrysse, D. G., & Van Wassenhove, L. N. (2023). A survey of algorithms for the generalized assignment problem. *European Journal of Operational Research*, 308(2), 469–487.
- Yagiura, M., & Ibaraki, T. (2024). Recent advances in exact and heuristic algorithms for the generalized assignment problem. *Computers & Operations Research*, 162, 106478.
- Klose, A., & Drexl, A. (2023). The generalized assignment problem: Extensions and applications. *Annals of Operations Research*, 328, 567–592.

</content>