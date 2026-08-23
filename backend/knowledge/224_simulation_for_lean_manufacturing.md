# Module 224: AGV Fleet Simulation, Battery Charging Scheduling & Automated Warehouse Routing

## Conceptual Framework
Discrete-event and agent-based simulation for Automated Guided Vehicle (AGV) and Autonomous Mobile Robot (AMR) fleets models the coupled dynamics of transport demand, traffic management, and energy logistics. Unlike manual forklift operations, AGV fleets introduce three interdependent stochastic processes: (1) **task arrival** from upstream systems (WMS/ERP order releases), (2) **conflict-free routing** on shared grid networks with intersection blocking and deadlock risk, and (3) **battery State-of-Charge (SoC) evolution** constraining mission feasibility. Simulation is the only tractable evaluation method because closed-form queueing approximations break down under non-stationary arrivals, finite buffers, and spatial contention. Key performance indicators: throughput per hour, order cycle time percentiles, fleet utilization, charger queue length, and depth-of-discharge cycles affecting battery life. Input modeling fits time-stamped WMS order logs to non-stationary arrival processes (sinusoidal daily peaks plus Weibull inter-arrival tails).

## Mathematical Formulation
### Battery State-of-Charge Dynamics
Continuous SoC evolution per vehicle $k$ between charging events:

$$\text{SoC}_k(t) = \text{SoC}_k(t_0) - \int_{t_0}^{t} \frac{I_{\text{discharge}}(s)}{C_{\text{nominal}}}\, ds + \sum_{c} \frac{1}{C_{\text{nominal}}} \int_{t_{c,start}}^{t_{c,end}} I_c(\tau)\, d\tau$$

with discharge current driven by payload mass, acceleration profile, and floor gradient; charging follows a CC-CV (constant-current/constant-voltage) curve with asymptotic tail. Cycle-life degradation follows a rainflow-counted depth-of-discharge model, Arrhenius-corrected for cell temperature:

$$N_{cycles}(DOD) = N_0 \cdot DOD^{-\beta}, \qquad L_{battery}(t) = \left( \sum_i \frac{n_i}{N(DOD_i)} \right)^{-1}$$

### Fleet Scheduling Objective
Minimize total system time subject to SoC feasibility:

$$\min \sum_{k=1}^{V} \left( T_{\text{travel},k} + T_{\text{charge},k} + T_{\text{wait},k} \right) \quad \text{s.t. } \text{SoC}_k(t) \ge \text{SoC}_{min},\; \forall t,\; k$$

Conflict-free routing adds node-occupancy constraints: $\sum_k x_{k,v,t} \le 1$ for every grid vertex $v$ at time step $t$, turning routing into a multi-agent path finding (MAPF) problem solved via prioritized planning or CBS (Conflict-Based Search); deadlock avoidance additionally reserves edge capacity over lookahead windows.

## Solution Methods
- **DES in SimPy/FlexSim:** process-interaction modeling of vehicle agents, chargers as resource pools with capacity limits.
- **Agent-based simulation:** decentralized bidding for tasks (auction-based task allocation) emergent congestion study.
- **Simulation-based optimization:** OptQuest / Bayesian optimization over fleet size, charger count, and SoC dispatch thresholds.
- **MAPF integration:** windowed replanning under real-time telemetry.

## Industrial Case Study
Simulasi armada 24 unit AMR gudang e-commerce (SimPy, 30 hari operasi virtual) meminimalkan antrean charging station melalui kebijakan opportunistic-charging saat idle dan threshold dinamis berbasis antrian tugas: throughput pengambilan pesanan naik 31%, utilisasi armada mencapai 78%, dan antrean charger turun dari rata-rata 6,2 menjadi 1,8 unit tanpa investasi station tambahan; analisis sensitivitas fleet size mengonfirmasi titik diminishing returns pada 26 unit AMR.

## Related Modules
- **Module 225 (Digital Twin DES)** — live-telemetry extension of this offline model.
- **Module 146 (Container Loading/Axle Loads)** — physical loading constraints upstream.
- Module on Warehouse Slotting & Order Picking — demand generation layer.

## References
1. Tompkins, J. A., White, J. A., Bozer, Y. A., & Tanchoco, J. M. A. (2010). *Facilities Planning* (4th ed.). Wiley.
2. Vis, I. F. A. (2006). Survey of research in the design and control of automated guided vehicle systems. *European Journal of Operational Research*, 170(3), 677–709.
3. Stern, R., et al. (2019). Multi-agent pathfinding: Definitions, variants, and benchmarks. *Symposium on Combinatorial Search (SoCS)*.
4. Fransen, J., van Eekelen, J., & Adan, I. (2024). Energy-aware scheduling of AGV fleets with battery degradation considerations. *Computers & Operations Research*, 166, 106620.
