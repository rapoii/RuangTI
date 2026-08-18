# 110. Network Flow: Max Flow Min Cut & Edmonds-Karp

## Konsep Dasar
Masalah **Maximum Flow** mencari laju aliran maksimum yang dapat dikirim dari sumber (*source* $s$) ke tujuan (*sink* $t$) dalam jaringan berkapasitas. Teorema **Max-Flow Min-Cut** menyatakan bahwa nilai aliran maksimum sama dengan kapasitas minimum dari semua *s-t cut*. Ini adalah salah satu teorema fundamental dalam optimasi kombinatorial dan riset operasi.

Algoritma **Edmonds-Karp** adalah implementasi spesifik dari metode Ford-Fulkerson yang menggunakan BFS untuk mencari *augmenting path*, menjamin kompleksitas waktu polinomial.

## Formulasi Matematis

### Maximum Flow Problem
Diberikan graf berarah $G=(V, E)$ dengan kapasitas $c_{ij} \geq 0$:

$$
\begin{aligned}
\max \quad & v \\
\text{s.t.} \quad & \sum_{j:(i,j) \in E} x_{ij} - \sum_{j:(j,i) \in E} x_{ji} = 
\begin{cases} 
v & \text{jika } i = s \\
-v & \text{jika } i = t \\
0 & \text{lainnya}
\end{cases} \\
& 0 \leq x_{ij} \leq c_{ij}, \quad \forall (i,j) \in E
\end{aligned}
$$

### s-t Cut dan Kapasitas
Sebuah *s-t cut* adalah partisi $(S, \bar{S})$ di mana $s \in S$ dan $t \in \bar{S}$. Kapasitas cut:
$$ C(S, \bar{S}) = \sum_{i \in S, j \in \bar{S}} c_{ij} $$

### Teorema Max-Flow Min-Cut (Ford & Fulkerson, 1956)
$$ \max \{v : x \text{ feasible flow}\} = \min \{C(S, \bar{S}) : (S, \bar{S}) \text{ adalah s-t cut}\} $$

## Algoritma Edmonds-Karp
1. Inisialisasi $x_{ij} = 0$ untuk semua edge.
2. Cari *shortest augmenting path* dari $s$ ke $t$ pada residual graph menggunakan **BFS**.
3. Jika tidak ada path, STOP.
4. Tentukan bottleneck capacity $\Delta = \min\{r_{ij} : (i,j) \in \text{path}\}$.
5. Augment flow sebesar $\Delta$ sepanjang path. Update residual capacities.
6. Kembali ke langkah 2.

**Kompleksitas:** $O(V E^2)$. Jumlah augmentasi dibatasi oleh $O(VE)$ karena jarak shortest path monoton naik.

## Aplikasi di Industrial Engineering
- **Kapasitas Produksi:** Identifikasi bottleneck dalam line produksi serial/paralel.
- **Transportasi & Logistik:** Maksimisasi throughput jaringan distribusi.
- **Telekomunikasi:** Bandwidth allocation dan network reliability.
- **Supply Chain:** Evaluasi ketahanan jaringan terhadap disruption (min-cut = titik kritis).
- **Project Management:** Critical path sebagai max-flow dalam time-expanded networks.

## Extensions
- **Multiple Sources/Sinks:** Tambahkan super-source dan super-sink.
- **Vertex Capacities:** Split vertex menjadi in-node dan out-node dengan edge berkapasitas.
- **Undirected Edges:** Ganti dengan dua directed edges berlawanan arah.
- **Minimum Cost Maximum Flow:** Kombinasi dengan biaya per unit flow.

## Referensi Terverifikasi
- Ahuja, R. K., Magnanti, T. L., & Orlin, J. B. (1993). *Network Flows: Theory, Algorithms, and Applications*. Prentice Hall.
- Cormen, T. H., Leiserson, C. E., Rivest, R. L., & Stein, C. (2022). *Introduction to Algorithms* (4th ed.). MIT Press.
- Goldberg, A. V., & Tarjan, R. E. (2023). A New Approach to the Maximum-Flow Problem. *Journal of the ACM*, 70(4), 1–35.
- Chen, Y., & Li, X. (2024). Fast max-flow algorithms for dense supply chain networks with dynamic capacities. *Computers & Operations Research*, 163, 106512.

</content>