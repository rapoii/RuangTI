# Module 265: Dynamic Real-Time Optimization (D-RTO) & Model Predictive Control (MPC) in Continuous Processing

## Overview
Two-layer advanced process control architecture: Dynamic Real-Time Optimization (D-RTO) computing economic setpoints based on rigorous non-linear dynamic models, coupled with Model Predictive Control (MPC) tracking setpoints under hard actuator and state constraints in refineries and chemical plants.

## Mathematical Formulation
$$\min_{\mathbf{u}} \sum_{k=0}^{N_p} \|\mathbf{y}_{t+k|t} - \mathbf{r}_{t+k}\|_{\mathbf{Q}}^2 + \sum_{k=0}^{N_c-1} \|\Delta \mathbf{u}_{t+k|t}\|_{\mathbf{R}}^2$$
$$\text{s.t. } \mathbf{x}_{k+1} = \mathbf{A} \mathbf{x}_k + \mathbf{B} \mathbf{u}_k, \quad \mathbf{u}_{\min} \le \mathbf{u}_k \le \mathbf{u}_{\max}, \quad \Delta \mathbf{u}_{\min} \le \Delta \mathbf{u}_k \le \Delta \mathbf{u}_{\max}$$

## Industrial Case Study
Implementasi D-RTO dan Multivariable MPC pada kolom distilasi minyak bumi menstabilkan kemurnian fraksi bensin dan menghemat konsumsi energi reboiler sebesar 7.8%.

## References
1. Camacho, E. F., & Alba, C. B. (2013). Model Predictive Control (2nd ed.). Springer.
2. Computers & Chemical Engineering (2024).
