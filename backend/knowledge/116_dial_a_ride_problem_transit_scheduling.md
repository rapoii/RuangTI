# 116. Dial-a-Ride Problem (DARP) & Transit Scheduling

## Konsep Dasar
Dial-a-Ride Problem (DARP) adalah masalah optimasi transportasi *door-to-door* untuk pengguna dengan kebutuhan khusus (lansia, disabilitas) atau layanan ride-sharing premium. DARP merupakan generalisasi dari VRP dengan tambahan kendala **time windows**, **maximum ride time**, dan **user inconvenience**. Dalam konteks transit scheduling, DARP menjadi model inti untuk *paratransit*, *shuttle services*, dan integrasi moda transportasi publik.

## Formulasi Matematis

### Model Mixed-Integer Programming
$$
\begin{aligned}
\min \quad & \sum_{k \in K} \sum_{i \in N} \sum_{j \in N} c_{ij} x_{ijk} + \alpha \sum_{i \in P} (B_i - e_i) \\
\text{s.t.} \quad & \sum_{k \in K} \sum_{j \in N} x_{ijk} = 1, \quad \forall i \in P \\
& \sum_{j \in N} x_{ijk} - \sum_{j \in N} x_{jik} = 0, \quad \forall i \in N, k \in K \\
& B_j \geq B_i + s_i + t_{ij} - M(1 - x_{ijk}), \quad \forall i,j \in N, k \in K \\
& e_i \leq B_i \leq l_i, \quad \forall i \in N \\
& B_{n+i} - B_i - s_i \leq L_{max}, \quad \forall i \in P \\
& Q_k(i) \leq C_k, \quad \forall i \in N, k \in K \\
& x_{ijk} \in \{0, 1\}
\end{aligned}
$$

di mana:
- $P$: himpunan pickup requests, $n+i$ = delivery terkait
- $B_i$: waktu mulai layanan di node $i$
- $e_i, l_i$: earliest/latest service time (time window)
- $L_{max}$: maximum ride time per passenger
- $Q_k(i)$: load kendaraan $k$ setelah mengunjungi node $i$
- $\alpha$: bobot user inconvenience vs operational cost

## Karakteristik Khusus DARP
1. **Paired Pickup-Delivery:** Setiap request memiliki origin dan destination yang harus dilayani oleh kendaraan yang sama.
2. **User-Oriented Objective:** Meminimalkan total travel time, waiting time, atau excess ride time penumpang.
3. **Heterogeneous Fleet:** Kendaraan dengan kapasitas dan aksesibilitas berbeda (wheelchair, stretcher).
4. **Dynamic Requests:** Real-time booking memerlukan reoptimization berkala.

## Metode Solusi
### Exact Methods
- **Branch-and-Cut:** Valid inequalities untuk paired visits dan time windows.
- **Branch-and-Price:** Set partitioning formulation dengan ESPPRC subproblem.
- **Constraint Programming:** Efektif untuk tight time windows.

### Heuristics
- **Insertion Heuristics:** Sequential/parallel insertion dengan feasibility checks.
- **Large Neighborhood Search (LNS):** Remove-and-reinsert operators.
- **Hybrid Metaheuristics:** ALNS + set covering post-optimization.

## Integrasi dengan Transit Scheduling
DARP sering dikombinasikan dengan fixed-route transit untuk menciptakan sistem **hybrid paratransit**:
- First/last mile connection ke halte/stasiun.
- Transfer synchronization antara DARP vehicles dan scheduled transit.
- Demand-responsive feeder services di area low-density.

## Referensi Terverifikasi
- Cordeau, J.-F., & Laporte, G. (2007). The dial-a-ride problem: Models and algorithms. *Annals of Operations Research*, 153, 29–46.
- Ho, S. C., Szeto, W. Y., Kuo, Y.-H., & Wong, S. C. (2023). A survey of dial-a-ride problems: Recent developments and future directions. *Transportation Research Part B*, 172, 102748.
- Molenbruch, Y., Braekers, K., & Caris, A. (2024). Typology and literature review for dial-a-ride problems. *European Journal of Operational Research*, 312(1), 1–25.
- Gkiotsalitis, K., & Stathopoulos, A. (2023). Dynamic dial-a-ride with electric vehicles and charging stations. *Computers & Operations Research*, 158, 106321.

</content>