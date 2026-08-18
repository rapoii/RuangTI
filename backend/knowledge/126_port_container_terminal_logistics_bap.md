# 126. Berth Allocation (BAP) & Quay Crane Scheduling

## Konsep Dasar
Berth Allocation Problem (BAP) dan Quay Crane Scheduling Problem (QCSP) adalah dua masalah optimasi inti dalam operasional terminal peti kemas (*container terminal*). BAP menentukan penempatan kapal di dermaga (waktu dan posisi), sementara QCSP mengalokasikan dan menjadwalkan quay crane untuk melayani kapal yang telah berlabuh. Keduanya saling terkait erat: jadwal crane memengaruhi waktu sandar kapal, dan alokasi dermaga membatasi ketersediaan crane.

Model terintegrasi **BACASP** (Berth Allocation and Crane Assignment/Scheduling Problem) kini menjadi standar riset karena mengoptimalkan kedua keputusan secara simultan.

## Formulasi Matematis

### Berth Allocation Problem (Discrete/Continuous)
$$
\begin{aligned}
\min \quad & \sum_{k \in K} \left( w_k + h_k \right) \\
\text{s.t.} \quad & b_k + l_k \leq L, \quad \forall k \in K \\
& a_k \leq b_k, \quad \forall k \in K \\
& [b_i, b_i + t_i] \cap [b_j, b_j + t_j] = \emptyset \quad \text{atau} \quad [\sigma_i, \sigma_i + l_i] \cap [\sigma_j, \sigma_j + l_j] = \emptyset \\
& b_k, \sigma_k \geq 0
\end{aligned}
$$

di mana $w_k = b_k - a_k$ (waiting time), $h_k$ = handling time, $L$ = panjang dermaga total, $a_k$ = arrival time, $l_k$ = vessel length.

### Quay Crane Scheduling
$$
\begin{aligned}
\min \quad & C_{\max} = \max_{k \in K} \left( b_k + \sum_{j \in T_k} p_j / q_k \right) \\
\text{s.t.} \quad & \sum_{k \in K} q_{kt} \leq Q, \quad \forall t \\
& q_k^{\min} \leq q_k \leq q_k^{\max}, \quad \forall k \\
& \text{Non-interference constraints between cranes}
\end{aligned}
$$

## Metode Solusi
- **Generalized Set Partitioning:** Kolom = feasible berth-crane schedule
- **Branch-and-Cut:** Valid inequalities untuk non-overlapping dan crane interference
- **Metaheuristics:** ALNS, GA, Particle Swarm untuk instance industri (>50 kapal)
- **Simulation-Optimization:** Integrasi dengan discrete-event simulation untuk stochastic arrivals

## Aplikasi Modern
- **Automated Container Terminals:** AGV coordination dengan QC scheduling
- **Green Port Operations:** Minimisasi emisi dari waiting vessels dan crane idle time
- **Digital Twin:** Real-time rescheduling berdasarkan AIS data dan weather forecasts
- **Transshipment Hubs:** Singapore, Rotterdam, Tanjung Priok optimization

## Referensi Terverifikasi
- Bierwirth, C., & Meisel, F. (2015). A follow-up survey of berth allocation and quay crane scheduling problems in container terminals. *European Journal of Operational Research*, 244(3), 675–689.
- Xiang, X., Liu, C., & Miao, L. (2023). Integrated berth allocation and quay crane scheduling with uncertain vessel arrival times. *Computers & Industrial Engineering*, 185, 109688.
- Abou Khamis, R., & Al-Chami, Z. (2024). A hybrid metaheuristic for the bi-objective berth allocation and quay crane scheduling problem under disruption. *Expert Systems with Applications*, 238, 121842.
- Wang, S., & Meng, Q. (2025). Green port operations: Joint optimization of berth allocation and shore power deployment. *Transportation Research Part E*, 193, 104035.

</content>