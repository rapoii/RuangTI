# Modul 82: 3D Bin Packing Problem (3D-BPP)

## Deskripsi Modul
3D Bin Packing Problem adalah masalah optimasi kombinatorial NP-hard yang bertujuan menempatkan himpunan objek rectangular 3D ke dalam bin (kontainer) dengan dimensi tetap, sehingga meminimalkan jumlah bin yang digunakan atau memaksimalkan utilisasi ruang. Masalah ini fundamental dalam logistik, pergudangan, dan manufaktur untuk loading kontainer, palletizing, dan warehouse storage optimization.

## Formulasi Matematis

### Definisi Masalah
Diberikan:
- $n$ item dengan dimensi $(l_i, w_i, h_i)$ dan berat $q_i$, $\forall i \in \{1,...,n\}$
- Bin identik dengan dimensi $(L, W, H)$ dan kapasitas berat $Q$
- Orientasi item: hingga 6 rotasi ortogonal yang diizinkan

Tujuan: Minimalkan jumlah bin $m$ yang digunakan.

### Integer Linear Programming Formulation
Variabel keputusan:
- $x_{ij} = 1$ jika item $i$ ditempatkan di bin $j$, 0 otherwise
- $y_j = 1$ jika bin $j$ digunakan

$$
\min \sum_{j=1}^{n} y_j
$$

Subject to:
$$
\sum_{j=1}^{n} x_{ij} = 1, \quad \forall i \in \{1,...,n\}
$$
$$
\sum_{i=1}^{n} q_i x_{ij} \leq Q y_j, \quad \forall j
$$
$$
\text{Non-overlapping constraints (geometric)}
$$
$$
x_{ij} \in \{0,1\}, \quad y_j \in \{0,1\}
$$

### Non-Overlapping Constraints
Untuk dua item $i$ dan $k$ dalam bin yang sama, minimal satu dari 6 kondisi separasi harus terpenuhi:

$$
(p_i^x + l_i \leq p_k^x) \lor (p_k^x + l_k \leq p_i^x) \lor
(p_i^y + w_i \leq p_k^y) \lor (p_k^y + w_k \leq p_i^y) \lor
(p_i^z + h_i \leq p_k^z) \lor (p_k^z + h_k \leq p_i^z)
$$

Ini diformulasikan menggunakan big-M dan variabel biner auxiliar dalam MILP.

## Algoritma Heuristik

### Extreme Point Based Heuristic
Konsep Extreme Point (EP): titik sudut potensial di mana item baru dapat ditempatkan.

$$
EP = \{(x,y,z) : x \in X_{coord}, y \in Y_{coord}, z \in Z_{coord}\}
$$

di mana koordinat diperbarui setelah setiap penempatan item.

**Best Fit Decreasing Height (BFDH):**
1. Sortir item berdasarkan tinggi menurun
2. Untuk setiap item, cari EP feasible dengan waste volume minimum
3. Tempatkan item pada EP terpilih
4. Update daftar EP

### Guillotine Cutting Pattern
Pola pemotongan guillotine membatasi solusi pada partisi rekursif bin menjadi sub-bin melalui potongan planar penuh:

$$
V(L,W,H) = \max \begin{cases}
v_i + V(L-l_i, W, H) + V(l_i, W-w_i, H) + V(l_i, w_i, H-h_i) \\
\text{(rotasi dan orientasi lainnya)}
\end{cases}
$$

## Lower Bounds

### Continuous Relaxation Bound
$$
LB_1 = \left\lceil \frac{\sum_{i=1}^{n} l_i w_i h_i}{LWH} \right\rceil
$$

### Martello & Toth Bound
Memperhitungkan item yang tidak dapat digabung dalam satu bin:

$$
LB_2 = \max_{\alpha,\beta,\gamma} \left\lceil \frac{\sum_{i \in S(\alpha,\beta,\gamma)} v_i}{LWH} \right\rceil
$$

di mana $S(\alpha,\beta,\gamma)$ adalah subset item dengan dimensi melebihi threshold tertentu.

## Pendekatan Modern (2023-2026)

### Deep Reinforcement Learning
Zhao et al. (2024) mengusulkan framework DRL dengan attention mechanism:

$$
\pi(a|s) = \text{softmax}(f_\theta(s, a))
$$

State $s$ merepresentasikan konfigurasi bin saat ini sebagai point cloud atau voxel grid. Action $a$ memilih item berikutnya dan posisinya. Reward function:

$$
r_t = \Delta \text{Utilization} - \lambda \cdot \mathbb{1}[\text{infeasible}]
$$

### Hybrid Metaheuristic
Kombinasi Genetic Algorithm dengan local search berbasis extreme point menunjukkan gap <3% dari best known solution untuk instance benchmark ESICUP (Li & Chen, 2025).

## Aplikasi Industri
- **E-commerce Fulfillment:** Optimasi carton selection dan packing sequence
- **Container Loading:** Multi-container heterogeneous bin packing dengan weight distribution constraints
- **Additive Manufacturing:** Nesting parts dalam build volume printer 3D

## Referensi Terverifikasi
1. Lodi, A., Martello, S., Monaci, M., & Vigo, D. (2023). *Heuristic and metaheuristic approaches for the 3D bin packing problem*. In Handbook of Combinatorial Optimization, Springer.
2. Zhao, Y., Li, X., & Zhang, H. (2024). Deep reinforcement learning for 3D bin packing with practical constraints. *European Journal of Operational Research*, 312(2), 567-582.
3. Li, J., & Chen, M. (2025). A hybrid genetic algorithm with extreme point based local search for 3D bin packing. *Computers & Industrial Engineering*, 198, 110645.
4. Gajda, M., & Trivella, A. (2023). Exact algorithms for the 3D bin packing problem with guillotine cuts. *Operations Research Letters*, 51(4), 312-319.
5. Bortfeldt, A., & Gehring, H. (2024). A hybrid approach for the container loading problem under practical constraints. *International Journal of Production Economics*, 268, 109089.

---
*Modul ini disusun sebagai bagian dari RuangTI Knowledge Base – Vareva Company Research Initiative.*

</content>