# 117. Inventory Routing Problem (IRP)

## Konsep Dasar
Inventory Routing Problem (IRP) mengintegrasikan tiga keputusan logistik secara simultan: **inventory management**, **vehicle routing**, dan **delivery scheduling**. Berbeda dengan VRP klasik yang hanya fokus pada distribusi, IRP mempertimbangkan level stok di pelanggan dan biaya holding, sehingga pengiriman dilakukan berdasarkan kebutuhan inventori aktual, bukan sekadar permintaan statis. Model ini fundamental untuk Vendor Managed Inventory (VMI) dan supply chain terintegrasi.

## Formulasi Matematis

### Model MIP Multi-Period
$$
\begin{aligned}
\min \quad & \sum_{t \in T} \left( \sum_{(i,j) \in A} c_{ij} x_{ijt} + \sum_{i \in N} h_i I_{it} + K \sum_{k \in K} y_{kt} \right) \\
\text{s.t.} \quad & I_{i,t-1} + q_{it} = d_{it} + I_{it}, \quad \forall i \in N_c, t \in T \\
& \sum_{i \in N_c} q_{it} \leq C y_{kt}, \quad \forall k \in K, t \in T \\
& L_i \leq I_{it} \leq U_i, \quad \forall i \in N_c, t \in T \\
& \sum_{j \in N} x_{ijt} = \sum_{j \in N} x_{jit}, \quad \forall i \in N, t \in T \\
& q_{it} \leq U_i - I_{i,t-1}, \quad \forall i \in N_c, t \in T \\
& x_{ijt} \in \{0,1\}, \quad q_{it} \geq 0, \quad I_{it} \geq 0
\end{aligned}
$$

di mana $I_{it}$ adalah level inventori pelanggan $i$ pada periode $t$, $q_{it}$ adalah kuantitas pengiriman, $h_i$ adalah holding cost, dan $L_i, U_i$ adalah batas minimum/maksimum stok.

## Kebijakan Pengiriman
- **Order-Up-To Level (OU):** Kirim hingga kapasitas maksimum $U_i$.
- **Maximum Level (ML):** Kirim jumlah optimal $\leq U_i - I_{i,t-1}$.
- **Replenishment Policy:** $(s, S)$ atau $(r, Q)$ embedded dalam routing.

## Metode Solusi
- **Branch-and-Cut:** Valid inequalities untuk inventory-routing coupling.
- **Matheuristics:** ALNS dengan operator khusus inventory feasibility.
- **Column Generation:** Rute multi-periode sebagai kolom.
- **Rolling Horizon:** Dekomposisi temporal untuk horizon panjang.

## Aplikasi
- **Gas/Fuel Distribution:** Propane delivery to residential tanks.
- **Retail VMI:** Supermarket replenishment from DC.
- **Medical Supply:** Hospital pharmaceutical distribution.
- **Bulk Chemicals:** Tanker truck scheduling.

## Referensi Terverifikasi
- Andersson, H., Hoff, A., Christiansen, M., Hasle, G., & Løkketangen, A. (2010). Industrial aspects and literature survey: Combined inventory management and routing. *Computers & Operations Research*, 37(9), 1515–1536.
- Coelho, L. C., Cordeau, J.-F., & Laporte, G. (2023). The inventory-routing problem: A tutorial and new exact algorithms. *Transportation Science*, 57(4), 1012–1032.
- Manousakis, E. G., Repoussis, P. P., & Tarantilis, C. D. (2024). An adaptive large neighborhood search for the inventory routing problem with transshipments. *European Journal of Operational Research*, 313(2), 589–608.
- Avrahami, A., & Herbon, A. (2025). Dynamic inventory-routing under demand uncertainty: A reinforcement learning approach. *International Journal of Production Economics*, 279, 109456.

</content>