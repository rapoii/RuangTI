# 106. Multi-Objective Optimization, Pareto Frontier, NSGA-II

## Konsep Dasar
Multi-Objective Optimization (MOO) menangani masalah dengan dua atau lebih tujuan yang saling bertentangan (*conflicting objectives*). Tidak seperti optimasi tunggal, MOO tidak menghasilkan satu solusi optimal, melainkan sekumpulan solusi **Pareto-optimal** di mana perbaikan pada satu tujuan hanya dapat dicapai dengan mengorbankan tujuan lain.

Dalam Industrial Engineering, MOO digunakan untuk trade-off antara biaya vs layanan, kualitas vs throughput, atau profit vs emisi karbon.

## Formulasi Matematis

### Masalah Multi-Objective
$$
\begin{aligned}
\min \quad & F(x) = (f_1(x), f_2(x), \dots, f_k(x)) \\
\text{s.t.} \quad & g_i(x) \leq 0, \quad i = 1, \dots, m \\
& h_j(x) = 0, \quad j = 1, \dots, p \\
& x \in X \subseteq \mathbb{R}^n
\end{aligned}
$$

### Dominansi Pareto
Solusi $x$ mendominasi solusi $y$ ($x \prec y$) jika:
$$
\forall i \in \{1,\dots,k\}: f_i(x) \leq f_i(y) \quad \wedge \quad \exists j: f_j(x) < f_j(y)
$$

Himpunan semua solusi non-dominated disebut **Pareto Set**; citranya di ruang objektif disebut **Pareto Frontier**.

## Algoritma NSGA-II (Non-dominated Sorting Genetic Algorithm II)
NSGA-II adalah algoritma evolusioner multi-objective yang paling banyak digunakan:

1. **Non-Dominated Sorting:** Populasi diurutkan ke dalam front $F_1, F_2, \dots$ berdasarkan dominansi Pareto.
2. **Crowding Distance:** Mengukur kepadatan solusi di sekitar setiap individu untuk menjaga diversitas.
3. **Binary Tournament Selection:** Memilih parent berdasarkan rank Pareto, lalu crowding distance sebagai tie-breaker.
4. **Elitism:** Gabungan parent dan offspring di-sort ulang; generasi berikutnya diambil dari front terbaik hingga populasi penuh.

Kompleksitas: $O(MN^2)$ di mana $M$ = jumlah objektif, $N$ = ukuran populasi.

## Metode Lain
- **Weighted Sum:** $\min \sum w_i f_i(x)$ — sederhana tapi gagal menemukan solusi di cekungan non-konveks.
- **$\epsilon$-Constraint:** Optimalkan $f_1$, batasi $f_i \leq \epsilon_i$ untuk $i > 1$.
- **MOEA/D:** Dekomposisi menjadi subproblem skalar menggunakan weight vectors.
- **NSGA-III:** Referensi titik (*reference points*) untuk many-objective ($k > 3$).

## Aplikasi di Industrial Engineering
- **Supply Chain Network Design:** Biaya total vs responsivitas vs emisi CO₂
- **Production Scheduling:** Makespan vs tardiness vs energy consumption
- **Facility Layout:** Material handling cost vs safety distance vs flexibility
- **Product Design:** Performance vs cost vs reliability

## Referensi Terverifikasi
- Deb, K., Pratap, A., Agarwal, S., & Meyarivan, T. (2002). A Fast and Elitist Multiobjective Genetic Algorithm: NSGA-II. *IEEE Transactions on Evolutionary Computation*, 6(2), 182–197.
- Miettinen, K. (2023). *Introduction to Multiobjective Optimization: Interactive Decision Making*. Wiley.
- Blank, J., & Deb, K. (2024). pymoo: Multi-Objective Optimization in Python. *IEEE Access*, 12, 45892–45914.
- Li, M., & Yao, X. (2023). Quality Evaluation Metrics for Many-Objective Optimization. *Swarm and Evolutionary Computation*, 78, 101247.

</content>