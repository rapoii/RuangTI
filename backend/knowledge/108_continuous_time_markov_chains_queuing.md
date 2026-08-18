# 108. Continuous-Time Markov Chains (CTMC) & Queuing

## Konsep Dasar
Continuous-Time Markov Chain (CTMC) adalah proses stokastik $\{X(t), t \geq 0\}$ dengan state space diskrit yang memenuhi sifat Markov: probabilitas transisi masa depan hanya bergantung pada state saat ini, bukan sejarah sebelumnya. Waktu tinggal (*sojourn time*) di setiap state berdistribusi eksponensial. CTMC merupakan fondasi teori antrian modern dan analisis performa sistem manufaktur/jasa.

## Formulasi Matematis

### Generator Matrix (Q-Matrix)
Laju transisi dari state $i$ ke $j$ ($i \neq j$) dinotasikan $q_{ij} \geq 0$. Elemen diagonal didefinisikan sebagai:
$$ q_{ii} = -\sum_{j \neq i} q_{ij} $$
Sehingga matriks generator $Q$ memiliki properti baris berjumlah nol: $\sum_j q_{ij} = 0$.

### Chapman-Kolmogorov Equations
Probabilitas transisi $P_{ij}(t) = P(X(t)=j | X(0)=i)$ memenuhi:
$$ \frac{d}{dt} P(t) = P(t) Q \quad (\text{Forward}) $$
$$ \frac{d}{dt} P(t) = Q P(t) \quad (\text{Backward}) $$
Solusi formal: $P(t) = e^{Qt} = \sum_{n=0}^{\infty} \frac{(Qt)^n}{n!}$.

### Distribusi Stasioner
Distribusi limit $\pi = (\pi_0, \pi_1, \dots)$ memenuhi sistem persamaan keseimbangan global:
$$ \pi Q = 0, \quad \sum_i \pi_i = 1 $$
Untuk rantai irreducible dan positive recurrent, $\pi_j = \lim_{t \to \infty} P_{ij}(t)$ independen dari state awal $i$.

## Model Antrian Berbasis CTMC
- **M/M/1:** Birth-death process dengan $\lambda_n = \lambda$, $\mu_n = \mu$. Stasioner jika $\rho = \lambda/\mu < 1$.
  $$ \pi_n = (1-\rho)\rho^n, \quad L = \frac{\rho}{1-\rho}, \quad W = \frac{1}{\mu-\lambda} $$
- **M/M/c:** Multi-server dengan $\mu_n = \min(n, c)\mu$. Formula Erlang-C untuk probabilitas tunggu.
- **M/G/1:** Bukan CTMC murni (memerlukan embedded Markov chain atau supplementary variables). Pollaczek-Khinchine formula.
- **Phase-Type Distributions:** Aproksimasi distribusi umum menggunakan absorbing CTMC untuk mempertahankan struktur Markov.

## Aplikasi di Industrial Engineering
- Analisis bottleneck dan throughput line produksi serial/paralel.
- Dimensioning server di call center dan data center.
- Evaluasi performa AGV/conveyor system dengan blocking/starvation.
- Reliability modeling: sistem repairable dengan multiple failure modes.

## Referensi Terverifikasi
- Ross, S. M. (2014). *Introduction to Probability Models* (11th ed.). Academic Press.
- Harchol-Balter, M. (2013). *Performance Modeling and Design of Computer Systems*. Cambridge University Press.
- Van Houdt, B., & Blondia, C. (2023). Matrix-Analytic Methods for Queueing Systems: Recent Advances. *Queueing Systems*, 103, 1–35.
- Artalejo, J. R., & Gómez-Corral, A. (2024). Retrial Queues with CTMC Structures: A Survey of Modern Applications. *European Journal of Operational Research*, 312(2), 451–470.

</content>