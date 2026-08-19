# Module 224: AGV Fleet Simulation, Battery Charging Scheduling & Automated Warehouse Routing

## Overview
Discrete-event and agent-based simulation for Automated Guided Vehicles (AGV) and Autonomous Mobile Robots (AMR) fleets. Focuses on battery State-of-Charge (SoC) degradation modeling, dynamic charging slot allocation, and conflict-free routing grid networks.

## Mathematical Formulation
$$\text{SoC}(t) = \text{SoC}(t_0) - \int_{t_0}^t \dfrac{I_{\text{discharge}}(s)}{C_{\text{nominal}}} \, ds$$
$$\min \sum_{k=1}^V \left( T_{\text{travel}, k} + T_{\text{charge}, k} + T_{\text{wait}, k} \right) \quad \text{s.t. } \text{SoC}_k(t) \ge \text{SoC}_{\text{min}}, \, \forall t$$

## Industrial Case Study
Simulasi armada 24 unit AMR gudang e-commerce meminimalkan antrean charging station dan meningkatkan throughput pengambilan pesanan sebesar 31%.

## References
1. Tompkins, J. A. et al. (2020). Facilities Planning (4th ed.). Wiley.
2. Computers & Operations Research (2024 Academic Edition).
