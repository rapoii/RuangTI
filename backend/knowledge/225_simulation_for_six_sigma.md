# Module 225: Real-Time Digital Twin Discrete-Event Simulation & Live OPC-UA Telemetry

## Conceptual Framework
A Digital Twin (DT) couples a Discrete-Event Simulation (DES) model with live industrial telemetry to create a continuously synchronized virtual replica of the physical system. Unlike offline simulation studies, the DT maintains **state synchronization**: entity counts, machine states, and buffer levels in the model are corrected against sensor readings via state estimators, enabling online what-if analysis, predictive bottleneck detection, and dynamic dispatching. The architecture layers: (1) field devices publishing via OPC-UA/MQTT, (2) a middleware normalizing tags into DES events (machine breakdown, batch completion, quality flag), and (3) the simulation kernel executing faster-than-real-time replicas. OPC-UA address space maps naturally: object nodes become entities, variables become state attributes, and subscriptions inject events with bounded jitter. Fidelity management — deciding when telemetry corrections versus pure model propagation dominate — is the central engineering decision.

## Mathematical Formulation
### State Estimation Synchronization
Model state $\hat{x}_{t+\Delta t}$ propagated by the DES transition function $f$ and corrected against measurement $y_t$ through an Extended Kalman Filter formulation:

$$\hat{x}_{t+\Delta t} = f(x_t, u_t; \boldsymbol{\theta}) + \mathbf{K}_t\left(y_t - h(x_t)\right)$$

with Kalman gain $\mathbf{K}_t$ weighting model-versus-sensor trust based on covariance evolution; $h(\cdot)$ maps model states to observable tag space.

### Lookahead Bottleneck Prediction
Monte Carlo rollout of the twin over horizon $\tau$ estimates future utilization distribution per station:

$$P(B_k) = \frac{1}{S}\sum_{s=1}^S \mathbb{I}\left( \text{Utilization}_{k,s}(t+\tau) \ge 0.95 \right)$$

Stations with $P(B_k)$ above threshold trigger proactive interventions (rebalancing staffing, WIP caps via CONWIP adjustment).

### Drift Detection
Model-reality divergence monitored via normalized residual:

$$\epsilon(t) = \frac{\|y_t - h(\hat{x}_{t})\|}{\|y_t\|}, \qquad \text{resync if } E[\epsilon] > \delta_{max}$$

preventing silent drift where twin conclusions diverge from plant behavior after process changes (tooling changeover, new SKU mix); scheduled recalibration windows align twin parameters with planned engineering changes through configuration management.

## Solution Methods
- **SimPy / AnyLogic DT kernels** consuming OPC-UA subscriptions at sub-second latency.
- **Particle filtering** for non-Gaussian discrete state correction (machine modes).
- **Faster-than-real-time cloning:** parallel replica twins evaluating dispatch policies before committing them to the floor.
- **V&V protocol:** twin validation against historical SCADA traces using throughput and cycle-time confidence intervals (see Module 214 methodology); face validation with floor operators precedes statistical testing to catch structural omissions early.

## Industrial Case Study
Implementasi Digital Twin DES tersinkronisasi SCADA/OPC-UA pada lini perakitan semikonduktor 12 stasiun memprediksi bottleneck shift 4 jam sebelum penumpukan WIP terjadi: kebijakan dispatching dinamis menurunkan WIP rata-rata 22%, on-time delivery naik dari 91% menjadi 97%, dan alarm antrean mesin kritis berkurang 60% dalam tiga bulan operasi.

## Related Modules
- **Module 224 (AGV Fleet Simulation)** — intralogistics twin application.
- **Module 214 (V&V)** — mandatory verification & validation backbone.
- Module on ISA-95 Architecture — data hierarchy feeding the twin.

## References
1. Banks, J., Carson, J. S., Nelson, B. L., & Nicol, D. M. (2010). *Discrete-Event System Simulation* (5th ed.). Pearson.
2. Tao, F., Zhang, H., Liu, A., & Nee, A. Y. C. (2019). Digital twin in industry: State-of-the-art. *IEEE Transactions on Industrial Informatics*, 15(4), 2405–2415.
3. Negri, E., Fumagalli, L., & Macchi, M. (2017). A review of the roles of digital twin in CPS-based production systems. *Procedia Manufacturing*, 11, 939–948.
4. Ivanov, D., Dolgui, A., & Sokolov, B. (2024). Digital supply chain twins with simulation-based resilience analytics: Advances and research directions. *IEEE Transactions on Automation Science and Engineering*, 21(3), 2810–2826.
