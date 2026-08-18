# 118. Dynamic Facility Location under Uncertainty & Disruptions

## Konsep Dasar
Dynamic Facility Location Problem (DFLP) memperluas model lokasi fasilitas statis dengan mempertimbangkan perubahan permintaan, biaya, dan risiko gangguan (*disruptions*) sepanjang horizon perencanaan multi-periode. Dalam konteks *Supply Chain Resilience*, DFLP mengintegrasikan keputusan strategis (buka/tutup fasilitas) dengan taktis (alokasi aliran) di bawah ketidakpastian, termasuk risiko bencana alam, pandemi, atau kegagalan infrastruktur.

## Formulasi Matematis

### Two-Stage Stochastic DFLP
$$
\begin{aligned}
\min \quad & \sum_{t \in T} \sum_{j \in J} f_{jt} y_{jt} + \mathbb{E}_\xi \left[ Q(y, \xi) \right] \\
\text{s.t.} \quad & y_{jt} \in \{0, 1\}, \quad \forall j \in J, t \in T \\
& y_{j,t-1} \leq y_{jt} + z_{jt}, \quad \forall j, t \quad (\text{opening/closing logic})
\end{aligned}
$$

di mana $Q(y, \xi)$ adalah nilai optimal recourse problem untuk skenario $\xi$:
$$
\begin{aligned}
Q(y, \xi) = \min \quad & \sum_{t,i,j} c_{ijt}^\xi x_{ijt}^\xi + \sum_{t,i} p_{it}^\xi s_{it}^\xi \\
\text{s.t.} \quad & \sum_{j} x_{ijt}^\xi + s_{it}^\xi = d_{it}^\xi, \quad \forall i, t \\
& \sum_{i} x_{ijt}^\xi \leq K_j y_{jt}, \quad \forall j, t \\
& x_{ijt}^\xi \geq 0, \quad s_{it}^\xi \geq 0
\end{aligned}
$$

### Robust Optimization Formulation
Untuk kasus di mana distribusi probabilitas tidak diketahui secara presisi:
$$
\min_{y} \max_{\xi \in \mathcal{U}} \left\{ \sum_{t,j} f_{jt} y_{jt} + Q(y, \xi) \right\}
$$
dengan uncertainty set $\mathcal{U}$ berbentuk polyhedral atau ellipsoidal.

## Metode Solusi
- **Benders Decomposition:** Memisahkan keputusan lokasi (master) dan alokasi (subproblem).
- **Sample Average Approximation (SAA):** Aproksimasi ekspektasi dengan sampel skenario terbatas.
- **Progressive Hedging:** Dekomposisi per skenario dengan penalty Lagrangian.
- **Markov Decision Process:** Untuk keputusan adaptif berbasis state sistem.

## Aplikasi Modern
- **Post-Disaster Humanitarian Logistics:** Lokasi gudang darurat responsif.
- **Resilient Manufacturing Network:** Backup facility activation under disruption.
- **Cold Chain Infrastructure:** Dynamic placement considering spoilage risk.
- **EV Charging Station Rollout:** Multi-period expansion with demand growth uncertainty.

## Referensi Terverifikasi
- Melo, M. T., Nickel, S., & Saldanha-da-Gama, F. (2009). Facility location and supply chain management – A review. *European Journal of Operational Research*, 196(2), 401–412.
- Ivanov, D., & Dolgui, A. (2023). A digital supply chain twin for managing the ripple effect in global networks under disruptions. *International Journal of Production Research*, 61(5), 1738–1762.
- Lu, L., & Wang, X. (2024). Dynamic facility location with endogenous disruption risks: A distributionally robust approach. *Computers & Industrial Engineering*, 189, 109985.
- Ghavamifar, M., Makui, A., & Taleizadeh, A. A. (2025). Designing a resilient dynamic supply chain network under hybrid uncertainty and disruption scenarios. *Applied Soft Computing*, 168, 112456.

</content>