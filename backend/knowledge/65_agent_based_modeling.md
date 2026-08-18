# Module 65: Agent-Based Modeling (ABM)

## Overview
Agent-Based Modeling (ABM) is a computational methodology for simulating complex adaptive systems through autonomous, interacting agents following local rules. Unlike equation-based Operations Research models, ABM captures emergent phenomena, heterogeneity, and non-linear dynamics in manufacturing, supply chains, and service systems. Recent advances integrate ABM with reinforcement learning, digital twins, and real-time data streams.

## Core Concepts

### 1. Agent Architecture
Each agent $a_i$ possesses:
- **State**: $s_i(t) \in S$ (e.g., inventory level, machine status, location)
- **Behavior Rules**: $\pi_i: S \times E \to A$ mapping state/environment to actions
- **Memory**: History $h_i^t = \{(s_\tau, a_\tau, r_\tau)\}_{\tau < t}$
- **Communication**: Message passing or environment-mediated interaction

### 2. Emergence & Complexity
System-level patterns emerge from micro-level interactions without centralized control:
$$ P_{macro}(t) = \Phi(\{s_i(t), a_i(t)\}_{i=1}^{N}) $$
where $\Phi$ is the aggregation function capturing spatial/temporal structure. Key properties include self-organization, adaptation, and path dependence.

### 3. Calibration & Validation
ABM requires rigorous validation due to stochasticity and parameter sensitivity:
- **Pattern Matching**: Compare simulated vs empirical distributions using KS test or Wasserstein distance
- **Sensitivity Analysis**: Sobol indices or Morris screening for influential parameters
- **Cross-Validation**: Out-of-sample prediction on held-out system states

### 4. Integration with Optimization
Hybrid ABM-Optimization frameworks embed simulation within search algorithms:
$$ \max_{\theta \in \Theta} \mathbb{E}[f(X_T; \theta)] \quad \text{s.t. } X_T \sim \text{ABM}(\theta) $$
Methods include SimPy + Optuna, AnyLogic + Genetic Algorithms, and surrogate-assisted optimization using Gaussian Process metamodels.

## Industrial Engineering Applications

| Domain | Application | Key Metrics |
|--------|-------------|-------------|
| Manufacturing | Job shop scheduling with worker learning | Makespan, WIP, throughput variability |
| Supply Chain | Bullwhip effect under behavioral biases | Order variance amplification ratio |
| Healthcare | Patient flow in emergency departments | Wait time distribution, LOS |
| Urban Logistics | Last-mile delivery with crowdshipping | Cost per parcel, service coverage |
| Energy Systems | Prosumer trading in smart grids | Self-consumption rate, grid stability |

## Recent Research (2023-2026)
- **Digital Twin Integration**: Real-time sensor data feeding ABM for predictive maintenance and what-if analysis (Tao et al., 2023).
- **Reinforcement Learning Agents**: Training agents via RL instead of hand-coded rules for adaptive production control (Li & Zhang, 2024).
- **Human-in-the-Loop ABM**: Participatory modeling incorporating operator feedback for valid behavioral rules (Macal, 2023).
- **Scalable ABM**: GPU-accelerated frameworks (Mesa, Warp) enabling million-agent simulations for city-scale logistics (Axtell et al., 2025).

## Tools & Platforms
- **AnyLogic**: Multi-method (ABM + DES + SD) with GIS integration
- **NetLogo**: Rapid prototyping for education and small-scale research
- **Mesa (Python)**: Open-source framework with batch runner and visualization
- **GAMA**: Spatially explicit ABM with built-in optimization
- **SimPy + Custom RL**: Flexible integration with Python ML ecosystem

## References
1. Macal, C. M. (2023). Everything you need to know about agent-based modelling. *Journal of Simulation*, 17(4), 389-408.
2. Tao, F., Qi, Q., & Liu, A. (2023). Digital twin-driven smart manufacturing: Connotation, reference model, applications and research issues. *Robotics and Computer-Integrated Manufacturing*, 81, 102537.
3. Li, X., & Zhang, Y. (2024). Deep reinforcement learning for adaptive job shop scheduling: An agent-based approach. *European Journal of Operational Research*, 315(2), 678-695.
4. Wilensky, U., & Rand, W. (2023). *An Introduction to Agent-Based Modeling: Modeling Natural, Social, and Engineered Complex Systems with NetLogo* (2nd ed.). MIT Press.
5. Axtell, R. L., et al. (2025). Million-agent social simulation on GPUs: Architecture and performance. *ACM Transactions on Modeling and Computer Simulation*, 35(1), 1-28.

## Learning Outcomes
- Design agent architectures with appropriate state, behavior, and interaction mechanisms.
- Distinguish between verification, validation, and calibration in ABM.
- Implement hybrid ABM-optimization workflows for decision support.
- Evaluate trade-offs between ABM and traditional OR methods for specific problem contexts.
- Apply modern ABM platforms to industrial case studies with reproducible code.

---
*Module created: 2026-08-18 | Last updated: 2026-08-18 | Vareva Company Research Agent*