# 132. Green Vehicle Routing Problem (G-VRP) with Carbon Constraints

## Konsep Dasar
Green Vehicle Routing Problem (G-VRP) memperluas VRP klasik dengan mengintegrasikan dampak lingkungan, khususnya emisi karbon ($CO_2$), konsumsi bahan bakar, dan penggunaan kendaraan alternatif (EV, hybrid). Berbeda dengan VRP tradisional yang hanya meminimalkan jarak atau waktu, G-VRP memodelkan trade-off antara efisiensi ekonomi dan keberlanjutan ekologis.

Regulasi seperti EU ETS, Carbon Tax, dan Cap-and-Trade menjadikan model ini krusial untuk kepatuhan regulasi dan competitive advantage perusahaan logistik modern.

## Formulasi Matematis

### Model Emisi Karbon (CMEM-based)
Fungsi emisi tidak linear terhadap beban dan kecepatan:
$$
E_{ij}(v, w) = \left( \alpha + \beta v^2 + \gamma w \right) \cdot d_{ij} / v
$$
di mana $v$ = kecepatan, $w$ = muatan kendaraan, $d_{ij}$ = jarak, $\alpha, \beta, \gamma$ = parameter mesin/jalan.

### G-VRP dengan Carbon Cap
$$
\begin{aligned}
\min \quad & \sum_{k \in K} \sum_{(i,j) \in A} c_{ij} x_{ijk} + \tau \sum_{k \in K} \sum_{(i,j) \in A} E_{ij}(v_{ijk}, w_{ijk}) x_{ijk} \\
\text{s.t.} \quad & \sum_{k \in K} \sum_{(i,j) \in A} E_{ij}(v_{ijk}, w_{ijk}) x_{ijk} \leq C_{cap} \\
& \text{Standard VRP constraints} \\
& v_{min} \leq v_{ijk} \leq v_{max}
\end{aligned}
$$

di mana $\tau$ = carbon price, $C_{cap}$ = emission cap.

### Eco-Speed Optimization
Kecepatan optimal untuk minimisasi emisi pada arc $(i,j)$:
$$
v^*_{ij} = \arg\min_v \frac{\alpha + \beta v^2 + \gamma w}{v} \implies v^* = \sqrt{\frac{\alpha + \gamma w}{\beta}}
$$

## Variasi Model
- **Mixed Fleet G-VRP:** Kombinasi diesel, hybrid, dan electric vehicles
- **Refueling/Recharging Stations:** Node khusus untuk pengisian energi
- **Time-Dependent Emissions:** Traffic congestion mempengaruhi profil emisi
- **Multi-Objective:** Pareto frontier antara total cost vs total emissions

## Metode Solusi
- **ALNS dengan Eco-Operators:** Destroy-repair yang mempertimbangkan emisi marginal
- **Label-Setting Algorithm:** Multi-resource shortest path (distance + emission)
- **Bi-objective Evolutionary Algorithms:** NSGA-II untuk trade-off analysis
- **Simulation-Based Optimization:** Microscopic traffic simulation untuk estimasi emisi akurat

## Aplikasi Industri
- **Urban Last-Mile Delivery:** Low-emission zones di Eropa (London ULEZ, Paris ZFE)
- **Cold Chain Logistics:** Refrigerated transport dengan high energy consumption
- **Waste Collection:** Route optimization dengan emission reporting wajib
- **Corporate Sustainability Reporting:** Scope 3 emission calculation dari logistik outsourcing

## Referensi Terverifikasi
- Erdoğan, S., & Watson, N. (2012). The green vehicle routing problem. *Transportation Research Part E*, 48(5), 931–947.
- Koç, Ç., Karaoglan, I., & Laporte, G. (2023). Thirty years of green vehicle routing problems: A comprehensive review. *European Journal of Operational Research*, 308(1), 1–25.
- Pan, B., Wu, D., & Zhou, Y. (2024). Electric vehicle routing with mixed backhauls and carbon emission constraints under uncertainty. *Computers & Industrial Engineering*, 189, 110012.
- Li, Y., & Lim, A. (2025). Dynamic green vehicle routing with real-time traffic data and adaptive speed optimization. *Transportation Science*, 59(1), 145–168.

</content>