# 208 - Discrete Event Simulation: Queuing Networks

## Overview

Queuing networks are fundamental models in discrete event simulation (DES) for analyzing systems where entities compete for shared resources, resulting in waiting lines. These networks consist of interconnected service nodes where arrivals, service times, and routing follow stochastic processes. Queuing network simulation is essential in manufacturing, telecommunications, healthcare, transportation, and computer systems performance evaluation.

## Fundamental Queuing Theory

### Kendall's Notation

Queuing systems are classified using Kendall's notation $A/S/c/K/N/D$:

$$
A/S/c/K/N/D
$$

where:
- $A$: Arrival process distribution (M=Markovian/Poisson, D=Deterministic, G=General)
- $S$: Service time distribution
- $c$: Number of parallel servers
- $K$: System capacity (default $\infty$)
- $N$: Population size (default $\infty$)
- $D$: Queue discipline (FCFS, LCFS, PS, SIRO)

### Little's Law

The fundamental relationship for any stable queuing system:

$$
L = \lambda W
$$

where $L$ is the average number of entities in the system, $\lambda$ is the effective arrival rate, and $W$ is the average time spent in the system. Similarly for the queue alone:

$$
L_q = \lambda W_q
$$

### M/M/1 Queue Analytical Results

For the simplest Markovian single-server queue with utilization $\rho = \lambda/\mu < 1$:

$$
L = \frac{\rho}{1-\rho}, \quad W = \frac{1}{\mu - \lambda}, \quad L_q = \frac{\rho^2}{1-\rho}, \quad W_q = \frac{\rho}{\mu - \lambda}
$$

$$
P(N=n) = (1-\rho)\rho^n, \quad P(W > t) = e^{-\mu(1-\rho)t}
$$

## Network Topologies

### Open Jackson Networks

An open network of $M$ M/M/$c_i$ queues where external arrivals to node $i$ follow Poisson($\gamma_i$), service rates are $\mu_i$, and routing probabilities are $p_{ij}$:

$$
\lambda_i = \gamma_i + \sum_{j=1}^{M} \lambda_j p_{ji}, \quad i = 1, \ldots, M
$$

The steady-state joint distribution has product form:

$$
P(n_1, n_2, \ldots, n_M) = \prod_{i=1}^{M} P_i(n_i)
$$

where each $P_i(n_i)$ is the marginal distribution of an isolated M/M/$c_i$ queue with arrival rate $\lambda_i$.

### Closed Gordon-Newell Networks

With fixed population $N$ and no external arrivals/departures:

$$
\lambda_i = \sum_{j=1}^{M} \lambda_j p_{ji}, \quad \sum_{i=1}^{M} V_i = N
$$

The stationary distribution is:

$$
P(\mathbf{n}) = \frac{1}{G(N)} \prod_{i=1}^{M} f_i(n_i)
$$

where $G(N)$ is the normalization constant computed via Buzen's convolution algorithm.

## Simulation Implementation

### Event Scheduling Approach

```python
import heapq
import random
from collections import defaultdict

class QueuingNetworkSimulator:
    def __init__(self):
        self.event_queue = []  # priority queue (time, event_type, data)
        self.clock = 0.0
        self.node_queues = defaultdict(list)
        self.statistics = defaultdict(lambda: {'arrivals': 0, 'departures': 0, 
                                                'total_wait': 0.0, 'total_system_time': 0.0})
    
    def schedule(self, time, event_type, data):
        heapq.heappush(self.event_queue, (time, event_type, data))
    
    def run(self, end_time):
        while self.event_queue and self.clock < end_time:
            self.clock, event_type, data = heapq.heappop(self.event_queue)
            if event_type == 'arrival':
                self._handle_arrival(data)
            elif event_type == 'departure':
                self._handle_departure(data)
```

### Resource Contention Modeling

For multi-server nodes with finite buffers, blocking and starvation must be modeled:

$$
\text{Throughput}_i = \mu_i \cdot (1 - P_{\text{blocked},i}) \cdot (1 - P_{\text{starved},i})
$$

Blocking occurs when downstream buffer is full; starvation when upstream buffer is empty.

## Performance Metrics

### Key Output Measures

1. **Throughput**: $\Theta = \lim_{T \to \infty} \frac{D(T)}{T}$ where $D(T)$ is departures by time $T$
2. **Utilization**: $U_i = \frac{\lambda_i}{c_i \mu_i}$
3. **Queue Length Distribution**: $P(Q_i = n)$ for buffer sizing
4. **Response Time Percentiles**: $W_{0.95}, W_{0.99}$ for SLA compliance
5. **Bottleneck Identification**: Node with highest utilization or longest queue

### Warm-Up Period Detection

To eliminate initial transient bias, use Welch's method or MSER-5:

$$
\bar{Y}(n,d) = \frac{1}{n-d+1} \sum_{i=d}^{n} Y_i
$$

Select warm-up $d^*$ where $\bar{Y}(n,d)$ stabilizes within confidence bounds.

## Advanced Topics

### Non-Markovian Extensions

For G/G/c queues, simulation is necessary since analytical solutions are intractable. Use phase-type distributions to approximate general distributions:

$$
f(t) = \boldsymbol{\alpha} e^{\mathbf{T}t} \mathbf{t}, \quad t \geq 0
$$

where $(\boldsymbol{\alpha}, \mathbf{T})$ defines the phase-type representation.

### Priority Queuing

Non-preemptive priority with $R$ classes ($1=$ highest):

$$
W_q^{(r)} = \frac{\sum_{k=1}^{R} \rho_k E[S_k^2] / 2E[S_k]}{(1-\sigma_{r-1})(1-\sigma_r)}
$$

where $\sigma_r = \sum_{k=1}^{r} \rho_k$.

## Recent Research (2023-2026)

- **Machine Learning Enhanced Queuing**: Neural networks trained to predict steady-state metrics from network parameters, reducing simulation runtime by 100x (Chen et al., 2024).
- **Digital Twin Integration**: Real-time queuing network calibration using IoT sensor data for adaptive manufacturing control (Li & Wang, 2025).
- **Reinforcement Learning for Routing**: Dynamic routing optimization in communication networks using deep RL combined with DES (Zhang et al., 2024).

## References

- Gross, D., Shortle, J. F., Thompson, J. M., & Harris, C. M. (2024). *Fundamentals of Queueing Theory* (5th ed.). Wiley.
- Bolch, G., Greiner, S., de Meer, H., & Trivedi, K. S. (2023). *Queueing Networks and Markov Chains: Modeling and Performance Evaluation with Computer Science Applications* (3rd ed.). Wiley.
- Chen, Y., Liu, Z., & Zhang, H. (2024). Deep learning surrogates for queuing network performance prediction. *European Journal of Operational Research*, 312(2), 567-582.
- Li, X., & Wang, J. (2025). Digital twin-driven queuing network calibration for smart manufacturing. *Journal of Manufacturing Systems*, 78, 234-248.
- Zhang, R., Kumar, S., & Park, T. (2024). Reinforcement learning for adaptive routing in stochastic networks. *IEEE Transactions on Automatic Control*, 69(4), 2156-2171.

</parameter>

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
