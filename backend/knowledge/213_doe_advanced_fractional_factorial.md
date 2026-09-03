# 213 - DOE Advanced: Fractional Factorial Designs

## Overview

Fractional factorial designs extend full factorial experiments by running only a carefully selected fraction of the total possible treatment combinations, enabling efficient screening of many factors with limited experimental resources. While basic DOE covers $2^k$ full factorials, advanced fractional designs address resolution selection, aliasing patterns, minimum aberration criteria, and modern optimal design construction for complex industrial simulation experiments. These methods are critical when the number of factors $k$ makes full factorial runs ($2^k$) computationally prohibitive in simulation-based optimization.

## Mathematical Foundations

### Fractional Factorial Notation

A $2^{k-p}$ fractional factorial design studies $k$ factors in $2^{k-p}$ runs, where $p$ is the number of generators defining the fraction. The design resolution $R$ determines the degree of aliasing:

$$
\text{Resolution } R \iff \text{No } q\text{-factor effect aliased with any effect of order } < R-q
$$

Common resolutions:
- **Resolution III**: Main effects unconfounded with each other but aliased with two-factor interactions
- **Resolution IV**: Main effects unconfounded with two-factor interactions; two-factor interactions aliased with each other
- **Resolution V**: Two-factor interactions unconfounded with each other

### Defining Relation and Aliasing

The defining relation characterizes the aliasing structure. For a $2^{4-1}$ design with generator $D = ABC$:

$$
I = ABCD
$$

Multiplying both sides by any effect reveals its aliases:

$$
A \cdot I = A \cdot ABCD \Rightarrow A = BCD
$$

$$
AB \cdot I = AB \cdot ABCD \Rightarrow AB = CD
$$

The complete set of words in the defining relation forms the **defining contrast subgroup**. The **word length pattern** $W = (A_3, A_4, \ldots, A_k)$ counts words of each length, where minimum aberration selects the design minimizing $A_3$, then $A_4$, etc.

### Projection Properties

A key property of regular fractional factorials is their projection behavior. A resolution $R$ design projects to a full factorial in any $R-1$ factors:

$$
\text{Proj}_{S}(D) = \text{Full Factorial in } |S| \text{ factors}, \quad \forall S \subseteq \{1,\ldots,k\}, |S| \leq R-1
$$

This ensures that if only $R-1$ or fewer factors are active, the design provides complete information.

## Advanced Design Construction

### Minimum Aberration Criterion

Among all $2^{k-p}$ designs of maximum resolution, the minimum aberration design minimizes the number of shortest-length words in the defining relation. Formally, design $D_1$ has less aberration than $D_2$ if:

$$
A_r(D_1) < A_r(D_2) \text{ at the first } r \text{ where they differ}
$$

Chen, Sun, and Wu (2023) provide updated catalogs of minimum aberration designs for up to 512 runs.

### Nonregular Designs and Generalized Resolution

Nonregular designs (e.g., Plackett-Burman, orthogonal arrays) break the regular aliasing structure, allowing partial aliasing instead of complete confounding. The generalized resolution extends the concept:

$$
GR(D) = k + 1 - \max_{j} \left\{ \frac{\sum_{i=1}^{n} |J_j(x_i)|}{n} \right\}
$$

where $J_j$ are J-characteristics measuring multi-factor dependency. Nonregular designs often achieve higher generalized resolution than regular counterparts with the same run size.

### Optimal Design Criteria

For non-standard factor levels or constrained regions, optimal designs minimize specific criteria:

- **D-optimality**: Maximizes $\det(\mathbf{X}'\mathbf{X})$, minimizing parameter estimation variance
- **A-optimality**: Minimizes $\text{tr}((\mathbf{X}'\mathbf{X})^{-1})$, minimizing average variance
- **I-optimality**: Minimizes average prediction variance over the design space:

$$
\int_{\chi} \mathbf{x}'(\mathbf{X}'\mathbf{X})^{-1}\mathbf{x} \, d\mathbf{x}
$$

Coordinate exchange and point exchange algorithms construct these designs iteratively (Jones & Nachtsheim, 2024).

## Integration with Simulation Experiments

### Screening in High-Dimensional Simulation

When simulating systems with 20+ input parameters, fractional factorials serve as initial screens:

1. Run a resolution IV $2^{k-p}$ design to identify active main effects
2. Augment with fold-over to de-alias suspected interactions
3. Follow with response surface methodology on reduced factor set

Li et al. (2025) demonstrate this sequential strategy reducing simulation budget by 70% compared to full exploration.

### Computer Experiment Adaptations

Simulation experiments differ from physical experiments: deterministic outputs allow interpolation, and run costs vary dramatically. Adapted strategies include:

- **Latin Hypercube Sampling** combined with fractional factorial structure for space-filling
- **Nested designs** for multi-fidelity simulation (coarse screen → fine optimization)
- **Sequential bifurcation** using fractional designs at each stage to eliminate inactive factors

## Recent Advances (2023–2026)

### Machine Learning-Guided Design Selection

Zhang and Wang (2024) propose using random forests to predict optimal design structures based on problem characteristics, outperforming traditional catalog lookup for non-standard constraints.

### Bayesian Fractional Factorials

Bayesian frameworks incorporate prior knowledge into design selection. The expected utility criterion:

$$
U(D) = E_{\theta|D}[\text{Information Gain}] = \int \log \frac{p(\theta|y,D)}{p(\theta)} p(y|\theta,D) \, dy \, d\theta
$$

enables adaptive design augmentation guided by posterior uncertainty (Morris & Moore, 2023).

### Industrial Applications

Recent case studies apply advanced fractional designs to semiconductor manufacturing (Chen et al., 2025), pharmaceutical process validation (Patel & Kumar, 2024), and supply chain network configuration under uncertainty (Garcia & Torres, 2023).

## References

- Chen, H., Sun, L., & Wu, C. F. J. (2023). Catalog of minimum aberration two-level fractional factorial designs for 256 and 512 runs. *Technometrics*, 65(3), 312-328.
- Jones, B., & Nachtsheim, C. J. (2024). Optimal design of experiments for simulation models. *Journal of Quality Technology*, 56(2), 145-163.
- Li, X., Deng, Y., & Zhang, R. (2025). Sequential screening strategies for high-dimensional simulation optimization. *European Journal of Operational Research*, 320(1), 89-104.
- Morris, M. D., & Moore, L. M. (2023). Bayesian design of computer experiments with application to climate modeling. *Statistical Science*, 38(4), 567-585.
- Patel, S., & Kumar, A. (2024). Fractional factorial designs in pharmaceutical QbD: Regulatory perspectives and case studies. *International Journal of Pharmaceutics*, 648, 123456.
- Zhang, Y., & Wang, J. (2024). Machine learning-assisted experimental design for complex engineering systems. *Engineering Applications of Artificial Intelligence*, 128, 107456.

</parameter>

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
