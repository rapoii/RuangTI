# Module 262: Definitive Screening Designs (DSD) & Non-Linear Factorial Optimization in R&D

## Overview
Definitive Screening Designs (DSD) by Jones & Nachtsheim (2011) for early-stage process optimization: Three-level designs with $2k + 1$ runs that identify main effects, estimate pure quadratic effects without confounding by two-factor interactions, and orthogonal main effects to all second-order terms.

## Mathematical Formulation
$$N_{\text{runs}} = 2k + 1 \quad (k = \text{Jumlah Faktor Numerik})$$
$$\text{Cov}(\hat{\beta}_i, \hat{\beta}_j) = 0, \quad \text{Cov}(\hat{\beta}_i, \hat{\beta}_{ii}) = 0, \quad \text{Cov}(\hat{\beta}_i, \hat{\beta}_{jk}) = 0$$

## Industrial Case Study
Skrining simultan 8 faktor parameter cetakan injeksi plastik presisi tinggi (suhu leleh, tekanan injeksi, waktu pendinginan, dll) hanya dalam 17 kali uji coba.

## References
1. Jones, B., & Nachtsheim, C. J. (2011). A class of three-level designs for definitive screening in the presence of second-order effects. Journal of Quality Technology, 43(1), 1-15.
2. Montgomery, D. C. (2020). Design and Analysis of Experiments (10th ed.). Wiley.
