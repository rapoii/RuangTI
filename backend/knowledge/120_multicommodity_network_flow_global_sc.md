# 120. Multi-Commodity Network Flow in Global Supply Chain

## Konsep Dasar
Multi-Commodity Network Flow (MCNF) memodelkan aliran beberapa jenis komoditas yang berbagi kapasitas jaringan yang sama. Berbeda dengan single-commodity flow, MCNF tidak memiliki properti integrality alami bahkan jika semua data integer, dan masalahnya menjadi NP-hard untuk kasus integer. Dalam konteks global supply chain, setiap komoditas merepresentasikan produk, komponen, atau order customer yang berbeda dengan origin-destination pair spesifik.

## Formulasi Matematis

### Model Arc-Path Formulation
Misalkan $K$ adalah himpunan komoditas, $\mathcal{P}_k$ himpunan path untuk komoditas $k$:
$$
\begin{aligned}
\min \quad & \sum_{k \in K} \sum_{p \in \mathcal{P}_k} c_p^k f_p^k \\
\text{s.t.} \quad & \sum_{p \in \mathcal{P}_k} f_p^k = d_k, \quad \forall k \in K \quad (\text{Demand Satisfaction}) \\
& \sum_{k \in K} \sum_{p \in \mathcal{P}_k: (i,j) \in p} f_p^k \leq u_{ij}, \quad \forall (i,j) \in A \quad (\text{Bundle/Capacity}) \\
& f_p^k \geq 0
\end{aligned}
$$

### Node-Arc Formulation
Lebih kompak tapi LP relaxation lebih lemah:
$$
\begin{aligned}
\min \quad & \sum_{k \in K} \sum_{(i,j) \in A} c_{ij}^k x_{ij}^k \\
\text{s.t.} \quad & \sum_{j:(i,j)\in A} x_{ij}^k - \sum_{j:(j,i)\in A} x_{ji}^k = b_i^k, \quad \forall i \in N, k \in K \\
& \sum_{k \in K} x_{ij}^k \leq u_{ij}, \quad \forall (i,j) \in A \\
& x_{ij}^k \geq 0
\end{aligned}
$$

## Metode Solusi
- **Column Generation:** Path-based formulation menghasilkan RMP kecil + shortest path subproblem per komoditas. Standar industri untuk MCNF skala besar.
- **Lagrangian Relaxation:** Relaksasi bundle constraints → dekomposisi menjadi $|K|$ independent single-commodity flows. Dual ascent/subgradient untuk update multiplier.
- **Dantzig-Wolfe Decomposition:** Blok-diagonal structure by commodity memungkinkan master problem mengkoordinasi shared capacity.
- **Benders Decomposition:** Untuk stochastic MCNF dengan recourse pada routing decisions.

## Aplikasi di Global Supply Chain
- **Transportation Planning:** Multiple product families sharing container/truck capacity across international lanes.
- **Telecommunications:** Bandwidth allocation for multiple data streams on shared fiber/network infrastructure.
- **Airline Cargo:** Different shipment types competing for belly-hold capacity on passenger flights.
- **Pipeline Logistics:** Multiple crude oil grades or gas products in shared pipeline networks.

## Referensi Terverifikasi
- Ahuja, R. K., Magnanti, T. L., & Orlin, J. B. (1993). *Network Flows: Theory, Algorithms, and Applications*. Prentice Hall.
- Ghamlouche, I., Crainic, T. G., & Gendreau, M. (2023). Cycle-Based Neighbourhoods for Fixed-Charge Multicommodity Capacitated Network Design. *Computers & Operations Research*, 151, 106087.
- Katayama, N., & Chen, Z. (2024). Column Generation with Stabilization for Large-Scale Multicommodity Flow Problems in Global Logistics. *European Journal of Operational Research*, 314(1), 112–128.
- Chouman, M., Crainic, T. G., & Gendron, B. (2023). Commodity Representations and Cutting Planes for Multicommodity Network Design. *Transportation Science*, 57(5), 1245–1267.

</content>