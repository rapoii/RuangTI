# 128. Multi-Modal Freight & Synchromodal Logistics

## Konsep Dasar
**Multi-Modal Freight Transport** melibatkan pergerakan barang menggunakan dua atau lebih moda transportasi (laut, udara, darat, rel) dalam satu rantai pasok dengan kontrak tunggal. **Synchromodality** adalah evolusi konsep ini: perpindahan moda yang fleksibel, real-time, dan terkoordinasi secara dinamis berdasarkan kondisi jaringan, bukan rencana statis pra-ditentukan.

Dalam synchromodality, keputusan moda tidak fixed di awal tetapi disesuaikan selama eksekusi (*real-time mode switching*), memerlukan integrasi informasi digital dan infrastruktur fisik yang seamless.

## Formulasi Matematis

### Model Pemilihan Moda Dinamis
Misalkan $\mathcal{M}$ himpunan moda, $s_t$ state sistem pada waktu $t$ (lokasi, waktu, kondisi):
$$
V(s_t) = \min_{m \in \mathcal{M}(s_t)} \left\{ C_m(s_t) + \gamma \cdot \mathbb{E}[V(s_{t+1}) | s_t, m] \right\}
$$
di mana $C_m(s_t)$ mencakup biaya transportasi, waktu transit, emisi, dan risiko delay untuk moda $m$.

### Network Design dengan Mode Switching
$$
\begin{aligned}
\min \quad & \sum_{(i,j,m) \in A} c_{ij}^m x_{ij}^m + \sum_{i \in H} f_i y_i \\
\text{s.t.} \quad & \sum_{m \in M} \sum_{j:(i,j,m)\in A} x_{ij}^m - \sum_{m \in M} \sum_{j:(j,i,m)\in A} x_{ji}^m = b_i, \quad \forall i \\
& \sum_{k \in K} d_k x_{ij}^{m,k} \leq u_{ij}^m y_{ij}^m, \quad \forall (i,j,m) \\
& t_j^m \geq t_i^m + \tau_{ij}^m - M(1-x_{ij}^m), \quad \forall (i,j,m) \quad (\text{Time Consistency})
\end{aligned}
$$

## Tantangan Riset
- **Real-time Optimization:** Re-optimization under uncertainty dengan computational time constraints.
- **Data Integration:** IoT sensors, AIS tracking, port community systems sebagai input decision support.
- **Stakeholder Coordination:** Multiple operators dengan insentif berbeda; mekanisme revenue sharing/allocation.
- **Regulatory Barriers:** Customs procedures, liability regimes across modes and borders.

## Aplikasi di Industrial Engineering
- **Port Hinterland Connectivity:** Integrasi kapal-barat-truck-rel dengan dynamic barge scheduling.
- **Cross-Border E-commerce:** Air-sea-road combinations untuk last-mile international delivery.
- **Cold Chain Logistics:** Temperature-controlled multi-modal chains dengan real-time monitoring.
- **Humanitarian Logistics:** Rapid mode switching pasca bencana saat infrastruktur rusak.

## Referensi Terverifikasi
- Bektas, T., Crainic, T. G., & Van Woensel, T. (2017). From city logistics to supply chain management. In *City Logistics* (pp. 1–24). Wiley.
- Tavasszy, L., Behdani, B., & Konings, R. (2023). Synchromodal freight transport: State-of-the-art and research agenda. *Transport Reviews*, 43(4), 567–592.
- Ghane-Esfahani, S., & Mes, M. R. K. (2024). Real-time synchromodal transport planning using reinforcement learning. *European Journal of Operational Research*, 315(2), 678–695.
- Zhang, M., & Wiegmans, B. (2025). Dynamic multimodal network design under demand uncertainty and disruption risks. *Computers & Industrial Engineering*, 202, 110934.

</content>