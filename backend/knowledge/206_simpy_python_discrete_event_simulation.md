# 206 - SimPy: Python Discrete Event Simulation

## Overview

SimPy is a process-based discrete-event simulation (DES) framework for Python that enables modeling of complex systems with concurrent processes, shared resources, and stochastic behavior. Built on Python's generator-based coroutines, SimPy provides an intuitive API for defining simulation processes, managing resources, and collecting statistics. It is widely used in operations research, manufacturing, healthcare, logistics, and computer systems performance analysis.

## Core Architecture

### Process-Based Modeling

SimPy uses Python generators as simulation processes. Each process yields events that suspend execution until the event occurs:

$$
\text{Process} : \mathbb{N} \rightarrow \mathcal{E}^*
$$

where $\mathcal{E}$ is the set of possible events (timeouts, resource requests, signals).

```python
import simpy

def customer(env, name, counter):
    arrive = env.now
    print(f'{name} arrives at {arrive:.2f}')
    with counter.request() as req:
        yield req  # Wait for resource
        wait = env.now - arrive
        print(f'{name} starts service at {env.now:.2f}, waited {wait:.2f}')
        yield env.timeout(5.0)  # Service time
        print(f'{name} departs at {env.now:.2f}')

env = simpy.Environment()
counter = simpy.Resource(env, capacity=2)
for i in range(5):
    env.process(customer(env, f'C{i}', counter))
env.run(until=30.0)
```

### Environment and Time Management

The `Environment` manages virtual time via an event heap (priority queue). The next-event time advance mechanism ensures:

$$
t_{n+1} = \min\{t_e \mid e \in \mathcal{Q}\}
$$

where $\mathcal{Q}$ is the future event list (FEL). Complexity per event is $O(\log |\mathcal{Q}|)$ using binary heaps.

## Resource Types

### Resource (FIFO Queue)

Models servers, machines, or staff with fixed capacity:

$$
W_q = \frac{\lambda}{\mu(\mu - \lambda)} \quad \text{(M/M/1 approximation)}
$$

```python
resource = simpy.Resource(env, capacity=3)
# Preemptive variant:
preempt_res = simpy.PreemptiveResource(env, capacity=2)
```

### Container and Store

- **Container**: Continuous/fluid resources (fuel tanks, buffers)
- **Store**: Discrete items with FIFO/LIFO/priority semantics

$$
\text{Container level: } L(t) = L(0) + \int_0^t [r_{in}(\tau) - r_{out}(\tau)] d\tau
$$

## Statistical Collection

### Monitor Classes

```python
class StatsCollector:
    def __init__(self):
        self.wait_times = []
        self.queue_lengths = []
        self.utilization = []
    
    def record_wait(self, t):
        self.wait_times.append(t)
    
    def mean_wait(self):
        return sum(self.wait_times) / len(self.wait_times) if self.wait_times else 0
    
    def ci_95(self):
        import numpy as np
        m = np.mean(self.wait_times)
        s = np.std(self.wait_times, ddof=1)
        n = len(self.wait_times)
        return m ± 1.96 * s / np.sqrt(n)
```

### Confidence Intervals for Steady-State

For steady-state estimation, apply batch means or replication methods:

$$
\bar{X} \pm z_{\alpha/2} \cdot \frac{S}{\sqrt{n}}
$$

where $S^2 = \frac{1}{n-1}\sum_{i=1}^{n}(X_i - \bar{X})^2$.

## Advanced Patterns

### Priority Queuing

$$
W_q^{(k)} = \frac{\sum_{j=1}^{K} \lambda_j E[S_j^2]}{2(1-\sigma_{k-1})(1-\sigma_k)}
$$

where $\sigma_k = \sum_{j=1}^{k} \rho_j$ and priorities are ranked $1 > 2 > \cdots > K$.

### Interrupts and Signals

Processes can be interrupted or synchronized:

```python
def worker(env, name, signal):
    yield signal.wait()  # Block until signaled
    print(f'{name} activated at {env.now}')

signal = simpy.Event(env)
env.process(worker(env, 'W1', signal))
env.timeout(10).callback(lambda _: signal.succeed())
```

## Validation and Best Practices

1. **Warm-up Period**: Discard initial transient using Welch's method or visual inspection
2. **Run Length**: Ensure sufficient observations for desired CI width: $n \geq \left(\frac{z_{\alpha/2} \cdot S}{d}\right)^2$
3. **Random Streams**: Use separate RNG streams for different stochastic components
4. **Verification**: Trace execution with `env.peek()` and debug logging

## Applications

- Manufacturing job shops and flow lines
- Hospital patient flow and bed management
- Computer network packet switching
- Supply chain inventory policies
- Call center staffing optimization

## References

- Matloff, N. (2023). *Introduction to Discrete-Event Simulation and the SimPy Language*. CRC Press.
- Banks, J., Carson, J. S., Nelson, B. L., & Nicol, D. M. (2024). *Discrete-Event System Simulation* (6th ed.). Pearson.
- Law, A. M. (2024). *Simulation Modeling and Analysis* (6th ed.). McGraw-Hill Education.
- Team SimPy. (2025). SimPy Documentation v4.1. https://simpy.readthedocs.io/

</parameter>