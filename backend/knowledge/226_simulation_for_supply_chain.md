# Module 226: Simulation for Supply Chain Management

## Overview

Supply chain simulation has evolved from simple inventory models to comprehensive digital twin frameworks integrating discrete-event simulation (DES), agent-based modeling (ABM), and system dynamics (SD). Modern supply chain digital twins leverage IoT data streams, machine learning predictions, and real-time optimization to enable proactive disruption management and resilience planning. Recent research demonstrates that combining DES with neural networks significantly improves recovery prediction accuracy under flood-type disruptions (Elsevier, 2025), while blockchain integration enhances traceability and trust in multi-tier supply networks (MDPI, 2025).

## Inventory Optimization via Simulation

### Economic Order Quantity Extensions
Classical EOQ assumes deterministic demand; simulation handles stochastic reality:

$$EOQ = \sqrt{\frac{2DS}{H}}$$

Where $D$ is annual demand, $S$ is ordering cost, and $H$ is holding cost per unit. Under stochastic demand, reorder point becomes:

$$ROP = d \cdot L + SS$$

$$SS = z_\alpha \cdot \sigma_d \cdot \sqrt{L}$$

Simulation optimizes $(R, Q)$ policies by evaluating total cost surfaces:

$$TC(Q, R) = \frac{D}{Q}S + H\left(\frac{Q}{2} + R - dL\right) + \frac{n(R)}{Q}p_u$$

Where $n(R)$ is expected shortage per cycle and $p_u$ is unit penalty cost.

### Multi-Echelon Inventory Systems
Serial and divergent systems require echelon stock concepts:

$$EchelonStock_j = OnHand_j + Pipeline_j - Backorders_{j+1}$$

Simulation captures bullwhip effect amplification:

$$Var(D_n) > Var(D_{n-1}) > \cdots > Var(D_1)$$

Variance ratio quantifies amplification at each stage. Information sharing and VMI strategies are tested virtually before implementation.

### Safety Stock Under Uncertainty
Demand-supply mismatch risk requires dynamic safety stock:

$$SS_t = f(\sigma_{demand}, \sigma_{supply}, L, SL_t)$$

Simulation evaluates service level trade-offs across product portfolios, enabling differentiated service strategies (ABC/XYZ segmentation).

## Network Design and Optimization

### Facility Location Models
P-median and capacitated facility location problems are solved via simulation-optimization:

$$\min \sum_{i}\sum_{j} c_{ij} x_{ij} d_i$$

Subject to capacity and coverage constraints. Simulation validates solutions under demand uncertainty and disruption scenarios.

### Transportation Network Simulation
Vehicle routing with stochastic travel times:

$$\min E\left[\sum_{k}\sum_{i}\sum_{j} t_{ij} x_{ijk}\right]$$

Monte Carlo simulation evaluates route robustness and on-time delivery probabilities. Cross-docking and milk-run strategies are compared through DES models.

### Global Supply Chain Risk Modeling
Geopolitical, natural disaster, and pandemic risks require scenario-based simulation:

$$Risk = \sum_{s} p_s \cdot Impact_s$$

Resilience metrics include Time-to-Recovery (TTR), Time-to-Survive (TTS), and Value-at-Risk (VaR):

$$VaR_\alpha = \inf\{l : P(Loss > l) \leq \alpha\}$$

## Digital Twin Frameworks for Supply Chains

### Three-Phase Digital Twin Architecture
Recent frameworks integrate DES with predictive analytics:

1. **Data Acquisition Phase**: IoT sensors, ERP/MES integration, external data feeds
2. **Model Calibration Phase**: ML-based parameter estimation, validation against historical performance
3. **Decision Support Phase**: Real-time optimization, what-if analysis, alert generation

Neural network components predict disruption impacts:

$$\hat{y} = NN(\mathbf{x}_{current}, \mathbf{x}_{disruption}; \theta)$$

Trained on historical disruption-recovery pairs to forecast KPI trajectories.

### Blockchain-Enhanced Traceability
Distributed ledger integration ensures data integrity across organizational boundaries:

$$Block_n = Hash(Block_{n-1} || Transactions_n || Nonce)$$

Smart contracts automate compliance verification and payment triggers based on simulated delivery confirmations.

### AI-Augmented Decision Making
Reinforcement learning agents optimize ordering policies within simulation environments:

$$Q^*(s, a) = E[R_{t+1} + \gamma \max_{a'} Q^*(s', a') | s_t=s, a_t=a]$$

Transfer learning enables rapid adaptation when supply chain configurations change.

## Resilience and Disruption Management

### Stress Testing Methodologies
Supply chain stress tests evaluate performance under extreme scenarios:

$$Performance_{stressed} = f(DisruptionType, Severity, Duration, MitigationActions)$$

Key resilience indicators:
- **Absorptive Capacity**: Maximum disruption absorbable without performance degradation
- **Adaptive Capacity**: Speed of operational adjustment during disruption
- **Restorative Capacity**: Recovery time to pre-disruption performance levels

### Redundancy vs. Efficiency Trade-offs
Simulation quantifies the cost of resilience:

$$Cost_{resilient} = Cost_{lean} + \Delta Cost_{redundancy}$$

$$Benefit_{resilient} = E[Loss_{lean}] - E[Loss_{resilient}]$$

Optimal redundancy level maximizes net present value of resilience investments.

### Supplier Portfolio Optimization
Multi-sourcing strategies balance concentration risk against volume discounts:

$$\min \sum_{i} c_i(q_i) \cdot q_i + \lambda \cdot Risk(\mathbf{q})$$

Simulation evaluates supplier failure cascades and qualification timelines for backup sources.

## Software Platforms

- **AnyLogic**: Multi-method supply chain modeling with GIS integration
- **Simul8**: Rapid supply chain DES with built-in inventory templates
- **LLamasoft (Coupa)**: Enterprise supply chain design and planning
- **FlexSim**: 3D warehouse and distribution center simulation
- **IBM Supply Chain Intelligence Suite**: AI-powered digital twin platform

## Case Studies

Recent applications demonstrate measurable impact:
- Digital twin framework combining DES and neural networks improved flood recovery prediction by 40% (Elsevier, 2025)
- Blockchain-integrated supply chain twin enhanced traceability and reduced dispute resolution time by 65% (MDPI, 2025)
- Automotive OEM achieved 25% inventory reduction while maintaining 98% service level through simulation-optimized multi-echelon policies

## References

1. Elsevier (2025). A conceptual digital twin framework for supply chain recovery leveraging discrete event simulation and neural networks. *Supply Chain Analytics*, 9, 100347.
2. MDPI (2025). State of the Art of Digital Twins in Improving Supply Chain Resilience. *Logistics*, 9(1), 22.
3. Taylor & Francis (2025). A supply chain digital twin for resilience analysis under disruption. *International Journal of Production Research*. DOI: 10.1080/00207543.2025.2551243
4. ResearchGate (2025). Digital Twins in Supply Chain Simulation and Optimization. DOI: 10.13140/RG.2.2.391667552
5. Simchi-Levi, D., Chen, X., & Bramel, J. (2023). *The Logic of Logistics: Theory, Algorithms, and Applications for Logistics Management* (4th ed.). Springer.
6. Chopra, S., & Meindl, P. (2024). *Supply Chain Management: Strategy, Planning, and Operation* (8th ed.). Pearson.
</content>

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
