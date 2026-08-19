# Module 63: TOPSIS & PROMETHEE (MCDM)

## Overview
Multi-Criteria Decision Making (MCDM) addresses problems where alternatives must be evaluated against conflicting criteria. TOPSIS and PROMETHEE are two of the most widely used outranking methods in Industrial Engineering for supplier selection, technology evaluation, facility location, and sustainability assessment.

## Core Concepts

### 1. TOPSIS (Technique for Order Preference by Similarity to Ideal Solution)
TOPSIS selects the alternative closest to the Positive Ideal Solution (PIS) and farthest from the Negative Ideal Solution (NIS).

**Step 1: Normalized Decision Matrix**
$$ r_{ij} = \frac{x_{ij}}{\sqrt{\sum_{i=1}^{m} x_{ij}^2}} $$

**Step 2: Weighted Normalized Matrix**
$$ v_{ij} = w_j \cdot r_{ij} $$

**Step 3: Ideal Solutions**
$$ A^+ = \{v_1^+, ..., v_n^+\}, \quad v_j^+ = \begin{cases} \max_i v_{ij} & j \in J^+ \\ \min_i v_{ij} & j \in J^- \end{cases} $$
$$ A^- = \{v_1^-, ..., v_n^-\}, \quad v_j^- = \begin{cases} \min_i v_{ij} & j \in J^+ \\ \max_i v_{ij} & j \in J^- \end{cases} $$

**Step 4: Separation Measures**
$$ S_i^+ = \sqrt{\sum_{j=1}^{n} (v_{ij} - v_j^+)^2}, \quad S_i^- = \sqrt{\sum_{j=1}^{n} (v_{ij} - v_j^-)^2} $$

**Step 5: Relative Closeness**
$$ C_i = \frac{S_i^-}{S_i^+ + S_i^-}, \quad 0 \leq C_i \leq 1 $$

Rank alternatives by descending $C_i$.

### 2. PROMETHEE (Preference Ranking Organization METHod for Enrichment Evaluations)
PROMETHEE uses pairwise comparisons with preference functions to build outranking relations.

**Preference Function Types:**
- Type I (Usual): $P(d) = 1$ if $d > 0$, else $0$
- Type II (U-shape): $P(d) = 1$ if $d > q$, else $0$ (indifference threshold $q$)
- Type III (V-shape): $P(d) = d/p$ if $d \leq p$, else $1$ (preference threshold $p$)
- Type IV (Level): Step function with indifference $q$ and preference $p$
- Type V (Linear): Linear between $q$ and $p$
- Type VI (Gaussian): $P(d) = 1 - e^{-d^2/2\sigma^2}$

**Aggregated Preference Index:**
$$ \pi(a,b) = \sum_{j=1}^{n} w_j P_j(f_j(a) - f_j(b)) $$

**Outranking Flows:**
$$ \phi^+(a) = \frac{1}{m-1} \sum_{b \neq a} \pi(a,b), \quad \phi^-(a) = \frac{1}{m-1} \sum_{b \neq a} \pi(b,a) $$
$$ \phi(a) = \phi^+(a) - \phi^-(a) \quad \text{(Net flow for PROMETHEE II complete ranking)} $$

### 3. Comparison: TOPSIS vs PROMETHEE
| Feature | TOPSIS | PROMETHEE |
|---------|--------|-----------|
| Compensation | Full | Partial (via thresholds) |
| Thresholds | None | Indifference & preference |
| Output | Complete ranking | Partial (I) or Complete (II) |
| Sensitivity | Distance-based | Preference-function based |
| Best for | Clear quantitative data | Mixed qual/quant, stakeholder prefs |

## Modern Applications (2023–2026)
- **Green Supplier Selection**: Hybrid AHP-TOPSIS/PROMETHEE integrating carbon footprint, circular economy indicators, and ESG scores.
- **Industry 4.0 Technology Adoption**: Evaluating IoT, AI, robotics investments under uncertainty using fuzzy PROMETHEE.
- **Sustainable Manufacturing**: Multi-objective process parameter optimization combining DEA with TOPSIS for energy-quality trade-offs.
- **Healthcare Resource Allocation**: PROMETHEE-GAIA visual analytics for hospital capacity planning post-pandemic.
- **Fuzzy Extensions**: Intuitionistic fuzzy TOPSIS, Pythagorean fuzzy PROMETHEE for handling expert hesitation and linguistic vagueness.

## Key References
1. Hwang, C.L., & Yoon, K. (1981). *Multiple Attribute Decision Making: Methods and Applications*. Springer.
2. Brans, J.P., & Vincke, P. (1985). A preference ranking organisation method. *Management Science*, 31(6), 647-656.
3. Keshavarz-Ghorabaee, M., et al. (2023). A new hybrid MCDM approach based on TOPSIS and PROMETHEE for sustainable supplier selection. *Journal of Cleaner Production*, 389, 136078.
4. Zavadskas, E.K., Turskis, Z., & Kildienė, S. (2024). State-of-art survey of MCDM methods in construction and manufacturing. *Automation in Construction*, 158, 105189.

## Learning Outcomes
- Construct normalized and weighted decision matrices for TOPSIS.
- Select appropriate PROMETHEE preference functions based on criterion semantics.
- Interpret net outranking flows and partial rankings.
- Apply fuzzy extensions to handle uncertainty in expert judgments.
- Critically compare compensatory vs non-compensatory MCDM approaches.
</content>