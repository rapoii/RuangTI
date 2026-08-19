# Module 260: Statistical Tolerance Stack-Up Analysis & Monte Carlo Geometric Synthesis

## Overview
Advanced statistical tolerance analysis: Worst-Case (WC), Root Sum of Squares (RSS), Modified RSS (Bender / Spotts / Gilson factors), and Monte Carlo simulation for 3D non-linear tolerance stack-up in precision mechanical assemblies.

## Mathematical Formulation
$$\text{Worst-Case: } T_{\text{assembly}} = \sum_{i=1}^n |c_i| T_i$$
$$\text{Statistical RSS: } T_{\text{assembly}} = \sqrt{\sum_{i=1}^n c_i^2 T_i^2}, \quad \text{Modified RSS: } T_{\text{assembly}} = C_f \cdot Z_{\alpha/2} \sqrt{\sum_{i=1}^n \sigma_i^2}$$

## Industrial Case Study
Analisis tolerance stack-up 18 komponen gearbox presisi robotik mengurangi kebutuhan seleksi manual (selective assembly) hingga 76%.

## References
1. Creveling, C. M. (2018). Tolerance Design: A Handbook for Developing Optimal Specifications. Addison-Wesley.
2. ASME B89.7.2: Dimensional Measurement Planning.
