# Module 225: Real-Time Digital Twin Discrete-Event Simulation & Live OPC-UA Telemetry

## Overview
Combines Discrete-Event Simulation (DES) engines (SimPy / AnyLogic) with live OPC-UA/MQTT industrial telemetry to produce real-time dynamic digital twins capable of online what-if analysis, predictive bottleneck shifts, and dynamic dispatching.

## Mathematical Formulation
$$\hat{x}_{t+\Delta t} = f(x_t, u_t; \boldsymbol{\theta}) + \mathbf{K}_t (y_t - h(x_t)) \quad (\text{State Estimation via Extended Kalman Filter})$$
$$\text{Lookahead Bottleneck Probability: } P(B_k) = \dfrac{1}{S} \sum_{s=1}^S \mathbb{I}\left( \text{Utilization}_{k, s}(t+\tau) \ge 0.95 \right)$$

## Industrial Case Study
Implementasi Digital Twin DES tersinkronisasi SCADA pada lini perakitan semikonduktor 12 stasiun memprediksi bottleneck 4 jam sebelum terjadi penumpukan WIP.

## References
1. Banks, J. et al. (2020). Discrete-Event System Simulation (5th ed.). Pearson.
2. IEEE Transactions on Automation Science and Engineering (2024).
