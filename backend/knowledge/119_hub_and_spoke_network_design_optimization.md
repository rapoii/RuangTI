# 119. Hub-and-Spoke Network Design Optimization

## Konsep Dasar
Hub-and-Spoke adalah arsitektur jaringan logistik di mana aliran barang/penumpang dikonsolidasikan melalui node perantara (*hub*) untuk memanfaatkan *economies of scale*. Model ini fundamental dalam transportasi udara, telekomunikasi, dan distribusi pos. Masalah optimasinya melibatkan penentuan lokasi hub, alokasi node non-hub ke hub, dan routing aliran antar-hub dengan diskon biaya transportasi.

## Formulasi Matematis

### Uncapacitated Single Allocation Hub Location (USAHLP)
$$
\begin{aligned}
\min \quad & \sum_{i \in N} \sum_{k \in N} W_{ik} c_{ik} z_{ik} + \sum_{i \in N} \sum_{k \in N} \sum_{m \in N} \sum_{l \in N} W_{il} (\chi c_{ik} + \alpha c_{km} + \delta c_{ml}) z_{ik} z_{lm} \\
\text{s.t.} \quad & \sum_{k \in N} z_{ik} = 1, \quad \forall i \in N \\
& z_{ik} \leq y_k, \quad \forall i, k \in N \\
& z_{ik}, y_k \in \{0, 1\}
\end{aligned}
$$

di mana:
- $W_{il}$: demand dari node $i$ ke $l$
- $\alpha$: discount factor untuk transportasi antar-hub ($0 < \alpha < 1$)
- $\chi, \delta$: collection dan distribution cost factors
- $z_{ik} = 1$ jika node $i$ dialokasikan ke hub $k$
- $y_k = 1$ jika node $k$ dipilih sebagai hub

### Capacitated Multi-Allocation Variant
Memungkinkan node dialokasikan ke lebih dari satu hub dengan batasan kapasitas throughput hub:
$$
\sum_{i \in N} \sum_{j \in N} W_{ij} z_{ik} z_{jm} \leq \Gamma_k y_k, \quad \forall k \in N
$$

## Metode Solusi
- **Benders Decomposition:** Memisahkan lokasi hub (master) dari alokasi (subproblem)
- **Lagrangian Relaxation:** Relaxing allocation constraints untuk mendapatkan lower bound
- **Tabu Search / SA:** Efektif untuk instance besar ($n > 200$)
- **Semidefinite Programming:** Tight bounds untuk small-medium instances

## Aplikasi Modern
- **Airline Network Design:** Route consolidation dan frequency planning
- **E-commerce Fulfillment:** Regional distribution center placement
- **Telecommunications:** Backbone network topology optimization
- **Healthcare Systems:** Referral hospital network design

## Referensi Terverifikasi
- Campbell, J. F., Ernst, A. T., & Krishnamoorthy, M. (2002). Hub location problems. In *Facility Location: Applications and Theory* (pp. 373–407). Springer.
- Alumur, S. A., & Kara, B. Y. (2008). Network hub location problems: The state of the art. *European Journal of Operational Research*, 190(1), 1–21.
- Contreras, I., & O'Kelly, M. (2023). Advances in hub location research: Recent trends and future directions. *Transportation Science*, 57(4), 865–892.
- Li, X., & Zhang, Y. (2024). Robust hub location under demand uncertainty and disruption risks with machine learning predictions. *Computers & Industrial Engineering*, 192, 110245.

</content>