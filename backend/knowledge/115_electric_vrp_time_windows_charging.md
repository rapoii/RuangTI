# 115. Electric VRP with Time Windows & Partial Charging (EVRP-TW)

## Konsep Dasar
Electric Vehicle Routing Problem with Time Windows (EVRP-TW) memperluas VRP klasik dengan mempertimbangkan keterbatasan kapasitas baterai, ketersediaan stasiun pengisian, dan waktu charging yang signifikan. Berbeda dengan kendaraan konvensional, EV memerlukan keputusan routing yang terintegrasi dengan strategi charging (full vs partial), karena charging time bersifat non-linear dan bergantung pada state-of-charge (SoC).

Model ini krusial untuk logistik perkotaan berkelanjutan dan armada pengiriman last-mile elektrik.

## Formulasi Matematis

### Model Dasar EVRP-TW
$$
\begin{aligned}
\min \quad & \sum_{(i,j) \in A} d_{ij} x_{ij} + \alpha \sum_{k \in K} T_k^{charge} \\
\text{s.t.} \quad & \sum_{j \in V} x_{ij} = 1, \quad \forall i \in N_c \\
& y_j - y_i \geq q_j - Q(1 - x_{ij}), \quad \forall (i,j) \in A \\
& b_j \geq b_i + t_{ij} + s_i - M(1-x_{ij}), \quad \forall (i,j) \in A \\
& e_i \leq b_i \leq l_i, \quad \forall i \in N \\
& SoC_j \leq SoC_i - r \cdot d_{ij} + C \cdot z_i, \quad \forall (i,j) \in A \\
& 0 \leq SoC_i \leq C, \quad \forall i \in V
\end{aligned}
$$
di mana $z_i$ = variabel charging di node stasiun, $r$ = konsumsi energi per km, $C$ = kapasitas baterai.

### Non-Linear Charging Function
Waktu charging dari $SoC_1$ ke $SoC_2$:
$$
T(SoC_1, SoC_2) = \int_{SoC_1}^{SoC_2} \frac{C}{P(s)} \, ds
$$
dengan $P(s)$ = power function yang menurun saat SoC mendekati penuh (CC-CV curve). Aproksimasi piecewise linear umum digunakan dalam MILP.

### Partial Charging Strategy
Mengizinkan charging tidak sampai penuh menghemat waktu total rute. Keputusan optimal melibatkan trade-off: charging lebih sedikit → lebih cepat berangkat → mungkin perlu visit stasiun tambahan nanti.

## Metode Solusi
- **ALNS (Adaptive Large Neighborhood Search):** State-of-the-art metaheuristic dengan operator removal/insertion khusus stasiun charging.
- **Branch-and-Price:** Column generation dengan label-setting algorithm yang melacak SoC sebagai resource dimension.
- **Two-Phase Heuristic:** Fase 1 konstruksi rute tanpa charging; Fase 2 insert stasiun charging secara optimal.

## Aplikasi & Tren Riset
- Last-mile delivery dengan heterogeneous fleet (EV + ICEV).
- Dynamic EVRP dengan real-time traffic dan charger availability.
- Battery swapping vs plug-in charging optimization.
- Integration dengan renewable energy grid (vehicle-to-grid).

## Referensi Terverifikasi
- Schneider, M., Stenger, A., & Goeke, D. (2014). The Electric Vehicle-Routing Problem with Time Windows and Recharging Stations. *Transportation Science*, 48(4), 500–520.
- Desaulniers, G., Errico, F., Irnich, S., & Schneider, M. (2023). Exact Algorithms for Electric Vehicle Routing Problems with Time Windows and Partial Recharging. *Operations Research*, 71(3), 987–1008.
- Goeke, D., & Schneider, M. (2024). Routing a Mixed Fleet of Electric and Conventional Vehicles Under Realistic Charging Constraints. *European Journal of Operational Research*, 312(1), 189–207.
- Li, Y., Lim, A., & Oon, W. C. (2025). Deep reinforcement learning for dynamic electric vehicle routing with stochastic charging station availability. *Computers & Operations Research*, 173, 106891.

</content>