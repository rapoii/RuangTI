# Module 51: Queuing Networks & Jackson Networks

## Overview
Jackson Networks represent a fundamental class of open queueing networks in Operations Research where the equilibrium distribution has a product-form solution. This property allows complex manufacturing and service systems to be decomposed into independent M/M/c queues, enabling tractable performance analysis for Industrial Engineering applications.

## Core Concepts

### 1. Open Jackson Network Definition
An open Jackson network consists of $M$ service nodes where:
- External arrivals to node $i$ follow a Poisson process with rate $\lambda_i^0$
- Service times at node $i$ are exponentially distributed with rate $\mu_i$
- After service at node $i$, customers route to node $j$ with probability $p_{ij}$ or leave the system with probability $1 - \sum_j p_{ij}$

### 2. Traffic Equations
The total arrival rate $\lambda_i$ to each node satisfies the flow balance equations:

$$
\lambda_i = \lambda_i^0 + \sum_{j=1}^{M} \lambda_j p_{ji}, \quad i = 1, \dots, M
$$

In matrix form: $\boldsymbol{\lambda} = \boldsymbol{\lambda}^0 (I - P)^{-1}$

### 3. Product-Form Solution (Jackson's Theorem)
For a stable network ($\rho_i = \lambda_i / \mu_i < 1$), the steady-state joint probability is:

$$
P(n_1, n_2, \dots, n_M) = \prod_{i=1}^{M} (1 - \rho_i) \rho_i^{n_i}
$$

This implies each node behaves as an independent M/M/1 queue despite interdependencies.

### 4. Performance Measures
- **Expected number at node i**: $L_i = \frac{\rho_i}{1 - \rho_i}$
- **Expected waiting time at node i**: $W_i = \frac{1}{\mu_i - \lambda_i}$
- **System throughput**: $\gamma = \sum_{i=1}^M \lambda_i^0$
- **Total expected sojourn time**: $W = \frac{1}{\gamma} \sum_{i=1}^M L_i$

## Advanced Extensions

### Gordon-Newell Networks (Closed)
For closed networks with fixed population $N$:

$$
P(\mathbf{n}) = \frac{1}{G(N)} \prod_{i=1}^{M} \left( \frac{e_i}{\mu_i} \right)^{n_i}
$$

where $G(N)$ is the normalization constant computed via Mean Value Analysis (MVA).

### BCMP Networks
Generalizes Jackson networks to allow:
- Multiple customer classes
- FCFS, PS, LCFS-PR, and IS disciplines
- State-dependent service rates

## Modern Applications (2023-2026)
Recent research extends Jackson networks to IoT-enabled smart factories and stochastic programming contexts:
- **Shi et al. (2023)** integrated queuing models with stochastic programming for IoT maintenance optimization in *IISE Transactions*.
- **Seyfi et al. (2025)** applied multi-stage scenario-based approaches to production planning under uncertainty in *Annals of Operations Research*.

## References
1. Jackson, J.R. (1957). Networks of Waiting Lines. *Operations Research*, 5(4), 518-521.
2. Shi, J., Rozas, H., Yildirim, M., & Gebraeel, N. (2023). A stochastic programming model for jointly optimizing maintenance and spare parts inventory for IoT applications. *IISE Transactions*.
3. Seyfi, S.A., Yanıkoğlu, İ., & Yılmaz, G. (2025). Multi-stage scenario-based stochastic programming for managing lot sizing and workforce scheduling. *Annals of Operations Research*.
4. Bertsekas, D.P. (2023). *Dynamic Programming and Optimal Control* (5th ed.). Athena Scientific.

</content>

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
