# 113. Quadratic Assignment Problem (QAP) in Plant Layout

## Konsep Dasar
Quadratic Assignment Problem (QAP) adalah salah satu masalah optimasi kombinatorial paling sulit (NP-hard). Dalam konteks Teknik Industri, QAP memodelkan **Facility Layout Problem**: menempatkan $n$ fasilitas ke $n$ lokasi sedemikian rupa sehingga total biaya interaksi diminimalkan. Kompleksitasnya berasal dari fungsi objektif kuadratik yang melibatkan produk dua variabel keputusan.

## Formulasi Matematis

### Model Koopmans-Beckmann
Diberikan matriks aliran $F = [f_{ij}]$ dan matriks jarak $D = [d_{kl}]$, serta matriks biaya tetap $C = [c_{ik}]$:

$$
\min_{\pi \in S_n} \sum_{i=1}^{n} \sum_{j=1}^{n} f_{ij} \cdot d_{\pi(i)\pi(j)} + \sum_{i=1}^{n} c_{i\pi(i)}
$$

di mana $\pi$ adalah permutasi penempatan fasilitas ke lokasi, dan $S_n$ adalah himpunan semua permutasi berukuran $n!$.

### Formulasi Integer Programming
Dengan variabel biner $x_{ik} = 1$ jika fasilitas $i$ ditempatkan di lokasi $k$:

$$
\begin{aligned}
\min \quad & \sum_{i,j,k,l} f_{ij} d_{kl} x_{ik} x_{jl} + \sum_{i,k} c_{ik} x_{ik} \\
\text{s.t.} \quad & \sum_{k=1}^{n} x_{ik} = 1, \quad \forall i \\
& \sum_{i=1}^{n} x_{ik} = 1, \quad \forall k \\
& x_{ik} \in \{0, 1\}
\end{aligned}
$$

## Metode Solusi

### Exact Methods
- **Branch-and-Bound dengan Gilmore-Lawler Bound:** Lower bound klasik berdasarkan dekomposisi eigenvalue.
- **Semidefinite Programming (SDP) Relaxation:** Memberikan bound lebih ketat untuk $n \leq 30$.
- **Reformulation-Linearization Technique (RLT):** Mengubah QAP menjadi LP dengan variabel tambahan.

### Metaheuristics
- **Tabu Search:** Robust Taboo Search (Taillard, 1991) masih menjadi benchmark.
- **Genetic Algorithms:** Dengan crossover operator khusus (PMX, OX).
- **Ant Colony Optimization:** Memanfaatkan pheromone trail pada assignment matrix.
- **Hybrid Methods:** Kombinasi GA dengan local search (memetic algorithms).

## Aplikasi di Industrial Engineering
- **Plant Layout Design:** Penempatan departemen/manufaktur cells.
- **Warehouse Slotting:** Penempatan SKU ke rak penyimpanan.
- **PCB Component Placement:** Minimisasi panjang jalur kabel.
- **Hospital Department Layout:** Aliran pasien antar unit.
- **Campus/Office Planning:** Kedekatan tim yang berkolaborasi.

## Referensi Terverifikasi
- Burkard, R. E., Dell'Amico, M., & Martello, S. (2012). *Assignment Problems*. SIAM.
- Loiola, E. M., de Abreu, N. M. M., Boaventura-Netto, P. O., Hahn, P., & Querido, T. (2007). A survey for the quadratic assignment problem. *European Journal of Operational Research*, 176(2), 657–690.
- Duman, E., & Taşkın, Z. C. (2023). Exact solution approaches for the quadratic assignment problem: A computational study. *Computers & Operations Research*, 158, 106302.
- Ahmadi-Javid, A., & Hoseinpour, P. (2024). A hybrid metaheuristic for large-scale facility layout problems with unequal area departments. *International Journal of Production Economics*, 267, 109068.

</content>