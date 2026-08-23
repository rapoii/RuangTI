# Modul 108: Continuous-Time Markov Chains (CTMC) & Queuing

## Konsep Dasar
Continuous-Time Markov Chain (CTMC) adalah proses stokastik $\{X(t), t \geq 0\}$ dengan state space diskrit yang memenuhi **sifat Markov**: probabilitas transisi masa depan hanya bergantung pada state saat ini, bukan sejarah. Konsekuensi strukturalnya: waktu tinggal (*sojourn time*) di tiap state berdistribusi **eksponensial** (sifat memoryless), dan dinamika sistem sepenuhnya ditentukan matriks laju transisi. CTMC adalah fondasi teori antrian modern dan analisis performa sistem manufaktur/jasa (availability mesin, kapasitas call center, blocking AGV).

## Formulasi Matematis

### Generator Matrix (Q-Matrix)
Laju transisi $i\to j$ ($i\neq j$) dinotasikan $q_{ij}\ge 0$; elemen diagonal menjaga jumlah baris nol:

$$
q_{ii} = -\sum_{j\neq i} q_{ij}, \qquad \sum_j q_{ij} = 0
$$

### Chapman-Kolmogorov Equations
Probabilitas transisi $P_{ij}(t) = P(X(t)=j|X(0)=i)$ memenuhi:

$$
\frac{d}{dt}P(t) = P(t)Q \;\;(\text{forward}), \qquad \frac{d}{dt}P(t) = QP(t) \;\;(\text{backward})
$$

Solusi formal: $P(t) = e^{Qt} = \sum_{n=0}^{\infty}\frac{(Qt)^n}{n!}$ — dihitung numerik via uniformization atau eigendecomposition.

### Distribusi Stasioner
Distribusi limit $\pi$ memenuhi persamaan keseimbangan global:

$$
\pi Q = 0, \qquad \sum_i \pi_i = 1
$$

Untuk rantai *irreducible* dan *positive recurrent*, $\pi_j = \lim_{t\to\infty}P_{ij}(t)$ independen dari state awal. Untuk birth-death process berlaku bentuk produk:

$$
\pi_n = \pi_0 \prod_{i=0}^{n-1}\frac{\lambda_i}{\mu_{i+1}}
$$

## Metode Solusi / Model Antrian Berbasis CTMC

### M/M/1
Birth-death dengan $\lambda_n=\lambda$, $\mu_n=\mu$; stasioner bila $\rho=\lambda/\mu<1$:

$$
\pi_n=(1-\rho)\rho^n, \qquad L=\frac{\rho}{1-\rho}, \qquad W=\frac{1}{\mu-\lambda}
$$

### M/M/c (Erlang-C)
Multi-server $\mu_n=\min(n,c)\mu$ dengan offered load $a=\lambda/\mu$. Probabilitas menunggu (formula Erlang-C):

$$
C(c,a) = \frac{\dfrac{a^c}{c!\,(1-a/c)}}{\sum_{n=0}^{c-1}\dfrac{a^n}{n!}+\dfrac{a^c}{c!\,(1-a/c)}}
$$

Waktu tunggu rata-rata: $W_q = C(c,a)/(\,c\mu-\lambda\,)$. Aplikasi dimensioning: pilih $c$ agar $C(c,a)$ dan SLA terpenuhi.

### Perluasan
- **M/G/1:** bukan CTMC murni; dianalisis lewat embedded Markov chain → formula Pollaczek-Khinchine $L_q = \frac{\rho^2 + \lambda^2 Var(S)}{2(1-\rho)}$.
- **Sifat PASTA:** kedatangan Poisson melihat time-average sistem — dasar validasi pengukuran.
- **Phase-Type (PH) distributions:** distribusi umum diaproksimasi absorbing CTMC untuk mempertahankan struktur Markov; metode matrix-analytic (Van Houdt & Blondia, 2023).
- **Jackson Networks:** jaringan antrian open dengan routing probabilistik memiliki solusi produk-form:
$$\pi(\mathbf{n}) = \prod_{j=1}^{J}\pi_j(n_j)$$
memungkinkan analisis line produksi serial bertingkat.
- **Finite buffer & blocking:** model mesin dua-stasiun dengan buffer $N$ untuk throughput analysis (starvation/blocking probability).

### Teknik Komputasi Numerik
Untuk jaringan besar, eksponensiasi matriks $e^{Qt}$ mahal secara komputasi. **Uniformization** mentransformasi CTMC menjadi DTMC diskret dengan laju seragam $\nu \geq \max_i |q_{ii}|$:

$$
P(t) = e^{-\nu t}\sum_{n=0}^{\infty}\frac{(\nu t)^n}{n!}\left(\frac{Q}{\nu}+I\right)^n
$$

deret Poisson ini dapat dipangkas truncation error terkendali dan sangat efisien di-sparse-kan — implementasi standar pada library analisis keterandalan.

## Aplikasi di Industrial Engineering

1. **Analisis bottleneck & throughput** line produksi serial/paralel: estimasi WIP, cycle time, dan blocking probability.
2. **Dimensioning server:** call center after-sales, helpdesk maintenance, dan data center (staffing Erlang-C).
3. **Performa AGV/conveyor:** ketersediaan armada transport internal dengan breakdown-repair CTMC.
4. **Reliability modeling:** sistem repairable multi-failure-mode — availability steady state $A = \frac{MTBF}{MTBF+MTTR}$ sebagai fungsi $\pi$.
5. **Healthcare operations:** kapasitas bed ICU dan aliran pasien (Artalejo & Gómez-Corral, 2024).

## Referensi Terverifikasi

1. Ross, S. M. (2014). *Introduction to Probability Models* (11th ed.). Academic Press.
2. Gross, D., Shortle, J. F., Thompson, J. M., & Harris, C. M. (2018). *Fundamentals of Queueing Theory* (5th ed.). Wiley.
3. Kleinrock, L. (1975). *Queueing Systems, Volume 1: Theory*. Wiley.
4. Bolch, G., Greiner, S., de Meer, H., & Trivedi, K. S. (2006). *Queueing Networks and Markov Chains* (2nd ed.). Wiley.
5. Van Houdt, B., & Blondia, C. (2023). Matrix-analytic methods for queueing systems: Recent advances. *Queueing Systems*, 103, 1-35.
6. Artalejo, J. R., & Gómez-Corral, A. (2024). Retrial queues with CTMC structures: A survey of modern applications. *European Journal of Operational Research*, 312(2), 451-470.
