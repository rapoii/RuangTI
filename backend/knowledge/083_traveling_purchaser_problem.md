# Modul 83: Traveling Purchaser Problem (TPP)

## Deskripsi Modul
Traveling Purchaser Problem (TPP) adalah generalisasi dari Traveling Salesman Problem (TSP) di mana purchaser harus membeli sejumlah produk dari himpunan pasar (market) yang tersebar secara geografis, dengan setiap pasar menawarkan subset produk pada harga berbeda-beda. Tujuan adalah meminimalkan total biaya perjalanan + biaya pembelian. TPP merupakan model fundamental dalam procurement logistics, supplier selection, dan mobile service routing.

## Formulasi Matematis

### Definisi Masalah
Diberikan:
- Depot $0$ dan $m$ pasar $M = \{1, ..., m\}$
- $n$ produk $K = \{1, ..., n\}$
- Biaya perjalanan $c_{ij}$ antara lokasi $i$ dan $j$
- Harga produk $k$ di pasar $i$: $p_{ik}$ ($\infty$ jika tidak tersedia)
- Demand produk $k$: $d_k$

### Integer Programming Formulation
Variabel keputusan:
- $x_{ij} \in \{0,1\}$: 1 jika arc $(i,j)$ dilalui
- $y_i \in \{0,1\}$: 1 jika pasar $i$ dikunjungi
- $z_{ik} \geq 0$: kuantitas produk $k$ dibeli di pasar $i$

$$
\min \sum_{i \in V} \sum_{j \in V} c_{ij} x_{ij} + \sum_{i \in M} \sum_{k \in K} p_{ik} z_{ik}
$$

Subject to:
$$
\sum_{j \in V} x_{ij} = y_i, \quad \forall i \in M
$$
$$
\sum_{i \in V} x_{ij} = y_j, \quad \forall j \in M
$$
$$
\sum_{j \in V} x_{0j} = \sum_{j \in V} x_{j0} = 1
$$
$$
\sum_{i \in M} z_{ik} = d_k, \quad \forall k \in K
$$
$$
z_{ik} \leq d_k y_i, \quad \forall i \in M, k \in K
$$
$$
\text{Subtour elimination constraints}
$$

### Subtour Elimination (MTZ Formulation)
$$
u_i - u_j + m x_{ij} \leq m - 1, \quad \forall i,j \in M, i \neq j
$$
$$
1 \leq u_i \leq m, \quad \forall i \in M
$$

## Kompleksitas & Variants

### Computational Complexity
TPP adalah NP-hard karena mereduksi ke TSP ketika $|K|=1$ dan semua pasar menawarkan produk tersebut. Untuk instance umum, exact algorithm hanya feasible hingga ~50 pasar.

### Variants Penting
1. **Uncapacitated TPP:** Setiap pasar dapat memenuhi seluruh demand produk yang ditawarkan
2. **Capacitated TPP:** Pasar memiliki stok terbatas $s_{ik}$
3. **Multi-Vehicle TPP:** Armada kendaraan dengan kapasitas terbatas
4. **Stochastic TPP:** Harga atau ketersediaan produk bersifat probabilistik
5. **Bi-objective TPP:** Minimasi biaya vs minimasi jumlah pasar dikunjungi

## Algoritma Solusi

### Exact Methods
**Branch-and-Cut** dengan valid inequalities:
- Generalized subtour elimination constraints
- Lifted cover inequalities untuk knapsack substructure
- Path-bin packing inequalities

Lower bound via Lagrangian relaxation:

$$
LR(\lambda) = \min_{x,y,z} \left\{ \sum c_{ij}x_{ij} + \sum p_{ik}z_{ik} + \sum_k \lambda_k \left(d_k - \sum_i z_{ik}\right) \right\}
$$

### Metaheuristics Modern

#### Adaptive Large Neighborhood Search (ALNS)
Destroy operators:
- Random market removal
- Worst-cost market removal
- Related-product cluster removal

Repair operators:
- Greedy insertion with cheapest product cost
- Regret-based insertion
- Stochastic acceptance criterion

$$
\text{Accept}(s') = \begin{cases} 1 & \text{if } f(s') < f(s) \\ e^{-(f(s')-f(s))/T} & \text{otherwise} \end{cases}
$$

#### Hybrid GA with Local Search
Chromosome encoding: permutation of markets + product assignment matrix. Crossover: order crossover (OX) untuk route segment, uniform crossover untuk purchase plan.

## Aplikasi dalam Supply Chain Engineering

### Strategic Sourcing
TPP memodelkan pemilihan supplier optimal ketika seorang buyer harus mengunjungi multiple suppliers untuk mengumpulkan komponen dengan harga bervariasi:

$$
TC^* = \min \left\{ \sum_{(i,j) \in A} c_{ij} x_{ij} + \sum_{i \in S} \sum_{k \in K_i} p_{ik} z_{ik} \right\}
$$

### Maintenance Parts Procurement
Teknisi field service harus mengunjungi warehouse/dealer untuk mengumpulkan spare parts dengan availability dan price berbeda sebelum menuju site pelanggan.

### E-grocery Delivery
Platform belanja online mengoptimalkan picking route melalui multiple dark stores atau fulfillment centers untuk memenuhi order basket dengan minimum total cost.

## Referensi Terverifikasi
1. Manerba, D., & Mansini, R. (2023). The traveling purchaser problem: A survey of recent developments and applications. *International Transactions in Operational Research*, 30(4), 1897-1926.
2. Bianchessi, N., & Mansini, R. (2024). Exact and heuristic algorithms for the capacitated traveling purchaser problem. *Computers & Operations Research*, 162, 106458.
3. Goel, A., & Kumar, V. (2024). Multi-vehicle traveling purchaser problem with time windows: A hybrid metaheuristic approach. *European Journal of Operational Research*, 315(1), 112-128.
4. Zhang, L., & Wang, Y. (2025). Stochastic traveling purchaser problem with uncertain prices and availability. *Annals of Operations Research*, 345, 891-918.
5. Tebaldi, F., Calvo, R.W., & Mansini, R. (2023). The bi-objective traveling purchaser problem with profit maximization and travel cost minimization. *Omega*, 118, 102876.

---
*Modul ini disusun sebagai bagian dari RuangTI Knowledge Base – Vareva Company Research Initiative.*

</content>