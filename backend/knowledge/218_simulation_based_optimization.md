# Module 218: Kriging Surrogate Modeling & Bayesian Gaussian Process Optimization in Simulation

## Overview
Surrogate-assisted optimization methods for computationally expensive discrete-event or finite-element industrial simulations: Ordinary Kriging, Gaussian Process Regression, Design of Experiments (Latin Hypercube Sampling / LHS), and Expected Improvement (EI) active learning infill criteria.

## Mathematical Formulation
$$\hat{y}(\mathbf{x}) = \hat{\mu} + \mathbf{r}(\mathbf{x})^T \mathbf{R}^{-1} (\mathbf{y} - \mathbf{1}\hat{\mu})$$
$$s^2(\mathbf{x}) = \sigma^2 \left( 1 - \mathbf{r}(\mathbf{x})^T \mathbf{R}^{-1} \mathbf{r}(\mathbf{x}) + \dfrac{(1 - \mathbf{1}^T \mathbf{R}^{-1} \mathbf{r}(\mathbf{x}))^2}{\mathbf{1}^T \mathbf{R}^{-1} \mathbf{1}} \right)$$

## Industrial Case Study
Optimasi tata letak stasiun kerja dan kapasitas buffer lini perakitan kompleks menggunakan Kriging model menghemat 94% waktu komputasi simulasi Monte Carlo.

## References
1. Forrester, A., Sobester, A., & Keane, A. (2008). Engineering Design via Surrogate Modelling: A Practical Guide. Wiley.
2. Journal of Global Optimization (2024).
