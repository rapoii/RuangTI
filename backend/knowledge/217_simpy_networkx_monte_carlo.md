# 217 - SimPy, NetworkX & Monte Carlo Integration

## Overview

This module integrates three powerful Python libraries for industrial simulation: **SimPy** for discrete-event process modeling, **NetworkX** for graph-based system representation, and **Monte Carlo methods** for stochastic uncertainty quantification. The combination enables modeling complex networked systems (supply chains, transportation, communication) where topology matters, processes interact through shared resources, and parameters are uncertain. This integrated approach is essential for modern digital twin applications and resilience analysis.

## Architecture Overview

### Component Roles

$$
\text{System Model} = \underbrace{G(V,E)}_{\text{NetworkX}} + \underbrace{\{P_i\}_{i=1}^n}_{\text{SimPy Processes}} + \underbrace{F(\theta)}_{\text{MC Sampling}}
$$

- **NetworkX**: Defines system topology, computes paths, identifies bottlenecks
- **SimPy**: Simulates entity flow, resource contention, timing dynamics
- **Monte Carlo**: Samples uncertain parameters, estimates output distributions

### Data Flow

```
[Parameter Distributions] → MC Sampler → [Realized Parameters]
                                              ↓
[Graph Topology] → NetworkX Analysis → [Route/Resource Config]
                                              ↓
                                    SimPy Environment
                                              ↓
                                  [Performance Metrics]
                                              ↓
                              Statistical Aggregation → Results
```

## NetworkX: System Topology Modeling

### Graph Representation

A directed weighted graph $G = (V, E)$ models the system:

$$
w(u,v) = \begin{cases}
\text{travel time} & \text{for transportation} \\
1/\mu_{uv} & \text{for service rate at node } v \\
c_{uv} & \text{for unit flow cost}
\end{cases}
$$

```python
import networkx as nx

G = nx.DiGraph()
G.add_node("Warehouse", capacity=500, type="storage")
G.add_node("Factory_A", machines=10, type="production")
G.add_edge("Warehouse", "Factory_A", distance=45, reliability=0.98)
```

### Critical Path Analysis

Longest path in DAG determines minimum makespan:

$$
T_{makespan} = \max_{p \in \mathcal{P}} \sum_{(u,v) \in p} w(u,v)
$$

where $\mathcal{P}$ is the set of all source-to-sink paths.

### Centrality Metrics for Bottleneck Identification

Betweenness centrality identifies critical nodes:

$$
C_B(v) = \sum_{s \neq v \neq t} \frac{\sigma_{st}(v)}{\sigma_{st}}
$$

where $\sigma_{st}$ is total shortest paths from $s$ to $t$, and $\sigma_{st}(v)$ passes through $v$.

### Network Reliability

Two-terminal reliability via factoring algorithm:

$$
R(G) = p_e \cdot R(G/e) + (1-p_e) \cdot R(G-e)
$$

where $G/e$ contracts edge $e$ and $G-e$ deletes it.

## SimPy: Process-Based Simulation

### Resource-Aware Routing

Entities traverse graph edges while requesting node resources:

```python
import simpy

def transport_process(env, G, route, resources):
    for u, v in zip(route[:-1], route[1:]):
        # Request destination resource
        with resources[v].request() as req:
            yield req
            travel_time = G[u][v]['distance'] / speed
            yield env.timeout(travel_time)
            # Process at node
            proc_time = random.expovariate(resources[v].service_rate)
            yield env.timeout(proc_time)
```

### Multi-Modal Transport with Transshipment

Model mode changes at hub nodes with setup times:

$$
T_{total} = \sum_{i=1}^{n} T_{travel,i} + \sum_{j \in H} T_{transship,j} + \sum_{k=1}^{m} T_{queue,k}
$$

where $H$ is the set of transshipment hubs.

## Monte Carlo Integration

### Parameter Uncertainty Modeling

Key uncertain parameters and their distributions:

| Parameter | Distribution | Rationale |
|-----------|-------------|-----------|
| Demand rate | Gamma($\alpha, \beta$) | Positive, skewed, sum of exponentials |
| Travel time | Lognormal($\mu, \sigma$) | Multiplicative delays, positive support |
| Machine MTBF | Weibull($\lambda, k$) | Aging effects, flexible hazard |
| Yield rate | Beta($a, b$) | Bounded [0,1], conjugate to binomial |

### Nested Simulation Structure

Outer loop samples scenario parameters; inner loop runs DES:

$$
\hat{E}[Y] = \frac{1}{N} \sum_{i=1}^{N} Y(\theta_i), \quad \theta_i \sim F_\Theta
$$

For each $\theta_i$, run $M$ replications to estimate conditional variance:

$$
\widehat{\text{Var}}(Y|\theta_i) = \frac{1}{M-1} \sum_{j=1}^{M} (Y_{ij} - \bar{Y}_i)^2
$$

Total variance decomposition (Law of Total Variance):

$$
\text{Var}(Y) = E[\text{Var}(Y|\Theta)] + \text{Var}(E[Y|\Theta])
$$

### Variance Reduction for Network Simulation

**Conditional Monte Carlo**: Analytically integrate over travel times given route:

$$
E[Y|R=r] = \int Y(r, t) f_T(t|r) dt
$$

Reduces variance by removing sampling noise on known-conditionals.

**Common Random Numbers**: Use same stream across scenarios for fair comparison:

$$
\widehat{\Delta} = \frac{1}{N} \sum_{i=1}^{N} [Y_A(U_i) - Y_B(U_i)]
$$

Variance reduction when $Y_A$ and $Y_B$ are positively correlated.

## Integrated Workflow Example: Supply Chain Resilience

### Problem Definition

Evaluate expected delivery time and stockout probability under disruption risk for a 3-tier supply network with 12 nodes and stochastic link failures.

### Implementation Skeleton

```python
import numpy as np
import networkx as nx
import simpy
from scipy import stats

def sample_scenario(rng):
    """Sample one realization of uncertain parameters."""
    return {
        'demand': rng.gamma(shape=3, scale=100),
        'link_reliability': {e: rng.beta(20, 1) for e in G.edges()},
        'service_rates': {n: rng.lognormal(2, 0.3) for n in G.nodes()}
    }

def run_simulation(env_params, seed):
    """Single DES replication."""
    env = simpy.Environment()
    # ... build environment from env_params ...
    env.run(until=8760)  # 1 year in hours
    return metrics_collector.results

def monte_carlo_analysis(n_scenarios=1000, n_replications=10):
    rng = np.random.default_rng(42)
    results = []
    for _ in range(n_scenarios):
        params = sample_scenario(rng)
        reps = [run_simulation(params, seed=s) for s in range(n_replications)]
        results.append(np.mean(reps))
    return {
        'mean_delivery_time': np.mean(results),
        'ci_95': stats.t.interval(0.95, len(results)-1, 
                                   loc=np.mean(results), 
                                   scale=stats.sem(results)),
        'stockout_prob': np.mean([r['stockouts'] > 0 for r in results])
    }
```

### Output Analysis

Report point estimates with confidence intervals:

$$
\hat{\mu} \pm t_{\alpha/2, N-1} \cdot \frac{s}{\sqrt{N}}
$$

And sensitivity indices identifying which uncertainties drive output variance.

## Performance Optimization

### Parallel Execution

Use `multiprocessing` or `joblib` for embarrassingly parallel MC:

$$
\text{Speedup} \approx \min(P, N/B)
$$

where $P$ is core count, $N$ scenarios, $B$ batch size.

### Surrogate-Assisted Simulation

Fit Gaussian Process metamodel after initial sampling:

$$
Y(\theta) \approx \mathcal{GP}(m(\theta), k(\theta, \theta'))
$$

Use Expected Improvement acquisition to focus expensive DES runs on informative regions.

## Recent Advances (2023-2026)

- **Graph Neural Network Surrogates**: Learning simulation outputs directly from graph structure (Chen et al., 2024)
- **Differentiable Discrete Event Simulation**: Backpropagation through SimPy for gradient-based optimization (Li & Zhang, 2025)
- **Bayesian Network Calibration**: Updating failure probabilities using field data within MC framework (Park & Kim, 2024)
- **Federated Simulation**: Privacy-preserving distributed MC across organizational boundaries (Wang et al., 2023)

## References

- Chen, L., Wu, J., & Wang, Z. (2024). Graph neural surrogate models for large-scale network simulation. *Transportation Research Part C*, 158, 104432.
- Li, X., & Zhang, Q. (2025). Differentiable discrete event simulation with PyTorch integration. *ACM Transactions on Modeling and Computer Simulation*, 35(2), 1-28.
- Park, S., & Kim, H. (2024). Bayesian calibration of supply chain disruption models using operational data. *Reliability Engineering & System Safety*, 241, 109612.
- Wang, Y., Liu, M., & Chen, X. (2023). Federated Monte Carlo simulation for multi-party supply chain risk assessment. *European Journal of Operational Research*, 308(3), 1245-1261.
- Law, A. M. (2024). *Simulation Modeling and Analysis* (6th ed.). McGraw-Hill Education.

</parameter>