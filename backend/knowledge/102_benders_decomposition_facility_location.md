# 102. Benders Decomposition for Stochastic Facility Location

## Konsep Dasar
Benders Decomposition adalah teknik dekomposisi untuk masalah optimasi dengan struktur *block-angular*, di mana variabel dapat dipisahkan menjadi **variabel komplikasi** (biasanya integer/biner) dan **variabel kontinu**. Dalam konteks *Stochastic Facility Location*, metode ini memisahkan keputusan lokasi fasilitas (Stage 1) dari keputusan alokasi operasional di bawah berbagai skenario ketidakpastian (Stage 2).

## Formulasi Matematis

### Masalah Asli (Two-Stage Stochastic)
$$
\begin{aligned}
\min \quad & \sum_{j \in J} f_j y_j + \sum_{s \in S} p_s Q(y, s) \\
\text{s.t.} \quad & y_j \in \{0, 1\}, \quad \forall j \in J
\end{aligned}
$$
di mana $Q(y, s)$ adalah nilai optimal dari subproblem recourse untuk skenario $s$:
$$
\begin{aligned}
Q(y, s) = \min \quad & \sum_{i \in I} \sum_{j \in J} c_{ij}^s x_{ij}^s \\
\text{s.t.} \quad & \sum_{j \in J} x_{ij}^s = d_i^s, \quad \forall i \in I \\
& \sum_{i \in I} x_{ij}^s \leq K_j y_j, \quad \forall j \in J \\
& x_{ij}^s \geq 0
\end{aligned}
$$

### Master Problem (Benders)
Master Problem mengaproksimasi fungsi recourse $\theta_s$ menggunakan *optimality cuts* dan *feasibility cuts*:
$$
\begin{aligned}
\min \quad & \sum_{j \in J} f_j y_j + \sum_{s \in S} p_s \theta_s \\
\text{s.t.} \quad & \theta_s \geq \alpha_s^k + \sum_{j \in J} \beta_{sj}^k y_j, \quad \forall s \in S, k \in \mathcal{K}_s \quad (\text{Optimality Cuts}) \\
& 0 \geq \gamma_s^l + \sum_{j \in J} \delta_{sj}^l y_j, \quad \forall s \in S, l \in \mathcal{L}_s \quad (\text{Feasibility Cuts}) \\
& y_j \in \{0, 1\}
\end{aligned}
$$
Koefisien cut $(\alpha, \beta)$ diperoleh dari solusi dual subproblem recourse.

## Algoritma Benders
1. Inisialisasi Master Problem tanpa cuts (atau dengan subset awal).
2. Selesaikan MP → dapatkan solusi kandidat $(\bar{y}, \bar{\theta})$.
3. Untuk setiap skenario $s$, selesaikan Dual Subproblem dengan $\bar{y}$ tetap.
4. Jika subproblem unbounded → tambahkan *Feasibility Cut*.
5. Jika subproblem optimal tapi $\bar{\theta}_s < Q(\bar{y}, s)$ → tambahkan *Optimality Cut*.
6. Ulangi hingga tidak ada cut baru yang ditambahkan (konvergensi).

## Acceleration Techniques
- **Warm Starting:** Gunakan solusi heuristik awal untuk menghasilkan cuts kuat di iterasi pertama.
- **Cut Aggregation:** Gabungkan cuts dari skenario serupa untuk mengurangi ukuran MP.
- **Level Set / Trust Region:** Stabilisasi osilasi dual variables.
- **Pareto-Optimal Cuts:** Magnanti & Wong (1981) menunjukkan bahwa cuts yang dominan mempercepat konvergensi secara signifikan.

## Aplikasi di Industrial Engineering
- Desain jaringan distribusi multi-periode dengan permintaan stokastik.
- Lokasi gudang darurat (*emergency logistics*) pasca bencana.
- Investasi kapasitas pabrik di bawah ketidakpastian harga energi/bahan baku.
- Jaringan *reverse logistics* dengan volume return yang tidak pasti.

## Referensi Terverifikasi
- Benders, J. F. (1962). Partitioning procedures for solving mixed-variables programming problems. *Numerische Mathematik*, 4(1), 238–252.
- Rahmaniani, R., Crainic, T. G., Gendreau, M., & Rei, W. (2017). The Benders decomposition algorithm: A literature review. *European Journal of Operational Research*, 259(3), 801–817.
- Keyvanshahi, H., & Van Woensel, T. (2023). Benders decomposition for stochastic facility location with congestion. *Transportation Science*, 57(4), 987–1008.
- Zhang, Y., & Li, X. (2024). Accelerated Benders decomposition for two-stage stochastic network design under disruption risks. *Computers & Industrial Engineering*, 189, 109942.

</content>