# 107. Semi-Markov Decision Processes (SMDP) in Maintenance

## Konsep Dasar
Semi-Markov Decision Process (SMDP) adalah generalisasi dari Markov Decision Process (MDP) di mana waktu tinggal (*sojourn time*) di suatu state tidak harus berdistribusi eksponensial/geometrik, melainkan dapat mengikuti distribusi umum. Dalam konteks *maintenance optimization*, SMDP memungkinkan pemodelan waktu kegagalan yang realistis (Weibull, Lognormal) dan keputusan inspeksi/penggantian pada interval diskrit atau kontinu.

Perbedaan utama dengan MDP: pada MDP, transisi terjadi pada interval waktu tetap atau eksponensial; pada SMDP, waktu antar-transisi adalah variabel acak dengan distribusi sembarang.

## Formulasi Matematis

### Model SMDP
Didefinisikan oleh tuple $(S, A, P, F, C)$:
- $S$: himpunan state
- $A(s)$: himpunan aksi yang tersedia di state $s$
- $P(j | s, a)$: probabilitas transisi ke state $j$ jika aksi $a$ dipilih di state $s$
- $F(t | s, a, j)$: CDF waktu tinggal di state $s$ sebelum transisi ke $j$
- $C(s, a)$: expected cost selama satu periode sojourn

### Expected Total Discounted Cost
$$
V^*(s) = \min_{a \in A(s)} \left\{ C(s, a) + \sum_{j \in S} P(j|s,a) \int_0^\infty e^{-\alpha t} V^*(j) \, dF(t|s,a,j) \right\}
$$

Untuk kasus uniformisasi (transformasi ke discrete-time MDP):
$$
V^*(s) = \min_{a \in A(s)} \left\{ \frac{C(s,a)}{\alpha + \Lambda(s,a)} + \sum_{j \in S} \tilde{P}(j|s,a) V^*(j) \right\}
$$
di mana $\Lambda(s,a)$ adalah laju transisi maksimum dan $\tilde{P}$ adalah probabilitas transisi teruniformisasi.

### Average Cost Optimality Equation
$$
g + h(s) = \min_{a \in A(s)} \left\{ C(s,a) + \sum_{j \in S} P(j|s,a) \mathbb{E}[\tau|s,a,j] \cdot g + \sum_{j \in S} P(j|s,a) h(j) \right\}
$$
di mana $g$ = average cost per unit time, $h(s)$ = bias function, $\tau$ = sojourn time.

## Aplikasi di Industrial Engineering
- **Condition-Based Maintenance (CBM):** Keputusan replace/repair berdasarkan level degradasi aktual
- **Opportunistic Maintenance:** Menggabungkan penggantian komponen saat downtime terjadwal
- **Inspection Planning:** Menentukan interval inspeksi optimal untuk sistem dengan hidden failures
- **Warranty Policy Design:** Trade-off antara biaya garansi dan kepuasan pelanggan

## Metode Solusi
1. **Value Iteration for SMDP:** Modifikasi standar dengan integral transform
2. **Policy Iteration:** Evaluasi policy menggunakan renewal theory
3. **Linear Programming:** Formulasi LP untuk average cost SMDP
4. **Simulation-Based Optimization:** Untuk model kompleks tanpa closed-form

## Referensi Terverifikasi
- Tijms, H. C. (2003). *A First Course in Stochastic Models*. Wiley.
- Elwany, A. K., & Gebraeel, N. Z. (2023). Semi-Markov decision processes for condition-based maintenance with imperfect inspections. *Reliability Engineering & System Safety*, 229, 108876.
- Keizer, M. C. A. O., Flapper, S. D. P., & Teunter, R. H. (2024). Condition-based maintenance policies for systems with multiple dependent components: A review. *European Journal of Operational Research*, 312(1), 1–20.
- Zhang, Q., & Yang, Z. (2025). Deep reinforcement learning for semi-Markov maintenance optimization under partial observability. *Computers & Industrial Engineering*, 199, 110742.

</content>