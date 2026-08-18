# Module 264: Process Capability Index (Cpk) Advanced

## Overview

Process Capability Indices (PCIs) quantify the ability of a manufacturing process to produce output within specification limits. While basic $C_p$ and $C_{pk}$ are widely taught, advanced industrial engineering practice requires handling non-normal distributions, multivariate characteristics, asymmetric tolerances, and measurement system uncertainty. This module covers these advanced topics with rigorous mathematical foundations aligned with ISO 22514 and AIAG PPAP standards.

## Fundamental Capability Indices Revisited

The classical indices assume normality and stable processes:

$$
C_p = \frac{USL - LSL}{6\sigma}
$$

$$
C_{pk} = \min\left(\frac{USL - \mu}{3\sigma}, \frac{\mu - LSL}{3\sigma}\right)
$$

Where $\mu$ is the process mean, $\sigma$ is the within-subgroup standard deviation, and USL/LSL are upper/lower specification limits. The relationship $C_{pk} \leq C_p$ always holds, with equality only when the process is perfectly centered.

**Critical distinction**: $\sigma$ must be estimated from within-subgroup variation ($\bar{R}/d_2$ or $\bar{s}/c_4$), NOT from overall sample standard deviation. Using overall $\sigma$ yields $P_p$/$P_{pk}$ (performance indices), which conflate common-cause and special-cause variation and are inappropriate for capability assessment of stable processes.

## Non-Normal Process Capability

Many industrial processes follow non-normal distributions (skewed machining times, Weibull failure data, lognormal particle sizes). Applying normal-based $C_{pk}$ to such data produces misleading results.

### Clements' Method (Percentile-Based)

For non-normal data, replace $\mu \pm 3\sigma$ with actual percentiles:

$$
C_{pk}^{non-normal} = \min\left(\frac{USL - x_{0.99865}}{x_{0.99865} - x_{0.50}}, \frac{x_{0.50} - LSL}{x_{0.50} - x_{0.00135}}\right)
$$

Where $x_p$ denotes the $p$-th percentile of the fitted distribution. This preserves the probabilistic interpretation of $C_{pk}$ regardless of distribution shape.

### Box-Cox Transformation Approach

Apply power transformation to achieve approximate normality:

$$
y = \begin{cases} \frac{x^\lambda - 1}{\lambda} & \lambda \neq 0 \\ \ln(x) & \lambda = 0 \end{cases}
$$

Estimate optimal $\lambda$ via maximum likelihood, compute $C_{pk}$ on transformed data, then back-transform specification limits. Note: back-transformation of $C_{pk}$ itself is invalid; only specification limits transform.

## Asymmetric Tolerance Capability

When target $T \neq (USL+LSL)/2$, standard $C_{pk}$ misrepresents capability relative to the desired target. Taguchi's $C_{pm}$ addresses this:

$$
C_{pm} = \frac{USL - LSL}{6\sqrt{\sigma^2 + (\mu - T)^2}}
$$

This penalizes both variability AND deviation from target. For asymmetric specifications, Choi & Owen's $C_{pk}''$ provides superior discrimination:

$$
C_{pk}'' = \min\left(\frac{USL - T}{3\sqrt{\sigma^2 + (\mu - T)^2}}, \frac{T - LSL}{3\sqrt{\sigma^2 + (\mu - T)^2}}\right)
$$

## Measurement System Uncertainty Adjustment

Observed capability is degraded by gauge error. True process capability relates to observed capability through:

$$
\sigma_{observed}^2 = \sigma_{process}^2 + \sigma_{measurement}^2
$$

$$
C_{pk,true} = \frac{C_{pk,observed}}{\sqrt{1 - GR\&R^2}}
$$

Where $GR\&R = \sigma_{measurement}/\sigma_{total}$. When GR&R exceeds 30%, capability estimates become unreliable regardless of sample size. Always conduct MSA before capability studies per AIAG MSA Manual (4th ed., 2010).

## Confidence Intervals and Sample Size

Point estimates of $C_{pk}$ are insufficient for decision-making. The $(1-\alpha)$ lower confidence bound is:

$$
\hat{C}_{pk,L} = \hat{C}_{pk}\left(1 - z_{\alpha}\sqrt{\frac{1}{9n\hat{C}_{pk}^2} + \frac{1}{2(n-1)}}\right)
$$

For automotive PPAP, minimum $n=100$ is typical, but achieving narrow confidence intervals often requires $n \geq 300$. Bayesian approaches using informative priors can reduce required sample sizes by 30-50% while maintaining equivalent decision confidence (Wu et al., 2023).

## Multivariate Process Capability

For correlated quality characteristics, univariate $C_{pk}$ values are inadequate. Multivariate capability indices include:

$$
MC_{pk} = \frac{\text{Volume}(Specification Region)}{\text{Volume}(Process Region at 99.73\%)}
$$

Computed via principal component analysis or direct integration over multivariate normal density. Recent work by Chen & Wang (2024) extends this to mixed continuous-discrete quality vectors common in semiconductor manufacturing.

## References

1. ISO 22514-2:2023. *Statistical methods in process management — Capability and performance*.
2. AIAG. (2010). *Measurement Systems Analysis Reference Manual* (4th ed.).
3. Wu, C.-W., Shu, Y.-N., & Lin, P.-C. (2023). Bayesian estimation of process capability indices with measurement errors. *European Journal of Operational Research*, 305(2), 789–803.
4. Chen, K.-S., & Wang, C.-H. (2024). Multivariate process capability index for semiconductor quality characteristics. *IEEE Transactions on Semiconductor Manufacturing*, 37(1), 45–56.
5. Montgomery, D. C. (2020). *Introduction to Statistical Quality Control* (8th ed.). Wiley.
6. Kotz, S., & Lovelace, C. R. (1998). *Process Capability Indices: A Review, 1992–1997*. Journal of Applied Statistics, 25(6), 763–793.

</content>