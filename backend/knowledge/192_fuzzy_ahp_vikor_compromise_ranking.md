# Module 192: Fuzzy AHP & VIKOR Compromise Ranking Solution

## 1. Introduction to Fuzzy Multi-Criteria Decision Making (FMCDM) in Industrial Engineering

Industrial Engineering (IE) decisions often involve imprecise, vague, or linguistic judgments—e.g., "very important" when weighting sustainability criteria or "between medium and high" when assessing supplier reliability. Traditional AHP (Saaty, 1980) assumes crisp pairwise comparisons, which can lead to inconsistent or unrealistic results. **Fuzzy AHP** integrates Fuzzy Set Theory (Zadeh, 1965) with ANP to handle this uncertainty using triangular fuzzy numbers (TFNs) or trapezoidal fuzzy numbers.

The **VIKOR** (ViseKriterijumska Optimizacija I Kompromisno Rangiranje) method, developed by Opricovic (1998), provides a compromise ranking solution by balancing maximum group utility and minimum individual regret. When combined with Fuzzy AHP, FMCDM frameworks like Fuzzy AHP + VIKOR deliver robust rankings under uncertainty.

## 2. Fuzzy Numbers and Arithmetic Operations

A **Triangular Fuzzy Number (TFN)** $\tilde{A} = (a, b, c)$ represents a fuzzy set with membership function:
$$
\mu_{\tilde{A}}(x) = \begin{cases} 
\frac{x-a}{b-a} & a \leq x \leq b \\
\frac{c-x}{c-b} & b \leq x \leq c \\
0 & \text{otherwise}
\end{cases}
$$

**Key Operations** (for TFNs $\tilde{A}_i = (a_i, b_i, c_i)$, $\tilde{B}_i = (a_i', b_i', c_i')$):
-   Addition: $\tilde{A} + \tilde{B} = (a+a', b+b', c+c')$
-   Multiplication: $\tilde{A} \times \tilde{B} = (a\cdot a', b\cdot b', c\cdot c')$
-   Division: $\tilde{A} / \tilde{B} = (a/a', b/b', c/c')$
-   Reciprocal: $\tilde{A}^{-1} = (1/c, 1/b, 1/a)$

For pairwise comparison matrices in Fuzzy AHP, use TFNs instead of crisp numbers.

## 3. Fuzzy AHP Methodology

### 3.1 Fuzzy Pairwise Comparison Matrix
Replace the crisp matrix $A = [a_{ij}]$ with fuzzy matrix $\tilde{A} = [\tilde{a}_{ij}]$ where $\tilde{a}_{ij} = (l_{ij}, m_{ij}, u_{ij})$ (lower, modal, upper values).

### 3.2 Fuzzy Eigenvector Calculation
Using the geometric mean method (Chang, 1992):
$$
\tilde{r}_i = \left( \prod_{j=1}^n \tilde{a}_{ij} \right)^{1/n}
$$
$$
\tilde{d}_i = \left( \tilde{r}_i \right)^{1/n}
$$
$$
\tilde{w}_i = \frac{\tilde{d}_i}{\sum_{i=1}^n \tilde{d}_i}
$$
Defuzzify using the centroid:
$$
w_i = \frac{w_{i1} + w_{i2} + w_{i3}}{3}
$$

### 3.3 Consistency Check
Compute fuzzy consistency ratio using fuzzy $\lambda_{max}$ and fuzzy CI:
$$
CR_f = \frac{CI_f}{RI} \quad (RI \text{ from fuzzy random index tables})
$$

## 4. VIKOR Compromise Ranking

VIKOR determines a compromise solution by measuring the distance from the ideal solution:
$$
S_i = \sum_{j=1}^n w_j \frac{|f_{ij} - f_j^*|}{|f_j^- - f_j^*|}
$$
$$
R_i = \max_j \left( w_j \frac{|f_{ij} - f_j^*|}{|f_j^- - f_j^*|} \right)
$$
Where $f_{ij}$ is the normalized performance value, $f_j^*$ and $f_j^-$ are ideal and anti-ideal values.

The VIKOR index combines group utility and individual regret:
$$
Q_i = v \frac{S_i - S^*}{S^- - S^*} + (1-v) \frac{R_i - R^*}{R^- - R^*}
$$
Where $v$ (usually 0.5) is the weight between maximum group utility and individual regret. Rank alternatives by $Q_i$; the "acceptable advantage" condition ensures stability of the ranking.

## 5. Integrated Fuzzy AHP + VIKOR Workflow

1.  Construct Fuzzy AHP hierarchy and compute fuzzy weights $w_j$ for criteria.
2.  Normalize decision matrix $f_{ij}$ using fuzzy weights.
3.  Compute $S_i$ and $R_i$ for each alternative $i$.
4.  Calculate $Q_i$ and obtain ranking.
5.  Perform sensitivity analysis by varying $v$ and fuzzy parameters.

## 6. Key References

-   Zadeh, L. A. (1965). Fuzzy sets. *Information and Control*, 8(3), 338–353.
-   Saaty, T. L. (1980). *The Analytic Hierarchy Process*. McGraw-Hill.
-   Chang, D.-Y. (1992). Extent analysis and synthetic decision making using triangular fuzzy evaluation. *Cybernetics and Systems*, 23(1), 25–44.
-   Opricovic, S. (1998). Multicriteria optimization of civil engineering systems. *Journal of Construction Engineering and Management*, 124(5), 368–375.
-   Opricovic, S., & Tzeng, G.-H. (2004). Compromise solution by MCDM methods: A comparative analysis of VIKOR and TOPSIS. *European Journal of Operational Research*, 156(2), 445–458.
-   Wang, Y.-M., & Yang, Y. (2007). Fuzzy hybrid multi-criteria decision making methods: A review. *Information Sciences*, 177(6), 1404–1422.
-   International Journal of Industrial Engineering (2023). "Fuzzy ANP-VIKOR for sustainable supplier selection in manufacturing".

</content>