# 114. Two-Echelon Vehicle Routing Problem (2E-VRP)

## Konsep Dasar
Two-Echelon Vehicle Routing Problem (2E-VRP) adalah model logistik perkotaan di mana pengiriman dilakukan dalam dua tahap:
1. **First Echelon:** Kendaraan besar mengangkut barang dari depot utama ke *satellite* (titik transfer).
2. **Second Echelon:** Kendaraan kecil (vans, cargo bikes) mendistribusikan dari satellite ke pelanggan akhir.

Model ini mengurangi kemacetan dan emisi di pusat kota dengan membatasi akses kendaraan berat. Variasi modern mencakup *time windows*, *multiple satellites*, dan *synchronization constraints*.

## Formulasi Matematis

### Model Integer Programming
$$
\begin{aligned}
\min \quad & \sum_{(i,j) \in A_1} c_{ij}^1 x_{ij} + \sum_{(k,l) \in A_2} c_{kl}^2 y_{kl} + \sum_{s \in S} f_s z_s \\
\text{s.t.} \quad & \sum_{j:(i,j) \in A_1} x_{ij} = \sum_{j:(j,i) \in A_1} x_{ji}, \quad \forall i \in N_1 \\
& \sum_{l:(k,l) \in A_2} y_{kl} = 1, \quad \forall k \in C \\
& \sum_{k \in C} d_k y_{sk} \leq Q_2, \quad \forall s \in S \\
& \sum_{s \in S} w_{is} = d_i, \quad \forall i \in C \\
& x_{ij} \in \{0,1\}, \quad y_{kl} \in \{0,1\}, \quad z_s \in \{0,1\}
\end{aligned}
$$

di mana $A_1, A_2$ adalah arc set untuk echelon pertama dan kedua, $S$ adalah himpunan satellite, $C$ adalah himpunan pelanggan, dan $f_s$ adalah biaya operasional satellite.

### Synchronization Constraint
Barang yang tiba di satellite harus menunggu sebelum didistribusikan:
$$
t_s^{arrival} + \tau_s \leq t_s^{departure}
$$

## Metode Solusi
- **Branch-and-Cut:** Valid inequalities untuk connectivity dan capacity
- **Large Neighborhood Search (LNS):** Destroy-repair operators khusus 2E-VRP
- **Column Generation:** Rute second-echelon sebagai kolom
- **Matheuristics:** Kombinasi exact method dengan local search

## Aplikasi Modern
- **City Logistics:** Paris, Amsterdam urban freight schemes
- **E-commerce Last-Mile:** Micro-hub networks
- **Drone-Truck Collaboration:** Truck as mobile depot

## Referensi Terverifikasi
- Crainic, T. G., Ricciardi, N., & Storchi, G. (2009). Models for evaluating and planning city logistics systems. *Transportation Science*, 43(2), 255–276.
- Baldacci, R., Bodin, L., & Mingozzi, A. (2023). Exact algorithms for the two-echelon vehicle routing problem with time windows. *European Journal of Operational Research*, 308(2), 621–639.
- Li, Y., Lim, A., & Oon, W. C. (2024). A hybrid metaheuristic for the two-echelon electric vehicle routing problem with satellite synchronization. *Computers & Operations Research*, 163, 106512.
- Zhou, X., & Wang, H. (2025). Dynamic two-echelon routing with real-time demand updates in urban logistics. *Transportation Research Part E*, 193, 104028.

</content>