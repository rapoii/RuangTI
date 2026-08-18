# 109. Non-Homogeneous Poisson Processes (NHPP) & Warranty

## Konsep Dasar
Non-Homogeneous Poisson Process (NHPP) adalah generalisasi dari proses Poisson di mana intensitas kejadian $\lambda(t)$ berubah terhadap waktu. Dalam Industrial Engineering, NHPP menjadi fondasi model **reliability growth**, **warranty cost analysis**, dan **failure intensity** pada sistem yang mengalami degradasi atau perbaikan seiring waktu.

Berbeda dengan Homogeneous Poisson Process (HPP) yang memiliki $\lambda$ konstan, NHPP menangkap fenomena *infant mortality*, *useful life*, dan *wear-out* secara langsung melalui fungsi intensitas.

## Formulasi Matematis

### Definisi NHPP
Proses penghitungan $\{N(t), t \geq 0\}$ adalah NHPP dengan intensitas $\lambda(t) \geq 0$ jika:
1. $N(0) = 0$
2. Increment independen
3. $P(N(t+h) - N(t) = 1) = \lambda(t)h + o(h)$
4. $P(N(t+h) - N(t) \geq 2) = o(h)$

Jumlah kejadian dalam interval $(a, b]$ berdistribusi Poisson dengan mean:
$$
\Lambda(a, b) = \int_a^b \lambda(t) \, dt
$$

### Power Law Process (PLP / Crow-AMSAA)
Model paling umum untuk reliability growth:
$$
\lambda(t) = \frac{\beta}{\eta} \left(\frac{t}{\eta}\right)^{\beta - 1}
$$
- $\beta < 1$: Reliability growth (intensitas kegagalan menurun)
- $\beta = 1$: HPP (tidak ada perubahan)
- $\beta > 1$: Reliability deterioration

Mean cumulative failures: $E[N(t)] = (t/\eta)^\beta$

### Log-Linear Process (LLP)
$$
\lambda(t) = \exp(a + bt)
$$
Digunakan ketika failure rate tumbuh/decay secara eksponensial.

## Estimasi Parameter
Untuk PLP dengan data time-truncated pada $T$:
$$
\hat{\beta} = \frac{n}{\sum_{i=1}^n \ln(T/t_i)}, \quad \hat{\eta} = \left(\frac{T^\beta}{n}\right)^{1/\beta}
$$

Goodness-of-fit: Cramér-von Mises test atau Chi-square test pada transformed inter-arrival times.

## Aplikasi Warranty Cost Analysis
Biaya warranty per unit terjual:
$$
C_w = c_r \cdot E[N(W)] = c_r \int_0^W \lambda(t) \, dt
$$
di mana $W$ = periode warranty, $c_r$ = biaya repair/replacement per klaim.

Untuk PLP: $C_w = c_r (W/\eta)^\beta$

## Referensi Terverifikasi
- Rigdon, S. E., & Basu, A. P. (2000). *Statistical Methods for the Reliability of Repairable Systems*. Wiley.
- Kijima, M. (2023). *Stochastic Models for Repairable Systems and Warranty Analysis*. CRC Press.
- Yang, Z., & Xie, M. (2024). Non-homogeneous Poisson process models for warranty cost prediction with usage heterogeneity. *Reliability Engineering & System Safety*, 241, 109618.
- Liu, B., & Elsayed, E. A. (2023). Warranty cost analysis under non-homogeneous Poisson process with minimal repair. *Computers & Industrial Engineering*, 185, 109672.

</content>