# Module 261: Mixture Experiments & Simplex Formulation Design in Industrial Chemical/Materials Engineering

## Conceptual Framework

Mixture experiments are a specialized branch of response surface methodology in which the controllable factors are *proportions of ingredients* that must sum to unity. Unlike independent-factor factorial designs, mixture components are structurally correlated: raising one fraction necessarily lowers others. The experimental region collapses from a hypercube into a regular $(q-1)$-dimensional **simplex** whose $q$ vertices represent pure single-component blends. Consequently, standard polynomial models become non-estimable and must be reparameterized into Scheffé's canonical forms.

The methodology applies across formulation-intensive industries: polymer composites, alloys and powder metallurgy, food and beverage blending, paints and coatings, fuels and lubricants, ceramics, and pharmaceutical excipient design. Design families include the **Simplex Lattice** $\{q,m\}$ (evenly spaced lattice of degree $m$), the **Simplex Centroid** ($2^q - 1$ points: all pure blends, binary, ternary … up to the overall centroid), and **constrained designs** where practical limits $L_i \le x_i \le U_i$ truncate the simplex into an irregular polytope explored via extreme-vertices algorithms (McLean–Anderson) or D-optimal computer-generated designs.

## Mathematical Formulation

The fundamental constraint defining the simplex:

$$\sum_{i=1}^{q} x_i = 1, \qquad x_i \geq 0$$

Scheffé canonical polynomials remove the intercept redundancy through substitution $\beta_0 = \beta_0\sum x_i$. The quadratic form and special cubic model are:

$$\hat{y} = \sum_{i=1}^{q} \beta_i x_i + \sum_{i<j} \beta_{ij} x_i x_j + \sum_{i<j<k} \beta_{ijk} x_i x_j x_k$$

Here $\beta_{ij} > 0$ signals *synergistic* binary blending (positive nonlinear blending), while $\beta_{ij} < 0$ indicates antagonism. For the Simplex Lattice $\{q, m\}$, run count is $N = \binom{q+m-1}{m}$; for Simplex Centroid it is $N = 2^q - 1$. Constrained regions reparametrize with pseudocomponents $x_i' = (x_i - L_i)/(1 - \sum L_j)$ restoring design orthogonality inside the shrunk polytope. Multi-response optimization combines desirabilities:

$$D = \left(\prod_{r=1}^{R} d_r(\hat{y}_r)\right)^{1/R}, \quad d_r = \begin{cases}\dfrac{\hat{y}_r - L_r}{U_r - L_r} & \text{(maximize)}\\[4pt] \dfrac{U_r - \hat{y}_r}{U_r - L_r} & \text{(minimize)}\end{cases}$$

Cox's model offers an interpretable alternative expressing response change per unit directional increase of component $i$ relative to a reference blend.

## Implementation Methodology

1. Define components, physical constraints $(L_i, U_i)$, and responses; verify total-range feasibility.
2. Choose design family: lattice when full simplex is usable; centroid for screening synergies; extreme-vertices/D-optimal under tight constraints.
3. Add axial check-blend replicates and center replicates to estimate pure error and curvature lack-of-fit.
4. Fit Scheffé models, prune insignificant terms by adjusted $R^2$, and validate with confirmation runs at predicted optimum.
5. Overlay contour/trace plots to communicate blend behavior to formulation engineers.

## Industrial Applications & Case Evidence

A four-component composite polymer formulation (epoxy resin, glass fiber, calcium-carbonate filler, UV additive) optimized tensile strength and impact resistance simultaneously via a constrained extreme-vertices design, revealing strong positive fiber–resin synergy $\beta_{ij}$ while identifying the filler ceiling beyond which brittleness dominated. Analogous studies govern gasoline octane pooling, concrete admixture dosing, chocolate fat blending, and hot-melt adhesive tack/shear balance.

## Related Modules

Module 260 (Tolerance Stack-Up & Monte Carlo synthesis), Module 262 (Definitive Screening Designs), Module 263 (Multivariate CCA & SEM), Module 264 (Advanced Process Capability).

## References

1. Cornell, J. A. (2011). *Experiments with Mixtures: Designs, Models, and the Analysis of Mixture Data* (3rd ed.). Wiley.
2. Smith, W. F. (2005). *Experimental Design for Formulation*. SIAM.
3. McLean, R. A., & Anderson, V. L. (1966). Extreme vertices design of mixture experiments. *Technometrics*, 8(3), 447–454.
4. Technometrics (2024).

## 5. Ringkasan & Catatan Praktis Implementasi
Implementasi metode ini memerlukan standarisasi prosedur operasi (SOP), kalibrasi instrumen berkala, serta integrasi pemantauan real-time untuk memastikan konsistensi performa dan efisiensi sistem secara berkelanjutan.
